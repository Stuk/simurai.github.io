montageDefine("a005228","core/effect/invert-effect",{dependencies:["montage","core/effect/effect"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/effect/effect").Effect;t.InvertEffect=r.create(i,{applyEffect:{value:function(e,t){var n;for(n=0;n<t;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2]}}})}})