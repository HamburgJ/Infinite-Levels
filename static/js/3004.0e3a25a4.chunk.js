"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3004],{3004:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var r=n(5043),i=n(5464),a=n(3519),o=n(8628),s=n(3003),d=n(2293),c=n(9642),l=n(6218),h=n(363),p=n(2593),u=n(579);const x=i.i7`
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
`,m=i.i7`
  0%, 100% { transform: translateY(0px) rotate(3deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
`,g={common_blue:{bg:"#4287f5",border:"#2563eb"},common_green:{bg:"#22c55e",border:"#16a34a"},common_red:{bg:"#ef4444",border:"#dc2626"},common_orange:{bg:"#f97316",border:"#ea580c"},common_teal:{bg:"#06b6d4",border:"#0891b2"},common_pink:{bg:"#ec4899",border:"#db2777"},uncommon:{bg:"#22c55e",border:"#16a34a"},rare:{bg:"#ef4444",border:"#dc2626"},epic:{bg:"#a855f7",border:"#9333ea"},legendary:{bg:"#fbbf24",border:"#f59e0b"}},f=i.Ay.div`
  width: 300px;
  height: 450px;
  position: relative;
  margin: 0 auto;
`,y=i.Ay.div`
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
`,b=i.Ay.div`
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
`,v=(0,i.Ay)(p.t)`
  animation: ${m} ${e=>2+2*Math.random()}s infinite ease-in-out;
  animation-delay: ${e=>-2*Math.random()}s;
  transform-origin: center;
  scale: 0.7;
  border-radius: 12px;
  opacity: 1;
  pointer-events: none;
  background: ${e=>e.rarity.startsWith("common_")?g[e.rarity].bg:g.common_blue.bg};
  border: 3px solid ${e=>e.rarity.startsWith("common_")?g[e.rarity].border:g.common_blue.border};
`,w=i.Ay.div`
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
`,j=i.Ay.div`
  width: 40px;
  height: 8px;
  background: #444;
  border-radius: 4px;
  margin-bottom: 10px;
`,A=i.Ay.div`
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
`,k=(0,i.Ay)(p.t)`
  animation: ${e=>e.falling?x:"none"} 1s ease-out;
  position: relative;
  scale: 0.8;
  z-index: 10;
  cursor: ${e=>e.isCollectable?"pointer":"default"};
  pointer-events: ${e=>e.isCollectable?"auto":"none"};
`,M=i.Ay.button`
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
`,_=r.memo((e=>{let{value:t,rarity:n,style:r}=e;return(0,u.jsx)(v,{rarity:n,style:r,children:t})})),I=()=>{const e=(0,s.wA)(),[t,n]=(0,r.useState)(null),[i,a]=(0,r.useState)(!1),[o,c]=(0,r.useState)(null),l=(0,s.d4)((e=>e.inventory.walletDenominations)),h=(0,s.d4)((e=>e.inventory.equippedItem)),p="wallet"===(null===h||void 0===h?void 0:h.type),x=l[25]>0,m=[{value:5,variant:"primary",weight:1},{value:15,variant:"success",weight:1},{value:25,variant:"danger",weight:1},{value:42,variant:"warning",weight:.7},{value:88,variant:"info",weight:.7},{value:100,variant:"danger",weight:.5},{value:123,variant:"warning",weight:.3},{value:256,variant:"info",weight:.2},{value:404,variant:"danger",weight:.1},{value:500,variant:"success",weight:.05}],g=e=>{const t=["common_blue","common_green","common_red","common_orange","common_teal","common_pink"];return t[Math.floor(Math.random()*t.length)]},v=(0,r.useMemo)((()=>{const e=[];for(let t=0;t<50;t++){const n=m[Math.floor(Math.random()*m.length)],r=g(n.value),i={position:"absolute",left:85*Math.random()+"%",top:85*Math.random()+"%"};e.push((0,u.jsx)(_,{value:n.value,rarity:r,style:i},t))}return e}),[]);return(0,u.jsxs)(f,{children:[(0,u.jsx)(y,{children:(0,u.jsx)(b,{children:v})}),(0,u.jsxs)(w,{children:[(0,u.jsx)(A,{children:(t||o)&&(0,u.jsx)(k,{falling:i,variant:(null===t||void 0===t?void 0:t.variant)||(null===o||void 0===o?void 0:o.variant),isCollectable:!!o,children:(null===t||void 0===t?void 0:t.value)||(null===o||void 0===o?void 0:o.value)})}),(0,u.jsx)(j,{}),(0,u.jsx)(M,{onClick:()=>{if(o)return e((0,d.Ci)({type:"levelButton",...o})),void c(null);e((0,d.Km)({value:25,amount:1})),a(!0);const t=(()=>{const e=Math.random();return e<.4?{value:Math.floor(9*Math.random())+1,variant:"primary"}:e<.7?{value:Math.floor(20*Math.random())+10,variant:"success"}:e<.85?{value:Math.floor(30*Math.random())+30,variant:"warning"}:e<.95?{value:Math.floor(50*Math.random())+80,variant:"danger"}:e<.98?{value:Math.floor(100*Math.random())+200,variant:"info"}:{value:Math.floor(200*Math.random())+300,variant:"danger"}})();n(t),setTimeout((()=>{a(!1),c(t),n(null)}),1e3)},disabled:(!p||!x)&&!o,children:o?"Collect Button":"Insert 25\xa2"})]})]})};var E=n(8220);const C=i.i7`
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`,S=i.i7`
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
`,T=i.i7`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`,N=i.Ay.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,L=(0,i.Ay)(l.A)`
  position: absolute;
  animation: ${e=>"circle"===e.motion?i.AH`${C} 5s linear infinite`:"figureEight"===e.motion?i.AH`${S} 5s ease-in-out infinite`:"none"};
`,Y=(0,i.Ay)(l.A)`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: translate(
    ${e=>e.offsetX}px,
    ${e=>e.offsetY}px
  );
  animation: ${i.AH`${T} 1s ease-in-out infinite`};
`,$=e=>{let{variant:t="circle",targetLevel:n,children:i}=e;const[a,o]=(0,r.useState)({x:0,y:0}),[s,d]=(0,r.useState)({x:0,y:0});return(0,r.useEffect)((()=>{if("avoid"!==t)return;const e=e=>{const t=document.getElementById("chase-container");if(!t)return;const n=t.getBoundingClientRect(),r=e.clientX-n.left-n.width/2,i=e.clientY-n.top-n.height/2;o({x:r,y:i});const a=Math.atan2(i,r),s=Math.min(Math.hypot(r,i),100),c=-Math.cos(a)*s,l=-Math.sin(a)*s;d({x:c,y:l})};return document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)}),[t]),"avoid"===t?(0,u.jsx)(N,{id:"chase-container",children:(0,u.jsx)(Y,{targetLevel:n,offsetX:s.x,offsetY:s.y,children:i})}):(0,u.jsx)(N,{id:"chase-container",children:(0,u.jsx)(L,{targetLevel:n,motion:t,children:i})})};var O=n(1908),H=n(5280);const B={prefix:{high_annoyance:["ARGH, MY HEAD HURTS!","I'LL SMASH YOU WITH MY BRAIN!","YOUR WORDS MAKE MY HEAD ACHE!","STOP MAKING ME THINK!","MY BRAIN IS BOILING!"],high_scientific:["Let me think...","My brain tells me...","After careful study...","My research shows...","I calculated that..."],high_mockery:["Hah, tiny brain...","Watch this genius...","Your head empty...","So simple minded...","How cute..."],high_ego:["My brain is huge!","Witness my genius!","I know everything!","My mind is superior!","Bow to my intellect!"],neutral:["Listen up...","Think about it...","Here's the thing...","Let me tell you...","Get this..."]},subjects:{brain:["my head","my brain","my mind","my thoughts","my genius","my intellect","my wisdom","my knowledge","my thinking","my understanding"],dimension:["space","time","reality","universe","dimension","existence","cosmos","world","everything","nothing"],knowledge:["truth","secret","wisdom","fact","answer","knowledge","idea","thought","theory","solution"]},verbs:{mystical:["sees through","knows about","understands","reveals","shows"],scientific:["proves","explains","demonstrates","calculates","measures"],aggressive:["crushes","smashes","breaks","destroys","pulverizes"]},objects:{cosmic:["everything","the universe","all existence","reality itself","all dimensions","infinite space","endless time","all possibilities","the cosmos","creation"],scientific:["the problem","the solution","the equation","the theory","the proof","the evidence","the result","the calculation","the experiment","the conclusion"],mystical:["the truth","the mystery","the secret","the answer","the meaning","the purpose","the wisdom","the knowledge","the understanding","the revelation"]}},D={why:{annoyance:15,scientific:5,mockery:-10,ego:-15,topic_depth:20,consistency:-5,defensiveness:25,topic_fixation:-15},how:{annoyance:5,scientific:20,mockery:-5,ego:10,topic_depth:15,consistency:10,creativity:-10,defensiveness:15,topic_fixation:5},what:{annoyance:10,scientific:-5,mockery:15,ego:-5,topic_depth:-10,consistency:0,creativity:15,defensiveness:10,topic_fixation:-5},impossible:{annoyance:20,scientific:-15,mockery:10,ego:-20,topic_depth:-5,consistency:-15,creativity:20,defensiveness:30,topic_fixation:-20},interesting:{annoyance:-15,scientific:10,mockery:-10,ego:5,topic_depth:10,consistency:5,creativity:5,defensiveness:-20,topic_fixation:-10},continue:{annoyance:-10,scientific:5,mockery:-5,ego:10,topic_depth:15,consistency:10,creativity:0,defensiveness:-15,topic_fixation:15}},z=["why","how","what","impossible","continue","interesting"],G=i.Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,R=i.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: ${e=>"ANGRY"===e.mood?"#ffebee":"SCIENTIFIC"===e.mood?"#e3f2fd":"MOCKING"===e.mood?"#fff3e0":"DEFENSIVE"===e.mood?"#e8f5e9":"#f5f5f5"};
  padding: 15px;
  border-radius: 10px;
  transition: background 0.3s ease;
`,X=i.Ay.div`
  font-size: 40px;
  margin-right: 15px;
  transform: ${e=>"ANGRY"===e.mood?"scale(1.2)":"MOCKING"===e.mood?"rotate(-10deg)":"DEFENSIVE"===e.mood?"translateY(-2px)":"none"};
  transition: transform 0.3s ease;
`,W=i.Ay.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-family: monospace;
  font-size: 1.1rem;
  min-height: 80px;
`,q=i.Ay.button`
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
`,F=i.Ay.button`
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
`,K=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,U=i.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`,P=()=>{const[e,t]=(0,r.useState)({annoyance:50,scientific:50,mockery:50,ego:50,topic_depth:50,consistency:50,creativity:50,defensiveness:30,topic_fixation:70}),[n,i]=(0,r.useState)([]),a=r=>{const a=((e,t)=>{const n=D[t],r={...e};return Object.keys(n).forEach((e=>{r[e]=Math.max(0,Math.min(100,r[e]+n[e]))})),r})(e,r);i([...n,e]),t(a)},s=(e=>{let t=B.prefix.neutral;B.prefix.high_defensive||(B.prefix.high_defensive=["DON'T JUDGE ME!","I'M NOT WRONG!","LEAVE ME ALONE!","STOP ATTACKING ME!","YOU DON'T UNDERSTAND!"]),B.prefix.calming_down||(B.prefix.calming_down=["Maybe you're right...","I see your point...","That makes sense...","I understand now...","Fair enough..."]),e.defensiveness>75?t=B.prefix.high_defensive:e.annoyance<30&&e.topic_fixation<40?t=B.prefix.calming_down:e.annoyance>75?t=B.prefix.high_annoyance:e.scientific>75?t=B.prefix.high_scientific:e.mockery>75?t=B.prefix.high_mockery:e.ego>75&&(t=B.prefix.high_ego);let n=B.verbs.mystical;e.scientific>65&&(n=B.verbs.scientific),e.annoyance>75&&(n=B.verbs.aggressive);let r=B.subjects.brain;e.topic_depth>70&&(r=B.subjects.dimension),e.creativity>70&&(r=B.subjects.knowledge);let i=B.objects.scientific;return e.consistency<40&&(i=B.objects.mystical),e.ego>70&&(i=B.objects.cosmic),{prefix:t,verbs:n,subjects:r,objects:i}})(e),d=(e=>{const{prefix:t,verbs:n,subjects:r,objects:i}=e,a=t[Math.floor(Math.random()*t.length)],o=n[Math.floor(Math.random()*n.length)];return`${a} The ${r[Math.floor(Math.random()*r.length)]} ${o} ${i[Math.floor(Math.random()*i.length)]}!`})(s);return(0,u.jsx)(G,{children:(0,u.jsx)(o.A,{children:(0,u.jsxs)(o.A.Body,{children:[(0,u.jsxs)(R,{stateVector:e,children:[(0,u.jsx)(X,{stateVector:e,children:"\ud83e\uddcc"}),(0,u.jsx)(U,{vector:e})]}),(0,u.jsx)(W,{children:d}),(0,u.jsxs)(K,{children:[z.map((t=>(0,u.jsx)(q,{onClick:()=>a(t),disabled:e.consistency<10,children:t},t))),(0,u.jsx)(F,{onClick:()=>{if(0===n.length)return;const e=n[n.length-1];t(e),i(n.slice(0,-1))},disabled:0===n.length,children:"Undo"})]})]})})})};var V=n(8565),J=n(4282);const Q=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Z=i.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,ee=i.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,te={0:{nextLocation:"1",message:"Welcome! Let me show you around this peculiar place..."}},ne=e=>{let{currentLevel:t}=e;const n=(0,s.wA)(),r=(0,s.d4)((e=>e.jester.currentLocation));if(r!==t)return null;return(0,u.jsxs)(Q,{children:[(0,u.jsx)(Z,{children:"\ud83c\udccf"}),(0,u.jsx)(ee,{children:te[r].message}),(0,u.jsx)(J.A,{variant:"outline-primary",onClick:()=>{const e=te[r].nextLocation;n((0,V.J)(e))},size:"sm",children:"*poof*"})]})};var re=n(7161),ie=n(7049),ae=n(6050),oe=n(7598),se=n(2739),de=n(441),ce=n(1676),le=(n(9254),n(9171));const he=i.Ay.div`
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
`,pe=i.Ay.div`
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
`,ue=i.Ay.div`
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
`,xe=i.Ay.div`
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
`,me=()=>{const e=(0,s.wA)(),t=(0,s.d4)((e=>e.inventory.equippedItem)),n=(0,s.d4)((e=>e.inventory.bookshelf)),[i,a]=(0,r.useState)(!1),[o,d]=(0,r.useState)(null);return(0,u.jsx)(he,{children:[0,1,2].map((r=>(0,u.jsx)(pe,{children:[0,1,2].map((i=>{const a=3*r+i;return(0,u.jsx)(ue,{onClick:r=>((r,i)=>{"contextmenu"===(null===i||void 0===i?void 0:i.type)&&i.preventDefault();const a=n[r];t&&!a&&(e((0,ce.mO)({item:t,index:r})),e((0,ce.lS)())),a&&(t?"currency"===t.type&&"wallet"===a.type?(e((0,ce.kB)({value:t.value})),e((0,ce.cp)({index:r}))):"card-box"===t.type&&"card"===a.type?(e((0,ce.us)({cardId:t.id})),e((0,ce.cp)({index:r}))):"wallet"===t.type&&"currency"===a.type?(e((0,ce.kB)({value:a.value})),e((0,ce.cp)({index:r}))):"card"===t.type&&"card-box"===a.type&&(e((0,ce.us)({cardId:t.id})),e((0,ce.cp)({index:r}))):(e((0,ce.Ci)(a)),e((0,ce.cp)({index:r}))))})(a,r),children:n[a]?(0,u.jsx)(le.A,{item:n[a],isStorage:!0,forceAvailable:!0}):(0,u.jsx)(xe,{children:"Empty"})},i)}))},r)))})};var ge=n(7088),fe=n(2993);const ye=(0,i.Ay)(a.A)`
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
`,be=(0,i.Ay)(o.A)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`,ve=()=>{(0,s.wA)();return(0,u.jsx)(ye,{children:(0,u.jsxs)(be,{children:[(0,u.jsx)(l.A,{targetLevel:0,variant:"primary",children:"Start Game"}),(0,u.jsxs)(o.A.Body,{children:[(0,u.jsx)(o.A.Title,{as:"h2",className:"mb-4",children:"This is the demo level."}),(0,u.jsx)(o.A.Text,{children:"If you made it here, you've seriously broken the game, congratulations!"}),(0,u.jsx)(o.A.Text,{children:"Here stands a neat puzzle game. Press keys to reach next stages."}),(0,u.jsx)(o.A.Text,{children:"Many stages seem easy to beat. Some parts matter more than others."}),(0,u.jsxs)(o.A.Text,{children:["The game teaches each method as shown to you, no need to make random attempts or locate secret clues.",(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"Watch each stage well"}),(0,u.jsx)("li",{children:"Make use of your tools at hand"}),(0,u.jsx)("li",{children:"Ponder beyond the box, then back"})]})]}),(0,u.jsx)(c.A,{text:"0123456789",allowTextPickup:!0,sourceId:"unique-source-id"}),(0,u.jsx)(oe.A,{}),(0,u.jsx)(se.A,{}),(0,u.jsx)(de.A,{}),(0,u.jsx)(me,{}),(0,u.jsx)(I,{}),(0,u.jsx)(E.A,{}),(0,u.jsx)($,{targetLevel:4,variant:"circle",children:"Catch Me"}),(0,u.jsx)(O.A,{}),(0,u.jsx)(O.A,{maximumCount:20,requiredCount:10}),(0,u.jsx)(P,{}),(0,u.jsx)(H.A,{}),(0,u.jsx)(h.A,{}),(0,u.jsx)(ne,{currentLevel:"0"}),(0,u.jsx)(re.A,{}),(0,u.jsx)(ie.A,{cardId:"ace-spades",suit:"spades",value:"A"}),(0,u.jsx)(ie.A,{cardId:"ace-hearts",suit:"hearts",value:"A"}),(0,u.jsx)(ie.A,{cardId:"ace-diamonds",suit:"diamonds",value:"A"}),(0,u.jsx)(ie.A,{cardId:"ace-clubs",suit:"clubs",value:"A"}),(0,u.jsx)(ae.A,{}),(0,u.jsx)(ge.A,{value:25,id:"25-coin"}),(0,u.jsx)(fe.A,{})]})]})})}},441:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(5043),i=n(5464),a=n(3003),o=n(1676),s=n(9254),d=n(9171),c=n(378),l=n(3888),h=n(5348),p=n(6218),u=n(579);const x=i.Ay.div`
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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,m=i.Ay.div`
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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,g=i.Ay.div`
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
`,f=i.Ay.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=()=>{const e=(0,a.wA)(),t=(0,a.d4)((e=>e.inventory.equippedItem)),n=(0,a.d4)((e=>e.inventory.scale)),i=(0,a.d4)((e=>e.inventory.walletDenominations)),y=(0,a.d4)((e=>e.inventory.collectedCards)),[b,v]=(0,r.useState)(!1),{unlockAchievement:w}=(0,h.k)(),j={key:50,levelButton:42,book:300,wallet:150,encyclopedia:500,"card-box":200,card:{normal:10,"gold-shiny":50,diamond:100,"dark-holographic":5},currency:{1:2.5,5:5,10:2.268,25:5.67,500:1,1e3:1,2e3:1,5e3:1,1e4:1},text:e=>Math.max(1,.5*e),diamond:3.52,"black-hole":Number.MAX_SAFE_INTEGER},A=()=>{if(!n)return 0;switch(n.type){case"wallet":return(e=>{let t=j.wallet;return Object.entries(e).forEach((e=>{let[n,r]=e;r>0&&(t+=j.currency[parseInt(n)]*r)})),t})(i);case"card-box":return(e=>{let t=j["card-box"];return Object.entries(e).forEach((e=>{let[n,r]=e;if(r>0){const e=c.A[n],i=j.card[e.rarity||"normal"];t+=i*r}})),t})(y);case"card":return j.card[n.rarity||"normal"];case"text":return j.text(n.text.length);case"currency":return j.currency[n.value]||0;case"black-hole":return j["black-hole"];default:return j[n.type]||0}},k=r=>{if(r.preventDefault(),t&&!n)return e((0,o.HN)({item:t})),void e((0,o.lS)());n&&(t?"currency"===t.type&&"wallet"===n.type?(e((0,o.kB)({value:t.value})),e((0,o.jt)())):"card-box"===t.type&&"card"===n.type?(e((0,o.us)({cardId:t.id})),e((0,o.jt)())):"wallet"===t.type&&"currency"===n.type?(e((0,o.kB)({value:n.value})),e((0,o.jt)())):"card"===t.type&&"card-box"===n.type&&(e((0,o.us)({cardId:t.id})),e((0,o.jt)())):(e((0,o.Ci)(n)),e((0,o.jt)())))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(m,{children:[(0,u.jsx)(g,{onClick:e=>k(e),onContextMenu:e=>k(e),children:(0,u.jsx)(f,{children:n?(0,u.jsx)(d.A,{item:n,isStorage:!0,isInventory:!1,forceAvailable:!0}):(0,u.jsx)(x,{children:"Empty"})})}),(0,u.jsxs)(p.A,{targetLevel:{real:Math.floor(A()),imag:0},onClick:t=>{t.stopPropagation();const n=A();e((0,l.qX)({real:Math.floor(n),imag:0})),w("SCALE_TRAVEL")},isDigitalScreen:!0,children:[A().toFixed(2),"g"]})]}),(0,u.jsx)(s.A,{show:b,onConfirm:()=>{const r=n;e((0,o.HN)(t)),e((0,o.Ci)(r)),v(!1)},onCancel:()=>v(!1),message:"Swap the equipped item with the item on the scale?"})]})}}}]);
//# sourceMappingURL=3004.0e3a25a4.chunk.js.map