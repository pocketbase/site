<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import TransactionInfoGo from "../TransactionInfoGo.svelte";
</script>

<p>
    The most common task when using PocketBase as framework probably would be querying and working with your
    collection records.
</p>
<p>
    You could find detailed documentation about all the supported Record model methods in
    <a href="{import.meta.env.PB_GODOC_URL}/core#Record" target="_blank" rel="noopener noreferrer">
        <code>core.Record</code>
    </a>
    but below are some examples with the most common ones.
</p>

<Toc />

<HeadingLink title="Set field value" />
<CodeBlock
    language="go"
    content={`
        // sets the value of a single record field
        // (field type specific modifiers are also supported)
        record.Set("title", "example")
        record.Set("users+", "6jyr1y02438et52") // append to existing value

        // populates a record from a data map
        // (calls Set for each entry of the map)
        record.Load(data)
    `}
/>

<HeadingLink title="Get field value" />
<CodeBlock
    language="go"
    content={`
        // retrieve a single record field value
        // (field specific modifiers are also supported)
        record.Get("someField")            // -> any (without cast)
        record.GetBool("someField")        // -> cast to bool
        record.GetString("someField")      // -> cast to string
        record.GetInt("someField")         // -> cast to int
        record.GetFloat("someField")       // -> cast to float64
        record.GetDateTime("someField")    // -> cast to types.DateTime
        record.GetStringSlice("someField") // -> cast to []string

        // retrieve the new uploaded files
        // (e.g. for inspecting and modifying the file(s) before save)
        record.GetUnsavedFiles("someFileField")

        // unmarshal a single "json" field value into the provided result
        record.UnmarshalJSONField("someJSONField", &result)

        // retrieve a single or multiple expanded data
        record.ExpandedOne("author")     // -> nil|*core.Record
        record.ExpandedAll("categories") // -> []*core.Record

        // export all the public safe record fields as map[string]any
        // (note: "json" type field values are exported as types.JSONRaw bytes slice)
        record.PublicExport()
    `}
/>

<HeadingLink title="Auth accessors" />
<CodeBlock
    language="go"
    content={`
        record.IsSuperuser() // alias for record.Collection().Name == "_superusers"

        record.Email()         // alias for record.Get("email")
        record.SetEmail(email) // alias for record.Set("email", email)

        record.Verified()         // alias for record.Get("verified")
        record.SetVerified(false) // alias for record.Set("verified", false)

        record.TokenKey()        // alias for record.Get("tokenKey")
        record.SetTokenKey(key)  // alias for record.Set("tokenKey", key)
        record.RefreshTokenKey() // alias for record.Set("tokenKey:autogenerate", "")

        record.ValidatePassword(pass)
        record.SetPassword(pass)   // alias for record.Set("password", pass)
        record.SetRandomPassword() // sets cryptographically random 30 characters string as password
    `}
/>

<HeadingLink title="Copies" />
<CodeBlock
    language="go"
    content={`
        // returns a shallow copy of the current record model populated
        // with its ORIGINAL db data state and everything else reset to the defaults
        // (usually used for comparing old and new field values)
        record.Original()

        // returns a shallow copy of the current record model populated
        // with its LATEST data state and everything else reset to the defaults
        // (aka. no expand, no custom fields and with default visibility flags)
        record.Fresh()

        // returns a shallow copy of the current record model populated
        // with its ALL collection and custom fields data, expand and visibility flags
        record.Clone()
    `}
/>

<HeadingLink title="Hide/Unhide fields" />
<p>
    Collection fields can be marked as "Hidden" from the Dashboard to prevent regular user access to the field
    values.
</p>
<p>
    Record models provide an option to further control the fields serialization visibility in addition to the
    "Hidden" fields option using the
    <a href="{import.meta.env.PB_GODOC_URL}/core#Record.Hide" target="_blank" rel="noopener noreferrer">
        <code>record.Hide(fieldNames...)</code>
    </a>
    and
    <a href="{import.meta.env.PB_GODOC_URL}/core#Record.Unhide" target="_blank" rel="noopener noreferrer">
        <code>record.Unhide(fieldNames...)</code>
    </a>
    methods.
</p>
<p>
    Often the <code>Hide/Unhide</code> methods are used in combination with the <code>OnRecordEnrich</code> hook
    invoked on every record enriching (list, view, create, update, realtime change, etc.). For example:
</p>
<CodeBlock
    language="go"
    content={`
        app.OnRecordEnrich("articles").BindFunc(func(e *core.RecordEnrichEvent) error {
            // dynamically show/hide a record field depending on whether the current
            // authenticated user has a certain "role" (or any other field constraint)
            if e.RequestInfo.Auth == nil ||
                (!e.RequestInfo.Auth.IsSuperuser() && e.RequestInfo.Auth.GetString("role") != "staff") {
                e.Record.Hide("someStaffOnlyField")
            }

            return e.Next()
        })
    `}
/>
<div class="alert alert-info m-t-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            For custom fields, not part of the record collection schema, it is required to call explicitly
            <code>record.WithCustomData(true)</code> to allow them in the public serialization.
        </p>
    </div>
</div>

<HeadingLink title="Fetch records" />

<HeadingLink title="Fetch single record" tag="h5" />
<p class="txt-hint">
    All single record retrieval methods return <code>nil</code> and <code>sql.ErrNoRows</code> error if no record
    is found.
</p>
<CodeBlock
    language="go"
    content={`
        // retrieve a single "articles" record by its id
        record, err := app.FindRecordById("articles", "RECORD_ID")

        // retrieve a single "articles" record by a single key-value pair
        record, err := app.FindFirstRecordByData("articles", "slug", "test")

        // retrieve a single "articles" record by a string filter expression
        // (NB! use "{:placeholder}" to safely bind untrusted user input parameters)
        record, err := app.FindFirstRecordByFilter(
            "articles",
            "status = 'public' && category = {:category}",
            dbx.Params{ "category": "news" },
        )
    `}
/>

<HeadingLink title="Fetch multiple records" tag="h5" />
<p class="txt-hint">
    All multiple records retrieval methods return empty slice and <code>nil</code> error if no records are found.
</p>
<CodeBlock
    language="go"
    content={`
        // retrieve multiple "articles" records by their ids
        records, err := app.FindRecordsByIds("articles", []string{"RECORD_ID1", "RECORD_ID2"})

        // retrieve the total number of "articles" records in a collection with optional dbx expressions
        totalPending, err := app.CountRecords("articles", dbx.HashExp{"status": "pending"})

        // retrieve multiple "articles" records with optional dbx expressions
        records, err := app.FindAllRecords("articles",
            dbx.NewExp("LOWER(username) = {:username}", dbx.Params{"username": "John.Doe"}),
            dbx.HashExp{"status": "pending"},
        )

        // retrieve multiple paginated "articles" records by a string filter expression
        // (NB! use "{:placeholder}" to safely bind untrusted user input parameters)
        records, err := app.FindRecordsByFilter(
            "articles",                                    // collection
            "status = 'public' && category = {:category}", // filter
            "-published",                                   // sort
            10,                                            // limit
            0,                                             // offset
            dbx.Params{ "category": "news" },              // optional filter params
        )
    `}
/>

<HeadingLink title="Fetch auth records" tag="h5" />
<CodeBlock
    language="go"
    content={`
        // retrieve a single auth record by its email
        user, err := app.FindAuthRecordByEmail("users", "test@example.com")

        // retrieve a single auth record by JWT
        // (you could also specify an optional list of accepted token types)
        user, err := app.FindAuthRecordByToken("YOUR_TOKEN", core.TokenTypeAuth)
    `}
/>

<HeadingLink title="Custom record query" tag="h5" />
<p>
    In addition to the above query helpers, you can also create custom Record queries using
    <a href="{import.meta.env.PB_GODOC_URL}/core#RecordQuery" target="_blank" rel="noopener noreferrer">
        <code>RecordQuery(collection)</code>
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

        func FindActiveArticles(app core.App) ([]*core.Record, error) {
            records := []*core.Record{}

            err := app.RecordQuery("articles").
                AndWhere(dbx.HashExp{"status": "active"}).
                OrderBy("published DESC").
                Limit(10).
                All(&records)

            if err != nil {
                return nil, err
            }

            return records, nil
        }
    `}
/>

<HeadingLink title="Create new record" />

<HeadingLink title="Create new record programmatically" tag="h5" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/filesystem"
        )

        ...

        collection, err := app.FindCollectionByNameOrId("articles")
        if err != nil {
            return err
        }

        record := core.NewRecord(collection)

        record.Set("title", "Lorem ipsum")
        record.Set("active", true)

        // field type specific modifiers can also be used
        record.Set("slug:autogenerate", "post-")

        // new files must be one or a slice of *filesystem.File values
        //
        // note1: see all factories in ` +
        import.meta.env.PB_GODOC_URL +
        `/tools/filesystem#File
        // note2: for reading files from a request event you can also use e.FindUploadedFiles("fileKey")
        f1, _ := filesystem.NewFileFromPath("/local/path/to/file1.txt")
        f2, _ := filesystem.NewFileFromBytes([]byte{"test content"}, "file2.txt")
        f3, _ := filesystem.NewFileFromURL(context.Background(), "https://example.com/file3.pdf")
        record.Set("documents", []*filesystem.File{f1, f2, f3})

        // validate and persist
        // (use SaveNoValidate to skip fields validation)
        err = app.Save(record);
        if err != nil {
            return err
        }
    `}
/>

<HeadingLink title="Intercept create request" tag="h5" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnRecordCreateRequest("articles").BindFunc(func(e *core.RecordRequestEvent) error {
            // ignore for superusers
            if e.HasSuperuserAuth() {
                return e.Next()
            }

            // overwrite the submitted "status" field value
            e.Record.Set("status", "pending")

            // or you can also prevent the create event by returning an error
            status := e.Record.GetString("status")
            if (status != "pending" &&
                // guest or not an editor
                (e.Auth == nil || e.Auth.GetString("role") != "editor")) {
                return e.BadRequestError("Only editors can set a status different from pending", nil)
            }

            return e.Next()
        })
    `}
/>

<HeadingLink title="Update existing record" />

<HeadingLink title="Update existing record programmatically" tag="h5" />
<CodeBlock
    language="go"
    content={`
        record, err := app.FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        record.Set("title", "Lorem ipsum")

        // delete existing record files by specifying their file names
        record.Set("documents-", []string{"file1_abc123.txt", "file3_abc123.txt"})

        // append one or more new files to the already uploaded list
        //
        // note1: see all factories in ` +
        import.meta.env.PB_GODOC_URL +
        `/tools/filesystem#File
        // note2: for reading files from a request event you can also use e.FindUploadedFiles("fileKey")
        f1, _ := filesystem.NewFileFromPath("/local/path/to/file1.txt")
        f2, _ := filesystem.NewFileFromBytes([]byte{"test content"}, "file2.txt")
        f3, _ := filesystem.NewFileFromURL(context.Background(), "https://example.com/file3.pdf")
        record.Set("documents+", []*filesystem.File{f1, f2, f3})

        // validate and persist
        // (use SaveNoValidate to skip fields validation)
        err = app.Save(record);
        if err != nil {
            return err
        }
    `}
/>

<HeadingLink title="Intercept update request" tag="h5" />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnRecordUpdateRequest("articles").Add(func(e *core.RecordRequestEvent) error {
            // ignore for superusers
            if e.HasSuperuserAuth() {
                return e.Next()
            }

            // overwrite the submitted "status" field value
            e.Record.Set("status", "pending")

            // or you can also prevent the create event by returning an error
            status := e.Record.GetString("status")
            if (status != "pending" &&
                // guest or not an editor
                (e.Auth == nil || e.Auth.GetString("role") != "editor")) {
                return e.BadRequestError("Only editors can set a status different from pending", nil)
            }

            return e.Next()
        })
    `}
/>

<HeadingLink title="Delete record" />
<CodeBlock
    language="go"
    content={`
        record, err := app.FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        err = app.Delete(record)
        if err != nil {
            return err
        }
    `}
/>

<HeadingLink title="Transaction" />
<TransactionInfoGo />
<CodeBlock
    language="go"
    content={`
        import (
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        titles := []string{"title1", "title2", "title3"}

        collection, err := app.FindCollectionByNameOrId("articles")
        if err != nil {
            return err
        }

        // create new record for each title
        app.RunInTransaction(func(txApp core.App) error {
            for _, title := range titles {
                record := core.NewRecord(collection)
                record.Set("title", title)

                if err := txApp.Save(record); err != nil {
                    return err
                }
            }

            return nil
        })
    `}
/>

<HeadingLink title="Programmatically expanding relations" />
<p>
    To expand record relations programmatically you can use
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.ExpandRecord"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.ExpandRecord(record, expands, optFetchFunc)</code>
    </a>
    for single or
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.ExpandRecords"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.ExpandRecords(records, expands, optFetchFunc)</code>
    </a>
    for multiple records.
</p>
<p>
    Once loaded, you can access the expanded relations via
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#Record.ExpandedOne"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>record.ExpandedOne(relName)</code>
    </a>
    or
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#Record.ExpandedAll"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>record.ExpandedAll(relName)</code>
    </a> .
</p>
<p>For example:</p>
<CodeBlock
    language="go"
    content={`
        record, err := app.FindFirstRecordByData("articles", "slug", "lorem-ipsum")
        if err != nil {
            return err
        }

        // expand the "author" and "categories" relations
        errs := app.ExpandRecord(record, []string{"author", "categories"}, nil)
        if len(errs) > 0 {
            return fmt.Errorf("failed to expand: %v", errs)
        }

        // print the expanded records
        log.Println(record.ExpandedOne("author"))
        log.Println(record.ExpandedAll("categories"))
    `}
/>

<HeadingLink title="Check if record can be accessed" />
<p>
    To check whether a custom client request or user can access a single record, you can use the
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.CanAccessRecord"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.CanAccessRecord(record, requestInfo, rule)</code>
    </a>
    method.
</p>
<p>
    Below is an example of creating a custom route to retrieve a single article and checking the request
    satisfy the View API rule of the record collection:
</p>
<CodeBlock
    language="go"
    content={`
        package main

        import (
            "log"
            "net/http"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
        )

        func main() {
            app := pocketbase.New()

            app.OnServe().BindFunc(func(se *core.ServeEvent) error {
                se.Router.GET("/articles/{slug}", func(e *core.RequestEvent) error {
                    slug := e.Request.PathValue("slug")

                    record, err := e.App.FindFirstRecordByData("articles", "slug", slug)
                    if err != nil {
                        return e.NotFoundError("Missing or invalid slug", err)
                    }

                    info, err := e.RequestInfo()
                    if err != nil {
                        return e.BadRequestError("Failed to retrieve request info", err)
                    }

                    canAccess, err := e.App.CanAccessRecord(record, info, record.Collection().ViewRule)
                    if !canAccess {
                        return e.ForbiddenError("", err)
                    }

                    return e.JSON(http.StatusOK, record)
                })

                return se.Next()
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<HeadingLink title="Generating and validating tokens" />
<p>
    PocketBase Web APIs are fully stateless (aka. there are no sessions in the traditional sense) and an auth
    record is considered authenticated if the submitted request contains a valid
    <code>Authorization: TOKEN</code>
    header
    <em>
        (see also <a href="/docs/go-routing/#builtin-middlewares">Builtin auth middlewares</a> and
        <a href="/docs/go-routing/#retrieving-the-current-auth-state">
            Retrieving the current auth state from a route
        </a>
        )
    </em>
    .
</p>
<p>
    If you want to issue and verify manually a record JWT (auth, verification, password reset, etc.), you
    could do that using the record token type specific methods:
</p>
<CodeBlock
    language="go"
    content={`
        token, err := record.NewAuthToken()

        token, err := record.NewVerificationToken()

        token, err := record.NewPasswordResetToken()

        token, err := record.NewEmailChangeToken(newEmail)

        token, err := record.NewFileToken() // for protected files

        token, err := record.NewStaticAuthToken(optCustomDuration) // non-refreshable auth token
    `}
/>
<p>
    Each token type has its own secret and the token duration is managed via its type related collection auth
    option (<em>the only exception is <code>NewStaticAuthToken</code></em>).
</p>
<p>
    To validate a record token you can use the
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.FindAuthRecordByToken"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.FindAuthRecordByToken</code>
    </a>
    method. The token related auth record is returned only if the token is not expired and its signature is valid.
</p>
<p>Here is an example how to validate an auth token:</p>
<CodeBlock
    language="go"
    content={`
        record, err := app.FindAuthRecordByToken("YOUR_TOKEN", core.TokenTypeAuth)
    `}
/>
