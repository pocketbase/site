import{S as ka,i as Ra,s as qa,k as d,q as a,a as i,y as u,l as f,m as p,r as n,h as t,c as l,z as m,n as C,b as s,G as o,A as $,H as _a,g as c,d as h,B as g}from"../chunks/index.a7566c1a.js";import{C as b}from"../chunks/CodeBlock.a090ee9b.js";import{C as Pa}from"../chunks/CodeTabs.3c6448ff.js";import{H as v}from"../chunks/HeadingLink.20322812.js";import{T as xa}from"../chunks/Toc.c31a36b6.js";function Ca(ya){let y,hr,B,gr,vr,Be,br,wr,ft,M,pt,L,ut,U,mt,N,Er,Ne,yr,kr,$t,K,ct,O,Pe,He,Rr,xe,D,qr,Fe,_r,Pr,Ie,xr,Cr,ht,H,Or,Ge,Dr,Ar,gt,z,vt,w,Sr,je,Tr,Br,Me,Nr,Hr,Fr,Ir,Le,Gr,jr,Mr,Lr,bt,V,wt,Ce,Ur,Et,W,yt,J,kt,q,Kr,Ue,zr,Vr,Ke,Wr,Jr,Rt,Q,qt,X,_t,_,Qr,ze,Xr,Yr,Ve,Zr,eo,Pt,Y,xt,Z,Ct,ee,Ot,te,Dt,re,At,oe,St,ae,Tt,ne,Bt,se,Nt,ie,Ht,le,Ft,de,It,P,to,ro,oo,We,ao,no,Gt,fe,jt,pe,Mt,ue,Lt,me,Ut,$e,Kt,ce,zt,k,so,Je,io,lo,Qe,fo,po,Xe,uo,mo,Vt,E,$o,Ye,co,ho,go,vo,Ze,bo,wo,et,Eo,yo,Wt,he,Jt,ge,Qt,F,ko,A,tt,Ro,qo,_o,Xt,ve,Yt,be,rt,Po,xo,Zt,we,er,Ee,tr,S,ot,Co,Oo,at,Do,Ao,rr,I,T,So,nt,To,Bo,st,No,Ho,Fo,it,Io,or,ye,ar,ke,nr,Re,sr,qe,ir,G,Go,lt,jo,Mo,lr,_e,dr;return M=new xa({}),L=new v({props:{title:"Routes"}}),U=new v({props:{title:"Registering new routes",tag:"h5"}}),K=new b({props:{language:"go",content:`
        import (
            "log"
            "net/http"

            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/hello/:name", func(c echo.Context) error {
                name := c.PathParam("name")

                return c.JSON(http.StatusOK, map[string]string{"message": "Hello " + name})
            }, /* optional middlewares */)

            return nil
        })
    `}}),z=new b({props:{language:"go",content:`
        e.Router.GET(path, handler, [middlewares...])
        e.Router.POST(path, handler, [middlewares...])
        e.Router.PUT(path, handler, [middlewares...])
        e.Router.PATCH(path, handler, [middlewares...])
        e.Router.DELETE(path, handler, [middlewares...])
        e.Router.OPTIONS(path, handler, [middlewares...])
        e.Router.HEAD(path, handler, [middlewares...])
    `}}),V=new v({props:{title:"Request context store",tag:"h5"}}),W=new b({props:{language:"go",content:`
        // store for the duration of the request
        c.Set("someKey", 123)

        // retrieve later
        val := c.Get("someKey").(int) // 123
    `}}),J=new v({props:{title:"Retrieving the current auth state",tag:"h5"}}),Q=new b({props:{language:"go",content:`
        admin, _ := c.Get(apis.ContextAdminKey).(*models.Admin)
        record, _ := c.Get(apis.ContextAuthRecordKey).(*models.Record)

        // alternatively, you can also read the auth state from the cached request info
        info   := apis.RequestInfo(c)
        admin  := info.Admin      // nil if not authenticated as admin
        record := info.AuthRecord // nil if not authenticated as regular auth record

        isGuest := admin == nil && record == nil
    `}}),X=new v({props:{title:"Reading path parameters",tag:"h5"}}),Y=new b({props:{language:"go",content:'id := c.PathParam("id")'}}),Z=new v({props:{title:"Reading query parameters",tag:"h5"}}),ee=new b({props:{language:"go",content:`
        search := c.QueryParam("search")

        // or via the cached request object
        search := apis.RequestInfo(c).Query["search"]
    `}}),te=new v({props:{title:"Reading request headers",tag:"h5"}}),re=new b({props:{language:"go",content:`
        token := c.Request().Header.Get("Some-Header")

        // or via the cached request object (the header value is always normalized)
        token := apis.RequestInfo(c).Headers["some_header"]
    `}}),oe=new v({props:{title:"Writing response headers",tag:"h5"}}),ae=new b({props:{language:"go",content:'c.Response().Header().Set("Some-Header", "123")'}}),ne=new v({props:{title:"Reading request body",tag:"h5"}}),se=new b({props:{language:"go",content:`
        // read the body via the cached request object
        // (this method is commonly used in hook handlers because it allows reading the body more than once)
        data := apis.RequestInfo(c).Data
        title := data["title"]

        // read/scan the request body fields into a typed struct
        // (note that a body cannot be read twice with Bind because it is a stream)
        data := struct {
            Title       string \`json:"title" form:"title"\`
            Description string \`json:"description" form:"description"\`
            Public      bool   \`json:"public" form:"public"\`
        }{}
        if err := c.Bind(&data); err != nil {
            return apis.NewBadRequestError("Failed to read request data", err)
        }

        // read single multipart/form-data field
        title := c.FormValue("title")

        // read single multipart/form-data file
        doc, err := c.FormFile("document")
    `}}),ie=new v({props:{title:"Writing response body",tag:"h5"}}),le=new b({props:{language:"go",content:`
        // send response with json body
        c.JSON(200, map[string]any{"name": "John"})

        // send response with string body
        c.String(200, "Lorem ipsum...")

        // send response with html body
        // (check also the "Rendering templates" section)
        c.HTML(200, "<h1>Hello!</h1>")

        // redirect
        c.Redirect(307, "https://example.com")

        // send response with no body
        c.NoContent(204)
    `}}),de=new v({props:{title:"Middlewares"}}),fe=new b({props:{language:"go",content:`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            // attach a middleware globally to all routes
            e.Router.Use(someMiddlereFunc)

            // attach multiple middlewares to a single route
            // each route will execute their own middlewares + the global ones
            e.Router.GET("/hello", func(c echo.Context) error {
                return c.String(200, "Hello world!")
            }, apis.ActivityLogger(app), apis.RequireAdminAuth())
        })
    `}}),pe=new v({props:{title:"Builtin middlewares",tag:"h5"}}),ue=new b({props:{language:"go",content:`
        // logs the request in the Admin UI > Logs
        apis.ActivityLogger(app)

        // requires the request client to be unauthenticated, aka. guest
        apis.RequireGuestOnly()

        // requires the request client to be authenticated as an auth record
        apis.RequireRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin
        apis.RequireAdminAuth()

        // require the request client to be authenticated as admin OR auth record
        apis.RequireAdminOrRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin OR auth record
        // that matches the ownerIdParam path parameter
        apis.RequireAdminOrOwnerAuth(ownerIdParam = "id")
    `}}),me=new v({props:{title:"Custom middlewares",tag:"h5"}}),$e=new b({props:{language:"go",content:`
        func myCustomMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
            return func(c echo.Context) error {
                // eg. inspect some header value before processing the request
                header := c.Request().Header.Get("Some-Header")
                if header == "" {
                    return apis.NewBadRequestError("Invalid request", nil)
                }

                return next(c) // proceed with the request chain
            }
        }

        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.Use(myCustomMiddleware)

            return nil
        })
    `}}),ce=new v({props:{title:"Error response"}}),he=new b({props:{language:"go",content:`
        import (
            validation "github.com/go-ozzo/ozzo-validation/v4"
            "github.com/pocketbase/pocketbase/apis"
        )

        ...

        // construct ApiError with custom status code and validation data error
        return apis.NewApiError(500, "something went wrong", map[string]validation.Error{
            "title": validation.NewError("invalid_title", "Invalid or missing title"),
        })

        // if message is empty string, a default one will be set
        return apis.NewBadRequestError(optMessage, optData)   // 400 ApiError
        return apis.NewUnauthorizedError(optMessage, optData) // 401 ApiError
        return apis.NewForbiddenError(optMessage, optData)    // 403 ApiError
        return apis.NewNotFoundError(optMessage, optData)     // 404 ApiError
    `}}),ge=new v({props:{title:"Helpers"}}),ve=new v({props:{title:"Auth response",tag:"h5"}}),we=new b({props:{language:"go",content:`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/phone-login", func(c echo.Context) error {
                data := struct {
                    Phone    string \`json:"phone" form:"phone"\`
                    Password string \`json:"password" form:"password"\`
                }{}
                if err := c.Bind(&data); err != nil {
                    return apis.NewBadRequestError("Failed to read request data", err)
                }

                record, err := app.Dao().FindFirstRecordByData("users", "phone", data.Phone)
                if err != nil || !record.ValidatePassword(data.Password) {
                    // return generic 400 error to prevent phones enumeration
                    return apis.NewBadRequestError("Invalid credentials", err)
                }

                return apis.RecordAuthResponse(app, c, record, nil)
            }, /* optional middlewares */)

            return nil
        })
    `}}),Ee=new v({props:{title:"Enrich record(s)",tag:"h5"}}),ye=new b({props:{language:"go",content:`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            e.Router.GET("/custom-article", func(c echo.Context) error {
                records, err := app.Dao().FindRecordsByFilter("article", "status = 'active'", "-created", 40)
                if err != nil {
                    return apis.NewNotFoundError("No active articles", err)
                }

                // enrich the records with the "categories" relation as default expand
                apis.EnrichRecords(c, app.Dao(), records, "categories")

                return c.JSON(http.StatusOK, records)
            }, /* optional middlewares */)

            return nil
        })
    `}}),ke=new v({props:{title:"Serving static files",tag:"h5"}}),Re=new b({props:{language:"go",content:`
        app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
            // serves static files from the provided dir (if exists)
            e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("/path/to/public"), false))

            return nil
        })
    `}}),qe=new v({props:{title:"Sending request to custom routes using the SDKs"}}),_e=new Pa({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        await pb.send("/hello", {
            // for all possible options check
            // https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
            query: { "abc": 123 },
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        await pb.send("/hello", query: { "abc": 123 })
    `}}),{c(){y=d("p"),hr=a(`PocketBase uses
    `),B=d("a"),gr=a("echo (v5)"),vr=a(`
    for routing. The internal router is exposed in the `),Be=d("code"),br=a("app.OnBeforeServe"),wr=a(` event hook and you can register
    your own custom endpoints and/or middlewares the same way as using directly echo.`),ft=i(),u(M.$$.fragment),pt=i(),u(L.$$.fragment),ut=i(),u(U.$$.fragment),mt=i(),N=d("p"),Er=a(`Each route consists of at least a path and a handler function. For example, the below code registers
    `),Ne=d("code"),yr=a("GET /hello/:name"),kr=a(" route that responds with a json body:"),$t=i(),u(K.$$.fragment),ct=i(),O=d("div"),Pe=d("div"),He=d("i"),Rr=i(),xe=d("div"),D=d("p"),qr=a("To avoid collisions with future internal routes you should avoid using the "),Fe=d("code"),_r=a("/api/..."),Pr=a(`
            base path or consider combining it with a unique prefix like `),Ie=d("code"),xr=a("/api/myapp/..."),Cr=a("."),ht=i(),H=d("p"),Or=a("There are several "),Ge=d("code"),Dr=a("Router"),Ar=a(" methods available, but the most common ones are:"),gt=i(),u(z.$$.fragment),vt=i(),w=d("p"),Sr=a("Each handler function receives a "),je=d("strong"),Tr=a("echo request context"),Br=a(` argument (usually named
    `),Me=d("code"),Nr=a("c"),Hr=a(`).
    `),Fr=d("br"),Ir=a(`
    The request context is also accessible in the event request hooks under the `),Le=d("code"),Gr=a("HttpContext"),jr=a(`
    field.
    `),Mr=d("br"),Lr=a(`
    Below you can find common request context operations.`),bt=i(),u(V.$$.fragment),wt=i(),Ce=d("p"),Ur=a(`The request context comes with a local store that you can use to share data related only to the current
    request between routes and middlewares.`),Et=i(),u(W.$$.fragment),yt=i(),u(J.$$.fragment),kt=i(),q=d("p"),Kr=a("We also use the store to manage the current auth state with the "),Ue=d("code"),zr=a("admin"),Vr=a(` and
    `),Ke=d("code"),Wr=a("authRecord"),Jr=a(" special keys."),Rt=i(),u(Q.$$.fragment),qt=i(),u(X.$$.fragment),_t=i(),_=d("p"),Qr=a("Path parameters are defined with "),ze=d("code"),Xr=a(":paramName"),Yr=a(` placeholder and can be retrieved using
    `),Ve=d("code"),Zr=a('c.PathParam("paramName")'),eo=a("."),Pt=i(),u(Y.$$.fragment),xt=i(),u(Z.$$.fragment),Ct=i(),u(ee.$$.fragment),Ot=i(),u(te.$$.fragment),Dt=i(),u(re.$$.fragment),At=i(),u(oe.$$.fragment),St=i(),u(ae.$$.fragment),Tt=i(),u(ne.$$.fragment),Bt=i(),u(se.$$.fragment),Nt=i(),u(ie.$$.fragment),Ht=i(),u(le.$$.fragment),Ft=i(),u(de.$$.fragment),It=i(),P=d("p"),to=a(`Middlewares could be used to apply a shared behavior or to intercept and modify route requests.
    `),ro=d("br"),oo=a(`
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using `),We=d("code"),ao=a("e.Router.Use(someMiddlereFunc)"),no=a("."),Gt=i(),u(fe.$$.fragment),jt=i(),u(pe.$$.fragment),Mt=i(),u(ue.$$.fragment),Lt=i(),u(me.$$.fragment),Ut=i(),u($e.$$.fragment),Kt=i(),u(ce.$$.fragment),zt=i(),k=d("p"),so=a("PocketBase has a global error handler and every returned or thrown "),Je=d("code"),io=a("Error"),lo=a(` from a route or
    middleware will be safely converted by default to a generic HTTP 400 error to avoid accidentally leaking
    sensitive information (the original error will be visible only in the `),Qe=d("em"),fo=a("Admin UI > Logs"),po=a(` or when in
    `),Xe=d("code"),uo=a("--dev"),mo=a(" mode)."),Vt=i(),E=d("p"),$o=a(`To make it easier returning formatted json error responses, PocketBase provides
    `),Ye=d("code"),co=a("apis.ApiError"),ho=a(` constructor that can be instantiated directly or using the builtin factories.
    `),go=d("br"),vo=i(),Ze=d("code"),bo=a("ApiError.RawData()"),wo=a(` will be returned in the response only if it is a map of
    `),et=d("code"),Eo=a("validation.Error"),yo=a(" items."),Wt=i(),u(he.$$.fragment),Jt=i(),u(ge.$$.fragment),Qt=i(),F=d("p"),ko=a(`The
    `),A=d("a"),tt=d("code"),Ro=a("apis"),qo=a(" package"),_o=a(`
    expose several helpers you can use as part of your route hooks.`),Xt=i(),u(ve.$$.fragment),Yt=i(),be=d("p"),rt=d("code"),Po=a("apis.RecordAuthResponse()"),xo=a(` writes standardised json record auth response (aka. token + record data)
    into the specified request context. Could be used as a return result from a custom auth route.`),Zt=i(),u(we.$$.fragment),er=i(),u(Ee.$$.fragment),tr=i(),S=d("p"),ot=d("code"),Co=a("apis.EnrichRecord()"),Oo=a(" and "),at=d("code"),Do=a("apis.EnrichRecords()"),Ao=a(` helpers parses the request context and
    enrich the provided record(s) by:`),rr=i(),I=d("ul"),T=d("li"),So=a("expands relations (if "),nt=d("code"),To=a("defaultExpands"),Bo=a(" and/or "),st=d("code"),No=a("?expand"),Ho=a(" query parameter is set)"),Fo=i(),it=d("li"),Io=a(`ensures that the emails of the auth record and its expanded auth relations are visible only for the
        current logged admin, record owner or record with manage access`),or=i(),u(ye.$$.fragment),ar=i(),u(ke.$$.fragment),nr=i(),u(Re.$$.fragment),sr=i(),u(qe.$$.fragment),ir=i(),G=d("p"),Go=a("The official PocketBase SDKs expose the internal "),lt=d("code"),jo=a("send()"),Mo=a(` method that could be used to send requests
    to your custom route(s).`),lr=i(),u(_e.$$.fragment),this.h()},l(e){y=f(e,"P",{});var r=p(y);hr=n(r,`PocketBase uses
    `),B=f(r,"A",{href:!0,target:!0,rel:!0});var Ko=p(B);gr=n(Ko,"echo (v5)"),Ko.forEach(t),vr=n(r,`
    for routing. The internal router is exposed in the `),Be=f(r,"CODE",{});var zo=p(Be);br=n(zo,"app.OnBeforeServe"),zo.forEach(t),wr=n(r,` event hook and you can register
    your own custom endpoints and/or middlewares the same way as using directly echo.`),r.forEach(t),ft=l(e),m(M.$$.fragment,e),pt=l(e),m(L.$$.fragment,e),ut=l(e),m(U.$$.fragment,e),mt=l(e),N=f(e,"P",{});var fr=p(N);Er=n(fr,`Each route consists of at least a path and a handler function. For example, the below code registers
    `),Ne=f(fr,"CODE",{});var Vo=p(Ne);yr=n(Vo,"GET /hello/:name"),Vo.forEach(t),kr=n(fr," route that responds with a json body:"),fr.forEach(t),$t=l(e),m(K.$$.fragment,e),ct=l(e),O=f(e,"DIV",{class:!0});var pr=p(O);Pe=f(pr,"DIV",{class:!0});var Wo=p(Pe);He=f(Wo,"I",{class:!0}),p(He).forEach(t),Wo.forEach(t),Rr=l(pr),xe=f(pr,"DIV",{class:!0});var Jo=p(xe);D=f(Jo,"P",{});var Oe=p(D);qr=n(Oe,"To avoid collisions with future internal routes you should avoid using the "),Fe=f(Oe,"CODE",{});var Qo=p(Fe);_r=n(Qo,"/api/..."),Qo.forEach(t),Pr=n(Oe,`
            base path or consider combining it with a unique prefix like `),Ie=f(Oe,"CODE",{});var Xo=p(Ie);xr=n(Xo,"/api/myapp/..."),Xo.forEach(t),Cr=n(Oe,"."),Oe.forEach(t),Jo.forEach(t),pr.forEach(t),ht=l(e),H=f(e,"P",{});var ur=p(H);Or=n(ur,"There are several "),Ge=f(ur,"CODE",{});var Yo=p(Ge);Dr=n(Yo,"Router"),Yo.forEach(t),Ar=n(ur," methods available, but the most common ones are:"),ur.forEach(t),gt=l(e),m(z.$$.fragment,e),vt=l(e),w=f(e,"P",{});var R=p(w);Sr=n(R,"Each handler function receives a "),je=f(R,"STRONG",{});var Zo=p(je);Tr=n(Zo,"echo request context"),Zo.forEach(t),Br=n(R,` argument (usually named
    `),Me=f(R,"CODE",{});var ea=p(Me);Nr=n(ea,"c"),ea.forEach(t),Hr=n(R,`).
    `),Fr=f(R,"BR",{}),Ir=n(R,`
    The request context is also accessible in the event request hooks under the `),Le=f(R,"CODE",{});var ta=p(Le);Gr=n(ta,"HttpContext"),ta.forEach(t),jr=n(R,`
    field.
    `),Mr=f(R,"BR",{}),Lr=n(R,`
    Below you can find common request context operations.`),R.forEach(t),bt=l(e),m(V.$$.fragment,e),wt=l(e),Ce=f(e,"P",{});var ra=p(Ce);Ur=n(ra,`The request context comes with a local store that you can use to share data related only to the current
    request between routes and middlewares.`),ra.forEach(t),Et=l(e),m(W.$$.fragment,e),yt=l(e),m(J.$$.fragment,e),kt=l(e),q=f(e,"P",{});var De=p(q);Kr=n(De,"We also use the store to manage the current auth state with the "),Ue=f(De,"CODE",{});var oa=p(Ue);zr=n(oa,"admin"),oa.forEach(t),Vr=n(De,` and
    `),Ke=f(De,"CODE",{});var aa=p(Ke);Wr=n(aa,"authRecord"),aa.forEach(t),Jr=n(De," special keys."),De.forEach(t),Rt=l(e),m(Q.$$.fragment,e),qt=l(e),m(X.$$.fragment,e),_t=l(e),_=f(e,"P",{});var Ae=p(_);Qr=n(Ae,"Path parameters are defined with "),ze=f(Ae,"CODE",{});var na=p(ze);Xr=n(na,":paramName"),na.forEach(t),Yr=n(Ae,` placeholder and can be retrieved using
    `),Ve=f(Ae,"CODE",{});var sa=p(Ve);Zr=n(sa,'c.PathParam("paramName")'),sa.forEach(t),eo=n(Ae,"."),Ae.forEach(t),Pt=l(e),m(Y.$$.fragment,e),xt=l(e),m(Z.$$.fragment,e),Ct=l(e),m(ee.$$.fragment,e),Ot=l(e),m(te.$$.fragment,e),Dt=l(e),m(re.$$.fragment,e),At=l(e),m(oe.$$.fragment,e),St=l(e),m(ae.$$.fragment,e),Tt=l(e),m(ne.$$.fragment,e),Bt=l(e),m(se.$$.fragment,e),Nt=l(e),m(ie.$$.fragment,e),Ht=l(e),m(le.$$.fragment,e),Ft=l(e),m(de.$$.fragment,e),It=l(e),P=f(e,"P",{});var Se=p(P);to=n(Se,`Middlewares could be used to apply a shared behavior or to intercept and modify route requests.
    `),ro=f(Se,"BR",{}),oo=n(Se,`
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using `),We=f(Se,"CODE",{});var ia=p(We);ao=n(ia,"e.Router.Use(someMiddlereFunc)"),ia.forEach(t),no=n(Se,"."),Se.forEach(t),Gt=l(e),m(fe.$$.fragment,e),jt=l(e),m(pe.$$.fragment,e),Mt=l(e),m(ue.$$.fragment,e),Lt=l(e),m(me.$$.fragment,e),Ut=l(e),m($e.$$.fragment,e),Kt=l(e),m(ce.$$.fragment,e),zt=l(e),k=f(e,"P",{});var j=p(k);so=n(j,"PocketBase has a global error handler and every returned or thrown "),Je=f(j,"CODE",{});var la=p(Je);io=n(la,"Error"),la.forEach(t),lo=n(j,` from a route or
    middleware will be safely converted by default to a generic HTTP 400 error to avoid accidentally leaking
    sensitive information (the original error will be visible only in the `),Qe=f(j,"EM",{});var da=p(Qe);fo=n(da,"Admin UI > Logs"),da.forEach(t),po=n(j,` or when in
    `),Xe=f(j,"CODE",{});var fa=p(Xe);uo=n(fa,"--dev"),fa.forEach(t),mo=n(j," mode)."),j.forEach(t),Vt=l(e),E=f(e,"P",{});var x=p(E);$o=n(x,`To make it easier returning formatted json error responses, PocketBase provides
    `),Ye=f(x,"CODE",{});var pa=p(Ye);co=n(pa,"apis.ApiError"),pa.forEach(t),ho=n(x,` constructor that can be instantiated directly or using the builtin factories.
    `),go=f(x,"BR",{}),vo=l(x),Ze=f(x,"CODE",{});var ua=p(Ze);bo=n(ua,"ApiError.RawData()"),ua.forEach(t),wo=n(x,` will be returned in the response only if it is a map of
    `),et=f(x,"CODE",{});var ma=p(et);Eo=n(ma,"validation.Error"),ma.forEach(t),yo=n(x," items."),x.forEach(t),Wt=l(e),m(he.$$.fragment,e),Jt=l(e),m(ge.$$.fragment,e),Qt=l(e),F=f(e,"P",{});var mr=p(F);ko=n(mr,`The
    `),A=f(mr,"A",{href:!0,target:!0,rel:!0});var Lo=p(A);tt=f(Lo,"CODE",{});var $a=p(tt);Ro=n($a,"apis"),$a.forEach(t),qo=n(Lo," package"),Lo.forEach(t),_o=n(mr,`
    expose several helpers you can use as part of your route hooks.`),mr.forEach(t),Xt=l(e),m(ve.$$.fragment,e),Yt=l(e),be=f(e,"P",{});var Uo=p(be);rt=f(Uo,"CODE",{});var ca=p(rt);Po=n(ca,"apis.RecordAuthResponse()"),ca.forEach(t),xo=n(Uo,` writes standardised json record auth response (aka. token + record data)
    into the specified request context. Could be used as a return result from a custom auth route.`),Uo.forEach(t),Zt=l(e),m(we.$$.fragment,e),er=l(e),m(Ee.$$.fragment,e),tr=l(e),S=f(e,"P",{});var dt=p(S);ot=f(dt,"CODE",{});var ha=p(ot);Co=n(ha,"apis.EnrichRecord()"),ha.forEach(t),Oo=n(dt," and "),at=f(dt,"CODE",{});var ga=p(at);Do=n(ga,"apis.EnrichRecords()"),ga.forEach(t),Ao=n(dt,` helpers parses the request context and
    enrich the provided record(s) by:`),dt.forEach(t),rr=l(e),I=f(e,"UL",{});var $r=p(I);T=f($r,"LI",{});var Te=p(T);So=n(Te,"expands relations (if "),nt=f(Te,"CODE",{});var va=p(nt);To=n(va,"defaultExpands"),va.forEach(t),Bo=n(Te," and/or "),st=f(Te,"CODE",{});var ba=p(st);No=n(ba,"?expand"),ba.forEach(t),Ho=n(Te," query parameter is set)"),Te.forEach(t),Fo=l($r),it=f($r,"LI",{});var wa=p(it);Io=n(wa,`ensures that the emails of the auth record and its expanded auth relations are visible only for the
        current logged admin, record owner or record with manage access`),wa.forEach(t),$r.forEach(t),or=l(e),m(ye.$$.fragment,e),ar=l(e),m(ke.$$.fragment,e),nr=l(e),m(Re.$$.fragment,e),sr=l(e),m(qe.$$.fragment,e),ir=l(e),G=f(e,"P",{});var cr=p(G);Go=n(cr,"The official PocketBase SDKs expose the internal "),lt=f(cr,"CODE",{});var Ea=p(lt);jo=n(Ea,"send()"),Ea.forEach(t),Mo=n(cr,` method that could be used to send requests
    to your custom route(s).`),cr.forEach(t),lr=l(e),m(_e.$$.fragment,e),this.h()},h(){C(B,"href","https://github.com/labstack/echo"),C(B,"target","_blank"),C(B,"rel","noopener noreferrer"),C(He,"class","ri-information-line"),C(Pe,"class","icon"),C(xe,"class","content"),C(O,"class","alert alert-info m-t-sm m-b-sm"),C(A,"href","https://pkg.go.dev/github.com/pocketbase/pocketbase/apis"),C(A,"target","_blank"),C(A,"rel","noopener noreferrer")},m(e,r){s(e,y,r),o(y,hr),o(y,B),o(B,gr),o(y,vr),o(y,Be),o(Be,br),o(y,wr),s(e,ft,r),$(M,e,r),s(e,pt,r),$(L,e,r),s(e,ut,r),$(U,e,r),s(e,mt,r),s(e,N,r),o(N,Er),o(N,Ne),o(Ne,yr),o(N,kr),s(e,$t,r),$(K,e,r),s(e,ct,r),s(e,O,r),o(O,Pe),o(Pe,He),o(O,Rr),o(O,xe),o(xe,D),o(D,qr),o(D,Fe),o(Fe,_r),o(D,Pr),o(D,Ie),o(Ie,xr),o(D,Cr),s(e,ht,r),s(e,H,r),o(H,Or),o(H,Ge),o(Ge,Dr),o(H,Ar),s(e,gt,r),$(z,e,r),s(e,vt,r),s(e,w,r),o(w,Sr),o(w,je),o(je,Tr),o(w,Br),o(w,Me),o(Me,Nr),o(w,Hr),o(w,Fr),o(w,Ir),o(w,Le),o(Le,Gr),o(w,jr),o(w,Mr),o(w,Lr),s(e,bt,r),$(V,e,r),s(e,wt,r),s(e,Ce,r),o(Ce,Ur),s(e,Et,r),$(W,e,r),s(e,yt,r),$(J,e,r),s(e,kt,r),s(e,q,r),o(q,Kr),o(q,Ue),o(Ue,zr),o(q,Vr),o(q,Ke),o(Ke,Wr),o(q,Jr),s(e,Rt,r),$(Q,e,r),s(e,qt,r),$(X,e,r),s(e,_t,r),s(e,_,r),o(_,Qr),o(_,ze),o(ze,Xr),o(_,Yr),o(_,Ve),o(Ve,Zr),o(_,eo),s(e,Pt,r),$(Y,e,r),s(e,xt,r),$(Z,e,r),s(e,Ct,r),$(ee,e,r),s(e,Ot,r),$(te,e,r),s(e,Dt,r),$(re,e,r),s(e,At,r),$(oe,e,r),s(e,St,r),$(ae,e,r),s(e,Tt,r),$(ne,e,r),s(e,Bt,r),$(se,e,r),s(e,Nt,r),$(ie,e,r),s(e,Ht,r),$(le,e,r),s(e,Ft,r),$(de,e,r),s(e,It,r),s(e,P,r),o(P,to),o(P,ro),o(P,oo),o(P,We),o(We,ao),o(P,no),s(e,Gt,r),$(fe,e,r),s(e,jt,r),$(pe,e,r),s(e,Mt,r),$(ue,e,r),s(e,Lt,r),$(me,e,r),s(e,Ut,r),$($e,e,r),s(e,Kt,r),$(ce,e,r),s(e,zt,r),s(e,k,r),o(k,so),o(k,Je),o(Je,io),o(k,lo),o(k,Qe),o(Qe,fo),o(k,po),o(k,Xe),o(Xe,uo),o(k,mo),s(e,Vt,r),s(e,E,r),o(E,$o),o(E,Ye),o(Ye,co),o(E,ho),o(E,go),o(E,vo),o(E,Ze),o(Ze,bo),o(E,wo),o(E,et),o(et,Eo),o(E,yo),s(e,Wt,r),$(he,e,r),s(e,Jt,r),$(ge,e,r),s(e,Qt,r),s(e,F,r),o(F,ko),o(F,A),o(A,tt),o(tt,Ro),o(A,qo),o(F,_o),s(e,Xt,r),$(ve,e,r),s(e,Yt,r),s(e,be,r),o(be,rt),o(rt,Po),o(be,xo),s(e,Zt,r),$(we,e,r),s(e,er,r),$(Ee,e,r),s(e,tr,r),s(e,S,r),o(S,ot),o(ot,Co),o(S,Oo),o(S,at),o(at,Do),o(S,Ao),s(e,rr,r),s(e,I,r),o(I,T),o(T,So),o(T,nt),o(nt,To),o(T,Bo),o(T,st),o(st,No),o(T,Ho),o(I,Fo),o(I,it),o(it,Io),s(e,or,r),$(ye,e,r),s(e,ar,r),$(ke,e,r),s(e,nr,r),$(Re,e,r),s(e,sr,r),$(qe,e,r),s(e,ir,r),s(e,G,r),o(G,Go),o(G,lt),o(lt,jo),o(G,Mo),s(e,lr,r),$(_e,e,r),dr=!0},p:_a,i(e){dr||(c(M.$$.fragment,e),c(L.$$.fragment,e),c(U.$$.fragment,e),c(K.$$.fragment,e),c(z.$$.fragment,e),c(V.$$.fragment,e),c(W.$$.fragment,e),c(J.$$.fragment,e),c(Q.$$.fragment,e),c(X.$$.fragment,e),c(Y.$$.fragment,e),c(Z.$$.fragment,e),c(ee.$$.fragment,e),c(te.$$.fragment,e),c(re.$$.fragment,e),c(oe.$$.fragment,e),c(ae.$$.fragment,e),c(ne.$$.fragment,e),c(se.$$.fragment,e),c(ie.$$.fragment,e),c(le.$$.fragment,e),c(de.$$.fragment,e),c(fe.$$.fragment,e),c(pe.$$.fragment,e),c(ue.$$.fragment,e),c(me.$$.fragment,e),c($e.$$.fragment,e),c(ce.$$.fragment,e),c(he.$$.fragment,e),c(ge.$$.fragment,e),c(ve.$$.fragment,e),c(we.$$.fragment,e),c(Ee.$$.fragment,e),c(ye.$$.fragment,e),c(ke.$$.fragment,e),c(Re.$$.fragment,e),c(qe.$$.fragment,e),c(_e.$$.fragment,e),dr=!0)},o(e){h(M.$$.fragment,e),h(L.$$.fragment,e),h(U.$$.fragment,e),h(K.$$.fragment,e),h(z.$$.fragment,e),h(V.$$.fragment,e),h(W.$$.fragment,e),h(J.$$.fragment,e),h(Q.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(te.$$.fragment,e),h(re.$$.fragment,e),h(oe.$$.fragment,e),h(ae.$$.fragment,e),h(ne.$$.fragment,e),h(se.$$.fragment,e),h(ie.$$.fragment,e),h(le.$$.fragment,e),h(de.$$.fragment,e),h(fe.$$.fragment,e),h(pe.$$.fragment,e),h(ue.$$.fragment,e),h(me.$$.fragment,e),h($e.$$.fragment,e),h(ce.$$.fragment,e),h(he.$$.fragment,e),h(ge.$$.fragment,e),h(ve.$$.fragment,e),h(we.$$.fragment,e),h(Ee.$$.fragment,e),h(ye.$$.fragment,e),h(ke.$$.fragment,e),h(Re.$$.fragment,e),h(qe.$$.fragment,e),h(_e.$$.fragment,e),dr=!1},d(e){e&&t(y),e&&t(ft),g(M,e),e&&t(pt),g(L,e),e&&t(ut),g(U,e),e&&t(mt),e&&t(N),e&&t($t),g(K,e),e&&t(ct),e&&t(O),e&&t(ht),e&&t(H),e&&t(gt),g(z,e),e&&t(vt),e&&t(w),e&&t(bt),g(V,e),e&&t(wt),e&&t(Ce),e&&t(Et),g(W,e),e&&t(yt),g(J,e),e&&t(kt),e&&t(q),e&&t(Rt),g(Q,e),e&&t(qt),g(X,e),e&&t(_t),e&&t(_),e&&t(Pt),g(Y,e),e&&t(xt),g(Z,e),e&&t(Ct),g(ee,e),e&&t(Ot),g(te,e),e&&t(Dt),g(re,e),e&&t(At),g(oe,e),e&&t(St),g(ae,e),e&&t(Tt),g(ne,e),e&&t(Bt),g(se,e),e&&t(Nt),g(ie,e),e&&t(Ht),g(le,e),e&&t(Ft),g(de,e),e&&t(It),e&&t(P),e&&t(Gt),g(fe,e),e&&t(jt),g(pe,e),e&&t(Mt),g(ue,e),e&&t(Lt),g(me,e),e&&t(Ut),g($e,e),e&&t(Kt),g(ce,e),e&&t(zt),e&&t(k),e&&t(Vt),e&&t(E),e&&t(Wt),g(he,e),e&&t(Jt),g(ge,e),e&&t(Qt),e&&t(F),e&&t(Xt),g(ve,e),e&&t(Yt),e&&t(be),e&&t(Zt),g(we,e),e&&t(er),g(Ee,e),e&&t(tr),e&&t(S),e&&t(rr),e&&t(I),e&&t(or),g(ye,e),e&&t(ar),g(ke,e),e&&t(nr),g(Re,e),e&&t(sr),g(qe,e),e&&t(ir),e&&t(G),e&&t(lr),g(_e,e)}}}class Ba extends ka{constructor(y){super(),Ra(this,y,null,Ca,qa,{})}}export{Ba as component};
