<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Realtime API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnRealtimeConnectRequest</div>
        </svelte:fragment>
        <p>Triggered right before establishing the SSE client connection.</p>
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

                    app.OnRealtimeConnectRequest().Add(func(e *core.RealtimeConnectEvent) error {
                        log.Println(e.Client.Id())
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
            <div class="flex txt-bold txt-select">OnRealtimeDisconnectRequest</div>
        </svelte:fragment>
        <p>Triggered on disconnected/interrupted SSE client connection.</p>
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

                    app.OnRealtimeDisconnectRequest().Add(func(e *core.RealtimeDisconnectEvent) error {
                        log.Println(e.Client.Id())
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
            <div class="flex txt-bold txt-select">OnRealtimeBeforeSubscribeRequest</div>
        </svelte:fragment>
        <p>
            Triggered before changing the client subscriptions, allowing you to further validate and modify
            the submitted change.
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

                    app.OnRealtimeBeforeSubscribeRequest().Add(func(e *core.RealtimeSubscribeEvent) error {
                        log.Println(e.Subscriptions)
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
            <div class="flex txt-bold txt-select">OnRealtimeAfterSubscribeRequest</div>
        </svelte:fragment>
        <p>Triggered after the client subscriptions were successfully changed.</p>
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

                    app.OnRealtimeAfterSubscribeRequest().Add(func(e *core.RealtimeSubscribeEvent) error {
                        log.Println(e.Subscriptions)
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
            <div class="flex txt-bold txt-select">OnRealtimeBeforeMessageSend</div>
        </svelte:fragment>
        <p>
            Triggered right before sending an SSE message to a client, allowing to further validate or
            customize the message.
            <br />
            Returning <code>hook.StopPropagation</code> will prevent sending the message.
            <br />
            Returning any other non-nil error will close the SSE connection.
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

                    app.OnRealtimeBeforeMessageSend().Add(func(e *core.RealtimeMessageEvent) error {
                        log.Println(e.Client)
                        log.Println(e.Message) // not sent yet, allowing you to change it
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
            <div class="flex txt-bold txt-select">OnRealtimeAfterMessageSend</div>
        </svelte:fragment>
        <p>Triggered right after sending an SSE message to a client.</p>
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

                    app.OnRealtimeAfterMessageSend().Add(func(e *core.RealtimeMessageEvent) error {
                        log.Println(e.Client)
                        log.Println(e.Message) // already sent
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
