montageDefine("8c9da00","ui/check-input",{dependencies:["montage","ui/component","ui/native-control","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native-control").NativeControl,o=e("ui/composer/press-composer").PressComposer,u=t.CheckInput=r.create(s,{blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},draw:{value:function(){this._element.setAttribute("aria-checked",this._checked)}},_pressComposer:{enumerable:!1,value:null},prepareForActivationEvents:{value:function(){var e=this._pressComposer=o.create();this.addComposer(e),e.addEventListener("pressStart",this,!1),e.addEventListener("press",this,!1)}},prepareForDraw:{enumerable:!1,value:function(){this._element.addEventListener("change",this)}},_fakeCheck:{enumerable:!1,value:function(){var e;this._element.checked=!this._element.checked,e=document.createEvent("HTMLEvents"),e.initEvent("change",!0,!0),this._element.dispatchEvent(e)}},_shouldFakeCheck:{enumerable:!1,value:!1},handlePressStart:{value:function(e){this._shouldFakeCheck=e.defaultPrevented}},handlePress:{value:function(e){this._shouldFakeCheck&&(this._shouldFakeCheck=!1,this._fakeCheck())}},handleChange:{enumerable:!1,value:function(e){if(!this._pressComposer||this._pressComposer.state!==o.CANCELLED)Object.getPropertyDescriptor(this,"checked").set.call(this,this.element.checked,!0),this._dispatchActionEvent()}}})}})