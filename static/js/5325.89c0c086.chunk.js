"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5325],{4697:(e,r,n)=>{n.d(r,{A:()=>x});var t=n(5043),i=n(5464),s=n(3003),a=n(8565),o=n(3888),l=n(4282),d=n(579);const c=i.Ay.div`
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
`,m=i.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,h=i.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,u={11:{nextLocation:"8",message:"Ah, the sparse levels! *juggles some numbers* Did you know that if you look carefully at Level 8, you might find some interesting traveling techniques? *winks*"},8:{nextLocation:"9",message:"Ohoho! Advanced techniques, indeed! But the real magic lies in the secrets... *pulls a rabbit from a hat* Why don't you check Level 9? There might be a mysterious box waiting to be unlocked! *disappears in a puff of smoke, then reappears* Oh, I'm still here!"},9:{nextLocation:null,message:"The grand finale! *throws confetti* You've found all my hiding spots! But remember, in this world of numbers and mysteries, nothing is quite what it seems... *bows theatrically*"}},x=e=>{let{currentLevel:r}=e;const n=(0,s.wA)(),i=(0,s.d4)((e=>e.jester.currentLocation)),[x,p]=t.useState(!1);if((0,t.useEffect)((()=>{i===r&&n((0,o.FU)())}),[n,i,r]),i!==r)return null;return(0,d.jsxs)(c,{isDisappearing:x,children:[(0,d.jsx)(m,{children:"\ud83c\udccf"}),(0,d.jsx)(h,{children:u[i].message}),(0,d.jsx)(l.A,{variant:"outline-primary",onClick:()=>{p(!0),setTimeout((()=>{const e=u[i].nextLocation;n((0,a.J)(e))}),500)},size:"sm",children:"*poof*"})]})}},5325:(e,r,n)=>{n.r(r),n.d(r,{default:()=>l});n(5043),n(2293);var t=n(8628),i=n(6218),s=(n(6050),n(5348),n(8819)),a=(n(1908),n(4697)),o=n(579);const l=()=>(0,o.jsx)(s.Gy,{children:(0,o.jsx)(s.ee,{children:(0,o.jsxs)(t.A.Body,{children:[(0,o.jsx)(t.A.Title,{children:"The levels become more sparse"}),(0,o.jsx)(t.A.Text,{children:"But it's only to avoid having too much fluff! Why don't you see what else you can do with the levels you've already discovered?"}),(0,o.jsx)(a.A,{currentLevel:"11"}),(0,o.jsx)(s.W0,{children:(0,o.jsx)(i.A,{targetLevel:10,children:"Level 10"})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>h});n(5043);var t=n(5464),i=n(3003),s=n(8628),a=(n(6481),n(6218),n(2520)),o=n(579);const l=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,t.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,c=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,m=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:r=null,maximumCount:n=null,children:t,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,i.d4)((e=>e.achievements.achievements)),x=Object.keys(u).length,p=null!==n,g=p&&x>n,f=!p&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=r),b=p?!g:f;return(0,o.jsx)(l,{children:(0,o.jsx)(d,{isComplete:b,isOverLimit:g,isMaxShrine:p,children:(0,o.jsxs)(s.A.Body,{children:[(0,o.jsx)(c,{isComplete:b,isOverLimit:g,isMaxShrine:p,children:p?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(s.A.Title,{children:p?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(m,{isOverLimit:g,children:p?(0,o.jsxs)(o.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",x," / ",r]})}),p?g?(0,o.jsx)(s.A.Text,{className:"text-danger",children:h}):(0,o.jsx)(s.A.Text,{children:t}):f?(0,o.jsx)(s.A.Text,{children:t}):(0,o.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(5043),i=n(5464),s=n(3003),a=n(4103),o=n(3173),l=n(4282),d=n(5284),c=n(5985),m=n(1676),h=n(579);const u=i.Ay.div`
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
`,g=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,f=(e,r)=>{if(!r)return null;const n=c.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},b=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=c.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},v=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,s.d4)((e=>e.flower)),v=(0,s.d4)((e=>e.inventory.equippedItem)),[y,A]=(0,t.useState)(!1),[j,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,h.jsxs)(u,{children:[(0,h.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?f(n,i):null}),r&&(0,h.jsxs)(g,{children:[(0,h.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,h.jsx)(o.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(c.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,h.jsx)(p,{children:r?b(n,i):"An empty pot... ready for something special to grow."}),(0,h.jsx)(l.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?A(!0):(null===v||void 0===v||v.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,h.jsxs)(d.A,{show:y,onHide:()=>A(!1),children:[(0,h.jsx)(d.A.Header,{closeButton:!0,children:(0,h.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,h.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,h.jsxs)(d.A.Footer,{children:[(0,h.jsx)(l.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,h.jsx)(l.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,h.jsxs)(d.A,{show:j,onHide:()=>w(!1),children:[(0,h.jsx)(d.A.Header,{closeButton:!0,children:(0,h.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,h.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,h.jsxs)(d.A.Footer,{children:[(0,h.jsx)(l.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,h.jsx)(l.A,{variant:"primary",onClick:()=>{const r=Object.keys(c.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const s={type:"flower",flowerType:i,growthLevel:n,stage:f(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:c.A[i].weights[t]};e((0,m.Ci)(s)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>h});var t=n(8139),i=n.n(t),s=n(5043),a=n(7852);function o(e,r){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,n++):e))}var l=n(579);function d(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function c(e,r){let{min:n,now:t,max:s,label:a,visuallyHidden:o,striped:c,animated:m,className:h,style:u,variant:x,bsPrefix:p,...g}=e;return(0,l.jsx)("div",{ref:r,...g,role:"progressbar",className:i()(h,`${p}-bar`,{[`bg-${x}`]:x,[`${p}-bar-animated`]:m,[`${p}-bar-striped`]:m||c}),style:{width:`${d(t,n,s)}%`,...u},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":s,children:o?(0,l.jsx)("span",{className:"visually-hidden",children:a}):a})}const m=s.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(d.bsPrefix=(0,a.oU)(d.bsPrefix,"progress"),n)return c(d,r);const{min:m,now:h,max:u,label:x,visuallyHidden:p,striped:g,animated:f,bsPrefix:b,variant:v,className:y,children:A,...j}=d;return(0,l.jsx)("div",{ref:r,...j,className:i()(y,b),children:A?o(A,(e=>(0,s.cloneElement)(e,{isChild:!0}))):c({min:m,now:h,max:u,label:x,visuallyHidden:p,striped:g,animated:f,bsPrefix:b,variant:v},r)})}));m.displayName="ProgressBar";const h=m}}]);
//# sourceMappingURL=5325.89c0c086.chunk.js.map