import{S as No,i as Go,s as Io,k as l,q as a,a as p,y as c,l as s,m,r as n,h as t,c as u,z as f,n as Ie,b as r,G as i,A as d,H as qo,g,d as b,B as $}from"../chunks/index.a7566c1a.js";import{H as D}from"../chunks/HeadingLink.20322812.js";import{C}from"../chunks/CodeBlock.a090ee9b.js";import{T as Ho}from"../chunks/Toc.c31a36b6.js";function Mo(Fo){let P,It,qe,se,qt,He,O,Ht,de,Mt,Ut,Me,H,Ue,M,je,A,jt,ge,zt,Wt,ze,U,We,T,Lt,be,Qt,Yt,Le,j,Qe,R,Jt,$e,Vt,Kt,Ye,z,Je,me,Ve,W,Ke,S,Xt,ye,Zt,ei,Xe,k,ti,he,ii,oi,we,ai,ni,Ze,L,et,B,ri,ve,li,si,tt,F,mi,ke,pi,ui,it,N,ci,_e,fi,di,ot,Q,at,G,gi,Ee,bi,$i,nt,h,yi,xe,hi,wi,vi,ki,De,_i,Ei,Ce,xi,Di,rt,y,Ci,Be,Bi,Pi,Pe,Oi,Ai,Oe,Ti,Ri,pe,Si,Fi,Ae,Ni,Gi,lt,Y,st,I,Ii,Te,qi,Hi,mt,J,pt,_,Mi,Re,Ui,ji,Se,zi,Wi,ut,ue,Li,ct,V,ft,w,Qi,Fe,Yi,Ji,Vi,Ki,Xi,Zi,Ne,eo,to,dt,K,io,gt,X,bt,q,oo,Ge,ao,no,$t,Z,yt,ee,ht,te,wt,ie,vt,oe,kt,ae,_t,ne,Et,re,xt,le,Dt;return H=new Ho({}),M=new D({props:{title:"Enable the migrate command"}}),U=new C({props:{language:"go",content:`
        // main.go
        package main

        import (
            "log"
            "strings"

            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/plugins/migratecmd"

            // uncomment once you have at least one .go migration file in the "migrations" directory
            // _ "yourpackage/migrations"
        )

        func main() {
            app := pocketbase.New()

            // loosely check if it was executed using "go run"
            isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

            migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
                // enable auto creation of migration files when making collection changes in the Admin UI
                // (the isGoRun check is to enable it only during development)
                Automigrate: isGoRun,
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),j=new D({props:{title:"Creating migrations"}}),z=new C({props:{content:`
        // Since the "create" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run ..."

        [root@dev app]$ go run main.go migrate create "your_new_migration"
    `}}),W=new C({props:{language:"go",content:`
        // migrations/1655834400_your_new_migration.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                // add up queries...

                return nil
            }, func(db dbx.Builder) error {
                // add down queries...

                return nil
            })
        }
    `}}),L=new C({props:{language:"go",content:`
        package main

        import _ "yourpackage/migrations"

        // ...
    `}}),Q=new D({props:{title:"Migration file",tag:"h5"}}),Y=new D({props:{title:"Collections snapshot"}}),J=new C({props:{content:`
        // Since the "collections" command makes sense only during development,
        // it is expected the user to be in the app working directory
        // and to be using "go run ..."

        [root@dev app]$ go run main.go migrate collections
    `}}),V=new D({props:{title:"Migrations history"}}),X=new C({props:{content:"[root@dev app]$ go run main.go migrate history-sync"}}),Z=new D({props:{title:"Examples"}}),ee=new D({props:{title:"Running raw SQL statements",tag:"h5"}}),te=new C({props:{language:"go",content:`
        // migrations/1687801090_set_pending_status.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        // set a default "pending" status to all empty status articles
        func init() {
            m.Register(func(db dbx.Builder) error {
                _, err := db.NewQuery("UPDATE articles SET status = 'pending' WHERE status = ''").Execute()
                return err
            }, nil)
        }
    `}}),ie=new D({props:{title:"Initialize default application settings",tag:"h5"}}),oe=new C({props:{language:"go",content:`
        // migrations/1687801090_initial_settings.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                dao := daos.New(db)

                settings, _ := dao.FindSettings()
                settings.Meta.AppName = "test"
                settings.Logs.MaxDays = 2

                return dao.SaveSettings(settings)
            }, nil)
        }
    `}}),ae=new D({props:{title:"Creating new admin",tag:"h5"}}),ne=new C({props:{language:"go",content:`
        // migrations/1687801090_initial_admin.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
            "github.com/pocketbase/pocketbase/models"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                dao := daos.New(db)

                admin := &models.Admin{}
                admin.Email = "test@example.com"
                admin.SetPassword("1234567890")

                return dao.SaveAdmin(admin)
            }, func(db dbx.Builder) error { // optional revert operation

                dao := daos.New(db)

                admin, _ := dao.FindAdminByEmail("test@example.com")
                if admin != nil {
                    return dao.DeleteAdmin(admin)
                }

                // already deleted
                return nil
            })
        }
    `}}),re=new D({props:{title:"Creating new auth record",tag:"h5"}}),le=new C({props:{language:"go",content:`
        // migrations/1687801090_new_users_record.go
        package migrations

        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            m "github.com/pocketbase/pocketbase/migrations"
            "github.com/pocketbase/pocketbase/models"
            "github.com/pocketbase/pocketbase/tools/security"
        )

        func init() {
            m.Register(func(db dbx.Builder) error {
                dao := daos.New(db)

                collection, err := dao.FindCollectionByNameOrId("users")
                if err != nil {
                    return err
                }

                record := models.NewRecord(collection)
                record.SetUsername("u_" + security.RandomStringWithAlphabet(5, "123456789"))
                record.SetPassword("1234567890")
                record.Set("name", "John Doe")
                record.Set("email", "test@example.com")

                return dao.SaveRecord(record)
            }, func(db dbx.Builder) error { // optional revert operation
                dao := daos.New(db)

                record := dao.FindFirstAuthRecordByEmail("users", "test@example.com")
                if record != nil {
                    return dao.DeleteRecord(record)
                }

                // already deleted
                return nil
            })
        }
    `}}),{c(){P=l("p"),It=a(`PocketBase comes with a builtin DB and data migration utility, allowing you to version your DB structure,
    create collections programmatically, initialize default settings, etc.`),qe=p(),se=l("p"),qt=a(`Because the migrations are regular Go functions, besides applying schema changes, they could be used also
    to adjust existing data to fit the new schema or any other app specific logic that you want to run only
    once.`),He=p(),O=l("p"),Ht=a("And as a bonus, being "),de=l("code"),Mt=a(".go"),Ut=a(` files also ensures that the migrations will be embedded seamlessly in
    your final executable.`),Me=p(),c(H.$$.fragment),Ue=p(),c(M.$$.fragment),je=p(),A=l("p"),jt=a("The prebuilt executable enables the "),ge=l("code"),zt=a("migrate"),Wt=a(` command by default, but when you are extending PocketBase
    with Go you have to enable it manually:`),ze=p(),c(U.$$.fragment),We=p(),T=l("p"),Lt=a("The above example also shows the "),be=l("code"),Qt=a("Automigrate"),Yt=a(` config option which when enabled will create automatically
    a Go migration file for you for every collection change made in the Admin UI.`),Le=p(),c(j.$$.fragment),Qe=p(),R=l("p"),Jt=a("To create a new blank migration you can run "),$e=l("code"),Vt=a("migrate create"),Kt=a("."),Ye=p(),c(z.$$.fragment),Je=p(),me=l("div"),Ve=p(),c(W.$$.fragment),Ke=p(),S=l("p"),Xt=a("The above will create a new blank migration file inside the configured command "),ye=l("code"),Zt=a("migrations"),ei=a(" directory."),Xe=p(),k=l("p"),ti=a(`To make your application aware of the registered migrations, you simply have to import the above
    `),he=l("code"),ii=a("migrations"),oi=a(" package in one of your "),we=l("code"),ai=a("main"),ni=a(" package files:"),Ze=p(),c(L.$$.fragment),et=p(),B=l("p"),ri=a("New migrations are applied automatically on "),ve=l("code"),li=a("serve"),si=a("."),tt=p(),F=l("p"),mi=a("Optionally, you could apply new migrations manually by running "),ke=l("code"),pi=a("migrate up"),ui=a("."),it=p(),N=l("p"),ci=a("To revert the last applied migration(s), you could run "),_e=l("code"),fi=a("migrate down [number]"),di=a("."),ot=p(),c(Q.$$.fragment),at=p(),G=l("p"),gi=a("Each migration file should have a single "),Ee=l("code"),bi=a("m.Register(upFunc, downFunc)"),$i=a(" call."),nt=p(),h=l("p"),yi=a('In the migration file, you are expected to write your "upgrade" code in the '),xe=l("code"),hi=a("upFunc"),wi=a(` callback.
    `),vi=l("br"),ki=a(`
    The `),De=l("code"),_i=a("downFunc"),Ei=a(` is optional and it should contains the "downgrade" operations to revert the
    changes made by the `),Ce=l("code"),xi=a("upFunc"),Di=a("."),rt=p(),y=l("p"),Ci=a("Both callbacks accept a single "),Be=l("code"),Bi=a("db"),Pi=a(" argument ("),Pe=l("code"),Oi=a("dbx.Builder"),Ai=a(`) that you can use
    directly or create a `),Oe=l("code"),Ti=a("Dao"),Ri=a(` instance and use its available helpers. You can explore the
    `),pe=l("a"),Si=a("Database guide"),Fi=a(`
    for more details how to operate with the `),Ae=l("code"),Ni=a("db"),Gi=a(" object and its available methods."),lt=p(),c(Y.$$.fragment),st=p(),I=l("p"),Ii=a("PocketBase comes also with a "),Te=l("code"),qi=a("migrate collections"),Hi=a(` command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:`),mt=p(),c(J.$$.fragment),pt=p(),_=l("p"),Mi=a("Similar to the "),Re=l("code"),Ui=a("migrate create"),ji=a(` command, this will generate a new migration file in the
    `),Se=l("code"),zi=a("migrations"),Wi=a(" directory."),ut=p(),ue=l("p"),Li=a("It is safe to run the command multiple times and generate multiple snapshot migration files."),ct=p(),c(V.$$.fragment),ft=p(),w=l("p"),Qi=a("All applied migration filenames are stored in the internal "),Fe=l("code"),Yi=a("_migrations"),Ji=a(` table.
    `),Vi=l("br"),Ki=a(`
    During local development often you might end up making various collection changes to test different approaches.
    `),Xi=l("br"),Zi=a(`
    When `),Ne=l("code"),eo=a("Automigrate"),to=a(` is enabled this could lead in a migration history with unnecessary intermediate
    steps that may not be wanted in the final migration history.`),dt=p(),K=l("p"),io=a(`To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:`),gt=p(),c(X.$$.fragment),bt=p(),q=l("p"),oo=a("The above command will remove any entry from the "),Ge=l("code"),ao=a("_migrations"),no=a(` table that doesn't have a related
    migration file associated with it.`),$t=p(),c(Z.$$.fragment),yt=p(),c(ee.$$.fragment),ht=p(),c(te.$$.fragment),wt=p(),c(ie.$$.fragment),vt=p(),c(oe.$$.fragment),kt=p(),c(ae.$$.fragment),_t=p(),c(ne.$$.fragment),Et=p(),c(re.$$.fragment),xt=p(),c(le.$$.fragment),this.h()},l(e){P=s(e,"P",{});var o=m(P);It=n(o,`PocketBase comes with a builtin DB and data migration utility, allowing you to version your DB structure,
    create collections programmatically, initialize default settings, etc.`),o.forEach(t),qe=u(e),se=s(e,"P",{});var ro=m(se);qt=n(ro,`Because the migrations are regular Go functions, besides applying schema changes, they could be used also
    to adjust existing data to fit the new schema or any other app specific logic that you want to run only
    once.`),ro.forEach(t),He=u(e),O=s(e,"P",{});var Ct=m(O);Ht=n(Ct,"And as a bonus, being "),de=s(Ct,"CODE",{});var lo=m(de);Mt=n(lo,".go"),lo.forEach(t),Ut=n(Ct,` files also ensures that the migrations will be embedded seamlessly in
    your final executable.`),Ct.forEach(t),Me=u(e),f(H.$$.fragment,e),Ue=u(e),f(M.$$.fragment,e),je=u(e),A=s(e,"P",{});var Bt=m(A);jt=n(Bt,"The prebuilt executable enables the "),ge=s(Bt,"CODE",{});var so=m(ge);zt=n(so,"migrate"),so.forEach(t),Wt=n(Bt,` command by default, but when you are extending PocketBase
    with Go you have to enable it manually:`),Bt.forEach(t),ze=u(e),f(U.$$.fragment,e),We=u(e),T=s(e,"P",{});var Pt=m(T);Lt=n(Pt,"The above example also shows the "),be=s(Pt,"CODE",{});var mo=m(be);Qt=n(mo,"Automigrate"),mo.forEach(t),Yt=n(Pt,` config option which when enabled will create automatically
    a Go migration file for you for every collection change made in the Admin UI.`),Pt.forEach(t),Le=u(e),f(j.$$.fragment,e),Qe=u(e),R=s(e,"P",{});var Ot=m(R);Jt=n(Ot,"To create a new blank migration you can run "),$e=s(Ot,"CODE",{});var po=m($e);Vt=n(po,"migrate create"),po.forEach(t),Kt=n(Ot,"."),Ot.forEach(t),Ye=u(e),f(z.$$.fragment,e),Je=u(e),me=s(e,"DIV",{class:!0}),m(me).forEach(t),Ve=u(e),f(W.$$.fragment,e),Ke=u(e),S=s(e,"P",{});var At=m(S);Xt=n(At,"The above will create a new blank migration file inside the configured command "),ye=s(At,"CODE",{});var uo=m(ye);Zt=n(uo,"migrations"),uo.forEach(t),ei=n(At," directory."),At.forEach(t),Xe=u(e),k=s(e,"P",{class:!0});var ce=m(k);ti=n(ce,`To make your application aware of the registered migrations, you simply have to import the above
    `),he=s(ce,"CODE",{});var co=m(he);ii=n(co,"migrations"),co.forEach(t),oi=n(ce," package in one of your "),we=s(ce,"CODE",{});var fo=m(we);ai=n(fo,"main"),fo.forEach(t),ni=n(ce," package files:"),ce.forEach(t),Ze=u(e),f(L.$$.fragment,e),et=u(e),B=s(e,"P",{class:!0});var Tt=m(B);ri=n(Tt,"New migrations are applied automatically on "),ve=s(Tt,"CODE",{});var go=m(ve);li=n(go,"serve"),go.forEach(t),si=n(Tt,"."),Tt.forEach(t),tt=u(e),F=s(e,"P",{});var Rt=m(F);mi=n(Rt,"Optionally, you could apply new migrations manually by running "),ke=s(Rt,"CODE",{});var bo=m(ke);pi=n(bo,"migrate up"),bo.forEach(t),ui=n(Rt,"."),Rt.forEach(t),it=u(e),N=s(e,"P",{});var St=m(N);ci=n(St,"To revert the last applied migration(s), you could run "),_e=s(St,"CODE",{});var $o=m(_e);fi=n($o,"migrate down [number]"),$o.forEach(t),di=n(St,"."),St.forEach(t),ot=u(e),f(Q.$$.fragment,e),at=u(e),G=s(e,"P",{});var Ft=m(G);gi=n(Ft,"Each migration file should have a single "),Ee=s(Ft,"CODE",{});var yo=m(Ee);bi=n(yo,"m.Register(upFunc, downFunc)"),yo.forEach(t),$i=n(Ft," call."),Ft.forEach(t),nt=u(e),h=s(e,"P",{});var E=m(h);yi=n(E,'In the migration file, you are expected to write your "upgrade" code in the '),xe=s(E,"CODE",{});var ho=m(xe);hi=n(ho,"upFunc"),ho.forEach(t),wi=n(E,` callback.
    `),vi=s(E,"BR",{}),ki=n(E,`
    The `),De=s(E,"CODE",{});var wo=m(De);_i=n(wo,"downFunc"),wo.forEach(t),Ei=n(E,` is optional and it should contains the "downgrade" operations to revert the
    changes made by the `),Ce=s(E,"CODE",{});var vo=m(Ce);xi=n(vo,"upFunc"),vo.forEach(t),Di=n(E,"."),E.forEach(t),rt=u(e),y=s(e,"P",{});var v=m(y);Ci=n(v,"Both callbacks accept a single "),Be=s(v,"CODE",{});var ko=m(Be);Bi=n(ko,"db"),ko.forEach(t),Pi=n(v," argument ("),Pe=s(v,"CODE",{});var _o=m(Pe);Oi=n(_o,"dbx.Builder"),_o.forEach(t),Ai=n(v,`) that you can use
    directly or create a `),Oe=s(v,"CODE",{});var Eo=m(Oe);Ti=n(Eo,"Dao"),Eo.forEach(t),Ri=n(v,` instance and use its available helpers. You can explore the
    `),pe=s(v,"A",{href:!0});var xo=m(pe);Si=n(xo,"Database guide"),xo.forEach(t),Fi=n(v,`
    for more details how to operate with the `),Ae=s(v,"CODE",{});var Do=m(Ae);Ni=n(Do,"db"),Do.forEach(t),Gi=n(v," object and its available methods."),v.forEach(t),lt=u(e),f(Y.$$.fragment,e),st=u(e),I=s(e,"P",{});var Nt=m(I);Ii=n(Nt,"PocketBase comes also with a "),Te=s(Nt,"CODE",{});var Co=m(Te);qi=n(Co,"migrate collections"),Co.forEach(t),Hi=n(Nt,` command that will generate a full snapshot of
    your current Collections configuration without having to type it manually:`),Nt.forEach(t),mt=u(e),f(J.$$.fragment,e),pt=u(e),_=s(e,"P",{});var fe=m(_);Mi=n(fe,"Similar to the "),Re=s(fe,"CODE",{});var Bo=m(Re);Ui=n(Bo,"migrate create"),Bo.forEach(t),ji=n(fe,` command, this will generate a new migration file in the
    `),Se=s(fe,"CODE",{});var Po=m(Se);zi=n(Po,"migrations"),Po.forEach(t),Wi=n(fe," directory."),fe.forEach(t),ut=u(e),ue=s(e,"P",{});var Oo=m(ue);Li=n(Oo,"It is safe to run the command multiple times and generate multiple snapshot migration files."),Oo.forEach(t),ct=u(e),f(V.$$.fragment,e),ft=u(e),w=s(e,"P",{});var x=m(w);Qi=n(x,"All applied migration filenames are stored in the internal "),Fe=s(x,"CODE",{});var Ao=m(Fe);Yi=n(Ao,"_migrations"),Ao.forEach(t),Ji=n(x,` table.
    `),Vi=s(x,"BR",{}),Ki=n(x,`
    During local development often you might end up making various collection changes to test different approaches.
    `),Xi=s(x,"BR",{}),Zi=n(x,`
    When `),Ne=s(x,"CODE",{});var To=m(Ne);eo=n(To,"Automigrate"),To.forEach(t),to=n(x,` is enabled this could lead in a migration history with unnecessary intermediate
    steps that may not be wanted in the final migration history.`),x.forEach(t),dt=u(e),K=s(e,"P",{class:!0});var Ro=m(K);io=n(Ro,`To avoid the clutter and to prevent applying the intermediate steps in production, you can remove (or
    squash) the unnecessary migration files manually and then update the local migrations history by running:`),Ro.forEach(t),gt=u(e),f(X.$$.fragment,e),bt=u(e),q=s(e,"P",{});var Gt=m(q);oo=n(Gt,"The above command will remove any entry from the "),Ge=s(Gt,"CODE",{});var So=m(Ge);ao=n(So,"_migrations"),So.forEach(t),no=n(Gt,` table that doesn't have a related
    migration file associated with it.`),Gt.forEach(t),$t=u(e),f(Z.$$.fragment,e),yt=u(e),f(ee.$$.fragment,e),ht=u(e),f(te.$$.fragment,e),wt=u(e),f(ie.$$.fragment,e),vt=u(e),f(oe.$$.fragment,e),kt=u(e),f(ae.$$.fragment,e),_t=u(e),f(ne.$$.fragment,e),Et=u(e),f(re.$$.fragment,e),xt=u(e),f(le.$$.fragment,e),this.h()},h(){Ie(me,"class","clearfix m-t-xs"),Ie(k,"class","txt-bold"),Ie(B,"class","txt-bold"),Ie(pe,"href","/docs/go-database"),Ie(K,"class","txt-bold")},m(e,o){r(e,P,o),i(P,It),r(e,qe,o),r(e,se,o),i(se,qt),r(e,He,o),r(e,O,o),i(O,Ht),i(O,de),i(de,Mt),i(O,Ut),r(e,Me,o),d(H,e,o),r(e,Ue,o),d(M,e,o),r(e,je,o),r(e,A,o),i(A,jt),i(A,ge),i(ge,zt),i(A,Wt),r(e,ze,o),d(U,e,o),r(e,We,o),r(e,T,o),i(T,Lt),i(T,be),i(be,Qt),i(T,Yt),r(e,Le,o),d(j,e,o),r(e,Qe,o),r(e,R,o),i(R,Jt),i(R,$e),i($e,Vt),i(R,Kt),r(e,Ye,o),d(z,e,o),r(e,Je,o),r(e,me,o),r(e,Ve,o),d(W,e,o),r(e,Ke,o),r(e,S,o),i(S,Xt),i(S,ye),i(ye,Zt),i(S,ei),r(e,Xe,o),r(e,k,o),i(k,ti),i(k,he),i(he,ii),i(k,oi),i(k,we),i(we,ai),i(k,ni),r(e,Ze,o),d(L,e,o),r(e,et,o),r(e,B,o),i(B,ri),i(B,ve),i(ve,li),i(B,si),r(e,tt,o),r(e,F,o),i(F,mi),i(F,ke),i(ke,pi),i(F,ui),r(e,it,o),r(e,N,o),i(N,ci),i(N,_e),i(_e,fi),i(N,di),r(e,ot,o),d(Q,e,o),r(e,at,o),r(e,G,o),i(G,gi),i(G,Ee),i(Ee,bi),i(G,$i),r(e,nt,o),r(e,h,o),i(h,yi),i(h,xe),i(xe,hi),i(h,wi),i(h,vi),i(h,ki),i(h,De),i(De,_i),i(h,Ei),i(h,Ce),i(Ce,xi),i(h,Di),r(e,rt,o),r(e,y,o),i(y,Ci),i(y,Be),i(Be,Bi),i(y,Pi),i(y,Pe),i(Pe,Oi),i(y,Ai),i(y,Oe),i(Oe,Ti),i(y,Ri),i(y,pe),i(pe,Si),i(y,Fi),i(y,Ae),i(Ae,Ni),i(y,Gi),r(e,lt,o),d(Y,e,o),r(e,st,o),r(e,I,o),i(I,Ii),i(I,Te),i(Te,qi),i(I,Hi),r(e,mt,o),d(J,e,o),r(e,pt,o),r(e,_,o),i(_,Mi),i(_,Re),i(Re,Ui),i(_,ji),i(_,Se),i(Se,zi),i(_,Wi),r(e,ut,o),r(e,ue,o),i(ue,Li),r(e,ct,o),d(V,e,o),r(e,ft,o),r(e,w,o),i(w,Qi),i(w,Fe),i(Fe,Yi),i(w,Ji),i(w,Vi),i(w,Ki),i(w,Xi),i(w,Zi),i(w,Ne),i(Ne,eo),i(w,to),r(e,dt,o),r(e,K,o),i(K,io),r(e,gt,o),d(X,e,o),r(e,bt,o),r(e,q,o),i(q,oo),i(q,Ge),i(Ge,ao),i(q,no),r(e,$t,o),d(Z,e,o),r(e,yt,o),d(ee,e,o),r(e,ht,o),d(te,e,o),r(e,wt,o),d(ie,e,o),r(e,vt,o),d(oe,e,o),r(e,kt,o),d(ae,e,o),r(e,_t,o),d(ne,e,o),r(e,Et,o),d(re,e,o),r(e,xt,o),d(le,e,o),Dt=!0},p:qo,i(e){Dt||(g(H.$$.fragment,e),g(M.$$.fragment,e),g(U.$$.fragment,e),g(j.$$.fragment,e),g(z.$$.fragment,e),g(W.$$.fragment,e),g(L.$$.fragment,e),g(Q.$$.fragment,e),g(Y.$$.fragment,e),g(J.$$.fragment,e),g(V.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ie.$$.fragment,e),g(oe.$$.fragment,e),g(ae.$$.fragment,e),g(ne.$$.fragment,e),g(re.$$.fragment,e),g(le.$$.fragment,e),Dt=!0)},o(e){b(H.$$.fragment,e),b(M.$$.fragment,e),b(U.$$.fragment,e),b(j.$$.fragment,e),b(z.$$.fragment,e),b(W.$$.fragment,e),b(L.$$.fragment,e),b(Q.$$.fragment,e),b(Y.$$.fragment,e),b(J.$$.fragment,e),b(V.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(ie.$$.fragment,e),b(oe.$$.fragment,e),b(ae.$$.fragment,e),b(ne.$$.fragment,e),b(re.$$.fragment,e),b(le.$$.fragment,e),Dt=!1},d(e){e&&t(P),e&&t(qe),e&&t(se),e&&t(He),e&&t(O),e&&t(Me),$(H,e),e&&t(Ue),$(M,e),e&&t(je),e&&t(A),e&&t(ze),$(U,e),e&&t(We),e&&t(T),e&&t(Le),$(j,e),e&&t(Qe),e&&t(R),e&&t(Ye),$(z,e),e&&t(Je),e&&t(me),e&&t(Ve),$(W,e),e&&t(Ke),e&&t(S),e&&t(Xe),e&&t(k),e&&t(Ze),$(L,e),e&&t(et),e&&t(B),e&&t(tt),e&&t(F),e&&t(it),e&&t(N),e&&t(ot),$(Q,e),e&&t(at),e&&t(G),e&&t(nt),e&&t(h),e&&t(rt),e&&t(y),e&&t(lt),$(Y,e),e&&t(st),e&&t(I),e&&t(mt),$(J,e),e&&t(pt),e&&t(_),e&&t(ut),e&&t(ue),e&&t(ct),$(V,e),e&&t(ft),e&&t(w),e&&t(dt),e&&t(K),e&&t(gt),$(X,e),e&&t(bt),e&&t(q),e&&t($t),$(Z,e),e&&t(yt),$(ee,e),e&&t(ht),$(te,e),e&&t(wt),$(ie,e),e&&t(vt),$(oe,e),e&&t(kt),$(ae,e),e&&t(_t),$(ne,e),e&&t(Et),$(re,e),e&&t(xt),$(le,e)}}}class Lo extends No{constructor(P){super(),Go(this,P,null,Mo,Io,{})}}export{Lo as component};
