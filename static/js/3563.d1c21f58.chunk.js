"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3563],{2771:(e,r,t)=>{t.d(r,{A:()=>s});var i=t(5043),o=t(3003),n=t(8680),d=t(9254),a=t(7652),l=t(579);const s=e=>{let{itemConfig:r,onBeforeCollect:t,children:s,renderItem:c}=e;const m=(0,o.wA)(),u=(0,o.d4)((e=>e.inventory.equippedItem)),p=!(0,o.d4)((e=>(0,a.l)(e,r.id))),[g,h]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[c({collected:p,handleCollect:()=>{if(!p){if(t){if(!t(u))return}"card"!==r.type||"card-box"!==(null===u||void 0===u?void 0:u.type)?u?h(!0):m((0,n.Ci)(r)):m((0,n.us)({cardId:r.id}))}}}),(0,l.jsx)(d.A,{show:g,onConfirm:()=>{if("card"===(null===u||void 0===u?void 0:u.type)&&"card-box"===r.type){const e={...r,collectedCards:{[u.id]:!0}};m((0,n.Ci)(e))}else m((0,n._e)({newItem:r}));h(!1)},onCancel:()=>h(!1),itemName:(null===u||void 0===u?void 0:u.name)||"current item",message:`Picking up the ${r.name} will return your ${(null===u||void 0===u?void 0:u.name)||"current item"} to its original location. Continue?`})]})}},9498:(e,r,t)=>{t.d(r,{A:()=>u});t(5043);var i=t(5464),o=t(3003),n=t(8680),d=t(2771),a=t(2094),l=t(378),s=t(579);const c=i.i7`
  0%, 100% { transform: translate(0, 0) rotate(-4deg); }
  25% { transform: translate(0, -10px) rotate(4deg); }
  50% { transform: translate(0, 0px) rotate(4deg); }
  75% { transform: translate(0, -10px) rotate(-4deg); }
`,m=i.Ay.div`
  animation: ${c} 6s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`,u=e=>{var r;let{cardId:t,value:i,suit:c}=e;const u=(0,o.wA)(),p=(null===(r=l.A[t])||void 0===r?void 0:r.rarity)||"normal",g=(0,a.aU)(p),h=((0,o.d4)((e=>e.inventory.equippedItem)),{type:"card",id:t,name:`${i} of ${c}`,suit:c,value:i});return(0,s.jsx)(d.A,{itemConfig:h,onBeforeCollect:e=>"card-box"!==(null===e||void 0===e?void 0:e.type)||(u((0,n.us)({cardId:t})),!1),renderItem:e=>{let{collected:r,handleCollect:t}=e;return(0,s.jsx)(m,{children:(0,s.jsxs)(g,{collected:r,onClick:()=>{console.log("clicked"),t()},className:c,children:[i," ","hearts"===c?"\u2665":"diamonds"===c?"\u2666":"clubs"===c?"\u2663":"\u2660"]})})}})}},3563:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var i=t(5043),o=(t(3454),t(8628)),n=(t(6218),t(6050),t(5348),t(8819)),d=(t(1908),t(9498),t(363),t(5464)),a=t(3003),l=t(614);const s={INTEGERS:"Integers",REALS:"Reals",COMPLEX:"Complex",BEYOND:"Beyond"},c=e=>{const r=(0,l.RP)(e);if("object"!==typeof r||!("real"in r))return null;return`hsl(${(Math.atan2(r.imag,r.real)+Math.PI)/(2*Math.PI)*360}, 70%, 50%)`};var m=t(579);const u=d.Ay.div`
  background: ${e=>"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
`,p=d.Ay.div`
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  padding: 0 1rem;
`,g=d.Ay.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: ${e=>e.active?"dark"===e.theme?"rgba(255, 215, 0, 0.2)":"rgba(218, 165, 32, 0.2)":"transparent"};
  color: ${e=>e.disabled?"dark"===e.theme?"#666":"#999":"dark"===e.theme?"gold":"#DAA520"};
  cursor: ${e=>e.disabled?"default":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  position: relative;
  margin-bottom: -2px;
  z-index: ${e=>e.active?2:1};

  &:hover {
    background: ${e=>!e.disabled&&("dark"===e.theme?"rgba(255, 215, 0, 0.1)":"rgba(218, 165, 32, 0.1)")};
  }

  ${e=>e.active&&`\n    background: ${"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};\n    border-bottom: 2px solid ${"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};\n  `}
`,h=(d.Ay.div`
  padding-top: 1.5rem;
`,d.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: ${e=>e.shouldScroll?"auto":"hidden"};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`),v=d.Ay.div`
  background: ${e=>e.complexColor||("dark"===e.theme?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)")};
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  transition: all 0.2s ease;
  color: ${e=>e.complexColor?"#fff":"inherit"};
`,b=(d.Ay.div`
  color: ${e=>"dark"===e.theme?"#999":"#666"};
  font-style: italic;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 2em;
`,d.Ay.div`
  color: ${e=>"dark"===e.theme?"#666":"#999"};
  text-align: center;
  font-style: italic;
  padding: 2rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`),x=d.Ay.div`
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: ${e=>"dark"===e.theme?"#444":"#ccc"};
`,y=()=>{var e;const[r,t]=(0,i.useState)(s.INTEGERS),o=(0,a.d4)((e=>e.theme)),n=(0,a.d4)((e=>e.game.visitedLevels)).reduce(((e,r)=>{const t=(e=>{if("Demo"===e||e.includes("Infinity"))return s.BEYOND;const r=(0,l.RP)(e);return"object"===typeof r&&"real"in r?0===r.imag?Number.isInteger(r.real)?s.INTEGERS:s.REALS:s.COMPLEX:s.INTEGERS})(r);return e[t]||(e[t]=[]),e[t].push(r),e}),{}),d=e=>{var r;return(null===(r=n[e])||void 0===r?void 0:r.length)>0};return(0,m.jsxs)(u,{theme:o,children:[(0,m.jsx)(p,{children:Object.values(s).map((e=>(0,m.jsx)(g,{active:r===e,disabled:!d(e),onClick:()=>t(e),theme:o,children:d(e)?e:"???"},e)))}),d(r)?(0,m.jsx)(h,{shouldScroll:(null===(e=n[r])||void 0===e?void 0:e.length)>12,children:(n[r]||[]).sort(((e,r)=>{const t=(0,l.RP)(e),i=(0,l.RP)(r);return"string"===typeof t||"string"===typeof i?e.localeCompare(r):"object"===typeof t&&"object"===typeof i?t.real!==i.real?t.real-i.real:t.imag-i.imag:Number(t)-Number(i)})).map((e=>(0,m.jsx)(v,{theme:o,complexColor:r===s.COMPLEX?c(e):null,children:(0,l.eI)(e)},e)))}):(0,m.jsxs)(b,{theme:o,children:[(0,m.jsx)(x,{theme:o,children:"?"}),"Explore more distant realms to unlock this dimension..."]})]})},f=()=>(0,m.jsx)(n.Gy,{children:(0,m.jsx)(n.ee,{children:(0,m.jsxs)(o.A.Body,{children:[(0,m.jsx)(o.A.Title,{children:"why is this here?"}),(0,m.jsx)(o.A.Text,{children:"why is this here?"}),(0,m.jsx)(y,{})]})})})},7652:(e,r,t)=>{t.d(r,{l:()=>i});const i=(e,r)=>null===((e,r)=>{var t,i,o,n;if((null===(t=e.inventory.equippedItem)||void 0===t?void 0:t.id)===r)return"equipped";if((null===(i=e.inventory.scale)||void 0===i?void 0:i.id)===r)return"scale";const d=e.inventory.bookshelf.findIndex((e=>{var t;return(null===e||void 0===e?void 0:e.id)===r||!("card-box"!==(null===e||void 0===e?void 0:e.type)||null===(t=e.collectedCards)||void 0===t||!t[r])}));return-1!==d?`bookshelf-${d}`:"card-box"===(null===(o=e.inventory.equippedItem)||void 0===o?void 0:o.type)&&null!==(n=e.inventory.equippedItem.collectedCards)&&void 0!==n&&n[r]?"equipped-box":null})(e,r)}}]);
//# sourceMappingURL=3563.d1c21f58.chunk.js.map