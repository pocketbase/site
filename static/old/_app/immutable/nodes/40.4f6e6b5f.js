import{S as Oe,i as Se,s as He,k as b,q as u,a as s,y as m,l as _,m as k,r as w,h as r,c as $,z as l,n as xe,b as a,G as n,A as f,H as Je,g as o,d as i,B as g}from"../chunks/index.a7566c1a.js";import{H as q}from"../chunks/HeadingLink.20322812.js";import{C as N}from"../chunks/CodeBlock.a090ee9b.js";import{T as We}from"../chunks/Toc.c31a36b6.js";import{L as qe,a as Ne}from"../chunks/LogsSettingsSection.8fb5961d.js";function Te(Ie){let p,T,pe,ue,U,we,be,K,h,Q,y,R,L,V,E,_e,v,z,ke,Ee,X,A,Y,D,Z,x,c,C,ee,P,te,d,re,j,ae,B,se,G,$e,I,M,ve,he,ne,O,me,S,le,H,F,ye,Le,fe,J,oe,W,ie;return h=new qe({}),y=new We({}),L=new q({props:{title:"Logger methods"}}),A=new q({props:{title:"debug(message, attrs...)",tag:"h5"}}),D=new N({props:{language:"go",content:`
        $app.logger().debug("Debug message!")

        $app.logger().debug(
            "Debug message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}}),x=new q({props:{title:"info(message, attrs...)",tag:"h5"}}),C=new N({props:{language:"go",content:`
        $app.logger().info("Info message!")

        $app.logger().info(
            "Info message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}}),P=new q({props:{title:"warn(message, attrs...)",tag:"h5"}}),d=new N({props:{language:"go",content:`
        $app.logger().warn("Warning message!")

        $app.logger().warn(
            "Warning message with attributes!",
            "name", "John Doe",
            "id", 123,
        )
    `}}),j=new q({props:{title:"error(message, attrs...)",tag:"h5"}}),B=new N({props:{language:"go",content:`
        $app.logger().error("Error message!")

        $app.logger().error(
            "Error message with attributes!",
            "id", 123,
            "error", err,
        )
    `}}),G=new q({props:{title:"with(attrs...)",tag:"h5"}}),O=new N({props:{language:"go",content:`
        const l = $app.logger().with("total", 123)

        // results in log with data {"total": 123}
        l.info("message A")

        // results in log with data {"total": 123, "name": "john"}
        l.info("message B", "name", "john")
    `}}),S=new q({props:{title:"withGroup(name)",tag:"h5"}}),J=new N({props:{language:"go",content:`
        const l = $app.logger().withGroup("sub")

        // results in log with data {"sub": { "total": 123 }}
        l.info("message A", "total", 123)
    `}}),W=new Ne({}),{c(){p=b("p"),T=b("code"),pe=u("$app.logger()"),ue=u(` could be used to writes any logs into the database so that they can be later
    explored from the PocketBase `),U=b("em"),we=u("Admin UI > Logs"),be=u(" section."),K=s(),m(h.$$.fragment),Q=s(),m(y.$$.fragment),R=s(),m(L.$$.fragment),V=s(),E=b("p"),_e=u(`All standard
    `),v=b("a"),z=b("code"),ke=u("slog.Logger"),Ee=u(`
    methods are available but below is a list with some of the most notable ones. Note that attributes are represented
    as key-value pair arguments.`),X=s(),m(A.$$.fragment),Y=s(),m(D.$$.fragment),Z=s(),m(x.$$.fragment),c=s(),m(C.$$.fragment),ee=s(),m(P.$$.fragment),te=s(),m(d.$$.fragment),re=s(),m(j.$$.fragment),ae=s(),m(B.$$.fragment),se=s(),m(G.$$.fragment),$e=s(),I=b("p"),M=b("code"),ve=u("with(atrs...)"),he=u(` creates a new local logger that will "inject" the specified attributes with each
    following log.`),ne=s(),m(O.$$.fragment),me=s(),m(S.$$.fragment),le=s(),H=b("p"),F=b("code"),ye=u("withGroup(name)"),Le=u(` creates a new local logger that wraps all logs attributes under the specified
    group name.`),fe=s(),m(J.$$.fragment),oe=s(),m(W.$$.fragment),this.h()},l(e){p=_(e,"P",{});var t=k(p);T=_(t,"CODE",{});var Ce=k(T);pe=w(Ce,"$app.logger()"),Ce.forEach(r),ue=w(t,` could be used to writes any logs into the database so that they can be later
    explored from the PocketBase `),U=_(t,"EM",{});var Pe=k(U);we=w(Pe,"Admin UI > Logs"),Pe.forEach(r),be=w(t," section."),t.forEach(r),K=$(e),l(h.$$.fragment,e),Q=$(e),l(y.$$.fragment,e),R=$(e),l(L.$$.fragment,e),V=$(e),E=_(e,"P",{});var ge=k(E);_e=w(ge,`All standard
    `),v=_(ge,"A",{href:!0,target:!0,rel:!0});var de=k(v);z=_(de,"CODE",{});var je=k(z);ke=w(je,"slog.Logger"),je.forEach(r),de.forEach(r),Ee=w(ge,`
    methods are available but below is a list with some of the most notable ones. Note that attributes are represented
    as key-value pair arguments.`),ge.forEach(r),X=$(e),l(A.$$.fragment,e),Y=$(e),l(D.$$.fragment,e),Z=$(e),l(x.$$.fragment,e),c=$(e),l(C.$$.fragment,e),ee=$(e),l(P.$$.fragment,e),te=$(e),l(d.$$.fragment,e),re=$(e),l(j.$$.fragment,e),ae=$(e),l(B.$$.fragment,e),se=$(e),l(G.$$.fragment,e),$e=$(e),I=_(e,"P",{});var Ae=k(I);M=_(Ae,"CODE",{});var Be=k(M);ve=w(Be,"with(atrs...)"),Be.forEach(r),he=w(Ae,` creates a new local logger that will "inject" the specified attributes with each
    following log.`),Ae.forEach(r),ne=$(e),l(O.$$.fragment,e),me=$(e),l(S.$$.fragment,e),le=$(e),H=_(e,"P",{});var De=k(H);F=_(De,"CODE",{});var Ge=k(F);ye=w(Ge,"withGroup(name)"),Ge.forEach(r),Le=w(De,` creates a new local logger that wraps all logs attributes under the specified
    group name.`),De.forEach(r),fe=$(e),l(J.$$.fragment,e),oe=$(e),l(W.$$.fragment,e),this.h()},h(){xe(v,"href","/jsvm/interfaces/slog.Logger.html"),xe(v,"target","_blank"),xe(v,"rel","noopener noreferrer")},m(e,t){a(e,p,t),n(p,T),n(T,pe),n(p,ue),n(p,U),n(U,we),n(p,be),a(e,K,t),f(h,e,t),a(e,Q,t),f(y,e,t),a(e,R,t),f(L,e,t),a(e,V,t),a(e,E,t),n(E,_e),n(E,v),n(v,z),n(z,ke),n(E,Ee),a(e,X,t),f(A,e,t),a(e,Y,t),f(D,e,t),a(e,Z,t),f(x,e,t),a(e,c,t),f(C,e,t),a(e,ee,t),f(P,e,t),a(e,te,t),f(d,e,t),a(e,re,t),f(j,e,t),a(e,ae,t),f(B,e,t),a(e,se,t),f(G,e,t),a(e,$e,t),a(e,I,t),n(I,M),n(M,ve),n(I,he),a(e,ne,t),f(O,e,t),a(e,me,t),f(S,e,t),a(e,le,t),a(e,H,t),n(H,F),n(F,ye),n(H,Le),a(e,fe,t),f(J,e,t),a(e,oe,t),f(W,e,t),ie=!0},p:Je,i(e){ie||(o(h.$$.fragment,e),o(y.$$.fragment,e),o(L.$$.fragment,e),o(A.$$.fragment,e),o(D.$$.fragment,e),o(x.$$.fragment,e),o(C.$$.fragment,e),o(P.$$.fragment,e),o(d.$$.fragment,e),o(j.$$.fragment,e),o(B.$$.fragment,e),o(G.$$.fragment,e),o(O.$$.fragment,e),o(S.$$.fragment,e),o(J.$$.fragment,e),o(W.$$.fragment,e),ie=!0)},o(e){i(h.$$.fragment,e),i(y.$$.fragment,e),i(L.$$.fragment,e),i(A.$$.fragment,e),i(D.$$.fragment,e),i(x.$$.fragment,e),i(C.$$.fragment,e),i(P.$$.fragment,e),i(d.$$.fragment,e),i(j.$$.fragment,e),i(B.$$.fragment,e),i(G.$$.fragment,e),i(O.$$.fragment,e),i(S.$$.fragment,e),i(J.$$.fragment,e),i(W.$$.fragment,e),ie=!1},d(e){e&&r(p),e&&r(K),g(h,e),e&&r(Q),g(y,e),e&&r(R),g(L,e),e&&r(V),e&&r(E),e&&r(X),g(A,e),e&&r(Y),g(D,e),e&&r(Z),g(x,e),e&&r(c),g(C,e),e&&r(ee),g(P,e),e&&r(te),g(d,e),e&&r(re),g(j,e),e&&r(ae),g(B,e),e&&r(se),g(G,e),e&&r($e),e&&r(I),e&&r(ne),g(O,e),e&&r(me),g(S,e),e&&r(le),e&&r(H),e&&r(fe),g(J,e),e&&r(oe),g(W,e)}}}class Qe extends Oe{constructor(p){super(),Se(this,p,null,Te,He,{})}}export{Qe as component};
