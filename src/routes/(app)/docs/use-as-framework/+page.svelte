<script>
    import CodeTabs from "@/components/CodeTabs.svelte";
    import { extendGroup } from "@/stores/preferences";
</script>

<p>
    One of the main feature of PocketBase is that
    <strong>it can be used as a framework</strong> which enables you to write your own custom app business
    logic in
    <a href="/docs/go-overview">Go</a> or <a href="/docs/js-overview">JavaScript</a> and still have a portable
    backend at the end.
</p>

<p>
    <strong>
        Choose <a href="/docs/go-overview" class="label label-info">Extend with Go</a> if you are already familiar
        with the language or have the time to learn it.
    </strong>
    As the primary PocketBase language, the Go APIs are better documented and you'll be able to integrate with
    any 3rd party Go library since you'll have more control over the application flow. The only drawback is that
    the Go APIs are slightly more verbose and it may require some time to get used to, especially if this is your
    first time working with Go.
</p>

<p>
    <strong>
        Choose <a href="/docs/js-overview" class="label label-warning">Extend with JavaScript</a>
        if you don't intend to write too much custom code and want a quick way to explore the PocketBase capabilities.
    </strong>
    The embedded JavaScript engine is a pluggable wrapper around the existing Go APIs, so most of the time the
    slight performance penalty will be negligible because it'll invoke the Go functions under the hood.
    <br />
    As a bonus, because the JS VM mirrors the Go APIs, you would be able migrate gradually without much code changes
    from JS -> Go at later stage in case you hit a bottleneck or want more control over the execution flow.
</p>

<p>With both Go and JavaScript, you can:</p>
<ul>
    <li class="m-b-sm">
        <strong>Register custom routes:</strong>
        <CodeTabs
            group={extendGroup}
            go={`
                app.OnServe().BindFunc(func(se *core.ServeEvent) error {
                    se.Router.GET("/hello", func(e *core.RequestEvent) error {
                        return e.String(http.StatusOK, "Hello world!")
                    })

                    return se.Next()
                })
            `}
            js={`
                routerAdd("GET", "/hello", (e) => {
                    return e.string(200, "Hello world!")
                })
            `}
        />
    </li>
    <li class="m-b-sm">
        <strong>Bind to event hooks and intercept responses:</strong>
        <CodeTabs
            group={extendGroup}
            go={`
                app.OnRecordCreateRequest("posts").BindFunc(func(e *core.RecordRequestEvent) error {
                    // if not superuser, overwrite the newly submitted "posts" record status to pending
                    if !e.HasSuperuserAuth() {
                        e.Record.Set("status", "pending")
                    }

                    return e.Next()
                })
            `}
            js={`
                onRecordCreateRequest((e) => {
                    // if not superuser, overwrite the newly submitted "posts" record status to pending
                    if (!e.hasSuperuserAuth()) {
                        e.record.set("status", "pending")
                    }

                    e.next()
                }, "posts")
            `}
        />
    </li>
    <li class="m-b-sm">
        <strong>Register custom console commands:</strong>
        <CodeTabs
            group={extendGroup}
            go={`
                app.RootCmd.AddCommand(&cobra.Command{
                    Use: "hello",
                    Run: func(cmd *cobra.Command, args []string) {
                        print("Hello world!")
                    },
                })
            `}
            js={`
                $app.rootCmd.addCommand(new Command({
                    use: "hello",
                    run: (cmd, args) => {
                        console.log("Hello world!")
                    },
                }))
            `}
        />
    </li>
    <li>and many more...</li>
</ul>

<p class="m-t-base">
    For further info, please check the related <a href="/docs/go-overview">Extend with Go</a> or
    <a href="/docs/js-overview">Extend with JavaScript</a> guides.
</p>
