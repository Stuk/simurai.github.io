montageDefine("a2d61d4","examples/typer-fsr",{dependencies:["fs","../fs.js"],factory:function(e){e("fs");var t=e("../fs.js"),n=new t(__filename);n.on("end",function(){process.stdin.pause()}),process.stdin.setRawMode(!0),process.stdin.on("data",function(){var e=n.read(3);e&&process.stdout.write(e)}),process.stdin.resume()}});