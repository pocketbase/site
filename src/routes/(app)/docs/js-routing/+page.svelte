<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    You can register custom routes and middlewares by using the top-level
    <a href="/jsvm/functions/routerAdd.html" target="_blank" rel="noopener noreferrer">
        <code>routerAdd()</code>
    </a>
    and
    <a href="/jsvm/functions/routerUse.html" target="_blank" rel="noopener noreferrer">
        <code>routerUse()</code>
    </a>
    functions.
</p>

<Toc />

<HeadingLink title="Routes" />

<HeadingLink title="Registering new routes" tag="h5" />
<p>Every route have a path, handler function and eventually middlewares attached to it. For example:</p>
<CodeBlock
    language="javascript"
    content={`
        // register "GET /hello/{name}" route (allowed for everyone)
        routerAdd("GET", "/hello/{name}", (e) => {
            let name = e.request.pathValue("name")

            return e.json(200, { "message": "Hello " + name })
        })

        // register "POST /api/myapp/settings" route (allowed only for authenticated users)
        routerAdd("POST", "/api/myapp/settings", (e) => {
            // do something ...
            return e.json(200, {"success": true})
        }, $apis.requireAuth())
    `}
/>

<HeadingLink title="Path parameters and matching rules" tag="h5" />
<p>
    Because PocketBase routing is based on top of the Go standard router mux, we follow the same pattern
    matching rules. Below you could find a short overview but for more details please refer to
    <!-- prettier-ignore -->
    <a href="https://pkg.go.dev/net/http#ServeMux" target="_blank" rel="noopener noreferrer"><code>net/http.ServeMux</code></a>.
</p>
<p>
    In general, a route pattern looks like <code>[METHOD ][HOST]/[PATH]</code>.
</p>
<p>
    Route paths can include parameters in the format <code>{`{paramName}`}</code>.
    <br />
    You can also use <code>{`{paramName...}`}</code> format to specify a parameter that target more than one path
    segment.
</p>
<p class="txt-bold">
    A pattern ending with a trailing slash <code>/</code> acts as anonymous wildcard and matches any requests
    that begins with the defined route. If you want to have a trailing slash but to indicate the end of the
    URL then you need to end the path with the special
    <code>{`{$}`}</code> parameter.
</p>
<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            If your route path starts with <code>/api/</code>
            consider combining it with your unique app name like <code>/api/myapp/...</code> to avoid collisions
            with system routes.
        </p>
    </div>
</div>
<p>Here are some examples:</p>
<CodeBlock
    language="javascript"
    content={`
        // match "GET example.com/index.html"
       routerAdd("GET", "example.com/index.html", ...)

        // match "GET /index.html" (for any host)
       routerAdd("GET", "/index.html", ...)

        // match "GET /static/", "GET /static/a/b/c", etc.
       routerAdd("GET", "/static/", ...)

        // match "GET /static/", "GET /static/a/b/c", etc.
        // (similar to the above but with a named wildcard parameter)
       routerAdd("GET", "/static/{path...}", ...)

        // match only "GET /static/" (if no "/static" is registered, it is 301 redirected)
       routerAdd("GET", "/static/{$}", ...)

        // match "GET /customers/john", "GET /customer/jane", etc.
       routerAdd("GET", "/customers/{name}", ...)
    `}
/>

<hr />

<center class="txt-hint">
    <p>
        In the following examples <code>e</code> is usually
        <a href="/jsvm/interfaces/core.RequestEvent.html" target="_blank" rel="noopener noreferrer">
            <code>core.RequestEvent</code>
        </a> value.
    </p>
</center>

<hr />

<HeadingLink title="Reading path parameters" tag="h5" />
<CodeBlock language="javascript" content={`let id = e.request.pathValue("id")`} />

<HeadingLink title="Retrieving the current auth state" tag="h5" />
<p>
    The request auth state can be accessed (or set) via the <code>RequestEvent.auth</code> field.
</p>
<CodeBlock
    language="javascript"
    content={`
        let authRecord = e.auth

        let isGuest = !e.auth

        // the same as "e.auth?.isSuperuser()"
        let isSuperuser = e.hasSuperuserAuth()
    `}
/>
<p>
    Alternatively you could also access the request data from the summarized request info instance
    <em>
        (usually used in hooks like the <code>onRecordEnrich</code> where there is no direct access to the request)
    </em>.
</p>
<CodeBlock
    language="javascript"
    content={`
        let info = e.requestInfo()

        let authRecord = info.auth

        let isGuest = !info.auth

        // the same as "info.auth?.isSuperuser()"
        let isSuperuser = info.hasSuperuserAuth()
    `}
/>

<HeadingLink title="Reading query parameters" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        let search = e.request.url.query().get("search")

        // or via the parsed request info
        let search = e.requestInfo().query["search"]
    `}
/>

<HeadingLink title="Reading request headers" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
    let token = e.request.header.get("Some-Header")

    // or via the parsed request info
    // (the header value is always normalized per the @request.headers.* API rules format)
    let token = e.requestInfo().headers["some_header"]
`}
/>

<HeadingLink title="Writing response headers" tag="h5" />
<CodeBlock language="javascript" content={`e.response.header().set("Some-Header", "123")`} />

<HeadingLink title="Retrieving uploaded files" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // retrieve the uploaded files and parse the found multipart data into a ready-to-use []*filesystem.File
        let files = e.findUploadedFiles("document")

        // or retrieve the raw single multipart/form-data file and header
        let [mf, mh] = e.request.formFile("document")
    `}
/>

<HeadingLink title="Reading request body" tag="h5" />
<p>
    Body parameters can be read either via
    <a href="/jsvm/interfaces/core.RequestEvent.html#bindBody" target="_blank" rel="noopener noreferrer">
        <code>e.bindBody</code>
    </a>
    OR through the parsed request info.
</p>
<CodeBlock
    language="javascript"
    content={`
        // read the body via the parsed request object
        let body = e.requestInfo().body
        console.log(body.title)

        // read/scan the request body fields into a typed object
        const data = new DynamicModel({
            // describe the fields to read (used also as initial values)
            someTextField:   "",
            someIntValue:    0,
            someFloatValue:  -0,
            someBoolField:   false,
            someArrayField:  [],
            someObjectField: {}, // object props are accessible via .get(key)
        })
        e.bindBody(data)
        console.log(data.sometextField)
    `}
/>

<HeadingLink title="Writing response body" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // send response with JSON body
        // (it also provides a generic response fields picker/filter if the "fields" query parameter is set)
        e.json(200, {"name": "John"})

        // send response with string body
        e.string(200, "Lorem ipsum...")

        // send response with HTML body
        // (check also the "Rendering templates" section)
        e.html(200, "<h1>Hello!</h1>")

        // redirect
        e.redirect(307, "https://example.com")

        // send response with no body
        e.noContent(204)

        // serve a single file
        e.fileFS($os.dirFS("..."), "example.txt")

        // stream the specified reader
        e.stream(200, "application/octet-stream", reader)

        // send response with blob (bytes array) body
        e.blob(200, "application/octet-stream", [ ... ])
    `}
/>

<HeadingLink title="Reading the client IP" tag="h5" />
<!-- prettier-ignore -->
<CodeBlock
    language="javascript"
    content={`
        // The IP of the last client connecting to your server.
        // The returned IP is safe and can be always trusted.
        // When behind a reverse proxy (e.g. nginx) this method returns the IP of the proxy.
        // (/jsvm/interfaces/core.RequestEvent.html#remoteIP)
        let ip = e.remoteIP()

        // The "real" IP of the client based on the configured Settings.trustedProxy header(s).
        // If such headers are not set, it fallbacks to e.remoteIP().
        // (/jsvm/interfaces/core.RequestEvent.html#realIP)
        let ip = e.realIP()
    `}
/>

<HeadingLink title="Request store" tag="h5" />
<p>
    The <code>core.RequestEvent</code> comes with a local store that you can use to share custom data between
    <a href="#middlewares">middlewares</a> and the route action.
</p>
<CodeBlock
    language="javascript"
    content={`
        // store for the duration of the request
        e.set("someKey", 123)

        // retrieve later
        let val = e.get("someKey") // 123
    `}
/>

<HeadingLink title="Middlewares" />
<p>
    Middlewares allow inspecting, intercepting and filtering route requests.
    <br />
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using <code>routerUse(middleware)</code>.
</p>

<HeadingLink title="Registering middlewares" tag="h5" />
<p>Here is a minimal example of a what global middleware looks like:</p>
<CodeBlock
    language="javascript"
    content={`
        // register a global middleware
        routerUse((e) => {
            if (e.request.header.get("Something") == "") {
                throw new BadRequestError("Something header value is missing!")
            }

            return e.next()
        })
    `}
/>

<p>
    Middleware can be either registered as simple functions (<code>{`function(e){}`}</code> ) or if you want
    to specify a custom priority and id - as a
    <a href="/jsvm/classes/Middleware.html" target="_blank" rel="noopener noreferrer">
        <code>Middleware</code>
    </a>
    class instance.
</p>

<p>Below is a slightly more advanced example showing all options and the execution sequence:</p>
<CodeBlock
    language="javascript"
    content={`
        // attach global middleware
        routerUse((e) => {
            console.log(1)
            return e.next()
        })

        // attach global middleware with a custom priority
        routerUse(new Middleware((e) => {
          console.log(2)
          return e.next()
        }, -1))

        // attach middleware to a single route
        //
        // "GET /hello" should print the sequence: 2,1,3,4
        routerAdd("GET", "/hello", (e) => {
            console.log(4)
            return e.string(200, "Hello!")
        }, (e) => {
            console.log(3)
            return e.next()
        })
    `}
/>

<HeadingLink title="Builtin middlewares" tag="h5" />
<p>
    The global
    <a href="/jsvm/modules/_apis.html" target="_blank" rel="noopener noreferrer">
        <code>$apis.*</code>
    </a>
    object exposes several middlewares that you can use as part of your application.
</p>
<CodeBlock
    language="javascript"
    content={`
        // Require the request client to be unauthenticated (aka. guest).
        $apis.requireGuestOnly()

        // Require the request client to be authenticated
        // (optionally specify a list of allowed auth collection names, default to any).
        $apis.requireAuth(optCollectionNames...)

        // Require the request client to be authenticated as superuser
        // (this is an alias for $apis.requireAuth("_superusers")).
        $apis.requireSuperuserAuth()

        // Require the request client to be authenticated as superuser OR
        // regular auth record with id matching the specified route parameter (default to "id").
        $apis.requireSuperuserOrOwnerAuth(ownerIdParam)

        // Changes the global 32MB default request body size limit (set it to 0 for no limit).
        // Note that system record routes have dynamic body size limit based on their collection field types.
        $apis.bodyLimit(limitBytes)

        // Compresses the HTTP response using Gzip compression scheme.
        $apis.gzip()

        // Instructs the activity logger to log only requests that have failed/returned an error.
        $apis.skipSuccessActivityLog()
    `}
/>

<HeadingLink title="Default globally registered middlewares" tag="h5" />
<small class="txt-hint">
    The below list is mostly useful for users that may want to plug their own custom middlewares before/after
    the priority of the default global ones, for example: registering a custom auth loader before the rate
    limiter with <code>-1001</code> so that the rate limit can be applied properly based on the loaded auth state.
</small>
<p>
    All PocketBase applications have the below internal middlewares registered out of the box (<em
        >sorted by their priority</em
    >):
    <br />
</p>
<ul>
    <li>
        <strong>WWW redirect</strong>
        <small class="txt-hint">(id: pbWWWRedirect, priority: -99999)</small>
        <br />
        <em>
            Performs www -> non-www redirect(s) if the request host matches with one of the values in
            certificate host policy.
        </em>
    </li>
    <li>
        <strong>CORS</strong>
        <small class="txt-hint">(id: pbCors, priority: -1041)</small>
        <br />
        <em>
            By default all origins are allowed (PocketBase is stateless and doesn't rely on cookies) but this
            can be configured with the <code>--origins</code> flag.
        </em>
    </li>
    <li>
        <strong>Activity logger</strong>
        <small class="txt-hint">(id: pbActivityLogger, priority: -1040)</small>
        <br />
        <em>Saves request information into the logs auxiliary database.</em>
    </li>
    <li>
        <strong>Auto panic recover</strong>
        <small class="txt-hint">(id: pbPanicRecover, priority: -1030)</small>
        <br />
        <em>Default panic-recover handler.</em>
    </li>
    <li>
        <strong>Auth token loader</strong>
        <small class="txt-hint">(id: pbLoadAuthToken, priority: -1020)</small>
        <br />
        <em>
            Loads the auth token from the <code>Authorization</code> header and populates the related auth
            record into the request event (aka. <code>e.auth</code>).
        </em>
    </li>
    <li>
        <strong>Security response headers</strong>
        <small class="txt-hint">(id: pbSecurityHeaders, priority: -1010)</small>
        <br />
        <em>
            Adds default common security headers (<code>X-XSS-Protection</code>,
            <code>X-Content-Type-Options</code>,
            <code>X-Frame-Options</code>) to the response (can be overwritten by other middlewares or from
            inside the route action).
        </em>
    </li>
    <li>
        <strong>Rate limit</strong>
        <small class="txt-hint">(id: pbRateLimit, priority: -1000)</small>
        <br />
        <em
            >Rate limits client requests based on the configured app settings (it does nothing if the rate
            limit option is not enabled).</em
        >
    </li>
    <li>
        <strong>Body limit</strong>
        <small class="txt-hint">(id: pbBodyLimit, priority: -990)</small>
        <br />
        <em>
            Applies a default max ~32MB request body limit for all custom routes ( system record routes have
            dynamic body size limit based on their collection field types). Can be overwritten on group/route
            level by simply rebinding the <code>$apis.bodyLimit(limitBytes)</code> middleware.
        </em>
    </li>
</ul>

<HeadingLink title="Error response" />
<p>
    PocketBase has a global error handler and every returned or thrown <code>Error</code> from a route or
    middleware will be safely converted by default to a generic API error to avoid accidentally leaking
    sensitive information (the original error will be visible only in the <em>Dashboard > Logs</em> or when in
    <code>--dev</code> mode).
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
        throw new BadRequestError(optMessage, optData)      // 400 ApiError
        throw new UnauthorizedError(optMessage, optData)    // 401 ApiError
        throw new ForbiddenError(optMessage, optData)       // 403 ApiError
        throw new NotFoundError(optMessage, optData)        // 404 ApiError
        throw new TooManyrequestsError(optMessage, optData) // 429 ApiError
        throw new InternalServerError(optMessage, optData)  // 500 ApiError
    `}
/>

<HeadingLink title="Helpers" />

<HeadingLink title="Serving static directory" tag="h5" />
<p>
    <a href="/jsvm/functions/_apis.static.html" target="_blank" rel="noopener noreferrer">
        <code>$apis.static()</code>
    </a>
    serves static directory content from <code>fs.FS</code> instance.
</p>
<p>Expects the route to have a <code>{"{path...}"}</code> wildcard parameter.</p>
<CodeBlock
    language="javascript"
    content={`
        // serves static files from the provided dir (if exists)
        routerAdd("GET", "/{path...}", $apis.static($os.dirFS("/path/to/public"), false))
    `}
/>

<HeadingLink title="Auth response" tag="h5" />
<p>
    <a href="/jsvm/functions/_apis.recordAuthResponse.html" target="_blank" rel="noopener noreferrer">
        <code>$apis.recordAuthResponse()</code>
    </a>
    writes standardized JSON record auth response (aka. token + record data) into the specified request body. Could
    be used as a return result from a custom auth route.
</p>
<!-- prettier-ignore -->
<CodeBlock
    language="javascript"
    content={`
        routerAdd("POST", "/phone-login", (e) => {
            const data = new DynamicModel({
                phone:    "",
                password: "",
            })
            e.bindBody(data)

            let record = e.app.findFirstRecordByData("users", "phone", data.phone)
            if !record.validatePassword(data.password) {
                // return generic 400 error as a basic enumeration protection
                throw new BadRequestError("Invalid credentials")
            }

            return $apis.recordAuthResponse(e, record, "phone")
        })
    `}
/>

<HeadingLink title="Enrich record(s)" tag="h5" />
<p>
    <a href="/jsvm/functions/_apis.enrichRecord.html" target="_blank" rel="noopener noreferrer">
        <code>$apis.enrichRecord()</code>
    </a>
    and
    <a href="/jsvm/functions/_apis.enrichRecords.html" target="_blank" rel="noopener noreferrer">
        <code>$apis.enrichRecords()</code>
    </a>
    helpers parses the request context and enrich the provided record(s) by:
</p>
<ul>
    <li>
        expands relations (if <code>defaultExpands</code> and/or <code>?expand</code> query parameter is set)
    </li>
    <li>
        ensures that the emails of the auth record and its expanded auth relations are visible only for the
        current logged superuser, record owner or record with manage access
    </li>
</ul>
<p>These helpers are also responsible for triggering the <code>onRecordEnrich</code> hook events.</p>
<CodeBlock
    language="javascript"
    content={`
        routerAdd("GET", "/custom-article", (e) => {
            let records = e.app.findRecordsByFilter("article", "status = 'active'", "-created", 40, 0)

            // enrich the records with the "categories" relation as default expand
            $apis.enrichRecords(e, records, "categories")

            return e.json(200, records)
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
            // for other options check
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
