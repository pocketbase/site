<script>
    import "@/scss/main.scss";
    import PageHeader from "@/components/PageHeader.svelte";
    import PageFooter from "@/components/PageFooter.svelte";
    import ScrollToTop from "@/components/ScrollToTop.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        // manually scroll to the hash element because the dynamically
        // generated content could misplace the original scroll anchor
        let scrollTimeout = setTimeout(() => {
            const anchor = window.location.hash && document.getElementById(window.location.hash.substring(1));
            if (!anchor) {
                return;
            }

            const parentAccordion = anchor.closest(".accordion-header");
            if (parentAccordion) {
                // expand the accordion item
                parentAccordion.click();
            } else {
                anchor.scrollIntoView({ behavior: "auto" });
            }

            document.documentElement.classList.add("smooth-scroll");
        }, 100);

        return () => {
            clearTimeout(scrollTimeout);
        };
    });
</script>

<PageHeader compact />

<main class="wrapper wrapper-lg page-content-wrapper">
    <slot />
</main>

<PageFooter />

<ScrollToTop />
