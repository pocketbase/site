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
