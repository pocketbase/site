<script>
    import Toggler from "@/components/Toggler.svelte";
    import Searchbar from "@/components/Searchbar.svelte";

    export let compact = false;
</script>

<header class="page-header">
    <div class="wrapper wrapper-lg">
        <div class="header-section left">
            <a href="/" class="logo" class:logo-sm={compact} data-sveltekit-preload-data>
                <img src="/images/logo.svg" alt="PocketBase logo" width="40" height="40" />
                <span class="txt">Pocket<strong>Base</strong></span>
                <span class="version">{import.meta.env.PB_VERSION}</span>
            </a>
        </div>

        <div class="header-section center">
            <Searchbar />
        </div>

        <div class="header-section right">
            <button type="button" class="btn btn-circle btn-secondary responsive-menu-btn" title="Menu">
                <span />
                <i class="ri-menu-3-fill" />
                <Toggler class="dropdown dropdown-lg dropdown-right dropdown-nowrap responsive-menu-dropdown">
                    <a href="/faq" class="dropdown-item" data-sveltekit-preload-data>FAQ</a>
                    <a
                        href={import.meta.env.PB_DISCUSSIONS_URL}
                        class="dropdown-item"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Discussions
                    </a>
                    <hr />
                    <a href="/docs" class="dropdown-item" data-sveltekit-preload-data>
                        <span class="txt">Documentation</span>
                    </a>
                </Toggler>
            </button>

            <nav class="main-menu">
                <a href="/faq" class="btn btn-secondary" data-sveltekit-preload-data>FAQ</a>
                <a
                    href={import.meta.env.PB_REPO_URL}
                    class="btn btn-circle btn-secondary"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="GitHub Repo"
                >
                    <i class="ri-github-line" />
                </a>
                <a href="/docs" class="btn btn-outline" data-sveltekit-preload-data>
                    <span class="txt">Documentation</span>
                </a>
            </nav>
        </div>
    </div>
</header>
