"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[38],{38:(e,r,n)=>{n.r(r),n.d(r,{default:()=>c});n(5043),n(2293);var i=n(8628),t=(n(6218),n(6050),n(5348),n(8819)),s=n(1908),a=n(7049),l=n(363),o=n(579);const c=()=>(0,o.jsx)(t.Gy,{children:(0,o.jsx)(t.ee,{children:(0,o.jsxs)(i.A.Body,{children:[(0,o.jsx)(i.A.Title,{children:"Congratulations! You've completed the first 10 levels!"}),(0,o.jsx)(i.A.Text,{children:"If you haven't yet, don't worry, you'll figure out how to get there if you keep exploring! These first levels were meant as a tutorial to introduce you to the mechanics of the game."}),(0,o.jsx)(l.A,{}),(0,o.jsx)(s.A,{requiredCount:20,children:(0,o.jsx)(t.W0,{children:(0,o.jsx)(a.A,{cardId:"ace-clubs",value:"A",rarity:"normal",suit:"clubs"})})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>h});n(5043);var i=n(5464),t=n(3003),s=n(8628),a=(n(6481),n(6218),n(2520)),l=n(579);const o=i.Ay.div`
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
`,u=i.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:r=null,maximumCount:n=null,children:i,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const m=(0,t.d4)((e=>e.achievements.achievements)),x=Object.keys(m).length,g=null!==n,p=g&&x>n,v=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=r),A=g?!p:v;return(0,l.jsx)(o,{children:(0,l.jsx)(c,{isComplete:A,isOverLimit:p,isMaxShrine:g,children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(d,{isComplete:A,isOverLimit:p,isMaxShrine:g,children:g?"\ud83d\udd2e":A?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(u,{isOverLimit:p,children:g?(0,l.jsxs)(l.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",x," / ",r]})}),g?p?(0,l.jsx)(s.A.Text,{className:"text-danger",children:h}):(0,l.jsx)(s.A.Text,{children:i}):v?(0,l.jsx)(s.A.Text,{children:i}):(0,l.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>b});var i=n(5043),t=n(5464),s=n(3003),a=n(4103),l=n(3173),o=n(4282),c=n(5284),d=n(5985),u=n(1676),h=n(579);const m=t.Ay.div`
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
`,p=t.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,v=(e,r)=>{if(!r)return null;const n=d.A[r].stages,i=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let t=i.length-1;t>=0;t--)if(e>=i[t])return n[i[t]];return n[0]},A=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,i=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let t=i.length-1;t>=0;t--)if(e>=i[t])return n[i[t]];return n[0]},b=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:t}=(0,s.d4)((e=>e.flower)),b=(0,s.d4)((e=>e.inventory.equippedItem)),[y,f]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1);return(0,h.jsxs)(m,{children:[(0,h.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?v(n,t):null}),r&&(0,h.jsxs)(p,{children:[(0,h.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,h.jsx)(l.A,{now:(()=>{const e=(()=>{if(!t)return 0;const e=Object.keys(d.A[t].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,h.jsx)(g,{children:r?A(n,t):"An empty pot... ready for something special to grow."}),(0,h.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?f(!0):(null===b||void 0===b||b.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,h.jsxs)(c.A,{show:y,onHide:()=>f(!1),children:[(0,h.jsx)(c.A.Header,{closeButton:!0,children:(0,h.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,h.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,h.jsxs)(c.A.Footer,{children:[(0,h.jsx)(o.A,{variant:"secondary",onClick:()=>f(!1),children:"Cancel"}),(0,h.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),f(!1)},children:"Replace Plant"})]})]}),(0,h.jsxs)(c.A,{show:j,onHide:()=>w(!1),children:[(0,h.jsx)(c.A.Header,{closeButton:!0,children:(0,h.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,h.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,h.jsxs)(c.A.Footer,{children:[(0,h.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,h.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[t].stages).map(Number).sort(((e,r)=>e-r));let i=0;for(let e of r)n>=e&&(i=e);const s={type:"flower",flowerType:t,growthLevel:n,stage:v(n,t),name:`${t.charAt(0).toUpperCase()+t.slice(1)} (Growth: ${n})`,weight:d.A[t].weights[i]};e((0,u.Ci)(s)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>h});var i=n(8139),t=n.n(i),s=n(5043),a=n(7852);function l(e,r){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,n++):e))}var o=n(579);function c(e,r,n){const i=(e-r)/(n-r)*100;return Math.round(1e3*i)/1e3}function d(e,r){let{min:n,now:i,max:s,label:a,visuallyHidden:l,striped:d,animated:u,className:h,style:m,variant:x,bsPrefix:g,...p}=e;return(0,o.jsx)("div",{ref:r,...p,role:"progressbar",className:t()(h,`${g}-bar`,{[`bg-${x}`]:x,[`${g}-bar-animated`]:u,[`${g}-bar-striped`]:u||d}),style:{width:`${c(i,n,s)}%`,...m},"aria-valuenow":i,"aria-valuemin":n,"aria-valuemax":s,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:a}):a})}const u=s.forwardRef(((e,r)=>{let{isChild:n=!1,...i}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...i};if(c.bsPrefix=(0,a.oU)(c.bsPrefix,"progress"),n)return d(c,r);const{min:u,now:h,max:m,label:x,visuallyHidden:g,striped:p,animated:v,bsPrefix:A,variant:b,className:y,children:f,...j}=c;return(0,o.jsx)("div",{ref:r,...j,className:t()(y,A),children:f?l(f,(e=>(0,s.cloneElement)(e,{isChild:!0}))):d({min:u,now:h,max:m,label:x,visuallyHidden:g,striped:p,animated:v,bsPrefix:A,variant:b},r)})}));u.displayName="ProgressBar";const h=u}}]);
//# sourceMappingURL=38.d307eb64.chunk.js.map