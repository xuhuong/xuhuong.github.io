(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2730:function(e,t,n){"use strict";var i=n(7294);function s(e){return Array.prototype.slice.call(e)}function r(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function a(){return Date.now()}function o(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function l(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?s(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?s(e):[]}function c(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function d(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function u(){var e=[];return{add:function(t,n,i,s){t.addListener?t.addListener(i):t.addEventListener(n,i,s),e.push([t,n,i,s])},input:function(e,t,n,i){this.add(e,t,function(e){e.nativeEvent&&(e=e.nativeEvent);var t=e.changedTouches||[],i=e.targetTouches||[],s=e.detail&&e.detail.x?e.detail:null;return n({id:s?s.identifier?s.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:s?s.identifier?s.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:e,x:s&&s.x?s.x:i[0]?i[0].screenX:s?s.x:e.pageX,y:s&&s.y?s.y:i[0]?i[0].screenY:s?s.y:e.pageY})},i)},purge:function(){e.forEach(function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])}),e=[]}}}function h(e,t,n){return Math.min(Math.max(e,t),n)}function m(e){return(e>0?1:0)-(e<0?1:0)||+e}function x(e){var t=e.getBoundingClientRect();return{height:r(t.height,e.offsetHeight),width:r(t.width,e.offsetWidth)}}function f(e,t,n,i){var s=e&&e[t];return null==s?n:i&&"function"==typeof s?s():s}function p(e){return Math.round(1e6*e)/1e6}var g=function(){return(g=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function v(e,t,n){if(n||2==arguments.length)for(var i,s=0,r=t.length;s<r;s++)!i&&s in t||(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}function j(e){var t,n,i,s,r,a,o,l;function c(e){return 1-Math.pow(1-e,3)}function d(){return i?e.track.velocity():0}function u(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function x(){var t=e.track.details;t&&(r=t.min,a=t.max,o=t.minIdx,l=t.maxIdx)}function f(){e.animator.stop()}e.on("updated",x),e.on("optionsChanged",x),e.on("created",x),e.on("dragStarted",function(){i=!1,f(),t=n=e.track.details.abs}),e.on("dragChecked",function(){i=!0}),e.on("dragEnded",function(){var i,x,p,g,v,j,w=e.options.mode;"snap"===w&&(i=e.track,p=(x=e.track.details).position,g=m(d()),(p>a||p<r)&&(g=0),v=t+g,0===x.slides[i.absToRel(v)].portion&&(v-=g),t!==n&&(v=n),m(i.idxToDist(v,!0))!==g&&(v+=g),v=h(v,o,l),j=i.idxToDist(v,!0),e.animator.start([{distance:j,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])),"free"!==w&&"free-snap"!==w||function(){f();var t="free-snap"===e.options.mode,n=e.track,i=d();s=m(i);var x=e.track.details,p=[];if(i||!t){var g=u(i),v=g.dist,j=g.dur;if(j*=2,v*=s,t){var w=n.idxToDist(n.distToIdx(v),!0);w&&(v=w)}p.push({distance:v,duration:j,easing:c});var b=x.position,y=b+v;if(y<r||y>a){var N=y<r?r-b:a-b,k=0,M=i;if(m(N)===s){var L=Math.min(Math.abs(N)/Math.abs(v),1),C=(1-Math.pow(1-L,1/3))*j;p[0].earlyExit=C,M=i*(1-L)}else p[0].earlyExit=0,k+=N;var z=u(M,100),_=z.dist*s;e.options.rubberband&&(p.push({distance:_,duration:2*z.dur,easing:c}),p.push({distance:-_+k,duration:500,easing:c}))}e.animator.start(p)}else e.moveToIdx(h(x.abs,o,l),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}()}),e.on("dragged",function(){n=e.track.details.abs})}function w(e){var t,n,i,s,r,a,o,x,f,p,g,v,j,w,b,y,N,k,M=u();function L(t){if(a&&x===t.id){var l=T(t);if(f){if(!_(t))return z(t);p=l,f=!1,e.emit("dragChecked")}if(y)return p=l;c(t);var u=function(t){if(N===-1/0&&k===1/0)return t;var i=e.track.details,a=i.length,o=i.position,l=h(t,N-o,k-o);if(0===a)return 0;if(!e.options.rubberband)return l;if(o<=k&&o>=N||o<N&&n>0||o>k&&n<0)return t;var c=Math.max(0,1-Math.abs((o<N?o-N:o-k)/a*(s*a))/r*2);return c*c*t}(o(p-l)/s*i);n=m(u);var j=e.track.details.position;(j>N&&j<k||j===N&&n>0||j===k&&n<0)&&d(t),g+=u,!v&&Math.abs(g*s)>5&&(v=!0),e.track.add(u),p=l,e.emit("dragged")}}function C(t){!a&&e.track.details&&e.track.details.length&&(g=0,a=!0,v=!1,f=!0,x=t.id,_(t),p=T(t),e.emit("dragStarted"))}function z(t){a&&x===t.idChanged&&(a=!1,e.emit("dragEnded"))}function _(e){var t=E(),n=t?e.y:e.x,i=t?e.x:e.y,s=void 0!==j&&void 0!==w&&Math.abs(w-i)<=Math.abs(j-n);return j=n,w=i,s}function T(e){return E()?e.y:e.x}function E(){return e.options.vertical}function A(){s=e.size,r=E()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(N=t.min,k=t.max)}function D(e){v&&(d(e),c(e))}function B(){if(M.purge(),e.options.drag&&!e.options.disabled){o="function"==typeof(s=e.options.dragSpeed||1)?s:function(e){return e*s},i=e.options.rtl?-1:1,A(),t=e.container,n="data-keen-slider-clickable",l("[".concat(n,"]:not([").concat(n,"=false])"),t).map(function(e){M.add(e,"dragstart",d),M.add(e,"mousedown",d),M.add(e,"touchstart",d)}),M.add(t,"dragstart",function(e){c(e)}),M.add(t,"click",D,{capture:!0}),M.input(t,"ksDragStart",C),M.input(t,"ksDrag",L),M.input(t,"ksDragEnd",z),M.input(t,"mousedown",C),M.input(t,"mousemove",L),M.input(t,"mouseleave",z),M.input(t,"mouseup",z),M.input(t,"touchstart",C,{passive:!0}),M.input(t,"touchmove",L,{passive:!1}),M.input(t,"touchend",z),M.input(t,"touchcancel",z),M.add(window,"wheel",function(e){a&&c(e)});var n,s,r="data-keen-slider-scrollable";l("[".concat(r,"]:not([").concat(r,"=false])"),e.container).map(function(e){var t;M.input(e,"touchstart",function(e){t=T(e),y=!0,b=!0},{passive:!0}),M.input(e,"touchmove",function(n){var i=E(),s=i?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,r=t-T(n),a=i?e.scrollTop:e.scrollLeft,o=i&&"scroll"===e.style.overflowY||!i&&"scroll"===e.style.overflowX;if(t=T(n),(r<0&&a>0||r>0&&a<s)&&b&&o)return y=!0;b=!1,c(n),y=!1}),M.input(e,"touchend",function(){y=!1})})}}e.on("updated",A),e.on("optionsChanged",B),e.on("created",B),e.on("destroyed",M.purge)}function b(e){var t,n,i=null;function s(t,n,i){e.animator.active?a(t,n,i):requestAnimationFrame(function(){return a(t,n,i)})}function r(){s(!1,!1,n)}function a(n,s,r){var a=0,o=e.size,d=e.track.details;if(d&&t){var u=d.slides;t.forEach(function(e,t){if(n)!i&&s&&l(e,null,r),c(e,null,r);else{if(!u[t])return;var d=u[t].size*o;!i&&s&&l(e,d,r),c(e,u[t].distance*o-a,r),a+=d}})}}function o(t){return"performance"===e.options.renderMode?Math.round(t):t}function l(e,t,n){var i=n?"height":"width";null!==t&&(t=o(t)+"px"),e.style["min-"+i]=t,e.style["max-"+i]=t}function c(e,t,n){if(null!==t){t=o(t);var i=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(i,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function d(){t&&(a(!0,!0,n),t=null),e.on("detailsChanged",r,!0)}function u(){s(!1,!0,n)}function h(){d(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(i="auto"===f(e.options.slides,"perView",null),e.on("detailsChanged",r),(t=e.slides).length&&u())}e.on("created",h),e.on("optionsChanged",h),e.on("beforeOptionsChanged",function(){d()}),e.on("updated",u),e.on("destroyed",d)}var y=function(e,t,n){try{var i,s,r,c;return s=v([(i={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var n,s,r,a,c,d,h=u();function m(e){var n;o(t.container,"reverse","rtl"!==(n=t.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||e?null:""),o(t.container,"v",t.options.vertical&&!e?"":null),o(t.container,"disabled",t.options.disabled&&!e?"":null)}function p(){v()&&y()}function v(){var e=null;if(a.forEach(function(t){t.matches&&(e=t.__media)}),e===n)return!1;n||t.emit("beforeOptionsChanged"),n=e;var i=e?r.breakpoints[e]:r;return t.options=g(g({},r),i),m(),C(),z(),k(),!0}function j(){return t.options.trackConfig.length}function w(e){for(var o in n=!1,r=g(g({},i),e),h.purge(),s=t.size,a=[],r.breakpoints||[]){var l=window.matchMedia(o);l.__media=o,a.push(l),h.add(l,"change",p)}h.add(window,"orientationchange",L),h.add(window,"resize",M),v()}function b(e){t.animator.stop();var n=t.track.details;t.track.init(null!=e?e:n?n.abs:0)}function y(e){b(e),t.emit("optionsChanged")}function N(e,n){if(e)return w(e),void y(n);C(),z();var i=j();k(),j()!==i?y(n):b(n),t.emit("updated")}function k(){var e=t.options.slides;if("function"==typeof e)return t.options.trackConfig=e(t.size,t.slides);for(var n=t.slides,i=n.length,s="number"==typeof e?e:f(e,"number",i,!0),r=[],a=f(e,"perView",1,!0),o=f(e,"spacing",0,!0)/t.size||0,l="auto"===a?o:o/a,c=f(e,"origin","auto"),d=0,u=0;u<s;u++){var h="auto"===a?function(e){var n=x(e);return(t.options.vertical?n.height:n.width)/t.size||1}(n[u]):1/a-o+l,m="center"===c?.5-h/2:"auto"===c?0:c;r.push({origin:m,size:h,spacing:o}),d+=h}if(d+=o*(s-1),"auto"===c&&!t.options.loop&&1!==a){var p=0;r.map(function(e){var t=d-p;return p+=e.size+o,t>=1||(e.origin=1-t-(d>1?0:1-d)),e})}t.options.trackConfig=r}function M(){C();var e=t.size;t.options.disabled||e===s||(s=e,N())}function L(){M(),setTimeout(M,500),setTimeout(M,2e3)}function C(){var e=x(t.container);t.size=(t.options.vertical?e.height:e.width)||1}function z(){t.slides=l(t.options.selector,t.container)}t.container=(d=l(e,c||document)).length?d[0]:null,t.destroy=function(){h.purge(),t.emit("destroyed"),m(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=N,w(t.options)}),b,w,j],n||[],!0),c={},r={emit:function(e){c[e]&&c[e].forEach(function(e){e(r)});var t=r.options&&r.options[e];t&&t(r)},moveToIdx:function(e,t,n){var i=r.track.idxToDist(e,t);if(i){var s=r.options.defaultAnimation;r.animator.start([{distance:i,duration:f(n||s,"duration",500),easing:f(n||s,"easing",function(e){return 1+--e*e*e*e*e})}])}},on:function(e,t,n){void 0===n&&(n=!1),c[e]||(c[e]=[]);var i=c[e].indexOf(t);i>-1?n&&delete c[e][i]:n||c[e].push(t)},options:t},function(){if(r.track=function(e){var t,n,i,s,r,o,l,c,d,u,x,g,j,w,b=1/0,y=[],N=null,k=0;function M(e){A(k+e)}function L(e){var t=C(k+e).abs;return T(t)===t?t:null}function C(e){var t=Math.floor(Math.abs(p(e/n))),i=p((e%n+n)%n);i===n&&(i=0);var s=m(e),r=l.indexOf(v([],l,!0).reduce(function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e})),a=r;return s<0&&t++,r===o&&(a=0,t+=s>0?1:-1),{abs:a+t*o*s,origin:r,rel:a}}function z(e,t,n){if(t||!s.loop)return _(e,n);if(T(e)!==e)return null;var i,r=C(null!=n?n:k),a=r.abs,l=e-r.rel,c=a+l;i=_(c);var d=_(c-o*m(l));return(null!==d&&Math.abs(d)<Math.abs(i)||null===i)&&(i=d),p(i)}function _(e,t){if(null==t&&(t=p(k)),i=e,T(i)!==i||null===e)return null;e=Math.round(e);var i,s=C(t),r=s.abs,a=s.rel,c=s.origin,d=E(e),u=(t%n+n)%n,h=l[c],m=Math.floor((e-(r-a))/o)*n;return p(h-u-h+l[d]+m+(c===o?n:0))}function T(e){return h(e,d,u)}function E(e){return(e%o+o)%o}function A(t){n=t-k,y.push({distance:n,timestamp:a()}),y.length>6&&(y=y.slice(-6)),k=p(t);var n,i=D().abs;if(i!==N){var s=null!==N;N=i,s&&e.emit("slideChanged")}}function D(a){var l=a?null:function(){if(o){var e=s.loop,t=e?(k%n+n)%n:k,a=(e?k%n:k)-r[0][2],l=0-(a<0&&e?n-Math.abs(a):a),c=0,h=C(k),f=h.abs,p=h.rel,v=r[p][2],b=r.map(function(t,i){var r=l+c;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>n-1&&e?n:0)*m(-r));var a=i-p,d=m(a),u=a+f;e&&(-1===d&&r>v&&(u+=o),1===d&&r<v&&(u-=o),null!==x&&u<x&&(r+=n),null!==g&&u>g&&(r-=n));var h=r+t[0]+t[1],j=Math.max(r>=0&&h<=1?1:h<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return c+=t[0]+t[1],{abs:u,distance:s.rtl?-1*r+1-t[0]:r,portion:j,size:t[0]}});return p=E(f=T(f)),{abs:T(f),length:i,max:w,maxIdx:u,min:j,minIdx:d,position:k,progress:e?t/n:k/i,rel:p,slides:b,slidesLength:n}}}();return t.details=l,e.emit("detailsChanged"),l}return t={absToRel:E,add:M,details:null,distToIdx:L,idxToDist:z,init:function(t){var a,h,m,v;if(function(){if(o=(r=((s=e.options).trackConfig||[]).map(function(e){return[f(e,"size",1),f(e,"spacing",0),f(e,"origin",0)]})).length){n=p(r.reduce(function(e,t){return e+t[0]+t[1]},0));var t,a=o-1;i=p(n+r[0][2]-r[a][0]-r[a][2]-r[a][1]),l=r.reduce(function(e,n){if(!e)return[0];var i=r[e.length-1],s=e[e.length-1]+(i[0]+i[2])+i[1];return s-=n[2],e[e.length-1]>s&&(s=e[e.length-1]),s=p(s),e.push(s),(!t||t<s)&&(c=e.length-1),t=s,e},null),0===i&&(c=0),l.push(p(n))}}(),!o)return D(!0);a=e.options.range,x=d=(h=e.options.loop)?f(h,"min",-1/0):0,g=u=h?f(h,"max",b):c,m=f(a,"min",null),v=f(a,"max",null),m&&(d=m),v&&(u=v),j=d===-1/0?d:e.track.idxToDist(d||0,!0,0),w=u===b?u:z(u,!0,0),null===v&&(g=u),f(a,"align",!1)&&u!==b&&0===r[E(u)][2]&&(w-=1-r[E(u)][0],u=L(w-k)),j=p(j),w=p(w),Number(t)===t?M(_(T(t))):D()},to:A,velocity:function(){var e=a(),t=y.reduce(function(t,n){var i=n.distance,s=n.timestamp;return e-s>200||(m(i)!==m(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=s-t.lastTimestamp),t.lastTimestamp=s),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(r),r.animator=function(e){var t,n,i,s,r,a;function o(e){t.active=e}function l(e){t.targetIdx=e}function c(){var t;t=r,window.cancelAnimationFrame(t),o(!1),l(null),a&&e.emit("animationStopped"),a=null}return t={active:!1,start:function(t){if(c(),e.track.details){var d=0,u=e.track.details.position;n=0,i=0,s=t.map(function(e){var t,n=Number(u),s=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,r=e.easing,a=e.distance*r(s/e.duration)||0;u+=a;var o=i;return i+=s,d+=a,[n,e.distance,o,i,e.duration,r]}),l(e.track.distToIdx(d)),function t(){r=window.requestAnimationFrame(function r(c){a||(a=c),o(!0);var d=c-a;d>i&&(d=i);var u=s[n];if(u[3]<d)return n++,r(c);var h=u[2],m=u[4],x=u[0],f=u[1]*(0,u[5])(0===m?1:(d-h)/m);if(f&&e.track.to(x+f),d<i)return t();a=null,o(!1),l(null),e.emit("animationEnded")})}(),e.emit("animationStarted")}},stop:c,targetIdx:null}}(r),s)for(var e=0;e<s.length;e++)(0,s[e])(r);r.track.init(r.options.initial||0),r.emit("created")}(),r}catch(e){console.error(e)}};t.E=function(e,t){var n=i.useRef(null),s=i.useRef(!1),r=i.useRef(e),a=i.useCallback(function(i){i?(r.current=e,n.current=new y(i,e,t),s.current=!1):(n.current&&n.current.destroy&&n.current.destroy(),n.current=null)},[]);return i.useEffect(function(){(function e(t,n){if(t===n)return!0;var i=typeof t;if(i!==typeof n)return!1;if("object"!==i||null===t||null===n)return"function"===i&&t.toString()===n.toString();if(t.length!==n.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(n).length)return!1;for(var s in t)if(!e(t[s],n[s]))return!1;return!0})(r.current,e)||(r.current=e,n.current&&n.current.update(r.current))},[e]),[a,n]}},5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(742)}])},6881:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(5893);function s(e){let{children:t}=e;return(0,i.jsx)(i.Fragment,{children:t})}},742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(5893),s=n(6881),r=n(5675),a=n.n(r),o=n(1163);function l(){(0,o.useRouter)();let e=e=>{};return(0,i.jsx)("div",{className:"bg-secondary/10 backdrop-blur",children:(0,i.jsxs)("nav",{className:"container mx-auto flex justify-between min-h-16",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("a",{href:"/",className:"inline-flex mr-3",children:(0,i.jsx)(a(),{width:134.5,height:32,src:"/svg/logo-full.svg"})}),(0,i.jsxs)("ul",{className:"menu menu-horizontal menu-lg",children:[(0,i.jsx)("li",{children:(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Product"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"level 2 - item 1"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"level 2 - item 2"})}),(0,i.jsx)("li",{children:(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"Parent"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"item 1"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"item 2"})})]})]})})]})]})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Pricing"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Customers"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Use Cases"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{children:"Agency"})})]})]}),(0,i.jsxs)("div",{className:"inline-flex items-center space-x-3 pr-3",children:[(0,i.jsx)("button",{className:"btn btn-ghost",onClick:()=>e("/login"),children:"Login"}),(0,i.jsx)("button",{className:"btn btn-secondary",onClick:()=>e("/register"),children:"Register"})]})]})})}n(7294);var c=n(2730);n(3780);let d={duration:2e4,easing:e=>e};function u(e){let[t]=(0,c.E)({loop:!0,slides:{origin:"center",perView:3.5,spacing:10},mode:"free",drag:!0,rtl:e.rtl,created(e){e.moveToIdx(5,!0,d)},updated(e){e.moveToIdx(e.track.details.abs+5,!0,d)},animationEnded(e){e.moveToIdx(e.track.details.abs+5,!0,d)}});return(0,i.jsxs)("div",{ref:t,className:"keen-slider",children:[(0,i.jsx)("div",{className:"keen-slider__slide",children:(0,i.jsx)(a(),{width:378,height:212,src:"/img/slide/comments.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide",children:(0,i.jsx)(a(),{width:378,height:212,src:"/img/slide/direct.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide",children:(0,i.jsx)(a(),{width:378,height:212,src:"/img/slide/notifications.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide",children:(0,i.jsx)(a(),{width:378,height:212,src:"/img/slide/groups.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide",children:(0,i.jsx)(a(),{width:378,height:212,src:"/img/slide/lesson.png"})}),(0,i.jsx)("div",{className:"keen-slider__slide",children:(0,i.jsx)(a(),{width:378,height:212,src:"/img/slide/translations.png"})})]})}function h(){return(0,i.jsx)("footer",{className:"pt-10",children:(0,i.jsxs)("div",{className:"container mx-auto",children:[(0,i.jsxs)("div",{className:"justify-between items-center gap-12 md:flex",children:[(0,i.jsx)("div",{className:"flex-1 max-w-lg",children:(0,i.jsx)("h3",{className:"text-2xl font-bold",children:"Get our beautiful newsletter straight to your inbox."})}),(0,i.jsx)("div",{className:"flex-1 mt-6 md:mt-0",children:(0,i.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:"flex items-center gap-x-3 md:justify-end",children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("svg",{className:"w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),(0,i.jsx)("input",{type:"email",required:!0,placeholder:"Enter your email",className:"w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"})]}),(0,i.jsx)("button",{className:"block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow",children:"Subscribe"})]})})]}),(0,i.jsx)("div",{className:"flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0",children:[{label:"Resources",items:[{href:"#",name:"contact"},{href:"#",name:"Support"},{href:"#",name:"Documentation"},{href:"#",name:"Pricing"}]},{label:"About",items:[{href:"#",name:"Terms"},{href:"#",name:"License"},{href:"#",name:"Privacy"},{href:"#",name:"About US"}]},{label:"Explore",items:[{href:"#",name:"Showcase"},{href:"#",name:"Roadmap"},{href:"#",name:"Languages"},{href:"#",name:"Blog"}]},{label:"Company",items:[{href:"#",name:"Partners"},{href:"#",name:"Team"},{href:"#",name:"Careers"}]}].map((e,t)=>(0,i.jsxs)("ul",{className:"space-y-4 text-gray-600",children:[(0,i.jsx)("h4",{className:"text-gray-800 font-semibold sm:pb-2",children:e.label}),e.items.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.href,className:"hover:text-gray-800 duration-150",children:e.name})},t))]},t))}),(0,i.jsxs)("div",{className:"mt-10 py-10 border-t items-center justify-between sm:flex",children:[(0,i.jsx)("p",{className:"text-gray-600",children:"\xa9 2023 KoolYard Inc. All rights reserved."}),(0,i.jsxs)("div",{className:"flex items-center gap-x-6 text-gray-400 mt-6",children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsxs)("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"none",viewBox:"0 0 48 48",children:[(0,i.jsx)("g",{"clip-path":"url(#a)",children:(0,i.jsx)("path",{fill:"currentColor",d:"M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"})}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"a",children:(0,i.jsx)("path",{fill:"#fff",d:"M0 0h48v48H0z"})})})]})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsxs)("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"none",viewBox:"0 0 48 48",children:[(0,i.jsx)("g",{"clip-path":"url(#clip0_17_80)",children:(0,i.jsx)("path",{fill:"currentColor",d:"M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"})}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_17_80",children:(0,i.jsx)("path",{fill:"#fff",d:"M0 0h48v48H0z"})})})]})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsxs)("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"none",viewBox:"0 0 48 48",children:[(0,i.jsxs)("g",{fill:"currentColor","clip-path":"url(#clip0_910_44)",children:[(0,i.jsx)("path",{"fill-rule":"evenodd",d:"M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z","clip-rule":"evenodd"}),(0,i.jsx)("path",{d:"M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_910_44",children:(0,i.jsx)("path",{fill:"#fff",d:"M0 0h48v48H0z"})})})]})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsxs)("svg",{className:"w-6 h-6 hover:text-gray-500 duration-150",fill:"currentColor",viewBox:"0 0 48 48",children:[(0,i.jsxs)("g",{"clip-path":"url(#clip0_17_63)",children:[(0,i.jsx)("path",{d:"M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z"}),(0,i.jsx)("path",{d:"M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_17_63",children:(0,i.jsx)("path",{d:"M0 0h48v48H0z"})})})]})})]})]})]})})}function m(){return(0,i.jsx)("div",{className:"bg-secondary/10 min-h-screen",children:(0,i.jsxs)("div",{className:"max-w-6xl mx-auto p-12 text-center space-y-6",children:[(0,i.jsxs)("div",{className:"pt-8",children:[(0,i.jsxs)("a",{href:"#",className:"badge border-0 bg-secondary/10 gap-2 p-3 font-semibold hover:bg-secondary/20",children:["WATCH OUR NEW PODCAST",(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 48 48",children:(0,i.jsx)("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"4",d:"M4 40.836c4.893-5.973 9.238-9.362 13.036-10.168c3.797-.805 7.412-.927 10.846-.365V41L44 23.545L27.882 7v10.167c-6.349.05-11.746 2.328-16.192 6.833C7.245 28.505 4.681 34.117 4 40.836Z","clip-rule":"evenodd"})})]}),(0,i.jsx)("h1",{className:"text-8xl font-semibold",children:"BuddyBoss Web"})]}),(0,i.jsx)("h2",{className:"text-3xl font-light",children:"WordPress for online learning & community."}),(0,i.jsx)("h3",{className:"text-5xl font-semibold",children:"Unlock online learning and full-scale social networking features on your website."}),(0,i.jsxs)("div",{className:"space-x-4 py-8",children:[(0,i.jsx)("button",{className:"btn btn-secondary px-12",children:"Buy Now"}),(0,i.jsxs)("button",{className:"btn px-6",children:["Learn More",(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"11.86",viewBox:"0 0 1728 1280",children:(0,i.jsx)("g",{transform:"translate(1728 0) scale(-1 1)",children:(0,i.jsx)("path",{fill:"currentColor",d:"M1728 544v192q0 14-9 23t-23 9H448v224q0 21-19 29t-35-5L10 666Q0 656 0 643q0-14 10-24l384-354q16-14 35-6q19 9 19 29v224h1248q14 0 23 9t9 23z"})})})]})]})]})})}function x(){return(0,i.jsx)("section",{className:"p-12 bg-base-300 rounded-box",children:(0,i.jsxs)("div",{className:"text-gray-600 gap-x-12 items-start justify-between lg:flex",children:[(0,i.jsxs)("div",{className:"mt-6 gap-12 sm:mt-0 md:flex lg:block",children:[(0,i.jsxs)("div",{className:"max-w-2xl",children:[(0,i.jsx)("h3",{className:"text-gray-800 text-3xl font-semibold sm:text-4xl",children:"We do our best to make customers always happy"}),(0,i.jsx)("p",{className:"mt-3 max-w-xl",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt."})]}),(0,i.jsx)("div",{className:"flex-none mt-6 md:mt-0 lg:mt-6",children:(0,i.jsx)("ul",{className:"inline-grid gap-y-8 gap-x-14 grid-cols-2",children:[{data:"35K",title:"Customers"},{data:"10K+",title:"Downloads"},{data:"40+",title:"Countries"},{data:"30M+",title:"Total revenue"}].map((e,t)=>(0,i.jsxs)("li",{className:"",children:[(0,i.jsx)("h4",{className:"text-4xl text-indigo-600 font-semibold",children:e.data}),(0,i.jsx)("p",{className:"mt-3 font-medium",children:e.title})]},t))})})]}),(0,i.jsx)("div",{className:"sm:hidden lg:block lg:max-w-xl",children:(0,i.jsx)("img",{src:"https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",className:"rounded-lg",alt:""})})]})})}function f(){return(0,i.jsx)("section",{className:"pt-6",children:(0,i.jsxs)("ul",{className:"grid gap-6 sm:grid-cols-2",children:[(0,i.jsx)("li",{className:"bg-accent/10 p-8 rounded-box",children:(0,i.jsxs)("figure",{className:"space-y-4",children:[(0,i.jsx)("div",{className:"font-semibold text-4xl",children:"User-experience."}),(0,i.jsx)("div",{children:"Feelin’ good about it."}),(0,i.jsx)("p",{children:"Every part of the platform aims to make pleasant experiences for your members, on any device."}),(0,i.jsx)("div",{className:"flex items-center justify-center pt-8",children:(0,i.jsx)(a(),{src:"/img/card/group.png",width:0,height:0,sizes:"100vw",style:{width:"auto",height:"auto",maxHeight:"240px"}})})]})}),(0,i.jsx)("li",{className:"bg-purple-50 p-8 rounded-box",children:(0,i.jsxs)("figure",{className:"space-y-4",children:[(0,i.jsx)("div",{className:"flex items-center justify-center pb-8",children:(0,i.jsx)(a(),{src:"/img/card/dashboard.png",width:0,height:0,sizes:"100vw",style:{width:"auto",height:"auto",maxHeight:"240px"}})}),(0,i.jsx)("div",{className:"font-semibold text-4xl",children:"Functionality & design."}),(0,i.jsx)("div",{children:"Lookin’ good doing it. ."}),(0,i.jsx)("p",{children:"Create beautiful websites and apps with an intuitive design for your users."})]})})]})})}function p(){return(0,i.jsx)("section",{className:"pt-6",children:(0,i.jsx)("ul",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:[{pic:"/img/card/rocket.png",title:"Speed and responsiveness.",caption:"Dashin’ all the way.",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."},{pic:"/img/card/security.png",title:"Security.",caption:"Protectin’ your people.",content:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."},{pic:"/img/card/friends.png",title:"Unmatched Value.",caption:"Rankin’ right.",content:"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."}].map((e,t)=>(0,i.jsx)("li",{className:"bg-base-300 p-8 rounded-box",children:(0,i.jsxs)("figure",{className:"space-y-4",children:[(0,i.jsx)("div",{className:"flex items-center justify-center gap-x-4",children:(0,i.jsx)(a(),{src:e.pic,width:0,height:0,sizes:"100vw",style:{width:"auto",height:"auto",maxHeight:"160px"}})}),(0,i.jsx)("div",{className:"font-semibold text-4xl",children:e.title}),(0,i.jsx)("div",{children:e.caption}),(0,i.jsx)("p",{children:e.content})]})},t))})})}function g(){let e=[{icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})}),title:"Fast Refresh",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."},{icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})}),title:"Analytics",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."},{icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})}),title:"Datacenter security",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."},{icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"})}),title:"Build on your terms",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."},{icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),title:"Safe to use",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."},{icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"})}),title:"Flexible",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."}];return(0,i.jsx)("section",{className:"py-14",children:(0,i.jsxs)("div",{className:"max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8",children:[(0,i.jsxs)("div",{className:"relative max-w-2xl mx-auto sm:text-center",children:[(0,i.jsxs)("div",{className:"relative z-10",children:[(0,i.jsx)("h3",{className:"text-gray-800 text-3xl font-semibold sm:text-4xl",children:"Let’s help power your SaaS"}),(0,i.jsx)("p",{className:"mt-3",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."})]}),(0,i.jsx)("div",{className:"absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]",style:{background:"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"}})]}),(0,i.jsx)("div",{className:"relative mt-12",children:(0,i.jsx)("ul",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3",children:e.map((e,t)=>(0,i.jsxs)("li",{className:"bg-white space-y-3 p-4 border rounded-lg",children:[(0,i.jsx)("div",{className:"text-indigo-600 pb-3",children:e.icon}),(0,i.jsx)("h4",{className:"text-lg text-gray-800 font-semibold",children:e.title}),(0,i.jsx)("p",{children:e.desc})]},t))})})]})})}function v(){return(0,i.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,i.jsx)("header",{className:"sticky top-0 z-50",children:(0,i.jsx)(l,{})}),(0,i.jsxs)("main",{className:"flex-1",children:[(0,i.jsx)(m,{}),(0,i.jsxs)("div",{className:"-mt-56 space-y-10",children:[(0,i.jsx)("div",{className:"font-semibold text-3xl text-center",children:"COURSES & COMMUNITY"}),(0,i.jsx)(u,{}),(0,i.jsx)(u,{rtl:!0}),(0,i.jsx)("div",{className:"text-center",children:(0,i.jsxs)("button",{className:"btn btn-secondary px-12",children:["Explore BuddyBoss Web"," ",(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"11.86",viewBox:"0 0 1728 1280",children:(0,i.jsx)("g",{transform:"translate(1728 0) scale(-1 1)",children:(0,i.jsx)("path",{fill:"currentColor",d:"M1728 544v192q0 14-9 23t-23 9H448v224q0 21-19 29t-35-5L10 666Q0 656 0 643q0-14 10-24l384-354q16-14 35-6q19 9 19 29v224h1248q14 0 23 9t9 23z"})})})]})})]}),(0,i.jsxs)("div",{className:"container mx-auto py-12",children:[(0,i.jsxs)("div",{className:"text-center font-bold max-w-3xl mx-auto py-12",children:[(0,i.jsx)("div",{className:"text-xl mb-4 text-accent",children:"BUDDYBOSS WEB"}),(0,i.jsx)("div",{className:"text-5xl font-semibold",children:"Get the power to take your business to the next level."})]}),(0,i.jsx)(x,{}),(0,i.jsx)(f,{}),(0,i.jsx)(p,{}),(0,i.jsx)(g,{})]})]}),(0,i.jsx)(h,{})]})}v.getLayout=e=>(0,i.jsx)(s.Z,{children:e})},3780:function(){}},function(e){e.O(0,[873,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);