"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[311],{311:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(5043),r=(n(2293),n(8628)),s=(n(5348),n(6669),n(6218)),o=n(8819),a=(n(441),n(9642)),l=n(5464),c=n(3003),d=n(3204),h=n(579);const x=l.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,u=l.Ay.div`
  display: inline-block;
  cursor: ${e=>e.hasKey?"pointer":"not-allowed"};
  font-size: 3rem;
  position: relative;
  opacity: ${e=>e.isOpen?.7:1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${e=>e.hasKey?"scale(1.1)":"none"};
  }
`,m=l.Ay.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  color: gold;
`,v=l.Ay.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  display: ${e=>e.isVisible?"block":"none"};
`,y=e=>{let{children:t,requiredKey:n="key-1"}=e;const[r,s]=(0,i.useState)(!1),[o,a]=(0,i.useState)(!1),l=(0,c.d4)((e=>e.inventory.equippedItem)),y=l&&l[n];return(0,h.jsxs)(x,{children:[(0,h.jsxs)(u,{hasKey:y,isOpen:r,onClick:()=>{y&&!r&&(s(!0),setTimeout((()=>a(!0)),500))},children:[(0,h.jsx)(d.TXh,{}),(0,h.jsx)(m,{children:r?(0,h.jsx)(d.nQ7,{}):(0,h.jsx)(d.JhU,{})})]}),(0,h.jsx)(v,{isVisible:o,children:t})]})};var g=n(1908);const p=()=>(0,h.jsx)(o.Gy,{children:(0,h.jsx)(o.ee,{children:(0,h.jsxs)(r.A.Body,{children:[(0,h.jsx)(r.A.Title,{children:(0,h.jsx)(a.A,{size:"large",text:"Secrets"})}),(0,h.jsx)(r.A.Text,{children:(0,h.jsx)(a.A,{text:"Congratulations. Reaching this level means that you've mastered the basics of this game. However, there\r another secret ability which will unlock a truly magnificently infinite amount of levels!"})}),(0,h.jsx)(r.A.Text,{children:(0,h.jsx)(a.A,{text:"The secret lays inside the box below.  A hint to \r the secret place will be revealed here once you've completed x achievements!"})}),(0,h.jsxs)(g.A,{requiredCount:30,children:[(0,h.jsx)(o.W0,{children:"The key to the box is stored in an extremely secret place! The information that will lead you to the key is hidden in a mysterious level which is thought by some not to exist. A level which equates to the 0th level yet its opposite. A level which is infinitely close yet infinitely far."}),(0,h.jsx)(y,{children:(0,h.jsx)(r.A.Text,{children:(0,h.jsx)(a.A,{text:"Like you know, buttons can be created from anywhere.\r But did you know that these buttons can be collected into your inventory? Just highlight some text to create a button, and \r right click to pick it up! You can carry it around with you, and click it to travel to that level!"})})})]}),(0,h.jsx)(o.W0,{children:(0,h.jsx)(s.A,{targetLevel:3,children:"Level 3"})})]})})})},1908:(e,t,n)=>{n.d(t,{A:()=>x});n(5043);var i=n(5464),r=n(3003),s=n(8628),o=(n(6481),n(6218),n(2520)),a=n(579);const l=i.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,i.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=i.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,x=e=>{let{requiredCount:t=null,maximumCount:n=null,children:i,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,r.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,v=null!==n,y=v&&m>n,g=!v&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||m>=t),p=v?!y:g;return(0,a.jsx)(l,{children:(0,a.jsx)(c,{isComplete:p,isOverLimit:y,isMaxShrine:v,children:(0,a.jsxs)(s.A.Body,{children:[(0,a.jsx)(d,{isComplete:p,isOverLimit:y,isMaxShrine:v,children:v?"\ud83d\udd2e":p?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(s.A.Title,{children:v?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(h,{isOverLimit:y,children:v?(0,a.jsxs)(a.Fragment,{children:["Current: ",m," / Maximum: ",n]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",m," / ",t]})}),v?y?(0,a.jsx)(s.A.Text,{className:"text-danger",children:x}):(0,a.jsx)(s.A.Text,{children:i}):g?(0,a.jsx)(s.A.Text,{children:i}):(0,a.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},6669:(e,t,n)=>{n.d(t,{A:()=>$});var i=n(5043),r=n(8139),s=n.n(r),o=n(7121),a=n(7852),l=n(2306);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=i.createContext({});d.displayName="AccordionContext";const h=d;var x=n(579);const u=i.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:o,children:d,eventKey:u,...m}=e;const{activeEventKey:v}=(0,i.useContext)(h);return r=(0,a.oU)(r,"accordion-collapse"),(0,x.jsx)(l.A,{ref:t,in:c(v,u),...m,className:s()(o,r),children:(0,x.jsx)(n,{children:i.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,v=i.createContext({eventKey:""});v.displayName="AccordionItemContext";const y=v,g=i.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:o,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:v,...g}=e;r=(0,a.oU)(r,"accordion-body");const{eventKey:p}=(0,i.useContext)(y);return(0,x.jsx)(m,{eventKey:p,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:v,children:(0,x.jsx)(n,{ref:t,...g,className:s()(o,r)})})}));g.displayName="AccordionBody";const p=g;const b=i.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:r,className:o,onClick:l,...d}=e;r=(0,a.oU)(r,"accordion-button");const{eventKey:u}=(0,i.useContext)(y),m=function(e,t){const{activeEventKey:n,onSelect:r,alwaysOpen:s}=(0,i.useContext)(h);return i=>{let o=e===n?null:e;s&&(o=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==r||r(o,i),null==t||t(i)}}(u,l),{activeEventKey:v}=(0,i.useContext)(h);return"button"===n&&(d.type="button"),(0,x.jsx)(n,{ref:t,onClick:m,...d,"aria-expanded":Array.isArray(v)?v.includes(u):u===v,className:s()(o,r,!c(v,u)&&"collapsed")})}));b.displayName="AccordionButton";const f=b,j=i.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:i,className:r,children:o,onClick:l,...c}=e;return i=(0,a.oU)(i,"accordion-header"),(0,x.jsx)(n,{ref:t,...c,className:s()(r,i),children:(0,x.jsx)(f,{onClick:l,children:o})})}));j.displayName="AccordionHeader";const A=j,w=i.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:o,eventKey:l,...c}=e;r=(0,a.oU)(r,"accordion-item");const d=(0,i.useMemo)((()=>({eventKey:l})),[l]);return(0,x.jsx)(y.Provider,{value:d,children:(0,x.jsx)(n,{ref:t,...c,className:s()(o,r)})})}));w.displayName="AccordionItem";const k=w,C=i.forwardRef(((e,t)=>{const{as:n="div",activeKey:r,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...v}=(0,o.Zw)(e,{activeKey:"onSelect"}),y=(0,a.oU)(l,"accordion"),g=(0,i.useMemo)((()=>({activeEventKey:r,onSelect:d,alwaysOpen:m})),[r,d,m]);return(0,x.jsx)(h.Provider,{value:g,children:(0,x.jsx)(n,{ref:t,...v,className:s()(c,y,u&&`${y}-flush`)})})}));C.displayName="Accordion";const N=Object.assign(C,{Button:f,Collapse:m,Item:k,Header:A,Body:p});var K=n(5464),S=n(9642);K.Ay.div`
  margin: 0.5rem 0;
`;const E=K.Ay.div`
  padding: 0.5rem;
`,T=(0,K.Ay)(N)`
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
`,O=e=>{let{data:t,openSections:n=[],visitedSections:r=[],onToggle:s,depth:o=0,path:a=""}=e;return Array.isArray(t)?0===t.length?(0,x.jsx)(E,{children:(0,x.jsx)(S.A,{text:"Keep searching..."})}):"string"===typeof t[0]||i.isValidElement(t[0])?(0,x.jsx)(E,{children:"string"===typeof t[0]?(0,x.jsx)(S.A,{text:t.join(" ")}):t[0]}):(0,x.jsx)(T,{activeKey:n.filter((e=>e.startsWith(a))),alwaysOpen:!0,children:t.map(((e,t)=>{const i=a?`${a}-${t}`:`${t}`,l=r.includes(i);return(0,x.jsxs)(N.Item,{eventKey:i,className:l?"visited":"",children:[(0,x.jsx)(N.Header,{onClick:()=>s(i)}),(0,x.jsx)(N.Body,{children:(0,x.jsx)(O,{data:e,openSections:n,visitedSections:r,onToggle:s,depth:o+1,path:i})})]},i)}))}):null},$=O}}]);
//# sourceMappingURL=311.5f905b30.chunk.js.map