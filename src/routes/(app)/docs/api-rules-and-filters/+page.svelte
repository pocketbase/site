<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<Toc />

<HeadingLink title="API rules" />
<p>
    <strong>API Rules</strong> are your collection access controls and data filters.
</p>
<p>
    Each collection has <strong>5 rules</strong>, corresponding to the specific API action:
</p>
<ul>
    <li>
        <code>listRule</code>
    </li>
    <li>
        <code>viewRule</code>
    </li>
    <li>
        <code>createRule</code>
    </li>
    <li>
        <code>updateRule</code>
    </li>
    <li>
        <code>deleteRule</code>
    </li>
</ul>
<p>
    Auth collections has an additional <code>options.manageRule</code> used to to allow one user (it could be even
    from a different collection) to be able to fully manage the data of another user (eg. changing their email,
    password, etc.).
</p>

<p>Each rule could be set to:</p>
<ul>
    <li>
        <strong>"locked"</strong> - aka. <code>null</code>, which means that the action could be performed
        only by an authorized admin
        <!--  -->
        (<em>this is the default</em>)
    </li>
    <li>
        <strong>Empty string</strong> - anyone will be able to perform the action (admins, authorized users and
        guests)
    </li>
    <li>
        <strong>Non-empty string</strong> - only users (authorized or not) that satisfies the rule filter expression
        will be able to perform this action
    </li>
</ul>

<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            <strong>PocketBase API Rules acts also as records filter!</strong>
            <br />
            Or in other words, you could for example allow listing only the "active" records of your collection,
            by using a simple filter expression such as:
            <code>status = "active"</code>
            (where "status" is a field defined in your Collection).
        </p>
        <p>
            The API Rules are ignored when the action is performed by an authorized admin (<strong
                >admins can always access everything</strong
            >)!
        </p>
    </div>
</div>

<HeadingLink title="Filters syntax" />
<p>You could find information about the supported fields in your collection API rules tab:</p>
<img
    src="/images/screenshots/collection-rules.png"
    alt="Collection API Rules filters screenshot"
    class="screenshot"
    width="550"
/>
<p>
    There is autocomplete to help you guide you while typing the rule filter expression, but in general, you
    have access to
    <strong>3 groups of fields</strong>:
</p>
<ul>
    <li>
        <strong>Your Collection schema fields</strong>
        <br />
        This also include all nested relations fields too, eg.
        <code>someRelField.status != "pending"</code>
    </li>
    <li>
        <code><strong>@request.*</strong></code>
        <br />
        Used to access the current request data, such as query parameters, body/form data, authorized user state,
        etc.
        <ul>
            <li>
                <code>@request.method</code> - the HTTP request method (eg.
                <code>@request.method = 'GET'</code>)
            </li>
            <li>
                <code>@request.query.*</code> - the request query parameters (eg.
                <code>@request.query.page = 1</code>)
            </li>
            <li>
                <code>@request.data.*</code> - the submitted body parameters (eg.
                <code>@request.data.title != ""</code>)
            </li>
            <li>
                <code>@request.auth.*</code> - the current authenticated model (eg.
                <code>@request.auth.id != ''</code>)
            </li>
        </ul>
    </li>
    <li>
        <code><strong>@collection.*</strong></code>
        <br />
        This filter could be used to target other collections that are not directly related to the current one
        (aka. there is no relation field pointing to it) but both shares a common field value, like for example
        a category id:
        <CodeBlock
            content={`
                @collection.news.categoryId = categoryId && @collection.news.author = @request.auth.id
            `}
        />
    </li>
</ul>

<FilterSyntax />

<HeadingLink title="Examples" tag="h5" />
<ul>
    <li class="m-b-sm">
        Allow only registered users:
        <CodeBlock
            content={`
                @request.auth.id != ""
            `}
        />
    </li>
    <li class="m-b-sm">
        Allow only registered users and return records that are either "active" or "pending":
        <CodeBlock
            content={`
                @request.auth.id != "" && (status = "active" || status = "pending")
            `}
        />
    </li>
    <li class="m-b-sm">
        Allow access by anyone and return only the records where the <em>title</em> field value starts with
        "Lorem" (eg. "Lorem ipsum"):
        <CodeBlock
            content={`
                title ~ "Lorem%"
            `}
        />
    </li>
</ul>
