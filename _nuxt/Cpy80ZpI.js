import{_ as r}from"./CNWkFVdt.js";import{g as s,o as a,c,a as i,t as n,n as l,l as d,q as u}from"./DZqEDj1v.js";const m={class:"flex flex-col gap-6 md:items-start items-center md:text-start text-center"},p={class:"text-6xl font-playfair font-bold my-2"},y=s({__name:"GroupSection",props:{title:{type:String,default:"Nakit"},description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},label:{type:String,default:""},link:{type:String,default:""},btnMediumScreen:{type:Boolean,default:!1},descriptionMediumScreen:{type:Boolean,default:!1},target:{type:String,default:""}},setup(t){const e=t;return(f,g)=>{const o=r;return a(),c("div",m,[i("h2",p,n(e.title),1),i("p",{class:l([t.descriptionMediumScreen||t.description===""?"md:block hidden":"","w-full lg:pr-40"])},n(e.description),3),i("div",null,[e.label!==""?(a(),d(o,{key:0,class:l(t.btnMediumScreen?"md:inline-flex hidden":""),label:e.label,to:e.link,target:e.target},null,8,["class","label","to","target"])):u("",!0)])])}}});export{y as _};
