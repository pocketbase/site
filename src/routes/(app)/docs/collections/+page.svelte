<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<Toc />

<HeadingLink title="Overview" />
<p>
    <strong>Collections</strong> represents your application data.
    <br />
    Under the hood they are plain SQLite tables that are generated automatically with the collection
    <strong>name</strong>
    and
    <strong>fields</strong> (aka. columns).
</p>
<p>
    Single entry of a collection is called
    <strong>record</strong> - aka. a single row in the SQL table.
</p>
<p>PocketBase comes with all sort of <strong>fields</strong> that you could use:</p>
<table class="table-compact table-border">
    <thead>
        <tr>
            <th>Field</th>
            <th>Example values</th>
            <th>Supported modifiers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>text</code></td>
            <td><code>""</code>, <code>"example"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>number</code></td>
            <td><code>0</code>, <code>-1</code>, <code>1</code>, <code>1.5</code></td>
            <td><code>+</code> (<em>add</em>), <code>-</code> (<em>subtract</em>)</td>
        </tr>
        <tr>
            <td><code>bool</code></td>
            <td><code>false</code>, <code>true</code></td>
            <td />
        </tr>
        <tr>
            <td><code>email</code></td>
            <td><code>""</code>, <code>"test@example.com"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>url</code></td>
            <td><code>""</code>, <code>"https://example.com"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>date</code></td>
            <td><code>""</code>, <code>"2022-01-01 00:00:00.000Z"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>select</code> (<em>single</em>)</td>
            <td><code>""</code>, <code>"optionA"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>select</code> (<em>multiple</em>)</td>
            <td><code>[]</code>, <code>["optionA", "optionB"]</code></td>
            <td><code>+</code> (<em>append</em>), <code>-</code> (<em>remove</em>)</td>
        </tr>
        <tr>
            <td><code>relation</code> (<em>single</em>)</td>
            <td><code>""</code>, <code>"JJ2YRU30FBG8MqX"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>relation</code> (<em>multiple</em>)</td>
            <td><code>[]</code>, <code>["JJ2YRU30FBG8MqX", "eP2jCr1h3NGtsbz"]</code></td>
            <td><code>+</code> (<em>append</em>), <code>-</code> (<em>remove</em>)</td>
        </tr>
        <tr>
            <td><code>file</code> (<em>single</em>)</td>
            <td><code>""</code>, <code>"example123_Ab24ZjL.png"</code></td>
            <td />
        </tr>
        <tr>
            <td><code>file</code> (<em>multiple</em>)</td>
            <td>
                <code>[]</code>,
                <code>["file1_Ab24ZjL.png", "file2_Frq24ZjL.txt"]</code>
            </td>
            <td><code>-</code> (<em>remove</em>)</td>
        </tr>
        <tr>
            <td><code>json</code></td>
            <td><em>any json value</em></td>
        </tr>
    </tbody>
</table>
<p>
    You could create <strong>collections</strong> and <strong>records</strong> from the Admin UI or the
    <a href="/docs/api-collections">Web API</a>.
    <br />
    <span class="txt-hint">
        Usually you'll create your collections from the Admin UI and manage your records with the API using
        the
        <a href="/docs/client-side-integration">client-side SDKs</a>.
    </span>
</p>
<p>Here is what the collection panel looks like:</p>
<img src="/images/screenshots/collection-panel.png" alt="Collection panel screenshot" class="screenshot" />
<p>
    Currently there are 2 collection types: <strong>Base</strong> and
    <strong>Auth</strong>.
</p>

<HeadingLink title="Base collection" />
<p>
    <strong>Base collection</strong> is the default collection type and it could be used to store any application
    data (eg. articles, products, posts, etc.).
</p>
<p>
    It comes with 3 default system fields that are always available and automatically populated:
    <code>id</code>, <code>created</code>, <code>updated</code>.
    <br />
    Only the <code>id</code> can be explicitly set (<em>15 characters string</em>).
</p>

<HeadingLink title="Auth collection" />
<p>
    <strong>Auth collection</strong> has everything from the <strong>Base collection</strong> but with some additional
    special fields to help you manage your app users providing various authentication options.
</p>
<p>
    Each Auth collection comes with the following system fields:
    <code>id</code>, <code>created</code>, <code>updated</code>,
    <code>username</code>, <code>email</code>, <code>emailVisibility</code>, <code>verified</code>.
</p>
<p>
    You can have as many Auth collections as you want (eg. users, managers, staffs, members, clients, etc.)
    each with their own set of fields, separate login (email/username + password or OAuth2) and models
    managing endpoints.
</p>
<p>You can create all sort of different access controls:</p>
<ul>
    <li>
        <strong>Role (Group)</strong>
        <br />
        <em>
            For example, you could attach a "role" <code>select</code> field to your Auth collection with the
            following options: "regularUser" and "superUser". And then in some of your other collections you
            could define the following rule to allow only "superUsers":
            <br />
            <code>@request.auth.role = "superUser"</code>
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
            Nested relation fields look ups are also supported, eg:
            <code>someRelField.anotherRelField.author = @request.auth.id</code>
        </em>
    </li>
    <li>
        <strong>Managed</strong>
        <br />
        <em>
            In addition to the default "List", "View", "Create", "Update", "Delete" API rules, Auth
            collections have also a special "Manage" API rule that could be used to allow one user (it could
            be even from a different collection) to be able to fully manage the data of another user (eg.
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
                @request.auth.id != "" && (@request.auth.role = "superUser" || author = @request.auth.id)
            </code>
        </em>
    </li>
</ul>
