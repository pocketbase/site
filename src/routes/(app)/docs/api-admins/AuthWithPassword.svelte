<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN5d2JoZWNuaDQ2cmhtMCIsInR5cGUiOiJhZG1pbiIsImV4cCI6MjIwODk4MTYwMH0.han3_sG65zLddpcX2ic78qgy7FKecuPfOpFa8Dvi5Bg",
                  "admin": {
                    "id": "b6e4b08274f34e9",
                    "created": "2022-06-22 07:13:09.735Z",
                    "updated": "2022-06-22 07:13:09.735Z",
                    "email": "test@example.com",
                    "avatar": 0
                  }
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "password": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <strong>Auth with password</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Authenticate an admin with their email and password.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            const authData = await pb.admins.authWithPassword('test@example.com', '1234567890');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            final authData = await pb.admins.authWithPassword('test@example.com', '1234567890');
        `}
    />

    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/admins/auth-with-password</div>
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
                        <span class="txt">identity</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Admin account identifier (currently only the email address is supported).</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span class="txt">password</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Admin password.</td>
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
