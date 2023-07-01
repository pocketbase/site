<script>
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
    <li>cron expression like <code>0 0 * * *</code> (<em>supports numeric list, steps or ranges</em>)</li>
    <li>action - the function that will be executed everytime when the job runs</li>
</ul>

<p>Here are some examples:</p>
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

            app.OnAfterBootstrap().Add(func(e *core.BootstrapEvent) error {
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
