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
                  "smtp": {
                    "enabled": false,
                    "port": 587,
                    "host": "smtp.example.com",
                    "username": "",
                    "authMethod": "",
                    "tls": true,
                    "localName": ""
                  },
                  "backups": {
                    "cron": "0 0 * * *",
                    "cronMaxKeep": 3,
                    "s3": {
                      "enabled": false,
                      "bucket": "",
                      "region": "",
                      "endpoint": "",
                      "accessKey": "",
                      "forcePathStyle": false
                    }
                  },
                  "s3": {
                    "enabled": false,
                    "bucket": "",
                    "region": "",
                    "endpoint": "",
                    "accessKey": "",
                    "forcePathStyle": false
                  },
                  "meta": {
                    "appName": "Acme",
                    "appURL": "https://example.com",
                    "senderName": "Support",
                    "senderAddress": "support@example.com",
                    "hideControls": false
                  },
                  "rateLimits": {
                    "rules": [
                      {
                        "label": "*:auth",
                        "audience": "",
                        "duration": 3,
                        "maxRequests": 2
                      },
                      {
                        "label": "*:create",
                        "audience": "",
                        "duration": 5,
                        "maxRequests": 20
                      },
                      {
                        "label": "/api/batch",
                        "audience": "",
                        "duration": 1,
                        "maxRequests": 3
                      },
                      {
                        "label": "/api/",
                        "audience": "",
                        "duration": 10,
                        "maxRequests": 300
                      }
                    ],
                    "enabled": false
                  },
                  "trustedProxy": {
                    "headers": [],
                    "useLeftmostIP": false
                  },
                  "batch": {
                    "enabled": true,
                    "maxRequests": 50,
                    "timeout": 3,
                    "maxBodySize": 0
                  },
                  "logs": {
                    "maxDays": 7,
                    "minLevel": 0,
                    "logIP": true,
                    "logAuthId": false
                  }
                }
            `,
        },
        {
            code: 401,
            body: `
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
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
