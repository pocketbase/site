import{S as ie,i as de,s as pe,k as s,q as r,a as w,y as ae,l as m,m as l,r as c,h as t,c as x,z as oe,n as v,b as d,G as a,A as ne,H as fe,g as se,d as re,B as me}from"../chunks/index.a7566c1a.js";import{C as le}from"../chunks/CodeBlock.a090ee9b.js";function ue(ce){let n,B,k,K,S,b,T,Y,p,j,z,P,_,G,g,f,H,$,F,I,u,O,i,C,y,J,E,h,L,D,M,N,V;return f=new le({props:{language:"go",content:`
        $app.rootCmd.addCommand(new Command({
            use: "hello",
            run: (cmd, args) => {
                console.log("Hello world!")
            },
        }))
    `}}),u=new le({props:{language:"html",content:`
        ./pocketbase hello
    `}}),{c(){n=s("p"),B=r(`You can register custom console commands using
    `),k=s("code"),K=r("app.rootCmd.addCommand(cmd)"),S=r(", where "),b=s("code"),T=r("cmd"),Y=r(` is a
    `),p=s("a"),j=r("Command"),z=r(" instance."),P=w(),_=s("p"),G=r("Here is an example:"),g=w(),ae(f.$$.fragment),H=w(),$=s("p"),F=r("To run the command you can execute:"),I=w(),ae(u.$$.fragment),O=w(),i=s("div"),C=s("div"),y=s("i"),J=w(),E=s("div"),h=s("p"),L=r(`Keep in mind that the console commands execute in their own separate app process and run
            independently from the main `),D=s("code"),M=r("serve"),N=r(` command (aka. hook events between different processes
            are not shared with one another).`),this.h()},l(e){n=m(e,"P",{});var o=l(n);B=c(o,`You can register custom console commands using
    `),k=m(o,"CODE",{});var Q=l(k);K=c(Q,"app.rootCmd.addCommand(cmd)"),Q.forEach(t),S=c(o,", where "),b=m(o,"CODE",{});var R=l(b);T=c(R,"cmd"),R.forEach(t),Y=c(o,` is a
    `),p=m(o,"A",{href:!0,target:!0,rel:!0});var U=l(p);j=c(U,"Command"),U.forEach(t),z=c(o," instance."),o.forEach(t),P=x(e),_=m(e,"P",{});var W=l(_);G=c(W,"Here is an example:"),W.forEach(t),g=x(e),oe(f.$$.fragment,e),H=x(e),$=m(e,"P",{});var X=l($);F=c(X,"To run the command you can execute:"),X.forEach(t),I=x(e),oe(u.$$.fragment,e),O=x(e),i=m(e,"DIV",{class:!0});var q=l(i);C=m(q,"DIV",{class:!0});var Z=l(C);y=m(Z,"I",{class:!0}),l(y).forEach(t),Z.forEach(t),J=x(q),E=m(q,"DIV",{class:!0});var ee=l(E);h=m(ee,"P",{});var A=l(h);L=c(A,`Keep in mind that the console commands execute in their own separate app process and run
            independently from the main `),D=m(A,"CODE",{});var te=l(D);M=c(te,"serve"),te.forEach(t),N=c(A,` command (aka. hook events between different processes
            are not shared with one another).`),A.forEach(t),ee.forEach(t),q.forEach(t),this.h()},h(){v(p,"href","/jsvm/classes/Command.html"),v(p,"target","_blank"),v(p,"rel","noopener noreferrer"),v(y,"class","ri-information-line"),v(C,"class","icon"),v(E,"class","content"),v(i,"class","alert alert-info m-t-sm m-b-sm")},m(e,o){d(e,n,o),a(n,B),a(n,k),a(k,K),a(n,S),a(n,b),a(b,T),a(n,Y),a(n,p),a(p,j),a(n,z),d(e,P,o),d(e,_,o),a(_,G),d(e,g,o),ne(f,e,o),d(e,H,o),d(e,$,o),a($,F),d(e,I,o),ne(u,e,o),d(e,O,o),d(e,i,o),a(i,C),a(C,y),a(i,J),a(i,E),a(E,h),a(h,L),a(h,D),a(D,M),a(h,N),V=!0},p:fe,i(e){V||(se(f.$$.fragment,e),se(u.$$.fragment,e),V=!0)},o(e){re(f.$$.fragment,e),re(u.$$.fragment,e),V=!1},d(e){e&&t(n),e&&t(P),e&&t(_),e&&t(g),me(f,e),e&&t(H),e&&t($),e&&t(I),me(u,e),e&&t(O),e&&t(i)}}}class _e extends ie{constructor(n){super(),de(this,n,null,ue,pe,{})}}export{_e as component};
