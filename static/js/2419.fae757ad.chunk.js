"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[2419],{2419:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});t(9950),t(6760);var n=t(5216),i=(t(1283),t(7911),t(4085),t(448)),s=t(969),l=t(2515),o=t(7853),a=t(4431),c=t(4414);const d=()=>(0,c.jsx)(i.Gy,{children:(0,c.jsx)(i.ee,{children:(0,c.jsxs)(n.A.Body,{children:[(0,c.jsx)(n.A.Title,{children:(0,c.jsx)(a.A,{text:"A picture's worth a thousand words",size:"medium"})}),(0,c.jsx)(n.A.Text,{children:(0,c.jsx)(a.A,{text:"And this level is worth an achievement! Which makes it very grand that you made it here!",size:"small"})}),(0,c.jsx)(i.W0,{children:(0,c.jsx)(o.A,{})}),(0,c.jsx)(s.A,{requiredCount:30,children:(0,c.jsx)(i.W0,{children:(0,c.jsx)(l.A,{cardId:"ace-clubs",value:"A",rarity:"normal",suit:"clubs"})})})]})})})},969:(e,r,t)=>{t.d(r,{A:()=>u});t(9950);var n=t(4752),i=t(300),s=t(5216),l=(t(7216),t(1283),t(3635)),o=t(4414);const a=n.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,n.Ay)(s.A)`
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
`,u=e=>{let{requiredCount:r=null,maximumCount:t=null,children:n,overLimitMessage:u="Too many achievements! You must prestige to access this content."}=e;const m=(0,i.d4)((e=>e.achievements.achievements)),x=Object.keys(m).length,A=null!==t,g=A&&x>t,p=!A&&(!(!l.A.isDebugMode||!l.A.debugFeatures.unlockAllShrines)||x>=r),j=A?!g:p;return(0,o.jsx)(a,{children:(0,o.jsx)(c,{isComplete:j,isOverLimit:g,isMaxShrine:A,children:(0,o.jsxs)(s.A.Body,{children:[(0,o.jsx)(d,{isComplete:j,isOverLimit:g,isMaxShrine:A,children:A?"\ud83d\udd2e":j?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(s.A.Title,{children:A?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(h,{isOverLimit:g,children:A?(0,o.jsxs)(o.Fragment,{children:["Current: ",x," / Maximum: ",t]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",x," / ",r]})}),A?g?(0,o.jsx)(s.A.Text,{className:"text-danger",children:u}):(0,o.jsx)(s.A.Text,{children:n}):p?(0,o.jsx)(s.A.Text,{children:n}):(0,o.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},7911:(e,r,t)=>{t.d(r,{A:()=>v});var n=t(9950),i=t(4752),s=t(300),l=t(404),o=t(4601),a=t(7937),c=t(4268),d=t(4090),h=t(8348),u=t(4414);const m=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,x=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,A=i.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,g=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,p=(e,r)=>{if(!r)return null;const t=d.A[r].stages,n=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let i=n.length-1;i>=0;i--)if(e>=n[i])return t[n[i]];return t[0]},j=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const t=d.A[r].messages,n=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let i=n.length-1;i>=0;i--)if(e>=n[i])return t[n[i]];return t[0]},v=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:t,flowerType:i}=(0,s.d4)((e=>e.flower)),v=(0,s.d4)((e=>e.inventory.equippedItem)),[y,b]=(0,n.useState)(!1),[w,f]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1);return(0,u.jsxs)(m,{children:[(0,u.jsx)(x,{clickable:r,onClick:()=>{r&&f(!0)},children:r?p(t,i):null}),r&&(0,u.jsxs)(g,{children:[(0,u.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,u.jsx)(o.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(d.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(t/e*100,100)})(),variant:"success"})]}),(0,u.jsx)(A,{children:r?j(t,i):"An empty pot... ready for something special to grow."}),(0,u.jsx)(a.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?b(!0):(null===v||void 0===v||v.type,e((0,l.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,u.jsxs)(c.A,{show:y,onHide:()=>b(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,u.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(a.A,{variant:"secondary",onClick:()=>b(!1),children:"Cancel"}),(0,u.jsx)(a.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),b(!1)},children:"Replace Plant"})]})]}),(0,u.jsxs)(c.A,{show:w,onHide:()=>f(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,u.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(a.A,{variant:"secondary",onClick:()=>f(!1),children:"Cancel"}),(0,u.jsx)(a.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[i].stages).map(Number).sort(((e,r)=>e-r));let n=0;for(let e of r)t>=e&&(n=e);const s={type:"flower",flowerType:i,growthLevel:t,stage:p(t,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${t})`,weight:d.A[i].weights[n]};e((0,h.Ci)(s)),e((0,l._$)()),f(!1)},children:"Pick Up Flower"})]})]})]})}}}]);