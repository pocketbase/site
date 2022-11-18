<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import Toc from "@/components/Toc.svelte";
    import { indexExample, redirectExample } from "./oauth2Examples.js";
</script>

<p>
    The PocketBase API uses JWT tokens for authentication via the <code>Authorization</code> HTTP header:
    <code>Auhtorization: TOKEN</code>.
    <br />
    You can also use the dedicated auth SDK helpers as shown in the examples below.
</p>

<Toc />

<HeadingLink title="Authenticate as admin" />
<p>
    You can authenticate as admin using an email and password.
    <strong>Admins can access everything and API rules don't apply to them.</strong>
</p>
<!-- prettier-ignore -->
<SdkTabs
    class="m-b-sm"
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const authData = await pb.admins.authWithPassword('test@example.com', '1234567890');

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);

        // "logout" the last authenticated account
        pb.authStore.clear();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        final authData = await pb.admins.authWithPassword('test@example.com', '1234567890');

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.model.id);

        // "logout" the last authenticated account
        pb.authStore.clear();
    `}
/>

<HeadingLink title="Authenticate as app user" />
<p>
    The easiest way to authenticate your app users is with their username/email and password.
    <br />
    <em class="txt-hint">
        You can customize the supported authentication options from your Auth collection configuration
        (including disabling all auth options).
    </em>
</p>
<!-- prettier-ignore -->
<SdkTabs
    class="m-b-sm"
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('https://pocketbase.io');

        ...

        const authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);

        // "logout" the last authenticated model
        pb.authStore.clear();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('https://pocketbase.io');

        ...

        final authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.model.id);

        // "logout" the last authenticated model
        pb.authStore.clear();
    `}
/>

<p>
    You can also authenticate your users with an OAuth2 provider (Google, GitHub, Microsoft, etc.). See the
    section below for an example OAuth2 web integration.
</p>

<HeadingLink title="Web OAuth2 integration" />
<div class="alert alert-info m-t-10 m-b-10">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        Before starting, you'll need to create an OAuth2 app in the provider's dashboard in order to get a <strong
            >Client Id</strong
        >
        and <strong>Client Secret</strong>, and register the redirect URL (eg.
        https://127.0.0.1:8090/redirect.html).
        <br />
        Once you have obtained the <strong>Client Id</strong> and <strong>Client Secret</strong>, you can
        enable and configure the provider from your PocketBase admin settings page.
    </div>
</div>
<p>
    In general, when authenticating with OAuth2 you'll need 2 client-side endpoints - one to show the "Login
    with ..." links and another one to handle the provider's redirect in order to exchange the auth code for
    token. Here is a simple web example:
</p>
<ol>
    <li class="m-b-xs">
        <p>
            <strong>Links page</strong>
            (eg. https://127.0.0.1:8090 serving <code>pb_public/index.html</code>):
        </p>
        <CodeBlock language="html" content={indexExample} />
    </li>
    <li class="m-b-xs">
        <p>
            <strong>Redirect handler page</strong>
            (eg. https://127.0.0.1:8090/redirect.html serving
            <code>pb_public/redirect.html</code>):
        </p>
        <CodeBlock language="html" content={redirectExample} />
    </li>
</ol>
