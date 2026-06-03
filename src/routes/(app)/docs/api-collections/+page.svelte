<script>
    import List from "./List.svelte";
    import View from "./View.svelte";
    import Create from "./Create.svelte";
    import Update from "./Update.svelte";
    import Delete from "./Delete.svelte";
    import Truncate from "./Truncate.svelte";
    import Import from "./Import.svelte";
    import Scaffolds from "./Scaffolds.svelte";
    import DryRunViewQuery from "./DryRunViewQuery.svelte";
    import ListAllOAuth2Providers from "./ListAllOAuth2Providers.svelte";
</script>

<div class="accordions">
    <List />
    <View />
    <Create />
    <Update />
    <Delete />
    <Truncate />
    <Import />
    <Scaffolds />
    <DryRunViewQuery />
    <ListAllOAuth2Providers />
</div>
