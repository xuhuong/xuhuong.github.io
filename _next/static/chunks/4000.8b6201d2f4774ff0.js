"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4e3],{5869:function(e,n,s){s.r(n),s.d(n,{default:function(){return u}});var t=s(9268),l=s(6006),a=s(474),r=s(4269);function c(){return(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("div",{className:"flex justify-end pb-3 w-full border-b-2 border-b-neutral",children:(0,t.jsx)("div",{className:"animate-skeleton w-24 h-4"})}),(0,t.jsx)("ul",{children:Array.from({length:6},(e,n)=>n+1).map(e=>(0,t.jsx)("li",{className:"border-b-2 border-b-neutral flex items-center justify-between p-2 sm:p-4",children:(0,t.jsxs)("div",{className:"flex justify-center items-start flex-1",children:[(0,t.jsx)("div",{className:"animate-skeleton w-12 h-12 rounded-full"}),(0,t.jsxs)("div",{className:"ml-4 flex-1 flex flex-col",children:[(0,t.jsx)("div",{className:"animate-skeleton w-32 h-6 mb-1"}),(0,t.jsx)("div",{className:"animate-skeleton w-28 h-4"})]})]})},"loading-item-".concat(e)))})]})}var i=s(5577),o=s(730),d=s(5846),m=s.n(d),h=s(2623);let f=[{label:"Newest channel",href:"/forum"},{label:"Oldest channel",href:"/forum"},{label:"Most members",href:"/forum"},{label:"Fewest members",href:"/forum"},{label:"A to Z",href:"/forum"},{label:"Z to A",href:"/forum"}];var u=function(){let[e,n]=(0,l.useState)(1),{channels:s,isLoading:d,isError:u}=(e=>{let n="".concat("https://jsonserver-i5n0.onrender.com","/channels?_page=").concat(e,"&_limit=6"),{data:s,error:t,isLoading:l}=(0,o.ZP)(n,i.Z);return{channels:s,isLoading:l,isError:t}})(e);return((0,l.useEffect)(()=>{u&&(a.toast.error("An error happened!"),console.log(u))},[u]),d||!s)?(0,t.jsx)(c,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"text-end border-b-2 border-b-neutral",children:(0,t.jsx)(h.Z,{items:f,sort:"Newest channel"})}),(0,t.jsx)("ul",{className:"mb-8",children:s&&(null==s?void 0:s.map((e,n)=>(0,t.jsx)("li",{className:"border-b-2 border-b-neutral flex items-center justify-between p-2 sm:p-4",children:(0,t.jsxs)("div",{className:"flex justify-center items-start flex-1",children:[(0,t.jsx)("i",{className:"ri-hashtag text-2xl"}),(0,t.jsxs)("div",{className:"ml-4 flex-1 line-clamp-2",children:[(0,t.jsx)(m(),{href:"/forum/channel?schoolId=1&channelId=2",children:(0,t.jsx)("h4",{className:"capitalize hover:text-accent-focus",children:e.label})}),(0,t.jsxs)("ul",{className:"flex flex-col list-disc sm:list-none sm:flex-row sm:items-center sm:space-x-2",children:[e.isJoinded&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("li",{className:"text-xs font-normal text-accent-focus",children:[(0,t.jsx)("i",{className:"ri-check-fill mr-2"}),"joined"]}),(0,t.jsx)("li",{className:"font-bold hidden sm:inline",children:"•"})]}),(0,t.jsx)("li",{className:"text-xs font-normal",children:e.mode}),(0,t.jsx)("li",{className:"font-bold hidden sm:inline",children:"•"}),(0,t.jsx)("li",{className:"text-xs font-normal",children:"".concat(e.count," ").concat(e.count>1?"members":"member")}),(0,t.jsx)("li",{className:"font-bold hidden sm:inline",children:"•"}),(0,t.jsx)("li",{className:"text-xs font-normal",children:e.desc.length>200?"".concat(e.desc.substring(0,maxWord),"..."):e.desc})]})]})]})},"channel-".concat(n))))}),(0,t.jsx)(r.Z,{page:e,total:7,offset:6,setPage:n})]})}},2623:function(e,n,s){var t=s(9268),l=s(6006);n.Z=function(e){let{classname:n="",items:s,sort:a}=e,[r,c]=(0,l.useState)(a);return(0,t.jsxs)("div",{className:"dropdown dropdown-end ".concat(n),children:[(0,t.jsxs)("label",{tabIndex:"0",className:"cursor-pointer my-auto whitespace-nowrap font-medium text-sm hover:text-accent-focus",children:["Sort: ",r,(0,t.jsx)("i",{className:"ri-arrow-drop-down-line"})]}),(0,t.jsx)("ul",{tabIndex:"0",className:"z-50 dropdown-content menu shadow-lg bg-base-100 rounded-md",children:s.map((e,n)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.href,children:e.label})},"sort-".concat(n)))})]})}},4269:function(e,n,s){var t=s(9268),l=s(671);s(6006),n.Z=function(e){let{page:n,total:s,offset:a,setPage:r}=e,c=e=>{(0,l.tY)(0),r(e)};return(0,t.jsx)("div",{className:"join flex flex-wrap justify-center mb-8 max-w-full",children:Array.from({length:Math.ceil(s/a)},(e,n)=>n+1).map(e=>(0,t.jsx)("button",{onClick:()=>c(e),className:"join-item !rounded-full bg-neutral hover:btn-accent w-10 h-10 p-2 m-2 ".concat(e===n?"btn-active btn-accent":""),children:e},"page-".concat(e)))})}},4328:function(e,n,s){var t=s(2486);n.Z={getItem:async e=>(0,t.U2)(e).then(e=>e).catch(e=>{}),setItem:async(e,n)=>{await (0,t.t8)(e,n)},removeItem:async e=>{await (0,t.IV)(e)}}},5577:function(e,n,s){s.d(n,{Z:function(){return l}});var t=s(4328);async function l(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a={method:n?String(n||"").toUpperCase():"GET"};"GET"!==a.method&&(s.files?a.body=s.files:a.body=JSON.stringify(s||{})),a.headers={"Content-Type":"application/json",...l},s.files&&delete a.headers["Content-Type"];let r=await t.Z.getItem("forumUser");if(r){var c;let e=JSON.parse(r),n=null==e?void 0:null===(c=e.state)||void 0===c?void 0:c.access;n&&(a.headers.Authorization="Bearer ".concat(n))}return fetch(e,a).then(e=>e.json())}},671:function(e,n,s){s.d(n,{tY:function(){return t}});let t=function(e){window.scrollTo({top:e,behavior:"smooth"})}}}]);