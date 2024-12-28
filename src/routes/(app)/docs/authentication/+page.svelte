<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import Toc from "@/components/Toc.svelte";
    import OAuth2 from "./OAuth2.svelte";
</script>

<Toc />

<HeadingLink title="Overview" />
<p>
    A single client is considered authenticated as long as it sends valid
    <code>Authorization:YOUR_AUTH_TOKEN</code> header with the request.
</p>
<p>
    The PocketBase Web APIs are fully stateless and there are no sessions in the traditional sense (even the
    tokens are not stored in the database).
</p>
<p>
    Because there are no sessions and we don't store the tokens on the server there is also no logout
    endpoint. To "logout" a user you can simply disregard the token from your local state (aka.
    <code>pb.authStore.clear()</code> if you use the SDKs).
</p>
<p>
    The auth token could be generated either through the specific auth collection Web APIs or programmatically
    via Go/JS.
</p>
<p>
    All allowed auth collection methods can be configured individually from the specific auth collection
    options.
</p>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Note that PocketBase admins (aka. <code>_superusers</code>) are similar to the regular auth
            collection records with 2 caveats:
        </p>
        <ul>
            <li>OAuth2 is not supported as auth method for the <code>_superusers</code> collection</li>
            <li>Superusers can access and modify anything (collection API rules are ignored)</li>
        </ul>
    </div>
</div>

<HeadingLink title="Authenticate with password" />
<div class="content m-b-xs">
    <p>
        To authenticate with password you must enable the <em>Identity/Password</em> auth collection option
        <em>
            (see also
            <a href="/docs/api-records/#auth-with-password" target="_blank" class="txt-sm"
                >Web API reference
            </a>
            )
        </em>.
    </p>
    <p>
        The default identity field is the <code>email</code> but you can configure any other unique field like
        "username" (it must have a UNIQUE index).
    </p>
</div>
<!-- prettier-ignore -->
<CodeTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const authData = await pb.collection("users").authWithPassword('test@example.com', '1234567890');

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout" the last authenticated record
        pb.authStore.clear();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        final authData = await pb.collection("users").authWithPassword('test@example.com', '1234567890');

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout" the last authenticated record
        pb.authStore.clear();
    `}
/>

<HeadingLink title="Authenticate with OTP" />
<div class="content m-b-xs">
    <p>
        To authenticate with email code you must enable the <em>One-time password (OTP)</em>
        auth collection option
        <em>
            (see also
            <a href="/docs/api-records/#auth-with-otp" target="_blank" class="txt-sm">Web API reference </a>
            )
        </em>.
    </p>
    <p>
        The usual flow is the user typing manually the received password from their email but you can also
        adjust the default email template from the collection options and add a url containing the OTP and its
        id as query parameters
        <em>
            (you have access to <code>{`{OTP}`}</code> and <code>{`{OTP_ID}`}</code> placeholders)
        </em>.
    </p>
    <p>
        Note that when requesting an OTP we return an <code>otpId</code> even if a user with the provided email
        doesn't exist as a very rudimentary enumeration protection (it doesn't create or send anything).
    </p>
    <p>
        On successful OTP validation, by default the related user email will be automatically marked as
        "verified".
    </p>
</div>
<div class="alert alert-warning m-b-sm">
    <div class="icon">
        <i class="ri-error-warning-line" />
    </div>
    <div class="content">
        <p>
            Keep in mind that OTP as a standalone authentication method could be less secure compared to the
            other methods because the generated password is usually 0-9 digits and there is a risk of it being
            guessed or enumerated (especially when a longer duration time is configured).
        </p>
        <p>
            For security critical applications OTP is recommended to be used in combination with the other
            auth methods and the <a href="#multi-factor-authentication">Multi-factor authentication</a> option.
        </p>
    </div>
</div>
<CodeTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // send OTP email to the provided auth record
        const result = await pb.collection('users').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        const authData = await pb.collection('users').authWithOTP(result.otpId, "YOUR_OTP");

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // send OTP email to the provided auth record
        final result = await pb.collection('users').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        final authData = await pb.collection('users').authWithOTP(result.otpId, "YOUR_OTP");

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}
/>

<HeadingLink title="Authenticate with OAuth2" />
<p>
    You can also authenticate your users with an OAuth2 provider (Google, GitHub, Microsoft, etc.). See the
    section below for example integrations.
</p>
<OAuth2 />

<HeadingLink title="Multi-factor authentication" />
<div class="content m-b-xs">
    <p>PocketBase v0.23+ introduced optional Multi-factor authentication (MFA).</p>
    <p>
        If enabled, it requires the user to authenticate with any 2 different auth methods from above (the
        order doesn't matter).
        <br />
        The expected flow is:
    </p>
    <ol>
        <li>User authenticates with "Auth method A".</li>
        <li>
            On success, a 401 response is sent with <code>{`{"mfaId": "..."}`}</code> as JSON body (the MFA
            "session" is stored in the <code>_mfas</code> system collection).
        </li>
        <li>
            User authenticates with "Auth method B" as usual
            <strong>but adds the <code>mfaId</code> from the previous step as body or query parameter</strong
            >.
        </li>
        <li>On success, a regular auth response is returned, aka. token + auth record data.</li>
    </ol>
    <p>Below is an example for email/password + OTP authentication:</p>
</div>
<CodeTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        try {
          await pb.collection('users').authWithPassword('test@example.com', '1234567890');
        } catch (err) {
          const mfaId = err.response?.mfaId;
          if (!mfaId) {
            throw err; // not mfa -> rethrow
          }

          // the user needs to authenticate again with another auth method, for example OTP
          const result = await pb.collection('users').requestOTP('test@example.com');
          // ... show a modal for users to check their email and to enter the received code ...
          await pb.collection('users').authWithOTP(result.otpId, 'EMAIL_CODE', { 'mfaId': mfaId });
        }
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        try {
          await pb.collection('users').authWithPassword('test@example.com', '1234567890');
        } on ClientException catch (e) {
          final mfaId = e.response['mfaId'];
          if (mfaId == null) {
            throw e; // not mfa -> rethrow
          }

          // the user needs to authenticate again with another auth method, for example OTP
          final result = await pb.collection('users').requestOTP('test@example.com');
          // ... show a modal for users to check their email and to enter the received code ...
          await pb.collection('users').authWithOTP(result.otpId, 'EMAIL_CODE', query: { 'mfaId': mfaId });
        }
    `}
/>

<HeadingLink title="Users impersonation" />
<div class="content m-b-xs">
    <p>
        Superusers have the option to generate tokens and authenticate as anyone else via the
        <a href="/docs/api-records#impersonate">Impersonate endpoint</a>
        .
    </p>
    <p>The generated impersonate auth tokens can have custom duration but are not refreshable!</p>
    <p>
        For convenience the official SDKs creates and returns a standalone client that keeps the token state
        in memory, aka. only for the duration of the impersonate client instance.
    </p>
</div>
<CodeTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // authenticate as superuser
        await pb.collection("_superusers").authWithPassword("test@example.com", "1234567890");

        // impersonate
        // (the custom token duration is in seconds and it is optional)
        const impersonateClient = await pb.collection("users").impersonate("USER_RECORD_ID", 3600)

        // log the impersonate token and user data
        console.log(impersonateClient.authStore.token);
        console.log(impersonateClient.authStore.record);

        // send requests as the impersonated user
        const items = await impersonateClient.collection("example").getFullList();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // authenticate as superuser
        await pb.collection("_superusers").authWithPassword("test@example.com", "1234567890");

        // impersonate
        // (the custom token duration is in seconds and it is optional)
        final impersonateClient = await pb.collection("users").impersonate("USER_RECORD_ID", 3600)

        // log the impersonate token and user data
        print(impersonateClient.authStore.token);
        print(impersonateClient.authStore.record);

        // send requests as the impersonated user
        final items = await impersonateClient.collection("example").getFullList();
    `}
/>

<HeadingLink title="API keys" />
<div class="content m-b-xs">
    <p>
        While PocketBase doesn't have "API keys" in the traditional sense, as a side effect of the support for
        users impersonation, for such cases you can use instead the generated non-refreshable
        <code>_superusers</code> impersonate auth token.
        <br />
        You can generate such token via the above impersonate API or from the
        <em>Dashboard > Collections > _superusers > {`{select superuser}`} > "Impersonate" dropdown option</em
        >:
    </p>
</div>
<img
    src="/images/screenshots/impersonate.png"
    alt="Screenshot of the _superusers impersonate popup"
    class="screenshot"
/>
<div class="alert alert-danger m-t-xs m-b-xs">
    <div class="icon">
        <i class="ri-alert-line"></i>
    </div>
    <div class="content">
        <p>
            Because of the security implications (superusers can execute, access and modify anything), use the
            generated <code>_superusers</code> tokens with extreme care and only for internal
            <strong>server-to-server</strong> communication.
        </p>
        <p>
            To invalidate already issued tokens, you need to change the individual superuser account password
            (or if you want to reset the tokens for all superusers - change the shared auth token secret from
            the <code>_superusers</code> collection options).
        </p>
    </div>
</div>

<HeadingLink title="Auth token verification" />
<p>
    PocketBase doesn't have a dedicated token verification endpoint, but if you want to verify an existing
    auth token from a 3rd party app you can send an
    <a href="/docs/api-records/#auth-refresh">Auth refresh</a>
    call, aka. <code>pb.collection("users").authRefresh()</code>.
</p>
<p>On valid token - it returns a new token with refreshed <code>exp</code> claim and the latest user data.</p>
<p>Otherwise - returns an error response.</p>
<p>
    Note that calling <code>authRefresh</code> doesn't invalidate previously issued tokens and you can safely disregard
    the new one if you don't need it (as mentioned in the beginning - PocketBase doesn't store the tokens on the
    server).
</p>
<p>
    Performance wise, the used <code>HS256</code> algorithm for generating the JWT has very little to no
    impact and it is essentially the same in terms of response time as calling
    <code>getOne("USER_ID")</code>
    <em>
        (see
        <a
            href="https://github.com/pocketbase/benchmarks/blob/master/results/hetzner_cax11.md#user-auth-refresh"
            target="_blank"
            rel="noopener noreferrer"
        >
            benchmarks
        </a>)
    </em>.
</p>
