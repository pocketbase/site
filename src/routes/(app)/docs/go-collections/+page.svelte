<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import fieldNames from "../field_names.js";
</script>

<p>
    Collections are usually managed via the Dashboard interface, but there are some situations where you may
    want to create or edit a collection programmatically (usually as part of a
    <a href="/docs/go-migrations">DB migration</a>). You can find all available Collection related operations
    and methods in
    <a href="{import.meta.env.PB_GODOC_URL}/core#App" target="_blank" rel="noopener noreferrer">
        <code>core.App</code>
    </a>
    and
    <a href="{import.meta.env.PB_GODOC_URL}/core#Collection" target="_blank" rel="noopener noreferrer">
        <code>core.Collection</code>
    </a>
    , but below are listed some of the most common ones:
</p>

<Toc />

<HeadingLink title="Fetch collections" />

<HeadingLink title="Fetch single collection" tag="h5" />
<p class="txt-hint">
    All single collection retrieval methods return <code>nil</code> and <code>sql.ErrNoRows</code> error if no
    collection is found.
</p>
<CodeBlock
    language="go"
    content={`
        collection, err := app.FindCollectionByNameOrId("example")
    `}
/>

<HeadingLink title="Fetch multiple collections" tag="h5" />
<p class="txt-hint">
    All multiple collections retrieval methods return empty slice and <code>nil</code> error if no collections
    are found.
</p>
<CodeBlock
    language="go"
    content={`
        allCollections, err := app.FindAllCollections()

        authAndViewCollections, err := app.FindAllCollections(core.CollectionTypeAuth, core.CollectionTypeView)
    `}
/>

<HeadingLink title="Custom collection query" tag="h5" />
<p>
    In addition to the above query helpers, you can also create custom Collection queries using
    <a href="{import.meta.env.PB_GODOC_URL}/core#CollectionQuery" target="_blank" rel="noopener noreferrer">
        <code>CollectionQuery()</code>
    </a>
    method. It returns a SELECT DB builder that can be used with the same methods described in the
    <a href="/docs/go-database">Database guide</a>.
</p>
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        func FindSystemCollections(app core.App) ([]*core.Collection, error) {
            collections := []*core.Collection{}

            err := app.CollectionQuery().
                AndWhere(dbx.HashExp{"system": true}).
                OrderBy("created DESC").
                All(&collections)

            if err != nil {
                return nil, err
            }

            return collections, nil
        }
    `}
/>

<HeadingLink title="Collection properties" />
<!-- note: listed temporary until godoc adds support for promoting the public fields and method of embedded unexported types -->
<!-- prettier-ignore -->
<CodeBlock
    language="go"
    content={`
        Id      string
        Name    string
        Type    string // "base", "view", "auth"
        System  bool // !prevent collection rename, deletion and rules change of internal collections like _superusers
        Fields  core.FieldsList
        Indexes types.JSONArray[string]
        Created types.DateTime
        Updated types.DateTime

        // CRUD rules
        ListRule   *string
        ViewRule   *string
        CreateRule *string
        UpdateRule *string
        DeleteRule *string

        // "view" type specific options
        // (see ` + import.meta.env.PB_REPO_URL + `/blob/master/core/collection_model_view_options.go)
        ViewQuery string

        // "auth" type specific options
        // (see ` + import.meta.env.PB_REPO_URL + `/blob/master/core/collection_model_auth_options.go)
        AuthRule                   *string
        ManageRule                 *string
        AuthAlert                  core.AuthAlertConfig
        OAuth2                     core.OAuth2Config
        PasswordAuth               core.PasswordAuthConfig
        MFA                        core.MFAConfig
        OTP                        core.OTPConfig
        AuthToken                  core.TokenConfig
        PasswordResetToken         core.TokenConfig
        EmailChangeToken           core.TokenConfig
        VerificationToken          core.TokenConfig
        FileToken                  core.TokenConfig
        VerificationTemplate       core.EmailTemplate
        ResetPasswordTemplate      core.EmailTemplate
        ConfirmEmailChangeTemplate core.EmailTemplate
    `}
/>

<HeadingLink title="Field definitions" />
<ul>
    {#each fieldNames as field}
        <li>
            <a href="{import.meta.env.PB_GODOC_URL}/core#{field}" target="_blank" rel="noopener noreferrer">
                <code>core.{field}</code>
            </a>
        </li>
    {/each}
</ul>

<HeadingLink title="Create new collection" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/types"
        )

        ...

        // core.NewAuthCollection("example")
        // core.NewViewCollection("example")
        collection := core.NewBaseCollection("example")

        // set rules
        collection.ViewRule = types.Pointer("@request.auth.id != ''")
        collection.CreateRule = types.Pointer("@request.auth.id != '' && @request.body.user = @request.auth.id")
        collection.UpdateRule = types.Pointer(` +
        "`" +
        `
            @request.auth.id != '' &&
            user = @request.auth.id &&
            (@request.body.user:isset = false || @request.body.user = @request.auth.id)
        ` +
        "`" +
        `)

        // add text field
        collection.Fields.Add(&core.TextField{
            Name:     "title",
            Required: true,
            Max:      100,
        })

        // add relation field
        usersCollection, err := app.FindCollectionByNameOrId("users")
        if err != nil {
            return err
        }
        collection.Fields.Add(&core.RelationField{
            Name:          "user",
            Required:      true,
            Max:           100,
            CascadeDelete: true,
            CollectionId:  usersCollection.Id,
        })

        // add autodate/timestamp fields (created/updated)
        collection.Fields.Add(&core.AutodateField{
            Name:     "created",
            OnCreate: true,
        })
        collection.Fields.Add(&core.AutodateField{
            Name:     "updated",
            OnCreate: true,
            OnUpdate: true,
        })

        // or: collection.Indexes = []string{"CREATE UNIQUE INDEX idx_example_user ON example (user)"}
        collection.AddIndex("idx_example_user", true, "user", "")

        // validate and persist
        // (use SaveNoValidate to skip fields validation)
        err = app.Save(collection)
        if err != nil {
            return err
        }
    `}
/>

<HeadingLink title="Update existing collection" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/types"
        )

        ...

        collection, err := app.FindCollectionByNameOrId("example")
        if err != nil {
            return err
        }

        // change rule
        collection.DeleteRule = types.Pointer("@request.auth.id != ''")

        // add new editor field
        collection.Fields.Add(&core.EditorField{
            Name:     "description",
            Required: true,
        })

        // change existing field
        // (returns a pointer and direct modifications are allowed without the need of reinsert)
        titleField := collection.Fields.GetByName("title")
        titleField.Min = 10

        // or: collection.Indexes = append(collection.Indexes, "CREATE INDEX idx_example_title ON example (title)")
        collection.AddIndex("idx_example_title", false, "title", "")

        // validate and persist
        // (use SaveNoValidate to skip fields validation)
        err = app.Save(collection)
        if err != nil {
            return err
        }
    `}
/>

<HeadingLink title="Delete collection" />
<CodeBlock
    language="go"
    content={`
        collection, err := app.FindCollectionByNameOrId("example")
        if err != nil {
            return err
        }

        err = app.Delete(collection)
        if err != nil {
            return err
        }
    `}
/>
