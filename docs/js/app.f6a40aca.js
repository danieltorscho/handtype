(function(t){function e(e){for(var o,i,a=e[0],c=e[1],p=e[2],s=0,f=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},u=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"output-wrap"},[n("button",{on:{click:function(e){t.bold=!t.bold}}},[t._v("B")]),n("button",{on:{click:function(e){t.fontsize-=1}}},[t._v("-")]),n("button",{on:{click:function(e){t.fontsize+=1}}},[t._v("+")]),n("h5",[t._v("Output:")]),n("div",{class:t.outputClass,style:"font-size: "+t.fontsize+"px;",domProps:{innerHTML:t._s(t.output)}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],class:"input",attrs:{type:"text",placeholder:"Type some text here"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])},u=[],i=(n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("cc71"),{name:"App",data:function(){return{text:"",output:"",bold:!1,fontsize:20}},computed:{outputClass:function(){return{output:!0,bold:this.bold}}},watch:{text:function(t){var e=t.split("").map((function(t){var e=Math.floor(3*Math.random())+1;return'<span class="style'+e+'">'+t+"</span>"}));this.output=e.join("")}}}),a=i,c=(n("034f"),n("2877")),p=Object(c["a"])(a,r,u,!1,null,null,null),l=p.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.f6a40aca.js.map