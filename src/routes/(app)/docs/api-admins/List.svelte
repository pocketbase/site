<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "page": 1,
                  "perPage": 100,
                  "totalItems": 2,
                  "items": [
                    {
                      "id": "b6e4b08274f34e9",
                      "created": "2022-06-22 07:13:09.735Z",
                      "updated": "2022-06-22 07:15:09.735Z",
                      "email": "test@example.com",
                      "avatar": 0
                    },
                    {
                      "id": "e99c3f2aff6d695",
                      "created": "2022-06-25 16:14:23.037Z",
                      "updated": "2022-06-25 16:14:27.495Z",
                      "email": "test2@example.com",
                      "avatar": 6
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

<Accordion single>
    <svelte:fragment slot="header">
        <strong>List admins</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Returns a paginated admins list.</p>
        <p>Only admins can access this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            // fetch a paginated records list
            const resultList = await pb.admins.getList(1, 100, {
                filter: 'created >= '2022-01-01 00:00:00'',
            });

            // you can also fetch all records at once via getFullList
            const admins = await pb.admins.getFullList({ sort: '-created' });

            // or fetch only the first admin that matches the specified filter
            const admin = await pb.admins.getFirstListItem('email~"test"');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            // fetch a paginated records list
            final resultList = await pb.admins.getList(
                page: 1,
                perPage: 100,
                filter: 'created >= "2022-01-01 00:00:00"',
            );

            // alternatively you can also fetch all admins at once via getFullList
            final admins = await pb.admins.getFullList(sort: '-created');

            // or fetch only the first admin that matches the specified filter
            final admin = await pb.admins.getFirstListItem('email~"test"');
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/admins</div>
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
                <td>The max returned admins per page (<em>default to 30</em>).</td>
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
                            <strong>Supported admin sort fields:</strong> <br />
                            <code>@random</code>, <code>id</code>, <code>created</code>,
                            <code>updated</code>, <code>email</code>, <code>name</code>
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
                        <p>Filter expression to filter/search the returned admins list, eg.:</p>
                        <CodeBlock
                            content={`
                                ?filter=(id='abc' && created>'2022-01-01')
                            `}
                        />
                        <p>
                            <strong>Supported admin filter fields:</strong> <br />
                            <code>id</code>, <code>created</code>, <code>updated</code>, <code>email</code>,
                            <code>name</code>
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
