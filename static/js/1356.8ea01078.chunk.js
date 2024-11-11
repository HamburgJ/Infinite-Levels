"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1356],{1356:(e,r,n)=>{n.r(r),n.d(r,{default:()=>d});n(5043),n(2293);var i=n(8628),t=n(6218),s=(n(6050),n(5348),n(8819)),l=n(1908),a=n(363),o=n(7161),c=n(579);const d=()=>(0,c.jsx)(s.Gy,{children:(0,c.jsx)(s.ee,{children:(0,c.jsxs)(i.A.Body,{children:[(0,c.jsx)(i.A.Title,{children:"Level 100! Woohoo!"}),(0,c.jsx)(i.A.Text,{children:"Great job getting this far! You're doing great! Come back here after achieving 20 achievements!"}),(0,c.jsx)(s.W0,{children:(0,c.jsx)(a.A,{})}),(0,c.jsx)(l.A,{requiredCount:20,children:(0,c.jsx)(s.W0,{children:(0,c.jsx)(o.A,{})})}),(0,c.jsx)(s.W0,{children:(0,c.jsx)(t.A,{targetLevel:1e7,children:"Level 20"})}),(0,c.jsx)(s.W0,{children:(0,c.jsx)(t.A,{targetLevel:1e7,children:"Level 10"})}),(0,c.jsx)(s.W0,{children:(0,c.jsx)(t.A,{targetLevel:1e7,children:"Level 0"})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>m});n(5043);var i=n(5464),t=n(3003),s=n(8628),l=(n(6481),n(6218),n(2520)),a=n(579);const o=i.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,i.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=i.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,m=e=>{let{requiredCount:r=null,maximumCount:n=null,children:i,overLimitMessage:m="Too many achievements! You must prestige to access this content."}=e;const u=(0,t.d4)((e=>e.achievements.achievements)),x=Object.keys(u).length,g=null!==n,v=g&&x>n,p=!g&&(!(!l.A.isDebugMode||!l.A.debugFeatures.unlockAllShrines)||x>=r),j=g?!v:p;return(0,a.jsx)(o,{children:(0,a.jsx)(c,{isComplete:j,isOverLimit:v,isMaxShrine:g,children:(0,a.jsxs)(s.A.Body,{children:[(0,a.jsx)(d,{isComplete:j,isOverLimit:v,isMaxShrine:g,children:g?"\ud83d\udd2e":j?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(h,{isOverLimit:v,children:g?(0,a.jsxs)(a.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",x," / ",r]})}),g?v?(0,a.jsx)(s.A.Text,{className:"text-danger",children:m}):(0,a.jsx)(s.A.Text,{children:i}):p?(0,a.jsx)(s.A.Text,{children:i}):(0,a.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>A});var i=n(5043),t=n(5464),s=n(3003),l=n(4103),a=n(3173),o=n(4282),c=n(5284),d=n(5985),h=n(1676),m=n(579);const u=t.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,x=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,g=t.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,v=t.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,p=(e,r)=>{if(!r)return null;const n=d.A[r].stages,i=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let t=i.length-1;t>=0;t--)if(e>=i[t])return n[i[t]];return n[0]},j=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,i=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let t=i.length-1;t>=0;t--)if(e>=i[t])return n[i[t]];return n[0]},A=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:t}=(0,s.d4)((e=>e.flower)),A=(0,s.d4)((e=>e.inventory.equippedItem)),[b,f]=(0,i.useState)(!1),[y,w]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1);return(0,m.jsxs)(u,{children:[(0,m.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?p(n,t):null}),r&&(0,m.jsxs)(v,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(a.A,{now:(()=>{const e=(()=>{if(!t)return 0;const e=Object.keys(d.A[t].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(g,{children:r?j(n,t):"An empty pot... ready for something special to grow."}),(0,m.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?f(!0):(null===A||void 0===A||A.type,e((0,l.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(c.A,{show:b,onHide:()=>f(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(o.A,{variant:"secondary",onClick:()=>f(!1),children:"Cancel"}),(0,m.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),f(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(c.A,{show:y,onHide:()=>w(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[t].stages).map(Number).sort(((e,r)=>e-r));let i=0;for(let e of r)n>=e&&(i=e);const s={type:"flower",flowerType:t,growthLevel:n,stage:p(n,t),name:`${t.charAt(0).toUpperCase()+t.slice(1)} (Growth: ${n})`,weight:d.A[t].weights[i]};e((0,h.Ci)(s)),e((0,l._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>m});var i=n(8139),t=n.n(i),s=n(5043),l=n(7852);function a(e,r){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,n++):e))}var o=n(579);function c(e,r,n){const i=(e-r)/(n-r)*100;return Math.round(1e3*i)/1e3}function d(e,r){let{min:n,now:i,max:s,label:l,visuallyHidden:a,striped:d,animated:h,className:m,style:u,variant:x,bsPrefix:g,...v}=e;return(0,o.jsx)("div",{ref:r,...v,role:"progressbar",className:t()(m,`${g}-bar`,{[`bg-${x}`]:x,[`${g}-bar-animated`]:h,[`${g}-bar-striped`]:h||d}),style:{width:`${c(i,n,s)}%`,...u},"aria-valuenow":i,"aria-valuemin":n,"aria-valuemax":s,children:a?(0,o.jsx)("span",{className:"visually-hidden",children:l}):l})}const h=s.forwardRef(((e,r)=>{let{isChild:n=!1,...i}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...i};if(c.bsPrefix=(0,l.oU)(c.bsPrefix,"progress"),n)return d(c,r);const{min:h,now:m,max:u,label:x,visuallyHidden:g,striped:v,animated:p,bsPrefix:j,variant:A,className:b,children:f,...y}=c;return(0,o.jsx)("div",{ref:r,...y,className:t()(b,j),children:f?a(f,(e=>(0,s.cloneElement)(e,{isChild:!0}))):d({min:h,now:m,max:u,label:x,visuallyHidden:g,striped:v,animated:p,bsPrefix:j,variant:A},r)})}));h.displayName="ProgressBar";const m=h}}]);
//# sourceMappingURL=1356.8ea01078.chunk.js.map