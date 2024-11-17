"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5976],{5976:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var n=t(5043),s=t(5464),i=(t(2293),t(8628)),a=t(6218),l=(t(6050),t(5348),t(8819)),o=t(8139),c=t.n(o),d=(t(6440),t(7121)),h=t(8094),x=t(7852),m=t(1456),u=t(2644),v=t(5901),j=t(579);const g=n.forwardRef(((e,r)=>{let{bsPrefix:t,active:n,disabled:s,eventKey:i,className:a,variant:l,action:o,as:d,...h}=e;t=(0,x.oU)(t,"list-group-item");const[g,p]=(0,u.M)({key:(0,v.u)(i,h.href),active:n,...h}),A=(0,m.A)((e=>{if(s)return e.preventDefault(),void e.stopPropagation();g.onClick(e)}));s&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0);const f=d||(o?h.href?"a":"button":"div");return(0,j.jsx)(f,{ref:r,...h,...g,onClick:A,className:c()(a,t,p.isActive&&"active",s&&"disabled",l&&`${t}-${l}`,o&&`${t}-action`)})}));g.displayName="ListGroupItem";const p=g,A=n.forwardRef(((e,r)=>{const{className:t,bsPrefix:n,variant:s,horizontal:i,numbered:a,as:l="div",...o}=(0,d.Zw)(e,{activeKey:"onSelect"}),m=(0,x.oU)(n,"list-group");let u;return i&&(u=!0===i?"horizontal":`horizontal-${i}`),(0,j.jsx)(h.A,{ref:r,...o,as:l,className:c()(t,m,s&&`${m}-${s}`,u&&`${m}-${u}`,a&&`${m}-numbered`)})}));A.displayName="ListGroup";const f=Object.assign(A,{Item:p});var b=t(1908),y=t(363),w=t(9642);const k=(0,s.Ay)(f.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,C=()=>(0,j.jsx)(l.Gy,{children:(0,j.jsx)(l.ee,{children:(0,j.jsxs)(i.A.Body,{children:[(0,j.jsx)(i.A.Title,{children:(0,j.jsx)(w.A,{text:"Congratulations! You've completed the first 10 levels!",size:"medium"})}),(0,j.jsx)(i.A.Text,{children:(0,j.jsx)(w.A,{text:"If you haven't yet, don't worry, you'll figure out how to get there if you keep exploring! These first levels were meant as a tutorial to introduce you to the mechanics of the game."})}),(0,j.jsxs)(f,{children:[(0,j.jsxs)(k,{children:[(0,j.jsx)(w.A,{text:"Levels 0-3: "}),(0,j.jsx)("em",{children:(0,j.jsx)(w.A,{text:"Buttons and Hints"})})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(w.A,{text:"Levels 4-6: "}),(0,j.jsx)("em",{children:(0,j.jsx)(w.A,{text:"Achievements and Items"})})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(w.A,{text:"Level 7: "}),(0,j.jsx)("em",{children:(0,j.jsx)(w.A,{text:"Basic Traveling Techniques"})})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(w.A,{text:"Level 8: "}),(0,j.jsx)("em",{children:(0,j.jsx)(w.A,{text:"Advanced Traveling Techniques"})})]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(w.A,{text:"Level 9: "}),(0,j.jsx)("em",{children:(0,j.jsx)(w.A,{text:"Secrets"})})]})]}),(0,j.jsx)(i.A.Text,{children:(0,j.jsx)(w.A,{text:"From here on out, finding new levels will be more difficult!"})}),(0,j.jsx)(i.A.Text,{children:(0,j.jsx)(w.A,{text:"Don't forget to use the game hints, and make sure you explore every level! Here are some places to start:"})}),(0,j.jsxs)(f,{variant:"flush",children:[(0,j.jsxs)(k,{children:["\ud83d\udd04 Return to Level 0 and review the game tutorial",(0,j.jsx)(a.A,{targetLevel:0,children:"Level 0"})]}),(0,j.jsxs)(k,{children:["\ud83c\udf0d Travel forth",(0,j.jsx)(a.A,{targetLevel:11,children:"Level 11"})]})]}),(0,j.jsxs)(b.A,{requiredCount:9,children:[" ",(0,j.jsx)(l.W0,{children:(0,j.jsx)(y.A,{})})]})]})})})},1908:(e,r,t)=>{t.d(r,{A:()=>x});t(5043);var n=t(5464),s=t(3003),i=t(8628),a=(t(6481),t(6218),t(2520)),l=t(579);const o=n.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,n.Ay)(i.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=n.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=n.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,x=e=>{let{requiredCount:r=null,maximumCount:t=null,children:n,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const m=(0,s.d4)((e=>e.achievements.achievements)),u=Object.keys(m).length,v=null!==t,j=v&&u>t,g=!v&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||u>=r),p=v?!j:g;return(0,l.jsx)(o,{children:(0,l.jsx)(c,{isComplete:p,isOverLimit:j,isMaxShrine:v,children:(0,l.jsxs)(i.A.Body,{children:[(0,l.jsx)(d,{isComplete:p,isOverLimit:j,isMaxShrine:v,children:v?"\ud83d\udd2e":p?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(i.A.Title,{children:v?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(h,{isOverLimit:j,children:v?(0,l.jsxs)(l.Fragment,{children:["Current: ",u," / Maximum: ",t]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",u," / ",r]})}),v?j?(0,l.jsx)(i.A.Text,{className:"text-danger",children:x}):(0,l.jsx)(i.A.Text,{children:n}):g?(0,l.jsx)(i.A.Text,{children:n}):(0,l.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,t)=>{t.d(r,{A:()=>A});var n=t(5043),s=t(5464),i=t(3003),a=t(4103),l=t(3173),o=t(4282),c=t(5284),d=t(5985),h=t(1676),x=t(579);const m=s.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,u=s.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,v=s.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,j=s.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,g=(e,r)=>{if(!r)return null;const t=d.A[r].stages,n=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let s=n.length-1;s>=0;s--)if(e>=n[s])return t[n[s]];return t[0]},p=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const t=d.A[r].messages,n=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let s=n.length-1;s>=0;s--)if(e>=n[s])return t[n[s]];return t[0]},A=()=>{const e=(0,i.wA)(),{hasPlant:r,growthLevel:t,flowerType:s}=(0,i.d4)((e=>e.flower)),A=(0,i.d4)((e=>e.inventory.equippedItem)),[f,b]=(0,n.useState)(!1),[y,w]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1);return(0,x.jsxs)(m,{children:[(0,x.jsx)(u,{clickable:r,onClick:()=>{r&&w(!0)},children:r?g(t,s):null}),r&&(0,x.jsxs)(j,{children:[(0,x.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,x.jsx)(l.A,{now:(()=>{const e=(()=>{if(!s)return 0;const e=Object.keys(d.A[s].stages).map(Number);return Math.max(...e)})();return Math.min(t/e*100,100)})(),variant:"success"})]}),(0,x.jsx)(v,{children:r?p(t,s):"An empty pot... ready for something special to grow."}),(0,x.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?b(!0):(null===A||void 0===A||A.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,x.jsxs)(c.A,{show:f,onHide:()=>b(!1),children:[(0,x.jsx)(c.A.Header,{closeButton:!0,children:(0,x.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,x.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,x.jsxs)(c.A.Footer,{children:[(0,x.jsx)(o.A,{variant:"secondary",onClick:()=>b(!1),children:"Cancel"}),(0,x.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),b(!1)},children:"Replace Plant"})]})]}),(0,x.jsxs)(c.A,{show:y,onHide:()=>w(!1),children:[(0,x.jsx)(c.A.Header,{closeButton:!0,children:(0,x.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,x.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,x.jsxs)(c.A.Footer,{children:[(0,x.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,x.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[s].stages).map(Number).sort(((e,r)=>e-r));let n=0;for(let e of r)t>=e&&(n=e);const i={type:"flower",flowerType:s,growthLevel:t,stage:g(t,s),name:`${s.charAt(0).toUpperCase()+s.slice(1)} (Growth: ${t})`,weight:d.A[s].weights[n]};e((0,h.Ci)(i)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(8139),s=t.n(n),i=t(5043),a=t(7852);function l(e,r){let t=0;return i.Children.map(e,(e=>i.isValidElement(e)?r(e,t++):e))}var o=t(579);function c(e,r,t){const n=(e-r)/(t-r)*100;return Math.round(1e3*n)/1e3}function d(e,r){let{min:t,now:n,max:i,label:a,visuallyHidden:l,striped:d,animated:h,className:x,style:m,variant:u,bsPrefix:v,...j}=e;return(0,o.jsx)("div",{ref:r,...j,role:"progressbar",className:s()(x,`${v}-bar`,{[`bg-${u}`]:u,[`${v}-bar-animated`]:h,[`${v}-bar-striped`]:h||d}),style:{width:`${c(n,t,i)}%`,...m},"aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":i,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:a}):a})}const h=i.forwardRef(((e,r)=>{let{isChild:t=!1,...n}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(c.bsPrefix=(0,a.oU)(c.bsPrefix,"progress"),t)return d(c,r);const{min:h,now:x,max:m,label:u,visuallyHidden:v,striped:j,animated:g,bsPrefix:p,variant:A,className:f,children:b,...y}=c;return(0,o.jsx)("div",{ref:r,...y,className:s()(f,p),children:b?l(b,(e=>(0,i.cloneElement)(e,{isChild:!0}))):d({min:h,now:x,max:m,label:u,visuallyHidden:v,striped:j,animated:g,bsPrefix:p,variant:A},r)})}));h.displayName="ProgressBar";const x=h},6440:e=>{var r=function(){};e.exports=r}}]);
//# sourceMappingURL=5976.18cf4d9a.chunk.js.map