import{t as I}from"./title-bar.ae13c960.js";import{A as V}from"./index.4d626d5a.js";import{r as g,a as F,b as r,o,c as v,w as s,k as p,f as d,d as u,e as x,F as m,j as h,t as _}from"./index.6d232491.js";import"./left-arrow.4386ce21.js";const L=h("\u5F71\u5385"),N={class:"content-box flex-1 overflow-auto"},P={class:"font-bold"},q={class:"text-gray-500 text-[14px] my-[5px] truncate"},A={class:"tags"},T={name:"hall",setup(E){const l=g({pageIndex:1,hall_name:""}),a=g({listData:[],pageCount:0}),t=F(!1),i=()=>{t.value=!0,V.hallInfo.getListByPage(l).then(c=>{a.listData=a.listData.concat(c.data.listData),a.pageCount=c.data.pageCount}).finally(()=>{t.value=!1})},y=()=>{console.log("\u52A0\u8F7D\u4E0B\u4E00\u9875",new Date),l.pageIndex++,i()},b=()=>{l.pageIndex=1,a.listData=[],i()};return i(),(c,n)=>{const D=r("van-tag"),B=r("van-list"),k=r("van-pull-refresh"),w=r("page-view");return o(),v(w,{class:"flex flex-col"},{default:s(()=>[p(I,null,{default:s(()=>[L]),_:1}),d("div",N,[p(k,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),onRefresh:b},{default:s(()=>[p(B,{loading:t.value,"onUpdate:loading":n[0]||(n[0]=e=>t.value=e),"finished-text":"\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86","loading-text":"\u52A0\u8F7D\u4E2D...",offset:10,onLoad:y,finished:l.pageIndex>=a.pageCount,class:"movie-list px-[10px] box-border"},{default:s(()=>[(o(!0),u(m,null,x(a.listData,e=>(o(),u("div",{key:e.id,class:"movie-item border-0 border-b border-solid border-gray-300 py-[10px]"},[d("div",P,_(e.hall_name),1),d("div",q,_(e.address),1),d("div",A,[(o(!0),u(m,null,x(e.tags.split(","),(f,C)=>(o(),v(D,{plain:"",key:f,color:C%2==0?"#FF9E21":"#01BB84",class:"mr-[5px]"},{default:s(()=>[h(_(f),1)]),_:2},1032,["color"]))),128))])]))),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])])]),_:1})}}};export{T as default};
