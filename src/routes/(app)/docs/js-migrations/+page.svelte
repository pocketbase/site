<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase comes with a builtin DB and data migration utility, allowing you to version your DB structure,
    create collections programmatically, initialize default settings and/or run anything that needs to be
    executed only once.
</p>
<p>
    The user defined migrations are located in <code>pb_migrations</code> directory (it can be changed using
    the
    <code>--migrationsDir</code> flag) and each unapplied migration inside it will be executed automatically
    in a transaction on <code>serve</code> (or on <code>migrate up</code>).
</p>
<p>
    The generated migrations are safe to be commited to version control and can be shared with your other team
    members.
</p>

<Toc />

<HeadingLink title="Automigrate" />
<p>
    The prebuilt executable has the <code>--automigrate</code> flag enabled by default, meaning that every collection
    configuration change from the Admin UI will generate the related migration file automatically for you.
</p>

<HeadingLink title="Creating migrations" />
<p>
    To create a new blank migration you can run <code>migrate create</code>.
</p>
<CodeBlock
    content={`
        [root@dev app]$ ./pocketbase migrate create "your_new_migration"
    `}
/>
<div class="clearfix m-t-xs" />
<CodeBlock
    language="javascript"
    content={`
        // pb_migrations/1687801097_your_new_migration.js
        migrate((db) => {
            // add up queries...
        }, (db) => {
            // add down queries...
        })
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
<p>Each migration file should have a single <code>migrate(upFunc, downFunc)</code> call.</p>
<p>
    In the migration file, you are expected to write your "upgrade" code in the <code>upFunc</code> callback.
    <br />
    The <code>downFunc</code> is optional and it should contains the "downgrade" operations to revert the
    changes made by the
    <code>upFunc</code>.
</p>
<p>
    Both callbacks accept a single <code>db</code> argument (<code>dbx.Builder</code>) that you can use
    directly or create a <code>Dao</code> instance and use its available helpers. You can explore the
    <a href="/docs/js-database">Database guide</a>
    for more details how to operate with the <code>db</code> object and its available methods.
</p>

<HeadingLink title="Collections snapshot" />
<p>
    PocketBase comes also with a <code>migrate collections</code> command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:
</p>
<CodeBlock content={`[root@dev app]$ ./pocketbase migrate collections`} />
<p>
    Similar to the <code>migrate create</code> command, this will generate a new migration file in the
    <code>pb_migrations</code> directory.
</p>
<p>It is safe to run the command multiple times and generate multiple snapshot migration files.</p>

<HeadingLink title="Migrations history" />
<p>
    All applied migration filenames are stored in the internal <code>_migrations</code> table.
    <br />
    During local development often you might end up making various collection changes to test different approaches.
    <br />
    When <code>--automigrate</code> is enabled (<em>which is the default</em>) this could lead in a migration
    history with unnecessary intermediate steps that may not be wanted in the final migration history.
</p>
<p class="txt-bold">
    To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:
</p>
<CodeBlock content={`[root@dev app]$ ./pocketbase migrate history-sync`} />
<p>
    The above command will remove any entry from the <code>_migrations</code> table that doesn't have a related
    migration file associated with it.
</p>

<HeadingLink title="Examples" />

<HeadingLink title="Running raw SQL statements" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // pb_migrations/1687801090_set_pending_status.js
        //
        // set a default "pending" status to all empty status articles
        migrate((db) => {
            db.newQuery("UPDATE articles SET status = 'pending' WHERE status = ''")
                .execute()
        })
    `}
/>

<HeadingLink title="Initialize default application settings" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // pb_migrations/1687801090_initial_settings.js
        migrate((db) => {
            const dao = new Dao(db);

            const settings = dao.findSettings()
            settings.meta.appName = "test"
            settings.logs.maxDays = 2

            dao.saveSettings(settings)
        })
    `}
/>

<HeadingLink title="Creating new admin" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // pb_migrations/1687801090_initial_admin.js
        migrate((db) => {
            const dao = new Dao(db);

            const admin = new Admin();
            admin.email = "test@example.com"
            admin.setPassword("1234567890")

            dao.saveAdmin(admin)
        }, (db) => { // optional revert
            const dao = new Dao(db);

            try {
                const admin = dao.findAdminByEmail("test@example.com")

                dao.deleteAdmin(admin)
            } catch (_) { /* most likely already deleted */ }
        })
    `}
/>

<HeadingLink title="Creating new auth record" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // pb_migrations/1687801090_new_users_record.js
        migrate((db) => {
            const dao = new Dao(db);

            const collection = dao.findCollectionByNameOrId("users")

            const record = new Record(collection)
            record.set("name", "John Doe")
            record.set("email", "test@example.com")
            record.setPassword("1234567890")

            dao.saveRecord(record)
        }, (db) => { // optional revert
            const dao = new Dao(db);

            try {
                const record = dao.findAuthRecordByEmail("users", "test@example.com")

                dao.deleteRecord(record)
            } catch (_) { /* most likely already deleted */ }
        })
    `}
/>
