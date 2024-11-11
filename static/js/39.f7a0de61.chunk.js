"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[39],{1908:(e,r,n)=>{n.d(r,{A:()=>m});n(5043);var t=n(5464),i=n(3003),a=n(8628),o=(n(6481),n(6218),n(2520)),s=n(579);const l=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,t.Ay)(a.A)`
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
`,u=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,m=e=>{let{requiredCount:r=null,maximumCount:n=null,children:t,overLimitMessage:m="Too many achievements! You must prestige to access this content."}=e;const h=(0,i.d4)((e=>e.achievements.achievements)),g=Object.keys(h).length,x=null!==n,p=x&&g>n,b=!x&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||g>=r),v=x?!p:b;return(0,s.jsx)(l,{children:(0,s.jsx)(d,{isComplete:v,isOverLimit:p,isMaxShrine:x,children:(0,s.jsxs)(a.A.Body,{children:[(0,s.jsx)(c,{isComplete:v,isOverLimit:p,isMaxShrine:x,children:x?"\ud83d\udd2e":v?"\ud83d\udd13":"\ud83d\udd12"}),(0,s.jsx)(a.A.Title,{children:x?"Prestige Shrine":"Achievement Shrine"}),(0,s.jsx)(u,{isOverLimit:p,children:x?(0,s.jsxs)(s.Fragment,{children:["Current: ",g," / Maximum: ",n]}):(0,s.jsxs)(s.Fragment,{children:["Progress: ",g," / ",r]})}),x?p?(0,s.jsx)(a.A.Text,{className:"text-danger",children:m}):(0,s.jsx)(a.A.Text,{children:t}):b?(0,s.jsx)(a.A.Text,{children:t}):(0,s.jsxs)(a.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},363:(e,r,n)=>{n.d(r,{A:()=>f});var t=n(5043),i=n(5464),a=n(4314),o=n(5284),s=n(3003),l=n(1676),d=n(9892),c=n(579);i.Ay.div`
  padding: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
`,i.Ay.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;const u=i.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`,m=i.Ay.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
`,h=i.Ay.h4`
  text-align: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;
`,g=i.Ay.button`
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
`,x=(i.Ay.div`
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
`,i.Ay.button`
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
`,i.Ay.input`
  width: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.1rem;
  font-size: 0.9rem;
`,i.Ay.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`),p=(i.Ay.span`
  font-size: 2rem;
`,()=>{const e=(0,s.wA)(),[r,n]=(0,t.useState)([]),[i,a]=(0,t.useState)(new Map),o=(0,s.d4)((e=>e.inventory.equippedItem)),p=((0,s.d4)((e=>e.inventory.money)),"wallet"===(null===o||void 0===o?void 0:o.type)),b=((0,s.d4)((e=>e.inventory.coinSlots)),()=>{if(0===r.length)return[];const e=r.reduce(((e,r)=>e+r.value*(r.count||1)),0),n=[1e4,5e3,2e3,1e3,500,25,10,5,1];if(1===r.length&&1===r[0].count){const e=r[0];if(1===e.value)return[];const t=n.filter((r=>r<e.value));for(const r of t){const n=[];let t=e.value;for(;t>=r;)n.push({value:r}),t-=r;if(0===t&&n.length>1)return n}return[]}const t=n.find((r=>r===e));return t?[{value:t}]:[]}),v=b().length>0,f=(0,t.useMemo)((()=>{if(0===r.length)return{};return b().reduce(((e,r)=>(e[r.value]=(e[r.value]||0)+1,e)),{})}),[r]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u,{children:[(0,c.jsxs)(m,{children:[(0,c.jsx)(h,{children:"Your Money"}),p?(0,c.jsx)(d.A,{selectable:!0,selectedItems:r,onItemClick:e=>{n((r=>r.find((r=>r.value===e.value))?r.filter((r=>r.value!==e.value)):[...r,{...e,count:1}]))},onStackCountChange:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(console.log("handleQuantityChange called with:",{value:e,count:t,isDecrementing:a}),console.log("Current selectedItems:",r),a&&t<1)return console.log("Clearing selection for value:",e),void n((r=>r.filter((r=>r.value!==e))));t<=0||void 0===t?(console.log("Clearing selection for value:",e),n((r=>r.filter((r=>r.value!==e))))):n((r=>r.map((r=>r.value===e?{...r,count:Math.min(t,i.get(e)||0)}:r))))},onMoneyMapUpdate:e=>{a(e)},scale:.7,showQuantitySelectors:!0,availableMoney:i}):(0,c.jsx)(x,{children:"No wallet equipped"})]}),(0,c.jsxs)(m,{children:[(0,c.jsx)(h,{children:"You Will Receive"}),(0,c.jsx)(d.A,{items:f,scale:.7})]})]}),(0,c.jsx)(g,{show:v,onClick:()=>{if(0===r.length)return;const t=r.reduce(((e,r)=>(e[r.value]=(e[r.value]||0)+(r.count||1),e)),{}),a=b().reduce(((e,r)=>(e[r.value]=(e[r.value]||0)+1,e)),{});e((0,l.Sy)({give:t,get:a})),n([]),setTimeout((()=>{const e=r.map((e=>{const r=(i.get(e.value)||0)-(t[e.value]||0);return r>0?{...e,count:Math.min(e.count,r)}:null})).filter(Boolean);e.length>0&&n(e)}),0)},children:"Make Exchange"})]})}),b=i.Ay.button`
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
`,v=(0,i.Ay)(a.A)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`,f=()=>{const[e,r]=(0,t.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(b,{onClick:()=>r(!0),children:[(0,c.jsx)("span",{className:"emoji",children:"\ud83c\udfe6"}),(0,c.jsx)("span",{className:"text",children:"Money Exchange"})]}),(0,c.jsxs)(v,{show:e,onHide:()=>r(!1),centered:!0,size:"lg",children:[(0,c.jsx)(o.A.Header,{closeButton:!0,children:(0,c.jsx)(o.A.Title,{children:"Change Machine"})}),(0,c.jsx)(o.A.Body,{children:(0,c.jsx)(p,{})})]})]})}},6050:(e,r,n)=>{n.d(r,{A:()=>f});var t=n(5043),i=n(5464),a=n(3003),o=n(4103),s=n(3173),l=n(4282),d=n(5284),c=n(5985),u=n(1676),m=n(579);const h=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,g=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,x=i.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,p=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,b=(e,r)=>{if(!r)return null;const n=c.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},v=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=c.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},f=()=>{const e=(0,a.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,a.d4)((e=>e.flower)),f=(0,a.d4)((e=>e.inventory.equippedItem)),[y,A]=(0,t.useState)(!1),[j,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,m.jsxs)(h,{children:[(0,m.jsx)(g,{clickable:r,onClick:()=>{r&&w(!0)},children:r?b(n,i):null}),r&&(0,m.jsxs)(p,{children:[(0,m.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,m.jsx)(s.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(c.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,m.jsx)(x,{children:r?v(n,i):"An empty pot... ready for something special to grow."}),(0,m.jsx)(l.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?A(!0):(null===f||void 0===f||f.type,e((0,o.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,m.jsxs)(d.A,{show:y,onHide:()=>A(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,m.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(l.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,m.jsx)(l.A,{variant:"danger",onClick:()=>{e((0,o._$)()),e((0,o.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,m.jsxs)(d.A,{show:j,onHide:()=>w(!1),children:[(0,m.jsx)(d.A.Header,{closeButton:!0,children:(0,m.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,m.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,m.jsxs)(d.A.Footer,{children:[(0,m.jsx)(l.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,m.jsx)(l.A,{variant:"primary",onClick:()=>{const r=Object.keys(c.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const a={type:"flower",flowerType:i,growthLevel:n,stage:b(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:c.A[i].weights[t]};e((0,u.Ci)(a)),e((0,o._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>m});var t=n(8139),i=n.n(t),a=n(5043),o=n(7852);function s(e,r){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?r(e,n++):e))}var l=n(579);function d(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function c(e,r){let{min:n,now:t,max:a,label:o,visuallyHidden:s,striped:c,animated:u,className:m,style:h,variant:g,bsPrefix:x,...p}=e;return(0,l.jsx)("div",{ref:r,...p,role:"progressbar",className:i()(m,`${x}-bar`,{[`bg-${g}`]:g,[`${x}-bar-animated`]:u,[`${x}-bar-striped`]:u||c}),style:{width:`${d(t,n,a)}%`,...h},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":a,children:s?(0,l.jsx)("span",{className:"visually-hidden",children:o}):o})}const u=a.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(d.bsPrefix=(0,o.oU)(d.bsPrefix,"progress"),n)return c(d,r);const{min:u,now:m,max:h,label:g,visuallyHidden:x,striped:p,animated:b,bsPrefix:v,variant:f,className:y,children:A,...j}=d;return(0,l.jsx)("div",{ref:r,...j,className:i()(y,v),children:A?s(A,(e=>(0,a.cloneElement)(e,{isChild:!0}))):c({min:u,now:m,max:h,label:g,visuallyHidden:x,striped:p,animated:b,bsPrefix:v,variant:f},r)})}));u.displayName="ProgressBar";const m=u}}]);
//# sourceMappingURL=39.f7a0de61.chunk.js.map