<script context="module">
    let holder;

    function getHolder() {
        holder = holder || document.querySelector(".overlays");

        if (!holder) {
            // create
            holder = document.createElement("div");
            holder.classList.add("overlays");
            document.body.appendChild(holder);
        }

        return holder;
    }
</script>

<script>
    /**
     * Example usage:
     * ```html
     * <OverlayPanel bind:active={popupActive} popup={false}>
     *     <h5 slot="header">My title</h5>
     *     <p>Lorem ipsum dolor sit amet...</p>
     *     <svelte:fragment slot="footer">
     *         <button class="btn btn-secondary">Cancel</button>
     *         <button class="btn btn-expanded">Save</button>
     *     </svelte:fragment>
     * </OverlayPanel>
     * ```
     */
    import { onMount, createEventDispatcher, tick } from "svelte";
    import { fade, fly } from "svelte/transition";
    import CommonHelper from "@/utils/CommonHelper";

    let classes = "";
    export { classes as class }; // export reserved keyword

    export let active = false;
    export let popup = false;
    export let overlayClose = true;
    export let btnClose = true;
    export let escClose = true;
    export let beforeOpen = undefined; // function callback called before open; if return false - no open
    export let beforeHide = undefined; // function callback called before hide; if return false - no close

    const dispatch = createEventDispatcher();

    let wrapper;
    let contentPanel;
    let oldFocusedElem;
    let transitionSpeed = 150;
    let contentScrollThrottle;
    let contentScrollClass = "";

    $: onActiveChange(active);

    $: handleContentScroll(contentPanel, true);

    $: if (wrapper) {
        zIndexUpdate();
    }

    export function show() {
        if (typeof beforeOpen === "function" && beforeOpen() === false) {
            return;
        }

        active = true;
    }

    export function hide() {
        if (typeof beforeHide === "function" && beforeHide() === false) {
            return;
        }

        active = false;
    }

    export function isActive() {
        return active;
    }

    async function onActiveChange(state) {
        if (state) {
            oldFocusedElem = document.activeElement;
            wrapper?.focus();
            dispatch("show");
        } else {
            clearTimeout(contentScrollThrottle);
            oldFocusedElem?.focus();
            dispatch("hide");
        }

        await tick();

        zIndexUpdate();
    }

    function zIndexUpdate() {
        if (!wrapper) {
            return;
        }

        if (active) {
            wrapper.style.zIndex = highestZIndex();
        } else {
            wrapper.style = "";
        }
    }

    function highestZIndex() {
        return 1000 + getHolder().querySelectorAll(".overlay-panel-container.active").length;
    }

    function handleEscPress(e) {
        if (
            active &&
            escClose &&
            e.code == "Escape" &&
            !CommonHelper.isInput(e.target) &&
            wrapper &&
            // it is the top most popup
            wrapper.style.zIndex == highestZIndex()
        ) {
            e.preventDefault();
            hide();
        }
    }

    function handleResize(e) {
        if (active) {
            handleContentScroll(contentPanel);
        }
    }

    function handleContentScroll(panel, reset) {
        if (reset) {
            contentScrollClass = "";
        }

        if (!panel) {
            return;
        }

        clearTimeout(contentScrollThrottle);

        contentScrollThrottle = setTimeout(() => {
            if (!panel) {
                return; // deleted during timeout
            }

            let heightDiff = panel.scrollHeight - panel.offsetHeight;
            if (heightDiff > 0) {
                contentScrollClass = "scrollable";
            } else {
                contentScrollClass = "";
                return; // no scroll
            }

            if (panel.scrollTop == 0) {
                contentScrollClass += " scroll-top-reached";
            } else if (panel.scrollTop + panel.offsetHeight == panel.scrollHeight) {
                contentScrollClass += " scroll-bottom-reached";
            }
        }, 100);
    }

    onMount(() => {
        // move outside of its current parent
        getHolder().appendChild(wrapper);

        return () => {
            clearTimeout(contentScrollThrottle);

            // ensures that no artifacts remains
            // (currently there is a bug with svelte transition)
            wrapper?.classList?.add("hidden");
        };
    });
</script>

<svelte:window on:resize={handleResize} on:keydown={handleEscPress} />

<div class="overlay-panel-wrapper" bind:this={wrapper}>
    {#if active}
        <div class="overlay-panel-container" class:padded={popup} class:active>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="overlay"
                on:click|preventDefault={() => (overlayClose ? hide() : true)}
                transition:fade={{ duration: transitionSpeed, opacity: 0 }}
            />

            <div
                class="overlay-panel {classes} {contentScrollClass}"
                class:popup
                in:fly={popup
                    ? { duration: transitionSpeed, y: -10 }
                    : { duration: transitionSpeed, x: 50 }}
                out:fly={popup
                    ? { duration: transitionSpeed, y: 10 }
                    : { duration: transitionSpeed, x: 50 }}
            >
                <div class="overlay-panel-section panel-header">
                    {#if btnClose && !popup}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div
                            class="overlay-close"
                            transition:fly={{ duration: transitionSpeed, x: 30 }}
                            on:click|preventDefault={hide}
                        >
                            <i class="ri-close-line" />
                        </div>
                    {/if}

                    <slot name="header" />

                    {#if btnClose && popup}
                        <button
                            type="button"
                            class="btn btn-sm btn-circle btn-secondary btn-close m-l-auto"
                            on:click|preventDefault={hide}
                        >
                            <i class="ri-close-line txt-lg" />
                        </button>
                    {/if}
                </div>

                <div
                    bind:this={contentPanel}
                    class="overlay-panel-section panel-content"
                    on:scroll={(e) => handleContentScroll(e.target)}
                >
                    <slot />
                </div>

                <div class="overlay-panel-section panel-footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    {/if}
</div>
