<script>
    import "@/scss/main.scss";
    import PageHeader from "@/components/PageHeader.svelte";
    import PageFooter from "@/components/PageFooter.svelte";
    import ScrollToTop from "@/components/ScrollToTop.svelte";
</script>

<PageHeader compact />

<main class="wrapper wrapper-lg page-content-wrapper">
    <slot />
</main>

<PageFooter />

<ScrollToTop />
