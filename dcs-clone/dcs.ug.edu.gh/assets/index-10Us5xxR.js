var gv=e=>{throw TypeError(e)};var WC=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ch=(e,t,n)=>t.has(e)||gv("Cannot "+n);var j=(e,t,n)=>(Ch(e,t,"read from private field"),n?n.call(e):t.get(e)),me=(e,t,n)=>t.has(e)?gv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),re=(e,t,n,r)=>(Ch(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Pe=(e,t,n)=>(Ch(e,t,"access private method"),n);var Hc=(e,t,n,r)=>({set _(i){re(e,t,i,n)},get _(){return j(e,t,r)}});var vQ=WC((Sn,Cn)=>{function Qg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var IE={exports:{}},Qd={},PE={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=Symbol.for("react.element"),GC=Symbol.for("react.portal"),qC=Symbol.for("react.fragment"),YC=Symbol.for("react.strict_mode"),KC=Symbol.for("react.profiler"),XC=Symbol.for("react.provider"),JC=Symbol.for("react.context"),ZC=Symbol.for("react.forward_ref"),eT=Symbol.for("react.suspense"),tT=Symbol.for("react.memo"),nT=Symbol.for("react.lazy"),vv=Symbol.iterator;function rT(e){return e===null||typeof e!="object"?null:(e=vv&&e[vv]||e["@@iterator"],typeof e=="function"?e:null)}var _E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},RE=Object.assign,OE={};function Ss(e,t,n){this.props=e,this.context=t,this.refs=OE,this.updater=n||_E}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ss.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jE(){}jE.prototype=Ss.prototype;function Wg(e,t,n){this.props=e,this.context=t,this.refs=OE,this.updater=n||_E}var Gg=Wg.prototype=new jE;Gg.constructor=Wg;RE(Gg,Ss.prototype);Gg.isPureReactComponent=!0;var yv=Array.isArray,NE=Object.prototype.hasOwnProperty,qg={current:null},kE={key:!0,ref:!0,__self:!0,__source:!0};function $E(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)NE.call(t,r)&&!kE.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:xc,type:e,key:o,ref:a,props:i,_owner:qg.current}}function iT(e,t){return{$$typeof:xc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yg(e){return typeof e=="object"&&e!==null&&e.$$typeof===xc}function oT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Av=/\/+/g;function Th(e,t){return typeof e=="object"&&e!==null&&e.key!=null?oT(""+e.key):t.toString(36)}function _u(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xc:case GC:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Th(a,0):r,yv(i)?(n="",e!=null&&(n=e.replace(Av,"$&/")+"/"),_u(i,t,n,"",function(u){return u})):i!=null&&(Yg(i)&&(i=iT(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Av,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",yv(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Th(o,s);a+=_u(o,t,n,l,i)}else if(l=rT(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Th(o,s++),a+=_u(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Qc(e,t,n){if(e==null)return e;var r=[],i=0;return _u(e,r,"","",function(o){return t.call(n,o,i++)}),r}function aT(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Zt={current:null},Ru={transition:null},sT={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ru,ReactCurrentOwner:qg};function DE(){throw Error("act(...) is not supported in production builds of React.")}Se.Children={map:Qc,forEach:function(e,t,n){Qc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qc(e,function(){t++}),t},toArray:function(e){return Qc(e,function(t){return t})||[]},only:function(e){if(!Yg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=Ss;Se.Fragment=qC;Se.Profiler=KC;Se.PureComponent=Wg;Se.StrictMode=YC;Se.Suspense=eT;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;Se.act=DE;Se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=RE({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=qg.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)NE.call(t,l)&&!kE.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:xc,type:e.type,key:i,ref:o,props:r,_owner:a}};Se.createContext=function(e){return e={$$typeof:JC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:XC,_context:e},e.Consumer=e};Se.createElement=$E;Se.createFactory=function(e){var t=$E.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:ZC,render:e}};Se.isValidElement=Yg;Se.lazy=function(e){return{$$typeof:nT,_payload:{_status:-1,_result:e},_init:aT}};Se.memo=function(e,t){return{$$typeof:tT,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=Ru.transition;Ru.transition={};try{e()}finally{Ru.transition=t}};Se.unstable_act=DE;Se.useCallback=function(e,t){return Zt.current.useCallback(e,t)};Se.useContext=function(e){return Zt.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return Zt.current.useDeferredValue(e)};Se.useEffect=function(e,t){return Zt.current.useEffect(e,t)};Se.useId=function(){return Zt.current.useId()};Se.useImperativeHandle=function(e,t,n){return Zt.current.useImperativeHandle(e,t,n)};Se.useInsertionEffect=function(e,t){return Zt.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return Zt.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return Zt.current.useMemo(e,t)};Se.useReducer=function(e,t,n){return Zt.current.useReducer(e,t,n)};Se.useRef=function(e){return Zt.current.useRef(e)};Se.useState=function(e){return Zt.current.useState(e)};Se.useSyncExternalStore=function(e,t,n){return Zt.current.useSyncExternalStore(e,t,n)};Se.useTransition=function(){return Zt.current.useTransition()};Se.version="18.3.1";PE.exports=Se;var m=PE.exports;const K=Pn(m),Wd=Qg({__proto__:null,default:K},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lT=m,cT=Symbol.for("react.element"),uT=Symbol.for("react.fragment"),dT=Object.prototype.hasOwnProperty,fT=lT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hT={key:!0,ref:!0,__self:!0,__source:!0};function ME(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)dT.call(t,r)&&!hT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cT,type:e,key:o,ref:a,props:i,_owner:fT.current}}Qd.Fragment=uT;Qd.jsx=ME;Qd.jsxs=ME;IE.exports=Qd;var c=IE.exports,Mp={},LE={exports:{}},_n={},FE={exports:{}},UE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,H){var J=D.length;D.push(H);e:for(;0<J;){var ae=J-1>>>1,se=D[ae];if(0<i(se,H))D[ae]=H,D[J]=se,J=ae;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],J=D.pop();if(J!==H){D[0]=J;e:for(var ae=0,se=D.length,Be=se>>>1;ae<Be;){var Te=2*(ae+1)-1,ze=D[Te],Ge=Te+1,lt=D[Ge];if(0>i(ze,J))Ge<se&&0>i(lt,ze)?(D[ae]=lt,D[Ge]=J,ae=Ge):(D[ae]=ze,D[Te]=J,ae=Te);else if(Ge<se&&0>i(lt,J))D[ae]=lt,D[Ge]=J,ae=Ge;else break e}}return H}function i(D,H){var J=D.sortIndex-H.sortIndex;return J!==0?J:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,h=null,f=3,p=!1,v=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=D)r(u),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(u)}}function x(D){if(g=!1,y(D),!v)if(n(l)!==null)v=!0,z(w);else{var H=n(u);H!==null&&Y(x,H.startTime-D)}}function w(D,H){v=!1,g&&(g=!1,E(T),T=-1),p=!0;var J=f;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||D&&!M());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var se=ae(h.expirationTime<=H);H=e.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&r(l),y(H)}else r(l);h=n(l)}if(h!==null)var Be=!0;else{var Te=n(u);Te!==null&&Y(x,Te.startTime-H),Be=!1}return Be}finally{h=null,f=J,p=!1}}var C=!1,b=null,T=-1,_=5,$=-1;function M(){return!(e.unstable_now()-$<_)}function R(){if(b!==null){var D=e.unstable_now();$=D;var H=!0;try{H=b(!0,D)}finally{H?U():(C=!1,b=null)}}else C=!1}var U;if(typeof A=="function")U=function(){A(R)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,k=I.port2;I.port1.onmessage=R,U=function(){k.postMessage(null)}}else U=function(){S(R,0)};function z(D){b=D,C||(C=!0,U())}function Y(D,H){T=S(function(){D(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,z(w))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var J=f;f=H;try{return D()}finally{f=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=f;f=D;try{return H()}finally{f=J}},e.unstable_scheduleCallback=function(D,H,J){var ae=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,D={id:d++,callback:H,priorityLevel:D,startTime:J,expirationTime:se,sortIndex:-1},J>ae?(D.sortIndex=J,t(u,D),n(l)===null&&D===n(u)&&(g?(E(T),T=-1):g=!0,Y(x,J-ae))):(D.sortIndex=se,t(l,D),v||p||(v=!0,z(w))),D},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(D){var H=f;return function(){var J=f;f=H;try{return D.apply(this,arguments)}finally{f=J}}}})(UE);FE.exports=UE;var pT=FE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mT=m,In=pT;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BE=new Set,Ul={};function Go(e,t){os(e,t),os(e+"Capture",t)}function os(e,t){for(Ul[e]=t,e=0;e<t.length;e++)BE.add(t[e])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,gT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ev={},bv={};function vT(e){return Lp.call(bv,e)?!0:Lp.call(Ev,e)?!1:gT.test(e)?bv[e]=!0:(Ev[e]=!0,!1)}function yT(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function AT(e,t,n,r){if(t===null||typeof t>"u"||yT(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function en(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Mt[e]=new en(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Mt[t]=new en(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Mt[e]=new en(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Mt[e]=new en(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Mt[e]=new en(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Mt[e]=new en(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Mt[e]=new en(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Mt[e]=new en(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Mt[e]=new en(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kg=/[\-:]([a-z])/g;function Xg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kg,Xg);Mt[t]=new en(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kg,Xg);Mt[t]=new en(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kg,Xg);Mt[t]=new en(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Mt[e]=new en(e,1,!1,e.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Mt[e]=new en(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jg(e,t,n,r){var i=Mt.hasOwnProperty(t)?Mt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(AT(t,n,i,r)&&(n=null),r||i===null?vT(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ri=mT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wc=Symbol.for("react.element"),Aa=Symbol.for("react.portal"),Ea=Symbol.for("react.fragment"),Zg=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),VE=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),Up=Symbol.for("react.suspense"),Bp=Symbol.for("react.suspense_list"),t0=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),HE=Symbol.for("react.offscreen"),xv=Symbol.iterator;function Fs(e){return e===null||typeof e!="object"?null:(e=xv&&e[xv]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Object.assign,Ih;function dl(e){if(Ih===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ih=t&&t[1]||""}return`
`+Ih+e}var Ph=!1;function _h(e,t){if(!e||Ph)return"";Ph=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ph=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dl(e):""}function ET(e){switch(e.tag){case 5:return dl(e.type);case 16:return dl("Lazy");case 13:return dl("Suspense");case 19:return dl("SuspenseList");case 0:case 2:case 15:return e=_h(e.type,!1),e;case 11:return e=_h(e.type.render,!1),e;case 1:return e=_h(e.type,!0),e;default:return""}}function zp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ea:return"Fragment";case Aa:return"Portal";case Fp:return"Profiler";case Zg:return"StrictMode";case Up:return"Suspense";case Bp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case VE:return(e.displayName||"Context")+".Consumer";case zE:return(e._context.displayName||"Context")+".Provider";case e0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case t0:return t=e.displayName||null,t!==null?t:zp(e.type)||"Memo";case bi:t=e._payload,e=e._init;try{return zp(e(t))}catch{}}return null}function bT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zp(t);case 8:return t===Zg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function QE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xT(e){var t=QE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gc(e){e._valueTracker||(e._valueTracker=xT(e))}function WE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=QE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ed(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vp(e,t){var n=t.checked;return ot({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function GE(e,t){t=t.checked,t!=null&&Jg(e,"checked",t,!1)}function Hp(e,t){GE(e,t);var n=Gi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qp(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qp(e,t.type,Gi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qp(e,t,n){(t!=="number"||ed(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fl=Array.isArray;function $a(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return ot({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(fl(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gi(n)}}function qE(e,t){var n=Gi(t.value),r=Gi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function YE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?YE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qc,KE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qc=qc||document.createElement("div"),qc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wT=["Webkit","ms","Moz","O"];Object.keys(wl).forEach(function(e){wT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wl[t]=wl[e]})});function XE(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wl.hasOwnProperty(e)&&wl[e]?(""+t).trim():t+"px"}function JE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=XE(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ST=ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qp(e,t){if(t){if(ST[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function Yp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kp=null;function n0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xp=null,Da=null,Ma=null;function Iv(e){if(e=Cc(e)){if(typeof Xp!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=Xd(t),Xp(e.stateNode,e.type,t))}}function ZE(e){Da?Ma?Ma.push(e):Ma=[e]:Da=e}function eb(){if(Da){var e=Da,t=Ma;if(Ma=Da=null,Iv(e),t)for(e=0;e<t.length;e++)Iv(t[e])}}function tb(e,t){return e(t)}function nb(){}var Rh=!1;function rb(e,t,n){if(Rh)return e(t,n);Rh=!0;try{return tb(e,t,n)}finally{Rh=!1,(Da!==null||Ma!==null)&&(nb(),eb())}}function zl(e,t){var n=e.stateNode;if(n===null)return null;var r=Xd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var Jp=!1;if(Zr)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Jp=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Jp=!1}function CT(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Sl=!1,td=null,nd=!1,Zp=null,TT={onError:function(e){Sl=!0,td=e}};function IT(e,t,n,r,i,o,a,s,l){Sl=!1,td=null,CT.apply(TT,arguments)}function PT(e,t,n,r,i,o,a,s,l){if(IT.apply(this,arguments),Sl){if(Sl){var u=td;Sl=!1,td=null}else throw Error(Q(198));nd||(nd=!0,Zp=u)}}function qo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ib(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pv(e){if(qo(e)!==e)throw Error(Q(188))}function _T(e){var t=e.alternate;if(!t){if(t=qo(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pv(i),e;if(o===r)return Pv(i),t;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function ob(e){return e=_T(e),e!==null?ab(e):null}function ab(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ab(e);if(t!==null)return t;e=e.sibling}return null}var sb=In.unstable_scheduleCallback,_v=In.unstable_cancelCallback,RT=In.unstable_shouldYield,OT=In.unstable_requestPaint,ut=In.unstable_now,jT=In.unstable_getCurrentPriorityLevel,r0=In.unstable_ImmediatePriority,lb=In.unstable_UserBlockingPriority,rd=In.unstable_NormalPriority,NT=In.unstable_LowPriority,cb=In.unstable_IdlePriority,Gd=null,_r=null;function kT(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(Gd,e,void 0,(e.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:MT,$T=Math.log,DT=Math.LN2;function MT(e){return e>>>=0,e===0?32:31-($T(e)/DT|0)|0}var Yc=64,Kc=4194304;function hl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function id(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=hl(s):(o&=a,o!==0&&(r=hl(o)))}else a=n&~i,a!==0?r=hl(a):o!==0&&(r=hl(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-cr(t),i=1<<n,r|=e[n],t&=~i;return r}function LT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-cr(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=LT(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function em(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ub(){var e=Yc;return Yc<<=1,!(Yc&4194240)&&(Yc=64),e}function Oh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cr(t),e[t]=n}function UT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-cr(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function i0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-cr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var De=0;function db(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fb,o0,hb,pb,mb,tm=!1,Xc=[],Di=null,Mi=null,Li=null,Vl=new Map,Hl=new Map,Si=[],BT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rv(e,t){switch(e){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(t.pointerId)}}function Bs(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Cc(t),t!==null&&o0(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zT(e,t,n,r,i){switch(t){case"focusin":return Di=Bs(Di,e,t,n,r,i),!0;case"dragenter":return Mi=Bs(Mi,e,t,n,r,i),!0;case"mouseover":return Li=Bs(Li,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vl.set(o,Bs(Vl.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hl.set(o,Bs(Hl.get(o)||null,e,t,n,r,i)),!0}return!1}function gb(e){var t=po(e.target);if(t!==null){var n=qo(t);if(n!==null){if(t=n.tag,t===13){if(t=ib(n),t!==null){e.blockedOn=t,mb(e.priority,function(){hb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nm(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kp=r,n.target.dispatchEvent(r),Kp=null}else return t=Cc(n),t!==null&&o0(t),e.blockedOn=n,!1;t.shift()}return!0}function Ov(e,t,n){Ou(e)&&n.delete(t)}function VT(){tm=!1,Di!==null&&Ou(Di)&&(Di=null),Mi!==null&&Ou(Mi)&&(Mi=null),Li!==null&&Ou(Li)&&(Li=null),Vl.forEach(Ov),Hl.forEach(Ov)}function zs(e,t){e.blockedOn===t&&(e.blockedOn=null,tm||(tm=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,VT)))}function Ql(e){function t(i){return zs(i,e)}if(0<Xc.length){zs(Xc[0],e);for(var n=1;n<Xc.length;n++){var r=Xc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Di!==null&&zs(Di,e),Mi!==null&&zs(Mi,e),Li!==null&&zs(Li,e),Vl.forEach(t),Hl.forEach(t),n=0;n<Si.length;n++)r=Si[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Si.length&&(n=Si[0],n.blockedOn===null);)gb(n),n.blockedOn===null&&Si.shift()}var La=ri.ReactCurrentBatchConfig,od=!0;function HT(e,t,n,r){var i=De,o=La.transition;La.transition=null;try{De=1,a0(e,t,n,r)}finally{De=i,La.transition=o}}function QT(e,t,n,r){var i=De,o=La.transition;La.transition=null;try{De=4,a0(e,t,n,r)}finally{De=i,La.transition=o}}function a0(e,t,n,r){if(od){var i=nm(e,t,n,r);if(i===null)Bh(e,t,r,ad,n),Rv(e,r);else if(zT(i,e,t,n,r))r.stopPropagation();else if(Rv(e,r),t&4&&-1<BT.indexOf(e)){for(;i!==null;){var o=Cc(i);if(o!==null&&fb(o),o=nm(e,t,n,r),o===null&&Bh(e,t,r,ad,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bh(e,t,r,null,n)}}var ad=null;function nm(e,t,n,r){if(ad=null,e=n0(r),e=po(e),e!==null)if(t=qo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ib(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ad=e,null}function vb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jT()){case r0:return 1;case lb:return 4;case rd:case NT:return 16;case cb:return 536870912;default:return 16}default:return 16}}var Ni=null,s0=null,ju=null;function yb(){if(ju)return ju;var e,t=s0,n=t.length,r,i="value"in Ni?Ni.value:Ni.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ju=i.slice(e,1<r?1-r:void 0)}function Nu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jc(){return!0}function jv(){return!1}function Rn(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jc:jv,this.isPropagationStopped=jv,this}return ot(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jc)},persist:function(){},isPersistent:Jc}),t}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},l0=Rn(Cs),Sc=ot({},Cs,{view:0,detail:0}),WT=Rn(Sc),jh,Nh,Vs,qd=ot({},Sc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(jh=e.screenX-Vs.screenX,Nh=e.screenY-Vs.screenY):Nh=jh=0,Vs=e),jh)},movementY:function(e){return"movementY"in e?e.movementY:Nh}}),Nv=Rn(qd),GT=ot({},qd,{dataTransfer:0}),qT=Rn(GT),YT=ot({},Sc,{relatedTarget:0}),kh=Rn(YT),KT=ot({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),XT=Rn(KT),JT=ot({},Cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ZT=Rn(JT),e4=ot({},Cs,{data:0}),kv=Rn(e4),t4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r4[e])?!!t[e]:!1}function c0(){return i4}var o4=ot({},Sc,{key:function(e){if(e.key){var t=t4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(e){return e.type==="keypress"?Nu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a4=Rn(o4),s4=ot({},qd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$v=Rn(s4),l4=ot({},Sc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),c4=Rn(l4),u4=ot({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),d4=Rn(u4),f4=ot({},qd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h4=Rn(f4),p4=[9,13,27,32],u0=Zr&&"CompositionEvent"in window,Cl=null;Zr&&"documentMode"in document&&(Cl=document.documentMode);var m4=Zr&&"TextEvent"in window&&!Cl,Ab=Zr&&(!u0||Cl&&8<Cl&&11>=Cl),Dv=" ",Mv=!1;function Eb(e,t){switch(e){case"keyup":return p4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function g4(e,t){switch(e){case"compositionend":return bb(t);case"keypress":return t.which!==32?null:(Mv=!0,Dv);case"textInput":return e=t.data,e===Dv&&Mv?null:e;default:return null}}function v4(e,t){if(ba)return e==="compositionend"||!u0&&Eb(e,t)?(e=yb(),ju=s0=Ni=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ab&&t.locale!=="ko"?null:t.data;default:return null}}var y4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y4[e.type]:t==="textarea"}function xb(e,t,n,r){ZE(r),t=sd(t,"onChange"),0<t.length&&(n=new l0("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tl=null,Wl=null;function A4(e){Nb(e,0)}function Yd(e){var t=Sa(e);if(WE(t))return e}function E4(e,t){if(e==="change")return t}var wb=!1;if(Zr){var $h;if(Zr){var Dh="oninput"in document;if(!Dh){var Fv=document.createElement("div");Fv.setAttribute("oninput","return;"),Dh=typeof Fv.oninput=="function"}$h=Dh}else $h=!1;wb=$h&&(!document.documentMode||9<document.documentMode)}function Uv(){Tl&&(Tl.detachEvent("onpropertychange",Sb),Wl=Tl=null)}function Sb(e){if(e.propertyName==="value"&&Yd(Wl)){var t=[];xb(t,Wl,e,n0(e)),rb(A4,t)}}function b4(e,t,n){e==="focusin"?(Uv(),Tl=t,Wl=n,Tl.attachEvent("onpropertychange",Sb)):e==="focusout"&&Uv()}function x4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yd(Wl)}function w4(e,t){if(e==="click")return Yd(t)}function S4(e,t){if(e==="input"||e==="change")return Yd(t)}function C4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fr=typeof Object.is=="function"?Object.is:C4;function Gl(e,t){if(fr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lp.call(t,i)||!fr(e[i],t[i]))return!1}return!0}function Bv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zv(e,t){var n=Bv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bv(n)}}function Cb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tb(){for(var e=window,t=ed();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ed(e.document)}return t}function d0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function T4(e){var t=Tb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cb(n.ownerDocument.documentElement,n)){if(r!==null&&d0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zv(n,o);var a=zv(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I4=Zr&&"documentMode"in document&&11>=document.documentMode,xa=null,rm=null,Il=null,im=!1;function Vv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;im||xa==null||xa!==ed(r)||(r=xa,"selectionStart"in r&&d0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Il&&Gl(Il,r)||(Il=r,r=sd(rm,"onSelect"),0<r.length&&(t=new l0("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xa)))}function Zc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wa={animationend:Zc("Animation","AnimationEnd"),animationiteration:Zc("Animation","AnimationIteration"),animationstart:Zc("Animation","AnimationStart"),transitionend:Zc("Transition","TransitionEnd")},Mh={},Ib={};Zr&&(Ib=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function Kd(e){if(Mh[e])return Mh[e];if(!wa[e])return e;var t=wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ib)return Mh[e]=t[n];return e}var Pb=Kd("animationend"),_b=Kd("animationiteration"),Rb=Kd("animationstart"),Ob=Kd("transitionend"),jb=new Map,Hv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(e,t){jb.set(e,t),Go(t,[e])}for(var Lh=0;Lh<Hv.length;Lh++){var Fh=Hv[Lh],P4=Fh.toLowerCase(),_4=Fh[0].toUpperCase()+Fh.slice(1);Ki(P4,"on"+_4)}Ki(Pb,"onAnimationEnd");Ki(_b,"onAnimationIteration");Ki(Rb,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Ob,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);Go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Go("onBeforeInput",["compositionend","keypress","textInput","paste"]);Go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R4=new Set("cancel close invalid load scroll toggle".split(" ").concat(pl));function Qv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,PT(r,t,void 0,e),e.currentTarget=null}function Nb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Qv(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Qv(i,s,u),o=l}}}if(nd)throw e=Zp,nd=!1,Zp=null,e}function Ve(e,t){var n=t[cm];n===void 0&&(n=t[cm]=new Set);var r=e+"__bubble";n.has(r)||(kb(t,e,2,!1),n.add(r))}function Uh(e,t,n){var r=0;t&&(r|=4),kb(n,e,r,t)}var eu="_reactListening"+Math.random().toString(36).slice(2);function ql(e){if(!e[eu]){e[eu]=!0,BE.forEach(function(n){n!=="selectionchange"&&(R4.has(n)||Uh(n,!1,e),Uh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eu]||(t[eu]=!0,Uh("selectionchange",!1,t))}}function kb(e,t,n,r){switch(vb(t)){case 1:var i=HT;break;case 4:i=QT;break;default:i=a0}n=i.bind(null,t,n,e),i=void 0,!Jp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bh(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=po(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}rb(function(){var u=o,d=n0(n),h=[];e:{var f=jb.get(e);if(f!==void 0){var p=l0,v=e;switch(e){case"keypress":if(Nu(n)===0)break e;case"keydown":case"keyup":p=a4;break;case"focusin":v="focus",p=kh;break;case"focusout":v="blur",p=kh;break;case"beforeblur":case"afterblur":p=kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=c4;break;case Pb:case _b:case Rb:p=XT;break;case Ob:p=d4;break;case"scroll":p=WT;break;case"wheel":p=h4;break;case"copy":case"cut":case"paste":p=ZT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$v}var g=(t&4)!==0,S=!g&&e==="scroll",E=g?f!==null?f+"Capture":null:f;g=[];for(var A=u,y;A!==null;){y=A;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,E!==null&&(x=zl(A,E),x!=null&&g.push(Yl(A,x,y)))),S)break;A=A.return}0<g.length&&(f=new p(f,v,null,n,d),h.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Kp&&(v=n.relatedTarget||n.fromElement)&&(po(v)||v[ei]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?po(v):null,v!==null&&(S=qo(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(g=Nv,x="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(g=$v,x="onPointerLeave",E="onPointerEnter",A="pointer"),S=p==null?f:Sa(p),y=v==null?f:Sa(v),f=new g(x,A+"leave",p,n,d),f.target=S,f.relatedTarget=y,x=null,po(d)===u&&(g=new g(E,A+"enter",v,n,d),g.target=y,g.relatedTarget=S,x=g),S=x,p&&v)t:{for(g=p,E=v,A=0,y=g;y;y=la(y))A++;for(y=0,x=E;x;x=la(x))y++;for(;0<A-y;)g=la(g),A--;for(;0<y-A;)E=la(E),y--;for(;A--;){if(g===E||E!==null&&g===E.alternate)break t;g=la(g),E=la(E)}g=null}else g=null;p!==null&&Wv(h,f,p,g,!1),v!==null&&S!==null&&Wv(h,S,v,g,!0)}}e:{if(f=u?Sa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=E4;else if(Lv(f))if(wb)w=S4;else{w=x4;var C=b4}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=w4);if(w&&(w=w(e,u))){xb(h,w,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Qp(f,"number",f.value)}switch(C=u?Sa(u):window,e){case"focusin":(Lv(C)||C.contentEditable==="true")&&(xa=C,rm=u,Il=null);break;case"focusout":Il=rm=xa=null;break;case"mousedown":im=!0;break;case"contextmenu":case"mouseup":case"dragend":im=!1,Vv(h,n,d);break;case"selectionchange":if(I4)break;case"keydown":case"keyup":Vv(h,n,d)}var b;if(u0)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ba?Eb(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ab&&n.locale!=="ko"&&(ba||T!=="onCompositionStart"?T==="onCompositionEnd"&&ba&&(b=yb()):(Ni=d,s0="value"in Ni?Ni.value:Ni.textContent,ba=!0)),C=sd(u,T),0<C.length&&(T=new kv(T,e,null,n,d),h.push({event:T,listeners:C}),b?T.data=b:(b=bb(n),b!==null&&(T.data=b)))),(b=m4?g4(e,n):v4(e,n))&&(u=sd(u,"onBeforeInput"),0<u.length&&(d=new kv("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=b))}Nb(h,t)})}function Yl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sd(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zl(e,n),o!=null&&r.unshift(Yl(e,o,i)),o=zl(e,t),o!=null&&r.push(Yl(e,o,i))),e=e.return}return r}function la(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wv(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=zl(n,o),l!=null&&a.unshift(Yl(n,l,s))):i||(l=zl(n,o),l!=null&&a.push(Yl(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var O4=/\r\n?/g,j4=/\u0000|\uFFFD/g;function Gv(e){return(typeof e=="string"?e:""+e).replace(O4,`
`).replace(j4,"")}function tu(e,t,n){if(t=Gv(t),Gv(e)!==t&&n)throw Error(Q(425))}function ld(){}var om=null,am=null;function sm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lm=typeof setTimeout=="function"?setTimeout:void 0,N4=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,k4=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(e){return qv.resolve(null).then(e).catch($4)}:lm;function $4(e){setTimeout(function(){throw e})}function zh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ql(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ql(t)}function Fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Pr="__reactFiber$"+Ts,Kl="__reactProps$"+Ts,ei="__reactContainer$"+Ts,cm="__reactEvents$"+Ts,D4="__reactListeners$"+Ts,M4="__reactHandles$"+Ts;function po(e){var t=e[Pr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ei]||n[Pr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yv(e);e!==null;){if(n=e[Pr])return n;e=Yv(e)}return t}e=n,n=e.parentNode}return null}function Cc(e){return e=e[Pr]||e[ei],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function Xd(e){return e[Kl]||null}var um=[],Ca=-1;function Xi(e){return{current:e}}function We(e){0>Ca||(e.current=um[Ca],um[Ca]=null,Ca--)}function Fe(e,t){Ca++,um[Ca]=e.current,e.current=t}var qi={},Wt=Xi(qi),dn=Xi(!1),ko=qi;function as(e,t){var n=e.type.contextTypes;if(!n)return qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function fn(e){return e=e.childContextTypes,e!=null}function cd(){We(dn),We(Wt)}function Kv(e,t,n){if(Wt.current!==qi)throw Error(Q(168));Fe(Wt,t),Fe(dn,n)}function $b(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,bT(e)||"Unknown",i));return ot({},n,r)}function ud(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qi,ko=Wt.current,Fe(Wt,e),Fe(dn,dn.current),!0}function Xv(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=$b(e,t,ko),r.__reactInternalMemoizedMergedChildContext=e,We(dn),We(Wt),Fe(Wt,e)):We(dn),Fe(dn,n)}var Wr=null,Jd=!1,Vh=!1;function Db(e){Wr===null?Wr=[e]:Wr.push(e)}function L4(e){Jd=!0,Db(e)}function Ji(){if(!Vh&&Wr!==null){Vh=!0;var e=0,t=De;try{var n=Wr;for(De=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wr=null,Jd=!1}catch(i){throw Wr!==null&&(Wr=Wr.slice(e+1)),sb(r0,Ji),i}finally{De=t,Vh=!1}}return null}var Ta=[],Ia=0,dd=null,fd=0,Bn=[],zn=0,$o=null,Yr=1,Kr="";function co(e,t){Ta[Ia++]=fd,Ta[Ia++]=dd,dd=e,fd=t}function Mb(e,t,n){Bn[zn++]=Yr,Bn[zn++]=Kr,Bn[zn++]=$o,$o=e;var r=Yr;e=Kr;var i=32-cr(r)-1;r&=~(1<<i),n+=1;var o=32-cr(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Yr=1<<32-cr(t)+i|n<<i|r,Kr=o+e}else Yr=1<<o|n<<i|r,Kr=e}function f0(e){e.return!==null&&(co(e,1),Mb(e,1,0))}function h0(e){for(;e===dd;)dd=Ta[--Ia],Ta[Ia]=null,fd=Ta[--Ia],Ta[Ia]=null;for(;e===$o;)$o=Bn[--zn],Bn[zn]=null,Kr=Bn[--zn],Bn[zn]=null,Yr=Bn[--zn],Bn[zn]=null}var Tn=null,wn=null,et=!1,ar=null;function Lb(e,t){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tn=e,wn=Fi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tn=e,wn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$o!==null?{id:Yr,overflow:Kr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tn=e,wn=null,!0):!1;default:return!1}}function dm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fm(e){if(et){var t=wn;if(t){var n=t;if(!Jv(e,t)){if(dm(e))throw Error(Q(418));t=Fi(n.nextSibling);var r=Tn;t&&Jv(e,t)?Lb(r,n):(e.flags=e.flags&-4097|2,et=!1,Tn=e)}}else{if(dm(e))throw Error(Q(418));e.flags=e.flags&-4097|2,et=!1,Tn=e}}}function Zv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tn=e}function nu(e){if(e!==Tn)return!1;if(!et)return Zv(e),et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sm(e.type,e.memoizedProps)),t&&(t=wn)){if(dm(e))throw Fb(),Error(Q(418));for(;t;)Lb(e,t),t=Fi(t.nextSibling)}if(Zv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wn=Fi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wn=null}}else wn=Tn?Fi(e.stateNode.nextSibling):null;return!0}function Fb(){for(var e=wn;e;)e=Fi(e.nextSibling)}function ss(){wn=Tn=null,et=!1}function p0(e){ar===null?ar=[e]:ar.push(e)}var F4=ri.ReactCurrentBatchConfig;function Hs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function ru(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ey(e){var t=e._init;return t(e._payload)}function Ub(e){function t(E,A){if(e){var y=E.deletions;y===null?(E.deletions=[A],E.flags|=16):y.push(A)}}function n(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function r(E,A){for(E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function i(E,A){return E=Vi(E,A),E.index=0,E.sibling=null,E}function o(E,A,y){return E.index=y,e?(y=E.alternate,y!==null?(y=y.index,y<A?(E.flags|=2,A):y):(E.flags|=2,A)):(E.flags|=1048576,A)}function a(E){return e&&E.alternate===null&&(E.flags|=2),E}function s(E,A,y,x){return A===null||A.tag!==6?(A=Kh(y,E.mode,x),A.return=E,A):(A=i(A,y),A.return=E,A)}function l(E,A,y,x){var w=y.type;return w===Ea?d(E,A,y.props.children,x,y.key):A!==null&&(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bi&&ey(w)===A.type)?(x=i(A,y.props),x.ref=Hs(E,A,y),x.return=E,x):(x=Uu(y.type,y.key,y.props,null,E.mode,x),x.ref=Hs(E,A,y),x.return=E,x)}function u(E,A,y,x){return A===null||A.tag!==4||A.stateNode.containerInfo!==y.containerInfo||A.stateNode.implementation!==y.implementation?(A=Xh(y,E.mode,x),A.return=E,A):(A=i(A,y.children||[]),A.return=E,A)}function d(E,A,y,x,w){return A===null||A.tag!==7?(A=_o(y,E.mode,x,w),A.return=E,A):(A=i(A,y),A.return=E,A)}function h(E,A,y){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Kh(""+A,E.mode,y),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Wc:return y=Uu(A.type,A.key,A.props,null,E.mode,y),y.ref=Hs(E,null,A),y.return=E,y;case Aa:return A=Xh(A,E.mode,y),A.return=E,A;case bi:var x=A._init;return h(E,x(A._payload),y)}if(fl(A)||Fs(A))return A=_o(A,E.mode,y,null),A.return=E,A;ru(E,A)}return null}function f(E,A,y,x){var w=A!==null?A.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:s(E,A,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wc:return y.key===w?l(E,A,y,x):null;case Aa:return y.key===w?u(E,A,y,x):null;case bi:return w=y._init,f(E,A,w(y._payload),x)}if(fl(y)||Fs(y))return w!==null?null:d(E,A,y,x,null);ru(E,y)}return null}function p(E,A,y,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(y)||null,s(A,E,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wc:return E=E.get(x.key===null?y:x.key)||null,l(A,E,x,w);case Aa:return E=E.get(x.key===null?y:x.key)||null,u(A,E,x,w);case bi:var C=x._init;return p(E,A,y,C(x._payload),w)}if(fl(x)||Fs(x))return E=E.get(y)||null,d(A,E,x,w,null);ru(A,x)}return null}function v(E,A,y,x){for(var w=null,C=null,b=A,T=A=0,_=null;b!==null&&T<y.length;T++){b.index>T?(_=b,b=null):_=b.sibling;var $=f(E,b,y[T],x);if($===null){b===null&&(b=_);break}e&&b&&$.alternate===null&&t(E,b),A=o($,A,T),C===null?w=$:C.sibling=$,C=$,b=_}if(T===y.length)return n(E,b),et&&co(E,T),w;if(b===null){for(;T<y.length;T++)b=h(E,y[T],x),b!==null&&(A=o(b,A,T),C===null?w=b:C.sibling=b,C=b);return et&&co(E,T),w}for(b=r(E,b);T<y.length;T++)_=p(b,E,T,y[T],x),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?T:_.key),A=o(_,A,T),C===null?w=_:C.sibling=_,C=_);return e&&b.forEach(function(M){return t(E,M)}),et&&co(E,T),w}function g(E,A,y,x){var w=Fs(y);if(typeof w!="function")throw Error(Q(150));if(y=w.call(y),y==null)throw Error(Q(151));for(var C=w=null,b=A,T=A=0,_=null,$=y.next();b!==null&&!$.done;T++,$=y.next()){b.index>T?(_=b,b=null):_=b.sibling;var M=f(E,b,$.value,x);if(M===null){b===null&&(b=_);break}e&&b&&M.alternate===null&&t(E,b),A=o(M,A,T),C===null?w=M:C.sibling=M,C=M,b=_}if($.done)return n(E,b),et&&co(E,T),w;if(b===null){for(;!$.done;T++,$=y.next())$=h(E,$.value,x),$!==null&&(A=o($,A,T),C===null?w=$:C.sibling=$,C=$);return et&&co(E,T),w}for(b=r(E,b);!$.done;T++,$=y.next())$=p(b,E,T,$.value,x),$!==null&&(e&&$.alternate!==null&&b.delete($.key===null?T:$.key),A=o($,A,T),C===null?w=$:C.sibling=$,C=$);return e&&b.forEach(function(R){return t(E,R)}),et&&co(E,T),w}function S(E,A,y,x){if(typeof y=="object"&&y!==null&&y.type===Ea&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wc:e:{for(var w=y.key,C=A;C!==null;){if(C.key===w){if(w=y.type,w===Ea){if(C.tag===7){n(E,C.sibling),A=i(C,y.props.children),A.return=E,E=A;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bi&&ey(w)===C.type){n(E,C.sibling),A=i(C,y.props),A.ref=Hs(E,C,y),A.return=E,E=A;break e}n(E,C);break}else t(E,C);C=C.sibling}y.type===Ea?(A=_o(y.props.children,E.mode,x,y.key),A.return=E,E=A):(x=Uu(y.type,y.key,y.props,null,E.mode,x),x.ref=Hs(E,A,y),x.return=E,E=x)}return a(E);case Aa:e:{for(C=y.key;A!==null;){if(A.key===C)if(A.tag===4&&A.stateNode.containerInfo===y.containerInfo&&A.stateNode.implementation===y.implementation){n(E,A.sibling),A=i(A,y.children||[]),A.return=E,E=A;break e}else{n(E,A);break}else t(E,A);A=A.sibling}A=Xh(y,E.mode,x),A.return=E,E=A}return a(E);case bi:return C=y._init,S(E,A,C(y._payload),x)}if(fl(y))return v(E,A,y,x);if(Fs(y))return g(E,A,y,x);ru(E,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,A!==null&&A.tag===6?(n(E,A.sibling),A=i(A,y),A.return=E,E=A):(n(E,A),A=Kh(y,E.mode,x),A.return=E,E=A),a(E)):n(E,A)}return S}var ls=Ub(!0),Bb=Ub(!1),hd=Xi(null),pd=null,Pa=null,m0=null;function g0(){m0=Pa=pd=null}function v0(e){var t=hd.current;We(hd),e._currentValue=t}function hm(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fa(e,t){pd=e,m0=Pa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(un=!0),e.firstContext=null)}function qn(e){var t=e._currentValue;if(m0!==e)if(e={context:e,memoizedValue:t,next:null},Pa===null){if(pd===null)throw Error(Q(308));Pa=e,pd.dependencies={lanes:0,firstContext:e}}else Pa=Pa.next=e;return t}var mo=null;function y0(e){mo===null?mo=[e]:mo.push(e)}function zb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,y0(t)):(n.next=i.next,i.next=n),t.interleaved=n,ti(e,r)}function ti(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xi=!1;function A0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ui(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ti(e,n)}return i=r.interleaved,i===null?(t.next=t,y0(r)):(t.next=i.next,i.next=t),r.interleaved=t,ti(e,n)}function ku(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,i0(e,n)}}function ty(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function md(e,t,n,r){var i=e.updateQueue;xi=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,p=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,g=s;switch(f=t,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=ot({},h,f);break e;case 2:xi=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mo|=a,e.lanes=a,e.memoizedState=h}}function ny(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var Tc={},Rr=Xi(Tc),Xl=Xi(Tc),Jl=Xi(Tc);function go(e){if(e===Tc)throw Error(Q(174));return e}function E0(e,t){switch(Fe(Jl,t),Fe(Xl,e),Fe(Rr,Tc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gp(t,e)}We(Rr),Fe(Rr,t)}function cs(){We(Rr),We(Xl),We(Jl)}function Hb(e){go(Jl.current);var t=go(Rr.current),n=Gp(t,e.type);t!==n&&(Fe(Xl,e),Fe(Rr,n))}function b0(e){Xl.current===e&&(We(Rr),We(Xl))}var rt=Xi(0);function gd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hh=[];function x0(){for(var e=0;e<Hh.length;e++)Hh[e]._workInProgressVersionPrimary=null;Hh.length=0}var $u=ri.ReactCurrentDispatcher,Qh=ri.ReactCurrentBatchConfig,Do=0,it=null,At=null,xt=null,vd=!1,Pl=!1,Zl=0,U4=0;function zt(){throw Error(Q(321))}function w0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fr(e[n],t[n]))return!1;return!0}function S0(e,t,n,r,i,o){if(Do=o,it=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$u.current=e===null||e.memoizedState===null?H4:Q4,e=n(r,i),Pl){o=0;do{if(Pl=!1,Zl=0,25<=o)throw Error(Q(301));o+=1,xt=At=null,t.updateQueue=null,$u.current=W4,e=n(r,i)}while(Pl)}if($u.current=yd,t=At!==null&&At.next!==null,Do=0,xt=At=it=null,vd=!1,t)throw Error(Q(300));return e}function C0(){var e=Zl!==0;return Zl=0,e}function br(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?it.memoizedState=xt=e:xt=xt.next=e,xt}function Yn(){if(At===null){var e=it.alternate;e=e!==null?e.memoizedState:null}else e=At.next;var t=xt===null?it.memoizedState:xt.next;if(t!==null)xt=t,At=e;else{if(e===null)throw Error(Q(310));At=e,e={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},xt===null?it.memoizedState=xt=e:xt=xt.next=e}return xt}function ec(e,t){return typeof t=="function"?t(e):t}function Wh(e){var t=Yn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=At,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Do&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=h,a=r):l=l.next=h,it.lanes|=d,Mo|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,fr(r,t.memoizedState)||(un=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,it.lanes|=o,Mo|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gh(e){var t=Yn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);fr(o,t.memoizedState)||(un=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qb(){}function Wb(e,t){var n=it,r=Yn(),i=t(),o=!fr(r.memoizedState,i);if(o&&(r.memoizedState=i,un=!0),r=r.queue,T0(Yb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,tc(9,qb.bind(null,n,r,i,t),void 0,null),Ct===null)throw Error(Q(349));Do&30||Gb(n,t,i)}return i}function Gb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qb(e,t,n,r){t.value=n,t.getSnapshot=r,Kb(t)&&Xb(e)}function Yb(e,t,n){return n(function(){Kb(t)&&Xb(e)})}function Kb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fr(e,n)}catch{return!0}}function Xb(e){var t=ti(e,1);t!==null&&ur(t,e,1,-1)}function ry(e){var t=br();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ec,lastRenderedState:e},t.queue=e,e=e.dispatch=V4.bind(null,it,e),[t.memoizedState,e]}function tc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jb(){return Yn().memoizedState}function Du(e,t,n,r){var i=br();it.flags|=e,i.memoizedState=tc(1|t,n,void 0,r===void 0?null:r)}function Zd(e,t,n,r){var i=Yn();r=r===void 0?null:r;var o=void 0;if(At!==null){var a=At.memoizedState;if(o=a.destroy,r!==null&&w0(r,a.deps)){i.memoizedState=tc(t,n,o,r);return}}it.flags|=e,i.memoizedState=tc(1|t,n,o,r)}function iy(e,t){return Du(8390656,8,e,t)}function T0(e,t){return Zd(2048,8,e,t)}function Zb(e,t){return Zd(4,2,e,t)}function ex(e,t){return Zd(4,4,e,t)}function tx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nx(e,t,n){return n=n!=null?n.concat([e]):null,Zd(4,4,tx.bind(null,t,e),n)}function I0(){}function rx(e,t){var n=Yn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&w0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ix(e,t){var n=Yn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&w0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ox(e,t,n){return Do&21?(fr(n,t)||(n=ub(),it.lanes|=n,Mo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,un=!0),e.memoizedState=n)}function B4(e,t){var n=De;De=n!==0&&4>n?n:4,e(!0);var r=Qh.transition;Qh.transition={};try{e(!1),t()}finally{De=n,Qh.transition=r}}function ax(){return Yn().memoizedState}function z4(e,t,n){var r=zi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sx(e))lx(t,n);else if(n=zb(e,t,n,r),n!==null){var i=Jt();ur(n,e,r,i),cx(n,t,r)}}function V4(e,t,n){var r=zi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sx(e))lx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,fr(s,a)){var l=t.interleaved;l===null?(i.next=i,y0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=zb(e,t,i,r),n!==null&&(i=Jt(),ur(n,e,r,i),cx(n,t,r))}}function sx(e){var t=e.alternate;return e===it||t!==null&&t===it}function lx(e,t){Pl=vd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,i0(e,n)}}var yd={readContext:qn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},H4={readContext:qn,useCallback:function(e,t){return br().memoizedState=[e,t===void 0?null:t],e},useContext:qn,useEffect:iy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Du(4194308,4,tx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Du(4194308,4,e,t)},useInsertionEffect:function(e,t){return Du(4,2,e,t)},useMemo:function(e,t){var n=br();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=br();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z4.bind(null,it,e),[r.memoizedState,e]},useRef:function(e){var t=br();return e={current:e},t.memoizedState=e},useState:ry,useDebugValue:I0,useDeferredValue:function(e){return br().memoizedState=e},useTransition:function(){var e=ry(!1),t=e[0];return e=B4.bind(null,e[1]),br().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=it,i=br();if(et){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Ct===null)throw Error(Q(349));Do&30||Gb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,iy(Yb.bind(null,r,o,e),[e]),r.flags|=2048,tc(9,qb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=br(),t=Ct.identifierPrefix;if(et){var n=Kr,r=Yr;n=(r&~(1<<32-cr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q4={readContext:qn,useCallback:rx,useContext:qn,useEffect:T0,useImperativeHandle:nx,useInsertionEffect:Zb,useLayoutEffect:ex,useMemo:ix,useReducer:Wh,useRef:Jb,useState:function(){return Wh(ec)},useDebugValue:I0,useDeferredValue:function(e){var t=Yn();return ox(t,At.memoizedState,e)},useTransition:function(){var e=Wh(ec)[0],t=Yn().memoizedState;return[e,t]},useMutableSource:Qb,useSyncExternalStore:Wb,useId:ax,unstable_isNewReconciler:!1},W4={readContext:qn,useCallback:rx,useContext:qn,useEffect:T0,useImperativeHandle:nx,useInsertionEffect:Zb,useLayoutEffect:ex,useMemo:ix,useReducer:Gh,useRef:Jb,useState:function(){return Gh(ec)},useDebugValue:I0,useDeferredValue:function(e){var t=Yn();return At===null?t.memoizedState=e:ox(t,At.memoizedState,e)},useTransition:function(){var e=Gh(ec)[0],t=Yn().memoizedState;return[e,t]},useMutableSource:Qb,useSyncExternalStore:Wb,useId:ax,unstable_isNewReconciler:!1};function nr(e,t){if(e&&e.defaultProps){t=ot({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ot({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ef={isMounted:function(e){return(e=e._reactInternals)?qo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Jt(),i=zi(e),o=Xr(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ui(e,o,i),t!==null&&(ur(t,e,i,r),ku(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Jt(),i=zi(e),o=Xr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ui(e,o,i),t!==null&&(ur(t,e,i,r),ku(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Jt(),r=zi(e),i=Xr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ui(e,i,r),t!==null&&(ur(t,e,r,n),ku(t,e,r))}};function oy(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Gl(n,r)||!Gl(i,o):!0}function ux(e,t,n){var r=!1,i=qi,o=t.contextType;return typeof o=="object"&&o!==null?o=qn(o):(i=fn(t)?ko:Wt.current,r=t.contextTypes,o=(r=r!=null)?as(e,i):qi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ef,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ay(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ef.enqueueReplaceState(t,t.state,null)}function mm(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},A0(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qn(o):(o=fn(t)?ko:Wt.current,i.context=as(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pm(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ef.enqueueReplaceState(i,i.state,null),md(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do n+=ET(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gm(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var G4=typeof WeakMap=="function"?WeakMap:Map;function dx(e,t,n){n=Xr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ed||(Ed=!0,Tm=r),gm(e,t)},n}function fx(e,t,n){n=Xr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gm(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gm(e,t),typeof r!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new G4;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s6.bind(null,e,t,n),t.then(e,e))}function ly(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cy(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xr(-1,1),t.tag=2,Ui(n,t,1))),n.lanes|=1),e)}var q4=ri.ReactCurrentOwner,un=!1;function Xt(e,t,n,r){t.child=e===null?Bb(t,null,n,r):ls(t,e.child,n,r)}function uy(e,t,n,r,i){n=n.render;var o=t.ref;return Fa(t,i),r=S0(e,t,n,r,o,i),n=C0(),e!==null&&!un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ni(e,t,i)):(et&&n&&f0(t),t.flags|=1,Xt(e,t,r,i),t.child)}function dy(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hx(e,t,o,r,i)):(e=Uu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gl,n(a,r)&&e.ref===t.ref)return ni(e,t,i)}return t.flags|=1,e=Vi(o,r),e.ref=t.ref,e.return=t,t.child=e}function hx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gl(o,r)&&e.ref===t.ref)if(un=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(un=!0);else return t.lanes=e.lanes,ni(e,t,i)}return vm(e,t,n,r,i)}function px(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(Ra,bn),bn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fe(Ra,bn),bn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Fe(Ra,bn),bn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Fe(Ra,bn),bn|=r;return Xt(e,t,i,n),t.child}function mx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vm(e,t,n,r,i){var o=fn(n)?ko:Wt.current;return o=as(t,o),Fa(t,i),n=S0(e,t,n,r,o,i),r=C0(),e!==null&&!un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ni(e,t,i)):(et&&r&&f0(t),t.flags|=1,Xt(e,t,n,i),t.child)}function fy(e,t,n,r,i){if(fn(n)){var o=!0;ud(t)}else o=!1;if(Fa(t,i),t.stateNode===null)Mu(e,t),ux(t,n,r),mm(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=fn(n)?ko:Wt.current,u=as(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ay(t,a,r,u),xi=!1;var f=t.memoizedState;a.state=f,md(t,r,a,i),l=t.memoizedState,s!==r||f!==l||dn.current||xi?(typeof d=="function"&&(pm(t,n,d,r),l=t.memoizedState),(s=xi||oy(t,n,s,r,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vb(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:nr(t.type,s),a.props=u,h=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=fn(n)?ko:Wt.current,l=as(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||f!==l)&&ay(t,a,r,l),xi=!1,f=t.memoizedState,a.state=f,md(t,r,a,i);var v=t.memoizedState;s!==h||f!==v||dn.current||xi?(typeof p=="function"&&(pm(t,n,p,r),v=t.memoizedState),(u=xi||oy(t,n,u,r,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ym(e,t,n,r,o,i)}function ym(e,t,n,r,i,o){mx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Xv(t,n,!1),ni(e,t,o);r=t.stateNode,q4.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ls(t,e.child,null,o),t.child=ls(t,null,s,o)):Xt(e,t,s,o),t.memoizedState=r.state,i&&Xv(t,n,!0),t.child}function gx(e){var t=e.stateNode;t.pendingContext?Kv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kv(e,t.context,!1),E0(e,t.containerInfo)}function hy(e,t,n,r,i){return ss(),p0(i),t.flags|=256,Xt(e,t,n,r),t.child}var Am={dehydrated:null,treeContext:null,retryLane:0};function Em(e){return{baseLanes:e,cachePool:null,transitions:null}}function vx(e,t,n){var r=t.pendingProps,i=rt.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Fe(rt,i&1),e===null)return fm(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=rf(a,r,0,null),e=_o(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Em(n),t.memoizedState=Am,e):P0(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Y4(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Vi(s,o):(o=_o(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Em(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Am,r}return o=e.child,e=o.sibling,r=Vi(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function P0(e,t){return t=rf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function iu(e,t,n,r){return r!==null&&p0(r),ls(t,e.child,null,n),e=P0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y4(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=qh(Error(Q(422))),iu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rf({mode:"visible",children:r.children},i,0,null),o=_o(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ls(t,e.child,null,a),t.child.memoizedState=Em(a),t.memoizedState=Am,o);if(!(t.mode&1))return iu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Q(419)),r=qh(o,r,void 0),iu(e,t,a,r)}if(s=(a&e.childLanes)!==0,un||s){if(r=Ct,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ti(e,i),ur(r,e,i,-1))}return k0(),r=qh(Error(Q(421))),iu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l6.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,wn=Fi(i.nextSibling),Tn=t,et=!0,ar=null,e!==null&&(Bn[zn++]=Yr,Bn[zn++]=Kr,Bn[zn++]=$o,Yr=e.id,Kr=e.overflow,$o=t),t=P0(t,r.children),t.flags|=4096,t)}function py(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hm(e.return,t,n)}function Yh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Xt(e,t,r.children,n),r=rt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&py(e,n,t);else if(e.tag===19)py(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fe(rt,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&gd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yh(t,!0,n,null,o);break;case"together":Yh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ni(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K4(e,t,n){switch(t.tag){case 3:gx(t),ss();break;case 5:Hb(t);break;case 1:fn(t.type)&&ud(t);break;case 4:E0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Fe(hd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Fe(rt,rt.current&1),t.flags|=128,null):n&t.child.childLanes?vx(e,t,n):(Fe(rt,rt.current&1),e=ni(e,t,n),e!==null?e.sibling:null);Fe(rt,rt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fe(rt,rt.current),r)break;return null;case 22:case 23:return t.lanes=0,px(e,t,n)}return ni(e,t,n)}var Ax,bm,Ex,bx;Ax=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bm=function(){};Ex=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(Rr.current);var o=null;switch(n){case"input":i=Vp(e,i),r=Vp(e,r),o=[];break;case"select":i=ot({},i,{value:void 0}),r=ot({},r,{value:void 0}),o=[];break;case"textarea":i=Wp(e,i),r=Wp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ld)}qp(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ul.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ul.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};bx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qs(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function X4(e,t,n){var r=t.pendingProps;switch(h0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(t),null;case 1:return fn(t.type)&&cd(),Vt(t),null;case 3:return r=t.stateNode,cs(),We(dn),We(Wt),x0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ar!==null&&(_m(ar),ar=null))),bm(e,t),Vt(t),null;case 5:b0(t);var i=go(Jl.current);if(n=t.type,e!==null&&t.stateNode!=null)Ex(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return Vt(t),null}if(e=go(Rr.current),nu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pr]=t,r[Kl]=o,e=(t.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<pl.length;i++)Ve(pl[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":wv(r,o),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ve("invalid",r);break;case"textarea":Cv(r,o),Ve("invalid",r)}qp(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&tu(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&tu(r.textContent,s,e),i=["children",""+s]):Ul.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Gc(r),Sv(r,o,!0);break;case"textarea":Gc(r),Tv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ld)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=YE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pr]=t,e[Kl]=r,Ax(e,t,!1,!1),t.stateNode=e;e:{switch(a=Yp(n,r),n){case"dialog":Ve("cancel",e),Ve("close",e),i=r;break;case"iframe":case"object":case"embed":Ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<pl.length;i++)Ve(pl[i],e);i=r;break;case"source":Ve("error",e),i=r;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),i=r;break;case"details":Ve("toggle",e),i=r;break;case"input":wv(e,r),i=Vp(e,r),Ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ot({},r,{value:void 0}),Ve("invalid",e);break;case"textarea":Cv(e,r),i=Wp(e,r),Ve("invalid",e);break;default:i=r}qp(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?JE(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&KE(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bl(e,l):typeof l=="number"&&Bl(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ul.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ve("scroll",e):l!=null&&Jg(e,o,l,a))}switch(n){case"input":Gc(e),Sv(e,r,!1);break;case"textarea":Gc(e),Tv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$a(e,!!r.multiple,o,!1):r.defaultValue!=null&&$a(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ld)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Vt(t),null;case 6:if(e&&t.stateNode!=null)bx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=go(Jl.current),go(Rr.current),nu(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pr]=t,(o=r.nodeValue!==n)&&(e=Tn,e!==null))switch(e.tag){case 3:tu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tu(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pr]=t,t.stateNode=r}return Vt(t),null;case 13:if(We(rt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&wn!==null&&t.mode&1&&!(t.flags&128))Fb(),ss(),t.flags|=98560,o=!1;else if(o=nu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[Pr]=t}else ss(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Vt(t),o=!1}else ar!==null&&(_m(ar),ar=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||rt.current&1?Et===0&&(Et=3):k0())),t.updateQueue!==null&&(t.flags|=4),Vt(t),null);case 4:return cs(),bm(e,t),e===null&&ql(t.stateNode.containerInfo),Vt(t),null;case 10:return v0(t.type._context),Vt(t),null;case 17:return fn(t.type)&&cd(),Vt(t),null;case 19:if(We(rt),o=t.memoizedState,o===null)return Vt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Qs(o,!1);else{if(Et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=gd(e),a!==null){for(t.flags|=128,Qs(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Fe(rt,rt.current&1|2),t.child}e=e.sibling}o.tail!==null&&ut()>ds&&(t.flags|=128,r=!0,Qs(o,!1),t.lanes=4194304)}else{if(!r)if(e=gd(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!et)return Vt(t),null}else 2*ut()-o.renderingStartTime>ds&&n!==1073741824&&(t.flags|=128,r=!0,Qs(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ut(),t.sibling=null,n=rt.current,Fe(rt,r?n&1|2:n&1),t):(Vt(t),null);case 22:case 23:return N0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?bn&1073741824&&(Vt(t),t.subtreeFlags&6&&(t.flags|=8192)):Vt(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function J4(e,t){switch(h0(t),t.tag){case 1:return fn(t.type)&&cd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cs(),We(dn),We(Wt),x0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return b0(t),null;case 13:if(We(rt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return We(rt),null;case 4:return cs(),null;case 10:return v0(t.type._context),null;case 22:case 23:return N0(),null;case 24:return null;default:return null}}var ou=!1,Qt=!1,Z4=typeof WeakSet=="function"?WeakSet:Set,Z=null;function _a(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(e,t,r)}else n.current=null}function xm(e,t,n){try{n()}catch(r){st(e,t,r)}}var my=!1;function e6(e,t){if(om=od,e=Tb(),d0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(s=a+i),h!==o||r!==0&&h.nodeType!==3||(l=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(am={focusedElem:e,selectionRange:n},od=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,S=v.memoizedState,E=t.stateNode,A=E.getSnapshotBeforeUpdate(t.elementType===t.type?g:nr(t.type,g),S);E.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){st(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return v=my,my=!1,v}function _l(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xm(t,n,o)}i=i.next}while(i!==r)}}function tf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wm(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xx(e){var t=e.alternate;t!==null&&(e.alternate=null,xx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pr],delete t[Kl],delete t[cm],delete t[D4],delete t[M4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wx(e){return e.tag===5||e.tag===3||e.tag===4}function gy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ld));else if(r!==4&&(e=e.child,e!==null))for(Sm(e,t,n),e=e.sibling;e!==null;)Sm(e,t,n),e=e.sibling}function Cm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cm(e,t,n),e=e.sibling;e!==null;)Cm(e,t,n),e=e.sibling}var Ot=null,ir=!1;function fi(e,t,n){for(n=n.child;n!==null;)Sx(e,t,n),n=n.sibling}function Sx(e,t,n){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(Gd,n)}catch{}switch(n.tag){case 5:Qt||_a(n,t);case 6:var r=Ot,i=ir;Ot=null,fi(e,t,n),Ot=r,ir=i,Ot!==null&&(ir?(e=Ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(ir?(e=Ot,n=n.stateNode,e.nodeType===8?zh(e.parentNode,n):e.nodeType===1&&zh(e,n),Ql(e)):zh(Ot,n.stateNode));break;case 4:r=Ot,i=ir,Ot=n.stateNode.containerInfo,ir=!0,fi(e,t,n),Ot=r,ir=i;break;case 0:case 11:case 14:case 15:if(!Qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xm(n,t,a),i=i.next}while(i!==r)}fi(e,t,n);break;case 1:if(!Qt&&(_a(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){st(n,t,s)}fi(e,t,n);break;case 21:fi(e,t,n);break;case 22:n.mode&1?(Qt=(r=Qt)||n.memoizedState!==null,fi(e,t,n),Qt=r):fi(e,t,n);break;default:fi(e,t,n)}}function vy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Z4),t.forEach(function(r){var i=c6.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ot=s.stateNode,ir=!1;break e;case 3:Ot=s.stateNode.containerInfo,ir=!0;break e;case 4:Ot=s.stateNode.containerInfo,ir=!0;break e}s=s.return}if(Ot===null)throw Error(Q(160));Sx(o,a,i),Ot=null,ir=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){st(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cx(t,e),t=t.sibling}function Cx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zn(t,e),Er(e),r&4){try{_l(3,e,e.return),tf(3,e)}catch(g){st(e,e.return,g)}try{_l(5,e,e.return)}catch(g){st(e,e.return,g)}}break;case 1:Zn(t,e),Er(e),r&512&&n!==null&&_a(n,n.return);break;case 5:if(Zn(t,e),Er(e),r&512&&n!==null&&_a(n,n.return),e.flags&32){var i=e.stateNode;try{Bl(i,"")}catch(g){st(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&GE(i,o),Yp(s,a);var u=Yp(s,o);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?JE(i,h):d==="dangerouslySetInnerHTML"?KE(i,h):d==="children"?Bl(i,h):Jg(i,d,h,u)}switch(s){case"input":Hp(i,o);break;case"textarea":qE(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?$a(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?$a(i,!!o.multiple,o.defaultValue,!0):$a(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kl]=o}catch(g){st(e,e.return,g)}}break;case 6:if(Zn(t,e),Er(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){st(e,e.return,g)}}break;case 3:if(Zn(t,e),Er(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ql(t.containerInfo)}catch(g){st(e,e.return,g)}break;case 4:Zn(t,e),Er(e);break;case 13:Zn(t,e),Er(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(O0=ut())),r&4&&vy(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qt=(u=Qt)||d,Zn(t,e),Qt=u):Zn(t,e),Er(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(h=Z=d;Z!==null;){switch(f=Z,p=f.child,f.tag){case 0:case 11:case 14:case 15:_l(4,f,f.return);break;case 1:_a(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){st(r,n,g)}}break;case 5:_a(f,f.return);break;case 22:if(f.memoizedState!==null){Ay(h);continue}}p!==null?(p.return=f,Z=p):Ay(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=XE("display",a))}catch(g){st(e,e.return,g)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){st(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zn(t,e),Er(e),r&4&&vy(e);break;case 21:break;default:Zn(t,e),Er(e)}}function Er(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wx(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bl(i,""),r.flags&=-33);var o=gy(e);Cm(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=gy(e);Sm(e,s,a);break;default:throw Error(Q(161))}}catch(l){st(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t6(e,t,n){Z=e,Tx(e)}function Tx(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ou;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Qt;s=ou;var u=Qt;if(ou=a,(Qt=l)&&!u)for(Z=i;Z!==null;)a=Z,l=a.child,a.tag===22&&a.memoizedState!==null?Ey(i):l!==null?(l.return=a,Z=l):Ey(i);for(;o!==null;)Z=o,Tx(o),o=o.sibling;Z=i,ou=s,Qt=u}yy(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):yy(e)}}function yy(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qt||tf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nr(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ny(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ny(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ql(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Qt||t.flags&512&&wm(t)}catch(f){st(t,t.return,f)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Ay(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Ey(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tf(4,t)}catch(l){st(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){st(t,i,l)}}var o=t.return;try{wm(t)}catch(l){st(t,o,l)}break;case 5:var a=t.return;try{wm(t)}catch(l){st(t,a,l)}}}catch(l){st(t,t.return,l)}if(t===e){Z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Z=s;break}Z=t.return}}var n6=Math.ceil,Ad=ri.ReactCurrentDispatcher,_0=ri.ReactCurrentOwner,Wn=ri.ReactCurrentBatchConfig,Oe=0,Ct=null,mt=null,kt=0,bn=0,Ra=Xi(0),Et=0,nc=null,Mo=0,nf=0,R0=0,Rl=null,sn=null,O0=0,ds=1/0,Hr=null,Ed=!1,Tm=null,Bi=null,au=!1,ki=null,bd=0,Ol=0,Im=null,Lu=-1,Fu=0;function Jt(){return Oe&6?ut():Lu!==-1?Lu:Lu=ut()}function zi(e){return e.mode&1?Oe&2&&kt!==0?kt&-kt:F4.transition!==null?(Fu===0&&(Fu=ub()),Fu):(e=De,e!==0||(e=window.event,e=e===void 0?16:vb(e.type)),e):1}function ur(e,t,n,r){if(50<Ol)throw Ol=0,Im=null,Error(Q(185));wc(e,n,r),(!(Oe&2)||e!==Ct)&&(e===Ct&&(!(Oe&2)&&(nf|=n),Et===4&&Ci(e,kt)),hn(e,r),n===1&&Oe===0&&!(t.mode&1)&&(ds=ut()+500,Jd&&Ji()))}function hn(e,t){var n=e.callbackNode;FT(e,t);var r=id(e,e===Ct?kt:0);if(r===0)n!==null&&_v(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_v(n),t===1)e.tag===0?L4(by.bind(null,e)):Db(by.bind(null,e)),k4(function(){!(Oe&6)&&Ji()}),n=null;else{switch(db(r)){case 1:n=r0;break;case 4:n=lb;break;case 16:n=rd;break;case 536870912:n=cb;break;default:n=rd}n=kx(n,Ix.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ix(e,t){if(Lu=-1,Fu=0,Oe&6)throw Error(Q(327));var n=e.callbackNode;if(Ua()&&e.callbackNode!==n)return null;var r=id(e,e===Ct?kt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xd(e,r);else{t=r;var i=Oe;Oe|=2;var o=_x();(Ct!==e||kt!==t)&&(Hr=null,ds=ut()+500,Po(e,t));do try{o6();break}catch(s){Px(e,s)}while(!0);g0(),Ad.current=o,Oe=i,mt!==null?t=0:(Ct=null,kt=0,t=Et)}if(t!==0){if(t===2&&(i=em(e),i!==0&&(r=i,t=Pm(e,i))),t===1)throw n=nc,Po(e,0),Ci(e,r),hn(e,ut()),n;if(t===6)Ci(e,r);else{if(i=e.current.alternate,!(r&30)&&!r6(i)&&(t=xd(e,r),t===2&&(o=em(e),o!==0&&(r=o,t=Pm(e,o))),t===1))throw n=nc,Po(e,0),Ci(e,r),hn(e,ut()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:uo(e,sn,Hr);break;case 3:if(Ci(e,r),(r&130023424)===r&&(t=O0+500-ut(),10<t)){if(id(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Jt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lm(uo.bind(null,e,sn,Hr),t);break}uo(e,sn,Hr);break;case 4:if(Ci(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-cr(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ut()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n6(r/1960))-r,10<r){e.timeoutHandle=lm(uo.bind(null,e,sn,Hr),r);break}uo(e,sn,Hr);break;case 5:uo(e,sn,Hr);break;default:throw Error(Q(329))}}}return hn(e,ut()),e.callbackNode===n?Ix.bind(null,e):null}function Pm(e,t){var n=Rl;return e.current.memoizedState.isDehydrated&&(Po(e,t).flags|=256),e=xd(e,t),e!==2&&(t=sn,sn=n,t!==null&&_m(t)),e}function _m(e){sn===null?sn=e:sn.push.apply(sn,e)}function r6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!fr(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ci(e,t){for(t&=~R0,t&=~nf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-cr(t),r=1<<n;e[n]=-1,t&=~r}}function by(e){if(Oe&6)throw Error(Q(327));Ua();var t=id(e,0);if(!(t&1))return hn(e,ut()),null;var n=xd(e,t);if(e.tag!==0&&n===2){var r=em(e);r!==0&&(t=r,n=Pm(e,r))}if(n===1)throw n=nc,Po(e,0),Ci(e,t),hn(e,ut()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,uo(e,sn,Hr),hn(e,ut()),null}function j0(e,t){var n=Oe;Oe|=1;try{return e(t)}finally{Oe=n,Oe===0&&(ds=ut()+500,Jd&&Ji())}}function Lo(e){ki!==null&&ki.tag===0&&!(Oe&6)&&Ua();var t=Oe;Oe|=1;var n=Wn.transition,r=De;try{if(Wn.transition=null,De=1,e)return e()}finally{De=r,Wn.transition=n,Oe=t,!(Oe&6)&&Ji()}}function N0(){bn=Ra.current,We(Ra)}function Po(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,N4(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(h0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cd();break;case 3:cs(),We(dn),We(Wt),x0();break;case 5:b0(r);break;case 4:cs();break;case 13:We(rt);break;case 19:We(rt);break;case 10:v0(r.type._context);break;case 22:case 23:N0()}n=n.return}if(Ct=e,mt=e=Vi(e.current,null),kt=bn=t,Et=0,nc=null,R0=nf=Mo=0,sn=Rl=null,mo!==null){for(t=0;t<mo.length;t++)if(n=mo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}mo=null}return e}function Px(e,t){do{var n=mt;try{if(g0(),$u.current=yd,vd){for(var r=it.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vd=!1}if(Do=0,xt=At=it=null,Pl=!1,Zl=0,_0.current=null,n===null||n.return===null){Et=1,nc=t,mt=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=kt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ly(a);if(p!==null){p.flags&=-257,cy(p,a,s,o,t),p.mode&1&&sy(o,u,t),t=p,l=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(l),t.updateQueue=g}else v.add(l);break e}else{if(!(t&1)){sy(o,u,t),k0();break e}l=Error(Q(426))}}else if(et&&s.mode&1){var S=ly(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),cy(S,a,s,o,t),p0(us(l,s));break e}}o=l=us(l,s),Et!==4&&(Et=2),Rl===null?Rl=[o]:Rl.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var E=dx(o,l,t);ty(o,E);break e;case 1:s=l;var A=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof A.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Bi===null||!Bi.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=fx(o,s,t);ty(o,x);break e}}o=o.return}while(o!==null)}Ox(n)}catch(w){t=w,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function _x(){var e=Ad.current;return Ad.current=yd,e===null?yd:e}function k0(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||!(Mo&268435455)&&!(nf&268435455)||Ci(Ct,kt)}function xd(e,t){var n=Oe;Oe|=2;var r=_x();(Ct!==e||kt!==t)&&(Hr=null,Po(e,t));do try{i6();break}catch(i){Px(e,i)}while(!0);if(g0(),Oe=n,Ad.current=r,mt!==null)throw Error(Q(261));return Ct=null,kt=0,Et}function i6(){for(;mt!==null;)Rx(mt)}function o6(){for(;mt!==null&&!RT();)Rx(mt)}function Rx(e){var t=Nx(e.alternate,e,bn);e.memoizedProps=e.pendingProps,t===null?Ox(e):mt=t,_0.current=null}function Ox(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J4(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Et=6,mt=null;return}}else if(n=X4(n,t,bn),n!==null){mt=n;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);Et===0&&(Et=5)}function uo(e,t,n){var r=De,i=Wn.transition;try{Wn.transition=null,De=1,a6(e,t,n,r)}finally{Wn.transition=i,De=r}return null}function a6(e,t,n,r){do Ua();while(ki!==null);if(Oe&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(UT(e,o),e===Ct&&(mt=Ct=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||au||(au=!0,kx(rd,function(){return Ua(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wn.transition,Wn.transition=null;var a=De;De=1;var s=Oe;Oe|=4,_0.current=null,e6(e,n),Cx(n,e),T4(am),od=!!om,am=om=null,e.current=n,t6(n),OT(),Oe=s,De=a,Wn.transition=o}else e.current=n;if(au&&(au=!1,ki=e,bd=i),o=e.pendingLanes,o===0&&(Bi=null),kT(n.stateNode),hn(e,ut()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ed)throw Ed=!1,e=Tm,Tm=null,e;return bd&1&&e.tag!==0&&Ua(),o=e.pendingLanes,o&1?e===Im?Ol++:(Ol=0,Im=e):Ol=0,Ji(),null}function Ua(){if(ki!==null){var e=db(bd),t=Wn.transition,n=De;try{if(Wn.transition=null,De=16>e?16:e,ki===null)var r=!1;else{if(e=ki,ki=null,bd=0,Oe&6)throw Error(Q(331));var i=Oe;for(Oe|=4,Z=e.current;Z!==null;){var o=Z,a=o.child;if(Z.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(Z=u;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:_l(8,d,o)}var h=d.child;if(h!==null)h.return=d,Z=h;else for(;Z!==null;){d=Z;var f=d.sibling,p=d.return;if(xx(d),d===u){Z=null;break}if(f!==null){f.return=p,Z=f;break}Z=p}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var S=g.sibling;g.sibling=null,g=S}while(g!==null)}}Z=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Z=a;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_l(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,Z=E;break e}Z=o.return}}var A=e.current;for(Z=A;Z!==null;){a=Z;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Z=y;else e:for(a=A;Z!==null;){if(s=Z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:tf(9,s)}}catch(w){st(s,s.return,w)}if(s===a){Z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,Z=x;break e}Z=s.return}}if(Oe=i,Ji(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(Gd,e)}catch{}r=!0}return r}finally{De=n,Wn.transition=t}}return!1}function xy(e,t,n){t=us(n,t),t=dx(e,t,1),e=Ui(e,t,1),t=Jt(),e!==null&&(wc(e,1,t),hn(e,t))}function st(e,t,n){if(e.tag===3)xy(e,e,n);else for(;t!==null;){if(t.tag===3){xy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bi===null||!Bi.has(r))){e=us(n,e),e=fx(t,e,1),t=Ui(t,e,1),e=Jt(),t!==null&&(wc(t,1,e),hn(t,e));break}}t=t.return}}function s6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Jt(),e.pingedLanes|=e.suspendedLanes&n,Ct===e&&(kt&n)===n&&(Et===4||Et===3&&(kt&130023424)===kt&&500>ut()-O0?Po(e,0):R0|=n),hn(e,t)}function jx(e,t){t===0&&(e.mode&1?(t=Kc,Kc<<=1,!(Kc&130023424)&&(Kc=4194304)):t=1);var n=Jt();e=ti(e,t),e!==null&&(wc(e,t,n),hn(e,n))}function l6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jx(e,n)}function c6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),jx(e,n)}var Nx;Nx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dn.current)un=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return un=!1,K4(e,t,n);un=!!(e.flags&131072)}else un=!1,et&&t.flags&1048576&&Mb(t,fd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mu(e,t),e=t.pendingProps;var i=as(t,Wt.current);Fa(t,n),i=S0(null,t,r,e,i,n);var o=C0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fn(r)?(o=!0,ud(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,A0(t),i.updater=ef,t.stateNode=i,i._reactInternals=t,mm(t,r,e,n),t=ym(null,t,r,!0,o,n)):(t.tag=0,et&&o&&f0(t),Xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=d6(r),e=nr(r,e),i){case 0:t=vm(null,t,r,e,n);break e;case 1:t=fy(null,t,r,e,n);break e;case 11:t=uy(null,t,r,e,n);break e;case 14:t=dy(null,t,r,nr(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nr(r,i),vm(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nr(r,i),fy(e,t,r,i,n);case 3:e:{if(gx(t),e===null)throw Error(Q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vb(e,t),md(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=us(Error(Q(423)),t),t=hy(e,t,r,n,i);break e}else if(r!==i){i=us(Error(Q(424)),t),t=hy(e,t,r,n,i);break e}else for(wn=Fi(t.stateNode.containerInfo.firstChild),Tn=t,et=!0,ar=null,n=Bb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){t=ni(e,t,n);break e}Xt(e,t,r,n)}t=t.child}return t;case 5:return Hb(t),e===null&&fm(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,sm(r,i)?a=null:o!==null&&sm(r,o)&&(t.flags|=32),mx(e,t),Xt(e,t,a,n),t.child;case 6:return e===null&&fm(t),null;case 13:return vx(e,t,n);case 4:return E0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ls(t,null,r,n):Xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nr(r,i),uy(e,t,r,i,n);case 7:return Xt(e,t,t.pendingProps,n),t.child;case 8:return Xt(e,t,t.pendingProps.children,n),t.child;case 12:return Xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Fe(hd,r._currentValue),r._currentValue=a,o!==null)if(fr(o.value,a)){if(o.children===i.children&&!dn.current){t=ni(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Xr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hm(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Q(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),hm(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fa(t,n),i=qn(i),r=r(i),t.flags|=1,Xt(e,t,r,n),t.child;case 14:return r=t.type,i=nr(r,t.pendingProps),i=nr(r.type,i),dy(e,t,r,i,n);case 15:return hx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nr(r,i),Mu(e,t),t.tag=1,fn(r)?(e=!0,ud(t)):e=!1,Fa(t,n),ux(t,r,i),mm(t,r,i,n),ym(null,t,r,!0,e,n);case 19:return yx(e,t,n);case 22:return px(e,t,n)}throw Error(Q(156,t.tag))};function kx(e,t){return sb(e,t)}function u6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,r){return new u6(e,t,n,r)}function $0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d6(e){if(typeof e=="function")return $0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===e0)return 11;if(e===t0)return 14}return 2}function Vi(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uu(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$0(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ea:return _o(n.children,i,o,t);case Zg:a=8,i|=8;break;case Fp:return e=Hn(12,n,t,i|2),e.elementType=Fp,e.lanes=o,e;case Up:return e=Hn(13,n,t,i),e.elementType=Up,e.lanes=o,e;case Bp:return e=Hn(19,n,t,i),e.elementType=Bp,e.lanes=o,e;case HE:return rf(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zE:a=10;break e;case VE:a=9;break e;case e0:a=11;break e;case t0:a=14;break e;case bi:a=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=Hn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _o(e,t,n,r){return e=Hn(7,e,r,t),e.lanes=n,e}function rf(e,t,n,r){return e=Hn(22,e,r,t),e.elementType=HE,e.lanes=n,e.stateNode={isHidden:!1},e}function Kh(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function Xh(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f6(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oh(0),this.expirationTimes=Oh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function D0(e,t,n,r,i,o,a,s,l){return e=new f6(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Hn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},A0(o),e}function h6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Aa,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $x(e){if(!e)return qi;e=e._reactInternals;e:{if(qo(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(fn(n))return $b(e,n,t)}return t}function Dx(e,t,n,r,i,o,a,s,l){return e=D0(n,r,!0,e,i,o,a,s,l),e.context=$x(null),n=e.current,r=Jt(),i=zi(n),o=Xr(r,i),o.callback=t??null,Ui(n,o,i),e.current.lanes=i,wc(e,i,r),hn(e,r),e}function of(e,t,n,r){var i=t.current,o=Jt(),a=zi(i);return n=$x(n),t.context===null?t.context=n:t.pendingContext=n,t=Xr(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ui(i,t,a),e!==null&&(ur(e,i,a,o),ku(e,i,a)),a}function wd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function M0(e,t){wy(e,t),(e=e.alternate)&&wy(e,t)}function p6(){return null}var Mx=typeof reportError=="function"?reportError:function(e){console.error(e)};function L0(e){this._internalRoot=e}af.prototype.render=L0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));of(e,t,null,null)};af.prototype.unmount=L0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lo(function(){of(null,e,null,null)}),t[ei]=null}};function af(e){this._internalRoot=e}af.prototype.unstable_scheduleHydration=function(e){if(e){var t=pb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Si.length&&t!==0&&t<Si[n].priority;n++);Si.splice(n,0,e),n===0&&gb(e)}};function F0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function m6(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wd(a);o.call(u)}}var a=Dx(t,r,e,0,null,!1,!1,"",Sy);return e._reactRootContainer=a,e[ei]=a.current,ql(e.nodeType===8?e.parentNode:e),Lo(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=wd(l);s.call(u)}}var l=D0(e,0,!1,null,null,!1,!1,"",Sy);return e._reactRootContainer=l,e[ei]=l.current,ql(e.nodeType===8?e.parentNode:e),Lo(function(){of(t,l,n,r)}),l}function lf(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=wd(a);s.call(l)}}of(t,a,e,i)}else a=m6(n,t,e,i,r);return wd(a)}fb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hl(t.pendingLanes);n!==0&&(i0(t,n|1),hn(t,ut()),!(Oe&6)&&(ds=ut()+500,Ji()))}break;case 13:Lo(function(){var r=ti(e,1);if(r!==null){var i=Jt();ur(r,e,1,i)}}),M0(e,1)}};o0=function(e){if(e.tag===13){var t=ti(e,134217728);if(t!==null){var n=Jt();ur(t,e,134217728,n)}M0(e,134217728)}};hb=function(e){if(e.tag===13){var t=zi(e),n=ti(e,t);if(n!==null){var r=Jt();ur(n,e,t,r)}M0(e,t)}};pb=function(){return De};mb=function(e,t){var n=De;try{return De=e,t()}finally{De=n}};Xp=function(e,t,n){switch(t){case"input":if(Hp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xd(r);if(!i)throw Error(Q(90));WE(r),Hp(r,i)}}}break;case"textarea":qE(e,n);break;case"select":t=n.value,t!=null&&$a(e,!!n.multiple,t,!1)}};tb=j0;nb=Lo;var g6={usingClientEntryPoint:!1,Events:[Cc,Sa,Xd,ZE,eb,j0]},Ws={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v6={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ob(e),e===null?null:e.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||p6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Gd=su.inject(v6),_r=su}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g6;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!F0(t))throw Error(Q(200));return h6(e,t,null,n)};_n.createRoot=function(e,t){if(!F0(e))throw Error(Q(299));var n=!1,r="",i=Mx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=D0(e,1,!1,null,null,n,!1,r,i),e[ei]=t.current,ql(e.nodeType===8?e.parentNode:e),new L0(t)};_n.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=ob(t),e=e===null?null:e.stateNode,e};_n.flushSync=function(e){return Lo(e)};_n.hydrate=function(e,t,n){if(!sf(t))throw Error(Q(200));return lf(null,e,t,!0,n)};_n.hydrateRoot=function(e,t,n){if(!F0(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Mx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Dx(t,null,e,1,n??null,i,!1,o,a),e[ei]=t.current,ql(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new af(t)};_n.render=function(e,t,n){if(!sf(t))throw Error(Q(200));return lf(null,e,t,!1,n)};_n.unmountComponentAtNode=function(e){if(!sf(e))throw Error(Q(40));return e._reactRootContainer?(Lo(function(){lf(null,null,e,!1,function(){e._reactRootContainer=null,e[ei]=null})}),!0):!1};_n.unstable_batchedUpdates=j0;_n.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sf(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return lf(e,t,n,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function Lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lx)}catch(e){console.error(e)}}Lx(),LE.exports=_n;var Is=LE.exports;const Fx=Pn(Is),y6=Qg({__proto__:null,default:Fx},[Is]);var Cy=Is;Mp.createRoot=Cy.createRoot,Mp.hydrateRoot=Cy.hydrateRoot;var Ic=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},fs=typeof window>"u"||"Deno"in globalThis;function Fn(){}function A6(e,t){return typeof e=="function"?e(t):e}function Rm(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ux(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ba(e,t){return typeof e=="function"?e(t):e}function Ty(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:s}=e;if(a){if(r){if(t.queryHash!==U0(a,t.options))return!1}else if(!ic(t.queryKey,a))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||i&&i!==t.state.fetchStatus||o&&!o(t))}function Iy(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(rc(t.options.mutationKey)!==rc(o))return!1}else if(!ic(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function U0(e,t){return((t==null?void 0:t.queryKeyHashFn)||rc)(e)}function rc(e){return JSON.stringify(e,(t,n)=>jm(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function ic(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!ic(e[n],t[n])):!1}function Bx(e,t){if(e===t)return e;const n=Py(e)&&Py(t);if(n||jm(e)&&jm(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),a=o.length,s=n?[]:{};let l=0;for(let u=0;u<a;u++){const d=n?u:o[u];(!n&&r.includes(d)||n)&&e[d]===void 0&&t[d]===void 0?(s[d]=void 0,l++):(s[d]=Bx(e[d],t[d]),s[d]===e[d]&&e[d]!==void 0&&l++)}return i===a&&l===i?e:s}return t}function Om(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Py(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function jm(e){if(!_y(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!_y(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function _y(e){return Object.prototype.toString.call(e)==="[object Object]"}function E6(e){return new Promise(t=>{setTimeout(t,e)})}function Nm(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Bx(e,t):t}function b6(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function x6(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var zx=Symbol(),Vx=(e,t)=>!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===zx?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn,bo,Ii,Wa,yE,w6=(yE=class extends Ic{constructor(){super();me(this,bo);me(this,Ii);me(this,Wa);re(this,Wa,t=>{if(!fs&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){j(this,Ii)||this.setEventListener(j(this,Wa))}onUnsubscribe(){var t;this.hasListeners()||((t=j(this,Ii))==null||t.call(this),re(this,Ii,void 0))}setEventListener(t){var n;re(this,Wa,t),(n=j(this,Ii))==null||n.call(this),re(this,Ii,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){j(this,bo)!==t&&(re(this,bo,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof j(this,bo)=="boolean"?j(this,bo):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},bo=new WeakMap,Ii=new WeakMap,Wa=new WeakMap,yE),B0=new w6,Ga,Pi,qa,AE,S6=(AE=class extends Ic{constructor(){super();me(this,Ga,!0);me(this,Pi);me(this,qa);re(this,qa,t=>{if(!fs&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){j(this,Pi)||this.setEventListener(j(this,qa))}onUnsubscribe(){var t;this.hasListeners()||((t=j(this,Pi))==null||t.call(this),re(this,Pi,void 0))}setEventListener(t){var n;re(this,qa,t),(n=j(this,Pi))==null||n.call(this),re(this,Pi,t(this.setOnline.bind(this)))}setOnline(t){j(this,Ga)!==t&&(re(this,Ga,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return j(this,Ga)}},Ga=new WeakMap,Pi=new WeakMap,qa=new WeakMap,AE),Sd=new S6;function C6(e){return Math.min(1e3*2**e,3e4)}function Hx(e){return(e??"online")==="online"?Sd.isOnline():!0}var Qx=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Jh(e){return e instanceof Qx}function Wx(e){let t=!1,n=0,r=!1,i,o,a;const s=new Promise((E,A)=>{o=E,a=A}),l=E=>{var A;r||(v(new Qx(E)),(A=e.abort)==null||A.call(e))},u=()=>{t=!0},d=()=>{t=!1},h=()=>B0.isFocused()&&(e.networkMode==="always"||Sd.isOnline())&&e.canRun(),f=()=>Hx(e.networkMode)&&e.canRun(),p=E=>{var A;r||(r=!0,(A=e.onSuccess)==null||A.call(e,E),i==null||i(),o(E))},v=E=>{var A;r||(r=!0,(A=e.onError)==null||A.call(e,E),i==null||i(),a(E))},g=()=>new Promise(E=>{var A;i=y=>{(r||h())&&E(y)},(A=e.onPause)==null||A.call(e)}).then(()=>{var E;i=void 0,r||(E=e.onContinue)==null||E.call(e)}),S=()=>{if(r)return;let E;const A=n===0?e.initialPromise:void 0;try{E=A??e.fn()}catch(y){E=Promise.reject(y)}Promise.resolve(E).then(p).catch(y=>{var T;if(r)return;const x=e.retry??(fs?0:3),w=e.retryDelay??C6,C=typeof w=="function"?w(n,y):w,b=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,y);if(t||!b){v(y);return}n++,(T=e.onFail)==null||T.call(e,n,y),E6(C).then(()=>h()?void 0:g()).then(()=>{t?v(y):S()})})};return{promise:s,cancel:l,continue:()=>(i==null||i(),s),cancelRetry:u,continueRetry:d,canStart:f,start:()=>(f()?S():g().then(S),s)}}function T6(){let e=[],t=0,n=f=>{f()},r=f=>{f()},i=f=>setTimeout(f,0);const o=f=>{i=f},a=f=>{let p;t++;try{p=f()}finally{t--,t||u()}return p},s=f=>{t?e.push(f):i(()=>{n(f)})},l=f=>(...p)=>{s(()=>{f(...p)})},u=()=>{const f=e;e=[],f.length&&i(()=>{r(()=>{f.forEach(p=>{n(p)})})})};return{batch:a,batchCalls:l,schedule:s,setNotifyFunction:f=>{n=f},setBatchNotifyFunction:f=>{r=f},setScheduler:o}}var Nt=T6(),xo,EE,Gx=(EE=class{constructor(){me(this,xo)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Rm(this.gcTime)&&re(this,xo,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(fs?1/0:5*60*1e3))}clearGcTimeout(){j(this,xo)&&(clearTimeout(j(this,xo)),re(this,xo,void 0))}},xo=new WeakMap,EE),Ya,Ka,Ln,Ht,yc,wo,rr,Vr,bE,I6=(bE=class extends Gx{constructor(t){super();me(this,rr);me(this,Ya);me(this,Ka);me(this,Ln);me(this,Ht);me(this,yc);me(this,wo);re(this,wo,!1),re(this,yc,t.defaultOptions),this.setOptions(t.options),this.observers=[],re(this,Ln,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,re(this,Ya,t.state||P6(this.options)),this.state=j(this,Ya),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=j(this,Ht))==null?void 0:t.promise}setOptions(t){this.options={...j(this,yc),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&j(this,Ln).remove(this)}setData(t,n){const r=Nm(this.state.data,t,this.options);return Pe(this,rr,Vr).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Pe(this,rr,Vr).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=j(this,Ht))==null?void 0:r.promise;return(i=j(this,Ht))==null||i.cancel(t),n?n.then(Fn).catch(Fn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(j(this,Ya))}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Ux(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=j(this,Ht))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=j(this,Ht))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),j(this,Ln).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(j(this,Ht)&&(j(this,wo)?j(this,Ht).cancel({revert:!0}):j(this,Ht).cancelRetry()),this.scheduleGc()),j(this,Ln).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Pe(this,rr,Vr).call(this,{type:"invalidate"})}fetch(t,n){var l,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(j(this,Ht))return j(this,Ht).continueRetry(),j(this,Ht).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(f=>f.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(re(this,wo,!0),r.signal)})},o=()=>{const h=Vx(this.options,n),f={queryKey:this.queryKey,meta:this.meta};return i(f),re(this,wo,!1),this.options.persister?this.options.persister(h,f,this):h(f)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};i(a),(l=this.options.behavior)==null||l.onFetch(a,this),re(this,Ka,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Pe(this,rr,Vr).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta});const s=h=>{var f,p,v,g;Jh(h)&&h.silent||Pe(this,rr,Vr).call(this,{type:"error",error:h}),Jh(h)||((p=(f=j(this,Ln).config).onError)==null||p.call(f,h,this),(g=(v=j(this,Ln).config).onSettled)==null||g.call(v,this.state.data,h,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return re(this,Ht,Wx({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var f,p,v,g;if(h===void 0){s(new Error(`${this.queryHash} data is undefined`));return}this.setData(h),(p=(f=j(this,Ln).config).onSuccess)==null||p.call(f,h,this),(g=(v=j(this,Ln).config).onSettled)==null||g.call(v,h,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:s,onFail:(h,f)=>{Pe(this,rr,Vr).call(this,{type:"failed",failureCount:h,error:f})},onPause:()=>{Pe(this,rr,Vr).call(this,{type:"pause"})},onContinue:()=>{Pe(this,rr,Vr).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),j(this,Ht).start()}},Ya=new WeakMap,Ka=new WeakMap,Ln=new WeakMap,Ht=new WeakMap,yc=new WeakMap,wo=new WeakMap,rr=new WeakSet,Vr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...qx(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Jh(i)&&i.revert&&j(this,Ka)?{...j(this,Ka),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Nt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),j(this,Ln).notify({query:this,type:"updated",action:t})})},bE);function qx(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Hx(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function P6(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var wr,xE,_6=(xE=class extends Ic{constructor(t={}){super();me(this,wr);this.config=t,re(this,wr,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??U0(i,n);let a=this.get(o);return a||(a=new I6({cache:this,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){j(this,wr).has(t.queryHash)||(j(this,wr).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=j(this,wr).get(t.queryHash);n&&(t.destroy(),n===t&&j(this,wr).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Nt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return j(this,wr).get(t)}getAll(){return[...j(this,wr).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Ty(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Ty(t,r)):n}notify(t){Nt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Nt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Nt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},wr=new WeakMap,xE),Sr,Yt,So,Cr,vi,wE,R6=(wE=class extends Gx{constructor(t){super();me(this,Cr);me(this,Sr);me(this,Yt);me(this,So);this.mutationId=t.mutationId,re(this,Yt,t.mutationCache),re(this,Sr,[]),this.state=t.state||O6(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){j(this,Sr).includes(t)||(j(this,Sr).push(t),this.clearGcTimeout(),j(this,Yt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){re(this,Sr,j(this,Sr).filter(n=>n!==t)),this.scheduleGc(),j(this,Yt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){j(this,Sr).length||(this.state.status==="pending"?this.scheduleGc():j(this,Yt).remove(this))}continue(){var t;return((t=j(this,So))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,o,a,s,l,u,d,h,f,p,v,g,S,E,A,y,x,w,C,b;re(this,So,Wx({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(T,_)=>{Pe(this,Cr,vi).call(this,{type:"failed",failureCount:T,error:_})},onPause:()=>{Pe(this,Cr,vi).call(this,{type:"pause"})},onContinue:()=>{Pe(this,Cr,vi).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>j(this,Yt).canRun(this)}));const n=this.state.status==="pending",r=!j(this,So).canStart();try{if(!n){Pe(this,Cr,vi).call(this,{type:"pending",variables:t,isPaused:r}),await((o=(i=j(this,Yt).config).onMutate)==null?void 0:o.call(i,t,this));const _=await((s=(a=this.options).onMutate)==null?void 0:s.call(a,t));_!==this.state.context&&Pe(this,Cr,vi).call(this,{type:"pending",context:_,variables:t,isPaused:r})}const T=await j(this,So).start();return await((u=(l=j(this,Yt).config).onSuccess)==null?void 0:u.call(l,T,t,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,T,t,this.state.context)),await((p=(f=j(this,Yt).config).onSettled)==null?void 0:p.call(f,T,null,this.state.variables,this.state.context,this)),await((g=(v=this.options).onSettled)==null?void 0:g.call(v,T,null,t,this.state.context)),Pe(this,Cr,vi).call(this,{type:"success",data:T}),T}catch(T){try{throw await((E=(S=j(this,Yt).config).onError)==null?void 0:E.call(S,T,t,this.state.context,this)),await((y=(A=this.options).onError)==null?void 0:y.call(A,T,t,this.state.context)),await((w=(x=j(this,Yt).config).onSettled)==null?void 0:w.call(x,void 0,T,this.state.variables,this.state.context,this)),await((b=(C=this.options).onSettled)==null?void 0:b.call(C,void 0,T,t,this.state.context)),T}finally{Pe(this,Cr,vi).call(this,{type:"error",error:T})}}finally{j(this,Yt).runNext(this)}}},Sr=new WeakMap,Yt=new WeakMap,So=new WeakMap,Cr=new WeakSet,vi=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Nt.batch(()=>{j(this,Sr).forEach(r=>{r.onMutationUpdate(t)}),j(this,Yt).notify({mutation:this,type:"updated",action:t})})},wE);function O6(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var En,Ac,SE,j6=(SE=class extends Ic{constructor(t={}){super();me(this,En);me(this,Ac);this.config=t,re(this,En,new Map),re(this,Ac,Date.now())}build(t,n,r){const i=new R6({mutationCache:this,mutationId:++Hc(this,Ac)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){const n=lu(t),r=j(this,En).get(n)??[];r.push(t),j(this,En).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=lu(t);if(j(this,En).has(n)){const i=(r=j(this,En).get(n))==null?void 0:r.filter(o=>o!==t);i&&(i.length===0?j(this,En).delete(n):j(this,En).set(n,i))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=j(this,En).get(lu(t)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=j(this,En).get(lu(t)))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Nt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...j(this,En).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Iy(n,r))}findAll(t={}){return this.getAll().filter(n=>Iy(t,n))}notify(t){Nt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Nt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Fn))))}},En=new WeakMap,Ac=new WeakMap,SE);function lu(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function N6(e){return{onFetch:(t,n)=>{const r=async()=>{var v,g,S,E,A;const i=t.options,o=(S=(g=(v=t.fetchOptions)==null?void 0:v.meta)==null?void 0:g.fetchMore)==null?void 0:S.direction,a=((E=t.state.data)==null?void 0:E.pages)||[],s=((A=t.state.data)==null?void 0:A.pageParams)||[],l={pages:[],pageParams:[]};let u=!1;const d=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},h=Vx(t.options,t.fetchOptions),f=async(y,x,w)=>{if(u)return Promise.reject();if(x==null&&y.pages.length)return Promise.resolve(y);const C={queryKey:t.queryKey,pageParam:x,direction:w?"backward":"forward",meta:t.options.meta};d(C);const b=await h(C),{maxPages:T}=t.options,_=w?x6:b6;return{pages:_(y.pages,b,T),pageParams:_(y.pageParams,x,T)}};let p;if(o&&a.length){const y=o==="backward",x=y?k6:Ry,w={pages:a,pageParams:s},C=x(i,w);p=await f(w,C,y)}else{p=await f(l,s[0]??i.initialPageParam);const y=e??a.length;for(let x=1;x<y;x++){const w=Ry(i,p);p=await f(p,w)}}return p};t.options.persister?t.fetchFn=()=>{var i,o;return(o=(i=t.options).persister)==null?void 0:o.call(i,r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=r}}}function Ry(e,{pages:t,pageParams:n}){const r=t.length-1;return e.getNextPageParam(t[r],t,n[r],n)}function k6(e,{pages:t,pageParams:n}){var r;return(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n)}var at,_i,Ri,Xa,Ja,Oi,Za,es,CE,$6=(CE=class{constructor(e={}){me(this,at);me(this,_i);me(this,Ri);me(this,Xa);me(this,Ja);me(this,Oi);me(this,Za);me(this,es);re(this,at,e.queryCache||new _6),re(this,_i,e.mutationCache||new j6),re(this,Ri,e.defaultOptions||{}),re(this,Xa,new Map),re(this,Ja,new Map),re(this,Oi,0)}mount(){Hc(this,Oi)._++,j(this,Oi)===1&&(re(this,Za,B0.subscribe(async e=>{e&&(await this.resumePausedMutations(),j(this,at).onFocus())})),re(this,es,Sd.subscribe(async e=>{e&&(await this.resumePausedMutations(),j(this,at).onOnline())})))}unmount(){var e,t;Hc(this,Oi)._--,j(this,Oi)===0&&((e=j(this,Za))==null||e.call(this),re(this,Za,void 0),(t=j(this,es))==null||t.call(this),re(this,es,void 0))}isFetching(e){return j(this,at).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return j(this,_i).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=j(this,at).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=j(this,at).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Ba(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return j(this,at).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=j(this,at).get(r.queryHash),o=i==null?void 0:i.state.data,a=A6(t,o);if(a!==void 0)return j(this,at).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Nt.batch(()=>j(this,at).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=j(this,at).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=j(this,at);Nt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=j(this,at),r={type:"active",...e};return Nt.batch(()=>(n.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=Nt.batch(()=>j(this,at).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(Fn).catch(Fn)}invalidateQueries(e={},t={}){return Nt.batch(()=>{if(j(this,at).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=Nt.batch(()=>j(this,at).findAll(e).filter(i=>!i.isDisabled()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(Fn)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(Fn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=j(this,at).build(this,t);return n.isStaleByTime(Ba(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Fn).catch(Fn)}fetchInfiniteQuery(e){return e.behavior=N6(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Fn).catch(Fn)}resumePausedMutations(){return Sd.isOnline()?j(this,_i).resumePausedMutations():Promise.resolve()}getQueryCache(){return j(this,at)}getMutationCache(){return j(this,_i)}getDefaultOptions(){return j(this,Ri)}setDefaultOptions(e){re(this,Ri,e)}setQueryDefaults(e,t){j(this,Xa).set(rc(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...j(this,Xa).values()];let n={};return t.forEach(r=>{ic(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){j(this,Ja).set(rc(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...j(this,Ja).values()];let n={};return t.forEach(r=>{ic(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...j(this,Ri).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=U0(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===zx&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...j(this,Ri).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){j(this,at).clear(),j(this,_i).clear()}},at=new WeakMap,_i=new WeakMap,Ri=new WeakMap,Xa=new WeakMap,Ja=new WeakMap,Oi=new WeakMap,Za=new WeakMap,es=new WeakMap,CE),an,ke,Ec,Kt,Co,ts,Tr,bc,ns,rs,To,Io,ji,is,Ne,ml,km,$m,Dm,Mm,Lm,Fm,Um,Yx,TE,D6=(TE=class extends Ic{constructor(t,n){super();me(this,Ne);me(this,an);me(this,ke);me(this,Ec);me(this,Kt);me(this,Co);me(this,ts);me(this,Tr);me(this,bc);me(this,ns);me(this,rs);me(this,To);me(this,Io);me(this,ji);me(this,is,new Set);this.options=n,re(this,an,t),re(this,Tr,null),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(j(this,ke).addObserver(this),Oy(j(this,ke),this.options)?Pe(this,Ne,ml).call(this):this.updateResult(),Pe(this,Ne,Mm).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Bm(j(this,ke),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Bm(j(this,ke),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Pe(this,Ne,Lm).call(this),Pe(this,Ne,Fm).call(this),j(this,ke).removeObserver(this)}setOptions(t,n){const r=this.options,i=j(this,ke);if(this.options=j(this,an).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");Pe(this,Ne,Um).call(this),j(this,ke).setOptions(this.options),r._defaulted&&!Om(this.options,r)&&j(this,an).getQueryCache().notify({type:"observerOptionsUpdated",query:j(this,ke),observer:this});const o=this.hasListeners();o&&jy(j(this,ke),i,this.options,r)&&Pe(this,Ne,ml).call(this),this.updateResult(n),o&&(j(this,ke)!==i||this.options.enabled!==r.enabled||Ba(this.options.staleTime,j(this,ke))!==Ba(r.staleTime,j(this,ke)))&&Pe(this,Ne,km).call(this);const a=Pe(this,Ne,$m).call(this);o&&(j(this,ke)!==i||this.options.enabled!==r.enabled||a!==j(this,ji))&&Pe(this,Ne,Dm).call(this,a)}getOptimisticResult(t){const n=j(this,an).getQueryCache().build(j(this,an),t),r=this.createResult(n,t);return L6(this,r)&&(re(this,Kt,r),re(this,ts,this.options),re(this,Co,j(this,ke).state)),r}getCurrentResult(){return j(this,Kt)}trackResult(t,n){const r={};return Object.keys(t).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),n==null||n(i),t[i])})}),r}trackProp(t){j(this,is).add(t)}getCurrentQuery(){return j(this,ke)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=j(this,an).defaultQueryOptions(t),r=j(this,an).getQueryCache().build(j(this,an),n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){return Pe(this,Ne,ml).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),j(this,Kt)))}createResult(t,n){var b;const r=j(this,ke),i=this.options,o=j(this,Kt),a=j(this,Co),s=j(this,ts),u=t!==r?t.state:j(this,Ec),{state:d}=t;let h={...d},f=!1,p;if(n._optimisticResults){const T=this.hasListeners(),_=!T&&Oy(t,n),$=T&&jy(t,r,n,i);(_||$)&&(h={...h,...qx(d.data,t.options)}),n._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:v,errorUpdatedAt:g,status:S}=h;if(n.select&&h.data!==void 0)if(o&&h.data===(a==null?void 0:a.data)&&n.select===j(this,bc))p=j(this,ns);else try{re(this,bc,n.select),p=n.select(h.data),p=Nm(o==null?void 0:o.data,p,n),re(this,ns,p),re(this,Tr,null)}catch(T){re(this,Tr,T)}else p=h.data;if(n.placeholderData!==void 0&&p===void 0&&S==="pending"){let T;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(s==null?void 0:s.placeholderData))T=o.data;else if(T=typeof n.placeholderData=="function"?n.placeholderData((b=j(this,rs))==null?void 0:b.state.data,j(this,rs)):n.placeholderData,n.select&&T!==void 0)try{T=n.select(T),re(this,Tr,null)}catch(_){re(this,Tr,_)}T!==void 0&&(S="success",p=Nm(o==null?void 0:o.data,T,n),f=!0)}j(this,Tr)&&(v=j(this,Tr),p=j(this,ns),g=Date.now(),S="error");const E=h.fetchStatus==="fetching",A=S==="pending",y=S==="error",x=A&&E,w=p!==void 0;return{status:S,fetchStatus:h.fetchStatus,isPending:A,isSuccess:S==="success",isError:y,isInitialLoading:x,isLoading:x,data:p,dataUpdatedAt:h.dataUpdatedAt,error:v,errorUpdatedAt:g,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>u.dataUpdateCount||h.errorUpdateCount>u.errorUpdateCount,isFetching:E,isRefetching:E&&!A,isLoadingError:y&&!w,isPaused:h.fetchStatus==="paused",isPlaceholderData:f,isRefetchError:y&&w,isStale:z0(t,n),refetch:this.refetch}}updateResult(t){const n=j(this,Kt),r=this.createResult(j(this,ke),this.options);if(re(this,Co,j(this,ke).state),re(this,ts,this.options),j(this,Co).data!==void 0&&re(this,rs,j(this,ke)),Om(r,n))return;re(this,Kt,r);const i={},o=()=>{if(!n)return!0;const{notifyOnChangeProps:a}=this.options,s=typeof a=="function"?a():a;if(s==="all"||!s&&!j(this,is).size)return!0;const l=new Set(s??j(this,is));return this.options.throwOnError&&l.add("error"),Object.keys(j(this,Kt)).some(u=>{const d=u;return j(this,Kt)[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),Pe(this,Ne,Yx).call(this,{...i,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Pe(this,Ne,Mm).call(this)}},an=new WeakMap,ke=new WeakMap,Ec=new WeakMap,Kt=new WeakMap,Co=new WeakMap,ts=new WeakMap,Tr=new WeakMap,bc=new WeakMap,ns=new WeakMap,rs=new WeakMap,To=new WeakMap,Io=new WeakMap,ji=new WeakMap,is=new WeakMap,Ne=new WeakSet,ml=function(t){Pe(this,Ne,Um).call(this);let n=j(this,ke).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Fn)),n},km=function(){Pe(this,Ne,Lm).call(this);const t=Ba(this.options.staleTime,j(this,ke));if(fs||j(this,Kt).isStale||!Rm(t))return;const r=Ux(j(this,Kt).dataUpdatedAt,t)+1;re(this,To,setTimeout(()=>{j(this,Kt).isStale||this.updateResult()},r))},$m=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(j(this,ke)):this.options.refetchInterval)??!1},Dm=function(t){Pe(this,Ne,Fm).call(this),re(this,ji,t),!(fs||this.options.enabled===!1||!Rm(j(this,ji))||j(this,ji)===0)&&re(this,Io,setInterval(()=>{(this.options.refetchIntervalInBackground||B0.isFocused())&&Pe(this,Ne,ml).call(this)},j(this,ji)))},Mm=function(){Pe(this,Ne,km).call(this),Pe(this,Ne,Dm).call(this,Pe(this,Ne,$m).call(this))},Lm=function(){j(this,To)&&(clearTimeout(j(this,To)),re(this,To,void 0))},Fm=function(){j(this,Io)&&(clearInterval(j(this,Io)),re(this,Io,void 0))},Um=function(){const t=j(this,an).getQueryCache().build(j(this,an),this.options);if(t===j(this,ke))return;const n=j(this,ke);re(this,ke,t),re(this,Ec,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},Yx=function(t){Nt.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(j(this,Kt))}),j(this,an).getQueryCache().notify({query:j(this,ke),type:"observerResultsUpdated"})})},TE);function M6(e,t){return t.enabled!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Oy(e,t){return M6(e,t)||e.state.data!==void 0&&Bm(e,t,t.refetchOnMount)}function Bm(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&z0(e,t)}return!1}function jy(e,t,n,r){return(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&z0(e,n)}function z0(e,t){return t.enabled!==!1&&e.isStaleByTime(Ba(t.staleTime,e))}function L6(e,t){return!Om(e.getCurrentResult(),t)}var Kx=m.createContext(void 0),F6=e=>{const t=m.useContext(Kx);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},U6=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),c.jsx(Kx.Provider,{value:e,children:t})),Xx=m.createContext(!1),B6=()=>m.useContext(Xx);Xx.Provider;function z6(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var V6=m.createContext(z6()),H6=()=>m.useContext(V6);function Q6(e,t){return typeof e=="function"?e(...t):!!e}var W6=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},G6=e=>{m.useEffect(()=>{e.clearReset()},[e])},q6=({result:e,errorResetBoundary:t,throwOnError:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&Q6(n,[e.error,r]),Y6=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},K6=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,X6=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function J6(e,t,n){const r=F6(),i=B6(),o=H6(),a=r.defaultQueryOptions(e);a._optimisticResults=i?"isRestoring":"optimistic",Y6(a),W6(a,o),G6(o);const[s]=m.useState(()=>new t(r,a)),l=s.getOptimisticResult(a);if(m.useSyncExternalStore(m.useCallback(u=>{const d=i?()=>{}:s.subscribe(Nt.batchCalls(u));return s.updateResult(),d},[s,i]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),m.useEffect(()=>{s.setOptions(a,{listeners:!1})},[a,s]),K6(a,l))throw X6(a,s,o);if(q6({result:l,errorResetBoundary:o,throwOnError:a.throwOnError,query:r.getQueryCache().get(a.queryHash)}))throw l.error;return a.notifyOnChangeProps?l:s.trackResult(l)}function gt(e,t){return J6(e,D6)}var Z6=function(){return null},Ue=function(){return Ue=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ue.apply(this,arguments)};function Jx(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Fo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var eI=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<a.length;u++){var d=a[u];if(!l(d))return!1;var h=t[d],f=n[d];if(o=r?r.call(i,h,f,d):void 0,o===!1||o===void 0&&h!==f)return!1}return!0};const tI=Pn(eI);var He="-ms-",jl="-moz-",je="-webkit-",Zx="comm",cf="rule",V0="decl",nI="@import",ew="@keyframes",rI="@layer",tw=Math.abs,H0=String.fromCharCode,zm=Object.assign;function iI(e,t){return wt(e,0)^45?(((t<<2^wt(e,0))<<2^wt(e,1))<<2^wt(e,2))<<2^wt(e,3):0}function nw(e){return e.trim()}function Qr(e,t){return(e=t.exec(e))?e[0]:e}function be(e,t,n){return e.replace(t,n)}function Bu(e,t,n){return e.indexOf(t,n)}function wt(e,t){return e.charCodeAt(t)|0}function hs(e,t,n){return e.slice(t,n)}function Ir(e){return e.length}function rw(e){return e.length}function gl(e,t){return t.push(e),e}function oI(e,t){return e.map(t).join("")}function Ny(e,t){return e.filter(function(n){return!Qr(n,t)})}var uf=1,ps=1,iw=0,Kn=0,pt=0,Ps="";function df(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:uf,column:ps,length:a,return:"",siblings:s}}function yi(e,t){return zm(df("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ca(e){for(;e.root;)e=yi(e.root,{children:[e]});gl(e,e.siblings)}function aI(){return pt}function sI(){return pt=Kn>0?wt(Ps,--Kn):0,ps--,pt===10&&(ps=1,uf--),pt}function dr(){return pt=Kn<iw?wt(Ps,Kn++):0,ps++,pt===10&&(ps=1,uf++),pt}function Ro(){return wt(Ps,Kn)}function zu(){return Kn}function ff(e,t){return hs(Ps,e,t)}function Vm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lI(e){return uf=ps=1,iw=Ir(Ps=e),Kn=0,[]}function cI(e){return Ps="",e}function Zh(e){return nw(ff(Kn-1,Hm(e===91?e+2:e===40?e+1:e)))}function uI(e){for(;(pt=Ro())&&pt<33;)dr();return Vm(e)>2||Vm(pt)>3?"":" "}function dI(e,t){for(;--t&&dr()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return ff(e,zu()+(t<6&&Ro()==32&&dr()==32))}function Hm(e){for(;dr();)switch(pt){case e:return Kn;case 34:case 39:e!==34&&e!==39&&Hm(pt);break;case 40:e===41&&Hm(e);break;case 92:dr();break}return Kn}function fI(e,t){for(;dr()&&e+pt!==57;)if(e+pt===84&&Ro()===47)break;return"/*"+ff(t,Kn-1)+"*"+H0(e===47?e:dr())}function hI(e){for(;!Vm(Ro());)dr();return ff(e,Kn)}function pI(e){return cI(Vu("",null,null,null,[""],e=lI(e),0,[0],e))}function Vu(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,h=a,f=0,p=0,v=0,g=1,S=1,E=1,A=0,y="",x=i,w=o,C=r,b=y;S;)switch(v=A,A=dr()){case 40:if(v!=108&&wt(b,h-1)==58){Bu(b+=be(Zh(A),"&","&\f"),"&\f",tw(u?s[u-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:b+=Zh(A);break;case 9:case 10:case 13:case 32:b+=uI(v);break;case 92:b+=dI(zu()-1,7);continue;case 47:switch(Ro()){case 42:case 47:gl(mI(fI(dr(),zu()),t,n,l),l);break;default:b+="/"}break;case 123*g:s[u++]=Ir(b)*E;case 125*g:case 59:case 0:switch(A){case 0:case 125:S=0;case 59+d:E==-1&&(b=be(b,/\f/g,"")),p>0&&Ir(b)-h&&gl(p>32?$y(b+";",r,n,h-1,l):$y(be(b," ","")+";",r,n,h-2,l),l);break;case 59:b+=";";default:if(gl(C=ky(b,t,n,u,d,i,s,y,x=[],w=[],h,o),o),A===123)if(d===0)Vu(b,t,C,C,x,o,h,s,w);else switch(f===99&&wt(b,3)===110?100:f){case 100:case 108:case 109:case 115:Vu(e,C,C,r&&gl(ky(e,C,C,0,0,i,s,y,i,x=[],h,w),w),i,w,h,s,r?x:w);break;default:Vu(b,C,C,C,[""],w,0,s,w)}}u=d=p=0,g=E=1,y=b="",h=a;break;case 58:h=1+Ir(b),p=v;default:if(g<1){if(A==123)--g;else if(A==125&&g++==0&&sI()==125)continue}switch(b+=H0(A),A*g){case 38:E=d>0?1:(b+="\f",-1);break;case 44:s[u++]=(Ir(b)-1)*E,E=1;break;case 64:Ro()===45&&(b+=Zh(dr())),f=Ro(),d=h=Ir(y=b+=hI(zu())),A++;break;case 45:v===45&&Ir(b)==2&&(g=0)}}return o}function ky(e,t,n,r,i,o,a,s,l,u,d,h){for(var f=i-1,p=i===0?o:[""],v=rw(p),g=0,S=0,E=0;g<r;++g)for(var A=0,y=hs(e,f+1,f=tw(S=a[g])),x=e;A<v;++A)(x=nw(S>0?p[A]+" "+y:be(y,/&\f/g,p[A])))&&(l[E++]=x);return df(e,t,n,i===0?cf:s,l,u,d,h)}function mI(e,t,n,r){return df(e,t,n,Zx,H0(aI()),hs(e,2,-2),0,r)}function $y(e,t,n,r,i){return df(e,t,n,V0,hs(e,0,r),hs(e,r+1,-1),r,i)}function ow(e,t,n){switch(iI(e,t)){case 5103:return je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+e+e;case 4789:return jl+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return je+e+jl+e+He+e+e;case 5936:switch(wt(e,t+11)){case 114:return je+e+He+be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return je+e+He+be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return je+e+He+be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return je+e+He+e+e;case 6165:return je+e+He+"flex-"+e+e;case 5187:return je+e+be(e,/(\w+).+(:[^]+)/,je+"box-$1$2"+He+"flex-$1$2")+e;case 5443:return je+e+He+"flex-item-"+be(e,/flex-|-self/g,"")+(Qr(e,/flex-|baseline/)?"":He+"grid-row-"+be(e,/flex-|-self/g,""))+e;case 4675:return je+e+He+"flex-line-pack"+be(e,/align-content|flex-|-self/g,"")+e;case 5548:return je+e+He+be(e,"shrink","negative")+e;case 5292:return je+e+He+be(e,"basis","preferred-size")+e;case 6060:return je+"box-"+be(e,"-grow","")+je+e+He+be(e,"grow","positive")+e;case 4554:return je+be(e,/([^-])(transform)/g,"$1"+je+"$2")+e;case 6187:return be(be(be(e,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),e,"")+e;case 5495:case 3959:return be(e,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return be(be(e,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+e+e;case 4200:if(!Qr(e,/flex-|baseline/))return He+"grid-column-align"+hs(e,t)+e;break;case 2592:case 3360:return He+be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Qr(r.props,/grid-\w+-end/)})?~Bu(e+(n=n[t].value),"span",0)?e:He+be(e,"-start","")+e+He+"grid-row-span:"+(~Bu(n,"span",0)?Qr(n,/\d+/):+Qr(n,/\d+/)-+Qr(e,/\d+/))+";":He+be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Qr(r.props,/grid-\w+-start/)})?e:He+be(be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return be(e,/(.+)-inline(.+)/,je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ir(e)-1-t>6)switch(wt(e,t+1)){case 109:if(wt(e,t+4)!==45)break;case 102:return be(e,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+jl+(wt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bu(e,"stretch",0)?ow(be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return He+i+":"+o+u+(a?He+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(wt(e,t+6)===121)return be(e,":",":"+je)+e;break;case 6444:switch(wt(e,wt(e,14)===45?18:11)){case 120:return be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(wt(e,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+He+"$2box$3")+e;case 100:return be(e,":",":"+He)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(e,"scroll-","scroll-snap-")+e}return e}function Cd(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function gI(e,t,n,r){switch(e.type){case rI:if(e.children.length)break;case nI:case V0:return e.return=e.return||e.value;case Zx:return"";case ew:return e.return=e.value+"{"+Cd(e.children,r)+"}";case cf:if(!Ir(e.value=e.props.join(",")))return""}return Ir(n=Cd(e.children,r))?e.return=e.value+"{"+n+"}":""}function vI(e){var t=rw(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function yI(e){return function(t){t.root||(t=t.return)&&e(t)}}function AI(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case V0:e.return=ow(e.value,e.length,n);return;case ew:return Cd([yi(e,{value:be(e.value,"@","@"+je)})],r);case cf:if(e.length)return oI(n=e.props,function(i){switch(Qr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ca(yi(e,{props:[be(i,/:(read-\w+)/,":"+jl+"$1")]})),ca(yi(e,{props:[i]})),zm(e,{props:Ny(n,r)});break;case"::placeholder":ca(yi(e,{props:[be(i,/:(plac\w+)/,":"+je+"input-$1")]})),ca(yi(e,{props:[be(i,/:(plac\w+)/,":"+jl+"$1")]})),ca(yi(e,{props:[be(i,/:(plac\w+)/,He+"input-$1")]})),ca(yi(e,{props:[i]})),zm(e,{props:Ny(n,r)});break}return""})}}var EI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},An={VITE_BASE_STRAPI_API:"https://cms.dcs.ug.edu.gh",VITE_BASE_CONTENT_API:"https://cms.dcs.ug.edu.gh/graphql",VITE_BASE_ENGINE_API:"https://api.dcs.ug.edu.gh/graphql",NVM_INC:"/Users/elvisagbesi/.nvm/versions/node/v18.20.4/include/node",npm_package_devDependencies_lint_staged:"^15.2.7",npm_package_dependencies__radix_ui_react_tabs:"^1.1.0",TERM_PROGRAM:"WarpTerminal",NODE:"/Users/elvisagbesi/.nvm/versions/node/v18.20.4/bin/node",npm_package_dependencies_markdown_to_jsx:"^7.4.7",INIT_CWD:"/Users/elvisagbesi/Desktop/Work/DCS-Website",NVM_CD_FLAGS:"-q",npm_package_devDependencies_typescript:"^5.4.5",npm_config_version_git_tag:"true",SHELL:"/bin/zsh",TERM:"xterm-256color",WARP_HONOR_PS1:"0",npm_package_devDependencies_vite:"^5.3.1",npm_package_dependencies__radix_ui_react_dialog:"^1.0.5",TMPDIR:"/var/folders/f0/z865yc613gg97kx1tp1655r00000gn/T/",HOMEBREW_REPOSITORY:"/opt/homebrew",npm_package_scripts_tsc:"tsc",npm_package_scripts_lint:"eslint src/.",npm_config_init_license:"MIT",TERM_PROGRAM_VERSION:"v0.2024.10.08.08.02.stable_02",npm_package_devDependencies__vitejs_plugin_react:"^4.2.1",npm_package_dependencies__radix_ui_react_form:"^0.0.3",npm_package_private:"true",npm_config_registry:"https://registry.yarnpkg.com",npm_package_dependencies_react_dom:"^18.3.1",npm_package_dependencies__tanstack_react_query_devtools:"^5.45.0",npm_package_readmeFilename:"README.md",npm_package_devDependencies_eslint_plugin_jsx_a11y:"^6.8.0",npm_package_dependencies_html_react_parser:"^5.1.10",USER:"elvisagbesi",NVM_DIR:"/Users/elvisagbesi/.nvm",npm_package_description:"Official website for the department of Computer Science",npm_package_devDependencies__types_react:"^18.3.3",COMMAND_MODE:"unix2003",npm_package_devDependencies__types_styled_components:"^5.1.34",npm_package_devDependencies__tanstack_eslint_plugin_query:"^5.35.6",npm_package_devDependencies_vite_tsconfig_paths:"^4.3.2",npm_package_dependencies_react_icons:"^5.2.1",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.cGr41mGu1L/Listeners",npm_package_dependencies_react_helmet:"^6.1.0",npm_package_dependencies_graphql_request:"^6.1.0",WARP_IS_LOCAL_SHELL_SESSION:"1",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_package_devDependencies_eslint_plugin_simple_import_sort:"^12.1.0",npm_package_devDependencies_eslint:"^8.57.0",npm_package_dependencies_styled_components:"^6.1.11",npm_execpath:"/Users/elvisagbesi/.nvm/versions/node/v18.20.4/lib/node_modules/yarn/bin/yarn.js",npm_package_devDependencies__typescript_eslint_eslint_plugin:"^7.13.0",npm_package_dependencies_graphql:"^16.8.2",WARP_USE_SSH_WRAPPER:"1",npm_package_dependencies_react_use:"^17.5.0",npm_package_dependencies__radix_ui_colors:"^2.1.0",npm_package_devDependencies__types_react_dom:"^18.3.0",npm_package_devDependencies__typescript_eslint_parser:"^7.13.0",PATH:"/var/folders/f0/z865yc613gg97kx1tp1655r00000gn/T/yarn--1730291603646-0.05111936057679056:/Users/elvisagbesi/Desktop/Work/DCS-Website/node_modules/.bin:/Users/elvisagbesi/.config/yarn/link/node_modules/.bin:/Users/elvisagbesi/.yarn/bin:/Users/elvisagbesi/.nvm/versions/node/v18.20.4/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/elvisagbesi/.nvm/versions/node/v18.20.4/lib/node_modules/npm/bin/node-gyp-bin:/Users/elvisagbesi/.nvm/versions/node/v18.20.4/bin/node_modules/npm/bin/node-gyp-bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/elvisagbesi/.nvm/versions/node/v18.20.4/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_package_scripts_lint_fix:"eslint --fix src/.",_:"/Users/elvisagbesi/Desktop/Work/DCS-Website/node_modules/.bin/vite",LaunchInstanceID:"4AB135DA-7F9D-42F6-914B-8CDDADB961CF",__CFBundleIdentifier:"dev.warp.Warp-Stable",PWD:"/Users/elvisagbesi/Desktop/Work/DCS-Website",npm_package_scripts_preview:"npm run build && vite preview",npm_lifecycle_event:"build",LANG:"en_US.UTF-8",npm_package_packageManager:"yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e",npm_package_dependencies_react_alice_carousel:"^2.9.1",npm_package_name:"cs-dept-website",npm_package_devDependencies_eslint_plugin_import:"^2.29.1",npm_package_scripts_build:"tsc && vite build",npm_package_scripts_start:"vite",npm_config_version_commit_hooks:"true",XPC_FLAGS:"0x0",npm_package_dependencies_react_router_dom:"^6.23.1",npm_config_bin_links:"true",npm_package_dependencies__tanstack_react_query:"^5.45.0",XPC_SERVICE_NAME:"0",npm_package_version:"0.0.0",npm_package_devDependencies_eslint_import_resolver_typescript:"^3.6.1",npm_package_dependencies__radix_ui_react_icons:"^1.3.0",HOME:"/Users/elvisagbesi",SHLVL:"2",npm_package_type:"module",npm_package_devDependencies_vite_plugin_svgr:"^4.2.0",npm_package_dependencies_formik:"^2.4.6",npm_config_save_prefix:"^",npm_config_strict_ssl:"true",HOMEBREW_PREFIX:"/opt/homebrew",npm_package_devDependencies_husky:"^9.0.11",npm_package_dependencies__radix_ui_react_accordion:"^1.1.2",npm_config_version_git_message:"v%s",LOGNAME:"elvisagbesi",YARN_WRAP_OUTPUT:"false",npm_lifecycle_script:"tsc && vite build",npm_package_dependencies_yup:"^1.4.0",npm_package_dependencies__radix_ui_react_checkbox:"^1.0.4",SSH_SOCKET_DIR:"~/.ssh",npm_package_dependencies_react:"^18.3.1",NVM_BIN:"/Users/elvisagbesi/.nvm/versions/node/v18.20.4/bin",npm_config_version_git_sign:"",npm_config_ignore_scripts:"",npm_config_user_agent:"yarn/1.22.22 npm/? node/v18.20.4 darwin arm64",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",INFOPATH:"/opt/homebrew/share/info:",npm_package_devDependencies__types_react_helmet:"^6.1.11",npm_package_scripts_prepare:"husky install",CONDA_CHANGEPS1:"false",npm_config_init_version:"1.0.0",npm_config_ignore_optional:"",SECURITYSESSIONID:"186af",COLORTERM:"truecolor",npm_node_execpath:"/Users/elvisagbesi/.nvm/versions/node/v18.20.4/bin/node",npm_package_lint_staged____ts_tsx_js_jsx_:"eslint --fix",npm_package_devDependencies_eslint_plugin_react:"^7.34.2",npm_package_dependencies__radix_ui_react_scroll_area:"^1.0.5",npm_config_version_tag_prefix:"v",NODE_ENV:"production"},ms=typeof process<"u"&&An!==void 0&&(An.REACT_APP_SC_ATTR||An.SC_ATTR)||"data-styled",aw="active",sw="data-styled-version",hf="6.1.11",Q0=`/*!sc*/
`,W0=typeof window<"u"&&"HTMLElement"in window,bI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&An!==void 0&&An.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&An.REACT_APP_SC_DISABLE_SPEEDY!==""?An.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&An.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&An!==void 0&&An.SC_DISABLE_SPEEDY!==void 0&&An.SC_DISABLE_SPEEDY!==""&&An.SC_DISABLE_SPEEDY!=="false"&&An.SC_DISABLE_SPEEDY),xI={},pf=Object.freeze([]),gs=Object.freeze({});function lw(e,t,n){return n===void 0&&(n=gs),e.theme!==n.theme&&e.theme||t||n.theme}var cw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SI=/(^-|-$)/g;function Dy(e){return e.replace(wI,"-").replace(SI,"")}var CI=/(a)(d)/gi,cu=52,My=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qm(e){var t,n="";for(t=Math.abs(e);t>cu;t=t/cu|0)n=My(t%cu)+n;return(My(t%cu)+n).replace(CI,"$1-$2")}var ep,uw=5381,Oa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dw=function(e){return Oa(uw,e)};function G0(e){return Qm(dw(e)>>>0)}function TI(e){return e.displayName||e.name||"Component"}function tp(e){return typeof e=="string"&&!0}var fw=typeof Symbol=="function"&&Symbol.for,hw=fw?Symbol.for("react.memo"):60115,II=fw?Symbol.for("react.forward_ref"):60112,PI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_I={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RI=((ep={})[II]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ep[hw]=pw,ep);function Ly(e){return("type"in(t=e)&&t.type.$$typeof)===hw?pw:"$$typeof"in e?RI[e.$$typeof]:PI;var t}var OI=Object.defineProperty,jI=Object.getOwnPropertyNames,Fy=Object.getOwnPropertySymbols,NI=Object.getOwnPropertyDescriptor,kI=Object.getPrototypeOf,Uy=Object.prototype;function mw(e,t,n){if(typeof t!="string"){if(Uy){var r=kI(t);r&&r!==Uy&&mw(e,r,n)}var i=jI(t);Fy&&(i=i.concat(Fy(t)));for(var o=Ly(e),a=Ly(t),s=0;s<i.length;++s){var l=i[s];if(!(l in _I||n&&n[l]||a&&l in a||o&&l in o)){var u=NI(t,l);try{OI(e,l,u)}catch{}}}}return e}function Uo(e){return typeof e=="function"}function q0(e){return typeof e=="object"&&"styledComponentId"in e}function vo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Td(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function oc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wm(e,t,n){if(n===void 0&&(n=!1),!n&&!oc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wm(e[r],t[r]);else if(oc(t))for(var r in t)e[r]=Wm(e[r],t[r]);return e}function Y0(e,t){Object.defineProperty(e,"toString",{value:t})}function Bo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $I=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Bo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Q0);return n},e}(),Hu=new Map,Id=new Map,Qu=1,uu=function(e){if(Hu.has(e))return Hu.get(e);for(;Id.has(Qu);)Qu++;var t=Qu++;return Hu.set(e,t),Id.set(t,e),t},DI=function(e,t){Qu=t+1,Hu.set(e,t),Id.set(t,e)},MI="style[".concat(ms,"][").concat(sw,'="').concat(hf,'"]'),LI=new RegExp("^".concat(ms,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FI=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},UI=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Q0),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(LI);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(DI(d,u),FI(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function BI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(ms,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ms,aw),r.setAttribute(sw,hf);var a=BI();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},zI=function(){function e(t){this.element=gw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Bo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),VI=function(){function e(t){this.element=gw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),HI=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),By=W0,QI={isServer:!W0,useCSSOMInjection:!bI},Pd=function(){function e(t,n,r){t===void 0&&(t=gs),n===void 0&&(n={});var i=this;this.options=Ue(Ue({},QI),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&W0&&By&&(By=!1,function(o){for(var a=document.querySelectorAll(MI),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(ms)!==aw&&(UI(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Y0(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(h){var f=function(E){return Id.get(E)}(h);if(f===void 0)return"continue";var p=o.names.get(f),v=a.getGroup(h);if(p===void 0||v.length===0)return"continue";var g="".concat(ms,".g").concat(h,'[id="').concat(f,'"]'),S="";p!==void 0&&p.forEach(function(E){E.length>0&&(S+="".concat(E,","))}),l+="".concat(v).concat(g,'{content:"').concat(S,'"}').concat(Q0)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return uu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ue(Ue({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new HI(i):r?new zI(i):new VI(i)}(this.options),new $I(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(uu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(uu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(uu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),WI=/&/g,GI=/^\s*\/\/.*$/gm;function vw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vw(n.children,t)),n})}function yw(e){var t,n,r,i=e===void 0?gs:e,o=i.options,a=o===void 0?gs:o,s=i.plugins,l=s===void 0?pf:s,u=function(f,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===cf&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(WI,n).replace(r,u))}),a.prefix&&d.push(AI),d.push(gI);var h=function(f,p,v,g){p===void 0&&(p=""),v===void 0&&(v=""),g===void 0&&(g="&"),t=g,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(GI,""),E=pI(v||p?"".concat(v," ").concat(p," { ").concat(S," }"):S);a.namespace&&(E=vw(E,a.namespace));var A=[];return Cd(E,vI(d.concat(yI(function(y){return A.push(y)})))),A};return h.hash=l.length?l.reduce(function(f,p){return p.name||Bo(15),Oa(f,p.name)},uw).toString():"",h}var qI=new Pd,Gm=yw(),K0=K.createContext({shouldForwardProp:void 0,styleSheet:qI,stylis:Gm});K0.Consumer;var YI=K.createContext(void 0);function _d(){return m.useContext(K0)}function KI(e){var t=m.useState(e.stylisPlugins),n=t[0],r=t[1],i=_d().styleSheet,o=m.useMemo(function(){var l=i;return e.sheet?l=e.sheet:e.target&&(l=l.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[e.disableCSSOMInjection,e.sheet,e.target,i]),a=m.useMemo(function(){return yw({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);m.useEffect(function(){tI(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=m.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:a}},[e.shouldForwardProp,o,a]);return K.createElement(K0.Provider,{value:s},K.createElement(YI.Provider,{value:a},e.children))}var Aw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Gm);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Y0(this,function(){throw Bo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Gm),this.name+t.hash},e}(),XI=function(e){return e>="A"&&e<="Z"};function zy(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;XI(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ew=function(e){return e==null||e===!1||e===""},bw=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ew(o)&&(Array.isArray(o)&&o.isCss||Uo(o)?r.push("".concat(zy(i),":"),o,";"):oc(o)?r.push.apply(r,Fo(Fo(["".concat(i," {")],bw(o),!1),["}"],!1)):r.push("".concat(zy(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in EI||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Hi(e,t,n,r){if(Ew(e))return[];if(q0(e))return[".".concat(e.styledComponentId)];if(Uo(e)){if(!Uo(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Hi(i,t,n,r)}var o;return e instanceof Aw?n?(e.inject(n,r),[e.getName(r)]):[e]:oc(e)?bw(e):Array.isArray(e)?Array.prototype.concat.apply(pf,e.map(function(a){return Hi(a,t,n,r)})):[e.toString()]}function xw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Uo(n)&&!q0(n))return!1}return!0}var JI=dw(hf),ZI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xw(t),this.componentId=n,this.baseHash=Oa(JI,n),this.baseStyle=r,Pd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=vo(i,this.staticRulesId);else{var o=Td(Hi(this.rules,t,n,r)),a=Qm(Oa(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=vo(i,a),this.staticRulesId=a}else{for(var l=Oa(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var f=Td(Hi(h,t,n,r));l=Oa(l,f+d),u+=f}}if(u){var p=Qm(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=vo(i,p)}}return i},e}(),ac=K.createContext(void 0);ac.Consumer;function e7(e){var t=K.useContext(ac),n=m.useMemo(function(){return function(r,i){if(!r)throw Bo(14);if(Uo(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Bo(8);return i?Ue(Ue({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?K.createElement(ac.Provider,{value:n},e.children):null}var np={};function t7(e,t,n){var r=q0(e),i=e,o=!tp(e),a=t.attrs,s=a===void 0?pf:a,l=t.componentId,u=l===void 0?function(x,w){var C=typeof x!="string"?"sc":Dy(x);np[C]=(np[C]||0)+1;var b="".concat(C,"-").concat(G0(hf+C+np[C]));return w?"".concat(w,"-").concat(b):b}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(x){return tp(x)?"styled.".concat(x):"Styled(".concat(TI(x),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Dy(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(x,w){return g(x,w)&&S(x,w)}}else v=g}var E=new ZI(n,f,r?i.componentStyle:void 0);function A(x,w){return function(C,b,T){var _=C.attrs,$=C.componentStyle,M=C.defaultProps,R=C.foldedComponentIds,U=C.styledComponentId,I=C.target,k=K.useContext(ac),z=_d(),Y=C.shouldForwardProp||z.shouldForwardProp,D=lw(b,k,M)||gs,H=function(ze,Ge,lt){for(var Nn,kn=Ue(Ue({},Ge),{className:void 0,theme:lt}),ci=0;ci<ze.length;ci+=1){var yr=Uo(Nn=ze[ci])?Nn(kn):Nn;for(var qe in yr)kn[qe]=qe==="className"?vo(kn[qe],yr[qe]):qe==="style"?Ue(Ue({},kn[qe]),yr[qe]):yr[qe]}return Ge.className&&(kn.className=vo(kn.className,Ge.className)),kn}(_,b,D),J=H.as||I,ae={};for(var se in H)H[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&H.theme===D||(se==="forwardedAs"?ae.as=H.forwardedAs:Y&&!Y(se,J)||(ae[se]=H[se]));var Be=function(ze,Ge){var lt=_d(),Nn=ze.generateAndInjectStyles(Ge,lt.styleSheet,lt.stylis);return Nn}($,H),Te=vo(R,U);return Be&&(Te+=" "+Be),H.className&&(Te+=" "+H.className),ae[tp(J)&&!cw.has(J)?"class":"className"]=Te,ae.ref=T,m.createElement(J,ae)}(y,x,w)}A.displayName=h;var y=K.forwardRef(A);return y.attrs=p,y.componentStyle=E,y.displayName=h,y.shouldForwardProp=v,y.foldedComponentIds=r?vo(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(w){for(var C=[],b=1;b<arguments.length;b++)C[b-1]=arguments[b];for(var T=0,_=C;T<_.length;T++)Wm(w,_[T],!0);return w}({},i.defaultProps,x):x}}),Y0(y,function(){return".".concat(y.styledComponentId)}),o&&mw(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Vy(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hy=function(e){return Object.assign(e,{isCss:!0})};function Xn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Uo(e)||oc(e))return Hy(Hi(Vy(pf,Fo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Hi(r):Hy(Hi(Vy(r,t)))}function qm(e,t,n){if(n===void 0&&(n=gs),!t)throw Bo(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Xn.apply(void 0,Fo([i],o,!1)))};return r.attrs=function(i){return qm(e,t,Ue(Ue({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return qm(e,t,Ue(Ue({},n),i))},r}var ww=function(e){return qm(t7,e)},G=ww;cw.forEach(function(e){G[e]=ww(e)});var n7=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=xw(t),Pd.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Td(Hi(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pd.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function r7(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xn.apply(void 0,Fo([e],t,!1)),i="sc-global-".concat(G0(JSON.stringify(r))),o=new n7(r,i),a=function(l){var u=_d(),d=K.useContext(ac),h=K.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(h,l,u.styleSheet,d,u.stylis),K.useLayoutEffect(function(){if(!u.styleSheet.server)return s(h,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,h,f){if(o.isStatic)o.renderStyles(l,xI,d,f);else{var p=Ue(Ue({},u),{theme:lw(u,h,a.defaultProps)});o.renderStyles(l,p,d,f)}}return K.memo(a)}function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Td(Xn.apply(void 0,Fo([e],t,!1))),i=G0(r);return new Aw(i,r)}/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nt(){return nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nt.apply(this,arguments)}var ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ht||(ht={}));const Qy="popstate";function i7(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return sc("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zo(i)}return a7(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function o7(){return Math.random().toString(36).substr(2,8)}function Wy(e,t){return{usr:e.state,key:e.key,idx:t}}function sc(e,t,n,r){return n===void 0&&(n=null),nt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zi(t):t,{state:n,key:t&&t.key||r||o7()})}function zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function a7(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=ht.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(nt({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function h(){s=ht.Pop;let S=d(),E=S==null?null:S-u;u=S,l&&l({action:s,location:g.location,delta:E})}function f(S,E){s=ht.Push;let A=sc(g.location,S,E);u=d()+1;let y=Wy(A,u),x=g.createHref(A);try{a.pushState(y,"",x)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(x)}o&&l&&l({action:s,location:g.location,delta:1})}function p(S,E){s=ht.Replace;let A=sc(g.location,S,E);u=d();let y=Wy(A,u),x=g.createHref(A);a.replaceState(y,"",x),o&&l&&l({action:s,location:g.location,delta:0})}function v(S){let E=i.location.origin!=="null"?i.location.origin:i.location.href,A=typeof S=="string"?S:zo(S);return A=A.replace(/ $/,"%20"),ye(E,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,E)}let g={get action(){return s},get location(){return e(i,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qy,h),l=S,()=>{i.removeEventListener(Qy,h),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let E=v(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:f,replace:p,go(S){return a.go(S)}};return g}var Ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ze||(Ze={}));const s7=new Set(["lazy","caseSensitive","path","id","index","children"]);function l7(e){return e.index===!0}function Ym(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],s=typeof i.id=="string"?i.id:a.join("-");if(ye(i.index!==!0||!i.children,"Cannot specify children on an index route"),ye(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),l7(i)){let l=nt({},i,t(i),{id:s});return r[s]=l,l}else{let l=nt({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Ym(i.children,t,a,r)),l}})}function ja(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zi(t):t,i=Nr(r.pathname||"/",n);if(i==null)return null;let o=Cw(e);c7(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let l=E7(i);a=y7(o[s],l)}return a}function Sw(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Cw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jr([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cw(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:g7(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Tw(o.path))i(o,a,l)}),t}function Tw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Tw(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function c7(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v7(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u7=/^:[\w-]+$/,d7=3,f7=2,h7=1,p7=10,m7=-2,Gy=e=>e==="*";function g7(e,t){let n=e.split("/"),r=n.length;return n.some(Gy)&&(r+=m7),t&&(r+=f7),n.filter(i=>!Gy(i)).reduce((i,o)=>i+(u7.test(o)?d7:o===""?h7:p7),r)}function v7(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function y7(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Km({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let h=s.route;o.push({params:r,pathname:Jr([i,d.pathname]),pathnameBase:w7(Jr([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Jr([i,d.pathnameBase]))}return o}function Km(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A7(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let g=s[h]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const v=s[h];return p&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function A7(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function E7(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Nr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function b7(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zi(e):e;return{pathname:n?n.startsWith("/")?n:x7(n,t):t,search:S7(r),hash:C7(i)}}function x7(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rp(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Iw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X0(e,t){let n=Iw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function J0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zi(e):(i=nt({},e),ye(!i.pathname||!i.pathname.includes("?"),rp("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),rp("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),rp("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}s=h>=0?t[h]:"/"}let l=b7(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Jr=e=>e.join("/").replace(/\/\/+/g,"/"),w7=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),S7=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C7=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Z0{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function e1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Pw=["post","put","patch","delete"],T7=new Set(Pw),I7=["get",...Pw],P7=new Set(I7),_7=new Set([301,302,303,307,308]),R7=new Set([307,308]),ip={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},O7={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Gs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},t1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j7=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),_w="remix-router-transitions";function N7(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ye(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let N=e.detectErrorBoundary;i=L=>({hasErrorBoundary:N(L)})}else i=j7;let o={},a=Ym(e.routes,i,void 0,o),s,l=e.basename||"/",u=e.unstable_dataStrategy||M7,d=nt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),h=null,f=new Set,p=null,v=null,g=null,S=e.hydrationData!=null,E=ja(a,e.history.location,l),A=null;if(E==null){let N=Un(404,{pathname:e.history.location.pathname}),{matches:L,route:B}=rA(a);E=L,A={[B.id]:N}}let y,x=E.some(N=>N.route.lazy),w=E.some(N=>N.route.loader);if(x)y=!1;else if(!w)y=!0;else if(d.v7_partialHydration){let N=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null,B=W=>W.route.loader?typeof W.route.loader=="function"&&W.route.loader.hydrate===!0?!1:N&&N[W.route.id]!==void 0||L&&L[W.route.id]!==void 0:!0;if(L){let W=E.findIndex(ee=>L[ee.route.id]!==void 0);y=E.slice(0,W+1).every(B)}else y=E.every(B)}else y=e.hydrationData!=null;let C,b={historyAction:e.history.action,location:e.history.location,matches:E,initialized:y,navigation:ip,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||A,fetchers:new Map,blockers:new Map},T=ht.Pop,_=!1,$,M=!1,R=new Map,U=null,I=!1,k=!1,z=[],Y=[],D=new Map,H=0,J=-1,ae=new Map,se=new Set,Be=new Map,Te=new Map,ze=new Set,Ge=new Map,lt=new Map,Nn=!1;function kn(){if(h=e.history.listen(N=>{let{action:L,location:B,delta:W}=N;if(Nn){Nn=!1;return}vs(lt.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ee=fv({currentLocation:b.location,nextLocation:B,historyAction:L});if(ee&&W!=null){Nn=!0,e.history.go(W*-1),Uc(ee,{state:"blocked",location:B,proceed(){Uc(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),e.history.go(W)},reset(){let Ae=new Map(b.blockers);Ae.set(ee,Gs),qe({blockers:Ae})}});return}return Fr(L,B)}),n){Y7(t,R);let N=()=>K7(t,R);t.addEventListener("pagehide",N),U=()=>t.removeEventListener("pagehide",N)}return b.initialized||Fr(ht.Pop,b.location,{initialHydration:!0}),C}function ci(){h&&h(),U&&U(),f.clear(),$&&$.abort(),b.fetchers.forEach((N,L)=>nn(L)),b.blockers.forEach((N,L)=>dv(L))}function yr(N){return f.add(N),()=>f.delete(N)}function qe(N,L){L===void 0&&(L={}),b=nt({},b,N);let B=[],W=[];d.v7_fetcherPersist&&b.fetchers.forEach((ee,Ae)=>{ee.state==="idle"&&(ze.has(Ae)?W.push(Ae):B.push(Ae))}),[...f].forEach(ee=>ee(b,{deletedFetchers:W,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),d.v7_fetcherPersist&&(B.forEach(ee=>b.fetchers.delete(ee)),W.forEach(ee=>nn(ee)))}function ui(N,L,B){var W,ee;let{flushSync:Ae}=B===void 0?{}:B,le=b.actionData!=null&&b.navigation.formMethod!=null&&or(b.navigation.formMethod)&&b.navigation.state==="loading"&&((W=N.state)==null?void 0:W._isRedirect)!==!0,te;L.actionData?Object.keys(L.actionData).length>0?te=L.actionData:te=null:le?te=b.actionData:te=null;let Ee=L.loaderData?tA(b.loaderData,L.loaderData,L.matches||[],L.errors):b.loaderData,ge=b.blockers;ge.size>0&&(ge=new Map(ge),ge.forEach((pe,Ye)=>ge.set(Ye,Gs)));let Pt=_===!0||b.navigation.formMethod!=null&&or(b.navigation.formMethod)&&((ee=N.state)==null?void 0:ee._isRedirect)!==!0;s&&(a=s,s=void 0),I||T===ht.Pop||(T===ht.Push?e.history.push(N,N.state):T===ht.Replace&&e.history.replace(N,N.state));let _t;if(T===ht.Pop){let pe=R.get(b.location.pathname);pe&&pe.has(N.pathname)?_t={currentLocation:b.location,nextLocation:N}:R.has(N.pathname)&&(_t={currentLocation:N,nextLocation:b.location})}else if(M){let pe=R.get(b.location.pathname);pe?pe.add(N.pathname):(pe=new Set([N.pathname]),R.set(b.location.pathname,pe)),_t={currentLocation:b.location,nextLocation:N}}qe(nt({},L,{actionData:te,loaderData:Ee,historyAction:T,location:N,initialized:!0,navigation:ip,revalidation:"idle",restoreScrollPosition:pv(N,L.matches||b.matches),preventScrollReset:Pt,blockers:ge}),{viewTransitionOpts:_t,flushSync:Ae===!0}),T=ht.Pop,_=!1,M=!1,I=!1,k=!1,z=[],Y=[]}async function Lc(N,L){if(typeof N=="number"){e.history.go(N);return}let B=Xm(b.location,b.matches,l,d.v7_prependBasename,N,d.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:W,submission:ee,error:Ae}=qy(d.v7_normalizeFormMethod,!1,B,L),le=b.location,te=sc(b.location,W,L&&L.state);te=nt({},te,e.history.encodeLocation(te));let Ee=L&&L.replace!=null?L.replace:void 0,ge=ht.Push;Ee===!0?ge=ht.Replace:Ee===!1||ee!=null&&or(ee.formMethod)&&ee.formAction===b.location.pathname+b.location.search&&(ge=ht.Replace);let Pt=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,_t=(L&&L.unstable_flushSync)===!0,pe=fv({currentLocation:le,nextLocation:te,historyAction:ge});if(pe){Uc(pe,{state:"blocked",location:te,proceed(){Uc(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:te}),Lc(N,L)},reset(){let Ye=new Map(b.blockers);Ye.set(pe,Gs),qe({blockers:Ye})}});return}return await Fr(ge,te,{submission:ee,pendingError:Ae,preventScrollReset:Pt,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:_t})}function vh(){if(oe(),qe({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){Fr(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}Fr(T||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation})}}async function Fr(N,L,B){$&&$.abort(),$=null,T=N,I=(B&&B.startUninterruptedRevalidation)===!0,VC(b.location,b.matches),_=(B&&B.preventScrollReset)===!0,M=(B&&B.enableViewTransition)===!0;let W=s||a,ee=B&&B.overrideNavigation,Ae=ja(W,L,l),le=(B&&B.flushSync)===!0;if(!Ae){let pe=Un(404,{pathname:L.pathname}),{matches:Ye,route:bt}=rA(W);Sh(),ui(L,{matches:Ye,loaderData:{},errors:{[bt.id]:pe}},{flushSync:le});return}if(b.initialized&&!k&&V7(b.location,L)&&!(B&&B.submission&&or(B.submission.formMethod))){ui(L,{matches:Ae},{flushSync:le});return}$=new AbortController;let te=ua(e.history,L,$.signal,B&&B.submission),Ee;if(B&&B.pendingError)Ee=[Nl(Ae).route.id,{type:Ze.error,error:B.pendingError}];else if(B&&B.submission&&or(B.submission.formMethod)){let pe=await yh(te,L,B.submission,Ae,{replace:B.replace,flushSync:le});if(pe.shortCircuited)return;Ee=pe.pendingActionResult,ee=op(L,B.submission),le=!1,te=ua(e.history,te.url,te.signal)}let{shortCircuited:ge,loaderData:Pt,errors:_t}=await Ah(te,L,Ae,ee,B&&B.submission,B&&B.fetcherSubmission,B&&B.replace,B&&B.initialHydration===!0,le,Ee);ge||($=null,ui(L,nt({matches:Ae},nA(Ee),{loaderData:Pt,errors:_t})))}async function yh(N,L,B,W,ee){ee===void 0&&(ee={}),oe();let Ae=G7(L,B);qe({navigation:Ae},{flushSync:ee.flushSync===!0});let le,te=Zm(W,L);if(!te.route.action&&!te.route.lazy)le={type:Ze.error,error:Un(405,{method:N.method,pathname:L.pathname,routeId:te.route.id})};else if(le=(await X("action",N,[te],W))[0],N.signal.aborted)return{shortCircuited:!0};if(Ao(le)){let Ee;return ee&&ee.replace!=null?Ee=ee.replace:Ee=Jy(le.response.headers.get("Location"),new URL(N.url),l)===b.location.pathname+b.location.search,await F(N,le,{submission:B,replace:Ee}),{shortCircuited:!0}}if(yo(le))throw Un(400,{type:"defer-action"});if(Vn(le)){let Ee=Nl(W,te.route.id);return(ee&&ee.replace)!==!0&&(T=ht.Push),{pendingActionResult:[Ee.route.id,le]}}return{pendingActionResult:[te.route.id,le]}}async function Ah(N,L,B,W,ee,Ae,le,te,Ee,ge){let Pt=W||op(L,ee),_t=ee||Ae||aA(Pt),pe=s||a,[Ye,bt]=Yy(e.history,b,B,_t,L,d.v7_partialHydration&&te===!0,d.unstable_skipActionErrorRevalidation,k,z,Y,ze,Be,se,pe,l,ge);if(Sh(_e=>!(B&&B.some(qt=>qt.route.id===_e))||Ye&&Ye.some(qt=>qt.route.id===_e)),J=++H,Ye.length===0&&bt.length===0){let _e=xh();return ui(L,nt({matches:B,loaderData:{},errors:ge&&Vn(ge[1])?{[ge[0]]:ge[1].error}:null},nA(ge),_e?{fetchers:new Map(b.fetchers)}:{}),{flushSync:Ee}),{shortCircuited:!0}}if(!I&&(!d.v7_partialHydration||!te)){bt.forEach(qt=>{let Dn=b.fetchers.get(qt.key),Rt=qs(void 0,Dn?Dn.data:void 0);b.fetchers.set(qt.key,Rt)});let _e;ge&&!Vn(ge[1])?_e={[ge[0]]:ge[1].data}:b.actionData&&(Object.keys(b.actionData).length===0?_e=null:_e=b.actionData),qe(nt({navigation:Pt},_e!==void 0?{actionData:_e}:{},bt.length>0?{fetchers:new Map(b.fetchers)}:{}),{flushSync:Ee})}bt.forEach(_e=>{D.has(_e.key)&&$n(_e.key),_e.controller&&D.set(_e.key,_e.controller)});let Ms=()=>bt.forEach(_e=>$n(_e.key));$&&$.signal.addEventListener("abort",Ms);let{loaderResults:di,fetcherResults:oa}=await ie(b.matches,B,Ye,bt,N);if(N.signal.aborted)return{shortCircuited:!0};$&&$.signal.removeEventListener("abort",Ms),bt.forEach(_e=>D.delete(_e.key));let aa=iA([...di,...oa]);if(aa){if(aa.idx>=Ye.length){let _e=bt[aa.idx-Ye.length].key;se.add(_e)}return await F(N,aa.result,{replace:le}),{shortCircuited:!0}}let{loaderData:sa,errors:Ar}=eA(b,B,Ye,di,ge,bt,oa,Ge);Ge.forEach((_e,qt)=>{_e.subscribe(Dn=>{(Dn||_e.done)&&Ge.delete(qt)})}),d.v7_partialHydration&&te&&b.errors&&Object.entries(b.errors).filter(_e=>{let[qt]=_e;return!Ye.some(Dn=>Dn.route.id===qt)}).forEach(_e=>{let[qt,Dn]=_e;Ar=Object.assign(Ar||{},{[qt]:Dn})});let Bc=xh(),zc=Ds(J),Vc=Bc||zc||bt.length>0;return nt({loaderData:sa,errors:Ar},Vc?{fetchers:new Map(b.fetchers)}:{})}function ks(N,L,B,W){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");D.has(N)&&$n(N);let ee=(W&&W.unstable_flushSync)===!0,Ae=s||a,le=Xm(b.location,b.matches,l,d.v7_prependBasename,B,d.v7_relativeSplatPath,L,W==null?void 0:W.relative),te=ja(Ae,le,l);if(!te){Ie(N,L,Un(404,{pathname:le}),{flushSync:ee});return}let{path:Ee,submission:ge,error:Pt}=qy(d.v7_normalizeFormMethod,!0,le,W);if(Pt){Ie(N,L,Pt,{flushSync:ee});return}let _t=Zm(te,Ee);if(_=(W&&W.preventScrollReset)===!0,ge&&or(ge.formMethod)){Eh(N,L,Ee,_t,te,ee,ge);return}Be.set(N,{routeId:L,path:Ee}),bh(N,L,Ee,_t,te,ee,ge)}async function Eh(N,L,B,W,ee,Ae,le){if(oe(),Be.delete(N),!W.route.action&&!W.route.lazy){let Rt=Un(405,{method:le.formMethod,pathname:B,routeId:L});Ie(N,L,Rt,{flushSync:Ae});return}let te=b.fetchers.get(N);fe(N,q7(le,te),{flushSync:Ae});let Ee=new AbortController,ge=ua(e.history,B,Ee.signal,le);D.set(N,Ee);let Pt=H,pe=(await X("action",ge,[W],ee))[0];if(ge.signal.aborted){D.get(N)===Ee&&D.delete(N);return}if(d.v7_fetcherPersist&&ze.has(N)){if(Ao(pe)||Vn(pe)){fe(N,Ai(void 0));return}}else{if(Ao(pe))if(D.delete(N),J>Pt){fe(N,Ai(void 0));return}else return se.add(N),fe(N,qs(le)),F(ge,pe,{fetcherSubmission:le});if(Vn(pe)){Ie(N,L,pe.error);return}}if(yo(pe))throw Un(400,{type:"defer-action"});let Ye=b.navigation.location||b.location,bt=ua(e.history,Ye,Ee.signal),Ms=s||a,di=b.navigation.state!=="idle"?ja(Ms,b.navigation.location,l):b.matches;ye(di,"Didn't find any matches after fetcher action");let oa=++H;ae.set(N,oa);let aa=qs(le,pe.data);b.fetchers.set(N,aa);let[sa,Ar]=Yy(e.history,b,di,le,Ye,!1,d.unstable_skipActionErrorRevalidation,k,z,Y,ze,Be,se,Ms,l,[W.route.id,pe]);Ar.filter(Rt=>Rt.key!==N).forEach(Rt=>{let Ls=Rt.key,mv=b.fetchers.get(Ls),QC=qs(void 0,mv?mv.data:void 0);b.fetchers.set(Ls,QC),D.has(Ls)&&$n(Ls),Rt.controller&&D.set(Ls,Rt.controller)}),qe({fetchers:new Map(b.fetchers)});let Bc=()=>Ar.forEach(Rt=>$n(Rt.key));Ee.signal.addEventListener("abort",Bc);let{loaderResults:zc,fetcherResults:Vc}=await ie(b.matches,di,sa,Ar,bt);if(Ee.signal.aborted)return;Ee.signal.removeEventListener("abort",Bc),ae.delete(N),D.delete(N),Ar.forEach(Rt=>D.delete(Rt.key));let _e=iA([...zc,...Vc]);if(_e){if(_e.idx>=sa.length){let Rt=Ar[_e.idx-sa.length].key;se.add(Rt)}return F(bt,_e.result)}let{loaderData:qt,errors:Dn}=eA(b,b.matches,sa,zc,void 0,Ar,Vc,Ge);if(b.fetchers.has(N)){let Rt=Ai(pe.data);b.fetchers.set(N,Rt)}Ds(oa),b.navigation.state==="loading"&&oa>J?(ye(T,"Expected pending action"),$&&$.abort(),ui(b.navigation.location,{matches:di,loaderData:qt,errors:Dn,fetchers:new Map(b.fetchers)})):(qe({errors:Dn,loaderData:tA(b.loaderData,qt,di,Dn),fetchers:new Map(b.fetchers)}),k=!1)}async function bh(N,L,B,W,ee,Ae,le){let te=b.fetchers.get(N);fe(N,qs(le,te?te.data:void 0),{flushSync:Ae});let Ee=new AbortController,ge=ua(e.history,B,Ee.signal);D.set(N,Ee);let Pt=H,pe=(await X("loader",ge,[W],ee))[0];if(yo(pe)&&(pe=await Nw(pe,ge.signal,!0)||pe),D.get(N)===Ee&&D.delete(N),!ge.signal.aborted){if(ze.has(N)){fe(N,Ai(void 0));return}if(Ao(pe))if(J>Pt){fe(N,Ai(void 0));return}else{se.add(N),await F(ge,pe);return}if(Vn(pe)){Ie(N,L,pe.error);return}ye(!yo(pe),"Unhandled fetcher deferred data"),fe(N,Ai(pe.data))}}async function F(N,L,B){let{submission:W,fetcherSubmission:ee,replace:Ae}=B===void 0?{}:B;L.response.headers.has("X-Remix-Revalidate")&&(k=!0);let le=L.response.headers.get("Location");ye(le,"Expected a Location header on the redirect Response"),le=Jy(le,new URL(N.url),l);let te=sc(b.location,le,{_isRedirect:!0});if(n){let Ye=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Ye=!0;else if(t1.test(le)){const bt=e.history.createURL(le);Ye=bt.origin!==t.location.origin||Nr(bt.pathname,l)==null}if(Ye){Ae?t.location.replace(le):t.location.assign(le);return}}$=null;let Ee=Ae===!0?ht.Replace:ht.Push,{formMethod:ge,formAction:Pt,formEncType:_t}=b.navigation;!W&&!ee&&ge&&Pt&&_t&&(W=aA(b.navigation));let pe=W||ee;if(R7.has(L.response.status)&&pe&&or(pe.formMethod))await Fr(Ee,te,{submission:nt({},pe,{formAction:le}),preventScrollReset:_});else{let Ye=op(te,W);await Fr(Ee,te,{overrideNavigation:Ye,fetcherSubmission:ee,preventScrollReset:_})}}async function X(N,L,B,W){try{let ee=await L7(u,N,L,B,W,o,i);return await Promise.all(ee.map((Ae,le)=>{if(H7(Ae)){let te=Ae.result;return{type:Ze.redirect,response:B7(te,L,B[le].route.id,W,l,d.v7_relativeSplatPath)}}return U7(Ae)}))}catch(ee){return B.map(()=>({type:Ze.error,error:ee}))}}async function ie(N,L,B,W,ee){let[Ae,...le]=await Promise.all([B.length?X("loader",ee,B,L):[],...W.map(te=>{if(te.matches&&te.match&&te.controller){let Ee=ua(e.history,te.path,te.controller.signal);return X("loader",Ee,[te.match],te.matches).then(ge=>ge[0])}else return Promise.resolve({type:Ze.error,error:Un(404,{pathname:te.path})})})]);return await Promise.all([oA(N,B,Ae,Ae.map(()=>ee.signal),!1,b.loaderData),oA(N,W.map(te=>te.match),le,W.map(te=>te.controller?te.controller.signal:null),!0)]),{loaderResults:Ae,fetcherResults:le}}function oe(){k=!0,z.push(...Sh()),Be.forEach((N,L)=>{D.has(L)&&(Y.push(L),$n(L))})}function fe(N,L,B){B===void 0&&(B={}),b.fetchers.set(N,L),qe({fetchers:new Map(b.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function Ie(N,L,B,W){W===void 0&&(W={});let ee=Nl(b.matches,L);nn(N),qe({errors:{[ee.route.id]:B},fetchers:new Map(b.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function ct(N){return d.v7_fetcherPersist&&(Te.set(N,(Te.get(N)||0)+1),ze.has(N)&&ze.delete(N)),b.fetchers.get(N)||O7}function nn(N){let L=b.fetchers.get(N);D.has(N)&&!(L&&L.state==="loading"&&ae.has(N))&&$n(N),Be.delete(N),ae.delete(N),se.delete(N),ze.delete(N),b.fetchers.delete(N)}function $s(N){if(d.v7_fetcherPersist){let L=(Te.get(N)||0)-1;L<=0?(Te.delete(N),ze.add(N)):Te.set(N,L)}else nn(N);qe({fetchers:new Map(b.fetchers)})}function $n(N){let L=D.get(N);ye(L,"Expected fetch controller: "+N),L.abort(),D.delete(N)}function Fc(N){for(let L of N){let B=ct(L),W=Ai(B.data);b.fetchers.set(L,W)}}function xh(){let N=[],L=!1;for(let B of se){let W=b.fetchers.get(B);ye(W,"Expected fetcher: "+B),W.state==="loading"&&(se.delete(B),N.push(B),L=!0)}return Fc(N),L}function Ds(N){let L=[];for(let[B,W]of ae)if(W<N){let ee=b.fetchers.get(B);ye(ee,"Expected fetcher: "+B),ee.state==="loading"&&($n(B),ae.delete(B),L.push(B))}return Fc(L),L.length>0}function wh(N,L){let B=b.blockers.get(N)||Gs;return lt.get(N)!==L&&lt.set(N,L),B}function dv(N){b.blockers.delete(N),lt.delete(N)}function Uc(N,L){let B=b.blockers.get(N)||Gs;ye(B.state==="unblocked"&&L.state==="blocked"||B.state==="blocked"&&L.state==="blocked"||B.state==="blocked"&&L.state==="proceeding"||B.state==="blocked"&&L.state==="unblocked"||B.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+B.state+" -> "+L.state);let W=new Map(b.blockers);W.set(N,L),qe({blockers:W})}function fv(N){let{currentLocation:L,nextLocation:B,historyAction:W}=N;if(lt.size===0)return;lt.size>1&&vs(!1,"A router only supports one blocker at a time");let ee=Array.from(lt.entries()),[Ae,le]=ee[ee.length-1],te=b.blockers.get(Ae);if(!(te&&te.state==="proceeding")&&le({currentLocation:L,nextLocation:B,historyAction:W}))return Ae}function Sh(N){let L=[];return Ge.forEach((B,W)=>{(!N||N(W))&&(B.cancel(),L.push(W),Ge.delete(W))}),L}function zC(N,L,B){if(p=N,g=L,v=B||null,!S&&b.navigation===ip){S=!0;let W=pv(b.location,b.matches);W!=null&&qe({restoreScrollPosition:W})}return()=>{p=null,g=null,v=null}}function hv(N,L){return v&&v(N,L.map(W=>Sw(W,b.loaderData)))||N.key}function VC(N,L){if(p&&g){let B=hv(N,L);p[B]=g()}}function pv(N,L){if(p){let B=hv(N,L),W=p[B];if(typeof W=="number")return W}return null}function HC(N){o={},s=Ym(N,i,void 0,o)}return C={get basename(){return l},get future(){return d},get state(){return b},get routes(){return a},get window(){return t},initialize:kn,subscribe:yr,enableScrollRestoration:zC,navigate:Lc,fetch:ks,revalidate:vh,createHref:N=>e.history.createHref(N),encodeLocation:N=>e.history.encodeLocation(N),getFetcher:ct,deleteFetcher:$s,dispose:ci,getBlocker:wh,deleteBlocker:dv,_internalFetchControllers:D,_internalActiveDeferreds:Ge,_internalSetRoutes:HC},C}function k7(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Xm(e,t,n,r,i,o,a,s){let l,u;if(a){l=[];for(let h of t)if(l.push(h),h.route.id===a){u=h;break}}else l=t,u=t[t.length-1];let d=J0(i||".",X0(l,o),Nr(e.pathname,n)||e.pathname,s==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!n1(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Jr([n,d.pathname])),zo(d)}function qy(e,t,n,r){if(!r||!k7(r))return{path:n};if(r.formMethod&&!W7(r.formMethod))return{path:n,error:Un(405,{method:r.formMethod})};let i=()=>({path:n,error:Un(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),s=Ow(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!or(a))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[g,S]=v;return""+p+g+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!or(a))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ye(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Jm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Jm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Zy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Zy(l)}catch{return i()}let d={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(or(d.formMethod))return{path:n,submission:d};let h=Zi(n);return t&&h.search&&n1(h.search)&&l.append("index",""),h.search="?"+l,{path:zo(h),submission:d}}function $7(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Yy(e,t,n,r,i,o,a,s,l,u,d,h,f,p,v,g){let S=g?Vn(g[1])?g[1].error:g[1].data:void 0,E=e.createURL(t.location),A=e.createURL(i),y=g&&Vn(g[1])?g[0]:void 0,x=y?$7(n,y):n,w=g?g[1].statusCode:void 0,C=a&&w&&w>=400,b=x.filter((_,$)=>{let{route:M}=_;if(M.lazy)return!0;if(M.loader==null)return!1;if(o)return typeof M.loader!="function"||M.loader.hydrate?!0:t.loaderData[M.id]===void 0&&(!t.errors||t.errors[M.id]===void 0);if(D7(t.loaderData,t.matches[$],_)||l.some(I=>I===_.route.id))return!0;let R=t.matches[$],U=_;return Ky(_,nt({currentUrl:E,currentParams:R.params,nextUrl:A,nextParams:U.params},r,{actionResult:S,unstable_actionStatus:w,defaultShouldRevalidate:C?!1:s||E.pathname+E.search===A.pathname+A.search||E.search!==A.search||Rw(R,U)}))}),T=[];return h.forEach((_,$)=>{if(o||!n.some(k=>k.route.id===_.routeId)||d.has($))return;let M=ja(p,_.path,v);if(!M){T.push({key:$,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let R=t.fetchers.get($),U=Zm(M,_.path),I=!1;f.has($)?I=!1:u.includes($)?I=!0:R&&R.state!=="idle"&&R.data===void 0?I=s:I=Ky(U,nt({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:A,nextParams:n[n.length-1].params},r,{actionResult:S,unstable_actionStatus:w,defaultShouldRevalidate:C?!1:s})),I&&T.push({key:$,routeId:_.routeId,path:_.path,matches:M,match:U,controller:new AbortController})}),[b,T]}function D7(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Rw(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ky(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Xy(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];ye(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";vs(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!s7.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,nt({},t(i),{lazy:void 0}))}function M7(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function L7(e,t,n,r,i,o,a,s){let l=r.reduce((h,f)=>h.add(f.route.id),new Set),u=new Set,d=await e({matches:i.map(h=>{let f=l.has(h.route.id);return nt({},h,{shouldLoad:f,resolve:v=>(u.add(h.route.id),f?F7(t,n,h,o,a,v,s):Promise.resolve({type:Ze.data,result:void 0}))})}),request:n,params:i[0].params,context:s});return i.forEach(h=>ye(u.has(h.route.id),'`match.resolve()` was not called for route id "'+h.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((h,f)=>l.has(i[f].route.id))}async function F7(e,t,n,r,i,o,a){let s,l,u=d=>{let h,f=new Promise((g,S)=>h=S);l=()=>h(),t.signal.addEventListener("abort",l);let p=g=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):d({request:t,params:n.params,context:a},...g!==void 0?[g]:[]),v;return o?v=o(g=>p(g)):v=(async()=>{try{return{type:"data",result:await p()}}catch(g){return{type:"error",result:g}}})(),Promise.race([v,f])};try{let d=n.route[e];if(n.route.lazy)if(d){let h,[f]=await Promise.all([u(d).catch(p=>{h=p}),Xy(n.route,i,r)]);if(h!==void 0)throw h;s=f}else if(await Xy(n.route,i,r),d=n.route[e],d)s=await u(d);else if(e==="action"){let h=new URL(t.url),f=h.pathname+h.search;throw Un(405,{method:t.method,pathname:f,routeId:n.route.id})}else return{type:Ze.data,result:void 0};else if(d)s=await u(d);else{let h=new URL(t.url),f=h.pathname+h.search;throw Un(404,{pathname:f})}ye(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Ze.error,result:d}}finally{l&&t.signal.removeEventListener("abort",l)}return s}async function U7(e){let{result:t,type:n,status:r}=e;if(jw(t)){let a;try{let s=t.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?t.body==null?a=null:a=await t.json():a=await t.text()}catch(s){return{type:Ze.error,error:s}}return n===Ze.error?{type:Ze.error,error:new Z0(t.status,t.statusText,a),statusCode:t.status,headers:t.headers}:{type:Ze.data,data:a,statusCode:t.status,headers:t.headers}}if(n===Ze.error)return{type:Ze.error,error:t,statusCode:e1(t)?t.status:r};if(Q7(t)){var i,o;return{type:Ze.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((o=t.init)==null?void 0:o.headers)&&new Headers(t.init.headers)}}return{type:Ze.data,data:t,statusCode:r}}function B7(e,t,n,r,i,o){let a=e.headers.get("Location");if(ye(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!t1.test(a)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);a=Xm(new URL(t.url),s,i,!0,a,o),e.headers.set("Location",a)}return e}function Jy(e,t,n){if(t1.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=Nr(i.pathname,n)!=null;if(i.origin===t.origin&&o)return i.pathname+i.search+i.hash}return e}function ua(e,t,n,r){let i=e.createURL(Ow(t)).toString(),o={signal:n};if(r&&or(r.formMethod)){let{formMethod:a,formEncType:s}=r;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(r.json)):s==="text/plain"?o.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?o.body=Jm(r.formData):o.body=r.formData}return new Request(i,o)}function Jm(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Zy(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function z7(e,t,n,r,i,o){let a={},s=null,l,u=!1,d={},h=r&&Vn(r[1])?r[1].error:void 0;return n.forEach((f,p)=>{let v=t[p].route.id;if(ye(!Ao(f),"Cannot handle redirect results in processLoaderData"),Vn(f)){let g=f.error;h!==void 0&&(g=h,h=void 0),s=s||{};{let S=Nl(e,v);s[S.route.id]==null&&(s[S.route.id]=g)}a[v]=void 0,u||(u=!0,l=e1(f.error)?f.error.status:500),f.headers&&(d[v]=f.headers)}else yo(f)?(i.set(v,f.deferredData),a[v]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!u&&(l=f.statusCode),f.headers&&(d[v]=f.headers)):(a[v]=f.data,f.statusCode&&f.statusCode!==200&&!u&&(l=f.statusCode),f.headers&&(d[v]=f.headers))}),h!==void 0&&r&&(s={[r[0]]:h},a[r[0]]=void 0),{loaderData:a,errors:s,statusCode:l||200,loaderHeaders:d}}function eA(e,t,n,r,i,o,a,s){let{loaderData:l,errors:u}=z7(t,n,r,i,s);for(let d=0;d<o.length;d++){let{key:h,match:f,controller:p}=o[d];ye(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let v=a[d];if(!(p&&p.signal.aborted))if(Vn(v)){let g=Nl(e.matches,f==null?void 0:f.route.id);u&&u[g.route.id]||(u=nt({},u,{[g.route.id]:v.error})),e.fetchers.delete(h)}else if(Ao(v))ye(!1,"Unhandled fetcher revalidation redirect");else if(yo(v))ye(!1,"Unhandled fetcher deferred data");else{let g=Ai(v.data);e.fetchers.set(h,g)}}return{loaderData:l,errors:u}}function tA(e,t,n,r){let i=nt({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function nA(e){return e?Vn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Nl(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function rA(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Un(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Z0(e||500,a,new Error(s),!0)}function iA(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ao(n))return{result:n,idx:t}}}function Ow(e){let t=typeof e=="string"?Zi(e):e;return zo(nt({},t,{hash:""}))}function V7(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function H7(e){return jw(e.result)&&_7.has(e.result.status)}function yo(e){return e.type===Ze.deferred}function Vn(e){return e.type===Ze.error}function Ao(e){return(e&&e.type)===Ze.redirect}function Q7(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function jw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function W7(e){return P7.has(e.toLowerCase())}function or(e){return T7.has(e.toLowerCase())}async function oA(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=t[a];if(!l)continue;let u=e.find(h=>h.route.id===l.route.id),d=u!=null&&!Rw(u,l)&&(o&&o[l.route.id])!==void 0;if(yo(s)&&(i||d)){let h=r[a];ye(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await Nw(s,h,i).then(f=>{f&&(n[a]=f||n[a])})}}}async function Nw(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ze.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ze.error,error:i}}return{type:Ze.data,data:e.deferredData.data}}}function n1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Zm(e,t){let n=typeof t=="string"?Zi(t).search:t.search;if(e[e.length-1].route.index&&n1(n||""))return e[e.length-1];let r=Iw(e);return r[r.length-1]}function aA(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function op(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function G7(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function qs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function q7(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Ai(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Y7(e,t){try{let n=e.sessionStorage.getItem(_w);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function K7(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(_w,JSON.stringify(n))}catch(r){vs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rd(){return Rd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rd.apply(this,arguments)}const Pc=m.createContext(null),mf=m.createContext(null),ii=m.createContext(null),r1=m.createContext(null),oi=m.createContext({outlet:null,matches:[],isDataRoute:!1}),kw=m.createContext(null);function X7(e,t){let{relative:n}=t===void 0?{}:t;_c()||ye(!1);let{basename:r,navigator:i}=m.useContext(ii),{hash:o,pathname:a,search:s}=gf(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Jr([r,a])),i.createHref({pathname:l,search:s,hash:o})}function _c(){return m.useContext(r1)!=null}function eo(){return _c()||ye(!1),m.useContext(r1).location}function $w(e){m.useContext(ii).static||m.useLayoutEffect(e)}function i1(){let{isDataRoute:e}=m.useContext(oi);return e?f8():J7()}function J7(){_c()||ye(!1);let e=m.useContext(Pc),{basename:t,future:n,navigator:r}=m.useContext(ii),{matches:i}=m.useContext(oi),{pathname:o}=eo(),a=JSON.stringify(X0(i,n.v7_relativeSplatPath)),s=m.useRef(!1);return $w(()=>{s.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let h=J0(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Jr([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,a,o,e])}const Z7=m.createContext(null);function e8(e){let t=m.useContext(oi).outlet;return t&&m.createElement(Z7.Provider,{value:e},t)}function o1(){let{matches:e}=m.useContext(oi),t=e[e.length-1];return t?t.params:{}}function gf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(ii),{matches:i}=m.useContext(oi),{pathname:o}=eo(),a=JSON.stringify(X0(i,r.v7_relativeSplatPath));return m.useMemo(()=>J0(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function t8(e,t,n,r){_c()||ye(!1);let{navigator:i}=m.useContext(ii),{matches:o}=m.useContext(oi),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=eo(),d;d=u;let h=d.pathname||"/",f=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let p=ja(e,{pathname:f});return a8(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:Jr([l,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Jr([l,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,n,r)}function n8(){let e=d8(),t=e1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const r8=m.createElement(n8,null);class i8 extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(oi.Provider,{value:this.props.routeContext},m.createElement(kw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o8(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(Pc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(oi.Provider,{value:t},r)}function a8(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);d>=0||ye(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:p}=n,v=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||v){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let p,v=!1,g=null,S=null;n&&(p=s&&h.route.id?s[h.route.id]:void 0,g=h.route.errorElement||r8,l&&(u<0&&f===0?(v=!0,S=null):u===f&&(v=!0,S=h.route.hydrateFallbackElement||null)));let E=t.concat(a.slice(0,f+1)),A=()=>{let y;return p?y=g:v?y=S:h.route.Component?y=m.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=d,m.createElement(o8,{match:h,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?m.createElement(i8,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:A(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):A()},null)}var Dw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dw||{}),ys=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ys||{});function s8(e){let t=m.useContext(Pc);return t||ye(!1),t}function a1(e){let t=m.useContext(mf);return t||ye(!1),t}function l8(e){let t=m.useContext(oi);return t||ye(!1),t}function Mw(e){let t=l8(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function c8(){return a1(ys.UseNavigation).navigation}function u8(){let{matches:e,loaderData:t}=a1(ys.UseMatches);return m.useMemo(()=>e.map(n=>Sw(n,t)),[e,t])}function d8(){var e;let t=m.useContext(kw),n=a1(ys.UseRouteError),r=Mw(ys.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function f8(){let{router:e}=s8(Dw.UseNavigateStable),t=Mw(ys.UseNavigateStable),n=m.useRef(!1);return $w(()=>{n.current=!0}),m.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Rd({fromRouteId:t},o)))},[e,t])}function h8(e){return e8(e.context)}function tt(e){ye(!1)}function p8(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ht.Pop,navigator:o,static:a=!1,future:s}=e;_c()&&ye(!1);let l=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:l,navigator:o,static:a,future:Rd({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Zi(r));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:v="default"}=r,g=m.useMemo(()=>{let S=Nr(d,l);return S==null?null:{location:{pathname:S,search:h,hash:f,state:p,key:v},navigationType:i}},[l,d,h,f,p,v,i]);return g==null?null:m.createElement(ii.Provider,{value:u},m.createElement(r1.Provider,{children:n,value:g}))}new Promise(()=>{});function eg(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,i)=>{if(!m.isValidElement(r))return;let o=[...t,i];if(r.type===m.Fragment){n.push.apply(n,eg(r.props.children,o));return}r.type!==tt&&ye(!1),!r.props.index||!r.props.children||ye(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=eg(r.props.children,o)),n.push(a)}),n}function m8(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:m.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:m.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:m.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}function Lw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function g8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function v8(e,t){return e.button===0&&(!t||t==="_self")&&!g8(e)}function lc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function y8(e,t){let n=lc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const A8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],E8=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],b8="6";try{window.__reactRouterVersion=b8}catch{}function x8(e,t){return N7({basename:void 0,future:Vo({},void 0,{v7_prependBasename:!0}),history:i7({window:void 0}),hydrationData:w8(),routes:e,mapRouteProperties:m8,unstable_dataStrategy:void 0,window:void 0}).initialize()}function w8(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Vo({},t,{errors:S8(t.errors)})),t}function S8(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Z0(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const Fw=m.createContext({isTransitioning:!1}),C8=m.createContext(new Map),T8="startTransition",sA=Wd[T8],I8="flushSync",lA=y6[I8];function P8(e){sA?sA(e):e()}function Ys(e){lA?lA(e):e()}class _8{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function R8(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=m.useState(n.state),[a,s]=m.useState(),[l,u]=m.useState({isTransitioning:!1}),[d,h]=m.useState(),[f,p]=m.useState(),[v,g]=m.useState(),S=m.useRef(new Map),{v7_startTransition:E}=r||{},A=m.useCallback(b=>{E?P8(b):b()},[E]),y=m.useCallback((b,T)=>{let{deletedFetchers:_,unstable_flushSync:$,unstable_viewTransitionOpts:M}=T;_.forEach(U=>S.current.delete(U)),b.fetchers.forEach((U,I)=>{U.data!==void 0&&S.current.set(I,U.data)});let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!M||R){$?Ys(()=>o(b)):A(()=>o(b));return}if($){Ys(()=>{f&&(d&&d.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:M.currentLocation,nextLocation:M.nextLocation})});let U=n.window.document.startViewTransition(()=>{Ys(()=>o(b))});U.finished.finally(()=>{Ys(()=>{h(void 0),p(void 0),s(void 0),u({isTransitioning:!1})})}),Ys(()=>p(U));return}f?(d&&d.resolve(),f.skipTransition(),g({state:b,currentLocation:M.currentLocation,nextLocation:M.nextLocation})):(s(b),u({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}))},[n.window,f,d,S,A]);m.useLayoutEffect(()=>n.subscribe(y),[n,y]),m.useEffect(()=>{l.isTransitioning&&!l.flushSync&&h(new _8)},[l]),m.useEffect(()=>{if(d&&a&&n.window){let b=a,T=d.promise,_=n.window.document.startViewTransition(async()=>{A(()=>o(b)),await T});_.finished.finally(()=>{h(void 0),p(void 0),s(void 0),u({isTransitioning:!1})}),p(_)}},[A,a,d,n.window]),m.useEffect(()=>{d&&a&&i.location.key===a.location.key&&d.resolve()},[d,f,i.location,a]),m.useEffect(()=>{!l.isTransitioning&&v&&(s(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),g(void 0))},[l.isTransitioning,v]),m.useEffect(()=>{},[]);let x=m.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,T,_)=>n.navigate(b,{state:T,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(b,T,_)=>n.navigate(b,{replace:!0,state:T,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),w=n.basename||"/",C=m.useMemo(()=>({router:n,navigator:x,static:!1,basename:w}),[n,x,w]);return m.createElement(m.Fragment,null,m.createElement(Pc.Provider,{value:C},m.createElement(mf.Provider,{value:i},m.createElement(C8.Provider,{value:S.current},m.createElement(Fw.Provider,{value:l},m.createElement(p8,{basename:w,location:i.location,navigationType:i.historyAction,navigator:x,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?m.createElement(O8,{routes:n.routes,future:n.future,state:i}):t))))),null)}function O8(e){let{routes:t,future:n,state:r}=e;return t8(t,void 0,r,n)}const j8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d,unstable_viewTransition:h}=t,f=Lw(t,A8),{basename:p}=m.useContext(ii),v,g=!1;if(typeof u=="string"&&N8.test(u)&&(v=u,j8))try{let y=new URL(window.location.href),x=u.startsWith("//")?new URL(y.protocol+u):new URL(u),w=Nr(x.pathname,p);x.origin===y.origin&&w!=null?u=w+x.search+x.hash:g=!0}catch{}let S=X7(u,{relative:i}),E=D8(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function A(y){r&&r(y),y.defaultPrevented||E(y)}return m.createElement("a",Vo({},f,{href:v||S,onClick:g||o?r:A,ref:n,target:l}))}),Oo=m.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:d}=t,h=Lw(t,E8),f=gf(l,{relative:h.relative}),p=eo(),v=m.useContext(mf),{navigator:g,basename:S}=m.useContext(ii),E=v!=null&&F8(f)&&u===!0,A=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,y=p.pathname,x=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),x=x?x.toLowerCase():null,A=A.toLowerCase()),x&&S&&(x=Nr(x,S)||x);const w=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let C=y===A||!a&&y.startsWith(A)&&y.charAt(w)==="/",b=x!=null&&(x===A||!a&&x.startsWith(A)&&x.charAt(A.length)==="/"),T={isActive:C,isPending:b,isTransitioning:E},_=C?r:void 0,$;typeof o=="function"?$=o(T):$=[o,C?"active":null,b?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(T):s;return m.createElement(xe,Vo({},h,{"aria-current":_,className:$,ref:n,style:M,to:l,unstable_viewTransition:u}),typeof d=="function"?d(T):d)});function k8(e){let{getKey:t,storageKey:n}=e;return M8({getKey:t,storageKey:n}),null}var Od;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Od||(Od={}));var tg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tg||(tg={}));function Uw(e){let t=m.useContext(Pc);return t||ye(!1),t}function $8(e){let t=m.useContext(mf);return t||ye(!1),t}function D8(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=i1(),u=eo(),d=gf(e,{relative:a});return m.useCallback(h=>{if(v8(h,n)){h.preventDefault();let f=r!==void 0?r:zo(u)===zo(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,d,r,i,n,e,o,a,s])}function vf(e){let t=m.useRef(lc(e)),n=m.useRef(!1),r=eo(),i=m.useMemo(()=>y8(r.search,n.current?null:t.current),[r.search]),o=i1(),a=m.useCallback((s,l)=>{const u=lc(typeof s=="function"?s(i):s);n.current=!0,o("?"+u,l)},[o,i]);return[i,a]}const cA="react-router-scroll-positions";let du={};function M8(e){let{getKey:t,storageKey:n}=e===void 0?{}:e,{router:r}=Uw(Od.UseScrollRestoration),{restoreScrollPosition:i,preventScrollReset:o}=$8(tg.UseScrollRestoration),{basename:a}=m.useContext(ii),s=eo(),l=u8(),u=c8();m.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),L8(m.useCallback(()=>{if(u.state==="idle"){let d=(t?t(s,l):null)||s.key;du[d]=window.scrollY}try{sessionStorage.setItem(n||cA,JSON.stringify(du))}catch{}window.history.scrollRestoration="auto"},[n,t,u.state,s,l])),typeof document<"u"&&(m.useLayoutEffect(()=>{try{let d=sessionStorage.getItem(n||cA);d&&(du=JSON.parse(d))}catch{}},[n]),m.useLayoutEffect(()=>{let d=t&&a!=="/"?(f,p)=>t(Vo({},f,{pathname:Nr(f.pathname,a)||f.pathname}),p):t,h=r==null?void 0:r.enableScrollRestoration(du,()=>window.scrollY,d);return()=>h&&h()},[r,a,t]),m.useLayoutEffect(()=>{if(i!==!1){if(typeof i=="number"){window.scrollTo(0,i);return}if(s.hash){let d=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(d){d.scrollIntoView();return}}o!==!0&&window.scrollTo(0,0)}},[s,i,o]))}function L8(e,t){let{capture:n}={};m.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function F8(e,t){t===void 0&&(t={});let n=m.useContext(Fw);n==null&&ye(!1);let{basename:r}=Uw(Od.useViewTransitionState),i=gf(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Nr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Nr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Km(i.pathname,a)!=null||Km(i.pathname,o)!=null}const On="UG | Department of Computer Science",U8=3e3,jd="o7",P=(e,t=!1)=>e===0?"0":`${e/16}${t===!0?"":"rem"}`,sr=(e,t=1)=>{const n=/^#([A-Fa-f0-9]{6})$/,r=/hsl\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*\)/,i=/hsla?\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*0(\.\d+)?|1\s*\)/;let o="";if(t<0||t>1)throw new Error("Opacity must be between 0 and 1 inclusive");const a=+String(t).padStart(3,"0");if(e.includes("#")){if(n.test(e))return`${e}${Math.floor(a*255).toString(16).padStart(2,"0")}`;throw new Error("Invalid hexadecimal - Value provided must follow the 6-character syntax (#FFFFFF)")}if(r.test(e))o=e.slice(0,e.length-1)+`,${a})`;else if(i.test(e)){const s=e.split(",");o=s.reduce((l,u,d)=>d===s.length-1?`${l},${String(t)})`:d>0?l+","+u:l+u,"")}if(!o)throw new Error("Invalid color provided - only hex and hsl are supported");return o},oo={small:`${P(768,!0)}em`,medium:`${P(1024,!0)}em`,large1:`${P(1200,!0)}em`,large2:`${P(1440,!0)}em`,large3:`${P(1600,!0)}em`,large4:`${P(1920,!0)}em`,extreme:`${P(2100,!0)}em`},O={small:`min-width: ${oo.small}`,medium:`min-width: ${oo.medium}`,large1:`min-width: ${oo.large1}`,large2:`min-width: ${oo.large2}`,large3:`min-width: ${oo.large3}`,large4:`min-width: ${oo.large4}`,extreme:`min-width: ${oo.extreme}`},q={colors:{primary100:"hsl(213, 68%, 98%)",primary:"hsl(213, 68%, 26%)",primaryDesat:"hsl(217, 23%, 27%)",darkBlue:"hsl(243, 47%, 30%)",yellow100:"hsl(44, 100%, 95%)",yellow:"hsl(44, 100%, 53%)",purple100:"hsl(243, 47%, 95%)",purple:"hsl(243, 47%, 30%)",white:"hsl(0, 0%, 100%)",black:"hsl(213, 8%, 10%)",gray100:"	hsl(220, 23%, 97%)",gray150:"	hsl(216, 16%, 84%)",gray200:"hsl(0, 0%, 77%)",gray300:"hsl(0, 0%, 50%)",gray400:"hsl(212, 7%, 55%)",gray700:"hsl(0, 0%, 12%)"},fonts:{primary:"'Manrope', sans-serif",accent:"'Playfair Display', serif"},ease:{slowStart:"cubic-bezier(0.52, 0.01, 0, 1)",textReveal:"cubic-bezier(0.77, 0, 0.175, 1)"},borderRadius:{small:P(5),medium:P(10),large:P(15)}},Tt=Xn`
  display: flex;
  justify-content: center;
  align-items: center;
`,Lt=Xn`
  display: flex;
  align-items: center;
`,he=Xn`
  display: flex;
  flex-direction: column;
`,As=Xn`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;Xn`
  display: grid;
  place-items: center;
`;const _s=Xn`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Or=Xn`
  content: "";
  position: absolute;
`,de=(e,t=e)=>Xn`
    width: ${e};
    height: ${t};
  `,B8=e=>Xn`
  border-radius: 50%;
  ${de(e)}
`;hr`
  to {
    transform: translateY(0%) skewY(0);
}
`;const Bw=hr`
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  `,zw=hr`
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  `,z8=hr`
from {
  opacity: 0;
  transform: translate(-50%, -48%) scale(0.96);
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
`,V8=hr`
  from {
  opacity: 0;
}
to {
  opacity: 1;
}
`,{colors:uA,fonts:H8}=q,Q8=r7`

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        // insert CSS variables here
    }

    // GENERAL RESETS --------------------------------------

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100%;
        color: ${uA.primary};
        background-color: ${uA.white};
        font-family: ${H8.primary};
        font-size: ${P(16)};
        line-height: 1.5;
        overflow-x: hidden;
    }

    h1, h2 {
        line-height: 1.1;
    }

    h3, h4, h5, h6 {
        line-height: 1.2;
    }

    img {
        display: block;
        ${de("100%")}
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        border-style: none;  // Remove the border on images inside links in IE 10.
        font-style: italic; // For alt text
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        font-family: inherit;
        color: inherit;
        display: inline-block;
        text-decoration: none;
    }

    button, input, select, textarea {
        border: none;
        font-family: inherit;
    }

    button {
        cursor: pointer;
        background: none;
    }

   //  Correct the inability to style clickable types in iOS and Safari.

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }

    // Remove all animations and transitions for users
    // who have it turned off in system settings
    @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}

    // UTILITY STYLES --------------------------------------

`;var Vw={exports:{}},W8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",G8=W8,q8=G8;function Hw(){}function Qw(){}Qw.resetWarningCache=Hw;var Y8=function(){function e(r,i,o,a,s,l){if(l!==q8){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Qw,resetWarningCache:Hw};return n.PropTypes=n,n};Vw.exports=Y8();var K8=Vw.exports;const Ke=Pn(K8);function X8(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ww=m,J8=X8(Ww);function dA(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z8(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var eP=!!(typeof window<"u"&&window.document&&window.document.createElement);function tP(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(d){return d.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(d){Z8(h,d);function h(){return d.apply(this,arguments)||this}h.peek=function(){return s},h.rewind=function(){if(h.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var v=s;return s=void 0,a=[],v};var f=h.prototype;return f.UNSAFE_componentWillMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),l()},f.render=function(){return J8.createElement(o,this.props)},h}(Ww.PureComponent);return dA(u,"displayName","SideEffect("+r(o)+")"),dA(u,"canUseDOM",eP),u}}var nP=tP;const rP=Pn(nP);var iP=typeof Element<"u",oP=typeof Map=="function",aP=typeof Set=="function",sP=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Wu(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Wu(e[r],t[r]))return!1;return!0}var o;if(oP&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Wu(r.value[1],t.get(r.value[0])))return!1;return!0}if(aP&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(sP&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(iP&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Wu(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var lP=function(t,n){try{return Wu(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const cP=Pn(lP);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var fA=Object.getOwnPropertySymbols,uP=Object.prototype.hasOwnProperty,dP=Object.prototype.propertyIsEnumerable;function fP(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function hP(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var pP=hP()?Object.assign:function(e,t){for(var n,r=fP(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)uP.call(n,a)&&(r[a]=n[a]);if(fA){i=fA(n);for(var s=0;s<i.length;s++)dP.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const mP=Pn(pP);var jo={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},ve={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(ve).map(function(e){return ve[e]});var Xe={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Nd={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},cc={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},gP=Object.keys(Nd).reduce(function(e,t){return e[Nd[t]]=t,e},{}),vP=[ve.NOSCRIPT,ve.SCRIPT,ve.STYLE],lr="data-react-helmet",yP=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},AP=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},EP=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),rn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bP=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},hA=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},xP=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},ng=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},wP=function(t){var n=za(t,ve.TITLE),r=za(t,cc.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=za(t,cc.DEFAULT_TITLE);return n||i||void 0},SP=function(t){return za(t,cc.ON_CHANGE_CLIENT_STATE)||function(){}},ap=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return rn({},r,i)},{})},CP=function(t,n){return n.filter(function(r){return typeof r[ve.BASE]<"u"}).map(function(r){return r[ve.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},Ks=function(t,n,r){var i={};return r.filter(function(o){return Array.isArray(o[t])?!0:(typeof o[t]<"u"&&_P("Helmet: "+t+' should be of type "Array". Instead found type "'+yP(o[t])+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,a){var s={};a.filter(function(f){for(var p=void 0,v=Object.keys(f),g=0;g<v.length;g++){var S=v[g],E=S.toLowerCase();n.indexOf(E)!==-1&&!(p===Xe.REL&&f[p].toLowerCase()==="canonical")&&!(E===Xe.REL&&f[E].toLowerCase()==="stylesheet")&&(p=E),n.indexOf(S)!==-1&&(S===Xe.INNER_HTML||S===Xe.CSS_TEXT||S===Xe.ITEM_PROP)&&(p=S)}if(!p||!f[p])return!1;var A=f[p].toLowerCase();return i[p]||(i[p]={}),s[p]||(s[p]={}),i[p][A]?!1:(s[p][A]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var l=Object.keys(s),u=0;u<l.length;u++){var d=l[u],h=mP({},i[d],s[d]);i[d]=h}return o},[]).reverse()},za=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},TP=function(t){return{baseTag:CP([Xe.HREF,Xe.TARGET],t),bodyAttributes:ap(jo.BODY,t),defer:za(t,cc.DEFER),encode:za(t,cc.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ap(jo.HTML,t),linkTags:Ks(ve.LINK,[Xe.REL,Xe.HREF],t),metaTags:Ks(ve.META,[Xe.NAME,Xe.CHARSET,Xe.HTTPEQUIV,Xe.PROPERTY,Xe.ITEM_PROP],t),noscriptTags:Ks(ve.NOSCRIPT,[Xe.INNER_HTML],t),onChangeClientState:SP(t),scriptTags:Ks(ve.SCRIPT,[Xe.SRC,Xe.INNER_HTML],t),styleTags:Ks(ve.STYLE,[Xe.CSS_TEXT],t),title:wP(t),titleAttributes:ap(jo.TITLE,t)}},rg=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){rg(t)},0)}}(),pA=function(t){return clearTimeout(t)},IP=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||rg:global.requestAnimationFrame||rg,PP=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||pA:global.cancelAnimationFrame||pA,_P=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Xs=null,RP=function(t){Xs&&PP(Xs),t.defer?Xs=IP(function(){mA(t,function(){Xs=null})}):(mA(t),Xs=null)},mA=function(t,n){var r=t.baseTag,i=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,h=t.styleTags,f=t.title,p=t.titleAttributes;ig(ve.BODY,i),ig(ve.HTML,o),OP(f,p);var v={baseTag:da(ve.BASE,r),linkTags:da(ve.LINK,a),metaTags:da(ve.META,s),noscriptTags:da(ve.NOSCRIPT,l),scriptTags:da(ve.SCRIPT,d),styleTags:da(ve.STYLE,h)},g={},S={};Object.keys(v).forEach(function(E){var A=v[E],y=A.newTags,x=A.oldTags;y.length&&(g[E]=y),x.length&&(S[E]=v[E].oldTags)}),n&&n(),u(t,g,S)},Gw=function(t){return Array.isArray(t)?t.join(""):t},OP=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Gw(t)),ig(ve.TITLE,n)},ig=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(lr),o=i?i.split(","):[],a=[].concat(o),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),o.indexOf(u)===-1&&o.push(u);var h=a.indexOf(u);h!==-1&&a.splice(h,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(lr):r.getAttribute(lr)!==s.join(",")&&r.setAttribute(lr,s.join(","))}},da=function(t,n){var r=document.head||document.querySelector(ve.HEAD),i=r.querySelectorAll(t+"["+lr+"]"),o=Array.prototype.slice.call(i),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var d in l)if(l.hasOwnProperty(d))if(d===Xe.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===Xe.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var h=typeof l[d]>"u"?"":l[d];u.setAttribute(d,h)}u.setAttribute(lr,"true"),o.some(function(f,p){return s=p,u.isEqualNode(f)})?o.splice(s,1):a.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:a}},qw=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},jP=function(t,n,r,i){var o=qw(r),a=Gw(n);return o?"<"+t+" "+lr+'="true" '+o+">"+ng(a,i)+"</"+t+">":"<"+t+" "+lr+'="true">'+ng(a,i)+"</"+t+">"},NP=function(t,n,r){return n.reduce(function(i,o){var a=Object.keys(o).filter(function(u){return!(u===Xe.INNER_HTML||u===Xe.CSS_TEXT)}).reduce(function(u,d){var h=typeof o[d]>"u"?d:d+'="'+ng(o[d],r)+'"';return u?u+" "+h:h},""),s=o.innerHTML||o.cssText||"",l=vP.indexOf(t)===-1;return i+"<"+t+" "+lr+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},Yw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Nd[i]||i]=t[i],r},n)},kP=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[gP[i]||i]=t[i],r},n)},$P=function(t,n,r){var i,o=(i={key:n},i[lr]=!0,i),a=Yw(r,o);return[K.createElement(ve.TITLE,a,n)]},DP=function(t,n){return n.map(function(r,i){var o,a=(o={key:i},o[lr]=!0,o);return Object.keys(r).forEach(function(s){var l=Nd[s]||s;if(l===Xe.INNER_HTML||l===Xe.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),K.createElement(t,a)})},Ur=function(t,n,r){switch(t){case ve.TITLE:return{toComponent:function(){return $P(t,n.title,n.titleAttributes)},toString:function(){return jP(t,n.title,n.titleAttributes,r)}};case jo.BODY:case jo.HTML:return{toComponent:function(){return Yw(n)},toString:function(){return qw(n)}};default:return{toComponent:function(){return DP(t,n)},toString:function(){return NP(t,n,r)}}}},Kw=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,d=t.styleTags,h=t.title,f=h===void 0?"":h,p=t.titleAttributes;return{base:Ur(ve.BASE,n,i),bodyAttributes:Ur(jo.BODY,r,i),htmlAttributes:Ur(jo.HTML,o,i),link:Ur(ve.LINK,a,i),meta:Ur(ve.META,s,i),noscript:Ur(ve.NOSCRIPT,l,i),script:Ur(ve.SCRIPT,u,i),style:Ur(ve.STYLE,d,i),title:Ur(ve.TITLE,{title:f,titleAttributes:p},i)}},MP=function(t){var n,r;return r=n=function(i){bP(o,i);function o(){return AP(this,o),xP(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(s){return!cP(this.props,s)},o.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case ve.SCRIPT:case ve.NOSCRIPT:return{innerHTML:l};case ve.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,d=s.arrayTypeChildren,h=s.newChildProps,f=s.nestedChildren;return rn({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[rn({},h,this.mapNestedChildrenToProps(u,f))]),l))},o.prototype.mapObjectTypeChildren=function(s){var l,u,d=s.child,h=s.newProps,f=s.newChildProps,p=s.nestedChildren;switch(d.type){case ve.TITLE:return rn({},h,(l={},l[d.type]=p,l.titleAttributes=rn({},f),l));case ve.BODY:return rn({},h,{bodyAttributes:rn({},f)});case ve.HTML:return rn({},h,{htmlAttributes:rn({},f)})}return rn({},h,(u={},u[d.type]=rn({},f),u))},o.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=rn({},l);return Object.keys(s).forEach(function(d){var h;u=rn({},u,(h={},h[d]=s[d],h))}),u},o.prototype.warnOnInvalidChildren=function(s,l){return!0},o.prototype.mapChildrenToProps=function(s,l){var u=this,d={};return K.Children.forEach(s,function(h){if(!(!h||!h.props)){var f=h.props,p=f.children,v=hA(f,["children"]),g=kP(v);switch(u.warnOnInvalidChildren(h,p),h.type){case ve.LINK:case ve.META:case ve.NOSCRIPT:case ve.SCRIPT:case ve.STYLE:d=u.flattenArrayTypeChildren({child:h,arrayTypeChildren:d,newChildProps:g,nestedChildren:p});break;default:l=u.mapObjectTypeChildren({child:h,newProps:l,newChildProps:g,nestedChildren:p});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},o.prototype.render=function(){var s=this.props,l=s.children,u=hA(s,["children"]),d=rn({},u);return l&&(d=this.mapChildrenToProps(l,d)),K.createElement(t,d)},EP(o,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),o}(K.Component),n.propTypes={base:Ke.object,bodyAttributes:Ke.object,children:Ke.oneOfType([Ke.arrayOf(Ke.node),Ke.node]),defaultTitle:Ke.string,defer:Ke.bool,encodeSpecialCharacters:Ke.bool,htmlAttributes:Ke.object,link:Ke.arrayOf(Ke.object),meta:Ke.arrayOf(Ke.object),noscript:Ke.arrayOf(Ke.object),onChangeClientState:Ke.func,script:Ke.arrayOf(Ke.object),style:Ke.arrayOf(Ke.object),title:Ke.string,titleAttributes:Ke.object,titleTemplate:Ke.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=Kw({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},LP=function(){return null},FP=rP(TP,RP,Kw)(LP),mn=MP(FP);mn.renderStatic=mn.rewind;function yf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var UP=["color"],BP=m.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,i=yf(e,UP);return m.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i,{ref:t}),m.createElement("path",{d:"M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),zP=["color"],VP=m.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,i=yf(e,zP);return m.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i,{ref:t}),m.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),HP=["color"],Xw=m.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,i=yf(e,HP);return m.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i,{ref:t}),m.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),QP=["color"],WP=m.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,i=yf(e,QP);return m.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i,{ref:t}),m.createElement("path",{d:"M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});const Re=G.div`
  width: min(92.5%, ${P(1200)});
  margin: 0 auto;

  .main-nav {
    margin-bottom: 20px;
    /* padding-bottom: 20px; */
  }

  .sub-nav {
    font-size: 15px;
  }
`;G.div`
  width: min(90%, ${P(1920)});
  margin: 0 auto;
`;const GP=e=>m.createElement("svg",{width:64,height:64,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M40.3584 45.5H37.1441V18.5H40.3584V45.5ZM23.9655 45.5H26.537C26.7138 45.5 26.8584 45.3554 26.8584 45.1786L26.8584 18.8214C26.8584 18.6446 26.7138 18.5 26.537 18.5L23.9655 18.5C23.7888 18.5 23.6441 18.6446 23.6441 18.8214L23.6441 45.1786C23.6441 45.3554 23.7888 45.5 23.9655 45.5Z",fill:"white"}),m.createElement("rect",{x:.5,y:.5,width:63,height:63,rx:31.5,stroke:"white"})),qP=e=>m.createElement("svg",{width:91,height:65,viewBox:"0 0 91 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M90.8 12.6C77 14 70.2 21 71.2 32.4H83.6V64.4H51.2V37.4C51.2 11 64.4 0.399998 88.2 -8.58307e-06L90.8 12.6ZM40 12.6C26.2 14 19.4 21 20.4 32.4H32.8V64.4H0.400001V37.4C0.400001 11 13.6 0.399998 37.4 -8.58307e-06L40 12.6Z",fill:"#FFBF0D"})),{colors:gA}=q,YP=G.section`
  position: relative;
  color: ${gA.white};
  height: 90vh;
  height: 90svh;

  &::before {
    ${Or}
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  img {
    position: absolute;
    z-index: -1;
    background-color: ${gA.gray100};
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .container {
    ${Tt}
    height: 100%;
  }

  .text-content {
    position: relative;
    z-index: 2;

    svg {
      ${de(P(60))}

      @media screen and (${O.small}) {
        ${de("unset")}
      }
    }

    .testimonial {
      font-size: clamp(${P(26)}, 8vw, ${P(35)});
      font-weight: 800;
      line-height: 1.2;

      @media screen and (${O.small}) {
        margin-top: 1rem;
      }

      @media screen and (${O.medium}) {
        font-size: clamp(${P(35)}, 7vw, ${P(45)});
      }

      @media screen and (${O.large1}) {
        font-size: clamp(${P(45)}, 5vw, ${P(54)});
      }
    }

    .author {
      line-height: 1.2;
      margin-top: 1.5rem;
      font-weight: 300;
      font-size: clamp(${P(16)}, 6vw, ${P(22)});

      span {
        font-weight: 600;
      }
    }
  }

  .cta-wrapper {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 3;
    display: flex;

    @media screen and (${O.medium}) {
      bottom: 2rem;
      right: 2rem;
    }

    @media screen and (${O.large2}) {
      bottom: 3rem;
      right: 3rem;
    }
  }

  .scroll-cta {
    z-index: 4;
    cursor: pointer;
    ${de(P(40))}
    margin-left: auto;

    @media screen and (${O.small}) {
      bottom: 3rem;
      right: 3rem;
      ${de(P(50))};
    }

    svg {
      ${de("100%")}
    }
  }
`,KP=hr`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,XP=G(xe)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  border-radius: 50%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border: 4px solid rgba(255, 255, 255, 0.7);
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    border-radius: 50%;
    animation: ${KP} 10s linear infinite;
    z-index: -1;
  }
`,Rs=({quote:e,quoteAuthor:t,images:n=[]})=>{var l;const[r,i]=m.useState(0),[o,a]=m.useState(!1);m.useEffect(()=>{if(n.length===0)return;const u=setInterval(()=>{o||i(d=>(d+1)%n.length)},5e3);return()=>clearInterval(u)},[n.length,o]);const s=()=>{a(!o)};return c.jsxs(YP,{children:[c.jsx("img",{src:(l=n[r])==null?void 0:l.url,alt:"",width:"100%",height:"100%"}),c.jsx("div",{className:"overlay"}),c.jsx(Re,{className:"container",children:c.jsxs("div",{className:"text-content",children:[c.jsx(qP,{}),c.jsx("p",{className:"testimonial",children:e}),c.jsx("p",{className:"author",children:t})]})}),c.jsx(Re,{className:"cta-wrapper",children:c.jsx(XP,{to:"#",className:"scroll-cta",onClick:s,children:o?c.jsx(WP,{}):c.jsx(GP,{})})})]})};var Jw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vA=K.createContext&&K.createContext(Jw),JP=["attr","size","title"];function ZP(e,t){if(e==null)return{};var n=e_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function e_(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function kd(){return kd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kd.apply(this,arguments)}function yA(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yA(Object(n),!0).forEach(function(r){t_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yA(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t_(e,t,n){return t=n_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n_(e){var t=r_(e,"string");return typeof t=="symbol"?t:t+""}function r_(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zw(e){return e&&e.map((t,n)=>K.createElement(t.tag,$d({key:n},t.attr),Zw(t.child)))}function Ut(e){return t=>K.createElement(i_,kd({attr:$d({},e.attr)},t),Zw(e.child))}function i_(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=ZP(e,JP),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),K.createElement("svg",kd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:$d($d({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&K.createElement("title",null,o),e.children)};return vA!==void 0?K.createElement(vA.Consumer,null,n=>t(n)):t(Jw)}function o_(e){return Ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M348.3 216.4c-5 5.1-13.3 5.1-18.4.1L269 155.8v231.3c0 7.1-5.8 12.9-13 12.9s-13-5.8-13-12.9V155.8l-60.9 60.8c-5.1 5-13.3 4.9-18.4-.1-5-5.1-5-13.2.1-18.3l83-82.4c1.2-1.1 2.5-2 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l83 82.4c5.2 4.9 5.3 13.1.3 18.2z"},child:[]}]})(e)}function a_(e){return Ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"},child:[]},{tag:"path",attr:{d:"M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"},child:[]}]})(e)}const s_=hr`
  0%, 8%, 15%, 100% {
    transform: translateY(0);
  }
  5%, 12% {
    transform: translateY(-15px);
  }
`,l_=G(xe)`
    position: fixed;
    bottom: 3rem;
    right: 1rem;
    background-color: #fff;
    border: 1px solid #ccc; 
    border-radius: 50%; 
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
    cursor: pointer;
    z-index: 1000;
    margin: 0 auto;
     ${de(P(50))}
    text-align: center;

    .color {
     color: #000;
    /* animation: ${s_} 10s infinite ${q.ease.textReveal}; */
    }
`,pr=()=>{const[e,t]=m.useState(!1);m.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>100?t(!0):t(!1)})},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx("div",{className:"",children:e&&c.jsx(l_,{to:"#",onClick:n,title:"Scroll to top",children:c.jsx(o_,{size:24,className:"color"})})})},c_="/assets/great-hall-artwork-BIacy5Lf.webp",e5=e=>m.createElement("svg",{width:220,height:37,viewBox:"0 0 220 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},m.createElement("rect",{width:220,height:36.6997,fill:"url(#pattern0)"}),m.createElement("defs",null,m.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},m.createElement("use",{xlinkHref:"#image0_1023_13161",transform:"scale(0.000901713 0.00540541)"})),m.createElement("image",{id:"image0_1023_13161",width:1109,height:185,xlinkHref:"data:image/png;base64,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a3ca7FxWh9ZJ6np3jd91aXfA7uZ6+/rNDToNZXvAHsme53vT9l7fF7avbT9jf/0BiwPVB2kHSxuRxumN/U1ZTd3NKc1dLaEtba1erQcPORzaftjkcNUR7SPLjlKOLjg6eKzo2MBx0fG+E5knHrVNartzMvnk1faY9s5TYafOng46ffIM88yxs95nD5/zPNdynnG+6YLbhcYO146Dv7v+frDTrbPxovvF5ksel1q7xnYdvex7+cSVgCunr7KvXrgWea3resL1mzfG3+i+ybv57FburVe3C29/vjP3LuFu6T31e+X3De7X/GHzR0O3W/eRBwEPOh7GPbzziPvoxeP8x196FjyhPil/avy09pnTs8O9Qb2Xno973vNC9OJzX8mfGn9Wv7R+eeAvv786+pP7e16JXw2+XvJG7832ty5v2waiB+6/y3v3+X3pB70POz4yPp75lPTp6eepX0hfKr7afG39Fvbt7mDe4KCII+bIfgUw2NCMDABebweAmgIADe7PKOPk+z+ZIfI9qwyB/4Tle0SZuQFQD//fY/rg380NAPZshdsvqK82HoBoKgDxHgB1dh5uQ3s12b5SakS4D9jE/pqelw7+jcn3nD/k/fMZSFVdwM/nfwGd/nw3o/AgJAAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAEVaADAAQAAAABAAAAuQAAAADI6vBRAABAAElEQVR4Ae29D9AeVZ3n28EkQAIBMeAyMnGkQDOj8c4GR10JoIzFkGzdWWIBo7jrILDobpGwdwspQNASEClC7V0Saq4yiMqsGRXLZObWksiOoiS46EjGK85M+FM4ZnAQiPwJSfgT9L396dfzpt9++/Q53X26n+5+vqfqfZ/n6T59/ny6+/Q53/6d34kiBREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQARFohMCsRlJVoiIgAiIgAq0T2LvrqYm9zz8VzTv0yGjegiPVvrd+BpShCIiACIiACIiACIjAuBGYPW4VVn1FQAREYKgEHntwS/TwDzdEx79t5VCrqHqJgAiIgAiIgAiIgAiIQKcIHNCp0qgwIiACIiACIiACIiACIiACIiACIiACItATArJU6cmJUjFFYBwI7Hj8lxM7Hn86+udfTP5R5/T3LIN3/f5xU5vM92VLj9e0lykq+iICIiACIiACIiACIiACItAkgcGIKjfctmmiSVBKO4p++18dEX1gxTs0YNXFEIzA1m0PT3zvR49E/P3k4Z9HJ5x9dam07/27R2bEP/Kkiye4Vt9y/OsihJYT478lbzxG1+0MUtogAiIgAiIgAiLQFgH6PORFnycb6LeYvsvhh85TnyULSL9FoOMEBnPTMpDqOOveF+/Ef31ctHHtqk5cM+bBFALqqC0bnn1+7wSCQohw2CEHd1pAoK6btjwQbdoa/8WfbQW4LD9pSbR82ZJoxclv7cQ13ETdH/rbb0wYnypv/IP3DbaeTbArk6ax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"}))),u_="data:image/webp;base64,UklGRhgEAABXRUJQVlA4WAoAAAAgAAAAOwAAOwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKgIAABARAJ0BKjwAPAA+USiQRqOioaEiCIhwCglpO4egN85xUpC//8+ZgQrdL/6f9eT/0+Rz//9P4DMt9a/yvpY2k2hnYD/4cfg83/wm6sf/X/8/9a57fT1/wRe+BjPyVcbO7xaJbcFy0/VUUyQwRUwlLLLPUopNiI6OT6ItCh5sVttOFhb6q8A+Lr819yqBAGzO1pAA/vwG4qHFJB3EVG4dvSfiLSkg2lkS9ocg0bsWcsKixRRkhtxJGmZiiAS2mpIFVXJwKaCFUoW0O33SITmOBLtDpf6M+jTvcLM6LBGJzX+/78qXTUoHIUTPwlhnx1VgGSeq1DAzRzXZLKxo3J0Wp2v0JheY28fJDUVbwe5w92E3zcOteR8kmu+DBdV2nlQDNO9LfozKxqVa1+hMJvoMVTwDa7ZC1gxWX+xeyJ/+y2sD2I9iI0pddE/V6NjNodjYQx77N/QX2xyn9GudLXYtCwhlj0uvnIgninserYM7H9/Y1Qz46qx1sw/EuQWQgDCtpeoKk4X8ZyQAckjdZ5dHty96A5yIJ4tS9d9abbAreezB76zsay4RwJdtt+Hj5wJJEtzL1ZLkF16FxQNAqDkqsHrHZ0TXDl/sYGhzS8yNyb1+Uygr4y3SEoMoC8d9Gd7+T0voBOeXf2ysVypBIRkhtxJGmZiiAS2TbxeSPxkftSn1Np4LrniRvA2OsB9Eu7E4L8gsxKjWrgFzJRMv+jZmDJzZ55H2QeQAAAAA",d_=hr`
  to {
    transform: translateY(-100%);
  }
`,f_=hr`
  to {
    transform: translateY(200%);
    opacity: 0;
  }
`,{ease:AA,fonts:AQ}=q,h_=hr`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`,p_=G.div`
  --height-adjustment: -200px;

  ${Tt}
  position: fixed;
  inset: 0 0 var(--height-adjustment) 0;
  background: #f6f6f6 url(${u_}) repeat;
  z-index: 9999;
  overflow: hidden;

  &.exit-animation {
    animation: ${d_} 1.5s ${AA.textReveal} 0.5s forwards;
    pointer-events: none;

    .decor-1 {
      animation: ${f_} 2.25s ${AA.slowStart} 0.5s forwards;
    }
  }

  .decor-1 {
    position: absolute;
    bottom: 0;
    left: min(5%, ${P(200)});
    opacity: 0.2;
    max-height: ${P(700)};

    @media screen and (${O.large2}) {
      left: min(20%, ${P(220)});
    }
    @media screen and (${O.large3}) {
      left: min(20%, ${P(320)});
    }
    @media screen and (${O.large3}) {
      max-height: unset;
    }
  }

  .content {
    ${he}
    gap: 2.5rem;
    width: min(90%, ${P(500)});
    margin-inline: auto;
    margin-top: var(--height-adjustment);
    text-align: center;

    .logo {
      display: block;
      width: 300;
      margin-inline: auto;
    }

    .loader {
      ${Tt}
      gap: 1rem;

      .square {
        width: 20px;
        height: 20px;
        background-color: ${q.colors.primary};
        animation: ${h_} 1s infinite;
        &:nth-child(2) {
          animation-delay: 0.1s;
        }
        &:nth-child(3) {
          animation-delay: 0.2s;
        }
        &:nth-child(4) {
          animation-delay: 0.3s;
        }
      }
    }
  }
`,mr=({isLoading:e,...t})=>c.jsxs(p_,{className:e?"":"exit-animation","aria-hidden":!0,tabIndex:-1,...t,children:[c.jsx("div",{className:"decor-1",children:c.jsx("img",{src:c_,alt:"Great Hall Artwork"})}),c.jsxs("div",{className:"content",children:[c.jsx(e5,{className:"logo"}),c.jsxs("div",{className:"loader",children:[c.jsx("div",{className:"square"}),c.jsx("div",{className:"square"}),c.jsx("div",{className:"square"}),c.jsx("div",{className:"square"})]})]})]}),m_={data:[{attributes:{url:"/gal11.JPG"}},{attributes:{url:"/gal1.JPG"}},{attributes:{url:"/gal7.jpg"}},{attributes:{url:"/gal12.JPG"}},{attributes:{url:"/gal5.jpg"}},{attributes:{url:"/gal9.JPG"}},{attributes:{url:"/gal0.JPG"}},{attributes:{url:"/gal3.JPG"}},{attributes:{url:"/gal4.jpg"}},{attributes:{url:"/gal8.JPG"}},{attributes:{url:"/gal10.JPG"}},{attributes:{url:"/gal2.JPG"}},{attributes:{url:"/gal6.jpg"}}]},Rc=[{url:"/hall-front.JPG",mime:"image/jpeg",hash:"hall-front"},{url:"/hall.JPG",mime:"image/jpeg",hash:"hall-front"},{url:"/banner0.JPG",mime:"image/jpeg",hash:"hall-front"},{url:"/banner1.JPG",mime:"image/jpeg",hash:"hall-front"},{url:"/banner3.jpg",mime:"image/jpeg",hash:"hall-front"}],g_={quote:"YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION.",quoteAuthor:"We are a vibrant community of scholars, researchers, and students dedicated to advancing the frontiers of computer science and its applications. Our faculty members are experts in their fields and are passionate about teaching and mentoring the next generation of computer scientists.",images:Rc},t5=[{id:1,title:"Overview",hasIcon:!1,link:"/about-us/overview"},{id:2,title:"History",hasIcon:!1,link:"/about-us/history"},{id:3,title:"Mission & Vision",hasIcon:!1,link:"/about-us/mission-vision"},{id:4,title:"Leadership",hasIcon:!1,link:"/about-us/leadership"},{id:5,title:"Affiliates Partners",hasIcon:!1,link:"/about-us/affiliates-partners"}],s1=JSON,v_=e=>e.toUpperCase(),y_=e=>{const t={};return e.forEach((n,r)=>{t[r]=n}),t},A_=(e,t,n)=>e.document?e:{document:e,variables:t,requestHeaders:n,signal:void 0},E_=(e,t,n)=>e.query?e:{query:e,variables:t,requestHeaders:n,signal:void 0},b_=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0},x_=(e,t,...n)=>{const[r,i]=n;return e.document?e:{url:e,document:t,variables:r,requestHeaders:i,signal:void 0}};function Gu(e,t){if(!!!e)throw new Error(t)}function w_(e){return typeof e=="object"&&e!==null}function S_(e,t){if(!!!e)throw new Error("Unexpected invariant triggered.")}const C_=/\r\n|[\n\r]/g;function og(e,t){let n=0,r=1;for(const i of e.body.matchAll(C_)){if(typeof i.index=="number"||S_(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function T_(e){return n5(e.source,og(e.source,e.start))}function n5(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=t.line===1?n:0,l=t.column+s,u=`${e.name}:${a}:${l}
`,d=r.split(/\r\n|[\n\r]/g),h=d[i];if(h.length>120){const f=Math.floor(l/80),p=l%80,v=[];for(let g=0;g<h.length;g+=80)v.push(h.slice(g,g+80));return u+EA([[`${a} |`,v[0]],...v.slice(1,f+1).map(g=>["|",g]),["|","^".padStart(p)],["|",v[f+1]]])}return u+EA([[`${a-1} |`,d[i-1]],[`${a} |`,h],["|","^".padStart(l)],[`${a+1} |`,d[i+1]]])}function EA(e){const t=e.filter(([r,i])=>i!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,i])=>r.padStart(n)+(i?" "+i:"")).join(`
`)}function I_(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class l1 extends Error{constructor(t,...n){var r,i,o;const{nodes:a,source:s,positions:l,path:u,originalError:d,extensions:h}=I_(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=bA(Array.isArray(a)?a:a?[a]:void 0);const f=bA((r=this.nodes)===null||r===void 0?void 0:r.map(v=>v.loc).filter(v=>v!=null));this.source=s??(f==null||(i=f[0])===null||i===void 0?void 0:i.source),this.positions=l??(f==null?void 0:f.map(v=>v.start)),this.locations=l&&s?l.map(v=>og(s,v)):f==null?void 0:f.map(v=>og(v.source,v.start));const p=w_(d==null?void 0:d.extensions)?d==null?void 0:d.extensions:void 0;this.extensions=(o=h??p)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,l1):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+T_(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+n5(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function bA(e){return e===void 0||e.length===0?void 0:e}function St(e,t,n){return new l1(`Syntax Error: ${n}`,{source:e,positions:[t]})}class P_{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class r5{constructor(t,n,r,i,o,a){this.kind=t,this.start=n,this.end=r,this.line=i,this.column=o,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const i5={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},__=new Set(Object.keys(i5));function xA(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&__.has(t)}var Na;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Na||(Na={}));var ag;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(ag||(ag={}));var ce;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(ce||(ce={}));function sg(e){return e===9||e===32}function uc(e){return e>=48&&e<=57}function o5(e){return e>=97&&e<=122||e>=65&&e<=90}function a5(e){return o5(e)||e===95}function R_(e){return o5(e)||uc(e)||e===95}function O_(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let a=0;a<e.length;++a){var o;const s=e[a],l=j_(s);l!==s.length&&(r=(o=r)!==null&&o!==void 0?o:a,i=a,a!==0&&l<n&&(n=l))}return e.map((a,s)=>s===0?a:a.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,i+1)}function j_(e){let t=0;for(;t<e.length&&sg(e.charCodeAt(t));)++t;return t}function N_(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,o=r.length>1&&r.slice(1).every(p=>p.length===0||sg(p.charCodeAt(0))),a=n.endsWith('\\"""'),s=e.endsWith('"')&&!a,l=e.endsWith("\\"),u=s||l,d=!i||e.length>70||u||o||a;let h="";const f=i&&sg(e.charCodeAt(0));return(d&&!f||o)&&(h+=`
`),h+=n,(d||u)&&(h+=`
`),'"""'+h+'"""'}var V;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(V||(V={}));class k_{constructor(t){const n=new r5(V.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==V.EOF)do if(t.next)t=t.next;else{const n=D_(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===V.COMMENT);return t}}function $_(e){return e===V.BANG||e===V.DOLLAR||e===V.AMP||e===V.PAREN_L||e===V.PAREN_R||e===V.SPREAD||e===V.COLON||e===V.EQUALS||e===V.AT||e===V.BRACKET_L||e===V.BRACKET_R||e===V.BRACE_L||e===V.PIPE||e===V.BRACE_R}function Os(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Af(e,t){return s5(e.charCodeAt(t))&&l5(e.charCodeAt(t+1))}function s5(e){return e>=55296&&e<=56319}function l5(e){return e>=56320&&e<=57343}function Ho(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return V.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function ft(e,t,n,r,i){const o=e.line,a=1+n-e.lineStart;return new r5(t,n,r,o,a,i)}function D_(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const o=n.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return M_(e,i);case 33:return ft(e,V.BANG,i,i+1);case 36:return ft(e,V.DOLLAR,i,i+1);case 38:return ft(e,V.AMP,i,i+1);case 40:return ft(e,V.PAREN_L,i,i+1);case 41:return ft(e,V.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return ft(e,V.SPREAD,i,i+3);break;case 58:return ft(e,V.COLON,i,i+1);case 61:return ft(e,V.EQUALS,i,i+1);case 64:return ft(e,V.AT,i,i+1);case 91:return ft(e,V.BRACKET_L,i,i+1);case 93:return ft(e,V.BRACKET_R,i,i+1);case 123:return ft(e,V.BRACE_L,i,i+1);case 124:return ft(e,V.PIPE,i,i+1);case 125:return ft(e,V.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?V_(e,i):F_(e,i)}if(uc(o)||o===45)return L_(e,i,o);if(a5(o))return H_(e,i);throw St(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Os(o)||Af(n,i)?`Unexpected character: ${Ho(e,i)}.`:`Invalid character: ${Ho(e,i)}.`)}return ft(e,V.EOF,r,r)}function M_(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(o===10||o===13)break;if(Os(o))++i;else if(Af(n,i))i+=2;else break}return ft(e,V.COMMENT,t,i,n.slice(t+1,i))}function L_(e,t,n){const r=e.source.body;let i=t,o=n,a=!1;if(o===45&&(o=r.charCodeAt(++i)),o===48){if(o=r.charCodeAt(++i),uc(o))throw St(e.source,i,`Invalid number, unexpected digit after 0: ${Ho(e,i)}.`)}else i=sp(e,i,o),o=r.charCodeAt(i);if(o===46&&(a=!0,o=r.charCodeAt(++i),i=sp(e,i,o),o=r.charCodeAt(i)),(o===69||o===101)&&(a=!0,o=r.charCodeAt(++i),(o===43||o===45)&&(o=r.charCodeAt(++i)),i=sp(e,i,o),o=r.charCodeAt(i)),o===46||a5(o))throw St(e.source,i,`Invalid number, expected digit but got: ${Ho(e,i)}.`);return ft(e,a?V.FLOAT:V.INT,t,i,r.slice(t,i))}function sp(e,t,n){if(!uc(n))throw St(e.source,t,`Invalid number, expected digit but got: ${Ho(e,t)}.`);const r=e.source.body;let i=t+1;for(;uc(r.charCodeAt(i));)++i;return i}function F_(e,t){const n=e.source.body,r=n.length;let i=t+1,o=i,a="";for(;i<r;){const s=n.charCodeAt(i);if(s===34)return a+=n.slice(o,i),ft(e,V.STRING,t,i+1,a);if(s===92){a+=n.slice(o,i);const l=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?U_(e,i):B_(e,i):z_(e,i);a+=l.value,i+=l.size,o=i;continue}if(s===10||s===13)break;if(Os(s))++i;else if(Af(n,i))i+=2;else throw St(e.source,i,`Invalid character within String: ${Ho(e,i)}.`)}throw St(e.source,i,"Unterminated string.")}function U_(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const o=n.charCodeAt(t+i++);if(o===125){if(i<5||!Os(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|vl(o),r<0)break}throw St(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function B_(e,t){const n=e.source.body,r=wA(n,t+2);if(Os(r))return{value:String.fromCodePoint(r),size:6};if(s5(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=wA(n,t+8);if(l5(i))return{value:String.fromCodePoint(r,i),size:12}}throw St(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function wA(e,t){return vl(e.charCodeAt(t))<<12|vl(e.charCodeAt(t+1))<<8|vl(e.charCodeAt(t+2))<<4|vl(e.charCodeAt(t+3))}function vl(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function z_(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw St(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function V_(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,o=t+3,a=o,s="";const l=[];for(;o<r;){const u=n.charCodeAt(o);if(u===34&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34){s+=n.slice(a,o),l.push(s);const d=ft(e,V.BLOCK_STRING,t,o+3,O_(l).join(`
`));return e.line+=l.length-1,e.lineStart=i,d}if(u===92&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34&&n.charCodeAt(o+3)===34){s+=n.slice(a,o),a=o+1,o+=4;continue}if(u===10||u===13){s+=n.slice(a,o),l.push(s),u===13&&n.charCodeAt(o+1)===10?o+=2:++o,s="",a=o,i=o;continue}if(Os(u))++o;else if(Af(n,o))o+=2;else throw St(e.source,o,`Invalid character within String: ${Ho(e,o)}.`)}throw St(e.source,o,"Unterminated string.")}function H_(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(R_(o))++i;else break}return ft(e,V.NAME,t,i,n.slice(t,i))}const Q_=10,c5=2;function c1(e){return Ef(e,[])}function Ef(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return W_(e,t);default:return String(e)}}function W_(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(G_(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Ef(r,n)}else if(Array.isArray(e))return Y_(e,n);return q_(e,n)}function G_(e){return typeof e.toJSON=="function"}function q_(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>c5?"["+K_(e)+"]":"{ "+n.map(([i,o])=>i+": "+Ef(o,t)).join(", ")+" }"}function Y_(e,t){if(e.length===0)return"[]";if(t.length>c5)return"[Array]";const n=Math.min(Q_,e.length),r=e.length-n,i=[];for(let o=0;o<n;++o)i.push(Ef(e[o],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function K_(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const X_=globalThis.process&&!0,J_=X_?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;const i=n.prototype[Symbol.toStringTag],o=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(i===o){const a=c1(t);throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class u5{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||Gu(!1,`Body must be a string. Received: ${c1(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||Gu(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Gu(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Z_(e){return J_(e,u5)}function eR(e,t){return new tR(e,t).parseDocument()}class tR{constructor(t,n={}){const r=Z_(t)?t:new u5(t);this._lexer=new k_(r),this._options=n,this._tokenCounter=0}parseName(){const t=this.expectToken(V.NAME);return this.node(t,{kind:ce.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:ce.DOCUMENT,definitions:this.many(V.SOF,this.parseDefinition,V.EOF)})}parseDefinition(){if(this.peek(V.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===V.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw St(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(V.BRACE_L))return this.node(t,{kind:ce.OPERATION_DEFINITION,operation:Na.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(V.NAME)&&(r=this.parseName()),this.node(t,{kind:ce.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(V.NAME);switch(t.value){case"query":return Na.QUERY;case"mutation":return Na.MUTATION;case"subscription":return Na.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(V.PAREN_L,this.parseVariableDefinition,V.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:ce.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(V.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(V.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(V.DOLLAR),this.node(t,{kind:ce.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:ce.SELECTION_SET,selections:this.many(V.BRACE_L,this.parseSelection,V.BRACE_R)})}parseSelection(){return this.peek(V.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,i;return this.expectOptionalToken(V.COLON)?(r=n,i=this.parseName()):i=n,this.node(t,{kind:ce.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(V.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(V.PAREN_L,n,V.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(V.COLON),this.node(n,{kind:ce.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(V.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(V.NAME)?this.node(t,{kind:ce.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:ce.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:ce.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:ce.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case V.BRACKET_L:return this.parseList(t);case V.BRACE_L:return this.parseObject(t);case V.INT:return this.advanceLexer(),this.node(n,{kind:ce.INT,value:n.value});case V.FLOAT:return this.advanceLexer(),this.node(n,{kind:ce.FLOAT,value:n.value});case V.STRING:case V.BLOCK_STRING:return this.parseStringLiteral();case V.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:ce.BOOLEAN,value:!0});case"false":return this.node(n,{kind:ce.BOOLEAN,value:!1});case"null":return this.node(n,{kind:ce.NULL});default:return this.node(n,{kind:ce.ENUM,value:n.value})}case V.DOLLAR:if(t)if(this.expectToken(V.DOLLAR),this._lexer.token.kind===V.NAME){const r=this._lexer.token.value;throw St(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:ce.STRING,value:t.value,block:t.kind===V.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:ce.LIST,values:this.any(V.BRACKET_L,n,V.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:ce.OBJECT,fields:this.any(V.BRACE_L,n,V.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(V.COLON),this.node(n,{kind:ce.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(V.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(V.AT),this.node(n,{kind:ce.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(V.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(V.BRACKET_R),n=this.node(t,{kind:ce.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(V.BANG)?this.node(t,{kind:ce.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:ce.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(V.STRING)||this.peek(V.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(V.BRACE_L,this.parseOperationTypeDefinition,V.BRACE_R);return this.node(t,{kind:ce.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(V.COLON);const r=this.parseNamedType();return this.node(t,{kind:ce.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:ce.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:ce.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(V.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(V.BRACE_L,this.parseFieldDefinition,V.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(V.COLON);const o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:ce.FIELD_DEFINITION,description:n,name:r,arguments:i,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(V.PAREN_L,this.parseInputValueDef,V.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(V.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(V.EQUALS)&&(o=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(t,{kind:ce.INPUT_VALUE_DEFINITION,description:n,name:r,type:i,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:ce.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:a})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:ce.UNION_TYPE_DEFINITION,description:n,name:r,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(V.EQUALS)?this.delimitedMany(V.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:ce.ENUM_TYPE_DEFINITION,description:n,name:r,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(V.BRACE_L,this.parseEnumValueDefinition,V.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:ce.ENUM_VALUE_DEFINITION,description:n,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw St(this._lexer.source,this._lexer.token.start,`${fu(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:ce.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(V.BRACE_L,this.parseInputValueDef,V.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===V.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(V.BRACE_L,this.parseOperationTypeDefinition,V.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:ce.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:ce.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:ce.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:ce.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:ce.UNION_TYPE_EXTENSION,name:n,directives:r,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:ce.ENUM_TYPE_EXTENSION,name:n,directives:r,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:ce.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(V.AT);const r=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(t,{kind:ce.DIRECTIVE_DEFINITION,description:n,name:r,arguments:i,repeatable:o,locations:a})}parseDirectiveLocations(){return this.delimitedMany(V.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(ag,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new P_(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw St(this._lexer.source,n.start,`Expected ${d5(t)}, found ${fu(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===V.NAME&&n.value===t)this.advanceLexer();else throw St(this._lexer.source,n.start,`Expected "${t}", found ${fu(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===V.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return St(this._lexer.source,n.start,`Unexpected ${fu(n)}.`)}any(t,n,r){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(r);)i.push(n.call(this));return i}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(t,n,r){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(t!==void 0&&n.kind!==V.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw St(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function fu(e){const t=e.value;return d5(e.kind)+(t!=null?` "${t}"`:"")}function d5(e){return $_(e)?`"${e}"`:e}function nR(e){return`"${e.replace(rR,iR)}"`}const rR=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function iR(e){return oR[e.charCodeAt(0)]}const oR=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],aR=Object.freeze({});function sR(e,t,n=i5){const r=new Map;for(const E of Object.values(ce))r.set(E,lR(t,E));let i,o=Array.isArray(e),a=[e],s=-1,l=[],u=e,d,h;const f=[],p=[];do{s++;const E=s===a.length,A=E&&l.length!==0;if(E){if(d=p.length===0?void 0:f[f.length-1],u=h,h=p.pop(),A)if(o){u=u.slice();let x=0;for(const[w,C]of l){const b=w-x;C===null?(u.splice(b,1),x++):u[b]=C}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[x,w]of l)u[x]=w}s=i.index,a=i.keys,l=i.edits,o=i.inArray,i=i.prev}else if(h){if(d=o?s:a[s],u=h[d],u==null)continue;f.push(d)}let y;if(!Array.isArray(u)){var v,g;xA(u)||Gu(!1,`Invalid AST Node: ${c1(u)}.`);const x=E?(v=r.get(u.kind))===null||v===void 0?void 0:v.leave:(g=r.get(u.kind))===null||g===void 0?void 0:g.enter;if(y=x==null?void 0:x.call(t,u,d,h,f,p),y===aR)break;if(y===!1){if(!E){f.pop();continue}}else if(y!==void 0&&(l.push([d,y]),!E))if(xA(y))u=y;else{f.pop();continue}}if(y===void 0&&A&&l.push([d,u]),E)f.pop();else{var S;i={inArray:o,index:s,keys:a,edits:l,prev:i},o=Array.isArray(u),a=o?u:(S=n[u.kind])!==null&&S!==void 0?S:[],s=-1,l=[],h&&p.push(h),h=u}}while(i!==void 0);return l.length!==0?l[l.length-1][1]:e}function lR(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function cR(e){return sR(e,dR)}const uR=80,dR={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>ne(e.definitions,`

`)},OperationDefinition:{leave(e){const t=Ce("(",ne(e.variableDefinitions,", "),")"),n=ne([e.operation,ne([e.name,t]),ne(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+Ce(" = ",n)+Ce(" ",ne(r," "))},SelectionSet:{leave:({selections:e})=>er(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const o=Ce("",e,": ")+t;let a=o+Ce("(",ne(n,", "),")");return a.length>uR&&(a=o+Ce(`(
`,qu(ne(n,`
`)),`
)`)),ne([a,ne(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Ce(" ",ne(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>ne(["...",Ce("on ",e),ne(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i})=>`fragment ${e}${Ce("(",ne(n,", "),")")} on ${t} ${Ce("",ne(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?N_(e):nR(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+ne(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+ne(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Ce("(",ne(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Ce("",e,`
`)+ne(["schema",ne(t," "),er(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Ce("",e,`
`)+ne(["scalar",t,ne(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Ce("",e,`
`)+ne(["type",t,Ce("implements ",ne(n," & ")),ne(r," "),er(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>Ce("",e,`
`)+t+(SA(n)?Ce(`(
`,qu(ne(n,`
`)),`
)`):Ce("(",ne(n,", "),")"))+": "+r+Ce(" ",ne(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>Ce("",e,`
`)+ne([t+": "+n,Ce("= ",r),ne(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Ce("",e,`
`)+ne(["interface",t,Ce("implements ",ne(n," & ")),ne(r," "),er(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Ce("",e,`
`)+ne(["union",t,ne(n," "),Ce("= ",ne(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Ce("",e,`
`)+ne(["enum",t,ne(n," "),er(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Ce("",e,`
`)+ne([t,ne(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Ce("",e,`
`)+ne(["input",t,ne(n," "),er(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:i})=>Ce("",e,`
`)+"directive @"+t+(SA(n)?Ce(`(
`,qu(ne(n,`
`)),`
)`):Ce("(",ne(n,", "),")"))+(r?" repeatable":"")+" on "+ne(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>ne(["extend schema",ne(e," "),er(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>ne(["extend scalar",e,ne(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>ne(["extend type",e,Ce("implements ",ne(t," & ")),ne(n," "),er(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>ne(["extend interface",e,Ce("implements ",ne(t," & ")),ne(n," "),er(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>ne(["extend union",e,ne(t," "),Ce("= ",ne(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>ne(["extend enum",e,ne(t," "),er(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>ne(["extend input",e,ne(t," "),er(n)]," ")}};function ne(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function er(e){return Ce(`{
`,qu(ne(e,`
`)),`
}`)}function Ce(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function qu(e){return Ce("  ",e.replace(/\n/g,`
  `))}function SA(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}const CA=e=>{var r,i;let t;const n=e.definitions.filter(o=>o.kind==="OperationDefinition");return n.length===1&&(t=(i=(r=n[0])==null?void 0:r.name)==null?void 0:i.value),t},lp=e=>{if(typeof e=="string"){let n;try{const r=eR(e);n=CA(r)}catch{}return{query:e,operationName:n}}const t=CA(e);return{query:cR(e),operationName:t}};class kl extends Error{constructor(t,n){const r=`${kl.extractMessage(t)}: ${JSON.stringify({response:t,request:n})}`;super(r),Object.setPrototypeOf(this,kl.prototype),this.response=t,this.request=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,kl)}static extractMessage(t){var n,r;return((r=(n=t.errors)==null?void 0:n[0])==null?void 0:r.message)??`GraphQL Error (Code: ${t.status})`}}var lg={exports:{}};(function(e,t){var n=typeof self<"u"?self:dt,r=function(){function o(){this.fetch=!1,this.DOMException=n.DOMException}return o.prototype=n,new o}();(function(o){(function(a){var s={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(I){return I&&DataView.prototype.isPrototypeOf(I)}if(s.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(I){return I&&u.indexOf(Object.prototype.toString.call(I))>-1};function h(I){if(typeof I!="string"&&(I=String(I)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(I))throw new TypeError("Invalid character in header field name");return I.toLowerCase()}function f(I){return typeof I!="string"&&(I=String(I)),I}function p(I){var k={next:function(){var z=I.shift();return{done:z===void 0,value:z}}};return s.iterable&&(k[Symbol.iterator]=function(){return k}),k}function v(I){this.map={},I instanceof v?I.forEach(function(k,z){this.append(z,k)},this):Array.isArray(I)?I.forEach(function(k){this.append(k[0],k[1])},this):I&&Object.getOwnPropertyNames(I).forEach(function(k){this.append(k,I[k])},this)}v.prototype.append=function(I,k){I=h(I),k=f(k);var z=this.map[I];this.map[I]=z?z+", "+k:k},v.prototype.delete=function(I){delete this.map[h(I)]},v.prototype.get=function(I){return I=h(I),this.has(I)?this.map[I]:null},v.prototype.has=function(I){return this.map.hasOwnProperty(h(I))},v.prototype.set=function(I,k){this.map[h(I)]=f(k)},v.prototype.forEach=function(I,k){for(var z in this.map)this.map.hasOwnProperty(z)&&I.call(k,this.map[z],z,this)},v.prototype.keys=function(){var I=[];return this.forEach(function(k,z){I.push(z)}),p(I)},v.prototype.values=function(){var I=[];return this.forEach(function(k){I.push(k)}),p(I)},v.prototype.entries=function(){var I=[];return this.forEach(function(k,z){I.push([z,k])}),p(I)},s.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function g(I){if(I.bodyUsed)return Promise.reject(new TypeError("Already read"));I.bodyUsed=!0}function S(I){return new Promise(function(k,z){I.onload=function(){k(I.result)},I.onerror=function(){z(I.error)}})}function E(I){var k=new FileReader,z=S(k);return k.readAsArrayBuffer(I),z}function A(I){var k=new FileReader,z=S(k);return k.readAsText(I),z}function y(I){for(var k=new Uint8Array(I),z=new Array(k.length),Y=0;Y<k.length;Y++)z[Y]=String.fromCharCode(k[Y]);return z.join("")}function x(I){if(I.slice)return I.slice(0);var k=new Uint8Array(I.byteLength);return k.set(new Uint8Array(I)),k.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(I){this._bodyInit=I,I?typeof I=="string"?this._bodyText=I:s.blob&&Blob.prototype.isPrototypeOf(I)?this._bodyBlob=I:s.formData&&FormData.prototype.isPrototypeOf(I)?this._bodyFormData=I:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(I)?this._bodyText=I.toString():s.arrayBuffer&&s.blob&&l(I)?(this._bodyArrayBuffer=x(I.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(I)||d(I))?this._bodyArrayBuffer=x(I):this._bodyText=I=Object.prototype.toString.call(I):this._bodyText="",this.headers.get("content-type")||(typeof I=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(I)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var I=g(this);if(I)return I;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?g(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(E)}),this.text=function(){var I=g(this);if(I)return I;if(this._bodyBlob)return A(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(y(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}var C=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(I){var k=I.toUpperCase();return C.indexOf(k)>-1?k:I}function T(I,k){k=k||{};var z=k.body;if(I instanceof T){if(I.bodyUsed)throw new TypeError("Already read");this.url=I.url,this.credentials=I.credentials,k.headers||(this.headers=new v(I.headers)),this.method=I.method,this.mode=I.mode,this.signal=I.signal,!z&&I._bodyInit!=null&&(z=I._bodyInit,I.bodyUsed=!0)}else this.url=String(I);if(this.credentials=k.credentials||this.credentials||"same-origin",(k.headers||!this.headers)&&(this.headers=new v(k.headers)),this.method=b(k.method||this.method||"GET"),this.mode=k.mode||this.mode||null,this.signal=k.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&z)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(z)}T.prototype.clone=function(){return new T(this,{body:this._bodyInit})};function _(I){var k=new FormData;return I.trim().split("&").forEach(function(z){if(z){var Y=z.split("="),D=Y.shift().replace(/\+/g," "),H=Y.join("=").replace(/\+/g," ");k.append(decodeURIComponent(D),decodeURIComponent(H))}}),k}function $(I){var k=new v,z=I.replace(/\r?\n[\t ]+/g," ");return z.split(/\r?\n/).forEach(function(Y){var D=Y.split(":"),H=D.shift().trim();if(H){var J=D.join(":").trim();k.append(H,J)}}),k}w.call(T.prototype);function M(I,k){k||(k={}),this.type="default",this.status=k.status===void 0?200:k.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in k?k.statusText:"OK",this.headers=new v(k.headers),this.url=k.url||"",this._initBody(I)}w.call(M.prototype),M.prototype.clone=function(){return new M(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},M.error=function(){var I=new M(null,{status:0,statusText:""});return I.type="error",I};var R=[301,302,303,307,308];M.redirect=function(I,k){if(R.indexOf(k)===-1)throw new RangeError("Invalid status code");return new M(null,{status:k,headers:{location:I}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(k,z){this.message=k,this.name=z;var Y=Error(k);this.stack=Y.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function U(I,k){return new Promise(function(z,Y){var D=new T(I,k);if(D.signal&&D.signal.aborted)return Y(new a.DOMException("Aborted","AbortError"));var H=new XMLHttpRequest;function J(){H.abort()}H.onload=function(){var ae={status:H.status,statusText:H.statusText,headers:$(H.getAllResponseHeaders()||"")};ae.url="responseURL"in H?H.responseURL:ae.headers.get("X-Request-URL");var se="response"in H?H.response:H.responseText;z(new M(se,ae))},H.onerror=function(){Y(new TypeError("Network request failed"))},H.ontimeout=function(){Y(new TypeError("Network request failed"))},H.onabort=function(){Y(new a.DOMException("Aborted","AbortError"))},H.open(D.method,D.url,!0),D.credentials==="include"?H.withCredentials=!0:D.credentials==="omit"&&(H.withCredentials=!1),"responseType"in H&&s.blob&&(H.responseType="blob"),D.headers.forEach(function(ae,se){H.setRequestHeader(se,ae)}),D.signal&&(D.signal.addEventListener("abort",J),H.onreadystatechange=function(){H.readyState===4&&D.signal.removeEventListener("abort",J)}),H.send(typeof D._bodyInit>"u"?null:D._bodyInit)})}return U.polyfill=!0,o.fetch||(o.fetch=U,o.Headers=v,o.Request=T,o.Response=M),a.Headers=v,a.Request=T,a.Response=M,a.fetch=U,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;t=i.fetch,t.default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t})(lg,lg.exports);var Dd=lg.exports;const Yu=Pn(Dd),fR=Qg({__proto__:null,default:Yu},[Dd]),fa=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||fR&&Dd.Headers&&e instanceof Dd.Headers?t=y_(e):Array.isArray(e)?e.forEach(([n,r])=>{n&&r!==void 0&&(t[n]=r)}):t=e),t},TA=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),hR=e=>{if(!Array.isArray(e.query)){const r=e,i=[`query=${encodeURIComponent(TA(r.query))}`];return e.variables&&i.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&i.push(`operationName=${encodeURIComponent(r.operationName)}`),i.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");const t=e,n=e.query.reduce((r,i,o)=>(r.push({query:TA(i),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(n))}`},pR=e=>async t=>{const{url:n,query:r,variables:i,operationName:o,fetch:a,fetchOptions:s,middleware:l}=t,u={...t.headers};let d="",h;e==="POST"?(h=gR(r,i,o,s.jsonSerializer),typeof h=="string"&&(u["Content-Type"]="application/json")):d=hR({query:r,variables:i,operationName:o,jsonSerializer:s.jsonSerializer??s1});const f={method:e,headers:u,body:h,...s};let p=n,v=f;if(l){const g=await Promise.resolve(l({...f,url:n,operationName:o,variables:i})),{url:S,...E}=g;p=S,v=E}return d&&(p=`${p}?${d}`),await a(p,v)};class mR{constructor(t,n={}){this.url=t,this.requestConfig=n,this.rawRequest=async(...r)=>{const[i,o,a]=r,s=E_(i,o,a),{headers:l,fetch:u=Yu,method:d="POST",requestMiddleware:h,responseMiddleware:f,...p}=this.requestConfig,{url:v}=this;s.signal!==void 0&&(p.signal=s.signal);const{operationName:g}=lp(s.query);return cp({url:v,query:s.query,variables:s.variables,headers:{...fa(up(l)),...fa(s.requestHeaders)},operationName:g,fetch:u,method:d,fetchOptions:p,middleware:h}).then(S=>(f&&f(S),S)).catch(S=>{throw f&&f(S),S})}}async request(t,...n){const[r,i]=n,o=A_(t,r,i),{headers:a,fetch:s=Yu,method:l="POST",requestMiddleware:u,responseMiddleware:d,...h}=this.requestConfig,{url:f}=this;o.signal!==void 0&&(h.signal=o.signal);const{query:p,operationName:v}=lp(o.document);return cp({url:f,query:p,variables:o.variables,headers:{...fa(up(a)),...fa(o.requestHeaders)},operationName:v,fetch:s,method:l,fetchOptions:h,middleware:u}).then(g=>(d&&d(g),g.data)).catch(g=>{throw d&&d(g),g})}batchRequests(t,n){const r=b_(t,n),{headers:i,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);const a=r.documents.map(({document:l})=>lp(l).query),s=r.documents.map(({variables:l})=>l);return cp({url:this.url,query:a,variables:s,headers:{...fa(up(i)),...fa(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Yu,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(l=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(l),l.data)).catch(l=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(l),l})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,n){const{headers:r}=this.requestConfig;return r?r[t]=n:this.requestConfig.headers={[t]:n},this}setEndpoint(t){return this.url=t,this}}const cp=async e=>{const{query:t,variables:n,fetchOptions:r}=e,i=pR(v_(e.method??"post")),o=Array.isArray(e.query),a=await i(e),s=await vR(a,r.jsonSerializer??s1),l=Array.isArray(s)?!s.some(({data:d})=>!d):!!s.data,u=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(a.ok&&u&&l){const{errors:d,...h}=(Array.isArray(s),s),f=r.errorPolicy==="ignore"?h:s;return{...o?{data:f}:f,headers:a.headers,status:a.status}}else{const d=typeof s=="string"?{error:s}:s;throw new kl({...d,status:a.status,headers:a.headers},{query:t,variables:n})}};async function vt(e,t,...n){const r=x_(e,t,...n);return new mR(r.url).request({...r})}const gR=(e,t,n,r)=>{const i=r??s1;if(!Array.isArray(e))return i.stringify({query:e,variables:t,operationName:n});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");const o=e.reduce((a,s,l)=>(a.push({query:s,variables:t?t[l]:void 0}),a),[]);return i.stringify(o)},vR=async(e,t)=>{let n;return e.headers.forEach((r,i)=>{i.toLowerCase()==="content-type"&&(n=r)}),n&&(n.toLowerCase().startsWith("application/json")||n.toLowerCase().startsWith("application/graphql+json")||n.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},up=e=>typeof e=="function"?e():e,yt=(e,...t)=>e.reduce((n,r,i)=>`${n}${r}${i in t?String(t[i]):""}`,""),Gn="https://cms.dcs.ug.edu.gh",Yo="https://cms.dcs.ug.edu.gh/graphql",vn="https://api.dcs.ug.edu.gh/graphql",yR=yt`
  query AboutUsPage {
    aboutUsPage {
      data {
        attributes {
          headerSubtitle
          headerTitle
          content
          headerMedia {
            data {
              attributes {
                mime
                url
              }
            }
          }
          getToKnowUs {
            content
            image {
              data {
                attributes {
                  mime
                  url
                }
              }
            }
            title
          }
          getToKnowUsTitle
          getToKnowUsSubtitle
          deptGallery {
            data {
              attributes {
                url
              }
            }
          }
          overviewProfileContent
          overviewProfileStatsItem {
            id
            label
            value
          }
          ourDepartmentHistory
          ourDepartmentHistoryImage {
            data {
              attributes {
                url
              }
            }
          }
          mission
          vision
          coreValues {
            title
            description
            id
          }
          leadershipTitle
          leadershipDescription
          leadershipPortfolios {
            id
            name
            content
            duration
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          partnerTitle
          partnerContent
          partners {
            id
            index
            title
            content
          }
        }
      }
    }
  }
`,AR=()=>vt(Yo,yR),ER=e=>{const t={};if(Object.keys(e).length){const n=e.aboutUsPage.data.attributes;return t.content=n.content,t.deptGallery=n.deptGallery,t.getToKnowUs=n.getToKnowUs,t.getToKnowUsSubtitle=n.getToKnowUsSubtitle,t.getToKnowUsTitle=n.getToKnowUsTitle,t.headerMedia=n.headerMedia,t.headerSubtitle=n.headerSubtitle,t.headerTitle=n.headerTitle,t.overviewProfileContent=n.overviewProfileContent,t.overviewProfileStatsItem=n.overviewProfileStatsItem,t.ourDepartmentHistory=n.ourDepartmentHistory,t.ourDepartmentHistoryImage=n.ourDepartmentHistoryImage,t.mission=n.mission,t.vision=n.vision,t.coreValues=n.coreValues,t.leadershipTitle=n.leadershipTitle,t.leadershipDescription=n.leadershipDescription,t.leadershipPortfolios=n.leadershipPortfolios,t.partnerTitle=n.partnerTitle,t.partnerContent=n.partnerContent,t.partners=n.partners,t}return null},Ko=()=>gt({queryKey:["aboutUs"],queryFn:AR,select:ER}),bR=yt`
  query ($filter: AnnouncementFilter) {
    getAnnouncements(filter: $filter) {
      date
      content
      _id
      image
      summary
      title
      content
      createdAt
    }
  }
`,xR=()=>vt(vn,bR,{filter:{deleted:{eq:!1}}}),wR=e=>{const t=e.getAnnouncements,n=[];if(t.length){for(const r of t)n.push({_id:r._id,image:r.image,content:r.content,summary:r.summary,date:r.date,title:r.title,createdAt:r.createAt});return n}return null},u1=()=>gt({queryKey:["announcements"],queryFn:xR,select:wR}),gr=e=>{const t=sessionStorage.getItem(jd),n=JSON.parse(t);return m.useEffect(()=>{if(n[e]>0)return;const r=setTimeout(()=>{sessionStorage.setItem(jd,JSON.stringify({...n,[e]:n[e]+1}))},U8);return()=>{clearTimeout(r)}},[]),{preloaderStates:n}},Es=e=>m.createElement("svg",{width:12,height:6,viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M1.38012 0.720631L5.18345 4.52396C5.63262 4.97313 6.36762 4.97313 6.81678 4.52396L10.6201 0.720631",stroke:"#2B286F",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),{colors:IA}=q,SR=G.section`
margin-top: 1rem;
/* margin-bottom: 4rem; */

.section-heading {
    margin-top: 5rem;
  }

  .aboutPages {
    margin-top: 3rem;
    ${he}
    gap: 3rem;

    @media screen and (${O.medium}) {
      flex-direction: row;
      gap: 5rem;
      justify-content: space-between;
      align-items: start;
    }
  }

  .aboutPagesSide {
    ${he}
    gap: 1rem;

    @media screen and (${O.medium}) {
      position: sticky;
      top: 1.5rem;
      min-width: ${P(210)};
      max-width: ${P(210)};
    }

    a {
      font-size: ${P(18)};
      text-align: left;
      color: ${IA.gray400};
      width: fit-content;
      /* white-space: nowrap; */
      /* max-width: 15ch; */

      &.active {
        color: ${IA.primary};
        font-weight: 700;
      }
    }
  }

  .aboutPagesContent {
    @media screen and (${O.medium}) {
      flex-grow: 1;
      max-width: ${P(600)};
    }

    @media screen and (${O.medium}) {
      max-width: ${P(900)};
    }
  }

`,Oc=({children:e})=>{const{data:t,isPending:n}=Ko(),{data:r,isPending:i}=u1(),{preloaderStates:o}=gr("about");return c.jsxs(c.Fragment,{children:[(o==null?void 0:o.about)===0&&c.jsx(mr,{isLoading:n||i}),c.jsxs(mn,{children:[c.jsx("title",{children:`About - ${On}`}),c.jsx("meta",{name:"description",content:"Describes about us page"})]}),c.jsx(Rs,{quote:t==null?void 0:t.headerTitle,quoteAuthor:t==null?void 0:t.headerSubtitle,images:Rc}),c.jsx(SR,{id:"content",children:c.jsx(Re,{children:c.jsxs("div",{className:"aboutPages",children:[c.jsx("aside",{className:"aboutPagesSide",children:c.jsx("ul",{children:t5.map(({id:a,title:s,hasIcon:l,link:u})=>c.jsx("li",{className:"",children:c.jsxs(Oo,{to:`${u}#content`,children:[c.jsx("span",{children:s}),l?c.jsx(Es,{}):null]})},a))})}),c.jsx("div",{className:"aboutPagesContent",children:e})]})})}),c.jsx(pr,{})]})};function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}const CR=["children","options"];var PA,_A;(function(e){e.blockQuote="0",e.breakLine="1",e.breakThematic="2",e.codeBlock="3",e.codeFenced="4",e.codeInline="5",e.footnote="6",e.footnoteReference="7",e.gfmTask="8",e.heading="9",e.headingSetext="10",e.htmlBlock="11",e.htmlComment="12",e.htmlSelfClosing="13",e.image="14",e.link="15",e.linkAngleBraceStyleDetector="16",e.linkBareUrlDetector="17",e.linkMailtoDetector="18",e.newlineCoalescer="19",e.orderedList="20",e.paragraph="21",e.ref="22",e.refImage="23",e.refLink="24",e.table="25",e.tableSeparator="26",e.text="27",e.textBolded="28",e.textEmphasized="29",e.textEscaped="30",e.textMarked="31",e.textStrikethroughed="32",e.unorderedList="33"})(PA||(PA={})),function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(_A||(_A={}));const RA=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),OA={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},TR=["style","script"],IR=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,PR=/mailto:/i,_R=/\n{2,}$/,f5=/^(\s*>[\s\S]*?)(?=\n{2,})/,RR=/^ *> ?/gm,OR=/^ {2,}\n/,jR=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,h5=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,p5=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,NR=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,kR=/^(?:\n *)*\n/,$R=/\r\n?/g,DR=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,MR=/^\[\^([^\]]+)]/,LR=/\f/g,FR=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,UR=/^\s*?\[(x|\s)\]/,m5=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,g5=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,v5=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,cg=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,BR=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,y5=/^<!--[\s\S]*?(?:-->)/,zR=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,ug=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,VR=/^\{.*\}$/,HR=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,QR=/^<([^ >]+@[^ >]+)>/,WR=/^<([^ >]+:\/[^ >]+)>/,GR=/-([a-z])?/gi,A5=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,qR=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,YR=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,KR=/^\[([^\]]*)\] ?\[([^\]]*)\]/,XR=/(\[|\])/g,JR=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,ZR=/\t/g,eO=/(^ *\||\| *$)/g,tO=/^ *:-+: *$/,nO=/^ *:-+ *$/,rO=/^ *-+: *$/,bf="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",iO=new RegExp(`^([*_])\\1${bf}\\1\\1(?!\\1)`),oO=new RegExp(`^([*_])${bf}\\1(?!\\1|\\w)`),aO=new RegExp(`^==${bf}==`),sO=new RegExp(`^~~${bf}~~`),lO=/^\\([^0-9A-Za-z\s])/,cO=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,uO=/^\n+/,dO=/^([ \t]*)/,fO=/\\([^\\])/g,jA=/ *\n+$/,hO=/(?:^|\n)( *)$/,d1="(?:\\d+\\.)",f1="(?:[*+-])";function E5(e){return"( *)("+(e===1?d1:f1)+") +"}const b5=E5(1),x5=E5(2);function w5(e){return new RegExp("^"+(e===1?b5:x5))}const pO=w5(1),mO=w5(2);function S5(e){return new RegExp("^"+(e===1?b5:x5)+"[^\\n]*(?:\\n(?!\\1"+(e===1?d1:f1)+" )[^\\n]*)*(\\n|$)","gm")}const C5=S5(1),T5=S5(2);function I5(e){const t=e===1?d1:f1;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const P5=I5(1),_5=I5(2);function NA(e,t){const n=t===1,r=n?P5:_5,i=n?C5:T5,o=n?pO:mO;return{match(a,s,l){const u=hO.exec(l);return u&&(s.list||!s.inline&&!s.simple)?r.exec(a=u[1]+a):null},order:1,parse(a,s,l){const u=n?+a[2]:void 0,d=a[0].replace(_R,`
`).match(i);let h=!1;return{items:d.map(function(f,p){const v=o.exec(f)[0].length,g=new RegExp("^ {1,"+v+"}","gm"),S=f.replace(g,"").replace(o,""),E=p===d.length-1,A=S.indexOf(`

`)!==-1||E&&h;h=A;const y=l.inline,x=l.list;let w;l.list=!0,A?(l.inline=!1,w=S.replace(jA,`

`)):(l.inline=!0,w=S.replace(jA,""));const C=s(w,l);return l.inline=y,l.list=x,C}),ordered:n,start:u}},render:(a,s,l)=>e(a.ordered?"ol":"ul",{key:l.key,start:a.type==="20"?a.start:void 0},a.items.map(function(u,d){return e("li",{key:d},s(u,l))}))}}const gO=new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),vO=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,R5=[f5,h5,p5,m5,v5,g5,y5,A5,C5,P5,T5,_5],yO=[...R5,/^[^\n]+(?:  \n|\n{2,})/,cg,ug];function AO(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function EO(e){return rO.test(e)?"right":tO.test(e)?"center":nO.test(e)?"left":null}function kA(e,t,n,r){const i=n.inTable;n.inTable=!0;let o=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((s,l)=>(l.trim()==="|"?s.push(r?{type:"26"}:{type:"27",text:l}):l!==""&&s.push.apply(s,t(l,n)),s),[]);n.inTable=i;let a=[[]];return o.forEach(function(s,l){s.type==="26"?l!==0&&l!==o.length-1&&a.push([]):(s.type!=="27"||o[l+1]!=null&&o[l+1].type!=="26"||(s.text=s.text.trimEnd()),a[a.length-1].push(s))}),a}function bO(e,t,n){n.inline=!0;const r=e[2]?e[2].replace(eO,"").split("|").map(EO):[],i=e[3]?function(a,s,l){return a.trim().split(`
`).map(function(u){return kA(u,s,l,!0)})}(e[3],t,n):[],o=kA(e[1],t,n,!!i.length);return n.inline=!1,i.length?{align:r,cells:i,header:o,type:"25"}:{children:o,type:"21"}}function $A(e,t){return e.align[t]==null?{}:{textAlign:e.align[t]}}function hi(e){return function(t,n){return n.inline?e.exec(t):null}}function pi(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Br(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Js(e){return function(t){return e.exec(t)}}function xO(e,t,n){if(t.inline||t.simple||n&&!n.endsWith(`
`))return null;let r="";e.split(`
`).every(o=>!R5.some(a=>a.test(o))&&(r+=o+`
`,o.trim()));const i=r.trimEnd();return i==""?null:[r,i]}function ha(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch{return null}return e}function DA(e){return e.replace(fO,"$1")}function Ku(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;const o=e(t,n);return n.inline=r,n.simple=i,o}function wO(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;const o=e(t,n);return n.inline=r,n.simple=i,o}function SO(e,t,n){const r=n.inline||!1;n.inline=!1;const i=e(t,n);return n.inline=r,i}const dp=(e,t,n)=>({children:Ku(t,e[1],n)});function fp(){return{}}function hp(){return null}function CO(...e){return e.filter(Boolean).join(" ")}function pp(e,t,n){let r=e;const i=t.split(".");for(;i.length&&(r=r[i[0]],r!==void 0);)i.shift();return r||n}function TO(e="",t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||AO,t.namedCodesToUnicode=t.namedCodesToUnicode?fo({},OA,t.namedCodesToUnicode):OA;const n=t.createElement||m.createElement;function r(p,v,...g){const S=pp(t.overrides,`${p}.props`,{});return n(function(E,A){const y=pp(A,E);return y?typeof y=="function"||typeof y=="object"&&"render"in y?y:pp(A,`${E}.component`,E):E}(p,t.overrides),fo({},v,S,{className:CO(v==null?void 0:v.className,S.className)||void 0}),...g)}function i(p){p=p.replace(FR,"");let v=!1;t.forceInline?v=!0:t.forceBlock||(v=JR.test(p)===!1);const g=d(u(v?p:`${p.trimEnd().replace(uO,"")}

`,{inline:v}));for(;typeof g[g.length-1]=="string"&&!g[g.length-1].trim();)g.pop();if(t.wrapper===null)return g;const S=t.wrapper||(v?"span":"div");let E;if(g.length>1||t.forceWrapper)E=g;else{if(g.length===1)return E=g[0],typeof E=="string"?r("span",{key:"outer"},E):E;E=null}return m.createElement(S,{key:"outer"},E)}function o(p){const v=p.match(IR);return v?v.reduce(function(g,S,E){const A=S.indexOf("=");if(A!==-1){const y=function(b){return b.indexOf("-")!==-1&&b.match(zR)===null&&(b=b.replace(GR,function(T,_){return _.toUpperCase()})),b}(S.slice(0,A)).trim(),x=function(b){const T=b[0];return(T==='"'||T==="'")&&b.length>=2&&b[b.length-1]===T?b.slice(1,-1):b}(S.slice(A+1).trim()),w=RA[y]||y,C=g[w]=function(b,T){return b==="style"?T.split(/;\s?/).reduce(function(_,$){const M=$.slice(0,$.indexOf(":"));return _[M.trim().replace(/(-[a-z])/g,R=>R[1].toUpperCase())]=$.slice(M.length+1).trim(),_},{}):b==="href"||b==="src"?ha(T):(T.match(VR)&&(T=T.slice(1,T.length-1)),T==="true"||T!=="false"&&T)}(y,x);typeof C=="string"&&(cg.test(C)||ug.test(C))&&(g[w]=m.cloneElement(i(C.trim()),{key:E}))}else S!=="style"&&(g[RA[S]||S]=!0);return g},{}):null}const a=[],s={},l={0:{match:Br(f5),order:1,parse:(p,v,g)=>({children:v(p[0].replace(RR,""),g)}),render:(p,v,g)=>r("blockquote",{key:g.key},v(p.children,g))},1:{match:Js(OR),order:1,parse:fp,render:(p,v,g)=>r("br",{key:g.key})},2:{match:Br(jR),order:1,parse:fp,render:(p,v,g)=>r("hr",{key:g.key})},3:{match:Br(p5),order:0,parse:p=>({lang:void 0,text:p[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(p,v,g)=>r("pre",{key:g.key},r("code",fo({},p.attrs,{className:p.lang?`lang-${p.lang}`:""}),p.text))},4:{match:Br(h5),order:0,parse:p=>({attrs:o(p[3]||""),lang:p[2]||void 0,text:p[4],type:"3"})},5:{match:pi(NR),order:3,parse:p=>({text:p[2]}),render:(p,v,g)=>r("code",{key:g.key},p.text)},6:{match:Br(DR),order:0,parse:p=>(a.push({footnote:p[2],identifier:p[1]}),{}),render:hp},7:{match:hi(MR),order:1,parse:p=>({target:`#${t.slugify(p[1])}`,text:p[1]}),render:(p,v,g)=>r("a",{key:g.key,href:ha(p.target)},r("sup",{key:g.key},p.text))},8:{match:hi(UR),order:1,parse:p=>({completed:p[1].toLowerCase()==="x"}),render:(p,v,g)=>r("input",{checked:p.completed,key:g.key,readOnly:!0,type:"checkbox"})},9:{match:Br(t.enforceAtxHeadings?g5:m5),order:1,parse:(p,v,g)=>({children:Ku(v,p[2],g),id:t.slugify(p[2]),level:p[1].length}),render:(p,v,g)=>r(`h${p.level}`,{id:p.id,key:g.key},v(p.children,g))},10:{match:Br(v5),order:0,parse:(p,v,g)=>({children:Ku(v,p[1],g),level:p[2]==="="?1:2,type:"9"})},11:{match:Js(cg),order:1,parse(p,v,g){const[,S]=p[3].match(dO),E=new RegExp(`^${S}`,"gm"),A=p[3].replace(E,""),y=(x=A,yO.some(T=>T.test(x))?SO:Ku);var x;const w=p[1].toLowerCase(),C=TR.indexOf(w)!==-1,b={attrs:o(p[2]),noInnerParse:C,tag:(C?w:p[1]).trim()};return g.inAnchor=g.inAnchor||w==="a",C?b.text=p[3]:b.children=y(v,A,g),g.inAnchor=!1,b},render:(p,v,g)=>r(p.tag,fo({key:g.key},p.attrs),p.text||v(p.children,g))},13:{match:Js(ug),order:1,parse:p=>({attrs:o(p[2]||""),tag:p[1].trim()}),render:(p,v,g)=>r(p.tag,fo({},p.attrs,{key:g.key}))},12:{match:Js(y5),order:1,parse:()=>({}),render:hp},14:{match:pi(vO),order:1,parse:p=>({alt:p[1],target:DA(p[2]),title:p[3]}),render:(p,v,g)=>r("img",{key:g.key,alt:p.alt||void 0,title:p.title||void 0,src:ha(p.target)})},15:{match:hi(gO),order:3,parse:(p,v,g)=>({children:wO(v,p[1],g),target:DA(p[2]),title:p[3]}),render:(p,v,g)=>r("a",{key:g.key,href:ha(p.target),title:p.title},v(p.children,g))},16:{match:hi(WR),order:0,parse:p=>({children:[{text:p[1],type:"27"}],target:p[1],type:"15"})},17:{match:(p,v)=>v.inAnchor?null:hi(HR)(p,v),order:0,parse:p=>({children:[{text:p[1],type:"27"}],target:p[1],title:void 0,type:"15"})},18:{match:hi(QR),order:0,parse(p){let v=p[1],g=p[1];return PR.test(g)||(g="mailto:"+g),{children:[{text:v.replace("mailto:",""),type:"27"}],target:g,type:"15"}}},20:NA(r,1),33:NA(r,2),19:{match:Br(kR),order:3,parse:fp,render:()=>`
`},21:{match:xO,order:3,parse:dp,render:(p,v,g)=>r("p",{key:g.key},v(p.children,g))},22:{match:hi(qR),order:0,parse:p=>(s[p[1]]={target:p[2],title:p[4]},{}),render:hp},23:{match:pi(YR),order:0,parse:p=>({alt:p[1]||void 0,ref:p[2]}),render:(p,v,g)=>s[p.ref]?r("img",{key:g.key,alt:p.alt,src:ha(s[p.ref].target),title:s[p.ref].title}):null},24:{match:hi(KR),order:0,parse:(p,v,g)=>({children:v(p[1],g),fallbackChildren:v(p[0].replace(XR,"\\$1"),g),ref:p[2]}),render:(p,v,g)=>s[p.ref]?r("a",{key:g.key,href:ha(s[p.ref].target),title:s[p.ref].title},v(p.children,g)):r("span",{key:g.key},v(p.fallbackChildren,g))},25:{match:Br(A5),order:1,parse:bO,render(p,v,g){const S=p;return r("table",{key:g.key},r("thead",null,r("tr",null,S.header.map(function(E,A){return r("th",{key:A,style:$A(S,A)},v(E,g))}))),r("tbody",null,S.cells.map(function(E,A){return r("tr",{key:A},E.map(function(y,x){return r("td",{key:x,style:$A(S,x)},v(y,g))}))})))}},27:{match:Js(cO),order:4,parse:p=>({text:p[0].replace(BR,(v,g)=>t.namedCodesToUnicode[g]?t.namedCodesToUnicode[g]:v)}),render:p=>p.text},28:{match:pi(iO),order:2,parse:(p,v,g)=>({children:v(p[2],g)}),render:(p,v,g)=>r("strong",{key:g.key},v(p.children,g))},29:{match:pi(oO),order:3,parse:(p,v,g)=>({children:v(p[2],g)}),render:(p,v,g)=>r("em",{key:g.key},v(p.children,g))},30:{match:pi(lO),order:1,parse:p=>({text:p[1],type:"27"})},31:{match:pi(aO),order:3,parse:dp,render:(p,v,g)=>r("mark",{key:g.key},v(p.children,g))},32:{match:pi(sO),order:3,parse:dp,render:(p,v,g)=>r("del",{key:g.key},v(p.children,g))}};t.disableParsingRawHTML===!0&&(delete l[11],delete l[13]);const u=function(p){let v=Object.keys(p);function g(S,E){let A=[],y="";for(;S;){let x=0;for(;x<v.length;){const w=v[x],C=p[w],b=C.match(S,E,y);if(b){const T=b[0];S=S.substring(T.length);const _=C.parse(b,g,E);_.type==null&&(_.type=w),A.push(_),y=T;break}x++}}return A}return v.sort(function(S,E){let A=p[S].order,y=p[E].order;return A!==y?A-y:S<E?-1:1}),function(S,E){return g(function(A){return A.replace($R,`
`).replace(LR,"").replace(ZR,"    ")}(S),E)}}(l),d=(h=function(p,v){return function(g,S,E){const A=p[g.type].render;return v?v(()=>A(g,S,E),g,S,E):A(g,S,E)}}(l,t.renderRule),function p(v,g={}){if(Array.isArray(v)){const S=g.key,E=[];let A=!1;for(let y=0;y<v.length;y++){g.key=y;const x=p(v[y],g),w=typeof x=="string";w&&A?E[E.length-1]+=x:x!==null&&E.push(x),A=w}return g.key=S,E}return h(v,p,g)});var h;const f=i(e);return a.length?r("div",null,f,r("footer",{key:"footer"},a.map(function(p){return r("div",{id:t.slugify(p.identifier),key:p.identifier},p.identifier,d(u(p.footnote,{inline:!0})))}))):f}const IO=e=>{let{children:t="",options:n}=e,r=function(i,o){if(i==null)return{};var a,s,l={},u=Object.keys(i);for(s=0;s<u.length;s++)o.indexOf(a=u[s])>=0||(l[a]=i[a]);return l}(e,CR);return m.cloneElement(TO(t,n),r)};function yn({children:e,className:t}){return c.jsx("div",{className:`richtext ${t||""}`,children:c.jsx("pre",{style:{fontFamily:"inherit",whiteSpace:"pre-line"},children:c.jsx(IO,{children:e||""})})})}const gn=G.h2`
  font-size: clamp(${P(22)}, 10vw, ${P(32)});
  color: ${q.colors.primary};
`;function PO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"},child:[]}]})(e)}function _O(e){return Ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const RO=G.section`
  /* padding: .5rem; */
  .heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid ${q.colors.yellow};
    padding: 1rem 0;
    color: ${q.colors.primary};
  }

  .TextContent {
    display: grid;
    transition: all ease-in-out;
    animation-duration: 300;
    overflow: hidden;
    padding: 10px 0;
  }

  .open {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .close {
    grid-template-rows: 0;
    opacity: 0;
  }

  .text {
    padding: 1rem;
    background-color: ${q.colors.white};
    border: 1px solid ${q.colors.gray150};
    border-radius: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 3rem;

    .subTitle {
      /* padding-bottom: 4rem; */
      margin-bottom: 1rem;
      font-size: ${P(40)};
    }
  }
`,OO=({title:e,text:t})=>{const[n,r]=m.useState();return c.jsxs(RO,{children:[c.jsxs("button",{onClick:()=>r(!n),className:"heading",children:[c.jsx("h2",{children:e}),n?c.jsx(PO,{size:18}):c.jsx(_O,{size:18})]}),c.jsx("div",{className:`TextContent ${n?"open":"close"}`,children:c.jsx(yn,{children:t||"No Content Available, check again later"})})]})},jO=G.section`
margin-top: 6rem;
/* padding: 6rem; */
/* background-color: ${q.colors.primary}; */
`,NO=({partners:e})=>c.jsx(jO,{children:e==null?void 0:e.map(({title:t,content:n})=>c.jsx(OO,{title:t,text:n},t))}),kO=G.section`

.textContent  {

    h3 {
        margin-top: 1rem;
    }

    p {
        margin-top: 1rem;
    }
}

`,$O=()=>{var t;const{data:e}=Ko();return c.jsxs(Oc,{children:[c.jsx(kO,{children:c.jsxs("div",{className:"textContent",children:[c.jsx(gn,{children:e==null?void 0:e.partnerTitle}),c.jsx(yn,{children:e==null?void 0:e.partnerContent})]})}),c.jsx(NO,{partners:((t=e==null?void 0:e.partners)==null?void 0:t.map(n=>({title:n==null?void 0:n.title,content:n==null?void 0:n.content})))||[]})]})},DO=e=>m.createElement("svg",{width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:4,y:4,width:48,height:48,rx:24,fill:"#FFFAEB"}),m.createElement("path",{d:"M27 19H23.8C22.1198 19 21.2798 19 20.638 19.327C20.0735 19.6146 19.6146 20.0735 19.327 20.638C19 21.2798 19 22.1198 19 23.8V32.2C19 33.8802 19 34.7202 19.327 35.362C19.6146 35.9265 20.0735 36.3854 20.638 36.673C21.2798 37 22.1198 37 23.8 37H32.2C33.8802 37 34.7202 37 35.362 36.673C35.9265 36.3854 36.3854 35.9265 36.673 35.362C37 34.7202 37 33.8802 37 32.2V29M28 24H32V28M31.5 19.5V18M35.4393 20.5607L36.5 19.5M36.5103 24.5H38.0103M19 29.3471C19.6519 29.4478 20.3199 29.5 21 29.5C25.3864 29.5 29.2653 27.3276 31.6197 24",stroke:"#FFBF0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("rect",{x:4,y:4,width:48,height:48,rx:24,stroke:"#FFFCF5",strokeWidth:8})),MO=e=>m.createElement("svg",{width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:4,y:4,width:48,height:48,rx:24,fill:"#FFFAEB"}),m.createElement("path",{d:"M22.0944 27.2288C22.0322 26.8282 22 26.4179 22 26C22 21.5817 25.6052 18 30.0526 18C34.4999 18 38.1052 21.5817 38.1052 26C38.1052 26.9981 37.9213 27.9535 37.5852 28.8345C37.5154 29.0175 37.4804 29.109 37.4646 29.1804C37.4489 29.2512 37.4428 29.301 37.4411 29.3735C37.4394 29.4466 37.4493 29.5272 37.4692 29.6883L37.8717 32.9585C37.9153 33.3125 37.9371 33.4895 37.8782 33.6182C37.8266 33.731 37.735 33.8205 37.6211 33.8695C37.4911 33.9254 37.3146 33.8995 36.9617 33.8478L33.7765 33.3809C33.6101 33.3565 33.527 33.3443 33.4512 33.3448C33.3763 33.3452 33.3245 33.3507 33.2511 33.3661C33.177 33.3817 33.0823 33.4172 32.893 33.4881C32.0097 33.819 31.0524 34 30.0526 34C29.6344 34 29.2237 33.9683 28.8227 33.9073M23.6316 38C26.5965 38 29 35.5376 29 32.5C29 29.4624 26.5965 27 23.6316 27C20.6667 27 18.2632 29.4624 18.2632 32.5C18.2632 33.1106 18.3603 33.6979 18.5395 34.2467C18.6153 34.4787 18.6532 34.5947 18.6657 34.6739C18.6786 34.7567 18.6809 34.8031 18.6761 34.8867C18.6714 34.9668 18.6514 35.0573 18.6113 35.2383L18 38L20.9948 37.591C21.1583 37.5687 21.24 37.5575 21.3114 37.558C21.3865 37.5585 21.4264 37.5626 21.5001 37.5773C21.5701 37.5912 21.6742 37.6279 21.8823 37.7014C22.4306 37.8949 23.0191 38 23.6316 38Z",stroke:"#FFBF0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("rect",{x:4,y:4,width:48,height:48,rx:24,stroke:"#FFFCF5",strokeWidth:8})),LO=e=>m.createElement("svg",{width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{x:4,y:4,width:48,height:48,rx:24,fill:"#FFFAEB"}),m.createElement("path",{d:"M25 33.5H19.5M22.5 28H18M25 22.5H20M33 19L26.4036 28.235C26.1116 28.6438 25.9656 28.8481 25.9719 29.0185C25.9774 29.1669 26.0486 29.3051 26.1661 29.3958C26.3011 29.5 26.5522 29.5 27.0546 29.5H32L31 37L37.5964 27.765C37.8884 27.3562 38.0344 27.1519 38.0281 26.9815C38.0226 26.8331 37.9514 26.6949 37.8339 26.6042C37.6989 26.5 37.4478 26.5 36.9454 26.5H32L33 19Z",stroke:"#FFBF0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("rect",{x:4,y:4,width:48,height:48,rx:24,stroke:"#FFFCF5",strokeWidth:8})),FO=G.section`
  /* margin-top: 6rem; */

  .heading {
    text-align: start;

    p {
      margin-top: 1rem;
      text-align: start;

      @media screen and (${O.medium}) {
        max-width: 60ch;
        /* margin-inline: auto; */
      }
    }
  }

  .flex-container {
    ${he}
    gap: 3rem;
    margin-top: 3rem;

    @media screen and (${O.small}) {
      gap: 4rem;
      margin-top: 4rem;
    }

    @media screen and (${O.medium}) {
      margin-top: 5rem;
      gap: 0;
    }
  }

  .group {
    @media screen and (${O.medium}) {
      display: flex;
      align-items: center;

      > div {
        flex-basis: 50%;
      }
    }

    @media screen and (${O.large1}) {
    }

    &:nth-child(odd) {
      @media screen and (${O.medium}) {
        flex-direction: row-reverse;
      }

      .group-text-content {
        @media screen and (${O.medium}) {
          padding-right: 2rem;
        }
        @media screen and (${O.large1}) {
          padding-right: 3rem;
          padding-left: 3rem;
        }
        @media screen and (${O.large2}) {
          padding-right: 5rem;
        }
      }
    }

    &:nth-child(even) {
      .group-text-content {
        @media screen and (${O.medium}) {
          padding-left: 2rem;
        }
        @media screen and (${O.large1}) {
          padding-left: 3.5rem;
        }
        @media screen and (${O.large2}) {
          padding-left: 5rem;
        }
      }
    }

    &-img-wrapper {
      background-color: ${q.colors.gray100};

      @media screen and (${O.medium}) {
        aspect-ratio: 6/5;
      }
      @media screen and (${O.large2}) {
        aspect-ratio: 4/3;
      }
    }

    &-text-content {
      margin-top: 2rem;

      @media screen and (${O.medium}) {
        margin-top: 0;
      }

      h3 {
        margin-top: 0.5rem;
        font-size: clamp(${P(22)}, 8vw, ${P(30)});
      }

      p {
        margin-top: 1rem;

        @media screen and (${O.large1}) {
          max-width: 45ch;
        }
      }
    }
  }
`,UO=({title:e,subTitle:t,data:n})=>c.jsxs(FO,{children:[c.jsxs("div",{className:"heading",children:[c.jsx(gn,{children:e}),c.jsx("p",{children:t})]}),c.jsx("div",{className:"flex-container",children:n==null?void 0:n.map((r,i)=>c.jsxs("div",{className:"group",children:[c.jsx("div",{className:"group-img-wrapper",children:c.jsx("img",{src:r.image,alt:""})}),c.jsxs("div",{className:"group-text-content",children:[i===1||i===3?c.jsx(LO,{}):i===0?c.jsx(MO,{}):c.jsx(DO,{}),c.jsx("h3",{className:"group-heading",children:r.title}),c.jsx("div",{className:"group-summary",children:c.jsx(yn,{children:r.content})})]})]},i))})]}),Xo="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAfQB9AMBIgACEQEDEQH/xAAtAAEAAgMBAQAAAAAAAAAAAAAABAYBAwUCBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA+tgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMQDoPPoAAAAAAAAAAAAAAAAAAAAAAAAAAAEImxqyLXsV4xXmD11OSLl0vnfTLi07gAAAAAAAAAAAAAAAAAAAAAAAB5zTSZxMYMzoAlRsAAACRdaF0y4gAAAAAAAAAAAAAAAAAAAAAAGg49akRwAAAAABnAunQoHaLK8ewAAAAAAAAAAAAAAAAAAAAc48VTWGAAAAAAAZxOIIJNxou8vrRvAAAAAAAAAAAAAAAAAAANdH7dePIAADbMOdnr7Th47+SvrCK8sUs403qcwroAOrb/nd2JwAAAAAAAAAAAAAAAAAGcRSnaPIAHRI3dn5GcAAAABAnxypAAWCvzi74AAAAAAAAAAAAAAAAAByurwyrgGSXZ48oAAAAAAYyKhp63JAHvwPojXsAAAAAAAAAAAAAAAAAHC7vGKoBNhdw7IAAAAAAAI1VudfOUzgHov2zGQAAAAAAAAAAAAAAAABzelpKCBaKvcDaAAAAAAAB59CpxrPWBu09EuYAAAAAAAAAAAAAAAAABgokfqcs9XOoW8AAAAAAAAA8U25U0d3hWY7wAAAAAAAAAAAAAAAAAEaTEOLwbVVCTbKragAAAAAAAADxTbhTxa6zbyfnXsAAAAAAAAAAAAAAAAAESXENVQuFbNVprFnAAAAAAAAANVPuVNOlY+d0SXs8ewAAAAAAAAAAAAAAAABHkaiLy+p4OL3fHsAAAAAAAAAVW1eDPp6JmQAAAAAAAAAAAAAAAAAAg4kRwAAAAAAAAAABv0zTIAAAAAAAAAAAAAAAAAAMx94hed+gAAAAAAAAAbdUwxtwAAAAAAAAAAAAAAAAAAAANUXoQDAAAAAAAAAE+JMMAAAAAAAAAAAAAAAAAAAAAzFk4IIAAAAAAAB6JG0AAAAAAAAAAAAAAAAAAAAAGcDRHnwAAAAAAABMizjAAAAAAAAAAAAAAAAAAAAAAAHL6nPMeoe82gAAAAR/MUm9bkdcAAAAAAAAAAAAAAAAAAAAAGTGjXWiR165YzMGfghyomk6jnbCahiYg6iZF1gDVMhxS5qxZT0AAAAAAAAAAAAAAAAAAABE2VYx4zgWOuWM9ARZQ5mOnEIzOAAADTFlxBLiC5eqzZgAAAAAAAAAAAAAAAAA8c86fngwzMbOABYK/LO08ewADGneIfmcICeIPuXFInP9+AB1eULorM867RvAAAAAAAAAAAABBJ2vgc87vPgj1jAAAAA29XiiyuN1j2AABiPySbzsYM4AAABIjjs9Gqi6Kr0jsPHsAAAAAAAEAn8zjRyTHwAAAAAAAAHvwO1LrnZJQHOzyjOAAAAAAAAA9dPlC276b0SwtO4AAAAeNdaJXNzgAAAAAAAAAAAbtIsunREInnOAAAAAAAAAAAD12uGLqq9kPYAGvbXiFoAAAAAAAAAAAAACbEz4AAAAAAAAAAAAAEiOLhsrNnMAU21VMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWesdk7bIhVe0VcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdHnTizAiVa4U8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAToPSLEyMU4PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHWDvg//xAA/EAACAQIBCAYIBAUEAwAAAAABAgMEEQAFEiExQEFQURAgIjJhcRMwUnKBkaGxM0JiwSMkNFPRFBVDY3Bzkv/aAAgBAQABPwD/AMtswRGZtSi5xHlWhkIHpSpPtC2EeOQXR1Yc1N+NT1lNTfiyAH2RpOInMsauUZM7SAddujK9eDnUsZ98j7dCMyG6sVPMG2IcsVkNs4iVeTa/mMUuVaWosrExvybV8+LVWUKaluHe7+yuk4qcr1U9wh9EnJdfzxkqlFTVZz6VQZzeJwWVVJYgAbzoGK/LF86KmPgZP8dajynUUtlJLxewf2OKaphqow8TXG8bweR4k7pGpd2CqBpJxW5XkkvHTkqm995xcknopK6SiEgjRSXtpbdbFRV1FSbyyEjlqA+HqKaolpZRJGfMbiMU1QlVEJE8iOR4gzKilmIAAuScV+UHrJLDsxKeyv7n12Tas0tQCT/DfQ/+eIZbqs0LTKdYzn/YbBkuoNRSLnd5DmH4auHVFTBSrnSvbkBrOKqc1FRLL7R0eWwRyywsGjdlPgbYpMtSIQtQucPaGvEU8U6B43DKeF5QymlJeOOzTfRfPEkkkzl5GLOdZOx01TNSyB4mtzB1HzxRVsVZHddDjvKdY4TlGvFHGFQj0r6vAczgksSxJJJuScX2BYClG8zfnIVfK/UgnkppVljNmH1GKaoSqhWVPIjkeDyypBE8jmyqLnFRO9TK8r62PyHLYaTJzykPKCI+W84yoAKVABYZ4HVyVVmmqQrH+HIbHwO48Hy5U/h06n9T/sPURwyymyRs3kMJkyqYaQq+ZwMkP+aYDyXAyQu+cnyXAyRD/df5DAyRBvkk+mP9op/7kn0x/tFP/ck+mBkmnGt5DiKkp4dKRi/M6T0ZV006eEg62Tqg1NJGx7w7LeY4LoxVTenqZZfac28utBTS1DWQaN7HUMQ5OgisWGe3M6vlgD1eUhelY8mB62Qps2aWE6nXOHmOC10hio6hxrzCB5nR1qKhNSc5tEY+vlhI0jUKigAbvW1a59PKv6D1snyeiradv12+ejguWWzaK3tOB1aOmNTJY9xdLYRQoAAsB644mjMUsiHcxHVUlSrDWCDgG4B4Jl0/wIB/2H7dWkgFPCq7zpbz2DKkZWZZLaHFviOqdRxCbwxHnGp+nBMu/gwe+ft1MnxCWqS+pe0fhsNXB6eB03618xi3U3HEGiCEf9a/bgmXBekjPKUfbqZJj7MsniF2LKVMYpPSqOw50+B6g5c8AWAHIAcEysudQy/pKnqZOXNpI/G52KSNZUKMLgjFRTvTSFG+B5jpp1z54V5yLwWpj9LTTx+1G3UgXMijXkg2PKMQkpnO9O0OnJSZ9fB4En5Dg1VF6Gpnj9mQ9CC7KOZA2SUXjcc0b7dOQY71Esnsx2+fBWYKLnGVh/NF7Wz1B/bogF54h+tdkfuN7p+3TkS0cUjEd+TX5cFnOlRjKyFoon9lrfPopBephH6xskn4b+6emjjMVNEp9m/zwnaRTwSbTIcViekppF8L/Loof6uH3tknNoZfcb7dEKGWWNB+ZgMAYhPYHBJfxGwRcYljMcjodasRihH83B72yVH4EvuN9ujJcefUFzqRfqeiEWT48El758h0ZTjzanO3OoOKAXq4fM/bZJheJxzU9GTIsymzjrc3+HRD3BwScaQejKsd4Uf2W++MkxEyPLbQBb4nZZKZhVGAay9h5HCKEVUGoADoQWVRyHBJlul+XRLGsqFHF1bWMRxpEoRFCqNlMUbOshUZy3sfPoVSzAcFtcEYIsbbTALkm2rg0y/mG0DCKEW3BtYODByOHUo1tlSIutwcRxBDfWeE1A0qdljFkXhU4ul+R2TeBwsi4IwRscS50g8MHhc4zWvz2OFc0X58MkTPUjA2FEz2A4dMn5gNhjTNXxPDteL6SOXr4WDy5vIX4hKCCWXWCcK4caPWzTW7K4ofxT7vDyQASSABrJwbEkjEiNGc5cJKr+B9UTbEk+5Pn0UJUTWJAuthw6eoipkznPkN5xU1k1Se0bINSjCd1fdGCoYEHEkZQ+GEmZe9pwsqPqPWJAw1Qi6tOGld9Z6ZzZR54pcpFLJPcjc28YUqwDKQQd/C6urWlXnIdS4llkmcvI1yehO6vujoKg68SRFLkaV6FkddTHAqJN9sf6hvZGP9QfZGDO58MEsx0knqz90efRSVklMbd5DrXEUiTIHRrqeE1dWtKmjTIe6uJHeRy7kljrPSndX3R1JIN64sRrHqp+6PPppap6Z7g9k95eeInSZA6G6ng9TUJTRlzr/KOZxJI8sjO5uSeondX3R1WRX14enI0rpwQQbEW9RP3R59SiqzTSae4x7QwrKyhgbgi4PBZJFijaRzZVGnFRO9RIXb4DkOrC4eJGHLrkA6wDhoEOrRg05GojBgkG4Y9DJ7OPQyezgQSHcMCnO9hirVUCoDc6z1cnVnom9FI3YY9m+48CkljiF3dV8ziTKsCdxWf6DEmVZ27iqn1xLUTT/iSM3h1qeoMJse4deEdXUFWBB9bPUrCLCxflgsXJYnSetHlCqjAGfnAbmxFlZDoljI8V0jEVXTTdyVb8joO2SzRQgGSRVxLlaMaIoyx5toGJa+ql0GQqOS6Bg3Jv6qKV4mupxBVRydk9luR9USFFyQBiet1rF8WxrJJNyfVRVU8PclYDlrGIsrN/yxA+K4hraabQsgDcjoOzzZQp4tCnPbkuJspVEuhSEXw14NySSbn18NW8dg3aX7YjkSVbob9eaqSHR3m5DEs0k3fPw9fDV1EPckNuR0jEWVlNhLHbxXEcsUovG4YeGwkhQSxAA1k4nypEmiIZ7c9SjE1VPP+I5tyGgbGjtG2cpscU9UJuydD9Wpq7EpGfM7GrMjBlJB5jEOVJksJbOvyOIaqCo7ji/snQfXVGUIoCVXtvyGoYnqZqg9tyRy3bMpIIINjimn9MunvDX01lTb+Eh0/mOzA2xBlOWLRJ21+uIKiKoUmNrkaxvHqpJEiQu7AAYqcoyT3WO6J9TtMMphkDjyPlgEMARqIxUS+hjLb9QwSSSSdoVmQgqSDzGKXKl7JP8A/f8AnAIYAggg7x16iojpo89te4bycT1ElQ+c58huG10MmfGV3ritkzpc3cu10lbJSt7Ue9T9xiGeKdA6G46s0qQRtI50DE871Ehd/gNwG2UT5sp8VP0wxzmZuZJ2ynqJKZ89D5jniGZJ4xIh0HqZTqPSTeiHdT77ajZrA+e3UNSaeUXPYY2bpYhVZidQJwSWJYnSSSeOZPmMtMoJuydk9FW2bSzH9B47kh+3MnNQejKGijm8h9+O5Ma1Wo5qw6Mo/wBHN8OO5O/rIfj9uivF6Ob3b8dycL1kXx+3ROufBMvNG47ksXqh4KelgAW8zxzJA/mJP/X0f//EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQIBAT8AAB//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/AAAf/9k=",BO=()=>{var n,r,i,o,a,s;const{data:e,isPending:t}=Ko();return c.jsx(Oc,{children:c.jsx(UO,{title:"Get To Know Our History",subTitle:"Things get interesting because you are eager to know more, or you become eager to know more because it is interesting?",data:[{image:(i=(r=(n=e==null?void 0:e.ourDepartmentHistoryImage)==null?void 0:n.data)==null?void 0:r.attributes)!=null&&i.url?`${Gn}${(s=(a=(o=e==null?void 0:e.ourDepartmentHistoryImage)==null?void 0:o.data)==null?void 0:a.attributes)==null?void 0:s.url}`:Xo,title:"Our Department",content:t?"Loading...":(e==null?void 0:e.ourDepartmentHistory)||"No Content Available"}]})})},{colors:MA}=q,zO=G.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column; /* Ensure flex direction is column for proper height adjustment */

  .banner {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    height: auto; /* Ensure height is auto */

    .left {
      background-color: ${MA.primary};
      color: ${MA.white};
      border-top: 7px solid ${q.colors.yellow};
      padding: 2rem;
      ${he}
      gap: 1rem;
      height: auto; /* Ensure height is auto */
      display: flex;
      flex-direction: column; /* Ensure flex direction is column for proper height adjustment */
    }

    .left h2 {
      color: ${q.colors.yellow};
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    @media screen and (${O.small}) {
      grid-template-columns: 1fr 1fr;

      .left {
        padding: 2rem;
      }
    }

    @media screen and (${O.medium}) {
      grid-template-columns: 1fr 1fr;

      .left {
        padding: 4rem;
      }
    }
  }
`,O5=({mission:e,vision:t})=>c.jsxs(zO,{children:[c.jsx(gn,{children:"Our Mission and Vision"}),c.jsxs("div",{className:"banner",children:[c.jsxs("div",{className:"left",children:[c.jsx("h2",{children:"Our Vision"}),c.jsx("p",{children:t}),c.jsx("h2",{children:"Our Mission"}),c.jsx("p",{children:e})]}),c.jsx("div",{className:"right",children:c.jsx("img",{src:"/mission-vision.jpg",alt:Xo})})]})]});function VO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function HO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"},child:[]}]})(e)}function QO(e){return Ut({tag:"svg",attr:{t:"1569683925316",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"},child:[]},{tag:"path",attr:{d:"M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"},child:[]}]})(e)}function WO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function GO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function qO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function YO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"},child:[]}]})(e)}function KO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function XO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function JO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function ZO(e){return Ut({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}function mp(e){return Ut({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function j5(e,t=35){return e?e.length<=t?e:e.substring(0,t)+"...":""}function Va(e){const t=new Date,n=new Date(e);return isNaN(n.getTime())?(console.error("Invalid date format"),!1):n<t}const ej=e=>{const t={};return e.forEach(n=>{if(!n.includes("http"))return;const r=new URL(n).hostname.toLowerCase().split(".")[0];t[r]=n}),t},tj=e=>({github:VO,facebook:WO,twitter:KO,instagram:GO,linkedin:qO,youtube:XO,medium:YO})[e.toLowerCase()]||a_,h1=e=>e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase()),{colors:nj}=q,rj=G.section`
    margin: 0;
    padding: 0;
    ${he}
    gap: 2rem;

    .left {
        border-top: 7px solid ${nj.yellow};
        h1 {
            padding-top: 2rem;
            font-size: 1.5rem;
        }
    }

    .right {
        gap: 1rem;
        ${he}

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }

    @media screen and (${O.small}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (${O.medium}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto; /* Ensure rows adjust to content */
    }
`,N5=e=>{var t;return c.jsxs(rj,{children:[c.jsx("div",{className:"left",children:c.jsx("h1",{children:"Our Core Values"})}),c.jsx("div",{className:"right",children:(t=e==null?void 0:e.values)==null?void 0:t.map(n=>c.jsxs("div",{children:[c.jsx("h2",{children:h1(n==null?void 0:n.title)}),c.jsx("p",{children:n==null?void 0:n.description})]},n==null?void 0:n.title))})]})},ij=()=>{const{data:e}=Ko();return c.jsxs(Oc,{children:[c.jsx(O5,{mission:e==null?void 0:e.mission,vision:e==null?void 0:e.vision}),c.jsx(N5,{values:(e==null?void 0:e.coreValues)||[]})]})},{colors:LA}=q,oj=G(xe)`
  padding: 0.55em 1.25em;
  font-size: ${P(15)};
  font-weight: 600;
  color: ${LA.darkBlue};
  border: 1px solid ${LA.darkBlue};
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: hsl(216, 16%, 95%);
  }
`,kr=({className:e,to:t,children:n,...r})=>c.jsx(oj,{to:t,className:e,...r,children:n}),aj=G.section`

  .profileCom {
    ${he}
    gap: 4rem;
    margin-top: 1rem;

    @media screen and (${O.small}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (${O.medium}) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr 1fr;
    }

    .right {
      ${he}
      gap: 1rem;

      @media screen and (${O.small}) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        h1 {
          color: ${q.colors.yellow};
          margin-bottom: 0.5rem;
          font-size: ${P(50)};
        }
      }

      @media screen and (${O.medium}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 1fr;
      }
    }

    .left {
      p {
        margin-bottom: 0.5rem;
      }

      ul {
        margin-top: 1rem;
        padding-left: 1rem;

        .list {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          cursor: pointer;
          /* justify-content: center; */
        }

        .list:hover {
          color: ${q.colors.yellow};
        }

        .icon {
          color: ${q.colors.yellow};
        }
      }

      .btn {
            margin-top: 1rem;
        }
    }
  }
`,sj=({content:e,profileStats:t,loading:n})=>c.jsx(c.Fragment,{children:c.jsxs(aj,{children:[c.jsx(gn,{children:"Profile"}),c.jsxs("div",{className:"profileCom",children:[c.jsxs("div",{className:"left",children:[c.jsx(yn,{children:n?"loading...":e||"No Content Check Again Later"}),c.jsx(kr,{to:"/about-us/history",className:"btn",children:"Learn about our history"})]}),c.jsx("div",{className:"right",children:t==null?void 0:t.map(r=>c.jsxs("div",{children:[c.jsx("h1",{children:r==null?void 0:r.value}),c.jsx("p",{children:r==null?void 0:r.label})]},r==null?void 0:r.id))})]})]})}),lj=()=>{const{data:e,isPending:t}=Ko();return c.jsx(Oc,{children:c.jsx(sj,{loading:t,content:e==null?void 0:e.overviewProfileContent,profileStats:e==null?void 0:e.overviewProfileStatsItem})})},cj=G.section`
    margin-top: 2rem;

    .cardComponent {
       display: flex;
       gap: 2rem;
       flex-direction: column;
    }

    .cardComponent img {
        height: 200px; /* Set a fixed height */
        width: 100%; /* Maintain aspect ratio: : changing to auto will maintain the with of image */
        object-fit: contain; /* Ensure the image covers the entire area: changing to cover wil do thing */
    }

    .info h2 {
        margin-bottom: 1rem;
    }

    .info h3 {
        margin-bottom: 0.5rem;
    }

    /* .card {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    } */
`,uj=({image:e,name:t,period:n,info:r})=>c.jsx(cj,{children:c.jsx("div",{className:"card",children:c.jsxs("div",{className:"cardComponent",children:[c.jsx("div",{children:c.jsx("img",{src:e||Xo,alt:t})}),c.jsxs("div",{className:"info",children:[c.jsx("h2",{children:t}),c.jsx("h3",{children:n}),c.jsx("p",{children:r})]})]})})}),dj=G.section`

.heading {
    text-align: start;

    p {
      margin-top: 1rem;
      text-align: start;

      @media screen and (${O.medium}) {
        max-width: 60ch;
        /* margin-inline: auto; */
      }
    }
  }
 
 .row {
    display: grid;
    gap: 2rem;
    justify-content: center;

    @media screen and (${O.small}) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      row-gap: 3rem;
      justify-content: start;
    }
    @media screen and (${O.large1}) {
      grid-template-columns: repeat(3, 1fr);
    }
 }
`,fj=()=>{var t;const{data:e}=Ko();return c.jsx(Oc,{children:c.jsxs(dj,{children:[c.jsxs("div",{className:"heading",children:[c.jsx(gn,{children:e==null?void 0:e.leadershipTitle}),c.jsx("p",{children:e==null?void 0:e.leadershipDescription})]}),c.jsx("div",{className:"row",children:(t=e==null?void 0:e.leadershipPortfolios)==null?void 0:t.map(({id:n,image:r,name:i,duration:o,content:a})=>{var s,l,u,d;return c.jsx(uj,{image:(l=(s=r==null?void 0:r.data)==null?void 0:s.attributes)!=null&&l.url?`${Gn}${(d=(u=r==null?void 0:r.data)==null?void 0:u.attributes)==null?void 0:d.url}`:Xo,name:i,period:o,info:a},n)})})]})})},hj=yt`
  query AcademicsPage {
    academicsPage {
      data {
        attributes {
          heroImageQuote
          heroImageQuoteName
          heroImages {
            data {
              attributes {
                url
                mime
                hash
              }
            }
          }
          academics_intro {
            bannerContent
            bannerImage {
              data {
                attributes {
                  url
                  mime
                }
              }
            }
          }
          academics_components {
            content
            title
          }
        }
      }
    }
  }
`,pj=()=>vt(Yo,hj),mj=e=>{const t={};if(Object.keys(e).length){const n=e.academicsPage.data.attributes;return t.academicsComponents=n.academics_components,t.academicsIntro=n.academics_intro,t.heroImageQuote=n.heroImageQuote,t.heroImageQuoteName=n.heroImageQuoteName,t.heroImages=n.heroImages,t}return null},gj=()=>gt({queryKey:["academics"],queryFn:pj,select:mj}),vj=e=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{width:40,height:40,rx:20,fill:"#153D6F",fillOpacity:.06}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 21.8744C17.1075 21.3519 16.875 20.7031 16.875 20C16.875 18.275 18.275 16.875 20 16.875C21.725 16.875 23.125 18.275 23.125 20C23.125 20.7031 22.8925 21.3519 22.5 21.8744V26.25C22.5 26.455 22.3994 26.6469 22.2312 26.7637C22.0625 26.8806 21.8475 26.9069 21.6556 26.835L20 26.2137L18.3444 26.835C18.1525 26.9069 17.9375 26.8806 17.7688 26.7637C17.6006 26.6469 17.5 26.455 17.5 26.25V21.8744ZM18.75 22.8644V25.3481L19.7806 24.9612C19.9219 24.9081 20.0781 24.9081 20.2194 24.9612L21.25 25.3481V22.8644C20.8669 23.0319 20.4444 23.125 20 23.125C19.5556 23.125 19.1331 23.0319 18.75 22.8644ZM16.25 24.375H15.625C15.1275 24.375 14.6506 24.1775 14.2994 23.8256C13.9475 23.4744 13.75 22.9969 13.75 22.5V11.25C13.75 10.7525 13.9475 10.2756 14.2994 9.92437C14.6506 9.5725 15.1275 9.375 15.625 9.375C17.7894 9.375 22.2106 9.375 24.375 9.375C24.8725 9.375 25.3494 9.5725 25.7006 9.92437C26.0525 10.2756 26.25 10.7525 26.25 11.25C26.25 13.8644 26.25 19.885 26.25 22.5C26.25 22.9969 26.0525 23.4744 25.7006 23.8256C25.3494 24.1775 24.8725 24.375 24.375 24.375H23.75V22.2519C24.1469 21.5944 24.375 20.8237 24.375 20C24.375 17.585 22.4144 15.625 20 15.625C17.5856 15.625 15.625 17.585 15.625 20C15.625 20.8237 15.8531 21.5944 16.25 22.2519V24.375ZM16.875 14.375H23.125C23.47 14.375 23.75 14.095 23.75 13.75C23.75 13.405 23.47 13.125 23.125 13.125H16.875C16.53 13.125 16.25 13.405 16.25 13.75C16.25 14.095 16.53 14.375 16.875 14.375ZM18.125 11.875H21.875C22.22 11.875 22.5 11.595 22.5 11.25C22.5 10.905 22.22 10.625 21.875 10.625H18.125C17.78 10.625 17.5 10.905 17.5 11.25C17.5 11.595 17.78 11.875 18.125 11.875Z",fill:"#153D6F"})),yj=e=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{width:40,height:40,rx:20,fill:"#153D6F",fillOpacity:.06}),m.createElement("path",{d:"M11.2249 17.7125L11.1499 17.675L11.2249 17.7125Z",fill:"#153D6F"}),m.createElement("path",{d:"M26.5627 21.125C26.5252 20.675 26.5627 20.225 26.4502 19.775C26.3752 19.55 26.3377 19.4 26.1502 19.25C25.9252 19.1 25.7002 18.95 25.4377 18.8375C24.8377 18.5375 24.2002 18.3125 23.4877 18.1625C22.0252 17.8625 20.5627 17.7875 19.0627 17.8625C18.4252 17.9 17.8252 17.9375 17.2252 18.0125C16.1752 18.1625 15.1627 18.425 14.2627 18.95C13.9252 19.1375 13.6627 19.2875 13.5877 19.6625C13.3627 20.6 13.3627 22.1 13.3252 23.075C13.3252 23.2625 13.4002 23.375 13.5127 23.4875C13.6627 23.5625 13.7752 23.675 13.9252 23.7125C14.8252 24.0875 15.8002 24.2 16.7377 24.3125C17.2252 24.3875 17.7502 24.425 18.2377 24.425C20.4877 24.5 22.7002 24.5 24.8752 24.05C25.4002 23.9375 25.8502 23.7125 26.3377 23.525C26.4877 23.45 26.6002 23.3 26.6002 23.1125C26.6002 22.6625 26.6002 21.6125 26.5627 21.125ZM25.6627 23.375C25.4377 23.4875 25.1752 23.6 24.9127 23.6375C24.4627 23.7125 24.0127 23.7875 23.5252 23.825C22.6627 23.9 21.7627 23.9375 20.9002 23.975C20.5627 23.975 20.2627 24.0125 19.9252 24.0125C19.4002 24.0125 18.8752 23.975 18.3502 23.975C17.7127 23.9375 17.0377 23.9 16.4002 23.8625C15.7252 23.7875 15.0502 23.75 14.3752 23.4875C14.3377 23.4875 14.3377 23.4875 14.3002 23.45C14.1127 23.375 13.8877 23.1875 14.1127 23.0375C14.2627 22.925 14.4877 22.8875 14.6377 22.85C14.9377 22.775 15.2752 22.7 15.6127 22.625C16.7752 22.4375 17.9752 22.4 19.1752 22.4C20.3002 22.4 21.3877 22.4 22.5127 22.4375C23.3377 22.475 24.1252 22.625 24.9502 22.7375C25.1377 22.775 25.3627 22.8125 25.5502 22.8875C25.7752 22.9625 25.9627 23.225 25.6627 23.375Z",fill:"#153D6F"}),m.createElement("path",{d:"M11.5625 22.8125C11.75 23.4875 12.275 25.55 12.275 27.2375C12.275 27.2375 12.05 27.575 11.2625 27.6125C10.475 27.575 10.25 27.2375 10.25 27.2375C10.25 25.55 10.775 23.525 10.925 22.8125C10.7375 22.7 10.625 22.5125 10.625 22.325C10.625 22.0625 10.8125 21.8 11.075 21.7625V20.6375L11.375 20.7875V21.725C11.6375 21.8 11.825 22.025 11.825 22.2875C11.825 22.5125 11.7125 22.7 11.5625 22.8125Z",fill:"#153D6F"}),m.createElement("path",{d:"M31.3252 18.725C30.0502 19.475 28.7752 20.1875 27.5002 20.9375L27.2752 21.05V21.0125V20.975C27.2752 20.9 27.2752 20.7875 27.2752 20.7125C27.2752 20.375 27.2752 20 27.1627 19.5875C27.0877 19.25 26.9377 18.9125 26.5252 18.65L26.4127 18.575C26.2252 18.425 26.0002 18.3125 25.7377 18.1625C25.1002 17.8625 24.4252 17.6 23.6377 17.45C22.5127 17.225 21.3127 17.1125 20.0002 17.1125C19.7002 17.1125 19.3627 17.1125 19.0627 17.15C18.3127 17.1875 17.7127 17.225 17.1502 17.3C15.8377 17.4875 14.8252 17.825 13.8877 18.35C13.5127 18.5375 13.0627 18.8 12.8752 19.5125C12.7627 19.9625 12.7252 20.4875 12.6877 21.0125L12.3502 20.825L11.6752 20.45L11.6002 20.4125L11.3002 20.2625L11.2252 20.225L10.3252 19.7C9.8002 19.4 9.2377 19.0625 8.6377 18.725C8.9002 18.575 9.0877 18.425 9.3127 18.3125C12.7252 16.4 16.1002 14.4875 19.4752 12.575C19.8502 12.3875 20.1127 12.3875 20.4877 12.575C23.9377 14.525 27.3877 16.475 30.8377 18.425C31.0252 18.5 31.1377 18.575 31.3252 18.725Z",fill:"#153D6F"})),xf="data:image/jpeg;base64,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",{colors:FA}=q,Aj=G.section`
  margin-top: 6rem;

  .wrapper {
    ${he}
    gap: 3rem;

    @media screen and (${O.medium}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
    }
  }

  .side-nav {
    ${he}
    gap: 1rem;

    @media screen and (${O.medium}) {
      position: sticky;
      top: 1.5rem;
    }

    a {
      text-align: left;
      font-size: ${P(18)};
      color: ${FA.gray400};
      white-space: nowrap;

      &.active {
        color: ${FA.darkBlue};
        font-weight: 700;
      }
    }
  }

  .content {
    max-width: ${P(797)};

    .description {
      margin-top: 2rem;
    }

    .info {
      ${he}
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .group {
      display: flex;
      gap: 1rem;

      .icon-wrapper {
        svg {
          ${de(P(40))}
        }
      }

      .inner-wrapper {
        p:first-child {
          font-weight: 700;
          font-size: ${P(19)};
        }

        p:last-child {
          font-size: ${P(15)};
        }
      }
    }

    .cards-container {
      ${he}
      gap: 2.5rem;
      margin-top: 1rem;

      @media screen and (${O.small}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
  }
`,k5=({data:e})=>c.jsx(Aj,{children:c.jsx("div",{className:"wrapper",children:c.jsxs("div",{className:"content",children:[c.jsx("img",{src:(e==null?void 0:e.image)??xf,alt:"",width:797,height:448}),c.jsx("div",{className:"description",children:c.jsx(yn,{children:e==null?void 0:e.content})}),c.jsxs("div",{className:"info",children:[c.jsxs("div",{className:"group",children:[c.jsx("div",{className:"icon-wrapper",children:c.jsx(yj,{})}),c.jsxs("div",{className:"inner-wrapper",children:[c.jsx("p",{children:"Expert Instructors"}),c.jsx("p",{children:(e==null?void 0:e.expert_instructors)??"N/A"})]})]}),c.jsxs("div",{className:"group",children:[c.jsx("div",{className:"icon-wrapper",children:c.jsx(vj,{})}),c.jsxs("div",{className:"inner-wrapper",children:[c.jsx("p",{children:"Certification"}),c.jsx("p",{children:(e==null?void 0:e.certification)??"N/A"})]})]})]})]})})}),Ej=()=>{var r,i,o,a,s,l,u;const{data:e,isPending:t}=gj(),{preloaderStates:n}=gr("academics");return c.jsxs(c.Fragment,{children:[(n==null?void 0:n.academics)===0&&c.jsx(mr,{isLoading:t}),c.jsxs(mn,{children:[c.jsx("title",{children:`Academics - ${On}`}),c.jsx("meta",{name:"description",content:"Describes academics page"})]}),c.jsx(Rs,{quote:e==null?void 0:e.heroImageQuote,quoteAuthor:e==null?void 0:e.heroImageQuoteName,images:(i=(r=e==null?void 0:e.heroImages)==null?void 0:r.data)==null?void 0:i.map(d=>{var h,f,p;return{url:`${Gn}${(h=d==null?void 0:d.attributes)==null?void 0:h.url}`,mime:(f=d==null?void 0:d.attributes)==null?void 0:f.mime,hash:(p=d==null?void 0:d.attributes)==null?void 0:p.hash}})}),c.jsx(k5,{introBannerImage:`${Gn}${(l=(s=(a=(o=e==null?void 0:e.academicsIntro)==null?void 0:o.bannerImage)==null?void 0:a.data)==null?void 0:s.attributes)==null?void 0:l.url}`,introContent:(u=e==null?void 0:e.academicsIntro)==null?void 0:u.bannerContent}),c.jsx(pr,{})]})},{colors:gp}=q,bj=G.div`
  position: relative;

  &::before {
    ${Or}
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    ${de("100%","1px")}
    background-image: linear-gradient(
      to right,
      ${sr(gp.primary,.5)} 10%,
      ${sr(gp.primary,.5)} 55%,
      rgb(0, 0, 0, 0) 0%
    );
    background-position: top;
    background-size: 10px 1px;
    background-repeat: repeat-x;
    z-index: -1;
  }

  h2 {
    text-align: center;
    width: fit-content;
    padding-inline: 1rem;
    margin-inline: auto;
    background-color: ${gp.white};
    z-index: 1;
    text-transform: capitalize;
  }
`,Jo=({children:e,className:t,id:n})=>c.jsx(bj,{className:t,id:n,children:c.jsx(gn,{children:e})});function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function $t(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function xj(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function $5(...e){return t=>e.forEach(n=>xj(n,t))}function Gt(...e){return m.useCallback($5(...e),e)}function jc(e,t=[]){let n=[];function r(o,a){const s=m.createContext(a),l=n.length;n=[...n,a];function u(h){const{scope:f,children:p,...v}=h,g=(f==null?void 0:f[e][l])||s,S=m.useMemo(()=>v,Object.values(v));return m.createElement(g.Provider,{value:S},p)}function d(h,f){const p=(f==null?void 0:f[e][l])||s,v=m.useContext(p);if(v)return v;if(a!==void 0)return a;throw new Error(`\`${h}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,d]}const i=()=>{const o=n.map(a=>m.createContext(a));return function(s){const l=(s==null?void 0:s[e])||o;return m.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return i.scopeName=e,[r,wj(i,...t)]}function wj(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const h=l(o)[`__scope${u}`];return{...s,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}const dc=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},Sj=Wd.useId||(()=>{});let Cj=0;function $l(e){const[t,n]=m.useState(Sj());return dc(()=>{e||n(r=>r??String(Cj++))},[e]),e||(t?`radix-${t}`:"")}function cn(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function wf({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=Tj({defaultProp:t,onChange:n}),o=e!==void 0,a=o?e:r,s=cn(n),l=m.useCallback(u=>{if(o){const h=typeof u=="function"?u(e):u;h!==e&&s(h)}else i(u)},[o,e,i,s]);return[a,l]}function Tj({defaultProp:e,onChange:t}){const n=m.useState(e),[r]=n,i=m.useRef(r),o=cn(t);return m.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}const fc=m.forwardRef((e,t)=>{const{children:n,...r}=e,i=m.Children.toArray(n),o=i.find(Pj);if(o){const a=o.props.children,s=i.map(l=>l===o?m.Children.count(a)>1?m.Children.only(null):m.isValidElement(a)?a.props.children:null:l);return m.createElement(dg,ue({},r,{ref:t}),m.isValidElement(a)?m.cloneElement(a,void 0,s):null)}return m.createElement(dg,ue({},r,{ref:t}),n)});fc.displayName="Slot";const dg=m.forwardRef((e,t)=>{const{children:n,...r}=e;return m.isValidElement(n)?m.cloneElement(n,{..._j(r,n.props),ref:t?$5(t,n.ref):n.ref}):m.Children.count(n)>1?m.Children.only(null):null});dg.displayName="SlotClone";const Ij=({children:e})=>m.createElement(m.Fragment,null,e);function Pj(e){return m.isValidElement(e)&&e.type===Ij}function _j(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}const Rj=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Bt=Rj.reduce((e,t)=>{const n=m.forwardRef((r,i)=>{const{asChild:o,...a}=r,s=o?fc:t;return m.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),m.createElement(s,ue({},a,{ref:i}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Oj(e,t){e&&Is.flushSync(()=>e.dispatchEvent(t))}function jj(e,t=globalThis==null?void 0:globalThis.document){const n=cn(e);m.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const fg="dismissableLayer.update",Nj="dismissableLayer.pointerDownOutside",kj="dismissableLayer.focusOutside";let UA;const $j=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Dj=m.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:s,onDismiss:l,...u}=e,d=m.useContext($j),[h,f]=m.useState(null),p=(n=h==null?void 0:h.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,v]=m.useState({}),g=Gt(t,T=>f(T)),S=Array.from(d.layers),[E]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),A=S.indexOf(E),y=h?S.indexOf(h):-1,x=d.layersWithOutsidePointerEventsDisabled.size>0,w=y>=A,C=Mj(T=>{const _=T.target,$=[...d.branches].some(M=>M.contains(_));!w||$||(o==null||o(T),s==null||s(T),T.defaultPrevented||l==null||l())},p),b=Lj(T=>{const _=T.target;[...d.branches].some(M=>M.contains(_))||(a==null||a(T),s==null||s(T),T.defaultPrevented||l==null||l())},p);return jj(T=>{y===d.layers.size-1&&(i==null||i(T),!T.defaultPrevented&&l&&(T.preventDefault(),l()))},p),m.useEffect(()=>{if(h)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(UA=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(h)),d.layers.add(h),BA(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=UA)}},[h,p,r,d]),m.useEffect(()=>()=>{h&&(d.layers.delete(h),d.layersWithOutsidePointerEventsDisabled.delete(h),BA())},[h,d]),m.useEffect(()=>{const T=()=>v({});return document.addEventListener(fg,T),()=>document.removeEventListener(fg,T)},[]),m.createElement(Bt.div,ue({},u,{ref:g,style:{pointerEvents:x?w?"auto":"none":void 0,...e.style},onFocusCapture:$t(e.onFocusCapture,b.onFocusCapture),onBlurCapture:$t(e.onBlurCapture,b.onBlurCapture),onPointerDownCapture:$t(e.onPointerDownCapture,C.onPointerDownCapture)}))});function Mj(e,t=globalThis==null?void 0:globalThis.document){const n=cn(e),r=m.useRef(!1),i=m.useRef(()=>{});return m.useEffect(()=>{const o=s=>{if(s.target&&!r.current){let d=function(){D5(Nj,n,u,{discrete:!0})};var l=d;const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=d,t.addEventListener("click",i.current,{once:!0})):d()}else t.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Lj(e,t=globalThis==null?void 0:globalThis.document){const n=cn(e),r=m.useRef(!1);return m.useEffect(()=>{const i=o=>{o.target&&!r.current&&D5(kj,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function BA(){const e=new CustomEvent(fg);document.dispatchEvent(e)}function D5(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Oj(i,o):i.dispatchEvent(o)}const vp="focusScope.autoFocusOnMount",yp="focusScope.autoFocusOnUnmount",zA={bubbles:!1,cancelable:!0},Fj=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=e,[s,l]=m.useState(null),u=cn(i),d=cn(o),h=m.useRef(null),f=Gt(t,g=>l(g)),p=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let A=function(C){if(p.paused||!s)return;const b=C.target;s.contains(b)?h.current=b:Ei(h.current,{select:!0})},y=function(C){if(p.paused||!s)return;const b=C.relatedTarget;b!==null&&(s.contains(b)||Ei(h.current,{select:!0}))},x=function(C){if(document.activeElement===document.body)for(const T of C)T.removedNodes.length>0&&Ei(s)};var g=A,S=y,E=x;document.addEventListener("focusin",A),document.addEventListener("focusout",y);const w=new MutationObserver(x);return s&&w.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",A),document.removeEventListener("focusout",y),w.disconnect()}}},[r,s,p.paused]),m.useEffect(()=>{if(s){HA.add(p);const g=document.activeElement;if(!s.contains(g)){const E=new CustomEvent(vp,zA);s.addEventListener(vp,u),s.dispatchEvent(E),E.defaultPrevented||(Uj(Qj(M5(s)),{select:!0}),document.activeElement===g&&Ei(s))}return()=>{s.removeEventListener(vp,u),setTimeout(()=>{const E=new CustomEvent(yp,zA);s.addEventListener(yp,d),s.dispatchEvent(E),E.defaultPrevented||Ei(g??document.body,{select:!0}),s.removeEventListener(yp,d),HA.remove(p)},0)}}},[s,u,d,p]);const v=m.useCallback(g=>{if(!n&&!r||p.paused)return;const S=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,E=document.activeElement;if(S&&E){const A=g.currentTarget,[y,x]=Bj(A);y&&x?!g.shiftKey&&E===x?(g.preventDefault(),n&&Ei(y,{select:!0})):g.shiftKey&&E===y&&(g.preventDefault(),n&&Ei(x,{select:!0})):E===A&&g.preventDefault()}},[n,r,p.paused]);return m.createElement(Bt.div,ue({tabIndex:-1},a,{ref:f,onKeyDown:v}))});function Uj(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Ei(r,{select:t}),document.activeElement!==n)return}function Bj(e){const t=M5(e),n=VA(t,e),r=VA(t.reverse(),e);return[n,r]}function M5(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function VA(e,t){for(const n of e)if(!zj(n,{upTo:t}))return n}function zj(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Vj(e){return e instanceof HTMLInputElement&&"select"in e}function Ei(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Vj(e)&&t&&e.select()}}const HA=Hj();function Hj(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=QA(e,t),e.unshift(t)},remove(t){var n;e=QA(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function QA(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Qj(e){return e.filter(t=>t.tagName!=="A")}const Wj=m.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...i}=e;return r?Fx.createPortal(m.createElement(Bt.div,ue({},i,{ref:t})),r):null});function Gj(e,t){return m.useReducer((n,r)=>{const i=t[n][r];return i??n},e)}const ai=e=>{const{present:t,children:n}=e,r=qj(t),i=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),o=Gt(r.ref,i.ref);return typeof n=="function"||r.isPresent?m.cloneElement(i,{ref:o}):null};ai.displayName="Presence";function qj(e){const[t,n]=m.useState(),r=m.useRef({}),i=m.useRef(e),o=m.useRef("none"),a=e?"mounted":"unmounted",[s,l]=Gj(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const u=hu(r.current);o.current=s==="mounted"?u:"none"},[s]),dc(()=>{const u=r.current,d=i.current;if(d!==e){const f=o.current,p=hu(u);e?l("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&f!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),dc(()=>{if(t){const u=h=>{const p=hu(r.current).includes(h.animationName);h.target===t&&p&&Is.flushSync(()=>l("ANIMATION_END"))},d=h=>{h.target===t&&(o.current=hu(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:m.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function hu(e){return(e==null?void 0:e.animationName)||"none"}let Ap=0;function Yj(){m.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:WA()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:WA()),Ap++,()=>{Ap===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ap--}},[])}function WA(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var Xu="right-scroll-bar-position",Ju="width-before-scroll-bar",Kj="with-scroll-bars-hidden",Xj="--removed-body-scroll-bar-size";function Jj(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Zj(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}function e9(e,t){return Zj(null,function(n){return e.forEach(function(r){return Jj(r,n)})})}function t9(e){return e}function n9(e,t){t===void 0&&(t=t9);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var a=t(o,r);return n.push(a),function(){n=n.filter(function(s){return s!==a})}},assignSyncMedium:function(o){for(r=!0;n.length;){var a=n;n=[],a.forEach(o)}n={push:function(s){return o(s)},filter:function(){return n}}},assignMedium:function(o){r=!0;var a=[];if(n.length){var s=n;n=[],s.forEach(o),a=n}var l=function(){var d=a;a=[],d.forEach(o)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(d){a.push(d),u()},filter:function(d){return a=a.filter(d),n}}}};return i}function r9(e){e===void 0&&(e={});var t=n9(null);return t.options=Ue({async:!0,ssr:!1},e),t}var L5=function(e){var t=e.sideCar,n=Jx(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,Ue({},n))};L5.isSideCarExport=!0;function i9(e,t){return e.useMedium(t),L5}var F5=r9(),Ep=function(){},Sf=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:Ep,onWheelCapture:Ep,onTouchMoveCapture:Ep}),i=r[0],o=r[1],a=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,d=e.enabled,h=e.shards,f=e.sideCar,p=e.noIsolation,v=e.inert,g=e.allowPinchZoom,S=e.as,E=S===void 0?"div":S,A=Jx(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=f,x=e9([n,t]),w=Ue(Ue({},A),i);return m.createElement(m.Fragment,null,d&&m.createElement(y,{sideCar:F5,removeScrollBar:u,shards:h,noIsolation:p,inert:v,setCallbacks:o,allowPinchZoom:!!g,lockRef:n}),a?m.cloneElement(m.Children.only(s),Ue(Ue({},w),{ref:x})):m.createElement(E,Ue({},w,{className:l,ref:x}),s))});Sf.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Sf.classNames={fullWidth:Ju,zeroRight:Xu};var o9=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function a9(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o9();return t&&e.setAttribute("nonce",t),e}function s9(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function l9(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var c9=function(){var e=0,t=null;return{add:function(n){e==0&&(t=a9())&&(s9(t,n),l9(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},u9=function(){var e=c9();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},U5=function(){var e=u9(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},d9={left:0,top:0,right:0,gap:0},bp=function(e){return parseInt(e||"",10)||0},f9=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[bp(n),bp(r),bp(i)]},h9=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return d9;var t=f9(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},p9=U5(),m9=function(e,t,n,r){var i=e.left,o=e.top,a=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Kj,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Xu,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Ju,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Xu," .").concat(Xu,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Ju," .").concat(Ju,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Xj,": ").concat(s,`px;
  }
`)},g9=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r,o=m.useMemo(function(){return h9(i)},[i]);return m.createElement(p9,{styles:m9(o,!t,i,n?"":"!important")})},hg=!1;if(typeof window<"u")try{var pu=Object.defineProperty({},"passive",{get:function(){return hg=!0,!0}});window.addEventListener("test",pu,pu),window.removeEventListener("test",pu,pu)}catch{hg=!1}var pa=hg?{passive:!1}:!1,v9=function(e){return e.tagName==="TEXTAREA"},B5=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!v9(e)&&n[t]==="visible")},y9=function(e){return B5(e,"overflowY")},A9=function(e){return B5(e,"overflowX")},GA=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=z5(e,n);if(r){var i=V5(e,n),o=i[1],a=i[2];if(o>a)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},E9=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},b9=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},z5=function(e,t){return e==="v"?y9(t):A9(t)},V5=function(e,t){return e==="v"?E9(t):b9(t)},x9=function(e,t){return e==="h"&&t==="rtl"?-1:1},w9=function(e,t,n,r,i){var o=x9(e,window.getComputedStyle(t).direction),a=o*r,s=n.target,l=t.contains(s),u=!1,d=a>0,h=0,f=0;do{var p=V5(e,s),v=p[0],g=p[1],S=p[2],E=g-S-o*v;(v||E)&&z5(e,s)&&(h+=E,f+=v),s=s.parentNode}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(d&&(h===0||!i)||!d&&(f===0||!i))&&(u=!0),u},mu=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},qA=function(e){return[e.deltaX,e.deltaY]},YA=function(e){return e&&"current"in e?e.current:e},S9=function(e,t){return e[0]===t[0]&&e[1]===t[1]},C9=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},T9=0,ma=[];function I9(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),i=m.useState(T9++)[0],o=m.useState(function(){return U5()})[0],a=m.useRef(e);m.useEffect(function(){a.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var g=Fo([e.lockRef.current],(e.shards||[]).map(YA),!0).filter(Boolean);return g.forEach(function(S){return S.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),g.forEach(function(S){return S.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=m.useCallback(function(g,S){if("touches"in g&&g.touches.length===2)return!a.current.allowPinchZoom;var E=mu(g),A=n.current,y="deltaX"in g?g.deltaX:A[0]-E[0],x="deltaY"in g?g.deltaY:A[1]-E[1],w,C=g.target,b=Math.abs(y)>Math.abs(x)?"h":"v";if("touches"in g&&b==="h"&&C.type==="range")return!1;var T=GA(b,C);if(!T)return!0;if(T?w=b:(w=b==="v"?"h":"v",T=GA(b,C)),!T)return!1;if(!r.current&&"changedTouches"in g&&(y||x)&&(r.current=w),!w)return!0;var _=r.current||w;return w9(_,S,g,_==="h"?y:x,!0)},[]),l=m.useCallback(function(g){var S=g;if(!(!ma.length||ma[ma.length-1]!==o)){var E="deltaY"in S?qA(S):mu(S),A=t.current.filter(function(w){return w.name===S.type&&w.target===S.target&&S9(w.delta,E)})[0];if(A&&A.should){S.cancelable&&S.preventDefault();return}if(!A){var y=(a.current.shards||[]).map(YA).filter(Boolean).filter(function(w){return w.contains(S.target)}),x=y.length>0?s(S,y[0]):!a.current.noIsolation;x&&S.cancelable&&S.preventDefault()}}},[]),u=m.useCallback(function(g,S,E,A){var y={name:g,delta:S,target:E,should:A};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(x){return x!==y})},1)},[]),d=m.useCallback(function(g){n.current=mu(g),r.current=void 0},[]),h=m.useCallback(function(g){u(g.type,qA(g),g.target,s(g,e.lockRef.current))},[]),f=m.useCallback(function(g){u(g.type,mu(g),g.target,s(g,e.lockRef.current))},[]);m.useEffect(function(){return ma.push(o),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:f}),document.addEventListener("wheel",l,pa),document.addEventListener("touchmove",l,pa),document.addEventListener("touchstart",d,pa),function(){ma=ma.filter(function(g){return g!==o}),document.removeEventListener("wheel",l,pa),document.removeEventListener("touchmove",l,pa),document.removeEventListener("touchstart",d,pa)}},[]);var p=e.removeScrollBar,v=e.inert;return m.createElement(m.Fragment,null,v?m.createElement(o,{styles:C9(i)}):null,p?m.createElement(g9,{gapMode:"margin"}):null)}const P9=i9(F5,I9);var H5=m.forwardRef(function(e,t){return m.createElement(Sf,Ue({},e,{ref:t,sideCar:P9}))});H5.classNames=Sf.classNames;var _9=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},ga=new WeakMap,gu=new WeakMap,vu={},xp=0,Q5=function(e){return e&&(e.host||Q5(e.parentNode))},R9=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Q5(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},O9=function(e,t,n,r){var i=R9(t,Array.isArray(e)?e:[e]);vu[n]||(vu[n]=new WeakMap);var o=vu[n],a=[],s=new Set,l=new Set(i),u=function(h){!h||s.has(h)||(s.add(h),u(h.parentNode))};i.forEach(u);var d=function(h){!h||l.has(h)||Array.prototype.forEach.call(h.children,function(f){if(s.has(f))d(f);else{var p=f.getAttribute(r),v=p!==null&&p!=="false",g=(ga.get(f)||0)+1,S=(o.get(f)||0)+1;ga.set(f,g),o.set(f,S),a.push(f),g===1&&v&&gu.set(f,!0),S===1&&f.setAttribute(n,"true"),v||f.setAttribute(r,"true")}})};return d(t),s.clear(),xp++,function(){a.forEach(function(h){var f=ga.get(h)-1,p=o.get(h)-1;ga.set(h,f),o.set(h,p),f||(gu.has(h)||h.removeAttribute(r),gu.delete(h)),p||h.removeAttribute(n)}),xp--,xp||(ga=new WeakMap,ga=new WeakMap,gu=new WeakMap,vu={})}},j9=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=_9(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),O9(r,i,n,"aria-hidden")):function(){return null}};const W5="Dialog",[G5,EQ]=jc(W5),[N9,Mr]=G5(W5),k9=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:a=!0}=e,s=m.useRef(null),l=m.useRef(null),[u=!1,d]=wf({prop:r,defaultProp:i,onChange:o});return m.createElement(N9,{scope:t,triggerRef:s,contentRef:l,contentId:$l(),titleId:$l(),descriptionId:$l(),open:u,onOpenChange:d,onOpenToggle:m.useCallback(()=>d(h=>!h),[d]),modal:a},n)},$9="DialogTrigger",D9=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Mr($9,n),o=Gt(t,i.triggerRef);return m.createElement(Bt.button,ue({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":p1(i.open)},r,{ref:o,onClick:$t(e.onClick,i.onOpenToggle)}))}),q5="DialogPortal",[M9,Y5]=G5(q5,{forceMount:void 0}),L9=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:i}=e,o=Mr(q5,t);return m.createElement(M9,{scope:t,forceMount:n},m.Children.map(r,a=>m.createElement(ai,{present:n||o.open},m.createElement(Wj,{asChild:!0,container:i},a))))},pg="DialogOverlay",F9=m.forwardRef((e,t)=>{const n=Y5(pg,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,o=Mr(pg,e.__scopeDialog);return o.modal?m.createElement(ai,{present:r||o.open},m.createElement(U9,ue({},i,{ref:t}))):null}),U9=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Mr(pg,n);return m.createElement(H5,{as:fc,allowPinchZoom:!0,shards:[i.contentRef]},m.createElement(Bt.div,ue({"data-state":p1(i.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),hc="DialogContent",B9=m.forwardRef((e,t)=>{const n=Y5(hc,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,o=Mr(hc,e.__scopeDialog);return m.createElement(ai,{present:r||o.open},o.modal?m.createElement(z9,ue({},i,{ref:t})):m.createElement(V9,ue({},i,{ref:t})))}),z9=m.forwardRef((e,t)=>{const n=Mr(hc,e.__scopeDialog),r=m.useRef(null),i=Gt(t,n.contentRef,r);return m.useEffect(()=>{const o=r.current;if(o)return j9(o)},[]),m.createElement(K5,ue({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:$t(e.onCloseAutoFocus,o=>{var a;o.preventDefault(),(a=n.triggerRef.current)===null||a===void 0||a.focus()}),onPointerDownOutside:$t(e.onPointerDownOutside,o=>{const a=o.detail.originalEvent,s=a.button===0&&a.ctrlKey===!0;(a.button===2||s)&&o.preventDefault()}),onFocusOutside:$t(e.onFocusOutside,o=>o.preventDefault())}))}),V9=m.forwardRef((e,t)=>{const n=Mr(hc,e.__scopeDialog),r=m.useRef(!1),i=m.useRef(!1);return m.createElement(K5,ue({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var a;if((a=e.onCloseAutoFocus)===null||a===void 0||a.call(e,o),!o.defaultPrevented){var s;r.current||(s=n.triggerRef.current)===null||s===void 0||s.focus(),o.preventDefault()}r.current=!1,i.current=!1},onInteractOutside:o=>{var a,s;(a=e.onInteractOutside)===null||a===void 0||a.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const l=o.target;((s=n.triggerRef.current)===null||s===void 0?void 0:s.contains(l))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}}))}),K5=m.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,...a}=e,s=Mr(hc,n),l=m.useRef(null),u=Gt(t,l);return Yj(),m.createElement(m.Fragment,null,m.createElement(Fj,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o},m.createElement(Dj,ue({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":p1(s.open)},a,{ref:u,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),H9="DialogTitle",Q9=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Mr(H9,n);return m.createElement(Bt.h2,ue({id:i.titleId},r,{ref:t}))}),W9="DialogClose",G9=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Mr(W9,n);return m.createElement(Bt.button,ue({type:"button"},r,{ref:t,onClick:$t(e.onClick,()=>i.onOpenChange(!1))}))});function p1(e){return e?"open":"closed"}const Cf=k9,Tf=D9,X5=L9,q9=F9,Y9=B9,J5=Q9,Z5=G9;var e3={},m1={},g1={};Object.defineProperty(g1,"__esModule",{value:!0});var KA="html",XA="head",yu="body",K9=/<([a-zA-Z]+[0-9]?)/,JA=/<head[^]*>/i,ZA=/<body[^]*>/i,Md=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},mg=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},e2=typeof window=="object"&&window.DOMParser;if(typeof e2=="function"){var X9=new e2,J9="text/html";mg=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),X9.parseFromString(e,J9)},Md=mg}if(typeof document=="object"&&document.implementation){var Au=document.implementation.createHTMLDocument();Md=function(e,t){if(t){var n=Au.documentElement.querySelector(t);return n&&(n.innerHTML=e),Au}return Au.documentElement.innerHTML=e,Au}}var Eu=typeof document=="object"&&document.createElement("template"),gg;Eu&&Eu.content&&(gg=function(e){return Eu.innerHTML=e,Eu.content.childNodes});function Z9(e){var t,n,r=e.match(K9),i=r&&r[1]?r[1].toLowerCase():"";switch(i){case KA:{var o=mg(e);if(!JA.test(e)){var a=o.querySelector(XA);(t=a==null?void 0:a.parentNode)===null||t===void 0||t.removeChild(a)}if(!ZA.test(e)){var a=o.querySelector(yu);(n=a==null?void 0:a.parentNode)===null||n===void 0||n.removeChild(a)}return o.querySelectorAll(KA)}case XA:case yu:{var s=Md(e).querySelectorAll(i);return ZA.test(e)&&JA.test(e)?s[0].parentNode.childNodes:s}default:{if(gg)return gg(e);var a=Md(e,yu).querySelector(yu);return a.childNodes}}}g1.default=Z9;var bs={},v1={},y1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(r){r.Root="root",r.Text="text",r.Directive="directive",r.Comment="comment",r.Script="script",r.Style="style",r.Tag="tag",r.CDATA="cdata",r.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function n(r){return r.type===t.Tag||r.type===t.Script||r.type===t.Style}e.isTag=n,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(y1);var we={},to=dt&&dt.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Dl=dt&&dt.__assign||function(){return Dl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dl.apply(this,arguments)};Object.defineProperty(we,"__esModule",{value:!0});we.cloneNode=we.hasChildren=we.isDocument=we.isDirective=we.isComment=we.isText=we.isCDATA=we.isTag=we.Element=we.Document=we.CDATA=we.NodeWithChildren=we.ProcessingInstruction=we.Comment=we.Text=we.DataNode=we.Node=void 0;var pn=y1,A1=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),E1(this,t)},e}();we.Node=A1;var If=function(e){to(t,e);function t(n){var r=e.call(this)||this;return r.data=n,r}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),t}(A1);we.DataNode=If;var t3=function(e){to(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=pn.ElementType.Text,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(If);we.Text=t3;var n3=function(e){to(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=pn.ElementType.Comment,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(If);we.Comment=n3;var r3=function(e){to(t,e);function t(n,r){var i=e.call(this,r)||this;return i.name=n,i.type=pn.ElementType.Directive,i}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(If);we.ProcessingInstruction=r3;var Pf=function(e){to(t,e);function t(n){var r=e.call(this)||this;return r.children=n,r}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),t}(A1);we.NodeWithChildren=Pf;var i3=function(e){to(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=pn.ElementType.CDATA,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(Pf);we.CDATA=i3;var o3=function(e){to(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=pn.ElementType.Root,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(Pf);we.Document=o3;var a3=function(e){to(t,e);function t(n,r,i,o){i===void 0&&(i=[]),o===void 0&&(o=n==="script"?pn.ElementType.Script:n==="style"?pn.ElementType.Style:pn.ElementType.Tag);var a=e.call(this,i)||this;return a.name=n,a.attribs=r,a.type=o,a}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(r){var i,o;return{name:r,value:n.attribs[r],namespace:(i=n["x-attribsNamespace"])===null||i===void 0?void 0:i[r],prefix:(o=n["x-attribsPrefix"])===null||o===void 0?void 0:o[r]}})},enumerable:!1,configurable:!0}),t}(Pf);we.Element=a3;function s3(e){return(0,pn.isTag)(e)}we.isTag=s3;function l3(e){return e.type===pn.ElementType.CDATA}we.isCDATA=l3;function c3(e){return e.type===pn.ElementType.Text}we.isText=c3;function u3(e){return e.type===pn.ElementType.Comment}we.isComment=u3;function d3(e){return e.type===pn.ElementType.Directive}we.isDirective=d3;function f3(e){return e.type===pn.ElementType.Root}we.isDocument=f3;function eN(e){return Object.prototype.hasOwnProperty.call(e,"children")}we.hasChildren=eN;function E1(e,t){t===void 0&&(t=!1);var n;if(c3(e))n=new t3(e.data);else if(u3(e))n=new n3(e.data);else if(s3(e)){var r=t?wp(e.children):[],i=new a3(e.name,Dl({},e.attribs),r);r.forEach(function(l){return l.parent=i}),e.namespace!=null&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Dl({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Dl({},e["x-attribsPrefix"])),n=i}else if(l3(e)){var r=t?wp(e.children):[],o=new i3(r);r.forEach(function(u){return u.parent=o}),n=o}else if(f3(e)){var r=t?wp(e.children):[],a=new o3(r);r.forEach(function(u){return u.parent=a}),e["x-mode"]&&(a["x-mode"]=e["x-mode"]),n=a}else if(d3(e)){var s=new r3(e.name,e.data);e["x-name"]!=null&&(s["x-name"]=e["x-name"],s["x-publicId"]=e["x-publicId"],s["x-systemId"]=e["x-systemId"]),n=s}else throw new Error("Not implemented yet: ".concat(e.type));return n.startIndex=e.startIndex,n.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(n.sourceCodeLocation=e.sourceCodeLocation),n}we.cloneNode=E1;function wp(e){for(var t=e.map(function(r){return E1(r,!0)}),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}(function(e){var t=dt&&dt.__createBinding||(Object.create?function(s,l,u,d){d===void 0&&(d=u);var h=Object.getOwnPropertyDescriptor(l,u);(!h||("get"in h?!l.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(s,d,h)}:function(s,l,u,d){d===void 0&&(d=u),s[d]=l[u]}),n=dt&&dt.__exportStar||function(s,l){for(var u in s)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&t(l,s,u)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var r=y1,i=we;n(we,e);var o={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},a=function(){function s(l,u,d){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(d=u,u=o),typeof l=="object"&&(u=l,l=void 0),this.callback=l??null,this.options=u??o,this.elementCB=d??null}return s.prototype.onparserinit=function(l){this.parser=l},s.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},s.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},s.prototype.onerror=function(l){this.handleCallback(l)},s.prototype.onclosetag=function(){this.lastNode=null;var l=this.tagStack.pop();this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(l)},s.prototype.onopentag=function(l,u){var d=this.options.xmlMode?r.ElementType.Tag:void 0,h=new i.Element(l,u,void 0,d);this.addNode(h),this.tagStack.push(h)},s.prototype.ontext=function(l){var u=this.lastNode;if(u&&u.type===r.ElementType.Text)u.data+=l,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var d=new i.Text(l);this.addNode(d),this.lastNode=d}},s.prototype.oncomment=function(l){if(this.lastNode&&this.lastNode.type===r.ElementType.Comment){this.lastNode.data+=l;return}var u=new i.Comment(l);this.addNode(u),this.lastNode=u},s.prototype.oncommentend=function(){this.lastNode=null},s.prototype.oncdatastart=function(){var l=new i.Text(""),u=new i.CDATA([l]);this.addNode(u),l.parent=u,this.lastNode=l},s.prototype.oncdataend=function(){this.lastNode=null},s.prototype.onprocessinginstruction=function(l,u){var d=new i.ProcessingInstruction(l,u);this.addNode(d)},s.prototype.handleCallback=function(l){if(typeof this.callback=="function")this.callback(l,this.dom);else if(l)throw l},s.prototype.addNode=function(l){var u=this.tagStack[this.tagStack.length-1],d=u.children[u.children.length-1];this.options.withStartIndices&&(l.startIndex=this.parser.startIndex),this.options.withEndIndices&&(l.endIndex=this.parser.endIndex),u.children.push(l),d&&(l.prev=d,d.next=l),l.parent=u,this.lastNode=null},s}();e.DomHandler=a,e.default=a})(v1);var h3={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t,n){return t[n.toLowerCase()]=n,t},{})})(h3);Object.defineProperty(bs,"__esModule",{value:!0});bs.formatDOM=bs.formatAttributes=void 0;var bu=v1,tN=h3;function nN(e){return tN.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function p3(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}bs.formatAttributes=p3;function rN(e){e=e.toLowerCase();var t=nN(e);return t||e}function m3(e,t,n){t===void 0&&(t=null);for(var r=[],i,o=0,a=e.length;o<a;o++){var s=e[o];switch(s.nodeType){case 1:{var l=rN(s.nodeName);i=new bu.Element(l,p3(s.attributes)),i.children=m3(l==="template"?s.content.childNodes:s.childNodes,i);break}case 3:i=new bu.Text(s.nodeValue);break;case 8:i=new bu.Comment(s.nodeValue);break;default:continue}var u=r[o-1]||null;u&&(u.next=i),i.parent=t,i.prev=u,i.next=null,r.push(i)}return n&&(i=new bu.ProcessingInstruction(n.substring(0,n.indexOf(" ")).toLowerCase(),n),i.next=r[0]||null,i.parent=t,r.unshift(i),r[1]&&(r[1].prev=r[0])),r}bs.formatDOM=m3;var iN=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(m1,"__esModule",{value:!0});var oN=iN(g1),aN=bs,sN=/<(![a-zA-Z\s]+)>/;function lN(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(sN),n=t?t[1]:void 0;return(0,aN.formatDOM)((0,oN.default)(e),null,n)}m1.default=lN;var _f={},vr={},Rf={},cN=0;Rf.SAME=cN;var uN=1;Rf.CAMELCASE=uN;Rf.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const g3=0,no=1,Of=2,jf=3,b1=4,v3=5,y3=6;function dN(e){return Ft.hasOwnProperty(e)?Ft[e]:null}function tn(e,t,n,r,i,o,a){this.acceptsBooleans=t===Of||t===jf||t===b1,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}const Ft={},fN=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];fN.forEach(e=>{Ft[e]=new tn(e,g3,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{Ft[e]=new tn(e,no,!1,t,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{Ft[e]=new tn(e,Of,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{Ft[e]=new tn(e,Of,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{Ft[e]=new tn(e,jf,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{Ft[e]=new tn(e,jf,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{Ft[e]=new tn(e,b1,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{Ft[e]=new tn(e,y3,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{Ft[e]=new tn(e,v3,!1,e.toLowerCase(),null,!1,!1)});const x1=/[\-\:]([a-z])/g,w1=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const t=e.replace(x1,w1);Ft[t]=new tn(t,no,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const t=e.replace(x1,w1);Ft[t]=new tn(t,no,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const t=e.replace(x1,w1);Ft[t]=new tn(t,no,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{Ft[e]=new tn(e,no,!1,e.toLowerCase(),null,!1,!1)});const hN="xlinkHref";Ft[hN]=new tn("xlinkHref",no,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{Ft[e]=new tn(e,no,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:pN,SAME:mN,possibleStandardNames:t2}=Rf,gN=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",vN=gN+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",yN=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+vN+"]*$")),AN=Object.keys(t2).reduce((e,t)=>{const n=t2[t];return n===mN?e[t]=t:n===pN?e[t.toLowerCase()]=t:e[t]=n,e},{});vr.BOOLEAN=jf;vr.BOOLEANISH_STRING=Of;vr.NUMERIC=v3;vr.OVERLOADED_BOOLEAN=b1;vr.POSITIVE_NUMERIC=y3;vr.RESERVED=g3;vr.STRING=no;vr.getPropertyInfo=dN;vr.isCustomAttribute=yN;vr.possibleStandardNames=AN;var S1={},C1={},n2=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,EN=/\n/g,bN=/^\s*/,xN=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,wN=/^:\s*/,SN=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,CN=/^[;\s]*/,TN=/^\s+|\s+$/g,IN=`
`,r2="/",i2="*",ho="",PN="comment",_N="declaration",RN=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(v){var g=v.match(EN);g&&(n+=g.length);var S=v.lastIndexOf(IN);r=~S?v.length-S:r+v.length}function o(){var v={line:n,column:r};return function(g){return g.position=new a(v),u(),g}}function a(v){this.start=v,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(v){var g=new Error(t.source+":"+n+":"+r+": "+v);if(g.reason=v,g.filename=t.source,g.line=n,g.column=r,g.source=e,!t.silent)throw g}function l(v){var g=v.exec(e);if(g){var S=g[0];return i(S),e=e.slice(S.length),g}}function u(){l(bN)}function d(v){var g;for(v=v||[];g=h();)g!==!1&&v.push(g);return v}function h(){var v=o();if(!(r2!=e.charAt(0)||i2!=e.charAt(1))){for(var g=2;ho!=e.charAt(g)&&(i2!=e.charAt(g)||r2!=e.charAt(g+1));)++g;if(g+=2,ho===e.charAt(g-1))return s("End of comment missing");var S=e.slice(2,g-2);return r+=2,i(S),e=e.slice(g),r+=2,v({type:PN,comment:S})}}function f(){var v=o(),g=l(xN);if(g){if(h(),!l(wN))return s("property missing ':'");var S=l(SN),E=v({type:_N,property:o2(g[0].replace(n2,ho)),value:S?o2(S[0].replace(n2,ho)):ho});return l(CN),E}}function p(){var v=[];d(v);for(var g;g=f();)g!==!1&&(v.push(g),d(v));return v}return u(),p()};function o2(e){return e?e.replace(TN,ho):ho}var ON=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(C1,"__esModule",{value:!0});var jN=ON(RN);function NN(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,jN.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var a=o.property,s=o.value;i?t(a,s,o):s&&(n=n||{},n[a]=s)}}),n}C1.default=NN;var Nf={};Object.defineProperty(Nf,"__esModule",{value:!0});Nf.camelCase=void 0;var kN=/^--[a-zA-Z0-9-]+$/,$N=/-([a-z])/g,DN=/^[^-]+$/,MN=/^-(webkit|moz|ms|o|khtml)-/,LN=/^-(ms)-/,FN=function(e){return!e||DN.test(e)||kN.test(e)},UN=function(e,t){return t.toUpperCase()},a2=function(e,t){return"".concat(t,"-")},BN=function(e,t){return t===void 0&&(t={}),FN(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(LN,a2):e=e.replace(MN,a2),e.replace($N,UN))};Nf.camelCase=BN;var zN=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},VN=zN(C1),HN=Nf;function vg(e,t){var n={};return!e||typeof e!="string"||(0,VN.default)(e,function(r,i){r&&i&&(n[(0,HN.camelCase)(r,t)]=i)}),n}vg.default=vg;var QN=vg;(function(e){var t=dt&&dt.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=e.setStyleProp=e.isCustomComponent=void 0;var n=m,r=t(QN),i=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function o(d,h){return d.includes("-")?!i.has(d):!!(h&&typeof h.is=="string")}e.isCustomComponent=o;var a={reactCompat:!0};function s(d,h){if(typeof d=="string"){if(!d.trim()){h.style={};return}try{h.style=(0,r.default)(d,a)}catch{h.style={}}}}e.setStyleProp=s,e.PRESERVE_CUSTOM_ATTRIBUTES=Number(n.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var l=function(d){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(d.name)};e.canTextBeChildOfNode=l;var u=function(d){return d};e.returnFirstArg=u})(S1);Object.defineProperty(_f,"__esModule",{value:!0});var yl=vr,s2=S1,WN=["checked","value"],GN=["input","select","textarea"],qN={reset:!0,submit:!0};function YN(e,t){e===void 0&&(e={});var n={},r=!!(e.type&&qN[e.type]);for(var i in e){var o=e[i];if((0,yl.isCustomAttribute)(i)){n[i]=o;continue}var a=i.toLowerCase(),s=l2(a);if(s){var l=(0,yl.getPropertyInfo)(s);switch(WN.includes(s)&&GN.includes(t)&&!r&&(s=l2("default"+a)),n[s]=o,l&&l.type){case yl.BOOLEAN:n[s]=!0;break;case yl.OVERLOADED_BOOLEAN:o===""&&(n[s]=!0);break}continue}s2.PRESERVE_CUSTOM_ATTRIBUTES&&(n[i]=o)}return(0,s2.setStyleProp)(e.style,n),n}_f.default=YN;function l2(e){return yl.possibleStandardNames[e]}var T1={},KN=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(T1,"__esModule",{value:!0});var Sp=m,XN=KN(_f),Ml=S1,JN={cloneElement:Sp.cloneElement,createElement:Sp.createElement,isValidElement:Sp.isValidElement};function A3(e,t){t===void 0&&(t={});for(var n=[],r=typeof t.replace=="function",i=t.transform||Ml.returnFirstArg,o=t.library||JN,a=o.cloneElement,s=o.createElement,l=o.isValidElement,u=e.length,d=0;d<u;d++){var h=e[d];if(r){var f=t.replace(h,d);if(l(f)){u>1&&(f=a(f,{key:f.key||d})),n.push(i(f,h,d));continue}}if(h.type==="text"){var p=!h.data.trim().length;if(p&&h.parent&&!(0,Ml.canTextBeChildOfNode)(h.parent)||t.trim&&p)continue;n.push(i(h.data,h,d));continue}var v=h,g={};ZN(v)?((0,Ml.setStyleProp)(v.attribs.style,v.attribs),g=v.attribs):v.attribs&&(g=(0,XN.default)(v.attribs,v.name));var S=void 0;switch(h.type){case"script":case"style":h.children[0]&&(g.dangerouslySetInnerHTML={__html:h.children[0].data});break;case"tag":h.name==="textarea"&&h.children[0]?g.defaultValue=h.children[0].data:h.children&&h.children.length&&(S=A3(h.children,t));break;default:continue}u>1&&(g.key=d),n.push(i(s(h.name,g,S),h,d))}return n.length===1?n[0]:n}T1.default=A3;function ZN(e){return Ml.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&(0,Ml.isCustomComponent)(e.name,e.attribs)}(function(e){var t=dt&&dt.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0;var n=t(m1);e.htmlToDOM=n.default;var r=t(_f);e.attributesToProps=r.default;var i=t(T1);e.domToReact=i.default;var o=v1;Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return o.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return o.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return o.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return o.Text}});var a={lowerCaseAttributeNames:!1};function s(l,u){if(typeof l!="string")throw new TypeError("First argument must be a string");return l?(0,i.default)((0,n.default)(l,(u==null?void 0:u.htmlparser2)||a),u):[]}e.default=s})(e3);const c2=Pn(e3),Ti=c2.default||c2,ek=m.createContext(void 0);function E3(e){const t=m.useContext(ek);return e||t||"ltr"}function tk(e,[t,n]){return Math.min(n,Math.max(t,e))}function nk(e,t){return m.useReducer((n,r)=>{const i=t[n][r];return i??n},e)}const b3="ScrollArea",[x3,bQ]=jc(b3),[rk,Jn]=x3(b3),ik=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:i,scrollHideDelay:o=600,...a}=e,[s,l]=m.useState(null),[u,d]=m.useState(null),[h,f]=m.useState(null),[p,v]=m.useState(null),[g,S]=m.useState(null),[E,A]=m.useState(0),[y,x]=m.useState(0),[w,C]=m.useState(!1),[b,T]=m.useState(!1),_=Gt(t,M=>l(M)),$=E3(i);return m.createElement(rk,{scope:n,type:r,dir:$,scrollHideDelay:o,scrollArea:s,viewport:u,onViewportChange:d,content:h,onContentChange:f,scrollbarX:p,onScrollbarXChange:v,scrollbarXEnabled:w,onScrollbarXEnabledChange:C,scrollbarY:g,onScrollbarYChange:S,scrollbarYEnabled:b,onScrollbarYEnabledChange:T,onCornerWidthChange:A,onCornerHeightChange:x},m.createElement(Bt.div,ue({dir:$},a,{ref:_,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})))}),ok="ScrollAreaViewport",ak=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,...i}=e,o=Jn(ok,n),a=m.useRef(null),s=Gt(t,a,o.onViewportChange);return m.createElement(m.Fragment,null,m.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),m.createElement(Bt.div,ue({"data-radix-scroll-area-viewport":""},i,{ref:s,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...e.style}}),m.createElement("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"}},r)))}),si="ScrollAreaScrollbar",sk=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=Jn(si,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:a}=i,s=e.orientation==="horizontal";return m.useEffect(()=>(s?o(!0):a(!0),()=>{s?o(!1):a(!1)}),[s,o,a]),i.type==="hover"?m.createElement(lk,ue({},r,{ref:t,forceMount:n})):i.type==="scroll"?m.createElement(ck,ue({},r,{ref:t,forceMount:n})):i.type==="auto"?m.createElement(w3,ue({},r,{ref:t,forceMount:n})):i.type==="always"?m.createElement(I1,ue({},r,{ref:t})):null}),lk=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=Jn(si,e.__scopeScrollArea),[o,a]=m.useState(!1);return m.useEffect(()=>{const s=i.scrollArea;let l=0;if(s){const u=()=>{window.clearTimeout(l),a(!0)},d=()=>{l=window.setTimeout(()=>a(!1),i.scrollHideDelay)};return s.addEventListener("pointerenter",u),s.addEventListener("pointerleave",d),()=>{window.clearTimeout(l),s.removeEventListener("pointerenter",u),s.removeEventListener("pointerleave",d)}}},[i.scrollArea,i.scrollHideDelay]),m.createElement(ai,{present:n||o},m.createElement(w3,ue({"data-state":o?"visible":"hidden"},r,{ref:t})))}),ck=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=Jn(si,e.__scopeScrollArea),o=e.orientation==="horizontal",a=$f(()=>l("SCROLL_END"),100),[s,l]=nk("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return m.useEffect(()=>{if(s==="idle"){const u=window.setTimeout(()=>l("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(u)}},[s,i.scrollHideDelay,l]),m.useEffect(()=>{const u=i.viewport,d=o?"scrollLeft":"scrollTop";if(u){let h=u[d];const f=()=>{const p=u[d];h!==p&&(l("SCROLL"),a()),h=p};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[i.viewport,o,l,a]),m.createElement(ai,{present:n||s!=="hidden"},m.createElement(I1,ue({"data-state":s==="hidden"?"hidden":"visible"},r,{ref:t,onPointerEnter:$t(e.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:$t(e.onPointerLeave,()=>l("POINTER_LEAVE"))})))}),w3=m.forwardRef((e,t)=>{const n=Jn(si,e.__scopeScrollArea),{forceMount:r,...i}=e,[o,a]=m.useState(!1),s=e.orientation==="horizontal",l=$f(()=>{if(n.viewport){const u=n.viewport.offsetWidth<n.viewport.scrollWidth,d=n.viewport.offsetHeight<n.viewport.scrollHeight;a(s?u:d)}},10);return xs(n.viewport,l),xs(n.content,l),m.createElement(ai,{present:r||o},m.createElement(I1,ue({"data-state":o?"visible":"hidden"},i,{ref:t})))}),I1=m.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,i=Jn(si,e.__scopeScrollArea),o=m.useRef(null),a=m.useRef(0),[s,l]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=I3(s.viewport,s.content),d={...r,sizes:s,onSizesChange:l,hasThumb:u>0&&u<1,onThumbChange:f=>o.current=f,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:f=>a.current=f};function h(f,p){return vk(f,a.current,s,p)}return n==="horizontal"?m.createElement(uk,ue({},d,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&o.current){const f=i.viewport.scrollLeft,p=u2(f,s,i.dir);o.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:f=>{i.viewport&&(i.viewport.scrollLeft=f)},onDragScroll:f=>{i.viewport&&(i.viewport.scrollLeft=h(f,i.dir))}})):n==="vertical"?m.createElement(dk,ue({},d,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&o.current){const f=i.viewport.scrollTop,p=u2(f,s);o.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:f=>{i.viewport&&(i.viewport.scrollTop=f)},onDragScroll:f=>{i.viewport&&(i.viewport.scrollTop=h(f))}})):null}),uk=m.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...i}=e,o=Jn(si,e.__scopeScrollArea),[a,s]=m.useState(),l=m.useRef(null),u=Gt(t,l,o.onScrollbarXChange);return m.useEffect(()=>{l.current&&s(getComputedStyle(l.current))},[l]),m.createElement(C3,ue({"data-orientation":"horizontal"},i,{ref:u,sizes:n,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":kf(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,h)=>{if(o.viewport){const f=o.viewport.scrollLeft+d.deltaX;e.onWheelScroll(f),_3(f,h)&&d.preventDefault()}},onResize:()=>{l.current&&o.viewport&&a&&r({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:Ld(a.paddingLeft),paddingEnd:Ld(a.paddingRight)}})}}))}),dk=m.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...i}=e,o=Jn(si,e.__scopeScrollArea),[a,s]=m.useState(),l=m.useRef(null),u=Gt(t,l,o.onScrollbarYChange);return m.useEffect(()=>{l.current&&s(getComputedStyle(l.current))},[l]),m.createElement(C3,ue({"data-orientation":"vertical"},i,{ref:u,sizes:n,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":kf(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,h)=>{if(o.viewport){const f=o.viewport.scrollTop+d.deltaY;e.onWheelScroll(f),_3(f,h)&&d.preventDefault()}},onResize:()=>{l.current&&o.viewport&&a&&r({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:Ld(a.paddingTop),paddingEnd:Ld(a.paddingBottom)}})}}))}),[fk,S3]=x3(si),C3=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:i,onThumbChange:o,onThumbPointerUp:a,onThumbPointerDown:s,onThumbPositionChange:l,onDragScroll:u,onWheelScroll:d,onResize:h,...f}=e,p=Jn(si,n),[v,g]=m.useState(null),S=Gt(t,_=>g(_)),E=m.useRef(null),A=m.useRef(""),y=p.viewport,x=r.content-r.viewport,w=cn(d),C=cn(l),b=$f(h,10);function T(_){if(E.current){const $=_.clientX-E.current.left,M=_.clientY-E.current.top;u({x:$,y:M})}}return m.useEffect(()=>{const _=$=>{const M=$.target;(v==null?void 0:v.contains(M))&&w($,x)};return document.addEventListener("wheel",_,{passive:!1}),()=>document.removeEventListener("wheel",_,{passive:!1})},[y,v,x,w]),m.useEffect(C,[r,C]),xs(v,b),xs(p.content,b),m.createElement(fk,{scope:n,scrollbar:v,hasThumb:i,onThumbChange:cn(o),onThumbPointerUp:cn(a),onThumbPositionChange:C,onThumbPointerDown:cn(s)},m.createElement(Bt.div,ue({},f,{ref:S,style:{position:"absolute",...f.style},onPointerDown:$t(e.onPointerDown,_=>{_.button===0&&(_.target.setPointerCapture(_.pointerId),E.current=v.getBoundingClientRect(),A.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),T(_))}),onPointerMove:$t(e.onPointerMove,T),onPointerUp:$t(e.onPointerUp,_=>{const $=_.target;$.hasPointerCapture(_.pointerId)&&$.releasePointerCapture(_.pointerId),document.body.style.webkitUserSelect=A.current,p.viewport&&(p.viewport.style.scrollBehavior=""),E.current=null})})))}),yg="ScrollAreaThumb",hk=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=S3(yg,e.__scopeScrollArea);return m.createElement(ai,{present:n||i.hasThumb},m.createElement(pk,ue({ref:t},r)))}),pk=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...i}=e,o=Jn(yg,n),a=S3(yg,n),{onThumbPositionChange:s}=a,l=Gt(t,h=>a.onThumbChange(h)),u=m.useRef(),d=$f(()=>{u.current&&(u.current(),u.current=void 0)},100);return m.useEffect(()=>{const h=o.viewport;if(h){const f=()=>{if(d(),!u.current){const p=yk(h,s);u.current=p,s()}};return s(),h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[o.viewport,d,s]),m.createElement(Bt.div,ue({"data-state":a.hasThumb?"visible":"hidden"},i,{ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:$t(e.onPointerDownCapture,h=>{const p=h.target.getBoundingClientRect(),v=h.clientX-p.left,g=h.clientY-p.top;a.onThumbPointerDown({x:v,y:g})}),onPointerUp:$t(e.onPointerUp,a.onThumbPointerUp)}))}),T3="ScrollAreaCorner",mk=m.forwardRef((e,t)=>{const n=Jn(T3,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?m.createElement(gk,ue({},e,{ref:t})):null}),gk=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,i=Jn(T3,n),[o,a]=m.useState(0),[s,l]=m.useState(0),u=!!(o&&s);return xs(i.scrollbarX,()=>{var d;const h=((d=i.scrollbarX)===null||d===void 0?void 0:d.offsetHeight)||0;i.onCornerHeightChange(h),l(h)}),xs(i.scrollbarY,()=>{var d;const h=((d=i.scrollbarY)===null||d===void 0?void 0:d.offsetWidth)||0;i.onCornerWidthChange(h),a(h)}),u?m.createElement(Bt.div,ue({},r,{ref:t,style:{width:o,height:s,position:"absolute",right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function Ld(e){return e?parseInt(e,10):0}function I3(e,t){const n=e/t;return isNaN(n)?0:n}function kf(e){const t=I3(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function vk(e,t,n,r="ltr"){const i=kf(n),o=i/2,a=t||o,s=i-a,l=n.scrollbar.paddingStart+a,u=n.scrollbar.size-n.scrollbar.paddingEnd-s,d=n.content-n.viewport,h=r==="ltr"?[0,d]:[d*-1,0];return P3([l,u],h)(e)}function u2(e,t,n="ltr"){const r=kf(t),i=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-i,a=t.content-t.viewport,s=o-r,l=n==="ltr"?[0,a]:[a*-1,0],u=tk(e,l);return P3([0,a],[0,s])(u)}function P3(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function _3(e,t){return e>0&&e<t}const yk=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function i(){const o={left:e.scrollLeft,top:e.scrollTop},a=n.left!==o.left,s=n.top!==o.top;(a||s)&&t(),n=o,r=window.requestAnimationFrame(i)}(),()=>window.cancelAnimationFrame(r)};function $f(e,t){const n=cn(e),r=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(r.current),[]),m.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function xs(e,t){const n=cn(t);dc(()=>{let r=0;if(e){const i=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return i.observe(e),()=>{window.cancelAnimationFrame(r),i.unobserve(e)}}},[e,n])}const R3=ik,O3=ak,Fd=sk,Ud=hk,j3=mk,{colors:Ak,borderRadius:Ek}=q,N3=G(q9)`
  position: fixed;
  inset: 0;
  background-color: var(--black-a11);
  animation: ${V8} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`,k3=G(Y9)`
  background-color: white;
  border-radius: ${Ek.medium};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90vw, ${P(768)});
  max-height: min(85vh, ${P(700)});
  padding: 1.5rem;
  animation: ${z8} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 11;

  &:focus {
    outline: none;
  }

  .dialog-header {
    ${As}
    padding-bottom: 0.5rem;
    /* border-bottom: 1px solid ${Ak.gray150}; */

    .DialogTitle {
      margin: 0;
      font-weight: 500;
      color: var(--clr-primary-700);
      font-size: ${P(17)};
    }

    .IconButton {
      ${Tt}
      ${B8(P(28))}
      font-family: inherit;
      color: var(--clr-primary-700);

      svg {
        ${de("70%")}
        fill: var(--clr-primary-700);
      }
    }
    .IconButton:hover {
      background-color: var(--clr-primary-100);
    }
    .IconButton:focus {
      box-shadow: 0 0 0 2px var(--clr-primary-200);
    }
  }

  .DialogDescription {
    margin-top: 1.5rem;
    color: inherit;
    font-size: ${P(14)};
    line-height: 1.3;
  }

  /* .dialog-footer {
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-gray-175);
  } */
`,{colors:d2}=q,bk=G(k3)`
  .img-wrapper {
    img {
      max-height: ${P(225)};
      width: 100%;
    }
  }

  .title {
    margin-top: 1.5rem;
    font-size: ${P(18)};
    font-weight: 600;
    line-height: 1.2;
    color: ${d2.black};

    @media screen and (${O.small}) {
      font-size: ${P(20)};
    }
  }

  .dialog-body {
    .ScrollAreaRoot {
      --scrollbar-size: 10px;

      width: 100%;
      height: min(calc(85vh - 6rem), calc(${P(700)} - 6rem));
      border-radius: 4px;
      overflow: hidden;
      background-color: white;
      position: relative;
      /* outline: 1px solid red; */

      &::before {
        ${Or}
        bottom: 0;
        left: 0;
        ${de("100%",P(40))}
        background: linear-gradient(to top, rgb(255, 255, 255), rgb(0, 0, 0, 0) 55%);
      }
    }

    .ScrollAreaViewport {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      padding-bottom: 2rem;
    }

    .ScrollAreaScrollbar {
      display: flex;
      /* ensures no selection */
      user-select: none;
      /* disable browser handling of all panning and zooming gestures on touch devices */
      touch-action: none;
      padding: 2px;
      background: var(--black-a6);
      transition: background 160ms ease-out;
    }
    .ScrollAreaScrollbar:hover {
      background: var(--black-a8);
    }
    .ScrollAreaScrollbar[data-orientation="vertical"] {
      width: var(--scrollbar-size);
    }

    .ScrollAreaThumb {
      flex: 1;
      background: var(--mauve-10);
      border-radius: var(--scrollbar-size);
      position: relative;
    }
    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    .ScrollAreaThumb::before {
      content: "";
      ${_s}
      ${de("100%")}
      min-width: 44px;
      min-height: 44px;
    }

    .ScrollAreaCorner {
      background: var(--black-a8);
    }

    .content, .description {
      margin-top: 1.5rem;
      font-size: ${P(14)};
      color: ${d2.gray700};

      @media screen and (${O.small}) {
        font-size: ${P(15)};
      }
    }
  }
`,P1=({title:e,image:t,content:n,variant:r,description:i,code:o})=>c.jsxs(X5,{children:[c.jsx(N3,{}),c.jsxs(bk,{children:[c.jsxs("div",{className:"dialog-header",children:[c.jsx(J5,{className:"DialogTitle",children:r}),c.jsx(Z5,{asChild:!0,children:c.jsx("button",{className:"IconButton","aria-label":"Close",children:c.jsx(Xw,{})})})]}),c.jsx("div",{className:"dialog-body",children:c.jsxs(R3,{className:"ScrollAreaRoot",children:[c.jsxs(O3,{className:"ScrollAreaViewport",children:[c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:t,alt:"",height:250})}),c.jsxs("p",{className:"title",children:[o," : ",e]}),i&&c.jsx(c.Fragment,{children:c.jsx("div",{className:"description",children:i})}),c.jsx("div",{className:"content",children:Ti(n||"No content.")})]}),c.jsx(Fd,{className:"ScrollAreaScrollbar",orientation:"vertical",children:c.jsx(Ud,{className:"ScrollAreaThumb"})}),c.jsx(Fd,{className:"ScrollAreaScrollbar",orientation:"horizontal",children:c.jsx(Ud,{className:"ScrollAreaThumb"})}),c.jsx(j3,{className:"ScrollAreaCorner"})]})})]})]}),{colors:f2}=q,xk=G.div`
  .img-wrapper {
    aspect-ratio: 16/9;
    max-height: ${P(220)};
    background: url(${xf}) center/cover no-repeat;
  }

  .meta {
    margin-top: 1.5rem;
    color: ${q.colors.yellow};
    font-size: ${P(14)};
    font-weight: 500;
    line-height: 1;
  }

  .heading {
    margin-top: 1rem;
    font-size: ${P(24)};
    line-height: 1.1;
    color: ${f2.black};
  }

  .summary {
    margin-top: 1rem;
    color: ${f2.gray700};
  }

  .dialog-trigger {
    color: inherit;
    font-size: ${P(15)};
    font-weight: 600;
    margin-top: 1rem;
  }
`,_1=e=>{if(!e)return"";const t={year:"numeric",month:"short",day:"numeric"};return e.toLocaleDateString("en-US",t)},$3=({image:e,date:t,heading:n,summary:r,content:i,description:o,dialogVariant:a,code:s})=>c.jsxs(xk,{children:[c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:e,alt:""})}),t&&c.jsx("p",{className:"meta",children:_1(new Date(t))}),c.jsx("h3",{className:"heading",children:n}),c.jsx("div",{className:"summary",children:j5(Ti(r),70)}),c.jsxs(Cf,{children:[c.jsx(P1,{variant:a??"Event",title:n,image:e,description:o,content:i,code:s}),c.jsx(Tf,{className:"dialog-trigger",children:"Read more"})]})]}),Qi=G.p`
  font-size: 1rem;
  margin-top: 2rem;
  text-align: center;

  &.align-left {
    text-align: left;
  }

  &.mt-0 {
    margin-top: 0;
  }
`,wk=G.section`
  margin-top: 7rem;

  .cards-container {
    ${he}
    gap: 2.5rem;
    margin-top: 3rem;

    @media screen and (${O.small}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media screen and (${O.medium}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .button-container {
    ${Tt}
    margin-top: 1rem
  }
`,D3=({data:e,title:t,showSeeMore:n=!1})=>{const r=e;return c.jsx(wk,{children:c.jsxs(Re,{children:[c.jsx(Jo,{children:t}),r.length?c.jsx("div",{className:"cards-container",children:r.map(({_id:i,image:o,title:a,summary:s,content:l,date:u})=>c.jsx($3,{image:o,date:u,heading:a,summary:s,content:l,dialogVariant:"Announcement"},i))}):c.jsx(Qi,{children:"No announcementss at the moment."}),n&&r.length>0&&c.jsx("div",{className:"button-container",children:c.jsx(kr,{to:"announcements",children:"See More"})})]})})},M3=e=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",...e},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})),{colors:Zs}=q,L3=G.section`
  .banner {
    height: ${P(320)};
    color: ${Zs.white};
    background-color: ${Zs.primary};
    ${Tt}

    .text-content {
      ${he}
      gap: 2rem;

      @media screen and (${O.medium}) {
        flex-direction: row;
        justify-content: space-between;
        /* outline: 1px solid red; */
      }

      .left-section {
        p {
          color: ${Zs.yellow};
        }

        h1 {
          margin-top: 0.5rem;
          font-size: clamp(${P(25)}, 10vw, ${P(48)});
        }
      }

      .right-section {
        @media screen and (${O.medium}) {
          align-self: end;
          margin-top: 3rem;
        }

        div {
          max-width: 30ch;
        }
      }
    }
  }
  .meta {
    margin-top: 1.5rem;
    color: ${q.colors.yellow};
    font-size: ${P(14)};
    font-weight: 500;
    line-height: 1;
  }
  .content {
    ${he}
    gap: 2rem;

    @media screen and (${O.medium}) {
      margin-top: 2rem;
      flex-direction: row-reverse;
      align-items: center;
      gap: 2.5rem;

      > :first-child {
        flex-basis: 55%;
      }
      > :last-child {
        flex-basis: 45%;
      }
    }

    @media screen and (${O.large1}) {
      gap: 3rem;
    }
  }

  .text-content {
    .heading {
      font-size: clamp(${P(25)}, 10vw, ${P(40)});
      font-weight: 800;

      @media screen and (${O.medium}) {
        font-size: clamp(${P(40)}, 5vw, ${P(60)});
      }
    }

    .summary {
      margin-top: 1rem;
    }

    .cta {
      ${Lt}
      gap: 1rem;
      width: fit-content;
      margin-top: 2.5rem;
      white-space: nowrap;

      svg {
        ${de(P(40))}
        stroke: ${Zs.primary};
        /* outline: 1px solid red; */

        @media screen and (${O.small}) {
          ${de(P(25))};
        }

        rect {
          stroke: ${Zs.primary};
        }
      }

      span {
        font-weight: 700;
      }
    }
  }

  .img-wrapper {
    img {
      background-color: ${q.colors.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
      }
    }
  }
`,Sk=({title:e,subTitle:t,image:n,content:r,date:i})=>(console.log("HeroProps",e,t,n,r,i),c.jsx(L3,{children:c.jsx(Re,{children:c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"text-content",children:[c.jsxs("p",{className:"meta",children:[" ",_1(new Date(i??""))," "]}),c.jsx("h1",{className:"heading",children:e}),c.jsx("p",{className:"summary",children:t}),c.jsxs(Cf,{children:[c.jsx(P1,{variant:"Event",title:e??"",image:n??"",content:r}),c.jsxs(Tf,{className:"cta",children:[c.jsx(M3,{}),c.jsx("span",{children:"LEARN MORE"})]})]})]}),c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:n,alt:"",width:634,height:692})})]})})}));function Ck(){const{isPending:e,data:t}=u1(),{preloaderStates:n}=gr("announcements");console.log("Announcements:",t);const r=t&&t.find(o=>{const a=!Va(new Date(o==null?void 0:o.date));return console.log("Checking announcement:",o,"isFuture:",a),a}),i=(t==null?void 0:t.filter(o=>Va(new Date(o==null?void 0:o.date))))||[];return c.jsxs(c.Fragment,{children:[(n==null?void 0:n.events)===0&&c.jsx(mr,{isLoading:e}),c.jsxs(mn,{children:[c.jsx("title",{children:`Announcements - ${On}`}),c.jsx("meta",{name:"description",content:"Describes announcements page"})]}),c.jsx(L3,{children:c.jsx("div",{className:"banner",children:c.jsx(Re,{children:c.jsxs("div",{className:"text-content",children:[c.jsxs("div",{className:"left-section",children:[c.jsx("p",{children:"Take a look at"}),c.jsx("h1",{children:"Our Departmental Announcements"})]}),c.jsx("div",{className:"right-section",children:c.jsx("div",{children:c.jsx(yn,{children:"Hosted by DCS"})})})]})})})}),r?c.jsx(Sk,{image:r==null?void 0:r.image,title:r==null?void 0:r.title,subTitle:r==null?void 0:r.summary,content:r==null?void 0:r.content,date:r==null?void 0:r.createdAt}):null,(i==null?void 0:i.length)>0&&c.jsx(D3,{title:"Past Announcements",data:i}),c.jsx(pr,{})]})}const Tk=yt`
  query BusinessDesk {
    businessDesk {
      data {
        attributes {
          bannerContent
          bannerImage {
            data {
              attributes {
                mime
                url
              }
            }
          }
          carouselImages {
            data {
              attributes {
                hash
                mime
                url
              }
            }
          }
          topics {
            id
            content
            image {
              data {
                attributes {
                  mime
                  url
                }
              }
            }
            index
            title
          }
        }
      }
    }
  }
`,Ik=()=>vt(Yo,Tk),Pk=e=>{const t={};if(Object.keys(e).length){const n=e.businessDesk.data.attributes;return t.bannerContent=n.bannerContent,t.bannerImage=n.bannerImage,t.carouselImages=n.carouselImages,t.topics=n.topics,t}return null},_k=()=>gt({queryKey:["businessDesk"],queryFn:Ik,select:Pk});var F3={},U3={},B3={},Df={},Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.TraceDirectionKey=Dt.Direction=Dt.Axis=void 0;var Ag;Dt.TraceDirectionKey=Ag;(function(e){e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.NONE="NONE"})(Ag||(Dt.TraceDirectionKey=Ag={}));var Eg;Dt.Direction=Eg;(function(e){e.TOP="TOP",e.LEFT="LEFT",e.RIGHT="RIGHT",e.BOTTOM="BOTTOM",e.NONE="NONE"})(Eg||(Dt.Direction=Eg={}));var bg;Dt.Axis=bg;(function(e){e.X="x",e.Y="y"})(bg||(Dt.Axis=bg={}));Object.defineProperty(Df,"__esModule",{value:!0});Df.calculateDirection=Rk;var Cp=Dt;function Rk(e){var t,n=Cp.TraceDirectionKey.NEGATIVE,r=Cp.TraceDirectionKey.POSITIVE,i=e[e.length-1],o=e[e.length-2]||0;return e.every(function(a){return a===0})?Cp.TraceDirectionKey.NONE:(t=i>o?r:n,i===0&&(t=o<0?r:n),t)}var Mf={},Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.resolveAxisDirection=Qn.getDirectionValue=Qn.getDirectionKey=Qn.getDifference=void 0;var xn=Dt,Ok=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Object.keys(t).toString();switch(n){case xn.TraceDirectionKey.POSITIVE:return xn.TraceDirectionKey.POSITIVE;case xn.TraceDirectionKey.NEGATIVE:return xn.TraceDirectionKey.NEGATIVE;default:return xn.TraceDirectionKey.NONE}};Qn.getDirectionKey=Ok;var jk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t[t.length-1]||0};Qn.getDirectionValue=jk;var Nk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Math.abs(t-n)};Qn.getDifference=Nk;var kk=function(t,n){var r=xn.Direction.LEFT,i=xn.Direction.RIGHT,o=xn.Direction.NONE;return t===xn.Axis.Y&&(r=xn.Direction.BOTTOM,i=xn.Direction.TOP),n===xn.TraceDirectionKey.NEGATIVE&&(o=r),n===xn.TraceDirectionKey.POSITIVE&&(o=i),o};Qn.resolveAxisDirection=kk;Object.defineProperty(Mf,"__esModule",{value:!0});Mf.calculateDirectionDelta=Dk;var $k=Dt,el=Qn;function Dk(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e.length,r=n-1,i=$k.TraceDirectionKey.NONE;r>=0;r--){var o=e[r],a=(0,el.getDirectionKey)(o),s=(0,el.getDirectionValue)(o[a]),l=e[r-1]||{},u=(0,el.getDirectionKey)(l),d=(0,el.getDirectionValue)(l[u]),h=(0,el.getDifference)(s,d);if(h>=t){i=a;break}else i=u}return i}var Lf={};Object.defineProperty(Lf,"__esModule",{value:!0});Lf.calculateDuration=Mk;function Mk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e?t-e:0}var R1={};Object.defineProperty(R1,"__esModule",{value:!0});R1.calculateMovingPosition=Lk;function Lk(e){if("changedTouches"in e){var t=e.changedTouches&&e.changedTouches[0];return{x:t&&t.clientX,y:t&&t.clientY}}return{x:e.clientX,y:e.clientY}}var O1={},Ff={};Object.defineProperty(Ff,"__esModule",{value:!0});Ff.updateTrace=Fk;function Fk(e,t){var n=e[e.length-1];return n!==t&&e.push(t),e}var Uf={},Bf={};Object.defineProperty(Bf,"__esModule",{value:!0});Bf.calculateTraceDirections=Uk;var xu=Dt;function h2(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uk(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[],n=xu.TraceDirectionKey.POSITIVE,r=xu.TraceDirectionKey.NEGATIVE,i=0,o=[],a=xu.TraceDirectionKey.NONE;i<e.length;i++){var s=e[i],l=e[i-1];if(o.length){var u=s>l?n:r;a===xu.TraceDirectionKey.NONE&&(a=u),u===a?o.push(s):(t.push(h2({},a,o.slice())),o=[],o.push(s),a=u)}else s!==0&&(a=s>0?n:r),o.push(s)}return o.length&&t.push(h2({},a,o)),t}Object.defineProperty(Uf,"__esModule",{value:!0});Uf.resolveDirection=Qk;var Bk=Df,zk=Bf,Vk=Mf,p2=Qn,Hk=Dt;function Qk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hk.Axis.X,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n){var r=(0,zk.calculateTraceDirections)(e),i=(0,Vk.calculateDirectionDelta)(r,n);return(0,p2.resolveAxisDirection)(t,i)}var o=(0,Bk.calculateDirection)(e);return(0,p2.resolveAxisDirection)(t,o)}var zf={};Object.defineProperty(zf,"__esModule",{value:!0});zf.calculateVelocity=Wk;function Wk(e,t,n){var r=Math.sqrt(e*e+t*t);return r/(n||1)}Object.defineProperty(O1,"__esModule",{value:!0});O1.calculatePosition=Yk;var m2=Ff,g2=Uf,Gk=Lf,qk=zf,v2=Dt;function Yk(e,t){var n=e.start,r=e.x,i=e.y,o=e.traceX,a=e.traceY,s=t.rotatePosition,l=t.directionDelta,u=s.x-r,d=i-s.y,h=Math.abs(u),f=Math.abs(d);(0,m2.updateTrace)(o,u),(0,m2.updateTrace)(a,d);var p=(0,g2.resolveDirection)(o,v2.Axis.X,l),v=(0,g2.resolveDirection)(a,v2.Axis.Y,l),g=(0,Gk.calculateDuration)(n,Date.now()),S=(0,qk.calculateVelocity)(h,f,g);return{absX:h,absY:f,deltaX:u,deltaY:d,directionX:p,directionY:v,duration:g,positionX:s.x,positionY:s.y,velocity:S}}var Vf={};Object.defineProperty(Vf,"__esModule",{value:!0});Vf.checkIsMoreThanSingleTouches=void 0;var Kk=function(t){return!!(t.touches&&t.touches.length>1)};Vf.checkIsMoreThanSingleTouches=Kk;var Nc={},Hf={};Object.defineProperty(Hf,"__esModule",{value:!0});Hf.createOptions=Xk;function Xk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.defineProperty(e,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),e}Object.defineProperty(Nc,"__esModule",{value:!0});Nc.checkIsPassiveSupported=Zk;Nc.noop=void 0;var Jk=Hf;function Zk(e){if(typeof e=="boolean")return e;var t={isPassiveSupported:e};try{var n=(0,Jk.createOptions)(t);window.addEventListener("checkIsPassiveSupported",xg,n),window.removeEventListener("checkIsPassiveSupported",xg,n)}catch{}return t.isPassiveSupported}var xg=function(){};Nc.noop=xg;var Qf={};Object.defineProperty(Qf,"__esModule",{value:!0});Qf.checkIsTouchEventsSupported=void 0;function wg(e){"@babel/helpers - typeof";return wg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wg(e)}var e$=function(){return(typeof window>"u"?"undefined":wg(window))==="object"&&("ontouchstart"in window||!!window.navigator.maxTouchPoints)};Qf.checkIsTouchEventsSupported=e$;var Wf={};Object.defineProperty(Wf,"__esModule",{value:!0});Wf.getInitialState=void 0;function y2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function t$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y2(Object(n),!0).forEach(function(r){n$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r$=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t$({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[]},t)};Wf.getInitialState=r$;var Gf={};Object.defineProperty(Gf,"__esModule",{value:!0});Gf.getInitialProps=void 0;function A2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function i$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A2(Object(n),!0).forEach(function(r){o$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a$=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i$({element:null,target:null,delta:10,directionDelta:0,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1},t)};Gf.getInitialProps=a$;var j1={};Object.defineProperty(j1,"__esModule",{value:!0});j1.getOptions=s$;function s$(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return e?{passive:!1}:{}}var N1={};Object.defineProperty(N1,"__esModule",{value:!0});N1.rotateByAngle=l$;function l$(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(t===0)return e;var n=e.x,r=e.y,i=Math.PI/180*t,o=n*Math.cos(i)+r*Math.sin(i),a=r*Math.cos(i)-n*Math.sin(i);return{x:o,y:a}}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Df;Object.keys(t).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===t[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return t[y]}})});var n=Mf;Object.keys(n).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===n[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return n[y]}})});var r=Lf;Object.keys(r).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===r[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return r[y]}})});var i=R1;Object.keys(i).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===i[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return i[y]}})});var o=O1;Object.keys(o).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===o[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return o[y]}})});var a=Bf;Object.keys(a).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===a[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return a[y]}})});var s=zf;Object.keys(s).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===s[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return s[y]}})});var l=Vf;Object.keys(l).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===l[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return l[y]}})});var u=Nc;Object.keys(u).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===u[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return u[y]}})});var d=Qf;Object.keys(d).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===d[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return d[y]}})});var h=Qn;Object.keys(h).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===h[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return h[y]}})});var f=Hf;Object.keys(f).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===f[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return f[y]}})});var p=Wf;Object.keys(p).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===p[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return p[y]}})});var v=Gf;Object.keys(v).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===v[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return v[y]}})});var g=j1;Object.keys(g).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===g[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return g[y]}})});var S=Uf;Object.keys(S).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===S[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return S[y]}})});var E=N1;Object.keys(E).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===E[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return E[y]}})});var A=Ff;Object.keys(A).forEach(function(y){y==="default"||y==="__esModule"||y in e&&e[y]===A[y]||Object.defineProperty(e,y,{enumerable:!0,get:function(){return A[y]}})})})(B3);(function(e){function t(f){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},t(f)}Object.defineProperty(e,"__esModule",{value:!0});var n={};e.default=void 0;var r=a(B3),i=Dt;Object.keys(i).forEach(function(f){f==="default"||f==="__esModule"||Object.prototype.hasOwnProperty.call(n,f)||f in e&&e[f]===i[f]||Object.defineProperty(e,f,{enumerable:!0,get:function(){return i[f]}})});function o(f){if(typeof WeakMap!="function")return null;var p=new WeakMap,v=new WeakMap;return(o=function(S){return S?v:p})(f)}function a(f,p){if(f&&f.__esModule)return f;if(f===null||t(f)!=="object"&&typeof f!="function")return{default:f};var v=o(p);if(v&&v.has(f))return v.get(f);var g={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in f)if(E!=="default"&&Object.prototype.hasOwnProperty.call(f,E)){var A=S?Object.getOwnPropertyDescriptor(f,E):null;A&&(A.get||A.set)?Object.defineProperty(g,E,A):g[E]=f[E]}return g.default=f,v&&v.set(f,g),g}function s(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function l(f,p){for(var v=0;v<p.length;v++){var g=p[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}function u(f,p,v){return p&&l(f.prototype,p),v&&l(f,v),Object.defineProperty(f,"prototype",{writable:!1}),f}function d(f,p,v){return p in f?Object.defineProperty(f,p,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[p]=v,f}var h=function(){function f(p){s(this,f),d(this,"state",void 0),d(this,"props",void 0),this.state=r.getInitialState(),this.props=r.getInitialProps(p),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}return u(f,[{key:"init",value:function(){this.setupTouchListeners(),this.setupMouseListeners()}},{key:"update",value:function(v){var g=this.props,S=Object.assign({},g,v);if(g.element!==S.element||g.target!==S.target){this.destroy(),this.props=S,this.init();return}this.props=S,(g.mouseTrackingEnabled!==S.mouseTrackingEnabled||g.preventTrackingOnMouseleave!==S.preventTrackingOnMouseleave)&&(this.cleanupMouseListeners(),S.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),g.touchTrackingEnabled!==S.touchTrackingEnabled&&(this.cleanupTouchListeners(),S.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}},{key:"destroy",value:function(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=r.getInitialState(),this.props=r.getInitialProps()}},{key:"setupTouchListeners",value:function(){var v=this.props,g=v.element,S=v.target,E=v.touchTrackingEnabled;if(g&&E){var A=S||g,y=r.checkIsPassiveSupported(),x=r.getOptions(y);A.addEventListener("touchstart",this.handleSwipeStart,x),A.addEventListener("touchmove",this.handleSwipeMove,x),A.addEventListener("touchend",this.handleSwipeEnd,x)}}},{key:"cleanupTouchListeners",value:function(){var v=this.props,g=v.element,S=v.target,E=S||g;E&&(E.removeEventListener("touchstart",this.handleSwipeStart),E.removeEventListener("touchmove",this.handleSwipeMove),E.removeEventListener("touchend",this.handleSwipeEnd))}},{key:"setupMouseListeners",value:function(){var v=this.props,g=v.element,S=v.mouseTrackingEnabled,E=v.preventTrackingOnMouseleave;S&&g&&(g.addEventListener("mousedown",this.handleMouseDown),g.addEventListener("mousemove",this.handleMouseMove),g.addEventListener("mouseup",this.handleMouseUp),E&&g.addEventListener("mouseleave",this.handleMouseLeave))}},{key:"cleanupMouseListeners",value:function(){var v=this.props.element;v&&(v.removeEventListener("mousedown",this.handleMouseDown),v.removeEventListener("mousemove",this.handleMouseMove),v.removeEventListener("mouseup",this.handleMouseUp),v.removeEventListener("mouseleave",this.handleMouseLeave))}},{key:"getEventData",value:function(v){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{directionDelta:0},S=this.props.rotationAngle,E=g.directionDelta,A=r.calculateMovingPosition(v),y=r.rotateByAngle(A,S);return r.calculatePosition(this.state,{rotatePosition:y,directionDelta:E})}},{key:"handleSwipeStart",value:function(v){if(!r.checkIsMoreThanSingleTouches(v)){var g=this.props.rotationAngle,S=r.calculateMovingPosition(v),E=r.rotateByAngle(S,g),A=E.x,y=E.y;this.state=r.getInitialState({isSwiping:!1,start:Date.now(),x:A,y})}}},{key:"handleSwipeMove",value:function(v){var g=this.state,S=g.x,E=g.y,A=g.isSwiping;if(!(!S||!E||r.checkIsMoreThanSingleTouches(v))){var y=this.props.directionDelta||0,x=this.getEventData(v,{directionDelta:y}),w=x.absX,C=x.absY,b=x.deltaX,T=x.deltaY,_=x.directionX,$=x.directionY,M=x.duration,R=x.velocity,U=this.props,I=U.delta,k=U.preventDefaultTouchmoveEvent,z=U.onSwipeStart,Y=U.onSwiping;v.cancelable&&k&&v.preventDefault(),!(w<Number(I)&&C<Number(I)&&!A)&&(z&&!A&&z(v,{deltaX:b,deltaY:T,absX:w,absY:C,directionX:_,directionY:$,duration:M,velocity:R}),this.state.isSwiping=!0,Y&&Y(v,{deltaX:b,deltaY:T,absX:w,absY:C,directionX:_,directionY:$,duration:M,velocity:R}))}}},{key:"handleSwipeEnd",value:function(v){var g=this.props,S=g.onSwiped,E=g.onTap;if(this.state.isSwiping){var A=this.props.directionDelta||0,y=this.getEventData(v,{directionDelta:A});S&&S(v,y)}else{var x=this.getEventData(v);E&&E(v,x)}this.state=r.getInitialState()}},{key:"handleMouseDown",value:function(v){var g=this.props.target;g?g===v.target&&this.handleSwipeStart(v):this.handleSwipeStart(v)}},{key:"handleMouseMove",value:function(v){this.handleSwipeMove(v)}},{key:"handleMouseUp",value:function(v){var g=this.state.isSwiping,S=this.props.target;S?(S===v.target||g)&&this.handleSwipeEnd(v):this.handleSwipeEnd(v)}},{key:"handleMouseLeave",value:function(v){var g=this.state.isSwiping;g&&this.handleSwipeEnd(v)}}],[{key:"isTouchEventsSupported",value:function(){return r.checkIsTouchEventsSupported()}}]),f}();e.default=h})(U3);var z3={},$r={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Modifiers=e.Classnames=e.AutoplayDirection=e.ControlsStrategy=e.AutoPlayStrategy=e.AnimationType=e.EventType=void 0,function(t){t.ACTION="action",t.INIT="init",t.RESIZE="resize",t.UPDATE="update"}(e.EventType||(e.EventType={})),function(t){t.FADEOUT="fadeout",t.SLIDE="slide"}(e.AnimationType||(e.AnimationType={})),function(t){t.DEFAULT="default",t.ALL="all",t.ACTION="action",t.NONE="none"}(e.AutoPlayStrategy||(e.AutoPlayStrategy={})),function(t){t.DEFAULT="default",t.ALTERNATE="alternate",t.RESPONSIVE="responsive"}(e.ControlsStrategy||(e.ControlsStrategy={})),function(t){t.RTL="rtl",t.LTR="ltr"}(e.AutoplayDirection||(e.AutoplayDirection={})),function(t){t.ANIMATED="animated animated-out fadeOut",t.ROOT="alice-carousel",t.WRAPPER="alice-carousel__wrapper",t.STAGE="alice-carousel__stage",t.STAGE_ITEM="alice-carousel__stage-item",t.DOTS="alice-carousel__dots",t.DOTS_ITEM="alice-carousel__dots-item",t.PLAY_BTN="alice-carousel__play-btn",t.PLAY_BTN_ITEM="alice-carousel__play-btn-item",t.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",t.SLIDE_INFO="alice-carousel__slide-info",t.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",t.BUTTON_PREV="alice-carousel__prev-btn",t.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",t.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",t.BUTTON_NEXT="alice-carousel__next-btn",t.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",t.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(e.Classnames||(e.Classnames={})),function(t){t.ACTIVE="__active",t.INACTIVE="__inactive",t.CLONED="__cloned",t.CUSTOM="__custom",t.PAUSE="__pause",t.SEPARATOR="__separator",t.SSR="__ssr",t.TARGET="__target"}(e.Modifiers||(e.Modifiers={}))})($r);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.defaultProps=void 0;var t=$r;e.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:t.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:t.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:t.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:t.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:void 0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,syncStateOnPropsUpdate:!0,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onUpdated:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}}})(z3);var V3={};(function(e){var t=function(){return(t=Object.assign||function(o){for(var a,s=1,l=arguments.length;s<l;s++)for(var u in a=arguments[s])Object.prototype.hasOwnProperty.call(a,u)&&(o[u]=a[u]);return o}).apply(this,arguments)},n=function(o){return o&&o.__esModule?o:{default:o}},r=(Object.defineProperty(e,"__esModule",{value:!0}),n(m));function i(o){var a={xDown:null,xUp:null};return r.default.createElement("a",t({onClick:function(s){a.xDown!==a.xUp&&s.preventDefault()},onMouseDown:function(s){s.preventDefault(),a.xUp=null,a.xDown=s.clientX},onMouseUp:function(s){s.preventDefault(),a.xUp=s.clientX}},o),o.children)}e.default=i})(V3);var H3={},Q3={},js={},k1={},$1={},D1={};(function(e){var t=function(){return(t=Object.assign||function(i){for(var o,a=1,s=arguments.length;a<s;a++)for(var l in o=arguments[a])Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l]);return i}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.mapPositionCoords=e.mapPartialCoords=void 0,function(i){return i.map(function(o){return{width:o.width,position:0}})}),r=(e.mapPartialCoords=n,function(i,o){return o===void 0&&(o=0),i.map(function(a){return a.position>o?t(t({},a),{position:o}):a})});e.mapPositionCoords=r})(D1);var kc={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isVerticalTouchmoveDetected=e.getFadeoutAnimationPosition=e.getFadeoutAnimationIndex=e.getSwipeTouchendIndex=e.getSwipeTouchendPosition=e.getSwipeTransformationCursor=e.getTransformationItemIndex=e.getSwipeShiftValue=e.getItemCoords=e.getIsLeftDirection=e.shouldRecalculateSwipePosition=e.getSwipeLimitMax=e.getSwipeLimitMin=e.shouldCancelSlideAnimation=e.shouldRecalculateSlideIndex=e.getUpdateSlidePositionIndex=e.getActiveIndex=e.getStartIndex=e.getShiftIndex=void 0;var t=function(x,w){return(x=x===void 0?0:x)+(w=w===void 0?0:w)},n=(e.getShiftIndex=t,function(x,w){if(x===void 0&&(x=0),w=w===void 0?0:w){if(w<=x)return w-1;if(0<x)return x}return 0}),r=(e.getStartIndex=n,function(b){var w=b.startIndex,w=w===void 0?0:w,C=b.itemsCount,b=b.infinite;return b!==void 0&&b?w:(0,e.getStartIndex)(w,C===void 0?0:C)}),i=(e.getActiveIndex=r,function(x,w){return x<0?w-1:w<=x?0:x}),o=(e.getUpdateSlidePositionIndex=i,function(x,w){return x<0||w<=x}),a=(e.shouldRecalculateSlideIndex=o,function(x,w){return x<0||w<=x}),s=(e.shouldCancelSlideAnimation=a,function(b,_){var C=b.itemsOffset,b=b.transformationSet,b=b===void 0?[]:b,T=_.infinite,_=_.swipeExtraPadding;return T?(b[C===void 0?0:C]||{}).position:(T=(b[0]||{}).width,Math.min(_===void 0?0:_,T===void 0?0:T))}),l=(e.getSwipeLimitMin=s,function(M,b){var C=b.infinite,b=b.swipeExtraPadding,b=b===void 0?0:b,T=M.itemsCount,_=M.itemsOffset,$=M.itemsInSlide,$=$===void 0?1:$,M=M.transformationSet,M=M===void 0?[]:M;return C?(M[(T===void 0?1:T)+(0,e.getShiftIndex)($,_===void 0?0:_)]||{}).position||0:(0,e.getItemCoords)(-$,M).position+b}),u=(e.getSwipeLimitMax=l,function(x,w,C){return-w<=x||Math.abs(x)>=C}),d=(e.shouldRecalculateSwipePosition=u,function(x){return(x=x===void 0?0:x)<0}),h=(e.getIsLeftDirection=d,function(x,w){return(w=w===void 0?[]:w).slice(x=x===void 0?0:x)[0]||{position:0,width:0}}),f=(e.getItemCoords=h,function(x,w){return x===void 0&&(x=0),w===void 0&&(w=[]),(0,e.getItemCoords)(x,w).position}),p=(e.getSwipeShiftValue=f,function(x,w){return w===void 0&&(w=0),(x=x===void 0?[]:x).findIndex(function(C){return C.position>=Math.abs(w)})}),v=(e.getTransformationItemIndex=p,function(x,w,C){return x===void 0&&(x=[]),w===void 0&&(w=0),C===void 0&&(C=0),x=(0,e.getTransformationItemIndex)(x,w),(0,e.getIsLeftDirection)(C)?x:x-1}),g=(e.getSwipeTransformationCursor=v,function(M,U,R){R===void 0&&(R=0);var b=M.infinite,T=M.autoWidth,_=M.isStageContentPartial,$=M.swipeAllowedPositionMax,M=M.transformationSet,R=(0,e.getSwipeTransformationCursor)(M,R,U),U=(0,e.getItemCoords)(R,M).position;if(!b){if(T&&_)return 0;if($<U)return-$}return-U}),S=(e.getSwipeTouchendPosition=g,function(x,U){var C=U.transformationSet,b=U.itemsInSlide,T=U.itemsOffset,_=U.itemsCount,$=U.infinite,M=U.isStageContentPartial,R=U.activeIndex,U=U.translate3d;return $||!M&&U!==Math.abs(x)?(M=(0,e.getTransformationItemIndex)(C,x),$?M<(U=(0,e.getShiftIndex)(b,T))?_-b-T+M:U+_<=M?M-(U+_):M-U:M):R}),E=(e.getSwipeTouchendIndex=S,function(b){var w=b.infinite,C=b.activeIndex,b=b.itemsInSlide;return w?C+b:C}),A=(e.getFadeoutAnimationIndex=E,function(x,b){var C=b.activeIndex,b=b.stageWidth;return x<C?(C-x)*-b||0:(x-C)*b||0}),y=(e.getFadeoutAnimationPosition=A,function(x,w,C){return x<(C=C===void 0?0:C)||x<.1*w});e.isVerticalTouchmoveDetected=y})(kc);(function(e){var t=function(){return(t=Object.assign||function(R){for(var U,I=1,k=arguments.length;I<k;I++)for(var z in U=arguments[I])Object.prototype.hasOwnProperty.call(U,z)&&(R[z]=U[z]);return R}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.getItemsInSlide=e.canUseDOM=e.getTransformMatrix=e.getTranslateXProperty=e.getTouchmoveTranslatePosition=e.getTranslate3dProperty=e.getRenderStageItemStyles=e.getRenderStageStyles=e.getTransitionProperty=e.getRenderWrapperStyles=e.animate=e.shouldHandleResizeEvent=e.getElementFirstChild=e.getElementCursor=e.getAutoheightProperty=e.getElementDimensions=e.getItemWidth=e.createDefaultTransformationSet=e.createAutowidthTransformationSet=e.isElement=e.createClones=e.getItemsOffset=e.getItemsCount=e.getSlides=void 0,D1),r=kc,i=function(I){var U=I.children,I=I.items;return U?U.length?U:[U]:I===void 0?[]:I},o=(e.getSlides=i,function(R){return(0,e.getSlides)(R).length}),a=(e.getItemsCount=o,function(k){var U=k.infinite,I=k.paddingRight,k=k.paddingLeft;return U&&(k||I)?1:0}),s=(e.getItemsOffset=a,function(R){var U,I,k,z,Y=(0,e.getSlides)(R);return R.infinite?(U=(0,e.getItemsCount)(R),z=(0,e.getItemsOffset)(R),R=(0,e.getItemsInSlide)(U,R),k=Math.min(R,U)+z,I=Y.slice(0,k),k=Y.slice(-k),z&&R===U&&(z=Y[0],R=Y.slice(-1)[0],k.unshift(R),I.push(z)),k.concat(Y,I)):Y}),l=(e.createClones=s,function(R){try{return R instanceof Element||R instanceof HTMLDocument}catch{return!1}}),u=(e.isElement=l,function(R,U,I){U===void 0&&(U=0),I===void 0&&(I=!1);var k=0,z=!0,Y=[];return(0,e.isElement)(R)&&(Y=Array.from((R==null?void 0:R.children)||[]).reduce(function(D,Te,se){var ae=0,se=se-1,Be=D[se],Te=f(Te==null?void 0:Te.firstChild).width,Te=Te===void 0?0:Te;return z=(k+=Te)<=U,Be&&(ae=se==0?Be.width:Be.width+Be.position),D.push({position:ae,width:Te}),D},[]),I||(Y=z?(0,n.mapPartialCoords)(Y):(R=k-U,(0,n.mapPositionCoords)(Y,R)))),{coords:Y,content:k,partial:z}}),d=(e.createAutowidthTransformationSet=u,function(R,U,I,k){k===void 0&&(k=!1);var z=0,Y=!0,D=[],H=(0,e.getItemWidth)(U,I);return D=R.reduce(function(J,ae,Te){var Be=0,Te=J[Te-1];return Y=(z+=H)<=U,Te&&(Be=H+Te.position||0),J.push({width:H,position:Be}),J},[]),{coords:D=k?D:Y?(0,n.mapPartialCoords)(D):(I=z-U,(0,n.mapPositionCoords)(D,I)),content:z,partial:Y}}),h=(e.createDefaultTransformationSet=d,function(R,U){return 0<U?R/U:R});function f(R){return R&&R.getBoundingClientRect?{width:(R=R.getBoundingClientRect()).width,height:R.height}:{width:0,height:0}}e.getItemWidth=h,e.getElementDimensions=f;var p=function(R,k,z){var k=(0,e.getElementCursor)(k,z),z=(0,e.getElementFirstChild)(R,k);if((0,e.isElement)(z))return R=window.getComputedStyle(z),k=parseFloat(R.marginTop),R=parseFloat(R.marginBottom),Math.ceil(z.offsetHeight+k+R)},v=(e.getAutoheightProperty=p,function(R,k){var I=k.activeIndex,k=k.itemsInSlide;return R.infinite?I+k+(0,e.getItemsOffset)(R):I}),g=(e.getElementCursor=v,function(R,U){return R=R&&R.children||[],R[U]&&R[U].firstChild||null});function S(R,U,I){return(U=U===void 0?{}:U).width!==(I=I===void 0?{}:I).width}function E(R,z){var z=z||{},I=z.position,I=I===void 0?0:I,k=z.animationDuration,k=k===void 0?0:k,z=z.animationEasingFunction,z=z===void 0?"ease":z;return R&&(0,e.isElement)(R)&&(R.style.transition="transform ".concat(k,"ms ").concat(z," 0ms"),R.style.transform="translate3d(".concat(I,"px, 0, 0)")),R}e.getElementFirstChild=g,e.shouldHandleResizeEvent=S,e.animate=E;var A=function(R,U,I){var Y=R||{},k=Y.paddingLeft,z=Y.paddingRight,D=Y.autoHeight,Y=Y.animationDuration,D=D?(0,e.getAutoheightProperty)(I,R,U):void 0;return{height:D,transition:D?"height ".concat(Y,"ms"):void 0,paddingLeft:"".concat(k,"px"),paddingRight:"".concat(z,"px")}},y=(e.getRenderWrapperStyles=A,function(I){var I=I||{},U=I.animationDuration,I=I.animationEasingFunction,I=I===void 0?"ease":I;return"transform ".concat(U===void 0?0:U,"ms ").concat(I," 0ms")}),x=(e.getTransitionProperty=y,function(R,U){return R=(R||{}).translate3d,R="translate3d(".concat(-(R===void 0?0:R),"px, 0, 0)"),t(t({},U),{transform:R})}),w=(e.getRenderStageStyles=x,function(R,Y){var D=Y.transformationSet,I=Y.fadeoutAnimationIndex,k=Y.fadeoutAnimationPosition,z=Y.fadeoutAnimationProcessing,Y=Y.animationDuration,D=(D[R]||{}).width;return z&&I===R?{transform:"translateX(".concat(k,"px)"),animationDuration:"".concat(Y,"ms"),width:"".concat(D,"px")}:{width:D}}),C=(e.getRenderStageItemStyles=w,function(R,D){var I=R,k=D.infinite,z=D.itemsOffset,Y=D.itemsInSlide,D=D.transformationSet;return((D===void 0?[]:D)[I=k?R+(0,r.getShiftIndex)(Y===void 0?0:Y,z===void 0?0:z):I]||{}).position||0}),b=(e.getTranslate3dProperty=C,function(R,U){return-(U-Math.floor(R))});function T(R){return R=_(R),R=R&&R[4]||"",Number(R)}function _(R){return R&&(0,e.isElement)(R)&&window.getComputedStyle(R).transform.match(/(-?[0-9.]+)/g)||[]}e.getTouchmoveTranslatePosition=b,e.getTranslateXProperty=T,e.getTransformMatrix=_;var $=function(){var R;try{return!!((R=window==null?void 0:window.document)!=null&&R.createElement)}catch{return!1}},M=(e.canUseDOM=$,function(R,H){var I,k=1,z=H.responsive,Y=H.autoWidth,D=H.infinite,H=H.innerWidth;return Y!==void 0&&Y?D!==void 0&&D?R:k:(z&&(Y=Object.keys(z)).length&&(H||(0,e.canUseDOM)())&&(I=H===void 0?window.innerWidth:H,Y.forEach(function(J){var ae;Number(J)<=I&&(ae=(J=z[J]).items,J=J.itemsFit,k=(J===void 0?"fill":J)==="contain"?ae:Math.min(ae,R))})),k||1)});e.getItemsInSlide=M})($1);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateInitialState=e.getIsStageContentPartial=e.concatClassnames=void 0;var t=$1,n=kc,r=function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return a.filter(Boolean).join(" ")},i=(e.concatClassnames=r,function(a,s,l){return s===void 0&&(s=0),l===void 0&&(l=0),!(a=a!==void 0&&a)&&l<=s}),o=(e.getIsStageContentPartial=i,function(T,s,l){l===void 0&&(l=(0,t.canUseDOM)());var u,d,h=T.animationDuration,h=h===void 0?0:h,f=T.infinite,f=f!==void 0&&f,p=T.autoPlay,p=p!==void 0&&p,v=T.autoWidth,v=v!==void 0&&v,g=(0,t.createClones)(T),S=(0,t.getTransitionProperty)(),E=(0,t.getItemsCount)(T),A=(0,t.getItemsOffset)(T),y=(0,t.getItemsInSlide)(E,T),x=(0,n.getStartIndex)(T.activeIndex,E),x=(0,n.getActiveIndex)({startIndex:x,itemsCount:E,infinite:f}),w=(0,t.getElementDimensions)(s).width,C=(d=(s=(v?(u=(s=(0,t.createAutowidthTransformationSet)(s,w,f)).coords,d=s.content,s):(u=(s=(0,t.createDefaultTransformationSet)(g,w,y,f)).coords,d=s.content,s)).partial,d),(0,n.getItemCoords)(-y,u=u).position),b=(0,n.getSwipeLimitMin)({itemsOffset:A,transformationSet:u},T),T=(0,n.getSwipeLimitMax)({itemsCount:E,itemsOffset:A,itemsInSlide:y,transformationSet:u},T),_=(0,n.getSwipeShiftValue)(E,u);return{activeIndex:x,autoWidth:v,animationDuration:h,clones:g,infinite:f,itemsCount:E,itemsInSlide:y,itemsOffset:A,translate3d:(0,t.getTranslate3dProperty)(x,{itemsInSlide:y,itemsOffset:A,transformationSet:u,autoWidth:v,infinite:f}),stageWidth:w,stageContentWidth:d,initialStageHeight:0,isStageContentPartial:s,isAutoPlaying:p,isAutoPlayCanceledOnAction:!1,transformationSet:u,transition:S,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:b,swipeLimitMax:T,swipeAllowedPositionMax:C,swipeShiftValue:_,canUseDom:l}});e.calculateInitialState=o})(k1);var W3={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isClonedItem=e.isTargetItem=e.isActiveItem=e.getRenderStageItemClasses=void 0;var t=$r,n=k1,r=kc,i=function(v,p){v===void 0&&(v=0);var d=p.fadeoutAnimationIndex,h=(0,e.isActiveItem)(v,p)?t.Modifiers.ACTIVE:"",f=(0,e.isClonedItem)(v,p)?t.Modifiers.CLONED:"",p=(0,e.isTargetItem)(v,p)?t.Modifiers.TARGET:"",v=v===d?t.Classnames.ANIMATED:"";return(0,n.concatClassnames)(t.Classnames.STAGE_ITEM,h,f,p,v)},o=(e.getRenderStageItemClasses=i,function(l,v){l===void 0&&(l=0);var d=v.activeIndex,h=v.itemsInSlide,f=v.itemsOffset,p=v.infinite,v=v.autoWidth,g=(0,r.getShiftIndex)(h,f);return v&&p?l-g===d+f:(v=d+g,p?v<=l&&l<v+h:d<=l&&l<v)}),a=(e.isActiveItem=o,function(l,p){l===void 0&&(l=0);var d=p.activeIndex,v=p.itemsInSlide,h=p.itemsOffset,f=p.infinite,p=p.autoWidth,v=(0,r.getShiftIndex)(v,h);return f?p&&f?l-v===d+h:l===d+v:l===d}),s=(e.isTargetItem=a,function(l,v){l===void 0&&(l=0);var d=v.itemsInSlide,h=v.itemsOffset,f=v.itemsCount,p=v.infinite,v=v.autoWidth;return!!p&&(v&&p?l<d||f-1+d<l:l<(v=(0,r.getShiftIndex)(d,h))||f-1+v<l)});e.isClonedItem=s})(W3);var G3={};(function(e){function t(n,r){r===void 0&&(r=0);function i(){o&&(clearTimeout(o),o=void 0)}var o=void 0;return[function(){for(var a=this,s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];i(),o=window.setTimeout(function(){n.apply(a,s),o=void 0},r)},i]}Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=void 0,e.debounce=t})(G3);var q3={};(function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]}Object.defineProperty(e,"__esModule",{value:!0}),e.debug=void 0,e.debug=t})(q3);var Y3={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getSlideItemInfo=e.getSlideInfo=e.getSlideIndexForMultipleItems=e.getSlideIndexForNonMultipleItems=e.getActiveSlideDotsLength=e.getActiveSlideIndex=void 0;var t=function(s,d){var d=d||{},h=d.activeIndex,u=d.itemsInSlide,d=d.itemsCount,h=h+u;return u===1?(0,e.getSlideIndexForNonMultipleItems)(h,u,d):(0,e.getSlideIndexForMultipleItems)(h,u,d,s)},n=(e.getActiveSlideIndex=t,function(s,l){var u;return l===void 0&&(l=1),(s=s===void 0?0:s)&&l?(u=Math.floor(s/l),s%l==0?u-1:u):0}),r=(e.getActiveSlideDotsLength=n,function(s,l,u){return s<l?u-l:u<s?0:s-1}),i=(e.getSlideIndexForNonMultipleItems=r,function(s,l,u,d){var h=(0,e.getActiveSlideDotsLength)(u,l);return s===u+l?0:d||s<l&&s!==0?h:s===0?u%l==0?h:h-1:0<l?Math.floor(s/l)-1:0}),o=(e.getSlideIndexForMultipleItems=i,function(s,l){return l===void 0&&(l=0),s=(s=s===void 0?0:s)+1,s<1?s=l:l<s&&(s=1),{item:s,itemsCount:l}}),a=(e.getSlideInfo=o,function(l){var l=l||{},u=l.itemsInSlide,d=l.activeIndex,h=l.infinite,f=l.itemsCount;return l.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:h===!1&&d===0,isNextSlideDisabled:h===!1&&f-u<=d}});e.getSlideItemInfo=a})(Y3);var K3={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shouldCancelAutoPlayOnHover=e.shouldCancelAutoPlayOnAction=e.getItemIndexForDotNavigation=e.checkIsTheLastDotIndex=e.getDotsNavigationLength=e.hasDotForEachSlide=e.isStrategy=e.shouldDisableButtons=e.shouldDisableDots=e.shouldDisableControls=void 0;var t=$r;function n(v,E){var v=(v||{}).controlsStrategy,E=E||{},g=E.itemsInSlide,S=E.itemsCount,E=E.autoWidth;if((0,e.isStrategy)(v,t.ControlsStrategy.RESPONSIVE))return!E&&g===S}function r(f,p){return f.disableDotsControls||n(f,p)}function i(f,p){return f.disableButtonsControls||!f.infinite&&n(f,p)}e.shouldDisableControls=n,e.shouldDisableDots=r,e.shouldDisableButtons=i;var o=function(f,p){return f===void 0&&(f=""),p===void 0&&(p=""),!!(f&&f.includes(p))},a=(e.isStrategy=o,function(f,p){return f||(0,e.isStrategy)(p,t.ControlsStrategy.ALTERNATE)}),s=(e.hasDotForEachSlide=a,function(f,p,v){return f===void 0&&(f=0),p===void 0&&(p=1),(v=v!==void 0&&v)?f:Number(p)!==0&&Math.ceil(f/p)||0}),l=(e.getDotsNavigationLength=s,function(f,p,v){return!p&&f===v-1}),u=(e.checkIsTheLastDotIndex=l,function(f,p,v,g){return(p?v-g:f*g)||0}),d=(e.getItemIndexForDotNavigation=u,function(f){return(f=f===void 0?"":f)===t.AutoPlayStrategy.ACTION||f===t.AutoPlayStrategy.ALL}),h=(e.shouldCancelAutoPlayOnAction=d,function(f){return(f=f===void 0?"":f)===t.AutoPlayStrategy.DEFAULT||f===t.AutoPlayStrategy.ALL});e.shouldCancelAutoPlayOnHover=h})(K3);(function(e){var t=Object.create?function(r,i,o,a){a===void 0&&(a=o);var s=Object.getOwnPropertyDescriptor(i,o);s&&("get"in s?i.__esModule:!s.writable&&!s.configurable)||(s={enumerable:!0,get:function(){return i[o]}}),Object.defineProperty(r,a,s)}:function(r,i,o,a){r[a=a===void 0?o:a]=i[o]},n=function(r,i){for(var o in r)o==="default"||Object.prototype.hasOwnProperty.call(i,o)||t(i,r,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(k1,e),n($1,e),n(W3,e),n(G3,e),n(kc,e),n(q3,e),n(Y3,e),n(K3,e),n(D1,e)})(js);(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.SlideInfo=void 0,t(m)),r=$r,i=js,o=function(l){var u=l.activeIndex,s=l.itemsCount,l=l.renderSlideInfo,u=(0,i.getSlideInfo)(u,s).item;return typeof l=="function"?n.default.createElement("div",{className:r.Classnames.SLIDE_INFO},l({item:u,itemsCount:s})):(l=(0,i.concatClassnames)(r.Classnames.SLIDE_INFO_ITEM,r.Modifiers.SEPARATOR),n.default.createElement("div",{className:r.Classnames.SLIDE_INFO},n.default.createElement("span",{className:r.Classnames.SLIDE_INFO_ITEM},u),n.default.createElement("span",{className:l},"/"),n.default.createElement("span",{className:r.Classnames.SLIDE_INFO_ITEM},s)))};e.SlideInfo=o})(Q3);var X3={};(function(e){var t=function(i){return i&&i.__esModule?i:{default:i}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.StageItem=void 0,t(m)),r=function(s){var o=s.item,a=s.className,s=s.styles;return n.default.createElement("li",{style:s,className:a},o)};e.StageItem=r})(X3);var J3={};(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.DotsNavigation=void 0,t(m)),r=$r,i=js,o=function(S){var s=S.state,l=S.onClick,u=S.onMouseEnter,d=S.onMouseLeave,h=S.controlsStrategy,f=S.renderDotsItem,p=s.itemsCount,v=s.itemsInSlide,g=s.infinite,S=s.autoWidth,E=s.activeIndex,A=(0,i.getSlideItemInfo)(s).isNextSlideDisabled,y=(0,i.hasDotForEachSlide)(S,h),x=(0,i.getDotsNavigationLength)(p,v,y);return n.default.createElement("ul",{className:r.Classnames.DOTS},Array.from({length:p}).map(function(w,C){var b,T,_;if(C<x)return T=(0,i.checkIsTheLastDotIndex)(C,!!g,x),b=(0,i.getItemIndexForDotNavigation)(C,T,p,v),T=(0,i.getActiveSlideIndex)(A,s),y&&((T=E)<0?T=p-1:p<=E&&(T=0),b=C),T=T===C?r.Modifiers.ACTIVE:"",_=f?r.Modifiers.CUSTOM:"",_=(0,i.concatClassnames)(r.Classnames.DOTS_ITEM,T,_),n.default.createElement("li",{key:"dot-item-".concat(C),onMouseEnter:u,onMouseLeave:d,onClick:function(){return l(b)},className:_},f&&f({isActive:!!T,activeIndex:C}))}))};e.DotsNavigation=o})(J3);var Z3={};(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PlayPauseButton=void 0,t(m)),r=$r,i=js,o=function(u){var s=u.isPlaying,l=u.onClick,u=u.renderPlayPauseButton;return typeof u=="function"?n.default.createElement("div",{className:r.Classnames.PLAY_BTN,onClick:l},u({isPlaying:s})):(u=s?r.Modifiers.PAUSE:"",s=(0,i.concatClassnames)(r.Classnames.PLAY_BTN_ITEM,u),n.default.createElement("div",{className:r.Classnames.PLAY_BTN},n.default.createElement("div",{className:r.Classnames.PLAY_BTN_WRAPPER},n.default.createElement("div",{onClick:l,className:s}))))};e.PlayPauseButton=o})(Z3);var eS={};(function(e){var t=function(a){return a&&a.__esModule?a:{default:a}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=void 0,t(m)),r=$r,i=js,o=function(f){var s,l=f.name,u=f.isDisabled,d=f.onClick,h=f.renderPrevButton,f=f.renderNextButton;return typeof h=="function"?n.default.createElement("div",{className:r.Classnames.BUTTON_PREV,onClick:d},h({isDisabled:u})):typeof f=="function"?n.default.createElement("div",{className:r.Classnames.BUTTON_NEXT,onClick:d},f({isDisabled:u})):(f=(h=l==="prev")?"<":">",l=h?r.Classnames.BUTTON_PREV:r.Classnames.BUTTON_NEXT,s=h?r.Classnames.BUTTON_PREV_WRAPPER:r.Classnames.BUTTON_NEXT_WRAPPER,h=h?r.Classnames.BUTTON_PREV_ITEM:r.Classnames.BUTTON_NEXT_ITEM,u=u?r.Modifiers.INACTIVE:"",h=(0,i.concatClassnames)(h,u),n.default.createElement("div",{className:l},n.default.createElement("div",{className:s},n.default.createElement("p",{className:h,onClick:function(p){return d(p)}},n.default.createElement("span",{"data-area":f})))))};e.PrevNextButton=o})(eS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=e.PlayPauseButton=e.DotsNavigation=e.StageItem=e.SlideInfo=void 0;var t=Q3,n=(Object.defineProperty(e,"SlideInfo",{enumerable:!0,get:function(){return t.SlideInfo}}),X3),r=(Object.defineProperty(e,"StageItem",{enumerable:!0,get:function(){return n.StageItem}}),J3),i=(Object.defineProperty(e,"DotsNavigation",{enumerable:!0,get:function(){return r.DotsNavigation}}),Z3),o=(Object.defineProperty(e,"PlayPauseButton",{enumerable:!0,get:function(){return i.PlayPauseButton}}),eS);Object.defineProperty(e,"PrevNextButton",{enumerable:!0,get:function(){return o.PrevNextButton}})})(H3);(function(e){var t=function(){var A=function(y,x){return(A=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(w,C){w.__proto__=C}:function(w,C){for(var b in C)Object.prototype.hasOwnProperty.call(C,b)&&(w[b]=C[b])}))(y,x)};return function(y,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");function w(){this.constructor=y}A(y,x),y.prototype=x===null?Object.create(x):(w.prototype=x.prototype,new w)}}(),n=function(){return(n=Object.assign||function(A){for(var y,x=1,w=arguments.length;x<w;x++)for(var C in y=arguments[x])Object.prototype.hasOwnProperty.call(y,C)&&(A[C]=y[C]);return A}).apply(this,arguments)},r=Object.create?function(A,y,x,w){w===void 0&&(w=x);var C=Object.getOwnPropertyDescriptor(y,x);C&&("get"in C?y.__esModule:!C.writable&&!C.configurable)||(C={enumerable:!0,get:function(){return y[x]}}),Object.defineProperty(A,w,C)}:function(A,y,x,w){A[w=w===void 0?x:w]=y[x]},i=Object.create?function(A,y){Object.defineProperty(A,"default",{enumerable:!0,value:y})}:function(A,y){A.default=y},o=function(A){if(A&&A.__esModule)return A;var y={};if(A!=null)for(var x in A)x!=="default"&&Object.prototype.hasOwnProperty.call(A,x)&&r(y,A,x);return i(y,A),y},a=function(A,y){for(var x in A)x==="default"||Object.prototype.hasOwnProperty.call(y,x)||r(y,A,x)},s=function(A,y,x,w){return new(x=x||Promise)(function(C,b){function T(M){try{$(w.next(M))}catch(R){b(R)}}function _(M){try{$(w.throw(M))}catch(R){b(R)}}function $(M){var R;M.done?C(M.value):((R=M.value)instanceof x?R:new x(function(U){U(R)})).then(T,_)}$((w=w.apply(A,[])).next())})},l=function(A,y){var x,w,C,b={label:0,sent:function(){if(1&C[0])throw C[1];return C[1]},trys:[],ops:[]},T={next:_(0),throw:_(1),return:_(2)};return typeof Symbol=="function"&&(T[Symbol.iterator]=function(){return this}),T;function _($){return function(M){var R=[$,M];if(x)throw new TypeError("Generator is already executing.");for(;b;)try{if(x=1,w&&(C=2&R[0]?w.return:R[0]?w.throw||((C=w.return)&&C.call(w),0):w.next)&&!(C=C.call(w,R[1])).done)return C;switch(w=0,(R=C?[2&R[0],C.value]:R)[0]){case 0:case 1:C=R;break;case 4:return b.label++,{value:R[1],done:!1};case 5:b.label++,w=R[1],R=[0];continue;case 7:R=b.ops.pop(),b.trys.pop();continue;default:if(!(C=0<(C=b.trys).length&&C[C.length-1])&&(R[0]===6||R[0]===2)){b=0;continue}if(R[0]===3&&(!C||R[1]>C[0]&&R[1]<C[3]))b.label=R[1];else if(R[0]===6&&b.label<C[1])b.label=C[1],C=R;else{if(!(C&&b.label<C[2])){C[2]&&b.ops.pop(),b.trys.pop();continue}b.label=C[2],b.ops.push(R)}}R=y.call(A,b)}catch(U){R=[6,U],w=0}finally{x=C=0}if(5&R[0])throw R[1];return{value:R[0]?R[1]:void 0,done:!0}}}},u=function(A){return A&&A.__esModule?A:{default:A}},d=(Object.defineProperty(e,"__esModule",{value:!0}),e.Link=void 0,u(m)),h=u(U3),f=z3,p=u(V3),v=(e.Link=p.default,o(H3)),g=o(js),S=$r,E=(a($r,e),function(A){function y(x){var w=A.call(this,x)||this;return w.swipeListener=null,w._handleKeyboardEvents=function(C){switch(C.code){case"Space":return w.props.autoPlay&&w._handlePlayPauseToggle();case"ArrowLeft":return w.slidePrev(C);case"ArrowRight":return w.slideNext(C)}},w._handleBeforeSlideEnd=function(C){return s(w,void 0,void 0,function(){var b,T,_;return l(this,function($){switch($.label){case 0:return T=this.state,_=T.activeIndex,b=T.itemsCount,T=T.fadeoutAnimationProcessing,g.shouldRecalculateSlideIndex(_,b)?(_=g.getUpdateSlidePositionIndex(_,b),[4,this._handleUpdateSlidePosition(_)]):[3,2];case 1:return $.sent(),[3,4];case 2:return T?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:$.sent(),$.label=4;case 4:return this._handleSlideChanged(C),[2]}})})},w._handleMouseEnter=function(){var C=w.props.autoPlayStrategy;g.shouldCancelAutoPlayOnHover(C)&&w.state.isAutoPlaying&&(w.isHovered=!0,w._handlePause())},w._handleMouseLeave=function(){w.state.isAutoPlaying&&(w.isHovered=!1,w._handlePlay())},w._handlePause=function(){w._clearAutoPlayTimeout()},w._handlePlayPauseToggle=function(){return s(w,void 0,void 0,function(){var C;return l(this,function(b){switch(b.label){case 0:return C=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!C,isAutoPlayCanceledOnAction:!0})];case 1:return b.sent(),C?this._handlePause():this._handlePlay(),[2]}})})},w._setRootComponentRef=function(C){return w.rootElement=C},w._setStageComponentRef=function(C){return w.stageComponent=C},w._renderStageItem=function(C,b){var T=g.getRenderStageItemStyles(b,w.state),_=g.getRenderStageItemClasses(b,w.state);return d.default.createElement(v.StageItem,{styles:T,className:_,key:"stage-item-".concat(b),item:C})},w._renderSlideInfo=function(){var C=w.props.renderSlideInfo,T=w.state,b=T.activeIndex,T=T.itemsCount;return d.default.createElement(v.SlideInfo,{itemsCount:T,activeIndex:b,renderSlideInfo:C})},w.state=g.calculateInitialState(x,null),w.isHovered=!1,w.isAnimationDisabled=!1,w.isTouchMoveProcessStarted=!1,w.cancelTouchAnimations=!1,w.hasUserAction=!1,w.rootElement=null,w.rootComponentDimensions={},w.stageComponent=null,w.startTouchmovePosition=void 0,w.slideTo=w.slideTo.bind(w),w.slidePrev=w.slidePrev.bind(w),w.slideNext=w.slideNext.bind(w),w._handleTouchmove=w._handleTouchmove.bind(w),w._handleTouchend=w._handleTouchend.bind(w),w._handleDotClick=w._handleDotClick.bind(w),w._handleResize=w._handleResize.bind(w),x=g.debounce(w._handleResize,100),w._handleResizeDebounced=x[0],w._cancelResizeDebounced=x[1],w}return t(y,A),y.prototype.componentDidMount=function(){return s(this,void 0,void 0,function(){return l(this,function(x){switch(x.label){case 0:return[4,this._setInitialState()];case 1:return x.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},y.prototype.componentDidUpdate=function(x){var D=this.props,w=D.activeIndex,C=D.animationDuration,b=D.autoWidth,T=D.children,_=D.infinite,$=D.items,M=D.paddingLeft,R=D.paddingRight,U=D.responsive,I=D.swipeExtraPadding,k=D.mouseTracking,z=D.swipeDelta,Y=D.touchTracking,D=D.touchMoveDefaultEvents;T&&x.children!==T||x.autoWidth!==b||x.infinite!==_||x.items!==$||x.paddingLeft!==M||x.paddingRight!==R||x.responsive!==U||x.swipeExtraPadding!==I?this._updateComponent():(x.animationDuration!==C&&this.setState({animationDuration:C}),x.activeIndex!==w&&this.slideTo(w,S.EventType.UPDATE)),x.swipeDelta===z&&x.mouseTracking===k&&x.touchTracking===Y&&x.touchMoveDefaultEvents===D||this._updateSwipeProps(),this.props.keyboardNavigation!==x.keyboardNavigation&&this._updateEventListeners()},y.prototype.componentWillUnmount=function(){this._cancelResizeDebounced(),this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(y.prototype,"eventObject",{get:function(){var w=this.state,x=w.itemsInSlide,w=w.activeIndex,b=g.getSlideItemInfo(this.state),C=b.isNextSlideDisabled,b=b.isPrevSlideDisabled;return{item:w,slide:g.getActiveSlideIndex(C,this.state),itemsInSlide:x,isNextSlideDisabled:C,isPrevSlideDisabled:b,type:S.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"isFadeoutAnimationAllowed",{get:function(){var x=this.state.itemsInSlide,T=this.props,w=T.animationType,C=T.paddingLeft,b=T.paddingRight,T=T.autoWidth;return x===1&&w===S.AnimationType.FADEOUT&&!(C||b||T)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"touchmovePosition",{get:function(){return this.startTouchmovePosition!==void 0?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),y.prototype.slideTo=function(x,w){var C,b,T;x===void 0&&(x=0),this._handlePause(),this.isFadeoutAnimationAllowed?(C=g.getUpdateSlidePositionIndex(x,this.state.itemsCount),b=g.getFadeoutAnimationPosition(C,this.state),T=g.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:C,fadeoutAnimationIndex:T,fadeoutAnimationPosition:b,eventType:w})):this._handleSlideTo({activeIndex:x,eventType:w})},y.prototype.slidePrev=function(b){this._handlePause(),b&&b.isTrusted&&(this.hasUserAction=!0);var w,C,b=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(w=-this.state.stageWidth,C=g.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:b,fadeoutAnimationIndex:C,fadeoutAnimationPosition:w})):this._handleSlideTo({activeIndex:b})},y.prototype.slideNext=function(b){this._handlePause(),b&&b.isTrusted&&(this.hasUserAction=!0);var w,C,b=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(w=this.state.stageWidth,C=g.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:b,fadeoutAnimationIndex:C,fadeoutAnimationPosition:w})):this._handleSlideTo({activeIndex:b})},y.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},y.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},y.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},y.prototype._handleResize=function(x){return s(this,void 0,void 0,function(){var w,C,b,T;return l(this,function(_){switch(_.label){case 0:return b=this.props.onResizeEvent,C=g.getElementDimensions(this.rootElement),(b||g.shouldHandleResizeEvent)(x,this.rootComponentDimensions,C)?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=C,b=this.state,C=b.itemsCount,w=b.isAutoPlaying,b=g.getUpdateSlidePositionIndex(this.state.activeIndex,C),C=g.calculateInitialState(n(n({},this.props),{activeIndex:b}),this.stageComponent),b=g.getTranslate3dProperty(C.activeIndex,C),T=n(n({},C),{translate3d:b,isAutoPlaying:w}),g.animate(this.stageComponent,{position:-b}),[4,this.setState(T)]):[3,2];case 1:_.sent(),this._handleResized({itemsInSlide:T.itemsInSlide}),this.isAnimationDisabled=!1,w&&this._handlePlay(),_.label=2;case 2:return[2]}})})},y.prototype._handleTouchmove=function(x,_){var C=_.absY,b=_.absX,T=_.deltaX,_=this.props.swipeDelta,I=this.state,$=I.swipeShiftValue,M=I.swipeLimitMin,R=I.swipeLimitMax,U=I.infinite,I=I.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(I||!this.isTouchMoveProcessStarted&&g.isVerticalTouchmoveDetected(b,C,_))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var k=g.getTouchmoveTranslatePosition(T,this.touchmovePosition);if(U===!1)return M<k||k<-R?void 0:void g.animate(this.stageComponent,{position:k});if(g.shouldRecalculateSwipePosition(k,M,R))try{(function z(){g.getIsLeftDirection(T)?k+=$:k+=-$,g.shouldRecalculateSwipePosition(k,M,R)&&z()})()}catch(z){g.debug(z)}g.animate(this.stageComponent,{position:k})}},y.prototype._handleTouchend=function(x,_){var C,b,T,_=_.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,C=this.state.animationDuration,b=this.props.animationEasingFunction,T=g.getTranslateXProperty(this.stageComponent),_=g.getSwipeTouchendPosition(this.state,_,T),g.animate(this.stageComponent,{position:_,animationDuration:C,animationEasingFunction:b}),this._handleBeforeTouchEnd(_))},y.prototype._handleBeforeTouchEnd=function(x){var w=this,C=this.state.animationDuration;this.touchEndTimeoutId=window.setTimeout(function(){return s(w,void 0,void 0,function(){var b,T,_,$=this;return l(this,function(M){switch(M.label){case 0:return b=g.getSwipeTouchendIndex(x,this.state),T=g.getTranslate3dProperty(b,this.state),g.animate(this.stageComponent,{position:-T}),_=g.getTransitionProperty(),[4,this.setState({activeIndex:b,translate3d:T,transition:_})];case 1:return M.sent(),requestAnimationFrame(function(){return $._handleSlideChanged()}),[2]}})})},C)},y.prototype._handleSlideTo=function(x){var b=x.activeIndex,w=b===void 0?0:b,b=x.fadeoutAnimationIndex,C=b===void 0?null:b,b=x.fadeoutAnimationPosition,T=b===void 0?null:b,_=x.eventType;return s(this,void 0,void 0,function(){var $,M,R,U,I=this;return l(this,function(k){switch(k.label){case 0:return M=this.props,R=M.infinite,M=M.animationEasingFunction,$=this.state,U=$.itemsCount,$=$.animationDuration,this.isAnimationDisabled||this.state.activeIndex===w||!R&&g.shouldCancelSlideAnimation(w,U)?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(_),R=!1,U=g.getTranslate3dProperty(w,this.state),M=C!==null&&T!==null?(R=!0,g.getTransitionProperty()):g.getTransitionProperty({animationDuration:$,animationEasingFunction:M}),[4,this.setState({activeIndex:w,transition:M,translate3d:U,animationDuration:$,fadeoutAnimationIndex:C,fadeoutAnimationPosition:T,fadeoutAnimationProcessing:R})]);case 1:return k.sent(),this.slideEndTimeoutId=window.setTimeout(function(){return I._handleBeforeSlideEnd(_)},$),[2]}})})},y.prototype._handleUpdateSlidePosition=function(x){return s(this,void 0,void 0,function(){var w,C,b;return l(this,function(T){switch(T.label){case 0:return w=this.state.animationDuration,C=g.getTranslate3dProperty(x,this.state),b=g.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:x,translate3d:C,transition:b,animationDuration:w,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return T.sent(),[2]}})})},y.prototype._handleUpdated=function(){this.props.onUpdated&&this.props.onUpdated(n(n({},this.eventObject),{type:S.EventType.UPDATE}))},y.prototype._handleResized=function(x){x===void 0&&(x={}),this.props.onResized&&this.props.onResized(n(n(n({},this.eventObject),x),{type:S.EventType.RESIZE}))},y.prototype._handleSlideChange=function(x){this.props.onSlideChange&&(x=x?n(n({},this.eventObject),{type:x}):this.eventObject,this.props.onSlideChange(x))},y.prototype._handleSlideChanged=function(x){return s(this,void 0,void 0,function(){var w,C,b,T;return l(this,function(_){switch(_.label){case 0:return C=this.state,w=C.isAutoPlaying,C=C.isAutoPlayCanceledOnAction,b=this.props,T=b.autoPlayStrategy,b=b.onSlideChanged,g.shouldCancelAutoPlayOnAction(T)&&this.hasUserAction&&!C?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return _.sent(),[3,3];case 2:w&&this._handlePlay(),_.label=3;case 3:return this.isAnimationDisabled=!1,b&&(T=x?n(n({},this.eventObject),{type:x}):this.eventObject,b(T)),x===S.EventType.UPDATE&&this._handleUpdated(),[2]}})})},y.prototype._handleDotClick=function(x){this.hasUserAction=!0,this.slideTo(x)},y.prototype._handlePlay=function(){this._setAutoPlayInterval()},y.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},y.prototype._clearAutoPlayTimeout=function(){window.clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},y.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},y.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},y.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},y.prototype._setTouchmovePosition=function(){var x=g.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-x},y.prototype._setInitialState=function(){return s(this,void 0,void 0,function(){var x;return l(this,function(w){switch(w.label){case 0:return x=g.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=g.getElementDimensions(this.rootElement),[4,this.setState(x)];case 1:return w.sent(),this.props.onInitialized&&this.props.onInitialized(n(n({},this.eventObject),{type:S.EventType.INIT})),[2]}})})},y.prototype._setAutoPlayInterval=function(){var x=this,C=this.props,w=C.autoPlayDirection,C=C.autoPlayInterval;this.autoPlayTimeoutId=window.setTimeout(function(){x.isHovered||(w===S.AutoplayDirection.RTL?x.slidePrev():x.slideNext())},C)},y.prototype._setupSwipeHandlers=function(){this.swipeListener=new h.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},y.prototype._updateComponent=function(){var x=this,w=(this.props.syncStateOnPropsUpdate?this.state:this.props).activeIndex,C=n(n({},this.props),{activeIndex:w});this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:g.createClones(C)}),requestAnimationFrame(function(){x.setState(g.calculateInitialState(C,x.stageComponent),function(){return x._handleUpdated()})})},y.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},y.prototype._renderDotsNavigation=function(){var w=this.props,x=w.renderDotsItem,w=w.controlsStrategy;return d.default.createElement(v.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:x,controlsStrategy:w})},y.prototype._renderPrevButton=function(){var x=this.props.renderPrevButton,w=g.getSlideItemInfo(this.state).isPrevSlideDisabled;return d.default.createElement(v.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:w,renderPrevButton:x})},y.prototype._renderNextButton=function(){var x=this.props.renderNextButton,w=g.getSlideItemInfo(this.state).isNextSlideDisabled;return d.default.createElement(v.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:w,renderNextButton:x})},y.prototype._renderPlayPauseButton=function(){var x=this.props.renderPlayPauseButton,w=this.state.isAutoPlaying;return d.default.createElement(v.PlayPauseButton,{isPlaying:w,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:x})},y.prototype.render=function(){var $=this.state,T=$.translate3d,x=$.clones,_=$.transition,$=$.canUseDom,w=g.shouldDisableDots(this.props,this.state),C=g.shouldDisableButtons(this.props,this.state),b=g.getRenderWrapperStyles(this.props,this.state,this.stageComponent),T=g.getRenderStageStyles({translate3d:T},{transition:_}),_=this.props.ssrSilentMode||$?"":S.Modifiers.SSR,$=g.concatClassnames(S.Classnames.ROOT,_);return d.default.createElement("div",{className:$},d.default.createElement("div",{ref:this._setRootComponentRef},d.default.createElement("div",{style:b,className:S.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},d.default.createElement("ul",{style:T,className:S.Classnames.STAGE,ref:this._setStageComponentRef},x.map(this._renderStageItem)))),w?null:this._renderDotsNavigation(),C?null:this._renderPrevButton(),C?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},y.defaultProps=f.defaultProps,y}(d.default.PureComponent));e.default=E})(F3);const M1=Pn(F3);function c$(e){const t=e+"CollectionProvider",[n,r]=jc(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=p=>{const{scope:v,children:g}=p,S=K.useRef(null),E=K.useRef(new Map).current;return K.createElement(i,{scope:v,itemMap:E,collectionRef:S},g)},s=e+"CollectionSlot",l=K.forwardRef((p,v)=>{const{scope:g,children:S}=p,E=o(s,g),A=Gt(v,E.collectionRef);return K.createElement(fc,{ref:A},S)}),u=e+"CollectionItemSlot",d="data-radix-collection-item",h=K.forwardRef((p,v)=>{const{scope:g,children:S,...E}=p,A=K.useRef(null),y=Gt(v,A),x=o(u,g);return K.useEffect(()=>(x.itemMap.set(A,{ref:A,...E}),()=>void x.itemMap.delete(A))),K.createElement(fc,{[d]:"",ref:y},S)});function f(p){const v=o(e+"CollectionConsumer",p);return K.useCallback(()=>{const S=v.collectionRef.current;if(!S)return[];const E=Array.from(S.querySelectorAll(`[${d}]`));return Array.from(v.itemMap.values()).sort((x,w)=>E.indexOf(x.ref.current)-E.indexOf(w.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:a,Slot:l,ItemSlot:h},f,r]}const tS="Collapsible",[u$,nS]=jc(tS),[d$,L1]=u$(tS),f$=m.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:o,onOpenChange:a,...s}=e,[l=!1,u]=wf({prop:r,defaultProp:i,onChange:a});return m.createElement(d$,{scope:n,disabled:o,contentId:$l(),open:l,onOpenToggle:m.useCallback(()=>u(d=>!d),[u])},m.createElement(Bt.div,ue({"data-state":F1(l),"data-disabled":o?"":void 0},s,{ref:t})))}),h$="CollapsibleTrigger",p$=m.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,i=L1(h$,n);return m.createElement(Bt.button,ue({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":F1(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},r,{ref:t,onClick:$t(e.onClick,i.onOpenToggle)}))}),rS="CollapsibleContent",m$=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=L1(rS,e.__scopeCollapsible);return m.createElement(ai,{present:n||i.open},({present:o})=>m.createElement(g$,ue({},r,{ref:t,present:o})))}),g$=m.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:i,...o}=e,a=L1(rS,n),[s,l]=m.useState(r),u=m.useRef(null),d=Gt(t,u),h=m.useRef(0),f=h.current,p=m.useRef(0),v=p.current,g=a.open||s,S=m.useRef(g),E=m.useRef();return m.useEffect(()=>{const A=requestAnimationFrame(()=>S.current=!1);return()=>cancelAnimationFrame(A)},[]),dc(()=>{const A=u.current;if(A){E.current=E.current||{transitionDuration:A.style.transitionDuration,animationName:A.style.animationName},A.style.transitionDuration="0s",A.style.animationName="none";const y=A.getBoundingClientRect();h.current=y.height,p.current=y.width,S.current||(A.style.transitionDuration=E.current.transitionDuration,A.style.animationName=E.current.animationName),l(r)}},[a.open,r]),m.createElement(Bt.div,ue({"data-state":F1(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!g},o,{ref:d,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style}}),g&&i)});function F1(e){return e?"open":"closed"}const v$=f$,y$=p$,A$=m$,ro="Accordion",E$=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[U1,b$,x$]=c$(ro),[qf,xQ]=jc(ro,[x$,nS]),B1=nS(),iS=K.forwardRef((e,t)=>{const{type:n,...r}=e,i=r,o=r;return K.createElement(U1.Provider,{scope:e.__scopeAccordion},n==="multiple"?K.createElement(T$,ue({},o,{ref:t})):K.createElement(C$,ue({},i,{ref:t})))});iS.propTypes={type(e){const t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof t=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(t)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[oS,w$]=qf(ro),[aS,S$]=qf(ro,{collapsible:!1}),C$=K.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:o=!1,...a}=e,[s,l]=wf({prop:n,defaultProp:r,onChange:i});return K.createElement(oS,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:l,onItemClose:K.useCallback(()=>o&&l(""),[o,l])},K.createElement(aS,{scope:e.__scopeAccordion,collapsible:o},K.createElement(sS,ue({},a,{ref:t}))))}),T$=K.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},...o}=e,[a=[],s]=wf({prop:n,defaultProp:r,onChange:i}),l=K.useCallback(d=>s((h=[])=>[...h,d]),[s]),u=K.useCallback(d=>s((h=[])=>h.filter(f=>f!==d)),[s]);return K.createElement(oS,{scope:e.__scopeAccordion,value:a,onItemOpen:l,onItemClose:u},K.createElement(aS,{scope:e.__scopeAccordion,collapsible:!0},K.createElement(sS,ue({},o,{ref:t}))))}),[I$,Yf]=qf(ro),sS=K.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:r,dir:i,orientation:o="vertical",...a}=e,s=K.useRef(null),l=Gt(s,t),u=b$(n),h=E3(i)==="ltr",f=$t(e.onKeyDown,p=>{var v;if(!E$.includes(p.key))return;const g=p.target,S=u().filter(_=>{var $;return!(($=_.ref.current)!==null&&$!==void 0&&$.disabled)}),E=S.findIndex(_=>_.ref.current===g),A=S.length;if(E===-1)return;p.preventDefault();let y=E;const x=0,w=A-1,C=()=>{y=E+1,y>w&&(y=x)},b=()=>{y=E-1,y<x&&(y=w)};switch(p.key){case"Home":y=x;break;case"End":y=w;break;case"ArrowRight":o==="horizontal"&&(h?C():b());break;case"ArrowDown":o==="vertical"&&C();break;case"ArrowLeft":o==="horizontal"&&(h?b():C());break;case"ArrowUp":o==="vertical"&&b();break}const T=y%A;(v=S[T].ref.current)===null||v===void 0||v.focus()});return K.createElement(I$,{scope:n,disabled:r,direction:i,orientation:o},K.createElement(U1.Slot,{scope:n},K.createElement(Bt.div,ue({},a,{"data-orientation":o,ref:l,onKeyDown:r?void 0:f}))))}),Sg="AccordionItem",[P$,z1]=qf(Sg),_$=K.forwardRef((e,t)=>{const{__scopeAccordion:n,value:r,...i}=e,o=Yf(Sg,n),a=w$(Sg,n),s=B1(n),l=$l(),u=r&&a.value.includes(r)||!1,d=o.disabled||e.disabled;return K.createElement(P$,{scope:n,open:u,disabled:d,triggerId:l},K.createElement(v$,ue({"data-orientation":o.orientation,"data-state":lS(u)},s,i,{ref:t,disabled:d,open:u,onOpenChange:h=>{h?a.onItemOpen(r):a.onItemClose(r)}})))}),R$="AccordionHeader",O$=K.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,i=Yf(ro,n),o=z1(R$,n);return K.createElement(Bt.h3,ue({"data-orientation":i.orientation,"data-state":lS(o.open),"data-disabled":o.disabled?"":void 0},r,{ref:t}))}),E2="AccordionTrigger",j$=K.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,i=Yf(ro,n),o=z1(E2,n),a=S$(E2,n),s=B1(n);return K.createElement(U1.ItemSlot,{scope:n},K.createElement(y$,ue({"aria-disabled":o.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:o.triggerId},s,r,{ref:t})))}),N$="AccordionContent",k$=K.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,i=Yf(ro,n),o=z1(N$,n),a=B1(n);return K.createElement(A$,ue({role:"region","aria-labelledby":o.triggerId,"data-orientation":i.orientation},a,r,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function lS(e){return e?"open":"closed"}const cS=iS,Al=_$,uS=O$,dS=j$,El=k$,Kf=e=>m.createElement("svg",{width:16,height:17,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M15 8.58984H1M1 8.58984L8 15.5898M1 8.58984L8 1.58984",stroke:"#667085",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),pc=e=>m.createElement("svg",{width:16,height:17,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M1 8.58984H15M15 8.58984L8 1.58984M15 8.58984L8 15.5898",stroke:"#667085",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$$=e=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.1663 19.1666H25.833C26.2932 19.1666 26.6663 19.5397 26.6663 20C26.6663 20.4602 26.2932 20.8333 25.833 20.8333H14.1663C13.7061 20.8333 13.333 20.4602 13.333 20C13.333 19.5397 13.7061 19.1666 14.1663 19.1666Z",fill:"white"}),m.createElement("rect",{x:.5,y:.5,width:39,height:39,rx:19.5,stroke:"white"})),D$=e=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.9997 13.3333C20.4599 13.3333 20.833 13.7064 20.833 14.1666V19.1666H25.833C26.2932 19.1666 26.6663 19.5397 26.6663 20C26.6663 20.4602 26.2932 20.8333 25.833 20.8333H20.833V25.8333C20.833 26.2935 20.4599 26.6666 19.9997 26.6666C19.5394 26.6666 19.1663 26.2935 19.1663 25.8333V20.8333H14.1663C13.7061 20.8333 13.333 20.4602 13.333 20C13.333 19.5397 13.7061 19.1666 14.1663 19.1666H19.1663V14.1666C19.1663 13.7064 19.5394 13.3333 19.9997 13.3333Z",fill:"white"}),m.createElement("rect",{x:.5,y:.5,width:39,height:39,rx:19.5,stroke:"white"})),{colors:mi}=q,M$=G.section`
  margin-top: 5rem;

  .card {
    /* ${de(P(248),P(200))} */
    width: min(100%, ${P(284)});
    height: ${P(200)};
  }

  .slide-btn {
    ${Tt}
    ${de(P(45))}
      transition: background-color 0.3s;
    border-radius: 50%;
    border: 1px solid ${mi.gray150};

    @media screen and (${O.small}) {
      ${de(P(55))}
    }

    &:hover,
    &:focus {
      background-color: hsl(216, 16%, 95%);
    }

    &:disabled {
      opacity: 0.5;
      background-color: ${mi.gray100};
    }
  }

  .alice-carousel {
    text-align: center;

    &__stage-item {
      padding-right: 0.5rem;

      @media screen and (${O.small}) {
        padding-inline: 0.5rem;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    &__prev-btn,
    &__next-btn {
      width: fit-content;
      margin-top: 1rem;
      margin-inline: auto;
    }

    &__next-btn {
      margin-left: 1rem;
    }
  }

  .accordion-container {
    padding-block: 3rem;
    margin-top: 3rem;
    background-color: ${mi.primary};
    color: ${mi.white};
  }

  .AccordionRoot {
    --accordion-root-gap: 1.5rem;

    ${he}
    gap: var(--accordion-root-gap);
    width: min(100%, ${P(1110)});
    margin: 3rem auto 0;
    border-radius: 6px;

    @media screen and (${O.small}) {
      --accordion-root-gap: 2rem;
    }

    @media screen and (${O.medium}) {
      --accordion-root-gap: 2.5rem;
    }
  }

  .AccordionItem {
    overflow: hidden;
    margin-top: 1px;
    padding-bottom: var(--accordion-root-gap);

    &:not(&:last-child) {
      border-bottom: 1px solid ${sr(mi.white,.5)};
    }
  }

  .AccordionHeader {
    display: flex;
  }

  .AccordionTrigger {
    font-family: inherit;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: clamp(${P(18)}, 4vw, ${P(34)});
    color: inherit;
    text-align: left;
    /* outline: 1px solid red; */

    &[data-state="open"] > .accordion-btn-wrapper {
      svg {
        &:first-child {
          opacity: 0;
        }
        &:last-child {
          opacity: 1;
        }
      }
    }

    &[data-state="closed"] > .accordion-btn-wrapper {
      svg {
        &:first-child {
          opacity: 1;
        }
        &:last-child {
          opacity: 0;
        }
      }
    }

    .number {
      font-weight: 300;
      width: 3ch;
      color: ${sr(mi.white,.8)};
    }

    .title {
      margin-inline: auto;

      @media screen and (${O.small}) {
        margin-right: unset;
        margin-left: 2rem;
      }
    }
  }

  .AccordionContent {
    padding-left: 1rem;
    color: ${mi.white};
    overflow: hidden;
  }
  .AccordionContent[data-state="open"] {
    animation: ${Bw} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionContent[data-state="closed"] {
    animation: ${zw} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  .AccordionContentWrapper {
    ${he}
    gap: 2rem;
    padding-top: 2rem;
    font-weight: 300;
    color: ${sr(mi.white,.8)};

    @media screen and (${O.small}) {
      width: 80%;
      padding-left: calc(3ch + 2.3rem);
      font-size: clamp(${P(17)}, 2.5vw, ${P(20)});
    }

    @media screen and (${O.medium}) {
      flex-direction: row;
      gap: 3rem;
      width: 100%;
      padding-left: calc(3ch + 2.65rem);
      padding-block: 3rem;

      & > :first-child {
        flex-basis: 60%;
      }
      & > :last-child {
        flex-basis: 40%;
      }
    }

    .img-wrapper {
      max-width: ${P(414)};
      max-height: ${P(300)};
      border-radius: 4px;
      overflow: hidden;
      background: url(${xf}) center/cover no-repeat;
    }
  }

  .accordion-btn-wrapper {
    position: relative;
    ${de(P(40))}
    margin-left: auto;

    svg {
      ${_s}
      transition: opacity 0.3s;
    }
  }
`,L$={0:{items:2.5},1024:{items:4.5}},F$=({images:e,topics:t})=>c.jsxs(M$,{children:[c.jsx(Re,{children:c.jsx(M1,{mouseTracking:!0,disableDotsControls:!0,items:e==null?void 0:e.map(({hash:n,url:r})=>c.jsx("div",{className:"card item",children:c.jsx("img",{src:r,alt:""})},n)),responsive:L$,renderNextButton:({isDisabled:n})=>c.jsx("button",{className:"slide-btn",disabled:n,children:c.jsx(pc,{})}),renderPrevButton:({isDisabled:n})=>c.jsx("button",{className:"slide-btn",disabled:n,children:c.jsx(Kf,{})})})}),c.jsx("div",{className:"accordion-container",children:c.jsx(Re,{children:c.jsx(cS,{className:"AccordionRoot",type:"single",collapsible:!0,children:t==null?void 0:t.map(n=>c.jsxs(Al,{className:"AccordionItem",value:n.index,children:[c.jsxs(U$,{children:[c.jsxs("span",{className:"number",children:[n==null?void 0:n.index.padStart(2,"0"),"/"]}),c.jsx("p",{className:"title",children:n==null?void 0:n.title})]}),c.jsx(El,{className:"AccordionContent",children:c.jsxs("div",{className:"AccordionContentWrapper",children:[c.jsx("div",{children:c.jsx(yn,{children:n==null?void 0:n.content})}),c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:n==null?void 0:n.image,alt:"",width:378,height:217})})]})})]},n.id))})})})]}),U$=m.forwardRef(({children:e,...t},n)=>c.jsx(uS,{className:"AccordionHeader",children:c.jsxs(dS,{className:"AccordionTrigger",ref:n,...t,children:[e,c.jsxs("div",{className:"accordion-btn-wrapper",children:[c.jsx(D$,{}),c.jsx($$,{})]})]})})),B$=e=>m.createElement("svg",{width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("g",{clipPath:"url(#clip0_1305_2049)"},m.createElement("path",{d:"M11.6458 9.25064e-05C5.32456 9.25064e-05 0.200195 5.12446 0.200195 11.4457C0.200195 17.7669 5.32456 22.8913 11.6458 22.8913C17.967 22.8913 23.0914 17.7669 23.0914 11.4457C23.0914 5.12446 17.967 9.25064e-05 11.6458 9.25064e-05ZM7.53254 4.54648C7.76835 4.53257 7.98151 4.67352 8.1431 4.92371L9.70792 7.89128C9.87268 8.24293 9.77906 8.61945 9.53328 8.8707L8.81654 9.58745C8.7723 9.64807 8.74319 9.71634 8.74249 9.79143C9.01735 10.8554 9.85113 11.8368 10.5868 12.5117C11.3224 13.1866 12.113 14.1004 13.1394 14.3169C13.2662 14.3523 13.4216 14.3649 13.5124 14.2806L14.3451 13.4325C14.6326 13.2146 15.0484 13.109 15.3553 13.2872H15.3692L18.1929 14.954C18.6074 15.2138 18.6503 15.716 18.3536 16.0214L16.4088 17.9509C16.1215 18.2455 15.74 18.3445 15.3693 18.3449C13.7297 18.2958 12.1806 17.4911 10.9081 16.6641C8.8195 15.1447 6.90364 13.2601 5.70086 10.9832C5.23956 10.0285 4.69767 8.81029 4.74938 7.74463C4.754 7.34373 4.86247 6.95097 5.14479 6.69257L7.08965 4.74771C7.24115 4.61879 7.39103 4.55483 7.53254 4.54648Z",fill:"white"})),m.createElement("defs",null,m.createElement("clipPath",{id:"clip0_1305_2049"},m.createElement("rect",{width:22.8912,height:22.8912,fill:"white",transform:"translate(0.200195)"})))),{colors:wu}=q,z$=G.section`
  margin-top: 5rem;
  margin-bottom: 15rem;

  .content {
    ${he}
    gap: 4rem;

    @media screen and (${O.medium}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .text-content {
    .heading {
      color: ${wu.black};
      font-weight: 900;
      font-size: clamp(${P(22)}, 10vw, ${P(38)});
    }

    .sub-heading {
      color: ${wu.primaryDesat};
      margin-top: 0.75rem;
    }
  }

  .btn-group {
    ${Lt}
    gap: 0.25rem;

    .cta {
      color: ${wu.white};
      background-color: ${wu.primary};
      white-space: nowrap;

      &-1 {
        padding: 1rem 3.5rem;
        font-size: ${P(15)};
        font-weight: 600;
      }

      &-2 {
        ${Tt}
        padding: 1rem;
      }
    }
  }
`,V$=()=>c.jsx(z$,{children:c.jsx(Re,{children:c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"text-content",children:[c.jsx("h2",{className:"heading",children:"Interested in working with us?"}),c.jsx("p",{className:"sub-heading",children:"You can also schedule a FREE call or book for a direct consultation session with our HOD."})]}),c.jsxs("div",{className:"btn-group",children:[c.jsx(xe,{to:"#",className:"cta cta-1",children:"Contact us"}),c.jsx(xe,{to:"#",className:"cta cta-2",children:c.jsx(B$,{})})]})]})})}),{colors:Su}=q,H$=G.section`
  margin-top: 1rem;

  @media screen and (${O.small}) {
    margin-top: 3rem;
  }

  .img-wrapper {
    background-color: ${Su.gray100};
  }

  .text-content {
    @media screen and (${O.large1}) {
      width: 95%;
    }

    h1 {
      margin-top: 1.5rem;
      font-size: clamp(${P(26)}, 8vw, ${P(35)});
      font-weight: 900;
      line-height: 1.25;
      color: ${Su.primary};

      span {
        color: ${Su.yellow};
      }

      @media screen and (${O.medium}) {
        font-size: clamp(${P(35)}, 7vw, ${P(45)});
      }

      @media screen and (${O.large1}) {
        font-size: clamp(${P(50)}, 5vw, ${P(58)});
      }
    }

    .summary {
      position: relative;
      margin-top: 2rem;
      margin-left: 1rem;

      &::before {
        ${Or}
        top: 0;
        left: -1rem;
        ${de(P(1),"100%")}
        background-color: ${Su.primary};
      }
    }
  }
`,Q$=({image:e,content:t})=>c.jsx(H$,{children:c.jsxs(Re,{children:[c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:e,alt:"",width:1200,height:675})}),c.jsxs("div",{className:"text-content",children:[c.jsxs("h1",{children:["We're growing, come work with the ",c.jsx("span",{children:"best"})," and"," ",c.jsx("span",{children:"brightest"})," in the industry."]}),c.jsx("div",{className:"summary",children:c.jsx(yn,{children:t})})]})]})}),W$=()=>{var r,i,o,a,s,l;const{data:e,isPending:t}=_k(),{preloaderStates:n}=gr("businessDesk");return c.jsxs(c.Fragment,{children:[(n==null?void 0:n.businessDesk)===0&&c.jsx(mr,{isLoading:t}),c.jsxs(mn,{children:[c.jsx("title",{children:`Business desk - ${On}`}),c.jsx("meta",{name:"description",content:"Describes business desk page"})]}),c.jsx(Q$,{content:e==null?void 0:e.bannerContent,image:`${Gn}${(o=(i=(r=e==null?void 0:e.bannerImage)==null?void 0:r.data)==null?void 0:i.attributes)==null?void 0:o.url}`}),c.jsx(F$,{images:(s=(a=e==null?void 0:e.carouselImages)==null?void 0:a.data)==null?void 0:s.map(u=>{var d,h,f;return{url:`${Gn}${(d=u==null?void 0:u.attributes)==null?void 0:d.url}`,mime:(h=u==null?void 0:u.attributes)==null?void 0:h.mime,hash:(f=u==null?void 0:u.attributes)==null?void 0:f.hash}}),topics:(l=e==null?void 0:e.topics)==null?void 0:l.map(u=>{var d,h,f;return{...u,image:`${Gn}${(f=(h=(d=u==null?void 0:u.image)==null?void 0:d.data)==null?void 0:h.attributes)==null?void 0:f.url}`}})}),c.jsx(V$,{}),c.jsx(pr,{})]})};function G$(e){return Ut({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(e)}const q$=[{title:"Senior Administrative Assistant",email:"dcs@ug.edu.gh",personel:"Henrietta",tel:["233303956019"],whatsApp:""},{title:"Administrative Assistant",email:"dcs@ug.edu.gh",personel:"Elizabeth",tel:["233537236528"],whatsApp:""},{title:"COMPSSA (Student's Association)",email:"compssa@st.ug.edu.gh",personel:"Vincencia",tel:["233201725750"],whatsApp:""}],Y$=G.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,K$=G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.875rem; /* text-3xl */
    font-weight: 600; /* font-semibold */
    margin-bottom: 1rem; /* mb-4 */
    color: ${q.colors.primary}
  }

  a {
    font-size: 0.75rem; /* text-xs */
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${q.colors.primary}
    text-decoration: none;
  }
`,X$=G(xe)`
  font-size: 0.75rem; /* text-xs */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${q.colors.primary}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,J$=G.p`
  margin-bottom: 1rem;
`,Z$=G.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* space-y-0.5 */
  margin-bottom: 1rem;
`,eD=G.h3`
  font-size: 1.25rem; /* text-xl */
  font-weight: 500; /* font-medium */
  color: ${q.colors.primary};
  margin-bottom: 0.5rem;
  span {
    font-size: 0.875rem; /* text-sm */
    color: #f56565; /* text-red-500 */
  }
`;G.span`
  margin-bottom: 0.5rem;
`;const tD=G.div`
  display: flex;
  gap: 0.55rem; /* gap-1.5 */
  flex-direction: column;

  a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d1d5db; /* equivalent to 'outline' button variant */
    border-radius: 50%;
    color: inherit;
    text-decoration: none;
  }
`,b2=G.div`
  display: flex;
  gap: 0.375rem; /* gap-1.5 */
  align-items: center;
`,nD=()=>c.jsxs(Y$,{children:[c.jsxs(K$,{children:[c.jsx("h2",{children:"Contact Us"}),c.jsx(X$,{to:"#",children:"Report an Issue"})]}),c.jsx(J$,{children:"For any inquiries, please reach out to any of our RSVPs below."}),q$.map((e,t)=>c.jsxs(Z$,{children:[c.jsxs(eD,{children:[e.title," · ",c.jsx("span",{children:e.personel})]}),c.jsxs(tD,{children:[c.jsxs(b2,{children:[c.jsx(xe,{to:"#",children:c.jsx(HO,{className:"text-xl"})})," ",e.email]}),e.whatsApp&&c.jsx(xe,{to:"#",children:c.jsx(QO,{className:"text-xl"})}),c.jsxs(b2,{children:[c.jsx(xe,{to:"#",children:c.jsx(G$,{className:"h-4 w-4 text-muted-foreground"})}),c.jsx("div",{children:e.tel.map((n,r)=>c.jsx("p",{children:n},r))})]})]})]},t))]});function Tp(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function rD(e,t=[]){let n=[];function r(o,a){const s=m.createContext(a),l=n.length;n=[...n,a];function u(h){const{scope:f,children:p,...v}=h,g=(f==null?void 0:f[e][l])||s,S=m.useMemo(()=>v,Object.values(v));return c.jsx(g.Provider,{value:S,children:p})}function d(h,f){const p=(f==null?void 0:f[e][l])||s,v=m.useContext(p);if(v)return v;if(a!==void 0)return a;throw new Error(`\`${h}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,d]}const i=()=>{const o=n.map(a=>m.createContext(a));return function(s){const l=(s==null?void 0:s[e])||o;return m.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return i.scopeName=e,[r,iD(i,...t)]}function iD(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const h=l(o)[`__scope${u}`];return{...s,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Ha(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function fS(e,t=[]){let n=[];function r(o,a){const s=m.createContext(a),l=n.length;n=[...n,a];function u(h){const{scope:f,children:p,...v}=h,g=(f==null?void 0:f[e][l])||s,S=m.useMemo(()=>v,Object.values(v));return c.jsx(g.Provider,{value:S,children:p})}function d(h,f){const p=(f==null?void 0:f[e][l])||s,v=m.useContext(p);if(v)return v;if(a!==void 0)return a;throw new Error(`\`${h}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,d]}const i=()=>{const o=n.map(a=>m.createContext(a));return function(s){const l=(s==null?void 0:s[e])||o;return m.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return i.scopeName=e,[r,oD(i,...t)]}function oD(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const h=l(o)[`__scope${u}`];return{...s,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function aD(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function hS(...e){return t=>e.forEach(n=>aD(n,t))}function Cg(...e){return m.useCallback(hS(...e),e)}var Bd=m.forwardRef((e,t)=>{const{children:n,...r}=e,i=m.Children.toArray(n),o=i.find(lD);if(o){const a=o.props.children,s=i.map(l=>l===o?m.Children.count(a)>1?m.Children.only(null):m.isValidElement(a)?a.props.children:null:l);return c.jsx(Tg,{...r,ref:t,children:m.isValidElement(a)?m.cloneElement(a,void 0,s):null})}return c.jsx(Tg,{...r,ref:t,children:n})});Bd.displayName="Slot";var Tg=m.forwardRef((e,t)=>{const{children:n,...r}=e;if(m.isValidElement(n)){const i=uD(n);return m.cloneElement(n,{...cD(r,n.props),ref:t?hS(t,i):i})}return m.Children.count(n)>1?m.Children.only(null):null});Tg.displayName="SlotClone";var sD=({children:e})=>c.jsx(c.Fragment,{children:e});function lD(e){return m.isValidElement(e)&&e.type===sD}function cD(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function uD(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function dD(e){const t=e+"CollectionProvider",[n,r]=fS(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=p=>{const{scope:v,children:g}=p,S=K.useRef(null),E=K.useRef(new Map).current;return c.jsx(i,{scope:v,itemMap:E,collectionRef:S,children:g})};a.displayName=t;const s=e+"CollectionSlot",l=K.forwardRef((p,v)=>{const{scope:g,children:S}=p,E=o(s,g),A=Cg(v,E.collectionRef);return c.jsx(Bd,{ref:A,children:S})});l.displayName=s;const u=e+"CollectionItemSlot",d="data-radix-collection-item",h=K.forwardRef((p,v)=>{const{scope:g,children:S,...E}=p,A=K.useRef(null),y=Cg(v,A),x=o(u,g);return K.useEffect(()=>(x.itemMap.set(A,{ref:A,...E}),()=>void x.itemMap.delete(A))),c.jsx(Bd,{[d]:"",ref:y,children:S})});h.displayName=u;function f(p){const v=o(e+"CollectionConsumer",p);return K.useCallback(()=>{const S=v.collectionRef.current;if(!S)return[];const E=Array.from(S.querySelectorAll(`[${d}]`));return Array.from(v.itemMap.values()).sort((x,w)=>E.indexOf(x.ref.current)-E.indexOf(w.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:a,Slot:l,ItemSlot:h},f,r]}var fD=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},hD=Wd.useId||(()=>{}),pD=0;function mD(e){const[t,n]=m.useState(hD());return fD(()=>{n(r=>r??String(pD++))},[e]),t?`radix-${t}`:""}var gD=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],pS=gD.reduce((e,t)=>{const n=m.forwardRef((r,i)=>{const{asChild:o,...a}=r,s=o?Bd:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(s,{...a,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function V1(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function vD({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=yD({defaultProp:t,onChange:n}),o=e!==void 0,a=o?e:r,s=V1(n),l=m.useCallback(u=>{if(o){const h=typeof u=="function"?u(e):u;h!==e&&s(h)}else i(u)},[o,e,i,s]);return[a,l]}function yD({defaultProp:e,onChange:t}){const n=m.useState(e),[r]=n,i=m.useRef(r),o=V1(t);return m.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}var AD=m.createContext(void 0);function ED(e){const t=m.useContext(AD);return e||t||"ltr"}var Ip="rovingFocusGroup.onEntryFocus",bD={bubbles:!1,cancelable:!0},Xf="RovingFocusGroup",[Ig,mS,xD]=dD(Xf),[wD,gS]=fS(Xf,[xD]),[SD,CD]=wD(Xf),vS=m.forwardRef((e,t)=>c.jsx(Ig.Provider,{scope:e.__scopeRovingFocusGroup,children:c.jsx(Ig.Slot,{scope:e.__scopeRovingFocusGroup,children:c.jsx(TD,{...e,ref:t})})}));vS.displayName=Xf;var TD=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:a,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:l,onEntryFocus:u,preventScrollOnEntryFocus:d=!1,...h}=e,f=m.useRef(null),p=Cg(t,f),v=ED(o),[g=null,S]=vD({prop:a,defaultProp:s,onChange:l}),[E,A]=m.useState(!1),y=V1(u),x=mS(n),w=m.useRef(!1),[C,b]=m.useState(0);return m.useEffect(()=>{const T=f.current;if(T)return T.addEventListener(Ip,y),()=>T.removeEventListener(Ip,y)},[y]),c.jsx(SD,{scope:n,orientation:r,dir:v,loop:i,currentTabStopId:g,onItemFocus:m.useCallback(T=>S(T),[S]),onItemShiftTab:m.useCallback(()=>A(!0),[]),onFocusableItemAdd:m.useCallback(()=>b(T=>T+1),[]),onFocusableItemRemove:m.useCallback(()=>b(T=>T-1),[]),children:c.jsx(pS.div,{tabIndex:E||C===0?-1:0,"data-orientation":r,...h,ref:p,style:{outline:"none",...e.style},onMouseDown:Ha(e.onMouseDown,()=>{w.current=!0}),onFocus:Ha(e.onFocus,T=>{const _=!w.current;if(T.target===T.currentTarget&&_&&!E){const $=new CustomEvent(Ip,bD);if(T.currentTarget.dispatchEvent($),!$.defaultPrevented){const M=x().filter(z=>z.focusable),R=M.find(z=>z.active),U=M.find(z=>z.id===g),k=[R,U,...M].filter(Boolean).map(z=>z.ref.current);ES(k,d)}}w.current=!1}),onBlur:Ha(e.onBlur,()=>A(!1))})})}),yS="RovingFocusGroupItem",AS=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:o,...a}=e,s=mD(),l=o||s,u=CD(yS,n),d=u.currentTabStopId===l,h=mS(n),{onFocusableItemAdd:f,onFocusableItemRemove:p}=u;return m.useEffect(()=>{if(r)return f(),()=>p()},[r,f,p]),c.jsx(Ig.ItemSlot,{scope:n,id:l,focusable:r,active:i,children:c.jsx(pS.span,{tabIndex:d?0:-1,"data-orientation":u.orientation,...a,ref:t,onMouseDown:Ha(e.onMouseDown,v=>{r?u.onItemFocus(l):v.preventDefault()}),onFocus:Ha(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:Ha(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){u.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const g=_D(v,u.orientation,u.dir);if(g!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let E=h().filter(A=>A.focusable).map(A=>A.ref.current);if(g==="last")E.reverse();else if(g==="prev"||g==="next"){g==="prev"&&E.reverse();const A=E.indexOf(v.currentTarget);E=u.loop?RD(E,A+1):E.slice(A+1)}setTimeout(()=>ES(E))}})})})});AS.displayName=yS;var ID={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function PD(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function _D(e,t,n){const r=PD(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ID[r]}function ES(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function RD(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var OD=vS,jD=AS;function ND(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function bS(...e){return t=>e.forEach(n=>ND(n,t))}function kD(...e){return m.useCallback(bS(...e),e)}var Pg=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};function $D(e,t){return m.useReducer((n,r)=>t[n][r]??n,e)}var xS=e=>{const{present:t,children:n}=e,r=DD(t),i=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),o=kD(r.ref,MD(i));return typeof n=="function"||r.isPresent?m.cloneElement(i,{ref:o}):null};xS.displayName="Presence";function DD(e){const[t,n]=m.useState(),r=m.useRef({}),i=m.useRef(e),o=m.useRef("none"),a=e?"mounted":"unmounted",[s,l]=$D(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const u=Cu(r.current);o.current=s==="mounted"?u:"none"},[s]),Pg(()=>{const u=r.current,d=i.current;if(d!==e){const f=o.current,p=Cu(u);e?l("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&f!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Pg(()=>{if(t){const u=h=>{const p=Cu(r.current).includes(h.animationName);h.target===t&&p&&Is.flushSync(()=>l("ANIMATION_END"))},d=h=>{h.target===t&&(o.current=Cu(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:m.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Cu(e){return(e==null?void 0:e.animationName)||"none"}function MD(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var wS=m.forwardRef((e,t)=>{const{children:n,...r}=e,i=m.Children.toArray(n),o=i.find(FD);if(o){const a=o.props.children,s=i.map(l=>l===o?m.Children.count(a)>1?m.Children.only(null):m.isValidElement(a)?a.props.children:null:l);return c.jsx(_g,{...r,ref:t,children:m.isValidElement(a)?m.cloneElement(a,void 0,s):null})}return c.jsx(_g,{...r,ref:t,children:n})});wS.displayName="Slot";var _g=m.forwardRef((e,t)=>{const{children:n,...r}=e;if(m.isValidElement(n)){const i=BD(n);return m.cloneElement(n,{...UD(r,n.props),ref:t?bS(t,i):i})}return m.Children.count(n)>1?m.Children.only(null):null});_g.displayName="SlotClone";var LD=({children:e})=>c.jsx(c.Fragment,{children:e});function FD(e){return m.isValidElement(e)&&e.type===LD}function UD(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function BD(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var zD=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Jf=zD.reduce((e,t)=>{const n=m.forwardRef((r,i)=>{const{asChild:o,...a}=r,s=o?wS:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(s,{...a,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),VD=m.createContext(void 0);function HD(e){const t=m.useContext(VD);return e||t||"ltr"}function SS(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function QD({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=WD({defaultProp:t,onChange:n}),o=e!==void 0,a=o?e:r,s=SS(n),l=m.useCallback(u=>{if(o){const h=typeof u=="function"?u(e):u;h!==e&&s(h)}else i(u)},[o,e,i,s]);return[a,l]}function WD({defaultProp:e,onChange:t}){const n=m.useState(e),[r]=n,i=m.useRef(r),o=SS(t);return m.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}var GD=Wd.useId||(()=>{}),qD=0;function YD(e){const[t,n]=m.useState(GD());return Pg(()=>{e||n(r=>r??String(qD++))},[e]),e||(t?`radix-${t}`:"")}var H1="Tabs",[KD,wQ]=rD(H1,[gS]),CS=gS(),[XD,Q1]=KD(H1),TS=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:i,defaultValue:o,orientation:a="horizontal",dir:s,activationMode:l="automatic",...u}=e,d=HD(s),[h,f]=QD({prop:r,onChange:i,defaultProp:o});return c.jsx(XD,{scope:n,baseId:YD(),value:h,onValueChange:f,orientation:a,dir:d,activationMode:l,children:c.jsx(Jf.div,{dir:d,"data-orientation":a,...u,ref:t})})});TS.displayName=H1;var IS="TabsList",PS=m.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...i}=e,o=Q1(IS,n),a=CS(n);return c.jsx(OD,{asChild:!0,...a,orientation:o.orientation,dir:o.dir,loop:r,children:c.jsx(Jf.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:t})})});PS.displayName=IS;var _S="TabsTrigger",RS=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:i=!1,...o}=e,a=Q1(_S,n),s=CS(n),l=jS(a.baseId,r),u=NS(a.baseId,r),d=r===a.value;return c.jsx(jD,{asChild:!0,...s,focusable:!i,active:d,children:c.jsx(Jf.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":u,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:l,...o,ref:t,onMouseDown:Tp(e.onMouseDown,h=>{!i&&h.button===0&&h.ctrlKey===!1?a.onValueChange(r):h.preventDefault()}),onKeyDown:Tp(e.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&a.onValueChange(r)}),onFocus:Tp(e.onFocus,()=>{const h=a.activationMode!=="manual";!d&&!i&&h&&a.onValueChange(r)})})})});RS.displayName=_S;var OS="TabsContent",Rg=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:i,children:o,...a}=e,s=Q1(OS,n),l=jS(s.baseId,r),u=NS(s.baseId,r),d=r===s.value,h=m.useRef(d);return m.useEffect(()=>{const f=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(f)},[]),c.jsx(xS,{present:i||d,children:({present:f})=>c.jsx(Jf.div,{"data-state":d?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":l,hidden:!f,id:u,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:h.current?"0s":void 0},children:f&&o})})});Rg.displayName=OS;function jS(e,t){return`${e}-trigger-${t}`}function NS(e,t){return`${e}-content-${t}`}const JD=G.div`
  width: 100%;
`,ZD=G(PS)`
  border-radius: 5rem;
  padding: 1rem 0.5rem; /* equivalent to p-1 */
  display: flex;
  gap: 0.5rem; /* equivalent to gap-2 */
  background-color: ${q.colors.gray100};
`,x2=G(RS)`
  border-radius: 1rem;
  padding: 0.5rem 1rem; /* equivalent to p-2 */
  font-size: 1rem; /* equivalent to text-base */
  font-weight: 500; /* equivalent to font-medium */
  color: #6b7280; /* equivalent to text-gray-500 */
  cursor: pointer;
  &:hover {
    background-color: ${q.colors.gray150};
    color: ${q.colors.primary};
  }
  &[data-state="active"] {
    background-color: ${q.colors.gray150}; /* Background color for active tab */
    color: ${q.colors.primary}; /* Text color for active tab */
  }
`,eM=G.iframe`
  width: 100%;
  min-height: 28rem;
  margin-top: 1rem; 
  border-radius: 0.5rem; 
`,tM=G.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,nM=G.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.375rem; /* equivalent to gap-1.5 */

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`,w2=G.p`
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem; /* equivalent to mb-2 */
`,rM=G.p`
  color: ${e=>e.theme.colors.primary};
  font-size: 0.875rem; /* equivalent to text-sm */
`,iM=()=>c.jsx(e7,{theme:q,children:c.jsx(JD,{children:c.jsxs(TS,{defaultValue:"map",children:[c.jsxs(ZD,{children:[c.jsx(x2,{value:"map",children:"Locate Us"}),c.jsx(x2,{value:"picture",children:"Pictorial View"})]}),c.jsxs(Rg,{value:"map",children:[c.jsx(w2,{children:"University Of Ghana, Legon Campus. Inside Rips Building, last floor."}),c.jsx(rM,{children:"Parking available at the venue."}),c.jsx(eM,{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63526.47022923907!2d-0.225076!3d5.6544982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d35c7bc40fd%3A0x760b35f47b34835d!2sComputer%20Science%20Department%2C%20University%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1721946604438!5m2!1sen!2sgh"})]}),c.jsxs(Rg,{value:"picture",children:[c.jsx(w2,{children:" Pictorial view of The department"}),c.jsxs(tM,{children:[c.jsx("img",{src:"/banner0.JPG",alt:"ISSER Pagoda",className:"w-full object-cover bg-overlay-dark-50 rounded-2xl md:h-[360px]",width:250,height:150}),c.jsxs(nM,{children:[c.jsx("img",{src:"/banner1.JPG",alt:"ISSER Pagoda",className:"w-full object-cover bg-overlay-dark-50 rounded-2xl md:h-[180px]",width:250,height:150}),c.jsx("img",{src:"/banner2.JPG",alt:"ISSER Pagoda",className:"w-full object-cover bg-overlay-dark-50 rounded-2xl md:h-[180px]",width:250,height:150})]})]})]})]})})}),{colors:kS}=q,oM=G.section`

  padding: 4rem 1rem; /* py-16 px-4 */
  color: #6b7280; /* text-gray-500 */
  margin: 5rem auto;
  background-color: ${kS.primary100}
`,aM=G.div`
  max-width: 1280px; /* equivalent to mx-auto */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* gap-8 */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,sM=G.div`
  &:first-child {
    h2 {
      font-size: 1.875rem; /* text-3xl */
      font-weight: 600; /* font-semibold */
      margin-bottom: 1rem; /* mb-4 */
      color: ${kS.primary}
    }
  }
`,$S=()=>c.jsx(oM,{id:"contact",children:c.jsxs(aM,{children:[c.jsxs(sM,{children:[c.jsx("h2",{children:"Venue Details"}),c.jsx(iM,{})]}),c.jsx(nD,{})]})}),lM=yt`
  query Data {
    contactUs {
      data {
        attributes {
          subtitle
          title
          contactImage {
            data {
              attributes {
                mime
                url
              }
            }
          }
        }
      }
    }
  }
`,cM=()=>vt(Yo,lM),uM=e=>{const t={};if(Object.keys(e).length){const n=e.contactUs.data.attributes;return t.title=n.title,t.subtitle=n.subtitle,t.contactImage=n.contactImage,t}return null},DS=()=>gt({queryKey:["contact"],queryFn:cM,select:uM});var dM=function(t){return fM(t)&&!hM(t)};function fM(e){return!!e&&typeof e=="object"}function hM(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||gM(e)}var pM=typeof Symbol=="function"&&Symbol.for,mM=pM?Symbol.for("react.element"):60103;function gM(e){return e.$$typeof===mM}function vM(e){return Array.isArray(e)?[]:{}}function zd(e,t){return t.clone!==!1&&t.isMergeableObject(e)?mc(vM(e),e,t):e}function yM(e,t,n){return e.concat(t).map(function(r){return zd(r,n)})}function AM(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=zd(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=zd(t[i],n):r[i]=mc(e[i],t[i],n)}),r}function mc(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||yM,n.isMergeableObject=n.isMergeableObject||dM;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):AM(e,t,n):zd(t,n)}mc.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return mc(r,i,n)},{})};var Og=mc,MS=typeof global=="object"&&global&&global.Object===Object&&global,EM=typeof self=="object"&&self&&self.Object===Object&&self,Lr=MS||EM||Function("return this")(),Yi=Lr.Symbol,LS=Object.prototype,bM=LS.hasOwnProperty,xM=LS.toString,tl=Yi?Yi.toStringTag:void 0;function wM(e){var t=bM.call(e,tl),n=e[tl];try{e[tl]=void 0;var r=!0}catch{}var i=xM.call(e);return r&&(t?e[tl]=n:delete e[tl]),i}var SM=Object.prototype,CM=SM.toString;function TM(e){return CM.call(e)}var IM="[object Null]",PM="[object Undefined]",S2=Yi?Yi.toStringTag:void 0;function Zo(e){return e==null?e===void 0?PM:IM:S2&&S2 in Object(e)?wM(e):TM(e)}function FS(e,t){return function(n){return e(t(n))}}var W1=FS(Object.getPrototypeOf,Object);function ea(e){return e!=null&&typeof e=="object"}var _M="[object Object]",RM=Function.prototype,OM=Object.prototype,US=RM.toString,jM=OM.hasOwnProperty,NM=US.call(Object);function C2(e){if(!ea(e)||Zo(e)!=_M)return!1;var t=W1(e);if(t===null)return!0;var n=jM.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&US.call(n)==NM}function kM(){this.__data__=[],this.size=0}function BS(e,t){return e===t||e!==e&&t!==t}function Zf(e,t){for(var n=e.length;n--;)if(BS(e[n][0],t))return n;return-1}var $M=Array.prototype,DM=$M.splice;function MM(e){var t=this.__data__,n=Zf(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():DM.call(t,n,1),--this.size,!0}function LM(e){var t=this.__data__,n=Zf(t,e);return n<0?void 0:t[n][1]}function FM(e){return Zf(this.__data__,e)>-1}function UM(e,t){var n=this.__data__,r=Zf(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function li(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}li.prototype.clear=kM;li.prototype.delete=MM;li.prototype.get=LM;li.prototype.has=FM;li.prototype.set=UM;function BM(){this.__data__=new li,this.size=0}function zM(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function VM(e){return this.__data__.get(e)}function HM(e){return this.__data__.has(e)}function $c(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var QM="[object AsyncFunction]",WM="[object Function]",GM="[object GeneratorFunction]",qM="[object Proxy]";function zS(e){if(!$c(e))return!1;var t=Zo(e);return t==WM||t==GM||t==QM||t==qM}var Pp=Lr["__core-js_shared__"],T2=function(){var e=/[^.]+$/.exec(Pp&&Pp.keys&&Pp.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function YM(e){return!!T2&&T2 in e}var KM=Function.prototype,XM=KM.toString;function ta(e){if(e!=null){try{return XM.call(e)}catch{}try{return e+""}catch{}}return""}var JM=/[\\^$.*+?()[\]{}|]/g,ZM=/^\[object .+?Constructor\]$/,eL=Function.prototype,tL=Object.prototype,nL=eL.toString,rL=tL.hasOwnProperty,iL=RegExp("^"+nL.call(rL).replace(JM,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function oL(e){if(!$c(e)||YM(e))return!1;var t=zS(e)?iL:ZM;return t.test(ta(e))}function aL(e,t){return e==null?void 0:e[t]}function na(e,t){var n=aL(e,t);return oL(n)?n:void 0}var gc=na(Lr,"Map"),vc=na(Object,"create");function sL(){this.__data__=vc?vc(null):{},this.size=0}function lL(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var cL="__lodash_hash_undefined__",uL=Object.prototype,dL=uL.hasOwnProperty;function fL(e){var t=this.__data__;if(vc){var n=t[e];return n===cL?void 0:n}return dL.call(t,e)?t[e]:void 0}var hL=Object.prototype,pL=hL.hasOwnProperty;function mL(e){var t=this.__data__;return vc?t[e]!==void 0:pL.call(t,e)}var gL="__lodash_hash_undefined__";function vL(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=vc&&t===void 0?gL:t,this}function Qo(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qo.prototype.clear=sL;Qo.prototype.delete=lL;Qo.prototype.get=fL;Qo.prototype.has=mL;Qo.prototype.set=vL;function yL(){this.size=0,this.__data__={hash:new Qo,map:new(gc||li),string:new Qo}}function AL(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function eh(e,t){var n=e.__data__;return AL(t)?n[typeof t=="string"?"string":"hash"]:n.map}function EL(e){var t=eh(this,e).delete(e);return this.size-=t?1:0,t}function bL(e){return eh(this,e).get(e)}function xL(e){return eh(this,e).has(e)}function wL(e,t){var n=eh(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function io(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}io.prototype.clear=yL;io.prototype.delete=EL;io.prototype.get=bL;io.prototype.has=xL;io.prototype.set=wL;var SL=200;function CL(e,t){var n=this.__data__;if(n instanceof li){var r=n.__data__;if(!gc||r.length<SL-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new io(r)}return n.set(e,t),this.size=n.size,this}function Ns(e){var t=this.__data__=new li(e);this.size=t.size}Ns.prototype.clear=BM;Ns.prototype.delete=zM;Ns.prototype.get=VM;Ns.prototype.has=HM;Ns.prototype.set=CL;function TL(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var I2=function(){try{var e=na(Object,"defineProperty");return e({},"",{}),e}catch{}}();function VS(e,t,n){t=="__proto__"&&I2?I2(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var IL=Object.prototype,PL=IL.hasOwnProperty;function HS(e,t,n){var r=e[t];(!(PL.call(e,t)&&BS(r,n))||n===void 0&&!(t in e))&&VS(e,t,n)}function th(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=void 0;l===void 0&&(l=e[s]),i?VS(n,s,l):HS(n,s,l)}return n}function _L(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var RL="[object Arguments]";function P2(e){return ea(e)&&Zo(e)==RL}var QS=Object.prototype,OL=QS.hasOwnProperty,jL=QS.propertyIsEnumerable,NL=P2(function(){return arguments}())?P2:function(e){return ea(e)&&OL.call(e,"callee")&&!jL.call(e,"callee")},Dc=Array.isArray;function kL(){return!1}var WS=typeof Sn=="object"&&Sn&&!Sn.nodeType&&Sn,_2=WS&&typeof Cn=="object"&&Cn&&!Cn.nodeType&&Cn,$L=_2&&_2.exports===WS,R2=$L?Lr.Buffer:void 0,DL=R2?R2.isBuffer:void 0,GS=DL||kL,ML=9007199254740991,LL=/^(?:0|[1-9]\d*)$/;function FL(e,t){var n=typeof e;return t=t??ML,!!t&&(n=="number"||n!="symbol"&&LL.test(e))&&e>-1&&e%1==0&&e<t}var UL=9007199254740991;function qS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=UL}var BL="[object Arguments]",zL="[object Array]",VL="[object Boolean]",HL="[object Date]",QL="[object Error]",WL="[object Function]",GL="[object Map]",qL="[object Number]",YL="[object Object]",KL="[object RegExp]",XL="[object Set]",JL="[object String]",ZL="[object WeakMap]",eF="[object ArrayBuffer]",tF="[object DataView]",nF="[object Float32Array]",rF="[object Float64Array]",iF="[object Int8Array]",oF="[object Int16Array]",aF="[object Int32Array]",sF="[object Uint8Array]",lF="[object Uint8ClampedArray]",cF="[object Uint16Array]",uF="[object Uint32Array]",Qe={};Qe[nF]=Qe[rF]=Qe[iF]=Qe[oF]=Qe[aF]=Qe[sF]=Qe[lF]=Qe[cF]=Qe[uF]=!0;Qe[BL]=Qe[zL]=Qe[eF]=Qe[VL]=Qe[tF]=Qe[HL]=Qe[QL]=Qe[WL]=Qe[GL]=Qe[qL]=Qe[YL]=Qe[KL]=Qe[XL]=Qe[JL]=Qe[ZL]=!1;function dF(e){return ea(e)&&qS(e.length)&&!!Qe[Zo(e)]}function G1(e){return function(t){return e(t)}}var YS=typeof Sn=="object"&&Sn&&!Sn.nodeType&&Sn,Ll=YS&&typeof Cn=="object"&&Cn&&!Cn.nodeType&&Cn,fF=Ll&&Ll.exports===YS,_p=fF&&MS.process,ws=function(){try{var e=Ll&&Ll.require&&Ll.require("util").types;return e||_p&&_p.binding&&_p.binding("util")}catch{}}(),O2=ws&&ws.isTypedArray,hF=O2?G1(O2):dF,pF=Object.prototype,mF=pF.hasOwnProperty;function KS(e,t){var n=Dc(e),r=!n&&NL(e),i=!n&&!r&&GS(e),o=!n&&!r&&!i&&hF(e),a=n||r||i||o,s=a?_L(e.length,String):[],l=s.length;for(var u in e)(t||mF.call(e,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||FL(u,l)))&&s.push(u);return s}var gF=Object.prototype;function q1(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||gF;return e===n}var vF=FS(Object.keys,Object),yF=Object.prototype,AF=yF.hasOwnProperty;function EF(e){if(!q1(e))return vF(e);var t=[];for(var n in Object(e))AF.call(e,n)&&n!="constructor"&&t.push(n);return t}function XS(e){return e!=null&&qS(e.length)&&!zS(e)}function Y1(e){return XS(e)?KS(e):EF(e)}function bF(e,t){return e&&th(t,Y1(t),e)}function xF(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var wF=Object.prototype,SF=wF.hasOwnProperty;function CF(e){if(!$c(e))return xF(e);var t=q1(e),n=[];for(var r in e)r=="constructor"&&(t||!SF.call(e,r))||n.push(r);return n}function K1(e){return XS(e)?KS(e,!0):CF(e)}function TF(e,t){return e&&th(t,K1(t),e)}var JS=typeof Sn=="object"&&Sn&&!Sn.nodeType&&Sn,j2=JS&&typeof Cn=="object"&&Cn&&!Cn.nodeType&&Cn,IF=j2&&j2.exports===JS,N2=IF?Lr.Buffer:void 0,k2=N2?N2.allocUnsafe:void 0;function PF(e,t){if(t)return e.slice();var n=e.length,r=k2?k2(n):new e.constructor(n);return e.copy(r),r}function ZS(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function _F(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function eC(){return[]}var RF=Object.prototype,OF=RF.propertyIsEnumerable,$2=Object.getOwnPropertySymbols,X1=$2?function(e){return e==null?[]:(e=Object(e),_F($2(e),function(t){return OF.call(e,t)}))}:eC;function jF(e,t){return th(e,X1(e),t)}function tC(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var NF=Object.getOwnPropertySymbols,nC=NF?function(e){for(var t=[];e;)tC(t,X1(e)),e=W1(e);return t}:eC;function kF(e,t){return th(e,nC(e),t)}function rC(e,t,n){var r=t(e);return Dc(e)?r:tC(r,n(e))}function $F(e){return rC(e,Y1,X1)}function DF(e){return rC(e,K1,nC)}var jg=na(Lr,"DataView"),Ng=na(Lr,"Promise"),kg=na(Lr,"Set"),$g=na(Lr,"WeakMap"),D2="[object Map]",MF="[object Object]",M2="[object Promise]",L2="[object Set]",F2="[object WeakMap]",U2="[object DataView]",LF=ta(jg),FF=ta(gc),UF=ta(Ng),BF=ta(kg),zF=ta($g),Gr=Zo;(jg&&Gr(new jg(new ArrayBuffer(1)))!=U2||gc&&Gr(new gc)!=D2||Ng&&Gr(Ng.resolve())!=M2||kg&&Gr(new kg)!=L2||$g&&Gr(new $g)!=F2)&&(Gr=function(e){var t=Zo(e),n=t==MF?e.constructor:void 0,r=n?ta(n):"";if(r)switch(r){case LF:return U2;case FF:return D2;case UF:return M2;case BF:return L2;case zF:return F2}return t});var VF=Object.prototype,HF=VF.hasOwnProperty;function QF(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&HF.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var B2=Lr.Uint8Array;function J1(e){var t=new e.constructor(e.byteLength);return new B2(t).set(new B2(e)),t}function WF(e,t){var n=t?J1(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var GF=/\w*$/;function qF(e){var t=new e.constructor(e.source,GF.exec(e));return t.lastIndex=e.lastIndex,t}var z2=Yi?Yi.prototype:void 0,V2=z2?z2.valueOf:void 0;function YF(e){return V2?Object(V2.call(e)):{}}function KF(e,t){var n=t?J1(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var XF="[object Boolean]",JF="[object Date]",ZF="[object Map]",eU="[object Number]",tU="[object RegExp]",nU="[object Set]",rU="[object String]",iU="[object Symbol]",oU="[object ArrayBuffer]",aU="[object DataView]",sU="[object Float32Array]",lU="[object Float64Array]",cU="[object Int8Array]",uU="[object Int16Array]",dU="[object Int32Array]",fU="[object Uint8Array]",hU="[object Uint8ClampedArray]",pU="[object Uint16Array]",mU="[object Uint32Array]";function gU(e,t,n){var r=e.constructor;switch(t){case oU:return J1(e);case XF:case JF:return new r(+e);case aU:return WF(e,n);case sU:case lU:case cU:case uU:case dU:case fU:case hU:case pU:case mU:return KF(e,n);case ZF:return new r;case eU:case rU:return new r(e);case tU:return qF(e);case nU:return new r;case iU:return YF(e)}}var H2=Object.create,vU=function(){function e(){}return function(t){if(!$c(t))return{};if(H2)return H2(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function yU(e){return typeof e.constructor=="function"&&!q1(e)?vU(W1(e)):{}}var AU="[object Map]";function EU(e){return ea(e)&&Gr(e)==AU}var Q2=ws&&ws.isMap,bU=Q2?G1(Q2):EU,xU="[object Set]";function wU(e){return ea(e)&&Gr(e)==xU}var W2=ws&&ws.isSet,SU=W2?G1(W2):wU,CU=1,TU=2,IU=4,iC="[object Arguments]",PU="[object Array]",_U="[object Boolean]",RU="[object Date]",OU="[object Error]",oC="[object Function]",jU="[object GeneratorFunction]",NU="[object Map]",kU="[object Number]",aC="[object Object]",$U="[object RegExp]",DU="[object Set]",MU="[object String]",LU="[object Symbol]",FU="[object WeakMap]",UU="[object ArrayBuffer]",BU="[object DataView]",zU="[object Float32Array]",VU="[object Float64Array]",HU="[object Int8Array]",QU="[object Int16Array]",WU="[object Int32Array]",GU="[object Uint8Array]",qU="[object Uint8ClampedArray]",YU="[object Uint16Array]",KU="[object Uint32Array]",Le={};Le[iC]=Le[PU]=Le[UU]=Le[BU]=Le[_U]=Le[RU]=Le[zU]=Le[VU]=Le[HU]=Le[QU]=Le[WU]=Le[NU]=Le[kU]=Le[aC]=Le[$U]=Le[DU]=Le[MU]=Le[LU]=Le[GU]=Le[qU]=Le[YU]=Le[KU]=!0;Le[OU]=Le[oC]=Le[FU]=!1;function Fl(e,t,n,r,i,o){var a,s=t&CU,l=t&TU,u=t&IU;if(a!==void 0)return a;if(!$c(e))return e;var d=Dc(e);if(d){if(a=QF(e),!s)return ZS(e,a)}else{var h=Gr(e),f=h==oC||h==jU;if(GS(e))return PF(e,s);if(h==aC||h==iC||f&&!i){if(a=l||f?{}:yU(e),!s)return l?kF(e,TF(a,e)):jF(e,bF(a,e))}else{if(!Le[h])return i?e:{};a=gU(e,h,s)}}o||(o=new Ns);var p=o.get(e);if(p)return p;o.set(e,a),SU(e)?e.forEach(function(S){a.add(Fl(S,t,n,S,e,o))}):bU(e)&&e.forEach(function(S,E){a.set(E,Fl(S,t,n,E,e,o))});var v=u?l?DF:$F:l?K1:Y1,g=d?void 0:v(e);return TL(g||e,function(S,E){g&&(E=S,S=e[E]),HS(a,E,Fl(S,t,n,E,e,o))}),a}var XU=1,JU=4;function bl(e){return Fl(e,XU|JU)}var G2=Array.isArray,q2=Object.keys,ZU=Object.prototype.hasOwnProperty,eB=typeof Element<"u";function Dg(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=G2(e),r=G2(t),i,o,a;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Dg(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==t.toString();var h=q2(e);if(o=h.length,o!==q2(t).length)return!1;for(i=o;i--!==0;)if(!ZU.call(t,h[i]))return!1;if(eB&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=h[i],!(a==="_owner"&&e.$$typeof)&&!Dg(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var tB=function(t,n){try{return Dg(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const wi=Pn(tB);var nB=4;function Y2(e){return Fl(e,nB)}function sC(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var rB="[object Symbol]";function Z1(e){return typeof e=="symbol"||ea(e)&&Zo(e)==rB}var iB="Expected a function";function ev(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(iB);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ev.Cache||io),n}ev.Cache=io;var oB=500;function aB(e){var t=ev(e,function(r){return n.size===oB&&n.clear(),r}),n=t.cache;return t}var sB=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lB=/\\(\\)?/g,cB=aB(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(sB,function(n,r,i,o){t.push(i?o.replace(lB,"$1"):r||n)}),t}),uB=1/0;function dB(e){if(typeof e=="string"||Z1(e))return e;var t=e+"";return t=="0"&&1/e==-uB?"-0":t}var fB=1/0,K2=Yi?Yi.prototype:void 0,X2=K2?K2.toString:void 0;function lC(e){if(typeof e=="string")return e;if(Dc(e))return sC(e,lC)+"";if(Z1(e))return X2?X2.call(e):"";var t=e+"";return t=="0"&&1/e==-fB?"-0":t}function hB(e){return e==null?"":lC(e)}function cC(e){return Dc(e)?sC(e,dB):Z1(e)?[e]:ZS(cB(hB(e)))}var uC={exports:{}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It=typeof Symbol=="function"&&Symbol.for,tv=It?Symbol.for("react.element"):60103,nv=It?Symbol.for("react.portal"):60106,nh=It?Symbol.for("react.fragment"):60107,rh=It?Symbol.for("react.strict_mode"):60108,ih=It?Symbol.for("react.profiler"):60114,oh=It?Symbol.for("react.provider"):60109,ah=It?Symbol.for("react.context"):60110,rv=It?Symbol.for("react.async_mode"):60111,sh=It?Symbol.for("react.concurrent_mode"):60111,lh=It?Symbol.for("react.forward_ref"):60112,ch=It?Symbol.for("react.suspense"):60113,pB=It?Symbol.for("react.suspense_list"):60120,uh=It?Symbol.for("react.memo"):60115,dh=It?Symbol.for("react.lazy"):60116,mB=It?Symbol.for("react.block"):60121,gB=It?Symbol.for("react.fundamental"):60117,vB=It?Symbol.for("react.responder"):60118,yB=It?Symbol.for("react.scope"):60119;function jn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tv:switch(e=e.type,e){case rv:case sh:case nh:case ih:case rh:case ch:return e;default:switch(e=e&&e.$$typeof,e){case ah:case lh:case dh:case uh:case oh:return e;default:return t}}case nv:return t}}}function dC(e){return jn(e)===sh}Me.AsyncMode=rv;Me.ConcurrentMode=sh;Me.ContextConsumer=ah;Me.ContextProvider=oh;Me.Element=tv;Me.ForwardRef=lh;Me.Fragment=nh;Me.Lazy=dh;Me.Memo=uh;Me.Portal=nv;Me.Profiler=ih;Me.StrictMode=rh;Me.Suspense=ch;Me.isAsyncMode=function(e){return dC(e)||jn(e)===rv};Me.isConcurrentMode=dC;Me.isContextConsumer=function(e){return jn(e)===ah};Me.isContextProvider=function(e){return jn(e)===oh};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tv};Me.isForwardRef=function(e){return jn(e)===lh};Me.isFragment=function(e){return jn(e)===nh};Me.isLazy=function(e){return jn(e)===dh};Me.isMemo=function(e){return jn(e)===uh};Me.isPortal=function(e){return jn(e)===nv};Me.isProfiler=function(e){return jn(e)===ih};Me.isStrictMode=function(e){return jn(e)===rh};Me.isSuspense=function(e){return jn(e)===ch};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nh||e===sh||e===ih||e===rh||e===ch||e===pB||typeof e=="object"&&e!==null&&(e.$$typeof===dh||e.$$typeof===uh||e.$$typeof===oh||e.$$typeof===ah||e.$$typeof===lh||e.$$typeof===gB||e.$$typeof===vB||e.$$typeof===yB||e.$$typeof===mB)};Me.typeOf=jn;uC.exports=Me;var AB=uC.exports,iv=AB,EB={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bB={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xB={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ov={};ov[iv.ForwardRef]=xB;ov[iv.Memo]=fC;function J2(e){return iv.isMemo(e)?fC:ov[e.$$typeof]||EB}var wB=Object.defineProperty,SB=Object.getOwnPropertyNames,Z2=Object.getOwnPropertySymbols,CB=Object.getOwnPropertyDescriptor,TB=Object.getPrototypeOf,eE=Object.prototype;function hC(e,t,n){if(typeof t!="string"){if(eE){var r=TB(t);r&&r!==eE&&hC(e,r,n)}var i=SB(t);Z2&&(i=i.concat(Z2(t)));for(var o=J2(e),a=J2(t),s=0;s<i.length;++s){var l=i[s];if(!bB[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=CB(t,l);try{wB(e,l,u)}catch{}}}}return e}var IB=hC;const PB=Pn(IB);function $e(){return $e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(this,arguments)}function pC(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function $i(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var fh=m.createContext(void 0);fh.displayName="FormikContext";var _B=fh.Provider,RB=fh.Consumer;function mC(){var e=m.useContext(fh);return e}var nE=function(t){return Array.isArray(t)&&t.length===0},jt=function(t){return typeof t=="function"},Mc=function(t){return t!==null&&typeof t=="object"},OB=function(t){return String(Math.floor(Number(t)))===t},Rp=function(t){return Object.prototype.toString.call(t)==="[object String]"},gC=function(t){return m.Children.count(t)===0},Op=function(t){return Mc(t)&&jt(t.then)};function Je(e,t,n,r){r===void 0&&(r=0);for(var i=cC(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function jr(e,t,n){for(var r=Y2(e),i=r,o=0,a=cC(t);o<a.length-1;o++){var s=a[o],l=Je(e,a.slice(0,o+1));if(l&&(Mc(l)||Array.isArray(l)))i=i[s]=Y2(l);else{var u=a[o+1];i=i[s]=OB(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[a[o]]===n?e:(n===void 0?delete i[a[o]]:i[a[o]]=n,o===0&&n===void 0&&delete r[a[o]],r)}function vC(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];Mc(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},vC(s,t,n,r[a])):r[a]=t}return r}function jB(e,t){switch(t.type){case"SET_VALUES":return $e({},e,{values:t.payload});case"SET_TOUCHED":return $e({},e,{touched:t.payload});case"SET_ERRORS":return wi(e.errors,t.payload)?e:$e({},e,{errors:t.payload});case"SET_STATUS":return $e({},e,{status:t.payload});case"SET_ISSUBMITTING":return $e({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return $e({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return $e({},e,{values:jr(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return $e({},e,{touched:jr(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return $e({},e,{errors:jr(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return $e({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return $e({},e,{touched:vC(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $e({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $e({},e,{isSubmitting:!1});default:return e}}var ao={},Tu={};function NB(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,d=e.onSubmit,h=$i(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=$e({validateOnChange:n,validateOnBlur:i,validateOnMount:a,onSubmit:d},h),p=m.useRef(f.initialValues),v=m.useRef(f.initialErrors||ao),g=m.useRef(f.initialTouched||Tu),S=m.useRef(f.initialStatus),E=m.useRef(!1),A=m.useRef({});m.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var y=m.useState(0),x=y[1],w=m.useRef({values:bl(f.initialValues),errors:bl(f.initialErrors)||ao,touched:bl(f.initialTouched)||Tu,status:bl(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),C=w.current,b=m.useCallback(function(F){var X=w.current;w.current=jB(X,F),X!==w.current&&x(function(ie){return ie+1})},[]),T=m.useCallback(function(F,X){return new Promise(function(ie,oe){var fe=f.validate(F,X);fe==null?ie(ao):Op(fe)?fe.then(function(Ie){ie(Ie||ao)},function(Ie){oe(Ie)}):ie(fe)})},[f.validate]),_=m.useCallback(function(F,X){var ie=f.validationSchema,oe=jt(ie)?ie(X):ie,fe=X&&oe.validateAt?oe.validateAt(X,F):DB(F,oe);return new Promise(function(Ie,ct){fe.then(function(){Ie(ao)},function(nn){nn.name==="ValidationError"?Ie($B(nn)):ct(nn)})})},[f.validationSchema]),$=m.useCallback(function(F,X){return new Promise(function(ie){return ie(A.current[F].validate(X))})},[]),M=m.useCallback(function(F){var X=Object.keys(A.current).filter(function(oe){return jt(A.current[oe].validate)}),ie=X.length>0?X.map(function(oe){return $(oe,Je(F,oe))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(ie).then(function(oe){return oe.reduce(function(fe,Ie,ct){return Ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||Ie&&(fe=jr(fe,X[ct],Ie)),fe},{})})},[$]),R=m.useCallback(function(F){return Promise.all([M(F),f.validationSchema?_(F):{},f.validate?T(F):{}]).then(function(X){var ie=X[0],oe=X[1],fe=X[2],Ie=Og.all([ie,oe,fe],{arrayMerge:MB});return Ie})},[f.validate,f.validationSchema,M,T,_]),U=Mn(function(F){return F===void 0&&(F=C.values),b({type:"SET_ISVALIDATING",payload:!0}),R(F).then(function(X){return E.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:X})),X})});m.useEffect(function(){a&&E.current===!0&&wi(p.current,f.initialValues)&&U(p.current)},[a,U]);var I=m.useCallback(function(F){var X=F&&F.values?F.values:p.current,ie=F&&F.errors?F.errors:v.current?v.current:f.initialErrors||{},oe=F&&F.touched?F.touched:g.current?g.current:f.initialTouched||{},fe=F&&F.status?F.status:S.current?S.current:f.initialStatus;p.current=X,v.current=ie,g.current=oe,S.current=fe;var Ie=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!F&&!!F.isSubmitting,errors:ie,touched:oe,status:fe,values:X,isValidating:!!F&&!!F.isValidating,submitCount:F&&F.submitCount&&typeof F.submitCount=="number"?F.submitCount:0}})};if(f.onReset){var ct=f.onReset(C.values,ui);Op(ct)?ct.then(Ie):Ie()}else Ie()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);m.useEffect(function(){E.current===!0&&!wi(p.current,f.initialValues)&&u&&(p.current=f.initialValues,I(),a&&U(p.current))},[u,f.initialValues,I,a,U]),m.useEffect(function(){u&&E.current===!0&&!wi(v.current,f.initialErrors)&&(v.current=f.initialErrors||ao,b({type:"SET_ERRORS",payload:f.initialErrors||ao}))},[u,f.initialErrors]),m.useEffect(function(){u&&E.current===!0&&!wi(g.current,f.initialTouched)&&(g.current=f.initialTouched||Tu,b({type:"SET_TOUCHED",payload:f.initialTouched||Tu}))},[u,f.initialTouched]),m.useEffect(function(){u&&E.current===!0&&!wi(S.current,f.initialStatus)&&(S.current=f.initialStatus,b({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var k=Mn(function(F){if(A.current[F]&&jt(A.current[F].validate)){var X=Je(C.values,F),ie=A.current[F].validate(X);return Op(ie)?(b({type:"SET_ISVALIDATING",payload:!0}),ie.then(function(oe){return oe}).then(function(oe){b({type:"SET_FIELD_ERROR",payload:{field:F,value:oe}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:F,value:ie}}),Promise.resolve(ie))}else if(f.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),_(C.values,F).then(function(oe){return oe}).then(function(oe){b({type:"SET_FIELD_ERROR",payload:{field:F,value:Je(oe,F)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),z=m.useCallback(function(F,X){var ie=X.validate;A.current[F]={validate:ie}},[]),Y=m.useCallback(function(F){delete A.current[F]},[]),D=Mn(function(F,X){b({type:"SET_TOUCHED",payload:F});var ie=X===void 0?i:X;return ie?U(C.values):Promise.resolve()}),H=m.useCallback(function(F){b({type:"SET_ERRORS",payload:F})},[]),J=Mn(function(F,X){var ie=jt(F)?F(C.values):F;b({type:"SET_VALUES",payload:ie});var oe=X===void 0?n:X;return oe?U(ie):Promise.resolve()}),ae=m.useCallback(function(F,X){b({type:"SET_FIELD_ERROR",payload:{field:F,value:X}})},[]),se=Mn(function(F,X,ie){b({type:"SET_FIELD_VALUE",payload:{field:F,value:X}});var oe=ie===void 0?n:ie;return oe?U(jr(C.values,F,X)):Promise.resolve()}),Be=m.useCallback(function(F,X){var ie=X,oe=F,fe;if(!Rp(F)){F.persist&&F.persist();var Ie=F.target?F.target:F.currentTarget,ct=Ie.type,nn=Ie.name,$s=Ie.id,$n=Ie.value,Fc=Ie.checked,xh=Ie.outerHTML,Ds=Ie.options,wh=Ie.multiple;ie=X||nn||$s,oe=/number|range/.test(ct)?(fe=parseFloat($n),isNaN(fe)?"":fe):/checkbox/.test(ct)?FB(Je(C.values,ie),Fc,$n):Ds&&wh?LB(Ds):$n}ie&&se(ie,oe)},[se,C.values]),Te=Mn(function(F){if(Rp(F))return function(X){return Be(X,F)};Be(F)}),ze=Mn(function(F,X,ie){X===void 0&&(X=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:F,value:X}});var oe=ie===void 0?i:ie;return oe?U(C.values):Promise.resolve()}),Ge=m.useCallback(function(F,X){F.persist&&F.persist();var ie=F.target,oe=ie.name,fe=ie.id,Ie=ie.outerHTML,ct=X||oe||fe;ze(ct,!0)},[ze]),lt=Mn(function(F){if(Rp(F))return function(X){return Ge(X,F)};Ge(F)}),Nn=m.useCallback(function(F){jt(F)?b({type:"SET_FORMIK_STATE",payload:F}):b({type:"SET_FORMIK_STATE",payload:function(){return F}})},[]),kn=m.useCallback(function(F){b({type:"SET_STATUS",payload:F})},[]),ci=m.useCallback(function(F){b({type:"SET_ISSUBMITTING",payload:F})},[]),yr=Mn(function(){return b({type:"SUBMIT_ATTEMPT"}),U().then(function(F){var X=F instanceof Error,ie=!X&&Object.keys(F).length===0;if(ie){var oe;try{if(oe=Lc(),oe===void 0)return}catch(fe){throw fe}return Promise.resolve(oe).then(function(fe){return E.current&&b({type:"SUBMIT_SUCCESS"}),fe}).catch(function(fe){if(E.current)throw b({type:"SUBMIT_FAILURE"}),fe})}else if(E.current&&(b({type:"SUBMIT_FAILURE"}),X))throw F})}),qe=Mn(function(F){F&&F.preventDefault&&jt(F.preventDefault)&&F.preventDefault(),F&&F.stopPropagation&&jt(F.stopPropagation)&&F.stopPropagation(),yr().catch(function(X){console.warn("Warning: An unhandled error was caught from submitForm()",X)})}),ui={resetForm:I,validateForm:U,validateField:k,setErrors:H,setFieldError:ae,setFieldTouched:ze,setFieldValue:se,setStatus:kn,setSubmitting:ci,setTouched:D,setValues:J,setFormikState:Nn,submitForm:yr},Lc=Mn(function(){return d(C.values,ui)}),vh=Mn(function(F){F&&F.preventDefault&&jt(F.preventDefault)&&F.preventDefault(),F&&F.stopPropagation&&jt(F.stopPropagation)&&F.stopPropagation(),I()}),Fr=m.useCallback(function(F){return{value:Je(C.values,F),error:Je(C.errors,F),touched:!!Je(C.touched,F),initialValue:Je(p.current,F),initialTouched:!!Je(g.current,F),initialError:Je(v.current,F)}},[C.errors,C.touched,C.values]),yh=m.useCallback(function(F){return{setValue:function(ie,oe){return se(F,ie,oe)},setTouched:function(ie,oe){return ze(F,ie,oe)},setError:function(ie){return ae(F,ie)}}},[se,ze,ae]),Ah=m.useCallback(function(F){var X=Mc(F),ie=X?F.name:F,oe=Je(C.values,ie),fe={name:ie,value:oe,onChange:Te,onBlur:lt};if(X){var Ie=F.type,ct=F.value,nn=F.as,$s=F.multiple;Ie==="checkbox"?ct===void 0?fe.checked=!!oe:(fe.checked=!!(Array.isArray(oe)&&~oe.indexOf(ct)),fe.value=ct):Ie==="radio"?(fe.checked=oe===ct,fe.value=ct):nn==="select"&&$s&&(fe.value=fe.value||[],fe.multiple=!0)}return fe},[lt,Te,C.values]),ks=m.useMemo(function(){return!wi(p.current,C.values)},[p.current,C.values]),Eh=m.useMemo(function(){return typeof s<"u"?ks?C.errors&&Object.keys(C.errors).length===0:s!==!1&&jt(s)?s(f):s:C.errors&&Object.keys(C.errors).length===0},[s,ks,C.errors,f]),bh=$e({},C,{initialValues:p.current,initialErrors:v.current,initialTouched:g.current,initialStatus:S.current,handleBlur:lt,handleChange:Te,handleReset:vh,handleSubmit:qe,resetForm:I,setErrors:H,setFormikState:Nn,setFieldTouched:ze,setFieldValue:se,setFieldError:ae,setStatus:kn,setSubmitting:ci,setTouched:D,setValues:J,submitForm:yr,validateForm:U,validateField:k,isValid:Eh,dirty:ks,unregisterField:Y,registerField:z,getFieldProps:Ah,getFieldMeta:Fr,getFieldHelpers:yh,validateOnBlur:i,validateOnChange:n,validateOnMount:a});return bh}function kB(e){var t=NB(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return m.useImperativeHandle(o,function(){return t}),m.createElement(_B,{value:t},n?m.createElement(n,t):i?i(t):r?jt(r)?r(t):gC(r)?null:m.Children.only(r):null)}function $B(e){var t={};if(e.inner){if(e.inner.length===0)return jr(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var a=o;Je(t,a.path)||(t=jr(t,a.path,a.message))}}return t}function DB(e,t,n,r){n===void 0&&(n=!1);var i=Mg(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:i})}function Mg(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||C2(i)?Mg(i):i!==""?i:void 0}):C2(e[r])?t[r]=Mg(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function MB(e,t,n){var r=e.slice();return t.forEach(function(o,a){if(typeof r[a]>"u"){var s=n.clone!==!1,l=s&&n.isMergeableObject(o);r[a]=l?Og(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[a]=Og(e[a],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function LB(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function FB(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var UB=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?m.useLayoutEffect:m.useEffect;function Mn(e){var t=m.useRef(e);return UB(function(){t.current=e}),m.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function nl(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=e.className,l=$i(e,["validate","name","render","children","as","component","className"]),u=mC(),d=$i(u,["validate","validationSchema"]),h=d.registerField,f=d.unregisterField;m.useEffect(function(){return h(n,{validate:t}),function(){f(n)}},[h,f,n,t]);var p=d.getFieldProps($e({name:n},l)),v=d.getFieldMeta(n),g={field:p,form:d};if(r)return r($e({},g,{meta:v}));if(jt(i))return i($e({},g,{meta:v}));if(a){if(typeof a=="string"){var S=l.innerRef,E=$i(l,["innerRef"]);return m.createElement(a,$e({ref:S},p,E,{className:s}),i)}return m.createElement(a,$e({field:p,form:d},l,{className:s}),i)}var A=o||"input";if(typeof A=="string"){var y=l.innerRef,x=$i(l,["innerRef"]);return m.createElement(A,$e({ref:y},p,x,{className:s}),i)}return m.createElement(A,$e({},p,l,{className:s}),i)}var yC=m.forwardRef(function(e,t){var n=e.action,r=$i(e,["action"]),i=n??"#",o=mC(),a=o.handleReset,s=o.handleSubmit;return m.createElement("form",$e({onSubmit:s,ref:t,onReset:a,action:i},r))});yC.displayName="Form";function BB(e){var t=function(i){return m.createElement(RB,null,function(o){return m.createElement(e,$e({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",PB(t,e)}var zB=function(t,n,r){var i=Wo(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},VB=function(t,n,r){var i=Wo(t),o=i[n];return i[n]=i[r],i[r]=o,i},jp=function(t,n,r){var i=Wo(t);return i.splice(n,0,r),i},HB=function(t,n,r){var i=Wo(t);return i[n]=r,i},Wo=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from($e({},t,{length:n+1}))}else return[]},rE=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||Mc(i)){var o=Wo(i);return r(o)}return i}},QB=function(e){pC(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,a,s){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(h){var f=rE(s,o),p=rE(a,o),v=jr(h.values,u,o(Je(h.values,u))),g=s?f(Je(h.errors,u)):void 0,S=a?p(Je(h.touched,u)):void 0;return nE(g)&&(g=void 0),nE(S)&&(S=void 0),$e({},h,{values:v,errors:s?jr(h.errors,u,g):h.errors,touched:a?jr(h.touched,u,S):h.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(Wo(a),[bl(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return VB(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return zB(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return jp(s,o,a)},function(s){return jp(s,o,null)},function(s){return jp(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return HB(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(tE(i)),i.pop=i.pop.bind(tE(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!wi(Je(i.formik.values,i.name),Je(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?Wo(a):[];return o||(o=s[i]),jt(s.splice)&&s.splice(i,1),jt(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,u=o.name,d=o.formik,h=$i(d,["validate","validationSchema"]),f=$e({},i,{form:h,name:u});return a?m.createElement(a,f):s?s(f):l?typeof l=="function"?l(f):gC(l)?null:m.Children.only(l):null},t}(m.Component);QB.defaultProps={validateOnChange:!0};var WB=function(e){pC(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return Je(this.props.formik.errors,this.props.name)!==Je(i.formik.errors,this.props.name)||Je(this.props.formik.touched,this.props.name)!==Je(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,u=i.name,d=$i(i,["component","formik","render","children","name"]),h=Je(a.touched,u),f=Je(a.errors,u);return h&&f?s?jt(s)?s(f):null:l?jt(l)?l(f):null:o?m.createElement(o,d,f):f:null},t}(m.Component),rl=BB(WB);const GB=async(e,t,n)=>{try{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});n({success:r.ok,status:r.status,message:r.ok?"Data posted successfully.":`Failed to post data. Server responded with status ${r.status}.`})}catch(r){n({success:!1,status:-1,message:"Error posting data.",error:r})}},{colors:tr}=q,qB=G.section`
  margin-top: 3rem;
  .form {
    ${he}
    gap: 1.5rem;
    width: 100%;
    text-align: left;
    margin-top: 2.5rem;

    .field-wrapper {
      ${he}
      gap: 1.5rem;

      @media screen and (${O.small}) {
        flex-direction: row;

        > div {
          flex-basis: 50%;
        }
      }
    }

    &-field {
      & > div {
        ${As}
        align-items: baseline;
      }

      input,
      textarea {
        width: 100%;
        font-size: ${P(16)};
        padding: 0.7em 1em 0.7em 1em;
        margin-top: 0.3rem;
        border-radius: 4px;
        border: 1px solid ${tr.gray150};
        color: inherit;
        resize: none;

        &:hover {
          border-color: ${tr.gray400};
        }
      }
    }

    &-message {
      color: red;
      font-size: ${P(13)};
      line-height: 1;
      margin-top: 0.5rem;
    }

    &-label {
      font-size: ${P(14)};
      font-weight: 600;
    }

    &-cta {
      padding-block: 1em;
      margin-top: 0.1rem;
      font-size: ${P(15)};
      color: ${tr.white};
      background-color: ${tr.darkBlue};
    }
  }

  .form {
    ${he}
    gap: 1.5rem;
    width: 100%;
    text-align: left;
    margin-top: 2.5rem;

    .field-wrapper {
      ${he}
      gap: 1.5rem;

      @media screen and (${O.small}) {
        flex-direction: row;

        > div {
          flex-basis: 50%;
        }
      }
    }

    &-field {
      & > div {
        ${As}
        align-items: baseline;
      }

      input,
      textarea {
        width: 100%;
        font-size: ${P(16)};
        padding: 0.7em 1em 0.7em 1em;
        margin-top: 0.3rem;
        border-radius: 4px;
        border: 1px solid ${tr.gray150};
        color: inherit;
        resize: none;

        &:hover {
          border-color: ${tr.gray400};
        }
      }
    }

    &-message {
      color: red;
      font-size: ${P(13)};
      line-height: 1;
      margin-top: 0.5rem;
    }

    &-label {
      font-size: ${P(14)};
      font-weight: 600;
    }

    &-cta {
      padding-block: 1em;
      margin-top: 0.1rem;
      font-size: ${P(15)};
      color: ${tr.white};
      background-color: ${tr.darkBlue};
    }
  }

  .content {
    ${he}
    gap: 5rem;
    
    @media screen and (${O.medium}) {
      flex-direction: row;
      align-items: start;
      gap: 3rem;

      > div {
        flex-basis: 50%;
      }
    }

    @media screen and (${O.large1}) {
      gap: 4rem;
    }
    @media screen and (${O.large2}) {
      gap: 5rem;
    }
  }

  .left-section {
    p {
      margin-top: 1rem;
    }

    .CheckboxRoot {
      ${Tt}
      ${de(P(20))}
      border-radius: 4px;
      border: 1px solid ${tr.gray150};

      .CheckboxIndicator {
        ${Tt}
        color: ${tr.primary};
      }
    }
  }

  .right-section {

    @media screen and (${O.small}) {
      height: ${P(500)};
    }
    @media screen and (${O.medium}) {
      height: unset;
    }

    img {
      background-color: ${tr.gray100};
    }
  }

  .mail-error {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: orange;

    .mail-icon {
      font-size: 20px;
      align-self: center;
    }
  }

  .mail-success {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: green;

    .mail-icon {
      font-size: 20px;
      align-self: center;
    }
  }
`;function ra(e){this._maxSize=e,this.clear()}ra.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ra.prototype.get=function(e){return this._values[e]};ra.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var YB=/[^.^\]^[]+|(?=\[\]|\.\.)/g,AC=/^\d+$/,KB=/^\d/,XB=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,JB=/^\s*(['"]?)(.*?)(\1)\s*$/,av=512,iE=new ra(av),oE=new ra(av),aE=new ra(av),No={Cache:ra,split:Lg,normalizePath:Np,setter:function(e){var t=Np(e);return oE.get(e)||oE.set(e,function(r,i){for(var o=0,a=t.length,s=r;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var n=Np(e);return aE.get(e)||aE.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(sv(n)||AC.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){ZB(Array.isArray(e)?e:Lg(e),t,n)}};function Np(e){return iE.get(e)||iE.set(e,Lg(e).map(function(t){return t.replace(JB,"$2")}))}function Lg(e){return e.match(YB)||[""]}function ZB(e,t,n){var r=e.length,i,o,a,s;for(o=0;o<r;o++)i=e[o],i&&(nz(i)&&(i='"'+i+'"'),s=sv(i),a=!s&&/^\d+$/.test(i),t.call(n,i,s,a,o,e))}function sv(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function ez(e){return e.match(KB)&&!e.match(AC)}function tz(e){return XB.test(e)}function nz(e){return!sv(e)&&(ez(e)||tz(e))}const rz=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,hh=e=>e.match(rz)||[],ph=e=>e[0].toUpperCase()+e.slice(1),lv=(e,t)=>hh(e).join(t).toLowerCase(),EC=e=>hh(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),iz=e=>ph(EC(e)),oz=e=>lv(e,"_"),az=e=>lv(e,"-"),sz=e=>ph(lv(e," ")),lz=e=>hh(e).map(ph).join(" ");var kp={words:hh,upperFirst:ph,camelCase:EC,pascalCase:iz,snakeCase:oz,kebabCase:az,sentenceCase:sz,titleCase:lz},cv={exports:{}};cv.exports=function(e){return bC(cz(e),e)};cv.exports.array=bC;function bC(e,t){var n=e.length,r=new Array(n),i={},o=n,a=uz(t),s=dz(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(u,d,h){if(h.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=a.get(u)||new Set;if(p=Array.from(p),d=p.length){h.add(u);do{var v=p[--d];l(v,s.get(v),h)}while(d);h.delete(u)}r[--n]=u}}}function cz(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function uz(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function dz(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var fz=cv.exports;const hz=Pn(fz),pz=Object.prototype.toString,mz=Error.prototype.toString,gz=RegExp.prototype.toString,vz=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",yz=/^Symbol\((.*)\)(.*)$/;function Az(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function sE(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return Az(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return vz.call(e).replace(yz,"Symbol($1)");const r=pz.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+mz.call(e)+"]":r==="RegExp"?gz.call(e):null}function Wi(e,t){let n=sE(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=sE(this[r],t);return o!==null?o:i},2)}function xC(e){return e==null?[]:[].concat(e)}let wC,SC,CC,Ez=/\$\{\s*(\w+)\s*\}/g;wC=Symbol.toStringTag;class lE{constructor(t,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[wC]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],xC(t).forEach(o=>{if(ln.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}SC=Symbol.hasInstance;CC=Symbol.toStringTag;class ln extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(Ez,(i,o)=>Wi(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){const a=new lE(t,n,r,i);if(o)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[CC]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,ln)}static[SC](t){return lE[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let xr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Wi(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Wi(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${Wi(n,!0)}\``+i}},on={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},bz={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Fg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},xz={isValue:"${path} field must be ${value}"},Ug={noUnknown:"${path} field has unspecified keys: ${unknown}"},wz={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Sz={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Wi(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Wi(n,!0)}\``}return ln.formatError(xr.notType,e)}};Object.assign(Object.create(null),{mixed:xr,string:on,number:bz,date:Fg,object:Ug,array:wz,boolean:xz,tuple:Sz});const uv=e=>e&&e.__isYupSchema__;class Vd{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new Vd(t,(s,l)=>{var u;let d=a(...s)?i:o;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!uv(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Iu={context:"$",value:"."};class ia{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Iu.context,this.isValue=this.key[0]===Iu.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Iu.context:this.isValue?Iu.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&No.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ia.prototype.__isYupRef=!0;const Eo=e=>e==null;function va(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},s,l){const{name:u,test:d,params:h,message:f,skipAbsent:p}=e;let{parent:v,context:g,abortEarly:S=a.spec.abortEarly,disableStackTrace:E=a.spec.disableStackTrace}=i;function A(M){return ia.isRef(M)?M.getValue(n,v,g):M}function y(M={}){const R=Object.assign({value:n,originalValue:o,label:a.spec.label,path:M.path||r,spec:a.spec,disableStackTrace:M.disableStackTrace||E},h,M.params);for(const I of Object.keys(R))R[I]=A(R[I]);const U=new ln(ln.formatError(M.message||f,R),n,R.path,M.type||u,R.disableStackTrace);return U.params=R,U}const x=S?s:l;let w={path:r,parent:v,type:u,from:i.from,createError:y,resolve:A,options:i,originalValue:o,schema:a};const C=M=>{ln.isError(M)?x(M):M?l(null):x(y())},b=M=>{ln.isError(M)?x(M):s(M)};if(p&&Eo(n))return C(!0);let _;try{var $;if(_=d.call(w,n,w),typeof(($=_)==null?void 0:$.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(_).then(C,b)}}catch(M){b(M);return}C(_)}return t.OPTIONS=e,t}function Cz(e,t,n,r=n){let i,o,a;return t?(No.forEach(t,(s,l,u)=>{let d=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:i,value:n});let h=e.type==="tuple",f=u?parseInt(d,10):0;if(e.innerType||h){if(h&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=h?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[d])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[d],e=e.fields[d]}o=d,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class Hd extends Set{describe(){const t=[];for(const n of this.values())t.push(ia.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Hd(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ka(e,t=new Map){if(uv(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ka(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ka(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ka(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ka(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Dr{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Hd,this._blacklist=new Hd,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(xr.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ka(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&Eo(o))return o;let a=Wi(t),s=Wi(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:o,value:l,originalValue:a,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:u}=t,d=g=>{i||(i=!0,n(g,a))},h=g=>{i||(i=!0,r(g,a))},f=o.length,p=[];if(!f)return h([]);let v={value:a,originalValue:s,path:l,options:u,schema:this};for(let g=0;g<o.length;g++){const S=o[g];S(v,d,function(A){A&&(Array.isArray(A)?p.push(...A):p.push(A)),--f<=0&&h(p)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const d=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${l?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(h,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,n,(l,u)=>{ln.isError(l)&&(l.value=u),s(l)},(l,u)=>{l.length?s(new ln(l,u,void 0,void 0,o)):a(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,a=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(s,l)=>{throw ln.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new ln(s,t,void 0,void 0,a);o=l}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(ln.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(ln.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):ka(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=va({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=va({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=xr.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=xr.notNull){return this.nullability(!1,t)}required(t=xr.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=xr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=va(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=xC(t).map(o=>new ia(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new Vd(i,n):Vd.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=va({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=xr.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=va({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=xr.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=va({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(h=>h.name===l.name)===u)}}}Dr.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Dr.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=Cz(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Dr.prototype[e]=Dr.prototype.oneOf;for(const e of["not","nope"])Dr.prototype[e]=Dr.prototype.notOneOf;const Tz=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Iz(e){const t=Bg(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Bg(e){var t,n;const r=Tz.exec(e);return r?{year:zr(r[1]),month:zr(r[2],1)-1,day:zr(r[3],1),hour:zr(r[4]),minute:zr(r[5]),second:zr(r[6]),millisecond:r[7]?zr(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:zr(r[10]),minuteOffset:zr(r[11])}:null}function zr(e,t=0){return Number(e)||t}let Pz=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_z=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Rz=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Oz="^\\d{4}-\\d{2}-\\d{2}",jz="\\d{2}:\\d{2}:\\d{2}",Nz="(([+-]\\d{2}(:?\\d{2})?)|Z)",kz=new RegExp(`${Oz}T${jz}(\\.\\d+)?${Nz}$`),$z=e=>Eo(e)||e===e.trim(),Dz={}.toString();function mh(){return new TC}class TC extends Dr{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===Dz?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||xr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=on.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=on.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=on.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||on.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=on.email){return this.matches(Pz,{name:"email",message:t,excludeEmptyString:!0})}url(t=on.url){return this.matches(_z,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=on.uuid){return this.matches(Rz,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,i;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=t:n=t),this.matches(kz,{name:"datetime",message:n||on.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||on.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:o=>{if(!o||r)return!0;const a=Bg(o);return a?!!a.z:!1}}).test({name:"datetime_precision",message:n||on.datetime_precision,params:{precision:i},skipAbsent:!0,test:o=>{if(!o||i==null)return!0;const a=Bg(o);return a?a.precision===i:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=on.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:$z})}lowercase(t=on.lowercase){return this.transform(n=>Eo(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Eo(n)||n===n.toLowerCase()})}uppercase(t=on.uppercase){return this.transform(n=>Eo(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Eo(n)||n===n.toUpperCase()})}}mh.prototype=TC.prototype;let Mz=new Date(""),Lz=e=>Object.prototype.toString.call(e)==="[object Date]";class gh extends Dr{constructor(){super({type:"date",check(t){return Lz(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=Iz(t),isNaN(t)?gh.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(ia.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Fg.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Fg.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}gh.INVALID_DATE=Mz;gh.prototype;function Fz(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=No.split(a)[0];r.add(l),i.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];r.add(a),ia.isRef(s)&&s.isSibling?o(s.path,a):uv(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return hz.array(Array.from(r),n).reverse()}function cE(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function IC(e){return(t,n)=>cE(e,t)-cE(e,n)}const Uz=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Zu(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Zu(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Zu(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Zu)}):"optional"in e?e.optional():e}const Bz=(e,t)=>{const n=[...No.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=No.getter(No.join(n),!0)(e);return!!(i&&r in i)};let uE=e=>Object.prototype.toString.call(e)==="[object Object]";function zz(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const Vz=IC([]);function PC(e){return new _C(e)}class _C extends Dr{constructor(t){super({type:"object",check(n){return uE(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=Vz,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const h of s){let f=o[h],p=h in i;if(f){let v,g=i[h];u.path=(n.path?`${n.path}.`:"")+h,f=f.resolve({value:g,context:n.context,parent:l});let S=f instanceof Dr?f.spec:void 0,E=S==null?void 0:S.strict;if(S!=null&&S.strip){d=d||h in i;continue}v=!n.__validating||!E?f.cast(i[h],u):i[h],v!==void 0&&(l[h]=v)}else p&&!a&&(l[h]=i[h]);(p!==h in l||l[h]!==i[h])&&(d=!0)}return d?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(l,u)=>{if(!s||!uE(u)){i(l,u);return}a=a||u;let d=[];for(let h of this._nodes){let f=this.fields[h];!f||ia.isRef(f)||d.push(f.asNestedTest({options:n,key:h,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:d,value:u,originalValue:a,options:n},r,h=>{i(h.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=Fz(t,n),r._sortErrors=IC(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Zu(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=No.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return Bz(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(Uz)}noUnknown(t=!0,n=Ug.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=zz(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Ug.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(kp.camelCase)}snakeCase(){return this.transformKeys(kp.snakeCase)}constantCase(){return this.transformKeys(t=>kp.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,a]of Object.entries(n.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),r.fields[o]=a.describe(s)}return r}}PC.prototype=_C.prototype;function $p(e,t="short",n,r){const i={short:{min:3,max:50},medium:{min:3,max:500},long:{min:3,max:1e3}};return mh().min(i[t].min,`${e?`${e[0].toUpperCase()+e.substring(1)}`:"Value"} is too short`).max(i[t].max,`${e?`${e[0].toUpperCase()+e.substring(1)}`:"Value"} is too long`)}function Hz(e){return mh().email("Please enter a valid email").min(3,"Email is too short").max(50,"Email is too long")}function Qz(e){return mh().min(10,"Phone number is too short").max(13,"Phone number is too long").matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,"Please enter a valid phone number")}const Wz=PC().shape({firstName:$p().required("First name is required"),lastName:$p().required("Last name is required"),email:Hz().email("Invalid email").required("Email is required"),phone:Qz().required("Phone number is required"),message:$p("content","long").required("Message is required")}),Gz=`
mutation SendEmailNotification($input: EmailNotificationInput) {
  sendEmailNotification(input: $input)
}
`,qz={firstName:"",lastName:"",email:"",phone:"",message:""},RC=({banner:e})=>{const{data:t,isPending:n}=DS(),[r,i]=m.useState(""),[o,a]=m.useState(!1);return c.jsx(c.Fragment,{children:c.jsx(qB,{children:c.jsx(Re,{children:c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"left-section",children:[c.jsx(gn,{children:t==null?void 0:t.title}),c.jsx("div",{children:c.jsx(yn,{children:t==null?void 0:t.subtitle})}),c.jsx(kB,{initialValues:qz,validationSchema:Wz,onSubmit:(s,{setSubmitting:l,resetForm:u})=>{a(!0),GB({query:Gz,variables:{input:s}},vn,({success:d,status:h,message:f})=>{d?(a(!1),i("success"),u(),setTimeout(()=>{i("")},1e4)):(a(!1),i("error"),setTimeout(()=>{i("")},6e4)),l(!1)})},children:({isSubmitting:s})=>c.jsxs(yC,{className:"form",children:[c.jsxs("div",{className:"field-wrapper",children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{htmlFor:"firstName",className:"form-label",children:"First Name"}),c.jsx(nl,{type:"text",id:"firstName",name:"firstName",placeholder:"Eg: John"}),c.jsx(rl,{name:"firstName",component:"div",className:"form-message"})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{htmlFor:"lastName",className:"form-label",children:"Last Name"}),c.jsx(nl,{type:"text",id:"lastName",name:"lastName",placeholder:"Eg: Doe"}),c.jsx(rl,{name:"lastName",component:"div",className:"form-message"})]})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),c.jsx(nl,{type:"email",id:"email",name:"email",placeholder:"Eg: johndoe@gmail.com"}),c.jsx(rl,{name:"email",component:"div",className:"form-message"})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone number"}),c.jsx(nl,{type:"tel",id:"phone",name:"phone",placeholder:"Eg: +233 123 456 7890"}),c.jsx(rl,{name:"phone",component:"div",className:"form-message"})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{htmlFor:"message",className:"form-label",children:"Message"}),c.jsx(nl,{as:"textarea",id:"message",name:"message",placeholder:"Leave us a message",rows:5}),c.jsx(rl,{name:"message",component:"div",className:"form-message"})]}),c.jsx("button",{type:"submit",disabled:s,className:"form-cta",children:o?"Sending...":"Send message"}),r==="success"&&c.jsxs("div",{className:"mail-success",children:[c.jsx("span",{children:"Message sent successfully"}),c.jsx(VP,{className:"mail-icon"})]}),r==="error"&&c.jsx("div",{className:"mail-error",children:c.jsx("span",{children:"Mail failed to send"})})]})})]}),c.jsx("div",{className:"right-section",children:c.jsx("img",{src:e??"/banner1.JPG",width:560,height:500,alt:""})})]})})})})},Yz=()=>{const{data:e,isPending:t}=DS(),{preloaderStates:n}=gr("contact");return c.jsxs(c.Fragment,{children:[(n==null?void 0:n.contact)===0&&c.jsx(mr,{isLoading:t}),c.jsxs(mn,{children:[c.jsx("title",{children:`Contact - ${On}`}),c.jsx("meta",{name:"description",content:"Describes contact us page"})]}),c.jsx(Rs,{quote:e==null?void 0:e.title,quoteAuthor:e==null?void 0:e.subtitle,images:Rc}),c.jsx($S,{}),c.jsx(RC,{banner:"/img-about.jpeg"}),c.jsx(pr,{})]})};function Kz(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function Xz(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var OC=typeof window<"u";function zg(e){if(e){if(e.tagName==="BODY")return e;if(e.tagName==="IFRAME"){var t=e.contentDocument;return t?t.body:null}else if(!e.offsetParent)return null}else return null;return zg(e.offsetParent)}function dE(e){var t=e||window.event;return t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}var fE=OC&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),ya=new Map,hE=typeof document=="object"?document:void 0,Pu=!1;const Jz=hE?function(t,n){t===void 0&&(t=!0);var r=m.useRef(hE.body);n=n||r;var i=function(a){var s=ya.get(a);s?ya.set(a,{counter:s.counter+1,initialOverflow:s.initialOverflow}):(ya.set(a,{counter:1,initialOverflow:a.style.overflow}),fE?Pu||(Kz(document,"touchmove",dE,{passive:!1}),Pu=!0):a.style.overflow="hidden")},o=function(a){var s=ya.get(a);s&&(s.counter===1?(ya.delete(a),fE?(a.ontouchmove=null,Pu&&(Xz(document,"touchmove",dE),Pu=!1)):a.style.overflow=s.initialOverflow):ya.set(a,{counter:s.counter-1,initialOverflow:s.initialOverflow}))};m.useEffect(function(){var a=zg(n.current);a&&(t?i(a):o(a))},[t,n.current]),m.useEffect(function(){var a=zg(n.current);if(a)return function(){o(a)}},[])}:function(t,n){};var Zz=function(e,t){return OC?window.matchMedia(e).matches:!1},eV=function(e,t){var n=m.useState(Zz(e)),r=n[0],i=n[1];return m.useEffect(function(){var o=!0,a=window.matchMedia(e),s=function(){o&&i(!!a.matches)};return a.addEventListener("change",s),i(a.matches),function(){o=!1,a.removeEventListener("change",s)}},[e]),r},tV={restoreOnUnmount:!1};function nV(e,t){t===void 0&&(t=tV);var n=m.useRef(document.title);document.title!==e&&(document.title=e),m.useEffect(function(){if(t&&t.restoreOnUnmount)return function(){document.title=n.current}},[])}const rV=typeof document<"u"?nV:function(e){},iV=hr`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 400% 0;
  }
`,{colors:oV}=q,aV=G.section`
  ${Tt}

  .wrapper {
    width: fit-content;
    margin-inline: auto;
    ${he}
    gap: 2rem;
    text-align: center;
    /* outline: 1px solid red; */
  }

  .error {
    position: relative;
    font-size: clamp(20vw, 40vw, ${P(200)});
    /* font-family: sans-serif; */
    font-family: ${q.fonts.accent};
    color: ${oV.primary};
    line-height: 1;
    overflow: hidden;

    &:before {
      content: "";
      display: block;
      position: absolute;
      filter: blur(20px);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: screen;

      /* background-image: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 1em,
          hsl(213, 68%, 26%) 1em,
          hsl(44, 100%, 53%) 50%
        ),
        repeating-linear-gradient(
          45deg,
          hsl(213, 8%, 10%),
          hsl(213, 8%, 10%) 1em,
          hsl(243, 47%, 95%) 1em,
          hsl(243, 47%, 30%) 50%
        ); */

      /* background-image: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 1em,
          #9e2053 1em,
          #ffb347 50%
        ),
        repeating-linear-gradient(
          45deg,
          #111626,
          #111626 1em,
          #ff6b6b 1em,
          #feca57 50%
        ); */

      background-image: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 1em,
          hsl(213, 68%, 26%) 1em,
          hsl(44, 100%, 53%) 50%
        ),
        repeating-linear-gradient(
          45deg,
          hsl(213, 8%, 10%),
          hsl(213, 8%, 10%) 1em,
          hsl(243, 47%, 95%) 1em,
          hsl(243, 47%, 30%) 50%
        );

      background-size: 3em 3em, 2em 2em;
      animation-name: ${iV};
      animation-duration: 12s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  .info {
    margin-top: 2rem;

    p {
      margin-top: 1rem;
      margin-inline: auto;
      font-size: ${P(15)};
      max-width: 60ch;
      line-height: 1.65;
    }

    .cta {
      margin-top: 2rem;
    }
  }
`,sV=()=>(rV(`Page not found - ${On}`),c.jsx(aV,{children:c.jsx(Re,{children:c.jsxs("div",{className:"wrapper",children:[c.jsx("h1",{className:"error",children:"404"}),c.jsxs("div",{className:"info",children:[c.jsx("h2",{children:"Oh snap! This page does not exist."}),c.jsx("p",{children:"It seems we've misplaced this page in the vast expanse of cyberspace. Let's debug and find our way back"}),c.jsx(kr,{className:"cta",to:"/",children:"Go back Home"})]})]})})})),lV=G.section`
  margin-top: 7rem;

  .cards-container {
    ${he}
    gap: 2.5rem;
    margin-top: 3rem;

    @media screen and (${O.small}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media screen and (${O.medium}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .button-container {
    ${Tt}
    margin-top: 1rem
  }
`,Vg=({data:e,title:t,showSeeMore:n=!1})=>{const r=e;return c.jsx(lV,{children:c.jsxs(Re,{children:[c.jsx(Jo,{children:t}),r.length?c.jsx("div",{className:"cards-container",children:r.map(({_id:i,image:o,name:a,summary:s,createdAt:l,content:u,datetime:d})=>c.jsx($3,{image:o,date:d,heading:a,summary:s,content:u},i))}):c.jsx(Qi,{children:"No upcoming events at the moment."}),n&&r.length>0&&c.jsx("div",{className:"button-container",children:c.jsx(kr,{to:"events",children:"See More"})})]})})},cV=yt`
  query ($filter: EventFilter, $sort: EventSort) {
    getEvents(filter: $filter, sort: $sort) {
      image
      name
      summary
      content
      _id
      createdAt
      datetime
    }
  }
`,uV=()=>vt(vn,cV,{filter:{deleted:{eq:!1}},sort:{datetime:"ascending"}}),dV=e=>{const t=e.getEvents,n=[];if(t.length){for(const r of t)Va(new Date(r.datetime))||n.push({_id:r._id,name:r.name,image:r.image,content:r.content,summary:r.summary,createdAt:r.createdAt,datetime:r.datetime});return n}return null},jC=()=>gt({queryKey:["upcomingEvents"],queryFn:uV,select:dV}),{colors:il}=q,NC=G.section`
  .banner {
    height: ${P(320)};
    color: ${il.white};
    background-color: ${il.primary};
    ${Tt}

    .text-content {
      ${he}
      gap: 2rem;

      @media screen and (${O.medium}) {
        flex-direction: row;
        justify-content: space-between;
        /* outline: 1px solid red; */
      }

      .left-section {
        p {
          color: ${il.yellow};
        }

        h1 {
          margin-top: 0.5rem;
          font-size: clamp(${P(25)}, 10vw, ${P(48)});
        }
      }

      .right-section {
        @media screen and (${O.medium}) {
          align-self: end;
          margin-top: 3rem;
        }

        div {
          max-width: 30ch;
        }
      }
    }
  }
  .meta {
    margin-top: 1.5rem;
    color: ${q.colors.yellow};
    font-size: ${P(14)};
    font-weight: 500;
    line-height: 1;
  }
  .content {
    ${he}
    gap: 2rem;

    @media screen and (${O.medium}) {
      margin-top: 2rem;
      flex-direction: row-reverse;
      align-items: center;
      gap: 2.5rem;

      > :first-child {
        flex-basis: 55%;
      }
      > :last-child {
        flex-basis: 45%;
      }
    }

    @media screen and (${O.large1}) {
      gap: 3rem;
    }
  }

  .text-content {
    .heading {
      font-size: clamp(${P(25)}, 10vw, ${P(40)});
      font-weight: 800;

      @media screen and (${O.medium}) {
        font-size: clamp(${P(40)}, 5vw, ${P(60)});
      }
    }

    .summary {
      margin-top: 1rem;
    }

    .cta {
      ${Lt}
      gap: 1rem;
      width: fit-content;
      margin-top: 2.5rem;
      white-space: nowrap;

      svg {
        ${de(P(40))}
        stroke: ${il.primary};
        /* outline: 1px solid red; */

        @media screen and (${O.small}) {
          ${de(P(25))};
        }

        rect {
          stroke: ${il.primary};
        }
      }

      span {
        font-weight: 700;
      }
    }
  }

  .img-wrapper {
    img {
      background-color: ${q.colors.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
      }
    }
  }
`,fV=({title:e,subTitle:t,image:n,content:r,date:i})=>c.jsx(NC,{children:c.jsx(Re,{children:c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"text-content",children:[c.jsxs("p",{className:"meta",children:[" ",_1(new Date(i??""))," "]}),c.jsx("h1",{className:"heading",children:e}),c.jsx("p",{className:"summary",children:t}),c.jsxs(Cf,{children:[c.jsx(P1,{variant:"Event",title:e??"",image:n??"",content:r}),c.jsxs(Tf,{className:"cta",children:[c.jsx(M3,{}),c.jsx("span",{children:"LEARN MORE"})]})]})]}),c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:n,alt:"",width:634,height:692})})]})})});function hV(){var s;const{isPending:e,data:t}=jC(),{preloaderStates:n}=gr("events"),r=t&&(t.filter(l=>!Va(new Date(l==null?void 0:l.datetime)))[0]??{}),i=t==null?void 0:t.filter(l=>!Va(new Date(l==null?void 0:l.datetime))),o=(i==null?void 0:i.filter(l=>(l==null?void 0:l._id)!==(r==null?void 0:r._id)))||[],a=(t==null?void 0:t.filter(l=>Va(new Date(l==null?void 0:l.datetime))))||[];return c.jsxs(c.Fragment,{children:[(n==null?void 0:n.events)===0&&c.jsx(mr,{isLoading:e}),c.jsxs(mn,{children:[c.jsx("title",{children:`Events - ${On}`}),c.jsx("meta",{name:"description",content:"Describes events page"})]}),c.jsx(NC,{children:c.jsx("div",{className:"banner",children:c.jsx(Re,{children:c.jsxs("div",{className:"text-content",children:[c.jsxs("div",{className:"left-section",children:[c.jsx("p",{children:"Take a look at"}),c.jsx("h1",{children:"Our Departmental Events"})]}),c.jsx("div",{className:"right-section",children:c.jsx("div",{children:c.jsx(yn,{children:"Hosted by DCS"})})})]})})})}),((s=t||[])==null?void 0:s.length)>0?c.jsx(fV,{image:r==null?void 0:r.image,title:r==null?void 0:r.name,subTitle:r==null?void 0:r.summary,content:r==null?void 0:r.content,date:r==null?void 0:r.datetime}):c.jsx(Re,{children:c.jsx("p",{children:"There are no events"})}),o.length>0&&c.jsx(Vg,{title:"Upcoming Events",data:o||[]}),(a==null?void 0:a.length)>0&&c.jsx(Vg,{title:"Past Events",data:a}),c.jsx(pr,{})]})}const{colors:pE}=q,pV=G.section`
  margin-top: 6rem;
  margin-bottom: 15rem;
  padding-block: 5rem;
  background-color: ${pE.primary};
  border-top: 7px solid ${q.colors.yellow};

  .heading {
    color: ${pE.white};
    text-align: center;
    font-weight: 400;
    font-style: italic;
  }

  .images-container {
    ${he}
    gap: 1rem;
    margin-top: 3rem;

    @media screen and (${O.small}) {
      display: grid;
      /* gap: 0; */
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (${O.medium}) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr 1fr;
    }
  }

  .img-wrapper {
    &:first-child {
      @media screen and (${O.medium}) {
        grid-column: 1/ 3;
        grid-row: 1/2;
      }
    }

    &:nth-child(2) {
      @media screen and (${O.medium}) {
        grid-column: 3/ 5;
        grid-row: 1/3;
      }
    }

    &:nth-child(3) {
      @media screen and (${O.medium}) {
        grid-column: 1/ 2;
        grid-row: 2/3;
      }
    }
  }
`,mV=({images:e})=>{var r;const t=e??m_,n=e?Gn:"/gallery";return c.jsx(pV,{children:c.jsxs(Re,{children:[c.jsx(gn,{className:"heading",children:"Department Gallery"}),c.jsx("div",{className:"images-container",children:(r=t==null?void 0:t.data)==null?void 0:r.map(({attributes:{url:i}})=>c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:n+i,alt:""})},i))})]})})},{colors:gV}=q,vV=G.section`
  padding-block: 5rem;
  margin-top: 6rem;
  background-color: ${gV.primary100};

  .content {
    ${he}
    gap: 3rem;

    @media screen and (${O.medium}) {
      flex-direction: row;

      > :first-child {
        flex-basis: 45%;
      }

      > :last-child {
        flex-basis: 55%;
      }
    }

    @media screen and (${O.large1}) {
      > :first-child {
        flex-basis: 35%;
      }

      > :last-child {
        flex-basis: 65%;
      }
    }
  }

  .left-section {
    .heading {
      &-1 {
        font-weight: 400;
        font-size: clamp(${P(22)}, 10vw, ${P(28)});
      }

      &-2 {
        margin-top: 0.5rem;
        font-weight: 700;
      }
    }

    .img-wrapper {
      position: relative;
      margin-top: 1rem;
      border-radius: 1rem;
      img {
        border-radius: 1rem;
        @media screen and (${O.medium}) {
          max-height: ${P(400)};
          overflow: hidden;
        }
      }

      .caption {
        position: absolute;
        left: 0;
        bottom: -1.5rem;
        margin-top: 0.25rem;
        font-size: ${P(12)};
        font-weight: 500;
        line-height: 1.2;
        text-transform: capitalize;
      }
    }
  }

  .right-section {
    p {
      @media screen and (${O.medium}) {
        margin-top: 5.5rem;
        font-size: ${P(18)};
      }
    }
  }
`,yV=({data:e})=>c.jsx(vV,{children:c.jsx(Re,{children:c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"left-section",children:[c.jsx(gn,{className:"heading heading-1",children:"Message from the"}),c.jsx(gn,{className:"heading heading-2",children:"Head of Department"}),c.jsxs("div",{className:"img-wrapper",children:[c.jsx("img",{src:"/hod-alt.jpg",alt:e==null?void 0:e.name}),c.jsx("p",{className:"caption",children:e==null?void 0:e.name})]})]}),c.jsx("div",{className:"right-section",children:c.jsx(yn,{children:e==null?void 0:e.hodMessage})})]})})}),AV=yt`
query GetProgrammes($filter: ProgrammeFilter, $sort: ProgrammeSort) {
  getProgrammes(filter: $filter, sort: $sort) {
    code
    content
    image
    name
    summary
    _id
  }
}
`,EV=()=>vt(vn,AV,{filter:{deleted:{eq:!1}},sort:{createdAt:"ascending"}}),bV=e=>{const t=e.getProgrammes,n=[];if(t.length){for(const r of t)n.push({_id:r._id,code:r.code,name:r.name,image:r.image,content:r.content,summary:r.summary});return n}return null},xV=()=>gt({queryKey:["featuredProgrammes"],queryFn:EV,select:bV}),wV=yt`
  query GetStaff($filter: StaffFilter!) {
    getStaff(filter: $filter) {
      name
      title
      hodMessage
      profileImageUrl
    }
  }
`,SV=e=>{const t={};if(Object.keys(e).length){const n=e.getStaff;return t.hodMessage=n.hodMessage,t.name=n.name,t.title=n.title,t.profileImageUrl=n.profileImageUrl,t}return null},CV=()=>gt({queryKey:["filteredPeople","HOD"],queryFn:()=>vt(vn,wV,{filter:{isHod:{eq:!0}}}),select:SV}),TV=yt`
  query {
    homePage {
      data {
        attributes {
          heroTitle
          heroSubtitle
          programmesTitle
          programmesSubtitle
          heroImage {
            data {
              attributes {
                url
                name
              }
            }
          }
          aboutTitle
          aboutImage {
            data {
              attributes {
                url
              }
            }
          }
          aboutContent
          whoWeAreContent
          whoWeAreQuote
          whoWeAreTitle
          whoWeAreImage {
            data {
              attributes {
                url
              }
            }
          }
          gallery {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`,IV=()=>vt(Yo,TV),PV=e=>{const t={};if(Object.keys(e).length){const n=e.homePage.data.attributes;return t.aboutContent=n.aboutContent,t.aboutImage=n.aboutImage,t.aboutTitle=n.aboutTitle,t.gallery=n.gallery,t.heroImage=n.heroImage,t.heroSubtitle=n.heroSubtitle,t.heroTitle=n.heroTitle,t.programmesSubtitle=n.programmesSubtitle,t.programmesTitle=n.programmesTitle,t.whoWeAreContent=n.whoWeAreContent,t.whoWeAreImage=n.whoWeAreImage,t.whoWeAreQuote=n.whoWeAreQuote,t.whoWeAreTitle=n.programmesTitle,t}return null},_V=()=>gt({queryKey:["home"],queryFn:IV,select:PV}),{colors:ol}=q,RV=G.section`
  margin-top: 4rem;

  .content {
    background-color: ${ol.primary};
    border-top: 7px solid ${ol.yellow};

    @media screen and (${O.medium}) {
      display: flex;
      width: min(92.5%, ${P(1200)});
      padding-top: 5rem;
      padding-bottom: 3rem;
      margin: 0 auto;

      & > :first-child {
        flex-basis: 50%;
      }

      & > :last-child {
        flex-basis: 50%;
      }
    }

    @media screen and (${O.large1}) {
      padding-bottom: 0;
    }

    @media screen and (${O.large2}) {
      padding-top: 7rem;
    }
  }

  .about-img-wrapper {
    .about-img {
      background-color: ${ol.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
        max-height: ${P(550)};
      }
    }
  }

  .text-content-container {
    @media screen and (${O.medium}) {
      padding-left: 3.5rem;
      background-color: ${ol.primary};
    }

    .container {
      @media screen and (${O.medium}) {
        width: unset;
        margin: 0;
      }
    }
  }

  .text-content {
    padding-bottom: 3rem;
    margin-top: 3rem;
    color: ${ol.white};

    @media screen and (${O.medium}) {
      width: 90%;
      padding-bottom: 0;
      margin-top: 0;
    }

    h2 {
      color: inherit;
    }

    .summary {
      margin-top: 1rem;
      line-height: 1.5;

      ul {
        list-style-type: disc;

        li {
          margin-left: 1em;
        }
      }
    }
  }
`,OV=({title:e,content:t,image:n})=>c.jsx(RV,{children:c.jsxs("div",{className:"content",children:[c.jsx("div",{className:"about-img-wrapper",children:c.jsx("img",{src:n,alt:"",className:"about-img",width:600,height:300})}),c.jsx("div",{className:"text-content-container",children:c.jsx(Re,{className:"container",children:c.jsxs("div",{className:"text-content",children:[c.jsx(gn,{children:e}),c.jsx("div",{className:"summary",children:c.jsx(yn,{children:t||""})})]})})})]})}),kC=e=>m.createElement("svg",{width:10,height:10,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M0.833252 9.16659L9.16659 0.833252M9.16659 0.833252H0.833252M9.16659 0.833252V9.16659",stroke:"#2B286F",strokeWidth:1.66667,strokeLinecap:"round",strokeLinejoin:"round"})),{colors:gi,fonts:jV}=q,NV=G.section`
  background-color: ${gi.primary};
  margin-top: 7rem;

  @media screen and (${O.medium}) {
    background: none;
  }

  .content {
    @media screen and (${O.medium}) {
      display: flex;
      width: min(92.5%, ${P(1200)});
      margin: 0 auto;

      & > :first-child {
        flex-basis: 55%;
      }

      & > :last-child {
        flex-basis: 45%;
      }
    }
  }

  .about2-img-wrapper {
    position: relative;

    @media screen and (${O.medium}) {
      max-height: ${P(600)};
    }

    .about2-img {
      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }

      @media screen and (${O.medium}) {
        aspect-ratio: unset;
        ${de("100%")}
      }
    }

    .decor {
      display: none;

      @media screen and (${O.small}) {
        ${_s}
        display: flex;
        ${de("90%","80%")}
        border: 1px solid ${gi.white};
      }

      @media screen and (${O.medium}) {
        top: 50%;
        transform: translateY(-50%);
        left: unset;
        right: 2rem;
        width: min(86%, ${P(652)});
      }

      @media screen and (${O.large1}) {
        width: min(88%, ${P(755)});
      }

      .text-wrapper {
        position: relative;
        width: 100%;
        height: fit-content;
        padding: 1.8rem 0 1.8rem 3.8rem;
        margin-top: auto;
        background-color: ${gi.white};

        @media screen and (${O.medium}) {
          padding-left: 3rem;
        }

        @media screen and (${O.large1}) {
          padding-left: 3.3rem;
        }
      }

      P {
        font-family: ${jV.accent};
        font-style: italic;
        font-size: ${P(16)};

        &::before {
          ${Or}
          top: 50%;
          transform: translateY(-50%);
          left: 2.25rem;
          ${de(P(10))}
          background-color: ${gi.yellow};
          border-radius: 50%;

          @media screen and (${O.medium}) {
            left: 1.5rem;
          }

          @media screen and (${O.large1}) {
            left: 1.8rem;
          }
        }
      }
    }
  }

  .text-content-container {
    @media screen and (${O.medium}) {
      padding-left: 2.5rem;
      background-color: ${gi.primary};
    }

    .container {
      @media screen and (${O.medium}) {
        width: unset;
        margin: 0;
      }
    }
  }

  .text-content {
    padding-bottom: 3rem;
    margin-inline: auto;
    margin-top: 3rem;
    color: ${gi.white};

    @media screen and (${O.medium}) {
      padding-bottom: 3rem;
      margin-top: 3rem;
      margin-inline: 0;
      width: 90%;
    }

    @media screen and (${O.large1}) {
      margin-top: 5rem;
    }

    h2 {
      color: inherit;
    }

    .summary {
      margin-top: 1rem;
      line-height: 1.5;

      ul {
        list-style-type: disc;

        li {
          margin-left: 1em;
        }
      }
    }
  }

  .cta {
    ${Lt}
    gap: 0.75em;
    width: fit-content;
    margin-top: 2rem;
    font-size: ${P(15)};
    color: ${gi.yellow};

    svg {
      path {
        stroke: ${gi.yellow};
      }
    }
  }
`,kV=({content:e,title:t,quote:n,image:r})=>c.jsx(NV,{children:c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"about2-img-wrapper",children:[c.jsx("img",{src:r,alt:"",className:"about2-img",width:660,height:370}),c.jsx("div",{className:"decor",children:c.jsx("div",{className:"text-wrapper",children:c.jsx("p",{children:n})})})]}),c.jsx("div",{className:"text-content-container",children:c.jsx(Re,{className:"container",children:c.jsxs("div",{className:"text-content",children:[c.jsx(gn,{children:t}),c.jsx("div",{className:"summary",children:c.jsx(yn,{children:e||""})}),c.jsxs(xe,{to:"#",className:"cta",children:[c.jsx("span",{children:"Read more"})," ",c.jsx(kC,{})]})]})})})]})}),$V=e=>m.createElement("svg",{width:19,height:15,viewBox:"0 0 19 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M1.70068 3.68392L8.82414 8.43289C9.43063 8.83721 10.2207 8.83721 10.8272 8.43289L17.9507 3.68392M3.50624 13.6145H16.1451C17.1423 13.6145 17.9507 12.8061 17.9507 11.8089V2.78114C17.9507 1.78396 17.1423 0.975586 16.1451 0.975586H3.50624C2.50906 0.975586 1.70068 1.78396 1.70068 2.78114V11.8089C1.70068 12.8061 2.50906 13.6145 3.50624 13.6145Z",stroke:"#344054",strokeWidth:1.66667,strokeLinecap:"round",strokeLinejoin:"round"})),{colors:al}=q,DV=G.section`
  .section-label {
    font-size: ${P(15)};
    color: ${al.yellow};
  }

  .heading-wrapper {
    @media screen and (${O.medium}) {
      display: flex;
      align-items: start;
      gap: 1rem;
    }
  }

  .text-wrapper {
    .heading {
      margin-top: 1rem;
    }

    .summary {
      margin-top: 1.5rem;
      width: 90%;
    }
  }

  .cta {
    ${Lt}
    gap: 0.5em;
    align-self: center;
    width: fit-content;
    margin-top: 2rem;

    svg {
      path {
        stroke: ${al.darkBlue};
      }
    }
  }

  .carousel-container {
    margin-top: 2.5rem;

    .card {
      position: relative;
      width: min(100%, ${P(384)});
      height: ${P(450)};

      @media screen and (${O.small}) {
        height: ${P(500)};
      }

      &::before {
        ${Or}
        inset: 0;
        /* background-color: rgba(0, 0, 0, 0.3); */
        background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
        z-index: 2;
      }

      img {
        position: absolute;
        inset: 0;
      }

      .text-content {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        padding: 1.5rem;
        background-color: ${al.white};
        text-align: left;
        z-index: 2;

        h3 {
          font-size: clamp(${P(20)}, 4vw, ${P(25)});
          line-height: 1.2;
        }

        p {
          margin-top: 1rem;
          font-size: ${P(15)};
        }

        a {
          ${Lt}
          gap: 0.5em;
          margin-top: 1rem;
          font-weight: 600;
          white-space: nowrap;

          svg {
            ${de(P(9))}
          }
        }
      }
    }

    .card + .card {
      margin-inline: 10px;
    }

    .slide-btn {
      ${Tt}
      ${de(P(45))}
      transition: background-color 0.3s;
      border-radius: 50%;
      border: 1px solid ${al.gray150};

      @media screen and (${O.small}) {
        ${de(P(52))}
      }

      &:hover,
      &:focus {
        background-color: hsl(216, 16%, 95%);
      }

      &:disabled {
        opacity: 0.5;
        background-color: ${al.gray100};
        cursor: unset;
      }
    }
  }

  .alice-carousel {
    text-align: center;
    margin: auto;

    &__stage-item {
      padding-right: 0.8rem;

      @media screen and (${O.small}) {
        padding-inline: 0.8rem;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    &__prev-btn,
    &__next-btn {
      width: fit-content;
      margin-top: 1rem;
      margin-inline: auto;

      &.__inactive {
      }
    }

    &__next-btn {
      margin-left: 1rem;
    }
  }
`,MV={0:{items:1},768:{items:2},1024:{items:3},1200:{items:3.5}},LV=({title:e,subTitle:t,data:n})=>c.jsx(DV,{id:"programmes",children:c.jsxs(Re,{children:[c.jsx("p",{className:"section-label",children:"[PROGRAMMES]"}),c.jsxs("div",{className:"heading-wrapper",children:[c.jsxs("div",{className:"text-wrapper",children:[c.jsx(gn,{className:"heading",children:e}),c.jsx("p",{className:"summary",children:t})]}),c.jsxs(kr,{to:"/#contact",className:"cta",children:[c.jsx($V,{}),c.jsx("span",{children:"Contact us"})]})]}),c.jsx("div",{className:"carousel-container",children:c.jsx(M1,{mouseTracking:!0,disableDotsControls:!0,items:n==null?void 0:n.map(({name:r,image:i,summary:o,code:a,_id:s})=>c.jsxs("div",{className:"card item",children:[c.jsx("img",{src:i,alt:"",width:384,height:500}),c.jsxs("div",{className:"text-content",children:[c.jsx("h3",{children:r}),c.jsx("p",{children:j5(o)}),c.jsxs(xe,{to:`/programmes/${s}`,children:[c.jsx("span",{children:"Read more"})," ",c.jsx(pc,{})]})]})]},a)),responsive:MV,renderNextButton:({isDisabled:r})=>c.jsx("button",{className:"slide-btn",disabled:r,children:c.jsx(pc,{})}),renderPrevButton:({isDisabled:r})=>c.jsx("button",{className:"slide-btn",disabled:r,children:c.jsx(Kf,{})})})})]})});G.section`
    margin-top: 1rem;
    gap: 1rem;
    margin-top: 3rem;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  
`;const FV=G.section`
    padding-top: 3rem;
    padding-bottom: 0; /* Ensure no bottom padding */
    margin: 0; /* Ensure no margin */

    @media screen and (${O.medium}) {
        /* Add any responsive styling here */
    }
`,UV=()=>{var f,p,v,g,S,E,A,y,x,w,C,b;const{isPending:e,data:t}=_V(),{isPending:n,data:r}=xV(),{isPending:i,data:o}=jC(),{isPending:a,data:s}=u1(),{data:l}=Ko(),{preloaderStates:u}=gr("home"),{data:d,isPending:h}=CV();return c.jsxs(c.Fragment,{children:[(u==null?void 0:u.home)===0&&c.jsx(mr,{isLoading:e||n||i||h||a}),c.jsxs(mn,{children:[c.jsx("title",{children:`Home - ${On}`}),c.jsx("meta",{name:"description",content:"Describes home page"})]}),c.jsx(Rs,{...g_}),(d==null?void 0:d.hodMessage)&&c.jsx(yV,{data:d||{}}),c.jsx(FV,{children:c.jsxs(Re,{children:[c.jsx(O5,{mission:l==null?void 0:l.mission,vision:l==null?void 0:l.vision}),c.jsx(N5,{values:(l==null?void 0:l.coreValues)||[]})]})}),c.jsx(LV,{title:t==null?void 0:t.programmesTitle,subTitle:t==null?void 0:t.programmesSubtitle,data:r||[]}),c.jsx(OV,{content:t==null?void 0:t.aboutContent,image:((v=(p=(f=t==null?void 0:t.aboutImage)==null?void 0:f.data)==null?void 0:p.attributes)==null?void 0:v.url)&&`${Gn}${(E=(S=(g=t==null?void 0:t.aboutImage)==null?void 0:g.data)==null?void 0:S.attributes)==null?void 0:E.url}`,title:t==null?void 0:t.aboutTitle}),c.jsx(D3,{data:s||[],showSeeMore:!0,title:"Announcements"}),c.jsx(Vg,{data:o||[],showSeeMore:!0,title:"Upcoming Events"}),c.jsx(kV,{content:t==null?void 0:t.whoWeAreContent,image:((x=(y=(A=t==null?void 0:t.whoWeAreImage)==null?void 0:A.data)==null?void 0:y.attributes)==null?void 0:x.url)&&`${Gn}${(b=(C=(w=t==null?void 0:t.whoWeAreImage)==null?void 0:w.data)==null?void 0:C.attributes)==null?void 0:b.url}`,quote:t==null?void 0:t.whoWeAreQuote,title:t==null?void 0:t.whoWeAreTitle}),c.jsx($S,{}),c.jsx(RC,{banner:"/contact-us.jpg"}),c.jsx(mV,{}),c.jsx(pr,{})]})},Hg=e=>e.toString().split("=")[1],BV=yt`
query GetPeopleGroups($filter: PeopleGroupFilter) {
  getPeopleGroups(filter: $filter) {
    name
    slug
    _id
  }
}
`,zV=()=>vt(vn,BV,{filter:{deleted:{eq:!1}},sort:{name:"descending"}}),VV=e=>{const t=e.getPeopleGroups,n=[];if(t.length){for(const r of t)n.push({_id:r._id,name:r.name,slug:r.slug});return console.log({newData:n}),n}return null},HV=()=>gt({queryKey:["peopleGroups"],queryFn:zV,select:VV}),QV=yt`
  query PeoplePage {
    peoplePage {
      data {
        attributes {
          headerSubtitle
          headerTitle
        }
      }
    }
  }
`,WV=()=>vt(Yo,QV),GV=e=>{const t={};if(Object.keys(e).length){const n=e.peoplePage.data.attributes;return t.headerTitle=n.headerTitle,t.headerSubtitle=n.headerSubtitle,t}return null},qV=()=>gt({queryKey:["peoplePage"],queryFn:WV,select:GV}),{colors:sl}=q,YV=G.section`
  margin-bottom: 12rem;

  .hero {
    height: ${P(320)};
    color: ${sl.white};
    background-color: ${sl.primary};
    ${Tt}

    .text-content {
      ${he}
      gap: 2rem;

      @media screen and (${O.medium}) {
        flex-direction: row;
        justify-content: space-between;
        /* outline: 1px solid red; */
      }

      .left-section {
        p {
          color: ${sl.yellow};
        }

        h1 {
          margin-top: 0.5rem;
          font-size: clamp(${P(25)}, 10vw, ${P(48)});
        }
      }

      .right-section {
        @media screen and (${O.medium}) {
          align-self: end;
          margin-top: 3rem;
        }

        div {
          max-width: 30ch;
        }
      }
    }
  }

  .section-heading {
    margin-top: 5rem;
  }

  .people {
    margin-top: 3rem;
    ${he}
    gap: 3rem;

    @media screen and (${O.medium}) {
      flex-direction: row;
      gap: 5rem;
      justify-content: space-between;
      align-items: start;
    }
  }

  .filters {
    ${he}
    gap: 1rem;

    @media screen and (${O.medium}) {
      position: sticky;
      top: 1.5rem;
      min-width: ${P(210)};
      max-width: ${P(210)};
    }

    a {
      font-size: ${P(18)};
      text-align: left;
      color: ${sl.gray400};
      width: fit-content;
      /* white-space: nowrap; */
      /* max-width: 15ch; */

      &.active {
        color: ${sl.primary};
        font-weight: 700;
      }
    }
  }

  .people-content {
    @media screen and (${O.medium}) {
      flex-grow: 1;
      max-width: ${P(600)};
    }

    @media screen and (${O.medium}) {
      max-width: ${P(900)};
    }
  }
`,$C=({children:e})=>{const[t]=vf(),n=i1(),{pathname:r}=eo(),{data:i}=qV(),{data:o,isPending:a}=HV(),{preloaderStates:s}=gr("people");return m.useEffect(()=>{t&&t.size!==0||o!=null&&o.length&&(n({search:`${lc({group:o==null?void 0:o[1]._id})}`}),sessionStorage.setItem("currentGroup",o==null?void 0:o[1].name))},[o]),c.jsxs(c.Fragment,{children:[(s==null?void 0:s.people)===0&&c.jsx(mr,{isLoading:a}),c.jsxs(YV,{children:[c.jsxs(mn,{children:[c.jsx("title",{children:`Faculty - ${On}`}),c.jsx("meta",{name:"description",content:"This page describes the faculty in the department of Computer Science"})]}),c.jsx(Rs,{quote:i==null?void 0:i.headerTitle,quoteAuthor:i==null?void 0:i.headerSubtitle,images:Rc}),c.jsxs(Re,{children:[c.jsx(Jo,{className:"section-heading",id:"people",children:"People"}),c.jsxs("div",{className:"people",children:[c.jsx("aside",{className:"filters",children:o==null?void 0:o.map((l,u)=>c.jsx(xe,{to:{...r.split("/").length>2&&{pathname:".."},hash:"#people",search:`${lc({group:o==null?void 0:o[u]._id})}`},className:`${Hg(t)===(l==null?void 0:l._id)?"active":""}`,onClick:()=>sessionStorage.setItem("currentGroup",l==null?void 0:l.name),children:l==null?void 0:l.name},l._id))}),c.jsx("div",{className:"people-content",id:"",children:e})]})]})]})]})},KV=G.div`
    font-size: 1.5rem;
    `,XV=({siteName:e,url:t,showTitle:n})=>{const r=tj(e),i=new URL(t).hostname;return c.jsxs(KV,{children:[n&&c.jsx("p",{children:e}),c.jsx(r,{title:i})]})},JV=yt`
  query GetStaff($filter: StaffFilter!) {
    getStaff(filter: $filter) {
      _id
      code
      biography
      socials
      coursesTaught
      email
      gender
      name
      notableProjectsContent
      officeEmail
      officeHours
      officeLocation
      phone
      profileImageUrl
      publicationsContent
      researchInterestsContent
      title
      yearsTaught
      dateJoined
    }
  }
`,ZV=e=>{const t={};if(Object.keys(e).length){const n=e.getStaff;return t._id=n._id,t.code=n.code,t.biography=n.biography,t.coursesTaught=n.coursesTaught,t.socials=n.socials,t.email=n.email,t.gender=n.gender,t.name=n.name,t.notableProjectsContent=n.notableProjectsContent,t.officeEmail=n.officeEmail,t.officeHours=n.officeHours,t.officeLocation=n.officeLocation,t.phone=n.phone,t.profileImageUrl=n.profileImageUrl,t.publicationsContent=n.publicationsContent,t.researchInterestsContent=n.researchInterestsContent,t.title=n.title,t.yearsTaught=n.yearsTaught,t.dateJoined=n.dateJoined,t}return null},eH=({id:e})=>gt({queryKey:["filteredPeople",e],queryFn:()=>vt(vn,JV,{filter:{_id:{eq:e}}}),select:ZV}),tH=e=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{width:40,height:40,rx:20,fill:"#FFBF0D"}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.1667 19.1667H25.8334C26.2936 19.1667 26.6667 19.5398 26.6667 20.0001C26.6667 20.4603 26.2936 20.8334 25.8334 20.8334H14.1667C13.7065 20.8334 13.3334 20.4603 13.3334 20.0001C13.3334 19.5398 13.7065 19.1667 14.1667 19.1667Z",fill:"white"})),nH=e=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("rect",{width:40,height:40,rx:20,fill:"#FFBF0D"}),m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 13.3333C20.4603 13.3333 20.8334 13.7063 20.8334 14.1666V19.1666H25.8334C26.2936 19.1666 26.6667 19.5397 26.6667 19.9999C26.6667 20.4602 26.2936 20.8333 25.8334 20.8333H20.8334V25.8333C20.8334 26.2935 20.4603 26.6666 20 26.6666C19.5398 26.6666 19.1667 26.2935 19.1667 25.8333V20.8333H14.1667C13.7065 20.8333 13.3334 20.4602 13.3334 19.9999C13.3334 19.5397 13.7065 19.1666 14.1667 19.1666H19.1667V14.1666C19.1667 13.7063 19.5398 13.3333 20 13.3333Z",fill:"white"})),{colors:ll}=q,rH=G.div`
  .breadcrumb {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    /* outline: 1px solid red; */

    a,
    p {
      line-height: 1.2;
      &.active {
        font-weight: 700;
      }
    }

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .profile {
    ${he}
    gap: 2rem;
    margin-top: 2rem;
    color: ${ll.darkBlue};

    @media screen and (${O.small}) {
      flex-direction: row;
      align-items: start;
      margin-top: 1rem;

      > div {
        flex-basis: 50%;
      }
    }

    .left-section {
      @media screen and (${O.small}) {
        flex-grow: 1;
      }

      .img-wrapper {
        aspect-ratio: 1; 
        max-height: ${P(327)};
        overflow: hidden;

        img {
          min-height: ${P(260)};
        }

        @media screen and (${O.small}) {
          /* max-height: unset; */
        }
      }
    }

    .right-section {
      padding: 1.5rem 1.25rem;
      border: 1px solid ${sr(q.colors.primary,.1)};

      .info-wrapper {
        ${he}
        gap: 1.5rem;
      }

      .info-group {
        .label {
          font-size: ${P(14)};
          color: ${ll.gray300};
        }

        .info {
          margin-top: 0.25rem;
          color: ${ll.darkBlue};
          font-weight: 600;
          font-size: ${P(15)};
        }

        .socials {
          margin-top: 0.25rem;
          display: flex;
          gap: 0.5rem;
        }
      }
    }
  }

  .lecturer-info {
    .name {
      font-size: ${P(22)};
      line-height: 1.2;
      font-weight: 700;
      margin-top: 1rem;
    }

    .role {
      margin-top: 0.5rem;
    }
  }

  .biography {
    margin-top: 3rem;

    .heading {
      font-size: ${P(18)};
      font-weight: 700;
    }

    .summary {
      margin-top: 0.5rem;
      color: ${ll.darkBlue};
    }
  }

  .AccordionRoot {
    ${he}
    gap: 3rem;
    margin-top: 3rem;
    border-radius: 6px;
  }

  .AccordionItem {
    overflow: hidden;
    margin-top: 1px;
  }

  .AccordionHeader {
    display: flex;
  }

  .AccordionTrigger {
    font-family: inherit;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${P(18)};
    line-height: 1;
    color: inherit;
    text-transform: uppercase;
    font-weight: 700;
    text-align: left;

    &[data-state="open"] > .accordion-btn-wrapper {
      svg {
        &:first-child {
          opacity: 0;
        }
        &:last-child {
          opacity: 1;
        }
      }
    }

    &[data-state="closed"] > .accordion-btn-wrapper {
      svg {
        &:first-child {
          opacity: 1;
        }
        &:last-child {
          opacity: 0;
        }
      }
    }
  }

  .AccordionContent {
    padding-left: 1rem;
    color: inherit;
    overflow: hidden;
  }
  .AccordionContent[data-state="open"] {
    animation: ${Bw} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionContent[data-state="closed"] {
    animation: ${zw} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  .AccordionContentWrapper {
    padding-block: 1rem;

    .images-container {
      display: grid;
      gap: 1rem;

      @media screen and (${O.small}) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    ul {
      ${he}
      gap: 0.75rem;
      color: ${ll.darkBlue};
      list-style-type: disc;
      padding-left: 1rem;
    }

    .publications {
      ${he}
      gap: 2rem;

      .title {
        font-weight: 700;
      }
    }
  }

  .accordion-btn-wrapper {
    position: relative;
    ${de(P(40))}

    svg {
      ${_s}
      transition: opacity 0.3s;
    }
  }
`,iH=()=>{const{id:e}=o1(),[t]=vf(),{data:n}=eH({id:e}),r=ej((n==null?void 0:n.socials)||[]);return c.jsx($C,{children:c.jsxs(rH,{id:"detail",children:[c.jsxs(mn,{children:[c.jsx("title",{children:`${(n==null?void 0:n.name)??"Faculty"} - ${On}`}),c.jsx("meta",{name:"description",content:"This page describes one person in the department of Computer Science"})]}),c.jsxs("div",{className:"breadcrumb",children:[c.jsx(xe,{to:"..",children:"Faculty"}),sessionStorage.getItem("currentGroup")?c.jsxs(c.Fragment,{children:[c.jsx("span",{children:">"}),c.jsx(xe,{preventScrollReset:!0,to:{pathname:"..",search:t.toString()},children:sessionStorage.getItem("currentGroup")})]}):null,c.jsx("span",{children:">"}),c.jsx("p",{className:"active",children:"Profile"})]}),c.jsxs("div",{className:"profile",children:[c.jsx("div",{className:"left-section",children:c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:(n==null?void 0:n.profileImageUrl)||Xo,alt:""})})}),c.jsx("div",{className:"right-section",children:c.jsxs("div",{className:"info-wrapper",children:[c.jsxs("div",{className:"info-group",children:[c.jsx("p",{className:"label",children:"Office Email"}),c.jsx("p",{className:"info",children:(n==null?void 0:n.officeEmail)||"N/A"})]}),c.jsxs("div",{className:"info-group",children:[c.jsx("p",{className:"label",children:"Office Location"}),c.jsx("p",{className:"info",children:(n==null?void 0:n.officeLocation)||"N/A"})]}),c.jsxs("div",{className:"info-group",children:[c.jsx("p",{className:"label",children:"Office hours"}),c.jsx("p",{className:"info",children:(n==null?void 0:n.officeHours)||"N/A"})]}),c.jsxs("div",{className:"info-group",children:[c.jsx("p",{className:"label",children:"Others"}),c.jsx("div",{className:"socials",children:Object.entries(r).map(([i,o])=>c.jsx(xe,{to:o,"aria-label":i,children:c.jsx(XV,{url:o,siteName:i,showTitle:!1})},i))})]})]})})]}),c.jsx("div",{className:"lecturer-info",children:c.jsx("p",{className:"name",children:n!=null&&n.name?h1(n.name):"N/A"})}),c.jsxs("div",{className:"biography",children:[c.jsx("p",{className:"heading",children:"BIOGRAPHY"}),c.jsx("p",{className:"summary",children:Ti((n==null?void 0:n.biography)||"N/A")})]}),c.jsxs(cS,{className:"AccordionRoot",type:"single",defaultValue:"item-1",collapsible:!0,children:[c.jsxs(Al,{className:"AccordionItem",value:"item-1",children:[c.jsx(xl,{children:"RESEARCH INTEREST"}),c.jsx(El,{className:"AccordionContent",children:c.jsx("div",{className:"AccordionContentWrapper",children:Ti((n==null?void 0:n.researchInterestsContent)||"N/A")||"N/A"})})]}),c.jsxs(Al,{className:"AccordionItem",value:"item-3",children:[c.jsx(xl,{children:"COURSES TAUGHT"}),c.jsx(El,{className:"AccordionContent",children:c.jsx("div",{className:"AccordionContentWrapper",children:Ti((n==null?void 0:n.coursesTaught)||"N/A")})})]}),c.jsxs(Al,{className:"AccordionItem",value:"item-5",children:[c.jsx(xl,{children:"LIST OF PUBLICATIONS"}),c.jsx(El,{className:"AccordionContent",children:c.jsx("div",{className:"AccordionContentWrapper",children:Ti((n==null?void 0:n.publicationsContent)||"N/A")})})]}),c.jsxs(Al,{className:"AccordionItem",value:"item-6",children:[c.jsx(xl,{children:"NOTABLE PROJECTS"}),c.jsx(El,{className:"AccordionContent",children:c.jsx("div",{className:"AccordionContentWrapper",children:Ti((n==null?void 0:n.notableProjectsContent)||"N/A")})})]})]})]})})},xl=m.forwardRef(({children:e,...t},n)=>c.jsx(uS,{className:"AccordionHeader",children:c.jsxs(dS,{className:"AccordionTrigger",ref:n,...t,children:[e,c.jsxs("div",{className:"accordion-btn-wrapper",children:[c.jsx(nH,{}),c.jsx(tH,{})]})]})}));xl.displayName="AccordionTrigger";const oH=G(xe)`
  .img-wrapper {
    aspect-ratio: 1;
    max-width: ${P(320)};
    background: url(${Xo}) center/cover no-repeat;
  }

  .text-content {
    margin-top: 1rem;

    .name {
      font-size: ${P(18)};
      font-weight: 700;
      line-height: 1.15;
      text-transform: capitalize;
    }

    .role {
      margin-top: 0.5rem;
      line-height: 1.3;
    }
  }
`,DC=({image:e,name:t,email:n,to:r,searchParams:i})=>{const o=eV(`(${O.medium})`);return c.jsxs(oH,{to:{pathname:r,hash:o?"#people":"#detail",search:i.toString()},children:[c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:e||Xo,alt:t})}),c.jsxs("div",{className:"text-content",children:[c.jsx("p",{className:"name",children:h1(t)}),c.jsx("p",{className:"role",children:n})]})]})},aH=yt`
  query GetStaff($filter: StaffFilter) {
    staff: getStaffs(filter: $filter) {
      _id
      code
      name
      profileImageUrl
      email
    }
  }
`,sH=e=>{const t=e.staff,n=[];if(t.length){for(const r of t)n.push({...r});return n}return null},MC=({peopleGroup:e,isEnabled:t,researchGroups:n})=>gt({queryKey:["filteredPeople",e,n],queryFn:()=>vt(vn,aH,{filter:{...e&&{peopleGroups:{in:[e]}},...n&&{researchGroups:{in:[n]}},deleted:{eq:!1}}}),select:sH,enabled:t}),{colors:so}=q,LC=G.div`
  .people-list-content {
    display: grid;
    gap: 2rem;
    justify-content: center;

    @media screen and (${O.small}) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1rem;
      row-gap: 3rem;
      justify-content: start;
    }
    @media screen and (${O.large1}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .footer {
    ${As}
    gap: 0.75rem;
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid ${sr(so.primary,.1)};
    margin-top: 4rem;

    .pagination-pages {
      display: none;

      @media screen and (${O.small}) {
        ${Lt}
        gap: 0.5rem;
      }

      button {
        ${de(P(35))}
        border-radius:  8px;
        color: inherit;
        font-weight: 600;
        /* outline: 1px solid red; */

        &.selected {
          background-color: ${so.gray100};
          font-weight: 600;
          color: ${so.primary};
        }
      }
    }

    .pagination-btn {
      ${Lt}
      gap: 0.75rem;

      &.disabled {
        color: ${so.gray200};
        border-color: ${so.gray200};
        cursor: unset;

        &:hover {
          background-color: rgb(0, 0, 0, 0);
        }

        svg {
          path {
            stroke: ${so.gray200};
          }
        }
      }

      svg {
        ${de(P(14),P(15))}

        path {
          stroke: ${so.darkBlue};
        }
      }
    }
  }
`,lH=()=>{const[e]=vf(),[t,n]=m.useState(""),{data:r,isPending:i,isError:o,isSuccess:a,refetch:s}=MC({isEnabled:!1,peopleGroup:t});return m.useEffect(()=>{e&&(console.log(Hg(e)),n(Hg(e)))},[e]),m.useEffect(()=>{t&&s()},[t]),c.jsxs(c.Fragment,{children:[c.jsx($C,{children:c.jsxs(LC,{children:[!r&&o&&c.jsx(Qi,{className:"align-left mt-0",children:"Sorry, there was an error getting the staff in this people group. Contact admin for more info"}),i&&!r&&c.jsx(Qi,{className:"align-left mt-0",children:"Just a second..."}),a&&!(r!=null&&r.length)&&c.jsx(Qi,{className:"align-left mt-0",children:"No staff in this group at the moment."}),a&&r&&c.jsx("div",{className:"people-list-content",children:r==null?void 0:r.map(({_id:l,name:u,profileImageUrl:d,email:h})=>c.jsx(DC,{name:u,email:h,image:d,to:l,searchParams:e},l))}),c.jsxs("div",{className:"footer",children:[c.jsxs(kr,{to:"#",className:"pagination-btn disabled",children:[c.jsx(Kf,{}),c.jsx("span",{children:"Previous"})]}),c.jsxs(kr,{to:"#",className:"pagination-btn disabled",children:[c.jsx("span",{children:"Next"}),c.jsx(pc,{})]})]})]})}),c.jsx(pr,{})]})},{colors:mE}=q,cH=G(k3)`
  .img-wrapper {
    img {
      max-height: ${P(225)};
      width: 100%;
    }
  }

  .title {
    margin-top: 1.5rem;
    font-size: ${P(18)};
    font-weight: 600;
    line-height: 1.2;
    color: ${mE.black};

    @media screen and (${O.small}) {
      font-size: ${P(20)};
    }
  }

  .dialog-body {
    .ScrollAreaRoot {
      --scrollbar-size: 10px;

      width: 100%;
      height: min(calc(85vh - 6rem), calc(${P(700)} - 6rem));
      border-radius: 4px;
      overflow: hidden;
      background-color: white;
      position: relative;
      /* outline: 1px solid red; */

      &::before {
        ${Or}
        bottom: 0;
        left: 0;
        ${de("100%",P(40))}
        background: linear-gradient(to top, rgb(255, 255, 255), rgb(0, 0, 0, 0) 55%);
      }
    }

    .ScrollAreaViewport {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      padding-bottom: 2rem;
    }

    .ScrollAreaScrollbar {
      display: flex;
      /* ensures no selection */
      user-select: none;
      /* disable browser handling of all panning and zooming gestures on touch devices */
      touch-action: none;
      padding: 2px;
      background: var(--black-a6);
      transition: background 160ms ease-out;
    }
    .ScrollAreaScrollbar:hover {
      background: var(--black-a8);
    }
    .ScrollAreaScrollbar[data-orientation="vertical"] {
      width: var(--scrollbar-size);
    }

    .ScrollAreaThumb {
      flex: 1;
      background: var(--mauve-10);
      border-radius: var(--scrollbar-size);
      position: relative;
    }
    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    .ScrollAreaThumb::before {
      content: "";
      ${_s}
      ${de("100%")}
      min-width: 44px;
      min-height: 44px;
    }

    .ScrollAreaCorner {
      background: var(--black-a8);
    }

    .content, .description {
      margin-top: 1.5rem;
      font-size: ${P(14)};
      color: ${mE.gray700};

      @media screen and (${O.small}) {
        font-size: ${P(15)};
      }
    }
  }
`,uH=({names:e,name:t,image:n,content:r,description:i,code:o,course:a,level:s,isCore:l})=>c.jsxs(X5,{children:[c.jsx(N3,{}),c.jsxs(cH,{children:[c.jsxs("div",{className:"dialog-header",children:[c.jsxs(J5,{className:"DialogTitle",children:[t," - ","","Level ",s," "]}),c.jsx(Z5,{asChild:!0,children:c.jsx("button",{className:"IconButton","aria-label":"Close",children:c.jsx(Xw,{})})})]}),c.jsx("div",{className:"dialog-body",children:c.jsxs(R3,{className:"ScrollAreaRoot",children:[c.jsxs(O3,{className:"ScrollAreaViewport",children:[c.jsx("div",{className:"img-wrapper"}),c.jsxs("p",{className:"title",children:[o," : ",t," -"," ",c.jsx("span",{children:l?"Core":"Elective"})]}),i&&c.jsx(c.Fragment,{children:c.jsx("div",{className:"description",children:i})}),c.jsx("div",{className:"content",children:Ti(r||"No content.")})]}),c.jsx(Fd,{className:"ScrollAreaScrollbar",orientation:"vertical",children:c.jsx(Ud,{className:"ScrollAreaThumb"})}),c.jsx(Fd,{className:"ScrollAreaScrollbar",orientation:"horizontal",children:c.jsx(Ud,{className:"ScrollAreaThumb"})}),c.jsx(j3,{className:"ScrollAreaCorner"})]})})]})]}),dH=yt`
query GetAcademicProgrammes($filter: AcademicProgrammeFilter, $sort: AcademicProgrammeSort) {
    getAcademicProgrammes(filter: $filter, sort: $sort) {
      name
      _id
      image
    }
  }
`,fH=()=>vt(vn,dH,{filter:{deleted:{eq:!1}},sort:{createdAt:"ascending"}}),hH=e=>{const t=e.getAcademicProgrammes,n=[];if(t.length){for(const r of t)n.push({_id:r._id,name:r.name,image:r.image});return n}return null},pH=()=>gt({queryKey:["academicProgrammes"],queryFn:fH,select:hH}),mH=yt`
query ($filter: CourseFilter, $sort: CourseSort) {
  getCourses(filter: $filter, sort: $sort) {
    _id
    code
    name
    isCore
    description
    image
    summary
    level
    content
    programme {
      _id
    }
    academicProgrammes {
      _id
    }
  }
}
`,gH=e=>{const t=e.getCourses,n=[];if(t.length){for(const r of t)n.push({_id:r._id,code:r.code,name:r.name,image:r.image,summary:r.summary,content:r.content,description:r.description,academicProgrammes:r.academicProgrammes,programme:r.programme,level:r.level,isCore:r.isCore});return n}return null},vH=({filter:e,isEnabled:t})=>gt({queryKey:["courses",e],queryFn:()=>vt(vn,mH,{filter:{programme:{eq:e},deleted:{eq:!1}},sort:{createdAt:"ascending"}}),select:gH,enabled:t}),yH=yt`
query($filter: ProgrammeFilter!) {
  getProgramme(filter: $filter) {
    _id
    image
    name
    summary
    content
    certification
    expert_instructors
  }
}
`,AH=e=>Object.keys(e).length?{...e.getProgramme}:null,EH=({_id:e})=>gt({queryKey:["filteredProgramme",e],queryFn:()=>vt(vn,yH,{filter:{_id:{eq:e}}}),select:AH}),{colors:Qa}=q,bH=G.div`
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`,xH=G.p`
  font-size: 1.2rem;
  color: #555;
  margin: 1rem 0;
`,wH=G.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${Qa.primary};
  border: 1px solid ${Qa.primary};
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Qa.primary};
    color: #fff;
  }

  svg {
    margin-right: 0.5rem;
  }
`,SH=G(xe)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${Qa.primary};
  border: 1px solid ${Qa.primary};
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Qa.primary};
    color: #fff;
  }

  svg {
    margin-right: 0.5rem;
  }
`,CH=G.div`
  margin: 1rem 0;
  svg {
    width: 50px;
    height: 50px;
    fill: #555;
  }

    img {
        width: 100px;
        margin: 0 auto;
    }
`,TH=()=>c.jsxs(bH,{children:[c.jsx(CH,{children:c.jsx("img",{src:"/empty.svg",alt:"No courses uploaded"})}),c.jsx(xH,{children:"No courses uploaded under this program yet. Check back later."}),c.jsxs(wH,{children:[c.jsx(ZO,{}),"Report Issue"]}),c.jsxs(SH,{to:"/contact",style:{marginLeft:"1rem"},children:[c.jsx(JO,{}),"Contact Us"]})]}),{colors:qr}=q;G.section`
  .banner {
    height: ${P(320)};
    color: ${qr.white};
    background-color: ${qr.primary};
    ${Tt}

    .text-content {
      ${he}
      gap: 2rem;

      @media screen and (${O.medium}) {
        flex-direction: row;
        justify-content: space-between;
      }

      .left-section {
        display: flex;
        flex-direction: column;
        align-self: center;
        p,
        a {
          color: ${qr.yellow};
        }

        h1 {
          margin-top: 0.5rem;
          font-size: clamp(${P(25)}, 10vw, ${P(48)});
        }
      }

      .right-section {
        @media screen and (${O.medium}) {
          align-self: end;
          margin-top: 3rem;
        }

        div {
          max-width: 45ch;
        }
      }
    }
  }
  .meta {
    margin-top: 1.5rem;
    color: ${q.colors.yellow};
    font-size: ${P(14)};
    font-weight: 500;
    line-height: 1;
  }
  .content {
    ${he}
    gap: 2rem;

    @media screen and (${O.medium}) {
      margin-top: 2rem;
      flex-direction: row-reverse;
      align-items: center;
      gap: 2.5rem;

      > :first-child {
        flex-basis: 55%;
      }
      > :last-child {
        flex-basis: 45%;
      }
    }

    @media screen and (${O.large1}) {
      gap: 3rem;
    }
  }

  .text-content {
    .heading {
      font-size: clamp(${P(25)}, 10vw, ${P(40)});
      font-weight: 800;

      @media screen and (${O.medium}) {
        font-size: clamp(${P(40)}, 5vw, ${P(60)});
      }
    }

    .summary {
      margin-top: 1rem;
    }

    .cta {
      ${Lt}
      gap: 1rem;
      width: fit-content;
      margin-top: 2.5rem;
      white-space: nowrap;

      svg {
        ${de(P(40))}
        stroke: ${qr.primary};

        @media screen and (${O.small}) {
          ${de(P(25))};
        }

        rect {
          stroke: ${qr.primary};
        }
      }

      span {
        font-weight: 700;
      }
    }
  }

  .img-wrapper {
    img {
      background-color: ${q.colors.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
      }
    }
  }
`;const IH=G.p`
  display: flex;
  .text-container {
    font-size: ${P(18)};
    text-align: start;
    padding: 0.2rem 0;
  }

  .text-container:hover {
    color: ${qr.white};
    padding: 0.2rem 0.5rem;
    background-color: ${qr.primary};
  }
`,PH=G.section`
  margin-top: 6rem;

  .AllCourses{
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 4rem;
    padding: 2rem;

    @media screen and (${O.small}) {
        grid-template-columns: 1fr;
      }
      @media screen and (${O.medium}) {
        grid-template-columns: repeat(2, 1fr);
      }
  }

  .grid {
    display: flex;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
    flex-direction: column;

  }
    .legend {
  margin-bottom: 20px;
  font-size: 14px;
  display: flex;
  gap:1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.legend-item span {
  font-weight: 500;
}


  .academic-container {
    width: 100%;
    padding: 1rem ;
    color: ${qr.white};
    background-color: ${qr.primary};
    text-align: center;
    font-size: ${P(20)};
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .level-text {
    font-size: ${P(18)};
    font-weight: 600;
    margin-top: 0.5rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
    font-size: ${P(32)};
  }

  .img-wrapper {
    img {
      background-color: ${q.colors.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
      }
    }
  }
`,_H=()=>{gr("programmeDetail");const{id:e}=o1(),{data:t,isPending:n}=EH({_id:e}),{data:r,isPending:i}=pH(),{data:o,isPending:a}=vH({isEnabled:!!t,filter:(t==null?void 0:t._id)??""}),[s,l]=m.useState({}),[u,d]=m.useState(!1);m.useEffect(()=>{r&&r.length>0&&l({[r[0]._id]:!0})},[r]),m.useEffect(()=>{!n&&!a&&!i&&d(!0)},[n,a,i]);const h=f=>{l(p=>({...p,[f]:!p[f]}))};return c.jsxs(c.Fragment,{children:[!u&&c.jsx(mr,{isLoading:n||a||i}),c.jsxs(mn,{children:[c.jsx("title",{children:`${(t==null?void 0:t.name)??"Programme Detail"} - ${On}`}),c.jsx("meta",{name:"description",content:"Describes programme detail page"})]}),c.jsx(Rs,{quote:(t==null?void 0:t.name)??"Professional Certifications",quoteAuthor:(t==null?void 0:t.summary)||"No Information available yet, come back later.",images:Rc}),r&&o?c.jsx(PH,{children:c.jsxs(Re,{children:[c.jsx(Jo,{children:"Courses Offered"}),c.jsxs("div",{className:"AllCourses",children:[c.jsx(k5,{data:t}),c.jsxs("div",{children:[c.jsxs("div",{className:"legend",children:[c.jsxs("p",{className:"legend-item",children:[c.jsx(mp,{style:{color:"orange",marginRight:"8px"}}),c.jsx("span",{children:" - Core Courses"})]}),c.jsxs("p",{className:"legend-item",children:[c.jsx(mp,{style:{color:"gray",marginRight:"8px"}}),c.jsx("span",{children:" - Elective Courses"})]})]}),c.jsx("div",{className:"grid",children:r==null?void 0:r.filter(({_id:f})=>((o==null?void 0:o.filter(p=>{var v;return(v=p==null?void 0:p.academicProgrammes)==null?void 0:v.some(g=>g._id===f)}))??[]).length>0).map(({_id:f,name:p})=>{const v=o==null?void 0:o.filter(S=>{var E;return(E=S==null?void 0:S.academicProgrammes)==null?void 0:E.some(A=>A._id===f)});if((v==null?void 0:v.length)===0)return null;const g=v.reduce((S,E)=>{const A=E.level;return S[A]=S[A]||[],S[A].push(E),S},{});return c.jsxs("div",{children:[c.jsxs("div",{className:"academic-container",onClick:()=>h(f),role:"button",tabIndex:0,onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&h(f)},children:[p,c.jsx(Es,{style:{transform:s[f]?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s",fill:"white"}})]}),c.jsx("div",{style:{height:s[f]?"auto":"0",overflow:s[f]?"visible":"hidden",transition:"0.5s ease-in-out"},children:Object.entries(g).map(([S,E])=>c.jsxs("div",{children:[c.jsxs("p",{className:"level-text",children:[" Level ",S]}),E.map(A=>c.jsxs(Cf,{children:[c.jsx(uH,{...A}),c.jsx(IH,{children:c.jsxs(Tf,{className:"text-container",children:[A.code,": ",A.name," -"," ",c.jsx(mp,{style:{color:A.isCore?"orange":"gray"}})]})})]},A._id)),c.jsx("br",{})]},S))})]},f)})})]})]})]})}):c.jsx(TH,{}),c.jsx(pr,{})]})},RH=yt`
query($filter: ProjectFilter) {
  getProjects(filter: $filter) {
    _id
    bannerImage
    image
    name
    slug
    summary
    content
  }
}
`,OH=e=>{const t=e.getProjects,n=[];if(t.length){for(const r of t)n.push({_id:r._id,name:r.name,image:r.image,summary:r.summary,slug:r.slug,bannerImage:r.bannerImage,content:r.content});return n}return null},FC=({isEnabled:e,researchGroup:t})=>{const n=["departmentProjects",t].filter(r=>!!r);return gt({queryKey:n,queryFn:()=>vt(vn,RH,{filter:{...t&&{researchGroup:{eq:t}}}}),select:OH,enabled:e})},jH=yt`
  query {
    getResearchGroups {
      _id
      image
      name
      summary
      slug
      content
    }
  }
`,NH=e=>{const t=e.getResearchGroups,n=[];if(t.length){for(const r of t)n.push({_id:r._id,name:r.name,image:r.image,content:r.content,summary:r.summary,slug:r.slug});return n}return null},kH=()=>gt({queryKey:["researchGroups"],queryFn:()=>vt(vn,jH),select:NH}),$H=yt`
  query ResearchPage {
    researchPage {
      data {
        attributes {
          headerTitle
          headerSubtitle
          carouselTitle
          carouselSubtitle
          headerImage {
            data {
              attributes {
                url
              }
            }
          }
          carouselImages {
            data {
              attributes {
                url
                mime
                hash
              }
            }
          }
        }
      }
    }
  }
`,DH=()=>vt(Yo,$H),MH=e=>{const t={};if(Object.keys(e).length){const n=e.researchPage.data.attributes;return t.headerTitle=n.headerTitle,t.headerSubtitle=n.headerSubtitle,t.carouselTitle=n.carouselTitle,t.carouselSubtitle=n.carouselSubtitle,t.carouselImages=n.carouselImages,t.headerImage=n.headerImage,t}return null},LH=()=>gt({queryKey:["research"],queryFn:DH,select:MH}),{colors:gE}=q,FH=G.section`
  margin-top: 6rem;
  text-align: center;

  .heading {
    text-transform: uppercase;
  }

  .summary {
    max-width: 87ch;
    margin-top: 2rem;
    margin-inline: auto;
  }

  .carousel-container {
    margin-top: 3rem;
  }

  .card {
    /* ${de(P(248),P(200))} */
    width: min(100%, ${P(284)});
    height: ${P(200)};
  }

  .slide-btn {
    ${Tt}
    ${de(P(45))}
      transition: background-color 0.3s;
    border-radius: 50%;
    border: 1px solid ${gE.gray150};

    @media screen and (${O.small}) {
      ${de(P(55))}
    }

    &:hover,
    &:focus {
      background-color: hsl(216, 16%, 95%);
    }

    &:disabled {
      opacity: 0.5;
      background-color: ${gE.gray100};
    }
  }

  .alice-carousel {
    &__stage-item {
      padding-right: 0.5rem;

      @media screen and (${O.small}) {
        padding-inline: 0.5rem;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    &__prev-btn,
    &__next-btn {
      width: fit-content;
      margin-top: 1rem;
    }

    &__next-btn {
      margin-left: 1rem;
    }
  }
`,UH={0:{items:2.5},1024:{items:4.5}},BH=({title:e,subTitle:t,images:n})=>c.jsx(FH,{id:"about",children:c.jsxs(Re,{children:[c.jsx(gn,{className:"heading",children:e}),c.jsx("p",{className:"summary",children:t}),c.jsx("div",{className:"carousel-container",children:c.jsx(M1,{mouseTracking:!0,disableDotsControls:!0,items:n==null?void 0:n.map(({url:r,hash:i})=>c.jsx("div",{className:"card item",children:c.jsx("img",{src:r,alt:""})},i)),responsive:UH,renderNextButton:({isDisabled:r})=>c.jsx("button",{className:"slide-btn",disabled:r,children:c.jsx(pc,{})}),renderPrevButton:({isDisabled:r})=>c.jsx("button",{className:"slide-btn",disabled:r,children:c.jsx(Kf,{})})})})]})}),zH="/assets/project-1-n5t2vtqR.webp",{colors:cl}=q,VH=G.section`
  margin-top: 8rem;
  margin-bottom: 13rem;

  @media screen and (${O.small}) {
    margin-top: 10rem;
  }

  .projects-container {
    display: grid;
    gap: 2rem;
    margin-top: 3rem;

    p {
      text-align: center;
      grid-column: span 2 / span 2;
    }

    @media screen and (${O.medium}) {
      grid-template-columns: 1fr 1fr;
      row-gap: 3rem;
    }
  }

  .project {
    padding: 2.5rem 0 0 1rem;
    ${he}
    gap: 3rem;

    @media screen and (${O.small}) {
      padding: 4rem 0 0 2rem;
    }

    &:first-child {
      background-color: ${cl.purple100};

      @media screen and (${O.medium}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        grid-column: 1/3;
        grid-row: 1/2;

        > div {
          flex-basis: 50%;
        }
      }

      .text-content {
        @media screen and (${O.medium}) {
          padding-bottom: 4rem;
        }
        @media screen and (${O.large1}) {
          padding-left: 2rem;
        }
      }

      .cta {
        background-color: ${cl.purple};
      }

      .img-wrapper {
        padding-right: 0;
        height: 100%;

        img {
          object-position: top left;
        }
      }
    }

    &:nth-child(2),
    &:last-child {
      background-color: ${cl.yellow100};

      /* @media screen and (${O.medium}) {
        gap: 0;
      } */
      @media screen and (${O.large1}) {
        padding-left: 3.5rem;
        padding-right: 1rem;
      }

      .cta {
        background-color: ${cl.yellow};
      }

      /* .img-wrapper {
        @media screen and (${O.medium}) {
          margin-top: -2rem;
        }
      } */
    }

    .text-content {
      padding-right: 1rem;

      @media screen and (${O.large1}) {
        padding-right: 3rem;
      }

      .heading {
        font-size: clamp(${P(24)}, 9vw, ${P(28)});
      }

      .summary {
        margin-top: 1.5rem;
      }

      .cta {
        ${Lt}
        gap: 0.5rem;
        width: fit-content;
        padding-block: 0.55em;
        margin-top: 2rem;
        color: ${cl.white};
        border-color: rgb(0, 0, 0, 0);
      }
    }
  }

  .img-wrapper {
    pointer-events: none;
    padding-right: 1rem;
  }
`,UC=({data:e,title:t,limit:n=3})=>c.jsx(VH,{children:c.jsxs(Re,{children:[c.jsx(Jo,{children:t||"Department Projects"}),e!=null&&e.length?c.jsx("div",{className:"projects-container",children:e==null?void 0:e.slice(0,n).map(({_id:r,image:i,name:o,summary:a})=>c.jsxs("div",{className:"project",children:[c.jsxs("div",{className:"text-content",children:[c.jsx("h3",{className:"heading",children:o}),c.jsx("p",{className:"summary",children:a})]}),c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:i||zH,alt:o})})]},r))}):c.jsx(Qi,{children:"No projects at the moment."})]})}),HH=e=>m.createElement("svg",{width:64,height:64,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("g",{clipPath:"url(#clip0_950_17288)"},m.createElement("path",{d:"M25.2071 36.7929L24.5 37.5L31 44L37.5 37.5L36.7929 36.7929L31.5 42.0858L31.5 20L30.5 20L30.5 42.0857L25.2071 36.7929Z",fill:"white"})),m.createElement("rect",{x:.5,y:.5,width:63,height:63,rx:31.5,stroke:"white"}),m.createElement("defs",null,m.createElement("clipPath",{id:"clip0_950_17288"},m.createElement("rect",{width:24,height:24,fill:"white",transform:"matrix(-1 0 0 -1 44 44)"})))),{colors:vE}=q,QH=G.section`
  .content {
    ${he}
    gap: 2rem;

    @media screen and (${O.medium}) {
      margin-top: 2rem;
      flex-direction: row-reverse;
      align-items: center;
      gap: 2.5rem;

      & > :first-child {
        flex-basis: 55%;
      }
      & > :last-child {
        flex-basis: 45%;
      }
    }

    @media screen and (${O.large1}) {
      gap: 3rem;
    }
  }

  .text-content {
    .heading {
      font-size: clamp(${P(25)}, 10vw, ${P(40)});
      font-weight: 800;

      @media screen and (${O.medium}) {
        font-size: clamp(${P(40)}, 5vw, ${P(60)});
      }
    }

    .summary {
      margin-top: 1rem;
    }

    .cta {
      ${Lt}
      gap: 1rem;
      width: fit-content;
      margin-top: 2.5rem;
      white-space: nowrap;

      svg {
        ${de(P(40))}
        stroke: ${vE.primary};
        /* outline: 1px solid red; */

        @media screen and (${O.small}) {
          ${de(P(45))};
        }

        rect {
          stroke: ${vE.primary};
        }
      }

      span {
        font-weight: 700;
      }
    }
  }

  .img-wrapper {
    img {
      background-color: ${q.colors.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
      }
    }
  }
`,WH=({title:e,subTitle:t,image:n})=>c.jsx(QH,{children:c.jsx(Re,{children:c.jsxs("div",{className:"content",children:[c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:n,alt:"",width:634,height:692})}),c.jsxs("div",{className:"text-content",children:[c.jsx("h1",{className:"heading",children:e}),c.jsx("p",{className:"summary",children:t}),c.jsxs("a",{href:"#about",className:"cta",children:[c.jsx(HH,{}),c.jsx("span",{children:"LEARN MORE"})]})]})]})})}),GH=G.div`
  .img-wrapper {
    background: url(${xf}) center/cover no-repeat;
    aspect-ratio: 16/9;
  }

  .text-content {
    margin-top: 2rem;

    h3 {
      font-size: ${P(24)};
    }

    p {
      margin-top: 1rem;
    }

    .cta {
      margin-top: 2rem;
      ${Lt}
      gap: 0.75rem;
      width: fit-content;
    }
  }
`,qH=({image:e,heading:t,summary:n,slug:r})=>c.jsxs(GH,{children:[c.jsx("div",{className:"img-wrapper",children:c.jsx("img",{src:e,alt:""})}),c.jsxs("div",{className:"text-content",children:[c.jsx("h3",{children:t}),c.jsx("p",{children:n}),c.jsxs(kr,{to:r||"#",className:"cta",children:[c.jsx("span",{children:"Read more"}),c.jsx(kC,{})]})]})]}),YH=G.section`
  margin-top: 6rem;

  .cards-container {
    display: grid;
    gap: 3.5rem;
    margin-top: 3rem;

    @media screen and (${O.small}) {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      row-gap: 3rem;
      margin-top: 4rem;
    }

    @media screen and (${O.medium}) {
      column-gap: 3rem;
      row-gap: 5rem;
    }
  }
`,KH=({data:e})=>c.jsx(YH,{children:c.jsxs(Re,{children:[c.jsx(Jo,{children:"Research Groups"}),e!=null&&e.length?c.jsx("div",{className:"cards-container",children:e.map(({_id:t,image:n,name:r,summary:i,slug:o})=>c.jsx(qH,{image:n,heading:r,summary:i,slug:o},t))}):c.jsx(Qi,{children:"No research groups at the moment."})]})}),XH=()=>{var s,l,u,d,h;const{data:e,isPending:t}=LH(),{data:n,isPending:r}=kH(),{data:i,isPending:o}=FC({}),{preloaderStates:a}=gr("research");return c.jsxs(c.Fragment,{children:[(a==null?void 0:a.research)===0&&c.jsx(mr,{isLoading:t||r||o}),c.jsxs(mn,{children:[c.jsx("title",{children:`Research - ${On}`}),c.jsx("meta",{name:"description",content:"Describes research page"})]}),c.jsx(WH,{title:e==null?void 0:e.headerTitle,subTitle:e==null?void 0:e.headerSubtitle,image:`${Gn}${(u=(l=(s=e==null?void 0:e.headerImage)==null?void 0:s.data)==null?void 0:l.attributes)==null?void 0:u.url}`}),c.jsx(BH,{title:e==null?void 0:e.carouselTitle,subTitle:e==null?void 0:e.carouselSubtitle,images:(h=(d=e==null?void 0:e.carouselImages)==null?void 0:d.data)==null?void 0:h.map(f=>{var p,v,g;return{url:`${Gn}${(p=f==null?void 0:f.attributes)==null?void 0:p.url}`,mime:(v=f==null?void 0:f.attributes)==null?void 0:v.mime,hash:(g=f==null?void 0:f.attributes)==null?void 0:g.hash}})}),c.jsx(KH,{data:n||[]}),c.jsx(UC,{data:i||[]}),c.jsx(pr,{})]})},JH=yt`
query($filter: ResearchGroupFilter!) {
  getResearchGroup(filter: $filter) {
    _id
    image
    name
    summary
    slug
    content
  }
}
`,ZH=e=>Object.keys(e).length?{...e.getResearchGroup}:null,eQ=({slug:e})=>gt({queryKey:["filteredResearchGroup",e],queryFn:()=>vt(vn,JH,{filter:{slug:{eq:e}}}),select:ZH}),{colors:ul}=q,tQ=G.section`
  .banner {
    height: ${P(320)};
    color: ${ul.white};
    background-color: ${ul.primary};
    ${Tt}

    .text-content {
      ${he}
      gap: 2rem;

      @media screen and (${O.medium}) {
        flex-direction: row;
        justify-content: space-between;
        /* outline: 1px solid red; */
      }

      .left-section {
        display: flex;
        flex-direction: column;
        align-self: center;
        p,
        a {
          color: ${ul.yellow};
        }

        h1 {
          margin-top: 0.5rem;
          font-size: clamp(${P(25)}, 10vw, ${P(48)});
        }
      }

      .right-section {
        @media screen and (${O.medium}) {
          align-self: end;
          margin-top: 3rem;
        }

        div {
          max-width: 45ch;
        }
      }
    }
  }
  .meta {
    margin-top: 1.5rem;
    color: ${q.colors.yellow};
    font-size: ${P(14)};
    font-weight: 500;
    line-height: 1;
  }
  .content {
    ${he}
    gap: 2rem;

    @media screen and (${O.medium}) {
      margin-top: 2rem;
      flex-direction: row-reverse;
      align-items: center;
      gap: 2.5rem;

      & > :first-child {
        flex-basis: 55%;
      }
      > & :last-child {
        flex-basis: 45%;
      }
    }

    @media screen and (${O.large1}) {
      gap: 3rem;
    }
  }

  .text-content {
    .heading {
      font-size: clamp(${P(25)}, 10vw, ${P(40)});
      font-weight: 800;

      @media screen and (${O.medium}) {
        font-size: clamp(${P(40)}, 5vw, ${P(60)});
      }
    }

    .summary {
      margin-top: 1rem;
    }

    .cta {
      ${Lt}
      gap: 1rem;
      width: fit-content;
      margin-top: 2.5rem;
      white-space: nowrap;

      svg {
        ${de(P(40))}
        stroke: ${ul.primary};
        /* outline: 1px solid red; */

        @media screen and (${O.small}) {
          ${de(P(25))};
        }

        rect {
          stroke: ${ul.primary};
        }
      }

      span {
        font-weight: 700;
      }
    }
  }

  .img-wrapper {
    img {
      background-color: ${q.colors.gray100};

      @media screen and (${O.small}) {
        aspect-ratio: 16/9;
      }
      @media screen and (${O.medium}) {
        aspect-ratio: unset;
      }
    }
  }
`,Dp=G.section`
  h2 {
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
    font-size: ${P(32)};
  }

  .summary {
    max-width: 90ch;
  }
`,nQ=()=>{vf();const{slug:e}=o1(),{preloaderStates:t}=gr("researchDetail"),{data:n,isPending:r}=eQ({slug:e}),{data:i,isPending:o,isError:a,isSuccess:s}=MC({isEnabled:!!n,researchGroups:n==null?void 0:n._id}),{data:l}=FC({isEnabled:!!n,researchGroup:n==null?void 0:n._id});return m.useEffect(()=>()=>sessionStorage.setItem(jd,JSON.stringify({...t,researchDetail:0})),[]),c.jsxs(c.Fragment,{children:[(t==null?void 0:t.researchDetail)===0&&c.jsx(mr,{isLoading:r}),c.jsxs(mn,{children:[c.jsx("title",{children:`${(n==null?void 0:n.name)??"Research Detail"} - ${On}`}),c.jsx("meta",{name:"description",content:"Describes research detail page"})]}),c.jsx(tQ,{children:c.jsx("div",{className:"banner",children:c.jsx(Re,{children:c.jsxs("div",{className:"text-content",children:[c.jsxs("div",{className:"left-section",children:[c.jsxs(xe,{to:"/research",children:[c.jsx(BP,{})," ",c.jsx("span",{children:"Back to all research groups"})]}),c.jsx("h1",{children:n==null?void 0:n.name})]}),c.jsx("div",{className:"right-section",children:c.jsx("div",{})})]})})})}),c.jsx(Dp,{children:c.jsxs(Re,{children:[c.jsx("h2",{children:"Details"}),c.jsx(yn,{className:"summary",children:(n==null?void 0:n.content)||"No Information available yet, come back later."})]})}),c.jsx(Dp,{children:c.jsx(UC,{data:l||[],title:"Projects",limit:5})}),c.jsx(Dp,{children:c.jsxs(Re,{children:[c.jsx(Jo,{children:"Members"}),c.jsxs(LC,{children:[!i&&a&&c.jsx("p",{children:"Sorry, there was an error getting the staff in this group"}),o&&!i&&c.jsx("p",{children:"Just a second..."}),s&&!(i!=null&&i.length)&&c.jsx(Qi,{children:"No staff in this group"}),c.jsx("div",{className:"people-list-content",children:i==null?void 0:i.map(({_id:u,name:d,profileImageUrl:h,email:f})=>c.jsx(DC,{name:d,email:f,image:h,to:`/faculty/${u}`,searchParams:new URLSearchParams("group=6664788d33d7c32069301986")},u))})]})]})}),c.jsx(pr,{})]})},rQ=e=>m.createElement("svg",{width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z",fill:"white"})),iQ=e=>m.createElement("svg",{width:23,height:22,viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M11.5 0C8.51488 0 8.1395 0.01375 6.96663 0.066C5.79375 0.121 4.99487 0.30525 4.295 0.5775C3.56088 0.853626 2.89593 1.28676 2.34663 1.84663C1.7871 2.39621 1.35402 3.06108 1.0775 3.795C0.80525 4.4935 0.619625 5.29375 0.566 6.4625C0.51375 7.63812 0.5 8.01213 0.5 11.0014C0.5 13.9879 0.51375 14.3619 0.566 15.5347C0.621 16.7063 0.80525 17.5051 1.0775 18.205C1.35938 18.9282 1.73475 19.5415 2.34663 20.1534C2.95713 20.7652 3.57037 21.142 4.29363 21.4225C4.99487 21.6947 5.79238 21.8804 6.96388 21.934C8.13813 21.9862 8.51213 22 11.5 22C14.4879 22 14.8605 21.9862 16.0347 21.934C17.2049 21.879 18.0065 21.6947 18.7064 21.4225C19.44 21.1462 20.1045 20.7131 20.6534 20.1534C21.2652 19.5415 21.6406 18.9282 21.9225 18.205C22.1934 17.5051 22.379 16.7063 22.434 15.5347C22.4862 14.3619 22.5 13.9879 22.5 11C22.5 8.01213 22.4862 7.63813 22.434 6.46388C22.379 5.29375 22.1934 4.4935 21.9225 3.795C21.646 3.06106 21.2129 2.39618 20.6534 1.84663C20.1042 1.28655 19.4392 0.853387 18.705 0.5775C18.0037 0.30525 17.2035 0.119625 16.0334 0.066C14.8591 0.01375 14.4865 0 11.4973 0H11.5014H11.5ZM10.5141 1.98275H11.5014C14.4384 1.98275 14.7863 1.99238 15.9454 2.046C17.0179 2.09413 17.6009 2.27425 17.9886 2.42412C18.5015 2.6235 18.8686 2.86275 19.2536 3.24775C19.6386 3.63275 19.8765 3.9985 20.0759 4.51275C20.2271 4.89913 20.4059 5.48213 20.454 6.55463C20.5076 7.71375 20.5186 8.06163 20.5186 10.9973C20.5186 13.9329 20.5076 14.2821 20.454 15.4412C20.4059 16.5138 20.2257 17.0954 20.0759 17.4831C19.8995 17.9607 19.618 18.3926 19.2522 18.7467C18.8672 19.1318 18.5015 19.3696 17.9873 19.569C17.6023 19.7203 17.0192 19.899 15.9454 19.9485C14.7863 20.0007 14.4384 20.0131 11.5014 20.0131C8.56438 20.0131 8.21513 20.0007 7.056 19.9485C5.9835 19.899 5.40188 19.7203 5.01412 19.569C4.53631 19.3929 4.10405 19.1119 3.74913 18.7467C3.38303 18.392 3.10112 17.9598 2.92412 17.4818C2.77425 17.0954 2.59413 16.5124 2.546 15.4399C2.49375 14.2808 2.48275 13.9329 2.48275 10.9945C2.48275 8.0575 2.49375 7.711 2.546 6.55187C2.5955 5.47937 2.77425 4.89638 2.9255 4.50863C3.12488 3.99575 3.36412 3.62862 3.74913 3.24362C4.13412 2.85862 4.49988 2.62075 5.01412 2.42138C5.40188 2.27013 5.9835 2.09138 7.056 2.04188C8.07075 1.99513 8.464 1.98138 10.5141 1.98V1.98275ZM17.3726 3.80875C17.1993 3.80875 17.0276 3.84289 16.8675 3.90923C16.7073 3.97557 16.5618 4.0728 16.4392 4.19537C16.3167 4.31794 16.2194 4.46346 16.1531 4.62361C16.0868 4.78376 16.0526 4.95541 16.0526 5.12875C16.0526 5.30209 16.0868 5.47374 16.1531 5.63389C16.2194 5.79404 16.3167 5.93956 16.4392 6.06213C16.5618 6.1847 16.7073 6.28193 16.8675 6.34827C17.0276 6.41461 17.1993 6.44875 17.3726 6.44875C17.7227 6.44875 18.0585 6.30968 18.306 6.06213C18.5536 5.81458 18.6926 5.47884 18.6926 5.12875C18.6926 4.77866 18.5536 4.44292 18.306 4.19537C18.0585 3.94782 17.7227 3.80875 17.3726 3.80875ZM11.5014 5.3515C10.7521 5.33981 10.008 5.47729 9.31234 5.75594C8.61671 6.0346 7.98346 6.44885 7.44946 6.97458C6.91546 7.50032 6.49138 8.12703 6.20191 8.81823C5.91244 9.50944 5.76336 10.2513 5.76336 11.0007C5.76336 11.7501 5.91244 12.4919 6.20191 13.1831C6.49138 13.8743 6.91546 14.5011 7.44946 15.0268C7.98346 15.5525 8.61671 15.9668 9.31234 16.2454C10.008 16.5241 10.7521 16.6616 11.5014 16.6499C12.9844 16.6267 14.3988 16.0214 15.4393 14.9645C16.4799 13.9076 17.0631 12.4839 17.0631 11.0007C17.0631 9.51751 16.4799 8.09382 15.4393 7.03691C14.3988 5.97999 12.9844 5.37464 11.5014 5.3515ZM11.5014 7.33288C12.474 7.33288 13.4067 7.71923 14.0944 8.40695C14.7821 9.09467 15.1685 10.0274 15.1685 11C15.1685 11.9726 14.7821 12.9053 14.0944 13.593C13.4067 14.2808 12.474 14.6671 11.5014 14.6671C10.5288 14.6671 9.59605 14.2808 8.90833 13.593C8.22061 12.9053 7.83425 11.9726 7.83425 11C7.83425 10.0274 8.22061 9.09467 8.90833 8.40695C9.59605 7.71923 10.5288 7.33288 11.5014 7.33288Z",fill:"white"})),{colors:lo}=q,oQ=G.footer`
  padding-top: 3rem;
  margin-top: 10rem;
  background-color: ${lo.primary};
  color: ${sr(lo.white,.5)};

  .footer-links-container {
    ${he}
    gap: 2.5rem;

    @media screen and (${O.small}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (${O.medium}) {
      display: flex;
      flex-direction: row;
      gap: 3rem;
      /* display: grid;
      grid-template-columns: 1.04fr 0.96fr 1fr 1fr; */
    }

    .footer-links {
      ${he}
      gap: 0.75rem;

      &-item {
        font-size: ${P(14)};

        &:first-child {
          margin-bottom: 1rem;
          color: ${lo.white};
          font-size: ${P(17)};
          white-space: nowrap;
        }

        a {
          transition: color 0.3s;

          &:hover,
          &:focus {
            color: ${lo.white};
          }
        }
      }
    }
  }

  .copyright {
    padding-block: 2rem;
    margin-top: 2rem;
    border-top: 1px solid ${sr(lo.white,.5)};
    font-size: ${P(14)};
    /* outline: 1px solid red; */

    @media screen and (${O.small}) {
      ${As}
    }

    .social-icons {
      ${Lt}
      gap: 1.5rem;
      margin-top: 1.5rem;

      a:hover {
        svg {
          path {
            fill: ${sr(lo.white,1)};
          }
        }
      }

      svg {
        path {
          fill: ${sr(lo.white,.5)};
          transition: fill 0.3s;
        }
      }

      @media screen and (${O.small}) {
        margin-top: 0;
      }
    }
  }
`,aQ=()=>c.jsx(oQ,{children:c.jsxs(Re,{children:[c.jsxs("div",{className:"footer-links-container",children:[c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{className:"footer-links-item",children:"ABOUT THE DEPARTMENT"}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"/about-us/overview",children:"About"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"/research",children:"Research"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"/faculty",children:"Staff"})})]}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{className:"footer-links-item",children:"ADMISSIONS"}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"http://admission.ug.edu.gh/applying/undergraduate/overview",target:"_blank",children:"Undergraduate"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"http://admission.ug.edu.gh/applying/postgraduate/overview",target:"_blank",children:"Postgraduate"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"http://admission.ug.edu.gh/applying/international/overview",target:"_blank",children:"International"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"/entry-requirements",children:"Entry Requirements"})})]}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{className:"footer-links-item",children:"ACADEMICS"}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"#",children:"Course Schedules"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"#",children:"Undergraduate Courses"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"#",children:"Postgraduate Courses"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"https://forms.gle/smoyM5M3HWaayagk7",target:"_blank",children:"Student Support"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"https://www.ug.edu.gh/academics/calendar",target:"_blank",children:"Academic Calendar"})})]}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{className:"footer-links-item",children:"QUICK LINKS"}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"/events",children:"News & Events"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"/announcements",children:"Announcements"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"http://balme.ug.edu.gh/",target:"_blank",children:"Library"})})]}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{className:"footer-links-item",children:"LOCATE & CONTACT US"}),c.jsx("li",{className:"footer-links-item",children:c.jsxs("p",{children:["University Of Ghana, Legon Campus ",c.jsx("br",{}),"Opposite Mathematics Department"]})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"tel:+233 501 382 035",children:"Phone: +233 501 382 035"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"tel:+233 559 145 698:",children:"Phone: +233 559 145 698"})}),c.jsx("li",{className:"footer-links-item",children:c.jsx(xe,{to:"mailto:dcs@ug.edu.gh",children:"Email: dcs@ug.edu.gh"})})]})]}),c.jsxs("div",{className:"copyright",children:[c.jsxs("p",{children:["© ",c.jsx("span",{children:new Date().getFullYear()})," All rights reserved."]}),c.jsxs("ul",{className:"social-icons",children:[c.jsx("li",{children:c.jsx(xe,{target:"_blank",to:"https://www.facebook.com/univofgh","aria-label":"Facebook",children:c.jsx(rQ,{})})}),c.jsx("li",{children:c.jsx(xe,{target:"_blank",to:"https://www.instagram.com/explore/locations/468119891/university-of-ghana/","aria-label":"Instagram",children:c.jsx(iQ,{})})})]})]})]})}),BC=[{id:1,title:"Home",hasIcon:!1},{id:2,title:"Faculty",hasIcon:!1},{id:6,title:"Programmes",hasIcon:!0,link:"/programmes/665f404432a78958efb7fa3f",subLinks:[{id:1,title:"Undergraduate",link:"/programmes/665f404432a78958efb7fa3f"},{id:2,title:"Postgraduate",link:"/programmes/665f42e232a78958efb7fa42"},{id:3,title:"Short courses",link:"/programmes/665f3fbb32a78958efb7fa3c"},{id:4,title:"Professional Certification",link:"/programmes/professional-certification"}]},{id:4,title:"Research",hasIcon:!1},{id:5,title:"About us",hasIcon:!0,subLinks:t5,link:"/about-us/overview"}],sQ=G.div`
  --navbar-height: ${P(81)};

  position: absolute;
  top: var(--navbar-height);
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  background-color: ${q.colors.white};
  pointer-events: none;
  z-index: 99;
  transition: height 0.3s;

  &.appear {
    height: calc(100vh - var(--navbar-height));
    pointer-events: all;
  }

  &.disappear {
    display: none;
  }

  .mobile-menu-links {
    ${he}
    gap: 1rem;
    margin-top: 2rem;

    &-item {
      font-size: ${P(17)};

      &:last-child {
        font-size: ${P(15)};
        margin-top: 1rem;
      }

      a {
        ${Lt}
        gap: 0.5em;
      }
    }
  }
`,lQ=({isMobileMenuOpen:e,setIsMobileMenuOpen:t})=>{Jz(e);const n=m.useRef(null);return m.useEffect(()=>{var r,i;e?((i=n.current)==null||i.classList.remove("disappear"),setTimeout(()=>{var o;(o=n.current)==null||o.classList.add("appear")},100)):((r=n.current)==null||r.classList.remove("appear"),setTimeout(()=>{var o;(o=n.current)==null||o.classList.add("disappear")},400))},[e]),c.jsx(sQ,{ref:n,children:c.jsx(Re,{children:c.jsxs("ul",{className:"mobile-menu-links",children:[BC.map(({id:r,title:i,hasIcon:o,subLinks:a,link:s})=>c.jsxs("li",{className:"mobile-menu-links-item",children:[c.jsxs(Oo,{to:r===1?"/":s??i.toLocaleLowerCase().split(" ").join("-"),className:"main-nav",onClick:()=>t(!1),children:[i,o?c.jsx(Es,{}):null]}),a&&c.jsx("ul",{className:"sub-nav",children:a.map(l=>c.jsxs("li",{children:[c.jsxs(Oo,{onClick:()=>t(!1),to:l.link,children:[c.jsx("span",{children:l.title}),l.hasIcon?c.jsx(Es,{}):null]}),l.subLinks&&c.jsx("ul",{className:"sub-sub-nav",children:l.subLinks.map(u=>c.jsx("li",{children:c.jsx(Oo,{to:u.link,children:c.jsx("span",{children:u.title})})},u.id))})]},l.id))})]},r)),c.jsx("li",{children:c.jsx(kr,{to:"contact",className:"mobile-menu-links-item",onClick:()=>t(!1),children:"Contact Us"})})]})})})},cQ=e=>m.createElement("svg",{width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M1 1L11 11M1 11L11 1",stroke:"#153D6F",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),uQ=e=>m.createElement("svg",{width:18,height:12,viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M17 1H1M17 6H1M17 11H1",stroke:"#153D6F",strokeWidth:1.5,strokeLinecap:"round"})),dQ=G.nav`
  padding-block: 1.25rem;

  .navbar-content {
    ${As}

    .logo {
      margin-left: -0.6rem;
    }

    .nav-links {
      display: none;

      @media screen and (${O.medium}) {
        ${Lt}
        gap: 1.5rem;
        font-size: ${P(14)};
      }

      &-item {
        position: relative;

        &:hover .sub-nav {
          display: block;
        }

        a {
          ${Lt}
          gap: 0.5em;
          position: relative;

          &.active::before,
          &:hover::before {
            ${Or}
            top: 110%;
            left: 0;
            ${de("100%","1px")}
            background-color: ${q.colors.primary};
          }

          &.active {
            &::before {
              background-color: ${q.colors.primary};
            }
          }
        }
          .sub-nav.is-active {
          display: block;
        }

        .sub-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: ${q.colors.white};
          padding: 1rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 10;
          min-width: max-content; /* Ensure the width expands to fit content */

          li {
            position: relative;

            &:hover .sub-sub-nav {
              display: block;
            }

            a {
              display: flex;
              align-items: center;
              gap: 0.5em;
              padding: 0.5rem 1rem;
              position: relative;

              &.active::before,
              &:hover::before {
                ${Or}
                top: 110%;
                left: 0;
                ${de("100%","1px")}
                background-color: ${q.colors.primary};
              }

              &.active::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background-color: ${q.colors.primary};
              }
            }

            .sub-sub-nav {
              display: none;
              position: absolute;
              top: 0;
              left: 100%;
              background: ${q.colors.white};
              padding: 1rem;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              z-index: 10;
              min-width: max-content; /* Ensure the width expands to fit content */

              a {
                padding: 0.5rem 1rem;
                position: relative;

                &:hover::before {
                  ${Or}
                  top: 110%;
                  left: 0;
                  ${de("100%","1px")}
                  background-color: ${q.colors.primary};
                }
              }
            }
          }
        }
      }
    }

    .mobile-menu-btn {
      position: relative;
      margin-top: -0.5rem;
      ${de(P(22),P(19))}
      /* outline: 1px solid red; */

      @media screen and (${O.medium}) {
        display: none;
      }

      &.is-open {
        svg {
          &:first-child {
            display: none;
          }

          &:last-child {
            display: block;
          }
        }
      }

    svg {
        ${_s}
        ${de("100%")}
        /* outline: 1px solid red; */

        &:first-child {
          display: block;
        }

        &:last-child {
          display: none;
        }
      }
    }
  }
`,fQ=({isMobileMenuOpen:e,setIsMobileMenuOpen:t})=>c.jsx(dQ,{children:c.jsx(Re,{children:c.jsxs("div",{className:"navbar-content",children:[c.jsx(xe,{to:"/",className:"logo",children:c.jsx(e5,{})}),c.jsxs("ul",{className:"nav-links",children:[BC.map(({id:n,title:r,hasIcon:i,subLinks:o,link:a})=>c.jsxs("li",{className:"nav-links-item",children:[c.jsxs(Oo,{to:n===1?"/":a??r.toLowerCase().split(" ").join("-"),children:[c.jsx("span",{children:r}),i?c.jsx(Es,{}):null]}),o&&c.jsx("ul",{className:"sub-nav",children:o.map(s=>c.jsxs("li",{children:[c.jsxs(Oo,{to:s.link,children:[c.jsx("span",{children:s.title}),s.hasIcon?c.jsx(Es,{}):null]}),s.subLinks&&c.jsx("ul",{className:"sub-sub-nav",children:s.subLinks.map(l=>c.jsx("li",{children:c.jsx(Oo,{to:l.link,children:c.jsx("span",{children:l.title})})},l.id))})]},s.id))})]},n)),c.jsx("li",{children:c.jsx(kr,{to:"/#contact",children:"Contact Us"})})]}),c.jsxs("button",{className:`mobile-menu-btn ${e?"is-open":""}`,"aria-label":"Menu","aria-expanded":e,onClick:()=>{t(!e)},children:[c.jsx(uQ,{}),c.jsx(cQ,{})]})]})})}),hQ=()=>{const[e,t]=m.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx(fQ,{isMobileMenuOpen:e,setIsMobileMenuOpen:t}),c.jsx(lQ,{isMobileMenuOpen:e,setIsMobileMenuOpen:t}),c.jsx(k8,{}),c.jsx(h8,{}),c.jsx(aQ,{})]})},pQ=x8(eg(c.jsxs(tt,{path:"/",element:c.jsx(hQ,{}),children:[c.jsx(tt,{index:!0,element:c.jsx(UV,{})}),c.jsxs(tt,{path:"about-us",children:[c.jsx(tt,{path:"overview",index:!0,element:c.jsx(lj,{})}),c.jsx(tt,{path:"history",element:c.jsx(BO,{})}),c.jsx(tt,{path:"mission-vision",element:c.jsx(ij,{})}),c.jsx(tt,{path:"leadership",element:c.jsx(fj,{})}),c.jsx(tt,{path:"affiliates-partners",element:c.jsx($O,{})})]}),c.jsx(tt,{path:"academics",element:c.jsx(Ej,{})}),c.jsx(tt,{path:"programmes",children:c.jsx(tt,{path:":id",element:c.jsx(_H,{})})}),c.jsxs(tt,{path:"research",children:[c.jsx(tt,{index:!0,element:c.jsx(XH,{})}),c.jsx(tt,{path:":slug",element:c.jsx(nQ,{})})]}),c.jsx(tt,{path:"events",element:c.jsx(hV,{})}),c.jsx(tt,{path:"announcements",element:c.jsx(Ck,{})}),c.jsxs(tt,{path:"faculty",children:[c.jsx(tt,{index:!0,element:c.jsx(lH,{})}),c.jsx(tt,{path:":id",element:c.jsx(iH,{})})]}),c.jsx(tt,{path:"business-desk",element:c.jsx(W$,{})}),c.jsx(tt,{path:"contact",element:c.jsx(Yz,{})}),c.jsx(tt,{path:"*",element:c.jsx(sV,{})})]}))),mQ=()=>{const e={home:0,people:0,academics:0,research:0,researchDetail:0,about:0,businessDesk:0,contact:0,events:0,programmes:0,programmeDetail:0,announcements:0};return sessionStorage.setItem(jd,JSON.stringify(e)),c.jsxs(c.Fragment,{children:[c.jsx(Q8,{}),c.jsx(R8,{router:pQ})]})},gQ=new $6({defaultOptions:{queries:{staleTime:1/0,refetchOnWindowFocus:!1}}});Mp.createRoot(document.getElementById("root")).render(c.jsx(K.StrictMode,{children:c.jsx(KI,{enableVendorPrefixes:!0,children:c.jsxs(U6,{client:gQ,children:[c.jsx(Z6,{}),c.jsx(mQ,{})]})})}))});export default vQ();
