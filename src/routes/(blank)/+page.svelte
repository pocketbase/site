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
