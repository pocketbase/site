<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import List from "./List.svelte";
    import View from "./View.svelte";
    import Create from "./Create.svelte";
    import Update from "./Update.svelte";
    import Delete from "./Delete.svelte";
    import Batch from "./Batch.svelte";
    import AuthMethods from "./AuthMethods.svelte";
    import AuthWithPassword from "./AuthWithPassword.svelte";
    import AuthWithOAuth2 from "./AuthWithOAuth2.svelte";
    import AuthWithOTP from "./AuthWithOTP.svelte";
    import AuthRefresh from "./AuthRefresh.svelte";
    import Verification from "./Verification.svelte";
    import PasswordReset from "./PasswordReset.svelte";
    import EmailChange from "./EmailChange.svelte";
    import Impersonate from "./Impersonate.svelte";
</script>

<HeadingLink title="CRUD actions" />
<div class="accordions">
    <List />
    <View />
    <Create />
    <Update />
    <Delete />
    <Batch />
</div>

<HeadingLink title="Auth record actions" />
<div class="accordions">
    <AuthMethods />
    <AuthWithPassword />
    <AuthWithOAuth2 />
    <AuthWithOTP />
    <AuthRefresh />
    <Verification />
    <PasswordReset />
    <EmailChange />
    <Impersonate />
</div>
