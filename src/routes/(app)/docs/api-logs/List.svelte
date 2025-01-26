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
                      "id": "ai5z3aoed6809au",
                      "created": "2024-10-27 09:28:19.524Z",
                      "data": {
                        "auth": "_superusers",
                        "execTime": 2.392327,
                        "method": "GET",
                        "referer": "http://localhost:8090/_/",
                        "remoteIP": "127.0.0.1",
                        "status": 200,
                        "type": "request",
                        "url": "/api/collections/_pbc_2287844090/records?page=1&perPage=1&filter=&fields=id",
                        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                        "userIP": "127.0.0.1"
                      },
                      "message": "GET /api/collections/_pbc_2287844090/records?page=1&perPage=1&filter=&fields=id",
                      "level": 0
                    },
                    {
                      "id": "26apis4s3sm9yqm",
                      "created": "2024-10-27 09:28:19.524Z",
                      "data": {
                        "auth": "_superusers",
                        "execTime": 2.392327,
                        "method": "GET",
                        "referer": "http://localhost:8090/_/",
                        "remoteIP": "127.0.0.1",
                        "status": 200,
                        "type": "request",
                        "url": "/api/collections/_pbc_2287844090/records?page=1&perPage=1&filter=&fields=id",
                        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                        "userIP": "127.0.0.1"
                      },
                      "message": "GET /api/collections/_pbc_2287844090/records?page=1&perPage=1&filter=&fields=id",
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
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `,
        },
        {
            code: 401,
            body: `
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "The authorized record is not allowed to perform this action.",
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
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            const pageResult = await pb.logs.getList(1, 20, {
                filter: 'data.status >= 400'
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            final pageResult = await pb.logs.getList(
                page: 1,
                perPage: 20,
                filter: 'data.status >= 400',
            );
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/logs</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
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
                            ASC order, e.g.:
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
                        <p>Filter expression to filter/search the returned logs list, e.g.:</p>
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
        <div class="tabs-header compact combined left">
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
