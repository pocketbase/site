function b(){}const tt=t=>t;function xt(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function X(){return Object.create(null)}function v(t){t.forEach(et)}function P(t){return typeof t=="function"}function Qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Ut(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function $t(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Vt(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Xt(t,e,n,i){if(t){const s=nt(t,e,n,i);return t[0](s)}}function nt(t,e,n,i){return t[1]&&i?xt(n.ctx.slice(),t[1](i(e))):n.ctx}function Yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Zt(t,e,n,i,s,c){if(s){const r=nt(e,n,i,c);t.p(r,s)}}function te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ee(t){return t&&P(t.destroy)?t.destroy:b}function ne(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const it=typeof window<"u";let st=it?()=>window.performance.now():()=>Date.now(),K=it?t=>requestAnimationFrame(t):b;const A=new Set;function rt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&K(rt)}function ct(t){let e;return A.size===0&&K(rt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}const ie=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let H=!1;function vt(){H=!0}function Et(){H=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:kt(1,s,_=>e[n[_]].claim_order,a))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[o],f)}}function At(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=at("style");return jt(ot(t),e),e.sheet}function jt(t,e){return At(t.head||t,e),e.sheet}function Ct(t,e){if(H){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function se(t,e,n){H&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function ce(){return Q(" ")}function oe(){return Q("")}function le(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ae(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ue(t){return function(e){e.target===this&&t.call(this,e)}}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Dt=["width","height"];function Ot(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Dt.indexOf(i)===-1?t[i]=e[i]:ut(t,i,e[i])}function Mt(t,e){Object.keys(e).forEach(n=>{Tt(t,n,e[n])})}function Tt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:ut(t,e,n)}function fe(t){return/-/.test(t)?Mt:Ot}function Pt(t){return Array.from(t.childNodes)}function Rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){Rt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function qt(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function _e(t,e,n){return qt(t,e,n,at)}function Lt(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function de(t){return Lt(t," ")}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function ge(t,e){return new t(e)}const z=new Map;let B=0;function zt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:St(e),rules:{}};return z.set(t,n),n}function dt(t,e,n,i,s,c,r,l=0){const o=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*c(p);a+=p*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${zt(f)}_${l}`,_=ot(t),{stylesheet:h,rules:d}=z.get(_)||Bt(_,t);d[u]||(d[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,B+=1,u}function I(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Ft())}function Ft(){K(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&lt(e)}),z.clear())})}let M;function O(t){M=t}function U(){if(!M)throw new Error("Function called outside component initialization");return M}function we(t){U().$$.on_mount.push(t)}function xe(t){U().$$.after_update.push(t)}function $e(){const t=U();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const N=[],Y=[];let S=[];const Z=[],ht=Promise.resolve();let J=!1;function mt(){J||(J=!0,ht.then(pt))}function be(){return mt(),ht}function T(t){S.push(t)}const G=new Set;let k=0;function pt(){if(k!==0)return;const t=M;do{try{for(;k<N.length;){const e=N[k];k++,O(e),Ht(e.$$)}}catch(e){throw N.length=0,k=0,e}for(O(null),N.length=0,k=0;Y.length;)Y.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];G.has(n)||(G.add(n),n())}S.length=0}while(N.length);for(;Z.length;)Z.pop()();J=!1,G.clear(),O(t)}function Ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function Wt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let D;function yt(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function F(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const L=new Set;let $;function ve(){$={r:0,c:[],p:$}}function Ee(){$.r||v($.c),$=$.p}function gt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Gt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),$.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const wt={duration:0};function ke(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,l,o=0;function a(){r&&I(t,r)}function f(){const{delay:_=0,duration:h=300,easing:d=tt,tick:g=b,css:p}=s||wt;p&&(r=dt(t,0,1,h,_,d,p,o++)),g(0,1);const y=st()+_,j=y+h;l&&l.abort(),c=!0,T(()=>F(t,!0,"start")),l=ct(E=>{if(c){if(E>=j)return g(1,0),F(t,!0,"end"),a(),c=!1;if(E>=y){const C=d((E-y)/h);g(C,1-C)}}return c})}let u=!1;return{start(){u||(u=!0,I(t),P(s)?(s=s(i),yt().then(f)):f())},invalidate(){u=!1},end(){c&&(a(),c=!1)}}}function Ne(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const l=$;l.r+=1;function o(){const{delay:a=0,duration:f=300,easing:u=tt,tick:_=b,css:h}=s||wt;h&&(r=dt(t,1,0,f,a,u,h));const d=st()+a,g=d+f;T(()=>F(t,!1,"start")),ct(p=>{if(c){if(p>=g)return _(0,1),F(t,!1,"end"),--l.r||v(l.c),!1;if(p>=d){const y=u((p-d)/f);_(1-y,y)}}return c})}return P(s)?yt().then(()=>{s=s(i),o()}):o(),{end(a){a&&s.tick&&s.tick(1,0),c&&(r&&I(t,r),c=!1)}}}function Ae(t,e){t.d(1),e.delete(t.key)}function Se(t,e){Gt(t,1,1,()=>{e.delete(t.key)})}function je(t,e,n,i,s,c,r,l,o,a,f,u){let _=t.length,h=c.length,d=_;const g={};for(;d--;)g[t[d].key]=d;const p=[],y=new Map,j=new Map,E=[];for(d=h;d--;){const m=u(s,c,d),w=n(m);let x=r.get(w);x?i&&E.push(()=>x.p(m,e)):(x=a(w,m),x.c()),y.set(w,p[d]=x),w in g&&j.set(w,Math.abs(d-g[w]))}const C=new Set,V=new Set;function W(m){gt(m,1),m.m(l,f),r.set(m.key,m),f=m.first,h--}for(;_&&h;){const m=p[h-1],w=t[_-1],x=m.key,R=w.key;m===w?(f=m.first,_--,h--):y.has(R)?!r.has(x)||C.has(x)?W(m):V.has(R)?_--:j.get(x)>j.get(R)?(V.add(x),W(m)):(C.add(R),_--):(o(w,r),_--)}for(;_--;){const m=t[_];y.has(m.key)||o(m,r)}for(;h;)W(p[h-1]);return v(E),p}function Ce(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function De(t){t&&t.c()}function Oe(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||T(()=>{const r=t.$$.on_mount.map(et).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),c.forEach(T)}function Jt(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Kt(t,e){t.$$.dirty[0]===-1&&(N.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Me(t,e,n,i,s,c,r,l=[-1]){const o=M;O(t);const a=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:X(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...h)=>{const d=h.length?h[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),f&&Kt(t,u)),_}):[],a.update(),f=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){vt();const u=Pt(e.target);a.fragment&&a.fragment.l(u),u.forEach(lt)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),Et(),pt()}O(o)}class Te{$destroy(){Jt(this,1),this.$destroy=b}$on(e,n){if(!P(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,It as A,Jt as B,Xt as C,Zt as D,te as E,Yt as F,Ct as G,b as H,Vt as I,T as J,pe as K,le as L,v as M,je as N,Se as O,ye as P,ae as Q,Ae as R,Te as S,Ut as T,ee as U,re as V,ne as W,$e as X,ke as Y,Ne as Z,P as _,ce as a,xt as a0,fe as a1,Ce as a2,ie as a3,se as b,de as c,Gt as d,oe as e,Ee as f,gt as g,lt as h,Me as i,xe as j,at as k,_e as l,Pt as m,ut as n,we as o,me as p,Q as q,Lt as r,Qt as s,be as t,he as u,ve as v,Y as w,ge as x,De as y,Oe as z};