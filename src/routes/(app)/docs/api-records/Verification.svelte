<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import VerificationRequestApi from "./VerificationRequestApi.svelte";
    import VerificationConfirmApi from "./VerificationConfirmApi.svelte";

    const apiTabs = [
        { title: "Request verification", component: VerificationRequestApi },
        { title: "Confirm verification", component: VerificationConfirmApi },
    ];

    let activeApiTab = 0;
</script>

<Accordion single title="Verification">
    <div class="content m-b-sm">
        <p>Sends auth record email verification request.</p>
    </div>
    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').requestVerification('test@example.com');

            // ---
            // (optional) in your custom confirmation page:
            // ---

            await pb.collection('users').confirmVerification('VERIFICATION_TOKEN');
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection('users').requestVerification('test@example.com');

            // ---
            // (optional) in your custom confirmation page:
            // ---

            await pb.collection('users').confirmVerification('VERIFICATION_TOKEN');
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
