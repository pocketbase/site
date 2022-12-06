<script>
    import { onMount, tick } from "svelte";
    import { page } from "$app/stores";
    import docLinks from "./doc_links.js";

    let container;

    let expandedSections = {
        Basics: true,
        Advanced: true,
    };

    let links = docLinks;

    $: if ($page) {
        links = docLinks; // reasign to refresh the current path checks
        expandCurrentSection();
        scrollToActive();
    }

    function trimTrailingSlash(url) {
        return url.endsWith("/") ? url.slice(0, -1) : url;
    }

    function isCurrentPath(path) {
        return trimTrailingSlash($page.url.pathname) === trimTrailingSlash(path);
    }

    function expandCurrentSection() {
        for (let section of links) {
            for (let link of section.items) {
                if (isCurrentPath(link.href)) {
                    expandedSections[section.title] = true;
                    break;
                }
            }
        }
    }

    async function scrollToActive() {
        if (typeof document === "undefined") {
            return;
        }

        await tick();

        const activeItem = document.querySelector(".sidebar-list .list-item.active");

        if (
            container &&
            activeItem &&
            container.scrollTop + container.clientHeight < activeItem.offsetTop + 30
        ) {
            container.scrollTop = activeItem.offsetTop;
        }
    }

    onMount(() => {
        scrollToActive();
    });
</script>

<aside class="page-sidebar highlight docs-sidebar">
    <div class="sticky-wrapper">
        <div class="absolute-wrapper">
            <div bind:this={container} class="sidebar-content">
                {#each links as section (section.title)}
                    <nav class="sidebar-list">
                        <button
                            type="button"
                            class="sidebar-title link-hint"
                            on:click={() => {
                                expandedSections[section.title] = !expandedSections[section.title];
                            }}
                        >
                            {#if expandedSections[section.title]}
                                <i class="ri-checkbox-indeterminate-line" />
                            {:else}
                                <i class="ri-add-box-line" />
                            {/if}
                            <span class="txt">{section.title}</span>
                        </button>
                        {#if expandedSections[section.title]}
                            <div class="block">
                                {#each section.items as item (item.href + item.title)}
                                    <a
                                        href={item.href}
                                        class="list-item"
                                        class:active={isCurrentPath(item.href)}
                                    >
                                        {item.title}
                                    </a>
                                    {#if item.children && isCurrentPath(item.href)}
                                        {#each item.children as child (child.href + child.title)}
                                            <a
                                                href={child.href}
                                                class="sub-list-item"
                                                class:active={$page?.url?.hash === child.href}
                                            >
                                                {child.title}
                                            </a>
                                        {/each}
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    </nav>
                {/each}
            </div>
        </div>
    </div>
</aside>

<style>
    .sticky-wrapper {
        position: sticky;
        top: 0;
        height: 100%;
        max-height: 100vh;
    }
    .absolute-wrapper {
        position: relative;
        height: 100%;
        max-height: 100vh;
        overflow: auto;
    }
    .absolute-wrapper .sidebar-content {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
