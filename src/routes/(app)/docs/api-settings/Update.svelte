<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "meta": {
                    "appName": "Acme",
                    "appUrl": "http://127.0.0.1:8090",
                    "hideControls": false,
                    "senderName": "Support",
                    "senderAddress": "support@example.com",
                    "verificationTemplate": " ... ",
                    "resetPasswordTemplate": " ... ",
                    "confirmEmailChangeTemplate": " ... "
                  },
                  "logs": {
                    "maxDays": 7
                  },
                  "backups": {
                    "cron": "0 0 * * *",
                    "cronMaxKeep": 1,
                    "s3": {
                      "enabled": false,
                      "bucket": "",
                      "region": "",
                      "endpoint": "",
                      "accessKey": "",
                      "secret": "",
                      "forcePathStyle": false
                    }
                  },
                  "smtp": {
                    "enabled": false,
                    "host": "smtp.example.com",
                    "port": 587,
                    "username": "",
                    "password": "",
                    "tls": true
                  },
                  "s3": {
                    "enabled": false,
                    "bucket": "",
                    "region": "",
                    "endpoint": "",
                    "accessKey": "",
                    "secret": "",
                    "forcePathStyle": false
                  },
                  "adminAuthToken": {
                    "secret": "******",
                    "duration": 1209600
                  },
                  "adminPasswordResetToken": {
                    "secret": "******",
                    "duration": 1800
                  },
                  "recordAuthToken": {
                    "secret": "******",
                    "duration": 1209600
                  },
                  "recordPasswordResetToken": {
                    "secret": "******",
                    "duration": 1800
                  },
                  "recordEmailChangeToken": {
                    "secret": "******",
                    "duration": 1800
                  },
                  "recordVerificationToken": {
                    "secret": "******",
                    "duration": 604800
                  },
                  "googleAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "facebookAuth": {
                    "enabled": false,
                  },
                  "githubAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "gitlabAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "discordAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "twitterAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "microsoftAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  },
                  "spotifyAuth": {
                    "enabled": true,
                    "clientId": "demo",
                    "clientSecret": "******"
                  }
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "meta": {
                      "appName": {
                        "code": "validation_required",
                        "message": "Missing required value."
                      }
                    }
                  }
                }
            `,
        },
        {
            code: 401,
            body: `
                {
                  "code": 401,
                  "message": "The request requires admin authorization token to be set.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <strong>Update settings</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Bulk updates application settings and returns the updated settings list.</p>
        <p>Only admins can access this action.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            const settings = await pb.settings.update({
                meta: {
                  appName: 'YOUR_APP',
                  appUrl: 'http://127.0.0.1:8090',
                },
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            final settings = await pb.settings.update(body: {
                'meta': {
                  'appName': 'YOUR_APP',
                  'appUrl': 'http://127.0.0.1:8090',
                },
            });
        `}
    />

    <div class="api-route alert alert-warning">
        <strong class="label label-primary">PATCH</strong>
        <div class="content">/api/settings</div>
        <small class="txt-hint auth-header">Requires <code>Authorization: TOKEN</code></small>
    </div>

    <div class="section-title">Body Parameters</div>
    <table class="table-compact table-border">
        <thead>
            <tr>
                <th>Param</th>
                <th>Type</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <!-- meta -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>meta</strong>
                    <br />
                    <small class="txt-hint">Application meta data (name, url, support email, etc.).</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>appName</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The app name.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>appUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The app public absolute url.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>hideControls</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    Hides the collection create and update controls from the Admin UI.
                    <small>
                        Useful to prevent making accidental schema changes when in production environment.
                    </small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>senderName</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Transactional mails sender name.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>senderAddress</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Transactional mails sender address.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>verificationTemplate</em>
                    </div>
                </td>
                <td>
                    <span class="label">Object</span>
                </td>
                <td>The default user verification email template.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>resetPasswordTemplate</em>
                    </div>
                </td>
                <td>
                    <span class="label">Object</span>
                </td>
                <td>The default user reset password email template.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>confirmEmailChangeTemplate</em>
                    </div>
                </td>
                <td>
                    <span class="label">Object</span>
                </td>
                <td>The default user email change confirmation email template.</td>
            </tr>

            <!-- logs -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>logs</strong>
                    <br />
                    <small class="txt-hint">Request logs settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>maxDays</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Max retention period. Set to <em>0</em> for no logs.</td>
            </tr>

            <!-- backups -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>backups</strong>
                    <br />
                    <small class="txt-hint">App data backups settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>cron</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Cron expression to schedule auto backups, eg. <code>0 0 * * *</code>.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>cronMaxKeep</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>The max number of cron generated backups to keep before removing older entries.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>s3</em>
                    </div>
                </td>
                <td>
                    <span class="label">Object</span>
                </td>
                <td>S3 configuration (the same fields as for the S3 file storage settings).</td>
            </tr>

            <!-- smtp -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>smtp</strong>
                    <br />
                    <small class="txt-hint">SMTP mail server settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the use of the SMTP mail server for sending emails.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>host</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Mail server host (required if SMTP is enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>port</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Mail server port (required if SMTP is enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>username</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Mail server username.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>password</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Mail server password.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>tls</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    Whether to enforce TLS connection encryption.
                    <br />
                    <small class="txt-hint">
                        When <em>false</em> <em>StartTLS</em> command is send, leaving the server to decide whether
                        to upgrade the connection or not).
                    </small>
                </td>
            </tr>

            <!-- s3 -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>s3</strong>
                    <br />
                    <small class="txt-hint">S3 compatible file storage settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the use of a S3 compatible storage.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>bucket</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>S3 storage bucket (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>region</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>S3 storage region (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>endpoint</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>S3 storage public endpoint (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>accessKey</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>S3 storage access key (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>S3 storage secret (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>forcePathStyle</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    Forces the S3 request to use path-style addressing, eg.
                    "https://s3.amazonaws.com/BUCKET/KEY" instead of the default
                    "https://BUCKET.s3.amazonaws.com/KEY".
                </td>
            </tr>

            <!-- adminAuthToken -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>adminAuthToken</strong>
                    <br />
                    <small class="txt-hint">Admin authentication token options.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Token secret (random 30+ characters).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>duration</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Token validity duration in seconds.</td>
            </tr>

            <!-- adminPasswordResetToken -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>adminPasswordResetToken</strong>
                    <br />
                    <small class="txt-hint">Admin password reset token options.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Token secret (random 30+ characters).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>duration</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Token validity duration in seconds.</td>
            </tr>

            <!-- recordAuthToken -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>recordAuthToken</strong>
                    <br />
                    <small class="txt-hint">Record authentication token options.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Token secret (random 30+ characters).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>duration</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Token validity duration in seconds.</td>
            </tr>

            <!-- recordPasswordResetToken -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>recordPasswordResetToken</strong>
                    <br />
                    <small class="txt-hint">Record password reset token options.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Token secret (random 30+ characters).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>duration</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Token validity duration in seconds.</td>
            </tr>

            <!-- recordEmailChangeToken -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>recordEmailChangeToken</strong>
                    <br />
                    <small class="txt-hint">Record email change token options.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Token secret (random 30+ characters).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>duration</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Token validity duration in seconds.</td>
            </tr>

            <!-- recordVerificationToken -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>recordVerificationToken</strong>
                    <br />
                    <small class="txt-hint">Record verification token options.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>secret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Token secret (random 30+ characters).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>duration</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>Token validity duration in seconds.</td>
            </tr>

            <!-- googleAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>googleAuth</strong>
                    <br />
                    <small class="txt-hint">Google OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>authUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's authorization endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://accounts.google.com/o/oauth2/auth.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>tokenUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's token endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://accounts.google.com/o/oauth2/token.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>userApiUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's user profile endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://www.googleapis.com/oauth2/v1/userinfo.</small>
                </td>
            </tr>

            <!-- facebookAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>facebookAuth</strong>
                    <br />
                    <small class="txt-hint">Facebook OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>authUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's authorization endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://www.facebook.com/dialog/oauth.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>tokenUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's token endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://graph.facebook.com/oauth/access_token.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>userApiUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's user profile endpoint URL.
                    <br />
                    <small class="txt-hint">
                        Default to https://graph.facebook.com/me?fields=name,email,picture.type(large).
                    </small>
                </td>
            </tr>

            <!-- githubAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>githubAuth</strong>
                    <br />
                    <small class="txt-hint">GitHub OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>authUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's authorization endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://github.com/login/oauth/authorize.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>tokenUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's token endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://github.com/login/oauth/access_token.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>userApiUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's user profile endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://api.github.com/user.</small>
                </td>
            </tr>

            <!-- gitlabAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>gitlabAuth</strong>
                    <br />
                    <small class="txt-hint">GitLab OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>authUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's authorization endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://gitlab.com/oauth/authorize.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>tokenUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's token endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://gitlab.com/oauth/token.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>userApiUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's user profile endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://gitlab.com/api/v4/user.</small>
                </td>
            </tr>

            <!-- discordAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>discordAuth</strong>
                    <br />
                    <small class="txt-hint">Discord OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>

            <!-- twitterAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>twitterAuth</strong>
                    <br />
                    <small class="txt-hint">Twitter OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>

            <!-- microsoftAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>microsoftAuth</strong>
                    <br />
                    <small class="txt-hint">Microsoft Azure AD OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>authUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's authorization endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://gitlab.com/oauth/authorize.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>tokenUrl</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The provider's token endpoint URL.
                    <br />
                    <small class="txt-hint">Default to https://gitlab.com/oauth/token.</small>
                </td>
            </tr>

            <!-- spotifyAuth -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>spotifyAuth</strong>
                    <br />
                    <small class="txt-hint">Spotify OAuth2 provider settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>enabled</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Enable the OAuth2 provider.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>clientId</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client id (required if enabled).</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-success">Required</span>
                        <em>clientSecret</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The provider's app client secret (required if enabled).</td>
            </tr>
        </tbody>
    </table>
    <small class="block txt-hint m-t-10 m-b-base">
        Body parameters could be sent as <em>JSON</em> or
        <em>multipart/form-data</em>.
    </small>

    <div class="section-title">Query parameters</div>
    <table class="table-compact table-border m-b-base">
        <thead>
            <tr>
                <th>Param</th>
                <th>Type</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <FieldsQueryParam />
        </tbody>
    </table>

    <div class="section-title">Responses</div>
    <div class="tabs">
        <div class="tabs-header compact left">
            {#each responses as response (response.code)}
                <button
                    class="tab-item"
                    class:active={responseTab === response.code}
                    on:click={() => (responseTab = response.code)}
                >
                    {response.code}
                </button>
            {/each}
        </div>
        <div class="tabs-content">
            {#each responses as response (response.code)}
                <div class="tab-item" class:active={responseTab === response.code}>
                    <CodeBlock content={response.body} />
                </div>
            {/each}
        </div>
    </div>
</Accordion>
