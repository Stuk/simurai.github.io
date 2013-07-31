function find(e,t,n,r){for(var i,a=[],o=0,s=t.length;s>o&&!(e(t[o])&&(a.push(t[o]),0>=--r))&&(i=t[o].children,!(n&&i&&i.length>0&&(i=find(e,i,n,r),a=a.concat(i),r-=i.length,0>=r)));o++);return a}function findOne(e,t,n){for(var r=0,i=t.length;i>r;r++){if(e(t[r]))return t[r];if(n&&t[r].children&&t[r].children.length>0){var a=findOne(e,t[r].children,!0);if(a)return a}}return null}function findAll(e,t){return t.reduce(function(t,n){return n.children&&n.children.length>0?t.concat(findAll(e,n.children)):t},t.filter(e))}function filter(e,t,n,r){return Array.isArray(t)||(t=[t]),"number"==typeof r&&isFinite(r)?1===r?(t=findOne(e,t,n!==!1),t?[t]:[]):find(e,t,n!==!1,r):n===!1?t.filter(e):findAll(e,t)}function getAttribCheck(e,t){return"function"==typeof t?function(n){return n.attribs&&t(n.attribs[e])}:function(n){return n.attribs&&n.attribs[e]===t}}var ElementType=require("domelementtype"),DomUtils=module.exports,isTag=DomUtils.isTag=ElementType.isTag;DomUtils.filter=filter,DomUtils.testElement=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if("tag_name"===n){if(!isTag(t)||!e.tag_name(t.name))return!1}else if("tag_type"===n){if(!e.tag_type(t.type))return!1}else if("tag_contains"===n){if(isTag(t)||!e.tag_contains(t.data))return!1}else if(!t.attribs||!e[n](t.attribs[n]))return!1}else;return!0};var Checks={tag_name:function(e){return"function"==typeof e?function(t){return isTag(t)&&e(t.name)}:"*"===e?isTag:function(t){return isTag(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof type?function(t){return!isTag(t)&&e(t.data)}:function(t){return!isTag(t)&&t.data===e}}};DomUtils.getElements=function(e,t,n,r){var i=[];for(var a in e)e.hasOwnProperty(a)&&(a in Checks?i.push(Checks[a](e[a])):i.push(getAttribCheck(a,e[a])));return 0===i.length?[]:1===i.length?filter(i[0],t,n,r):filter(function(e){return i.some(function(t){return t(e)})},t,n,r)},DomUtils.getElementById=function(e,t,n){return Array.isArray(t)||(t=[t]),findOne(getAttribCheck("id",e),t,n!==!1)},DomUtils.getElementsByTagName=function(e,t,n,r){return filter(Checks.tag_name(e),t,n,r)},DomUtils.getElementsByTagType=function(e,t,n,r){return filter(Checks.tag_type(e),t,n,r)},DomUtils.removeElement=function(e){e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent&&e.parent.children.splice(e.parent.children.lastIndexOf(e),1)},DomUtils.getInnerHTML=function(e){if(!e.children)return"";for(var t=e.children,n=t.length,r="",i=0;n>i;i++)r+=DomUtils.getOuterHTML(t[i]);return r};var booleanAttribs={__proto__:null,async:!0,autofocus:!0,autoplay:!0,checked:!0,controls:!0,defer:!0,disabled:!0,hidden:!0,loop:!0,multiple:!0,open:!0,readonly:!0,required:!0,scoped:!0,selected:!0,"/":!0},emptyTags={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,link:!0,meta:!0,param:!0,embed:!0};DomUtils.getOuterHTML=function(e){var t=e.type;if(t===ElementType.Text)return e.data;if(t===ElementType.Comment)return"<!--"+e.data+"-->";if(t===ElementType.Directive)return"<"+e.data+">";if(t===ElementType.CDATA)return"<!CDATA "+DomUtils.getInnerHTML(e)+"]]>";var n="<"+e.name;if("attribs"in e)for(var r in e.attribs)if(e.attribs.hasOwnProperty(r)){n+=" "+r;var i=e.attribs[r];i?n+='="'+i+'"':r in booleanAttribs||(n+='=""')}return e.name in emptyTags&&0===e.children.length?n+" />":n+">"+DomUtils.getInnerHTML(e)+"</"+e.name+">"},DomUtils.getText=function getText(e){return Array.isArray(e)?e.map(getText).join(""):isTag(e)||e.type===ElementType.CDATA?getText(e.children):e.type===ElementType.Text?e.data:""};