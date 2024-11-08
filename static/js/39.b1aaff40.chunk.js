"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[39],{1908:(e,n,r)=>{r.d(n,{A:()=>u});r(5043);var t=r(5464),o=r(3003),i=r(8628),l=r(6481),s=(r(6218),r(579));const a=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,t.Ay)(i.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isComplete&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}
`,d=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isComplete?"gold":"#666"};
`,u=(t.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:n=5,children:r}=e;const t=(0,o.d4)((e=>e.achievements.achievements)),u=Object.keys(t).length,m=u>=n,g=u===Object.keys(l.A).length;return(0,s.jsx)(a,{children:(0,s.jsx)(c,{isComplete:g,children:(0,s.jsxs)(i.A.Body,{children:[(0,s.jsx)(d,{isComplete:m,children:m?"\ud83d\udd13":"\ud83d\udd12"}),(0,s.jsx)(i.A.Title,{children:"Achievement Shrine"}),(0,s.jsxs)(i.A.Title,{children:[m?"UNLOCKED":"LOCKED"," ",u,"/",n]}),m?(0,s.jsx)(i.A.Text,{children:r}):(0,s.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})})},363:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(5043),o=r(5464),i=r(4314),l=r(5284),s=r(3003),a=r(8680),c=r(9892),d=r(7540),u=r(579);o.Ay.div`
  padding: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
`,o.Ay.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;const m=o.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`,g=o.Ay.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
`,h=o.Ay.h4`
  text-align: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;
`,p=o.Ay.button`
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
`,x=(o.Ay.div`
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
`,o.Ay.button`
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
`,o.Ay.input`
  width: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.1rem;
  font-size: 0.9rem;
`,o.Ay.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`),f=(o.Ay.span`
  font-size: 2rem;
`,()=>{const e=(0,s.wA)(),[n,r]=(0,t.useState)([]),[o,i]=(0,t.useState)(new Map),l=(0,s.d4)((e=>e.inventory.equippedItem)),f=(0,s.d4)((e=>e.inventory.money)),b="wallet"===(null===l||void 0===l?void 0:l.type),v=(0,s.d4)((e=>e.inventory.coinSlots)),y=()=>{if(0===n.length)return[];const e=n.reduce(((e,n)=>e+n.value*(n.count||1)),0),r=[1e4,5e3,2e3,1e3,500,25,10,5,1];if(1===n.length&&1===n[0].count){const e=n[0];if(1===e.value)return[];const t=r.filter((n=>n<e.value));for(const n of t){const r=[];let t=e.value;for(;t>=n;)r.push({value:n}),t-=n;if(0===t&&r.length>1)return r}return[]}const t=r.find((n=>n===e));return t?[{value:t}]:[]},A=y().length>0,j=A?y():[];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(m,{children:[(0,u.jsxs)(g,{children:[(0,u.jsx)(h,{children:"Your Money"}),b?(0,u.jsx)(c.A,{selectable:!0,selectedItems:n,onItemClick:e=>{r((n=>n.find((n=>n.value===e.value))?n.filter((n=>n.value!==e.value)):[...n,{...e,count:1}]))},onStackCountChange:function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(console.log("handleQuantityChange called with:",{value:e,count:t,isDecrementing:i}),console.log("Current selectedItems:",n),i&&t<1)return console.log("Clearing selection for value:",e),void r((n=>n.filter((n=>n.value!==e))));t<=0||void 0===t?(console.log("Clearing selection for value:",e),r((n=>n.filter((n=>n.value!==e))))):r((n=>n.map((n=>n.value===e?{...n,count:Math.min(t,o.get(e)||0)}:n))))},onMoneyMapUpdate:e=>{i(e)},scale:.7,showQuantitySelectors:!0,availableMoney:o}):(0,u.jsx)(x,{children:"No wallet equipped"})]}),(0,u.jsxs)(g,{children:[(0,u.jsx)(h,{children:"You Will Receive"}),(0,u.jsx)(c.A,{items:j,scale:.7})]})]}),(0,u.jsx)(p,{show:A,onClick:()=>{if(0===n.length)return;console.log("=== Starting Exchange ==="),console.log("Selected Items:",n),console.log("Current Money:",f),console.log("Coin Slots:",v),n.forEach((n=>{const r=n.count||1;console.log(`\nProcessing item: value=${n.value}, count=${r}`);const t=f.filter((e=>e.value===n.value));console.log("Matching money in wallet:",t);const o=t.filter((e=>!Object.values(v).includes(e.id))),i=t.filter((e=>Object.values(v).includes(e.id)));console.log("Free coins:",o),console.log("Coins in slots:",i);const l=Math.min(r,o.length);console.log("Free coins to use:",l);for(let c=0;c<l;c++)console.log("Removing free coin:",o[c]),e((0,a.iZ)({id:o[c].id}));const s=r-l;if(console.log("Remaining count needed:",s),s>0){console.log("Need to use coins from slots");for(let n=0;n<s&&n<i.length;n++){const r=Object.keys(v).find((e=>v[e]===i[n].id));console.log("Removing coin from slot:",{coin:i[n],slotId:r}),e((0,a.iZ)({id:i[n].id,slotId:r}))}}}));const t=y();console.log("\nAdding new denominations:",t),t.forEach((n=>{const r=(0,d.I)("money");console.log("Adding new coin:",{value:n.value,id:r}),e((0,a.W8)({value:n.value,id:r}))})),console.log("=== Exchange Complete ==="),r([])},children:"Make Exchange"})]})}),b=o.Ay.button`
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
`,v=(0,o.Ay)(i.A)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`,y=()=>{const[e,n]=(0,t.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(b,{onClick:()=>n(!0),children:[(0,u.jsx)("span",{className:"emoji",children:"\ud83c\udfe6"}),(0,u.jsx)("span",{className:"text",children:"Money Exchange"})]}),(0,u.jsxs)(v,{show:e,onHide:()=>n(!1),centered:!0,size:"lg",children:[(0,u.jsx)(l.A.Header,{closeButton:!0,children:(0,u.jsx)(l.A.Title,{children:"Change Machine"})}),(0,u.jsx)(l.A.Body,{children:(0,u.jsx)(f,{})})]})]})}},6050:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(5043),o=r(5464),i=r(3003),l=r(4103),s=r(9620),a=r(4282),c=r(5284),d=r(5985),u=r(8680),m=r(579);const g=o.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,h=o.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,p=o.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,x=o.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,f=(e,n)=>{if(!n)return null;const r=d.A[n].stages,t=Object.keys(r).map(Number).sort(((e,n)=>e-n));for(let o=t.length-1;o>=0;o--)if(e>=t[o])return r[t[o]];return r[0]},b=(e,n)=>{if(!n)return"An empty pot... ready for something special to grow.";const r=d.A[n].messages,t=Object.keys(r).map(Number).sort(((e,n)=>e-n));for(let o=t.length-1;o>=0;o--)if(e>=t[o])return r[t[o]];return r[0]},v=()=>{const e=(0,i.wA)(),{hasPlant:n,growthLevel:r,flowerType:o}=(0,i.d4)((e=>e.flower)),v=(0,i.d4)((e=>e.inventory.equippedItem)),[y,A]=(0,t.useState)(!1),[j,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,m.jsxs)(g,{children:[(0,m.jsx)(h,{clickable:n,onClick:()=>{n&&w(!0)},children:n?f(r,o):null}),n&&(0,m.jsxs)(x,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(s.A,{now:(()=>{const e=(()=>{if(!o)return 0;const e=Object.keys(d.A[o].stages).map(Number);return Math.max(...e)})();return Math.min(r/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(p,{children:n?b(r,o):"An empty pot... ready for something special to grow."}),(0,m.jsx)(a.A,{variant:n?"outline-danger":"outline-success",onClick:()=>{n?A(!0):(null===v||void 0===v||v.type,e((0,l.tz)()))},size:"sm",children:n?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(c.A,{show:y,onHide:()=>A(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(a.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,m.jsx)(a.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(c.A,{show:j,onHide:()=>w(!1),children:[(0,m.jsx)(c.A.Header,{closeButton:!0,children:(0,m.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(c.A.Footer,{children:[(0,m.jsx)(a.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(a.A,{variant:"primary",onClick:()=>{const n=Object.keys(d.A[o].stages).map(Number).sort(((e,n)=>e-n));let t=0;for(let e of n)r>=e&&(t=e);const i={type:"flower",flowerType:o,growthLevel:r,stage:f(r,o),name:`${o.charAt(0).toUpperCase()+o.slice(1)} (Growth: ${r})`,weight:d.A[o].weights[t]};e((0,u.Ci)(i)),e((0,l._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},7540:(e,n,r)=>{r.d(n,{I:()=>o});let t=0;const o=e=>(t++,`${e}-${Math.random().toString(36).substr(2,9)}-${t}`)},2663:(e,n,r)=>{r.d(n,{Tj:()=>o,mf:()=>i});var t=r(5043);function o(e,n){let r=0;return t.Children.map(e,(e=>t.isValidElement(e)?n(e,r++):e))}function i(e,n){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===n))}},9620:(e,n,r)=>{r.d(n,{A:()=>m});var t=r(8139),o=r.n(t),i=r(5043),l=r(7852),s=r(2663),a=r(579);function c(e,n,r){const t=(e-n)/(r-n)*100;return Math.round(1e3*t)/1e3}function d(e,n){let{min:r,now:t,max:i,label:l,visuallyHidden:s,striped:d,animated:u,className:m,style:g,variant:h,bsPrefix:p,...x}=e;return(0,a.jsx)("div",{ref:n,...x,role:"progressbar",className:o()(m,`${p}-bar`,{[`bg-${h}`]:h,[`${p}-bar-animated`]:u,[`${p}-bar-striped`]:u||d}),style:{width:`${c(t,r,i)}%`,...g},"aria-valuenow":t,"aria-valuemin":r,"aria-valuemax":i,children:s?(0,a.jsx)("span",{className:"visually-hidden",children:l}):l})}const u=i.forwardRef(((e,n)=>{let{isChild:r=!1,...t}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(c.bsPrefix=(0,l.oU)(c.bsPrefix,"progress"),r)return d(c,n);const{min:u,now:m,max:g,label:h,visuallyHidden:p,striped:x,animated:f,bsPrefix:b,variant:v,className:y,children:A,...j}=c;return(0,a.jsx)("div",{ref:n,...j,className:o()(y,b),children:A?(0,s.Tj)(A,(e=>(0,i.cloneElement)(e,{isChild:!0}))):d({min:u,now:m,max:g,label:h,visuallyHidden:p,striped:x,animated:f,bsPrefix:b,variant:v},n)})}));u.displayName="ProgressBar";const m=u}}]);
//# sourceMappingURL=39.b1aaff40.chunk.js.map