<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "page": 1,
                  "perPage": 20,
                  "totalItems": 3,
                  "items": [
                    {
                      "id": "ox0A8SjBXcdoZC0",
                      "created": "2022-06-01 13:11:23.302Z",
                      "updated": "2022-06-01 13:11:23.302Z",
                      "url": "/api/users/auth-methods",
                      "method": "get",
                      "status": 200,
                      "auth": "guest",
                      "ip": "127.0.0.1:48272",
                      "referer": "http://127.0.0.1:8090/",
                      "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
                      "meta": {}
                    },
                    {
                      "id": "elLzrW94D54Hxhj",
                      "created": "2022-06-01 13:10:03.374Z",
                      "updated": "2022-06-01 13:10:03.374Z",
                      "url": "/api/users/auth-methods",
                      "method": "get",
                      "status": 200,
                      "auth": "guest",
                      "remoteIp": "127.0.0.1:56134",
                      "userIp": "127.0.0.1:56134",
                      "referer": "http://127.0.0.1:8090/",
                      "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
                      "meta": {}
                    },
                    {
                      "id": "WEiJHGnOnjS3see",
                      "created": "2022-06-01 13:09:43.429Z",
                      "updated": "2022-06-01 13:09:43.429Z",
                      "url": "/api/users/auth-methods",
                      "method": "get",
                      "status": 200,
                      "auth": "guest",
                      "remoteIp": "127.0.0.1:56134",
                      "userIp": "127.0.0.1:56134",
                      "referer": "http://127.0.0.1:8090/",
                      "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
                      "meta": {}
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

<Accordion single>
    <svelte:fragment slot="header">
        <strong>List request logs</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Returns a paginated request logs list.</p>
        <p>Only admins can access this action.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const pageResult = await pb.logs.getRequestsList(1, 20, {
                filter: 'status >= 400',
                sort: '-created'
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final pageResult = await pb.logs.getRequestsList(
                page: 1,
                perPage: 20,
                filter: 'status >= 400',
                sort: '-created'
            );
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/logs/requests</div>
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
                <td>The max returned request logs per page (<em>default to 30</em>).</td>
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
                                // DESC by the insertion rowid and ASC by status
                                ?sort=-rowid,status
                            `}
                        />
                        <p>
                            <strong>Supported request log sort fields:</strong> <br />
                            <code>@random</code>, <code>rowid</code>, <code>id</code>, <code>created</code>,
                            <code>updated</code>, <code>url</code>, <code>method</code>, <code>status</code>,
                            <code>auth</code>, <code>remoteIp</code>, <code>userIp</code>,
                            <code>referer</code>, <code>userAgent</code>
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
                        <p>Filter expression to filter/search the returned request logs list, eg.:</p>
                        <CodeBlock
                            content={`
                                ?filter=(url~'test.com' && created>'2022-01-01')
                            `}
                        />
                        <p>
                            <strong>Supported request log filter fields:</strong> <br />
                            <code>rowid</code>, <code>id</code>, <code>created</code>, <code>updated</code>,
                            <code>url</code>, <code>method</code>, <code>status</code>, <code>auth</code>,
                            <code>userIp</code>, <code>remoteIp</code>, <code>referer</code>,
                            <code>userAgent</code>
                        </p>
                        <FilterSyntax />
                    </div>
                </td>
            </tr>
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
