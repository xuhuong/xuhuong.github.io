(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4968],{9686:function(e,t,n){Promise.resolve().then(n.bind(n,2625)),Promise.resolve().then(n.t.bind(n,7095,23))},2625:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(6006);let o=e=>e,c={any:0,all:1};var u=e=>{let{children:t,className:n,isInviewState:{trueState:u="",falseState:l=""}}=e,s=(0,r.useRef)(null),i=function(e,{root:t,margin:n,amount:u,once:l=!1}={}){let[s,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||l&&s)return;let r={root:t&&t.current||void 0,margin:n,amount:"some"===u?"any":u};return function(e,t,{root:n,margin:r,amount:u="any"}={}){let l=function(e,t,n){var r;if("string"==typeof e){let c=document;t&&(o(!!t.current,"Scope provided, but no element detected."),c=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=c.querySelectorAll(e)),e=n[e]):e=c.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),s=new WeakMap,i=new IntersectionObserver(e=>{e.forEach(e=>{let n=s.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?s.set(e.target,n):i.unobserve(e.target)}else n&&(n(e),s.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof u?u:c[u]});return l.forEach(e=>i.observe(e)),()=>i.disconnect()}(e.current,()=>(i(!0),l?void 0:()=>i(!1)),r)},[t,e,n,l]),s}(s,{once:!0});return(0,r.cloneElement)(t,{ref:s,className:"".concat(t.props.className||""," ").concat(n||""," ").concat(i?u:l)})}}},function(e){e.O(0,[7095,9253,7698,1744],function(){return e(e.s=9686)}),_N_E=e.O()}]);