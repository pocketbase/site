<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "id": "d2972397d45614e",
                  "created": "2022-06-22 07:13:00.643Z",
                  "updated": "2022-06-22 07:13:00.643Z",
                  "name": "posts",
                  "type": "base",
                  "schema": [
                    {
                      "system": false,
                      "id": "njnkhxa2",
                      "name": "title",
                      "type": "text",
                      "required": false,
                      "unique": false,
                      "options": {
                        "min": null,
                        "max": null,
                        "pattern": ""
                      }
                    },
                    {
                      "system": false,
                      "id": "9gvv0jkj",
                      "name": "image",
                      "type": "file",
                      "required": false,
                      "unique": false,
                      "options": {
                        "maxSelect": 1,
                        "maxSize": 5242880,
                        "mimeTypes": [
                          "image/jpg",
                          "image/jpeg",
                          "image/png",
                          "image/svg+xml",
                          "image/gif"
                        ],
                        "thumbs": null
                      }
                    }
                  ],
                  "listRule": "id = @request.user.id",
                  "viewRule": "id = @request.user.id",
                  "createRule": "id = @request.user.id",
                  "updateRule": "id = @request.user.id",
                  "deleteRule": null,
                  "options": {},
                  "indexes": ["create index title_idx on posts (title)"]
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
        {
            code: 404,
            body: `
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <strong>View collection</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Returns a single Collection by its ID or name.</p>
        <p>Only admins can access this action.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const collection = await pb.collections.getOne('demo');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final collection = await pb.collections.getOne('demo');
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections/<code>collectionIdOrName</code></div>
        <small class="txt-hint auth-header">Requires <code>Authorization: TOKEN</code></small>
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
