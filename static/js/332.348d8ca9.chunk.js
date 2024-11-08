"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[332],{5332:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var o=t(5043),a=t(3003),r=(t(7258),t(8628)),s=t(5348),c=t(6669),l=t(6218),i=t(8819),d=t(579);const x=[[[[["..."],[[["..."],["..."]],["..."]],["..."]],[["..."],[["..."]]],[[["..."],["..."]],[["..."],["..."]]]],[[["..."],["..."]],[["..."],[[["..."],["..."]],["..."],[["..."],["..."],[(0,d.jsx)(i.W0,{children:(0,d.jsx)(l.A,{targetLevel:2,children:"Level 2"})})]]]],[[["..."],["..."],[["..."],[(0,d.jsx)(i.W0,{children:(0,d.jsx)(l.A,{targetLevel:3,children:"Level 3"})})],["..."],["..."]["..."]]],[["..."],["..."]],[["..."],["..."]]]]]],u=()=>{(0,a.wA)();const{unlockAchievement:e}=(0,s.k)();return(0,o.useEffect)((()=>{e("LEVEL_1")}),[e]),(0,d.jsx)(i.Gy,{children:(0,d.jsx)(i.ee,{children:(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)(r.A.Title,{children:"Welcome to Level 1"}),(0,d.jsx)(r.A.Text,{children:"In this game, many levels contain buttons that are hidden. Buttons are never invisible or off-screen. Every button has a logical way to find it."}),(0,d.jsx)(r.A.Text,{children:"Find a hidden button in this level to proceed."}),(0,d.jsx)(c.A,{data:x})]})})})}},6669:(e,n,t)=>{t.d(n,{A:()=>R});var o=t(5043),a=t(8139),r=t.n(a),s=t(7121),c=t(7852),l=t(2306);function i(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=o.createContext({});d.displayName="AccordionContext";const x=d;var u=t(579);const v=o.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:s,children:d,eventKey:v,...h}=e;const{activeEventKey:y}=(0,o.useContext)(x);return a=(0,c.oU)(a,"accordion-collapse"),(0,u.jsx)(l.A,{ref:n,in:i(y,v),...h,className:r()(s,a),children:(0,u.jsx)(t,{children:o.Children.only(d)})})}));v.displayName="AccordionCollapse";const h=v,y=o.createContext({eventKey:""});y.displayName="AccordionItemContext";const f=y,m=o.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:s,onEnter:l,onEntering:i,onEntered:d,onExit:x,onExiting:v,onExited:y,...m}=e;a=(0,c.oU)(a,"accordion-body");const{eventKey:p}=(0,o.useContext)(f);return(0,u.jsx)(h,{eventKey:p,onEnter:l,onEntering:i,onEntered:d,onExit:x,onExiting:v,onExited:y,children:(0,u.jsx)(t,{ref:n,...m,className:r()(s,a)})})}));m.displayName="AccordionBody";const p=m;const g=o.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:a,className:s,onClick:l,...d}=e;a=(0,c.oU)(a,"accordion-button");const{eventKey:v}=(0,o.useContext)(f),h=function(e,n){const{activeEventKey:t,onSelect:a,alwaysOpen:r}=(0,o.useContext)(x);return o=>{let s=e===t?null:e;r&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==a||a(s,o),null==n||n(o)}}(v,l),{activeEventKey:y}=(0,o.useContext)(x);return"button"===t&&(d.type="button"),(0,u.jsx)(t,{ref:n,onClick:h,...d,"aria-expanded":Array.isArray(y)?y.includes(v):v===y,className:r()(s,a,!i(y,v)&&"collapsed")})}));g.displayName="AccordionButton";const j=g,A=o.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:o,className:a,children:s,onClick:l,...i}=e;return o=(0,c.oU)(o,"accordion-header"),(0,u.jsx)(t,{ref:n,...i,className:r()(a,o),children:(0,u.jsx)(j,{onClick:l,children:s})})}));A.displayName="AccordionHeader";const b=A,w=o.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:s,eventKey:l,...i}=e;a=(0,c.oU)(a,"accordion-item");const d=(0,o.useMemo)((()=>({eventKey:l})),[l]);return(0,u.jsx)(f.Provider,{value:d,children:(0,u.jsx)(t,{ref:n,...i,className:r()(s,a)})})}));w.displayName="AccordionItem";const E=w,N=o.forwardRef(((e,n)=>{const{as:t="div",activeKey:a,bsPrefix:l,className:i,onSelect:d,flush:v,alwaysOpen:h,...y}=(0,s.Zw)(e,{activeKey:"onSelect"}),f=(0,c.oU)(l,"accordion"),m=(0,o.useMemo)((()=>({activeEventKey:a,onSelect:d,alwaysOpen:h})),[a,d,h]);return(0,u.jsx)(x.Provider,{value:m,children:(0,u.jsx)(t,{ref:n,...y,className:r()(i,f,v&&`${f}-flush`)})})}));N.displayName="Accordion";const C=Object.assign(N,{Button:j,Collapse:h,Item:E,Header:b,Body:p});var K=t(5464),k=(t(6218),t(9642));K.Ay.div`
  margin: 0.5rem 0;
`;const B=K.Ay.div`
  padding: 0.5rem;
`,L=(0,K.Ay)(C)`
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
`,P=e=>{let{data:n,depth:t=0,path:a=""}=e;return Array.isArray(n)?0===n.length?(0,u.jsx)(B,{children:(0,u.jsx)(k.A,{text:"Keep searching..."})}):"string"===typeof n[0]||o.isValidElement(n[0])?(0,u.jsx)(B,{children:"string"===typeof n[0]?(0,u.jsx)(k.A,{text:n.join(" ")}):n[0]}):(0,u.jsx)(L,{alwaysOpen:!0,children:n.map(((e,n)=>{const o=`${a}-${n}`;return(0,u.jsxs)(C.Item,{eventKey:o,children:[(0,u.jsx)(C.Header,{}),(0,u.jsx)(C.Body,{children:(0,u.jsx)(P,{data:e,depth:t+1,path:o})})]},o)}))}):null},R=P}}]);
//# sourceMappingURL=332.348d8ca9.chunk.js.map