<script>
    const AMD = "amd";
    const ARM = "arm";

    let architecture = getDefault();

    function changePlatform(newPlatform) {
        architecture = newPlatform || getDefault();
    }

    function getDefault() {
        if (typeof window !== "undefined" && window.UA_ARCHITECTURE) {
            return window.UA_ARCHITECTURE === "arm" ? ARM : AMD;
        }

        return AMD;
    }
</script>

<div class="alert alert-danger m-b-sm">
    <div class="icon">
        <i class="ri-alert-line" />
    </div>
    <div class="content">
        <p>
            Please keep in mind that PocketBase is still under active development and full backward
            compatibility is not guaranteed before reaching v1.0.0. PocketBase is NOT recommended for
            production critical applications yet, unless you are fine with reading the
            <a
                href="{import.meta.env.PB_REPO_URL}/blob/master/CHANGELOG.md"
                class="txt-bold"
                target="_blank"
                rel="noopener noreferrer"
            >
                changelog
            </a>
            and applying some manual migration steps from time to time.
        </p>
    </div>
</div>

<p>
    PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions,
    built-in auth management, convenient dashboard UI and simple REST-ish API. It can be used both as Go
    framework and as standalone application.
</p>

<p>The easiest way to get started is to download the prebuilt minimal PocketBase executable:</p>

<div class="tabs compact tabs-architecture m-b-sm">
    <div class="tabs-header left">
        <button
            type="button"
            class="tab-item"
            class:active={architecture == AMD}
            on:click|preventDefault={() => changePlatform(AMD)}
        >
            x64
        </button>
        <button
            type="button"
            class="tab-item"
            class:active={architecture == ARM}
            on:click|preventDefault={() => changePlatform(ARM)}
        >
            ARM64
        </button>
    </div>
    <div class="tabs-content">
        <div class="tab-item" class:active={architecture == AMD}>
            <ul>
                <li>
                    <div class="inline-flex flex-gap-5">
                        <a
                            href={import.meta.env.PB_LINUX_AMD_URL}
                            class="inline-flex flex-gap-5 txt-bold"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i class="ri-qq-fill" />
                            <span class="txt">Download {import.meta.env.PB_VERSION} for Linux x64</span>
                        </a>
                        <small class="txt-hint">(~{import.meta.env.PB_LINUX_AMD_SIZE}MB zip)</small>
                    </div>
                </li>
                <li>
                    <div class="inline-flex flex-gap-5">
                        <a
                            href={import.meta.env.PB_WINDOWS_AMD_URL}
                            class="inline-flex flex-gap-5 txt-bold"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i class="ri-windows-fill" />
                            <span class="txt">Download {import.meta.env.PB_VERSION} for Windows x64</span>
                        </a>
                        <small class="txt-hint">(~{import.meta.env.PB_WINDOWS_AMD_SIZE}MB zip)</small>
                    </div>
                </li>
                <li>
                    <div class="inline-flex flex-gap-5">
                        <a
                            href={import.meta.env.PB_MAC_AMD_URL}
                            class="inline-flex flex-gap-5 txt-bold"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i class="ri-apple-fill" />
                            <span class="txt">Download {import.meta.env.PB_VERSION} for macOS x64</span>
                        </a>
                        <small class="txt-hint">(~{import.meta.env.PB_MAC_AMD_SIZE}MB zip)</small>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tab-item" class:active={architecture == ARM}>
            <ul>
                <li>
                    <div class="inline-flex flex-gap-5">
                        <a
                            href={import.meta.env.PB_LINUX_ARM_URL}
                            class="inline-flex flex-gap-5 txt-bold"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i class="ri-qq-fill" />
                            <span class="txt">Download {import.meta.env.PB_VERSION} for Linux ARM64</span>
                        </a>
                        <small class="txt-hint">(~{import.meta.env.PB_LINUX_ARM_SIZE}MB zip)</small>
                    </div>
                </li>
                <li>
                    <div class="inline-flex flex-gap-5">
                        <a
                            href={import.meta.env.PB_WINDOWS_ARM_URL}
                            class="inline-flex flex-gap-5 txt-bold"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i class="ri-windows-fill" />
                            <span class="txt">Download {import.meta.env.PB_VERSION} for Windows ARM64</span>
                        </a>
                        <small class="txt-hint">(~{import.meta.env.PB_WINDOWS_ARM_SIZE}MB zip)</small>
                    </div>
                </li>
                <li>
                    <div class="inline-flex flex-gap-5">
                        <a
                            href={import.meta.env.PB_MAC_ARM_URL}
                            class="inline-flex flex-gap-5 txt-bold"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i class="ri-apple-fill" />
                            <span class="txt">Download {import.meta.env.PB_VERSION} for macOS ARM64</span>
                        </a>
                        <small class="txt-hint">(~{import.meta.env.PB_MAC_ARM_SIZE}MB zip)</small>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<p class="txt-sm txt-hint">
    See the
    <a href={import.meta.env.PB_GITHUB_RELEASES_URL} target="_blank" rel="noreferrer noopener">
        GitHub Releases page
    </a>
    for other platforms and more details.
</p>

<hr />

<p>
    Once you've extracted the archive, you could start the application by running
    <code><strong>./pocketbase serve</strong></code> in the extracted directory.
</p>
<p>
    <strong>And that's it!</strong>
    The first time it will generate an installer link that should be automatically opened in the browser to setup
    your first superuser account
    <small class="txt-hint">
        (you can also create the first superuser manually via
        <code>./pocketbase superuser create EMAIL PASS</code>)
    </small>.
</p>
<p>The started web server has the following default routes:</p>
<div class="alert m-t-10 m-b-xs">
    <div class="content">
        <ul>
            <li class="m-b-5">
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a href="http://127.0.0.1:8090" target="_blank">
                    <code>http://127.0.0.1:8090</code>
                </a>
                - if <code>pb_public</code> directory exists, serves the static content from it (html, css, images,
                etc.)
            </li>
            <li class="m-b-5">
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a href="http://127.0.0.1:8090/_/" target="_blank">
                    <code>http://127.0.0.1:8090/_/</code>
                </a>
                - superusers dashboard
            </li>
            <li>
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a href="http://127.0.0.1:8090/api/" target="_blank">
                    <code>http://127.0.0.1:8090/api/</code>
                </a>
                - REST-ish API
            </li>
        </ul>
    </div>
</div>
<p>The prebuilt PocketBase executable will create and manage 2 new directories alongside the executable:</p>
<ul>
    <li>
        <code>pb_data</code> - stores your application data, uploaded files, etc. (usually should be added in
        <code>.gitignore</code>).
    </li>
    <li>
        <code>pb_migrations</code> - contains JS migration files with your collection changes (can be safely
        committed in your repository).
        <br />
        <div class="txt-hint m-b-xs">
            You can even write custom migration scripts. For more info check the
            <a href="/docs/js-migrations">JS migrations docs</a>.
        </div>
    </li>
</ul>
<p>
    You could find all available commands and their options by running
    <code>./pocketbase --help</code> or
    <code>./pocketbase [command] --help</code>
</p>

<style>
    .tabs-architecture .tabs-header .tab-item {
        min-width: 70px;
    }
</style>
