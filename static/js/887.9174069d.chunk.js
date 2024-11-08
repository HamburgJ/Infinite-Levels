"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[887],{2771:(e,r,n)=>{n.d(r,{A:()=>d});var t=n(5043),i=n(3003),l=n(8680),o=n(9254),a=n(7652),s=n(579);const d=e=>{let{itemConfig:r,onBeforeCollect:n,children:d,renderItem:c}=e;const u=(0,i.wA)(),m=(0,i.d4)((e=>e.inventory.equippedItem)),h=!(0,i.d4)((e=>(0,a.l)(e,r.id))),[v,p]=(0,t.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[c({collected:h,handleCollect:()=>{if(!h){if(n){if(!n(m))return}"card"!==r.type||"card-box"!==(null===m||void 0===m?void 0:m.type)?m?p(!0):u((0,l.Ci)(r)):u((0,l.us)({cardId:r.id}))}}}),(0,s.jsx)(o.A,{show:v,onConfirm:()=>{if("card"===(null===m||void 0===m?void 0:m.type)&&"card-box"===r.type){const e={...r,collectedCards:{[m.id]:!0}};u((0,l.Ci)(e))}else u((0,l._e)({newItem:r}));p(!1)},onCancel:()=>p(!1),itemName:(null===m||void 0===m?void 0:m.name)||"current item",message:`Picking up the ${r.name} will return your ${(null===m||void 0===m?void 0:m.name)||"current item"} to its original location. Continue?`})]})}},7088:(e,r,n)=>{n.d(r,{A:()=>x});n(5043);var t=n(5464),i=n(2771),l=n(3003),o=n(8680),a=(n(4157),n(7258)),s=n(7652),d=n(5348),c=n(7540),u=n(579);const m=t.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,h=t.Ay.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.collected?.5:1};
  transition: transform 0.3s ease;
  font-weight: bold;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`,v=(0,t.Ay)(h)`
  width: ${e=>e.value>=25?"3rem":"2.5rem"};
  height: ${e=>e.value>=25?"3rem":"2.5rem"};
  border-radius: 50%;
  background: ${e=>25===e.value?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":"linear-gradient(135deg, #CD7F32, #E6B17F)"};
  border: 2px solid ${e=>25===e.value?"#A0A0A0":"#8B4513"};
  color: ${e=>e.value>=25?"#404040":"#663300"};
  font-size: ${e=>e.value>=25?"1.2rem":"1rem"};
`,p=(0,t.Ay)(h)`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background: ${e=>{switch(e.value){case 1e4:return"linear-gradient(135deg, #849F84, #C1D9C1)";case 5e3:return"linear-gradient(135deg, #E68A00, #FFB84D)";case 2e3:return"linear-gradient(135deg, #008055, #00B377)";case 1e3:return"linear-gradient(135deg, #666699, #8585AD)";default:return"linear-gradient(135deg, #85AD85, #B3D1B3)"}}};
  border: 2px solid ${e=>{switch(e.value){case 1e4:default:return"#5C705C";case 5e3:return"#B36B00";case 2e3:return"#004D33";case 1e3:return"#40406B"}}};
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  font-size: 1.1rem;
`,x=e=>{let{value:r,id:n}=e;const t=(0,l.wA)(),{unlockAchievement:h}=(0,d.k)(),x=((0,l.d4)((e=>e.inventory.equippedItem)),(0,l.d4)((e=>e.inventory.money))),y=(0,l.d4)((e=>(0,s.l)(e,n))),g=(0,l.d4)((e=>e.inventory.coinSlots)),f=n||`currency-${r}`,A={type:"currency",id:f,name:r>=500?`$${r/100} Bill`:`${r}\xa2 Coin`,value:r},b=g[f]||!y,w=r>=500?p:v,j=r>=500?"$"+r/100:`${r}\xa2`;return(0,u.jsx)(i.A,{itemConfig:A,onBeforeCollect:e=>{if(b){if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=x.find((e=>e.value===r));e&&t((0,o.iZ)({id:e.id,slotId:f}))}return!1}if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=(0,c.I)("money");return t((0,o.W8)({value:r,id:e,slotId:f})),!1}const n=r>=500?r/100:r;return h("COIN_TRAVEL"),t((0,a.qX)(n)),!1},renderItem:e=>{let{handleCollect:n}=e;return(0,u.jsx)(m,{children:(0,u.jsx)(w,{collected:b,onClick:n,value:r,children:j})})}})}},9887:(e,r,n)=>{n.r(r),n.d(r,{default:()=>a});n(5043),n(7258);var t=n(8628),i=(n(6218),n(6050),n(5348),n(8819)),l=(n(1908),n(7088)),o=n(579);const a=()=>(0,o.jsx)(i.Gy,{children:(0,o.jsx)(i.ee,{children:(0,o.jsxs)(t.A.Body,{children:[(0,o.jsx)(t.A.Title,{children:"Want my 2 cents?"}),(0,o.jsx)(t.A.Text,{children:"Because that's exactly how much money you must have put in the wallet to have it weigh exactly 156 grams! Here's some real cash to fill your wallet!"}),(0,o.jsx)(i.W0,{children:(0,o.jsx)(l.A,{value:1e4,id:"156"})})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>u});n(5043);var t=n(5464),i=n(3003),l=n(8628),o=n(6481),a=(n(6218),n(579));const s=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,t.Ay)(l.A)`
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
`,u=(t.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:r=5,children:n}=e;const t=(0,i.d4)((e=>e.achievements.achievements)),u=Object.keys(t).length,m=u>=r,h=u===Object.keys(o.A).length;return(0,a.jsx)(s,{children:(0,a.jsx)(d,{isComplete:h,children:(0,a.jsxs)(l.A.Body,{children:[(0,a.jsx)(c,{isComplete:m,children:m?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(l.A.Title,{children:"Achievement Shrine"}),(0,a.jsxs)(l.A.Title,{children:[m?"UNLOCKED":"LOCKED"," ",u,"/",r]}),m?(0,a.jsx)(l.A.Text,{children:n}):(0,a.jsxs)(l.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})})},6050:(e,r,n)=>{n.d(r,{A:()=>f});var t=n(5043),i=n(5464),l=n(3003),o=n(4103),a=n(9620),s=n(4282),d=n(5284),c=n(5985),u=n(8680),m=n(579);const h=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,v=i.Ay.div`
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
`,x=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,y=(e,r)=>{if(!r)return null;const n=c.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},g=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=c.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},f=()=>{const e=(0,l.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,l.d4)((e=>e.flower)),f=(0,l.d4)((e=>e.inventory.equippedItem)),[A,b]=(0,t.useState)(!1),[w,j]=(0,t.useState)(!1),[C,k]=(0,t.useState)(!1);return(0,m.jsxs)(h,{children:[(0,m.jsx)(v,{clickable:r,onClick:()=>{r&&j(!0)},children:r?y(n,i):null}),r&&(0,m.jsxs)(x,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(a.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(c.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(p,{children:r?g(n,i):"An empty pot... ready for something special to grow."}),(0,m.jsx)(s.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?b(!0):(null===f||void 0===f||f.type,e((0,o.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(d.A,{show:A,onHide:()=>b(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(s.A,{variant:"secondary",onClick:()=>b(!1),children:"Cancel"}),(0,m.jsx)(s.A,{variant:"danger",onClick:()=>{e((0,o._$)()),e((0,o.tz)()),b(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(d.A,{show:w,onHide:()=>j(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(s.A,{variant:"secondary",onClick:()=>j(!1),children:"Cancel"}),(0,m.jsx)(s.A,{variant:"primary",onClick:()=>{const r=Object.keys(c.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const l={type:"flower",flowerType:i,growthLevel:n,stage:y(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:c.A[i].weights[t]};e((0,u.Ci)(l)),e((0,o._$)()),j(!1)},children:"Pick Up Flower"})]})]})]})}},7540:(e,r,n)=>{n.d(r,{I:()=>i});let t=0;const i=e=>(t++,`${e}-${Math.random().toString(36).substr(2,9)}-${t}`)},7652:(e,r,n)=>{n.d(r,{l:()=>i});const t=(e,r)=>{var n,t,i,l;if((null===(n=e.inventory.equippedItem)||void 0===n?void 0:n.id)===r)return"equipped";if((null===(t=e.inventory.scale)||void 0===t?void 0:t.id)===r)return"scale";const o=e.inventory.bookshelf.findIndex((e=>{var n;return(null===e||void 0===e?void 0:e.id)===r||!("card-box"!==(null===e||void 0===e?void 0:e.type)||null===(n=e.collectedCards)||void 0===n||!n[r])}));return-1!==o?`bookshelf-${o}`:"card-box"===(null===(i=e.inventory.equippedItem)||void 0===i?void 0:i.type)&&null!==(l=e.inventory.equippedItem.collectedCards)&&void 0!==l&&l[r]?"equipped-box":null},i=(e,r)=>(console.log(r,t(e,r)),null===t(e,r))},2663:(e,r,n)=>{n.d(r,{Tj:()=>i,mf:()=>l});var t=n(5043);function i(e,r){let n=0;return t.Children.map(e,(e=>t.isValidElement(e)?r(e,n++):e))}function l(e,r){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===r))}},9620:(e,r,n)=>{n.d(r,{A:()=>m});var t=n(8139),i=n.n(t),l=n(5043),o=n(7852),a=n(2663),s=n(579);function d(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function c(e,r){let{min:n,now:t,max:l,label:o,visuallyHidden:a,striped:c,animated:u,className:m,style:h,variant:v,bsPrefix:p,...x}=e;return(0,s.jsx)("div",{ref:r,...x,role:"progressbar",className:i()(m,`${p}-bar`,{[`bg-${v}`]:v,[`${p}-bar-animated`]:u,[`${p}-bar-striped`]:u||c}),style:{width:`${d(t,n,l)}%`,...h},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":l,children:a?(0,s.jsx)("span",{className:"visually-hidden",children:o}):o})}const u=l.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(d.bsPrefix=(0,o.oU)(d.bsPrefix,"progress"),n)return c(d,r);const{min:u,now:m,max:h,label:v,visuallyHidden:p,striped:x,animated:y,bsPrefix:g,variant:f,className:A,children:b,...w}=d;return(0,s.jsx)("div",{ref:r,...w,className:i()(A,g),children:b?(0,a.Tj)(b,(e=>(0,l.cloneElement)(e,{isChild:!0}))):c({min:u,now:m,max:h,label:v,visuallyHidden:p,striped:x,animated:y,bsPrefix:g,variant:f},r)})}));u.displayName="ProgressBar";const m=u}}]);
//# sourceMappingURL=887.9174069d.chunk.js.map