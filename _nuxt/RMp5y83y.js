import{_ as ce}from"./DfLU6xvp.js";import{_ as me}from"./BAzVOHf4.js";import{_ as fe}from"./CSPwL5hq.js";import{_ as le,u as ve}from"./oYq_NAOM.js";import{u as be}from"./Cu_EoHVs.js";import{o as b,u as ge,f as se,O as E,A as R,T as he,I as re,N as Y,a as D,b as S,c as G,t as ye,i as ke,P as L,d as P,l as xe}from"./jL-9wOLG.js";import{v as y,C as z,D as ie,g as O,z as V,E as h,G as Z,H as ue,F as q,I as oe,J as Q,_ as we,m as _e,f as ee,h as te,K as N,o as $,l as B,w as j,b as C,n as H,L as Ie,a as _,c as F,r as ae,k as W,q as K,t as J,d as de,s as Te,y as Se}from"./DZqEDj1v.js";import{u as Pe}from"./DHh9h3Cg.js";import{a as $e,_ as je}from"./DSSlPjAk.js";import{_ as Ce}from"./DMLCi1fp.js";import"./DA-I2aL7.js";import"./BvbE1eqH.js";import"./CE06jG_4.js";const Ae={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:"",icon:"w-4 h-4 flex-shrink-0 mr-2"}}};function ne(e,r){if(e)return e;let o=r??"button";if(typeof o=="string"&&o.toLowerCase()==="button")return"button"}function He(e,r){let o=y(ne(e.value.type,e.value.as));return z(()=>{o.value=ne(e.value.type,e.value.as)}),ie(()=>{var p;o.value||b(r)&&b(r)instanceof HTMLButtonElement&&!((p=b(r))!=null&&p.hasAttribute("type"))&&(o.value="button")}),o}let Oe=O({props:{onFocus:{type:Function,required:!0}},setup(e){let r=y(!0);return()=>r.value?V(se,{as:"button",type:"button",features:ge.Focusable,onFocus(o){o.preventDefault();let p,f=50;function i(){var t;if(f--<=0){p&&cancelAnimationFrame(p);return}if((t=e.onFocus)!=null&&t.call(e)){r.value=!1,cancelAnimationFrame(p);return}p=requestAnimationFrame(i)}p=requestAnimationFrame(i)}}):null}});var Le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Le||{}),ze=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ze||{});let pe=Symbol("TabsContext");function U(e){let r=Q(pe,null);if(r===null){let o=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,U),o}return r}let X=Symbol("TabsSSRContext"),Ee=O({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:r,attrs:o,emit:p}){var f;let i=y((f=e.selectedIndex)!=null?f:e.defaultIndex),t=y([]),n=y([]),c=h(()=>e.selectedIndex!==null),k=h(()=>c.value?e.selectedIndex:i.value);function m(a){var d;let v=E(l.tabs.value,b),s=E(l.panels.value,b),g=v.filter(I=>{var T;return!((T=b(I))!=null&&T.hasAttribute("disabled"))});if(a<0||a>v.length-1){let I=D(i.value===null?0:Math.sign(a-i.value),{[-1]:()=>1,0:()=>D(Math.sign(a),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),T=D(I,{0:()=>v.indexOf(g[0]),1:()=>v.indexOf(g[g.length-1])});T!==-1&&(i.value=T),l.tabs.value=v,l.panels.value=s}else{let I=v.slice(0,a),T=[...v.slice(a),...I].find(M=>g.includes(M));if(!T)return;let A=(d=v.indexOf(T))!=null?d:l.selectedIndex.value;A===-1&&(A=l.selectedIndex.value),i.value=A,l.tabs.value=v,l.panels.value=s}}let l={selectedIndex:h(()=>{var a,d;return(d=(a=i.value)!=null?a:e.defaultIndex)!=null?d:null}),orientation:h(()=>e.vertical?"vertical":"horizontal"),activation:h(()=>e.manual?"manual":"auto"),tabs:t,panels:n,setSelectedIndex(a){k.value!==a&&p("change",a),c.value||m(a)},registerTab(a){var d;if(t.value.includes(a))return;let v=t.value[i.value];if(t.value.push(a),t.value=E(t.value,b),!c.value){let s=(d=t.value.indexOf(v))!=null?d:i.value;s!==-1&&(i.value=s)}},unregisterTab(a){let d=t.value.indexOf(a);d!==-1&&t.value.splice(d,1)},registerPanel(a){n.value.includes(a)||(n.value.push(a),n.value=E(n.value,b))},unregisterPanel(a){let d=n.value.indexOf(a);d!==-1&&n.value.splice(d,1)}};Z(pe,l);let u=y({tabs:[],panels:[]}),x=y(!1);z(()=>{x.value=!0}),Z(X,h(()=>x.value?null:u.value));let w=h(()=>e.selectedIndex);return z(()=>{ue([w],()=>{var a;return m((a=e.selectedIndex)!=null?a:e.defaultIndex)},{immediate:!0})}),ie(()=>{if(!c.value||k.value==null||l.tabs.value.length<=0)return;let a=E(l.tabs.value,b);a.some((d,v)=>b(l.tabs.value[v])!==b(d))&&l.setSelectedIndex(a.findIndex(d=>b(d)===b(l.tabs.value[k.value])))}),()=>{let a={selectedIndex:i.value};return V(q,[t.value.length<=0&&V(Oe,{onFocus:()=>{for(let d of t.value){let v=b(d);if((v==null?void 0:v.tabIndex)===0)return v.focus(),!0}return!1}}),R({theirProps:{...o,...he(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:a,slots:r,attrs:o,name:"TabGroup"})])}}}),Ne=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:r,slots:o}){let p=U("TabList");return()=>{let f={selectedIndex:p.selectedIndex.value},i={role:"tablist","aria-orientation":p.orientation.value};return R({ourProps:i,theirProps:e,slot:f,attrs:r,slots:o,name:"TabList"})}}}),Be=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:r,slots:o,expose:p}){var f;let i=(f=e.id)!=null?f:`headlessui-tabs-tab-${re()}`,t=U("Tab"),n=y(null);p({el:n,$el:n}),z(()=>t.registerTab(n)),oe(()=>t.unregisterTab(n));let c=Q(X),k=h(()=>{if(c.value){let s=c.value.tabs.indexOf(i);return s===-1?c.value.tabs.push(i)-1:s}return-1}),m=h(()=>{let s=t.tabs.value.indexOf(n);return s===-1?k.value:s}),l=h(()=>m.value===t.selectedIndex.value);function u(s){var g;let I=s();if(I===G.Success&&t.activation.value==="auto"){let T=(g=ke(n))==null?void 0:g.activeElement,A=t.tabs.value.findIndex(M=>b(M)===T);A!==-1&&t.setSelectedIndex(A)}return I}function x(s){let g=t.tabs.value.map(I=>b(I)).filter(Boolean);if(s.key===S.Space||s.key===S.Enter){s.preventDefault(),s.stopPropagation(),t.setSelectedIndex(m.value);return}switch(s.key){case S.Home:case S.PageUp:return s.preventDefault(),s.stopPropagation(),u(()=>L(g,P.First));case S.End:case S.PageDown:return s.preventDefault(),s.stopPropagation(),u(()=>L(g,P.Last))}if(u(()=>D(t.orientation.value,{vertical(){return s.key===S.ArrowUp?L(g,P.Previous|P.WrapAround):s.key===S.ArrowDown?L(g,P.Next|P.WrapAround):G.Error},horizontal(){return s.key===S.ArrowLeft?L(g,P.Previous|P.WrapAround):s.key===S.ArrowRight?L(g,P.Next|P.WrapAround):G.Error}}))===G.Success)return s.preventDefault()}let w=y(!1);function a(){var s;w.value||(w.value=!0,!e.disabled&&((s=b(n))==null||s.focus({preventScroll:!0}),t.setSelectedIndex(m.value),ye(()=>{w.value=!1})))}function d(s){s.preventDefault()}let v=He(h(()=>({as:e.as,type:r.type})),n);return()=>{var s,g;let I={selected:l.value,disabled:(s=e.disabled)!=null?s:!1},{...T}=e,A={ref:n,onKeydown:x,onMousedown:d,onClick:a,id:i,role:"tab",type:v.value,"aria-controls":(g=b(t.panels.value[m.value]))==null?void 0:g.id,"aria-selected":l.value,tabIndex:l.value?0:-1,disabled:e.disabled?!0:void 0};return R({ourProps:A,theirProps:T,slot:I,attrs:r,slots:o,name:"Tab"})}}}),Fe=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:r,attrs:o}){let p=U("TabPanels");return()=>{let f={selectedIndex:p.selectedIndex.value};return R({theirProps:e,ourProps:{},slot:f,attrs:o,slots:r,name:"TabPanels"})}}}),Re=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:r,slots:o,expose:p}){var f;let i=(f=e.id)!=null?f:`headlessui-tabs-panel-${re()}`,t=U("TabPanel"),n=y(null);p({el:n,$el:n}),z(()=>t.registerPanel(n)),oe(()=>t.unregisterPanel(n));let c=Q(X),k=h(()=>{if(c.value){let u=c.value.panels.indexOf(i);return u===-1?c.value.panels.push(i)-1:u}return-1}),m=h(()=>{let u=t.panels.value.indexOf(n);return u===-1?k.value:u}),l=h(()=>m.value===t.selectedIndex.value);return()=>{var u;let x={selected:l.value},{tabIndex:w,...a}=e,d={ref:n,id:i,role:"tabpanel","aria-labelledby":(u=b(t.tabs.value[m.value]))==null?void 0:u.id,tabIndex:l.value?w:-1};return!l.value&&e.unmount&&!e.static?V(se,{as:"span","aria-hidden":!0,...d}):R({ourProps:d,theirProps:a,slot:x,attrs:r,slots:o,features:Y.Static|Y.RenderStrategy,visible:l.value,name:"TabPanel"})}}});const Ue=_e(ee.ui.strategy,ee.ui.tabs,Ae),Ge=O({components:{UIcon:le,HTabGroup:Ee,HTabList:Ne,HTab:Be,HTabPanels:Fe,HTabPanel:Re},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},unmount:{type:Boolean,default:!1},content:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:o,attrs:p}=ve("tabs",te(e,"ui"),Ue,te(e,"class")),f=y(),i=y([]),t=y(),n=y(e.modelValue||e.defaultIndex);function c(m){var u;const l=(u=i.value[m])==null?void 0:u.$el;l&&t.value&&(t.value.style.top=`${l.offsetTop}px`,t.value.style.left=`${l.offsetLeft}px`,t.value.style.width=`${l.offsetWidth}px`,t.value.style.height=`${l.offsetHeight}px`)}function k(m){n.value=m,r("change",m),e.modelValue!==void 0&&r("update:modelValue",n.value),c(n.value)}return Pe(f,()=>{c(n.value)}),ue(()=>e.modelValue,m=>{n.value=m,c(n.value)}),z(()=>c(n.value)),xe(()=>be("$39Q85lIXra")),{ui:o,attrs:p,listRef:f,itemRefs:i,markerRef:t,selectedIndex:n,onChange:k}}}),De={class:"truncate"};function Ve(e,r,o,p,f,i){const t=le,n=N("HTab"),c=N("HTabList"),k=N("HTabPanel"),m=N("HTabPanels"),l=N("HTabGroup");return $(),B(l,Te({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:j(()=>[C(c,{ref:"listRef",class:H([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:Ie([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:j(()=>[_("div",{ref:"markerRef",class:H(e.ui.list.marker.wrapper)},[_("div",{class:H([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),($(!0),F(q,null,ae(e.items,(u,x)=>($(),B(n,{key:x,ref_for:!0,ref:"itemRefs",disabled:u.disabled,as:"template"},{default:j(({selected:w,disabled:a})=>[_("button",{class:H([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,w?e.ui.list.tab.active:e.ui.list.tab.inactive])},[W(e.$slots,"icon",{item:u,index:x,selected:w,disabled:a},()=>[u.icon?($(),B(t,{key:0,name:u.icon,class:H(e.ui.list.tab.icon)},null,8,["name","class"])):K("",!0)]),W(e.$slots,"default",{item:u,index:x,selected:w,disabled:a},()=>[_("span",De,J(u.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),e.content?($(),B(m,{key:0,class:H(e.ui.container)},{default:j(()=>[($(!0),F(q,null,ae(e.items,(u,x)=>($(),B(k,{key:x,class:H(e.ui.base),unmount:e.unmount},{default:j(({selected:w})=>[W(e.$slots,u.slot||"item",{item:u,index:x,selected:w},()=>[de(J(u.content),1)])]),_:2},1032,["class","unmount"]))),128))]),_:3},8,["class"])):K("",!0)]),_:3},16,["vertical","selected-index","class","onChange"])}const qe=we(Ge,[["render",Ve]]),Me=Se("/images/steryl-nakit-1.jpg"),We={class:"w-full pb-8 md:pt-36 pt-16 flex flex-col items-center relative"},Ke=_("img",{src:Me,class:"object-cover w-full max-h-[500px]"},null,-1),Je=_("div",{class:"text-primary z-10 mx-auto max-w-[900px] text-center"}," Kod nas ćete pronaći nakit od najkvalitetnijih materijala s kojim ste sigurni u svakom trenu; puno 14kt i 18kt zlato, i visokopolirani implant grade titan. Sav naš nakit je siguran za dugoročnu i konstantnu nošnju unutar tijela. ",-1),Qe=_("h2",{class:"text-5xl font-playfair font-bold my-2 md:text-start text-center text-primary mt-20 md:mb-10"}," Nakit video ",-1),Xe=_("div",{class:"w-full max-w-[3840px] md:aspect-[21/6] aspect-video md:mb-10"},[_("video",{playsinline:"",muted:"",autoplay:"",loop:"",class:"object-cover object-center w-full h-full md:aspect-[21/6] aspect-video"},[_("source",{src:Ce,type:"video/mp4"})])],-1),Ye={class:"w-full my-20 md:px-0 px-4 max-w-[3840px]"},Ze={key:0},et={key:1},ft=O({__name:"nakit",setup(e){const r=["Nakit 1","Nakit 2"];return(o,p)=>{const f=ce,i=me,t=fe,n=qe,c=$e,k=je;return $(),F(q,null,[C(f,null,{default:j(()=>[de(" Nakit ")]),_:1}),_("section",We,[C(i,{class:"flex flex-col gap-10 justify-center items-center"},{default:j(()=>[Ke,Je,Qe]),_:1})]),Xe,_("section",Ye,[C(n,{items:r,class:"!bg-transparent !w-fit",ui:{wrapper:"flex flex-col items-center",list:{background:"bg-transparent !w-fit ",width:"max-w-[560px] mb-14",marker:{base:"h-1 w-[50%] ",background:"bg-primary-500",wrapper:"bottom-[4px] !top-[38px] left-[4px] px-3 mt-1 "},tab:{base:"!justify-start w-fit"}},tab:{base:"bottom-[4px] !top-[38px] !justify-start w-fit"}}},{default:j(({item:m,selected:l})=>[_("span",{class:H(["text-4xl font-playfair font-bold",l?"text-primary-500":"text-gray-700"])},J(m),3)]),item:j(({item:m,index:l})=>[l===0?($(),F("div",Ze,[C(t,{images:["/images/nakit/nakit3.png","/images/nakit/nakit4.png","/images/nakit/nakit5.png","/images/nakit/nakit3.png","/images/nakit/nakit4.png","/images/nakit/nakit5.png"]})])):l===1?($(),F("div",et,[C(t,{images:["/images/nakit/nakit5.png","/images/nakit/nakit4.png","/images/nakit/nakit3.png","/images/nakit/nakit5.png","/images/nakit/nakit4.png","/images/nakit/nakit3.png"]})])):K("",!0)]),_:1})]),C(k,{class:"mb-14 mt-20"},{default:j(()=>[C(c,{to:"/usluge",title:"Usluge",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",imgUrl:"/images/usluge/usluge4.png",textColor:"white"}),C(c,{to:"/studio",title:"Studio",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",imgUrl:"/images/studio/studio7.png"})]),_:1})],64)}}});export{ft as default};
