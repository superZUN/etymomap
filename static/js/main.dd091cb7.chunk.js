(this.webpackJsonpetymomap=this.webpackJsonpetymomap||[]).push([[0],{24:function(t,e,n){t.exports=n(49)},29:function(t,e,n){},31:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(20),i=n.n(r),c=(n(29),n(10)),l=n.n(c),d=n(21),u=n(4),s=(n(31),n(3)),h=n(8),p=n(6),f=n(5),m=n(7),w=n(1);o.a.Component;var g=n(22),v=n.n(g),b=3,y=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth,x=3.5*y/15;x>150&&(x=150);var E=y/16;console.log(E);var O=[];function j(t,e,n,a){var o=a+2*Math.PI/t*e+.5*Math.PI;return x*Math.sin(o)+n}function k(t,e,n,a){var o=a+2*Math.PI/t*e+.5*Math.PI;return x*Math.cos(o)+n}function I(t){var e=window.innerWidth/2,n=window.innerHeight/2;console.log("welcome props : ",t);var r=t.data.data.length-1,i=[],c=[],l=[],d=[],s=[],h=[],p=[];c.push(e),l.push(n),h.push(0),d.push(e),s.push(n),p.push(0);for(var f=0;f<r;f++){var m=j(r,f,e,0),g=k(r,f,n,0);c.push(m),l.push(g),h.push(2*Math.PI/r*f+.5*Math.PI),d.push(e),s.push(n),p.push(x)}for(var v=1;v<t.data.data.length;v++){console.log(t.data.data),t.data.data[v].shift();var y=j(r,v-1,e,0),I=k(r,v-1,n,0),W=2*Math.PI/r*(v-1)+Math.PI;i.push(t.data.data[v].length);for(var S=0;S<t.data.data[v].length;S++){var M=j(i[v-1]+5,S+3,y,W),C=k(i[v-1]+5,S+3,I,W);c.push(M),l.push(C),h.push(0-W+2*Math.PI/(i[v-1]+5)*(S+3)+.5*Math.PI),d.push(y),s.push(I),p.push(x)}}function P(t){var e=t.word[0],n=t.word[1];console.log(t.word);var r=t.layer;0===t.id&&(r=0),r>2&&(r=2);var i=t.posX,c=t.posY,l=Object(a.useState)(!1),f=Object(u.a)(l,2),m=f[0],g=f[1],v=Object(a.useState)(!1),y=Object(u.a)(v,2),x=y[0],j=y[1],k=Object(w.c)((function(){return{config:w.b.stiff,zIndex:100,opacity:1,left:m?i+400:i,top:c,width:E/(r+1)*b+"px",height:E/(r+1)*b+"px",fontSize:O[r],from:{opacity:0,left:window.innerWidth/2,top:window.innerHeight/2}}})),I=Object(u.a)(k,2),W=I[0],S=I[1],M=Object(w.c)((function(){return{config:w.b.stiff,zIndex:0,left:d.pop(),top:s.pop(),transform:"rotateZ("+(h.pop()/Math.PI*180-90)+"deg)",width:p.pop()+"px",height:"100px",from:{left:window.innerWidth/2,top:window.innerHeight/2,width:"0px",height:"0px"}}})),C=Object(u.a)(M,2),P=C[0],z=(C[1],Object(w.c)((function(){return{config:w.b.stiff,opacity:0,left:i,top:c-E/(r+1)*b,fontSize:O[r],zIndex:999,from:{zIndex:999,opacity:0,left:window.innerWidth/2,top:window.innerHeight/2}}}))),F=Object(u.a)(z,2),H=F[0],T=F[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a.div,{className:"connectLine",style:P}),o.a.createElement(w.a.div,{className:"meaning",style:H},n),o.a.createElement(w.a.div,{className:"word circleBase",style:W,onClick:function(){x||function(e){console.log("clicked",e),t.clickWordCard(e)}({word:e})},onTouchEnd:function(t){T({opacity:0,zIndex:0,top:c-E/(r+1)*b}),j(!1),g(!1),S({config:w.b.stiff,opacity:1,left:i,top:c,width:E/(r+1)*b+"px",height:E/(r+1)*b+"px"})},onTouchStart:function(){T({zIndex:999,opacity:.8,top:c-E/(r+1)*b}),S({opacity:1,width:E/(r+1)*b*1.1+"px",height:E/(r+1)*b*1.1+"px"})},key:e},o.a.createElement("p",null,e)))}var z=0,F=0;return o.a.createElement(o.a.Fragment,null,t.data.data.map((function(e){return o.a.createElement("div",{className:z++},e.map((function(e,n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{key:e,word:e,posX:c[F],posY:l[F],layer:z,id:F++,clickWordCard:t.clickWordCard}))})))})))}O=[y/20,y/25,y/30,y/30,y/30,y/30,y/30],window.innerWidth<400&&(b=3,O=[17,12,10,10,10,10,10]);var W=function(t){var e=t.words,n=(t.searchTerm,t.loading),a=t.handleSubmit,r=t.updateTerm,i=t.clickWordCard;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("form",{width:"100%",align:"center",onSubmit:a,blurOnSubmit:!0,style:{position:"absolute",top:"0px",left:"0px"}},o.a.createElement("input",{autoFocus:!0,placeholder:"search",className:"searchInput",onChange:r}))),n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"loading"},"Loading...")):o.a.createElement(I,{key:"wordCard",data:e,loading:n,clickWordCard:i}))},S=n(23),M=n.n(S),C=null;var P=function(){var t=Object(a.useState)(null),e=Object(u.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(""),c=Object(u.a)(i,2),s=c[0],h=c[1],p=Object(a.useState)(!0),f=Object(u.a)(p,2),m=f[0],w=f[1],g=Object(a.useState)(null),b=Object(u.a)(g,2),y=b[0],x=b[1];function E(){return(E=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Search:"+e),t.prev=1,t.next=4,v.a.get("http://realchord.net/etymo/q2.php?p="+e).then((function(t){var e=t.data;console.log("axios : ",{data:e}),r({data:e}),M()()})).catch((function(t){}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),x("Can't find information.");case 9:return t.prev=9,console.log("finally : ",n),s&&w(!1),t.finish(9);case 13:case"end":return t.stop()}}),t,null,[[1,6,9,13]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(t){E.apply(this,arguments)}(C),console.log("handle Submit: ",s)}),[s]),o.a.createElement(W,{words:n,searchTerm:s,error:y,loading:m,handleSubmit:function(t){t.preventDefault(),s!==C&&(w(!0),h(C))},updateTerm:function(t){var e=t.target.value;C=e},clickWordCard:function(t){C=t.word,console.log("clickWordCard:",t.word),w(!0),h(t)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.dd091cb7.chunk.js.map