<script>
    import tooltip from "@/actions/tooltip";
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    If you have tasks that need to be performed periodically, you could setup crontab-like jobs with
    <code>cronAdd(id, expr, handler)</code>.
</p>

<p>
    Each scheduled job runs in its own goroutine as part of the <code>serve</code> command process and must have:
</p>

<ul>
    <li class="m-0">
        <strong>id</strong> - identifier for the scheduled job; could be used to replace or remove an existing
        job
    </li>
    <li class="m-0">
        <strong>cron expression</strong> - e.g. <code>0 0 * * *</code> (
        <em>
            supports numeric list, steps, ranges or
            <span
                class="link-hint"
                use:tooltip={"@yearly\n@annually\n@monthly\n@weekly\n@daily\n@midnight\n@hourly"}>macros</span
            >
        </em>)
    </li>
    <li class="m-0">
        <strong>handler</strong> - the function that will be executed every time when the job runs
    </li>
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

<p>To remove a single registered cron job you can call <code>cronRemove(id)</code>.</p>

<p>
    All registered app level cron jobs can be also previewed and triggered from the
    <em>{"Dashboard > Settings > Crons"}</em> section.
</p>
