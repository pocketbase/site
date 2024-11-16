<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import AuthWithOTPRequestApi from "./AuthWithOTPRequestApi.svelte";
    import AuthWithOTPAuthApi from "./AuthWithOTPAuthApi.svelte";

    const apiTabs = [
        { title: "OTP Request", component: AuthWithOTPRequestApi },
        { title: "OTP Auth", component: AuthWithOTPAuthApi },
    ];

    let activeApiTab = 0;
</script>

<Accordion single title="Auth with OTP">
    <div class="content m-b-sm">
        <p>Authenticate a single auth record with an one-time password (OTP).</p>
        <p>
            Note that when requesting an OTP we return an <code>otpId</code> even if a user with the provided email
            doesn't exist as a very basic enumeration protection.
        </p>
    </div>
    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            // send OTP email to the provided auth record
            const req = await pb.collection('users').requestOTP('test@example.com');

            // ... show a screen/popup to enter the password from the email ...

            // authenticate with the requested OTP id and the email password
            const authData = await pb.collection('users').authWithOTP(req.otpId, "YOUR_OTP");

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
            final req = await pb.collection('users').requestOTP('test@example.com');

            // ... show a screen/popup to enter the password from the email ...

            // authenticate with the requested OTP id and the email password
            final authData = await pb.collection('users').authWithOTP(req.otpId, "YOUR_OTP");

            // after the above you can also access the auth data from the authStore
            print(pb.authStore.isValid);
            print(pb.authStore.token);
            print(pb.authStore.record.id);

            // "logout"
            pb.authStore.clear();
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="tabs">
        <div class="tabs-header compact">
            {#each apiTabs as tab, i}
                <button class="tab-item" class:active={activeApiTab == i} on:click={() => (activeApiTab = i)}>
                    <div class="txt">{tab.title}</div>
                </button>
            {/each}
        </div>
        <div class="tabs-content">
            {#each apiTabs as tab, i}
                <div class="tab-item" class:active={activeApiTab == i}>
                    <svelte:component this={tab.component} />
                </div>
            {/each}
        </div>
    </div>
</Accordion>
