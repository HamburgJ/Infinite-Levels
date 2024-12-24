"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[196],{2422:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(9950),s=n(4752),i=n(300),a=n(8350),o=n(4847),l=n(7937),c=n(4414);const d=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.85));
  padding: 0.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${e=>e.isDisappearing?"disappear 0.5s forwards":"none"};

  @keyframes disappear {
    0% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8) rotate(180deg);
    }
    100% {
      opacity: 0;
      transform: scale(0) rotate(360deg);
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 8px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.08),
      inset 0 1px 1px rgba(255, 255, 255, 0.6);
  }
`,x=s.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,h=s.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,u={11:{nextLocation:"8",message:"Ah, the sparse levels! *juggles some numbers* Did you know that if you look carefully at Level 8, you might find some interesting traveling techniques? *winks*"},8:{nextLocation:"9",message:"Ohoho! Advanced techniques, indeed! But the real magic lies in the secrets... *pulls a rabbit from a hat* Why don't you check Level 9? There might be a mysterious box waiting to be unlocked! *disappears in a puff of smoke, then reappears* Oh, I'm still here!"},9:{nextLocation:null,message:"The grand finale! *throws confetti* You've found all my hiding spots! But remember, in this world of numbers and mysteries, nothing is quite what it seems... *bows theatrically*"}},m=e=>{let{currentLevel:t}=e;const n=(0,i.wA)(),s=(0,i.d4)((e=>e.jester.currentLocation)),[m,g]=r.useState(!1);if((0,r.useEffect)((()=>{s===t&&n((0,o.FU)())}),[n,s,t]),s!==t)return null;return(0,c.jsxs)(d,{isDisappearing:m,children:[(0,c.jsx)(x,{children:"\ud83c\udccf"}),(0,c.jsx)(h,{children:u[s].message}),(0,c.jsx)(l.A,{variant:"outline-primary",onClick:()=>{g(!0),setTimeout((()=>{const e=u[s].nextLocation;n((0,a.J)(e))}),500)},size:"sm",children:"*poof*"})]})}},196:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});n(9950),n(6760);var r=n(5216),s=(n(4085),n(8457),n(1283)),i=n(448),a=(n(4626),n(969)),o=n(4431),l=n(2422),c=n(4414);const d=()=>(0,c.jsx)(i.Gy,{children:(0,c.jsx)(i.ee,{children:(0,c.jsxs)(r.A.Body,{children:[(0,c.jsx)(r.A.Title,{children:(0,c.jsx)(o.A,{size:"medium",text:"Advanced Traveling Techniques"})}),(0,c.jsx)(r.A.Text,{children:(0,c.jsx)(o.A,{text:"Did you know that buttons can be held just like items? Just right click a button, then carry it around until you need it!"})}),(0,c.jsx)(l.A,{currentLevel:"8"}),(0,c.jsxs)(a.A,{requiredCount:15,children:[(0,c.jsx)(r.A.Text,{children:(0,c.jsx)(o.A,{text:"By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"})}),(0,c.jsxs)(r.A.Text,{children:[(0,c.jsx)(o.A,{text:"Just find some text which has a number in it, highlight, and click it to travel to that level!"}),(0,c.jsx)(o.A,{text:"For example, this text has a 10 in it! That's one of the levels you've already been to!"})]})]}),(0,c.jsxs)(i.W0,{children:[(0,c.jsx)(s.A,{targetLevel:0,children:"Level 0"}),(0,c.jsx)(s.A,{targetLevel:1,children:"Level 1"}),(0,c.jsx)(s.A,{targetLevel:2,children:"Level 2"}),(0,c.jsx)(s.A,{targetLevel:3,children:"Level 3"})]}),(0,c.jsxs)(i.W0,{children:[(0,c.jsx)(s.A,{targetLevel:4,children:"Level 4"}),(0,c.jsx)(s.A,{targetLevel:5,children:"Level 5"}),(0,c.jsx)(s.A,{targetLevel:6,children:"Level 6"}),(0,c.jsx)(s.A,{targetLevel:7,children:"Level 7"})]})]})})})},969:(e,t,n)=>{n.d(t,{A:()=>h});n(9950);var r=n(4752),s=n(300),i=n(5216),a=(n(7216),n(1283),n(3635)),o=n(4414);const l=r.Ay.div`
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
`,h=e=>{let{requiredCount:t=null,maximumCount:n=null,children:r,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,s.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,g=null!==n,v=g&&m>n,p=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||m>=t),y=g?!v:p;return(0,o.jsx)(l,{children:(0,o.jsx)(c,{isComplete:y,isOverLimit:v,isMaxShrine:g,children:(0,o.jsxs)(i.A.Body,{children:[(0,o.jsx)(d,{isComplete:y,isOverLimit:v,isMaxShrine:g,children:g?"\ud83d\udd2e":y?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(i.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(x,{isOverLimit:v,children:g?(0,o.jsxs)(o.Fragment,{children:["Current: ",m," / Maximum: ",n]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",m," / ",t]})}),g?v?(0,o.jsx)(i.A.Text,{className:"text-danger",children:h}):(0,o.jsx)(i.A.Text,{children:r}):p?(0,o.jsx)(i.A.Text,{children:r}):(0,o.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},8457:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(9950),s=n(8738),i=n.n(s),a=n(3529),o=n(4089),l=n(2249);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=r.createContext({});d.displayName="AccordionContext";const x=d;var h=n(4414);const u=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:a,children:d,eventKey:u,...m}=e;const{activeEventKey:g}=(0,r.useContext)(x);return s=(0,o.oU)(s,"accordion-collapse"),(0,h.jsx)(l.A,{ref:t,in:c(g,u),...m,className:i()(a,s),children:(0,h.jsx)(n,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,g=r.createContext({eventKey:""});g.displayName="AccordionItemContext";const v=g,p=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:a,onEnter:l,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:g,...p}=e;s=(0,o.oU)(s,"accordion-body");const{eventKey:y}=(0,r.useContext)(v);return(0,h.jsx)(m,{eventKey:y,onEnter:l,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:g,children:(0,h.jsx)(n,{ref:t,...p,className:i()(a,s)})})}));p.displayName="AccordionBody";const y=p;const f=r.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:s,className:a,onClick:l,...d}=e;s=(0,o.oU)(s,"accordion-button");const{eventKey:u}=(0,r.useContext)(v),m=function(e,t){const{activeEventKey:n,onSelect:s,alwaysOpen:i}=(0,r.useContext)(x);return r=>{let a=e===n?null:e;i&&(a=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==s||s(a,r),null==t||t(r)}}(u,l),{activeEventKey:g}=(0,r.useContext)(x);return"button"===n&&(d.type="button"),(0,h.jsx)(n,{ref:t,onClick:m,...d,"aria-expanded":Array.isArray(g)?g.includes(u):u===g,className:i()(a,s,!c(g,u)&&"collapsed")})}));f.displayName="AccordionButton";const b=f,A=r.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:r,className:s,children:a,onClick:l,...c}=e;return r=(0,o.oU)(r,"accordion-header"),(0,h.jsx)(n,{ref:t,...c,className:i()(s,r),children:(0,h.jsx)(b,{onClick:l,children:a})})}));A.displayName="AccordionHeader";const j=A,w=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:a,eventKey:l,...c}=e;s=(0,o.oU)(s,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:l})),[l]);return(0,h.jsx)(v.Provider,{value:d,children:(0,h.jsx)(n,{ref:t,...c,className:i()(a,s)})})}));w.displayName="AccordionItem";const k=w,L=r.forwardRef(((e,t)=>{const{as:n="div",activeKey:s,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...g}=(0,a.Zw)(e,{activeKey:"onSelect"}),v=(0,o.oU)(l,"accordion"),p=(0,r.useMemo)((()=>({activeEventKey:s,onSelect:d,alwaysOpen:m})),[s,d,m]);return(0,h.jsx)(x.Provider,{value:p,children:(0,h.jsx)(n,{ref:t,...g,className:i()(c,v,u&&`${v}-flush`)})})}));L.displayName="Accordion";const C=Object.assign(L,{Button:b,Collapse:m,Item:k,Header:j,Body:y});var N=n(4752),E=n(4431);N.Ay.div`
  margin: 0.5rem 0;
`;const T=N.Ay.div`
  padding: 0.5rem;
`,S=(0,N.Ay)(C)`
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
`,K=e=>{let{data:t,openSections:n=[],visitedSections:s=[],onToggle:i,depth:a=0,path:o=""}=e;return Array.isArray(t)?0===t.length?(0,h.jsx)(T,{children:(0,h.jsx)(E.A,{text:"Keep searching..."})}):"string"===typeof t[0]||r.isValidElement(t[0])?(0,h.jsx)(T,{children:"string"===typeof t[0]?(0,h.jsx)(E.A,{text:t.join(" ")}):t[0]}):(0,h.jsx)(S,{activeKey:n.filter((e=>e.startsWith(o))),alwaysOpen:!0,children:t.map(((e,t)=>{const r=o?`${o}-${t}`:`${t}`,l=s.includes(r);return(0,h.jsxs)(C.Item,{eventKey:r,className:l?"visited":"",children:[(0,h.jsx)(C.Header,{onClick:()=>i(r)}),(0,h.jsx)(C.Body,{children:(0,h.jsx)(K,{data:e,openSections:n,visitedSections:s,onToggle:i,depth:a+1,path:r})})]},r)}))}):null},O=K}}]);