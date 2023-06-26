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
    You can start using it by creating <code>*.pb.js</code> file(s) inside a <code>pb_hooks</code>
    directory, next to your <code>pb_data</code>:
</p>
<CodeBlock
    content={`
        // pb_hooks/main.pb.js

        $app.onModelAfterUpdate("users").add((e) => {
            console.log("user updated...", e.model.get("title"))
        })

        $app.onRecordAuthRequest().add((e) => {
            console.log(e.record)
            console.log(e.token)
        })
    `}
/>

<div class="alert alert-info m-t-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            The <code>*.pb.js</code> files are loaded in their filename sort order. For convenience, when
            making changes to the files inside <code>pb_hooks</code>, the process will automatically
            restart/reload itself (<em>currently supported only on UNIX based platforms</em>).
        </p>
    </div>
</div>

<p>
    For most parts, the JavaScript APIs are derived from <a href="/docs/go-overview">Go</a> with 2 main differences:
</p>
<ul>
    <li>
        Go method and field names are converted to camelCase, for example:
        <br />
        <code>app.Dao().FindRecordById("example", "RECOR_ID")</code> becomes
        <code>$app.dao().findRecordById("example", "RECOR_ID")</code>.
    </li>
    <li>Errors are thrown as regular JavaScript exceptions and not returned as Go values.</li>
</ul>
<p>
    The running PocketBase instance is exposed as global <code>$app</code> object (
    <em>
        for all exposed APIs, please refer to the
        <a href="/docs/js-overview#global-namespace">JS Bindings reference</a>
    </em>
    ).
</p>

<HeadingLink title="Loading external modules" />

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
    <li>the current working directory</li>
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
        const config = require("/path/to/pb_hooks/config.js");

        console.log(config.secret)
    `}
/>
