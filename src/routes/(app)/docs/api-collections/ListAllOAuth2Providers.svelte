<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                [
                    {
                        "name": "apple",
                        "displayName": "Apple",
                        "logo": "..."
                    },
                    {
                        "name": "google",
                        "displayName": "Google",
                        "logo": "..."
                    },
                    {
                        "name": "microsoft",
                        "displayName": "Microsoft",
                        "logo": "..."
                    },
                    ...
                ]
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

<Accordion single title="List all configurable OAuth2 providers">
    <div class="content m-b-sm">
        <p>
            Returns a list with all configurable OAuth2 providers
            <em>(used primarily in the Dashboard UI)</em>.
        </p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            const providers = await pb.collections.getAllOAuth2Providers();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            final providers = await pb.collections.getAllOAuth2Providers();
        `}
    />

    <h6 class="m-b-xs">API details</h6>

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections/meta/oauth2-providers</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
    </div>

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
