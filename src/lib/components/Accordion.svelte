<script>
    import { onMount, createEventDispatcher } from "svelte";
    import HeadingLink from "@/components/HeadingLink.svelte";

    const dispatch = createEventDispatcher();

    let accordionElem;
    let expandTimeoutId;

    let classes = "";
    export { classes as class }; // export reserved keyword

    export let active = false;
    export let interactive = true;
    export let single = false; // ensures that only one accordion is expanded in its given parent container
    export let title = "Toggle"; // fallback accordion header (it can be replaced with custom formatting by specifying the "header" slot)

    $: if (active) {
        clearTimeout(expandTimeoutId);
        expandTimeoutId = setTimeout(() => {
            if (accordionElem?.scrollIntoViewIfNeeded) {
                accordionElem?.scrollIntoViewIfNeeded();
            } else if (accordionElem?.scrollIntoView) {
                accordionElem?.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                });
            }
        }, 0);
    }

    export function isExpanded() {
        return !!active;
    }

    export function expand() {
        collapseSiblings();
        active = true;
        dispatch("expand");
    }

    export function collapse() {
        active = false;
        clearTimeout(expandTimeoutId);
        dispatch("collapse");
    }

    export function toggle() {
        dispatch("toggle");

        if (active) {
            collapse();
        } else {
            expand();
        }
    }

    export function collapseSiblings() {
        if (single && accordionElem.parentElement) {
            const handlers = accordionElem.parentElement.querySelectorAll(
                ".accordion.active .accordion-header.interactive"
            );
            for (const handler of handlers) {
                handler.click(); // @todo consider more reliable approach
            }
        }
    }

    function keyToggle(e) {
        if (!interactive) {
            return;
        }

        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            toggle();
        }
    }

    onMount(() => {
        return () => clearTimeout(expandTimeoutId);
    });
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
    bind:this={accordionElem}
    tabindex={interactive ? 0 : -1}
    class="accordion {classes}"
    class:active
    on:keydown|self={keyToggle}
>
    <button
        type="button"
        class="accordion-header"
        class:interactive
        on:click|preventDefault={() => interactive && toggle()}
    >
        <slot name="header" {active} {toggle} {expand} {collapse}>
            <HeadingLink {title} tag="strong">
                <svelte:fragment slot="after">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span
                        class="fade link-hint p-l-5"
                        title="Link anchor"
                        on:click|stopPropagation={() => expand()}
                    >
                        #
                    </span>
                </svelte:fragment>
            </HeadingLink>
        </slot>
    </button>

    <!-- note: the accordion content is added to the dom even when not active so that it can be indexed -->
    <div class="accordion-content" class:hidden={!active}>
        <slot />
    </div>
</div>
