"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1468],{1468:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(9950),s=r(4752),i=(r(6760),r(5216)),l=r(1283),o=(r(7911),r(4085),r(448)),a=r(8738),c=r.n(a),d=(r(2241),r(4293)),h=r(3882),x=r(4089),u=r(9865),m=r(6005),j=r(1932),v=r(4414);const A=n.forwardRef(((e,t)=>{let{bsPrefix:r,active:n,disabled:s,eventKey:i,className:l,variant:o,action:a,as:d,...h}=e;r=(0,x.oU)(r,"list-group-item");const[A,g]=(0,m.M)({key:(0,j.u)(i,h.href),active:n,...h}),p=(0,u.A)((e=>{if(s)return e.preventDefault(),void e.stopPropagation();A.onClick(e)}));s&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0);const f=d||(a?h.href?"a":"button":"div");return(0,v.jsx)(f,{ref:t,...h,...A,onClick:p,className:c()(l,r,g.isActive&&"active",s&&"disabled",o&&`${r}-${o}`,a&&`${r}-action`)})}));A.displayName="ListGroupItem";const g=A,p=n.forwardRef(((e,t)=>{const{className:r,bsPrefix:n,variant:s,horizontal:i,numbered:l,as:o="div",...a}=(0,d.Zw)(e,{activeKey:"onSelect"}),u=(0,x.oU)(n,"list-group");let m;return i&&(m=!0===i?"horizontal":`horizontal-${i}`),(0,v.jsx)(h.A,{ref:t,...a,as:o,className:c()(r,u,s&&`${u}-${s}`,m&&`${u}-${m}`,l&&`${u}-numbered`)})}));p.displayName="ListGroup";const f=Object.assign(p,{Item:g});var y=r(969),b=r(7853),w=r(112);const k=(0,s.Ay)(f.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,C=()=>(0,v.jsx)(o.Gy,{children:(0,v.jsx)(o.ee,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)(i.A.Title,{children:(0,v.jsx)(w.A,{text:"Congratulations! You've completed the first 10 levels!",size:"medium"})}),(0,v.jsx)(i.A.Text,{children:(0,v.jsx)(w.A,{text:"If you haven't yet, don't worry, you'll figure out how to get there if you keep exploring! These first levels were meant as a tutorial to introduce you to the mechanics of the game."})}),(0,v.jsxs)(f,{children:[(0,v.jsxs)(k,{children:[(0,v.jsx)(w.A,{text:"Levels 0-3: "}),(0,v.jsx)("em",{children:(0,v.jsx)(w.A,{text:"Buttons and Hints"})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(w.A,{text:"Levels 4-6: "}),(0,v.jsx)("em",{children:(0,v.jsx)(w.A,{text:"Achievements and Items"})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(w.A,{text:"Level 7: "}),(0,v.jsx)("em",{children:(0,v.jsx)(w.A,{text:"Basic Traveling Techniques"})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(w.A,{text:"Level 8: "}),(0,v.jsx)("em",{children:(0,v.jsx)(w.A,{text:"Advanced Traveling Techniques"})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(w.A,{text:"Level 9: "}),(0,v.jsx)("em",{children:(0,v.jsx)(w.A,{text:"Secrets"})})]})]}),(0,v.jsx)(i.A.Text,{children:(0,v.jsx)(w.A,{text:"From here on out, finding new levels will be more difficult!"})}),(0,v.jsx)(i.A.Text,{children:(0,v.jsx)(w.A,{text:"Don't forget to use the game hints, and make sure you explore every level! Here are some places to start:"})}),(0,v.jsxs)(f,{variant:"flush",children:[(0,v.jsxs)(k,{children:["\ud83d\udd04 Return to Level 0 and review the game tutorial",(0,v.jsx)(l.A,{targetLevel:0,children:"Level 0"})]}),(0,v.jsxs)(k,{children:["\ud83c\udf0d Travel forth",(0,v.jsx)(l.A,{targetLevel:11,children:"Level 11"})]})]}),(0,v.jsxs)(y.A,{requiredCount:9,children:[" ",(0,v.jsx)(o.W0,{children:(0,v.jsx)(b.A,{})})]})]})})})},969:(e,t,r)=>{r.d(t,{A:()=>x});r(9950);var n=r(4752),s=r(300),i=r(5216),l=(r(7216),r(1283),r(3635)),o=r(4414);const a=n.Ay.div`
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
`,x=e=>{let{requiredCount:t=null,maximumCount:r=null,children:n,overLimitMessage:x="Too many achievements! You must prestige to access this content."}=e;const u=(0,s.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,j=null!==r,v=j&&m>r,A=!j&&(!(!l.A.isDebugMode||!l.A.debugFeatures.unlockAllShrines)||m>=t),g=j?!v:A;return(0,o.jsx)(a,{children:(0,o.jsx)(c,{isComplete:g,isOverLimit:v,isMaxShrine:j,children:(0,o.jsxs)(i.A.Body,{children:[(0,o.jsx)(d,{isComplete:g,isOverLimit:v,isMaxShrine:j,children:j?"\ud83d\udd2e":g?"\ud83d\udd13":"\ud83d\udd12"}),(0,o.jsx)(i.A.Title,{children:j?"Prestige Shrine":"Achievement Shrine"}),(0,o.jsx)(h,{isOverLimit:v,children:j?(0,o.jsxs)(o.Fragment,{children:["Current: ",m," / Maximum: ",r]}):(0,o.jsxs)(o.Fragment,{children:["Progress: ",m," / ",t]})}),j?v?(0,o.jsx)(i.A.Text,{className:"text-danger",children:x}):(0,o.jsx)(i.A.Text,{children:n}):A?(0,o.jsx)(i.A.Text,{children:n}):(0,o.jsxs)(i.A.Text,{children:["Return when you have unlocked at least ",t," achievements..."]})]})})})}},7911:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(9950),s=r(4752),i=r(300),l=r(404),o=r(4601),a=r(7937),c=r(4268),d=r(4090),h=r(8348),x=r(4414);const u=s.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,m=s.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,j=s.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,v=s.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,A=(e,t)=>{if(!t)return null;const r=d.A[t].stages,n=Object.keys(r).map(Number).sort(((e,t)=>e-t));for(let s=n.length-1;s>=0;s--)if(e>=n[s])return r[n[s]];return r[0]},g=(e,t)=>{if(!t)return"An empty pot... ready for something special to grow.";const r=d.A[t].messages,n=Object.keys(r).map(Number).sort(((e,t)=>e-t));for(let s=n.length-1;s>=0;s--)if(e>=n[s])return r[n[s]];return r[0]},p=()=>{const e=(0,i.wA)(),{hasPlant:t,growthLevel:r,flowerType:s}=(0,i.d4)((e=>e.flower)),p=(0,i.d4)((e=>e.inventory.equippedItem)),[f,y]=(0,n.useState)(!1),[b,w]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1);return(0,x.jsxs)(u,{children:[(0,x.jsx)(m,{clickable:t,onClick:()=>{t&&w(!0)},children:t?A(r,s):null}),t&&(0,x.jsxs)(v,{children:[(0,x.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,x.jsx)(o.A,{now:(()=>{const e=(()=>{if(!s)return 0;const e=Object.keys(d.A[s].stages).map(Number);return Math.max(...e)})();return Math.min(r/e*100,100)})(),variant:"success"})]}),(0,x.jsx)(j,{children:t?g(r,s):"An empty pot... ready for something special to grow."}),(0,x.jsx)(a.A,{variant:t?"outline-danger":"outline-success",onClick:()=>{t?y(!0):(null===p||void 0===p||p.type,e((0,l.tz)()))},size:"sm",children:t?"Plant New Seed":"Plant Seed"}),(0,x.jsxs)(c.A,{show:f,onHide:()=>y(!1),children:[(0,x.jsx)(c.A.Header,{closeButton:!0,children:(0,x.jsx)(c.A.Title,{children:"Replace Current Plant?"})}),(0,x.jsx)(c.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,x.jsxs)(c.A.Footer,{children:[(0,x.jsx)(a.A,{variant:"secondary",onClick:()=>y(!1),children:"Cancel"}),(0,x.jsx)(a.A,{variant:"danger",onClick:()=>{e((0,l._$)()),e((0,l.tz)()),y(!1)},children:"Replace Plant"})]})]}),(0,x.jsxs)(c.A,{show:b,onHide:()=>w(!1),children:[(0,x.jsx)(c.A.Header,{closeButton:!0,children:(0,x.jsx)(c.A.Title,{children:"Pick Up Flower?"})}),(0,x.jsx)(c.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,x.jsxs)(c.A.Footer,{children:[(0,x.jsx)(a.A,{variant:"secondary",onClick:()=>w(!1),children:"Cancel"}),(0,x.jsx)(a.A,{variant:"primary",onClick:()=>{const t=Object.keys(d.A[s].stages).map(Number).sort(((e,t)=>e-t));let n=0;for(let e of t)r>=e&&(n=e);const i={type:"flower",flowerType:s,growthLevel:r,stage:A(r,s),name:`${s.charAt(0).toUpperCase()+s.slice(1)} (Growth: ${r})`,weight:d.A[s].weights[n]};e((0,h.Ci)(i)),e((0,l._$)()),w(!1)},children:"Pick Up Flower"})]})]})]})}},2241:e=>{var t=function(){};e.exports=t}}]);