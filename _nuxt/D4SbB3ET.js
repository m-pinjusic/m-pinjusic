import{G as j,J as A,a2 as P,z as F,F as x,g as $}from"./DmWaHzg_.js";function te(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let E=Symbol("headlessui.useid"),I=0;function ne(){return A(E,()=>`${++I}`)()}function re(e){j(E,e)}function T(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function w(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var k=Object.defineProperty,D=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);class M{constructor(){g(this,"current",this.detect()),g(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let L=new M;function H(e){if(L.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=T(e);if(t)return t.ownerDocument}return document}let b=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var U=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(U||{}),R=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(R||{}),_=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(_||{});function C(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(b)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var W=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(W||{});function oe(e,t=0){var n;return e===((n=H(e))==null?void 0:n.body)?!1:w(t,{0(){return e.matches(b)},1(){let r=e;for(;r!==null;){if(r.matches(b))return!0;r=r.parentElement}return!1}})}var G=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(G||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ie(e){e==null||e.focus({preventScroll:!0})}let K=["textarea","input"].join(",");function V(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,K))!=null?n:!1}function q(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ae(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,l=Array.isArray(e)?n?q(e):e:C(e);o.length>0&&l.length>1&&(l=l.filter(s=>!o.includes(s))),r=r??i.activeElement;let h=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},f=0,p=l.length,c;do{if(f>=p||f+p<=0)return 0;let s=d+f;if(t&16)s=(s+p)%p;else{if(s<0)return 3;if(s>=p)return 1}c=l[s],c==null||c.focus(m),f+=h}while(c!==i.activeElement);return t&6&&V(c)&&c.select(),2}var B=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(B||{}),X=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(X||{});function z({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var a;let i=N(r,n),l=Object.assign(o,{props:i});if(e||t&2&&i.static)return y(l);if(t&1){let h=(a=i.unmount)==null||a?0:1;return w(h,{0(){return null},1(){return y({...o,props:{...i,hidden:!0,style:{display:"none"}}})}})}return y(l)}function y({props:e,attrs:t,slots:n,slot:r,name:o}){var a,i;let{as:l,...h}=J(e,["unmount","static"]),d=(a=n.default)==null?void 0:a.call(n,r),m={};if(r){let f=!1,p=[];for(let[c,s]of Object.entries(r))typeof s=="boolean"&&(f=!0),s===!0&&p.push(c);f&&(m["data-headlessui-state"]=p.join(" "))}if(l==="template"){if(d=O(d??[]),Object.keys(h).length>0||Object.keys(t).length>0){let[f,...p]=d??[];if(!Y(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(h).concat(Object.keys(t)).map(u=>u.trim()).filter((u,v,S)=>S.indexOf(u)===v).sort((u,v)=>u.localeCompare(v)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let c=N((i=f.props)!=null?i:{},h,m),s=P(f,c,!0);for(let u in c)u.startsWith("on")&&(s.props||(s.props={}),s.props[u]=c[u]);return s}return Array.isArray(d)&&d.length===1?d[0]:d}return F(l,Object.assign({},h,m),{default:()=>d})}function O(e){return e.flatMap(t=>t.type===x?O(t.children):[t])}function N(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...a){let i=n[r];for(let l of i){if(o instanceof Event&&o.defaultPrevented)return;l(o,...a)}}});return t}function J(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Y(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var Q=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Q||{});let le=$({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:o,...a}=e,i={"aria-hidden":(o&2)===2?!0:(r=a["aria-hidden"])!=null?r:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return z({ourProps:i,theirProps:a,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var Z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Z||{});export{z as A,ne as I,B as N,q as O,ae as P,ie as S,J as T,w as a,Z as b,R as c,U as d,L as e,le as f,X as g,W as h,H as i,re as l,T as o,te as t,Q as u,oe as w};
