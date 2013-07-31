require("collections/shim-object"),require("collections/shim-regexp");var Map=require("collections/map"),Set=require("collections/set");exports.toNumber=function(e){return+e},exports.toString=function(e){return null==e?e:"string"==typeof e||"number"==typeof e?""+e:null},exports.toArray=Array.from,exports.toMap=Map,exports.toSet=Set,exports.not=function(e){return!e},exports.neg=function(e){return-e},exports.pow=function(e,t){return Math.pow(e,t)},exports.root=function(e,t){return Math.pow(e,1/t)},exports.log=function(e,t){return Math.log(e)/Math.log(t)},exports.mul=function(e,t){return e*t},exports.div=function(e,t){return e/t},exports.mod=function(e,t){return(e%t+t)%t},exports.rem=function(e,t){return e%t},exports.add=function(e,t){return e+t},exports.sub=function(e,t){return e-t},exports.lt=function(e,t){return 0>Object.compare(e,t)},exports.gt=function(e,t){return Object.compare(e,t)>0},exports.le=function(e,t){return 0>=Object.compare(e,t)},exports.ge=function(e,t){return Object.compare(e,t)>=0},exports.equals=Object.equals,exports.compare=Object.compare,exports.and=function(e,t){return e&&t},exports.or=function(e,t){return e||t},exports.defined=function(e){return null!=e},exports.startsWith=function(e,t){var n=RegExp("^"+RegExp.escape(t));return n.test(e)},exports.endsWith=function(e,t){var n=RegExp(RegExp.escape(t)+"$");return n.test(e)},exports.contains=function(e,t){var n=RegExp(RegExp.escape(t));return n.test(e)},exports.join=function(e,t){return e.join(t||"")},exports.split=function(e,t){return e.split(t||"")},exports.range=function(e){for(var t=[],n=0;e>n;n++)t.push(n);return t},exports.last=function(e){return e.get(e.length-1)};