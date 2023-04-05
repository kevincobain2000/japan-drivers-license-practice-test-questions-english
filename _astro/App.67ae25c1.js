import{r as j}from"./index.45a47ed6.js";function Ve(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ae={},De={get exports(){return ae},set exports(t){ae=t}},ie={},Qe={get exports(){return ie},set exports(t){ie=t}},G=1;function We(){return G=(G*9301+49297)%233280,G/233280}function Ke(t){G=t}var Ge={nextValue:We,seed:Ke},oe=Ge,F="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",L,je,D;function le(){D=!1}function Ie(t){if(!t){L!==F&&(L=F,le());return}if(t!==L){if(t.length!==F.length)throw new Error("Custom alphabet for shortid must be "+F.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(s,r,n){return r!==n.lastIndexOf(s)});if(e.length)throw new Error("Custom alphabet for shortid must be "+F.length+" unique characters. These characters were not unique: "+e.join(", "));L=t,le()}}function He(t){return Ie(t),L}function Ue(t){oe.seed(t),je!==t&&(le(),je=t)}function Ye(){L||Ie(F);for(var t=L.split(""),e=[],s=oe.nextValue(),r;t.length>0;)s=oe.nextValue(),r=Math.floor(s*t.length),e.push(t.splice(r,1)[0]);return e.join("")}function Se(){return D||(D=Ye(),D)}function Xe(t){var e=Se();return e[t]}function Je(){return L||F}var xe={get:Je,characters:He,seed:Ue,lookup:Xe,shuffled:Se},ne=typeof window=="object"&&(window.crypto||window.msCrypto),he;!ne||!ne.getRandomValues?he=function(t){for(var e=[],s=0;s<t;s++)e.push(Math.floor(Math.random()*256));return e}:he=function(t){return ne.getRandomValues(new Uint8Array(t))};var qe=he,Ze=function(t,e,s){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,n=-~(1.6*r*s/e.length),a="";;)for(var i=t(n),o=n;o--;)if(a+=e[i[o]&r]||"",a.length===+s)return a},et=xe,tt=qe,st=Ze;function rt(t){for(var e=0,s,r="";!s;)r=r+st(tt,et.get(),1),s=t<Math.pow(16,e+1),e++;return r}var nt=rt,Q=nt,ct=1567752802062,at=7,W,Me;function it(t){var e="",s=Math.floor((Date.now()-ct)*.001);return s===Me?W++:(W=0,Me=s),e=e+Q(at),e=e+Q(t),W>0&&(e=e+Q(W)),e=e+Q(s),e}var ot=it,lt=xe;function ht(t){if(!t||typeof t!="string"||t.length<6)return!1;var e=new RegExp("[^"+lt.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!e.test(t)}var ut=ht;(function(t){var e=xe,s=ot,r=ut,n=0;function a(h){return e.seed(h),t.exports}function i(h){return n=h,t.exports}function o(h){return h!==void 0&&e.characters(h),e.shuffled()}function l(){return s(n)}t.exports=l,t.exports.generate=l,t.exports.seed=a,t.exports.worker=i,t.exports.characters=o,t.exports.isValid=r})(Qe);(function(t){t.exports=ie})(De);const dt=Ve(ae),H=j;function ft({title:t,titleId:e,...s},r){return H.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?H.createElement("title",{id:e},t):null,H.createElement("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))}const pt=H.forwardRef(ft);var gt=pt;const U=j;function mt({title:t,titleId:e,...s},r){return U.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?U.createElement("title",{id:e},t):null,U.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}const xt=U.forwardRef(mt);var wt=xt;const Y=j;function vt({title:t,titleId:e,...s},r){return Y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?Y.createElement("title",{id:e},t):null,Y.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",clipRule:"evenodd"}))}const jt=Y.forwardRef(vt);var Mt=jt;const X=j;function bt({title:t,titleId:e,...s},r){return X.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?X.createElement("title",{id:e},t):null,X.createElement("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",clipRule:"evenodd"}))}const yt=X.forwardRef(bt);var Et=yt;const J=j;function Nt({title:t,titleId:e,...s},r){return J.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?J.createElement("title",{id:e},t):null,J.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}const At=J.forwardRef(Nt);var It=At;const q=j;function St({title:t,titleId:e,...s},r){return q.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?q.createElement("title",{id:e},t):null,q.createElement("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}))}const Rt=q.forwardRef(St);var _t=Rt;const Z=j;function Ct({title:t,titleId:e,...s},r){return Z.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?Z.createElement("title",{id:e},t):null,Z.createElement("path",{fillRule:"evenodd",d:"M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z",clipRule:"evenodd"}))}const $t=Z.forwardRef(Ct);var kt=$t;const ee=j;function Lt({title:t,titleId:e,...s},r){return ee.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},s),t?ee.createElement("title",{id:e},t):null,ee.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}const Ot=ee.forwardRef(Lt);var Ft=Ot,Re=gt,Tt=wt,zt=Mt,Bt=Et,Pt=It,Vt=_t,Dt=kt,_e=Ft,c={},Qt={get exports(){return c},set exports(t){c=t}},se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wt=j,Kt=Symbol.for("react.element"),Gt=Symbol.for("react.fragment"),Ht=Object.prototype.hasOwnProperty,Ut=Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yt={key:!0,ref:!0,__self:!0,__source:!0};function Ce(t,e,s){var r,n={},a=null,i=null;s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)Ht.call(e,r)&&!Yt.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:Kt,type:t,key:a,ref:i,props:n,_owner:Ut.current}}se.Fragment=Gt;se.jsx=Ce;se.jsxs=Ce;(function(t){t.exports=se})(Qt);function Xt(t){const{question:e,index:s,showAllAnswers:r,handleOverallScore:n}=t,a=i=>{e.answered=!0,e.chosenAnswer=i,n(e)};return c.jsx("div",{className:"grid place-items-center mt-10",children:c.jsx("div",{className:"card w-96 bg-neutral text-neutral-content rounded-none",children:c.jsxs("div",{className:"card-body ",children:[c.jsxs("span",{className:"text-slate-500",children:[c.jsx(Pt,{className:"w-5 h-5 inline"})," Question ",s+1]}),c.jsx("p",{className:"text-slate-200",children:e.question}),e.img!=""&&c.jsx("div",{className:"grid w-full place-items-center mt-5",children:c.jsx("img",{src:"images/"+e.img,alt:"traffic sign",height:"200",width:"200"})}),c.jsx("div",{className:"divider"}),c.jsx("div",{className:"card-actions justify-center",children:!e.answered&&!r?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn pl-10 pr-10",onClick:()=>a(!0),children:"True"}),c.jsx("button",{className:"btn pl-10 pr-10",onClick:()=>a(!1),children:"False"})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:`btn pl-10 pr-10 ${e.answer===!0?"btn-success":""} ${e.chosenAnswer===!0?"btn-outline":""}`,children:"True"}),c.jsx("button",{className:`btn pl-10 pr-10 ${e.answer===!1?"btn-error":""} ${e.chosenAnswer===!1?"btn-outline":""}`,children:"False"})]})}),e.answered&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"divider"}),e.answer!==e.chosenAnswer&&c.jsxs("div",{className:"text-error uppercase font-bold",children:[c.jsx(_e,{className:"w-5 h-5 inline"})," Wrong"]}),e.answer===e.chosenAnswer&&c.jsxs("div",{className:"text-success uppercase font-bold",children:[c.jsx(Re,{className:"w-5 h-5 inline"})," Correct"]})]}),e.explaination&&e.explaination.trim().toLowerCase()!="correct"&&(r||e.answered)&&c.jsxs("p",{className:"text-slate-400 mt-4 text-info",children:[c.jsx(Tt,{className:"w-5 h-5 inline"})," ",e.explaination]})]})})})}function $(t){return Array.isArray?Array.isArray(t):Le(t)==="[object Array]"}const Jt=1/0;function qt(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Jt?"-0":e}function Zt(t){return t==null?"":qt(t)}function C(t){return typeof t=="string"}function $e(t){return typeof t=="number"}function es(t){return t===!0||t===!1||ts(t)&&Le(t)=="[object Boolean]"}function ke(t){return typeof t=="object"}function ts(t){return ke(t)&&t!==null}function A(t){return t!=null}function ce(t){return!t.trim().length}function Le(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ss="Incorrect 'index' type",rs=t=>`Invalid value for key ${t}`,ns=t=>`Pattern length exceeds max of ${t}.`,cs=t=>`Missing ${t} property in key`,as=t=>`Property 'weight' in key '${t}' must be a positive integer`,be=Object.prototype.hasOwnProperty;class is{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=Oe(r);s+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Oe(t){let e=null,s=null,r=null,n=1,a=null;if(C(t)||$(t))r=t,e=ye(t),s=ue(t);else{if(!be.call(t,"name"))throw new Error(cs("name"));const i=t.name;if(r=i,be.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(as(i));e=ye(i),s=ue(i),a=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:a}}function ye(t){return $(t)?t:t.split(".")}function ue(t){return $(t)?t.join("."):t}function os(t,e){let s=[],r=!1;const n=(a,i,o)=>{if(A(a))if(!i[o])s.push(a);else{let l=i[o];const h=a[l];if(!A(h))return;if(o===i.length-1&&(C(h)||$e(h)||es(h)))s.push(Zt(h));else if($(h)){r=!0;for(let u=0,p=h.length;u<p;u+=1)n(h[u],i,o+1)}else i.length&&n(h,i,o+1)}};return n(t,C(e)?e.split("."):e,0),r?s:s[0]}const ls={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},hs={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},us={location:0,threshold:.6,distance:100},ds={useExtendedSearch:!1,getFn:os,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...hs,...ls,...us,...ds};const fs=/[^ ]+/g;function ps(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(n){const a=n.match(fs).length;if(s.has(a))return s.get(a);const i=1/Math.pow(a,.5*t),o=parseFloat(Math.round(i*r)/r);return s.set(a,o),o},clear(){s.clear()}}}class we{constructor({getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=ps(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,C(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();C(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!A(e)||ce(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,a)=>{let i=n.getFn?n.getFn(e):this.getFn(e,n.path);if(A(i)){if($(i)){let o=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:h,value:u}=l.pop();if(A(u))if(C(u)&&!ce(u)){let p={v:u,i:h,n:this.norm.get(u)};o.push(p)}else $(u)&&u.forEach((p,g)=>{l.push({nestedArrIndex:g,value:p})})}r.$[a]=o}else if(C(i)&&!ce(i)){let o={v:i,n:this.norm.get(i)};r.$[a]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Fe(t,e,{getFn:s=d.getFn,fieldNormWeight:r=d.fieldNormWeight}={}){const n=new we({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(Oe)),n.setSources(e),n.create(),n}function gs(t,{getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:r,records:n}=t,a=new we({getFn:e,fieldNormWeight:s});return a.setKeys(r),a.setIndexRecords(n),a}function K(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=d.distance,ignoreLocation:a=d.ignoreLocation}={}){const i=e/t.length;if(a)return i;const o=Math.abs(r-s);return n?i+o/n:o?1:i}function ms(t=[],e=d.minMatchCharLength){let s=[],r=-1,n=-1,a=0;for(let i=t.length;a<i;a+=1){let o=t[a];o&&r===-1?r=a:!o&&r!==-1&&(n=a-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[a-1]&&a-r>=e&&s.push([r,a-1]),s}const T=32;function xs(t,e,s,{location:r=d.location,distance:n=d.distance,threshold:a=d.threshold,findAllMatches:i=d.findAllMatches,minMatchCharLength:o=d.minMatchCharLength,includeMatches:l=d.includeMatches,ignoreLocation:h=d.ignoreLocation}={}){if(e.length>T)throw new Error(ns(T));const u=e.length,p=t.length,g=Math.max(0,Math.min(r,p));let x=a,w=g;const y=o>1||l,v=y?Array(p):[];let N;for(;(N=t.indexOf(e,w))>-1;){let E=K(e,{currentLocation:N,expectedLocation:g,distance:n,ignoreLocation:h});if(x=Math.min(E,x),w=N+u,y){let S=0;for(;S<u;)v[N+S]=1,S+=1}}w=-1;let M=[],I=1,z=u+p;const re=1<<u-1;for(let E=0;E<u;E+=1){let S=0,R=z;for(;S<R;)K(e,{errors:E,currentLocation:g+R,expectedLocation:g,distance:n,ignoreLocation:h})<=x?S=R:z=R,R=Math.floor((z-S)/2+S);z=R;let V=Math.max(1,g-R+1),f=i?p:Math.min(g+R,p)+u,m=Array(f+2);m[f+1]=(1<<E)-1;for(let b=f;b>=V;b-=1){let k=b-1,ve=s[t.charAt(k)];if(y&&(v[k]=+!!ve),m[b]=(m[b+1]<<1|1)&ve,E&&(m[b]|=(M[b+1]|M[b])<<1|1|M[b+1]),m[b]&re&&(I=K(e,{errors:E,currentLocation:k,expectedLocation:g,distance:n,ignoreLocation:h}),I<=x)){if(x=I,w=k,w<=g)break;V=Math.max(1,2*g-w)}}if(K(e,{errors:E+1,currentLocation:g,expectedLocation:g,distance:n,ignoreLocation:h})>x)break;M=m}const P={isMatch:w>=0,score:Math.max(.001,I)};if(y){const E=ms(v,o);E.length?l&&(P.indices=E):P.isMatch=!1}return P}function ws(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}class Te{constructor(e,{location:s=d.location,threshold:r=d.threshold,distance:n=d.distance,includeMatches:a=d.includeMatches,findAllMatches:i=d.findAllMatches,minMatchCharLength:o=d.minMatchCharLength,isCaseSensitive:l=d.isCaseSensitive,ignoreLocation:h=d.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:a,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:h},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(g,x)=>{this.chunks.push({pattern:g,alphabet:ws(g),startIndex:x})},p=this.pattern.length;if(p>T){let g=0;const x=p%T,w=p-x;for(;g<w;)u(this.pattern.substr(g,T),g),g+=T;if(x){const y=p-T;u(this.pattern.substr(y),y)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let w={isMatch:!0,score:0};return r&&(w.indices=[[0,e.length-1]]),w}const{location:n,distance:a,threshold:i,findAllMatches:o,minMatchCharLength:l,ignoreLocation:h}=this.options;let u=[],p=0,g=!1;this.chunks.forEach(({pattern:w,alphabet:y,startIndex:v})=>{const{isMatch:N,score:M,indices:I}=xs(e,w,y,{location:n+v,distance:a,threshold:i,findAllMatches:o,minMatchCharLength:l,includeMatches:r,ignoreLocation:h});N&&(g=!0),p+=M,N&&I&&(u=[...u,...I])});let x={isMatch:g,score:g?p/this.chunks.length:1};return g&&r&&(x.indices=u),x}}class O{constructor(e){this.pattern=e}static isMultiMatch(e){return Ee(e,this.multiRegex)}static isSingleMatch(e){return Ee(e,this.singleRegex)}search(){}}function Ee(t,e){const s=t.match(e);return s?s[1]:null}class vs extends O{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class js extends O{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Ms extends O{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class bs extends O{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ys extends O{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Es extends O{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ze extends O{constructor(e,{location:s=d.location,threshold:r=d.threshold,distance:n=d.distance,includeMatches:a=d.includeMatches,findAllMatches:i=d.findAllMatches,minMatchCharLength:o=d.minMatchCharLength,isCaseSensitive:l=d.isCaseSensitive,ignoreLocation:h=d.ignoreLocation}={}){super(e),this._bitapSearch=new Te(e,{location:s,threshold:r,distance:n,includeMatches:a,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Be extends O{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const n=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+a,n.push([r,s-1]);const i=!!n.length;return{isMatch:i,score:i?0:1,indices:n}}}const de=[vs,Be,Ms,bs,Es,ys,js,ze],Ne=de.length,Ns=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,As="|";function Is(t,e={}){return t.split(As).map(s=>{let r=s.trim().split(Ns).filter(a=>a&&!!a.trim()),n=[];for(let a=0,i=r.length;a<i;a+=1){const o=r[a];let l=!1,h=-1;for(;!l&&++h<Ne;){const u=de[h];let p=u.isMultiMatch(o);p&&(n.push(new u(p,e)),l=!0)}if(!l)for(h=-1;++h<Ne;){const u=de[h];let p=u.isSingleMatch(o);if(p){n.push(new u(p,e));break}}}return n})}const Ss=new Set([ze.type,Be.type]);class Rs{constructor(e,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:r=d.includeMatches,minMatchCharLength:n=d.minMatchCharLength,ignoreLocation:a=d.ignoreLocation,findAllMatches:i=d.findAllMatches,location:o=d.location,threshold:l=d.threshold,distance:h=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:i,ignoreLocation:a,location:o,threshold:l,distance:h},this.pattern=s?e:e.toLowerCase(),this.query=Is(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let a=0,i=[],o=0;for(let l=0,h=s.length;l<h;l+=1){const u=s[l];i.length=0,a=0;for(let p=0,g=u.length;p<g;p+=1){const x=u[p],{isMatch:w,indices:y,score:v}=x.search(e);if(w){if(a+=1,o+=v,r){const N=x.constructor.type;Ss.has(N)?i=[...i,...y]:i.push(y)}}else{o=0,a=0,i.length=0;break}}if(a){let p={isMatch:!0,score:o/a};return r&&(p.indices=i),p}}return{isMatch:!1,score:1}}}const fe=[];function _s(...t){fe.push(...t)}function pe(t,e){for(let s=0,r=fe.length;s<r;s+=1){let n=fe[s];if(n.condition(t,e))return new n(t,e)}return new Te(t,e)}const te={AND:"$and",OR:"$or"},ge={PATH:"$path",PATTERN:"$val"},me=t=>!!(t[te.AND]||t[te.OR]),Cs=t=>!!t[ge.PATH],$s=t=>!$(t)&&ke(t)&&!me(t),Ae=t=>({[te.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Pe(t,e,{auto:s=!0}={}){const r=n=>{let a=Object.keys(n);const i=Cs(n);if(!i&&a.length>1&&!me(n))return r(Ae(n));if($s(n)){const l=i?n[ge.PATH]:a[0],h=i?n[ge.PATTERN]:n[l];if(!C(h))throw new Error(rs(l));const u={keyId:ue(l),pattern:h};return s&&(u.searcher=pe(h,e)),u}let o={children:[],operator:a[0]};return a.forEach(l=>{const h=n[l];$(h)&&h.forEach(u=>{o.children.push(r(u))})}),o};return me(t)||(t=Ae(t)),r(t)}function ks(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:a,score:i})=>{const o=n?n.weight:null;r*=Math.pow(i===0&&o?Number.EPSILON:i,(o||1)*(e?1:a))}),s.score=r})}function Ls(t,e){const s=t.matches;e.matches=[],A(s)&&s.forEach(r=>{if(!A(r.indices)||!r.indices.length)return;const{indices:n,value:a}=r;let i={indices:n,value:a};r.key&&(i.key=r.key.src),r.idx>-1&&(i.refIndex=r.idx),e.matches.push(i)})}function Os(t,e){e.score=t.score}function Fs(t,e,{includeMatches:s=d.includeMatches,includeScore:r=d.includeScore}={}){const n=[];return s&&n.push(Ls),r&&n.push(Os),t.map(a=>{const{idx:i}=a,o={item:e[i],refIndex:i};return n.length&&n.forEach(l=>{l(a,o)}),o})}class B{constructor(e,s={},r){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new is(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof we))throw new Error(ss);this._myIndex=s||Fe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){A(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,n-=1,s.push(a))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:a,sortFn:i,ignoreFieldNorm:o}=this.options;let l=C(e)?C(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ks(l,{ignoreFieldNorm:o}),a&&l.sort(i),$e(s)&&s>-1&&(l=l.slice(0,s)),Fs(l,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const s=pe(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:a,i,n:o})=>{if(!A(a))return;const{isMatch:l,score:h,indices:u}=s.searchIn(a);l&&n.push({item:a,idx:i,matches:[{score:h,value:a,norm:o,indices:u}]})}),n}_searchLogical(e){const s=Pe(e,this.options),r=(o,l,h)=>{if(!o.children){const{keyId:p,searcher:g}=o,x=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(l,p),searcher:g});return x&&x.length?[{idx:h,item:l,matches:x}]:[]}const u=[];for(let p=0,g=o.children.length;p<g;p+=1){const x=o.children[p],w=r(x,l,h);if(w.length)u.push(...w);else if(o.operator===te.AND)return[]}return u},n=this._myIndex.records,a={},i=[];return n.forEach(({$:o,i:l})=>{if(A(o)){let h=r(s,o,l);h.length&&(a[l]||(a[l]={idx:l,item:o,matches:[]},i.push(a[l])),h.forEach(({matches:u})=>{a[l].matches.push(...u)}))}}),i}_searchObjectList(e){const s=pe(e,this.options),{keys:r,records:n}=this._myIndex,a=[];return n.forEach(({$:i,i:o})=>{if(!A(i))return;let l=[];r.forEach((h,u)=>{l.push(...this._findMatches({key:h,value:i[u],searcher:s}))}),l.length&&a.push({idx:o,item:i,matches:l})}),a}_findMatches({key:e,value:s,searcher:r}){if(!A(s))return[];let n=[];if($(s))s.forEach(({v:a,i,n:o})=>{if(!A(a))return;const{isMatch:l,score:h,indices:u}=r.searchIn(a);l&&n.push({score:h,key:e,value:a,idx:i,norm:o,indices:u})});else{const{v:a,n:i}=s,{isMatch:o,score:l,indices:h}=r.searchIn(a);o&&n.push({score:l,key:e,value:a,norm:i,indices:h})}return n}}B.version="6.6.2";B.createIndex=Fe;B.parseIndex=gs;B.config=d;B.parseQuery=Pe;_s(Rs);function zs(){const[t,e]=j.useState(1),[s,r]=j.useState(0),[n,a]=j.useState("dark"),[i,o]=j.useState([]),[l,h]=j.useState([]),[u,p]=j.useState("questions"),[g,x]=j.useState(!1),[w,y]=j.useState(50),[v,N]=j.useState(0),[M,I]=j.useState(0),z={keys:["question"],threshold:.3},re=f=>{o(l.slice(0,f)),N(0),I(0),e(1),r(Math.round(l.length/f))},P=f=>{if(f=f.trim(),!f){o(l.slice(0,w));return}const _=new B(i,z).search(f),b=[];for(let k=0;k<_.length;k++)b.push(_[k].item);o(b)};j.useEffect(()=>{const f=document.getElementById("questions").getAttribute("data-questions"),m=JSON.parse(f);h(m);let _=m.slice(0,w);_=V(_),o(_),r(Math.round(m.length/50)),document.documentElement.getAttribute("data-theme")||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),a("dark")):(document.documentElement.setAttribute("data-theme","light"),a("light")))},[]);const E=()=>{const f=document.documentElement.getAttribute("data-theme");f&&(document.documentElement.setAttribute("data-theme",f==="dark"?"light":"dark"),a(f==="dark"?"light":"dark"))},S=f=>{f.answer==f.chosenAnswer?N(v+1):I(M+1)},R=f=>{e(f);let m=l.slice(f*w,(f+1)*w);m=V(m),o(m),N(0),I(0),p("questions"),window.scrollTo(0,0)},V=f=>{for(let m=f.length-1;m>0;m--){const _=Math.floor(Math.random()*(m+1));[f[m],f[_]]=[f[_],f[m]]}return f.forEach(m=>{m.chosenAnswer=null,m.ansewered=null}),f};return c.jsx(c.Fragment,{children:u==="questions"&&c.jsxs(c.Fragment,{children:[!g&&c.jsx("div",{className:"grid place-items-center mt-5 sticky top-0 z-50",children:c.jsx("div",{className:"card w-96 bg-base-200 text-neutral-content",children:c.jsx("div",{className:"items-center",children:c.jsx("div",{className:"overflow-x-auto",children:c.jsx("table",{className:"table table-compact w-full",children:c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsxs("th",{className:"text-success font-bold",children:[c.jsx(Re,{className:"w-5 h-5 inline"})," Correct"]}),c.jsx("td",{className:"text-success font-bold",children:v}),c.jsx("td",{children:c.jsxs("span",{className:"pl-10 pr-10 text-slate-500",children:[c.jsx("b",{children:v+M})," of ",c.jsx("b",{children:i.length})," questions"]})})]}),c.jsxs("tr",{children:[c.jsxs("th",{className:"text-error",children:[c.jsx(_e,{className:"w-5 h-5 inline"})," Wrong"]}),c.jsx("td",{className:"text-error",children:M}),c.jsx("td",{className:"text-slate-500",children:c.jsx("span",{className:"pl-10 pr-10",children:c.jsxs("span",{className:"text-slate-600",children:[t," of ",s-1," sets"]})})})]}),c.jsxs("tr",{children:[c.jsxs("th",{children:[c.jsx(Dt,{className:"w-5 h-5 pb-1 inline text-warning"}),c.jsx("span",{className:"uppercase text-warning",children:"Result"})]}),c.jsx("td",{className:"font-bold",children:(M>0||v>0)&&(Math.round(v/(v+M)*100)>=90?c.jsx("span",{className:"text-success",children:"PASSING"}):c.jsx("span",{className:"text-error",children:"FAILING"}))}),c.jsx("td",{children:c.jsx("span",{className:"pl-10 pr-10",children:(M>0||v>0)&&c.jsx(c.Fragment,{children:c.jsx("div",{className:`ml-5 radial-progress border-4 ${Math.round(v/(v+M)*100)>=90?"bg-success text-success-content border-success":"bg-error text-error-content border-error"}`,style:{"--value":Math.round(v/(v+M)*100),"--size":"2.5rem"},children:c.jsxs("small",{children:[Math.round(v/(v+M)*100),"%"]})})})})})]})]})})})})})}),c.jsx("div",{className:"grid place-items-center mt-5",children:c.jsx("div",{className:"card w-96 bg-base-200 text-neutral-content rounded-none",children:c.jsxs("div",{className:"card-body",children:[c.jsx("div",{className:"form-control",children:c.jsxs("label",{className:"label swap swap-rotate",children:[c.jsx("input",{type:"checkbox",onChange:E}),n==="dark"?c.jsx(Vt,{className:"h-6 w-6"}):c.jsx(Bt,{className:"h-6 w-6"})]})}),c.jsx("div",{className:"form-control grid place-items-center text-center",children:c.jsxs("label",{htmlFor:"search",className:"relative block",children:[c.jsx(zt,{className:"pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3"}),c.jsx("input",{type:"text",placeholder:"Filter questions",className:"input pl-10 input-sm input-bordered",onChange:f=>P(f.target.value)})]})}),c.jsxs("div",{className:"form-control w-full max-w-xs mt-5",children:[c.jsx("input",{type:"range",min:"0",max:"1100",value:w,className:"range",step:"50",onChange:f=>{y(parseInt(f.target.value)),re(parseInt(f.target.value))}}),c.jsxs("div",{className:"w-full flex justify-between text-xs px-2 pt-",children:[c.jsx("span",{children:"Questions"}),c.jsx("span",{children:"|"}),c.jsx("span",{children:"|"}),c.jsx("span",{children:"| "}),c.jsx("span",{children:"|"}),c.jsx("span",{children:"|"}),c.jsx("span",{children:"|"}),c.jsxs("span",{children:[l.length,"+"]})]})]}),c.jsxs("div",{className:"form-control w-full max-w-xs mt-5",children:[c.jsx("input",{type:"range",min:"1",max:s-1,value:t,className:"range range-warning",step:"1",onChange:f=>R(parseInt(f.target.value))}),c.jsxs("div",{className:"w-full flex justify-between text-xs px-2 pt-3 text-warning",children:[c.jsx("span",{children:"Set"}),c.jsx("span",{children:"|"}),c.jsx("span",{children:"|"}),c.jsxs("span",{children:[t," of ",s-1]})]})]}),c.jsx("div",{className:"form-control",children:c.jsxs("label",{className:"label",children:[c.jsx("span",{className:"label-text",children:"Show all answers"}),c.jsx("input",{type:"checkbox",onChange:f=>{x(f.target.checked),p("questions")},className:"toggle toggle-info",checked:g})]})})]})})}),g&&c.jsxs("p",{className:"grid place-items-center text-center mt-5 text-slate-500",children:["Showing all answers with explainations.",c.jsx("br",{}),"User input and score management is disabled."]}),i.map((f,m)=>c.jsx(Xt,{question:f,index:m,showAllAnswers:g,handleOverallScore:S},dt.generate())),c.jsx("div",{className:"grid place-items-center mt-10"}),c.jsx("div",{className:"grid place-items-center mt-10"}),c.jsx("div",{className:"grid place-items-center mt-10"}),c.jsx("div",{className:"grid place-items-center mt-10"}),c.jsx("div",{className:"grid place-items-center mt-10"}),c.jsx("div",{className:"grid place-items-center mt-10"}),c.jsx("div",{className:"grid place-items-center mt-10"})]})})}export{zs as default};