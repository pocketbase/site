import{S as Iu,i as qu,s as Cu,y as Oe,z as ke,A as Ne,g as oe,d as ne,B as xe,k as l,q as r,a as n,l as a,m as s,r as o,h as t,c,n as d,b as g,G as e,N as Jr,R as ju,v as Uu,O as zu,f as Yu,K as At,L as Qu,H as U1}from"../chunks/index.a7566c1a.js";import{A as Ku}from"../chunks/Accordion.71344b00.js";import{C as Ki}from"../chunks/CodeBlock.a090ee9b.js";import{C as Zu}from"../chunks/CodeTabs.3c6448ff.js";import{F as z1}from"../chunks/FilterSyntax.3a84ec87.js";import{F as b1}from"../chunks/FieldsQueryParam.61e1061c.js";import{S as Y1}from"../chunks/SkipTotalQueryParam.f93bb961.js";function w1(w,i,f){const h=w.slice();return h[3]=i[f],h}function D1(w,i,f){const h=w.slice();return h[3]=i[f],h}function $1(w,i){let f,h=i[3].code+"",v,m,p,$;function x(){return i[2](i[3])}return{key:w,first:null,c(){f=l("button"),v=r(h),m=n(),this.h()},l(A){f=a(A,"BUTTON",{class:!0});var _=s(f);v=o(_,h),m=c(_),_.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(A,_){g(A,f,_),e(f,v),e(f,m),p||($=Qu(f,"click",x),p=!0)},p(A,_){i=A,_&3&&At(f,"active",i[0]===i[3].code)},d(A){A&&t(f),p=!1,$()}}}function y1(w,i){let f,h,v,m;return h=new Ki({props:{content:i[3].body}}),{key:w,first:null,c(){f=l("div"),Oe(h.$$.fragment),v=n(),this.h()},l(p){f=a(p,"DIV",{class:!0});var $=s(f);ke(h.$$.fragment,$),v=c($),$.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(p,$){g(p,f,$),Ne(h,f,null),e(f,v),m=!0},p(p,$){i=p,(!m||$&3)&&At(f,"active",i[0]===i[3].code)},i(p){m||(oe(h.$$.fragment,p),m=!0)},o(p){ne(h.$$.fragment,p),m=!1},d(p){p&&t(f),xe(h)}}}function Q1(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce,I,le,We,pe,St,J,ct,Ie,be,pt,ae,X,Me,C,ee,j,ie,Ge,Rt,je,qe,Ot,De,P,fe,ve,B,se,dt,Ce,me,$e,it,et,_e,kt,tt,U,Le,Ue,Y,ge,G,ze,he,Ve,V,lt,vt,He,at,bt,S,b,R,H,ft,Q,st,ye,te,Te,ue,Pe,re,Nt,Ae,xt,rt,K,ot,E,k,M,It,Fe,Yt,Ye,Qe,z,Ke,mt,Se,ht,gt,el,Ht,Re,Tt,wt,_t,Ft,tl,Cl,T,N,Z,nt,ll,Qt,Wt,ul,Ze,Dt,al,pl,Ee,qt,ut,Zl,Jl,Kt,yt,La,sl,Je,Xl,wl,Ha,Dl,rl,de,$l,ea,Gt,Fa,yl,jt,Wa,ta,Pt,Pl,Al,la,Ga,Sl,ol,ja,Ct,Ts,Xr,eo,Vt,ws,Rl,Ol,to,Sa,nl,Vl,Bl,cl,Ua,tr,dl,vl,il=[],za=new Map,Ya,Ra,Bt=[],fl=new Map,Qa;x=new Zu({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // fetch a paginated collections list
            const pageResult = await pb.collections.getList(1, 100, {
                filter: 'created >= "2022-01-01 00:00:00"',
            });

            // you can also fetch all collections at once via getFullList
            const collections = await pb.collections.getFullList({ sort: '-created' });

            // or fetch only the first collection that matches the specified filter
            const collection = await pb.collections.getFirstListItem('type="auth"');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // fetch a paginated collections list
            final pageResult = await pb.collections.getList(
                page: 1,
                perPage: 100,
                filter: 'created >= "2022-01-01 00:00:00"',
            );

            // you can also fetch all collections at once via getFullList
            final collections = await pb.collections.getFullList(sort: '-created');

            // or fetch only the first collection that matches the specified filter
            final collection = await pb.collections.getFirstListItem('type="auth"');
        `}}),Ye=new Ki({props:{content:`
                                // DESC by created and ASC by id
                                ?sort=-created,id
                            `}}),Dl=new Ki({props:{content:`
                                ?filter=(name~'abc' && created>'2022-01-01')
                            `}}),Ol=new z1({}),Sa=new b1({}),Vl=new Y1({});let ml=w[1];const Ds=D=>D[3].code;for(let D=0;D<ml.length;D+=1){let q=D1(w,ml,D),Be=Ds(q);za.set(Be,il[D]=$1(Be,q))}let $s=w[1];const Vo=D=>D[3].code;for(let D=0;D<$s.length;D+=1){let q=w1(w,$s,D),Be=Vo(q);fl.set(Be,Bt[D]=y1(Be,q))}return{c(){i=l("div"),f=l("p"),h=r("Returns a paginated Collections list."),v=n(),m=l("p"),p=r("Only admins can perform this action."),$=n(),Oe(x.$$.fragment),A=n(),_=l("div"),W=l("strong"),we=r("GET"),ce=n(),I=l("div"),le=r("/api/collections"),We=n(),pe=l("small"),St=r("Requires "),J=l("code"),ct=r("Authorization: TOKEN"),Ie=n(),be=l("div"),pt=r("Query parameters"),ae=n(),X=l("table"),Me=l("thead"),C=l("tr"),ee=l("th"),j=r("Param"),ie=n(),Ge=l("th"),Rt=r("Type"),je=n(),qe=l("th"),Ot=r("Description"),De=n(),P=l("tbody"),fe=l("tr"),ve=l("td"),B=r("page"),se=n(),dt=l("td"),Ce=l("span"),me=r("Number"),$e=n(),it=l("td"),et=r("The page (aka. offset) of the paginated list ("),_e=l("em"),kt=r("default to 1"),tt=r(")."),U=n(),Le=l("tr"),Ue=l("td"),Y=r("perPage"),ge=n(),G=l("td"),ze=l("span"),he=r("Number"),Ve=n(),V=l("td"),lt=r("The max returned collections per page ("),vt=l("em"),He=r("default to 30"),at=r(")."),bt=n(),S=l("tr"),b=l("td"),R=r("sort"),H=n(),ft=l("td"),Q=l("span"),st=r("String"),ye=n(),te=l("td"),Te=l("div"),ue=l("p"),Pe=r("Specify the "),re=l("em"),Nt=r("ORDER BY"),Ae=r(" fields."),xt=n(),rt=l("p"),K=r("Add "),ot=l("code"),E=r("-"),k=r(" / "),M=l("code"),It=r("+"),Fe=r(` (default) in front of the attribute for DESC /
                            ASC order, eg.:`),Yt=n(),Oe(Ye.$$.fragment),Qe=n(),z=l("p"),Ke=l("strong"),mt=r("Supported collection sort fields:"),Se=n(),ht=l("br"),gt=n(),el=l("code"),Ht=r("@random"),Re=r(", "),Tt=l("code"),wt=r("id"),_t=r(", "),Ft=l("code"),tl=r("created"),Cl=r(`,
                            `),T=l("code"),N=r("updated"),Z=r(", "),nt=l("code"),ll=r("name"),Qt=r(", "),Wt=l("code"),ul=r("type"),Ze=r(`,
                            `),Dt=l("code"),al=r("system"),pl=n(),Ee=l("tr"),qt=l("td"),ut=r("filter"),Zl=n(),Jl=l("td"),Kt=l("span"),yt=r("String"),La=n(),sl=l("td"),Je=l("div"),Xl=l("p"),wl=r("Filter expression to filter/search the returned collections list, eg.:"),Ha=n(),Oe(Dl.$$.fragment),rl=n(),de=l("p"),$l=l("strong"),ea=r("Supported collection filter fields:"),Gt=n(),Fa=l("br"),yl=n(),jt=l("code"),Wa=r("id"),ta=r(", "),Pt=l("code"),Pl=r("created"),Al=r(", "),la=l("code"),Ga=r("updated"),Sl=r(`,
                            `),ol=l("code"),ja=r("name"),Ct=r(", "),Ts=l("code"),Xr=r("type"),eo=r(", "),Vt=l("code"),ws=r("system"),Rl=n(),Oe(Ol.$$.fragment),to=n(),Oe(Sa.$$.fragment),nl=n(),Oe(Vl.$$.fragment),Bl=n(),cl=l("div"),Ua=r("Responses"),tr=n(),dl=l("div"),vl=l("div");for(let D=0;D<il.length;D+=1)il[D].c();Ya=n(),Ra=l("div");for(let D=0;D<Bt.length;D+=1)Bt[D].c();this.h()},l(D){i=a(D,"DIV",{class:!0});var q=s(i);f=a(q,"P",{});var Be=s(f);h=o(Be,"Returns a paginated Collections list."),Be.forEach(t),v=c(q),m=a(q,"P",{});var Oa=s(m);p=o(Oa,"Only admins can perform this action."),Oa.forEach(t),q.forEach(t),$=c(D),ke(x.$$.fragment,D),A=c(D),_=a(D,"DIV",{class:!0});var Ml=s(_);W=a(Ml,"STRONG",{class:!0});var fc=s(W);we=o(fc,"GET"),fc.forEach(t),ce=c(Ml),I=a(Ml,"DIV",{class:!0});var ys=s(I);le=o(ys,"/api/collections"),ys.forEach(t),We=c(Ml),pe=a(Ml,"SMALL",{class:!0});var lo=s(pe);St=o(lo,"Requires "),J=a(lo,"CODE",{});var Ll=s(J);ct=o(Ll,"Authorization: TOKEN"),Ll.forEach(t),lo.forEach(t),Ml.forEach(t),Ie=c(D),be=a(D,"DIV",{class:!0});var lr=s(be);pt=o(lr,"Query parameters"),lr.forEach(t),ae=c(D),X=a(D,"TABLE",{class:!0});var Hl=s(X);Me=a(Hl,"THEAD",{});var hc=s(Me);C=a(hc,"TR",{});var Ka=s(C);ee=a(Ka,"TH",{});var Bo=s(ee);j=o(Bo,"Param"),Bo.forEach(t),ie=c(Ka),Ge=a(Ka,"TH",{});var Fl=s(Ge);Rt=o(Fl,"Type"),Fl.forEach(t),je=c(Ka),qe=a(Ka,"TH",{width:!0});var ka=s(qe);Ot=o(ka,"Description"),ka.forEach(t),Ka.forEach(t),hc.forEach(t),De=c(Hl),P=a(Hl,"TBODY",{});var Ut=s(P);fe=a(Ut,"TR",{});var Wl=s(fe);ve=a(Wl,"TD",{id:!0});var Mo=s(ve);B=o(Mo,"page"),Mo.forEach(t),se=c(Wl),dt=a(Wl,"TD",{});var Lo=s(dt);Ce=a(Lo,"SPAN",{class:!0});var Ho=s(Ce);me=o(Ho,"Number"),Ho.forEach(t),Lo.forEach(t),$e=c(Wl),it=a(Wl,"TD",{});var Mt=s(it);et=o(Mt,"The page (aka. offset) of the paginated list ("),_e=a(Mt,"EM",{});var ar=s(_e);kt=o(ar,"default to 1"),ar.forEach(t),tt=o(Mt,")."),Mt.forEach(t),Wl.forEach(t),U=c(Ut),Le=a(Ut,"TR",{});var zt=s(Le);Ue=a(zt,"TD",{id:!0});var Ps=s(Ue);Y=o(Ps,"perPage"),Ps.forEach(t),ge=c(zt),G=a(zt,"TD",{});var Fo=s(G);ze=a(Fo,"SPAN",{class:!0});var Wo=s(ze);he=o(Wo,"Number"),Wo.forEach(t),Fo.forEach(t),Ve=c(zt),V=a(zt,"TD",{});var Zt=s(V);lt=o(Zt,"The max returned collections per page ("),vt=a(Zt,"EM",{});var sr=s(vt);He=o(sr,"default to 30"),sr.forEach(t),at=o(Zt,")."),Zt.forEach(t),zt.forEach(t),bt=c(Ut),S=a(Ut,"TR",{});var _l=s(S);b=a(_l,"TD",{id:!0});var Na=s(b);R=o(Na,"sort"),Na.forEach(t),H=c(_l),ft=a(_l,"TD",{});var As=s(ft);Q=a(As,"SPAN",{class:!0});var uc=s(Q);st=o(uc,"String"),uc.forEach(t),As.forEach(t),ye=c(_l),te=a(_l,"TD",{});var Ss=s(te);Te=a(Ss,"DIV",{class:!0});var aa=s(Te);ue=a(aa,"P",{});var El=s(ue);Pe=o(El,"Specify the "),re=a(El,"EM",{});var rr=s(re);Nt=o(rr,"ORDER BY"),rr.forEach(t),Ae=o(El," fields."),El.forEach(t),xt=c(aa),rt=a(aa,"P",{});var bl=s(rt);K=o(bl,"Add "),ot=a(bl,"CODE",{});var pc=s(ot);E=o(pc,"-"),pc.forEach(t),k=o(bl," / "),M=a(bl,"CODE",{});var Go=s(M);It=o(Go,"+"),Go.forEach(t),Fe=o(bl,` (default) in front of the attribute for DESC /
                            ASC order, eg.:`),bl.forEach(t),Yt=c(aa),ke(Ye.$$.fragment,aa),Qe=c(aa),z=a(aa,"P",{});var Et=s(z);Ke=a(Et,"STRONG",{});var Gl=s(Ke);mt=o(Gl,"Supported collection sort fields:"),Gl.forEach(t),Se=c(Et),ht=a(Et,"BR",{}),gt=c(Et),el=a(Et,"CODE",{});var xa=s(el);Ht=o(xa,"@random"),xa.forEach(t),Re=o(Et,", "),Tt=a(Et,"CODE",{});var or=s(Tt);wt=o(or,"id"),or.forEach(t),_t=o(Et,", "),Ft=a(Et,"CODE",{});var Rs=s(Ft);tl=o(Rs,"created"),Rs.forEach(t),Cl=o(Et,`,
                            `),T=a(Et,"CODE",{});var jo=s(T);N=o(jo,"updated"),jo.forEach(t),Z=o(Et,", "),nt=a(Et,"CODE",{});var Uo=s(nt);ll=o(Uo,"name"),Uo.forEach(t),Qt=o(Et,", "),Wt=a(Et,"CODE",{});var zo=s(Wt);ul=o(zo,"type"),zo.forEach(t),Ze=o(Et,`,
                            `),Dt=a(Et,"CODE",{});var Jt=s(Dt);al=o(Jt,"system"),Jt.forEach(t),Et.forEach(t),aa.forEach(t),Ss.forEach(t),_l.forEach(t),pl=c(Ut),Ee=a(Ut,"TR",{});var sa=s(Ee);qt=a(sa,"TD",{id:!0});var kl=s(qt);ut=o(kl,"filter"),kl.forEach(t),Zl=c(sa),Jl=a(sa,"TD",{});var Os=s(Jl);Kt=a(Os,"SPAN",{class:!0});var Yo=s(Kt);yt=o(Yo,"String"),Yo.forEach(t),Os.forEach(t),La=c(sa),sl=a(sa,"TD",{});var Qo=s(sl);Je=a(Qo,"DIV",{class:!0});var $t=s(Je);Xl=a($t,"P",{});var nr=s(Xl);wl=o(nr,"Filter expression to filter/search the returned collections list, eg.:"),nr.forEach(t),Ha=c($t),ke(Dl.$$.fragment,$t),rl=c($t),de=a($t,"P",{});var Xe=s(de);$l=a(Xe,"STRONG",{});var Ia=s($l);ea=o(Ia,"Supported collection filter fields:"),Ia.forEach(t),Gt=c(Xe),Fa=a(Xe,"BR",{}),yl=c(Xe),jt=a(Xe,"CODE",{});var ks=s(jt);Wa=o(ks,"id"),ks.forEach(t),ta=o(Xe,", "),Pt=a(Xe,"CODE",{});var vc=s(Pt);Pl=o(vc,"created"),vc.forEach(t),Al=o(Xe,", "),la=a(Xe,"CODE",{});var Ns=s(la);Ga=o(Ns,"updated"),Ns.forEach(t),Sl=o(Xe,`,
                            `),ol=a(Xe,"CODE",{});var Ko=s(ol);ja=o(Ko,"name"),Ko.forEach(t),Ct=o(Xe,", "),Ts=a(Xe,"CODE",{});var Za=s(Ts);Xr=o(Za,"type"),Za.forEach(t),eo=o(Xe,", "),Vt=a(Xe,"CODE",{});var gl=s(Vt);ws=o(gl,"system"),gl.forEach(t),Xe.forEach(t),Rl=c($t),ke(Ol.$$.fragment,$t),$t.forEach(t),Qo.forEach(t),sa.forEach(t),to=c(Ut),ke(Sa.$$.fragment,Ut),nl=c(Ut),ke(Vl.$$.fragment,Ut),Ut.forEach(t),Hl.forEach(t),Bl=c(D),cl=a(D,"DIV",{class:!0});var xs=s(cl);Ua=o(xs,"Responses"),xs.forEach(t),tr=c(D),dl=a(D,"DIV",{class:!0});var Is=s(dl);vl=a(Is,"DIV",{class:!0});var Zo=s(vl);for(let Tl=0;Tl<il.length;Tl+=1)il[Tl].l(Zo);Zo.forEach(t),Ya=c(Is),Ra=a(Is,"DIV",{class:!0});var Jo=s(Ra);for(let Tl=0;Tl<Bt.length;Tl+=1)Bt[Tl].l(Jo);Jo.forEach(t),Is.forEach(t),this.h()},h(){d(i,"class","content m-b-sm"),d(W,"class","label label-primary"),d(I,"class","content"),d(pe,"class","txt-hint auth-header"),d(_,"class","api-route alert alert-info"),d(be,"class","section-title"),d(qe,"width","50%"),d(ve,"id","query-page"),d(Ce,"class","label"),d(Ue,"id","query-perPage"),d(ze,"class","label"),d(b,"id","query-sort"),d(Q,"class","label"),d(Te,"class","content"),d(qt,"id","query-filter"),d(Kt,"class","label"),d(Je,"class","content"),d(X,"class","table-compact table-border m-b-base"),d(cl,"class","section-title"),d(vl,"class","tabs-header compact left"),d(Ra,"class","tabs-content"),d(dl,"class","tabs")},m(D,q){g(D,i,q),e(i,f),e(f,h),e(i,v),e(i,m),e(m,p),g(D,$,q),Ne(x,D,q),g(D,A,q),g(D,_,q),e(_,W),e(W,we),e(_,ce),e(_,I),e(I,le),e(_,We),e(_,pe),e(pe,St),e(pe,J),e(J,ct),g(D,Ie,q),g(D,be,q),e(be,pt),g(D,ae,q),g(D,X,q),e(X,Me),e(Me,C),e(C,ee),e(ee,j),e(C,ie),e(C,Ge),e(Ge,Rt),e(C,je),e(C,qe),e(qe,Ot),e(X,De),e(X,P),e(P,fe),e(fe,ve),e(ve,B),e(fe,se),e(fe,dt),e(dt,Ce),e(Ce,me),e(fe,$e),e(fe,it),e(it,et),e(it,_e),e(_e,kt),e(it,tt),e(P,U),e(P,Le),e(Le,Ue),e(Ue,Y),e(Le,ge),e(Le,G),e(G,ze),e(ze,he),e(Le,Ve),e(Le,V),e(V,lt),e(V,vt),e(vt,He),e(V,at),e(P,bt),e(P,S),e(S,b),e(b,R),e(S,H),e(S,ft),e(ft,Q),e(Q,st),e(S,ye),e(S,te),e(te,Te),e(Te,ue),e(ue,Pe),e(ue,re),e(re,Nt),e(ue,Ae),e(Te,xt),e(Te,rt),e(rt,K),e(rt,ot),e(ot,E),e(rt,k),e(rt,M),e(M,It),e(rt,Fe),e(Te,Yt),Ne(Ye,Te,null),e(Te,Qe),e(Te,z),e(z,Ke),e(Ke,mt),e(z,Se),e(z,ht),e(z,gt),e(z,el),e(el,Ht),e(z,Re),e(z,Tt),e(Tt,wt),e(z,_t),e(z,Ft),e(Ft,tl),e(z,Cl),e(z,T),e(T,N),e(z,Z),e(z,nt),e(nt,ll),e(z,Qt),e(z,Wt),e(Wt,ul),e(z,Ze),e(z,Dt),e(Dt,al),e(P,pl),e(P,Ee),e(Ee,qt),e(qt,ut),e(Ee,Zl),e(Ee,Jl),e(Jl,Kt),e(Kt,yt),e(Ee,La),e(Ee,sl),e(sl,Je),e(Je,Xl),e(Xl,wl),e(Je,Ha),Ne(Dl,Je,null),e(Je,rl),e(Je,de),e(de,$l),e($l,ea),e(de,Gt),e(de,Fa),e(de,yl),e(de,jt),e(jt,Wa),e(de,ta),e(de,Pt),e(Pt,Pl),e(de,Al),e(de,la),e(la,Ga),e(de,Sl),e(de,ol),e(ol,ja),e(de,Ct),e(de,Ts),e(Ts,Xr),e(de,eo),e(de,Vt),e(Vt,ws),e(Je,Rl),Ne(Ol,Je,null),e(P,to),Ne(Sa,P,null),e(P,nl),Ne(Vl,P,null),g(D,Bl,q),g(D,cl,q),e(cl,Ua),g(D,tr,q),g(D,dl,q),e(dl,vl);for(let Be=0;Be<il.length;Be+=1)il[Be]&&il[Be].m(vl,null);e(dl,Ya),e(dl,Ra);for(let Be=0;Be<Bt.length;Be+=1)Bt[Be]&&Bt[Be].m(Ra,null);Qa=!0},p(D,q){q&3&&(ml=D[1],il=Jr(il,q,Ds,1,D,ml,za,vl,ju,$1,null,D1)),q&3&&($s=D[1],Uu(),Bt=Jr(Bt,q,Vo,1,D,$s,fl,Ra,zu,y1,null,w1),Yu())},i(D){if(!Qa){oe(x.$$.fragment,D),oe(Ye.$$.fragment,D),oe(Dl.$$.fragment,D),oe(Ol.$$.fragment,D),oe(Sa.$$.fragment,D),oe(Vl.$$.fragment,D);for(let q=0;q<$s.length;q+=1)oe(Bt[q]);Qa=!0}},o(D){ne(x.$$.fragment,D),ne(Ye.$$.fragment,D),ne(Dl.$$.fragment,D),ne(Ol.$$.fragment,D),ne(Sa.$$.fragment,D),ne(Vl.$$.fragment,D);for(let q=0;q<Bt.length;q+=1)ne(Bt[q]);Qa=!1},d(D){D&&t(i),D&&t($),xe(x,D),D&&t(A),D&&t(_),D&&t(Ie),D&&t(be),D&&t(ae),D&&t(X),xe(Ye),xe(Dl),xe(Ol),xe(Sa),xe(Vl),D&&t(Bl),D&&t(cl),D&&t(tr),D&&t(dl);for(let q=0;q<il.length;q+=1)il[q].d();for(let q=0;q<Bt.length;q+=1)Bt[q].d()}}}function K1(w){let i,f;return i=new Ku({props:{single:!0,title:"List collections",$$slots:{default:[Q1]},$$scope:{ctx:w}}}),{c(){Oe(i.$$.fragment)},l(h){ke(i.$$.fragment,h)},m(h,v){Ne(i,h,v),f=!0},p(h,[v]){const m={};v&257&&(m.$$scope={dirty:v,ctx:h}),i.$set(m)},i(h){f||(oe(i.$$.fragment,h),f=!0)},o(h){ne(i.$$.fragment,h),f=!1},d(h){xe(i,h)}}}function Z1(w,i,f){const h=[{code:200,body:`
                {
                  "page": 1,
                  "perPage": 100,
                  "totalItems": 3,
                  "totalPages": 1,
                  "items": [
                    {
                      "id": "d2972397d45614e",
                      "created": "2022-06-22 07:13:00.643Z",
                      "updated": "2022-06-22 07:13:00.643Z",
                      "name": "users",
                      "type": "base",
                      "system": true,
                      "schema": [
                        {
                          "system": false,
                          "id": "njnkhxa2",
                          "name": "title",
                          "type": "text",
                          "required": false,
                          "unique": false,
                          "options": {
                            "min": null,
                            "max": null,
                            "pattern": ""
                          }
                        },
                        {
                          "system": false,
                          "id": "9gvv0jkj",
                          "name": "avatar",
                          "type": "file",
                          "required": false,
                          "unique": false,
                          "options": {
                            "maxSelect": 1,
                            "maxSize": 5242880,
                            "mimeTypes": [
                              "image/jpg",
                              "image/jpeg",
                              "image/png",
                              "image/svg+xml",
                              "image/gif"
                            ],
                            "thumbs": null
                          }
                        }
                      ],
                      "listRule": "id = @request.user.id",
                      "viewRule": "id = @request.user.id",
                      "createRule": "id = @request.user.id",
                      "updateRule": "id = @request.user.id",
                      "deleteRule": null,
                      "options": {
                        "manageRule": null,
                        "allowOAuth2Auth": true,
                        "allowUsernameAuth": true,
                        "allowEmailAuth": true,
                        "requireEmail": true,
                        "exceptEmailDomains": [],
                        "onlyEmailDomains": [],
                        "minPasswordLength": 8
                      },
                      "indexes": ["create index title_idx on users (title)"]
                    },
                    {
                      "id": "a98f514eb05f454",
                      "created": "2022-06-23 10:46:16.462Z",
                      "updated": "2022-06-24 13:25:04.170Z",
                      "name": "posts",
                      "system": false,
                      "schema": [
                        {
                          "system": false,
                          "id": "b7olyhbx",
                          "name": "title",
                          "type": "text",
                          "required": false,
                          "unique": false,
                          "options": {
                            "min": null,
                            "max": null,
                            "pattern": ""
                          }
                        }
                      ],
                      "listRule": "title ~ 'test'",
                      "viewRule": null,
                      "createRule": null,
                      "updateRule": null,
                      "deleteRule": null,
                      "options": {},
                      "indexes": []
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
                  "message": "Only admins can perform this action.",
                  "data": {}
                }
            `}];let v=h[0].code;return[v,h,p=>f(0,v=p.code)]}class J1 extends Iu{constructor(i){super(),qu(this,i,Z1,K1,Cu,{})}}function P1(w,i,f){const h=w.slice();return h[3]=i[f],h}function A1(w,i,f){const h=w.slice();return h[3]=i[f],h}function S1(w,i){let f,h=i[3].code+"",v,m,p,$;function x(){return i[2](i[3])}return{key:w,first:null,c(){f=l("button"),v=r(h),m=n(),this.h()},l(A){f=a(A,"BUTTON",{class:!0});var _=s(f);v=o(_,h),m=c(_),_.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(A,_){g(A,f,_),e(f,v),e(f,m),p||($=Qu(f,"click",x),p=!0)},p(A,_){i=A,_&3&&At(f,"active",i[0]===i[3].code)},d(A){A&&t(f),p=!1,$()}}}function R1(w,i){let f,h,v,m;return h=new Ki({props:{content:i[3].body}}),{key:w,first:null,c(){f=l("div"),Oe(h.$$.fragment),v=n(),this.h()},l(p){f=a(p,"DIV",{class:!0});var $=s(f);ke(h.$$.fragment,$),v=c($),$.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(p,$){g(p,f,$),Ne(h,f,null),e(f,v),m=!0},p(p,$){i=p,(!m||$&3)&&At(f,"active",i[0]===i[3].code)},i(p){m||(oe(h.$$.fragment,p),m=!0)},o(p){ne(h.$$.fragment,p),m=!1},d(p){p&&t(f),xe(h)}}}function X1(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce,I,le,We,pe,St,J,ct,Ie,be,pt,ae,X,Me,C,ee,j,ie,Ge,Rt,je,qe,Ot,De,P,fe,ve,B,se,dt,Ce,me,$e,it,et,_e,kt,tt,U,Le,Ue,Y,ge,G,ze,he,Ve,V,lt,vt,He,at,bt,S,b,R,H,ft,Q,st,ye,te=[],Te=new Map,ue,Pe,re=[],Nt=new Map,Ae;x=new Zu({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const collection = await pb.collections.getOne('demo');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final collection = await pb.collections.getOne('demo');
        `}}),b=new b1({});let xt=w[1];const rt=E=>E[3].code;for(let E=0;E<xt.length;E+=1){let k=A1(w,xt,E),M=rt(k);Te.set(M,te[E]=S1(M,k))}let K=w[1];const ot=E=>E[3].code;for(let E=0;E<K.length;E+=1){let k=P1(w,K,E),M=ot(k);Nt.set(M,re[E]=R1(M,k))}return{c(){i=l("div"),f=l("p"),h=r("Returns a single Collection by its ID or name."),v=n(),m=l("p"),p=r("Only admins can perform this action."),$=n(),Oe(x.$$.fragment),A=n(),_=l("div"),W=l("strong"),we=r("GET"),ce=n(),I=l("div"),le=r("/api/collections/"),We=l("code"),pe=r("collectionIdOrName"),St=n(),J=l("small"),ct=r("Requires "),Ie=l("code"),be=r("Authorization: TOKEN"),pt=n(),ae=l("div"),X=r("Path parameters"),Me=n(),C=l("table"),ee=l("thead"),j=l("tr"),ie=l("th"),Ge=r("Param"),Rt=n(),je=l("th"),qe=r("Type"),Ot=n(),De=l("th"),P=r("Description"),fe=n(),ve=l("tbody"),B=l("tr"),se=l("td"),dt=r("collectionIdOrName"),Ce=n(),me=l("td"),$e=l("span"),it=r("String"),et=n(),_e=l("td"),kt=r("ID or name of the collection to view."),tt=n(),U=l("div"),Le=r("Query parameters"),Ue=n(),Y=l("table"),ge=l("thead"),G=l("tr"),ze=l("th"),he=r("Param"),Ve=n(),V=l("th"),lt=r("Type"),vt=n(),He=l("th"),at=r("Description"),bt=n(),S=l("tbody"),Oe(b.$$.fragment),R=n(),H=l("div"),ft=r("Responses"),Q=n(),st=l("div"),ye=l("div");for(let E=0;E<te.length;E+=1)te[E].c();ue=n(),Pe=l("div");for(let E=0;E<re.length;E+=1)re[E].c();this.h()},l(E){i=a(E,"DIV",{class:!0});var k=s(i);f=a(k,"P",{});var M=s(f);h=o(M,"Returns a single Collection by its ID or name."),M.forEach(t),v=c(k),m=a(k,"P",{});var It=s(m);p=o(It,"Only admins can perform this action."),It.forEach(t),k.forEach(t),$=c(E),ke(x.$$.fragment,E),A=c(E),_=a(E,"DIV",{class:!0});var Fe=s(_);W=a(Fe,"STRONG",{class:!0});var Yt=s(W);we=o(Yt,"GET"),Yt.forEach(t),ce=c(Fe),I=a(Fe,"DIV",{class:!0});var Ye=s(I);le=o(Ye,"/api/collections/"),We=a(Ye,"CODE",{});var Qe=s(We);pe=o(Qe,"collectionIdOrName"),Qe.forEach(t),Ye.forEach(t),St=c(Fe),J=a(Fe,"SMALL",{class:!0});var z=s(J);ct=o(z,"Requires "),Ie=a(z,"CODE",{});var Ke=s(Ie);be=o(Ke,"Authorization: TOKEN"),Ke.forEach(t),z.forEach(t),Fe.forEach(t),pt=c(E),ae=a(E,"DIV",{class:!0});var mt=s(ae);X=o(mt,"Path parameters"),mt.forEach(t),Me=c(E),C=a(E,"TABLE",{class:!0});var Se=s(C);ee=a(Se,"THEAD",{});var ht=s(ee);j=a(ht,"TR",{});var gt=s(j);ie=a(gt,"TH",{});var el=s(ie);Ge=o(el,"Param"),el.forEach(t),Rt=c(gt),je=a(gt,"TH",{});var Ht=s(je);qe=o(Ht,"Type"),Ht.forEach(t),Ot=c(gt),De=a(gt,"TH",{width:!0});var Re=s(De);P=o(Re,"Description"),Re.forEach(t),gt.forEach(t),ht.forEach(t),fe=c(Se),ve=a(Se,"TBODY",{});var Tt=s(ve);B=a(Tt,"TR",{});var wt=s(B);se=a(wt,"TD",{});var _t=s(se);dt=o(_t,"collectionIdOrName"),_t.forEach(t),Ce=c(wt),me=a(wt,"TD",{});var Ft=s(me);$e=a(Ft,"SPAN",{class:!0});var tl=s($e);it=o(tl,"String"),tl.forEach(t),Ft.forEach(t),et=c(wt),_e=a(wt,"TD",{});var Cl=s(_e);kt=o(Cl,"ID or name of the collection to view."),Cl.forEach(t),wt.forEach(t),Tt.forEach(t),Se.forEach(t),tt=c(E),U=a(E,"DIV",{class:!0});var T=s(U);Le=o(T,"Query parameters"),T.forEach(t),Ue=c(E),Y=a(E,"TABLE",{class:!0});var N=s(Y);ge=a(N,"THEAD",{});var Z=s(ge);G=a(Z,"TR",{});var nt=s(G);ze=a(nt,"TH",{});var ll=s(ze);he=o(ll,"Param"),ll.forEach(t),Ve=c(nt),V=a(nt,"TH",{});var Qt=s(V);lt=o(Qt,"Type"),Qt.forEach(t),vt=c(nt),He=a(nt,"TH",{width:!0});var Wt=s(He);at=o(Wt,"Description"),Wt.forEach(t),nt.forEach(t),Z.forEach(t),bt=c(N),S=a(N,"TBODY",{});var ul=s(S);ke(b.$$.fragment,ul),ul.forEach(t),N.forEach(t),R=c(E),H=a(E,"DIV",{class:!0});var Ze=s(H);ft=o(Ze,"Responses"),Ze.forEach(t),Q=c(E),st=a(E,"DIV",{class:!0});var Dt=s(st);ye=a(Dt,"DIV",{class:!0});var al=s(ye);for(let Ee=0;Ee<te.length;Ee+=1)te[Ee].l(al);al.forEach(t),ue=c(Dt),Pe=a(Dt,"DIV",{class:!0});var pl=s(Pe);for(let Ee=0;Ee<re.length;Ee+=1)re[Ee].l(pl);pl.forEach(t),Dt.forEach(t),this.h()},h(){d(i,"class","content m-b-sm"),d(W,"class","label label-primary"),d(I,"class","content"),d(J,"class","txt-hint auth-header"),d(_,"class","api-route alert alert-info"),d(ae,"class","section-title"),d(De,"width","50%"),d($e,"class","label"),d(C,"class","table-compact table-border m-b-base"),d(U,"class","section-title"),d(He,"width","50%"),d(Y,"class","table-compact table-border m-b-base"),d(H,"class","section-title"),d(ye,"class","tabs-header compact left"),d(Pe,"class","tabs-content"),d(st,"class","tabs")},m(E,k){g(E,i,k),e(i,f),e(f,h),e(i,v),e(i,m),e(m,p),g(E,$,k),Ne(x,E,k),g(E,A,k),g(E,_,k),e(_,W),e(W,we),e(_,ce),e(_,I),e(I,le),e(I,We),e(We,pe),e(_,St),e(_,J),e(J,ct),e(J,Ie),e(Ie,be),g(E,pt,k),g(E,ae,k),e(ae,X),g(E,Me,k),g(E,C,k),e(C,ee),e(ee,j),e(j,ie),e(ie,Ge),e(j,Rt),e(j,je),e(je,qe),e(j,Ot),e(j,De),e(De,P),e(C,fe),e(C,ve),e(ve,B),e(B,se),e(se,dt),e(B,Ce),e(B,me),e(me,$e),e($e,it),e(B,et),e(B,_e),e(_e,kt),g(E,tt,k),g(E,U,k),e(U,Le),g(E,Ue,k),g(E,Y,k),e(Y,ge),e(ge,G),e(G,ze),e(ze,he),e(G,Ve),e(G,V),e(V,lt),e(G,vt),e(G,He),e(He,at),e(Y,bt),e(Y,S),Ne(b,S,null),g(E,R,k),g(E,H,k),e(H,ft),g(E,Q,k),g(E,st,k),e(st,ye);for(let M=0;M<te.length;M+=1)te[M]&&te[M].m(ye,null);e(st,ue),e(st,Pe);for(let M=0;M<re.length;M+=1)re[M]&&re[M].m(Pe,null);Ae=!0},p(E,k){k&3&&(xt=E[1],te=Jr(te,k,rt,1,E,xt,Te,ye,ju,S1,null,A1)),k&3&&(K=E[1],Uu(),re=Jr(re,k,ot,1,E,K,Nt,Pe,zu,R1,null,P1),Yu())},i(E){if(!Ae){oe(x.$$.fragment,E),oe(b.$$.fragment,E);for(let k=0;k<K.length;k+=1)oe(re[k]);Ae=!0}},o(E){ne(x.$$.fragment,E),ne(b.$$.fragment,E);for(let k=0;k<re.length;k+=1)ne(re[k]);Ae=!1},d(E){E&&t(i),E&&t($),xe(x,E),E&&t(A),E&&t(_),E&&t(pt),E&&t(ae),E&&t(Me),E&&t(C),E&&t(tt),E&&t(U),E&&t(Ue),E&&t(Y),xe(b),E&&t(R),E&&t(H),E&&t(Q),E&&t(st);for(let k=0;k<te.length;k+=1)te[k].d();for(let k=0;k<re.length;k+=1)re[k].d()}}}function em(w){let i,f;return i=new Ku({props:{single:!0,title:"View collection",$$slots:{default:[X1]},$$scope:{ctx:w}}}),{c(){Oe(i.$$.fragment)},l(h){ke(i.$$.fragment,h)},m(h,v){Ne(i,h,v),f=!0},p(h,[v]){const m={};v&257&&(m.$$scope={dirty:v,ctx:h}),i.$set(m)},i(h){f||(oe(i.$$.fragment,h),f=!0)},o(h){ne(i.$$.fragment,h),f=!1},d(h){xe(i,h)}}}function tm(w,i,f){const h=[{code:200,body:`
                {
                  "id": "d2972397d45614e",
                  "created": "2022-06-22 07:13:00.643Z",
                  "updated": "2022-06-22 07:13:00.643Z",
                  "name": "posts",
                  "type": "base",
                  "schema": [
                    {
                      "system": false,
                      "id": "njnkhxa2",
                      "name": "title",
                      "type": "text",
                      "required": false,
                      "unique": false,
                      "options": {
                        "min": null,
                        "max": null,
                        "pattern": ""
                      }
                    },
                    {
                      "system": false,
                      "id": "9gvv0jkj",
                      "name": "image",
                      "type": "file",
                      "required": false,
                      "unique": false,
                      "options": {
                        "maxSelect": 1,
                        "maxSize": 5242880,
                        "mimeTypes": [
                          "image/jpg",
                          "image/jpeg",
                          "image/png",
                          "image/svg+xml",
                          "image/gif"
                        ],
                        "thumbs": null
                      }
                    }
                  ],
                  "listRule": "id = @request.user.id",
                  "viewRule": "id = @request.user.id",
                  "createRule": "id = @request.user.id",
                  "updateRule": "id = @request.user.id",
                  "deleteRule": null,
                  "options": {},
                  "indexes": ["create index title_idx on posts (title)"]
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
            `}];let v=h[0].code;return[v,h,p=>f(0,v=p.code)]}class lm extends Iu{constructor(i){super(),qu(this,i,tm,em,Cu,{})}}function O1(w,i,f){const h=w.slice();return h[3]=i[f],h}function k1(w,i,f){const h=w.slice();return h[3]=i[f],h}function N1(w,i){let f,h=i[3].code+"",v,m,p,$;function x(){return i[2](i[3])}return{key:w,first:null,c(){f=l("button"),v=r(h),m=n(),this.h()},l(A){f=a(A,"BUTTON",{class:!0});var _=s(f);v=o(_,h),m=c(_),_.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(A,_){g(A,f,_),e(f,v),e(f,m),p||($=Qu(f,"click",x),p=!0)},p(A,_){i=A,_&3&&At(f,"active",i[0]===i[3].code)},d(A){A&&t(f),p=!1,$()}}}function x1(w,i){let f,h,v,m;return h=new Ki({props:{content:i[3].body}}),{key:w,first:null,c(){f=l("div"),Oe(h.$$.fragment),v=n(),this.h()},l(p){f=a(p,"DIV",{class:!0});var $=s(f);ke(h.$$.fragment,$),v=c($),$.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(p,$){g(p,f,$),Ne(h,f,null),e(f,v),m=!0},p(p,$){i=p,(!m||$&3)&&At(f,"active",i[0]===i[3].code)},i(p){m||(oe(h.$$.fragment,p),m=!0)},o(p){ne(h.$$.fragment,p),m=!1},d(p){p&&t(f),xe(h)}}}function am(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce,I,le,We,pe,St,J,ct,Ie,be,pt,ae,X,Me,C,ee,j,ie,Ge,Rt,je,qe,Ot,De,P,fe,ve,B,se,dt,Ce,me,$e,it,et,_e,kt,tt,U,Le,Ue,Y,ge,G,ze,he,Ve,V,lt,vt,He,at,bt,S,b,R,H,ft,Q,st,ye,te,Te,ue,Pe,re,Nt,Ae,xt,rt,K,ot,E,k,M,It,Fe,Yt,Ye,Qe,z,Ke,mt,Se,ht,gt,el,Ht,Re,Tt,wt,_t,Ft,tl,Cl,T,N,Z,nt,ll,Qt,Wt,ul,Ze,Dt,al,pl,Ee,qt,ut,Zl,Jl,Kt,yt,La,sl,Je,Xl,wl,Ha,Dl,rl,de,$l,ea,Gt,Fa,yl,jt,Wa,ta,Pt,Pl,Al,la,Ga,Sl,ol,ja,Ct,Ts,Xr,eo,Vt,ws,Rl,Ol,to,Sa,nl,Vl,Bl,cl,Ua,tr,dl,vl,il,za,Ya,Ra,Bt,fl,Qa,ml,Ds,$s,Vo,D,q,Be,Oa,Ml,fc="null|String",ys,lo,Ll,lr,Hl,hc,Ka,Bo,Fl,ka,Ut,Wl,Mo,Lo,Ho,Mt,ar,zt,Ps,Fo,Wo,Zt,sr,_l,Na,As,uc="null|String",Ss,aa,El,rr,bl,pc,Go,Et,Gl,xa,or,Rs,jo,Uo,zo,Jt,sa,kl,Os,Yo,Qo,$t,nr,Xe,Ia,ks,vc="null|String",Ns,Ko,Za,gl,xs,Is,Zo,Jo,Tl,Ja,cr,mc,Xo,Zi,Ji,Xi,Nl,ef,dr,tf,lf,_c,qs,af,Ec,Cs,bc,Xa,en,sf,rf,ra,gc,ir,fr,tn,Vu="null|String",ln,of,ao,oa,an,Hi,nf,cf,so,es,hr,Tc,sn,df,ff,hf,xl,uf,ur,pf,vf,wc,Vs,mf,Dc,Bs,$c,ts,rn,_f,Ef,na,yc,pr,vr,on,Bu="null|String",nn,bf,ro,ca,cn,Fi,gf,Tf,oo,ls,mr,Pc,dn,wf,Df,$f,Il,yf,_r,Pf,Af,Ac,Ms,Sf,Sc,Ls,Rc,as,fn,Rf,Of,da,Oc,Er,br,hn,Mu="Array<String>",un,kf,no,co,pn,Lu,io,Nf,Hs,kc,xf,If,Fs,fo,Ws,qf,Nc,Cf,xc,ho,jl,vn,ia,mn,Vf,Bf,fa,_n,ss,gr,Mf,Lf,Tr,En,Hf,Ic,uo,Ff,po,bn,Wf,Gf,Gs,vo,js,jf,qc,Uf,Cc,mo,Ul,gn,ha,Tn,zf,Yf,ua,wn,rs,wr,Qf,Kf,Dr,Dn,Zf,Vc,Us,Jf,_o,$n,Xf,Bc,zs,eh,Mc,Ys,yn,pa,Pn,th,lh,va,An,os,$r,ah,sh,yr,Sn,rh,Lc,Hc,oh,Fc,ma,Rn,ns,Pr,nh,ch,_a,On,cs,Ar,dh,ih,Sr,kn,fh,Wc,Gc,hh,jc,Ea,Nn,ds,Rr,uh,ph,ba,xn,is,Or,vh,mh,kr,In,_h,Uc,zc,Eh,Yc,ga,qn,fs,Nr,bh,gh,Ta,Cn,hs,xr,Th,wh,Ir,Vn,Dh,Qc,Kc,$h,Zc,wa,Bn,us,qr,yh,Ph,Da,Mn,ps,Cr,Ah,Sh,Vr,Ln,Hu="Array<String>",Jc,Rh,Xc,ed,Hn,Br,Fn,vs,Mr,Oh,kh,$a,Wn,ms,Lr,Nh,xh,Hr,Gn,Fu="Array<String>",td,Ih,ld,ad,jn,Fr,Un,_s,Wr,qh,Ch,ya,zn,Es,Gr,Vh,Bh,jr,Yn,Mh,sd,Qs,Lh,rd,Qn,od,Hh,nd,Fh,Ks,Pa,zl,Yl,Kn,Wh,Zn,Jn,Gh,cd,dd,jh,id,Ur,Xn,Uh,fd,hd,Wi,Aa,qa,ud,pd,zh,vd,md,Yh,Gi,zr,Eo,ji,bs,Ca,Va,Ba,_d,Qh,Ed,bd,Kh,ec,tc,Zh,gd,Zs,Yr,Qr,bo,Ui,gs,Ql,hl=[],Ma=new Map,Wu,go,Lt=[],ql=new Map,Jh;x=new Zu({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // create base collection
            const base = await pb.collections.create({
                name: 'exampleBase',
                type: 'base',
                schema: [
                    {
                        name: 'title',
                        type: 'text',
                        required: true,
                        options: {
                            min: 10,
                        },
                    },
                    {
                        name: 'status',
                        type: 'bool',
                    },
                ],
            });

            // create auth collection
            const auth = await pb.collections.create({
                name: 'exampleAuth',
                type: 'auth',
                createRule: 'id = @request.auth.id',
                updateRule: 'id = @request.auth.id',
                deleteRule: 'id = @request.auth.id',
                // schema is optional for auth collections
                schema: [
                    {
                        name: 'name',
                        type: 'text',
                    }
                ],
                options: {
                    allowOAuth2Auth: true,
                    requireEmail: true,
                }
            });

            // create view collection
            const view = await pb.collections.create({
                name: 'exampleView',
                type: 'view',
                listRule: '@request.auth.id != ""',
                viewRule: null,
                // the schema will be autogenerated from the below query
                options: {
                    query: 'SELECT id, name from posts',
                },
            });
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            // create base collection
            final base = await pb.collections.create(body: {
                'name': 'exampleBase',
                'type': 'base',
                'schema': [
                    {
                        'name': 'title',
                        'type': 'text',
                        'required': true,
                        'options': {
                            'min': 10,
                        },
                    },
                    {
                        'name': 'status',
                        'type': 'bool',
                    },
                ],
            });

            // create auth collection
            final auth = await pb.collections.create(body: {
                'name': 'exampleAuth',
                'type': 'auth',
                'createRule': 'id = @request.auth.id',
                'updateRule': 'id = @request.auth.id',
                'deleteRule': 'id = @request.auth.id',
                // schema is optional for auth collections
                'schema': [
                    {
                        'name': 'name',
                        'type': 'text',
                    }
                ],
                'options': {
                    'allowOAuth2Auth': true,
                    'requireEmail': true,
                }
            });

            // create view collection
            final view = await pb.collections.create(body: {
                'name': 'exampleView',
                'type': 'view',
                'listRule': '@request.auth.id != ""',
                'viewRule': null,
                // the schema will be autogenerated from the below query
                'options': {
                    'query': 'SELECT id, name from posts',
                },
            });
        `}}),Zs=new b1({});let Td=w[1];const Xh=y=>y[3].code;for(let y=0;y<Td.length;y+=1){let u=k1(w,Td,y),O=Xh(u);Ma.set(O,hl[y]=N1(O,u))}let zi=w[1];const Yi=y=>y[3].code;for(let y=0;y<zi.length;y+=1){let u=O1(w,zi,y),O=Yi(u);ql.set(O,Lt[y]=x1(O,u))}return{c(){i=l("div"),f=l("p"),h=r("Creates a new Collection."),v=n(),m=l("p"),p=r("Only admins can perform this action."),$=n(),Oe(x.$$.fragment),A=n(),_=l("div"),W=l("strong"),we=r("POST"),ce=n(),I=l("div"),le=r("/api/collections"),We=n(),pe=l("small"),St=r("Requires "),J=l("code"),ct=r("Authorization: TOKEN"),Ie=n(),be=l("div"),pt=r("Body Parameters"),ae=n(),X=l("table"),Me=l("thead"),C=l("tr"),ee=l("th"),j=r("Param"),ie=n(),Ge=l("th"),Rt=r("Type"),je=n(),qe=l("th"),Ot=r("Description"),De=n(),P=l("tbody"),fe=l("tr"),ve=l("td"),B=l("div"),se=l("span"),dt=r("Optional"),Ce=n(),me=l("span"),$e=r("id"),it=n(),et=l("td"),_e=l("span"),kt=r("String"),tt=n(),U=l("td"),Le=l("strong"),Ue=r("15 characters string"),Y=r(` to store as collection ID.
                    `),ge=l("br"),G=r(`
                    If not set, it will be auto generated.`),ze=n(),he=l("tr"),Ve=l("td"),V=l("div"),lt=l("span"),vt=r("Required"),He=n(),at=l("span"),bt=r("name"),S=n(),b=l("td"),R=l("span"),H=r("String"),ft=n(),Q=l("td"),st=r("Unique collection name (used as a table name for the records table)."),ye=n(),te=l("tr"),Te=l("td"),ue=l("div"),Pe=l("span"),re=r("Required"),Nt=n(),Ae=l("span"),xt=r("type"),rt=n(),K=l("td"),ot=l("span"),E=r("String"),k=n(),M=l("td"),It=r("The type of the collection - "),Fe=l("code"),Yt=r("base"),Ye=r(" ("),Qe=l("em"),z=r("default"),Ke=r("), "),mt=l("code"),Se=r("auth"),ht=r(` or
                    `),gt=l("code"),el=r("view"),Ht=r("."),Re=n(),Tt=l("tr"),wt=l("td"),_t=l("div"),Ft=l("span"),tl=r("Req|Opt"),Cl=n(),T=l("span"),N=r("schema"),Z=n(),nt=l("td"),ll=l("span"),Qt=r("Array"),Wt=n(),ul=l("td"),Ze=l("div"),Dt=l("p"),al=r("List with the collection fields."),pl=n(),Ee=l("p"),qt=r("This field is "),ut=l("strong"),Zl=r("required"),Jl=r(" for "),Kt=l("code"),yt=r("base"),La=r(" collections."),sl=n(),Je=l("p"),Xl=r("This field is "),wl=l("strong"),Ha=r("optional"),Dl=r(" for "),rl=l("code"),de=r("auth"),$l=r(" collections."),ea=n(),Gt=l("p"),Fa=r("This field is "),yl=l("strong"),jt=r("optional"),Wa=r(" and autopopulated for "),ta=l("code"),Pt=r("view"),Pl=r(`
                            collections based on the
                            `),Al=l("code"),la=r("options.query"),Ga=r("."),Sl=n(),ol=l("p"),ja=r(`For more info about the supported fields and their options, you could check the
                            `),Ct=l("strong"),Ts=r("pocketbase/models/schema"),Xr=r(`
                            Go sub-package definitions.`),eo=n(),Vt=l("tr"),ws=l("td"),Rl=l("div"),Ol=l("span"),to=r("Optional"),Sa=n(),nl=l("span"),Vl=r("system"),Bl=n(),cl=l("td"),Ua=l("span"),tr=r("Boolean"),dl=n(),vl=l("td"),il=r("Marks the collection as "),za=l("em"),Ya=r('"system"'),Ra=r(", aka. cannot be renamed or deleted."),Bt=n(),fl=l("tr"),Qa=l("td"),ml=l("div"),Ds=l("span"),$s=r("Optional"),Vo=n(),D=l("span"),q=r("listRule"),Be=n(),Oa=l("td"),Ml=l("span"),ys=r(fc),lo=n(),Ll=l("td"),lr=r("API "),Hl=l("em"),hc=r("List"),Ka=r(` action rule.
                    `),Bo=l("br"),Fl=n(),ka=l("em"),Ut=r(`Check
                        `),Wl=l("a"),Mo=r("Rules/Filters syntax guide"),Lo=r(`
                        for more details.`),Ho=n(),Mt=l("tr"),ar=l("td"),zt=l("div"),Ps=l("span"),Fo=r("Optional"),Wo=n(),Zt=l("span"),sr=r("viewRule"),_l=n(),Na=l("td"),As=l("span"),Ss=r(uc),aa=n(),El=l("td"),rr=r("API "),bl=l("em"),pc=r("View"),Go=r(` action rule.
                    `),Et=l("br"),Gl=n(),xa=l("em"),or=r(`Check
                        `),Rs=l("a"),jo=r("Rules/Filters syntax guide"),Uo=r(`
                        for more details.`),zo=n(),Jt=l("tr"),sa=l("td"),kl=l("div"),Os=l("span"),Yo=r("Optional"),Qo=n(),$t=l("span"),nr=r("createRule"),Xe=n(),Ia=l("td"),ks=l("span"),Ns=r(vc),Ko=n(),Za=l("td"),gl=l("p"),xs=r("API "),Is=l("em"),Zo=r("Create"),Jo=r(` action rule.
                        `),Tl=l("br"),Ja=n(),cr=l("em"),mc=r(`Check
                            `),Xo=l("a"),Zi=r("Rules/Filters syntax guide"),Ji=r(`
                            for more details.`),Xi=n(),Nl=l("p"),ef=r("This rule must be "),dr=l("code"),tf=r("null"),lf=r(" for "),_c=l("code"),qs=r("view"),af=r(" collections."),Ec=n(),Cs=l("tr"),bc=l("td"),Xa=l("div"),en=l("span"),sf=r("Optional"),rf=n(),ra=l("span"),gc=r("updateRule"),ir=n(),fr=l("td"),tn=l("span"),ln=r(Vu),of=n(),ao=l("td"),oa=l("p"),an=r("API "),Hi=l("em"),nf=r("Update"),cf=r(` action rule.
                        `),so=l("br"),es=n(),hr=l("em"),Tc=r(`Check
                            `),sn=l("a"),df=r("Rules/Filters syntax guide"),ff=r(`
                            for more details.`),hf=n(),xl=l("p"),uf=r("This rule must be "),ur=l("code"),pf=r("null"),vf=r(" for "),wc=l("code"),Vs=r("view"),mf=r(" collections."),Dc=n(),Bs=l("tr"),$c=l("td"),ts=l("div"),rn=l("span"),_f=r("Optional"),Ef=n(),na=l("span"),yc=r("deleteRule"),pr=n(),vr=l("td"),on=l("span"),nn=r(Bu),bf=n(),ro=l("td"),ca=l("p"),cn=r("API "),Fi=l("em"),gf=r("Delete"),Tf=r(` action rule.
                        `),oo=l("br"),ls=n(),mr=l("em"),Pc=r(`Check
                            `),dn=l("a"),wf=r("Rules/Filters syntax guide"),Df=r(`
                            for more details.`),$f=n(),Il=l("p"),yf=r("This rule must be "),_r=l("code"),Pf=r("null"),Af=r(" for "),Ac=l("code"),Ms=r("view"),Sf=r(" collections."),Sc=n(),Ls=l("tr"),Rc=l("td"),as=l("div"),fn=l("span"),Rf=r("Optional"),Of=n(),da=l("span"),Oc=r("indexes"),Er=n(),br=l("td"),hn=l("span"),un=r(Mu),kf=n(),no=l("td"),co=l("p"),pn=r("The collection indexes and unique constriants."),Lu=n(),io=l("p"),Nf=r("Note that "),Hs=l("code"),kc=r("view"),xf=r(" collections don't support indexes."),If=n(),Fs=l("tr"),fo=l("td"),Ws=l("strong"),qf=r("options ("),Nc=l("em"),Cf=r("view"),xc=r(")"),ho=n(),jl=l("tr"),vn=l("td"),ia=l("div"),mn=l("span"),Vf=r("├─"),Bf=n(),fa=l("span"),_n=r("Required"),ss=n(),gr=l("em"),Mf=r("query"),Lf=n(),Tr=l("td"),En=l("span"),Hf=r("null|String"),Ic=n(),uo=l("td"),Ff=r("The SQL "),po=l("code"),bn=r("SELECT"),Wf=r(` statement that will be used to create the underlying view of the
                    collection.`),Gf=n(),Gs=l("tr"),vo=l("td"),js=l("strong"),jf=r("options ("),qc=l("em"),Uf=r("auth"),Cc=r(")"),mo=n(),Ul=l("tr"),gn=l("td"),ha=l("div"),Tn=l("span"),zf=r("├─"),Yf=n(),ua=l("span"),wn=r("Optional"),rs=n(),wr=l("em"),Qf=r("manageRule"),Kf=n(),Dr=l("td"),Dn=l("span"),Zf=r("null|String"),Vc=n(),Us=l("td"),Jf=r(`API rule that gives admin-like permissions to allow fully managing the auth record(s), eg.
                    changing the password without requiring to enter the old one, directly updating the
                    verified state or email, etc. This rule is executed in addition to the
                    `),_o=l("code"),$n=r("createRule"),Xf=r(" and "),Bc=l("code"),zs=r("updateRule"),eh=r("."),Mc=n(),Ys=l("tr"),yn=l("td"),pa=l("div"),Pn=l("span"),th=r("├─"),lh=n(),va=l("span"),An=r("Optional"),os=n(),$r=l("em"),ah=r("allowOAuth2Auth"),sh=n(),yr=l("td"),Sn=l("span"),rh=r("Boolean"),Lc=n(),Hc=l("td"),oh=r("Whether to allow OAuth2 sign-in/sign-up for the auth collection."),Fc=n(),ma=l("tr"),Rn=l("td"),ns=l("div"),Pr=l("span"),nh=r("├─"),ch=n(),_a=l("span"),On=r("Optional"),cs=n(),Ar=l("em"),dh=r("allowUsernameAuth"),ih=n(),Sr=l("td"),kn=l("span"),fh=r("Boolean"),Wc=n(),Gc=l("td"),hh=r("Whether to allow username + password authentication for the auth collection."),jc=n(),Ea=l("tr"),Nn=l("td"),ds=l("div"),Rr=l("span"),uh=r("├─"),ph=n(),ba=l("span"),xn=r("Optional"),is=n(),Or=l("em"),vh=r("allowEmailAuth"),mh=n(),kr=l("td"),In=l("span"),_h=r("Boolean"),Uc=n(),zc=l("td"),Eh=r("Whether to allow email + password authentication for the auth collection."),Yc=n(),ga=l("tr"),qn=l("td"),fs=l("div"),Nr=l("span"),bh=r("├─"),gh=n(),Ta=l("span"),Cn=r("Optional"),hs=n(),xr=l("em"),Th=r("requireEmail"),wh=n(),Ir=l("td"),Vn=l("span"),Dh=r("Boolean"),Qc=n(),Kc=l("td"),$h=r("Whether to always require email address when creating or updating auth records."),Zc=n(),wa=l("tr"),Bn=l("td"),us=l("div"),qr=l("span"),yh=r("├─"),Ph=n(),Da=l("span"),Mn=r("Optional"),ps=n(),Cr=l("em"),Ah=r("exceptEmailDomains"),Sh=n(),Vr=l("td"),Ln=l("span"),Jc=r(Hu),Rh=n(),Xc=l("td"),ed=r("Whether to allow sign-ups only with the email domains not listed in the specified list."),Hn=n(),Br=l("tr"),Fn=l("td"),vs=l("div"),Mr=l("span"),Oh=r("├─"),kh=n(),$a=l("span"),Wn=r("Optional"),ms=n(),Lr=l("em"),Nh=r("onlyEmailDomains"),xh=n(),Hr=l("td"),Gn=l("span"),td=r(Fu),Ih=n(),ld=l("td"),ad=r("Whether to allow sign-ups only with the email domains listed in the specified list."),jn=n(),Fr=l("tr"),Un=l("td"),_s=l("div"),Wr=l("span"),qh=r("├─"),Ch=n(),ya=l("span"),zn=r("Optional"),Es=n(),Gr=l("em"),Vh=r("onlyVerified"),Bh=n(),jr=l("td"),Yn=l("span"),Mh=r("Boolean"),sd=n(),Qs=l("td"),Lh=r(`If enabled, it will return 403 for any new auth request performed by unverified user.
                    `),rd=l("br"),Qn=r(`
                    Note that when authenticating with OAuth2 for the first time, the user would be created with
                    `),od=l("code"),Hh=r("verified=true"),nd=r(" even if the provider doesn't return an email."),Fh=n(),Ks=l("tr"),Pa=l("td"),zl=l("div"),Yl=l("span"),Kn=r("└─"),Wh=n(),Zn=l("span"),Jn=r("Optional"),Gh=n(),cd=l("em"),dd=r("minPasswordLength"),jh=n(),id=l("td"),Ur=l("span"),Xn=r("Boolean"),Uh=n(),fd=l("td"),hd=r("The minimum required password length for new auth records."),Wi=n(),Aa=l("small"),qa=r("Body parameters could be sent as "),ud=l("em"),pd=r("JSON"),zh=r(` or
        `),vd=l("em"),md=r("multipart/form-data"),Yh=r("."),Gi=n(),zr=l("div"),Eo=r("Query parameters"),ji=n(),bs=l("table"),Ca=l("thead"),Va=l("tr"),Ba=l("th"),_d=r("Param"),Qh=n(),Ed=l("th"),bd=r("Type"),Kh=n(),ec=l("th"),tc=r("Description"),Zh=n(),gd=l("tbody"),Oe(Zs.$$.fragment),Yr=n(),Qr=l("div"),bo=r("Responses"),Ui=n(),gs=l("div"),Ql=l("div");for(let y=0;y<hl.length;y+=1)hl[y].c();Wu=n(),go=l("div");for(let y=0;y<Lt.length;y+=1)Lt[y].c();this.h()},l(y){i=a(y,"DIV",{class:!0});var u=s(i);f=a(u,"P",{});var O=s(f);h=o(O,"Creates a new Collection."),O.forEach(t),v=c(u),m=a(u,"P",{});var Xt=s(m);p=o(Xt,"Only admins can perform this action."),Xt.forEach(t),u.forEach(t),$=c(y),ke(x.$$.fragment,y),A=c(y),_=a(y,"DIV",{class:!0});var wd=s(_);W=a(wd,"STRONG",{class:!0});var Dd=s(W);we=o(Dd,"POST"),Dd.forEach(t),ce=c(wd),I=a(wd,"DIV",{class:!0});var Ju=s(I);le=o(Ju,"/api/collections"),Ju.forEach(t),We=c(wd),pe=a(wd,"SMALL",{class:!0});var eu=s(pe);St=o(eu,"Requires "),J=a(eu,"CODE",{});var Xu=s(J);ct=o(Xu,"Authorization: TOKEN"),Xu.forEach(t),eu.forEach(t),wd.forEach(t),Ie=c(y),be=a(y,"DIV",{class:!0});var Gu=s(be);pt=o(Gu,"Body Parameters"),Gu.forEach(t),ae=c(y),X=a(y,"TABLE",{class:!0});var tu=s(X);Me=a(tu,"THEAD",{});var ep=s(Me);C=a(ep,"TR",{});var To=s(C);ee=a(To,"TH",{});var tp=s(ee);j=o(tp,"Param"),tp.forEach(t),ie=c(To),Ge=a(To,"TH",{});var $d=s(Ge);Rt=o($d,"Type"),$d.forEach(t),je=c(To),qe=a(To,"TH",{width:!0});var lp=s(qe);Ot=o(lp,"Description"),lp.forEach(t),To.forEach(t),ep.forEach(t),De=c(tu),P=a(tu,"TBODY",{});var L=s(P);fe=a(L,"TR",{});var yd=s(fe);ve=a(yd,"TD",{});var ap=s(ve);B=a(ap,"DIV",{class:!0});var wo=s(B);se=a(wo,"SPAN",{class:!0});var sp=s(se);dt=o(sp,"Optional"),sp.forEach(t),Ce=c(wo),me=a(wo,"SPAN",{});var rp=s(me);$e=o(rp,"id"),rp.forEach(t),wo.forEach(t),ap.forEach(t),it=c(yd),et=a(yd,"TD",{});var op=s(et);_e=a(op,"SPAN",{class:!0});var np=s(_e);kt=o(np,"String"),np.forEach(t),op.forEach(t),tt=c(yd),U=a(yd,"TD",{});var Qi=s(U);Le=a(Qi,"STRONG",{});var lu=s(Le);Ue=o(lu,"15 characters string"),lu.forEach(t),Y=o(Qi,` to store as collection ID.
                    `),ge=a(Qi,"BR",{}),G=o(Qi,`
                    If not set, it will be auto generated.`),Qi.forEach(t),yd.forEach(t),ze=c(L),he=a(L,"TR",{});var Pd=s(he);Ve=a(Pd,"TD",{});var Ad=s(Ve);V=a(Ad,"DIV",{class:!0});var au=s(V);lt=a(au,"SPAN",{class:!0});var cp=s(lt);vt=o(cp,"Required"),cp.forEach(t),He=c(au),at=a(au,"SPAN",{class:!0});var dp=s(at);bt=o(dp,"name"),dp.forEach(t),au.forEach(t),Ad.forEach(t),S=c(Pd),b=a(Pd,"TD",{});var F=s(b);R=a(F,"SPAN",{class:!0});var Sd=s(R);H=o(Sd,"String"),Sd.forEach(t),F.forEach(t),ft=c(Pd),Q=a(Pd,"TD",{});var ip=s(Q);st=o(ip,"Unique collection name (used as a table name for the records table)."),ip.forEach(t),Pd.forEach(t),ye=c(L),te=a(L,"TR",{});var Do=s(te);Te=a(Do,"TD",{});var fp=s(Te);ue=a(fp,"DIV",{class:!0});var su=s(ue);Pe=a(su,"SPAN",{class:!0});var hp=s(Pe);re=o(hp,"Required"),hp.forEach(t),Nt=c(su),Ae=a(su,"SPAN",{class:!0});var up=s(Ae);xt=o(up,"type"),up.forEach(t),su.forEach(t),fp.forEach(t),rt=c(Do),K=a(Do,"TD",{});var pp=s(K);ot=a(pp,"SPAN",{class:!0});var Rd=s(ot);E=o(Rd,"String"),Rd.forEach(t),pp.forEach(t),k=c(Do),M=a(Do,"TD",{});var Js=s(M);It=o(Js,"The type of the collection - "),Fe=a(Js,"CODE",{});var ru=s(Fe);Yt=o(ru,"base"),ru.forEach(t),Ye=o(Js," ("),Qe=a(Js,"EM",{});var vp=s(Qe);z=o(vp,"default"),vp.forEach(t),Ke=o(Js,"), "),mt=a(Js,"CODE",{});var mp=s(mt);Se=o(mp,"auth"),mp.forEach(t),ht=o(Js,` or
                    `),gt=a(Js,"CODE",{});var _p=s(gt);el=o(_p,"view"),_p.forEach(t),Ht=o(Js,"."),Js.forEach(t),Do.forEach(t),Re=c(L),Tt=a(L,"TR",{});var Od=s(Tt);wt=a(Od,"TD",{});var $o=s(wt);_t=a($o,"DIV",{class:!0});var ou=s(_t);Ft=a(ou,"SPAN",{class:!0});var Ep=s(Ft);tl=o(Ep,"Req|Opt"),Ep.forEach(t),Cl=c(ou),T=a(ou,"SPAN",{class:!0});var bp=s(T);N=o(bp,"schema"),bp.forEach(t),ou.forEach(t),$o.forEach(t),Z=c(Od),nt=a(Od,"TD",{});var kd=s(nt);ll=a(kd,"SPAN",{class:!0});var gp=s(ll);Qt=o(gp,"Array"),gp.forEach(t),kd.forEach(t),Wt=c(Od),ul=a(Od,"TD",{});var nu=s(ul);Ze=a(nu,"DIV",{class:!0});var Xs=s(Ze);Dt=a(Xs,"P",{});var Tp=s(Dt);al=o(Tp,"List with the collection fields."),Tp.forEach(t),pl=c(Xs),Ee=a(Xs,"P",{});var Nd=s(Ee);qt=o(Nd,"This field is "),ut=a(Nd,"STRONG",{});var wp=s(ut);Zl=o(wp,"required"),wp.forEach(t),Jl=o(Nd," for "),Kt=a(Nd,"CODE",{});var Dp=s(Kt);yt=o(Dp,"base"),Dp.forEach(t),La=o(Nd," collections."),Nd.forEach(t),sl=c(Xs),Je=a(Xs,"P",{});var Kl=s(Je);Xl=o(Kl,"This field is "),wl=a(Kl,"STRONG",{});var $p=s(wl);Ha=o($p,"optional"),$p.forEach(t),Dl=o(Kl," for "),rl=a(Kl,"CODE",{});var xd=s(rl);de=o(xd,"auth"),xd.forEach(t),$l=o(Kl," collections."),Kl.forEach(t),ea=c(Xs),Gt=a(Xs,"P",{});var yo=s(Gt);Fa=o(yo,"This field is "),yl=a(yo,"STRONG",{});var yp=s(yl);jt=o(yp,"optional"),yp.forEach(t),Wa=o(yo," and autopopulated for "),ta=a(yo,"CODE",{});var Id=s(ta);Pt=o(Id,"view"),Id.forEach(t),Pl=o(yo,`
                            collections based on the
                            `),Al=a(yo,"CODE",{});var Pp=s(Al);la=o(Pp,"options.query"),Pp.forEach(t),Ga=o(yo,"."),yo.forEach(t),Sl=c(Xs),ol=a(Xs,"P",{});var cu=s(ol);ja=o(cu,`For more info about the supported fields and their options, you could check the
                            `),Ct=a(cu,"STRONG",{});var Po=s(Ct);Ts=o(Po,"pocketbase/models/schema"),Po.forEach(t),Xr=o(cu,`
                            Go sub-package definitions.`),cu.forEach(t),Xs.forEach(t),nu.forEach(t),Od.forEach(t),eo=c(L),Vt=a(L,"TR",{});var qd=s(Vt);ws=a(qd,"TD",{});var Ap=s(ws);Rl=a(Ap,"DIV",{class:!0});var du=s(Rl);Ol=a(du,"SPAN",{class:!0});var iu=s(Ol);to=o(iu,"Optional"),iu.forEach(t),Sa=c(du),nl=a(du,"SPAN",{class:!0});var Sp=s(nl);Vl=o(Sp,"system"),Sp.forEach(t),du.forEach(t),Ap.forEach(t),Bl=c(qd),cl=a(qd,"TD",{});var Cd=s(cl);Ua=a(Cd,"SPAN",{class:!0});var Rp=s(Ua);tr=o(Rp,"Boolean"),Rp.forEach(t),Cd.forEach(t),dl=c(qd),vl=a(qd,"TD",{});var Vd=s(vl);il=o(Vd,"Marks the collection as "),za=a(Vd,"EM",{});var Op=s(za);Ya=o(Op,'"system"'),Op.forEach(t),Ra=o(Vd,", aka. cannot be renamed or deleted."),Vd.forEach(t),qd.forEach(t),Bt=c(L),fl=a(L,"TR",{});var Bd=s(fl);Qa=a(Bd,"TD",{});var kp=s(Qa);ml=a(kp,"DIV",{class:!0});var fu=s(ml);Ds=a(fu,"SPAN",{class:!0});var hu=s(Ds);$s=o(hu,"Optional"),hu.forEach(t),Vo=c(fu),D=a(fu,"SPAN",{class:!0});var Np=s(D);q=o(Np,"listRule"),Np.forEach(t),fu.forEach(t),kp.forEach(t),Be=c(Bd),Oa=a(Bd,"TD",{});var Md=s(Oa);Ml=a(Md,"SPAN",{class:!0});var xp=s(Ml);ys=o(xp,fc),xp.forEach(t),Md.forEach(t),lo=c(Bd),Ll=a(Bd,"TD",{});var Kr=s(Ll);lr=o(Kr,"API "),Hl=a(Kr,"EM",{});var Ip=s(Hl);hc=o(Ip,"List"),Ip.forEach(t),Ka=o(Kr,` action rule.
                    `),Bo=a(Kr,"BR",{}),Fl=c(Kr),ka=a(Kr,"EM",{class:!0});var uu=s(ka);Ut=o(uu,`Check
                        `),Wl=a(uu,"A",{href:!0});var qp=s(Wl);Mo=o(qp,"Rules/Filters syntax guide"),qp.forEach(t),Lo=o(uu,`
                        for more details.`),uu.forEach(t),Kr.forEach(t),Bd.forEach(t),Ho=c(L),Mt=a(L,"TR",{});var Ld=s(Mt);ar=a(Ld,"TD",{});var lc=s(ar);zt=a(lc,"DIV",{class:!0});var pu=s(zt);Ps=a(pu,"SPAN",{class:!0});var vu=s(Ps);Fo=o(vu,"Optional"),vu.forEach(t),Wo=c(pu),Zt=a(pu,"SPAN",{class:!0});var Cp=s(Zt);sr=o(Cp,"viewRule"),Cp.forEach(t),pu.forEach(t),lc.forEach(t),_l=c(Ld),Na=a(Ld,"TD",{});var Hd=s(Na);As=a(Hd,"SPAN",{class:!0});var Vp=s(As);Ss=o(Vp,uc),Vp.forEach(t),Hd.forEach(t),aa=c(Ld),El=a(Ld,"TD",{});var Zr=s(El);rr=o(Zr,"API "),bl=a(Zr,"EM",{});var Bp=s(bl);pc=o(Bp,"View"),Bp.forEach(t),Go=o(Zr,` action rule.
                    `),Et=a(Zr,"BR",{}),Gl=c(Zr),xa=a(Zr,"EM",{class:!0});var mu=s(xa);or=o(mu,`Check
                        `),Rs=a(mu,"A",{href:!0});var Mp=s(Rs);jo=o(Mp,"Rules/Filters syntax guide"),Mp.forEach(t),Uo=o(mu,`
                        for more details.`),mu.forEach(t),Zr.forEach(t),Ld.forEach(t),zo=c(L),Jt=a(L,"TR",{});var Fd=s(Jt);sa=a(Fd,"TD",{});var ac=s(sa);kl=a(ac,"DIV",{class:!0});var _u=s(kl);Os=a(_u,"SPAN",{class:!0});var Eu=s(Os);Yo=o(Eu,"Optional"),Eu.forEach(t),Qo=c(_u),$t=a(_u,"SPAN",{class:!0});var Lp=s($t);nr=o(Lp,"createRule"),Lp.forEach(t),_u.forEach(t),ac.forEach(t),Xe=c(Fd),Ia=a(Fd,"TD",{});var Wd=s(Ia);ks=a(Wd,"SPAN",{class:!0});var Hp=s(ks);Ns=o(Hp,vc),Hp.forEach(t),Wd.forEach(t),Ko=c(Fd),Za=a(Fd,"TD",{});var Gd=s(Za);gl=a(Gd,"P",{});var sc=s(gl);xs=o(sc,"API "),Is=a(sc,"EM",{});var Fp=s(Is);Zo=o(Fp,"Create"),Fp.forEach(t),Jo=o(sc,` action rule.
                        `),Tl=a(sc,"BR",{}),Ja=c(sc),cr=a(sc,"EM",{class:!0});var bu=s(cr);mc=o(bu,`Check
                            `),Xo=a(bu,"A",{href:!0});var Wp=s(Xo);Zi=o(Wp,"Rules/Filters syntax guide"),Wp.forEach(t),Ji=o(bu,`
                            for more details.`),bu.forEach(t),sc.forEach(t),Xi=c(Gd),Nl=a(Gd,"P",{});var Ao=s(Nl);ef=o(Ao,"This rule must be "),dr=a(Ao,"CODE",{});var rc=s(dr);tf=o(rc,"null"),rc.forEach(t),lf=o(Ao," for "),_c=a(Ao,"CODE",{});var Gp=s(_c);qs=o(Gp,"view"),Gp.forEach(t),af=o(Ao," collections."),Ao.forEach(t),Gd.forEach(t),Fd.forEach(t),Ec=c(L),Cs=a(L,"TR",{});var So=s(Cs);bc=a(So,"TD",{});var jp=s(bc);Xa=a(jp,"DIV",{class:!0});var Ro=s(Xa);en=a(Ro,"SPAN",{class:!0});var Up=s(en);sf=o(Up,"Optional"),Up.forEach(t),rf=c(Ro),ra=a(Ro,"SPAN",{class:!0});var zp=s(ra);gc=o(zp,"updateRule"),zp.forEach(t),Ro.forEach(t),jp.forEach(t),ir=c(So),fr=a(So,"TD",{});var jd=s(fr);tn=a(jd,"SPAN",{class:!0});var Yp=s(tn);ln=o(Yp,Vu),Yp.forEach(t),jd.forEach(t),of=c(So),ao=a(So,"TD",{});var Ud=s(ao);oa=a(Ud,"P",{});var oc=s(oa);an=o(oc,"API "),Hi=a(oc,"EM",{});var Qp=s(Hi);nf=o(Qp,"Update"),Qp.forEach(t),cf=o(oc,` action rule.
                        `),so=a(oc,"BR",{}),es=c(oc),hr=a(oc,"EM",{class:!0});var gu=s(hr);Tc=o(gu,`Check
                            `),sn=a(gu,"A",{href:!0});var Kp=s(sn);df=o(Kp,"Rules/Filters syntax guide"),Kp.forEach(t),ff=o(gu,`
                            for more details.`),gu.forEach(t),oc.forEach(t),hf=c(Ud),xl=a(Ud,"P",{});var Oo=s(xl);uf=o(Oo,"This rule must be "),ur=a(Oo,"CODE",{});var nc=s(ur);pf=o(nc,"null"),nc.forEach(t),vf=o(Oo," for "),wc=a(Oo,"CODE",{});var Zp=s(wc);Vs=o(Zp,"view"),Zp.forEach(t),mf=o(Oo," collections."),Oo.forEach(t),Ud.forEach(t),So.forEach(t),Dc=c(L),Bs=a(L,"TR",{});var ko=s(Bs);$c=a(ko,"TD",{});var Jp=s($c);ts=a(Jp,"DIV",{class:!0});var No=s(ts);rn=a(No,"SPAN",{class:!0});var Xp=s(rn);_f=o(Xp,"Optional"),Xp.forEach(t),Ef=c(No),na=a(No,"SPAN",{class:!0});var ev=s(na);yc=o(ev,"deleteRule"),ev.forEach(t),No.forEach(t),Jp.forEach(t),pr=c(ko),vr=a(ko,"TD",{});var zd=s(vr);on=a(zd,"SPAN",{class:!0});var tv=s(on);nn=o(tv,Bu),tv.forEach(t),zd.forEach(t),bf=c(ko),ro=a(ko,"TD",{});var Yd=s(ro);ca=a(Yd,"P",{});var cc=s(ca);cn=o(cc,"API "),Fi=a(cc,"EM",{});var lv=s(Fi);gf=o(lv,"Delete"),lv.forEach(t),Tf=o(cc,` action rule.
                        `),oo=a(cc,"BR",{}),ls=c(cc),mr=a(cc,"EM",{class:!0});var Tu=s(mr);Pc=o(Tu,`Check
                            `),dn=a(Tu,"A",{href:!0});var av=s(dn);wf=o(av,"Rules/Filters syntax guide"),av.forEach(t),Df=o(Tu,`
                            for more details.`),Tu.forEach(t),cc.forEach(t),$f=c(Yd),Il=a(Yd,"P",{});var xo=s(Il);yf=o(xo,"This rule must be "),_r=a(xo,"CODE",{});var dc=s(_r);Pf=o(dc,"null"),dc.forEach(t),Af=o(xo," for "),Ac=a(xo,"CODE",{});var sv=s(Ac);Ms=o(sv,"view"),sv.forEach(t),Sf=o(xo," collections."),xo.forEach(t),Yd.forEach(t),ko.forEach(t),Sc=c(L),Ls=a(L,"TR",{});var Io=s(Ls);Rc=a(Io,"TD",{});var rv=s(Rc);as=a(rv,"DIV",{class:!0});var qo=s(as);fn=a(qo,"SPAN",{class:!0});var ov=s(fn);Rf=o(ov,"Optional"),ov.forEach(t),Of=c(qo),da=a(qo,"SPAN",{class:!0});var nv=s(da);Oc=o(nv,"indexes"),nv.forEach(t),qo.forEach(t),rv.forEach(t),Er=c(Io),br=a(Io,"TD",{});var Qd=s(br);hn=a(Qd,"SPAN",{class:!0});var cv=s(hn);un=o(cv,Mu),cv.forEach(t),Qd.forEach(t),kf=c(Io),no=a(Io,"TD",{});var Kd=s(no);co=a(Kd,"P",{});var dv=s(co);pn=o(dv,"The collection indexes and unique constriants."),dv.forEach(t),Lu=c(Kd),io=a(Kd,"P",{});var wu=s(io);Nf=o(wu,"Note that "),Hs=a(wu,"CODE",{});var iv=s(Hs);kc=o(iv,"view"),iv.forEach(t),xf=o(wu," collections don't support indexes."),wu.forEach(t),Kd.forEach(t),Io.forEach(t),If=c(L),Fs=a(L,"TR",{});var fv=s(Fs);fo=a(fv,"TD",{colspan:!0,class:!0});var Du=s(fo);Ws=a(Du,"STRONG",{});var $u=s(Ws);qf=o($u,"options ("),Nc=a($u,"EM",{});var yu=s(Nc);Cf=o(yu,"view"),yu.forEach(t),xc=o($u,")"),$u.forEach(t),Du.forEach(t),fv.forEach(t),ho=c(L),jl=a(L,"TR",{});var Zd=s(jl);vn=a(Zd,"TD",{class:!0});var hv=s(vn);ia=a(hv,"DIV",{class:!0});var Jd=s(ia);mn=a(Jd,"SPAN",{class:!0});var Pu=s(mn);Vf=o(Pu,"├─"),Pu.forEach(t),Bf=c(Jd),fa=a(Jd,"SPAN",{class:!0});var uv=s(fa);_n=o(uv,"Required"),uv.forEach(t),ss=c(Jd),gr=a(Jd,"EM",{});var Xd=s(gr);Mf=o(Xd,"query"),Xd.forEach(t),Jd.forEach(t),hv.forEach(t),Lf=c(Zd),Tr=a(Zd,"TD",{});var pv=s(Tr);En=a(pv,"SPAN",{class:!0});var ei=s(En);Hf=o(ei,"null|String"),ei.forEach(t),pv.forEach(t),Ic=c(Zd),uo=a(Zd,"TD",{});var Au=s(uo);Ff=o(Au,"The SQL "),po=a(Au,"CODE",{});var vv=s(po);bn=o(vv,"SELECT"),vv.forEach(t),Wf=o(Au,` statement that will be used to create the underlying view of the
                    collection.`),Au.forEach(t),Zd.forEach(t),Gf=c(L),Gs=a(L,"TR",{});var mv=s(Gs);vo=a(mv,"TD",{colspan:!0,class:!0});var _v=s(vo);js=a(_v,"STRONG",{});var Su=s(js);jf=o(Su,"options ("),qc=a(Su,"EM",{});var Ru=s(qc);Uf=o(Ru,"auth"),Ru.forEach(t),Cc=o(Su,")"),Su.forEach(t),_v.forEach(t),mv.forEach(t),mo=c(L),Ul=a(L,"TR",{});var ti=s(Ul);gn=a(ti,"TD",{class:!0});var Ev=s(gn);ha=a(Ev,"DIV",{class:!0});var li=s(ha);Tn=a(li,"SPAN",{class:!0});var Ou=s(Tn);zf=o(Ou,"├─"),Ou.forEach(t),Yf=c(li),ua=a(li,"SPAN",{class:!0});var bv=s(ua);wn=o(bv,"Optional"),bv.forEach(t),rs=c(li),wr=a(li,"EM",{});var ai=s(wr);Qf=o(ai,"manageRule"),ai.forEach(t),li.forEach(t),Ev.forEach(t),Kf=c(ti),Dr=a(ti,"TD",{});var gv=s(Dr);Dn=a(gv,"SPAN",{class:!0});var si=s(Dn);Zf=o(si,"null|String"),si.forEach(t),gv.forEach(t),Vc=c(ti),Us=a(ti,"TD",{});var ri=s(Us);Jf=o(ri,`API rule that gives admin-like permissions to allow fully managing the auth record(s), eg.
                    changing the password without requiring to enter the old one, directly updating the
                    verified state or email, etc. This rule is executed in addition to the
                    `),_o=a(ri,"CODE",{});var Tv=s(_o);$n=o(Tv,"createRule"),Tv.forEach(t),Xf=o(ri," and "),Bc=a(ri,"CODE",{});var wv=s(Bc);zs=o(wv,"updateRule"),wv.forEach(t),eh=o(ri,"."),ri.forEach(t),ti.forEach(t),Mc=c(L),Ys=a(L,"TR",{});var oi=s(Ys);yn=a(oi,"TD",{class:!0});var Dv=s(yn);pa=a(Dv,"DIV",{class:!0});var er=s(pa);Pn=a(er,"SPAN",{class:!0});var $v=s(Pn);th=o($v,"├─"),$v.forEach(t),lh=c(er),va=a(er,"SPAN",{class:!0});var yv=s(va);An=o(yv,"Optional"),yv.forEach(t),os=c(er),$r=a(er,"EM",{});var ni=s($r);ah=o(ni,"allowOAuth2Auth"),ni.forEach(t),er.forEach(t),Dv.forEach(t),sh=c(oi),yr=a(oi,"TD",{});var Pv=s(yr);Sn=a(Pv,"SPAN",{class:!0});var ci=s(Sn);rh=o(ci,"Boolean"),ci.forEach(t),Pv.forEach(t),Lc=c(oi),Hc=a(oi,"TD",{});var Av=s(Hc);oh=o(Av,"Whether to allow OAuth2 sign-in/sign-up for the auth collection."),Av.forEach(t),oi.forEach(t),Fc=c(L),ma=a(L,"TR",{});var di=s(ma);Rn=a(di,"TD",{class:!0});var Sv=s(Rn);ns=a(Sv,"DIV",{class:!0});var ii=s(ns);Pr=a(ii,"SPAN",{class:!0});var Rv=s(Pr);nh=o(Rv,"├─"),Rv.forEach(t),ch=c(ii),_a=a(ii,"SPAN",{class:!0});var Ov=s(_a);On=o(Ov,"Optional"),Ov.forEach(t),cs=c(ii),Ar=a(ii,"EM",{});var fi=s(Ar);dh=o(fi,"allowUsernameAuth"),fi.forEach(t),ii.forEach(t),Sv.forEach(t),ih=c(di),Sr=a(di,"TD",{});var kv=s(Sr);kn=a(kv,"SPAN",{class:!0});var hi=s(kn);fh=o(hi,"Boolean"),hi.forEach(t),kv.forEach(t),Wc=c(di),Gc=a(di,"TD",{});var Nv=s(Gc);hh=o(Nv,"Whether to allow username + password authentication for the auth collection."),Nv.forEach(t),di.forEach(t),jc=c(L),Ea=a(L,"TR",{});var ui=s(Ea);Nn=a(ui,"TD",{class:!0});var xv=s(Nn);ds=a(xv,"DIV",{class:!0});var pi=s(ds);Rr=a(pi,"SPAN",{class:!0});var Iv=s(Rr);uh=o(Iv,"├─"),Iv.forEach(t),ph=c(pi),ba=a(pi,"SPAN",{class:!0});var qv=s(ba);xn=o(qv,"Optional"),qv.forEach(t),is=c(pi),Or=a(pi,"EM",{});var vi=s(Or);vh=o(vi,"allowEmailAuth"),vi.forEach(t),pi.forEach(t),xv.forEach(t),mh=c(ui),kr=a(ui,"TD",{});var Cv=s(kr);In=a(Cv,"SPAN",{class:!0});var mi=s(In);_h=o(mi,"Boolean"),mi.forEach(t),Cv.forEach(t),Uc=c(ui),zc=a(ui,"TD",{});var Vv=s(zc);Eh=o(Vv,"Whether to allow email + password authentication for the auth collection."),Vv.forEach(t),ui.forEach(t),Yc=c(L),ga=a(L,"TR",{});var _i=s(ga);qn=a(_i,"TD",{class:!0});var Bv=s(qn);fs=a(Bv,"DIV",{class:!0});var Ei=s(fs);Nr=a(Ei,"SPAN",{class:!0});var Mv=s(Nr);bh=o(Mv,"├─"),Mv.forEach(t),gh=c(Ei),Ta=a(Ei,"SPAN",{class:!0});var Lv=s(Ta);Cn=o(Lv,"Optional"),Lv.forEach(t),hs=c(Ei),xr=a(Ei,"EM",{});var bi=s(xr);Th=o(bi,"requireEmail"),bi.forEach(t),Ei.forEach(t),Bv.forEach(t),wh=c(_i),Ir=a(_i,"TD",{});var Hv=s(Ir);Vn=a(Hv,"SPAN",{class:!0});var gi=s(Vn);Dh=o(gi,"Boolean"),gi.forEach(t),Hv.forEach(t),Qc=c(_i),Kc=a(_i,"TD",{});var Fv=s(Kc);$h=o(Fv,"Whether to always require email address when creating or updating auth records."),Fv.forEach(t),_i.forEach(t),Zc=c(L),wa=a(L,"TR",{});var Ti=s(wa);Bn=a(Ti,"TD",{class:!0});var Wv=s(Bn);us=a(Wv,"DIV",{class:!0});var wi=s(us);qr=a(wi,"SPAN",{class:!0});var Gv=s(qr);yh=o(Gv,"├─"),Gv.forEach(t),Ph=c(wi),Da=a(wi,"SPAN",{class:!0});var jv=s(Da);Mn=o(jv,"Optional"),jv.forEach(t),ps=c(wi),Cr=a(wi,"EM",{});var Di=s(Cr);Ah=o(Di,"exceptEmailDomains"),Di.forEach(t),wi.forEach(t),Wv.forEach(t),Sh=c(Ti),Vr=a(Ti,"TD",{});var Uv=s(Vr);Ln=a(Uv,"SPAN",{class:!0});var $i=s(Ln);Jc=o($i,Hu),$i.forEach(t),Uv.forEach(t),Rh=c(Ti),Xc=a(Ti,"TD",{});var zv=s(Xc);ed=o(zv,"Whether to allow sign-ups only with the email domains not listed in the specified list."),zv.forEach(t),Ti.forEach(t),Hn=c(L),Br=a(L,"TR",{});var yi=s(Br);Fn=a(yi,"TD",{class:!0});var Yv=s(Fn);vs=a(Yv,"DIV",{class:!0});var Pi=s(vs);Mr=a(Pi,"SPAN",{class:!0});var Qv=s(Mr);Oh=o(Qv,"├─"),Qv.forEach(t),kh=c(Pi),$a=a(Pi,"SPAN",{class:!0});var Kv=s($a);Wn=o(Kv,"Optional"),Kv.forEach(t),ms=c(Pi),Lr=a(Pi,"EM",{});var Ai=s(Lr);Nh=o(Ai,"onlyEmailDomains"),Ai.forEach(t),Pi.forEach(t),Yv.forEach(t),xh=c(yi),Hr=a(yi,"TD",{});var Zv=s(Hr);Gn=a(Zv,"SPAN",{class:!0});var Si=s(Gn);td=o(Si,Fu),Si.forEach(t),Zv.forEach(t),Ih=c(yi),ld=a(yi,"TD",{});var Jv=s(ld);ad=o(Jv,"Whether to allow sign-ups only with the email domains listed in the specified list."),Jv.forEach(t),yi.forEach(t),jn=c(L),Fr=a(L,"TR",{});var Ri=s(Fr);Un=a(Ri,"TD",{class:!0});var Xv=s(Un);_s=a(Xv,"DIV",{class:!0});var Oi=s(_s);Wr=a(Oi,"SPAN",{class:!0});var e1=s(Wr);qh=o(e1,"├─"),e1.forEach(t),Ch=c(Oi),ya=a(Oi,"SPAN",{class:!0});var t1=s(ya);zn=o(t1,"Optional"),t1.forEach(t),Es=c(Oi),Gr=a(Oi,"EM",{});var ki=s(Gr);Vh=o(ki,"onlyVerified"),ki.forEach(t),Oi.forEach(t),Xv.forEach(t),Bh=c(Ri),jr=a(Ri,"TD",{});var l1=s(jr);Yn=a(l1,"SPAN",{class:!0});var Ni=s(Yn);Mh=o(Ni,"Boolean"),Ni.forEach(t),l1.forEach(t),sd=c(Ri),Qs=a(Ri,"TD",{});var xi=s(Qs);Lh=o(xi,`If enabled, it will return 403 for any new auth request performed by unverified user.
                    `),rd=a(xi,"BR",{}),Qn=o(xi,`
                    Note that when authenticating with OAuth2 for the first time, the user would be created with
                    `),od=a(xi,"CODE",{});var a1=s(od);Hh=o(a1,"verified=true"),a1.forEach(t),nd=o(xi," even if the provider doesn't return an email."),xi.forEach(t),Ri.forEach(t),Fh=c(L),Ks=a(L,"TR",{});var Ii=s(Ks);Pa=a(Ii,"TD",{class:!0});var s1=s(Pa);zl=a(s1,"DIV",{class:!0});var qi=s(zl);Yl=a(qi,"SPAN",{class:!0});var r1=s(Yl);Kn=o(r1,"└─"),r1.forEach(t),Wh=c(qi),Zn=a(qi,"SPAN",{class:!0});var Ci=s(Zn);Jn=o(Ci,"Optional"),Ci.forEach(t),Gh=c(qi),cd=a(qi,"EM",{});var o1=s(cd);dd=o(o1,"minPasswordLength"),o1.forEach(t),qi.forEach(t),s1.forEach(t),jh=c(Ii),id=a(Ii,"TD",{});var Vi=s(id);Ur=a(Vi,"SPAN",{class:!0});var n1=s(Ur);Xn=o(n1,"Boolean"),n1.forEach(t),Vi.forEach(t),Uh=c(Ii),fd=a(Ii,"TD",{});var c1=s(fd);hd=o(c1,"The minimum required password length for new auth records."),c1.forEach(t),Ii.forEach(t),L.forEach(t),tu.forEach(t),Wi=c(y),Aa=a(y,"SMALL",{class:!0});var Bi=s(Aa);qa=o(Bi,"Body parameters could be sent as "),ud=a(Bi,"EM",{});var d1=s(ud);pd=o(d1,"JSON"),d1.forEach(t),zh=o(Bi,` or
        `),vd=a(Bi,"EM",{});var i1=s(vd);md=o(i1,"multipart/form-data"),i1.forEach(t),Yh=o(Bi,"."),Bi.forEach(t),Gi=c(y),zr=a(y,"DIV",{class:!0});var f1=s(zr);Eo=o(f1,"Query parameters"),f1.forEach(t),ji=c(y),bs=a(y,"TABLE",{class:!0});var Co=s(bs);Ca=a(Co,"THEAD",{});var h1=s(Ca);Va=a(h1,"TR",{});var Mi=s(Va);Ba=a(Mi,"TH",{});var u1=s(Ba);_d=o(u1,"Param"),u1.forEach(t),Qh=c(Mi),Ed=a(Mi,"TH",{});var ku=s(Ed);bd=o(ku,"Type"),ku.forEach(t),Kh=c(Mi),ec=a(Mi,"TH",{width:!0});var p1=s(ec);tc=o(p1,"Description"),p1.forEach(t),Mi.forEach(t),h1.forEach(t),Zh=c(Co),gd=a(Co,"TBODY",{});var Li=s(gd);ke(Zs.$$.fragment,Li),Li.forEach(t),Co.forEach(t),Yr=c(y),Qr=a(y,"DIV",{class:!0});var v1=s(Qr);bo=o(v1,"Responses"),v1.forEach(t),Ui=c(y),gs=a(y,"DIV",{class:!0});var Nu=s(gs);Ql=a(Nu,"DIV",{class:!0});var m1=s(Ql);for(let ic=0;ic<hl.length;ic+=1)hl[ic].l(m1);m1.forEach(t),Wu=c(Nu),go=a(Nu,"DIV",{class:!0});var _1=s(go);for(let ic=0;ic<Lt.length;ic+=1)Lt[ic].l(_1);_1.forEach(t),Nu.forEach(t),this.h()},h(){d(i,"class","content m-b-sm"),d(W,"class","label label-primary"),d(I,"class","content"),d(pe,"class","txt-hint auth-header"),d(_,"class","api-route alert alert-success"),d(be,"class","section-title"),d(qe,"width","50%"),d(se,"class","label label-warning"),d(B,"class","inline-flex"),d(_e,"class","label"),d(lt,"class","label label-success"),d(at,"class","txt"),d(V,"class","inline-flex"),d(R,"class","label"),d(Pe,"class","label label-success"),d(Ae,"class","txt"),d(ue,"class","inline-flex"),d(ot,"class","label"),d(Ft,"class","label label-info"),d(T,"class","txt"),d(_t,"class","inline-flex"),d(ll,"class","label"),d(Ze,"class","content"),d(Ol,"class","label label-warning"),d(nl,"class","txt"),d(Rl,"class","inline-flex"),d(Ua,"class","label"),d(Ds,"class","label label-warning"),d(D,"class","txt"),d(ml,"class","inline-flex flex-nowrap"),d(Ml,"class","label"),d(Wl,"href","/docs/api-rules-and-filters/"),d(ka,"class","txt-hint"),d(Ps,"class","label label-warning"),d(Zt,"class","txt"),d(zt,"class","inline-flex flex-nowrap"),d(As,"class","label"),d(Rs,"href","/docs/api-rules-and-filters/"),d(xa,"class","txt-hint"),d(Os,"class","label label-warning"),d($t,"class","txt"),d(kl,"class","inline-flex flex-nowrap"),d(ks,"class","label"),d(Xo,"href","/docs/api-rules-and-filters/"),d(cr,"class","txt-hint"),d(en,"class","label label-warning"),d(ra,"class","txt"),d(Xa,"class","inline-flex flex-nowrap"),d(tn,"class","label"),d(sn,"href","/docs/api-rules-and-filters/"),d(hr,"class","txt-hint"),d(rn,"class","label label-warning"),d(na,"class","txt"),d(ts,"class","inline-flex flex-nowrap"),d(on,"class","label"),d(dn,"href","/docs/api-rules-and-filters/"),d(mr,"class","txt-hint"),d(fn,"class","label label-warning"),d(da,"class","txt"),d(as,"class","inline-flex flex-nowrap"),d(hn,"class","label"),d(fo,"colspan","3"),d(fo,"class","bg-info-alt"),d(mn,"class","txt"),d(fa,"class","label label-success"),d(ia,"class","inline-flex flex-nowrap"),d(vn,"class","min-width"),d(En,"class","label"),d(vo,"colspan","3"),d(vo,"class","bg-info-alt"),d(Tn,"class","txt"),d(ua,"class","label label-warning"),d(ha,"class","inline-flex flex-nowrap"),d(gn,"class","min-width"),d(Dn,"class","label"),d(Pn,"class","txt"),d(va,"class","label label-warning"),d(pa,"class","inline-flex flex-nowrap"),d(yn,"class","min-width"),d(Sn,"class","label"),d(Pr,"class","txt"),d(_a,"class","label label-warning"),d(ns,"class","inline-flex flex-nowrap"),d(Rn,"class","min-width"),d(kn,"class","label"),d(Rr,"class","txt"),d(ba,"class","label label-warning"),d(ds,"class","inline-flex flex-nowrap"),d(Nn,"class","min-width"),d(In,"class","label"),d(Nr,"class","txt"),d(Ta,"class","label label-warning"),d(fs,"class","inline-flex flex-nowrap"),d(qn,"class","min-width"),d(Vn,"class","label"),d(qr,"class","txt"),d(Da,"class","label label-warning"),d(us,"class","inline-flex flex-nowrap"),d(Bn,"class","min-width"),d(Ln,"class","label"),d(Mr,"class","txt"),d($a,"class","label label-warning"),d(vs,"class","inline-flex flex-nowrap"),d(Fn,"class","min-width"),d(Gn,"class","label"),d(Wr,"class","txt"),d(ya,"class","label label-warning"),d(_s,"class","inline-flex flex-nowrap"),d(Un,"class","min-width"),d(Yn,"class","label"),d(Yl,"class","txt"),d(Zn,"class","label label-warning"),d(zl,"class","inline-flex flex-nowrap"),d(Pa,"class","min-width"),d(Ur,"class","label"),d(X,"class","table-compact table-border"),d(Aa,"class","block txt-hint m-t-10 m-b-base"),d(zr,"class","section-title"),d(ec,"width","50%"),d(bs,"class","table-compact table-border m-b-base"),d(Qr,"class","section-title"),d(Ql,"class","tabs-header compact left"),d(go,"class","tabs-content"),d(gs,"class","tabs")},m(y,u){g(y,i,u),e(i,f),e(f,h),e(i,v),e(i,m),e(m,p),g(y,$,u),Ne(x,y,u),g(y,A,u),g(y,_,u),e(_,W),e(W,we),e(_,ce),e(_,I),e(I,le),e(_,We),e(_,pe),e(pe,St),e(pe,J),e(J,ct),g(y,Ie,u),g(y,be,u),e(be,pt),g(y,ae,u),g(y,X,u),e(X,Me),e(Me,C),e(C,ee),e(ee,j),e(C,ie),e(C,Ge),e(Ge,Rt),e(C,je),e(C,qe),e(qe,Ot),e(X,De),e(X,P),e(P,fe),e(fe,ve),e(ve,B),e(B,se),e(se,dt),e(B,Ce),e(B,me),e(me,$e),e(fe,it),e(fe,et),e(et,_e),e(_e,kt),e(fe,tt),e(fe,U),e(U,Le),e(Le,Ue),e(U,Y),e(U,ge),e(U,G),e(P,ze),e(P,he),e(he,Ve),e(Ve,V),e(V,lt),e(lt,vt),e(V,He),e(V,at),e(at,bt),e(he,S),e(he,b),e(b,R),e(R,H),e(he,ft),e(he,Q),e(Q,st),e(P,ye),e(P,te),e(te,Te),e(Te,ue),e(ue,Pe),e(Pe,re),e(ue,Nt),e(ue,Ae),e(Ae,xt),e(te,rt),e(te,K),e(K,ot),e(ot,E),e(te,k),e(te,M),e(M,It),e(M,Fe),e(Fe,Yt),e(M,Ye),e(M,Qe),e(Qe,z),e(M,Ke),e(M,mt),e(mt,Se),e(M,ht),e(M,gt),e(gt,el),e(M,Ht),e(P,Re),e(P,Tt),e(Tt,wt),e(wt,_t),e(_t,Ft),e(Ft,tl),e(_t,Cl),e(_t,T),e(T,N),e(Tt,Z),e(Tt,nt),e(nt,ll),e(ll,Qt),e(Tt,Wt),e(Tt,ul),e(ul,Ze),e(Ze,Dt),e(Dt,al),e(Ze,pl),e(Ze,Ee),e(Ee,qt),e(Ee,ut),e(ut,Zl),e(Ee,Jl),e(Ee,Kt),e(Kt,yt),e(Ee,La),e(Ze,sl),e(Ze,Je),e(Je,Xl),e(Je,wl),e(wl,Ha),e(Je,Dl),e(Je,rl),e(rl,de),e(Je,$l),e(Ze,ea),e(Ze,Gt),e(Gt,Fa),e(Gt,yl),e(yl,jt),e(Gt,Wa),e(Gt,ta),e(ta,Pt),e(Gt,Pl),e(Gt,Al),e(Al,la),e(Gt,Ga),e(Ze,Sl),e(Ze,ol),e(ol,ja),e(ol,Ct),e(Ct,Ts),e(ol,Xr),e(P,eo),e(P,Vt),e(Vt,ws),e(ws,Rl),e(Rl,Ol),e(Ol,to),e(Rl,Sa),e(Rl,nl),e(nl,Vl),e(Vt,Bl),e(Vt,cl),e(cl,Ua),e(Ua,tr),e(Vt,dl),e(Vt,vl),e(vl,il),e(vl,za),e(za,Ya),e(vl,Ra),e(P,Bt),e(P,fl),e(fl,Qa),e(Qa,ml),e(ml,Ds),e(Ds,$s),e(ml,Vo),e(ml,D),e(D,q),e(fl,Be),e(fl,Oa),e(Oa,Ml),e(Ml,ys),e(fl,lo),e(fl,Ll),e(Ll,lr),e(Ll,Hl),e(Hl,hc),e(Ll,Ka),e(Ll,Bo),e(Ll,Fl),e(Ll,ka),e(ka,Ut),e(ka,Wl),e(Wl,Mo),e(ka,Lo),e(P,Ho),e(P,Mt),e(Mt,ar),e(ar,zt),e(zt,Ps),e(Ps,Fo),e(zt,Wo),e(zt,Zt),e(Zt,sr),e(Mt,_l),e(Mt,Na),e(Na,As),e(As,Ss),e(Mt,aa),e(Mt,El),e(El,rr),e(El,bl),e(bl,pc),e(El,Go),e(El,Et),e(El,Gl),e(El,xa),e(xa,or),e(xa,Rs),e(Rs,jo),e(xa,Uo),e(P,zo),e(P,Jt),e(Jt,sa),e(sa,kl),e(kl,Os),e(Os,Yo),e(kl,Qo),e(kl,$t),e($t,nr),e(Jt,Xe),e(Jt,Ia),e(Ia,ks),e(ks,Ns),e(Jt,Ko),e(Jt,Za),e(Za,gl),e(gl,xs),e(gl,Is),e(Is,Zo),e(gl,Jo),e(gl,Tl),e(gl,Ja),e(gl,cr),e(cr,mc),e(cr,Xo),e(Xo,Zi),e(cr,Ji),e(Za,Xi),e(Za,Nl),e(Nl,ef),e(Nl,dr),e(dr,tf),e(Nl,lf),e(Nl,_c),e(_c,qs),e(Nl,af),e(P,Ec),e(P,Cs),e(Cs,bc),e(bc,Xa),e(Xa,en),e(en,sf),e(Xa,rf),e(Xa,ra),e(ra,gc),e(Cs,ir),e(Cs,fr),e(fr,tn),e(tn,ln),e(Cs,of),e(Cs,ao),e(ao,oa),e(oa,an),e(oa,Hi),e(Hi,nf),e(oa,cf),e(oa,so),e(oa,es),e(oa,hr),e(hr,Tc),e(hr,sn),e(sn,df),e(hr,ff),e(ao,hf),e(ao,xl),e(xl,uf),e(xl,ur),e(ur,pf),e(xl,vf),e(xl,wc),e(wc,Vs),e(xl,mf),e(P,Dc),e(P,Bs),e(Bs,$c),e($c,ts),e(ts,rn),e(rn,_f),e(ts,Ef),e(ts,na),e(na,yc),e(Bs,pr),e(Bs,vr),e(vr,on),e(on,nn),e(Bs,bf),e(Bs,ro),e(ro,ca),e(ca,cn),e(ca,Fi),e(Fi,gf),e(ca,Tf),e(ca,oo),e(ca,ls),e(ca,mr),e(mr,Pc),e(mr,dn),e(dn,wf),e(mr,Df),e(ro,$f),e(ro,Il),e(Il,yf),e(Il,_r),e(_r,Pf),e(Il,Af),e(Il,Ac),e(Ac,Ms),e(Il,Sf),e(P,Sc),e(P,Ls),e(Ls,Rc),e(Rc,as),e(as,fn),e(fn,Rf),e(as,Of),e(as,da),e(da,Oc),e(Ls,Er),e(Ls,br),e(br,hn),e(hn,un),e(Ls,kf),e(Ls,no),e(no,co),e(co,pn),e(no,Lu),e(no,io),e(io,Nf),e(io,Hs),e(Hs,kc),e(io,xf),e(P,If),e(P,Fs),e(Fs,fo),e(fo,Ws),e(Ws,qf),e(Ws,Nc),e(Nc,Cf),e(Ws,xc),e(P,ho),e(P,jl),e(jl,vn),e(vn,ia),e(ia,mn),e(mn,Vf),e(ia,Bf),e(ia,fa),e(fa,_n),e(ia,ss),e(ia,gr),e(gr,Mf),e(jl,Lf),e(jl,Tr),e(Tr,En),e(En,Hf),e(jl,Ic),e(jl,uo),e(uo,Ff),e(uo,po),e(po,bn),e(uo,Wf),e(P,Gf),e(P,Gs),e(Gs,vo),e(vo,js),e(js,jf),e(js,qc),e(qc,Uf),e(js,Cc),e(P,mo),e(P,Ul),e(Ul,gn),e(gn,ha),e(ha,Tn),e(Tn,zf),e(ha,Yf),e(ha,ua),e(ua,wn),e(ha,rs),e(ha,wr),e(wr,Qf),e(Ul,Kf),e(Ul,Dr),e(Dr,Dn),e(Dn,Zf),e(Ul,Vc),e(Ul,Us),e(Us,Jf),e(Us,_o),e(_o,$n),e(Us,Xf),e(Us,Bc),e(Bc,zs),e(Us,eh),e(P,Mc),e(P,Ys),e(Ys,yn),e(yn,pa),e(pa,Pn),e(Pn,th),e(pa,lh),e(pa,va),e(va,An),e(pa,os),e(pa,$r),e($r,ah),e(Ys,sh),e(Ys,yr),e(yr,Sn),e(Sn,rh),e(Ys,Lc),e(Ys,Hc),e(Hc,oh),e(P,Fc),e(P,ma),e(ma,Rn),e(Rn,ns),e(ns,Pr),e(Pr,nh),e(ns,ch),e(ns,_a),e(_a,On),e(ns,cs),e(ns,Ar),e(Ar,dh),e(ma,ih),e(ma,Sr),e(Sr,kn),e(kn,fh),e(ma,Wc),e(ma,Gc),e(Gc,hh),e(P,jc),e(P,Ea),e(Ea,Nn),e(Nn,ds),e(ds,Rr),e(Rr,uh),e(ds,ph),e(ds,ba),e(ba,xn),e(ds,is),e(ds,Or),e(Or,vh),e(Ea,mh),e(Ea,kr),e(kr,In),e(In,_h),e(Ea,Uc),e(Ea,zc),e(zc,Eh),e(P,Yc),e(P,ga),e(ga,qn),e(qn,fs),e(fs,Nr),e(Nr,bh),e(fs,gh),e(fs,Ta),e(Ta,Cn),e(fs,hs),e(fs,xr),e(xr,Th),e(ga,wh),e(ga,Ir),e(Ir,Vn),e(Vn,Dh),e(ga,Qc),e(ga,Kc),e(Kc,$h),e(P,Zc),e(P,wa),e(wa,Bn),e(Bn,us),e(us,qr),e(qr,yh),e(us,Ph),e(us,Da),e(Da,Mn),e(us,ps),e(us,Cr),e(Cr,Ah),e(wa,Sh),e(wa,Vr),e(Vr,Ln),e(Ln,Jc),e(wa,Rh),e(wa,Xc),e(Xc,ed),e(P,Hn),e(P,Br),e(Br,Fn),e(Fn,vs),e(vs,Mr),e(Mr,Oh),e(vs,kh),e(vs,$a),e($a,Wn),e(vs,ms),e(vs,Lr),e(Lr,Nh),e(Br,xh),e(Br,Hr),e(Hr,Gn),e(Gn,td),e(Br,Ih),e(Br,ld),e(ld,ad),e(P,jn),e(P,Fr),e(Fr,Un),e(Un,_s),e(_s,Wr),e(Wr,qh),e(_s,Ch),e(_s,ya),e(ya,zn),e(_s,Es),e(_s,Gr),e(Gr,Vh),e(Fr,Bh),e(Fr,jr),e(jr,Yn),e(Yn,Mh),e(Fr,sd),e(Fr,Qs),e(Qs,Lh),e(Qs,rd),e(Qs,Qn),e(Qs,od),e(od,Hh),e(Qs,nd),e(P,Fh),e(P,Ks),e(Ks,Pa),e(Pa,zl),e(zl,Yl),e(Yl,Kn),e(zl,Wh),e(zl,Zn),e(Zn,Jn),e(zl,Gh),e(zl,cd),e(cd,dd),e(Ks,jh),e(Ks,id),e(id,Ur),e(Ur,Xn),e(Ks,Uh),e(Ks,fd),e(fd,hd),g(y,Wi,u),g(y,Aa,u),e(Aa,qa),e(Aa,ud),e(ud,pd),e(Aa,zh),e(Aa,vd),e(vd,md),e(Aa,Yh),g(y,Gi,u),g(y,zr,u),e(zr,Eo),g(y,ji,u),g(y,bs,u),e(bs,Ca),e(Ca,Va),e(Va,Ba),e(Ba,_d),e(Va,Qh),e(Va,Ed),e(Ed,bd),e(Va,Kh),e(Va,ec),e(ec,tc),e(bs,Zh),e(bs,gd),Ne(Zs,gd,null),g(y,Yr,u),g(y,Qr,u),e(Qr,bo),g(y,Ui,u),g(y,gs,u),e(gs,Ql);for(let O=0;O<hl.length;O+=1)hl[O]&&hl[O].m(Ql,null);e(gs,Wu),e(gs,go);for(let O=0;O<Lt.length;O+=1)Lt[O]&&Lt[O].m(go,null);Jh=!0},p(y,u){u&3&&(Td=y[1],hl=Jr(hl,u,Xh,1,y,Td,Ma,Ql,ju,N1,null,k1)),u&3&&(zi=y[1],Uu(),Lt=Jr(Lt,u,Yi,1,y,zi,ql,go,zu,x1,null,O1),Yu())},i(y){if(!Jh){oe(x.$$.fragment,y),oe(Zs.$$.fragment,y);for(let u=0;u<zi.length;u+=1)oe(Lt[u]);Jh=!0}},o(y){ne(x.$$.fragment,y),ne(Zs.$$.fragment,y);for(let u=0;u<Lt.length;u+=1)ne(Lt[u]);Jh=!1},d(y){y&&t(i),y&&t($),xe(x,y),y&&t(A),y&&t(_),y&&t(Ie),y&&t(be),y&&t(ae),y&&t(X),y&&t(Wi),y&&t(Aa),y&&t(Gi),y&&t(zr),y&&t(ji),y&&t(bs),xe(Zs),y&&t(Yr),y&&t(Qr),y&&t(Ui),y&&t(gs);for(let u=0;u<hl.length;u+=1)hl[u].d();for(let u=0;u<Lt.length;u+=1)Lt[u].d()}}}function sm(w){let i,f;return i=new Ku({props:{single:!0,title:"Create collection",$$slots:{default:[am]},$$scope:{ctx:w}}}),{c(){Oe(i.$$.fragment)},l(h){ke(i.$$.fragment,h)},m(h,v){Ne(i,h,v),f=!0},p(h,[v]){const m={};v&257&&(m.$$scope={dirty:v,ctx:h}),i.$set(m)},i(h){f||(oe(i.$$.fragment,h),f=!0)},o(h){ne(i.$$.fragment,h),f=!1},d(h){xe(i,h)}}}function rm(w,i,f){const h=[{code:200,body:`
                {
                  "id": "d2972397d45614e",
                  "created": "2022-06-22 07:13:00.643Z",
                  "updated": "2022-06-22 07:13:00.643Z",
                  "type": "base",
                  "name": "posts",
                  "system": true,
                  "schema": [
                    {
                      "system": false,
                      "id": "njnkhxa2",
                      "name": "name",
                      "type": "text",
                      "required": false,
                      "unique": false,
                      "options": {
                        "min": null,
                        "max": null,
                        "pattern": ""
                      }
                    },
                    {
                      "system": false,
                      "id": "9gvv0jkj",
                      "name": "avatar",
                      "type": "file",
                      "required": false,
                      "unique": false,
                      "options": {
                        "maxSelect": 1,
                        "maxSize": 5242880,
                        "mimeTypes": [
                          "image/jpg",
                          "image/jpeg",
                          "image/png",
                          "image/svg+xml",
                          "image/gif"
                        ],
                        "thumbs": null
                      }
                    }
                  ],
                  "listRule": "id = @request.user.id",
                  "viewRule": "id = @request.user.id",
                  "createRule": "id = @request.user.id",
                  "updateRule": "id = @request.user.id",
                  "deleteRule": null,
                  "indexes": ["create index name_idx on posts (name)"]
                }
            `},{code:400,body:`
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
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
            `}];let v=h[0].code;return[v,h,p=>f(0,v=p.code)]}class om extends Iu{constructor(i){super(),qu(this,i,rm,sm,Cu,{})}}function I1(w,i,f){const h=w.slice();return h[3]=i[f],h}function q1(w,i,f){const h=w.slice();return h[3]=i[f],h}function C1(w,i){let f,h=i[3].code+"",v,m,p,$;function x(){return i[2](i[3])}return{key:w,first:null,c(){f=l("button"),v=r(h),m=n(),this.h()},l(A){f=a(A,"BUTTON",{class:!0});var _=s(f);v=o(_,h),m=c(_),_.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(A,_){g(A,f,_),e(f,v),e(f,m),p||($=Qu(f,"click",x),p=!0)},p(A,_){i=A,_&3&&At(f,"active",i[0]===i[3].code)},d(A){A&&t(f),p=!1,$()}}}function V1(w,i){let f,h,v,m;return h=new Ki({props:{content:i[3].body}}),{key:w,first:null,c(){f=l("div"),Oe(h.$$.fragment),v=n(),this.h()},l(p){f=a(p,"DIV",{class:!0});var $=s(f);ke(h.$$.fragment,$),v=c($),$.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(p,$){g(p,f,$),Ne(h,f,null),e(f,v),m=!0},p(p,$){i=p,(!m||$&3)&&At(f,"active",i[0]===i[3].code)},i(p){m||(oe(h.$$.fragment,p),m=!0)},o(p){ne(h.$$.fragment,p),m=!1},d(p){p&&t(f),xe(h)}}}function nm(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce,I,le,We,pe,St,J,ct,Ie,be,pt,ae,X,Me,C,ee,j,ie,Ge,Rt,je,qe,Ot,De,P,fe,ve,B,se,dt,Ce,me,$e,it,et,_e,kt,tt,U,Le,Ue,Y,ge,G,ze,he,Ve,V,lt,vt,He,at,bt,S,b,R,H,ft,Q,st,ye,te,Te,ue,Pe,re,Nt,Ae,xt,rt,K,ot,E,k,M,It,Fe,Yt,Ye,Qe,z,Ke,mt,Se,ht,gt,el,Ht,Re,Tt,wt,_t,Ft,tl,Cl,T,N,Z,nt,ll,Qt,Wt,ul,Ze,Dt,al,pl,Ee,qt,ut,Zl,Jl,Kt,yt,La,sl,Je,Xl,wl,Ha,Dl,rl,de,$l,ea,Gt,Fa,yl,jt,Wa,ta,Pt,Pl,Al,la,Ga,Sl,ol,ja,Ct,Ts,Xr,eo,Vt,ws,Rl,Ol,to,Sa,nl,Vl,Bl,cl,Ua,tr,dl,vl,il,za,Ya,Ra,Bt,fl,Qa,ml,Ds,$s,Vo,D,q,Be,Oa,Ml,fc,ys,lo,Ll,lr,Hl,hc="null|String",Ka,Bo,Fl,ka,Ut,Wl,Mo,Lo,Ho,Mt,ar,zt,Ps,Fo,Wo,Zt,sr,_l,Na,As,uc,Ss,aa,El,rr,bl,pc="null|String",Go,Et,Gl,xa,or,Rs,jo,Uo,zo,Jt,sa,kl,Os,Yo,Qo,$t,nr,Xe,Ia,ks,vc,Ns,Ko,Za,gl,xs,Is="null|String",Zo,Jo,Tl,Ja,cr,mc,Xo,Zi,Ji,Xi,Nl,ef,dr,tf,lf,_c,qs,af,Ec,Cs,bc,Xa,en,sf,rf,ra,gc,ir,fr,tn,Vu,ln,of,ao,oa,an,Hi="null|String",nf,cf,so,es,hr,Tc,sn,df,ff,hf,xl,uf,ur,pf,vf,wc,Vs,mf,Dc,Bs,$c,ts,rn,_f,Ef,na,yc,pr,vr,on,Bu,nn,bf,ro,ca,cn,Fi="null|String",gf,Tf,oo,ls,mr,Pc,dn,wf,Df,$f,Il,yf,_r,Pf,Af,Ac,Ms,Sf,Sc,Ls,Rc,as,fn,Rf,Of,da,Oc,Er,br,hn,Mu,un,kf,no,co,pn,Lu="Array<String>",io,Nf,Hs,kc,xf,If,Fs,fo,Ws,qf,Nc,Cf,xc,ho,jl,vn,ia,mn,Vf,Bf,fa,_n,ss,gr,Mf,Lf,Tr,En,Hf,Ic,uo,Ff,po,bn,Wf,Gf,Gs,vo,js,jf,qc,Uf,Cc,mo,Ul,gn,ha,Tn,zf,Yf,ua,wn,rs,wr,Qf,Kf,Dr,Dn,Zf,Vc,Us,Jf,_o,$n,Xf,Bc,zs,eh,Mc,Ys,yn,pa,Pn,th,lh,va,An,os,$r,ah,sh,yr,Sn,rh,Lc,Hc,oh,Fc,ma,Rn,ns,Pr,nh,ch,_a,On,cs,Ar,dh,ih,Sr,kn,fh,Wc,Gc,hh,jc,Ea,Nn,ds,Rr,uh,ph,ba,xn,is,Or,vh,mh,kr,In,_h,Uc,zc,Eh,Yc,ga,qn,fs,Nr,bh,gh,Ta,Cn,hs,xr,Th,wh,Ir,Vn,Dh,Qc,Kc,$h,Zc,wa,Bn,us,qr,yh,Ph,Da,Mn,ps,Cr,Ah,Sh,Vr,Ln,Hu,Jc,Rh,Xc,ed,Hn,Br="Array<String>",Fn,vs,Mr,Oh,kh,$a,Wn,ms,Lr,Nh,xh,Hr,Gn,Fu,td,Ih,ld,ad,jn,Fr="Array<String>",Un,_s,Wr,qh,Ch,ya,zn,Es,Gr,Vh,Bh,jr,Yn,Mh,sd,Qs,Lh,rd,Qn,od,Hh,nd,Fh,Ks,Pa,zl,Yl,Kn,Wh,Zn,Jn,Gh,cd,dd,jh,id,Ur,Xn,Uh,fd,hd,Wi,Aa,qa,ud,pd,zh,vd,md,Yh,Gi,zr,Eo,ji,bs,Ca,Va,Ba,_d,Qh,Ed,bd,Kh,ec,tc,Zh,gd,Zs,Yr,Qr,bo,Ui,gs,Ql,hl,Ma=[],Wu=new Map,go,Lt,ql=[],Jh=new Map,Td;x=new Zu({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            const collection = await pb.collections.update('demo', {
                name: 'new_demo',
                listRule: 'created > "2022-01-01 00:00:00"',
            });
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '123456');

            final collection = await pb.collections.update('demo', body: {
                'name': 'new_demo',
                'listRule': 'created > "2022-01-01 00:00:00"',
            });
        `}}),Yr=new b1({});let Xh=w[1];const zi=u=>u[3].code;for(let u=0;u<Xh.length;u+=1){let O=q1(w,Xh,u),Xt=zi(O);Wu.set(Xt,Ma[u]=C1(Xt,O))}let Yi=w[1];const y=u=>u[3].code;for(let u=0;u<Yi.length;u+=1){let O=I1(w,Yi,u),Xt=y(O);Jh.set(Xt,ql[u]=V1(Xt,O))}return{c(){i=l("div"),f=l("p"),h=r("Updates a single Collection by its ID or name."),v=n(),m=l("p"),p=r("Only admins can perform this action."),$=n(),Oe(x.$$.fragment),A=n(),_=l("div"),W=l("strong"),we=r("PATCH"),ce=n(),I=l("div"),le=r("/api/collections/"),We=l("code"),pe=r("collectionIdOrName"),St=n(),J=l("small"),ct=r("Requires "),Ie=l("code"),be=r("Authorization: TOKEN"),pt=n(),ae=l("div"),X=r("Path parameters"),Me=n(),C=l("table"),ee=l("thead"),j=l("tr"),ie=l("th"),Ge=r("Param"),Rt=n(),je=l("th"),qe=r("Type"),Ot=n(),De=l("th"),P=r("Description"),fe=n(),ve=l("tbody"),B=l("tr"),se=l("td"),dt=r("collectionIdOrName"),Ce=n(),me=l("td"),$e=l("span"),it=r("String"),et=n(),_e=l("td"),kt=r("ID or name of the collection to view."),tt=n(),U=l("div"),Le=r("Body Parameters"),Ue=n(),Y=l("table"),ge=l("thead"),G=l("tr"),ze=l("th"),he=r("Param"),Ve=n(),V=l("th"),lt=r("Type"),vt=n(),He=l("th"),at=r("Description"),bt=n(),S=l("tbody"),b=l("tr"),R=l("td"),H=l("div"),ft=l("span"),Q=r("Required"),st=n(),ye=l("span"),te=r("name"),Te=n(),ue=l("td"),Pe=l("span"),re=r("String"),Nt=n(),Ae=l("td"),xt=r("Unique collection name (used as a table name for the records table)."),rt=n(),K=l("tr"),ot=l("td"),E=l("div"),k=l("span"),M=r("Required"),It=n(),Fe=l("span"),Yt=r("type"),Ye=n(),Qe=l("td"),z=l("span"),Ke=r("String"),mt=n(),Se=l("td"),ht=r("The type of the collection - "),gt=l("code"),el=r("base"),Ht=r(" ("),Re=l("em"),Tt=r("default"),wt=r("), "),_t=l("code"),Ft=r("auth"),tl=r("."),Cl=n(),T=l("tr"),N=l("td"),Z=l("div"),nt=l("span"),ll=r("Req|Opt"),Qt=n(),Wt=l("span"),ul=r("schema"),Ze=n(),Dt=l("td"),al=l("span"),pl=r("Array"),Ee=n(),qt=l("td"),ut=l("div"),Zl=l("p"),Jl=r("List with the collection fields."),Kt=n(),yt=l("p"),La=r("This field is "),sl=l("strong"),Je=r("required"),Xl=r(" for "),wl=l("code"),Ha=r("base"),Dl=r(" collections."),rl=n(),de=l("p"),$l=r("This field is "),ea=l("strong"),Gt=r("optional"),Fa=r(" for "),yl=l("code"),jt=r("auth"),Wa=r(" collections."),ta=n(),Pt=l("p"),Pl=r("This field is "),Al=l("strong"),la=r("optional"),Ga=r(" and autopopulated for "),Sl=l("code"),ol=r("view"),ja=r(`
                            collections based on the
                            `),Ct=l("code"),Ts=r("options.query"),Xr=r("."),eo=n(),Vt=l("p"),ws=r(`For more info about the supported fields and their options, you could check the
                            `),Rl=l("strong"),Ol=r("pocketbase/models/schema"),to=r(`
                            Go sub-package definitions.`),Sa=n(),nl=l("tr"),Vl=l("td"),Bl=l("div"),cl=l("span"),Ua=r("Optional"),tr=n(),dl=l("span"),vl=r("system"),il=n(),za=l("td"),Ya=l("span"),Ra=r("Boolean"),Bt=n(),fl=l("td"),Qa=r("Marks the collection as "),ml=l("em"),Ds=r('"system"'),$s=r(", aka. cannot be renamed or deleted."),Vo=n(),D=l("tr"),q=l("td"),Be=l("div"),Oa=l("span"),Ml=r("Optional"),fc=n(),ys=l("span"),lo=r("listRule"),Ll=n(),lr=l("td"),Hl=l("span"),Ka=r(hc),Bo=n(),Fl=l("td"),ka=r("API "),Ut=l("em"),Wl=r("List"),Mo=r(` action rule.
                    `),Lo=l("br"),Ho=n(),Mt=l("em"),ar=r(`Check
                        `),zt=l("a"),Ps=r("Rules/Filters syntax guide"),Fo=r(`
                        for more details.`),Wo=n(),Zt=l("tr"),sr=l("td"),_l=l("div"),Na=l("span"),As=r("Optional"),uc=n(),Ss=l("span"),aa=r("viewRule"),El=n(),rr=l("td"),bl=l("span"),Go=r(pc),Et=n(),Gl=l("td"),xa=r("API "),or=l("em"),Rs=r("View"),jo=r(` action rule.
                    `),Uo=l("br"),zo=n(),Jt=l("em"),sa=r(`Check
                        `),kl=l("a"),Os=r("Rules/Filters syntax guide"),Yo=r(`
                        for more details.`),Qo=n(),$t=l("tr"),nr=l("td"),Xe=l("div"),Ia=l("span"),ks=r("Optional"),vc=n(),Ns=l("span"),Ko=r("createRule"),Za=n(),gl=l("td"),xs=l("span"),Zo=r(Is),Jo=n(),Tl=l("td"),Ja=l("p"),cr=r("API "),mc=l("em"),Xo=r("Create"),Zi=r(` action rule.
                        `),Ji=l("br"),Xi=n(),Nl=l("em"),ef=r(`Check
                            `),dr=l("a"),tf=r("Rules/Filters syntax guide"),lf=r(`
                            for more details.`),_c=n(),qs=l("p"),af=r("This rule must be "),Ec=l("code"),Cs=r("null"),bc=r(" for "),Xa=l("code"),en=r("view"),sf=r(" collections."),rf=n(),ra=l("tr"),gc=l("td"),ir=l("div"),fr=l("span"),tn=r("Optional"),Vu=n(),ln=l("span"),of=r("updateRule"),ao=n(),oa=l("td"),an=l("span"),nf=r(Hi),cf=n(),so=l("td"),es=l("p"),hr=r("API "),Tc=l("em"),sn=r("Update"),df=r(` action rule.
                        `),ff=l("br"),hf=n(),xl=l("em"),uf=r(`Check
                            `),ur=l("a"),pf=r("Rules/Filters syntax guide"),vf=r(`
                            for more details.`),wc=n(),Vs=l("p"),mf=r("This rule must be "),Dc=l("code"),Bs=r("null"),$c=r(" for "),ts=l("code"),rn=r("view"),_f=r(" collections."),Ef=n(),na=l("tr"),yc=l("td"),pr=l("div"),vr=l("span"),on=r("Optional"),Bu=n(),nn=l("span"),bf=r("deleteRule"),ro=n(),ca=l("td"),cn=l("span"),gf=r(Fi),Tf=n(),oo=l("td"),ls=l("p"),mr=r("API "),Pc=l("em"),dn=r("Delete"),wf=r(` action rule.
                        `),Df=l("br"),$f=n(),Il=l("em"),yf=r(`Check
                            `),_r=l("a"),Pf=r("Rules/Filters syntax guide"),Af=r(`
                            for more details.`),Ac=n(),Ms=l("p"),Sf=r("This rule must be "),Sc=l("code"),Ls=r("null"),Rc=r(" for "),as=l("code"),fn=r("view"),Rf=r(" collections."),Of=n(),da=l("tr"),Oc=l("td"),Er=l("div"),br=l("span"),hn=r("Optional"),Mu=n(),un=l("span"),kf=r("indexes"),no=n(),co=l("td"),pn=l("span"),io=r(Lu),Nf=n(),Hs=l("td"),kc=l("p"),xf=r("The collection indexes and unique constriants."),If=n(),Fs=l("p"),fo=r("Note that "),Ws=l("code"),qf=r("view"),Nc=r(" collections don't support indexes."),Cf=n(),xc=l("tr"),ho=l("td"),jl=l("strong"),vn=r("options ("),ia=l("em"),mn=r("view"),Vf=r(")"),Bf=n(),fa=l("tr"),_n=l("td"),ss=l("div"),gr=l("span"),Mf=r("├─"),Lf=n(),Tr=l("span"),En=r("Required"),Hf=n(),Ic=l("em"),uo=r("query"),Ff=n(),po=l("td"),bn=l("span"),Wf=r("null|String"),Gf=n(),Gs=l("td"),vo=r("The SQL "),js=l("code"),jf=r("SELECT"),qc=r(` statement that will be used to create the underlying view of the
                    collection.`),Uf=n(),Cc=l("tr"),mo=l("td"),Ul=l("strong"),gn=r("options ("),ha=l("em"),Tn=r("view"),zf=r(")"),Yf=n(),ua=l("tr"),wn=l("td"),rs=l("div"),wr=l("span"),Qf=r("├─"),Kf=n(),Dr=l("span"),Dn=r("Optional"),Zf=n(),Vc=l("em"),Us=r("manageRule"),Jf=n(),_o=l("td"),$n=l("span"),Xf=r("null|String"),Bc=n(),zs=l("td"),eh=r(`API rule that gives admin-like permissions to allow fully managing the auth record(s), eg.
                    changing the password without requiring to enter the old one, directly updating the
                    verified state or email, etc. This rule is executed in addition to the
                    `),Mc=l("code"),Ys=r("createRule"),yn=r(" and "),pa=l("code"),Pn=r("updateRule"),th=r("."),lh=n(),va=l("tr"),An=l("td"),os=l("div"),$r=l("span"),ah=r("├─"),sh=n(),yr=l("span"),Sn=r("Optional"),rh=n(),Lc=l("em"),Hc=r("allowOAuth2Auth"),oh=n(),Fc=l("td"),ma=l("span"),Rn=r("Boolean"),ns=n(),Pr=l("td"),nh=r("Whether to allow OAuth2 sign-in/sign-up for the auth collection."),ch=n(),_a=l("tr"),On=l("td"),cs=l("div"),Ar=l("span"),dh=r("├─"),ih=n(),Sr=l("span"),kn=r("Optional"),fh=n(),Wc=l("em"),Gc=r("allowUsernameAuth"),hh=n(),jc=l("td"),Ea=l("span"),Nn=r("Boolean"),ds=n(),Rr=l("td"),uh=r("Whether to allow username + password authentication for the auth collection."),ph=n(),ba=l("tr"),xn=l("td"),is=l("div"),Or=l("span"),vh=r("├─"),mh=n(),kr=l("span"),In=r("Optional"),_h=n(),Uc=l("em"),zc=r("allowEmailAuth"),Eh=n(),Yc=l("td"),ga=l("span"),qn=r("Boolean"),fs=n(),Nr=l("td"),bh=r("Whether to allow email + password authentication for the auth collection."),gh=n(),Ta=l("tr"),Cn=l("td"),hs=l("div"),xr=l("span"),Th=r("├─"),wh=n(),Ir=l("span"),Vn=r("Optional"),Dh=n(),Qc=l("em"),Kc=r("requireEmail"),$h=n(),Zc=l("td"),wa=l("span"),Bn=r("Boolean"),us=n(),qr=l("td"),yh=r("Whether to always require email address when creating or updating auth records."),Ph=n(),Da=l("tr"),Mn=l("td"),ps=l("div"),Cr=l("span"),Ah=r("├─"),Sh=n(),Vr=l("span"),Ln=r("Optional"),Hu=n(),Jc=l("em"),Rh=r("exceptEmailDomains"),Xc=n(),ed=l("td"),Hn=l("span"),Fn=r(Br),vs=n(),Mr=l("td"),Oh=r("Whether to allow sign-ups only with the email domains not listed in the specified list."),kh=n(),$a=l("tr"),Wn=l("td"),ms=l("div"),Lr=l("span"),Nh=r("├─"),xh=n(),Hr=l("span"),Gn=r("Optional"),Fu=n(),td=l("em"),Ih=r("onlyEmailDomains"),ld=n(),ad=l("td"),jn=l("span"),Un=r(Fr),_s=n(),Wr=l("td"),qh=r("Whether to allow sign-ups only with the email domains listed in the specified list."),Ch=n(),ya=l("tr"),zn=l("td"),Es=l("div"),Gr=l("span"),Vh=r("├─"),Bh=n(),jr=l("span"),Yn=r("Optional"),Mh=n(),sd=l("em"),Qs=r("onlyVerified"),Lh=n(),rd=l("td"),Qn=l("span"),od=r("Boolean"),Hh=n(),nd=l("td"),Fh=r("If enabled, it will return 403 for any new auth request performed by unverified user."),Ks=n(),Pa=l("tr"),zl=l("td"),Yl=l("div"),Kn=l("span"),Wh=r("└─"),Zn=n(),Jn=l("span"),Gh=r("Optional"),cd=n(),dd=l("em"),jh=r("minPasswordLength"),id=n(),Ur=l("td"),Xn=l("span"),Uh=r("Boolean"),fd=n(),hd=l("td"),Wi=r("The minimum required password length for new auth records."),Aa=n(),qa=l("small"),ud=r("Body parameters could be sent as "),pd=l("em"),zh=r("JSON"),vd=r(` or
        `),md=l("em"),Yh=r("multipart/form-data"),Gi=r("."),zr=n(),Eo=l("div"),ji=r("Query parameters"),bs=n(),Ca=l("table"),Va=l("thead"),Ba=l("tr"),_d=l("th"),Qh=r("Param"),Ed=n(),bd=l("th"),Kh=r("Type"),ec=n(),tc=l("th"),Zh=r("Description"),gd=n(),Zs=l("tbody"),Oe(Yr.$$.fragment),Qr=n(),bo=l("div"),Ui=r("Responses"),gs=n(),Ql=l("div"),hl=l("div");for(let u=0;u<Ma.length;u+=1)Ma[u].c();go=n(),Lt=l("div");for(let u=0;u<ql.length;u+=1)ql[u].c();this.h()},l(u){i=a(u,"DIV",{class:!0});var O=s(i);f=a(O,"P",{});var Xt=s(f);h=o(Xt,"Updates a single Collection by its ID or name."),Xt.forEach(t),v=c(O),m=a(O,"P",{});var wd=s(m);p=o(wd,"Only admins can perform this action."),wd.forEach(t),O.forEach(t),$=c(u),ke(x.$$.fragment,u),A=c(u),_=a(u,"DIV",{class:!0});var Dd=s(_);W=a(Dd,"STRONG",{class:!0});var Ju=s(W);we=o(Ju,"PATCH"),Ju.forEach(t),ce=c(Dd),I=a(Dd,"DIV",{class:!0});var eu=s(I);le=o(eu,"/api/collections/"),We=a(eu,"CODE",{});var Xu=s(We);pe=o(Xu,"collectionIdOrName"),Xu.forEach(t),eu.forEach(t),St=c(Dd),J=a(Dd,"SMALL",{class:!0});var Gu=s(J);ct=o(Gu,"Requires "),Ie=a(Gu,"CODE",{});var tu=s(Ie);be=o(tu,"Authorization: TOKEN"),tu.forEach(t),Gu.forEach(t),Dd.forEach(t),pt=c(u),ae=a(u,"DIV",{class:!0});var ep=s(ae);X=o(ep,"Path parameters"),ep.forEach(t),Me=c(u),C=a(u,"TABLE",{class:!0});var To=s(C);ee=a(To,"THEAD",{});var tp=s(ee);j=a(tp,"TR",{});var $d=s(j);ie=a($d,"TH",{});var lp=s(ie);Ge=o(lp,"Param"),lp.forEach(t),Rt=c($d),je=a($d,"TH",{});var L=s(je);qe=o(L,"Type"),L.forEach(t),Ot=c($d),De=a($d,"TH",{width:!0});var yd=s(De);P=o(yd,"Description"),yd.forEach(t),$d.forEach(t),tp.forEach(t),fe=c(To),ve=a(To,"TBODY",{});var ap=s(ve);B=a(ap,"TR",{});var wo=s(B);se=a(wo,"TD",{});var sp=s(se);dt=o(sp,"collectionIdOrName"),sp.forEach(t),Ce=c(wo),me=a(wo,"TD",{});var rp=s(me);$e=a(rp,"SPAN",{class:!0});var op=s($e);it=o(op,"String"),op.forEach(t),rp.forEach(t),et=c(wo),_e=a(wo,"TD",{});var np=s(_e);kt=o(np,"ID or name of the collection to view."),np.forEach(t),wo.forEach(t),ap.forEach(t),To.forEach(t),tt=c(u),U=a(u,"DIV",{class:!0});var Qi=s(U);Le=o(Qi,"Body Parameters"),Qi.forEach(t),Ue=c(u),Y=a(u,"TABLE",{class:!0});var lu=s(Y);ge=a(lu,"THEAD",{});var Pd=s(ge);G=a(Pd,"TR",{});var Ad=s(G);ze=a(Ad,"TH",{});var au=s(ze);he=o(au,"Param"),au.forEach(t),Ve=c(Ad),V=a(Ad,"TH",{});var cp=s(V);lt=o(cp,"Type"),cp.forEach(t),vt=c(Ad),He=a(Ad,"TH",{width:!0});var dp=s(He);at=o(dp,"Description"),dp.forEach(t),Ad.forEach(t),Pd.forEach(t),bt=c(lu),S=a(lu,"TBODY",{});var F=s(S);b=a(F,"TR",{});var Sd=s(b);R=a(Sd,"TD",{});var ip=s(R);H=a(ip,"DIV",{class:!0});var Do=s(H);ft=a(Do,"SPAN",{class:!0});var fp=s(ft);Q=o(fp,"Required"),fp.forEach(t),st=c(Do),ye=a(Do,"SPAN",{class:!0});var su=s(ye);te=o(su,"name"),su.forEach(t),Do.forEach(t),ip.forEach(t),Te=c(Sd),ue=a(Sd,"TD",{});var hp=s(ue);Pe=a(hp,"SPAN",{class:!0});var up=s(Pe);re=o(up,"String"),up.forEach(t),hp.forEach(t),Nt=c(Sd),Ae=a(Sd,"TD",{});var pp=s(Ae);xt=o(pp,"Unique collection name (used as a table name for the records table)."),pp.forEach(t),Sd.forEach(t),rt=c(F),K=a(F,"TR",{});var Rd=s(K);ot=a(Rd,"TD",{});var Js=s(ot);E=a(Js,"DIV",{class:!0});var ru=s(E);k=a(ru,"SPAN",{class:!0});var vp=s(k);M=o(vp,"Required"),vp.forEach(t),It=c(ru),Fe=a(ru,"SPAN",{class:!0});var mp=s(Fe);Yt=o(mp,"type"),mp.forEach(t),ru.forEach(t),Js.forEach(t),Ye=c(Rd),Qe=a(Rd,"TD",{});var _p=s(Qe);z=a(_p,"SPAN",{class:!0});var Od=s(z);Ke=o(Od,"String"),Od.forEach(t),_p.forEach(t),mt=c(Rd),Se=a(Rd,"TD",{});var $o=s(Se);ht=o($o,"The type of the collection - "),gt=a($o,"CODE",{});var ou=s(gt);el=o(ou,"base"),ou.forEach(t),Ht=o($o," ("),Re=a($o,"EM",{});var Ep=s(Re);Tt=o(Ep,"default"),Ep.forEach(t),wt=o($o,"), "),_t=a($o,"CODE",{});var bp=s(_t);Ft=o(bp,"auth"),bp.forEach(t),tl=o($o,"."),$o.forEach(t),Rd.forEach(t),Cl=c(F),T=a(F,"TR",{});var kd=s(T);N=a(kd,"TD",{});var gp=s(N);Z=a(gp,"DIV",{class:!0});var nu=s(Z);nt=a(nu,"SPAN",{class:!0});var Xs=s(nt);ll=o(Xs,"Req|Opt"),Xs.forEach(t),Qt=c(nu),Wt=a(nu,"SPAN",{class:!0});var Tp=s(Wt);ul=o(Tp,"schema"),Tp.forEach(t),nu.forEach(t),gp.forEach(t),Ze=c(kd),Dt=a(kd,"TD",{});var Nd=s(Dt);al=a(Nd,"SPAN",{class:!0});var wp=s(al);pl=o(wp,"Array"),wp.forEach(t),Nd.forEach(t),Ee=c(kd),qt=a(kd,"TD",{});var Dp=s(qt);ut=a(Dp,"DIV",{class:!0});var Kl=s(ut);Zl=a(Kl,"P",{});var $p=s(Zl);Jl=o($p,"List with the collection fields."),$p.forEach(t),Kt=c(Kl),yt=a(Kl,"P",{});var xd=s(yt);La=o(xd,"This field is "),sl=a(xd,"STRONG",{});var yo=s(sl);Je=o(yo,"required"),yo.forEach(t),Xl=o(xd," for "),wl=a(xd,"CODE",{});var yp=s(wl);Ha=o(yp,"base"),yp.forEach(t),Dl=o(xd," collections."),xd.forEach(t),rl=c(Kl),de=a(Kl,"P",{});var Id=s(de);$l=o(Id,"This field is "),ea=a(Id,"STRONG",{});var Pp=s(ea);Gt=o(Pp,"optional"),Pp.forEach(t),Fa=o(Id," for "),yl=a(Id,"CODE",{});var cu=s(yl);jt=o(cu,"auth"),cu.forEach(t),Wa=o(Id," collections."),Id.forEach(t),ta=c(Kl),Pt=a(Kl,"P",{});var Po=s(Pt);Pl=o(Po,"This field is "),Al=a(Po,"STRONG",{});var qd=s(Al);la=o(qd,"optional"),qd.forEach(t),Ga=o(Po," and autopopulated for "),Sl=a(Po,"CODE",{});var Ap=s(Sl);ol=o(Ap,"view"),Ap.forEach(t),ja=o(Po,`
                            collections based on the
                            `),Ct=a(Po,"CODE",{});var du=s(Ct);Ts=o(du,"options.query"),du.forEach(t),Xr=o(Po,"."),Po.forEach(t),eo=c(Kl),Vt=a(Kl,"P",{});var iu=s(Vt);ws=o(iu,`For more info about the supported fields and their options, you could check the
                            `),Rl=a(iu,"STRONG",{});var Sp=s(Rl);Ol=o(Sp,"pocketbase/models/schema"),Sp.forEach(t),to=o(iu,`
                            Go sub-package definitions.`),iu.forEach(t),Kl.forEach(t),Dp.forEach(t),kd.forEach(t),Sa=c(F),nl=a(F,"TR",{});var Cd=s(nl);Vl=a(Cd,"TD",{});var Rp=s(Vl);Bl=a(Rp,"DIV",{class:!0});var Vd=s(Bl);cl=a(Vd,"SPAN",{class:!0});var Op=s(cl);Ua=o(Op,"Optional"),Op.forEach(t),tr=c(Vd),dl=a(Vd,"SPAN",{class:!0});var Bd=s(dl);vl=o(Bd,"system"),Bd.forEach(t),Vd.forEach(t),Rp.forEach(t),il=c(Cd),za=a(Cd,"TD",{});var kp=s(za);Ya=a(kp,"SPAN",{class:!0});var fu=s(Ya);Ra=o(fu,"Boolean"),fu.forEach(t),kp.forEach(t),Bt=c(Cd),fl=a(Cd,"TD",{});var hu=s(fl);Qa=o(hu,"Marks the collection as "),ml=a(hu,"EM",{});var Np=s(ml);Ds=o(Np,'"system"'),Np.forEach(t),$s=o(hu,", aka. cannot be renamed or deleted."),hu.forEach(t),Cd.forEach(t),Vo=c(F),D=a(F,"TR",{});var Md=s(D);q=a(Md,"TD",{});var xp=s(q);Be=a(xp,"DIV",{class:!0});var Kr=s(Be);Oa=a(Kr,"SPAN",{class:!0});var Ip=s(Oa);Ml=o(Ip,"Optional"),Ip.forEach(t),fc=c(Kr),ys=a(Kr,"SPAN",{class:!0});var uu=s(ys);lo=o(uu,"listRule"),uu.forEach(t),Kr.forEach(t),xp.forEach(t),Ll=c(Md),lr=a(Md,"TD",{});var qp=s(lr);Hl=a(qp,"SPAN",{class:!0});var Ld=s(Hl);Ka=o(Ld,hc),Ld.forEach(t),qp.forEach(t),Bo=c(Md),Fl=a(Md,"TD",{});var lc=s(Fl);ka=o(lc,"API "),Ut=a(lc,"EM",{});var pu=s(Ut);Wl=o(pu,"List"),pu.forEach(t),Mo=o(lc,` action rule.
                    `),Lo=a(lc,"BR",{}),Ho=c(lc),Mt=a(lc,"EM",{class:!0});var vu=s(Mt);ar=o(vu,`Check
                        `),zt=a(vu,"A",{href:!0});var Cp=s(zt);Ps=o(Cp,"Rules/Filters syntax guide"),Cp.forEach(t),Fo=o(vu,`
                        for more details.`),vu.forEach(t),lc.forEach(t),Md.forEach(t),Wo=c(F),Zt=a(F,"TR",{});var Hd=s(Zt);sr=a(Hd,"TD",{});var Vp=s(sr);_l=a(Vp,"DIV",{class:!0});var Zr=s(_l);Na=a(Zr,"SPAN",{class:!0});var Bp=s(Na);As=o(Bp,"Optional"),Bp.forEach(t),uc=c(Zr),Ss=a(Zr,"SPAN",{class:!0});var mu=s(Ss);aa=o(mu,"viewRule"),mu.forEach(t),Zr.forEach(t),Vp.forEach(t),El=c(Hd),rr=a(Hd,"TD",{});var Mp=s(rr);bl=a(Mp,"SPAN",{class:!0});var Fd=s(bl);Go=o(Fd,pc),Fd.forEach(t),Mp.forEach(t),Et=c(Hd),Gl=a(Hd,"TD",{});var ac=s(Gl);xa=o(ac,"API "),or=a(ac,"EM",{});var _u=s(or);Rs=o(_u,"View"),_u.forEach(t),jo=o(ac,` action rule.
                    `),Uo=a(ac,"BR",{}),zo=c(ac),Jt=a(ac,"EM",{class:!0});var Eu=s(Jt);sa=o(Eu,`Check
                        `),kl=a(Eu,"A",{href:!0});var Lp=s(kl);Os=o(Lp,"Rules/Filters syntax guide"),Lp.forEach(t),Yo=o(Eu,`
                        for more details.`),Eu.forEach(t),ac.forEach(t),Hd.forEach(t),Qo=c(F),$t=a(F,"TR",{});var Wd=s($t);nr=a(Wd,"TD",{});var Hp=s(nr);Xe=a(Hp,"DIV",{class:!0});var Gd=s(Xe);Ia=a(Gd,"SPAN",{class:!0});var sc=s(Ia);ks=o(sc,"Optional"),sc.forEach(t),vc=c(Gd),Ns=a(Gd,"SPAN",{class:!0});var Fp=s(Ns);Ko=o(Fp,"createRule"),Fp.forEach(t),Gd.forEach(t),Hp.forEach(t),Za=c(Wd),gl=a(Wd,"TD",{});var bu=s(gl);xs=a(bu,"SPAN",{class:!0});var Wp=s(xs);Zo=o(Wp,Is),Wp.forEach(t),bu.forEach(t),Jo=c(Wd),Tl=a(Wd,"TD",{});var Ao=s(Tl);Ja=a(Ao,"P",{});var rc=s(Ja);cr=o(rc,"API "),mc=a(rc,"EM",{});var Gp=s(mc);Xo=o(Gp,"Create"),Gp.forEach(t),Zi=o(rc,` action rule.
                        `),Ji=a(rc,"BR",{}),Xi=c(rc),Nl=a(rc,"EM",{class:!0});var So=s(Nl);ef=o(So,`Check
                            `),dr=a(So,"A",{href:!0});var jp=s(dr);tf=o(jp,"Rules/Filters syntax guide"),jp.forEach(t),lf=o(So,`
                            for more details.`),So.forEach(t),rc.forEach(t),_c=c(Ao),qs=a(Ao,"P",{});var Ro=s(qs);af=o(Ro,"This rule must be "),Ec=a(Ro,"CODE",{});var Up=s(Ec);Cs=o(Up,"null"),Up.forEach(t),bc=o(Ro," for "),Xa=a(Ro,"CODE",{});var zp=s(Xa);en=o(zp,"view"),zp.forEach(t),sf=o(Ro," collections."),Ro.forEach(t),Ao.forEach(t),Wd.forEach(t),rf=c(F),ra=a(F,"TR",{});var jd=s(ra);gc=a(jd,"TD",{});var Yp=s(gc);ir=a(Yp,"DIV",{class:!0});var Ud=s(ir);fr=a(Ud,"SPAN",{class:!0});var oc=s(fr);tn=o(oc,"Optional"),oc.forEach(t),Vu=c(Ud),ln=a(Ud,"SPAN",{class:!0});var Qp=s(ln);of=o(Qp,"updateRule"),Qp.forEach(t),Ud.forEach(t),Yp.forEach(t),ao=c(jd),oa=a(jd,"TD",{});var gu=s(oa);an=a(gu,"SPAN",{class:!0});var Kp=s(an);nf=o(Kp,Hi),Kp.forEach(t),gu.forEach(t),cf=c(jd),so=a(jd,"TD",{});var Oo=s(so);es=a(Oo,"P",{});var nc=s(es);hr=o(nc,"API "),Tc=a(nc,"EM",{});var Zp=s(Tc);sn=o(Zp,"Update"),Zp.forEach(t),df=o(nc,` action rule.
                        `),ff=a(nc,"BR",{}),hf=c(nc),xl=a(nc,"EM",{class:!0});var ko=s(xl);uf=o(ko,`Check
                            `),ur=a(ko,"A",{href:!0});var Jp=s(ur);pf=o(Jp,"Rules/Filters syntax guide"),Jp.forEach(t),vf=o(ko,`
                            for more details.`),ko.forEach(t),nc.forEach(t),wc=c(Oo),Vs=a(Oo,"P",{});var No=s(Vs);mf=o(No,"This rule must be "),Dc=a(No,"CODE",{});var Xp=s(Dc);Bs=o(Xp,"null"),Xp.forEach(t),$c=o(No," for "),ts=a(No,"CODE",{});var ev=s(ts);rn=o(ev,"view"),ev.forEach(t),_f=o(No," collections."),No.forEach(t),Oo.forEach(t),jd.forEach(t),Ef=c(F),na=a(F,"TR",{});var zd=s(na);yc=a(zd,"TD",{});var tv=s(yc);pr=a(tv,"DIV",{class:!0});var Yd=s(pr);vr=a(Yd,"SPAN",{class:!0});var cc=s(vr);on=o(cc,"Optional"),cc.forEach(t),Bu=c(Yd),nn=a(Yd,"SPAN",{class:!0});var lv=s(nn);bf=o(lv,"deleteRule"),lv.forEach(t),Yd.forEach(t),tv.forEach(t),ro=c(zd),ca=a(zd,"TD",{});var Tu=s(ca);cn=a(Tu,"SPAN",{class:!0});var av=s(cn);gf=o(av,Fi),av.forEach(t),Tu.forEach(t),Tf=c(zd),oo=a(zd,"TD",{});var xo=s(oo);ls=a(xo,"P",{});var dc=s(ls);mr=o(dc,"API "),Pc=a(dc,"EM",{});var sv=s(Pc);dn=o(sv,"Delete"),sv.forEach(t),wf=o(dc,` action rule.
                        `),Df=a(dc,"BR",{}),$f=c(dc),Il=a(dc,"EM",{class:!0});var Io=s(Il);yf=o(Io,`Check
                            `),_r=a(Io,"A",{href:!0});var rv=s(_r);Pf=o(rv,"Rules/Filters syntax guide"),rv.forEach(t),Af=o(Io,`
                            for more details.`),Io.forEach(t),dc.forEach(t),Ac=c(xo),Ms=a(xo,"P",{});var qo=s(Ms);Sf=o(qo,"This rule must be "),Sc=a(qo,"CODE",{});var ov=s(Sc);Ls=o(ov,"null"),ov.forEach(t),Rc=o(qo," for "),as=a(qo,"CODE",{});var nv=s(as);fn=o(nv,"view"),nv.forEach(t),Rf=o(qo," collections."),qo.forEach(t),xo.forEach(t),zd.forEach(t),Of=c(F),da=a(F,"TR",{});var Qd=s(da);Oc=a(Qd,"TD",{});var cv=s(Oc);Er=a(cv,"DIV",{class:!0});var Kd=s(Er);br=a(Kd,"SPAN",{class:!0});var dv=s(br);hn=o(dv,"Optional"),dv.forEach(t),Mu=c(Kd),un=a(Kd,"SPAN",{class:!0});var wu=s(un);kf=o(wu,"indexes"),wu.forEach(t),Kd.forEach(t),cv.forEach(t),no=c(Qd),co=a(Qd,"TD",{});var iv=s(co);pn=a(iv,"SPAN",{class:!0});var fv=s(pn);io=o(fv,Lu),fv.forEach(t),iv.forEach(t),Nf=c(Qd),Hs=a(Qd,"TD",{});var Du=s(Hs);kc=a(Du,"P",{});var $u=s(kc);xf=o($u,"The collection indexes and unique constriants."),$u.forEach(t),If=c(Du),Fs=a(Du,"P",{});var yu=s(Fs);fo=o(yu,"Note that "),Ws=a(yu,"CODE",{});var Zd=s(Ws);qf=o(Zd,"view"),Zd.forEach(t),Nc=o(yu," collections don't support indexes."),yu.forEach(t),Du.forEach(t),Qd.forEach(t),Cf=c(F),xc=a(F,"TR",{});var hv=s(xc);ho=a(hv,"TD",{colspan:!0,class:!0});var Jd=s(ho);jl=a(Jd,"STRONG",{});var Pu=s(jl);vn=o(Pu,"options ("),ia=a(Pu,"EM",{});var uv=s(ia);mn=o(uv,"view"),uv.forEach(t),Vf=o(Pu,")"),Pu.forEach(t),Jd.forEach(t),hv.forEach(t),Bf=c(F),fa=a(F,"TR",{});var Xd=s(fa);_n=a(Xd,"TD",{class:!0});var pv=s(_n);ss=a(pv,"DIV",{class:!0});var ei=s(ss);gr=a(ei,"SPAN",{class:!0});var Au=s(gr);Mf=o(Au,"├─"),Au.forEach(t),Lf=c(ei),Tr=a(ei,"SPAN",{class:!0});var vv=s(Tr);En=o(vv,"Required"),vv.forEach(t),Hf=c(ei),Ic=a(ei,"EM",{});var mv=s(Ic);uo=o(mv,"query"),mv.forEach(t),ei.forEach(t),pv.forEach(t),Ff=c(Xd),po=a(Xd,"TD",{});var _v=s(po);bn=a(_v,"SPAN",{class:!0});var Su=s(bn);Wf=o(Su,"null|String"),Su.forEach(t),_v.forEach(t),Gf=c(Xd),Gs=a(Xd,"TD",{});var Ru=s(Gs);vo=o(Ru,"The SQL "),js=a(Ru,"CODE",{});var ti=s(js);jf=o(ti,"SELECT"),ti.forEach(t),qc=o(Ru,` statement that will be used to create the underlying view of the
                    collection.`),Ru.forEach(t),Xd.forEach(t),Uf=c(F),Cc=a(F,"TR",{});var Ev=s(Cc);mo=a(Ev,"TD",{colspan:!0,class:!0});var li=s(mo);Ul=a(li,"STRONG",{});var Ou=s(Ul);gn=o(Ou,"options ("),ha=a(Ou,"EM",{});var bv=s(ha);Tn=o(bv,"view"),bv.forEach(t),zf=o(Ou,")"),Ou.forEach(t),li.forEach(t),Ev.forEach(t),Yf=c(F),ua=a(F,"TR",{});var ai=s(ua);wn=a(ai,"TD",{class:!0});var gv=s(wn);rs=a(gv,"DIV",{class:!0});var si=s(rs);wr=a(si,"SPAN",{class:!0});var ri=s(wr);Qf=o(ri,"├─"),ri.forEach(t),Kf=c(si),Dr=a(si,"SPAN",{class:!0});var Tv=s(Dr);Dn=o(Tv,"Optional"),Tv.forEach(t),Zf=c(si),Vc=a(si,"EM",{});var wv=s(Vc);Us=o(wv,"manageRule"),wv.forEach(t),si.forEach(t),gv.forEach(t),Jf=c(ai),_o=a(ai,"TD",{});var oi=s(_o);$n=a(oi,"SPAN",{class:!0});var Dv=s($n);Xf=o(Dv,"null|String"),Dv.forEach(t),oi.forEach(t),Bc=c(ai),zs=a(ai,"TD",{});var er=s(zs);eh=o(er,`API rule that gives admin-like permissions to allow fully managing the auth record(s), eg.
                    changing the password without requiring to enter the old one, directly updating the
                    verified state or email, etc. This rule is executed in addition to the
                    `),Mc=a(er,"CODE",{});var $v=s(Mc);Ys=o($v,"createRule"),$v.forEach(t),yn=o(er," and "),pa=a(er,"CODE",{});var yv=s(pa);Pn=o(yv,"updateRule"),yv.forEach(t),th=o(er,"."),er.forEach(t),ai.forEach(t),lh=c(F),va=a(F,"TR",{});var ni=s(va);An=a(ni,"TD",{class:!0});var Pv=s(An);os=a(Pv,"DIV",{class:!0});var ci=s(os);$r=a(ci,"SPAN",{class:!0});var Av=s($r);ah=o(Av,"├─"),Av.forEach(t),sh=c(ci),yr=a(ci,"SPAN",{class:!0});var di=s(yr);Sn=o(di,"Optional"),di.forEach(t),rh=c(ci),Lc=a(ci,"EM",{});var Sv=s(Lc);Hc=o(Sv,"allowOAuth2Auth"),Sv.forEach(t),ci.forEach(t),Pv.forEach(t),oh=c(ni),Fc=a(ni,"TD",{});var ii=s(Fc);ma=a(ii,"SPAN",{class:!0});var Rv=s(ma);Rn=o(Rv,"Boolean"),Rv.forEach(t),ii.forEach(t),ns=c(ni),Pr=a(ni,"TD",{});var Ov=s(Pr);nh=o(Ov,"Whether to allow OAuth2 sign-in/sign-up for the auth collection."),Ov.forEach(t),ni.forEach(t),ch=c(F),_a=a(F,"TR",{});var fi=s(_a);On=a(fi,"TD",{class:!0});var kv=s(On);cs=a(kv,"DIV",{class:!0});var hi=s(cs);Ar=a(hi,"SPAN",{class:!0});var Nv=s(Ar);dh=o(Nv,"├─"),Nv.forEach(t),ih=c(hi),Sr=a(hi,"SPAN",{class:!0});var ui=s(Sr);kn=o(ui,"Optional"),ui.forEach(t),fh=c(hi),Wc=a(hi,"EM",{});var xv=s(Wc);Gc=o(xv,"allowUsernameAuth"),xv.forEach(t),hi.forEach(t),kv.forEach(t),hh=c(fi),jc=a(fi,"TD",{});var pi=s(jc);Ea=a(pi,"SPAN",{class:!0});var Iv=s(Ea);Nn=o(Iv,"Boolean"),Iv.forEach(t),pi.forEach(t),ds=c(fi),Rr=a(fi,"TD",{});var qv=s(Rr);uh=o(qv,"Whether to allow username + password authentication for the auth collection."),qv.forEach(t),fi.forEach(t),ph=c(F),ba=a(F,"TR",{});var vi=s(ba);xn=a(vi,"TD",{class:!0});var Cv=s(xn);is=a(Cv,"DIV",{class:!0});var mi=s(is);Or=a(mi,"SPAN",{class:!0});var Vv=s(Or);vh=o(Vv,"├─"),Vv.forEach(t),mh=c(mi),kr=a(mi,"SPAN",{class:!0});var _i=s(kr);In=o(_i,"Optional"),_i.forEach(t),_h=c(mi),Uc=a(mi,"EM",{});var Bv=s(Uc);zc=o(Bv,"allowEmailAuth"),Bv.forEach(t),mi.forEach(t),Cv.forEach(t),Eh=c(vi),Yc=a(vi,"TD",{});var Ei=s(Yc);ga=a(Ei,"SPAN",{class:!0});var Mv=s(ga);qn=o(Mv,"Boolean"),Mv.forEach(t),Ei.forEach(t),fs=c(vi),Nr=a(vi,"TD",{});var Lv=s(Nr);bh=o(Lv,"Whether to allow email + password authentication for the auth collection."),Lv.forEach(t),vi.forEach(t),gh=c(F),Ta=a(F,"TR",{});var bi=s(Ta);Cn=a(bi,"TD",{class:!0});var Hv=s(Cn);hs=a(Hv,"DIV",{class:!0});var gi=s(hs);xr=a(gi,"SPAN",{class:!0});var Fv=s(xr);Th=o(Fv,"├─"),Fv.forEach(t),wh=c(gi),Ir=a(gi,"SPAN",{class:!0});var Ti=s(Ir);Vn=o(Ti,"Optional"),Ti.forEach(t),Dh=c(gi),Qc=a(gi,"EM",{});var Wv=s(Qc);Kc=o(Wv,"requireEmail"),Wv.forEach(t),gi.forEach(t),Hv.forEach(t),$h=c(bi),Zc=a(bi,"TD",{});var wi=s(Zc);wa=a(wi,"SPAN",{class:!0});var Gv=s(wa);Bn=o(Gv,"Boolean"),Gv.forEach(t),wi.forEach(t),us=c(bi),qr=a(bi,"TD",{});var jv=s(qr);yh=o(jv,"Whether to always require email address when creating or updating auth records."),jv.forEach(t),bi.forEach(t),Ph=c(F),Da=a(F,"TR",{});var Di=s(Da);Mn=a(Di,"TD",{class:!0});var Uv=s(Mn);ps=a(Uv,"DIV",{class:!0});var $i=s(ps);Cr=a($i,"SPAN",{class:!0});var zv=s(Cr);Ah=o(zv,"├─"),zv.forEach(t),Sh=c($i),Vr=a($i,"SPAN",{class:!0});var yi=s(Vr);Ln=o(yi,"Optional"),yi.forEach(t),Hu=c($i),Jc=a($i,"EM",{});var Yv=s(Jc);Rh=o(Yv,"exceptEmailDomains"),Yv.forEach(t),$i.forEach(t),Uv.forEach(t),Xc=c(Di),ed=a(Di,"TD",{});var Pi=s(ed);Hn=a(Pi,"SPAN",{class:!0});var Qv=s(Hn);Fn=o(Qv,Br),Qv.forEach(t),Pi.forEach(t),vs=c(Di),Mr=a(Di,"TD",{});var Kv=s(Mr);Oh=o(Kv,"Whether to allow sign-ups only with the email domains not listed in the specified list."),Kv.forEach(t),Di.forEach(t),kh=c(F),$a=a(F,"TR",{});var Ai=s($a);Wn=a(Ai,"TD",{class:!0});var Zv=s(Wn);ms=a(Zv,"DIV",{class:!0});var Si=s(ms);Lr=a(Si,"SPAN",{class:!0});var Jv=s(Lr);Nh=o(Jv,"├─"),Jv.forEach(t),xh=c(Si),Hr=a(Si,"SPAN",{class:!0});var Ri=s(Hr);Gn=o(Ri,"Optional"),Ri.forEach(t),Fu=c(Si),td=a(Si,"EM",{});var Xv=s(td);Ih=o(Xv,"onlyEmailDomains"),Xv.forEach(t),Si.forEach(t),Zv.forEach(t),ld=c(Ai),ad=a(Ai,"TD",{});var Oi=s(ad);jn=a(Oi,"SPAN",{class:!0});var e1=s(jn);Un=o(e1,Fr),e1.forEach(t),Oi.forEach(t),_s=c(Ai),Wr=a(Ai,"TD",{});var t1=s(Wr);qh=o(t1,"Whether to allow sign-ups only with the email domains listed in the specified list."),t1.forEach(t),Ai.forEach(t),Ch=c(F),ya=a(F,"TR",{});var ki=s(ya);zn=a(ki,"TD",{class:!0});var l1=s(zn);Es=a(l1,"DIV",{class:!0});var Ni=s(Es);Gr=a(Ni,"SPAN",{class:!0});var xi=s(Gr);Vh=o(xi,"├─"),xi.forEach(t),Bh=c(Ni),jr=a(Ni,"SPAN",{class:!0});var a1=s(jr);Yn=o(a1,"Optional"),a1.forEach(t),Mh=c(Ni),sd=a(Ni,"EM",{});var Ii=s(sd);Qs=o(Ii,"onlyVerified"),Ii.forEach(t),Ni.forEach(t),l1.forEach(t),Lh=c(ki),rd=a(ki,"TD",{});var s1=s(rd);Qn=a(s1,"SPAN",{class:!0});var qi=s(Qn);od=o(qi,"Boolean"),qi.forEach(t),s1.forEach(t),Hh=c(ki),nd=a(ki,"TD",{});var r1=s(nd);Fh=o(r1,"If enabled, it will return 403 for any new auth request performed by unverified user."),r1.forEach(t),ki.forEach(t),Ks=c(F),Pa=a(F,"TR",{});var Ci=s(Pa);zl=a(Ci,"TD",{class:!0});var o1=s(zl);Yl=a(o1,"DIV",{class:!0});var Vi=s(Yl);Kn=a(Vi,"SPAN",{class:!0});var n1=s(Kn);Wh=o(n1,"└─"),n1.forEach(t),Zn=c(Vi),Jn=a(Vi,"SPAN",{class:!0});var c1=s(Jn);Gh=o(c1,"Optional"),c1.forEach(t),cd=c(Vi),dd=a(Vi,"EM",{});var Bi=s(dd);jh=o(Bi,"minPasswordLength"),Bi.forEach(t),Vi.forEach(t),o1.forEach(t),id=c(Ci),Ur=a(Ci,"TD",{});var d1=s(Ur);Xn=a(d1,"SPAN",{class:!0});var i1=s(Xn);Uh=o(i1,"Boolean"),i1.forEach(t),d1.forEach(t),fd=c(Ci),hd=a(Ci,"TD",{});var f1=s(hd);Wi=o(f1,"The minimum required password length for new auth records."),f1.forEach(t),Ci.forEach(t),F.forEach(t),lu.forEach(t),Aa=c(u),qa=a(u,"SMALL",{class:!0});var Co=s(qa);ud=o(Co,"Body parameters could be sent as "),pd=a(Co,"EM",{});var h1=s(pd);zh=o(h1,"JSON"),h1.forEach(t),vd=o(Co,` or
        `),md=a(Co,"EM",{});var Mi=s(md);Yh=o(Mi,"multipart/form-data"),Mi.forEach(t),Gi=o(Co,"."),Co.forEach(t),zr=c(u),Eo=a(u,"DIV",{class:!0});var u1=s(Eo);ji=o(u1,"Query parameters"),u1.forEach(t),bs=c(u),Ca=a(u,"TABLE",{class:!0});var ku=s(Ca);Va=a(ku,"THEAD",{});var p1=s(Va);Ba=a(p1,"TR",{});var Li=s(Ba);_d=a(Li,"TH",{});var v1=s(_d);Qh=o(v1,"Param"),v1.forEach(t),Ed=c(Li),bd=a(Li,"TH",{});var Nu=s(bd);Kh=o(Nu,"Type"),Nu.forEach(t),ec=c(Li),tc=a(Li,"TH",{width:!0});var m1=s(tc);Zh=o(m1,"Description"),m1.forEach(t),Li.forEach(t),p1.forEach(t),gd=c(ku),Zs=a(ku,"TBODY",{});var _1=s(Zs);ke(Yr.$$.fragment,_1),_1.forEach(t),ku.forEach(t),Qr=c(u),bo=a(u,"DIV",{class:!0});var ic=s(bo);Ui=o(ic,"Responses"),ic.forEach(t),gs=c(u),Ql=a(u,"DIV",{class:!0});var E1=s(Ql);hl=a(E1,"DIV",{class:!0});var g1=s(hl);for(let xu=0;xu<Ma.length;xu+=1)Ma[xu].l(g1);g1.forEach(t),go=c(E1),Lt=a(E1,"DIV",{class:!0});var T1=s(Lt);for(let xu=0;xu<ql.length;xu+=1)ql[xu].l(T1);T1.forEach(t),E1.forEach(t),this.h()},h(){d(i,"class","content m-b-sm"),d(W,"class","label label-primary"),d(I,"class","content"),d(J,"class","txt-hint auth-header"),d(_,"class","api-route alert alert-warning"),d(ae,"class","section-title"),d(De,"width","50%"),d($e,"class","label"),d(C,"class","table-compact table-border m-b-base"),d(U,"class","section-title"),d(He,"width","50%"),d(ft,"class","label label-success"),d(ye,"class","txt"),d(H,"class","inline-flex"),d(Pe,"class","label"),d(k,"class","label label-success"),d(Fe,"class","txt"),d(E,"class","inline-flex"),d(z,"class","label"),d(nt,"class","label label-info"),d(Wt,"class","txt"),d(Z,"class","inline-flex"),d(al,"class","label"),d(ut,"class","content"),d(cl,"class","label label-warning"),d(dl,"class","txt"),d(Bl,"class","inline-flex"),d(Ya,"class","label"),d(Oa,"class","label label-warning"),d(ys,"class","txt"),d(Be,"class","inline-flex flex-nowrap"),d(Hl,"class","label"),d(zt,"href","/docs/api-rules-and-filters/"),d(Mt,"class","txt-hint"),d(Na,"class","label label-warning"),d(Ss,"class","txt"),d(_l,"class","inline-flex flex-nowrap"),d(bl,"class","label"),d(kl,"href","/docs/api-rules-and-filters/"),d(Jt,"class","txt-hint"),d(Ia,"class","label label-warning"),d(Ns,"class","txt"),d(Xe,"class","inline-flex flex-nowrap"),d(xs,"class","label"),d(dr,"href","/docs/api-rules-and-filters/"),d(Nl,"class","txt-hint"),d(fr,"class","label label-warning"),d(ln,"class","txt"),d(ir,"class","inline-flex flex-nowrap"),d(an,"class","label"),d(ur,"href","/docs/api-rules-and-filters/"),d(xl,"class","txt-hint"),d(vr,"class","label label-warning"),d(nn,"class","txt"),d(pr,"class","inline-flex flex-nowrap"),d(cn,"class","label"),d(_r,"href","/docs/api-rules-and-filters/"),d(Il,"class","txt-hint"),d(br,"class","label label-warning"),d(un,"class","txt"),d(Er,"class","inline-flex flex-nowrap"),d(pn,"class","label"),d(ho,"colspan","3"),d(ho,"class","bg-info-alt"),d(gr,"class","txt"),d(Tr,"class","label label-success"),d(ss,"class","inline-flex flex-nowrap"),d(_n,"class","min-width"),d(bn,"class","label"),d(mo,"colspan","3"),d(mo,"class","bg-info-alt"),d(wr,"class","txt"),d(Dr,"class","label label-warning"),d(rs,"class","inline-flex flex-nowrap"),d(wn,"class","min-width"),d($n,"class","label"),d($r,"class","txt"),d(yr,"class","label label-warning"),d(os,"class","inline-flex flex-nowrap"),d(An,"class","min-width"),d(ma,"class","label"),d(Ar,"class","txt"),d(Sr,"class","label label-warning"),d(cs,"class","inline-flex flex-nowrap"),d(On,"class","min-width"),d(Ea,"class","label"),d(Or,"class","txt"),d(kr,"class","label label-warning"),d(is,"class","inline-flex flex-nowrap"),d(xn,"class","min-width"),d(ga,"class","label"),d(xr,"class","txt"),d(Ir,"class","label label-warning"),d(hs,"class","inline-flex flex-nowrap"),d(Cn,"class","min-width"),d(wa,"class","label"),d(Cr,"class","txt"),d(Vr,"class","label label-warning"),d(ps,"class","inline-flex flex-nowrap"),d(Mn,"class","min-width"),d(Hn,"class","label"),d(Lr,"class","txt"),d(Hr,"class","label label-warning"),d(ms,"class","inline-flex flex-nowrap"),d(Wn,"class","min-width"),d(jn,"class","label"),d(Gr,"class","txt"),d(jr,"class","label label-warning"),d(Es,"class","inline-flex flex-nowrap"),d(zn,"class","min-width"),d(Qn,"class","label"),d(Kn,"class","txt"),d(Jn,"class","label label-warning"),d(Yl,"class","inline-flex flex-nowrap"),d(zl,"class","min-width"),d(Xn,"class","label"),d(Y,"class","table-compact table-border"),d(qa,"class","block txt-hint m-t-10 m-b-base"),d(Eo,"class","section-title"),d(tc,"width","50%"),d(Ca,"class","table-compact table-border m-b-base"),d(bo,"class","section-title"),d(hl,"class","tabs-header compact left"),d(Lt,"class","tabs-content"),d(Ql,"class","tabs")},m(u,O){g(u,i,O),e(i,f),e(f,h),e(i,v),e(i,m),e(m,p),g(u,$,O),Ne(x,u,O),g(u,A,O),g(u,_,O),e(_,W),e(W,we),e(_,ce),e(_,I),e(I,le),e(I,We),e(We,pe),e(_,St),e(_,J),e(J,ct),e(J,Ie),e(Ie,be),g(u,pt,O),g(u,ae,O),e(ae,X),g(u,Me,O),g(u,C,O),e(C,ee),e(ee,j),e(j,ie),e(ie,Ge),e(j,Rt),e(j,je),e(je,qe),e(j,Ot),e(j,De),e(De,P),e(C,fe),e(C,ve),e(ve,B),e(B,se),e(se,dt),e(B,Ce),e(B,me),e(me,$e),e($e,it),e(B,et),e(B,_e),e(_e,kt),g(u,tt,O),g(u,U,O),e(U,Le),g(u,Ue,O),g(u,Y,O),e(Y,ge),e(ge,G),e(G,ze),e(ze,he),e(G,Ve),e(G,V),e(V,lt),e(G,vt),e(G,He),e(He,at),e(Y,bt),e(Y,S),e(S,b),e(b,R),e(R,H),e(H,ft),e(ft,Q),e(H,st),e(H,ye),e(ye,te),e(b,Te),e(b,ue),e(ue,Pe),e(Pe,re),e(b,Nt),e(b,Ae),e(Ae,xt),e(S,rt),e(S,K),e(K,ot),e(ot,E),e(E,k),e(k,M),e(E,It),e(E,Fe),e(Fe,Yt),e(K,Ye),e(K,Qe),e(Qe,z),e(z,Ke),e(K,mt),e(K,Se),e(Se,ht),e(Se,gt),e(gt,el),e(Se,Ht),e(Se,Re),e(Re,Tt),e(Se,wt),e(Se,_t),e(_t,Ft),e(Se,tl),e(S,Cl),e(S,T),e(T,N),e(N,Z),e(Z,nt),e(nt,ll),e(Z,Qt),e(Z,Wt),e(Wt,ul),e(T,Ze),e(T,Dt),e(Dt,al),e(al,pl),e(T,Ee),e(T,qt),e(qt,ut),e(ut,Zl),e(Zl,Jl),e(ut,Kt),e(ut,yt),e(yt,La),e(yt,sl),e(sl,Je),e(yt,Xl),e(yt,wl),e(wl,Ha),e(yt,Dl),e(ut,rl),e(ut,de),e(de,$l),e(de,ea),e(ea,Gt),e(de,Fa),e(de,yl),e(yl,jt),e(de,Wa),e(ut,ta),e(ut,Pt),e(Pt,Pl),e(Pt,Al),e(Al,la),e(Pt,Ga),e(Pt,Sl),e(Sl,ol),e(Pt,ja),e(Pt,Ct),e(Ct,Ts),e(Pt,Xr),e(ut,eo),e(ut,Vt),e(Vt,ws),e(Vt,Rl),e(Rl,Ol),e(Vt,to),e(S,Sa),e(S,nl),e(nl,Vl),e(Vl,Bl),e(Bl,cl),e(cl,Ua),e(Bl,tr),e(Bl,dl),e(dl,vl),e(nl,il),e(nl,za),e(za,Ya),e(Ya,Ra),e(nl,Bt),e(nl,fl),e(fl,Qa),e(fl,ml),e(ml,Ds),e(fl,$s),e(S,Vo),e(S,D),e(D,q),e(q,Be),e(Be,Oa),e(Oa,Ml),e(Be,fc),e(Be,ys),e(ys,lo),e(D,Ll),e(D,lr),e(lr,Hl),e(Hl,Ka),e(D,Bo),e(D,Fl),e(Fl,ka),e(Fl,Ut),e(Ut,Wl),e(Fl,Mo),e(Fl,Lo),e(Fl,Ho),e(Fl,Mt),e(Mt,ar),e(Mt,zt),e(zt,Ps),e(Mt,Fo),e(S,Wo),e(S,Zt),e(Zt,sr),e(sr,_l),e(_l,Na),e(Na,As),e(_l,uc),e(_l,Ss),e(Ss,aa),e(Zt,El),e(Zt,rr),e(rr,bl),e(bl,Go),e(Zt,Et),e(Zt,Gl),e(Gl,xa),e(Gl,or),e(or,Rs),e(Gl,jo),e(Gl,Uo),e(Gl,zo),e(Gl,Jt),e(Jt,sa),e(Jt,kl),e(kl,Os),e(Jt,Yo),e(S,Qo),e(S,$t),e($t,nr),e(nr,Xe),e(Xe,Ia),e(Ia,ks),e(Xe,vc),e(Xe,Ns),e(Ns,Ko),e($t,Za),e($t,gl),e(gl,xs),e(xs,Zo),e($t,Jo),e($t,Tl),e(Tl,Ja),e(Ja,cr),e(Ja,mc),e(mc,Xo),e(Ja,Zi),e(Ja,Ji),e(Ja,Xi),e(Ja,Nl),e(Nl,ef),e(Nl,dr),e(dr,tf),e(Nl,lf),e(Tl,_c),e(Tl,qs),e(qs,af),e(qs,Ec),e(Ec,Cs),e(qs,bc),e(qs,Xa),e(Xa,en),e(qs,sf),e(S,rf),e(S,ra),e(ra,gc),e(gc,ir),e(ir,fr),e(fr,tn),e(ir,Vu),e(ir,ln),e(ln,of),e(ra,ao),e(ra,oa),e(oa,an),e(an,nf),e(ra,cf),e(ra,so),e(so,es),e(es,hr),e(es,Tc),e(Tc,sn),e(es,df),e(es,ff),e(es,hf),e(es,xl),e(xl,uf),e(xl,ur),e(ur,pf),e(xl,vf),e(so,wc),e(so,Vs),e(Vs,mf),e(Vs,Dc),e(Dc,Bs),e(Vs,$c),e(Vs,ts),e(ts,rn),e(Vs,_f),e(S,Ef),e(S,na),e(na,yc),e(yc,pr),e(pr,vr),e(vr,on),e(pr,Bu),e(pr,nn),e(nn,bf),e(na,ro),e(na,ca),e(ca,cn),e(cn,gf),e(na,Tf),e(na,oo),e(oo,ls),e(ls,mr),e(ls,Pc),e(Pc,dn),e(ls,wf),e(ls,Df),e(ls,$f),e(ls,Il),e(Il,yf),e(Il,_r),e(_r,Pf),e(Il,Af),e(oo,Ac),e(oo,Ms),e(Ms,Sf),e(Ms,Sc),e(Sc,Ls),e(Ms,Rc),e(Ms,as),e(as,fn),e(Ms,Rf),e(S,Of),e(S,da),e(da,Oc),e(Oc,Er),e(Er,br),e(br,hn),e(Er,Mu),e(Er,un),e(un,kf),e(da,no),e(da,co),e(co,pn),e(pn,io),e(da,Nf),e(da,Hs),e(Hs,kc),e(kc,xf),e(Hs,If),e(Hs,Fs),e(Fs,fo),e(Fs,Ws),e(Ws,qf),e(Fs,Nc),e(S,Cf),e(S,xc),e(xc,ho),e(ho,jl),e(jl,vn),e(jl,ia),e(ia,mn),e(jl,Vf),e(S,Bf),e(S,fa),e(fa,_n),e(_n,ss),e(ss,gr),e(gr,Mf),e(ss,Lf),e(ss,Tr),e(Tr,En),e(ss,Hf),e(ss,Ic),e(Ic,uo),e(fa,Ff),e(fa,po),e(po,bn),e(bn,Wf),e(fa,Gf),e(fa,Gs),e(Gs,vo),e(Gs,js),e(js,jf),e(Gs,qc),e(S,Uf),e(S,Cc),e(Cc,mo),e(mo,Ul),e(Ul,gn),e(Ul,ha),e(ha,Tn),e(Ul,zf),e(S,Yf),e(S,ua),e(ua,wn),e(wn,rs),e(rs,wr),e(wr,Qf),e(rs,Kf),e(rs,Dr),e(Dr,Dn),e(rs,Zf),e(rs,Vc),e(Vc,Us),e(ua,Jf),e(ua,_o),e(_o,$n),e($n,Xf),e(ua,Bc),e(ua,zs),e(zs,eh),e(zs,Mc),e(Mc,Ys),e(zs,yn),e(zs,pa),e(pa,Pn),e(zs,th),e(S,lh),e(S,va),e(va,An),e(An,os),e(os,$r),e($r,ah),e(os,sh),e(os,yr),e(yr,Sn),e(os,rh),e(os,Lc),e(Lc,Hc),e(va,oh),e(va,Fc),e(Fc,ma),e(ma,Rn),e(va,ns),e(va,Pr),e(Pr,nh),e(S,ch),e(S,_a),e(_a,On),e(On,cs),e(cs,Ar),e(Ar,dh),e(cs,ih),e(cs,Sr),e(Sr,kn),e(cs,fh),e(cs,Wc),e(Wc,Gc),e(_a,hh),e(_a,jc),e(jc,Ea),e(Ea,Nn),e(_a,ds),e(_a,Rr),e(Rr,uh),e(S,ph),e(S,ba),e(ba,xn),e(xn,is),e(is,Or),e(Or,vh),e(is,mh),e(is,kr),e(kr,In),e(is,_h),e(is,Uc),e(Uc,zc),e(ba,Eh),e(ba,Yc),e(Yc,ga),e(ga,qn),e(ba,fs),e(ba,Nr),e(Nr,bh),e(S,gh),e(S,Ta),e(Ta,Cn),e(Cn,hs),e(hs,xr),e(xr,Th),e(hs,wh),e(hs,Ir),e(Ir,Vn),e(hs,Dh),e(hs,Qc),e(Qc,Kc),e(Ta,$h),e(Ta,Zc),e(Zc,wa),e(wa,Bn),e(Ta,us),e(Ta,qr),e(qr,yh),e(S,Ph),e(S,Da),e(Da,Mn),e(Mn,ps),e(ps,Cr),e(Cr,Ah),e(ps,Sh),e(ps,Vr),e(Vr,Ln),e(ps,Hu),e(ps,Jc),e(Jc,Rh),e(Da,Xc),e(Da,ed),e(ed,Hn),e(Hn,Fn),e(Da,vs),e(Da,Mr),e(Mr,Oh),e(S,kh),e(S,$a),e($a,Wn),e(Wn,ms),e(ms,Lr),e(Lr,Nh),e(ms,xh),e(ms,Hr),e(Hr,Gn),e(ms,Fu),e(ms,td),e(td,Ih),e($a,ld),e($a,ad),e(ad,jn),e(jn,Un),e($a,_s),e($a,Wr),e(Wr,qh),e(S,Ch),e(S,ya),e(ya,zn),e(zn,Es),e(Es,Gr),e(Gr,Vh),e(Es,Bh),e(Es,jr),e(jr,Yn),e(Es,Mh),e(Es,sd),e(sd,Qs),e(ya,Lh),e(ya,rd),e(rd,Qn),e(Qn,od),e(ya,Hh),e(ya,nd),e(nd,Fh),e(S,Ks),e(S,Pa),e(Pa,zl),e(zl,Yl),e(Yl,Kn),e(Kn,Wh),e(Yl,Zn),e(Yl,Jn),e(Jn,Gh),e(Yl,cd),e(Yl,dd),e(dd,jh),e(Pa,id),e(Pa,Ur),e(Ur,Xn),e(Xn,Uh),e(Pa,fd),e(Pa,hd),e(hd,Wi),g(u,Aa,O),g(u,qa,O),e(qa,ud),e(qa,pd),e(pd,zh),e(qa,vd),e(qa,md),e(md,Yh),e(qa,Gi),g(u,zr,O),g(u,Eo,O),e(Eo,ji),g(u,bs,O),g(u,Ca,O),e(Ca,Va),e(Va,Ba),e(Ba,_d),e(_d,Qh),e(Ba,Ed),e(Ba,bd),e(bd,Kh),e(Ba,ec),e(Ba,tc),e(tc,Zh),e(Ca,gd),e(Ca,Zs),Ne(Yr,Zs,null),g(u,Qr,O),g(u,bo,O),e(bo,Ui),g(u,gs,O),g(u,Ql,O),e(Ql,hl);for(let Xt=0;Xt<Ma.length;Xt+=1)Ma[Xt]&&Ma[Xt].m(hl,null);e(Ql,go),e(Ql,Lt);for(let Xt=0;Xt<ql.length;Xt+=1)ql[Xt]&&ql[Xt].m(Lt,null);Td=!0},p(u,O){O&3&&(Xh=u[1],Ma=Jr(Ma,O,zi,1,u,Xh,Wu,hl,ju,C1,null,q1)),O&3&&(Yi=u[1],Uu(),ql=Jr(ql,O,y,1,u,Yi,Jh,Lt,zu,V1,null,I1),Yu())},i(u){if(!Td){oe(x.$$.fragment,u),oe(Yr.$$.fragment,u);for(let O=0;O<Yi.length;O+=1)oe(ql[O]);Td=!0}},o(u){ne(x.$$.fragment,u),ne(Yr.$$.fragment,u);for(let O=0;O<ql.length;O+=1)ne(ql[O]);Td=!1},d(u){u&&t(i),u&&t($),xe(x,u),u&&t(A),u&&t(_),u&&t(pt),u&&t(ae),u&&t(Me),u&&t(C),u&&t(tt),u&&t(U),u&&t(Ue),u&&t(Y),u&&t(Aa),u&&t(qa),u&&t(zr),u&&t(Eo),u&&t(bs),u&&t(Ca),xe(Yr),u&&t(Qr),u&&t(bo),u&&t(gs),u&&t(Ql);for(let O=0;O<Ma.length;O+=1)Ma[O].d();for(let O=0;O<ql.length;O+=1)ql[O].d()}}}function cm(w){let i,f;return i=new Ku({props:{single:!0,title:"Update collection",$$slots:{default:[nm]},$$scope:{ctx:w}}}),{c(){Oe(i.$$.fragment)},l(h){ke(i.$$.fragment,h)},m(h,v){Ne(i,h,v),f=!0},p(h,[v]){const m={};v&257&&(m.$$scope={dirty:v,ctx:h}),i.$set(m)},i(h){f||(oe(i.$$.fragment,h),f=!0)},o(h){ne(i.$$.fragment,h),f=!1},d(h){xe(i,h)}}}function dm(w,i,f){const h=[{code:200,body:`
                {
                  "id": "d2972397d45614e",
                  "created": "2022-06-22 07:13:00.643Z",
                  "updated": "2022-06-22 08:00:00.341Z",
                  "type": "base",
                  "name": "posts",
                  "schema": [
                    {
                      "system": false,
                      "id": "njnkhxa2",
                      "name": "name",
                      "type": "text",
                      "required": false,
                      "unique": false,
                      "options": {
                        "min": null,
                        "max": null,
                        "pattern": ""
                      }
                    },
                    {
                      "system": false,
                      "id": "9gvv0jkj",
                      "name": "avatar",
                      "type": "file",
                      "required": false,
                      "unique": false,
                      "options": {
                        "maxSelect": 1,
                        "maxSize": 5242880,
                        "mimeTypes": [
                          "image/jpg",
                          "image/jpeg",
                          "image/png",
                          "image/svg+xml",
                          "image/gif"
                        ],
                        "thumbs": null
                      }
                    }
                  ],
                  "listRule": "id = @request.user.id",
                  "viewRule": "id = @request.user.id",
                  "createRule": "id = @request.user.id",
                  "updateRule": "id = @request.user.id",
                  "deleteRule": null,
                  "indexes": ["create index name_idx on posts (name)"]
                }
            `},{code:400,body:`
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
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
            `}];let v=h[0].code;return[v,h,p=>f(0,v=p.code)]}class im extends Iu{constructor(i){super(),qu(this,i,dm,cm,Cu,{})}}function B1(w,i,f){const h=w.slice();return h[3]=i[f],h}function M1(w,i,f){const h=w.slice();return h[3]=i[f],h}function L1(w,i){let f,h=i[3].code+"",v,m,p,$;function x(){return i[2](i[3])}return{key:w,first:null,c(){f=l("button"),v=r(h),m=n(),this.h()},l(A){f=a(A,"BUTTON",{class:!0});var _=s(f);v=o(_,h),m=c(_),_.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(A,_){g(A,f,_),e(f,v),e(f,m),p||($=Qu(f,"click",x),p=!0)},p(A,_){i=A,_&3&&At(f,"active",i[0]===i[3].code)},d(A){A&&t(f),p=!1,$()}}}function H1(w,i){let f,h,v,m;return h=new Ki({props:{content:i[3].body}}),{key:w,first:null,c(){f=l("div"),Oe(h.$$.fragment),v=n(),this.h()},l(p){f=a(p,"DIV",{class:!0});var $=s(f);ke(h.$$.fragment,$),v=c($),$.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(p,$){g(p,f,$),Ne(h,f,null),e(f,v),m=!0},p(p,$){i=p,(!m||$&3)&&At(f,"active",i[0]===i[3].code)},i(p){m||(oe(h.$$.fragment,p),m=!0)},o(p){ne(h.$$.fragment,p),m=!1},d(p){p&&t(f),xe(h)}}}function fm(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce,I,le,We,pe,St,J,ct,Ie,be,pt,ae,X,Me,C,ee,j,ie,Ge,Rt,je,qe,Ot,De,P,fe,ve,B,se,dt,Ce,me,$e,it,et,_e,kt,tt,U,Le,Ue,Y,ge,G=[],ze=new Map,he,Ve,V=[],lt=new Map,vt;x=new Zu({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.collections.delete('demo');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.collections.delete('demo');
        `}});let He=w[1];const at=b=>b[3].code;for(let b=0;b<He.length;b+=1){let R=M1(w,He,b),H=at(R);ze.set(H,G[b]=L1(H,R))}let bt=w[1];const S=b=>b[3].code;for(let b=0;b<bt.length;b+=1){let R=B1(w,bt,b),H=S(R);lt.set(H,V[b]=H1(H,R))}return{c(){i=l("div"),f=l("p"),h=r("Deletes a single Collection by its ID or name."),v=n(),m=l("p"),p=r("Only admins can perform this action."),$=n(),Oe(x.$$.fragment),A=n(),_=l("div"),W=l("strong"),we=r("DELETE"),ce=n(),I=l("div"),le=r("/api/collections/"),We=l("code"),pe=r("collectionIdOrName"),St=n(),J=l("small"),ct=r("Requires "),Ie=l("code"),be=r("Authorization: TOKEN"),pt=n(),ae=l("div"),X=r("Path parameters"),Me=n(),C=l("table"),ee=l("thead"),j=l("tr"),ie=l("th"),Ge=r("Param"),Rt=n(),je=l("th"),qe=r("Type"),Ot=n(),De=l("th"),P=r("Description"),fe=n(),ve=l("tbody"),B=l("tr"),se=l("td"),dt=r("collectionIdOrName"),Ce=n(),me=l("td"),$e=l("span"),it=r("String"),et=n(),_e=l("td"),kt=r("ID or name of the collection to view."),tt=n(),U=l("div"),Le=r("Responses"),Ue=n(),Y=l("div"),ge=l("div");for(let b=0;b<G.length;b+=1)G[b].c();he=n(),Ve=l("div");for(let b=0;b<V.length;b+=1)V[b].c();this.h()},l(b){i=a(b,"DIV",{class:!0});var R=s(i);f=a(R,"P",{});var H=s(f);h=o(H,"Deletes a single Collection by its ID or name."),H.forEach(t),v=c(R),m=a(R,"P",{});var ft=s(m);p=o(ft,"Only admins can perform this action."),ft.forEach(t),R.forEach(t),$=c(b),ke(x.$$.fragment,b),A=c(b),_=a(b,"DIV",{class:!0});var Q=s(_);W=a(Q,"STRONG",{class:!0});var st=s(W);we=o(st,"DELETE"),st.forEach(t),ce=c(Q),I=a(Q,"DIV",{class:!0});var ye=s(I);le=o(ye,"/api/collections/"),We=a(ye,"CODE",{});var te=s(We);pe=o(te,"collectionIdOrName"),te.forEach(t),ye.forEach(t),St=c(Q),J=a(Q,"SMALL",{class:!0});var Te=s(J);ct=o(Te,"Requires "),Ie=a(Te,"CODE",{});var ue=s(Ie);be=o(ue,"Authorization: TOKEN"),ue.forEach(t),Te.forEach(t),Q.forEach(t),pt=c(b),ae=a(b,"DIV",{class:!0});var Pe=s(ae);X=o(Pe,"Path parameters"),Pe.forEach(t),Me=c(b),C=a(b,"TABLE",{class:!0});var re=s(C);ee=a(re,"THEAD",{});var Nt=s(ee);j=a(Nt,"TR",{});var Ae=s(j);ie=a(Ae,"TH",{});var xt=s(ie);Ge=o(xt,"Param"),xt.forEach(t),Rt=c(Ae),je=a(Ae,"TH",{});var rt=s(je);qe=o(rt,"Type"),rt.forEach(t),Ot=c(Ae),De=a(Ae,"TH",{width:!0});var K=s(De);P=o(K,"Description"),K.forEach(t),Ae.forEach(t),Nt.forEach(t),fe=c(re),ve=a(re,"TBODY",{});var ot=s(ve);B=a(ot,"TR",{});var E=s(B);se=a(E,"TD",{});var k=s(se);dt=o(k,"collectionIdOrName"),k.forEach(t),Ce=c(E),me=a(E,"TD",{});var M=s(me);$e=a(M,"SPAN",{class:!0});var It=s($e);it=o(It,"String"),It.forEach(t),M.forEach(t),et=c(E),_e=a(E,"TD",{});var Fe=s(_e);kt=o(Fe,"ID or name of the collection to view."),Fe.forEach(t),E.forEach(t),ot.forEach(t),re.forEach(t),tt=c(b),U=a(b,"DIV",{class:!0});var Yt=s(U);Le=o(Yt,"Responses"),Yt.forEach(t),Ue=c(b),Y=a(b,"DIV",{class:!0});var Ye=s(Y);ge=a(Ye,"DIV",{class:!0});var Qe=s(ge);for(let Ke=0;Ke<G.length;Ke+=1)G[Ke].l(Qe);Qe.forEach(t),he=c(Ye),Ve=a(Ye,"DIV",{class:!0});var z=s(Ve);for(let Ke=0;Ke<V.length;Ke+=1)V[Ke].l(z);z.forEach(t),Ye.forEach(t),this.h()},h(){d(i,"class","content m-b-sm"),d(W,"class","label label-primary"),d(I,"class","content"),d(J,"class","txt-hint auth-header"),d(_,"class","api-route alert alert-danger"),d(ae,"class","section-title"),d(De,"width","50%"),d($e,"class","label"),d(C,"class","table-compact table-border m-b-base"),d(U,"class","section-title"),d(ge,"class","tabs-header compact left"),d(Ve,"class","tabs-content"),d(Y,"class","tabs")},m(b,R){g(b,i,R),e(i,f),e(f,h),e(i,v),e(i,m),e(m,p),g(b,$,R),Ne(x,b,R),g(b,A,R),g(b,_,R),e(_,W),e(W,we),e(_,ce),e(_,I),e(I,le),e(I,We),e(We,pe),e(_,St),e(_,J),e(J,ct),e(J,Ie),e(Ie,be),g(b,pt,R),g(b,ae,R),e(ae,X),g(b,Me,R),g(b,C,R),e(C,ee),e(ee,j),e(j,ie),e(ie,Ge),e(j,Rt),e(j,je),e(je,qe),e(j,Ot),e(j,De),e(De,P),e(C,fe),e(C,ve),e(ve,B),e(B,se),e(se,dt),e(B,Ce),e(B,me),e(me,$e),e($e,it),e(B,et),e(B,_e),e(_e,kt),g(b,tt,R),g(b,U,R),e(U,Le),g(b,Ue,R),g(b,Y,R),e(Y,ge);for(let H=0;H<G.length;H+=1)G[H]&&G[H].m(ge,null);e(Y,he),e(Y,Ve);for(let H=0;H<V.length;H+=1)V[H]&&V[H].m(Ve,null);vt=!0},p(b,R){R&3&&(He=b[1],G=Jr(G,R,at,1,b,He,ze,ge,ju,L1,null,M1)),R&3&&(bt=b[1],Uu(),V=Jr(V,R,S,1,b,bt,lt,Ve,zu,H1,null,B1),Yu())},i(b){if(!vt){oe(x.$$.fragment,b);for(let R=0;R<bt.length;R+=1)oe(V[R]);vt=!0}},o(b){ne(x.$$.fragment,b);for(let R=0;R<V.length;R+=1)ne(V[R]);vt=!1},d(b){b&&t(i),b&&t($),xe(x,b),b&&t(A),b&&t(_),b&&t(pt),b&&t(ae),b&&t(Me),b&&t(C),b&&t(tt),b&&t(U),b&&t(Ue),b&&t(Y);for(let R=0;R<G.length;R+=1)G[R].d();for(let R=0;R<V.length;R+=1)V[R].d()}}}function hm(w){let i,f;return i=new Ku({props:{single:!0,title:"Delete collection",$$slots:{default:[fm]},$$scope:{ctx:w}}}),{c(){Oe(i.$$.fragment)},l(h){ke(i.$$.fragment,h)},m(h,v){Ne(i,h,v),f=!0},p(h,[v]){const m={};v&257&&(m.$$scope={dirty:v,ctx:h}),i.$set(m)},i(h){f||(oe(i.$$.fragment,h),f=!0)},o(h){ne(i.$$.fragment,h),f=!1},d(h){xe(i,h)}}}function um(w,i,f){const h=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to delete collection. Make sure that the collection is not referenced by other collections.",
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
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}];let v=h[0].code;return[v,h,p=>f(0,v=p.code)]}class pm extends Iu{constructor(i){super(),qu(this,i,um,hm,Cu,{})}}function F1(w,i,f){const h=w.slice();return h[3]=i[f],h}function W1(w,i,f){const h=w.slice();return h[3]=i[f],h}function G1(w,i){let f,h=i[3].code+"",v,m,p,$;function x(){return i[2](i[3])}return{key:w,first:null,c(){f=l("button"),v=r(h),m=n(),this.h()},l(A){f=a(A,"BUTTON",{class:!0});var _=s(f);v=o(_,h),m=c(_),_.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(A,_){g(A,f,_),e(f,v),e(f,m),p||($=Qu(f,"click",x),p=!0)},p(A,_){i=A,_&3&&At(f,"active",i[0]===i[3].code)},d(A){A&&t(f),p=!1,$()}}}function j1(w,i){let f,h,v,m;return h=new Ki({props:{content:i[3].body}}),{key:w,first:null,c(){f=l("div"),Oe(h.$$.fragment),v=n(),this.h()},l(p){f=a(p,"DIV",{class:!0});var $=s(f);ke(h.$$.fragment,$),v=c($),$.forEach(t),this.h()},h(){d(f,"class","tab-item"),At(f,"active",i[0]===i[3].code),this.first=f},m(p,$){g(p,f,$),Ne(h,f,null),e(f,v),m=!0},p(p,$){i=p,(!m||$&3)&&At(f,"active",i[0]===i[3].code)},i(p){m||(oe(h.$$.fragment,p),m=!0)},o(p){ne(h.$$.fragment,p),m=!1},d(p){p&&t(f),xe(h)}}}function vm(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce,I,le,We,pe,St,J,ct,Ie,be,pt,ae,X,Me,C,ee,j,ie,Ge,Rt,je,qe,Ot,De,P,fe,ve,B,se,dt,Ce,me,$e,it,et,_e,kt,tt,U,Le="Array<Collection>",Ue,Y,ge,G,ze,he,Ve,V,lt,vt,He,at,bt,S,b,R,H,ft,Q,st,ye,te,Te,ue,Pe,re,Nt,Ae,xt,rt,K,ot,E,k,M,It,Fe,Yt,Ye,Qe,z,Ke,mt,Se,ht=[],gt=new Map,el,Ht,Re=[],Tt=new Map,wt;W=new Zu({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const importData = [
                {
                    name: 'collection1',
                    schema: [
                        {
                            name: 'status',
                            type: 'bool',
                        },
                    ],
                },
                {
                    name: 'collection2',
                    schema: [
                        {
                            name: 'title',
                            type: 'text',
                        },
                    ],
                },
            ];

            await pb.collections.import(importData, false);
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final importData = [
                CollectionModel(
                    name: "collection1",
                    schema: [
                        SchemaField(name: "status", type: "bool"),
                    ],
                ),
                CollectionModel(
                    name: "collection2",
                    schema: [
                        SchemaField(name: "title", type: "text"),
                    ],
                ),
            ];

            await pb.collections.import(importData, deleteMissing: false);
        `}});let _t=w[1];const Ft=T=>T[3].code;for(let T=0;T<_t.length;T+=1){let N=W1(w,_t,T),Z=Ft(N);gt.set(Z,ht[T]=G1(Z,N))}let tl=w[1];const Cl=T=>T[3].code;for(let T=0;T<tl.length;T+=1){let N=F1(w,tl,T),Z=Cl(N);Tt.set(Z,Re[T]=j1(Z,N))}return{c(){i=l("div"),f=l("p"),h=r("Bulk imports the provided "),v=l("em"),m=r("Collections"),p=r(" configuration."),$=n(),x=l("p"),A=r("Only admins can perform this action."),_=n(),Oe(W.$$.fragment),we=n(),ce=l("div"),I=l("strong"),le=r("PUT"),We=n(),pe=l("div"),St=r("/api/collections/import"),J=n(),ct=l("small"),Ie=r("Requires "),be=l("code"),pt=r("Authorization: TOKEN"),ae=n(),X=l("div"),Me=r("Body Parameters"),C=n(),ee=l("table"),j=l("thead"),ie=l("tr"),Ge=l("th"),Rt=r("Param"),je=n(),qe=l("th"),Ot=r("Type"),De=n(),P=l("th"),fe=r("Description"),ve=n(),B=l("tbody"),se=l("tr"),dt=l("td"),Ce=l("div"),me=l("span"),$e=r("Required"),it=n(),et=l("span"),_e=r("collections"),kt=n(),tt=l("td"),U=l("span"),Ue=r(Le),Y=n(),ge=l("td"),G=r("List of collections to import (replace and create)."),ze=n(),he=l("tr"),Ve=l("td"),V=l("div"),lt=l("span"),vt=r("Optional"),He=n(),at=l("span"),bt=r("deleteMissing"),S=n(),b=l("td"),R=l("span"),H=r("Boolean"),ft=n(),Q=l("td"),st=r("If "),ye=l("em"),te=r("true"),Te=r(` all existing collections and schema fields that are not present in the
                    imported configuration `),ue=l("strong"),Pe=r("will be deleted"),re=r(`, including their related records
                    data (default to
                    `),Nt=l("em"),Ae=r("false"),xt=r(")."),rt=n(),K=l("small"),ot=r("Body parameters could be sent as "),E=l("em"),k=r("JSON"),M=r(` or
        `),It=l("em"),Fe=r("multipart/form-data"),Yt=r("."),Ye=n(),Qe=l("div"),z=r("Responses"),Ke=n(),mt=l("div"),Se=l("div");for(let T=0;T<ht.length;T+=1)ht[T].c();el=n(),Ht=l("div");for(let T=0;T<Re.length;T+=1)Re[T].c();this.h()},l(T){i=a(T,"DIV",{class:!0});var N=s(i);f=a(N,"P",{});var Z=s(f);h=o(Z,"Bulk imports the provided "),v=a(Z,"EM",{});var nt=s(v);m=o(nt,"Collections"),nt.forEach(t),p=o(Z," configuration."),Z.forEach(t),$=c(N),x=a(N,"P",{});var ll=s(x);A=o(ll,"Only admins can perform this action."),ll.forEach(t),N.forEach(t),_=c(T),ke(W.$$.fragment,T),we=c(T),ce=a(T,"DIV",{class:!0});var Qt=s(ce);I=a(Qt,"STRONG",{class:!0});var Wt=s(I);le=o(Wt,"PUT"),Wt.forEach(t),We=c(Qt),pe=a(Qt,"DIV",{class:!0});var ul=s(pe);St=o(ul,"/api/collections/import"),ul.forEach(t),J=c(Qt),ct=a(Qt,"SMALL",{class:!0});var Ze=s(ct);Ie=o(Ze,"Requires "),be=a(Ze,"CODE",{});var Dt=s(be);pt=o(Dt,"Authorization: TOKEN"),Dt.forEach(t),Ze.forEach(t),Qt.forEach(t),ae=c(T),X=a(T,"DIV",{class:!0});var al=s(X);Me=o(al,"Body Parameters"),al.forEach(t),C=c(T),ee=a(T,"TABLE",{class:!0});var pl=s(ee);j=a(pl,"THEAD",{});var Ee=s(j);ie=a(Ee,"TR",{});var qt=s(ie);Ge=a(qt,"TH",{});var ut=s(Ge);Rt=o(ut,"Param"),ut.forEach(t),je=c(qt),qe=a(qt,"TH",{});var Zl=s(qe);Ot=o(Zl,"Type"),Zl.forEach(t),De=c(qt),P=a(qt,"TH",{width:!0});var Jl=s(P);fe=o(Jl,"Description"),Jl.forEach(t),qt.forEach(t),Ee.forEach(t),ve=c(pl),B=a(pl,"TBODY",{});var Kt=s(B);se=a(Kt,"TR",{});var yt=s(se);dt=a(yt,"TD",{});var La=s(dt);Ce=a(La,"DIV",{class:!0});var sl=s(Ce);me=a(sl,"SPAN",{class:!0});var Je=s(me);$e=o(Je,"Required"),Je.forEach(t),it=c(sl),et=a(sl,"SPAN",{class:!0});var Xl=s(et);_e=o(Xl,"collections"),Xl.forEach(t),sl.forEach(t),La.forEach(t),kt=c(yt),tt=a(yt,"TD",{});var wl=s(tt);U=a(wl,"SPAN",{class:!0});var Ha=s(U);Ue=o(Ha,Le),Ha.forEach(t),wl.forEach(t),Y=c(yt),ge=a(yt,"TD",{});var Dl=s(ge);G=o(Dl,"List of collections to import (replace and create)."),Dl.forEach(t),yt.forEach(t),ze=c(Kt),he=a(Kt,"TR",{});var rl=s(he);Ve=a(rl,"TD",{});var de=s(Ve);V=a(de,"DIV",{class:!0});var $l=s(V);lt=a($l,"SPAN",{class:!0});var ea=s(lt);vt=o(ea,"Optional"),ea.forEach(t),He=c($l),at=a($l,"SPAN",{class:!0});var Gt=s(at);bt=o(Gt,"deleteMissing"),Gt.forEach(t),$l.forEach(t),de.forEach(t),S=c(rl),b=a(rl,"TD",{});var Fa=s(b);R=a(Fa,"SPAN",{class:!0});var yl=s(R);H=o(yl,"Boolean"),yl.forEach(t),Fa.forEach(t),ft=c(rl),Q=a(rl,"TD",{});var jt=s(Q);st=o(jt,"If "),ye=a(jt,"EM",{});var Wa=s(ye);te=o(Wa,"true"),Wa.forEach(t),Te=o(jt,` all existing collections and schema fields that are not present in the
                    imported configuration `),ue=a(jt,"STRONG",{});var ta=s(ue);Pe=o(ta,"will be deleted"),ta.forEach(t),re=o(jt,`, including their related records
                    data (default to
                    `),Nt=a(jt,"EM",{});var Pt=s(Nt);Ae=o(Pt,"false"),Pt.forEach(t),xt=o(jt,")."),jt.forEach(t),rl.forEach(t),Kt.forEach(t),pl.forEach(t),rt=c(T),K=a(T,"SMALL",{class:!0});var Pl=s(K);ot=o(Pl,"Body parameters could be sent as "),E=a(Pl,"EM",{});var Al=s(E);k=o(Al,"JSON"),Al.forEach(t),M=o(Pl,` or
        `),It=a(Pl,"EM",{});var la=s(It);Fe=o(la,"multipart/form-data"),la.forEach(t),Yt=o(Pl,"."),Pl.forEach(t),Ye=c(T),Qe=a(T,"DIV",{class:!0});var Ga=s(Qe);z=o(Ga,"Responses"),Ga.forEach(t),Ke=c(T),mt=a(T,"DIV",{class:!0});var Sl=s(mt);Se=a(Sl,"DIV",{class:!0});var ol=s(Se);for(let Ct=0;Ct<ht.length;Ct+=1)ht[Ct].l(ol);ol.forEach(t),el=c(Sl),Ht=a(Sl,"DIV",{class:!0});var ja=s(Ht);for(let Ct=0;Ct<Re.length;Ct+=1)Re[Ct].l(ja);ja.forEach(t),Sl.forEach(t),this.h()},h(){d(i,"class","content m-b-sm"),d(I,"class","label label-primary"),d(pe,"class","content"),d(ct,"class","txt-hint auth-header"),d(ce,"class","api-route alert alert-warning"),d(X,"class","section-title"),d(P,"width","50%"),d(me,"class","label label-success"),d(et,"class","txt"),d(Ce,"class","inline-flex"),d(U,"class","label"),d(lt,"class","label label-warning"),d(at,"class","txt"),d(V,"class","inline-flex"),d(R,"class","label"),d(ee,"class","table-compact table-border"),d(K,"class","block txt-hint m-t-10 m-b-base"),d(Qe,"class","section-title"),d(Se,"class","tabs-header compact left"),d(Ht,"class","tabs-content"),d(mt,"class","tabs")},m(T,N){g(T,i,N),e(i,f),e(f,h),e(f,v),e(v,m),e(f,p),e(i,$),e(i,x),e(x,A),g(T,_,N),Ne(W,T,N),g(T,we,N),g(T,ce,N),e(ce,I),e(I,le),e(ce,We),e(ce,pe),e(pe,St),e(ce,J),e(ce,ct),e(ct,Ie),e(ct,be),e(be,pt),g(T,ae,N),g(T,X,N),e(X,Me),g(T,C,N),g(T,ee,N),e(ee,j),e(j,ie),e(ie,Ge),e(Ge,Rt),e(ie,je),e(ie,qe),e(qe,Ot),e(ie,De),e(ie,P),e(P,fe),e(ee,ve),e(ee,B),e(B,se),e(se,dt),e(dt,Ce),e(Ce,me),e(me,$e),e(Ce,it),e(Ce,et),e(et,_e),e(se,kt),e(se,tt),e(tt,U),e(U,Ue),e(se,Y),e(se,ge),e(ge,G),e(B,ze),e(B,he),e(he,Ve),e(Ve,V),e(V,lt),e(lt,vt),e(V,He),e(V,at),e(at,bt),e(he,S),e(he,b),e(b,R),e(R,H),e(he,ft),e(he,Q),e(Q,st),e(Q,ye),e(ye,te),e(Q,Te),e(Q,ue),e(ue,Pe),e(Q,re),e(Q,Nt),e(Nt,Ae),e(Q,xt),g(T,rt,N),g(T,K,N),e(K,ot),e(K,E),e(E,k),e(K,M),e(K,It),e(It,Fe),e(K,Yt),g(T,Ye,N),g(T,Qe,N),e(Qe,z),g(T,Ke,N),g(T,mt,N),e(mt,Se);for(let Z=0;Z<ht.length;Z+=1)ht[Z]&&ht[Z].m(Se,null);e(mt,el),e(mt,Ht);for(let Z=0;Z<Re.length;Z+=1)Re[Z]&&Re[Z].m(Ht,null);wt=!0},p(T,N){N&3&&(_t=T[1],ht=Jr(ht,N,Ft,1,T,_t,gt,Se,ju,G1,null,W1)),N&3&&(tl=T[1],Uu(),Re=Jr(Re,N,Cl,1,T,tl,Tt,Ht,zu,j1,null,F1),Yu())},i(T){if(!wt){oe(W.$$.fragment,T);for(let N=0;N<tl.length;N+=1)oe(Re[N]);wt=!0}},o(T){ne(W.$$.fragment,T);for(let N=0;N<Re.length;N+=1)ne(Re[N]);wt=!1},d(T){T&&t(i),T&&t(_),xe(W,T),T&&t(we),T&&t(ce),T&&t(ae),T&&t(X),T&&t(C),T&&t(ee),T&&t(rt),T&&t(K),T&&t(Ye),T&&t(Qe),T&&t(Ke),T&&t(mt);for(let N=0;N<ht.length;N+=1)ht[N].d();for(let N=0;N<Re.length;N+=1)Re[N].d()}}}function mm(w){let i,f;return i=new Ku({props:{single:!0,title:"Import collections",$$slots:{default:[vm]},$$scope:{ctx:w}}}),{c(){Oe(i.$$.fragment)},l(h){ke(i.$$.fragment,h)},m(h,v){Ne(i,h,v),f=!0},p(h,[v]){const m={};v&257&&(m.$$scope={dirty:v,ctx:h}),i.$set(m)},i(h){f||(oe(i.$$.fragment,h),f=!0)},o(h){ne(i.$$.fragment,h),f=!1},d(h){xe(i,h)}}}function _m(w,i,f){const h=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "collections": {
                      "code": "collections_import_failure",
                      "message": "Failed to import the collections configuration."
                    }
                  }
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
            `}];let v=h[0].code;return[v,h,p=>f(0,v=p.code)]}class Em extends Iu{constructor(i){super(),qu(this,i,_m,mm,Cu,{})}}function bm(w){let i,f,h,v,m,p,$,x,A,_,W,we,ce;return f=new J1({}),v=new lm({}),p=new om({}),x=new im({}),_=new pm({}),we=new Em({}),{c(){i=l("div"),Oe(f.$$.fragment),h=n(),Oe(v.$$.fragment),m=n(),Oe(p.$$.fragment),$=n(),Oe(x.$$.fragment),A=n(),Oe(_.$$.fragment),W=n(),Oe(we.$$.fragment),this.h()},l(I){i=a(I,"DIV",{class:!0});var le=s(i);ke(f.$$.fragment,le),h=c(le),ke(v.$$.fragment,le),m=c(le),ke(p.$$.fragment,le),$=c(le),ke(x.$$.fragment,le),A=c(le),ke(_.$$.fragment,le),W=c(le),ke(we.$$.fragment,le),le.forEach(t),this.h()},h(){d(i,"class","accordions")},m(I,le){g(I,i,le),Ne(f,i,null),e(i,h),Ne(v,i,null),e(i,m),Ne(p,i,null),e(i,$),Ne(x,i,null),e(i,A),Ne(_,i,null),e(i,W),Ne(we,i,null),ce=!0},p:U1,i(I){ce||(oe(f.$$.fragment,I),oe(v.$$.fragment,I),oe(p.$$.fragment,I),oe(x.$$.fragment,I),oe(_.$$.fragment,I),oe(we.$$.fragment,I),ce=!0)},o(I){ne(f.$$.fragment,I),ne(v.$$.fragment,I),ne(p.$$.fragment,I),ne(x.$$.fragment,I),ne(_.$$.fragment,I),ne(we.$$.fragment,I),ce=!1},d(I){I&&t(i),xe(f),xe(v),xe(p),xe(x),xe(_),xe(we)}}}class Am extends Iu{constructor(i){super(),qu(this,i,null,bm,Cu,{})}}export{Am as component};
