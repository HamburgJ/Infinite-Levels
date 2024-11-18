"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5325],{4697:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(5043),s=t(5464),i=t(3003),a=t(8565),o=t(3888),l=t(4282),c=t(579);const d=s.Ay.div`
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
`,h=s.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,m=s.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,u={11:{nextLocation:"8",message:"Ah, the sparse levels! *juggles some numbers* Did you know that if you look carefully at Level 8, you might find some interesting traveling techniques? *winks*"},8:{nextLocation:"9",message:"Ohoho! Advanced techniques, indeed! But the real magic lies in the secrets... *pulls a rabbit from a hat* Why don't you check Level 9? There might be a mysterious box waiting to be unlocked! *disappears in a puff of smoke, then reappears* Oh, I'm still here!"},9:{nextLocation:null,message:"The grand finale! *throws confetti* You've found all my hiding spots! But remember, in this world of numbers and mysteries, nothing is quite what it seems... *bows theatrically*"}},x=e=>{let{currentLevel:r}=e;const t=(0,i.wA)(),s=(0,i.d4)((e=>e.jester.currentLocation)),[x,g]=n.useState(!1);if((0,n.useEffect)((()=>{s===r&&t((0,o.FU)())}),[t,s,r]),s!==r)return null;return(0,c.jsxs)(d,{isDisappearing:x,children:[(0,c.jsx)(h,{children:"\ud83c\udccf"}),(0,c.jsx)(m,{children:u[s].message}),(0,c.jsx)(l.A,{variant:"outline-primary",onClick:()=>{g(!0),setTimeout((()=>{const e=u[s].nextLocation;t((0,a.J)(e))}),500)},size:"sm",children:"*poof*"})]})}},5325:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});t(5043),t(2293);var n=t(8628),s=t(6218),i=(t(6050),t(5348),t(8819)),a=(t(1908),t(4697)),o=t(579);const l=()=>(0,o.jsx)(i.Gy,{children:(0,o.jsx)(i.ee,{children:(0,o.jsxs)(n.A.Body,{children:[(0,o.jsx)(n.A.Title,{children:"The levels become more sparse"}),(0,o.jsx)(n.A.Text,{children:"But it's only to avoid having too much fluff! Why don't you see what else you can do with the levels you've already discovered?"}),(0,o.jsx)(a.A,{currentLevel:"11"}),(0,o.jsx)(i.W0,{children:(0,o.jsx)(s.A,{targetLevel:10,children:"Level 10"})})]})})})},1908:(e,r,t)=>{t.d(r,{A:()=>m});t(5043);var n=t(5464),s=t(3003),i=t(8628),a=(t(6481),t(6218),t(2520)),o=t(579);const l=n.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,n.Ay)(i.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=n.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=n.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,m=e=>{let{requiredCount:r=null,maximumCount:t=null,children:n,overLimitMessage:m="Too many achievements! You must prestige to access this content."}=e;const u=(0,s.d4)((e=>e.achievements.achievements)),x=Object.keys(u).length,g=null!==t,p=g&&x>t,f=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=r),b=g?!p:f;return(0,o.jsx)(l,{children:(0,o.jsx)(c,{isComplete:b,isOverLimit:p,isMaxShrine:g,children:(0,o.jsxs)(i.A.Body,{children:[(0,o.jsx)(d,{isComplete:b,isOverLimit:p,isMaxShrine:g,children:g?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(i.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(h,{isOverLimit:p,children:g?(0,o.jsxs)(o.Fragment,{children:["Current: ",x," / Maximum: ",t]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",x," / ",r]})}),g?p?(0,o.jsx)(i.A.Text,{className:"text-danger",children:m}):(0,o.jsx)(i.A.Text,{children:n}):f?(0,o.jsx)(i.A.Text,{children:n}):(0,o.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(5043),s=t(5464),i=t(3003),a=t(4103),o=t(3173),l=t(4282),c=t(5284),d=t(5985),h=t(1676),m=t(579);const u=s.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,x=s.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,g=s.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,p=s.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,f=(e,r)=>{if(!r)return null;const t=d.A[r].stages,n=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let s=n.length-1;s>=0;s--)if(e>=n[s])return t[n[s]];return t[0]},b=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const t=d.A[r].messages,n=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let s=n.length-1;s>=0;s--)if(e>=n[s])return t[n[s]];return t[0]},y=()=>{const e=(0,i.wA)(),{hasPlant:r,growthLevel:t,flowerType:s}=(0,i.d4)((e=>e.flower)),y=(0,i.d4)((e=>e.inventory.equippedItem)),[v,A]=(0,n.useState)(!1),[j,w]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1);return(0,m.jsxs)(u,{children:[(0,m.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?f(t,s):null}),r&&(0,m.jsxs)(p,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(o.A,{now:(()=>{const e=(()=>{if(!s)return 0;const e=Object.keys(d.A[s].stages).map(Number);return Math.max(...e)})();return Math.min(t/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(g,{children:r?b(t,s):"An empty pot... ready for something special to grow."}),(0,m.jsx)(l.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?A(!0):(null===y||void 0===y||y.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(c.A,{show:v,onHide:()=>A(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(l.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,m.jsx)(l.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(c.A,{show:j,onHide:()=>w(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(l.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(l.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[s].stages).map(Number).sort(((e,r)=>e-r));let n=0;for(let e of r)t>=e&&(n=e);const i={type:"flower",flowerType:s,growthLevel:t,stage:f(t,s),name:`${s.charAt(0).toUpperCase()+s.slice(1)} (Growth: ${t})`,weight:d.A[s].weights[n]};e((0,h.Ci)(i)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}}}]);
//# sourceMappingURL=5325.2972f8a3.chunk.js.map