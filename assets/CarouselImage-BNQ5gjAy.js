import{r as u,e as y,l as x,m as w,o as r,c as n,a as t,u as k,F as d,f as m,q as h,t as g,n as _}from"./index-C4n-wyPm.js";const b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%3e%3cpath%20d='M65.625%2081.25L34.375%2050L65.625%2018.75'%20stroke='white'%20stroke-opacity='0.5'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",S="/ZEZKUN/assets/carousel-img-1-CkCaYOtj.png",C="/ZEZKUN/assets/carousel-img-2-DA71jVJZ.png",q="/ZEZKUN/assets/carousel-img-3-fzP4vRML.png",I={class:"carousel relative w-full h-[650px] overflow-hidden"},T=["src"],Z={class:"carousel-caption text-left max-w-[500px] ml-[200px]"},j={class:"text-[48px] font-[900] leading-[110%] mb-[30px]"},L={class:"text-[16px] font-[500] leading-[145%] tracking-[0.16px] text-white/60"},$={class:"carousel-indicators absolute bottom-[10px] right-[10px] flex"},F={__name:"CarouselImage",setup(z){const o=[{title:"New Adventures with Quality Thrift Jackets!",description:"Find high-quality second-hand outdoor jackets that are ready to accompany you on every adventure.",image:S},{title:"Find your favorite Outdoor Jacket at an Affordable Price!",description:"Choose your favorite outdoor jacket from our thrift collection. The best quality at a price that doesn't break the bank.",image:C},{title:"Express your adventurous style with a Thrift Jacket!",description:"Show off your adventurous style with a stylish and functional second-hand outdoor jacket. Find the best selection here.",image:q}],l=u([o[o.length-1],...o,o[0]]),e=u(1);let i=null;const v=()=>{i=setInterval(p,5e3)},p=()=>{e.value++,e.value===l.value.length-1&&setTimeout(()=>{e.value=1,document.querySelector(".carousel-content").style.transition="none",document.querySelector(".carousel-content").style.transform=`translateX(-${e.value*100}%)`,setTimeout(()=>{document.querySelector(".carousel-content").style.transition="transform 0.5s ease-in-out"},20)},500)},f=()=>{e.value--,e.value===0&&setTimeout(()=>{e.value=l.value.length-2,document.querySelector(".carousel-content").style.transition="none",document.querySelector(".carousel-content").style.transform=`translateX(-${e.value*100}%)`,setTimeout(()=>{document.querySelector(".carousel-content").style.transition="transform 0.5s ease-in-out"},20)},500)};return y(()=>{v()}),x(()=>{clearInterval(i)}),w(e,c=>{document.querySelector(".carousel-content").style.transform=`translateX(-${c*100}%)`}),(c,B)=>(r(),n("div",I,[t("div",{class:"arrow left-arrow absolute top-[45%] translate-x-[50%] cursor-pointer z-10",onClick:f},[t("img",{src:k(b),alt:"Icon Arrow Left",class:"w-[100px] h-[100px]"},null,8,T)]),t("div",{class:"carousel-content flex transition-transform duration-[0.5s] ease-in-out",style:h({transform:`translateX(-${e.value*100}%)`})},[(r(!0),n(d,null,m(l.value,(a,s)=>(r(),n("div",{class:"carousel-slide min-w-full h-[650px] box-border bg-cover bg-center flex text-white items-center",key:s,style:h({backgroundImage:` url(${a.image})`,background:`linear-gradient(258deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${a.image})`,backgroundSize:"cover"})},[t("div",Z,[t("h1",j,g(a.title),1),t("p",L,g(a.description),1)])],4))),128))],4),t("div",$,[(r(),n(d,null,m(o,(a,s)=>t("div",{class:_(["indicator w-[15px] h-[10px] bg-white ml-[5px] transition-all duration-300 ease-in-out",{active:s===(e.value-1)%o.length}]),key:s},null,2)),64))])]))}};export{F as _};
