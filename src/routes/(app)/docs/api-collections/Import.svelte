<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";

    const responses = [
        {
            code: 204,
            body: `null`,
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "collections": {
                      "code": "collections_import_failure",
                      "message": "Failed to import the collections configuration."
                    }
                  }
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
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="Import collections">
    <div class="content m-b-sm">
        <p>Bulk imports the provided <em>Collections</em> configuration.</p>
        <p>Only admins can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const importData = [
                {
                    name: 'collection1',
                    schema: [
                        {
                            name: 'status',
                            type: 'bool',
                        },
                    ],
                },
                {
                    name: 'collection2',
                    schema: [
                        {
                            name: 'title',
                            type: 'text',
                        },
                    ],
                },
            ];

            await pb.collections.import(importData, false);
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final importData = [
                CollectionModel(
                    name: "collection1",
                    schema: [
                        SchemaField(name: "status", type: "bool"),
                    ],
                ),
                CollectionModel(
                    name: "collection2",
                    schema: [
                        SchemaField(name: "title", type: "text"),
                    ],
                ),
            ];

            await pb.collections.import(importData, deleteMissing: false);
        `}
    />

    <div class="api-route alert alert-warning">
        <strong class="label label-primary">PUT</strong>
        <div class="content">/api/collections/import</div>
        <small class="txt-hint auth-header">Requires <code>Authorization: TOKEN</code></small>
    </div>

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
                        <span class="label label-success">Required</span>
                        <span class="txt">collections</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"Array<Collection>"}</span>
                </td>
                <td>List of collections to import (replace and create).</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">deleteMissing</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    If <em>true</em> all existing collections and schema fields that are not present in the
                    imported configuration <strong>will be deleted</strong>, including their related records
                    data (default to
                    <em>false</em>).
                </td>
            </tr>
        </tbody>
    </table>
    <small class="block txt-hint m-t-10 m-b-base">
        Body parameters could be sent as <em>JSON</em> or
        <em>multipart/form-data</em>.
    </small>

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
