<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
</script>

<p>
    PocketBase exposes several test mocks and stubs (eg. <code>tests.TestApp</code>,
    <code>tests.ApiScenario</code>, <code>tests.MockMultipartData</code>, etc.) to help you write unit and
    integration tests for your app.
</p>
<p>
    You could find more information in the
    <code>
        <a
            href="{import.meta.env.PB_GODOC_URL}/tests"
            class="link-primary txt-bold"
            target="_blank"
            rel="noreferrer noopener"
        >
            github.com/pocketbase/pocketbase/tests
        </a>
    </code>
    sub package, but here is a simple example.
</p>

<Toc />

<HeadingLink title="Setup" />

<p>
    Let's say that we have a custom API route <code>GET /my/hello</code> that requires admin authentication:
</p>
<CodeBlock
    language="go"
    content={`
        // main.go
        package main

        import (
            "log"
            "net/http"

            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
        )

        func bindAppHooks(app core.App) {
            app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                e.Router.AddRoute(echo.Route{
                    Method: http.MethodGet,
                    Path:   "/my/hello",
                    Handler: func(c echo.Context) error {
                        return c.String(200, "Hello world!")
                    },
                    Middlewares: []echo.MiddlewareFunc{
                        apis.RequireAdminAuth(),
                    },
                })

                return nil
            })
        }

        func main() {
            app := pocketbase.New()

            bindAppHooks(app)

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}
/>

<HeadingLink title="Prepare test data" />
<p>
    Now we have to prepare our test/mock data. There are several ways you can approach this, but the easiest
    one would be to start your application with a custom <code>test_pb_data</code> directory, eg.:
</p>
<CodeBlock content={`./pocketbase serve --dir="./test_pb_data" --automigrate=0`} />
<p>
    Go to your browser and create the test data via the Admin UI (both collections and records). Once
    completed, terminate the process and commit <code>test_pb_data</code> to your repo.
</p>

<HeadingLink title="Integration test" />

<p>To test the example endpoint, we want to:</p>
<ul>
    <li>ensure it handles only GET requests</li>
    <li>ensure that it can be accessed only by admins</li>
    <li>check if the response body is properly set</li>
</ul>

<p>
    Below is a simple integration test for the above test cases. We'll also use the test data created in the
    previous step.
</p>
<CodeBlock
    language="go"
    content={`
        // main_test.go
        package main

        import (
            "net/http"
            "testing"

            "github.com/pocketbase/pocketbase/tests"
            "github.com/pocketbase/pocketbase/tokens"
        )

        const testDataDir = "./test_pb_data"

        func TestHelloEndpoint(t *testing.T) {
            recordToken, err := generateRecordToken("users", "test@example.com")
            if err != nil {
                t.Fatal(err)
            }

            adminToken, err := generateAdminToken("test@example.com")
            if err != nil {
                t.Fatal(err)
            }

            // setup the test ApiScenario app instance
            setupTestApp := func() (*tests.TestApp, error) {
                testApp, err := tests.NewTestApp(testDataDir)
                if err != nil {
                    return nil, err
                }
                // no need to cleanup since scenario.Test() will do that for us
                // defer testApp.Cleanup()

                bindAppHooks(testApp)

                return testApp, nil
            }

            scenarios := []tests.ApiScenario{
                {
                    Name:            "try with different http method, eg. POST",
                    Method:          http.MethodPost,
                    Url:             "/my/hello",
                    ExpectedStatus:  405,
                    ExpectedContent: []string{"\"data\":{}"},
                    TestAppFactory:  setupTestApp,
                },
                {
                    Name:            "try as guest (aka. no Authorization header)",
                    Method:          http.MethodGet,
                    Url:             "/my/hello",
                    ExpectedStatus:  401,
                    ExpectedContent: []string{"\"data\":{}"},
                    TestAppFactory:  setupTestApp,
                },
                {
                    Name:   "try as authenticated app user",
                    Method: http.MethodGet,
                    Url:    "/my/hello",
                    RequestHeaders: map[string]string{
                        "Authorization": recordToken,
                    },
                    ExpectedStatus:  401,
                    ExpectedContent: []string{"\"data\":{}"},
                    TestAppFactory:  setupTestApp,
                },
                {
                    Name:   "try as authenticated admin",
                    Method: http.MethodGet,
                    Url:    "/my/hello",
                    RequestHeaders: map[string]string{
                        "Authorization": adminToken,
                    },
                    ExpectedStatus:  200,
                    ExpectedContent: []string{"Hello world!"},
                    TestAppFactory:  setupTestApp,
                },
            }

            for _, scenario := range scenarios {
                scenario.Test(t)
            }
        }

        func generateAdminToken(email string) (string, error) {
            app, err := tests.NewTestApp(testDataDir)
            if err != nil {
                return "", err
            }
            defer app.Cleanup()

            admin, err := app.Dao().FindAdminByEmail(email)
            if err != nil {
                return "", err
            }

            return tokens.NewAdminAuthToken(app, admin)
        }

        func generateRecordToken(collectionNameOrId string, email string) (string, error) {
            app, err := tests.NewTestApp(testDataDir)
            if err != nil {
                return "", err
            }
            defer app.Cleanup()

            record, err := app.Dao().FindAuthRecordByEmail(collectionNameOrId, email)
            if err != nil {
                return "", err
            }

            return tokens.NewRecordAuthToken(app, record)
        }

    `}
/>
