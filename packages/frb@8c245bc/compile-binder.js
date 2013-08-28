function compile(e){return compile.semantics.compile(e)}var compileObserver=require("./compile-observer"),Observers=require("./observers"),Binders=require("./binders"),solve=require("./algebra"),valueSyntax={type:"value"},trueSyntax={type:"literal",value:!0};module.exports=compile,compile.semantics={compilers:{property:Binders.makePropertyBinder,get:Binders.makeGetBinder,has:Binders.makeHasBinder,rangeContent:Binders.makeRangeContentBinder,mapContent:Binders.makeMapContentBinder,reversed:Binders.makeReversedBinder,and:Binders.makeAndBinder,or:Binders.makeOrBinder},compile:function(e){var t=this.compilers;if("default"===e.type)return this.compile(e.args[0]);if("equals"===e.type){var n=this.compile(e.args[0]),a=compileObserver(e.args[1]);return Binders.makeEqualityBinder(n,a)}if("if"===e.type){var s=compileObserver(e.args[0]),r=this.compile(e.args[1]),i=this.compile(e.args[2]);return Binders.makeConditionalBinder(s,r,i)}if("and"===e.type||"or"===e.type){var o=solve(e.args[0],valueSyntax),l=solve(e.args[1],valueSyntax),n=this.compile(o[0]),c=this.compile(l[0]),p=compileObserver(o[1]),u=compileObserver(l[1]),h=compileObserver(e.args[0]),a=compileObserver(e.args[1]);return this.compilers[e.type](n,c,h,a,p,u)}if("everyBlock"===e.type){var d=compileObserver(e.args[0]),m=solve(e.args[1],trueSyntax),g=this.compile(m[0]),f=compileObserver(m[1]);return Binders.makeEveryBlockBinder(d,g,f)}if("rangeContent"===e.type){var v,b=compileObserver(e.args[0]);try{v=this.compile(e.args[0])}catch(y){v=Function.noop}return Binders.makeRangeContentBinder(b,v)}if(t.hasOwnProperty(e.type)){var w=e.args.map(compileObserver,compileObserver.semantics);return t[e.type].apply(null,w)}throw Error("Can't compile binder for "+JSON.stringify(e.type))}};