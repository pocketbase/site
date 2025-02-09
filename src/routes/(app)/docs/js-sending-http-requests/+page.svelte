<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<Toc />

<HeadingLink title="Overview" />
<p>
    You can use the global <code>$http.send(config)</code> helper to send HTTP requests to external services.
    <br />
    This could be used for example to retrieve data from external data sources, to make custom requests to a payment
    provider API, etc.
</p>

<p>Below is a list with all currently supported config options and their defaults.</p>
<CodeBlock
    language="javascript"
    content={`
        // throws on timeout or network connectivity error
        const res = $http.send({
            url:     "",
            method:  "GET",
            body:    "", // ex. JSON.stringify({"test": 123}) or new FormData()
            headers: {}, // ex. {"content-type": "application/json"}
            timeout: 120, // in seconds
        })

        console.log(res.headers)    // the response headers (ex. res.headers['X-Custom'][0])
        console.log(res.cookies)    // the response cookies (ex. res.cookies.sessionId.value)
        console.log(res.statusCode) // the response HTTP status code
        console.log(res.raw)        // the response body as plain text
        console.log(res.json)       // the response body as parsed json array or map
    `}
/>

<p class="m-t-sm">
    Here is an example that will enrich a single book record with some data based on its ISBN details from
    openlibrary.org.
</p>
<CodeBlock
    language="javascript"
    content={`
        onRecordCreateRequest((e) => {
            let isbn = e.record.get("isbn");

            // try to update with the published date from the openlibrary API
            try {
                const res = $http.send({
                    url: "https://openlibrary.org/isbn/" + isbn + ".json",
                    headers: {"content-type": "application/json"}
                })

                if (res.statusCode == 200) {
                    e.record.set("published", res.json.publish_date)
                }
            } catch (err) {
                e.app.logger().error("Failed to retrieve book data", "error", err);
            }

            return e.next()
        }, "books")
    `}
/>

<HeadingLink title="multipart/form-data requests" tag="h5" />
<p>
    In order to send <code>multipart/form-data</code> requests (ex. uploading files) the request
    <code>body</code> must be a <code>FormData</code> instance.
</p>
<p>
    PocketBase JSVM's <code>FormData</code> has the same APIs as its
    <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/FormData"
        target="_blank"
        rel="noopener noreferrer">browser equivalent</a
    >
    with the main difference that for file values instead of <code>Blob</code> it accepts
    <a href="/jsvm/modules/_filesystem.html" target="_blank" rel="noopener noreferrer"
        ><code>$filesystem.File</code></a
    >.
</p>
<CodeBlock
    language="javascript"
    content={`
        const formData = new FormData();

        formData.append("title", "Hello world!")
        formData.append("documents", $filesystem.fileFromBytes("doc1", "doc1.txt"))
        formData.append("documents", $filesystem.fileFromBytes("doc2", "doc2.txt"))

        const res = $http.send({
            url:    "https://...",
            method: "POST",
            body:   formData,
        })

        console.log(res.statusCode)
    `}
/>

<HeadingLink title="Limitations" />
<p>
    As of now there is no support for streamed responses or server-sent events (SSE). The
    <code>$http.send</code> call blocks and returns the entire response body at once.
</p>
<p>
    For this and other more advanced use cases you'll have to
    <a href="/docs/go-overview/">extend PocketBase with Go</a>.
</p>
