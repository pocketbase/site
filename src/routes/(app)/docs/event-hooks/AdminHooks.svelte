<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Admin API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnAdminsListRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API <em>Admins list</em> request. Could be used to validate or modify the response
            before returning it to the client.
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

                    app.OnAdminsListRequest().Add(func(e *core.AdminsListEvent) error {
                        log.Println(e.Result)
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
            <div class="flex txt-bold txt-select">OnAdminViewRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API <em>Admin view</em> request. Could be used to validate or modify the response
            before returning it to the client.
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

                    app.OnAdminViewRequest().Add(func(e *core.AdminViewEvent) error {
                        log.Println(e.Admin)
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
            <div class="flex txt-bold txt-select">OnAdminBeforeCreateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API <em>Admin create</em> request (after request data load and before model
            persistence).
            <br />
            Could be used to additionally validate the request data or implement completely different persistence
            behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnAdminBeforeCreateRequest().Add(func(e *core.AdminCreateEvent) error {
                        log.Println(e.Admin) // still unsaved
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
            <div class="flex txt-bold txt-select">OnAdminAfterCreateRequest</div>
        </svelte:fragment>
        <p>
            Triggered after each successful API <em>Admin create</em> request.
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

                    app.OnAdminAfterCreateRequest().Add(func(e *core.AdminCreateEvent) error {
                        log.Println(e.Admin.Email)
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
            <div class="flex txt-bold txt-select">OnAdminBeforeUpdateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API <em>Admin update</em> request (after request data load and before model
            persistence).
            <br />
            Could be used to additionally validate the request data or implement completely different persistence
            behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnAdminBeforeUpdateRequest().Add(func(e *core.AdminUpdateEvent) error {
                        log.Println(e.Admin.Email) // not saved yet
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
            <div class="flex txt-bold txt-select">OnAdminAfterUpdateRequest</div>
        </svelte:fragment>
        <p>
            Triggered after each successful API <em>Admin update</em> request.
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

                    app.OnAdminAfterUpdateRequest().Add(func(e *core.AdminUpdateEvent) error {
                        log.Println(e.Admin.Email)
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
            <div class="flex txt-bold txt-select">OnAdminBeforeDeleteRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API <em>Admin delete</em> request (after model load and before actual
            deletion).
            <br />
            Could be used to additionally validate the request data or implement completely different delete behavior
            (returning <code>hook.StopPropagation</code>).
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

                    app.OnAdminBeforeDeleteRequest().Add(func(e *core.AdminDeleteEvent) error {
                        log.Println(e.Admin.Id) // not deleted yet
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
            <div class="flex txt-bold txt-select">OnAdminAfterDeleteRequest</div>
        </svelte:fragment>
        <p>
            Triggered after each successful API <em>Admin delete</em> request.
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

                    app.OnAdminAfterDeleteRequest().Add(func(e *core.AdminDeleteEvent) error {
                        log.Println(e.Admin.Id) // already deleted from the DB
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
            <div class="flex txt-bold txt-select">OnAdminAuthRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each successful API <em>Admin authentication</em> request (sign-in, token refresh,
            etc.).
            <br />
            Could be used to additionally validate or modify the authenticated admin data and token.
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

                    app.OnAdminAuthRequest().Add(func(e *core.AdminAuthEvent) error {
                        log.Println(e.Token)
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
