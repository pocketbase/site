import{S as Gl,i as Hl,s as Ml,y as Q,z as Z,A as j,g as H,d as M,B as x,k as l,q as n,a as u,l as a,m as r,r as d,h as t,c as h,n as $,b as k,G as e,N as gl,R as ia,v as ca,O as fa,f as ua,K as vt,L as ha,H as Pr}from"../chunks/index.a7566c1a.js";import{A as pa}from"../chunks/Accordion.71344b00.js";import{C as bl}from"../chunks/CodeBlock.a090ee9b.js";import{C as ma}from"../chunks/CodeTabs.3c6448ff.js";import{F as Or}from"../chunks/FilterSyntax.3a84ec87.js";import{F as va}from"../chunks/FieldsQueryParam.61e1061c.js";function mr(T,s,o){const i=T.slice();return i[3]=s[o],i}function vr(T,s,o){const i=T.slice();return i[3]=s[o],i}function _r(T,s){let o,i=s[3].code+"",v,_,m,D;function O(){return s[2](s[3])}return{key:T,first:null,c(){o=l("button"),v=n(i),_=u(),this.h()},l(y){o=a(y,"BUTTON",{class:!0});var E=r(o);v=d(E,i),_=h(E),E.forEach(t),this.h()},h(){$(o,"class","tab-item"),vt(o,"active",s[0]===s[3].code),this.first=o},m(y,E){k(y,o,E),e(o,v),e(o,_),m||(D=ha(o,"click",O),m=!0)},p(y,E){s=y,E&3&&vt(o,"active",s[0]===s[3].code)},d(y){y&&t(o),m=!1,D()}}}function $r(T,s){let o,i,v,_;return i=new bl({props:{content:s[3].body}}),{key:T,first:null,c(){o=l("div"),Q(i.$$.fragment),v=u(),this.h()},l(m){o=a(m,"DIV",{class:!0});var D=r(o);Z(i.$$.fragment,D),v=h(D),D.forEach(t),this.h()},h(){$(o,"class","tab-item"),vt(o,"active",s[0]===s[3].code),this.first=o},m(m,D){k(m,o,D),j(i,o,null),e(o,v),_=!0},p(m,D){s=m,(!_||D&3)&&vt(o,"active",s[0]===s[3].code)},i(m){_||(H(i.$$.fragment,m),_=!0)},o(m){M(i.$$.fragment,m),_=!1},d(m){m&&t(o),x(i)}}}function Sr(T){let s,o,i,v,_,m,D,O,y,E,W,_t,$t,z,Et,je,U,gt,X,bt,Ce,J,it,ce,L,we,I,fe,ue,xe,Ae,Tt,Ue,he,Dt,Ke,V,G,ee,pe,Xe,Ve,me,Je,We,ve,Y,_e,yt,ct,te,$e,S,le,et,ae,Oe,kt,tt,Ee,wt,qe,Ye,Ot,lt,re,ne,Fe,Be,at,ge,be,Ne,B,se,Le,Te,q,Ct,ft,Pe,Se,De,rt,c,g,R,Ie,de,oe,Qe,At,P,N,Bt,st,Pt,ot,Ze,Nt,f,b,C,Lt,Ge,Gt,Ht,ut,St,Mt,ye,zt,nt,It,Kt,Wt,He,dt,Yt,Re,ol,nl,ht,pt,A,dl,il,Zt,Ft,cl,fl,jt,Me,xt,Ut,ul,Vt,Rt,F,Tl,zl,Kl,Wl,Yl,Dl,Fl,Ql,yl,Zl,jl,kl,xl,Ul,wl,Xl,Jl,Ol,ea,ta,Pl,la,aa,ra,el,sa,tl,Il,ll,oa,Rl,Qt,al,mt=[],_a=new Map,na,rl,ze=[],$a=new Map,Cl;O=new ma({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const pageResult = await pb.logs.getList(1, 20, {
                filter: 'data.status >= 400'
            });
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final pageResult = await pb.logs.getList(
                page: 1,
                perPage: 20,
                filter: 'data.status >= 400',
            );
        `}}),Qe=new bl({props:{content:`
                                // DESC by the insertion rowid and ASC by level
                                ?sort=-rowid,level
                            `}}),Vt=new bl({props:{content:`
                                ?filter=(data.url~'test.com' && level>0)
                            `}}),el=new Or({}),tl=new va({});let Al=T[1];const Ea=p=>p[3].code;for(let p=0;p<Al.length;p+=1){let w=vr(T,Al,p),ie=Ea(w);_a.set(ie,mt[p]=_r(ie,w))}let Sl=T[1];const ga=p=>p[3].code;for(let p=0;p<Sl.length;p+=1){let w=mr(T,Sl,p),ie=ga(w);$a.set(ie,ze[p]=$r(ie,w))}return{c(){s=l("div"),o=l("p"),i=n("Returns a paginated logs list."),v=u(),_=l("p"),m=n("Only admins can perform this action."),D=u(),Q(O.$$.fragment),y=u(),E=l("div"),W=l("strong"),_t=n("GET"),$t=u(),z=l("div"),Et=n("/api/logs"),je=u(),U=l("small"),gt=n("Requires "),X=l("code"),bt=n("Authorization: TOKEN"),Ce=u(),J=l("div"),it=n("Query parameters"),ce=u(),L=l("table"),we=l("thead"),I=l("tr"),fe=l("th"),ue=n("Param"),xe=u(),Ae=l("th"),Tt=n("Type"),Ue=u(),he=l("th"),Dt=n("Description"),Ke=u(),V=l("tbody"),G=l("tr"),ee=l("td"),pe=n("page"),Xe=u(),Ve=l("td"),me=l("span"),Je=n("Number"),We=u(),ve=l("td"),Y=n("The page (aka. offset) of the paginated list ("),_e=l("em"),yt=n("default to 1"),ct=n(")."),te=u(),$e=l("tr"),S=l("td"),le=n("perPage"),et=u(),ae=l("td"),Oe=l("span"),kt=n("Number"),tt=u(),Ee=l("td"),wt=n("The max returned logs per page ("),qe=l("em"),Ye=n("default to 30"),Ot=n(")."),lt=u(),re=l("tr"),ne=l("td"),Fe=n("sort"),Be=u(),at=l("td"),ge=l("span"),be=n("String"),Ne=u(),B=l("td"),se=l("div"),Le=l("p"),Te=n("Specify the "),q=l("em"),Ct=n("ORDER BY"),ft=n(" fields."),Pe=u(),Se=l("p"),De=n("Add "),rt=l("code"),c=n("-"),g=n(" / "),R=l("code"),Ie=n("+"),de=n(` (default) in front of the attribute for DESC /
                            ASC order, eg.:`),oe=u(),Q(Qe.$$.fragment),At=u(),P=l("p"),N=l("strong"),Bt=n("Supported log sort fields:"),st=u(),Pt=l("br"),ot=u(),Ze=l("code"),Nt=n("@random"),f=n(", "),b=l("code"),C=n("rowid"),Lt=n(", "),Ge=l("code"),Gt=n("id"),Ht=n(", "),ut=l("code"),St=n("created"),Mt=n(`,
                            `),ye=l("code"),zt=n("updated"),nt=n(", "),It=l("code"),Kt=n("level"),Wt=n(", "),He=l("code"),dt=n("message"),Yt=n(` and any
                            `),Re=l("code"),ol=n("data.*"),nl=n(" attribute."),ht=u(),pt=l("tr"),A=l("td"),dl=n("filter"),il=u(),Zt=l("td"),Ft=l("span"),cl=n("String"),fl=u(),jt=l("td"),Me=l("div"),xt=l("p"),Ut=n("Filter expression to filter/search the returned logs list, eg.:"),ul=u(),Q(Vt.$$.fragment),Rt=u(),F=l("p"),Tl=l("strong"),zl=n("Supported log filter fields:"),Kl=u(),Wl=l("br"),Yl=u(),Dl=l("code"),Fl=n("id"),Ql=n(", "),yl=l("code"),Zl=n("created"),jl=n(", "),kl=l("code"),xl=n("updated"),Ul=n(`,
                            `),wl=l("code"),Xl=n("level"),Jl=n(", "),Ol=l("code"),ea=n("message"),ta=n(" and any "),Pl=l("code"),la=n("data.*"),aa=n(" attribute."),ra=u(),Q(el.$$.fragment),sa=u(),Q(tl.$$.fragment),Il=u(),ll=l("div"),oa=n("Responses"),Rl=u(),Qt=l("div"),al=l("div");for(let p=0;p<mt.length;p+=1)mt[p].c();na=u(),rl=l("div");for(let p=0;p<ze.length;p+=1)ze[p].c();this.h()},l(p){s=a(p,"DIV",{class:!0});var w=r(s);o=a(w,"P",{});var ie=r(o);i=d(ie,"Returns a paginated logs list."),ie.forEach(t),v=h(w),_=a(w,"P",{});var ba=r(_);m=d(ba,"Only admins can perform this action."),ba.forEach(t),w.forEach(t),D=h(p),Z(O.$$.fragment,p),y=h(p),E=a(p,"DIV",{class:!0});var hl=r(E);W=a(hl,"STRONG",{class:!0});var Ta=r(W);_t=d(Ta,"GET"),Ta.forEach(t),$t=h(hl),z=a(hl,"DIV",{class:!0});var Da=r(z);Et=d(Da,"/api/logs"),Da.forEach(t),je=h(hl),U=a(hl,"SMALL",{class:!0});var da=r(U);gt=d(da,"Requires "),X=a(da,"CODE",{});var ya=r(X);bt=d(ya,"Authorization: TOKEN"),ya.forEach(t),da.forEach(t),hl.forEach(t),Ce=h(p),J=a(p,"DIV",{class:!0});var ka=r(J);it=d(ka,"Query parameters"),ka.forEach(t),ce=h(p),L=a(p,"TABLE",{class:!0});var Vl=r(L);we=a(Vl,"THEAD",{});var wa=r(we);I=a(wa,"TR",{});var pl=r(I);fe=a(pl,"TH",{});var Oa=r(fe);ue=d(Oa,"Param"),Oa.forEach(t),xe=h(pl),Ae=a(pl,"TH",{});var Pa=r(Ae);Tt=d(Pa,"Type"),Pa.forEach(t),Ue=h(pl),he=a(pl,"TH",{width:!0});var Sa=r(he);Dt=d(Sa,"Description"),Sa.forEach(t),pl.forEach(t),wa.forEach(t),Ke=h(Vl),V=a(Vl,"TBODY",{});var qt=r(V);G=a(qt,"TR",{});var ml=r(G);ee=a(ml,"TD",{id:!0});var Ia=r(ee);pe=d(Ia,"page"),Ia.forEach(t),Xe=h(ml),Ve=a(ml,"TD",{});var Ra=r(Ve);me=a(Ra,"SPAN",{class:!0});var Ca=r(me);Je=d(Ca,"Number"),Ca.forEach(t),Ra.forEach(t),We=h(ml),ve=a(ml,"TD",{});var ql=r(ve);Y=d(ql,"The page (aka. offset) of the paginated list ("),_e=a(ql,"EM",{});var Aa=r(_e);yt=d(Aa,"default to 1"),Aa.forEach(t),ct=d(ql,")."),ql.forEach(t),ml.forEach(t),te=h(qt),$e=a(qt,"TR",{});var vl=r($e);S=a(vl,"TD",{id:!0});var Va=r(S);le=d(Va,"perPage"),Va.forEach(t),et=h(vl),ae=a(vl,"TD",{});var qa=r(ae);Oe=a(qa,"SPAN",{class:!0});var Ba=r(Oe);kt=d(Ba,"Number"),Ba.forEach(t),qa.forEach(t),tt=h(vl),Ee=a(vl,"TD",{});var Bl=r(Ee);wt=d(Bl,"The max returned logs per page ("),qe=a(Bl,"EM",{});var Na=r(qe);Ye=d(Na,"default to 30"),Na.forEach(t),Ot=d(Bl,")."),Bl.forEach(t),vl.forEach(t),lt=h(qt),re=a(qt,"TR",{});var _l=r(re);ne=a(_l,"TD",{id:!0});var La=r(ne);Fe=d(La,"sort"),La.forEach(t),Be=h(_l),at=a(_l,"TD",{});var Ga=r(at);ge=a(Ga,"SPAN",{class:!0});var Ha=r(ge);be=d(Ha,"String"),Ha.forEach(t),Ga.forEach(t),Ne=h(_l),B=a(_l,"TD",{});var Ma=r(B);se=a(Ma,"DIV",{class:!0});var Xt=r(se);Le=a(Xt,"P",{});var Nl=r(Le);Te=d(Nl,"Specify the "),q=a(Nl,"EM",{});var za=r(q);Ct=d(za,"ORDER BY"),za.forEach(t),ft=d(Nl," fields."),Nl.forEach(t),Pe=h(Xt),Se=a(Xt,"P",{});var $l=r(Se);De=d($l,"Add "),rt=a($l,"CODE",{});var Ka=r(rt);c=d(Ka,"-"),Ka.forEach(t),g=d($l," / "),R=a($l,"CODE",{});var Wa=r(R);Ie=d(Wa,"+"),Wa.forEach(t),de=d($l,` (default) in front of the attribute for DESC /
                            ASC order, eg.:`),$l.forEach(t),oe=h(Xt),Z(Qe.$$.fragment,Xt),At=h(Xt),P=a(Xt,"P",{});var K=r(P);N=a(K,"STRONG",{});var Ya=r(N);Bt=d(Ya,"Supported log sort fields:"),Ya.forEach(t),st=h(K),Pt=a(K,"BR",{}),ot=h(K),Ze=a(K,"CODE",{});var Fa=r(Ze);Nt=d(Fa,"@random"),Fa.forEach(t),f=d(K,", "),b=a(K,"CODE",{});var Qa=r(b);C=d(Qa,"rowid"),Qa.forEach(t),Lt=d(K,", "),Ge=a(K,"CODE",{});var Za=r(Ge);Gt=d(Za,"id"),Za.forEach(t),Ht=d(K,", "),ut=a(K,"CODE",{});var ja=r(ut);St=d(ja,"created"),ja.forEach(t),Mt=d(K,`,
                            `),ye=a(K,"CODE",{});var xa=r(ye);zt=d(xa,"updated"),xa.forEach(t),nt=d(K,", "),It=a(K,"CODE",{});var Ua=r(It);Kt=d(Ua,"level"),Ua.forEach(t),Wt=d(K,", "),He=a(K,"CODE",{});var Xa=r(He);dt=d(Xa,"message"),Xa.forEach(t),Yt=d(K,` and any
                            `),Re=a(K,"CODE",{});var Ja=r(Re);ol=d(Ja,"data.*"),Ja.forEach(t),nl=d(K," attribute."),K.forEach(t),Xt.forEach(t),Ma.forEach(t),_l.forEach(t),ht=h(qt),pt=a(qt,"TR",{});var El=r(pt);A=a(El,"TD",{id:!0});var er=r(A);dl=d(er,"filter"),er.forEach(t),il=h(El),Zt=a(El,"TD",{});var tr=r(Zt);Ft=a(tr,"SPAN",{class:!0});var lr=r(Ft);cl=d(lr,"String"),lr.forEach(t),tr.forEach(t),fl=h(El),jt=a(El,"TD",{});var ar=r(jt);Me=a(ar,"DIV",{class:!0});var Jt=r(Me);xt=a(Jt,"P",{});var rr=r(xt);Ut=d(rr,"Filter expression to filter/search the returned logs list, eg.:"),rr.forEach(t),ul=h(Jt),Z(Vt.$$.fragment,Jt),Rt=h(Jt),F=a(Jt,"P",{});var ke=r(F);Tl=a(ke,"STRONG",{});var sr=r(Tl);zl=d(sr,"Supported log filter fields:"),sr.forEach(t),Kl=h(ke),Wl=a(ke,"BR",{}),Yl=h(ke),Dl=a(ke,"CODE",{});var or=r(Dl);Fl=d(or,"id"),or.forEach(t),Ql=d(ke,", "),yl=a(ke,"CODE",{});var nr=r(yl);Zl=d(nr,"created"),nr.forEach(t),jl=d(ke,", "),kl=a(ke,"CODE",{});var dr=r(kl);xl=d(dr,"updated"),dr.forEach(t),Ul=d(ke,`,
                            `),wl=a(ke,"CODE",{});var ir=r(wl);Xl=d(ir,"level"),ir.forEach(t),Jl=d(ke,", "),Ol=a(ke,"CODE",{});var cr=r(Ol);ea=d(cr,"message"),cr.forEach(t),ta=d(ke," and any "),Pl=a(ke,"CODE",{});var fr=r(Pl);la=d(fr,"data.*"),fr.forEach(t),aa=d(ke," attribute."),ke.forEach(t),ra=h(Jt),Z(el.$$.fragment,Jt),Jt.forEach(t),ar.forEach(t),El.forEach(t),sa=h(qt),Z(tl.$$.fragment,qt),qt.forEach(t),Vl.forEach(t),Il=h(p),ll=a(p,"DIV",{class:!0});var ur=r(ll);oa=d(ur,"Responses"),ur.forEach(t),Rl=h(p),Qt=a(p,"DIV",{class:!0});var Ll=r(Qt);al=a(Ll,"DIV",{class:!0});var hr=r(al);for(let sl=0;sl<mt.length;sl+=1)mt[sl].l(hr);hr.forEach(t),na=h(Ll),rl=a(Ll,"DIV",{class:!0});var pr=r(rl);for(let sl=0;sl<ze.length;sl+=1)ze[sl].l(pr);pr.forEach(t),Ll.forEach(t),this.h()},h(){$(s,"class","content m-b-sm"),$(W,"class","label label-primary"),$(z,"class","content"),$(U,"class","txt-hint auth-header"),$(E,"class","api-route alert alert-info"),$(J,"class","section-title"),$(he,"width","50%"),$(ee,"id","query-page"),$(me,"class","label"),$(S,"id","query-perPage"),$(Oe,"class","label"),$(ne,"id","query-sort"),$(ge,"class","label"),$(se,"class","content"),$(A,"id","query-filter"),$(Ft,"class","label"),$(Me,"class","content"),$(L,"class","table-compact table-border m-b-base"),$(ll,"class","section-title"),$(al,"class","tabs-header compact left"),$(rl,"class","tabs-content"),$(Qt,"class","tabs")},m(p,w){k(p,s,w),e(s,o),e(o,i),e(s,v),e(s,_),e(_,m),k(p,D,w),j(O,p,w),k(p,y,w),k(p,E,w),e(E,W),e(W,_t),e(E,$t),e(E,z),e(z,Et),e(E,je),e(E,U),e(U,gt),e(U,X),e(X,bt),k(p,Ce,w),k(p,J,w),e(J,it),k(p,ce,w),k(p,L,w),e(L,we),e(we,I),e(I,fe),e(fe,ue),e(I,xe),e(I,Ae),e(Ae,Tt),e(I,Ue),e(I,he),e(he,Dt),e(L,Ke),e(L,V),e(V,G),e(G,ee),e(ee,pe),e(G,Xe),e(G,Ve),e(Ve,me),e(me,Je),e(G,We),e(G,ve),e(ve,Y),e(ve,_e),e(_e,yt),e(ve,ct),e(V,te),e(V,$e),e($e,S),e(S,le),e($e,et),e($e,ae),e(ae,Oe),e(Oe,kt),e($e,tt),e($e,Ee),e(Ee,wt),e(Ee,qe),e(qe,Ye),e(Ee,Ot),e(V,lt),e(V,re),e(re,ne),e(ne,Fe),e(re,Be),e(re,at),e(at,ge),e(ge,be),e(re,Ne),e(re,B),e(B,se),e(se,Le),e(Le,Te),e(Le,q),e(q,Ct),e(Le,ft),e(se,Pe),e(se,Se),e(Se,De),e(Se,rt),e(rt,c),e(Se,g),e(Se,R),e(R,Ie),e(Se,de),e(se,oe),j(Qe,se,null),e(se,At),e(se,P),e(P,N),e(N,Bt),e(P,st),e(P,Pt),e(P,ot),e(P,Ze),e(Ze,Nt),e(P,f),e(P,b),e(b,C),e(P,Lt),e(P,Ge),e(Ge,Gt),e(P,Ht),e(P,ut),e(ut,St),e(P,Mt),e(P,ye),e(ye,zt),e(P,nt),e(P,It),e(It,Kt),e(P,Wt),e(P,He),e(He,dt),e(P,Yt),e(P,Re),e(Re,ol),e(P,nl),e(V,ht),e(V,pt),e(pt,A),e(A,dl),e(pt,il),e(pt,Zt),e(Zt,Ft),e(Ft,cl),e(pt,fl),e(pt,jt),e(jt,Me),e(Me,xt),e(xt,Ut),e(Me,ul),j(Vt,Me,null),e(Me,Rt),e(Me,F),e(F,Tl),e(Tl,zl),e(F,Kl),e(F,Wl),e(F,Yl),e(F,Dl),e(Dl,Fl),e(F,Ql),e(F,yl),e(yl,Zl),e(F,jl),e(F,kl),e(kl,xl),e(F,Ul),e(F,wl),e(wl,Xl),e(F,Jl),e(F,Ol),e(Ol,ea),e(F,ta),e(F,Pl),e(Pl,la),e(F,aa),e(Me,ra),j(el,Me,null),e(V,sa),j(tl,V,null),k(p,Il,w),k(p,ll,w),e(ll,oa),k(p,Rl,w),k(p,Qt,w),e(Qt,al);for(let ie=0;ie<mt.length;ie+=1)mt[ie]&&mt[ie].m(al,null);e(Qt,na),e(Qt,rl);for(let ie=0;ie<ze.length;ie+=1)ze[ie]&&ze[ie].m(rl,null);Cl=!0},p(p,w){w&3&&(Al=p[1],mt=gl(mt,w,Ea,1,p,Al,_a,al,ia,_r,null,vr)),w&3&&(Sl=p[1],ca(),ze=gl(ze,w,ga,1,p,Sl,$a,rl,fa,$r,null,mr),ua())},i(p){if(!Cl){H(O.$$.fragment,p),H(Qe.$$.fragment,p),H(Vt.$$.fragment,p),H(el.$$.fragment,p),H(tl.$$.fragment,p);for(let w=0;w<Sl.length;w+=1)H(ze[w]);Cl=!0}},o(p){M(O.$$.fragment,p),M(Qe.$$.fragment,p),M(Vt.$$.fragment,p),M(el.$$.fragment,p),M(tl.$$.fragment,p);for(let w=0;w<ze.length;w+=1)M(ze[w]);Cl=!1},d(p){p&&t(s),p&&t(D),x(O,p),p&&t(y),p&&t(E),p&&t(Ce),p&&t(J),p&&t(ce),p&&t(L),x(Qe),x(Vt),x(el),x(tl),p&&t(Il),p&&t(ll),p&&t(Rl),p&&t(Qt);for(let w=0;w<mt.length;w+=1)mt[w].d();for(let w=0;w<ze.length;w+=1)ze[w].d()}}}function Ir(T){let s,o;return s=new pa({props:{single:!0,title:"List logs",$$slots:{default:[Sr]},$$scope:{ctx:T}}}),{c(){Q(s.$$.fragment)},l(i){Z(s.$$.fragment,i)},m(i,v){j(s,i,v),o=!0},p(i,[v]){const _={};v&257&&(_.$$scope={dirty:v,ctx:i}),s.$set(_)},i(i){o||(H(s.$$.fragment,i),o=!0)},o(i){M(s.$$.fragment,i),o=!1},d(i){x(s,i)}}}function Rr(T,s,o){const i=[{code:200,body:`
                {
                  "page": 1,
                  "perPage": 20,
                  "totalItems": 2,
                  "items": [
                    {
                      "id": "9ajmzgd99r039k9",
                      "created": "2023-12-12 04:41:59.973Z",
                      "updated": "2023-12-12 04:41:59.973Z",
                      "data": {
                        "auth": "authRecord",
                        "execTime": 364.961387,
                        "method": "POST",
                        "referer": "http://localhost:8090/",
                        "remoteIp": "127.0.0.1",
                        "status": 200,
                        "type": "request",
                        "url": "/api/collections/users/auth-with-password",
                        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
                        "userIp": "127.0.0.1"
                      },
                      "message": "POST /api/collections/users/auth-with-password",
                      "level": 0
                    },
                    {
                      "id": "26apis4s3sm9yqm",
                      "created": "2023-12-12 04:27:21.583Z",
                      "updated": "2023-12-12 04:27:21.583Z",
                      "data": {
                        "auth": "authRecord",
                        "execTime": 403.664712,
                        "method": "POST",
                        "referer": "http://localhost:8090/",
                        "remoteIp": "127.0.0.1",
                        "status": 200,
                        "type": "request",
                        "url": "/api/collections/users/auth-with-password?expand=rel&fields=*%2Crecord.*%2Crecord.expand.rel.id",
                        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
                        "userIp": "127.0.0.1"
                      },
                      "message": "POST /api/collections/users/auth-with-password?expand=rel&fields=*%2Crecord.*%2Crecord.expand.rel.id",
                      "level": 0
                    }
                  ]
                }
            `},{code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `},{code:401,body:`
                {
                  "code": 401,
                  "message": "The request requires admin authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `}];let v=i[0].code;return[v,i,m=>o(0,v=m.code)]}class Cr extends Gl{constructor(s){super(),Hl(this,s,Rr,Ir,Ml,{})}}function Er(T,s,o){const i=T.slice();return i[3]=s[o],i}function gr(T,s,o){const i=T.slice();return i[3]=s[o],i}function br(T,s){let o,i=s[3].code+"",v,_,m,D;function O(){return s[2](s[3])}return{key:T,first:null,c(){o=l("button"),v=n(i),_=u(),this.h()},l(y){o=a(y,"BUTTON",{class:!0});var E=r(o);v=d(E,i),_=h(E),E.forEach(t),this.h()},h(){$(o,"class","tab-item"),vt(o,"active",s[0]===s[3].code),this.first=o},m(y,E){k(y,o,E),e(o,v),e(o,_),m||(D=ha(o,"click",O),m=!0)},p(y,E){s=y,E&3&&vt(o,"active",s[0]===s[3].code)},d(y){y&&t(o),m=!1,D()}}}function Tr(T,s){let o,i,v,_;return i=new bl({props:{content:s[3].body}}),{key:T,first:null,c(){o=l("div"),Q(i.$$.fragment),v=u(),this.h()},l(m){o=a(m,"DIV",{class:!0});var D=r(o);Z(i.$$.fragment,D),v=h(D),D.forEach(t),this.h()},h(){$(o,"class","tab-item"),vt(o,"active",s[0]===s[3].code),this.first=o},m(m,D){k(m,o,D),j(i,o,null),e(o,v),_=!0},p(m,D){s=m,(!_||D&3)&&vt(o,"active",s[0]===s[3].code)},i(m){_||(H(i.$$.fragment,m),_=!0)},o(m){M(i.$$.fragment,m),_=!1},d(m){m&&t(o),x(i)}}}function Ar(T){let s,o,i,v,_,m,D,O,y,E,W,_t,$t,z,Et,je,U,gt,X,bt,Ce,J,it,ce,L,we,I,fe,ue,xe,Ae,Tt,Ue,he,Dt,Ke,V,G,ee,pe,Xe,Ve,me,Je,We,ve,Y,_e,yt,ct,te,$e,S,le,et,ae,Oe,kt,tt,Ee,wt,qe,Ye,Ot,lt,re,ne,Fe,Be,at,ge,be,Ne,B=[],se=new Map,Le,Te,q=[],Ct=new Map,ft;O=new ma({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithEmail('test@example.com', '123456');

            const log = await pb.logs.getOne('LOG_ID');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithEmail('test@example.com', '123456');

            final log = await pb.logs.getOne('LOG_ID');
        `}}),ne=new va({});let Pe=T[1];const Se=c=>c[3].code;for(let c=0;c<Pe.length;c+=1){let g=gr(T,Pe,c),R=Se(g);se.set(R,B[c]=br(R,g))}let De=T[1];const rt=c=>c[3].code;for(let c=0;c<De.length;c+=1){let g=Er(T,De,c),R=rt(g);Ct.set(R,q[c]=Tr(R,g))}return{c(){s=l("div"),o=l("p"),i=n("Returns a single log by its ID."),v=u(),_=l("p"),m=n("Only admins can perform this action."),D=u(),Q(O.$$.fragment),y=u(),E=l("div"),W=l("strong"),_t=n("GET"),$t=u(),z=l("div"),Et=n("/api/logs/"),je=l("code"),U=n("id"),gt=u(),X=l("small"),bt=n("Requires "),Ce=l("code"),J=n("Authorization: TOKEN"),it=u(),ce=l("div"),L=n("Path parameters"),we=u(),I=l("table"),fe=l("thead"),ue=l("tr"),xe=l("th"),Ae=n("Param"),Tt=u(),Ue=l("th"),he=n("Type"),Dt=u(),Ke=l("th"),V=n("Description"),G=u(),ee=l("tbody"),pe=l("tr"),Xe=l("td"),Ve=n("id"),me=u(),Je=l("td"),We=l("span"),ve=n("String"),Y=u(),_e=l("td"),yt=n("ID of the log to view."),ct=u(),te=l("div"),$e=n("Query parameters"),S=u(),le=l("table"),et=l("thead"),ae=l("tr"),Oe=l("th"),kt=n("Param"),tt=u(),Ee=l("th"),wt=n("Type"),qe=u(),Ye=l("th"),Ot=n("Description"),lt=u(),re=l("tbody"),Q(ne.$$.fragment),Fe=u(),Be=l("div"),at=n("Responses"),ge=u(),be=l("div"),Ne=l("div");for(let c=0;c<B.length;c+=1)B[c].c();Le=u(),Te=l("div");for(let c=0;c<q.length;c+=1)q[c].c();this.h()},l(c){s=a(c,"DIV",{class:!0});var g=r(s);o=a(g,"P",{});var R=r(o);i=d(R,"Returns a single log by its ID."),R.forEach(t),v=h(g),_=a(g,"P",{});var Ie=r(_);m=d(Ie,"Only admins can perform this action."),Ie.forEach(t),g.forEach(t),D=h(c),Z(O.$$.fragment,c),y=h(c),E=a(c,"DIV",{class:!0});var de=r(E);W=a(de,"STRONG",{class:!0});var oe=r(W);_t=d(oe,"GET"),oe.forEach(t),$t=h(de),z=a(de,"DIV",{class:!0});var Qe=r(z);Et=d(Qe,"/api/logs/"),je=a(Qe,"CODE",{});var At=r(je);U=d(At,"id"),At.forEach(t),Qe.forEach(t),gt=h(de),X=a(de,"SMALL",{class:!0});var P=r(X);bt=d(P,"Requires "),Ce=a(P,"CODE",{});var N=r(Ce);J=d(N,"Authorization: TOKEN"),N.forEach(t),P.forEach(t),de.forEach(t),it=h(c),ce=a(c,"DIV",{class:!0});var Bt=r(ce);L=d(Bt,"Path parameters"),Bt.forEach(t),we=h(c),I=a(c,"TABLE",{class:!0});var st=r(I);fe=a(st,"THEAD",{});var Pt=r(fe);ue=a(Pt,"TR",{});var ot=r(ue);xe=a(ot,"TH",{});var Ze=r(xe);Ae=d(Ze,"Param"),Ze.forEach(t),Tt=h(ot),Ue=a(ot,"TH",{});var Nt=r(Ue);he=d(Nt,"Type"),Nt.forEach(t),Dt=h(ot),Ke=a(ot,"TH",{width:!0});var f=r(Ke);V=d(f,"Description"),f.forEach(t),ot.forEach(t),Pt.forEach(t),G=h(st),ee=a(st,"TBODY",{});var b=r(ee);pe=a(b,"TR",{});var C=r(pe);Xe=a(C,"TD",{});var Lt=r(Xe);Ve=d(Lt,"id"),Lt.forEach(t),me=h(C),Je=a(C,"TD",{});var Ge=r(Je);We=a(Ge,"SPAN",{class:!0});var Gt=r(We);ve=d(Gt,"String"),Gt.forEach(t),Ge.forEach(t),Y=h(C),_e=a(C,"TD",{});var Ht=r(_e);yt=d(Ht,"ID of the log to view."),Ht.forEach(t),C.forEach(t),b.forEach(t),st.forEach(t),ct=h(c),te=a(c,"DIV",{class:!0});var ut=r(te);$e=d(ut,"Query parameters"),ut.forEach(t),S=h(c),le=a(c,"TABLE",{class:!0});var St=r(le);et=a(St,"THEAD",{});var Mt=r(et);ae=a(Mt,"TR",{});var ye=r(ae);Oe=a(ye,"TH",{});var zt=r(Oe);kt=d(zt,"Param"),zt.forEach(t),tt=h(ye),Ee=a(ye,"TH",{});var nt=r(Ee);wt=d(nt,"Type"),nt.forEach(t),qe=h(ye),Ye=a(ye,"TH",{width:!0});var It=r(Ye);Ot=d(It,"Description"),It.forEach(t),ye.forEach(t),Mt.forEach(t),lt=h(St),re=a(St,"TBODY",{});var Kt=r(re);Z(ne.$$.fragment,Kt),Kt.forEach(t),St.forEach(t),Fe=h(c),Be=a(c,"DIV",{class:!0});var Wt=r(Be);at=d(Wt,"Responses"),Wt.forEach(t),ge=h(c),be=a(c,"DIV",{class:!0});var He=r(be);Ne=a(He,"DIV",{class:!0});var dt=r(Ne);for(let Re=0;Re<B.length;Re+=1)B[Re].l(dt);dt.forEach(t),Le=h(He),Te=a(He,"DIV",{class:!0});var Yt=r(Te);for(let Re=0;Re<q.length;Re+=1)q[Re].l(Yt);Yt.forEach(t),He.forEach(t),this.h()},h(){$(s,"class","content m-b-sm"),$(W,"class","label label-primary"),$(z,"class","content"),$(X,"class","txt-hint auth-header"),$(E,"class","api-route alert alert-info"),$(ce,"class","section-title"),$(Ke,"width","50%"),$(We,"class","label"),$(I,"class","table-compact table-border m-b-base"),$(te,"class","section-title"),$(Ye,"width","50%"),$(le,"class","table-compact table-border m-b-base"),$(Be,"class","section-title"),$(Ne,"class","tabs-header compact left"),$(Te,"class","tabs-content"),$(be,"class","tabs")},m(c,g){k(c,s,g),e(s,o),e(o,i),e(s,v),e(s,_),e(_,m),k(c,D,g),j(O,c,g),k(c,y,g),k(c,E,g),e(E,W),e(W,_t),e(E,$t),e(E,z),e(z,Et),e(z,je),e(je,U),e(E,gt),e(E,X),e(X,bt),e(X,Ce),e(Ce,J),k(c,it,g),k(c,ce,g),e(ce,L),k(c,we,g),k(c,I,g),e(I,fe),e(fe,ue),e(ue,xe),e(xe,Ae),e(ue,Tt),e(ue,Ue),e(Ue,he),e(ue,Dt),e(ue,Ke),e(Ke,V),e(I,G),e(I,ee),e(ee,pe),e(pe,Xe),e(Xe,Ve),e(pe,me),e(pe,Je),e(Je,We),e(We,ve),e(pe,Y),e(pe,_e),e(_e,yt),k(c,ct,g),k(c,te,g),e(te,$e),k(c,S,g),k(c,le,g),e(le,et),e(et,ae),e(ae,Oe),e(Oe,kt),e(ae,tt),e(ae,Ee),e(Ee,wt),e(ae,qe),e(ae,Ye),e(Ye,Ot),e(le,lt),e(le,re),j(ne,re,null),k(c,Fe,g),k(c,Be,g),e(Be,at),k(c,ge,g),k(c,be,g),e(be,Ne);for(let R=0;R<B.length;R+=1)B[R]&&B[R].m(Ne,null);e(be,Le),e(be,Te);for(let R=0;R<q.length;R+=1)q[R]&&q[R].m(Te,null);ft=!0},p(c,g){g&3&&(Pe=c[1],B=gl(B,g,Se,1,c,Pe,se,Ne,ia,br,null,gr)),g&3&&(De=c[1],ca(),q=gl(q,g,rt,1,c,De,Ct,Te,fa,Tr,null,Er),ua())},i(c){if(!ft){H(O.$$.fragment,c),H(ne.$$.fragment,c);for(let g=0;g<De.length;g+=1)H(q[g]);ft=!0}},o(c){M(O.$$.fragment,c),M(ne.$$.fragment,c);for(let g=0;g<q.length;g+=1)M(q[g]);ft=!1},d(c){c&&t(s),c&&t(D),x(O,c),c&&t(y),c&&t(E),c&&t(it),c&&t(ce),c&&t(we),c&&t(I),c&&t(ct),c&&t(te),c&&t(S),c&&t(le),x(ne),c&&t(Fe),c&&t(Be),c&&t(ge),c&&t(be);for(let g=0;g<B.length;g+=1)B[g].d();for(let g=0;g<q.length;g+=1)q[g].d()}}}function Vr(T){let s,o;return s=new pa({props:{single:!0,title:"View log",$$slots:{default:[Ar]},$$scope:{ctx:T}}}),{c(){Q(s.$$.fragment)},l(i){Z(s.$$.fragment,i)},m(i,v){j(s,i,v),o=!0},p(i,[v]){const _={};v&257&&(_.$$scope={dirty:v,ctx:i}),s.$set(_)},i(i){o||(H(s.$$.fragment,i),o=!0)},o(i){M(s.$$.fragment,i),o=!1},d(i){x(s,i)}}}function qr(T,s,o){const i=[{code:200,body:`
                {
                  "id": "twjnabervu5log8",
                  "created": "2023-12-10 19:56:29.556Z",
                  "updated": "2023-12-10 19:56:29.556Z",
                  "data": {
                    "auth": "guest",
                    "execTime": 0.66452,
                    "method": "GET",
                    "referer": "http://localhost:8090/",
                    "remoteIp": "127.0.0.1",
                    "status": 200,
                    "type": "request",
                    "url": "/api/collections/users/auth-methods",
                    "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
                    "userIp": "127.0.0.1"
                  },
                  "message": "GET /api/collections/users/auth-methods",
                  "level": 0
                }
            `},{code:401,body:`
                {
                  "code": 401,
                  "message": "The request requires admin authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}];let v=i[0].code;return[v,i,m=>o(0,v=m.code)]}class Br extends Gl{constructor(s){super(),Hl(this,s,qr,Vr,Ml,{})}}function Dr(T,s,o){const i=T.slice();return i[3]=s[o],i}function yr(T,s,o){const i=T.slice();return i[3]=s[o],i}function kr(T,s){let o,i=s[3].code+"",v,_,m,D;function O(){return s[2](s[3])}return{key:T,first:null,c(){o=l("button"),v=n(i),_=u(),this.h()},l(y){o=a(y,"BUTTON",{class:!0});var E=r(o);v=d(E,i),_=h(E),E.forEach(t),this.h()},h(){$(o,"class","tab-item"),vt(o,"active",s[0]===s[3].code),this.first=o},m(y,E){k(y,o,E),e(o,v),e(o,_),m||(D=ha(o,"click",O),m=!0)},p(y,E){s=y,E&3&&vt(o,"active",s[0]===s[3].code)},d(y){y&&t(o),m=!1,D()}}}function wr(T,s){let o,i,v,_;return i=new bl({props:{content:s[3].body}}),{key:T,first:null,c(){o=l("div"),Q(i.$$.fragment),v=u(),this.h()},l(m){o=a(m,"DIV",{class:!0});var D=r(o);Z(i.$$.fragment,D),v=h(D),D.forEach(t),this.h()},h(){$(o,"class","tab-item"),vt(o,"active",s[0]===s[3].code),this.first=o},m(m,D){k(m,o,D),j(i,o,null),e(o,v),_=!0},p(m,D){s=m,(!_||D&3)&&vt(o,"active",s[0]===s[3].code)},i(m){_||(H(i.$$.fragment,m),_=!0)},o(m){M(i.$$.fragment,m),_=!1},d(m){m&&t(o),x(i)}}}function Nr(T){let s,o,i,v,_,m,D,O,y,E,W,_t,$t,z,Et,je,U,gt,X,bt,Ce,J,it,ce,L,we,I,fe,ue,xe,Ae,Tt,Ue,he,Dt,Ke,V,G,ee,pe,Xe,Ve,me,Je,We,ve,Y,_e,yt,ct,te,$e,S,le,et,ae,Oe,kt,tt,Ee,wt,qe,Ye,Ot,lt,re,ne,Fe,Be,at,ge,be,Ne,B,se,Le,Te,q,Ct,ft,Pe,Se,De,rt,c,g,R,Ie,de,oe=[],Qe=new Map,At,P,N=[],Bt=new Map,st;O=new ma({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            const stats = await pb.logs.getStats({
                filter: 'data.status >= 400'
            });
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            final stats = await pb.logs.getStats(
                filter: 'data.status >= 400'
            );
        `}}),te=new bl({props:{content:`
                                ?filter=(data.url~'test.com' && level>0)
                            `}}),Pe=new Or({}),De=new va({});let Pt=T[1];const ot=f=>f[3].code;for(let f=0;f<Pt.length;f+=1){let b=yr(T,Pt,f),C=ot(b);Qe.set(C,oe[f]=kr(C,b))}let Ze=T[1];const Nt=f=>f[3].code;for(let f=0;f<Ze.length;f+=1){let b=Dr(T,Ze,f),C=Nt(b);Bt.set(C,N[f]=wr(C,b))}return{c(){s=l("div"),o=l("p"),i=n("Returns hourly aggregated logs statistics."),v=u(),_=l("p"),m=n("Only admins can perform this action."),D=u(),Q(O.$$.fragment),y=u(),E=l("div"),W=l("strong"),_t=n("GET"),$t=u(),z=l("div"),Et=n("/api/logs/stats"),je=u(),U=l("small"),gt=n("Requires "),X=l("code"),bt=n("Authorization: TOKEN"),Ce=u(),J=l("div"),it=n("Query parameters"),ce=u(),L=l("table"),we=l("thead"),I=l("tr"),fe=l("th"),ue=n("Param"),xe=u(),Ae=l("th"),Tt=n("Type"),Ue=u(),he=l("th"),Dt=n("Description"),Ke=u(),V=l("tbody"),G=l("tr"),ee=l("td"),pe=n("filter"),Xe=u(),Ve=l("td"),me=l("span"),Je=n("String"),We=u(),ve=l("td"),Y=l("div"),_e=l("p"),yt=n("Filter expression to filter/search the logs, eg.:"),ct=u(),Q(te.$$.fragment),$e=u(),S=l("p"),le=l("strong"),et=n("Supported log filter fields:"),ae=u(),Oe=l("br"),kt=u(),tt=l("code"),Ee=n("rowid"),wt=n(", "),qe=l("code"),Ye=n("id"),Ot=n(", "),lt=l("code"),re=n("created"),ne=n(`,
                            `),Fe=l("code"),Be=n("updated"),at=n(", "),ge=l("code"),be=n("level"),Ne=n(", "),B=l("code"),se=n("message"),Le=n(` and any
                            `),Te=l("code"),q=n("data.*"),Ct=n(" attribute."),ft=u(),Q(Pe.$$.fragment),Se=u(),Q(De.$$.fragment),rt=u(),c=l("div"),g=n("Responses"),R=u(),Ie=l("div"),de=l("div");for(let f=0;f<oe.length;f+=1)oe[f].c();At=u(),P=l("div");for(let f=0;f<N.length;f+=1)N[f].c();this.h()},l(f){s=a(f,"DIV",{class:!0});var b=r(s);o=a(b,"P",{});var C=r(o);i=d(C,"Returns hourly aggregated logs statistics."),C.forEach(t),v=h(b),_=a(b,"P",{});var Lt=r(_);m=d(Lt,"Only admins can perform this action."),Lt.forEach(t),b.forEach(t),D=h(f),Z(O.$$.fragment,f),y=h(f),E=a(f,"DIV",{class:!0});var Ge=r(E);W=a(Ge,"STRONG",{class:!0});var Gt=r(W);_t=d(Gt,"GET"),Gt.forEach(t),$t=h(Ge),z=a(Ge,"DIV",{class:!0});var Ht=r(z);Et=d(Ht,"/api/logs/stats"),Ht.forEach(t),je=h(Ge),U=a(Ge,"SMALL",{class:!0});var ut=r(U);gt=d(ut,"Requires "),X=a(ut,"CODE",{});var St=r(X);bt=d(St,"Authorization: TOKEN"),St.forEach(t),ut.forEach(t),Ge.forEach(t),Ce=h(f),J=a(f,"DIV",{class:!0});var Mt=r(J);it=d(Mt,"Query parameters"),Mt.forEach(t),ce=h(f),L=a(f,"TABLE",{class:!0});var ye=r(L);we=a(ye,"THEAD",{});var zt=r(we);I=a(zt,"TR",{});var nt=r(I);fe=a(nt,"TH",{});var It=r(fe);ue=d(It,"Param"),It.forEach(t),xe=h(nt),Ae=a(nt,"TH",{});var Kt=r(Ae);Tt=d(Kt,"Type"),Kt.forEach(t),Ue=h(nt),he=a(nt,"TH",{width:!0});var Wt=r(he);Dt=d(Wt,"Description"),Wt.forEach(t),nt.forEach(t),zt.forEach(t),Ke=h(ye),V=a(ye,"TBODY",{});var He=r(V);G=a(He,"TR",{});var dt=r(G);ee=a(dt,"TD",{id:!0});var Yt=r(ee);pe=d(Yt,"filter"),Yt.forEach(t),Xe=h(dt),Ve=a(dt,"TD",{});var Re=r(Ve);me=a(Re,"SPAN",{class:!0});var ol=r(me);Je=d(ol,"String"),ol.forEach(t),Re.forEach(t),We=h(dt),ve=a(dt,"TD",{});var nl=r(ve);Y=a(nl,"DIV",{class:!0});var ht=r(Y);_e=a(ht,"P",{});var pt=r(_e);yt=d(pt,"Filter expression to filter/search the logs, eg.:"),pt.forEach(t),ct=h(ht),Z(te.$$.fragment,ht),$e=h(ht),S=a(ht,"P",{});var A=r(S);le=a(A,"STRONG",{});var dl=r(le);et=d(dl,"Supported log filter fields:"),dl.forEach(t),ae=h(A),Oe=a(A,"BR",{}),kt=h(A),tt=a(A,"CODE",{});var il=r(tt);Ee=d(il,"rowid"),il.forEach(t),wt=d(A,", "),qe=a(A,"CODE",{});var Zt=r(qe);Ye=d(Zt,"id"),Zt.forEach(t),Ot=d(A,", "),lt=a(A,"CODE",{});var Ft=r(lt);re=d(Ft,"created"),Ft.forEach(t),ne=d(A,`,
                            `),Fe=a(A,"CODE",{});var cl=r(Fe);Be=d(cl,"updated"),cl.forEach(t),at=d(A,", "),ge=a(A,"CODE",{});var fl=r(ge);be=d(fl,"level"),fl.forEach(t),Ne=d(A,", "),B=a(A,"CODE",{});var jt=r(B);se=d(jt,"message"),jt.forEach(t),Le=d(A,` and any
                            `),Te=a(A,"CODE",{});var Me=r(Te);q=d(Me,"data.*"),Me.forEach(t),Ct=d(A," attribute."),A.forEach(t),ft=h(ht),Z(Pe.$$.fragment,ht),ht.forEach(t),nl.forEach(t),dt.forEach(t),Se=h(He),Z(De.$$.fragment,He),He.forEach(t),ye.forEach(t),rt=h(f),c=a(f,"DIV",{class:!0});var xt=r(c);g=d(xt,"Responses"),xt.forEach(t),R=h(f),Ie=a(f,"DIV",{class:!0});var Ut=r(Ie);de=a(Ut,"DIV",{class:!0});var ul=r(de);for(let Rt=0;Rt<oe.length;Rt+=1)oe[Rt].l(ul);ul.forEach(t),At=h(Ut),P=a(Ut,"DIV",{class:!0});var Vt=r(P);for(let Rt=0;Rt<N.length;Rt+=1)N[Rt].l(Vt);Vt.forEach(t),Ut.forEach(t),this.h()},h(){$(s,"class","content m-b-sm"),$(W,"class","label label-primary"),$(z,"class","content"),$(U,"class","txt-hint auth-header"),$(E,"class","api-route alert alert-info"),$(J,"class","section-title"),$(he,"width","50%"),$(ee,"id","query-filter"),$(me,"class","label"),$(Y,"class","content"),$(L,"class","table-compact table-border m-b-base"),$(c,"class","section-title"),$(de,"class","tabs-header compact left"),$(P,"class","tabs-content"),$(Ie,"class","tabs")},m(f,b){k(f,s,b),e(s,o),e(o,i),e(s,v),e(s,_),e(_,m),k(f,D,b),j(O,f,b),k(f,y,b),k(f,E,b),e(E,W),e(W,_t),e(E,$t),e(E,z),e(z,Et),e(E,je),e(E,U),e(U,gt),e(U,X),e(X,bt),k(f,Ce,b),k(f,J,b),e(J,it),k(f,ce,b),k(f,L,b),e(L,we),e(we,I),e(I,fe),e(fe,ue),e(I,xe),e(I,Ae),e(Ae,Tt),e(I,Ue),e(I,he),e(he,Dt),e(L,Ke),e(L,V),e(V,G),e(G,ee),e(ee,pe),e(G,Xe),e(G,Ve),e(Ve,me),e(me,Je),e(G,We),e(G,ve),e(ve,Y),e(Y,_e),e(_e,yt),e(Y,ct),j(te,Y,null),e(Y,$e),e(Y,S),e(S,le),e(le,et),e(S,ae),e(S,Oe),e(S,kt),e(S,tt),e(tt,Ee),e(S,wt),e(S,qe),e(qe,Ye),e(S,Ot),e(S,lt),e(lt,re),e(S,ne),e(S,Fe),e(Fe,Be),e(S,at),e(S,ge),e(ge,be),e(S,Ne),e(S,B),e(B,se),e(S,Le),e(S,Te),e(Te,q),e(S,Ct),e(Y,ft),j(Pe,Y,null),e(V,Se),j(De,V,null),k(f,rt,b),k(f,c,b),e(c,g),k(f,R,b),k(f,Ie,b),e(Ie,de);for(let C=0;C<oe.length;C+=1)oe[C]&&oe[C].m(de,null);e(Ie,At),e(Ie,P);for(let C=0;C<N.length;C+=1)N[C]&&N[C].m(P,null);st=!0},p(f,b){b&3&&(Pt=f[1],oe=gl(oe,b,ot,1,f,Pt,Qe,de,ia,kr,null,yr)),b&3&&(Ze=f[1],ca(),N=gl(N,b,Nt,1,f,Ze,Bt,P,fa,wr,null,Dr),ua())},i(f){if(!st){H(O.$$.fragment,f),H(te.$$.fragment,f),H(Pe.$$.fragment,f),H(De.$$.fragment,f);for(let b=0;b<Ze.length;b+=1)H(N[b]);st=!0}},o(f){M(O.$$.fragment,f),M(te.$$.fragment,f),M(Pe.$$.fragment,f),M(De.$$.fragment,f);for(let b=0;b<N.length;b+=1)M(N[b]);st=!1},d(f){f&&t(s),f&&t(D),x(O,f),f&&t(y),f&&t(E),f&&t(Ce),f&&t(J),f&&t(ce),f&&t(L),x(te),x(Pe),x(De),f&&t(rt),f&&t(c),f&&t(R),f&&t(Ie);for(let b=0;b<oe.length;b+=1)oe[b].d();for(let b=0;b<N.length;b+=1)N[b].d()}}}function Lr(T){let s,o;return s=new pa({props:{single:!0,title:"Logs statistics",$$slots:{default:[Nr]},$$scope:{ctx:T}}}),{c(){Q(s.$$.fragment)},l(i){Z(s.$$.fragment,i)},m(i,v){j(s,i,v),o=!0},p(i,[v]){const _={};v&257&&(_.$$scope={dirty:v,ctx:i}),s.$set(_)},i(i){o||(H(s.$$.fragment,i),o=!0)},o(i){M(s.$$.fragment,i),o=!1},d(i){x(s,i)}}}function Gr(T,s,o){const i=[{code:200,body:`
                [
                  {
                    "total": 4,
                    "date": "2022-06-01 19:00:00.000"
                  },
                  {
                    "total": 1,
                    "date": "2022-06-02 12:00:00.000"
                  },
                  {
                    "total": 8,
                    "date": "2022-06-02 13:00:00.000"
                  }
                ]
            `},{code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `},{code:401,body:`
                {
                  "code": 401,
                  "message": "The request requires admin authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `}];let v=i[0].code;return[v,i,m=>o(0,v=m.code)]}class Hr extends Gl{constructor(s){super(),Hl(this,s,Gr,Lr,Ml,{})}}function Mr(T){let s,o,i,v,_,m,D;return o=new Cr({}),v=new Br({}),m=new Hr({}),{c(){s=l("div"),Q(o.$$.fragment),i=u(),Q(v.$$.fragment),_=u(),Q(m.$$.fragment),this.h()},l(O){s=a(O,"DIV",{class:!0});var y=r(s);Z(o.$$.fragment,y),i=h(y),Z(v.$$.fragment,y),_=h(y),Z(m.$$.fragment,y),y.forEach(t),this.h()},h(){$(s,"class","accordions")},m(O,y){k(O,s,y),j(o,s,null),e(s,i),j(v,s,null),e(s,_),j(m,s,null),D=!0},p:Pr,i(O){D||(H(o.$$.fragment,O),H(v.$$.fragment,O),H(m.$$.fragment,O),D=!0)},o(O){M(o.$$.fragment,O),M(v.$$.fragment,O),M(m.$$.fragment,O),D=!1},d(O){O&&t(s),x(o),x(v),x(m)}}}class Zr extends Gl{constructor(s){super(),Hl(this,s,null,Mr,Ml,{})}}export{Zr as component};
