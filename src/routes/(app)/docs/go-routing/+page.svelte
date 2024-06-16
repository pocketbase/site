<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase uses
    <a href="https://github.com/labstack/echo" target="_blank" rel="noopener noreferrer">echo (v5)</a>
    for routing. The internal router is exposed in the <code>app.OnBeforeServe</code> event hook and you can register
    your own custom endpoints and/or middlewares the same way as using directly echo.
</p>

<Toc />

<HeadingLink title="Routes" />

<HeadingLink title="Registering new routes" tag="h5" />
<p>
    Each route consists of at least a path and a handler function. For example, the below code registers
    <code>GET /hello/:name</code> route that responds with a json body:
</p>
<CodeBlock
    language="go"
    content={`
        import (
            "log"
            "net/http"

            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/hello/:name", func(c echo.Context) error {
                name := c.PathParam("name")

                return c.JSON(http.StatusOK, map[string]string{"message": "Hello " + name})
            }, /* optional middlewares */)

            return nil
        })
    `}
/>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            To avoid collisions with future internal routes you should avoid using the <code>/api/...</code>
            base path or consider combining it with a unique prefix like <code>/api/myapp/...</code>.
        </p>
    </div>
</div>

<p>There are several <code>Router</code> methods available, but the most common ones are:</p>
<CodeBlock
    language="go"
    content={`
        e.Router.GET(path, handler, [middlewares...])
        e.Router.POST(path, handler, [middlewares...])
        e.Router.PUT(path, handler, [middlewares...])
        e.Router.PATCH(path, handler, [middlewares...])
        e.Router.DELETE(path, handler, [middlewares...])
        e.Router.OPTIONS(path, handler, [middlewares...])
        e.Router.HEAD(path, handler, [middlewares...])
    `}
/>

<p>
    Each handler function receives a <strong>echo request context</strong> argument (usually named
    <code>c</code>).
    <br />
    The request context is also accessible in the event request hooks under the <code>HttpContext</code>
    field.
    <br />
    Below you can find common request context operations.
</p>

<HeadingLink title="Request context store" tag="h5" />
<p>
    The request context comes with a local store that you can use to share data related only to the current
    request between routes and middlewares.
</p>
<CodeBlock
    language="go"
    content={`
        // store for the duration of the request
        c.Set("someKey", 123)

        // retrieve later
        val := c.Get("someKey").(int) // 123
    `}
/>

<HeadingLink title="Retrieving the current auth state" tag="h5" />
<p>
    We also use the store to manage the current auth state with the <code>admin</code> and
    <code>authRecord</code> special keys.
</p>
<CodeBlock
    language="go"
    content={`
        admin, _ := c.Get(apis.ContextAdminKey).(*models.Admin)
        record, _ := c.Get(apis.ContextAuthRecordKey).(*models.Record)

        // alternatively, you can also read the auth state form the cached request info
        info   := apis.RequestInfo(c)
        admin  := info.Admin      // nil if not authenticated as admin
        record := info.AuthRecord // nil if not authenticated as regular auth record

        isGuest := admin == nil && record == nil
    `}
/>

<HeadingLink title="Reading path parameters" tag="h5" />
<p>
    Path parameters are defined with <code>:paramName</code> placeholder and can be retrieved using
    <code>c.PathParam("paramName")</code>.
</p>
<CodeBlock language="go" content={`id := c.PathParam("id")`} />

<HeadingLink title="Reading query parameters" tag="h5" />
<CodeBlock
    language="go"
    content={`
        search := c.QueryParam("search")

        // or via the cached request object
        search := apis.RequestInfo(c).Query["search"]
    `}
/>

<HeadingLink title="Reading request headers" tag="h5" />
<CodeBlock
    language="go"
    content={`
        token := c.Request().Header.Get("Some-Header")

        // or via the cached request object (the header value is always normalized)
        token := apis.RequestInfo(c).Headers["some_header"]
    `}
/>

<HeadingLink title="Writing response headers" tag="h5" />
<CodeBlock language="go" content={`c.Response().Header().Set("Some-Header", "123")`} />

<HeadingLink title="Reading request body" tag="h5" />
<!-- prettier-ignore -->
<CodeBlock
    language="go"
    content={`
        // read the body via the cached request object
        // (this method is commonly used in hook handlers because it allows reading the body more than once)
        data := apis.RequestInfo(c).Data
        title := data["title"]

        // read/scan the request body fields into a typed struct
        // (note that a body cannot be read twice with Bind because it is a stream)
        data := struct {
            Title       string ` + "`" + `json:"title" form:"title"` + "`" + `
            Description string ` + "`" + `json:"description" form:"description"` + "`" + `
            Public      bool   ` + "`" + `json:"public" form:"public"` + "`" + `
        }{}
        if err := c.Bind(&data); err != nil {
            return apis.NewBadRequestError("Failed to read request data", err)
        }

        // read single multipart/form-data field
        title := c.FormValue("title")

        // read single multipart/form-data file
        doc, err := c.FormFile("document")
    `}
/>

<HeadingLink title="Writing response body" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // send response with json body
        c.JSON(200, map[string]any{"name": "John"})

        // send response with string body
        c.String(200, "Lorem ipsum...")

        // send response with html body
        // (check also the "Rendering templates" section)
        c.HTML(200, "<h1>Hello!</h1>")

        // redirect
        c.Redirect(307, "https://example.com")

        // send response with no body
        c.NoContent(204)
    `}
/>

<HeadingLink title="Middlewares" />
<p>
    Middlewares could be used to apply a shared behavior or to intercept and modify route requests.
    <br />
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using <code>e.Router.Use(someMiddlereFunc)</code>.
</p>
<CodeBlock
    language="go"
    content={`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            // attach a middleware globally to all routes
            e.Router.Use(someMiddlereFunc)

            // attach multiple middlewares to a single route
            // each route will execute their own middlewares + the global ones
            e.Router.GET("/hello", func(c echo.Context) error {
                return c.String(200, "Hello world!")
            }, apis.ActivityLogger(app), apis.RequireAdminAuth())
        })
    `}
/>

<HeadingLink title="Builtin middlewares" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // logs the request in the Admin UI > Logs
        apis.ActivityLogger(app)

        // requires the request client to be unauthenticated, aka. guest
        apis.RequireGuestOnly()

        // requires the request client to be authenticated as an auth record
        apis.RequireRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin
        apis.RequireAdminAuth()

        // require the request client to be authenticated as admin OR auth record
        apis.RequireAdminOrRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin OR auth record
        // that matches the ownerIdParam path parameter
        apis.RequireAdminOrOwnerAuth(ownerIdParam = "id")
    `}
/>

<HeadingLink title="Custom middlewares" tag="h5" />
<CodeBlock
    language="go"
    content={`
        func myCustomMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
            return func(c echo.Context) error {
                // eg. inspect some header value before processing the request
                header := c.Request().Header.Get("Some-Header")
                if header == "" {
                    return apis.NewBadRequestError("Invalid request", nil)
                }

                return next(c) // proceed with the request chain
            }
        }

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.Use(myCustomMiddleware)

            return nil
        })
    `}
/>

<HeadingLink title="Error response" />
<p>
    PocketBase has a global error handler and every returned or thrown <code>Error</code> from a route or
    middleware will be safely converted by default to a generic HTTP 400 error to avoid accidentally leaking
    sensitive information (the original error will be visible only in the <em>Admin UI > Logs</em> or when in
    <code>--debug</code> mode).
</p>
<p>
    To make it easier returning formatted json error responses, PocketBase provides
    <code>apis.ApiError</code> constructor that can be instantiated directly or using the builtin factories.
    <br />
    <code>ApiError.RawData()</code> will be returned in the response only if it is a map of
    <code>validation.Error</code> items.
</p>
<CodeBlock
    language="go"
    content={`
        import (
            validation "github.com/go-ozzo/ozzo-validation/v4"
            "github.com/pocketbase/pocketbase/apis"
        )

        ...

        // construct ApiError with custom status code and validation data error
        return apis.NewApiError(500, "something went wrong", map[string]validation.Error{
            "title": validation.NewError("invalid_title", "Invalid or missing title"),
        })

        // if message is empty string, a default one will be set
        return apis.NewBadRequestError(optMessage, optData)   // 400 ApiError
        return apis.NewUnauthorizedError(optMessage, optData) // 401 ApiError
        return apis.NewForbiddenError(optMessage, optData)    // 403 ApiError
        return apis.NewNotFoundError(optMessage, optData)     // 404 ApiError
    `}
/>

<HeadingLink title="Helpers" />
<p>
    The
    <a href="{import.meta.env.PB_GODOC_URL}/apis" target="_blank" rel="noopener noreferrer">
        <code>apis</code> package
    </a>
    expose several helpers you can use as part of your route hooks.
</p>

<HeadingLink title="Auth response" tag="h5" />
<p>
    <code>apis.RecordAuthResponse()</code> writes standardised json record auth response (aka. token + record data)
    into the specified request context. Could be used as a return result from a custom auth route.
</p>
<!-- prettier-ignore -->
<CodeBlock
    language="go"
    content={`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/phone-login", func(c echo.Context) error {
                data := struct {
                    Phone    string `+"`"+`json:"phone" form:"phone"`+"`"+`
                    Password string `+"`"+`json:"password" form:"password"`+"`"+`
                }{}
                if err := c.Bind(&data); err != nil {
                    return apis.NewBadRequestError("Failed to read request data", err)
                }

                record, err := app.Dao().FindFirstRecordByData("users", "phone", data.Phone)
                if err != nil || !record.ValidatePassword(data.Password) {
                    // return generic 400 error to prevent phones enumeration
                    return apis.NewBadRequestError("Invalid credentials", err)
                }

                return apis.RecordAuthResponse(app, c, record, nil)
            }, /* optional middlewares */)

            return nil
        })
    `}
/>
<HeadingLink title="Enrich record(s)" tag="h5" />
<p>
    <code>apis.EnrichRecord()</code> and <code>apis.EnrichRecords()</code> helpers parses the request context and
    enrich the provided record(s) by:
</p>
<ul>
    <li>
        expands relations (if <code>defaultExpands</code> and/or <code>?expand</code> query parameter is set)
    </li>
    <li>
        ensures that the emails of the auth record and its expanded auth relations are visible only for the
        current logged admin, record owner or record with manage access
    </li>
</ul>
<CodeBlock
    language="go"
    content={`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/custom-article", func(c echo.Context) error {
                records, err := app.Dao().FindRecordsByFilter("article", "status = 'active'", "-created", 40)
                if err != nil {
                    return apis.NewNotFoundError("No active articles", err)
                }

                // enrich the records with the "categories" relation as default expand
                apis.EnrichRecords(c, app.Dao(), records, "categories")

                return c.JSON(http.StatusOK, records)
            }, /* optional middlewares */)

            return nil
        })
    `}
/>
<HeadingLink title="Serving static files" tag="h5" />
<CodeBlock
    language="go"
    content={`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            // serves static files from the provided dir (if exists)
            e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("/path/to/public"), false))

            return nil
        })
    `}
/>

<HeadingLink title="Sending request to custom routes using the SDKs" />
<p>
    The official PocketBase SDKs expose the internal <code>send()</code> method that could be used to send requests
    to your custom route(s).
</p>
<CodeTabs
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
