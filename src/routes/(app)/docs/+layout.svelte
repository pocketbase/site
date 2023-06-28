<script>
    import { page } from "$app/stores";
    import DocsSidebar from "./DocsSidebar.svelte";
    import DocsFooter from "./DocsFooter.svelte";
    import { baseLinks, jsLinks, goLinks, equalPaths } from "./doc_links.js";

    let pageTitle = "";

    const groups = {
        "": baseLinks,
        "Extend with JavaScript": jsLinks,
        "Extend with Go": goLinks,
    };

    $: if ($page) {
        updateCurrentTitle();
    }

    function updateCurrentTitle() {
        for (const groupTitle in groups) {
            const links = groups[groupTitle];
            for (const link of links) {
                let match = "";

                if (equalPaths(link.href, $page.url.pathname)) {
                    match = [groupTitle, link.title].filter(Boolean).join(" - ");
                }

                for (let child of link?.children || []) {
                    if (equalPaths(child.href, $page.url.pathname)) {
                        match = [groupTitle, link.title, child.title].filter(Boolean).join(" - ");
                        break;
                    }
                }

                if (match) {
                    pageTitle = match;
                    return;
                }
            }
        }
    }
</script>

<svelte:head>
    <title>{pageTitle} - Docs - PocketBase</title>
</svelte:head>

<DocsSidebar />

<div class="page-content">
    <nav class="breadcrumbs">
        {#if pageTitle}
            <div class="breadcrumb-item">{pageTitle}</div>
        {/if}
    </nav>

    <div class="content">
        <slot />
    </div>

    <hr />

    <DocsFooter />
</div>
