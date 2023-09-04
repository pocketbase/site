<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    PocketBase can be used as regular Go package that exposes various helpers and hooks to help you implement
    you own custom business logic.
</p>

<p>To get started:</p>
<ol start="0">
    <li>
        <a href="https://go.dev/doc/install" target="_blank" rel="noreferrer noopener">Install Go 1.18+</a>
    </li>
    <li>
        <p>
            Create a new project directory with <code>main.go</code> file inside it. This is what an example PocketBase
            application looks like:
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "os"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/apis"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // serves static files from the provided public dir (if exists)
                    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                        e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}
        />
    </li>
    <li>To init the dependencies, run <code>go mod init myapp && go mod tidy</code>.</li>
    <li>To start the application, run <code>go run main.go serve</code>.</li>
    <li>
        To build a statically linked executable, you can run <code>CGO_ENABLED=0 go build</code> and then
        start the created executable with <code>./myapp serve</code>.
    </li>
</ol>
<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            <strong>PocketBase embeds SQLite, but doesn't require CGO</strong>.
            <br />
            If CGO is enabled (aka. <code>CGO_ENABLED=1</code>), it will use
            <a
                href="https://pkg.go.dev/github.com/mattn/go-sqlite3"
                target="_blank"
                rel="noreferrer noopener"
            >
                mattn/go-sqlite3
            </a>
            driver, otherwise the pure Go SQLite port -
            <a href="https://pkg.go.dev/modernc.org/sqlite" target="_blank" rel="noreferrer noopener">
                modernc.org/sqlite
            </a>.
            <br />
            Enable CGO only if you really need to squeeze the query performance at the expense of complicating
            cross compilation.
        </p>
    </div>
</div>
