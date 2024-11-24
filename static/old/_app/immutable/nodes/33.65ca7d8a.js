import{S as Ze,i as et,s as tt,k as n,q as o,a as c,y as v,l as i,m as l,r as s,h as t,c as m,z as x,n as ce,b as p,G as a,A as D,H as rt,g as C,d as M,B as P}from"../chunks/index.a7566c1a.js";import{H as Ge}from"../chunks/HeadingLink.20322812.js";import{C as Ie}from"../chunks/CodeBlock.a090ee9b.js";import{T as at}from"../chunks/Toc.c31a36b6.js";function ot(Xe){let u,me,H,ue,de,F,fe,he,G,be,ke,W,h,$e,I,f,ye,_e,Y,y,j,_,J,b,Ae,R,Ee,we,K,A,Q,E,V,k,Te,q,ge,ve,X,w,Z,$,xe,B,De,Ce,ee,T,te,S,Me,re,d,L,Pe,Se,U,Ne,Oe,z,He,ae,N,Fe,oe,g,se;return y=new at({}),_=new Ge({props:{title:"Setup"}}),A=new Ie({props:{language:"go",content:`
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
    `}}),E=new Ge({props:{title:"Prepare test data"}}),w=new Ie({props:{content:'./pocketbase serve --dir="./test_pb_data" --automigrate=0'}}),T=new Ge({props:{title:"Integration test"}}),g=new Ie({props:{language:"go",content:`
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
            setupTestApp := func(t *testing.T) *tests.TestApp {
                testApp, err := tests.NewTestApp(testDataDir)
                if err != nil {
                    t.Fatal(err)
                }
                // no need to cleanup since scenario.Test() will do that for us
                // defer testApp.Cleanup()

                bindAppHooks(testApp)

                return testApp
            }

            scenarios := []tests.ApiScenario{
                {
                    Name:            "try with different http method, eg. POST",
                    Method:          http.MethodPost,
                    Url:             "/my/hello",
                    ExpectedStatus:  405,
                    ExpectedContent: []string{"\\"data\\":{}"},
                    TestAppFactory:  setupTestApp,
                },
                {
                    Name:            "try as guest (aka. no Authorization header)",
                    Method:          http.MethodGet,
                    Url:             "/my/hello",
                    ExpectedStatus:  401,
                    ExpectedContent: []string{"\\"data\\":{}"},
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
                    ExpectedContent: []string{"\\"data\\":{}"},
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

    `}}),{c(){u=n("p"),me=o("PocketBase exposes several test mocks and stubs (eg. "),H=n("code"),ue=o("tests.TestApp"),de=o(`,
    `),F=n("code"),fe=o("tests.ApiScenario"),he=o(", "),G=n("code"),be=o("tests.MockMultipartData"),ke=o(`, etc.) to help you write unit and
    integration tests for your app.`),W=c(),h=n("p"),$e=o(`You could find more information in the
    `),I=n("code"),f=n("a"),ye=o("github.com/pocketbase/pocketbase/tests"),_e=o(`
    sub package, but here is a simple example.`),Y=c(),v(y.$$.fragment),j=c(),v(_.$$.fragment),J=c(),b=n("p"),Ae=o("Let's say that we have a custom API route "),R=n("code"),Ee=o("GET /my/hello"),we=o(" that requires admin authentication:"),K=c(),v(A.$$.fragment),Q=c(),v(E.$$.fragment),V=c(),k=n("p"),Te=o(`Now we have to prepare our test/mock data. There are several ways you can approach this, but the easiest
    one would be to start your application with a custom `),q=n("code"),ge=o("test_pb_data"),ve=o(" directory, eg.:"),X=c(),v(w.$$.fragment),Z=c(),$=n("p"),xe=o(`Go to your browser and create the test data via the Admin UI (both collections and records). Once
    completed, terminate the process and commit `),B=n("code"),De=o("test_pb_data"),Ce=o(" to your repo."),ee=c(),v(T.$$.fragment),te=c(),S=n("p"),Me=o("To test the example endpoint, we want to:"),re=c(),d=n("ul"),L=n("li"),Pe=o("ensure it handles only GET requests"),Se=c(),U=n("li"),Ne=o("ensure that it can be accessed only by admins"),Oe=c(),z=n("li"),He=o("check if the response body is properly set"),ae=c(),N=n("p"),Fe=o(`Below is a simple integration test for the above test cases. We'll also use the test data created in the
    previous step.`),oe=c(),v(g.$$.fragment),this.h()},l(e){u=i(e,"P",{});var r=l(u);me=s(r,"PocketBase exposes several test mocks and stubs (eg. "),H=i(r,"CODE",{});var Re=l(H);ue=s(Re,"tests.TestApp"),Re.forEach(t),de=s(r,`,
    `),F=i(r,"CODE",{});var qe=l(F);fe=s(qe,"tests.ApiScenario"),qe.forEach(t),he=s(r,", "),G=i(r,"CODE",{});var Be=l(G);be=s(Be,"tests.MockMultipartData"),Be.forEach(t),ke=s(r,`, etc.) to help you write unit and
    integration tests for your app.`),r.forEach(t),W=m(e),h=i(e,"P",{});var pe=l(h);$e=s(pe,`You could find more information in the
    `),I=i(pe,"CODE",{});var Le=l(I);f=i(Le,"A",{href:!0,class:!0,target:!0,rel:!0});var Ue=l(f);ye=s(Ue,"github.com/pocketbase/pocketbase/tests"),Ue.forEach(t),Le.forEach(t),_e=s(pe,`
    sub package, but here is a simple example.`),pe.forEach(t),Y=m(e),x(y.$$.fragment,e),j=m(e),x(_.$$.fragment,e),J=m(e),b=i(e,"P",{});var ne=l(b);Ae=s(ne,"Let's say that we have a custom API route "),R=i(ne,"CODE",{});var ze=l(R);Ee=s(ze,"GET /my/hello"),ze.forEach(t),we=s(ne," that requires admin authentication:"),ne.forEach(t),K=m(e),x(A.$$.fragment,e),Q=m(e),x(E.$$.fragment,e),V=m(e),k=i(e,"P",{});var ie=l(k);Te=s(ie,`Now we have to prepare our test/mock data. There are several ways you can approach this, but the easiest
    one would be to start your application with a custom `),q=i(ie,"CODE",{});var We=l(q);ge=s(We,"test_pb_data"),We.forEach(t),ve=s(ie," directory, eg.:"),ie.forEach(t),X=m(e),x(w.$$.fragment,e),Z=m(e),$=i(e,"P",{});var le=l($);xe=s(le,`Go to your browser and create the test data via the Admin UI (both collections and records). Once
    completed, terminate the process and commit `),B=i(le,"CODE",{});var Ye=l(B);De=s(Ye,"test_pb_data"),Ye.forEach(t),Ce=s(le," to your repo."),le.forEach(t),ee=m(e),x(T.$$.fragment,e),te=m(e),S=i(e,"P",{});var je=l(S);Me=s(je,"To test the example endpoint, we want to:"),je.forEach(t),re=m(e),d=i(e,"UL",{});var O=l(d);L=i(O,"LI",{});var Je=l(L);Pe=s(Je,"ensure it handles only GET requests"),Je.forEach(t),Se=m(O),U=i(O,"LI",{});var Ke=l(U);Ne=s(Ke,"ensure that it can be accessed only by admins"),Ke.forEach(t),Oe=m(O),z=i(O,"LI",{});var Qe=l(z);He=s(Qe,"check if the response body is properly set"),Qe.forEach(t),O.forEach(t),ae=m(e),N=i(e,"P",{});var Ve=l(N);Fe=s(Ve,`Below is a simple integration test for the above test cases. We'll also use the test data created in the
    previous step.`),Ve.forEach(t),oe=m(e),x(g.$$.fragment,e),this.h()},h(){ce(f,"href","https://pkg.go.dev/github.com/pocketbase/pocketbase/tests"),ce(f,"class","link-primary txt-bold"),ce(f,"target","_blank"),ce(f,"rel","noreferrer noopener")},m(e,r){p(e,u,r),a(u,me),a(u,H),a(H,ue),a(u,de),a(u,F),a(F,fe),a(u,he),a(u,G),a(G,be),a(u,ke),p(e,W,r),p(e,h,r),a(h,$e),a(h,I),a(I,f),a(f,ye),a(h,_e),p(e,Y,r),D(y,e,r),p(e,j,r),D(_,e,r),p(e,J,r),p(e,b,r),a(b,Ae),a(b,R),a(R,Ee),a(b,we),p(e,K,r),D(A,e,r),p(e,Q,r),D(E,e,r),p(e,V,r),p(e,k,r),a(k,Te),a(k,q),a(q,ge),a(k,ve),p(e,X,r),D(w,e,r),p(e,Z,r),p(e,$,r),a($,xe),a($,B),a(B,De),a($,Ce),p(e,ee,r),D(T,e,r),p(e,te,r),p(e,S,r),a(S,Me),p(e,re,r),p(e,d,r),a(d,L),a(L,Pe),a(d,Se),a(d,U),a(U,Ne),a(d,Oe),a(d,z),a(z,He),p(e,ae,r),p(e,N,r),a(N,Fe),p(e,oe,r),D(g,e,r),se=!0},p:rt,i(e){se||(C(y.$$.fragment,e),C(_.$$.fragment,e),C(A.$$.fragment,e),C(E.$$.fragment,e),C(w.$$.fragment,e),C(T.$$.fragment,e),C(g.$$.fragment,e),se=!0)},o(e){M(y.$$.fragment,e),M(_.$$.fragment,e),M(A.$$.fragment,e),M(E.$$.fragment,e),M(w.$$.fragment,e),M(T.$$.fragment,e),M(g.$$.fragment,e),se=!1},d(e){e&&t(u),e&&t(W),e&&t(h),e&&t(Y),P(y,e),e&&t(j),P(_,e),e&&t(J),e&&t(b),e&&t(K),P(A,e),e&&t(Q),P(E,e),e&&t(V),e&&t(k),e&&t(X),P(w,e),e&&t(Z),e&&t($),e&&t(ee),P(T,e),e&&t(te),e&&t(S),e&&t(re),e&&t(d),e&&t(ae),e&&t(N),e&&t(oe),P(g,e)}}}class lt extends Ze{constructor(u){super(),et(this,u,null,ot,tt,{})}}export{lt as component};
