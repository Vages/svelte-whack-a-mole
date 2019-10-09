var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function a(t,e,n=e){return t.set(n),e}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),f=l?t=>requestAnimationFrame(t):t;const d=new Set;let m,p=!1;function h(){d.forEach(t=>{t[0](u())||(d.delete(t),t[1]())}),(p=d.size>0)&&f(h)}function $(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function C(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let _,M=0,k={};function E(t,e,n,r,o,s,c,i=0){const a=16.666/r;let l="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*s(t);l+=100*t+`%{${c(r,1-r)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`;if(!k[f]){if(!m){const t=y("style");document.head.appendChild(t),m=t.sheet}k[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${o}ms 1 both`,M+=1,f}function O(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--M&&f(()=>{if(M)return;let t=m.cssRules.length;for(;t--;)m.deleteRule(t);k={}})}function L(t){_=t}function I(t){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.on_destroy.push(t)}function A(){const t=_;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=T(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const j=[],G=[],N=[],P=[],R=Promise.resolve();let H,z=!1;function B(t){N.push(t)}function q(){const t=new Set;do{for(;j.length;){const t=j.shift();L(t),D(t.$$)}for(;G.length;)G.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];t.has(n)||(n(),t.add(n))}N.length=0}while(j.length);for(;P.length;)P.pop()();z=!1}function D(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(B))}function F(t,e,n){t.dispatchEvent(T(`${e?"intro":"outro"}${n}`))}const K=new Set;let V;function Z(){V={r:0,c:[],p:V}}function J(){V.r||o(V.c),V=V.p}function Q(t,e){t&&t.i&&(K.delete(t),t.i(e))}function U(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),V.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const W={duration:0};function X(n,r,c,i){let a=r(n,c),l=i?0:1,m=null,$=null,g=null;function v(){g&&O(n,g)}function y(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:s=0,duration:c=300,easing:i=e,tick:b=t,css:x}=a||W,C={start:u()+s,b:r};r||(C.group=V,V.r+=1),m?$=C:(x&&(v(),g=E(n,l,r,c,s,i,x)),r&&b(0,1),m=y(C,c),B(()=>F(n,r,"start")),function(t){let e;p||(p=!0,f(h)),new Promise(n=>{d.add(e=[t,n])})}(t=>{if($&&t>$.start&&(m=y($,c),$=null,F(n,m.b,"start"),x&&(v(),g=E(n,l,m.b,m.duration,0,i,a.css))),m)if(t>=m.end)b(l=m.b,1-l),F(n,m.b,"end"),$||(m.b?v():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;l=m.a+m.d*i(e/m.duration),b(l,1-l)}return!(!m&&!$)}))}return{run(t){s(a)?(H||(H=Promise.resolve()).then(()=>{H=null}),H).then(()=>{a=a(),b(t)}):b(t)},end(){v(),m=$=null}}}function Y(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c.m(e,r),B(()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(B)}function tt(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function et(t,e){t.$$.dirty||(j.push(t),z||(z=!0,R.then(q)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function nt(e,n,s,c,i,a){const l=_;L(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var m;f.ctx=s?s(e,u,(t,n,r=n)=>(f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&et(e,t)),n)):u,f.update(),d=!0,o(f.before_update),f.fragment=c(f.ctx),n.target&&(n.hydrate?f.fragment.l((m=n.target,Array.from(m.childNodes))):f.fragment.c(),n.intro&&Q(e.$$.fragment),Y(e,n.target,n.anchor),q()),L(l)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ot(t){const e=t-1;return e*e*e+1}function st(t,{delay:e=0,duration:n=400,easing:r=ot,x:o=0,y:s=0,opacity:c=0}){const i=getComputedStyle(t),a=+i.opacity,l="none"===i.transform?"":i.transform,u=a*(1-c);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*o}px, ${(1-t)*s}px);\n\t\t\topacity: ${a-u*e}`}}const ct=[];var it=function(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!ct.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ct.push(n,e)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}(0);function at(t,e,n){const r=Object.create(t);return r.position=e[n],r}function lt(t){var e,n,r,o;return{c(){(e=y("button")).innerHTML='<img alt="Mus" src="mouse-face.png" class="svelte-1yax569">',w(e,"class","mouse svelte-1yax569"),o=C(e,"click",t.whackMouse(t.position))},m(t,n){g(t,e,n),r=!0},p(e,n){t=n},i(t){r||(B(()=>{n||(n=X(e,st,{y:80,opacity:100},!0)),n.run(1)}),r=!0)},o(t){n||(n=X(e,st,{y:80,opacity:100},!1)),n.run(0),r=!1},d(t){t&&(v(e),n&&n.end()),o()}}}function ut(t){var e,n,r,o,s,c=t.mice.has(t.position),i=c&&lt(t);return{c(){e=y("div"),n=y("div"),r=x(),i&&i.c(),o=x(),w(n,"class","hole svelte-1yax569"),w(e,"class","cell svelte-1yax569")},m(t,c){g(t,e,c),$(e,n),$(e,r),i&&i.m(e,null),$(e,o),s=!0},p(t,n){t.mice&&(c=n.mice.has(n.position)),c?i?Q(i,1):((i=lt(n)).c(),Q(i,1),i.m(e,o)):i&&(Z(),U(i,1,1,()=>{i=null}),J())},i(t){s||(Q(i),s=!0)},o(t){U(i),s=!1},d(t){t&&v(e),i&&i.d()}}}function ft(t){var e,n,r,o,s,c,i,a,l,u,f,d,m,p,h,C,T,_;let M=t.POSITIONS,k=[];for(let e=0;e<M.length;e+=1)k[e]=ut(at(t,M,e));const E=t=>U(k[t],1,1,()=>{k[t]=null});return{c(){(e=y("h1")).textContent="Mos ei mus!",n=x(),r=y("div"),o=y("div"),s=y("div");for(let t=0;t<k.length;t+=1)k[t].c();c=x(),i=y("div"),a=y("div"),l=x(),u=y("div"),f=y("div"),d=b("Tid: "),m=b(t.remainingTime),p=x(),h=y("div"),C=b("Score: "),T=b(t.$score),w(e,"class","svelte-1yax569"),w(s,"class","top svelte-1yax569"),w(a,"class","timer-bar svelte-1yax569"),w(f,"class","svelte-1yax569"),w(h,"class","score svelte-1yax569"),w(u,"class","game-data svelte-1yax569"),w(i,"class","front svelte-1yax569"),w(o,"class","cheese svelte-1yax569"),w(r,"class","the-perspective svelte-1yax569")},m(t,v){g(t,e,v),g(t,n,v),g(t,r,v),$(r,o),$(o,s);for(let t=0;t<k.length;t+=1)k[t].m(s,null);$(o,c),$(o,i),$(i,a),$(i,l),$(i,u),$(u,f),$(f,d),$(f,m),$(u,p),$(u,h),$(h,C),$(h,T),_=!0},p(t,e){if(t.mice||t.POSITIONS){let n;for(M=e.POSITIONS,n=0;n<M.length;n+=1){const r=at(e,M,n);k[n]?(k[n].p(t,r),Q(k[n],1)):(k[n]=ut(r),k[n].c(),Q(k[n],1),k[n].m(s,null))}for(Z(),n=M.length;n<k.length;n+=1)E(n);J()}_&&!t.remainingTime||S(m,e.remainingTime),_&&!t.$score||S(T,e.$score)},i(t){if(!_){for(let t=0;t<M.length;t+=1)Q(k[t]);_=!0}},o(t){k=k.filter(Boolean);for(let t=0;t<k.length;t+=1)U(k[t]);_=!1},d(t){t&&(v(e),v(n),v(r)),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t)}}}const dt=16,mt=5e3;function pt(t,e,n){let r;i(t,it,t=>{n("$score",r=t)});const o=A();let s=30;const c=[...Array(dt).keys()];let l=new Set([]);const u=t=>()=>{l.delete(t),n("mice",l)},f=setInterval(()=>{const t=Math.floor(Math.random()*dt);l.add(t);const e=Math.floor(Math.random()*mt);setTimeout(u(t),e),n("mice",l)},1e3),d=setInterval(()=>{n("remainingTime",s-=1)},1e3);return I(()=>{clearInterval(f),clearInterval(d)}),t.$$.update=((t={remainingTime:1})=>{t.remainingTime&&s<1&&o("game-end")}),{remainingTime:s,POSITIONS:c,mice:l,whackMouse:t=>()=>{l.delete(t),a(it,r+=1),n("mice",l)},$score:r}}class ht extends rt{constructor(t){super(),nt(this,t,pt,ft,c,[])}}function $t(e){var n,r,o,s,c;return{c(){n=y("div"),(r=y("div")).innerHTML='<div class="presenting svelte-1blf9s3">Knowit presenterer</div> <h1 class="game-name svelte-1blf9s3"><img alt="Mus" src="mouse-face.png" class="svelte-1blf9s3">\n\t\t\t      Mos ei mus\n\t\t\t    </h1>',o=x(),(s=y("button")).textContent="Start spill",w(s,"class","main-button"),w(n,"class","container svelte-1blf9s3"),c=C(s,"click",e.pressStart)},m(t,e){g(t,n,e),$(n,r),$(n,o),$(n,s)},p:t,i:t,o:t,d(t){t&&v(n),c()}}}function gt(t){const e=A();return{pressStart:()=>{e("start")}}}class vt extends rt{constructor(t){super(),nt(this,t,gt,$t,c,[])}}function yt(e){var n,r,o,s,c,i,a,l,u,f,d,m,p;return{c(){n=y("div"),r=y("div"),(o=y("h1")).textContent="Gratulerer!",s=x(),c=y("div"),i=b("Du klarte å mose "),a=b(e.score),l=b(" mus!"),u=x(),(f=y("div")).innerHTML='\n\t\t\t    Lyst på sommerjobb eller fast jobb i Knowit?\n\t\t\t    <br>\n\t\t\t    Send en enkel e-post til\n\t\t\t    <a href="hei@knowit.no" class="svelte-16hidyi">hei@knowit.no</a>',d=x(),(m=y("button")).textContent="Spill igjen",w(o,"class","svelte-16hidyi"),w(c,"class","score svelte-16hidyi"),w(m,"class","main-button"),w(n,"class","container svelte-16hidyi"),p=C(m,"click",e.pressRestart)},m(t,e){g(t,n,e),$(n,r),$(r,o),$(r,s),$(r,c),$(c,i),$(c,a),$(c,l),$(n,u),$(n,f),$(n,d),$(n,m)},p(t,e){t.score&&S(a,e.score)},i:t,o:t,d(t){t&&v(n),p()}}}function bt(t,e,n){let{score:r}=e;const o=A();return t.$set=(t=>{"score"in t&&n("score",r=t.score)}),{score:r,pressRestart:()=>{o("restart")}}}class xt extends rt{constructor(t){super(),nt(this,t,bt,yt,c,["score"])}}function Ct(e){var n;return{c(){(n=y("a")).innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0;\n\t\t\t    right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6\n\t\t\t      120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3\n\t\t\t      125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-9fn96p"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6\n\t\t\t      C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0\n\t\t\t      C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1\n\t\t\t      C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4\n\t\t\t      C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9\n\t\t\t      C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5\n\t\t\t      C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9\n\t\t\t      L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',w(n,"href","https://github.com/Vages/svelte-whack-a-mole"),w(n,"class","github-corner svelte-9fn96p"),w(n,"aria-label","View source on GitHub")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class wt extends rt{constructor(t){super(),nt(this,t,null,Ct,c,[])}}function St(t){var e,n=new xt({props:{score:t.$score}});return n.$on("restart",t.restartGame),{c(){n.$$.fragment.c()},m(t,r){Y(n,t,r),e=!0},p(t,e){var r={};t.$score&&(r.score=e.$score),n.$set(r)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){U(n.$$.fragment,t),e=!1},d(t){tt(n,t)}}}function Tt(e){var n,r=new ht({});return r.$on("game-end",e.endGame),{c(){r.$$.fragment.c()},m(t,e){Y(r,t,e),n=!0},p:t,i(t){n||(Q(r.$$.fragment,t),n=!0)},o(t){U(r.$$.fragment,t),n=!1},d(t){tt(r,t)}}}function _t(e){var n,r=new vt({});return r.$on("start",e.startGame),{c(){r.$$.fragment.c()},m(t,e){Y(r,t,e),n=!0},p:t,i(t){n||(Q(r.$$.fragment,t),n=!0)},o(t){U(r.$$.fragment,t),n=!1},d(t){tt(r,t)}}}function Mt(t){var e,n,r,o,s,c=[_t,Tt,St],i=[];function a(t,e){return e.state===e.STATES.start?0:e.state===e.STATES.game?1:2}n=a(0,t),r=i[n]=c[n](t);var l=new wt({});return{c(){e=b("test\n\n"),r.c(),o=x(),l.$$.fragment.c()},m(t,r){g(t,e,r),i[n].m(t,r),g(t,o,r),Y(l,t,r),s=!0},p(t,e){var s=n;(n=a(0,e))===s?i[n].p(t,e):(Z(),U(i[s],1,1,()=>{i[s]=null}),J(),(r=i[n])||(r=i[n]=c[n](e)).c(),Q(r,1),r.m(o.parentNode,o))},i(t){s||(Q(r),Q(l.$$.fragment,t),s=!0)},o(t){U(r),U(l.$$.fragment,t),s=!1},d(t){t&&v(e),i[n].d(t),t&&v(o),tt(l,t)}}}function kt(t,e,n){let r;i(t,it,t=>{n("$score",r=t)});const o=Object.freeze({start:"start",game:"game",end:"end"});let s=o.start;return{STATES:o,state:s,restartGame:()=>{n("state",s=o.start),a(it,r=0)},startGame:()=>{n("state",s=o.game)},endGame:()=>{n("state",s=o.end)},$score:r}}return new class extends rt{constructor(t){super(),nt(this,t,kt,Mt,c,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
