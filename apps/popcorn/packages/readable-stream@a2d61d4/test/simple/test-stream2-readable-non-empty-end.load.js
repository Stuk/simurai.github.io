montageDefine("a2d61d4","test/simple/test-stream2-readable-non-empty-end",{dependencies:["assert","../common.js","../../lib/_stream_readable"],factory:function(e){function t(){throw Error("this should not happen!")}function n(){l.removeListener("end",t);var e=!1;process.on("exit",function(){r(e,"end should be emitted by now")}),l.on("end",function(){e=!0});var n=l.read();r(n),r.equal(n.length,1),n=l.read(),r.equal(n,null)}var r=e("assert");e("../common.js");for(var i=e("../../lib/_stream_readable"),a=0,o=Array(10),s=1;10>=s;s++)o[s-1]=new Buffer(s),a+=s;var l=new i,u=0;l._read=function(){var e=o[u++];setTimeout(function(){l.push(e)})},l.on("end",t);var c=0;l.on("readable",function(){var e=a-c-1,t=l.read(e);t&&(c+=t.length,console.error("br=%d len=%d",c,a),setTimeout(n)),l.read(0)}),l.read(0)}});