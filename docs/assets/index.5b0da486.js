import{o as r,c as d,a as s,t as p,b as g,d as $,e as y,r as u,f,F as S,g as N,h as k,i as L}from"./vendor.04221248.js";const F=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};F();var _=(i,o)=>{for(const[n,a]of o)i[n]=a;return i};const x={name:"Item",props:{link:String,title:String,image:String,desc:String}},b={class:"item"},C=["href"],D=["src"],V={class:"text"},w={class:"title"},A={class:"desc"};function I(i,o,n,a,e,t){return r(),d("div",b,[s("a",{href:n.link,target:"_blank",rel:"noopener"},[s("img",{src:n.image},null,8,D),s("div",V,[s("div",w,p(n.title),1),s("div",A,p(n.desc),1)])],8,C)])}var B=_(x,[["render",I],["__scopeId","data-v-6f498a21"]]);const E={name:"DivisionSelect",props:{modelValue:String}},O={class:"select-box"},P=s("span",{class:"select-label"},"Select Division:",-1),W=["value"],j=g('<option value="afcnorth">AFC North</option><option value="afcsouth">AFC South</option><option value="afceast">AFC East</option><option value="afcwest">AFC West</option><option value="nfcnorth">NFC North</option><option value="nfcsouth">NFC South</option><option value="nfceast">NFC East</option><option value="nfcwest">NFC West</option>',8),q=[j];function K(i,o,n,a,e,t){return r(),d("div",O,[P,s("select",{value:n.modelValue,onInput:o[0]||(o[0]=l=>i.$emit("update:modelValue",l.target.value))},q,40,W)])}var M=_(E,[["render",K]]);const U={name:"Loading",props:{loaded:Boolean}},z={key:0},G=s("div",null,"Loading",-1),H=s("div",{class:"lds-facebook"},[s("div"),s("div"),s("div")],-1),J=[G,H];function Q(i,o,n,a,e,t){return n.loaded?$("",!0):(r(),d("div",z,J))}var R=_(U,[["render",Q]]);const T={name:"app",data(){return{selected:"afcsouth",items:null,loaded:!1}},components:{Item:B,DivisionSelect:M,Loading:R},watch:{selected:function(){this.getData()}},methods:{getData:function(){y.get("https://flannel-glade.glitch.me",{params:{rss:"http://www.espn.com/blog/feed?blog="+this.selected}}).then(i=>{this.items=i.data.rss.channel.item,this.loaded=!0}).catch(i=>{console.log(i)})}},mounted(){this.getData()}},X={id:"app"},Y=s("h1",null,"ESPN NFL News",-1);function Z(i,o,n,a,e,t){const l=u("DivisionSelect"),m=u("Loading"),v=u("Item");return r(),d("div",X,[Y,f(l,{modelValue:e.selected,"onUpdate:modelValue":o[0]||(o[0]=c=>e.selected=c)},null,8,["modelValue"]),f(m,{loaded:e.loaded},null,8,["loaded"]),(r(!0),d(S,null,N(e.items,(c,h)=>(r(),k(v,{key:h,title:c.title,link:c.link,image:c.image,desc:c.description},null,8,["title","link","image","desc"]))),128))])}var ee=_(T,[["render",Z]]);const te=L(ee);te.mount("#app");