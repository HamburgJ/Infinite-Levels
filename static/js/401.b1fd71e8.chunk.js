"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[401],{3401:(e,r,n)=>{n.r(r),n.d(r,{default:()=>l});n(5043),n(7258);var t=n(8628),i=n(6218),s=(n(6050),n(5348),n(8819)),a=(n(1908),n(579));const l=()=>(0,a.jsx)(s.Gy,{children:(0,a.jsx)(s.ee,{children:(0,a.jsxs)(t.A.Body,{children:[(0,a.jsx)(t.A.Title,{children:"The levels become more sparse"}),(0,a.jsx)(t.A.Text,{children:"But it's only to avoid having too much fluff! Why don't you see what else you can do with the levels you've already discovered?"}),(0,a.jsx)(s.W0,{children:(0,a.jsx)(i.A,{targetLevel:158})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>h});n(5043);var t=n(5464),i=n(3003),s=n(8628),a=n(6481),l=(n(6218),n(579));const o=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,t.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isComplete&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}
`,c=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isComplete?"gold":"#666"};
`,h=(t.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:r=5,children:n}=e;const t=(0,i.d4)((e=>e.achievements.achievements)),h=Object.keys(t).length,m=h>=r,u=h===Object.keys(a.A).length;return(0,l.jsx)(o,{children:(0,l.jsx)(d,{isComplete:u,children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(c,{isComplete:m,children:m?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(s.A.Title,{children:"Achievement Shrine"}),(0,l.jsxs)(s.A.Title,{children:[m?"UNLOCKED":"LOCKED"," ",h,"/",r]}),m?(0,l.jsx)(s.A.Text,{children:n}):(0,l.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})})},6050:(e,r,n)=>{n.d(r,{A:()=>A});var t=n(5043),i=n(5464),s=n(3003),a=n(4103),l=n(9620),o=n(4282),d=n(5284),c=n(5985),h=n(8680),m=n(579);const u=i.Ay.div`
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
`,p=i.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,y=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,v=(e,r)=>{if(!r)return null;const n=c.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},g=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=c.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},A=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,s.d4)((e=>e.flower)),A=(0,s.d4)((e=>e.inventory.equippedItem)),[f,j]=(0,t.useState)(!1),[b,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,m.jsxs)(u,{children:[(0,m.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?v(n,i):null}),r&&(0,m.jsxs)(y,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(l.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(c.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(p,{children:r?g(n,i):"An empty pot... ready for something special to grow."}),(0,m.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?j(!0):(null===A||void 0===A||A.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(d.A,{show:f,onHide:()=>j(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(o.A,{variant:"secondary",onClick:()=>j(!1),children:"Cancel"}),(0,m.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),j(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(d.A,{show:b,onHide:()=>w(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(c.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const s={type:"flower",flowerType:i,growthLevel:n,stage:v(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:c.A[i].weights[t]};e((0,h.Ci)(s)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},2663:(e,r,n)=>{n.d(r,{Tj:()=>i,mf:()=>s});var t=n(5043);function i(e,r){let n=0;return t.Children.map(e,(e=>t.isValidElement(e)?r(e,n++):e))}function s(e,r){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===r))}},9620:(e,r,n)=>{n.d(r,{A:()=>m});var t=n(8139),i=n.n(t),s=n(5043),a=n(7852),l=n(2663),o=n(579);function d(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function c(e,r){let{min:n,now:t,max:s,label:a,visuallyHidden:l,striped:c,animated:h,className:m,style:u,variant:x,bsPrefix:p,...y}=e;return(0,o.jsx)("div",{ref:r,...y,role:"progressbar",className:i()(m,`${p}-bar`,{[`bg-${x}`]:x,[`${p}-bar-animated`]:h,[`${p}-bar-striped`]:h||c}),style:{width:`${d(t,n,s)}%`,...u},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":s,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:a}):a})}const h=s.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(d.bsPrefix=(0,a.oU)(d.bsPrefix,"progress"),n)return c(d,r);const{min:h,now:m,max:u,label:x,visuallyHidden:p,striped:y,animated:v,bsPrefix:g,variant:A,className:f,children:j,...b}=d;return(0,o.jsx)("div",{ref:r,...b,className:i()(f,g),children:j?(0,l.Tj)(j,(e=>(0,s.cloneElement)(e,{isChild:!0}))):c({min:h,now:m,max:u,label:x,visuallyHidden:p,striped:y,animated:v,bsPrefix:g,variant:A},r)})}));h.displayName="ProgressBar";const m=h}}]);
//# sourceMappingURL=401.b1fd71e8.chunk.js.map