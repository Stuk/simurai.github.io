montageDefine("099dee8","core/shim/string",{dependencies:[],factory:function(e,t,n){String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e){return this.length>=e.length&&this.slice(0,e.length)===e},writable:!0,configurable:!0}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{value:function(e){return this.length>=e.length&&this.slice(this.length-e.length,this.length)===e},writable:!0,configurable:!0})}})