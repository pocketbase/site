import{S as vi,i as _i,s as wi,k as r,q as n,a as f,y as p,l as s,m,r as o,h as a,c as d,z as c,n as Dt,b as l,G as t,A as u,H as hi,g as $,d as g,B as y}from"../chunks/index.a7566c1a.js";import{H as x}from"../chunks/HeadingLink.20322812.js";import{C as S}from"../chunks/CodeBlock.a090ee9b.js";import{T as Ei}from"../chunks/Toc.c31a36b6.js";function Di(bi){let P,kt,je,_,Ct,me,xt,Ot,fe,Pt,Bt,de,Tt,At,pe,jt,Ft,Fe,ne,It,Ie,q,Re,z,Se,B,Rt,ce,St,qt,qe,H,ze,T,zt,ue,Ht,Nt,He,N,Ne,oe,Ue,U,We,O,Ut,$e,Wt,Mt,Me,A,Lt,ge,Qt,Yt,Le,j,Gt,ye,Jt,Vt,Qe,W,Ye,F,Kt,be,Xt,Zt,Ge,w,ea,ve,ta,aa,ia,na,_e,oa,la,we,ra,sa,Je,b,ma,he,fa,da,Ee,pa,ca,De,ua,$a,le,ga,ya,ke,ba,va,Ve,M,Ke,I,_a,Ce,wa,ha,Xe,L,Ze,D,Ea,xe,Da,ka,Oe,Ca,xa,et,re,Oa,tt,Q,at,v,Pa,Pe,Ba,Ta,Aa,ja,Fa,Ia,Be,Ra,Sa,Te,qa,za,it,Y,Ha,nt,G,ot,R,Na,Ae,Ua,Wa,lt,J,rt,V,st,K,mt,X,ft,Z,dt,ee,pt,te,ct,ae,ut,ie,$t;return q=new Ei({}),z=new x({props:{title:"Automigrate"}}),H=new x({props:{title:"Creating migrations"}}),N=new S({props:{content:`
        [root@dev app]$ ./pocketbase migrate create "your_new_migration"
    `}}),U=new S({props:{language:"javascript",content:`
        // pb_migrations/1687801097_your_new_migration.js
        migrate((db) => {
            // add up queries...
        }, (db) => {
            // add down queries...
        })
    `}}),W=new x({props:{title:"Migration file",tag:"h5"}}),M=new x({props:{title:"Collections snapshot"}}),L=new S({props:{content:"[root@dev app]$ ./pocketbase migrate collections"}}),Q=new x({props:{title:"Migrations history"}}),G=new S({props:{content:"[root@dev app]$ ./pocketbase migrate history-sync"}}),J=new x({props:{title:"Examples"}}),V=new x({props:{title:"Running raw SQL statements",tag:"h5"}}),K=new S({props:{language:"javascript",content:`
        // pb_migrations/1687801090_set_pending_status.js
        //
        // set a default "pending" status to all empty status articles
        migrate((db) => {
            db.newQuery("UPDATE articles SET status = 'pending' WHERE status = ''")
                .execute()
        })
    `}}),X=new x({props:{title:"Initialize default application settings",tag:"h5"}}),Z=new S({props:{language:"javascript",content:`
        // pb_migrations/1687801090_initial_settings.js
        migrate((db) => {
            const dao = new Dao(db);

            const settings = dao.findSettings()
            settings.meta.appName = "test"
            settings.logs.maxDays = 2

            dao.saveSettings(settings)
        })
    `}}),ee=new x({props:{title:"Creating new admin",tag:"h5"}}),te=new S({props:{language:"javascript",content:`
        // pb_migrations/1687801090_initial_admin.js
        migrate((db) => {
            const dao = new Dao(db);

            const admin = new Admin();
            admin.email = "test@example.com"
            admin.setPassword("1234567890")

            dao.saveAdmin(admin)
        }, (db) => { // optional revert
            const dao = new Dao(db);

            try {
                const admin = dao.findAdminByEmail("test@example.com")

                dao.deleteAdmin(admin)
            } catch (_) { /* most likely already deleted */ }
        })
    `}}),ae=new x({props:{title:"Creating new auth record",tag:"h5"}}),ie=new S({props:{language:"javascript",content:`
        // pb_migrations/1687801090_new_users_record.js
        migrate((db) => {
            const dao = new Dao(db);

            const collection = dao.findCollectionByNameOrId("users")

            const record = new Record(collection)
            record.setUsername("u_" + $security.randomStringWithAlphabet(5, "123456789"))
            record.setPassword("1234567890")
            record.set("name", "John Doe")
            record.set("email", "test@example.com")

            dao.saveRecord(record)
        }, (db) => { // optional revert
            const dao = new Dao(db);

            try {
                const record = dao.findAuthRecordByEmail("users", "test@example.com")

                dao.deleteRecord(record)
            } catch (_) { /* most likely already deleted */ }
        })
    `}}),{c(){P=r("p"),kt=n(`PocketBase comes with a builtin DB and data migration utility, allowing you to version your DB structure,
    create collections programmatically, initialize default settings and/or run anything that needs to be
    executed only once.`),je=f(),_=r("p"),Ct=n("The user defined migrations are located in "),me=r("code"),xt=n("pb_migrations"),Ot=n(` directory (it can be changed using
    the
    `),fe=r("code"),Pt=n("--migrationsDir"),Bt=n(` flag) and each unapplied migration inside it will be executed automatically
    in a transaction on `),de=r("code"),Tt=n("serve"),At=n(" (or on "),pe=r("code"),jt=n("migrate up"),Ft=n(")."),Fe=f(),ne=r("p"),It=n(`The generated migrations are safe to be commited to version control and can be shared with your other team
    members.`),Ie=f(),p(q.$$.fragment),Re=f(),p(z.$$.fragment),Se=f(),B=r("p"),Rt=n("The prebuilt executable has the "),ce=r("code"),St=n("--automigrate"),qt=n(` flag enabled by default, meaning that every collection
    configuration change from the Admin UI will generate the related migration file automatically for you.`),qe=f(),p(H.$$.fragment),ze=f(),T=r("p"),zt=n("To create a new blank migration you can run "),ue=r("code"),Ht=n("migrate create"),Nt=n("."),He=f(),p(N.$$.fragment),Ne=f(),oe=r("div"),Ue=f(),p(U.$$.fragment),We=f(),O=r("p"),Ut=n("New migrations are applied automatically on "),$e=r("code"),Wt=n("serve"),Mt=n("."),Me=f(),A=r("p"),Lt=n("Optionally, you could apply new migrations manually by running "),ge=r("code"),Qt=n("migrate up"),Yt=n("."),Le=f(),j=r("p"),Gt=n("To revert the last applied migration(s), you could run "),ye=r("code"),Jt=n("migrate down [number]"),Vt=n("."),Qe=f(),p(W.$$.fragment),Ye=f(),F=r("p"),Kt=n("Each migration file should have a single "),be=r("code"),Xt=n("migrate(upFunc, downFunc)"),Zt=n(" call."),Ge=f(),w=r("p"),ea=n('In the migration file, you are expected to write your "upgrade" code in the '),ve=r("code"),ta=n("upFunc"),aa=n(` callback.
    `),ia=r("br"),na=n(`
    The `),_e=r("code"),oa=n("downFunc"),la=n(` is optional and it should contains the "downgrade" operations to revert the
    changes made by the
    `),we=r("code"),ra=n("upFunc"),sa=n("."),Je=f(),b=r("p"),ma=n("Both callbacks accept a single "),he=r("code"),fa=n("db"),da=n(" argument ("),Ee=r("code"),pa=n("dbx.Builder"),ca=n(`) that you can use
    directly or create a `),De=r("code"),ua=n("Dao"),$a=n(` instance and use its available helpers. You can explore the
    `),le=r("a"),ga=n("Database guide"),ya=n(`
    for more details how to operate with the `),ke=r("code"),ba=n("db"),va=n(" object and its available methods."),Ve=f(),p(M.$$.fragment),Ke=f(),I=r("p"),_a=n("PocketBase comes also with a "),Ce=r("code"),wa=n("migrate collections"),ha=n(` command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:`),Xe=f(),p(L.$$.fragment),Ze=f(),D=r("p"),Ea=n("Similar to the "),xe=r("code"),Da=n("migrate create"),ka=n(` command, this will generate a new migration file in the
    `),Oe=r("code"),Ca=n("pb_migrations"),xa=n(" directory."),et=f(),re=r("p"),Oa=n("It is safe to run the command multiple times and generate multiple snapshot migration files."),tt=f(),p(Q.$$.fragment),at=f(),v=r("p"),Pa=n("All applied migration filenames are stored in the internal "),Pe=r("code"),Ba=n("_migrations"),Ta=n(` table.
    `),Aa=r("br"),ja=n(`
    During local development often you might end up making various collection changes to test different approaches.
    `),Fa=r("br"),Ia=n(`
    When `),Be=r("code"),Ra=n("--automigrate"),Sa=n(" is enabled ("),Te=r("em"),qa=n("which is the default"),za=n(`) this could lead in a migration
    history with unnecessary intermediate steps that may not be wanted in the final migration history.`),it=f(),Y=r("p"),Ha=n(`To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:`),nt=f(),p(G.$$.fragment),ot=f(),R=r("p"),Na=n("The above command will remove any entry from the "),Ae=r("code"),Ua=n("_migrations"),Wa=n(` table that doesn't have a related
    migration file associated with it.`),lt=f(),p(J.$$.fragment),rt=f(),p(V.$$.fragment),st=f(),p(K.$$.fragment),mt=f(),p(X.$$.fragment),ft=f(),p(Z.$$.fragment),dt=f(),p(ee.$$.fragment),pt=f(),p(te.$$.fragment),ct=f(),p(ae.$$.fragment),ut=f(),p(ie.$$.fragment),this.h()},l(e){P=s(e,"P",{});var i=m(P);kt=o(i,`PocketBase comes with a builtin DB and data migration utility, allowing you to version your DB structure,
    create collections programmatically, initialize default settings and/or run anything that needs to be
    executed only once.`),i.forEach(a),je=d(e),_=s(e,"P",{});var k=m(_);Ct=o(k,"The user defined migrations are located in "),me=s(k,"CODE",{});var Ma=m(me);xt=o(Ma,"pb_migrations"),Ma.forEach(a),Ot=o(k,` directory (it can be changed using
    the
    `),fe=s(k,"CODE",{});var La=m(fe);Pt=o(La,"--migrationsDir"),La.forEach(a),Bt=o(k,` flag) and each unapplied migration inside it will be executed automatically
    in a transaction on `),de=s(k,"CODE",{});var Qa=m(de);Tt=o(Qa,"serve"),Qa.forEach(a),At=o(k," (or on "),pe=s(k,"CODE",{});var Ya=m(pe);jt=o(Ya,"migrate up"),Ya.forEach(a),Ft=o(k,")."),k.forEach(a),Fe=d(e),ne=s(e,"P",{});var Ga=m(ne);It=o(Ga,`The generated migrations are safe to be commited to version control and can be shared with your other team
    members.`),Ga.forEach(a),Ie=d(e),c(q.$$.fragment,e),Re=d(e),c(z.$$.fragment,e),Se=d(e),B=s(e,"P",{});var gt=m(B);Rt=o(gt,"The prebuilt executable has the "),ce=s(gt,"CODE",{});var Ja=m(ce);St=o(Ja,"--automigrate"),Ja.forEach(a),qt=o(gt,` flag enabled by default, meaning that every collection
    configuration change from the Admin UI will generate the related migration file automatically for you.`),gt.forEach(a),qe=d(e),c(H.$$.fragment,e),ze=d(e),T=s(e,"P",{});var yt=m(T);zt=o(yt,"To create a new blank migration you can run "),ue=s(yt,"CODE",{});var Va=m(ue);Ht=o(Va,"migrate create"),Va.forEach(a),Nt=o(yt,"."),yt.forEach(a),He=d(e),c(N.$$.fragment,e),Ne=d(e),oe=s(e,"DIV",{class:!0}),m(oe).forEach(a),Ue=d(e),c(U.$$.fragment,e),We=d(e),O=s(e,"P",{class:!0});var bt=m(O);Ut=o(bt,"New migrations are applied automatically on "),$e=s(bt,"CODE",{});var Ka=m($e);Wt=o(Ka,"serve"),Ka.forEach(a),Mt=o(bt,"."),bt.forEach(a),Me=d(e),A=s(e,"P",{});var vt=m(A);Lt=o(vt,"Optionally, you could apply new migrations manually by running "),ge=s(vt,"CODE",{});var Xa=m(ge);Qt=o(Xa,"migrate up"),Xa.forEach(a),Yt=o(vt,"."),vt.forEach(a),Le=d(e),j=s(e,"P",{});var _t=m(j);Gt=o(_t,"To revert the last applied migration(s), you could run "),ye=s(_t,"CODE",{});var Za=m(ye);Jt=o(Za,"migrate down [number]"),Za.forEach(a),Vt=o(_t,"."),_t.forEach(a),Qe=d(e),c(W.$$.fragment,e),Ye=d(e),F=s(e,"P",{});var wt=m(F);Kt=o(wt,"Each migration file should have a single "),be=s(wt,"CODE",{});var ei=m(be);Xt=o(ei,"migrate(upFunc, downFunc)"),ei.forEach(a),Zt=o(wt," call."),wt.forEach(a),Ge=d(e),w=s(e,"P",{});var C=m(w);ea=o(C,'In the migration file, you are expected to write your "upgrade" code in the '),ve=s(C,"CODE",{});var ti=m(ve);ta=o(ti,"upFunc"),ti.forEach(a),aa=o(C,` callback.
    `),ia=s(C,"BR",{}),na=o(C,`
    The `),_e=s(C,"CODE",{});var ai=m(_e);oa=o(ai,"downFunc"),ai.forEach(a),la=o(C,` is optional and it should contains the "downgrade" operations to revert the
    changes made by the
    `),we=s(C,"CODE",{});var ii=m(we);ra=o(ii,"upFunc"),ii.forEach(a),sa=o(C,"."),C.forEach(a),Je=d(e),b=s(e,"P",{});var h=m(b);ma=o(h,"Both callbacks accept a single "),he=s(h,"CODE",{});var ni=m(he);fa=o(ni,"db"),ni.forEach(a),da=o(h," argument ("),Ee=s(h,"CODE",{});var oi=m(Ee);pa=o(oi,"dbx.Builder"),oi.forEach(a),ca=o(h,`) that you can use
    directly or create a `),De=s(h,"CODE",{});var li=m(De);ua=o(li,"Dao"),li.forEach(a),$a=o(h,` instance and use its available helpers. You can explore the
    `),le=s(h,"A",{href:!0});var ri=m(le);ga=o(ri,"Database guide"),ri.forEach(a),ya=o(h,`
    for more details how to operate with the `),ke=s(h,"CODE",{});var si=m(ke);ba=o(si,"db"),si.forEach(a),va=o(h," object and its available methods."),h.forEach(a),Ve=d(e),c(M.$$.fragment,e),Ke=d(e),I=s(e,"P",{});var ht=m(I);_a=o(ht,"PocketBase comes also with a "),Ce=s(ht,"CODE",{});var mi=m(Ce);wa=o(mi,"migrate collections"),mi.forEach(a),ha=o(ht,` command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:`),ht.forEach(a),Xe=d(e),c(L.$$.fragment,e),Ze=d(e),D=s(e,"P",{});var se=m(D);Ea=o(se,"Similar to the "),xe=s(se,"CODE",{});var fi=m(xe);Da=o(fi,"migrate create"),fi.forEach(a),ka=o(se,` command, this will generate a new migration file in the
    `),Oe=s(se,"CODE",{});var di=m(Oe);Ca=o(di,"pb_migrations"),di.forEach(a),xa=o(se," directory."),se.forEach(a),et=d(e),re=s(e,"P",{});var pi=m(re);Oa=o(pi,"It is safe to run the command multiple times and generate multiple snapshot migration files."),pi.forEach(a),tt=d(e),c(Q.$$.fragment,e),at=d(e),v=s(e,"P",{});var E=m(v);Pa=o(E,"All applied migration filenames are stored in the internal "),Pe=s(E,"CODE",{});var ci=m(Pe);Ba=o(ci,"_migrations"),ci.forEach(a),Ta=o(E,` table.
    `),Aa=s(E,"BR",{}),ja=o(E,`
    During local development often you might end up making various collection changes to test different approaches.
    `),Fa=s(E,"BR",{}),Ia=o(E,`
    When `),Be=s(E,"CODE",{});var ui=m(Be);Ra=o(ui,"--automigrate"),ui.forEach(a),Sa=o(E," is enabled ("),Te=s(E,"EM",{});var $i=m(Te);qa=o($i,"which is the default"),$i.forEach(a),za=o(E,`) this could lead in a migration
    history with unnecessary intermediate steps that may not be wanted in the final migration history.`),E.forEach(a),it=d(e),Y=s(e,"P",{class:!0});var gi=m(Y);Ha=o(gi,`To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:`),gi.forEach(a),nt=d(e),c(G.$$.fragment,e),ot=d(e),R=s(e,"P",{});var Et=m(R);Na=o(Et,"The above command will remove any entry from the "),Ae=s(Et,"CODE",{});var yi=m(Ae);Ua=o(yi,"_migrations"),yi.forEach(a),Wa=o(Et,` table that doesn't have a related
    migration file associated with it.`),Et.forEach(a),lt=d(e),c(J.$$.fragment,e),rt=d(e),c(V.$$.fragment,e),st=d(e),c(K.$$.fragment,e),mt=d(e),c(X.$$.fragment,e),ft=d(e),c(Z.$$.fragment,e),dt=d(e),c(ee.$$.fragment,e),pt=d(e),c(te.$$.fragment,e),ct=d(e),c(ae.$$.fragment,e),ut=d(e),c(ie.$$.fragment,e),this.h()},h(){Dt(oe,"class","clearfix m-t-xs"),Dt(O,"class","txt-bold"),Dt(le,"href","/docs/js-database"),Dt(Y,"class","txt-bold")},m(e,i){l(e,P,i),t(P,kt),l(e,je,i),l(e,_,i),t(_,Ct),t(_,me),t(me,xt),t(_,Ot),t(_,fe),t(fe,Pt),t(_,Bt),t(_,de),t(de,Tt),t(_,At),t(_,pe),t(pe,jt),t(_,Ft),l(e,Fe,i),l(e,ne,i),t(ne,It),l(e,Ie,i),u(q,e,i),l(e,Re,i),u(z,e,i),l(e,Se,i),l(e,B,i),t(B,Rt),t(B,ce),t(ce,St),t(B,qt),l(e,qe,i),u(H,e,i),l(e,ze,i),l(e,T,i),t(T,zt),t(T,ue),t(ue,Ht),t(T,Nt),l(e,He,i),u(N,e,i),l(e,Ne,i),l(e,oe,i),l(e,Ue,i),u(U,e,i),l(e,We,i),l(e,O,i),t(O,Ut),t(O,$e),t($e,Wt),t(O,Mt),l(e,Me,i),l(e,A,i),t(A,Lt),t(A,ge),t(ge,Qt),t(A,Yt),l(e,Le,i),l(e,j,i),t(j,Gt),t(j,ye),t(ye,Jt),t(j,Vt),l(e,Qe,i),u(W,e,i),l(e,Ye,i),l(e,F,i),t(F,Kt),t(F,be),t(be,Xt),t(F,Zt),l(e,Ge,i),l(e,w,i),t(w,ea),t(w,ve),t(ve,ta),t(w,aa),t(w,ia),t(w,na),t(w,_e),t(_e,oa),t(w,la),t(w,we),t(we,ra),t(w,sa),l(e,Je,i),l(e,b,i),t(b,ma),t(b,he),t(he,fa),t(b,da),t(b,Ee),t(Ee,pa),t(b,ca),t(b,De),t(De,ua),t(b,$a),t(b,le),t(le,ga),t(b,ya),t(b,ke),t(ke,ba),t(b,va),l(e,Ve,i),u(M,e,i),l(e,Ke,i),l(e,I,i),t(I,_a),t(I,Ce),t(Ce,wa),t(I,ha),l(e,Xe,i),u(L,e,i),l(e,Ze,i),l(e,D,i),t(D,Ea),t(D,xe),t(xe,Da),t(D,ka),t(D,Oe),t(Oe,Ca),t(D,xa),l(e,et,i),l(e,re,i),t(re,Oa),l(e,tt,i),u(Q,e,i),l(e,at,i),l(e,v,i),t(v,Pa),t(v,Pe),t(Pe,Ba),t(v,Ta),t(v,Aa),t(v,ja),t(v,Fa),t(v,Ia),t(v,Be),t(Be,Ra),t(v,Sa),t(v,Te),t(Te,qa),t(v,za),l(e,it,i),l(e,Y,i),t(Y,Ha),l(e,nt,i),u(G,e,i),l(e,ot,i),l(e,R,i),t(R,Na),t(R,Ae),t(Ae,Ua),t(R,Wa),l(e,lt,i),u(J,e,i),l(e,rt,i),u(V,e,i),l(e,st,i),u(K,e,i),l(e,mt,i),u(X,e,i),l(e,ft,i),u(Z,e,i),l(e,dt,i),u(ee,e,i),l(e,pt,i),u(te,e,i),l(e,ct,i),u(ae,e,i),l(e,ut,i),u(ie,e,i),$t=!0},p:hi,i(e){$t||($(q.$$.fragment,e),$(z.$$.fragment,e),$(H.$$.fragment,e),$(N.$$.fragment,e),$(U.$$.fragment,e),$(W.$$.fragment,e),$(M.$$.fragment,e),$(L.$$.fragment,e),$(Q.$$.fragment,e),$(G.$$.fragment,e),$(J.$$.fragment,e),$(V.$$.fragment,e),$(K.$$.fragment,e),$(X.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(ae.$$.fragment,e),$(ie.$$.fragment,e),$t=!0)},o(e){g(q.$$.fragment,e),g(z.$$.fragment,e),g(H.$$.fragment,e),g(N.$$.fragment,e),g(U.$$.fragment,e),g(W.$$.fragment,e),g(M.$$.fragment,e),g(L.$$.fragment,e),g(Q.$$.fragment,e),g(G.$$.fragment,e),g(J.$$.fragment,e),g(V.$$.fragment,e),g(K.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(ie.$$.fragment,e),$t=!1},d(e){e&&a(P),e&&a(je),e&&a(_),e&&a(Fe),e&&a(ne),e&&a(Ie),y(q,e),e&&a(Re),y(z,e),e&&a(Se),e&&a(B),e&&a(qe),y(H,e),e&&a(ze),e&&a(T),e&&a(He),y(N,e),e&&a(Ne),e&&a(oe),e&&a(Ue),y(U,e),e&&a(We),e&&a(O),e&&a(Me),e&&a(A),e&&a(Le),e&&a(j),e&&a(Qe),y(W,e),e&&a(Ye),e&&a(F),e&&a(Ge),e&&a(w),e&&a(Je),e&&a(b),e&&a(Ve),y(M,e),e&&a(Ke),e&&a(I),e&&a(Xe),y(L,e),e&&a(Ze),e&&a(D),e&&a(et),e&&a(re),e&&a(tt),y(Q,e),e&&a(at),e&&a(v),e&&a(it),e&&a(Y),e&&a(nt),y(G,e),e&&a(ot),e&&a(R),e&&a(lt),y(J,e),e&&a(rt),y(V,e),e&&a(st),y(K,e),e&&a(mt),y(X,e),e&&a(ft),y(Z,e),e&&a(dt),y(ee,e),e&&a(pt),y(te,e),e&&a(ct),y(ae,e),e&&a(ut),y(ie,e)}}}class Pi extends vi{constructor(P){super(),_i(this,P,null,Di,wi,{})}}export{Pi as component};
