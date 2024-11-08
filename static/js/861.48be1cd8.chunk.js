"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[861],{6861:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(5043),o=t(3003),r=(t(7258),t(8628)),s=t(5348),i=(t(6669),t(6218)),c=t(8819),l=t(3204),d=t(579);const u=()=>{(0,o.wA)();const{unlockAchievement:e}=(0,s.k)();return(0,a.useEffect)((()=>{e("LEVEL_1")}),[e]),(0,d.jsx)(c.Gy,{children:(0,d.jsx)(c.ee,{children:(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)(r.A.Title,{children:"Congratulations! You found the button."}),(0,d.jsx)(r.A.Text,{children:"However, you will soon find that this game in not linear, and that you may need to backtrack and reexamine places you've already been."}),(0,d.jsxs)(r.A.Text,{children:["Here's little hint, for your effort: The ",(0,d.jsx)(l.gZZ,{})," in the menu above is a hint system, which is an important and neccisary part of this game. Each level has a unique hint that may allow you to progress further in the game. Using the 'hint' system is not cheating, but rather a required part of the game. Take a look at the hint in Level 3, and use it to progress!"]}),(0,d.jsx)(c.W0,{children:(0,d.jsx)(i.A,{targetLevel:1,children:"Back to level 1"})})]})})})}},6669:(e,n,t)=>{t.d(n,{A:()=>L});var a=t(5043),o=t(8139),r=t.n(o),s=t(7121),i=t(7852),c=t(2306);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=a.createContext({});d.displayName="AccordionContext";const u=d;var h=t(579);const x=a.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,children:d,eventKey:x,...y}=e;const{activeEventKey:m}=(0,a.useContext)(u);return o=(0,i.oU)(o,"accordion-collapse"),(0,h.jsx)(c.A,{ref:n,in:l(m,x),...y,className:r()(s,o),children:(0,h.jsx)(t,{children:a.Children.only(d)})})}));x.displayName="AccordionCollapse";const y=x,m=a.createContext({eventKey:""});m.displayName="AccordionItemContext";const v=m,f=a.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,onEnter:c,onEntering:l,onEntered:d,onExit:u,onExiting:x,onExited:m,...f}=e;o=(0,i.oU)(o,"accordion-body");const{eventKey:g}=(0,a.useContext)(v);return(0,h.jsx)(y,{eventKey:g,onEnter:c,onEntering:l,onEntered:d,onExit:u,onExiting:x,onExited:m,children:(0,h.jsx)(t,{ref:n,...f,className:r()(s,o)})})}));f.displayName="AccordionBody";const g=f;const p=a.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:s,onClick:c,...d}=e;o=(0,i.oU)(o,"accordion-button");const{eventKey:x}=(0,a.useContext)(v),y=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:r}=(0,a.useContext)(u);return a=>{let s=e===t?null:e;r&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(s,a),null==n||n(a)}}(x,c),{activeEventKey:m}=(0,a.useContext)(u);return"button"===t&&(d.type="button"),(0,h.jsx)(t,{ref:n,onClick:y,...d,"aria-expanded":Array.isArray(m)?m.includes(x):x===m,className:r()(s,o,!l(m,x)&&"collapsed")})}));p.displayName="AccordionButton";const b=p,j=a.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:a,className:o,children:s,onClick:c,...l}=e;return a=(0,i.oU)(a,"accordion-header"),(0,h.jsx)(t,{ref:n,...l,className:r()(o,a),children:(0,h.jsx)(b,{onClick:c,children:s})})}));j.displayName="AccordionHeader";const w=j,A=a.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,eventKey:c,...l}=e;o=(0,i.oU)(o,"accordion-item");const d=(0,a.useMemo)((()=>({eventKey:c})),[c]);return(0,h.jsx)(v.Provider,{value:d,children:(0,h.jsx)(t,{ref:n,...l,className:r()(s,o)})})}));A.displayName="AccordionItem";const E=A,N=a.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:c,className:l,onSelect:d,flush:x,alwaysOpen:y,...m}=(0,s.Zw)(e,{activeKey:"onSelect"}),v=(0,i.oU)(c,"accordion"),f=(0,a.useMemo)((()=>({activeEventKey:o,onSelect:d,alwaysOpen:y})),[o,d,y]);return(0,h.jsx)(u.Provider,{value:f,children:(0,h.jsx)(t,{ref:n,...m,className:r()(l,v,x&&`${v}-flush`)})})}));N.displayName="Accordion";const C=Object.assign(N,{Button:b,Collapse:y,Item:E,Header:w,Body:g});var k=t(5464),K=(t(6218),t(9642));k.Ay.div`
  margin: 0.5rem 0;
`;const B=k.Ay.div`
  padding: 0.5rem;
`,P=(0,k.Ay)(C)`
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
`,U=e=>{let{data:n,depth:t=0,path:o=""}=e;return Array.isArray(n)?0===n.length?(0,h.jsx)(B,{children:(0,h.jsx)(K.A,{text:"Keep searching..."})}):"string"===typeof n[0]||a.isValidElement(n[0])?(0,h.jsx)(B,{children:"string"===typeof n[0]?(0,h.jsx)(K.A,{text:n.join(" ")}):n[0]}):(0,h.jsx)(P,{alwaysOpen:!0,children:n.map(((e,n)=>{const a=`${o}-${n}`;return(0,h.jsxs)(C.Item,{eventKey:a,children:[(0,h.jsx)(C.Header,{}),(0,h.jsx)(C.Body,{children:(0,h.jsx)(U,{data:e,depth:t+1,path:a})})]},a)}))}):null},L=U}}]);
//# sourceMappingURL=861.48be1cd8.chunk.js.map