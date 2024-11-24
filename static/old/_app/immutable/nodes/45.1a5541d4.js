import{S as fo,i as mo,s as po,k as d,q as o,a as i,y as p,l as f,m,r as s,h as t,c as l,z as u,n as lr,b as n,G as a,A as $,H as uo,g as c,d as h,B as w}from"../chunks/index.a7566c1a.js";import{C as g}from"../chunks/CodeBlock.a090ee9b.js";import{C as $o}from"../chunks/CodeTabs.3c6448ff.js";import{H as b}from"../chunks/HeadingLink.20322812.js";import{T as co}from"../chunks/Toc.c31a36b6.js";function ho(lo){let E,dr,Ae,fr,mr,Re,pr,ur,st,F,nt,H,it,L,lt,O,$r,je,cr,hr,dt,S,ft,P,Ee,Oe,wr,ke,A,br,Te,vr,gr,Be,yr,Er,mt,v,kr,Ie,qr,_r,Me,xr,Cr,Dr,Pr,Fe,Ar,Rr,jr,Or,pt,U,ut,qe,Tr,$t,G,ct,N,ht,_,Br,He,Ir,Mr,Le,Fr,Hr,wt,z,bt,V,vt,x,Lr,Se,Sr,Ur,Ue,Gr,Nr,gt,K,yt,W,Et,Y,kt,J,qt,Q,_t,X,xt,Z,Ct,ee,Dt,te,Pt,re,At,ae,Rt,oe,jt,C,zr,Vr,Kr,Ge,Wr,Yr,Ot,se,Tt,ne,Bt,ie,It,le,Mt,de,Ft,fe,Ht,k,Jr,Ne,Qr,Xr,ze,Zr,ea,Ve,ta,ra,Lt,y,aa,Ke,oa,sa,na,ia,We,la,da,Ye,fa,ma,St,me,Ut,pe,Gt,T,pa,Je,ua,$a,Nt,ue,zt,$e,Qe,ca,ha,Vt,ce,Kt,he,Wt,R,Xe,wa,ba,Ze,va,ga,Yt,B,j,ya,et,Ea,ka,tt,qa,_a,xa,rt,Ca,Jt,we,Qt,be,Xt,ve,Zt,ge,er,I,Da,at,Pa,Aa,tr,ye,rr;return F=new co({}),H=new b({props:{title:"Routes"}}),L=new b({props:{title:"Registering new routes",tag:"h5"}}),S=new g({props:{language:"javascript",content:`
        routerAdd("GET", "/hello/:name", (c) => {
            let name = c.pathParam("name")

            return c.json(200, { "message": "Hello " + name })
        }, /* optional middlewares */)
    `}}),U=new b({props:{title:"Request context store",tag:"h5"}}),G=new g({props:{language:"javascript",content:`
        // store for the duration of the request
        c.set("someKey", 123)

        // retrieve later
        const val = c.get("someKey") // 123
    `}}),N=new b({props:{title:"Retrieving the current auth state",tag:"h5"}}),z=new g({props:{language:"javascript",content:`
        const admin  = c.get("admin")      // empty if not authenticated as admin
        const record = c.get("authRecord") // empty if not authenticated as regular auth record

        // alternatively, you can also read the auth state from the cached request info
        const info   = $apis.requestInfo(c);
        const admin  = info.admin;      // empty if not authenticated as admin
        const record = info.authRecord; // empty if not authenticated as regular auth record

        const isGuest = !admin && !record
    `}}),V=new b({props:{title:"Reading path parameters",tag:"h5"}}),K=new g({props:{language:"javascript",content:'const id = c.pathParam("id")'}}),W=new b({props:{title:"Reading query parameters",tag:"h5"}}),Y=new g({props:{language:"javascript",content:`
        const search = c.queryParam("search")

        // or via the cached request object
        const search = $apis.requestInfo(c).query.search
    `}}),J=new b({props:{title:"Reading request headers",tag:"h5"}}),Q=new g({props:{language:"javascript",content:`
    const token = c.request().header.get("Some-Header")

    // or via the cached request object (the header value is always normalized)
    const token = $apis.requestInfo(c).headers["some_header"]
`}}),X=new b({props:{title:"Writing response headers",tag:"h5"}}),Z=new g({props:{language:"javascript",content:'c.response().header().set("Some-Header", "123")'}}),ee=new b({props:{title:"Reading request body",tag:"h5"}}),te=new g({props:{language:"javascript",content:`
        // read the body via the cached request object
        // (this method is commonly used in hook handlers because it allows reading the body more than once)
        const data = $apis.requestInfo(c).data
        console.log(data.title)

        // read/scan the request body fields into a typed object
        // (note that a body cannot be read twice with "bind" because it is a stream)
        const data = new DynamicModel({
            // describe the fields to read (used also as initial values)
            someTextField:   "",
            someNumberField: 0,
            someBoolField:   false,
            someArrayField:  [],
            someObjectField: {}, // object props are accessible via .get(key)
        })
        c.bind(data)
        console.log(data.sometextField)

        // read single multipart/form-data field
        const title = c.formValue("title")

        // read single multipart/form-data file
        const doc = c.formFile("document")
    `}}),re=new b({props:{title:"Writing response body",tag:"h5"}}),ae=new g({props:{language:"javascript",content:`
        // send response with json body
        c.json(200, {"name": "John"})

        // send response with string body
        c.string(200, "Lorem ipsum...")

        // send response with html body
        // (check also the "Rendering templates" section)
        c.html(200, "<h1>Hello!</h1>")

        // redirect
        c.redirect(307, "https://example.com")

        // send response with no body
        c.noContent(204)
    `}}),oe=new b({props:{title:"Middlewares"}}),se=new g({props:{language:"javascript",content:`
        // attach a middleware globally to all routes
        routerUse(someMiddlereFunc)

        // attach multiple middlewares to a single route
        // each route will execute their own middlewares + the global ones
        routerAdd("GET", "/hello", (c) => {
            return c.string(200, "Hello world!")
        }, $apis.activityLogger($app), $apis.requireAdminAuth())
    `}}),ne=new b({props:{title:"Builtin middlewares",tag:"h5"}}),ie=new g({props:{language:"javascript",content:`
        // logs the request in the Admin UI > Logs
        $apis.activityLogger($app)

        // requires the request client to be unauthenticated, aka. guest
        $apis.requireGuestOnly()

        // requires the request client to be authenticated as an auth record
        $apis.requireRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin
        $apis.requireAdminAuth()

        // require the request client to be authenticated as admin OR auth record
        $apis.requireAdminOrRecordAuth(optCollectionNames...)

        // require the request client to be authenticated as admin OR auth record
        // that matches the ownerIdParam path parameter
        $apis.requireAdminOrOwnerAuth(ownerIdParam = "id")

        // compresses HTTP response using gzip
        $apis.gzip()

        // sets the maximum allowed size (in bytes) for a request body
        $apis.bodyLimit(bytes)
    `}}),le=new b({props:{title:"Custom middlewares",tag:"h5"}}),de=new g({props:{language:"javascript",content:`
        function myCustomMiddleware(next) {
            return (c) => {
                // eg. inspect some header value before processing the request
                const header = c.request().header.get("Some-Header")
                if (!header) {
                    // throw or return an error
                    throw new BadRequestError("Invalid request")
                }

                return next(c) // proceed with the request chain
            }
        }

        routerUse(myCustomMiddleware)
    `}}),fe=new b({props:{title:"Error response"}}),me=new g({props:{language:"javascript",content:`
        // construct ApiError with custom status code and validation data error
        throw new ApiError(500, "something went wrong", {
            "title": new ValidationError("invalid_title", "Invalid or missing title"),
        })

        // if message is empty string, a default one will be set
        throw new BadRequestError(optMessage, optData)   // 400 ApiError
        throw new UnauthorizedError(optMessage, optData) // 401 ApiError
        throw new ForbiddenError(optMessage, optData)    // 403 ApiError
        throw new NotFoundError(optMessage, optData)     // 404 ApiError
    `}}),pe=new b({props:{title:"Helpers"}}),ue=new b({props:{title:"Auth response",tag:"h5"}}),ce=new g({props:{language:"javascript",content:`
        routerAdd("GET", "/phone-login", (c) => {
            const data = new DynamicModel({
                phone:    "",
                password: "",
            })

            c.bind(data)

            const record = $app.dao().findFirstRecordByData("users", "phone", data.phone)

            if (!record.validatePassword(data.password)) {
                throw new BadRequestError("invalid credentials")
            }

            return $apis.recordAuthResponse($app, c, record)
        }, $apis.activityLogger($app))
    `}}),he=new b({props:{title:"Enrich record(s)",tag:"h5"}}),we=new g({props:{language:"javascript",content:`
        routerAdd("GET", "/custom-article", (c) => {
            const records = $app.dao().findRecordsByFilter("article", "status = 'active'", '-created', 40)

            // enrich the records with the "categories" relation as default expand
            $apis.enrichRecords(c, $app.dao(), records, "categories")

            return c.json(200, records)
        }, $apis.activityLogger($app))
    `}}),be=new b({props:{title:"Serving static files",tag:"h5"}}),ve=new g({props:{language:"javascript",content:`
        routerAdd("GET", "/*", $apis.staticDirectoryHandler("/path/to/public", false))
    `}}),ge=new b({props:{title:"Sending request to custom routes using the SDKs"}}),ye=new $o({props:{js:`
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
    `}}),{c(){E=d("p"),dr=o("You can register custom routes and middlewares by using the top-level "),Ae=d("code"),fr=o("routerAdd()"),mr=o(`
    and `),Re=d("code"),pr=o("routerUse()"),ur=o(" functions."),st=i(),p(F.$$.fragment),nt=i(),p(H.$$.fragment),it=i(),p(L.$$.fragment),lt=i(),O=d("p"),$r=o(`Each route consists of at least a path and a handler function. For example, the below code registers
    `),je=d("code"),cr=o("GET /hello/:name"),hr=o(" route that responds with a json body:"),dt=i(),p(S.$$.fragment),ft=i(),P=d("div"),Ee=d("div"),Oe=d("i"),wr=i(),ke=d("div"),A=d("p"),br=o("To avoid collisions with future internal routes you should avoid using the "),Te=d("code"),vr=o("/api/..."),gr=o(`
            base path or consider combining it with a unique prefix like `),Be=d("code"),yr=o("/api/myapp/..."),Er=o("."),mt=i(),v=d("p"),kr=o("Each handler function receives a "),Ie=d("strong"),qr=o("request context"),_r=o(" argument (usually named "),Me=d("code"),xr=o("c"),Cr=o(`).
    `),Dr=d("br"),Pr=o(`
    The request context is also accessible in the event request hooks under the `),Fe=d("code"),Ar=o("httpContext"),Rr=o(` key.
    `),jr=d("br"),Or=o(`
    Below you can find common request context operations.`),pt=i(),p(U.$$.fragment),ut=i(),qe=d("p"),Tr=o(`The request context comes with a local store that you can use to share data related only to the current
    request between routes and middlewares.`),$t=i(),p(G.$$.fragment),ct=i(),p(N.$$.fragment),ht=i(),_=d("p"),Br=o("We also use the store to manage the current auth state with the "),He=d("code"),Ir=o("admin"),Mr=o(` and
    `),Le=d("code"),Fr=o("authRecord"),Hr=o(" special keys."),wt=i(),p(z.$$.fragment),bt=i(),p(V.$$.fragment),vt=i(),x=d("p"),Lr=o("Path parameters are defined with "),Se=d("code"),Sr=o(":paramName"),Ur=o(` placeholder and can be retrieved using
    `),Ue=d("code"),Gr=o('c.pathParam("paramName")'),Nr=o("."),gt=i(),p(K.$$.fragment),yt=i(),p(W.$$.fragment),Et=i(),p(Y.$$.fragment),kt=i(),p(J.$$.fragment),qt=i(),p(Q.$$.fragment),_t=i(),p(X.$$.fragment),xt=i(),p(Z.$$.fragment),Ct=i(),p(ee.$$.fragment),Dt=i(),p(te.$$.fragment),Pt=i(),p(re.$$.fragment),At=i(),p(ae.$$.fragment),Rt=i(),p(oe.$$.fragment),jt=i(),C=d("p"),zr=o(`Middlewares could be used to apply a shared behavior or to intercept and modify route requests.
    `),Vr=d("br"),Kr=o(`
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using `),Ge=d("code"),Wr=o("routerUse(someMiddlereFunc)"),Yr=o("."),Ot=i(),p(se.$$.fragment),Tt=i(),p(ne.$$.fragment),Bt=i(),p(ie.$$.fragment),It=i(),p(le.$$.fragment),Mt=i(),p(de.$$.fragment),Ft=i(),p(fe.$$.fragment),Ht=i(),k=d("p"),Jr=o("PocketBase has a global error handler and every returned or thrown "),Ne=d("code"),Qr=o("Error"),Xr=o(` from a route or
    middleware will be safely converted by default to a generic HTTP 400 error to avoid accidentally leaking
    sensitive information (the original error will be visible only in the `),ze=d("em"),Zr=o("Admin UI > Logs"),ea=o(` or when in
    `),Ve=d("code"),ta=o("--dev"),ra=o(" mode)."),Lt=i(),y=d("p"),aa=o(`To make it easier returning formatted json error responses, PocketBase provides
    `),Ke=d("code"),oa=o("ApiError"),sa=o(` constructor that can be instantiated directly or using the builtin factories.
    `),na=d("br"),ia=i(),We=d("code"),la=o("ApiError.data"),da=o(` will be returned in the response only if it is a map of
    `),Ye=d("code"),fa=o("ValidationError"),ma=o(" items."),St=i(),p(me.$$.fragment),Ut=i(),p(pe.$$.fragment),Gt=i(),T=d("p"),pa=o("The global "),Je=d("code"),ua=o("$apis"),$a=o(" namespace expose several helpers you can use as part of your route hooks."),Nt=i(),p(ue.$$.fragment),zt=i(),$e=d("p"),Qe=d("code"),ca=o("$apis.recordAuthResponse()"),ha=o(` writes standardised json record auth response (aka. token + record
    data) into the specified request context. Could be used as a return result from a custom auth route.`),Vt=i(),p(ce.$$.fragment),Kt=i(),p(he.$$.fragment),Wt=i(),R=d("p"),Xe=d("code"),wa=o("$apis.enrichRecord()"),ba=o(" and "),Ze=d("code"),va=o("$apis.enrichRecords()"),ga=o(` helpers parses the request context
    and enrich the provided record(s) by:`),Yt=i(),B=d("ul"),j=d("li"),ya=o("expands relations (if "),et=d("code"),Ea=o("defaultExpands"),ka=o(" and/or "),tt=d("code"),qa=o("?expand"),_a=o(" query parameter is set)"),xa=i(),rt=d("li"),Ca=o(`ensures that the emails of the auth record and its expanded auth relations are visible only for the
        current logged admin, record owner or record with manage access`),Jt=i(),p(we.$$.fragment),Qt=i(),p(be.$$.fragment),Xt=i(),p(ve.$$.fragment),Zt=i(),p(ge.$$.fragment),er=i(),I=d("p"),Da=o("The official PocketBase SDKs expose the internal "),at=d("code"),Pa=o("send()"),Aa=o(` method that could be used to send requests
    to your custom route(s).`),tr=i(),p(ye.$$.fragment),this.h()},l(e){E=f(e,"P",{});var r=m(E);dr=s(r,"You can register custom routes and middlewares by using the top-level "),Ae=f(r,"CODE",{});var ja=m(Ae);fr=s(ja,"routerAdd()"),ja.forEach(t),mr=s(r,`
    and `),Re=f(r,"CODE",{});var Oa=m(Re);pr=s(Oa,"routerUse()"),Oa.forEach(t),ur=s(r," functions."),r.forEach(t),st=l(e),u(F.$$.fragment,e),nt=l(e),u(H.$$.fragment,e),it=l(e),u(L.$$.fragment,e),lt=l(e),O=f(e,"P",{});var ar=m(O);$r=s(ar,`Each route consists of at least a path and a handler function. For example, the below code registers
    `),je=f(ar,"CODE",{});var Ta=m(je);cr=s(Ta,"GET /hello/:name"),Ta.forEach(t),hr=s(ar," route that responds with a json body:"),ar.forEach(t),dt=l(e),u(S.$$.fragment,e),ft=l(e),P=f(e,"DIV",{class:!0});var or=m(P);Ee=f(or,"DIV",{class:!0});var Ba=m(Ee);Oe=f(Ba,"I",{class:!0}),m(Oe).forEach(t),Ba.forEach(t),wr=l(or),ke=f(or,"DIV",{class:!0});var Ia=m(ke);A=f(Ia,"P",{});var _e=m(A);br=s(_e,"To avoid collisions with future internal routes you should avoid using the "),Te=f(_e,"CODE",{});var Ma=m(Te);vr=s(Ma,"/api/..."),Ma.forEach(t),gr=s(_e,`
            base path or consider combining it with a unique prefix like `),Be=f(_e,"CODE",{});var Fa=m(Be);yr=s(Fa,"/api/myapp/..."),Fa.forEach(t),Er=s(_e,"."),_e.forEach(t),Ia.forEach(t),or.forEach(t),mt=l(e),v=f(e,"P",{});var q=m(v);kr=s(q,"Each handler function receives a "),Ie=f(q,"STRONG",{});var Ha=m(Ie);qr=s(Ha,"request context"),Ha.forEach(t),_r=s(q," argument (usually named "),Me=f(q,"CODE",{});var La=m(Me);xr=s(La,"c"),La.forEach(t),Cr=s(q,`).
    `),Dr=f(q,"BR",{}),Pr=s(q,`
    The request context is also accessible in the event request hooks under the `),Fe=f(q,"CODE",{});var Sa=m(Fe);Ar=s(Sa,"httpContext"),Sa.forEach(t),Rr=s(q,` key.
    `),jr=f(q,"BR",{}),Or=s(q,`
    Below you can find common request context operations.`),q.forEach(t),pt=l(e),u(U.$$.fragment,e),ut=l(e),qe=f(e,"P",{});var Ua=m(qe);Tr=s(Ua,`The request context comes with a local store that you can use to share data related only to the current
    request between routes and middlewares.`),Ua.forEach(t),$t=l(e),u(G.$$.fragment,e),ct=l(e),u(N.$$.fragment,e),ht=l(e),_=f(e,"P",{});var xe=m(_);Br=s(xe,"We also use the store to manage the current auth state with the "),He=f(xe,"CODE",{});var Ga=m(He);Ir=s(Ga,"admin"),Ga.forEach(t),Mr=s(xe,` and
    `),Le=f(xe,"CODE",{});var Na=m(Le);Fr=s(Na,"authRecord"),Na.forEach(t),Hr=s(xe," special keys."),xe.forEach(t),wt=l(e),u(z.$$.fragment,e),bt=l(e),u(V.$$.fragment,e),vt=l(e),x=f(e,"P",{});var Ce=m(x);Lr=s(Ce,"Path parameters are defined with "),Se=f(Ce,"CODE",{});var za=m(Se);Sr=s(za,":paramName"),za.forEach(t),Ur=s(Ce,` placeholder and can be retrieved using
    `),Ue=f(Ce,"CODE",{});var Va=m(Ue);Gr=s(Va,'c.pathParam("paramName")'),Va.forEach(t),Nr=s(Ce,"."),Ce.forEach(t),gt=l(e),u(K.$$.fragment,e),yt=l(e),u(W.$$.fragment,e),Et=l(e),u(Y.$$.fragment,e),kt=l(e),u(J.$$.fragment,e),qt=l(e),u(Q.$$.fragment,e),_t=l(e),u(X.$$.fragment,e),xt=l(e),u(Z.$$.fragment,e),Ct=l(e),u(ee.$$.fragment,e),Dt=l(e),u(te.$$.fragment,e),Pt=l(e),u(re.$$.fragment,e),At=l(e),u(ae.$$.fragment,e),Rt=l(e),u(oe.$$.fragment,e),jt=l(e),C=f(e,"P",{});var De=m(C);zr=s(De,`Middlewares could be used to apply a shared behavior or to intercept and modify route requests.
    `),Vr=f(De,"BR",{}),Kr=s(De,`
    Middlewares can be registered both to a single route (by passing them after the handler) and globally usually
    by using `),Ge=f(De,"CODE",{});var Ka=m(Ge);Wr=s(Ka,"routerUse(someMiddlereFunc)"),Ka.forEach(t),Yr=s(De,"."),De.forEach(t),Ot=l(e),u(se.$$.fragment,e),Tt=l(e),u(ne.$$.fragment,e),Bt=l(e),u(ie.$$.fragment,e),It=l(e),u(le.$$.fragment,e),Mt=l(e),u(de.$$.fragment,e),Ft=l(e),u(fe.$$.fragment,e),Ht=l(e),k=f(e,"P",{});var M=m(k);Jr=s(M,"PocketBase has a global error handler and every returned or thrown "),Ne=f(M,"CODE",{});var Wa=m(Ne);Qr=s(Wa,"Error"),Wa.forEach(t),Xr=s(M,` from a route or
    middleware will be safely converted by default to a generic HTTP 400 error to avoid accidentally leaking
    sensitive information (the original error will be visible only in the `),ze=f(M,"EM",{});var Ya=m(ze);Zr=s(Ya,"Admin UI > Logs"),Ya.forEach(t),ea=s(M,` or when in
    `),Ve=f(M,"CODE",{});var Ja=m(Ve);ta=s(Ja,"--dev"),Ja.forEach(t),ra=s(M," mode)."),M.forEach(t),Lt=l(e),y=f(e,"P",{});var D=m(y);aa=s(D,`To make it easier returning formatted json error responses, PocketBase provides
    `),Ke=f(D,"CODE",{});var Qa=m(Ke);oa=s(Qa,"ApiError"),Qa.forEach(t),sa=s(D,` constructor that can be instantiated directly or using the builtin factories.
    `),na=f(D,"BR",{}),ia=l(D),We=f(D,"CODE",{});var Xa=m(We);la=s(Xa,"ApiError.data"),Xa.forEach(t),da=s(D,` will be returned in the response only if it is a map of
    `),Ye=f(D,"CODE",{});var Za=m(Ye);fa=s(Za,"ValidationError"),Za.forEach(t),ma=s(D," items."),D.forEach(t),St=l(e),u(me.$$.fragment,e),Ut=l(e),u(pe.$$.fragment,e),Gt=l(e),T=f(e,"P",{});var sr=m(T);pa=s(sr,"The global "),Je=f(sr,"CODE",{});var eo=m(Je);ua=s(eo,"$apis"),eo.forEach(t),$a=s(sr," namespace expose several helpers you can use as part of your route hooks."),sr.forEach(t),Nt=l(e),u(ue.$$.fragment,e),zt=l(e),$e=f(e,"P",{});var Ra=m($e);Qe=f(Ra,"CODE",{});var to=m(Qe);ca=s(to,"$apis.recordAuthResponse()"),to.forEach(t),ha=s(Ra,` writes standardised json record auth response (aka. token + record
    data) into the specified request context. Could be used as a return result from a custom auth route.`),Ra.forEach(t),Vt=l(e),u(ce.$$.fragment,e),Kt=l(e),u(he.$$.fragment,e),Wt=l(e),R=f(e,"P",{});var ot=m(R);Xe=f(ot,"CODE",{});var ro=m(Xe);wa=s(ro,"$apis.enrichRecord()"),ro.forEach(t),ba=s(ot," and "),Ze=f(ot,"CODE",{});var ao=m(Ze);va=s(ao,"$apis.enrichRecords()"),ao.forEach(t),ga=s(ot,` helpers parses the request context
    and enrich the provided record(s) by:`),ot.forEach(t),Yt=l(e),B=f(e,"UL",{});var nr=m(B);j=f(nr,"LI",{});var Pe=m(j);ya=s(Pe,"expands relations (if "),et=f(Pe,"CODE",{});var oo=m(et);Ea=s(oo,"defaultExpands"),oo.forEach(t),ka=s(Pe," and/or "),tt=f(Pe,"CODE",{});var so=m(tt);qa=s(so,"?expand"),so.forEach(t),_a=s(Pe," query parameter is set)"),Pe.forEach(t),xa=l(nr),rt=f(nr,"LI",{});var no=m(rt);Ca=s(no,`ensures that the emails of the auth record and its expanded auth relations are visible only for the
        current logged admin, record owner or record with manage access`),no.forEach(t),nr.forEach(t),Jt=l(e),u(we.$$.fragment,e),Qt=l(e),u(be.$$.fragment,e),Xt=l(e),u(ve.$$.fragment,e),Zt=l(e),u(ge.$$.fragment,e),er=l(e),I=f(e,"P",{});var ir=m(I);Da=s(ir,"The official PocketBase SDKs expose the internal "),at=f(ir,"CODE",{});var io=m(at);Pa=s(io,"send()"),io.forEach(t),Aa=s(ir,` method that could be used to send requests
    to your custom route(s).`),ir.forEach(t),tr=l(e),u(ye.$$.fragment,e),this.h()},h(){lr(Oe,"class","ri-information-line"),lr(Ee,"class","icon"),lr(ke,"class","content"),lr(P,"class","alert alert-info m-t-sm m-b-sm")},m(e,r){n(e,E,r),a(E,dr),a(E,Ae),a(Ae,fr),a(E,mr),a(E,Re),a(Re,pr),a(E,ur),n(e,st,r),$(F,e,r),n(e,nt,r),$(H,e,r),n(e,it,r),$(L,e,r),n(e,lt,r),n(e,O,r),a(O,$r),a(O,je),a(je,cr),a(O,hr),n(e,dt,r),$(S,e,r),n(e,ft,r),n(e,P,r),a(P,Ee),a(Ee,Oe),a(P,wr),a(P,ke),a(ke,A),a(A,br),a(A,Te),a(Te,vr),a(A,gr),a(A,Be),a(Be,yr),a(A,Er),n(e,mt,r),n(e,v,r),a(v,kr),a(v,Ie),a(Ie,qr),a(v,_r),a(v,Me),a(Me,xr),a(v,Cr),a(v,Dr),a(v,Pr),a(v,Fe),a(Fe,Ar),a(v,Rr),a(v,jr),a(v,Or),n(e,pt,r),$(U,e,r),n(e,ut,r),n(e,qe,r),a(qe,Tr),n(e,$t,r),$(G,e,r),n(e,ct,r),$(N,e,r),n(e,ht,r),n(e,_,r),a(_,Br),a(_,He),a(He,Ir),a(_,Mr),a(_,Le),a(Le,Fr),a(_,Hr),n(e,wt,r),$(z,e,r),n(e,bt,r),$(V,e,r),n(e,vt,r),n(e,x,r),a(x,Lr),a(x,Se),a(Se,Sr),a(x,Ur),a(x,Ue),a(Ue,Gr),a(x,Nr),n(e,gt,r),$(K,e,r),n(e,yt,r),$(W,e,r),n(e,Et,r),$(Y,e,r),n(e,kt,r),$(J,e,r),n(e,qt,r),$(Q,e,r),n(e,_t,r),$(X,e,r),n(e,xt,r),$(Z,e,r),n(e,Ct,r),$(ee,e,r),n(e,Dt,r),$(te,e,r),n(e,Pt,r),$(re,e,r),n(e,At,r),$(ae,e,r),n(e,Rt,r),$(oe,e,r),n(e,jt,r),n(e,C,r),a(C,zr),a(C,Vr),a(C,Kr),a(C,Ge),a(Ge,Wr),a(C,Yr),n(e,Ot,r),$(se,e,r),n(e,Tt,r),$(ne,e,r),n(e,Bt,r),$(ie,e,r),n(e,It,r),$(le,e,r),n(e,Mt,r),$(de,e,r),n(e,Ft,r),$(fe,e,r),n(e,Ht,r),n(e,k,r),a(k,Jr),a(k,Ne),a(Ne,Qr),a(k,Xr),a(k,ze),a(ze,Zr),a(k,ea),a(k,Ve),a(Ve,ta),a(k,ra),n(e,Lt,r),n(e,y,r),a(y,aa),a(y,Ke),a(Ke,oa),a(y,sa),a(y,na),a(y,ia),a(y,We),a(We,la),a(y,da),a(y,Ye),a(Ye,fa),a(y,ma),n(e,St,r),$(me,e,r),n(e,Ut,r),$(pe,e,r),n(e,Gt,r),n(e,T,r),a(T,pa),a(T,Je),a(Je,ua),a(T,$a),n(e,Nt,r),$(ue,e,r),n(e,zt,r),n(e,$e,r),a($e,Qe),a(Qe,ca),a($e,ha),n(e,Vt,r),$(ce,e,r),n(e,Kt,r),$(he,e,r),n(e,Wt,r),n(e,R,r),a(R,Xe),a(Xe,wa),a(R,ba),a(R,Ze),a(Ze,va),a(R,ga),n(e,Yt,r),n(e,B,r),a(B,j),a(j,ya),a(j,et),a(et,Ea),a(j,ka),a(j,tt),a(tt,qa),a(j,_a),a(B,xa),a(B,rt),a(rt,Ca),n(e,Jt,r),$(we,e,r),n(e,Qt,r),$(be,e,r),n(e,Xt,r),$(ve,e,r),n(e,Zt,r),$(ge,e,r),n(e,er,r),n(e,I,r),a(I,Da),a(I,at),a(at,Pa),a(I,Aa),n(e,tr,r),$(ye,e,r),rr=!0},p:uo,i(e){rr||(c(F.$$.fragment,e),c(H.$$.fragment,e),c(L.$$.fragment,e),c(S.$$.fragment,e),c(U.$$.fragment,e),c(G.$$.fragment,e),c(N.$$.fragment,e),c(z.$$.fragment,e),c(V.$$.fragment,e),c(K.$$.fragment,e),c(W.$$.fragment,e),c(Y.$$.fragment,e),c(J.$$.fragment,e),c(Q.$$.fragment,e),c(X.$$.fragment,e),c(Z.$$.fragment,e),c(ee.$$.fragment,e),c(te.$$.fragment,e),c(re.$$.fragment,e),c(ae.$$.fragment,e),c(oe.$$.fragment,e),c(se.$$.fragment,e),c(ne.$$.fragment,e),c(ie.$$.fragment,e),c(le.$$.fragment,e),c(de.$$.fragment,e),c(fe.$$.fragment,e),c(me.$$.fragment,e),c(pe.$$.fragment,e),c(ue.$$.fragment,e),c(ce.$$.fragment,e),c(he.$$.fragment,e),c(we.$$.fragment,e),c(be.$$.fragment,e),c(ve.$$.fragment,e),c(ge.$$.fragment,e),c(ye.$$.fragment,e),rr=!0)},o(e){h(F.$$.fragment,e),h(H.$$.fragment,e),h(L.$$.fragment,e),h(S.$$.fragment,e),h(U.$$.fragment,e),h(G.$$.fragment,e),h(N.$$.fragment,e),h(z.$$.fragment,e),h(V.$$.fragment,e),h(K.$$.fragment,e),h(W.$$.fragment,e),h(Y.$$.fragment,e),h(J.$$.fragment,e),h(Q.$$.fragment,e),h(X.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(te.$$.fragment,e),h(re.$$.fragment,e),h(ae.$$.fragment,e),h(oe.$$.fragment,e),h(se.$$.fragment,e),h(ne.$$.fragment,e),h(ie.$$.fragment,e),h(le.$$.fragment,e),h(de.$$.fragment,e),h(fe.$$.fragment,e),h(me.$$.fragment,e),h(pe.$$.fragment,e),h(ue.$$.fragment,e),h(ce.$$.fragment,e),h(he.$$.fragment,e),h(we.$$.fragment,e),h(be.$$.fragment,e),h(ve.$$.fragment,e),h(ge.$$.fragment,e),h(ye.$$.fragment,e),rr=!1},d(e){e&&t(E),e&&t(st),w(F,e),e&&t(nt),w(H,e),e&&t(it),w(L,e),e&&t(lt),e&&t(O),e&&t(dt),w(S,e),e&&t(ft),e&&t(P),e&&t(mt),e&&t(v),e&&t(pt),w(U,e),e&&t(ut),e&&t(qe),e&&t($t),w(G,e),e&&t(ct),w(N,e),e&&t(ht),e&&t(_),e&&t(wt),w(z,e),e&&t(bt),w(V,e),e&&t(vt),e&&t(x),e&&t(gt),w(K,e),e&&t(yt),w(W,e),e&&t(Et),w(Y,e),e&&t(kt),w(J,e),e&&t(qt),w(Q,e),e&&t(_t),w(X,e),e&&t(xt),w(Z,e),e&&t(Ct),w(ee,e),e&&t(Dt),w(te,e),e&&t(Pt),w(re,e),e&&t(At),w(ae,e),e&&t(Rt),w(oe,e),e&&t(jt),e&&t(C),e&&t(Ot),w(se,e),e&&t(Tt),w(ne,e),e&&t(Bt),w(ie,e),e&&t(It),w(le,e),e&&t(Mt),w(de,e),e&&t(Ft),w(fe,e),e&&t(Ht),e&&t(k),e&&t(Lt),e&&t(y),e&&t(St),w(me,e),e&&t(Ut),w(pe,e),e&&t(Gt),e&&t(T),e&&t(Nt),w(ue,e),e&&t(zt),e&&t($e),e&&t(Vt),w(ce,e),e&&t(Kt),w(he,e),e&&t(Wt),e&&t(R),e&&t(Yt),e&&t(B),e&&t(Jt),w(we,e),e&&t(Qt),w(be,e),e&&t(Xt),w(ve,e),e&&t(Zt),w(ge,e),e&&t(er),e&&t(I),e&&t(tr),w(ye,e)}}}class Eo extends fo{constructor(E){super(),mo(this,E,null,ho,po,{})}}export{Eo as component};
