montageDefine("5fa10d2","sorted-map",{dependencies:["./shim","./sorted-set","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function i(e,t,n,a){return this instanceof i?(t=t||Object.equals,n=n||Object.compare,a=a||Function.noop,this.contentEquals=t,this.contentCompare=n,this.getDefault=a,this.store=new r(null,function(e,n){return t(e.key,n.key)},function(e,t){return n(e.key,t.key)}),this.length=0,this.addEach(e),void 0):new i(e,t,n,a)}e("./shim");var r=e("./sorted-set"),a=e("./generic-collection"),o=e("./generic-map"),s=e("./listen/property-changes");n.exports=i,Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,s.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},i.prototype.log=function(e,t,n,i){t=t||this.logNode,this.store.log(e,function(e,n,i){t(e.value,n,i)},n,i)},i.prototype.logNode=function(e,t){t(" key: "+e.key),t(" value: "+e.value)}}});