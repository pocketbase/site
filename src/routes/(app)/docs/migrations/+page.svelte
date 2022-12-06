<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase provides a simple <code>migrate</code> command, allowing you to share your DB structure, create
    collections programmatically, initialize default settings and/or run anything that needs to be executed only
    once.
</p>

<p>
    The <code>migrate</code> command comes also with "automigrate" functionality that will create seamlessly the
    necessary migration files for you when making collection changes from the Admin UI.
</p>

<p>You can write migrations with Go or <em>JavaScript (more information will be available soon)</em>.</p>

<Toc />

<HeadingLink title="Enable Go migrations" />

<p>
    The prebuilt executable enables the <code>migrate</code> command by default, but when you are extending PocketBase
    with Go you have to enable it manually:
</p>

<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/plugins/migratecmd"

            // uncomment once you have at least one .go migration file in the "migrations" directory
            // _ "yourpackage/migrations"
        )

        func main() {
            app := pocketbase.New()

            migratecmd.MustRegister(app, app.RootCmd, &migratecmd.Options{
                Automigrate: true, // auto creates migration files when making collection changes
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<HeadingLink title="migrate create" />

<p>
    The easiest way to create a new migration file is to use <code>migrate create</code> during development:
</p>
<CodeBlock
    content={`
        // Since the "create" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run ..."

        [root@dev project]$ go run main.go migrate create "your_new_migration"
    `}
/>
<p>
    The above will create a new directory <code>migrations</code> with a blank migration file inside it.
</p>

<p class="txt-bold">
    To make your application aware of the registered migrations, you simply have to import the above
    <code>migrations</code> package in one of your <code>main</code> package files:
</p>
<CodeBlock
    language="go"
    content={`
        package main

        import _ "yourpackage/migrations"

        // ...
    `}
/>

<p>Here is for example what a single migration file could look like:</p>
<CodeBlock
    language="go"
    content={`
        // migrations/1655834400_your_new_migration.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                // set a default "pending" status to all articles
                query := db.NewQuery("UPDATE articles SET status = 'pending' WHERE status = ''")
                if _, err := query.Execute(); err != nil {
                    return err
                }

                // you can also access the Dao helpers
                dao := daos.New(db)
                record, _ := dao.FindRecordById("articles", "RECORD_ID")
                record.Set("status", "active")
                if err := dao.SaveRecord(record); err != nil {
                    return err
                }

                // and even set default app settings
                settings, _ := dao.FindSettings()
                settings.Meta.AppName = "test"
                settings.Smtp.Enabled = false
                if err := dao.SaveSettings(settings); err != nil {
                    return err
                }

                return nil
            }, func(db dbx.Builder) error {
                // revert changes...

                return nil
            })
        }
    `}
/>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        Because the migrations are Go functions, besides applying schema changes, they could be used also to
        adjust existing data to fit the new schema or any other app specific logic that you want to run only
        once.
        <br />
        And as a bonus, being <code>.go</code> files also ensures that the migrations will be embedded seamlessly
        in your final executable.
    </div>
</div>

<p class="txt-bold">
    When you deploy the final executable on your production server, the new migrations will be auto applied
    with the start of the application.
</p>

<p>
    Optionally, you could apply new migrations explicitly using <code>migrate up</code>:
</p>
<CodeBlock
    content={`
        [root@dev ~]$ ./yourapp migrate up
    `}
/>

<p>To revert the last applied migration(s), you could run <code>migrate down [number]</code>:</p>
<CodeBlock
    content={`
        [root@dev ~]$ ./yourapp migrate down
    `}
/>

<HeadingLink title="migrate collections" />
<p>
    PocketBase comes also with a <code>migrate collections</code> command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:
</p>
<CodeBlock
    content={`
        // Since the "collections" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run ..."

        [root@dev project]$ go run main.go migrate collections
    `}
/>
<p>
    Similar to the <code>migrate create</code> command, this will generate a new migration file in the
    <code>migrations</code> directory.
</p>

<p>It is safe to run the command multiple times and generate multiple migration files.</p>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            If <code>Automigrate</code> is enabled, running this command usually is not necessarily since every
            collection change will have its own migration file.
        </p>
    </div>
</div>
