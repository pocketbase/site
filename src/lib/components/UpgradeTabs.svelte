<script>
    import CodeBlock from "@/components/CodeBlock.svelte";

    let classes = "m-b-sm";
    export { classes as class }; // export reserved keyword

    export let before;
    export let after;
    export let language = "javascript";

    $: cols = [
        {
            title: "Old",
            language: language,
            content: before,
        },
        {
            title: "New",
            language: language,
            content: after,
        },
    ];
</script>

<div class="grid grid-sm upgrade-grid {classes}">
    {#each cols as col, i}
        <div class="col-lg-6 {i == 0 ? 'col-old' : 'col-new'}">
            <CodeBlock class="" language={col.language} content={col.content} />
        </div>
    {/each}
</div>

<style>
    :global(.upgrade-grid .code-wrapper),
    :global(.upgrade-grid code) {
        height: 100%;
        margin: 0;
    }
    :global(.upgrade-grid .col-old code) {
        background: var(--dangerAltColor) !important;
    }
    :global(.upgrade-grid .col-new code) {
        background: var(--successAltColor) !important;
    }
</style>
