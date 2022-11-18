<script>
    import Prism from "prismjs";
    import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
    import "prismjs/components/prism-go.js";
    import "prismjs/components/prism-dart.js";
    import "@/scss/prism_dark.scss";
    import "@/scss/prism_light.scss";

    export let theme = "light";
    export let content = "";
    export let language = "javascript"; // go, javascript, html, css

    let formattedContent = "";

    $: if (typeof Prism !== "undefined" && content) {
        formattedContent = highlight(content);
    }

    function highlight(code) {
        code = typeof code === "string" ? code : "";

        // @see https://prismjs.com/plugins/normalize-whitespace
        code = Prism.plugins.NormalizeWhitespace.normalize(code, {
            "remove-trailing": true,
            "remove-indent": true,
            "left-trim": true,
            "right-trim": true,
        });

        return Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language);
    }
</script>

<div class="code-wrapper {theme === 'dark' ? 'prism-dark' : 'prism-light'}">
    <code>{@html formattedContent}</code>
</div>

<style>
    code {
        display: block;
        width: 100%;
        padding: var(--xsSpacing);
        white-space: pre-wrap;
        word-break: break-word;
    }
    .code-wrapper {
        display: block;
        width: 100%;
    }
    .prism-light code {
        color: var(--txtPrimaryColor);
        background: var(--baseAlt1Color);
    }
    .prism-dark code {
        background: var(--primaryColor);
        color: #fff;
    }
</style>
