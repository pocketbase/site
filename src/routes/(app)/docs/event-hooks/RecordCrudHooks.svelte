<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Record CRUD API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnRecordsListRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API Records list request. Could be used to validate or modify the response
            before returning it to the client.
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

                    app.OnRecordsListRequest().Add(func(e *core.RecordsListEvent) error {
                        log.Println(e.Result)
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
            <div class="flex txt-bold txt-select">OnRecordViewRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API Record view request. Could be used to validate or modify the response before
            returning it to the client.
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

                    app.OnRecordViewRequest().Add(func(e *core.RecordViewEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeCreateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API Record create request (after request data load and before model
            persistence).
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

                    app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.Record) // still unsaved
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
            <div class="flex txt-bold txt-select">OnRecordAfterCreateRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful API Record create request.</p>
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

                    app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.Record.Id)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeUpdateRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API Record update request (after request data load and before model
            persistence).
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

                    app.OnRecordBeforeUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.Record.GetStringDataValue("title")) // not saved yet
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
            <div class="flex txt-bold txt-select">OnRecordAfterUpdateRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful API Record update request.</p>
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

                    app.OnRecordAfterUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.Record.Id)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeDeleteRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each API Record delete request (after model load and before actual deletion).
            <br />
            Could be used to additionally validate the request data or implement completely different delete behavior
            (returning <code>hook.StopPropagation</code>).
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

                    app.OnRecordBeforeDeleteRequest().Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.Record.Id) // not deleted yet
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
            <div class="flex txt-bold txt-select">OnRecordAfterDeleteRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful API Record delete request.</p>
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

                    app.OnRecordAfterDeleteRequest().Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.Record.Id) // already deleted from the DB
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
