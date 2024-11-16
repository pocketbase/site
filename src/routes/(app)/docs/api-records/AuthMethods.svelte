<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "password": {
                    "enabled": true,
                    "identityFields": ["email"]
                  },
                  "oauth2": {
                    "enabled": true,
                    "providers": [
                      {
                        "name": "github",
                        "displayName": "GitHub",
                        "state": "nT7SLxzXKAVMeRQJtxSYj9kvnJAvGk",
                        "authURL": "https://github.com/login/oauth/authorize?client_id=test&code_challenge=fcf8WAhNI6uCLJYgJubLyWXHvfs8xghoLe3zksBvxjE&code_challenge_method=S256&response_type=code&scope=read%3Auser+user%3Aemail&state=nT7SLxzXKAVMeRQJtxSYj9kvnJAvGk&redirect_uri=",
                        "codeVerifier": "PwBG5OKR2IyQ7siLrrcgWHFwLLLAeUrz7PS1nY4AneG",
                        "codeChallenge": "fcf8WAhNI6uCLJYgJubLyWXHvfs8xghoLe3zksBvxjE",
                        "codeChallengeMethod": "S256"
                      }
                    ]
                  },
                  "mfa": {
                    "enabled": false,
                    "duration": 0
                  },
                  "otp": {
                    "enabled": false,
                    "duration": 0
                  }
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="List auth methods">
    <div class="content m-b-sm">
        <p>Returns a public list with the allowed collection authentication methods.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            const result = await pb.collection('users').listAuthMethods();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            final result = await pb.collection('users').listAuthMethods();
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections/<code>collectionIdOrName</code>/auth-methods</div>
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
