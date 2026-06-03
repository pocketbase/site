<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                    "fields": [
                        {
                            "autogeneratePattern": "",
                            "help": "",
                            "hidden": false,
                            "id": "text3208210256",
                            "max": 0,
                            "min": 0,
                            "name": "id",
                            "pattern": "^[a-z0-9]+$",
                            "presentable": false,
                            "primaryKey": true,
                            "required": true,
                            "system": true,
                            "type": "text"
                        }
                    ],
                    "sample": [
                        {
                            "collectionId": "pbc_469256437",
                            "collectionName": "temp_view_AFM1r",
                            "id": "p6dnlyu5kczgvzr"
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
                  "message": "Invalid view query. Raw error: ...",
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

<Accordion single title="Dry run view query">
    <div class="content m-b-sm">
        <p>
            Tests the specified view query and returns a sample of its resulting records and fields
            <em>(used primarily in the Dashboard UI)</em>.
        </p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            const result = await pb.collections.dryRunViewQuery("SELECT id FROM users");
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            final result = await pb.collections.dryRunViewQuery("SELECT id FROM users");
        `}
    />

    <h6 class="m-b-xs">API details</h6>

    <div class="api-route alert alert-success">
        <strong class="label label-primary">POSt</strong>
        <div class="content">/api/collections/meta/dry-run-view</div>
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
                <td>The SQL SELECT query to execute.</td>
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
