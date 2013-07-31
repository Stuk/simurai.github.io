montageDefine("15a68c4","ui/rich-text-editor/rich-text-editor.reel/rich-text-editor",{dependencies:["./rich-text-editor-base","./rich-text-sanitizer","montage/core/promise"],factory:function(e,t){var n=e("./rich-text-editor-base").RichTextEditorBase,i=e("./rich-text-sanitizer").Sanitizer,r=e("montage/core/promise").Promise;t.RichTextEditor=n.specialize({hasFocus:{enumerable:!0,get:function(){return this._hasFocus}},innerElement:{enumerable:!0,get:function(){return this._innerElement}},focus:{enumerable:!0,value:function(){this._needsFocus=!0,this.needsDraw=!0}},isActiveElement:{enumerable:!0,get:function(){return this._isActiveElement}},readOnly:{enumerable:!0,get:function(){return this._readOnly},set:function(e){this._readOnly!==e&&(this._readOnly=e,e&&this.hideOverlay(),this.needsDraw=!0)}},value:{get:function(){var e,t,n=this._innerElement,r="",a=null;return this._dirtyValue&&!this._value_locked&&(this._value_locked=!0,n&&(a=n.querySelector("Editor-overlay"),a&&(e=a.parentNode,t=a.nextSibling,e.removeChild(a)),r=n.innerHTML),"<br>"==r&&(r=""),void 0===this._sanitizer&&(this._sanitizer=new i),this._sanitizer&&(r=this._sanitizer.didGetValue(r,this._uniqueId)),a&&e.insertBefore(a,t),this._value!=r&&(this.dispatchBeforeOwnPropertyChange("value",this._value),this._value=r,this.dispatchOwnPropertyChange("value",this._value)),this._dirtyValue=!1,this._value_locked=!1),this._value},set:function(e){(this._value!==e||this._dirtyValue)&&(this.hideOverlay(),void 0===this._sanitizer&&(this._sanitizer=new i),this._sanitizer&&(e=this._sanitizer.willSetValue(e,this._uniqueId)),this._value=e,this._dirtyValue=!1,this._dirtyTextValue=!0,this._needsAssingValue=!0,this.needsDraw=!0),this._needsOriginalContent=!1}},textValue:{enumerable:!0,get:function(){var e,t,n=this._innerElement,i="",r=null;return this._dirtyTextValue&&!this._textValue_locked&&(this._textValue_locked=!0,n&&(r=n.querySelector("Editor-overlay"),r&&(e=r.parentNode,t=r.nextSibling,e.removeChild(r)),i=this._innerText(n),r&&e.insertBefore(r,t)),this._textValue!=i&&(this.dispatchBeforeOwnPropertyChange("textValue",this._textValue),this._textValue=i,this.dispatchOwnPropertyChange("textValue",this._textValue)),this._dirtyTextValue=!1,this._textValue_locked=!1),this._textValue},set:function(e){(this._textValue!==e||this._dirtyTextValue)&&(this.hideOverlay(),this._textValue=e,this._dirtyTextValue=!1,this._dirtyValue=!0,this._needsAssingValue=!0,this.needsDraw=!0),this._needsOriginalContent=!1}},delegate:{enumerable:!0,value:null},sanitizer:{enumerable:!1,get:function(){return this._sanitizer},set:function(e){this._sanitizer=e}},overlays:{enumerable:!1,get:function(){return this._overlays},set:function(e){this.hideOverlay(),e instanceof Array?(this._overlays=e,this._callOverlays("initWithEditor",this,!0)):this._overlays=null}},activeOverlay:{get:function(){return this._activeOverlay}},showOverlay:{value:function(e){var t=this._overlaySlot,n=t?t.element:null;n&&(this._activeOverlay=e,this._innerElement.appendChild(n.parentNode?n.parentNode.removeChild(n):n),t.attachToParentComponent(),t.content=e)}},hideOverlay:{value:function(){var e=this._overlaySlot,t=e?e.element:null;t&&(t.parentNode&&t.parentNode.removeChild(t),this._activeOverlay=null,e.content=null)}},bold:{enumerable:!0,get:function(){return this._genericCommandGetter("bold","bold")},set:function(e){this._genericCommandSetter("bold","bold",e)}},underline:{enumerable:!0,get:function(){return this._genericCommandGetter("underline","underline")},set:function(e){this._genericCommandSetter("underline","underline",e)}},italic:{enumerable:!0,get:function(){return this._genericCommandGetter("italic","italic")},set:function(e){this._genericCommandSetter("italic","italic",e)}},strikeThrough:{enumerable:!1,get:function(){return this._genericCommandGetter("strikeThrough","strikethrough")},set:function(e){this._genericCommandSetter("strikeThrough","strikethrough",e)}},baselineShift:{enumerable:!0,get:function(){return this._baselineShift=this._baselineShiftGetState(),this._baselineShift},set:function(e){var t=this._baselineShiftGetState();t!=e&&("baseline"==e?"subscript"==t?this.doAction("subscript"):"superscript"==t&&this.doAction("superscript"):"subscript"==e?this.doAction("subscript"):"superscript"==e&&this.doAction("superscript"))}},indent:{enumerable:!0,value:function(){this.doAction("indent")}},outdent:{enumerable:!0,value:function(){this.doAction("outdent")}},listStyle:{enumerable:!0,get:function(){return this._listStyle=this._listStyleGetState(),this._listStyle},set:function(e){var t=this._listStyleGetState();t!=e&&("none"==e?this.doAction("ordered"==t?"insertorderedlist":"insertunorderedlist"):"ordered"==e?this.doAction("insertorderedlist"):"unordered"==e&&this.doAction("insertunorderedlist"))}},justify:{enumerable:!0,get:function(){return this._justify=this._justifyGetState(),this._justify},set:function(e){var t=this._justifyGetState();t!=e&&-1!==["left","center","right","full"].indexOf(e)&&this.doAction("justify"+e)}},fontName:{enumerable:!0,get:function(){return this._fontName=this._fontNameGetState(),this._fontName},set:function(e){this._genericCommandSetter("fontName","fontname",e)}},fontSize:{enumerable:!0,get:function(){return this._genericCommandGetter("fontSize","fontsize")},set:function(e){this._genericCommandSetter("fontSize","fontsize",e)}},backColor:{enumerable:!0,get:function(){return this._genericCommandGetter("backColor","backcolor")},set:function(e){this._genericCommandSetter("backColor","backcolor",null===e?"inherit":e)}},foreColor:{enumerable:!0,get:function(){return this._genericCommandGetter("foreColor","forecolor")},set:function(e){this._genericCommandSetter("foreColor","forecolor",null===e?"inherit":e)}},selectAll:{enumerable:!0,value:function(){this.doAction("selectall")}},selectElement:{enumerable:!0,value:function(e){var t,n;t=this._nodeOffset(e),-1!==t&&(n=document.createRange(),n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),this._selectedRange=n)}},undoManager:{enumerable:!0,get:function(){return this._undoManager},set:function(e){this._undoManager=e}},undo:{enumerable:!0,value:function(){this.undoManager?this.undoManager.undo():this._undo()}},redo:{enumerable:!0,value:function(){this.undoManager?this.undoManager.redo():this._redo()}},execCommand:{enumerable:!1,value:function(e,t,n,i){var a=document.activeElement,o=this._innerElement,s=!1;return o?(o!=a&&o.focus(),void 0===n&&(n=!1),i=i||this._execCommandLabel[e]||"Typing",this._executingCommand=!0,document.execCommand(e,t,n)?(this._executingCommand=!1,-1==["selectall"].indexOf(e)?this.undoManager&&(this._stopTyping(),this.undoManager.register(i,r.resolve([this._undo,this,i,this._innerElement]))):this.markDirty(),this.handleSelectionchange(),s=!0):this._executingCommand=!1,o!=a&&a.focus(),s):!1}},markDirty:{enumerable:!1,value:function(){var e=this,t=function(){clearTimeout(e._forceUpdateValuesTimeout),delete e._forceUpdateValuesTimeout,clearTimeout(e._updateValuesTimeout),delete e._updateValuesTimeout,e._dirtyValue&&e.dispatchOwnPropertyChange("value",e.value),e._dirtyTextValue&&e.dispatchOwnPropertyChange("textValue",e.textValue),e._dispatchEditorEvent("editorChange")};this._needsAssingValue||(this._dirtyValue=!0,this._dirtyTextValue=!0),this._forceUpdateValuesTimeout||(this._forceUpdateValuesTimeout=setTimeout(t,1e3)),this._updateValuesTimeout&&clearTimeout(this._updateValuesTimeout),this._updateValuesTimeout=setTimeout(t,100)}}})}});