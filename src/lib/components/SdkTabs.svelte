<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import { sdk } from "@/stores/preferences";

    let classes = "m-b-base";
    export { classes as class }; // export reserved keyword

    export let js = "";
    export let dart = "";

    $: sdkExamples = [
        {
            title: "JavaScript",
            language: "javascript",
            content: js,
            url: import.meta.env.PB_JS_SDK_URL,
        },
        {
            title: "Dart",
            language: "dart",
            content: dart,
            url: import.meta.env.PB_DART_SDK_URL,
        },
    ];
</script>

<div class="tabs sdk-tabs {classes}">
    <div class="tabs-header compact left">
        {#each sdkExamples as example (example.language)}
            <button
                class="tab-item"
                class:active={$sdk === example.language}
                on:click={() => ($sdk = example.language)}
            >
                <div class="txt">{example.title}</div>
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each sdkExamples as example (example.language)}
            <div class="tab-item" class:active={$sdk === example.language}>
                <CodeBlock language={example.language} content={example.content} />
                <div class="tab-footnote">
                    <em class="txt-sm txt-hint">
                        <a href={example.url} target="_blank" rel="noopener noreferrer">
                            {example.title} SDK
                        </a>
                    </em>
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .sdk-tabs .tabs-header {
        margin-bottom: -2px;
        border: 0;
        .tab-item {
            min-width: 100px;
            &.active {
                background: var(--baseAlt1Color);
                &:after {
                    content: none;
                    display: none;
                }
            }
        }
    }
    .sdk-tabs .tab-item .tab-footnote {
        display: block;
        text-align: right;
        margin-bottom: -10px;
    }
</style>
