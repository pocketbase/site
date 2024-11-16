<script>
    import tooltip from "@/actions/tooltip";
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    If you have tasks that need to be performed periodically, you could setup crontab-like jobs with the
    builtin <code>app.Cron()</code>
    <em>
        (it returns an app scoped
        <a href="{import.meta.env.PB_GODOC_URL}/tools/cron#Cron" target="_blank" rel="noopener noreferrer">
            <code>cron.Cron</code>
        </a> value)
    </em>
    .
</p>
<p>
    The jobs scheduler is started automatically on app <code>serve</code>, so all you have to do is register a
    handler with
    <a href="{import.meta.env.PB_GODOC_URL}/tools/cron#Cron.Add" target="_blank" rel="noopener noreferrer">
        <code>app.Cron().Add(name, cronExpr, handler)</code>
    </a>
    or
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/cron#Cron.MustAdd"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.Cron().MustAdd(name, cronExpr, handler)</code>
    </a>
    (<em>the latter panic if the cron expression is not valid</em>).
</p>

<p>Each scheduled job runs in its own goroutine and must have:</p>
<ul>
    <li>name - identifier for the scheduled job; could be used to replace or remove an existing job</li>
    <li>
        cron expression like <code>0 0 * * *</code> (
        <em>
            supports numeric list, steps, ranges or
            <span
                class="link-hint"
                use:tooltip={{
                    text: "@yearly\n@annually\n@monthly\n@weekly\n@daily\n@midnight\n@hourly",
                    delay: 0,
                }}
            >
                macros
            </span>
        </em>)
    </li>
    <li>handler - the function that will be executed everytime when the job runs</li>
</ul>

<p>
    To remove already registered cron job you can call
    <a href="{import.meta.env.PB_GODOC_URL}/tools/cron#Cron.Remove" target="_blank" rel="noopener noreferrer">
        <code>app.Cron().Remove(name)</code>
    </a>
</p>

<p>Here is one minimal example:</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
        )

        func main() {
            app := pocketbase.New()

            // prints "Hello!" every 2 minutes
            app.Cron().MustAdd("hello", "*/2 * * * *", func() {
                log.Println("Hello!")
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>
