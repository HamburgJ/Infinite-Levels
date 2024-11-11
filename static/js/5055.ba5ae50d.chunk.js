"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5055],{5055:(e,n,r)=>{r.r(n),r.d(n,{default:()=>c});r(5043),r(2293);var t=r(8628),o=(r(5348),r(6669),r(6218)),s=r(8819),i=r(1908),a=r(8220),l=(r(7088),r(579));const c=()=>(0,l.jsx)(s.Gy,{children:(0,l.jsx)(s.ee,{children:(0,l.jsxs)(t.A.Body,{children:[(0,l.jsx)(t.A.Title,{children:"A Strange Shrine"}),(0,l.jsx)(t.A.Text,{children:"You'll need to collect some achievements to unlock the secrets that lie within."}),(0,l.jsx)(s.W0,{children:(0,l.jsxs)(i.A,{requiredCount:3,children:[" ","Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!",(0,l.jsx)(s.W0,{children:(0,l.jsx)(o.A,{targetLevel:10,children:"Level 10"})}),(0,l.jsxs)(i.A,{requiredCount:5,children:[" ","Congratulations! You've earned a special wallet. Use it to store coins! Make sure you're holding the wallet before you click on the coins, otherwise they'll be treated like a button and will transport you away to another level!",(0,l.jsx)(a.A,{}),(0,l.jsx)(s.W0,{children:(0,l.jsx)(o.A,{targetLevel:7,children:"Level 7"})})]})]})}),(0,l.jsx)(t.A.Text,{children:"Wondering how to collect achievements? Why not check out..."}),(0,l.jsx)(s.W0,{children:(0,l.jsx)(o.A,{targetLevel:5,children:"Level 5"})})]})})})},1908:(e,n,r)=>{r.d(n,{A:()=>x});r(5043);var t=r(5464),o=r(3003),s=r(8628),i=(r(6481),r(6218),r(2520)),a=r(579);const l=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,t.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,x=e=>{let{requiredCount:n=null,maximumCount:r=null,children:t,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,o.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,v=null!==r,g=v&&m>r,y=!v&&(!(!i.A.isDebugMode||!i.A.debugFeatures.unlockAllShrines)||m>=n),p=v?!g:y;return(0,a.jsx)(l,{children:(0,a.jsx)(c,{isComplete:p,isOverLimit:g,isMaxShrine:v,children:(0,a.jsxs)(s.A.Body,{children:[(0,a.jsx)(d,{isComplete:p,isOverLimit:g,isMaxShrine:v,children:v?"\ud83d\udd2e":p?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(s.A.Title,{children:v?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(h,{isOverLimit:g,children:v?(0,a.jsxs)(a.Fragment,{children:["Current: ",m," / Maximum: ",r]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",m," / ",n]})}),v?g?(0,a.jsx)(s.A.Text,{className:"text-danger",children:x}):(0,a.jsx)(s.A.Text,{children:t}):y?(0,a.jsx)(s.A.Text,{children:t}):(0,a.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})}},6669:(e,n,r)=>{r.d(n,{A:()=>O});var t=r(5043),o=r(8139),s=r.n(o),i=r(7121),a=r(7852),l=r(2306);function c(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=t.createContext({});d.displayName="AccordionContext";const h=d;var x=r(579);const u=t.forwardRef(((e,n)=>{let{as:r="div",bsPrefix:o,className:i,children:d,eventKey:u,...m}=e;const{activeEventKey:v}=(0,t.useContext)(h);return o=(0,a.oU)(o,"accordion-collapse"),(0,x.jsx)(l.A,{ref:n,in:c(v,u),...m,className:s()(i,o),children:(0,x.jsx)(r,{children:t.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,v=t.createContext({eventKey:""});v.displayName="AccordionItemContext";const g=v,y=t.forwardRef(((e,n)=>{let{as:r="div",bsPrefix:o,className:i,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:v,...y}=e;o=(0,a.oU)(o,"accordion-body");const{eventKey:p}=(0,t.useContext)(g);return(0,x.jsx)(m,{eventKey:p,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:v,children:(0,x.jsx)(r,{ref:n,...y,className:s()(i,o)})})}));y.displayName="AccordionBody";const p=y;const A=t.forwardRef(((e,n)=>{let{as:r="button",bsPrefix:o,className:i,onClick:l,...d}=e;o=(0,a.oU)(o,"accordion-button");const{eventKey:u}=(0,t.useContext)(g),m=function(e,n){const{activeEventKey:r,onSelect:o,alwaysOpen:s}=(0,t.useContext)(h);return t=>{let i=e===r?null:e;s&&(i=Array.isArray(r)?r.includes(e)?r.filter((n=>n!==e)):[...r,e]:[e]),null==o||o(i,t),null==n||n(t)}}(u,l),{activeEventKey:v}=(0,t.useContext)(h);return"button"===r&&(d.type="button"),(0,x.jsx)(r,{ref:n,onClick:m,...d,"aria-expanded":Array.isArray(v)?v.includes(u):u===v,className:s()(i,o,!c(v,u)&&"collapsed")})}));A.displayName="AccordionButton";const b=A,j=t.forwardRef(((e,n)=>{let{as:r="h2",bsPrefix:t,className:o,children:i,onClick:l,...c}=e;return t=(0,a.oU)(t,"accordion-header"),(0,x.jsx)(r,{ref:n,...c,className:s()(o,t),children:(0,x.jsx)(b,{onClick:l,children:i})})}));j.displayName="AccordionHeader";const f=j,w=t.forwardRef(((e,n)=>{let{as:r="div",bsPrefix:o,className:i,eventKey:l,...c}=e;o=(0,a.oU)(o,"accordion-item");const d=(0,t.useMemo)((()=>({eventKey:l})),[l]);return(0,x.jsx)(g.Provider,{value:d,children:(0,x.jsx)(r,{ref:n,...c,className:s()(i,o)})})}));w.displayName="AccordionItem";const C=w,k=t.forwardRef(((e,n)=>{const{as:r="div",activeKey:o,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...v}=(0,i.Zw)(e,{activeKey:"onSelect"}),g=(0,a.oU)(l,"accordion"),y=(0,t.useMemo)((()=>({activeEventKey:o,onSelect:d,alwaysOpen:m})),[o,d,m]);return(0,x.jsx)(h.Provider,{value:y,children:(0,x.jsx)(r,{ref:n,...v,className:s()(c,g,u&&`${g}-flush`)})})}));k.displayName="Accordion";const N=Object.assign(k,{Button:b,Collapse:m,Item:C,Header:f,Body:p});var E=r(5464),L=(r(6218),r(9642));E.Ay.div`
  margin: 0.5rem 0;
`;const K=E.Ay.div`
  padding: 0.5rem;
`,S=(0,E.Ay)(N)`
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
`,M=e=>{let{data:n,depth:r=0,path:o=""}=e;return Array.isArray(n)?0===n.length?(0,x.jsx)(K,{children:(0,x.jsx)(L.A,{text:"Keep searching..."})}):"string"===typeof n[0]||t.isValidElement(n[0])?(0,x.jsx)(K,{children:"string"===typeof n[0]?(0,x.jsx)(L.A,{text:n.join(" ")}):n[0]}):(0,x.jsx)(S,{alwaysOpen:!0,children:n.map(((e,n)=>{const t=`${o}-${n}`;return(0,x.jsxs)(N.Item,{eventKey:t,children:[(0,x.jsx)(N.Header,{}),(0,x.jsx)(N.Body,{children:(0,x.jsx)(M,{data:e,depth:r+1,path:t})})]},t)}))}):null},O=M}}]);
//# sourceMappingURL=5055.ba5ae50d.chunk.js.map