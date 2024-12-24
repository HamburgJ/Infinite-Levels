"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[8511],{2422:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(9950),r=n(4752),s=n(300),o=n(8350),a=n(4847),l=n(7937),c=n(4414);const d=r.Ay.div`
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
`,h=r.Ay.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,x=r.Ay.div`
  flex: 1;
  font-style: italic;
  color: #666;
`,u={11:{nextLocation:"8",message:"Ah, the sparse levels! *juggles some numbers* Did you know that if you look carefully at Level 8, you might find some interesting traveling techniques? *winks*"},8:{nextLocation:"9",message:"Ohoho! Advanced techniques, indeed! But the real magic lies in the secrets... *pulls a rabbit from a hat* Why don't you check Level 9? There might be a mysterious box waiting to be unlocked! *disappears in a puff of smoke, then reappears* Oh, I'm still here!"},9:{nextLocation:null,message:"The grand finale! *throws confetti* You've found all my hiding spots! But remember, in this world of numbers and mysteries, nothing is quite what it seems... *bows theatrically*"}},m=e=>{let{currentLevel:t}=e;const n=(0,s.wA)(),r=(0,s.d4)((e=>e.jester.currentLocation)),[m,p]=i.useState(!1);if((0,i.useEffect)((()=>{r===t&&n((0,a.FU)())}),[n,r,t]),r!==t)return null;return(0,c.jsxs)(d,{isDisappearing:m,children:[(0,c.jsx)(h,{children:"\ud83c\udccf"}),(0,c.jsx)(x,{children:u[r].message}),(0,c.jsx)(l.A,{variant:"outline-primary",onClick:()=>{p(!0),setTimeout((()=>{const e=u[r].nextLocation;n((0,o.J)(e))}),500)},size:"sm",children:"*poof*"})]})}},8511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(9950),r=(n(6760),n(5216)),s=n(4085),o=(n(8457),n(1283)),a=n(448),l=(n(4626),n(4431)),c=n(4752),d=n(300),h=n(4243),x=n(4414);const u=c.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,m=c.Ay.div`
  display: inline-block;
  cursor: ${e=>e.hasKey?"pointer":"not-allowed"};
  font-size: 3rem;
  position: relative;
  opacity: ${e=>e.isOpen?.7:1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${e=>e.hasKey?"scale(1.1)":"none"};
  }
`,p=c.Ay.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  color: gold;
`,g=c.Ay.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  display: ${e=>e.isVisible?"block":"none"};
`,y=e=>{let{children:t,requiredKey:n="key-1"}=e;const{unlockAchievement:r}=(0,s.k)(),[o,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),y=(0,d.d4)((e=>e.inventory.equippedItem)),v=y&&y[n];return(0,x.jsxs)(u,{children:[(0,x.jsxs)(m,{hasKey:v,isOpen:o,onClick:()=>{v&&!o&&(a(!0),setTimeout((()=>c(!0)),500),r("BOX_UNLOCKED"))},children:[(0,x.jsx)(h.TXh,{}),(0,x.jsx)(p,{children:o?(0,x.jsx)(h.nQ7,{}):(0,x.jsx)(h.JhU,{})})]}),(0,x.jsx)(g,{isVisible:l,children:t})]})};var v=n(969),f=n(2422);const b=()=>(0,x.jsx)(a.Gy,{children:(0,x.jsx)(a.ee,{children:(0,x.jsxs)(r.A.Body,{children:[(0,x.jsx)(r.A.Title,{children:(0,x.jsx)(l.A,{size:"medium",text:"Secrets"})}),(0,x.jsx)(r.A.Text,{children:(0,x.jsx)(l.A,{text:"Congratulations. Reaching this level means that you've mastered the basics of this game. However, there another secret ability which will unlock a truly magnificently infinite amount of levels!"})}),(0,x.jsx)(r.A.Text,{children:(0,x.jsx)(l.A,{text:"The secret lays inside the box below.  A hint to  the secret place will be revealed here once you've completed x achievements!"})}),(0,x.jsxs)(v.A,{requiredCount:30,children:[(0,x.jsx)(a.W0,{children:"The key to the box is stored in an extremely secret place! The information that will lead you to the key is hidden in a mysterious level which is thought by some not to exist. A level which equates to the 0th level yet its opposite. A level which is infinitely close yet infinitely far."}),(0,x.jsx)(y,{children:(0,x.jsx)(r.A.Text,{children:(0,x.jsx)(l.A,{text:"Like you know, buttons can be created from anywhere. But did you know that these buttons can be collected into your inventory? Just highlight some text to create a button, and  right click to pick it up! You can carry it around with you, and click it to travel to that level!"})})})]}),(0,x.jsx)(f.A,{currentLevel:"9"}),(0,x.jsx)(a.W0,{children:(0,x.jsx)(o.A,{targetLevel:3,children:"Level 3"})})]})})})},969:(e,t,n)=>{n.d(t,{A:()=>x});n(9950);var i=n(4752),r=n(300),s=n(5216),o=(n(7216),n(1283),n(3635)),a=n(4414);const l=i.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,i.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=i.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,x=e=>{let{requiredCount:t=null,maximumCount:n=null,children:i,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,r.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,p=null!==n,g=p&&m>n,y=!p&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||m>=t),v=p?!g:y;return(0,a.jsx)(l,{children:(0,a.jsx)(c,{isComplete:v,isOverLimit:g,isMaxShrine:p,children:(0,a.jsxs)(s.A.Body,{children:[(0,a.jsx)(d,{isComplete:v,isOverLimit:g,isMaxShrine:p,children:p?"\ud83d\udd2e":v?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(s.A.Title,{children:p?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(h,{isOverLimit:g,children:p?(0,a.jsxs)(a.Fragment,{children:["Current: ",m," / Maximum: ",n]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",m," / ",t]})}),p?g?(0,a.jsx)(s.A.Text,{className:"text-danger",children:x}):(0,a.jsx)(s.A.Text,{children:i}):y?(0,a.jsx)(s.A.Text,{children:i}):(0,a.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},8457:(e,t,n)=>{n.d(t,{A:()=>O});var i=n(9950),r=n(8738),s=n.n(r),o=n(3529),a=n(4089),l=n(2249);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=i.createContext({});d.displayName="AccordionContext";const h=d;var x=n(4414);const u=i.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:o,children:d,eventKey:u,...m}=e;const{activeEventKey:p}=(0,i.useContext)(h);return r=(0,a.oU)(r,"accordion-collapse"),(0,x.jsx)(l.A,{ref:t,in:c(p,u),...m,className:s()(o,r),children:(0,x.jsx)(n,{children:i.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,p=i.createContext({eventKey:""});p.displayName="AccordionItemContext";const g=p,y=i.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:o,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:p,...y}=e;r=(0,a.oU)(r,"accordion-body");const{eventKey:v}=(0,i.useContext)(g);return(0,x.jsx)(m,{eventKey:v,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:p,children:(0,x.jsx)(n,{ref:t,...y,className:s()(o,r)})})}));y.displayName="AccordionBody";const v=y;const f=i.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:r,className:o,onClick:l,...d}=e;r=(0,a.oU)(r,"accordion-button");const{eventKey:u}=(0,i.useContext)(g),m=function(e,t){const{activeEventKey:n,onSelect:r,alwaysOpen:s}=(0,i.useContext)(h);return i=>{let o=e===n?null:e;s&&(o=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==r||r(o,i),null==t||t(i)}}(u,l),{activeEventKey:p}=(0,i.useContext)(h);return"button"===n&&(d.type="button"),(0,x.jsx)(n,{ref:t,onClick:m,...d,"aria-expanded":Array.isArray(p)?p.includes(u):u===p,className:s()(o,r,!c(p,u)&&"collapsed")})}));f.displayName="AccordionButton";const b=f,A=i.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:i,className:r,children:o,onClick:l,...c}=e;return i=(0,a.oU)(i,"accordion-header"),(0,x.jsx)(n,{ref:t,...c,className:s()(r,i),children:(0,x.jsx)(b,{onClick:l,children:o})})}));A.displayName="AccordionHeader";const j=A,w=i.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:o,eventKey:l,...c}=e;r=(0,a.oU)(r,"accordion-item");const d=(0,i.useMemo)((()=>({eventKey:l})),[l]);return(0,x.jsx)(g.Provider,{value:d,children:(0,x.jsx)(n,{ref:t,...c,className:s()(o,r)})})}));w.displayName="AccordionItem";const k=w,C=i.forwardRef(((e,t)=>{const{as:n="div",activeKey:r,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...p}=(0,o.Zw)(e,{activeKey:"onSelect"}),g=(0,a.oU)(l,"accordion"),y=(0,i.useMemo)((()=>({activeEventKey:r,onSelect:d,alwaysOpen:m})),[r,d,m]);return(0,x.jsx)(h.Provider,{value:y,children:(0,x.jsx)(n,{ref:t,...p,className:s()(c,g,u&&`${g}-flush`)})})}));C.displayName="Accordion";const L=Object.assign(C,{Button:b,Collapse:m,Item:k,Header:j,Body:v});var N=n(4752),K=n(4431);N.Ay.div`
  margin: 0.5rem 0;
`;const S=N.Ay.div`
  padding: 0.5rem;
`,T=(0,N.Ay)(L)`
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
`,E=e=>{let{data:t,openSections:n=[],visitedSections:r=[],onToggle:s,depth:o=0,path:a=""}=e;return Array.isArray(t)?0===t.length?(0,x.jsx)(S,{children:(0,x.jsx)(K.A,{text:"Keep searching..."})}):"string"===typeof t[0]||i.isValidElement(t[0])?(0,x.jsx)(S,{children:"string"===typeof t[0]?(0,x.jsx)(K.A,{text:t.join(" ")}):t[0]}):(0,x.jsx)(T,{activeKey:n.filter((e=>e.startsWith(a))),alwaysOpen:!0,children:t.map(((e,t)=>{const i=a?`${a}-${t}`:`${t}`,l=r.includes(i);return(0,x.jsxs)(L.Item,{eventKey:i,className:l?"visited":"",children:[(0,x.jsx)(L.Header,{onClick:()=>s(i)}),(0,x.jsx)(L.Body,{children:(0,x.jsx)(E,{data:e,openSections:n,visitedSections:r,onToggle:s,depth:o+1,path:i})})]},i)}))}):null},O=E}}]);