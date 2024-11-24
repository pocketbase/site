import{S as Vl,i as Wl,s as Xl,y as h,a as f,k as s,q as o,z as y,c,l,m as n,r as a,h as r,n as m,T as Fl,A as v,b as p,G as t,H as Kl,g as _,d as b,B as $}from"../chunks/index.a7566c1a.js";import{H as F}from"../chunks/HeadingLink.20322812.js";import{C as jl}from"../chunks/CommonHelper.7329e1a7.js";import{C as D}from"../chunks/CodeBlock.a090ee9b.js";import{T as Jl}from"../chunks/Toc.c31a36b6.js";function Zl(ql){let U,zt,me,Ft,ue,qt,q,qr,rt,Vr,Wr,Vt,Fe,Xr,Wt,g,V,ot,Kr,jr,de,Jr,he,ye,Zr,at,Qr,eo,to,ve,ro,_e,st,oo,ao,be,so,H,lt,lo,no,$e,io,Ee,u,po,nt,fo,co,it,mo,uo,ho,yo,pt,vo,_o,ft,bo,$o,ct,Eo,go,mt,ko,wo,ut,Po,xo,dt,So,Oo,Bo,ge,Ro,k,ht,No,To,O,Io,yt,Co,Ao,Mo,Do,vt,Uo,Ho,Lo,ke,Go,we,Yo,_t,zo,Fo,qo,Pe,Xt,xe,Kt,w,Vo,bt,Wo,Xo,$t,Ko,jo,Et,Jo,Zo,jt,W,Qo,gt,ea,ta,Jt,Se,Zt,X,ra,kt,oa,aa,Qt,Oe,er,Be,tr,K,sa,j,la,na,rr,Re,or,J,ia,wt,pa,fa,ar,Ne,Te,ca,Z,ma,ua,sr,Ie,lr,Pt,nr,R,da,xt,ha,ya,St,va,_a,ir,Q,Hs,pr,L,Ot,ba,$a,Ea,ga,fr,N,ka,Bt,wa,Pa,Rt,xa,Sa,cr,Ce,mr,G,qe,Oa,Ba,Ae,ur,T,Ra,Nt,Na,Ta,Ia,Ca,dr,E,Aa,ee,Ma,Da,te,Ua,Ha,re,La,Ga,oe,Ya,za,ae,Fa,qa,hr,I,Va,Tt,Wa,Xa,It,Ka,ja,yr,se,Ls,vr,Y,Ve,Ja,Za,Me,_r,De,Qa,br,P,es,Ct,ts,rs,os,as,At,ss,ls,$r,x,ns,Mt,is,ps,Dt,fs,cs,Ut,ms,us,Er,z,We,ds,hs,Ue,gr,He,ys,kr,Xe,vs,wr,Ke,_s,Pr,je,bs,xr,le,B,$s,Ht,Es,gs,ks,ws,ne,Ps,Le,xs,Gs=jl.randomString(32)+"",Ss,Os,Bs,Rs,C,Ns,Lt,Ts,Is,Cs,As,Ge,Ms,Gt,Ds,Sr;return U=new Jl({}),me=new F({props:{title:"Deployment strategies"}}),ue=new F({props:{title:"Minimal setup",tag:"h5"}}),de=new D({props:{language:"html",content:`
                myapp/
                    pb_migrations/
                    pb_hooks/
                    pocketbase
            `}}),ve=new D({props:{content:`
                rsync -avz -e ssh /local/path/to/myapp root@YOUR_SERVER_IP:/root/pb
            `}}),be=new D({props:{content:`
                ssh root@YOUR_SERVER_IP
            `}}),$e=new D({props:{content:`
              [root@dev ~]$ /root/pb/pocketbase serve yourdomain.com
            `}}),ge=new D({props:{content:`
                    [myuser@dev ~]$ sudo setcap 'cap_net_bind_service=+ep' /root/pb/pocketbase
                `}}),ke=new D({props:{content:`
                [Unit]
                Description = pocketbase

                [Service]
                Type           = simple
                User           = root
                Group          = root
                LimitNOFILE    = 4096
                Restart        = always
                RestartSec     = 5s
                StandardOutput = append:/root/pb/errors.log
                StandardError  = append:/root/pb/errors.log
                ExecStart      = /root/pb/pocketbase serve yourdomain.com

                [Install]
                WantedBy = multi-user.target
            `}}),Pe=new D({props:{content:`
                [root@dev ~]$ systemctl enable pocketbase.service
                [root@dev ~]$ systemctl start pocketbase
            `}}),xe=new F({props:{title:"Using reverse proxy",tag:"h5"}}),Se=new D({props:{language:"html",content:`
    server {
        listen 80;
        server_name example.com;
        client_max_body_size 10M;

        location / {
            # check http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive
            proxy_set_header Connection '';
            proxy_http_version 1.1;
            proxy_read_timeout 360s;

            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            # enable if you are serving under a subpath location
            # rewrite /yourSubpath/(.*) /$1  break;

            proxy_pass http://127.0.0.1:8090;
        }
    }
    `}}),Oe=new D({props:{language:"html",content:`
    example.com {
        request_body {
            max_size 10MB
        }
        reverse_proxy 127.0.0.1:8090 {
            transport http {
                read_timeout 360s
            }
        }
    }
    `}}),Be=new F({props:{title:"Using Docker",tag:"h5"}}),Re=new D({props:{language:"html",content:`
        FROM alpine:latest

        ARG PB_VERSION=`+("v0.22.27".startsWith("v")?"v0.22.27".substring(1):"v0.22.27")+`

        RUN apk add --no-cache \\
            unzip \\
            ca-certificates

        # download and unzip PocketBase
        ADD https://github.com/pocketbase/pocketbase/releases/download/v\${PB_VERSION}/pocketbase_\${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
        RUN unzip /tmp/pb.zip -d /pb/

        # uncomment to copy the local pb_migrations dir into the image
        # COPY ./pb_migrations /pb/pb_migrations

        # uncomment to copy the local pb_hooks dir into the image
        # COPY ./pb_hooks /pb/pb_hooks

        EXPOSE 8080

        # start PocketBase
        CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
    `}}),Ie=new F({props:{title:"Backup and Restore"}}),Ce=new F({props:{title:"Recommendations"}}),Ae=new F({props:{title:"Use SMTP mail server",tag:"h5"}}),Me=new F({props:{title:"Increase the open file descriptors limit",tag:"h5"}}),Ue=new F({props:{title:"Enable settings encryption",tag:"h5"}}),{c(){h(U.$$.fragment),zt=f(),h(me.$$.fragment),Ft=f(),h(ue.$$.fragment),qt=f(),q=s("p"),qr=o(`One of the best PocketBase features is that it's completely portable. This mean that it doesn't require
    any external dependency and
    `),rt=s("strong"),Vr=o("could be deployed by just uploading the executable on your server"),Wr=o("."),Vt=f(),Fe=s("p"),Xr=o(`Here is an example for starting a production HTTPS server (auto managed TLS with Let's Encrypt) on clean
    Ubuntu 22.04 installation.`),Wt=f(),g=s("ol"),V=s("li"),ot=s("p"),Kr=o("Consider the following app directory structure:"),jr=f(),h(de.$$.fragment),Jr=f(),he=s("li"),ye=s("p"),Zr=o(`Upload the binary and anything else related to your remote server, for example using
            `),at=s("strong"),Qr=o("rsync"),eo=o(":"),to=f(),h(ve.$$.fragment),ro=f(),_e=s("li"),st=s("p"),oo=o("Start a SSH session with your server:"),ao=f(),h(be.$$.fragment),so=f(),H=s("li"),lt=s("p"),lo=o("Start the executable (specifying a domain name will issue a Let's encrypt certificate for it)"),no=f(),h($e.$$.fragment),io=f(),Ee=s("blockquote"),u=s("p"),po=o("Notice that in the above example we are logged in as "),nt=s("strong"),fo=o("root"),co=o(` which allow us to
                bind to the
                `),it=s("strong"),mo=o("privileged 80 and 443 ports"),uo=o(`.
                `),ho=s("br"),yo=o(`
                For `),pt=s("strong"),vo=o("non-root"),_o=o(` users usually you'll need special privileges to be able to do
                that. You have several options depending on your OS - `),ft=s("code"),bo=o("authbind"),$o=o(`,
                `),ct=s("code"),Eo=o("setcap"),go=o(`,
                `),mt=s("code"),ko=o("iptables"),wo=o(", "),ut=s("code"),Po=o("sysctl"),xo=o(", etc. Here is an example using "),dt=s("code"),So=o("setcap"),Oo=o(":"),Bo=f(),h(ge.$$.fragment),Ro=f(),k=s("li"),ht=s("p"),No=o("(Optional) systemd service"),To=f(),O=s("p"),Io=o("You can skip step 3 and create a "),yt=s("strong"),Co=o("Systemd service"),Ao=o(`
            to allow your application to start/restart on its own.
            `),Mo=s("br"),Do=o(`
            Here is an example service file (usually created in
            `),vt=s("code"),Uo=o("/lib/systemd/system/pocketbase.service"),Ho=o("):"),Lo=f(),h(ke.$$.fragment),Go=f(),we=s("p"),Yo=o("After that we just have to enable it and start the service using "),_t=s("code"),zo=o("systemctl"),Fo=o(":"),qo=f(),h(Pe.$$.fragment),Xt=f(),h(xe.$$.fragment),Kt=f(),w=s("p"),Vo=o(`If you plan hosting multiple applications on a single server or need finer network controls (rate limiter,
    IPs whitelisting, etc.), you could always put PocketBase behind a reverse proxy such as
    `),bt=s("em"),Wo=o("NGINX"),Xo=o(", "),$t=s("em"),Ko=o("Apache"),jo=o(", "),Et=s("em"),Jo=o("Caddy"),Zo=o(", etc."),jt=f(),W=s("p"),Qo=o("Here is a minimal "),gt=s("em"),ea=o("NGINX"),ta=o(" example configuration:"),Jt=f(),h(Se.$$.fragment),Zt=f(),X=s("p"),ra=o("Corresponding "),kt=s("em"),oa=o("Caddy"),aa=o(" configuration is:"),Qt=f(),h(Oe.$$.fragment),er=f(),h(Be.$$.fragment),tr=f(),K=s("p"),sa=o("Some hosts (eg. "),j=s("a"),la=o("fly.io"),na=o(`) use Docker
    for deployments. PocketBase doesn't have an official Docker image yet, but you could use the below
    Dockerfile as an example:`),rr=f(),h(Re.$$.fragment),or=f(),J=s("p"),ia=o("To persist your data you need to mount a volume at "),wt=s("code"),pa=o("/pb/pb_data"),fa=o("."),ar=f(),Ne=s("p"),Te=s("em"),ca=o(`For a full example you could check the
        `),Z=s("a"),ma=o('"Host for free on Fly.io"'),ua=o(`
        guide.`),sr=f(),h(Ie.$$.fragment),lr=f(),Pt=s("p"),nr=f(),R=s("p"),da=o("PocketBase v0.16+ comes with built-in backups and restore APIs that could be accessed from the Admin UI ("),xt=s("em"),ha=o("Settings"),ya=o(`
    > `),St=s("em"),va=o("Backups"),_a=o("):"),ir=f(),Q=s("img"),pr=f(),L=s("p"),Ot=s("strong"),ba=o("Note that the application will be temporary set in read-only mode during the backup's ZIP generation."),$a=f(),Ea=s("br"),ga=o(`
    Backups can be stored locally (default) or in an external S3 storage.`),fr=f(),N=s("p"),ka=o("Alternatively, you can always manually copy your "),Bt=s("code"),wa=o("pb_data"),Pa=o(` directory
    `),Rt=s("em"),xa=o("(for transactional safety make sure that the application is not running)"),Sa=o("."),cr=f(),h(Ce.$$.fragment),mr=f(),G=s("header"),qe=s("span"),Oa=o("highly recommended"),Ba=f(),h(Ae.$$.fragment),ur=f(),T=s("p"),Ra=o("By default, PocketBase uses the internal Unix "),Nt=s("code"),Na=o("sendmail"),Ta=o(` command for sending emails.
    `),Ia=s("br"),Ca=o(`
    While it's OK for development, it's not very useful for production, because your emails most likely will get
    marked as spam or even fail to deliver.`),dr=f(),E=s("p"),Aa=o(`To avoid deliverability issues, consider using a local SMTP server or an external mail service like
    `),ee=s("a"),Ma=o("MailerSend"),Da=o(`,
    `),te=s("a"),Ua=o("Brevo"),Ha=o(`,
    `),re=s("a"),La=o("SendGrid"),Ga=o(`,
    `),oe=s("a"),Ya=o("Mailgun"),za=o(`,
    `),ae=s("a"),Fa=o("AWS SES"),qa=o(", etc."),hr=f(),I=s("p"),Va=o(`Once you've decided on a mail service, you could configure the PocketBase SMTP settings from the Admin UI
    (`),Tt=s("em"),Wa=o("Settings"),Xa=o(" > "),It=s("em"),Ka=o("Mail settings"),ja=o("):"),yr=f(),se=s("img"),vr=f(),Y=s("header"),Ve=s("span"),Ja=o("optional"),Za=f(),h(Me.$$.fragment),_r=f(),De=s("p"),Qa=o("The below instructions are for Linux but other operating systems have similar mechanism."),br=f(),P=s("p"),es=o("Unix uses "),Ct=s("em"),ts=o('"file descriptors"'),rs=o(` also for network connections and most systems have a default limit
    of ~ 1024.
    `),os=s("br"),as=o(`
    If your application has a lot of concurrent realtime connections, it is possible that at some point you would
    get an error such as: `),At=s("code"),ss=o("Too many open files"),ls=o("."),$r=f(),x=s("p"),ns=o(`One way to mitigate this is to check your current account resource limits by running
    `),Mt=s("code"),is=o("ulimit -a"),ps=o(` and find the parameter you want to change. For example, if you want to increase the
    open files limit (`),Dt=s("em"),fs=o("-n"),cs=o(`), you could run
    `),Ut=s("code"),ms=o("ulimit -n 4096"),us=o(" before starting PocketBase."),Er=f(),z=s("header"),We=s("span"),ds=o("optional"),hs=f(),h(Ue.$$.fragment),gr=f(),He=s("p"),ys=o("It is fine to ignore the below if you are not sure whether you need it."),kr=f(),Xe=s("p"),vs=o(`By default, PocketBase stores the applications settings in the database as plain JSON text, including the
    secret keys for the OAuth2 clients and the SMTP password.`),wr=f(),Ke=s("p"),_s=o(`While this is not a security issue on its own (PocketBase applications live entirely on a single server
    and its expected only authorized users to have access to your server and application data), in some
    situations it may be a good idea to store the settings encrypted in case someone get their hands on your
    database file (eg. from an external stored backup).`),Pr=f(),je=s("p"),bs=o("To store your PocketBase settings encrypted:"),xr=f(),le=s("ol"),B=s("li"),$s=o("Create a new environment variable and "),Ht=s("strong"),Es=o("set a random 32 characters"),gs=o(` string as its value.
        `),ks=s("br"),ws=f(),ne=s("span"),Ps=o(`eg. add
            `),Le=s("code"),xs=o('export PB_ENCRYPTION_KEY="'),Ss=o(Gs),Os=o('"'),Bs=o(`
            in your shell profile file`),Rs=f(),C=s("li"),Ns=o("Start the application with "),Lt=s("code"),Ts=o("--encryptionEnv=YOUR_ENV_VAR"),Is=o(` flag.
        `),Cs=s("br"),As=f(),Ge=s("span"),Ms=o("eg. "),Gt=s("code"),Ds=o("pocketbase serve --encryptionEnv=PB_ENCRYPTION_KEY"),this.h()},l(e){y(U.$$.fragment,e),zt=c(e),y(me.$$.fragment,e),Ft=c(e),y(ue.$$.fragment,e),qt=c(e),q=l(e,"P",{});var i=n(q);qr=a(i,`One of the best PocketBase features is that it's completely portable. This mean that it doesn't require
    any external dependency and
    `),rt=l(i,"STRONG",{});var Ys=n(rt);Vr=a(Ys,"could be deployed by just uploading the executable on your server"),Ys.forEach(r),Wr=a(i,"."),i.forEach(r),Vt=c(e),Fe=l(e,"P",{});var zs=n(Fe);Xr=a(zs,`Here is an example for starting a production HTTPS server (auto managed TLS with Let's Encrypt) on clean
    Ubuntu 22.04 installation.`),zs.forEach(r),Wt=c(e),g=l(e,"OL",{});var A=n(g);V=l(A,"LI",{});var Or=n(V);ot=l(Or,"P",{});var Fs=n(ot);Kr=a(Fs,"Consider the following app directory structure:"),Fs.forEach(r),jr=c(Or),y(de.$$.fragment,Or),Or.forEach(r),Jr=c(A),he=l(A,"LI",{});var Br=n(he);ye=l(Br,"P",{});var Rr=n(ye);Zr=a(Rr,`Upload the binary and anything else related to your remote server, for example using
            `),at=l(Rr,"STRONG",{});var qs=n(at);Qr=a(qs,"rsync"),qs.forEach(r),eo=a(Rr,":"),Rr.forEach(r),to=c(Br),y(ve.$$.fragment,Br),Br.forEach(r),ro=c(A),_e=l(A,"LI",{});var Nr=n(_e);st=l(Nr,"P",{});var Vs=n(st);oo=a(Vs,"Start a SSH session with your server:"),Vs.forEach(r),ao=c(Nr),y(be.$$.fragment,Nr),Nr.forEach(r),so=c(A),H=l(A,"LI",{});var Je=n(H);lt=l(Je,"P",{});var Ws=n(lt);lo=a(Ws,"Start the executable (specifying a domain name will issue a Let's encrypt certificate for it)"),Ws.forEach(r),no=c(Je),y($e.$$.fragment,Je),io=c(Je),Ee=l(Je,"BLOCKQUOTE",{});var Tr=n(Ee);u=l(Tr,"P",{});var d=n(u);po=a(d,"Notice that in the above example we are logged in as "),nt=l(d,"STRONG",{});var Xs=n(nt);fo=a(Xs,"root"),Xs.forEach(r),co=a(d,` which allow us to
                bind to the
                `),it=l(d,"STRONG",{});var Ks=n(it);mo=a(Ks,"privileged 80 and 443 ports"),Ks.forEach(r),uo=a(d,`.
                `),ho=l(d,"BR",{}),yo=a(d,`
                For `),pt=l(d,"STRONG",{});var js=n(pt);vo=a(js,"non-root"),js.forEach(r),_o=a(d,` users usually you'll need special privileges to be able to do
                that. You have several options depending on your OS - `),ft=l(d,"CODE",{});var Js=n(ft);bo=a(Js,"authbind"),Js.forEach(r),$o=a(d,`,
                `),ct=l(d,"CODE",{});var Zs=n(ct);Eo=a(Zs,"setcap"),Zs.forEach(r),go=a(d,`,
                `),mt=l(d,"CODE",{});var Qs=n(mt);ko=a(Qs,"iptables"),Qs.forEach(r),wo=a(d,", "),ut=l(d,"CODE",{});var el=n(ut);Po=a(el,"sysctl"),el.forEach(r),xo=a(d,", etc. Here is an example using "),dt=l(d,"CODE",{});var tl=n(dt);So=a(tl,"setcap"),tl.forEach(r),Oo=a(d,":"),d.forEach(r),Bo=c(Tr),y(ge.$$.fragment,Tr),Tr.forEach(r),Je.forEach(r),Ro=c(A),k=l(A,"LI",{});var M=n(k);ht=l(M,"P",{});var rl=n(ht);No=a(rl,"(Optional) systemd service"),rl.forEach(r),To=c(M),O=l(M,"P",{});var ie=n(O);Io=a(ie,"You can skip step 3 and create a "),yt=l(ie,"STRONG",{});var ol=n(yt);Co=a(ol,"Systemd service"),ol.forEach(r),Ao=a(ie,`
            to allow your application to start/restart on its own.
            `),Mo=l(ie,"BR",{}),Do=a(ie,`
            Here is an example service file (usually created in
            `),vt=l(ie,"CODE",{});var al=n(vt);Uo=a(al,"/lib/systemd/system/pocketbase.service"),al.forEach(r),Ho=a(ie,"):"),ie.forEach(r),Lo=c(M),y(ke.$$.fragment,M),Go=c(M),we=l(M,"P",{});var Ir=n(we);Yo=a(Ir,"After that we just have to enable it and start the service using "),_t=l(Ir,"CODE",{});var sl=n(_t);zo=a(sl,"systemctl"),sl.forEach(r),Fo=a(Ir,":"),Ir.forEach(r),qo=c(M),y(Pe.$$.fragment,M),M.forEach(r),A.forEach(r),Xt=c(e),y(xe.$$.fragment,e),Kt=c(e),w=l(e,"P",{});var pe=n(w);Vo=a(pe,`If you plan hosting multiple applications on a single server or need finer network controls (rate limiter,
    IPs whitelisting, etc.), you could always put PocketBase behind a reverse proxy such as
    `),bt=l(pe,"EM",{});var ll=n(bt);Wo=a(ll,"NGINX"),ll.forEach(r),Xo=a(pe,", "),$t=l(pe,"EM",{});var nl=n($t);Ko=a(nl,"Apache"),nl.forEach(r),jo=a(pe,", "),Et=l(pe,"EM",{});var il=n(Et);Jo=a(il,"Caddy"),il.forEach(r),Zo=a(pe,", etc."),pe.forEach(r),jt=c(e),W=l(e,"P",{});var Cr=n(W);Qo=a(Cr,"Here is a minimal "),gt=l(Cr,"EM",{});var pl=n(gt);ea=a(pl,"NGINX"),pl.forEach(r),ta=a(Cr," example configuration:"),Cr.forEach(r),Jt=c(e),y(Se.$$.fragment,e),Zt=c(e),X=l(e,"P",{});var Ar=n(X);ra=a(Ar,"Corresponding "),kt=l(Ar,"EM",{});var fl=n(kt);oa=a(fl,"Caddy"),fl.forEach(r),aa=a(Ar," configuration is:"),Ar.forEach(r),Qt=c(e),y(Oe.$$.fragment,e),er=c(e),y(Be.$$.fragment,e),tr=c(e),K=l(e,"P",{});var Mr=n(K);sa=a(Mr,"Some hosts (eg. "),j=l(Mr,"A",{href:!0,target:!0,rel:!0});var cl=n(j);la=a(cl,"fly.io"),cl.forEach(r),na=a(Mr,`) use Docker
    for deployments. PocketBase doesn't have an official Docker image yet, but you could use the below
    Dockerfile as an example:`),Mr.forEach(r),rr=c(e),y(Re.$$.fragment,e),or=c(e),J=l(e,"P",{});var Dr=n(J);ia=a(Dr,"To persist your data you need to mount a volume at "),wt=l(Dr,"CODE",{});var ml=n(wt);pa=a(ml,"/pb/pb_data"),ml.forEach(r),fa=a(Dr,"."),Dr.forEach(r),ar=c(e),Ne=l(e,"P",{class:!0});var ul=n(Ne);Te=l(ul,"EM",{});var Ur=n(Te);ca=a(Ur,`For a full example you could check the
        `),Z=l(Ur,"A",{href:!0,target:!0,rel:!0});var dl=n(Z);ma=a(dl,'"Host for free on Fly.io"'),dl.forEach(r),ua=a(Ur,`
        guide.`),Ur.forEach(r),ul.forEach(r),sr=c(e),y(Ie.$$.fragment,e),lr=c(e),Pt=l(e,"P",{}),n(Pt).forEach(r),nr=c(e),R=l(e,"P",{});var Ze=n(R);da=a(Ze,"PocketBase v0.16+ comes with built-in backups and restore APIs that could be accessed from the Admin UI ("),xt=l(Ze,"EM",{});var hl=n(xt);ha=a(hl,"Settings"),hl.forEach(r),ya=a(Ze,`
    > `),St=l(Ze,"EM",{});var yl=n(St);va=a(yl,"Backups"),yl.forEach(r),_a=a(Ze,"):"),Ze.forEach(r),ir=c(e),Q=l(e,"IMG",{src:!0,alt:!0,class:!0}),pr=c(e),L=l(e,"P",{});var Yt=n(L);Ot=l(Yt,"STRONG",{});var vl=n(Ot);ba=a(vl,"Note that the application will be temporary set in read-only mode during the backup's ZIP generation."),vl.forEach(r),$a=c(Yt),Ea=l(Yt,"BR",{}),ga=a(Yt,`
    Backups can be stored locally (default) or in an external S3 storage.`),Yt.forEach(r),fr=c(e),N=l(e,"P",{});var Qe=n(N);ka=a(Qe,"Alternatively, you can always manually copy your "),Bt=l(Qe,"CODE",{});var _l=n(Bt);wa=a(_l,"pb_data"),_l.forEach(r),Pa=a(Qe,` directory
    `),Rt=l(Qe,"EM",{});var bl=n(Rt);xa=a(bl,"(for transactional safety make sure that the application is not running)"),bl.forEach(r),Sa=a(Qe,"."),Qe.forEach(r),cr=c(e),y(Ce.$$.fragment,e),mr=c(e),G=l(e,"HEADER",{class:!0});var Hr=n(G);qe=l(Hr,"SPAN",{class:!0});var $l=n(qe);Oa=a($l,"highly recommended"),$l.forEach(r),Ba=c(Hr),y(Ae.$$.fragment,Hr),Hr.forEach(r),ur=c(e),T=l(e,"P",{});var et=n(T);Ra=a(et,"By default, PocketBase uses the internal Unix "),Nt=l(et,"CODE",{});var El=n(Nt);Na=a(El,"sendmail"),El.forEach(r),Ta=a(et,` command for sending emails.
    `),Ia=l(et,"BR",{}),Ca=a(et,`
    While it's OK for development, it's not very useful for production, because your emails most likely will get
    marked as spam or even fail to deliver.`),et.forEach(r),dr=c(e),E=l(e,"P",{});var S=n(E);Aa=a(S,`To avoid deliverability issues, consider using a local SMTP server or an external mail service like
    `),ee=l(S,"A",{href:!0,target:!0,rel:!0});var gl=n(ee);Ma=a(gl,"MailerSend"),gl.forEach(r),Da=a(S,`,
    `),te=l(S,"A",{href:!0,target:!0,rel:!0});var kl=n(te);Ua=a(kl,"Brevo"),kl.forEach(r),Ha=a(S,`,
    `),re=l(S,"A",{href:!0,target:!0,rel:!0});var wl=n(re);La=a(wl,"SendGrid"),wl.forEach(r),Ga=a(S,`,
    `),oe=l(S,"A",{href:!0,target:!0,rel:!0});var Pl=n(oe);Ya=a(Pl,"Mailgun"),Pl.forEach(r),za=a(S,`,
    `),ae=l(S,"A",{href:!0,target:!0,rel:!0});var xl=n(ae);Fa=a(xl,"AWS SES"),xl.forEach(r),qa=a(S,", etc."),S.forEach(r),hr=c(e),I=l(e,"P",{});var tt=n(I);Va=a(tt,`Once you've decided on a mail service, you could configure the PocketBase SMTP settings from the Admin UI
    (`),Tt=l(tt,"EM",{});var Sl=n(Tt);Wa=a(Sl,"Settings"),Sl.forEach(r),Xa=a(tt," > "),It=l(tt,"EM",{});var Ol=n(It);Ka=a(Ol,"Mail settings"),Ol.forEach(r),ja=a(tt,"):"),tt.forEach(r),yr=c(e),se=l(e,"IMG",{src:!0,alt:!0,class:!0}),vr=c(e),Y=l(e,"HEADER",{class:!0});var Lr=n(Y);Ve=l(Lr,"SPAN",{class:!0});var Bl=n(Ve);Ja=a(Bl,"optional"),Bl.forEach(r),Za=c(Lr),y(Me.$$.fragment,Lr),Lr.forEach(r),_r=c(e),De=l(e,"P",{class:!0});var Rl=n(De);Qa=a(Rl,"The below instructions are for Linux but other operating systems have similar mechanism."),Rl.forEach(r),br=c(e),P=l(e,"P",{});var fe=n(P);es=a(fe,"Unix uses "),Ct=l(fe,"EM",{});var Nl=n(Ct);ts=a(Nl,'"file descriptors"'),Nl.forEach(r),rs=a(fe,` also for network connections and most systems have a default limit
    of ~ 1024.
    `),os=l(fe,"BR",{}),as=a(fe,`
    If your application has a lot of concurrent realtime connections, it is possible that at some point you would
    get an error such as: `),At=l(fe,"CODE",{});var Tl=n(At);ss=a(Tl,"Too many open files"),Tl.forEach(r),ls=a(fe,"."),fe.forEach(r),$r=c(e),x=l(e,"P",{});var ce=n(x);ns=a(ce,`One way to mitigate this is to check your current account resource limits by running
    `),Mt=l(ce,"CODE",{});var Il=n(Mt);is=a(Il,"ulimit -a"),Il.forEach(r),ps=a(ce,` and find the parameter you want to change. For example, if you want to increase the
    open files limit (`),Dt=l(ce,"EM",{});var Cl=n(Dt);fs=a(Cl,"-n"),Cl.forEach(r),cs=a(ce,`), you could run
    `),Ut=l(ce,"CODE",{});var Al=n(Ut);ms=a(Al,"ulimit -n 4096"),Al.forEach(r),us=a(ce," before starting PocketBase."),ce.forEach(r),Er=c(e),z=l(e,"HEADER",{class:!0});var Gr=n(z);We=l(Gr,"SPAN",{class:!0});var Ml=n(We);ds=a(Ml,"optional"),Ml.forEach(r),hs=c(Gr),y(Ue.$$.fragment,Gr),Gr.forEach(r),gr=c(e),He=l(e,"P",{class:!0});var Dl=n(He);ys=a(Dl,"It is fine to ignore the below if you are not sure whether you need it."),Dl.forEach(r),kr=c(e),Xe=l(e,"P",{});var Ul=n(Xe);vs=a(Ul,`By default, PocketBase stores the applications settings in the database as plain JSON text, including the
    secret keys for the OAuth2 clients and the SMTP password.`),Ul.forEach(r),wr=c(e),Ke=l(e,"P",{});var Hl=n(Ke);_s=a(Hl,`While this is not a security issue on its own (PocketBase applications live entirely on a single server
    and its expected only authorized users to have access to your server and application data), in some
    situations it may be a good idea to store the settings encrypted in case someone get their hands on your
    database file (eg. from an external stored backup).`),Hl.forEach(r),Pr=c(e),je=l(e,"P",{});var Ll=n(je);bs=a(Ll,"To store your PocketBase settings encrypted:"),Ll.forEach(r),xr=c(e),le=l(e,"OL",{});var Yr=n(le);B=l(Yr,"LI",{class:!0});var Ye=n(B);$s=a(Ye,"Create a new environment variable and "),Ht=l(Ye,"STRONG",{});var Gl=n(Ht);Es=a(Gl,"set a random 32 characters"),Gl.forEach(r),gs=a(Ye,` string as its value.
        `),ks=l(Ye,"BR",{}),ws=c(Ye),ne=l(Ye,"SPAN",{class:!0});var zr=n(ne);Ps=a(zr,`eg. add
            `),Le=l(zr,"CODE",{});var Fr=n(Le);xs=a(Fr,'export PB_ENCRYPTION_KEY="'),Ss=a(Fr,Gs),Os=a(Fr,'"'),Fr.forEach(r),Bs=a(zr,`
            in your shell profile file`),zr.forEach(r),Ye.forEach(r),Rs=c(Yr),C=l(Yr,"LI",{});var ze=n(C);Ns=a(ze,"Start the application with "),Lt=l(ze,"CODE",{});var Yl=n(Lt);Ts=a(Yl,"--encryptionEnv=YOUR_ENV_VAR"),Yl.forEach(r),Is=a(ze,` flag.
        `),Cs=l(ze,"BR",{}),As=c(ze),Ge=l(ze,"SPAN",{class:!0});var Us=n(Ge);Ms=a(Us,"eg. "),Gt=l(Us,"CODE",{});var zl=n(Gt);Ds=a(zl,"pocketbase serve --encryptionEnv=PB_ENCRYPTION_KEY"),zl.forEach(r),Us.forEach(r),ze.forEach(r),Yr.forEach(r),this.h()},h(){V.value="0",m(j,"href","https://fly.io"),m(j,"target","_blank"),m(j,"rel","noopener noreferrer"),m(Z,"href","https://github.com/pocketbase/pocketbase/discussions/537"),m(Z,"target","_blank"),m(Z,"rel","noopener noreferrer"),m(Ne,"class","txt-hint"),Fl(Q.src,Hs="/images/screenshots/backups.png")||m(Q,"src",Hs),m(Q,"alt","Backups settings screenshot"),m(Q,"class","screenshot m-b-xs"),m(qe,"class","label label-primary"),m(G,"class","highlighted-title bg-danger-alt m-t-0"),m(ee,"href","https://www.mailersend.com/"),m(ee,"target","_blank"),m(ee,"rel","noreferrer noopener"),m(te,"href","https://www.brevo.com/"),m(te,"target","_blank"),m(te,"rel","noreferrer noopener"),m(re,"href","https://sendgrid.com/"),m(re,"target","_blank"),m(re,"rel","noreferrer noopener"),m(oe,"href","https://www.mailgun.com/"),m(oe,"target","_blank"),m(oe,"rel","noreferrer noopener"),m(ae,"href","https://aws.amazon.com/ses/"),m(ae,"target","_blank"),m(ae,"rel","noreferrer noopener"),Fl(se.src,Ls="/images/screenshots/smtp-settings.png")||m(se,"src",Ls),m(se,"alt","SMTP settings screenshot"),m(se,"class","screenshot m-b-xs"),m(Ve,"class","label label-primary"),m(Y,"class","highlighted-title bg-warning-alt"),m(De,"class","txt-hint txt-bold"),m(We,"class","label label-primary"),m(z,"class","highlighted-title bg-warning-alt"),m(He,"class","txt-bold txt-hint"),m(ne,"class","txt-hint"),m(B,"class","m-b-10"),m(Ge,"class","txt-hint")},m(e,i){v(U,e,i),p(e,zt,i),v(me,e,i),p(e,Ft,i),v(ue,e,i),p(e,qt,i),p(e,q,i),t(q,qr),t(q,rt),t(rt,Vr),t(q,Wr),p(e,Vt,i),p(e,Fe,i),t(Fe,Xr),p(e,Wt,i),p(e,g,i),t(g,V),t(V,ot),t(ot,Kr),t(V,jr),v(de,V,null),t(g,Jr),t(g,he),t(he,ye),t(ye,Zr),t(ye,at),t(at,Qr),t(ye,eo),t(he,to),v(ve,he,null),t(g,ro),t(g,_e),t(_e,st),t(st,oo),t(_e,ao),v(be,_e,null),t(g,so),t(g,H),t(H,lt),t(lt,lo),t(H,no),v($e,H,null),t(H,io),t(H,Ee),t(Ee,u),t(u,po),t(u,nt),t(nt,fo),t(u,co),t(u,it),t(it,mo),t(u,uo),t(u,ho),t(u,yo),t(u,pt),t(pt,vo),t(u,_o),t(u,ft),t(ft,bo),t(u,$o),t(u,ct),t(ct,Eo),t(u,go),t(u,mt),t(mt,ko),t(u,wo),t(u,ut),t(ut,Po),t(u,xo),t(u,dt),t(dt,So),t(u,Oo),t(Ee,Bo),v(ge,Ee,null),t(g,Ro),t(g,k),t(k,ht),t(ht,No),t(k,To),t(k,O),t(O,Io),t(O,yt),t(yt,Co),t(O,Ao),t(O,Mo),t(O,Do),t(O,vt),t(vt,Uo),t(O,Ho),t(k,Lo),v(ke,k,null),t(k,Go),t(k,we),t(we,Yo),t(we,_t),t(_t,zo),t(we,Fo),t(k,qo),v(Pe,k,null),p(e,Xt,i),v(xe,e,i),p(e,Kt,i),p(e,w,i),t(w,Vo),t(w,bt),t(bt,Wo),t(w,Xo),t(w,$t),t($t,Ko),t(w,jo),t(w,Et),t(Et,Jo),t(w,Zo),p(e,jt,i),p(e,W,i),t(W,Qo),t(W,gt),t(gt,ea),t(W,ta),p(e,Jt,i),v(Se,e,i),p(e,Zt,i),p(e,X,i),t(X,ra),t(X,kt),t(kt,oa),t(X,aa),p(e,Qt,i),v(Oe,e,i),p(e,er,i),v(Be,e,i),p(e,tr,i),p(e,K,i),t(K,sa),t(K,j),t(j,la),t(K,na),p(e,rr,i),v(Re,e,i),p(e,or,i),p(e,J,i),t(J,ia),t(J,wt),t(wt,pa),t(J,fa),p(e,ar,i),p(e,Ne,i),t(Ne,Te),t(Te,ca),t(Te,Z),t(Z,ma),t(Te,ua),p(e,sr,i),v(Ie,e,i),p(e,lr,i),p(e,Pt,i),p(e,nr,i),p(e,R,i),t(R,da),t(R,xt),t(xt,ha),t(R,ya),t(R,St),t(St,va),t(R,_a),p(e,ir,i),p(e,Q,i),p(e,pr,i),p(e,L,i),t(L,Ot),t(Ot,ba),t(L,$a),t(L,Ea),t(L,ga),p(e,fr,i),p(e,N,i),t(N,ka),t(N,Bt),t(Bt,wa),t(N,Pa),t(N,Rt),t(Rt,xa),t(N,Sa),p(e,cr,i),v(Ce,e,i),p(e,mr,i),p(e,G,i),t(G,qe),t(qe,Oa),t(G,Ba),v(Ae,G,null),p(e,ur,i),p(e,T,i),t(T,Ra),t(T,Nt),t(Nt,Na),t(T,Ta),t(T,Ia),t(T,Ca),p(e,dr,i),p(e,E,i),t(E,Aa),t(E,ee),t(ee,Ma),t(E,Da),t(E,te),t(te,Ua),t(E,Ha),t(E,re),t(re,La),t(E,Ga),t(E,oe),t(oe,Ya),t(E,za),t(E,ae),t(ae,Fa),t(E,qa),p(e,hr,i),p(e,I,i),t(I,Va),t(I,Tt),t(Tt,Wa),t(I,Xa),t(I,It),t(It,Ka),t(I,ja),p(e,yr,i),p(e,se,i),p(e,vr,i),p(e,Y,i),t(Y,Ve),t(Ve,Ja),t(Y,Za),v(Me,Y,null),p(e,_r,i),p(e,De,i),t(De,Qa),p(e,br,i),p(e,P,i),t(P,es),t(P,Ct),t(Ct,ts),t(P,rs),t(P,os),t(P,as),t(P,At),t(At,ss),t(P,ls),p(e,$r,i),p(e,x,i),t(x,ns),t(x,Mt),t(Mt,is),t(x,ps),t(x,Dt),t(Dt,fs),t(x,cs),t(x,Ut),t(Ut,ms),t(x,us),p(e,Er,i),p(e,z,i),t(z,We),t(We,ds),t(z,hs),v(Ue,z,null),p(e,gr,i),p(e,He,i),t(He,ys),p(e,kr,i),p(e,Xe,i),t(Xe,vs),p(e,wr,i),p(e,Ke,i),t(Ke,_s),p(e,Pr,i),p(e,je,i),t(je,bs),p(e,xr,i),p(e,le,i),t(le,B),t(B,$s),t(B,Ht),t(Ht,Es),t(B,gs),t(B,ks),t(B,ws),t(B,ne),t(ne,Ps),t(ne,Le),t(Le,xs),t(Le,Ss),t(Le,Os),t(ne,Bs),t(le,Rs),t(le,C),t(C,Ns),t(C,Lt),t(Lt,Ts),t(C,Is),t(C,Cs),t(C,As),t(C,Ge),t(Ge,Ms),t(Ge,Gt),t(Gt,Ds),Sr=!0},p:Kl,i(e){Sr||(_(U.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(de.$$.fragment,e),_(ve.$$.fragment,e),_(be.$$.fragment,e),_($e.$$.fragment,e),_(ge.$$.fragment,e),_(ke.$$.fragment,e),_(Pe.$$.fragment,e),_(xe.$$.fragment,e),_(Se.$$.fragment,e),_(Oe.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(Ie.$$.fragment,e),_(Ce.$$.fragment,e),_(Ae.$$.fragment,e),_(Me.$$.fragment,e),_(Ue.$$.fragment,e),Sr=!0)},o(e){b(U.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b(de.$$.fragment,e),b(ve.$$.fragment,e),b(be.$$.fragment,e),b($e.$$.fragment,e),b(ge.$$.fragment,e),b(ke.$$.fragment,e),b(Pe.$$.fragment,e),b(xe.$$.fragment,e),b(Se.$$.fragment,e),b(Oe.$$.fragment,e),b(Be.$$.fragment,e),b(Re.$$.fragment,e),b(Ie.$$.fragment,e),b(Ce.$$.fragment,e),b(Ae.$$.fragment,e),b(Me.$$.fragment,e),b(Ue.$$.fragment,e),Sr=!1},d(e){$(U,e),e&&r(zt),$(me,e),e&&r(Ft),$(ue,e),e&&r(qt),e&&r(q),e&&r(Vt),e&&r(Fe),e&&r(Wt),e&&r(g),$(de),$(ve),$(be),$($e),$(ge),$(ke),$(Pe),e&&r(Xt),$(xe,e),e&&r(Kt),e&&r(w),e&&r(jt),e&&r(W),e&&r(Jt),$(Se,e),e&&r(Zt),e&&r(X),e&&r(Qt),$(Oe,e),e&&r(er),$(Be,e),e&&r(tr),e&&r(K),e&&r(rr),$(Re,e),e&&r(or),e&&r(J),e&&r(ar),e&&r(Ne),e&&r(sr),$(Ie,e),e&&r(lr),e&&r(Pt),e&&r(nr),e&&r(R),e&&r(ir),e&&r(Q),e&&r(pr),e&&r(L),e&&r(fr),e&&r(N),e&&r(cr),$(Ce,e),e&&r(mr),e&&r(G),$(Ae),e&&r(ur),e&&r(T),e&&r(dr),e&&r(E),e&&r(hr),e&&r(I),e&&r(yr),e&&r(se),e&&r(vr),e&&r(Y),$(Me),e&&r(_r),e&&r(De),e&&r(br),e&&r(P),e&&r($r),e&&r(x),e&&r(Er),e&&r(z),$(Ue),e&&r(gr),e&&r(He),e&&r(kr),e&&r(Xe),e&&r(wr),e&&r(Ke),e&&r(Pr),e&&r(je),e&&r(xr),e&&r(le)}}}class an extends Vl{constructor(U){super(),Wl(this,U,null,Zl,Xl,{})}}export{an as component};
