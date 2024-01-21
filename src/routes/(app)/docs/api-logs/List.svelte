<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "page": 1,
                  "perPage": 20,
                  "totalItems": 2,
                  "items": [
                    {
                      "id": "9ajmzgd99r039k9",
                      "created": "2023-12-12 04:41:59.973Z",
                      "updated": "2023-12-12 04:41:59.973Z",
                      "data": {
                        "auth": "authRecord",
                        "execTime": 364.961387,
                        "method": "POST",
                        "referer": "http://localhost:8090/",
                        "remoteIp": "127.0.0.1",
                        "status": 200,
                        "type": "request",
                        "url": "/api/collections/users/auth-with-password",
                        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
                        "userIp": "127.0.0.1"
                      },
                      "message": "POST /api/collections/users/auth-with-password",
                      "level": 0
                    },
                    {
                      "id": "26apis4s3sm9yqm",
                      "created": "2023-12-12 04:27:21.583Z",
                      "updated": "2023-12-12 04:27:21.583Z",
                      "data": {
                        "auth": "authRecord",
                        "execTime": 403.664712,
                        "method": "POST",
                        "referer": "http://localhost:8090/",
                        "remoteIp": "127.0.0.1",
                        "status": 200,
                        "type": "request",
                        "url": "/api/collections/users/auth-with-password?expand=rel\u0026fields=*%2Crecord.*%2Crecord.expand.rel.id",
                        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
                        "userIp": "127.0.0.1"
                      },
                      "message": "POST /api/collections/users/auth-with-password?expand=rel\u0026fields=*%2Crecord.*%2Crecord.expand.rel.id",
                      "level": 0
                    }
                  ]
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `,
        },
        {
            code: 401,
            body: `
                {
                  "code": 401,
                  "message": "The request requires admin authorization token to be set.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="List logs">
    <div class="content m-b-sm">
        <p>Returns a paginated logs list.</p>
        <p>Only admins can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const pageResult = await pb.logs.getList(1, 20, {
                filter: 'data.status >= 400'
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final pageResult = await pb.logs.getList(
                page: 1,
                perPage: 20,
                filter: 'data.status >= 400',
            );
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/logs</div>
        <small class="txt-hint auth-header">Requires <code>Authorization: TOKEN</code></small>
    </div>

    <div class="section-title">Query parameters</div>
    <table class="table-compact table-border m-b-base">
        <thead>
            <tr>
                <th>Param</th>
                <th>Type</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="query-page">page</td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>The page (aka. offset) of the paginated list (<em>default to 1</em>).</td>
            </tr>
            <tr>
                <td id="query-perPage">perPage</td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>The max returned logs per page (<em>default to 30</em>).</td>
            </tr>
            <tr>
                <td id="query-sort">sort</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    <div class="content">
                        <p>Specify the <em>ORDER BY</em> fields.</p>
                        <p>
                            Add <code>-</code> / <code>+</code> (default) in front of the attribute for DESC /
                            ASC order, eg.:
                        </p>
                        <CodeBlock
                            content={`
                                // DESC by the insertion rowid and ASC by level
                                ?sort=-rowid,level
                            `}
                        />
                        <p>
                            <strong>Supported log sort fields:</strong> <br />
                            <code>@random</code>, <code>rowid</code>, <code>id</code>, <code>created</code>,
                            <code>updated</code>, <code>level</code>, <code>message</code> and any
                            <code>data.*</code> attribute.
                        </p>
                    </div>
                </td>
            </tr>
            <tr>
                <td id="query-filter">filter</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    <div class="content">
                        <p>Filter expression to filter/search the returned logs list, eg.:</p>
                        <CodeBlock
                            content={`
                                ?filter=(data.url~'test.com' && level>0)
                            `}
                        />
                        <p>
                            <strong>Supported log filter fields:</strong> <br />
                            <code>id</code>, <code>created</code>, <code>updated</code>,
                            <code>level</code>, <code>message</code> and any <code>data.*</code> attribute.
                        </p>
                        <FilterSyntax />
                    </div>
                </td>
            </tr>
            <FieldsQueryParam />
        </tbody>
    </table>

    <div class="section-title">Responses</div>
    <div class="tabs">
        <div class="tabs-header compact left">
            {#each responses as response (response.code)}
                <button
                    class="tab-item"
                    class:active={responseTab === response.code}
                    on:click={() => (responseTab = response.code)}
                >
                    {response.code}
                </button>
            {/each}
        </div>
        <div class="tabs-content">
            {#each responses as response (response.code)}
                <div class="tab-item" class:active={responseTab === response.code}>
                    <CodeBlock content={response.body} />
                </div>
            {/each}
        </div>
    </div>
</Accordion>
