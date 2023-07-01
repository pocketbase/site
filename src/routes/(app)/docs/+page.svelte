<div class="alert alert-danger m-b-sm">
    <div class="icon">
        <i class="ri-alert-line" />
    </div>
    <div class="content">
        <p>
            Please keep in mind that PocketBase is still under active development and full backward
            compatibility is not guaranteed before reaching v1.0.0.
        </p>
    </div>
</div>

<p>
    PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions,
    built-in auth management, convenient dashboard UI and simple REST-ish API.
</p>

<p>The easiest way to get started is to download the prebuilt minimal PocketBase app:</p>

<ul>
    <li>
        <div class="inline-flex flex-gap-5">
            <a
                href={import.meta.env.PB_LINUX_URL}
                class="inline-flex flex-gap-5 txt-bold"
                target="_blank"
                rel="noreferrer noopener"
            >
                <i class="ri-qq-fill" />
                <span class="txt">Download {import.meta.env.PB_VERSION} for Linux</span>
            </a>
            <small class="txt-hint">(~{import.meta.env.PB_LINUX_SIZE}MB zip)</small>
        </div>
    </li>
    <li>
        <div class="inline-flex flex-gap-5">
            <a
                href={import.meta.env.PB_WINDOWS_URL}
                class="inline-flex flex-gap-5 txt-bold"
                target="_blank"
                rel="noreferrer noopener"
            >
                <i class="ri-windows-fill" />
                <span class="txt">Download {import.meta.env.PB_VERSION} for Windows</span>
            </a>
            <small class="txt-hint">(~{import.meta.env.PB_WINDOWS_SIZE}MB zip)</small>
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
    <strong>And that's it!</strong> A web server will be started with the following routes:
</p>
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
                - Admin dashboard UI
            </li>
            <li>
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a href="http://127.0.0.1:8090/api/" target="_blank">
                    <code>http://127.0.0.1:8090/api/</code>
                </a>
                - REST API
            </li>
        </ul>
    </div>
</div>
<p>
    The first time, when you access the Admin dashboard UI, it will prompt you to create your first admin
    account (email and pass).
</p>
<p>
    The prebuilt PocketBase executable will automatically create and manage 2 new directories alongside the
    executable:
</p>
<ul>
    <li>
        <code>pb_data</code> - stores your application data, uploaded files, etc. (usually should be added in
        <code>.gitignore</code>).
    </li>
    <li>
        <code>pb_migrations</code> - contains JS migration files with your collection changes (can be safely
        commited in your repository).
        <br />
        <div class="txt-hint m-b-xs">
            You can even write custom migration scripts. For more info check the
            <a href="/docs/go-migrations">JS migrations docs</a>.
        </div>
    </li>
</ul>
<p>
    You could find all available commands and their options by running
    <code>./pocketbase --help</code> or
    <code>./pocketbase [command] --help</code>
</p>
