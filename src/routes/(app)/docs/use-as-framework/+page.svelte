<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    The biggest difference from other backend solutions like Firebase, Supabase, Nhost, etc., is that
    <strong>
        PocketBase actually could be used as a Go framework that enables you to build your own custom app
        specific business logic and still have a single portable executable at the end.
    </strong>
</p>

<p>The minimal PocketBase application looks like this:</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
        )

        func main() {
            app := pocketbase.New()

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<p>
    Running/building the application is the same as for any other Go program, aka. just
    <code>go run main.go</code> and <code>go build</code>.
</p>
<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            <strong>PocketBase embeds SQLite, but doesn't require CGO</strong>.
            <br />
            If CGO is enabled, it will use
            <a href="https://pkg.go.dev/github.com/mattn/go-sqlite3" target="_blank" rel="noreferrer noopener"
                >mattn/go-sqlite3</a
            >
            driver, otherwise -
            <a href="https://pkg.go.dev/modernc.org/sqlite" target="_blank" rel="noreferrer noopener"
                >modernc.org/sqlite</a
            >.
            <br />
            Enable CGO only if you really need to squeeze the read/write query performance at the expense of complicating
            cross compilation.
        </p>
    </div>
</div>

<hr />

<p>PocketBase could be extended by:</p>

<ul>
    <li class="m-b-sm">
        <a href="/docs/event-hooks" class="txt-bold">Binding to event hooks and modifying responses</a>, eg.:
        <CodeBlock
            language="go"
            content={`
                app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                    // overwrite the newly submitted "posts" record status to pending
                    if e.Record.Collection().Name == "posts" {
                        e.Record.Set("status", "pending")
                    }

                    return nil
                })
            `}
        />
    </li>
    <li class="m-b-sm">
        <a href="/docs/router" class="txt-bold">Registering custom routes</a>, eg:
        <CodeBlock
            language="go"
            content={`
                app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                    e.Router.AddRoute(echo.Route{
                        Method: http.MethodGet,
                        Path:   "/api/hello",
                        Handler: func(c echo.Context) error {
                            return c.String(http.StatusOK, "Hello world!")
                        },
                        Middlewares: []echo.MiddlewareFunc{
                            apis.ActivityLogger(app),
                            apis.RequireAdminAuth(),
                        },
                    })

                    return nil
                })
            `}
        />
    </li>
    <li class="m-b-sm">
        <strong>Registering custom console commands</strong>, eg.:
        <CodeBlock
            language="go"
            content={`
                app.RootCmd.AddCommand(&cobra.Command{
                    Use: "hello",
                    Run: func(command *cobra.Command, args []string) {
                        print("Hello world!")
                    },
                })
            `}
        />
    </li>
    <li>
        and much more...
        <p class="txt-hint">
            You may also find useful checking the
            <a href={import.meta.env.PB_REPO_URL} target="_blank" rel="noreferrer noopener">repo source</a>
            and the
            <a href={import.meta.env.PB_GODOC_URL} target="_blank" rel="noreferrer noopener">
                package documentation
            </a>.
        </p>
    </li>
</ul>
