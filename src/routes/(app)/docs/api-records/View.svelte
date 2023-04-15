<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "id": "ae40239d2bc4477",
                  "collectionId": "a98f514eb05f454",
                  "collectionName": "posts",
                  "updated": "2022-06-25 11:03:50.052",
                  "created": "2022-06-25 11:03:35.163",
                  "title": "test1"
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
        <strong>View record</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Returns a single collection record by its ID.</p>
        <p>
            Depending on the collection's <code>viewRule</code> value, the access to this action may or may not
            have been restricted.
        </p>
        <p class="txt-hint">
            <em>
                You could find individual generated records API documentation in the "Admin UI > Collections >
                API Preview".
            </em>
        </p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            const record1 = await pb.collection('posts').getOne('RECORD_ID', {
                expand: 'relField1,relField2.subRelField',
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            final record1 = await pb.collection('posts').getOne('RECORD_ID',
              expand: 'relField1,relField2.subRelField',
            );
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">
            /api/collections/<code>collectionIdOrName</code>/records/<code>recordId</code>
        </div>
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
                <td>ID or name of the record's collection.</td>
            </tr>
            <tr>
                <td>recordId</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>ID of the record to view.</td>
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
                <td valign="top">expand</td>
                <td valign="top">
                    <span class="label">String</span>
                </td>
                <td valign="top">
                    Auto expand nested record relations. Ex.:
                    <CodeBlock content={`?expand=rel1,rel2.subrel21.subrel22`} />
                    Supports up to 6-levels depth nested relations expansion.
                    <br />
                    The expanded relations will be appended to each individual record under the
                    <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>).
                    <br />
                    For more info check the <a href="/docs/expanding-relations">Expanding relations docs</a>.
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
