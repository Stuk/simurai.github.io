montageDefine("099dee8","ui/autocomplete/autocomplete.reel/autocomplete",{dependencies:["montage","ui/component","ui/text-input","core/logger","ui/autocomplete/results-list.reel/results-list","ui/controller/array-controller","ui/popup/popup.reel","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/text-input").TextInput,o=e("core/logger").logger("autocomplete"),u=e("ui/autocomplete/results-list.reel/results-list").ResultsList,a=e("ui/controller/array-controller").ArrayController,f=e("ui/popup/popup.reel").Popup,l=e("ui/composer/press-composer").PressComposer,c=38,h=40,p=39,d=13,v=27,m=function(e){var t=0,n=0,r=0,i=0;if(e.offsetParent)do t+=e.offsetLeft,n+=e.offsetTop,r+=e.offsetHeight,i+=e.offsetWidth;while(e=e.offsetParent);return{top:n,left:t,height:r,width:i}},g=t.Autocomplete=r.create(s,{didCreate:{value:function(){this.delay=500,this.minLength=2}},hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-InputText")}},delegate:{value:null},textPropertyPath:{value:null},separator:{value:",",distinct:!0},_delay:{value:null},delay:{get:function(){return this._delay},set:function(e){e!==this._delay&&(String.isString(e)&&(e=parseInt(e,10)),this._delay=e)}},minLength:{value:null},_tokens:{value:null},tokens:{get:function(){return this._tokens},set:function(e){this._tokens=e,this._valueSyncedWithInputField=!1,this.needsDraw=!0},modify:function(e){this._tokens=e}},value:{get:function(){return this._value},set:function(e,t){this._value=e?e.trim():"";var n=this._value;if(n){var r=n.split(this.separator).map(function(e){return e.trim()});this.activeTokenIndex=this._findActiveTokenIndex(this.tokens,r),this._tokens=n.split(this.separator).map(function(e){return e.trim()})}else this.activeTokenIndex=0,this._tokens=[];if(t){this._valueSyncedWithInputField=!0,this.showPopup=!1;if(this._tokens.length&&this._tokens.length>0){var i=this._tokens[this.activeTokenIndex];i=i?i.trim():"";if(i.length>=this.minLength){var s=this;clearTimeout(this.delayTimer),this.delayTimer=setTimeout(function(){s.delayTimer=null,o.isDebug&&o.debug("SEARCH for ",i),s.performSearch(i)},this.delay)}}}else this.showPopup=!1,this._valueSyncedWithInputField=!1,this.needsDraw=!0}},overlayWidth:{value:null,enumerable:!1},delayTimer:{value:null,enumerable:!1},_loadingStatus:{value:!1,enumerable:!1},loadingStatus:{enumerable:!1,get:function(){return this._loadingStatus},set:function(e){this._loadingStatus=e,this._loadingStatus==="loading"&&(this.showPopup=!1),this.needsDraw=!0}},activeTokenIndex:{value:null},_findActiveTokenIndex:{enumerable:!1,value:function(e,t){if(e==null||t==null)return 0;var n=0,r=t.length;for(n=0;n<r;n++)if(n<e.length){if(e[n]===t[n])continue;break}return n}},_activeIndexes:{value:null,enumerable:!1},activeItemIndex:{enumerable:!1,get:function(){return this._activeIndexes&&this._activeIndexes.length>0?this._activeIndexes[0]:null},set:function(e){e==null?this._activeIndexes=[]:this._activeIndexes=[e]}},_suggestedValue:{value:null},suggestedValue:{enumerable:!1,get:function(){return this._suggestedValue},set:function(e){this._suggestedValue=e;if(e){var t=this.tokens||[],n;String.isString(e)?n=e:this.textPropertyPath?n=e[this.textPropertyPath]:n="",t[this.activeTokenIndex]=n,this.tokens=t,this.showPopup=!1}}},popup:{enumerable:!1,value:null},_showPopup:{value:null},showPopup:{enumerable:!1,get:function(){return this._showPopup},set:function(e){e!=this._showPopup&&(this._showPopup=e,this.needsDraw=!0)}},_suggestions:{value:null},suggestions:{enumerable:!1,get:function(){return this._suggestions},set:function(e){o.isDebug&&o.debug("got suggestions: ",e),this.loadingStatus="complete",this._suggestions=e,this.showPopup=e&&e.length>0}},resultsController:{enumerable:!1,value:null},resultsList:{enumerable:!1,value:null},performSearch:{enumerable:!1,value:function(e){if(this.delegate){this.resultsController.selectedIndexes=[],this.activeItemIndex=0,this.loadingStatus="loading";var t=this.callDelegateMethod("ShouldGetSuggestions",this,e)}}},_addEventListeners:{enumerable:!1,value:function(){this.element.addEventListener("keyup",this),this.element.addEventListener("input",this)}},_removeEventListeners:{enumerable:!1,value:function(){this.element.removeEventListener("keyup",this),this.element.removeEventListener("input",this)}},_getPopup:{enumerable:!1,value:function(){var e=this.popup;return e||(e=f.create(),e.content=this.resultsList,e.anchor=this.element,e.delegate=this,e.focusOnShow=!1,this.popup=e),this.popup}},willPositionPopup:{value:function(e,t){var n=e.anchorElement,r=m(n);return{left:r.left,top:r.top+30}}},prepareForDraw:{value:function(){this._addEventListeners(),this.element.classList.add("montage-Autocomplete"),this.resultsController=a.create(),Object.defineBinding(this.resultsController,"content",{boundObject:this,boundObjectPropertyPath:"suggestions",oneway:!0}),Object.defineBinding(this,"suggestedValue",{boundObject:this.resultsController,boundObjectPropertyPath:"selectedObjects.0",oneway:!0}),this.resultsList=u.create(),Object.defineBinding(this.resultsList,"contentController",{boundObject:this,boundObjectPropertyPath:"resultsController",oneway:!0}),Object.defineBinding(this.resultsList,"activeIndexes",{boundObject:this,boundObjectPropertyPath:"_activeIndexes",oneway:!0}),Object.defineBinding(this.resultsList,"textPropertyPath",{boundObject:this,boundObjectPropertyPath:"textPropertyPath",oneway:!0});var e=this._getPopup()}},prepareForActivationEvents:{value:function(){var e=l.create();this.addComposer(e)}},draw:{value:function(){var e=this.element,t=Object.getPrototypeOf(g).draw;t.call(this),this._valueSyncedWithInputField||(this.tokens&&(this.value=this.tokens.join(this.separator)),this.value&&this.value.charAt(this.value.length-1)!=this.separator&&(this.value+=this.separator),this.element.value=this.value,this._valueSyncedWithInputField=!0);var n=this.showPopup;this.value===""&&(n=!1),n?(this.popup.show(),this.activeItemIndex=0):this.popup&&this.popup.displayed&&this.popup.hide();var r=this.loadingStatus==="loading";this.element.classList[r?"add":"remove"]("montage-Autocomplete--loading")}},handleKeyup:{enumerable:!1,value:function(e){var t=e.keyCode,n=this._getPopup();switch(t){case h:if(!n.displayed)n.show(),this.activeItemIndex=0;else{var r=this.suggestions||[];r.length>0&&this.activeItemIndex<r.length-1?this.activeItemIndex++:this.activeItemIndex=0}break;case c:n.displayed===!0&&(this.activeItemIndex>0?this.activeItemIndex--:this.activeItemIndex=0);break;case d:n.displayed===!0?(this.resultsController.selectedIndexes=[this.activeItemIndex],e.preventDefault()):this.suggestedValue=this.tokens[this.tokens.length-1]}this.element.focus()}}})}})