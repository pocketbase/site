import{S as Aa,i as Sa,s as Pa,k as o,a as c,q as n,y as z,l as r,m as s,h as a,c as h,r as i,z as q,n as p,K as we,b as v,G as e,A as H,U as Ta,L as ya,g as J,d as K,B as F,M as Ia,H as Da}from"../chunks/index.a7566c1a.js";import{H as Qt}from"../chunks/HeadingLink.20322812.js";import{C as Xt}from"../chunks/CodeTabs.3c6448ff.js";import{T as xa}from"../chunks/Toc.c31a36b6.js";import{t as Ca}from"../chunks/tooltip.f1d7ab7e.js";import{C as Oa}from"../chunks/CodeBlock.a090ee9b.js";const Ba=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OAuth2 links page</title>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"><\/script>
</head>
<body>
    <ul id="list">
        <li>Loading OAuth2 providers...</li>
    </ul>

    <script src="https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@master/dist/pocketbase.umd.js"><\/script>
    <script type="text/javascript">
        const pb = new PocketBase('http://127.0.0.1:8090');
        const redirectUrl = 'http://127.0.0.1:8090/redirect.html';

        async function loadLinks() {
            const authMethods = await pb.collection('users').listAuthMethods();
            const listItems = [];

            for (const provider of authMethods.authProviders) {
                const $li = $(\`<li><a>Login with \${provider.name}</a></li>\`);

                $li.find('a')
                    .attr('href', provider.authUrl + redirectUrl)
                    .data('provider', provider)
                    .click(function () {
                        // store provider's data on click for verification in the redirect page
                        localStorage.setItem('provider', JSON.stringify($(this).data('provider')));
                    });

                listItems.push($li);
            }

            $('#list').html(listItems.length ? listItems : '<li>No OAuth2 providers.</li>');
        }

        loadLinks();
    <\/script>
</body>
</html>
`,La=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>OAuth2 redirect page</title>
</head>
<body>
    <pre id="content">Authenticating...</pre>

    <script src="https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@master/dist/pocketbase.umd.js"><\/script>
    <script type="text/javascript">
        const pb = new PocketBase("http://127.0.0.1:8090");
        const redirectUrl = 'http://127.0.0.1:8090/redirect.html';

        // parse the query parameters from the redirected url
        const params = (new URL(window.location)).searchParams;

        // load the previously stored provider's data
        const provider = JSON.parse(localStorage.getItem('provider'))

        // compare the redirect's state param and the stored provider's one
        if (provider.state !== params.get('state')) {
            throw "State parameters don't match.";
        }

        // authenticate
        pb.collection('users').authWithOAuth2Code(
            provider.name,
            params.get('code'),
            provider.codeVerifier,
            redirectUrl,
            // pass optional user create data
            {
                emailVisibility: false,
            }
        ).then((authData) => {
            document.getElementById('content').innerText = JSON.stringify(authData, null, 2);
        }).catch((err) => {
            document.getElementById('content').innerText = "Failed to exchange code.\\n" + err;
        });
    <\/script>
</body>
</html>
`;function Ra(N){let d,y,w,oe,O,f,$e,Q,Ee,ke,U,x,re,E,se,C,A,X,Z,ne,B,V,L,ie,k,S,D,$,M,ee,le,R,ce,g,ye,he,b,m,P,de,t,l,te,Ie,j,De,ae,G,xe,Ne,pt,mt,ft,vt,Ue,gt,Oe,bt,_,Ve,_t,wt,Ae,Me,$t,Et,je,kt,yt,Ge,Ot,At,Se,ue,pe,We,St,Pt,Ye,Tt,It,Dt,Pe,xt,me,fe,ze,Ct,Bt,qe,Lt,Rt,Nt,Te,Ut,ve,Ce,He,Vt,Be,T,Mt,Je,jt,Gt,Ke,Wt,Yt,Fe,zt,qt,Qe,Ht,Jt,ge,Kt,Zt;return Oe=new Xt({props:{js:`
                    import PocketBase from 'pocketbase';

                    const pb = new PocketBase('https://pocketbase.io');

                    ...

                    // This method initializes a one-off realtime subscription and will
                    // open a popup window with the OAuth2 vendor page to authenticate.
                    //
                    // Once the external OAuth2 sign-in/sign-up flow is completed, the popup
                    // window will be automatically closed and the OAuth2 data sent back
                    // to the user through the previously established realtime connection.
                    //
                    // If the popup is being blocked on Safari, you can try the suggestion from:
                    // https://github.com/pocketbase/pocketbase/discussions/2429#discussioncomment-5943061.
                    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });

                    // after the above you can also access the auth data from the authStore
                    console.log(pb.authStore.isValid);
                    console.log(pb.authStore.token);
                    console.log(pb.authStore.model.id);

                    // "logout" the last authenticated model
                    pb.authStore.clear();
                `,dart:`
                    import 'package:pocketbase/pocketbase.dart';
                    import 'package:url_launcher/url_launcher.dart';

                    final pb = PocketBase('https://pocketbase.io');

                    ...

                    // This method initializes a one-off realtime subscription and will
                    // call the provided urlCallback with the OAuth2 vendor url to authenticate.
                    //
                    // Once the external OAuth2 sign-in/sign-up flow is completed, the browser
                    // window will be automatically closed and the OAuth2 data sent back
                    // to the user through the previously established realtime connection.
                    final authData = await pb.collection('users').authWithOAuth2('google', (url) async {
                      // or use something like flutter_custom_tabs to make the transitions between native and web content more seamless
                      await launchUrl(url);
                    });

                    // after the above you can also access the auth data from the authStore
                    print(pb.authStore.isValid);
                    print(pb.authStore.token);
                    print(pb.authStore.model.id);

                    // "logout" the last authenticated model
                    pb.authStore.clear();
                `}}),Pe=new Oa({props:{language:"html",content:Ba}}),Te=new Oa({props:{language:"html",content:La}}),{c(){d=o("div"),y=o("div"),w=o("i"),oe=c(),O=o("div"),f=o("p"),$e=n(`Before starting, you'll need to create an OAuth2 app in the provider's dashboard in order to get a
            `),Q=o("strong"),Ee=n("Client Id"),ke=n(" and "),U=o("strong"),x=n("Client Secret"),re=n(`, and register a redirect URL
            `),E=o("i"),se=n("."),C=c(),A=o("p"),X=n("Once you have obtained the "),Z=o("strong"),ne=n("Client Id"),B=n(" and "),V=o("strong"),L=n("Client Secret"),ie=n(`, you can
            enable and configure the provider from your PocketBase admin settings page.`),k=c(),S=o("div"),D=o("div"),$=o("button"),M=n("All in one ("),ee=o("em"),le=n("recommended"),R=n(")"),ce=c(),g=o("button"),ye=n("Manual code exchange"),he=c(),b=o("div"),m=o("div"),P=o("p"),de=n(`This method handles everything within a single call without having to define custom redirects,
                deeplinks or even page reload.`),t=c(),l=o("p"),te=o("strong"),Ie=n(`When creating your OAuth2 app, for a callback/redirect URL you have to use the
                    `),j=o("code"),De=n("https://yourdomain.com/api/oauth2-redirect"),ae=n(`
                (`),G=o("em"),xe=n("or when testing locally - "),Ne=o("code"),pt=n("http://127.0.0.1:8090/api/oauth2-redirect"),mt=c(),ft=n(")."),vt=c(),Ue=o("div"),gt=c(),z(Oe.$$.fragment),bt=c(),_=o("div"),Ve=o("p"),_t=n("When authenticating manually with OAuth2 code you'll need 2 endpoints:"),wt=c(),Ae=o("ul"),Me=o("li"),$t=n('somewhere to show the "Login with ..." links'),Et=c(),je=o("li"),kt=n("somewhere to handle the provider's redirect in order to exchange the auth code for token"),yt=c(),Ge=o("p"),Ot=n("Here is a simple web example:"),At=c(),Se=o("ol"),ue=o("li"),pe=o("p"),We=o("strong"),St=n("Links page"),Pt=n(`
                        (eg. https://127.0.0.1:8090 serving `),Ye=o("code"),Tt=n("pb_public/index.html"),It=n("):"),Dt=c(),z(Pe.$$.fragment),xt=c(),me=o("li"),fe=o("p"),ze=o("strong"),Ct=n("Redirect handler page"),Bt=n(`
                        (eg. https://127.0.0.1:8090/redirect.html serving
                        `),qe=o("code"),Lt=n("pb_public/redirect.html"),Rt=n("):"),Nt=c(),z(Te.$$.fragment),Ut=c(),ve=o("div"),Ce=o("div"),He=o("i"),Vt=c(),Be=o("div"),T=o("p"),Mt=n(`When using the "Manual code exchange" flow for sign-in with Apple your redirect
                        handler must accept `),Je=o("code"),jt=n("POST"),Gt=n(` requests in order to receive the name and the
                        email of the Apple user. If you just need the Apple user id, you can keep the redirect
                        hanldler `),Ke=o("code"),Wt=n("GET"),Yt=n(` but you'll need to replace in the Apple authorization url
                        `),Fe=o("code"),zt=n("response_mode=form_post"),qt=n(" with "),Qe=o("code"),Ht=n("response_mode=query"),Jt=n("."),this.h()},l(u){d=r(u,"DIV",{class:!0});var I=s(d);y=r(I,"DIV",{class:!0});var ea=s(y);w=r(ea,"I",{class:!0}),s(w).forEach(a),ea.forEach(a),oe=h(I),O=r(I,"DIV",{class:!0});var at=s(O);f=r(at,"P",{});var be=s(f);$e=i(be,`Before starting, you'll need to create an OAuth2 app in the provider's dashboard in order to get a
            `),Q=r(be,"STRONG",{});var ta=s(Q);Ee=i(ta,"Client Id"),ta.forEach(a),ke=i(be," and "),U=r(be,"STRONG",{});var aa=s(U);x=i(aa,"Client Secret"),aa.forEach(a),re=i(be,`, and register a redirect URL
            `),E=r(be,"I",{class:!0}),s(E).forEach(a),se=i(be,"."),be.forEach(a),C=h(at),A=r(at,"P",{});var Le=s(A);X=i(Le,"Once you have obtained the "),Z=r(Le,"STRONG",{});var oa=s(Z);ne=i(oa,"Client Id"),oa.forEach(a),B=i(Le," and "),V=r(Le,"STRONG",{});var ra=s(V);L=i(ra,"Client Secret"),ra.forEach(a),ie=i(Le,`, you can
            enable and configure the provider from your PocketBase admin settings page.`),Le.forEach(a),at.forEach(a),I.forEach(a),k=h(u),S=r(u,"DIV",{class:!0});var ot=s(S);D=r(ot,"DIV",{class:!0});var rt=s(D);$=r(rt,"BUTTON",{class:!0});var st=s($);M=i(st,"All in one ("),ee=r(st,"EM",{});var sa=s(ee);le=i(sa,"recommended"),sa.forEach(a),R=i(st,")"),st.forEach(a),ce=h(rt),g=r(rt,"BUTTON",{class:!0});var na=s(g);ye=i(na,"Manual code exchange"),na.forEach(a),rt.forEach(a),he=h(ot),b=r(ot,"DIV",{class:!0});var nt=s(b);m=r(nt,"DIV",{class:!0});var _e=s(m);P=r(_e,"P",{});var ia=s(P);de=i(ia,`This method handles everything within a single call without having to define custom redirects,
                deeplinks or even page reload.`),ia.forEach(a),t=h(_e),l=r(_e,"P",{});var Xe=s(l);te=r(Xe,"STRONG",{});var Ft=s(te);Ie=i(Ft,`When creating your OAuth2 app, for a callback/redirect URL you have to use the
                    `),j=r(Ft,"CODE",{class:!0});var la=s(j);De=i(la,"https://yourdomain.com/api/oauth2-redirect"),la.forEach(a),Ft.forEach(a),ae=i(Xe,`
                (`),G=r(Xe,"EM",{});var it=s(G);xe=i(it,"or when testing locally - "),Ne=r(it,"CODE",{});var ca=s(Ne);pt=i(ca,"http://127.0.0.1:8090/api/oauth2-redirect"),ca.forEach(a),mt=h(it),it.forEach(a),ft=i(Xe,")."),Xe.forEach(a),vt=h(_e),Ue=r(_e,"DIV",{class:!0}),s(Ue).forEach(a),gt=h(_e),q(Oe.$$.fragment,_e),_e.forEach(a),bt=h(nt),_=r(nt,"DIV",{class:!0});var W=s(_);Ve=r(W,"P",{});var ha=s(Ve);_t=i(ha,"When authenticating manually with OAuth2 code you'll need 2 endpoints:"),ha.forEach(a),wt=h(W),Ae=r(W,"UL",{});var lt=s(Ae);Me=r(lt,"LI",{});var da=s(Me);$t=i(da,'somewhere to show the "Login with ..." links'),da.forEach(a),Et=h(lt),je=r(lt,"LI",{});var ua=s(je);kt=i(ua,"somewhere to handle the provider's redirect in order to exchange the auth code for token"),ua.forEach(a),lt.forEach(a),yt=h(W),Ge=r(W,"P",{});var pa=s(Ge);Ot=i(pa,"Here is a simple web example:"),pa.forEach(a),At=h(W),Se=r(W,"OL",{});var ct=s(Se);ue=r(ct,"LI",{class:!0});var ht=s(ue);pe=r(ht,"P",{});var Ze=s(pe);We=r(Ze,"STRONG",{});var ma=s(We);St=i(ma,"Links page"),ma.forEach(a),Pt=i(Ze,`
                        (eg. https://127.0.0.1:8090 serving `),Ye=r(Ze,"CODE",{});var fa=s(Ye);Tt=i(fa,"pb_public/index.html"),fa.forEach(a),It=i(Ze,"):"),Ze.forEach(a),Dt=h(ht),q(Pe.$$.fragment,ht),ht.forEach(a),xt=h(ct),me=r(ct,"LI",{class:!0});var dt=s(me);fe=r(dt,"P",{});var et=s(fe);ze=r(et,"STRONG",{});var va=s(ze);Ct=i(va,"Redirect handler page"),va.forEach(a),Bt=i(et,`
                        (eg. https://127.0.0.1:8090/redirect.html serving
                        `),qe=r(et,"CODE",{});var ga=s(qe);Lt=i(ga,"pb_public/redirect.html"),ga.forEach(a),Rt=i(et,"):"),et.forEach(a),Nt=h(dt),q(Te.$$.fragment,dt),dt.forEach(a),ct.forEach(a),Ut=h(W),ve=r(W,"DIV",{class:!0});var ut=s(ve);Ce=r(ut,"DIV",{class:!0});var ba=s(Ce);He=r(ba,"I",{class:!0}),s(He).forEach(a),ba.forEach(a),Vt=h(ut),Be=r(ut,"DIV",{class:!0});var _a=s(Be);T=r(_a,"P",{});var Y=s(T);Mt=i(Y,`When using the "Manual code exchange" flow for sign-in with Apple your redirect
                        handler must accept `),Je=r(Y,"CODE",{});var wa=s(Je);jt=i(wa,"POST"),wa.forEach(a),Gt=i(Y,` requests in order to receive the name and the
                        email of the Apple user. If you just need the Apple user id, you can keep the redirect
                        hanldler `),Ke=r(Y,"CODE",{});var $a=s(Ke);Wt=i($a,"GET"),$a.forEach(a),Yt=i(Y,` but you'll need to replace in the Apple authorization url
                        `),Fe=r(Y,"CODE",{});var Ea=s(Fe);zt=i(Ea,"response_mode=form_post"),Ea.forEach(a),qt=i(Y," with "),Qe=r(Y,"CODE",{});var ka=s(Qe);Ht=i(ka,"response_mode=query"),ka.forEach(a),Jt=i(Y,"."),Y.forEach(a),_a.forEach(a),ut.forEach(a),W.forEach(a),nt.forEach(a),ot.forEach(a),this.h()},h(){p(w,"class","ri-information-line"),p(y,"class","icon"),p(E,"class","ri-question-line link-hint"),p(O,"class","content"),p(d,"class","alert alert-info m-t-10 m-b-10"),p($,"class","tab-item active"),we($,"active",N[0]===Re),p(g,"class","tab-item active"),we(g,"active",N[0]===tt),p(D,"class","tabs-header compact left"),p(j,"class","txt-bold"),p(Ue,"class","clearfix m-b-xs"),p(m,"class","tab-item"),we(m,"active",N[0]===Re),p(ue,"class","m-b-xs"),p(me,"class","m-b-xs"),p(He,"class","ri-information-line"),p(Ce,"class","icon"),p(Be,"class","content"),p(ve,"class","alert alert-info m-t-xs"),p(_,"class","tab-item"),we(_,"active",N[0]===tt),p(b,"class","tabs-content"),p(S,"class","tabs")},m(u,I){v(u,d,I),e(d,y),e(y,w),e(d,oe),e(d,O),e(O,f),e(f,$e),e(f,Q),e(Q,Ee),e(f,ke),e(f,U),e(U,x),e(f,re),e(f,E),e(f,se),e(O,C),e(O,A),e(A,X),e(A,Z),e(Z,ne),e(A,B),e(A,V),e(V,L),e(A,ie),v(u,k,I),v(u,S,I),e(S,D),e(D,$),e($,M),e($,ee),e(ee,le),e($,R),e(D,ce),e(D,g),e(g,ye),e(S,he),e(S,b),e(b,m),e(m,P),e(P,de),e(m,t),e(m,l),e(l,te),e(te,Ie),e(te,j),e(j,De),e(l,ae),e(l,G),e(G,xe),e(G,Ne),e(Ne,pt),e(G,mt),e(l,ft),e(m,vt),e(m,Ue),e(m,gt),H(Oe,m,null),e(b,bt),e(b,_),e(_,Ve),e(Ve,_t),e(_,wt),e(_,Ae),e(Ae,Me),e(Me,$t),e(Ae,Et),e(Ae,je),e(je,kt),e(_,yt),e(_,Ge),e(Ge,Ot),e(_,At),e(_,Se),e(Se,ue),e(ue,pe),e(pe,We),e(We,St),e(pe,Pt),e(pe,Ye),e(Ye,Tt),e(pe,It),e(ue,Dt),H(Pe,ue,null),e(Se,xt),e(Se,me),e(me,fe),e(fe,ze),e(ze,Ct),e(fe,Bt),e(fe,qe),e(qe,Lt),e(fe,Rt),e(me,Nt),H(Te,me,null),e(_,Ut),e(_,ve),e(ve,Ce),e(Ce,He),e(ve,Vt),e(ve,Be),e(Be,T),e(T,Mt),e(T,Je),e(Je,jt),e(T,Gt),e(T,Ke),e(Ke,Wt),e(T,Yt),e(T,Fe),e(Fe,zt),e(T,qt),e(T,Qe),e(Qe,Ht),e(T,Jt),ge=!0,Kt||(Zt=[Ta(Ca.call(null,E,`For the "All in one" flow it should be 
https://yourdomain.com/api/oauth2-redirect.

For the "Manual code exchange" flow, the redirect URL is your own custom endpoint.`)),ya($,"click",N[1]),ya(g,"click",N[2])],Kt=!0)},p(u,[I]){(!ge||I&1)&&we($,"active",u[0]===Re),(!ge||I&1)&&we(g,"active",u[0]===tt),(!ge||I&1)&&we(m,"active",u[0]===Re),(!ge||I&1)&&we(_,"active",u[0]===tt)},i(u){ge||(J(Oe.$$.fragment,u),J(Pe.$$.fragment,u),J(Te.$$.fragment,u),ge=!0)},o(u){K(Oe.$$.fragment,u),K(Pe.$$.fragment,u),K(Te.$$.fragment,u),ge=!1},d(u){u&&a(d),u&&a(k),u&&a(S),F(Oe),F(Pe),F(Te),Kt=!1,Ia(Zt)}}}const Re="all_in_one",tt="manual";function Na(N,d,y){let w=Re;return[w,()=>y(0,w=Re),()=>y(0,w=tt)]}class Ua extends Aa{constructor(d){super(),Sa(this,d,Na,Ra,Pa,{})}}function Va(N){let d,y,w,oe,O,f,$e,Q,Ee,ke,U,x,re,E,se,C,A,X,Z,ne,B,V,L,ie,k,S,D,$,M,ee,le,R,ce,g,ye,he,b,m,P,de;return x=new xa({}),E=new Qt({props:{title:"Authenticate as admin"}}),B=new Xt({props:{class:"m-b-sm",js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('http://127.0.0.1:8090');

        ...

        const authData = await pb.admins.authWithPassword('test@example.com', '1234567890');

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);

        // "logout" the last authenticated account
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('http://127.0.0.1:8090');

        ...

        final authData = await pb.admins.authWithPassword('test@example.com', '1234567890');

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.model.id);

        // "logout" the last authenticated account
        pb.authStore.clear();
    `}}),L=new Qt({props:{title:"Authenticate as app user"}}),R=new Xt({props:{class:"m-b-sm",js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('https://pocketbase.io');

        ...

        const authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);

        // "logout" the last authenticated model
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('https://pocketbase.io');

        ...

        final authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.model.id);

        // "logout" the last authenticated model
        pb.authStore.clear();
    `}}),b=new Qt({props:{title:"OAuth2 integration"}}),P=new Ua({}),{c(){d=o("p"),y=n("The PocketBase API uses JWT for authentication via the "),w=o("code"),oe=n("Authorization"),O=n(` HTTP header:
    `),f=o("code"),$e=n("Authorization: TOKEN"),Q=n(`.
    `),Ee=o("br"),ke=n(`
    You can also use the dedicated auth SDK helpers as shown in the examples below.`),U=c(),z(x.$$.fragment),re=c(),z(E.$$.fragment),se=c(),C=o("p"),A=n(`You can authenticate as admin using an email and password.
    `),X=o("strong"),Z=n("Admins can access everything and API rules don't apply to them."),ne=c(),z(B.$$.fragment),V=c(),z(L.$$.fragment),ie=c(),k=o("p"),S=n(`The easiest way to authenticate your app users is with their username/email and password.
    `),D=o("br"),$=c(),M=o("em"),ee=n(`You can customize the supported authentication options from your Auth collection configuration
        (including disabling all auth options).`),le=c(),z(R.$$.fragment),ce=c(),g=o("p"),ye=n(`You can also authenticate your users with an OAuth2 provider (Google, GitHub, Microsoft, etc.). See the
    section below for an example OAuth2 web integration.`),he=c(),z(b.$$.fragment),m=c(),z(P.$$.fragment),this.h()},l(t){d=r(t,"P",{});var l=s(d);y=i(l,"The PocketBase API uses JWT for authentication via the "),w=r(l,"CODE",{});var te=s(w);oe=i(te,"Authorization"),te.forEach(a),O=i(l,` HTTP header:
    `),f=r(l,"CODE",{});var Ie=s(f);$e=i(Ie,"Authorization: TOKEN"),Ie.forEach(a),Q=i(l,`.
    `),Ee=r(l,"BR",{}),ke=i(l,`
    You can also use the dedicated auth SDK helpers as shown in the examples below.`),l.forEach(a),U=h(t),q(x.$$.fragment,t),re=h(t),q(E.$$.fragment,t),se=h(t),C=r(t,"P",{});var j=s(C);A=i(j,`You can authenticate as admin using an email and password.
    `),X=r(j,"STRONG",{});var De=s(X);Z=i(De,"Admins can access everything and API rules don't apply to them."),De.forEach(a),j.forEach(a),ne=h(t),q(B.$$.fragment,t),V=h(t),q(L.$$.fragment,t),ie=h(t),k=r(t,"P",{});var ae=s(k);S=i(ae,`The easiest way to authenticate your app users is with their username/email and password.
    `),D=r(ae,"BR",{}),$=h(ae),M=r(ae,"EM",{class:!0});var G=s(M);ee=i(G,`You can customize the supported authentication options from your Auth collection configuration
        (including disabling all auth options).`),G.forEach(a),ae.forEach(a),le=h(t),q(R.$$.fragment,t),ce=h(t),g=r(t,"P",{});var xe=s(g);ye=i(xe,`You can also authenticate your users with an OAuth2 provider (Google, GitHub, Microsoft, etc.). See the
    section below for an example OAuth2 web integration.`),xe.forEach(a),he=h(t),q(b.$$.fragment,t),m=h(t),q(P.$$.fragment,t),this.h()},h(){p(M,"class","txt-hint")},m(t,l){v(t,d,l),e(d,y),e(d,w),e(w,oe),e(d,O),e(d,f),e(f,$e),e(d,Q),e(d,Ee),e(d,ke),v(t,U,l),H(x,t,l),v(t,re,l),H(E,t,l),v(t,se,l),v(t,C,l),e(C,A),e(C,X),e(X,Z),v(t,ne,l),H(B,t,l),v(t,V,l),H(L,t,l),v(t,ie,l),v(t,k,l),e(k,S),e(k,D),e(k,$),e(k,M),e(M,ee),v(t,le,l),H(R,t,l),v(t,ce,l),v(t,g,l),e(g,ye),v(t,he,l),H(b,t,l),v(t,m,l),H(P,t,l),de=!0},p:Da,i(t){de||(J(x.$$.fragment,t),J(E.$$.fragment,t),J(B.$$.fragment,t),J(L.$$.fragment,t),J(R.$$.fragment,t),J(b.$$.fragment,t),J(P.$$.fragment,t),de=!0)},o(t){K(x.$$.fragment,t),K(E.$$.fragment,t),K(B.$$.fragment,t),K(L.$$.fragment,t),K(R.$$.fragment,t),K(b.$$.fragment,t),K(P.$$.fragment,t),de=!1},d(t){t&&a(d),t&&a(U),F(x,t),t&&a(re),F(E,t),t&&a(se),t&&a(C),t&&a(ne),F(B,t),t&&a(V),F(L,t),t&&a(ie),t&&a(k),t&&a(le),F(R,t),t&&a(ce),t&&a(g),t&&a(he),F(b,t),t&&a(m),F(P,t)}}}class qa extends Aa{constructor(d){super(),Sa(this,d,null,Va,Pa,{})}}export{qa as component};
