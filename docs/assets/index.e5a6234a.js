import{o as c,c as d,a as n,t as _,b as f,d as h,r as u,w as m,e as g,f as p,F as y,g as N,h as $,i as k,j as S}from"./vendor.c07bb6ec.js";const F=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};F();var x=(s,o)=>{const a=s.__vccOpts||s;for(const[l,e]of o)a[l]=e;return a};const b={class:"item"},V=["href"],w=["src"],C={class:"text"},L={class:"title"},A={class:"desc"},B={props:{link:String,title:String,image:String,desc:String},setup(s){return(o,a)=>(c(),d("div",b,[n("a",{href:s.link,target:"_blank",rel:"noopener"},[n("img",{src:s.image},null,8,w),n("div",C,[n("div",L,_(s.title),1),n("div",A,_(s.desc),1)])],8,V)]))}};var E=x(B,[["__scopeId","data-v-2d54c2a0"]]);const I={class:"select-box"},O=n("span",{class:"select-label"},"Select Division:",-1),D=["value"],P=f('<option value="afcnorth">AFC North</option><option value="afcsouth">AFC South</option><option value="afceast">AFC East</option><option value="afcwest">AFC West</option><option value="nfcnorth">NFC North</option><option value="nfcsouth">NFC South</option><option value="nfceast">NFC East</option><option value="nfcwest">NFC West</option>',8),M=[P],W={props:{modelValue:String},setup(s){return(o,a)=>(c(),d("div",I,[O,n("select",{value:s.modelValue,onInput:a[0]||(a[0]=l=>o.$emit("update:modelValue",l.target.value))},M,40,D)]))}};const j={key:0},q=n("div",null,"Loading",-1),K=n("div",{class:"lds-facebook"},[n("div"),n("div"),n("div")],-1),U=[q,K],z={props:{loaded:Boolean},setup(s){return(o,a)=>s.loaded?h("",!0):(c(),d("div",j,U))}};const G={id:"app"},H=n("h1",null,"ESPN NFL News",-1),J={setup(s){const o=u("afcsouth"),a=u(null),l=u(!1);function e(){$.get("https://flannel-glade.glitch.me",{params:{rss:"http://www.espn.com/blog/feed?blog="+o.value}}).then(t=>{a.value=t.data.rss.channel.item,l.value=!0}).catch(t=>{console.log(t)})}return m(o,()=>e()),g(()=>e()),(t,i)=>(c(),d("div",G,[H,p(W,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=r=>o.value=r)},null,8,["modelValue"]),p(z,{loaded:l.value},null,8,["loaded"]),(c(!0),d(y,null,N(a.value,(r,v)=>(c(),k(E,{key:v,title:r.title,link:r.link,image:r.image,desc:r.description},null,8,["title","link","image","desc"]))),128))]))}},Q=S(J);Q.mount("#app");
