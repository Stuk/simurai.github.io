montageDefine("d492a0f","compile-observer",{dependencies:["./observers","./operators"],factory:function(e,t,n){function a(e){return i.compile(e)}var s=e("./observers"),r=e("./operators");n.exports=a;var i=a.semantics={compilers:{property:s.makePropertyObserver,get:s.makeGetObserver,path:s.makePathObserver,"with":s.makeWithObserver,"if":s.makeConditionalObserver,parent:s.makeParentObserver,not:s.makeNotObserver,and:s.makeAndObserver,or:s.makeOrObserver,"default":s.makeDefaultObserver,defined:s.makeDefinedObserver,rangeContent:s.makeAsArrayObserver,mapContent:Function.identity,keys:s.makeKeysObserver,values:s.makeValuesObserver,items:s.makeItemsObserver,toMap:s.makeToMapObserver,mapBlock:s.makeMapBlockObserver,filterBlock:s.makeFilterBlockObserver,everyBlock:s.makeEveryBlockObserver,someBlock:s.makeSomeBlockObserver,sortedBlock:s.makeSortedBlockObserver,groupBlock:s.makeGroupBlockObserver,groupMapBlock:s.makeGroupMapBlockObserver,minBlock:s.makeMinBlockObserver,maxBlock:s.makeMaxBlockObserver,enumerate:s.makeEnumerationObserver,reversed:s.makeReversedObserver,flatten:s.makeFlattenObserver,concat:s.makeConcatObserver,view:s.makeViewObserver,sum:s.makeSumObserver,average:s.makeAverageObserver,has:s.makeHasObserver,tuple:s.makeArrayObserver,range:s.makeRangeObserver,startsWith:s.makeStartsWithObserver,endsWith:s.makeEndsWithObserver,contains:s.makeContainsObserver,asArray:s.makeAsArrayObserver},compile:function(e){var t=this.compilers;if("literal"===e.type)return s.makeLiteralObserver(e.value);if("value"===e.type)return s.observeValue;if("parameters"===e.type)return s.observeParameters;if("element"===e.type)return s.makeElementObserver(e.id);if("component"===e.type)return s.makeComponentObserver(e.label,e);if("record"===e.type){var n={},a=e.args;for(var r in a)n[r]=this.compile(a[r]);return s.makeObjectObserver(n)}t.hasOwnProperty(e.type)||(t[e.type]=s.makeMethodObserverMaker(e.type));var i=e.args.map(this.compile,this);return t[e.type].apply(null,i)}},o=i.compilers;Object.keys(r).forEach(function(e){o[e]||(o[e]=s.makeOperatorObserverMaker(r[e]))})}});