<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
</script>

<p>
    By default PocketBase sends realtime events only for Record create/update/delete operations (<em
        >and for the OAuth2 auth redirect</em
    >), but you are free to send custom realtime messages to the connected clients via the
    <a href="/jsvm/functions/_app.subscriptionsBroker.html" target="_blank" rel="noopener noreferrer">
        <code>$app.subscriptionsBroker()</code>
    </a> instance.
</p>
<p>
    <a href="/jsvm/interfaces/subscriptions.Broker.html#clients" target="_blank" rel="noopener noreferrer">
        <code>$app.subscriptionsBroker().clients()</code>
    </a>
    returns all connected
    <a href="/jsvm/interfaces/subscriptions.Client.html" target="_blank" rel="noopener noreferrer">
        <code>subscriptions.Client</code>
    </a>
    indexed by their unique connection id.
</p>
<p>
    The current auth record associated with a client could be accessed through
    <code>client.get("auth")</code>
</p>
<div class="alert alert-info m-t-xs m-b-xs">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Note that a single authenticated user could have more than one active realtime connection (aka.
            multiple clients). This could happen for example when opening the same app in different tabs,
            browsers, devices, etc.
        </p>
    </div>
</div>
<p>
    Below you can find a minimal code sample that sends a JSON payload to all clients subscribed to the
    "example" topic:
</p>
<CodeBlock
    language="javascript"
    content={`
        const message = new SubscriptionMessage({
            name: "example",
            data: JSON.stringify({ ... }),
        });

        // retrieve all clients (clients id indexed map)
        const clients = $app.subscriptionsBroker().clients()

        for (let clientId in clients) {
            if (clients[clientId].hasSubscription("example")) {
                clients[clientId].send(message)
            }
        }
    `}
/>

<p>From the client-side, users can listen to the custom subscription topic by doing something like:</p>
<CodeTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        await pb.realtime.subscribe('example', (e) => {
            console.log(e)
        })
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        await pb.realtime.subscribe('example', (e) {
            print(e)
        })
    `}
/>
