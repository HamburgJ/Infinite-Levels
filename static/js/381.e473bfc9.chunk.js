"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[381],{6381:(e,r,n)=>{n.r(r),n.d(r,{default:()=>a});n(5043),n(7921);var t=n(8628),s=n(6218),i=(n(6050),n(5348),n(8819)),l=(n(1908),n(579));const a=()=>(0,l.jsx)(i.Gy,{children:(0,l.jsx)(i.ee,{children:(0,l.jsxs)(t.A.Body,{children:[(0,l.jsx)(t.A.Title,{children:"Lost your wallet?"}),(0,l.jsx)(t.A.Text,{children:"Yes, the scale can be useful to travel to levels, but sometimes you just want to have your wallet back!"}),(0,l.jsx)(i.W0,{children:(0,l.jsx)(s.A,{targetLevel:7})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>u});n(5043);var t=n(5464),s=n(3003),i=n(8628),l=n(6481),a=(n(6218),n(2520)),o=n(579);const c=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,t.Ay)(i.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isComplete&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}
`,h=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isComplete?"gold":"#666"};
`,u=(t.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:r=5,children:n}=e;const t=(0,s.d4)((e=>e.achievements.achievements)),u=Object.keys(t).length,m=Object.keys(l.A).length,x=!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||u>=r,p=u===m;return(0,o.jsx)(c,{children:(0,o.jsx)(d,{isComplete:p,children:(0,o.jsxs)(i.A.Body,{children:[(0,o.jsx)(h,{isComplete:x,children:x?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(i.A.Title,{children:"Achievement Shrine"}),(0,o.jsxs)(i.A.Title,{children:[x?"UNLOCKED":"LOCKED"," ",u,"/",r]}),x?(0,o.jsx)(i.A.Text,{children:n}):(0,o.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})})},6050:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(5043),s=n(5464),i=n(3003),l=n(4103),a=n(9620),o=n(4282),c=n(5284),d=n(5985),h=n(8680),u=n(579);const m=s.Ay.div`
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
`,p=s.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,A=s.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,y=(e,r)=>{if(!r)return null;const n=d.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let s=t.length-1;s>=0;s--)if(e>=t[s])return n[t[s]];return n[0]},g=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let s=t.length-1;s>=0;s--)if(e>=t[s])return n[t[s]];return n[0]},v=()=>{const e=(0,i.wA)(),{hasPlant:r,growthLevel:n,flowerType:s}=(0,i.d4)((e=>e.flower)),v=(0,i.d4)((e=>e.inventory.equippedItem)),[b,j]=(0,t.useState)(!1),[f,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,u.jsxs)(m,{children:[(0,u.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?y(n,s):null}),r&&(0,u.jsxs)(A,{children:[(0,u.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,u.jsx)(a.A,{now:(()=>{const e=(()=>{if(!s)return 0;const e=Object.keys(d.A[s].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,u.jsx)(p,{children:r?g(n,s):"An empty pot... ready for something special to grow."}),(0,u.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?j(!0):(null===v||void 0===v||v.type,e((0,l.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,u.jsxs)(c.A,{show:b,onHide:()=>j(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,u.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(o.A,{variant:"secondary",onClick:()=>j(!1),children:"Cancel"}),(0,u.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),j(!1)},children:"Replace Plant"})]})]}),(0,u.jsxs)(c.A,{show:f,onHide:()=>w(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,u.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,u.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[s].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const i={type:"flower",flowerType:s,growthLevel:n,stage:y(n,s),name:`${s.charAt(0).toUpperCase()+s.slice(1)} (Growth: ${n})`,weight:d.A[s].weights[t]};e((0,h.Ci)(i)),e((0,l._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},2663:(e,r,n)=>{n.d(r,{Tj:()=>s,mf:()=>i});var t=n(5043);function s(e,r){let n=0;return t.Children.map(e,(e=>t.isValidElement(e)?r(e,n++):e))}function i(e,r){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===r))}},9620:(e,r,n)=>{n.d(r,{A:()=>u});var t=n(8139),s=n.n(t),i=n(5043),l=n(7852),a=n(2663),o=n(579);function c(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function d(e,r){let{min:n,now:t,max:i,label:l,visuallyHidden:a,striped:d,animated:h,className:u,style:m,variant:x,bsPrefix:p,...A}=e;return(0,o.jsx)("div",{ref:r,...A,role:"progressbar",className:s()(u,`${p}-bar`,{[`bg-${x}`]:x,[`${p}-bar-animated`]:h,[`${p}-bar-striped`]:h||d}),style:{width:`${c(t,n,i)}%`,...m},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":i,children:a?(0,o.jsx)("span",{className:"visually-hidden",children:l}):l})}const h=i.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(c.bsPrefix=(0,l.oU)(c.bsPrefix,"progress"),n)return d(c,r);const{min:h,now:u,max:m,label:x,visuallyHidden:p,striped:A,animated:y,bsPrefix:g,variant:v,className:b,children:j,...f}=c;return(0,o.jsx)("div",{ref:r,...f,className:s()(b,g),children:j?(0,a.Tj)(j,(e=>(0,i.cloneElement)(e,{isChild:!0}))):d({min:h,now:u,max:m,label:x,visuallyHidden:p,striped:A,animated:y,bsPrefix:g,variant:v},r)})}));h.displayName="ProgressBar";const u=h}}]);
//# sourceMappingURL=381.e473bfc9.chunk.js.map