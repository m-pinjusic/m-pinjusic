import{a as oe}from"./BvbE1eqH.js";import{E as C,H as z,v as k,M as Y,C as ne,N as ie,I as ue,_ as ce,m as de,f as _,g as ve,h as x,i as fe,o as S,c as O,a as J,F as K,r as Q,n as W,k as D,l as Z,s as I,q as H}from"./DZqEDj1v.js";import{t as se,a as re,b as M,c as pe,d as me,i as he,n as U,e as be,u as we}from"./oYq_NAOM.js";function L(e){var n;const a=M(e);return(n=a==null?void 0:a.$el)!=null?n:a}const j=he?window:void 0;function ee(...e){let n,a,u,c;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,u,c]=e,n=j):[n,a,u,c]=e,!n)return U;Array.isArray(a)||(a=[a]),Array.isArray(u)||(u=[u]);const s=[],l=()=>{s.forEach(p=>p()),s.length=0},o=(p,t,i,v)=>(p.addEventListener(t,i,v),()=>p.removeEventListener(t,i,v)),f=z(()=>[L(n),M(c)],([p,t])=>{if(l(),!p)return;const i=be(t)?{...t}:t;s.push(...a.flatMap(v=>u.map(m=>o(p,v,m,i))))},{immediate:!0,flush:"post"}),d=()=>{f(),l()};return se(d),d}function ye(){const e=k(!1),n=ie();return n&&ne(()=>{e.value=!0},n),e}function ge(e){const n=ye();return C(()=>(n.value,!!e()))}function le(e,n,a={}){const{window:u=j,...c}=a;let s;const l=ge(()=>u&&"ResizeObserver"in u),o=()=>{s&&(s.disconnect(),s=void 0)},f=C(()=>Array.isArray(e)?e.map(t=>L(t)):[L(e)]),d=z(f,t=>{if(o(),l.value&&u){s=new ResizeObserver(n);for(const i of t)i&&s.observe(i,c)}},{immediate:!0,flush:"post"}),p=()=>{o(),d()};return se(p),{isSupported:l,stop:p}}function Ce(e,n={width:0,height:0},a={}){const{window:u=j,box:c="content-box"}=a,s=C(()=>{var t,i;return(i=(t=L(e))==null?void 0:t.namespaceURI)==null?void 0:i.includes("svg")}),l=k(n.width),o=k(n.height),{stop:f}=le(e,([t])=>{const i=c==="border-box"?t.borderBoxSize:c==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(u&&s.value){const v=L(e);if(v){const m=v.getBoundingClientRect();l.value=m.width,o.value=m.height}}else if(i){const v=Array.isArray(i)?i:[i];l.value=v.reduce((m,{inlineSize:g})=>m+g,0),o.value=v.reduce((m,{blockSize:g})=>m+g,0)}else l.value=t.contentRect.width,o.value=t.contentRect.height},a);re(()=>{const t=L(e);t&&(l.value="offsetWidth"in t?t.offsetWidth:n.width,o.value="offsetHeight"in t?t.offsetHeight:n.height)});const d=z(()=>L(e),t=>{l.value=t?n.width:0,o.value=t?n.height:0});function p(){f(),d()}return{width:l,height:o,stop:p}}const te=1;function ke(e,n={}){const{throttle:a=0,idle:u=200,onStop:c=U,onScroll:s=U,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:o={capture:!1,passive:!0},behavior:f="auto",window:d=j,onError:p=r=>{console.error(r)}}=n,t=k(0),i=k(0),v=C({get(){return t.value},set(r){g(r,void 0)}}),m=C({get(){return i.value},set(r){g(void 0,r)}});function g(r,A){var w,R,T,E;if(!d)return;const y=M(e);if(!y)return;(T=y instanceof Document?d.document.body:y)==null||T.scrollTo({top:(w=M(A))!=null?w:m.value,left:(R=M(r))!=null?R:v.value,behavior:M(f)});const $=((E=y==null?void 0:y.document)==null?void 0:E.documentElement)||(y==null?void 0:y.documentElement)||y;v!=null&&(t.value=$.scrollLeft),m!=null&&(i.value=$.scrollTop)}const B=k(!1),h=Y({left:!0,right:!1,top:!0,bottom:!1}),b=Y({left:!1,right:!1,top:!1,bottom:!1}),V=r=>{B.value&&(B.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,c(r))},ae=pe(V,a+u),F=r=>{var A;if(!d)return;const w=((A=r==null?void 0:r.document)==null?void 0:A.documentElement)||(r==null?void 0:r.documentElement)||L(r),{display:R,flexDirection:T}=getComputedStyle(w),E=w.scrollLeft;b.left=E<t.value,b.right=E>t.value;const y=Math.abs(E)<=(l.left||0),$=Math.abs(E)+w.clientWidth>=w.scrollWidth-(l.right||0)-te;R==="flex"&&T==="row-reverse"?(h.left=$,h.right=y):(h.left=y,h.right=$),t.value=E;let P=w.scrollTop;r===d.document&&!P&&(P=d.document.body.scrollTop),b.top=P<i.value,b.bottom=P>i.value;const q=Math.abs(P)<=(l.top||0),G=Math.abs(P)+w.clientHeight>=w.scrollHeight-(l.bottom||0)-te;R==="flex"&&T==="column-reverse"?(h.top=G,h.bottom=q):(h.top=q,h.bottom=G),i.value=P},X=r=>{var A;if(!d)return;const w=(A=r.target.documentElement)!=null?A:r.target;F(w),B.value=!0,ae(r),s(r)};return ee(e,"scroll",a?me(X,a,!0,!1):X,o),re(()=>{try{const r=M(e);if(!r)return;F(r)}catch(r){p(r)}}),ee(e,"scrollend",V,o),{x:v,y:m,isScrolling:B,arrivedState:h,directions:b,measure(){const r=M(e);d&&r&&F(r)}}}const Be={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Ee=e=>{const n=k(0);function a(s){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=s.pageX,window.addEventListener("mousemove",c),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",u)}function c(s){s.preventDefault(),e.value.style.pointerEvents="none";const l=s.pageX-n.value;n.value=s.pageX,e.value.scrollBy(-l,0)}ne(()=>{e.value&&e.value.addEventListener("mousedown",a)}),ue(()=>{e.value&&e.value.removeEventListener("mousedown",a)})},N=de(_.ui.strategy,_.ui.carousel,Be),Se=ve({components:{UButton:oe},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>N.default.prevButton},nextButton:{type:Object,default:()=>N.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:a,attrs:u}=we("carousel",x(e,"ui"),N,x(e,"class")),c=k(),s=k(0),{x:l}=ke(c,{behavior:"smooth"}),{width:o}=Ce(c);Ee(c),le(c,g=>{var h,b;const[B]=g;s.value=((b=(h=B==null?void 0:B.target)==null?void 0:h.firstElementChild)==null?void 0:b.clientWidth)||0});const f=C(()=>s.value?Math.round(l.value/s.value)+1:0),d=C(()=>s.value?e.items.length-Math.round(o.value/s.value)+1:0),p=C(()=>f.value<=1),t=C(()=>f.value===d.value);function i(){l.value+=s.value}function v(){l.value-=s.value}function m(g){l.value=(g-1)*s.value}return n({pages:d,page:f,prev:v,next:i,select:m}),{ui:a,attrs:u,isFirst:p,isLast:t,carouselRef:c,pages:d,currentPage:f,onClickNext:i,onClickPrev:v,onClick:m,twMerge:fe}}}),Me=["role"],Le=["aria-selected","aria-label","onClick"];function Ae(e,n,a,u,c,s){const l=oe;return S(),O("div",I({class:e.ui.wrapper},e.attrs),[J("div",{ref:"carouselRef",class:W([e.ui.container,"no-scrollbar"])},[(S(!0),O(K,null,Q(e.items,(o,f)=>(S(),O("div",{key:f,class:W(e.ui.item),role:e.indicators?"tabpanel":null},[D(e.$slots,"default",{item:o,index:f},void 0,!0)],10,Me))),128))],2),e.arrows?(S(),O("div",{key:0,class:W(e.ui.arrows.wrapper)},[D(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var o;return[e.prevButton?(S(),Z(l,I({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(o=e.prevButton)==null?void 0:o.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):H("",!0)]},!0),D(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var o;return[e.nextButton?(S(),Z(l,I({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(o=e.nextButton)==null?void 0:o.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):H("",!0)]},!0)],2)):H("",!0),e.indicators?(S(),O("div",{key:1,role:"tablist",class:W(e.ui.indicators.wrapper)},[(S(!0),O(K,null,Q(e.pages,o=>D(e.$slots,"indicator",{key:o,onClick:e.onClick,active:o===e.currentPage,page:o},()=>[J("button",{type:"button",role:"tab","aria-selected":o===e.currentPage,class:W([e.ui.indicators.base,o===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${o}`,onClick:f=>e.onClick(o)},null,10,Le)],!0)),128))],2)):H("",!0)],16)}const Te=ce(Se,[["render",Ae],["__scopeId","data-v-ea54307d"]]);export{Te as _,le as u};
