import{_ as r}from"./CpW5zcg9.js";import{g as n,o as a,l as c,w as p,a as e,n as l,t as s,_ as m,c as x,k as u}from"./DmWaHzg_.js";const d=["src"],_={class:"absolute bottom-[10%] left-[10%] overflow-clip h-[calc(100%-10%)] flex flex-col justify-end"},f={class:"font-playfair font-bold md:text-6xl text-4xl md:mb-4 mb-2"},h={class:"md:text-base text-sm pr-8 max-w-[75%] 2xl:group-hover:h-[30%] 2xl:h-0 h-[30%] overflow-ellipsis",style:{transition:"all 0.4s cubic-bezier(0.3, 1, 0.8, 1)"}},S=n({__name:"SterylCard",props:{textColor:{type:String,default:"primary"},title:{type:String,default:"Nakit"},description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},imgUrl:{type:String,default:"/images/steryl-nakit-1.jpg"}},setup(o){const t=o;return(w,v)=>{const i=r;return a(),c(i,{class:l(["h-full w-full bg-primary rounded-[5px] relative p-8 group",t.textColor&&t.textColor==="white"?"text-background":"text-primary"])},{default:p(()=>[e("img",{src:t.imgUrl,height:"100%",width:"100%",class:"absolute top-0 left-0 object-cover h-full w-full"},null,8,d),e("div",{class:l(["2xl:group-hover:opacity-80 opacity-0 h-full w-full absolute top-0 left-0 bg-gradient-to-b from-transparent from-10%",t.textColor&&t.textColor==="white"?"to-black":" to-white"]),style:{transition:"all 0.4s cubic-bezier(0.3, 1, 0.8, 1)"}},null,2),e("div",_,[e("h2",f,s(t.title),1),e("p",h,s(t.description),1)])]),_:1},8,["class"])}}}),g={},b={class:"max-w-[3840px] px-4 grid lg:grid-cols-2 grid-cols-1 !h-[60svh] h-[60vh] 2xl:min-h-[600px] lg:min-h-[300px] sm:min-h-[600px] min-h-[500px] 2xl:max-h-[1000px] xl:max-h-[600px] lg:max-h-[646px] w-full gap-4"};function y(o,t){return a(),x("div",b,[u(o.$slots,"default")])}const B=m(g,[["render",y]]);export{B as _,S as a};
