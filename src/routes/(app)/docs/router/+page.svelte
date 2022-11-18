<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase uses
    <a href="https://github.com/labstack/echo" target="_blank" rel="noopener noreferrer">echo (v5)</a>
    for routing. The internal router is exposed in the <code>app.OnBeforeServe</code> event hook and you can register
    your own custom endpoints and/or middlewares the same way as using directly echo.
</p>

<Toc />

<HeadingLink title="Register new route" />
<CodeBlock
    language="go"
    content={`
        import (
            "net/http"

            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            // or you can also use the shorter e.Router.GET("/articles/:slug", handler, middlewares...)
            e.Router.AddRoute(echo.Route{
                Method: http.MethodGet,
                Path:   "/articles/:slug",
                Handler: func(c echo.Context) error {
                    record, err := app.Dao().FindFirstRecordByData("articles", "slug", c.PathParam("slug"))
                    if err != nil {
                        return apis.NewNotFoundError("The article does not exist.", err)
                    }

                    // enable ?expand query param support
                    apis.EnrichRecord(c, app.Dao(), record)

                    return c.JSON(http.StatusOK, record)
                },
                Middlewares: []echo.MiddlewareFunc{
                    apis.ActivityLogger(app),
                },
            })

            return nil
        })
    `}
/>
<div class="alert alert-info m-t-sm m-b-base">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            To avoid collisions with future internal routes it is recommended to use a unique prefix when
            adding routes to the <strong>/api</strong> base endpoint, eg. <code>/api/yourapp/...</code> path.
        </p>
    </div>
</div>

<HeadingLink title="Middlewares" />
<p>
    In addition to the
    <a
        href="https://github.com/labstack/echo/tree/v5_alpha/middleware"
        target="_blank"
        rel="noopener noreferrer">echo middlewares</a
    >, you can also make use of some PocketBase specific ones:
</p>
<CodeBlock
    language="go"
    content={`
        apis.ActivityLogger(app)
        apis.RequireGuestOnly()
        apis.RequireRecordAuth(optCollectionNames)
        apis.RequireSameContextRecordAuth()
        apis.RequireAdminAuth()
        apis.RequireAdminOrRecordAuth(optCollectionNames)
        apis.RequireAdminOrOwnerAuth(ownerIdParam = "id")
    `}
/>
<em class="txt-sm">
    List with all apis middleware and documentation could be found in the godoc of
    <a
        href="{import.meta.env.PB_REPO_URL}/blob/master/apis/middlewares.go"
        target="_blank"
        rel="noopener noreferrer"
    >
        apis/middlewares.go
    </a>
</em>
<p>You could also create your own middleware by returning <code>echo.MiddlewareFunc</code>:</p>
<CodeBlock
    language="go"
    content={`
        func myCustomMiddleware() echo.MiddlewareFunc {
            return func(next echo.HandlerFunc) echo.HandlerFunc {
                return func(c echo.Context) error {
                    // eg. inspecting some header value before processing the request
                    someHeaderVal := c.Request().Header.Get("some-header")

                    ...

                    return next(c)
                }
            }
        }
    `}
/>
<p>
    Middlewares could be registed both to a single route or globally using
    <code>e.Router.Use(myCustomMiddleware())</code>.
</p>

<HeadingLink title="Error response" />
<p>
    PocketBase has a global error handler and every returned <code>error</code> from a route or middleware
    will be safely converted by default to a generic HTTP 400 error to avoid accidentally leaking sensitive
    information (the original error will be visible only in the <em>Admin UI > Logs</em> or when in
    <code>--debug</code> mode).
</p>
<p>
    To make it easier returning formatted json error responses, PocketBase provides
    <code>apis.ApiError</code> struct that implements the <code>error</code> interface and can be instantiated
    with the following factories:
</p>
<CodeBlock
    language="go"
    content={`
        // if message is empty string, a default one will be set
        // data is optional and could be nil or the original error
        apis.NewNotFoundError(message string, data any)
        apis.NewBadRequestError(message string, data any)
        apis.NewForbiddenError(message string, data any)
        apis.NewUnauthorizedError(message string, data any)
        apis.NewApiError(status int, message string, data any)
    `}
/>

<HeadingLink title="Get logged admin or app user" />
<p>
    The current request authentication state can be accessed from the <code>echo.Context</code> in a route handler,
    middleware or request hook.
</p>

<HeadingLink title="Get logged admin or app user in a route handler" tag="h6" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/models"
        )

        ...

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/hello", func(c echo.Context) error {
                // to get the authenticated admin:
                admin, _ := c.Get(apis.ContextAdminKey).(*models.Admin)
                if admin == nil {
                    return apis.NewForbiddenError("Only admins can access this endpoint", nil)
                }

                // or to get the authenticated record:
                authRecord, _ := c.Get(apis.ContextAuthRecordKey).(*models.Record)
                if authRecord == nil {
                    return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
                }

                ...

                return c.String(200, "Hello world!")
            })

            return nil
        })
    `}
/>

<HeadingLink title="Get logged admin or app user in a middleware" tag="h6" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/models"
        )

        ...

        func myCustomMiddleware(app core.App) echo.MiddlewareFunc {
            return func(next echo.HandlerFunc) echo.HandlerFunc {
                return func(c echo.Context) error {
                    // to get the authenticated admin:
                    admin, _ := c.Get(apis.ContextAdminKey).(*models.Admin)
                    if admin == nil {
                        return apis.NewForbiddenError("Only admins can access this endpoint", nil)
                    }

                    // or to get the authenticated record:
                    authRecord, _ := c.Get(apis.ContextAuthRecordKey).(*models.Record)
                    if authRecord == nil {
                        return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
                    }

                    ...

                    return next(c)
                }
            }
        }

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.Use(myCustomMiddleware(app))

            return nil
        })
    `}
/>

<HeadingLink title="Get logged admin or app user in a request hook" tag="h6" />
<p>
    All request hooks (aka. those ending with <code>*Request</code>) expose the current request context as
    <code>e.HttpContext</code> field.
</p>
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/models"
        )

        ...

        app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
            // to get the authenticated admin:
            admin, _ := e.HttpContext.Get(apis.ContextAdminKey).(*models.Admin)
            if admin == nil {
                return apis.NewForbiddenError("Only admins can access this endpoint", nil)
            }

            // or to get the authenticated record:
            authRecord, _ := e.HttpContext.Get(apis.ContextAuthRecordKey).(*models.Record)
            if authRecord == nil {
                return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
            }

            ...

            return nil
        })
    `}
/>

<HeadingLink title="Sending request to custom routes using the SDKs" />
<p>
    The official PocketBase SDKs expose the internal <code>send()</code> method that could be used to send requests
    to your custom endpoint(s).
</p>
<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        await pb.send("/hello", {
            // for all possible options check
            // https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
            query: { "abc": 123 },
        });
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        await pb.send("/hello", query: { "abc": 123 })
    `}
/>
