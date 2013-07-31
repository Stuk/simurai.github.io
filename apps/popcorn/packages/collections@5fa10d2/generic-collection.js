"use strict";function GenericCollection(){throw Error("Can't construct. GenericCollection is a mixin.")}module.exports=GenericCollection,GenericCollection.prototype.addEach=function(e){if(e&&Object(e)===e)if("function"==typeof e.forEach)e.forEach(this.add,this);else if("number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);else Object.keys(e).forEach(function(t){this.add(e[t],t)},this);return this},GenericCollection.prototype.deleteEach=function(e,t){return e.forEach(function(e){this["delete"](e,t)},this),this},GenericCollection.prototype.forEach=function(e){var t=arguments[1];return this.reduce(function(n,i,r,a,o){e.call(t,i,r,a,o)},void 0)},GenericCollection.prototype.map=function(e){var t=arguments[1],n=[];return this.reduce(function(i,r,a,o,s){n.push(e.call(t,r,a,o,s))},void 0),n},GenericCollection.prototype.enumerate=function(e){null==e&&(e=0);var t=[];return this.reduce(function(n,i){t.push([e++,i])},void 0),t},GenericCollection.prototype.group=function(e,t,n){n=n||Object.equals;var i=[],r=[];return this.forEach(function(a,o,s){var l,o=e.call(t,a,o,s),u=r.indexOf(o,n);-1===u?(l=[],i.push([o,l]),r.push(o)):l=i[u][1],l.push(a)}),i},GenericCollection.prototype.toArray=function(){return this.map(Function.identity)},GenericCollection.prototype.toObject=function(){var e={};return this.reduce(function(t,n,i){e[i]=n},void 0),e},GenericCollection.prototype.filter=function(e){var t=arguments[1],n=this.constructClone();return this.reduce(function(i,r,a,o,s){e.call(t,r,a,o,s)&&n.add(r)},void 0),n},GenericCollection.prototype.every=function(e){var t=arguments[1];return this.reduce(function(n,i,r,a,o){return n&&e.call(t,i,r,a,o)},!0)},GenericCollection.prototype.some=function(e){var t=arguments[1];return this.reduce(function(n,i,r,a,o){return n||e.call(t,i,r,a,o)},!1)},GenericCollection.prototype.all=function(){return this.every(Boolean)},GenericCollection.prototype.any=function(){return this.some(Boolean)},GenericCollection.prototype.min=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,i){return t?(t=!1,i):0>e(i,n)?i:n},void 0)},GenericCollection.prototype.max=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,i){return t?(t=!1,i):e(i,n)>0?i:n},void 0)},GenericCollection.prototype.sum=function(e){return e=void 0===e?0:e,this.reduce(function(e,t){return e+t},e)},GenericCollection.prototype.average=function(e){var t=void 0===e?0:e,n=void 0===e?0:e;return this.reduce(function(e,i){t+=i,n+=1},void 0),t/n},GenericCollection.prototype.concat=function(){for(var e=this.constructClone(this),t=0;arguments.length>t;t++)e.addEach(arguments[t]);return e},GenericCollection.prototype.flatten=function(){var e=this;return this.reduce(function(t,n){return n.forEach(function(e){this.push(e)},t,e),t},[])},GenericCollection.prototype.zip=function(){var e=Array.prototype.slice.call(arguments);return e.unshift(this),Array.unzip(e)},GenericCollection.prototype.sorted=function(e,t,n){return e=e||this.contentCompare||Object.compare,e.by?(t=e.by,e=e.compare||this.contentCompare||Object.compare):t=t||Function.identity,void 0===n&&(n=1),this.map(function(e){return{by:t(e),value:e}}).sort(function(t,i){return e(t.by,i.by)*n}).map(function(e){return e.value})},GenericCollection.prototype.reversed=function(){return this.constructClone(this).reverse()},GenericCollection.prototype.clone=function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;var n=this.constructClone();return this.forEach(function(i,r){n.add(Object.clone(i,e-1,t),r)},this),n},GenericCollection.prototype.only=function(){return 1===this.length?this.one():void 0},GenericCollection.prototype.iterator=function(){return this.iterate.apply(this,arguments)},require("./shim-array");