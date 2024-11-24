import{S as Je,i as Ke,s as Me,k as l,q as a,a as v,y as Ue,l as n,m as s,r,h as t,c as g,z as We,n as p,b as x,G as e,A as Xe,H as Ye,g as Ze,d as et,B as tt}from"../chunks/index.a7566c1a.js";import{C as ot}from"../chunks/CodeBlock.a090ee9b.js";function at(He){let _,W,z,B,X,V,c,I,b,Y,Z,y,C,ee,S,te,oe,ae,G,re,O,le,T,ne,se,ie,w,ce,P,pe,de,ue,h,fe,A,he,me,$,ve,ge,j,m,D,N,_e,q,i,Q,be,Ee,ke,ye,R,Ce,Ge,E,Oe,we,k,xe,Be,De,qe,F;return G=new ot({props:{language:"go",content:`
                package main

                import (
                    "log"
                    "os"

                    "github.com/pocketbase/pocketbase"
                    "github.com/pocketbase/pocketbase/apis"
                    "github.com/pocketbase/pocketbase/core"
                )

                func main() {
                    app := pocketbase.New()

                    // serves static files from the provided public dir (if exists)
                    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                        e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))
                        return nil
                    })

                    if err := app.Start(); err != nil {
                        log.Fatal(err)
                    }
                }
            `}}),{c(){_=l("p"),W=a(`PocketBase can be used as regular Go package that exposes various helpers and hooks to help you implement
    you own custom business logic.`),z=v(),B=l("p"),X=a("To get started:"),V=v(),c=l("ol"),I=l("li"),b=l("a"),Y=a("Install Go 1.21+"),Z=v(),y=l("li"),C=l("p"),ee=a("Create a new project directory with "),S=l("code"),te=a("main.go"),oe=a(` file inside it. This is what an example PocketBase
            application looks like:`),ae=v(),Ue(G.$$.fragment),re=v(),O=l("li"),le=a("To init the dependencies, run "),T=l("code"),ne=a("go mod init myapp && go mod tidy"),se=a("."),ie=v(),w=l("li"),ce=a("To start the application, run "),P=l("code"),pe=a("go run main.go serve"),de=a("."),ue=v(),h=l("li"),fe=a("To build a statically linked executable, you can run "),A=l("code"),he=a("CGO_ENABLED=0 go build"),me=a(` and then
        start the created executable with `),$=l("code"),ve=a("./myapp serve"),ge=a("."),j=v(),m=l("div"),D=l("div"),N=l("i"),_e=v(),q=l("div"),i=l("p"),Q=l("strong"),be=a("PocketBase embeds SQLite, but doesn't require CGO"),Ee=a(`.
            `),ke=l("br"),ye=a(`
            If CGO is enabled (aka. `),R=l("code"),Ce=a("CGO_ENABLED=1"),Ge=a(`), it will use
            `),E=l("a"),Oe=a("mattn/go-sqlite3"),we=a(`
            driver, otherwise the pure Go SQLite port -
            `),k=l("a"),xe=a(`modernc.org/sqlite
            `),Be=a(`.
            `),De=l("br"),qe=a(`
            Enable CGO only if you really need to squeeze the query performance at the expense of complicating
            cross compilation.`),this.h()},l(o){_=n(o,"P",{});var u=s(_);W=r(u,`PocketBase can be used as regular Go package that exposes various helpers and hooks to help you implement
    you own custom business logic.`),u.forEach(t),z=g(o),B=n(o,"P",{});var Le=s(B);X=r(Le,"To get started:"),Le.forEach(t),V=g(o),c=n(o,"OL",{start:!0});var f=s(c);I=n(f,"LI",{});var Ie=s(I);b=n(Ie,"A",{href:!0,target:!0,rel:!0});var Se=s(b);Y=r(Se,"Install Go 1.21+"),Se.forEach(t),Ie.forEach(t),Z=g(f),y=n(f,"LI",{});var H=s(y);C=n(H,"P",{});var J=s(C);ee=r(J,"Create a new project directory with "),S=n(J,"CODE",{});var Te=s(S);te=r(Te,"main.go"),Te.forEach(t),oe=r(J,` file inside it. This is what an example PocketBase
            application looks like:`),J.forEach(t),ae=g(H),We(G.$$.fragment,H),H.forEach(t),re=g(f),O=n(f,"LI",{});var K=s(O);le=r(K,"To init the dependencies, run "),T=n(K,"CODE",{});var Pe=s(T);ne=r(Pe,"go mod init myapp && go mod tidy"),Pe.forEach(t),se=r(K,"."),K.forEach(t),ie=g(f),w=n(f,"LI",{});var M=s(w);ce=r(M,"To start the application, run "),P=n(M,"CODE",{});var Ae=s(P);pe=r(Ae,"go run main.go serve"),Ae.forEach(t),de=r(M,"."),M.forEach(t),ue=g(f),h=n(f,"LI",{});var L=s(h);fe=r(L,"To build a statically linked executable, you can run "),A=n(L,"CODE",{});var $e=s(A);he=r($e,"CGO_ENABLED=0 go build"),$e.forEach(t),me=r(L,` and then
        start the created executable with `),$=n(L,"CODE",{});var Ne=s($);ve=r(Ne,"./myapp serve"),Ne.forEach(t),ge=r(L,"."),L.forEach(t),f.forEach(t),j=g(o),m=n(o,"DIV",{class:!0});var U=s(m);D=n(U,"DIV",{class:!0});var Qe=s(D);N=n(Qe,"I",{class:!0}),s(N).forEach(t),Qe.forEach(t),_e=g(U),q=n(U,"DIV",{class:!0});var Re=s(q);i=n(Re,"P",{});var d=s(i);Q=n(d,"STRONG",{});var ze=s(Q);be=r(ze,"PocketBase embeds SQLite, but doesn't require CGO"),ze.forEach(t),Ee=r(d,`.
            `),ke=n(d,"BR",{}),ye=r(d,`
            If CGO is enabled (aka. `),R=n(d,"CODE",{});var Ve=s(R);Ce=r(Ve,"CGO_ENABLED=1"),Ve.forEach(t),Ge=r(d,`), it will use
            `),E=n(d,"A",{href:!0,target:!0,rel:!0});var je=s(E);Oe=r(je,"mattn/go-sqlite3"),je.forEach(t),we=r(d,`
            driver, otherwise the pure Go SQLite port -
            `),k=n(d,"A",{href:!0,target:!0,rel:!0});var Fe=s(k);xe=r(Fe,`modernc.org/sqlite
            `),Fe.forEach(t),Be=r(d,`.
            `),De=n(d,"BR",{}),qe=r(d,`
            Enable CGO only if you really need to squeeze the query performance at the expense of complicating
            cross compilation.`),d.forEach(t),Re.forEach(t),U.forEach(t),this.h()},h(){p(b,"href","https://go.dev/doc/install"),p(b,"target","_blank"),p(b,"rel","noreferrer noopener"),p(c,"start","0"),p(N,"class","ri-information-line"),p(D,"class","icon"),p(E,"href","https://pkg.go.dev/github.com/mattn/go-sqlite3"),p(E,"target","_blank"),p(E,"rel","noreferrer noopener"),p(k,"href","https://pkg.go.dev/modernc.org/sqlite"),p(k,"target","_blank"),p(k,"rel","noreferrer noopener"),p(q,"class","content"),p(m,"class","alert alert-info")},m(o,u){x(o,_,u),e(_,W),x(o,z,u),x(o,B,u),e(B,X),x(o,V,u),x(o,c,u),e(c,I),e(I,b),e(b,Y),e(c,Z),e(c,y),e(y,C),e(C,ee),e(C,S),e(S,te),e(C,oe),e(y,ae),Xe(G,y,null),e(c,re),e(c,O),e(O,le),e(O,T),e(T,ne),e(O,se),e(c,ie),e(c,w),e(w,ce),e(w,P),e(P,pe),e(w,de),e(c,ue),e(c,h),e(h,fe),e(h,A),e(A,he),e(h,me),e(h,$),e($,ve),e(h,ge),x(o,j,u),x(o,m,u),e(m,D),e(D,N),e(m,_e),e(m,q),e(q,i),e(i,Q),e(Q,be),e(i,Ee),e(i,ke),e(i,ye),e(i,R),e(R,Ce),e(i,Ge),e(i,E),e(E,Oe),e(i,we),e(i,k),e(k,xe),e(i,Be),e(i,De),e(i,qe),F=!0},p:Ye,i(o){F||(Ze(G.$$.fragment,o),F=!0)},o(o){et(G.$$.fragment,o),F=!1},d(o){o&&t(_),o&&t(z),o&&t(B),o&&t(V),o&&t(c),tt(G),o&&t(j),o&&t(m)}}}class nt extends Je{constructor(_){super(),Ke(this,_,null,at,Me,{})}}export{nt as component};
