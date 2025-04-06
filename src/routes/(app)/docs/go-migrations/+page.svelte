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
    And as a bonus, being <code>.go</code> files also ensure that the migrations will be embedded seamlessly in
    your final executable.
</p>

<Toc />

<HeadingLink title="Quick setup" />
<HeadingLink title="0. Register the migrate command" tag="h5" />
<p>
    <em>
        You can find all available config options in the
        <a href="{import.meta.env.PB_GODOC_URL}/plugins/migratecmd" target="_blank" rel="noopener noreferrer">
            <code>migratecmd</code>
        </a>
        subpackage.
    </em>
</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"
            "strings"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/plugins/migratecmd"

            // enable once you have at least one migration
            // _ "yourpackage/migrations"
        )

        func main() {
            app := pocketbase.New()

            // loosely check if it was executed using "go run"
            isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

            migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
                // enable auto creation of migration files when making collection changes in the Dashboard
                // (the isGoRun check is to enable it only during development)
                Automigrate: isGoRun,
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<HeadingLink title="1. Create new migration" tag="h5" />
<p>
    To create a new blank migration you can run <code>migrate create</code>.
</p>
<CodeBlock
    content={`
        // Since the "create" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run"

        [root@dev app]$ go run . migrate create "your_new_migration"
    `}
/>
<div class="clearfix m-t-xs" />
<CodeBlock
    language="go"
    content={`
        // migrations/1655834400_your_new_migration.go
        package migrations

        import (
            "github.com/pocketbase/pocketbase/core"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(app core.App) error {
                // add up queries...

                return nil
            }, func(app core.App) error {
                // add down queries...

                return nil
            })
        }
    `}
/>
<p>
    The above will create a new blank migration file inside the default command <code>migrations</code> directory.
</p>
<p>Each migration file should have a single <code>m.Register(upFunc, downFunc)</code> call.</p>
<p>
    In the migration file, you are expected to write your "upgrade" code in the <code>upFunc</code> callback.
    <br />
    The <code>downFunc</code> is optional and it should contain the "downgrade" operations to revert the
    changes made by the <code>upFunc</code>.
    <br />
    Both callbacks accept a transactional <code>core.App</code> instance.
</p>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            You can explore the
            <a href="/docs/go-database">Database guide</a>,
            <a href="/docs/go-collections">Collection operations</a> and
            <a href="/docs/go-records">Record operations</a>
            for more details how to interact with the database. You can also find
            <a href="#examples">some examples</a> further below in ths guide.
        </p>
    </div>
</div>

<HeadingLink title="2. Load migrations" tag="h5" />
<p class="txt-bold">
    To make your application aware of the registered migrations, you have to import the above
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

<HeadingLink title="3. Run migrations" tag="h5" />
<p class="txt-bold">
    New unapplied migrations are automatically executed when the application server starts, aka. on
    <code>serve</code>.
</p>
<p>
    Alternatively, you can also apply new migrations manually by running <code>migrate up</code>.
    <br />
    To revert the last applied migration(s), you can run <code>migrate down [number]</code>.
    <br />
    <small class="txt-hint">
        When manually applying or reverting migrations, the <code>serve</code> process needs to be restarted so
        that it can refresh its cached collections state.
    </small>
</p>

<HeadingLink title="Collections snapshot" />
<p>
    The <code>migrate collections</code> command generates a full snapshot of your current collections
    configuration without having to type it manually. Similar to the <code>migrate create</code> command, this
    will generate a new migration file in the
    <code>migrations</code> directory.
</p>
<CodeBlock
    content={`
        // Since the "collections" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run"

        [root@dev app]$ go run . migrate collections
    `}
/>
<p>
    By default the collections snapshot is imported in <em>extend</em> mode, meaning that collections and
    fields that don't exist in the snapshot are preserved. If you want the snapshot to <em>delete</em>
    missing collections and fields, you can edit the generated file and change the last argument of
    <code>ImportCollectionsByMarshaledJSON</code> method to <code>true</code>.
</p>

<HeadingLink title="Migrations history" />
<p>
    All applied migration filenames are stored in the internal <code>_migrations</code> table.
    <br />
    During local development often you might end up making various collection changes to test different approaches.
    <br />
    When <code>Automigrate</code> is enabled this could lead in a migration history with unnecessary intermediate
    steps that may not be wanted in the final migration history.
</p>
<p>
    To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:
</p>
<CodeBlock content={`[root@dev app]$ go run . migrate history-sync`} />
<p>
    The above command will remove any entry from the <code>_migrations</code> table that doesn't have a related
    migration file associated with it.
</p>

<HeadingLink title="Examples" />

<HeadingLink title="Executing raw SQL statements" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_set_pending_status.go
        package migrations

        import (
            "github.com/pocketbase/pocketbase/core"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        // set a default "pending" status to all empty status articles
        func init() {
            m.Register(func(app core.App) error {
                _, err := app.DB().NewQuery("UPDATE articles SET status = 'pending' WHERE status = ''").Execute()
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
            "github.com/pocketbase/pocketbase/core"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(app core.App) error {
                settings := app.Settings()

                // for all available settings fields you could check
                // https://github.com/pocketbase/pocketbase/blob/develop/core/settings_model.go#L121-L130
                settings.Meta.AppName = "test"
                settings.Meta.AppURL = "https://example.com"
                settings.Logs.MaxDays = 2
                settings.Logs.LogAuthId = true
                settings.Logs.LogIP = false

                return app.Save(settings)
            }, nil)
        }
    `}
/>

<HeadingLink title="Creating initial superuser" tag="h5" />
<p>
    <em>
        For all supported record methods, you can refer to
        <a href="/docs/go-records">Record operations</a>
    </em>
    .
</p>
<p>
    <em>
        You can also create the initial super user using the
        <code>./pocketbase superuser create EMAIL PASS</code>
        command.
    </em>
</p>
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_initial_superuser.go
        package migrations

        import (
            "github.com/pocketbase/pocketbase/core"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(app core.App) error {
                superusers, err := app.FindCollectionByNameOrId(core.CollectionNameSuperusers)
                if err != nil {
                    return err
                }

                record := core.NewRecord(superusers)

                // note: the values can be eventually loaded via os.Getenv(key)
                // or from a special local config file
                record.Set("email", "test@example.com")
                record.Set("password", "1234567890")

                return app.Save(record)
            }, func(app core.App) error { // optional revert operation
                record, _ := app.FindAuthRecordByEmail(core.CollectionNameSuperusers, "test@example.com")
                if record == nil {
                    return nil // probably already deleted
                }

                return app.Delete(record)
            })
        }
    `}
/>

<HeadingLink title="Creating collection programmatically" tag="h5" />
<p>
    <em>
        For all supported collection methods, you can refer to
        <a href="/docs/go-collections">Collection operations</a>
    </em>
    .
</p>
<CodeBlock
    language="go"
    content={`
        // migrations/1687801090_create_clients_collection.go
        package migrations

        import (
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/types"

            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(app core.App) error {
                // init a new auth collection with the default system fields and auth options
                collection := core.NewAuthCollection("clients")

                // restrict the list and view rules for record owners
                collection.ListRule = types.Pointer("id = @request.auth.id")
                collection.ViewRule = types.Pointer("id = @request.auth.id")

                // add extra fields in addition to the default ones
                collection.Fields.Add(
                    &core.TextField{
                        Name:     "company",
                        Required: true,
                        Max:      100,
                    },
                    &core.URLField{
                        Name:        "website",
                        Presentable: true,
                    },
                )

                // disable password auth and enable OTP only
                collection.PasswordAuth.Enabled = false
                collection.OTP.Enabled = true

                collection.AddIndex("idx_clients_company", false, "company", "")

                return app.Save(collection)
            }, func(app core.App) error { // optional revert operation
                collection, err := app.FindCollectionByNameOrId("clients")
                if err != nil {
                    return err
                }

                return app.Delete(collection)
            })
        }
    `}
/>
