<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Settings API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnSettingsListRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each successful API <em>Settings list</em> request. Could be used to validate or modify
            the response before returning it to the client.
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

                    app.OnSettingsListRequest().Add(func(e *core.SettingsListEvent) error {
                        log.Println(e.RedactedSettings)
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
            <div class="flex txt-bold txt-select">OnSettingsBeforeUpdateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API <em>Settings update</em> request (after request data load and before
            settings persistence).
            <br />
            Could be used to additionally validate the request data or implement completely different persistence
            behavior (returning <code>hook.StopPropagation</code>).
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

                    app.OnSettingsBeforeUpdateRequest().Add(func(e *core.SettingsUpdateEvent) error {
                        log.Println(e.NewSettings) // not saved yet
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
            <div class="flex txt-bold txt-select">OnSettingsAfterUpdateRequest</div>
        </svelte:fragment>
        <p>
            Triggered after each successful API <em>Settings update</em> request.
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

                    app.OnSettingsAfterUpdateRequest().Add(func(e *core.SettingsUpdateEvent) error {
                        log.Println(e.NewSettings)
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
