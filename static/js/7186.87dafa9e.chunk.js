"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[7186],{2771:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(5043),r=n(3003),o=n(8680),a=n(9254),s=n(7652),l=n(579);const d=e=>{let{itemConfig:t,onBeforeCollect:n,children:d,renderItem:c}=e;const u=(0,r.wA)(),p=(0,r.d4)((e=>e.inventory.equippedItem)),h=!(0,r.d4)((e=>(0,s.l)(e,t.id))),[m,x]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[c({collected:h,handleCollect:()=>{if(!h){if(n){if(!n(p))return}"card"!==t.type||"card-box"!==(null===p||void 0===p?void 0:p.type)?p?x(!0):u((0,o.Ci)(t)):u((0,o.us)({cardId:t.id}))}}}),(0,l.jsx)(a.A,{show:m,onConfirm:()=>{if("card"===(null===p||void 0===p?void 0:p.type)&&"card-box"===t.type){const e={...t,collectedCards:{[p.id]:!0}};u((0,o.Ci)(e))}else u((0,o._e)({newItem:t}));x(!1)},onCancel:()=>x(!1),itemName:(null===p||void 0===p?void 0:p.name)||"current item",message:`Picking up the ${t.name} will return your ${(null===p||void 0===p?void 0:p.name)||"current item"} to its original location. Continue?`})]})}},9498:(e,t,n)=>{n.d(t,{A:()=>p});n(5043);var i=n(5464),r=n(3003),o=n(8680),a=n(2771),s=n(2094),l=n(378),d=n(579);const c=i.i7`
  0%, 100% { transform: translate(0, 0) rotate(-4deg); }
  25% { transform: translate(0, -10px) rotate(4deg); }
  50% { transform: translate(0, 0px) rotate(4deg); }
  75% { transform: translate(0, -10px) rotate(-4deg); }
`,u=i.Ay.div`
  animation: ${c} 6s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`,p=e=>{var t;let{cardId:n,value:i,suit:c}=e;const p=(0,r.wA)(),h=(null===(t=l.A[n])||void 0===t?void 0:t.rarity)||"normal",m=(0,s.aU)(h),x=((0,r.d4)((e=>e.inventory.equippedItem)),{type:"card",id:n,name:`${i} of ${c}`,suit:c,value:i});return(0,d.jsx)(a.A,{itemConfig:x,onBeforeCollect:e=>"card-box"!==(null===e||void 0===e?void 0:e.type)||(p((0,o.us)({cardId:n})),!1),renderItem:e=>{let{collected:t,handleCollect:n}=e;return(0,d.jsx)(u,{children:(0,d.jsxs)(m,{collected:t,onClick:()=>{console.log("clicked"),n()},className:c,children:[i," ","hearts"===c?"\u2665":"diamonds"===c?"\u2666":"clubs"===c?"\u2663":"\u2660"]})})}})}},7161:(e,t,n)=>{n.d(t,{A:()=>u});n(5043);var i=n(5464),r=n(3204),o=n(3003),a=n(8680),s=n(2771),l=n(579);const d=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,c=i.Ay.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: ${e=>"dark"===e.theme?"#fff":"#000"};
  opacity: ${e=>e.collected?.5:1};
  pointer-events: ${e=>e.collected?"none":"auto"};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${e=>e.collected?"none":"scale(1.1)"};
  }
`,u=()=>{const e=(0,o.wA)(),t=((0,o.d4)((e=>e.inventory.equippedItem)),{type:"card-box",id:"card-box",name:"Card Box",collectedCards:{}});return(0,l.jsx)(s.A,{itemConfig:t,onBeforeCollect:n=>{if("card"===(null===n||void 0===n?void 0:n.type)){const i={...t,collectedCards:{[n.id]:!0}};return e((0,a.Ci)(i)),!1}return!0},renderItem:e=>{let{collected:t,handleCollect:n}=e;return(0,l.jsx)(d,{children:(0,l.jsx)(c,{collected:t,onClick:n,children:(0,l.jsx)(r.TXh,{})})})}})}},7088:(e,t,n)=>{n.d(t,{A:()=>f});n(5043);var i=n(5464),r=n(2771),o=n(3003),a=n(8680),s=(n(4157),n(3454)),l=n(7652),d=n(5348),c=n(7540),u=n(579);const p=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,h=i.Ay.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.collected?.5:1};
  transition: transform 0.3s ease;
  font-weight: bold;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`,m=(0,i.Ay)(h)`
  width: ${e=>e.value>=25?"3rem":"2.5rem"};
  height: ${e=>e.value>=25?"3rem":"2.5rem"};
  border-radius: 50%;
  background: ${e=>25===e.value?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":"linear-gradient(135deg, #CD7F32, #E6B17F)"};
  border: 2px solid ${e=>25===e.value?"#A0A0A0":"#8B4513"};
  color: ${e=>e.value>=25?"#404040":"#663300"};
  font-size: ${e=>e.value>=25?"1.2rem":"1rem"};
`,x=(0,i.Ay)(h)`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background: ${e=>{switch(e.value){case 1e4:return"linear-gradient(135deg, #849F84, #C1D9C1)";case 5e3:return"linear-gradient(135deg, #E68A00, #FFB84D)";case 2e3:return"linear-gradient(135deg, #008055, #00B377)";case 1e3:return"linear-gradient(135deg, #666699, #8585AD)";default:return"linear-gradient(135deg, #85AD85, #B3D1B3)"}}};
  border: 2px solid ${e=>{switch(e.value){case 1e4:default:return"#5C705C";case 5e3:return"#B36B00";case 2e3:return"#004D33";case 1e3:return"#40406B"}}};
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  font-size: 1.1rem;
`,f=e=>{let{value:t,id:n}=e;const i=(0,o.wA)(),{unlockAchievement:h}=(0,d.k)(),f=((0,o.d4)((e=>e.inventory.equippedItem)),(0,o.d4)((e=>e.inventory.money))),g=(0,o.d4)((e=>(0,l.l)(e,n))),v=(0,o.d4)((e=>e.inventory.coinSlots)),y=n||`currency-${t}`,b={type:"currency",id:y,name:t>=500?`$${t/100} Bill`:`${t}\xa2 Coin`,value:t},A=v[y]||!g,w=t>=500?x:m,j=t>=500?"$"+t/100:`${t}\xa2`;return(0,u.jsx)(r.A,{itemConfig:b,onBeforeCollect:e=>{if(A){if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=f.find((e=>e.value===t));e&&i((0,a.iZ)({id:e.id,slotId:y}))}return!1}if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=(0,c.I)("money");return i((0,a.W8)({value:t,id:e,slotId:y})),!1}const n=t>=500?t/100:t;return h("COIN_TRAVEL"),i((0,s.qX)(n)),!1},renderItem:e=>{let{handleCollect:n}=e;return(0,u.jsx)(p,{children:(0,u.jsx)(w,{collected:A,onClick:n,value:t,children:j})})}})}},4261:(e,t,n)=>{n.d(t,{A:()=>c});n(5043);var i=n(3204),r=n(2771),o=n(4887),a=n(3003),s=n(8680),l=n(5348),d=n(579);const c=()=>{const e=(0,a.wA)(),{unlockAchievement:t}=(0,l.k)(),n=((0,a.d4)((e=>e.inventory.equippedItem)),{type:"wallet",id:"wallet-1",name:"Money Wallet"});return(0,d.jsx)(r.A,{itemConfig:n,onBeforeCollect:i=>"currency"===(null===i||void 0===i?void 0:i.type)?(e((0,s.W8)({value:i.value,id:i.id})),e((0,s.Ci)(n)),!1):(t("WALLET_FOUND"),!0),renderItem:e=>{let{collected:t,handleCollect:n}=e;return(0,d.jsx)(o.M,{children:(0,d.jsx)(o.X,{collected:t,onClick:n,children:(0,d.jsx)(i.lcY,{})})})}})}},4887:(e,t,n)=>{n.d(t,{M:()=>r,X:()=>o});var i=n(5464);const r=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,o=i.Ay.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: ${e=>"dark"===e.theme?"#fff":"#000"};
  opacity: ${e=>e.collected?.5:1};
  pointer-events: ${e=>e.collected?"none":"auto"};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${e=>e.collected?"none":"scale(1.1)"};
  }
`},7186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var i=n(5043),r=n(5464),o=n(3519),a=n(8628),s=n(3003),l=n(3454),d=n(9642),c=n(6218),u=n(363),p=n(2593),h=n(579);const m=r.i7`
  0% {
    transform: translateY(-200px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(360deg);
    opacity: 1;
  }
`,x=r.i7`
  0%, 100% { transform: translateY(0px) rotate(3deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
`,f={common_blue:{bg:"#4287f5",border:"#2563eb"},common_green:{bg:"#22c55e",border:"#16a34a"},common_red:{bg:"#ef4444",border:"#dc2626"},common_orange:{bg:"#f97316",border:"#ea580c"},common_teal:{bg:"#06b6d4",border:"#0891b2"},common_pink:{bg:"#ec4899",border:"#db2777"},uncommon:{bg:"#22c55e",border:"#16a34a"},rare:{bg:"#ef4444",border:"#dc2626"},epic:{bg:"#a855f7",border:"#9333ea"},legendary:{bg:"#fbbf24",border:"#f59e0b"}},g=r.Ay.div`
  width: 300px;
  height: 450px;
  position: relative;
  margin: 0 auto;
`,v=r.Ay.div`
  width: 260px;
  height: 260px;
  background: rgba(255, 255, 255, 0.9);
  border: 12px solid #ff6b6b;
  border-radius: 50%;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.15);
  z-index: 2;
`,y=r.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`,b=(0,r.Ay)(p.t)`
  animation: ${x} ${e=>2+2*Math.random()}s infinite ease-in-out;
  animation-delay: ${e=>-2*Math.random()}s;
  transform-origin: center;
  scale: 0.7;
  border-radius: 12px;
  opacity: 1;
  pointer-events: none;
  background: ${e=>e.rarity.startsWith("common_")?f[e.rarity].bg:f.common_blue.bg};
  border: 3px solid ${e=>e.rarity.startsWith("common_")?f[e.rarity].border:f.common_blue.border};
`,A=r.Ay.div`
  width: 200px;
  height: 180px;
  background: #ff6b6b;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  z-index: 1;
`,w=r.Ay.div`
  width: 40px;
  height: 8px;
  background: #444;
  border-radius: 4px;
  margin-bottom: 10px;
`,j=r.Ay.div`
  width: 100px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);
`,k=(0,r.Ay)(p.t)`
  animation: ${e=>e.falling?m:"none"} 1s ease-out;
  position: relative;
  scale: 0.8;
  z-index: 10;
  cursor: ${e=>e.isCollectable?"pointer":"default"};
  pointer-events: ${e=>e.isCollectable?"auto":"none"};
`,C=r.Ay.button`
  background: #ffd700;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,M=i.memo((e=>{let{value:t,rarity:n,style:i}=e;return(0,h.jsx)(b,{rarity:n,style:i,children:t})})),I=()=>{const e=(0,s.wA)(),[t,n]=(0,i.useState)(null),[r,o]=(0,i.useState)(!1),[a,d]=(0,i.useState)(null),c=(0,s.d4)((e=>e.inventory.money)),u=(0,s.d4)((e=>e.inventory.equippedItem)),p=c.filter((e=>25===e.value)),m="wallet"===(null===u||void 0===u?void 0:u.type),x=[{value:5,variant:"primary",weight:1},{value:15,variant:"success",weight:1},{value:25,variant:"danger",weight:1},{value:42,variant:"warning",weight:.7},{value:88,variant:"info",weight:.7},{value:100,variant:"danger",weight:.5},{value:123,variant:"warning",weight:.3},{value:256,variant:"info",weight:.2},{value:404,variant:"danger",weight:.1},{value:500,variant:"success",weight:.05}],f=e=>{const t=["common_blue","common_green","common_red","common_orange","common_teal","common_pink"];return t[Math.floor(Math.random()*t.length)]},b=(0,i.useMemo)((()=>{const e=[];for(let t=0;t<50;t++){const n=x[Math.floor(Math.random()*x.length)],i=f(n.value),r={position:"absolute",left:85*Math.random()+"%",top:85*Math.random()+"%"};e.push((0,h.jsx)(M,{value:n.value,rarity:i,style:r},t))}return e}),[]);return(0,h.jsxs)(g,{children:[(0,h.jsx)(v,{children:(0,h.jsx)(y,{children:b})}),(0,h.jsxs)(A,{children:[(0,h.jsx)(j,{children:(t||a)&&(0,h.jsx)(k,{falling:r,variant:(null===t||void 0===t?void 0:t.variant)||(null===a||void 0===a?void 0:a.variant),isCollectable:!!a,children:(null===t||void 0===t?void 0:t.value)||(null===a||void 0===a?void 0:a.value)})}),(0,h.jsx)(w,{}),(0,h.jsx)(C,{onClick:()=>{if(a)return e((0,l.Ci)({type:"levelButton",...a})),void d(null);e((0,l.Fr)({type:"money",value:25})),o(!0);const t=(()=>{const e=Math.random();return e<.4?{value:Math.floor(9*Math.random())+1,variant:"primary"}:e<.7?{value:Math.floor(20*Math.random())+10,variant:"success"}:e<.85?{value:Math.floor(30*Math.random())+30,variant:"warning"}:e<.95?{value:Math.floor(50*Math.random())+80,variant:"danger"}:e<.98?{value:Math.floor(100*Math.random())+200,variant:"info"}:{value:Math.floor(200*Math.random())+300,variant:"danger"}})();n(t),setTimeout((()=>{o(!1),d(t),n(null)}),1e3)},disabled:(!m||0===p.length)&&!a,children:a?"Collect Button":"Insert 25\xa2"})]})]})};var _=n(4261);const $=r.i7`
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`,q=r.i7`
  0% {
    transform: translate(100px, 0);
  }
  25% {
    transform: translate(0, 50px);
  }
  50% {
    transform: translate(-100px, 0);
  }
  75% {
    transform: translate(0, -50px);
  }
  100% {
    transform: translate(100px, 0);
  }
`,E=r.i7`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`,S=r.Ay.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,T=(0,r.Ay)(c.A)`
  position: absolute;
  animation: ${e=>"circle"===e.motion?r.AH`${$} 5s linear infinite`:"figureEight"===e.motion?r.AH`${q} 5s ease-in-out infinite`:"none"};
`,N=(0,r.Ay)(c.A)`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: translate(
    ${e=>e.offsetX}px,
    ${e=>e.offsetY}px
  );
  animation: ${r.AH`${E} 1s ease-in-out infinite`};
`,B=e=>{let{variant:t="circle",targetLevel:n,children:r}=e;const[o,a]=(0,i.useState)({x:0,y:0}),[s,l]=(0,i.useState)({x:0,y:0});return(0,i.useEffect)((()=>{if("avoid"!==t)return;const e=e=>{const t=document.getElementById("chase-container");if(!t)return;const n=t.getBoundingClientRect(),i=e.clientX-n.left-n.width/2,r=e.clientY-n.top-n.height/2;a({x:i,y:r});const o=Math.atan2(r,i),s=Math.min(Math.hypot(i,r),100),d=-Math.cos(o)*s,c=-Math.sin(o)*s;l({x:d,y:c})};return document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)}),[t]),"avoid"===t?(0,h.jsx)(S,{id:"chase-container",children:(0,h.jsx)(N,{targetLevel:n,offsetX:s.x,offsetY:s.y,children:r})}):(0,h.jsx)(S,{id:"chase-container",children:(0,h.jsx)(T,{targetLevel:n,motion:t,children:r})})};var L=n(1908),Y=n(3204),z=n(2771),D=n(4887);const H=()=>(0,h.jsx)(z.A,{itemConfig:{type:"encyclopedia",id:"encyclopedia-1",name:"Number Encyclopedia"},renderItem:e=>{let{collected:t,handleCollect:n}=e;return(0,h.jsx)(D.M,{children:(0,h.jsx)(D.X,{collected:t,onClick:n,children:(0,h.jsx)(Y.vd0,{})})})}}),O={prefix:{high_annoyance:["ARGH, MY HEAD HURTS!","I'LL SMASH YOU WITH MY BRAIN!","YOUR WORDS MAKE MY HEAD ACHE!","STOP MAKING ME THINK!","MY BRAIN IS BOILING!"],high_scientific:["Let me think...","My brain tells me...","After careful study...","My research shows...","I calculated that..."],high_mockery:["Hah, tiny brain...","Watch this genius...","Your head empty...","So simple minded...","How cute..."],high_ego:["My brain is huge!","Witness my genius!","I know everything!","My mind is superior!","Bow to my intellect!"],neutral:["Listen up...","Think about it...","Here's the thing...","Let me tell you...","Get this..."]},subjects:{brain:["my head","my brain","my mind","my thoughts","my genius","my intellect","my wisdom","my knowledge","my thinking","my understanding"],dimension:["space","time","reality","universe","dimension","existence","cosmos","world","everything","nothing"],knowledge:["truth","secret","wisdom","fact","answer","knowledge","idea","thought","theory","solution"]},verbs:{mystical:["sees through","knows about","understands","reveals","shows"],scientific:["proves","explains","demonstrates","calculates","measures"],aggressive:["crushes","smashes","breaks","destroys","pulverizes"]},objects:{cosmic:["everything","the universe","all existence","reality itself","all dimensions","infinite space","endless time","all possibilities","the cosmos","creation"],scientific:["the problem","the solution","the equation","the theory","the proof","the evidence","the result","the calculation","the experiment","the conclusion"],mystical:["the truth","the mystery","the secret","the answer","the meaning","the purpose","the wisdom","the knowledge","the understanding","the revelation"]}},F={why:{annoyance:15,scientific:5,mockery:-10,ego:-15,topic_depth:20,consistency:-5,defensiveness:25,topic_fixation:-15},how:{annoyance:5,scientific:20,mockery:-5,ego:10,topic_depth:15,consistency:10,creativity:-10,defensiveness:15,topic_fixation:5},what:{annoyance:10,scientific:-5,mockery:15,ego:-5,topic_depth:-10,consistency:0,creativity:15,defensiveness:10,topic_fixation:-5},impossible:{annoyance:20,scientific:-15,mockery:10,ego:-20,topic_depth:-5,consistency:-15,creativity:20,defensiveness:30,topic_fixation:-20},interesting:{annoyance:-15,scientific:10,mockery:-10,ego:5,topic_depth:10,consistency:5,creativity:5,defensiveness:-20,topic_fixation:-10},continue:{annoyance:-10,scientific:5,mockery:-5,ego:10,topic_depth:15,consistency:10,creativity:0,defensiveness:-15,topic_fixation:15}},X=["why","how","what","impossible","continue","interesting"],R=r.Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,W=r.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: ${e=>"ANGRY"===e.mood?"#ffebee":"SCIENTIFIC"===e.mood?"#e3f2fd":"MOCKING"===e.mood?"#fff3e0":"DEFENSIVE"===e.mood?"#e8f5e9":"#f5f5f5"};
  padding: 15px;
  border-radius: 10px;
  transition: background 0.3s ease;
`,G=r.Ay.div`
  font-size: 40px;
  margin-right: 15px;
  transform: ${e=>"ANGRY"===e.mood?"scale(1.2)":"MOCKING"===e.mood?"rotate(-10deg)":"DEFENSIVE"===e.mood?"translateY(-2px)":"none"};
  transition: transform 0.3s ease;
`,U=r.Ay.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-family: monospace;
  font-size: 1.1rem;
  min-height: 80px;
`,P=r.Ay.button`
  background: white;
  border: 1px solid #ddd;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`,V=r.Ay.button`
  background: white;
  border: 1px solid #ddd;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`,K=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,J=r.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`,Z=()=>{const[e,t]=(0,i.useState)({annoyance:50,scientific:50,mockery:50,ego:50,topic_depth:50,consistency:50,creativity:50,defensiveness:30,topic_fixation:70}),[n,r]=(0,i.useState)([]),o=i=>{const o=((e,t)=>{const n=F[t],i={...e};return Object.keys(n).forEach((e=>{i[e]=Math.max(0,Math.min(100,i[e]+n[e]))})),i})(e,i);r([...n,e]),t(o)},s=(e=>{let t=O.prefix.neutral;O.prefix.high_defensive||(O.prefix.high_defensive=["DON'T JUDGE ME!","I'M NOT WRONG!","LEAVE ME ALONE!","STOP ATTACKING ME!","YOU DON'T UNDERSTAND!"]),O.prefix.calming_down||(O.prefix.calming_down=["Maybe you're right...","I see your point...","That makes sense...","I understand now...","Fair enough..."]),e.defensiveness>75?t=O.prefix.high_defensive:e.annoyance<30&&e.topic_fixation<40?t=O.prefix.calming_down:e.annoyance>75?t=O.prefix.high_annoyance:e.scientific>75?t=O.prefix.high_scientific:e.mockery>75?t=O.prefix.high_mockery:e.ego>75&&(t=O.prefix.high_ego);let n=O.verbs.mystical;e.scientific>65&&(n=O.verbs.scientific),e.annoyance>75&&(n=O.verbs.aggressive);let i=O.subjects.brain;e.topic_depth>70&&(i=O.subjects.dimension),e.creativity>70&&(i=O.subjects.knowledge);let r=O.objects.scientific;return e.consistency<40&&(r=O.objects.mystical),e.ego>70&&(r=O.objects.cosmic),{prefix:t,verbs:n,subjects:i,objects:r}})(e),l=(e=>{const{prefix:t,verbs:n,subjects:i,objects:r}=e,o=t[Math.floor(Math.random()*t.length)],a=n[Math.floor(Math.random()*n.length)];return`${o} The ${i[Math.floor(Math.random()*i.length)]} ${a} ${r[Math.floor(Math.random()*r.length)]}!`})(s);return(0,h.jsx)(R,{children:(0,h.jsx)(a.A,{children:(0,h.jsxs)(a.A.Body,{children:[(0,h.jsxs)(W,{stateVector:e,children:[(0,h.jsx)(G,{stateVector:e,children:"\ud83e\uddcc"}),(0,h.jsx)(J,{vector:e})]}),(0,h.jsx)(U,{children:l}),(0,h.jsxs)(K,{children:[X.map((t=>(0,h.jsx)(P,{onClick:()=>o(t),disabled:e.consistency<10,children:t},t))),(0,h.jsx)(V,{onClick:()=>{if(0===n.length)return;const e=n[n.length-1];t(e),r(n.slice(0,-1))},disabled:0===n.length,children:"Undo"})]})]})})})};var Q=n(8565),ee=n(4282);const te=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ne=r.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,ie=r.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,re={0:{nextLocation:"1",message:"Welcome! Let me show you around this peculiar place..."}},oe=e=>{let{currentLevel:t}=e;const n=(0,s.wA)(),i=(0,s.d4)((e=>e.jester.currentLocation));if(i!==t)return null;return(0,h.jsxs)(te,{children:[(0,h.jsx)(ne,{children:"\ud83c\udccf"}),(0,h.jsx)(ie,{children:re[i].message}),(0,h.jsx)(ee.A,{variant:"outline-primary",onClick:()=>{const e=re[i].nextLocation;n((0,Q.J)(e))},size:"sm",children:"*poof*"})]})};var ae=n(7161),se=n(9498),le=n(6050);const de=()=>(0,h.jsx)(z.A,{itemConfig:{type:"diamond",id:"diamond",name:"Diamond"},renderItem:e=>{let{collected:t,handleCollect:n}=e;return(0,h.jsx)(D.M,{children:(0,h.jsx)(D.X,{collected:t,onClick:n,children:"\ud83d\udc8e"})})}}),ce=()=>(0,h.jsx)(z.A,{itemConfig:{type:"black-hole",id:"black-hole",name:"Black Hole"},renderItem:e=>{let{collected:t,handleCollect:n}=e;return(0,h.jsx)(D.M,{children:(0,h.jsx)(D.X,{collected:t,onClick:n,children:"\ufffd\ufe0f"})})}});var ue=n(441),pe=n(8680),he=(n(9254),n(8852));const me=r.Ay.div`
  width: 340px;
  height: 380px;
  background: linear-gradient(45deg, #8b4513, #a0522d);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  overflow: hidden;
`,xe=r.Ay.div`
  flex: 1;
  background: linear-gradient(90deg, #5d4037, #4e342e);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`,fe=r.Ay.div`
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 6px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,ge=r.Ay.div`
  width: 80px;
  height: 80px;
  border: 3px dashed rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`,ve=()=>{const e=(0,s.wA)(),t=(0,s.d4)((e=>e.inventory.equippedItem)),n=(0,s.d4)((e=>e.inventory.bookshelf)),[r,o]=(0,i.useState)(!1),[a,l]=(0,i.useState)(null);return(0,h.jsx)(me,{children:[0,1,2].map((i=>(0,h.jsx)(xe,{children:[0,1,2].map((r=>{const o=3*i+r;return(0,h.jsx)(fe,{onClick:()=>(i=>{const r=n[i];if(r&&!t){if("card-box"===r.type){const t={...r,collectedCards:r.collectedCards||{}};e((0,pe.Ci)(t))}else e((0,pe.Ci)(r));e((0,pe.cp)({index:i}))}else if(t&&!r)e((0,pe.mO)({item:t,index:i})),e((0,pe.lS)());else if(t&&r)if("card"===t.type&&"card-box"===r.type)e((0,pe.us)({cardId:t.id})),e((0,pe.lS)());else if("card-box"===t.type&&"card"===r.type){const n={...t,collectedCards:{...t.collectedCards,[r.id]:!0}};e((0,pe.cp)({index:i})),e((0,pe.Ci)(n))}})(o),children:n[o]?(0,h.jsx)(he.A,{item:n[o]}):(0,h.jsx)(ge,{children:"Empty"})},r)}))},i)))})};var ye=n(7088);const be=(0,r.Ay)(o.A)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  > * {
    margin: 20px 0;
    align-self: center;
  }
`,Ae=(0,r.Ay)(a.A)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`,we=()=>{(0,s.wA)();return(0,h.jsx)(be,{children:(0,h.jsxs)(Ae,{children:[(0,h.jsx)(c.A,{targetLevel:0,variant:"primary",children:"Start Game"}),(0,h.jsxs)(a.A.Body,{children:[(0,h.jsx)(a.A.Title,{as:"h2",className:"mb-4",children:"This is the demo level."}),(0,h.jsx)(a.A.Text,{children:"If you made it here, you've seriously broken the game, congratulations!"}),(0,h.jsx)(a.A.Text,{children:"Here stands a neat puzzle game. Press keys to reach next stages."}),(0,h.jsx)(a.A.Text,{children:"Many stages seem easy to beat. Some parts matter more than others."}),(0,h.jsxs)(a.A.Text,{children:["The game teaches each method as shown to you, no need to make random attempts or locate secret clues.",(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Watch each stage well"}),(0,h.jsx)("li",{children:"Make use of your tools at hand"}),(0,h.jsx)("li",{children:"Ponder beyond the box, then back"})]})]}),(0,h.jsx)(d.A,{text:"not 1 Some text -2 that can be picked up twthreeo wonton xii vii l Infinity -Infinity - Infinityi-Infinityi (2+1*3^2)/2=level+1 2=level+1=2",allowTextPickup:!0,sourceId:"unique-source-id"}),(0,h.jsx)(d.A,{text:" -3 -4 -5 -6 one plus two equals level dozen divided by three equals level score minus dozen equals level pair plus couple equals level triple times trio equals level (quartet squared plus triple) divided by pair equals level dozen minus (level times pair) equals zero pi equals level e times level equals ten level times level equals quartet level squared equals sixteen infinity equals level plus one level equals level plus one level equals level level+1=dozen/2 (2*level+1)^2=25 wonton plus fortnight equals level toupee times forest equals level level equals happiness level = cat + dog = level = level level level zero equals level -infinity equals level level equals -one i times level equals i level plus i equals 2i level equals (((one plus two) times three) divided by pair) ((level plus one) times (level minus one)) equals zero1000000",allowTextPickup:!0,sourceId:"unique-source-id"}),(0,h.jsx)(I,{}),(0,h.jsx)(_.A,{}),(0,h.jsx)(B,{targetLevel:4,variant:"circle",children:"Catch Me"}),(0,h.jsx)(L.A,{}),(0,h.jsx)(Z,{}),(0,h.jsx)(H,{}),(0,h.jsx)(u.A,{}),(0,h.jsx)(oe,{currentLevel:"0"}),(0,h.jsx)(ae.A,{}),(0,h.jsx)(se.A,{cardId:"ace-spades",suit:"spades",value:"A"}),(0,h.jsx)(se.A,{cardId:"ace-hearts",suit:"hearts",value:"A"}),(0,h.jsx)(se.A,{cardId:"ace-diamonds",suit:"diamonds",value:"A"}),(0,h.jsx)(se.A,{cardId:"ace-clubs",suit:"clubs",value:"A"}),(0,h.jsx)(ve,{}),(0,h.jsx)(le.A,{}),(0,h.jsx)(de,{}),(0,h.jsx)(ce,{}),(0,h.jsx)(ue.A,{}),(0,h.jsx)(ye.A,{value:25,id:"25-coin"})]})]})})}},441:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(5043),r=n(5464),o=n(3003),a=n(8680),s=n(9254),l=n(8852),d=n(378),c=n(3888),u=n(5348),p=n(579);const h=r.Ay.div`
  width: 80px;
  height: 80px;
  border: 3px dashed #666;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`,m=r.Ay.div`
  width: 280px;
  height: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #2c3e50, #34495e);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`,x=r.Ay.div`
  width: 240px;
  height: 40px;
  background: #1a1a1a;
  border-radius: 8px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  font-family: 'Digital', monospace;
  color: #00ff00;
  font-size: 24px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #2a2a2a;
  }
`,f=r.Ay.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(135deg, #95a5a6, #bdc3c7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`,g=r.Ay.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=()=>{const e=(0,o.wA)(),t=(0,o.d4)((e=>e.inventory.equippedItem)),n=(0,o.d4)((e=>e.inventory.scale)),r=(0,o.d4)((e=>e.inventory.money)),[v,y]=(0,i.useState)(!1),{unlockAchievement:b}=(0,u.k)(),A=()=>{switch(null===n||void 0===n?void 0:n.type){case"wallet":return(e=>{let t=150;return e.forEach((e=>{if(e.value>=500)t+=1;else switch(e.value){case 25:t+=6;break;case 10:t+=2;break;case 5:t+=5;break;case 1:t+=3;break;default:t+=0}})),t})(r);case"card-box":return(e=>{let t=1;const n={normal:1,"gold-shiny":1e4,diamond:999999999,"dark-holographic":-.1};for(const i in e.collectedCards)t+=n[d.A[i].rarity];return t})(n);case"card":return 10;case"diamond":return 1;case"black-hole":return 1e3;case"encyclopedia":return 50;case"flower":return n.weight;default:return 0}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(m,{onClick:()=>{if(n&&!t){if("card-box"===n.type){const t={...n,collectedCards:n.collectedCards||{}};e((0,a.Ci)(t))}else e((0,a.Ci)(n));e((0,a.jt)())}else if(t&&!n)e((0,a.HN)(t)),e((0,a.lS)());else if(t&&n)if("card"===t.type&&"card-box"===n.type)e((0,a.us)({cardId:t.id})),e((0,a.lS)());else if("card-box"===t.type&&"card"===n.type){const i={...t,collectedCards:{...t.collectedCards,[n.id]:!0}};e((0,a.jt)()),e((0,a.Ci)(i))}else y(!0)},children:[(0,p.jsx)(f,{children:(0,p.jsx)(g,{children:n?(0,p.jsx)(l.A,{item:n}):(0,p.jsx)(h,{children:"Empty"})})}),(0,p.jsxs)(x,{onClick:t=>{t.stopPropagation();const n=A();e((0,c.qX)({real:Math.floor(n),imag:0})),b("SCALE_TRAVEL")},children:[A().toFixed(2),"g"]})]}),(0,p.jsx)(s.A,{show:v,onConfirm:()=>{const i=n;e((0,a.HN)(t)),e((0,a.Ci)(i)),y(!1)},onCancel:()=>y(!1),message:"Swap the equipped item with the item on the scale?"})]})}},7652:(e,t,n)=>{n.d(t,{l:()=>i});const i=(e,t)=>null===((e,t)=>{var n,i,r,o;if((null===(n=e.inventory.equippedItem)||void 0===n?void 0:n.id)===t)return"equipped";if((null===(i=e.inventory.scale)||void 0===i?void 0:i.id)===t)return"scale";const a=e.inventory.bookshelf.findIndex((e=>{var n;return(null===e||void 0===e?void 0:e.id)===t||!("card-box"!==(null===e||void 0===e?void 0:e.type)||null===(n=e.collectedCards)||void 0===n||!n[t])}));return-1!==a?`bookshelf-${a}`:"card-box"===(null===(r=e.inventory.equippedItem)||void 0===r?void 0:r.type)&&null!==(o=e.inventory.equippedItem.collectedCards)&&void 0!==o&&o[t]?"equipped-box":null})(e,t)}}]);
//# sourceMappingURL=7186.87dafa9e.chunk.js.map