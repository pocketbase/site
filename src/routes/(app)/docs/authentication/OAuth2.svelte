<script>
    import tooltip from "@/actions/tooltip";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import { indexExample, redirectExample } from "./oauth2Examples.js";

    const TAB_ALL_IN_ONE = "all_in_one";
    const TAB_MANUAL_CODE = "manual";

    let activeTab = TAB_ALL_IN_ONE;
</script>

<div class="alert alert-info m-t-10 m-b-10">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Before starting, you'll need to create an OAuth2 app in the provider's dashboard in order to get a
            <strong>Client Id</strong> and <strong>Client Secret</strong>, and register a redirect URL
            <i
                class="ri-question-line link-hint"
                use:tooltip={`For the "All in one" flow it should be \nhttps://yourdomain.com/api/oauth2-redirect.` +
                    `\n\n` +
                    `For the "Manual code exchange" flow, the redirect URL is your own custom endpoint.`}
            />.
        </p>
        <p>
            Once you have obtained the <strong>Client Id</strong> and <strong>Client Secret</strong>, you can
            enable and configure the provider from your PocketBase auth collection options (<em class="txt-sm"
                >PocketBase {">"} Collections {">"}
                {"{YOUR_COLLECTION}"}
                {">"} Edit collection (settings cogwheel) {">"} Options
                {">"} OAuth2</em
            >).
        </p>
    </div>
</div>

<div class="tabs">
    <div class="tabs-header compact left">
        <button
            class="tab-item active"
            class:active={activeTab === TAB_ALL_IN_ONE}
            on:click={() => (activeTab = TAB_ALL_IN_ONE)}
        >
            All in one (<em>recommended</em>)
        </button>
        <button
            class="tab-item active"
            class:active={activeTab === TAB_MANUAL_CODE}
            on:click={() => (activeTab = TAB_MANUAL_CODE)}
        >
            Manual code exchange
        </button>
    </div>
    <div class="tabs-content">
        <div class="tab-item" class:active={activeTab === TAB_ALL_IN_ONE}>
            <p>
                This method handles everything within a single call without having to define custom redirects,
                deeplinks or even page reload.
            </p>
            <p>
                <strong>
                    When creating your OAuth2 app, for a callback/redirect URL you have to use the
                    <code class="txt-bold">https://yourdomain.com/api/oauth2-redirect</code>
                </strong>
                (<em>
                    or when testing locally - <code>http://127.0.0.1:8090/api/oauth2-redirect</code>
                </em>).
            </p>

            <div class="clearfix m-b-xs" />
            <!-- prettier-ignore -->
            <CodeTabs
                js={`
                    import PocketBase from 'pocketbase';

                    const pb = new PocketBase('https://pocketbase.io');

                    ...

                    // This method initializes a one-off realtime subscription and will
                    // open a popup window with the OAuth2 vendor page to authenticate.
                    //
                    // Once the external OAuth2 sign-in/sign-up flow is completed, the popup
                    // window will be automatically closed and the OAuth2 data sent back
                    // to the user through the previously established realtime connection.
                    //
                    // If the popup is being blocked on Safari, you can try the suggestion from:
                    // https://github.com/pocketbase/pocketbase/discussions/2429#discussioncomment-5943061.
                    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });

                    // after the above you can also access the auth data from the authStore
                    console.log(pb.authStore.isValid);
                    console.log(pb.authStore.token);
                    console.log(pb.authStore.record.id);

                    // "logout" the last authenticated record
                    pb.authStore.clear();
                `}
                dart={`
                    import 'package:pocketbase/pocketbase.dart';
                    import 'package:url_launcher/url_launcher.dart';

                    final pb = PocketBase('https://pocketbase.io');

                    ...

                    // This method initializes a one-off realtime subscription and will
                    // call the provided urlCallback with the OAuth2 vendor url to authenticate.
                    //
                    // Once the external OAuth2 sign-in/sign-up flow is completed, the browser
                    // window will be automatically closed and the OAuth2 data sent back
                    // to the user through the previously established realtime connection.
                    final authData = await pb.collection('users').authWithOAuth2('google', (url) async {
                      // or use something like flutter_custom_tabs to make the transitions between native and web content more seamless
                      await launchUrl(url);
                    });

                    // after the above you can also access the auth data from the authStore
                    print(pb.authStore.isValid);
                    print(pb.authStore.token);
                    print(pb.authStore.record.id);

                    // "logout" the last authenticated record
                    pb.authStore.clear();
                `}
            />
        </div>
        <div class="tab-item" class:active={activeTab === TAB_MANUAL_CODE}>
            <p>When authenticating manually with OAuth2 code you'll need 2 endpoints:</p>
            <ul>
                <li>somewhere to show the "Login with ..." links</li>
                <li>
                    somewhere to handle the provider's redirect in order to exchange the auth code for token
                </li>
            </ul>
            <p>Here is a simple web example:</p>
            <ol>
                <li class="m-b-xs">
                    <p>
                        <strong>Links page</strong>
                        (e.g. https://127.0.0.1:8090 serving <code>pb_public/index.html</code>):
                    </p>
                    <CodeBlock language="html" content={indexExample} />
                </li>
                <li class="m-b-xs">
                    <p>
                        <strong>Redirect handler page</strong>
                        (e.g. https://127.0.0.1:8090/redirect.html serving
                        <code>pb_public/redirect.html</code>):
                    </p>
                    <CodeBlock language="html" content={redirectExample} />
                </li>
            </ol>

            <div class="alert alert-info m-t-xs">
                <div class="icon">
                    <i class="ri-information-line" />
                </div>
                <div class="content">
                    <p>
                        When using the "Manual code exchange" flow for sign-in with Apple your redirect
                        handler must accept <code>POST</code> requests in order to receive the name and the
                        email of the Apple user. If you just need the Apple user id, you can keep the redirect
                        handler <code>GET</code> but you'll need to replace in the Apple authorization url
                        <code>response_mode=form_post</code> with <code>response_mode=query</code>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
