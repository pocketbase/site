import{S as Ot,i as It,s as Vt,y as We,z as Ye,A as Fe,g as ye,d as we,B as Ke,k as r,q as h,a as u,l as o,m as i,r as _,h as t,c as p,n as E,b as w,G as e,N as ht,R as St,v as At,O as zt,f as Nt,K as Qe,L as qt,H as Ol}from"../chunks/index.a7566c1a.js";import{A as Ht}from"../chunks/Accordion.71344b00.js";import{C as Lt}from"../chunks/CodeBlock.a090ee9b.js";import{C as Mt}from"../chunks/CodeTabs.3c6448ff.js";import{F as Il}from"../chunks/FieldsQueryParam.61e1061c.js";function sl(v,l,a){const s=v.slice();return s[3]=l[a],s}function rl(v,l,a){const s=v.slice();return s[3]=l[a],s}function ol(v,l){let a,s=l[3].code+"",d,f,n,T;function S(){return l[2](l[3])}return{key:v,first:null,c(){a=r("button"),d=h(s),f=u(),this.h()},l(P){a=o(P,"BUTTON",{class:!0});var b=i(a);d=_(b,s),f=p(b),b.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(P,b){w(P,a,b),e(a,d),e(a,f),n||(T=qt(a,"click",S),n=!0)},p(P,b){l=P,b&3&&Qe(a,"active",l[0]===l[3].code)},d(P){P&&t(a),n=!1,T()}}}function il(v,l){let a,s,d,f;return s=new Lt({props:{content:l[3].body}}),{key:v,first:null,c(){a=r("div"),We(s.$$.fragment),d=u(),this.h()},l(n){a=o(n,"DIV",{class:!0});var T=i(a);Ye(s.$$.fragment,T),d=p(T),T.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(n,T){w(n,a,T),Fe(s,a,null),e(a,d),f=!0},p(n,T){l=n,(!f||T&3)&&Qe(a,"active",l[0]===l[3].code)},i(n){f||(ye(s.$$.fragment,n),f=!0)},o(n){we(s.$$.fragment,n),f=!1},d(n){n&&t(a),Ke(s)}}}function Vl(v){let l,a,s,d,f,n,T,S,P,b,z,re,A,R,F,Me,U,je,oe,de,Ae,H,ve,fe,Q,Be,le,J,Ie,x,K,ue,ae,pe,he,ze,be,se,ie,L=[],$e=new Map,Ne,G,N=[],Ue=new Map,Re;S=new Mt({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const backups = await pb.backups.getFullList();
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final backups = await pb.backups.getFullList();
        `}}),ae=new Il({});let De=v[1];const ke=m=>m[3].code;for(let m=0;m<De.length;m+=1){let O=rl(v,De,m),Y=ke(O);$e.set(Y,L[m]=ol(Y,O))}let ne=v[1];const Ce=m=>m[3].code;for(let m=0;m<ne.length;m+=1){let O=sl(v,ne,m),Y=Ce(O);Ue.set(Y,N[m]=il(Y,O))}return{c(){l=r("div"),a=r("p"),s=h("Returns list with all available backup files."),d=u(),f=r("p"),n=h("Only admins can perform this action."),T=u(),We(S.$$.fragment),P=u(),b=r("div"),z=r("strong"),re=h("GET"),A=u(),R=r("div"),F=h("/api/backups"),Me=u(),U=r("div"),je=h("Query parameters"),oe=u(),de=r("table"),Ae=r("thead"),H=r("tr"),ve=r("th"),fe=h("Param"),Q=u(),Be=r("th"),le=h("Type"),J=u(),Ie=r("th"),x=h("Description"),K=u(),ue=r("tbody"),We(ae.$$.fragment),pe=u(),he=r("div"),ze=h("Responses"),be=u(),se=r("div"),ie=r("div");for(let m=0;m<L.length;m+=1)L[m].c();Ne=u(),G=r("div");for(let m=0;m<N.length;m+=1)N[m].c();this.h()},l(m){l=o(m,"DIV",{class:!0});var O=i(l);a=o(O,"P",{});var Y=i(a);s=_(Y,"Returns list with all available backup files."),Y.forEach(t),d=p(O),f=o(O,"P",{});var W=i(f);n=_(W,"Only admins can perform this action."),W.forEach(t),O.forEach(t),T=p(m),Ye(S.$$.fragment,m),P=p(m),b=o(m,"DIV",{class:!0});var Pe=i(b);z=o(Pe,"STRONG",{class:!0});var Ge=i(z);re=_(Ge,"GET"),Ge.forEach(t),A=p(Pe),R=o(Pe,"DIV",{class:!0});var Ve=i(R);F=_(Ve,"/api/backups"),Ve.forEach(t),Pe.forEach(t),Me=p(m),U=o(m,"DIV",{class:!0});var Z=i(U);je=_(Z,"Query parameters"),Z.forEach(t),oe=p(m),de=o(m,"TABLE",{class:!0});var j=i(de);Ae=o(j,"THEAD",{});var ce=i(Ae);H=o(ce,"TR",{});var qe=i(H);ve=o(qe,"TH",{});var _e=i(ve);fe=_(_e,"Param"),_e.forEach(t),Q=p(qe),Be=o(qe,"TH",{});var q=i(Be);le=_(q,"Type"),q.forEach(t),J=p(qe),Ie=o(qe,"TH",{width:!0});var M=i(Ie);x=_(M,"Description"),M.forEach(t),qe.forEach(t),ce.forEach(t),K=p(j),ue=o(j,"TBODY",{});var Ee=i(ue);Ye(ae.$$.fragment,Ee),Ee.forEach(t),j.forEach(t),pe=p(m),he=o(m,"DIV",{class:!0});var Se=i(he);ze=_(Se,"Responses"),Se.forEach(t),be=p(m),se=o(m,"DIV",{class:!0});var He=i(se);ie=o(He,"DIV",{class:!0});var Le=i(ie);for(let k=0;k<L.length;k+=1)L[k].l(Le);Le.forEach(t),Ne=p(He),G=o(He,"DIV",{class:!0});var X=i(G);for(let k=0;k<N.length;k+=1)N[k].l(X);X.forEach(t),He.forEach(t),this.h()},h(){E(l,"class","content m-b-sm"),E(z,"class","label label-primary"),E(R,"class","content"),E(b,"class","api-route alert alert-info"),E(U,"class","section-title"),E(Ie,"width","50%"),E(de,"class","table-compact table-border m-b-base"),E(he,"class","section-title"),E(ie,"class","tabs-header compact left"),E(G,"class","tabs-content"),E(se,"class","tabs")},m(m,O){w(m,l,O),e(l,a),e(a,s),e(l,d),e(l,f),e(f,n),w(m,T,O),Fe(S,m,O),w(m,P,O),w(m,b,O),e(b,z),e(z,re),e(b,A),e(b,R),e(R,F),w(m,Me,O),w(m,U,O),e(U,je),w(m,oe,O),w(m,de,O),e(de,Ae),e(Ae,H),e(H,ve),e(ve,fe),e(H,Q),e(H,Be),e(Be,le),e(H,J),e(H,Ie),e(Ie,x),e(de,K),e(de,ue),Fe(ae,ue,null),w(m,pe,O),w(m,he,O),e(he,ze),w(m,be,O),w(m,se,O),e(se,ie);for(let Y=0;Y<L.length;Y+=1)L[Y]&&L[Y].m(ie,null);e(se,Ne),e(se,G);for(let Y=0;Y<N.length;Y+=1)N[Y]&&N[Y].m(G,null);Re=!0},p(m,O){O&3&&(De=m[1],L=ht(L,O,ke,1,m,De,$e,ie,St,ol,null,rl)),O&3&&(ne=m[1],At(),N=ht(N,O,Ce,1,m,ne,Ue,G,zt,il,null,sl),Nt())},i(m){if(!Re){ye(S.$$.fragment,m),ye(ae.$$.fragment,m);for(let O=0;O<ne.length;O+=1)ye(N[O]);Re=!0}},o(m){we(S.$$.fragment,m),we(ae.$$.fragment,m);for(let O=0;O<N.length;O+=1)we(N[O]);Re=!1},d(m){m&&t(l),m&&t(T),Ke(S,m),m&&t(P),m&&t(b),m&&t(Me),m&&t(U),m&&t(oe),m&&t(de),Ke(ae),m&&t(pe),m&&t(he),m&&t(be),m&&t(se);for(let O=0;O<L.length;O+=1)L[O].d();for(let O=0;O<N.length;O+=1)N[O].d()}}}function Bl(v){let l,a;return l=new Ht({props:{single:!0,title:"List backups",$$slots:{default:[Vl]},$$scope:{ctx:v}}}),{c(){We(l.$$.fragment)},l(s){Ye(l.$$.fragment,s)},m(s,d){Fe(l,s,d),a=!0},p(s,[d]){const f={};d&257&&(f.$$scope={dirty:d,ctx:s}),l.$set(f)},i(s){a||(ye(l.$$.fragment,s),a=!0)},o(s){we(l.$$.fragment,s),a=!1},d(s){Ke(l,s)}}}function Rl(v,l,a){const s=[{code:200,body:`
              [
                {
                    "key": "pb_backup_20230519162514.zip",
                    "modified": "2023-05-19 16:25:57.542Z",
                    "size": 251316185
                },
                {
                    "key": "pb_backup_20230518162514.zip",
                    "modified": "2023-05-18 16:25:57.542Z",
                    "size": 251314010
                }
              ]
            `},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to load backups filesystem.",
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
            `}];let d=s[0].code;return[d,s,n=>a(0,d=n.code)]}class Sl extends Ot{constructor(l){super(),It(this,l,Rl,Bl,Vt,{})}}function nl(v,l,a){const s=v.slice();return s[3]=l[a],s}function cl(v,l,a){const s=v.slice();return s[3]=l[a],s}function dl(v,l){let a,s=l[3].code+"",d,f,n,T;function S(){return l[2](l[3])}return{key:v,first:null,c(){a=r("button"),d=h(s),f=u(),this.h()},l(P){a=o(P,"BUTTON",{class:!0});var b=i(a);d=_(b,s),f=p(b),b.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(P,b){w(P,a,b),e(a,d),e(a,f),n||(T=qt(a,"click",S),n=!0)},p(P,b){l=P,b&3&&Qe(a,"active",l[0]===l[3].code)},d(P){P&&t(a),n=!1,T()}}}function fl(v,l){let a,s,d,f;return s=new Lt({props:{content:l[3].body}}),{key:v,first:null,c(){a=r("div"),We(s.$$.fragment),d=u(),this.h()},l(n){a=o(n,"DIV",{class:!0});var T=i(a);Ye(s.$$.fragment,T),d=p(T),T.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(n,T){w(n,a,T),Fe(s,a,null),e(a,d),f=!0},p(n,T){l=n,(!f||T&3)&&Qe(a,"active",l[0]===l[3].code)},i(n){f||(ye(s.$$.fragment,n),f=!0)},o(n){we(s.$$.fragment,n),f=!1},d(n){n&&t(a),Ke(s)}}}function Al(v){let l,a,s,d,f,n,T,S,P,b,z,re,A,R,F,Me,U,je,oe,de,Ae,H,ve,fe,Q,Be,le,J,Ie,x,K,ue,ae,pe,he,ze,be,se,ie,L,$e,Ne,G,N,Ue,Re,De,ke,ne,Ce,m,O,Y,W,Pe,Ge,Ve,Z,j,ce,qe,_e,q,M,Ee,Se,He,Le,X,k,c,D,ee,st,Je,$,V,C=[],lt=new Map,xe,et,te=[],Ze=new Map,Oe;z=new Mt({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.create('new_backup.zip');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.create('new_backup.zip');
        `}});let at=v[1];const nt=y=>y[3].code;for(let y=0;y<at.length;y+=1){let I=cl(v,at,y),me=nt(I);lt.set(me,C[y]=dl(me,I))}let Xe=v[1];const ge=y=>y[3].code;for(let y=0;y<Xe.length;y+=1){let I=nl(v,Xe,y),me=ge(I);Ze.set(me,te[y]=fl(me,I))}return{c(){l=r("div"),a=r("p"),s=h("Creates a new app data backup."),d=u(),f=r("p"),n=h("This action will return an error if there is another backup/restore operation already in progress."),T=u(),S=r("p"),P=h("Only admins can perform this action."),b=u(),We(z.$$.fragment),re=u(),A=r("div"),R=r("strong"),F=h("POST"),Me=u(),U=r("div"),je=h("/api/backups"),oe=u(),de=r("small"),Ae=h("Requires "),H=r("code"),ve=h("Authorization: TOKEN"),fe=u(),Q=r("div"),Be=h("Body Parameters"),le=u(),J=r("table"),Ie=r("thead"),x=r("tr"),K=r("th"),ue=h("Param"),ae=u(),pe=r("th"),he=h("Type"),ze=u(),be=r("th"),se=h("Description"),ie=u(),L=r("tbody"),$e=r("tr"),Ne=r("td"),G=r("div"),N=r("span"),Ue=h("Optional"),Re=u(),De=r("span"),ke=h("name"),ne=u(),Ce=r("td"),m=r("span"),O=h("String"),Y=u(),W=r("td"),Pe=h(`The base name of the backup file to create.
                    `),Ge=r("br"),Ve=h(`
                    Must be in the format `),Z=r("code"),j=h("[a-z0-9_-].zip"),ce=u(),qe=r("br"),_e=h(`
                    If not set, it will be auto generated.`),q=u(),M=r("small"),Ee=h("Body parameters could be sent as "),Se=r("em"),He=h("JSON"),Le=h(` or
        `),X=r("em"),k=h("multipart/form-data"),c=h("."),D=u(),ee=r("div"),st=h("Responses"),Je=u(),$=r("div"),V=r("div");for(let y=0;y<C.length;y+=1)C[y].c();xe=u(),et=r("div");for(let y=0;y<te.length;y+=1)te[y].c();this.h()},l(y){l=o(y,"DIV",{class:!0});var I=i(l);a=o(I,"P",{});var me=i(a);s=_(me,"Creates a new app data backup."),me.forEach(t),d=p(I),f=o(I,"P",{});var dt=i(f);n=_(dt,"This action will return an error if there is another backup/restore operation already in progress."),dt.forEach(t),T=p(I),S=o(I,"P",{});var tt=i(S);P=_(tt,"Only admins can perform this action."),tt.forEach(t),I.forEach(t),b=p(y),Ye(z.$$.fragment,y),re=p(y),A=o(y,"DIV",{class:!0});var ot=i(A);R=o(ot,"STRONG",{class:!0});var g=i(R);F=_(g,"POST"),g.forEach(t),Me=p(ot),U=o(ot,"DIV",{class:!0});var B=i(U);je=_(B,"/api/backups"),B.forEach(t),oe=p(ot),de=o(ot,"SMALL",{class:!0});var Te=i(de);Ae=_(Te,"Requires "),H=o(Te,"CODE",{});var rt=i(H);ve=_(rt,"Authorization: TOKEN"),rt.forEach(t),Te.forEach(t),ot.forEach(t),fe=p(y),Q=o(y,"DIV",{class:!0});var it=i(Q);Be=_(it,"Body Parameters"),it.forEach(t),le=p(y),J=o(y,"TABLE",{class:!0});var vt=i(J);Ie=o(vt,"THEAD",{});var _t=i(Ie);x=o(_t,"TR",{});var ft=i(x);K=o(ft,"TH",{});var gt=i(K);ue=_(gt,"Param"),gt.forEach(t),ae=p(ft),pe=o(ft,"TH",{});var ut=i(pe);he=_(ut,"Type"),ut.forEach(t),ze=p(ft),be=o(ft,"TH",{width:!0});var Tt=i(be);se=_(Tt,"Description"),Tt.forEach(t),ft.forEach(t),_t.forEach(t),ie=p(vt),L=o(vt,"TBODY",{});var pt=i(L);$e=o(pt,"TR",{});var ct=i($e);Ne=o(ct,"TD",{});var Ct=i(Ne);G=o(Ct,"DIV",{class:!0});var yt=i(G);N=o(yt,"SPAN",{class:!0});var Ut=i(N);Ue=_(Ut,"Optional"),Ut.forEach(t),Re=p(yt),De=o(yt,"SPAN",{});var $t=i(De);ke=_($t,"name"),$t.forEach(t),yt.forEach(t),Ct.forEach(t),ne=p(ct),Ce=o(ct,"TD",{});var Gt=i(Ce);m=o(Gt,"SPAN",{class:!0});var Wt=i(m);O=_(Wt,"String"),Wt.forEach(t),Gt.forEach(t),Y=p(ct),W=o(ct,"TD",{});var mt=i(W);Pe=_(mt,`The base name of the backup file to create.
                    `),Ge=o(mt,"BR",{}),Ve=_(mt,`
                    Must be in the format `),Z=o(mt,"CODE",{});var Yt=i(Z);j=_(Yt,"[a-z0-9_-].zip"),Yt.forEach(t),ce=p(mt),qe=o(mt,"BR",{}),_e=_(mt,`
                    If not set, it will be auto generated.`),mt.forEach(t),ct.forEach(t),pt.forEach(t),vt.forEach(t),q=p(y),M=o(y,"SMALL",{class:!0});var kt=i(M);Ee=_(kt,"Body parameters could be sent as "),Se=o(kt,"EM",{});var wt=i(Se);He=_(wt,"JSON"),wt.forEach(t),Le=_(kt,` or
        `),X=o(kt,"EM",{});var Ft=i(X);k=_(Ft,"multipart/form-data"),Ft.forEach(t),c=_(kt,"."),kt.forEach(t),D=p(y),ee=o(y,"DIV",{class:!0});var Et=i(ee);st=_(Et,"Responses"),Et.forEach(t),Je=p(y),$=o(y,"DIV",{class:!0});var Dt=i($);V=o(Dt,"DIV",{class:!0});var Kt=i(V);for(let bt=0;bt<C.length;bt+=1)C[bt].l(Kt);Kt.forEach(t),xe=p(Dt),et=o(Dt,"DIV",{class:!0});var jt=i(et);for(let bt=0;bt<te.length;bt+=1)te[bt].l(jt);jt.forEach(t),Dt.forEach(t),this.h()},h(){E(l,"class","content m-b-sm"),E(R,"class","label label-primary"),E(U,"class","content"),E(de,"class","txt-hint auth-header"),E(A,"class","api-route alert alert-success"),E(Q,"class","section-title"),E(be,"width","50%"),E(N,"class","label label-warning"),E(G,"class","inline-flex"),E(m,"class","label"),E(J,"class","table-compact table-border"),E(M,"class","block txt-hint m-t-10 m-b-base"),E(ee,"class","section-title"),E(V,"class","tabs-header compact left"),E(et,"class","tabs-content"),E($,"class","tabs")},m(y,I){w(y,l,I),e(l,a),e(a,s),e(l,d),e(l,f),e(f,n),e(l,T),e(l,S),e(S,P),w(y,b,I),Fe(z,y,I),w(y,re,I),w(y,A,I),e(A,R),e(R,F),e(A,Me),e(A,U),e(U,je),e(A,oe),e(A,de),e(de,Ae),e(de,H),e(H,ve),w(y,fe,I),w(y,Q,I),e(Q,Be),w(y,le,I),w(y,J,I),e(J,Ie),e(Ie,x),e(x,K),e(K,ue),e(x,ae),e(x,pe),e(pe,he),e(x,ze),e(x,be),e(be,se),e(J,ie),e(J,L),e(L,$e),e($e,Ne),e(Ne,G),e(G,N),e(N,Ue),e(G,Re),e(G,De),e(De,ke),e($e,ne),e($e,Ce),e(Ce,m),e(m,O),e($e,Y),e($e,W),e(W,Pe),e(W,Ge),e(W,Ve),e(W,Z),e(Z,j),e(W,ce),e(W,qe),e(W,_e),w(y,q,I),w(y,M,I),e(M,Ee),e(M,Se),e(Se,He),e(M,Le),e(M,X),e(X,k),e(M,c),w(y,D,I),w(y,ee,I),e(ee,st),w(y,Je,I),w(y,$,I),e($,V);for(let me=0;me<C.length;me+=1)C[me]&&C[me].m(V,null);e($,xe),e($,et);for(let me=0;me<te.length;me+=1)te[me]&&te[me].m(et,null);Oe=!0},p(y,I){I&3&&(at=y[1],C=ht(C,I,nt,1,y,at,lt,V,St,dl,null,cl)),I&3&&(Xe=y[1],At(),te=ht(te,I,ge,1,y,Xe,Ze,et,zt,fl,null,nl),Nt())},i(y){if(!Oe){ye(z.$$.fragment,y);for(let I=0;I<Xe.length;I+=1)ye(te[I]);Oe=!0}},o(y){we(z.$$.fragment,y);for(let I=0;I<te.length;I+=1)we(te[I]);Oe=!1},d(y){y&&t(l),y&&t(b),Ke(z,y),y&&t(re),y&&t(A),y&&t(fe),y&&t(Q),y&&t(le),y&&t(J),y&&t(q),y&&t(M),y&&t(D),y&&t(ee),y&&t(Je),y&&t($);for(let I=0;I<C.length;I+=1)C[I].d();for(let I=0;I<te.length;I+=1)te[I].d()}}}function zl(v){let l,a;return l=new Ht({props:{single:!0,title:"Create backup",$$slots:{default:[Al]},$$scope:{ctx:v}}}),{c(){We(l.$$.fragment)},l(s){Ye(l.$$.fragment,s)},m(s,d){Fe(l,s,d),a=!0},p(s,[d]){const f={};d&257&&(f.$$scope={dirty:d,ctx:s}),l.$set(f)},i(s){a||(ye(l.$$.fragment,s),a=!0)},o(s){we(l.$$.fragment,s),a=!1},d(s){Ke(l,s)}}}function Nl(v,l,a){const s=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Try again later - another backup/restore process has already been started.",
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
            `}];let d=s[0].code;return[d,s,n=>a(0,d=n.code)]}class ql extends Ot{constructor(l){super(),It(this,l,Nl,zl,Vt,{})}}function ul(v,l,a){const s=v.slice();return s[3]=l[a],s}function pl(v,l,a){const s=v.slice();return s[3]=l[a],s}function hl(v,l){let a,s=l[3].code+"",d,f,n,T;function S(){return l[2](l[3])}return{key:v,first:null,c(){a=r("button"),d=h(s),f=u(),this.h()},l(P){a=o(P,"BUTTON",{class:!0});var b=i(a);d=_(b,s),f=p(b),b.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(P,b){w(P,a,b),e(a,d),e(a,f),n||(T=qt(a,"click",S),n=!0)},p(P,b){l=P,b&3&&Qe(a,"active",l[0]===l[3].code)},d(P){P&&t(a),n=!1,T()}}}function _l(v,l){let a,s,d,f;return s=new Lt({props:{content:l[3].body}}),{key:v,first:null,c(){a=r("div"),We(s.$$.fragment),d=u(),this.h()},l(n){a=o(n,"DIV",{class:!0});var T=i(a);Ye(s.$$.fragment,T),d=p(T),T.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(n,T){w(n,a,T),Fe(s,a,null),e(a,d),f=!0},p(n,T){l=n,(!f||T&3)&&Qe(a,"active",l[0]===l[3].code)},i(n){f||(ye(s.$$.fragment,n),f=!0)},o(n){we(s.$$.fragment,n),f=!1},d(n){n&&t(a),Ke(s)}}}function Hl(v){let l,a,s,d,f,n,T,S,P,b,z,re,A,R,F,Me,U,je,oe,de,Ae,H,ve,fe,Q,Be,le,J,Ie,x,K,ue,ae,pe,he,ze,be,se,ie,L,$e,Ne,G,N,Ue,Re,De,ke,ne,Ce,m,O,Y,W,Pe,Ge,Ve,Z,j,ce,qe,_e,q,M,Ee=[],Se=new Map,He,Le,X=[],k=new Map,c;S=new Mt({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.upload({ file: new Blob([...]) });
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.upload(http.MultipartFile.fromBytes('file', ...));
        `}});let D=v[1];const ee=$=>$[3].code;for(let $=0;$<D.length;$+=1){let V=pl(v,D,$),C=ee(V);Se.set(C,Ee[$]=hl(C,V))}let st=v[1];const Je=$=>$[3].code;for(let $=0;$<st.length;$+=1){let V=ul(v,st,$),C=Je(V);k.set(C,X[$]=_l(C,V))}return{c(){l=r("div"),a=r("p"),s=h("Uploads an existing backup zip file."),d=u(),f=r("p"),n=h("Only admins can perform this action."),T=u(),We(S.$$.fragment),P=u(),b=r("div"),z=r("strong"),re=h("POST"),A=u(),R=r("div"),F=h("/api/backups/upload"),Me=u(),U=r("small"),je=h("Requires "),oe=r("code"),de=h("Authorization: TOKEN"),Ae=u(),H=r("div"),ve=h("Body Parameters"),fe=u(),Q=r("table"),Be=r("thead"),le=r("tr"),J=r("th"),Ie=h("Param"),x=u(),K=r("th"),ue=h("Type"),ae=u(),pe=r("th"),he=h("Description"),ze=u(),be=r("tbody"),se=r("tr"),ie=r("td"),L=r("div"),$e=r("span"),Ne=h("Required"),G=u(),N=r("span"),Ue=h("file"),Re=u(),De=r("td"),ke=r("span"),ne=h("File"),Ce=u(),m=r("td"),O=h("The zip archive to upload."),Y=u(),W=r("small"),Pe=h("Uploading files is supported only via "),Ge=r("em"),Ve=h("multipart/form-data"),Z=h("."),j=u(),ce=r("div"),qe=h("Responses"),_e=u(),q=r("div"),M=r("div");for(let $=0;$<Ee.length;$+=1)Ee[$].c();He=u(),Le=r("div");for(let $=0;$<X.length;$+=1)X[$].c();this.h()},l($){l=o($,"DIV",{class:!0});var V=i(l);a=o(V,"P",{});var C=i(a);s=_(C,"Uploads an existing backup zip file."),C.forEach(t),d=p(V),f=o(V,"P",{});var lt=i(f);n=_(lt,"Only admins can perform this action."),lt.forEach(t),V.forEach(t),T=p($),Ye(S.$$.fragment,$),P=p($),b=o($,"DIV",{class:!0});var xe=i(b);z=o(xe,"STRONG",{class:!0});var et=i(z);re=_(et,"POST"),et.forEach(t),A=p(xe),R=o(xe,"DIV",{class:!0});var te=i(R);F=_(te,"/api/backups/upload"),te.forEach(t),Me=p(xe),U=o(xe,"SMALL",{class:!0});var Ze=i(U);je=_(Ze,"Requires "),oe=o(Ze,"CODE",{});var Oe=i(oe);de=_(Oe,"Authorization: TOKEN"),Oe.forEach(t),Ze.forEach(t),xe.forEach(t),Ae=p($),H=o($,"DIV",{class:!0});var at=i(H);ve=_(at,"Body Parameters"),at.forEach(t),fe=p($),Q=o($,"TABLE",{class:!0});var nt=i(Q);Be=o(nt,"THEAD",{});var Xe=i(Be);le=o(Xe,"TR",{});var ge=i(le);J=o(ge,"TH",{});var y=i(J);Ie=_(y,"Param"),y.forEach(t),x=p(ge),K=o(ge,"TH",{});var I=i(K);ue=_(I,"Type"),I.forEach(t),ae=p(ge),pe=o(ge,"TH",{width:!0});var me=i(pe);he=_(me,"Description"),me.forEach(t),ge.forEach(t),Xe.forEach(t),ze=p(nt),be=o(nt,"TBODY",{});var dt=i(be);se=o(dt,"TR",{});var tt=i(se);ie=o(tt,"TD",{});var ot=i(ie);L=o(ot,"DIV",{class:!0});var g=i(L);$e=o(g,"SPAN",{class:!0});var B=i($e);Ne=_(B,"Required"),B.forEach(t),G=p(g),N=o(g,"SPAN",{});var Te=i(N);Ue=_(Te,"file"),Te.forEach(t),g.forEach(t),ot.forEach(t),Re=p(tt),De=o(tt,"TD",{});var rt=i(De);ke=o(rt,"SPAN",{class:!0});var it=i(ke);ne=_(it,"File"),it.forEach(t),rt.forEach(t),Ce=p(tt),m=o(tt,"TD",{});var vt=i(m);O=_(vt,"The zip archive to upload."),vt.forEach(t),tt.forEach(t),dt.forEach(t),nt.forEach(t),Y=p($),W=o($,"SMALL",{class:!0});var _t=i(W);Pe=_(_t,"Uploading files is supported only via "),Ge=o(_t,"EM",{});var ft=i(Ge);Ve=_(ft,"multipart/form-data"),ft.forEach(t),Z=_(_t,"."),_t.forEach(t),j=p($),ce=o($,"DIV",{class:!0});var gt=i(ce);qe=_(gt,"Responses"),gt.forEach(t),_e=p($),q=o($,"DIV",{class:!0});var ut=i(q);M=o(ut,"DIV",{class:!0});var Tt=i(M);for(let ct=0;ct<Ee.length;ct+=1)Ee[ct].l(Tt);Tt.forEach(t),He=p(ut),Le=o(ut,"DIV",{class:!0});var pt=i(Le);for(let ct=0;ct<X.length;ct+=1)X[ct].l(pt);pt.forEach(t),ut.forEach(t),this.h()},h(){E(l,"class","content m-b-sm"),E(z,"class","label label-primary"),E(R,"class","content"),E(U,"class","txt-hint auth-header"),E(b,"class","api-route alert alert-success"),E(H,"class","section-title"),E(pe,"width","50%"),E($e,"class","label label-success"),E(L,"class","inline-flex"),E(ke,"class","label"),E(Q,"class","table-compact table-border"),E(W,"class","block txt-hint m-t-10 m-b-base"),E(ce,"class","section-title"),E(M,"class","tabs-header compact left"),E(Le,"class","tabs-content"),E(q,"class","tabs")},m($,V){w($,l,V),e(l,a),e(a,s),e(l,d),e(l,f),e(f,n),w($,T,V),Fe(S,$,V),w($,P,V),w($,b,V),e(b,z),e(z,re),e(b,A),e(b,R),e(R,F),e(b,Me),e(b,U),e(U,je),e(U,oe),e(oe,de),w($,Ae,V),w($,H,V),e(H,ve),w($,fe,V),w($,Q,V),e(Q,Be),e(Be,le),e(le,J),e(J,Ie),e(le,x),e(le,K),e(K,ue),e(le,ae),e(le,pe),e(pe,he),e(Q,ze),e(Q,be),e(be,se),e(se,ie),e(ie,L),e(L,$e),e($e,Ne),e(L,G),e(L,N),e(N,Ue),e(se,Re),e(se,De),e(De,ke),e(ke,ne),e(se,Ce),e(se,m),e(m,O),w($,Y,V),w($,W,V),e(W,Pe),e(W,Ge),e(Ge,Ve),e(W,Z),w($,j,V),w($,ce,V),e(ce,qe),w($,_e,V),w($,q,V),e(q,M);for(let C=0;C<Ee.length;C+=1)Ee[C]&&Ee[C].m(M,null);e(q,He),e(q,Le);for(let C=0;C<X.length;C+=1)X[C]&&X[C].m(Le,null);c=!0},p($,V){V&3&&(D=$[1],Ee=ht(Ee,V,ee,1,$,D,Se,M,St,hl,null,pl)),V&3&&(st=$[1],At(),X=ht(X,V,Je,1,$,st,k,Le,zt,_l,null,ul),Nt())},i($){if(!c){ye(S.$$.fragment,$);for(let V=0;V<st.length;V+=1)ye(X[V]);c=!0}},o($){we(S.$$.fragment,$);for(let V=0;V<X.length;V+=1)we(X[V]);c=!1},d($){$&&t(l),$&&t(T),Ke(S,$),$&&t(P),$&&t(b),$&&t(Ae),$&&t(H),$&&t(fe),$&&t(Q),$&&t(Y),$&&t(W),$&&t(j),$&&t(ce),$&&t(_e),$&&t(q);for(let V=0;V<Ee.length;V+=1)Ee[V].d();for(let V=0;V<X.length;V+=1)X[V].d()}}}function Ll(v){let l,a;return l=new Ht({props:{single:!0,title:"Upload backup",$$slots:{default:[Hl]},$$scope:{ctx:v}}}),{c(){We(l.$$.fragment)},l(s){Ye(l.$$.fragment,s)},m(s,d){Fe(l,s,d),a=!0},p(s,[d]){const f={};d&257&&(f.$$scope={dirty:d,ctx:s}),l.$set(f)},i(s){a||(ye(l.$$.fragment,s),a=!0)},o(s){we(l.$$.fragment,s),a=!1},d(s){Ke(l,s)}}}function Ml(v,l,a){const s=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request.",
                  "data": {
                    "file": {
                        "code": "validation_invalid_mime_type",
                        "message": "\\"test_backup.txt\\" mime type must be one of: application/zip."
                      }
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
            `}];let d=s[0].code;return[d,s,n=>a(0,d=n.code)]}class Cl extends Ot{constructor(l){super(),It(this,l,Ml,Ll,Vt,{})}}function ml(v,l,a){const s=v.slice();return s[3]=l[a],s}function vl(v,l,a){const s=v.slice();return s[3]=l[a],s}function bl(v,l){let a,s=l[3].code+"",d,f,n,T;function S(){return l[2](l[3])}return{key:v,first:null,c(){a=r("button"),d=h(s),f=u(),this.h()},l(P){a=o(P,"BUTTON",{class:!0});var b=i(a);d=_(b,s),f=p(b),b.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(P,b){w(P,a,b),e(a,d),e(a,f),n||(T=qt(a,"click",S),n=!0)},p(P,b){l=P,b&3&&Qe(a,"active",l[0]===l[3].code)},d(P){P&&t(a),n=!1,T()}}}function $l(v,l){let a,s,d,f;return s=new Lt({props:{content:l[3].body}}),{key:v,first:null,c(){a=r("div"),We(s.$$.fragment),d=u(),this.h()},l(n){a=o(n,"DIV",{class:!0});var T=i(a);Ye(s.$$.fragment,T),d=p(T),T.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(n,T){w(n,a,T),Fe(s,a,null),e(a,d),f=!0},p(n,T){l=n,(!f||T&3)&&Qe(a,"active",l[0]===l[3].code)},i(n){f||(ye(s.$$.fragment,n),f=!0)},o(n){we(s.$$.fragment,n),f=!1},d(n){n&&t(a),Ke(s)}}}function Ul(v){let l,a,s,d,f,n,T,S,P,b,z,re,A,R,F,Me,U,je,oe,de,Ae,H,ve,fe,Q,Be,le,J,Ie,x,K,ue,ae,pe,he,ze,be,se,ie,L,$e,Ne,G,N,Ue,Re,De,ke,ne,Ce,m,O,Y,W,Pe,Ge,Ve,Z,j=[],ce=new Map,qe,_e,q=[],M=new Map,Ee;z=new Mt({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.delete('pb_data_backup.zip');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.delete('pb_data_backup.zip');
        `}});let Se=v[1];const He=k=>k[3].code;for(let k=0;k<Se.length;k+=1){let c=vl(v,Se,k),D=He(c);ce.set(D,j[k]=bl(D,c))}let Le=v[1];const X=k=>k[3].code;for(let k=0;k<Le.length;k+=1){let c=ml(v,Le,k),D=X(c);M.set(D,q[k]=$l(D,c))}return{c(){l=r("div"),a=r("p"),s=h("Deletes a single backup by its name."),d=u(),f=r("p"),n=h(`This action will return an error if the backup to delete is still being generated or part of a
            restore operation.`),T=u(),S=r("p"),P=h("Only admins can perform this action."),b=u(),We(z.$$.fragment),re=u(),A=r("div"),R=r("strong"),F=h("DELETE"),Me=u(),U=r("div"),je=h("/api/backups/"),oe=r("code"),de=h("key"),Ae=u(),H=r("small"),ve=h("Requires "),fe=r("code"),Q=h("Authorization: TOKEN"),Be=u(),le=r("div"),J=h("Path parameters"),Ie=u(),x=r("table"),K=r("thead"),ue=r("tr"),ae=r("th"),pe=h("Param"),he=u(),ze=r("th"),be=h("Type"),se=u(),ie=r("th"),L=h("Description"),$e=u(),Ne=r("tbody"),G=r("tr"),N=r("td"),Ue=h("key"),Re=u(),De=r("td"),ke=r("span"),ne=h("String"),Ce=u(),m=r("td"),O=h("The key of the backup file to delete."),Y=u(),W=r("div"),Pe=h("Responses"),Ge=u(),Ve=r("div"),Z=r("div");for(let k=0;k<j.length;k+=1)j[k].c();qe=u(),_e=r("div");for(let k=0;k<q.length;k+=1)q[k].c();this.h()},l(k){l=o(k,"DIV",{class:!0});var c=i(l);a=o(c,"P",{});var D=i(a);s=_(D,"Deletes a single backup by its name."),D.forEach(t),d=p(c),f=o(c,"P",{});var ee=i(f);n=_(ee,`This action will return an error if the backup to delete is still being generated or part of a
            restore operation.`),ee.forEach(t),T=p(c),S=o(c,"P",{});var st=i(S);P=_(st,"Only admins can perform this action."),st.forEach(t),c.forEach(t),b=p(k),Ye(z.$$.fragment,k),re=p(k),A=o(k,"DIV",{class:!0});var Je=i(A);R=o(Je,"STRONG",{class:!0});var $=i(R);F=_($,"DELETE"),$.forEach(t),Me=p(Je),U=o(Je,"DIV",{class:!0});var V=i(U);je=_(V,"/api/backups/"),oe=o(V,"CODE",{});var C=i(oe);de=_(C,"key"),C.forEach(t),V.forEach(t),Ae=p(Je),H=o(Je,"SMALL",{class:!0});var lt=i(H);ve=_(lt,"Requires "),fe=o(lt,"CODE",{});var xe=i(fe);Q=_(xe,"Authorization: TOKEN"),xe.forEach(t),lt.forEach(t),Je.forEach(t),Be=p(k),le=o(k,"DIV",{class:!0});var et=i(le);J=_(et,"Path parameters"),et.forEach(t),Ie=p(k),x=o(k,"TABLE",{class:!0});var te=i(x);K=o(te,"THEAD",{});var Ze=i(K);ue=o(Ze,"TR",{});var Oe=i(ue);ae=o(Oe,"TH",{});var at=i(ae);pe=_(at,"Param"),at.forEach(t),he=p(Oe),ze=o(Oe,"TH",{});var nt=i(ze);be=_(nt,"Type"),nt.forEach(t),se=p(Oe),ie=o(Oe,"TH",{width:!0});var Xe=i(ie);L=_(Xe,"Description"),Xe.forEach(t),Oe.forEach(t),Ze.forEach(t),$e=p(te),Ne=o(te,"TBODY",{});var ge=i(Ne);G=o(ge,"TR",{});var y=i(G);N=o(y,"TD",{});var I=i(N);Ue=_(I,"key"),I.forEach(t),Re=p(y),De=o(y,"TD",{});var me=i(De);ke=o(me,"SPAN",{class:!0});var dt=i(ke);ne=_(dt,"String"),dt.forEach(t),me.forEach(t),Ce=p(y),m=o(y,"TD",{});var tt=i(m);O=_(tt,"The key of the backup file to delete."),tt.forEach(t),y.forEach(t),ge.forEach(t),te.forEach(t),Y=p(k),W=o(k,"DIV",{class:!0});var ot=i(W);Pe=_(ot,"Responses"),ot.forEach(t),Ge=p(k),Ve=o(k,"DIV",{class:!0});var g=i(Ve);Z=o(g,"DIV",{class:!0});var B=i(Z);for(let rt=0;rt<j.length;rt+=1)j[rt].l(B);B.forEach(t),qe=p(g),_e=o(g,"DIV",{class:!0});var Te=i(_e);for(let rt=0;rt<q.length;rt+=1)q[rt].l(Te);Te.forEach(t),g.forEach(t),this.h()},h(){E(l,"class","content m-b-sm"),E(R,"class","label label-primary"),E(U,"class","content"),E(H,"class","txt-hint auth-header"),E(A,"class","api-route alert alert-success"),E(le,"class","section-title"),E(ie,"width","50%"),E(ke,"class","label"),E(x,"class","table-compact table-border m-b-base"),E(W,"class","section-title"),E(Z,"class","tabs-header compact left"),E(_e,"class","tabs-content"),E(Ve,"class","tabs")},m(k,c){w(k,l,c),e(l,a),e(a,s),e(l,d),e(l,f),e(f,n),e(l,T),e(l,S),e(S,P),w(k,b,c),Fe(z,k,c),w(k,re,c),w(k,A,c),e(A,R),e(R,F),e(A,Me),e(A,U),e(U,je),e(U,oe),e(oe,de),e(A,Ae),e(A,H),e(H,ve),e(H,fe),e(fe,Q),w(k,Be,c),w(k,le,c),e(le,J),w(k,Ie,c),w(k,x,c),e(x,K),e(K,ue),e(ue,ae),e(ae,pe),e(ue,he),e(ue,ze),e(ze,be),e(ue,se),e(ue,ie),e(ie,L),e(x,$e),e(x,Ne),e(Ne,G),e(G,N),e(N,Ue),e(G,Re),e(G,De),e(De,ke),e(ke,ne),e(G,Ce),e(G,m),e(m,O),w(k,Y,c),w(k,W,c),e(W,Pe),w(k,Ge,c),w(k,Ve,c),e(Ve,Z);for(let D=0;D<j.length;D+=1)j[D]&&j[D].m(Z,null);e(Ve,qe),e(Ve,_e);for(let D=0;D<q.length;D+=1)q[D]&&q[D].m(_e,null);Ee=!0},p(k,c){c&3&&(Se=k[1],j=ht(j,c,He,1,k,Se,ce,Z,St,bl,null,vl)),c&3&&(Le=k[1],At(),q=ht(q,c,X,1,k,Le,M,_e,zt,$l,null,ml),Nt())},i(k){if(!Ee){ye(z.$$.fragment,k);for(let c=0;c<Le.length;c+=1)ye(q[c]);Ee=!0}},o(k){we(z.$$.fragment,k);for(let c=0;c<q.length;c+=1)we(q[c]);Ee=!1},d(k){k&&t(l),k&&t(b),Ke(z,k),k&&t(re),k&&t(A),k&&t(Be),k&&t(le),k&&t(Ie),k&&t(x),k&&t(Y),k&&t(W),k&&t(Ge),k&&t(Ve);for(let c=0;c<j.length;c+=1)j[c].d();for(let c=0;c<q.length;c+=1)q[c].d()}}}function Gl(v){let l,a;return l=new Ht({props:{single:!0,title:"Delete backup",$$slots:{default:[Ul]},$$scope:{ctx:v}}}),{c(){We(l.$$.fragment)},l(s){Ye(l.$$.fragment,s)},m(s,d){Fe(l,s,d),a=!0},p(s,[d]){const f={};d&257&&(f.$$scope={dirty:d,ctx:s}),l.$set(f)},i(s){a||(ye(l.$$.fragment,s),a=!0)},o(s){we(l.$$.fragment,s),a=!1},d(s){Ke(l,s)}}}function Wl(v,l,a){const s=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Try again later - another backup/restore process has already been started.",
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
            `}];let d=s[0].code;return[d,s,n=>a(0,d=n.code)]}class Yl extends Ot{constructor(l){super(),It(this,l,Wl,Gl,Vt,{})}}function kl(v,l,a){const s=v.slice();return s[3]=l[a],s}function El(v,l,a){const s=v.slice();return s[3]=l[a],s}function gl(v,l){let a,s=l[3].code+"",d,f,n,T;function S(){return l[2](l[3])}return{key:v,first:null,c(){a=r("button"),d=h(s),f=u(),this.h()},l(P){a=o(P,"BUTTON",{class:!0});var b=i(a);d=_(b,s),f=p(b),b.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(P,b){w(P,a,b),e(a,d),e(a,f),n||(T=qt(a,"click",S),n=!0)},p(P,b){l=P,b&3&&Qe(a,"active",l[0]===l[3].code)},d(P){P&&t(a),n=!1,T()}}}function Tl(v,l){let a,s,d,f;return s=new Lt({props:{content:l[3].body}}),{key:v,first:null,c(){a=r("div"),We(s.$$.fragment),d=u(),this.h()},l(n){a=o(n,"DIV",{class:!0});var T=i(a);Ye(s.$$.fragment,T),d=p(T),T.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(n,T){w(n,a,T),Fe(s,a,null),e(a,d),f=!0},p(n,T){l=n,(!f||T&3)&&Qe(a,"active",l[0]===l[3].code)},i(n){f||(ye(s.$$.fragment,n),f=!0)},o(n){we(s.$$.fragment,n),f=!1},d(n){n&&t(a),Ke(s)}}}function Fl(v){let l,a,s,d,f,n,T,S,P,b,z,re,A,R,F,Me,U,je,oe,de,Ae,H,ve,fe,Q,Be,le,J,Ie,x,K,ue,ae,pe,he,ze,be,se,ie,L,$e,Ne,G,N,Ue,Re,De,ke,ne,Ce,m,O,Y,W,Pe,Ge,Ve,Z,j,ce=[],qe=new Map,_e,q,M=[],Ee=new Map,Se;z=new Mt({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.restore('pb_data_backup.zip');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            await pb.backups.restore('pb_data_backup.zip');
        `}});let He=v[1];const Le=c=>c[3].code;for(let c=0;c<He.length;c+=1){let D=El(v,He,c),ee=Le(D);qe.set(ee,ce[c]=gl(ee,D))}let X=v[1];const k=c=>c[3].code;for(let c=0;c<X.length;c+=1){let D=kl(v,X,c),ee=k(D);Ee.set(ee,M[c]=Tl(ee,D))}return{c(){l=r("div"),a=r("p"),s=h("Restore a single backup by its name and restarts the current running PocketBase process."),d=u(),f=r("p"),n=h("This action will return an error if there is another backup/restore operation already in progress."),T=u(),S=r("p"),P=h("Only admins can perform this action."),b=u(),We(z.$$.fragment),re=u(),A=r("div"),R=r("strong"),F=h("POST"),Me=u(),U=r("div"),je=h("/api/backups/"),oe=r("code"),de=h("key"),Ae=h("/restore"),H=u(),ve=r("small"),fe=h("Requires "),Q=r("code"),Be=h("Authorization: TOKEN"),le=u(),J=r("div"),Ie=h("Path parameters"),x=u(),K=r("table"),ue=r("thead"),ae=r("tr"),pe=r("th"),he=h("Param"),ze=u(),be=r("th"),se=h("Type"),ie=u(),L=r("th"),$e=h("Description"),Ne=u(),G=r("tbody"),N=r("tr"),Ue=r("td"),Re=h("key"),De=u(),ke=r("td"),ne=r("span"),Ce=h("String"),m=u(),O=r("td"),Y=h("The key of the backup file to restore."),W=u(),Pe=r("div"),Ge=h("Responses"),Ve=u(),Z=r("div"),j=r("div");for(let c=0;c<ce.length;c+=1)ce[c].c();_e=u(),q=r("div");for(let c=0;c<M.length;c+=1)M[c].c();this.h()},l(c){l=o(c,"DIV",{class:!0});var D=i(l);a=o(D,"P",{});var ee=i(a);s=_(ee,"Restore a single backup by its name and restarts the current running PocketBase process."),ee.forEach(t),d=p(D),f=o(D,"P",{});var st=i(f);n=_(st,"This action will return an error if there is another backup/restore operation already in progress."),st.forEach(t),T=p(D),S=o(D,"P",{});var Je=i(S);P=_(Je,"Only admins can perform this action."),Je.forEach(t),D.forEach(t),b=p(c),Ye(z.$$.fragment,c),re=p(c),A=o(c,"DIV",{class:!0});var $=i(A);R=o($,"STRONG",{class:!0});var V=i(R);F=_(V,"POST"),V.forEach(t),Me=p($),U=o($,"DIV",{class:!0});var C=i(U);je=_(C,"/api/backups/"),oe=o(C,"CODE",{});var lt=i(oe);de=_(lt,"key"),lt.forEach(t),Ae=_(C,"/restore"),C.forEach(t),H=p($),ve=o($,"SMALL",{class:!0});var xe=i(ve);fe=_(xe,"Requires "),Q=o(xe,"CODE",{});var et=i(Q);Be=_(et,"Authorization: TOKEN"),et.forEach(t),xe.forEach(t),$.forEach(t),le=p(c),J=o(c,"DIV",{class:!0});var te=i(J);Ie=_(te,"Path parameters"),te.forEach(t),x=p(c),K=o(c,"TABLE",{class:!0});var Ze=i(K);ue=o(Ze,"THEAD",{});var Oe=i(ue);ae=o(Oe,"TR",{});var at=i(ae);pe=o(at,"TH",{});var nt=i(pe);he=_(nt,"Param"),nt.forEach(t),ze=p(at),be=o(at,"TH",{});var Xe=i(be);se=_(Xe,"Type"),Xe.forEach(t),ie=p(at),L=o(at,"TH",{width:!0});var ge=i(L);$e=_(ge,"Description"),ge.forEach(t),at.forEach(t),Oe.forEach(t),Ne=p(Ze),G=o(Ze,"TBODY",{});var y=i(G);N=o(y,"TR",{});var I=i(N);Ue=o(I,"TD",{});var me=i(Ue);Re=_(me,"key"),me.forEach(t),De=p(I),ke=o(I,"TD",{});var dt=i(ke);ne=o(dt,"SPAN",{class:!0});var tt=i(ne);Ce=_(tt,"String"),tt.forEach(t),dt.forEach(t),m=p(I),O=o(I,"TD",{});var ot=i(O);Y=_(ot,"The key of the backup file to restore."),ot.forEach(t),I.forEach(t),y.forEach(t),Ze.forEach(t),W=p(c),Pe=o(c,"DIV",{class:!0});var g=i(Pe);Ge=_(g,"Responses"),g.forEach(t),Ve=p(c),Z=o(c,"DIV",{class:!0});var B=i(Z);j=o(B,"DIV",{class:!0});var Te=i(j);for(let it=0;it<ce.length;it+=1)ce[it].l(Te);Te.forEach(t),_e=p(B),q=o(B,"DIV",{class:!0});var rt=i(q);for(let it=0;it<M.length;it+=1)M[it].l(rt);rt.forEach(t),B.forEach(t),this.h()},h(){E(l,"class","content m-b-sm"),E(R,"class","label label-primary"),E(U,"class","content"),E(ve,"class","txt-hint auth-header"),E(A,"class","api-route alert alert-success"),E(J,"class","section-title"),E(L,"width","50%"),E(ne,"class","label"),E(K,"class","table-compact table-border m-b-base"),E(Pe,"class","section-title"),E(j,"class","tabs-header compact left"),E(q,"class","tabs-content"),E(Z,"class","tabs")},m(c,D){w(c,l,D),e(l,a),e(a,s),e(l,d),e(l,f),e(f,n),e(l,T),e(l,S),e(S,P),w(c,b,D),Fe(z,c,D),w(c,re,D),w(c,A,D),e(A,R),e(R,F),e(A,Me),e(A,U),e(U,je),e(U,oe),e(oe,de),e(U,Ae),e(A,H),e(A,ve),e(ve,fe),e(ve,Q),e(Q,Be),w(c,le,D),w(c,J,D),e(J,Ie),w(c,x,D),w(c,K,D),e(K,ue),e(ue,ae),e(ae,pe),e(pe,he),e(ae,ze),e(ae,be),e(be,se),e(ae,ie),e(ae,L),e(L,$e),e(K,Ne),e(K,G),e(G,N),e(N,Ue),e(Ue,Re),e(N,De),e(N,ke),e(ke,ne),e(ne,Ce),e(N,m),e(N,O),e(O,Y),w(c,W,D),w(c,Pe,D),e(Pe,Ge),w(c,Ve,D),w(c,Z,D),e(Z,j);for(let ee=0;ee<ce.length;ee+=1)ce[ee]&&ce[ee].m(j,null);e(Z,_e),e(Z,q);for(let ee=0;ee<M.length;ee+=1)M[ee]&&M[ee].m(q,null);Se=!0},p(c,D){D&3&&(He=c[1],ce=ht(ce,D,Le,1,c,He,qe,j,St,gl,null,El)),D&3&&(X=c[1],At(),M=ht(M,D,k,1,c,X,Ee,q,zt,Tl,null,kl),Nt())},i(c){if(!Se){ye(z.$$.fragment,c);for(let D=0;D<X.length;D+=1)ye(M[D]);Se=!0}},o(c){we(z.$$.fragment,c);for(let D=0;D<M.length;D+=1)we(M[D]);Se=!1},d(c){c&&t(l),c&&t(b),Ke(z,c),c&&t(re),c&&t(A),c&&t(le),c&&t(J),c&&t(x),c&&t(K),c&&t(W),c&&t(Pe),c&&t(Ve),c&&t(Z);for(let D=0;D<ce.length;D+=1)ce[D].d();for(let D=0;D<M.length;D+=1)M[D].d()}}}function Kl(v){let l,a;return l=new Ht({props:{single:!0,title:"Restore backup",$$slots:{default:[Fl]},$$scope:{ctx:v}}}),{c(){We(l.$$.fragment)},l(s){Ye(l.$$.fragment,s)},m(s,d){Fe(l,s,d),a=!0},p(s,[d]){const f={};d&257&&(f.$$scope={dirty:d,ctx:s}),l.$set(f)},i(s){a||(ye(l.$$.fragment,s),a=!0)},o(s){we(l.$$.fragment,s),a=!1},d(s){Ke(l,s)}}}function jl(v,l,a){const s=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Try again later - another backup/restore process has already been started.",
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
            `}];let d=s[0].code;return[d,s,n=>a(0,d=n.code)]}class Ql extends Ot{constructor(l){super(),It(this,l,jl,Kl,Vt,{})}}function yl(v,l,a){const s=v.slice();return s[3]=l[a],s}function wl(v,l,a){const s=v.slice();return s[3]=l[a],s}function Dl(v,l){let a,s=l[3].code+"",d,f,n,T;function S(){return l[2](l[3])}return{key:v,first:null,c(){a=r("button"),d=h(s),f=u(),this.h()},l(P){a=o(P,"BUTTON",{class:!0});var b=i(a);d=_(b,s),f=p(b),b.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(P,b){w(P,a,b),e(a,d),e(a,f),n||(T=qt(a,"click",S),n=!0)},p(P,b){l=P,b&3&&Qe(a,"active",l[0]===l[3].code)},d(P){P&&t(a),n=!1,T()}}}function Pl(v,l){let a,s,d,f;return s=new Lt({props:{content:l[3].body}}),{key:v,first:null,c(){a=r("div"),We(s.$$.fragment),d=u(),this.h()},l(n){a=o(n,"DIV",{class:!0});var T=i(a);Ye(s.$$.fragment,T),d=p(T),T.forEach(t),this.h()},h(){E(a,"class","tab-item"),Qe(a,"active",l[0]===l[3].code),this.first=a},m(n,T){w(n,a,T),Fe(s,a,null),e(a,d),f=!0},p(n,T){l=n,(!f||T&3)&&Qe(a,"active",l[0]===l[3].code)},i(n){f||(ye(s.$$.fragment,n),f=!0)},o(n){we(s.$$.fragment,n),f=!1},d(n){n&&t(a),Ke(s)}}}function Jl(v){let l,a,s,d,f,n,T,S,P,b,z,re,A,R,F,Me,U,je,oe,de,Ae,H,ve,fe,Q,Be,le,J,Ie,x,K,ue,ae,pe,he,ze,be,se,ie,L,$e,Ne,G,N,Ue,Re,De,ke,ne,Ce,m,O,Y,W,Pe,Ge,Ve,Z,j,ce,qe,_e,q,M,Ee,Se,He,Le,X,k,c,D,ee,st,Je,$,V,C,lt,xe,et,te,Ze,Oe=[],at=new Map,nt,Xe,ge=[],y=new Map,I;S=new Mt({props:{js:`
            import PocketBase from 'pocketbase';

            const pb = new PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            const token = await pb.files.getToken();

            const url = pb.backups.getDownloadUrl(token, 'pb_data_backup.zip');
        `,dart:`
            import 'package:pocketbase/pocketbase.dart';

            final pb = PocketBase('http://127.0.0.1:8090');

            ...

            await pb.admins.authWithPassword('test@example.com', '1234567890');

            final token = await pb.files.getToken();

            final url = pb.backups.getDownloadUrl(token, 'pb_data_backup.zip');
        `}});let me=v[1];const dt=g=>g[3].code;for(let g=0;g<me.length;g+=1){let B=wl(v,me,g),Te=dt(B);at.set(Te,Oe[g]=Dl(Te,B))}let tt=v[1];const ot=g=>g[3].code;for(let g=0;g<tt.length;g+=1){let B=yl(v,tt,g),Te=ot(B);y.set(Te,ge[g]=Pl(Te,B))}return{c(){l=r("div"),a=r("p"),s=h("Downloads a single backup file."),d=u(),f=r("p"),n=h("Only admins can perform this action."),T=u(),We(S.$$.fragment),P=u(),b=r("div"),z=r("strong"),re=h("GET"),A=u(),R=r("div"),F=h("/api/backups/"),Me=r("code"),U=h("key"),je=u(),oe=r("div"),de=h("Path parameters"),Ae=u(),H=r("table"),ve=r("thead"),fe=r("tr"),Q=r("th"),Be=h("Param"),le=u(),J=r("th"),Ie=h("Type"),x=u(),K=r("th"),ue=h("Description"),ae=u(),pe=r("tbody"),he=r("tr"),ze=r("td"),be=h("key"),se=u(),ie=r("td"),L=r("span"),$e=h("String"),Ne=u(),G=r("td"),N=h("The key of the backup file to download."),Ue=u(),Re=r("div"),De=h("Query parameters"),ke=u(),ne=r("table"),Ce=r("thead"),m=r("tr"),O=r("th"),Y=h("Param"),W=u(),Pe=r("th"),Ge=h("Type"),Ve=u(),Z=r("th"),j=h("Description"),ce=u(),qe=r("tbody"),_e=r("tr"),q=r("td"),M=h("token"),Ee=u(),Se=r("td"),He=r("span"),Le=h("String"),X=u(),k=r("td"),c=h("Admin "),D=r("strong"),ee=h("file token"),st=h(` for granting access to the
                    `),Je=r("strong"),$=h("backup file"),V=h("."),C=u(),lt=r("div"),xe=h("Responses"),et=u(),te=r("div"),Ze=r("div");for(let g=0;g<Oe.length;g+=1)Oe[g].c();nt=u(),Xe=r("div");for(let g=0;g<ge.length;g+=1)ge[g].c();this.h()},l(g){l=o(g,"DIV",{class:!0});var B=i(l);a=o(B,"P",{});var Te=i(a);s=_(Te,"Downloads a single backup file."),Te.forEach(t),d=p(B),f=o(B,"P",{});var rt=i(f);n=_(rt,"Only admins can perform this action."),rt.forEach(t),B.forEach(t),T=p(g),Ye(S.$$.fragment,g),P=p(g),b=o(g,"DIV",{class:!0});var it=i(b);z=o(it,"STRONG",{class:!0});var vt=i(z);re=_(vt,"GET"),vt.forEach(t),A=p(it),R=o(it,"DIV",{class:!0});var _t=i(R);F=_(_t,"/api/backups/"),Me=o(_t,"CODE",{});var ft=i(Me);U=_(ft,"key"),ft.forEach(t),_t.forEach(t),it.forEach(t),je=p(g),oe=o(g,"DIV",{class:!0});var gt=i(oe);de=_(gt,"Path parameters"),gt.forEach(t),Ae=p(g),H=o(g,"TABLE",{class:!0});var ut=i(H);ve=o(ut,"THEAD",{});var Tt=i(ve);fe=o(Tt,"TR",{});var pt=i(fe);Q=o(pt,"TH",{});var ct=i(Q);Be=_(ct,"Param"),ct.forEach(t),le=p(pt),J=o(pt,"TH",{});var Ct=i(J);Ie=_(Ct,"Type"),Ct.forEach(t),x=p(pt),K=o(pt,"TH",{width:!0});var yt=i(K);ue=_(yt,"Description"),yt.forEach(t),pt.forEach(t),Tt.forEach(t),ae=p(ut),pe=o(ut,"TBODY",{});var Ut=i(pe);he=o(Ut,"TR",{});var $t=i(he);ze=o($t,"TD",{});var Gt=i(ze);be=_(Gt,"key"),Gt.forEach(t),se=p($t),ie=o($t,"TD",{});var Wt=i(ie);L=o(Wt,"SPAN",{class:!0});var mt=i(L);$e=_(mt,"String"),mt.forEach(t),Wt.forEach(t),Ne=p($t),G=o($t,"TD",{});var Yt=i(G);N=_(Yt,"The key of the backup file to download."),Yt.forEach(t),$t.forEach(t),Ut.forEach(t),ut.forEach(t),Ue=p(g),Re=o(g,"DIV",{class:!0});var kt=i(Re);De=_(kt,"Query parameters"),kt.forEach(t),ke=p(g),ne=o(g,"TABLE",{class:!0});var wt=i(ne);Ce=o(wt,"THEAD",{});var Ft=i(Ce);m=o(Ft,"TR",{});var Et=i(m);O=o(Et,"TH",{});var Dt=i(O);Y=_(Dt,"Param"),Dt.forEach(t),W=p(Et),Pe=o(Et,"TH",{});var Kt=i(Pe);Ge=_(Kt,"Type"),Kt.forEach(t),Ve=p(Et),Z=o(Et,"TH",{width:!0});var jt=i(Z);j=_(jt,"Description"),jt.forEach(t),Et.forEach(t),Ft.forEach(t),ce=p(wt),qe=o(wt,"TBODY",{});var bt=i(qe);_e=o(bt,"TR",{});var Bt=i(_e);q=o(Bt,"TD",{valign:!0});var Jt=i(q);M=_(Jt,"token"),Jt.forEach(t),Ee=p(Bt),Se=o(Bt,"TD",{valign:!0});var Zt=i(Se);He=o(Zt,"SPAN",{class:!0});var Xt=i(He);Le=_(Xt,"String"),Xt.forEach(t),Zt.forEach(t),X=p(Bt),k=o(Bt,"TD",{valign:!0});var Rt=i(k);c=_(Rt,"Admin "),D=o(Rt,"STRONG",{});var xt=i(D);ee=_(xt,"file token"),xt.forEach(t),st=_(Rt,` for granting access to the
                    `),Je=o(Rt,"STRONG",{});var el=i(Je);$=_(el,"backup file"),el.forEach(t),V=_(Rt,"."),Rt.forEach(t),Bt.forEach(t),bt.forEach(t),wt.forEach(t),C=p(g),lt=o(g,"DIV",{class:!0});var tl=i(lt);xe=_(tl,"Responses"),tl.forEach(t),et=p(g),te=o(g,"DIV",{class:!0});var Qt=i(te);Ze=o(Qt,"DIV",{class:!0});var ll=i(Ze);for(let Pt=0;Pt<Oe.length;Pt+=1)Oe[Pt].l(ll);ll.forEach(t),nt=p(Qt),Xe=o(Qt,"DIV",{class:!0});var al=i(Xe);for(let Pt=0;Pt<ge.length;Pt+=1)ge[Pt].l(al);al.forEach(t),Qt.forEach(t),this.h()},h(){E(l,"class","content m-b-base"),E(z,"class","label label-primary"),E(R,"class","content"),E(b,"class","api-route alert alert-info"),E(oe,"class","section-title"),E(K,"width","50%"),E(L,"class","label"),E(H,"class","table-compact table-border m-b-base"),E(Re,"class","section-title"),E(Z,"width","60%"),E(q,"valign","top"),E(He,"class","label"),E(Se,"valign","top"),E(k,"valign","top"),E(ne,"class","table-compact table-border m-b-base"),E(lt,"class","section-title"),E(Ze,"class","tabs-header compact left"),E(Xe,"class","tabs-content"),E(te,"class","tabs")},m(g,B){w(g,l,B),e(l,a),e(a,s),e(l,d),e(l,f),e(f,n),w(g,T,B),Fe(S,g,B),w(g,P,B),w(g,b,B),e(b,z),e(z,re),e(b,A),e(b,R),e(R,F),e(R,Me),e(Me,U),w(g,je,B),w(g,oe,B),e(oe,de),w(g,Ae,B),w(g,H,B),e(H,ve),e(ve,fe),e(fe,Q),e(Q,Be),e(fe,le),e(fe,J),e(J,Ie),e(fe,x),e(fe,K),e(K,ue),e(H,ae),e(H,pe),e(pe,he),e(he,ze),e(ze,be),e(he,se),e(he,ie),e(ie,L),e(L,$e),e(he,Ne),e(he,G),e(G,N),w(g,Ue,B),w(g,Re,B),e(Re,De),w(g,ke,B),w(g,ne,B),e(ne,Ce),e(Ce,m),e(m,O),e(O,Y),e(m,W),e(m,Pe),e(Pe,Ge),e(m,Ve),e(m,Z),e(Z,j),e(ne,ce),e(ne,qe),e(qe,_e),e(_e,q),e(q,M),e(_e,Ee),e(_e,Se),e(Se,He),e(He,Le),e(_e,X),e(_e,k),e(k,c),e(k,D),e(D,ee),e(k,st),e(k,Je),e(Je,$),e(k,V),w(g,C,B),w(g,lt,B),e(lt,xe),w(g,et,B),w(g,te,B),e(te,Ze);for(let Te=0;Te<Oe.length;Te+=1)Oe[Te]&&Oe[Te].m(Ze,null);e(te,nt),e(te,Xe);for(let Te=0;Te<ge.length;Te+=1)ge[Te]&&ge[Te].m(Xe,null);I=!0},p(g,B){B&3&&(me=g[1],Oe=ht(Oe,B,dt,1,g,me,at,Ze,St,Dl,null,wl)),B&3&&(tt=g[1],At(),ge=ht(ge,B,ot,1,g,tt,y,Xe,zt,Pl,null,yl),Nt())},i(g){if(!I){ye(S.$$.fragment,g);for(let B=0;B<tt.length;B+=1)ye(ge[B]);I=!0}},o(g){we(S.$$.fragment,g);for(let B=0;B<ge.length;B+=1)we(ge[B]);I=!1},d(g){g&&t(l),g&&t(T),Ke(S,g),g&&t(P),g&&t(b),g&&t(je),g&&t(oe),g&&t(Ae),g&&t(H),g&&t(Ue),g&&t(Re),g&&t(ke),g&&t(ne),g&&t(C),g&&t(lt),g&&t(et),g&&t(te);for(let B=0;B<Oe.length;B+=1)Oe[B].d();for(let B=0;B<ge.length;B+=1)ge[B].d()}}}function Zl(v){let l,a;return l=new Ht({props:{single:!0,title:"Download backup",$$slots:{default:[Jl]},$$scope:{ctx:v}}}),{c(){We(l.$$.fragment)},l(s){Ye(l.$$.fragment,s)},m(s,d){Fe(l,s,d),a=!0},p(s,[d]){const f={};d&257&&(f.$$scope={dirty:d,ctx:s}),l.$set(f)},i(s){a||(ye(l.$$.fragment,s),a=!0)},o(s){we(l.$$.fragment,s),a=!1},d(s){Ke(l,s)}}}function Xl(v,l,a){let s=200;return[s,[{code:200,body:"[file resource]"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Filesystem initialization failure.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}],n=>a(0,s=n.code)]}class xl extends Ot{constructor(l){super(),It(this,l,Xl,Zl,Vt,{})}}function ea(v){let l,a,s,d,f,n,T,S,P,b,z,re,A;return a=new Sl({}),d=new ql({}),n=new Cl({}),S=new Yl({}),b=new Ql({}),re=new xl({}),{c(){l=r("div"),We(a.$$.fragment),s=u(),We(d.$$.fragment),f=u(),We(n.$$.fragment),T=u(),We(S.$$.fragment),P=u(),We(b.$$.fragment),z=u(),We(re.$$.fragment),this.h()},l(R){l=o(R,"DIV",{class:!0});var F=i(l);Ye(a.$$.fragment,F),s=p(F),Ye(d.$$.fragment,F),f=p(F),Ye(n.$$.fragment,F),T=p(F),Ye(S.$$.fragment,F),P=p(F),Ye(b.$$.fragment,F),z=p(F),Ye(re.$$.fragment,F),F.forEach(t),this.h()},h(){E(l,"class","accordions")},m(R,F){w(R,l,F),Fe(a,l,null),e(l,s),Fe(d,l,null),e(l,f),Fe(n,l,null),e(l,T),Fe(S,l,null),e(l,P),Fe(b,l,null),e(l,z),Fe(re,l,null),A=!0},p:Ol,i(R){A||(ye(a.$$.fragment,R),ye(d.$$.fragment,R),ye(n.$$.fragment,R),ye(S.$$.fragment,R),ye(b.$$.fragment,R),ye(re.$$.fragment,R),A=!0)},o(R){we(a.$$.fragment,R),we(d.$$.fragment,R),we(n.$$.fragment,R),we(S.$$.fragment,R),we(b.$$.fragment,R),we(re.$$.fragment,R),A=!1},d(R){R&&t(l),Ke(a),Ke(d),Ke(n),Ke(S),Ke(b),Ke(re)}}}class oa extends Ot{constructor(l){super(),It(this,l,null,ea,Vt,{})}}export{oa as component};
