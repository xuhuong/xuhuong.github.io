(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1162],{7467:function(e,t,n){Promise.resolve().then(n.bind(n,4667))},4667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(9268),r=n(6006),o=n(1412),a=n(1375),s=n(5952),u=n.n(s),c=n(6008);let i=u()(()=>Promise.all([n.e(730),n.e(3029),n.e(5748),n.e(9021)]).then(n.bind(n,9021)),{loadableGenerated:{webpack:()=>[9021]},ssr:!1}),f=u()(()=>Promise.all([n.e(6228),n.e(9764),n.e(8211),n.e(3808),n.e(6990),n.e(7113)]).then(n.bind(n,6990)),{loadableGenerated:{webpack:()=>[6990]},ssr:!1});function d(){let e=(0,c.useSearchParams)(),t=e.get("schoolId"),n=e.get("channelId");(0,r.useEffect)(()=>{console.log("schoolId",t),console.log("channelId",n)},[t,n]);let s=(0,c.usePathname)(),u=[{label:"posts",href:"/forum/posts",active:s.match(/\/forum\/posts/)},{label:"channels",href:"/forum",active:"/forum"===s},{label:"you",href:"/forum/you/your-posts",active:s.match(/\/forum\/you\/(profile|your-posts|your-channels|friends-list)/g)}];return(0,l.jsxs)("main",{className:"relative flex-1 text-xs overflow-y-auto",children:[(0,l.jsx)(a.Z,{className:"pb-0"}),(0,l.jsx)("div",{className:"w-full overflow-y-auto",children:(0,l.jsxs)("div",{className:"container mx-auto p-4",children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between mb-4",children:[(0,l.jsx)(o.Z,{items:u}),(0,l.jsx)(f,{})]}),(0,l.jsx)(i,{})]})})]})}},1412:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var l=n(9268),r=n(5846),o=n.n(r);function a(e){let{className:t="",items:n}=e;return(0,l.jsx)("div",{className:"space-x-4 mb-4 flex justify-between sm:justify-normal ".concat(t),children:n.map((e,t)=>(0,l.jsx)(o(),{href:e.href,className:"btn btn-sm ".concat(!e.active&&"btn-outline"),children:e.label},"tab_badge-".concat(t)))})}n(6006)},1375:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(9268);function r(e){let{className:t=""}=e;return(0,l.jsx)("div",{className:"container mx-auto p-4 block md:hidden ".concat(t),children:(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsx)("button",{className:"btn btn-sm btn-ghost btn-circle absolute top-2 left-2",children:(0,l.jsx)("i",{className:"ri-search-line text-xl opacity-80"})}),(0,l.jsx)("input",{className:"w-full input border-base-300/80 rounded-full pl-10",placeholder:"Search"})]})})}},5952:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let l=n(6927);n(6006);let r=l._(n(6353));function o(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e),Object.assign(l,t);let a=l.loader;return n({...l,loader:()=>null!=a?a().then(o):Promise.resolve(o(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return r},NoSSR:function(){return o}}),n(6927),n(6006);let l=n(8687);function r(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:t}=e;return t}},6353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let l=n(6927),r=l._(n(6006)),o=n(761),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,l=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?r.default.Fragment:o.NoSSR,s=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(a,null,r.default.createElement(s,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(6006),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var l,o={},c=null,i=null;for(l in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)a.call(t,l)&&!u.hasOwnProperty(l)&&(o[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===o[l]&&(o[l]=t[l]);return{$$typeof:r,type:e,key:c,ref:i,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(7095)},6008:function(e,t,n){e.exports=n(4e3)}},function(e){e.O(0,[7095,9253,7698,1744],function(){return e(e.s=7467)}),_N_E=e.O()}]);