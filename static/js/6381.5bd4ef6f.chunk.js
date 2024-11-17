"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[6381],{6381:(e,r,n)=>{n.r(r),n.d(r,{default:()=>o});n(5043),n(2293);var t=n(8628),i=n(6218),s=(n(6050),n(5348),n(8819)),a=(n(1908),n(9642)),l=n(579);const o=()=>(0,l.jsx)(s.Gy,{children:(0,l.jsx)(s.ee,{children:(0,l.jsxs)(t.A.Body,{children:[(0,l.jsx)(t.A.Title,{children:(0,l.jsx)(a.A,{text:"Lost your wallet?",size:"medium"})}),(0,l.jsx)(t.A.Text,{children:(0,l.jsx)(a.A,{text:"Yes, the scale can be useful to travel to levels, but sometimes you just want to have your wallet back!"})}),(0,l.jsx)(s.W0,{children:(0,l.jsx)(i.A,{targetLevel:7})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>h});n(5043);var t=n(5464),i=n(3003),s=n(8628),a=(n(6481),n(6218),n(2520)),l=n(579);const o=t.Ay.div`
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
`,m=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:r=null,maximumCount:n=null,children:t,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,i.d4)((e=>e.achievements.achievements)),x=Object.keys(u).length,g=null!==n,p=g&&x>n,v=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=r),b=g?!p:v;return(0,l.jsx)(o,{children:(0,l.jsx)(c,{isComplete:b,isOverLimit:p,isMaxShrine:g,children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(d,{isComplete:b,isOverLimit:p,isMaxShrine:g,children:g?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(m,{isOverLimit:p,children:g?(0,l.jsxs)(l.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",x," / ",r]})}),g?p?(0,l.jsx)(s.A.Text,{className:"text-danger",children:h}):(0,l.jsx)(s.A.Text,{children:t}):v?(0,l.jsx)(s.A.Text,{children:t}):(0,l.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>A});var t=n(5043),i=n(5464),s=n(3003),a=n(4103),l=n(3173),o=n(4282),c=n(5284),d=n(5985),m=n(1676),h=n(579);const u=i.Ay.div`
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
`,p=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,v=(e,r)=>{if(!r)return null;const n=d.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},b=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},A=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,s.d4)((e=>e.flower)),A=(0,s.d4)((e=>e.inventory.equippedItem)),[j,y]=(0,t.useState)(!1),[f,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,h.jsxs)(u,{children:[(0,h.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?v(n,i):null}),r&&(0,h.jsxs)(p,{children:[(0,h.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,h.jsx)(l.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(d.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,h.jsx)(g,{children:r?b(n,i):"An empty pot... ready for something special to grow."}),(0,h.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?y(!0):(null===A||void 0===A||A.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,h.jsxs)(c.A,{show:j,onHide:()=>y(!1),children:[(0,h.jsx)(c.A.Header,{closeButton:!0,children:(0,h.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,h.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,h.jsxs)(c.A.Footer,{children:[(0,h.jsx)(o.A,{variant:"secondary",onClick:()=>y(!1),children:"Cancel"}),(0,h.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),y(!1)},children:"Replace Plant"})]})]}),(0,h.jsxs)(c.A,{show:f,onHide:()=>w(!1),children:[(0,h.jsx)(c.A.Header,{closeButton:!0,children:(0,h.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,h.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,h.jsxs)(c.A.Footer,{children:[(0,h.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,h.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const s={type:"flower",flowerType:i,growthLevel:n,stage:v(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:d.A[i].weights[t]};e((0,m.Ci)(s)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>h});var t=n(8139),i=n.n(t),s=n(5043),a=n(7852);function l(e,r){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,n++):e))}var o=n(579);function c(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function d(e,r){let{min:n,now:t,max:s,label:a,visuallyHidden:l,striped:d,animated:m,className:h,style:u,variant:x,bsPrefix:g,...p}=e;return(0,o.jsx)("div",{ref:r,...p,role:"progressbar",className:i()(h,`${g}-bar`,{[`bg-${x}`]:x,[`${g}-bar-animated`]:m,[`${g}-bar-striped`]:m||d}),style:{width:`${c(t,n,s)}%`,...u},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":s,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:a}):a})}const m=s.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(c.bsPrefix=(0,a.oU)(c.bsPrefix,"progress"),n)return d(c,r);const{min:m,now:h,max:u,label:x,visuallyHidden:g,striped:p,animated:v,bsPrefix:b,variant:A,className:j,children:y,...f}=c;return(0,o.jsx)("div",{ref:r,...f,className:i()(j,b),children:y?l(y,(e=>(0,s.cloneElement)(e,{isChild:!0}))):d({min:m,now:h,max:u,label:x,visuallyHidden:g,striped:p,animated:v,bsPrefix:b,variant:A},r)})}));m.displayName="ProgressBar";const h=m}}]);
//# sourceMappingURL=6381.5bd4ef6f.chunk.js.map