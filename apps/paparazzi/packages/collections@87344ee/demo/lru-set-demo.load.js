montageDefine("87344ee","demo/lru-set-demo",{dependencies:["../lru-set"],factory:function(e,t,n){var r=e("../lru-set"),i=new r([1,2,3],3);console.log(i.toArray()),i.get(2),console.log(i.toArray()),i.add(4),console.log(i.toArray()),i.add(2),console.log(i.toArray())}})