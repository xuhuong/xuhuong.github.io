(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{2438:function(e,t,n){Promise.resolve().then(n.bind(n,441)),Promise.resolve().then(n.t.bind(n,8418,23))},441:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9268),o=n(6341),l=n.n(o);function i(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{src:"https://unpkg.com/@popperjs/core@2"}),(0,r.jsx)(l(),{src:"https://unpkg.com/tippy.js@6",onLoad:()=>{tippy("[data-tippy-content]")}})]})}},1522:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?o[l]=!!n[e]:o.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":l&&(o.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),o}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&a.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++){let n=a[t];if(l(n,e))return a.splice(t,1),!1}return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9830:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return _},default:function(){return b}});let r=n(6927),o=n(5909),l=r._(n(8431)),i=o._(n(6006)),a=n(7268),u=n(1522),c=n(9830),s=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:l,children:i="",strategy:a="afterInteractive",onError:c}=e,p=n||t;if(p&&f.has(p))return;if(s.has(t)){f.add(p),s.get(t).then(r,c);return}let y=()=>{o&&o(),f.add(p)},_=document.createElement("script"),m=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(l?(_.innerHTML=l.__html||"",y()):i?(_.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(_.src=t,s.set(t,m)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();_.setAttribute(e,r)}"worker"===a&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",a),document.body.appendChild(_)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))}):p(e)}function _(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}()}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:s,...d}=e,{updateScripts:y,scripts:_,getIsSsr:m,appDir:b,nonce:h}=(0,i.useContext)(a.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;v.current||(o&&e&&f.has(e)&&o(),v.current=!0)},[o,t,n]);let g=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!g.current&&("afterInteractive"===u?p(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))})),g.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(_[u]=(_[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:s,...d}]),y(_)):m&&m()?f.add(t||n):m&&!m()&&p(e)),b){if("beforeInteractive"===u)return n?(l.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"}),i.default.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(d.dangerouslySetInnerHTML&&(d.children=d.dangerouslySetInnerHTML.__html,delete d.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...d}])+")"}}));"afterInteractive"===u&&n&&l.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let b=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(){},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,l={},c=null,s=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:s,props:l,_owner:a.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},6341:function(e,t,n){e.exports=n(7676)}},function(e){e.O(0,[9253,7698,1744],function(){return e(e.s=2438)}),_N_E=e.O()}]);