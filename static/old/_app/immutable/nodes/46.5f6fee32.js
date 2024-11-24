import{S as be,i as ke,s as Ce,k as r,q as n,a as u,y as x,l,m,r as o,h as t,c,z as B,n as Pe,b as i,G as s,A as j,H as Se,g as H,d as D,B as I}from"../chunks/index.a7566c1a.js";import{H as we}from"../chunks/HeadingLink.20322812.js";import{C as Ee}from"../chunks/CodeBlock.a090ee9b.js";import{T as Re}from"../chunks/Toc.c31a36b6.js";function Ae(Me){let f,Q,k,V,W,O,p,X,C,Z,ee,P,te,se,U,y,T,_,Y,$,ae,S,ne,oe,q,h,L,v,z,g,ie,R,re,le,G,d,me,E,fe,pe,A,de,ue,J,w,N;return y=new Re({}),_=new we({props:{title:"Send custom email"}}),h=new Ee({props:{language:"go",content:`
        onRecordAfterCreateRequest((e) => {
            const message = new MailerMessage({
                from: {
                    address: $app.settings().meta.senderAddress,
                    name:    $app.settings().meta.senderName,
                },
                to:      [{address: e.record.email()}],
                subject: "YOUR_SUBJECT...",
                html:    "YOUR_HTML_BODY...",
                // bcc, cc and custom headers are also supported...
            })

            $app.newMailClient().send(message)
        }, "users")
    `}}),v=new we({props:{title:"Intercept system emails"}}),w=new Ee({props:{language:"go",content:`
        onMailerBeforeRecordResetPasswordSend().add((e) => {
            // modify the subject
            e.message.subject += (" " + e.record.get("name"))
        })
    `}}),{c(){f=r("p"),Q=n(`PocketBase provides a simple abstraction for sending emails via the
    `),k=r("code"),V=n("$app.newMailClient()"),W=n(" helper."),O=u(),p=r("p"),X=n("Depending on your configured mail settings ("),C=r("em"),Z=n("Admin UI > Settings > Mail settings"),ee=n(`) it will use the
    `),P=r("code"),te=n("sendmail"),se=n(" command or a SMTP client."),U=u(),x(y.$$.fragment),T=u(),x(_.$$.fragment),Y=u(),$=r("p"),ae=n(`You can send your own custom emails from everywhere within your app (hooks, middlewares, routes, etc.) by
    using `),S=r("code"),ne=n("$app.newMailClient().send(message)"),oe=n(`. Here is an example of sending a custom email after
    user registration:`),q=u(),x(h.$$.fragment),L=u(),x(v.$$.fragment),z=u(),g=r("p"),ie=n(`If you want to change the default system emails for forgotten password, verification, etc., you can adjust
    the default templates from the `),R=r("em"),re=n("Admin UI > Settings > Mail settings"),le=n("."),G=u(),d=r("p"),me=n(`Alternatively, you can also apply individual changes by binding to one of the
    `),E=r("a"),fe=n("mailer hooks"),pe=n(`. Here is an example of appending a Record
    field value to the subject using the `),A=r("code"),de=n("onMailerBeforeRecordResetPasswordSend"),ue=n(" hook:"),J=u(),x(w.$$.fragment),this.h()},l(e){f=l(e,"P",{});var a=m(f);Q=o(a,`PocketBase provides a simple abstraction for sending emails via the
    `),k=l(a,"CODE",{});var ce=m(k);V=o(ce,"$app.newMailClient()"),ce.forEach(t),W=o(a," helper."),a.forEach(t),O=c(e),p=l(e,"P",{});var M=m(p);X=o(M,"Depending on your configured mail settings ("),C=l(M,"EM",{});var $e=m(C);Z=o($e,"Admin UI > Settings > Mail settings"),$e.forEach(t),ee=o(M,`) it will use the
    `),P=l(M,"CODE",{});var ge=m(P);te=o(ge,"sendmail"),ge.forEach(t),se=o(M," command or a SMTP client."),M.forEach(t),U=c(e),B(y.$$.fragment,e),T=c(e),B(_.$$.fragment,e),Y=c(e),$=l(e,"P",{});var F=m($);ae=o(F,`You can send your own custom emails from everywhere within your app (hooks, middlewares, routes, etc.) by
    using `),S=l(F,"CODE",{});var ye=m(S);ne=o(ye,"$app.newMailClient().send(message)"),ye.forEach(t),oe=o(F,`. Here is an example of sending a custom email after
    user registration:`),F.forEach(t),q=c(e),B(h.$$.fragment,e),L=c(e),B(v.$$.fragment,e),z=c(e),g=l(e,"P",{});var K=m(g);ie=o(K,`If you want to change the default system emails for forgotten password, verification, etc., you can adjust
    the default templates from the `),R=l(K,"EM",{});var _e=m(R);re=o(_e,"Admin UI > Settings > Mail settings"),_e.forEach(t),le=o(K,"."),K.forEach(t),G=c(e),d=l(e,"P",{});var b=m(d);me=o(b,`Alternatively, you can also apply individual changes by binding to one of the
    `),E=l(b,"A",{href:!0});var he=m(E);fe=o(he,"mailer hooks"),he.forEach(t),pe=o(b,`. Here is an example of appending a Record
    field value to the subject using the `),A=l(b,"CODE",{});var ve=m(A);de=o(ve,"onMailerBeforeRecordResetPasswordSend"),ve.forEach(t),ue=o(b," hook:"),b.forEach(t),J=c(e),B(w.$$.fragment,e),this.h()},h(){Pe(E,"href","/docs/js-event-hooks/#mailer-hooks")},m(e,a){i(e,f,a),s(f,Q),s(f,k),s(k,V),s(f,W),i(e,O,a),i(e,p,a),s(p,X),s(p,C),s(C,Z),s(p,ee),s(p,P),s(P,te),s(p,se),i(e,U,a),j(y,e,a),i(e,T,a),j(_,e,a),i(e,Y,a),i(e,$,a),s($,ae),s($,S),s(S,ne),s($,oe),i(e,q,a),j(h,e,a),i(e,L,a),j(v,e,a),i(e,z,a),i(e,g,a),s(g,ie),s(g,R),s(R,re),s(g,le),i(e,G,a),i(e,d,a),s(d,me),s(d,E),s(E,fe),s(d,pe),s(d,A),s(A,de),s(d,ue),i(e,J,a),j(w,e,a),N=!0},p:Se,i(e){N||(H(y.$$.fragment,e),H(_.$$.fragment,e),H(h.$$.fragment,e),H(v.$$.fragment,e),H(w.$$.fragment,e),N=!0)},o(e){D(y.$$.fragment,e),D(_.$$.fragment,e),D(h.$$.fragment,e),D(v.$$.fragment,e),D(w.$$.fragment,e),N=!1},d(e){e&&t(f),e&&t(O),e&&t(p),e&&t(U),I(y,e),e&&t(T),I(_,e),e&&t(Y),e&&t($),e&&t(q),I(h,e),e&&t(L),I(v,e),e&&t(z),e&&t(g),e&&t(G),e&&t(d),e&&t(J),I(w,e)}}}class De extends be{constructor(f){super(),ke(this,f,null,Ae,Ce,{})}}export{De as component};
