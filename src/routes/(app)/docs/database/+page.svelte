<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    When using PocketBase as framework you have access to its internal query mechanism via the
    <code>app.DB()</code> and <code>app.Dao()</code> instances.
</p>
<!-- prettier-ignore -->
<p>
    <code>app.DB()</code> is a DB query builder
    (<a href="https://github.com/pocketbase/dbx#readme" target="_blank" rel="noopener noreferrer">dbx</a>) instance,
    allowing you to execute safely various SQL statement (including raw queries).
</p>
<p>
    <code>app.Dao()</code> on the other hand is a service layer on top of <code>app.DB()</code>
    that provides helpers to manage the app models. It is also responsible for triggering the
    <code>OnModel*</code> event hooks. You can check all available methods in the
    <a href="{import.meta.env.PB_GODOC_URL}/daos" target="_blank" rel="noopener noreferrer"> godoc </a>
    package documentation but you could could also find some information in the
    <a href="/docs/collection-methods">Collection methods</a> and
    <a href="/docs/record-methods">Record methods</a> docs.
</p>

<Toc />

<HeadingLink title="Query builder" />
<p>
    We use
    <a href="https://github.com/pocketbase/dbx#readme" target="_blank" rel="noopener noreferrer">dbx</a>
    as a query builder to safely compose and run SQL queries. You can find detailed documentation in the
    <!-- prettier-ignore -->
    <a
        href="https://github.com/pocketbase/dbx#readme"
        target="_blank"
        rel="noopener noreferrer"
    >package README</a>, but here is an example to get the general look-and-feel:
</p>
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/dbx"
        )

        ...

        var total int

        err := app.DB().
            Select("count(*)").
            From("articles").
            AndWhere(dbx.HashExp{"status": "active"}).
            AndWhere(dbx.Like("title", "example")).
            Row(&total)
    `}
/>

<HeadingLink title="Transaction" />
<p>
    The easiest way to run multiple queries inside a transaction is to wrap them with
    <code>Dao.RunInTransaction()</code>.
    <br />
    You can nest <code>Dao.RunInTransaction()</code> as many times as you want.
    <br />
    <strong>The transaction will be commited only if there are no errors.</strong>
</p>
<CodeBlock
    language="go"
    content={`
        err := app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
            // update a record
            record, err := txDao.FindRecordById("articles", "RECORD_ID")
            if err != nil {
                return err
            }
            record.Set("status", "active")
            if err := txDao.SaveRecord(record); err != nil {
                return err
            }

            // run some custom raw query
            query := txDao.DB().NewQuery("DELETE articles WHERE status = 'pending'")
            if _, err := query.Execute(); err != nil {
                return err
            }

            return nil
        })
    `}
/>

<HeadingLink title="DAO without event hooks" />
<p>
    By default all DAO modify operations (create, update, delete) trigger the <code>OnModel*</code> event
    hooks.
    <br />
    If you don't want this behavior you can create a new Dao by just passing a DB instance (you can also access
    it from the original one):
</p>
<CodeBlock
    language="go"
    content={`
        record, _ := app.Dao().FindRecordById("articles", "RECORD_ID")

        // the below WILL fire the OnModelBeforeUpdate and OnModelAfterUpdate hooks
        app.Dao().SaveRecord(record)

        // the below WILL NOT fire the OnModelBeforeUpdate and OnModelAfterUpdate hooks
        dao := daos.New(app.Dao().DB())
        dao.SaveRecord(record)
    `}
/>
