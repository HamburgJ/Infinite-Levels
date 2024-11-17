"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[7570],{7570:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(5043);var s=t(5464),o=(t(2293),t(8628)),a=t(5348),i=(t(6669),t(6218)),r=t(8819),c=t(441),l=t(7088),d=t(9642),x=t(579);const u=s.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`,h=()=>{const{unlockAchievement:e}=(0,a.k)();return(0,x.jsx)(r.Gy,{children:(0,x.jsx)(r.ee,{children:(0,x.jsxs)(o.A.Body,{children:[(0,x.jsx)(o.A.Title,{children:(0,x.jsx)(d.A,{text:"Basic Traveling Techniques",size:"medium"})}),(0,x.jsx)(o.A.Text,{children:(0,x.jsx)(d.A,{text:"Be on the lookout for buttons hidden in plain sight. Anything which contains a number is could be a button!"})}),(0,x.jsx)(o.A.Text,{children:(0,x.jsx)(d.A,{text:"Take look at these coins, for instance. They might not look like they're buttons, but they are!"})}),(0,x.jsxs)(u,{children:[(0,x.jsx)(l.A,{value:5,id:"initial-5c"}),(0,x.jsx)(l.A,{value:1,id:"initial-1c"}),(0,x.jsx)(l.A,{value:1,id:"initial-1c2"})]}),(0,x.jsx)(o.A.Text,{children:(0,x.jsx)(d.A,{text:"And here's a scale. Its screen is a secret button too!"})}),(0,x.jsx)(r.W0,{children:(0,x.jsx)(c.A,{})}),(0,x.jsx)(r.W0,{children:(0,x.jsx)(i.A,{targetLevel:4,children:"Level 4"})})]})})})}},6669:(e,n,t)=>{t.d(n,{A:()=>S});var s=t(5043),o=t(8139),a=t.n(o),i=t(7121),r=t(7852),c=t(2306);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=s.createContext({});d.displayName="AccordionContext";const x=d;var u=t(579);const h=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:i,children:d,eventKey:h,...v}=e;const{activeEventKey:y}=(0,s.useContext)(x);return o=(0,r.oU)(o,"accordion-collapse"),(0,u.jsx)(c.A,{ref:n,in:l(y,h),...v,className:a()(i,o),children:(0,u.jsx)(t,{children:s.Children.only(d)})})}));h.displayName="AccordionCollapse";const v=h,y=s.createContext({eventKey:""});y.displayName="AccordionItemContext";const m=y,f=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:i,onEnter:c,onEntering:l,onEntered:d,onExit:x,onExiting:h,onExited:y,...f}=e;o=(0,r.oU)(o,"accordion-body");const{eventKey:g}=(0,s.useContext)(m);return(0,u.jsx)(v,{eventKey:g,onEnter:c,onEntering:l,onEntered:d,onExit:x,onExiting:h,onExited:y,children:(0,u.jsx)(t,{ref:n,...f,className:a()(i,o)})})}));f.displayName="AccordionBody";const g=f;const j=s.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:i,onClick:c,...d}=e;o=(0,r.oU)(o,"accordion-button");const{eventKey:h}=(0,s.useContext)(m),v=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:a}=(0,s.useContext)(x);return s=>{let i=e===t?null:e;a&&(i=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(i,s),null==n||n(s)}}(h,c),{activeEventKey:y}=(0,s.useContext)(x);return"button"===t&&(d.type="button"),(0,u.jsx)(t,{ref:n,onClick:v,...d,"aria-expanded":Array.isArray(y)?y.includes(h):h===y,className:a()(i,o,!l(y,h)&&"collapsed")})}));j.displayName="AccordionButton";const p=j,A=s.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:s,className:o,children:i,onClick:c,...l}=e;return s=(0,r.oU)(s,"accordion-header"),(0,u.jsx)(t,{ref:n,...l,className:a()(o,s),children:(0,u.jsx)(p,{onClick:c,children:i})})}));A.displayName="AccordionHeader";const b=A,w=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:i,eventKey:c,...l}=e;o=(0,r.oU)(o,"accordion-item");const d=(0,s.useMemo)((()=>({eventKey:c})),[c]);return(0,u.jsx)(m.Provider,{value:d,children:(0,u.jsx)(t,{ref:n,...l,className:a()(i,o)})})}));w.displayName="AccordionItem";const N=w,k=s.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:c,className:l,onSelect:d,flush:h,alwaysOpen:v,...y}=(0,i.Zw)(e,{activeKey:"onSelect"}),m=(0,r.oU)(c,"accordion"),f=(0,s.useMemo)((()=>({activeEventKey:o,onSelect:d,alwaysOpen:v})),[o,d,v]);return(0,u.jsx)(x.Provider,{value:f,children:(0,u.jsx)(t,{ref:n,...y,className:a()(l,m,h&&`${m}-flush`)})})}));k.displayName="Accordion";const C=Object.assign(k,{Button:p,Collapse:v,Item:N,Header:b,Body:g});var E=t(5464),K=t(9642);E.Ay.div`
  margin: 0.5rem 0;
`;const B=E.Ay.div`
  padding: 0.5rem;
`,T=(0,E.Ay)(C)`
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
`,P=e=>{let{data:n,openSections:t=[],visitedSections:o=[],onToggle:a,depth:i=0,path:r=""}=e;return Array.isArray(n)?0===n.length?(0,u.jsx)(B,{children:(0,u.jsx)(K.A,{text:"Keep searching..."})}):"string"===typeof n[0]||s.isValidElement(n[0])?(0,u.jsx)(B,{children:"string"===typeof n[0]?(0,u.jsx)(K.A,{text:n.join(" ")}):n[0]}):(0,u.jsx)(T,{activeKey:t.filter((e=>e.startsWith(r))),alwaysOpen:!0,children:n.map(((e,n)=>{const s=r?`${r}-${n}`:`${n}`,c=o.includes(s);return(0,u.jsxs)(C.Item,{eventKey:s,className:c?"visited":"",children:[(0,u.jsx)(C.Header,{onClick:()=>a(s)}),(0,u.jsx)(C.Body,{children:(0,u.jsx)(P,{data:e,openSections:t,visitedSections:o,onToggle:a,depth:i+1,path:s})})]},s)}))}):null},S=P}}]);
//# sourceMappingURL=7570.4cf6351a.chunk.js.map