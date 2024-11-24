import{S as Ss,i as gs,s as Ds,k as s,q as a,a as h,y as ft,l,m as o,r as n,h as t,c as p,z as vt,n as m,b as v,G as e,A as bt,g as ct,d as dt,B as mt,H as $s,N as ps,v as ys,f as Os,K as wt,L as Is,R as Ts,O as Rs}from"../chunks/index.a7566c1a.js";import{A as fs}from"../chunks/Accordion.71344b00.js";import{C as Es}from"../chunks/CodeBlock.a090ee9b.js";import{C as ws}from"../chunks/CodeTabs.3c6448ff.js";function vs(C,c,d){const b=C.slice();return b[3]=c[d],b}function bs(C,c,d){const b=C.slice();return b[3]=c[d],b}function ks(C){let c,d,b,S,_,E,$,g,T,O,R,z,K,w,Q,X,te,P,Z,se,A,V,y;return{c(){c=s("div"),d=s("strong"),b=a("GET"),S=h(),_=s("div"),E=a("/api/realtime"),$=h(),g=s("p"),T=a("Establishes a new SSE connection and immediately sends a "),O=s("code"),R=a("PB_CONNECT"),z=a(` SSE event with the
            created client ID.`),K=h(),w=s("p"),Q=s("strong"),X=a("NB!"),te=a(` The user/admin authorization happens during the first
            `),P=s("a"),Z=a("Set subscriptions"),se=a(`
            call.`),A=h(),V=s("p"),y=a(`If the connected client doesn't receive any new messages for 5 minutes, the server will send a
            disconnect signal (this is to prevent forgotten/leaked connections). The connection will be
            automatically reestablished if the client is still active (eg. the browser tab is still open).`),this.h()},l(f){c=l(f,"DIV",{class:!0});var I=o(c);d=l(I,"STRONG",{class:!0});var ve=o(d);b=n(ve,"GET"),ve.forEach(t),S=p(I),_=l(I,"DIV",{class:!0});var k=o(_);E=n(k,"/api/realtime"),k.forEach(t),I.forEach(t),$=p(f),g=l(f,"P",{});var U=o(g);T=n(U,"Establishes a new SSE connection and immediately sends a "),O=l(U,"CODE",{});var le=o(O);R=n(le,"PB_CONNECT"),le.forEach(t),z=n(U,` SSE event with the
            created client ID.`),U.forEach(t),K=p(f),w=l(f,"P",{class:!0});var G=o(w);Q=l(G,"STRONG",{});var be=o(Q);X=n(be,"NB!"),be.forEach(t),te=n(G,` The user/admin authorization happens during the first
            `),P=l(G,"A",{href:!0});var q=o(P);Z=n(q,"Set subscriptions"),q.forEach(t),se=n(G,`
            call.`),G.forEach(t),A=p(f),V=l(f,"P",{});var J=o(V);y=n(J,`If the connected client doesn't receive any new messages for 5 minutes, the server will send a
            disconnect signal (this is to prevent forgotten/leaked connections). The connection will be
            automatically reestablished if the client is still active (eg. the browser tab is still open).`),J.forEach(t),this.h()},h(){m(d,"class","label label-primary"),m(_,"class","content"),m(c,"class","api-route alert alert-info"),m(P,"href","/docs/api-realtime#set-subscriptions"),m(w,"class","txt-hint")},m(f,I){v(f,c,I),e(c,d),e(d,b),e(c,S),e(c,_),e(_,E),v(f,$,I),v(f,g,I),e(g,T),e(g,O),e(O,R),e(g,z),v(f,K,I),v(f,w,I),e(w,Q),e(Q,X),e(w,te),e(w,P),e(P,Z),e(w,se),v(f,A,I),v(f,V,I),e(V,y)},p:$s,d(f){f&&t(c),f&&t($),f&&t(g),f&&t(K),f&&t(w),f&&t(A),f&&t(V)}}}function ms(C,c){let d,b=c[3].code+"",S,_,E,$;function g(){return c[2](c[3])}return{key:C,first:null,c(){d=s("button"),S=a(b),_=h(),this.h()},l(T){d=l(T,"BUTTON",{class:!0});var O=o(d);S=n(O,b),_=p(O),O.forEach(t),this.h()},h(){m(d,"class","tab-item"),wt(d,"active",c[0]===c[3].code),this.first=d},m(T,O){v(T,d,O),e(d,S),e(d,_),E||($=Is(d,"click",g),E=!0)},p(T,O){c=T,O&3&&wt(d,"active",c[0]===c[3].code)},d(T){T&&t(d),E=!1,$()}}}function _s(C,c){let d,b,S,_;return b=new Es({props:{content:c[3].body}}),{key:C,first:null,c(){d=s("div"),ft(b.$$.fragment),S=h(),this.h()},l(E){d=l(E,"DIV",{class:!0});var $=o(d);vt(b.$$.fragment,$),S=p($),$.forEach(t),this.h()},h(){m(d,"class","tab-item"),wt(d,"active",c[0]===c[3].code),this.first=d},m(E,$){v(E,d,$),bt(b,d,null),e(d,S),_=!0},p(E,$){c=E,(!_||$&3)&&wt(d,"active",c[0]===c[3].code)},i(E){_||(ct(b.$$.fragment,E),_=!0)},o(E){dt(b.$$.fragment,E),_=!1},d(E){E&&t(d),mt(b)}}}function Ns(C){let c,d,b,S,_,E,$,g,T,O,R,z,K,w,Q,X,te,P,Z,se,A,V,y,f,I,ve,k,U,le,G,be,q,J,W,De,oe,re,Ge,qe,$e,ee,xe,ue,me,Me,ye,Oe,ze,ke,N,F,ae,j,Ne,H,Ie,Te,We,Re,ne,Fe="Array<String>",je,Ce,B,x,i,D,he,pe,Qe,ie,Pe,Xe,Ze,Ae,fe,_e,Le,et,Ee,Se,tt,ce,st,He,M,ge,Ve,lt,kt,ut,Nt,Ct,_t,Ye,Pt,Et,we,Ke,de=[],Lt=new Map,At,Ue,Y=[],Vt=new Map,St;Se=new Es({props:{content:`
                            COLLECTION_ID_OR_NAME/RECORD_ID?options={"query": {"abc": "123"}, "headers": {"x-token": "..."}}
                            `}});let gt=C[1];const Bt=r=>r[3].code;for(let r=0;r<gt.length;r+=1){let u=bs(C,gt,r),L=Bt(u);Lt.set(L,de[r]=ms(L,u))}let ht=C[1];const Gt=r=>r[3].code;for(let r=0;r<ht.length;r+=1){let u=vs(C,ht,r),L=Gt(u);Vt.set(L,Y[r]=_s(L,u))}return{c(){c=s("div"),d=s("strong"),b=a("POST"),S=h(),_=s("div"),E=a("/api/realtime"),$=h(),g=s("div"),T=s("p"),O=a("Sets new active client's subscriptions (and auto unsubscribes from the previous ones)."),R=h(),z=s("p"),K=a("If "),w=s("code"),Q=a("Authorization"),X=a(` header is set, will authorize the client SSE connection with the
                associated user or admin.`),te=h(),P=s("div"),Z=a("Body Parameters"),se=h(),A=s("table"),V=s("thead"),y=s("tr"),f=s("th"),I=a("Param"),ve=h(),k=s("th"),U=a("Type"),le=h(),G=s("th"),be=a("Description"),q=h(),J=s("tbody"),W=s("tr"),De=s("td"),oe=s("div"),re=s("span"),Ge=a("Required"),qe=h(),$e=s("span"),ee=a("clientId"),xe=h(),ue=s("td"),me=s("span"),Me=a("String"),ye=h(),Oe=s("td"),ze=a("ID of the SSE client connection."),ke=h(),N=s("tr"),F=s("td"),ae=s("div"),j=s("span"),Ne=a("Optional"),H=h(),Ie=s("span"),Te=a("subscriptions"),We=h(),Re=s("td"),ne=s("span"),je=a(Fe),Ce=h(),B=s("td"),x=s("p"),i=a(`The new client subscriptions to set in the format:
                            `),D=s("br"),he=h(),pe=s("code"),Qe=a("COLLECTION_ID_OR_NAME"),ie=a(` or
                            `),Pe=s("code"),Xe=a("COLLECTION_ID_OR_NAME/RECORD_ID"),Ze=a("."),Ae=h(),fe=s("p"),_e=a(`You can also attach optional query and header parameters as serialized json to a
                            single topic using the `),Le=s("code"),et=a("options"),Ee=a(`
                            query parameter, eg.:
                            `),ft(Se.$$.fragment),tt=h(),ce=s("p"),st=a("Leave empty to unsubscribe from everything."),He=h(),M=s("small"),ge=a("Body parameters could be sent as "),Ve=s("em"),lt=a("JSON"),kt=a(` or
            `),ut=s("em"),Nt=a("multipart/form-data"),Ct=a("."),_t=h(),Ye=s("div"),Pt=a("Responses"),Et=h(),we=s("div"),Ke=s("div");for(let r=0;r<de.length;r+=1)de[r].c();At=h(),Ue=s("div");for(let r=0;r<Y.length;r+=1)Y[r].c();this.h()},l(r){c=l(r,"DIV",{class:!0});var u=o(c);d=l(u,"STRONG",{class:!0});var L=o(d);b=n(L,"POST"),L.forEach(t),S=p(u),_=l(u,"DIV",{class:!0});var qt=o(_);E=n(qt,"/api/realtime"),qt.forEach(t),u.forEach(t),$=p(r),g=l(r,"DIV",{class:!0});var Dt=o(g);T=l(Dt,"P",{});var xt=o(T);O=n(xt,"Sets new active client's subscriptions (and auto unsubscribes from the previous ones)."),xt.forEach(t),R=p(Dt),z=l(Dt,"P",{});var $t=o(z);K=n($t,"If "),w=l($t,"CODE",{});var Mt=o(w);Q=n(Mt,"Authorization"),Mt.forEach(t),X=n($t,` header is set, will authorize the client SSE connection with the
                associated user or admin.`),$t.forEach(t),Dt.forEach(t),te=p(r),P=l(r,"DIV",{class:!0});var zt=o(P);Z=n(zt,"Body Parameters"),zt.forEach(t),se=p(r),A=l(r,"TABLE",{class:!0});var yt=o(A);V=l(yt,"THEAD",{});var Wt=o(V);y=l(Wt,"TR",{});var ot=o(y);f=l(ot,"TH",{});var jt=o(f);I=n(jt,"Param"),jt.forEach(t),ve=p(ot),k=l(ot,"TH",{});var Ht=o(k);U=n(Ht,"Type"),Ht.forEach(t),le=p(ot),G=l(ot,"TH",{width:!0});var Yt=o(G);be=n(Yt,"Description"),Yt.forEach(t),ot.forEach(t),Wt.forEach(t),q=p(yt),J=l(yt,"TBODY",{});var Ot=o(J);W=l(Ot,"TR",{});var rt=o(W);De=l(rt,"TD",{});var Kt=o(De);oe=l(Kt,"DIV",{class:!0});var It=o(oe);re=l(It,"SPAN",{class:!0});var Ut=o(re);Ge=n(Ut,"Required"),Ut.forEach(t),qe=p(It),$e=l(It,"SPAN",{});var Jt=o($e);ee=n(Jt,"clientId"),Jt.forEach(t),It.forEach(t),Kt.forEach(t),xe=p(rt),ue=l(rt,"TD",{});var Ft=o(ue);me=l(Ft,"SPAN",{class:!0});var Qt=o(me);Me=n(Qt,"String"),Qt.forEach(t),Ft.forEach(t),ye=p(rt),Oe=l(rt,"TD",{});var Xt=o(Oe);ze=n(Xt,"ID of the SSE client connection."),Xt.forEach(t),rt.forEach(t),ke=p(Ot),N=l(Ot,"TR",{});var at=o(N);F=l(at,"TD",{});var Zt=o(F);ae=l(Zt,"DIV",{class:!0});var Tt=o(ae);j=l(Tt,"SPAN",{class:!0});var es=o(j);Ne=n(es,"Optional"),es.forEach(t),H=p(Tt),Ie=l(Tt,"SPAN",{});var ts=o(Ie);Te=n(ts,"subscriptions"),ts.forEach(t),Tt.forEach(t),Zt.forEach(t),We=p(at),Re=l(at,"TD",{});var ss=o(Re);ne=l(ss,"SPAN",{class:!0});var ls=o(ne);je=n(ls,Fe),ls.forEach(t),ss.forEach(t),Ce=p(at),B=l(at,"TD",{});var nt=o(B);x=l(nt,"P",{});var Be=o(x);i=n(Be,`The new client subscriptions to set in the format:
                            `),D=l(Be,"BR",{}),he=p(Be),pe=l(Be,"CODE",{});var os=o(pe);Qe=n(os,"COLLECTION_ID_OR_NAME"),os.forEach(t),ie=n(Be,` or
                            `),Pe=l(Be,"CODE",{});var rs=o(Pe);Xe=n(rs,"COLLECTION_ID_OR_NAME/RECORD_ID"),rs.forEach(t),Ze=n(Be,"."),Be.forEach(t),Ae=p(nt),fe=l(nt,"P",{});var pt=o(fe);_e=n(pt,`You can also attach optional query and header parameters as serialized json to a
                            single topic using the `),Le=l(pt,"CODE",{});var as=o(Le);et=n(as,"options"),as.forEach(t),Ee=n(pt,`
                            query parameter, eg.:
                            `),vt(Se.$$.fragment,pt),pt.forEach(t),tt=p(nt),ce=l(nt,"P",{});var ns=o(ce);st=n(ns,"Leave empty to unsubscribe from everything."),ns.forEach(t),nt.forEach(t),at.forEach(t),Ot.forEach(t),yt.forEach(t),He=p(r),M=l(r,"SMALL",{class:!0});var it=o(M);ge=n(it,"Body parameters could be sent as "),Ve=l(it,"EM",{});var is=o(Ve);lt=n(is,"JSON"),is.forEach(t),kt=n(it,` or
            `),ut=l(it,"EM",{});var cs=o(ut);Nt=n(cs,"multipart/form-data"),cs.forEach(t),Ct=n(it,"."),it.forEach(t),_t=p(r),Ye=l(r,"DIV",{class:!0});var ds=o(Ye);Pt=n(ds,"Responses"),ds.forEach(t),Et=p(r),we=l(r,"DIV",{class:!0});var Rt=o(we);Ke=l(Rt,"DIV",{class:!0});var us=o(Ke);for(let Je=0;Je<de.length;Je+=1)de[Je].l(us);us.forEach(t),At=p(Rt),Ue=l(Rt,"DIV",{class:!0});var hs=o(Ue);for(let Je=0;Je<Y.length;Je+=1)Y[Je].l(hs);hs.forEach(t),Rt.forEach(t),this.h()},h(){m(d,"class","label label-primary"),m(_,"class","content"),m(c,"class","api-route alert alert-success"),m(g,"class","content m-b-sm"),m(P,"class","section-title"),m(G,"width","50%"),m(re,"class","label label-success"),m(oe,"class","inline-flex"),m(me,"class","label"),m(j,"class","label label-warning"),m(ae,"class","inline-flex"),m(ne,"class","label"),m(A,"class","table-compact table-border"),m(M,"class","block txt-hint m-t-10 m-b-base"),m(Ye,"class","section-title"),m(Ke,"class","tabs-header compact left"),m(Ue,"class","tabs-content"),m(we,"class","tabs")},m(r,u){v(r,c,u),e(c,d),e(d,b),e(c,S),e(c,_),e(_,E),v(r,$,u),v(r,g,u),e(g,T),e(T,O),e(g,R),e(g,z),e(z,K),e(z,w),e(w,Q),e(z,X),v(r,te,u),v(r,P,u),e(P,Z),v(r,se,u),v(r,A,u),e(A,V),e(V,y),e(y,f),e(f,I),e(y,ve),e(y,k),e(k,U),e(y,le),e(y,G),e(G,be),e(A,q),e(A,J),e(J,W),e(W,De),e(De,oe),e(oe,re),e(re,Ge),e(oe,qe),e(oe,$e),e($e,ee),e(W,xe),e(W,ue),e(ue,me),e(me,Me),e(W,ye),e(W,Oe),e(Oe,ze),e(J,ke),e(J,N),e(N,F),e(F,ae),e(ae,j),e(j,Ne),e(ae,H),e(ae,Ie),e(Ie,Te),e(N,We),e(N,Re),e(Re,ne),e(ne,je),e(N,Ce),e(N,B),e(B,x),e(x,i),e(x,D),e(x,he),e(x,pe),e(pe,Qe),e(x,ie),e(x,Pe),e(Pe,Xe),e(x,Ze),e(B,Ae),e(B,fe),e(fe,_e),e(fe,Le),e(Le,et),e(fe,Ee),bt(Se,fe,null),e(B,tt),e(B,ce),e(ce,st),v(r,He,u),v(r,M,u),e(M,ge),e(M,Ve),e(Ve,lt),e(M,kt),e(M,ut),e(ut,Nt),e(M,Ct),v(r,_t,u),v(r,Ye,u),e(Ye,Pt),v(r,Et,u),v(r,we,u),e(we,Ke);for(let L=0;L<de.length;L+=1)de[L]&&de[L].m(Ke,null);e(we,At),e(we,Ue);for(let L=0;L<Y.length;L+=1)Y[L]&&Y[L].m(Ue,null);St=!0},p(r,u){u&3&&(gt=r[1],de=ps(de,u,Bt,1,r,gt,Lt,Ke,Ts,ms,null,bs)),u&3&&(ht=r[1],ys(),Y=ps(Y,u,Gt,1,r,ht,Vt,Ue,Rs,_s,null,vs),Os())},i(r){if(!St){ct(Se.$$.fragment,r);for(let u=0;u<ht.length;u+=1)ct(Y[u]);St=!0}},o(r){dt(Se.$$.fragment,r);for(let u=0;u<Y.length;u+=1)dt(Y[u]);St=!1},d(r){r&&t(c),r&&t($),r&&t(g),r&&t(te),r&&t(P),r&&t(se),r&&t(A),mt(Se),r&&t(He),r&&t(M),r&&t(_t),r&&t(Ye),r&&t(Et),r&&t(we);for(let u=0;u<de.length;u+=1)de[u].d();for(let u=0;u<Y.length;u+=1)Y[u].d()}}}function Cs(C){let c,d,b,S,_,E,$,g,T,O,R,z,K,w,Q,X,te,P,Z,se,A,V,y,f,I,ve,k,U,le,G,be,q,J,W,De,oe,re,Ge,qe,$e,ee,xe,ue,me,Me,ye,Oe,ze,ke,N,F,ae,j,Ne,H,Ie,Te,We,Re,ne,Fe,je,Ce,B,x;return F=new fs({props:{single:!0,title:"Connect",$$slots:{default:[ks]},$$scope:{ctx:C}}}),j=new fs({props:{single:!0,title:"Set subscriptions",$$slots:{default:[Ns]},$$scope:{ctx:C}}}),B=new ws({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // Subscribe to changes in any record in the collection
        pb.collection('example').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like expand, custom headers, etc. */ });


        // Subscribe to changes only in the specified record
        pb.collection('example').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like expand, custom headers, etc. */ });


        // Unsubscribe
        pb.collection('example').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('example').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('example').unsubscribe(); // remove all subscriptions in the collection
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // Subscribe to changes in any record in the collection
        pb.collection('example').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like expand, custom headers, etc. */);


        // Subscribe to changes only in the specified record
        pb.collection('example').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like expand, custom headers, etc. */);


        // Unsubscribe
        pb.collection('example').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('example').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('example').unsubscribe(); // remove all subscriptions in the collection
    `}}),{c(){c=s("p"),d=a("The Realtime API is implemented via Server-Sent Events (SSE). Generally, it consists of 2 operations:"),b=h(),S=s("ol"),_=s("li"),E=a("establish SSE connection"),$=h(),g=s("li"),T=a("submit client subscriptions"),O=h(),R=s("p"),z=a("SSE events are sent for "),K=s("strong"),w=a("create"),Q=a(", "),X=s("strong"),te=a("update"),P=a(`
    and `),Z=s("strong"),se=a("delete"),A=a(" record operations."),V=h(),y=s("div"),f=s("div"),I=s("i"),ve=h(),k=s("div"),U=s("p"),le=s("strong"),G=a("You could subscribe to a single record or to an entire collection."),be=h(),q=s("p"),J=a("When you subscribe to a "),W=s("strong"),De=a("single record"),oe=a(`, the collection's
            `),re=s("strong"),Ge=a("ViewRule"),qe=a(` will be used to determine whether the subscriber has access to receive the
            event message.`),$e=h(),ee=s("p"),xe=a("When you subscribe to an "),ue=s("strong"),me=a("entire collection"),Me=a(`, the collection's
            `),ye=s("strong"),Oe=a("ListRule"),ze=a(` will be used to determine whether the subscriber has access to receive the
            event message.`),ke=h(),N=s("div"),ft(F.$$.fragment),ae=h(),ft(j.$$.fragment),Ne=h(),H=s("p"),Ie=a("All of this is seamlessly handled by the SDKs using just the "),Te=s("code"),We=a("subscribe"),Re=a(` and
    `),ne=s("code"),Fe=a("unsubscribe"),je=a(" methods:"),Ce=h(),ft(B.$$.fragment),this.h()},l(i){c=l(i,"P",{});var D=o(c);d=n(D,"The Realtime API is implemented via Server-Sent Events (SSE). Generally, it consists of 2 operations:"),D.forEach(t),b=p(i),S=l(i,"OL",{});var he=o(S);_=l(he,"LI",{});var pe=o(_);E=n(pe,"establish SSE connection"),pe.forEach(t),$=p(he),g=l(he,"LI",{});var Qe=o(g);T=n(Qe,"submit client subscriptions"),Qe.forEach(t),he.forEach(t),O=p(i),R=l(i,"P",{});var ie=o(R);z=n(ie,"SSE events are sent for "),K=l(ie,"STRONG",{});var Pe=o(K);w=n(Pe,"create"),Pe.forEach(t),Q=n(ie,", "),X=l(ie,"STRONG",{});var Xe=o(X);te=n(Xe,"update"),Xe.forEach(t),P=n(ie,`
    and `),Z=l(ie,"STRONG",{});var Ze=o(Z);se=n(Ze,"delete"),Ze.forEach(t),A=n(ie," record operations."),ie.forEach(t),V=p(i),y=l(i,"DIV",{class:!0});var Ae=o(y);f=l(Ae,"DIV",{class:!0});var fe=o(f);I=l(fe,"I",{class:!0}),o(I).forEach(t),fe.forEach(t),ve=p(Ae),k=l(Ae,"DIV",{class:!0});var _e=o(k);U=l(_e,"P",{});var Le=o(U);le=l(Le,"STRONG",{});var et=o(le);G=n(et,"You could subscribe to a single record or to an entire collection."),et.forEach(t),Le.forEach(t),be=p(_e),q=l(_e,"P",{});var Ee=o(q);J=n(Ee,"When you subscribe to a "),W=l(Ee,"STRONG",{});var Se=o(W);De=n(Se,"single record"),Se.forEach(t),oe=n(Ee,`, the collection's
            `),re=l(Ee,"STRONG",{});var tt=o(re);Ge=n(tt,"ViewRule"),tt.forEach(t),qe=n(Ee,` will be used to determine whether the subscriber has access to receive the
            event message.`),Ee.forEach(t),$e=p(_e),ee=l(_e,"P",{});var ce=o(ee);xe=n(ce,"When you subscribe to an "),ue=l(ce,"STRONG",{});var st=o(ue);me=n(st,"entire collection"),st.forEach(t),Me=n(ce,`, the collection's
            `),ye=l(ce,"STRONG",{});var He=o(ye);Oe=n(He,"ListRule"),He.forEach(t),ze=n(ce,` will be used to determine whether the subscriber has access to receive the
            event message.`),ce.forEach(t),_e.forEach(t),Ae.forEach(t),ke=p(i),N=l(i,"DIV",{class:!0});var M=o(N);vt(F.$$.fragment,M),ae=p(M),vt(j.$$.fragment,M),M.forEach(t),Ne=p(i),H=l(i,"P",{class:!0});var ge=o(H);Ie=n(ge,"All of this is seamlessly handled by the SDKs using just the "),Te=l(ge,"CODE",{});var Ve=o(Te);We=n(Ve,"subscribe"),Ve.forEach(t),Re=n(ge,` and
    `),ne=l(ge,"CODE",{});var lt=o(ne);Fe=n(lt,"unsubscribe"),lt.forEach(t),je=n(ge," methods:"),ge.forEach(t),Ce=p(i),vt(B.$$.fragment,i),this.h()},h(){m(I,"class","ri-information-line"),m(f,"class","icon"),m(k,"class","content"),m(y,"class","alert alert-info m-t-10 m-b-sm"),m(N,"class","accordions m-b-base"),m(H,"class","txt-bold")},m(i,D){v(i,c,D),e(c,d),v(i,b,D),v(i,S,D),e(S,_),e(_,E),e(S,$),e(S,g),e(g,T),v(i,O,D),v(i,R,D),e(R,z),e(R,K),e(K,w),e(R,Q),e(R,X),e(X,te),e(R,P),e(R,Z),e(Z,se),e(R,A),v(i,V,D),v(i,y,D),e(y,f),e(f,I),e(y,ve),e(y,k),e(k,U),e(U,le),e(le,G),e(k,be),e(k,q),e(q,J),e(q,W),e(W,De),e(q,oe),e(q,re),e(re,Ge),e(q,qe),e(k,$e),e(k,ee),e(ee,xe),e(ee,ue),e(ue,me),e(ee,Me),e(ee,ye),e(ye,Oe),e(ee,ze),v(i,ke,D),v(i,N,D),bt(F,N,null),e(N,ae),bt(j,N,null),v(i,Ne,D),v(i,H,D),e(H,Ie),e(H,Te),e(Te,We),e(H,Re),e(H,ne),e(ne,Fe),e(H,je),v(i,Ce,D),bt(B,i,D),x=!0},p(i,[D]){const he={};D&256&&(he.$$scope={dirty:D,ctx:i}),F.$set(he);const pe={};D&257&&(pe.$$scope={dirty:D,ctx:i}),j.$set(pe)},i(i){x||(ct(F.$$.fragment,i),ct(j.$$.fragment,i),ct(B.$$.fragment,i),x=!0)},o(i){dt(F.$$.fragment,i),dt(j.$$.fragment,i),dt(B.$$.fragment,i),x=!1},d(i){i&&t(c),i&&t(b),i&&t(S),i&&t(O),i&&t(R),i&&t(V),i&&t(y),i&&t(ke),i&&t(N),mt(F),mt(j),i&&t(Ne),i&&t(H),i&&t(Ce),mt(B,i)}}}function Ps(C,c,d){const b=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request.",
                  "data": {
                    "clientId": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "The current and the previous request authorization don't match.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "Missing or invalid client id.",
                  "data": {}
                }
            `}];let S=b[0].code;return[S,b,E=>d(0,S=E.code)]}class Gs extends Ss{constructor(c){super(),gs(this,c,Ps,Cs,Ds,{})}}export{Gs as component};
