<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import TransactionInfoJS from "../TransactionInfoJS.svelte";
</script>

<p>
    The most common task when extending PocketBase probably would be querying and working with your collection
    records.
</p>
<p>
    You could find detailed documentation about all the supported Record model methods in
    <a href="/jsvm/interfaces/core.Record.html" target="_blank" rel="noopener noreferrer">
        <code>core.Record</code>
    </a>
    type interface but below are some examples with the most common ones.
</p>

<Toc />

<HeadingLink title="Set field value" />
<CodeBlock
    language="javascript"
    content={`
        // sets the value of a single record field
        // (field type specific modifiers are also supported)
        record.set("title", "example")
        record.set("users+", "6jyr1y02438et52") // append to existing value

        // populates a record from a data map
        // (calls set() for each entry of the map)
        record.load(data)
    `}
/>

<HeadingLink title="Get field value" />
<CodeBlock
    language="javascript"
    content={`
        // retrieve a single record field value
        // (field specific modifiers are also supported)
        record.get("someField")            // -> any (without cast)
        record.getBool("someField")        // -> cast to bool
        record.getString("someField")      // -> cast to string
        record.getInt("someField")         // -> cast to int
        record.getFloat("someField")       // -> cast to float64
        record.getDateTime("someField")    // -> cast to types.DateTime
        record.getStringSlice("someField") // -> cast to []string

        // retrieve the new uploaded files
        // (e.g. for inspecting and modifying the file(s) before save)
        record.getUnsavedFiles("someFileField")

        // unmarshal a single json field value into the provided result
        let result = new DynamicModel({ ... })
        record.unmarshalJSONField("someJsonField", result)

        // retrieve a single or multiple expanded data
        record.expandedOne("author")     // -> as null|Record
        record.expandedAll("categories") // -> as []Record

        // export all the public safe record fields in a plain object
        // (note: "json" type field values are exported as raw bytes array)
        record.publicExport()
    `}
/>

<HeadingLink title="Auth accessors" />
<CodeBlock
    language="javascript"
    content={`
        record.isSuperuser() // alias for record.collection().name == "_superusers"

        record.email()         // alias for record.get("email")
        record.setEmail(email) // alias for record.set("email", email)

        record.verified()         // alias for record.get("verified")
        record.setVerified(false) // alias for record.set("verified", false)

        record.tokenKey()        // alias for record.get("tokenKey")
        record.setTokenKey(key)  // alias for record.set("tokenKey", key)
        record.refreshTokenKey() // alias for record.set("tokenKey:autogenerate", "")

        record.validatePassword(pass)
        record.setPassword(pass)   // alias for record.set("password", pass)
        record.setRandomPassword() // sets cryptographically random 30 characters string as password
    `}
/>

<HeadingLink title="Copies" />
<CodeBlock
    language="javascript"
    content={`
        // returns a shallow copy of the current record model populated
        // with its ORIGINAL db data state and everything else reset to the defaults
        // (usually used for comparing old and new field values)
        record.original()

        // returns a shallow copy of the current record model populated
        // with its LATEST data state and everything else reset to the defaults
        // (aka. no expand, no custom fields and with default visibility flags)
        record.fresh()

        // returns a shallow copy of the current record model populated
        // with its ALL collection and custom fields data, expand and visibility flags
        record.clone()
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
    <a href="/jsvm/interfaces/core.Record.html#hide" target="_blank" rel="noopener noreferrer">
        <code>record.hide(fieldNames...)</code>
    </a>
    and
    <a href="/jsvm/interfaces/core.Record.html#unhide" target="_blank" rel="noopener noreferrer">
        <code>record.unhide(fieldNames...)</code>
    </a>
    methods.
</p>
<p>
    Often the <code>hide/unhide</code> methods are used in combination with the <code>onRecordEnrich</code> hook
    invoked on every record enriching (list, view, create, update, realtime change, etc.). For example:
</p>
<CodeBlock
    language="javascript"
    content={`
        onRecordEnrich((e) => {
            // dynamically show/hide a record field depending on whether the current
            // authenticated user has a certain "role" (or any other field constraint)
            if (
                !e.requestInfo.auth ||
                (!e.requestInfo.auth.isSuperuser() && e.requestInfo.auth.get("role") != "staff")
            ) {
                e.record.hide("someStaffOnlyField")
            }

            e.next()
        }, "articles")
    `}
/>
<div class="alert alert-info m-t-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            For custom fields, not part of the record collection schema, it is required to call explicitly
            <code>record.withCustomData(true)</code> to allow them in the public serialization.
        </p>
    </div>
</div>

<HeadingLink title="Fetch records" />

<HeadingLink title="Fetch single record" tag="h5" />
<p class="txt-hint">All single record retrieval methods throw an error if no record is found.</p>
<CodeBlock
    language="javascript"
    content={`
        // retrieve a single "articles" record by its id
        let record = $app.findRecordById("articles", "RECORD_ID")

        // retrieve a single "articles" record by a single key-value pair
        let record = $app.findFirstRecordByData("articles", "slug", "test")

        // retrieve a single "articles" record by a string filter expression
        // (NB! use "{:placeholder}" to safely bind untrusted user input parameters)
        let record = $app.findFirstRecordByFilter(
            "articles",
            "status = 'public' && category = {:category}",
            { "category": "news" },
        )
    `}
/>

<HeadingLink title="Fetch multiple records" tag="h5" />
<p class="txt-hint">All multiple records retrieval methods return an empty array if no records are found.</p>
<CodeBlock
    language="javascript"
    content={`
        // retrieve multiple "articles" records by their ids
        let records = $app.findRecordsByIds("articles", ["RECORD_ID1", "RECORD_ID2"])

        // retrieve the total number of "articles" records in a collection with optional dbx expressions
        let totalPending = $app.countRecords("articles", $dbx.hashExp({"status": "pending"}))

        // retrieve multiple "articles" records with optional dbx expressions
        let records = $app.findAllRecords("articles",
            $dbx.exp("LOWER(username) = {:username}", {"username": "John.Doe"}),
            $dbx.hashExp({"status": "pending"}),
        )

        // retrieve multiple paginated "articles" records by a string filter expression
        // (NB! use "{:placeholder}" to safely bind untrusted user input parameters)
        let records = $app.findRecordsByFilter(
            "articles",                                    // collection
            "status = 'public' && category = {:category}", // filter
            "-published",                                   // sort
            10,                                            // limit
            0,                                             // offset
            { "category": "news" },                        // optional filter params
        )
    `}
/>

<HeadingLink title="Fetch auth records" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        // retrieve a single auth record by its email
        let user = $app.findAuthRecordByEmail("users", "test@example.com")

        // retrieve a single auth record by JWT
        // (you could also specify an optional list of accepted token types)
        let user = $app.findAuthRecordByToken("YOUR_TOKEN", "auth")
    `}
/>

<HeadingLink title="Custom record query" tag="h5" />
<p>
    In addition to the above query helpers, you can also create custom Record queries using
    <a href="/jsvm/functions/_app.recordQuery.html" target="_blank" rel="noopener noreferrer">
        <code>$app.recordQuery(collection)</code>
    </a>
    method. It returns a SELECT DB builder that can be used with the same methods described in the
    <a href="/docs/js-database">Database guide</a>.
</p>
<CodeBlock
    language="javascript"
    content={`
        function findTopArticle() {
            let record = new Record();

            $app.recordQuery("articles")
                .andWhere($dbx.hashExp({ "status": "active" }))
                .orderBy("rank ASC")
                .limit(1)
                .one(record)

            return record
        }

        let article = findTopArticle()
    `}
/>
<p>
    For retrieving <strong>multiple</strong> Record models with the <code>all()</code> executor, you can use
    <code>arrayOf(new Record)</code>
    to create an array placeholder in which to populate the resolved DB result.
</p>
<CodeBlock
    language="javascript"
    content={`
        // the below is identical to
        // $app.findRecordsByFilter("articles", "status = 'active'", '-published', 10)
        // but allows more advanced use cases and filtering (aggregations, subqueries, etc.)
        function findLatestArticles() {
            let records = arrayOf(new Record);

            $app.recordQuery("articles")
                .andWhere($dbx.hashExp({ "status": "active" }))
                .orderBy("published DESC")
                .limit(10)
                .all(records)

            return records
        }

        let articles = findLatestArticles()
    `}
/>

<HeadingLink title="Create new record" />

<HeadingLink title="Create new record programmatically" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        let collection = $app.findCollectionByNameOrId("articles")

        let record = new Record(collection)

        record.set("title", "Lorem ipsum")
        record.set("active", true)

        // field type specific modifiers can also be used
        record.set("slug:autogenerate", "post-")

        // new files must be one or a slice of filesystem.File values
        //
        // note1: see all factories in /jsvm/modules/_filesystem.html
        // note2: for reading files from a request event you can also use e.findUploadedFiles("fileKey")
        let f1 = $filesystem.fileFromPath("/local/path/to/file1.txt")
        let f2 = $filesystem.fileFromBytes("test content", "file2.txt")
        let f3 = $filesystem.fileFromURL("https://example.com/file3.pdf")
        record.set("documents", [f1, f2, f3])

        // validate and persist
        // (use saveNoValidate to skip fields validation)
        $app.save(record);
    `}
/>

<HeadingLink title="Intercept create request" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        onRecordCreateRequest((e) => {
            // ignore for superusers
            if (e.hasSuperuserAuth()) {
                return e.next()
            }

            // overwrite the submitted "status" field value
            e.record.set("status", "pending")

            // or you can also prevent the create event by returning an error
            let status = e.record.get("status")
            if (
                status != "pending" &&
                // guest or not an editor
                (!e.auth || e.auth.get("role") != "editor")
            ) {
                throw new BadRequestError("Only editors can set a status different from pending")
            }

            e.next()
        }, "articles")
    `}
/>

<HeadingLink title="Update existing record" />

<HeadingLink title="Update existing record programmatically" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findRecordById("articles", "RECORD_ID")

        record.set("title", "Lorem ipsum")

        // delete existing record files by specifying their file names
        record.set("documents-", ["file1_abc123.txt", "file3_abc123.txt"])

        // append one or more new files to the already uploaded list
        //
        // note1: see all factories in /jsvm/modules/_filesystem.html
        // note2: for reading files from a request event you can also use e.findUploadedFiles("fileKey")
        let f1 = $filesystem.fileFromPath("/local/path/to/file1.txt")
        let f2 = $filesystem.fileFromBytes("test content", "file2.txt")
        let f3 = $filesystem.fileFromURL("https://example.com/file3.pdf")
        record.set("documents+", [f1, f2, f3])

        // validate and persist
        // (use saveNoValidate to skip fields validation)
        $app.save(record);
    `}
/>

<HeadingLink title="Intercept update request" tag="h5" />
<CodeBlock
    language="javascript"
    content={`
        onRecordUpdateRequest((e) => {
            // ignore for superusers
            if (e.hasSuperuserAuth()) {
                return e.next()
            }

            // overwrite the submitted "status" field value
            e.record.set("status", "pending")

            // or you can also prevent the create event by returning an error
            let status = e.record.get("status")
            if (
                status != "pending" &&
                // guest or not an editor
                (!e.auth || e.auth.get("role") != "editor")
            ) {
                throw new BadRequestError("Only editors can set a status different from pending")
            }

            e.next()
        }, "articles")
    `}
/>

<HeadingLink title="Delete record" />
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findRecordById("articles", "RECORD_ID")

        $app.delete(record)
    `}
/>

<HeadingLink title="Transaction" />
<TransactionInfoJS />
<CodeBlock
    language="javascript"
    content={`
        let titles = ["title1", "title2", "title3"]

        let collection = $app.findCollectionByNameOrId("articles")

        $app.runInTransaction((txApp) => {
            // create new record for each title
            for (let title of titles) {
                let record = new Record(collection)

                record.set("title", title)

                txApp.save(record)
            }
        })
    `}
/>

<HeadingLink title="Programmatically expanding relations" />
<p>
    To expand record relations programmatically you can use
    <a href="/jsvm/functions/_app.expandRecord.html" target="_blank" rel="noopener noreferrer">
        <code>$app.expandRecord(record, expands, customFetchFunc)</code>
    </a>
    for single or
    <a href="/jsvm/functions/_app.expandRecords.html" target="_blank" rel="noopener noreferrer">
        <code>$app.expandRecords(records, expands, customFetchFunc)</code>
    </a>
    for multiple records.
</p>
<p>
    Once loaded, you can access the expanded relations via
    <a href="/jsvm/interfaces/core.Record.html#expandedOne" target="_blank" rel="noopener noreferrer">
        <code>record.expandedOne(relName)</code>
    </a>
    or
    <a href="/jsvm/interfaces/core.Record.html#expandedAll" target="_blank" rel="noopener noreferrer">
        <code>record.expandedAll(relName)</code> methods.
    </a>
</p>
<p>For example:</p>
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findFirstRecordByData("articles", "slug", "lorem-ipsum")

        // expand the "author" and "categories" relations
        $app.expandRecord(record, ["author", "categories"], null)

        // print the expanded records
        console.log(record.expandedOne("author"))
        console.log(record.expandedAll("categories"))
    `}
/>

<HeadingLink title="Check if record can be accessed" />
<p>
    To check whether a custom client request or user can access a single record, you can use the
    <a href="/jsvm/functions/_app.canAccessRecord.html" target="_blank" rel="noopener noreferrer">
        <code>$app.canAccessRecord(record, requestInfo, rule)</code>
    </a>
    method.
</p>
<p>
    Below is an example of creating a custom route to retrieve a single article and checking the request
    satisfy the View API rule of the record collection:
</p>
<CodeBlock
    language="javascript"
    content={`
        routerAdd("GET", "/articles/{slug}", (e) => {
            let slug = e.request.pathValue("slug")

            let record = e.app.findFirstRecordByData("articles", "slug", slug)

            let canAccess = e.app.canAccessRecord(record, e.requestInfo(), record.collection().viewRule)
            if (!canAccess) {
                throw new ForbiddenError()
            }

            return e.json(200, record)
        })
    `}
/>

<HeadingLink title="Generating and validating tokens" />
<p>
    PocketBase Web APIs are fully stateless (aka. there are no sessions in the traditional sense) and an auth
    record is considered authenticated if the submitted request contains a valid
    <code>Authorization: TOKEN</code>
    header
    <em>
        (see also <a href="/docs/js-routing/#builtin-middlewares">Builtin auth middlewares</a> and
        <a href="/docs/js-routing/#retrieving-the-current-auth-state">
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
    language="javascript"
    content={`
        let token = record.newAuthToken()

        let token = record.newVerificationToken()

        let token = record.newPasswordResetToken()

        let token = record.newEmailChangeToken(newEmail)

        let token = record.newFileToken() // for protected files

        let token = record.newStaticAuthToken(optCustomDuration) // non-refreshable auth token
    `}
/>
<p>
    Each token type has its own secret and the token duration is managed via its type related collection auth
    option (<em>the only exception is <code>newStaticAuthToken</code></em>).
</p>
<p>
    To validate a record token you can use the
    <a href="/jsvm/functions/_app.findAuthRecordByToken.html" target="_blank" rel="noopener noreferrer">
        <code>$app.findAuthRecordByToken</code>
    </a>
    method. The token related auth record is returned only if the token is not expired and its signature is valid.
</p>
<p>Here is an example how to validate an auth token:</p>
<CodeBlock
    language="javascript"
    content={`
        let record = $app.findAuthRecordByToken("YOUR_TOKEN", "auth")
    `}
/>
