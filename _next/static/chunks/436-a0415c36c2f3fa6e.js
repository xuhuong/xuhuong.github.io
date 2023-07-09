(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{7365:function(e,t,n){"use strict";n.d(t,{BH:function(){return m},L:function(){return l},LL:function(){return I},ZR:function(){return v},aH:function(){return g},eu:function(){return w},hl:function(){return b},m9:function(){return E},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let a of r){if(!i.includes(a))return!1;let r=t[a],o=n[a];if(_(r)&&_(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},zI:function(){return y}});var r=n(2040);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4,d=(15&o)<<2|c>>6,f=63&c;s||(f=64,a||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length,o=a?n[e.charAt(t)]:0;++t;let c=t<e.length,l=c?n[e.charAt(t)]:64;++t;let u=t<e.length,d=u?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==d)throw new s;let f=i<<2|o>>4;if(r.push(f),64!==l){let e=o<<4&240|l>>2;if(r.push(e),64!==d){let e=l<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},d=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,f=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},p=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},h=()=>{try{return d()||f()||p()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function b(){try{return"object"==typeof indexedDB}catch(e){return!1}}function w(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function y(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(S,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new v(r,o,n);return s}}let S=/\{\$([^}]+)}/g;function _(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return e&&e._delegate?e._delegate:e}},2040:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(6003)},4712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let r=n(6927),i=n(5909),a=i._(n(6006)),o=r._(n(2930)),s=n(2017),c=n(6374),l=n(168);n(7653);let u=r._(n(5840)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,n,r,i,a){let o=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===o)return;e["data-loaded-src"]=o;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function p(e){let[t,n]=a.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:o,width:s,decoding:c,className:l,style:u,fetchPriority:d,placeholder:h,loading:g,unoptimized:m,fill:b,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:I,onLoad:S,onError:_,...E}=e;return a.default.createElement("img",{...E,...p(d),loading:g,width:s,height:o,decoding:c,"data-nimg":b?"fill":"1",className:l,style:u,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&f(e,h,w,y,v,m))},[n,h,w,y,v,_,m,t]),onLoad:e=>{let t=e.currentTarget;f(t,h,w,y,v,m)},onError:e=>{I(!0),"blur"===h&&v(!0),_&&_(e)}})}),g=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(l.ImageConfigContext),r=(0,a.useMemo)(()=>{let e=d||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:f}=e,g=(0,a.useRef)(i);(0,a.useEffect)(()=>{g.current=i},[i]);let m=(0,a.useRef)(f);(0,a.useEffect)(()=>{m.current=f},[f]);let[b,w]=(0,a.useState)(!1),[y,v]=(0,a.useState)(!1),{props:I,meta:S}=(0,s.getImgProps)(e,{defaultLoader:u.default,imgConf:r,blurComplete:b,showAltText:y});return a.default.createElement(a.default.Fragment,null,a.default.createElement(h,{...I,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:v,ref:t}),S.priority?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+I.src+I.srcSet+I.sizes,rel:"preload",as:"image",href:I.srcSet?void 0:I.src,imageSrcSet:I.srcSet,imageSizes:I.sizes,crossOrigin:I.crossOrigin,referrerPolicy:I.referrerPolicy,...p(I.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return a}});let r=n(6927),i=r._(n(6006)),a=i.default.createContext({})},7290:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},2017:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return c}}),n(7653);let r=n(2325),i=n(6374),a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c(e,t){var n;let c,l,u,{src:d,sizes:f,unoptimized:p=!1,priority:h=!1,loading:g,className:m,quality:b,width:w,height:y,fill:v=!1,style:I,onLoad:S,onLoadingComplete:_,placeholder:E="empty",blurDataURL:C,fetchPriority:D,layout:k,objectFit:A,objectPosition:T,lazyBoundary:O,lazyRoot:j,...P}=e,{imgConf:M,showAltText:L,blurComplete:B,defaultLoader:N}=t,x=M||a||i.imageConfigDefault;if("allSizes"in x)c=x;else{let e=[...x.deviceSizes,...x.imageSizes].sort((e,t)=>e-t),t=x.deviceSizes.sort((e,t)=>e-t);c={...x,allSizes:e,deviceSizes:t}}let R=P.loader||N;delete P.loader,delete P.srcSet;let H="__next_img_default"in R;if(H){if("custom"===c.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:n,...r}=t;return e(r)}}if(k){"fill"===k&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(I={...I,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!f&&(f=t)}let $="",F=s(w),z=s(y);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,$=e.src,!v){if(F||z){if(F&&!z){let t=F/e.width;z=Math.round(e.height*t)}else if(!F&&z){let t=z/e.height;F=Math.round(e.width*t)}}else F=e.width,z=e.height}}let V=!h&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:$)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,V=!1),c.unoptimized&&(p=!0),H&&d.endsWith(".svg")&&!c.dangerouslyAllowSVG&&(p=!0),h&&(D="high");let K=s(b),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:T}:{},L?{}:{color:"transparent"},I),U="blur"===E&&C&&!B?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:z,blurWidth:l,blurHeight:u,blurDataURL:C,objectFit:W.objectFit})+'")'}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o),u=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,r)=>s({config:t,src:n,quality:a,width:e})+" "+("w"===l?e:r+1)+l).join(", "),src:s({config:t,src:n,quality:a,width:c[u]})}}({config:c,src:d,unoptimized:p,width:F,quality:K,sizes:f,loader:R}),G={...P,loading:V?"lazy":g,fetchPriority:D,width:F,height:z,decoding:"async",className:m,style:{...W,...U},sizes:q.sizes,srcSet:q.srcSet,src:q.src},Z={unoptimized:p,priority:h,placeholder:E,fill:v};return{props:G,meta:Z}}},2930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return u},default:function(){return h}});let r=n(6927),i=n(5909),a=i._(n(6006)),o=r._(n(9488)),s=n(4626),c=n(6436),l=n(7290);function u(e){void 0===e&&(e=!1);let t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7653);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(u(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let a=!0,o=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){o=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2325:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}=e,s=r||t,c=i||n,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+c+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+l+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(6927),i=r._(n(6006)),a=n(6374),o=i.default.createContext(a.imageConfigDefault)},6374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},4595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},unstable_getImgProps:function(){return c}});let r=n(6927),i=n(2017),a=n(7653),o=n(4712),s=r._(n(5840)),c=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=o.Image},5840:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},9488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(5909),i=r._(n(6006)),a=i.useLayoutEffect,o=i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7653:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6003:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c=[],l=!1,u=-1;function d(){l&&r&&(l=!1,r.length?c=r.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(r=c,c=[];++u<t;)r&&r[u].run();u=-1,t=c.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},6394:function(e,t,n){e.exports=n(4595)},5846:function(e,t,n){e.exports=n(7477)},6008:function(e,t,n){e.exports=n(794)},434:function(e,t,n){"use strict";let r,i;n.d(t,{qX:function(){return x},Xd:function(){return N},Mq:function(){return F},C6:function(){return z},ZF:function(){return $},KN:function(){return V}});var a,o,s,c=n(8341);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l=[];(o=s||(s={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";let u={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},d=s.INFO,f={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},p=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=f[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};var h=n(7365);let g=(e,t)=>t.some(t=>e instanceof t),m=new WeakMap,b=new WeakMap,w=new WeakMap,y=new WeakMap,v=new WeakMap,I={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return b.get(e);if("objectStoreNames"===t)return e.objectStoreNames||w.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function S(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(S(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&m.set(t,e)}).catch(()=>{}),v.set(t,e),t}(e);if(y.has(e))return y.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(_(this),e),S(m.get(this))}:function(...e){return S(t.apply(_(this),e))}:function(e,...n){let r=t.call(_(this),e,...n);return w.set(r,e.sort?e.sort():[e]),S(r)}:(t instanceof IDBTransaction&&function(e){if(b.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});b.set(e,t)}(t),g(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,I):t;return n!==e&&(y.set(e,n),v.set(n,e)),n}let _=e=>v.get(e),E=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],D=new Map;function k(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(D.get(t))return D.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return D.set(t,a),a}I={...a=I,get:(e,t,n)=>k(e,t)||a.get(e,t,n),has:(e,t)=>!!k(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let T="@firebase/app",O="0.9.14",j=new class{constructor(e){this.name=e,this._logLevel=d,this._logHandler=p,this._userLogHandler=null,l.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}("@firebase/app"),P="[DEFAULT]",M={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},L=new Map,B=new Map;function N(e){let t=e.name;if(B.has(t))return j.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(B.set(t,e),L.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){j.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function x(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let R=new h.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new c.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}function $(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:P,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw R.create("bad-app-name",{appName:String(i)});if(n||(n=(0,h.aH)()),!n)throw R.create("no-options");let a=L.get(i);if(a){if((0,h.vZ)(n,a.options)&&(0,h.vZ)(r,a.config))return a;throw R.create("duplicate-app",{appName:i})}let o=new c.H0(i);for(let e of B.values())o.addComponent(e);let s=new H(n,r,o);return L.set(i,s),s}function F(e=P){let t=L.get(e);if(!t&&e===P&&(0,h.aH)())return $();if(!t)throw R.create("no-app",{appName:e});return t}function z(){return Array.from(L.values())}function V(e,t,n){var r;let i=null!==(r=M[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),j.warn(e.join(" "));return}N(new c.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let K="firebase-heartbeat-store",W=null;function U(){return W||(W=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,1),s=S(o);return r&&o.addEventListener("upgradeneeded",e=>{r(S(o.result),e.oldVersion,e.newVersion,S(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(K)}}).catch(e=>{throw R.create("idb-open",{originalErrorMessage:e.message})})),W}async function q(e){try{let t=await U(),n=await t.transaction(K).objectStore(K).get(Z(e));return n}catch(e){if(e instanceof h.ZR)j.warn(e.message);else{let t=R.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});j.warn(t.message)}}}async function G(e,t){try{let n=await U(),r=n.transaction(K,"readwrite"),i=r.objectStore(K);await i.put(t,Z(e)),await r.done}catch(e){if(e instanceof h.ZR)j.warn(e.message);else{let t=R.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});j.warn(t.message)}}}function Z(e){return`${e.name}!${e.options.appId}`}class J{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Y(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=X();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=X(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Q(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Q(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,h.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function X(){let e=new Date;return e.toISOString().substring(0,10)}class Y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,h.hl)()&&(0,h.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await q(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return G(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return G(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Q(e){return(0,h.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new c.wA("platform-logger",e=>new A(e),"PRIVATE")),N(new c.wA("heartbeat",e=>new J(e),"PRIVATE")),V(T,O,""),V(T,O,"esm2017"),V("fire-js","")},8341:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return i}});var r=n(7365);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1313:function(e,t,n){"use strict";n.d(t,{C6:function(){return r.C6},ZF:function(){return r.ZF}});var r=n(434);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","10.0.0","app")},886:function(e,t,n){"use strict";let r,i;n.d(t,{KL:function(){return eY},LP:function(){return eQ},ps:function(){return e0}});var a,o,s,c,l,u=n(434),d=n(8341),f=n(7365);let p=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,g=new WeakMap,m=new WeakMap,b=new WeakMap,w=new WeakMap,y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return g.get(e);if("objectStoreNames"===t)return e.objectStoreNames||m.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function v(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(v(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),w.set(t,e),t}(e);if(b.has(e))return b.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(I(this),e),v(h.get(this))}:function(...e){return v(t.apply(I(this),e))}:function(e,...n){let r=t.call(I(this),e,...n);return m.set(r,e.sort?e.sort():[e]),v(r)}:(t instanceof IDBTransaction&&function(e){if(g.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});g.set(e,t)}(t),p(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,y):t;return n!==e&&(b.set(e,n),w.set(n,e)),n}let I=e=>w.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=v(o);return r&&o.addEventListener("upgradeneeded",e=>{r(v(o.result),e.oldVersion,e.newVersion,v(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}function _(e,{blocked:t}={}){let n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),v(n).then(()=>void 0)}let E=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],D=new Map;function k(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(D.get(t))return D.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return D.set(t,a),a}y={...a=y,get:(e,t,n)=>k(e,t)||a.get(e,t,n),has:(e,t)=>!!k(e,t)||a.has(e,t)};let A="@firebase/installations",T="0.6.4",O=`w:${T}`,j="FIS_v2",P=new f.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function M(e){return e instanceof f.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function B(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function N(e,t){let n=await t.json(),r=n.error;return P.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function x({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function R(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=L(e),i=x(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={fid:n,authVersion:j,appId:e.appId,sdkVersion:O},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await R(()=>fetch(r,s));if(c.ok){let e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:B(e.authToken)};return t}throw await N("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=new Map;function K(e,t){let n=z(e);W(n,t),function(e,t){let n=(!U&&"BroadcastChannel"in self&&((U=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{W(e.data.key,e.data.fid)}),U);n&&n.postMessage({key:e,fid:t}),0===V.size&&U&&(U.close(),U=null)}(n,t)}function W(e,t){let n=V.get(e);if(n)for(let e of n)e(t)}let U=null,q="firebase-installations-store",G=null;function Z(){return G||(G=S("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(q)}})),G}async function J(e,t){let n=z(e),r=await Z(),i=r.transaction(q,"readwrite"),a=i.objectStore(q),o=await a.get(n);return await a.put(t,n),await i.done,o&&o.fid===t.fid||K(e,t.fid),t}async function X(e){let t=z(e),n=await Z(),r=n.transaction(q,"readwrite");await r.objectStore(q).delete(t),await r.done}async function Y(e,t){let n=z(e),r=await Z(),i=r.transaction(q,"readwrite"),a=i.objectStore(q),o=await a.get(n),s=t(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&K(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){let t;let n=await Y(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return F.test(n)?n:""}catch(e){return""}}(),registrationStatus:0};return er(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(P.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:et(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ee(e,t){try{let n=await H(e,t);return J(e.appConfig,n)}catch(n){throw M(n)&&409===n.customData.serverCode?await X(e.appConfig):await J(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function et(e){let t=await en(e.appConfig);for(;1===t.registrationStatus;)await $(100),t=await en(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await Q(e);return n||t}return t}function en(e){return Y(e,e=>{if(!e)throw P.create("installation-not-found");return er(e)})}function er(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${L(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=x(e);return n.append("Authorization",`${j} ${t}`),n}(e,n),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={installation:{sdkVersion:O,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await R(()=>fetch(r,s));if(c.ok){let e=await c.json(),t=B(e);return t}throw await N("Generate Auth Token",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(e,t=!1){let n;let r=await Y(e.appConfig,r=>{var i;if(!el(r))throw P.create("not-registered");let a=r.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===a.requestStatus)return n=eo(e,t),r;{if(!navigator.onLine)throw P.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=ec(e,t),t}}),i=n?await n:r.authToken;return i}async function eo(e,t){let n=await es(e.appConfig);for(;1===n.authToken.requestStatus;)await $(100),n=await es(e.appConfig);let r=n.authToken;return 0===r.requestStatus?ea(e,t):r}function es(e){return Y(e,e=>{if(!el(e))throw P.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ec(e,t){try{let n=await ei(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await J(e.appConfig,r),n}catch(n){if(M(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await X(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await J(e.appConfig,n)}throw n}}function el(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(e){let{installationEntry:t,registrationPromise:n}=await Q(e);return n?n.catch(console.error):ea(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(e,t=!1){await ef(e);let n=await ea(e,t);return n.token}async function ef(e){let{registrationPromise:t}=await Q(e);t&&await t}function ep(e){return P.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh="installations";(0,u.Xd)(new d.wA(eh,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw ep("App Configuration");if(!e.name)throw ep("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw ep(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,u.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,u.Xd)(new d.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,u.qX)(t,eh).getImmediate();return{getId:()=>eu(n),getToken:e=>ed(n,e)}},"PRIVATE")),(0,u.KN)(A,T),(0,u.KN)(A,T,"esm2017");let eg="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",em="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(e){let t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(o=c||(c={}))[o.DATA_MESSAGE=1]="DATA_MESSAGE",o[o.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(s=l||(l={})).PUSH_RECEIVED="push-received",s.NOTIFICATION_CLICKED="notification-clicked";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew="fcm_token_details_db",ey="fcm_token_object_Store";async function ev(e){if("databases"in indexedDB){let e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(ew))return null}let t=null,n=await S(ew,5,{upgrade:async(n,r,i,a)=>{var o;if(r<2||!n.objectStoreNames.contains(ey))return;let s=a.objectStore(ey),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c){if(2===r){if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:null!==(o=c.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:eb(c.vapidKey)}}}else 3===r?t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:eb(c.auth),p256dh:eb(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:eb(c.vapidKey)}}:4===r&&(t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:eb(c.auth),p256dh:eb(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:eb(c.vapidKey)}})}}});return n.close(),await _(ew),await _("fcm_vapid_details_db"),await _("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let eI="firebase-messaging-store",eS=null;function e_(){return eS||(eS=S("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eI)}})),eS}async function eE(e){let t=function({appConfig:e}){return e.appId}(e),n=await e_(),r=await n.transaction(eI).objectStore(eI).get(t);if(r)return r;{let t=await ev(e.appConfig.senderId);if(t)return await eC(e,t),t}}async function eC(e,t){let n=function({appConfig:e}){return e.appId}(e),r=await e_(),i=r.transaction(eI,"readwrite");return await i.objectStore(eI).put(t,n),await i.done,t}async function eD(e){let t=function({appConfig:e}){return e.appId}(e),n=await e_(),r=n.transaction(eI,"readwrite");await r.objectStore(eI).delete(t),await r.done}let ek=new f.LL("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t){let n;let r=await eP(e),i=eM(t),a={method:"POST",headers:r,body:JSON.stringify(i)};try{let t=await fetch(ej(e.appConfig),a);n=await t.json()}catch(e){throw ek.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw ek.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw ek.create("token-subscribe-no-token");return n.token}async function eT(e,t){let n;let r=await eP(e),i=eM(t.subscriptionOptions),a={method:"PATCH",headers:r,body:JSON.stringify(i)};try{let r=await fetch(`${ej(e.appConfig)}/${t.token}`,a);n=await r.json()}catch(e){throw ek.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw ek.create("token-update-failed",{errorInfo:e})}if(!n.token)throw ek.create("token-update-no-token");return n.token}async function eO(e,t){let n=await eP(e);try{let r=await fetch(`${ej(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),i=await r.json();if(i.error){let e=i.error.message;throw ek.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw ek.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function ej({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function eP({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function eM({p256dh:e,auth:t,endpoint:n,vapidKey:r}){let i={web:{endpoint:n,auth:t,p256dh:e}};return r!==eg&&(i.web.applicationPubKey=r),i}async function eL(e){let t=await eR(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:eb(t.getKey("auth")),p256dh:eb(t.getKey("p256dh"))},r=await eE(e.firebaseDependencies);if(!r)return ex(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?eN(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await eO(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return ex(e.firebaseDependencies,n)}async function eB(e){let t=await eE(e.firebaseDependencies);t&&(await eO(e.firebaseDependencies,t.token),await eD(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function eN(e,t){try{let n=await eT(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await eC(e.firebaseDependencies,r),n}catch(t){throw await eB(e),t}}async function ex(e,t){let n=await eA(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await eC(e,r),r.token}async function eR(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;++e)i[e]=r.charCodeAt(e);return i}(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(e){let t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let r=t.notification.body;r&&(e.notification.body=r);let i=t.notification.image;i&&(e.notification.image=i);let a=t.notification.icon;a&&(e.notification.icon=a)}(t,e),e.data&&(t.data=e.data),function(e,t){var n,r,i,a,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let s=null!==(i=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(a=t.notification)||void 0===a?void 0:a.click_action;s&&(e.fcmOptions.link=s);let c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}(t,e),t}function e$(e,t){let n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}function eF(e){return ek.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e$("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),e$("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw eF("App Configuration Object");if(!e.name)throw eF("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw eF(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw ek.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eK(e,t){if(t||e.swRegistration||await eV(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw ek.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eW(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=eg)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eU(e,t){if(!navigator)throw ek.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw ek.create("permission-blocked");return await eW(e,null==t?void 0:t.vapidKey),await eK(e,null==t?void 0:t.serviceWorkerRegistration),eL(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eq(e,t,n){let r=function(e){switch(e){case l.NOTIFICATION_CLICKED:return"notification_open";case l.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t),i=await e.firebaseDependencies.analyticsProvider.get();i.logEvent(r,{message_id:n[em],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eG(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===l.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(eH(n)):e.onMessageHandler.next(eH(n)));let r=n.data;"object"==typeof r&&r&&em in r&&"1"===r["google.c.a.e"]&&await eq(e,n.messageType,r)}let eZ="@firebase/messaging",eJ="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eX(){try{await (0,f.eu)()}catch(e){return!1}return"undefined"!=typeof window&&(0,f.hl)()&&(0,f.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eY(e=(0,u.Mq)()){return eX().then(e=>{if(!e)throw ek.create("unsupported-browser")},e=>{throw ek.create("indexed-db-unsupported")}),(0,u.qX)((0,f.m9)(e),"messaging").getImmediate()}async function eQ(e,t){return eU(e=(0,f.m9)(e),t)}function e0(e,t){return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(!navigator)throw ek.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,f.m9)(e),t))}(0,u.Xd)(new d.wA("messaging",e=>{let t=new ez(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>eG(t,e)),t},"PUBLIC")),(0,u.Xd)(new d.wA("messaging-internal",e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>eU(t,e)}},"PRIVATE")),(0,u.KN)(eZ,eJ),(0,u.KN)(eZ,eJ,"esm2017")}}]);