<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import PasswordResetRequestApi from "./PasswordResetRequestApi.svelte";
    import PasswordResetConfirmApi from "./PasswordResetConfirmApi.svelte";

    const apiTabs = [
        { title: "Request password reset", component: PasswordResetRequestApi },
        { title: "Confirm password reset", component: PasswordResetConfirmApi },
    ];

    let activeApiTab = 0;
</script>

<Accordion single title="Password reset">
    <div class="content m-b-sm">
        <p>Sends auth record password reset email request.</p>
        <p>
            On successful password reset all previously issued auth tokens for the specific record will be
            automatically invalidated.
        </p>
    </div>
    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').requestPasswordReset('test@example.com');

            // ---
            // (optional) in your custom confirmation page:
            // ---

            // note: after this call all previously issued auth tokens are invalidated
            await pb.collection('users').confirmPasswordReset(
                'RESET_TOKEN',
                'NEW_PASSWORD',
                'NEW_PASSWORD_CONFIRM',
            );
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').requestPasswordReset('test@example.com');

            // ---
            // (optional) in your custom confirmation page:
            // ---

            // note: after this call all previously issued auth tokens are invalidated
            await pb.collection('users').confirmPasswordReset(
              'RESET_TOKEN',
              'NEW_PASSWORD',
              'NEW_PASSWORD_CONFIRM',
            );
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
