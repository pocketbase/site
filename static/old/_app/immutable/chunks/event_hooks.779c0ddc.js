const e={"App hooks":{OnBeforeBootstrap:{html:`
                <code>OnBeforeBootstrap</code> hook is triggered before initializing the main
                application resources (eg. before db open and initial settings load).
            `,js:`
                onBeforeBootstrap((e) => {
                    console.log(e.app)
                })
            `,go:`
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
            `},OnAfterBootstrap:{html:`
                <code>OnAfterBootstrap</code> hook is triggered after initializing the main
                application resources (eg. after db open and initial settings load).
            `,js:`
                onAfterBootstrap((e) => {
                    console.log(e.app)
                })
            `,go:`
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
            `},OnBeforeServe:{html:`
                <code>OnBeforeServe</code> hook is triggered before serving the internal router
                (<a href="https://github.com/labstack/echo" target="_blank"rel="noreferrer noopener" class="txt-bold">echo</a>),
                allowing you to adjust its options and attach new routes or middlewares.
            `,js:"",go:`
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
            `},OnBeforeApiError:{html:`
                <code>OnBeforeApiError</code> hook is triggered right before sending an error API
                response to the client, allowing you to further modify the error data
                or to return a completely different API response.
            `,js:`
                onBeforeApiError((e) => {
                    console.log(e.httpContext)
                    console.log(e.error)
                })
            `,go:`
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
            `},OnAfterApiError:{html:`
                <code>OnAfterApiError</code> hook is triggered right after sending an error API
                response to the client.
                It could be used for example to log the final API error in external services.
            `,js:`
                onAfterApiError((e) => {
                    console.log(e.httpContext)
                    console.log(e.error)
                })
            `,go:`
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
            `},OnTerminate:{html:`
                <code>OnTerminate</code> hook is triggered when the app is in the process
                of being terminated (eg. on <code>SIGTERM</code> signal).
                <br />
                Note that the app could be terminated abruptly without awaiting the hook completion.
            `,js:`
                onTerminate((e) => {
                    console.log("terminating...")
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnTerminate().Add(func(e *core.TerminateEvent) error {
                        log.Println("terminating...")
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}},"DB hooks":{OnModelBeforeCreate:{html:`
                <p>
                    <code>OnModelBeforeCreate</code> hook is triggered before inserting a new
                    model in the DB, allowing you to modify or validate the stored data.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every db model
                onModelBeforeCreate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                onModelBeforeCreate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                }, "users", "members")
            `,go:`
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
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelBeforeCreate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnModelAfterCreate:{html:`
                <p>
                    <code>OnModelAfterCreate</code> hook is triggered after successfully
                    inserting a new model in the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every db model
                onModelAfterCreate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                onModelAfterCreate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                }, "users", "members")
            `,go:`
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
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelAfterCreate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnModelBeforeUpdate:{html:`
                <p>
                    <code>OnModelBeforeUpdate</code> hook is triggered before updating existing
                    model in the DB, allowing you to modify or validate the stored data.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every db model
                onModelBeforeUpdate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                onModelBeforeUpdate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                }, "users", "members")
            `,go:`
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
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelBeforeUpdate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnModelAfterUpdate:{html:`
                <p>
                    <code>OnModelAfterUpdate</code> hook is triggered after successfully updating
                    existing model in the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every db model
                onModelAfterUpdate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                onModelAfterUpdate((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                }, "users", "members")
            `,go:`
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
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelAfterUpdate("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnModelBeforeDelete:{html:`
                <p>
                    <code>OnModelBeforeDelete</code> hook is triggered before deleting an
                    existing model from the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every db model
                onModelBeforeDelete((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                onModelBeforeDelete((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                }, "users", "members")
            `,go:`
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
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelBeforeDelete("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnModelAfterDelete:{html:`
                <p>
                    <code>OnModelAfterDelete</code> hook is triggered after successfully
                    deleting an existing model from the DB.
                </p>
                <p>
                    If the optional "tags" list (table names and/or the Collection id for Record models)
                    is specified, then all event handlers registered via the created hook
                    will be triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every db model
                onModelAfterDelete((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                })

                // fires only for "users" and "members"
                onModelAfterDelete((e) => {
                    console.log(e.model.tableName())
                    console.log(e.model.id)
                }, "users", "members")
            `,go:`
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
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    // fires only for "users" and "members"
                    app.OnModelAfterDelete("users", "members").Add(func(e *core.ModelEvent) error {
                        log.Println(e.Model.TableName())
                        log.Println(e.Model.GetId())
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}},"Mailer hooks":{OnMailerBeforeAdminResetPasswordSend:{html:`
                <code>OnMailerBeforeAdminResetPasswordSend</code> hook is triggered right
                before sending a password reset email to an admin, allowing you
                to inspect and customize the email message that is being sent.
            `,js:`
                onMailerBeforeAdminResetPasswordSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.admin)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,go:`
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
            `},OnMailerAfterAdminResetPasswordSend:{html:`
                <code>OnMailerAfterAdminResetPasswordSend</code> hook is triggered after
                admin password reset email was successfully sent.
            `,js:`
                onMailerAfterAdminResetPasswordSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.admin)
                    console.log(e.meta)
                })
            `,go:`
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
            `},OnMailerBeforeRecordResetPasswordSend:{html:`
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
            `,js:`
                onMailerBeforeRecordResetPasswordSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,go:`
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
            `},OnMailerAfterRecordResetPasswordSend:{html:`
                <p>
                    <code>OnMailerAfterRecordResetPasswordSend</code> hook is triggered
                    after an auth record password reset email was successfully sent.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                onMailerAfterRecordResetPasswordSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)
                })
            `,go:`
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
            `},OnMailerBeforeRecordVerificationSend:{html:`
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
            `,js:`
                onMailerBeforeRecordVerificationSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,go:`
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
            `},OnMailerAfterRecordVerificationSend:{html:`
                <p>
                    <code>OnMailerAfterRecordVerificationSend</code> hook is triggered
                    after a verification email was successfully sent to an auth record.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                onMailerAfterRecordVerificationSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)
                })
            `,go:`
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
            `},OnMailerBeforeRecordChangeEmailSend:{html:`
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
            `,js:`
                onMailerBeforeRecordChangeEmailSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)

                    // change the mail subject
                    e.message.subject = "new subject"
                })
            `,go:`
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
            `},OnMailerAfterRecordChangeEmailSend:{html:`
                <p>
                    <code>OnMailerAfterRecordChangeEmailSend</code> hook is triggered
                    after a verification email was successfully sent to an auth record.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                onMailerAfterRecordChangeEmailSend((e) => {
                    console.log(e.mailClient)
                    console.log(e.message)
                    console.log(e.record)
                    console.log(e.meta)
                })
            `,go:`
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
            `}},"Record CRUD API hooks":{OnRecordsListRequest:{html:`
                <p>
                    <code>OnRecordsListRequest</code> hook is triggered on each API Records list request.
                    Could be used to validate or modify the response before returning it to the client.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every collection
                onRecordsListRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.result)
                })

                // fires only for "users" and "articles" collections
                onRecordsListRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.result)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordViewRequest:{html:`
                <p>
                    <code>OnRecordViewRequest</code> hook is triggered on each API Record view request.
                    Could be used to validate or modify the response before returning it to the client.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every collection
                onRecordViewRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "articles" collections
                onRecordViewRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordBeforeCreateRequest:{html:`
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
            `,js:`
                // fires for every collection
                onRecordBeforeCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                onRecordBeforeCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordAfterCreateRequest:{html:`
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
            `,js:`
                // fires for every collection
                onRecordAfterCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                onRecordAfterCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordBeforeUpdateRequest:{html:`
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
            `,js:`
                // fires for every collection
                onRecordBeforeUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                onRecordBeforeUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordAfterUpdateRequest:{html:`
                <p>
                    <code>OnRecordAfterUpdateRequest</code> hook is triggered
                    after each successful API Record update request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every collection
                onRecordAfterUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                })

                // fires only for "users" and "articles" collections
                onRecordAfterUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.uploadedFiles)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordBeforeDeleteRequest:{html:`
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
            `,js:`
                // fires for every collection
                onRecordBeforeDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "articles" collections
                onRecordBeforeDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "articles")
            `,go:`
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
            `},OnRecordAfterDeleteRequest:{html:`
                <p>
                    <code>OnRecordAfterDeleteRequest</code> hook is triggered
                    after each successful API Record delete request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every collection
                onRecordAfterDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "articles" collections
                onRecordAfterDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "articles")
            `,go:`
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
            `}},"Record Auth API hooks":{OnRecordAuthRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.token)
                    console.log(e.meta)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.token)
                    console.log(e.meta)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeAuthWithPasswordRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeAuthWithPasswordRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record) // could be null
                    console.log(e.identity)
                    console.log(e.password)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeAuthWithPasswordRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record) // could be null
                    console.log(e.identity)
                    console.log(e.password)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterAuthWithPasswordRequest:{html:`
                <p>
                    <code>OnRecordAfterAuthWithPasswordRequest</code> hook is triggered after each
                    successful Record auth with password API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterAuthWithPasswordRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.identity)
                    console.log(e.password)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterAuthWithPasswordRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.identity)
                    console.log(e.password)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeAuthWithOAuth2Request:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeAuthWithOAuth2Request((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record) // could be null
                    console.log(e.oAuth2User)
                    console.log(e.isNewRecord)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeAuthWithOAuth2Request((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record) // could be null
                    console.log(e.oAuth2User)
                    console.log(e.isNewRecord)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterAuthWithOAuth2Request:{html:`
                <p>
                    <code>OnRecordAfterAuthWithOAuth2Request</code> hook is triggered
                    after each successful Record OAuth2 API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterAuthWithOAuth2Request((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record)
                    console.log(e.oAuth2User)
                    console.log(e.isNewRecord)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterAuthWithOAuth2Request((e) => {
                    console.log(e.httpContext)
                    console.log(e.providerName)
                    console.log(e.providerClient)
                    console.log(e.record)
                    console.log(e.oAuth2User)
                    console.log(e.isNewRecord)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeAuthRefreshRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeAuthRefreshRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeAuthRefreshRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterAuthRefreshRequest:{html:`
                <p>
                    <code>OnRecordAfterAuthRefreshRequest</code> hook is triggered after each
                    successful auth refresh API request (right after generating a new auth token).
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterAuthRefreshRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterAuthRefreshRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordListExternalAuthsRequest:{html:`
                <p>
                    <code>OnRecordListExternalAuthsRequest</code> hook is triggered on each API record external auths list request.
                    Could be used to validate or modify the response before returning it to the client.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordListExternalAuthsRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuths)
                })

                // fires only for "users" and "managers" auth collections
                onRecordListExternalAuthsRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuths)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeUnlinkExternalAuthRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordAfterUnlinkExternalAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeUnlinkExternalAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterUnlinkExternalAuthRequest:{html:`
                <p>
                    <code>OnRecordAfterUnlinkExternalAuthRequest</code> hook is triggered
                    after each successful API record external auth unlink request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterUnlinkExternalAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterUnlinkExternalAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.externalAuth)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeRequestPasswordResetRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeRequestPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeRequestPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterRequestPasswordResetRequest:{html:`
                <p>
                    <code>OnRecordAfterRequestPasswordResetRequest</code> hook is triggered
                    after each successful request password reset API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterRequestPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterRequestPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeConfirmPasswordResetRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeConfirmPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeConfirmPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterConfirmPasswordResetRequest:{html:`
                <p>
                    <code>OnRecordAfterConfirmPasswordResetRequest</code> hook is triggered
                    after each successful confirm password reset API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterConfirmPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterConfirmPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeRequestVerificationRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeRequestVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeRequestVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterRequestVerificationRequest:{html:`
                <p>
                    <code>OnRecordAfterRequestVerificationRequest</code>  hook is triggered
                    after each successful request verification API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterRequestVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterRequestVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeConfirmVerificationRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeConfirmVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeConfirmVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterConfirmVerificationRequest:{html:`
                <p>
                    <code>OnRecordAfterConfirmVerificationRequest</code> hook is triggered after each
                    successful confirm verification API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterConfirmVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterConfirmVerificationRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordBeforeRequestEmailChangeRequest:{html:`
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
            `,js:`
                // fires for every auth collection
                onRecordBeforeRequestEmailChangeRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordBeforeRequestEmailChangeRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `},OnRecordAfterRequestEmailChangeRequest:{html:`
                <p>
                    <code>OnRecordAfterRequestEmailChangeRequest</code> hook is triggered
                    after each successful request email change API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth collection
                onRecordAfterRequestEmailChangeRequest(e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                })

                // fires only for "users" and "managers" auth collections
                onRecordAfterRequestEmailChangeRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                }, "users", "managers")
            `,go:`
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
            `}},"Realtime API hooks":{OnRealtimeConnectRequest:{html:`
                <code>OnRealtimeConnectRequest</code> hook is triggered right before establishing
                the SSE client connection.
            `,js:`
                onRealtimeConnectRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.idleTimeout) // in nanosec
                })
            `,go:`
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
                        log.Println(e.IdleTimeout)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnRealtimeDisconnectRequest:{html:`
                <code>OnRealtimeDisconnectRequest</code> hook is triggered on disconnected/interrupted
                SSE client connection.
            `,js:`
                onRealtimeDisconnectRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                })
            `,go:`
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
            `},OnRealtimeBeforeMessageSend:{html:`
                <p>
                    <code>OnRealtimeBeforeMessageSend</code> hook is triggered right before sending
                    an SSE message to a client.
                </p>
                <p>
                    Returning <code>hook.StopPropagation</code> will prevent sending the message.
                    Returning any other error will close the realtime connection.
                </p>
            `,js:`
                onRealtimeBeforeMessageSend((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.message)
                })
            `,go:`
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
            `},OnRealtimeAfterMessageSend:{html:`
                <code>OnRealtimeAfterMessageSend</code> hook is triggered right after sending
                an SSE message to a client.
            `,js:`
                onRealtimeAfterMessageSend((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.message)
                })
            `,go:`
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
            `},OnRealtimeBeforeSubscribeRequest:{html:`
                <code>OnRealtimeBeforeSubscribeRequest</code> hook is triggered before changing
                the client subscriptions, allowing you to further validate and
                modify the submitted change.
            `,js:`
                onRealtimeBeforeSubscribeRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.subscriptions)
                })
            `,go:`
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
            `},OnRealtimeAfterSubscribeRequest:{html:`
                <code>OnRealtimeAfterSubscribeRequest</code> hook is triggered after the client
                subscriptions were successfully changed.
            `,js:`
                onRealtimeAfterSubscribeRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.client.id())
                    console.log(e.subscriptions)
                })
            `,go:`
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
            `}},"File API hooks":{OnFileDownloadRequest:{html:`
                <code>OnFileDownloadRequest</code> hook is triggered before each API File download request.
                Could be used to validate or modify the file response before returning it to the client.
            `,js:`
                onFileDownloadRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.record)
                    console.log(e.fileField)
                    console.log(e.servedPath)
                    console.log(e.servedName)
                })
            `,go:`
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
            `},OnFileBeforeTokenRequest:{html:`
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
            `,js:`
                // fires for every auth model
                onFileBeforeTokenRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                })

                // fires only for "users"
                onFileBeforeTokenRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                }, "users")
            `,go:`
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
            `},OnFileAfterTokenRequest:{html:`
                <p>
                    <code>OnFileAfterTokenRequest</code> hook is triggered after each
                    successful file token API request.
                </p>
                <p>
                    If the optional "tags" list (Collection ids or names) is specified,
                    then all event handlers registered via the created hook will be
                    triggered and called only if their event data origin matches the tags.
                </p>
            `,js:`
                // fires for every auth model
                onFileAfterTokenRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                })

                // fires only for "users"
                onFileAfterTokenRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.token)
                }, "users")
            `,go:`
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
            `}},"Collection API hooks":{OnCollectionsListRequest:{html:`
                <code>OnCollectionsListRequest</code> hook is triggered on each API Collections list request.
                Could be used to validate or modify the response before returning it to the client.
            `,js:`
                onCollectionsListRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collections)
                    console.log(e.result)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionsListRequest().Add(func(e *core.CollectionsListEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collections)
                        log.Println(e.Result)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionViewRequest:{html:`
                <code>OnCollectionViewRequest</code> hook is triggered on each API Collection view request.
                Could be used to validate or modify the response before returning it to the client.
            `,js:`
                onCollectionViewRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionViewRequest().Add(func(e *core.CollectionViewEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionBeforeCreateRequest:{html:`
                <code>OnCollectionBeforeCreateRequest</code> hook is triggered before each API Collection
                create request (after request data load and before model persistence).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different persistence behavior.
            `,js:`
                onCollectionBeforeCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionBeforeCreateRequest().Add(func(e *core.CollectionCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionAfterCreateRequest:{html:`
                <code>OnCollectionAfterCreateRequest</code> hook is triggered after each
                successful API Collection create request.
            `,js:`
                onCollectionAfterCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionAfterCreateRequest().Add(func(e *core.CollectionCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionBeforeUpdateRequest:{html:`
                <code>OnCollectionBeforeUpdateRequest</code> hook is triggered before each API Collection
                update request (after request data load and before model persistence).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different persistence behavior.
            `,js:`
                onCollectionBeforeUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionBeforeUpdateRequest().Add(func(e *core.CollectionUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionAfterUpdateRequest:{html:`
                <code>OnCollectionAfterUpdateRequest</code> hook is triggered after each
                successful API Collection update request.
            `,js:`
                onCollectionAfterUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionAfterUpdateRequest().Add(func(e *core.CollectionUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionBeforeDeleteRequest:{html:`
                <code>OnCollectionBeforeDeleteRequest</code> hook is triggered before each API
                Collection delete request (after model load and before actual deletion).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different delete behavior.
            `,js:`
                onCollectionBeforeDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionBeforeDeleteRequest().Add(func(e *core.CollectionDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionAfterDeleteRequest:{html:`
                <code>OnCollectionAfterDeleteRequest</code> hook is triggered after each
                successful API Collection delete request.
            `,js:`
                onCollectionAfterDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collection)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionAfterDeleteRequest().Add(func(e *core.CollectionDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collection)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionsBeforeImportRequest:{html:`
                <code>OnCollectionsBeforeImportRequest</code> hook is triggered before each API
                collections import request (after request data load and before the actual import).
                <br/>
                Could be used to additionally validate the imported collections or
                to implement completely different import behavior.
            `,js:`
                onCollectionsBeforeImportRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collections)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionsBeforeImportRequest().Add(func(e *core.CollectionsImportEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collections)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnCollectionsAfterImportRequest:{html:`
                <code>OnCollectionsAfterImportRequest</code> hook is triggered after each
                successful API collections import request.
            `,js:`
                onCollectionsAfterImportRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.collections)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnCollectionsAfterImportRequest().Add(func(e *core.CollectionsImportEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Collections)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}},"Settings API hooks":{OnSettingsListRequest:{html:`
                <code>OnSettingsListRequest</code> hook is triggered on each successful
                API Settings list request.
                <br/>
                Could be used to validate or modify the response before
                returning it to the client.
            `,js:`
                onSettingsListRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.redactedSettings)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnSettingsListRequest().Add(func(e *core.SettingsListEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.RedactedSettings)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnSettingsBeforeUpdateRequest:{html:`
                <code>OnSettingsBeforeUpdateRequest</code> hook is triggered on each successful
                API Settings list request.
                <br/>
                Could be used to validate or modify the response before
                returning it to the client.
            `,js:`
                onSettingsBeforeUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.oldSettings)
                    console.log(e.newSettings)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnSettingsBeforeUpdateRequest().Add(func(e *core.SettingsUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.OldSettings)
                        log.Println(e.NewSettings)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnSettingsAfterUpdateRequest:{html:`
                <code>OnSettingsAfterUpdateRequest</code> hook is triggered after each
                successful API Settings update request.
            `,js:`
                onSettingsAfterUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.oldSettings)
                    console.log(e.newSettings)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnSettingsAfterUpdateRequest().Add(func(e *core.SettingsUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.OldSettings)
                        log.Println(e.NewSettings)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}},"Admin CRUD API hooks":{OnAdminsListRequest:{html:`
                <code>OnAdminsListRequest</code> hook is triggered on each API Admins list request.
                <br/>
                Could be used to validate or modify the response before returning it to the client.
            `,js:`
                onAdminsListRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admins)
                    console.log(e.result)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminsListRequest().Add(func(e *core.AdminsListEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admins)
                        log.Println(e.Result)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminViewRequest:{html:`
                <code>OnAdminViewRequest</code> hook is triggered on each API Admin view request.
                <br/>
                Could be used to validate or modify the response before returning it to the client.
            `,js:`
                onAdminViewRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminViewRequest().Add(func(e *core.AdminViewEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeCreateRequest:{html:`
                <code>OnAdminBeforeCreateRequest</code> hook is triggered before each API
                Admin create request (after request data load and before model persistence).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different persistence behavior.
            `,js:`
                onAdminBeforeCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeCreateRequest().Add(func(e *core.AdminCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterCreateRequest:{html:`
                <code>OnAdminAfterCreateRequest</code> hook is triggered after each
                successful API Admin create request.
            `,js:`
                onAdminAfterCreateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterCreateRequest().Add(func(e *core.AdminCreateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeUpdateRequest:{html:`
                <code>OnAdminBeforeUpdateRequest</code> hook is triggered before each API
                Admin update request (after request data load and before model persistence).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different persistence behavior.
            `,js:`
                onAdminBeforeUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeUpdateRequest().Add(func(e *core.AdminUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterUpdateRequest:{html:`
                <code>OnAdminAfterUpdateRequest</code> hook is triggered after each
                successful API Admin update request.
            `,js:`
                onAdminAfterUpdateRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterUpdateRequest().Add(func(e *core.AdminUpdateEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeDeleteRequest:{html:`
                <code>OnAdminBeforeDeleteRequest</code> hook is triggered before each API
                Admin delete request (after model load and before actual deletion).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different delete behavior.
            `,js:`
                onAdminBeforeDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeDeleteRequest().Add(func(e *core.AdminDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterDeleteRequest:{html:`
                <code>OnAdminAfterDeleteRequest</code> hook is triggered after each
                successful API Admin delete request.
            `,js:`
                onAdminAfterDeleteRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterDeleteRequest().Add(func(e *core.AdminDeleteEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}},"Admin Auth API hooks":{OnAdminAuthRequest:{html:`
                <code>OnAdminAuthRequest</code> hook is triggered on each successful API Admin
                authentication request (sign-in, token refresh, etc.).
                <br/>
                Could be used to additionally validate or modify the
                authenticated admin data and token.
            `,js:`
                onAdminAuthRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                    console.log(e.token)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAuthRequest().Add(func(e *core.AdminAuthEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        log.Println(e.Token)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeAuthWithPasswordRequest:{html:`
                <code>OnAdminBeforeAuthWithPasswordRequest</code> hook is triggered before each Admin
                auth with password API request (after request data load and before password validation).
                <br/>
                Could be used to implement for example a custom password validation
                or to locate a different Admin identity (by assigning <code>AdminAuthWithPasswordEvent.Admin</code>).
            `,js:`
                onAdminBeforeAuthWithPasswordRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                    console.log(e.identity)
                    console.log(e.password)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeAuthWithPasswordRequest().Add(func(e *core.AdminAuthWithPasswordEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        log.Println(e.Identity)
                        log.Println(e.Password)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterAuthWithPasswordRequest:{html:`
                <code>OnAdminAfterAuthWithPasswordRequest</code> hook is triggered after each
                successful Admin auth with password API request.
            `,js:`
                onAdminAfterAuthWithPasswordRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                    console.log(e.identity)
                    console.log(e.password)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterAuthWithPasswordRequest().Add(func(e *core.AdminAuthWithPasswordEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        log.Println(e.Identity)
                        log.Println(e.Password)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeAuthRefreshRequest:{html:`
                <code>OnAdminBeforeAuthRefreshRequest</code> hook is triggered before each Admin
                auth refresh API request (right before generating a new auth token).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different auth refresh behavior.
            `,js:`
                onAdminBeforeAuthRefreshRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeAuthRefreshRequest().Add(func(e *core.AdminAuthRefreshEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterAuthRefreshRequest:{html:`
                <code>OnAdminAfterAuthRefreshRequest</code> hook is triggered after each
                successful auth refresh API request (right after generating a new auth token).
            `,js:`
                onAdminAfterAuthRefreshRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterAuthRefreshRequest().Add(func(e *core.AdminAuthRefreshEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeRequestPasswordResetRequest:{html:`
                <code>OnAdminBeforeRequestPasswordResetRequest</code> hook is triggered before each Admin
                request password reset API request (after request data load and before sending the reset email).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different password reset behavior.
            `,js:`
                onAdminBeforeRequestPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeRequestPasswordResetRequest().Add(func(e *core.AdminRequestPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterRequestPasswordResetRequest:{html:`
                <code>OnAdminAfterRequestPasswordResetRequest</code> hook is triggered after each
                successful request password reset API request.
            `,js:`
                onAdminBeforeRequestPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterRequestPasswordResetRequest().Add(func(e *core.AdminRequestPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminBeforeConfirmPasswordResetRequest:{html:`
                <code>OnAdminBeforeConfirmPasswordResetRequest</code> hook is triggered before each Admin
                confirm password reset API request (after request data load and before persistence).
                <br/>
                Could be used to additionally validate the request data or implement
                completely different persistence behavior.
            `,js:`
                onAdminBeforeConfirmPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminBeforeConfirmPasswordResetRequest().Add(func(e *core.AdminConfirmPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `},OnAdminAfterConfirmPasswordResetRequest:{html:`
                <code>OnAdminAfterConfirmPasswordResetRequest</code> hook is triggered after each
                successful confirm password reset API request.
            `,js:`
                onAdminAfterConfirmPasswordResetRequest((e) => {
                    console.log(e.httpContext)
                    console.log(e.admin)
                })
            `,go:`
                package main

                import (
                    "log"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    app.OnAdminAfterConfirmPasswordResetRequest().Add(func(e *core.AdminConfirmPasswordResetEvent) error {
                        log.Println(e.HttpContext)
                        log.Println(e.Admin)
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}}};export{e};
