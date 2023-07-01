<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
</script>

<HeadingLink title="DB hooks" />
<div class="accordions m-b-base">
    <Accordion single>
        <svelte:fragment slot="header">
            <div class="flex txt-bold txt-select">OnModelBeforeCreate</div>
        </svelte:fragment>
        <p>
            Triggered before inserting a new entry in the DB, allowing you to modify or validate the stored
            data.
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

                            app.OnModelBeforeCreate().Add(func(e *core.ModelEvent) error {
                                log.Println(e.Model.TableName())
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
            <div class="flex txt-bold txt-select">OnModelAfterCreate</div>
        </svelte:fragment>
        <p>Triggered after successfully inserting a new entry in the DB.</p>
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

                            app.OnModelAfterCreate().Add(func(e *core.ModelEvent) error {
                                log.Println(e.Model.TableName())
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
            <div class="flex txt-bold txt-select">OnModelBeforeUpdate</div>
        </svelte:fragment>
        <p>
            Triggered before updating existing entry in the DB, allowing you to modify or validate the stored
            data.
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

                            app.OnModelBeforeUpdate().Add(func(e *core.ModelEvent) error {
                                log.Println(e.Model.TableName())
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
            <div class="flex txt-bold txt-select">OnModelAfterUpdate</div>
        </svelte:fragment>
        <p>Triggered after successfully updating existing entry in the DB.</p>
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

                            app.OnModelAfterUpdate().Add(func(e *core.ModelEvent) error {
                                log.Println(e.Model.TableName())
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
            <div class="flex txt-bold txt-select">OnModelBeforeDelete</div>
        </svelte:fragment>
        <p>Triggered before deleting an existing entry from the DB.</p>
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

                            app.OnModelBeforeDelete().Add(func(e *core.ModelEvent) error {
                                log.Println(e.Model.GetId())
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
            <div class="flex txt-bold txt-select">OnModelAfterDelete</div>
        </svelte:fragment>
        <p>Triggered after successfully deleting an existing entry from the DB.</p>
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

                            app.OnModelAfterDelete().Add(func(e *core.ModelEvent) error {
                                log.Println(e.Model.GetId())
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
