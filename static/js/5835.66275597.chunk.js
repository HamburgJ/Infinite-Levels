"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5835],{5835:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var i=s(5043),n=s(5464),a=s(8628),r=s(8819),o=s(9642),l=s(6218),c=s(579);const d=n.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,x=n.Ay.div`
  position: fixed;
  inset: 0;
  background: black;
  opacity: ${e=>e.darkness};
  transition: opacity 2s ease;
  pointer-events: none;
`,h=n.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${d} 3s ease-in;
  z-index: 1000;
`,p=n.Ay.div`
  position: fixed;
  bottom: 70px;
  left: 120px;
  font-size: 24px;
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
  opacity: ${e=>e.show?.05:0};
  transition: opacity 1s ease;
  animation: ${d} 2s ease-in;
  z-index: 1000;
`,f=()=>{const[e,t]=(0,i.useState)(0),[s,n]=(0,i.useState)(!1),[d,f]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{const e=setInterval((()=>{t((t=>t>=1?(clearInterval(e),n(!0),setTimeout((()=>f(!0)),1e3),1):t+.1))}),2e3);return()=>clearInterval(e)}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.Gy,{children:(0,c.jsx)(r.ee,{children:(0,c.jsxs)(a.A.Body,{children:[(0,c.jsx)(a.A.Title,{children:(0,c.jsx)(o.A,{text:"Level 13 - Are you afraid?",size:"large"})}),(0,c.jsx)(a.A.Text,{children:(0,c.jsx)(o.A,{text:"The darkness is coming..."})}),(0,c.jsx)(a.A.Text,{children:(0,c.jsx)(o.A,{text:"They say bad things happen in the dark..."})})]})})}),(0,c.jsx)(x,{darkness:e}),d&&(0,c.jsx)(p,{show:d,children:"\ud83d\udc41\ufe0f\ud83d\udc41\ufe0f"}),s&&(0,c.jsx)(h,{children:(0,c.jsx)(l.A,{targetLevel:0,variant:"outline-danger",children:"Escape the Dark back to Level 0"})})]})}}}]);
//# sourceMappingURL=5835.66275597.chunk.js.map