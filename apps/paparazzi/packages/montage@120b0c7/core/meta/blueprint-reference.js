"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,BlueprintModule=require("core/meta/blueprint"),BinderModule=require("core/meta/binder"),RemoteReference=require("core/meta/remote-reference").RemoteReference,BinderReference=require("core/meta/binder-reference").BinderReference,logger=require("core/logger").logger("blueprint");exports.BlueprintReference=RemoteReference.create(RemoteReference,{identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",this._reference.blueprintName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){var n=e.blueprintName,r=e.blueprintModuleId,i=e.prototypeName,s=e.moduleId,o=e.binderReference,u=Promise.resolve(BinderModule.Binder.manager.defaultBinder);o&&(u=BinderReference.valueFromReference(o,t));var a=Promise.defer();return u.then(function(e){if(e){var n=e.blueprintForPrototype(i,s);if(n)a.resolve(n);else try{BlueprintModule.Blueprint.getBlueprintWithModuleId(r,t).then(function(t){t?(e.addBlueprint(t),a.resolve(t)):a.reject("Error cannot find Blueprint "+r)},a.reject)}catch(o){a.reject("Error cannot find Blueprint "+r)}}else try{a=BlueprintModule.Blueprint.getBlueprintWithModuleId(r,t)}catch(o){a.reject("Error cannot find Blueprint "+r)}}),a.promise}},referenceFromValue:{value:function(e){var t={};return t.blueprintName=e.name,t.blueprintModuleId=e.blueprintModuleId,t.prototypeName=e.prototypeName,t.moduleId=e.moduleId,e.binder&&!e.binder.isDefault&&(t.binderReference=BinderReference.referenceFromValue(e.binder)),t}}})