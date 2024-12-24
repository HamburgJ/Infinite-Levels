"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[2157],{2422:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(9950),i=n(4752),a=n(300),o=n(8350),s=n(4847),l=n(7937),d=n(4414);const c=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.85));
  padding: 0.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${e=>e.isDisappearing?"disappear 0.5s forwards":"none"};

  @keyframes disappear {
    0% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8) rotate(180deg);
    }
    100% {
      opacity: 0;
      transform: scale(0) rotate(360deg);
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 8px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.08),
      inset 0 1px 1px rgba(255, 255, 255, 0.6);
  }
`,h=i.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,m=i.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,u={11:{nextLocation:"8",message:"Ah, the sparse levels! *juggles some numbers* Did you know that if you look carefully at Level 8, you might find some interesting traveling techniques? *winks*"},8:{nextLocation:"9",message:"Ohoho! Advanced techniques, indeed! But the real magic lies in the secrets... *pulls a rabbit from a hat* Why don't you check Level 9? There might be a mysterious box waiting to be unlocked! *disappears in a puff of smoke, then reappears* Oh, I'm still here!"},9:{nextLocation:null,message:"The grand finale! *throws confetti* You've found all my hiding spots! But remember, in this world of numbers and mysteries, nothing is quite what it seems... *bows theatrically*"}},p=e=>{let{currentLevel:t}=e;const n=(0,a.wA)(),i=(0,a.d4)((e=>e.jester.currentLocation)),[p,x]=r.useState(!1);if((0,r.useEffect)((()=>{i===t&&n((0,s.FU)())}),[n,i,t]),i!==t)return null;return(0,d.jsxs)(c,{isDisappearing:p,children:[(0,d.jsx)(h,{children:"\ud83c\udccf"}),(0,d.jsx)(m,{children:u[i].message}),(0,d.jsx)(l.A,{variant:"outline-primary",onClick:()=>{x(!0),setTimeout((()=>{const e=u[i].nextLocation;n((0,o.J)(e))}),500)},size:"sm",children:"*poof*"})]})}},2157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var r=n(9950),i=n(4752),a=n(5358),o=n(5216),s=n(300),l=n(6760),d=n(4431),c=n(1283),h=n(7853),m=n(9825),u=n(2962),p=n(4414);const x=i.i7`
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
`,g=i.i7`
  0%, 100% { transform: translateY(0px) rotate(3deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
`,f={common_blue:{bg:"#4287f5",border:"#2563eb"},common_green:{bg:"#22c55e",border:"#16a34a"},common_red:{bg:"#ef4444",border:"#dc2626"},common_orange:{bg:"#f97316",border:"#ea580c"},common_teal:{bg:"#06b6d4",border:"#0891b2"},common_pink:{bg:"#ec4899",border:"#db2777"},uncommon:{bg:"#22c55e",border:"#16a34a"},rare:{bg:"#ef4444",border:"#dc2626"},epic:{bg:"#a855f7",border:"#9333ea"},legendary:{bg:"#fbbf24",border:"#f59e0b"}},b=i.Ay.div`
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
`,v=i.Ay.div`
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
`,A=(0,i.Ay)(u.m)`
  animation: ${g} ${e=>2+2*Math.random()}s infinite ease-in-out;
  animation-delay: ${e=>-2*Math.random()}s;
  transform-origin: center;
  scale: 0.7;
  border-radius: 12px;
  opacity: 1;
  pointer-events: none;
  background: ${e=>e.rarity.startsWith("common_")?f[e.rarity].bg:f.common_blue.bg};
  border: 3px solid ${e=>e.rarity.startsWith("common_")?f[e.rarity].border:f.common_blue.border};
`,j=i.Ay.div`
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
`,w=i.Ay.div`
  width: 40px;
  height: 8px;
  background: #444;
  border-radius: 4px;
  margin-bottom: 10px;
`,k=i.Ay.div`
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
`,_=r.memo((e=>{let{value:t,rarity:n,style:r}=e;return(0,p.jsx)(A,{rarity:n,style:r,children:t})})),S=()=>{const e=(0,s.wA)(),[t,n]=(0,r.useState)(null),[i,a]=(0,r.useState)(!1),[o,d]=(0,r.useState)(null),c=(0,s.d4)((e=>e.inventory.walletDenominations)),h=(0,s.d4)((e=>e.inventory.equippedItem)),u="wallet"===(null===h||void 0===h?void 0:h.type),g=c[25]>0,f=[{value:5,variant:"primary",weight:1},{value:15,variant:"success",weight:1},{value:25,variant:"danger",weight:1},{value:42,variant:"warning",weight:.7},{value:88,variant:"info",weight:.7},{value:100,variant:"danger",weight:.5},{value:123,variant:"warning",weight:.3},{value:256,variant:"info",weight:.2},{value:404,variant:"danger",weight:.1},{value:500,variant:"success",weight:.05}],A=e=>{const t=["common_blue","common_green","common_red","common_orange","common_teal","common_pink"];return t[Math.floor(Math.random()*t.length)]},S=(0,r.useMemo)((()=>{const e=[];for(let t=0;t<50;t++){const n=f[Math.floor(Math.random()*f.length)],r=A(n.value),i={position:"absolute",left:85*Math.random()+"%",top:85*Math.random()+"%"};e.push((0,p.jsx)(_,{value:n.value,rarity:r,style:i},t))}return e}),[]);return(0,p.jsxs)(b,{children:[(0,p.jsx)(y,{children:(0,p.jsx)(v,{children:S})}),(0,p.jsxs)(j,{children:[(0,p.jsx)(k,{children:(t||o)&&(0,p.jsx)("div",{style:{animation:i?`${x} 1s ease-out`:"none"},children:(0,p.jsx)(m.A,{value:(null===t||void 0===t?void 0:t.value)||(null===o||void 0===o?void 0:o.value),variant:(null===t||void 0===t?void 0:t.variant)||(null===o||void 0===o?void 0:o.variant),displayText:String((null===t||void 0===t?void 0:t.value)||(null===o||void 0===o?void 0:o.value)),forceAvailable:!0})})}),(0,p.jsx)(w,{}),(0,p.jsx)(M,{onClick:()=>{if(o)return void d(null);e((0,l.Km)({value:25,amount:1})),a(!0);const t=(()=>{const e=Math.random();return e<.4?{value:Math.floor(9*Math.random())+1,variant:"primary"}:e<.7?{value:Math.floor(20*Math.random())+10,variant:"success"}:e<.85?{value:Math.floor(30*Math.random())+30,variant:"warning"}:e<.95?{value:Math.floor(50*Math.random())+80,variant:"danger"}:e<.98?{value:Math.floor(100*Math.random())+200,variant:"info"}:{value:Math.floor(200*Math.random())+300,variant:"danger"}})();n(t),setTimeout((()=>{a(!1),d(t),n(null)}),1e3)},disabled:!u||!g,children:"Insert 25\xa2"})]})]})};var I=n(9796);const T=i.i7`
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`,C=i.i7`
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
`,$=i.i7`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`,L=i.Ay.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,O=(0,i.Ay)(c.A)`
  position: absolute;
  animation: ${e=>"circle"===e.motion?i.AH`${T} 5s linear infinite`:"figureEight"===e.motion?i.AH`${C} 5s ease-in-out infinite`:"none"};
`,E=(0,i.Ay)(c.A)`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: translate(
    ${e=>e.offsetX}px,
    ${e=>e.offsetY}px
  );
  animation: ${i.AH`${$} 1s ease-in-out infinite`};
`,Y=e=>{let{variant:t="circle",targetLevel:n,children:i}=e;const[a,o]=(0,r.useState)({x:0,y:0}),[s,l]=(0,r.useState)({x:0,y:0});return(0,r.useEffect)((()=>{if("avoid"!==t)return;const e=e=>{const t=document.getElementById("chase-container");if(!t)return;const n=t.getBoundingClientRect(),r=e.clientX-n.left-n.width/2,i=e.clientY-n.top-n.height/2;o({x:r,y:i});const a=Math.atan2(i,r),s=Math.min(Math.hypot(r,i),100),d=-Math.cos(a)*s,c=-Math.sin(a)*s;l({x:d,y:c})};return document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)}),[t]),"avoid"===t?(0,p.jsx)(L,{id:"chase-container",children:(0,p.jsx)(E,{targetLevel:n,offsetX:s.x,offsetY:s.y,children:i})}):(0,p.jsx)(L,{id:"chase-container",children:(0,p.jsx)(O,{targetLevel:n,motion:t,children:i})})};var N=n(969),H=n(5855);const z={prefix:{high_annoyance:["ARGH, MY HEAD HURTS!","I'LL SMASH YOU WITH MY BRAIN!","YOUR WORDS MAKE MY HEAD ACHE!","STOP MAKING ME THINK!","MY BRAIN IS BOILING!"],high_scientific:["Let me think...","My brain tells me...","After careful study...","My research shows...","I calculated that..."],high_mockery:["Hah, tiny brain...","Watch this genius...","Your head empty...","So simple minded...","How cute..."],high_ego:["My brain is huge!","Witness my genius!","I know everything!","My mind is superior!","Bow to my intellect!"],neutral:["Listen up...","Think about it...","Here's the thing...","Let me tell you...","Get this..."]},subjects:{brain:["my head","my brain","my mind","my thoughts","my genius","my intellect","my wisdom","my knowledge","my thinking","my understanding"],dimension:["space","time","reality","universe","dimension","existence","cosmos","world","everything","nothing"],knowledge:["truth","secret","wisdom","fact","answer","knowledge","idea","thought","theory","solution"]},verbs:{mystical:["sees through","knows about","understands","reveals","shows"],scientific:["proves","explains","demonstrates","calculates","measures"],aggressive:["crushes","smashes","breaks","destroys","pulverizes"]},objects:{cosmic:["everything","the universe","all existence","reality itself","all dimensions","infinite space","endless time","all possibilities","the cosmos","creation"],scientific:["the problem","the solution","the equation","the theory","the proof","the evidence","the result","the calculation","the experiment","the conclusion"],mystical:["the truth","the mystery","the secret","the answer","the meaning","the purpose","the wisdom","the knowledge","the understanding","the revelation"]}},B={why:{annoyance:15,scientific:5,mockery:-10,ego:-15,topic_depth:20,consistency:-5,defensiveness:25,topic_fixation:-15},how:{annoyance:5,scientific:20,mockery:-5,ego:10,topic_depth:15,consistency:10,creativity:-10,defensiveness:15,topic_fixation:5},what:{annoyance:10,scientific:-5,mockery:15,ego:-5,topic_depth:-10,consistency:0,creativity:15,defensiveness:10,topic_fixation:-5},impossible:{annoyance:20,scientific:-15,mockery:10,ego:-20,topic_depth:-5,consistency:-15,creativity:20,defensiveness:30,topic_fixation:-20},interesting:{annoyance:-15,scientific:10,mockery:-10,ego:5,topic_depth:10,consistency:5,creativity:5,defensiveness:-20,topic_fixation:-10},continue:{annoyance:-10,scientific:5,mockery:-5,ego:10,topic_depth:15,consistency:10,creativity:0,defensiveness:-15,topic_fixation:15}},D=["why","how","what","impossible","continue","interesting"],G=i.Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,P=i.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: ${e=>"ANGRY"===e.mood?"#ffebee":"SCIENTIFIC"===e.mood?"#e3f2fd":"MOCKING"===e.mood?"#fff3e0":"DEFENSIVE"===e.mood?"#e8f5e9":"#f5f5f5"};
  padding: 15px;
  border-radius: 10px;
  transition: background 0.3s ease;
`,R=i.Ay.div`
  font-size: 40px;
  margin-right: 15px;
  transform: ${e=>"ANGRY"===e.mood?"scale(1.2)":"MOCKING"===e.mood?"rotate(-10deg)":"DEFENSIVE"===e.mood?"translateY(-2px)":"none"};
  transition: transform 0.3s ease;
`,F=i.Ay.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-family: monospace;
  font-size: 1.1rem;
  min-height: 80px;
`,U=i.Ay.button`
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
`,W=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,X=i.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`,K=()=>{const[e,t]=(0,r.useState)({annoyance:50,scientific:50,mockery:50,ego:50,topic_depth:50,consistency:50,creativity:50,defensiveness:30,topic_fixation:70}),[n,i]=(0,r.useState)([]),a=r=>{const a=((e,t)=>{const n=B[t],r={...e};return Object.keys(n).forEach((e=>{r[e]=Math.max(0,Math.min(100,r[e]+n[e]))})),r})(e,r);i([...n,e]),t(a)},s=(e=>{let t=z.prefix.neutral;z.prefix.high_defensive||(z.prefix.high_defensive=["DON'T JUDGE ME!","I'M NOT WRONG!","LEAVE ME ALONE!","STOP ATTACKING ME!","YOU DON'T UNDERSTAND!"]),z.prefix.calming_down||(z.prefix.calming_down=["Maybe you're right...","I see your point...","That makes sense...","I understand now...","Fair enough..."]),e.defensiveness>75?t=z.prefix.high_defensive:e.annoyance<30&&e.topic_fixation<40?t=z.prefix.calming_down:e.annoyance>75?t=z.prefix.high_annoyance:e.scientific>75?t=z.prefix.high_scientific:e.mockery>75?t=z.prefix.high_mockery:e.ego>75&&(t=z.prefix.high_ego);let n=z.verbs.mystical;e.scientific>65&&(n=z.verbs.scientific),e.annoyance>75&&(n=z.verbs.aggressive);let r=z.subjects.brain;e.topic_depth>70&&(r=z.subjects.dimension),e.creativity>70&&(r=z.subjects.knowledge);let i=z.objects.scientific;return e.consistency<40&&(i=z.objects.mystical),e.ego>70&&(i=z.objects.cosmic),{prefix:t,verbs:n,subjects:r,objects:i}})(e),l=(e=>{const{prefix:t,verbs:n,subjects:r,objects:i}=e,a=t[Math.floor(Math.random()*t.length)],o=n[Math.floor(Math.random()*n.length)];return`${a} The ${r[Math.floor(Math.random()*r.length)]} ${o} ${i[Math.floor(Math.random()*i.length)]}!`})(s);return(0,p.jsx)(G,{children:(0,p.jsx)(o.A,{children:(0,p.jsxs)(o.A.Body,{children:[(0,p.jsxs)(P,{stateVector:e,children:[(0,p.jsx)(R,{stateVector:e,children:"\ud83e\uddcc"}),(0,p.jsx)(X,{vector:e})]}),(0,p.jsx)(F,{children:l}),(0,p.jsxs)(W,{children:[D.map((t=>(0,p.jsx)(U,{onClick:()=>a(t),disabled:e.consistency<10,children:t},t))),(0,p.jsx)(q,{onClick:()=>{if(0===n.length)return;const e=n[n.length-1];t(e),i(n.slice(0,-1))},disabled:0===n.length,children:"Undo"})]})]})})})};var V=n(2422),J=n(8464),Q=n(2515),Z=n(7911),ee=n(859),te=n(1078),ne=n(4626),re=n(8348),ie=(n(7411),n(9760));const ae=i.Ay.div`
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
`,oe=i.Ay.div`
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
`,se=i.Ay.div`
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${e=>e.canInteract?"pointer":"default"};
  transition: all 0.2s ease;
  padding: 6px;

  &:hover {
    transform: ${e=>e.canInteract?"translateY(-2px)":"none"};
    box-shadow: ${e=>e.canInteract?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
  }
`,le=i.Ay.div`
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
`,de=()=>{const e=(0,s.wA)(),t=(0,s.d4)((e=>e.inventory.equippedItem)),n=(0,s.d4)((e=>e.inventory.bookshelf)),[i,a]=(0,r.useState)(!1),[o,l]=(0,r.useState)(null);return(0,p.jsx)(ae,{children:[0,1,2].map((r=>(0,p.jsx)(oe,{children:[0,1,2].map((i=>{const a=3*r+i;return(0,p.jsx)(se,{onClick:r=>((r,i)=>{"contextmenu"===(null===i||void 0===i?void 0:i.type)&&i.preventDefault();const a=n[r];t&&!a&&(e((0,re.mO)({item:t,index:r})),e((0,re.lS)()))})(a,r),canInteract:!n[a],children:n[a]?(0,p.jsx)(ie.A,{item:n[a],isStorage:!0,forceAvailable:!0}):(0,p.jsx)(le,{children:"Empty"})},i)}))},r)))})};var ce=n(2643),he=n(8612);const me=(0,i.Ay)(a.A)`
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
`,ue=(0,i.Ay)(o.A)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`,pe=()=>{(0,s.wA)();return(0,p.jsx)(me,{children:(0,p.jsxs)(ue,{children:[(0,p.jsx)(c.A,{targetLevel:0,variant:"primary",children:"Start Game"}),(0,p.jsxs)(o.A.Body,{children:[(0,p.jsx)(o.A.Title,{as:"h2",className:"mb-4",children:"This is the demo level."}),(0,p.jsx)(o.A.Text,{children:"If you made it here, you've seriously broken the game, congratulations!"}),(0,p.jsx)(o.A.Text,{children:"Here stands a neat puzzle game. Press keys to reach next stages."}),(0,p.jsx)(o.A.Text,{children:"Many stages seem easy to beat. Some parts matter more than others."}),(0,p.jsxs)(o.A.Text,{children:["The game teaches each method as shown to you, no need to make random attempts or locate secret clues.",(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:"Watch each stage well"}),(0,p.jsx)("li",{children:"Make use of your tools at hand"}),(0,p.jsx)("li",{children:"Ponder beyond the box, then back"})]})]}),(0,p.jsx)(d.A,{text:"0123456789 999+999i 3i (2+1)^2 level 1 -level 1 level = level*level millinillion the speed of light sound infinity googol centillion Infinity Infinity+i",allowTextPickup:!0,sourceId:"unique-source-id"}),(0,p.jsx)(ee.A,{}),(0,p.jsx)(te.A,{}),(0,p.jsx)(ne.A,{}),(0,p.jsx)(de,{}),(0,p.jsx)(S,{}),(0,p.jsx)(I.A,{}),(0,p.jsx)(Y,{targetLevel:4,variant:"circle",children:"Catch Me"}),(0,p.jsx)(N.A,{}),(0,p.jsx)(N.A,{maximumCount:20,requiredCount:10}),(0,p.jsx)(K,{}),(0,p.jsx)(H.A,{}),(0,p.jsx)(h.A,{}),(0,p.jsx)(V.A,{currentLevel:"0"}),(0,p.jsx)(J.A,{}),(0,p.jsx)(Q.A,{cardId:"ace-spades",suit:"spades",value:"A"}),(0,p.jsx)(Q.A,{cardId:"ace-hearts",suit:"hearts",value:"A"}),(0,p.jsx)(Q.A,{cardId:"ace-diamonds",suit:"diamonds",value:"A"}),(0,p.jsx)(Q.A,{cardId:"ace-clubs",suit:"clubs",value:"A"}),(0,p.jsx)(Z.A,{}),(0,p.jsx)(ce.A,{value:25,id:"25-coin"}),(0,p.jsx)(he.A,{})]})]})})}},969:(e,t,n)=>{n.d(t,{A:()=>m});n(9950);var r=n(4752),i=n(300),a=n(5216),o=(n(7216),n(1283),n(3635)),s=n(4414);const l=r.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,r.Ay)(a.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,c=r.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=r.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,m=e=>{let{requiredCount:t=null,maximumCount:n=null,children:r,overLimitMessage:m="Too many achievements! You must prestige to access this content."}=e;const u=(0,i.d4)((e=>e.achievements.achievements)),p=Object.keys(u).length,x=null!==n,g=x&&p>n,f=!x&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||p>=t),b=x?!g:f;return(0,s.jsx)(l,{children:(0,s.jsx)(d,{isComplete:b,isOverLimit:g,isMaxShrine:x,children:(0,s.jsxs)(a.A.Body,{children:[(0,s.jsx)(c,{isComplete:b,isOverLimit:g,isMaxShrine:x,children:x?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,s.jsx)(a.A.Title,{children:x?"Prestige Shrine":"Achievement Shrine"}),(0,s.jsx)(h,{isOverLimit:g,children:x?(0,s.jsxs)(s.Fragment,{children:["Current: ",p," / Maximum: ",n]}):(0,s.jsxs)(s.Fragment,{children:["Progress: ",p," / ",t]})}),x?g?(0,s.jsx)(a.A.Text,{className:"text-danger",children:m}):(0,s.jsx)(a.A.Text,{children:r}):f?(0,s.jsx)(a.A.Text,{children:r}):(0,s.jsxs)(a.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},7911:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(9950),i=n(4752),a=n(300),o=n(404),s=n(4601),l=n(7937),d=n(4268),c=n(4090),h=n(8348),m=n(4414);const u=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,p=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,x=i.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,g=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,f=(e,t)=>{if(!t)return null;const n=c.A[t].stages,r=Object.keys(n).map(Number).sort(((e,t)=>e-t));for(let i=r.length-1;i>=0;i--)if(e>=r[i])return n[r[i]];return n[0]},b=(e,t)=>{if(!t)return"An empty pot... ready for something special to grow.";const n=c.A[t].messages,r=Object.keys(n).map(Number).sort(((e,t)=>e-t));for(let i=r.length-1;i>=0;i--)if(e>=r[i])return n[r[i]];return n[0]},y=()=>{const e=(0,a.wA)(),{hasPlant:t,growthLevel:n,flowerType:i}=(0,a.d4)((e=>e.flower)),y=(0,a.d4)((e=>e.inventory.equippedItem)),[v,A]=(0,r.useState)(!1),[j,w]=(0,r.useState)(!1),[k,M]=(0,r.useState)(!1);return(0,m.jsxs)(u,{children:[(0,m.jsx)(p,{clickable:t,onClick:()=>{t&&w(!0)},children:t?f(n,i):null}),t&&(0,m.jsxs)(g,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(s.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(c.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(x,{children:t?b(n,i):"An empty pot... ready for something special to grow."}),(0,m.jsx)(l.A,{variant:t?"outline-danger":"outline-success",onClick:()=>{t?A(!0):(null===y||void 0===y||y.type,e((0,o.tz)()))},size:"sm",children:t?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(d.A,{show:v,onHide:()=>A(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(l.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,m.jsx)(l.A,{variant:"danger",onClick:()=>{e((0,o._$)()),e((0,o.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(d.A,{show:j,onHide:()=>w(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(l.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(l.A,{variant:"primary",onClick:()=>{const t=Object.keys(c.A[i].stages).map(Number).sort(((e,t)=>e-t));let r=0;for(let e of t)n>=e&&(r=e);const a={type:"flower",flowerType:i,growthLevel:n,stage:f(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:c.A[i].weights[r]};e((0,h.Ci)(a)),e((0,o._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}}}]);