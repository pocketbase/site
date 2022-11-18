<script>
    import CommonHelper from "@/utils/CommonHelper";

    export let title;
    export let tag = "h3";
    export let id = "";

    $: if (!id) {
        id = CommonHelper.slugify(title, "-").toLowerCase();
    }
</script>

<svelte:element this={tag} {id}>
    <a href={id ? "#" + id : null} class="link-primary">
        {title}
    </a>
</svelte:element>
