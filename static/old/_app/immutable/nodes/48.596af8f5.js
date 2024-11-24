import{S as Ze,i as et,s as tt,k as n,q as r,a as m,y as Ie,l as s,m as l,r as a,h as o,c as f,z as qe,n as d,b as p,G as e,A as Je,H as ot,g as Be,d as Te,B as Oe}from"../chunks/index.a7566c1a.js";import{C as Le}from"../chunks/CodeTabs.3c6448ff.js";import{e as je}from"../chunks/preferences.0fc33f39.js";function rt(Ye){let c,Y,B,Z,ee,R,te,oe,C,re,ae,N,_,E,ne,G,se,le,ie,F,g,$,ce,S,ue,de,he,me,fe,M,P,pe,U,u,v,T,ge,ve,k,be,b,O,we,ye,A,_e,w,L,Ee,Ge,x,$e,j,Se,V,h,ke,I,Ae,xe,q,Re,Ce,W;return k=new Le({props:{group:je,go:`
                app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                    e.Router.GET("/hello", func(c echo.Context) error {
                        return c.String(http.StatusOK, "Hello world!")
                    }, apis.ActivityLogger(app))

                    return nil
                })
            `,js:`
                routerAdd("GET", "/hello", (c) => {
                    return c.string(200, "Hello world!")
                }, $apis.activityLogger($app))
            `}}),A=new Le({props:{group:je,go:`
                app.OnRecordBeforeCreateRequest("posts").Add(func(e *core.RecordCreateEvent) error {
                    requestInfo := apis.RequestInfo(e.HttpContext)

                    // if not an admin, overwrite the newly submitted "posts" record status to pending
                    if requestInfo.Admin == nil {
                        e.Record.Set("status", "pending")
                    }

                    return nil
                })
            `,js:`
                onRecordBeforeCreateRequest((e) => {
                    let requestInfo = $apis.requestInfo(e.httpContext)

                    // if not an admin, overwrite the newly submitted "posts" record status to pending
                    if (!requestInfo.admin) {
                        e.record.set("status", "pending")
                    }
                }, "posts")
            `}}),x=new Le({props:{group:je,go:`
                app.RootCmd.AddCommand(&cobra.Command{
                    Use: "hello",
                    Run: func(cmd *cobra.Command, args []string) {
                        print("Hello world!")
                    },
                })
            `,js:`
                $app.rootCmd.addCommand(new Command({
                    use: "hello",
                    run: (cmd, args) => {
                        console.log("Hello world!")
                    },
                }))
            `}}),{c(){c=n("p"),Y=r(`One of the main feature of PocketBase is that
    `),B=n("strong"),Z=r("it can be used as a framework"),ee=r(` which enables you to write your own custom app business
    logic in
    `),R=n("a"),te=r("Go"),oe=r(" or "),C=n("a"),re=r("JavaScript"),ae=r(` and still have a portable
    backend at the end.`),N=m(),_=n("p"),E=n("strong"),ne=r("Choose "),G=n("a"),se=r("Extend with Go"),le=r(` if you are already familiar
        with the language or have the time to learn it.`),ie=r(`
    As the primary PocketBase language, the Go APIs are better documented and you'll be able to integrate with
    any 3rd party Go library since you'll have more control over the application flow. The only drawback is that
    the Go APIs are slightly more verbose and it may require some time to get used to, especially if this is your
    first time working with Go.`),F=m(),g=n("p"),$=n("strong"),ce=r("Choose "),S=n("a"),ue=r("Extend with JavaScript"),de=r(`
        if you don't intend to write too much custom code and want a quick way to explore the PocketBase capabilities.`),he=r(`
    The embedded JavaScript engine is a pluggable wrapper around the existing Go APIs, so most of the time the
    slight performance penalty will be negligible because it'll invoke the Go functions under the hood.
    `),me=n("br"),fe=r(`
    As a bonus, because the JS VM mirrors the Go APIs, you would be able migrate gradually without much code changes
    from JS -> Go at later stage in case you hit a bottleneck or want more control over the execution flow.`),M=m(),P=n("p"),pe=r("With both Go and JavaScript, you can:"),U=m(),u=n("ul"),v=n("li"),T=n("strong"),ge=r("Register custom routes:"),ve=m(),Ie(k.$$.fragment),be=m(),b=n("li"),O=n("strong"),we=r("Bind to event hooks and intercept responses:"),ye=m(),Ie(A.$$.fragment),_e=m(),w=n("li"),L=n("strong"),Ee=r("Register custom console commands:"),Ge=m(),Ie(x.$$.fragment),$e=m(),j=n("li"),Se=r("and many more..."),V=m(),h=n("p"),ke=r("For further info, please check the related "),I=n("a"),Ae=r("Extend with Go"),xe=r(` or
    `),q=n("a"),Re=r("Extend with JavaScript"),Ce=r(" guides."),this.h()},l(t){c=s(t,"P",{});var i=l(c);Y=a(i,`One of the main feature of PocketBase is that
    `),B=s(i,"STRONG",{});var He=l(B);Z=a(He,"it can be used as a framework"),He.forEach(o),ee=a(i,` which enables you to write your own custom app business
    logic in
    `),R=s(i,"A",{href:!0});var Ne=l(R);te=a(Ne,"Go"),Ne.forEach(o),oe=a(i," or "),C=s(i,"A",{href:!0});var Fe=l(C);re=a(Fe,"JavaScript"),Fe.forEach(o),ae=a(i,` and still have a portable
    backend at the end.`),i.forEach(o),N=f(t),_=s(t,"P",{});var Pe=l(_);E=s(Pe,"STRONG",{});var z=l(E);ne=a(z,"Choose "),G=s(z,"A",{href:!0,class:!0});var Me=l(G);se=a(Me,"Extend with Go"),Me.forEach(o),le=a(z,` if you are already familiar
        with the language or have the time to learn it.`),z.forEach(o),ie=a(Pe,`
    As the primary PocketBase language, the Go APIs are better documented and you'll be able to integrate with
    any 3rd party Go library since you'll have more control over the application flow. The only drawback is that
    the Go APIs are slightly more verbose and it may require some time to get used to, especially if this is your
    first time working with Go.`),Pe.forEach(o),F=f(t),g=s(t,"P",{});var H=l(g);$=s(H,"STRONG",{});var K=l($);ce=a(K,"Choose "),S=s(K,"A",{href:!0,class:!0});var Ue=l(S);ue=a(Ue,"Extend with JavaScript"),Ue.forEach(o),de=a(K,`
        if you don't intend to write too much custom code and want a quick way to explore the PocketBase capabilities.`),K.forEach(o),he=a(H,`
    The embedded JavaScript engine is a pluggable wrapper around the existing Go APIs, so most of the time the
    slight performance penalty will be negligible because it'll invoke the Go functions under the hood.
    `),me=s(H,"BR",{}),fe=a(H,`
    As a bonus, because the JS VM mirrors the Go APIs, you would be able migrate gradually without much code changes
    from JS -> Go at later stage in case you hit a bottleneck or want more control over the execution flow.`),H.forEach(o),M=f(t),P=s(t,"P",{});var Ve=l(P);pe=a(Ve,"With both Go and JavaScript, you can:"),Ve.forEach(o),U=f(t),u=s(t,"UL",{});var y=l(u);v=s(y,"LI",{class:!0});var D=l(v);T=s(D,"STRONG",{});var We=l(T);ge=a(We,"Register custom routes:"),We.forEach(o),ve=f(D),qe(k.$$.fragment,D),D.forEach(o),be=f(y),b=s(y,"LI",{class:!0});var Q=l(b);O=s(Q,"STRONG",{});var ze=l(O);we=a(ze,"Bind to event hooks and intercept responses:"),ze.forEach(o),ye=f(Q),qe(A.$$.fragment,Q),Q.forEach(o),_e=f(y),w=s(y,"LI",{class:!0});var X=l(w);L=s(X,"STRONG",{});var Ke=l(L);Ee=a(Ke,"Register custom console commands:"),Ke.forEach(o),Ge=f(X),qe(x.$$.fragment,X),X.forEach(o),$e=f(y),j=s(y,"LI",{});var De=l(j);Se=a(De,"and many more..."),De.forEach(o),y.forEach(o),V=f(t),h=s(t,"P",{class:!0});var J=l(h);ke=a(J,"For further info, please check the related "),I=s(J,"A",{href:!0});var Qe=l(I);Ae=a(Qe,"Extend with Go"),Qe.forEach(o),xe=a(J,` or
    `),q=s(J,"A",{href:!0});var Xe=l(q);Re=a(Xe,"Extend with JavaScript"),Xe.forEach(o),Ce=a(J," guides."),J.forEach(o),this.h()},h(){d(R,"href","/docs/go-overview"),d(C,"href","/docs/js-overview"),d(G,"href","/docs/go-overview"),d(G,"class","label label-info"),d(S,"href","/docs/js-overview"),d(S,"class","label label-warning"),d(v,"class","m-b-sm"),d(b,"class","m-b-sm"),d(w,"class","m-b-sm"),d(I,"href","/docs/go-overview"),d(q,"href","/docs/js-overview"),d(h,"class","m-t-base")},m(t,i){p(t,c,i),e(c,Y),e(c,B),e(B,Z),e(c,ee),e(c,R),e(R,te),e(c,oe),e(c,C),e(C,re),e(c,ae),p(t,N,i),p(t,_,i),e(_,E),e(E,ne),e(E,G),e(G,se),e(E,le),e(_,ie),p(t,F,i),p(t,g,i),e(g,$),e($,ce),e($,S),e(S,ue),e($,de),e(g,he),e(g,me),e(g,fe),p(t,M,i),p(t,P,i),e(P,pe),p(t,U,i),p(t,u,i),e(u,v),e(v,T),e(T,ge),e(v,ve),Je(k,v,null),e(u,be),e(u,b),e(b,O),e(O,we),e(b,ye),Je(A,b,null),e(u,_e),e(u,w),e(w,L),e(L,Ee),e(w,Ge),Je(x,w,null),e(u,$e),e(u,j),e(j,Se),p(t,V,i),p(t,h,i),e(h,ke),e(h,I),e(I,Ae),e(h,xe),e(h,q),e(q,Re),e(h,Ce),W=!0},p:ot,i(t){W||(Be(k.$$.fragment,t),Be(A.$$.fragment,t),Be(x.$$.fragment,t),W=!0)},o(t){Te(k.$$.fragment,t),Te(A.$$.fragment,t),Te(x.$$.fragment,t),W=!1},d(t){t&&o(c),t&&o(N),t&&o(_),t&&o(F),t&&o(g),t&&o(M),t&&o(P),t&&o(U),t&&o(u),Oe(k),Oe(A),Oe(x),t&&o(V),t&&o(h)}}}class lt extends Ze{constructor(c){super(),et(this,c,null,rt,tt,{})}}export{lt as component};
