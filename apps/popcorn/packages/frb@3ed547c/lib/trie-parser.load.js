montageDefine("3ed547c","lib/trie-parser",{dependencies:[],factory:function(e,t,n){function i(e){var t={};return Object.keys(e.children).forEach(function(n){t[n]=i(e.children[n])}),function(n,i){return i=i||r,function(r,a){return t[r]?t[r](n,function(e){return i(e)(r,a)}):n(e.value,i)(r,a)}}}function r(e){return e}n.exports=i}});