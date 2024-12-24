"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3536],{3536:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});t(9950),t(6760);var r=t(5216),s=(t(4085),t(8457),t(1283)),i=t(448),o=t(969),l=t(9796),a=(t(2643),t(4431)),c=t(4414);const d=()=>(0,c.jsx)(i.Gy,{children:(0,c.jsx)(i.ee,{children:(0,c.jsxs)(r.A.Body,{children:[(0,c.jsx)(r.A.Title,{children:(0,c.jsx)(a.A,{text:"A Strange Shrine",size:"medium"})}),(0,c.jsx)(r.A.Text,{children:(0,c.jsx)(a.A,{text:"You'll need to collect some achievements to unlock the secrets that lie within."})}),(0,c.jsx)(i.W0,{children:(0,c.jsx)(s.A,{targetLevel:2,children:"Level 2"})}),(0,c.jsx)(r.A.Text,{children:(0,c.jsx)(a.A,{text:"Wondering how to collect achievements? Why not check out..."})}),(0,c.jsx)(i.W0,{children:(0,c.jsx)(s.A,{targetLevel:5,children:"Level 5"})}),(0,c.jsx)(i.W0,{children:(0,c.jsxs)(o.A,{requiredCount:3,children:[(0,c.jsx)(a.A,{text:"Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!"}),(0,c.jsxs)(o.A,{requiredCount:5,children:[(0,c.jsx)(a.A,{text:"Congratulations! You've earned a special wallet. Use it to store coins! Make sure you're holding the wallet before you click on the coins, otherwise they'll be treated like a button and will transport you away to another level!"}),(0,c.jsx)(l.A,{}),(0,c.jsx)(i.W0,{children:(0,c.jsx)(s.A,{targetLevel:7,children:"Level 7"})})]}),(0,c.jsx)(i.W0,{children:(0,c.jsx)(s.A,{targetLevel:10,children:"Level 10"})})]})})]})})})},969:(e,n,t)=>{t.d(n,{A:()=>h});t(9950);var r=t(4752),s=t(300),i=t(5216),o=(t(7216),t(1283),t(3635)),l=t(4414);const a=r.Ay.div`
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
`,x=r.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:n=null,maximumCount:t=null,children:r,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,s.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,v=null!==t,g=v&&m>t,y=!v&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||m>=n),j=v?!g:y;return(0,l.jsx)(a,{children:(0,l.jsx)(c,{isComplete:j,isOverLimit:g,isMaxShrine:v,children:(0,l.jsxs)(i.A.Body,{children:[(0,l.jsx)(d,{isComplete:j,isOverLimit:g,isMaxShrine:v,children:v?"\ud83d\udd2e":j?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(i.A.Title,{children:v?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(x,{isOverLimit:g,children:v?(0,l.jsxs)(l.Fragment,{children:["Current: ",m," / Maximum: ",t]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",m," / ",n]})}),v?g?(0,l.jsx)(i.A.Text,{className:"text-danger",children:h}):(0,l.jsx)(i.A.Text,{children:r}):y?(0,l.jsx)(i.A.Text,{children:r}):(0,l.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",n," achievements..."]})]})})})}},8457:(e,n,t)=>{t.d(n,{A:()=>O});var r=t(9950),s=t(8738),i=t.n(s),o=t(3529),l=t(4089),a=t(2249);function c(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=r.createContext({});d.displayName="AccordionContext";const x=d;var h=t(4414);const u=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:s,className:o,children:d,eventKey:u,...m}=e;const{activeEventKey:v}=(0,r.useContext)(x);return s=(0,l.oU)(s,"accordion-collapse"),(0,h.jsx)(a.A,{ref:n,in:c(v,u),...m,className:i()(o,s),children:(0,h.jsx)(t,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,v=r.createContext({eventKey:""});v.displayName="AccordionItemContext";const g=v,y=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:s,className:o,onEnter:a,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:v,...y}=e;s=(0,l.oU)(s,"accordion-body");const{eventKey:j}=(0,r.useContext)(g);return(0,h.jsx)(m,{eventKey:j,onEnter:a,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:v,children:(0,h.jsx)(t,{ref:n,...y,className:i()(o,s)})})}));y.displayName="AccordionBody";const j=y;const A=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:s,className:o,onClick:a,...d}=e;s=(0,l.oU)(s,"accordion-button");const{eventKey:u}=(0,r.useContext)(g),m=function(e,n){const{activeEventKey:t,onSelect:s,alwaysOpen:i}=(0,r.useContext)(x);return r=>{let o=e===t?null:e;i&&(o=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==s||s(o,r),null==n||n(r)}}(u,a),{activeEventKey:v}=(0,r.useContext)(x);return"button"===t&&(d.type="button"),(0,h.jsx)(t,{ref:n,onClick:m,...d,"aria-expanded":Array.isArray(v)?v.includes(u):u===v,className:i()(o,s,!c(v,u)&&"collapsed")})}));A.displayName="AccordionButton";const p=A,b=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:s,children:o,onClick:a,...c}=e;return r=(0,l.oU)(r,"accordion-header"),(0,h.jsx)(t,{ref:n,...c,className:i()(s,r),children:(0,h.jsx)(p,{onClick:a,children:o})})}));b.displayName="AccordionHeader";const f=b,w=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:s,className:o,eventKey:a,...c}=e;s=(0,l.oU)(s,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:a})),[a]);return(0,h.jsx)(g.Provider,{value:d,children:(0,h.jsx)(t,{ref:n,...c,className:i()(o,s)})})}));w.displayName="AccordionItem";const C=w,k=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:s,bsPrefix:a,className:c,onSelect:d,flush:u,alwaysOpen:m,...v}=(0,o.Zw)(e,{activeKey:"onSelect"}),g=(0,l.oU)(a,"accordion"),y=(0,r.useMemo)((()=>({activeEventKey:s,onSelect:d,alwaysOpen:m})),[s,d,m]);return(0,h.jsx)(x.Provider,{value:y,children:(0,h.jsx)(t,{ref:n,...v,className:i()(c,g,u&&`${g}-flush`)})})}));k.displayName="Accordion";const N=Object.assign(k,{Button:p,Collapse:m,Item:C,Header:f,Body:j});var L=t(4752),S=t(4431);L.Ay.div`
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
`,M=e=>{let{data:n,openSections:t=[],visitedSections:s=[],onToggle:i,depth:o=0,path:l=""}=e;return Array.isArray(n)?0===n.length?(0,h.jsx)(E,{children:(0,h.jsx)(S.A,{text:"Keep searching..."})}):"string"===typeof n[0]||r.isValidElement(n[0])?(0,h.jsx)(E,{children:"string"===typeof n[0]?(0,h.jsx)(S.A,{text:n.join(" ")}):n[0]}):(0,h.jsx)(K,{activeKey:t.filter((e=>e.startsWith(l))),alwaysOpen:!0,children:n.map(((e,n)=>{const r=l?`${l}-${n}`:`${n}`,a=s.includes(r);return(0,h.jsxs)(N.Item,{eventKey:r,className:a?"visited":"",children:[(0,h.jsx)(N.Header,{onClick:()=>i(r)}),(0,h.jsx)(N.Body,{children:(0,h.jsx)(M,{data:e,openSections:t,visitedSections:s,onToggle:i,depth:o+1,path:r})})]},r)}))}):null},O=M}}]);