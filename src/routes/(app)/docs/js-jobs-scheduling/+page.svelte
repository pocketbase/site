<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    If you have tasks that need to be performed periodically, you could setup crontab-like jobs with
    <code>cronAdd(name, expr, handler)</code>.
</p>

<p>Each scheduled job runs in its own goroutine and must have:</p>

<ul>
    <li>name - identifier for the scheduled job; could be used to replace or remove an existing job</li>
    <li>cron expression like <code>0 0 * * *</code> (<em>supports numeric list, steps or ranges</em>)</li>
    <li>handler - the function that will be executed everytime when the job runs</li>
</ul>

<p>Here is an example:</p>
<CodeBlock
    language="javascript"
    content={`
        // prints "Hello!" every 2 minutes
        cronAdd("hello", "*/2 * * * *", () => {
            console.log("Hello!")
        })
    `}
/>

<p>To remove a single registered cron job you can call <code>cronRemove(name)</code>.</p>
