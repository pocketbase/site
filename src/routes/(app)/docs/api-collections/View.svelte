<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "id": "_pbc_2287844090",
                  "listRule": null,
                  "viewRule": null,
                  "createRule": null,
                  "updateRule": null,
                  "deleteRule": null,
                  "name": "posts",
                  "type": "base",
                  "fields": [
                    {
                      "autogeneratePattern": "[a-z0-9]{15}",
                      "hidden": false,
                      "id": "text3208210256",
                      "max": 15,
                      "min": 15,
                      "name": "id",
                      "pattern": "^[a-z0-9]+$",
                      "presentable": false,
                      "primaryKey": true,
                      "required": true,
                      "system": true,
                      "type": "text"
                    },
                    {
                      "autogeneratePattern": "",
                      "hidden": false,
                      "id": "text724990059",
                      "max": 0,
                      "min": 0,
                      "name": "title",
                      "pattern": "",
                      "presentable": false,
                      "primaryKey": false,
                      "required": false,
                      "system": false,
                      "type": "text"
                    },
                    {
                      "hidden": false,
                      "id": "autodate2990389176",
                      "name": "created",
                      "onCreate": true,
                      "onUpdate": false,
                      "presentable": false,
                      "system": false,
                      "type": "autodate"
                    },
                    {
                      "hidden": false,
                      "id": "autodate3332085495",
                      "name": "updated",
                      "onCreate": true,
                      "onUpdate": true,
                      "presentable": false,
                      "system": false,
                      "type": "autodate"
                    }
                  ],
                  "indexes": [],
                  "system": false
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
        {
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="View collection">
    <div class="content m-b-sm">
        <p>Returns a single Collection by its ID or name.</p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            const collection = await pb.collections.getOne('demo');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            final collection = await pb.collections.getOne('demo');
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections/<code>collectionIdOrName</code></div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
    </div>

    <div class="section-title">Path parameters</div>
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
                <td>collectionIdOrName</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>ID or name of the collection to view.</td>
            </tr>
        </tbody>
    </table>

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
