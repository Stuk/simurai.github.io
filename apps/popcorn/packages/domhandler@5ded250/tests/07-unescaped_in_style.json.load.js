montageDefine("5ded250","tests/07-unescaped_in_style.json",{exports:{name:"Unescaped chars in style",options:{handler:{},parser:{}},html:'<style type="text/css">\n body > p\n	{ font-weight: bold; }</style>',expected:[{type:"style",name:"style",attribs:{type:"text/css"},children:[{data:"\n body > p\n	{ font-weight: bold; }",type:"text"}]}]}});