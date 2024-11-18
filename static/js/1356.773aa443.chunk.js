"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1356],{1356:(e,r,n)=>{n.r(r),n.d(r,{default:()=>h});n(5043),n(2293);var t=n(8628),i=n(6218),s=(n(6050),n(5348),n(8819)),l=n(1908),o=n(363),a=n(7161),c=n(9642),d=n(579);const h=()=>(0,d.jsx)(s.Gy,{children:(0,d.jsx)(s.ee,{children:(0,d.jsxs)(t.A.Body,{children:[(0,d.jsx)(t.A.Title,{children:(0,d.jsx)(c.A,{text:"Level 100! Woohoo!",size:"medium"})}),(0,d.jsx)(t.A.Text,{children:(0,d.jsx)(c.A,{text:"Great job getting this far! You're doing great! Come back here after achieving 20 achievements!"})}),(0,d.jsx)(s.W0,{children:(0,d.jsx)(o.A,{})}),(0,d.jsx)(l.A,{requiredCount:20,children:(0,d.jsx)(s.W0,{children:(0,d.jsx)(a.A,{})})}),(0,d.jsx)(s.W0,{children:(0,d.jsx)(i.A,{targetLevel:20,children:"Level 20"})}),(0,d.jsx)(s.W0,{children:(0,d.jsx)(i.A,{targetLevel:10,children:"Level 10"})}),(0,d.jsx)(s.W0,{children:(0,d.jsx)(i.A,{targetLevel:0,children:"Level 0"})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>u});n(5043);var t=n(5464),i=n(3003),s=n(8628),l=(n(6481),n(6218),n(2520)),o=n(579);const a=t.Ay.div`
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
`,u=e=>{let{requiredCount:r=null,maximumCount:n=null,children:t,overLimitMessage:u="Too many achievements! You must prestige to access this content."}=e;const x=(0,i.d4)((e=>e.achievements.achievements)),m=Object.keys(x).length,g=null!==n,A=g&&m>n,j=!g&&(!(!l.A.isDebugMode||!l.A.debugFeatures.unlockAllShrines)||m>=r),p=g?!A:j;return(0,o.jsx)(a,{children:(0,o.jsx)(c,{isComplete:p,isOverLimit:A,isMaxShrine:g,children:(0,o.jsxs)(s.A.Body,{children:[(0,o.jsx)(d,{isComplete:p,isOverLimit:A,isMaxShrine:g,children:g?"\ud83d\udd2e":p?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(h,{isOverLimit:A,children:g?(0,o.jsxs)(o.Fragment,{children:["Current: ",m," / Maximum: ",n]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",m," / ",r]})}),g?A?(0,o.jsx)(s.A.Text,{className:"text-danger",children:u}):(0,o.jsx)(s.A.Text,{children:t}):j?(0,o.jsx)(s.A.Text,{children:t}):(0,o.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(5043),i=n(5464),s=n(3003),l=n(4103),o=n(3173),a=n(4282),c=n(5284),d=n(5985),h=n(1676),u=n(579);const x=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,m=i.Ay.div`
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
`,j=(e,r)=>{if(!r)return null;const n=d.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},p=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},v=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,s.d4)((e=>e.flower)),v=(0,s.d4)((e=>e.inventory.equippedItem)),[b,y]=(0,t.useState)(!1),[f,k]=(0,t.useState)(!1),[w,C]=(0,t.useState)(!1);return(0,u.jsxs)(x,{children:[(0,u.jsx)(m,{clickable:r,onClick:()=>{r&&k(!0)},children:r?j(n,i):null}),r&&(0,u.jsxs)(A,{children:[(0,u.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,u.jsx)(o.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(d.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,u.jsx)(g,{children:r?p(n,i):"An empty pot... ready for something special to grow."}),(0,u.jsx)(a.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?y(!0):(null===v||void 0===v||v.type,e((0,l.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,u.jsxs)(c.A,{show:b,onHide:()=>y(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,u.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(a.A,{variant:"secondary",onClick:()=>y(!1),children:"Cancel"}),(0,u.jsx)(a.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),y(!1)},children:"Replace Plant"})]})]}),(0,u.jsxs)(c.A,{show:f,onHide:()=>k(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,u.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(a.A,{variant:"secondary",onClick:()=>k(!1),children:"Cancel"}),(0,u.jsx)(a.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const s={type:"flower",flowerType:i,growthLevel:n,stage:j(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:d.A[i].weights[t]};e((0,h.Ci)(s)),e((0,l._$)()),k(!1)},children:"Pick Up Flower"})]})]})]})}}}]);
//# sourceMappingURL=1356.773aa443.chunk.js.map