<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<div class="alert alert-info m-t-sm m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p class="txt-bold">
            The easiest and most efficient way to use PocketBase is by sending requests directly to the server
            from the client-side (browser SPA, mobile apps, etc.).
        </p>
        <p>
            It was designed with this exact use case in mind and it is also the reason why there are
            collection API Rules and general purpose JSON APIs for listing, pagination, sorting, filtering,
            etc.
        </p>
    </div>
</div>

<p>The bellow official SDK clients are available for interacting with the PocketBase Web APIs:</p>
<ul>
    <li>
        <a href={import.meta.env.PB_JS_SDK_URL} class="txt-bold" target="_blank" rel="noreferrer noopener">
            JavaScript SDK
        </a>
        <span class="txt">(browser, Node.js, React Native)</span>
    </li>
    <li>
        <a href={import.meta.env.PB_DART_SDK_URL} class="txt-bold" target="_blank" rel="noreferrer noopener">
            Dart SDK
        </a>
        <span class="txt">(web, mobile, desktop, cli)</span>
    </li>
</ul>
<p>
    You can find more details about the available endpoints, including usage examples, in the
    <a href="/docs/api-records">Web APIs reference</a>
    section but there is also generated documentation for each collection with code samples that you can access
    from the <strong>API Preview</strong> button in the Dashboard.
</p>

<HeadingLink title="JS SSR meta framework caveats" />
<p>
    Using PocketBase with a JS SSR meta framework such as SvelteKit, Nuxt, Next.js, etc. is possible but it
    comes with a lot of caveats and you need to carefully evaluate whether the cost of having another backend
    (PocketBase) along-side your existing one (e.g. the Node.js server) is worth it. You can read more about
    the potential problems in <a
        href="https://github.com/pocketbase/pocketbase/discussions/5313"
        target="_blank"
        rel="noopener noreferrer"
    >
        JS SSR - issues and recommendations #5313
    </a>
    .
</p>

<p>
    If you still want to use PocketBase to handle regular users authentication with a JS SSR meta framework,
    then you can find some JS SDK examples in the repo's
    <a href="https://github.com/pocketbase/js-sdk#ssr-integration" target="_blank" rel="noopener noreferrer">
        JS SSR integration section
    </a>
    .
</p>
<HeadingLink title="!!! Personal opinion:" tag="h6" />
<p>
    Not everyone will agree with this, but if you are building a <strong>web app</strong> with PocketBase I recommend
    developing the frontend as a traditional client-side SPA and for the cases where additional server-side handling
    is needed (e.g. for payment webhooks, extra data server validations, etc.) you could try to:
</p>
<ul>
    <li>
        <a href="/docs/use-as-framework">Use PocketBase as Go/JS framework</a> to create new routes or intercept
        existing.
    </li>
    <li>
        <p>
            Create one-off Node.js/Bun/Deno/etc. server-side actions that will interact with PocketBase only
            as superuser and as pure data store (similar to traditional database interactions but over HTTP).
            In this case it is safe to have a global superuser client such as:
        </p>

        <CodeBlock
            language="javascript"
            content={`
                // src/superuser.js
                import PocketBase from "pocketbase"

                const superuserClient = new PocketBase('https://example.com');

                // disable autocancellation so that we can handle async requests from multiple users
                superuserClient.autoCancellation(false);

                // option 1: authenticate as superuser using email/password (could be filled with ENV params)
                await superuserClient.collection('_superusers').authWithPassword(SUPERUSER_EMAIL, SUPERUSER_PASS, {
                  // This will trigger auto refresh or auto reauthentication in case
                  // the token has expired or is going to expire in the next 30 minutes.
                  autoRefreshThreshold: 30 * 60
                })

                // option 2: OR authenticate as superuser via long-lived "API key"
                // (see https://pocketbase.io/docs/authentication/#api-keys)
                superuserClient.authStore.save('YOUR_GENERATED_SUPERUSER_TOKEN')

                export default superuserClient;
            `}
        />
        <p>Then you can import directly the file in your server-side actions and use the client as usual:</p>
        <CodeBlock
            language="javascript"
            content={`
                import superuserClient from './src/superuser.js'

                async function serverAction(req, resp) {
                  ... do some extra data validations or handling ...

                  // send a create request as superuser
                  await superuserClient.collection('example').create({ ... })
                }
            `}
        />
    </li>
</ul>
