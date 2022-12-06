<script>
    import "@/scss/landing.scss";
    import { onMount, tick } from "svelte";
    import { fly } from "svelte/transition";
    import tooltip from "@/actions/tooltip";
    import { sdk } from "@/stores/preferences";
    import CommonHelper from "@/utils/CommonHelper";
    import PageHeader from "@/components/PageHeader.svelte";
    import PageFooter from "@/components/PageFooter.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";

    let leftEye;
    let rightEye;

    let activePreview = "database";

    const sdkBtns = {
        javascript: "JavaScript",
        dart: "Dart",
    };

    $: previewLanguage = codePreviews?.[activePreview]?.[$sdk]
        ? $sdk
        : Object.keys(codePreviews?.[activePreview] || {})[0];

    $: previewContent =
        codePreviews?.[activePreview]?.[$sdk] || Object.values(codePreviews?.[activePreview] || {})[0];

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
                pb.collection('example').subscribe(function (e) {
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
                pb.collection('example').subscribe((e) => print(e.record));

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
                await pb.collection('users').authWithOAuth2(
                    'google',
                    'YOUR_CODE',
                    'YOUR_CODE_VERIFIER',
                    'YOUR_REDIRECT_URL'
                );

                // send verification email
                await pb.collection('users').requestVerification('test@example.com');

                // send password reset email
                await pb.collection('users').requestPasswordReset('test@example.com');
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
                await pb.collection('users').authWithOAuth2(
                    'google',
                    'YOUR_CODE',
                    'YOUR_CODE_VERIFIER',
                    'YOUR_REDIRECT_URL'
                );

                // send verification email
                await pb.collection('users').requestVerification('test@example.com');

                // send password reset email
                await pb.collection('users').requestPasswordReset('test@example.com');
            `,
        },
        storage: {
            javascript: `
                // JavaScript SDK
                import PocketBase from 'pocketbase';

                const pb = new PocketBase('http://127.0.0.1:8090');

                ...

                // file input (eg. <input type="file" id="fileInput" />)
                const fileInput = document.getElementById('fileInput');

                const formData = new FormData();

                // listen to file input changes
                fileInput.addEventListener('change', function () {
                    for (let file of fileInput.files) {
                        formData.append('yourFileField', file);
                    }
                });

                // set some other regular text field value
                formData.append('title', 'Hello world!');

                ...

                // create a new record and upload the file(s)
                await pb.collection('example').create(formData);

                // delete all 'yourFileField' files from a record
                await pb.collection('example').update('RECORD_ID', {
                    'yourFileField': null,
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
                        'title': 'Hello world!', // some regular text field
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

                // delete all 'yourFileField' files from a record
                await pb.collection('example').update('RECORD_ID', body: {
                    'yourFileField': null,
                });
            `,
        },
        extend: {
            go: `
                // main.go
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                    "github.com/pocketbase/pocketbase/tools/hook"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRecordAfterUpdateRequest().Add(func(e *core.RecordEvent) error {
                        log.Println(e.Record.Id)
                        return nil
                    })

                    app.OnMailerBeforeRecordVerificationSend().Add(func(
                        e *core.MailerRecordEvent,
                    ) error {
                        // send custom email
                        if err := e.MailClient.Send(...); err != nil {
                            return err
                        }
                        return hook.StopPropagation
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
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

    // scroll reveal
    // ---------------------------------------------------------------
    const scrollTolerance = 0;
    const revealDelay = 150;
    let revealElems = [];
    let revealTimers = [];

    loadRevealElems();

    async function loadRevealElems() {
        if (typeof document === "undefined") {
            return;
        }
        await tick();
        clearRevealTimers();
        revealElems = Array.from(document.querySelectorAll(".scroll-reveal:not(.scroll-reached)") || []);
        scrollReveal();
    }

    function scrollReveal() {
        if (revealElems.length <= 0) {
            return;
        }

        let scrollTop = (window.scrollY || window.pageYOffset) << 0;
        let scrollViewport = scrollTop + window.innerHeight + (scrollTop > 0 ? scrollTolerance : 0);
        let toReveal = [];
        for (let i = 0; i < revealElems.length; i++) {
            if (scrollViewport >= revealElems[i].getBoundingClientRect().top + scrollTop) {
                toReveal.push(revealElems[i]);
            }
        }

        for (let i = 0; i < toReveal.length; i++) {
            CommonHelper.removeByValue(revealElems, toReveal[i]);
            revealTimers.push(
                setTimeout(() => {
                    if (toReveal[i]) {
                        toReveal[i]?.classList.add("scroll-reached");
                    }
                }, i * revealDelay)
            );
        }
    }

    function clearRevealTimers() {
        for (let i = revealTimers.length - 1; i >= 0; i--) {
            clearTimeout(revealTimers[i]);
        }
        revealTimers = [];
    }
    // ---

    function handleResize(e) {
        scrollReveal();
    }

    onMount(() => {
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");

        document.addEventListener("scroll", scrollReveal, {
            capture: true,
            passive: true,
        });

        return () => {
            // detach event
            document.removeEventListener("scroll", scrollReveal, {
                capture: true,
                passive: true,
            });
        };
    });
</script>

<svelte:head>
    <title>PocketBase - Open Source backend in 1 file</title>
</svelte:head>

<svelte:window on:mousemove={onMousemove} on:resize={handleResize} />

<div class="landing-hero" data-wave-pattern-credits="https://www.freepik.com/author/garrykillian">
    <PageHeader />

    <div class="wrapper wrapper-lg">
        <div class="hero-content">
            <div class="content-row">Open Source backend</div>
            <div class="content-row responsive-hide">
                for your next <strong>SaaS</strong> and <strong>Mobile app</strong>
            </div>
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
                width="1106"
                height="626"
                class="preview"
            />

            <div class="content">
                <a
                    href="/demo/"
                    class="btn btn-lg btn-primary btn-expanded scroll-reveal"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span class="txt">Live demo</span>
                </a>
                <div class="clearfix m-b-sm" />
                <a href="/docs" class="btn btn-lg btn-outline btn-expanded scroll-reveal">
                    <span class="txt">Read the documentation</span>
                </a>
            </div>
        </figure>
    </div>
</div>

<div class="clearfix" />

<div class="wrapper wrapper-lg">
    <section class="landing-section m-t-45 scroll-reveal">
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
                            Sanely store files locally or in a S3 storage. Easily attach media to your
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
                            Use as a standalone app or as Go framework, that you can extend via hooks to
                            create your own custom portable backend. Provides official client SDKs for
                            painless integration.
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
                                transition:fly={{ duration: 150, x: 5 }}
                                type="button"
                                class="
                                    btn btn-sm btn-expanded-sm
                                    {$sdk === btnLanguage ? 'btn-outline' : 'btn-hint'}
                                "
                                on:click={() => {
                                    $sdk = btnLanguage;
                                }}
                            >
                                <span class="txt">{btnTitle}</span>
                            </button>
                        {/if}
                    {/each}
                </div>
                <CodeBlock theme="dark" language={previewLanguage} content={previewContent} />
            </div>
        </div>
    </section>

    <section class="landing-section txt-center scroll-reveal">
        <h2 class="landing-title">Integrate nicely with your favorite frontend stack</h2>
        <div class="logos-list">
            <a
                href={import.meta.env.PB_DART_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View Dart SDK"}
            >
                <img src="/images/flutter_logo.png?v1" alt="Flutter logo" width="41" height="50" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/svelte_logo.png?v1" alt="Svelte logo" width="42" height="50" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/vue_logo.png?v1" alt="Vue logo" width="53" height="46" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/react_logo.png?v1" alt="React logo" width="58" height="50" />
            </a>
            <a
                href={import.meta.env.PB_JS_SDK_URL}
                target="_blank"
                rel="noreferrer noopener"
                class="list-item"
                use:tooltip={"View JavaScript SDK"}
            >
                <img src="/images/angular_logo.png?v1" alt="Angular logo" width="47" height="50" />
            </a>
        </div>
    </section>
</div>

<PageFooter />
