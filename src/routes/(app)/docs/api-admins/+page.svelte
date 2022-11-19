<script>
    import AuthWithPassword from "./AuthWithPassword.svelte";
    import AuthRefresh from "./AuthRefresh.svelte";
    import RequestPasswordReset from "./RequestPasswordReset.svelte";
    import ConfirmPasswordReset from "./ConfirmPasswordReset.svelte";
    import List from "./List.svelte";
    import View from "./View.svelte";
    import Create from "./Create.svelte";
    import Update from "./Update.svelte";
    import Delete from "./Delete.svelte";
</script>

<div class="accordions">
    <AuthWithPassword />
    <AuthRefresh />
    <RequestPasswordReset />
    <ConfirmPasswordReset />
    <List />
    <View />
    <Create />
    <Update />
    <Delete />
</div>
