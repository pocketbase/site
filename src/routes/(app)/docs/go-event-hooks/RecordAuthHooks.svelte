<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Record Auth API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnRecordAuthRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each successful auth record authentication request (sign-in, token refresh, etc.).
            <br />
            Could be used to additionally validate or modify the authenticated auth record data and token.
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

                    app.OnRecordAuthRequest().Add(func(e *core.RecordAuthEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeAuthWithPasswordRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record auth with password API request (after request data load and before
            password validation).
            <br />
            Could be used to implement for example a custom password validation or to locate a different Record
            identity (by assigning <code>RecordAuthWithPasswordEvent.Record</code>).
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

                    app.OnRecordBeforeAuthWithPasswordRequest().Add(func(e *core.RecordAuthWithPasswordEvent) error {
                        log.Println(e.Record) // could be nil
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
            <div class="flex txt-bold txt-select">OnRecordAfterAuthWithPasswordRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record auth with password API request.</p>
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

                    app.OnRecordAfterAuthWithPasswordRequest().Add(func(e *core.RecordAuthWithPasswordEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeAuthWithOAuth2Request</div>
        </svelte:fragment>
        <p>
            Triggered before each Record OAuth2 sign-in/sign-up API request (after token exchange and before
            external provider linking).
        </p>
        <p>
            If the <code>RecordAuthWithOAuth2Event.Record</code> is <code>nil</code>, then the OAuth2 request
            will try to create a new auth Record.
        </p>
        <p>
            To assign or link a different existing record model you can overwrite/modify the
            <code>RecordAuthWithOAuth2Event.Record</code> field.
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

                    app.OnRecordBeforeAuthWithOAuth2Request().Add(func(e *core.RecordAuthWithOAuth2Event) error {
                        log.Println(e.Record) // could be nil
                        log.Println(e.OAuth2User)

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
            <div class="flex txt-bold txt-select">OnRecordAfterAuthWithOAuth2Request</div>
        </svelte:fragment>
        <p>Triggered after each successful Record OAuth2 API request.</p>
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

                    app.OnRecordAfterAuthWithOAuth2Request().Add(func(e *core.RecordAuthWithOAuth2Event) error {
                        log.Println(e.Record)
                        log.Println(e.OAuth2User)

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
            <div class="flex txt-bold txt-select">OnRecordBeforeAuthRefreshRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record auth refresh API request (right before generating a new auth token).
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

                    app.OnRecordBeforeAuthRefreshRequest().Add(func(e *core.RecordAuthRefreshEvent) error {
                        log.Println(e.Record)

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
            <div class="flex txt-bold txt-select">OnRecordAfterAuthRefreshRequest</div>
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

                    app.OnRecordAfterAuthRefreshRequest().Add(func(e *core.RecordAuthRefreshEvent) error {
                        log.Println(e.Record)

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
            <div class="flex txt-bold txt-select">OnRecordListExternalAuthsRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each successful auth record external auths list request.
            <br />
            Could be used to validate or modify the response before returning it to the client.
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

                    app.OnRecordListExternalAuthsRequest().Add(func(e *core.RecordListExternalAuthsEvent) error {
                        log.Println(e.ExternalAuths)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeUnlinkExternalAuthRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each auth record unlink external auth request (after model load and before the
            actual relation deletion).
            <br />
            Could be used to additionally validate the request data or implement completely different "unlink"
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

                    app.OnRecordBeforeUnlinkExternalAuthRequest().Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth) // the relation is not deleted yet
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
            <div class="flex txt-bold txt-select">OnRecordAfterUnlinkExternalAuthRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful auth record unlink external auth request.</p>
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

                    app.OnRecordAfterUnlinkExternalAuthRequest().Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth) // the relation is already deleted
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
            <div class="flex txt-bold txt-select">OnRecordBeforeRequestVerificationRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record request verification API request (after request data load and before
            sending the verification email).
            <br />
            Could be used to additionally validate the loaded request data or implement completely different verification
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

                    app.OnRecordBeforeRequestVerificationRequest().Add(func(e *core.RecordRequestVerificationEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordAfterRequestVerificationRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record request verification API request.</p>
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

                    app.OnRecordAfterRequestVerificationRequest().Add(func(e *core.RecordRequestVerificationEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeConfirmVerificationRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record confirm verification API request (after request data load and before
            persisting the confirmation).
            <br />
            Could be used to additionally validate the loaded request data or implement completely different confirm
            verification behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnRecordBeforeConfirmVerificationRequest().Add(func(e *core.RecordConfirmVerificationEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordAfterConfirmVerificationRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record confirm verification API request.</p>
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

                    app.OnRecordAfterConfirmVerificationRequest().Add(func(e *core.RecordConfirmVerificationEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeRequestPasswordResetRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record request password reset API request (after request data load and
            before sending the reset email).
            <br />
            Could be used to additionally validate the loaded request data or implement completely different password
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

                    app.OnRecordBeforeRequestPasswordResetRequest().Add(func(e *core.RecordRequestPasswordResetEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordAfterRequestPasswordResetRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record request password reset API request.</p>
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

                    app.OnRecordAfterRequestPasswordResetRequest().Add(func(e *core.RecordRequestPasswordResetEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeConfirmPasswordResetRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record confirm password reset API request (after request data load and
            before persisting the confirmation).
            <br />
            Could be used to additionally validate the loaded request data or implement completely different confirm
            password reset behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnRecordBeforeConfirmPasswordResetRequest().Add(func(e *core.RecordConfirmPasswordResetEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordAfterConfirmPasswordResetRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record confirm password reset API request.</p>
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

                    app.OnRecordAfterConfirmPasswordResetRequest().Add(func(e *core.RecordConfirmPasswordResetEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeRequestEmailChangeRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record request email change API request (after request data load and before
            sending the email link to confirm the change).
            <br />
            Could be used to additionally validate the loaded request data or implement completely completely different
            request email change behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnRecordBeforeRequestEmailChangeRequest().Add(func(e *core.RecordRequestEmailChangeEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordAfterRequestEmailChangeRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record request email change API request.</p>
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

                    app.OnRecordAfterRequestEmailChangeRequest().Add(func(e *core.RecordRequestEmailChangeEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeConfirmEmailChangeRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each Record confirm email change API request (after request data load and before
            persisting the new email).
            <br />
            Could be used to additionally validate the loaded request data or implement completely different confirm
            email change behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnRecordBeforeConfirmEmailChangeRequest().Add(func(e *core.RecordConfirmEmailChangeEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordAfterConfirmEmailChangeRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful Record confirm email change API request.</p>
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

                    app.OnRecordAfterConfirmEmailChangeRequest().Add(func(e *core.RecordConfirmEmailChangeEvent) error {
                        log.Println(e.Record)
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
