montageDefine("87344ee","spec/lru-set-spec",{dependencies:["../lru-set","./collection","./set"],factory:function(e,t,n){var r=e("../lru-set"),i=e("./collection"),s=e("./set");describe("LruSet",function(){function e(e){return new r(e)}[r,e].forEach(function(e){i(e,[1,2,3,4],!0),i(e,[{id:0},{id:1},{id:2},{id:3}],!0),s(e)})})}})