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
                  "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjRxMXhsY2xtZmxva3UzMyIsInR5cGUiOiJhdXRoUmVjb3JkIiwiY29sbGVjdGlvbklkIjoiX3BiX3VzZXJzX2F1dGhfIiwiZXhwIjoyMjA4OTg1MjYxfQ.UwD8JvkbQtXpymT09d7J6fdA0aP9g4FJ1GPh_ggEkzc",
                  "record": {
                    "id": "8171022dc95a4ed",
                    "collectionId": "d2972397d45614e",
                    "collectionName": "users",
                    "created": "2022-06-24 06:24:18.434Z",
                    "updated": "2022-06-24 06:24:18.889Z",
                    "username": "test@example.com",
                    "email": "test@example.com",
                    "verified": true,
                    "emailVisibility": false,
                    "someCustomField": "example 123"
                  },
                  "meta": {
                    "id": "abc123",
                    "name": "John Doe",
                    "username": "john.doe",
                    "email": "test@example.com",
                    "isNew": false,
                    "avatarURL": "https://example.com/avatar.png",
                    "rawUser": {...},
                    "accessToken": "...",
                    "refreshToken": "...",
                    "expiry": "..."
                  }
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
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

<Accordion single title={"Auth with OAuth2"}>
    <div class="content m-b-sm">
        <p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p>
        <p>This action usually should be called right after the provider login page redirect.</p>
        <p>
            You could also check the
            <a href="/docs/authentication#web-oauth2-integration">OAuth2 web integration example</a>.
        </p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            const authData = await pb.collection('users').authWithOAuth2Code(
                'google',
                'CODE',
                'VERIFIER',
                'REDIRECT_URL',
                // optional data that will be used for the new account on OAuth2 sign-up
                {
                  'name': 'test',
                },
            );

            // after the above you can also access the auth data from the authStore
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.record.id);

            // "logout" the last authenticated record
            pb.authStore.clear();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            final authData = await pb.collection('users').authWithOAuth2Code(
              'google',
              'CODE',
              'VERIFIER',
              'REDIRECT_URL',
              // optional data that will be used for the new account on OAuth2 sign-up
              createData: {
                'name': 'test',
              },
            );

            // after the above you can also access the auth data from the authStore
            print(pb.authStore.isValid);
            print(pb.authStore.token);
            print(pb.authStore.record.id);

            // "logout" the last authenticated record
            pb.authStore.clear();
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/collections/<code>collectionIdOrName</code>/auth-with-oauth2</div>
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
                        <span class="txt">provider</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The name of the OAuth2 client provider (e.g. "google").</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span class="txt">code</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The authorization code returned from the initial request.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span class="txt">codeVerifier</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The code verifier sent with the initial request as part of the code_challenge.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span class="txt">redirectUrl</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The redirect url sent with the initial request.</td>
            </tr>
            <tr>
                <td valign="top">
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>createData</span>
                    </div>
                </td>
                <td valign="top">
                    <span class="label">Object</span>
                </td>
                <td valign="top">
                    <p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p>
                    <p>
                        The created auth record must comply with the same requirements and validations in the
                        regular <strong>create</strong> action.
                        <br />
                        <em>
                            The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and
                            files upload currently are not supported during OAuth2 sign-ups.
                        </em>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <small class="block txt-hint m-t-10 m-b-base">
        Body parameters could be sent as <em>JSON</em> or
        <em>multipart/form-data</em>.
    </small>

    <div class="section-title">Query parameters</div>
    <table class="table-compact table-border m-b-base">
        <thead>
            <tr>
                <th>Param</th>
                <th>Type</th>
                <th width="60%">Description</th>
            </tr>
        </thead>
        <tbody>
            <ExpandQueryParam />
            <FieldsQueryParam prefix="record." />
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
