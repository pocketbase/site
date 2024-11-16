<script>
    import { page } from "$app/stores";
    import DocsSidebar from "./DocsSidebar.svelte";
    import DocsFooter from "./DocsFooter.svelte";
    import {
        introductionLinks,
        webApiLinks,
        goingToProductionLinks,
        jsLinks,
        goLinks,
        equalPaths,
    } from "./doc_links.js";

    let fullPageTitle = "";
    let pageTitle = "";
    let pagefindTag = "";

    const groups = {
        "": introductionLinks.concat(webApiLinks, goingToProductionLinks),
        "Extend with JavaScript": jsLinks,
        "Extend with Go": goLinks,
    };

    $: if ($page) {
        updateCurrentTitle();
    }

    // the builtin PagefindUI doesn't support OR filters at the moment
    // so as a workaround we create 3 different sets with the possible combinations (the "all" sets must unclude all other tags)
    // (https://github.com/CloudCannon/pagefind/issues/594)
    $: if ($page.url.pathname?.includes("/js-")) {
        pagefindTag = "tag[data-tag-javascript],tag[data-tag-other]";
    } else if ($page.url.pathname?.includes("/go-")) {
        pagefindTag = "tag[data-tag-go],tag[data-tag-other]";
    } else {
        pagefindTag = "tag[data-tag-javascript],tag[data-tag-go],tag[data-tag-other]";
    }

    function updateCurrentTitle() {
        for (const groupTitle in groups) {
            const links = groups[groupTitle];
            for (const link of links) {
                let match = [];

                if (equalPaths(link.href, $page.url.pathname)) {
                    match = [groupTitle, link.title].filter(Boolean);
                }

                for (let child of link?.children || []) {
                    if (equalPaths(child.href, $page.url.pathname)) {
                        match = [groupTitle, link.title, child.title].filter(Boolean);
                        break;
                    }
                }

                if (match.length) {
                    fullPageTitle = match.join(" - ");
                    pageTitle = match[match.length - 1];
                    return;
                }
            }
        }
    }
</script>

<svelte:head>
    <title>{fullPageTitle} - Docs - PocketBase</title>
</svelte:head>

<DocsSidebar />

<div class="page-content">
    <nav class="breadcrumbs">
        {#if fullPageTitle}
            <div class="breadcrumb-item">{fullPageTitle}</div>
        {/if}
    </nav>

    <div
        class="content"
        data-pagefind-body
        data-tag-javascript="javascript"
        data-tag-go="go"
        data-tag-other="other"
        data-pagefind-filter={pagefindTag}
    >
        <span class="hidden" data-pagefind-meta="title">{pageTitle}</span>

        <slot />
    </div>

    <DocsFooter />
</div>
