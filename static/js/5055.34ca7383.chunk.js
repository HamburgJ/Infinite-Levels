"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5055],{5055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(5043),t(2293);var r=t(8628),o=(t(5348),t(6669),t(6218)),i=t(8819),s=t(1908),a=t(8220),l=(t(7088),t(579));const c=()=>(0,l.jsx)(i.Gy,{children:(0,l.jsx)(i.ee,{children:(0,l.jsxs)(r.A.Body,{children:[(0,l.jsx)(r.A.Title,{children:"A Strange Shrine"}),(0,l.jsx)(r.A.Text,{children:"You'll need to collect some achievements to unlock the secrets that lie within."}),(0,l.jsx)(i.W0,{children:(0,l.jsxs)(s.A,{requiredCount:3,children:[" ","Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!",(0,l.jsx)(i.W0,{children:(0,l.jsx)(o.A,{targetLevel:10,children:"Level 10"})}),(0,l.jsxs)(s.A,{requiredCount:5,children:[" ","Congratulations! You've earned a special wallet. Use it to store coins! Make sure you're holding the wallet before you click on the coins, otherwise they'll be treated like a button and will transport you away to another level!",(0,l.jsx)(a.A,{}),(0,l.jsx)(i.W0,{children:(0,l.jsx)(o.A,{targetLevel:7,children:"Level 7"})})]})]})}),(0,l.jsx)(r.A.Text,{children:"Wondering how to collect achievements? Why not check out..."}),(0,l.jsx)(i.W0,{children:(0,l.jsx)(o.A,{targetLevel:5,children:"Level 5"})})]})})})},1908:(e,n,t)=>{t.d(n,{A:()=>x});t(5043);var r=t(5464),o=t(3003),i=t(8628),s=(t(6481),t(6218),t(2520)),a=t(579);const l=r.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,r.Ay)(i.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=r.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=r.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,x=e=>{let{requiredCount:n=null,maximumCount:t=null,children:r,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,o.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,v=null!==t,g=v&&m>t,y=!v&&(!(!s.A.isDebugMode||!s.A.debugFeatures.unlockAllShrines)||m>=n),p=v?!g:y;return(0,a.jsx)(l,{children:(0,a.jsx)(c,{isComplete:p,isOverLimit:g,isMaxShrine:v,children:(0,a.jsxs)(i.A.Body,{children:[(0,a.jsx)(d,{isComplete:p,isOverLimit:g,isMaxShrine:v,children:v?"\ud83d\udd2e":p?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(i.A.Title,{children:v?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(h,{isOverLimit:g,children:v?(0,a.jsxs)(a.Fragment,{children:["Current: ",m," / Maximum: ",t]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",m," / ",n]})}),v?g?(0,a.jsx)(i.A.Text,{className:"text-danger",children:x}):(0,a.jsx)(i.A.Text,{children:r}):y?(0,a.jsx)(i.A.Text,{children:r}):(0,a.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})}},6669:(e,n,t)=>{t.d(n,{A:()=>O});var r=t(5043),o=t(8139),i=t.n(o),s=t(7121),a=t(7852),l=t(2306);function c(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=r.createContext({});d.displayName="AccordionContext";const h=d;var x=t(579);const u=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,children:d,eventKey:u,...m}=e;const{activeEventKey:v}=(0,r.useContext)(h);return o=(0,a.oU)(o,"accordion-collapse"),(0,x.jsx)(l.A,{ref:n,in:c(v,u),...m,className:i()(s,o),children:(0,x.jsx)(t,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,v=r.createContext({eventKey:""});v.displayName="AccordionItemContext";const g=v,y=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:v,...y}=e;o=(0,a.oU)(o,"accordion-body");const{eventKey:p}=(0,r.useContext)(g);return(0,x.jsx)(m,{eventKey:p,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:v,children:(0,x.jsx)(t,{ref:n,...y,className:i()(s,o)})})}));y.displayName="AccordionBody";const p=y;const A=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:s,onClick:l,...d}=e;o=(0,a.oU)(o,"accordion-button");const{eventKey:u}=(0,r.useContext)(g),m=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:i}=(0,r.useContext)(h);return r=>{let s=e===t?null:e;i&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(s,r),null==n||n(r)}}(u,l),{activeEventKey:v}=(0,r.useContext)(h);return"button"===t&&(d.type="button"),(0,x.jsx)(t,{ref:n,onClick:m,...d,"aria-expanded":Array.isArray(v)?v.includes(u):u===v,className:i()(s,o,!c(v,u)&&"collapsed")})}));A.displayName="AccordionButton";const b=A,j=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:o,children:s,onClick:l,...c}=e;return r=(0,a.oU)(r,"accordion-header"),(0,x.jsx)(t,{ref:n,...c,className:i()(o,r),children:(0,x.jsx)(b,{onClick:l,children:s})})}));j.displayName="AccordionHeader";const f=j,w=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,eventKey:l,...c}=e;o=(0,a.oU)(o,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:l})),[l]);return(0,x.jsx)(g.Provider,{value:d,children:(0,x.jsx)(t,{ref:n,...c,className:i()(s,o)})})}));w.displayName="AccordionItem";const C=w,k=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...v}=(0,s.Zw)(e,{activeKey:"onSelect"}),g=(0,a.oU)(l,"accordion"),y=(0,r.useMemo)((()=>({activeEventKey:o,onSelect:d,alwaysOpen:m})),[o,d,m]);return(0,x.jsx)(h.Provider,{value:y,children:(0,x.jsx)(t,{ref:n,...v,className:i()(c,g,u&&`${g}-flush`)})})}));k.displayName="Accordion";const N=Object.assign(k,{Button:b,Collapse:m,Item:C,Header:f,Body:p});var S=t(5464),E=t(9642);S.Ay.div`
  margin: 0.5rem 0;
`;const L=S.Ay.div`
  padding: 0.5rem;
`,K=(0,S.Ay)(N)`
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
`,M=e=>{let{data:n,openSections:t=[],visitedSections:o=[],onToggle:i,depth:s=0,path:a=""}=e;return Array.isArray(n)?0===n.length?(0,x.jsx)(L,{children:(0,x.jsx)(E.A,{text:"Keep searching..."})}):"string"===typeof n[0]||r.isValidElement(n[0])?(0,x.jsx)(L,{children:"string"===typeof n[0]?(0,x.jsx)(E.A,{text:n.join(" ")}):n[0]}):(0,x.jsx)(K,{activeKey:t.filter((e=>e.startsWith(a))),alwaysOpen:!0,children:n.map(((e,n)=>{const r=a?`${a}-${n}`:`${n}`,l=o.includes(r);return(0,x.jsxs)(N.Item,{eventKey:r,className:l?"visited":"",children:[(0,x.jsx)(N.Header,{onClick:()=>i(r)}),(0,x.jsx)(N.Body,{children:(0,x.jsx)(M,{data:e,openSections:t,visitedSections:o,onToggle:i,depth:s+1,path:r})})]},r)}))}):null},O=M}}]);
//# sourceMappingURL=5055.34ca7383.chunk.js.map