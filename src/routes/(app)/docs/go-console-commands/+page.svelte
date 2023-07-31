<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    You can register custom console commands using
    <code>app.RootCmd.AddCommand(cmd)</code>, where <code>cmd</code> is a
    <a href="https://pkg.go.dev/github.com/spf13/cobra" target="_blank" rel="noopener noreferrer">cobra</a> command.
</p>

<p>Here is an example:</p>
<CodeBlock
    language="go"
    content={`
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/spf13/cobra"
        )

        func main() {
            app := pocketbase.New()

            app.RootCmd.AddCommand(&cobra.Command{
                Use: "hello",
                Run: func(cmd *cobra.Command, args []string) {
                    log.Println("Hello world!")
                },
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<p>To run the command you can build your Go application and execute:</p>
<CodeBlock
    language="html"
    content={`
        # or "go run main.go hello"
        ./myapp hello
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
