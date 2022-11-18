<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import List from "./List.svelte";
    import View from "./View.svelte";
    import Create from "./Create.svelte";
    import Update from "./Update.svelte";
    import Delete from "./Delete.svelte";
    import AuthMethods from "./AuthMethods.svelte";
    import AuthWithPassword from "./AuthWithPassword.svelte";
    import AuthWithOauth2 from "./AuthWithOAuth2.svelte";
    import AuthRefresh from "./AuthRefresh.svelte";
    import RequestVerification from "./RequestVerification.svelte";
    import ConfirmVerification from "./ConfirmVerification.svelte";
    import RequestPasswordReset from "./RequestPasswordReset.svelte";
    import ConfirmPasswordReset from "./ConfirmPasswordReset.svelte";
    import RequestEmailChange from "./RequestEmailChange.svelte";
    import ConfirmEmailChange from "./ConfirmEmailChange.svelte";
    import ListExternalAuths from "./ListExternalAuths.svelte";
    import UnlinkExternalAuth from "./UnlinkExternalAuth.svelte";
</script>

<HeadingLink title="Crud actions" />
<div class="accordions">
    <List />
    <View />
    <Create />
    <Update />
    <Delete />
</div>

<HeadingLink title="Auth record actions" />
<div class="accordions">
    <AuthMethods />
    <AuthWithPassword />
    <AuthWithOauth2 />
    <AuthRefresh />
    <RequestVerification />
    <ConfirmVerification />
    <RequestPasswordReset />
    <ConfirmPasswordReset />
    <RequestEmailChange />
    <ConfirmEmailChange />
    <ListExternalAuths />
    <UnlinkExternalAuth />
</div>
