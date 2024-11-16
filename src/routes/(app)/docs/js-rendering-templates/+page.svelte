<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<Toc />

<HeadingLink title="Overview" />
<p>
    A common task when creating custom routes or emails is the need of generating HTML output. To assist with
    this, PocketBase provides the global <code>$template</code> helper for parsing and rendering HTML templates.
</p>
<!-- prettier-ignore -->
<CodeBlock
    language="javascript"
    content={`
        const html = $template.loadFiles(
            ` + "`${__hooks}/views/base.html`" + `,
            ` + "`${__hooks}/views/partial1.html`" + `,
            ` + "`${__hooks}/views/partial2.html`" + `,
        ).render(data)
    `}
/>
<p>
    The general flow when working with composed and nested templates is that you create "base" template(s)
    that defines various placeholders using the
    <code>{`{{template "placeholderName" .}}`}</code> or
    <code>{`{{block "placeholderName" .}}default...{{end}}`}</code> actions.
</p>
<p>
    Then in the partials, you define the content for those placeholders using the
    <code>{`{{define "placeholderName"}}custom...{{end}}`}</code> action.
</p>
<p>
    The dot object (<code class="txt-bold">.</code>) in the above represents the data passed to the templates
    via the <code>render(data)</code> method.
</p>
<p>
    By default the templates apply contextual (HTML, JS, CSS, URI) auto escaping so the generated template
    content should be injection-safe. To render raw/verbatim trusted content in the templates you can use the
    builtin <code>raw</code> function (e.g. <code>{`{{.content|raw}}`}</code>).
</p>

<div class="alert alert-info m-t-10 m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            For more information about the template syntax please refer to the
            <a
                href="https://pkg.go.dev/html/template#hdr-A_fuller_picture"
                target="_blank"
                rel="noopener noreferrer"
            >
                <em>html/template</em>
            </a>
            and
            <a href="https://pkg.go.dev/text/template" target="_blank" rel="noopener noreferrer">
                <em>text/template</em>
            </a>
            package godocs.
            <strong>
                Another great resource is also the Hashicorp's
                <a
                    href="https://developer.hashicorp.com/nomad/tutorials/templates/go-template-syntax"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Go Template Syntax
                </a>
                tutorial.
            </strong>
        </p>
    </div>
</div>

<HeadingLink title="Example HTML page with layout" />
<p>Consider the following app directory structure:</p>
<CodeBlock
    language="html"
    content={`
        myapp/
            pb_hooks/
                views/
                    layout.html
                    hello.html
                main.pb.js
            pocketbase
    `}
/>

<p>We define the content for <code>layout.html</code> as:</p>
<CodeBlock
    language="html"
    content={`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>{{block "title" .}}Default app title{{end}}</title>
        </head>
        <body>
            Header...

            {{block "body" .}}
                Default app body...
            {{end}}

            Footer...
        </body>
        </html>
    `}
/>

<p>We define the content for <code>hello.html</code> as:</p>
<CodeBlock
    language="html"
    content={`
        {{define "title"}}
            Page 1
        {{end}}

        {{define "body"}}
            <p>Hello from {{.name}}</p>
        {{end}}
    `}
/>

<p>Then to output the final page, we'll register a custom <code>/hello/:name</code> route:</p>
<!-- prettier-ignore -->
<CodeBlock
    language="javascript"
    content={`
        routerAdd("get", "/hello/{name}", (e) => {
            const name = e.request.pathValue("name")

            const html = $template.loadFiles(
                ` + "`${__hooks}/views/layout.html`" + `,
                ` + "`${__hooks}/views/hello.html`" + `,
            ).render({
                "name": name,
            })

            return e.html(200, html)
        })
    `}
/>
