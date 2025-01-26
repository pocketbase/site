<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import Toc from "@/components/Toc.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
</script>

<Toc />

<HeadingLink title="Overview" />
<p>
    <strong>Collections</strong> represent your application data. Under the hood they are backed by plain
    SQLite tables that are generated automatically with the collection
    <strong>name</strong> and <strong>fields</strong> (columns).
</p>
<p>
    Single entry of a collection is called <strong>record</strong> (a single row in the SQL table).
</p>
<p>
    You can manage your <strong>collections</strong> from the Dashboard, with the Web APIs using the
    <a href="/docs/how-to-use/">client-side SDKs</a>
    (<em>superusers only</em>) or programmatically via the
    <a href="/docs/go-migrations/">Go</a>/<a href="/docs/js-migrations/">JavaScript</a>
    migrations.
</p>
<p>
    Similarly, you can manage your <strong>records</strong> from the Dashboard, with the Web APIs using the
    <a href="/docs/how-to-use/">client-side SDKs</a>
    or programmatically via the
    <a href="/docs/go-records/">Go</a>/<a href="/docs/js-records/">JavaScript</a>
    Record operations.
</p>
<p>Here is what a collection edit panel looks like in the Dashboard:</p>
<img src="/images/screenshots/collection-panel.png" alt="Collection panel screenshot" class="screenshot" />

<p>
    Currently there are 3 collection types: <strong>Base</strong>, <strong>View</strong> and
    <strong>Auth</strong>.
</p>

<HeadingLink title="Base collection" tag="h5" />
<p>
    <strong>Base collection</strong> is the default collection type and it could be used to store any application
    data (articles, products, posts, etc.).
</p>

<HeadingLink title="View collection" tag="h5" />
<p>
    <strong>View collection</strong> is a read-only collection type where the data is populated from a plain
    SQL <code>SELECT</code> statement, allowing users to perform aggregations or any other custom queries in
    general.
    <br />
    For example, the following query will create a read-only collection with 3 <em>posts</em>
    fields - <em>id</em>, <em>name</em> and <em>totalComments</em>:
</p>
<CodeBlock
    language="sql"
    content={`
        SELECT
            posts.id,
            posts.name,
            count(comments.id) as totalComments
        FROM posts
        LEFT JOIN comments on comments.postId = posts.id
        GROUP BY posts.id
    `}
/>
<div class="alert alert-info m-t-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        View collections don't receive realtime events because they don't have create/update/delete
        operations.
    </div>
</div>

<HeadingLink title="Auth collection" tag="h5" />
<p>
    <strong>Auth collection</strong> has everything from the <strong>Base collection</strong> but with some additional
    special fields to help you manage your app users and also providing various authentication options.
</p>
<p>
    Each Auth collection has the following special system fields:
    <code>email</code>, <code>emailVisibility</code>, <code>verified</code>,
    <code>password</code> and <code>tokenKey</code>.
    <br />
    They cannot be renamed or deleted but can be configured using their specific field options. For example you
    can make the user email required or optional.
</p>
<p>
    You can have as many Auth collections as you want (users, managers, staffs, members, clients, etc.) each
    with their own set of fields, separate login and records managing endpoints.
</p>
<p>You can build all sort of different access controls:</p>
<ul>
    <li>
        <strong>Role (Group)</strong>
        <br />
        <em>
            For example, you could attach a "role" <code>select</code> field to your Auth collection with the
            following options: "employee" and "staff". And then in some of your other collections you could
            define the following rule to allow only "staff":
            <br />
            <code>@request.auth.role = "staff"</code>
        </em>
    </li>
    <li>
        <strong>Relation (Ownership)</strong>
        <br />
        <em>
            Let's say that you have 2 collections - "posts" base collection and "users" auth collection. In
            your "posts" collection you can create "author"
            <code>relation</code> field pointing to the "users" collection. To allow access to only the
            "author" of the record(s), you could use a rule like:
            <code>@request.auth.id != "" && author = @request.auth.id</code>
            <br />
            Nested relation fields look ups, including back-relations, are also supported, for example:
            <code>someRelField.anotherRelField.author = @request.auth.id</code>
        </em>
    </li>
    <li>
        <strong>Managed</strong>
        <br />
        <em>
            In addition to the default "List", "View", "Create", "Update", "Delete" API rules, Auth
            collections have also a special "Manage" API rule that could be used to allow one user (it could
            be even from a different collection) to be able to fully manage the data of another user (e.g.
            changing their email, password, etc.).
        </em>
    </li>
    <li>
        <strong>Mixed</strong>
        <br />
        <em>
            You can build a mixed approach based on your unique use-case. Multiple rules can be grouped with
            parenthesis <code>()</code> and combined with <code>&&</code>
            (AND) and <code>||</code> (OR) operators:
            <br />
            <code>
                @request.auth.id != "" && (@request.auth.role = "staff" || author = @request.auth.id)
            </code>
        </em>
    </li>
</ul>

<HeadingLink title="Fields" />
<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            All collection fields <em>(with exception of the <code>JSONField</code>)</em> are
            <strong>non-nullable and uses a zero-default</strong> for their respective type as fallback value
            when missing (empty string for <code>text</code>, 0 for <code>number</code>, etc.).
        </p>
        <p>
            All field specific modifiers are supported both in the Web APIs and via the record Get/Set
            methods.
        </p>
    </div>
</div>

<div class="accordions">
    <Accordion single title="BoolField">
        <div class="content">
            <p>
                BoolField defines <code>bool</code> type field to store a single <code>false</code>
                (default) or <code>true</code> value.
            </p>
        </div>
    </Accordion>
    <Accordion single title="NumberField">
        <div class="content">
            <p>
                NumberField defines <code>number</code> type field for storing numeric/float64 value:
                <code>0</code> (default), <code>2</code>, <code>-1</code>, <code>1.5</code>.
            </p>
            <p>The following additional set modifiers are available:</p>
            <ul>
                <li>
                    <code>fieldName<strong>+</strong></code>
                    adds number to the already existing record value.
                </li>
                <li>
                    <code>fieldName<strong>-</strong></code>
                    subtracts number from the already existing record value.
                </li>
            </ul>
        </div>
    </Accordion>
    <Accordion single title="TextField">
        <div class="content">
            <p>
                TextField defines <code>text</code> type field for storing string values:
                <code>""</code> (default), <code>"example"</code>.
            </p>
            <p>The following additional set modifiers are available:</p>
            <ul>
                <li>
                    <code>fieldName<strong>:autogenerate</strong></code>
                    autogenerate a field value if the <code>AutogeneratePattern</code> field option is set.
                    <br />
                    For example, submitting:
                    <code>{`{"slug:autogenerate":"abc-"}`}</code> will result in <code>"abc-[random]"</code>
                    <code>slug</code> field value.
                </li>
            </ul>
        </div>
    </Accordion>
    <Accordion single title="EmailField">
        <div class="content">
            <p>
                EmailField defines <code>email</code> type field for storing a single email string address:
                <code>""</code> (default), <code>"john@example.com"</code>.
            </p>
        </div>
    </Accordion>
    <Accordion single title="URLField">
        <div class="content">
            <p>
                URLField defines <code>url</code> type field for storing a single URL string value:
                <code>""</code> (default), <code>"https://example.com"</code>.
            </p>
        </div>
    </Accordion>
    <Accordion single title="EditorField">
        <div class="content">
            <p>
                EditorField defines <code>editor</code> type field to store HTML formatted text:
                <code>""</code> (default), <code>{`<p>example</p>`}</code>.
            </p>
        </div>
    </Accordion>
    <Accordion single title="DateField">
        <div class="content">
            <p>
                DateField defines <code>date</code> type field to store a single datetime string value:
                <code>""</code> (default), <code>"2022-01-01 00:00:00.000Z"</code>.
            </p>
            <p>
                All PocketBase dates at the moment follows the RFC3399 format <code>Y-m-d H:i:s.uZ</code>
                (e.g. <code>2024-11-10 18:45:27.123Z</code>).
            </p>
            <p>
                Dates are compared as strings, meaning that when using the filters with a date field you'll
                have to specify the full datetime string format. For example to target a single day (e.g.
                November 19, 2024) you can use something like:
                <code>
                    {`created >= '2024-11-19 00:00:00.000Z' && created <= '2024-11-19 23:59:59.999Z'`}
                </code>
            </p>
        </div>
    </Accordion>
    <Accordion single title="AutodateField">
        <div class="content">
            <p>
                AutodateField defines an <code>autodate</code> type field and it is similar to the DateField but
                its value is auto set on record create/update.
            </p>
            <p>This field is usually used for defining timestamp fields like "created" and "updated".</p>
        </div>
    </Accordion>
    <Accordion single title="SelectField">
        <div class="content">
            <p>
                SelectField defines <code>select</code> type field for storing single or multiple string values
                from a predefined list.
            </p>
            <p>
                It is usually intended for handling enums-like values such as
                <code>pending/public/private</code>
                statuses, simple <code>client/staff/manager/admin</code> roles, etc.
            </p>
            <p>
                For <strong>single</strong> <code>select</code>
                <em>(the <code>MaxSelect</code> option is {`<=`} 1)</em>
                the field value is a string:
                <code>""</code>, <code>"optionA"</code>.
            </p>
            <p>
                For <strong>multiple</strong> <code>select</code>
                <em>(the <code>MaxSelect</code> option is {`>=`} 2)</em>
                the field value is an array:
                <code>[]</code>, <code>["optionA", "optionB"]</code>.
            </p>
            <p>The following additional set modifiers are available:</p>
            <ul>
                <li>
                    <code>fieldName<strong>+</strong></code>
                    appends one or more values to the existing one.
                </li>
                <li>
                    <code><strong>+</strong>fieldName</code>
                    prepends one or more values to the existing one.
                </li>
                <li>
                    <code>fieldName<strong>-</strong></code>
                    subtracts/removes one or more values from the existing one.
                </li>
            </ul>
            <p>For example: <code>{`{"permissions+": "optionA", "roles-": ["staff", "editor"]}`}</code></p>
        </div>
    </Accordion>
    <Accordion single title="FileField">
        <div class="content">
            <p>
                FileField defines <code>file</code> type field for managing record file(s).
            </p>
            <p>
                PocketBase stores in the database only the file name. The file itself is stored either on the
                local disk or in S3, depending on your application storage settings.
            </p>
            <p>
                For <strong>single</strong> <code>file</code>
                <em>(the <code>MaxSelect</code> option is {`<=`} 1)</em>
                the stored value is a string:
                <code>""</code>, <code>"file1_Ab24ZjL.png"</code>.
            </p>
            <p>
                For <strong>multiple</strong> <code>file</code>
                <em>(the <code>MaxSelect</code> option is {`>=`} 2)</em>
                the stored value is an array:
                <code>[]</code>, <code>["file1_Ab24ZjL.png", "file2_Frq24ZjL.txt"]</code>.
            </p>
            <p>The following additional set modifiers are available:</p>
            <ul>
                <li>
                    <code>fieldName<strong>+</strong></code>
                    appends one or more files to the existing field value.
                </li>
                <li>
                    <code><strong>+</strong>fieldName</code>
                    prepends one or more files to the existing field value.
                </li>
                <li>
                    <code>fieldName<strong>-</strong></code>
                    deletes one or more files from the existing field value.
                </li>
            </ul>
            <p>
                For example:
                <code>
                    {`{"documents+": new File(...), "documents-": ["file1_Ab24ZjL.txt", "file2_Frq24ZjL.txt"]}`}
                </code>
            </p>
            <p>
                You can find more detailed information in the
                <a href="/docs/files-handling/">Files upload and handling</a> guide.
            </p>
        </div>
    </Accordion>
    <Accordion single title="RelationField">
        <div class="content">
            <p>
                RelationField defines <code>relation</code> type field for storing single or multiple collection
                record references.
            </p>
            <p>
                For <strong>single</strong> <code>relation</code>
                <em>(the <code>MaxSelect</code> option is {`<=`} 1)</em>
                the field value is a string:
                <code>""</code>, <code>"RECOD_ID"</code>.
            </p>
            <p>
                For <strong>multiple</strong> <code>relation</code>
                <em>(the <code>MaxSelect</code> option is {`>=`} 2)</em>
                the field value is an array:
                <code>[]</code>, <code>["RECORD_ID1", "RECORD_ID2"]</code>.
            </p>
            <p>The following additional set modifiers are available:</p>
            <ul>
                <li>
                    <code>fieldName<strong>+</strong></code>
                    appends one or more ids to the existing one.
                </li>
                <li>
                    <code><strong>+</strong>fieldName</code>
                    prepends one or more ids to the existing one.
                </li>
                <li>
                    <code>fieldName<strong>-</strong></code>
                    subtracts/removes one or more ids from the existing one.
                </li>
            </ul>
            <p>For example: <code>{`{"users+": "USER_ID", "categories-": ["CAT_ID1", "CAT_ID2"]}`}</code></p>
        </div>
    </Accordion>
    <Accordion single title="JSONField">
        <div class="content">
            <p>
                JSONField defines <code>json</code> type field for storing any serialized JSON value,
                including <code>null</code> (default).
            </p>
        </div>
    </Accordion>
</div>
