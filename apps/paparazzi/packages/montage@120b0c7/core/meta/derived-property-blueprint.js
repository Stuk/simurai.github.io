"use strict";var Montage=require("montage").Montage,PropertyBlueprint=require("core/meta/property-blueprint").PropertyBlueprint,logger=require("core/logger").logger("blueprint");exports.DerivedPropertyBlueprint=Montage.create(PropertyBlueprint,{isDerived:{get:function(){return!0},serializable:!1},dependencies:{value:[],serializable:!0},getterDefinition:{value:null,serializable:!0},setterDefinition:{value:null,serializable:!0}})