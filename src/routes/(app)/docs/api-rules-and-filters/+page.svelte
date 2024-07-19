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
    from a different collection) to be able to fully manage the data of another user (ex. changing their email,
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
            For example: listing only the records of some Collection where the field <code>status</code> is set to <code>"active"</code> is as simple as the expression: <code>status = "active"</code>.
        </p>
        <p>
            <strong>API Return values</strong>
            <br />
            The API will return status code <code>200</code> and an empty array if a request didn't
            satisfy a <code>listRule</code>, code <code>400</code> for an unsatisfied <code>createRule</code>, and 404 for
            unsatisfied <code>viewRule</code> <code>updateRule</code> and <code>deleteRule</code>s.
            <br />
            All "locked" rules (see above) return code <code>403</code> if the request doesn't come from an admin.
        </p>
        <p>
            <strong>Admins can access everything!</strong>: API Rules are ignored when the action is performed by an authorized admin
        </p>
    </div>
</div>

<HeadingLink title="Filters syntax" />
<p>You can find information about the available fields in your collection's API rules tab:</p>
<img
    src="/images/screenshots/collection-rules.png"
    alt="Collection API Rules filters screenshot"
    class="screenshot"
    width="550"
/>
<p>
    The UI has autocomplete to help guide you while typing rule filter expressions and in general you can use 
    <strong>3 types of fields</strong>:
</p>
<ul>
    <li>
        <strong>Your Collection schema fields</strong>
        <br />
        This also includes all nested relation fields (e.g.
        <code>someRelField.status != "pending"</code>).
    </li>
    <li>
        <code><strong>@request.*</strong></code>
        <br />
        Used to access the current request data, such as query parameters, body/form data, authorized user state,
        etc.
        <ul>
            <li>
                <code>@request.context</code> - the context where the rule is used. E.g: disallow OAuth2 user creation with the API rule <code>@request.context != "oauth2"</code>.
                <br />
                <small class="txt-hint">
                    The currently supported context values are <code>default</code>, <code>oauth2</code>,
                    <code>realtime</code>, <code>protectedFile</code>.
                </small>
            </li>
            <li>
                <code>@request.method</code> - the HTTP request method (ex.
                <code>@request.method = "GET"</code>)
            </li>
            <li>
                <code>@request.headers.*</code> - the request headers as string values (ex.
                <code>@request.headers.x_token = "test"</code>)
                <br />
                <small class="txt-hint">
                    Note: All header keys are normalized to lowercase and "-" is replaced with "_" (for
                    example "X-Token" is "x_token").
                </small>
            </li>
            <li>
                <code>@request.query.*</code> - the request query parameters as string values (ex.
                <code>@request.query.page = "1"</code>)
            </li>
            <li>
                <code>@request.data.*</code> - the submitted body parameters (ex.
                <code>@request.data.title != ""</code>)
            </li>
            <li>
                <code>@request.auth.*</code> - the current authenticated model (ex.
                <code>@request.auth.id != ""</code>)
            </li>
        </ul>
    </li>
    <li>
        <code><strong>@collection.*</strong></code>
        <p>
            This filter can be used to target other Collections that are not directly related to the current
            one (i.e.: there's no relation field pointing to it but both share a common field, like "categoryId"):
        </p>
        <CodeBlock
            content={`
                @collection.news.categoryId ?= categoryId && @collection.news.author ?= @request.auth.id
            `}
        />
        (The ?= operator is defined below).
        <br />
        This filter expression says: "categoryId values in the news Collection that are equal to the current table's categoryId values and where the author is the same as the auth id in the request".
        <p>
            If you want to join the same collection multiple times but based on different criteria, you
            can define an alias by appending <code>:alias</code> suffix to the collection name. Here <code>courseRegistrations</code> is aliased to <code>courseRegistrations:auth</code>.
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
        This is a List rule on the users table and says: "Given the api request is made from someone logged in, return all the users in the current courseGroup as the user making the request". I.e. it shows your classmates!
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
    used to check whether the client submitted specific data with the request. E.g. disallow changing a "role" field by making sure "role" on the request is not set:
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
    It can be used with Collection and <code>@request.data.*</code> fields. E.g.:
</p>
<CodeBlock
    content={`
        // data = {"someSelectField": ["val1", "val2"]}:
        @request.data.someSelectField:length > 1

        // check the length of a related field:
        affiliateSignups:length >= 2
    `}
/>

<HeadingLink title=":each modifier" tag="h5" />
<p>
    The <code>:each</code> field modifier works only with the multiple variety of <code>select</code>, <code>file</code> and
    <code>relation</code>
    type fields. It can be used to apply a condition to each item in the field array. For example:
</p>
<CodeBlock
    content={`
        // check if all submitted select options contain the word "create":
        @request.data.someSelectField:each ~ "create"

        // check if all existing someSelectField have a "pb_" prefix:
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
        "Lorem" (e.g. "Lorem ipsum"):
        <CodeBlock
            content={`
                title ~ "Lorem%"
            `}
        />
    </li>
</ul>
