<script>
    import CommonHelper from "@/utils/CommonHelper";

    let showAlert = true;
    let copyTimeouts = {};

    function copy(val) {
        if (copyTimeouts[val]) {
            clearTimeout(copyTimeouts[val]);
        }

        CommonHelper.copyToClipboard(val);

        copyTimeouts[val] = setTimeout(() => {
            if (copyTimeouts && copyTimeouts[val]) {
                clearTimeout(copyTimeouts[val]);
                delete copyTimeouts[val];
                copyTimeouts = copyTimeouts;
            }
        }, 500);
    }
</script>

<svelte:head>
    <title>Dashboard demo - PocketBase</title>
</svelte:head>

<div class="iframe-wrapper">
    {#if showAlert}
        <div class="alert">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="content txt-center">
                This is a demo of <a href="/">PocketBase</a> admin dashboard. The database resets every hour.
                Realtime data and file upload are disabled.
                <br />
                To login, use
                <div class="inline-flex flex-gap-0">
                    Email: <strong>test@example.com</strong>
                    <i
                        class="link-hint txt-base {copyTimeouts['test@example.com']
                            ? 'ri-check-double-line'
                            : 'ri-file-copy-line'}"
                        title="Copy to clipboard"
                        on:click={() => copy("test@example.com")}
                    />
                </div>
                and
                <div class="inline-flex flex-gap-0">
                    Password: <strong>123456</strong>
                    <i
                        class="link-hint txt-base {copyTimeouts['123456']
                            ? 'ri-check-double-line'
                            : 'ri-file-copy-line'}"
                        title="Copy to clipboard"
                        on:click={() => copy("123456")}
                    />
                </div>
            </div>
        </div>
    {/if}

    <iframe
        src="https://pocketbase.io/_/#/login?demoEmail=test@example.com&demoPassword=123456"
        title="Demo dashboard"
        frameborder="0"
    />
</div>

<style>
    .iframe-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
    .alert {
        border-radius: 0;
        margin: 0;
        padding: 5px 15px;
        border-bottom: 1px solid var(--baseAlt2Color);
        font-size: 14px;
        line-height: 18px;
    }
    iframe {
        flex-grow: 1;
        width: 100%;
        display: block;
    }
</style>
