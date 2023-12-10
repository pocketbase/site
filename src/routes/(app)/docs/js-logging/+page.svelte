<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import LogsWriteAlert from "../go-logging/LogsWriteAlert.svelte";
    import LogsSettingsSection from "../go-logging/LogsSettingsSection.svelte";
</script>

<p>
    <code>$app.logger()</code> could be used to writes any logs into the database so that they can be later
    explored from the PocketBase <em>Admin UI > Logs</em> section.
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
    language="go"
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
    language="go"
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
    language="go"
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
    language="go"
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
    language="go"
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
    language="go"
    content={`
        const l = $app.logger().withGroup("sub")

        // results in log with data {"sub": { "total": 123 }}
        l.info("message A", "total", 123)
    `}
/>

<LogsSettingsSection />
