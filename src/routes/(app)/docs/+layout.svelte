<script>
    import { page } from "$app/stores";
    import DocsSidebar from "./DocsSidebar.svelte";
    import DocsFooter from "./DocsFooter.svelte";
    import docLinks from "./doc_links.js";

    let pageTitle = "";

    $: if ($page) {
        updateCurrentTitle();
    }

    function trimTrailingSlash(url) {
        return url.endsWith("/") ? url.slice(0, -1) : url;
    }

    function isCurrentPath(path, withHash = false) {
        return (
            trimTrailingSlash($page.url.pathname) + (withHash ? $page.url.hash : "") ==
            trimTrailingSlash(path)
        );
    }

    function updateCurrentTitle() {
        for (let section of docLinks) {
            for (let link of section.items) {
                if (isCurrentPath(link.href)) {
                    pageTitle = section.title + " - " + link.title;
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
        <div class="breadcrumb-item">Docs</div>
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
