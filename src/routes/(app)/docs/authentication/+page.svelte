<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import Toc from "@/components/Toc.svelte";
    import OAuth2 from "./OAuth2.svelte";
</script>

<p>
    The PocketBase API uses JWT tokens for authentication via the <code>Authorization</code> HTTP header:
    <code>Authorization: TOKEN</code>.
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

<HeadingLink title="OAuth2 integration" />
<OAuth2 />
