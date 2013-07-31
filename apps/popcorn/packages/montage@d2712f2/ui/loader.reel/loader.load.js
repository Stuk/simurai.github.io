montageDefine("d2712f2","ui/loader.reel/loader",{dependencies:["core/core","ui/component","core/logger"],factory:function(e,t){var n=(e("core/core").Montage,e("ui/component").Component),i=e("core/logger").logger("loader"),r="_montageStartBootstrappingTimeout",a="montage-app-loader",o="montage-app-bootstrapping",s="montage-app-loading",l="montage-app-loaded",u=0,c=1,h=2,d=3;t.Loader=n.specialize({mainModule:{value:"ui/main.reel"},mainName:{value:"Main"},includeFrameworkModules:{value:!1},minimumBootstrappingDuration:{value:1500},minimumLoadingDuration:{value:2e3},_initializedModules:{value:null},initializedModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._initializedModules||this.includeFrameworkModules?this._initializedModules:this._initializedModules.slice(this._frameworkModuleCount-1)},set:function(e){this._initializedModules=e}},_requiredModules:{value:null},requiredModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._requiredModules||this.includeFrameworkModules?this._requiredModules:this._requiredModules.slice(this._frameworkModuleCount-1)},set:function(e){this._requiredModules=e}},_currentStage:{value:u},currentStage:{get:function(){return this._currentStage},set:function(e){e!==this._currentStage&&(i.isDebug&&i.debug(this,"CURRENT STAGE: "+e),this._currentStage=e,this.needsDraw=!0)}},_readyToShowLoader:{value:!1},isLoadingMainComponent:{value:null},readyToShowLoader:{get:function(){return this._readyToShowLoader},set:function(e){e===this._readyToShowLoader&&(this._readyToShowLoader=e,this.needsDraw=!0)}},readyToShowMainComponent:{get:function(){return!!this._mainComponent}},_frameworkModuleCount:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!1},_mainComponent:{value:null},_mainComponentEnterDocument:{value:null},_showLoadingTimeout:{enumerable:!1,value:null},_showMainComponentTimeout:{enumerable:!1,value:null},templateDidLoad:{value:function(){i.isDebug&&i.debug(this,"templateDidLoad"),this.element||(this.element=document.documentElement,this.attachToParentComponent()),this.readyToShowLoader=!0;var e,t=document._montageTiming,n=this;t.bootstrappingStartTime?(i.isDebug&&i.debug(this,"had already started bootstrapping"),this.currentStage=c,t.bootstrappingEndTime=Date.now(),e=this.minimumBootstrappingDuration-(t.bootstrappingEndTime-t.bootstrappingStartTime),e>0?(i.isDebug&&i.debug(this,"still need to show bootstrapper for another "+e+"ms"),this._showLoadingTimeout=setTimeout(function(){n._revealLoader()},e)):this._revealLoader()):(i.isDebug&&i.debug(this,"bootstrapping has not started yet…"),this._loadMainComponent())}},_revealLoader:{value:function(){i.isDebug&&i.debug(this,"_revealLoader"),this.currentStage=h,document._montageTiming.loadingStartTime=Date.now();var e,t,n,r,o=document.getElementById(a);if(o)for(t=o.children,e=0;n=t[e];e++)(r=n.component)&&(r.attachToParentComponent(),r.needsDraw=!0)}},_revealMainComponent:{value:function(){i.isDebug&&i.debug(this,"_revealMainComponent"),this.currentStage=d}},_loadMainComponent:{value:function(){i.isDebug&&i.debug(this,"_loadMainComponent"),this.isLoadingMainComponent=!0;var e=this;window.require.async(this.mainModule).then(function(t){return e._mainLoadedCallback(t)}).done()}},_mainLoadedCallback:{value:function(e){i.isDebug&&i.debug(this,"_mainLoadedCallback"),this._mainComponent=e[this.mainName].create(),this._mainComponentEnterDocument=this._mainComponent.enterDocument,this._mainComponent.enterDocument=this.mainComponentEnterDocument.bind(this),this._mainComponent.setElementWithParentComponent(document.createElement("div"),this),this._mainComponent.attachToParentComponent(),this._mainComponent.needsDraw=!0}},mainComponentEnterDocument:{value:function(){var e,t=this;i.isDebug&&i.debug(this,"main preparing to draw"),this.isLoadingMainComponent=!1,this._contentToRemove=document.createRange(),e=this.element===document.documentElement?document.body:this.element,this._contentToRemove.selectNodeContents(e),this.childComponents=[this._mainComponent],e.appendChild(this._mainComponent.element);var n,a,o=document[r],s=document._montageTiming;s.bootstrappingStartTime?s.bootstrappingStartTime&&!s.loadingStartTime?(clearTimeout(this._showLoadingTimeout),this._showLoadingTimeout=null,s.bootstrappingEndTime=Date.now(),(n=this.minimumBootstrappingDuration-(s.bootstrappingEndTime-s.bootstrappingStartTime))>0?(i.isDebug&&i.debug(this,"show bootstrapper for another "+n+"ms"),this._showMainComponentTimeout=setTimeout(function(){i.isDebug&&i.debug(this,"ok, shown bootstrapper long enough"),t._revealMainComponent()},n)):setTimeout(function(){i.isDebug&&i.debug(this,"ok, showing bootstrapper now"),t._revealMainComponent()},0)):s.loadingStartTime&&(s.loadingEndTime=Date.now(),(a=this.minimumLoadingDuration-(s.loadingEndTime-s.loadingStartTime))>0?(i.isDebug&&i.debug(this,"show loader for another "+a+"ms"),this._showMainComponentTimeout=setTimeout(function(){i.isDebug&&i.debug(this,"ok, shown loader long enough"),t._revealMainComponent()},a)):this._revealMainComponent()):(i.isDebug&&i.debug(this,"bootstrapper never shown"),clearTimeout(o),o=null,this._revealMainComponent());var l=this._mainComponent;return l.enterDocument=this._mainComponentEnterDocument,l.enterDocument?l.enterDocument.apply(l,arguments):void 0}},removeContentOnLoad:{value:!0},_forceContentRemoval:{enumerable:!1,value:!1},_contentToRemove:{enumerable:!1,value:null},removeContent:{value:function(){this._forceContentRemoval=!0,this.needsDraw=!0}},draw:{value:function(){if(this.readyToShowMainComponent||this.isLoadingMainComponent||(i.isDebug&&i.debug(this,"draw; start loading main component"),this._loadMainComponent()),h===this.currentStage)this.element.classList.remove(o),this.element.classList.add(s);else if(d===this.currentStage&&this._contentToRemove){this.element.classList.remove(o),this.element.classList.remove(s),(this.removeContentOnLoad||this._forceContentRemoval)&&(this._contentToRemove.extractContents(),this._contentToRemove.detach(),this._contentToRemove=null),this.element.classList.add(l);var e=document.createEvent("CustomEvent");e.initCustomEvent("componentLoaded",!0,!0,this._mainComponent),this.dispatchEvent(e,!0,!0)}}}})}});