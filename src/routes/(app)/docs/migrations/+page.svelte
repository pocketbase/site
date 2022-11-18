<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase comes with a very simple database migrations runner accessible via the
    <code>migrate</code> command.
</p>

<Toc />

<HeadingLink title="migrate create" />

<p>
    The easiest way to create a new migration is to use <code>migrate create</code> during development:
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
    The above will create a new directory <code>migrations</code> with the generated migration file inside it:
</p>
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

<p>
    When you deploy the final executable on your production server,
    <strong>the new migrations will be auto applied with the start of the application</strong>. Optionally,
    you could apply them explicitly using <code>migrate up</code>:
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
    Since
    <a
        href="https://github.com/pocketbase/pocketbase/releases/tag/v0.4.0"
        target="_blank"
        rel="noreferrer noopener"
    >
        v0.4.0
    </a>
    PocketBase comes with a new <code>migrate collections</code> command that will generate a full snapshot of
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

<p>
    It is safe to run the command multiple times and generate multiple migration files. The recommended flow
    usually is:
</p>
<ol>
    <li>make Collection(s) changes <em>locally</em> from the Admin UI</li>
    <li>run the <code>migrate collections</code> command</li>
    <li>build your app, aka. <code>go build</code></li>
    <li>deploy on <em>prod</em></li>
    <li>repeat...</li>
</ol>
<p>
    You can visually review how the migration will be applied by copying the JSON from the generated migration
    file and paste it in the receiving environment in <em>"Admin UI > Settings > Import collections"</em>.
</p>

<div class="alert alert-danger m-t-sm m-b-sm">
    <div class="content">
        <p>
            PocketBase allows making Collection changes from the Admin UI and therefore there are some
            caveats/limitations related to the automated Collections migration:
        </p>
        <ul>
            <li><strong>It works only for new projects (v0.4.0+).</strong></li>
            <li>
                It is recommended to enable the
                <em>"Hide collection create and edit controls"</em> option in the Admin UI on the
                <em>prod</em> environment.
                <br />
                <small>
                    This is because manual Collection changes made from the Admin UI in the migration
                    receiving environment (eg. <em>prod</em>) could conflict with the migration file generated
                    from the
                    <em>local</em> environment since the migration relies on the Collection and Field IDs, which
                    will differ on the two environments if created manually.
                </small>
            </li>
        </ul>
    </div>
</div>
