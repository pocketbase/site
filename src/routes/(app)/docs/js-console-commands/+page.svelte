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

<p>To run the command you can execute:</p>
<CodeBlock
    language="html"
    content={`
        ./pocketbase hello
    `}
/>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Keep in mind that the console commands execute in their own separate app process and run
            independently from the main <code>serve</code> command (aka. hook events between different processes
            are not shared with one another).
        </p>
    </div>
</div>
