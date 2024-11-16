<script>
    import { onMount, tick } from "svelte";
    import { page } from "$app/stores";
    import { codePreferences, setCodePreference, extendGroup } from "@/stores/preferences";
    import {
        introductionLinks,
        webApiLinks,
        goingToProductionLinks,
        jsLinks,
        goLinks,
        hasPath,
    } from "./doc_links.js";
    import NavList from "./NavList.svelte";

    $: if ($page) {
        if (hasPath($page.url.pathname, jsLinks)) {
            setCodePreference("javascript", extendGroup);
        } else if (hasPath($page.url.pathname, goLinks)) {
            setCodePreference("go", extendGroup);
        }

        scrollToActive();
    }

    $: extendLang = $codePreferences[extendGroup] || "go";

    async function scrollToActive() {
        if (typeof document === "undefined") {
            return;
        }

        await tick();

        const activeItem = document.querySelector(".sidebar-list .list-item.active");
        if (!activeItem) {
            return;
        }

        if (activeItem.scrollIntoViewIfNeeded) {
            activeItem.scrollIntoViewIfNeeded();
        }
    }

    onMount(() => {
        scrollToActive();
    });
</script>

<aside class="page-sidebar highlight docs-sidebar">
    <div class="sticky-wrapper">
        <div class="sidebar-content">
            <NavList items={introductionLinks.concat(goingToProductionLinks, webApiLinks)} />

            <div class="clearfix m-t-base" />

            <div class="sidebar-bg-section">
                <div class="tabs-header stretched compact">
                    <a class="tab-item" href={goLinks[0].href} class:active={extendLang == "go"}>
                        <div class="block">
                            Extend with
                            <br />
                            <strong>Go</strong>
                        </div>
                    </a>
                    <a class="tab-item" href={jsLinks[0].href} class:active={extendLang == "javascript"}>
                        <div class="block">
                            Extend with
                            <br />
                            <strong>JavaScript</strong>
                        </div>
                    </a>
                </div>
                <div class="tabs-content">
                    <div class="tab-item" class:active={extendLang == "go"}>
                        <NavList items={goLinks}>
                            <svelte:fragment slot="before">
                                <span class="label label-sm label-info">Go</span>
                            </svelte:fragment>
                        </NavList>
                    </div>
                    <div class="tab-item" class:active={extendLang == "javascript"}>
                        <NavList items={jsLinks}>
                            <svelte:fragment slot="before">
                                <span class="label label-sm label-warning">JS</span>
                            </svelte:fragment>
                        </NavList>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>

<style>
    .sticky-wrapper {
        position: sticky;
        top: 30px;
        height: auto;
    }
    .label-sm {
        min-width: 24px;
    }
</style>
