(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4879],{9849:function(e,t,s){Promise.resolve().then(s.bind(s,919))},919:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(9268),a=s(6006),l=s(5546),r=s(474);function i(){return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("div",{className:"flex justify-between w-full pb-3 border-b-2 border-b-neutral",children:[(0,n.jsx)("div",{className:"animate-skeleton w-56 h-5 pl-2 sm:pl-4"}),(0,n.jsx)("div",{className:"animate-skeleton w-24 h-4"})]}),(0,n.jsx)("ul",{children:Array.from({length:6},(e,t)=>t+1).map(e=>(0,n.jsxs)("li",{className:"border-b-2 border-b-neutral flex items-center justify-between p-2 sm:p-4",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center flex-1",children:[(0,n.jsx)("div",{className:"animate-skeleton w-12 h-12 rounded-full"}),(0,n.jsxs)("div",{className:"ml-4 flex-1 flex flex-col",children:[(0,n.jsx)("div",{className:"animate-skeleton w-32 h-5 mb-1"}),(0,n.jsx)("div",{className:"animate-skeleton w-28 h-3"})]})]}),(0,n.jsx)("div",{className:"animate-skeleton w-15 h-15 rounded-full"})]},"loading-item-".concat(e)))})]})}var o=s(4269),c=s(6137),d=s(6394),u=s.n(d),m=s(2623);let f=[{label:"Hotness",href:"/forum"},{label:"Recent Comments",href:"/forum"},{label:"Recently Posted",href:"/forum"},{label:"Most Votes",href:"/forum"},{label:"Most Comments",href:"/forum"}];var h=function(){let[e,t]=(0,a.useState)(1),[s,d]=(0,a.useState)([]),[h,x]=(0,a.useState)([]),{posts:j,isLoading:b,isError:p}=c.Z.ListPost(e);return((0,a.useEffect)(()=>{p&&(r.Am.error("An error happened!"),console.log(p))},[p]),(0,a.useEffect)(()=>{1===e?(x(null==j?void 0:j.slice(0,3)),d(null==j?void 0:j.slice(3))):d(j)},[j]),b||!j)?(0,n.jsx)(i,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-16 ".concat(1===e?"block":"hidden"),children:[(0,n.jsxs)("div",{className:"flex justify-between border-b-2 border-b-neutral",children:[(0,n.jsx)("h3",{className:"pl-2 sm:pl-4",children:"Pinned Posts"}),(0,n.jsx)(m.Z,{items:f,sort:"Hotness"})]}),(0,n.jsx)("ul",{children:h&&h.map((e,t)=>(0,n.jsx)(l.default,{value:e.heart,link:"/forum/detail?id=".concat(e.id),title:e.title,author:e.username,icon:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("i",{className:"ri-pushpin-line absolute bg-base-100 text-sm -bottom-1 -right-0.5 px-1 py-0.5 rounded-full"}),(0,n.jsx)(u(),{width:48,height:48,className:"rounded-full h-12",src:e.avatar,alt:"avatar.jpg"})]})},t))})]}),(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("div",{className:"flex justify-between border-b-2 border-b-neutral",children:[(0,n.jsx)("h3",{className:"pl-2 sm:pl-4",children:"All Other Posts"}),(0,n.jsx)(m.Z,{items:f,sort:"Hotness"})]}),(0,n.jsx)("ul",{children:s&&s.map((e,t)=>(0,n.jsx)(l.default,{value:e.heart,link:"/forum/detail?id=".concat(e.id),title:e.title,author:e.username,icon:(0,n.jsx)(u(),{width:48,height:48,className:"rounded-full h-12",src:e.avatar,alt:"avatar.jpg"})},t))})]}),(0,n.jsx)(o.Z,{page:e,total:31,offset:6,setPage:t})]})},x=s(6990),j=s(1412),b=s(1375),p=s(6008);async function v(){let e=(0,p.usePathname)(),t=[{label:"posts",href:"/forum/posts",active:e.match(/\/forum\/posts/)},{label:"channels",href:"/forum",active:"/forum"===e},{label:"you",href:"/forum/you/your-posts",active:e.match(/\/forum\/you\/(profile|your-posts|your-channels|friends-list)/g)}];return(0,n.jsxs)("div",{className:"relative flex-1 text-xs overflow-y-auto",children:[(0,n.jsx)(b.Z,{className:"pb-0"}),(0,n.jsx)("div",{className:"w-full overflow-y-auto",children:(0,n.jsxs)("div",{className:"container mx-auto p-4",children:[(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between mb-4",children:[(0,n.jsx)(j.Z,{items:t}),(0,n.jsx)(x.Z,{})]}),(0,n.jsx)(h,{})]})})]})}},2962:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(9268),a=s(6006),l=s(4040),r=s.n(l);function i(e){let{amount:t,setAmount:s}=e,[l,i]=(0,a.useState)(!1);return(0,n.jsx)("button",{onClick:l?()=>{i(!1),s(t-1)}:()=>{i(!0),s(t+1)},className:"flex-shrink-0 ".concat(r().heart," ").concat(l&&r().is_animating," ").concat(l&&r().liked),children:(0,n.jsx)("span",{className:"flex justify-end text-base font-normal",children:t})})}},2623:function(e,t,s){"use strict";var n=s(9268),a=s(6006);t.Z=function(e){let{classname:t="",items:s,sort:l}=e,[r,i]=(0,a.useState)(l);return(0,n.jsxs)("div",{className:"dropdown dropdown-end ".concat(t),children:[(0,n.jsxs)("label",{tabIndex:"0",className:"cursor-pointer my-auto whitespace-nowrap font-medium text-sm hover:text-accent-focus",children:["Sort: ",r,(0,n.jsx)("i",{className:"ri-arrow-drop-down-line"})]}),(0,n.jsx)("ul",{tabIndex:"0",className:"z-50 dropdown-content menu shadow-lg bg-base-100 rounded-md",children:s.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.href,children:e.label})},"sort-".concat(t)))})]})}},4269:function(e,t,s){"use strict";var n=s(9268),a=s(671);s(6006),t.Z=function(e){let{page:t,total:s,offset:l,setPage:r}=e,i=e=>{(0,a.tY)(0),r(e)};return(0,n.jsx)("div",{className:"join flex flex-wrap justify-center mb-8 max-w-full",children:Array.from({length:Math.ceil(s/l)},(e,t)=>t+1).map(e=>(0,n.jsx)("button",{onClick:()=>i(e),className:"join-item !rounded-full bg-neutral hover:btn-accent w-10 h-10 p-2 m-2 ".concat(e===t?"btn-active btn-accent":""),children:e},"page-".concat(e)))})}},5546:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(9268),a=s(6006),l=s(2962),r=s(5846),i=s.n(r);function o(e){let{value:t,link:s,title:r,author:o,icon:c}=e,[d,u]=(0,a.useState)(t);return(0,n.jsxs)("li",{className:"border-b-2 border-b-neutral flex items-center justify-between p-2 sm:p-4",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center flex-1",children:[c,(0,n.jsxs)("div",{className:"ml-2 sm:ml-4 flex-1 line-clamp-2",children:[(0,n.jsx)(i(),{href:s,children:(0,n.jsx)("h4",{className:"capitalize hover:text-accent-focus",children:r})}),(0,n.jsxs)("ul",{className:"flex flex-col list-disc sm:list-none sm:flex-row sm:items-center sm:space-x-2",children:[o&&(0,n.jsx)("li",{className:"text-sm font-normal underline",children:o}),(0,n.jsx)("li",{className:"font-bold hidden sm:inline",children:"•"}),(0,n.jsxs)("li",{className:"text-sm font-normal hidden sm:inline",children:["in ",(0,n.jsx)("span",{className:"underline",children:"General"})]}),(0,n.jsx)("li",{className:"font-bold hidden sm:inline",children:"•"}),(0,n.jsxs)("li",{className:"text-sm font-normal hidden sm:inline",children:["Last comment 5 minutes ago by"," ",(0,n.jsx)("span",{className:"underline",children:"Ms. Maggie"})]})]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col items-end",children:[(0,n.jsx)(l.Z,{amount:d,setAmount:u}),(0,n.jsx)("span",{children:"2 comments"})]})]})}},1412:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(9268),a=s(5846),l=s.n(a);function r(e){let{className:t="",items:s}=e;return(0,n.jsx)("div",{className:"space-x-4 mb-4 flex justify-between sm:justify-normal ".concat(t),children:s.map((e,t)=>(0,n.jsx)(l(),{href:e.href,className:"btn btn-sm ".concat(!e.active&&"btn-outline"),children:e.label},"tab_badge-".concat(t)))})}s(6006)},1375:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(9268);function a(e){let{className:t=""}=e;return(0,n.jsx)("div",{className:"container mx-auto p-4 block md:hidden ".concat(t),children:(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("button",{className:"btn btn-sm btn-ghost btn-circle absolute top-2 left-2",children:(0,n.jsx)("i",{className:"ri-search-line text-xl opacity-80"})}),(0,n.jsx)("input",{className:"w-full input border-base-300/80 rounded-full pl-10",placeholder:"Search"})]})})}},5445:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},unstable_getImgProps:function(){return o}});let n=s(6927),a=s(529),l=s(6731),r=s(3029),i=n._(s(5296)),o=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},c=r.Image},6137:function(e,t,s){"use strict";var n=s(5577),a=s(730);t.Z={ListPost:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/posts_list?_page=").concat(e,"&_limit=6"),{data:s,error:l,isLoading:r}=(0,a.ZP)(t,n.Z);return{posts:s,isLoading:r,isError:l}},GetDetailPost:e=>{let t="".concat("https://jsonserver-i5n0.onrender.com","/posts/").concat(e),{data:s,error:l,isLoading:r}=(0,a.ZP)(t,n.Z);return{post:s,isLoading:r,isError:l}},TotalPost:()=>(0,n.Z)("".concat("https://jsonserver-i5n0.onrender.com","/stats"))}},4328:function(e,t,s){"use strict";var n=s(2486);t.Z={getItem:async e=>(0,n.U2)(e).then(e=>e).catch(e=>{}),setItem:async(e,t)=>{await (0,n.t8)(e,t)},removeItem:async e=>{await (0,n.IV)(e)}}},5577:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(4328);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l={method:t?String(t||"").toUpperCase():"GET"};"GET"!==l.method&&(s.files?l.body=s.files:l.body=JSON.stringify(s||{})),l.headers={"Content-Type":"application/json",...a},s.files&&delete l.headers["Content-Type"];let r=await n.Z.getItem("forumUser");if(r){var i;let e=JSON.parse(r),t=null==e?void 0:null===(i=e.state)||void 0===i?void 0:i.access;t&&(l.headers.Authorization="Bearer ".concat(t))}return fetch(e,l).then(e=>e.json())}},671:function(e,t,s){"use strict";s.d(t,{tY:function(){return n}});let n=function(e){window.scrollTo({top:e,behavior:"smooth"})}},4040:function(e){e.exports={heart:"Heart_heart__XQp9J",liked:"Heart_liked__3nizD",is_animating:"Heart_is_animating__wMhvd","heart-burst":"Heart_heart-burst__GquLA"}},6394:function(e,t,s){e.exports=s(5445)}},function(e){e.O(0,[7095,7246,3029,3842,6990,9253,7698,1744],function(){return e(e.s=9849)}),_N_E=e.O()}]);