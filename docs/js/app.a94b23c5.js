(function(t){function e(e){for(var r,a,c=e[0],l=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loaded?t._e():n("div",[n("div",[t._v("Loading")]),t._m(0)]),t._l(t.items,(function(t,e){return n("Item",{key:e,attrs:{title:t.title,link:t.link,image:t.image,desc:t.description}})}))],2)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:t.image}}),n("div",{staticClass:"text"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"desc"},[t._v(t._s(t.desc))])])])])},c=[],l={name:"Item",props:{link:String,title:String,image:String,desc:String}},s=l,u=(n("c01e"),n("2877")),f=Object(u["a"])(s,a,c,!1,null,"c80b345a",null),p=f.exports,d=n("bc3a"),v=n.n(d),m={name:"app",data:function(){return{items:null,loaded:!1}},components:{Item:p},mounted:function(){var t=this;v.a.get("https://flannel-glade.glitch.me",{params:{rss:"http://www.espn.com/blog/feed?blog=afcsouth"}}).then((function(e){t.items=e.data.rss.channel.item,t.loaded=!0})).catch((function(t){console.log(t)}))}},b=m,g=(n("034f"),Object(u["a"])(b,i,o,!1,null,null,null)),h=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,n){},c01e:function(t,e,n){"use strict";var r=n("fefb"),i=n.n(r);i.a},fefb:function(t,e,n){}});
//# sourceMappingURL=app.a94b23c5.js.map