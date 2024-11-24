import{S as Hm,i as Mm,s as Gm,k as r,q as n,a as d,y as m,l,m as s,r as o,h as a,c as f,z as p,n as _,b as c,G as t,A as u,H as Jm,g as $,d as E,B as g}from"../chunks/index.a7566c1a.js";import{H as b}from"../chunks/HeadingLink.20322812.js";import{C as v}from"../chunks/CodeBlock.a090ee9b.js";import{T as jm}from"../chunks/Toc.c31a36b6.js";function Um(Fm){let ae,or,ge,ar,rr,zo,G,fn,lr,sr,Kt,ir,dr,Xt,fr,cr,cn,mr,pr,Zo,re,ur,mn,$r,Er,he,gr,hr,ea,Re,ta,Be,na,be,br,pn,vr,xr,oa,le,Se,Vt,Ae,Or,wr,Pe,Dr,We,zt,qe,_r,yr,Fe,kr,He,Zt,Me,Nr,Cr,Ge,aa,Je,ra,se,Ir,un,Qf="{:paramName}",Lr,Tr,$n,Rr,Br,la,je,sa,Ue,ia,N,Sr,Ar,Pr,En,Wr,qr,gn,Fr,Hr,hn,Mr,Gr,bn,Jr,jr,vn,Ur,Qr,xn,Yr,Kr,da,Qe,fa,Ye,ca,I,Xr,On,Vr,zr,wn,Zr,el,tl,nl,Dn,ol,al,rl,ll,_n,sl,il,ma,Ke,pa,Xe,ua,ve,dl,yn,fl,cl,$a,Ve,Ea,ze,ga,ie,ml,kn,pl,ul,Nn,$l,El,ha,de,fe,Cn,gl,hl,In,bl,vl,Ln,xl,Ol,wl,en,Tn,Dl,_l,yl,ce,Rn,kl,Nl,Bn,Cl,Il,Sn,Ll,Tl,ba,L,Rl,An,Bl,Sl,Pn,Al,Pl,Wn,Wl,ql,qn,Fl,Hl,Fn,Ml,Gl,Hn,Jl,jl,va,Ze,xa,et,Oa,y,Ul,Mn,Ql,Yl,Gn,Kl,Xl,Vl,zl,Jn,Zl,es,jn,ts,ns,Un,os,as,rs,ls,Qn,ss,is,wa,tt,Da,xe,ds,Yn,fs,cs,_a,h,q,nt,ms,ps,us,Kn,$s,Es,Xn,gs,hs,ot,bs,me,at,vs,xs,Os,rt,ws,J,lt,Ds,_s,ys,Vn,ks,Ns,st,Cs,j,it,Is,Ls,Ts,zn,Rs,Bs,dt,Ss,U,ft,As,Ps,Ws,Zn,qs,Fs,ct,Hs,Q,mt,Ms,Gs,Js,eo,js,Us,pt,Qs,Y,ut,Ys,Ks,Xs,to,Vs,zs,$t,Zs,O,Et,ei,ti,ni,no,oi,ai,oo,ri,li,si,ii,ao,di,fi,ro,ci,mi,lo,pi,ui,so,$i,Ei,io,gi,hi,fo,bi,vi,gt,xi,F,ht,Oi,wi,Di,co,_i,yi,mo,ki,Ni,bt,Ci,B,vt,Ii,Li,Ti,po,Ri,Bi,uo,Si,Ai,$o,Pi,Wi,xt,qi,S,Ot,Fi,Hi,Mi,Eo,Gi,Ji,go,ji,Ui,ho,Qi,Yi,wt,Ki,K,Dt,Xi,Vi,zi,bo,Zi,ed,_t,td,X,yt,nd,od,ad,vo,rd,ld,kt,sd,V,Nt,id,dd,fd,xo,cd,md,Ct,pd,z,It,ud,$d,Ed,Oo,gd,hd,Lt,ya,Tt,ka,k,bd,wo,vd,xd,Do,Od,wd,Dd,_d,_o,yd,kd,yo,Nd,Cd,Id,Ld,ko,Td,Rd,No,Bd,Sd,Na,Rt,Ca,Bt,Ia,A,Ad,Co,Pd,Wd,Io,qd,Fd,Hd,Md,Lo,Gd,Jd,To,jd,Ud,La,St,Ta,At,Ra,w,Qd,Ro,Yd,Kd,Bo,Xd,Vd,zd,Zd,So,ef,tf,Ao,nf,of,af,rf,Po,lf,sf,Wo,df,ff,qo,cf,mf,Ba,Pt,Sa,Wt,Aa,pe,pf,Fo,uf,$f,Ho,Ef,gf,Pa,qt,Wa,Ft,qa,Z,hf,Mo,bf,vf,Go,xf,Of,Jo,wf,Df,Fa,Ht,Ha,Mt,Ma,Gt,_f,jo,yf,Ga,Oe,kf,Uo,Nf,Cf,Ja,tn,Qo,If,ja,Jt,Ua,jt,Qa,P,Lf,Yo,Tf,Rf,Bf,Sf,Ko,Af,Pf,Xo,Wf,qf,Vo,Ff,Hf,Ya,Ut,Ka;return Re=new jm({}),Be=new b({props:{title:"Executing queries"}}),Ae=new b({props:{title:"Execute()",tag:"code"}}),Pe=new v({props:{language:"go",content:`
                res, err := app.Dao().DB().
                    NewQuery("CREATE INDEX name_idx ON users (name)").
                    Execute()
            `}}),qe=new b({props:{id:"execute-one",title:"One()",tag:"code"}}),Fe=new v({props:{language:"go",content:`
                type User struct {
                    Id     string          \`db:"id" json:"id"\`
                    Status bool            \`db:"status" json:"status"\`
                    Age    int             \`db:"age" json:"age"\`
                    Roles  types.JsonArray \`db:"roles" json:"roles"\`
                }

                user := User{}

                err := app.Dao().DB().
                    NewQuery("SELECT id, status, age, roles FROM users WHERE id=1").
                    One(&user)
            `}}),Me=new b({props:{id:"execute-all",title:"All()",tag:"code"}}),Ge=new v({props:{language:"go",content:`
                type User struct {
                    Id     string          \`db:"id" json:"id"\`
                    Status bool            \`db:"status" json:"status"\`
                    Age    int             \`db:"age" json:"age"\`
                    Roles  types.JsonArray \`db:"roles" json:"roles"\`
                }

                users := []User{}

                err := app.Dao().DB().
                    NewQuery("SELECT id, status, age, roles FROM users LIMIT 100").
                    All(&users)
            `}}),Je=new b({props:{title:"Binding parameters"}}),je=new v({props:{language:"go",content:`
        type Post struct {
            Name     string         \`db:"name" json:"name"\`
            Created  types.DateTime \`db:"created" json:"created"\`
        }

        posts := []Post{}

        err := app.Dao().DB().
            NewQuery("SELECT name, created FROM posts WHERE created >= {:from} and created <= {:to}").
            Bind(dbx.Params{
                "from": "2023-06-25 00:00:00.000Z",
                "to":   "2023-06-28 23:59:59.999Z",
            }).
            All(&posts)
    `}}),Ue=new b({props:{title:"Query builder"}}),Qe=new v({props:{language:"go",content:`
        users := []struct {
            Id    string \`db:"id" json:"id"\`
            Email string \`db:"email" json:"email"\`
        }{}

        app.Dao().DB().
            Select("id", "email").
            From("users").
            AndWhere(dbx.Like("email", "example.com")).
            Limit(100).
            OrderBy("created ASC").
            All(&users)
    `}}),Ye=new b({props:{title:"Select(), AndSelect(), Distinct()",tag:"h5"}}),Ke=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("id", "avatar as image").
            AndSelect("(firstName || ' ' || lastName) as fullName").
            Distinct()
            ...
    `}}),Xe=new b({props:{title:"From()",tag:"h5"}}),Ve=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("table1.id", "table2.name").
            From("table1", "table2")
            ...
    `}}),ze=new b({props:{title:"Join()",tag:"h5"}}),Ze=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("users.*").
            From("users").
            InnerJoin("profiles", dbx.NewExp("profiles.user_id = users.id")).
            Join("FULL OUTER JOIN", "department", dbx.NewExp("department.id = {:id}", dbx.Params{ "id": "someId" }))
            ...
    `}}),et=new b({props:{title:"Where(), AndWhere(), OrWhere()",tag:"h5"}}),tt=new v({props:{language:"go",content:`
        /*
        SELECT users.*
        FROM users
        WHERE id = "someId" AND
            status = "public" AND
            name like "%john%" OR
            (
                role = "manager" AND
                fullTime IS TRUE AND
                experience > 10
            )
        */
        app.Dao().DB().
            Select("users.*").
            From("users").
            Where(dbx.NewExp("id = {:id}", dbx.Params{ "id": "someId" })).
            AndWhere(dbx.HashExp{"status": "public"}).
            AndWhere(dbx.Like("name", "john")).
            OrWhere(dbx.And(
                dbx.HashExp{
                    "role":     "manager",
                    "fullTime": true,
                },
                dbx.NewExp("experience > {:exp}", dbx.Params{ "exp": 10 })
            ))
            ...
    `}}),nt=new b({props:{title:"dbx.NewExp(raw, optParams)",tag:"code"}}),ot=new v({props:{language:"go",content:`
                dbx.NewExp("status = 'public'")
                dbx.NewExp("total > {:min} AND total < {:max}", dbx.Params{ "min": 10, "max": 30 })
            `}}),at=new b({props:{title:"dbx.HashExp{k:v}",tag:"code"}}),rt=new v({props:{language:"go",content:`
                // slug = "example" AND active IS TRUE AND tags in ("tag1", "tag2", "tag3") AND parent IS NULL
                dbx.HashExp{
                    "slug":   "example",
                    "active": true,
                    "tags":   []any{"tag1", "tag2", "tag3"},
                    "parent": nil,
                }
            `}}),lt=new b({props:{title:"dbx.Not(exp)",tag:"code"}}),st=new v({props:{language:"go",content:`
                // NOT(status = 1)
                dbx.Not(dbx.NewExp("status = 1"))
            `}}),it=new b({props:{title:"dbx.And(...exps)",tag:"code"}}),dt=new v({props:{language:"go",content:`
                // (status = 1 AND username like "%john%")
                dbx.And(
                    dbx.NewExp("status = 1"),
                    dbx.Like("username", "john"),
                )
            `}}),ft=new b({props:{title:"dbx.Or(...exps)",tag:"code"}}),ct=new v({props:{language:"go",content:`
                // (status = 1 OR username like "%john%")
                dbx.Or(
                    dbx.NewExp("status = 1"),
                    dbx.Like("username", "john")
                )
            `}}),mt=new b({props:{title:"dbx.In(col, ...values)",tag:"code"}}),pt=new v({props:{language:"go",content:`
                // status IN ("public", "reviewed")
                dbx.In("status", "public", "reviewed")
            `}}),ut=new b({props:{title:"dbx.NotIn(col, ...values)",tag:"code"}}),$t=new v({props:{language:"go",content:`
                // status NOT IN ("public", "reviewed")
                dbx.NotIn("status", "public", "reviewed")
            `}}),Et=new b({props:{title:"dbx.Like(col, ...values)",tag:"code"}}),gt=new v({props:{language:"go",content:`
                // name LIKE "%test1%" AND name LIKE "%test2%"
                dbx.Like("name", "test1", "test2")

                // name LIKE "test1%"
                dbx.Like("name", "test1").Match(false, true)
            `}}),ht=new b({props:{title:"dbx.NotLike(col, ...values)",tag:"code"}}),bt=new v({props:{language:"go",content:`
                // name NOT LIKE "%test1%" AND name NOT LIKE "%test2%"
                dbx.NotLike("name", "test1", "test2")

                // name NOT LIKE "test1%"
                dbx.NotLike("name", "test1").Match(false, true)
            `}}),vt=new b({props:{title:"dbx.OrLike(col, ...values)",tag:"code"}}),xt=new v({props:{language:"go",content:`
                // name LIKE "%test1%" OR name LIKE "%test2%"
                dbx.OrLike("name", "test1", "test2")

                // name LIKE "test1%" OR name LIKE "test2%"
                dbx.OrLike("name", "test1", "test2").Match(false, true)
            `}}),Ot=new b({props:{title:"dbx.OrNotLike(col, ...values)",tag:"code"}}),wt=new v({props:{language:"go",content:`
                // name NOT LIKE "%test1%" OR name NOT LIKE "%test2%"
                dbx.OrNotLike("name", "test1", "test2")

                // name NOT LIKE "test1%" OR name NOT LIKE "test2%"
                dbx.OrNotLike("name", "test1", "test2").Match(false, true)
            `}}),Dt=new b({props:{title:"dbx.Exists(exp)",tag:"code"}}),_t=new v({props:{language:"go",content:`
                // EXISTS (SELECT 1 FROM users WHERE status = 'active')
                dbx.Exists(dbx.NewExp("SELECT 1 FROM users WHERE status = 'active'"))
            `}}),yt=new b({props:{title:"dbx.NotExists(exp)",tag:"code"}}),kt=new v({props:{language:"go",content:`
                // NOT EXISTS (SELECT 1 FROM users WHERE status = 'active')
                dbx.NotExists(dbx.NewExp("SELECT 1 FROM users WHERE status = 'active'"))
            `}}),Nt=new b({props:{title:"dbx.Between(col, from, to)",tag:"code"}}),Ct=new v({props:{language:"go",content:`
                // age BETWEEN 3 and 99
                dbx.Between("age", 3, 99)
            `}}),It=new b({props:{title:"dbx.NotBetween(col, from, to)",tag:"code"}}),Lt=new v({props:{language:"go",content:`
                // age NOT BETWEEN 3 and 99
                dbx.NotBetween("age", 3, 99)
            `}}),Tt=new b({props:{title:"OrderBy(), AndOrderBy()",tag:"h5"}}),Rt=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("users.*").
            From("users").
            OrderBy("created ASC", "updated DESC").
            AndOrderBy("title ASC")
            ...
    `}}),Bt=new b({props:{title:"GroupBy(), AndGroupBy()",tag:"h5"}}),St=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("users.*").
            From("users").
            GroupBy("department", "level")
            ...
    `}}),At=new b({props:{title:"Having(), AndHaving(), OrHaving()",tag:"h5"}}),Pt=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("users.*").
            From("users").
            GroupBy("department", "level").
            Having(dbx.NewExp("sum(level) > {:sum}", dbx.Params{ sum: 10 }))
            ...
    `}}),Wt=new b({props:{title:"Limit()",tag:"h5"}}),qt=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("users.*").
            From("users").
            Limit(30)
            ...
    `}}),Ft=new b({props:{title:"Offset()",tag:"h5"}}),Ht=new v({props:{language:"go",content:`
        app.Dao().DB().
            Select("users.*").
            From("users").
            Offset(5).
            Limit(30)
            ...
    `}}),Mt=new b({props:{title:"Transaction"}}),Jt=new v({props:{language:"go",content:`
        app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
            // update a record
            record, err := txDao.FindRecordById("articles", "RECORD_ID")
            if err != nil {
                return err
            }
            record.Set("status", "active")
            if err := txDao.SaveRecord(record); err != nil {
                return err
            }

            // run some custom raw query
            rawQuery := "DELETE FROM articles WHERE status = 'pending'"
            if _, err := txDao.DB().NewQuery(rawQuery).Execute(); err != nil {
                return err
            }

            return nil
        })
    `}}),jt=new b({props:{title:"Dao without event hooks"}}),Ut=new v({props:{language:"go",content:`
        record, _ := app.Dao().FindRecordById("articles", "RECORD_ID")

        // the below WILL fire the OnModelBeforeUpdate and OnModelAfterUpdate hooks
        app.Dao().SaveRecord(record)

        // the below WILL NOT fire the OnModelBeforeUpdate and OnModelAfterUpdate hooks
        dao := app.Dao().WithoutHooks()
        dao.saveRecord(record)
    `}}),{c(){ae=r("p"),or=n(`The main interface to interact with your application database is via the
    `),ge=r("a"),ar=n(`Dao abstraction
    `),rr=n("."),zo=d(),G=r("p"),fn=r("code"),lr=n("app.Dao()"),sr=n(`
    provides read and write helpers (see `),Kt=r("a"),ir=n("Collection operations"),dr=n(`
    and `),Xt=r("a"),fr=n("Record operations"),cr=n(`) and it is responsible for triggering the
    `),cn=r("code"),mr=n("onModel*"),pr=n(" event hooks."),Zo=d(),re=r("p"),ur=n("It also exposes "),mn=r("code"),$r=n("app.Dao().DB()"),Er=n(` builder that allows executing various SQL statements
    (including raw queries). Most of the common DB operations are listed below, but you can find further
    information in the
    `),he=r("a"),gr=n(`dbx package godoc
    `),hr=n("."),ea=d(),m(Re.$$.fragment),ta=d(),m(Be.$$.fragment),na=d(),be=r("p"),br=n("To execute DB queries you can start with the "),pn=r("code"),vr=n('NewQuery("...")'),xr=n(" statement and then call one of:"),oa=d(),le=r("ul"),Se=r("li"),Vt=r("p"),m(Ae.$$.fragment),Or=n(`
            - for any query statement that is not meant to retrieve data:`),wr=d(),m(Pe.$$.fragment),Dr=d(),We=r("li"),zt=r("p"),m(qe.$$.fragment),_r=n(`
            - to populate a single row into a struct:`),yr=d(),m(Fe.$$.fragment),kr=d(),He=r("li"),Zt=r("p"),m(Me.$$.fragment),Nr=n(`
            - to populate multiple rows into a slice of structs:`),Cr=d(),m(Ge.$$.fragment),aa=d(),m(Je.$$.fragment),ra=d(),se=r("p"),Ir=n(`To prevent SQL injection attacks, you should use named parameters for any expression value that comes from
    user input. This could be done using the named `),un=r("code"),Lr=n(Qf),Tr=n(`
    placeholders in your SQL statement and then define the parameter values for the query with
    `),$n=r("code"),Rr=n("Bind(params)"),Br=n(". For example:"),la=d(),m(je.$$.fragment),sa=d(),m(Ue.$$.fragment),ia=d(),N=r("p"),Sr=n(`Instead of writting plain SQLs, you can also compose SQL statements programmatically using the db query
    builder.
    `),Ar=r("br"),Pr=n(`
    Every SQL keyword has a corresponding query building method. For example, `),En=r("code"),Wr=n("SELECT"),qr=n(` corresponds
    to `),gn=r("code"),Fr=n("Select()"),Hr=n(", "),hn=r("code"),Mr=n("FROM"),Gr=n(" corresponds to "),bn=r("code"),Jr=n("From()"),jr=n(`,
    `),vn=r("code"),Ur=n("WHERE"),Qr=n(" corresponds to "),xn=r("code"),Yr=n("Where()"),Kr=n(", and so on."),da=d(),m(Qe.$$.fragment),fa=d(),m(Ye.$$.fragment),ca=d(),I=r("p"),Xr=n("The "),On=r("code"),Vr=n("Select(...cols)"),zr=n(" method initializes a "),wn=r("code"),Zr=n("SELECT"),el=n(` query builder. It accepts a list
    of the column names to be selected.
    `),tl=r("br"),nl=n(`
    To add additional columns to an existing select query, you can call `),Dn=r("code"),ol=n("AndSelect()"),al=n(`.
    `),rl=r("br"),ll=n(`
    To select distinct rows, you can call `),_n=r("code"),sl=n("Distinct()"),il=n("."),ma=d(),m(Ke.$$.fragment),pa=d(),m(Xe.$$.fragment),ua=d(),ve=r("p"),dl=n("The "),yn=r("code"),fl=n("From(...tables)"),cl=n(` method specifies which tables to select from (plain table names are automatically
    quoted).`),$a=d(),m(Ve.$$.fragment),Ea=d(),m(ze.$$.fragment),ga=d(),ie=r("p"),ml=n("The "),kn=r("code"),pl=n("Join(type, table, on)"),ul=n(" method specifies a "),Nn=r("code"),$l=n("JOIN"),El=n(" clause. It takes 3 parameters:"),ha=d(),de=r("ul"),fe=r("li"),Cn=r("code"),gl=n("type"),hl=n(" - join type string like "),In=r("code"),bl=n("INNER JOIN"),vl=n(", "),Ln=r("code"),xl=n("LEFT JOIN"),Ol=n(", etc."),wl=d(),en=r("li"),Tn=r("code"),Dl=n("table"),_l=n(" - the name of the table to be joined"),yl=d(),ce=r("li"),Rn=r("code"),kl=n("on"),Nl=n(" - optional "),Bn=r("code"),Cl=n("dbx.Expression"),Il=n(" as an "),Sn=r("code"),Ll=n("ON"),Tl=n(" clause"),ba=d(),L=r("p"),Rl=n("For convenience, you can also use the shortcuts "),An=r("code"),Bl=n("InnerJoin(table, on)"),Sl=n(`,
    `),Pn=r("code"),Al=n("LeftJoin(table, on)"),Pl=n(`,
    `),Wn=r("code"),Wl=n("RightJoin(table, on)"),ql=n(" to specify "),qn=r("code"),Fl=n("INNER JOIN"),Hl=n(", "),Fn=r("code"),Ml=n("LEFT JOIN"),Gl=n(` and
    `),Hn=r("code"),Jl=n("RIGHT JOIN"),jl=n(", respectively."),va=d(),m(Ze.$$.fragment),xa=d(),m(et.$$.fragment),Oa=d(),y=r("p"),Ul=n("The "),Mn=r("code"),Ql=n("Where(exp)"),Yl=n(" method specifies the "),Gn=r("code"),Kl=n("WHERE"),Xl=n(` condition of the query.
    `),Vl=r("br"),zl=n(`
    You can also use `),Jn=r("code"),Zl=n("AndWhere(exp)"),es=n(" or "),jn=r("code"),ts=n("OrWhere(exp)"),ns=n(` to append additional one or more
    conditions to an existing `),Un=r("code"),os=n("WHERE"),as=n(` clause.
    `),rs=r("br"),ls=n(`
    Each where condition accepts a single `),Qn=r("code"),ss=n("dbx.Expression"),is=n(" (see below for full list)."),wa=d(),m(tt.$$.fragment),Da=d(),xe=r("p"),ds=n("The following "),Yn=r("code"),fs=n("dbx.Expression"),cs=n(" methods are available:"),_a=d(),h=r("ul"),q=r("li"),m(nt.$$.fragment),ms=d(),ps=r("br"),us=n(`
        Generates an expression with the specified raw query fragment. Use the `),Kn=r("code"),$s=n("optParams"),Es=n(` to bind
        `),Xn=r("code"),gs=n("dbx.Params"),hs=n(` to the expression.
        `),m(ot.$$.fragment),bs=d(),me=r("li"),m(at.$$.fragment),vs=d(),xs=r("br"),Os=n(`
        Generates a hash expression from a map whose keys are DB column names which need to be filtered according
        to the corresponding values.
        `),m(rt.$$.fragment),ws=d(),J=r("li"),m(lt.$$.fragment),Ds=d(),_s=r("br"),ys=n(`
        Negates a single expression by wrapping it with `),Vn=r("code"),ks=n("NOT()"),Ns=n(`.
        `),m(st.$$.fragment),Cs=d(),j=r("li"),m(it.$$.fragment),Is=d(),Ls=r("br"),Ts=n(`
        Creates a new expression by concatenating the specified ones with `),zn=r("code"),Rs=n("AND"),Bs=n(`.
        `),m(dt.$$.fragment),Ss=d(),U=r("li"),m(ft.$$.fragment),As=d(),Ps=r("br"),Ws=n(`
        Creates a new expression by concatenating the specified ones with `),Zn=r("code"),qs=n("OR"),Fs=n(`.
        `),m(ct.$$.fragment),Hs=d(),Q=r("li"),m(mt.$$.fragment),Ms=d(),Gs=r("br"),Js=n(`
        Generates an `),eo=r("code"),js=n("IN"),Us=n(` expression for the specified column and the list of allowed values.
        `),m(pt.$$.fragment),Qs=d(),Y=r("li"),m(ut.$$.fragment),Ys=d(),Ks=r("br"),Xs=n(`
        Generates an `),to=r("code"),Vs=n("NOT IN"),zs=n(` expression for the specified column and the list of allowed values.
        `),m($t.$$.fragment),Zs=d(),O=r("li"),m(Et.$$.fragment),ei=d(),ti=r("br"),ni=n(`
        Generates a `),no=r("code"),oi=n("LIKE"),ai=n(` expression for the specified column and the possible strings that the
        column should be like. If multiple values are present, the column should be like
        `),oo=r("strong"),ri=n("all"),li=n(` of them.
        `),si=r("br"),ii=n(`
        By default, each value will be surrounded by `),ao=r("em"),di=n('"%"'),fi=n(` to enable partial matching. Special
        characters like `),ro=r("em"),ci=n('"%"'),mi=n(", "),lo=r("em"),pi=n('"\\"'),ui=n(", "),so=r("em"),$i=n('"_"'),Ei=n(` will also be properly escaped. You may call
        `),io=r("code"),gi=n("Escape(...pairs)"),hi=n(" and/or "),fo=r("code"),bi=n("Match(left, right)"),vi=n(` to change the default behavior.
        `),m(gt.$$.fragment),xi=d(),F=r("li"),m(ht.$$.fragment),Oi=d(),wi=r("br"),Di=n(`
        Generates a `),co=r("code"),_i=n("NOT LIKE"),yi=n(" expression in similar manner as "),mo=r("code"),ki=n("Like()"),Ni=n(`.
        `),m(bt.$$.fragment),Ci=d(),B=r("li"),m(vt.$$.fragment),Ii=d(),Li=r("br"),Ti=n(`
        This is similar to `),po=r("code"),Ri=n("Like()"),Bi=n(` except that the column must be one of the provided values, aka.
        multiple values are concatenated with `),uo=r("code"),Si=n("OR"),Ai=n(" instead of "),$o=r("code"),Pi=n("AND"),Wi=n(`.
        `),m(xt.$$.fragment),qi=d(),S=r("li"),m(Ot.$$.fragment),Fi=d(),Hi=r("br"),Mi=n(`
        This is similar to `),Eo=r("code"),Gi=n("NotLike()"),Ji=n(` except that the column must not be one of the provided
        values, aka. multiple values are concatenated with `),go=r("code"),ji=n("OR"),Ui=n(" instead of "),ho=r("code"),Qi=n("AND"),Yi=n(`.
        `),m(wt.$$.fragment),Ki=d(),K=r("li"),m(Dt.$$.fragment),Xi=d(),Vi=r("br"),zi=n(`
        Prefix with `),bo=r("code"),Zi=n("EXISTS"),ed=n(` the specified expression (usually a subquery).
        `),m(_t.$$.fragment),td=d(),X=r("li"),m(yt.$$.fragment),nd=d(),od=r("br"),ad=n(`
        Prefix with `),vo=r("code"),rd=n("NOT EXISTS"),ld=n(` the specified expression (usually a subquery).
        `),m(kt.$$.fragment),sd=d(),V=r("li"),m(Nt.$$.fragment),id=d(),dd=r("br"),fd=n(`
        Generates a `),xo=r("code"),cd=n("BETWEEN"),md=n(` expression with the specified range.
        `),m(Ct.$$.fragment),pd=d(),z=r("li"),m(It.$$.fragment),ud=d(),$d=r("br"),Ed=n(`
        Generates a `),Oo=r("code"),gd=n("NOT BETWEEN"),hd=n(` expression with the specified range.
        `),m(Lt.$$.fragment),ya=d(),m(Tt.$$.fragment),ka=d(),k=r("p"),bd=n("The "),wo=r("code"),vd=n("OrderBy(...cols)"),xd=n(" specifies the "),Do=r("code"),Od=n("ORDER BY"),wd=n(` clause of the query.
    `),Dd=r("br"),_d=n(`
    A column name can contain `),_o=r("em"),yd=n('"ASC"'),kd=n(" or "),yo=r("em"),Nd=n('"DESC"'),Cd=n(` to indicate its ordering direction.
    `),Id=r("br"),Ld=n(`
    You can also use `),ko=r("code"),Td=n("AndOrderBy(...cols)"),Rd=n(` to append additional columns to an existing
    `),No=r("code"),Bd=n("ORDER BY"),Sd=n(" clause."),Na=d(),m(Rt.$$.fragment),Ca=d(),m(Bt.$$.fragment),Ia=d(),A=r("p"),Ad=n("The "),Co=r("code"),Pd=n("GroupBy(...cols)"),Wd=n(" specifies the "),Io=r("code"),qd=n("GROUP BY"),Fd=n(` clause of the query.
    `),Hd=r("br"),Md=n(`
    You can also use `),Lo=r("code"),Gd=n("AndGroupBy(...cols)"),Jd=n(` to append additional columns to an existing
    `),To=r("code"),jd=n("GROUP BY"),Ud=n(" clause."),La=d(),m(St.$$.fragment),Ta=d(),m(At.$$.fragment),Ra=d(),w=r("p"),Qd=n("The "),Ro=r("code"),Yd=n("Having(exp)"),Kd=n(" specifies the "),Bo=r("code"),Xd=n("HAVING"),Vd=n(` clause of the query.
    `),zd=r("br"),Zd=n(`
    Similarly to
    `),So=r("code"),ef=n("Where(exp)"),tf=n(", it accept a single "),Ao=r("code"),nf=n("dbx.Expression"),of=n(` (see all available expressions
    listed above).
    `),af=r("br"),rf=n(`
    You can also use `),Po=r("code"),lf=n("AndHaving(exp)"),sf=n(" or "),Wo=r("code"),df=n("OrHaving(exp)"),ff=n(` to append additional one or
    more conditions to an existing `),qo=r("code"),cf=n("HAVING"),mf=n(" clause."),Ba=d(),m(Pt.$$.fragment),Sa=d(),m(Wt.$$.fragment),Aa=d(),pe=r("p"),pf=n("The "),Fo=r("code"),uf=n("Limit(number)"),$f=n(" method specifies the "),Ho=r("code"),Ef=n("LIMIT"),gf=n(" clause of the query."),Pa=d(),m(qt.$$.fragment),Wa=d(),m(Ft.$$.fragment),qa=d(),Z=r("p"),hf=n("The "),Mo=r("code"),bf=n("Offset(number)"),vf=n(" method specifies the "),Go=r("code"),xf=n("OFFSET"),Of=n(` clause of the query. Usually used
    together with `),Jo=r("code"),wf=n("Limit(number)"),Df=n("."),Fa=d(),m(Ht.$$.fragment),Ha=d(),m(Mt.$$.fragment),Ma=d(),Gt=r("p"),_f=n("To execute multiple queries in a transaction you can use "),jo=r("code"),yf=n("app.Dao().RunInTransaction()"),Ga=d(),Oe=r("p"),kf=n("You can nest "),Uo=r("code"),Nf=n("Dao.RunInTransaction()"),Cf=n(" as many times as you want."),Ja=d(),tn=r("p"),Qo=r("strong"),If=n("The transaction will be committed only if there are no errors."),ja=d(),m(Jt.$$.fragment),Ua=d(),m(jt.$$.fragment),Qa=d(),P=r("p"),Lf=n("By default all Dao write operations (create, update, delete) trigger the "),Yo=r("code"),Tf=n("onModel*"),Rf=n(` event
    hooks.
    `),Bf=r("br"),Sf=n(`
    If you don't want this behavior, you can create a new Dao without hooks from an existing one by calling
    `),Ko=r("code"),Af=n("Dao.WithoutHooks()"),Pf=n(`
    or instantiate a new one with
    `),Xo=r("code"),Wf=n("daos.New(db)"),qf=n("/"),Vo=r("code"),Ff=n("daos.NewMultiDB(concurrentDB, nonconcurrentDB)"),Hf=n(":"),Ya=d(),m(Ut.$$.fragment),this.h()},l(e){ae=l(e,"P",{});var i=s(ae);or=o(i,`The main interface to interact with your application database is via the
    `),ge=l(i,"A",{href:!0,target:!0,rel:!0});var Yf=s(ge);ar=o(Yf,`Dao abstraction
    `),Yf.forEach(a),rr=o(i,"."),i.forEach(a),zo=f(e),G=l(e,"P",{});var Ee=s(G);fn=l(Ee,"CODE",{});var Kf=s(fn);lr=o(Kf,"app.Dao()"),Kf.forEach(a),sr=o(Ee,`
    provides read and write helpers (see `),Kt=l(Ee,"A",{href:!0});var Xf=s(Kt);ir=o(Xf,"Collection operations"),Xf.forEach(a),dr=o(Ee,`
    and `),Xt=l(Ee,"A",{href:!0});var Vf=s(Xt);fr=o(Vf,"Record operations"),Vf.forEach(a),cr=o(Ee,`) and it is responsible for triggering the
    `),cn=l(Ee,"CODE",{});var zf=s(cn);mr=o(zf,"onModel*"),zf.forEach(a),pr=o(Ee," event hooks."),Ee.forEach(a),Zo=f(e),re=l(e,"P",{});var nn=s(re);ur=o(nn,"It also exposes "),mn=l(nn,"CODE",{});var Zf=s(mn);$r=o(Zf,"app.Dao().DB()"),Zf.forEach(a),Er=o(nn,` builder that allows executing various SQL statements
    (including raw queries). Most of the common DB operations are listed below, but you can find further
    information in the
    `),he=l(nn,"A",{href:!0,target:!0,rel:!0});var ec=s(he);gr=o(ec,`dbx package godoc
    `),ec.forEach(a),hr=o(nn,"."),nn.forEach(a),ea=f(e),p(Re.$$.fragment,e),ta=f(e),p(Be.$$.fragment,e),na=f(e),be=l(e,"P",{});var Xa=s(be);br=o(Xa,"To execute DB queries you can start with the "),pn=l(Xa,"CODE",{});var tc=s(pn);vr=o(tc,'NewQuery("...")'),tc.forEach(a),xr=o(Xa," statement and then call one of:"),Xa.forEach(a),oa=f(e),le=l(e,"UL",{});var on=s(le);Se=l(on,"LI",{});var Va=s(Se);Vt=l(Va,"P",{});var Mf=s(Vt);p(Ae.$$.fragment,Mf),Or=o(Mf,`
            - for any query statement that is not meant to retrieve data:`),Mf.forEach(a),wr=f(Va),p(Pe.$$.fragment,Va),Va.forEach(a),Dr=f(on),We=l(on,"LI",{});var za=s(We);zt=l(za,"P",{});var Gf=s(zt);p(qe.$$.fragment,Gf),_r=o(Gf,`
            - to populate a single row into a struct:`),Gf.forEach(a),yr=f(za),p(Fe.$$.fragment,za),za.forEach(a),kr=f(on),He=l(on,"LI",{});var Za=s(He);Zt=l(Za,"P",{});var Jf=s(Zt);p(Me.$$.fragment,Jf),Nr=o(Jf,`
            - to populate multiple rows into a slice of structs:`),Jf.forEach(a),Cr=f(Za),p(Ge.$$.fragment,Za),Za.forEach(a),on.forEach(a),aa=f(e),p(Je.$$.fragment,e),ra=f(e),se=l(e,"P",{});var an=s(se);Ir=o(an,`To prevent SQL injection attacks, you should use named parameters for any expression value that comes from
    user input. This could be done using the named `),un=l(an,"CODE",{});var nc=s(un);Lr=o(nc,Qf),nc.forEach(a),Tr=o(an,`
    placeholders in your SQL statement and then define the parameter values for the query with
    `),$n=l(an,"CODE",{});var oc=s($n);Rr=o(oc,"Bind(params)"),oc.forEach(a),Br=o(an,". For example:"),an.forEach(a),la=f(e),p(je.$$.fragment,e),sa=f(e),p(Ue.$$.fragment,e),ia=f(e),N=l(e,"P",{});var W=s(N);Sr=o(W,`Instead of writting plain SQLs, you can also compose SQL statements programmatically using the db query
    builder.
    `),Ar=l(W,"BR",{}),Pr=o(W,`
    Every SQL keyword has a corresponding query building method. For example, `),En=l(W,"CODE",{});var ac=s(En);Wr=o(ac,"SELECT"),ac.forEach(a),qr=o(W,` corresponds
    to `),gn=l(W,"CODE",{});var rc=s(gn);Fr=o(rc,"Select()"),rc.forEach(a),Hr=o(W,", "),hn=l(W,"CODE",{});var lc=s(hn);Mr=o(lc,"FROM"),lc.forEach(a),Gr=o(W," corresponds to "),bn=l(W,"CODE",{});var sc=s(bn);Jr=o(sc,"From()"),sc.forEach(a),jr=o(W,`,
    `),vn=l(W,"CODE",{});var ic=s(vn);Ur=o(ic,"WHERE"),ic.forEach(a),Qr=o(W," corresponds to "),xn=l(W,"CODE",{});var dc=s(xn);Yr=o(dc,"Where()"),dc.forEach(a),Kr=o(W,", and so on."),W.forEach(a),da=f(e),p(Qe.$$.fragment,e),fa=f(e),p(Ye.$$.fragment,e),ca=f(e),I=l(e,"P",{});var H=s(I);Xr=o(H,"The "),On=l(H,"CODE",{});var fc=s(On);Vr=o(fc,"Select(...cols)"),fc.forEach(a),zr=o(H," method initializes a "),wn=l(H,"CODE",{});var cc=s(wn);Zr=o(cc,"SELECT"),cc.forEach(a),el=o(H,` query builder. It accepts a list
    of the column names to be selected.
    `),tl=l(H,"BR",{}),nl=o(H,`
    To add additional columns to an existing select query, you can call `),Dn=l(H,"CODE",{});var mc=s(Dn);ol=o(mc,"AndSelect()"),mc.forEach(a),al=o(H,`.
    `),rl=l(H,"BR",{}),ll=o(H,`
    To select distinct rows, you can call `),_n=l(H,"CODE",{});var pc=s(_n);sl=o(pc,"Distinct()"),pc.forEach(a),il=o(H,"."),H.forEach(a),ma=f(e),p(Ke.$$.fragment,e),pa=f(e),p(Xe.$$.fragment,e),ua=f(e),ve=l(e,"P",{});var er=s(ve);dl=o(er,"The "),yn=l(er,"CODE",{});var uc=s(yn);fl=o(uc,"From(...tables)"),uc.forEach(a),cl=o(er,` method specifies which tables to select from (plain table names are automatically
    quoted).`),er.forEach(a),$a=f(e),p(Ve.$$.fragment,e),Ea=f(e),p(ze.$$.fragment,e),ga=f(e),ie=l(e,"P",{});var rn=s(ie);ml=o(rn,"The "),kn=l(rn,"CODE",{});var $c=s(kn);pl=o($c,"Join(type, table, on)"),$c.forEach(a),ul=o(rn," method specifies a "),Nn=l(rn,"CODE",{});var Ec=s(Nn);$l=o(Ec,"JOIN"),Ec.forEach(a),El=o(rn," clause. It takes 3 parameters:"),rn.forEach(a),ha=f(e),de=l(e,"UL",{});var ln=s(de);fe=l(ln,"LI",{});var Qt=s(fe);Cn=l(Qt,"CODE",{});var gc=s(Cn);gl=o(gc,"type"),gc.forEach(a),hl=o(Qt," - join type string like "),In=l(Qt,"CODE",{});var hc=s(In);bl=o(hc,"INNER JOIN"),hc.forEach(a),vl=o(Qt,", "),Ln=l(Qt,"CODE",{});var bc=s(Ln);xl=o(bc,"LEFT JOIN"),bc.forEach(a),Ol=o(Qt,", etc."),Qt.forEach(a),wl=f(ln),en=l(ln,"LI",{});var jf=s(en);Tn=l(jf,"CODE",{});var vc=s(Tn);Dl=o(vc,"table"),vc.forEach(a),_l=o(jf," - the name of the table to be joined"),jf.forEach(a),yl=f(ln),ce=l(ln,"LI",{});var Yt=s(ce);Rn=l(Yt,"CODE",{});var xc=s(Rn);kl=o(xc,"on"),xc.forEach(a),Nl=o(Yt," - optional "),Bn=l(Yt,"CODE",{});var Oc=s(Bn);Cl=o(Oc,"dbx.Expression"),Oc.forEach(a),Il=o(Yt," as an "),Sn=l(Yt,"CODE",{});var wc=s(Sn);Ll=o(wc,"ON"),wc.forEach(a),Tl=o(Yt," clause"),Yt.forEach(a),ln.forEach(a),ba=f(e),L=l(e,"P",{});var M=s(L);Rl=o(M,"For convenience, you can also use the shortcuts "),An=l(M,"CODE",{});var Dc=s(An);Bl=o(Dc,"InnerJoin(table, on)"),Dc.forEach(a),Sl=o(M,`,
    `),Pn=l(M,"CODE",{});var _c=s(Pn);Al=o(_c,"LeftJoin(table, on)"),_c.forEach(a),Pl=o(M,`,
    `),Wn=l(M,"CODE",{});var yc=s(Wn);Wl=o(yc,"RightJoin(table, on)"),yc.forEach(a),ql=o(M," to specify "),qn=l(M,"CODE",{});var kc=s(qn);Fl=o(kc,"INNER JOIN"),kc.forEach(a),Hl=o(M,", "),Fn=l(M,"CODE",{});var Nc=s(Fn);Ml=o(Nc,"LEFT JOIN"),Nc.forEach(a),Gl=o(M,` and
    `),Hn=l(M,"CODE",{});var Cc=s(Hn);Jl=o(Cc,"RIGHT JOIN"),Cc.forEach(a),jl=o(M,", respectively."),M.forEach(a),va=f(e),p(Ze.$$.fragment,e),xa=f(e),p(et.$$.fragment,e),Oa=f(e),y=l(e,"P",{});var T=s(y);Ul=o(T,"The "),Mn=l(T,"CODE",{});var Ic=s(Mn);Ql=o(Ic,"Where(exp)"),Ic.forEach(a),Yl=o(T," method specifies the "),Gn=l(T,"CODE",{});var Lc=s(Gn);Kl=o(Lc,"WHERE"),Lc.forEach(a),Xl=o(T,` condition of the query.
    `),Vl=l(T,"BR",{}),zl=o(T,`
    You can also use `),Jn=l(T,"CODE",{});var Tc=s(Jn);Zl=o(Tc,"AndWhere(exp)"),Tc.forEach(a),es=o(T," or "),jn=l(T,"CODE",{});var Rc=s(jn);ts=o(Rc,"OrWhere(exp)"),Rc.forEach(a),ns=o(T,` to append additional one or more
    conditions to an existing `),Un=l(T,"CODE",{});var Bc=s(Un);os=o(Bc,"WHERE"),Bc.forEach(a),as=o(T,` clause.
    `),rs=l(T,"BR",{}),ls=o(T,`
    Each where condition accepts a single `),Qn=l(T,"CODE",{});var Sc=s(Qn);ss=o(Sc,"dbx.Expression"),Sc.forEach(a),is=o(T," (see below for full list)."),T.forEach(a),wa=f(e),p(tt.$$.fragment,e),Da=f(e),xe=l(e,"P",{});var tr=s(xe);ds=o(tr,"The following "),Yn=l(tr,"CODE",{});var Ac=s(Yn);fs=o(Ac,"dbx.Expression"),Ac.forEach(a),cs=o(tr," methods are available:"),tr.forEach(a),_a=f(e),h=l(e,"UL",{});var x=s(h);q=l(x,"LI",{class:!0});var ue=s(q);p(nt.$$.fragment,ue),ms=f(ue),ps=l(ue,"BR",{}),us=o(ue,`
        Generates an expression with the specified raw query fragment. Use the `),Kn=l(ue,"CODE",{});var Pc=s(Kn);$s=o(Pc,"optParams"),Pc.forEach(a),Es=o(ue,` to bind
        `),Xn=l(ue,"CODE",{});var Wc=s(Xn);gs=o(Wc,"dbx.Params"),Wc.forEach(a),hs=o(ue,` to the expression.
        `),p(ot.$$.fragment,ue),ue.forEach(a),bs=f(x),me=l(x,"LI",{class:!0});var sn=s(me);p(at.$$.fragment,sn),vs=f(sn),xs=l(sn,"BR",{}),Os=o(sn,`
        Generates a hash expression from a map whose keys are DB column names which need to be filtered according
        to the corresponding values.
        `),p(rt.$$.fragment,sn),sn.forEach(a),ws=f(x),J=l(x,"LI",{class:!0});var we=s(J);p(lt.$$.fragment,we),Ds=f(we),_s=l(we,"BR",{}),ys=o(we,`
        Negates a single expression by wrapping it with `),Vn=l(we,"CODE",{});var qc=s(Vn);ks=o(qc,"NOT()"),qc.forEach(a),Ns=o(we,`.
        `),p(st.$$.fragment,we),we.forEach(a),Cs=f(x),j=l(x,"LI",{class:!0});var De=s(j);p(it.$$.fragment,De),Is=f(De),Ls=l(De,"BR",{}),Ts=o(De,`
        Creates a new expression by concatenating the specified ones with `),zn=l(De,"CODE",{});var Fc=s(zn);Rs=o(Fc,"AND"),Fc.forEach(a),Bs=o(De,`.
        `),p(dt.$$.fragment,De),De.forEach(a),Ss=f(x),U=l(x,"LI",{class:!0});var _e=s(U);p(ft.$$.fragment,_e),As=f(_e),Ps=l(_e,"BR",{}),Ws=o(_e,`
        Creates a new expression by concatenating the specified ones with `),Zn=l(_e,"CODE",{});var Hc=s(Zn);qs=o(Hc,"OR"),Hc.forEach(a),Fs=o(_e,`.
        `),p(ct.$$.fragment,_e),_e.forEach(a),Hs=f(x),Q=l(x,"LI",{class:!0});var ye=s(Q);p(mt.$$.fragment,ye),Ms=f(ye),Gs=l(ye,"BR",{}),Js=o(ye,`
        Generates an `),eo=l(ye,"CODE",{});var Mc=s(eo);js=o(Mc,"IN"),Mc.forEach(a),Us=o(ye,` expression for the specified column and the list of allowed values.
        `),p(pt.$$.fragment,ye),ye.forEach(a),Qs=f(x),Y=l(x,"LI",{class:!0});var ke=s(Y);p(ut.$$.fragment,ke),Ys=f(ke),Ks=l(ke,"BR",{}),Xs=o(ke,`
        Generates an `),to=l(ke,"CODE",{});var Gc=s(to);Vs=o(Gc,"NOT IN"),Gc.forEach(a),zs=o(ke,` expression for the specified column and the list of allowed values.
        `),p($t.$$.fragment,ke),ke.forEach(a),Zs=f(x),O=l(x,"LI",{class:!0});var D=s(O);p(Et.$$.fragment,D),ei=f(D),ti=l(D,"BR",{}),ni=o(D,`
        Generates a `),no=l(D,"CODE",{});var Jc=s(no);oi=o(Jc,"LIKE"),Jc.forEach(a),ai=o(D,` expression for the specified column and the possible strings that the
        column should be like. If multiple values are present, the column should be like
        `),oo=l(D,"STRONG",{});var jc=s(oo);ri=o(jc,"all"),jc.forEach(a),li=o(D,` of them.
        `),si=l(D,"BR",{}),ii=o(D,`
        By default, each value will be surrounded by `),ao=l(D,"EM",{});var Uc=s(ao);di=o(Uc,'"%"'),Uc.forEach(a),fi=o(D,` to enable partial matching. Special
        characters like `),ro=l(D,"EM",{});var Qc=s(ro);ci=o(Qc,'"%"'),Qc.forEach(a),mi=o(D,", "),lo=l(D,"EM",{});var Yc=s(lo);pi=o(Yc,'"\\"'),Yc.forEach(a),ui=o(D,", "),so=l(D,"EM",{});var Kc=s(so);$i=o(Kc,'"_"'),Kc.forEach(a),Ei=o(D,` will also be properly escaped. You may call
        `),io=l(D,"CODE",{});var Xc=s(io);gi=o(Xc,"Escape(...pairs)"),Xc.forEach(a),hi=o(D," and/or "),fo=l(D,"CODE",{});var Vc=s(fo);bi=o(Vc,"Match(left, right)"),Vc.forEach(a),vi=o(D,` to change the default behavior.
        `),p(gt.$$.fragment,D),D.forEach(a),xi=f(x),F=l(x,"LI",{class:!0});var $e=s(F);p(ht.$$.fragment,$e),Oi=f($e),wi=l($e,"BR",{}),Di=o($e,`
        Generates a `),co=l($e,"CODE",{});var zc=s(co);_i=o(zc,"NOT LIKE"),zc.forEach(a),yi=o($e," expression in similar manner as "),mo=l($e,"CODE",{});var Zc=s(mo);ki=o(Zc,"Like()"),Zc.forEach(a),Ni=o($e,`.
        `),p(bt.$$.fragment,$e),$e.forEach(a),Ci=f(x),B=l(x,"LI",{class:!0});var ee=s(B);p(vt.$$.fragment,ee),Ii=f(ee),Li=l(ee,"BR",{}),Ti=o(ee,`
        This is similar to `),po=l(ee,"CODE",{});var em=s(po);Ri=o(em,"Like()"),em.forEach(a),Bi=o(ee,` except that the column must be one of the provided values, aka.
        multiple values are concatenated with `),uo=l(ee,"CODE",{});var tm=s(uo);Si=o(tm,"OR"),tm.forEach(a),Ai=o(ee," instead of "),$o=l(ee,"CODE",{});var nm=s($o);Pi=o(nm,"AND"),nm.forEach(a),Wi=o(ee,`.
        `),p(xt.$$.fragment,ee),ee.forEach(a),qi=f(x),S=l(x,"LI",{class:!0});var te=s(S);p(Ot.$$.fragment,te),Fi=f(te),Hi=l(te,"BR",{}),Mi=o(te,`
        This is similar to `),Eo=l(te,"CODE",{});var om=s(Eo);Gi=o(om,"NotLike()"),om.forEach(a),Ji=o(te,` except that the column must not be one of the provided
        values, aka. multiple values are concatenated with `),go=l(te,"CODE",{});var am=s(go);ji=o(am,"OR"),am.forEach(a),Ui=o(te," instead of "),ho=l(te,"CODE",{});var rm=s(ho);Qi=o(rm,"AND"),rm.forEach(a),Yi=o(te,`.
        `),p(wt.$$.fragment,te),te.forEach(a),Ki=f(x),K=l(x,"LI",{class:!0});var Ne=s(K);p(Dt.$$.fragment,Ne),Xi=f(Ne),Vi=l(Ne,"BR",{}),zi=o(Ne,`
        Prefix with `),bo=l(Ne,"CODE",{});var lm=s(bo);Zi=o(lm,"EXISTS"),lm.forEach(a),ed=o(Ne,` the specified expression (usually a subquery).
        `),p(_t.$$.fragment,Ne),Ne.forEach(a),td=f(x),X=l(x,"LI",{class:!0});var Ce=s(X);p(yt.$$.fragment,Ce),nd=f(Ce),od=l(Ce,"BR",{}),ad=o(Ce,`
        Prefix with `),vo=l(Ce,"CODE",{});var sm=s(vo);rd=o(sm,"NOT EXISTS"),sm.forEach(a),ld=o(Ce,` the specified expression (usually a subquery).
        `),p(kt.$$.fragment,Ce),Ce.forEach(a),sd=f(x),V=l(x,"LI",{class:!0});var Ie=s(V);p(Nt.$$.fragment,Ie),id=f(Ie),dd=l(Ie,"BR",{}),fd=o(Ie,`
        Generates a `),xo=l(Ie,"CODE",{});var im=s(xo);cd=o(im,"BETWEEN"),im.forEach(a),md=o(Ie,` expression with the specified range.
        `),p(Ct.$$.fragment,Ie),Ie.forEach(a),pd=f(x),z=l(x,"LI",{class:!0});var Le=s(z);p(It.$$.fragment,Le),ud=f(Le),$d=l(Le,"BR",{}),Ed=o(Le,`
        Generates a `),Oo=l(Le,"CODE",{});var dm=s(Oo);gd=o(dm,"NOT BETWEEN"),dm.forEach(a),hd=o(Le,` expression with the specified range.
        `),p(Lt.$$.fragment,Le),Le.forEach(a),x.forEach(a),ya=f(e),p(Tt.$$.fragment,e),ka=f(e),k=l(e,"P",{});var R=s(k);bd=o(R,"The "),wo=l(R,"CODE",{});var fm=s(wo);vd=o(fm,"OrderBy(...cols)"),fm.forEach(a),xd=o(R," specifies the "),Do=l(R,"CODE",{});var cm=s(Do);Od=o(cm,"ORDER BY"),cm.forEach(a),wd=o(R,` clause of the query.
    `),Dd=l(R,"BR",{}),_d=o(R,`
    A column name can contain `),_o=l(R,"EM",{});var mm=s(_o);yd=o(mm,'"ASC"'),mm.forEach(a),kd=o(R," or "),yo=l(R,"EM",{});var pm=s(yo);Nd=o(pm,'"DESC"'),pm.forEach(a),Cd=o(R,` to indicate its ordering direction.
    `),Id=l(R,"BR",{}),Ld=o(R,`
    You can also use `),ko=l(R,"CODE",{});var um=s(ko);Td=o(um,"AndOrderBy(...cols)"),um.forEach(a),Rd=o(R,` to append additional columns to an existing
    `),No=l(R,"CODE",{});var $m=s(No);Bd=o($m,"ORDER BY"),$m.forEach(a),Sd=o(R," clause."),R.forEach(a),Na=f(e),p(Rt.$$.fragment,e),Ca=f(e),p(Bt.$$.fragment,e),Ia=f(e),A=l(e,"P",{});var ne=s(A);Ad=o(ne,"The "),Co=l(ne,"CODE",{});var Em=s(Co);Pd=o(Em,"GroupBy(...cols)"),Em.forEach(a),Wd=o(ne," specifies the "),Io=l(ne,"CODE",{});var gm=s(Io);qd=o(gm,"GROUP BY"),gm.forEach(a),Fd=o(ne,` clause of the query.
    `),Hd=l(ne,"BR",{}),Md=o(ne,`
    You can also use `),Lo=l(ne,"CODE",{});var hm=s(Lo);Gd=o(hm,"AndGroupBy(...cols)"),hm.forEach(a),Jd=o(ne,` to append additional columns to an existing
    `),To=l(ne,"CODE",{});var bm=s(To);jd=o(bm,"GROUP BY"),bm.forEach(a),Ud=o(ne," clause."),ne.forEach(a),La=f(e),p(St.$$.fragment,e),Ta=f(e),p(At.$$.fragment,e),Ra=f(e),w=l(e,"P",{});var C=s(w);Qd=o(C,"The "),Ro=l(C,"CODE",{});var vm=s(Ro);Yd=o(vm,"Having(exp)"),vm.forEach(a),Kd=o(C," specifies the "),Bo=l(C,"CODE",{});var xm=s(Bo);Xd=o(xm,"HAVING"),xm.forEach(a),Vd=o(C,` clause of the query.
    `),zd=l(C,"BR",{}),Zd=o(C,`
    Similarly to
    `),So=l(C,"CODE",{});var Om=s(So);ef=o(Om,"Where(exp)"),Om.forEach(a),tf=o(C,", it accept a single "),Ao=l(C,"CODE",{});var wm=s(Ao);nf=o(wm,"dbx.Expression"),wm.forEach(a),of=o(C,` (see all available expressions
    listed above).
    `),af=l(C,"BR",{}),rf=o(C,`
    You can also use `),Po=l(C,"CODE",{});var Dm=s(Po);lf=o(Dm,"AndHaving(exp)"),Dm.forEach(a),sf=o(C," or "),Wo=l(C,"CODE",{});var _m=s(Wo);df=o(_m,"OrHaving(exp)"),_m.forEach(a),ff=o(C,` to append additional one or
    more conditions to an existing `),qo=l(C,"CODE",{});var ym=s(qo);cf=o(ym,"HAVING"),ym.forEach(a),mf=o(C," clause."),C.forEach(a),Ba=f(e),p(Pt.$$.fragment,e),Sa=f(e),p(Wt.$$.fragment,e),Aa=f(e),pe=l(e,"P",{});var dn=s(pe);pf=o(dn,"The "),Fo=l(dn,"CODE",{});var km=s(Fo);uf=o(km,"Limit(number)"),km.forEach(a),$f=o(dn," method specifies the "),Ho=l(dn,"CODE",{});var Nm=s(Ho);Ef=o(Nm,"LIMIT"),Nm.forEach(a),gf=o(dn," clause of the query."),dn.forEach(a),Pa=f(e),p(qt.$$.fragment,e),Wa=f(e),p(Ft.$$.fragment,e),qa=f(e),Z=l(e,"P",{});var Te=s(Z);hf=o(Te,"The "),Mo=l(Te,"CODE",{});var Cm=s(Mo);bf=o(Cm,"Offset(number)"),Cm.forEach(a),vf=o(Te," method specifies the "),Go=l(Te,"CODE",{});var Im=s(Go);xf=o(Im,"OFFSET"),Im.forEach(a),Of=o(Te,` clause of the query. Usually used
    together with `),Jo=l(Te,"CODE",{});var Lm=s(Jo);wf=o(Lm,"Limit(number)"),Lm.forEach(a),Df=o(Te,"."),Te.forEach(a),Fa=f(e),p(Ht.$$.fragment,e),Ha=f(e),p(Mt.$$.fragment,e),Ma=f(e),Gt=l(e,"P",{});var Uf=s(Gt);_f=o(Uf,"To execute multiple queries in a transaction you can use "),jo=l(Uf,"CODE",{});var Tm=s(jo);yf=o(Tm,"app.Dao().RunInTransaction()"),Tm.forEach(a),Uf.forEach(a),Ga=f(e),Oe=l(e,"P",{});var nr=s(Oe);kf=o(nr,"You can nest "),Uo=l(nr,"CODE",{});var Rm=s(Uo);Nf=o(Rm,"Dao.RunInTransaction()"),Rm.forEach(a),Cf=o(nr," as many times as you want."),nr.forEach(a),Ja=f(e),tn=l(e,"P",{});var Bm=s(tn);Qo=l(Bm,"STRONG",{});var Sm=s(Qo);If=o(Sm,"The transaction will be committed only if there are no errors."),Sm.forEach(a),Bm.forEach(a),ja=f(e),p(Jt.$$.fragment,e),Ua=f(e),p(jt.$$.fragment,e),Qa=f(e),P=l(e,"P",{});var oe=s(P);Lf=o(oe,"By default all Dao write operations (create, update, delete) trigger the "),Yo=l(oe,"CODE",{});var Am=s(Yo);Tf=o(Am,"onModel*"),Am.forEach(a),Rf=o(oe,` event
    hooks.
    `),Bf=l(oe,"BR",{}),Sf=o(oe,`
    If you don't want this behavior, you can create a new Dao without hooks from an existing one by calling
    `),Ko=l(oe,"CODE",{});var Pm=s(Ko);Af=o(Pm,"Dao.WithoutHooks()"),Pm.forEach(a),Pf=o(oe,`
    or instantiate a new one with
    `),Xo=l(oe,"CODE",{});var Wm=s(Xo);Wf=o(Wm,"daos.New(db)"),Wm.forEach(a),qf=o(oe,"/"),Vo=l(oe,"CODE",{});var qm=s(Vo);Ff=o(qm,"daos.NewMultiDB(concurrentDB, nonconcurrentDB)"),qm.forEach(a),Hf=o(oe,":"),oe.forEach(a),Ya=f(e),p(Ut.$$.fragment,e),this.h()},h(){_(ge,"href","https://pkg.go.dev/github.com/pocketbase/pocketbase/daos"),_(ge,"target","_blank"),_(ge,"rel","noopener noreferrer"),_(Kt,"href","/docs/go-collections"),_(Xt,"href","/docs/go-records"),_(he,"href","https://pkg.go.dev/github.com/pocketbase/dbx"),_(he,"target","_blank"),_(he,"rel","noopener noreferrer"),_(q,"class","m-b-xs"),_(me,"class","m-b-xs"),_(J,"class","m-b-xs"),_(j,"class","m-b-xs"),_(U,"class","m-b-xs"),_(Q,"class","m-b-xs"),_(Y,"class","m-b-xs"),_(O,"class","m-b-xs"),_(F,"class","m-b-xs"),_(B,"class","m-b-xs"),_(S,"class","m-b-xs"),_(K,"class","m-b-xs"),_(X,"class","m-b-xs"),_(V,"class","m-b-xs"),_(z,"class","m-b-xs")},m(e,i){c(e,ae,i),t(ae,or),t(ae,ge),t(ge,ar),t(ae,rr),c(e,zo,i),c(e,G,i),t(G,fn),t(fn,lr),t(G,sr),t(G,Kt),t(Kt,ir),t(G,dr),t(G,Xt),t(Xt,fr),t(G,cr),t(G,cn),t(cn,mr),t(G,pr),c(e,Zo,i),c(e,re,i),t(re,ur),t(re,mn),t(mn,$r),t(re,Er),t(re,he),t(he,gr),t(re,hr),c(e,ea,i),u(Re,e,i),c(e,ta,i),u(Be,e,i),c(e,na,i),c(e,be,i),t(be,br),t(be,pn),t(pn,vr),t(be,xr),c(e,oa,i),c(e,le,i),t(le,Se),t(Se,Vt),u(Ae,Vt,null),t(Vt,Or),t(Se,wr),u(Pe,Se,null),t(le,Dr),t(le,We),t(We,zt),u(qe,zt,null),t(zt,_r),t(We,yr),u(Fe,We,null),t(le,kr),t(le,He),t(He,Zt),u(Me,Zt,null),t(Zt,Nr),t(He,Cr),u(Ge,He,null),c(e,aa,i),u(Je,e,i),c(e,ra,i),c(e,se,i),t(se,Ir),t(se,un),t(un,Lr),t(se,Tr),t(se,$n),t($n,Rr),t(se,Br),c(e,la,i),u(je,e,i),c(e,sa,i),u(Ue,e,i),c(e,ia,i),c(e,N,i),t(N,Sr),t(N,Ar),t(N,Pr),t(N,En),t(En,Wr),t(N,qr),t(N,gn),t(gn,Fr),t(N,Hr),t(N,hn),t(hn,Mr),t(N,Gr),t(N,bn),t(bn,Jr),t(N,jr),t(N,vn),t(vn,Ur),t(N,Qr),t(N,xn),t(xn,Yr),t(N,Kr),c(e,da,i),u(Qe,e,i),c(e,fa,i),u(Ye,e,i),c(e,ca,i),c(e,I,i),t(I,Xr),t(I,On),t(On,Vr),t(I,zr),t(I,wn),t(wn,Zr),t(I,el),t(I,tl),t(I,nl),t(I,Dn),t(Dn,ol),t(I,al),t(I,rl),t(I,ll),t(I,_n),t(_n,sl),t(I,il),c(e,ma,i),u(Ke,e,i),c(e,pa,i),u(Xe,e,i),c(e,ua,i),c(e,ve,i),t(ve,dl),t(ve,yn),t(yn,fl),t(ve,cl),c(e,$a,i),u(Ve,e,i),c(e,Ea,i),u(ze,e,i),c(e,ga,i),c(e,ie,i),t(ie,ml),t(ie,kn),t(kn,pl),t(ie,ul),t(ie,Nn),t(Nn,$l),t(ie,El),c(e,ha,i),c(e,de,i),t(de,fe),t(fe,Cn),t(Cn,gl),t(fe,hl),t(fe,In),t(In,bl),t(fe,vl),t(fe,Ln),t(Ln,xl),t(fe,Ol),t(de,wl),t(de,en),t(en,Tn),t(Tn,Dl),t(en,_l),t(de,yl),t(de,ce),t(ce,Rn),t(Rn,kl),t(ce,Nl),t(ce,Bn),t(Bn,Cl),t(ce,Il),t(ce,Sn),t(Sn,Ll),t(ce,Tl),c(e,ba,i),c(e,L,i),t(L,Rl),t(L,An),t(An,Bl),t(L,Sl),t(L,Pn),t(Pn,Al),t(L,Pl),t(L,Wn),t(Wn,Wl),t(L,ql),t(L,qn),t(qn,Fl),t(L,Hl),t(L,Fn),t(Fn,Ml),t(L,Gl),t(L,Hn),t(Hn,Jl),t(L,jl),c(e,va,i),u(Ze,e,i),c(e,xa,i),u(et,e,i),c(e,Oa,i),c(e,y,i),t(y,Ul),t(y,Mn),t(Mn,Ql),t(y,Yl),t(y,Gn),t(Gn,Kl),t(y,Xl),t(y,Vl),t(y,zl),t(y,Jn),t(Jn,Zl),t(y,es),t(y,jn),t(jn,ts),t(y,ns),t(y,Un),t(Un,os),t(y,as),t(y,rs),t(y,ls),t(y,Qn),t(Qn,ss),t(y,is),c(e,wa,i),u(tt,e,i),c(e,Da,i),c(e,xe,i),t(xe,ds),t(xe,Yn),t(Yn,fs),t(xe,cs),c(e,_a,i),c(e,h,i),t(h,q),u(nt,q,null),t(q,ms),t(q,ps),t(q,us),t(q,Kn),t(Kn,$s),t(q,Es),t(q,Xn),t(Xn,gs),t(q,hs),u(ot,q,null),t(h,bs),t(h,me),u(at,me,null),t(me,vs),t(me,xs),t(me,Os),u(rt,me,null),t(h,ws),t(h,J),u(lt,J,null),t(J,Ds),t(J,_s),t(J,ys),t(J,Vn),t(Vn,ks),t(J,Ns),u(st,J,null),t(h,Cs),t(h,j),u(it,j,null),t(j,Is),t(j,Ls),t(j,Ts),t(j,zn),t(zn,Rs),t(j,Bs),u(dt,j,null),t(h,Ss),t(h,U),u(ft,U,null),t(U,As),t(U,Ps),t(U,Ws),t(U,Zn),t(Zn,qs),t(U,Fs),u(ct,U,null),t(h,Hs),t(h,Q),u(mt,Q,null),t(Q,Ms),t(Q,Gs),t(Q,Js),t(Q,eo),t(eo,js),t(Q,Us),u(pt,Q,null),t(h,Qs),t(h,Y),u(ut,Y,null),t(Y,Ys),t(Y,Ks),t(Y,Xs),t(Y,to),t(to,Vs),t(Y,zs),u($t,Y,null),t(h,Zs),t(h,O),u(Et,O,null),t(O,ei),t(O,ti),t(O,ni),t(O,no),t(no,oi),t(O,ai),t(O,oo),t(oo,ri),t(O,li),t(O,si),t(O,ii),t(O,ao),t(ao,di),t(O,fi),t(O,ro),t(ro,ci),t(O,mi),t(O,lo),t(lo,pi),t(O,ui),t(O,so),t(so,$i),t(O,Ei),t(O,io),t(io,gi),t(O,hi),t(O,fo),t(fo,bi),t(O,vi),u(gt,O,null),t(h,xi),t(h,F),u(ht,F,null),t(F,Oi),t(F,wi),t(F,Di),t(F,co),t(co,_i),t(F,yi),t(F,mo),t(mo,ki),t(F,Ni),u(bt,F,null),t(h,Ci),t(h,B),u(vt,B,null),t(B,Ii),t(B,Li),t(B,Ti),t(B,po),t(po,Ri),t(B,Bi),t(B,uo),t(uo,Si),t(B,Ai),t(B,$o),t($o,Pi),t(B,Wi),u(xt,B,null),t(h,qi),t(h,S),u(Ot,S,null),t(S,Fi),t(S,Hi),t(S,Mi),t(S,Eo),t(Eo,Gi),t(S,Ji),t(S,go),t(go,ji),t(S,Ui),t(S,ho),t(ho,Qi),t(S,Yi),u(wt,S,null),t(h,Ki),t(h,K),u(Dt,K,null),t(K,Xi),t(K,Vi),t(K,zi),t(K,bo),t(bo,Zi),t(K,ed),u(_t,K,null),t(h,td),t(h,X),u(yt,X,null),t(X,nd),t(X,od),t(X,ad),t(X,vo),t(vo,rd),t(X,ld),u(kt,X,null),t(h,sd),t(h,V),u(Nt,V,null),t(V,id),t(V,dd),t(V,fd),t(V,xo),t(xo,cd),t(V,md),u(Ct,V,null),t(h,pd),t(h,z),u(It,z,null),t(z,ud),t(z,$d),t(z,Ed),t(z,Oo),t(Oo,gd),t(z,hd),u(Lt,z,null),c(e,ya,i),u(Tt,e,i),c(e,ka,i),c(e,k,i),t(k,bd),t(k,wo),t(wo,vd),t(k,xd),t(k,Do),t(Do,Od),t(k,wd),t(k,Dd),t(k,_d),t(k,_o),t(_o,yd),t(k,kd),t(k,yo),t(yo,Nd),t(k,Cd),t(k,Id),t(k,Ld),t(k,ko),t(ko,Td),t(k,Rd),t(k,No),t(No,Bd),t(k,Sd),c(e,Na,i),u(Rt,e,i),c(e,Ca,i),u(Bt,e,i),c(e,Ia,i),c(e,A,i),t(A,Ad),t(A,Co),t(Co,Pd),t(A,Wd),t(A,Io),t(Io,qd),t(A,Fd),t(A,Hd),t(A,Md),t(A,Lo),t(Lo,Gd),t(A,Jd),t(A,To),t(To,jd),t(A,Ud),c(e,La,i),u(St,e,i),c(e,Ta,i),u(At,e,i),c(e,Ra,i),c(e,w,i),t(w,Qd),t(w,Ro),t(Ro,Yd),t(w,Kd),t(w,Bo),t(Bo,Xd),t(w,Vd),t(w,zd),t(w,Zd),t(w,So),t(So,ef),t(w,tf),t(w,Ao),t(Ao,nf),t(w,of),t(w,af),t(w,rf),t(w,Po),t(Po,lf),t(w,sf),t(w,Wo),t(Wo,df),t(w,ff),t(w,qo),t(qo,cf),t(w,mf),c(e,Ba,i),u(Pt,e,i),c(e,Sa,i),u(Wt,e,i),c(e,Aa,i),c(e,pe,i),t(pe,pf),t(pe,Fo),t(Fo,uf),t(pe,$f),t(pe,Ho),t(Ho,Ef),t(pe,gf),c(e,Pa,i),u(qt,e,i),c(e,Wa,i),u(Ft,e,i),c(e,qa,i),c(e,Z,i),t(Z,hf),t(Z,Mo),t(Mo,bf),t(Z,vf),t(Z,Go),t(Go,xf),t(Z,Of),t(Z,Jo),t(Jo,wf),t(Z,Df),c(e,Fa,i),u(Ht,e,i),c(e,Ha,i),u(Mt,e,i),c(e,Ma,i),c(e,Gt,i),t(Gt,_f),t(Gt,jo),t(jo,yf),c(e,Ga,i),c(e,Oe,i),t(Oe,kf),t(Oe,Uo),t(Uo,Nf),t(Oe,Cf),c(e,Ja,i),c(e,tn,i),t(tn,Qo),t(Qo,If),c(e,ja,i),u(Jt,e,i),c(e,Ua,i),u(jt,e,i),c(e,Qa,i),c(e,P,i),t(P,Lf),t(P,Yo),t(Yo,Tf),t(P,Rf),t(P,Bf),t(P,Sf),t(P,Ko),t(Ko,Af),t(P,Pf),t(P,Xo),t(Xo,Wf),t(P,qf),t(P,Vo),t(Vo,Ff),t(P,Hf),c(e,Ya,i),u(Ut,e,i),Ka=!0},p:Jm,i(e){Ka||($(Re.$$.fragment,e),$(Be.$$.fragment,e),$(Ae.$$.fragment,e),$(Pe.$$.fragment,e),$(qe.$$.fragment,e),$(Fe.$$.fragment,e),$(Me.$$.fragment,e),$(Ge.$$.fragment,e),$(Je.$$.fragment,e),$(je.$$.fragment,e),$(Ue.$$.fragment,e),$(Qe.$$.fragment,e),$(Ye.$$.fragment,e),$(Ke.$$.fragment,e),$(Xe.$$.fragment,e),$(Ve.$$.fragment,e),$(ze.$$.fragment,e),$(Ze.$$.fragment,e),$(et.$$.fragment,e),$(tt.$$.fragment,e),$(nt.$$.fragment,e),$(ot.$$.fragment,e),$(at.$$.fragment,e),$(rt.$$.fragment,e),$(lt.$$.fragment,e),$(st.$$.fragment,e),$(it.$$.fragment,e),$(dt.$$.fragment,e),$(ft.$$.fragment,e),$(ct.$$.fragment,e),$(mt.$$.fragment,e),$(pt.$$.fragment,e),$(ut.$$.fragment,e),$($t.$$.fragment,e),$(Et.$$.fragment,e),$(gt.$$.fragment,e),$(ht.$$.fragment,e),$(bt.$$.fragment,e),$(vt.$$.fragment,e),$(xt.$$.fragment,e),$(Ot.$$.fragment,e),$(wt.$$.fragment,e),$(Dt.$$.fragment,e),$(_t.$$.fragment,e),$(yt.$$.fragment,e),$(kt.$$.fragment,e),$(Nt.$$.fragment,e),$(Ct.$$.fragment,e),$(It.$$.fragment,e),$(Lt.$$.fragment,e),$(Tt.$$.fragment,e),$(Rt.$$.fragment,e),$(Bt.$$.fragment,e),$(St.$$.fragment,e),$(At.$$.fragment,e),$(Pt.$$.fragment,e),$(Wt.$$.fragment,e),$(qt.$$.fragment,e),$(Ft.$$.fragment,e),$(Ht.$$.fragment,e),$(Mt.$$.fragment,e),$(Jt.$$.fragment,e),$(jt.$$.fragment,e),$(Ut.$$.fragment,e),Ka=!0)},o(e){E(Re.$$.fragment,e),E(Be.$$.fragment,e),E(Ae.$$.fragment,e),E(Pe.$$.fragment,e),E(qe.$$.fragment,e),E(Fe.$$.fragment,e),E(Me.$$.fragment,e),E(Ge.$$.fragment,e),E(Je.$$.fragment,e),E(je.$$.fragment,e),E(Ue.$$.fragment,e),E(Qe.$$.fragment,e),E(Ye.$$.fragment,e),E(Ke.$$.fragment,e),E(Xe.$$.fragment,e),E(Ve.$$.fragment,e),E(ze.$$.fragment,e),E(Ze.$$.fragment,e),E(et.$$.fragment,e),E(tt.$$.fragment,e),E(nt.$$.fragment,e),E(ot.$$.fragment,e),E(at.$$.fragment,e),E(rt.$$.fragment,e),E(lt.$$.fragment,e),E(st.$$.fragment,e),E(it.$$.fragment,e),E(dt.$$.fragment,e),E(ft.$$.fragment,e),E(ct.$$.fragment,e),E(mt.$$.fragment,e),E(pt.$$.fragment,e),E(ut.$$.fragment,e),E($t.$$.fragment,e),E(Et.$$.fragment,e),E(gt.$$.fragment,e),E(ht.$$.fragment,e),E(bt.$$.fragment,e),E(vt.$$.fragment,e),E(xt.$$.fragment,e),E(Ot.$$.fragment,e),E(wt.$$.fragment,e),E(Dt.$$.fragment,e),E(_t.$$.fragment,e),E(yt.$$.fragment,e),E(kt.$$.fragment,e),E(Nt.$$.fragment,e),E(Ct.$$.fragment,e),E(It.$$.fragment,e),E(Lt.$$.fragment,e),E(Tt.$$.fragment,e),E(Rt.$$.fragment,e),E(Bt.$$.fragment,e),E(St.$$.fragment,e),E(At.$$.fragment,e),E(Pt.$$.fragment,e),E(Wt.$$.fragment,e),E(qt.$$.fragment,e),E(Ft.$$.fragment,e),E(Ht.$$.fragment,e),E(Mt.$$.fragment,e),E(Jt.$$.fragment,e),E(jt.$$.fragment,e),E(Ut.$$.fragment,e),Ka=!1},d(e){e&&a(ae),e&&a(zo),e&&a(G),e&&a(Zo),e&&a(re),e&&a(ea),g(Re,e),e&&a(ta),g(Be,e),e&&a(na),e&&a(be),e&&a(oa),e&&a(le),g(Ae),g(Pe),g(qe),g(Fe),g(Me),g(Ge),e&&a(aa),g(Je,e),e&&a(ra),e&&a(se),e&&a(la),g(je,e),e&&a(sa),g(Ue,e),e&&a(ia),e&&a(N),e&&a(da),g(Qe,e),e&&a(fa),g(Ye,e),e&&a(ca),e&&a(I),e&&a(ma),g(Ke,e),e&&a(pa),g(Xe,e),e&&a(ua),e&&a(ve),e&&a($a),g(Ve,e),e&&a(Ea),g(ze,e),e&&a(ga),e&&a(ie),e&&a(ha),e&&a(de),e&&a(ba),e&&a(L),e&&a(va),g(Ze,e),e&&a(xa),g(et,e),e&&a(Oa),e&&a(y),e&&a(wa),g(tt,e),e&&a(Da),e&&a(xe),e&&a(_a),e&&a(h),g(nt),g(ot),g(at),g(rt),g(lt),g(st),g(it),g(dt),g(ft),g(ct),g(mt),g(pt),g(ut),g($t),g(Et),g(gt),g(ht),g(bt),g(vt),g(xt),g(Ot),g(wt),g(Dt),g(_t),g(yt),g(kt),g(Nt),g(Ct),g(It),g(Lt),e&&a(ya),g(Tt,e),e&&a(ka),e&&a(k),e&&a(Na),g(Rt,e),e&&a(Ca),g(Bt,e),e&&a(Ia),e&&a(A),e&&a(La),g(St,e),e&&a(Ta),g(At,e),e&&a(Ra),e&&a(w),e&&a(Ba),g(Pt,e),e&&a(Sa),g(Wt,e),e&&a(Aa),e&&a(pe),e&&a(Pa),g(qt,e),e&&a(Wa),g(Ft,e),e&&a(qa),e&&a(Z),e&&a(Fa),g(Ht,e),e&&a(Ha),g(Mt,e),e&&a(Ma),e&&a(Gt),e&&a(Ga),e&&a(Oe),e&&a(Ja),e&&a(tn),e&&a(ja),g(Jt,e),e&&a(Ua),g(jt,e),e&&a(Qa),e&&a(P),e&&a(Ya),g(Ut,e)}}}class Vm extends Hm{constructor(ae){super(),Mm(this,ae,null,Um,Gm,{})}}export{Vm as component};
