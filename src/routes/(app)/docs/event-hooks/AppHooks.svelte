<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="App hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnBeforeBootstrap</div>
        </svelte:fragment>
        <p>
            Triggered before initializing the base application resources (eg. before db open and initial
            settings load).
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnBeforeBootstrap().Add(func(e *core.BootstrapEvent) error {
                        log.Println(e.App)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}
        />
    </Accordion>

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnAfterBootstrap</div>
        </svelte:fragment>
        <p>
            Triggered after initializing the base application resources (eg. after db open and initial
            settings load).
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAfterBootstrap().Add(func(e *core.BootstrapEvent) error {
                        log.Println(e.App)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}
        />
    </Accordion>

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

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnBeforeApiError</div>
        </svelte:fragment>
        <p>
            Triggered right before sending an error API response to the client, allowing you to further modify
            the error data or to return a completely different API response (using <code
                >hook.StopPropagation</code
            >).
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnBeforeApiError().Add(func(e *core.ApiErrorEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Error)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}
        />
    </Accordion>

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnAfterApiError</div>
        </svelte:fragment>
        <p>
            Triggered right after sending an error API response to the client. It could be used to log the
            final API error in external services.
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAfterApiError().Add(func(e *core.ApiErrorEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Error)
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
