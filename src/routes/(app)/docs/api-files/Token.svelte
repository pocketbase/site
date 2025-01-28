<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import ThumbFormats from "@/components/ThumbFormats.svelte";

    let responseTab = 200;

    const responses = [
        {
            code: 200,
            body: `
                {
                    "token": "..."
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Failed to generate file token.",
                  "data": {}
                }
            `,
        },
    ];
</script>

<Accordion single title="Generate protected file token">
    <div class="content m-b-base">
        <p>
            Generates a <strong>short-lived file token</strong> for accessing
            <strong>protected file(s)</strong>.
        </p>
        <p>
            The client must be superuser or auth record authenticated (aka. have regular authorization token
            sent with the request).
        </p>
    </div>

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/files/token</div>
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
