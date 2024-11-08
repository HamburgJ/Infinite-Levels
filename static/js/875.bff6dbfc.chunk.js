"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[875],{3875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(5043),n(7258);var a=n(8628),r=(n(5348),n(6669),n(6218),n(8819)),o=(n(441),n(9642)),s=n(579);const i=()=>(0,s.jsx)(r.Gy,{children:(0,s.jsx)(r.ee,{children:(0,s.jsxs)(a.A.Body,{children:[(0,s.jsx)(a.A.Title,{children:(0,s.jsx)(o.A,{size:"large",text:"Advanced Traveling Techniques"})}),(0,s.jsx)(a.A.Text,{children:(0,s.jsx)(o.A,{text:"By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"})}),(0,s.jsx)(a.A.Text,{children:(0,s.jsx)(o.A,{text:"Just find some text which has a number in it, highlight, and click it to travel to that level!"})})]})})})},441:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(5043),r=n(5464),o=n(3003),s=n(8680),i=n(9254),c=n(8852),l=n(378),d=n(3888),x=n(5348),u=n(579);const h=r.Ay.div`
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
`,p=r.Ay.div`
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
`,y=r.Ay.div`
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
`,f=r.Ay.div`
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
`,g=r.Ay.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,m=()=>{const e=(0,o.wA)(),t=(0,o.d4)((e=>e.inventory.equippedItem)),n=(0,o.d4)((e=>e.inventory.scale)),r=(0,o.d4)((e=>e.inventory.money)),[m,v]=(0,a.useState)(!1),{unlockAchievement:b}=(0,x.k)(),w=()=>{switch(null===n||void 0===n?void 0:n.type){case"wallet":return(e=>{let t=150;return e.forEach((e=>{if(e.value>=500)t+=1;else switch(e.value){case 25:t+=6;break;case 10:t+=2;break;case 5:t+=5;break;case 1:t+=3;break;default:t+=0}})),t})(r);case"card-box":return(e=>{let t=1;const n={normal:1,"gold-shiny":1e4,diamond:999999999,"dark-holographic":-.1};for(const a in e.collectedCards)t+=n[l.A[a].rarity];return t})(n);case"card":return 10;case"diamond":return 1;case"black-hole":return 1e3;case"encyclopedia":return 50;case"flower":return n.weight;default:return 0}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(p,{onClick:()=>{if(n&&!t){if("card-box"===n.type){const t={...n,collectedCards:n.collectedCards||{}};e((0,s.Ci)(t))}else e((0,s.Ci)(n));e((0,s.jt)())}else if(t&&!n)e((0,s.HN)(t)),e((0,s.lS)());else if(t&&n)if("card"===t.type&&"card-box"===n.type)e((0,s.us)({cardId:t.id})),e((0,s.lS)());else if("card-box"===t.type&&"card"===n.type){const a={...t,collectedCards:{...t.collectedCards,[n.id]:!0}};e((0,s.jt)()),e((0,s.Ci)(a))}else v(!0)},children:[(0,u.jsx)(f,{children:(0,u.jsx)(g,{children:n?(0,u.jsx)(c.A,{item:n}):(0,u.jsx)(h,{children:"Empty"})})}),(0,u.jsxs)(y,{onClick:t=>{t.stopPropagation();const n=w();e((0,d.qX)({real:Math.floor(n),imag:0})),b("SCALE_TRAVEL")},children:[w().toFixed(2),"g"]})]}),(0,u.jsx)(i.A,{show:m,onConfirm:()=>{const a=n;e((0,s.HN)(t)),e((0,s.Ci)(a)),v(!1)},onCancel:()=>v(!1),message:"Swap the equipped item with the item on the scale?"})]})}},6669:(e,t,n)=>{n.d(t,{A:()=>I});var a=n(5043),r=n(8139),o=n.n(r),s=n(7121),i=n(7852),c=n(2306);function l(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=a.createContext({});d.displayName="AccordionContext";const x=d;var u=n(579);const h=a.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:s,children:d,eventKey:h,...p}=e;const{activeEventKey:y}=(0,a.useContext)(x);return r=(0,i.oU)(r,"accordion-collapse"),(0,u.jsx)(c.A,{ref:t,in:l(y,h),...p,className:o()(s,r),children:(0,u.jsx)(n,{children:a.Children.only(d)})})}));h.displayName="AccordionCollapse";const p=h,y=a.createContext({eventKey:""});y.displayName="AccordionItemContext";const f=y,g=a.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:s,onEnter:c,onEntering:l,onEntered:d,onExit:x,onExiting:h,onExited:y,...g}=e;r=(0,i.oU)(r,"accordion-body");const{eventKey:m}=(0,a.useContext)(f);return(0,u.jsx)(p,{eventKey:m,onEnter:c,onEntering:l,onEntered:d,onExit:x,onExiting:h,onExited:y,children:(0,u.jsx)(n,{ref:t,...g,className:o()(s,r)})})}));g.displayName="AccordionBody";const m=g;const v=a.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:r,className:s,onClick:c,...d}=e;r=(0,i.oU)(r,"accordion-button");const{eventKey:h}=(0,a.useContext)(f),p=function(e,t){const{activeEventKey:n,onSelect:r,alwaysOpen:o}=(0,a.useContext)(x);return a=>{let s=e===n?null:e;o&&(s=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==r||r(s,a),null==t||t(a)}}(h,c),{activeEventKey:y}=(0,a.useContext)(x);return"button"===n&&(d.type="button"),(0,u.jsx)(n,{ref:t,onClick:p,...d,"aria-expanded":Array.isArray(y)?y.includes(h):h===y,className:o()(s,r,!l(y,h)&&"collapsed")})}));v.displayName="AccordionButton";const b=v,w=a.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:a,className:r,children:s,onClick:c,...l}=e;return a=(0,i.oU)(a,"accordion-header"),(0,u.jsx)(n,{ref:t,...l,className:o()(r,a),children:(0,u.jsx)(b,{onClick:c,children:s})})}));w.displayName="AccordionHeader";const j=w,A=a.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:s,eventKey:c,...l}=e;r=(0,i.oU)(r,"accordion-item");const d=(0,a.useMemo)((()=>({eventKey:c})),[c]);return(0,u.jsx)(f.Provider,{value:d,children:(0,u.jsx)(n,{ref:t,...l,className:o()(s,r)})})}));A.displayName="AccordionItem";const C=A,k=a.forwardRef(((e,t)=>{const{as:n="div",activeKey:r,bsPrefix:c,className:l,onSelect:d,flush:h,alwaysOpen:p,...y}=(0,s.Zw)(e,{activeKey:"onSelect"}),f=(0,i.oU)(c,"accordion"),g=(0,a.useMemo)((()=>({activeEventKey:r,onSelect:d,alwaysOpen:p})),[r,d,p]);return(0,u.jsx)(x.Provider,{value:g,children:(0,u.jsx)(n,{ref:t,...y,className:o()(l,f,h&&`${f}-flush`)})})}));k.displayName="Accordion";const N=Object.assign(k,{Button:b,Collapse:p,Item:C,Header:j,Body:m});var E=n(5464),K=(n(6218),n(9642));E.Ay.div`
  margin: 0.5rem 0;
`;const B=E.Ay.div`
  padding: 0.5rem;
`,P=(0,E.Ay)(N)`
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
`,S=e=>{let{data:t,depth:n=0,path:r=""}=e;return Array.isArray(t)?0===t.length?(0,u.jsx)(B,{children:(0,u.jsx)(K.A,{text:"Keep searching..."})}):"string"===typeof t[0]||a.isValidElement(t[0])?(0,u.jsx)(B,{children:"string"===typeof t[0]?(0,u.jsx)(K.A,{text:t.join(" ")}):t[0]}):(0,u.jsx)(P,{alwaysOpen:!0,children:t.map(((e,t)=>{const a=`${r}-${t}`;return(0,u.jsxs)(N.Item,{eventKey:a,children:[(0,u.jsx)(N.Header,{}),(0,u.jsx)(N.Body,{children:(0,u.jsx)(S,{data:e,depth:n+1,path:a})})]},a)}))}):null},I=S}}]);
//# sourceMappingURL=875.bff6dbfc.chunk.js.map