<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
              [
                {
                    "key": "pb_backup_20230519162514.zip",
                    "modified": "2023-05-19 16:25:57.542Z",
                    "size": 251316185
                },
                {
                    "key": "pb_backup_20230518162514.zip",
                    "modified": "2023-05-18 16:25:57.542Z",
                    "size": 251314010
                }
              ]
            `,
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "Failed to load backups filesystem.",
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
        <strong>List backups</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Returns list with all available backup files.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const backups = await pb.backups.getFullList();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final backups = await pb.backups.getFullList();
        `}
    />

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/backups</div>
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
                <td id="query-page">fields</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    Comma separated string of the fields to return in the JSON response
                    <em>(by default returns all fields)</em>.
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
