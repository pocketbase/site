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
                    href="/demo/"
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
