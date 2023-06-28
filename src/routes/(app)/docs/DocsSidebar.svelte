<script>
    import { onMount, tick } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { codePreferences, setCodePreference, extendGroup } from "@/stores/preferences";
    import { baseLinks, jsLinks, goLinks, hasPath } from "./doc_links.js";
    import NavList from "./NavList.svelte";

    let container;

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
                <NavList items={baseLinks} />

                <div class="clearfix m-t-base" />

                <div class="tabs-header stretched compact">
                    <button
                        type="button"
                        class="tab-item"
                        class:active={extendLang == "go"}
                        on:click={() => {
                            goto(goLinks[0].href);
                        }}
                    >
                        <div class="block">
                            Extend with <br />
                            <span class="txt" class:txt-bold={extendLang == "go"}>Go</span>
                        </div>
                    </button>
                    <button
                        type="button"
                        class="tab-item"
                        class:active={extendLang == "javascript"}
                        on:click={() => {
                            goto(jsLinks[0].href);
                        }}
                    >
                        <div class="block">
                            Extend with <br />
                            <span class="txt" class:txt-bold={extendLang == "javascript"}>JavaScript</span>
                        </div>
                    </button>
                </div>
                <div class="tabs-content">
                    <div class="tab-item" class:active={extendLang == "go"}>
                        <NavList items={goLinks}>
                            <svelte:fragment slot="before">
                                <span class="label label-sm">Go</span>
                            </svelte:fragment>
                        </NavList>
                    </div>
                    <div class="tab-item" class:active={extendLang == "javascript"}>
                        <NavList items={jsLinks}>
                            <svelte:fragment slot="before">
                                <span class="label label-sm">JS</span>
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
