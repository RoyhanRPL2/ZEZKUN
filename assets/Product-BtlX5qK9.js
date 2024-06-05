import{_ as v}from"./CarouselImage-BNQ5gjAy.js";import{_ as w,r as _,e as y,h as C,k as F,c as l,b as u,a as e,F as i,f as p,o,n as j,t as a,w as I,p as E,i as B}from"./index-C4n-wyPm.js";const D=n=>(E("data-v-7111c036"),n=n(),B(),n),N={class:"flex flex-col sm:gap-[120px]"},P={class:"flex flex-col items-center sm:items-start gap-[20px] sm:gap-[60px] lg:gap-[120px] m-5 sm:m-20"},S={class:"w-full flex flex-row py-[10px] justify-center sm:justify-between"},M={class:"w-[70%] scrollbar flex flex-row gap-[30px] sm:gap-[20px] overflow-x-auto overflow-y-hidden"},O=["onClick"],U=D(()=>e("div",{class:"hidden lg:flex"},[e("button",{class:"bg-black px-[30px] py-3"},[e("p",{class:"text-white text-base font-bold"},"Filter")])],-1)),$={class:"font-black text-black text-lg sm:text-3xl lg:text-5xl"},L={class:"grid w-full sm:grid-cols-2 lg:grid-cols-4 sm:gap-[52px] mt-5"},R={class:"w-full bg-[#F7F4F7] p-4"},T=["src","alt"],V={class:"flex flex-col my-[5px] gap-[5px] sm:my-[10px] sm:gap-[10px]"},W={class:"font-medium text-sm sm:text-xl text-black"},q={class:"text-[#4E696C] text-xs sm:text-base line-clamp-3"},z={class:"font-medium text-sm sm:text-xl text-black"},A={key:1,class:"w-full h-[415px] border border-black flex items-center justify-center text-black font-black"},G={__name:"Product",setup(n){const d=_([]),r=_(null);y(()=>{fetch("/src/components/data.json").then(t=>t.json()).then(t=>{d.value=t}).catch(t=>{console.error("Error fetching product data:",t)})});const f=C(()=>[...new Set(d.value.map(t=>t.merk))]),h=["Waterproof","Windbreaker","Lightweight"],b=t=>{r.value=t},m=t=>d.value.filter(x=>x.category===t&&(!r.value||x.merk===r.value)),g=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t);return(t,x)=>{const k=F("router-link");return o(),l("div",N,[u(v),e("div",P,[e("div",S,[e("div",M,[(o(!0),l(i,null,p(f.value,(c,s)=>(o(),l("div",{key:s,class:j(["px-[30px] py-3 flex items-center justify-center font-bold text-base cursor-pointer",r.value===c?"text-white bg-black":"text-black bg-white border-x-2 border-[#E2EBEB]"]),style:{flex:"0 0 auto","min-width":"calc(20% - 20px)"},onClick:H=>b(c)},[e("p",null,a(c),1)],10,O))),128))]),U]),(o(),l(i,null,p(h,c=>(o(),l(i,null,[e("h1",$,a(c),1),e("div",L,[m(c).length>0?(o(!0),l(i,{key:0},p(m(c),s=>(o(),l("div",{key:s.id,class:"flex flex-col h-fit gap-[10px]"},[u(k,{to:`/product-detail/${s.id}`},{default:I(()=>[e("div",R,[e("img",{class:"object-cover",src:s.imageUrl,alt:s.name},null,8,T)]),e("div",V,[e("h1",W,a(s.name),1),e("p",q,a(s.description),1),e("h2",z,a(g(s.price)),1)])]),_:2},1032,["to"])]))),128)):(o(),l("div",A," PRODUCT NOT FOUND"))])],64))),64))])])}}},Q=w(G,[["__scopeId","data-v-7111c036"]]);export{Q as default};