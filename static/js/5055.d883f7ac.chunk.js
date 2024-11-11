"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5055],{5055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(5043),t(2293);var r=t(8628),o=(t(5348),t(6669),t(6218)),i=t(8819),s=t(1908),l=t(8220),a=(t(7088),t(579));const c=()=>(0,a.jsx)(i.Gy,{children:(0,a.jsx)(i.ee,{children:(0,a.jsxs)(r.A.Body,{children:[(0,a.jsx)(r.A.Title,{children:"A Strange Shrine"}),(0,a.jsx)(r.A.Text,{children:"You'll need to collect some achievements to unlock the secrets that lie within."}),(0,a.jsx)(i.W0,{children:(0,a.jsx)(o.A,{targetLevel:2,children:"Level 2"})}),(0,a.jsx)(r.A.Text,{children:"Wondering how to collect achievements? Why not check out..."}),(0,a.jsx)(i.W0,{children:(0,a.jsx)(o.A,{targetLevel:5,children:"Level 5"})}),(0,a.jsx)(i.W0,{children:(0,a.jsxs)(s.A,{requiredCount:3,children:[" ","Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!",(0,a.jsxs)(s.A,{requiredCount:5,children:[" ","Congratulations! You've earned a special wallet. Use it to store coins! Make sure you're holding the wallet before you click on the coins, otherwise they'll be treated like a button and will transport you away to another level!",(0,a.jsx)(l.A,{}),(0,a.jsx)(i.W0,{children:(0,a.jsx)(o.A,{targetLevel:7,children:"Level 7"})})]}),(0,a.jsx)(i.W0,{children:(0,a.jsx)(o.A,{targetLevel:10,children:"Level 10"})})]})})]})})})},1908:(e,n,t)=>{t.d(n,{A:()=>x});t(5043);var r=t(5464),o=t(3003),i=t(8628),s=(t(6481),t(6218),t(2520)),l=t(579);const a=r.Ay.div`
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
`,x=e=>{let{requiredCount:n=null,maximumCount:t=null,children:r,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,o.d4)((e=>e.achievements.achievements)),v=Object.keys(u).length,m=null!==t,g=m&&v>t,y=!m&&(!(!s.A.isDebugMode||!s.A.debugFeatures.unlockAllShrines)||v>=n),p=m?!g:y;return(0,l.jsx)(a,{children:(0,l.jsx)(c,{isComplete:p,isOverLimit:g,isMaxShrine:m,children:(0,l.jsxs)(i.A.Body,{children:[(0,l.jsx)(d,{isComplete:p,isOverLimit:g,isMaxShrine:m,children:m?"\ud83d\udd2e":p?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(i.A.Title,{children:m?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(h,{isOverLimit:g,children:m?(0,l.jsxs)(l.Fragment,{children:["Current: ",v," / Maximum: ",t]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",v," / ",n]})}),m?g?(0,l.jsx)(i.A.Text,{className:"text-danger",children:x}):(0,l.jsx)(i.A.Text,{children:r}):y?(0,l.jsx)(i.A.Text,{children:r}):(0,l.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})}},6669:(e,n,t)=>{t.d(n,{A:()=>O});var r=t(5043),o=t(8139),i=t.n(o),s=t(7121),l=t(7852),a=t(2306);function c(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=r.createContext({});d.displayName="AccordionContext";const h=d;var x=t(579);const u=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,children:d,eventKey:u,...v}=e;const{activeEventKey:m}=(0,r.useContext)(h);return o=(0,l.oU)(o,"accordion-collapse"),(0,x.jsx)(a.A,{ref:n,in:c(m,u),...v,className:i()(s,o),children:(0,x.jsx)(t,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const v=u,m=r.createContext({eventKey:""});m.displayName="AccordionItemContext";const g=m,y=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,onEnter:a,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:m,...y}=e;o=(0,l.oU)(o,"accordion-body");const{eventKey:p}=(0,r.useContext)(g);return(0,x.jsx)(v,{eventKey:p,onEnter:a,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:m,children:(0,x.jsx)(t,{ref:n,...y,className:i()(s,o)})})}));y.displayName="AccordionBody";const p=y;const j=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:s,onClick:a,...d}=e;o=(0,l.oU)(o,"accordion-button");const{eventKey:u}=(0,r.useContext)(g),v=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:i}=(0,r.useContext)(h);return r=>{let s=e===t?null:e;i&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(s,r),null==n||n(r)}}(u,a),{activeEventKey:m}=(0,r.useContext)(h);return"button"===t&&(d.type="button"),(0,x.jsx)(t,{ref:n,onClick:v,...d,"aria-expanded":Array.isArray(m)?m.includes(u):u===m,className:i()(s,o,!c(m,u)&&"collapsed")})}));j.displayName="AccordionButton";const A=j,b=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:o,children:s,onClick:a,...c}=e;return r=(0,l.oU)(r,"accordion-header"),(0,x.jsx)(t,{ref:n,...c,className:i()(o,r),children:(0,x.jsx)(A,{onClick:a,children:s})})}));b.displayName="AccordionHeader";const f=b,w=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,eventKey:a,...c}=e;o=(0,l.oU)(o,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:a})),[a]);return(0,x.jsx)(g.Provider,{value:d,children:(0,x.jsx)(t,{ref:n,...c,className:i()(s,o)})})}));w.displayName="AccordionItem";const C=w,k=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:a,className:c,onSelect:d,flush:u,alwaysOpen:v,...m}=(0,s.Zw)(e,{activeKey:"onSelect"}),g=(0,l.oU)(a,"accordion"),y=(0,r.useMemo)((()=>({activeEventKey:o,onSelect:d,alwaysOpen:v})),[o,d,v]);return(0,x.jsx)(h.Provider,{value:y,children:(0,x.jsx)(t,{ref:n,...m,className:i()(c,g,u&&`${g}-flush`)})})}));k.displayName="Accordion";const N=Object.assign(k,{Button:A,Collapse:v,Item:C,Header:f,Body:p});var L=t(5464),S=t(9642);L.Ay.div`
  margin: 0.5rem 0;
`;const E=L.Ay.div`
  padding: 0.5rem;
`,K=(0,L.Ay)(N)`
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
`,M=e=>{let{data:n,openSections:t=[],visitedSections:o=[],onToggle:i,depth:s=0,path:l=""}=e;return Array.isArray(n)?0===n.length?(0,x.jsx)(E,{children:(0,x.jsx)(S.A,{text:"Keep searching..."})}):"string"===typeof n[0]||r.isValidElement(n[0])?(0,x.jsx)(E,{children:"string"===typeof n[0]?(0,x.jsx)(S.A,{text:n.join(" ")}):n[0]}):(0,x.jsx)(K,{activeKey:t.filter((e=>e.startsWith(l))),alwaysOpen:!0,children:n.map(((e,n)=>{const r=l?`${l}-${n}`:`${n}`,a=o.includes(r);return(0,x.jsxs)(N.Item,{eventKey:r,className:a?"visited":"",children:[(0,x.jsx)(N.Header,{onClick:()=>i(r)}),(0,x.jsx)(N.Body,{children:(0,x.jsx)(M,{data:e,openSections:t,visitedSections:o,onToggle:i,depth:s+1,path:r})})]},r)}))}):null},O=M}}]);
//# sourceMappingURL=5055.d883f7ac.chunk.js.map