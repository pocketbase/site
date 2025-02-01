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
                  "status": 200,
                  "body": {
                    "collectionId": "a98f514eb05f454",
                    "collectionName": "demo",
                    "id": "ae40239d2bc4477",
                    "updated": "2022-06-25 11:03:50.052",
                    "created": "2022-06-25 11:03:35.163",
                    "title": "test1",
                    "document": "file_a98f51.txt"
                  }
                },
                {
                  "status": 200,
                  "body": {
                    "collectionId": "a98f514eb05f454",
                    "collectionName": "demo",
                    "id": "31y1gc447bc9602",
                    "updated": "2022-06-25 11:03:50.052",
                    "created": "2022-06-25 11:03:35.163",
                    "title": "test2",
                    "document": "file_f514eb0.txt"
                  }
                },
              ]
            `,
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Batch transaction failed.",
                  "data": {
                    "requests": {
                      "1": {
                        "code": "batch_request_failed",
                        "message": "Batch request failed.",
                        "response": {
                          "status": 400,
                          "message": "Failed to create record.",
                          "data": {
                            "title": {
                              "code": "validation_min_text_constraint",
                              "message": "Must be at least 3 character(s).",
                              "params": { "min": 3 }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "Batch requests are not allowed.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="Batch create/update/upsert/delete records">
    <div class="content m-b-sm">
        <p>Batch and transactional create/update/upsert/delete of multiple records in a single request.</p>
    </div>

    <div class="alert alert-warning">
        <div class="icon">
            <i class="ri-error-warning-line" />
        </div>
        <div class="content">
            <p>
                The batch Web API need to be explicitly enabled and configured from the
                <em>Dashboard > Settings > Application</em>.
            </p>
            <p>
                Because this endpoint process the requests in a single read&write transaction, other queries
                could queue up and it could degrade the performance of your application if not used with
                proper care and configuration (couple recommendations: prefer using the smallest possible max
                processing time limit, avoid large file uploads over slow S3 networks, restrict the body size
                limit to something smaller, etc.).
            </p>
        </div>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            const batch = pb.createBatch();

            batch.collection('example1').create({ ... });
            batch.collection('example2').update('RECORD_ID', { ... });
            batch.collection('example3').delete('RECORD_ID');
            batch.collection('example4').upsert({ ... });

            const result = await batch.send();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            final batch = pb.createBatch();

            batch.collection('example1').create(body: { ... });
            batch.collection('example2').update('RECORD_ID', body: { ... });
            batch.collection('example3').delete('RECORD_ID');
            batch.collection('example4').upsert(body: { ... });

            final result = await batch.send();
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/batch</div>
    </div>

    <div class="section-title">Body Parameters</div>
    <p>
        Body parameters could be sent as <em>application/json</em> or <em>multipart/form-data</em>.
        <br />
        File upload is supported only via <em>multipart/form-data</em> (see below for more details).
    </p>
    <table class="table-compact table-border m-b-base">
        <thead>
            <tr>
                <th>Param</th>
                <th width="80%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td valign="top">
                    <div class="flex txt-nowrap">
                        <span class="label label-success">Required</span>
                        <span>requests</span>
                    </div>
                </td>
                <td>
                    <span class="label">{`Array<Request>`}</span> - List of the requests to process.

                    <p>The supported batch request actions are:</p>
                    <ul>
                        <li>record create - <code>POST /api/collections/{`{collection}`}/records</code></li>
                        <li>
                            record update -
                            <code>PATCH /api/collections/{`{collection}`}/records/{`{id}`}</code>
                        </li>
                        <li>
                            record upsert - <code>PUT /api/collections/{`{collection}`}/records</code>
                            <br />
                            <small class="txt-hint">
                                (the body must have <code class="txt-sm">id</code> field)
                            </small>
                        </li>
                        <li>
                            record delete -
                            <code>DELETE /api/collections/{`{collection}`}/records/{`{id}`}</code>
                        </li>
                    </ul>
                    <p>Each batch Request element have the following properties:</p>
                    <ul>
                        <li><code>url path</code> <em>(could include query parameters)</em></li>
                        <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li>
                        <li>
                            <code>headers</code>
                            <br />
                            <em>
                                (custom per-request <code>Authorization</code> header is not supported at the moment,
                                aka. all batch requests have the same auth state)
                            </em>
                        </li>
                        <li><code>body</code></li>
                    </ul>
                    <p>
                        <strong>NB!</strong> When the batch request is send as
                        <code>multipart/form-data</code>, the regular batch action fields are expected to be
                        submitted as serialized json under the <code>@jsonPayload</code> field and file keys
                        need to follow the pattern <code>requests.N.fileField</code> or
                        <code>requests[N].fileField</code>
                        <em>
                            (this is usually handled transparently by the SDKs when their specific object
                            notation is used)
                        </em>.
                        <br />
                        If you don't use the SDKs or prefer manually to construct the <code>FormData</code>
                        body, then it could look something like:
                        <CodeBlock
                            language="javascript"
                            content={`
                                const formData = new FormData();

                                formData.append("@jsonPayload", JSON.stringify({
                                    requests: [
                                        {
                                            method: "POST",
                                            url: "/api/collections/example/records?expand=user",
                                            body: { title: "test1" },
                                        },
                                        {
                                            method: "PATCH",
                                            url: "/api/collections/example/records/RECORD_ID",
                                            body: { title: "test2" },
                                        },
                                        {
                                            method: "DELETE",
                                            url: "/api/collections/example/records/RECORD_ID",
                                        },
                                    ]
                                }))

                                // file for the first request
                                formData.append("requests.0.document", new File(...))

                                // file for the second request
                                formData.append("requests.1.document", new File(...))
                            `}
                        />
                    </p>
                </td>
            </tr>
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
