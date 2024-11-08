"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[39],{1908:(e,n,r)=>{r.d(n,{A:()=>m});r(5043);var o=r(5464),t=r(3003),i=r(8628),l=r(6481),s=(r(6218),r(2520)),a=r(579);const d=o.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,o.Ay)(i.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isComplete&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}
`,u=o.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isComplete?"gold":"#666"};
`,m=(o.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:n=5,children:r}=e;const o=(0,t.d4)((e=>e.achievements.achievements)),m=Object.keys(o).length,g=Object.keys(l.A).length,h=!(!s.A.isDebugMode||!s.A.debugFeatures.unlockAllShrines)||m>=n,p=m===g;return(0,a.jsx)(d,{children:(0,a.jsx)(c,{isComplete:p,children:(0,a.jsxs)(i.A.Body,{children:[(0,a.jsx)(u,{isComplete:h,children:h?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(i.A.Title,{children:"Achievement Shrine"}),(0,a.jsxs)(i.A.Title,{children:[h?"UNLOCKED":"LOCKED"," ",m,"/",n]}),h?(0,a.jsx)(i.A.Text,{children:r}):(0,a.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})})},363:(e,n,r)=>{r.d(n,{A:()=>y});var o=r(5043),t=r(5464),i=r(4314),l=r(5284),s=r(3003),a=r(8680),d=r(9892),c=r(7540),u=r(579);t.Ay.div`
  padding: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
`,t.Ay.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;const m=t.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`,g=t.Ay.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
`,h=t.Ay.h4`
  text-align: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;
`,p=t.Ay.button`
  padding: 0.8rem 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  margin: 1rem auto;
  visibility: ${e=>e.show?"visible":"hidden"};
  display: block;
  height: 3.5rem;
  min-width: 200px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,x=(t.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 100;
  scale: 0.8;
`,t.Ay.button`
  background: none;
  border: none;
  color: #4CAF50;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.1rem 0.3rem;

  &:hover {
    background: rgba(76, 175, 80, 0.1);
    border-radius: 4px;
  }
`,t.Ay.input`
  width: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.1rem;
  font-size: 0.9rem;
`,t.Ay.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`),f=(t.Ay.span`
  font-size: 2rem;
`,()=>{const e=(0,s.wA)(),[n,r]=(0,o.useState)([]),[t,i]=(0,o.useState)(new Map),l=(0,s.d4)((e=>e.inventory.equippedItem)),f=(0,s.d4)((e=>e.inventory.money)),b="wallet"===(null===l||void 0===l?void 0:l.type),v=(0,s.d4)((e=>e.inventory.coinSlots)),y=()=>{if(0===n.length)return[];const e=n.reduce(((e,n)=>e+n.value*(n.count||1)),0),r=[1e4,5e3,2e3,1e3,500,25,10,5,1];if(1===n.length&&1===n[0].count){const e=n[0];if(1===e.value)return[];const o=r.filter((n=>n<e.value));for(const n of o){const r=[];let o=e.value;for(;o>=n;)r.push({value:n}),o-=n;if(0===o&&r.length>1)return r}return[]}const o=r.find((n=>n===e));return o?[{value:o}]:[]},A=y().length>0,j=A?y():[];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(m,{children:[(0,u.jsxs)(g,{children:[(0,u.jsx)(h,{children:"Your Money"}),b?(0,u.jsx)(d.A,{selectable:!0,selectedItems:n,onItemClick:e=>{r((n=>n.find((n=>n.value===e.value))?n.filter((n=>n.value!==e.value)):[...n,{...e,count:1}]))},onStackCountChange:function(e,o){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(console.log("handleQuantityChange called with:",{value:e,count:o,isDecrementing:i}),console.log("Current selectedItems:",n),i&&o<1)return console.log("Clearing selection for value:",e),void r((n=>n.filter((n=>n.value!==e))));o<=0||void 0===o?(console.log("Clearing selection for value:",e),r((n=>n.filter((n=>n.value!==e))))):r((n=>n.map((n=>n.value===e?{...n,count:Math.min(o,t.get(e)||0)}:n))))},onMoneyMapUpdate:e=>{i(e)},scale:.7,showQuantitySelectors:!0,availableMoney:t}):(0,u.jsx)(x,{children:"No wallet equipped"})]}),(0,u.jsxs)(g,{children:[(0,u.jsx)(h,{children:"You Will Receive"}),(0,u.jsx)(d.A,{items:j,scale:.7})]})]}),(0,u.jsx)(p,{show:A,onClick:()=>{if(0===n.length)return;console.log("=== Starting Exchange ==="),console.log("Selected Items:",n),console.log("Current Money:",f),console.log("Coin Slots:",v),n.forEach((n=>{const r=n.count||1;console.log(`\nProcessing item: value=${n.value}, count=${r}`);const o=f.filter((e=>e.value===n.value));console.log("Matching money in wallet:",o);const t=o.filter((e=>!Object.values(v).includes(e.id))),i=o.filter((e=>Object.values(v).includes(e.id)));console.log("Free coins:",t),console.log("Coins in slots:",i);const l=Math.min(r,t.length);console.log("Free coins to use:",l);for(let d=0;d<l;d++)console.log("Removing free coin:",t[d]),e((0,a.iZ)({id:t[d].id}));const s=r-l;if(console.log("Remaining count needed:",s),s>0){console.log("Need to use coins from slots");for(let n=0;n<s&&n<i.length;n++){const r=Object.keys(v).find((e=>v[e]===i[n].id));console.log("Removing coin from slot:",{coin:i[n],slotId:r}),e((0,a.iZ)({id:i[n].id,slotId:r}))}}}));const o=y();console.log("\nAdding new denominations:",o),o.forEach((n=>{const r=(0,c.I)("money");console.log("Adding new coin:",{value:n.value,id:r}),e((0,a.W8)({value:n.value,id:r}))})),console.log("=== Exchange Complete ==="),r([])},children:"Make Exchange"})]})}),b=t.Ay.button`
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  transition: all 0.2s ease;
  min-width: 120px;
  aspect-ratio: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  .emoji {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .text {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }

  &:hover {
    background: #e9ecef;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,v=(0,t.Ay)(i.A)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`,y=()=>{const[e,n]=(0,o.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(b,{onClick:()=>n(!0),children:[(0,u.jsx)("span",{className:"emoji",children:"\ud83c\udfe6"}),(0,u.jsx)("span",{className:"text",children:"Money Exchange"})]}),(0,u.jsxs)(v,{show:e,onHide:()=>n(!1),centered:!0,size:"lg",children:[(0,u.jsx)(l.A.Header,{closeButton:!0,children:(0,u.jsx)(l.A.Title,{children:"Change Machine"})}),(0,u.jsx)(l.A.Body,{children:(0,u.jsx)(f,{})})]})]})}},6050:(e,n,r)=>{r.d(n,{A:()=>v});var o=r(5043),t=r(5464),i=r(3003),l=r(4103),s=r(9620),a=r(4282),d=r(5284),c=r(5985),u=r(8680),m=r(579);const g=t.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,h=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,p=t.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,x=t.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,f=(e,n)=>{if(!n)return null;const r=c.A[n].stages,o=Object.keys(r).map(Number).sort(((e,n)=>e-n));for(let t=o.length-1;t>=0;t--)if(e>=o[t])return r[o[t]];return r[0]},b=(e,n)=>{if(!n)return"An empty pot... ready for something special to grow.";const r=c.A[n].messages,o=Object.keys(r).map(Number).sort(((e,n)=>e-n));for(let t=o.length-1;t>=0;t--)if(e>=o[t])return r[o[t]];return r[0]},v=()=>{const e=(0,i.wA)(),{hasPlant:n,growthLevel:r,flowerType:t}=(0,i.d4)((e=>e.flower)),v=(0,i.d4)((e=>e.inventory.equippedItem)),[y,A]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!1),[k,C]=(0,o.useState)(!1);return(0,m.jsxs)(g,{children:[(0,m.jsx)(h,{clickable:n,onClick:()=>{n&&w(!0)},children:n?f(r,t):null}),n&&(0,m.jsxs)(x,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(s.A,{now:(()=>{const e=(()=>{if(!t)return 0;const e=Object.keys(c.A[t].stages).map(Number);return Math.max(...e)})();return Math.min(r/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(p,{children:n?b(r,t):"An empty pot... ready for something special to grow."}),(0,m.jsx)(a.A,{variant:n?"outline-danger":"outline-success",onClick:()=>{n?A(!0):(null===v||void 0===v||v.type,e((0,l.tz)()))},size:"sm",children:n?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(d.A,{show:y,onHide:()=>A(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(a.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,m.jsx)(a.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(d.A,{show:j,onHide:()=>w(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(a.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(a.A,{variant:"primary",onClick:()=>{const n=Object.keys(c.A[t].stages).map(Number).sort(((e,n)=>e-n));let o=0;for(let e of n)r>=e&&(o=e);const i={type:"flower",flowerType:t,growthLevel:r,stage:f(r,t),name:`${t.charAt(0).toUpperCase()+t.slice(1)} (Growth: ${r})`,weight:c.A[t].weights[o]};e((0,u.Ci)(i)),e((0,l._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},7540:(e,n,r)=>{r.d(n,{I:()=>t});let o=0;const t=e=>(o++,`${e}-${Math.random().toString(36).substr(2,9)}-${o}`)},2663:(e,n,r)=>{r.d(n,{Tj:()=>t,mf:()=>i});var o=r(5043);function t(e,n){let r=0;return o.Children.map(e,(e=>o.isValidElement(e)?n(e,r++):e))}function i(e,n){return o.Children.toArray(e).some((e=>o.isValidElement(e)&&e.type===n))}},9620:(e,n,r)=>{r.d(n,{A:()=>m});var o=r(8139),t=r.n(o),i=r(5043),l=r(7852),s=r(2663),a=r(579);function d(e,n,r){const o=(e-n)/(r-n)*100;return Math.round(1e3*o)/1e3}function c(e,n){let{min:r,now:o,max:i,label:l,visuallyHidden:s,striped:c,animated:u,className:m,style:g,variant:h,bsPrefix:p,...x}=e;return(0,a.jsx)("div",{ref:n,...x,role:"progressbar",className:t()(m,`${p}-bar`,{[`bg-${h}`]:h,[`${p}-bar-animated`]:u,[`${p}-bar-striped`]:u||c}),style:{width:`${d(o,r,i)}%`,...g},"aria-valuenow":o,"aria-valuemin":r,"aria-valuemax":i,children:s?(0,a.jsx)("span",{className:"visually-hidden",children:l}):l})}const u=i.forwardRef(((e,n)=>{let{isChild:r=!1,...o}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...o};if(d.bsPrefix=(0,l.oU)(d.bsPrefix,"progress"),r)return c(d,n);const{min:u,now:m,max:g,label:h,visuallyHidden:p,striped:x,animated:f,bsPrefix:b,variant:v,className:y,children:A,...j}=d;return(0,a.jsx)("div",{ref:n,...j,className:t()(y,b),children:A?(0,s.Tj)(A,(e=>(0,i.cloneElement)(e,{isChild:!0}))):c({min:u,now:m,max:g,label:h,visuallyHidden:p,striped:x,animated:f,bsPrefix:b,variant:v},n)})}));u.displayName="ProgressBar";const m=u}}]);
//# sourceMappingURL=39.08625870.chunk.js.map