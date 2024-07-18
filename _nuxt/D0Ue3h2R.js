import{_ as g,a as y,b as q}from"./rmK0rl_6.js";import{_ as p}from"./Dh5Gb1T3.js";import{f as b,o as u,c as x,a as t,t as c,b as e,n as m,g as v,w as o,_,r as j,h as l,F as k}from"./BZb9yegH.js";import"./D_iPgrKD.js";import"./CAZilBRX.js";const S={class:"flex flex-col gap-6"},I={class:"text-6xl font-playfair font-bold my-2"},$={class:"w-full lg:pr-40"},E=b({__name:"GroupSection",props:{title:{type:String,default:"Nakit"},description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},label:{type:String,default:"nakit"},link:{type:String,default:""},btnMediumScreen:{type:Boolean,default:!1}},setup(s){const i=s;return(a,r)=>{const n=g;return u(),x("div",S,[t("h2",I,c(i.title),1),t("p",$,c(i.description),1),t("div",null,[e(n,{class:m(s.btnMediumScreen?"md:inline-flex hidden":""),label:i.label,to:i.link},null,8,["class","label","to"])])])}}}),D=["src"],U={class:"absolute bottom-[10%] left-[10%] overflow-clip h-[calc(100%-10%)] flex flex-col justify-end"},L={class:"font-playfair font-bold text-6xl mb-4"},C={class:"pr-8 max-w-[75%] 2xl:group-hover:h-[30%] 2xl:h-0 h-[30%] transition-all duration-200 ease-in-out"},N=b({__name:"SterylCard",props:{textColor:{type:String,default:"primary"},title:{type:String,default:"Nakit"},description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},imgUrl:{type:String,default:"/images/steryl-nakit-1.jpg"}},setup(s){const i=s;return(a,r)=>{const n=p;return u(),v(n,{class:m(["h-full w-full bg-primary rounded-[5px] relative p-8 group",i.textColor&&i.textColor==="white"?"text-background":"text-primary"])},{default:o(()=>[t("img",{src:i.imgUrl,height:"100%",width:"100%",class:"absolute top-0 left-0 object-cover h-full w-full"},null,8,D),t("div",{class:m(["2xl:group-hover:opacity-80 opacity-0 h-full w-full absolute top-0 left-0 bg-gradient-to-b from-transparent from-10% transition-all duration-200 ease-in-out",i.textColor&&i.textColor==="white"?"to-black":" to-white"])},null,2),t("div",U,[t("h2",L,c(i.title),1),t("p",C,c(i.description),1)])]),_:1},8,["class"])}}}),B={},A={class:"max-w-[3840px] px-4 grid lg:grid-cols-2 grid-cols-1 !h-[60svh] h-[60vh] 2xl:min-h-[600px] lg:min-h-[300px] sm:min-h-[600px] min-h-[500px] 2xl:max-h-[1000px] xl:max-h-[600px] lg:max-h-[646px] w-full gap-4"};function R(s,i){return u(),x("div",A,[j(s.$slots,"default")])}const T=_(B,[["render",R]]),z=l("/images/steryl-blog1.jpg"),O={},F=t("img",{src:z,width:"100%",class:"w-full aspect-[185/173] object-cover rounded-br-[5px] rounded-tl-[28px] rounded-bl-[5px] rounded-tr-[5px]"},null,-1),G=t("div",{class:"pt-[10px] px-[10px] flex flex-col gap-[6px]"},[t("div",{class:"font-playfair font-bold text-2xl"},"Charity event"),t("p",{class:"line-clamp-2 grow text-sm mb-5"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t("div",{class:"px-[10px] text-lg font-bold"},"PROČITAJ VIŠE")],-1);function V(s,i){const a=p;return u(),v(a,{class:"max-w-[393px] sm:w-full w-[80%] p-3 bg-background text-primary rounded-br-[40px] rounded-tl-[40px] rounded-bl-[5px] rounded-tr-[5px]"},{default:o(()=>[F,G]),_:1})}const M=_(O,[["render",V]]),P=l("/videos/hero small.mp4"),H=l("/images/steryl-piercing-premium.jpg"),J=l("/images/steryl-ear-styling.jpg"),K=l("/images/steryl-tooth-gems.jpg"),W=l("/images/steryl-izlog-premium.jpg"),Y=l("/images/steryl-izlog2-premium.jpg"),Q=l("/images/steryl-izlog3-premium.jpg"),X=l("/images/steryl-booking.jpg"),Z={},tt={class:"w-full h-screen relative z-20"},et={class:"flex flex-col gap-16"},it=t("div",{class:"flex flex-row gap-5 items-center"},[t("span",{class:"text-4xl leading-none text-[#B8F8F8]"},"Fine jewelry"),t("div",{class:"w-3 h-3 rounded-full bg-white mt-2"}),t("span",{class:"text-4xl leading-none text-[#8AFAFA]"},"Safe piercing")],-1),ot=t("div",{class:"h-full w-full z-10 absolute"},[t("video",{muted:"",autoplay:"",loop:"",width:"100%",height:"100%",class:"object-cover object-center h-full z-10"},[t("source",{src:P,type:"video/mp4"})])],-1),lt=t("section",{class:"w-full mt-24 mb-11 text-primary"},[t("div",{class:"w-full max-w-4xl mx-auto px-16 text-2xl text-center font-light"},[t("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],-1),st={class:"text-primary mb-44 w-full max-w-[3840px] px-4"},at=t("h2",{class:"text-6xl font-playfair font-bold my-10 text-center"},"Usluge",-1),nt={class:"flex flex-row !h-[45svh] h-[45vh] 2xl:min-h-[600px] min-h-[300px] xl:max-h-[1000px] lg:max-h-[600px] max-h-[400px] w-full gap-4"},rt=t("img",{src:H,height:"100%",width:"100%",class:"object-cover h-full"},null,-1),ut=t("h3",{class:"font-light text-2xl mx-auto text-center mt-8"},"PIERCING",-1),ct=t("img",{src:J,height:"100%",width:"100%",class:"object-cover h-full"},null,-1),dt=t("h3",{class:"font-light text-2xl mx-auto text-center mt-8"}," EAR STYLING ",-1),mt=t("img",{src:K,height:"100%",width:"100%",class:"object-cover h-full"},null,-1),pt=t("h3",{class:"font-light text-2xl mx-auto text-center mt-8"},"TOOTH GEMS",-1),xt={class:"flex flex-col basis-[45%] lg:gap-20 gap-10 md:order-first order-last"},_t=t("img",{src:W,height:"100%",width:"100%",class:"object-cover h-full"},null,-1),ft=t("img",{src:Y,height:"100%",width:"100%",class:"md:block hidden object-cover h-full"},null,-1),ht={class:"flex flex-col basis-[55%] lg:gap-20 gap-10"},gt=t("img",{src:Q,height:"100%",width:"100%",class:"md:block hidden object-cover h-full"},null,-1),bt={class:"bg-primary w-full py-12 mt-36 flex justify-center"},vt={class:"flex flex-row gap-7 flex-nowrap overflow-x-auto"},wt={class:"flex-1 text-background max-w-[600px]"},yt={class:"w-full py-12 pt-36 flex justify-center relative overflow-hidden"},qt=t("img",{src:y,class:"absolute h-[200%] -bottom-1/2 -right-44 opacity-10"},null,-1),jt=t("img",{src:X,height:"100%",width:"100%",class:"md:block hidden object-cover basis-0"},null,-1),kt={class:"flex-1 max-w-[600px] text-primary"};function St(s,i){const a=g,r=q,n=p,d=E,f=N,w=T,h=M;return u(),x(k,null,[t("section",tt,[e(r,{class:"z-20 absolute left-1/2 -translate-x-1/2 bottom-24"},{default:o(()=>[t("div",et,[it,t("div",null,[e(a,{label:"ODABERI TERMIN",to:"https://www.fresha.com/hr/a/steryl-rijeka-uljarska-ulica-g3mv9b8j/booking?menu=true&dppub=true&employeeId=2124195",target:"_blank"})])])]),_:1}),ot]),lt,t("section",st,[at,t("div",nt,[e(n,{to:"/usluge",class:"basis-[37%] h-full hover:basis-[42%] transition-all duration-300 ease-in-out"},{default:o(()=>[rt,ut]),_:1}),e(n,{to:"/usluge",class:"basis-[37%] h-full hover:basis-[42%] transition-all duration-300 ease-in-out"},{default:o(()=>[ct,dt]),_:1}),e(n,{to:"/usluge",class:"basis-[26%] h-full hover:basis-[31%] transition-all duration-300 ease-in-out"},{default:o(()=>[mt,pt]),_:1})])]),e(r,{class:"flex md:flex-row flex-col lg:gap-20 gap-10 justify-between text-primary mb-44"},{default:o(()=>[t("div",xt,[_t,ft,t("div",null,[e(a,{label:"VIDI STUDIO",to:"/studio"})])]),t("div",ht,[e(d,{title:"Studio",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\r
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\r
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r
      est laborum.`,label:"VIDI STUDIO",link:"/studio",btnMediumScreen:""}),gt])]),_:1}),e(w,{class:"mb-14"},{default:o(()=>[e(f,{to:"/nakit",title:"Nakit 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imgUrl:"/images/steryl-nakit-1.jpg"}),e(f,{to:"/nakit",textColor:"white",title:"Nakit 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imgUrl:"/images/steryl-nakit-2.jpg"})]),_:1}),e(a,{label:"VIDI SAV NAKIT",to:"/nakit"}),t("section",bt,[e(r,{class:"flex flex-row gap-7 flex-wrap-reverse justify-between"},{default:o(()=>[t("div",vt,[e(h,{class:"flex-none",to:"/blog/charity-event"}),e(h,{class:"flex-none",to:"/blog/new-jewlery"})]),t("div",wt,[e(d,{title:"Steryl blog",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",label:"ISTRAŽI BLOG",link:"/blog"})])]),_:1})]),t("section",yt,[qt,e(r,{class:"flex flex-row gap-7 flex-wrap-reverse justify-between"},{default:o(()=>[jt,t("div",kt,[e(d,{title:"Rezerviraj termin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",label:"ODABERI TERMIN",link:"https://www.fresha.com/hr/a/steryl-rijeka-uljarska-ulica-g3mv9b8j/booking?menu=true&dppub=true&employeeId=2124195"})])]),_:1})])],64)}const Lt=_(Z,[["render",St]]);export{Lt as default};
