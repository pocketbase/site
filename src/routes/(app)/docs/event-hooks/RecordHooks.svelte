<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Record API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnRecordsListRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API Records list request. Could be used to validate or modify the response
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

                    app.OnRecordsListRequest().Add(func(e *core.RecordsListEvent) error {
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
            <div class="flex txt-bold txt-select">OnRecordViewRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API Record view request. Could be used to validate or modify the response before
            returning it to the client.
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

                    app.OnRecordViewRequest().Add(func(e *core.RecordViewEvent) error {
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
            <div class="flex txt-bold txt-select">OnRecordBeforeCreateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API Record create request (after request data load and before model
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

                    app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.Record) // still unsaved
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
            <div class="flex txt-bold txt-select">OnRecordAfterCreateRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful API Record create request.</p>
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

                    app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.Record.Id)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeUpdateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API Record update request (after request data load and before model
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

                    app.OnRecordBeforeUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.Record.GetStringDataValue("title")) // not saved yet
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
            <div class="flex txt-bold txt-select">OnRecordAfterUpdateRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful API Record update request.</p>
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

                    app.OnRecordAfterUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.Record.Id)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeDeleteRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API Record delete request (after model load and before actual deletion).
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

                    app.OnRecordBeforeDeleteRequest().Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.Record.Id) // not deleted yet
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
            <div class="flex txt-bold txt-select">OnRecordAfterDeleteRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful API Record delete request.</p>
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

                    app.OnRecordAfterDeleteRequest().Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.Record.Id) // already deleted from the DB
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
