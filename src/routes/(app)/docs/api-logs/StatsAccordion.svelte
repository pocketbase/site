<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";

    const responses = [
        {
            code: 200,
            body: `
                [
                  {
                    "total": 4,
                    "date": "2022-06-01 19:00:00.000"
                  },
                  {
                    "total": 1,
                    "date": "2022-06-02 12:00:00.000"
                  },
                  {
                    "total": 8,
                    "date": "2022-06-02 13:00:00.000"
                  }
                ]
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
        <strong>Request logs statistics</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Returns hourly aggregated request logs statistics.</p>
        <p>Only admins can access this action.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const client = new PocketBase('http://127.0.0.1:8090');

            ...

            await client.admins.authWithPassword('test@example.com', '123456');

            const stats = await client.logs.getRequestsStats({
                filter: 'status >= 400'
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final client = PocketBase('http://127.0.0.1:8090');

            ...

            await client.admins.authWithPassword('test@example.com', '123456');

            final stats = await client.logs.getRequestsStats(
                filter: 'status >= 400'
            );
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/logs/requests/stats</div>
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
                <td id="query-filter">filter</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    <div class="content">
                        <p>Filter expression to filter/search the request logs, eg.:</p>
                        <CodeBlock
                            content={`
                                ?filter=(url~'test.com' && created>'2022-01-01')
                            `}
                        />
                        <p>
                            <strong>Supported request log filter fields:</strong> <br />
                            <code>rowid</code>, <code>id</code>, <code>created</code>, <code>updated</code>,
                            <code>url</code>, <code>method</code>, <code>status</code>, <code>auth</code>,
                            <code>ip</code>, <code>referer</code>, <code>userAgent</code>
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
