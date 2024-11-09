"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[311],{311:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(5043),i=(n(6),n(8628)),o=(n(5348),n(6669),n(6218),n(8819)),s=(n(441),n(9642)),a=n(5464),l=n(3003),c=n(3204),d=n(579);const h=a.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,x=a.Ay.div`
  display: inline-block;
  cursor: ${e=>e.hasKey?"pointer":"not-allowed"};
  font-size: 3rem;
  position: relative;
  opacity: ${e=>e.isOpen?.7:1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${e=>e.hasKey?"scale(1.1)":"none"};
  }
`,u=a.Ay.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  color: gold;
`,p=a.Ay.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  display: ${e=>e.isVisible?"block":"none"};
`,y=e=>{let{children:t,requiredKey:n="key-1"}=e;const[i,o]=(0,r.useState)(!1),[s,a]=(0,r.useState)(!1),y=(0,l.d4)((e=>e.inventory.equippedItem)),m=y&&y[n];return(0,d.jsxs)(h,{children:[(0,d.jsxs)(x,{hasKey:m,isOpen:i,onClick:()=>{m&&!i&&(o(!0),setTimeout((()=>a(!0)),500))},children:[(0,d.jsx)(c.TXh,{}),(0,d.jsx)(u,{children:i?(0,d.jsx)(c.nQ7,{}):(0,d.jsx)(c.JhU,{})})]}),(0,d.jsx)(p,{isVisible:s,children:t})]})};var m=n(1908);const g=()=>(0,d.jsx)(o.Gy,{children:(0,d.jsx)(o.ee,{children:(0,d.jsxs)(i.A.Body,{children:[(0,d.jsx)(i.A.Title,{children:(0,d.jsx)(s.A,{size:"large",text:"Secrets"})}),(0,d.jsx)(i.A.Text,{children:(0,d.jsx)(s.A,{text:"Congratulations. Reaching this level means that you've mastered the basics of this game. However, there\r another secret ability which will unlock a truly magnificently infinite amount of levels!"})}),(0,d.jsx)(i.A.Text,{children:(0,d.jsx)(s.A,{text:"The secret lays inside the box below.  A hint to \r the secret place will be revealed here once you've completed x achievements!"})}),(0,d.jsxs)(m.A,{requiredCount:30,children:[(0,d.jsx)(o.W0,{children:"The key to the box is stored in an extremely secret place! The information that will lead you to the key is hidden in a mysterious level which is thought by some not to exist. A level which equates to the 0th level yet its opposite. A level which is infinitely close yet infinitely far."}),(0,d.jsx)(y,{children:(0,d.jsx)(i.A.Text,{children:(0,d.jsx)(s.A,{text:"Like you know, buttons can be created from anywhere.\r But did you know that these buttons can be collected into your inventory? Just highlight some text to create a button, and \r right click to pick it up! You can carry it around with you, and click it to travel to that level!"})})})]})]})})})},441:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(5043),i=n(5464),o=n(3003),s=n(8680),a=n(9254),l=n(8852),c=n(378),d=n(3888),h=n(5348),x=n(579);const u=i.Ay.div`
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
`,p=i.Ay.div`
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
`,y=i.Ay.div`
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
`,m=i.Ay.div`
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
`,g=i.Ay.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=()=>{const e=(0,o.wA)(),t=(0,o.d4)((e=>e.inventory.equippedItem)),n=(0,o.d4)((e=>e.inventory.scale)),i=(0,o.d4)((e=>e.inventory.money)),[v,f]=(0,r.useState)(!1),{unlockAchievement:b}=(0,h.k)(),A=()=>{switch(null===n||void 0===n?void 0:n.type){case"wallet":return(e=>{let t=150;return e.forEach((e=>{if(e.value>=500)t+=1;else switch(e.value){case 25:t+=6;break;case 10:t+=2;break;case 5:t+=5;break;case 1:t+=3;break;default:t+=0}})),t})(i);case"card-box":return(e=>{let t=1;const n={normal:1,"gold-shiny":1e4,diamond:999999999,"dark-holographic":-.1};for(const r in e.collectedCards)t+=n[c.A[r].rarity];return t})(n);case"card":return 10;case"diamond":return 1;case"black-hole":return 1e3;case"encyclopedia":return 50;case"flower":return n.weight;default:return 0}};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(p,{onClick:()=>{if(n&&!t){if("card-box"===n.type){const t={...n,collectedCards:n.collectedCards||{}};e((0,s.Ci)(t))}else e((0,s.Ci)(n));e((0,s.jt)())}else if(t&&!n)e((0,s.HN)(t)),e((0,s.lS)());else if(t&&n)if("card"===t.type&&"card-box"===n.type)e((0,s.us)({cardId:t.id})),e((0,s.lS)());else if("card-box"===t.type&&"card"===n.type){const r={...t,collectedCards:{...t.collectedCards,[n.id]:!0}};e((0,s.jt)()),e((0,s.Ci)(r))}else f(!0)},children:[(0,x.jsx)(m,{children:(0,x.jsx)(g,{children:n?(0,x.jsx)(l.A,{item:n}):(0,x.jsx)(u,{children:"Empty"})})}),(0,x.jsxs)(y,{onClick:t=>{t.stopPropagation();const n=A();e((0,d.qX)({real:Math.floor(n),imag:0})),b("SCALE_TRAVEL")},children:[A().toFixed(2),"g"]})]}),(0,x.jsx)(a.A,{show:v,onConfirm:()=>{const r=n;e((0,s.HN)(t)),e((0,s.Ci)(r)),f(!1)},onCancel:()=>f(!1),message:"Swap the equipped item with the item on the scale?"})]})}},1908:(e,t,n)=>{n.d(t,{A:()=>x});n(5043);var r=n(5464),i=n(3003),o=n(8628),s=n(6481),a=(n(6218),n(2520)),l=n(579);const c=r.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,r.Ay)(o.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isComplete&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}
`,h=r.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isComplete?"gold":"#666"};
`,x=(r.Ay.div`
  max-height: ${e=>e.show?"500px":"0"};
  opacity: ${e=>e.show?"1":"0"};
  overflow: hidden;
  transition: all 0.5s ease;
`,e=>{let{requiredCount:t=5,children:n}=e;const r=(0,i.d4)((e=>e.achievements.achievements)),x=Object.keys(r).length,u=Object.keys(s.A).length,p=!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=t,y=x===u;return(0,l.jsx)(c,{children:(0,l.jsx)(d,{isComplete:y,children:(0,l.jsxs)(o.A.Body,{children:[(0,l.jsx)(h,{isComplete:p,children:p?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(o.A.Title,{children:"Achievement Shrine"}),(0,l.jsx)(o.A.Title,{children:p?"UNLOCKED":"LOCKED"+{achievementCount:x}/{requiredCount:t}}),p?(0,l.jsx)(o.A.Text,{children:n}):(0,l.jsxs)(o.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})})},6669:(e,t,n)=>{n.d(t,{A:()=>$});var r=n(5043),i=n(8139),o=n.n(i),s=n(7121),a=n(7852),l=n(2306);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=r.createContext({});d.displayName="AccordionContext";const h=d;var x=n(579);const u=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:s,children:d,eventKey:u,...p}=e;const{activeEventKey:y}=(0,r.useContext)(h);return i=(0,a.oU)(i,"accordion-collapse"),(0,x.jsx)(l.A,{ref:t,in:c(y,u),...p,className:o()(s,i),children:(0,x.jsx)(n,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const p=u,y=r.createContext({eventKey:""});y.displayName="AccordionItemContext";const m=y,g=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:s,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:y,...g}=e;i=(0,a.oU)(i,"accordion-body");const{eventKey:v}=(0,r.useContext)(m);return(0,x.jsx)(p,{eventKey:v,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:y,children:(0,x.jsx)(n,{ref:t,...g,className:o()(s,i)})})}));g.displayName="AccordionBody";const v=g;const f=r.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:i,className:s,onClick:l,...d}=e;i=(0,a.oU)(i,"accordion-button");const{eventKey:u}=(0,r.useContext)(m),p=function(e,t){const{activeEventKey:n,onSelect:i,alwaysOpen:o}=(0,r.useContext)(h);return r=>{let s=e===n?null:e;o&&(s=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==i||i(s,r),null==t||t(r)}}(u,l),{activeEventKey:y}=(0,r.useContext)(h);return"button"===n&&(d.type="button"),(0,x.jsx)(n,{ref:t,onClick:p,...d,"aria-expanded":Array.isArray(y)?y.includes(u):u===y,className:o()(s,i,!c(y,u)&&"collapsed")})}));f.displayName="AccordionButton";const b=f,A=r.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:r,className:i,children:s,onClick:l,...c}=e;return r=(0,a.oU)(r,"accordion-header"),(0,x.jsx)(n,{ref:t,...c,className:o()(i,r),children:(0,x.jsx)(b,{onClick:l,children:s})})}));A.displayName="AccordionHeader";const j=A,w=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:s,eventKey:l,...c}=e;i=(0,a.oU)(i,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:l})),[l]);return(0,x.jsx)(m.Provider,{value:d,children:(0,x.jsx)(n,{ref:t,...c,className:o()(s,i)})})}));w.displayName="AccordionItem";const k=w,C=r.forwardRef(((e,t)=>{const{as:n="div",activeKey:i,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:p,...y}=(0,s.Zw)(e,{activeKey:"onSelect"}),m=(0,a.oU)(l,"accordion"),g=(0,r.useMemo)((()=>({activeEventKey:i,onSelect:d,alwaysOpen:p})),[i,d,p]);return(0,x.jsx)(h.Provider,{value:g,children:(0,x.jsx)(n,{ref:t,...y,className:o()(c,m,u&&`${m}-flush`)})})}));C.displayName="Accordion";const E=Object.assign(C,{Button:b,Collapse:p,Item:k,Header:j,Body:v});var N=n(5464),K=(n(6218),n(9642));N.Ay.div`
  margin: 0.5rem 0;
`;const S=N.Ay.div`
  padding: 0.5rem;
`,T=(0,N.Ay)(E)`
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
`,O=e=>{let{data:t,depth:n=0,path:i=""}=e;return Array.isArray(t)?0===t.length?(0,x.jsx)(S,{children:(0,x.jsx)(K.A,{text:"Keep searching..."})}):"string"===typeof t[0]||r.isValidElement(t[0])?(0,x.jsx)(S,{children:"string"===typeof t[0]?(0,x.jsx)(K.A,{text:t.join(" ")}):t[0]}):(0,x.jsx)(T,{alwaysOpen:!0,children:t.map(((e,t)=>{const r=`${i}-${t}`;return(0,x.jsxs)(E.Item,{eventKey:r,children:[(0,x.jsx)(E.Header,{}),(0,x.jsx)(E.Body,{children:(0,x.jsx)(O,{data:e,depth:n+1,path:r})})]},r)}))}):null},$=O}}]);
//# sourceMappingURL=311.7287ff46.chunk.js.map