montageDefine("87344ee","demo/sorted-map-demo",{dependencies:["../sorted-map"],factory:function(e,t,n){var r=e("../sorted-map"),i=new r;console.log("set 1 a"),i.set(1,"a"),i.log(),console.log("set 2 b"),i.set(2,"b"),i.log(),console.log("set 0, z"),i.set(0,"z"),i.log(),console.log("set 0, y"),i.set(0,"y"),i.log(),i.forEach(function(e,t){console.log(t+": "+e)}),console.log("got",i.get(1)),i.log(),console.log("got",i.get(0)),i.delete(0),console.log("got",i.get(0))}})