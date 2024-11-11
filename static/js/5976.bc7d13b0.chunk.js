"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5976],{5976:(e,r,n)=>{n.r(r),n.d(r,{default:()=>k});var t=n(5043),i=n(5464),s=(n(2293),n(8628)),a=n(6218),l=(n(6050),n(5348),n(8819)),o=n(8139),c=n.n(o),d=(n(6440),n(7121)),h=n(8094),u=n(7852),m=n(1456),x=n(2644),v=n(5901),g=n(579);const p=t.forwardRef(((e,r)=>{let{bsPrefix:n,active:t,disabled:i,eventKey:s,className:a,variant:l,action:o,as:d,...h}=e;n=(0,u.oU)(n,"list-group-item");const[p,f]=(0,x.M)({key:(0,v.u)(s,h.href),active:t,...h}),j=(0,m.A)((e=>{if(i)return e.preventDefault(),void e.stopPropagation();p.onClick(e)}));i&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0);const b=d||(o?h.href?"a":"button":"div");return(0,g.jsx)(b,{ref:r,...h,...p,onClick:j,className:c()(a,n,f.isActive&&"active",i&&"disabled",l&&`${n}-${l}`,o&&`${n}-action`)})}));p.displayName="ListGroupItem";const f=p,j=t.forwardRef(((e,r)=>{const{className:n,bsPrefix:t,variant:i,horizontal:s,numbered:a,as:l="div",...o}=(0,d.Zw)(e,{activeKey:"onSelect"}),m=(0,u.oU)(t,"list-group");let x;return s&&(x=!0===s?"horizontal":`horizontal-${s}`),(0,g.jsx)(h.A,{ref:r,...o,as:l,className:c()(n,m,i&&`${m}-${i}`,x&&`${m}-${x}`,a&&`${m}-numbered`)})}));j.displayName="ListGroup";const b=Object.assign(j,{Item:f});var A=n(1908),y=n(363);const w=(0,i.Ay)(b.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,k=()=>(0,g.jsx)(l.Gy,{children:(0,g.jsx)(l.ee,{children:(0,g.jsxs)(s.A.Body,{children:[(0,g.jsx)(s.A.Title,{children:"Congratulations! You've completed the first 10 levels!"}),(0,g.jsx)(s.A.Text,{children:"If you haven't yet, don't worry, you'll figure out how to get there if you keep exploring! These first levels were meant as a tutorial to introduce you to the mechanics of the game."}),(0,g.jsxs)(b,{children:[(0,g.jsxs)(w,{children:["Levels 0-3: ",(0,g.jsx)("em",{children:"Buttons and Hints"})]}),(0,g.jsxs)(w,{children:["Levels 4-6: ",(0,g.jsx)("em",{children:"Achievements and Items"})]}),(0,g.jsxs)(w,{children:["Level 7: ",(0,g.jsx)("em",{children:"Basic Traveling Techniques"})]}),(0,g.jsxs)(w,{children:["Level 8: ",(0,g.jsx)("em",{children:"Advanced Traveling Techniques"})]}),(0,g.jsxs)(w,{children:["Level 9: ",(0,g.jsx)("em",{children:"Secrets"})]})]}),(0,g.jsx)(s.A.Text,{children:"From here on out, finding new levels will be more difficult!"}),(0,g.jsx)(s.A.Text,{children:"Don't forget to use the game hints, and make sure you explore every level! Here are some places to start:"}),(0,g.jsxs)(b,{variant:"flush",children:[(0,g.jsxs)(w,{children:["\ud83d\udd04 Return to Level 0 and review the game tutorial",(0,g.jsx)(a.A,{targetLevel:0,children:"Level 0"})]}),(0,g.jsxs)(w,{children:["\ud83c\udf0d Travel forth",(0,g.jsx)(a.A,{targetLevel:11,children:"Level 11"})]})]}),(0,g.jsxs)(A.A,{requiredCount:9,children:[" ",(0,g.jsx)(l.W0,{children:(0,g.jsx)(y.A,{})})]})]})})})},1908:(e,r,n)=>{n.d(r,{A:()=>u});n(5043);var t=n(5464),i=n(3003),s=n(8628),a=(n(6481),n(6218),n(2520)),l=n(579);const o=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,c=(0,t.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,d=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,h=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,u=e=>{let{requiredCount:r=null,maximumCount:n=null,children:t,overLimitMessage:u="Too many achievements! You must prestige to access this content."}=e;const m=(0,i.d4)((e=>e.achievements.achievements)),x=Object.keys(m).length,v=null!==n,g=v&&x>n,p=!v&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||x>=r),f=v?!g:p;return(0,l.jsx)(o,{children:(0,l.jsx)(c,{isComplete:f,isOverLimit:g,isMaxShrine:v,children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(d,{isComplete:f,isOverLimit:g,isMaxShrine:v,children:v?"\ud83d\udd2e":f?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(s.A.Title,{children:v?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(h,{isOverLimit:g,children:v?(0,l.jsxs)(l.Fragment,{children:["Current: ",x," / Maximum: ",n]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",x," / ",r]})}),v?g?(0,l.jsx)(s.A.Text,{className:"text-danger",children:u}):(0,l.jsx)(s.A.Text,{children:t}):p?(0,l.jsx)(s.A.Text,{children:t}):(0,l.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(5043),i=n(5464),s=n(3003),a=n(4103),l=n(3173),o=n(4282),c=n(5284),d=n(5985),h=n(1676),u=n(579);const m=i.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,x=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,v=i.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,g=i.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,p=(e,r)=>{if(!r)return null;const n=d.A[r].stages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},f=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const n=d.A[r].messages,t=Object.keys(n).map(Number).sort(((e,r)=>e-r));for(let i=t.length-1;i>=0;i--)if(e>=t[i])return n[t[i]];return n[0]},j=()=>{const e=(0,s.wA)(),{hasPlant:r,growthLevel:n,flowerType:i}=(0,s.d4)((e=>e.flower)),j=(0,s.d4)((e=>e.inventory.equippedItem)),[b,A]=(0,t.useState)(!1),[y,w]=(0,t.useState)(!1),[k,C]=(0,t.useState)(!1);return(0,u.jsxs)(m,{children:[(0,u.jsx)(x,{clickable:r,onClick:()=>{r&&w(!0)},children:r?p(n,i):null}),r&&(0,u.jsxs)(g,{children:[(0,u.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,u.jsx)(l.A,{now:(()=>{const e=(()=>{if(!i)return 0;const e=Object.keys(d.A[i].stages).map(Number);return Math.max(...e)})();return Math.min(n/e*100,100)})(),variant:"success"})]}),(0,u.jsx)(v,{children:r?f(n,i):"An empty pot... ready for something special to grow."}),(0,u.jsx)(o.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?A(!0):(null===j||void 0===j||j.type,e((0,a.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,u.jsxs)(c.A,{show:b,onHide:()=>A(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,u.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(o.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,u.jsx)(o.A,{variant:"danger",onClick:()=>{e((0,a._$)()),e((0,a.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,u.jsxs)(c.A,{show:y,onHide:()=>w(!1),children:[(0,u.jsx)(c.A.Header,{closeButton:!0,children:(0,u.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,u.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,u.jsxs)(c.A.Footer,{children:[(0,u.jsx)(o.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,u.jsx)(o.A,{variant:"primary",onClick:()=>{const r=Object.keys(d.A[i].stages).map(Number).sort(((e,r)=>e-r));let t=0;for(let e of r)n>=e&&(t=e);const s={type:"flower",flowerType:i,growthLevel:n,stage:p(n,i),name:`${i.charAt(0).toUpperCase()+i.slice(1)} (Growth: ${n})`,weight:d.A[i].weights[t]};e((0,h.Ci)(s)),e((0,a._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,n)=>{n.d(r,{A:()=>u});var t=n(8139),i=n.n(t),s=n(5043),a=n(7852);function l(e,r){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?r(e,n++):e))}var o=n(579);function c(e,r,n){const t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function d(e,r){let{min:n,now:t,max:s,label:a,visuallyHidden:l,striped:d,animated:h,className:u,style:m,variant:x,bsPrefix:v,...g}=e;return(0,o.jsx)("div",{ref:r,...g,role:"progressbar",className:i()(u,`${v}-bar`,{[`bg-${x}`]:x,[`${v}-bar-animated`]:h,[`${v}-bar-striped`]:h||d}),style:{width:`${c(t,n,s)}%`,...m},"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":s,children:l?(0,o.jsx)("span",{className:"visually-hidden",children:a}):a})}const h=s.forwardRef(((e,r)=>{let{isChild:n=!1,...t}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(c.bsPrefix=(0,a.oU)(c.bsPrefix,"progress"),n)return d(c,r);const{min:h,now:u,max:m,label:x,visuallyHidden:v,striped:g,animated:p,bsPrefix:f,variant:j,className:b,children:A,...y}=c;return(0,o.jsx)("div",{ref:r,...y,className:i()(b,f),children:A?l(A,(e=>(0,s.cloneElement)(e,{isChild:!0}))):d({min:h,now:u,max:m,label:x,visuallyHidden:v,striped:g,animated:p,bsPrefix:f,variant:j},r)})}));h.displayName="ProgressBar";const u=h},6440:e=>{var r=function(){};e.exports=r}}]);
//# sourceMappingURL=5976.bc7d13b0.chunk.js.map