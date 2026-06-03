<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                    "execTime": 0,
                    "affectedRows": 0,
                    "columns": [
                        {
                            "name": "count(*)",
                            "type": "",
                            "nullable": true
                        }
                    ],
                    "rows": [
                        ["1"]
                    ]
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Failed to execute query. Raw error: ...",
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

<Accordion single title="Run raw SQL query">
    <div class="content m-b-sm">
        <p>
            Executes a raw SQL query string
            <em>(used primarily for the "SQL Console" UI in PocketBase v0.39+)</em>.
        </p>
        <p>Only superusers can perform this action.</p>
    </div>

    <div class="alert alert-warning">
        <div class="icon">
            <i class="ri-error-warning-line" />
        </div>
        <div class="content">
            <p>
                <strong>Be very careful when using this API!</strong>
            </p>
            <p>
                It is intended for one-off analytic queries, the occasional
                VACUUM/PRAGMA optimize or debug purposes and NOT as the primary interface
                for interacting with your PocketBase data because, depending on the query,
                the execution could break your application and may not be reversible!
            </p>
        </div>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('_superusers').authWithPassword('test@example.com', '1234567890');

            await pb.sql.run('SELECT count(*) FROM users');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('_superusers').authWithPassword('test@example.com', '1234567890');

            await pb.sql.run('SELECT count(*) FROM users');
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/sql</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
    </div>

    <div class="section-title">Body Parameters</div>
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
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span>query</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The SQL query to execute. Multiple inline SQL queries are supported but only the result of the last one is returned.</td>
            </tr>
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
