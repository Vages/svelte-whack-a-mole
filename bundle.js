var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function i(t,e,n=e){return t.set(n),e}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),f=l?t=>requestAnimationFrame(t):t;const d=new Set;let m,p=!1;function h(){d.forEach(t=>{t[0](u())||(d.delete(t),t[1]())}),(p=d.size>0)&&f(h)}function $(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function C(){return y(" ")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let _,M=0,k={};function E(t,e,n,r,s,o,c,a=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*o(t);l+=100*t+`%{${c(r,1-r)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`;if(!k[f]){if(!m){const t=b("style");document.head.appendChild(t),m=t.sheet}k[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${s}ms 1 both`,M+=1,f}function z(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--M&&f(()=>{if(M)return;let t=m.cssRules.length;for(;t--;)m.deleteRule(t);k={}})}function O(t){_=t}function L(){const t=_;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=T(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}const I=[],A=[],j=[],G=[],N=Promise.resolve();let P,R=!1;function H(t){j.push(t)}function q(){const t=new Set;do{for(;I.length;){const t=I.shift();O(t),B(t.$$)}for(;A.length;)A.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];t.has(n)||(n(),t.add(n))}j.length=0}while(I.length);for(;G.length;)G.pop()();R=!1}function B(t){t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(H))}function D(t,e,n){t.dispatchEvent(T(`${e?"intro":"outro"}${n}`))}const K=new Set;let V;function Z(){V={r:0,c:[],p:V}}function F(){V.r||s(V.c),V=V.p}function J(t,e){t&&t.i&&(K.delete(t),t.i(e))}function Q(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),V.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const U={duration:0};function W(n,r,c,a){let i=r(n,c),l=a?0:1,m=null,$=null,g=null;function v(){g&&z(n,g)}function b(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(r){const{delay:o=0,duration:c=300,easing:a=e,tick:y=t,css:C}=i||U,x={start:u()+o,b:r};r||(x.group=V,V.r+=1),m?$=x:(C&&(v(),g=E(n,l,r,c,o,a,C)),r&&y(0,1),m=b(x,c),H(()=>D(n,r,"start")),function(t){let e;p||(p=!0,f(h)),new Promise(n=>{d.add(e=[t,n])})}(t=>{if($&&t>$.start&&(m=b($,c),$=null,D(n,m.b,"start"),C&&(v(),g=E(n,l,m.b,m.duration,0,a,i.css))),m)if(t>=m.end)y(l=m.b,1-l),D(n,m.b,"end"),$||(m.b?v():--m.group.r||s(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;l=m.a+m.d*a(e/m.duration),y(l,1-l)}return!(!m&&!$)}))}return{run(t){o(i)?(P||(P=Promise.resolve()).then(()=>{P=null}),P).then(()=>{i=i(),y(t)}):y(t)},end(){v(),m=$=null}}}function X(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c.m(e,r),H(()=>{const e=a.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(H)}function Y(t,e){t.$$.fragment&&(s(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function tt(t,e){t.$$.dirty||(I.push(t),R||(R=!0,N.then(q)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function et(e,n,o,c,a,i){const l=_;O(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let d=!1;f.ctx=o?o(e,u,(t,n,r=n)=>(f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&tt(e,t)),n)):u,f.update(),d=!0,s(f.before_update),f.fragment=c(f.ctx),n.target&&(n.hydrate?f.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):f.fragment.c(),n.intro&&J(e.$$.fragment),X(e,n.target,n.anchor),q()),O(l)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function rt(t){const e=t-1;return e*e*e+1}function st(t,{delay:e=0,duration:n=400,easing:r=rt,x:s=0,y:o=0,opacity:c=0}){const a=getComputedStyle(t),i=+a.opacity,l="none"===a.transform?"":a.transform,u=i*(1-c);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*s}px, ${(1-t)*o}px);\n\t\t\topacity: ${i-u*e}`}}const ot=[];var ct=function(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=t){const i=[c,a];return s.push(i),1===s.length&&(r=n(o)||t),c(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}(0);function at(t,e,n){const r=Object.create(t);return r.position=e[n],r}function it(t){var e,n,r,s;return{c(){(e=b("button")).innerHTML='<img alt="Mus" src="mouse-face.png" class="svelte-113bzam">',w(e,"class","mouse svelte-113bzam"),s=x(e,"click",t.whackMouse(t.position))},m(t,n){g(t,e,n),r=!0},p(e,n){t=n},i(t){r||(t&&H(()=>{n||(n=W(e,st,{y:80,opacity:100},!0)),n.run(1)}),r=!0)},o(t){t&&(n||(n=W(e,st,{y:80,opacity:100},!1)),n.run(0)),r=!1},d(t){t&&(v(e),n&&n.end()),s()}}}function lt(t){var e,n,r,s,o=t.mice.has(t.position),c=o&&it(t);return{c(){e=b("div"),n=b("div"),r=C(),c&&c.c(),s=C(),w(n,"class","hole svelte-113bzam"),w(e,"class","cell svelte-113bzam")},m(t,o){g(t,e,o),$(e,n),$(e,r),c&&c.m(e,null),$(e,s)},p(t,n){t.mice&&(o=n.mice.has(n.position)),o?c?J(c,1):((c=it(n)).c(),J(c,1),c.m(e,s)):c&&(Z(),Q(c,1,1,()=>{c=null}),F())},d(t){t&&v(e),c&&c.d()}}}function ut(e){var n,r,s,o,c,a,i,l,u,f,d,m,p,h,x,T,_;let M=e.POSITIONS,k=[];for(let t=0;t<M.length;t+=1)k[t]=lt(at(e,M,t));return{c(){(n=b("h1")).textContent="Mos ei mus!",r=C(),s=b("div"),o=b("div"),c=b("div");for(let t=0;t<k.length;t+=1)k[t].c();a=C(),i=b("div"),l=b("div"),u=C(),f=b("div"),d=b("div"),m=y("Tid: "),p=y(e.remainingTime),h=C(),x=b("div"),T=y("Score: "),_=y(e.$score),w(n,"class","svelte-113bzam"),w(c,"class","top svelte-113bzam"),w(l,"class","timer-bar svelte-113bzam"),w(d,"class","svelte-113bzam"),w(x,"class","score svelte-113bzam"),w(f,"class","game-data svelte-113bzam"),w(i,"class","front svelte-113bzam"),w(o,"class","cheese svelte-113bzam"),w(s,"class","the-perspective svelte-113bzam")},m(t,e){g(t,n,e),g(t,r,e),g(t,s,e),$(s,o),$(o,c);for(let t=0;t<k.length;t+=1)k[t].m(c,null);$(o,a),$(o,i),$(i,l),$(i,u),$(i,f),$(f,d),$(d,m),$(d,p),$(f,h),$(f,x),$(x,T),$(x,_)},p(t,e){if(t.mice||t.POSITIONS){let n;for(M=e.POSITIONS,n=0;n<M.length;n+=1){const r=at(e,M,n);k[n]?k[n].p(t,r):(k[n]=lt(r),k[n].c(),k[n].m(c,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=M.length}t.remainingTime&&S(p,e.remainingTime),t.$score&&S(_,e.$score)},i:t,o:t,d(t){t&&(v(n),v(r),v(s)),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t)}}}const ft=30,dt=16,mt=5e3;function pt(t,e,n){let r;a(t,ct,t=>{n("$score",r=t)});const s=L();let o=ft;const c=[...Array(dt).keys()];let l=new Set([]);const u=t=>()=>{l.delete(t),n("mice",l)},f=setInterval(()=>{const t=Math.floor(Math.random()*dt);l.add(t);const e=Math.floor(Math.random()*mt);setTimeout(u(t),e),n("mice",l)},1e3),d=setInterval(()=>{n("remainingTime",o-=1)},1e3);return t.$$.update=(t={remainingTime:1})=>{t.remainingTime&&o<=0&&(clearInterval(f),clearInterval(d),s("game-end"))},{remainingTime:o,POSITIONS:c,mice:l,whackMouse:t=>()=>{l.delete(t),i(ct,r+=1),n("mice",l)},$score:r}}class ht extends nt{constructor(t){super(),et(this,t,pt,ut,c,[])}}function $t(e){var n,r,s,o,c;return{c(){n=b("div"),(r=b("div")).innerHTML='<div class="presenting svelte-1blf9s3">Knowit presenterer</div> <h1 class="game-name svelte-1blf9s3"><img alt="Mus" src="mouse-face.png" class="svelte-1blf9s3">\n\t\t\t      Mos ei mus\n\t\t\t    </h1>',s=C(),(o=b("button")).textContent="Start spill",w(o,"class","main-button"),w(n,"class","container svelte-1blf9s3"),c=x(o,"click",e.pressStart)},m(t,e){g(t,n,e),$(n,r),$(n,s),$(n,o)},p:t,i:t,o:t,d(t){t&&v(n),c()}}}function gt(t){const e=L();return{pressStart:()=>{e("start")}}}class vt extends nt{constructor(t){super(),et(this,t,gt,$t,c,[])}}function bt(e){var n,r,s,o,c,a,i,l,u,f,d,m,p;return{c(){n=b("div"),r=b("div"),(s=b("h1")).textContent="Gratulerer!",o=C(),c=b("div"),a=y("Du klarte å mose "),i=y(e.score),l=y(" mus!"),u=C(),(f=b("div")).innerHTML='\n\t\t\t    Lyst på sommerjobb eller fast jobb i Knowit?\n\t\t\t    <br>\n\t\t\t    Send en enkel e-post til\n\t\t\t    <a href="mailto:hei@knowit.no" class="svelte-16hidyi">hei@knowit.no</a>',d=C(),(m=b("button")).textContent="Spill igjen",w(s,"class","svelte-16hidyi"),w(c,"class","score svelte-16hidyi"),w(m,"class","main-button"),w(n,"class","container svelte-16hidyi"),p=x(m,"click",e.pressRestart)},m(t,e){g(t,n,e),$(n,r),$(r,s),$(r,o),$(r,c),$(c,a),$(c,i),$(c,l),$(n,u),$(n,f),$(n,d),$(n,m)},p(t,e){t.score&&S(i,e.score)},i:t,o:t,d(t){t&&v(n),p()}}}function yt(t,e,n){let{score:r}=e;const s=L();return t.$set=t=>{"score"in t&&n("score",r=t.score)},{score:r,pressRestart:()=>{s("restart")}}}class Ct extends nt{constructor(t){super(),et(this,t,yt,bt,c,["score"])}}function xt(e){var n;return{c(){(n=b("a")).innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0;\n\t\t\t    right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6\n\t\t\t      120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3\n\t\t\t      125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-9fn96p"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6\n\t\t\t      C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0\n\t\t\t      C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1\n\t\t\t      C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4\n\t\t\t      C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9\n\t\t\t      C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5\n\t\t\t      C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9\n\t\t\t      L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',w(n,"href","https://github.com/Vages/svelte-whack-a-mole"),w(n,"class","github-corner svelte-9fn96p"),w(n,"aria-label","View source on GitHub")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class wt extends nt{constructor(t){super(),et(this,t,null,xt,c,[])}}function St(t){var e,n=new Ct({props:{score:t.$score}});return n.$on("restart",t.restartGame),{c(){n.$$.fragment.c()},m(t,r){X(n,t,r),e=!0},p(t,e){var r={};t.$score&&(r.score=e.$score),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Y(n,t)}}}function Tt(e){var n,r=new ht({});return r.$on("game-end",e.endGame),{c(){r.$$.fragment.c()},m(t,e){X(r,t,e),n=!0},p:t,i(t){n||(J(r.$$.fragment,t),n=!0)},o(t){Q(r.$$.fragment,t),n=!1},d(t){Y(r,t)}}}function _t(e){var n,r=new vt({});return r.$on("start",e.startGame),{c(){r.$$.fragment.c()},m(t,e){X(r,t,e),n=!0},p:t,i(t){n||(J(r.$$.fragment,t),n=!0)},o(t){Q(r.$$.fragment,t),n=!1},d(t){Y(r,t)}}}function Mt(t){var e,n,r,s,o=[_t,Tt,St],c=[];function a(t,e){return e.state===e.STATES.start?0:e.state===e.STATES.game?1:e.state===e.STATES.end?2:-1}~(e=a(0,t))&&(n=c[e]=o[e](t));var i=new wt({});return{c(){n&&n.c(),r=C(),i.$$.fragment.c()},m(t,n){~e&&c[e].m(t,n),g(t,r,n),X(i,t,n),s=!0},p(t,s){var i=e;(e=a(0,s))===i?~e&&c[e].p(t,s):(n&&(Z(),Q(c[i],1,1,()=>{c[i]=null}),F()),~e?((n=c[e])||(n=c[e]=o[e](s)).c(),J(n,1),n.m(r.parentNode,r)):n=null)},i(t){s||(J(n),J(i.$$.fragment,t),s=!0)},o(t){Q(n),Q(i.$$.fragment,t),s=!1},d(t){~e&&c[e].d(t),t&&v(r),Y(i,t)}}}function kt(t,e,n){let r;a(t,ct,t=>{n("$score",r=t)});const s=Object.freeze({start:"start",game:"game",end:"end"});let o=s.start;return{STATES:s,state:o,restartGame:()=>{n("state",o=s.start),i(ct,r=0)},startGame:()=>{n("state",o=s.game)},endGame:()=>{n("state",o=s.end)},$score:r}}return new class extends nt{constructor(t){super(),et(this,t,kt,Mt,c,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
