<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";
    import FieldsQueryParam from "@/components/FieldsQueryParam.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "smtp": {
                    "enabled": false,
                    "port": 587,
                    "host": "smtp.example.com",
                    "username": "",
                    "authMethod": "",
                    "tls": true,
                    "localName": ""
                  },
                  "backups": {
                    "cron": "0 0 * * *",
                    "cronMaxKeep": 3,
                    "s3": {
                      "enabled": false,
                      "bucket": "",
                      "region": "",
                      "endpoint": "",
                      "accessKey": "",
                      "forcePathStyle": false
                    }
                  },
                  "s3": {
                    "enabled": false,
                    "bucket": "",
                    "region": "",
                    "endpoint": "",
                    "accessKey": "",
                    "forcePathStyle": false
                  },
                  "meta": {
                    "appName": "Acme",
                    "appURL": "https://example.com",
                    "senderName": "Support",
                    "senderAddress": "support@example.com",
                    "hideControls": false
                  },
                  "rateLimits": {
                    "rules": [
                      {
                        "label": "*:auth",
                        "audience": "",
                        "duration": 3,
                        "maxRequests": 2
                      },
                      {
                        "label": "*:create",
                        "audience": "",
                        "duration": 5,
                        "maxRequests": 20
                      },
                      {
                        "label": "/api/batch",
                        "audience": "",
                        "duration": 1,
                        "maxRequests": 3
                      },
                      {
                        "label": "/api/",
                        "audience": "",
                        "duration": 10,
                        "maxRequests": 300
                      }
                    ],
                    "enabled": false
                  },
                  "trustedProxy": {
                    "headers": [],
                    "useLeftmostIP": false
                  },
                  "batch": {
                    "enabled": true,
                    "maxRequests": 50,
                    "timeout": 3,
                    "maxBodySize": 0
                  },
                  "logs": {
                    "maxDays": 7,
                    "minLevel": 0,
                    "logIP": true,
                    "logAuthId": false
                  }
                }
            `,
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
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
                  "status": 401,
                  "message": "The request requires valid record authorization token.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "The authorized record is not allowed to perform this action.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="Update settings">
    <div class="content m-b-sm">
        <p>Bulk updates application settings and returns the updated settings list.</p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '123456');

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

            await pb.collection("_superusers").authWithPassword('test@example.com', '123456');

            final settings = await pb.settings.update(body: {
                'meta': {
                  'appName': 'YOUR_APP',
                  'appUrl': 'http://127.0.0.1:8090',
                },
            });
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-warning">
        <strong class="label label-primary">PATCH</strong>
        <div class="content">/api/settings</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
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
                    Hides the collection create and update controls from the Dashboard.
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

            <!-- logs -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>logs</strong>
                    <br />
                    <small class="txt-hint">App logger settings.</small>
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
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>minLevel</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>
                    Specifies the minimum log persistent level.
                    <br />
                    The default log levels are:
                    <ul>
                        <li>-4: DEBUG</li>
                        <li>0: INFO</li>
                        <li>4: WARN</li>
                        <li>8: ERROR</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>logIP</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>If enabled includes the client IP in the activity request logs.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>logAuthId</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>If enabled includes the authenticated record id in the activity request logs.</td>
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
                <td>Cron expression to schedule auto backups, e.g. <code>0 0 * * *</code>.</td>
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
                        <span class="txt">├─</span>
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
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>authMethod</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The SMTP AUTH method to use - <em>PLAIN</em> or <em>LOGIN</em> (used mainly by Microsoft).
                    <br />
                    Default to <em>PLAIN</em> if empty.
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>localName</em>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    Optional domain name or (IP address) to use for the initial EHLO/HELO exchange.
                    <br />
                    If not explicitly set, <code>localhost</code> will be used.
                    <br />
                    Note that some SMTP providers, such as Gmail SMTP-relay, requires a proper domain name and
                    and will reject attempts to use localhost.
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
                    Forces the S3 request to use path-style addressing, e.g.
                    "https://s3.amazonaws.com/BUCKET/KEY" instead of the default
                    "https://BUCKET.s3.amazonaws.com/KEY".
                </td>
            </tr>

            <!-- batch -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>batch</strong>
                    <br />
                    <small class="txt-hint">Batch logs settings.</small>
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
                <td>Enable the batch Web APIs.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>maxRequests</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>The maximum allowed batch request to execute.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>timeout</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>The max duration in seconds to wait before cancelling the batch transaction.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>maxBodySize</em>
                    </div>
                </td>
                <td>
                    <span class="label">Number</span>
                </td>
                <td>
                    The maximum allowed batch request body size in bytes.
                    <br />
                    If not set, fallbacks to max ~128MB.
                </td>
            </tr>

            <!-- rateLimits -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>rateLimits</strong>
                    <br />
                    <small class="txt-hint">Rate limiter settings.</small>
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
                <td>Enable the builtin rate limiter.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>rules</em>
                    </div>
                </td>
                <td>
                    <span class="label">{`Array<RateLimitRule>`}</span>
                </td>
                <td>
                    List of rate limit rules. Each rule have:
                    <ul>
                        <li>
                            <code>label</code> - the identifier of the rule.
                            <br />
                            It could be a tag, complete path or path prerefix (when ends with `/`).
                        </li>
                        <li><code>maxRequests</code> - the max allowed number of requests per duration.</li>
                        <li>
                            <code>duration</code> - specifies the interval (in seconds) per which to reset the
                            counted/accumulated rate limiter tokens..
                        </li>
                    </ul>
                </td>
            </tr>

            <!-- trustedProxy -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>trustedProxy</strong>
                    <br />
                    <small class="txt-hint">Trusted proxy headers settings.</small>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>headers</em>
                    </div>
                </td>
                <td>
                    <span class="label">{`Array<String>`}</span>
                </td>
                <td>List of explicit trusted header(s) to check.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>useLeftmostIP</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Specifies to use the left-mostish IP from the trusted headers.</td>
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
        <div class="tabs-header compact combined left">
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
