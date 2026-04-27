<script>
    import "@/scss/landing.scss";
    import { onMount, tick } from "svelte";
    import tooltip from "@/actions/tooltip";
    import { codePreferences, setCodePreference } from "@/stores/preferences";
    import CommonHelper from "@/utils/CommonHelper";
    import PageHeader from "@/components/PageHeader.svelte";
    import PageFooter from "@/components/PageFooter.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";

    let leftEye;
    let rightEye;

    let activePreview = "database";

    const sdkBtns = {
        go: "Go",
        javascript: "JavaScript",
        dart: "Dart",
    };

    $: preference = $codePreferences[""]; // the default group preference

    $: previewLanguage = codePreviews?.[activePreview]?.[preference]
        ? preference
        : Object.keys(codePreviews?.[activePreview] || {})[0];

    $: previewContent =
        codePreviews?.[activePreview]?.[preference] || Object.values(codePreviews?.[activePreview] || {})[0];

    const codePreviews = {
        database: {
            javascript: `
                // JavaScript SDK
                import PocketBase from 'pocketbase';

                const pb = new PocketBase('http://127.0.0.1:8090');

                ...

                // list and search for 'example' collection records
                const list = await pb.collection('example').getList(1, 100, {
                    filter: 'title != "" && created > "2022-08-01"',
                    sort: '-created,title',
                });

                // or fetch a single 'example' collection record
                const record = await pb.collection('example').getOne('RECORD_ID');

                // delete a single 'example' collection record
                await pb.collection('example').delete('RECORD_ID');

                // create a new 'example' collection record
                const newRecord = await pb.collection('example').create({
                    title: 'Lorem ipsum dolor sit amet',
                });

                // subscribe to changes in any record from the 'example' collection
                pb.collection('example').subscribe('*', function (e) {
                    console.log(e.record);
                });

                // stop listening for changes in the 'example' collection
                pb.collection('example').unsubscribe();
            `,
            dart: `
                // Dart SDK
                import 'package:pocketbase/pocketbase.dart';

                final pb = PocketBase('http://127.0.0.1:8090');

                ...

                // list and search for 'example' collection records
                final list = await pb.collection('example').getList(
                    page: 1,
                    perPage: 100,
                    filter: 'title != "" && created > "2022-08-01"',
                    sort: '-created,title',
                );

                // or fetch a single 'example' collection record
                final record = await pb.collection('example').getOne('RECORD_ID');

                // delete a single 'example' collection record
                await pb.collection('example').delete('RECORD_ID');

                // create a new 'example' collection record
                final newRecord = await pb.collection('example').create(body: {
                    'title': 'Lorem ipsum dolor sit amet',
                });

                // subscribe to changes in any record from the 'example' collection
                pb.collection('example').subscribe('*', (e) => print(e.record));

                // stop listening for changes in the 'example' collection
                pb.collection('example').unsubscribe();
            `,
        },
        authentication: {
            javascript: `
                // JavaScript SDK
                import PocketBase from 'pocketbase';

                const pb = new PocketBase('http://127.0.0.1:8090');

                ...

                // sign-up with username/email and password
                await pb.collection('users').create({
                    email:           'test@example.com',
                    password:        '123456',
                    passwordConfirm: '123456',
                    name:            'John Doe',
                });

                // sign-in with username/email and password
                await pb.collection('users').authWithPassword('test@example.com', '123456');

                // sign-in/sign-up with OAuth2 (Google, Facebook, etc.)
                await pb.collection('users').authWithOAuth2({
                    provider: 'google',
                });

                // send verification email
                await pb.collection('users').requestVerification('test@example.com');

                // send password reset email
                await pb.collection('users').requestPasswordReset('test@example.com');

                // send request email change email
                await pb.collection('users').requestEmailChange('new@example.com');
            `,
            dart: `
                // Dart SDK
                import 'package:pocketbase/pocketbase.dart';

                final pb = PocketBase('http://127.0.0.1:8090');

                ...

                // sign-up with username/email and password
                await pb.collection('users').create(body: {
                    'email':           'test@example.com',
                    'password':        '123456',
                    'passwordConfirm': '123456',
                    'name':            'John Doe',
                });

                // sign-in with username/email and password
                await pb.collection('users').authWithPassword('test@example.com', '123456');

                // sign-in/sign-up with OAuth2 (Google, Facebook, etc.)
                await pb.collection('users').authWithOAuth2('google', (url) async {
                    // e.g. await launchUrl(url);
                });

                // send verification email
                await pb.collection('users').requestVerification('test@example.com');

                // send password reset email
                await pb.collection('users').requestPasswordReset('test@example.com');

                // send request email change email
                await pb.collection('users').requestEmailChange('new@example.com');
            `,
        },
        storage: {
            javascript: `
                // JavaScript SDK
                import PocketBase from 'pocketbase';

                const pb = new PocketBase('http://127.0.0.1:8090');

                ...

                // create a new record and upload multiple files
                // (FormData as body also works)
                const record = await pb.collection('example').create({
                    title: 'Hello world!', // regular text field
                    yourFileField: [
                        new File(['example content 1...'], 'file1.txt'),
                        new File(['example content 2...'], 'file2.txt'),
                    ]
                });

                // delete all 'yourFileField' files from the record
                await pb.collection('example').update(record.id, {
                    yourFileField: null,
                });
            `,
            dart: `
                // Dart SDK
                import 'package:pocketbase/pocketbase.dart';
                import 'package:http/http.dart' as http;

                final pb = PocketBase('http://127.0.0.1:8090');

                ...

                // create a new record and upload multiple files
                final record = await pb.collection('example').create(
                    body: {
                        'title': 'Hello world!', // regular text field
                    },
                    files: [
                        http.MultipartFile.fromString(
                            'yourFileField[0]',
                            'example content 1...',
                            filename: 'file1.txt',
                        ),
                        http.MultipartFile.fromString(
                            'yourFileField[1]',
                            'example content 2...',
                            filename: 'file2.txt',
                        ),
                    ],
                );

                // delete all 'yourFileField' files from the record
                await pb.collection('example').update(record.id, body: {
                    'yourFileField': null,
                });
            `,
        },
        extend: {
            javascript: `
                // pb_hooks/main.pb.js

                // intercept requests
                onRecordUpdateRequest((e) => {
                    console.log(e.record.id)

                    e.next();
                })

                // intercept system emails
                onMailerRecordVerificationSend((e) => {
                    // send custom email
                    e.mailClient.send(...)
                })

                // register custom routes
                routerAdd(
                    "get",
                    "/hello",
                    (e) => {
                        return e.string(200, "Hello!")
                    },
                    $apis.requireSuperuserAuth()
                )

                // jobs scheduling
                cronAdd("hello", "*/2 * * * *", () => {
                    // prints "Hello!" every 2 minutes
                    console.log("Hello!")
                })
            `,
            go: `
                // main.go

                // intercept requests
                app.OnRecordUpdateRequest().BindFunc(func(e *core.RecordRequestEvent) error {
                    log.Println(e.Record.Id)

                    return e.Next()
                })

                // intercept system emails
                app.OnMailerRecordVerificationSend().BindFunc(func(
                    e *core.MailerRecordEvent,
                ) error {
                    // send custom email
                    return e.MailClient.Send(...)
                })

                // register custom routes
                app.OnServe().BindFunc(func(se *core.ServeEvent) error {
                    se.Router.GET("/hello", func(e *core.RequestEvent) error {
                        return e.String(http.StatusOK, "Hello!")
                    }).Bind(apis.RequireSuperuserAuth())

                    return se.Next()
                })

                // jobs scheduling
                app.Cron().MustAdd("hello", "*/2 * * * *", func() {
                    // prints "Hello!" every 2 minutes
                    log.Println("Hello!")
                })
            `,
        },
    };

    function onMousemove(e) {
        if (!leftEye || !rightEye || !e) {
            return;
        }

        const leftRect = leftEye.getBoundingClientRect();

        // calc the radius of one of the eye (they are the same size)
        const leftX = leftRect.left + window.scrollX + leftRect.width / 2;
        const leftY = leftRect.top + window.scrollY + leftRect.height / 2;
        const rad = Math.atan2(e.pageX - leftX, e.pageY - leftY);
        const rot = rad * (180 / Math.PI) * -1 + 180;

        leftEye.style.transform = "rotate(" + rot + "deg)";
        rightEye.style.transform = "rotate(" + rot + "deg)";
    }

    onMount(() => {
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");
    });
</script>

<svelte:head>
    <title>PocketBase - Open Source backend in 1 file</title>
</svelte:head>

<svelte:window on:mousemove={onMousemove} />

<div class="landing-hero" data-wave-pattern-credits="https://www.freepik.com/author/garrykillian">
    <PageHeader />

    <div class="wrapper wrapper-lg">
        <div class="hero-content">
            <div class="content-row">Open Source backend</div>
            <div class="content-row highlight">
                <strong>in 1 file</strong>
            </div>
        </div>

        <div class="hero-checks">
            <div class="check-item">
                <i class="ri-check-line" />
                <span class="txt">Realtime database</span>
            </div>
            <div class="check-item">
                <i class="ri-check-line" />
                <span class="txt">Authentication</span>
            </div>
            <div class="check-item">
                <i class="ri-check-line" />
                <span class="txt">File storage</span>
            </div>
            <div class="check-item">
                <i class="ri-check-line" />
                <span class="txt">Admin dashboard</span>
            </div>
        </div>

        <figure class="hero-preview">
            <div class="gopher-proximity-hover" />

            <div class="gopher">
                <img
                    data-gopher-credits="https://github.com/marcusolsson/gophers"
                    src="data:image/png;base64,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"
                    alt="Gopher"
                    width="69"
                    height="90"
                />
                <div class="eye-socket left">
                    <div bind:this={leftEye} class="eye" />
                </div>
                <div class="eye-socket right">
                    <div bind:this={rightEye} class="eye" />
                </div>
            </div>

            <img
                src="data:image/png;base64,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"
                alt="PocketBase dashboard preview"
                width="1140"
                height="636"
                class="preview"
            />

            <div class="content">
                <a
                    href="https://pocketbase.io/_/"
                    class="btn btn-lg btn-primary btn-expanded"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span class="txt">Live demo</span>
                </a>
                <div class="clearfix m-b-sm" />
                <a href="/docs" class="btn btn-lg btn-outline btn-expanded">
                    <span class="txt">Read the documentation</span>
                </a>
            </div>
        </figure>
    </div>
</div>

<div class="clearfix" />

<div class="wrapper wrapper-lg">
    <section class="landing-section m-t-45">
        <h2 class="landing-title">Ready to use out of the box</h2>

        <div class="features-section">
            <nav class="features-tabs">
                <button
                    type="button"
                    class="tab-item"
                    class:active={activePreview === "database"}
                    on:click={() => (activePreview = "database")}
                >
                    <h4 class="title">
                        <i class="ri-database-2-line" />
                        <span class="txt">Realtime database</span>
                    </h4>
                    <div class="content">
                        <p>
                            Embedded performant database with schema builder, data validations, realtime
                            subscriptions and easy to use REST api.
                        </p>
                    </div>
                </button>
                <button
                    type="button"
                    class="tab-item"
                    class:active={activePreview === "authentication"}
                    on:click={() => (activePreview = "authentication")}
                >
                    <h4 class="title">
                        <i class="ri-group-line" />
                        <span class="txt">Authentication</span>
                    </h4>
                    <div class="content">
                        <p>
                            Manage your app users and handle email/password and OAuth2 sign ups (Google,
                            Facebook, GitHub, GitLab) without the hassle.
                        </p>
                    </div>
                </button>
                <button
                    type="button"
                    class="tab-item"
                    class:active={activePreview === "storage"}
                    on:click={() => (activePreview = "storage")}
                >
                    <h4 class="title">
                        <i class="ri-hard-drive-2-line" />
                        <span class="txt">File storage</span>
                    </h4>
                    <div class="content">
                        <p>
                            Safely store files locally or in a S3 storage. Easily attach media to your
                            database records and generate thumbs on the fly.
                        </p>
                    </div>
                </button>
                <button
                    type="button"
                    class="tab-item"
                    class:active={activePreview === "extend"}
                    on:click={() => (activePreview = "extend")}
                >
                    <h4 class="title">
                        <i class="ri-terminal-line" />
                        <span class="txt">Extendable</span>
                    </h4>
                    <div class="content">
                        <p>
                            Use as a standalone app OR as a framework, that you can extend via Go and
                            JavaScript hooks to create your own custom portable backend.
                        </p>
                    </div>
                </button>
                <a href="/docs" class="btn btn-secondary btn-lg btn-block btn-next">
                    <span class="txt">Explore all features</span>
                    <i class="ri-arrow-right-line" />
                </a>
            </nav>

            <div class="code-preview">
                <div class="sdk-btns">
                    {#each Object.entries(sdkBtns) as [btnLanguage, btnTitle]}
                        {#if codePreviews?.[activePreview]?.[btnLanguage]}
                            <button
                                type="button"
                                class="
                                    btn btn-sm btn-expanded-sm
                                    {previewLanguage === btnLanguage ? 'btn-primary' : 'btn-hint txt-primary'}
                                "
                                on:click={() => {
                                    setCodePreference(btnLanguage);
                                }}
                            >
                                <span class="txt">{btnTitle}</span>
                            </button>
                        {/if}
                    {/each}
                </div>
                <CodeBlock language={previewLanguage} content={previewContent} />
            </div>
        </div>
    </section>

    <section class="landing-section txt-center">
        <h2 class="landing-title">Integrate nicely with your favorite frontend stack</h2>
        <div class="logos-list">
            <a
                href={import.meta.env.PB_DART_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View Dart SDK"}
            >
                <img src="/images/flutter_logo.svg?v2" alt="Flutter logo" width="40" height="50" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/svelte_logo.svg?v2" alt="Svelte logo" width="41" height="50" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/vue_logo.svg?v2" alt="Vue logo" width="53" height="46" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/react_logo.svg?v2" alt="React logo" width="57" height="51" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/angular_logo.svg?v2" alt="Angular logo" width="47" height="50" />
            </a>
        </div>
    </section>
</div>

<PageFooter />
