import{S as ie,i as pe,s as de,k as r,q as s,a as E,y as oe,l,m,r as c,h as t,c as k,z as ae,n as v,b as p,G as o,A as ne,H as fe,g as re,d as se,B as le}from"../chunks/index.a7566c1a.js";import{C as me}from"../chunks/CodeBlock.a090ee9b.js";function ue(ce){let n,S,C,V,q,w,B,K,d,T,Y,D,_,z,P,f,A,b,F,H,u,I,i,$,x,N,g,h,U,y,j,J,R;return f=new me({props:{language:"go",content:`
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/spf13/cobra"
        )

        func main() {
            app := pocketbase.New()

            app.RootCmd.AddCommand(&cobra.Command{
                Use: "hello",
                Run: func(cmd *cobra.Command, args []string) {
                    log.Println("Hello world!")
                },
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),u=new me({props:{language:"html",content:`
        # or "go run main.go hello"
        ./myapp hello
    `}}),{c(){n=r("p"),S=s(`You can register custom console commands using
    `),C=r("code"),V=s("app.RootCmd.AddCommand(cmd)"),q=s(", where "),w=r("code"),B=s("cmd"),K=s(` is a
    `),d=r("a"),T=s("cobra"),Y=s(" command."),D=E(),_=r("p"),z=s("Here is an example:"),P=E(),oe(f.$$.fragment),A=E(),b=r("p"),F=s("To run the command you can build your Go application and execute:"),H=E(),oe(u.$$.fragment),I=E(),i=r("div"),$=r("div"),x=r("i"),N=E(),g=r("div"),h=r("p"),U=s(`Keep in mind that the console commands execute in their own separate app process and run
            independently from the main `),y=r("code"),j=s("serve"),J=s(` command (aka. hook events between different processes
            are not shared with one another).`),this.h()},l(e){n=l(e,"P",{});var a=m(n);S=c(a,`You can register custom console commands using
    `),C=l(a,"CODE",{});var L=m(C);V=c(L,"app.RootCmd.AddCommand(cmd)"),L.forEach(t),q=c(a,", where "),w=l(a,"CODE",{});var M=m(w);B=c(M,"cmd"),M.forEach(t),K=c(a,` is a
    `),d=l(a,"A",{href:!0,target:!0,rel:!0});var Q=m(d);T=c(Q,"cobra"),Q.forEach(t),Y=c(a," command."),a.forEach(t),D=k(e),_=l(e,"P",{});var W=m(_);z=c(W,"Here is an example:"),W.forEach(t),P=k(e),ae(f.$$.fragment,e),A=k(e),b=l(e,"P",{});var X=m(b);F=c(X,"To run the command you can build your Go application and execute:"),X.forEach(t),H=k(e),ae(u.$$.fragment,e),I=k(e),i=l(e,"DIV",{class:!0});var G=m(i);$=l(G,"DIV",{class:!0});var Z=m($);x=l(Z,"I",{class:!0}),m(x).forEach(t),Z.forEach(t),N=k(G),g=l(G,"DIV",{class:!0});var ee=m(g);h=l(ee,"P",{});var O=m(h);U=c(O,`Keep in mind that the console commands execute in their own separate app process and run
            independently from the main `),y=l(O,"CODE",{});var te=m(y);j=c(te,"serve"),te.forEach(t),J=c(O,` command (aka. hook events between different processes
            are not shared with one another).`),O.forEach(t),ee.forEach(t),G.forEach(t),this.h()},h(){v(d,"href","https://pkg.go.dev/github.com/spf13/cobra"),v(d,"target","_blank"),v(d,"rel","noopener noreferrer"),v(x,"class","ri-information-line"),v($,"class","icon"),v(g,"class","content"),v(i,"class","alert alert-info m-t-sm m-b-sm")},m(e,a){p(e,n,a),o(n,S),o(n,C),o(C,V),o(n,q),o(n,w),o(w,B),o(n,K),o(n,d),o(d,T),o(n,Y),p(e,D,a),p(e,_,a),o(_,z),p(e,P,a),ne(f,e,a),p(e,A,a),p(e,b,a),o(b,F),p(e,H,a),ne(u,e,a),p(e,I,a),p(e,i,a),o(i,$),o($,x),o(i,N),o(i,g),o(g,h),o(h,U),o(h,y),o(y,j),o(h,J),R=!0},p:fe,i(e){R||(re(f.$$.fragment,e),re(u.$$.fragment,e),R=!0)},o(e){se(f.$$.fragment,e),se(u.$$.fragment,e),R=!1},d(e){e&&t(n),e&&t(D),e&&t(_),e&&t(P),le(f,e),e&&t(A),e&&t(b),e&&t(H),le(u,e),e&&t(I),e&&t(i)}}}class _e extends ie{constructor(n){super(),pe(this,n,null,ue,de,{})}}export{_e as component};
