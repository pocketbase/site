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
                  "meta": {
                    "appName": "Acme",
                    "appURL": "https://example.com",
                    "senderName": "Support",
                    "senderAddress": "support@example.com",
                    "hideControls": false
                  },
                  "logs": {
                    "maxDays": 5,
                    "minLevel": 0,
                    "logIP": true,
                    "logAuthId": false
                  },
                  "backups": {
                    "cron": "0 0 * * *",
                    "cronMaxKeep": 1,
                    "s3": {
                      "enabled": false,
                      "bucket": "",
                      "region": "",
                      "endpoint": "",
                      "accessKey": "",
                      "secret": "",
                      "forcePathStyle": false
                    }
                  },
                  "smtp": {
                    "enabled": false,
                    "host": "smtp.example.com",
                    "port": 587,
                    "username": "",
                    "password": "",
                    "tls": true,
                    "authMethod": "",
                    "localName": ""
                  },
                  "s3": {
                    "enabled": false,
                    "bucket": "",
                    "region": "",
                    "endpoint": "",
                    "accessKey": "",
                    "secret": "",
                    "forcePathStyle": false
                  },
                  "adminAuthToken": {
                    "secret": "******",
                    "duration": 1209600
                  },
                  "adminPasswordResetToken": {
                    "secret": "******",
                    "duration": 1800
                  },
                  "recordAuthToken": {
                    "secret": "******",
                    "duration": 1209600
                  },
                  "recordPasswordResetToken": {
                    "secret": "******",
                    "duration": 1800
                  },
                  "recordEmailChangeToken": {
                    "secret": "******",
                    "duration": 1800
                  },
                  "recordVerificationToken": {
                    "secret": "******",
                    "duration": 604800
                  },
                  "googleAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "facebookAuth": {
                    "enabled": false,
                    "allowRegistrations": false
                  },
                  "githubAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "gitlabAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "discordAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "twitterAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "microsoftAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "spotifyAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  }
                }
            `,
        },
        {
            code: 401,
            body: `
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "code": 403,
                  "message": "The authorized record is not allowed to perform this action.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="List settings">
    <div class="content m-b-sm">
        <p>Returns a list with all available application settings.</p>
        <p>Secret/password fields are automatically redacted with <em>******</em> characters.</p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            const settings = await pb.settings.getAll();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            final settings = await pb.settings.getAll();
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/settings</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
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
