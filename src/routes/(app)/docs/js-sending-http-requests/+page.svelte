<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<p>
    You can use the global <code>$http.send(config)</code> helper to send HTTP requests to external services.
    <br />
    This could be used for example to retrieve data from external data sources, to make custom requests to a payment
    provider API, etc.
</p>

<p>Below is a list with all currently supported configurations and their defaults.</p>
<CodeBlock
    language="javascript"
    content={`
        // throws on timeout or network connectivity error
        const res = $http.send({
            url:     "",
            method:  "GET",
            body:    "", // eg. JSON.stringify({"test": 123})
            headers: {"content-type": "application/json"},
            timeout: 120, // in seconds
        })

        console.log(res.headers)    // the response headers (eg. res.headers['X-Custom'][0])
        console.log(res.cookies)    // the response cookies (eg. res.cookies.sessionId.value)
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
        onRecordBeforeCreateRequest((e) => {
            const isbn = e.record.get("isbn");

            // try to find the published date
            try {
                const res = $http.send({
                    url: "https://openlibrary.org/isbn/" + isbn + ".json",
                })

                if (res.statusCode == 200) {
                    e.record.set("published", res.json.publish_date)
                }
            } catch (err) {
                console.log("request failed", err);
            }
        }, "books")
    `}
/>

<p class="m-t-sm">Some implementation caveats:</p>
<ul>
    <li>All requests are processed synchroniously.</li>
    <li>
        <code>multipart/form-data</code> requests are currently not supported
        <em>(this may change in the future depending on the users demand)</em>.
    </li>
</ul>
