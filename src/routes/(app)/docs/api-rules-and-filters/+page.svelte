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
    Auth collections has an additional <code>options.manageRule</code> used to allow one user (it could be even
    from a different collection) to be able to fully manage the data of another user (eg. changing their email,
    password, etc.).
</p>

<p>Each rule could be set to:</p>
<ul>
    <li>
        <strong>"locked"</strong> - aka. <code>null</code>, which means that the action could be performed
        only by an authorized admin
        <!--  -->
        (<strong>this is the default</strong>)
    </li>
    <li>
        <strong>Empty string</strong> - anyone will be able to perform the action (admins, authorized users and
        guests)
    </li>
    <li>
        <strong>Non-empty string</strong> - only users (authorized or not) that satisfy the rule filter expression
        will be able to perform this action
    </li>
</ul>

<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            <strong>PocketBase API Rules act also as records filter!</strong>
            <br />
            Or in other words, you could for example allow listing only the "active" records of your collection,
            by using a simple filter expression such as:
            <code>status = "active"</code>
            (where "status" is a field defined in your Collection).
        </p>
        <p>
            Because of the above, the API will return 200 empty items response in case a request doesn't
            satisfy a <code>listRule</code>, 400 for unsatisfied <code>createRule</code> and 404 for
            unsatisfied <code>viewRule</code>, <code>updateRule</code> and <code>deleteRule</code>.
            <br />
            All rules will return 403 in case they were "locked" (aka. admin only) and the request client is not
            an admin.
        </p>
        <p>
            The API Rules are ignored when the action is performed by an authorized admin (<strong
                >admins can access everything</strong
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
                <code>@request.method = "GET"</code>)
            </li>
            <li>
                <code>@request.headers.*</code> - the request headers as string values (eg.
                <code>@request.headers.x_token = "test"</code>)
                <br />
                <small class="txt-hint">
                    Note: All header keys are normalized to lowercase and "-" is replaced with "_" (for
                    example "X-Token" is "x_token").
                </small>
            </li>
            <li>
                <code>@request.query.*</code> - the request query parameters as string values (eg.
                <code>@request.query.page = "1"</code>)
            </li>
            <li>
                <code>@request.data.*</code> - the submitted body parameters (eg.
                <code>@request.data.title != ""</code>)
            </li>
            <li>
                <code>@request.auth.*</code> - the current authenticated model (eg.
                <code>@request.auth.id != ""</code>)
            </li>
        </ul>
    </li>
    <li>
        <code><strong>@collection.*</strong></code>
        <p>
            This filter could be used to target other collections that are not directly related to the current
            one (aka. there is no relation field pointing to it) but both shares a common field value, like
            for example a category id:
        </p>
        <CodeBlock
            content={`
                @collection.news.categoryId ?= categoryId && @collection.news.author ?= @request.auth.id
            `}
        />
        <p>
            In case you want to join the same collection multiple times but based on different criteria, you
            can define an alias by appending <code>:alias</code> suffix to the collection name.
        </p>
        <CodeBlock
            content={`
                // see https://github.com/pocketbase/pocketbase/discussions/3805#discussioncomment-7634791
                @request.auth.id != "" &&
                @collection.courseRegistrations.user ?= id &&
                @collection.courseRegistrations:auth.user ?= @request.auth.id &&
                @collection.courseRegistrations.courseGroup ?= @collection.courseRegistrations:auth.courseGroup
            `}
        />
    </li>
</ul>

<FilterSyntax />

<HeadingLink title="Special identifiers and modifiers" />

<HeadingLink title="@ macros" tag="h5" />
<p>The following datetime macros are available and can be used as part of the filter expression:</p>
<CodeBlock
    language="html"
    content={`
        // all macros are UTC based
        @now        - the current datetime as string
        @second     - @now second number (0-59)
        @minute     - @now minute number (0-59)
        @hour       - @now hour number (0-23)
        @weekday    - @now weekday number (0-6)
        @day        - @now day number
        @month      - @now month number
        @year       - @now year number
        @todayStart - beginning of the current day as datetime string
        @todayEnd   - end of the current day as datetime string
        @monthStart - beginning of the current month as datetime string
        @monthEnd   - end of the current month as datetime string
        @yearStart  - beginning of the current year as datetime string
        @yearEnd    - end of the current year as datetime string
    `}
/>
<p>For example:</p>
<CodeBlock content={`@request.data.publicDate >= @now`} />

<HeadingLink title=":isset modifier" tag="h5" />
<p>
    The <code>:isset</code> field modifier is available only for the <code>@request.*</code> fields and can be
    used to check whether the client submitted a specific data with the request. Here is for example a rule that
    disallows changing a "role" field:
</p>
<CodeBlock
    content={`
        @request.data.role:isset = false
    `}
/>

<HeadingLink title=":length modifier" tag="h5" />
<p>
    The <code>:length</code> field modifier could be used to check the number of items in an array field
    (multiple <code>file</code>, <code>select</code>, <code>relation</code>).
    <br />
    Could be used with both the collection schema fields and the <code>@request.data.*</code> fields. For example:
</p>
<CodeBlock
    content={`
        // check example submitted data: {"someSelectField": ["val1", "val2"]}
        @request.data.someSelectField:length > 1

        // check existing record field length
        someRelationField:length = 2
    `}
/>

<HeadingLink title=":each modifier" tag="h5" />
<p>
    The <code>:each</code> field modifier works only with multiple <code>select</code> fields. It could be
    used to apply a condition on each <code>select</code> item. For example:
</p>
<CodeBlock
    content={`
        // check if all submitted select options contain the "create" text
        @request.data.someSelectField:each ~ "create"

        // check if all existing someSelectField has "pb_" prefix
        someSelectField:each ~ "pb_%"
    `}
/>

<HeadingLink title="Examples" />
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
        Allow only registered users who are listed in an <em>allowed_users</em> multi-relation field value:
        <CodeBlock
            content={`
                @request.auth.id != "" && allowed_users.id ?= @request.auth.id
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
