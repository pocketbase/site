<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import EmailChangeRequestApi from "./EmailChangeRequestApi.svelte";
    import EmailChangeConfirmApi from "./EmailChangeConfirmApi.svelte";

    const apiTabs = [
        { title: "Request email change", component: EmailChangeRequestApi },
        { title: "Confirm email change", component: EmailChangeConfirmApi },
    ];

    let activeApiTab = 0;
</script>

<Accordion single title="Email change">
    <div class="content m-b-sm">
        <p>Sends auth record email change request.</p>
        <p>
            On successful email change all previously issued auth tokens for the specific record will be
            automatically invalidated.
        </p>
    </div>
    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').authWithPassword('test@example.com', '1234567890');

            await pb.collection('users').requestEmailChange('new@example.com');

            // ---
            // (optional) in your custom confirmation page:
            // ---

            // note: after this call all previously issued auth tokens are invalidated
            await pb.collection('users').confirmEmailChange('EMAIL_CHANGE_TOKEN', 'YOUR_PASSWORD');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').authWithPassword('test@example.com', '1234567890');

            await pb.collection('users').requestEmailChange('new@example.com');

            ...

            // ---
            // (optional) in your custom confirmation page:
            // ---

            // note: after this call all previously issued auth tokens are invalidated
            await pb.collection('users').confirmEmailChange('EMAIL_CHANGE_TOKEN', 'YOUR_PASSWORD');
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
