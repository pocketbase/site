<script>
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.data.title} - PocketBase</title>
</svelte:head>

<div class="page-content bg-base">
    <nav class="breadcrumbs">
        <div class="breadcrumb-item">{$page.data.title}</div>
    </nav>

    <div class="content">
        <slot />
    </div>
</div>
