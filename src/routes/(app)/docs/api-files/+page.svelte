<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Accordion from "@/components/Accordion.svelte";
    import ThumbFormats from "@/components/ThumbFormats.svelte";

    let responseTab = 200;

    const responses = [
        {
            code: 200,
            body: `[file resource]`,
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "Filesystem initialization failure.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        },
    ];
</script>

<p>
    Files are uploaded, updated or deleted via the
    <a href="/docs/api-records">Records API</a>.
</p>

<p>
    The File API is usually used to fetch/downoad a file resource (with support for basic image manipulations,
    like generating thumbs).
</p>

<div class="clearfix m-t-base" />

<div class="accordions">
    <Accordion single>
        <svelte:fragment slot="header">
            <strong>Download / Fetch file</strong>
        </svelte:fragment>

        <div class="content m-b-base">
            <p>Downloads a single file resource (aka. the URL address to the file). Example:</p>
            <CodeBlock
                language="html"
                content={`
                    <img src="http://example.com/api/files/demo/1234abcd/test.png" alt="Test image" />
                `}
            />
        </div>

        <div class="api-route alert alert-info">
            <strong class="label label-primary">GET</strong>
            <!-- prettier-ignore -->
            <div class="content">/api/files/<code>collectionIdOrName</code>/<code>recordId</code>/<code>filename</code></div>
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
                    <td> ID or name of the collection whose record model contains the file resource. </td>
                </tr>
                <tr>
                    <td>recordId</td>
                    <td>
                        <span class="label">String</span>
                    </td>
                    <td>ID of the record model that contains the file resource.</td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td>
                        <span class="label">String</span>
                    </td>
                    <td>Name of the file resource.</td>
                </tr>
            </tbody>
        </table>

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
                <tr>
                    <td valign="top">thumb</td>
                    <td valign="top">
                        <span class="label">String</span>
                    </td>
                    <td valign="top">
                        Get the thumb of the requested file.
                        <ThumbFormats />
                        If the thumb size is not defined in the file schema field options or the file resource
                        is not an image (jpg, png, gif), then the original file resource is returned unmodified.
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
</div>
