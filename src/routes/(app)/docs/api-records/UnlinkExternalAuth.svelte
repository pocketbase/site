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
            code: 401,
            body: `
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token to be set.",
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
                  "message": "Missing external auth provider relation.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <strong>Unlink external auth provider</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Unlink a single external OAuth2 provider from an auth record.</p>
        <p>Only admins and the account owner can access this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').authWithPassword('test@example.com', '123456');

            await pb.collection('users').unlinkExternalAuth(pb.authStore.model.id, 'google');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').authWithPassword('test@example.com', '123456');

            await pb.collection('users').unlinkExternalAuth(pb.authStore.model.id, 'google');
        `}
    />

    <div class="api-route alert alert-danger">
        <strong class="label label-primary">DELETE</strong>
        <!-- prettier-ignore -->
        <div class="content">
            /api/collections/<code>collectionIdOrName</code>/records/<code>id</code>/external-auths/<code>provider</code>
        </div>
        <small class="txt-hint auth-header">*<code>Authorization: TOKEN</code></small>
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
                <td>ID or name of the auth collection.</td>
            </tr>
            <tr>
                <td>id</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>ID of the auth record.</td>
            </tr>
            <tr>
                <td>provider</td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The name of the auth provider to unlink, eg. <code>google</code>, <code>twitter</code>,
                    <code>github</code>, etc.
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
