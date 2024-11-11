"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[311],{311:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(5043),i=(n(2293),n(8628)),o=(n(5348),n(6669),n(6218),n(8819)),s=(n(441),n(9642)),a=n(5464),l=n(3003),c=n(3204),d=n(579);const h=a.Ay.div`
  text-align: center;
  margin: 2rem 0;
`,x=a.Ay.div`
  display: inline-block;
  cursor: ${e=>e.hasKey?"pointer":"not-allowed"};
  font-size: 3rem;
  position: relative;
  opacity: ${e=>e.isOpen?.7:1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${e=>e.hasKey?"scale(1.1)":"none"};
  }
`,u=a.Ay.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  color: gold;
`,m=a.Ay.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  display: ${e=>e.isVisible?"block":"none"};
`,y=e=>{let{children:t,requiredKey:n="key-1"}=e;const[i,o]=(0,r.useState)(!1),[s,a]=(0,r.useState)(!1),y=(0,l.d4)((e=>e.inventory.equippedItem)),p=y&&y[n];return(0,d.jsxs)(h,{children:[(0,d.jsxs)(x,{hasKey:p,isOpen:i,onClick:()=>{p&&!i&&(o(!0),setTimeout((()=>a(!0)),500))},children:[(0,d.jsx)(c.TXh,{}),(0,d.jsx)(u,{children:i?(0,d.jsx)(c.nQ7,{}):(0,d.jsx)(c.JhU,{})})]}),(0,d.jsx)(m,{isVisible:s,children:t})]})};var p=n(1908);const g=()=>(0,d.jsx)(o.Gy,{children:(0,d.jsx)(o.ee,{children:(0,d.jsxs)(i.A.Body,{children:[(0,d.jsx)(i.A.Title,{children:(0,d.jsx)(s.A,{size:"large",text:"Secrets"})}),(0,d.jsx)(i.A.Text,{children:(0,d.jsx)(s.A,{text:"Congratulations. Reaching this level means that you've mastered the basics of this game. However, there\r another secret ability which will unlock a truly magnificently infinite amount of levels!"})}),(0,d.jsx)(i.A.Text,{children:(0,d.jsx)(s.A,{text:"The secret lays inside the box below.  A hint to \r the secret place will be revealed here once you've completed x achievements!"})}),(0,d.jsxs)(p.A,{requiredCount:30,children:[(0,d.jsx)(o.W0,{children:"The key to the box is stored in an extremely secret place! The information that will lead you to the key is hidden in a mysterious level which is thought by some not to exist. A level which equates to the 0th level yet its opposite. A level which is infinitely close yet infinitely far."}),(0,d.jsx)(y,{children:(0,d.jsx)(i.A.Text,{children:(0,d.jsx)(s.A,{text:"Like you know, buttons can be created from anywhere.\r But did you know that these buttons can be collected into your inventory? Just highlight some text to create a button, and \r right click to pick it up! You can carry it around with you, and click it to travel to that level!"})})})]})]})})})},441:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(5043),i=n(5464),o=n(3003),s=n(1676),a=n(9254),l=n(9171),c=n(378),d=n(3888),h=n(5348),x=n(6218),u=n(579);const m=i.Ay.div`
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
`,y=i.Ay.div`
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
`,p=i.Ay.div`
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
`,g=i.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=()=>{const e=(0,o.wA)(),t=(0,o.d4)((e=>e.inventory.equippedItem)),n=(0,o.d4)((e=>e.inventory.scale)),i=(0,o.d4)((e=>e.inventory.walletDenominations)),v=(0,o.d4)((e=>e.inventory.collectedCards)),[b,f]=(0,r.useState)(!1),{unlockAchievement:A}=(0,h.k)(),j={key:50,levelButton:42,book:300,wallet:150,encyclopedia:500,"card-box":200,card:{normal:1,"gold-shiny":50,diamond:100,"dark-holographic":-5},currency:{1:3,5:5,10:2.268,25:5.67,500:.99,1e3:.98,2e3:1.01,5e3:.97,1e4:1.12},text:e=>Math.max(1,.5*e),diamond:3.52,"black-hole":Number.MAX_SAFE_INTEGER},w=()=>{if(!n)return 0;switch(n.type){case"wallet":return(e=>{let t=j.wallet;return Object.entries(e).forEach((e=>{let[n,r]=e;r>0&&(t+=j.currency[parseInt(n)]*r)})),t})(i);case"card-box":return(e=>{let t=j["card-box"];return Object.entries(e).forEach((e=>{let[n,r]=e;if(r>0){const e=c.A[n],i=j.card[e.rarity||"normal"];t+=i*r}})),t})(v);case"card":return j.card[n.rarity||"normal"];case"text":return j.text(n.text.length);case"currency":return j.currency[n.value]||0;case"black-hole":return j["black-hole"];default:return j[n.type]||0}},k=r=>{if(r.preventDefault(),r.stopPropagation(),t&&!n)return e((0,s.HN)({item:t})),void e((0,s.lS)())};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(y,{children:[(0,u.jsx)(p,{onClick:e=>k(e),onContextMenu:e=>k(e),canInteract:t&&!n,children:(0,u.jsx)(g,{children:n?(0,u.jsx)(l.A,{item:n,isStorage:!0,isInventory:!1,forceAvailable:!0}):(0,u.jsx)(m,{children:"Empty"})})}),(0,u.jsxs)(x.A,{targetLevel:{real:w(),imag:0},onClick:t=>{t.stopPropagation();const n=w();e((0,d.qX)({real:n,imag:0})),A("SCALE_TRAVEL")},isDigitalScreen:!0,children:[w().toFixed(2),"g"]})]}),(0,u.jsx)(a.A,{show:b,onConfirm:()=>{const r=n;e((0,s.HN)(t)),e((0,s.Ci)(r)),f(!1)},onCancel:()=>f(!1),message:"Swap the equipped item with the item on the scale?"})]})}},1908:(e,t,n)=>{n.d(t,{A:()=>x});n(5043);var r=n(5464),i=n(3003),o=n(8628),s=(n(6481),n(6218),n(2520)),a=n(579);const l=r.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,r.Ay)(o.A)`
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
`,x=e=>{let{requiredCount:t=null,maximumCount:n=null,children:r,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,i.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,y=null!==n,p=y&&m>n,g=!y&&(!(!s.A.isDebugMode||!s.A.debugFeatures.unlockAllShrines)||m>=t),v=y?!p:g;return(0,a.jsx)(l,{children:(0,a.jsx)(c,{isComplete:v,isOverLimit:p,isMaxShrine:y,children:(0,a.jsxs)(o.A.Body,{children:[(0,a.jsx)(d,{isComplete:v,isOverLimit:p,isMaxShrine:y,children:y?"\ud83d\udd2e":v?"\ud83d\udd13":"\ud83d\udd12"}),(0,a.jsx)(o.A.Title,{children:y?"Prestige Shrine":"Achievement Shrine"}),(0,a.jsx)(h,{isOverLimit:p,children:y?(0,a.jsxs)(a.Fragment,{children:["Current: ",m," / Maximum: ",n]}):(0,a.jsxs)(a.Fragment,{children:["Progress: ",m," / ",t]})}),y?p?(0,a.jsx)(o.A.Text,{className:"text-danger",children:x}):(0,a.jsx)(o.A.Text,{children:r}):g?(0,a.jsx)(o.A.Text,{children:r}):(0,a.jsxs)(o.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},6669:(e,t,n)=>{n.d(t,{A:()=>$});var r=n(5043),i=n(8139),o=n.n(i),s=n(7121),a=n(7852),l=n(2306);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=r.createContext({});d.displayName="AccordionContext";const h=d;var x=n(579);const u=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:s,children:d,eventKey:u,...m}=e;const{activeEventKey:y}=(0,r.useContext)(h);return i=(0,a.oU)(i,"accordion-collapse"),(0,x.jsx)(l.A,{ref:t,in:c(y,u),...m,className:o()(s,i),children:(0,x.jsx)(n,{children:r.Children.only(d)})})}));u.displayName="AccordionCollapse";const m=u,y=r.createContext({eventKey:""});y.displayName="AccordionItemContext";const p=y,g=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:s,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:y,...g}=e;i=(0,a.oU)(i,"accordion-body");const{eventKey:v}=(0,r.useContext)(p);return(0,x.jsx)(m,{eventKey:v,onEnter:l,onEntering:c,onEntered:d,onExit:h,onExiting:u,onExited:y,children:(0,x.jsx)(n,{ref:t,...g,className:o()(s,i)})})}));g.displayName="AccordionBody";const v=g;const b=r.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:i,className:s,onClick:l,...d}=e;i=(0,a.oU)(i,"accordion-button");const{eventKey:u}=(0,r.useContext)(p),m=function(e,t){const{activeEventKey:n,onSelect:i,alwaysOpen:o}=(0,r.useContext)(h);return r=>{let s=e===n?null:e;o&&(s=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==i||i(s,r),null==t||t(r)}}(u,l),{activeEventKey:y}=(0,r.useContext)(h);return"button"===n&&(d.type="button"),(0,x.jsx)(n,{ref:t,onClick:m,...d,"aria-expanded":Array.isArray(y)?y.includes(u):u===y,className:o()(s,i,!c(y,u)&&"collapsed")})}));b.displayName="AccordionButton";const f=b,A=r.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:r,className:i,children:s,onClick:l,...c}=e;return r=(0,a.oU)(r,"accordion-header"),(0,x.jsx)(n,{ref:t,...c,className:o()(i,r),children:(0,x.jsx)(f,{onClick:l,children:s})})}));A.displayName="AccordionHeader";const j=A,w=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:i,className:s,eventKey:l,...c}=e;i=(0,a.oU)(i,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:l})),[l]);return(0,x.jsx)(p.Provider,{value:d,children:(0,x.jsx)(n,{ref:t,...c,className:o()(s,i)})})}));w.displayName="AccordionItem";const k=w,C=r.forwardRef(((e,t)=>{const{as:n="div",activeKey:i,bsPrefix:l,className:c,onSelect:d,flush:u,alwaysOpen:m,...y}=(0,s.Zw)(e,{activeKey:"onSelect"}),p=(0,a.oU)(l,"accordion"),g=(0,r.useMemo)((()=>({activeEventKey:i,onSelect:d,alwaysOpen:m})),[i,d,m]);return(0,x.jsx)(h.Provider,{value:g,children:(0,x.jsx)(n,{ref:t,...y,className:o()(c,p,u&&`${p}-flush`)})})}));C.displayName="Accordion";const N=Object.assign(C,{Button:f,Collapse:m,Item:k,Header:j,Body:v});var S=n(5464),E=n(9642);S.Ay.div`
  margin: 0.5rem 0;
`;const K=S.Ay.div`
  padding: 0.5rem;
`,T=(0,S.Ay)(N)`
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
`,O=e=>{let{data:t,openSections:n=[],visitedSections:i=[],onToggle:o,depth:s=0,path:a=""}=e;return Array.isArray(t)?0===t.length?(0,x.jsx)(K,{children:(0,x.jsx)(E.A,{text:"Keep searching..."})}):"string"===typeof t[0]||r.isValidElement(t[0])?(0,x.jsx)(K,{children:"string"===typeof t[0]?(0,x.jsx)(E.A,{text:t.join(" ")}):t[0]}):(0,x.jsx)(T,{activeKey:n.filter((e=>e.startsWith(a))),alwaysOpen:!0,children:t.map(((e,t)=>{const r=a?`${a}-${t}`:`${t}`,l=i.includes(r);return(0,x.jsxs)(N.Item,{eventKey:r,className:l?"visited":"",children:[(0,x.jsx)(N.Header,{onClick:()=>o(r)}),(0,x.jsx)(N.Body,{children:(0,x.jsx)(O,{data:e,openSections:n,visitedSections:i,onToggle:o,depth:s+1,path:r})})]},r)}))}):null},$=O}}]);
//# sourceMappingURL=311.10adccbe.chunk.js.map