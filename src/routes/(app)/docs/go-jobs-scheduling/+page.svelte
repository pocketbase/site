<script>
    import tooltip from "@/actions/tooltip";
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    If you have tasks that need to be performed periodically, you could setup crontab-like jobs with the
    builtin
    <a href="{import.meta.env.PB_GODOC_URL}/tools/cron" target="_blank" rel="noopener noreferrer">
        <code>cron</code> package
    </a>.
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
                use:tooltip={"@yearly\n@annually\n@monthly\n@weekly\n@daily\n@midnight\n@hourly"}>macros</span
            >
        </em>)
    </li>
    <li>handler - the function that will be executed everytime when the job runs</li>
</ul>

<p>Here is an example:</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/cron"
        )

        func main() {
            app := pocketbase.New()

            app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                scheduler := cron.New()

                // prints "Hello!" every 2 minutes
                scheduler.MustAdd("hello", "*/2 * * * *", func() {
                    log.Println("Hello!")
                })

                scheduler.Start()

                return nil
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>
