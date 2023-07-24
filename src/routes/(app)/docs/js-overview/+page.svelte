<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import Toc from "@/components/Toc.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<Toc />

<HeadingLink title="JavaScript engine" />
<p>
    The prebuilt PocketBase v0.17+ executable comes with embedded ES5 JavaScript engine (<a
        href="https://github.com/dop251/goja"
        target="_blank"
        rel="nopppener noreferrer">goja</a
    >) which enables you to write custom server-side code using plain JavaScript.
</p>
<p>
    You can start by creating <code>*.pb.js</code> file(s) inside a <code>pb_hooks</code>
    directory.
</p>
<CodeBlock
    content={`
        // pb_hooks/main.pb.js

        onModelAfterUpdate((e) => {
            console.log("user updated...", e.model.get("title"))
        }, "users")

        onRecordAuthRequest((e) => {
            console.log(e.record)
            console.log(e.token)
        })
    `}
/>
<p>
    <em>
        The <code>*.pb.js</code> files are loaded per their filename sort order. For convenience, when making
        changes to the files inside <code>pb_hooks</code>, the process will automatically restart/reload
        itself (currently supported only on UNIX based platforms).
    </em>
</p>
<p class="txt-bold">
    The running PocketBase instance is exposed as global <code>$app</code> object (
    <em>
        for all exposed APIs, please refer to the
        <a href="/jsvm/index.html" target="_blank">JS Types reference</a>
    </em>
    ).
</p>
<p>
    For most parts, the JavaScript APIs are derived from <a href="/docs/go-overview">Go</a> with 2 main differences:
</p>
<ul>
    <li>
        Go exported method and field names are converted to camelCase, for example:
        <br />
        <code>app.Dao().FindRecordById("example", "RECOR_ID")</code> becomes
        <code>$app.dao().findRecordById("example", "RECOR_ID")</code>.
    </li>
    <li>Errors are thrown as regular JavaScript exceptions and not returned as Go values.</li>
</ul>

<HeadingLink title="TypeScript declarations and code completion" />
<p>
    While you can't use directly TypeScript (<em>without transpiling it to JS on your own</em>), PocketBase
    comes with builtin <strong>ambient TypeScript declarations</strong> that can help providing information
    and documentation about the available global variables, methods and arguments, code completion, etc. as
    long as your editor has TypeScript LSP support
    <em>(most editors either have it builtin or available as plugin)</em>.
</p>
<p>
    The types declarations are stored in
    <code>pb_data/types.d.ts</code> file. You can point to those declarations using the
    <a
        href="https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-"
        target="_blank"
        rel="noopener">reference tripple-slash directive</a
    >
    at the top of your JS file
    <em class="txt-sm">
        (Usually it will be added automatically when creating new files but some editors may overwrite it or
        provide their own default content, so you may have to add it manually)
    </em>.
</p>
<CodeBlock
    content={`
        /// <reference path="../pb_data/types.d.ts" />

        onAfterBootstrap((e) => {
            console.log("App initialized!")
        })
    `}
/>

<HeadingLink title="Caveats" />

<HeadingLink title="Handlers context" tag="h5" />
<p>
    Each handler function (hook, route, middleware, etc.) is serialized and executed in its own isolated
    context as a separate "program". This means that you don't have access to custom variables and functions
    declared outside of the handler scope. For example, the below code will fail:
</p>
<CodeBlock
    content={`
        const name = "test"

        onAfterBootstrap((e) => {
            console.log(name) // <-- name will be undefined inside the handler
        })
    `}
/>
<p class="txt-hint txt-italic">
    The above isolation context is also the reason why error stack trace line numbers may not be accurate.
</p>
<p>
    One possible workaround for sharing/reusing code across different handlers could be to move and export the
    reusable code portion as local module and load it with <code>require()</code> inside the handler but keep in
    mind that the loaded modules use a shared registry and mutations should be avoided when possible to prevent
    concurrency issues:
</p>
<CodeBlock
    content={`
        onAfterBootstrap((e) => {
            const base = require("/path/to/pb_hooks/base.js")

            console.log(base.name)
        })
    `}
/>

<HeadingLink title="Loading modules" tag="h5" />
<div class="alert alert-danger m-b-sm">
    <div class="icon">
        <i class="ri-alert-line" />
    </div>
    <div class="content">
        <p>
            Please note that the embedded JavaScript engine is not a Node.js or browser environment, meaning
            that modules that relies on APIs like <em>window</em>, <em>fs</em>,
            <em>fetch</em>, <em>buffer</em> or any other runtime specific API not part of the ES5 spec may not
            work!
        </p>
    </div>
</div>
<p>
    You can load modules either by specifying their local filesystem path or by using their name, which will
    automatically search in:
</p>
<ul>
    <li>the current working directory (<em>affects also relative paths</em>)</li>
    <li>any <code>node_modules</code> directory</li>
    <li>any parent <code>node_modules</code> directory, up to the closest <code>package.json</code></li>
</ul>
<p>
    Currently only CommonJS (CJS) modules are supported and can be loaded with
    <code>const x = require(...)</code>.
    <br />
    ECMAScript modules (ESM) can be loaded by first precompiling and transforming your dependencies with a bundler
    like
    <a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">rollup</a>,
    <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a>,
    <a href="https://browserify.org/" target="_blank" rel="noopener noreferrer">browserify</a>, etc.
</p>
<p>A common usage of local modules is for loading shared helpers or configuration parameters, for example:</p>
<CodeBlock
    content={`
        // pb_hooks/config.js
        module.exports = {
            "secret": "..."
        }
    `}
/>
<div class="clearfix m-b-10" />
<CodeBlock
    content={`
        // pb_hooks/main.pb.js
        routerAdd("get", "/hello", (c) => {
            const config = require("/path/to/pb_hooks/config.js");

            console.log(config.secret)

            // do something with the secret...

            return c.string(200, "Hello!")
        })
    `}
/>

<HeadingLink title="Performance" tag="h5" />
<p>
    The prebuilt executable comes with a prewarmed pool of 50 JS runtimes, which helps maintaining the
    handlers execution times on par with the Go equivalent code (see
    <a
        href="https://github.com/pocketbase/benchmarks/blob/master/results/hetzner_cax11.md#go-vs-js-route-execution"
        target="blank"
        rel="noopener noreferrer">benchmarks</a
    >). You can adjust the pool size manually with the <code>--hooksPool=100</code> flag (<em
        >increasing the pool size may improve the performance in high concurrent scenarios but also may
        increase the memory usage</em
    >).
</p>
<p>
    Note that the handlers performance may degrade if you have heavy computational tasks in pure JavaScript
    (eg. encryption, random generators, etc.). For such cases prefer using the exposed <a
        href="/jsvm/index.html"
        target="_blank">Go bindings</a
    >
    (eg. <code>$security.randomString(10)</code>).
</p>

<HeadingLink title="Engine limitations" tag="h5" />
<p>
    We inherit some of the limitations and caveats of the embedded JavaScript engine
    <!-- prettier-ignore -->
    (<a href="https://github.com/dop251/goja" target="_blank" rel="nopppener noreferrer">goja</a>):
</p>
<ul>
    <li>Has most of ES6 functionality already implemented but it is not fully spec compliant yet.</li>
    <li>
        No concurrent execution inside a single handler (aka. no <code>setTimeout</code>/<code
            >setInterval</code
        >).
    </li>
    <li>
        Wrapped Go structural types (such as maps, slices) comes with some peculiarities and do not behave the
        exact same way as native ECMAScript values (for more details see
        <a
            href="https://pkg.go.dev/github.com/dop251/goja#Runtime.ToValue"
            target="blank"
            rel="noreferrer noopener">goja ToValue</a
        >).
    </li>
    <li>
        In relation to the above, DB <code>json</code> field values require the use of <code>get()</code> and
        <code>set()</code> helpers (<em>this may change in the future</em>).
    </li>
</ul>