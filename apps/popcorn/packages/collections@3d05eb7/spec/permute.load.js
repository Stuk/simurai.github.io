montageDefine("3d05eb7","spec/permute",{dependencies:[],factory:function(e,t,n){function r(e){if(e.length===0)return[];if(e.length===1)return[e];var t=[];for(var n=0;n<e.length;n++){var i=e.slice(),s=i.splice(n,1);r(i).forEach(function(e){t.push(s.concat(e))})}return t}n.exports=r}})