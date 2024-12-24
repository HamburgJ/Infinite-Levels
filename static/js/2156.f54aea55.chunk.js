"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[2156],{2156:(e,r,n)=>{n.r(r),n.d(r,{default:()=>o});n(9950),n(6760);var t=n(5216),i=(n(1283),n(7911),n(4085),n(448)),s=(n(969),n(2515),n(7853),n(4431)),l=n(4414);const o=()=>(0,l.jsx)(i.Gy,{children:(0,l.jsx)(i.ee,{children:(0,l.jsxs)(t.A.Body,{children:[(0,l.jsx)(t.A.Title,{children:(0,l.jsx)(s.A,{text:"Questionable level?",size:"medium"})}),(0,l.jsx)(t.A.Text,{children:(0,l.jsx)(s.A,{text:"Why is this here? A level interesting enough to be here, but not interesting enough to have a purpose?",size:"small"})})]})})})},969:(e,r,n)=>{n.d(r,{A:()=>u});n(9950);var t=n(4752),i=n(300),s=n(5216),l=(n(7216),n(1283),n(3635)),o=n(4414);const a=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,t.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,u=e=>{let{requiredCount:r=null,maximumCount:n=null,children:t,overLimitMessage:u="Too many achievements! You must prestige to access this content."}=e;const m=(0,i.d4)((e=>e.achievements.achievements)),x=Object.keys(m).length,g=null!==n,A=g&&x>n,p=!g&&(!(!l.A.isDebugMode||!l.A.debugFeatures.unlockAllShrines)||x>=r),j=g?!A:p;return(0,o.jsx)(a,{children:(0,o.jsx)(c,{isComplete:j,isOverLimit:A,isMaxShrine:g,children:(0,o.jsxs)(s.A.Body,{children:[(0,o.jsx)(d,{isComplete:j,isOverLimit:A,isMaxShrine:g,children:g?"\ud83d\udd2e":j?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(h,{isOverLimit:A,children:g?(0,o.jsxs)(o.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",x," / ",r]})}),g?A?(0,o.jsx)(s.A.Text,{className:"text-danger",children:u}):(0,o.jsx)(s.A.Text,{children:t}):p?(0,o.jsx)(s.A.Text,{children:t}):(0,o.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},7911:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(9950),i=n(4752),s=n(300),l=n(404),o=n(4601),a=n(7937),c=n(4268),d=n(4090),h=n(8348),u=n(4414);const m=i.Ay.div`
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
`,g=i.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,A=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,p=(e,r)=>{if(!r)return null;const n=d.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},j=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},v=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,s.d4)((e=>e.flower)),v=(0,s.d4)((e=>e.inventory.equippedItem)),[b,y]=(0,t.useState)(!1),[f,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,u.jsxs)(m,{children:[(0,u.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?p(n,i):null}),r&&(0,u.jsxs)(A,{children:[(0,u.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,u.jsx)(o.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(d.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,u.jsx)(g,{children:r?j(n,i):"An empty pot... ready for something special to grow."}),(0,u.jsx)(a.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?y(!0):(null===v||void 0===v||v.type,e((0,l.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,u.jsxs)(c.A,{show:b,onHide:()=>y(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,u.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(a.A,{variant:"secondary",onClick:()=>y(!1),children:"Cancel"}),(0,u.jsx)(a.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),y(!1)},children:"Replace Plant"})]})]}),(0,u.jsxs)(c.A,{show:f,onHide:()=>w(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,u.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(a.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,u.jsx)(a.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const s={type:"flower",flowerType:i,growthLevel:n,stage:p(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:d.A[i].weights[t]};e((0,h.Ci)(s)),e((0,l._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}}}]);