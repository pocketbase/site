<script>
    import { page } from "$app/stores";
    import { baseLinks, jsLinks, goLinks } from "./doc_links.js";

    let prevLink = {};
    let nextLink = {};
    let groups = [baseLinks, jsLinks, goLinks];

    $: if ($page) {
        loadPrevAndNextLinks();
    }

    function trimTrailingSlash(url) {
        return url.endsWith("/") ? url.slice(0, -1) : url;
    }

    function loadPrevAndNextLinks() {
        let currentPath = trimTrailingSlash($page?.url?.pathname || "");

        // reset
        prevLink = {};
        nextLink = {};

        for (const links of groups) {
            for (let i = 0; i < links.length; i++) {
                const item = links[i];

                if (!trimTrailingSlash(item.href).includes(currentPath)) {
                    continue;
                }

                if (i > 0) {
                    prevLink = links[i - 1];
                }

                if (i < links.length - 1) {
                    nextLink = links[i + 1];
                }

                return;
            }
        }
    }
</script>

<div class="docs-footer">
    {#if prevLink?.href}
        <a href={prevLink.href} class="btn btn-secondary btn-prev">
            <i class="ri-arrow-left-line" />
            <span class="txt">Prev: {prevLink.title}</span>
        </a>
    {/if}

    {#if nextLink?.href}
        <a href={nextLink.href} class="btn btn-outline btn-expanded btn-next">
            <span class="txt">Next: {nextLink.title}</span>
            <i class="ri-arrow-right-line" />
        </a>
    {/if}
</div>

<style>
    .docs-footer {
        display: flex;
        width: 100%;
        gap: var(--smSpacing);
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .btn-next {
        margin-left: auto;
    }
    @media only screen and (max-width: 550px) {
        .docs-footer .btn {
            width: 100%;
        }
    }
</style>
