import{_ as d,a as p}from"./index-51b402dd.js";import{f as m,b as f,c as g,D as V,E as C,g as b}from"./vuetify-ed7e3701.js";import{P as s,Q as l,R as e,l as a,S as r,U as o,f as x,r as y,v as B,V as v,W as P,F as h}from"./vue-f20c6d12.js";/* empty css                            */const k={name:"BlogComponent",props:{post:{type:Object,required:!0}}};function D(u,n,t,i,_,c){return s(),l(C,{class:"blog"},{default:e(()=>[a(m,{src:t.post.imageSrc,"aspect-ratio":"1.5"},null,8,["src"]),a(f,null,{default:e(()=>[r(o(t.post.title),1)]),_:1}),a(g,null,{default:e(()=>[r(o(t.post.date)+" by "+o(t.post.writer),1)]),_:1}),a(V,null,{default:e(()=>[r(o(t.post.text),1)]),_:1})]),_:1})}const E=d(k,[["render",D]]),I=x({__name:"BlogView",setup(u){const n=y({blogPosts:[]});return B(async()=>{p(()=>import("./blogposts-4f14220e.js"),[]).then(t=>{n.blogPosts=t.default.blogData})}),(t,i)=>(s(),l(b,null,{default:e(()=>[(s(!0),v(h,null,P(n.blogPosts,(_,c)=>(s(),l(E,{key:c,post:_},null,8,["post"]))),128))]),_:1}))}});export{I as default};
