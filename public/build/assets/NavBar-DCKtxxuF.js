import{r as s,j as b}from"./app-BdLFIebv.js";import{A as Fe}from"./ApplicationLogo-C_0oSb5m.js";import{t as Ue,c as Ye,f as K,e as ee,b as H,d as q,a as Xe,m as qe,o as Ze}from"./index-Dgr4ehzK.js";import{i as Ge,f as he,$ as Qe,z as Je}from"./chunk-XHQUSKIE-Y1l2saWI.js";import{A as Ke,L as Ee,f as je,m as ke,g as et,j as me,b as le}from"./chunk-DBLREEYE-CZHiUvsg.js";import{l as ce}from"./chunk-FGDGYNYV-BIO5l0jC.js";var tt=Object.create,Ne=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Pe=Object.getOwnPropertyNames,nt=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty,Re=(e,t)=>function(){return t||(0,e[Pe(e)[0]])((t={exports:{}}).exports,t),t.exports},ot=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Pe(t))!at.call(e,i)&&i!==n&&Ne(e,i,{get:()=>t[i],enumerable:!(a=rt(t,i))||a.enumerable});return e},it=(e,t,n)=>(n=e!=null?tt(nt(e)):{},ot(!e||!e.__esModule?Ne(n,"default",{value:e,enumerable:!0}):n,e)),ut=Re({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e){var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.iterator;function A(r){return r===null||typeof r!="object"?null:(r=_&&r[_]||r["@@iterator"],typeof r=="function"?r:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,v={};function x(r,o,p){this.props=r,this.context=o,this.refs=v,this.updater=p||I}x.prototype.isReactComponent={},x.prototype.setState=function(r,o){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,o,"setState")},x.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function E(){}E.prototype=x.prototype;function j(r,o,p){this.props=r,this.context=o,this.refs=v,this.updater=p||I}var $=j.prototype=new E;$.constructor=j,f($,x.prototype),$.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,T={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function V(r,o,p){var w,g={},N=null,R=null;if(o!=null)for(w in o.ref!==void 0&&(R=o.ref),o.key!==void 0&&(N=""+o.key),o)O.call(o,w)&&!L.hasOwnProperty(w)&&(g[w]=o[w]);var P=arguments.length-2;if(P===1)g.children=p;else if(1<P){for(var k=Array(P),B=0;B<P;B++)k[B]=arguments[B+2];g.children=k}if(r&&r.defaultProps)for(w in P=r.defaultProps,P)g[w]===void 0&&(g[w]=P[w]);return{$$typeof:t,type:r,key:N,ref:R,props:g,_owner:T.current}}function ue(r,o){return{$$typeof:t,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}}function G(r){return typeof r=="object"&&r!==null&&r.$$typeof===t}function Q(r){var o={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(p){return o[p]})}var J=/\/+/g;function z(r,o){return typeof r=="object"&&r!==null&&r.key!=null?Q(""+r.key):o.toString(36)}function D(r,o,p,w,g){var N=typeof r;(N==="undefined"||N==="boolean")&&(r=null);var R=!1;if(r===null)R=!0;else switch(N){case"string":case"number":R=!0;break;case"object":switch(r.$$typeof){case t:case n:R=!0}}if(R)return R=r,g=g(R),r=w===""?"."+z(R,0):w,C(g)?(p="",r!=null&&(p=r.replace(J,"$&/")+"/"),D(g,o,p,"",function(B){return B})):g!=null&&(G(g)&&(g=ue(g,p+(!g.key||R&&R.key===g.key?"":(""+g.key).replace(J,"$&/")+"/")+r)),o.push(g)),1;if(R=0,w=w===""?".":w+":",C(r))for(var P=0;P<r.length;P++){N=r[P];var k=w+z(N,P);R+=D(N,o,p,k,g)}else if(k=A(r),typeof k=="function")for(r=k.call(r),P=0;!(N=r.next()).done;)N=N.value,k=w+z(N,P++),R+=D(N,o,p,k,g);else if(N==="object")throw o=String(r),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return R}function F(r,o,p){if(r==null)return r;var w=[],g=0;return D(r,w,"","",function(N){return o.call(p,N,g++)}),w}function pe(r){if(r._status===-1){var o=r._result;o=o(),o.then(function(p){(r._status===0||r._status===-1)&&(r._status=1,r._result=p)},function(p){(r._status===0||r._status===-1)&&(r._status=2,r._result=p)}),r._status===-1&&(r._status=0,r._result=o)}if(r._status===1)return r._result.default;throw r._result}var M={current:null},y={transition:null},U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:y,ReactCurrentOwner:T};e.Children={map:F,forEach:function(r,o,p){F(r,function(){o.apply(this,arguments)},p)},count:function(r){var o=0;return F(r,function(){o++}),o},toArray:function(r){return F(r,function(o){return o})||[]},only:function(r){if(!G(r))throw Error("React.Children.only expected to receive a single React element child.");return r}},e.Component=x,e.Fragment=a,e.Profiler=u,e.PureComponent=j,e.StrictMode=i,e.Suspense=m,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,e.cloneElement=function(r,o,p){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var w=f({},r.props),g=r.key,N=r.ref,R=r._owner;if(o!=null){if(o.ref!==void 0&&(N=o.ref,R=T.current),o.key!==void 0&&(g=""+o.key),r.type&&r.type.defaultProps)var P=r.type.defaultProps;for(k in o)O.call(o,k)&&!L.hasOwnProperty(k)&&(w[k]=o[k]===void 0&&P!==void 0?P[k]:o[k])}var k=arguments.length-2;if(k===1)w.children=p;else if(1<k){P=Array(k);for(var B=0;B<k;B++)P[B]=arguments[B+2];w.children=P}return{$$typeof:t,type:r.type,key:g,ref:N,props:w,_owner:R}},e.createContext=function(r){return r={$$typeof:l,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:c,_context:r},r.Consumer=r},e.createElement=V,e.createFactory=function(r){var o=V.bind(null,r);return o.type=r,o},e.createRef=function(){return{current:null}},e.forwardRef=function(r){return{$$typeof:h,render:r}},e.isValidElement=G,e.lazy=function(r){return{$$typeof:S,_payload:{_status:-1,_result:r},_init:pe}},e.memo=function(r,o){return{$$typeof:d,type:r,compare:o===void 0?null:o}},e.startTransition=function(r){var o=y.transition;y.transition={};try{r()}finally{y.transition=o}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(r,o){return M.current.useCallback(r,o)},e.useContext=function(r){return M.current.useContext(r)},e.useDebugValue=function(){},e.useDeferredValue=function(r){return M.current.useDeferredValue(r)},e.useEffect=function(r,o){return M.current.useEffect(r,o)},e.useId=function(){return M.current.useId()},e.useImperativeHandle=function(r,o,p){return M.current.useImperativeHandle(r,o,p)},e.useInsertionEffect=function(r,o){return M.current.useInsertionEffect(r,o)},e.useLayoutEffect=function(r,o){return M.current.useLayoutEffect(r,o)},e.useMemo=function(r,o){return M.current.useMemo(r,o)},e.useReducer=function(r,o,p){return M.current.useReducer(r,o,p)},e.useRef=function(r){return M.current.useRef(r)},e.useState=function(r){return M.current.useState(r)},e.useSyncExternalStore=function(r,o,p){return M.current.useSyncExternalStore(r,o,p)},e.useTransition=function(){return M.current.useTransition()},e.version="18.2.0"}}),lt=Re({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e,t){t.exports=ut()}});/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=it(lt()),ct=(e,t)=>{var n;let a=[];const i=(n=ye.Children.map(e,c=>(0,ye.isValidElement)(c)&&c.type===t?(a.push(c),null):c))==null?void 0:n.filter(Boolean),u=a.length>=0?a:void 0;return[i,u]},W=function(){return W=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},W.apply(this,arguments)};function Oe(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n}function st(e,t,n){if(n||arguments.length===2)for(var a=0,i=t.length,u;a<i;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return e.concat(u||Array.prototype.slice.call(t))}var be=Ue({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...Ge],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height)_-_1px)]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),ne="right-scroll-bar-position",ae="width-before-scroll-bar",ft="with-scroll-bars-hidden",dt="--removed-body-scroll-bar-size";function se(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function vt(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(a){var i=n.value;i!==a&&(n.value=a,n.callback(a,i))}}}})[0];return n.callback=t,n.facade}var ht=typeof window<"u"?s.useLayoutEffect:s.useEffect,ge=new WeakMap;function pt(e,t){var n=vt(null,function(a){return e.forEach(function(i){return se(i,a)})});return ht(function(){var a=ge.get(n);if(a){var i=new Set(a),u=new Set(e),c=n.current;i.forEach(function(l){u.has(l)||se(l,null)}),u.forEach(function(l){i.has(l)||se(l,c)})}ge.set(n,e)},[e]),n}function mt(e){return e}function yt(e,t){t===void 0&&(t=mt);var n=[],a=!1,i={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(u){var c=t(u,a);return n.push(c),function(){n=n.filter(function(l){return l!==c})}},assignSyncMedium:function(u){for(a=!0;n.length;){var c=n;n=[],c.forEach(u)}n={push:function(l){return u(l)},filter:function(){return n}}},assignMedium:function(u){a=!0;var c=[];if(n.length){var l=n;n=[],l.forEach(u),c=n}var h=function(){var d=c;c=[],d.forEach(u)},m=function(){return Promise.resolve().then(h)};m(),n={push:function(d){c.push(d),m()},filter:function(d){return c=c.filter(d),n}}}};return i}function bt(e){e===void 0&&(e={});var t=yt(null);return t.options=W({async:!0,ssr:!1},e),t}var Me=function(e){var t=e.sideCar,n=Oe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw new Error("Sidecar medium not found");return s.createElement(a,W({},n))};Me.isSideCarExport=!0;function gt(e,t){return e.useMedium(t),Me}var Ie=bt(),fe=function(){},oe=s.forwardRef(function(e,t){var n=s.useRef(null),a=s.useState({onScrollCapture:fe,onWheelCapture:fe,onTouchMoveCapture:fe}),i=a[0],u=a[1],c=e.forwardProps,l=e.children,h=e.className,m=e.removeScrollBar,d=e.enabled,S=e.shards,_=e.sideCar,A=e.noIsolation,I=e.inert,f=e.allowPinchZoom,v=e.as,x=v===void 0?"div":v,E=e.gapMode,j=Oe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),$=_,C=pt([n,t]),O=W(W({},j),i);return s.createElement(s.Fragment,null,d&&s.createElement($,{sideCar:Ie,removeScrollBar:m,shards:S,noIsolation:A,inert:I,setCallbacks:u,allowPinchZoom:!!f,lockRef:n,gapMode:E}),c?s.cloneElement(s.Children.only(l),W(W({},O),{ref:C})):s.createElement(x,W({},O,{className:h,ref:C}),l))});oe.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};oe.classNames={fullWidth:ae,zeroRight:ne};var wt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function St(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=wt();return t&&e.setAttribute("nonce",t),e}function xt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function _t(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ct=function(){var e=0,t=null;return{add:function(n){e==0&&(t=St())&&(xt(t,n),_t(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Et=function(){var e=Ct();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},$e=function(){var e=Et(),t=function(n){var a=n.styles,i=n.dynamic;return e(a,i),null};return t},jt={left:0,top:0,right:0,gap:0},de=function(e){return parseInt(e||"",10)||0},kt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],a=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[de(n),de(a),de(i)]},Nt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return jt;var t=kt(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},Pt=$e(),Z="data-scroll-locked",Rt=function(e,t,n,a){var i=e.left,u=e.top,c=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ft,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(l,"px ").concat(a,`;
  }
  body[`).concat(Z,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(a,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(a,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ne,` {
    right: `).concat(l,"px ").concat(a,`;
  }
  
  .`).concat(ae,` {
    margin-right: `).concat(l,"px ").concat(a,`;
  }
  
  .`).concat(ne," .").concat(ne,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(ae," .").concat(ae,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(Z,`] {
    `).concat(dt,": ").concat(l,`px;
  }
`)},we=function(){var e=parseInt(document.body.getAttribute(Z)||"0",10);return isFinite(e)?e:0},Ot=function(){s.useEffect(function(){return document.body.setAttribute(Z,(we()+1).toString()),function(){var e=we()-1;e<=0?document.body.removeAttribute(Z):document.body.setAttribute(Z,e.toString())}},[])},Mt=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,i=a===void 0?"margin":a;Ot();var u=s.useMemo(function(){return Nt(i)},[i]);return s.createElement(Pt,{styles:Rt(u,!t,i,n?"":"!important")})},ve=!1;if(typeof window<"u")try{var te=Object.defineProperty({},"passive",{get:function(){return ve=!0,!0}});window.addEventListener("test",te,te),window.removeEventListener("test",te,te)}catch{ve=!1}var Y=ve?{passive:!1}:!1,It=function(e){return e.tagName==="TEXTAREA"},Ae=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!It(e)&&n[t]==="visible")},$t=function(e){return Ae(e,"overflowY")},At=function(e){return Ae(e,"overflowX")},Se=function(e,t){var n=t.ownerDocument,a=t;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var i=Te(e,a);if(i){var u=Be(e,a),c=u[1],l=u[2];if(c>l)return!0}a=a.parentNode}while(a&&a!==n.body);return!1},Tt=function(e){var t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;return[t,n,a]},Bt=function(e){var t=e.scrollLeft,n=e.scrollWidth,a=e.clientWidth;return[t,n,a]},Te=function(e,t){return e==="v"?$t(t):At(t)},Be=function(e,t){return e==="v"?Tt(t):Bt(t)},Lt=function(e,t){return e==="h"&&t==="rtl"?-1:1},Wt=function(e,t,n,a,i){var u=Lt(e,window.getComputedStyle(t).direction),c=u*a,l=n.target,h=t.contains(l),m=!1,d=c>0,S=0,_=0;do{var A=Be(e,l),I=A[0],f=A[1],v=A[2],x=f-v-u*I;(I||x)&&Te(e,l)&&(S+=x,_+=I),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!h&&l!==document.body||h&&(t.contains(l)||t===l));return(d&&(Math.abs(S)<1||!i)||!d&&(Math.abs(_)<1||!i))&&(m=!0),m},re=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},xe=function(e){return[e.deltaX,e.deltaY]},_e=function(e){return e&&"current"in e?e.current:e},Vt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Dt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ht=0,X=[];function zt(e){var t=s.useRef([]),n=s.useRef([0,0]),a=s.useRef(),i=s.useState(Ht++)[0],u=s.useState($e)[0],c=s.useRef(e);s.useEffect(function(){c.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var f=st([e.lockRef.current],(e.shards||[]).map(_e),!0).filter(Boolean);return f.forEach(function(v){return v.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),f.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=s.useCallback(function(f,v){if("touches"in f&&f.touches.length===2)return!c.current.allowPinchZoom;var x=re(f),E=n.current,j="deltaX"in f?f.deltaX:E[0]-x[0],$="deltaY"in f?f.deltaY:E[1]-x[1],C,O=f.target,T=Math.abs(j)>Math.abs($)?"h":"v";if("touches"in f&&T==="h"&&O.type==="range")return!1;var L=Se(T,O);if(!L)return!0;if(L?C=T:(C=T==="v"?"h":"v",L=Se(T,O)),!L)return!1;if(!a.current&&"changedTouches"in f&&(j||$)&&(a.current=C),!C)return!0;var V=a.current||C;return Wt(V,v,f,V==="h"?j:$,!0)},[]),h=s.useCallback(function(f){var v=f;if(!(!X.length||X[X.length-1]!==u)){var x="deltaY"in v?xe(v):re(v),E=t.current.filter(function(C){return C.name===v.type&&(C.target===v.target||v.target===C.shadowParent)&&Vt(C.delta,x)})[0];if(E&&E.should){v.cancelable&&v.preventDefault();return}if(!E){var j=(c.current.shards||[]).map(_e).filter(Boolean).filter(function(C){return C.contains(v.target)}),$=j.length>0?l(v,j[0]):!c.current.noIsolation;$&&v.cancelable&&v.preventDefault()}}},[]),m=s.useCallback(function(f,v,x,E){var j={name:f,delta:v,target:x,should:E,shadowParent:Ft(x)};t.current.push(j),setTimeout(function(){t.current=t.current.filter(function($){return $!==j})},1)},[]),d=s.useCallback(function(f){n.current=re(f),a.current=void 0},[]),S=s.useCallback(function(f){m(f.type,xe(f),f.target,l(f,e.lockRef.current))},[]),_=s.useCallback(function(f){m(f.type,re(f),f.target,l(f,e.lockRef.current))},[]);s.useEffect(function(){return X.push(u),e.setCallbacks({onScrollCapture:S,onWheelCapture:S,onTouchMoveCapture:_}),document.addEventListener("wheel",h,Y),document.addEventListener("touchmove",h,Y),document.addEventListener("touchstart",d,Y),function(){X=X.filter(function(f){return f!==u}),document.removeEventListener("wheel",h,Y),document.removeEventListener("touchmove",h,Y),document.removeEventListener("touchstart",d,Y)}},[]);var A=e.removeScrollBar,I=e.inert;return s.createElement(s.Fragment,null,I?s.createElement(u,{styles:Dt(i)}):null,A?s.createElement(Mt,{gapMode:e.gapMode}):null)}function Ft(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ut=gt(Ie,zt);var Le=s.forwardRef(function(e,t){return s.createElement(oe,W({},e,{ref:t,sideCar:Ut}))});Le.classNames=oe.classNames;var[Yt,ie]=Ye({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),Xt={enter:{height:"calc(100vh - var(--navbar-height) - 1px)",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},We=K((e,t)=>{var n,a;const{className:i,children:u,portalContainer:c,motionProps:l,style:h,...m}=e,d=ee(t),{slots:S,isMenuOpen:_,height:A,disableAnimation:I,classNames:f}=ie(),v=H(f==null?void 0:f.menu,i),x=s.useCallback(({children:j})=>b.jsx(Le,{forwardProps:!0,enabled:_,removeScrollBar:!1,children:j}),[_]),E=I?b.jsx(x,{children:b.jsx("ul",{ref:d,className:(n=S.menu)==null?void 0:n.call(S,{class:v}),"data-open":q(_),style:{"--navbar-height":A},...m,children:u})}):b.jsx(Ke,{mode:"wait",children:_?b.jsx(Ee,{features:je,children:b.jsx(x,{children:b.jsx(ke.ul,{ref:d,layoutScroll:!0,animate:"enter",className:(a=S.menu)==null?void 0:a.call(S,{class:v}),"data-open":q(_),exit:"exit",initial:"exit",style:{"--navbar-height":A,...h},variants:Xt,...he(l,m),children:u})})}):null});return b.jsx(et,{portalContainer:c,children:E})});We.displayName="NextUI.NavbarMenu";var qt=We,Zt={visible:{y:0,transition:{ease:me.easeOut}},hidden:{y:"-100%",transition:{ease:me.easeIn}}},Gt=typeof window<"u";function Ce(e){return Gt?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var Qt=e=>{const{elementRef:t,delay:n=30,callback:a,isEnabled:i}=e,u=s.useRef(i?Ce(t==null?void 0:t.current):{x:0,y:0}),c=s.useRef(null),l=s.useCallback(()=>{const h=Ce(t==null?void 0:t.current);typeof a=="function"&&a({prevPos:u.current,currPos:h}),u.current=h,c.current=null},[a,t]);return s.useEffect(()=>{if(!i)return;const h=()=>{n?c.current===null&&(c.current=setTimeout(l,n)):l()},m=(t==null?void 0:t.current)||window;return m.addEventListener("scroll",h),()=>{m.removeEventListener("scroll",h),c.current&&clearTimeout(c.current)}},[t==null?void 0:t.current,n,l,i]),u.current};function Jt(e){var t,n;const a=Xe(),[i,u]=qe(e,be.variantKeys),{ref:c,as:l,parentRef:h,height:m="4rem",shouldHideOnScroll:d=!1,disableScrollHandler:S=!1,onScrollPositionChange:_,isMenuOpen:A,isMenuDefaultOpen:I,onMenuOpenChange:f=()=>{},motionProps:v,className:x,classNames:E,...j}=i,$=l||"nav",C=(n=(t=e.disableAnimation)!=null?t:a==null?void 0:a.disableAnimation)!=null?n:!1,O=ee(c),T=s.useRef(0),L=s.useRef(0),[V,ue]=s.useState(!1),G=s.useCallback(y=>{f(y||!1)},[f]),[Q,J]=Qe(A,I??!1,G),z=()=>{if(O.current){const y=O.current.offsetWidth;y!==T.current&&(T.current=y)}};Je({ref:O,onResize:()=>{var y;((y=O.current)==null?void 0:y.offsetWidth)!==T.current&&(z(),J(!1))}}),s.useEffect(()=>{var y;z(),L.current=((y=O.current)==null?void 0:y.offsetHeight)||0},[]);const D=s.useMemo(()=>be({...u,disableAnimation:C,hideOnScroll:d}),[Ze(u),C,d]),F=H(E==null?void 0:E.base,x);return Qt({elementRef:h,isEnabled:d||!S,callback:({prevPos:y,currPos:U})=>{_==null||_(U.y),d&&ue(r=>{const o=U.y>y.y&&U.y>L.current;return o!==r?o:r})}}),{Component:$,slots:D,domRef:O,height:m,isHidden:V,disableAnimation:C,shouldHideOnScroll:d,isMenuOpen:Q,classNames:E,setIsMenuOpen:J,motionProps:v,getBaseProps:(y={})=>({...he(j,y),"data-hidden":q(V),"data-menu-open":q(Q),ref:O,className:D.base({class:H(F,y==null?void 0:y.className)}),style:{"--navbar-height":m,...j==null?void 0:j.style,...y==null?void 0:y.style}}),getWrapperProps:(y={})=>({...y,"data-menu-open":q(Q),className:D.wrapper({class:H(E==null?void 0:E.wrapper,y==null?void 0:y.className)})})}}var Ve=K((e,t)=>{const{children:n,...a}=e,i=Jt({...a,ref:t}),u=i.Component,[c,l]=ct(n,qt),h=b.jsxs(b.Fragment,{children:[b.jsx("header",{...i.getWrapperProps(),children:c}),l]});return b.jsx(Yt,{value:i,children:i.shouldHideOnScroll?b.jsx(Ee,{features:je,children:b.jsx(ke.nav,{animate:i.isHidden?"hidden":"visible",initial:!1,variants:Zt,...he(i.getBaseProps(),i.motionProps),children:h})}):b.jsx(u,{...i.getBaseProps(),children:h})})});Ve.displayName="NextUI.Navbar";var Kt=Ve,De=K((e,t)=>{var n;const{as:a,className:i,children:u,...c}=e,l=a||"div",h=ee(t),{slots:m,classNames:d}=ie(),S=H(d==null?void 0:d.brand,i);return b.jsx(l,{ref:h,className:(n=m.brand)==null?void 0:n.call(m,{class:S}),...c,children:u})});De.displayName="NextUI.NavbarBrand";var er=De,He=K((e,t)=>{var n;const{as:a,className:i,children:u,justify:c="start",...l}=e,h=a||"ul",m=ee(t),{slots:d,classNames:S}=ie(),_=H(S==null?void 0:S.content,i);return b.jsx(h,{ref:m,className:(n=d.content)==null?void 0:n.call(d,{class:_}),"data-justify":c,...l,children:u})});He.displayName="NextUI.NavbarContent";var tr=He,ze=K((e,t)=>{var n;const{as:a,className:i,children:u,isActive:c,...l}=e,h=a||"li",m=ee(t),{slots:d,classNames:S}=ie(),_=H(S==null?void 0:S.item,i);return b.jsx(h,{ref:m,className:(n=d.item)==null?void 0:n.call(d,{class:_}),"data-active":q(c),...l,children:u})});ze.displayName="NextUI.NavbarItem";var rr=ze;function cr({auth:e}){return b.jsxs(Kt,{maxWidth:"xl",className:"bg-neutral-900",children:[b.jsx(er,{children:b.jsx(Fe,{})}),b.jsx(tr,{justify:"end",children:b.jsx(rr,{children:e.user?b.jsx(le,{as:ce,color:"primary",href:route("project.index"),children:"Project"}):b.jsxs("div",{className:"flex gap-2",children:[b.jsx(le,{variant:"shadow",as:ce,color:"primary",href:route("login"),children:"Log in"}),b.jsx(le,{as:ce,color:"warning",variant:"flat",href:route("register"),className:"hidden md:flex",children:"Sign up"})]})})})]})}export{cr as N};