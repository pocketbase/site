<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "@collectionId": "a98f514eb05f454",
                  "@collectionName": "demo",
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
                  "code": 400,
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
                  "message": "The requested resource wasn't found. Missing collection context.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <strong>Create record</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Creates a new collection <em>Record</em>.</p>
        <p>
            Depending on the collection's <code>createRule</code> value, the access to this action may or may not
            have been restricted.
        </p>
        <p class="txt-hint">
            <em> You could find individual generated records API documentation from the admin UI. </em>
        </p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const client = new PocketBase('http://127.0.0.1:8090');

            ...

            const record = await client.collection('demo').create({
                title: 'Lorem ipsum',
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final client = PocketBase('http://127.0.0.1:8090');

            ...

            final record = await client.collection('demo').create(body: {
                'title': 'Lorem ipsum',
            });
        `}
    />

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
                <td colspan="3" class="txt-hint">Auth record fields</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>username</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The username of the auth record.
                    <br />
                    If not set, it will be auto generated.
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>email</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Auth record email address.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>emailVisibility</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Whether to show/hide the auth record email when fetching the record data.</td>
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
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>verified</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    Indicates whether the auth record is verified or not.
                    <br />
                    This field can be set only by admins or auth records with "Manage" access.
                </td>
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
            <tr>
                <td valign="top">expand</td>
                <td valign="top">
                    <span class="label">String</span>
                </td>
                <td valign="top">
                    Auto expand relations when returning the created record. Ex.:
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
