"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[55],{2771:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(5043),o=t(3003),l=t(8680),i=t(9254),a=t(7652),d=t(579);const s=e=>{let{itemConfig:n,onBeforeCollect:t,children:s,renderItem:c}=e;const u=(0,o.wA)(),v=(0,o.d4)((e=>e.inventory.equippedItem)),h=!(0,o.d4)((e=>(0,a.l)(e,n.id))),[x,m]=(0,r.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[c({collected:h,handleCollect:()=>{if(!h){if(t){if(!t(v))return}"card"!==n.type||"card-box"!==(null===v||void 0===v?void 0:v.type)?v?m(!0):u((0,l.Ci)(n)):u((0,l.us)({cardId:n.id}))}}}),(0,d.jsx)(i.A,{show:x,onConfirm:()=>{if("card"===(null===v||void 0===v?void 0:v.type)&&"card-box"===n.type){const e={...n,collectedCards:{[v.id]:!0}};u((0,l.Ci)(e))}else u((0,l._e)({newItem:n}));m(!1)},onCancel:()=>m(!1),itemName:(null===v||void 0===v?void 0:v.name)||"current item",message:`Picking up the ${n.name} will return your ${(null===v||void 0===v?void 0:v.name)||"current item"} to its original location. Continue?`})]})}},7088:(e,n,t)=>{t.d(n,{A:()=>y});t(5043);var r=t(5464),o=t(2771),l=t(3003),i=t(8680),a=(t(4157),t(7258)),d=t(7652),s=t(5348),c=t(7540),u=t(579);const v=r.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,h=r.Ay.div`
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
`,x=(0,r.Ay)(h)`
  width: ${e=>e.value>=25?"3rem":"2.5rem"};
  height: ${e=>e.value>=25?"3rem":"2.5rem"};
  border-radius: 50%;
  background: ${e=>25===e.value?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":"linear-gradient(135deg, #CD7F32, #E6B17F)"};
  border: 2px solid ${e=>25===e.value?"#A0A0A0":"#8B4513"};
  color: ${e=>e.value>=25?"#404040":"#663300"};
  font-size: ${e=>e.value>=25?"1.2rem":"1rem"};
`,m=(0,r.Ay)(h)`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background: ${e=>{switch(e.value){case 1e4:return"linear-gradient(135deg, #849F84, #C1D9C1)";case 5e3:return"linear-gradient(135deg, #E68A00, #FFB84D)";case 2e3:return"linear-gradient(135deg, #008055, #00B377)";case 1e3:return"linear-gradient(135deg, #666699, #8585AD)";default:return"linear-gradient(135deg, #85AD85, #B3D1B3)"}}};
  border: 2px solid ${e=>{switch(e.value){case 1e4:default:return"#5C705C";case 5e3:return"#B36B00";case 2e3:return"#004D33";case 1e3:return"#40406B"}}};
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  font-size: 1.1rem;
`,y=e=>{let{value:n,id:t}=e;const r=(0,l.wA)(),{unlockAchievement:h}=(0,s.k)(),y=((0,l.d4)((e=>e.inventory.equippedItem)),(0,l.d4)((e=>e.inventory.money))),p=(0,l.d4)((e=>(0,d.l)(e,t))),g=(0,l.d4)((e=>e.inventory.coinSlots)),f=t||`currency-${n}`,A={type:"currency",id:f,name:n>=500?`$${n/100} Bill`:`${n}\xa2 Coin`,value:n},b=g[f]||!p,j=n>=500?m:x,C=n>=500?"$"+n/100:`${n}\xa2`;return(0,u.jsx)(o.A,{itemConfig:A,onBeforeCollect:e=>{if(b){if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=y.find((e=>e.value===n));e&&r((0,i.iZ)({id:e.id,slotId:f}))}return!1}if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=(0,c.I)("money");return r((0,i.W8)({value:n,id:e,slotId:f})),!1}const t=n>=500?n/100:n;return h("COIN_TRAVEL"),r((0,a.qX)(t)),!1},renderItem:e=>{let{handleCollect:t}=e;return(0,u.jsx)(v,{children:(0,u.jsx)(j,{collected:b,onClick:t,value:n,children:C})})}})}},4261:(e,n,t)=>{t.d(n,{A:()=>c});t(5043);var r=t(3204),o=t(2771),l=t(4887),i=t(3003),a=t(8680),d=t(5348),s=t(579);const c=()=>{const e=(0,i.wA)(),{unlockAchievement:n}=(0,d.k)(),t=((0,i.d4)((e=>e.inventory.equippedItem)),{type:"wallet",id:"wallet-1",name:"Money Wallet"});return(0,s.jsx)(o.A,{itemConfig:t,onBeforeCollect:r=>"currency"===(null===r||void 0===r?void 0:r.type)?(e((0,a.W8)({value:r.value,id:r.id})),e((0,a.Ci)(t)),!1):(n("WALLET_FOUND"),!0),renderItem:e=>{let{collected:n,handleCollect:t}=e;return(0,s.jsx)(l.M,{children:(0,s.jsx)(l.X,{collected:n,onClick:t,children:(0,s.jsx)(r.lcY,{})})})}})}},4887:(e,n,t)=>{t.d(n,{M:()=>o,X:()=>l});var r=t(5464);const o=r.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,l=r.Ay.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: ${e=>"dark"===e.theme?"#fff":"#000"};
  opacity: ${e=>e.collected?.5:1};
  pointer-events: ${e=>e.collected?"none":"auto"};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${e=>e.collected?"none":"scale(1.1)"};
  }
`},5055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});t(5043),t(7258);var r=t(8628),o=(t(5348),t(6669),t(6218)),l=t(8819),i=t(1908),a=t(4261),d=(t(7088),t(579));const s=()=>(0,d.jsx)(l.Gy,{children:(0,d.jsx)(l.ee,{children:(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)(r.A.Title,{children:"A Strange Shrine"}),(0,d.jsx)(r.A.Text,{children:"You'll need to collect some achievements to unlock the secrets that lie within."}),(0,d.jsx)(l.W0,{children:(0,d.jsxs)(i.A,{requiredCount:0,children:["Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!",(0,d.jsx)(l.W0,{children:(0,d.jsx)(o.A,{targetLevel:10,children:"Level 10"})}),(0,d.jsxs)(i.A,{requiredCount:0,children:["Congratulations! You've earned a special wallet. Use it to store coins! Make sure you're holding the wallet before you click on the coins, otherwise they'll be treated like a button and will transport you away to another level!",(0,d.jsx)(a.A,{}),(0,d.jsx)(l.W0,{children:(0,d.jsx)(o.A,{targetLevel:7,children:"Level 7"})})]})]})}),(0,d.jsx)(r.A.Text,{children:"Wondering how to collect achievements? Why not check out..."}),(0,d.jsx)(l.W0,{children:(0,d.jsx)(o.A,{targetLevel:5,children:"Level 5"})})]})})})},1908:(e,n,t)=>{t.d(n,{A:()=>u});t(5043);var r=t(5464),o=t(3003),l=t(8628),i=t(6481),a=(t(6218),t(579));const d=r.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,s=(0,r.Ay)(l.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isComplete&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}
`,c=r.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isComplete?"gold":"#666"};
`,u=(r.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:n=5,children:t}=e;const r=(0,o.d4)((e=>e.achievements.achievements)),u=Object.keys(r).length,v=u>=n,h=u===Object.keys(i.A).length;return(0,a.jsx)(d,{children:(0,a.jsx)(s,{isComplete:h,children:(0,a.jsxs)(l.A.Body,{children:[(0,a.jsx)(c,{isComplete:v,children:v?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(l.A.Title,{children:"Achievement Shrine"}),(0,a.jsxs)(l.A.Title,{children:[v?"UNLOCKED":"LOCKED"," ",u,"/",n]}),v?(0,a.jsx)(l.A.Text,{children:t}):(0,a.jsxs)(l.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})})},6669:(e,n,t)=>{t.d(n,{A:()=>L});var r=t(5043),o=t(8139),l=t.n(o),i=t(7121),a=t(7852),d=t(2306);function s(e,n){return Array.isArray(e)?e.includes(n):e===n}const c=r.createContext({});c.displayName="AccordionContext";const u=c;var v=t(579);const h=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:i,children:c,eventKey:h,...x}=e;const{activeEventKey:m}=(0,r.useContext)(u);return o=(0,a.oU)(o,"accordion-collapse"),(0,v.jsx)(d.A,{ref:n,in:s(m,h),...x,className:l()(i,o),children:(0,v.jsx)(t,{children:r.Children.only(c)})})}));h.displayName="AccordionCollapse";const x=h,m=r.createContext({eventKey:""});m.displayName="AccordionItemContext";const y=m,p=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:i,onEnter:d,onEntering:s,onEntered:c,onExit:u,onExiting:h,onExited:m,...p}=e;o=(0,a.oU)(o,"accordion-body");const{eventKey:g}=(0,r.useContext)(y);return(0,v.jsx)(x,{eventKey:g,onEnter:d,onEntering:s,onEntered:c,onExit:u,onExiting:h,onExited:m,children:(0,v.jsx)(t,{ref:n,...p,className:l()(i,o)})})}));p.displayName="AccordionBody";const g=p;const f=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:i,onClick:d,...c}=e;o=(0,a.oU)(o,"accordion-button");const{eventKey:h}=(0,r.useContext)(y),x=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:l}=(0,r.useContext)(u);return r=>{let i=e===t?null:e;l&&(i=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(i,r),null==n||n(r)}}(h,d),{activeEventKey:m}=(0,r.useContext)(u);return"button"===t&&(c.type="button"),(0,v.jsx)(t,{ref:n,onClick:x,...c,"aria-expanded":Array.isArray(m)?m.includes(h):h===m,className:l()(i,o,!s(m,h)&&"collapsed")})}));f.displayName="AccordionButton";const A=f,b=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:o,children:i,onClick:d,...s}=e;return r=(0,a.oU)(r,"accordion-header"),(0,v.jsx)(t,{ref:n,...s,className:l()(o,r),children:(0,v.jsx)(A,{onClick:d,children:i})})}));b.displayName="AccordionHeader";const j=b,C=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:i,eventKey:d,...s}=e;o=(0,a.oU)(o,"accordion-item");const c=(0,r.useMemo)((()=>({eventKey:d})),[d]);return(0,v.jsx)(y.Provider,{value:c,children:(0,v.jsx)(t,{ref:n,...s,className:l()(i,o)})})}));C.displayName="AccordionItem";const w=C,k=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:d,className:s,onSelect:c,flush:h,alwaysOpen:x,...m}=(0,i.Zw)(e,{activeKey:"onSelect"}),y=(0,a.oU)(d,"accordion"),p=(0,r.useMemo)((()=>({activeEventKey:o,onSelect:c,alwaysOpen:x})),[o,c,x]);return(0,v.jsx)(u.Provider,{value:p,children:(0,v.jsx)(t,{ref:n,...m,className:l()(s,y,h&&`${y}-flush`)})})}));k.displayName="Accordion";const $=Object.assign(k,{Button:A,Collapse:x,Item:w,Header:j,Body:g});var E=t(5464),N=(t(6218),t(9642));E.Ay.div`
  margin: 0.5rem 0;
`;const B=E.Ay.div`
  padding: 0.5rem;
`,I=(0,E.Ay)($)`
  .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: rgba(0, 0, 0, 0.03);
    box-shadow: none;
  }

  .accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.125);
  }

  .accordion-button::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
`,K=e=>{let{data:n,depth:t=0,path:o=""}=e;return Array.isArray(n)?0===n.length?(0,v.jsx)(B,{children:(0,v.jsx)(N.A,{text:"Keep searching..."})}):"string"===typeof n[0]||r.isValidElement(n[0])?(0,v.jsx)(B,{children:"string"===typeof n[0]?(0,v.jsx)(N.A,{text:n.join(" ")}):n[0]}):(0,v.jsx)(I,{alwaysOpen:!0,children:n.map(((e,n)=>{const r=`${o}-${n}`;return(0,v.jsxs)($.Item,{eventKey:r,children:[(0,v.jsx)($.Header,{}),(0,v.jsx)($.Body,{children:(0,v.jsx)(K,{data:e,depth:t+1,path:r})})]},r)}))}):null},L=K},7540:(e,n,t)=>{t.d(n,{I:()=>o});let r=0;const o=e=>(r++,`${e}-${Math.random().toString(36).substr(2,9)}-${r}`)},7652:(e,n,t)=>{t.d(n,{l:()=>o});const r=(e,n)=>{var t,r,o,l;if((null===(t=e.inventory.equippedItem)||void 0===t?void 0:t.id)===n)return"equipped";if((null===(r=e.inventory.scale)||void 0===r?void 0:r.id)===n)return"scale";const i=e.inventory.bookshelf.findIndex((e=>{var t;return(null===e||void 0===e?void 0:e.id)===n||!("card-box"!==(null===e||void 0===e?void 0:e.type)||null===(t=e.collectedCards)||void 0===t||!t[n])}));return-1!==i?`bookshelf-${i}`:"card-box"===(null===(o=e.inventory.equippedItem)||void 0===o?void 0:o.type)&&null!==(l=e.inventory.equippedItem.collectedCards)&&void 0!==l&&l[n]?"equipped-box":null},o=(e,n)=>(console.log(n,r(e,n)),null===r(e,n))}}]);
//# sourceMappingURL=55.cad599e7.chunk.js.map