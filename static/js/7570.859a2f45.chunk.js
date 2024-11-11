"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[7570],{7570:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(5043);var r=t(5464),o=(t(2293),t(8628)),a=t(5348),s=(t(6669),t(6218)),i=t(8819),c=t(441),l=t(7088),d=t(579);const u=r.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`,x=()=>{const{unlockAchievement:e}=(0,a.k)();return(0,d.jsx)(i.Gy,{children:(0,d.jsx)(i.ee,{children:(0,d.jsxs)(o.A.Body,{children:[(0,d.jsx)(o.A.Title,{children:"Basic Traveling Techniques"}),(0,d.jsxs)(o.A.Text,{children:["Be on the lookout for buttons hidden ",(0,d.jsx)("span",{style:{fontStyle:"italic"},children:"in plain sight"}),". Anything which ",(0,d.jsx)("span",{style:{fontStyle:"italic"},children:"contains a number"})," is could be a button!"]}),(0,d.jsx)(o.A.Text,{children:"Take look at these coins, for instance. They might not look like they're buttons, but they are!"}),(0,d.jsxs)(u,{children:[(0,d.jsx)(l.A,{value:5,id:"initial-5c"}),(0,d.jsx)(l.A,{value:1,id:"initial-1c"}),(0,d.jsx)(l.A,{value:1,id:"initial-1c2"})]}),(0,d.jsx)(o.A.Text,{children:"And here's a scale. Its screen is a secret button too!"}),(0,d.jsx)(i.W0,{children:(0,d.jsx)(c.A,{})}),(0,d.jsx)(i.W0,{children:(0,d.jsx)(s.A,{targetLevel:4,children:"Level 4"})})]})})})}},441:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(5043),o=t(5464),a=t(3003),s=t(1676),i=t(9254),c=t(9171),l=t(378),d=t(3888),u=t(5348),x=t(6218),h=t(579);const y=o.Ay.div`
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
`,p=o.Ay.div`
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
`,m=o.Ay.div`
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
`,g=o.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=()=>{const e=(0,a.wA)(),n=(0,a.d4)((e=>e.inventory.equippedItem)),t=(0,a.d4)((e=>e.inventory.scale)),o=(0,a.d4)((e=>e.inventory.walletDenominations)),v=(0,a.d4)((e=>e.inventory.collectedCards)),[f,b]=(0,r.useState)(!1),{unlockAchievement:j}=(0,u.k)(),A={key:50,levelButton:42,book:300,wallet:150,encyclopedia:500,"card-box":200,card:{normal:10,"gold-shiny":50,diamond:100,"dark-holographic":5},currency:{1:2.5,5:5,10:2.268,25:5.67,500:1,1e3:1,2e3:1,5e3:1,1e4:1},text:e=>Math.max(1,.5*e),diamond:3.52,"black-hole":Number.MAX_SAFE_INTEGER},w=()=>{if(!t)return 0;switch(t.type){case"wallet":return(e=>{let n=A.wallet;return Object.entries(e).forEach((e=>{let[t,r]=e;r>0&&(n+=A.currency[parseInt(t)]*r)})),n})(o);case"card-box":return(e=>{let n=A["card-box"];return Object.entries(e).forEach((e=>{let[t,r]=e;if(r>0){const e=l.A[t],o=A.card[e.rarity||"normal"];n+=o*r}})),n})(v);case"card":return A.card[t.rarity||"normal"];case"text":return A.text(t.text.length);case"currency":return A.currency[t.value]||0;case"black-hole":return A["black-hole"];default:return A[t.type]||0}},k=r=>{if(r.preventDefault(),r.stopPropagation(),n&&!t)return e((0,s.HN)({item:n})),void e((0,s.lS)())};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(p,{children:[(0,h.jsx)(m,{onClick:e=>k(e),onContextMenu:e=>k(e),canInteract:n&&!t,children:(0,h.jsx)(g,{children:t?(0,h.jsx)(c.A,{item:t,isStorage:!0,isInventory:!1,forceAvailable:!0}):(0,h.jsx)(y,{children:"Empty"})})}),(0,h.jsxs)(x.A,{targetLevel:{real:w(),imag:0},onClick:n=>{n.stopPropagation();const t=w();e((0,d.qX)({real:t,imag:0})),j("SCALE_TRAVEL")},isDigitalScreen:!0,children:[w().toFixed(2),"g"]})]}),(0,h.jsx)(i.A,{show:f,onConfirm:()=>{const r=t;e((0,s.HN)(n)),e((0,s.Ci)(r)),b(!1)},onCancel:()=>b(!1),message:"Swap the equipped item with the item on the scale?"})]})}},6669:(e,n,t)=>{t.d(n,{A:()=>B});var r=t(5043),o=t(8139),a=t.n(o),s=t(7121),i=t(7852),c=t(2306);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=r.createContext({});d.displayName="AccordionContext";const u=d;var x=t(579);const h=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,children:d,eventKey:h,...y}=e;const{activeEventKey:p}=(0,r.useContext)(u);return o=(0,i.oU)(o,"accordion-collapse"),(0,x.jsx)(c.A,{ref:n,in:l(p,h),...y,className:a()(s,o),children:(0,x.jsx)(t,{children:r.Children.only(d)})})}));h.displayName="AccordionCollapse";const y=h,p=r.createContext({eventKey:""});p.displayName="AccordionItemContext";const m=p,g=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,onEnter:c,onEntering:l,onEntered:d,onExit:u,onExiting:h,onExited:p,...g}=e;o=(0,i.oU)(o,"accordion-body");const{eventKey:v}=(0,r.useContext)(m);return(0,x.jsx)(y,{eventKey:v,onEnter:c,onEntering:l,onEntered:d,onExit:u,onExiting:h,onExited:p,children:(0,x.jsx)(t,{ref:n,...g,className:a()(s,o)})})}));g.displayName="AccordionBody";const v=g;const f=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:s,onClick:c,...d}=e;o=(0,i.oU)(o,"accordion-button");const{eventKey:h}=(0,r.useContext)(m),y=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:a}=(0,r.useContext)(u);return r=>{let s=e===t?null:e;a&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(s,r),null==n||n(r)}}(h,c),{activeEventKey:p}=(0,r.useContext)(u);return"button"===t&&(d.type="button"),(0,x.jsx)(t,{ref:n,onClick:y,...d,"aria-expanded":Array.isArray(p)?p.includes(h):h===p,className:a()(s,o,!l(p,h)&&"collapsed")})}));f.displayName="AccordionButton";const b=f,j=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:o,children:s,onClick:c,...l}=e;return r=(0,i.oU)(r,"accordion-header"),(0,x.jsx)(t,{ref:n,...l,className:a()(o,r),children:(0,x.jsx)(b,{onClick:c,children:s})})}));j.displayName="AccordionHeader";const A=j,w=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,eventKey:c,...l}=e;o=(0,i.oU)(o,"accordion-item");const d=(0,r.useMemo)((()=>({eventKey:c})),[c]);return(0,x.jsx)(m.Provider,{value:d,children:(0,x.jsx)(t,{ref:n,...l,className:a()(s,o)})})}));w.displayName="AccordionItem";const k=w,C=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:c,className:l,onSelect:d,flush:h,alwaysOpen:y,...p}=(0,s.Zw)(e,{activeKey:"onSelect"}),m=(0,i.oU)(c,"accordion"),g=(0,r.useMemo)((()=>({activeEventKey:o,onSelect:d,alwaysOpen:y})),[o,d,y]);return(0,x.jsx)(u.Provider,{value:g,children:(0,x.jsx)(t,{ref:n,...p,className:a()(l,m,h&&`${m}-flush`)})})}));C.displayName="Accordion";const E=Object.assign(C,{Button:b,Collapse:y,Item:k,Header:A,Body:v});var N=t(5464),S=t(9642);N.Ay.div`
  margin: 0.5rem 0;
`;const K=N.Ay.div`
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
`,T=e=>{let{data:n,openSections:t=[],visitedSections:o=[],onToggle:a,depth:s=0,path:i=""}=e;return Array.isArray(n)?0===n.length?(0,x.jsx)(K,{children:(0,x.jsx)(S.A,{text:"Keep searching..."})}):"string"===typeof n[0]||r.isValidElement(n[0])?(0,x.jsx)(K,{children:"string"===typeof n[0]?(0,x.jsx)(S.A,{text:n.join(" ")}):n[0]}):(0,x.jsx)(I,{activeKey:t.filter((e=>e.startsWith(i))),alwaysOpen:!0,children:n.map(((e,n)=>{const r=i?`${i}-${n}`:`${n}`,c=o.includes(r);return(0,x.jsxs)(E.Item,{eventKey:r,className:c?"visited":"",children:[(0,x.jsx)(E.Header,{onClick:()=>a(r)}),(0,x.jsx)(E.Body,{children:(0,x.jsx)(T,{data:e,openSections:t,visitedSections:o,onToggle:a,depth:s+1,path:r})})]},r)}))}):null},B=T}}]);
//# sourceMappingURL=7570.859a2f45.chunk.js.map