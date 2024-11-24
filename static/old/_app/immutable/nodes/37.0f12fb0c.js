import{S as qp,i as Pp,s as Ap,k as r,q as a,a as d,y as p,l,m as s,r as n,h as o,c,z as $,n as N,b as f,G as t,A as m,H as Mp,g as u,d as E,B as h}from"../chunks/index.a7566c1a.js";import{H as b}from"../chunks/HeadingLink.20322812.js";import{C as v}from"../chunks/CodeBlock.a090ee9b.js";import{T as Gp}from"../chunks/Toc.c31a36b6.js";function Hp(jp){let ne,or,la,rr,lr,zn,H,sa,sr,ir,Kt,dr,cr,Xt,fr,pr,ia,$r,mr,Vn,ue,ur,da,Er,hr,Zn,Ne,eo,Be,to,Ee,gr,ca,br,vr,ao,oe,Se,zt,je,xr,wr,qe,Or,Pe,he,Ae,_r,fa,yr,Dr,kr,Me,Cr,Ge,ge,He,Tr,pa,Ir,Rr,Lr,We,no,Fe,oo,re,Nr,$a,Wc="{:paramName}",Br,Sr,ma,jr,qr,ro,Je,lo,Qe,so,k,Pr,Ar,Mr,ua,Gr,Hr,Ea,Wr,Fr,ha,Jr,Qr,ga,Ur,Yr,ba,Kr,Xr,va,zr,Vr,io,Ue,co,Ye,fo,T,Zr,xa,el,tl,wa,al,nl,ol,rl,Oa,ll,sl,il,dl,_a,cl,fl,po,Ke,$o,Xe,mo,be,pl,ya,$l,ml,uo,ze,Eo,Ve,ho,le,ul,Da,El,hl,ka,gl,bl,go,se,ie,Ca,vl,xl,Ta,wl,Ol,Ia,_l,yl,Dl,Vt,Ra,kl,Cl,Tl,de,La,Il,Rl,Na,Ll,Nl,Ba,Bl,Sl,bo,I,jl,Sa,ql,Pl,ja,Al,Ml,qa,Gl,Hl,Pa,Wl,Fl,Aa,Jl,Ql,Ma,Ul,Yl,vo,Ze,xo,et,wo,y,Kl,Ga,Xl,zl,Ha,Vl,Zl,es,ts,Wa,as,ns,Fa,os,rs,Ja,ls,ss,is,ds,Qa,cs,fs,Oo,tt,_o,ve,ps,Ua,$s,ms,yo,g,W,at,us,Es,hs,Ya,gs,bs,nt,vs,ce,ot,xs,ws,Os,rt,_s,F,lt,ys,Ds,ks,Ka,Cs,Ts,st,Is,J,it,Rs,Ls,Ns,Xa,Bs,Ss,dt,js,Q,ct,qs,Ps,As,za,Ms,Gs,ft,Hs,U,pt,Ws,Fs,Js,Va,Qs,Us,$t,Ys,Y,mt,Ks,Xs,zs,Za,Vs,Zs,ut,ei,w,Et,ti,ai,ni,en,oi,ri,tn,li,si,ii,di,an,ci,fi,nn,pi,$i,on,mi,ui,rn,Ei,hi,ln,gi,bi,sn,vi,xi,ht,wi,P,gt,Oi,_i,yi,dn,Di,ki,cn,Ci,Ti,bt,Ii,B,vt,Ri,Li,Ni,fn,Bi,Si,pn,ji,qi,$n,Pi,Ai,xt,Mi,S,wt,Gi,Hi,Wi,mn,Fi,Ji,un,Qi,Ui,En,Yi,Ki,Ot,Xi,K,_t,zi,Vi,Zi,hn,ed,td,yt,ad,X,Dt,nd,od,rd,gn,ld,sd,kt,id,z,Ct,dd,cd,fd,bn,pd,$d,Tt,md,V,It,ud,Ed,hd,vn,gd,bd,Rt,Do,Lt,ko,D,vd,xn,xd,wd,wn,Od,_d,yd,Dd,On,kd,Cd,_n,Td,Id,Rd,Ld,yn,Nd,Bd,Dn,Sd,jd,Co,Nt,To,Bt,Io,j,qd,kn,Pd,Ad,Cn,Md,Gd,Hd,Wd,Tn,Fd,Jd,In,Qd,Ud,Ro,St,Lo,jt,No,O,Yd,Rn,Kd,Xd,Ln,zd,Vd,Zd,ec,Nn,tc,ac,Bn,nc,oc,rc,lc,Sn,sc,ic,jn,dc,cc,qn,fc,pc,Bo,qt,So,Pt,jo,fe,$c,Pn,mc,uc,An,Ec,hc,qo,At,Po,Mt,Ao,Z,gc,Mn,bc,vc,Gn,xc,wc,Hn,Oc,_c,Mo,Gt,Go,Ht,Ho,Wt,yc,Wn,Dc,Wo,xe,kc,Fn,Cc,Tc,Fo,Zt,Jn,Ic,Jo,Ft,Qo,Jt,Uo,A,Rc,Qn,Lc,Nc,Bc,Sc,Un,jc,qc,Yn,Pc,Ac,Yo,Qt,Ko;return Ne=new Gp({}),Be=new b({props:{title:"Executing queries"}}),je=new b({props:{title:"execute()",tag:"code"}}),qe=new v({props:{language:"javascript",content:`
                $app.dao().db()
                    .newQuery("CREATE INDEX name_idx ON users (name)")
                    .execute() // throw an error on db failure
            `}}),Ae=new b({props:{id:"execute-one",title:"one()",tag:"code"}}),Me=new v({props:{language:"javascript",content:`
                const result = new DynamicModel({
                    // describe the shape of the data (used also as initial values)
                    "id":     "",
                    "status": false,
                    "age":    0,
                    "roles":  [], // serialized json db arrays are decoded as plain arrays
                })

                $app.dao().db()
                    .newQuery("SELECT id, status, age, roles FROM users WHERE id=1")
                    .one(result) // throw an error on db failure or missing row

                console.log(result.id)
            `}}),He=new b({props:{id:"execute-all",title:"all()",tag:"code"}}),We=new v({props:{language:"javascript",content:`
                const result = arrayOf(new DynamicModel({
                    // describe the shape of the data (used also as initial values)
                    "id":     "",
                    "status": false,
                    "age":    0,
                    "roles":  [], // serialized json db arrays are decoded as plain arrays
                }))

                $app.dao().db()
                    .newQuery("SELECT id, status, age, roles FROM users LIMIT 100")
                    .all(result) // throw an error on db failure

                if (result.length > 0) {
                    console.log(result[0].id)
                }
            `}}),Fe=new b({props:{title:"Binding parameters"}}),Je=new v({props:{language:"javascript",content:`
        const result = arrayOf(new DynamicModel({
            "name":    "",
            "created": "",
        }))

        $app.dao().db()
            .newQuery("SELECT name, created FROM posts WHERE created >= {:from} and created <= {:to}")
            .bind({
                "from": "2023-06-25 00:00:00.000Z",
                "to":   "2023-06-28 23:59:59.999Z",
            })
            .all(result)

        console.log(result.length)
    `}}),Qe=new b({props:{title:"Query builder"}}),Ue=new v({props:{language:"javascript",content:`
        const result = arrayOf(new DynamicModel({
            "id":    "",
            "email": "",
        }))

        $app.dao().db()
            .select("id", "email")
            .from("users")
            .andWhere($dbx.like("email", "example.com"))
            .limit(100)
            .orderBy("created ASC")
            .all(result)
    `}}),Ye=new b({props:{title:"select(), andSelect(), distinct()",tag:"h5"}}),Ke=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("id", "avatar as image")
            .andSelect("(firstName || ' ' || lastName) as fullName")
            .distinct()
            ...
    `}}),Xe=new b({props:{title:"from()",tag:"h5"}}),ze=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("table1.id", "table2.name")
            .from("table1", "table2")
            ...
    `}}),Ve=new b({props:{title:"join()",tag:"h5"}}),Ze=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("users.*")
            .from("users")
            .innerJoin("profiles", $dbx.exp("profiles.user_id = users.id"))
            .join("FULL OUTER JOIN", "department", $dbx.exp("department.id = {:id}", {id: "someId"}))
            ...
    `}}),et=new b({props:{title:"where(), andWhere(), orWhere()",tag:"h5"}}),tt=new v({props:{language:"javascript",content:`
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
        $app.dao().db()
            .select("users.*")
            .from("users")
            .where($dbx.exp("id = {:id}", { id: "someId" }))
            .andWhere($dbx.hashExp({ status: "public" }))
            .andWhere($dbx.like("name", "john"))
            .orWhere($dbx.and(
                $dbx.hashExp({
                    role:     "manager",
                    fullTime: true,
                }),
                $dbx.exp("experience > {:exp}", { exp: 10 })
            ))
            ...
    `}}),at=new b({props:{title:"$dbx.exp(raw, optParams)",tag:"code"}}),nt=new v({props:{language:"javascript",content:`
                $dbx.exp("status = 'public'")
                $dbx.exp("total > {:min} AND total < {:max}", { min: 10, max: 30 })
            `}}),ot=new b({props:{title:"$dbx.hashExp(pairs)",tag:"code"}}),rt=new v({props:{language:"javascript",content:`
                // slug = "example" AND active IS TRUE AND tags in ("tag1", "tag2", "tag3") AND parent IS NULL
                $dbx.hashExp({
                    slug:   "example",
                    active: true,
                    tags:   ["tag1", "tag2", "tag3"],
                    parent: null,
                })
            `}}),lt=new b({props:{title:"$dbx.not(exp)",tag:"code"}}),st=new v({props:{language:"javascript",content:`
                // NOT(status = 1)
                $dbx.not($dbx.exp("status = 1"))
            `}}),it=new b({props:{title:"$dbx.and(...exps)",tag:"code"}}),dt=new v({props:{language:"javascript",content:`
                // (status = 1 AND username like "%john%")
                $dbx.and($dbx.exp("status = 1"), $dbx.like("username", "john"))
            `}}),ct=new b({props:{title:"$dbx.or(...exps)",tag:"code"}}),ft=new v({props:{language:"javascript",content:`
                // (status = 1 OR username like "%john%")
                $dbx.or($dbx.exp("status = 1"), $dbx.like("username", "john"))
            `}}),pt=new b({props:{title:"$dbx.in(col, ...values)",tag:"code"}}),$t=new v({props:{language:"javascript",content:`
                // status IN ("public", "reviewed")
                $dbx.in("status", "public", "reviewed")
            `}}),mt=new b({props:{title:"$dbx.notIn(col, ...values)",tag:"code"}}),ut=new v({props:{language:"javascript",content:`
                // status NOT IN ("public", "reviewed")
                $dbx.notIn("status", "public", "reviewed")
            `}}),Et=new b({props:{title:"$dbx.like(col, ...values)",tag:"code"}}),ht=new v({props:{language:"javascript",content:`
                // name LIKE "%test1%" AND name LIKE "%test2%"
                $dbx.like("name", "test1", "test2")

                // name LIKE "test1%"
                $dbx.like("name", "test1").match(false, true)
            `}}),gt=new b({props:{title:"$dbx.notLike(col, ...values)",tag:"code"}}),bt=new v({props:{language:"javascript",content:`
                // name NOT LIKE "%test1%" AND name NOT LIKE "%test2%"
                $dbx.notLike("name", "test1", "test2")

                // name NOT LIKE "test1%"
                $dbx.notLike("name", "test1").match(false, true)
            `}}),vt=new b({props:{title:"$dbx.orLike(col, ...values)",tag:"code"}}),xt=new v({props:{language:"javascript",content:`
                // name LIKE "%test1%" OR name LIKE "%test2%"
                $dbx.orLike("name", "test1", "test2")

                // name LIKE "test1%" OR name LIKE "test2%"
                $dbx.orLike("name", "test1", "test2").match(false, true)
            `}}),wt=new b({props:{title:"$dbx.orNotLike(col, ...values)",tag:"code"}}),Ot=new v({props:{language:"javascript",content:`
                // name NOT LIKE "%test1%" OR name NOT LIKE "%test2%"
                $dbx.orNotLike("name", "test1", "test2")

                // name NOT LIKE "test1%" OR name NOT LIKE "test2%"
                $dbx.orNotLike("name", "test1", "test2").match(false, true)
            `}}),_t=new b({props:{title:"$dbx.exists(exp)",tag:"code"}}),yt=new v({props:{language:"javascript",content:`
                // EXISTS (SELECT 1 FROM users WHERE status = 'active')
                $dbx.exists(dbx.exp("SELECT 1 FROM users WHERE status = 'active'"))
            `}}),Dt=new b({props:{title:"$dbx.notExists(exp)",tag:"code"}}),kt=new v({props:{language:"javascript",content:`
                // NOT EXISTS (SELECT 1 FROM users WHERE status = 'active')
                $dbx.notExists(dbx.exp("SELECT 1 FROM users WHERE status = 'active'"))
            `}}),Ct=new b({props:{title:"$dbx.between(col, from, to)",tag:"code"}}),Tt=new v({props:{language:"javascript",content:`
                // age BETWEEN 3 and 99
                $dbx.between("age", 3, 99)
            `}}),It=new b({props:{title:"$dbx.notBetween(col, from, to)",tag:"code"}}),Rt=new v({props:{language:"javascript",content:`
                // age NOT BETWEEN 3 and 99
                $dbx.notBetween("age", 3, 99)
            `}}),Lt=new b({props:{title:"orderBy(), andOrderBy()",tag:"h5"}}),Nt=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("users.*")
            .from("users")
            .orderBy("created ASC", "updated DESC")
            .andOrderBy("title ASC")
            ...
    `}}),Bt=new b({props:{title:"groupBy(), andGroupBy()",tag:"h5"}}),St=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("users.*")
            .from("users")
            .groupBy("department", "level")
            ...
    `}}),jt=new b({props:{title:"having(), andHaving(), orHaving()",tag:"h5"}}),qt=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("users.*")
            .from("users")
            .groupBy("department", "level")
            .having($dbx.exp("sum(level) > {:sum}", { sum: 10 }))
            ...
    `}}),Pt=new b({props:{title:"limit()",tag:"h5"}}),At=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("users.*")
            .from("users")
            .limit(30)
            ...
    `}}),Mt=new b({props:{title:"offset()",tag:"h5"}}),Gt=new v({props:{language:"javascript",content:`
        $app.dao().db()
            .select("users.*")
            .from("users")
            .offset(5)
            .limit(30)
            ...
    `}}),Ht=new b({props:{title:"Transaction"}}),Ft=new v({props:{language:"javascript",content:`
        $app.dao().runInTransaction((txDao) => {
            // update a record
            const record = txDao.findRecordById("articles", "RECORD_ID")
            record.set("status", "active")
            txDao.saveRecord(record)

            // run some custom raw query
            txDao.db().newQuery("DELETE FROM articles WHERE status = 'pending'").execute()
        })
    `}}),Jt=new b({props:{title:"Dao without event hooks"}}),Qt=new v({props:{language:"javascript",content:`
        const record = $app.dao().findRecordById("articles", "RECORD_ID")

        // the below WILL fire the onModelBeforeUpdate and onModelAfterUpdate hooks
        $app.dao().saveRecord(record)

        // the below WILL NOT fire the onModelBeforeUpdate and onModelAfterUpdate hooks
        const dao = $app.dao().withoutHooks() // or new Dao($app.dao().db())
        dao.saveRecord(record)
    `}}),{c(){ne=r("p"),or=a("The main interface to interact with your application database is via "),la=r("code"),rr=a("$app.dao()"),lr=a("."),zn=d(),H=r("p"),sa=r("code"),sr=a("$app.dao()"),ir=a(`
    provides read and write helpers (see `),Kt=r("a"),dr=a("Collection operations"),cr=a(`
    and `),Xt=r("a"),fr=a("Record operations"),pr=a(`) and it is responsible for triggering the
    `),ia=r("code"),$r=a("onModel*"),mr=a(" event hooks."),Vn=d(),ue=r("p"),ur=a("It also exposes "),da=r("code"),Er=a("$app.dao().db()"),hr=a(` builder that allows executing various SQL statements (including
    raw queries).`),Zn=d(),p(Ne.$$.fragment),eo=d(),p(Be.$$.fragment),to=d(),Ee=r("p"),gr=a("To execute DB queries you can start with the "),ca=r("code"),br=a('newQuery("...")'),vr=a(" statement and then call one of:"),ao=d(),oe=r("ul"),Se=r("li"),zt=r("p"),p(je.$$.fragment),xr=a(`
            - for any query statement that is not meant to retrieve data:`),wr=d(),p(qe.$$.fragment),Or=d(),Pe=r("li"),he=r("p"),p(Ae.$$.fragment),_r=a(`
            - to populate a single row into `),fa=r("code"),yr=a("DynamicModel"),Dr=a(" object:"),kr=d(),p(Me.$$.fragment),Cr=d(),Ge=r("li"),ge=r("p"),p(He.$$.fragment),Tr=a(`
            - to populate multiple rows into an array of objects (note that the array must be created with
            `),pa=r("code"),Ir=a("arrayOf"),Rr=a("):"),Lr=d(),p(We.$$.fragment),no=d(),p(Fe.$$.fragment),oo=d(),re=r("p"),Nr=a(`To prevent SQL injection attacks, you should use named parameters for any expression value that comes from
    user input. This could be done using the named `),$a=r("code"),Br=a(Wc),Sr=a(`
    placeholders in your SQL statement and then define the parameter values for the query with
    `),ma=r("code"),jr=a("bind(params)"),qr=a(". For example:"),ro=d(),p(Je.$$.fragment),lo=d(),p(Qe.$$.fragment),so=d(),k=r("p"),Pr=a(`Instead of writting plain SQLs, you can also compose SQL statements programmatically using the db query
    builder.
    `),Ar=r("br"),Mr=a(`
    Every SQL keyword has a corresponding query building method. For example, `),ua=r("code"),Gr=a("SELECT"),Hr=a(` corresponds
    to `),Ea=r("code"),Wr=a("select()"),Fr=a(", "),ha=r("code"),Jr=a("FROM"),Qr=a(" corresponds to "),ga=r("code"),Ur=a("from()"),Yr=a(`,
    `),ba=r("code"),Kr=a("WHERE"),Xr=a(" corresponds to "),va=r("code"),zr=a("where()"),Vr=a(", and so on."),io=d(),p(Ue.$$.fragment),co=d(),p(Ye.$$.fragment),fo=d(),T=r("p"),Zr=a("The "),xa=r("code"),el=a("select(...cols)"),tl=a(" method initializes a "),wa=r("code"),al=a("SELECT"),nl=a(` query builder. It accepts a list
    of the column names to be selected.
    `),ol=r("br"),rl=a(`
    To add additional columns to an existing select query, you can call `),Oa=r("code"),ll=a("andSelect()"),sl=a(`.
    `),il=r("br"),dl=a(`
    To select distinct rows, you can call `),_a=r("code"),cl=a("distinct()"),fl=a("."),po=d(),p(Ke.$$.fragment),$o=d(),p(Xe.$$.fragment),mo=d(),be=r("p"),pl=a("The "),ya=r("code"),$l=a("from(...tables)"),ml=a(` method specifies which tables to select from (plain table names are automatically
    quoted).`),uo=d(),p(ze.$$.fragment),Eo=d(),p(Ve.$$.fragment),ho=d(),le=r("p"),ul=a("The "),Da=r("code"),El=a("join(type, table, on)"),hl=a(" method specifies a "),ka=r("code"),gl=a("JOIN"),bl=a(" clause. It takes 3 parameters:"),go=d(),se=r("ul"),ie=r("li"),Ca=r("code"),vl=a("type"),xl=a(" - join type string like "),Ta=r("code"),wl=a("INNER JOIN"),Ol=a(", "),Ia=r("code"),_l=a("LEFT JOIN"),yl=a(", etc."),Dl=d(),Vt=r("li"),Ra=r("code"),kl=a("table"),Cl=a(" - the name of the table to be joined"),Tl=d(),de=r("li"),La=r("code"),Il=a("on"),Rl=a(" - optional "),Na=r("code"),Ll=a("dbx.Expression"),Nl=a(" as an "),Ba=r("code"),Bl=a("ON"),Sl=a(" clause"),bo=d(),I=r("p"),jl=a("For convenience, you can also use the shortcuts "),Sa=r("code"),ql=a("innerJoin(table, on)"),Pl=a(`,
    `),ja=r("code"),Al=a("leftJoin(table, on)"),Ml=a(`,
    `),qa=r("code"),Gl=a("rightJoin(table, on)"),Hl=a(" to specify "),Pa=r("code"),Wl=a("INNER JOIN"),Fl=a(", "),Aa=r("code"),Jl=a("LEFT JOIN"),Ql=a(` and
    `),Ma=r("code"),Ul=a("RIGHT JOIN"),Yl=a(", respectively."),vo=d(),p(Ze.$$.fragment),xo=d(),p(et.$$.fragment),wo=d(),y=r("p"),Kl=a("The "),Ga=r("code"),Xl=a("where(exp)"),zl=a(" method specifies the "),Ha=r("code"),Vl=a("WHERE"),Zl=a(` condition of the query.
    `),es=r("br"),ts=a(`
    You can also use `),Wa=r("code"),as=a("andWhere(exp)"),ns=a(" or "),Fa=r("code"),os=a("orWhere(exp)"),rs=a(` to append additional one or more
    conditions to an existing `),Ja=r("code"),ls=a("WHERE"),ss=a(` clause.
    `),is=r("br"),ds=a(`
    Each where condition accepts a single `),Qa=r("code"),cs=a("dbx.Expression"),fs=a(" (see below for full list)."),Oo=d(),p(tt.$$.fragment),_o=d(),ve=r("p"),ps=a("The following "),Ua=r("code"),$s=a("dbx.Expression"),ms=a(" methods are available:"),yo=d(),g=r("ul"),W=r("li"),p(at.$$.fragment),us=d(),Es=r("br"),hs=a(`
        Generates an expression with the specified raw query fragment. Use the `),Ya=r("code"),gs=a("optParams"),bs=a(` to bind
        parameters to the expression.
        `),p(nt.$$.fragment),vs=d(),ce=r("li"),p(ot.$$.fragment),xs=d(),ws=r("br"),Os=a(`
        Generates a hash expression from a map whose keys are DB column names which need to be filtered according
        to the corresponding values.
        `),p(rt.$$.fragment),_s=d(),F=r("li"),p(lt.$$.fragment),ys=d(),Ds=r("br"),ks=a(`
        Negates a single expression by wrapping it with `),Ka=r("code"),Cs=a("NOT()"),Ts=a(`.
        `),p(st.$$.fragment),Is=d(),J=r("li"),p(it.$$.fragment),Rs=d(),Ls=r("br"),Ns=a(`
        Creates a new expression by concatenating the specified ones with `),Xa=r("code"),Bs=a("AND"),Ss=a(`.
        `),p(dt.$$.fragment),js=d(),Q=r("li"),p(ct.$$.fragment),qs=d(),Ps=r("br"),As=a(`
        Creates a new expression by concatenating the specified ones with `),za=r("code"),Ms=a("OR"),Gs=a(`.
        `),p(ft.$$.fragment),Hs=d(),U=r("li"),p(pt.$$.fragment),Ws=d(),Fs=r("br"),Js=a(`
        Generates an `),Va=r("code"),Qs=a("IN"),Us=a(` expression for the specified column and the list of allowed values.
        `),p($t.$$.fragment),Ys=d(),Y=r("li"),p(mt.$$.fragment),Ks=d(),Xs=r("br"),zs=a(`
        Generates an `),Za=r("code"),Vs=a("NOT IN"),Zs=a(` expression for the specified column and the list of allowed values.
        `),p(ut.$$.fragment),ei=d(),w=r("li"),p(Et.$$.fragment),ti=d(),ai=r("br"),ni=a(`
        Generates a `),en=r("code"),oi=a("LIKE"),ri=a(` expression for the specified column and the possible strings that the
        column should be like. If multiple values are present, the column should be like
        `),tn=r("strong"),li=a("all"),si=a(` of them.
        `),ii=r("br"),di=a(`
        By default, each value will be surrounded by `),an=r("em"),ci=a('"%"'),fi=a(` to enable partial matching. Special
        characters like `),nn=r("em"),pi=a('"%"'),$i=a(", "),on=r("em"),mi=a('"\\"'),ui=a(", "),rn=r("em"),Ei=a('"_"'),hi=a(` will also be properly escaped. You may call
        `),ln=r("code"),gi=a("escape(...pairs)"),bi=a(" and/or "),sn=r("code"),vi=a("match(left, right)"),xi=a(` to change the default behavior.
        `),p(ht.$$.fragment),wi=d(),P=r("li"),p(gt.$$.fragment),Oi=d(),_i=r("br"),yi=a(`
        Generates a `),dn=r("code"),Di=a("NOT LIKE"),ki=a(" expression in similar manner as "),cn=r("code"),Ci=a("like()"),Ti=a(`.
        `),p(bt.$$.fragment),Ii=d(),B=r("li"),p(vt.$$.fragment),Ri=d(),Li=r("br"),Ni=a(`
        This is similar to `),fn=r("code"),Bi=a("like()"),Si=a(` except that the column must be one of the provided values, aka.
        multiple values are concatenated with `),pn=r("code"),ji=a("OR"),qi=a(" instead of "),$n=r("code"),Pi=a("AND"),Ai=a(`.
        `),p(xt.$$.fragment),Mi=d(),S=r("li"),p(wt.$$.fragment),Gi=d(),Hi=r("br"),Wi=a(`
        This is similar to `),mn=r("code"),Fi=a("notLike()"),Ji=a(` except that the column must not be one of the provided
        values, aka. multiple values are concatenated with `),un=r("code"),Qi=a("OR"),Ui=a(" instead of "),En=r("code"),Yi=a("AND"),Ki=a(`.
        `),p(Ot.$$.fragment),Xi=d(),K=r("li"),p(_t.$$.fragment),zi=d(),Vi=r("br"),Zi=a(`
        Prefix with `),hn=r("code"),ed=a("EXISTS"),td=a(` the specified expression (usually a subquery).
        `),p(yt.$$.fragment),ad=d(),X=r("li"),p(Dt.$$.fragment),nd=d(),od=r("br"),rd=a(`
        Prefix with `),gn=r("code"),ld=a("NOT EXISTS"),sd=a(` the specified expression (usually a subquery).
        `),p(kt.$$.fragment),id=d(),z=r("li"),p(Ct.$$.fragment),dd=d(),cd=r("br"),fd=a(`
        Generates a `),bn=r("code"),pd=a("BETWEEN"),$d=a(` expression with the specified range.
        `),p(Tt.$$.fragment),md=d(),V=r("li"),p(It.$$.fragment),ud=d(),Ed=r("br"),hd=a(`
        Generates a `),vn=r("code"),gd=a("NOT BETWEEN"),bd=a(` expression with the specified range.
        `),p(Rt.$$.fragment),Do=d(),p(Lt.$$.fragment),ko=d(),D=r("p"),vd=a("The "),xn=r("code"),xd=a("orderBy(...cols)"),wd=a(" specifies the "),wn=r("code"),Od=a("ORDER BY"),_d=a(` clause of the query.
    `),yd=r("br"),Dd=a(`
    A column name can contain `),On=r("em"),kd=a('"ASC"'),Cd=a(" or "),_n=r("em"),Td=a('"DESC"'),Id=a(` to indicate its ordering direction.
    `),Rd=r("br"),Ld=a(`
    You can also use `),yn=r("code"),Nd=a("andOrderBy(...cols)"),Bd=a(` to append additional columns to an existing
    `),Dn=r("code"),Sd=a("ORDER BY"),jd=a(" clause."),Co=d(),p(Nt.$$.fragment),To=d(),p(Bt.$$.fragment),Io=d(),j=r("p"),qd=a("The "),kn=r("code"),Pd=a("groupBy(...cols)"),Ad=a(" specifies the "),Cn=r("code"),Md=a("GROUP BY"),Gd=a(` clause of the query.
    `),Hd=r("br"),Wd=a(`
    You can also use `),Tn=r("code"),Fd=a("andGroupBy(...cols)"),Jd=a(` to append additional columns to an existing
    `),In=r("code"),Qd=a("GROUP BY"),Ud=a(" clause."),Ro=d(),p(St.$$.fragment),Lo=d(),p(jt.$$.fragment),No=d(),O=r("p"),Yd=a("The "),Rn=r("code"),Kd=a("having(exp)"),Xd=a(" specifies the "),Ln=r("code"),zd=a("HAVING"),Vd=a(` clause of the query.
    `),Zd=r("br"),ec=a(`
    Similarly to
    `),Nn=r("code"),tc=a("where(exp)"),ac=a(", it accept a single "),Bn=r("code"),nc=a("dbx.Expression"),oc=a(` (see all available expressions
    listed above).
    `),rc=r("br"),lc=a(`
    You can also use `),Sn=r("code"),sc=a("andHaving(exp)"),ic=a(" or "),jn=r("code"),dc=a("orHaving(exp)"),cc=a(` to append additional one or
    more conditions to an existing `),qn=r("code"),fc=a("HAVING"),pc=a(" clause."),Bo=d(),p(qt.$$.fragment),So=d(),p(Pt.$$.fragment),jo=d(),fe=r("p"),$c=a("The "),Pn=r("code"),mc=a("limit(number)"),uc=a(" method specifies the "),An=r("code"),Ec=a("LIMIT"),hc=a(" clause of the query."),qo=d(),p(At.$$.fragment),Po=d(),p(Mt.$$.fragment),Ao=d(),Z=r("p"),gc=a("The "),Mn=r("code"),bc=a("offset(number)"),vc=a(" method specifies the "),Gn=r("code"),xc=a("OFFSET"),wc=a(` clause of the query. Usually used
    together with `),Hn=r("code"),Oc=a("limit(number)"),_c=a("."),Mo=d(),p(Gt.$$.fragment),Go=d(),p(Ht.$$.fragment),Ho=d(),Wt=r("p"),yc=a("To execute multiple queries in a transaction you can use "),Wn=r("code"),Dc=a("$app.dao().runInTransaction()"),Wo=d(),xe=r("p"),kc=a("You can nest "),Fn=r("code"),Cc=a("Dao.runInTransaction()"),Tc=a(" as many times as you want."),Fo=d(),Zt=r("p"),Jn=r("strong"),Ic=a("The transaction will be committed only if there are no errors."),Jo=d(),p(Ft.$$.fragment),Qo=d(),p(Jt.$$.fragment),Uo=d(),A=r("p"),Rc=a("By default all Dao write operations (create, update, delete) trigger the "),Qn=r("code"),Lc=a("onModel*"),Nc=a(` event
    hooks.
    `),Bc=r("br"),Sc=a(`
    If you don't want this behavior, you can create a new Dao without hooks from an existing one by calling
    `),Un=r("code"),jc=a("Dao.withoutHooks()"),qc=a(`
    or instantiate a new one with `),Yn=r("code"),Pc=a("new Dao(db, [nonconcurrentDB])"),Ac=a(":"),Yo=d(),p(Qt.$$.fragment),this.h()},l(e){ne=l(e,"P",{});var i=s(ne);or=n(i,"The main interface to interact with your application database is via "),la=l(i,"CODE",{});var Fc=s(la);rr=n(Fc,"$app.dao()"),Fc.forEach(o),lr=n(i,"."),i.forEach(o),zn=c(e),H=l(e,"P",{});var me=s(H);sa=l(me,"CODE",{});var Jc=s(sa);sr=n(Jc,"$app.dao()"),Jc.forEach(o),ir=n(me,`
    provides read and write helpers (see `),Kt=l(me,"A",{href:!0});var Qc=s(Kt);dr=n(Qc,"Collection operations"),Qc.forEach(o),cr=n(me,`
    and `),Xt=l(me,"A",{href:!0});var Uc=s(Xt);fr=n(Uc,"Record operations"),Uc.forEach(o),pr=n(me,`) and it is responsible for triggering the
    `),ia=l(me,"CODE",{});var Yc=s(ia);$r=n(Yc,"onModel*"),Yc.forEach(o),mr=n(me," event hooks."),me.forEach(o),Vn=c(e),ue=l(e,"P",{});var Xo=s(ue);ur=n(Xo,"It also exposes "),da=l(Xo,"CODE",{});var Kc=s(da);Er=n(Kc,"$app.dao().db()"),Kc.forEach(o),hr=n(Xo,` builder that allows executing various SQL statements (including
    raw queries).`),Xo.forEach(o),Zn=c(e),$(Ne.$$.fragment,e),eo=c(e),$(Be.$$.fragment,e),to=c(e),Ee=l(e,"P",{});var zo=s(Ee);gr=n(zo,"To execute DB queries you can start with the "),ca=l(zo,"CODE",{});var Xc=s(ca);br=n(Xc,'newQuery("...")'),Xc.forEach(o),vr=n(zo," statement and then call one of:"),zo.forEach(o),ao=c(e),oe=l(e,"UL",{});var ea=s(oe);Se=l(ea,"LI",{});var Vo=s(Se);zt=l(Vo,"P",{});var Mc=s(zt);$(je.$$.fragment,Mc),xr=n(Mc,`
            - for any query statement that is not meant to retrieve data:`),Mc.forEach(o),wr=c(Vo),$(qe.$$.fragment,Vo),Vo.forEach(o),Or=c(ea),Pe=l(ea,"LI",{});var Zo=s(Pe);he=l(Zo,"P",{});var Kn=s(he);$(Ae.$$.fragment,Kn),_r=n(Kn,`
            - to populate a single row into `),fa=l(Kn,"CODE",{});var zc=s(fa);yr=n(zc,"DynamicModel"),zc.forEach(o),Dr=n(Kn," object:"),Kn.forEach(o),kr=c(Zo),$(Me.$$.fragment,Zo),Zo.forEach(o),Cr=c(ea),Ge=l(ea,"LI",{});var er=s(Ge);ge=l(er,"P",{});var Xn=s(ge);$(He.$$.fragment,Xn),Tr=n(Xn,`
            - to populate multiple rows into an array of objects (note that the array must be created with
            `),pa=l(Xn,"CODE",{});var Vc=s(pa);Ir=n(Vc,"arrayOf"),Vc.forEach(o),Rr=n(Xn,"):"),Xn.forEach(o),Lr=c(er),$(We.$$.fragment,er),er.forEach(o),ea.forEach(o),no=c(e),$(Fe.$$.fragment,e),oo=c(e),re=l(e,"P",{});var ta=s(re);Nr=n(ta,`To prevent SQL injection attacks, you should use named parameters for any expression value that comes from
    user input. This could be done using the named `),$a=l(ta,"CODE",{});var Zc=s($a);Br=n(Zc,Wc),Zc.forEach(o),Sr=n(ta,`
    placeholders in your SQL statement and then define the parameter values for the query with
    `),ma=l(ta,"CODE",{});var ef=s(ma);jr=n(ef,"bind(params)"),ef.forEach(o),qr=n(ta,". For example:"),ta.forEach(o),ro=c(e),$(Je.$$.fragment,e),lo=c(e),$(Qe.$$.fragment,e),so=c(e),k=l(e,"P",{});var q=s(k);Pr=n(q,`Instead of writting plain SQLs, you can also compose SQL statements programmatically using the db query
    builder.
    `),Ar=l(q,"BR",{}),Mr=n(q,`
    Every SQL keyword has a corresponding query building method. For example, `),ua=l(q,"CODE",{});var tf=s(ua);Gr=n(tf,"SELECT"),tf.forEach(o),Hr=n(q,` corresponds
    to `),Ea=l(q,"CODE",{});var af=s(Ea);Wr=n(af,"select()"),af.forEach(o),Fr=n(q,", "),ha=l(q,"CODE",{});var nf=s(ha);Jr=n(nf,"FROM"),nf.forEach(o),Qr=n(q," corresponds to "),ga=l(q,"CODE",{});var of=s(ga);Ur=n(of,"from()"),of.forEach(o),Yr=n(q,`,
    `),ba=l(q,"CODE",{});var rf=s(ba);Kr=n(rf,"WHERE"),rf.forEach(o),Xr=n(q," corresponds to "),va=l(q,"CODE",{});var lf=s(va);zr=n(lf,"where()"),lf.forEach(o),Vr=n(q,", and so on."),q.forEach(o),io=c(e),$(Ue.$$.fragment,e),co=c(e),$(Ye.$$.fragment,e),fo=c(e),T=l(e,"P",{});var M=s(T);Zr=n(M,"The "),xa=l(M,"CODE",{});var sf=s(xa);el=n(sf,"select(...cols)"),sf.forEach(o),tl=n(M," method initializes a "),wa=l(M,"CODE",{});var df=s(wa);al=n(df,"SELECT"),df.forEach(o),nl=n(M,` query builder. It accepts a list
    of the column names to be selected.
    `),ol=l(M,"BR",{}),rl=n(M,`
    To add additional columns to an existing select query, you can call `),Oa=l(M,"CODE",{});var cf=s(Oa);ll=n(cf,"andSelect()"),cf.forEach(o),sl=n(M,`.
    `),il=l(M,"BR",{}),dl=n(M,`
    To select distinct rows, you can call `),_a=l(M,"CODE",{});var ff=s(_a);cl=n(ff,"distinct()"),ff.forEach(o),fl=n(M,"."),M.forEach(o),po=c(e),$(Ke.$$.fragment,e),$o=c(e),$(Xe.$$.fragment,e),mo=c(e),be=l(e,"P",{});var tr=s(be);pl=n(tr,"The "),ya=l(tr,"CODE",{});var pf=s(ya);$l=n(pf,"from(...tables)"),pf.forEach(o),ml=n(tr,` method specifies which tables to select from (plain table names are automatically
    quoted).`),tr.forEach(o),uo=c(e),$(ze.$$.fragment,e),Eo=c(e),$(Ve.$$.fragment,e),ho=c(e),le=l(e,"P",{});var aa=s(le);ul=n(aa,"The "),Da=l(aa,"CODE",{});var $f=s(Da);El=n($f,"join(type, table, on)"),$f.forEach(o),hl=n(aa," method specifies a "),ka=l(aa,"CODE",{});var mf=s(ka);gl=n(mf,"JOIN"),mf.forEach(o),bl=n(aa," clause. It takes 3 parameters:"),aa.forEach(o),go=c(e),se=l(e,"UL",{});var na=s(se);ie=l(na,"LI",{});var Ut=s(ie);Ca=l(Ut,"CODE",{});var uf=s(Ca);vl=n(uf,"type"),uf.forEach(o),xl=n(Ut," - join type string like "),Ta=l(Ut,"CODE",{});var Ef=s(Ta);wl=n(Ef,"INNER JOIN"),Ef.forEach(o),Ol=n(Ut,", "),Ia=l(Ut,"CODE",{});var hf=s(Ia);_l=n(hf,"LEFT JOIN"),hf.forEach(o),yl=n(Ut,", etc."),Ut.forEach(o),Dl=c(na),Vt=l(na,"LI",{});var Gc=s(Vt);Ra=l(Gc,"CODE",{});var gf=s(Ra);kl=n(gf,"table"),gf.forEach(o),Cl=n(Gc," - the name of the table to be joined"),Gc.forEach(o),Tl=c(na),de=l(na,"LI",{});var Yt=s(de);La=l(Yt,"CODE",{});var bf=s(La);Il=n(bf,"on"),bf.forEach(o),Rl=n(Yt," - optional "),Na=l(Yt,"CODE",{});var vf=s(Na);Ll=n(vf,"dbx.Expression"),vf.forEach(o),Nl=n(Yt," as an "),Ba=l(Yt,"CODE",{});var xf=s(Ba);Bl=n(xf,"ON"),xf.forEach(o),Sl=n(Yt," clause"),Yt.forEach(o),na.forEach(o),bo=c(e),I=l(e,"P",{});var G=s(I);jl=n(G,"For convenience, you can also use the shortcuts "),Sa=l(G,"CODE",{});var wf=s(Sa);ql=n(wf,"innerJoin(table, on)"),wf.forEach(o),Pl=n(G,`,
    `),ja=l(G,"CODE",{});var Of=s(ja);Al=n(Of,"leftJoin(table, on)"),Of.forEach(o),Ml=n(G,`,
    `),qa=l(G,"CODE",{});var _f=s(qa);Gl=n(_f,"rightJoin(table, on)"),_f.forEach(o),Hl=n(G," to specify "),Pa=l(G,"CODE",{});var yf=s(Pa);Wl=n(yf,"INNER JOIN"),yf.forEach(o),Fl=n(G,", "),Aa=l(G,"CODE",{});var Df=s(Aa);Jl=n(Df,"LEFT JOIN"),Df.forEach(o),Ql=n(G,` and
    `),Ma=l(G,"CODE",{});var kf=s(Ma);Ul=n(kf,"RIGHT JOIN"),kf.forEach(o),Yl=n(G,", respectively."),G.forEach(o),vo=c(e),$(Ze.$$.fragment,e),xo=c(e),$(et.$$.fragment,e),wo=c(e),y=l(e,"P",{});var R=s(y);Kl=n(R,"The "),Ga=l(R,"CODE",{});var Cf=s(Ga);Xl=n(Cf,"where(exp)"),Cf.forEach(o),zl=n(R," method specifies the "),Ha=l(R,"CODE",{});var Tf=s(Ha);Vl=n(Tf,"WHERE"),Tf.forEach(o),Zl=n(R,` condition of the query.
    `),es=l(R,"BR",{}),ts=n(R,`
    You can also use `),Wa=l(R,"CODE",{});var If=s(Wa);as=n(If,"andWhere(exp)"),If.forEach(o),ns=n(R," or "),Fa=l(R,"CODE",{});var Rf=s(Fa);os=n(Rf,"orWhere(exp)"),Rf.forEach(o),rs=n(R,` to append additional one or more
    conditions to an existing `),Ja=l(R,"CODE",{});var Lf=s(Ja);ls=n(Lf,"WHERE"),Lf.forEach(o),ss=n(R,` clause.
    `),is=l(R,"BR",{}),ds=n(R,`
    Each where condition accepts a single `),Qa=l(R,"CODE",{});var Nf=s(Qa);cs=n(Nf,"dbx.Expression"),Nf.forEach(o),fs=n(R," (see below for full list)."),R.forEach(o),Oo=c(e),$(tt.$$.fragment,e),_o=c(e),ve=l(e,"P",{});var ar=s(ve);ps=n(ar,"The following "),Ua=l(ar,"CODE",{});var Bf=s(Ua);$s=n(Bf,"dbx.Expression"),Bf.forEach(o),ms=n(ar," methods are available:"),ar.forEach(o),yo=c(e),g=l(e,"UL",{});var x=s(g);W=l(x,"LI",{class:!0});var we=s(W);$(at.$$.fragment,we),us=c(we),Es=l(we,"BR",{}),hs=n(we,`
        Generates an expression with the specified raw query fragment. Use the `),Ya=l(we,"CODE",{});var Sf=s(Ya);gs=n(Sf,"optParams"),Sf.forEach(o),bs=n(we,` to bind
        parameters to the expression.
        `),$(nt.$$.fragment,we),we.forEach(o),vs=c(x),ce=l(x,"LI",{class:!0});var oa=s(ce);$(ot.$$.fragment,oa),xs=c(oa),ws=l(oa,"BR",{}),Os=n(oa,`
        Generates a hash expression from a map whose keys are DB column names which need to be filtered according
        to the corresponding values.
        `),$(rt.$$.fragment,oa),oa.forEach(o),_s=c(x),F=l(x,"LI",{class:!0});var Oe=s(F);$(lt.$$.fragment,Oe),ys=c(Oe),Ds=l(Oe,"BR",{}),ks=n(Oe,`
        Negates a single expression by wrapping it with `),Ka=l(Oe,"CODE",{});var jf=s(Ka);Cs=n(jf,"NOT()"),jf.forEach(o),Ts=n(Oe,`.
        `),$(st.$$.fragment,Oe),Oe.forEach(o),Is=c(x),J=l(x,"LI",{class:!0});var _e=s(J);$(it.$$.fragment,_e),Rs=c(_e),Ls=l(_e,"BR",{}),Ns=n(_e,`
        Creates a new expression by concatenating the specified ones with `),Xa=l(_e,"CODE",{});var qf=s(Xa);Bs=n(qf,"AND"),qf.forEach(o),Ss=n(_e,`.
        `),$(dt.$$.fragment,_e),_e.forEach(o),js=c(x),Q=l(x,"LI",{class:!0});var ye=s(Q);$(ct.$$.fragment,ye),qs=c(ye),Ps=l(ye,"BR",{}),As=n(ye,`
        Creates a new expression by concatenating the specified ones with `),za=l(ye,"CODE",{});var Pf=s(za);Ms=n(Pf,"OR"),Pf.forEach(o),Gs=n(ye,`.
        `),$(ft.$$.fragment,ye),ye.forEach(o),Hs=c(x),U=l(x,"LI",{class:!0});var De=s(U);$(pt.$$.fragment,De),Ws=c(De),Fs=l(De,"BR",{}),Js=n(De,`
        Generates an `),Va=l(De,"CODE",{});var Af=s(Va);Qs=n(Af,"IN"),Af.forEach(o),Us=n(De,` expression for the specified column and the list of allowed values.
        `),$($t.$$.fragment,De),De.forEach(o),Ys=c(x),Y=l(x,"LI",{class:!0});var ke=s(Y);$(mt.$$.fragment,ke),Ks=c(ke),Xs=l(ke,"BR",{}),zs=n(ke,`
        Generates an `),Za=l(ke,"CODE",{});var Mf=s(Za);Vs=n(Mf,"NOT IN"),Mf.forEach(o),Zs=n(ke,` expression for the specified column and the list of allowed values.
        `),$(ut.$$.fragment,ke),ke.forEach(o),ei=c(x),w=l(x,"LI",{class:!0});var _=s(w);$(Et.$$.fragment,_),ti=c(_),ai=l(_,"BR",{}),ni=n(_,`
        Generates a `),en=l(_,"CODE",{});var Gf=s(en);oi=n(Gf,"LIKE"),Gf.forEach(o),ri=n(_,` expression for the specified column and the possible strings that the
        column should be like. If multiple values are present, the column should be like
        `),tn=l(_,"STRONG",{});var Hf=s(tn);li=n(Hf,"all"),Hf.forEach(o),si=n(_,` of them.
        `),ii=l(_,"BR",{}),di=n(_,`
        By default, each value will be surrounded by `),an=l(_,"EM",{});var Wf=s(an);ci=n(Wf,'"%"'),Wf.forEach(o),fi=n(_,` to enable partial matching. Special
        characters like `),nn=l(_,"EM",{});var Ff=s(nn);pi=n(Ff,'"%"'),Ff.forEach(o),$i=n(_,", "),on=l(_,"EM",{});var Jf=s(on);mi=n(Jf,'"\\"'),Jf.forEach(o),ui=n(_,", "),rn=l(_,"EM",{});var Qf=s(rn);Ei=n(Qf,'"_"'),Qf.forEach(o),hi=n(_,` will also be properly escaped. You may call
        `),ln=l(_,"CODE",{});var Uf=s(ln);gi=n(Uf,"escape(...pairs)"),Uf.forEach(o),bi=n(_," and/or "),sn=l(_,"CODE",{});var Yf=s(sn);vi=n(Yf,"match(left, right)"),Yf.forEach(o),xi=n(_,` to change the default behavior.
        `),$(ht.$$.fragment,_),_.forEach(o),wi=c(x),P=l(x,"LI",{class:!0});var pe=s(P);$(gt.$$.fragment,pe),Oi=c(pe),_i=l(pe,"BR",{}),yi=n(pe,`
        Generates a `),dn=l(pe,"CODE",{});var Kf=s(dn);Di=n(Kf,"NOT LIKE"),Kf.forEach(o),ki=n(pe," expression in similar manner as "),cn=l(pe,"CODE",{});var Xf=s(cn);Ci=n(Xf,"like()"),Xf.forEach(o),Ti=n(pe,`.
        `),$(bt.$$.fragment,pe),pe.forEach(o),Ii=c(x),B=l(x,"LI",{class:!0});var ee=s(B);$(vt.$$.fragment,ee),Ri=c(ee),Li=l(ee,"BR",{}),Ni=n(ee,`
        This is similar to `),fn=l(ee,"CODE",{});var zf=s(fn);Bi=n(zf,"like()"),zf.forEach(o),Si=n(ee,` except that the column must be one of the provided values, aka.
        multiple values are concatenated with `),pn=l(ee,"CODE",{});var Vf=s(pn);ji=n(Vf,"OR"),Vf.forEach(o),qi=n(ee," instead of "),$n=l(ee,"CODE",{});var Zf=s($n);Pi=n(Zf,"AND"),Zf.forEach(o),Ai=n(ee,`.
        `),$(xt.$$.fragment,ee),ee.forEach(o),Mi=c(x),S=l(x,"LI",{class:!0});var te=s(S);$(wt.$$.fragment,te),Gi=c(te),Hi=l(te,"BR",{}),Wi=n(te,`
        This is similar to `),mn=l(te,"CODE",{});var ep=s(mn);Fi=n(ep,"notLike()"),ep.forEach(o),Ji=n(te,` except that the column must not be one of the provided
        values, aka. multiple values are concatenated with `),un=l(te,"CODE",{});var tp=s(un);Qi=n(tp,"OR"),tp.forEach(o),Ui=n(te," instead of "),En=l(te,"CODE",{});var ap=s(En);Yi=n(ap,"AND"),ap.forEach(o),Ki=n(te,`.
        `),$(Ot.$$.fragment,te),te.forEach(o),Xi=c(x),K=l(x,"LI",{class:!0});var Ce=s(K);$(_t.$$.fragment,Ce),zi=c(Ce),Vi=l(Ce,"BR",{}),Zi=n(Ce,`
        Prefix with `),hn=l(Ce,"CODE",{});var np=s(hn);ed=n(np,"EXISTS"),np.forEach(o),td=n(Ce,` the specified expression (usually a subquery).
        `),$(yt.$$.fragment,Ce),Ce.forEach(o),ad=c(x),X=l(x,"LI",{class:!0});var Te=s(X);$(Dt.$$.fragment,Te),nd=c(Te),od=l(Te,"BR",{}),rd=n(Te,`
        Prefix with `),gn=l(Te,"CODE",{});var op=s(gn);ld=n(op,"NOT EXISTS"),op.forEach(o),sd=n(Te,` the specified expression (usually a subquery).
        `),$(kt.$$.fragment,Te),Te.forEach(o),id=c(x),z=l(x,"LI",{class:!0});var Ie=s(z);$(Ct.$$.fragment,Ie),dd=c(Ie),cd=l(Ie,"BR",{}),fd=n(Ie,`
        Generates a `),bn=l(Ie,"CODE",{});var rp=s(bn);pd=n(rp,"BETWEEN"),rp.forEach(o),$d=n(Ie,` expression with the specified range.
        `),$(Tt.$$.fragment,Ie),Ie.forEach(o),md=c(x),V=l(x,"LI",{class:!0});var Re=s(V);$(It.$$.fragment,Re),ud=c(Re),Ed=l(Re,"BR",{}),hd=n(Re,`
        Generates a `),vn=l(Re,"CODE",{});var lp=s(vn);gd=n(lp,"NOT BETWEEN"),lp.forEach(o),bd=n(Re,` expression with the specified range.
        `),$(Rt.$$.fragment,Re),Re.forEach(o),x.forEach(o),Do=c(e),$(Lt.$$.fragment,e),ko=c(e),D=l(e,"P",{});var L=s(D);vd=n(L,"The "),xn=l(L,"CODE",{});var sp=s(xn);xd=n(sp,"orderBy(...cols)"),sp.forEach(o),wd=n(L," specifies the "),wn=l(L,"CODE",{});var ip=s(wn);Od=n(ip,"ORDER BY"),ip.forEach(o),_d=n(L,` clause of the query.
    `),yd=l(L,"BR",{}),Dd=n(L,`
    A column name can contain `),On=l(L,"EM",{});var dp=s(On);kd=n(dp,'"ASC"'),dp.forEach(o),Cd=n(L," or "),_n=l(L,"EM",{});var cp=s(_n);Td=n(cp,'"DESC"'),cp.forEach(o),Id=n(L,` to indicate its ordering direction.
    `),Rd=l(L,"BR",{}),Ld=n(L,`
    You can also use `),yn=l(L,"CODE",{});var fp=s(yn);Nd=n(fp,"andOrderBy(...cols)"),fp.forEach(o),Bd=n(L,` to append additional columns to an existing
    `),Dn=l(L,"CODE",{});var pp=s(Dn);Sd=n(pp,"ORDER BY"),pp.forEach(o),jd=n(L," clause."),L.forEach(o),Co=c(e),$(Nt.$$.fragment,e),To=c(e),$(Bt.$$.fragment,e),Io=c(e),j=l(e,"P",{});var ae=s(j);qd=n(ae,"The "),kn=l(ae,"CODE",{});var $p=s(kn);Pd=n($p,"groupBy(...cols)"),$p.forEach(o),Ad=n(ae," specifies the "),Cn=l(ae,"CODE",{});var mp=s(Cn);Md=n(mp,"GROUP BY"),mp.forEach(o),Gd=n(ae,` clause of the query.
    `),Hd=l(ae,"BR",{}),Wd=n(ae,`
    You can also use `),Tn=l(ae,"CODE",{});var up=s(Tn);Fd=n(up,"andGroupBy(...cols)"),up.forEach(o),Jd=n(ae,` to append additional columns to an existing
    `),In=l(ae,"CODE",{});var Ep=s(In);Qd=n(Ep,"GROUP BY"),Ep.forEach(o),Ud=n(ae," clause."),ae.forEach(o),Ro=c(e),$(St.$$.fragment,e),Lo=c(e),$(jt.$$.fragment,e),No=c(e),O=l(e,"P",{});var C=s(O);Yd=n(C,"The "),Rn=l(C,"CODE",{});var hp=s(Rn);Kd=n(hp,"having(exp)"),hp.forEach(o),Xd=n(C," specifies the "),Ln=l(C,"CODE",{});var gp=s(Ln);zd=n(gp,"HAVING"),gp.forEach(o),Vd=n(C,` clause of the query.
    `),Zd=l(C,"BR",{}),ec=n(C,`
    Similarly to
    `),Nn=l(C,"CODE",{});var bp=s(Nn);tc=n(bp,"where(exp)"),bp.forEach(o),ac=n(C,", it accept a single "),Bn=l(C,"CODE",{});var vp=s(Bn);nc=n(vp,"dbx.Expression"),vp.forEach(o),oc=n(C,` (see all available expressions
    listed above).
    `),rc=l(C,"BR",{}),lc=n(C,`
    You can also use `),Sn=l(C,"CODE",{});var xp=s(Sn);sc=n(xp,"andHaving(exp)"),xp.forEach(o),ic=n(C," or "),jn=l(C,"CODE",{});var wp=s(jn);dc=n(wp,"orHaving(exp)"),wp.forEach(o),cc=n(C,` to append additional one or
    more conditions to an existing `),qn=l(C,"CODE",{});var Op=s(qn);fc=n(Op,"HAVING"),Op.forEach(o),pc=n(C," clause."),C.forEach(o),Bo=c(e),$(qt.$$.fragment,e),So=c(e),$(Pt.$$.fragment,e),jo=c(e),fe=l(e,"P",{});var ra=s(fe);$c=n(ra,"The "),Pn=l(ra,"CODE",{});var _p=s(Pn);mc=n(_p,"limit(number)"),_p.forEach(o),uc=n(ra," method specifies the "),An=l(ra,"CODE",{});var yp=s(An);Ec=n(yp,"LIMIT"),yp.forEach(o),hc=n(ra," clause of the query."),ra.forEach(o),qo=c(e),$(At.$$.fragment,e),Po=c(e),$(Mt.$$.fragment,e),Ao=c(e),Z=l(e,"P",{});var Le=s(Z);gc=n(Le,"The "),Mn=l(Le,"CODE",{});var Dp=s(Mn);bc=n(Dp,"offset(number)"),Dp.forEach(o),vc=n(Le," method specifies the "),Gn=l(Le,"CODE",{});var kp=s(Gn);xc=n(kp,"OFFSET"),kp.forEach(o),wc=n(Le,` clause of the query. Usually used
    together with `),Hn=l(Le,"CODE",{});var Cp=s(Hn);Oc=n(Cp,"limit(number)"),Cp.forEach(o),_c=n(Le,"."),Le.forEach(o),Mo=c(e),$(Gt.$$.fragment,e),Go=c(e),$(Ht.$$.fragment,e),Ho=c(e),Wt=l(e,"P",{});var Hc=s(Wt);yc=n(Hc,"To execute multiple queries in a transaction you can use "),Wn=l(Hc,"CODE",{});var Tp=s(Wn);Dc=n(Tp,"$app.dao().runInTransaction()"),Tp.forEach(o),Hc.forEach(o),Wo=c(e),xe=l(e,"P",{});var nr=s(xe);kc=n(nr,"You can nest "),Fn=l(nr,"CODE",{});var Ip=s(Fn);Cc=n(Ip,"Dao.runInTransaction()"),Ip.forEach(o),Tc=n(nr," as many times as you want."),nr.forEach(o),Fo=c(e),Zt=l(e,"P",{});var Rp=s(Zt);Jn=l(Rp,"STRONG",{});var Lp=s(Jn);Ic=n(Lp,"The transaction will be committed only if there are no errors."),Lp.forEach(o),Rp.forEach(o),Jo=c(e),$(Ft.$$.fragment,e),Qo=c(e),$(Jt.$$.fragment,e),Uo=c(e),A=l(e,"P",{});var $e=s(A);Rc=n($e,"By default all Dao write operations (create, update, delete) trigger the "),Qn=l($e,"CODE",{});var Np=s(Qn);Lc=n(Np,"onModel*"),Np.forEach(o),Nc=n($e,` event
    hooks.
    `),Bc=l($e,"BR",{}),Sc=n($e,`
    If you don't want this behavior, you can create a new Dao without hooks from an existing one by calling
    `),Un=l($e,"CODE",{});var Bp=s(Un);jc=n(Bp,"Dao.withoutHooks()"),Bp.forEach(o),qc=n($e,`
    or instantiate a new one with `),Yn=l($e,"CODE",{});var Sp=s(Yn);Pc=n(Sp,"new Dao(db, [nonconcurrentDB])"),Sp.forEach(o),Ac=n($e,":"),$e.forEach(o),Yo=c(e),$(Qt.$$.fragment,e),this.h()},h(){N(Kt,"href","/docs/js-collections"),N(Xt,"href","/docs/js-records"),N(W,"class","m-b-xs"),N(ce,"class","m-b-xs"),N(F,"class","m-b-xs"),N(J,"class","m-b-xs"),N(Q,"class","m-b-xs"),N(U,"class","m-b-xs"),N(Y,"class","m-b-xs"),N(w,"class","m-b-xs"),N(P,"class","m-b-xs"),N(B,"class","m-b-xs"),N(S,"class","m-b-xs"),N(K,"class","m-b-xs"),N(X,"class","m-b-xs"),N(z,"class","m-b-xs"),N(V,"class","m-b-xs")},m(e,i){f(e,ne,i),t(ne,or),t(ne,la),t(la,rr),t(ne,lr),f(e,zn,i),f(e,H,i),t(H,sa),t(sa,sr),t(H,ir),t(H,Kt),t(Kt,dr),t(H,cr),t(H,Xt),t(Xt,fr),t(H,pr),t(H,ia),t(ia,$r),t(H,mr),f(e,Vn,i),f(e,ue,i),t(ue,ur),t(ue,da),t(da,Er),t(ue,hr),f(e,Zn,i),m(Ne,e,i),f(e,eo,i),m(Be,e,i),f(e,to,i),f(e,Ee,i),t(Ee,gr),t(Ee,ca),t(ca,br),t(Ee,vr),f(e,ao,i),f(e,oe,i),t(oe,Se),t(Se,zt),m(je,zt,null),t(zt,xr),t(Se,wr),m(qe,Se,null),t(oe,Or),t(oe,Pe),t(Pe,he),m(Ae,he,null),t(he,_r),t(he,fa),t(fa,yr),t(he,Dr),t(Pe,kr),m(Me,Pe,null),t(oe,Cr),t(oe,Ge),t(Ge,ge),m(He,ge,null),t(ge,Tr),t(ge,pa),t(pa,Ir),t(ge,Rr),t(Ge,Lr),m(We,Ge,null),f(e,no,i),m(Fe,e,i),f(e,oo,i),f(e,re,i),t(re,Nr),t(re,$a),t($a,Br),t(re,Sr),t(re,ma),t(ma,jr),t(re,qr),f(e,ro,i),m(Je,e,i),f(e,lo,i),m(Qe,e,i),f(e,so,i),f(e,k,i),t(k,Pr),t(k,Ar),t(k,Mr),t(k,ua),t(ua,Gr),t(k,Hr),t(k,Ea),t(Ea,Wr),t(k,Fr),t(k,ha),t(ha,Jr),t(k,Qr),t(k,ga),t(ga,Ur),t(k,Yr),t(k,ba),t(ba,Kr),t(k,Xr),t(k,va),t(va,zr),t(k,Vr),f(e,io,i),m(Ue,e,i),f(e,co,i),m(Ye,e,i),f(e,fo,i),f(e,T,i),t(T,Zr),t(T,xa),t(xa,el),t(T,tl),t(T,wa),t(wa,al),t(T,nl),t(T,ol),t(T,rl),t(T,Oa),t(Oa,ll),t(T,sl),t(T,il),t(T,dl),t(T,_a),t(_a,cl),t(T,fl),f(e,po,i),m(Ke,e,i),f(e,$o,i),m(Xe,e,i),f(e,mo,i),f(e,be,i),t(be,pl),t(be,ya),t(ya,$l),t(be,ml),f(e,uo,i),m(ze,e,i),f(e,Eo,i),m(Ve,e,i),f(e,ho,i),f(e,le,i),t(le,ul),t(le,Da),t(Da,El),t(le,hl),t(le,ka),t(ka,gl),t(le,bl),f(e,go,i),f(e,se,i),t(se,ie),t(ie,Ca),t(Ca,vl),t(ie,xl),t(ie,Ta),t(Ta,wl),t(ie,Ol),t(ie,Ia),t(Ia,_l),t(ie,yl),t(se,Dl),t(se,Vt),t(Vt,Ra),t(Ra,kl),t(Vt,Cl),t(se,Tl),t(se,de),t(de,La),t(La,Il),t(de,Rl),t(de,Na),t(Na,Ll),t(de,Nl),t(de,Ba),t(Ba,Bl),t(de,Sl),f(e,bo,i),f(e,I,i),t(I,jl),t(I,Sa),t(Sa,ql),t(I,Pl),t(I,ja),t(ja,Al),t(I,Ml),t(I,qa),t(qa,Gl),t(I,Hl),t(I,Pa),t(Pa,Wl),t(I,Fl),t(I,Aa),t(Aa,Jl),t(I,Ql),t(I,Ma),t(Ma,Ul),t(I,Yl),f(e,vo,i),m(Ze,e,i),f(e,xo,i),m(et,e,i),f(e,wo,i),f(e,y,i),t(y,Kl),t(y,Ga),t(Ga,Xl),t(y,zl),t(y,Ha),t(Ha,Vl),t(y,Zl),t(y,es),t(y,ts),t(y,Wa),t(Wa,as),t(y,ns),t(y,Fa),t(Fa,os),t(y,rs),t(y,Ja),t(Ja,ls),t(y,ss),t(y,is),t(y,ds),t(y,Qa),t(Qa,cs),t(y,fs),f(e,Oo,i),m(tt,e,i),f(e,_o,i),f(e,ve,i),t(ve,ps),t(ve,Ua),t(Ua,$s),t(ve,ms),f(e,yo,i),f(e,g,i),t(g,W),m(at,W,null),t(W,us),t(W,Es),t(W,hs),t(W,Ya),t(Ya,gs),t(W,bs),m(nt,W,null),t(g,vs),t(g,ce),m(ot,ce,null),t(ce,xs),t(ce,ws),t(ce,Os),m(rt,ce,null),t(g,_s),t(g,F),m(lt,F,null),t(F,ys),t(F,Ds),t(F,ks),t(F,Ka),t(Ka,Cs),t(F,Ts),m(st,F,null),t(g,Is),t(g,J),m(it,J,null),t(J,Rs),t(J,Ls),t(J,Ns),t(J,Xa),t(Xa,Bs),t(J,Ss),m(dt,J,null),t(g,js),t(g,Q),m(ct,Q,null),t(Q,qs),t(Q,Ps),t(Q,As),t(Q,za),t(za,Ms),t(Q,Gs),m(ft,Q,null),t(g,Hs),t(g,U),m(pt,U,null),t(U,Ws),t(U,Fs),t(U,Js),t(U,Va),t(Va,Qs),t(U,Us),m($t,U,null),t(g,Ys),t(g,Y),m(mt,Y,null),t(Y,Ks),t(Y,Xs),t(Y,zs),t(Y,Za),t(Za,Vs),t(Y,Zs),m(ut,Y,null),t(g,ei),t(g,w),m(Et,w,null),t(w,ti),t(w,ai),t(w,ni),t(w,en),t(en,oi),t(w,ri),t(w,tn),t(tn,li),t(w,si),t(w,ii),t(w,di),t(w,an),t(an,ci),t(w,fi),t(w,nn),t(nn,pi),t(w,$i),t(w,on),t(on,mi),t(w,ui),t(w,rn),t(rn,Ei),t(w,hi),t(w,ln),t(ln,gi),t(w,bi),t(w,sn),t(sn,vi),t(w,xi),m(ht,w,null),t(g,wi),t(g,P),m(gt,P,null),t(P,Oi),t(P,_i),t(P,yi),t(P,dn),t(dn,Di),t(P,ki),t(P,cn),t(cn,Ci),t(P,Ti),m(bt,P,null),t(g,Ii),t(g,B),m(vt,B,null),t(B,Ri),t(B,Li),t(B,Ni),t(B,fn),t(fn,Bi),t(B,Si),t(B,pn),t(pn,ji),t(B,qi),t(B,$n),t($n,Pi),t(B,Ai),m(xt,B,null),t(g,Mi),t(g,S),m(wt,S,null),t(S,Gi),t(S,Hi),t(S,Wi),t(S,mn),t(mn,Fi),t(S,Ji),t(S,un),t(un,Qi),t(S,Ui),t(S,En),t(En,Yi),t(S,Ki),m(Ot,S,null),t(g,Xi),t(g,K),m(_t,K,null),t(K,zi),t(K,Vi),t(K,Zi),t(K,hn),t(hn,ed),t(K,td),m(yt,K,null),t(g,ad),t(g,X),m(Dt,X,null),t(X,nd),t(X,od),t(X,rd),t(X,gn),t(gn,ld),t(X,sd),m(kt,X,null),t(g,id),t(g,z),m(Ct,z,null),t(z,dd),t(z,cd),t(z,fd),t(z,bn),t(bn,pd),t(z,$d),m(Tt,z,null),t(g,md),t(g,V),m(It,V,null),t(V,ud),t(V,Ed),t(V,hd),t(V,vn),t(vn,gd),t(V,bd),m(Rt,V,null),f(e,Do,i),m(Lt,e,i),f(e,ko,i),f(e,D,i),t(D,vd),t(D,xn),t(xn,xd),t(D,wd),t(D,wn),t(wn,Od),t(D,_d),t(D,yd),t(D,Dd),t(D,On),t(On,kd),t(D,Cd),t(D,_n),t(_n,Td),t(D,Id),t(D,Rd),t(D,Ld),t(D,yn),t(yn,Nd),t(D,Bd),t(D,Dn),t(Dn,Sd),t(D,jd),f(e,Co,i),m(Nt,e,i),f(e,To,i),m(Bt,e,i),f(e,Io,i),f(e,j,i),t(j,qd),t(j,kn),t(kn,Pd),t(j,Ad),t(j,Cn),t(Cn,Md),t(j,Gd),t(j,Hd),t(j,Wd),t(j,Tn),t(Tn,Fd),t(j,Jd),t(j,In),t(In,Qd),t(j,Ud),f(e,Ro,i),m(St,e,i),f(e,Lo,i),m(jt,e,i),f(e,No,i),f(e,O,i),t(O,Yd),t(O,Rn),t(Rn,Kd),t(O,Xd),t(O,Ln),t(Ln,zd),t(O,Vd),t(O,Zd),t(O,ec),t(O,Nn),t(Nn,tc),t(O,ac),t(O,Bn),t(Bn,nc),t(O,oc),t(O,rc),t(O,lc),t(O,Sn),t(Sn,sc),t(O,ic),t(O,jn),t(jn,dc),t(O,cc),t(O,qn),t(qn,fc),t(O,pc),f(e,Bo,i),m(qt,e,i),f(e,So,i),m(Pt,e,i),f(e,jo,i),f(e,fe,i),t(fe,$c),t(fe,Pn),t(Pn,mc),t(fe,uc),t(fe,An),t(An,Ec),t(fe,hc),f(e,qo,i),m(At,e,i),f(e,Po,i),m(Mt,e,i),f(e,Ao,i),f(e,Z,i),t(Z,gc),t(Z,Mn),t(Mn,bc),t(Z,vc),t(Z,Gn),t(Gn,xc),t(Z,wc),t(Z,Hn),t(Hn,Oc),t(Z,_c),f(e,Mo,i),m(Gt,e,i),f(e,Go,i),m(Ht,e,i),f(e,Ho,i),f(e,Wt,i),t(Wt,yc),t(Wt,Wn),t(Wn,Dc),f(e,Wo,i),f(e,xe,i),t(xe,kc),t(xe,Fn),t(Fn,Cc),t(xe,Tc),f(e,Fo,i),f(e,Zt,i),t(Zt,Jn),t(Jn,Ic),f(e,Jo,i),m(Ft,e,i),f(e,Qo,i),m(Jt,e,i),f(e,Uo,i),f(e,A,i),t(A,Rc),t(A,Qn),t(Qn,Lc),t(A,Nc),t(A,Bc),t(A,Sc),t(A,Un),t(Un,jc),t(A,qc),t(A,Yn),t(Yn,Pc),t(A,Ac),f(e,Yo,i),m(Qt,e,i),Ko=!0},p:Mp,i(e){Ko||(u(Ne.$$.fragment,e),u(Be.$$.fragment,e),u(je.$$.fragment,e),u(qe.$$.fragment,e),u(Ae.$$.fragment,e),u(Me.$$.fragment,e),u(He.$$.fragment,e),u(We.$$.fragment,e),u(Fe.$$.fragment,e),u(Je.$$.fragment,e),u(Qe.$$.fragment,e),u(Ue.$$.fragment,e),u(Ye.$$.fragment,e),u(Ke.$$.fragment,e),u(Xe.$$.fragment,e),u(ze.$$.fragment,e),u(Ve.$$.fragment,e),u(Ze.$$.fragment,e),u(et.$$.fragment,e),u(tt.$$.fragment,e),u(at.$$.fragment,e),u(nt.$$.fragment,e),u(ot.$$.fragment,e),u(rt.$$.fragment,e),u(lt.$$.fragment,e),u(st.$$.fragment,e),u(it.$$.fragment,e),u(dt.$$.fragment,e),u(ct.$$.fragment,e),u(ft.$$.fragment,e),u(pt.$$.fragment,e),u($t.$$.fragment,e),u(mt.$$.fragment,e),u(ut.$$.fragment,e),u(Et.$$.fragment,e),u(ht.$$.fragment,e),u(gt.$$.fragment,e),u(bt.$$.fragment,e),u(vt.$$.fragment,e),u(xt.$$.fragment,e),u(wt.$$.fragment,e),u(Ot.$$.fragment,e),u(_t.$$.fragment,e),u(yt.$$.fragment,e),u(Dt.$$.fragment,e),u(kt.$$.fragment,e),u(Ct.$$.fragment,e),u(Tt.$$.fragment,e),u(It.$$.fragment,e),u(Rt.$$.fragment,e),u(Lt.$$.fragment,e),u(Nt.$$.fragment,e),u(Bt.$$.fragment,e),u(St.$$.fragment,e),u(jt.$$.fragment,e),u(qt.$$.fragment,e),u(Pt.$$.fragment,e),u(At.$$.fragment,e),u(Mt.$$.fragment,e),u(Gt.$$.fragment,e),u(Ht.$$.fragment,e),u(Ft.$$.fragment,e),u(Jt.$$.fragment,e),u(Qt.$$.fragment,e),Ko=!0)},o(e){E(Ne.$$.fragment,e),E(Be.$$.fragment,e),E(je.$$.fragment,e),E(qe.$$.fragment,e),E(Ae.$$.fragment,e),E(Me.$$.fragment,e),E(He.$$.fragment,e),E(We.$$.fragment,e),E(Fe.$$.fragment,e),E(Je.$$.fragment,e),E(Qe.$$.fragment,e),E(Ue.$$.fragment,e),E(Ye.$$.fragment,e),E(Ke.$$.fragment,e),E(Xe.$$.fragment,e),E(ze.$$.fragment,e),E(Ve.$$.fragment,e),E(Ze.$$.fragment,e),E(et.$$.fragment,e),E(tt.$$.fragment,e),E(at.$$.fragment,e),E(nt.$$.fragment,e),E(ot.$$.fragment,e),E(rt.$$.fragment,e),E(lt.$$.fragment,e),E(st.$$.fragment,e),E(it.$$.fragment,e),E(dt.$$.fragment,e),E(ct.$$.fragment,e),E(ft.$$.fragment,e),E(pt.$$.fragment,e),E($t.$$.fragment,e),E(mt.$$.fragment,e),E(ut.$$.fragment,e),E(Et.$$.fragment,e),E(ht.$$.fragment,e),E(gt.$$.fragment,e),E(bt.$$.fragment,e),E(vt.$$.fragment,e),E(xt.$$.fragment,e),E(wt.$$.fragment,e),E(Ot.$$.fragment,e),E(_t.$$.fragment,e),E(yt.$$.fragment,e),E(Dt.$$.fragment,e),E(kt.$$.fragment,e),E(Ct.$$.fragment,e),E(Tt.$$.fragment,e),E(It.$$.fragment,e),E(Rt.$$.fragment,e),E(Lt.$$.fragment,e),E(Nt.$$.fragment,e),E(Bt.$$.fragment,e),E(St.$$.fragment,e),E(jt.$$.fragment,e),E(qt.$$.fragment,e),E(Pt.$$.fragment,e),E(At.$$.fragment,e),E(Mt.$$.fragment,e),E(Gt.$$.fragment,e),E(Ht.$$.fragment,e),E(Ft.$$.fragment,e),E(Jt.$$.fragment,e),E(Qt.$$.fragment,e),Ko=!1},d(e){e&&o(ne),e&&o(zn),e&&o(H),e&&o(Vn),e&&o(ue),e&&o(Zn),h(Ne,e),e&&o(eo),h(Be,e),e&&o(to),e&&o(Ee),e&&o(ao),e&&o(oe),h(je),h(qe),h(Ae),h(Me),h(He),h(We),e&&o(no),h(Fe,e),e&&o(oo),e&&o(re),e&&o(ro),h(Je,e),e&&o(lo),h(Qe,e),e&&o(so),e&&o(k),e&&o(io),h(Ue,e),e&&o(co),h(Ye,e),e&&o(fo),e&&o(T),e&&o(po),h(Ke,e),e&&o($o),h(Xe,e),e&&o(mo),e&&o(be),e&&o(uo),h(ze,e),e&&o(Eo),h(Ve,e),e&&o(ho),e&&o(le),e&&o(go),e&&o(se),e&&o(bo),e&&o(I),e&&o(vo),h(Ze,e),e&&o(xo),h(et,e),e&&o(wo),e&&o(y),e&&o(Oo),h(tt,e),e&&o(_o),e&&o(ve),e&&o(yo),e&&o(g),h(at),h(nt),h(ot),h(rt),h(lt),h(st),h(it),h(dt),h(ct),h(ft),h(pt),h($t),h(mt),h(ut),h(Et),h(ht),h(gt),h(bt),h(vt),h(xt),h(wt),h(Ot),h(_t),h(yt),h(Dt),h(kt),h(Ct),h(Tt),h(It),h(Rt),e&&o(Do),h(Lt,e),e&&o(ko),e&&o(D),e&&o(Co),h(Nt,e),e&&o(To),h(Bt,e),e&&o(Io),e&&o(j),e&&o(Ro),h(St,e),e&&o(Lo),h(jt,e),e&&o(No),e&&o(O),e&&o(Bo),h(qt,e),e&&o(So),h(Pt,e),e&&o(jo),e&&o(fe),e&&o(qo),h(At,e),e&&o(Po),h(Mt,e),e&&o(Ao),e&&o(Z),e&&o(Mo),h(Gt,e),e&&o(Go),h(Ht,e),e&&o(Ho),e&&o(Wt),e&&o(Wo),e&&o(xe),e&&o(Fo),e&&o(Zt),e&&o(Jo),h(Ft,e),e&&o(Qo),h(Jt,e),e&&o(Uo),e&&o(A),e&&o(Yo),h(Qt,e)}}}class Up extends qp{constructor(ne){super(),Pp(this,ne,null,Hp,Ap,{})}}export{Up as component};
