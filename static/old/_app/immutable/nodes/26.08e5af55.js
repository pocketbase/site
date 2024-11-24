import{S as Je,i as qe,s as Te,k as b,q as u,a as n,y as o,l as _,m as L,r as w,h as r,c as m,z as f,n as de,b as a,G as s,A as $,H as Ue,g as l,d as g,B as i}from"../chunks/index.a7566c1a.js";import{H as q}from"../chunks/HeadingLink.20322812.js";import{C as T}from"../chunks/CodeBlock.a090ee9b.js";import{T as ze}from"../chunks/Toc.c31a36b6.js";import{L as Me,a as Fe}from"../chunks/LogsSettingsSection.8fb5961d.js";function Ke(He){let p,U,ue,we,z,be,_e,M,Le,Ee,Q,v,R,W,V,D,X,E,ke,k,F,ve,We,Y,h,Z,I,c,A,ee,y,te,C,re,d,ae,x,se,P,ne,B,me,G,K,De,he,oe,O,fe,j,$e,S,N,Ie,Ae,le,H,ge,J,ie;return v=new Me({}),W=new ze({}),D=new q({props:{title:"Log methods"}}),h=new q({props:{title:"Debug(message, attrs...)",tag:"h5"}}),I=new T({props:{language:"go",content:`
        app.Logger().Debug("Debug message!")

        app.Logger().Debug(
            "Debug message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}}),A=new q({props:{title:"Info(message, attrs...)",tag:"h5"}}),y=new T({props:{language:"go",content:`
        app.Logger().Info("Info message!")

        app.Logger().Info(
            "Info message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}}),C=new q({props:{title:"Warn(message, attrs...)",tag:"h5"}}),d=new T({props:{language:"go",content:`
        app.Logger().Warn("Warning message!")

        app.Logger().Warn(
            "Warning message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}}),x=new q({props:{title:"Error(message, attrs...)",tag:"h5"}}),P=new T({props:{language:"go",content:`
        app.Logger().Error("Error message!")

        app.Logger().Error(
            "Error message with attributes!",
            "id", 123,
            "error", err,
        )
    `}}),B=new q({props:{title:"With(attrs...)",tag:"h5"}}),O=new T({props:{language:"go",content:`
        l := app.Logger().With("total", 123)

        // results in log with data {"total": 123}
        l.Info("message A")

        // results in log with data {"total": 123, "name": "john"}
        l.Info("message B", "name", "john")
    `}}),j=new q({props:{title:"WithGroup(name)",tag:"h5"}}),H=new T({props:{language:"go",content:`
        l := app.Logger().WithGroup("sub")

        // results in log with data {"sub": { "total": 123 }}
        l.Info("message A", "total", 123)
    `}}),J=new Fe({}),{c(){p=b("p"),U=b("code"),ue=u("app.Logger()"),we=u(" provides access to a standard "),z=b("code"),be=u("slog.Logger"),_e=u(` implementation that
    writes any logs into the database so that they can be later explored from the PocketBase
    `),M=b("em"),Le=u("Admin UI > Logs"),Ee=u(" section."),Q=n(),o(v.$$.fragment),R=n(),o(W.$$.fragment),V=n(),o(D.$$.fragment),X=n(),E=b("p"),ke=u(`All standard
    `),k=b("a"),F=b("code"),ve=u("slog.Logger"),We=u(`
    methods are available but below is a list with some of the most notable ones.`),Y=n(),o(h.$$.fragment),Z=n(),o(I.$$.fragment),c=n(),o(A.$$.fragment),ee=n(),o(y.$$.fragment),te=n(),o(C.$$.fragment),re=n(),o(d.$$.fragment),ae=n(),o(x.$$.fragment),se=n(),o(P.$$.fragment),ne=n(),o(B.$$.fragment),me=n(),G=b("p"),K=b("code"),De=u("With(atrs...)"),he=u(` creates a new local logger that will "inject" the specified attributes with each
    following log.`),oe=n(),o(O.$$.fragment),fe=n(),o(j.$$.fragment),$e=n(),S=b("p"),N=b("code"),Ie=u("WithGroup(name)"),Ae=u(` creates a new local logger that wraps all logs attributes under the specified
    group name.`),le=n(),o(H.$$.fragment),ge=n(),o(J.$$.fragment),this.h()},l(e){p=_(e,"P",{});var t=L(p);U=_(t,"CODE",{});var xe=L(U);ue=w(xe,"app.Logger()"),xe.forEach(r),we=w(t," provides access to a standard "),z=_(t,"CODE",{});var Pe=L(z);be=w(Pe,"slog.Logger"),Pe.forEach(r),_e=w(t,` implementation that
    writes any logs into the database so that they can be later explored from the PocketBase
    `),M=_(t,"EM",{});var Be=L(M);Le=w(Be,"Admin UI > Logs"),Be.forEach(r),Ee=w(t," section."),t.forEach(r),Q=m(e),f(v.$$.fragment,e),R=m(e),f(W.$$.fragment,e),V=m(e),f(D.$$.fragment,e),X=m(e),E=_(e,"P",{});var pe=L(E);ke=w(pe,`All standard
    `),k=_(pe,"A",{href:!0,target:!0,rel:!0});var Ge=L(k);F=_(Ge,"CODE",{});var Oe=L(F);ve=w(Oe,"slog.Logger"),Oe.forEach(r),Ge.forEach(r),We=w(pe,`
    methods are available but below is a list with some of the most notable ones.`),pe.forEach(r),Y=m(e),f(h.$$.fragment,e),Z=m(e),f(I.$$.fragment,e),c=m(e),f(A.$$.fragment,e),ee=m(e),f(y.$$.fragment,e),te=m(e),f(C.$$.fragment,e),re=m(e),f(d.$$.fragment,e),ae=m(e),f(x.$$.fragment,e),se=m(e),f(P.$$.fragment,e),ne=m(e),f(B.$$.fragment,e),me=m(e),G=_(e,"P",{});var ye=L(G);K=_(ye,"CODE",{});var je=L(K);De=w(je,"With(atrs...)"),je.forEach(r),he=w(ye,` creates a new local logger that will "inject" the specified attributes with each
    following log.`),ye.forEach(r),oe=m(e),f(O.$$.fragment,e),fe=m(e),f(j.$$.fragment,e),$e=m(e),S=_(e,"P",{});var Ce=L(S);N=_(Ce,"CODE",{});var Se=L(N);Ie=w(Se,"WithGroup(name)"),Se.forEach(r),Ae=w(Ce,` creates a new local logger that wraps all logs attributes under the specified
    group name.`),Ce.forEach(r),le=m(e),f(H.$$.fragment,e),ge=m(e),f(J.$$.fragment,e),this.h()},h(){de(k,"href","https://pkg.go.dev/log/slog"),de(k,"target","_blank"),de(k,"rel","noopener noreferrer")},m(e,t){a(e,p,t),s(p,U),s(U,ue),s(p,we),s(p,z),s(z,be),s(p,_e),s(p,M),s(M,Le),s(p,Ee),a(e,Q,t),$(v,e,t),a(e,R,t),$(W,e,t),a(e,V,t),$(D,e,t),a(e,X,t),a(e,E,t),s(E,ke),s(E,k),s(k,F),s(F,ve),s(E,We),a(e,Y,t),$(h,e,t),a(e,Z,t),$(I,e,t),a(e,c,t),$(A,e,t),a(e,ee,t),$(y,e,t),a(e,te,t),$(C,e,t),a(e,re,t),$(d,e,t),a(e,ae,t),$(x,e,t),a(e,se,t),$(P,e,t),a(e,ne,t),$(B,e,t),a(e,me,t),a(e,G,t),s(G,K),s(K,De),s(G,he),a(e,oe,t),$(O,e,t),a(e,fe,t),$(j,e,t),a(e,$e,t),a(e,S,t),s(S,N),s(N,Ie),s(S,Ae),a(e,le,t),$(H,e,t),a(e,ge,t),$(J,e,t),ie=!0},p:Ue,i(e){ie||(l(v.$$.fragment,e),l(W.$$.fragment,e),l(D.$$.fragment,e),l(h.$$.fragment,e),l(I.$$.fragment,e),l(A.$$.fragment,e),l(y.$$.fragment,e),l(C.$$.fragment,e),l(d.$$.fragment,e),l(x.$$.fragment,e),l(P.$$.fragment,e),l(B.$$.fragment,e),l(O.$$.fragment,e),l(j.$$.fragment,e),l(H.$$.fragment,e),l(J.$$.fragment,e),ie=!0)},o(e){g(v.$$.fragment,e),g(W.$$.fragment,e),g(D.$$.fragment,e),g(h.$$.fragment,e),g(I.$$.fragment,e),g(A.$$.fragment,e),g(y.$$.fragment,e),g(C.$$.fragment,e),g(d.$$.fragment,e),g(x.$$.fragment,e),g(P.$$.fragment,e),g(B.$$.fragment,e),g(O.$$.fragment,e),g(j.$$.fragment,e),g(H.$$.fragment,e),g(J.$$.fragment,e),ie=!1},d(e){e&&r(p),e&&r(Q),i(v,e),e&&r(R),i(W,e),e&&r(V),i(D,e),e&&r(X),e&&r(E),e&&r(Y),i(h,e),e&&r(Z),i(I,e),e&&r(c),i(A,e),e&&r(ee),i(y,e),e&&r(te),i(C,e),e&&r(re),i(d,e),e&&r(ae),i(x,e),e&&r(se),i(P,e),e&&r(ne),i(B,e),e&&r(me),e&&r(G),e&&r(oe),i(O,e),e&&r(fe),i(j,e),e&&r($e),e&&r(S),e&&r(le),i(H,e),e&&r(ge),i(J,e)}}}class Ye extends Je{constructor(p){super(),qe(this,p,null,Ke,Te,{})}}export{Ye as component};
