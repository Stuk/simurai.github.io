var Montage=require("montage").Montage,Blueprint=require("data/blueprint").Blueprint,BlueprintBinder=require("data/blueprint").BlueprintBinder,Attribute=require("data/blueprint").Attribute,Association=require("data/blueprint").Association,StoreConnectionInformation=require("data/store-connection-information").StoreConnectionInformation,logger=require("core/logger").logger("mapping"),Mapping=exports.Mapping=Montage.create(Montage,{_owner:{serializable:!0,enumerable:!1,value:null},owner:{get:function(){return this._owner}},_parent:{serializable:!0,enumerable:!1,value:null},parent:{get:function(){return this._parent}},name:{get:function(){return this.parent.name}},storeModuleId:{get:function(){return this.parent.storeModuleId}},storePrototypeName:{get:function(){return this.parent.storePrototypeName}},initWithOwnerAndParent:{value:function(e,t){return this._owner=e,this._parent=t,this}}}),MappingSet=exports.MappingSet=Montage.create(Mapping,{_name:{serializable:!0,enumerable:!1,value:null},name:{get:function(){return this._name}},binder:{get:function(){return this._owner}},initWithBinderAndName:{value:function(e,t){var n=this.initWithOwnerAndParent(e,null);return n._name=t,n}},identifier:{get:function(){return[this.name,this.owner.name].join("_")}},_mappings:{serializable:!0,enumerable:!1,distinct:!0,value:new Array(5)},_mappingForStoreId:{value:new Object,serializable:!1,distinct:!0,enumerable:!1,writable:!1},deserializedFromSerialization:{value:function(){var e,t;for(t=0;typeof (e=this._mappings[t])!="undefined";t++){var n=[e.storePrototypeName,e.storeModuleId].join("_");this._mappingForStoreId[n]=e}}},mappings:{get:function(){return this._mappings}},addMapping:{value:function(e){if(e!==null){var t=this.mappings.indexOf(e);if(t<0){if(e.parent!==this)throw new Error("Mapping already owned: "+e.storeModuleId+"/"+e.storePrototypeName+" parent: "+JSON.stringify(e.parent.name));this.mappings.push(e);var n=[e.storePrototypeName,e.storeModuleId].join("_");this._mappingForStoreId[n]=e}}return e}},removeMapping:{value:function(e){if(e!==null){var t=this.mappings.indexOf(e);if(t>=0){this.mappings.splice(t,1);var n=[e.storePrototypeName,e.storeModuleId].join("_");delete this._mappingForStoreId[n]}}return e}},_storeKeyForStore:{value:function(e){var t=Montage.getInfoForObject(e);return[t.objectName,t.moduleId].join("_")}},mappingForStoreId:{value:function(e,t){var n=[e,t].join("_");return this._mappingForStoreId[n]}}}),BinderMapping=exports.BinderMapping=Montage.create(Mapping,{binder:{get:function(){return this._owner}},identifier:{get:function(){return[this.parent.identifier,this.storeModuleId,this.storePrototypeName,this.owner.name].join("_")}},storeModuleId:{get:function(){return"data/store"}},storePrototypeName:{get:function(){return"Store"}},_connectionInformations:{serializable:!0,enumerable:!1,value:{}},connectionInformations:{get:function(){return this._connectionInformations}},_connectionInfoForName:{value:{},serializable:!1,distinct:!0,enumerable:!1,writable:!1},deserializedFromSerialization:{value:function(){var e,t;for(t=0;typeof (e=this.connectionInformations[t])!="undefined";t++)this._connectionInfoForName[e.name]=e}},createConnectionInformation:{value:function(){return StoreConnectionInformation.create()}},addConnectionInformation:{value:function(e){if(e!==null){var t=this.connectionInformations.indexOf(e);t<0&&(this.connectionInformations.push(e),this._connectionInfoForName[e.name]=e,this._defaultConnectionInformationName.length==0&&(this._defaultConnectionInformationName=e.name))}return e}},removeConnectionInformation:{value:function(e){if(e!==null){var t=this.connectionInformations.indexOf(e);t>=0&&(this.connectionInformations.splice(t,1),delete this._connectionInfoForName[e.name],this._defaultConnectionInformationName.length>0&&this._defaultConnectionInformationName===e.name&&(this.connectionInformations.length>0?this._defaultConnectionInformationName=this.connectionInformations[0].name:this._defaultConnectionInformationName=""))}return e}},connectionInformationForName:{value:function(e){return this._connectionInfoForName[e]}},_defaultConnectionInformationName:{serializable:!0,enumerable:!1,value:""},defaultConnectionInformationName:{get:function(){return this._defaultConnectionInformationName.length==0&&this.connectionInformations.length>0&&(this._defaultConnectionInformationName=this.connectionInformations[0].name),this._defaultConnectionInformationName},set:function(e){this._defaultConnectionInformationName=e}},defaultConnectionInformation:{get:function(){return this.connectionInformationForName(this.defaultConnectionInformationName)}}}),BlueprintMapping=exports.BlueprintMapping=Montage.create(Mapping,{blueprint:{get:function(){return this._owner}},identifier:{get:function(){return[this.parent.identifier,this.owner.name].join("_")}}}),AttributeMapping=exports.AttributeMapping=Montage.create(Mapping,{attribute:{get:function(){return this._owner}},identifier:{get:function(){return[this.parent.identifier,this.owner.name].join("_")}}}),AssociationMapping=exports.AssociationMapping=Montage.create(Mapping,{association:{get:function(){return this._owner}},identifier:{get:function(){return[this.parent.identifier,this.owner.name].join("_")}}})