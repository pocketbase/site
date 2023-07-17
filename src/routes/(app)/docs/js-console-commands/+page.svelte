<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    You can register custom console commands using
    <code>app.rootCmd.addCommand(cmd)</code>, where <code>cmd</code> is a
    <a href="/jsvm/classes/Command.html" target="_blank" rel="noopener noreferrer">Command</a> instance.
</p>

<p>Here is an example:</p>
<CodeBlock
    language="go"
    content={`
        $app.rootCmd.addCommand(new Command({
            use: "hello",
            run: (cmd, args) => {
                console.log("Hello world!")
            },
        }))
    `}
/>
