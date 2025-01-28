<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FilterSyntax from "@/components/FilterSyntax.svelte";
    import ExpandQueryParam from "@/components/ExpandQueryParam.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";
    import SkipTotalQueryParam from "@/components/SkipTotalQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "page": 1,
                  "perPage": 100,
                  "totalItems": 2,
                  "totalPages": 1,
                  "items": [
                    {
                      "id": "ae40239d2bc4477",
                      "collectionId": "a98f514eb05f454",
                      "collectionName": "posts",
                      "updated": "2022-06-25 11:03:50.052",
                      "created": "2022-06-25 11:03:35.163",
                      "title": "test1"
                    },
                    {
                      "id": "d08dfc4f4d84419",
                      "collectionId": "a98f514eb05f454",
                      "collectionName": "posts",
                      "updated": "2022-06-25 11:03:45.876",
                      "created": "2022-06-25 11:03:45.876",
                      "title": "test2"
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
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "Only superusers can filter by '@collection.*'",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="List/Search records">
    <div class="content m-b-sm">
        <p>Returns a paginated records list, supporting sorting and filtering.</p>
        <p>
            Depending on the collection's <code>listRule</code> value, the access to this action may or may not
            have been restricted.
        </p>
        <p class="txt-hint">
            <em>
                You could find individual generated records API documentation in the "Dashboard > Collections
                > API Preview".
            </em>
        </p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            // fetch a paginated records list
            const resultList = await pb.collection('posts').getList(1, 50, {
                filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
            });

            // you can also fetch all records at once via getFullList
            const records = await pb.collection('posts').getFullList({
                sort: '-created',
            });

            // or fetch only the first record that matches the specified filter
            const record = await pb.collection('posts').getFirstListItem('someField="test"', {
                expand: 'relField1,relField2.subRelField',
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            // fetch a paginated records list
            final resultList = await pb.collection('posts').getList(
              page: 1,
              perPage: 50,
              filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
            );

            // you can also fetch all records at once via getFullList
            final records = await pb.collection('posts').getFullList(sort: '-created');

            // or fetch only the first record that matches the specified filter
            final record = await pb.collection('posts').getFirstListItem(
              'someField="test"',
              expand: 'relField1,relField2.subRelField',
            );
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections/<code>collectionIdOrName</code>/records</div>
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
                <td>ID or name of the records' collection.</td>
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
                <td>The max returned records per page (<em>default to 30</em>).</td>
            </tr>
            <tr>
                <td valign="top" id="query-sort">sort</td>
                <td valign="top">
                    <span class="label">String</span>
                </td>
                <td valign="top">
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
                            <strong>Supported record sort fields:</strong> <br />
                            <code>@random</code>, <code>@rowid</code>, <code>id</code>,
                            <strong>and any other collection field</strong>.
                        </p>
                    </div>
                </td>
            </tr>
            <tr>
                <td valign="top" id="query-filter">filter</td>
                <td valign="top">
                    <span class="label">String</span>
                </td>
                <td valign="top">
                    <div class="content">
                        <p>
                            Filter expression to filter/search the returned records list (in addition to the
                            collection's <code>listRule</code>), e.g.:
                        </p>
                        <CodeBlock
                            content={`
                                ?filter=(title~'abc' && created>'2022-01-01')
                            `}
                        />
                        <p>
                            <strong>Supported record filter fields:</strong> <br />
                            <code>id</code>, <strong>+ any field from the collection schema</strong>.
                        </p>
                        <FilterSyntax />
                    </div>
                </td>
            </tr>
            <ExpandQueryParam />
            <FieldsQueryParam />
            <SkipTotalQueryParam />
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
