import{S as R,i as U,s as W,k as E,q as A,a as w,y as C,e as T,l as O,m as P,r as H,h as _,c as j,z as y,b as $,G as b,A as D,g as d,f as F,d as v,B as J,V as G,n as M,v as N,H as X}from"../chunks/index.a7566c1a.js";import{T as Z}from"../chunks/Toc.c31a36b6.js";import{C as ee}from"../chunks/CodeBlock.a090ee9b.js";import{A as te}from"../chunks/Accordion.71344b00.js";import{H as oe}from"../chunks/HeadingLink.20322812.js";import{e as q}from"../chunks/event_hooks.779c0ddc.js";function I(p,t,s){const e=p.slice();return e[0]=t[s][0],e[1]=t[s][1],e}function L(p,t,s){const e=p.slice();return e[4]=t[s][0],e[5]=t[s][1],e}function le(p){let t,s;return t=new te({props:{single:!0,title:K(p[4]),$$slots:{default:[re]},$$scope:{ctx:p}}}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,l){D(t,e,l),s=!0},p(e,l){const h={};l&256&&(h.$$scope={dirty:l,ctx:e}),t.$set(h)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){J(t,e)}}}function re(p){let t,s=K(p[5].html)+"",e,l,h;return l=new ee({props:{language:"javascript",content:p[5].js}}),{c(){t=E("div"),e=w(),C(l.$$.fragment),this.h()},l(i){t=O(i,"DIV",{class:!0});var n=P(t);n.forEach(_),e=j(i),y(l.$$.fragment,i),this.h()},h(){M(t,"class","content m-b-sm")},m(i,n){$(i,t,n),t.innerHTML=s,$(i,e,n),D(l,i,n),h=!0},p:X,i(i){h||(d(l.$$.fragment,i),h=!0)},o(i){v(l.$$.fragment,i),h=!1},d(i){i&&_(t),i&&_(e),J(l,i)}}}function Y(p){let t,s,e=p[5].js&&le(p);return{c(){e&&e.c(),t=T()},l(l){e&&e.l(l),t=T()},m(l,h){e&&e.m(l,h),$(l,t,h),s=!0},p(l,h){l[5].js&&e.p(l,h)},i(l){s||(d(e),s=!0)},o(l){v(e),s=!1},d(l){e&&e.d(l),l&&_(t)}}}function z(p){let t,s,e,l,h;t=new oe({props:{title:p[0]}});let i=Object.entries(p[1]),n=[];for(let r=0;r<i.length;r+=1)n[r]=Y(L(p,i,r));const x=r=>v(n[r],1,1,()=>{n[r]=null});return{c(){C(t.$$.fragment),s=w(),e=E("div");for(let r=0;r<n.length;r+=1)n[r].c();l=w(),this.h()},l(r){y(t.$$.fragment,r),s=j(r),e=O(r,"DIV",{class:!0});var c=P(e);for(let a=0;a<n.length;a+=1)n[a].l(c);l=j(c),c.forEach(_),this.h()},h(){M(e,"class","accordions")},m(r,c){D(t,r,c),$(r,s,c),$(r,e,c);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);b(e,l),h=!0},p(r,c){if(c&0){i=Object.entries(r[1]);let a;for(a=0;a<i.length;a+=1){const g=L(r,i,a);n[a]?(n[a].p(g,c),d(n[a],1)):(n[a]=Y(g),n[a].c(),d(n[a],1),n[a].m(e,l))}for(N(),a=i.length;a<n.length;a+=1)x(a);F()}},i(r){if(!h){d(t.$$.fragment,r);for(let c=0;c<i.length;c+=1)d(n[c]);h=!0}},o(r){v(t.$$.fragment,r),n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)v(n[c]);h=!1},d(r){J(t,r),r&&_(s),r&&_(e),G(n,r)}}}function ne(p){let t,s,e,l,h,i,n,x,r,c,a,g,S;c=new Z({});let k=Object.entries(q),u=[];for(let o=0;o<k.length;o+=1)u[o]=z(I(p,k,o));const Q=o=>v(u[o],1,1,()=>{u[o]=null});return{c(){t=E("p"),s=A(`You can extend the default PocketBase behavior with custom server-side code using the exposed JavaScript
    app level hooks.`),e=w(),l=E("p"),h=A("Throwing an error or returning "),i=E("code"),n=A("false"),x=A(" inside a hook handler function stops the hook execution chain."),r=w(),C(c.$$.fragment),a=w();for(let o=0;o<u.length;o+=1)u[o].c();g=T()},l(o){t=O(o,"P",{});var m=P(t);s=H(m,`You can extend the default PocketBase behavior with custom server-side code using the exposed JavaScript
    app level hooks.`),m.forEach(_),e=j(o),l=O(o,"P",{});var f=P(l);h=H(f,"Throwing an error or returning "),i=O(f,"CODE",{});var B=P(i);n=H(B,"false"),B.forEach(_),x=H(f," inside a hook handler function stops the hook execution chain."),f.forEach(_),r=j(o),y(c.$$.fragment,o),a=j(o);for(let V=0;V<u.length;V+=1)u[V].l(o);g=T()},m(o,m){$(o,t,m),b(t,s),$(o,e,m),$(o,l,m),b(l,h),b(l,i),b(i,n),b(l,x),$(o,r,m),D(c,o,m),$(o,a,m);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(o,m);$(o,g,m),S=!0},p(o,[m]){if(m&0){k=Object.entries(q);let f;for(f=0;f<k.length;f+=1){const B=I(o,k,f);u[f]?(u[f].p(B,m),d(u[f],1)):(u[f]=z(B),u[f].c(),d(u[f],1),u[f].m(g.parentNode,g))}for(N(),f=k.length;f<u.length;f+=1)Q(f);F()}},i(o){if(!S){d(c.$$.fragment,o);for(let m=0;m<k.length;m+=1)d(u[m]);S=!0}},o(o){v(c.$$.fragment,o),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)v(u[m]);S=!1},d(o){o&&_(t),o&&_(e),o&&_(l),o&&_(r),J(c,o),o&&_(a),G(u,o),o&&_(g)}}}function K(p){return p.replaceAll(/On(\w+.*)/gm,"on$1").replaceAll("hook.StopPropagation","false")}class me extends R{constructor(t){super(),U(this,t,null,ne,W,{})}}export{me as component};