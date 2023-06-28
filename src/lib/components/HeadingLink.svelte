<script>
    import CommonHelper from "@/utils/CommonHelper";

    export let title;
    export let tag = "h3";
    export let id = "";

    let classes = "";
    export { classes as class }; // export reserved keyword

    $: if (!id) {
        id = "h-" + CommonHelper.slugify(title, "-").toLowerCase();
    }
</script>

<svelte:element this={tag} {id} class="heading-link {classes}">
    <a href={id ? "#" + id : null} class="link-primary">
        <slot name="before" />
        {title}
        <slot name="after" />
    </a>
</svelte:element>
