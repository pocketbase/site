import{S as je,i as Ae,s as He,y as q,a as u,k as l,q as r,z as C,c as $,l as n,m,r as a,h as o,n as D,A as B,b as i,G as t,H as Se,g as T,d as F,B as I}from"../chunks/index.a7566c1a.js";import{H as Ie}from"../chunks/HeadingLink.20322812.js";import{C as we}from"../chunks/CodeBlock.a090ee9b.js";import{T as Je}from"../chunks/Toc.c31a36b6.js";function Ne(Oe){let h,R,y,z,d,Q,O,Z,ee,te,oe,G,P,se,M,w,V,g,re,Y,E,L,k,U,p,ae,j,le,ne,A,ie,fe,H,me,pe,W,f,de,S,ce,ue,b,$e,he,J,be,ve,v,N,_e,ye,X,x,K;return h=new Je({}),y=new Ie({props:{title:"Overview"}}),w=new we({props:{language:"javascript",content:`
        // throws on timeout or network connectivity error
        const res = $http.send({
            url:     "",
            method:  "GET",
            body:    "", // ex. JSON.stringify({"test": 123}) or new FormData()
            headers: {"content-type": "application/json"},
            timeout: 120, // in seconds
        })

        console.log(res.headers)    // the response headers (ex. res.headers['X-Custom'][0])
        console.log(res.cookies)    // the response cookies (ex. res.cookies.sessionId.value)
        console.log(res.statusCode) // the response HTTP status code
        console.log(res.raw)        // the response body as plain text
        console.log(res.json)       // the response body as parsed json array or map
    `}}),E=new we({props:{language:"javascript",content:`
        onRecordBeforeCreateRequest((e) => {
            const isbn = e.record.get("isbn");

            // try to update with the published date from the openlibrary API
            try {
                const res = $http.send({
                    url: "https://openlibrary.org/isbn/" + isbn + ".json",
                })

                if (res.statusCode == 200) {
                    e.record.set("published", res.json.publish_date)
                }
            } catch (err) {
                console.log("request failed", err);
            }
        }, "books")
    `}}),k=new Ie({props:{title:"multipart/form-data requests",tag:"h5"}}),x=new we({props:{language:"javascript",content:`
        const formData = new FormData();

        formData.append("title", "Hello world!")
        formData.append("documents", $filesystem.fileFromBytes("doc1", "doc1.txt"))
        formData.append("documents", $filesystem.fileFromBytes("doc2", "doc2.txt"))

        const res = $http.send({
            url:    "https://...",
            method: "POST",
            body:   formData,
        })

        console.log(res.statusCode)
    `}}),{c(){q(h.$$.fragment),R=u(),q(y.$$.fragment),z=u(),d=l("p"),Q=r("You can use the global "),O=l("code"),Z=r("$http.send(config)"),ee=r(` helper to send HTTP requests to external services.
    `),te=l("br"),oe=r(`
    This could be used for example to retrieve data from external data sources, to make custom requests to a payment
    provider API, etc.`),G=u(),P=l("p"),se=r("Below is a list with all currently supported config options and their defaults."),M=u(),q(w.$$.fragment),V=u(),g=l("p"),re=r(`Here is an example that will enrich a single book record with some data based on its ISBN details from
    openlibrary.org.`),Y=u(),q(E.$$.fragment),L=u(),q(k.$$.fragment),U=u(),p=l("p"),ae=r("In order to send "),j=l("code"),le=r("multipart/form-data"),ne=r(` requests (ex. uploading files) the request
    `),A=l("code"),ie=r("body"),fe=r(" must be a "),H=l("code"),me=r("FormData"),pe=r(" instance."),W=u(),f=l("p"),de=r("PocketBase JSVM's "),S=l("code"),ce=r("FormData"),ue=r(` has the same APIs as its
    `),b=l("a"),$e=r("browser equivalent"),he=r(`
    with the main difference that for file values instead of `),J=l("code"),be=r("Blob"),ve=r(` it accepts
    `),v=l("a"),N=l("code"),_e=r("$filesystem.File"),ye=r("."),X=u(),q(x.$$.fragment),this.h()},l(e){C(h.$$.fragment,e),R=$(e),C(y.$$.fragment,e),z=$(e),d=n(e,"P",{});var s=m(d);Q=a(s,"You can use the global "),O=n(s,"CODE",{});var ge=m(O);Z=a(ge,"$http.send(config)"),ge.forEach(o),ee=a(s,` helper to send HTTP requests to external services.
    `),te=n(s,"BR",{}),oe=a(s,`
    This could be used for example to retrieve data from external data sources, to make custom requests to a payment
    provider API, etc.`),s.forEach(o),G=$(e),P=n(e,"P",{});var Ee=m(P);se=a(Ee,"Below is a list with all currently supported config options and their defaults."),Ee.forEach(o),M=$(e),C(w.$$.fragment,e),V=$(e),g=n(e,"P",{class:!0});var ke=m(g);re=a(ke,`Here is an example that will enrich a single book record with some data based on its ISBN details from
    openlibrary.org.`),ke.forEach(o),Y=$(e),C(E.$$.fragment,e),L=$(e),C(k.$$.fragment,e),U=$(e),p=n(e,"P",{});var _=m(p);ae=a(_,"In order to send "),j=n(_,"CODE",{});var xe=m(j);le=a(xe,"multipart/form-data"),xe.forEach(o),ne=a(_,` requests (ex. uploading files) the request
    `),A=n(_,"CODE",{});var De=m(A);ie=a(De,"body"),De.forEach(o),fe=a(_," must be a "),H=n(_,"CODE",{});var Pe=m(H);me=a(Pe,"FormData"),Pe.forEach(o),pe=a(_," instance."),_.forEach(o),W=$(e),f=n(e,"P",{});var c=m(f);de=a(c,"PocketBase JSVM's "),S=n(c,"CODE",{});var qe=m(S);ce=a(qe,"FormData"),qe.forEach(o),ue=a(c,` has the same APIs as its
    `),b=n(c,"A",{href:!0,target:!0,rel:!0});var Ce=m(b);$e=a(Ce,"browser equivalent"),Ce.forEach(o),he=a(c,`
    with the main difference that for file values instead of `),J=n(c,"CODE",{});var Be=m(J);be=a(Be,"Blob"),Be.forEach(o),ve=a(c,` it accepts
    `),v=n(c,"A",{href:!0,target:!0,rel:!0});var Te=m(v);N=n(Te,"CODE",{});var Fe=m(N);_e=a(Fe,"$filesystem.File"),Fe.forEach(o),Te.forEach(o),ye=a(c,"."),c.forEach(o),X=$(e),C(x.$$.fragment,e),this.h()},h(){D(g,"class","m-t-sm"),D(b,"href","https://developer.mozilla.org/en-US/docs/Web/API/FormData"),D(b,"target","_blank"),D(b,"rel","noopener noreferrer"),D(v,"href","/jsvm/modules/_filesystem.html"),D(v,"target","_blank"),D(v,"rel","noopener noreferrer")},m(e,s){B(h,e,s),i(e,R,s),B(y,e,s),i(e,z,s),i(e,d,s),t(d,Q),t(d,O),t(O,Z),t(d,ee),t(d,te),t(d,oe),i(e,G,s),i(e,P,s),t(P,se),i(e,M,s),B(w,e,s),i(e,V,s),i(e,g,s),t(g,re),i(e,Y,s),B(E,e,s),i(e,L,s),B(k,e,s),i(e,U,s),i(e,p,s),t(p,ae),t(p,j),t(j,le),t(p,ne),t(p,A),t(A,ie),t(p,fe),t(p,H),t(H,me),t(p,pe),i(e,W,s),i(e,f,s),t(f,de),t(f,S),t(S,ce),t(f,ue),t(f,b),t(b,$e),t(f,he),t(f,J),t(J,be),t(f,ve),t(f,v),t(v,N),t(N,_e),t(f,ye),i(e,X,s),B(x,e,s),K=!0},p:Se,i(e){K||(T(h.$$.fragment,e),T(y.$$.fragment,e),T(w.$$.fragment,e),T(E.$$.fragment,e),T(k.$$.fragment,e),T(x.$$.fragment,e),K=!0)},o(e){F(h.$$.fragment,e),F(y.$$.fragment,e),F(w.$$.fragment,e),F(E.$$.fragment,e),F(k.$$.fragment,e),F(x.$$.fragment,e),K=!1},d(e){I(h,e),e&&o(R),I(y,e),e&&o(z),e&&o(d),e&&o(G),e&&o(P),e&&o(M),I(w,e),e&&o(V),e&&o(g),e&&o(Y),I(E,e),e&&o(L),I(k,e),e&&o(U),e&&o(p),e&&o(W),e&&o(f),e&&o(X),I(x,e)}}}class Ve extends je{constructor(h){super(),Ae(this,h,null,Ne,He,{})}}export{Ve as component};
