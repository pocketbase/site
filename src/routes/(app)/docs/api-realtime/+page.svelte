<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";

    const pageTitle = "Realtime";

    const responses = [
        {
            code: 204,
            body: "null",
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request.",
                  "data": {
                    "clientId": {
                      "code": "validation_required",
                      "message": "Missing required value."
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
                  "message": "The current and the previous request authorization don't match.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "Missing or invalid client id.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<p>The Realtime API is implemented via Server-Sent Events (SSE). Generally, it consists of 2 operations:</p>
<ol>
    <li>establish SSE connection</li>
    <li>submit client subscriptions</li>
</ol>

<p>
    SSE events are sent for <strong>create</strong>, <strong>update</strong>
    and <strong>delete</strong> record operations.
</p>
<div class="alert alert-info m-t-10 m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            <strong>You could subscribe to a single record or to an entire collection.</strong>
        </p>
        <p>
            When you subscribe to a <strong>single record</strong>, the collection's
            <strong>ViewRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.
        </p>
        <p>
            When you subscribe to an <strong>entire collection</strong>, the collection's
            <strong>ListRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.
        </p>
    </div>
</div>

<div class="accordions m-b-base">
    <Accordion single title="Connect">
        <div class="api-route alert alert-info">
            <strong class="label label-primary">GET</strong>
            <div class="content">/api/realtime</div>
        </div>

        <p>
            Establishes a new SSE connection and immediately sends a <code>PB_CONNECT</code> SSE event with the
            created client ID.
        </p>
        <p class="txt-hint">
            <strong>NB!</strong> The user/superuser authorization happens during the first
            <a href="/docs/api-realtime#set-subscriptions">Set subscriptions</a>
            call.
        </p>
        <p>
            If the connected client doesn't receive any new messages for 5 minutes, the server will send a
            disconnect signal (this is to prevent forgotten/leaked connections). The connection will be
            automatically reestablished if the client is still active (e.g. the browser tab is still open).
        </p>
    </Accordion>

    <Accordion single title="Set subscriptions">
        <div class="api-route alert alert-success">
            <strong class="label label-primary">POST</strong>
            <div class="content">/api/realtime</div>
        </div>

        <div class="content m-b-sm">
            <p>Sets new active client's subscriptions (and auto unsubscribes from the previous ones).</p>
            <p>
                If <code>Authorization</code> header is set, will authorize the client SSE connection with the
                associated user or superuser.
            </p>
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
                            <span>clientId</span>
                        </div>
                    </td>
                    <td>
                        <span class="label">String</span>
                    </td>
                    <td>ID of the SSE client connection.</td>
                </tr>
                <tr>
                    <td>
                        <div class="inline-flex">
                            <span class="label label-warning">Optional</span>
                            <span>subscriptions</span>
                        </div>
                    </td>
                    <td>
                        <span class="label">{"Array<String>"}</span>
                    </td>
                    <td>
                        <p>
                            The new client subscriptions to set in the format:
                            <br />
                            <code>COLLECTION_ID_OR_NAME</code> or
                            <code>COLLECTION_ID_OR_NAME/RECORD_ID</code>.
                        </p>
                        <p>
                            You can also attach optional query and header parameters as serialized json to a
                            single topic using the <code>options</code>
                            query parameter, e.g.:
                            <CodeBlock
                                content={`
                            COLLECTION_ID_OR_NAME/RECORD_ID?options={"query": {"abc": "123"}, "headers": {"x-token": "..."}}
                            `}
                            />
                        </p>
                        <p>Leave empty to unsubscribe from everything.</p>
                    </td>
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
</div>

<p class="txt-bold">
    All of this is seamlessly handled by the SDKs using just the <code>subscribe</code> and
    <code>unsubscribe</code> methods:
</p>
<CodeTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // Subscribe to changes in any record in the collection
        pb.collection('example').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like expand, custom headers, etc. */ });


        // Subscribe to changes only in the specified record
        pb.collection('example').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like expand, custom headers, etc. */ });


        // Unsubscribe
        pb.collection('example').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('example').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('example').unsubscribe(); // remove all subscriptions in the collection
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // Subscribe to changes in any record in the collection
        pb.collection('example').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like expand, custom headers, etc. */);


        // Subscribe to changes only in the specified record
        pb.collection('example').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like expand, custom headers, etc. */);


        // Unsubscribe
        pb.collection('example').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('example').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('example').unsubscribe(); // remove all subscriptions in the collection
    `}
/>
