<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Mailer hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnMailerBeforeAdminResetPasswordSend</div>
        </svelte:fragment>
        <p>
            Triggered right before sending a password reset email to an admin. Could be used to send your own
            custom email template if <code>hook.StopPropagation</code> is returned in one of its listeners.
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                    "github.com/pocketbase/pocketbase/tools/hook"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeAdminResetPasswordSend().Add(func(e *core.MailerAdminEvent) error {
                        // send custom email
                        err := e.MailClient.Send(
                            mail.Address{Address: "support@example.com"},
                            mail.Address{Address: e.Admin.Email},
                            "YOUR_SUBJECT...",
                            "YOUR_HTML_BODY...",
                            nil, // attachments
                        )
                        if err != nil {
                            return err
                        }

                        return hook.StopPropagation
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
            <div class="flex txt-bold txt-select">OnMailerAfterAdminResetPasswordSend</div>
        </svelte:fragment>
        <p>Triggered after an admin password reset email was successfully sent.</p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterAdminResetPasswordSend().Add(func(e *core.MailerAdminEvent) error {
                        // do something...
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
            <div class="flex txt-bold txt-select">OnMailerBeforeRecordResetPasswordSend</div>
        </svelte:fragment>
        <p>
            Triggered right before sending a password reset email to a user. Could be used to send your own
            custom email template if <code>hook.StopPropagation</code> is returned in one of its listeners.
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                    "github.com/pocketbase/pocketbase/tools/hook"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeRecordResetPasswordSend().Add(func(e *core.MailerRecordEvent) error {
                        // send custom email
                        err := e.MailClient.Send(
                            mail.Address{Address: "support@example.com"},
                            mail.Address{Address: e.Record.Email},
                            "YOUR_SUBJECT...",
                            "YOUR_HTML_BODY...",
                            nil, // attachments
                        )
                        if err != nil {
                            return err
                        }

                        return hook.StopPropagation
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
            <div class="flex txt-bold txt-select">OnMailerAfterRecordResetPasswordSend</div>
        </svelte:fragment>
        <p>Triggered after an auth record password reset email was successfully sent.</p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterRecordResetPasswordSend().Add(func(e *core.MailerRecordEvent) error {
                        // do something...
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
            <div class="flex txt-bold txt-select">OnMailerBeforeRecordVerificationSend</div>
        </svelte:fragment>
        <p>
            Triggered right before sending a verification email to an auth record. Could be used to send your
            own custom email template if <code>hook.StopPropagation</code> is returned in one of its listeners.
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                    "github.com/pocketbase/pocketbase/tools/hook"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeRecordVerificationSend().Add(func(e *core.MailerRecordEvent) error {
                        // send custom email
                        err := e.MailClient.Send(
                            mail.Address{Address: "support@example.com"},
                            mail.Address{Address: e.Record.Email},
                            "YOUR_SUBJECT...",
                            "YOUR_HTML_BODY...",
                            nil, // attachments
                        )
                        if err != nil {
                            return err
                        }

                        return hook.StopPropagation
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
            <div class="flex txt-bold txt-select">OnMailerAfterRecordVerificationSend</div>
        </svelte:fragment>
        <p>Triggered after an auth record verification email was successfully sent.</p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterRecordVerificationSend().Add(func(e *core.MailerRecordEvent) error {
                        // do something...
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
            <div class="flex txt-bold txt-select">OnMailerBeforeRecordChangeEmailSend</div>
        </svelte:fragment>
        <p>
            Triggered right before sending a confirmation new address email to a a user. Could be used to send
            your own custom email template if <code>hook.StopPropagation</code> is returned in one of its listeners.
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                    "github.com/pocketbase/pocketbase/tools/hook"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeRecordChangeEmailSend().Add(func(e *core.MailerRecordEvent) error {
                        newAddr := e.Meta["newEmail"]

                        // send custom email
                        err := e.MailClient.Send(
                            mail.Address{Address: "support@example.com"},
                            mail.Address{Address: newAddr},
                            "YOUR_SUBJECT...",
                            "YOUR_HTML_BODY...",
                            nil, // attachments
                        )
                        if err != nil {
                            return err
                        }

                        return hook.StopPropagation
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
            <div class="flex txt-bold txt-select">OnMailerAfterRecordChangeEmailSend</div>
        </svelte:fragment>
        <p>Triggered after an auth record change address email was successfully sent.</p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterRecordChangeEmailSend().Add(func(e *core.MailerRecordEvent) error {
                        // do something...
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
