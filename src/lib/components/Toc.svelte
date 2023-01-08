<script>
    import { onMount } from "svelte";
    import TocList from "@/components/TocList.svelte";

    export let contentContainer = undefined;

    export let headingSelector = "h1, h2, h3, h4, h5, h6";

    let tocContainer;

    let links = [];

    $: if (contentContainer || headingSelector) {
        links = extractLinks();
    }

    function extractLinks() {
        contentContainer = contentContainer || tocContainer?.parentElement;
        if (!contentContainer) {
            return [];
        }

        const headings = contentContainer.querySelectorAll(headingSelector);

        let result = [];

        for (const h of headings) {
            if (result[result.length - 1]?.el?.tagName < h.tagName) {
                result[result.length - 1].children.push({
                    el: h,
                    id: h.id,
                    text: h.innerText,
                    children: [],
                });
            } else {
                result.push({
                    el: h,
                    id: h.id,
                    text: h.innerText,
                    children: [],
                });
            }
        }

        return result;
    }

    onMount(() => {
        links = extractLinks();
    });
</script>

<div bind:this={tocContainer} class="toc">
    <TocList {links} />
</div>
