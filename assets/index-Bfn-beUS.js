(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var js={exports:{}},ti={},Vs={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),sc=Symbol.for("react.provider"),lc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Oa=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var $s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gs=Object.assign,qs={};function an(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||$s}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=an.prototype;function Wo(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||$s}var Bo=Wo.prototype=new Ks;Bo.constructor=Wo;Gs(Bo,an.prototype);Bo.isPureReactComponent=!0;var Da=Array.isArray,Ys=Object.prototype.hasOwnProperty,Uo={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ys.call(t,r)&&!Qs.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Yn,type:e,key:o,ref:a,props:i,_owner:Uo.current}}function pc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function mc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fa=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mc(""+e.key):t.toString(36)}function wr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case rc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ki(a,0):r,Da(i)?(n="",e!=null&&(n=e.replace(Fa,"$&/")+"/"),wr(i,t,n,"",function(c){return c})):i!=null&&(_o(i)&&(i=pc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Fa,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ki(o,s);a+=wr(o,t,n,l,i)}else if(l=hc(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ki(o,s++),a+=wr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function nr(e,t,n){if(e==null)return e;var r=[],i=0;return wr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},kr={transition:null},yc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Uo};function Js(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!_o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=an;P.Fragment=ic;P.Profiler=ac;P.PureComponent=Wo;P.StrictMode=oc;P.Suspense=cc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;P.act=Js;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gs({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Uo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Ys.call(t,l)&&!Qs.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Yn,type:e.type,key:i,ref:o,props:r,_owner:a}};P.createContext=function(e){return e={$$typeof:lc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sc,_context:e},e.Consumer=e};P.createElement=Xs;P.createFactory=function(e){var t=Xs.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:uc,render:e}};P.isValidElement=_o;P.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:gc}};P.memo=function(e,t){return{$$typeof:dc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};P.unstable_act=Js;P.useCallback=function(e,t){return se.current.useCallback(e,t)};P.useContext=function(e){return se.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return se.current.useDeferredValue(e)};P.useEffect=function(e,t){return se.current.useEffect(e,t)};P.useId=function(){return se.current.useId()};P.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return se.current.useMemo(e,t)};P.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};P.useRef=function(e){return se.current.useRef(e)};P.useState=function(e){return se.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return se.current.useTransition()};P.version="18.3.1";Vs.exports=P;var kt=Vs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc=kt,wc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,Tc=vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Sc.call(t,r)&&!Ec.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wc,type:e,key:o,ref:a,props:i,_owner:Tc.current}}ti.Fragment=kc;ti.jsx=Zs;ti.jsxs=Zs;js.exports=ti;var b=js.exports,el={exports:{}},ve={},tl={exports:{}},nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var C=E.length;E.push(R);e:for(;0<C;){var V=C-1>>>1,Y=E[V];if(0<i(Y,R))E[V]=R,E[C]=Y,C=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],C=E.pop();if(C!==R){E[0]=C;e:for(var V=0,Y=E.length,er=Y>>>1;V<er;){var mt=2*(V+1)-1,wi=E[mt],gt=mt+1,tr=E[gt];if(0>i(wi,C))gt<Y&&0>i(tr,wi)?(E[V]=tr,E[gt]=C,V=gt):(E[V]=wi,E[mt]=C,V=mt);else if(gt<Y&&0>i(tr,C))E[V]=tr,E[gt]=C,V=gt;else break e}}return R}function i(E,R){var C=E.sortIndex-R.sortIndex;return C!==0?C:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],h=1,m=null,p=3,v=!1,w=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=E)r(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(c)}}function g(E){if(k=!1,f(E),!w)if(n(l)!==null)w=!0,yi(T);else{var R=n(c);R!==null&&vi(g,R.startTime-E)}}function T(E,R){w=!1,k&&(k=!1,d(A),A=-1),v=!0;var C=p;try{for(f(R),m=n(l);m!==null&&(!(m.expirationTime>R)||E&&!Ae());){var V=m.callback;if(typeof V=="function"){m.callback=null,p=m.priorityLevel;var Y=V(m.expirationTime<=R);R=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(l)&&r(l),f(R)}else r(l);m=n(l)}if(m!==null)var er=!0;else{var mt=n(c);mt!==null&&vi(g,mt.startTime-R),er=!1}return er}finally{m=null,p=C,v=!1}}var I=!1,x=null,A=-1,j=5,N=-1;function Ae(){return!(e.unstable_now()-N<j)}function un(){if(x!==null){var E=e.unstable_now();N=E;var R=!0;try{R=x(!0,E)}finally{R?cn():(I=!1,x=null)}}else I=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var La=new MessageChannel,nc=La.port2;La.port1.onmessage=un,cn=function(){nc.postMessage(null)}}else cn=function(){O(un,0)};function yi(E){x=E,I||(I=!0,cn())}function vi(E,R){A=O(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,yi(T))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var C=p;p=R;try{return E()}finally{p=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var C=p;p=E;try{return R()}finally{p=C}},e.unstable_scheduleCallback=function(E,R,C){var V=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?V+C:V):C=V,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=C+Y,E={id:h++,callback:R,priorityLevel:E,startTime:C,expirationTime:Y,sortIndex:-1},C>V?(E.sortIndex=C,t(c,E),n(l)===null&&E===n(c)&&(k?(d(A),A=-1):k=!0,vi(g,C-V))):(E.sortIndex=Y,t(l,E),w||v||(w=!0,yi(T))),E},e.unstable_shouldYield=Ae,e.unstable_wrapCallback=function(E){var R=p;return function(){var C=p;p=R;try{return E.apply(this,arguments)}finally{p=C}}}})(nl);tl.exports=nl;var Ic=tl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=kt,ye=Ic;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rl=new Set,Mn={};function Nt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)rl.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=Object.prototype.hasOwnProperty,Ac=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},Ha={};function bc(e){return Gi.call(Ha,e)?!0:Gi.call(za,e)?!1:Ac.test(e)?Ha[e]=!0:(za[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cc(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function Vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jo,Vo);ee[t]=new le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jo,Vo);ee[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jo,Vo);ee[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function $o(e,t,n,r){var i=ee.hasOwnProperty(t)?ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cc(t,n,i,r)&&(n=null),r||i===null?bc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),il=Symbol.for("react.provider"),ol=Symbol.for("react.context"),qo=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Ko=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),al=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Si;function wn(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var Ti=!1;function Ei(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Pc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function Qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Ot:return"Portal";case qi:return"Profiler";case Go:return"StrictMode";case Ki:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ol:return(e.displayName||"Context")+".Consumer";case il:return(e._context.displayName||"Context")+".Provider";case qo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ko:return t=e.displayName||null,t!==null?t:Qi(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return Qi(e(t))}catch{}}return null}function Nc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qi(t);case 8:return t===Go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mc(e){var t=sl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Mc(e))}function ll(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ul(e,t){t=t.checked,t!=null&&$o(e,"checked",t,!1)}function Ji(e,t){ul(e,t);var n=ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zi(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zi(e,t,n){(t!=="number"||Nr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _a(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ct(n)}}function cl(e,t){var n=ct(t.value),r=ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,fl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Lc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function hl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function pl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Oc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,t){if(t){if(Oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,qt=null,Kt=null;function Va(e){if(e=Jn(e)){if(typeof oo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ai(t),oo(e.stateNode,e.type,t))}}function ml(e){qt?Kt?Kt.push(e):Kt=[e]:qt=e}function gl(){if(qt){var e=qt,t=Kt;if(Kt=qt=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function yl(e,t){return e(t)}function vl(){}var Ii=!1;function wl(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return yl(e,t,n)}finally{Ii=!1,(qt!==null||Kt!==null)&&(vl(),gl())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ao=!1;if(Ve)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ao=!1}function Dc(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var In=!1,Mr=null,Lr=!1,so=null,Fc={onError:function(e){In=!0,Mr=e}};function zc(e,t,n,r,i,o,a,s,l){In=!1,Mr=null,Dc.apply(Fc,arguments)}function Hc(e,t,n,r,i,o,a,s,l){if(zc.apply(this,arguments),In){if(In){var c=Mr;In=!1,Mr=null}else throw Error(y(198));Lr||(Lr=!0,so=c)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $a(e){if(Mt(e)!==e)throw Error(y(188))}function Wc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $a(i),e;if(o===r)return $a(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Sl(e){return e=Wc(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tl(e);if(t!==null)return t;e=e.sibling}return null}var El=ye.unstable_scheduleCallback,Ga=ye.unstable_cancelCallback,Bc=ye.unstable_shouldYield,Uc=ye.unstable_requestPaint,$=ye.unstable_now,_c=ye.unstable_getCurrentPriorityLevel,Qo=ye.unstable_ImmediatePriority,Il=ye.unstable_UserBlockingPriority,Or=ye.unstable_NormalPriority,jc=ye.unstable_LowPriority,xl=ye.unstable_IdlePriority,ni=null,ze=null;function Vc(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:qc,$c=Math.log,Gc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-($c(e)/Gc|0)|0}var ar=64,sr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Sn(s):(o&=a,o!==0&&(r=Sn(o)))}else a=n&~i,a!==0?r=Sn(a):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ne(t),i=1<<n,r|=e[n],t&=~i;return r}function Kc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ne(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Kc(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Al(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function xi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ne(t),e[t]=n}function Qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ne(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ne(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var L=0;function bl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rl,Jo,Cl,Pl,Nl,uo=!1,lr=[],nt=null,rt=null,it=null,Dn=new Map,Fn=new Map,Je=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qa(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function hn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jn(t),t!==null&&Jo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jc(e,t,n,r,i){switch(t){case"focusin":return nt=hn(nt,e,t,n,r,i),!0;case"dragenter":return rt=hn(rt,e,t,n,r,i),!0;case"mouseover":return it=hn(it,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Dn.set(o,hn(Dn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fn.set(o,hn(Fn.get(o)||null,e,t,n,r,i)),!0}return!1}function Ml(e){var t=St(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=kl(n),t!==null){e.blockedOn=t,Nl(e.priority,function(){Cl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);io=r,n.target.dispatchEvent(r),io=null}else return t=Jn(n),t!==null&&Jo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Sr(e)&&n.delete(t)}function Zc(){uo=!1,nt!==null&&Sr(nt)&&(nt=null),rt!==null&&Sr(rt)&&(rt=null),it!==null&&Sr(it)&&(it=null),Dn.forEach(Ka),Fn.forEach(Ka)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,uo||(uo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Zc)))}function zn(e){function t(i){return pn(i,e)}if(0<lr.length){pn(lr[0],e);for(var n=1;n<lr.length;n++){var r=lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&pn(nt,e),rt!==null&&pn(rt,e),it!==null&&pn(it,e),Dn.forEach(t),Fn.forEach(t),n=0;n<Je.length;n++)r=Je[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)Ml(n),n.blockedOn===null&&Je.shift()}var Yt=Ke.ReactCurrentBatchConfig,Fr=!0;function ed(e,t,n,r){var i=L,o=Yt.transition;Yt.transition=null;try{L=1,Zo(e,t,n,r)}finally{L=i,Yt.transition=o}}function td(e,t,n,r){var i=L,o=Yt.transition;Yt.transition=null;try{L=4,Zo(e,t,n,r)}finally{L=i,Yt.transition=o}}function Zo(e,t,n,r){if(Fr){var i=co(e,t,n,r);if(i===null)Di(e,t,r,zr,n),qa(e,r);else if(Jc(i,e,t,n,r))r.stopPropagation();else if(qa(e,r),t&4&&-1<Xc.indexOf(e)){for(;i!==null;){var o=Jn(i);if(o!==null&&Rl(o),o=co(e,t,n,r),o===null&&Di(e,t,r,zr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Di(e,t,r,null,n)}}var zr=null;function co(e,t,n,r){if(zr=null,e=Yo(r),e=St(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zr=e,null}function Ll(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case Qo:return 1;case Il:return 4;case Or:case jc:return 16;case xl:return 536870912;default:return 16}default:return 16}}var et=null,ea=null,Tr=null;function Ol(){if(Tr)return Tr;var e,t=ea,n=t.length,r,i="value"in et?et.value:et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Tr=i.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Ya(){return!1}function we(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Ya,this.isPropagationStopped=Ya,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=we(sn),Xn=U({},sn,{view:0,detail:0}),nd=we(Xn),Ai,bi,mn,ri=U({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Ai=e.screenX-mn.screenX,bi=e.screenY-mn.screenY):bi=Ai=0,mn=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),Qa=we(ri),rd=U({},ri,{dataTransfer:0}),id=we(rd),od=U({},Xn,{relatedTarget:0}),Ri=we(od),ad=U({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=we(ad),ld=U({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=we(ld),cd=U({},sn,{data:0}),Xa=we(cd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function na(){return pd}var md=U({},Xn,{key:function(e){if(e.key){var t=dd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=we(md),yd=U({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=we(yd),vd=U({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),wd=we(vd),kd=U({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=we(kd),Td=U({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=we(Td),Id=[9,13,27,32],ra=Ve&&"CompositionEvent"in window,xn=null;Ve&&"documentMode"in document&&(xn=document.documentMode);var xd=Ve&&"TextEvent"in window&&!xn,Dl=Ve&&(!ra||xn&&8<xn&&11>=xn),Za=" ",es=!1;function Fl(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Ad(e,t){switch(e){case"compositionend":return zl(t);case"keypress":return t.which!==32?null:(es=!0,Za);case"textInput":return e=t.data,e===Za&&es?null:e;default:return null}}function bd(e,t){if(Ft)return e==="compositionend"||!ra&&Fl(e,t)?(e=Ol(),Tr=ea=et=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dl&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rd[e.type]:t==="textarea"}function Hl(e,t,n,r){ml(r),t=Hr(t,"onChange"),0<t.length&&(n=new ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Hn=null;function Cd(e){Yl(e,0)}function ii(e){var t=Wt(e);if(ll(t))return e}function Pd(e,t){if(e==="change")return t}var Wl=!1;if(Ve){var Ci;if(Ve){var Pi="oninput"in document;if(!Pi){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),Pi=typeof ns.oninput=="function"}Ci=Pi}else Ci=!1;Wl=Ci&&(!document.documentMode||9<document.documentMode)}function rs(){An&&(An.detachEvent("onpropertychange",Bl),Hn=An=null)}function Bl(e){if(e.propertyName==="value"&&ii(Hn)){var t=[];Hl(t,Hn,e,Yo(e)),wl(Cd,t)}}function Nd(e,t,n){e==="focusin"?(rs(),An=t,Hn=n,An.attachEvent("onpropertychange",Bl)):e==="focusout"&&rs()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Hn)}function Ld(e,t){if(e==="click")return ii(t)}function Od(e,t){if(e==="input"||e==="change")return ii(t)}function Dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:Dd;function Wn(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gi.call(t,i)||!Le(e[i],t[i]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function os(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function Ul(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ul(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _l(){for(var e=window,t=Nr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nr(e.document)}return t}function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fd(e){var t=_l(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ul(n.ownerDocument.documentElement,n)){if(r!==null&&ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=os(n,o);var a=os(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zd=Ve&&"documentMode"in document&&11>=document.documentMode,zt=null,fo=null,bn=null,ho=!1;function as(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||zt==null||zt!==Nr(r)||(r=zt,"selectionStart"in r&&ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Wn(bn,r)||(bn=r,r=Hr(fo,"onSelect"),0<r.length&&(t=new ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ni={},jl={};Ve&&(jl=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function oi(e){if(Ni[e])return Ni[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jl)return Ni[e]=t[n];return e}var Vl=oi("animationend"),$l=oi("animationiteration"),Gl=oi("animationstart"),ql=oi("transitionend"),Kl=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Kl.set(e,t),Nt(t,[e])}for(var Mi=0;Mi<ss.length;Mi++){var Li=ss[Mi],Hd=Li.toLowerCase(),Wd=Li[0].toUpperCase()+Li.slice(1);ft(Hd,"on"+Wd)}ft(Vl,"onAnimationEnd");ft($l,"onAnimationIteration");ft(Gl,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(ql,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hc(r,t,void 0,e),e.currentTarget=null}function Yl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;ls(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;ls(i,s,c),o=l}}}if(Lr)throw e=so,Lr=!1,so=null,e}function F(e,t){var n=t[vo];n===void 0&&(n=t[vo]=new Set);var r=e+"__bubble";n.has(r)||(Ql(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),Ql(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[dr]){e[dr]=!0,rl.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Oi("selectionchange",!1,t))}}function Ql(e,t,n,r){switch(Ll(t)){case 1:var i=ed;break;case 4:i=td;break;default:i=Zo}n=i.bind(null,t,n,e),i=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=St(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}wl(function(){var c=o,h=Yo(n),m=[];e:{var p=Kl.get(e);if(p!==void 0){var v=ta,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":v=gd;break;case"focusin":w="focus",v=Ri;break;case"focusout":w="blur",v=Ri;break;case"beforeblur":case"afterblur":v=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wd;break;case Vl:case $l:case Gl:v=sd;break;case ql:v=Sd;break;case"scroll":v=nd;break;case"wheel":v=Ed;break;case"copy":case"cut":case"paste":v=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ja}var k=(t&4)!==0,O=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=On(u,d),g!=null&&k.push(Un(u,g,f)))),O)break;u=u.return}0<k.length&&(p=new v(p,w,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==io&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[$e]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?St(w):null,w!==null&&(O=Mt(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(k=Qa,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ja,g="onPointerLeave",d="onPointerEnter",u="pointer"),O=v==null?p:Wt(v),f=w==null?p:Wt(w),p=new k(g,u+"leave",v,n,h),p.target=O,p.relatedTarget=f,g=null,St(h)===c&&(k=new k(d,u+"enter",w,n,h),k.target=f,k.relatedTarget=O,g=k),O=g,v&&w)t:{for(k=v,d=w,u=0,f=k;f;f=Lt(f))u++;for(f=0,g=d;g;g=Lt(g))f++;for(;0<u-f;)k=Lt(k),u--;for(;0<f-u;)d=Lt(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Lt(k),d=Lt(d)}k=null}else k=null;v!==null&&us(m,p,v,k,!1),w!==null&&O!==null&&us(m,O,w,k,!0)}}e:{if(p=c?Wt(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=Pd;else if(ts(p))if(Wl)T=Od;else{T=Md;var I=Nd}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Ld);if(T&&(T=T(e,c))){Hl(m,T,n,h);break e}I&&I(e,p,c),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&Zi(p,"number",p.value)}switch(I=c?Wt(c):window,e){case"focusin":(ts(I)||I.contentEditable==="true")&&(zt=I,fo=c,bn=null);break;case"focusout":bn=fo=zt=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,as(m,n,h);break;case"selectionchange":if(zd)break;case"keydown":case"keyup":as(m,n,h)}var x;if(ra)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ft?Fl(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Dl&&n.locale!=="ko"&&(Ft||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ft&&(x=Ol()):(et=h,ea="value"in et?et.value:et.textContent,Ft=!0)),I=Hr(c,A),0<I.length&&(A=new Xa(A,e,null,n,h),m.push({event:A,listeners:I}),x?A.data=x:(x=zl(n),x!==null&&(A.data=x)))),(x=xd?Ad(e,n):bd(e,n))&&(c=Hr(c,"onBeforeInput"),0<c.length&&(h=new Xa("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=x))}Yl(m,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=On(e,n),o!=null&&r.unshift(Un(e,o,i)),o=On(e,t),o!=null&&r.push(Un(e,o,i))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=On(n,o),l!=null&&a.unshift(Un(n,l,s))):i||(l=On(n,o),l!=null&&a.push(Un(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ud=/\r\n?/g,_d=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace(_d,"")}function fr(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(y(425))}function Wr(){}var po=null,mo=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,jd=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Vd=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch($d)}:yo;function $d(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Fe="__reactFiber$"+ln,_n="__reactProps$"+ln,$e="__reactContainer$"+ln,vo="__reactEvents$"+ln,Gd="__reactListeners$"+ln,qd="__reactHandles$"+ln;function St(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fs(e);e!==null;){if(n=e[Fe])return n;e=fs(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Fe]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ai(e){return e[_n]||null}var wo=[],Bt=-1;function ht(e){return{current:e}}function z(e){0>Bt||(e.current=wo[Bt],wo[Bt]=null,Bt--)}function D(e,t){Bt++,wo[Bt]=e.current,e.current=t}var dt={},ie=ht(dt),de=ht(!1),At=dt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function Br(){z(de),z(ie)}function hs(e,t,n){if(ie.current!==dt)throw Error(y(168));D(ie,t),D(de,n)}function Xl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Nc(e)||"Unknown",i));return U({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,At=ie.current,D(ie,e),D(de,de.current),!0}function ps(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Xl(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,z(de),z(ie),D(ie,e)):z(de),D(de,n)}var Be=null,si=!1,zi=!1;function Jl(e){Be===null?Be=[e]:Be.push(e)}function Kd(e){si=!0,Jl(e)}function pt(){if(!zi&&Be!==null){zi=!0;var e=0,t=L;try{var n=Be;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,si=!1}catch(i){throw Be!==null&&(Be=Be.slice(e+1)),El(Qo,pt),i}finally{L=t,zi=!1}}return null}var Ut=[],_t=0,_r=null,jr=0,ke=[],Se=0,bt=null,Ue=1,_e="";function vt(e,t){Ut[_t++]=jr,Ut[_t++]=_r,_r=e,jr=t}function Zl(e,t,n){ke[Se++]=Ue,ke[Se++]=_e,ke[Se++]=bt,bt=e;var r=Ue;e=_e;var i=32-Ne(r)-1;r&=~(1<<i),n+=1;var o=32-Ne(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ue=1<<32-Ne(t)+i|n<<i|r,_e=o+e}else Ue=1<<o|n<<i|r,_e=e}function oa(e){e.return!==null&&(vt(e,1),Zl(e,1,0))}function aa(e){for(;e===_r;)_r=Ut[--_t],Ut[_t]=null,jr=Ut[--_t],Ut[_t]=null;for(;e===bt;)bt=ke[--Se],ke[Se]=null,_e=ke[--Se],ke[Se]=null,Ue=ke[--Se],ke[Se]=null}var ge=null,me=null,H=!1,Pe=null;function eu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ms(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,me=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:Ue,overflow:_e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,me=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(H){var t=me;if(t){var n=t;if(!ms(e,t)){if(ko(e))throw Error(y(418));t=ot(n.nextSibling);var r=ge;t&&ms(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,H=!1,ge=e)}}else{if(ko(e))throw Error(y(418));e.flags=e.flags&-4097|2,H=!1,ge=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function hr(e){if(e!==ge)return!1;if(!H)return gs(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=me)){if(ko(e))throw tu(),Error(y(418));for(;t;)eu(e,t),t=ot(t.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ge?ot(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=me;e;)e=ot(e.nextSibling)}function en(){me=ge=null,H=!1}function sa(e){Pe===null?Pe=[e]:Pe.push(e)}var Yd=Ke.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ys(e){var t=e._init;return t(e._payload)}function nu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=ut(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,g){return u===null||u.tag!==6?(u=Vi(f,d.mode,g),u.return=d,u):(u=i(u,f),u.return=d,u)}function l(d,u,f,g){var T=f.type;return T===Dt?h(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qe&&ys(T)===u.type)?(g=i(u,f.props),g.ref=gn(d,u,f),g.return=d,g):(g=Pr(f.type,f.key,f.props,null,d.mode,g),g.ref=gn(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=$i(f,d.mode,g),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function h(d,u,f,g,T){return u===null||u.tag!==7?(u=xt(f,d.mode,g,T),u.return=d,u):(u=i(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Vi(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return f=Pr(u.type,u.key,u.props,null,d.mode,f),f.ref=gn(d,null,u),f.return=d,f;case Ot:return u=$i(u,d.mode,f),u.return=d,u;case Qe:var g=u._init;return m(d,g(u._payload),f)}if(kn(u)||dn(u))return u=xt(u,d.mode,f,null),u.return=d,u;pr(d,u)}return null}function p(d,u,f,g){var T=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:s(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===T?l(d,u,f,g):null;case Ot:return f.key===T?c(d,u,f,g):null;case Qe:return T=f._init,p(d,u,T(f._payload),g)}if(kn(f)||dn(f))return T!==null?null:h(d,u,f,g,null);pr(d,f)}return null}function v(d,u,f,g,T){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,s(u,d,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?f:g.key)||null,l(u,d,g,T);case Ot:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,T);case Qe:var I=g._init;return v(d,u,f,I(g._payload),T)}if(kn(g)||dn(g))return d=d.get(f)||null,h(u,d,g,T,null);pr(u,g)}return null}function w(d,u,f,g){for(var T=null,I=null,x=u,A=u=0,j=null;x!==null&&A<f.length;A++){x.index>A?(j=x,x=null):j=x.sibling;var N=p(d,x,f[A],g);if(N===null){x===null&&(x=j);break}e&&x&&N.alternate===null&&t(d,x),u=o(N,u,A),I===null?T=N:I.sibling=N,I=N,x=j}if(A===f.length)return n(d,x),H&&vt(d,A),T;if(x===null){for(;A<f.length;A++)x=m(d,f[A],g),x!==null&&(u=o(x,u,A),I===null?T=x:I.sibling=x,I=x);return H&&vt(d,A),T}for(x=r(d,x);A<f.length;A++)j=v(x,d,A,f[A],g),j!==null&&(e&&j.alternate!==null&&x.delete(j.key===null?A:j.key),u=o(j,u,A),I===null?T=j:I.sibling=j,I=j);return e&&x.forEach(function(Ae){return t(d,Ae)}),H&&vt(d,A),T}function k(d,u,f,g){var T=dn(f);if(typeof T!="function")throw Error(y(150));if(f=T.call(f),f==null)throw Error(y(151));for(var I=T=null,x=u,A=u=0,j=null,N=f.next();x!==null&&!N.done;A++,N=f.next()){x.index>A?(j=x,x=null):j=x.sibling;var Ae=p(d,x,N.value,g);if(Ae===null){x===null&&(x=j);break}e&&x&&Ae.alternate===null&&t(d,x),u=o(Ae,u,A),I===null?T=Ae:I.sibling=Ae,I=Ae,x=j}if(N.done)return n(d,x),H&&vt(d,A),T;if(x===null){for(;!N.done;A++,N=f.next())N=m(d,N.value,g),N!==null&&(u=o(N,u,A),I===null?T=N:I.sibling=N,I=N);return H&&vt(d,A),T}for(x=r(d,x);!N.done;A++,N=f.next())N=v(x,d,A,N.value,g),N!==null&&(e&&N.alternate!==null&&x.delete(N.key===null?A:N.key),u=o(N,u,A),I===null?T=N:I.sibling=N,I=N);return e&&x.forEach(function(un){return t(d,un)}),H&&vt(d,A),T}function O(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Dt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var T=f.key,I=u;I!==null;){if(I.key===T){if(T=f.type,T===Dt){if(I.tag===7){n(d,I.sibling),u=i(I,f.props.children),u.return=d,d=u;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qe&&ys(T)===I.type){n(d,I.sibling),u=i(I,f.props),u.ref=gn(d,I,f),u.return=d,d=u;break e}n(d,I);break}else t(d,I);I=I.sibling}f.type===Dt?(u=xt(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=Pr(f.type,f.key,f.props,null,d.mode,g),g.ref=gn(d,u,f),g.return=d,d=g)}return a(d);case Ot:e:{for(I=f.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=$i(f,d.mode,g),u.return=d,d=u}return a(d);case Qe:return I=f._init,O(d,u,I(f._payload),g)}if(kn(f))return w(d,u,f,g);if(dn(f))return k(d,u,f,g);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=Vi(f,d.mode,g),u.return=d,d=u),a(d)):n(d,u)}return O}var tn=nu(!0),ru=nu(!1),Vr=ht(null),$r=null,jt=null,la=null;function ua(){la=jt=$r=null}function ca(e){var t=Vr.current;z(Vr),e._currentValue=t}function To(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qt(e,t){$r=e,la=jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(la!==e)if(e={context:e,memoizedValue:t,next:null},jt===null){if($r===null)throw Error(y(308));jt=e,$r.dependencies={lanes:0,firstContext:e}}else jt=jt.next=e;return t}var Tt=null;function da(e){Tt===null?Tt=[e]:Tt.push(e)}function iu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,da(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xe=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ge(e,n)}return i=r.interleaved,i===null?(t.next=t,da(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ge(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}function vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var i=e.updateQueue;Xe=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;a=0,h=c=l=null,s=o;do{var p=s.lane,v=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(p=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(v,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(v,m,p):w,p==null)break e;m=U({},m,p);break e;case 2:Xe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=v,l=m):h=h.next=v,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=m),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ct|=a,e.lanes=a,e.memoizedState=m}}function ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Zn={},He=ht(Zn),jn=ht(Zn),Vn=ht(Zn);function Et(e){if(e===Zn)throw Error(y(174));return e}function ha(e,t){switch(D(Vn,t),D(jn,e),D(He,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:to(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=to(t,e)}z(He),D(He,t)}function nn(){z(He),z(jn),z(Vn)}function au(e){Et(Vn.current);var t=Et(He.current),n=to(t,e.type);t!==n&&(D(jn,e),D(He,n))}function pa(e){jn.current===e&&(z(He),z(jn))}var W=ht(0);function qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function ma(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var xr=Ke.ReactCurrentDispatcher,Wi=Ke.ReactCurrentBatchConfig,Rt=0,B=null,q=null,Q=null,Kr=!1,Rn=!1,$n=0,Qd=0;function te(){throw Error(y(321))}function ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Le(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,i,o){if(Rt=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xr.current=e===null||e.memoizedState===null?ef:tf,e=n(r,i),Rn){o=0;do{if(Rn=!1,$n=0,25<=o)throw Error(y(301));o+=1,Q=q=null,t.updateQueue=null,xr.current=nf,e=n(r,i)}while(Rn)}if(xr.current=Yr,t=q!==null&&q.next!==null,Rt=0,Q=q=B=null,Kr=!1,t)throw Error(y(300));return e}function va(){var e=$n!==0;return $n=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Q===null?B.memoizedState=Q=e:Q=Q.next=e,Q}function xe(){if(q===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=Q===null?B.memoizedState:Q.next;if(t!==null)Q=t,q=e;else{if(e===null)throw Error(y(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Q===null?B.memoizedState=Q=e:Q=Q.next=e}return Q}function Gn(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=xe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var h=c.lane;if((Rt&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=m,a=r):l=l.next=m,B.lanes|=h,Ct|=h}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,Le(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,Ct|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ui(e){var t=xe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Le(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function su(){}function lu(e,t){var n=B,r=xe(),i=t(),o=!Le(r.memoizedState,i);if(o&&(r.memoizedState=i,ce=!0),r=r.queue,wa(du.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Q!==null&&Q.memoizedState.tag&1){if(n.flags|=2048,qn(9,cu.bind(null,n,r,i,t),void 0,null),X===null)throw Error(y(349));Rt&30||uu(n,t,i)}return i}function uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,r){t.value=n,t.getSnapshot=r,fu(t)&&hu(e)}function du(e,t,n){return n(function(){fu(t)&&hu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Le(e,n)}catch{return!0}}function hu(e){var t=Ge(e,1);t!==null&&Me(t,e,1,-1)}function ks(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=Zd.bind(null,B,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pu(){return xe().memoizedState}function Ar(e,t,n,r){var i=De();B.flags|=e,i.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function li(e,t,n,r){var i=xe();r=r===void 0?null:r;var o=void 0;if(q!==null){var a=q.memoizedState;if(o=a.destroy,r!==null&&ga(r,a.deps)){i.memoizedState=qn(t,n,o,r);return}}B.flags|=e,i.memoizedState=qn(1|t,n,o,r)}function Ss(e,t){return Ar(8390656,8,e,t)}function wa(e,t){return li(2048,8,e,t)}function mu(e,t){return li(4,2,e,t)}function gu(e,t){return li(4,4,e,t)}function yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,n){return n=n!=null?n.concat([e]):null,li(4,4,yu.bind(null,t,e),n)}function ka(){}function wu(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ku(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Su(e,t,n){return Rt&21?(Le(n,t)||(n=Al(),B.lanes|=n,Ct|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function Xd(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=Wi.transition;Wi.transition={};try{e(!1),t()}finally{L=n,Wi.transition=r}}function Tu(){return xe().memoizedState}function Jd(e,t,n){var r=lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Iu(t,n);else if(n=iu(e,t,n,r),n!==null){var i=ae();Me(n,e,r,i),xu(n,t,r)}}function Zd(e,t,n){var r=lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Iu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Le(s,a)){var l=t.interleaved;l===null?(i.next=i,da(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=iu(e,t,i,r),n!==null&&(i=ae(),Me(n,e,r,i),xu(n,t,r))}}function Eu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Iu(e,t){Rn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}var Yr={readContext:Ie,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},ef={readContext:Ie,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jd.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:ka,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=Xd.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=De();if(H){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),X===null)throw Error(y(349));Rt&30||uu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ss(du.bind(null,r,o,e),[e]),r.flags|=2048,qn(9,cu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=X.identifierPrefix;if(H){var n=_e,r=Ue;n=(r&~(1<<32-Ne(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:Ie,useCallback:wu,useContext:Ie,useEffect:wa,useImperativeHandle:vu,useInsertionEffect:mu,useLayoutEffect:gu,useMemo:ku,useReducer:Bi,useRef:pu,useState:function(){return Bi(Gn)},useDebugValue:ka,useDeferredValue:function(e){var t=xe();return Su(t,q.memoizedState,e)},useTransition:function(){var e=Bi(Gn)[0],t=xe().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:lu,useId:Tu,unstable_isNewReconciler:!1},nf={readContext:Ie,useCallback:wu,useContext:Ie,useEffect:wa,useImperativeHandle:vu,useInsertionEffect:mu,useLayoutEffect:gu,useMemo:ku,useReducer:Ui,useRef:pu,useState:function(){return Ui(Gn)},useDebugValue:ka,useDeferredValue:function(e){var t=xe();return q===null?t.memoizedState=e:Su(t,q.memoizedState,e)},useTransition:function(){var e=Ui(Gn)[0],t=xe().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:lu,useId:Tu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),i=lt(e),o=je(r,i);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,i),t!==null&&(Me(t,e,i,r),Ir(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),i=lt(e),o=je(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,i),t!==null&&(Me(t,e,i,r),Ir(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=lt(e),i=je(n,r);i.tag=2,t!=null&&(i.callback=t),t=at(e,i,r),t!==null&&(Me(t,e,r,n),Ir(t,e,r))}};function Ts(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,r)||!Wn(i,o):!0}function Au(e,t,n){var r=!1,i=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ie(o):(i=fe(t)?At:ie.current,r=t.contextTypes,o=(r=r!=null)?Zt(e,i):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ie(o):(o=fe(t)?At:ie.current,i.context=Zt(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),Gr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Pc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rf=typeof WeakMap=="function"?WeakMap:Map;function bu(e,t,n){n=je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xr||(Xr=!0,Do=r),xo(e,t)},n}function Ru(e,t,n){n=je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xo(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vf.bind(null,e,t,n),t.then(e,e))}function xs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function As(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=je(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var of=Ke.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?ru(t,null,n,r):tn(t,e.child,n,r)}function bs(e,t,n,r,i){n=n.render;var o=t.ref;return Qt(t,i),r=ya(e,t,n,r,o,i),n=va(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(H&&n&&oa(t),t.flags|=1,oe(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ra(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Cu(e,t,o,r,i)):(e=Pr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(a,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Cu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Wn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Ao(e,t,n,r,i)}function Pu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D($t,pe),pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D($t,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D($t,pe),pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D($t,pe),pe|=r;return oe(e,t,i,n),t.child}function Nu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,i){var o=fe(n)?At:ie.current;return o=Zt(t,o),Qt(t,i),n=ya(e,t,n,r,o,i),r=va(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(H&&r&&oa(t),t.flags|=1,oe(e,t,n,i),t.child)}function Cs(e,t,n,r,i){if(fe(n)){var o=!0;Ur(t)}else o=!1;if(Qt(t,i),t.stateNode===null)br(e,t),Au(t,n,r),Io(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=fe(n)?At:ie.current,c=Zt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Es(t,a,r,c),Xe=!1;var p=t.memoizedState;a.state=p,Gr(t,r,a,i),l=t.memoizedState,s!==r||p!==l||de.current||Xe?(typeof h=="function"&&(Eo(t,n,h,r),l=t.memoizedState),(s=Xe||Ts(t,n,s,r,p,l,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ou(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),a.props=c,m=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ie(l):(l=fe(n)?At:ie.current,l=Zt(t,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||p!==l)&&Es(t,a,r,l),Xe=!1,p=t.memoizedState,a.state=p,Gr(t,r,a,i);var w=t.memoizedState;s!==m||p!==w||de.current||Xe?(typeof v=="function"&&(Eo(t,n,v,r),w=t.memoizedState),(c=Xe||Ts(t,n,c,r,p,w,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return bo(e,t,n,r,o,i)}function bo(e,t,n,r,i,o){Nu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ps(t,n,!1),qe(e,t,o);r=t.stateNode,of.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,s,o)):oe(e,t,s,o),t.memoizedState=r.state,i&&ps(t,n,!0),t.child}function Mu(e){var t=e.stateNode;t.pendingContext?hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hs(e,t.context,!1),ha(e,t.containerInfo)}function Ps(e,t,n,r,i){return en(),sa(i),t.flags|=256,oe(e,t,n,r),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function Co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r=t.pendingProps,i=W.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(W,i&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fi(a,r,0,null),e=xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Co(n),t.memoizedState=Ro,e):Sa(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return af(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ut(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ut(s,o):(o=xt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Co(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ro,r}return o=e.child,e=o.sibling,r=ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sa(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&sa(r),tn(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=_i(Error(y(422))),mr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fi({mode:"visible",children:r.children},i,0,null),o=xt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tn(t,e.child,null,a),t.child.memoizedState=Co(a),t.memoizedState=Ro,o);if(!(t.mode&1))return mr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=_i(o,r,void 0),mr(e,t,a,r)}if(s=(a&e.childLanes)!==0,ce||s){if(r=X,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ge(e,i),Me(r,e,i,-1))}return ba(),r=_i(Error(y(421))),mr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,me=ot(i.nextSibling),ge=t,H=!0,Pe=null,e!==null&&(ke[Se++]=Ue,ke[Se++]=_e,ke[Se++]=bt,Ue=e.id,_e=e.overflow,bt=t),t=Sa(t,r.children),t.flags|=4096,t)}function Ns(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),To(e.return,t,n)}function ji(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ou(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ns(e,n,t);else if(e.tag===19)Ns(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ji(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ji(t,!0,n,null,o);break;case"together":ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ct|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Mu(t),en();break;case 5:au(t);break;case 1:fe(t.type)&&Ur(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(Vr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(D(W,W.current&1),e=qe(e,t,n),e!==null?e.sibling:null);D(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ou(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Pu(e,t,n)}return qe(e,t,n)}var Du,Po,Fu,zu;Du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Po=function(){};Fu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Et(He.current);var o=null;switch(n){case"input":i=Xi(e,i),r=Xi(e,r),o=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),o=[];break;case"textarea":i=eo(e,i),r=eo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}no(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&F("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lf(e,t,n){var r=t.pendingProps;switch(aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Br(),ne(t),null;case 3:return r=t.stateNode,nn(),z(de),z(ie),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pe!==null&&(Ho(Pe),Pe=null))),Po(e,t),ne(t),null;case 5:pa(t);var i=Et(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=Et(He.current),hr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Fe]=t,r[_n]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)F(Tn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ba(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":_a(r,o),F("invalid",r)}no(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",""+s]):Mn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":ir(r),Ua(r,o,!0);break;case"textarea":ir(r),ja(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Fe]=t,e[_n]=r,Du(e,t,!1,!1),t.stateNode=e;e:{switch(a=ro(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)F(Tn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Ba(e,r),i=Xi(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),F("invalid",e);break;case"textarea":_a(e,r),i=eo(e,r),F("invalid",e);break;default:i=r}no(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?pl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fl(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ln(e,l):typeof l=="number"&&Ln(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&F("scroll",e):l!=null&&$o(e,o,l,a))}switch(n){case"input":ir(e),Ua(e,r,!1);break;case"textarea":ir(e),ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Et(Vn.current),Et(He.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(z(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&me!==null&&t.mode&1&&!(t.flags&128))tu(),en(),t.flags|=98560,o=!1;else if(o=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Pe!==null&&(Ho(Pe),Pe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?K===0&&(K=3):ba())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Po(e,t),e===null&&Bn(t.stateNode.containerInfo),ne(t),null;case 10:return ca(t.type._context),ne(t),null;case 17:return fe(t.type)&&Br(),ne(t),null;case 19:if(z(W),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)yn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qr(e),a!==null){for(t.flags|=128,yn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&$()>on&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=qr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!H)return ne(t),null}else 2*$()-o.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$(),t.sibling=null,n=W.current,D(W,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Aa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?pe&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function uf(e,t){switch(aa(t),t.tag){case 1:return fe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),z(de),z(ie),ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pa(t),null;case 13:if(z(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(W),null;case 4:return nn(),null;case 10:return ca(t.type._context),null;case 22:case 23:return Aa(),null;case 24:return null;default:return null}}var gr=!1,re=!1,cf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Vt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_(e,t,r)}else n.current=null}function No(e,t,n){try{n()}catch(r){_(e,t,r)}}var Ms=!1;function df(e,t){if(po=Fr,e=_l(),ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(s=a+i),m!==o||r!==0&&m.nodeType!==3||(l=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++h===r&&(l=a),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mo={focusedElem:e,selectionRange:n},Fr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,O=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Re(t.type,k),O);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){_(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ms,Ms=!1,w}function Cn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&No(t,n,o)}i=i.next}while(i!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[_n],delete t[vo],delete t[Gd],delete t[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var J=null,Ce=!1;function Ye(e,t,n){for(n=n.child;n!==null;)Bu(e,t,n),n=n.sibling}function Bu(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:re||Vt(n,t);case 6:var r=J,i=Ce;J=null,Ye(e,t,n),J=r,Ce=i,J!==null&&(Ce?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Ce?(e=J,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),zn(e)):Fi(J,n.stateNode));break;case 4:r=J,i=Ce,J=n.stateNode.containerInfo,Ce=!0,Ye(e,t,n),J=r,Ce=i;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&No(n,t,a),i=i.next}while(i!==r)}Ye(e,t,n);break;case 1:if(!re&&(Vt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_(n,t,s)}Ye(e,t,n);break;case 21:Ye(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ye(e,t,n),re=r):Ye(e,t,n);break;default:Ye(e,t,n)}}function Os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),t.forEach(function(r){var i=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:J=s.stateNode,Ce=!1;break e;case 3:J=s.stateNode.containerInfo,Ce=!0;break e;case 4:J=s.stateNode.containerInfo,Ce=!0;break e}s=s.return}if(J===null)throw Error(y(160));Bu(o,a,i),J=null,Ce=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){_(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}function Uu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Oe(e),r&4){try{Cn(3,e,e.return),ci(3,e)}catch(k){_(e,e.return,k)}try{Cn(5,e,e.return)}catch(k){_(e,e.return,k)}}break;case 1:be(t,e),Oe(e),r&512&&n!==null&&Vt(n,n.return);break;case 5:if(be(t,e),Oe(e),r&512&&n!==null&&Vt(n,n.return),e.flags&32){var i=e.stateNode;try{Ln(i,"")}catch(k){_(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ul(i,o),ro(s,a);var c=ro(s,o);for(a=0;a<l.length;a+=2){var h=l[a],m=l[a+1];h==="style"?pl(i,m):h==="dangerouslySetInnerHTML"?fl(i,m):h==="children"?Ln(i,m):$o(i,h,m,c)}switch(s){case"input":Ji(i,o);break;case"textarea":cl(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Gt(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Gt(i,!!o.multiple,o.defaultValue,!0):Gt(i,!!o.multiple,o.multiple?[]:"",!1))}i[_n]=o}catch(k){_(e,e.return,k)}}break;case 6:if(be(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){_(e,e.return,k)}}break;case 3:if(be(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(k){_(e,e.return,k)}break;case 4:be(t,e),Oe(e);break;case 13:be(t,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ia=$())),r&4&&Os(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,be(t,e),re=c):be(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(m=S=h;S!==null;){switch(p=S,v=p.child,p.tag){case 0:case 11:case 14:case 15:Cn(4,p,p.return);break;case 1:Vt(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){_(r,n,k)}}break;case 5:Vt(p,p.return);break;case 22:if(p.memoizedState!==null){Fs(m);continue}}v!==null?(v.return=p,S=v):Fs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=hl("display",a))}catch(k){_(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){_(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:be(t,e),Oe(e),r&4&&Os(e);break;case 21:break;default:be(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ln(i,""),r.flags&=-33);var o=Ls(e);Oo(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ls(e);Lo(e,s,a);break;default:throw Error(y(161))}}catch(l){_(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ff(e,t,n){S=e,_u(e)}function _u(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||gr;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||re;s=gr;var c=re;if(gr=a,(re=l)&&!c)for(S=i;S!==null;)a=S,l=a.child,a.tag===22&&a.memoizedState!==null?zs(i):l!==null?(l.return=a,S=l):zs(i);for(;o!==null;)S=o,_u(o),o=o.sibling;S=i,gr=s,re=c}Ds(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,S=o):Ds(e)}}function Ds(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ws(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ws(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&zn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Mo(t)}catch(p){_(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Fs(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function zs(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(l){_(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){_(t,i,l)}}var o=t.return;try{Mo(t)}catch(l){_(t,o,l)}break;case 5:var a=t.return;try{Mo(t)}catch(l){_(t,a,l)}}}catch(l){_(t,t.return,l)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var hf=Math.ceil,Qr=Ke.ReactCurrentDispatcher,Ta=Ke.ReactCurrentOwner,Ee=Ke.ReactCurrentBatchConfig,M=0,X=null,G=null,Z=0,pe=0,$t=ht(0),K=0,Kn=null,Ct=0,di=0,Ea=0,Pn=null,ue=null,Ia=0,on=1/0,We=null,Xr=!1,Do=null,st=null,yr=!1,tt=null,Jr=0,Nn=0,Fo=null,Rr=-1,Cr=0;function ae(){return M&6?$():Rr!==-1?Rr:Rr=$()}function lt(e){return e.mode&1?M&2&&Z!==0?Z&-Z:Yd.transition!==null?(Cr===0&&(Cr=Al()),Cr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Ll(e.type)),e):1}function Me(e,t,n,r){if(50<Nn)throw Nn=0,Fo=null,Error(y(185));Qn(e,n,r),(!(M&2)||e!==X)&&(e===X&&(!(M&2)&&(di|=n),K===4&&Ze(e,Z)),he(e,r),n===1&&M===0&&!(t.mode&1)&&(on=$()+500,si&&pt()))}function he(e,t){var n=e.callbackNode;Yc(e,t);var r=Dr(e,e===X?Z:0);if(r===0)n!==null&&Ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ga(n),t===1)e.tag===0?Kd(Hs.bind(null,e)):Jl(Hs.bind(null,e)),Vd(function(){!(M&6)&&pt()}),n=null;else{switch(bl(r)){case 1:n=Qo;break;case 4:n=Il;break;case 16:n=Or;break;case 536870912:n=xl;break;default:n=Or}n=Qu(n,ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ju(e,t){if(Rr=-1,Cr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Dr(e,e===X?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zr(e,r);else{t=r;var i=M;M|=2;var o=$u();(X!==e||Z!==t)&&(We=null,on=$()+500,It(e,t));do try{gf();break}catch(s){Vu(e,s)}while(!0);ua(),Qr.current=o,M=i,G!==null?t=0:(X=null,Z=0,t=K)}if(t!==0){if(t===2&&(i=lo(e),i!==0&&(r=i,t=zo(e,i))),t===1)throw n=Kn,It(e,0),Ze(e,r),he(e,$()),n;if(t===6)Ze(e,r);else{if(i=e.current.alternate,!(r&30)&&!pf(i)&&(t=Zr(e,r),t===2&&(o=lo(e),o!==0&&(r=o,t=zo(e,o))),t===1))throw n=Kn,It(e,0),Ze(e,r),he(e,$()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,ue,We);break;case 3:if(Ze(e,r),(r&130023424)===r&&(t=Ia+500-$(),10<t)){if(Dr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yo(wt.bind(null,e,ue,We),t);break}wt(e,ue,We);break;case 4:if(Ze(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ne(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=yo(wt.bind(null,e,ue,We),r);break}wt(e,ue,We);break;case 5:wt(e,ue,We);break;default:throw Error(y(329))}}}return he(e,$()),e.callbackNode===n?ju.bind(null,e):null}function zo(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Ho(t)),e}function Ho(e){ue===null?ue=e:ue.push.apply(ue,e)}function pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Le(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ze(e,t){for(t&=~Ea,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ne(t),r=1<<n;e[n]=-1,t&=~r}}function Hs(e){if(M&6)throw Error(y(327));Xt();var t=Dr(e,0);if(!(t&1))return he(e,$()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var r=lo(e);r!==0&&(t=r,n=zo(e,r))}if(n===1)throw n=Kn,It(e,0),Ze(e,t),he(e,$()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ue,We),he(e,$()),null}function xa(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(on=$()+500,si&&pt())}}function Pt(e){tt!==null&&tt.tag===0&&!(M&6)&&Xt();var t=M;M|=1;var n=Ee.transition,r=L;try{if(Ee.transition=null,L=1,e)return e()}finally{L=r,Ee.transition=n,M=t,!(M&6)&&pt()}}function Aa(){pe=$t.current,z($t)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(aa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nn(),z(de),z(ie),ma();break;case 5:pa(r);break;case 4:nn();break;case 13:z(W);break;case 19:z(W);break;case 10:ca(r.type._context);break;case 22:case 23:Aa()}n=n.return}if(X=e,G=e=ut(e.current,null),Z=pe=t,K=0,Kn=null,Ea=di=Ct=0,ue=Pn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Tt=null}return e}function Vu(e,t){do{var n=G;try{if(ua(),xr.current=Yr,Kr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kr=!1}if(Rt=0,Q=q=B=null,Rn=!1,$n=0,Ta.current=null,n===null||n.return===null){K=1,Kn=t,G=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Z,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=xs(a);if(v!==null){v.flags&=-257,As(v,a,s,o,t),v.mode&1&&Is(o,c,t),t=v,l=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(l),t.updateQueue=k}else w.add(l);break e}else{if(!(t&1)){Is(o,c,t),ba();break e}l=Error(y(426))}}else if(H&&s.mode&1){var O=xs(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),As(O,a,s,o,t),sa(rn(l,s));break e}}o=l=rn(l,s),K!==4&&(K=2),Pn===null?Pn=[o]:Pn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=bu(o,l,t);vs(o,d);break e;case 1:s=l;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Ru(o,s,t);vs(o,g);break e}}o=o.return}while(o!==null)}qu(n)}catch(T){t=T,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function $u(){var e=Qr.current;return Qr.current=Yr,e===null?Yr:e}function ba(){(K===0||K===3||K===2)&&(K=4),X===null||!(Ct&268435455)&&!(di&268435455)||Ze(X,Z)}function Zr(e,t){var n=M;M|=2;var r=$u();(X!==e||Z!==t)&&(We=null,It(e,t));do try{mf();break}catch(i){Vu(e,i)}while(!0);if(ua(),M=n,Qr.current=r,G!==null)throw Error(y(261));return X=null,Z=0,K}function mf(){for(;G!==null;)Gu(G)}function gf(){for(;G!==null&&!Bc();)Gu(G)}function Gu(e){var t=Yu(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?qu(e):G=t,Ta.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,G=null;return}}else if(n=lf(n,t,pe),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var r=L,i=Ee.transition;try{Ee.transition=null,L=1,yf(e,t,n,r)}finally{Ee.transition=i,L=r}return null}function yf(e,t,n,r){do Xt();while(tt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qc(e,o),e===X&&(G=X=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,Qu(Or,function(){return Xt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var a=L;L=1;var s=M;M|=4,Ta.current=null,df(e,n),Uu(n,e),Fd(mo),Fr=!!po,mo=po=null,e.current=n,ff(n),Uc(),M=s,L=a,Ee.transition=o}else e.current=n;if(yr&&(yr=!1,tt=e,Jr=i),o=e.pendingLanes,o===0&&(st=null),Vc(n.stateNode),he(e,$()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xr)throw Xr=!1,e=Do,Do=null,e;return Jr&1&&e.tag!==0&&Xt(),o=e.pendingLanes,o&1?e===Fo?Nn++:(Nn=0,Fo=e):Nn=0,pt(),null}function Xt(){if(tt!==null){var e=bl(Jr),t=Ee.transition,n=L;try{if(Ee.transition=null,L=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Jr=0,M&6)throw Error(y(331));var i=M;for(M|=4,S=e.current;S!==null;){var o=S,a=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(S=c;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Cn(8,h,o)}var m=h.child;if(m!==null)m.return=h,S=m;else for(;S!==null;){h=S;var p=h.sibling,v=h.return;if(Hu(h),h===c){S=null;break}if(p!==null){p.return=v,S=p;break}S=v}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,S=a;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){a=S;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,S=f;else e:for(a=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ci(9,s)}}catch(T){_(s,s.return,T)}if(s===a){S=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,S=g;break e}S=s.return}}if(M=i,pt(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{L=n,Ee.transition=t}}return!1}function Ws(e,t,n){t=rn(n,t),t=bu(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Qn(e,1,t),he(e,t))}function _(e,t,n){if(e.tag===3)Ws(e,e,n);else for(;t!==null;){if(t.tag===3){Ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=rn(n,e),e=Ru(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Qn(t,1,e),he(t,e));break}}t=t.return}}function vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(Z&n)===n&&(K===4||K===3&&(Z&130023424)===Z&&500>$()-Ia?It(e,0):Ea|=n),he(e,t)}function Ku(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ae();e=Ge(e,t),e!==null&&(Qn(e,t,n),he(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Ku(e,n)}var Yu;Yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,sf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,H&&t.flags&1048576&&Zl(t,jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var i=Zt(t,ie.current);Qt(t,n),i=ya(null,t,r,e,i,n);var o=va();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Ur(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fa(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Io(t,r,e,n),t=bo(null,t,r,!0,o,n)):(t.tag=0,H&&o&&oa(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Tf(r),e=Re(r,e),i){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Cs(null,t,r,e,n);break e;case 11:t=bs(null,t,r,e,n);break e;case 14:t=Rs(null,t,r,Re(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Ao(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Cs(e,t,r,i,n);case 3:e:{if(Mu(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ou(e,t),Gr(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=rn(Error(y(423)),t),t=Ps(e,t,r,n,i);break e}else if(r!==i){i=rn(Error(y(424)),t),t=Ps(e,t,r,n,i);break e}else for(me=ot(t.stateNode.containerInfo.firstChild),ge=t,H=!0,Pe=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===i){t=qe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return au(t),e===null&&So(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,go(r,i)?a=null:o!==null&&go(r,o)&&(t.flags|=32),Nu(e,t),oe(e,t,a,n),t.child;case 6:return e===null&&So(t),null;case 13:return Lu(e,t,n);case 4:return ha(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),bs(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,D(Vr,r._currentValue),r._currentValue=a,o!==null)if(Le(o.value,a)){if(o.children===i.children&&!de.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=je(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),To(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(y(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),To(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qt(t,n),i=Ie(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=Re(r,t.pendingProps),i=Re(r.type,i),Rs(e,t,r,i,n);case 15:return Cu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),br(e,t),t.tag=1,fe(r)?(e=!0,Ur(t)):e=!1,Qt(t,n),Au(t,r,i),Io(t,r,i,n),bo(null,t,r,!0,e,n);case 19:return Ou(e,t,n);case 22:return Pu(e,t,n)}throw Error(y(156,t.tag))};function Qu(e,t){return El(e,t)}function Sf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Sf(e,t,n,r)}function Ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tf(e){if(typeof e=="function")return Ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qo)return 11;if(e===Ko)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ra(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dt:return xt(n.children,i,o,t);case Go:a=8,i|=8;break;case qi:return e=Te(12,n,t,i|2),e.elementType=qi,e.lanes=o,e;case Ki:return e=Te(13,n,t,i),e.elementType=Ki,e.lanes=o,e;case Yi:return e=Te(19,n,t,i),e.elementType=Yi,e.lanes=o,e;case al:return fi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case il:a=10;break e;case ol:a=9;break e;case qo:a=11;break e;case Ko:a=14;break e;case Qe:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Te(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=Te(22,e,r,t),e.elementType=al,e.lanes=n,e.stateNode={isHidden:!1},e}function Vi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function $i(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xi(0),this.expirationTimes=xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ca(e,t,n,r,i,o,a,s,l){return e=new Ef(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(o),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xu(e){if(!e)return dt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return Xl(e,n,t)}return t}function Ju(e,t,n,r,i,o,a,s,l){return e=Ca(n,r,!0,e,i,o,a,s,l),e.context=Xu(null),n=e.current,r=ae(),i=lt(n),o=je(r,i),o.callback=t??null,at(n,o,i),e.current.lanes=i,Qn(e,i,r),he(e,r),e}function hi(e,t,n,r){var i=t.current,o=ae(),a=lt(i);return n=Xu(n),t.context===null?t.context=n:t.pendingContext=n,t=je(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(i,t,a),e!==null&&(Me(e,i,a,o),Ir(e,i,a)),a}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pa(e,t){Bs(e,t),(e=e.alternate)&&Bs(e,t)}function xf(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Na(e){this._internalRoot=e}pi.prototype.render=Na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));hi(e,t,null,null)};pi.prototype.unmount=Na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){hi(null,e,null,null)}),t[$e]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&Ml(e)}};function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Us(){}function Af(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ei(a);o.call(c)}}var a=Ju(t,r,e,0,null,!1,!1,"",Us);return e._reactRootContainer=a,e[$e]=a.current,Bn(e.nodeType===8?e.parentNode:e),Pt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ei(l);s.call(c)}}var l=Ca(e,0,!1,null,null,!1,!1,"",Us);return e._reactRootContainer=l,e[$e]=l.current,Bn(e.nodeType===8?e.parentNode:e),Pt(function(){hi(t,l,n,r)}),l}function gi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ei(a);s.call(l)}}hi(t,a,e,i)}else a=Af(n,t,e,i,r);return ei(a)}Rl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(Xo(t,n|1),he(t,$()),!(M&6)&&(on=$()+500,pt()))}break;case 13:Pt(function(){var r=Ge(e,1);if(r!==null){var i=ae();Me(r,e,1,i)}}),Pa(e,1)}};Jo=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ae();Me(t,e,134217728,n)}Pa(e,134217728)}};Cl=function(e){if(e.tag===13){var t=lt(e),n=Ge(e,t);if(n!==null){var r=ae();Me(n,e,t,r)}Pa(e,t)}};Pl=function(){return L};Nl=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};oo=function(e,t,n){switch(t){case"input":if(Ji(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(y(90));ll(r),Ji(r,i)}}}break;case"textarea":cl(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};yl=xa;vl=Pt;var bf={usingClientEntryPoint:!1,Events:[Jn,Wt,ai,ml,gl,xa]},vn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ni=vr.inject(Rf),ze=vr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ma(t))throw Error(y(200));return If(e,t,null,n)};ve.createRoot=function(e,t){if(!Ma(e))throw Error(y(299));var n=!1,r="",i=Zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ca(e,1,!1,null,null,n,!1,r,i),e[$e]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Na(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Sl(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Pt(e)};ve.hydrate=function(e,t,n){if(!mi(t))throw Error(y(200));return gi(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Ma(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Zu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,i,!1,o,a),e[$e]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pi(t)};ve.render=function(e,t,n){if(!mi(t))throw Error(y(200));return gi(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!mi(e))throw Error(y(40));return e._reactRootContainer?(Pt(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};ve.unstable_batchedUpdates=xa;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gi(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),el.exports=ve;var Cf=el.exports,tc,_s=Cf;tc=_s.createRoot,_s.hydrateRoot;const yt=[{id:"ch1",num:"01",label:"Foundations",sub:"Markets, stocks, forex, participants",level:"BEGINNER",col:"#22c55e"},{id:"ch2",num:"02",label:"Market Structure",sub:"Microstructure, order books, dark pools",level:"INTERMEDIATE",col:"#3b82f6"},{id:"ch3",num:"03",label:"Trading Strategies",sub:"Every style from scalp to position",level:"INTERMEDIATE",col:"#6366f1"},{id:"ch4",num:"04",label:"Aggressive Trading",sub:"Leverage, liquidity sweeps, high-risk",level:"ADVANCED",col:"#f59e0b"},{id:"ch5",num:"05",label:"Technical Analysis",sub:"Complete framework, Wyckoff, SMC",level:"INTERMEDIATE",col:"#ec4899"},{id:"ch6",num:"06",label:"Fundamental & Macro",sub:"Central banks, rates, geopolitics",level:"INTERMEDIATE",col:"#14b8a6"},{id:"ch7",num:"07",label:"Quantitative Methods",sub:"Algos, ML, backtesting, Monte Carlo",level:"ADVANCED",col:"#8b5cf6"},{id:"ch8",num:"08",label:"Market Psychology",sub:"Behavioral finance, EMH, reflexivity",level:"ALL LEVELS",col:"#f97316"},{id:"ch9",num:"09",label:"Risk Management",sub:"Position sizing, Kelly, ruin math",level:"CRITICAL",col:"#ef4444"},{id:"ch10",num:"10",label:"Portfolio Theory",sub:"MPT, Sharpe, alpha, allocation",level:"ADVANCED",col:"#06b6d4"},{id:"ch11",num:"11",label:"Derivatives",sub:"Options, Greeks, futures, volatility",level:"ADVANCED",col:"#a855f7"},{id:"ch12",num:"12",label:"Institutional Elite",sub:"Hedge funds, manipulation, flow",level:"ELITE",col:"#eab308"},{id:"ch13",num:"13",label:"Technology & AI",sub:"Algos, ML, NLP, execution infra",level:"ELITE",col:"#10b981"},{id:"ch14",num:"14",label:"Legendary Traders",sub:"Soros, Jones, Simons, Livermore",level:"CASE STUDIES",col:"#f43f5e"},{id:"ch15",num:"15",label:"Professional System",sub:"Build, test, journal, career",level:"PRACTICAL",col:"#84cc16"}],Pf={ch1:[{t:"What Financial Markets Actually Are",body:`Financial markets are organized mechanisms where buyers and sellers exchange financial claims — ownership stakes, debt, currencies, commodities, and derivatives — at prices set by supply and demand. They exist to solve a coordination problem: people with surplus capital need to find people with productive uses for that capital, and both sides need to be able to exit efficiently.

Markets serve four core functions:

PRICE DISCOVERY: The continuous process by which dispersed, private information gets aggregated into a public price. When thousands of participants independently assess an asset and trade on their beliefs, the resulting price reflects more information than any single participant holds. This is why markets often "know" things before news is publicly announced.

CAPITAL ALLOCATION: Capital flows toward its most productive uses. Companies demonstrating earnings power attract investment; failing businesses are starved of capital and eventually fail. This process, though imperfect and subject to manias and panics, is the most efficient capital allocation mechanism humans have discovered.

LIQUIDITY: Markets let you convert an investment to cash without a prolonged search for a counterparty. Without this, all investment would be illiquid and people would demand much higher returns for locking up capital.

RISK TRANSFER: Derivatives let entities transfer specific risks to those willing to bear them. An airline can lock in fuel prices using oil futures; a wheat farmer can lock in crop prices; a bond investor can hedge interest rate exposure with swaps.

The global financial system has multiple interconnected market layers:
• Equity markets (~$100T in global market cap)
• Debt markets (~$130T in global bonds outstanding)
• Foreign exchange markets (~$7.5T daily volume)
• Derivatives markets (notional value exceeds $600T — though true economic exposure is far smaller)
• Commodity markets, real estate, alternative assets

These markets don't operate independently. They're all interconnected through capital flows, risk appetite, and the same underlying pool of global money moving between asset classes. Understanding one requires understanding the others.`},{t:"How Stock Markets Work — Complete Mechanics",body:`A stock (equity share) represents fractional ownership in a corporation. Owning stock means you own a proportional share of the company's assets, earnings, and voting rights. If Apple has 15.4 billion diluted shares outstanding and you own 154 shares, you own 0.000001% of everything Apple owns and earns.

PRIMARY MARKET — WHERE COMPANIES RAISE CAPITAL:
Companies access equity markets through Initial Public Offerings (IPOs). The process: company hires investment banks to underwrite the offering, roadshows with institutional investors to gauge demand, set IPO price, sell shares to initial investors. The company receives the IPO proceeds directly. This is the only time the company gets cash from its stock.

Post-IPO, companies can raise more capital through secondary offerings (selling new shares) or rights issues (giving existing shareholders the right to buy new shares at a discount).

SECONDARY MARKET — WHERE TRADING HAPPENS:
All subsequent trading is between investors — the company receives nothing. Stock exchanges (NYSE, NASDAQ, LSE, TSE) provide the infrastructure: listing rules, trading systems, clearing and settlement, regulatory oversight. Settlement is T+2 in the US (ownership transfers two business days after trade).

STOCK VALUATION FUNDAMENTALS:
The theoretical value of a stock is the present value of all future cash flows to shareholders, discounted at an appropriate rate. This is called intrinsic value or fundamental value.

Price/Earnings (P/E) ratio = Stock Price / Earnings Per Share. A P/E of 20 means investors are paying $20 for each $1 of annual earnings — implying they expect those earnings to grow or last a long time. High P/E = high growth expectations. Low P/E = value territory or low growth expectations.

Price/Book (P/B) ratio = Market Cap / Book Value (net assets). Below 1 means the market values the company below its accounting net asset value — sometimes a value trap, sometimes a genuine bargain.

EV/EBITDA: Enterprise Value (market cap + debt - cash) divided by EBITDA (earnings before interest, taxes, depreciation, amortization). More capital-structure-neutral than P/E. Most commonly used in M&A and private equity.

MARKET CAP CATEGORIES:
Mega-cap: >$200B (Apple, Microsoft, Saudi Aramco)
Large-cap: $10B-$200B
Mid-cap: $2B-$10B
Small-cap: $300M-$2B
Micro-cap: $50M-$300M
Nano-cap: <$50M

Smaller caps generally offer higher potential returns but higher volatility, lower liquidity, and less analyst coverage (which creates information asymmetry — a potential edge for diligent researchers).`},{t:"Forex Markets — Structure and Dynamics",body:`The foreign exchange market is the world's largest, most liquid financial market — approximately $7.5 trillion in daily trading volume. For perspective, the entire NYSE trades roughly $20-25 billion in equities daily. Forex is an over-the-counter (OTC) market with no central exchange. Trading occurs 24/5 across a global network of banks, dealers, ECNs, and retail brokers.

THE INTERBANK MARKET:
At the core is the interbank market — where major banks trade directly with each other. Only institutions meeting minimum credit standards participate. The spreads here are razor-thin (sometimes 0.1 pip on EUR/USD). Retail brokers access the market through prime brokers who aggregate interbank liquidity.

CURRENCY PAIR MECHANICS:
EUR/USD = 1.1000 means 1 euro = 1.10 US dollars. Base currency is EUR; quote currency is USD.

When EUR/USD rises to 1.1100:
• Euro has strengthened (appreciated) against dollar
• Dollar has weakened (depreciated) against euro
• If you were long EUR/USD, you profited — each euro you held is now worth more dollars

Pip value: For EUR/USD at 1.1000, 1 pip = $10 per standard lot (100,000 units). Trading 10 lots, each pip = $100. This is how small-seeming price movements generate large P&L.

FOREX MARKET SESSIONS AND THEIR CHARACTERISTICS:
Wellington/Sydney (10 PM - 7 AM GMT): Thinnest liquidity. AUD and NZD pairs most active.
Tokyo (12 AM - 9 AM GMT): Asian majors, JPY crosses. Often range-bound. Bank of Japan active.
London (7 AM - 4 PM GMT): Highest volume session. 35% of global forex volume passes through London. Best for trending moves, tight spreads. The "London Fix" at 4 PM is when many institutional orders execute.
New York (12 PM - 9 PM GMT): Second largest. USD pairs most active. London-New York overlap (12-4 PM GMT) is peak liquidity — 50%+ of daily volume in this 4-hour window.

KEY FOREX DRIVERS:
1. Interest rate differentials: Higher rates attract capital → stronger currency. This is the primary long-term driver. The "carry trade" exploits this — borrow in low-rate currency, invest in high-rate currency.
2. Relative economic strength: Strong economy → strong currency (more investment flows in).
3. Inflation differentials: Higher inflation erodes purchasing power → weaker currency over time.
4. Current account balance: Persistent deficits mean a country constantly sells its currency to buy imports → weakness.
5. Political stability and risk: Political crises trigger capital flight → currency collapse (examples: Turkish lira, Argentine peso).
6. Central bank intervention: BOJ, SNB, PBOC actively manage their currencies.
7. Market positioning and sentiment: Short-term, the net position of speculative traders (COT report) matters significantly.`},{t:"Market Participants — Who's Actually Trading",body:`Every price move is caused by someone's order. Understanding who places orders and why completely changes how you interpret markets.

CENTRAL BANKS — THE MOST POWERFUL PLAYERS:
Central banks (Federal Reserve, ECB, Bank of Japan, PBOC) set monetary policy and can intervene in markets with effectively unlimited firepower. The Fed's actions on interest rates affect every financial asset globally. When the Fed raises rates, it:
• Strengthens the dollar (higher yields attract capital)
• Pressures equities (higher discount rate reduces present value of future earnings)
• Increases mortgage costs (housing market cools)
• Tightens credit conditions across the economy

Central banks occasionally intervene directly in forex markets to prevent their currency from appreciating or depreciating too rapidly. Switzerland's SNB spent hundreds of billions defending the EUR/CHF floor until they abandoned it in January 2015, causing EUR/CHF to drop 30% in minutes — the "SNB shock."

COMMERCIAL AND INVESTMENT BANKS — TIER 1:
JPMorgan, Goldman Sachs, Deutsche Bank, Citigroup, HSBC, Barclays, UBS. They serve multiple roles simultaneously:
• Market makers: Providing continuous bid/ask quotes
• Proprietary trading: Betting firm capital on directional views (though reduced post-2008 regulations)
• Client facilitation: Executing institutional client orders
• Research: Fundamental and quantitative analysis published to institutional clients

The top 10 banks handle roughly 75% of all forex volume. They have information advantages: seeing huge order flows before execution reveals directional pressure.

HEDGE FUNDS — THE SHARKS:
2000+ active hedge funds managing $4+ trillion. They employ every conceivable strategy:
• Global macro: Trading currencies, bonds, commodities on macroeconomic views (Soros, Druckenmiller, Dalio)
• Equity long/short: Long undervalued stocks, short overvalued ones
• Quantitative: Statistical and machine-learning-based strategies (Renaissance, Two Sigma, DE Shaw)
• Event-driven: Merger arbitrage, distressed debt, activist investing (Elliott, Third Point)
• Fixed income arbitrage: Bond relative value strategies (LTCM's approach — until it blew up)

Hedge funds can be destabilizing. When a major fund like Citadel puts on a large position, it moves markets. When they unwind, the reversal can be violent.

ASSET MANAGERS — THE SLOW GIANTS:
BlackRock ($10T AUM), Vanguard ($8T), Fidelity, PIMCO, State Street. They manage pension funds, endowments, mutual funds, ETFs. Their investment horizons are months to years. They move hundreds of billions between asset classes on relatively infrequent decisions — but those decisions create powerful, sustained trends.

BlackRock shifting 1% of its allocation from bonds to equities means $100 billion chasing stocks. This is the institutional buying pressure technical traders see as sustained "smart money accumulation."

RETAIL TRADERS — THE STATISTICAL LOSERS (On Average):
~10-15% of forex volume, higher percentage of retail stock trading. As a group, retail traders are:
• Less informed than institutions
• Less capitalized
• Subject to emotional biases
• Paying higher transaction costs
• Operating with less sophisticated execution

Retail brokers aggregate customer orders and often take the other side (dealing desk / B-book model). The best-performing retail traders are those who understand they're competing against algorithms and institutions, and position themselves accordingly — finding edges institutions don't exploit (small-cap stocks, obscure patterns).

The 80/20 rule in trading: roughly 20% of traders are consistently profitable. Of those, maybe 5% are exceptional. Most profitable retail traders eventually migrate to professional environments (prop firms, funds).`},{t:"Order Types, Execution, and Market Microstructure",body:`Order types are the language you use to communicate with markets. Using the wrong order type for your strategy is like speaking the wrong language — technically words are being spoken, but the result isn't what you intended.

THE FULL TAXONOMY:

MARKET ORDER: Execute immediately at the best available current price. Pros: Guaranteed execution. Cons: Price is uncertain — in fast markets or thin liquidity, the fill can be dramatically different from the displayed price (slippage). Never use market orders on illiquid instruments or during high-volatility events.

LIMIT ORDER: Execute only at your specified price or better. A BUY LIMIT at $50 fills at $50 or lower. A SELL LIMIT at $55 fills at $55 or higher. You control price but not execution. Limit orders add liquidity to the order book — many exchanges reward this with lower maker fees.

STOP ORDER: Triggers a market order when price reaches your specified level. Primary use: stop-losses. A stop-loss sell at $45 triggers a market sell if price touches $45. Risk: in fast markets, the market order fills significantly below $45 (stop slippage). This is why stops don't guarantee your exact exit price.

STOP-LIMIT ORDER: Triggers a LIMIT order when price reaches the stop level. Eliminates slippage risk but creates non-fill risk. In a fast crash, your stop triggers at $45 but the price immediately gaps to $40 — your limit at $45 never fills. You're now stuck in a losing position with a failed stop. Handle with care.

TRAILING STOP: A dynamic stop that follows price at a fixed distance. If price rises from $100 to $120 with a $5 trailing stop, your stop is now at $115. Price then falls — your stop triggers at $115 locking in a $15 gain. Useful for trend following to let winners run while protecting profits.

ICEBERG / RESERVE ORDER: Only a visible portion shows in the public order book. Large institutions use these to prevent front-running. You'll see 500 shares at the bid, but there are actually 50,000 — each time the visible portion fills, more appears. Experienced tape readers recognize iceberg patterns.

TIME-BASED ORDERS:
• GTC (Good Till Cancelled): Order stays active until filled or manually cancelled
• DAY: Cancels at end of trading session if unfilled
• IOC (Immediate-or-Cancel): Fill whatever is available immediately, cancel the rest
• FOK (Fill-or-Kill): Fill the entire order immediately or cancel entirely

EXECUTION VENUES:
Orders can route to: primary exchanges (NYSE, NASDAQ), alternative trading systems (ATS), dark pools, internalizers (broker matches client orders internally). This fragmentation means your order may not execute where you think it does, and best execution obligations (brokers must seek the best available price) are regulated but imperfect.`},{t:"Compounding, Risk/Reward, and Capital Growth",body:`These are the foundational mathematics of wealth building through trading. Understand them at a deep level before you risk a single dollar.

COMPOUNDING — THE EIGHTH WONDER:
Albert Einstein allegedly called compound interest the eighth wonder of the world. In trading, compounding means reinvesting profits so your capital base grows, and each subsequent return applies to a larger base.

Formula: Final Value = Principal × (1 + r)^n
Where r = return per period, n = number of periods

$10,000 at 2% monthly:
Year 1: $10,000 × 1.02^12 = $12,682 (+26.8%)
Year 3: $10,000 × 1.02^36 = $20,399 (+104%)
Year 5: $10,000 × 1.02^60 = $32,810 (+228%)
Year 10: $10,000 × 1.02^120 = $107,652 (+976%)

The critical insight: consistency beats aggression. 2% monthly for 10 years (achievable with discipline) turns $10K into $107K. One catastrophic drawdown resets the clock. Survivability is the prerequisite for compounding.

RISK-REWARD RATIO (RRR):
RRR = Potential Profit / Potential Loss on a trade.
Risking $100 to make $200 = 1:2 RRR.

Why this matters — the math of expectancy:
If you have a 1:2 RRR and win 40% of trades:
10 trades: 4 wins × $200 = $800; 6 losses × $100 = $600. NET: +$200.
You lose more trades than you win and still make money.

Expectancy formula:
E = (Win Rate × Average Win) - (Loss Rate × Average Loss)
E = (0.40 × $200) - (0.60 × $100) = $80 - $60 = $20 per trade expected value.

Positive expectancy is necessary and sufficient for a profitable strategy, assuming enough trades to let the statistics play out.

THE MATHEMATICS OF RUIN:
Losses are asymmetric. To recover from a drawdown, you need a larger percentage gain than the loss percentage:
10% loss → need 11.1% to recover
20% loss → need 25% to recover
30% loss → need 42.9% to recover
50% loss → need 100% to recover
75% loss → need 300% to recover
90% loss → need 900% to recover

A trader who takes their $10,000 account to $1,000 (90% drawdown) needs a 900% return to get back to breakeven. This is statistically nearly impossible without taking the same risks that caused the drawdown. Avoiding large drawdowns is the most important thing in trading.

RISK PER TRADE — THE GOLDEN RULE:
Professional standard: risk 0.5-2% of account per trade.

With $10,000 account at 1% risk: maximum loss per trade = $100.
Your stop loss is 50 pips away on EUR/USD. Your position size is $100 / 50 pips / $0.10 per pip = 2 mini lots.

This formulaic approach to position sizing is what separates professionals from gamblers. It means:
• No single trade can ruin you
• You can be wrong 20+ consecutive times and still have 80%+ of capital intact
• Your emotions stay manageable because no single trade is catastrophic`}],ch2:[{t:"Market Microstructure — The Hidden Layer",body:`Market microstructure is the academic discipline studying exactly how trading happens at the sub-second level — how orders interact, how prices form, and how the structure of trading venues affects outcomes. For serious traders, this is foundational knowledge.

THE ORDER BOOK IN DETAIL:
The order book is a real-time, continuously updated list of all resting limit orders:

BID SIDE (buyers):                    ASK SIDE (sellers):
Price    Size                          Price    Size
$49.95   2,500                         $50.00   1,800
$49.90   5,000                         $50.05   4,200
$49.85   8,000                         $50.10   7,500
$49.80   12,000                        $50.15   15,000

The "inside market" or "top of book" is: Bid $49.95 / Ask $50.00, spread = $0.05.
When someone places a market buy order for 1,800 shares, the entire ask side at $50.00 gets absorbed, and the new best ask is $50.05. The order book shifts.

TICK DATA VS CANDLESTICK DATA:
Every "candlestick" you see on a chart is an aggregation of potentially thousands of individual tick-level transactions. A 1-minute candle contains:
• Open: First transaction price in that minute
• High: Highest transaction price
• Low: Lowest transaction price
• Close: Last transaction price
• Volume: Total shares/contracts traded

But within that single candle, there might be 10,000 transactions revealing important patterns invisible on the candle chart. Was most volume transacted near the high (bullish) or near the low (bearish)? Were large blocks hitting the bid (aggressive selling) or lifting the ask (aggressive buying)?

THE BID-ASK DYNAMIC:
Every transaction has an initiating side and a passive side:
• Aggressive buyer: Places market order or marketable limit order. "Takes" liquidity. Lifts the ask.
• Aggressive seller: Places market order. "Takes" liquidity. Hits the bid.
• Passive buyer: Places limit bid. Provides liquidity. Waits.
• Passive seller: Places limit ask. Provides liquidity. Waits.

Net order flow = aggressive buys - aggressive sells. Sustained positive flow (more aggressive buying than selling) → price rises. This is the actual mechanical cause of price movement, not "RSI crossed 70" or "pattern formed."

ADVERSE SELECTION AND THE MARKET MAKER PROBLEM:
Market makers provide liquidity to both sides. They get picked off by informed traders (who know where price is going) and profit from uninformed traders. Managing adverse selection risk is the central challenge of market making:

• When trading activity is thin and spreads are wide → uncertainty is high, adverse selection risk is high
• Near major news events → informed traders have edge → market makers widen spreads or pull quotes entirely
• On highly liquid, actively arbitraged instruments → less adverse selection → tighter spreads

This is why bid-ask spreads widen before Fed announcements, earnings, and major economic data releases.

PRICE IMPACT:
Large orders move the market. If you try to buy 1 million shares of a stock that normally trades 2 million shares per day, you'll exhaust available sell orders at successively higher prices — your own buying pushes the price up before your order is complete. This is market impact, and it's the primary execution challenge for institutions.

Market impact has two components:
1. Temporary impact: Price displacement from your order that reverts after completion
2. Permanent impact: Price change that persists because your order revealed real information about value

Institutions use execution algorithms (VWAP, TWAP, implementation shortfall) to minimize market impact.`},{t:"Dark Pools and Institutional Order Flow",body:`Dark pools — formally called Alternative Trading Systems (ATS) in the US — are private trading venues that execute orders without displaying quotes publicly. They handle 35-40% of US equity trading volume. Understanding them is essential for interpreting unusual volume patterns.

WHY DARK POOLS EXIST:
Imagine you manage $20 billion and need to sell your entire 50 million share position in Tesla. If you hit the lit exchange with market orders, every HFT firm sees your selling pressure, front-runs you, and drives the price down. By the time you're halfway done selling, you've already moved the market 5% against yourself, costing you hundreds of millions.

Dark pools let you find a natural counterparty (someone who wants to buy your 50 million shares) and execute the block trade at a single negotiated price without ever appearing in the public order book. The trade gets reported after execution, but the damage to your execution price is avoided.

TYPES OF DARK POOLS:
Broker-dealer dark pools: Internal matching of client orders within a bank's system. Goldman Sachs SIGMA X, Morgan Stanley MS POOL, Credit Suisse CrossFinder. When you and another Goldman client want to trade opposite sides, Goldman matches you internally at the midpoint.

Independent dark pools: Liquidnet specializes in matching institutional block orders. IEX (now a public exchange but originated as a dark pool) built a 350-microsecond speed bump to protect against HFT latency arbitrage.

Exchange-operated dark pools: NYSE Arca Dark, NASDAQ Dark — these are dark-order types operated by public exchanges.

READING DARK POOL SIGNALS:
Dark pool activity shows up in publicly available data:
• Unusually high volume with flat price: Institutional dark pool absorption (buying or selling at scale without moving the market — yet)
• Consistent dark pool prints at a specific price: Institutional price of interest
• Dark pool prints on uptick vs downtick reveals buying vs selling pressure

TAPE READING — THE LOST ART:
Before charts and indicators, traders read the "tape" — the continuous stream of all transaction prints. Modern tape readers watch real-time Time & Sales data:
• Large prints appearing suddenly (block trades)
• Direction of prints (at bid = selling, at ask = buying)
• Pace changes — slow tape suddenly accelerating signals order flow shift
• Price levels that absorb large volume without moving — hidden institutional orders

Professional tape readers develop an intuition for market "feel" from this data that no chart can replicate. Watching the tape on a volatile day like Fed announcement reveals the actual battle between buyers and sellers at every moment.

HOW INSTITUTIONS ACCUMULATE WITHOUT DETECTION:
Building a $500M position in a stock with $100M daily volume takes weeks without detection. The institution:
1. Buys in small increments spread across multiple dark pools and lit venues
2. Uses algorithmic execution to match VWAP or TWAP (avoiding pattern detection)
3. Buys more aggressively on down days (pullbacks provide cover)
4. Uses options to gain exposure without appearing in equity tape
5. Coordinates timing to avoid suspicious clustering

The resulting pattern on charts: slow accumulation in a range, then a breakout when they're fully positioned. Wyckoff's accumulation schematic describes exactly this process.`},{t:"Algorithmic and High-Frequency Trading",body:`Today, algorithms execute the majority of trading in developed markets. Understanding how they work is not optional for serious market participants — you're trading against them daily.

ALGORITHMIC TRADING SPECTRUM:
At one end: simple execution algorithms (VWAP, TWAP) that automate order splitting.
At the other end: fully autonomous strategies that generate trading signals and execute, completely without human involvement.

EXECUTION ALGORITHMS — MINIMIZING MARKET IMPACT:
VWAP (Volume-Weighted Average Price): Algorithm breaks a large order into pieces and executes them throughout the day, weighted to concentrate execution during high-volume periods. Goal is to achieve close to the daily VWAP. Standard benchmark for institutional execution quality.

TWAP (Time-Weighted Average Price): Executes equal-sized slices at regular intervals regardless of volume. Simpler than VWAP. Predictable pattern that sophisticated players can front-run.

Implementation Shortfall: Aims to minimize the difference between the paper portfolio (if you could execute at decision price) and the actual portfolio. Trades off market impact against timing risk.

STATISTICAL ARBITRAGE ALGOS:
Identify statistically correlated pairs or baskets and trade the spread when it deviates from historical norms, betting on reversion. Runs on millisecond timeframes with constant recalibration.

MARKET-MAKING ALGOS:
Continuously quote two-sided markets, adjusting quotes based on inventory, adverse selection signals, and competitor quotes. These algorithms have replaced human market makers in most venues.

HIGH-FREQUENCY TRADING (HFT):
HFT is algorithmic trading characterized by extreme speed, high order-to-trade ratios, and very short holding periods (often milliseconds). HFT firms co-locate their servers in the same data centers as exchanges to minimize latency.

HFT strategies:
• Latency arbitrage: Being faster than competitors to exploit brief price discrepancies across venues. When a trade on NYSE moves a price, it takes microseconds for that info to propagate to NASDAQ. HFT firms exploit this gap.
• Market making: Providing liquidity at the inside market and earning spread while managing inventory risk algorithmically.
• Statistical arbitrage: Very short-horizon mean reversion and correlation plays.
• Momentum ignition: Placing aggressive orders to trigger other algorithmic responses, then trading on the resulting price movement. Ethically and legally gray; some instances are outright manipulation.

IMPACT ON RETAIL TRADERS:
HFT creates tight spreads on liquid instruments (benefit) but can create "phantom liquidity" — limit orders that disappear faster than you can hit them (harm). In normal markets, HFT improves execution quality. In crisis moments, HFT firms pull their quotes entirely, causing liquidity evaporation. The 2010 Flash Crash was partly caused by this dynamic.

The practical implication: on very liquid, heavily HFT-dominated instruments (ES futures, EUR/USD), the bid-ask spread is often just 1 tick. The competition for execution at that level requires co-location and sophisticated infrastructure that retail traders simply cannot match. The retail edge in these markets must come from holding periods long enough that HFT doesn't matter.`}],ch3:[{t:"Scalping — The Art of Tiny Profits at Scale",body:`Scalping means taking many small profits throughout the day, holding positions for seconds to minutes. The goal is to accumulate hundreds of small wins that aggregate to a significant daily P&L.

THE SCALPER'S MATH:
If you make 50 trades per day with an average profit of $50 per trade:
Daily P&L: $2,500
Monthly P&L: $50,000 (20 trading days)

To achieve this requires:
• Win rate high enough that losses don't overwhelm gains
• RRR typically 1:0.5 to 1:1 (scalpers sacrifice RRR for higher win rate)
• Transaction costs (spread + commission) small relative to targets
• Precise execution — a 2-second delay on exit can turn a winner into a loser

WHAT SCALPERS ACTUALLY DO:
1. Identify intraday trend or range condition
2. Find highest-probability micro-entry (order book support, VWAP test, momentum spike)
3. Enter with tight stop (often 2-5 ticks)
4. Exit at first sign of reversal or at pre-defined target
5. Repeat

Scalpers read order flow, tape, and Level 2 more than indicators. The setup is visible in real-time price behavior, not historical patterns.

INSTRUMENTS FOR SCALPING:
• E-mini S&P 500 futures (ES): Deep liquidity, 24-hour market, 1 tick = $12.50
• EUR/USD: Tightest spread in forex, enormous liquidity
• Nasdaq futures (NQ): Higher volatility than ES, larger moves
• Highly liquid individual stocks: AAPL, AMZN, TSLA during market hours
• Crypto: Bitcoin perpetuals on major exchanges

SCALPING REQUIREMENTS:
Direct market access (DMA) — no dealing desk that can intervene in execution
Tight execution: Co-location or low-latency VPS for futures scalpers
Discipline: Taking every stop without hesitation. One "held" loss can wipe a week of gains
Focus: Scalping requires 100% concentration during active hours

WHEN SCALPING FAILS:
• Low volatility environments — not enough movement to generate targets
• Trending markets where reversions don't materialize
• News events — spreads widen, price spikes unpredictably
• When commissions exceed gains`},{t:"Day Trading, Swing Trading, and Position Trading",body:`Each trading timeframe has different characteristics, requirements, and the right tools for each differ fundamentally.

DAY TRADING:
All positions opened and closed within the same trading session. No overnight risk.

What actually distinguishes successful day traders:
1. Technical mastery of 1-3 specific setups that they know deeply
2. Ruthless risk management — cutting losses without hesitation
3. Time-of-day awareness: which hours are best for which setups
4. Level 2 / order flow reading for intraday confirmation
5. Emotional control — daily P&L volatility is extreme

Day traders focus on: Opening range breakouts, VWAP relationship, daily support/resistance, intraday momentum patterns, news catalysts.

Best times (US equities): 9:30-11:00 AM ET (highest volatility, best opportunities) and 3:00-4:00 PM ET (last-hour volume). Midday (11:30 AM - 2:00 PM) is typically slow and choppy — dangerous for day traders.

Reality check: This is statistically the hardest way to trade. The SEC's study of day traders found over 70% lose money. Those who succeed typically spend 1-3 years developing skills before consistent profitability.

SWING TRADING (2-10 day holds):
Capturing multi-day price swings. Holds overnight, so exposed to gap risk. But larger targets mean transaction costs are less impactful, and you don't need to monitor every minute.

Swing traders use: Daily/4H charts for analysis. Support/resistance, moving averages, patterns, trend structure. Enter on the daily close or the next morning. Stop losses are wider (allow for normal volatility without stopping out prematurely).

Advantages over day trading:
• Can hold a regular job alongside trading
• Less emotional intensity — positions develop over days
• Better risk/reward potential (larger targets)
• Less susceptible to HFT effects

POSITION TRADING (weeks to months):
Capturing large directional moves based on fundamental/technical combination. Timeframe: weekly/monthly charts. Holds for months.

Position traders are effectively intermediate-term investors with defined stop losses. They use trend analysis, major support/resistance, macro factors. They accept large swings in unrealized P&L in exchange for capturing the full move.

The most successful retail traders often end up here — it plays to individual patience while avoiding the execution speed competition with professionals.

MOMENTUM TRADING:
Trading in the direction of strong short-term price momentum. Not holding for a reversal — riding the wave. Applies to day and swing timeframes.

Momentum in academic research: Jegadeesh and Titman's 1993 paper found that stocks performing well over 3-12 months continued to outperform over the next 3-12 months — one of the most robust anomalies in finance. Why? Investor underreaction to good news → gradual price appreciation as more investors recognize the trend.

MEAN REVERSION:
The opposite of momentum. Trading the return to average after an extreme deviation. RSI below 30, Bollinger Band bounce, statistical deviation from moving average.

Mean reversion works best in range-bound markets, low-volatility regimes, on liquid instruments, and for portfolios (diversified mean reversion across many stocks). It fails catastrophically when trends persist — what looks like extreme deviation becomes the beginning of a new trend (e.g., a stock "oversold" at $50 that fundamentally should be at $20).

TREND FOLLOWING:
The systematic approach to capturing large directional moves. Classic trend following: go long when price crosses above a moving average, go short when it crosses below. Hold until the trend reverses. Accept many small losses and let winners run.

Famous trend following funds (Winton, Man AHL, Campbell) have produced consistent long-term returns. Their Sharpe ratios are modest (0.5-1.0) but they excel during market crises when stock portfolios collapse — the "crisis alpha" property makes them valuable diversifiers.`},{t:"Statistical Arbitrage, Pairs Trading, and Market-Neutral Strategies",body:`These strategies extract returns from statistical relationships between securities rather than from directional market views. They represent some of the most academically rigorous trading approaches.

PAIRS TRADING — THE FOUNDATION:
Pairs trading is the simplest stat-arb strategy: find two historically correlated securities, monitor their price relationship (spread), and trade when the spread deviates from its historical mean, expecting reversion.

Classic pairs: Coca-Cola / Pepsi, Shell / BP, Goldman Sachs / Morgan Stanley. They operate in the same industry with similar business models, so their prices tend to move together.

Implementation:
1. Calculate the spread: Price_A - β × Price_B (β = hedge ratio from regression)
2. Calculate z-score of the spread: (current spread - mean) / standard deviation
3. Signal: When z-score > +2, the spread is stretched — short A, long B
4. When z-score < -2, the spread is compressed — long A, short B
5. Exit when z-score returns to 0 (mean reversion complete)

The strategy is "market neutral" — the long and short positions cancel out most market exposure. You're not betting on the market going up or down — only on the relative price relationship reverting.

COINTEGRATION — THE PROPER STATISTICAL BASIS:
Two stocks being correlated isn't enough — correlations are unstable and break down. The proper statistical requirement is cointegration: the spread between two stocks is a stationary series (returns to its mean over time).

The Engle-Granger cointegration test: regress price A on price B, test the residuals for stationarity using an Augmented Dickey-Fuller test. If residuals are stationary, the pair is cointegrated — a genuine long-term relationship exists that deviations will revert to.

STATISTICAL ARBITRAGE AT SCALE:
Large quantitative funds extend pairs trading to portfolios of hundreds or thousands of instruments. The process:
1. Universe selection: Liquid instruments with sufficient history
2. Relationship discovery: Pairwise cointegration testing, machine-learning-based clustering
3. Signal generation: Z-score deviation from equilibrium
4. Portfolio construction: Combine signals to minimize correlated exposures
5. Risk management: Position limits, sector neutrality, beta neutrality, factor exposure control
6. Execution: Algorithmic execution to minimize market impact across hundreds of simultaneous positions

MARKET-NEUTRAL STRATEGIES:
Beta-neutral: Long/short portfolio with zero net market exposure (beta sums to zero). Returns come purely from alpha — security selection skill.

Dollar-neutral: Equal dollar value long and short. Simpler but not perfectly beta-neutral (a $100 buy in a high-beta stock vs. a $100 short in a low-beta stock has net long exposure).

Factor-neutral: Controlling exposure to known factors (value, momentum, size, quality) so returns come only from idiosyncratic selection.

RISKS AND LIMITATIONS:
• Statistical relationships break permanently (regime change, corporate events, sector disruption)
• Spread can widen further before reverting — requires capital to withstand adverse movements
• Overcrowding: When too many funds trade the same pairs, the edge disappears and all face simultaneous unwinds
• Model risk: Historical relationships may not persist into the future
• 2007 "Quant Quake": Multiple stat-arb funds hit risk limits simultaneously and had to unwind, creating correlated selling that hit other stat-arb funds. A cascade of systematic de-leveraging that illustrated how "market neutral" strategies can fail simultaneously.`}],ch4:[{t:"Leverage — The Complete Mechanics",body:`Leverage amplifies every aspect of trading: profits, losses, psychological pressure, and the probability of ruin. Understanding it completely is not optional if you intend to use it.

HOW LEVERAGE WORKS:
Leverage is the ratio of position size to actual capital employed.
10:1 leverage = you control $100,000 with $10,000 of your own money.
The remaining $90,000 is borrowed from your broker, and you pay interest on that borrowing.

Leverage sources:
• Margin accounts: Broker lends you money against your deposited capital
• Futures: Inherently leveraged — ES futures at $4,500 per contract control $225,000 of S&P exposure (50:1)
• CFDs: Contracts for Difference — pure leverage instruments popular in Europe and Asia
• Perpetual futures (crypto): 2x to 125x leverage available on major exchanges
• Options: Provide leverage without the liquidation risk of margin

THE MATHEMATICS:
With $10,000 account and 10x leverage ($100,000 position size):

1% favorable move: P&L = $100,000 × 1% = $1,000. Return on equity = 10%
1% adverse move: P&L = -$1,000. Return on equity = -10%
5% adverse move: P&L = -$5,000. Account down 50%.
10% adverse move: P&L = -$10,000. Account wiped out — LIQUIDATION.

LIQUIDATION MECHANICS:
Brokers and exchanges don't wait for you to lose more than your deposited margin. They liquidate positions when your account equity falls below the maintenance margin level.

Crypto exchanges with 20x leverage: Liquidation at approximately 5% adverse move.
Forex with 50:1: Liquidation at approximately 2% adverse move.
US stocks with 2:1 margin: Maintenance margin typically 25%; liquidation call at 25% equity.

In volatile markets, price can gap through your liquidation level. If Bitcoin drops 15% in one hour and your liquidation is at -5%, you don't get liquidated at -5% — you get liquidated at wherever price is when the system processes it. You can owe money beyond your deposit in severe cases (negative balance protection regulations address this in some jurisdictions).

PROPER LEVERAGE USAGE:
Professional traders don't use leverage to increase position size above what their risk management dictates. They use leverage because:
1. Efficiency: Futures allow large notional exposure with small capital, freeing the rest for opportunities or as reserves
2. Hedging: Taking leveraged counter-positions to hedge existing exposure
3. Diversification: Using leverage to hold a diversified portfolio with smaller allocations per position

A professional might have 10x available leverage but only use 2-3x in practice. The leverage is there for capital efficiency, not to bet 10x normal size.

OPTIMAL POSITION SIZING WITH LEVERAGE:
The question isn't "how much leverage can I use?" It's "what position size does my risk management dictate, and what leverage ratio results from that position relative to my capital?"

Example:
Account: $50,000
Risk tolerance: 1% per trade = $500 maximum loss
Stop distance: 2% on a $50 stock = $1 per share
Shares to buy: $500 / $1 = 500 shares
Position size: 500 × $50 = $25,000
Leverage: $25,000 / $50,000 = 0.5x

You'd actually be using less than 1x leverage. The position size is dictated by the stop, not the other way around. This is the professional approach.`},{t:"Stop Hunting, Liquidity Sweeps, and How Large Players Operate",body:`One of the most important realizations for any serious trader: markets don't just mechanically discover prices. Large players actively engineer price movements to acquire the liquidity they need. Understanding this behavior transforms how you read charts.

THE LIQUIDITY LANDSCAPE:
Markets are a liquidity ecosystem. For every buyer who wants to buy, there must be a willing seller, and vice versa. Large institutions wanting to buy $500 million of a stock need $500 million of sellers. But sellers don't queue up voluntarily — they must be incentivized or forced to sell.

Where do sellers appear in quantity?
• At support levels: Traders with stops just below support get triggered when price dips below, creating a flood of market sell orders
• At previous lows: Retail traders who are long and "break even" stop out when new lows form
• In panic: Severe drops trigger fear selling from weak hands

This creates a predictable pattern: large buyers need price to go DOWN temporarily to find enough sellers before the real move up. They engineer the dip.

STOP HUNTING:
Stop hunting is the deliberate exploitation of known stop-loss clusters to trigger them and acquire inventory.

Mechanics:
1. Large player (or algorithm) identifies where retail stops are clustered (just below obvious support, below round numbers, below recent swing lows)
2. Sells aggressively to push price through those stop levels
3. Stop orders trigger, creating a wave of market sell orders
4. The large player absorbs all that selling, buying the panic at favorable prices
5. Once stops are cleared, selling pressure exhausts itself
6. Price reverses sharply — the "stop hunt candle" — leaving a long wick below the support

Stop hunt signatures:
• Sharp spike below a well-known support level
• High volume during the spike (absorbing triggered stops)
• Rapid reversal — close back above the support within the same candle or next candle
• Selling pressure dries up quickly after the spike

LIQUIDITY SWEEPS (LIQUIDITY GRABS):
A more sophisticated version: price deliberately "grabs" a liquidity pool (a dense cluster of resting orders) before reversing.

Sell-side liquidity sits below:
• Previous swing lows
• Equal lows (the market tests the same low twice — traders put stops just below)
• Round numbers ($50.00, $100.00)
• Previous day/week/month lows

Buy-side liquidity sits above:
• Previous swing highs
• Equal highs
• Round numbers
• Previous day/week/month highs

Smart money analysis teaches: Price moves FROM one liquidity pool TO another. The market sweeps sell-side liquidity (drops through lows to trigger stops) before rallying to sweep buy-side liquidity (rising through highs to trigger breakout buy stops). Understanding this "liquidity engineering" gives you a predictive framework.

PRACTICAL APPLICATION — AVOIDING STOPS GETTING HUNTED:
1. Don't place stops at the obvious level. If support is at $50.00, every retail trader puts their stop at $49.90. Put yours at $49.50 or $49.00 — below the obvious zone, in the less-crowded stop territory. Accept slightly larger risk but avoid the hunt.
2. Reduce position size to accommodate wider stops. Keep dollar risk constant.
3. Enter AFTER the stop hunt candle completes. Wait for confirmation the sweep has happened and price is recovering. You miss some entries but avoid many of the fake-outs.
4. Look for stop hunt setups as ENTRIES. When a clear support zone gets briefly violated on high volume and then sharply reverses — that IS the setup. The stop hunt is the signal.`},{t:"News Trading and Volatility Exploitation",body:`Some of the most significant price moves occur around economic data releases, central bank decisions, corporate earnings, and geopolitical events. Trading these events is extremely high-risk but potentially lucrative.

THE NEWS TRADING CHALLENGE:
Market participants aren't just competing on analysis — they're competing on speed. When the Non-Farm Payrolls number drops, professional news trading algorithms process the number, compare it to consensus expectations, calculate the likely market impact, and execute trades within 1-10 milliseconds.

A retail trader, regardless of their preparation, will execute hundreds of milliseconds after the data is released. In the crucial first few seconds after major data, price moves are dominated by algorithms. Retail traders entering immediately after data release are getting filled at prices already incorporating the news.

PRE-NEWS POSITIONING:
The more sophisticated approach: analyze the setup BEFORE the number drops.
• What is the market consensus? (surveyed economist forecast)
• What is the market's "whisper number"? (implied by recent price action)
• How is the market positioned going into the release?
• What is the asymmetric reaction potential? (sometimes bad news is "good" and vice versa)

If the market is significantly positioned one way (everyone expecting bad NFP, already short) and the number surprises positively, the covering of shorts amplifies the move dramatically. The surprise direction + the positioning creates the explosive moves.

FADE THE INITIAL REACTION:
The initial spike on major news often overshoots and retraces. This is because:
1. Algorithmic overreaction to the headline before context is digested
2. Stop triggers amplifying the initial move beyond fundamental justification
3. Human traders piling in late at extreme prices

The "fade" strategy: Let the initial spike happen, wait for the first clear reversal signal, then trade against the spike direction. The reversion is often 50-70% of the initial spike.

This is not a beginner strategy. Understanding the risk of trading against a major trend move requires significant experience.

EARNINGS TRADING:
Quarterly earnings reports create scheduled volatility events for individual stocks. The options market prices in expected movement (implied move). If Apple is expected to move ±5% on earnings based on options pricing, and you believe the actual move will be larger or smaller, there are strategies to exploit this.

• Straddling: Buying both a call and put before earnings (expecting move larger than priced). Expensive because of elevated implied volatility.
• Selling premium: Selling straddles expecting the move to be smaller than priced. Theoretically positive expected value long-term if implied volatility is systematically overpriced.
• Directional: If you have a strong view on the earnings outcome, simply buy calls or puts pre-earnings. Elevated implied volatility makes options expensive, requiring a significant move to profit.

Post-earnings drift: Research shows stocks tend to continue moving in the direction of the earnings surprise for 3-6 months after announcement. This "post-earnings announcement drift" is one of the most robust anomalies in financial research.`}],ch5:[{t:"Price Action — The Foundation of Technical Analysis",body:`Price action analysis means making trading decisions based on the actual movement of price itself, without relying on lagging indicators. It's the closest thing to reading the market's "language" directly.

THE CANDLESTICK — INFORMATION DENSITY:
Each candlestick encodes four data points: open, high, low, close. But the relationships between these four tell a story.

LONG UPPER WICK (Shooting Star / Pin Bar):
Price rallied significantly intracandle, but sellers overwhelmed buyers and pushed price back down. The long wick represents rejected buying pressure. Found at highs/resistance = significant bearish signal.

LONG LOWER WICK (Hammer / Pin Bar):
Price dropped significantly intracandle, but buyers absorbed the selling and pushed price back up. Rejected selling pressure. Found at lows/support = significant bullish signal.

ENGULFING CANDLES:
Bullish engulfing: A green candle whose body completely contains the previous red candle's body. The current period's buyers completely overwhelmed the previous period's sellers. Especially significant at the bottom of a downtrend or at support.
Bearish engulfing: Opposite. Sellers overwhelmed previous buyers. Significant at tops or resistance.

DOJI:
Open and close are approximately equal — the market closed where it opened. Indecision. After a strong trend, a doji signals potential reversal as momentum stalls. Context is everything — a doji in the middle of a range is meaningless.

MULTI-CANDLE PATTERNS:
Morning Star: Three-candle bottom reversal. Red candle → small-body candle (indecision gap) → green candle. Momentum shifts.
Evening Star: Three-candle top reversal. Green → small → red.
Three White Soldiers: Three consecutive strong green candles, each closing near high. Powerful buying momentum signal.
Three Black Crows: Three consecutive strong red candles. Powerful selling signal.

THE REALITY OF CANDLESTICK PATTERNS:
Statistical studies of candlestick patterns show variable effectiveness. They work better:
• In liquid markets where patterns are "real" and not just noise
• At significant price levels (major support, resistance, trend lines)
• With confirming volume
• In higher timeframes (weekly patterns more significant than 1-minute patterns)

Used in isolation, candlestick patterns have modest predictive power. Used as confirmation at key levels in the context of higher-timeframe trend analysis, they add real value.`},{t:"Support, Resistance, Trend, and Market Structure",body:`These are the scaffolding of all technical analysis. Everything else is built on top of this foundation.

SUPPORT AND RESISTANCE — THE PHYSICS OF MARKETS:
Support: A price level where historical buying interest has emerged repeatedly. Previous lows, previous range bottoms, round numbers, moving averages acting as support. Why it works: buyers who missed previous dips wait at these levels; traders who bought at the low and sold too early re-enter; short sellers cover as their thesis weakens.

Resistance: A price level where historical selling has emerged. Previous highs, range tops, round numbers. Why: buyers from below take profits; investors who bought at the high finally get a chance to break even and exit; new short sellers enter.

CRITICAL CONCEPT — POLARITY FLIP:
Once a support level is decisively broken, it becomes resistance. Once resistance is broken, it becomes support. This flip occurs because the psychology reverses:
• Support was at $50. When it breaks, everyone who bought there is now underwater (loss).
• Price rallies back to $50. Those underwater buyers, relieved to break even, now SELL. This creates new resistance at the old support.

This is one of the most reliable and exploitable patterns in all of technical analysis. Watch for "throwbacks" and "pullbacks" to broken levels — they're among the highest-probability entries available.

TREND ANALYSIS — HIGHER HIGHS AND HIGHER LOWS:
An uptrend: Each swing high is higher than the previous swing high (Higher Highs — HH). Each swing low is higher than the previous swing low (Higher Lows — HL). This structure means buyers are consistently willing to pay more, and each time sellers push back, buyers step in at higher levels.

A downtrend: Lower Highs (LH) and Lower Lows (LL). Sellers are consistently more aggressive; each rally fails to recover the previous high; each decline reaches new lows.

Trend structure break: In an uptrend, if price makes a LOWER LOW — breaks below the previous Higher Low — the uptrend structure is compromised. This "Break of Structure" (BOS) is the first warning that the trend may be ending.

TREND LINES:
A straight line connecting at least two significant swing lows (uptrend) or swing highs (downtrend). The third touch of a trend line is the most tradeable. First touch defines the line; second touch confirms it; third touch offers the high-probability entry.

Trend lines are subjective — different analysts draw them differently. This is both a weakness (interpretive) and a strength (when many participants draw the same trend line, it becomes self-fulfilling as they all trade off it).

CHANNELS:
Two parallel trend lines creating a price corridor. Upper channel line = resistance. Lower channel line = support. Trading within channels: buy at lower line, sell at upper line. Channel breakouts: when price breaks outside the channel, momentum accelerates in the breakout direction.

FIBONACCI RETRACEMENTS:
Based on the Fibonacci sequence and the golden ratio (0.618). Key levels: 23.6%, 38.2%, 50%, 61.8%, 78.6%. After a significant move, price often retraces to one of these levels before continuing.

The 61.8% retracement (the "golden ratio") is the most watched. Institutions often place orders at the 61.8% retracement of a major move — not because of Fibonacci mysticism, but because enough traders watch it that it becomes self-fulfilling.

The 50% retracement (not technically Fibonacci but widely used) is psychologically significant — retracing exactly half the move before continuing.`},{t:"Wyckoff Method — Reading Institutional Accumulation",body:`Richard Wyckoff developed his method in the early 20th century by analyzing the actual operations of large market operators. His work remains one of the most practically useful frameworks for understanding how large money moves and how to follow it.

THE CORE PRINCIPLE:
Large operators (institutions, "smart money") follow a cyclical process: accumulate → markup → distribute → markdown. They cannot buy or sell large quantities at once without moving the market against themselves, so they operate in defined phases over weeks or months.

The Wyckoff trader's goal: identify what phase the market is in and position accordingly.

ACCUMULATION PHASE (Institutional Buying):
Phase A — Stopping the downtrend:
• Preliminary Support (PS): First significant buying appears after a prolonged downtrend. High volume, wide spreads. Not the bottom, but the beginning of the end of the decline.
• Selling Climax (SC): Panic selling — the most emotional, highest-volume point of the downtrend. Huge down candle on massive volume. Exhaustion of sellers.
• Automatic Rally (AR): Rebound from the Selling Climax. Buyers are more aggressive. Establishes the top of the trading range.
• Secondary Test (ST): Price returns to the SC area to test whether selling is truly exhausted. Volume and spread should be lower than at SC — confirming supply is drying up.

Phase B — Building the cause:
• Price oscillates between support (near SC level) and resistance (near AR level).
• Institutions are quietly buying on weakness, absorbing floating supply.
• Multiple tests of support. Volume analysis is key — if each test of support shows decreasing volume, sellers are exhausting.
• "Spring" or terminal shakeout: Price briefly drops below support, triggering stop losses and discouraging weak holders, before reversing sharply back into range. This is the classic stop hunt — institutions buying the forced selling. After a Spring, the markup phase typically begins.

Phase C — The Spring/Test:
• The Spring is the definitive signal — a final shakeout of weak hands.
• Volume on the Spring is ideally lower than previous tests (fewer genuine sellers remain).
• The Spring reversal is sharp and decisive.

Phase D — Sign of Strength:
• Price breaks above the trading range resistance on high volume.
• Last Point of Support (LPS): A pullback to the former resistance (now support) after the breakout. The ideal entry point.

Phase E — Markup:
• Price trending up as the institutional position drives the market higher.

DISTRIBUTION PHASE (Institutional Selling):
The reverse: Preliminary Supply → Buying Climax → Automatic Reaction → Secondary Test → Upthrust After Distribution (UTAD) → Sign of Weakness → breakdown.

PRACTICAL USE OF WYCKOFF:
Identify potential accumulation by:
1. Strong downtrend followed by high-volume capitulation candle
2. Subsequent range bound trading with declining volatility
3. Volume decreasing on tests of support
4. Spring or terminal shakeout occurring

This is where institutional buyers are accumulating. Position for the eventual breakout. The Wyckoff method gives you the "story" behind the price action — not just patterns, but the mechanics of what's actually happening.`},{t:"Smart Money Concepts — Order Blocks, FVGs, Liquidity Zones",body:`Smart Money Concepts (SMC) is a more recent trading framework that extends and modernizes many Wyckoff ideas. It provides specific, actionable concepts for identifying institutional activity.

ORDER BLOCKS:
An order block is the last significant institutional candle before a major impulsive move. The theory: institutional traders create order blocks when they place large orders — the price imbalance created by their execution shows up as a specific candlestick or zone on the chart.

Bullish Order Block: The last bearish (red) candle before a strong bullish impulsive move. Institutions were buying into selling pressure, creating the launchpad for the rally. When price later returns to this zone, institutions likely have more buy orders waiting there.

Bearish Order Block: The last bullish (green) candle before a strong bearish impulsive move. Institutions were selling into buying pressure. When price returns to this zone, more institutional selling expected.

Identifying high-quality order blocks:
• The move away from the order block should be impulsive (multiple strong candles, high volume)
• The order block should have delivered price far from its origin
• The order block should not have been significantly overlapped by subsequent price action ("mitigated" order blocks lose potency)
• Higher timeframe order blocks are more significant

FAIR VALUE GAPS (FVGs) / IMBALANCES:
A Fair Value Gap is a price gap created by a three-candle sequence where the second candle moves so aggressively that the wicks of the first and third candles don't overlap. This means price moved through that zone without "discovering" it properly — no two-sided trading occurred.

Bullish FVG: Three-candle sequence; middle candle is a strong bullish candle. The gap between the high of candle 1 and the low of candle 3 is the FVG — price never traded there on the upward move.

Markets tend to return to FVGs to "fill" them — this is the mean-reversion tendency. FVGs act as magnets. Unfilled FVGs often attract price back to test them before continuing in the original direction.

LIQUIDITY ZONES:
SMC identifies liquidity in terms of where retail stop losses cluster:
• Equal highs: When price tests the same high twice, retail traders entering shorts put stops just above. Equal lows work inversely. These equal levels are targets for liquidity sweeps.
• Trendline liquidity: Many retail traders use trendline stops. A trendline break triggers all those stops simultaneously — institutions exploit this.
• Session highs/lows: Prior day high/low, Asia session high/low. Well-known levels with clustered orders.

INDUCEMENT:
Institutional players create artificial setups that induce retail traders to enter positions — which then provides the liquidity needed for institutions to build their actual position on the opposite side.

Example: Price forms what looks like a perfect bullish breakout. Retail longs pile in. Institutions, who actually want to sell, have the retail longs providing the buying pressure needed to sell against. Price immediately reverses, stopping out all the "induced" retail longs.

This is not paranoia — it's the mechanical reality of how large players acquire inventory when directional retail sentiment is extreme. The "too obvious" trade is often the trap.

COMBINING SMC WITH HIGHER TIMEFRAME ANALYSIS:
SMC works best top-down:
1. Identify weekly/daily trend and bias
2. Find weekly/daily order blocks and FVGs as potential turning points
3. Drop to 4H/1H for refined entry structure
4. Execute on 15m/5m for precise entry, using order blocks as entry zones
5. Stop loss just below/above the order block
6. Target: next significant liquidity zone (equal highs, previous range)`},{t:"Elliott Wave Theory and Market Cycles",body:`Elliott Wave Theory proposes that market prices move in recognizable, repeating wave patterns driven by collective investor psychology. Developed by Ralph Nelson Elliott in the 1930s, it remains one of the most discussed and debated frameworks in technical analysis.

THE BASIC WAVE STRUCTURE:
A complete market cycle consists of two phases:
1. Motive phase: 5 waves in the direction of the larger trend
2. Corrective phase: 3 waves against the larger trend

The 5-wave impulse:
Wave 1: Initial move in new trend direction. Often small, only recognized in hindsight.
Wave 2: Correction of Wave 1. Retraces significantly (not beyond Wave 1 start).
Wave 3: The strongest, longest wave. Often extends 161.8% or 261.8% of Wave 1.
Wave 4: Correction. Typically shallower than Wave 2. Should not overlap Wave 1.
Wave 5: Final push. Often weakens vs Wave 3. Divergence appears on momentum indicators.

The 3-wave correction:
Wave A: Initial counter-trend move
Wave B: Partial retracement of A (the "fake-out")
Wave C: Final decline completing the correction

ELLIOTT WAVE DEGREES:
Waves exist at multiple scales simultaneously — Grand Supercycle (centuries), Supercycle (decades), Cycle (years), Primary (months), Intermediate (weeks), Minor (days), Minute (hours), Minuette (minutes), Sub-Minuette (seconds). Each degree has its own 5-3 structure that also forms waves of a higher degree.

FIBONACCI RELATIONSHIPS:
Wave relationships follow Fibonacci ratios:
• Wave 2 typically retraces 50-61.8% of Wave 1
• Wave 3 typically extends 161.8-261.8% of Wave 1
• Wave 4 typically retraces 38.2-50% of Wave 3
• Wave 5 typically equals Wave 1 in length (if Wave 3 extended) or 61.8% of Waves 1+3

EXTENSION AND ALTERNATION:
Extension: One of the motive waves (usually Wave 3) extends into a 5-wave sub-structure within the larger impulse. The extended wave is much longer than the others.

Alternation: If Wave 2 is a sharp correction (quick, deep), Wave 4 tends to be a complex correction (sideways, drawn out). If Wave 2 is simple, Wave 4 is complex. This alternation rule helps predict the type of correction to expect.

THE DEBATE ON ELLIOTT WAVES:
Proponents argue it provides a complete framework for market behavior rooted in fractal mathematics and crowd psychology. Critics note the high subjectivity — the same price chart can be labeled with different valid wave counts, undermining its predictive power. The framework is "unfalsifiable" in the strict scientific sense — almost any price history can be labeled with valid wave counts post-hoc.

The professional reality: Very few purely Elliott Wave traders are consistently profitable, but the framework provides useful context. Wave 3 being the strongest, Wave 5 being the weakest, Wave 2 retracing deeply — these tendencies are statistically documented. Using EWT for general market structure context combined with other confirmation tools is more practical than pure EWT trading.`},{t:"Indicators — RSI, MACD, Bollinger Bands, Volume",body:`Indicators are mathematical transformations of price (and sometimes volume) designed to extract signals. They are helpful as confirmation tools but dangerous when used as standalone signals.

RSI — RELATIVE STRENGTH INDEX:
Formula: RSI = 100 - [100 / (1 + (Average Gain / Average Loss))]
Period: Default 14, but 9 and 21 are also used.

Standard interpretation: Above 70 = overbought; Below 30 = oversold. This interpretation alone leads to losses — in strong trends, RSI stays "overbought" for extended periods.

Professional RSI use:
RSI Divergence: Most powerful RSI signal. Price makes a new high, RSI makes a lower high (negative divergence). This reveals weakening momentum — sellers are becoming relatively stronger. Historically precedes significant corrections.

RSI Support/Resistance: RSI itself has levels where it tends to hold. In uptrends, RSI often bounces from the 40-50 zone. In downtrends, RSI often rejects from 55-65. Using RSI's own support/resistance is more sophisticated than static 30/70 levels.

RSI Failure Swings: RSI forms a peak, pulls back, fails to exceed its prior peak, then breaks below the prior RSI low — a momentum-based reversal signal independent of price.

MACD — MOVING AVERAGE CONVERGENCE DIVERGENCE:
Components: MACD line (12 EMA - 26 EMA), Signal line (9 EMA of MACD), Histogram (MACD - Signal).

Standard signals: MACD crosses above signal = bullish; crosses below = bearish. Histogram expanding = momentum increasing; shrinking = momentum waning.

MACD divergence: The most powerful use. Price makes a new high/low but MACD histogram makes a smaller high/low. Momentum is deteriorating before price confirms.

Zero-line crosses: MACD crossing from negative to positive territory signals a shift in intermediate trend — more significant than signal-line crosses.

BOLLINGER BANDS:
Middle band: 20-period SMA. Upper band: Middle + 2 standard deviations. Lower band: Middle - 2 standard deviations.

Squeeze: When bands contract (low volatility), an expansion/breakout is imminent. Direction is not signaled by the squeeze — only that a significant move is coming. Wait for the breakout direction.

Mean reversion: Price touching or exceeding the upper band doesn't automatically mean sell. In strong trends, price can "walk" along the band. Better use: look for price to close back inside the band after an extreme excursion — the reversion is underway.

Bandwidth: (Upper - Lower) / Middle. Low bandwidth = quiet market. High bandwidth = volatile market. A period of low bandwidth followed by expansion signals a new trend beginning.

VOLUME — THE MARKET'S TRUTH DETECTOR:
Volume is the actual number of shares/contracts traded. Price movement accompanied by high volume is more meaningful and more likely to sustain. Price movement on low volume is more likely to reverse.

Volume-based signals:
Volume spike at capitulation low: Exhaustion of selling — potential bottom
Volume surge on breakout: Confirms the breakout is real and likely to follow through
Declining volume on rally: Distribution — institutions selling into retail buying
High volume at resistance with price rejection: Strong supply — likely resistance holds
On-Balance Volume (OBV): Cumulative indicator adding volume on up days and subtracting on down days. When OBV trends up while price is flat or declining, smart money is accumulating (bullish divergence). Leading indicator of price.
VWAP: Volume-Weighted Average Price. Institutional benchmark. Price above VWAP = buyers are in control; below VWAP = sellers. First-time tests of VWAP after trending away are often high-probability entries.`}],ch6:[{t:"Central Banks and Monetary Policy — The Master Variable",body:`Central bank policy is the single most powerful driver of financial markets in the modern era. Everything else — earnings, geopolitics, technical patterns — occurs within the framework set by monetary policy. Understanding the Fed and major central banks is non-negotiable for serious traders.

THE FEDERAL RESERVE — HOW IT ACTUALLY WORKS:
The Federal Reserve has a dual mandate: maximum employment and price stability (2% inflation target). The FOMC (Federal Open Market Committee) meets 8 times per year to set the federal funds rate — the overnight lending rate between banks.

The fed funds rate is the most important number in global finance. It's the risk-free rate against which all other returns are measured. When it rises:
• Cash and bonds become more attractive relative to stocks
• Companies pay more to borrow → reduced investment and hiring
• Mortgage rates rise → housing market cools
• Dollar strengthens (higher yields attract global capital)
• Emerging market debt stress (many countries borrow in USD → higher USD debt cost)

QUANTITATIVE EASING (QE) AND TIGHTENING (QT):
When the zero lower bound on rates prevents further cuts, the Fed uses QE:
• Buys government bonds and mortgage-backed securities from banks
• Banks receive cash reserves in return
• Money supply expands
• Long-term bond yields fall (the Fed's buying drives up bond prices → lower yields)
• Assets reflate (lower rates → higher present value of future cash flows)

QT (Quantitative Tightening) is the reverse — letting bonds mature without reinvesting, or selling bonds outright. Reduces the money supply and puts upward pressure on long-term yields.

The Fed's balance sheet went from $900B pre-2008 crisis to $4.5T post-GFC QE, then to $8.9T at the 2022 peak. Asset prices tracked this expansion closely. This isn't coincidence — excess liquidity flows into financial assets.

THE JACKSON HOLE FRAMEWORK:
The Federal Reserve Bank of Kansas City's annual Jackson Hole symposium is where Fed policy frameworks are signaled well in advance. In August 2020, Fed Chair Powell announced "Average Inflation Targeting" — allowing inflation to temporarily exceed 2% without immediate tightening. Markets rallied dramatically. In August 2022, Powell delivered a 8-minute speech signaling aggressive tightening. Markets fell 3% in the same day. Jackson Hole speeches are among the most important market-moving events of the year.

READING FED COMMUNICATIONS:
The Fed communicates through:
• FOMC statements: Released at end of each meeting. Every word is analyzed.
• Press conferences: Chair's press conference post-meeting. Tone and specific language matter enormously.
• Minutes: Released 3 weeks after each meeting — detailed deliberations.
• Dot plot: Each FOMC member's interest rate projections, released quarterly. Shows where rates are expected to be 1, 2, and 3 years out.
• Fed speeches: Governors and regional presidents speak regularly, sometimes signaling future policy shifts.

The market "prices in" expected Fed moves before they happen. Fed funds futures show what the market believes the probability is of each rate outcome. If the market is 80% pricing a 25bps hike, the actual hike will have little market impact. What moves markets is SURPRISES — when actual policy or language differs from what was priced.

ECB, BOJ, PBOC — THE OTHER MAJOR PLAYERS:
European Central Bank: Sets rates for the Eurozone. Mandate is primarily price stability (unlike the Fed's dual mandate). Draghi's "whatever it takes" speech in 2012 single-handedly ended the European debt crisis — illustrating central bank communication power.

Bank of Japan: Uniquely, Japan spent decades fighting DEFLATION rather than inflation. BOJ pioneered unconventional policy: negative interest rates, yield curve control (targeting specific bond yields). The yen carry trade — borrowing yen at near-zero rates to invest in higher-yielding assets — has been a massive global market force for decades.

PBOC (China): Not independent — directly controlled by the Chinese government. Manages the yuan (RMB) exchange rate, sets interest rates, and controls credit creation through state-owned banks. China's credit cycles have become a major driver of global commodity markets.`},{t:"Economic Indicators and Macro Analysis",body:`Economic data releases create the most consistent, scheduled opportunities for significant price movement. Understanding what each indicator measures and how markets typically react is essential.

TIER 1 INDICATORS (Most Market-Moving):

Non-Farm Payrolls (NFP): Monthly US employment data (first Friday of each month). Measures job creation/destruction excluding farm workers. Consensus estimate vs actual = market reaction.
• Beat by >100K: USD strengthens, stocks typically rally (strong economy)
• Miss by >100K: USD weakens, stocks mixed (bad for economy, but may delay Fed tightening)
• Context matters enormously: in 2022, strong NFP was BAD for stocks because it meant the Fed would keep hiking rates

Consumer Price Index (CPI): Monthly inflation measurement. The most watched economic data of 2021-2023 cycle.
• Higher than expected → Fed will hike more → bonds sell, stocks sell, USD rallies
• Lower than expected → Fed can ease → bonds rally, stocks rally, USD weakens

GDP (Gross Domestic Product): Quarterly measure of economic output. Three releases per quarter: Advance (first estimate, most market moving), Second Estimate, Third/Final estimate.
• Two consecutive quarters of negative GDP = technical recession

Federal Open Market Committee (FOMC) decisions: See above. 8 meetings per year. Rate decisions and forward guidance are Tier 1 events.

TIER 2 INDICATORS:
ISM Manufacturing/Services PMI: Purchasing Managers Index. Above 50 = expansion; below 50 = contraction. Released first business day of each month. A leading indicator — managers are ordering supplies before production ramps up.

Retail Sales: Consumer spending on goods. US economy is 70% consumer-driven. Strong retail sales → strong economy.

Durable Goods Orders: Business investment in long-lived equipment. Leading indicator of business confidence.

Consumer Confidence / University of Michigan Sentiment: Survey-based consumer outlook. Predicts future spending.

Housing starts and Building Permits: Leading indicator — construction activity predicts economic direction 6-12 months ahead.

Initial Jobless Claims: Weekly. Number of new unemployment benefit filings. Timely indicator of labor market health.

INTERMARKET ANALYSIS — HOW ASSET CLASSES RELATE:
Classic relationships:
• Dollar up → commodities down (commodities priced in USD; stronger dollar = more expensive globally = less demand)
• Dollar up → gold typically down (gold is a dollar-denominated store of value; strong dollar makes gold less attractive)
• Strong economy → rates rise → bonds sell → stocks mixed
• Risk-off: investors flee equities → buy Treasuries → sell junk bonds → buy dollars and yen (safe havens)
• Risk-on: investors buy equities → sell Treasuries → buy high-yield → sell safe haven currencies

These relationships are not fixed — they can invert in specific macro regimes. In 2022, stocks AND bonds fell together because the driver was inflation/rate normalization, not recession/growth concerns. Understanding the CURRENT regime is more important than applying historical correlations blindly.

MACRO CYCLE FRAMEWORK:
The economy cycles through phases:
Recovery → Expansion → Peak → Recession → Trough → Recovery

Asset class performance by phase:
Recovery: Stocks lead. Risk appetite returning. Bonds have already peaked.
Expansion: Commodities join the rally. Strong economic growth supports everything.
Peak: Inflation rises. Central bank tightens. Bonds start declining. Real assets shine.
Recession: Bonds rally (rate cuts expected). Commodities fall (demand drops). Stocks fall.
Trough: Cash and bonds have peaked. Early-cycle positioning begins.

SECTOR ROTATION:
Different sectors lead at different points in the business cycle:
Early cycle: Financials, consumer discretionary, technology
Mid cycle: Industrials, materials, energy
Late cycle: Energy, utilities, consumer staples
Recession: Utilities, healthcare, consumer staples (defensive)

Understanding where you are in the cycle and positioning into the leading sector is one of the oldest and most consistently reliable macro strategies.`}],ch7:[{t:"Quantitative Trading — From Models to Execution",body:`Quantitative trading is the application of mathematical and statistical methods to trading decisions. It ranges from simple systematic rules to extraordinarily complex machine learning systems managing billions of dollars.

THE QUANTITATIVE PROCESS:
All successful quant trading follows a similar research pipeline:

1. HYPOTHESIS GENERATION:
Every trading strategy starts with an economic hypothesis — a reason why a pattern should exist and persist. Pure data mining (finding patterns without economic rationale) leads to "discovered" patterns that are actually noise. Good hypotheses:
• "Stocks that beat earnings expectations continue to outperform as analysts slowly revise their estimates upward" (post-earnings drift)
• "Stocks that have recently experienced high short interest are prone to short squeezes during upside surprises"
• "Currency pairs with large interest rate differentials tend to depreciate in the high-rate currency over very long horizons despite short-term carry returns"

2. DATA COLLECTION AND CLEANING:
Data quality determines strategy quality. Sources: exchange tick data, fundamental databases (Compustat, Bloomberg), alternative data (satellite imagery, credit card transactions, web scraping, NLP on news), options flow data.

Survivorship bias: A catastrophic error in backtesting. If your dataset only includes companies that exist today, you're excluding all the companies that went bankrupt or were delisted — which skews results dramatically upward. Proper backtesting uses point-in-time data including all securities that existed at each historical date.

Look-ahead bias: Using data that wasn't available at the time of the decision. If a trade on January 15 uses the January 15 closing price to calculate a signal, but the close is only known after the close — the signal would be acted on after the data was available in real life, not before.

3. FACTOR DISCOVERY AND TESTING:
Factors are quantitative characteristics that predict future returns. The four most documented:
• Value: Cheap stocks outperform expensive stocks (Fama-French, 1992)
• Size: Small caps outperform large caps (also Fama-French)
• Momentum: Recent winners continue to outperform (Jegadeesh-Titman, 1993)
• Quality: Profitable, low-debt companies outperform (Novy-Marx, 2013)
• Low volatility: Paradoxically, lower-volatility stocks often outperform higher-volatility (Baker, Bradley, Wurgler 2011)

Each factor has periods of underperformance — sometimes extreme. Momentum worked for decades until it crashed 30% in one month in 2009. Value dramatically underperformed growth from 2011-2020. Factor timing is a whole additional layer of complexity.

4. SIGNAL CONSTRUCTION:
Converting raw factors into actionable signals. Z-score normalization (subtract mean, divide by standard deviation) makes signals comparable across different instruments. Signal combination: how do you weight multiple factors? Equal weight, IC-weighted (Information Coefficient), machine learning ensemble methods?

5. PORTFOLIO CONSTRUCTION:
Given signals for hundreds of instruments, how do you construct a portfolio? Optimization: maximize expected return subject to constraints (risk budget, leverage, sector limits, turnover, liquidity). Mean-variance optimization (Markowitz) in practice is highly sensitive to estimation error in returns — small input changes create wildly different portfolios. Robust optimization methods (Black-Litterman, risk parity, shrinkage estimators) address this.

EXECUTION AND TRANSACTION COST MODELING:
A signal that's brilliant on paper may be unprofitable after transaction costs. Sophisticated quant funds model:
• Explicit costs: Commissions, exchange fees
• Market impact: Cost of moving the market when executing
• Slippage: Bid-ask spread and execution price vs midpoint
• Timing cost: Cost of not transacting at the decision point (implementation shortfall)

Capacity constraint: High-alpha strategies often have very limited capacity. A strategy that works brilliantly with $10M may be arbitraged away with $1B.`},{t:"Backtesting, Overfitting, and Walk-Forward Optimization",body:`Backtesting is testing a trading strategy on historical data to evaluate performance before risking real capital. Done properly, it's essential. Done poorly, it produces false confidence and financial ruin.

THE OVERFITTING PROBLEM:
Overfitting means the model has been optimized too closely to the historical data. It "memorizes" the noise in the training data rather than learning the genuine signal. An overfit model shows spectacular backtested performance but fails catastrophically in live trading.

Signs of overfitting:
• Stratospheric Sharpe ratios (>3 in backtesting for non-arbitrage strategies should be suspicious)
• Very high number of parameters relative to number of observations
• Performance that depends critically on specific parameter values (not robust to small changes)
• Strategy trades rarely (few observations → each is weighted heavily → noise dominates)
• Backtest dramatically outperforms a simpler version of the same strategy

THE OVERFITTING MATHEMATICS:
If you run 100 backtests on random data, you'll find some that appear to have statistically significant edge by pure chance. Multiple testing inflates false positive rates. The correct null hypothesis isn't "does this specific strategy have edge?" but "among all the strategies I could have tried, does this one's result still look significant?"

The Bailey-Prado framework (Deflated Sharpe Ratio, Probability of Backtest Overfitting): Accounts for how many strategy variations were tested in arriving at the final strategy. A Sharpe of 1.5 from the first strategy you tested is very different from Sharpe 1.5 after testing 500 variations.

PROPER BACKTESTING PROTOCOL:
1. Formulate hypothesis with economic rationale BEFORE looking at data
2. Collect data; split into training set (~70%) and TEST SET (30%) that is locked away
3. Develop and optimize on training set only
4. TEST SET is opened ONCE — for final evaluation. If you adjust the strategy after seeing test set results, it becomes training data.
5. Results: training performance tells you about optimization. Test set performance is the honest estimate.

WALK-FORWARD OPTIMIZATION:
Instead of a single train/test split, walk-forward testing uses rolling windows:
• Train on months 1-24, test on months 25-36
• Retrain on months 4-27, test on months 28-39
• Continue rolling forward
This produces many out-of-sample segments that, combined, give a realistic performance picture.

IN SAMPLE (IS) vs OUT OF SAMPLE (OOS) PERFORMANCE:
The ratio of OOS Sharpe to IS Sharpe is a key quality metric. Ratio > 0.75: strategy is robust. Ratio 0.5-0.75: decent robustness. Ratio < 0.5: overfitting suspected.

MONTE CARLO SIMULATION IN STRATEGY TESTING:
Beyond single-path backtesting, Monte Carlo methods evaluate strategy robustness across thousands of simulated scenarios:
• Randomly shuffle the sequence of historical trade outcomes
• Randomly resample with replacement (bootstrap)
• Simulate different volatility regimes

This produces a distribution of possible performance outcomes rather than a single path. The 5th percentile outcome is a more honest estimate of downside risk than the single historical path.

KEY BACKTESTING METRICS:
Net profit and CAGR: Absolute and annualized returns
Maximum drawdown: Largest peak-to-trough decline. This is the "pain metric."
Sharpe Ratio: (Return - Risk-free rate) / Standard deviation of returns. Standardized risk-adjusted return.
Sortino Ratio: Like Sharpe but only penalizes downside volatility. More relevant for strategies with positive skew.
Calmar Ratio: CAGR / Maximum Drawdown. Higher is better.
Win rate and Average win/loss: Strategy characteristics
Profit factor: Gross profits / Gross losses. >1.5 is generally good.
Trade count: Enough trades for statistical significance? (minimum 30, ideally 200+)`},{t:"Machine Learning in Trading",body:`Machine learning has become a central tool in quantitative finance. But applying ML to trading has unique challenges that differ from standard ML applications — primarily the non-stationarity of financial data and the adversarial nature of markets.

ML APPLICATIONS IN FINANCE:
Return prediction: Can we predict next-period returns? Models: linear regression, ridge/lasso regression, gradient boosting (XGBoost, LightGBM), neural networks, random forests.

The challenge: Financial data is extremely noisy. Signal-to-noise ratios are far lower than in other ML domains. A model that explains 1% of variance in returns may still be profitable in production. Evaluation must be done out-of-sample with proper protocols.

Classification: Predict whether price will be up or down (binary classification). Random forests, support vector machines, gradient boosting. These models often use features derived from price (technical indicators), volume, cross-sectional rankings, fundamental data, and alternative data.

Regime detection: Hidden Markov Models, Gaussian Mixture Models for detecting whether the market is in trend, mean-reversion, or crisis regime. Different strategies are optimal in different regimes.

NLP AND NEWS ANALYTICS:
Large language models (LLMs) and traditional NLP extract sentiment signals from:
• Earnings call transcripts (management tone, specific language)
• News feeds (Reuters, Bloomberg, PRNewswire)
• Social media (Twitter/X, Reddit — GameStop)
• SEC filings (8-K, 10-K, 10-Q — unusual language changes)
• Analyst reports

Sentiment scores can be leading indicators of price movement, especially on smaller stocks with less analyst coverage. The decay of the signal (how long after the news does the edge persist) is short — typically hours to a few days.

REINFORCEMENT LEARNING (RL) FOR TRADING:
RL trains an agent to maximize cumulative reward through trial and error. Applied to trading: the agent decides position sizes, enters/exits based on market state, receives reward = P&L. The agent learns a policy through simulated market experience.

Challenges:
• Financial data is non-stationary — the environment keeps changing
• Reward sparsity — good actions may not be rewarded immediately
• Overfitting to historical market dynamics that won't repeat
• The fact that RL agent's actions themselves affect the environment (in large sizes)

Deep RL has shown promise in controlled environments but remains more research than mainstream production use for most applications.

ALTERNATIVE DATA:
The information edge in modern markets comes from data that wasn't traditionally available:
• Satellite imagery: Counting cars in parking lots (retail foot traffic), measuring oil storage tank levels, monitoring shipping container movement
• Credit/debit card transactions: Real-time consumer spending data from anonymized card networks
• Mobile phone location data: Foot traffic to stores, factories, offices
• Web scraping: Job postings (signal company growth/contraction), price data, review volume
• Patent filings: Innovation activity tracker
• Shipping data: Import/export volumes by company

Alternative data is expensive, often requires legal clearances, and edges erode as more funds adopt the same data. But at the frontier, it represents genuine information advantage.`}],ch8:[{t:"Behavioral Finance and Cognitive Biases",body:`Standard finance assumes market participants are rational agents who maximize expected utility. Behavioral finance, pioneered by Kahneman, Tversky, and Thaler, documents the systematic ways in which humans deviate from rationality — and how these deviations create persistent market patterns.

THE MOST DANGEROUS BIASES IN TRADING:

LOSS AVERSION:
Tversky and Kahneman's Prospect Theory finding: The psychological pain of losing $100 is approximately twice as intense as the pleasure of gaining $100. This creates specific destructive trading behaviors:
• Holding losers too long: "It'll come back" — avoiding realizing the loss and the associated pain
• Cutting winners too early: Taking the pleasure of a gain before it can reverse
The net result: traders systematically let losses run and cut profits short — the exact opposite of correct risk management.

CONFIRMATION BIAS:
Once you have a market view, you unconsciously seek information that confirms it and discount information that contradicts it. A trader bullish on a stock will read bullish analysis, ignore bearish research, and interpret ambiguous information as supportive of their position. This creates the "trader's ruin" psychology of holding a losing position while constructing increasingly elaborate justifications.

RECENCY BIAS:
Overweighting recent experience and extrapolating it. After a 2-year bull market, traders assume the bull market will continue indefinitely. After a crash, they assume crashes are the permanent new reality. Markets exploit this — peaks occur when optimism is most extreme, bottoms when pessimism is most intense.

OVERCONFIDENCE:
Studies consistently show most traders overestimate their skill. Male traders tend to be more overconfident than female traders and have higher turnover as a result — generating more transaction costs with no corresponding benefit. After a winning streak, overconfidence peaks — exactly when traders should be most cautious.

ANCHORING:
Fixating on an arbitrary reference point. "I bought this stock at $100, so I won't sell until it gets back to $100." But the market doesn't care what you paid. The relevant question is: given current information, what is the expected return from the current price? The purchase price is irrelevant.

SUNK COST FALLACY:
The tendency to continue a failing course of action because of prior investment (time, money, emotional commitment). "I've held this for 3 years, I can't sell now." In trading, every decision should be forward-looking only. Past losses or gains are sunk costs irrelevant to future expected returns.

GAMBLER'S FALLACY:
Believing that independent events are connected. "The last 5 trades were losers, so the next one must be a winner." Trading edges don't work like this — each trade is approximately independent. After 5 consecutive losses from a positive expectancy system, the next trade has the same probability distribution as any other.

MENTAL ACCOUNTING:
Treating money differently based on its source or designated use. "I'm trading with house money" (prior profits) — leading to more risk-taking. "This is my rent money" — leading to loss aversion that interferes with disciplined execution. Professionally, all capital is fungible and should be treated identically regardless of source.

HOW SMART MONEY EXPLOITS THESE BIASES:
Market structure is partially engineered to exploit retail psychology:
• Run price to new highs (triggering FOMO in retail) then distribute into that buying
• Create "obvious" setups that retail confirmation bias reinforces, then reverse against them
• News-driven spikes that recency-biased retail traders chase at exactly the wrong moment

Understanding these biases isn't just academic — it's the difference between being exploited by them and avoiding them.`},{t:"Market Theories — EMH, Adaptive Markets, Reflexivity, Game Theory",body:`The intellectual framework for understanding whether markets can be beaten and how they actually function.

EFFICIENT MARKET HYPOTHESIS (EMH):
Developed by Eugene Fama in the 1960s. Three versions:
Weak form: Current prices reflect all historical price information. Technical analysis cannot generate excess returns.
Semi-strong form: Current prices reflect all publicly available information. Fundamental analysis using public information cannot generate excess returns.
Strong form: Prices reflect all information, including private (insider) information. Even insiders cannot consistently outperform.

Evidence for EMH:
• Most actively managed funds underperform index funds after fees (SPIVA reports)
• Professional stock pickers rarely show persistent skill above chance
• Historical price patterns predict future returns with very low accuracy

Evidence against EMH:
• Momentum effect (past winners continue winning — inconsistent with weak form)
• Value effect (cheap stocks outperform expensive — available with public data — inconsistent with semi-strong)
• Post-earnings announcement drift (public earnings surprise predicts future returns)
• Calendar anomalies (January effect, etc.)
• Jim Simons' Renaissance Medallion fund returned 66% annually for decades — astronomically unlikely if markets are efficient

The pragmatic resolution: Markets are mostly efficient but not perfectly so. Mispricings exist but are small, short-lived, and require significant resources to exploit. The rare consistent winner like Medallion is evidence that extraordinary information processing and execution can generate edge, but it's exceptional, not the norm.

ADAPTIVE MARKETS HYPOTHESIS (AMH):
Andrew Lo's 2004 framework reconciling EMH with behavioral finance. Markets are not always efficient — efficiency depends on the competitive environment. When markets are thick with sophisticated participants competing to exploit inefficiencies, those inefficiencies disappear quickly. When participants thin out or focus elsewhere, inefficiencies persist longer.

AMH predicts:
• Market efficiency varies over time and across market segments
• Strategies work, fail, then sometimes work again as the population of competitors evolves
• Crises temporarily reduce efficiency as participants are in survival mode
• New markets (emerging markets, crypto) are less efficient initially

REFLEXIVITY (SOROS):
George Soros's theory: Standard economics assumes markets converge to equilibrium with prices reflecting fundamentals. Reflexivity says prices themselves influence the fundamentals they're supposed to reflect.

Example: Rising stock price → company issues cheap equity → funds expansion → actual earnings growth → further stock price rise. The initial rise, even if speculative, creates real economic consequences that validate and perpetuate it.

Classic reflexive boom-bust cycle:
1. Initial positive fundamental development attracts investment
2. Rising prices validate the narrative, attracting more investment
3. The rising prices themselves influence the underlying fundamentals positively (cheap capital, executive confidence, consumer perception)
4. Increasingly speculative participants enter; the trend becomes self-reinforcing
5. At some point, the gap between price and fundamental reality becomes too large to sustain
6. Trend reverses; the reflexive process works in reverse (falling prices → deteriorating conditions → further falls)

This framework helps explain why bubble dynamics can persist far longer than "rational" models suggest — the feedback loop is real, not just psychological.

GAME THEORY IN MARKETS:
Markets are interactive environments where each participant's optimal strategy depends on others' strategies. Several game-theoretic concepts directly apply:

Prisoner's Dilemma: Individual rationality produces collectively irrational outcomes. Applied to markets: when all traders simultaneously pursue the same "rational" strategy (e.g., running the same momentum algorithm), the collective behavior creates instability (crowded trades, simultaneous unwinds).

Keynesian Beauty Contest: Keynes's analogy — successful investing isn't about picking the most beautiful face (most undervalued stock) but picking the one OTHERS will find most beautiful (most likely to attract buying from other investors). This creates "reflexive" pricing where the narrative matters as much as fundamentals.

Signaling Games: Large traders' actions reveal information. When a major institution is seen buying (e.g., 13F disclosures), other investors pile in — a rational response to the information signal. This creates momentum in institutional holdings.

Zero-Sum vs Positive-Sum: In aggregate, markets are positive-sum (economic growth creates wealth). But within the active trading subset, each profit requires a corresponding loss. Day trading in liquid markets is closer to zero-sum — every dollar made by a skillful day trader corresponds to a dollar lost by someone less skillful.`}],ch9:[{t:"Position Sizing and Kelly Criterion",body:`If there is one chapter that separates professionals from amateurs, it's this one. All the technical analysis, all the macro understanding, all the pattern recognition — it's worthless without correct position sizing.

THE KELLY CRITERION — OPTIMAL BETTING THEORY:
John Kelly's 1956 paper at Bell Labs solved a fundamental problem: given a bet with known probability of winning and a given payoff, what fraction of your capital should you bet to maximize long-term wealth?

Kelly formula (simplified):
f = W - [(1 - W) / R]
f = fraction of capital to bet
W = win probability
R = win-to-loss ratio (average win / average loss)

Example:
Win rate: 55% (W = 0.55)
Average win: $200, Average loss: $100 → R = 2

f = 0.55 - [(1-0.55)/2] = 0.55 - 0.225 = 0.325 = 32.5% per trade

The Kelly Criterion produces the highest geometric mean growth rate in the long run. Betting more than Kelly reduces long-term returns (despite seeming more aggressive). Betting less than Kelly reduces returns but also reduces volatility.

WHY FULL KELLY IS USUALLY DANGEROUS:
1. The formula requires exact knowledge of W and R — which are uncertain in practice
2. Overestimating your edge leads to over-betting Kelly → potential ruin
3. Full Kelly produces enormous variance — multiple consecutive losses can cause 60-70% drawdowns even from a positive expectancy strategy

The professional solution: Half-Kelly or Quarter-Kelly.
Half-Kelly: Bet 50% of the full Kelly amount. Reduces variance by 75% while only reducing expected growth by 25%. Almost all sophisticated practitioners use fractional Kelly.

RISK OF RUIN MATHEMATICS:
Risk of ruin is the probability that a sequence of losses will wipe out your trading capital (or reduce it to some defined "ruined" threshold).

Formula for risk of ruin (simplified, fixed bet size):
R = [(1-E)/(1+E)]^(N/B)
Where:
E = edge per trade (expected profit as fraction of bet size)
N = total capital available
B = bet size

With 1% edge, betting 2% of capital each time:
Risk of ruin ≈ very low (capital can sustain hundreds of losing trades)

With 1% edge, betting 20% of capital each time:
Risk of ruin ≈ Very high (5 consecutive losses = 67% drawdown)

THE PRACTICAL RULES:
1% per trade: Maximum 1% of total account at risk per trade. Safest, slowest growth.
2% per trade: Industry standard for retail. 50 consecutive losses needed to wipe out.
5% per trade: Aggressive. 15 consecutive losses to lose 50%. Not recommended.
10%+ per trade: Gambling. Accept that ruin is likely over time.

THE EFFECT OF TRADING FREQUENCY:
A strategy with 1% per trade risk making 2 trades per day vs. 1 trade per week:
• 2 trades/day: ~500 trades/year → significant compounding potential but also higher chance of drawdowns
• 1 trade/week: ~50 trades/year → much lower variance, easier psychology
Risk of ruin with the same per-trade risk is similar, but the emotional experience is very different.`},{t:"Portfolio Management, Hedging, and Drawdown Control",body:`Trading a single instrument in isolation is one level of skill. Managing a portfolio — multiple positions simultaneously — requires a completely different framework.

PORTFOLIO CONSTRUCTION PRINCIPLES:
Correlation is the key variable. Two highly correlated positions (e.g., long gold, long silver) don't provide diversification — they're essentially the same bet. True diversification requires low or negative correlation between positions.

Harry Markowitz's Modern Portfolio Theory (1952): For any given expected return level, there is a portfolio that minimizes risk (standard deviation). The "efficient frontier" traces these optimal portfolios. Adding uncorrelated assets always improves the efficiency of the portfolio.

Risk budget approach: Define total portfolio risk tolerance (e.g., 10% maximum drawdown target). Allocate that risk budget across positions based on their individual risk and pairwise correlations. Lower-correlation positions get larger allocations; higher-correlation positions must be smaller.

GREEK PORTFOLIO METRICS:
Alpha (α): Returns above a benchmark (usually S&P 500) after adjusting for market risk. Pure alpha is generated by stock selection skill, independent of market direction.

Beta (β): Market sensitivity. Beta = 1.5 means the portfolio moves 1.5% for every 1% market move. High beta = amplified market exposure (good in bull markets, devastating in bear markets).

Sharpe Ratio: (Portfolio return - Risk-free rate) / Standard deviation. Measures return per unit of total risk.

Sortino Ratio: (Portfolio return - Target return) / Downside deviation. Only penalizes downside volatility, rewarding strategies with positive skew.

Calmar Ratio: CAGR / Maximum Drawdown. Preferred by many practitioners — focuses on the actual pain metric (drawdown) rather than theoretical variance.

HEDGING STRATEGIES:
Equity portfolio hedge options:
1. S&P 500 put options: Buy puts on SPY or SPX. Expensive (you pay premium) but provides direct protection against broad market decline.
2. Short futures: Short ES futures against a long equity portfolio. Cheaper than options, provides systematic hedge. Caps upside but limits downside.
3. Long VIX calls: VIX spikes when markets fall. Long VIX calls profit during crises. But VIX mean-reverts — holding them long-term is costly.
4. Currency hedges: If your equity portfolio is global, hedge currency exposure.
5. Inverse ETFs: SQQQ (3x inverse Nasdaq). Simple but decay-prone, not suitable for long-term holdings.

DRAWDOWN MANAGEMENT:
Maximum drawdown (MDD) = (Peak Value - Trough Value) / Peak Value

Professional standards:
• Retail target: Max 20-25% drawdown
• Institutional funds: 10-15% MDD often triggers investor redemptions
• Prop trading desks: Often have 5-10% MDD limits before risk reduction or suspension

Rules for managing drawdowns:
1. Daily loss limit: Stop trading after losing X% in one day (3% is common). Prevents one bad day compounding into disaster.
2. Weekly/monthly drawdown triggers: Reduce position size 50% if drawdown reaches 10%; stop trading if it reaches 20%.
3. Never add to losers to "average down": Adding to a losing position increases risk when your thesis is already being tested.
4. Volatility-adjusted sizing: When market volatility spikes, reduce position sizes automatically. Higher volatility = same dollar risk requires smaller position.

COMPOUNDING VS SURVIVAL — THE FUNDAMENTAL TENSION:
To compound aggressively, you need large positions relative to capital. But large positions risk large drawdowns that break the compounding chain.

Resolution: Start conservatively. Build a track record. Increase position size gradually as your edge is proven over hundreds of trades. Professional traders are still trading the same risk percentages when their account is 10x larger — the absolute position sizes are larger, but the discipline remains constant.

The best compounding is slow compounding that never breaks down.`}],ch10:[{t:"Modern Portfolio Theory and Efficient Frontier",body:`Modern Portfolio Theory (MPT) is the mathematical framework for portfolio construction developed by Harry Markowitz in 1952. It earned him the Nobel Prize in Economics in 1990 and remains the foundation of institutional portfolio management.

THE CORE INSIGHT:
It's not enough to consider the expected return and risk of individual assets in isolation. What matters is how assets move together (their correlations). Combining assets that are not perfectly correlated produces a portfolio with lower risk than the weighted average of the individual assets' risks.

THE MATHEMATICS:
For a two-asset portfolio:
Expected Return: E(Rp) = w1 × E(R1) + w2 × E(R2)
Portfolio Variance: σ²p = w1² × σ1² + w2² × σ2² + 2 × w1 × w2 × σ1 × σ2 × ρ12

Where ρ12 = correlation between assets 1 and 2.

Key insight: When ρ12 < 1 (assets are not perfectly correlated), the portfolio variance is less than the weighted average of individual variances. The lower the correlation, the greater the benefit.

When ρ12 = -1 (perfect negative correlation): a portfolio can theoretically be constructed with zero variance. In practice, no real-world assets have -1 correlation, but many pairs have low or negative correlation — the diversification benefit is real and substantial.

THE EFFICIENT FRONTIER:
For n assets with expected returns, variances, and pairwise correlations, all possible portfolio combinations trace a set of possible (return, risk) coordinates. The efficient frontier is the upper boundary of this set:
• For any given risk level, the efficient frontier represents the maximum achievable return
• For any given return target, the efficient frontier represents the minimum achievable risk
• Portfolios on the efficient frontier are "efficient" — no improvement is possible in one dimension without sacrificing the other

The minimum variance portfolio: The leftmost point on the efficient frontier — the portfolio with the lowest possible risk, regardless of return. Often surprisingly return-competitive because of diversification benefits.

CAPITAL MARKET LINE:
Adding a risk-free asset (cash, T-bills) extends the analysis. Now investors can combine the risk-free asset with the risky portfolio. The optimal risky portfolio to combine with the risk-free asset is the one with the highest Sharpe Ratio — the "Market Portfolio" or "Tangency Portfolio."

The Capital Market Line runs from the risk-free rate, tangent to the efficient frontier. Every point on this line represents a combination of the risk-free asset and the optimal risky portfolio. More aggressive investors hold more of the risky portfolio; conservative investors hold more risk-free.

PRACTICAL LIMITATIONS OF MPT:
1. Garbage in, garbage out: MPT requires estimates of expected returns, variances, and correlations. Small estimation errors → dramatically different optimal portfolios. Expected returns are notoriously hard to estimate.
2. Correlations are unstable: In normal markets, asset correlations are moderate. In crises, correlations spike toward 1 — everything falls together. MPT's diversification benefits disappear exactly when they're most needed.
3. Normal distribution assumption: MPT assumes returns are normally distributed. Real returns have fat tails — extreme events are far more common than the normal distribution predicts. This underestimates tail risk.
4. Mean-variance isn't the only objective: Investors care about more than mean and variance. Skewness, kurtosis, drawdown — all matter and aren't captured in the standard framework.

Extensions that address these limitations: Black-Litterman model (addresses return estimation), Risk Parity (addresses unstable correlations), CVaR optimization (addresses non-normality), Robust Optimization (handles estimation uncertainty).`},{t:"Factor Investing, Alpha, Beta, and Risk-Adjusted Returns",body:`Factor investing is the systematic approach to capturing known return premiums that persist across time and markets. It bridges the gap between passive indexing and active stock picking.

THE FACTOR ZOO:
Academic researchers have published hundreds of "factors" — stock characteristics that predict future returns. But many are statistical mirages. The well-documented, theoretically grounded factors:

MARKET BETA (β):
The original factor from CAPM. Higher-beta stocks should earn higher returns (compensation for bearing more market risk). In practice, the relationship is weaker than CAPM predicts — the "low volatility anomaly" shows high-beta stocks often underperform.

VALUE:
Cheap stocks (low Price/Book, Price/Earnings, Price/Cash Flow) outperform expensive stocks. Theory: value stocks are riskier companies in financial distress (risk premium). Behavioral alternative: investors extrapolate past growth too far, overpaying for exciting companies and underpaying for boring/troubled ones.
Evidence: Documented globally across 90+ years of data. But value dramatically underperformed growth 2010-2020, leading some to declare it "dead." It then outperformed strongly in 2022.

MOMENTUM:
Recent 12-month winners continue to outperform recent losers (ranking on months 2-12, skipping the most recent month to avoid short-term reversal). Theory: investor underreaction to news, gradual incorporation of information, trend-following behavior.
Evidence: Extremely robust. Works in stocks, bonds, commodities, currencies, globally. The strongest factor after value. But prone to catastrophic crashes during market reversals.

QUALITY:
Profitable, growing, low-debt companies outperform. Metrics: high ROE, high gross margins, low debt/equity, high earnings stability.
Theory: High-quality companies are more resilient and compound capital more effectively. Behavioral: investors neglect boring quality companies in favor of exciting growth stories.

SIZE:
Small-cap stocks outperform large-caps (with exceptions and debate). Part of this is compensation for lower liquidity and higher transaction costs. Part may be genuine risk premium for lower diversification.

IMPLEMENTING FACTOR STRATEGIES:
Smart Beta ETFs: Factor exposure packaged as passive ETFs. iShares MSCI USA Value Factor, iShares MSCI USA Momentum Factor, Invesco S&P 500 Low Volatility. Low cost, systematic, tax-efficient.

Factor timing: Dynamic allocation between factors based on their valuation, momentum, and macro environment. Attractive in theory but evidence is mixed on implementation.

Multi-factor: Combining factors (value + momentum + quality + low vol) creates more consistent, less volatile factor exposure. Factors have different return cycles and tend to diversify each other.

MEASURING ALPHA:
Alpha = Portfolio Return - β × (Benchmark Return - Risk-free Rate) - Risk-free Rate
A positive alpha means the manager generated returns beyond what their market exposure and known risk factors explain. True alpha is extremely rare and decays as assets under management grow.

The Fama-French 3-Factor and 5-Factor models extend CAPM to adjust for value, size, and profitability factors. A manager's alpha measured against these extended models is much lower than CAPM alpha — what looks like skill is often just factor exposure. Genuine, persistent, factor-adjusted alpha is one of the rarest things in finance.`}],ch11:[{t:"Options — Greeks, Strategies, and Volatility Trading",body:`Options are the most versatile and complex instruments available to retail traders. A complete understanding of options opens strategies unavailable with any other instrument — hedging, income generation, leveraged speculation, and pure volatility plays.

OPTIONS FUNDAMENTALS:
A call option gives the buyer the right (not obligation) to buy 100 shares of a stock at the strike price before expiration. A put option gives the right to sell.

For every option buyer, there is a seller (writer). The buyer pays premium to the seller. The seller receives premium but takes on obligation.

Long call: Pays premium, profits if stock rises above strike + premium paid.
Long put: Pays premium, profits if stock falls below strike - premium paid.
Short call: Receives premium, profits if stock stays below strike. Unlimited loss potential.
Short put: Receives premium, profits if stock stays above strike. Large loss potential.

THE OPTION GREEKS:
Delta (Δ): Rate of change of option price per $1 change in underlying stock price.
ATM (At-the-money) call: ~0.50 delta (moves $0.50 for every $1 stock move)
Deep ITM call: ~1.0 delta (moves nearly 1:1 with stock)
Deep OTM call: ~0.05 delta (barely moves with stock)

Gamma (Γ): Rate of change of delta per $1 change in underlying. Tells you how fast delta is changing.
High gamma: Option's delta changes rapidly. Owned options have positive gamma (beneficial). Written options have negative gamma (dangerous near expiration).
Gamma risk near expiration: Short gamma positions face explosive risk as expiration approaches if price is near the strike.

Theta (Θ): Time decay. The daily cost of holding a long option. Long options lose value daily due to time passing. Short options GAIN value from time decay. Measured in dollars per day.
Options buyers fight time decay. Options sellers profit from it.
Theta accelerates dramatically in the last 30 days before expiration.

Vega (V): Sensitivity to changes in implied volatility. Long options have positive vega — rising IV increases option value. Short options have negative vega — rising IV hurts.
Selling options before earnings (high IV) captures vega collapse after the event.

Rho (ρ): Sensitivity to interest rate changes. Generally less important except for very long-dated options (LEAPS).

OPTIONS STRATEGIES:

COVERED CALL: Own stock, sell a call against it.
• Receives premium income (reduces cost basis)
• Caps upside at strike price
• Suitable when: neutral to slightly bullish, want income

PROTECTIVE PUT: Own stock, buy a put.
• Insurance against sharp decline
• Costs premium (reduces returns in stable markets)
• Suitable when: worried about downside but don't want to sell stock

VERTICAL SPREAD: Buy one strike, sell another of same type.
• Bull call spread: Buy lower strike call, sell higher strike call. Reduces cost, caps profit.
• Bear put spread: Buy higher strike put, sell lower strike put.
• Defined risk and reward. Suitable for directional plays.

IRON CONDOR: Sell OTM call spread + sell OTM put spread simultaneously.
• Profits when stock stays within a range (collect both premiums)
• Risk is limited to spread width minus premium received
• High probability strategy (profitable ~70% of the time) but losers are larger than winners
• Vega negative: profits from volatility declining (best sold after volatility spikes)

STRADDLE: Buy ATM call + ATM put.
• Profits from large move in either direction
• Long straddle: Pay premium, need significant volatility. Positive vega (benefits from IV expansion)
• Short straddle: Receive premium, profit if stock stays near strike. Very risky — unlimited loss potential

CALENDAR SPREAD: Buy longer-dated option, sell shorter-dated option at same strike.
• Profits from front month theta decay exceeding back month decay
• Long vega if IV rises, back month gains more than front month
• Ideal in low-volatility environment with expected volatility expansion

VOLATILITY TRADING:
Implied Volatility (IV): The market's forward-looking estimate of expected price movement, embedded in option prices. High IV = expensive options. Low IV = cheap options.

Historical/Realized Volatility (RV or HV): Actual measured price movement over a past period.

IV vs RV relationship:
• IV > RV historically: Options are systematically overpriced on average. Selling options tends to be profitable over time because implied volatility overstates realized volatility. This is documented across most markets.
• VIX (the "Fear Index"): Implied volatility of S&P 500 options. Mean-reverts. Spikes during crises. In calm markets, selling VIX is profitable. During crises, short VIX positions face catastrophic losses.

VIX term structure: VIX futures further from expiration usually trade at premium to front-month VIX (contango). Rolling short VIX positions profits from this contango. ProShares SVXY and similar products (XIV famously blew up in February 2018 in the "Volmageddon" event — a 96% loss in one day).`}],ch12:[{t:"Hedge Fund Structures and Strategies",body:`Hedge funds are private investment partnerships using a wide range of strategies, typically with lower regulatory constraints than mutual funds. Understanding how they operate reveals the most sophisticated approaches to markets.

STRUCTURE AND ECONOMICS:
Typical structure: General Partner (the fund manager) and Limited Partners (investors). Organized as limited partnerships for tax efficiency.

Fee structure: "2 and 20" — 2% annual management fee + 20% performance fee on profits. Large funds negotiate different terms. Some charge 3% management + 30% performance. This fee structure creates alignment (manager profits when investors profit) but also creates asymmetric incentives (manager earns on upside, doesn't share losses beyond reputation damage).

High water mark: Performance fees are only paid on NEW all-time highs. If the fund loses 20%, the manager must first recover those losses before charging performance fees again. This protects investors from paying fees for recoveries of prior losses.

Hurdle rate: Some funds only charge performance fees on returns above a specified hurdle (e.g., the risk-free rate). More investor-friendly structure.

MAJOR HEDGE FUND STRATEGIES:
Global Macro (Soros, Dalio, Druckenmiller): Trading across asset classes and countries based on macroeconomic analysis. Views on interest rates, currency regimes, commodity cycles, political changes. Typically high conviction, concentrated positions with significant leverage.

Equity Long/Short: Long undervalued stocks, short overvalued stocks. Market exposure (net beta) varies from roughly neutral to net long. Returns come from both long and short selection. Most hedge funds use this approach.

Equity Market Neutral: Long/short portfolio with near-zero net market exposure. Returns theoretically come purely from stock selection skill. Difficult to execute — ensuring true neutrality across factors (beta, sector, size) requires sophisticated risk systems.

Event-Driven:
• Merger arbitrage: When Company A offers to buy Company B at $50/share, Company B typically trades at $48-49 (a discount reflecting deal uncertainty). Arbitrageurs buy at $48, expecting to collect $50 at close. Spread = risk premium for deal failure.
• Distressed debt: Buying bonds of companies in or near bankruptcy. Expertise in bankruptcy law, credit analysis. Higher risk, potentially very high returns.
• Activist investing: Take a significant stake in a company, push for changes (new management, strategic alternatives, financial restructuring). Elliott Management, Carl Icahn.

Fixed Income Arbitrage: Exploiting relative value differences in bond markets. Classic strategy that blew up spectacularly with LTCM — the Black Swan of 1998. Even "risk-free" arbitrage can fail when leverage is extreme and liquidity dries up.

Quantitative: Renaissance, Two Sigma, DE Shaw, AQR. Use statistical models, machine learning, and algorithmic execution. Renaissance's Medallion Fund returned 66% annually for 30 years — the greatest track record in investing history.

HOW INSTITUTIONS BUILD POSITIONS WITHOUT DETECTION:
Phase 1 — Research and hypothesis: Internal research, sometimes years of analysis before a trade.
Phase 2 — Quiet accumulation: Small purchases distributed over weeks or months, across multiple brokers, dark pools, and international venues to avoid pattern detection.
Phase 3 — Options positioning: Using options to gain additional exposure without appearing in equity ownership filings (below the 5% disclosure threshold for months longer).
Phase 4 — Catalyst identification: Identifying the catalyst that will move price to fair value — earnings, M&A, regulatory change, management change.
Phase 5 — Full positioning: Once the catalyst is approaching, completing the position. The final buying creates the breakout pattern technical traders interpret as a "signal."
Phase 6 — Distribution: Selling into strength as price rises after the catalyst. Again in phases, across dark pools and lit markets, with options to hedge existing exposure.`},{t:"Market Manipulation — What's Real and What Institutions Actually Do",body:`Understanding the range of market activities — from legal institutional operations to outright illegal manipulation — is essential for interpreting market behavior.

LEGAL INSTITUTIONAL ACTIVITIES THAT LOOK LIKE "MANIPULATION":
Stop hunting (legal): Large traders executing orders in ways that trigger retail stop losses, providing the liquidity they need. This is not technically illegal — you're not making false representations, just trading large enough to move prices.

Running the book: Market makers adjusting their quotes based on inventory. If a market maker is long 100,000 shares, they lower their ask to encourage selling and raise their bid to discourage more buying. This "book running" moves prices to manage their risk. Not manipulation — it's normal market making.

Spoofing vs legitimate cancellation: Placing large orders to influence perception, then cancelling before execution, IS illegal (spoofing). Placing large limit orders and cancelling when the market moves is legitimate. The intent distinguishes them — proof of intent is the legal challenge.

Wash trading in crypto: Trading with yourself to generate artificial volume. Widely estimated to be prevalent on smaller crypto exchanges. Illegal in regulated markets.

ILLEGAL MARKET MANIPULATION:
Spoofing: Placing orders with intent to cancel, solely to create false price/volume impressions. Navinder Sarao, working from his parents' basement in London, was linked to contributing to the 2010 Flash Crash through spoofing ES futures. Convicted, sentenced.

Pump and dump: Coordinating to buy a thinly traded stock, promote it aggressively (social media, newsletters, cold calls), sell into the resulting buying. Classic small-cap fraud. Also increasingly seen in crypto and meme stocks.

Insider trading: Trading on material, non-public information. Classic example: learning about an acquisition before announcement and buying call options. Illegal, aggressively prosecuted by the SEC and FBI.

Front-running: A broker using advance knowledge of a client's pending large order to trade ahead of it for their own account. Illegal and a fundamental breach of fiduciary duty.

SHORT AND DISTORT: The mirror of pump and dump. Short a stock, then spread negative (often false) information to drive the price down. Legal version: publish legitimate research while disclosing short position. Illegal version: spread false information.

THE SHORT SELLER'S ROLE (LEGAL):
Short sellers perform a valuable function — their research uncovers fraud, overvaluation, and financial irregularities that other market participants miss. Hindenburg Research and Muddy Waters have exposed multiple fraudulent companies. Their model: build a short position, publish research, profit from the stock decline as the market digests their findings. This is legal and actually beneficial for market efficiency.

GAMMA SQUEEZE AND SHORT SQUEEZE MECHANICS:
Short squeeze: When heavily shorted stocks rise, short sellers face unlimited loss (the stock can rise to any level). They must buy shares to close their short — this buying pushes the price higher, forcing more short covering. GameStop January 2021: retail buyers coordinated via Reddit (WSB), recognized extreme short interest (140% of float), bought call options, forcing dealers to buy shares (delta hedging), which reduced short sellers, creating a 1,500% rise in days.

Gamma squeeze: When market makers sell call options, they delta-hedge by buying the underlying stock. If many OTM calls are bought (often coordinated retail activity), as the stock rises toward those strikes, delta increases, forcing market makers to buy more shares. This buying further drives the price up, triggering more delta hedging — a reflexive feedback loop. GameStop combined short squeeze + gamma squeeze.`}],ch13:[{t:"Professional Trading Technology and Infrastructure",body:`The technological infrastructure behind professional trading is rarely discussed in retail trading education but significantly impacts execution quality and competitive positioning.

TRADING TERMINALS AND PLATFORMS:
Bloomberg Terminal: The gold standard ($25,000+/year). Real-time data on every financial instrument globally, news, analytics, messaging (IB chat), fixed income pricing, economic data. Every institutional trader uses it.

Reuters Eikon (Refinitiv): Bloomberg's main competitor. Stronger in certain forex and commodities data.

Retail platforms: TradingView (charting), Interactive Brokers (execution + API), Thinkorswim (options), NinjaTrader (futures), MetaTrader (forex). Each has strengths.

LATENCY AND EXECUTION SPEED:
For institutional and HFT traders, latency (delay) is measured in microseconds (millionths of a second). Co-location — placing servers in the same data center as the exchange — reduces round-trip latency from tens of milliseconds to under 1ms.

For retail traders, latency matters less because you're not competing on microseconds. What matters: reliable order routing, not using platforms that add significant delays, choosing brokers with good execution quality.

VPS (Virtual Private Server) for retail: Hosting a trading algorithm on a server in a data center rather than your home computer. Benefits: 24/7 operation, lower latency than home internet, redundancy. Relevant for algorithmic traders, less so for manual traders.

API TRADING:
APIs (Application Programming Interfaces) allow programs to interact with brokers to place orders, retrieve data, and manage positions. Every serious algorithmic trader uses API-based execution. Popular broker APIs: Interactive Brokers TWS API, Alpaca (free), OANDA REST API (forex), Binance API (crypto).

Python with IBKR API or Alpaca allows building completely automated trading systems from scratch. Strategy logic → signal generation → risk checks → order placement, all automated.

SMART ORDER ROUTING:
When routing a large order, where should it go? Different venues have different liquidity and prices at any moment. Smart Order Routing (SOR) systems dynamically split and route orders to the venues with the best prices and most liquidity, minimizing execution cost.

ARTIFICIAL INTELLIGENCE IN PRODUCTION TRADING:
Current uses in production (not theoretical):
NLP/LLM for news: Real-time sentiment scoring of news feeds. When a Fed speech or earnings release hits, NLP models score sentiment in milliseconds and feed trading signals to execution systems.

Reinforcement learning for execution: RL agents optimizing order execution to minimize market impact. Goldman Sachs, JPMorgan have deployed RL-based execution.

ML for alpha signals: Gradient boosting, random forests, and neural networks generating return predictions from alternative data, fundamental data, and technical features. Used widely across major quant funds.

Anomaly detection: ML models flagging unusual order patterns that might indicate market abuse or operational risk.

What AI doesn't do: No AI system reliably predicts market direction with significantly above-chance accuracy at meaningful timescales. The "AI trading bot that never loses" is marketing fiction. Real AI applications in trading are narrow, specific, and incremental — not magic.`}],ch14:[{t:"George Soros — Reflexivity and Breaking the Bank of England",body:`George Soros is perhaps the most famous macro trader in history. His career spanning 50+ years, generating extraordinary returns through a combination of theoretical framework, information advantage, and the courage to size up when conviction is high.

THE SOROS FRAMEWORK — REFLEXIVITY:
Soros developed his theory of reflexivity as his primary intellectual tool. Unlike EMH which assumes prices converge to fundamental value, Soros recognizes that:
1. Market participants operate with imperfect and biased understanding
2. Their actions based on this imperfect understanding affect the fundamentals they're trying to assess
3. Prices and fundamentals influence each other in a reflexive feedback loop

This means: boom-bust cycles are not aberrations — they're the normal mode of market behavior when feedback loops exist. Identifying reflexive loops early, positioning appropriately, then exiting before the inevitable bust is Soros's alpha.

BREAKING THE BANK OF ENGLAND (1992):
The trade: The UK had entered the European Exchange Rate Mechanism (ERM), committing to maintain the pound within tight bands against the Deutsche Mark (DM). The pound was pegged at 2.95 DM with allowed variation of ±6%.

The problem: Germany had reunified in 1990, requiring massive fiscal spending. The Bundesbank raised interest rates dramatically to control resulting inflation. The UK was in recession and needed low interest rates, but the ERM required matching German rates to maintain the pound peg.

Soros's analysis: The fundamental mismatch between UK economic needs (low rates) and ERM requirements (high rates) was unsustainable. The UK would either be forced to devalue or exit the ERM. Once speculative pressure built, the feedback loop would be unstoppable — selling would force the Bank of England to spend reserves defending the peg, depleting reserves, making devaluation more certain, attracting more selling.

The execution: Quantum Fund built an approximately $10 billion short position in pound sterling — an enormous position at the time. When the attack intensified on September 16, 1992 (Black Wednesday), the Bank of England spent $27 billion in reserves trying to defend the peg. The UK raised interest rates from 10% to 12% to 15% in a single day in desperate defense. It didn't work. By evening, the UK announced it was leaving the ERM. The pound devalued dramatically.

Quantum Fund's profit: Approximately $1 billion in a single day. Soros made an estimated $1.8-2 billion on the total trade.

The lesson: Soros didn't create the vulnerability — the fundamental imbalance existed. He identified it, constructed a logical framework for why it would resolve in a specific direction, sized the position to match his conviction, and was patient. The courage to size up on high-conviction macro analysis is what separated this trade from an interesting observation.`},{t:"Jim Simons and Renaissance Technologies — Quantitative Supremacy",body:`Jim Simons is the most successful investor in modern financial history by measurable returns. His Medallion Fund returned approximately 66% annualized BEFORE fees (39% after fees) from 1988-2018. This is not a rounding error — it's so far above any competing track record as to be almost incomprehensible.

THE RENAISSANCE STORY:
Simons was a mathematician and code-breaker (Cold War NSA), not a trader. He founded Renaissance in 1978, initially using simple trend-following models. The real breakthrough came when he hired mathematicians, physicists, statisticians, linguists, and computer scientists — intentionally avoiding hiring people with financial industry experience.

The core insight: Financial markets, like any physical system, contain subtle statistical patterns that can be detected with sufficient mathematical rigor and computational power. These patterns don't have to be "intuitive" or "fundamental" — they just have to be real, persistent, and exploitable before other models discover and arbitrage them away.

HOW MEDALLION ACTUALLY WORKS (EDUCATED INFERENCE — IT'S HIGHLY SECRET):
Known facts: Medallion trades at very high frequency relative to typical hedge funds. It holds thousands of positions simultaneously. It has historically been long and short in nearly equal measure. It focuses on liquid, large-scale markets. It uses enormous leverage (some reports suggest 12-17x on notional positions). The fund is closed to outside investors — only current and former Renaissance employees can invest.

The approach: Statistical signal generation from enormous datasets. Patterns in price, volume, options flow, macroeconomic data, and alternative data that individually have tiny predictive power but in combination — across thousands of simultaneously-held positions — produce extraordinarily consistent returns.

Critical difference from traditional quant: Most quant funds look for factors that make intuitive sense and then test them. Medallion searches exhaustively for ANY predictive pattern, regardless of whether it makes intuitive sense. The pattern is valid if it persists out-of-sample with statistical rigor — the explanation for why it exists is secondary.

THE LESSONS FOR EVERYONE ELSE:
1. Hiring domain experts from outside finance can generate competitive advantage. Finance "conventional wisdom" is also conventional limitation.
2. Data quality and quantity matter enormously. Renaissance's edge is partly in having more and better data, processed more rigorously.
3. Position sizing discipline: Even with extraordinary edge, they size positions to manage drawdown risk. The 66% annual return comes with significant daily volatility — but carefully managed.
4. Diversification at scale: Thousands of uncorrelated small bets aggregate to smooth, consistent returns.

What you can't replicate: Medallion's advantages (data, talent, technology, scale) are not available to retail traders. What you CAN learn: the value of systematic thinking, out-of-sample testing, and not relying on "it feels right" in strategy development.`},{t:"Jesse Livermore, Paul Tudor Jones, and Ray Dalio",body:`Three more traders whose approaches offer distinct, valuable frameworks.

JESSE LIVERMORE — THE ORIGINAL SPECULATOR:
Livermore (1877-1940) is the archetypal speculator. Starting as a "bucket shop" tape reader as a teenager, he eventually became the most famous trader of his era, making and losing several fortunes.

His insights (from Reminiscences of a Stock Operator, ghostwritten by Edwin Lefèvre):
"The market is never wrong — opinions are often wrong." Markets are the final arbiter. Rationalize all you want; price tells the truth.
"It never was my thinking that made me big money. It was always my sitting." The most profitable position is often doing nothing after identifying a big trend and waiting for it to fully develop. Overtrading is the enemy of large profits.
"Big money is made in big swings." Livermore didn't trade tiny moves. He waited for major fundamental dislocations and positioned for the full move. He shorted the 1929 crash, reportedly making $100 million (billions in today's dollars) as the market collapsed.
Lessons from his failures: Livermore went bankrupt multiple times — primarily from violating his own rules (taking tips from others, averaging down into losers, trading against the trend). His eventual suicide in 1940 is a reminder that even genius-level market insight doesn't confer emotional immunity.

PAUL TUDOR JONES — MACRO DISCRETIONARY MASTERY:
Jones predicted and profited from the 1987 crash, tripling his money as the market fell 22% in a single day. He's maintained strong returns across 40 years through a combination of macro analysis, technical analysis, and aggressive risk management.

Key principles:
"The most important rule of trading is to play great defense, not great offense." PTJ obsesses over downside before upside. Every new trade starts with "how much can I lose?" not "how much can I make?"
5:1 reward-to-risk: Jones requires at least 5:1 expected return to risk on any position. This allows him to be wrong the majority of the time and still make money.
Pivotal price points: Jones focuses intensely on key technical levels as decision points. Once broken, they signal major moves. His Elliott Wave analysis of 1987 gave him the framework for the crash timing.
Pivotal moments in careers: Jones nearly blew up in 1988 after overconfidence from 1987 success. The experience shaped his subsequent conservatism.

RAY DALIO — THE MACHINE AND ALL-WEATHER:
Dalio founded Bridgewater Associates, which grew to become the world's largest hedge fund (~$150B). His approach is two-pronged.

The Holy Grail of Investing: Combining 15-20 uncorrelated return streams produces dramatic risk reduction without reducing returns. Each stream has Sharpe ~0.5, but 15 uncorrelated 0.5-Sharpe strategies combined produce a portfolio Sharpe of ~2.0. This is the mathematical magic of diversification.

The All-Weather Portfolio: Designed to perform adequately in all economic environments. Based on risk parity — allocating equal risk (not equal dollars) to:
• Growth rising (long equities, commodities)
• Growth falling (long bonds)
• Inflation rising (long commodities, inflation-linked bonds)
• Inflation falling (long long-term bonds, equities)
The actual weights: ~30% stocks, ~40% long-term bonds, ~15% intermediate bonds, ~7.5% gold, ~7.5% commodities.

Principles: Dalio's published "Principles" describe his framework for radical transparency, idea meritocracy, and treating the economy and markets as machines that can be understood. His "Economic Machine" video (YouTube, 30 minutes) is required viewing.`}],ch15:[{t:"Building a Professional Trading System from Scratch",body:`Most retail traders have opinions, setups they like, and a rough process. Professionals have systems — documented, tested, and operated with discipline. Here is how to build one properly.

STAGE 1 — SELF-ASSESSMENT AND CONTEXT:
Before building a strategy, answer honestly:
• What is your time availability? (Day trader needs 6-8 hours/day; swing trader needs 1 hour/evening)
• What is your starting capital? (Insufficient capital is a constraint on viable strategies)
• What is your risk tolerance? (How much drawdown can you psychologically sustain?)
• What is your relevant skill/edge base? (Technical backgrounds suit quant; industry experience creates fundamental edge)
• What is your trading goal? (Income now? Long-term wealth? Skill development?)

STAGE 2 — STRATEGY SELECTION AND DOCUMENTATION:
Choose a strategy based on your constraints. Document it completely:

Entry Rules: Specific, unambiguous criteria for entering a trade. Not "when RSI is oversold" but "when RSI(14) closes below 30 on the daily chart, AND price closes above the 50 EMA, AND a bullish engulfing candle forms, then I enter long."

Exit Rules — Two types:
Stop Loss: Specific maximum loss per trade. Where price would prove your thesis wrong. Must be defined BEFORE entry.
Take Profit: Either a specific target price or a trailing exit mechanism (close below 20 EMA, etc.)

Position Sizing Rule: How many shares/contracts per trade? Formula: Risk Amount / (Entry - Stop Loss Price) = units.

Universe: What instruments do you trade? Defined list, not "whatever I'm interested in today."

Timeframe: Primary chart for analysis and execution.

Filters: What market conditions make this strategy valid? (Trend or range market? High or low VIX? Specific sector?)

STAGE 3 — BACKTESTING:
Backtest the complete rules, not a loose approximation. Include all realistic transaction costs. Use proper data (survivorship-bias-free for stocks). Document every trade.

Evaluate:
• Total trades (minimum 50, ideally 200+ for statistical significance)
• Win rate, average win, average loss, expectancy
• Maximum drawdown
• Sharpe and Calmar ratios
• Performance in different market conditions (bull, bear, volatile, calm)

STAGE 4 — PAPER TRADING:
Trade the strategy in real time with paper (fake) money for 2-3 months. Verify:
• Can you execute the rules as defined?
• Does real-time performance roughly match backtested expectations?
• Are there implementation issues not apparent in backtesting?

STAGE 5 — SMALL LIVE ACCOUNT:
Begin with the smallest amount meaningful to you — but real money. The psychological difference between paper and real trading is enormous. Real losses cause real pain; the discipline required is only learned under real conditions.

Trade for 3-6 months at small size. Evaluate versus backtested expectations. Only increase size after consistent profitable performance.

STAGE 6 — JOURNALING AND REVIEW:
A professional trading journal records:
• Entry details: Date, instrument, price, size, setup name, reason for entry
• Exit details: Date, price, outcome (P&L in $ and R multiples)
• Emotional state at entry and exit
• Execution quality (did you follow your rules?)
• Post-trade analysis: Was the setup valid? Was entry timing optimal? What would you do differently?

Weekly and monthly reviews: Performance metrics, rule compliance rate, patterns in winners vs. losers. Where is performance leaking?

The journal is how you convert experience into learning. Trading without a journal is flying blind. Most professionals review hundreds of trades monthly to identify edges in their own behavior.

COMMON MISTAKES THAT DESTROY TRADING ACCOUNTS:
1. No written, tested strategy — trading on impulse and intuition
2. Stop losses set based on money tolerance, not market structure
3. Revenge trading after losses — emotionally compromised decisions
4. Overtrading — forcing setups that aren't there
5. Averaging down into losers — "it'll come back"
6. Ignoring transaction costs in strategy assessment
7. Switching strategies during normal drawdown periods — abandoning edge before it plays out
8. Not accounting for taxes — short-term gains taxed as income in most jurisdictions
9. Overconfidence after initial success — increasing size before statistical validation
10. Underestimating the time to develop genuine skill — expecting proficiency in weeks or months

The honest timeline: Most traders who eventually succeed take 2-5 years before consistent profitability. This is not a quick get-rich path. Those who treat it as a craft to be developed over years — who stay small until proven, who journal obsessively, who study continuously — give themselves a real chance.`},{t:"Discipline, Mindset, and the Professional Trader's Edge",body:`The final layer — and arguably the most important — is not strategy or analysis but the human system operating the strategy. Markets are designed to exploit human psychology. The professional trader's edge is often their ability to override their own instincts.

THE PROFESSIONAL MINDSET:
Probabilistic thinking: Every trade is one trial in a long sequence of trials. The outcome of any single trade is nearly random — even the best setups fail 30-40% of the time. The professional evaluates performance over 50-100+ trades, never over single trades. They don't adjust their system because of one loss or one win.

Process over outcome: A losing trade taken per the rules is a good trade. A winning trade taken in violation of the rules is a bad trade. Outcomes in the short term contain enormous noise. Only process, applied consistently over time, generates reliable signal.

Objectivity: Professionals maintain no attachment to positions — they are not "bullish" or "bearish" in their identity. They have a current trading hypothesis based on current data. When data changes, the hypothesis changes. Pride in prior position leads to holding losers.

Emotional neutrality in the face of P&L: Professional traders describe a state of almost bored neutrality during the trading day — not excitement on wins, not anguish on losses. The goal is calm execution of a defined process. This neutrality is learned over years of exposure, not innate.

DISCIPLINE SYSTEMS:
Rules aren't enough — you need systems that make following rules easy and violating them hard.

Pre-market checklist: Every day, before markets open. What is my bias? What are today's key levels? What setups am I looking for? What is my maximum loss today?

Daily loss limit: Hard stop on losses per day. When hit, all platforms closed, no more trading. No exceptions.

Trade-by-trade review: After every trade, 2-minute review. Did I follow my rules? If yes, good trade regardless of outcome. If no, note the violation.

Accountability partner: Share your trades with another trader who will hold you accountable to your rules. External accountability is dramatically more effective than self-regulation.

Scheduled breaks: After 2-3 consecutive losers, mandatory 30-minute break. After a maximum-loss day, no trading next morning until after first hour (avoid revenge-opening). After a losing week, no trading Monday morning.

ADVANCED PERFORMANCE ANALYTICS:
Track your strategy performance broken down by:
• Time of day (are you better in the morning? After lunch?)
• Day of week (worse on Mondays after weekend?)
• Market regime (trend vs. range?)
• Setup type (which setups are actually profitable?)
• Emotional state (how does stress affect performance?)

Many traders discover that 80% of their profits come from 20% of their setups — and that many of the other 80% of setups are net negative. Eliminating the bad setups (which feels like "missing opportunities") dramatically improves performance.

CONTINUOUS EDUCATION:
The market evolves. Strategies that worked in 2015 may not work in 2025. Successful traders continuously:
• Read widely (academic papers, practitioner books, economic analysis)
• Network with other professionals (ideas, accountability, perspective)
• Review and update strategy assumptions quarterly
• Maintain humility about what they don't know

The Dunning-Kruger progression in trading: Beginner confidence → humbling loss experience → deep doubt about ability → grinding study and paper trading → first stable profitable period → measured confidence based on actual track record. Most who quit, quit in the "deep doubt" phase, just before the skills they've developed would start paying off.

The most honest thing to say about trading is this: it is one of the hardest professional pursuits in the world, with almost no guaranteed path to success. But for those who approach it with intellectual rigor, emotional discipline, continuous learning, and genuine respect for risk — it is also one of the few pursuits where the quality of your thinking can directly translate to financial independence, with no ceiling.`}]};function Nf(){const[e,t]=kt.useState("ch1"),[n,r]=kt.useState(null),[i,o]=kt.useState(!1),a=kt.useRef(null),s=yt.find(h=>h.id===e),l=Pf[e]||[],c=h=>{t(h),r(null),o(!1),a.current&&(a.current.scrollTop=0)};return b.jsxs("div",{style:{fontFamily:"'Georgia', 'Times New Roman', serif",background:"#06080d",minHeight:"100vh",color:"#ccc8bb",display:"flex",flexDirection:"column"},children:[b.jsxs("div",{style:{background:"rgba(8,12,20,0.97)",borderBottom:"1px solid #1a2235",padding:"0 1.25rem",height:52,display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(10px)"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[b.jsx("button",{onClick:()=>o(h=>!h),style:{background:"none",border:"none",cursor:"pointer",color:"#5a7fa8",fontSize:18,padding:4,display:"flex",alignItems:"center"},children:"☰"}),b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:10,letterSpacing:3,color:"#3d6a96",fontFamily:"monospace",textTransform:"uppercase"},children:"Markets Mastery"}),b.jsx("div",{style:{fontSize:13,color:"#8fa8c8",fontWeight:600,lineHeight:1.2},children:s==null?void 0:s.label})]})]}),b.jsx("div",{style:{display:"flex",gap:4},children:yt.map(h=>b.jsx("div",{onClick:()=>c(h.id),style:{width:7,height:7,borderRadius:"50%",background:e===h.id?h.col:"#1a2535",cursor:"pointer",transition:"background 0.2s"}},h.id))})]}),b.jsxs("div",{style:{display:"flex",flex:1,position:"relative",overflow:"hidden"},children:[i&&b.jsx("div",{onClick:()=>o(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:49}}),b.jsx("div",{style:{position:"fixed",left:i?0:"-300px",top:52,bottom:0,width:280,background:"#080c14",borderRight:"1px solid #1a2235",zIndex:50,overflowY:"auto",transition:"left 0.25s ease",padding:"1rem 0"},children:yt.map(h=>b.jsx("div",{onClick:()=>c(h.id),style:{padding:"0.7rem 1.25rem",cursor:"pointer",background:e===h.id?`${h.col}14`:"transparent",borderLeft:`3px solid ${e===h.id?h.col:"transparent"}`,transition:"all 0.15s"},children:b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[b.jsx("span",{style:{fontSize:10,color:h.col,fontFamily:"monospace",fontWeight:700},children:h.num}),b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:13,color:e===h.id?"#e0d8c8":"#8a9aaa",fontWeight:600},children:h.label}),b.jsx("div",{style:{fontSize:10,color:"#4a6078",fontFamily:"monospace"},children:h.level})]})]})},h.id))}),b.jsxs("div",{ref:a,style:{flex:1,overflowY:"auto",padding:"2rem 1.25rem 4rem",maxWidth:860,margin:"0 auto",width:"100%"},children:[b.jsxs("div",{style:{marginBottom:"2rem"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[b.jsx("span",{style:{fontSize:11,fontFamily:"monospace",color:s==null?void 0:s.col,background:`${s==null?void 0:s.col}18`,padding:"2px 8px",borderRadius:4,letterSpacing:2,textTransform:"uppercase"},children:s==null?void 0:s.level}),b.jsxs("span",{style:{fontSize:11,color:"#2e4060",fontFamily:"monospace"},children:["Chapter ",s==null?void 0:s.num," of ",yt.length]})]}),b.jsx("h1",{style:{margin:0,fontSize:"clamp(1.5rem, 4vw, 2.2rem)",color:"#e8e2d4",fontWeight:700,lineHeight:1.2},children:s==null?void 0:s.label}),b.jsxs("p",{style:{margin:"0.4rem 0 0",color:"#5a7a9a",fontSize:14,fontFamily:"monospace"},children:[s==null?void 0:s.sub," · ",l.length," topics"]})]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:l.map((h,m)=>{const p=n===m;return b.jsxs("div",{style:{border:`1px solid ${p?`${s==null?void 0:s.col}40`:"#131d2b"}`,borderRadius:10,background:p?`${s==null?void 0:s.col}08`:"#0a0f1a",overflow:"hidden",transition:"all 0.2s"},children:[b.jsxs("button",{onClick:()=>r(p?null:m),style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"1rem 1.25rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",gap:"1rem"},children:[b.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-start"},children:[b.jsx("span",{style:{fontSize:11,fontFamily:"monospace",color:s==null?void 0:s.col,opacity:.7,paddingTop:2,flexShrink:0},children:String(m+1).padStart(2,"0")}),b.jsx("span",{style:{fontSize:"clamp(0.9rem, 2vw, 1.05rem)",color:p?"#e8e2d4":"#b0a898",fontWeight:600,lineHeight:1.3},children:h.t})]}),b.jsx("span",{style:{fontSize:18,color:s==null?void 0:s.col,opacity:.8,flexShrink:0,transform:p?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.2s",lineHeight:1},children:"+"})]}),p&&b.jsx("div",{style:{padding:"0 1.25rem 1.25rem",borderTop:`1px solid ${s==null?void 0:s.col}20`},children:h.body.split(`

`).map((v,w)=>{const k=v.match(/^[A-Z][A-Z\s\/\(\)]+:/),O=v.split(/(\*\*[^*]+\*\*)/g);return b.jsx("p",{style:{margin:w===0?"1rem 0 0":"0.9rem 0 0",lineHeight:1.85,fontSize:"clamp(0.85rem, 1.5vw, 0.95rem)",color:k?"#a8c4e0":"#a8a090",fontFamily:k?"monospace":"Georgia, serif",letterSpacing:k?.3:0},children:O.map((d,u)=>d.startsWith("**")&&d.endsWith("**")?b.jsx("strong",{style:{color:"#c8c0a8",fontWeight:700},children:d.slice(2,-2)},u):d)},w)})})]},m)})}),b.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"2.5rem",borderTop:"1px solid #131d2b",paddingTop:"1.5rem"},children:(()=>{const h=yt.findIndex(v=>v.id===e),m=yt[h-1],p=yt[h+1];return b.jsxs(b.Fragment,{children:[m?b.jsxs("button",{onClick:()=>c(m.id),style:{background:"#0d1625",border:"1px solid #1a2a3a",color:"#8a9ab0",padding:"0.5rem 1rem",borderRadius:6,cursor:"pointer",fontSize:13,fontFamily:"monospace"},children:["← ",m.label]}):b.jsx("div",{}),p?b.jsxs("button",{onClick:()=>c(p.id),style:{background:`${s==null?void 0:s.col}18`,border:`1px solid ${s==null?void 0:s.col}40`,color:s==null?void 0:s.col,padding:"0.5rem 1rem",borderRadius:6,cursor:"pointer",fontSize:13,fontFamily:"monospace"},children:[p.label," →"]}):b.jsx("div",{})]})})()})]})]})]})}tc(document.getElementById("root")).render(b.jsx(kt.StrictMode,{children:b.jsx(Nf,{})}));
