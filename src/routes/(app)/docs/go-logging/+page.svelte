<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import LogsWriteAlert from "./LogsWriteAlert.svelte";
    import LogsSettingsSection from "./LogsSettingsSection.svelte";
</script>

<p>
    <code>app.Logger()</code> provides access to a standard <code>slog.Logger</code> implementation that
    writes any logs into the database so that they can be later explored from the PocketBase
    <em>Dashboard > Logs</em> section.
</p>

<LogsWriteAlert />

<Toc />

<HeadingLink title="Log methods" />
<p>
    All standard
    <a href="https://pkg.go.dev/log/slog" target="_blank" rel="noopener noreferrer">
        <code>slog.Logger</code>
    </a>
    methods are available but below is a list with some of the most notable ones.
</p>

<HeadingLink title="Debug(message, attrs...)" tag="h5" />
<CodeBlock
    language="go"
    content={`
        app.Logger().Debug("Debug message!")

        app.Logger().Debug(
            "Debug message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}
/>

<HeadingLink title="Info(message, attrs...)" tag="h5" />
<CodeBlock
    language="go"
    content={`
        app.Logger().Info("Info message!")

        app.Logger().Info(
            "Info message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}
/>

<HeadingLink title="Warn(message, attrs...)" tag="h5" />
<CodeBlock
    language="go"
    content={`
        app.Logger().Warn("Warning message!")

        app.Logger().Warn(
            "Warning message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}
/>

<HeadingLink title="Error(message, attrs...)" tag="h5" />
<CodeBlock
    language="go"
    content={`
        app.Logger().Error("Error message!")

        app.Logger().Error(
            "Error message with attributes!",
            "id", 123,
            "error", err,
        )
    `}
/>

<HeadingLink title="With(attrs...)" tag="h5" />
<p>
    <code>With(atrs...)</code> creates a new local logger that will "inject" the specified attributes with each
    following log.
</p>
<CodeBlock
    language="go"
    content={`
        l := app.Logger().With("total", 123)

        // results in log with data {"total": 123}
        l.Info("message A")

        // results in log with data {"total": 123, "name": "john"}
        l.Info("message B", "name", "john")
    `}
/>

<HeadingLink title="WithGroup(name)" tag="h5" />
<p>
    <code>WithGroup(name)</code> creates a new local logger that wraps all logs attributes under the specified
    group name.
</p>
<CodeBlock
    language="go"
    content={`
        l := app.Logger().WithGroup("sub")

        // results in log with data {"sub": { "total": 123 }}
        l.Info("message A", "total", 123)
    `}
/>

<LogsSettingsSection />

<HeadingLink title="Custom log queries" />
<p>
    The logs are usually meant to be filtered from the UI but if you want to programmatically retrieve and
    filter the stored logs you can make use of the
    <a href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.LogsQuery" target="_blank" rel="noopener noreferrer">
        <code>app.LogQuery()</code>
    </a> query builder method. For example:
</p>
<CodeBlock
    language="go"
    content={`
        logs := []*core.Log{}

        // see https://pocketbase.io/docs/go-database/#query-builder
        err := app.LogQuery().
            // target only debug and info logs
            AndWhere(dbx.In("level", -4, 0).
            // the data column is serialized json object and could be anything
            AndWhere(dbx.NewExp("json_extract(data, '$.type') = 'request'")).
            OrderBy("created DESC").
            Limit(100).
            All(&logs)
    `}
/>
