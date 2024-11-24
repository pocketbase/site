import{S as ie,i as ce,s as pe,k as n,q as l,a as _,y as ue,l as s,m as i,r as a,h as o,c as v,z as me,n as L,b as d,G as t,A as de,U as fe,H as he,g as be,d as _e,B as ve}from"../chunks/index.a7566c1a.js";import{t as ke}from"../chunks/tooltip.f1d7ab7e.js";import{C as ye}from"../chunks/CodeBlock.a090ee9b.js";function Ee(se){let c,B,u,x,N,O,q,S,k,D,P,p,w,M,U,m,z,j,F,G,f,J,h,K,Q,R,T,$,V,A,y,W,C,b,H,X,Z;return b=new ye({props:{language:"go",content:`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/cron"
        )

        func main() {
            app := pocketbase.New()

            app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                scheduler := cron.New()

                // prints "Hello!" every 2 minutes
                scheduler.MustAdd("hello", "*/2 * * * *", func() {
                    log.Println("Hello!")
                })

                scheduler.Start()

                return nil
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),{c(){c=n("p"),B=l(`If you have tasks that need to be performed periodically, you could setup crontab-like jobs with the
    builtin
    `),u=n("a"),x=n("code"),N=l("cron"),O=l(` package
    `),q=l("."),S=_(),k=n("p"),D=l("Each scheduled job runs in its own goroutine and must have:"),P=_(),p=n("ul"),w=n("li"),M=l("name - identifier for the scheduled job; could be used to replace or remove an existing job"),U=_(),m=n("li"),z=l("cron expression like "),j=n("code"),F=l("0 0 * * *"),G=l(` (
        `),f=n("em"),J=l(`supports numeric list, steps, ranges or
            `),h=n("span"),K=l("macros"),Q=_(),R=l(")"),T=_(),$=n("li"),V=l("handler - the function that will be executed everytime when the job runs"),A=_(),y=n("p"),W=l("Here is an example:"),C=_(),ue(b.$$.fragment),this.h()},l(e){c=s(e,"P",{});var r=i(c);B=a(r,`If you have tasks that need to be performed periodically, you could setup crontab-like jobs with the
    builtin
    `),u=s(r,"A",{href:!0,target:!0,rel:!0});var Y=i(u);x=s(Y,"CODE",{});var ee=i(x);N=a(ee,"cron"),ee.forEach(o),O=a(Y,` package
    `),Y.forEach(o),q=a(r,"."),r.forEach(o),S=v(e),k=s(e,"P",{});var te=i(k);D=a(te,"Each scheduled job runs in its own goroutine and must have:"),te.forEach(o),P=v(e),p=s(e,"UL",{});var E=i(p);w=s(E,"LI",{});var oe=i(w);M=a(oe,"name - identifier for the scheduled job; could be used to replace or remove an existing job"),oe.forEach(o),U=v(E),m=s(E,"LI",{});var g=i(m);z=a(g,"cron expression like "),j=s(g,"CODE",{});var re=i(j);F=a(re,"0 0 * * *"),re.forEach(o),G=a(g,` (
        `),f=s(g,"EM",{});var I=i(f);J=a(I,`supports numeric list, steps, ranges or
            `),h=s(I,"SPAN",{class:!0});var le=i(h);K=a(le,"macros"),le.forEach(o),Q=v(I),I.forEach(o),R=a(g,")"),g.forEach(o),T=v(E),$=s(E,"LI",{});var ae=i($);V=a(ae,"handler - the function that will be executed everytime when the job runs"),ae.forEach(o),E.forEach(o),A=v(e),y=s(e,"P",{});var ne=i(y);W=a(ne,"Here is an example:"),ne.forEach(o),C=v(e),me(b.$$.fragment,e),this.h()},h(){L(u,"href","https://pkg.go.dev/github.com/pocketbase/pocketbase/tools/cron"),L(u,"target","_blank"),L(u,"rel","noopener noreferrer"),L(h,"class","link-hint")},m(e,r){d(e,c,r),t(c,B),t(c,u),t(u,x),t(x,N),t(u,O),t(c,q),d(e,S,r),d(e,k,r),t(k,D),d(e,P,r),d(e,p,r),t(p,w),t(w,M),t(p,U),t(p,m),t(m,z),t(m,j),t(j,F),t(m,G),t(m,f),t(f,J),t(f,h),t(h,K),t(f,Q),t(m,R),t(p,T),t(p,$),t($,V),d(e,A,r),d(e,y,r),t(y,W),d(e,C,r),de(b,e,r),H=!0,X||(Z=fe(ke.call(null,h,`@yearly
@annually
@monthly
@weekly
@daily
@midnight
@hourly`)),X=!0)},p:he,i(e){H||(be(b.$$.fragment,e),H=!0)},o(e){_e(b.$$.fragment,e),H=!1},d(e){e&&o(c),e&&o(S),e&&o(k),e&&o(P),e&&o(p),e&&o(A),e&&o(y),e&&o(C),ve(b,e),X=!1,Z()}}}class je extends ie{constructor(c){super(),ce(this,c,null,Ee,pe,{})}}export{je as component};
