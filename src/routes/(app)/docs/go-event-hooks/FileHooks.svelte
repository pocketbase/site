<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="File API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnFileDownloadRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API <em>File download</em> request. Could be used to validate or modify the file
            response before returning it to the client.
        </p>
        <CodeBlock
            language="go"
            content={`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnFileDownloadRequest().Add(func(e *core.FileDownloadEvent) error {
                        log.Println(e.ServedPath)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}
        />
    </Accordion>

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnFileBeforeTokenRequest</div>
        </svelte:fragment>
        <p>Triggered before each file token API request.</p>
        <p>
            If no token or model was submitted, <code>e.Model</code> and <code>e.Token</code> will be empty, allowing
            you to implement your own custom model file auth implementation.
        </p>
        <CodeBlock
            language="go"
            content={`
                        package main

                        import (
                            "log"

                            "github.com/pocketbase/pocketbase"
                            "github.com/pocketbase/pocketbase/core"
                        )

                        func main() {
                            app := pocketbase.New()

                            app.OnFileBeforeTokenRequest().Add(func(e *core.FileTokenEvent) error {
                                log.Println(e.Model)
                                log.Println(e.Token)
                                return nil
                            })

                            if err := app.Start(); err != nil {
                                log.Fatal(err)
                            }
                        }
                    `}
        />
    </Accordion>

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnFileAfterTokenRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful file token API request.</p>
        <CodeBlock
            language="go"
            content={`
                        package main

                        import (
                            "log"

                            "github.com/pocketbase/pocketbase"
                            "github.com/pocketbase/pocketbase/core"
                        )

                        func main() {
                            app := pocketbase.New()

                            app.OnFileAfterTokenRequest().Add(func(e *core.FileTokenEvent) error {
                                log.Println(e.Model)
                                log.Println(e.Token)
                                return nil
                            })

                            if err := app.Start(); err != nil {
                                log.Fatal(err)
                            }
                        }
                    `}
        />
    </Accordion>
</div>
