<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Admin Auth API hooks" />
<div class="accordions m-b-base">
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

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnAdminBeforeAuthWithPasswordRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Admin auth with password API request (after request data load and before
            password validation).
            <br />
            Could be used to implement for example a custom password validation or to locate a different Admin
            identity (by assigning <code>AdminAuthWithPasswordEvent.Admin</code>).
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

                    app.OnAdminBeforeAuthWithPasswordRequest().Add(func(e *core.AdminAuthWithPasswordEvent) error {
                        log.Println(e.Admin) // could be nil
                        log.Println(e.Identity)
                        log.Println(e.Password)

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
            <div class="flex txt-bold txt-select">OnAdminAfterAuthWithPasswordRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Admin auth with password API request.</p>
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

                    app.OnAdminAfterAuthWithPasswordRequest().Add(func(e *core.AdminAuthWithPasswordEvent) error {
                        log.Println(e.Admin)
                        log.Println(e.Identity)
                        log.Println(e.Password)

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
            <div class="flex txt-bold txt-select">OnAdminBeforeAuthRefreshRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Admin auth refresh API request (right before generating a new auth token).
            <br />
            Could be used to additionally validate the request data or implement completely different auth refresh
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

                    app.OnAdminBeforeAuthRefreshRequest().Add(func(e *core.AdminAuthRefreshEvent) error {
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
            <div class="flex txt-bold txt-select">OnAdminAfterAuthRefreshRequest</div>
        </svelte:fragment>
        <p>
            Triggered after each successful auth refresh API request (right after generating a new auth
            token).
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

                    app.OnAdminAfterAuthRefreshRequest().Add(func(e *core.AdminAuthRefreshEvent) error {
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
            <div class="flex txt-bold txt-select">OnAdminBeforeRequestPasswordResetRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Admin request password reset API request (after request data load and before
            sending the reset email).
            <br />
            Could be used to additionally validate the request data or implement completely different password
            reset behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnAdminBeforeRequestPasswordResetRequest().Add(func(e *core.AdminRequestPasswordResetEvent) error {
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
            <div class="flex txt-bold txt-select">OnAdminAfterRequestPasswordResetRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful request password reset API request.</p>
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

                    app.OnAdminAfterRequestPasswordResetRequest().Add(func(e *core.AdminRequestPasswordResetEvent) error {
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
            <div class="flex txt-bold txt-select">OnAdminBeforeConfirmPasswordResetRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Admin confirm password reset API request (after request data load and before
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

                    app.OnAdminBeforeConfirmPasswordResetRequest().Add(func(e *core.AdminConfirmPasswordResetEvent) error {
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
            <div class="flex txt-bold txt-select">OnAdminAfterConfirmPasswordResetRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful confirm password reset API request.</p>
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

                    app.OnAdminAfterConfirmPasswordResetRequest().Add(func(e *core.AdminConfirmPasswordResetEvent) error {
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
</div>
