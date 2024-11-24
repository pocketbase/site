import{S as la,i as ra,s as na,y as D,a as m,k as n,q as o,z as O,c as f,l as s,m as p,r as l,h as a,n as c,A as S,b as i,G as t,H as sa,g as H,d as L,B as A}from"../chunks/index.a7566c1a.js";import{C as ce}from"../chunks/CodeBlock.a090ee9b.js";import{H as aa}from"../chunks/HeadingLink.20322812.js";import{T as pa}from"../chunks/Toc.c31a36b6.js";function ia(oa){let b,ue,R,he,J,je,de,_,Ie,X,We,Je,ve,g,Ve,k,Z,qe,Ue,be,G,$e,u,ze,ee,St='{{template "placeholderName" .}}',Ke,Ye,te,Ht='{{block "placeholderName" .}}default...{{end}}',Qe,Xe,_e,y,Ze,ae,Lt='{{define "placeholderName"}}custom...{{end}}',et,tt,ge,h,at,V,ot,lt,oe,rt,nt,ke,d,st,le,pt,it,re,At="{{.content|raw}}",mt,ft,ye,$,q,ne,ct,U,v,ut,E,se,ht,dt,w,pe,vt,bt,M,$t,T,_t,gt,Ee,N,we,z,kt,Te,B,Ce,C,yt,ie,Et,wt,Pe,F,xe,P,Tt,me,Ct,Pt,De,j,Oe,x,xt,fe,Dt,Ot,Se,I,He;return b=new pa({}),R=new aa({props:{title:"Overview"}}),G=new ce({props:{language:"go",content:`
        import "github.com/pocketbase/pocketbase/tools/template"

        data := map[string]any{"name": "John"}

        html, err := template.NewRegistry().LoadFiles(
            "views/base.html",
            "views/partial1.html",
            "views/partial2.html",
        ).Render(data)
    `}}),N=new aa({props:{title:"Example HTML page with layout"}}),B=new ce({props:{language:"html",content:`
        myapp/
            views/
                layout.html
                hello.html
            main.go
    `}}),F=new ce({props:{language:"html",content:`
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
    `}}),j=new ce({props:{language:"html",content:`
        {{define "title"}}
            Page 1
        {{end}}

        {{define "body"}}
            <p>Hello from {{.name}}</p>
        {{end}}
    `}}),I=new ce({props:{language:"go",content:`
        // main.go
        package main

        import (
            "log"
            "net/http"

            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/template"
        )

        func main() {
            app := pocketbase.New()

            app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                // this is safe to be used by multiple goroutines
                // (it acts as store for the parsed templates)
                registry := template.NewRegistry()

                e.Router.GET("/hello/:name", func(c echo.Context) error {
                    name := c.PathParam("name")

                    html, err := registry.LoadFiles(
                        "views/layout.html",
                        "views/hello.html",
                    ).Render(map[string]any{
                        "name": name,
                    })

                    if err != nil {
                        // or redirect to a dedicated 404 HTML page
                        return apis.NewNotFoundError("", err)
                    }

                    return c.HTML(http.StatusOK, html)
                })

                return nil
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),{c(){D(b.$$.fragment),ue=m(),D(R.$$.fragment),he=m(),J=n("p"),je=o("A common task when creating custom routes or emails is the need of generating HTML output."),de=m(),_=n("p"),Ie=o(`There are plenty of Go template-engines available that you can use for this, but often for simple cases
    the Go standard library `),X=n("code"),We=o("html/template"),Je=o(" package should work just fine."),ve=m(),g=n("p"),Ve=o(`To make it slightly easier to load template files concurrently and on the fly, PocketBase also provides a
    thin wrapper around the standard library in the
    `),k=n("a"),Z=n("code"),qe=o("github.com/pocketbase/pocketbase/tools/template"),Ue=o(`
    utility package.`),be=m(),D(G.$$.fragment),$e=m(),u=n("p"),ze=o(`The general flow when working with composed and nested templates is that you create "base" template(s)
    that defines various placeholders using the
    `),ee=n("code"),Ke=o(St),Ye=o(` or
    `),te=n("code"),Qe=o(Ht),Xe=o(" actions."),_e=m(),y=n("p"),Ze=o(`Then in the partials, you define the content for those placeholders using the
    `),ae=n("code"),et=o(Lt),tt=o(" action."),ge=m(),h=n("p"),at=o("The dot object ("),V=n("code"),ot=o("."),lt=o(`) in the above represents the data passed to the templates
    via the `),oe=n("code"),rt=o("Render(data)"),nt=o(" method."),ke=m(),d=n("p"),st=o(`By default the templates apply contextual (HTML, JS, CSS, URI) auto escaping so the generated template
    content should be injection-safe. To render raw/verbatim trusted content in the templates you can use the
    builtin `),le=n("code"),pt=o("raw"),it=o(" function (eg. "),re=n("code"),mt=o(At),ft=o(")."),ye=m(),$=n("div"),q=n("div"),ne=n("i"),ct=m(),U=n("div"),v=n("p"),ut=o(`For more information about the template syntax please refer to the
            `),E=n("a"),se=n("em"),ht=o("html/template"),dt=o(`
            and
            `),w=n("a"),pe=n("em"),vt=o("text/template"),bt=o(`
            package godocs.
            `),M=n("strong"),$t=o(`Another great resource is also the Hashicorp's
                `),T=n("a"),_t=o("Learn Go Template Syntax"),gt=o(`
                tutorial.`),Ee=m(),D(N.$$.fragment),we=m(),z=n("p"),kt=o("Consider the following app directory structure:"),Te=m(),D(B.$$.fragment),Ce=m(),C=n("p"),yt=o("We define the content for "),ie=n("code"),Et=o("layout.html"),wt=o(" as:"),Pe=m(),D(F.$$.fragment),xe=m(),P=n("p"),Tt=o("We define the content for "),me=n("code"),Ct=o("hello.html"),Pt=o(" as:"),De=m(),D(j.$$.fragment),Oe=m(),x=n("p"),xt=o("Then to output the final page, we'll register a custom "),fe=n("code"),Dt=o("/hello/:name"),Ot=o(" route:"),Se=m(),D(I.$$.fragment),this.h()},l(e){O(b.$$.fragment,e),ue=f(e),O(R.$$.fragment,e),he=f(e),J=s(e,"P",{});var r=p(J);je=l(r,"A common task when creating custom routes or emails is the need of generating HTML output."),r.forEach(a),de=f(e),_=s(e,"P",{});var Le=p(_);Ie=l(Le,`There are plenty of Go template-engines available that you can use for this, but often for simple cases
    the Go standard library `),X=s(Le,"CODE",{});var Rt=p(X);We=l(Rt,"html/template"),Rt.forEach(a),Je=l(Le," package should work just fine."),Le.forEach(a),ve=f(e),g=s(e,"P",{});var Ae=p(g);Ve=l(Ae,`To make it slightly easier to load template files concurrently and on the fly, PocketBase also provides a
    thin wrapper around the standard library in the
    `),k=s(Ae,"A",{href:!0,target:!0,rel:!0});var Gt=p(k);Z=s(Gt,"CODE",{});var Mt=p(Z);qe=l(Mt,"github.com/pocketbase/pocketbase/tools/template"),Mt.forEach(a),Gt.forEach(a),Ue=l(Ae,`
    utility package.`),Ae.forEach(a),be=f(e),O(G.$$.fragment,e),$e=f(e),u=s(e,"P",{});var K=p(u);ze=l(K,`The general flow when working with composed and nested templates is that you create "base" template(s)
    that defines various placeholders using the
    `),ee=s(K,"CODE",{});var Nt=p(ee);Ke=l(Nt,St),Nt.forEach(a),Ye=l(K,` or
    `),te=s(K,"CODE",{});var Bt=p(te);Qe=l(Bt,Ht),Bt.forEach(a),Xe=l(K," actions."),K.forEach(a),_e=f(e),y=s(e,"P",{});var Re=p(y);Ze=l(Re,`Then in the partials, you define the content for those placeholders using the
    `),ae=s(Re,"CODE",{});var Ft=p(ae);et=l(Ft,Lt),Ft.forEach(a),tt=l(Re," action."),Re.forEach(a),ge=f(e),h=s(e,"P",{});var Y=p(h);at=l(Y,"The dot object ("),V=s(Y,"CODE",{class:!0});var jt=p(V);ot=l(jt,"."),jt.forEach(a),lt=l(Y,`) in the above represents the data passed to the templates
    via the `),oe=s(Y,"CODE",{});var It=p(oe);rt=l(It,"Render(data)"),It.forEach(a),nt=l(Y," method."),Y.forEach(a),ke=f(e),d=s(e,"P",{});var Q=p(d);st=l(Q,`By default the templates apply contextual (HTML, JS, CSS, URI) auto escaping so the generated template
    content should be injection-safe. To render raw/verbatim trusted content in the templates you can use the
    builtin `),le=s(Q,"CODE",{});var Wt=p(le);pt=l(Wt,"raw"),Wt.forEach(a),it=l(Q," function (eg. "),re=s(Q,"CODE",{});var Jt=p(re);mt=l(Jt,At),Jt.forEach(a),ft=l(Q,")."),Q.forEach(a),ye=f(e),$=s(e,"DIV",{class:!0});var Ge=p($);q=s(Ge,"DIV",{class:!0});var Vt=p(q);ne=s(Vt,"I",{class:!0}),p(ne).forEach(a),Vt.forEach(a),ct=f(Ge),U=s(Ge,"DIV",{class:!0});var qt=p(U);v=s(qt,"P",{});var W=p(v);ut=l(W,`For more information about the template syntax please refer to the
            `),E=s(W,"A",{href:!0,target:!0,rel:!0});var Ut=p(E);se=s(Ut,"EM",{});var zt=p(se);ht=l(zt,"html/template"),zt.forEach(a),Ut.forEach(a),dt=l(W,`
            and
            `),w=s(W,"A",{href:!0,target:!0,rel:!0});var Kt=p(w);pe=s(Kt,"EM",{});var Yt=p(pe);vt=l(Yt,"text/template"),Yt.forEach(a),Kt.forEach(a),bt=l(W,`
            package godocs.
            `),M=s(W,"STRONG",{});var Me=p(M);$t=l(Me,`Another great resource is also the Hashicorp's
                `),T=s(Me,"A",{href:!0,target:!0,rel:!0});var Qt=p(T);_t=l(Qt,"Learn Go Template Syntax"),Qt.forEach(a),gt=l(Me,`
                tutorial.`),Me.forEach(a),W.forEach(a),qt.forEach(a),Ge.forEach(a),Ee=f(e),O(N.$$.fragment,e),we=f(e),z=s(e,"P",{});var Xt=p(z);kt=l(Xt,"Consider the following app directory structure:"),Xt.forEach(a),Te=f(e),O(B.$$.fragment,e),Ce=f(e),C=s(e,"P",{});var Ne=p(C);yt=l(Ne,"We define the content for "),ie=s(Ne,"CODE",{});var Zt=p(ie);Et=l(Zt,"layout.html"),Zt.forEach(a),wt=l(Ne," as:"),Ne.forEach(a),Pe=f(e),O(F.$$.fragment,e),xe=f(e),P=s(e,"P",{});var Be=p(P);Tt=l(Be,"We define the content for "),me=s(Be,"CODE",{});var ea=p(me);Ct=l(ea,"hello.html"),ea.forEach(a),Pt=l(Be," as:"),Be.forEach(a),De=f(e),O(j.$$.fragment,e),Oe=f(e),x=s(e,"P",{});var Fe=p(x);xt=l(Fe,"Then to output the final page, we'll register a custom "),fe=s(Fe,"CODE",{});var ta=p(fe);Dt=l(ta,"/hello/:name"),ta.forEach(a),Ot=l(Fe," route:"),Fe.forEach(a),Se=f(e),O(I.$$.fragment,e),this.h()},h(){c(k,"href","https://pkg.go.dev/github.com/pocketbase/pocketbase/tools/template"),c(k,"target","_blank"),c(k,"rel","noopener noreferrer"),c(V,"class","txt-bold"),c(ne,"class","ri-information-line"),c(q,"class","icon"),c(E,"href","https://pkg.go.dev/html/template#hdr-A_fuller_picture"),c(E,"target","_blank"),c(E,"rel","noopener noreferrer"),c(w,"href","https://pkg.go.dev/text/template"),c(w,"target","_blank"),c(w,"rel","noopener noreferrer"),c(T,"href","https://developer.hashicorp.com/nomad/tutorials/templates/go-template-syntax"),c(T,"target","_blank"),c(T,"rel","noopener noreferrer"),c(U,"class","content"),c($,"class","alert alert-info m-t-10 m-b-sm")},m(e,r){S(b,e,r),i(e,ue,r),S(R,e,r),i(e,he,r),i(e,J,r),t(J,je),i(e,de,r),i(e,_,r),t(_,Ie),t(_,X),t(X,We),t(_,Je),i(e,ve,r),i(e,g,r),t(g,Ve),t(g,k),t(k,Z),t(Z,qe),t(g,Ue),i(e,be,r),S(G,e,r),i(e,$e,r),i(e,u,r),t(u,ze),t(u,ee),t(ee,Ke),t(u,Ye),t(u,te),t(te,Qe),t(u,Xe),i(e,_e,r),i(e,y,r),t(y,Ze),t(y,ae),t(ae,et),t(y,tt),i(e,ge,r),i(e,h,r),t(h,at),t(h,V),t(V,ot),t(h,lt),t(h,oe),t(oe,rt),t(h,nt),i(e,ke,r),i(e,d,r),t(d,st),t(d,le),t(le,pt),t(d,it),t(d,re),t(re,mt),t(d,ft),i(e,ye,r),i(e,$,r),t($,q),t(q,ne),t($,ct),t($,U),t(U,v),t(v,ut),t(v,E),t(E,se),t(se,ht),t(v,dt),t(v,w),t(w,pe),t(pe,vt),t(v,bt),t(v,M),t(M,$t),t(M,T),t(T,_t),t(M,gt),i(e,Ee,r),S(N,e,r),i(e,we,r),i(e,z,r),t(z,kt),i(e,Te,r),S(B,e,r),i(e,Ce,r),i(e,C,r),t(C,yt),t(C,ie),t(ie,Et),t(C,wt),i(e,Pe,r),S(F,e,r),i(e,xe,r),i(e,P,r),t(P,Tt),t(P,me),t(me,Ct),t(P,Pt),i(e,De,r),S(j,e,r),i(e,Oe,r),i(e,x,r),t(x,xt),t(x,fe),t(fe,Dt),t(x,Ot),i(e,Se,r),S(I,e,r),He=!0},p:sa,i(e){He||(H(b.$$.fragment,e),H(R.$$.fragment,e),H(G.$$.fragment,e),H(N.$$.fragment,e),H(B.$$.fragment,e),H(F.$$.fragment,e),H(j.$$.fragment,e),H(I.$$.fragment,e),He=!0)},o(e){L(b.$$.fragment,e),L(R.$$.fragment,e),L(G.$$.fragment,e),L(N.$$.fragment,e),L(B.$$.fragment,e),L(F.$$.fragment,e),L(j.$$.fragment,e),L(I.$$.fragment,e),He=!1},d(e){A(b,e),e&&a(ue),A(R,e),e&&a(he),e&&a(J),e&&a(de),e&&a(_),e&&a(ve),e&&a(g),e&&a(be),A(G,e),e&&a($e),e&&a(u),e&&a(_e),e&&a(y),e&&a(ge),e&&a(h),e&&a(ke),e&&a(d),e&&a(ye),e&&a($),e&&a(Ee),A(N,e),e&&a(we),e&&a(z),e&&a(Te),A(B,e),e&&a(Ce),e&&a(C),e&&a(Pe),A(F,e),e&&a(xe),e&&a(P),e&&a(De),A(j,e),e&&a(Oe),e&&a(x),e&&a(Se),A(I,e)}}}class ha extends la{constructor(b){super(),ra(this,b,null,ia,na,{})}}export{ha as component};
