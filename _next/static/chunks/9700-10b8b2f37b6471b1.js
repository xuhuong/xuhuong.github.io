"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9700],{9700:function(e,t,r){r.d(t,{cI:function(){return eh}});var a=r(6006),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,p=(e,t,r)=>{if(!t||!n(e))return r;let a=h(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return v(a)||a===e?v(e[t])?r:e[t]:a};let g={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},b={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},_={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};a.createContext(null);var V=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>(t._proxyFormState[i]!==b.all&&(t._proxyFormState[i]=!a||b.all),r&&(r[i]=!0),e[i])});return s},A=e=>n(e)&&!Object.keys(e).length,w=(e,t,r,a)=>{r(e);let{name:s,...i}=e;return A(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||b.all))},x=e=>Array.isArray(e)?e:[e],F=e=>"string"==typeof e,S=(e,t,r,a,s)=>F(e)?(a&&t.watch.add(e),p(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),p(r,e))):(a&&(t.watchAll=!0),r),k=e=>/^\w*$/.test(e),D=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/));function O(e,t,r){let a=-1,s=k(t)?[t]:D(t),i=s.length,l=i-1;for(;++a<i;){let t=s[a],i=r;if(a!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}e[t]=i,e=e[t]}return e}var C=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{};let E=(e,t,r)=>{for(let a of r||Object.keys(e)){let r=p(e,a);if(r){let{_f:e,...a}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else n(a)&&E(a,t)}}};var T=e=>({isOnSubmit:!e||e===b.onSubmit,isOnBlur:e===b.onBlur,isOnChange:e===b.onChange,isOnAll:e===b.all,isOnTouch:e===b.onTouched}),L=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),U=(e,t,r)=>{let a=h(p(e,r));return O(a,"root",t[r]),O(e,r,a),e},B=e=>"boolean"==typeof e,j=e=>"file"===e.type,N=e=>"function"==typeof e,M=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},q=e=>F(e),P=e=>"radio"===e.type,R=e=>e instanceof RegExp;let H={value:!1,isValid:!1},I={value:!0,isValid:!0};var $=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?I:{value:e[0].value,isValid:!0}:I:H}return H};let G={isValid:!1,value:null};var W=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,G):G;function z(e,t,r="validate"){if(q(e)||Array.isArray(e)&&e.every(q)||B(e)&&!e)return{type:r,message:q(e)?e:"",ref:t}}var J=e=>n(e)&&!R(e)?e:{value:e,message:""},K=async(e,t,r,a,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:h,validate:g,name:b,valueAsNumber:V,mount:w,disabled:x}=e._f,S=p(t,b);if(!w||x)return{};let k=o?o[0]:u,D=e=>{a&&k.reportValidity&&(k.setCustomValidity(B(e)?"":e||""),k.reportValidity())},O={},E=P(u),T=s(u),L=(V||j(u))&&v(u.value)&&v(S)||M(u)&&""===u.value||""===S||Array.isArray(S)&&!S.length,U=C.bind(null,b,r,O),H=(e,t,r,a=_.maxLength,s=_.minLength)=>{let i=e?t:r;O[b]={type:e?a:s,message:i,ref:u,...U(e?a:s,i)}};if(i?!Array.isArray(S)||!S.length:d&&(!(E||T)&&(L||l(S))||B(S)&&!S||T&&!$(o).isValid||E&&!W(o).isValid)){let{value:e,message:t}=q(d)?{value:!!d,message:d}:J(d);if(e&&(O[b]={type:_.required,message:t,ref:k,...U(_.required,t)},!r))return D(t),O}if(!L&&(!l(y)||!l(m))){let e,t;let a=J(m),s=J(y);if(l(S)||isNaN(S)){let r=u.valueAsDate||new Date(S),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;F(a.value)&&S&&(e=l?i(S)>i(a.value):n?S>a.value:r>new Date(a.value)),F(s.value)&&S&&(t=l?i(S)<i(s.value):n?S<s.value:r<new Date(s.value))}else{let r=u.valueAsNumber||(S?+S:S);l(a.value)||(e=r>a.value),l(s.value)||(t=r<s.value)}if((e||t)&&(H(!!e,a.message,s.message,_.max,_.min),!r))return D(O[b].message),O}if((f||c)&&!L&&(F(S)||i&&Array.isArray(S))){let e=J(f),t=J(c),a=!l(e.value)&&S.length>+e.value,s=!l(t.value)&&S.length<+t.value;if((a||s)&&(H(a,e.message,t.message),!r))return D(O[b].message),O}if(h&&!L&&F(S)){let{value:e,message:t}=J(h);if(R(e)&&!S.match(e)&&(O[b]={type:_.pattern,message:t,ref:u,...U(_.pattern,t)},!r))return D(t),O}if(g){if(N(g)){let e=await g(S,t),a=z(e,k);if(a&&(O[b]={...a,...U(_.validate,a.message)},!r))return D(a.message),O}else if(n(g)){let e={};for(let a in g){if(!A(e)&&!r)break;let s=z(await g[a](S,t),k,a);s&&(e={...s,...U(a,s.message)},D(s.message),r&&(O[b]=e))}if(!A(e)&&(O[b]={ref:k,...e},!r))return O}}return D(!0),O};function Q(e,t){let r=Array.isArray(t)?t:k(t)?[t]:D(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=v(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,i=r[s];return a&&delete a[i],0!==s&&(n(a)&&A(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(a))&&Q(e,r.slice(0,-1)),e}function X(){let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}}var Y=e=>l(e)||!u(e);function Z(e,t){if(Y(e)||Y(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!Z(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,et=e=>P(e)||s(e),er=e=>M(e)&&e.isConnected,ea=e=>{for(let t in e)if(N(e[t]))return!0;return!1};function es(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!ea(e[r])?(t[r]=Array.isArray(e[r])?[]:{},es(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ei=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(n(t)||s)for(let s in t)Array.isArray(t[s])||n(t[s])&&!ea(t[s])?v(r)||Y(a[s])?a[s]=Array.isArray(t[s])?es(t[s],[]):{...es(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!Z(t[s],r[s]);return a})(e,t,es(t)),el=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&F(e)?new Date(e):a?a(e):e;function eu(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:j(t)?t.files:P(t)?W(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?$(e.refs).value:el(v(t.value)?e.ref.value:t.value,e)}var en=(e,t,r,a)=>{let s={};for(let r of e){let e=p(t,r);e&&O(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},eo=e=>v(e)?e:R(e)?e.source:n(e)?R(e.value)?e.value.source:e.value:e,ed=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ef(e,t,r){let a=p(e,r);if(a||k(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),i=p(t,a),l=p(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(l&&l.type)return{name:a,error:l};s.pop()}return{name:r}}var ec=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),ey=(e,t)=>!h(p(e,t)).length&&Q(e,t);let em={mode:b.onSubmit,reValidateMode:b.onChange,shouldFocusError:!0};function eh(e={}){let t=a.useRef(),r=a.useRef(),[u,d]=a.useState({isDirty:!1,isValidating:!1,isLoading:N(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:N(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,a={...em,...e},u={submitCount:0,isDirty:!1,isLoading:N(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},d={},c=(n(a.defaultValues)||n(a.values))&&m(a.defaultValues||a.values)||{},_=a.shouldUnregister?{}:m(c),V={action:!1,mount:!1,watch:!1},w={mount:new Set,unMount:new Set,array:new Set,watch:new Set},k=0,D={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},C={values:X(),array:X(),state:X()},q=e.resetOptions&&e.resetOptions.keepDirtyValues,P=T(a.mode),R=T(a.reValidateMode),H=a.criteriaMode===b.all,I=e=>t=>{clearTimeout(k),k=setTimeout(e,t)},$=async e=>{if(D.isValid||e){let e=a.resolver?A((await es()).errors):await ev(d,!0);e!==u.isValid&&C.state.next({isValid:e})}},G=e=>D.isValidating&&C.state.next({isValidating:e}),W=(e,t)=>{O(u.errors,e,t),C.state.next({errors:u.errors})},z=(e,t,r,a)=>{let s=p(d,e);if(s){let i=p(_,e,v(r)?p(c,e):r);v(i)||a&&a.defaultChecked||t?O(_,e,t?i:eu(s._f)):eb(e,i),V.mount&&$()}},J=(e,t,r,a,s)=>{let i=!1,l=!1,n={name:e};if(!r||a){D.isDirty&&(l=u.isDirty,u.isDirty=n.isDirty=ep(),i=l!==n.isDirty);let r=Z(p(c,e),t);l=p(u.dirtyFields,e),r?Q(u.dirtyFields,e):O(u.dirtyFields,e,!0),n.dirtyFields=u.dirtyFields,i=i||D.dirtyFields&&!r!==l}if(r){let t=p(u.touchedFields,e);t||(O(u.touchedFields,e,r),n.touchedFields=u.touchedFields,i=i||D.touchedFields&&t!==r)}return i&&s&&C.state.next(n),i?n:{}},ea=(t,a,s,i)=>{let l=p(u.errors,t),n=D.isValid&&B(a)&&u.isValid!==a;if(e.delayError&&s?(r=I(()=>W(t,s)))(e.delayError):(clearTimeout(k),r=null,s?O(u.errors,t,s):Q(u.errors,t)),(s?!Z(l,s):l)||!A(i)||n){let e={...i,...n&&B(a)?{isValid:a}:{},errors:u.errors,name:t};u={...u,...e},C.state.next(e)}G(!1)},es=async e=>a.resolver(_,a.context,en(e||w.mount,d,a.criteriaMode,a.shouldUseNativeValidation)),eh=async e=>{let{errors:t}=await es();if(e)for(let r of e){let e=p(t,r);e?O(u.errors,r,e):Q(u.errors,r)}else u.errors=t;return t},ev=async(e,t,r={valid:!0})=>{for(let s in e){let i=e[s];if(i){let{_f:e,...s}=i;if(e){let s=w.array.has(e.name),l=await K(i,_,H,a.shouldUseNativeValidation&&!t,s);if(l[e.name]&&(r.valid=!1,t))break;t||(p(l,e.name)?s?U(u.errors,l,e.name):O(u.errors,e.name,l[e.name]):Q(u.errors,e.name))}s&&await ev(s,t,r)}}return r.valid},ep=(e,t)=>(e&&t&&O(_,e,t),!Z(ex(),c)),eg=(e,t,r)=>S(e,w,{...V.mount?_:v(t)?c:F(e)?{[e]:t}:t},r,t),eb=(e,t,r={})=>{let a=p(d,e),i=t;if(a){let r=a._f;r&&(r.disabled||O(_,e,el(t,r)),i=M(r.ref)&&l(t)?"":t,ee(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):j(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||C.values.next({name:e,values:{..._}})))}(r.shouldDirty||r.shouldTouch)&&J(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},e_=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,u=p(d,l);!w.array.has(e)&&Y(s)&&(!u||u._f)||i(s)?eb(l,s,r):e_(l,s,r)}},eV=(e,r,a={})=>{let s=p(d,e),i=w.array.has(e),n=m(r);O(_,e,n),i?(C.array.next({name:e,values:{..._}}),(D.isDirty||D.dirtyFields)&&a.shouldDirty&&C.state.next({name:e,dirtyFields:ei(c,_),isDirty:ep(e,n)})):!s||s._f||l(n)?eb(e,n,a):e_(e,n,a),L(e,w)&&C.state.next({...u}),C.values.next({name:e,values:{..._}}),V.mount||t()},eA=async e=>{let t=e.target,s=t.name,i=!0,l=p(d,s);if(l){let n,f;let c=t.type?eu(l._f):o(e),y=e.type===g.BLUR||e.type===g.FOCUS_OUT,m=!ed(l._f)&&!a.resolver&&!p(u.errors,s)&&!l._f.deps||ec(y,p(u.touchedFields,s),u.isSubmitted,R,P),h=L(s,w,y);O(_,s,c),y?(l._f.onBlur&&l._f.onBlur(e),r&&r(0)):l._f.onChange&&l._f.onChange(e);let v=J(s,c,y,!1),b=!A(v)||h;if(y||C.values.next({name:s,type:e.type,values:{..._}}),m)return D.isValid&&$(),b&&C.state.next({name:s,...h?{}:v});if(!y&&h&&C.state.next({...u}),G(!0),a.resolver){let{errors:e}=await es([s]),t=ef(u.errors,d,s),r=ef(e,d,t.name||s);n=r.error,s=r.name,f=A(e)}else n=(await K(l,_,H,a.shouldUseNativeValidation))[s],(i=isNaN(c)||c===p(_,s,c))&&(n?f=!1:D.isValid&&(f=await ev(d,!0)));i&&(l._f.deps&&ew(l._f.deps),ea(s,f,n,v))}},ew=async(e,t={})=>{let r,s;let i=x(e);if(G(!0),a.resolver){let t=await eh(v(e)?e:i);r=A(t),s=e?!i.some(e=>p(t,e)):r}else e?((s=(await Promise.all(i.map(async e=>{let t=p(d,e);return await ev(t&&t._f?{[e]:t}:t)}))).every(Boolean))||u.isValid)&&$():s=r=await ev(d);return C.state.next({...!F(e)||D.isValid&&r!==u.isValid?{}:{name:e},...a.resolver||!e?{isValid:r}:{},errors:u.errors,isValidating:!1}),t.shouldFocus&&!s&&E(d,e=>e&&p(u.errors,e),e?i:w.mount),s},ex=e=>{let t={...c,...V.mount?_:{}};return v(e)?t:F(e)?p(t,e):e.map(e=>p(t,e))},eF=(e,t)=>({invalid:!!p((t||u).errors,e),isDirty:!!p((t||u).dirtyFields,e),isTouched:!!p((t||u).touchedFields,e),error:p((t||u).errors,e)}),eS=(e,t,r)=>{let a=(p(d,e,{_f:{}})._f||{}).ref;O(u.errors,e,{...t,ref:a}),C.state.next({name:e,errors:u.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},ek=(e,t={})=>{for(let r of e?x(e):w.mount)w.mount.delete(r),w.array.delete(r),t.keepValue||(Q(d,r),Q(_,r)),t.keepError||Q(u.errors,r),t.keepDirty||Q(u.dirtyFields,r),t.keepTouched||Q(u.touchedFields,r),a.shouldUnregister||t.keepDefaultValue||Q(c,r);C.values.next({values:{..._}}),C.state.next({...u,...t.keepDirty?{isDirty:ep()}:{}}),t.keepIsValid||$()},eD=(e,t={})=>{let r=p(d,e),s=B(t.disabled);return O(d,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),w.mount.add(e),v(t.value)||O(_,e,t.value),r?s&&O(_,e,t.disabled?void 0:p(_,e,eu(r._f))):z(e,!0,t.value),{...s?{disabled:t.disabled}:{},...a.progressive?{required:!!t.required,min:eo(t.min),max:eo(t.max),minLength:eo(t.minLength),maxLength:eo(t.maxLength),pattern:eo(t.pattern)}:{},name:e,onChange:eA,onBlur:eA,ref:s=>{if(s){eD(e,t),r=p(d,e);let a=v(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=et(a),l=r._f.refs||[];(i?l.find(e=>e===a):a===r._f.ref)||(O(d,e,{_f:{...r._f,...i?{refs:[...l.filter(er),a,...Array.isArray(p(c,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),z(e,!1,void 0,a))}else(r=p(d,e,{}))._f&&(r._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&!(f(w.array,e)&&V.action)&&w.unMount.add(e)}}},eO=()=>a.shouldFocusError&&E(d,e=>e&&p(u.errors,e),w.mount),eC=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=m(_);if(C.state.next({isSubmitting:!0}),a.resolver){let{errors:e,values:t}=await es();u.errors=e,s=t}else await ev(d);Q(u.errors,"root"),A(u.errors)?(C.state.next({errors:{}}),await e(s,r)):(t&&await t({...u.errors},r),eO(),setTimeout(eO)),C.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:A(u.errors),submitCount:u.submitCount+1,errors:u.errors})},eE=(r,a={})=>{let s=r||c,i=m(s),l=r&&!A(r)?i:c;if(a.keepDefaultValues||(c=s),!a.keepValues){if(a.keepDirtyValues||q)for(let e of w.mount)p(u.dirtyFields,e)?O(l,e,p(_,e)):eV(e,p(l,e));else{if(y&&v(r))for(let e of w.mount){let t=p(d,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(M(e)){let t=e.closest("form");if(t){t.reset();break}}}}d={}}_=e.shouldUnregister?a.keepDefaultValues?m(c):{}:m(l),C.array.next({values:{...l}}),C.values.next({values:{...l}})}w={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},V.mount||t(),V.mount=!D.isValid||!!a.keepIsValid,V.watch=!!e.shouldUnregister,C.state.next({submitCount:a.keepSubmitCount?u.submitCount:0,isDirty:a.keepDirty?u.isDirty:!!(a.keepDefaultValues&&!Z(r,c)),isSubmitted:!!a.keepIsSubmitted&&u.isSubmitted,dirtyFields:a.keepDirtyValues?u.dirtyFields:a.keepDefaultValues&&r?ei(c,r):{},touchedFields:a.keepTouched?u.touchedFields:{},errors:a.keepErrors?u.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eT=(e,t)=>eE(N(e)?e(_):e,t);return{control:{register:eD,unregister:ek,getFieldState:eF,handleSubmit:eC,setError:eS,_executeSchema:es,_getWatch:eg,_getDirty:ep,_updateValid:$,_removeUnmounted:()=>{for(let e of w.unMount){let t=p(d,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&ek(e)}w.unMount=new Set},_updateFieldArray:(e,t=[],r,a,s=!0,i=!0)=>{if(a&&r){if(V.action=!0,i&&Array.isArray(p(d,e))){let t=r(p(d,e),a.argA,a.argB);s&&O(d,e,t)}if(i&&Array.isArray(p(u.errors,e))){let t=r(p(u.errors,e),a.argA,a.argB);s&&O(u.errors,e,t),ey(u.errors,e)}if(D.touchedFields&&i&&Array.isArray(p(u.touchedFields,e))){let t=r(p(u.touchedFields,e),a.argA,a.argB);s&&O(u.touchedFields,e,t)}D.dirtyFields&&(u.dirtyFields=ei(c,_)),C.state.next({name:e,isDirty:ep(e,t),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else O(_,e,t)},_getFieldArray:t=>h(p(V.mount?_:c,t,e.shouldUnregister?p(c,t,[]):[])),_reset:eE,_resetDefaultValues:()=>N(a.defaultValues)&&a.defaultValues().then(e=>{eT(e,a.resetOptions),C.state.next({isLoading:!1})}),_updateFormState:e=>{u={...u,...e}},_subjects:C,_proxyFormState:D,get _fields(){return d},get _formValues(){return _},get _state(){return V},set _state(value){V=value},get _defaultValues(){return c},get _names(){return w},set _names(value){w=value},get _formState(){return u},set _formState(value){u=value},get _options(){return a},set _options(value){a={...a,...value}}},trigger:ew,register:eD,handleSubmit:eC,watch:(e,t)=>N(e)?C.values.subscribe({next:r=>e(eg(void 0,t),r)}):eg(e,t,!0),setValue:eV,getValues:ex,reset:eT,resetField:(e,t={})=>{p(d,e)&&(v(t.defaultValue)?eV(e,p(c,e)):(eV(e,t.defaultValue),O(c,e,t.defaultValue)),t.keepTouched||Q(u.touchedFields,e),t.keepDirty||(Q(u.dirtyFields,e),u.isDirty=t.defaultValue?ep(e,p(c,e)):ep()),!t.keepError&&(Q(u.errors,e),D.isValid&&$()),C.state.next({...u}))},clearErrors:e=>{e&&x(e).forEach(e=>Q(u.errors,e)),C.state.next({errors:e?u.errors:{}})},unregister:ek,setError:eS,setFocus:(e,t={})=>{let r=p(d,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:eF}}(e,()=>d(e=>({...e}))),formState:u});let c=t.current.control;return c._options=e,!function(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:c._subjects.state,next:e=>{w(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),a.useEffect(()=>{e.values&&!Z(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values):c._resetDefaultValues()},[e.values,c]),a.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),t.current.formState=V(u,c),t.current}}}]);