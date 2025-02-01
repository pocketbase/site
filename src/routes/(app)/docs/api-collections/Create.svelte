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
                  "id": "_pbc_2287844090",
                  "listRule": null,
                  "viewRule": null,
                  "createRule": null,
                  "updateRule": null,
                  "deleteRule": null,
                  "name": "posts",
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
                    },
                    {
                      "autogeneratePattern": "",
                      "hidden": false,
                      "id": "text724990059",
                      "max": 0,
                      "min": 0,
                      "name": "title",
                      "pattern": "",
                      "presentable": false,
                      "primaryKey": false,
                      "required": false,
                      "system": false,
                      "type": "text"
                    },
                    {
                      "hidden": false,
                      "id": "autodate2990389176",
                      "name": "created",
                      "onCreate": true,
                      "onUpdate": false,
                      "presentable": false,
                      "system": false,
                      "type": "autodate"
                    },
                    {
                      "hidden": false,
                      "id": "autodate3332085495",
                      "name": "updated",
                      "onCreate": true,
                      "onUpdate": true,
                      "presentable": false,
                      "system": false,
                      "type": "autodate"
                    }
                  ],
                  "indexes": [],
                  "system": false
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
                    "title": {
                      "code": "validation_required",
                      "message": "Missing required value."
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

<Accordion single title="Create collection">
    <div class="content m-b-sm">
        <p>Creates a new Collection.</p>
        <p>Only superusers can perform this action.</p>
    </div>

    <CodeTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            // create base collection
            const base = await pb.collections.create({
                name: 'exampleBase',
                type: 'base',
                fields: [
                    {
                        name: 'title',
                        type: 'text',
                        required: true,
                        min: 10,
                    },
                    {
                        name: 'status',
                        type: 'bool',
                    },
                ],
            });

            // create auth collection
            const auth = await pb.collections.create({
                name: 'exampleAuth',
                type: 'auth',
                createRule: 'id = @request.auth.id',
                updateRule: 'id = @request.auth.id',
                deleteRule: 'id = @request.auth.id',
                fields: [
                    {
                        name: 'name',
                        type: 'text',
                    }
                ],
                passwordAuth: {
                    enabled: true,
                    identityFields: ['email']
                },
            });

            // create view collection
            const view = await pb.collections.create({
                name: 'exampleView',
                type: 'view',
                listRule: '@request.auth.id != ""',
                viewRule: null,
                // the schema will be autogenerated from the below query
                viewQuery: 'SELECT id, name from posts',
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.collection("_superusers").authWithPassword('test@example.com', '1234567890');

            // create base collection
            final base = await pb.collections.create(body: {
                'name': 'exampleBase',
                'type': 'base',
                'fields': [
                    {
                        'name': 'title',
                        'type': 'text',
                        'required': true,
                        'min': 10,
                    },
                    {
                        'name': 'status',
                        'type': 'bool',
                    },
                ],
            });

            // create auth collection
            final auth = await pb.collections.create(body: {
                'name': 'exampleAuth',
                'type': 'auth',
                'createRule': 'id = @request.auth.id',
                'updateRule': 'id = @request.auth.id',
                'deleteRule': 'id = @request.auth.id',
                'fields': [
                    {
                        'name': 'name',
                        'type': 'text',
                    }
                ],
                'passwordAuth': {
                    'enabled': true,
                    'identityFields': ['email']
                },
            });

            // create view collection
            final view = await pb.collections.create(body: {
                'name': 'exampleView',
                'type': 'view',
                'listRule': '@request.auth.id != ""',
                'viewRule': null,
                // the schema will be autogenerated from the below query
                'viewQuery': 'SELECT id, name from posts',
            });
        `}
    />

    <h6 class="m-b-xs">API details</h6>
    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/collections</div>
        <small class="txt-hint auth-header">Requires <code>Authorization:TOKEN</code></small>
    </div>

    <div class="section-title">Body Parameters</div>
    <p class="txt-hint">
        Body parameters could be sent as <em>JSON</em> or <em>multipart/form-data</em>.
    </p>
    <CodeBlock
        content={`
        {
            // 15 characters string to store as collection ID.
            // If not set, it will be auto generated.
            id (optional): string

            // Unique collection name (used as a table name for the records table).
            name (required):  string

            // Type of the collection.
            // If not set, the collection type will be "base" by default.
            type (optional): "base" | "view" | "auth"

            // List with the collection fields.
            // This field is optional and autopopulated for "view" collections based on the viewQuery.
            fields (required|optional): Array<Field>

            // The collection indexes and unique constraints.
            // Note that "view" collections don't support indexes.
            indexes (optional): Array<string>

            // Marks the collection as "system" to prevent being renamed, deleted or modify its API rules.
            system (optional): boolean

            // CRUD API rules
            listRule (optional):   null|string
            viewRule (optional):   null|string
            createRule (optional): null|string
            updateRule (optional): null|string
            deleteRule (optional): null|string

            // -------------------------------------------------------
            // view options
            // -------------------------------------------------------

            viewQuery (required):  string

            // -------------------------------------------------------
            // auth options
            // -------------------------------------------------------

            // API rule that gives admin-like permissions to allow fully managing the auth record(s),
            // e.g. changing the password without requiring to enter the old one, directly updating the
            // verified state or email, etc. This rule is executed in addition to the createRule and updateRule.
            manageRule (optional): null|string

            // API rule that could be used to specify additional record constraints applied after record
            // authentication and right before returning the auth token response to the client.
            //
            // For example, to allow only verified users you could set it to "verified = true".
            //
            // Set it to empty string to allow any Auth collection record to authenticate.
            //
            // Set it to null to disallow authentication altogether for the collection.
            authRule (optional): null|string

            // AuthAlert defines options related to the auth alerts on new device login.
            authAlert (optional): {
                enabled (optional): boolean
                emailTemplate (optional): {
                    subject (required): string
                    body (required):    string
                }
            }

            // OAuth2 specifies whether OAuth2 auth is enabled for the collection
            // and which OAuth2 providers are allowed.
            oauth2 (optional): {
                enabled (optional): boolean
                mappedFields (optional): {
                    id (optional):        string
                    name (optional):      string
                    username (optional):  string
                    avatarURL (optional): string
                }:
                providers (optional): [
                    {
                        name (required):         string
                        clientId (required):     string
                        clientSecret (required): string
                        authUrl (optional):      string
                        tokenUrl (optional):     string
                        userApiUrl (optional):   string
                        displayName (optional):  string
                        pkce (optional):         null|boolean
                    }
                ]
            }

            // PasswordAuth defines options related to the collection password authentication.
            passwordAuth (optional): {
                enabled (optional):        boolean
                identityFields (required): Array<string>
            }

            // MFA defines options related to the Multi-factor authentication (MFA).
            mfa (optional):{
                enabled (optional):  boolean
                duration (required): number
                rule (optional):     string
            }

            // OTP defines options related to the One-time password authentication (OTP).
            otp (optional): {
                enabled (optional):  boolean
                duration (required): number
                length (required):   number
                emailTemplate (optional): {
                    subject (required): string
                    body (required):    string
                }
            }

            // Token configurations.
            authToken (optional): {
                duration (required): number
                secret (required):   string
            }
            passwordResetToken (optional): {
                duration (required): number
                secret (required):   string
            }
            emailChangeToken (optional): {
                duration (required): number
                secret (required):   string
            }
            verificationToken (optional): {
                duration (required): number
                secret (required):   string
            }
            fileToken (optional): {
                duration (required): number
                secret (required):   string
            }

            // Default email templates.
            verificationTemplate (optional): {
                subject (required): string
                body (required):    string
            }
            resetPasswordTemplate (optional): {
                subject (required): string
                body (required):    string
            }
            confirmEmailChangeTemplate (optional): {
                subject (required): string
                body (required):    string
            }
        }
    `}
    />

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
