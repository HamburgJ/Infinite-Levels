"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[7570],{2771:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(5043),i=t(3003),o=t(8680),a=t(9254),l=t(7652),s=t(579);const d=e=>{let{itemConfig:n,onBeforeCollect:t,children:d,renderItem:c}=e;const u=(0,i.wA)(),x=(0,i.d4)((e=>e.inventory.equippedItem)),p=!(0,i.d4)((e=>(0,l.l)(e,n.id))),[h,v]=(0,r.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[c({collected:p,handleCollect:()=>{if(!p){if(t){if(!t(x))return}"card"!==n.type||"card-box"!==(null===x||void 0===x?void 0:x.type)?x?v(!0):u((0,o.Ci)(n)):u((0,o.us)({cardId:n.id}))}}}),(0,s.jsx)(a.A,{show:h,onConfirm:()=>{if("card"===(null===x||void 0===x?void 0:x.type)&&"card-box"===n.type){const e={...n,collectedCards:{[x.id]:!0}};u((0,o.Ci)(e))}else u((0,o._e)({newItem:n}));v(!1)},onCancel:()=>v(!1),itemName:(null===x||void 0===x?void 0:x.name)||"current item",message:`Picking up the ${n.name} will return your ${(null===x||void 0===x?void 0:x.name)||"current item"} to its original location. Continue?`})]})}},7088:(e,n,t)=>{t.d(n,{A:()=>y});t(5043);var r=t(5464),i=t(2771),o=t(3003),a=t(8680),l=(t(4157),t(6)),s=t(7652),d=t(5348),c=t(7540),u=t(579);const x=r.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,p=r.Ay.div`
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
`,h=(0,r.Ay)(p)`
  width: ${e=>e.value>=25?"3rem":"2.5rem"};
  height: ${e=>e.value>=25?"3rem":"2.5rem"};
  border-radius: 50%;
  background: ${e=>25===e.value?"linear-gradient(135deg, #C0C0C0, #E8E8E8)":"linear-gradient(135deg, #CD7F32, #E6B17F)"};
  border: 2px solid ${e=>25===e.value?"#A0A0A0":"#8B4513"};
  color: ${e=>e.value>=25?"#404040":"#663300"};
  font-size: ${e=>e.value>=25?"1.2rem":"1rem"};
`,v=(0,r.Ay)(p)`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background: ${e=>{switch(e.value){case 1e4:return"linear-gradient(135deg, #849F84, #C1D9C1)";case 5e3:return"linear-gradient(135deg, #E68A00, #FFB84D)";case 2e3:return"linear-gradient(135deg, #008055, #00B377)";case 1e3:return"linear-gradient(135deg, #666699, #8585AD)";default:return"linear-gradient(135deg, #85AD85, #B3D1B3)"}}};
  border: 2px solid ${e=>{switch(e.value){case 1e4:default:return"#5C705C";case 5e3:return"#B36B00";case 2e3:return"#004D33";case 1e3:return"#40406B"}}};
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  font-size: 1.1rem;
`,y=e=>{let{value:n,id:t}=e;const r=(0,o.wA)(),{unlockAchievement:p}=(0,d.k)(),y=((0,o.d4)((e=>e.inventory.equippedItem)),(0,o.d4)((e=>e.inventory.money))),m=(0,o.d4)((e=>(0,s.l)(e,t))),f=(0,o.d4)((e=>e.inventory.coinSlots)),g=t||`currency-${n}`,b={type:"currency",id:g,name:n>=500?`$${n/100} Bill`:`${n}\xa2 Coin`,value:n},A=f[g]||!m,j=n>=500?v:h,w=n>=500?"$"+n/100:`${n}\xa2`;return(0,u.jsx)(i.A,{itemConfig:b,onBeforeCollect:e=>{if(A){if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=y.find((e=>e.value===n));e&&r((0,a.iZ)({id:e.id,slotId:g}))}return!1}if("wallet"===(null===e||void 0===e?void 0:e.type)){const e=(0,c.I)("money");return r((0,a.W8)({value:n,id:e,slotId:g})),!1}const t=n>=500?n/100:n;return p("COIN_TRAVEL"),r((0,l.qX)(t)),!1},renderItem:e=>{let{handleCollect:t}=e;return(0,u.jsx)(x,{children:(0,u.jsx)(j,{collected:A,onClick:t,value:n,children:w})})}})}},7570:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(5043);var r=t(5464),i=(t(6),t(8628)),o=t(5348),a=(t(6669),t(6218)),l=t(8819),s=t(441),d=t(7088),c=t(579);const u=r.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`,x=()=>{const{unlockAchievement:e}=(0,o.k)();return(0,c.jsx)(l.Gy,{children:(0,c.jsx)(l.ee,{children:(0,c.jsxs)(i.A.Body,{children:[(0,c.jsx)(i.A.Title,{children:"Basic Traveling Techniques"}),(0,c.jsxs)(i.A.Text,{children:["Be on the lookout for buttons hidden ",(0,c.jsx)("span",{style:{fontStyle:"italic"},children:"in plain sight"}),". Anything which ",(0,c.jsx)("span",{style:{fontStyle:"italic"},children:"contains a number"})," is could be a button!"]}),(0,c.jsx)(i.A.Text,{children:"Take look at these coins, for instance. They might not look like they're buttons, but they are!"}),(0,c.jsxs)(u,{children:[(0,c.jsx)(d.A,{value:5,id:"initial-5c"}),(0,c.jsx)(d.A,{value:1,id:"initial-1c"}),(0,c.jsx)(d.A,{value:1,id:"initial-1c2"})]}),(0,c.jsx)(i.A.Text,{children:"And here's a scale. Its screen is a secret button too!"}),(0,c.jsx)(l.W0,{children:(0,c.jsx)(s.A,{})}),(0,c.jsx)(l.W0,{children:(0,c.jsx)(a.A,{targetLevel:4,children:"Level 4"})})]})})})}},441:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(5043),i=t(5464),o=t(3003),a=t(8680),l=t(9254),s=t(8852),d=t(378),c=t(3888),u=t(5348),x=t(579);const p=i.Ay.div`
  width: 80px;
  height: 80px;
  border: 3px dashed #666;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`,h=i.Ay.div`
  width: 280px;
  height: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #2c3e50, #34495e);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`,v=i.Ay.div`
  width: 240px;
  height: 40px;
  background: #1a1a1a;
  border-radius: 8px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  font-family: 'Digital', monospace;
  color: #00ff00;
  font-size: 24px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #2a2a2a;
  }
`,y=i.Ay.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(135deg, #95a5a6, #bdc3c7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`,m=i.Ay.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=()=>{const e=(0,o.wA)(),n=(0,o.d4)((e=>e.inventory.equippedItem)),t=(0,o.d4)((e=>e.inventory.scale)),i=(0,o.d4)((e=>e.inventory.money)),[f,g]=(0,r.useState)(!1),{unlockAchievement:b}=(0,u.k)(),A=()=>{switch(null===t||void 0===t?void 0:t.type){case"wallet":return(e=>{let n=150;return e.forEach((e=>{if(e.value>=500)n+=1;else switch(e.value){case 25:n+=6;break;case 10:n+=2;break;case 5:n+=5;break;case 1:n+=3;break;default:n+=0}})),n})(i);case"card-box":return(e=>{let n=1;const t={normal:1,"gold-shiny":1e4,diamond:999999999,"dark-holographic":-.1};for(const r in e.collectedCards)n+=t[d.A[r].rarity];return n})(t);case"card":return 10;case"diamond":return 1;case"black-hole":return 1e3;case"encyclopedia":return 50;case"flower":return t.weight;default:return 0}};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(h,{onClick:()=>{if(t&&!n){if("card-box"===t.type){const n={...t,collectedCards:t.collectedCards||{}};e((0,a.Ci)(n))}else e((0,a.Ci)(t));e((0,a.jt)())}else if(n&&!t)e((0,a.HN)(n)),e((0,a.lS)());else if(n&&t)if("card"===n.type&&"card-box"===t.type)e((0,a.us)({cardId:n.id})),e((0,a.lS)());else if("card-box"===n.type&&"card"===t.type){const r={...n,collectedCards:{...n.collectedCards,[t.id]:!0}};e((0,a.jt)()),e((0,a.Ci)(r))}else g(!0)},children:[(0,x.jsx)(y,{children:(0,x.jsx)(m,{children:t?(0,x.jsx)(s.A,{item:t}):(0,x.jsx)(p,{children:"Empty"})})}),(0,x.jsxs)(v,{onClick:n=>{n.stopPropagation();const t=A();e((0,c.qX)({real:Math.floor(t),imag:0})),b("SCALE_TRAVEL")},children:[A().toFixed(2),"g"]})]}),(0,x.jsx)(l.A,{show:f,onConfirm:()=>{const r=t;e((0,a.HN)(n)),e((0,a.Ci)(r)),g(!1)},onCancel:()=>g(!1),message:"Swap the equipped item with the item on the scale?"})]})}},6669:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(5043),i=t(8139),o=t.n(i),a=t(7121),l=t(7852),s=t(2306);function d(e,n){return Array.isArray(e)?e.includes(n):e===n}const c=r.createContext({});c.displayName="AccordionContext";const u=c;var x=t(579);const p=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:i,className:a,children:c,eventKey:p,...h}=e;const{activeEventKey:v}=(0,r.useContext)(u);return i=(0,l.oU)(i,"accordion-collapse"),(0,x.jsx)(s.A,{ref:n,in:d(v,p),...h,className:o()(a,i),children:(0,x.jsx)(t,{children:r.Children.only(c)})})}));p.displayName="AccordionCollapse";const h=p,v=r.createContext({eventKey:""});v.displayName="AccordionItemContext";const y=v,m=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:i,className:a,onEnter:s,onEntering:d,onEntered:c,onExit:u,onExiting:p,onExited:v,...m}=e;i=(0,l.oU)(i,"accordion-body");const{eventKey:f}=(0,r.useContext)(y);return(0,x.jsx)(h,{eventKey:f,onEnter:s,onEntering:d,onEntered:c,onExit:u,onExiting:p,onExited:v,children:(0,x.jsx)(t,{ref:n,...m,className:o()(a,i)})})}));m.displayName="AccordionBody";const f=m;const g=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:i,className:a,onClick:s,...c}=e;i=(0,l.oU)(i,"accordion-button");const{eventKey:p}=(0,r.useContext)(y),h=function(e,n){const{activeEventKey:t,onSelect:i,alwaysOpen:o}=(0,r.useContext)(u);return r=>{let a=e===t?null:e;o&&(a=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==i||i(a,r),null==n||n(r)}}(p,s),{activeEventKey:v}=(0,r.useContext)(u);return"button"===t&&(c.type="button"),(0,x.jsx)(t,{ref:n,onClick:h,...c,"aria-expanded":Array.isArray(v)?v.includes(p):p===v,className:o()(a,i,!d(v,p)&&"collapsed")})}));g.displayName="AccordionButton";const b=g,A=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:i,children:a,onClick:s,...d}=e;return r=(0,l.oU)(r,"accordion-header"),(0,x.jsx)(t,{ref:n,...d,className:o()(i,r),children:(0,x.jsx)(b,{onClick:s,children:a})})}));A.displayName="AccordionHeader";const j=A,w=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:i,className:a,eventKey:s,...d}=e;i=(0,l.oU)(i,"accordion-item");const c=(0,r.useMemo)((()=>({eventKey:s})),[s]);return(0,x.jsx)(y.Provider,{value:c,children:(0,x.jsx)(t,{ref:n,...d,className:o()(a,i)})})}));w.displayName="AccordionItem";const C=w,k=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:i,bsPrefix:s,className:d,onSelect:c,flush:p,alwaysOpen:h,...v}=(0,a.Zw)(e,{activeKey:"onSelect"}),y=(0,l.oU)(s,"accordion"),m=(0,r.useMemo)((()=>({activeEventKey:i,onSelect:c,alwaysOpen:h})),[i,c,h]);return(0,x.jsx)(u.Provider,{value:m,children:(0,x.jsx)(t,{ref:n,...v,className:o()(d,y,p&&`${y}-flush`)})})}));k.displayName="Accordion";const E=Object.assign(k,{Button:b,Collapse:h,Item:C,Header:j,Body:f});var N=t(5464),$=(t(6218),t(9642));N.Ay.div`
  margin: 0.5rem 0;
`;const B=N.Ay.div`
  padding: 0.5rem;
`,I=(0,N.Ay)(E)`
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
`,K=e=>{let{data:n,depth:t=0,path:i=""}=e;return Array.isArray(n)?0===n.length?(0,x.jsx)(B,{children:(0,x.jsx)($.A,{text:"Keep searching..."})}):"string"===typeof n[0]||r.isValidElement(n[0])?(0,x.jsx)(B,{children:"string"===typeof n[0]?(0,x.jsx)($.A,{text:n.join(" ")}):n[0]}):(0,x.jsx)(I,{alwaysOpen:!0,children:n.map(((e,n)=>{const r=`${i}-${n}`;return(0,x.jsxs)(E.Item,{eventKey:r,children:[(0,x.jsx)(E.Header,{}),(0,x.jsx)(E.Body,{children:(0,x.jsx)(K,{data:e,depth:t+1,path:r})})]},r)}))}):null},S=K},7540:(e,n,t)=>{t.d(n,{I:()=>i});let r=0;const i=e=>(r++,`${e}-${Math.random().toString(36).substr(2,9)}-${r}`)},7652:(e,n,t)=>{t.d(n,{l:()=>r});const r=(e,n)=>null===((e,n)=>{var t,r,i,o;if((null===(t=e.inventory.equippedItem)||void 0===t?void 0:t.id)===n)return"equipped";if((null===(r=e.inventory.scale)||void 0===r?void 0:r.id)===n)return"scale";const a=e.inventory.bookshelf.findIndex((e=>{var t;return(null===e||void 0===e?void 0:e.id)===n||!("card-box"!==(null===e||void 0===e?void 0:e.type)||null===(t=e.collectedCards)||void 0===t||!t[n])}));return-1!==a?`bookshelf-${a}`:"card-box"===(null===(i=e.inventory.equippedItem)||void 0===i?void 0:i.type)&&null!==(o=e.inventory.equippedItem.collectedCards)&&void 0!==o&&o[n]?"equipped-box":null})(e,n)}}]);
//# sourceMappingURL=7570.d6cda1ef.chunk.js.map