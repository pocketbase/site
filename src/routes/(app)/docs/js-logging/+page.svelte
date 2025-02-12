<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import LogsWriteAlert from "../go-logging/LogsWriteAlert.svelte";
    import LogsSettingsSection from "../go-logging/LogsSettingsSection.svelte";
</script>

<p>
    <code>$app.logger()</code> could be used to writes any logs into the database so that they can be later
    explored from the PocketBase <em>Dashboard > Logs</em> section.
</p>

<LogsWriteAlert />

<Toc />

<HeadingLink title="Logger methods" />
<p>
    All standard
    <a href="/jsvm/interfaces/slog.Logger.html" target="_blank" rel="noopener noreferrer">
        <code>slog.Logger</code>
    </a>
    methods are available but below is a list with some of the most notable ones. Note that attributes are represented
    as key-value pair arguments.
</p>

<HeadingLink title="debug(message, attrs...)" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        $app.logger().debug("Debug message!")

        $app.logger().debug(
            "Debug message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}
/>

<HeadingLink title="info(message, attrs...)" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        $app.logger().info("Info message!")

        $app.logger().info(
            "Info message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}
/>

<HeadingLink title="warn(message, attrs...)" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        $app.logger().warn("Warning message!")

        $app.logger().warn(
            "Warning message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}
/>

<HeadingLink title="error(message, attrs...)" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        $app.logger().error("Error message!")

        $app.logger().error(
            "Error message with attributes!",
            "id", 123,
            "error", err,
        )
    `}
/>

<HeadingLink title="with(attrs...)" tag="h5" />
<p>
    <code>with(atrs...)</code> creates a new local logger that will "inject" the specified attributes with each
    following log.
</p>
<CodeBlock
    language="javascript"
    content={`
        const l = $app.logger().with("total", 123)

        // results in log with data {"total": 123}
        l.info("message A")

        // results in log with data {"total": 123, "name": "john"}
        l.info("message B", "name", "john")
    `}
/>

<HeadingLink title="withGroup(name)" tag="h5" />
<p>
    <code>withGroup(name)</code> creates a new local logger that wraps all logs attributes under the specified
    group name.
</p>
<CodeBlock
    language="javascript"
    content={`
        const l = $app.logger().withGroup("sub")

        // results in log with data {"sub": { "total": 123 }}
        l.info("message A", "total", 123)
    `}
/>

<LogsSettingsSection />

<HeadingLink title="Custom log queries" />
<p>
    The logs are usually meant to be filtered from the UI but if you want to programmatically retrieve and
    filter the stored logs you can make use of the
    <a href="/jsvm/functions/_app.logQuery.html" target="_blank" rel="noopener noreferrer">
        <code>$app.logQuery()</code>
    </a> query builder method. For example:
</p>
<CodeBlock
    language="javascript"
    content={`
        let logs = arrayOf(new DynamicModel({
            id:      "",
            created: "",
            message: "",
            level:   0,
            data:    {},
        }))

        // see https://pocketbase.io/docs/js-database/#query-builder
        $app.logQuery().
            // target only debug and info logs
            andWhere($dbx.in("level", -4, 0)).
            // the data column is serialized json object and could be anything
            andWhere($dbx.exp("json_extract(data, '$.type') = 'request'")).
            orderBy("created DESC").
            limit(100).
            all(logs)
    `}
/>
