import{S as Zo,i as er,s as tr,a as d,k as r,q as t,P as or,h as n,c as u,l as a,m as s,r as o,n as l,b as Jo,G as e,H as mo}from"../chunks/index.a7566c1a.js";function rr($o){let Q,_,q,T,ye,_e,j,i,$,Ee,we,O,Pe,Z,Be,Ae,Ie,U,k,w,Se,Ge,P,ee,He,Le,te,De,Me,Fe,B,A,Re,Ce,W,Ve,I,Ne,Oe,Ue,h,ze,S,xe,Qe,G,qe,Te,H,je,We,L,Ye,Ke,D,Xe,Je,$e,Ze,Y,et,tt,ot,oe,rt,at,p,nt,st,lt,it,ct,re,dt,ut,ht,ft,M,pt,mt,bt,ae,gt,vt,g,kt,yt,_t,ne,Et,wt,K,Pt,Bt,At,se,It,St,le,Gt,Ht,ie,Lt,Dt,z,Mt,Ft,Rt,Ct,ce,Vt,Nt,m,Ot,Ut,zt,de,xt,Qt,qt,Tt,F,jt,Wt,Yt,ue,Kt,Xt,E,Jt,$t,Zt,he,eo,to,oo,fe,ro,ao,v,no,R,so,lo,X,io,co,pe,uo,ho;return{c(){Q=d(),_=r("div"),q=r("nav"),T=r("div"),ye=t("FAQ"),_e=d(),j=r("div"),i=r("div"),$=r("h5"),Ee=t("1. Do you offer hosting?"),we=d(),O=r("p"),Pe=t("No. PocketBase is self-hosted only. If you are looking for "),Z=r("strong"),Be=t("free options"),Ae=t(` for small
                POC and hobby apps, you can check:`),Ie=d(),U=r("ul"),k=r("li"),w=r("a"),Se=t("Fly.io"),Ge=t(` - see also
                    `),P=r("a"),ee=r("strong"),He=t("Host for free on Fly.io"),Le=t(`
                    guide (`),te=r("em"),De=t(`the free tier comes with 1vCPU, 256MB RAM and 1GB disk storage /up to 3GB but
                        requires card details/`),Me=t(")"),Fe=d(),B=r("li"),A=r("a"),Re=t("PocketHost.io"),Ce=t(`
                    (`),W=r("em"),Ve=t("shared single VM instance, maintained and provided by "),I=r("a"),Ne=t("benallfree"),Oe=t(")"),Ue=d(),h=r("p"),ze=t(`For a more traditional setup you can use any VPS provider that comes with a persistent
                storage, like
                `),S=r("a"),xe=t("Hetzner"),Qe=t(`,
                `),G=r("a"),qe=t("Vultr"),Te=t(`,
                `),H=r("a"),je=t("UpCloud"),We=t(`,
                `),L=r("a"),Ye=t("Linode"),Ke=t(`,
                `),D=r("a"),Xe=t("DigitalOcean"),Je=t(`, etc.
                `),$e=r("br"),Ze=t(`
                The
                `),Y=r("a"),et=t("Going to production"),tt=t(` guide contains general information
                how to deploy your PocketBase app and some config recommendations.`),ot=d(),oe=r("h5"),rt=t("2. Does it scale?"),at=d(),p=r("p"),nt=t(`Only on a single server, aka. vertical. Most of the time, you may not need the complexity of
                managing a fleet of machines and services just to run your backend.
                `),st=r("br"),lt=t(`
                PocketBase is a great choice for small and midsize applications - SaaS, mobile api backend, intranet,
                etc.
                `),it=r("br"),ct=d(),re=r("strong"),dt=t(`Even without optimizations, PocketBase can easily serve 10 000+ persistent realtime
                    connections on a cheap $4 Hetzner CAX11 VPS (2vCPU, 4GB RAM).`),ut=d(),ht=r("br"),ft=t(`
                You can explore the official
                `),M=r("a"),pt=t("benchmarks repo"),mt=t(`
                for more details.`),bt=d(),ae=r("h5"),gt=t("3. How to run custom code?"),vt=d(),g=r("p"),kt=t(`PocketBase differs from the other similar backend solutions like Firebase, Supabase, Nhost,
                etc. and doesn't support running cloud functions.
                `),yt=r("br"),_t=d(),ne=r("strong"),Et=t(`Instead, PocketBase could be used as a Go or JS framework that enables you to build your
                    own custom app specific business logic and still have a portable backend at the end`),wt=t(`
                (check `),K=r("a"),Pt=t("Use as framework"),Bt=t(" guide)."),At=d(),se=r("h5"),It=t("4. Does it support Google or Facebook login?"),St=d(),le=r("p"),Gt=t(`Yes, currently we support more than 15+ OAuth2 providers - Apple, Google, Facebook, Microsoft,
                VK, GitHub, GitLab, and many more.`),Ht=d(),ie=r("h5"),Lt=t("5. Does it come with frontend UI for user login, register, etc. screens?"),Dt=d(),z=r("p"),Mt=t(`No. PocketBase provides only SDKs for client-side integration and you are free to implement
                your own frontend.
                `),Ft=r("br"),Rt=t(`
                For convenience, there are default user facing pages for the user email confirmation links (password
                reset, verification, etc.) but you can also set your own by updating the urls in the Admin UI settings.`),Ct=d(),ce=r("h5"),Vt=t("6. Can I use database X?"),Nt=d(),m=r("p"),Ot=t(`PocketBase uses embedded SQLite (in WAL mode) and there are no plans for supporting other
                databases.
                `),Ut=r("br"),zt=d(),de=r("strong"),xt=t(`For majority of the queries SQLite (in WAL mode) outperforms traditional databases like
                    MySQL, MariaDB or PostgreSQL (especially for read operations).`),Qt=d(),qt=r("br"),Tt=t(`
                If you need replication and disaster recovery, a great companion app could be
                `),F=r("a"),jt=t("Litestream"),Wt=t("."),Yt=d(),ue=r("h5"),Kt=t("7. Can I donate?"),Xt=d(),E=r("p"),Jt=t(`No. In the past we accepted donations (I'm very grateful for everyone who contributed) but
                financial contributions from individuals usually comes with some "unspoken expectations" and
                to avoid the mental burden and the sense of feeling guilty when not working on the
                contributor's feature request, I've decided to stop accepting donations for PocketBase.
                `),$t=r("br"),Zt=t(`
                If you are part of an organization that offers sponsorships or grants and want to support the project
                development financially, feel free to reach out to
                `),he=r("em"),eo=t("support at pocketbase.io"),to=t(" but only if there are no strings attached."),oo=d(),fe=r("h5"),ro=t("8. Where can I find help for my PocketBase application?"),ao=d(),v=r("p"),no=t(`You could always look for help in our public
                `),R=r("a"),so=t("Discussions board"),lo=t(`,
                `),X=r("a"),io=t("open an issue or feature request"),co=t(`
                or contact `),pe=r("em"),uo=t("support at pocketbase.io"),ho=t("."),this.h()},l(C){or("svelte-zdwnv7",document.head).forEach(n),Q=u(C),_=a(C,"DIV",{class:!0});var be=s(_);q=a(be,"NAV",{class:!0});var bo=s(q);T=a(bo,"DIV",{class:!0});var go=s(T);ye=o(go,"FAQ"),go.forEach(n),bo.forEach(n),_e=u(be),j=a(be,"DIV",{class:!0});var vo=s(j);i=a(vo,"DIV",{class:!0});var c=s(i);$=a(c,"H5",{});var ko=s($);Ee=o(ko,"1. Do you offer hosting?"),ko.forEach(n),we=u(c),O=a(c,"P",{});var ge=s(O);Pe=o(ge,"No. PocketBase is self-hosted only. If you are looking for "),Z=a(ge,"STRONG",{});var yo=s(Z);Be=o(yo,"free options"),yo.forEach(n),Ae=o(ge,` for small
                POC and hobby apps, you can check:`),ge.forEach(n),Ie=u(c),U=a(c,"UL",{});var ve=s(U);k=a(ve,"LI",{});var x=s(k);w=a(x,"A",{href:!0,target:!0,rel:!0});var _o=s(w);Se=o(_o,"Fly.io"),_o.forEach(n),Ge=o(x,` - see also
                    `),P=a(x,"A",{href:!0,target:!0,rel:!0});var Eo=s(P);ee=a(Eo,"STRONG",{});var wo=s(ee);He=o(wo,"Host for free on Fly.io"),wo.forEach(n),Eo.forEach(n),Le=o(x,`
                    guide (`),te=a(x,"EM",{});var Po=s(te);De=o(Po,`the free tier comes with 1vCPU, 256MB RAM and 1GB disk storage /up to 3GB but
                        requires card details/`),Po.forEach(n),Me=o(x,")"),x.forEach(n),Fe=u(ve),B=a(ve,"LI",{});var me=s(B);A=a(me,"A",{href:!0,target:!0,rel:!0});var Bo=s(A);Re=o(Bo,"PocketHost.io"),Bo.forEach(n),Ce=o(me,`
                    (`),W=a(me,"EM",{});var po=s(W);Ve=o(po,"shared single VM instance, maintained and provided by "),I=a(po,"A",{href:!0,target:!0,rel:!0});var Ao=s(I);Ne=o(Ao,"benallfree"),Ao.forEach(n),po.forEach(n),Oe=o(me,")"),me.forEach(n),ve.forEach(n),Ue=u(c),h=a(c,"P",{});var f=s(h);ze=o(f,`For a more traditional setup you can use any VPS provider that comes with a persistent
                storage, like
                `),S=a(f,"A",{href:!0,target:!0,rel:!0});var Io=s(S);xe=o(Io,"Hetzner"),Io.forEach(n),Qe=o(f,`,
                `),G=a(f,"A",{href:!0,target:!0,rel:!0});var So=s(G);qe=o(So,"Vultr"),So.forEach(n),Te=o(f,`,
                `),H=a(f,"A",{href:!0,target:!0,rel:!0});var Go=s(H);je=o(Go,"UpCloud"),Go.forEach(n),We=o(f,`,
                `),L=a(f,"A",{href:!0,target:!0,rel:!0});var Ho=s(L);Ye=o(Ho,"Linode"),Ho.forEach(n),Ke=o(f,`,
                `),D=a(f,"A",{href:!0,target:!0,rel:!0});var Lo=s(D);Xe=o(Lo,"DigitalOcean"),Lo.forEach(n),Je=o(f,`, etc.
                `),$e=a(f,"BR",{}),Ze=o(f,`
                The
                `),Y=a(f,"A",{href:!0});var Do=s(Y);et=o(Do,"Going to production"),Do.forEach(n),tt=o(f,` guide contains general information
                how to deploy your PocketBase app and some config recommendations.`),f.forEach(n),ot=u(c),oe=a(c,"H5",{});var Mo=s(oe);rt=o(Mo,"2. Does it scale?"),Mo.forEach(n),at=u(c),p=a(c,"P",{});var b=s(p);nt=o(b,`Only on a single server, aka. vertical. Most of the time, you may not need the complexity of
                managing a fleet of machines and services just to run your backend.
                `),st=a(b,"BR",{}),lt=o(b,`
                PocketBase is a great choice for small and midsize applications - SaaS, mobile api backend, intranet,
                etc.
                `),it=a(b,"BR",{}),ct=u(b),re=a(b,"STRONG",{});var Fo=s(re);dt=o(Fo,`Even without optimizations, PocketBase can easily serve 10 000+ persistent realtime
                    connections on a cheap $4 Hetzner CAX11 VPS (2vCPU, 4GB RAM).`),Fo.forEach(n),ut=u(b),ht=a(b,"BR",{}),ft=o(b,`
                You can explore the official
                `),M=a(b,"A",{href:!0,target:!0,rel:!0});var Ro=s(M);pt=o(Ro,"benchmarks repo"),Ro.forEach(n),mt=o(b,`
                for more details.`),b.forEach(n),bt=u(c),ae=a(c,"H5",{});var Co=s(ae);gt=o(Co,"3. How to run custom code?"),Co.forEach(n),vt=u(c),g=a(c,"P",{});var V=s(g);kt=o(V,`PocketBase differs from the other similar backend solutions like Firebase, Supabase, Nhost,
                etc. and doesn't support running cloud functions.
                `),yt=a(V,"BR",{}),_t=u(V),ne=a(V,"STRONG",{});var Vo=s(ne);Et=o(Vo,`Instead, PocketBase could be used as a Go or JS framework that enables you to build your
                    own custom app specific business logic and still have a portable backend at the end`),Vo.forEach(n),wt=o(V,`
                (check `),K=a(V,"A",{href:!0});var No=s(K);Pt=o(No,"Use as framework"),No.forEach(n),Bt=o(V," guide)."),V.forEach(n),At=u(c),se=a(c,"H5",{});var Oo=s(se);It=o(Oo,"4. Does it support Google or Facebook login?"),Oo.forEach(n),St=u(c),le=a(c,"P",{});var Uo=s(le);Gt=o(Uo,`Yes, currently we support more than 15+ OAuth2 providers - Apple, Google, Facebook, Microsoft,
                VK, GitHub, GitLab, and many more.`),Uo.forEach(n),Ht=u(c),ie=a(c,"H5",{});var zo=s(ie);Lt=o(zo,"5. Does it come with frontend UI for user login, register, etc. screens?"),zo.forEach(n),Dt=u(c),z=a(c,"P",{});var ke=s(z);Mt=o(ke,`No. PocketBase provides only SDKs for client-side integration and you are free to implement
                your own frontend.
                `),Ft=a(ke,"BR",{}),Rt=o(ke,`
                For convenience, there are default user facing pages for the user email confirmation links (password
                reset, verification, etc.) but you can also set your own by updating the urls in the Admin UI settings.`),ke.forEach(n),Ct=u(c),ce=a(c,"H5",{});var xo=s(ce);Vt=o(xo,"6. Can I use database X?"),xo.forEach(n),Nt=u(c),m=a(c,"P",{});var y=s(m);Ot=o(y,`PocketBase uses embedded SQLite (in WAL mode) and there are no plans for supporting other
                databases.
                `),Ut=a(y,"BR",{}),zt=u(y),de=a(y,"STRONG",{});var Qo=s(de);xt=o(Qo,`For majority of the queries SQLite (in WAL mode) outperforms traditional databases like
                    MySQL, MariaDB or PostgreSQL (especially for read operations).`),Qo.forEach(n),Qt=u(y),qt=a(y,"BR",{}),Tt=o(y,`
                If you need replication and disaster recovery, a great companion app could be
                `),F=a(y,"A",{href:!0,target:!0,rel:!0});var qo=s(F);jt=o(qo,"Litestream"),qo.forEach(n),Wt=o(y,"."),y.forEach(n),Yt=u(c),ue=a(c,"H5",{});var To=s(ue);Kt=o(To,"7. Can I donate?"),To.forEach(n),Xt=u(c),E=a(c,"P",{});var J=s(E);Jt=o(J,`No. In the past we accepted donations (I'm very grateful for everyone who contributed) but
                financial contributions from individuals usually comes with some "unspoken expectations" and
                to avoid the mental burden and the sense of feeling guilty when not working on the
                contributor's feature request, I've decided to stop accepting donations for PocketBase.
                `),$t=a(J,"BR",{}),Zt=o(J,`
                If you are part of an organization that offers sponsorships or grants and want to support the project
                development financially, feel free to reach out to
                `),he=a(J,"EM",{});var jo=s(he);eo=o(jo,"support at pocketbase.io"),jo.forEach(n),to=o(J," but only if there are no strings attached."),J.forEach(n),oo=u(c),fe=a(c,"H5",{});var Wo=s(fe);ro=o(Wo,"8. Where can I find help for my PocketBase application?"),Wo.forEach(n),ao=u(c),v=a(c,"P",{});var N=s(v);no=o(N,`You could always look for help in our public
                `),R=a(N,"A",{href:!0,target:!0,rel:!0});var Yo=s(R);so=o(Yo,"Discussions board"),Yo.forEach(n),lo=o(N,`,
                `),X=a(N,"A",{href:!0});var Ko=s(X);io=o(Ko,"open an issue or feature request"),Ko.forEach(n),co=o(N,`
                or contact `),pe=a(N,"EM",{});var Xo=s(pe);uo=o(Xo,"support at pocketbase.io"),Xo.forEach(n),ho=o(N,"."),N.forEach(n),c.forEach(n),vo.forEach(n),be.forEach(n),this.h()},h(){document.title="FAQ - PocketBase",l(T,"class","breadcrumb-item"),l(q,"class","breadcrumbs"),l(w,"href","https://fly.io/"),l(w,"target","_blank"),l(w,"rel","noreferrer noopener"),l(P,"href","https://github.com/pocketbase/pocketbase/discussions/537"),l(P,"target","_blank"),l(P,"rel","noreferrer noopener"),l(A,"href","https://pockethost.io/"),l(A,"target","_blank"),l(A,"rel","noreferrer noopener"),l(I,"href","https://github.com/benallfree"),l(I,"target","_blank"),l(I,"rel","noreferrer noopener"),l(S,"href","https://www.hetzner.com/"),l(S,"target","_blank"),l(S,"rel","noreferrer noopener"),l(G,"href","https://www.vultr.com/"),l(G,"target","_blank"),l(G,"rel","noreferrer noopener"),l(H,"href","https://upcloud.com/"),l(H,"target","_blank"),l(H,"rel","noreferrer noopener"),l(L,"href","https://www.linode.com/"),l(L,"target","_blank"),l(L,"rel","noreferrer noopener"),l(D,"href","https://www.digitalocean.com/"),l(D,"target","_blank"),l(D,"rel","noreferrer noopener"),l(Y,"href","/docs/going-to-production/"),l(M,"href","https://github.com/pocketbase/benchmarks"),l(M,"target","_blank"),l(M,"rel","noreferrer noopener"),l(K,"href","/docs/use-as-framework"),l(F,"href","https://litestream.io/"),l(F,"target","_blank"),l(F,"rel","noreferrer noopener"),l(R,"href","https://github.com/pocketbase/pocketbase/discussions"),l(R,"target","_blank"),l(R,"rel","noreferrer noopener"),l(X,"href","https://github.com/pocketbase/pocketbase"),l(i,"class","content"),l(j,"class","alert p-sm m-b-10"),l(_,"class","page-content")},m(C,fo){Jo(C,Q,fo),Jo(C,_,fo),e(_,q),e(q,T),e(T,ye),e(_,_e),e(_,j),e(j,i),e(i,$),e($,Ee),e(i,we),e(i,O),e(O,Pe),e(O,Z),e(Z,Be),e(O,Ae),e(i,Ie),e(i,U),e(U,k),e(k,w),e(w,Se),e(k,Ge),e(k,P),e(P,ee),e(ee,He),e(k,Le),e(k,te),e(te,De),e(k,Me),e(U,Fe),e(U,B),e(B,A),e(A,Re),e(B,Ce),e(B,W),e(W,Ve),e(W,I),e(I,Ne),e(B,Oe),e(i,Ue),e(i,h),e(h,ze),e(h,S),e(S,xe),e(h,Qe),e(h,G),e(G,qe),e(h,Te),e(h,H),e(H,je),e(h,We),e(h,L),e(L,Ye),e(h,Ke),e(h,D),e(D,Xe),e(h,Je),e(h,$e),e(h,Ze),e(h,Y),e(Y,et),e(h,tt),e(i,ot),e(i,oe),e(oe,rt),e(i,at),e(i,p),e(p,nt),e(p,st),e(p,lt),e(p,it),e(p,ct),e(p,re),e(re,dt),e(p,ut),e(p,ht),e(p,ft),e(p,M),e(M,pt),e(p,mt),e(i,bt),e(i,ae),e(ae,gt),e(i,vt),e(i,g),e(g,kt),e(g,yt),e(g,_t),e(g,ne),e(ne,Et),e(g,wt),e(g,K),e(K,Pt),e(g,Bt),e(i,At),e(i,se),e(se,It),e(i,St),e(i,le),e(le,Gt),e(i,Ht),e(i,ie),e(ie,Lt),e(i,Dt),e(i,z),e(z,Mt),e(z,Ft),e(z,Rt),e(i,Ct),e(i,ce),e(ce,Vt),e(i,Nt),e(i,m),e(m,Ot),e(m,Ut),e(m,zt),e(m,de),e(de,xt),e(m,Qt),e(m,qt),e(m,Tt),e(m,F),e(F,jt),e(m,Wt),e(i,Yt),e(i,ue),e(ue,Kt),e(i,Xt),e(i,E),e(E,Jt),e(E,$t),e(E,Zt),e(E,he),e(he,eo),e(E,to),e(i,oo),e(i,fe),e(fe,ro),e(i,ao),e(i,v),e(v,no),e(v,R),e(R,so),e(v,lo),e(v,X),e(X,io),e(v,co),e(v,pe),e(pe,uo),e(v,ho)},p:mo,i:mo,o:mo,d(C){C&&n(Q),C&&n(_)}}}class nr extends Zo{constructor(Q){super(),er(this,Q,null,rr,tr,{})}}export{nr as component};
