<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase comes with a builtin DB and data migration utility, allowing you to version your DB structure,
    create collections programmatically, initialize default settings, etc.
</p>
<p>
    Because the migrations are regular Go functions, besides applying schema changes, they could be used also
    to adjust existing data to fit the new schema or any other app specific logic that you want to run only
    once.
</p>
<p>
    And as a bonus, being <code>.go</code> files also ensures that the migrations will be embedded seamlessly in
    your final executable.
</p>

<Toc />

<HeadingLink title="Enable the migrate command" />
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

            // loosely check if it was executed using "go run"
            isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

            migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
                // enable auto creation of migration files when making collection changes in the Admin UI
                // (the isGoRun check is to enable it only during development)
                Automigrate: isGoRun,
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>
<p>
    The above example also shows the <code>Automigrate</code> config option which when enabled will create automatically
    a Go migration file for you for every collection change made in the Admin UI.
</p>

<HeadingLink title="Creating migrations" />
<p>
    To create a new blank migration you can run <code>migrate create</code>.
</p>
<CodeBlock
    content={`
        // Since the "create" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run ..."

        [root@dev app]$ go run main.go migrate create "your_new_migration"
    `}
/>
<div class="clearfix m-t-xs" />
<CodeBlock
    language="go"
    content={`
        // migrations/1655834400_your_new_migration.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                // add up queries...

                return nil
            }, func(db dbx.Builder) error {
                // add down queries...

                return nil
            })
        }
    `}
/>
<p>
    The above will create a new blank migration file inside the configured command <code>migrations</code> directory.
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
<p class="txt-bold">New migrations are applied automatically on <code>serve</code>.</p>
<p>
    Optionally, you could apply new migrations manually by running <code>migrate up</code>.
</p>
<p>
    To revert the last applied migration(s), you could run <code>migrate down [number]</code>.
</p>

<HeadingLink title="Migration file" tag="h5" />
<p>Each migration file should have a single <code>m.Register(upFunc, downFunc)</code> call.</p>
<p>
    In the migration file, you are expected to write your "upgrade" code in the <code>upFunc</code> callback.
    <br />
    The <code>downFunc</code> is optional and it should contains the "downgrade" operations to revert the
    changes made by the <code>upFunc</code>.
</p>
<p>
    Both callbacks accept a single <code>db</code> argument (<code>dbx.Builder</code>) that you can use
    directly or create a <code>Dao</code> instance and use its available helpers. You can explore the
    <a href="/docs/go-database">Database guide</a>
    for more details how to operate with the <code>db</code> object and its available methods.
</p>

<HeadingLink title="Collections snapshot" />
<p>
    PocketBase comes also with a <code>migrate collections</code> command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:
</p>
<CodeBlock
    content={`
        // Since the "collections" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run ..."

        [root@dev app]$ go run main.go migrate collections
    `}
/>
<p>
    Similar to the <code>migrate create</code> command, this will generate a new migration file in the
    <code>migrations</code> directory.
</p>
<p>It is safe to run the command multiple times and generate multiple snapshot migration files.</p>

<HeadingLink title="Migrations history" />
<p>
    All applied migration filenames are stored in the internal <code>_migrations</code> table.
    <br />
    During local development often you might end up making various collection changes to test different approaches.
    <br />
    When <code>Automigrate</code> is enabled this could lead in a migration history with unnecessary intermediate
    steps that may not be wanted in the final migration history.
</p>
<p class="txt-bold">
    To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:
</p>
<CodeBlock content={`[root@dev app]$ go run main.go migrate history-sync`} />
<p>
    The above command will remove any entry from the <code>_migrations</code> table that doesn't have a related
    migration file associated with it.
</p>

<HeadingLink title="Examples" />

<HeadingLink title="Running raw SQL statements" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_set_pending_status.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        // set a default "pending" status to all empty status articles
        func init() {
            m.Register(func(db dbx.Builder) error {
                _, err := db.NewQuery("UPDATE articles SET status = 'pending' WHERE status = ''").Execute()
                return err
            }, nil)
        }
    `}
/>

<HeadingLink title="Initialize default application settings" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_initial_settings.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                dao := daos.New(db)

                settings, _ := dao.FindSettings()
                settings.Meta.AppName = "test"
                settings.Logs.MaxDays = 2

                return dao.SaveSettings(settings)
            }, nil)
        }
    `}
/>

<HeadingLink title="Creating new admin" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_initial_admin.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
            "github.com/pocketbase/pocketbase/models"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                dao := daos.New(db)

                admin := &models.Admin{}
                admin.Email = "test@example.com"
                admin.SetPassword("1234567890")

                return dao.SaveAdmin(admin)
            }, func(db dbx.Builder) error { // optional revert operation

                dao := daos.New(db)

                admin, _ := dao.FindAdminByEmail("test@example.com")
                if admin != nil {
                    return dao.DeleteAdmin(admin)
                }

                // already deleted
                return nil
            })
        }
    `}
/>

<HeadingLink title="Creating new collection record" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_new_example_record.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
            "github.com/pocketbase/pocketbase/models"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                dao := daos.New(db)

                record := models.NewRecord(collections)
                record.Set("title", "Hello world!")
                record.Set("slug", "hello-world")
                record.Set("description", "Lorem ipsum...")
                record.Set("rank", 123)

                return dao.SaveRecord(record)
            }, func(db dbx.Builder) error { // optional revert operation
                dao := daos.New(db)

                record := dao.FindFirstRecordByData("example", "slug", "hello-world")
                if record != nil {
                    return dao.DeleteRecord(record)
                }

                // already deleted
                return nil
            })
        }
    `}
/>
