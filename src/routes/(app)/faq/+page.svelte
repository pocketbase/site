<svelte:head>
    <title>FAQ - PocketBase</title>
</svelte:head>

<div class="page-content">
    <nav class="breadcrumbs">
        <div class="breadcrumb-item">FAQ</div>
    </nav>

    <div class="alert p-sm m-b-10">
        <div class="content">
            <h5>1. Do you offer hosting?</h5>
            <p>
                No. PocketBase is self-hosted only.
                <br />
                <strong>
                    If you are looking for a free option, I recommend
                    <a href="https://fly.io/" target="_blank" rel="noreferrer noopener">Fly.io</a>
                    and following the example guide -
                    <a
                        href="https://github.com/pocketbase/pocketbase/discussions/537"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <em>Host for free on Fly.io</em>
                    </a>.
                </strong>
                <br />
                For a more traditional setup you can use any VPS provider that comes with a persistent storage,
                like
                <a href="https://www.hetzner.com/" target="_blank" rel="noreferrer noopener">Hetzner</a>,
                <a href="https://www.vultr.com/" target="_blank" rel="noreferrer noopener">Vultr</a>,
                <a href="https://upcloud.com/" target="_blank" rel="noreferrer noopener">UpCloud</a>,
                <a href="https://www.linode.com/" target="_blank" rel="noreferrer noopener">Linode</a>,
                <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer noopener">DigitalOcean</a>, etc.
                <br />
                The
                <a href="/docs/going-to-production/">Going to production</a> guide contains general information
                how to deploy your PocketBase app and some config recommendations.
            </p>

            <h5>2. Does it scale?</h5>
            <p>
                Only on a single server, aka. vertical. Most of the time, you may not need the complexity of
                managing a fleet of machines and services just to run your backend.
                <br />
                PocketBase is a great choice for small and midsize applications - SaaS, mobile api backend, intranet,
                etc.
                <br />
                <strong>
                    Even without optimizations, PocketBase can easily serve 10 000+ concurrent and persistent
                    realtime connections on a cheap $6 VPS (Hetzner 2vCPU, 4GB RAM).
                </strong>
            </p>

            <h5>3. How to run custom code?</h5>
            <p>
                PocketBase differs from the other similar backend solutions like Firebase, Supabase, Nhost,
                etc. and doesn't support running cloud functions.
                <br />
                <strong>
                    Instead, PocketBase could be used as a Go framework that enables you to build your own
                    custom app specific business logic and still have a single portable executable at the end
                </strong>
                (check <a href="/docs/use-as-framework">Use as framework</a> guide).
            </p>

            <h5>4. Does it support Google or Facebook login?</h5>
            <p>
                Yes. Currently the following OAuth2 providers are supported - Google, Facebook, GitHub, GitLab
                (and more are coming).
            </p>

            <h5>5. Does it come with frontend UI for user login, register, etc. screens?</h5>
            <p>
                No. PocketBase provides only SDKs for client-side integration and you are free to implement
                your own frontend.
                <br />
                For convenience, there are default user facing pages for the user email confirmation links (password
                reset, verification, etc.) but you can also set your own by updating the urls in the Admin UI settings.
            </p>

            <h5>6. Can I use database X?</h5>
            <p>
                PocketBase uses embedded SQLite (in WAL mode) and there are no plans for supporting other
                databases.
                <br />
                <strong>
                    For majority of the queries SQLite (in WAL mode) outperforms traditional databases like
                    MySQL, MariaDB or PostgreSQL (especially for read operations).
                </strong>
                <br />
                Additionally, a great companion app when you need SQLite replicas is
                <a href="https://litestream.io/" target="_blank" rel="noreferrer noopener">Litestream</a>.
            </p>

            <h5>7. Where can I find help for my PocketBase application?</h5>
            <p>
                You could always look for help in our public
                <a href={import.meta.env.PB_DISCUSSIONS_URL} target="_blank" rel="noreferrer noopener"
                    >Discussions board</a
                >,
                <a href={import.meta.env.PB_REPO_URL}>open an issue or feature request</a>
                or contact <em>support at pocketbase.io</em>.
            </p>
        </div>
    </div>
</div>
