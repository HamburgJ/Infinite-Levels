"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3875],{3875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});n(5043),n(2293);var r=n(8628),i=(n(5348),n(6669),n(6218)),s=n(8819),o=(n(441),n(1908)),a=n(9642),l=n(579);const c=()=>(0,l.jsx)(s.Gy,{children:(0,l.jsx)(s.ee,{children:(0,l.jsxs)(r.A.Body,{children:[(0,l.jsx)(r.A.Title,{children:(0,l.jsx)(a.A,{size:"large",text:"Advanced Traveling Techniques"})}),(0,l.jsx)(r.A.Text,{children:(0,l.jsx)(a.A,{text:"Did you know that buttons can be held just like items? Just right click a button, then carry it around until you need it!"})}),(0,l.jsxs)(o.A,{requiredCount:15,children:[(0,l.jsx)(r.A.Text,{children:(0,l.jsx)(a.A,{text:"By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"})}),(0,l.jsxs)(r.A.Text,{children:[(0,l.jsx)(a.A,{text:"Just find some text which has a number in it, highlight, and click it to travel to that level!"}),(0,l.jsx)(a.A,{text:"For example, this text has a 10 in it! That's one of the levels you've already been to!"})]})]}),(0,l.jsxs)(s.W0,{children:[(0,l.jsx)(i.A,{targetLevel:0,children:"Level 0"}),(0,l.jsx)(i.A,{targetLevel:1,children:"Level 1"}),(0,l.jsx)(i.A,{targetLevel:2,children:"Level 2"}),(0,l.jsx)(i.A,{targetLevel:3,children:"Level 3"})]}),(0,l.jsxs)(s.W0,{children:[(0,l.jsx)(i.A,{targetLevel:4,children:"Level 4"}),(0,l.jsx)(i.A,{targetLevel:5,children:"Level 5"}),(0,l.jsx)(i.A,{targetLevel:6,children:"Level 6"}),(0,l.jsx)(i.A,{targetLevel:7,children:"Level 7"})]})]})})})},1908:(e,t,n)=>{n.d(t,{A:()=>h});n(5043);var r=n(5464),i=n(3003),s=n(8628),o=(n(6481),n(6218),n(2520)),a=n(579);const l=r.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,r.Ay)(s.A)`
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
`,h=e=>{let{requiredCount:t=null,maximumCount:n=null,children:r,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,i.d4)((e=>e.achievements.achievements)),v=Object.keys(u).length,m=null!==n,g=m&&v>n,y=!m&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||v>=t),j=m?!g:y;return(0,a.jsx)(l,{children:(0,a.jsx)(c,{isComplete:j,isOverLimit:g,isMaxShrine:m,children:(0,a.jsxs)(s.A.Body,{children:[(0,a.jsx)(d,{isComplete:j,isOverLimit:g,isMaxShrine:m,children:m?"\ud83d\udd2e":j?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(s.A.Title,{children:m?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(x,{isOverLimit:g,children:m?(0,a.jsxs)(a.Fragment,{children:["Current: ",v," / Maximum: ",n]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",v," / ",t]})}),m?g?(0,a.jsx)(s.A.Text,{className:"text-danger",children:h}):(0,a.jsx)(s.A.Text,{children:r}):y?(0,a.jsx)(s.A.Text,{children:r}):(0,a.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},6669:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(5043),i=n(8139),s=n.n(i),o=n(7121),a=n(7852),l=n(2306);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=r.createContext({});d.displayName="AccordionContext";const x=d;var h=n(579);const u=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:o,children:d,eventKey:u,...v}=e;const{activeEventKey:m}=(0,r.useContext)(x);return i=(0,a.oU)(i,"accordion-collapse"),(0,h.jsx)(l.A,{ref:t,in:c(m,u),...v,className:s()(o,i),children:(0,h.jsx)(n,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const v=u,m=r.createContext({eventKey:""});m.displayName="AccordionItemContext";const g=m,y=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:o,onEnter:l,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:m,...y}=e;i=(0,a.oU)(i,"accordion-body");const{eventKey:j}=(0,r.useContext)(g);return(0,h.jsx)(v,{eventKey:j,onEnter:l,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:m,children:(0,h.jsx)(n,{ref:t,...y,className:s()(o,i)})})}));y.displayName="AccordionBody";const j=y;const A=r.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:i,className:o,onClick:l,...d}=e;i=(0,a.oU)(i,"accordion-button");const{eventKey:u}=(0,r.useContext)(g),v=function(e,t){const{activeEventKey:n,onSelect:i,alwaysOpen:s}=(0,r.useContext)(x);return r=>{let o=e===n?null:e;s&&(o=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==i||i(o,r),null==t||t(r)}}(u,l),{activeEventKey:m}=(0,r.useContext)(x);return"button"===n&&(d.type="button"),(0,h.jsx)(n,{ref:t,onClick:v,...d,"aria-expanded":Array.isArray(m)?m.includes(u):u===m,className:s()(o,i,!c(m,u)&&"collapsed")})}));A.displayName="AccordionButton";const b=A,p=r.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:r,className:i,children:o,onClick:l,...c}=e;return r=(0,a.oU)(r,"accordion-header"),(0,h.jsx)(n,{ref:t,...c,className:s()(i,r),children:(0,h.jsx)(b,{onClick:l,children:o})})}));p.displayName="AccordionHeader";const f=p,w=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:o,eventKey:l,...c}=e;i=(0,a.oU)(i,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:l})),[l]);return(0,h.jsx)(g.Provider,{value:d,children:(0,h.jsx)(n,{ref:t,...c,className:s()(o,i)})})}));w.displayName="AccordionItem";const k=w,C=r.forwardRef(((e,t)=>{const{as:n="div",activeKey:i,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:v,...m}=(0,o.Zw)(e,{activeKey:"onSelect"}),g=(0,a.oU)(l,"accordion"),y=(0,r.useMemo)((()=>({activeEventKey:i,onSelect:d,alwaysOpen:v})),[i,d,v]);return(0,h.jsx)(x.Provider,{value:y,children:(0,h.jsx)(n,{ref:t,...m,className:s()(c,g,u&&`${g}-flush`)})})}));C.displayName="Accordion";const L=Object.assign(C,{Button:b,Collapse:v,Item:k,Header:f,Body:j});var N=n(5464),E=n(9642);N.Ay.div`
  margin: 0.5rem 0;
`;const K=N.Ay.div`
  padding: 0.5rem;
`,S=(0,N.Ay)(L)`
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
`,T=e=>{let{data:t,openSections:n=[],visitedSections:i=[],onToggle:s,depth:o=0,path:a=""}=e;return Array.isArray(t)?0===t.length?(0,h.jsx)(K,{children:(0,h.jsx)(E.A,{text:"Keep searching..."})}):"string"===typeof t[0]||r.isValidElement(t[0])?(0,h.jsx)(K,{children:"string"===typeof t[0]?(0,h.jsx)(E.A,{text:t.join(" ")}):t[0]}):(0,h.jsx)(S,{activeKey:n.filter((e=>e.startsWith(a))),alwaysOpen:!0,children:t.map(((e,t)=>{const r=a?`${a}-${t}`:`${t}`,l=i.includes(r);return(0,h.jsxs)(L.Item,{eventKey:r,className:l?"visited":"",children:[(0,h.jsx)(L.Header,{onClick:()=>s(r)}),(0,h.jsx)(L.Body,{children:(0,h.jsx)(T,{data:e,openSections:n,visitedSections:i,onToggle:s,depth:o+1,path:r})})]},r)}))}):null},O=T}}]);
//# sourceMappingURL=3875.0a3052bc.chunk.js.map