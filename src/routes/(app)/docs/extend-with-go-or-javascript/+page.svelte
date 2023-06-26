<script>
    import CodeTabs from "@/components/CodeTabs.svelte";
</script>

<p>
    One of the main feature of PocketBase is that
    <strong>it can be used as a framework</strong> that enables you to build your own custom app business
    logic in
    <a href="/docs/go-overview">Go</a> or <a href="/docs/js-overview">JavaScript</a> and still have a single portable
    executable at the end.
</p>

<p>
    <strong>
        Choose <a href="/docs/go-overview">Extend with Go</a> if you are already familiar with the language or
        have the time to learn it.
    </strong>
    As the primary PocketBase language, the Go APIs are better documented and you'll be able to integrate with
    any 3rd party Go library since you'll have more control over the application flow. The only drawback is that
    the Go APIs are slightly more verbose and it may require some time to get used to, especially if this is your
    first time working with Go.
</p>

<p>
    <strong>
        Choose <a href="/docs/js-overview">Extend with JavaScript</a>
        if you don't intend to write too much custom business logic and want a quick way to explore the PocketBase
        capabilities.
    </strong>
    Keep in mind that the embedded JavaScript engine represents a pluggable wrapper around the existing Go APIs,
    so most of the time the slight performance penalty will be negliable because they'll invoke the Go functions
    under the hood.
    <br />
    As a bonus, because the JS APIs mirror the Go ones, you could migrate gradually without much code changes from
    JS -> Go at later stage in case you hit a bottleneck or want more execution control.
</p>

<p>With both Go and JavaScript, you can:</p>
<ul>
    <li class="m-b-sm">
        <strong>Bind to event hooks and intercept responses:</strong>
        <CodeTabs
            group="extend"
            go={`
                app.OnRecordBeforeCreateRequest("posts").Add(func(e *core.RecordCreateEvent) error {
                    requestData := apis.RequestData(e.HttpContext)

                    // if not an admin, overwrite the newly submitted "posts" record status to pending
                    if requestData.Admin == nil {
                        e.Record.Set("status", "pending")
                    }

                    return nil
                })
            `}
            js={`
                $app.onRecordBeforeCreateRequest("posts").add((e) => {
                    let requestData = $apis.requestData(e.httpContext)

                    // if not an admin, overwrite the newly submitted "posts" record status to pending
                    if (!requestData.admin) {
                        e.record.set("status", "pending")
                    }
                })
            `}
        />
    </li>
    <li class="m-b-sm">
        <strong>Register custom routes:</strong>
        <CodeTabs
            group="extend"
            go={`
                app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                    e.Router.GET(
                        "/hello",
                        func(c echo.Context) error {
                            return c.String(http.StatusOK, "Hello world!")
                        },
                        // middlewares
                        apis.ActivityLogger(app),
                        apis.RequireAdminAuth(),
                    )

                    return nil
                })
            `}
            js={`
                $app.onBeforeServe().add((e) => {
                    e.router.get(
                        "/hello",
                        (c) => {
                            return c.string(200, "Hello world!")
                        },
                        // middlewares
                        $apis.activityLogger($app),
                        $apis.requireAdminAuth(),
                    )
                })
            `}
        />
    </li>
    <li class="m-b-sm">
        <strong>Register custom console commands:</strong>
        <CodeTabs
            group="extend"
            go={`
                app.RootCmd.AddCommand(&cobra.Command{
                    Use: "hello",
                    Run: func(command *cobra.Command, args []string) {
                        print("Hello world!")
                    },
                })
            `}
            js={`
                $app.rootCmd.addCommand(new Command({
                    use: "hello",
                    run: (command, args) => {
                        console.log("Hello world!")
                    },
                })
            `}
        />
    </li>
    <li>and many more...</li>
</ul>

<p class="m-t-base">
    For further info, please check the related <a href="/docs/go-overview">Extend with Go</a> or
    <a href="/docs/js-overview">Extend with JavaScript</a> guides.
</p>
