<svelte:head>
    <title>Support us - PocketBase</title>
</svelte:head>

<div class="page-content">
    <nav class="breadcrumbs">
        <div class="breadcrumb-item">Support us</div>
    </nav>

    <div class="wrapper">
        <div class="alert">
            <div class="content">
                <div class="block txt-center m-b-sm">
                    <figure class="logo">
                        <img src="/images/logo.svg" alt="PocketBase logo" width="40" height="40" />
                        <span class="txt">Pocket<strong>Base</strong></span>
                    </figure>
                </div>

                <p>
                    PocketBase is free and Open Source community driven project and there is no company or VC
                    funding behind it.
                </p>

                <p>A lot of time and effort is invested in its design, development, testing and support.</p>

                <p>
                    If you like what we are doing, please consider donating a small amount with PayPal or Open
                    Collective:
                </p>

                <a
                    href={import.meta.env.PB_PAYPAL_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    class="btn btn-lg btn-block btn-outline"
                >
                    <span class="txt">Donate with PayPal</span>
                </a>

                <a
                    href={import.meta.env.PB_OPENCOLLECTIVE_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    class="btn btn-lg btn-block btn-outline m-t-sm"
                >
                    <span class="txt">Donate with Open Collective</span>
                </a>
            </div>
        </div>
        <div class="txt-center txt-sm">
            <h6>
                <strong>Big thanks to Pete LePage and the Chrome Open Collective team!</strong>
                PocketBase was sponsored with <strong>$20,000</strong> as part of the
                <a
                    href="https://developer.chrome.com/blog/advanced-web-apps-fund/"
                    target="_blank"
                    rel="noreferrer noopener">Chrome Advanced Web Apps Fund</a
                >. For more info you could read the
                <a
                    href="https://github.com/pocketbase/pocketbase/discussions/730"
                    target="_blank"
                    rel="noreferrer noopener">official announcement</a
                >.
            </h6>
        </div>
    </div>
</div>

<style>
    .wrapper {
        width: 520px;
    }
    .alert {
        padding: var(--baseSpacing);
        max-width: 100%;
    }
    @media only screen and (max-width: 450px) {
        .alert {
            padding: var(--smSpacing);
            margin: var(--baseSpacing) auto 0;
        }
    }
</style>
