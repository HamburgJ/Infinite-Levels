"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3875],{3875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});n(5043),n(2293);var r=n(8628),i=(n(5348),n(6669),n(6218)),s=n(8819),a=(n(441),n(1908)),o=n(9642),l=n(579);const c=()=>(0,l.jsx)(s.Gy,{children:(0,l.jsx)(s.ee,{children:(0,l.jsxs)(r.A.Body,{children:[(0,l.jsx)(r.A.Title,{children:(0,l.jsx)(o.A,{size:"large",text:"Advanced Traveling Techniques"})}),(0,l.jsx)(r.A.Text,{children:(0,l.jsx)(o.A,{text:"Did you know that buttons can be held just like items? Just right click a button, then carry it around until you need it!"})}),(0,l.jsxs)(a.A,{requiredCount:15,children:[(0,l.jsx)(r.A.Text,{children:(0,l.jsx)(o.A,{text:"By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"})}),(0,l.jsxs)(r.A.Text,{children:[(0,l.jsx)(o.A,{text:"Just find some text which has a number in it, highlight, and click it to travel to that level!"}),(0,l.jsx)(o.A,{text:"For example, this text has a 10 in it! That's one of the levels you've already been to!"})]})]}),(0,l.jsxs)(s.W0,{children:[(0,l.jsx)(i.A,{targetLevel:0,children:"Level 0"}),(0,l.jsx)(i.A,{targetLevel:1,children:"Level 1"}),(0,l.jsx)(i.A,{targetLevel:2,children:"Level 2"}),(0,l.jsx)(i.A,{targetLevel:3,children:"Level 3"})]}),(0,l.jsxs)(s.W0,{children:[(0,l.jsx)(i.A,{targetLevel:4,children:"Level 4"}),(0,l.jsx)(i.A,{targetLevel:5,children:"Level 5"}),(0,l.jsx)(i.A,{targetLevel:6,children:"Level 6"}),(0,l.jsx)(i.A,{targetLevel:7,children:"Level 7"})]})]})})})},441:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(5043),i=n(5464),s=n(3003),a=n(1676),o=n(9254),l=n(9171),c=n(378),d=n(3888),x=n(5348),h=n(6218),u=n(579);const m=i.Ay.div`
  width: 80px;
  height: 80px;
  border: 3px dashed #666;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,g=i.Ay.div`
  width: 280px;
  height: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #2c3e50, #34495e);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,v=i.Ay.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(135deg, #95a5a6, #bdc3c7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: ${e=>e.canInteract?"pointer":"default"};
  transition: transform 0.2s ease;

  &:hover {
    transform: ${e=>e.canInteract?"scale(1.02)":"none"};
  }
`,p=i.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=()=>{const e=(0,s.wA)(),t=(0,s.d4)((e=>e.inventory.equippedItem)),n=(0,s.d4)((e=>e.inventory.scale)),i=(0,s.d4)((e=>e.inventory.walletDenominations)),y=(0,s.d4)((e=>e.inventory.collectedCards)),[b,A]=(0,r.useState)(!1),{unlockAchievement:f}=(0,x.k)(),j={key:50,levelButton:42,book:300,wallet:150,encyclopedia:500,"card-box":200,card:{normal:1,"gold-shiny":50,diamond:100,"dark-holographic":-5},currency:{1:3,5:5,10:2.268,25:5.67,500:.99,1e3:.98,2e3:1.01,5e3:.97,1e4:1.12},text:e=>Math.max(1,.5*e),diamond:3.52,"black-hole":Number.MAX_SAFE_INTEGER},w=()=>{if(!n)return 0;switch(n.type){case"wallet":return(e=>{let t=j.wallet;return Object.entries(e).forEach((e=>{let[n,r]=e;r>0&&(t+=j.currency[parseInt(n)]*r)})),t})(i);case"card-box":return(e=>{let t=j["card-box"];return Object.entries(e).forEach((e=>{let[n,r]=e;if(r>0){const e=c.A[n],i=j.card[e.rarity||"normal"];t+=i*r}})),t})(y);case"card":return j.card[n.rarity||"normal"];case"text":return j.text(n.text.length);case"currency":return j.currency[n.value]||0;case"black-hole":return j["black-hole"];default:return j[n.type]||0}},k=r=>{if(r.preventDefault(),r.stopPropagation(),t&&!n)return e((0,a.HN)({item:t})),void e((0,a.lS)())};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(g,{children:[(0,u.jsx)(v,{onClick:e=>k(e),onContextMenu:e=>k(e),canInteract:t&&!n,children:(0,u.jsx)(p,{children:n?(0,u.jsx)(l.A,{item:n,isStorage:!0,isInventory:!1,forceAvailable:!0}):(0,u.jsx)(m,{children:"Empty"})})}),(0,u.jsxs)(h.A,{targetLevel:{real:w(),imag:0},onClick:t=>{t.stopPropagation();const n=w();e((0,d.qX)({real:n,imag:0})),f("SCALE_TRAVEL")},isDigitalScreen:!0,children:[w().toFixed(2),"g"]})]}),(0,u.jsx)(o.A,{show:b,onConfirm:()=>{const r=n;e((0,a.HN)(t)),e((0,a.Ci)(r)),A(!1)},onCancel:()=>A(!1),message:"Swap the equipped item with the item on the scale?"})]})}},1908:(e,t,n)=>{n.d(t,{A:()=>h});n(5043);var r=n(5464),i=n(3003),s=n(8628),a=(n(6481),n(6218),n(2520)),o=n(579);const l=r.Ay.div`
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
`,h=e=>{let{requiredCount:t=null,maximumCount:n=null,children:r,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,i.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,g=null!==n,v=g&&m>n,p=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||m>=t),y=g?!v:p;return(0,o.jsx)(l,{children:(0,o.jsx)(c,{isComplete:y,isOverLimit:v,isMaxShrine:g,children:(0,o.jsxs)(s.A.Body,{children:[(0,o.jsx)(d,{isComplete:y,isOverLimit:v,isMaxShrine:g,children:g?"\ud83d\udd2e":y?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(x,{isOverLimit:v,children:g?(0,o.jsxs)(o.Fragment,{children:["Current: ",m," / Maximum: ",n]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",m," / ",t]})}),g?v?(0,o.jsx)(s.A.Text,{className:"text-danger",children:h}):(0,o.jsx)(s.A.Text,{children:r}):p?(0,o.jsx)(s.A.Text,{children:r}):(0,o.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},6669:(e,t,n)=>{n.d(t,{A:()=>M});var r=n(5043),i=n(8139),s=n.n(i),a=n(7121),o=n(7852),l=n(2306);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=r.createContext({});d.displayName="AccordionContext";const x=d;var h=n(579);const u=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:a,children:d,eventKey:u,...m}=e;const{activeEventKey:g}=(0,r.useContext)(x);return i=(0,o.oU)(i,"accordion-collapse"),(0,h.jsx)(l.A,{ref:t,in:c(g,u),...m,className:s()(a,i),children:(0,h.jsx)(n,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,g=r.createContext({eventKey:""});g.displayName="AccordionItemContext";const v=g,p=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:a,onEnter:l,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:g,...p}=e;i=(0,o.oU)(i,"accordion-body");const{eventKey:y}=(0,r.useContext)(v);return(0,h.jsx)(m,{eventKey:y,onEnter:l,onEntering:c,onEntered:d,onExit:x,onExiting:u,onExited:g,children:(0,h.jsx)(n,{ref:t,...p,className:s()(a,i)})})}));p.displayName="AccordionBody";const y=p;const b=r.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:i,className:a,onClick:l,...d}=e;i=(0,o.oU)(i,"accordion-button");const{eventKey:u}=(0,r.useContext)(v),m=function(e,t){const{activeEventKey:n,onSelect:i,alwaysOpen:s}=(0,r.useContext)(x);return r=>{let a=e===n?null:e;s&&(a=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==i||i(a,r),null==t||t(r)}}(u,l),{activeEventKey:g}=(0,r.useContext)(x);return"button"===n&&(d.type="button"),(0,h.jsx)(n,{ref:t,onClick:m,...d,"aria-expanded":Array.isArray(g)?g.includes(u):u===g,className:s()(a,i,!c(g,u)&&"collapsed")})}));b.displayName="AccordionButton";const A=b,f=r.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:r,className:i,children:a,onClick:l,...c}=e;return r=(0,o.oU)(r,"accordion-header"),(0,h.jsx)(n,{ref:t,...c,className:s()(i,r),children:(0,h.jsx)(A,{onClick:l,children:a})})}));f.displayName="AccordionHeader";const j=f,w=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:a,eventKey:l,...c}=e;i=(0,o.oU)(i,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:l})),[l]);return(0,h.jsx)(v.Provider,{value:d,children:(0,h.jsx)(n,{ref:t,...c,className:s()(a,i)})})}));w.displayName="AccordionItem";const k=w,C=r.forwardRef(((e,t)=>{const{as:n="div",activeKey:i,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...g}=(0,a.Zw)(e,{activeKey:"onSelect"}),v=(0,o.oU)(l,"accordion"),p=(0,r.useMemo)((()=>({activeEventKey:i,onSelect:d,alwaysOpen:m})),[i,d,m]);return(0,h.jsx)(x.Provider,{value:p,children:(0,h.jsx)(n,{ref:t,...g,className:s()(c,v,u&&`${v}-flush`)})})}));C.displayName="Accordion";const L=Object.assign(C,{Button:A,Collapse:m,Item:k,Header:j,Body:y});var N=n(5464),E=n(9642);N.Ay.div`
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
`,K=e=>{let{data:t,openSections:n=[],visitedSections:i=[],onToggle:s,depth:a=0,path:o=""}=e;return Array.isArray(t)?0===t.length?(0,h.jsx)(S,{children:(0,h.jsx)(E.A,{text:"Keep searching..."})}):"string"===typeof t[0]||r.isValidElement(t[0])?(0,h.jsx)(S,{children:"string"===typeof t[0]?(0,h.jsx)(E.A,{text:t.join(" ")}):t[0]}):(0,h.jsx)(T,{activeKey:n.filter((e=>e.startsWith(o))),alwaysOpen:!0,children:t.map(((e,t)=>{const r=o?`${o}-${t}`:`${t}`,l=i.includes(r);return(0,h.jsxs)(L.Item,{eventKey:r,className:l?"visited":"",children:[(0,h.jsx)(L.Header,{onClick:()=>s(r)}),(0,h.jsx)(L.Body,{children:(0,h.jsx)(K,{data:e,openSections:n,visitedSections:i,onToggle:s,depth:a+1,path:r})})]},r)}))}):null},M=K}}]);
//# sourceMappingURL=3875.52707703.chunk.js.map