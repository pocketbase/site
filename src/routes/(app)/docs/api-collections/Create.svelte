<script>
    import Accordion from "@/components/Accordion.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import SdkTabs from "@/components/SdkTabs.svelte";

    const responses = [
        {
            code: 200,
            body: `
                {
                  "id": "d2972397d45614e",
                  "created": "2022-06-22 07:13:00.643Z",
                  "updated": "2022-06-22 07:13:00.643Z",
                  "type": "base",
                  "name": "posts",
                  "system": true,
                  "schema": [
                    {
                      "system": false,
                      "id": "njnkhxa2",
                      "name": "name",
                      "type": "text",
                      "required": false,
                      "unique": false,
                      "options": {
                        "min": null,
                        "max": null,
                        "pattern": ""
                      }
                    },
                    {
                      "system": false,
                      "id": "9gvv0jkj",
                      "name": "avatar",
                      "type": "file",
                      "required": false,
                      "unique": false,
                      "options": {
                        "maxSelect": 1,
                        "maxSize": 5242880,
                        "mimeTypes": [
                          "image/jpg",
                          "image/jpeg",
                          "image/png",
                          "image/svg+xml",
                          "image/gif"
                        ],
                        "thumbs": null
                      }
                    }
                  ],
                  "listRule": "id = @request.user.id",
                  "viewRule": "id = @request.user.id",
                  "createRule": "id = @request.user.id",
                  "updateRule": "id = @request.user.id",
                  "deleteRule": null,
                  "indexes": ["create index name_idx on posts (name)"]
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
                    "email": {
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
        <strong>Create collection</strong>
    </svelte:fragment>

    <div class="content m-b-sm">
        <p>Creates a new Collection.</p>
        <p>Only admins can access this action.</p>
    </div>

    <SdkTabs
        js={`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // create base collection
            const base = await pb.collections.create({
                name: 'exampleBase',
                type: 'base',
                schema: [
                    {
                        name: 'title',
                        type: 'text',
                        required: true,
                        options: {
                            min: 10,
                        },
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
                // schema is optional for auth collections
                schema: [
                    {
                        name: 'name',
                        type: 'text',
                    }
                ],
                options: {
                    allowOAuth2Auth: true,
                    requireEmail: true,
                }
            });

            // create view collection
            const view = await pb.collections.create({
                name: 'exampleView',
                type: 'view',
                listRule: '@request.auth.id != ""',
                viewRule: null,
                // the schema will be autogenerated from the below query
                options: {
                    query: 'SELECT id, name from posts',
                },
            });
        `}
        dart={`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // create base collection
            final base = await pb.collections.create(body: {
                'name': 'exampleBase',
                'type': 'base',
                'schema': [
                    {
                        'name': 'title',
                        'type': 'text',
                        'required': true,
                        'options': {
                            'min': 10,
                        },
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
                // schema is optional for auth collections
                'schema': [
                    {
                        'name': 'name',
                        'type': 'text',
                    }
                ],
                'options': {
                    'allowOAuth2Auth': true,
                    'requireEmail': true,
                }
            });

            // create view collection
            final view = await pb.collections.create(body: {
                'name': 'exampleView',
                'type': 'view',
                'listRule': '@request.auth.id != ""',
                'viewRule': null,
                // the schema will be autogenerated from the below query
                'options': {
                    'query': 'SELECT id, name from posts',
                },
            });
        `}
    />

    <div class="api-route alert alert-success">
        <strong class="label label-primary">POST</strong>
        <div class="content">/api/collections</div>
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
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>id</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    <strong>15 characters string</strong> to store as collection ID.
                    <br />
                    If not set, it will be auto generated.
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span class="txt">name</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Unique collection name (used as a table name for the records table).</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Required</span>
                        <span class="txt">type</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The type of the collection - <code>base</code> (<em>default</em>), <code>auth</code> or
                    <code>view</code>.
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-info">Req|Opt</span>
                        <span class="txt">schema</span>
                    </div>
                </td>
                <td>
                    <span class="label">Array</span>
                </td>
                <td>
                    <div class="content">
                        <p>List with the collection fields.</p>
                        <p>This field is <strong>required</strong> for <code>base</code> collections.</p>
                        <p>This field is <strong>optional</strong> for <code>auth</code> collections.</p>
                        <p>
                            This field is <strong>optional</strong> and autopopulated for <code>view</code>
                            collections based on the
                            <code>options.query</code>.
                        </p>
                        <p>
                            For more info about the supported fields and their options, you could check the
                            <strong>pocketbase/models/schema</strong>
                            Go sub-package definitions.
                        </p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">system</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Marks the collection as <em>"system"</em>, aka. cannot be renamed or deleted.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex flex-nowrap">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">listRule</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"null|String"}</span>
                </td>
                <td>
                    API <em>List</em> action rule.
                    <br />
                    <em class="txt-hint">
                        Check
                        <a href="/docs/manage-collections/#rules-filters-syntax">Rules/Filters syntax guide</a
                        >
                        for more details.
                    </em>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex flex-nowrap">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">viewRule</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"null|String"}</span>
                </td>
                <td>
                    API <em>View</em> action rule.
                    <br />
                    <em class="txt-hint">
                        Check
                        <a href="/docs/manage-collections/#rules-filters-syntax">Rules/Filters syntax guide</a
                        >
                        for more details.
                    </em>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex flex-nowrap">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">createRule</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"null|String"}</span>
                </td>
                <td>
                    <p>
                        API <em>Create</em> action rule.
                        <br />
                        <em class="txt-hint">
                            Check
                            <a href="/docs/manage-collections/#rules-filters-syntax"
                                >Rules/Filters syntax guide</a
                            >
                            for more details.
                        </em>
                    </p>
                    <p>
                        This rule must be <code>null</code> for <code>view</code> collections.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex flex-nowrap">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">updateRule</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"null|String"}</span>
                </td>
                <td>
                    <p>
                        API <em>Update</em> action rule.
                        <br />
                        <em class="txt-hint">
                            Check
                            <a href="/docs/manage-collections/#rules-filters-syntax"
                                >Rules/Filters syntax guide</a
                            >
                            for more details.
                        </em>
                    </p>
                    <p>
                        This rule must be <code>null</code> for <code>view</code> collections.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex flex-nowrap">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">deleteRule</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"null|String"}</span>
                </td>
                <td>
                    <p>
                        API <em>Delete</em> action rule.
                        <br />
                        <em class="txt-hint">
                            Check
                            <a href="/docs/manage-collections/#rules-filters-syntax"
                                >Rules/Filters syntax guide</a
                            >
                            for more details.
                        </em>
                    </p>
                    <p>
                        This rule must be <code>null</code> for <code>view</code> collections.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex flex-nowrap">
                        <span class="label label-warning">Optional</span>
                        <span class="txt">indexes</span>
                    </div>
                </td>
                <td>
                    <span class="label">{"Array<String>"}</span>
                </td>
                <td>
                    <p>The collection indexes and unique constriants.</p>
                    <p>
                        Note that <code>view</code> collections don't support indexes.
                    </p>
                </td>
            </tr>

            <!-- view options -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>options (<em>view</em>)</strong>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-success">Required</span>
                        <em>query</em>
                    </div>
                </td>
                <td>
                    <span class="label">null|String</span>
                </td>
                <td>
                    The SQL <code>SELECT</code> statement that will be used to create the underlying view of the
                    collection.
                </td>
            </tr>

            <!-- auth options -->
            <tr>
                <td colspan="3" class="bg-info-alt">
                    <strong>options (<em>auth</em>)</strong>
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>manageRule</em>
                    </div>
                </td>
                <td>
                    <span class="label">null|String</span>
                </td>
                <td>
                    API rule that gives admin-like permissions to allow fully managing the auth record(s), eg.
                    changing the password without requiring to enter the old one, directly updating the
                    verified state or email, etc. This rule is executed in addition to the
                    <code>createRule</code> and <code>updateRule</code>.
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>allowOAuth2Auth</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Whether to allow OAuth2 sign-in/sign-up for the auth collection.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>allowUsernameAuth</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Whether to allow username + password authentication for the auth collection.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>allowEmailAuth</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Whether to allow email + password authentication for the auth collection.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>requireEmail</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Whether to always require email address when creating or updating auth records.</td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>exceptEmailDomains</em>
                    </div>
                </td>
                <td>
                    <span class="label">{"Array<String>"}</span>
                </td>
                <td>
                    Whether to allow sign-ups only with the email domains not listed in the specified list.
                </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">├─</span>
                        <span class="label label-warning">Optional</span>
                        <em>onlyEmailDomains</em>
                    </div>
                </td>
                <td>
                    <span class="label">{"Array<String>"}</span>
                </td>
                <td> Whether to allow sign-ups only with the email domains listed in the specified list. </td>
            </tr>
            <tr>
                <td class="min-width">
                    <div class="inline-flex flex-nowrap">
                        <span class="txt">└─</span>
                        <span class="label label-warning">Optional</span>
                        <em>minPasswordLength</em>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>The minimum required password length for new auth records.</td>
            </tr>
        </tbody>
    </table>
    <small class="block txt-hint m-t-10 m-b-base">
        Body parameters could be sent as <em>JSON</em> or
        <em>multipart/form-data</em>.
    </small>

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
