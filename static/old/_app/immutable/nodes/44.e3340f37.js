import{S as Vt,i as qt,s as Jt,y as x,a as i,k as n,q as a,z as D,c as f,l as s,m as p,r,h as l,n as d,A as P,b as m,G as t,H as Ut,g as H,d as O,B as S}from"../chunks/index.a7566c1a.js";import{C as pe}from"../chunks/CodeBlock.a090ee9b.js";import{H as Wt}from"../chunks/HeadingLink.20322812.js";import{T as zt}from"../chunks/Toc.c31a36b6.js";function Yt(Rt){let v,me,A,ie,E,Ae,Y,Le,Me,fe,L,de,h,je,K,Et='{{template "placeholderName" .}}',Be,Ie,Q,bt='{{block "placeholderName" .}}default...{{end}}',Fe,Ge,he,b,Ne,X,wt='{{define "placeholderName"}}custom...{{end}}',We,Re,ce,c,Ve,W,qe,Je,Z,Ue,ze,ue,u,Ye,ee,Ke,Qe,te,gt="{{.content|raw}}",Xe,Ze,$e,_,R,le,et,V,$,tt,w,oe,lt,ot,g,ae,at,rt,M,nt,k,st,pt,ve,j,_e,q,mt,Ee,B,be,y,it,re,ft,dt,we,I,ge,T,ht,ne,ct,ut,ke,F,ye,C,$t,se,vt,_t,Te,G,Ce;return v=new zt({}),A=new Wt({props:{title:"Overview"}}),L=new pe({props:{language:"javascript",content:"\n        const html = $template.loadFiles(\n            `${__hooks}/views/base.html`,\n            `${__hooks}/views/partial1.html`,\n            `${__hooks}/views/partial2.html`,\n        ).render(data)\n    "}}),j=new Wt({props:{title:"Example HTML page with layout"}}),B=new pe({props:{language:"html",content:`
        myapp/
            pb_hooks/
                views/
                    layout.html
                    hello.html
                main.pb.js
            pocketbase
    `}}),I=new pe({props:{language:"html",content:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>{{block "title" .}}Default app title{{end}}</title>
        </head>
        <body>
            Header...

            {{block "body" .}}
                Default app body...
            {{end}}

            Footer...
        </body>
        </html>
    `}}),F=new pe({props:{language:"html",content:`
        {{define "title"}}
            Page 1
        {{end}}

        {{define "body"}}
            <p>Hello from {{.name}}</p>
        {{end}}
    `}}),G=new pe({props:{language:"javascript",content:`
        routerAdd("get", "/hello/:name", (c) => {
            const name = c.pathParam("name")

            const html = $template.loadFiles(
                \`\${__hooks}/views/layout.html\`,
                \`\${__hooks}/views/hello.html\`,
            ).render({
                "name": name,
            })

            return c.html(200, html)
        })
    `}}),{c(){x(v.$$.fragment),me=i(),x(A.$$.fragment),ie=i(),E=n("p"),Ae=a(`A common task when creating custom routes or emails is the need of generating HTML output. To assist with
    this, PocketBase provides the global `),Y=n("code"),Le=a("$template"),Me=a(" helper for parsing and rendering HTML templates."),fe=i(),x(L.$$.fragment),de=i(),h=n("p"),je=a(`The general flow when working with composed and nested templates is that you create "base" template(s)
    that defines various placeholders using the
    `),K=n("code"),Be=a(Et),Ie=a(` or
    `),Q=n("code"),Fe=a(bt),Ge=a(" actions."),he=i(),b=n("p"),Ne=a(`Then in the partials, you define the content for those placeholders using the
    `),X=n("code"),We=a(wt),Re=a(" action."),ce=i(),c=n("p"),Ve=a("The dot object ("),W=n("code"),qe=a("."),Je=a(`) in the above represents the data passed to the templates
    via the `),Z=n("code"),Ue=a("render(data)"),ze=a(" method."),ue=i(),u=n("p"),Ye=a(`By default the templates apply contextual (HTML, JS, CSS, URI) auto escaping so the generated template
    content should be injection-safe. To render raw/verbatim trusted content in the templates you can use the
    builtin `),ee=n("code"),Ke=a("raw"),Qe=a(" function (eg. "),te=n("code"),Xe=a(gt),Ze=a(")."),$e=i(),_=n("div"),R=n("div"),le=n("i"),et=i(),V=n("div"),$=n("p"),tt=a(`For more information about the template syntax please refer to the
            `),w=n("a"),oe=n("em"),lt=a("html/template"),ot=a(`
            and
            `),g=n("a"),ae=n("em"),at=a("text/template"),rt=a(`
            package godocs.
            `),M=n("strong"),nt=a(`Another great resource is also the Hashicorp's
                `),k=n("a"),st=a("Learn Go Template Syntax"),pt=a(`
                tutorial.`),ve=i(),x(j.$$.fragment),_e=i(),q=n("p"),mt=a("Consider the following app directory structure:"),Ee=i(),x(B.$$.fragment),be=i(),y=n("p"),it=a("We define the content for "),re=n("code"),ft=a("layout.html"),dt=a(" as:"),we=i(),x(I.$$.fragment),ge=i(),T=n("p"),ht=a("We define the content for "),ne=n("code"),ct=a("hello.html"),ut=a(" as:"),ke=i(),x(F.$$.fragment),ye=i(),C=n("p"),$t=a("Then to output the final page, we'll register a custom "),se=n("code"),vt=a("/hello/:name"),_t=a(" route:"),Te=i(),x(G.$$.fragment),this.h()},l(e){D(v.$$.fragment,e),me=f(e),D(A.$$.fragment,e),ie=f(e),E=s(e,"P",{});var o=p(E);Ae=r(o,`A common task when creating custom routes or emails is the need of generating HTML output. To assist with
    this, PocketBase provides the global `),Y=s(o,"CODE",{});var kt=p(Y);Le=r(kt,"$template"),kt.forEach(l),Me=r(o," helper for parsing and rendering HTML templates."),o.forEach(l),fe=f(e),D(L.$$.fragment,e),de=f(e),h=s(e,"P",{});var J=p(h);je=r(J,`The general flow when working with composed and nested templates is that you create "base" template(s)
    that defines various placeholders using the
    `),K=s(J,"CODE",{});var yt=p(K);Be=r(yt,Et),yt.forEach(l),Ie=r(J,` or
    `),Q=s(J,"CODE",{});var Tt=p(Q);Fe=r(Tt,bt),Tt.forEach(l),Ge=r(J," actions."),J.forEach(l),he=f(e),b=s(e,"P",{});var xe=p(b);Ne=r(xe,`Then in the partials, you define the content for those placeholders using the
    `),X=s(xe,"CODE",{});var Ct=p(X);We=r(Ct,wt),Ct.forEach(l),Re=r(xe," action."),xe.forEach(l),ce=f(e),c=s(e,"P",{});var U=p(c);Ve=r(U,"The dot object ("),W=s(U,"CODE",{class:!0});var xt=p(W);qe=r(xt,"."),xt.forEach(l),Je=r(U,`) in the above represents the data passed to the templates
    via the `),Z=s(U,"CODE",{});var Dt=p(Z);Ue=r(Dt,"render(data)"),Dt.forEach(l),ze=r(U," method."),U.forEach(l),ue=f(e),u=s(e,"P",{});var z=p(u);Ye=r(z,`By default the templates apply contextual (HTML, JS, CSS, URI) auto escaping so the generated template
    content should be injection-safe. To render raw/verbatim trusted content in the templates you can use the
    builtin `),ee=s(z,"CODE",{});var Pt=p(ee);Ke=r(Pt,"raw"),Pt.forEach(l),Qe=r(z," function (eg. "),te=s(z,"CODE",{});var Ht=p(te);Xe=r(Ht,gt),Ht.forEach(l),Ze=r(z,")."),z.forEach(l),$e=f(e),_=s(e,"DIV",{class:!0});var De=p(_);R=s(De,"DIV",{class:!0});var Ot=p(R);le=s(Ot,"I",{class:!0}),p(le).forEach(l),Ot.forEach(l),et=f(De),V=s(De,"DIV",{class:!0});var St=p(V);$=s(St,"P",{});var N=p($);tt=r(N,`For more information about the template syntax please refer to the
            `),w=s(N,"A",{href:!0,target:!0,rel:!0});var At=p(w);oe=s(At,"EM",{});var Lt=p(oe);lt=r(Lt,"html/template"),Lt.forEach(l),At.forEach(l),ot=r(N,`
            and
            `),g=s(N,"A",{href:!0,target:!0,rel:!0});var Mt=p(g);ae=s(Mt,"EM",{});var jt=p(ae);at=r(jt,"text/template"),jt.forEach(l),Mt.forEach(l),rt=r(N,`
            package godocs.
            `),M=s(N,"STRONG",{});var Pe=p(M);nt=r(Pe,`Another great resource is also the Hashicorp's
                `),k=s(Pe,"A",{href:!0,target:!0,rel:!0});var Bt=p(k);st=r(Bt,"Learn Go Template Syntax"),Bt.forEach(l),pt=r(Pe,`
                tutorial.`),Pe.forEach(l),N.forEach(l),St.forEach(l),De.forEach(l),ve=f(e),D(j.$$.fragment,e),_e=f(e),q=s(e,"P",{});var It=p(q);mt=r(It,"Consider the following app directory structure:"),It.forEach(l),Ee=f(e),D(B.$$.fragment,e),be=f(e),y=s(e,"P",{});var He=p(y);it=r(He,"We define the content for "),re=s(He,"CODE",{});var Ft=p(re);ft=r(Ft,"layout.html"),Ft.forEach(l),dt=r(He," as:"),He.forEach(l),we=f(e),D(I.$$.fragment,e),ge=f(e),T=s(e,"P",{});var Oe=p(T);ht=r(Oe,"We define the content for "),ne=s(Oe,"CODE",{});var Gt=p(ne);ct=r(Gt,"hello.html"),Gt.forEach(l),ut=r(Oe," as:"),Oe.forEach(l),ke=f(e),D(F.$$.fragment,e),ye=f(e),C=s(e,"P",{});var Se=p(C);$t=r(Se,"Then to output the final page, we'll register a custom "),se=s(Se,"CODE",{});var Nt=p(se);vt=r(Nt,"/hello/:name"),Nt.forEach(l),_t=r(Se," route:"),Se.forEach(l),Te=f(e),D(G.$$.fragment,e),this.h()},h(){d(W,"class","txt-bold"),d(le,"class","ri-information-line"),d(R,"class","icon"),d(w,"href","https://pkg.go.dev/html/template#hdr-A_fuller_picture"),d(w,"target","_blank"),d(w,"rel","noopener noreferrer"),d(g,"href","https://pkg.go.dev/text/template"),d(g,"target","_blank"),d(g,"rel","noopener noreferrer"),d(k,"href","https://developer.hashicorp.com/nomad/tutorials/templates/go-template-syntax"),d(k,"target","_blank"),d(k,"rel","noopener noreferrer"),d(V,"class","content"),d(_,"class","alert alert-info m-t-10 m-b-sm")},m(e,o){P(v,e,o),m(e,me,o),P(A,e,o),m(e,ie,o),m(e,E,o),t(E,Ae),t(E,Y),t(Y,Le),t(E,Me),m(e,fe,o),P(L,e,o),m(e,de,o),m(e,h,o),t(h,je),t(h,K),t(K,Be),t(h,Ie),t(h,Q),t(Q,Fe),t(h,Ge),m(e,he,o),m(e,b,o),t(b,Ne),t(b,X),t(X,We),t(b,Re),m(e,ce,o),m(e,c,o),t(c,Ve),t(c,W),t(W,qe),t(c,Je),t(c,Z),t(Z,Ue),t(c,ze),m(e,ue,o),m(e,u,o),t(u,Ye),t(u,ee),t(ee,Ke),t(u,Qe),t(u,te),t(te,Xe),t(u,Ze),m(e,$e,o),m(e,_,o),t(_,R),t(R,le),t(_,et),t(_,V),t(V,$),t($,tt),t($,w),t(w,oe),t(oe,lt),t($,ot),t($,g),t(g,ae),t(ae,at),t($,rt),t($,M),t(M,nt),t(M,k),t(k,st),t(M,pt),m(e,ve,o),P(j,e,o),m(e,_e,o),m(e,q,o),t(q,mt),m(e,Ee,o),P(B,e,o),m(e,be,o),m(e,y,o),t(y,it),t(y,re),t(re,ft),t(y,dt),m(e,we,o),P(I,e,o),m(e,ge,o),m(e,T,o),t(T,ht),t(T,ne),t(ne,ct),t(T,ut),m(e,ke,o),P(F,e,o),m(e,ye,o),m(e,C,o),t(C,$t),t(C,se),t(se,vt),t(C,_t),m(e,Te,o),P(G,e,o),Ce=!0},p:Ut,i(e){Ce||(H(v.$$.fragment,e),H(A.$$.fragment,e),H(L.$$.fragment,e),H(j.$$.fragment,e),H(B.$$.fragment,e),H(I.$$.fragment,e),H(F.$$.fragment,e),H(G.$$.fragment,e),Ce=!0)},o(e){O(v.$$.fragment,e),O(A.$$.fragment,e),O(L.$$.fragment,e),O(j.$$.fragment,e),O(B.$$.fragment,e),O(I.$$.fragment,e),O(F.$$.fragment,e),O(G.$$.fragment,e),Ce=!1},d(e){S(v,e),e&&l(me),S(A,e),e&&l(ie),e&&l(E),e&&l(fe),S(L,e),e&&l(de),e&&l(h),e&&l(he),e&&l(b),e&&l(ce),e&&l(c),e&&l(ue),e&&l(u),e&&l($e),e&&l(_),e&&l(ve),S(j,e),e&&l(_e),e&&l(q),e&&l(Ee),S(B,e),e&&l(be),e&&l(y),e&&l(we),S(I,e),e&&l(ge),e&&l(T),e&&l(ke),S(F,e),e&&l(ye),e&&l(C),e&&l(Te),S(G,e)}}}class el extends Vt{constructor(v){super(),qt(this,v,null,Yt,Jt,{})}}export{el as component};
