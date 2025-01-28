<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import ExpandQueryParam from "@/components/ExpandQueryParam.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "collectionId": "a98f514eb05f454",
                  "collectionName": "demo",
                  "id": "ae40239d2bc4477",
                  "updated": "2022-06-25 11:03:50.052",
                  "created": "2022-06-25 11:03:35.163",
                  "title": "Lorem ipsum"
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "title": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "Only superusers can perform this action.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "The requested resource wasn't found. Missing collection context.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="Create record">
    <div class="content m-b-sm">
        <p>Creates a new collection <em>Record</em>.</p>
        <p>
            Depending on the collection's <code>createRule</code> value, the access to this action may or may not
            have been restricted.
        </p>
        <p class="txt-hint">
            <em> You could find individual generated records API documentation from the Dashboard. </em>
        </p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            const record = await pb.collection('demo').create({
                title: 'Lorem ipsum',
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            final record = await pb.collection('demo').create(body: {
                'title': 'Lorem ipsum',
            });
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
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
                <td>ID or name of the record's collection.</td>
            </tr>
        </tbody>
    </table>

    <div class="section-title">Body Parameters</div>
    <table class="table-compact table-border">
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
                        <span class="label label-warning">Optional</span>
                        <span>id</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    <strong>15 characters string</strong> to store as record ID.
                    <br />
                    If not set, it will be auto generated.
                </td>
            </tr>

            <tr>
                <td colspan="3" class="txt-hint">Schema fields</td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Any field from the collection's schema.</strong>
                </td>
            </tr>

            <tr>
                <td colspan="3" class="txt-hint">Additional auth record fields</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span>password</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Auth record password.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span>passwordConfirm</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Auth record password confirmation.</td>
            </tr>
        </tbody>
    </table>
    <small class="block txt-hint m-t-10 m-b-base">
        Body parameters could be sent as <em>JSON</em> or
        <em>multipart/form-data</em>.
        <br />
        File upload is supported only through <em>multipart/form-data</em>.
    </small>

    <div class="section-title">Query parameters</div>
    <table class="table-compact table-border m-b-lg">
        <thead>
            <tr>
                <th>Param</th>
                <th>Type</th>
                <th width="60%">Description</th>
            </tr>
        </thead>
        <tbody>
            <ExpandQueryParam />
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
