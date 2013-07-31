function compile(e){return semantics.compile(e)}var Observers=require("./observers"),Operators=require("./operators");module.exports=compile;var semantics=compile.semantics={compilers:{property:Observers.makePropertyObserver,get:Observers.makeGetObserver,path:Observers.makePathObserver,"with":Observers.makeWithObserver,"if":Observers.makeConditionalObserver,parent:Observers.makeParentObserver,not:Observers.makeNotObserver,and:Observers.makeAndObserver,or:Observers.makeOrObserver,"default":Observers.makeDefaultObserver,defined:Observers.makeDefinedObserver,rangeContent:Observers.makeAsArrayObserver,mapContent:Function.identity,keys:Observers.makeKeysObserver,values:Observers.makeValuesObserver,items:Observers.makeEntriesObserver,entries:Observers.makeEntriesObserver,toMap:Observers.makeToMapObserver,mapBlock:Observers.makeMapBlockObserver,filterBlock:Observers.makeFilterBlockObserver,everyBlock:Observers.makeEveryBlockObserver,someBlock:Observers.makeSomeBlockObserver,sortedBlock:Observers.makeSortedBlockObserver,groupBlock:Observers.makeGroupBlockObserver,groupMapBlock:Observers.makeGroupMapBlockObserver,minBlock:Observers.makeMinBlockObserver,maxBlock:Observers.makeMaxBlockObserver,enumerate:Observers.makeEnumerationObserver,reversed:Observers.makeReversedObserver,flatten:Observers.makeFlattenObserver,concat:Observers.makeConcatObserver,view:Observers.makeViewObserver,sum:Observers.makeSumObserver,average:Observers.makeAverageObserver,last:Observers.makeLastObserver,has:Observers.makeHasObserver,tuple:Observers.makeArrayObserver,range:Observers.makeRangeObserver,startsWith:Observers.makeStartsWithObserver,endsWith:Observers.makeEndsWithObserver,contains:Observers.makeContainsObserver,toArray:Observers.makeToArrayObserver,asArray:Observers.makeToArrayObserver},compile:function(e){var t=this.compilers;if("literal"===e.type)return Observers.makeLiteralObserver(e.value);if("value"===e.type)return Observers.observeValue;if("parameters"===e.type)return Observers.observeParameters;if("element"===e.type)return Observers.makeElementObserver(e.id);if("component"===e.type)return Observers.makeComponentObserver(e.label,e);if("record"===e.type){var n={},i=e.args;for(var r in i)n[r]=this.compile(i[r]);return Observers.makeObjectObserver(n)}t.hasOwnProperty(e.type)||(t[e.type]=Observers.makeMethodObserverMaker(e.type));var a=e.args.map(this.compile,this);return t[e.type].apply(null,a)}},compilers=semantics.compilers;Object.keys(Operators).forEach(function(e){compilers[e]||(compilers[e]=Observers.makeOperatorObserverMaker(Operators[e]))}),compilers.toString=Observers.makeOperatorObserverMaker(Operators.toString);