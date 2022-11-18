<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="Record API hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnRecordsListRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each API <em>Records list</em> request. Could be used to validate or modify the response
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
            Triggered on each API <em>Record view</em> request. Could be used to validate or modify the response
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
            Triggered before each API <em>Record create</em> request (after request data load and before model
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
        <p>
            Triggered after each successful API <em>Record create</em> request.
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
            Triggered before each API <em>Record update</em> request (after request data load and before model
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
        <p>
            Triggered after each successful API <em>Record update</em> request.
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
            Triggered before each API <em>Record delete</em> request (after model load and before actual
            deletion).
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
        <p>
            Triggered after each successful API <em>Record delete</em> request.
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

    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnRecordAuthRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each successful auth record authentication request (sign-in, token refresh, etc.).
            <br />
            Could be used to additionally validate or modify the authenticated auth record data and token.
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

                    app.OnRecordAuthRequest().Add(func(e *core.RecordAuthEvent) error {
                        log.Println(e.Record)
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
            <div class="flex txt-bold txt-select">OnRecordListExternalAuthsRequest</div>
        </svelte:fragment>
        <p>
            Triggered on each successful auth record external auths list request.
            <br />
            Could be used to validate or modify the response before returning it to the client.
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

                    app.OnRecordListExternalAuthsRequest().Add(func(e *core.RecordListExternalAuthsEvent) error {
                        log.Println(e.ExternalAuths)
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
            <div class="flex txt-bold txt-select">OnRecordBeforeUnlinkExternalAuthRequest</div>
        </svelte:fragment>
        <p>
            Triggered before each auth record unlink external auth request (after model load and before the
            actual relation deletion).
            <br />
            Could be used to additionally validate the request data or implement completely different "unlink"
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

                    app.OnRecordBeforeUnlinkExternalAuthRequest().Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth) // the relation is not deleted yet
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
            <div class="flex txt-bold txt-select">OnRecordAfterUnlinkExternalAuthRequest</div>
        </svelte:fragment>
        <p>Triggered after each successful auth record unlink external auth request.</p>
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

                    app.OnRecordAfterUnlinkExternalAuthRequest().Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth) // the relation is already deleted
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
