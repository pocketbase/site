<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
</script>

<p>
    By default PocketBase sends realtime events only for Record create/update/delete operations (<em
        >and for the OAuth2 auth redirect</em
    >), but you are free to send custom realtime messages to the connected clients via the
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.SubscriptionsBroker"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.SubscriptionsBroker()</code>
    </a> instance.
</p>
<p>
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/subscriptions#Broker.Clients"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.SubscriptionsBroker().Clients()</code>
    </a>
    returns all connected
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/subscriptions#Client"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>subscriptions.Client</code>
    </a>
    indexed by their unique connection id.
</p>
<p>
    <a
        href="{import.meta.env.PB_GODOC_URL}/tools/subscriptions#Broker.ChunkedClients"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.SubscriptionsBroker().ChunkedClients(size)</code>
    </a>
    is similar but return the result as a chunked slice allowing you to split the iteration across several goroutines
    (usually combined with
    <a href="https://pkg.go.dev/golang.org/x/sync/errgroup" target="_blank" rel="noopener noreferrer">
        <code>errgroup</code>
    </a>
    ).
</p>
<p>
    The current auth record associated with a client could be accessed through
    <code>client.Get(apis.RealtimeClientAuthKey)</code>
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
    language="go"
    content={`
        func notify(app core.App, subscription string, data any) error {
            rawData, err := json.Marshal(data)
            if err != nil {
                return err
            }

            message := subscriptions.Message{
                Name: subscription,
                Data: rawData,
            }

            group := new(errgroup.Group)

            chunks := app.SubscriptionsBroker().ChunkedClients(300)

            for _, chunk := range chunks {
                group.Go(func() error {
                    for _, client := range chunk {
                        if !client.HasSubscription(subscription) {
                            continue
                        }

                        client.Send(message)
                    }

                    return nil
                })
            }

            return group.Wait()
        }

        err := notify(app, "example", map[string]any{"test": 123})
        if err != nil {
            return err
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
