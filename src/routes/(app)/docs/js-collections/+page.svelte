<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import fieldNames from "../field_names.js";
</script>

<p>
    Collections are usually managed via the Dashboard interface, but there are some situations where you may
    want to create or edit a collection programmatically (usually as part of a
    <a href="/docs/js-migrations">DB migration</a>). You can find all available Collection related operations
    and methods in
    <a href="/jsvm/modules/_app.html" target="_blank" rel="noopener noreferrer">
        <code>$app</code>
    </a>
    and
    <a href="/jsvm/classes/Collection.html" target="_blank" rel="noopener noreferrer">
        <code>Collection</code>
    </a>
    , but below are listed some of the most common ones:
</p>

<Toc />

<HeadingLink title="Fetch collections" />

<HeadingLink title="Fetch single collection" tag="h5" />
<p class="txt-hint">All single collection retrieval methods throw an error if no collection is found.</p>
<CodeBlock
    language="javascript"
    content={`
        let collection = $app.findCollectionByNameOrId("example")
    `}
/>

<HeadingLink title="Fetch multiple collections" tag="h5" />
<p class="txt-hint">
    All multiple collections retrieval methods return an empty array if no collections are found.
</p>
<CodeBlock
    language="javascript"
    content={`
        let allCollections = $app.findAllCollections(/* optional types */)

        // only specific types
        let authAndViewCollections := $app.findAllCollections("auth", "view")
    `}
/>

<HeadingLink title="Custom collection query" tag="h5" />
<p>
    In addition to the above query helpers, you can also create custom Collection queries using
    <a href="/jsvm/functions/_app.collectionQuery.html" target="_blank" rel="noopener noreferrer">
        <code>$app.collectionQuery()</code>
    </a>
    method. It returns a SELECT DB builder that can be used with the same methods described in the
    <a href="/docs/js-database">Database guide</a>.
</p>
<CodeBlock
    language="javascript"
    content={`
        let collections = arrayOf(new Collection)

        $app.collectionQuery().
            andWhere($dbx.hashExp({"viewRule": null})).
            orderBy("created DESC").
            all(collections)
    `}
/>

<HeadingLink title="Field definitions" />
<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            All collection fields <em>(with exception of the <code>JSONField</code>)</em> are non-nullable and
            uses a zero-default for their respective type as fallback value when missing.
        </p>
    </div>
</div>
<ul>
    {#each fieldNames as field}
        <li>
            <a href="/jsvm/classes/{field}.html" target="_blank" rel="noopener noreferrer">
                <code>new {field}({`{ ... }`})</code>
            </a>
        </li>
    {/each}
</ul>

<HeadingLink title="Create new collection" />
<CodeBlock
    language="javascript"
    content={`
        // missing default options, system fields like id, email, etc. are initialized automatically
        // and will be merged with the provided configuration
        let collection = new Collection({
            type:       "base", // base | auth | view
            name:       "example",
            listRule:   null,
            viewRule:   "@request.auth.id != ''",
            createRule: "",
            updateRule: "@request.auth.id != ''",
            deleteRule: null,
            fields: [
                {
                    name:     "title",
                    type:     "text",
                    required: true,
                    max: 10,
                },
                {
                    name:          "user",
                    type:          "relation",
                    required:      true,
                    maxSelect:     1,
                    collectionId:  "ae40239d2bc4477",
                    cascadeDelete: true,
                },
            ],
            indexes: [
                "CREATE UNIQUE INDEX idx_user ON example (user)"
            ],
        })

        // validate and persist
        // (use saveNoValidate to skip fields validation)
        $app.save(collection)
    `}
/>

<HeadingLink title="Update existing collection" />
<CodeBlock
    language="javascript"
    content={`
        let collection = $app.findCollectionByNameOrId("example")

        // change the collection name
        collection.name = "example_update"

        // add new editor field
        collection.fields.add(new EditorField({
            name:     "description",
            required: true,
        }))

        // change existing field
        // (returns a pointer and direct modifications are allowed without the need of reinsert)
        let titleField = collection.fields.getByName("title")
        titleField.min = 10

        // or: collection.indexes.push("CREATE INDEX idx_example_title ON example (title)")
        collection.addIndex("idx_example_title", false, "title", "")

        // validate and persist
        // (use saveNoValidate to skip fields validation)
        $app.save(collection)
    `}
/>

<HeadingLink title="Delete collection" />
<CodeBlock
    language="javascript"
    content={`
        let collection = $app.findCollectionByNameOrId("example")

        $app.delete(collection)
    `}
/>
