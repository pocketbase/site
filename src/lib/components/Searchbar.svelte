<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import CommonHelper from "@/utils/CommonHelper";
    import { codePreferences, extendGroup } from "@/stores/preferences";

    const uniqueId = "pagefind_search" + CommonHelper.randomString(5);

    let searchInput;
    let searchUI;
    let clearBtn;
    let value = "";

    $: hasValue = value != "";

    $: if (hasValue) {
        searchUI?.triggerSearch(value);
    } else {
        clear();
    }

    $: searchLang = $codePreferences[extendGroup] || "go";

    $: if (searchLang) {
        searchUI?.triggerFilters({ tag: [searchLang, "other"] });
    }

    // triggerSearch doesn't works with empty string so we manually
    // "trigger" the original html clear button
    function clear() {
        if (value != "") {
            value = "";
            clearBtn?.click();
        }
    }

    onMount(() => {
        searchUI = new PagefindUI({
            element: "#" + uniqueId,
            pageSize: 15,
            resetStyles: false,
            showSubResults: true,
            showImages: false,
            debounceTimeoutMs: 150,
            ranking: {
                termSimilarity: 20,
            },
        });

        clearBtn = document.querySelector(".pagefind-ui__search-clear");

        return () => {
            searchUI?.destroy();
        };
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div tabindex="-1" class="form-field searchbar" class:filled={hasValue}>
    <div class="form-field-addon prefix">
        <i class="ri-search-line" />
    </div>

    {#if hasValue}
        <div class="form-field-addon suffix">
            <!-- duplicated mousedown-click event to minimize focus flickering -->
            <button
                type="button"
                class="btn btn-secondary btn-hint btn-sm btn-pill btn-clear"
                transition:fly={{ duration: 150, x: 10 }}
                on:mousedown={clear}
                on:click={clear}
            >
                Clear
            </button>
        </div>
    {/if}

    <input bind:this={searchInput} type="text" class="searchbar-input" placeholder="Search..." bind:value />

    <div tabindex="-1" class="dropdown searchbar-dropdown">
        <div class="tabs-header compact">
            <button
                type="button"
                class="tab-item"
                class:active={searchLang == "go"}
                on:click={() => {
                    searchLang = "go";
                }}
            >
                Go
            </button>
            <button
                type="button"
                class="tab-item"
                class:active={searchLang == "javascript"}
                on:click={() => {
                    searchLang = "javascript";
                }}
            >
                JavaScript
            </button>
        </div>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            id={uniqueId}
            on:click={(e) => {
                // workaround for loosing focus since the load button is removed after click
                if (e.target.classList.contains("pagefind-ui__button")) {
                    searchInput?.focus();
                }
            }}
        ></div>
    </div>
</div>
