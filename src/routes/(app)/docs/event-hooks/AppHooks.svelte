<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="App hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnBeforeServe</div>
        </svelte:fragment>
        <p>
            Triggered before the web server initialization, allowing you to adjust the internal router (
            <a
                href="https://github.com/labstack/echo"
                target="_blank"
                rel="noreferrer noopener"
                class="txt-bold"
            >
                echo
            </a>
            ) configurations and attach new routes and middlewares.
        </p>

        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/http"

                    "github.com/labstack/echo/v5"
                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/apis"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                        // add new "GET /api/hello" route
                        e.Router.AddRoute(echo.Route{
                            Method: http.MethodGet,
                            Path:   "/api/hello",
                            Handler: func(c echo.Context) error {
                                return c.String(200, "Hello world!")
                            },
                            Middlewares: []echo.MiddlewareFunc{
                                apis.RequireAdminOrUserAuth(),
                            },
                        })

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}
        />
    </Accordion>
</div>
