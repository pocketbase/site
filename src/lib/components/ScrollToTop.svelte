<script>
    let active = false;
    let scrollY = 0;

    $: active = scrollY > 200;

    function scrollToTop() {
        if (document.documentElement) {
            document.documentElement.scrollTop = 0;
        }
    }
</script>

<svelte:window bind:scrollY />

<button
    type="button"
    class="btn btn-circle btn-secondary scroll-to-top"
    class:scroll-top-active={active}
    arial-label="Go to top"
    on:click={scrollToTop}
>
    <i class="ri-arrow-up-line" />
</button>

<style>
    .scroll-to-top {
        position: fixed;
        z-index: 99;
        left: auto;
        top: auto;
        bottom: var(--baseSpacing);
        right: var(--baseSpacing);
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: opacity var(--baseAnimationSpeed), visibility var(--baseAnimationSpeed),
            transform var(--baseAnimationSpeed), background var(--baseAnimationSpeed);
    }
    .scroll-top-active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
</style>
