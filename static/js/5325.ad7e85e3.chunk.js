"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5325],{5325:(e,r,n)=>{n.r(r),n.d(r,{default:()=>l});n(5043),n(2293);var i=n(8628),t=n(6218),s=(n(6050),n(5348),n(8819)),a=(n(1908),n(579));const l=()=>(0,a.jsx)(s.Gy,{children:(0,a.jsx)(s.ee,{children:(0,a.jsxs)(i.A.Body,{children:[(0,a.jsx)(i.A.Title,{children:"The levels become more sparse"}),(0,a.jsx)(i.A.Text,{children:"But it's only to avoid having too much fluff! Why don't you see what else you can do with the levels you've already discovered?"}),(0,a.jsx)(s.W0,{children:(0,a.jsx)(t.A,{targetLevel:10,children:"Level 10"})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>m});n(5043);var i=n(5464),t=n(3003),s=n(8628),a=(n(6481),n(6218),n(2520)),l=n(579);const o=i.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,i.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,c=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=i.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,m=e=>{let{requiredCount:r=null,maximumCount:n=null,children:i,overLimitMessage:m="Too many achievements! You must prestige to access this content."}=e;const u=(0,t.d4)((e=>e.achievements.achievements)),x=Object.keys(u).length,g=null!==n,v=g&&x>n,p=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=r),b=g?!v:p;return(0,l.jsx)(o,{children:(0,l.jsx)(d,{isComplete:b,isOverLimit:v,isMaxShrine:g,children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(c,{isComplete:b,isOverLimit:v,isMaxShrine:g,children:g?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(h,{isOverLimit:v,children:g?(0,l.jsxs)(l.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",x," / ",r]})}),g?v?(0,l.jsx)(s.A.Text,{className:"text-danger",children:m}):(0,l.jsx)(s.A.Text,{children:i}):p?(0,l.jsx)(s.A.Text,{children:i}):(0,l.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>y});var i=n(5043),t=n(5464),s=n(3003),a=n(4103),l=n(3173),o=n(4282),d=n(5284),c=n(5985),h=n(1676),m=n(579);const u=t.Ay.div`
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
`,p=(e,r)=>{if(!r)return null;const n=c.A[r].stages,i=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let t=i.length-1;t>=0;t--)if(e>=i[t])return n[i[t]];return n[0]},b=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=c.A[r].messages,i=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let t=i.length-1;t>=0;t--)if(e>=i[t])return n[i[t]];return n[0]},y=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:t}=(0,s.d4)((e=>e.flower)),y=(0,s.d4)((e=>e.inventory.equippedItem)),[A,f]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1);return(0,m.jsxs)(u,{children:[(0,m.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?p(n,t):null}),r&&(0,m.jsxs)(v,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(l.A,{now:(()=>{const e=(()=>{if(!t)return 0;const e=Object.keys(c.A[t].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(g,{children:r?b(n,t):"An empty pot... ready for something special to grow."}),(0,m.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?f(!0):(null===y||void 0===y||y.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(d.A,{show:A,onHide:()=>f(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(o.A,{variant:"secondary",onClick:()=>f(!1),children:"Cancel"}),(0,m.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),f(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(d.A,{show:j,onHide:()=>w(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(c.A[t].stages).map(Number).sort(((e,r)=>e-r));let i=0;for(let e of r)n>=e&&(i=e);const s={type:"flower",flowerType:t,growthLevel:n,stage:p(n,t),name:`${t.charAt(0).toUpperCase()+t.slice(1)} (Growth: ${n})`,weight:c.A[t].weights[i]};e((0,h.Ci)(s)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>m});var i=n(8139),t=n.n(i),s=n(5043),a=n(7852);function l(e,r){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,n++):e))}var o=n(579);function d(e,r,n){const i=(e-r)/(n-r)*100;return Math.round(1e3*i)/1e3}function c(e,r){let{min:n,now:i,max:s,label:a,visuallyHidden:l,striped:c,animated:h,className:m,style:u,variant:x,bsPrefix:g,...v}=e;return(0,o.jsx)("div",{ref:r,...v,role:"progressbar",className:t()(m,`${g}-bar`,{[`bg-${x}`]:x,[`${g}-bar-animated`]:h,[`${g}-bar-striped`]:h||c}),style:{width:`${d(i,n,s)}%`,...u},"aria-valuenow":i,"aria-valuemin":n,"aria-valuemax":s,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:a}):a})}const h=s.forwardRef(((e,r)=>{let{isChild:n=!1,...i}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...i};if(d.bsPrefix=(0,a.oU)(d.bsPrefix,"progress"),n)return c(d,r);const{min:h,now:m,max:u,label:x,visuallyHidden:g,striped:v,animated:p,bsPrefix:b,variant:y,className:A,children:f,...j}=d;return(0,o.jsx)("div",{ref:r,...j,className:t()(A,b),children:f?l(f,(e=>(0,s.cloneElement)(e,{isChild:!0}))):c({min:h,now:m,max:u,label:x,visuallyHidden:g,striped:v,animated:p,bsPrefix:b,variant:y},r)})}));h.displayName="ProgressBar";const m=h}}]);
//# sourceMappingURL=5325.ad7e85e3.chunk.js.map