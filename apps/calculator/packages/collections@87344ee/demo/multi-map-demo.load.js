montageDefine("87344ee","demo/multi-map-demo",{dependencies:["../multi-map","../shim-array","../list"],factory:function(e,t,n){var r=e("../multi-map");e("../shim-array");var i=e("../list");debugger;var s=new r({a:[1,2,3]},i);console.log(s),console.log(s.keys()),console.log(s.get("a")),console.log(s.get("a").toArray());var o=s.get("a");s.get("a").push(4),console.log(s.get("a").toArray()),s.set("a",[]),console.log(s.get("a").toArray()),console.log(s.get("a")===o)}})