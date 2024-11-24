import{S as _e,i as Se,s as Me,k as n,q as s,a as d,y as O,l,m,r,h as t,c as u,z as x,n as Ee,b as i,G as a,A as B,H as Ae,g as H,d as N,B as T}from"../chunks/index.a7566c1a.js";import{H as he}from"../chunks/HeadingLink.20322812.js";import{C as ke}from"../chunks/CodeBlock.a090ee9b.js";import{T as Re}from"../chunks/Toc.c31a36b6.js";function Ce(ye){let p,K,M,Q,V,j,f,W,E,X,Z,A,ee,te,D,$,U,b,I,g,ae,R,oe,se,Y,v,q,w,F,h,re,C,ie,L,c,ne,y,le,me,P,pe,fe,G,k,z;return $=new Re({}),b=new he({props:{title:"Send custom email"}}),v=new ke({props:{language:"go",content:`
        // main.go
        package main

        import (
            "log"
            "net/mail"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
            "github.com/pocketbase/pocketbase/tools/mailer"
        )

        func main() {
            app := pocketbase.New()

            app.OnRecordAfterCreateRequest("users").Add(func(e *core.RecordCreateEvent) error {
                message := &mailer.Message{
                    From: mail.Address{
                        Address: app.Settings().Meta.SenderAddress,
                        Name:    app.Settings().Meta.SenderName,
                    },
                    To:      []mail.Address{{Address: e.Record.Email()}},
                    Subject: "YOUR_SUBJECT...",
                    HTML:    "YOUR_HTML_BODY...",
                    // bcc, cc, attachments and custom headers are also supported...
                }

                return app.NewMailClient().Send(message)
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),w=new he({props:{title:"Overwrite system emails"}}),k=new ke({props:{language:"go",content:`
        // main.go
        package main

        import (
            "log"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/core"
        )

        func main() {
            app := pocketbase.New()

            app.OnMailerBeforeRecordResetPasswordSend().Add(func(e *core.MailerRecordEvent) error {
                // modify the subject
                e.Message.Subject += (" " + e.Record.GetString("name"))

                return nil
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),{c(){p=n("p"),K=s(`PocketBase provides a simple abstraction for sending emails via the
    `),M=n("code"),Q=s("app.NewMailClient()"),V=s(" helper."),j=d(),f=n("p"),W=s("Depending on your configured mail settings ("),E=n("em"),X=s("Admin UI > Settings > Mail settings"),Z=s(`) it will use the
    `),A=n("code"),ee=s("sendmail"),te=s(" command or a SMTP client."),D=d(),O($.$$.fragment),U=d(),O(b.$$.fragment),I=d(),g=n("p"),ae=s(`You can also send your own custom email from everywhere within your app (hooks, middlewares, routes, etc.)
    by using `),R=n("code"),oe=s("app.NewMailClient().Send(message)"),se=s(`. Here is an example of sending a custom email
    after user registration:`),Y=d(),O(v.$$.fragment),q=d(),O(w.$$.fragment),F=d(),h=n("p"),re=s(`If you want to overwrite the default system emails for forgotten password, verification, etc., you can
    adjust the default templates from the `),C=n("em"),ie=s("Admin UI > Settings > Mail settings."),L=d(),c=n("p"),ne=s(`Alternatively, you can also apply individual changes by binding to one of the
    `),y=n("a"),le=s("before mailer hooks"),me=s(`. Here is an example of appending a
    Record field value to the subject using the `),P=n("code"),pe=s("OnMailerBeforeRecordResetPasswordSend"),fe=s(" hook:"),G=d(),O(k.$$.fragment),this.h()},l(e){p=l(e,"P",{});var o=m(p);K=r(o,`PocketBase provides a simple abstraction for sending emails via the
    `),M=l(o,"CODE",{});var de=m(M);Q=r(de,"app.NewMailClient()"),de.forEach(t),V=r(o," helper."),o.forEach(t),j=u(e),f=l(e,"P",{});var _=m(f);W=r(_,"Depending on your configured mail settings ("),E=l(_,"EM",{});var ue=m(E);X=r(ue,"Admin UI > Settings > Mail settings"),ue.forEach(t),Z=r(_,`) it will use the
    `),A=l(_,"CODE",{});var ge=m(A);ee=r(ge,"sendmail"),ge.forEach(t),te=r(_," command or a SMTP client."),_.forEach(t),D=u(e),x($.$$.fragment,e),U=u(e),x(b.$$.fragment,e),I=u(e),g=l(e,"P",{});var J=m(g);ae=r(J,`You can also send your own custom email from everywhere within your app (hooks, middlewares, routes, etc.)
    by using `),R=l(J,"CODE",{});var $e=m(R);oe=r($e,"app.NewMailClient().Send(message)"),$e.forEach(t),se=r(J,`. Here is an example of sending a custom email
    after user registration:`),J.forEach(t),Y=u(e),x(v.$$.fragment,e),q=u(e),x(w.$$.fragment,e),F=u(e),h=l(e,"P",{});var ce=m(h);re=r(ce,`If you want to overwrite the default system emails for forgotten password, verification, etc., you can
    adjust the default templates from the `),C=l(ce,"EM",{});var be=m(C);ie=r(be,"Admin UI > Settings > Mail settings."),be.forEach(t),ce.forEach(t),L=u(e),c=l(e,"P",{});var S=m(c);ne=r(S,`Alternatively, you can also apply individual changes by binding to one of the
    `),y=l(S,"A",{href:!0});var ve=m(y);le=r(ve,"before mailer hooks"),ve.forEach(t),me=r(S,`. Here is an example of appending a
    Record field value to the subject using the `),P=l(S,"CODE",{});var we=m(P);pe=r(we,"OnMailerBeforeRecordResetPasswordSend"),we.forEach(t),fe=r(S," hook:"),S.forEach(t),G=u(e),x(k.$$.fragment,e),this.h()},h(){Ee(y,"href","/docs/go-event-hooks/#mailer-hooks")},m(e,o){i(e,p,o),a(p,K),a(p,M),a(M,Q),a(p,V),i(e,j,o),i(e,f,o),a(f,W),a(f,E),a(E,X),a(f,Z),a(f,A),a(A,ee),a(f,te),i(e,D,o),B($,e,o),i(e,U,o),B(b,e,o),i(e,I,o),i(e,g,o),a(g,ae),a(g,R),a(R,oe),a(g,se),i(e,Y,o),B(v,e,o),i(e,q,o),B(w,e,o),i(e,F,o),i(e,h,o),a(h,re),a(h,C),a(C,ie),i(e,L,o),i(e,c,o),a(c,ne),a(c,y),a(y,le),a(c,me),a(c,P),a(P,pe),a(c,fe),i(e,G,o),B(k,e,o),z=!0},p:Ae,i(e){z||(H($.$$.fragment,e),H(b.$$.fragment,e),H(v.$$.fragment,e),H(w.$$.fragment,e),H(k.$$.fragment,e),z=!0)},o(e){N($.$$.fragment,e),N(b.$$.fragment,e),N(v.$$.fragment,e),N(w.$$.fragment,e),N(k.$$.fragment,e),z=!1},d(e){e&&t(p),e&&t(j),e&&t(f),e&&t(D),T($,e),e&&t(U),T(b,e),e&&t(I),e&&t(g),e&&t(Y),T(v,e),e&&t(q),T(w,e),e&&t(F),e&&t(h),e&&t(L),e&&t(c),e&&t(G),T(k,e)}}}class He extends _e{constructor(p){super(),Se(this,p,null,Ce,Me,{})}}export{He as component};
