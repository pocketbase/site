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
    Depending on your configured mail settings (<em>Dashboard > Settings > Mail settings</em>) it will use the
    <code>sendmail</code> command or a SMTP client.
</p>

<Toc />

<HeadingLink title="Send custom email" />
<p>
    You can send your own custom emails from everywhere within the app (hooks, middlewares, routes, etc.) by
    using <code>$app.newMailClient().send(message)</code>. Here is an example of sending a custom email after
    user registration:
</p>
<CodeBlock
    language="go"
    content={`
        onRecordCreateRequest((e) => {
            e.next()

            const message = new MailerMessage({
                from: {
                    address: e.app.settings().meta.senderAddress,
                    name:    e.app.settings().meta.senderName,
                },
                to:      [{address: e.record.email()}],
                subject: "YOUR_SUBJECT...",
                html:    "YOUR_HTML_BODY...",
                // bcc, cc and custom headers are also supported...
            })

            e.app.newMailClient().send(message)
        }, "users")
    `}
/>

<HeadingLink title="Overwrite system emails" />
<p>
    If you want to overwrite the default system emails for forgotten password, verification, etc., you can
    adjust the default templates available from the
    <em>Dashboard > Collections > Edit collection > Options</em>
    .
</p>
<p>
    Alternatively, you can also apply individual changes by binding to one of the
    <a href="/docs/js-event-hooks/#mailer-hooks">mailer hooks</a>. Here is an example of appending a Record
    field value to the subject using the <code>onMailerRecordPasswordResetSend</code> hook:
</p>
<CodeBlock
    language="javascript"
    content={`
        onMailerRecordPasswordResetSend((e) => {
            // modify the subject
            e.message.subject += (" " + e.record.get("name"))

            e.next()
        })
    `}
/>
