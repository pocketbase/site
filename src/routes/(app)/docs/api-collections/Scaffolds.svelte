<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import CodeTabs from "@/components/CodeTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                    "auth": {
                        "id": "",
                        "listRule": null,
                        "viewRule": null,
                        "createRule": null,
                        "updateRule": null,
                        "deleteRule": null,
                        "name": "",
                        "type": "auth",
                        "fields": [
                            {
                                "autogeneratePattern": "[a-z0-9]{15}",
                                "hidden": false,
                                "id": "text3208210256",
                                "max": 15,
                                "min": 15,
                                "name": "id",
                                "pattern": "^[a-z0-9]+$",
                                "presentable": false,
                                "primaryKey": true,
                                "required": true,
                                "system": true,
                                "type": "text"
                            },
                            {
                                "cost": 0,
                                "hidden": true,
                                "id": "password901924565",
                                "max": 0,
                                "min": 8,
                                "name": "password",
                                "pattern": "",
                                "presentable": false,
                                "required": true,
                                "system": true,
                                "type": "password"
                            },
                            {
                                "autogeneratePattern": "[a-zA-Z0-9]{50}",
                                "hidden": true,
                                "id": "text2504183744",
                                "max": 60,
                                "min": 30,
                                "name": "tokenKey",
                                "pattern": "",
                                "presentable": false,
                                "primaryKey": false,
                                "required": true,
                                "system": true,
                                "type": "text"
                            },
                            {
                                "exceptDomains": null,
                                "hidden": false,
                                "id": "email3885137012",
                                "name": "email",
                                "onlyDomains": null,
                                "presentable": false,
                                "required": true,
                                "system": true,
                                "type": "email"
                            },
                            {
                                "hidden": false,
                                "id": "bool1547992806",
                                "name": "emailVisibility",
                                "presentable": false,
                                "required": false,
                                "system": true,
                                "type": "bool"
                            },
                            {
                                "hidden": false,
                                "id": "bool256245529",
                                "name": "verified",
                                "presentable": false,
                                "required": false,
                                "system": true,
                                "type": "bool"
                            }
                        ],
                        "indexes": [
                            "CREATE UNIQUE INDEX \`idx_tokenKey_hclGvwhtqG\` ON \`test\` (\`tokenKey\`)",
                            "CREATE UNIQUE INDEX \`idx_email_eyxYyd3gp1\` ON \`test\` (\`email\`) WHERE \`email\` != ''"
                        ],
                        "created": "",
                        "updated": "",
                        "system": false,
                        "authRule": "",
                        "manageRule": null,
                        "authAlert": {
                            "enabled": true,
                            "emailTemplate": {
                                "subject": "Login from a new location",
                                "body": "\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eWe noticed a login to your {APP_NAME} account from a new location.\u003c/p\u003e\n\u003cp\u003eIf this was you, you may disregard this email.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eIf this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e"
                            }
                        },
                        "oauth2": {
                            "providers": [],
                            "mappedFields": {
                                "id": "",
                                "name": "",
                                "username": "",
                                "avatarURL": ""
                            },
                            "enabled": false
                        },
                        "passwordAuth": {
                            "enabled": true,
                            "identityFields": [
                                "email"
                            ]
                        },
                        "mfa": {
                            "enabled": false,
                            "duration": 1800,
                            "rule": ""
                        },
                        "otp": {
                            "enabled": false,
                            "duration": 180,
                            "length": 8,
                            "emailTemplate": {
                                "subject": "OTP for {APP_NAME}",
                                "body": "\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eYour one-time password is: \u003cstrong\u003e{OTP}\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003ci\u003eIf you didn't ask for the one-time password, you can ignore this email.\u003c/i\u003e\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e"
                            }
                        },
                        "authToken": {
                            "duration": 604800
                        },
                        "passwordResetToken": {
                            "duration": 1800
                        },
                        "emailChangeToken": {
                            "duration": 1800
                        },
                        "verificationToken": {
                            "duration": 259200
                        },
                        "fileToken": {
                            "duration": 180
                        },
                        "verificationTemplate": {
                            "subject": "Verify your {APP_NAME} email",
                            "body": "\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eThank you for joining us at {APP_NAME}.\u003c/p\u003e\n\u003cp\u003eClick on the button below to verify your email address.\u003c/p\u003e\n\u003cp\u003e\n  \u003ca class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\"\u003eVerify\u003c/a\u003e\n\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e"
                        },
                        "resetPasswordTemplate": {
                            "subject": "Reset your {APP_NAME} password",
                            "body": "\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eClick on the button below to reset your password.\u003c/p\u003e\n\u003cp\u003e\n  \u003ca class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\"\u003eReset password\u003c/a\u003e\n\u003c/p\u003e\n\u003cp\u003e\u003ci\u003eIf you didn't ask to reset your password, you can ignore this email.\u003c/i\u003e\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e"
                        },
                        "confirmEmailChangeTemplate": {
                            "subject": "Confirm your {APP_NAME} new email address",
                            "body": "\u003cp\u003eHello,\u003c/p\u003e\n\u003cp\u003eClick on the button below to confirm your new email address.\u003c/p\u003e\n\u003cp\u003e\n  \u003ca class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\"\u003eConfirm new email\u003c/a\u003e\n\u003c/p\u003e\n\u003cp\u003e\u003ci\u003eIf you didn't ask to change your email address, you can ignore this email.\u003c/i\u003e\u003c/p\u003e\n\u003cp\u003e\n  Thanks,\u003cbr/\u003e\n  {APP_NAME} team\n\u003c/p\u003e"
                        }
                    },
                    "base": {
                        "id": "",
                        "listRule": null,
                        "viewRule": null,
                        "createRule": null,
                        "updateRule": null,
                        "deleteRule": null,
                        "name": "",
                        "type": "base",
                        "fields": [
                            {
                                "autogeneratePattern": "[a-z0-9]{15}",
                                "hidden": false,
                                "id": "text3208210256",
                                "max": 15,
                                "min": 15,
                                "name": "id",
                                "pattern": "^[a-z0-9]+$",
                                "presentable": false,
                                "primaryKey": true,
                                "required": true,
                                "system": true,
                                "type": "text"
                            }
                        ],
                        "indexes": [],
                        "created": "",
                        "updated": "",
                        "system": false
                    },
                    "view": {
                        "id": "",
                        "listRule": null,
                        "viewRule": null,
                        "createRule": null,
                        "updateRule": null,
                        "deleteRule": null,
                        "name": "",
                        "type": "view",
                        "fields": [],
                        "indexes": [],
                        "created": "",
                        "updated": "",
                        "system": false,
                        "viewQuery": ""
                    }
                }
            `,
        },
        {
            code: 401,
            body: `
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "code": 403,
                  "message": "The authorized record is not allowed to perform this action.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        },
    ];

    let responseTab = responses[0].code;
</script>

<Accordion single title="Scaffolds">
    <div class="content m-b-sm">
        <p>
            Returns an object will all of the collection types and their default fields
            <em>(used primarily in the Dashboard UI)</em>.
        </p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            const scaffolds = await pb.collections.getScaffolds();
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            final scaffolds = await pb.collections.getScaffolds();
        `}
    />

    <h6 class="m-b-xs">API details</h6>

    <div class="api-route alert alert-info">
        <strong class="label label-primary">GET</strong>
        <div class="content">/api/collections/meta/scaffolds</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
    </div>

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
