<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase provides a simple abstraction for sending emails via the
    <code>app.NewMailClient()</code> helper.
</p>

<p>
    Depending on your configured mail settings (<em>Admin UI > Settings > Mail settings</em>) it will use the
    <code>sendmail</code> command or a SMTP client.
</p>

<Toc />

<HeadingLink title="Overwrite system emails" />
<p>
    If you want to overwrite the default system emails for forgotten password, verification, etc., you can
    adjust the default templates from the <em>Admin UI > Settings > Mail settings.</em>
</p>
<p>
    Alternatively, you can also apply individual changes by binding to one of the
    <a href="/docs/event-hooks/#mailer-hooks">before mailer hooks</a>. Here is an example of appending a
    Record field value to the subject using the <code>OnMailerBeforeRecordResetPasswordSend</code> hook:
</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
        )

        func main() {
            app := pocketbase.New()

            app.OnMailerBeforeRecordResetPasswordSend().Add(func(e *core.MailerRecordEvent) error {
                // modify the subject
                e.Message.Subject += (" " + e.Record.GetString("name"))

                return nil
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<HeadingLink title="Send custom email" />
<p>
    You can also send your own custom email from everywhere within your app (hooks, middlewares, endpoints,
    etc.) by using <code>app.NewMailClient().Send(message)</code>. Here is an example of sending a custom
    email after a user request creation:
</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"
            "net/mail"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/mailer"
        )

        func main() {
            app := pocketbase.New()

            app.OnRecordAfterCreateRequest("users").Add(func(e *core.RecordCreateEvent) error {
                message := &mailer.Message{
                    From: mail.Address{
                        Address: app.Settings().Meta.SenderAddress,
                        Name:    app.Settings().Meta.SenderName,
                    },
                    To:      []mail.Address{{Address: e.Record.Email()}},
                    Subject: "YOUR_SUBJECT...",
                    HTML:    "YOUR_HTML_BODY...",
                    // bcc, cc, attachments and custom headers are also supported...
                }

                return app.NewMailClient().Send(message)
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>
