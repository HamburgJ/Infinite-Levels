"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3875],{3875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(5043),n(2293);var r=n(8628),a=(n(5348),n(6669),n(6218),n(8819)),o=(n(441),n(9642)),s=n(579);const i=()=>(0,s.jsx)(a.Gy,{children:(0,s.jsx)(a.ee,{children:(0,s.jsxs)(r.A.Body,{children:[(0,s.jsx)(r.A.Title,{children:(0,s.jsx)(o.A,{size:"large",text:"Advanced Traveling Techniques"})}),(0,s.jsx)(r.A.Text,{children:(0,s.jsx)(o.A,{text:"By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"})}),(0,s.jsxs)(r.A.Text,{children:[(0,s.jsx)(o.A,{text:"Just find some text which has a number in it, highlight, and click it to travel to that level!"}),(0,s.jsx)(o.A,{text:"For example, this text has a 10 in it! That's one of the levels you've already been to!"})]})]})})})},441:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(5043),a=n(5464),o=n(3003),s=n(1676),i=n(9254),c=n(9171),l=n(378),d=n(3888),u=n(5348),x=n(6218),h=n(579);const y=a.Ay.div`
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
`,p=a.Ay.div`
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
`,m=a.Ay.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(135deg, #95a5a6, #bdc3c7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`,v=a.Ay.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g=()=>{const e=(0,o.wA)(),t=(0,o.d4)((e=>e.inventory.equippedItem)),n=(0,o.d4)((e=>e.inventory.scale)),a=(0,o.d4)((e=>e.inventory.walletDenominations)),g=(0,o.d4)((e=>e.inventory.collectedCards)),[f,b]=(0,r.useState)(!1),{unlockAchievement:w}=(0,u.k)(),j={key:50,levelButton:42,book:300,wallet:150,encyclopedia:500,"card-box":200,card:{normal:10,"gold-shiny":50,diamond:100,"dark-holographic":5},currency:{1:2.5,5:5,10:2.268,25:5.67,500:1,1e3:1,2e3:1,5e3:1,1e4:1},text:e=>Math.max(1,.5*e),diamond:3.52,"black-hole":Number.MAX_SAFE_INTEGER},A=()=>{if(!n)return 0;switch(n.type){case"wallet":return(e=>{let t=j.wallet;return Object.entries(e).forEach((e=>{let[n,r]=e;r>0&&(t+=j.currency[parseInt(n)]*r)})),t})(a);case"card-box":return(e=>{let t=j["card-box"];return Object.entries(e).forEach((e=>{let[n,r]=e;if(r>0){const e=l.A[n],a=j.card[e.rarity||"normal"];t+=a*r}})),t})(g);case"card":return j.card[n.rarity||"normal"];case"text":return j.text(n.text.length);case"currency":return j.currency[n.value]||0;case"black-hole":return j["black-hole"];default:return j[n.type]||0}},k=r=>{if(r.preventDefault(),t&&!n)return e((0,s.HN)({item:t})),void e((0,s.lS)());n&&(t?"currency"===t.type&&"wallet"===n.type?(e((0,s.kB)({value:t.value})),e((0,s.jt)())):"card-box"===t.type&&"card"===n.type?(e((0,s.us)({cardId:t.id})),e((0,s.jt)())):"wallet"===t.type&&"currency"===n.type?(e((0,s.kB)({value:n.value})),e((0,s.jt)())):"card"===t.type&&"card-box"===n.type&&(e((0,s.us)({cardId:t.id})),e((0,s.jt)())):(e((0,s.Ci)(n)),e((0,s.jt)())))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(p,{children:[(0,h.jsx)(m,{onClick:e=>k(e),onContextMenu:e=>k(e),children:(0,h.jsx)(v,{children:n?(0,h.jsx)(c.A,{item:n,isStorage:!0,isInventory:!1,forceAvailable:!0}):(0,h.jsx)(y,{children:"Empty"})})}),(0,h.jsxs)(x.A,{targetLevel:{real:Math.floor(A()),imag:0},onClick:t=>{t.stopPropagation();const n=A();e((0,d.qX)({real:Math.floor(n),imag:0})),w("SCALE_TRAVEL")},isDigitalScreen:!0,children:[A().toFixed(2),"g"]})]}),(0,h.jsx)(i.A,{show:f,onConfirm:()=>{const r=n;e((0,s.HN)(t)),e((0,s.Ci)(r)),b(!1)},onCancel:()=>b(!1),message:"Swap the equipped item with the item on the scale?"})]})}},6669:(e,t,n)=>{n.d(t,{A:()=>M});var r=n(5043),a=n(8139),o=n.n(a),s=n(7121),i=n(7852),c=n(2306);function l(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=r.createContext({});d.displayName="AccordionContext";const u=d;var x=n(579);const h=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:a,className:s,children:d,eventKey:h,...y}=e;const{activeEventKey:p}=(0,r.useContext)(u);return a=(0,i.oU)(a,"accordion-collapse"),(0,x.jsx)(c.A,{ref:t,in:l(p,h),...y,className:o()(s,a),children:(0,x.jsx)(n,{children:r.Children.only(d)})})}));h.displayName="AccordionCollapse";const y=h,p=r.createContext({eventKey:""});p.displayName="AccordionItemContext";const m=p,v=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:a,className:s,onEnter:c,onEntering:l,onEntered:d,onExit:u,onExiting:h,onExited:p,...v}=e;a=(0,i.oU)(a,"accordion-body");const{eventKey:g}=(0,r.useContext)(m);return(0,x.jsx)(y,{eventKey:g,onEnter:c,onEntering:l,onEntered:d,onExit:u,onExiting:h,onExited:p,children:(0,x.jsx)(n,{ref:t,...v,className:o()(s,a)})})}));v.displayName="AccordionBody";const g=v;const f=r.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:a,className:s,onClick:c,...d}=e;a=(0,i.oU)(a,"accordion-button");const{eventKey:h}=(0,r.useContext)(m),y=function(e,t){const{activeEventKey:n,onSelect:a,alwaysOpen:o}=(0,r.useContext)(u);return r=>{let s=e===n?null:e;o&&(s=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==a||a(s,r),null==t||t(r)}}(h,c),{activeEventKey:p}=(0,r.useContext)(u);return"button"===n&&(d.type="button"),(0,x.jsx)(n,{ref:t,onClick:y,...d,"aria-expanded":Array.isArray(p)?p.includes(h):h===p,className:o()(s,a,!l(p,h)&&"collapsed")})}));f.displayName="AccordionButton";const b=f,w=r.forwardRef(((e,t)=>{let{as:n="h2",bsPrefix:r,className:a,children:s,onClick:c,...l}=e;return r=(0,i.oU)(r,"accordion-header"),(0,x.jsx)(n,{ref:t,...l,className:o()(a,r),children:(0,x.jsx)(b,{onClick:c,children:s})})}));w.displayName="AccordionHeader";const j=w,A=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:a,className:s,eventKey:c,...l}=e;a=(0,i.oU)(a,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:c})),[c]);return(0,x.jsx)(m.Provider,{value:d,children:(0,x.jsx)(n,{ref:t,...l,className:o()(s,a)})})}));A.displayName="AccordionItem";const k=A,C=r.forwardRef(((e,t)=>{const{as:n="div",activeKey:a,bsPrefix:c,className:l,onSelect:d,flush:h,alwaysOpen:y,...p}=(0,s.Zw)(e,{activeKey:"onSelect"}),m=(0,i.oU)(c,"accordion"),v=(0,r.useMemo)((()=>({activeEventKey:a,onSelect:d,alwaysOpen:y})),[a,d,y]);return(0,x.jsx)(u.Provider,{value:v,children:(0,x.jsx)(n,{ref:t,...p,className:o()(l,m,h&&`${m}-flush`)})})}));C.displayName="Accordion";const E=Object.assign(C,{Button:b,Collapse:y,Item:k,Header:j,Body:g});var N=n(5464),K=(n(6218),n(9642));N.Ay.div`
  margin: 0.5rem 0;
`;const B=N.Ay.div`
  padding: 0.5rem;
`,I=(0,N.Ay)(E)`
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
`,S=e=>{let{data:t,depth:n=0,path:a=""}=e;return Array.isArray(t)?0===t.length?(0,x.jsx)(B,{children:(0,x.jsx)(K.A,{text:"Keep searching..."})}):"string"===typeof t[0]||r.isValidElement(t[0])?(0,x.jsx)(B,{children:"string"===typeof t[0]?(0,x.jsx)(K.A,{text:t.join(" ")}):t[0]}):(0,x.jsx)(I,{alwaysOpen:!0,children:t.map(((e,t)=>{const r=`${a}-${t}`;return(0,x.jsxs)(E.Item,{eventKey:r,children:[(0,x.jsx)(E.Header,{}),(0,x.jsx)(E.Body,{children:(0,x.jsx)(S,{data:e,depth:n+1,path:r})})]},r)}))}):null},M=S}}]);
//# sourceMappingURL=3875.ffea6db9.chunk.js.map