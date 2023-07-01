export default {
    "App hooks": {
        OnBeforeBootstrap: {
            html: `
                <code>OnBeforeBootstrap</code> hook is triggered before initializing the main
                application resources (eg. before db open and initial settings load).
            `,
            js: `
                $app.onBeforeBootstrap().add((e) => {
                    console.log(e.app)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnBeforeBootstrap().Add(func(e *core.BootstrapEvent) error {
                        log.Println(e.App)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnAfterBootstrap: {
            html: `
                <code>OnAfterBootstrap</code> hook is triggered after initializing the main
                application resources (eg. after db open and initial settings load).
            `,
            js: `
                $app.onAfterBootstrap().add((e) => {
                    console.log(e.app)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAfterBootstrap().Add(func(e *core.BootstrapEvent) error {
                        log.Println(e.App)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnBeforeServe: {
            html: `
                <code>OnBeforeServe</code> hook is triggered before serving the internal router
                (<a href="https://github.com/labstack/echo" target="_blank"rel="noreferrer noopener" class="txt-bold">echo</a>),
                allowing you to adjust its options and attach new routes or middlewares.
            `,
            js: `
                $app.onBeforeServe().add((e) => {
                    // register new "GET /hello" route
                    e.router.get("/hello", (c) => {
                        c.string(200, "Hello world!")
                    }, $apis.activityLogger(app), $apis.requireAdminOrUserAuth())
                })
            `,
            go: `
                package main

                import (
                    "log"
                    "net/http"

                    "github.com/labstack/echo/v5"
                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/apis"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                        // register new "GET /hello" route
                        e.Router.GET("/hello", func(c echo.Context) error {
                            return c.String(200, "Hello world!")
                        }, apis.ActivityLogger(app), apis.RequireAdminOrUserAuth())

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnBeforeApiError: {
            html: `
                <code>OnBeforeApiError</code> hook is triggered right before sending an error API
                response to the client, allowing you to further modify the error data
                or to return a completely different API response.
            `,
            js: `
                $app.onBeforeApiError().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.error)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnBeforeApiError().Add(func(e *core.ApiErrorEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Error)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnAfterApiError: {
            html: `
                <code>OnAfterApiError</code> hook is triggered right after sending an error API
                response to the client.
                It could be used for example to log the final API error in external services.
            `,
            js: `
                $app.onAfterApiError().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.error)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAfterApiError().Add(func(e *core.ApiErrorEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Error)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnTerminate: {
            html: `
                <code>OnTerminate</code> hook is triggered when the app is in the process
                of being terminated (eg. on <code>SIGTERM</code> signal).
                <br />
                Note that the app could be terminated abruptly without awaiting the hook completion.
            `,
            js: `
                $app.onAfterApiError().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.error)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAfterApiError().Add(func(e *core.ApiErrorEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Error)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },

    "DB hooks": {
        OnModelBeforeCreate: {
            html: `
                <p>
                    <code>OnModelBeforeCreate</code> hook is triggered before inserting a new
                    entry in the DB, allowing you to modify or validate the stored data.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every db model
                $app.onModelBeforeCreate().add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                $app.onModelBeforeCreate("users", "members").add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every db model
                    app.OnModelBeforeCreate().Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelBeforeCreate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnModelAfterCreate: {
            html: `
                <p>
                    <code>OnModelAfterCreate</code> hook is triggered after successfully
                    inserting a new entry in the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every db model
                $app.onModelAfterCreate().add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                $app.onModelAfterCreate("users", "members").add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every db model
                    app.OnModelAfterCreate().Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelAfterCreate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnModelBeforeUpdate: {
            html: `
                <p>
                    <code>OnModelBeforeUpdate</code> hook is triggered before updating existing
                    entry in the DB, allowing you to modify or validate the stored data.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every db model
                $app.onModelBeforeUpdate().add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                $app.onModelBeforeUpdate("users", "members").add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every db model
                    app.OnModelBeforeUpdate().Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelBeforeUpdate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnModelAfterUpdate: {
            html: `
                <p>
                    <code>OnModelAfterUpdate</code> hook is triggered after successfully updating
                    existing entry in the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every db model
                $app.onModelAfterUpdate().add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                $app.onModelAfterUpdate("users", "members").add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every db model
                    app.OnModelAfterUpdate().Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelAfterUpdate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnModelBeforeDelete: {
            html: `
                <p>
                    <code>OnModelBeforeDelete</code> hook is triggered before deleting an
                    existing entry from the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every db model
                $app.onModelBeforeDelete().add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                $app.onModelBeforeDelete("users", "members").add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every db model
                    app.OnModelBeforeDelete().Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelBeforeDelete("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnModelAfterDelete: {
            html: `
                <p>
                    <code>OnModelAfterDelete</code> hook is triggered after successfully
                    deleting an existing entry from the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every db model
                $app.onModelAfterDelete().add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                $app.onModelAfterDelete("users", "members").add((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every db model
                    app.OnModelAfterDelete().Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelAfterDelete("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.Id)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },

    "Mailer hooks": {
        OnMailerBeforeAdminResetPasswordSend: {
            html: `
                <code>OnMailerBeforeAdminResetPasswordSend</code> hook is triggered right
                before sending a password reset email to an admin, allowing you
                to inspect and customize the email message that is being sent.
            `,
            js: `
                $app.onMailerBeforeAdminResetPasswordSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.admin)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeAdminResetPasswordSend().Add(func(e *core.MailerAdminEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Admin)
                        log.Println(e.Meta)

                        // change the mail subject
                        e.Message.Subject = "new subject"

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerAfterAdminResetPasswordSend: {
            html: `
                <code>OnMailerAfterAdminResetPasswordSend</code> hook is triggered after
                admin password reset email was successfully sent.
            `,
            js: `
                $app.onMailerAfterAdminResetPasswordSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.admin)
                    console.log(e.meta)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterAdminResetPasswordSend().Add(func(e *core.MailerAdminEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Admin)
                        log.Println(e.Meta)

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerBeforeRecordResetPasswordSend: {
            html: `
                <p>
                    <code>OnMailerBeforeRecordResetPasswordSend</code> hook is triggered right
                    before sending a password reset email to an auth record, allowing
                    you to inspect and customize the email message that is being sent.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                $app.onMailerBeforeRecordResetPasswordSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeRecordResetPasswordSend().Add(func(e *core.MailerRecordEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Record)
                        log.Println(e.Meta)

                        // change the mail subject
                        e.Message.Subject = "new subject"

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerAfterRecordResetPasswordSend: {
            html: `
                <p>
                    <code>OnMailerAfterRecordResetPasswordSend</code> hook is triggered
                    after an auth record password reset email was successfully sent.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                $app.onMailerAfterRecordResetPasswordSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)
                })
            `,
            go: `
                package main

                import (
                    "log"
                    "net/mail"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterRecordResetPasswordSend().Add(func(e *core.MailerRecordEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Record)
                        log.Println(e.Meta)

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerBeforeRecordVerificationSend: {
            html: `
                <p>
                    <code>OnMailerBeforeRecordVerificationSend</code> hook is triggered right
                    before sending a verification email to an auth record, allowing
                    you to inspect and customize the email message that is being sent.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                $app.onMailerBeforeRecordVerificationSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeRecordVerificationSend().Add(func(e *core.MailerRecordEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Record)
                        log.Println(e.Meta)

                        // change the mail subject
                        e.Message.Subject = "new subject"

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerAfterRecordVerificationSend: {
            html: `
                <p>
                    <code>OnMailerAfterRecordVerificationSend</code> hook is triggered
                    after a verification email was successfully sent to an auth record.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                $app.onMailerAfterRecordVerificationSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterRecordVerificationSend().Add(func(e *core.MailerRecordEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Record)
                        log.Println(e.Meta)

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerBeforeRecordChangeEmailSend: {
            html: `
                <p>
                    <code>OnMailerBeforeRecordChangeEmailSend</code> hook is triggered right before
                    sending a confirmation new address email to an auth record, allowing
                    you to inspect and customize the email message that is being sent.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                $app.onMailerBeforeRecordChangeEmailSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerBeforeRecordChangeEmailSend().Add(func(e *core.MailerRecordEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Record)
                        log.Println(e.Meta)

                        // change the mail subject
                        e.Message.Subject = "new subject"

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnMailerAfterRecordChangeEmailSend: {
            html: `
                <p>
                    <code>OnMailerAfterRecordChangeEmailSend</code> hook is triggered
                    after a verification email was successfully sent to an auth record.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                $app.onMailerAfterRecordChangeEmailSend().add((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnMailerAfterRecordChangeEmailSend().Add(func(e *core.MailerRecordEvent) error {
                        log.Println(e.MailClient)
                        log.Println(e.Message)
                        log.Println(e.Record)
                        log.Println(e.Meta)

                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },

    "Record CRUD API hooks": {
        OnRecordsListRequest: {
            html: `
                <p>
                    <code>OnRecordsListRequest</code> hook is triggered on each API Records list request.
                    Could be used to validate or modify the response before returning it to the client.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordsListRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.result)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordsListRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.result)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordsListRequest().Add(func(e *core.RecordsListEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Result)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordsListRequest("users", "articles").Add(func(e *core.RecordsListEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Result)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordViewRequest: {
            html: `
                <p>
                    <code>OnRecordViewRequest</code> hook is triggered on each API Record view request.
                    Could be used to validate or modify the response before returning it to the client.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordViewRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordViewRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordViewRequest().Add(func(e *core.RecordViewEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordViewRequest("users", "articles").Add(func(e *core.RecordViewEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeCreateRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeCreateRequest</code> hook is triggered before each API Record
                    create request (after request data load and before model persistence).
                    <br/>
                    Could be used to additionally validate the request data or implement
                    completely different persistence behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordBeforeCreateRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordBeforeCreateRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordBeforeCreateRequest("users", "articles").Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterCreateRequest: {
            html: `
                <p>
                    <code>OnRecordAfterCreateRequest</code> hook is triggered after each
                    successful API Record create request.
                    <br/>
                    Could be used to additionally validate the request data or implement
                    completely different persistence behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordAfterCreateRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordAfterCreateRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordAfterCreateRequest("users", "articles").Add(func(e *core.RecordCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeUpdateRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeUpdateRequest</code> hook is triggered before each API Record
                    update request (after request data load and before model persistence).
                    <br/>
                    Could be used to additionally validate the request data or implement
                    completely different persistence behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordBeforeUpdateRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordBeforeUpdateRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordBeforeUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordBeforeUpdateRequest("users", "articles").Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterUpdateRequest: {
            html: `
                <p>
                    <code>OnRecordAfterUpdateRequest</code> hook is triggered
                    after each successful API Record update request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordAfterUpdateRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordAfterUpdateRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordAfterUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordAfterUpdateRequest("users", "articles").Add(func(e *core.RecordUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.UploadedFiles)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeDeleteRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeDeleteRequest</code> hook is triggered before each API Record
                    delete request (after model load and before actual deletion).
                    <br/>
                    Could be used to additionally validate the request data or implement
                    completely different delete behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordBeforeDeleteRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordBeforeDeleteRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordBeforeDeleteRequest().Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordBeforeDeleteRequest("users", "articles").Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterDeleteRequest: {
            html: `
                <p>
                    <code>OnRecordAfterDeleteRequest</code> hook is triggered
                    after each successful API Record delete request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every collection
                $app.onRecordAfterDeleteRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "articles" collections
                $app.onRecordAfterDeleteRequest("users", "articles").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every collection
                    app.OnRecordAfterDeleteRequest().Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "articles" collections
                    app.OnRecordAfterDeleteRequest("users", "articles").Add(func(e *core.RecordDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },

    "Record Auth API hooks": {
        OnRecordAuthRequest: {
            html: `
                <p>
                    <code>OnRecordAuthRequest</code> hook is triggered on each successful API
                    record authentication request (sign-in, token refresh, etc.).
                    Could be used to additionally validate or modify the authenticated
                    record data and token.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAuthRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.token)
                    console.log(e.meta)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAuthRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.token)
                    console.log(e.meta)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAuthRequest().Add(func(e *core.RecordAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.Token)
                        log.Println(e.Meta)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAuthRequest("users", "managers").Add(func(e *core.RecordAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.Token)
                        log.Println(e.Meta)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeAuthWithPasswordRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeAuthWithPasswordRequest</code> hook is triggered before each Record
                    auth with password API request (after request data load and before password validation).
                    Could be used to implement for example a custom password validation
                    or to locate a different Record model (by reassigning <code>RecordAuthWithPasswordEvent.Record</code>).
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeAuthWithPasswordRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record) // could be null
                    console.log(e.identity)
                    console.log(e.password)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeAuthWithPasswordRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record) // could be null
                    console.log(e.identity)
                    console.log(e.password)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeAuthWithPasswordRequest().Add(func(e *core.RecordAuthWithPasswordEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record) // could be nil
                        log.Println(e.Identity)
                        log.Println(e.Password)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeAuthWithPasswordRequest("users", "managers").Add(func(e *core.RecordAuthWithPasswordEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record) // could be nil
                        log.Println(e.Identity)
                        log.Println(e.Password)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterAuthWithPasswordRequest: {
            html: `
                <p>
                    <code>OnRecordAfterAuthWithPasswordRequest</code> hook is triggered hook is triggered after each
                    successful Record auth with password API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterAuthWithPasswordRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.identity)
                    console.log(e.password)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterAuthWithPasswordRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.identity)
                    console.log(e.password)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterAuthWithPasswordRequest().Add(func(e *core.RecordAuthWithPasswordEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.Identity)
                        log.Println(e.Password)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterAuthWithPasswordRequest("users", "managers").Add(func(e *core.RecordAuthWithPasswordEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.Identity)
                        log.Println(e.Password)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeAuthWithOAuth2Request: {
            html: `
                <p>
                    <code>OnRecordBeforeAuthWithOAuth2Request</code> hook is triggered before each Record
                    OAuth2 sign-in/sign-up API request (after token exchange and before external provider linking).
                </p>
                <p>
                    If the <code>RecordAuthWithOAuth2Event.Record</code> is not set,
                    then the OAuth2 request will try to create a new auth Record.
                </p>
                <p>
                    To assign or link a different existing record model you can
                    change the <code>RecordAuthWithOAuth2Event.Record</code> field.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeAuthWithOAuth2Request().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record) // could be null
                    console.log(e.oauth2User)
                    console.log(e.isNewRecord)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeAuthWithOAuth2Request("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record) // could be null
                    console.log(e.oauth2User)
                    console.log(e.isNewRecord)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeAuthWithOAuth2Request().Add(func(e *core.RecordAuthWithOAuth2Event) error {
                        log.Println(e.HttpContext)
                        log.Println(e.ProviderName)
                        log.Println(e.ProviderClient)
                        log.Println(e.Record) // could be nil
                        log.Println(e.OAuth2User)
                        log.Println(e.IsNewRecord)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeAuthWithOAuth2Request("users", "managers").Add(func(e *core.RecordAuthWithOAuth2Event) error {
                        log.Println(e.HttpContext)
                        log.Println(e.ProviderName)
                        log.Println(e.ProviderClient)
                        log.Println(e.Record) // could be nil
                        log.Println(e.OAuth2User)
                        log.Println(e.IsNewRecord)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterAuthWithOAuth2Request: {
            html: `
                <p>
                    <code>OnRecordAfterAuthWithOAuth2Request</code> hook is triggered
                    after each successful Record OAuth2 API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterAuthWithOAuth2Request().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record)
                    console.log(e.oauth2User)
                    console.log(e.isNewRecord)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterAuthWithOAuth2Request("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record)
                    console.log(e.oauth2User)
                    console.log(e.isNewRecord)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterAuthWithOAuth2Request().Add(func(e *core.RecordAuthWithOAuth2Event) error {
                        log.Println(e.HttpContext)
                        log.Println(e.ProviderName)
                        log.Println(e.ProviderClient)
                        log.Println(e.Record)
                        log.Println(e.OAuth2User)
                        log.Println(e.IsNewRecord)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterAuthWithOAuth2Request("users", "managers").Add(func(e *core.RecordAuthWithOAuth2Event) error {
                        log.Println(e.HttpContext)
                        log.Println(e.ProviderName)
                        log.Println(e.ProviderClient)
                        log.Println(e.Record)
                        log.Println(e.OAuth2User)
                        log.Println(e.IsNewRecord)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeAuthRefreshRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeAuthRefreshRequest</code> hook is triggered before each Record
                    auth refresh API request (right before generating a new auth token).
                    Could be used to additionally validate the request data or implement
                    completely different auth refresh behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeAuthRefreshRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeAuthRefreshRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeAuthRefreshRequest().Add(func(e *core.RecordAuthRefreshEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeAuthRefreshRequest("users", "managers").Add(func(e *core.RecordAuthRefreshEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterAuthRefreshRequest: {
            html: `
                <p>
                    <code>OnRecordAfterAuthRefreshRequest</code> hook is triggered after each
                    successful auth refresh API request (right after generating a new auth token).
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterAuthRefreshRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterAuthRefreshRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterAuthRefreshRequest().Add(func(e *core.RecordAuthRefreshEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterAuthRefreshRequest("users", "managers").Add(func(e *core.RecordAuthRefreshEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordListExternalAuthsRequest: {
            html: `
                <p>
                    <code>OnRecordListExternalAuthsRequest</code> hook is triggered on each API record external auths list request.
                    Could be used to validate or modify the response before returning it to the client.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordListExternalAuthsRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuths)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordListExternalAuthsRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuths)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordListExternalAuthsRequest().Add(func(e *core.RecordListExternalAuthsEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.ExternalAuths)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordListExternalAuthsRequest("users", "managers").Add(func(e *core.RecordListExternalAuthsEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.ExternalAuths)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeUnlinkExternalAuthRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeUnlinkExternalAuthRequest</code> hook is triggered before each API record
                    external auth unlink request (after models load and before the actual relation deletion).
                    Could be used to additionally validate the request data or implement
                    completely different delete behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.OnRecordAfterUnlinkExternalAuthRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeUnlinkExternalAuthRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeUnlinkExternalAuthRequest().Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeUnlinkExternalAuthRequest("users", "managers").Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterUnlinkExternalAuthRequest: {
            html: `
                <p>
                    <code>OnRecordAfterUnlinkExternalAuthRequest</code> hook is triggered
                    after each successful API record external auth unlink request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterUnlinkExternalAuthRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterUnlinkExternalAuthRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterUnlinkExternalAuthRequest().Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterUnlinkExternalAuthRequest("users", "managers").Add(func(e *core.RecordUnlinkExternalAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.ExternalAuth)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeRequestPasswordResetRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeRequestPasswordResetRequest</code> hook is triggered before each Record
                    request password reset API request (after request data load and before sending the reset email).
                    Could be used to additionally validate the request data or implement
                    completely different password reset behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeRequestPasswordResetRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeRequestPasswordResetRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeRequestPasswordResetRequest().Add(func(e *core.RecordRequestPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeRequestPasswordResetRequest("users", "managers").Add(func(e *core.RecordRequestPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterRequestPasswordResetRequest: {
            html: `
                <p>
                    <code>OnRecordAfterRequestPasswordResetRequest</code> hook is triggered
                    after each successful request password reset API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterRequestPasswordResetRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterRequestPasswordResetRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterRequestPasswordResetRequest().Add(func(e *core.RecordRequestPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterRequestPasswordResetRequest("users", "managers").Add(func(e *core.RecordRequestPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeConfirmPasswordResetRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeConfirmPasswordResetRequest</code> hook is triggered before each Record
                    confirm password reset API request (after request data load and before persistence).
                    Could be used to additionally validate the request data or implement
                    completely different persistence behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeConfirmPasswordResetRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeConfirmPasswordResetRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeConfirmPasswordResetRequest().Add(func(e *core.RecordConfirmPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeConfirmPasswordResetRequest("users", "managers").Add(func(e *core.RecordConfirmPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterConfirmPasswordResetRequest: {
            html: `
                <p>
                    <code>OnRecordAfterConfirmPasswordResetRequest</code> hook is triggered
                    after each successful confirm password reset API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterConfirmPasswordResetRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterConfirmPasswordResetRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterConfirmPasswordResetRequest().Add(func(e *core.RecordConfirmPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterConfirmPasswordResetRequest("users", "managers").Add(func(e *core.RecordConfirmPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeRequestVerificationRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeRequestVerificationRequest</code> hook is triggered before each Record
                    request verification API request (after request data load and before sending the verification email).
                    Could be used to additionally validate the loaded request data or implement
                    completely different verification behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeRequestVerificationRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeRequestVerificationRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeRequestVerificationRequest().Add(func(e *core.RecordRequestVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeRequestVerificationRequest("users", "managers").Add(func(e *core.RecordRequestVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterRequestVerificationRequest: {
            html: `
                <p>
                    <code>OnRecordAfterRequestVerificationRequest</code>  hook is triggered
                    after each successful request verification API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterRequestVerificationRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterRequestVerificationRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterRequestVerificationRequest().Add(func(e *core.RecordRequestVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterRequestVerificationRequest("users", "managers").Add(func(e *core.RecordRequestVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeConfirmVerificationRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeConfirmVerificationRequest</code> hook is triggered before each Record
                    confirm verification API request (after request data load and before persistence).
                    Could be used to additionally validate the request data or implement
                    completely different persistence behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeConfirmVerificationRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeConfirmVerificationRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeConfirmVerificationRequest().Add(func(e *core.RecordConfirmVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeConfirmVerificationRequest("users", "managers").Add(func(e *core.RecordConfirmVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterConfirmVerificationRequest: {
            html: `
                <p>
                    <code>OnRecordAfterConfirmVerificationRequest</code> hook is triggered after each
                    successful confirm verification API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterConfirmVerificationRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterConfirmVerificationRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterConfirmVerificationRequest().Add(func(e *core.RecordConfirmVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterConfirmVerificationRequest("users", "managers").Add(func(e *core.RecordConfirmVerificationEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordBeforeRequestEmailChangeRequest: {
            html: `
                <p>
                    <code>OnRecordBeforeRequestEmailChangeRequest</code> hook is triggered before each Record request email change API request
                    (after request data load and before sending the email link to confirm the change).
                    Could be used to additionally validate the request data or implement
                    completely different request email change behavior.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordBeforeRequestEmailChangeRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordBeforeRequestEmailChangeRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordBeforeRequestEmailChangeRequest().Add(func(e *core.RecordRequestEmailChangeEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordBeforeRequestEmailChangeRequest("users", "managers").Add(func(e *core.RecordRequestEmailChangeEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRecordAfterRequestEmailChangeRequest: {
            html: `
                <p>
                    <code>OnRecordAfterRequestEmailChangeRequest</code> hook is triggered
                    after each successful request email change API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth collection
                $app.onRecordAfterRequestEmailChangeRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                $app.onRecordAfterRequestEmailChangeRequest("users", "managers").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth collection
                    app.OnRecordAfterRequestEmailChangeRequest().Add(func(e *core.RecordRequestEmailChangeEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    // fires only for "users" and "managers" auth collections
                    app.OnRecordAfterRequestEmailChangeRequest("users", "managers").Add(func(e *core.RecordRequestEmailChangeEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },

    "Realtime API hooks": {
        OnRealtimeConnectRequest: {
            html: `
                <code>OnRealtimeConnectRequest</code> hook is triggered right before establishing
                the SSE client connection.
            `,
            js: `
                $app.onRealtimeConnectRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRealtimeConnectRequest().Add(func(e *core.RealtimeConnectEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Client.Id())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRealtimeDisconnectRequest: {
            html: `
                <code>OnRealtimeDisconnectRequest</code> hook is triggered on disconnected/interrupted
                SSE client connection.
            `,
            js: `
                $app.onRealtimeDisconnectRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRealtimeDisconnectRequest().Add(func(e *core.RealtimeDisconnectEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Client.Id())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRealtimeBeforeMessageSend: {
            html: `
                <p>
                    <code>OnRealtimeBeforeMessageSend</code> hook is triggered right before sending
                    an SSE message to a client.
                </p>
                <p>
                    Returning <code>hook.StopPropagation</code> will prevent sending the message.
                    Returning any other error will close the realtime connection.
                </p>
            `,
            js: `
                $app.onRealtimeBeforeMessageSend().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.message)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRealtimeBeforeMessageSend().Add(func(e *core.RealtimeMessageEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Client.Id())
                        log.Println(e.Message)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRealtimeAfterMessageSend: {
            html: `
                <code>OnRealtimeAfterMessageSend</code> hook is triggered right after sending
                an SSE message to a client.
            `,
            js: `
                $app.onRealtimeAfterMessageSend().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.message)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRealtimeAfterMessageSend().Add(func(e *core.RealtimeMessageEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Client.Id())
                        log.Println(e.Message)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRealtimeBeforeSubscribeRequest: {
            html: `
                <code>OnRealtimeBeforeSubscribeRequest</code> hook is triggered before changing
                the client subscriptions, allowing you to further validate and
                modify the submitted change.
            `,
            js: `
                $app.onRealtimeBeforeSubscribeRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.subscriptions)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRealtimeBeforeSubscribeRequest().Add(func(e *core.RealtimeSubscribeEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Client.Id())
                        log.Println(e.Subscriptions)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnRealtimeAfterSubscribeRequest: {
            html: `
                <code>OnRealtimeAfterSubscribeRequest</code> hook is triggered after the client
                subscriptions were successfully changed.
            `,
            js: `
                $app.onRealtimeAfterSubscribeRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.subscriptions)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnRealtimeAfterSubscribeRequest().Add(func(e *core.RealtimeSubscribeEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Client.Id())
                        log.Println(e.Subscriptions)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },

    "File API hooks": {
        OnFileDownloadRequest: {
            html: `
                <code>OnFileDownloadRequest</code> hook is triggered before each API File download request.
                Could be used to validate or modify the file response before returning it to the client.
            `,
            js: `
                $app.onFileDownloadRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.fileField)
                    console.log(e.servedPath)
                    console.log(e.servedName)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnFileDownloadRequest().Add(func(e *core.FileDownloadEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Record)
                        log.Println(e.FileField)
                        log.Println(e.ServedPath)
                        log.Println(e.ServedName)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnFileBeforeTokenRequest: {
            html: `
                <p>
                    <code>OnFileBeforeTokenRequest</code> hook is triggered before each file
                    token API request.
                </p>
                <p>
                    If no token or model was submitted, e.Model and e.Token will be empty,
                    allowing you to implement your own custom model file auth implementation.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth model
                $app.onFileBeforeTokenRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                })

                // fires only for "users"
                $app.onFileBeforeTokenRequest("users").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth model
                    app.OnFileBeforeTokenRequest().Add(func(e *core.FileTokenEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Token)
                        return nil
                    })

                    // fires only for "users"
                    app.OnFileBeforeTokenRequest("users").Add(func(e *core.FileTokenEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Token)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
        OnFileAfterTokenRequest: {
            html: `
                <p>
                    <code>OnFileAfterTokenRequest</code> hook is triggered after each
                    successful file token API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,
            js: `
                // fires for every auth model
                $app.onFileAfterTokenRequest().add((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                })

                // fires only for "users"
                $app.onFileAfterTokenRequest("users").add((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                })
            `,
            go: `
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // fires for every auth model
                    app.OnFileAfterTokenRequest().Add(func(e *core.FileTokenEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Token)
                        return nil
                    })

                    // fires only for "users"
                    app.OnFileAfterTokenRequest("users").Add(func(e *core.FileTokenEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Token)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `,
        },
    },
}
