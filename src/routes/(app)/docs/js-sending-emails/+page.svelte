<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase provides a simple abstraction for sending emails via the
    <code>$app.newMailClient()</code> helper.
</p>

<p>
    Depending on your configured mail settings (<em>Admin UI > Settings > Mail settings</em>) it will use the
    <code>sendmail</code> command or a SMTP client.
</p>

<Toc />

<HeadingLink title="Send custom email" />
<p>
    You can send your own custom emails from everywhere within your app (hooks, middlewares, endpoints, etc.)
    by using <code>$app.newMailClient().send(message)</code>. Here is an example of sending a custom email
    after a user request creation:
</p>
<CodeBlock
    language="go"
    content={`
        $app.onRecordAfterCreateRequest("users").add((e) => {
            const message := new MailerMessage({
                from: {
                    address: $app.settings().meta.senderAddress,
                    name:    $app.settings().meta.senderName,
                },
                to:      [{address: e.record.email()}],
                subject: "YOUR_SUBJECT...",
                html:    "YOUR_HTML_BODY...",
                // bcc, cc, attachments and custom headers are also supported...
            })

            $app.newMailClient().send(message)
        })
    `}
/>

<HeadingLink title="Intercept system emails" />
<p>
    If you want to change the default system emails for forgotten password, verification, etc., you can adjust
    the default templates from the <em>Admin UI > Settings > Mail settings.</em>
</p>
<p>
    Alternatively, you can also apply individual changes by binding to one of the
    <a href="/docs/js-event-hooks/#mailer-hooks">mailer hooks</a>. Here is an example of appending a Record
    field value to the subject using the <code>OnMailerBeforeRecordResetPasswordSend</code> hook:
</p>
<CodeBlock
    language="go"
    content={`
        $app.onMailerBeforeRecordResetPasswordSend().add((e) => {
            // modify the subject
            e.message.subject += (" " + e.record.get("name"))
        })
    `}
/>
