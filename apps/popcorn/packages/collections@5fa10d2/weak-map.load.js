montageDefine("5fa10d2","weak-map",{dependencies:[],factory:function(e,t,n){"use strict";n.exports="undefined"!=typeof WeakMap?WeakMap:function(){function e(e){return e.prototype=null,Object.freeze(e)}Object.prototype.hasOwnProperty;var t=Object.getOwnPropertyNames,n=Object.defineProperty,i={};t(Object).forEach(function(e){i[e]=Object[e]});var r="ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var a=new ArrayBuffer(25),o=new Uint8Array(a);crypto.getRandomValues(o),r="rand:"+Array.prototype.map.call(o,function(e){return(e%36).toString(36)}).join("")+"___"}n(Object,"getOwnPropertyNames",{value:function(e){return t(e).filter(function(e){return e!==r})}}),"getPropertyNames"in Object&&n(Object,"getPropertyNames",{value:function(e){return i.getPropertyNames(e).filter(function(e){return e!==r})}});var s=function(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[r];if(t&&t.key===e)return t;if(!i.isExtensible(e))return void 0;var a=[],o=[];return t={key:e,gets:a,vals:o},n(e,r,{value:t,writable:!1,enumerable:!1,configurable:!1}),t};(function(){var e=Object.freeze;n(Object,"freeze",{value:function(t){return s(t),e(t)}});var t=Object.seal;n(Object,"seal",{value:function(e){return s(e),t(e)}});var i=Object.preventExtensions;n(Object,"preventExtensions",{value:function(e){return s(e),i(e)}})})();var l=function(){function t(e,n){var i,r,l=s(e);return l?(i=l.gets.indexOf(t),r=l.vals):(i=a.indexOf(e),r=o),i>=0?r[i]:n}function n(e){var n,i=s(e);return n=i?i.gets.indexOf(t):a.indexOf(e),n>=0}function i(e,n){var i,r=s(e);r?(i=r.gets.indexOf(t),i>=0?r.vals[i]=n:(r.gets.push(t),r.vals.push(n))):(i=a.indexOf(e),i>=0?o[i]=n:(a.push(e),o.push(n)))}function r(e){var n,i=s(e);return i?(n=i.gets.indexOf(t),n>=0&&(i.gets.splice(n,1),i.vals.splice(n,1))):(n=a.indexOf(e),n>=0&&(a.splice(n,1),o.splice(n,1))),!0}var a=[],o=[];return Object.create(l.prototype,{get___:{value:e(t)},has___:{value:e(n)},set___:{value:e(i)},delete___:{value:e(r)}})};return l.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),l}()}});