import{S as $s,i as gs,s as ks,y,a as p,k as o,q as a,z as w,c as d,l as r,m as n,r as s,h as l,T as Pa,n as c,A as $,b as f,G as t,H as xs,g,d as k,B as x}from"../chunks/index.a7566c1a.js";import{H as at}from"../chunks/HeadingLink.20322812.js";import{T as Ds}from"../chunks/ThumbFormats.e63d1815.js";import{C as jt}from"../chunks/CodeTabs.3c6448ff.js";import{T as Is}from"../chunks/Toc.c31a36b6.js";function Os(ws){let R,st,V,it,N,zt,Ie,Vt,Ht,ot,S,Ra,rt,D,Ut,Oe,Kt,Jt,Pe,Qt,Xt,nt,re,Yt,ft,H,pt,T,ne,Re,Zt,I,U,el,Se,tl,ll,al,C,sl,Te,il,ol,Ce,rl,nl,fl,b,pl,Fe,dl,cl,Me,ul,ml,Ne,hl,bl,dt,K,ct,u,vl,El,_l,Ae,yl,wl,Be,$l,gl,ut,O,kl,qe,xl,Dl,Ge,Il,Ol,mt,J,ht,m,Pl,We,Rl,Sl,Le,Tl,Cl,je,Fl,Ml,bt,Q,vt,F,Nl,Al,Bl,v,ql,fe,Gl,Wl,pe,Ll,jl,de,zl,Et,E,Vl,ze,Hl,Ul,Ve,Kl,Jl,_,Ql,ce,Xl,Yl,ue,Zl,ea,me,ta,He,la,_t,X,yt,Y,aa,wt,he,sa,$t,Z,gt,be,ee,ia,Ue,oa,ra,kt,te,xt,ve,na,Dt,Ee,fa,It,h,pa,Ke,da,ca,Je,ua,ma,Qe,ha,ba,Ot,M,_e,Xe,va,ye,le,Ea,Ye,_a,ya,Pt,A,Sa,Rt,we,St,ae,Tt,se,Ct,B,wa,Ze,$a,ga,Ft,P,ka,et,xa,Da,tt,Ia,Oa,Mt,q,Ta,Nt;return R=new Is({}),V=new at({props:{title:"Uploading files"}}),H=new jt({props:{js:`
        // Example HTML:
        // <input type="file" id="fileInput" />

        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const formData = new FormData();

        const fileInput = document.getElementById('fileInput');

        // listen to file input changes and add the selected files to the form data
        fileInput.addEventListener('change', function () {
            for (let file of fileInput.files) {
                formData.append('documents', file);
            }
        });

        // set some other regular text field value
        formData.append('title', 'Hello world!');

        ...

        // upload and create new record
        const createdRecord = await pb.collection('example').create(formData);
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:http/http.dart' as http;

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // create a new record and upload multiple files
        final record = await pb.collection('example').create(
            body: {
                'title': 'Hello world!', // some regular text field
            },
            files: [
                http.MultipartFile.fromString(
                    'document',
                    'example content 1...',
                    filename: 'file1.txt',
                ),
                http.MultipartFile.fromString(
                    'document',
                    'example content 2...',
                    filename: 'file2.txt',
                ),
            ],
        );
    `}}),K=new at({props:{title:"Deleting files"}}),J=new jt({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // delete all "documents" files
        await pb.collection('example').update('RECORD_ID', {
            'documents': null,
        });

        // delete individual files
        await pb.collection('example').update('RECORD_ID', {
            'documents-': ["file1.pdf", "file2.txt"],
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // delete all "documents" files
        await pb.collection('example').update('RECORD_ID', body: {
            'documents': null,
        });

        // delete individual files
        await pb.collection('example').update('RECORD_ID', body: {
            'documents-': ["file1.pdf", "file2.txt"],
        });
    `}}),Q=new at({props:{title:"File URL"}}),X=new Ds({}),Z=new jt({props:{class:"m-t-10 m-b-xs",js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const record = await pb.collection('example').getOne('RECORD_ID');

        // get only the first filename from "documents"
        //
        // note:
        // "documents" is an array of filenames because
        // the "documents" field was created with "Max Files" option > 1;
        // if "Max Files" was 1, then the result property would be just a string
        const firstFilename = record.documents[0];

        // returns something like:
        // http://127.0.0.1:8090/api/files/example/kfzjt5oy8r34hvn/test_52iWbGinWd.png?thumb=100x250
        const url = pb.files.getUrl(record, firstFilename, {'thumb': '100x250'});
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        final record = await pb.collection('example').getOne('RECORD_ID');

        // get only the first filename from "documents"
        //
        // note:
        // "documents" is an array of filenames because
        // the "documents" field was created with "Max Files" option > 1;
        // if "Max Files" was 1, then the result property would be just a string
        final firstFilename = record.getListValue<String>('documents')[0];

        // returns something like:
        // http://127.0.0.1:8090/api/files/example/kfzjt5oy8r34hvn/test_52iWbGinWd.png?thumb=100x250
        final url = pb.files.getUrl(record, firstFilename, thumb: '100x250');
    `}}),te=new at({props:{title:"Protected files"}}),ae=new jt({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        // authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // generate a file token
        const fileToken = await pb.files.getToken();

        // retrieve an example protected file url (will be valid ~2min)
        const record = await pb.collection('example').getOne('RECORD_ID');
        const url = pb.files.getUrl(record, record.myPrivateFile, {'token': fileToken});
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        // authenticate
        await pb.collection('users').authWithPassword('test@example.com', '1234567890');

        // generate a file token
        final fileToken = await pb.files.getToken();

        // retrieve an example protected file url (will be valid ~2min)
        final record = await pb.collection('example').getOne('RECORD_ID');
        final url = pb.files.getUrl(record, record.getStringValue('myPrivateFile'), token: fileToken);
    `}}),se=new at({props:{title:"Storage options"}}),{c(){y(R.$$.fragment),st=p(),y(V.$$.fragment),it=p(),N=o("p"),zt=a("To upload files, you must first add a "),Ie=o("code"),Vt=a("file"),Ht=a(" field to your collection:"),ot=p(),S=o("img"),rt=p(),D=o("p"),Ut=a(`Once added, you could create/update a Record and upload "documents" files by sending a
    `),Oe=o("code"),Kt=a("multipart/form-data"),Jt=a(" request using the "),Pe=o("em"),Qt=a("Records create/update APIs"),Xt=a("."),nt=p(),re=o("p"),Yt=a(`The client SDK makes things a little easier and auto detect the request content type based on the
    parameters that you provide. Here is an example how to create a new Record and upload multiple files to
    the example file field "documents" using the SDKs:`),ft=p(),y(H.$$.fragment),pt=p(),T=o("div"),ne=o("div"),Re=o("i"),Zt=p(),I=o("div"),U=o("p"),el=a(`Each uploaded file will be stored with the original filename (sanitized) and suffixed with a
            random (10 chars) part (eg. `),Se=o("code"),tl=a("test_52iWbGinWd.png"),ll=a(")."),al=p(),C=o("p"),sl=a("When you upload a new file to a "),Te=o("strong"),il=a("single file upload field"),ol=a(` (aka.
            `),Ce=o("strong"),rl=a("Max Files option is 1"),nl=a(`) PocketBase will automatically delete the previous uploaded
            file (if any) and upload the new one in its place.`),fl=p(),b=o("p"),pl=a("When you upload a new file to a "),Fe=o("strong"),dl=a("multiple file upload field"),cl=a(` (aka.
            `),Me=o("strong"),ul=a("Max Files option is > 1"),ml=a(`) the new file will be appended to the existing field
            values (as long as the `),Ne=o("strong"),hl=a("Max Files"),bl=a(` limit is not reached, otherwise an error will be
            thrown).`),dt=p(),y(K.$$.fragment),ct=p(),u=o("p"),vl=a(`To delete uploaded file(s), you could either edit the Record from the admin UI, or use the API and set the
    file field to a zero-value `),El=o("br"),_l=a(" ("),Ae=o("code"),yl=a("null"),wl=a(", "),Be=o("code"),$l=a("[]"),gl=a(", empty string, etc.)."),ut=p(),O=o("p"),kl=a("If you want to "),qe=o("strong"),xl=a("delete individual file(s) from a multiple file upload field"),Dl=a(`, you could
    suffix the field name with `),Ge=o("code"),Il=a("-"),Ol=a(` and specify the filename(s) you want to delete. Here are some examples
    using the SDKs:`),mt=p(),y(J.$$.fragment),ht=p(),m=o("p"),Pl=a("The above examples use the JSON object data format, but you could also use "),We=o("code"),Rl=a("FormData"),Sl=a(` instance
    for `),Le=o("em"),Tl=a("multipart/form-data"),Cl=a(` requests. If using
    `),je=o("code"),Fl=a("FormData"),Ml=a(" set the file field to an empty string."),bt=p(),y(Q.$$.fragment),vt=p(),F=o("p"),Nl=a(`Each uploaded file could be accessed by requesting its file url:
    `),Al=o("br"),Bl=p(),v=o("code"),ql=a("http://127.0.0.1:8090/api/files/"),fe=o("span"),Gl=a("COLLECTION_ID_OR_NAME"),Wl=a("/"),pe=o("span"),Ll=a("RECORD_ID"),jl=a("/"),de=o("span"),zl=a("FILENAME"),Et=p(),E=o("p"),Vl=a("If your file field has the "),ze=o("strong"),Hl=a("Thumb sizes"),Ul=a(` option, you can get a thumb of the image file
    (currently limited to jpg, png, and partially gif – its first frame) by adding the `),Ve=o("code"),Kl=a("thumb"),Jl=a(`
    query parameter to the url like this:
    
    `),_=o("code"),Ql=a("http://127.0.0.1:8090/api/files/"),ce=o("span"),Xl=a("COLLECTION_ID_OR_NAME"),Yl=a("/"),ue=o("span"),Zl=a("RECORD_ID"),ea=a("/"),me=o("span"),ta=a("FILENAME"),He=o("strong"),la=a("?thumb=100x300"),_t=p(),y(X.$$.fragment),yt=p(),Y=o("p"),aa=a("The original file would be returned, if the requested thumb size is not found or the file is not an image!"),wt=p(),he=o("p"),sa=a(`If you already have a Record model instance, the SDKs provide a convenient method to generate a file url
    by its name.`),$t=p(),y(Z.$$.fragment),gt=p(),be=o("p"),ee=o("em"),ia=a(`Additionally, to instruct the browser to always download the file instead of showing a preview when
        accessed directly, you can append the `),Ue=o("code"),oa=a("?download=1"),ra=a(" query parameter to the file url."),kt=p(),y(te.$$.fragment),xt=p(),ve=o("p"),na=a("By default all files are public accessible if you know their full url."),Dt=p(),Ee=o("p"),fa=a(`For most applications this is fine since all files have a random part, but in some cases you may want an
    extra security to prevent unauthorized access to sensitive files like ID card or Passport copies,
    contracts, etc.`),It=p(),h=o("p"),pa=a("To do this you can mark the "),Ke=o("code"),da=a("file"),ca=a(" field as "),Je=o("em"),ua=a("Protected"),ma=a(` and then request the file with a
    special `),Qe=o("strong"),ha=a("short-lived file token"),ba=a("."),Ot=p(),M=o("div"),_e=o("div"),Xe=o("i"),va=p(),ye=o("div"),le=o("p"),Ea=a("Only requests that satisfy the "),Ye=o("strong"),_a=a("View API rule"),ya=a(` of the record collection will be able
            to access or download the protected file(s).`),Pt=p(),A=o("img"),Rt=p(),we=o("div"),St=p(),y(ae.$$.fragment),Tt=p(),y(se.$$.fragment),Ct=p(),B=o("p"),wa=a(`By default PocketBase uses the local file system to store uploaded files (in the
    `),Ze=o("code"),$a=a("pb_data/storage"),ga=a(" directory)."),Ft=p(),P=o("p"),ka=a(`If you have limited disk space, you could use a S3 compatible storage (AWS S3, MinIO, Wasabi, DigitalOcean
    Spaces, Vultr Object Storage, etc.). The easiest way to setup the connection settings is from the admin UI
    (`),et=o("em"),xa=a("Settings"),Da=a(" > "),tt=o("em"),Ia=a("Files storage"),Oa=a("):"),Mt=p(),q=o("img"),this.h()},l(e){w(R.$$.fragment,e),st=d(e),w(V.$$.fragment,e),it=d(e),N=r(e,"P",{});var i=n(N);zt=s(i,"To upload files, you must first add a "),Ie=r(i,"CODE",{});var Ca=n(Ie);Vt=s(Ca,"file"),Ca.forEach(l),Ht=s(i," field to your collection:"),i.forEach(l),ot=d(e),S=r(e,"IMG",{src:!0,alt:!0,width:!0,class:!0}),rt=d(e),D=r(e,"P",{});var $e=n(D);Ut=s($e,`Once added, you could create/update a Record and upload "documents" files by sending a
    `),Oe=r($e,"CODE",{});var Fa=n(Oe);Kt=s(Fa,"multipart/form-data"),Fa.forEach(l),Jt=s($e," request using the "),Pe=r($e,"EM",{});var Ma=n(Pe);Qt=s(Ma,"Records create/update APIs"),Ma.forEach(l),Xt=s($e,"."),$e.forEach(l),nt=d(e),re=r(e,"P",{});var Na=n(re);Yt=s(Na,`The client SDK makes things a little easier and auto detect the request content type based on the
    parameters that you provide. Here is an example how to create a new Record and upload multiple files to
    the example file field "documents" using the SDKs:`),Na.forEach(l),ft=d(e),w(H.$$.fragment,e),pt=d(e),T=r(e,"DIV",{class:!0});var At=n(T);ne=r(At,"DIV",{class:!0});var Aa=n(ne);Re=r(Aa,"I",{class:!0}),n(Re).forEach(l),Aa.forEach(l),Zt=d(At),I=r(At,"DIV",{class:!0});var ge=n(I);U=r(ge,"P",{});var Bt=n(U);el=s(Bt,`Each uploaded file will be stored with the original filename (sanitized) and suffixed with a
            random (10 chars) part (eg. `),Se=r(Bt,"CODE",{});var Ba=n(Se);tl=s(Ba,"test_52iWbGinWd.png"),Ba.forEach(l),ll=s(Bt,")."),Bt.forEach(l),al=d(ge),C=r(ge,"P",{});var ke=n(C);sl=s(ke,"When you upload a new file to a "),Te=r(ke,"STRONG",{});var qa=n(Te);il=s(qa,"single file upload field"),qa.forEach(l),ol=s(ke,` (aka.
            `),Ce=r(ke,"STRONG",{});var Ga=n(Ce);rl=s(Ga,"Max Files option is 1"),Ga.forEach(l),nl=s(ke,`) PocketBase will automatically delete the previous uploaded
            file (if any) and upload the new one in its place.`),ke.forEach(l),fl=d(ge),b=r(ge,"P",{});var G=n(b);pl=s(G,"When you upload a new file to a "),Fe=r(G,"STRONG",{});var Wa=n(Fe);dl=s(Wa,"multiple file upload field"),Wa.forEach(l),cl=s(G,` (aka.
            `),Me=r(G,"STRONG",{});var La=n(Me);ul=s(La,"Max Files option is > 1"),La.forEach(l),ml=s(G,`) the new file will be appended to the existing field
            values (as long as the `),Ne=r(G,"STRONG",{});var ja=n(Ne);hl=s(ja,"Max Files"),ja.forEach(l),bl=s(G,` limit is not reached, otherwise an error will be
            thrown).`),G.forEach(l),ge.forEach(l),At.forEach(l),dt=d(e),w(K.$$.fragment,e),ct=d(e),u=r(e,"P",{});var W=n(u);vl=s(W,`To delete uploaded file(s), you could either edit the Record from the admin UI, or use the API and set the
    file field to a zero-value `),El=r(W,"BR",{}),_l=s(W," ("),Ae=r(W,"CODE",{});var za=n(Ae);yl=s(za,"null"),za.forEach(l),wl=s(W,", "),Be=r(W,"CODE",{});var Va=n(Be);$l=s(Va,"[]"),Va.forEach(l),gl=s(W,", empty string, etc.)."),W.forEach(l),ut=d(e),O=r(e,"P",{});var xe=n(O);kl=s(xe,"If you want to "),qe=r(xe,"STRONG",{});var Ha=n(qe);xl=s(Ha,"delete individual file(s) from a multiple file upload field"),Ha.forEach(l),Dl=s(xe,`, you could
    suffix the field name with `),Ge=r(xe,"CODE",{});var Ua=n(Ge);Il=s(Ua,"-"),Ua.forEach(l),Ol=s(xe,` and specify the filename(s) you want to delete. Here are some examples
    using the SDKs:`),xe.forEach(l),mt=d(e),w(J.$$.fragment,e),ht=d(e),m=r(e,"P",{});var L=n(m);Pl=s(L,"The above examples use the JSON object data format, but you could also use "),We=r(L,"CODE",{});var Ka=n(We);Rl=s(Ka,"FormData"),Ka.forEach(l),Sl=s(L,` instance
    for `),Le=r(L,"EM",{});var Ja=n(Le);Tl=s(Ja,"multipart/form-data"),Ja.forEach(l),Cl=s(L,` requests. If using
    `),je=r(L,"CODE",{});var Qa=n(je);Fl=s(Qa,"FormData"),Qa.forEach(l),Ml=s(L," set the file field to an empty string."),L.forEach(l),bt=d(e),w(Q.$$.fragment,e),vt=d(e),F=r(e,"P",{});var lt=n(F);Nl=s(lt,`Each uploaded file could be accessed by requesting its file url:
    `),Al=r(lt,"BR",{}),Bl=d(lt),v=r(lt,"CODE",{class:!0});var ie=n(v);ql=s(ie,"http://127.0.0.1:8090/api/files/"),fe=r(ie,"SPAN",{class:!0});var Xa=n(fe);Gl=s(Xa,"COLLECTION_ID_OR_NAME"),Xa.forEach(l),Wl=s(ie,"/"),pe=r(ie,"SPAN",{class:!0});var Ya=n(pe);Ll=s(Ya,"RECORD_ID"),Ya.forEach(l),jl=s(ie,"/"),de=r(ie,"SPAN",{class:!0});var Za=n(de);zl=s(Za,"FILENAME"),Za.forEach(l),ie.forEach(l),lt.forEach(l),Et=d(e),E=r(e,"P",{});var oe=n(E);Vl=s(oe,"If your file field has the "),ze=r(oe,"STRONG",{});var es=n(ze);Hl=s(es,"Thumb sizes"),es.forEach(l),Ul=s(oe,` option, you can get a thumb of the image file
    (currently limited to jpg, png, and partially gif – its first frame) by adding the `),Ve=r(oe,"CODE",{});var ts=n(Ve);Kl=s(ts,"thumb"),ts.forEach(l),Jl=s(oe,`
    query parameter to the url like this:
    
    `),_=r(oe,"CODE",{});var j=n(_);Ql=s(j,"http://127.0.0.1:8090/api/files/"),ce=r(j,"SPAN",{class:!0});var ls=n(ce);Xl=s(ls,"COLLECTION_ID_OR_NAME"),ls.forEach(l),Yl=s(j,"/"),ue=r(j,"SPAN",{class:!0});var as=n(ue);Zl=s(as,"RECORD_ID"),as.forEach(l),ea=s(j,"/"),me=r(j,"SPAN",{class:!0});var ss=n(me);ta=s(ss,"FILENAME"),ss.forEach(l),He=r(j,"STRONG",{});var is=n(He);la=s(is,"?thumb=100x300"),is.forEach(l),j.forEach(l),oe.forEach(l),_t=d(e),w(X.$$.fragment,e),yt=d(e),Y=r(e,"P",{class:!0});var os=n(Y);aa=s(os,"The original file would be returned, if the requested thumb size is not found or the file is not an image!"),os.forEach(l),wt=d(e),he=r(e,"P",{});var rs=n(he);sa=s(rs,`If you already have a Record model instance, the SDKs provide a convenient method to generate a file url
    by its name.`),rs.forEach(l),$t=d(e),w(Z.$$.fragment,e),gt=d(e),be=r(e,"P",{});var ns=n(be);ee=r(ns,"EM",{});var qt=n(ee);ia=s(qt,`Additionally, to instruct the browser to always download the file instead of showing a preview when
        accessed directly, you can append the `),Ue=r(qt,"CODE",{});var fs=n(Ue);oa=s(fs,"?download=1"),fs.forEach(l),ra=s(qt," query parameter to the file url."),qt.forEach(l),ns.forEach(l),kt=d(e),w(te.$$.fragment,e),xt=d(e),ve=r(e,"P",{});var ps=n(ve);na=s(ps,"By default all files are public accessible if you know their full url."),ps.forEach(l),Dt=d(e),Ee=r(e,"P",{});var ds=n(Ee);fa=s(ds,`For most applications this is fine since all files have a random part, but in some cases you may want an
    extra security to prevent unauthorized access to sensitive files like ID card or Passport copies,
    contracts, etc.`),ds.forEach(l),It=d(e),h=r(e,"P",{});var z=n(h);pa=s(z,"To do this you can mark the "),Ke=r(z,"CODE",{});var cs=n(Ke);da=s(cs,"file"),cs.forEach(l),ca=s(z," field as "),Je=r(z,"EM",{});var us=n(Je);ua=s(us,"Protected"),us.forEach(l),ma=s(z,` and then request the file with a
    special `),Qe=r(z,"STRONG",{});var ms=n(Qe);ha=s(ms,"short-lived file token"),ms.forEach(l),ba=s(z,"."),z.forEach(l),Ot=d(e),M=r(e,"DIV",{class:!0});var Gt=n(M);_e=r(Gt,"DIV",{class:!0});var hs=n(_e);Xe=r(hs,"I",{class:!0}),n(Xe).forEach(l),hs.forEach(l),va=d(Gt),ye=r(Gt,"DIV",{class:!0});var bs=n(ye);le=r(bs,"P",{});var Wt=n(le);Ea=s(Wt,"Only requests that satisfy the "),Ye=r(Wt,"STRONG",{});var vs=n(Ye);_a=s(vs,"View API rule"),vs.forEach(l),ya=s(Wt,` of the record collection will be able
            to access or download the protected file(s).`),Wt.forEach(l),bs.forEach(l),Gt.forEach(l),Pt=d(e),A=r(e,"IMG",{src:!0,alt:!0,class:!0}),Rt=d(e),we=r(e,"DIV",{class:!0}),n(we).forEach(l),St=d(e),w(ae.$$.fragment,e),Tt=d(e),w(se.$$.fragment,e),Ct=d(e),B=r(e,"P",{});var Lt=n(B);wa=s(Lt,`By default PocketBase uses the local file system to store uploaded files (in the
    `),Ze=r(Lt,"CODE",{});var Es=n(Ze);$a=s(Es,"pb_data/storage"),Es.forEach(l),ga=s(Lt," directory)."),Lt.forEach(l),Ft=d(e),P=r(e,"P",{});var De=n(P);ka=s(De,`If you have limited disk space, you could use a S3 compatible storage (AWS S3, MinIO, Wasabi, DigitalOcean
    Spaces, Vultr Object Storage, etc.). The easiest way to setup the connection settings is from the admin UI
    (`),et=r(De,"EM",{});var _s=n(et);xa=s(_s,"Settings"),_s.forEach(l),Da=s(De," > "),tt=r(De,"EM",{});var ys=n(tt);Ia=s(ys,"Files storage"),ys.forEach(l),Oa=s(De,"):"),De.forEach(l),Mt=d(e),q=r(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Pa(S.src,Ra="/images/screenshots/file-field.png")||c(S,"src",Ra),c(S,"alt","File field screenshot"),c(S,"width","465"),c(S,"class","screenshot"),c(Re,"class","ri-information-line"),c(ne,"class","icon"),c(I,"class","content"),c(T,"class","alert alert-info m-t-10 m-b-10"),c(fe,"class","txt-danger"),c(pe,"class","txt-info"),c(de,"class","txt-success"),c(v,"class","txt-bold"),c(ce,"class","txt-danger"),c(ue,"class","txt-info"),c(me,"class","txt-success"),c(Y,"class","txt-hint"),c(Xe,"class","ri-information-line"),c(_e,"class","icon"),c(ye,"class","content"),c(M,"class","alert alert-info m-t-sm m-b-sm"),Pa(A.src,Sa="/images/screenshots/file-options.png")||c(A,"src",Sa),c(A,"alt","File options panel"),c(A,"class","screenshot"),c(we,"class","clearfix m-b-sm"),Pa(q.src,Ta="/images/screenshots/files-storage.png")||c(q,"src",Ta),c(q,"alt","Files storage settings screenshot"),c(q,"class","screenshot")},m(e,i){$(R,e,i),f(e,st,i),$(V,e,i),f(e,it,i),f(e,N,i),t(N,zt),t(N,Ie),t(Ie,Vt),t(N,Ht),f(e,ot,i),f(e,S,i),f(e,rt,i),f(e,D,i),t(D,Ut),t(D,Oe),t(Oe,Kt),t(D,Jt),t(D,Pe),t(Pe,Qt),t(D,Xt),f(e,nt,i),f(e,re,i),t(re,Yt),f(e,ft,i),$(H,e,i),f(e,pt,i),f(e,T,i),t(T,ne),t(ne,Re),t(T,Zt),t(T,I),t(I,U),t(U,el),t(U,Se),t(Se,tl),t(U,ll),t(I,al),t(I,C),t(C,sl),t(C,Te),t(Te,il),t(C,ol),t(C,Ce),t(Ce,rl),t(C,nl),t(I,fl),t(I,b),t(b,pl),t(b,Fe),t(Fe,dl),t(b,cl),t(b,Me),t(Me,ul),t(b,ml),t(b,Ne),t(Ne,hl),t(b,bl),f(e,dt,i),$(K,e,i),f(e,ct,i),f(e,u,i),t(u,vl),t(u,El),t(u,_l),t(u,Ae),t(Ae,yl),t(u,wl),t(u,Be),t(Be,$l),t(u,gl),f(e,ut,i),f(e,O,i),t(O,kl),t(O,qe),t(qe,xl),t(O,Dl),t(O,Ge),t(Ge,Il),t(O,Ol),f(e,mt,i),$(J,e,i),f(e,ht,i),f(e,m,i),t(m,Pl),t(m,We),t(We,Rl),t(m,Sl),t(m,Le),t(Le,Tl),t(m,Cl),t(m,je),t(je,Fl),t(m,Ml),f(e,bt,i),$(Q,e,i),f(e,vt,i),f(e,F,i),t(F,Nl),t(F,Al),t(F,Bl),t(F,v),t(v,ql),t(v,fe),t(fe,Gl),t(v,Wl),t(v,pe),t(pe,Ll),t(v,jl),t(v,de),t(de,zl),f(e,Et,i),f(e,E,i),t(E,Vl),t(E,ze),t(ze,Hl),t(E,Ul),t(E,Ve),t(Ve,Kl),t(E,Jl),t(E,_),t(_,Ql),t(_,ce),t(ce,Xl),t(_,Yl),t(_,ue),t(ue,Zl),t(_,ea),t(_,me),t(me,ta),t(_,He),t(He,la),f(e,_t,i),$(X,e,i),f(e,yt,i),f(e,Y,i),t(Y,aa),f(e,wt,i),f(e,he,i),t(he,sa),f(e,$t,i),$(Z,e,i),f(e,gt,i),f(e,be,i),t(be,ee),t(ee,ia),t(ee,Ue),t(Ue,oa),t(ee,ra),f(e,kt,i),$(te,e,i),f(e,xt,i),f(e,ve,i),t(ve,na),f(e,Dt,i),f(e,Ee,i),t(Ee,fa),f(e,It,i),f(e,h,i),t(h,pa),t(h,Ke),t(Ke,da),t(h,ca),t(h,Je),t(Je,ua),t(h,ma),t(h,Qe),t(Qe,ha),t(h,ba),f(e,Ot,i),f(e,M,i),t(M,_e),t(_e,Xe),t(M,va),t(M,ye),t(ye,le),t(le,Ea),t(le,Ye),t(Ye,_a),t(le,ya),f(e,Pt,i),f(e,A,i),f(e,Rt,i),f(e,we,i),f(e,St,i),$(ae,e,i),f(e,Tt,i),$(se,e,i),f(e,Ct,i),f(e,B,i),t(B,wa),t(B,Ze),t(Ze,$a),t(B,ga),f(e,Ft,i),f(e,P,i),t(P,ka),t(P,et),t(et,xa),t(P,Da),t(P,tt),t(tt,Ia),t(P,Oa),f(e,Mt,i),f(e,q,i),Nt=!0},p:xs,i(e){Nt||(g(R.$$.fragment,e),g(V.$$.fragment,e),g(H.$$.fragment,e),g(K.$$.fragment,e),g(J.$$.fragment,e),g(Q.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(se.$$.fragment,e),Nt=!0)},o(e){k(R.$$.fragment,e),k(V.$$.fragment,e),k(H.$$.fragment,e),k(K.$$.fragment,e),k(J.$$.fragment,e),k(Q.$$.fragment,e),k(X.$$.fragment,e),k(Z.$$.fragment,e),k(te.$$.fragment,e),k(ae.$$.fragment,e),k(se.$$.fragment,e),Nt=!1},d(e){x(R,e),e&&l(st),x(V,e),e&&l(it),e&&l(N),e&&l(ot),e&&l(S),e&&l(rt),e&&l(D),e&&l(nt),e&&l(re),e&&l(ft),x(H,e),e&&l(pt),e&&l(T),e&&l(dt),x(K,e),e&&l(ct),e&&l(u),e&&l(ut),e&&l(O),e&&l(mt),x(J,e),e&&l(ht),e&&l(m),e&&l(bt),x(Q,e),e&&l(vt),e&&l(F),e&&l(Et),e&&l(E),e&&l(_t),x(X,e),e&&l(yt),e&&l(Y),e&&l(wt),e&&l(he),e&&l($t),x(Z,e),e&&l(gt),e&&l(be),e&&l(kt),x(te,e),e&&l(xt),e&&l(ve),e&&l(Dt),e&&l(Ee),e&&l(It),e&&l(h),e&&l(Ot),e&&l(M),e&&l(Pt),e&&l(A),e&&l(Rt),e&&l(we),e&&l(St),x(ae,e),e&&l(Tt),x(se,e),e&&l(Ct),e&&l(B),e&&l(Ft),e&&l(P),e&&l(Mt),e&&l(q)}}}class Fs extends $s{constructor(R){super(),gs(this,R,null,Os,ks,{})}}export{Fs as component};
