<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";
    import SkipTotalQueryParam from "@/components/SkipTotalQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "page": 1,
                  "perPage": 100,
                  "totalItems": 3,
                  "totalPages": 1,
                  "items": [
                    {
                      "id": "d2972397d45614e",
                      "created": "2022-06-22 07:13:00.643Z",
                      "updated": "2022-06-22 07:13:00.643Z",
                      "name": "users",
                      "type": "base",
                      "system": true,
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
                          "name": "avatar",
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
                      "options": {
                        "manageRule": null,
                        "allowOAuth2Auth": true,
                        "allowUsernameAuth": true,
                        "allowEmailAuth": true,
                        "requireEmail": true,
                        "exceptEmailDomains": [],
                        "onlyEmailDomains": [],
                        "minPasswordLength": 8
                      },
                      "indexes": ["create index title_idx on users (title)"]
                    },
                    {
                      "id": "a98f514eb05f454",
                      "created": "2022-06-23 10:46:16.462Z",
                      "updated": "2022-06-24 13:25:04.170Z",
                      "name": "posts",
                      "system": false,
                      "schema": [
                        {
                          "system": false,
                          "id": "b7olyhbx",
                          "name": "title",
                          "type": "text",
                          "required": false,
                          "unique": false,
                          "options": {
                            "min": null,
                            "max": null,
                            "pattern": ""
                          }
                        }
                      ],
                      "listRule": "title ~ 'test'",
                      "viewRule": null,
                      "createRule": null,
                      "updateRule": null,
                      "deleteRule": null,
                      "options": {},
                      "indexes": []
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
                  "message": "Only admins can access this action.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="List collections">
    <div class="content m-b-sm">
        <p>Returns a paginated Collections list.</p>
        <p>Only admins can access this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // fetch a paginated records list
            const pageResult = await pb.collections.getList(1, 100, {
                filter: 'created >= "2022-01-01 00:00:00"',
            });

            // you can also fetch all records at once via getFullList
            const collections = await pb.collections.getFullList({ sort: '-created' });

            // or fetch only the first collection that matches the specified filter
            const collection = await pb.collections.getFirstListItem('type="auth"');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // fetch a paginated records list
            final pageResult = await pb.collections.getList(
                page: 1,
                perPage: 100,
                filter: 'created >= "2022-01-01 00:00:00"',
            );

            // you can also fetch all records at once via getFullList
            final collections = await pb.collections.getFullList(sort: '-created');

            // or fetch only the first collection that matches the specified filter
            final collection = await pb.collections.getFirstListItem('type="auth"');
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections</div>
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
                <td>The max returned collections per page (<em>default to 30</em>).</td>
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
                                // DESC by created and ASC by id
                                ?sort=-created,id
                            `}
                        />
                        <p>
                            <strong>Supported collection sort fields:</strong> <br />
                            <code>@random</code>, <code>id</code>, <code>created</code>,
                            <code>updated</code>, <code>name</code>, <code>type</code>,
                            <code>system</code>
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
                        <p>Filter expression to filter/search the returned collections list, eg.:</p>
                        <CodeBlock
                            content={`
                                ?filter=(name~'abc' && created>'2022-01-01')
                            `}
                        />
                        <p>
                            <strong>Supported collection filter fields:</strong> <br />
                            <code>id</code>, <code>created</code>, <code>updated</code>,
                            <code>name</code>, <code>type</code>, <code>system</code>
                        </p>
                        <FilterSyntax />
                    </div>
                </td>
            </tr>
            <FieldsQueryParam />
            <SkipTotalQueryParam />
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
