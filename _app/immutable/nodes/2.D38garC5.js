import{s as K,n as B,o as ne,t as le}from"../chunks/scheduler.BvLojk_z.js";import{S as Q,i as W,m as F,j as V,g as v,e as b,c as _,d as E,o as k,y as T,z as ie,p as a,s as S,h as H,A as j,k as M,B as oe,t as x,a as R,n as G,u as Y,v as p,w as $,x as ee,q as N}from"../chunks/index.BiyBvCUM.js";import{b as ae}from"../chunks/paths.zLRbXa8d.js";function q(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function P(i,e,t){const n=i.slice();return n[19]=e[t],n}function U(i){let e,t=q({length:i[6]}),n=[];for(let l=0;l<t.length;l+=1)n[l]=X(P(i,t,l));return{c(){e=b("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=_(l,"DIV",{class:!0});var f=E(e);for(let s=0;s<n.length;s+=1)n[s].l(f);f.forEach(v),this.h()},h(){k(e,"class","confetti-holder svelte-15ksp55"),T(e,"rounded",i[9]),T(e,"cone",i[10]),T(e,"no-gravity",i[11]),T(e,"reduced-motion",i[13])},m(l,f){V(l,e,f);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(e,null)},p(l,f){if(f&37375){t=q({length:l[6]});let s;for(s=0;s<t.length;s+=1){const c=P(l,t,s);n[s]?n[s].p(c,f):(n[s]=X(c),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}f&512&&T(e,"rounded",l[9]),f&1024&&T(e,"cone",l[10]),f&2048&&T(e,"no-gravity",l[11]),f&8192&&T(e,"reduced-motion",l[13])},d(l){l&&v(e),ie(n,l)}}}function X(i){let e;return{c(){e=b("div"),this.h()},l(t){e=_(t,"DIV",{class:!0,style:!0}),E(e).forEach(v),this.h()},h(){k(e,"class","confetti svelte-15ksp55"),a(e,"--fall-distance",i[8]),a(e,"--size",i[0]+"px"),a(e,"--color",i[15]()),a(e,"--skew",h(-45,45)+"deg,"+h(-45,45)+"deg"),a(e,"--rotation-xyz",h(-10,10)+", "+h(-10,10)+", "+h(-10,10)),a(e,"--rotation-deg",h(0,360)+"deg"),a(e,"--translate-y-multiplier",h(i[2][0],i[2][1])),a(e,"--translate-x-multiplier",h(i[1][0],i[1][1])),a(e,"--scale",.1*h(2,10)),a(e,"--transition-duration",i[4]?`calc(${i[3]}ms * var(--scale))`:`${i[3]}ms`),a(e,"--transition-delay",h(i[5][0],i[5][1])+"ms"),a(e,"--transition-iteration-count",i[4]?"infinite":i[7]),a(e,"--x-spread",1-i[12])},m(t,n){V(t,e,n)},p(t,n){n&256&&a(e,"--fall-distance",t[8]),n&1&&a(e,"--size",t[0]+"px"),n&4&&a(e,"--translate-y-multiplier",h(t[2][0],t[2][1])),n&2&&a(e,"--translate-x-multiplier",h(t[1][0],t[1][1])),n&24&&a(e,"--transition-duration",t[4]?`calc(${t[3]}ms * var(--scale))`:`${t[3]}ms`),n&32&&a(e,"--transition-delay",h(t[5][0],t[5][1])+"ms"),n&144&&a(e,"--transition-iteration-count",t[4]?"infinite":t[7]),n&4096&&a(e,"--x-spread",1-t[12])},d(t){t&&v(e)}}}function se(i){let e,t=!i[14]&&U(i);return{c(){t&&t.c(),e=F()},l(n){t&&t.l(n),e=F()},m(n,l){t&&t.m(n,l),V(n,e,l)},p(n,[l]){n[14]?t&&(t.d(1),t=null):t?t.p(n,l):(t=U(n),t.c(),t.m(e.parentNode,e))},i:B,o:B,d(n){n&&v(e),t&&t.d(n)}}}function h(i,e){return Math.random()*(e-i)+i}function fe(i,e,t){let{size:n=10}=e,{x:l=[-.5,.5]}=e,{y:f=[.25,1]}=e,{duration:s=2e3}=e,{infinite:c=!1}=e,{delay:z=[0,50]}=e,{colorRange:w=[0,360]}=e,{colorArray:y=[]}=e,{amount:C=50}=e,{iterationCount:m=1}=e,{fallDistance:L="100px"}=e,{rounded:I=!1}=e,{cone:A=!1}=e,{noGravity:O=!1}=e,{xSpread:u=.15}=e,{destroyOnComplete:r=!0}=e,{disableForReducedMotion:g=!1}=e,d=!1;ne(()=>{!r||c||m=="infinite"||setTimeout(()=>t(14,d=!0),(s+z[1])*m)});function D(){return y.length?y[Math.round(Math.random()*(y.length-1))]:`hsl(${Math.round(h(w[0],w[1]))}, 75%, 50%)`}return i.$$set=o=>{"size"in o&&t(0,n=o.size),"x"in o&&t(1,l=o.x),"y"in o&&t(2,f=o.y),"duration"in o&&t(3,s=o.duration),"infinite"in o&&t(4,c=o.infinite),"delay"in o&&t(5,z=o.delay),"colorRange"in o&&t(16,w=o.colorRange),"colorArray"in o&&t(17,y=o.colorArray),"amount"in o&&t(6,C=o.amount),"iterationCount"in o&&t(7,m=o.iterationCount),"fallDistance"in o&&t(8,L=o.fallDistance),"rounded"in o&&t(9,I=o.rounded),"cone"in o&&t(10,A=o.cone),"noGravity"in o&&t(11,O=o.noGravity),"xSpread"in o&&t(12,u=o.xSpread),"destroyOnComplete"in o&&t(18,r=o.destroyOnComplete),"disableForReducedMotion"in o&&t(13,g=o.disableForReducedMotion)},[n,l,f,s,c,z,C,m,L,I,A,O,u,g,d,D,w,y,r]}class te extends Q{constructor(e){super(),W(this,e,fe,se,K,{size:0,x:1,y:2,duration:3,infinite:4,delay:5,colorRange:16,colorArray:17,amount:6,iterationCount:7,fallDistance:8,rounded:9,cone:10,noGravity:11,xSpread:12,destroyOnComplete:18,disableForReducedMotion:13})}}function Z(i){let e,t,n;return t=new te({props:{x:[-5,5],y:[0,.1],delay:[1500,2e3],amount:1e3,duration:4e3,size:20,infinite:!0,fallDistance:"100vh"}}),{c(){e=b("div"),Y(t.$$.fragment),this.h()},l(l){e=_(l,"DIV",{style:!0});var f=E(e);p(t.$$.fragment,f),f.forEach(v),this.h()},h(){a(e,"position","fixed"),a(e,"top","-50px"),a(e,"left","0"),a(e,"height","100vh"),a(e,"width","100vw"),a(e,"display","flex"),a(e,"justify-content","center"),a(e,"overflow","hidden"),a(e,"pointer-events","none")},m(l,f){V(l,e,f),$(t,e,null),n=!0},i(l){n||(x(t.$$.fragment,l),n=!0)},o(l){R(t.$$.fragment,l),n=!1},d(l){l&&v(e),ee(t)}}}function J(i){let e,t,n;return t=new te({props:{infinite:!0,amount:300,y:[1.25,.5],x:[-1,1],colorArray:["#1d4ed8"]}}),{c(){e=b("div"),Y(t.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var f=E(e);p(t.$$.fragment,f),f.forEach(v),this.h()},h(){k(e,"class","absolute left-[4rem] top-[3rem]")},m(l,f){V(l,e,f),$(t,e,null),n=!0},i(l){n||(x(t.$$.fragment,l),n=!0)},o(l){R(t.$$.fragment,l),n=!1},d(l){l&&v(e),ee(t)}}}function re(i){let e,t,n,l,f=`<img class="w-full h-72" src="${ae}/logos.png" alt="logo"/>`,s,c,z='<h1 class="text-3xl lg:text-6xl italic font-semibold text-blue-700 leading-relaxed mb-2">Anniversary</h1> <h1 class="text-3xl lg:text-6xl text-red-700 font-semibold leading-relaxed font-righteous">PT TELEXINDO BIZMART</h1>',w,y,C,m,L="",I,A,O,u=i[0]&&Z(),r=i[0]&&J();return{c(){e=b("section"),u&&u.c(),t=S(),n=b("div"),l=b("div"),l.innerHTML=f,s=S(),c=b("div"),c.innerHTML=z,w=S(),r&&r.c(),y=S(),C=b("div"),m=b("button"),m.innerHTML=L,this.h()},l(g){e=_(g,"SECTION",{class:!0});var d=E(e);u&&u.l(d),t=H(d),n=_(d,"DIV",{class:!0});var D=E(n);l=_(D,"DIV",{"data-svelte-h":!0}),j(l)!=="svelte-boyyn0"&&(l.innerHTML=f),s=H(D),c=_(D,"DIV",{class:!0,"data-svelte-h":!0}),j(c)!=="svelte-7g72yf"&&(c.innerHTML=z),w=H(D),r&&r.l(D),D.forEach(v),y=H(d),C=_(d,"DIV",{class:!0});var o=E(C);m=_(o,"BUTTON",{class:!0,"data-svelte-h":!0}),j(m)!=="svelte-gahuq1"&&(m.innerHTML=L),o.forEach(v),d.forEach(v),this.h()},h(){k(c,"class","lg:text-start text-center"),k(n,"class","relative flex flex-col lg:flex-row justify-between items-center mr-16 gap-x-5"),k(m,"class","p-6 bg-blue-500 rounded-full text-white"),k(C,"class","fixed left-0 bottom-0"),k(e,"class","h-full min-h-screen bg-white flex flex-col justify-center items-end bg-bg-hut bg-no-repeat bg-cover bg-center")},m(g,d){V(g,e,d),u&&u.m(e,null),M(e,t),M(e,n),M(n,l),M(n,s),M(n,c),M(n,w),r&&r.m(n,null),M(e,y),M(e,C),M(C,m),I=!0,A||(O=oe(m,"click",i[1]),A=!0)},p(g,[d]){g[0]?u?d&1&&x(u,1):(u=Z(),u.c(),x(u,1),u.m(e,t)):u&&(N(),R(u,1,1,()=>{u=null}),G()),g[0]?r?d&1&&x(r,1):(r=J(),r.c(),x(r,1),r.m(n,null)):r&&(N(),R(r,1,1,()=>{r=null}),G())},i(g){I||(x(u),x(r),I=!0)},o(g){R(u),R(r),I=!1},d(g){g&&v(e),u&&u.d(),r&&r.d(),A=!1,O()}}}function ue(i,e,t){let n=!1;async function l(){t(0,n=!1),await le(),t(0,n=!0)}return[n,l]}class me extends Q{constructor(e){super(),W(this,e,ue,re,K,{})}}export{me as component};
