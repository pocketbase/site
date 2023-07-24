<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    You can register custom routes and middlewares by using the top-level <code>routerAdd()</code>
    and <code>routerUse()</code> functions.
</p>

<Toc />

<HeadingLink title="Routes" />

<HeadingLink title="Registering new routes" tag="h5" />
<p>
    Each route consists of at least a path and a handler function. For example, the below code registers
    <code>GET /hello/:name</code> route that responds with a json body:
</p>
<CodeBlock
    language="javascript"
    content={`
        routerAdd("GET", "/hello/:name", (c) => {
            let name = c.pathParam("name")

            return c.json(200, { "message": "Hello " + name })
        }, /* optional middlewares */)
    `}
/>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            To avoid collisions with future internal routes you should avoid using the <code>/api/...</code>
            base path or consider combining it with a unique prefix like <code>/api/yourapp/...</code>.
        </p>
    </div>
</div>

<p>
    Each handler function receives a <strong>request context</strong> argument (usually named <code>c</code>).
    <br />
    The request context is also accessible in the event request hooks under the <code>httpContext</code> key.
    <br />
    Below you can find common request context operations.
</p>

<HeadingLink title="Request context store" tag="h5" />
<p>
    The request context comes with a local store that you can use to share data related only to the current
    request between routes and middlewares.
</p>
<CodeBlock
    language="javascript"
    content={`
        // store for the duration of the request
        c.set("someKey", 123)

        // retrieve later
        const val = c.get("someKey") // 123
    `}
/>

<HeadingLink title="Retrieving the current auth state" tag="h5" />
<p>
    We also use the store to manage the current auth state with the <code>admin</code> and
    <code>authRecord</code> special keys.
</p>
<CodeBlock
    language="javascript"
    content={`
        const admin   = c.get("admin")      // empty if not admin
        const record  = c.get("authRecord") // empty if not regular auth record
        const isGuest = !admin && !record
    `}
/>

<HeadingLink title="Reading path parameters" tag="h5" />
<p>
    Path parameters are defined with <code>:paramName</code> placeholder and can be retrieved using
    <code>c.pathParam("paramName")</code>.
</p>
<CodeBlock language="javascript" content={`const id = c.pathParam("id")`} />

<HeadingLink title="Reading query parameters" tag="h5" />
<CodeBlock language="javascript" content={`const search = c.queryParam("search")`} />

<HeadingLink title="Reading request headers" tag="h5" />
<CodeBlock language="javascript" content={`const token = c.request().header.get("Some-Header")`} />

<HeadingLink title="Writing response headers" tag="h5" />
<CodeBlock language="javascript" content={`c.response().header().set("Some-Header", "123")`} />

<HeadingLink title="Reading request body" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // read multiple body request fields at once
        const data = new DynamicModel({
            // describe the fields to read (used also as initial values)
            someTextField:   "",
            someNumberField: 0,
            someBoolField:   false,
            someArrayField:  [],
            someObjectField: {}, // object props are accessible via .get(key)
        })
        c.bind(data)
        console.log(data.sometextField)

        // read single multipart/form-data field
        const title = c.formValue("title")

        // read single multipart/form-data file
        const doc = c.formFile("document")
    `}
/>

<HeadingLink title="Writing response body" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // send response with json body
        c.json(200, {"name": "John"})

        // send response with string body
        c.string(200, "Lorem ipsum...")

        // send response with html body
        // (check also the "Rendering templates" section)
        c.html(200, "<h1>Hello!</h1>")

        // redirect
        c.redirect(307, "https://example.com")

        // send response with no body
        c.noContent(204)
    `}
/>

<HeadingLink title="Middlewares" />
<p>
    Middlewares could be used to apply a shared behavior or to intercept and modify route requests.
    <br />
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using <code>routerUse(someMiddlereFunc)</code>.
</p>
<CodeBlock
    language="javascript"
    content={`
        // attach a middleware globally to all routes
        routerUse(someMiddlereFunc)

        // attach multiple middlewares to a single route
        // each route will execute their own middlewares + the global ones
        routerAdd("GET", "/hello", (c) => {
            return c.string(200, "Hello world!")
        }, $apis.activityLogger($app), $apis.requireAdminAuth())
    `}
/>

<HeadingLink title="Builtin middlewares" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // logs the request in the Admin UI > Logs
        $apis.activityLogger($app)

        // requires the request client to be unauthenticated, aka. guest
        $apis.requireGuestOnly()

        // requires the request client to be authenticated as an auth record
        $apis.requireRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin
        $apis.requireAdminAuth()

        // require the request client to be authenticated as admin OR auth record
        $apis.requireAdminOrRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin OR auth record
        // that matches the ownerIdParam path parameter
        $apis.requireAdminOrOwnerAuth(ownerIdParam = "id")
    `}
/>

<HeadingLink title="Custom middlewares" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        function myCustomMiddleware(next) {
            return (c) => {
                // eg. inspect some header value before processing the request
                const header = c.request().header.get("Some-Header")
                if (!header) {
                    // throw or return an error
                    throw new BadRequestError("Invalid request")
                }

                return next(c) // proceed with the request chain
            }
        }

        routerUse(myCustomMiddleware)
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
    <code>ApiError</code> constructor that can be instantiated directly or using the builtin factories.
    <br />
    <code>ApiError.data</code> will be returned in the response only if it is a map of
    <code>ValidationError</code> items.
</p>
<CodeBlock
    language="javascript"
    content={`
        // construct ApiError with custom status code and validation data error
        throw new ApiError(500, "something went wrong", {
            "title": new ValidationError("invalid_title", "Invalid or missing title"),
        })

        // if message is empty string, a default one will be set
        throw new NadRequestError(optMessage, optData)   // 400 ApiError
        throw new UnauthorizedError(optMessage, optData) // 401 ApiError
        throw new ForbiddenError(optMessage, optData)    // 403 ApiError
        throw new NotFoundError(optMessage, optData)     // 404 ApiError
    `}
/>

<HeadingLink title="Helpers" />
<p>
    The global <code>$apis</code> namespace expose several helpers you can use as part of your route hooks.
</p>
<HeadingLink title="Auth response" tag="h5" />
<p>
    <code>$apis.recordAuthResponse()</code> writes standardised json record auth response (aka. token + record
    data) into the specified request context. Could be used as a return result from a custom auth route.
</p>
<CodeBlock
    language="javascript"
    content={`
        routerAdd("GET", "/phone-login", (c) => {
            const data = new DynamicModel({
                phone:    "",
                password: "",
            })

            c.bind(data)

            const record = $app.dao().findFirstRecordByData("users", "phone", data.phone)

            if (!record.validatePassword(data.password)) {
                throw new NadRequestError("invalid credentials")
            }

            return $apis.recordAuthResponse($app, c, record)
        }, $apis.activityLogger($app))
    `}
/>
<HeadingLink title="Enrich record(s)" tag="h5" />
<p>
    <code>$apis.enrichRecord()</code> and <code>$apis.enrichRecords()</code> helpers parses the request context
    and enrich the provided record(s) by:
</p>
<ul>
    <li>
        expands relations (if <code>defaultExpands</code> and/or <code>?expand</code> query parameter is set)
    </li>
    <li>
        ensures that the emails of the auth record and its expanded auth relations are visibe only for the
        current logged admin, record owner or record with manage access
    </li>
</ul>
<CodeBlock
    language="javascript"
    content={`
        routerAdd("GET", "/custom-article", (c) => {
            const records = $app.dao().findRecordsByFilter("article", "status = 'active'", '-created', 40)

            // enrich the records with the "categories" relation as default expand
            $apis.enrichRecords(c, $app.dao(), records, "categories")

            return c.json(200, records)
        }, $apis.activityLogger($app))
    `}
/>
<HeadingLink title="Serving static files" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        routerAdd("GET", "/*", $apis.staticDirectoryHandler("/path/to/public", false))
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
