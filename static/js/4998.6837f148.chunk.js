"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[4998],{4998:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var i=s(9950),n=s(4752),a=s(5216),r=s(448),o=s(4431),l=s(1283),d=s(4414);const c=n.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,x=n.Ay.div`
  position: fixed;
  inset: 0;
  background: black;
  opacity: ${e=>e.darkness};
  transition: opacity 2s ease;
  pointer-events: none;
  z-index: 100;
`,h=n.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${c} 3s ease-in;
  z-index: 1000;
`,p=n.Ay.div`
  position: fixed;
  bottom: 70px;
  left: 120px;
  font-size: 24px;
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
  opacity: ${e=>e.show?.02:0};
  transition: opacity 2s ease-in-out;
  z-index: 1000;
`,f=()=>{const[e,t]=(0,i.useState)(0),[s,n]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=setInterval((()=>{t((t=>t>=1?(clearInterval(e),n(!0),setTimeout((()=>f(!0)),1e3),1):t+.1))}),2e3);return()=>clearInterval(e)}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Gy,{children:(0,d.jsx)(r.ee,{children:(0,d.jsxs)(a.A.Body,{children:[(0,d.jsx)(a.A.Title,{children:(0,d.jsx)(o.A,{text:"Level 13 - Are you afraid?",size:"medium"})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(o.A,{text:"The darkness is coming..."})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(o.A,{text:"They say bad things happen in the dark...",size:"small"})})]})})}),(0,d.jsx)(x,{darkness:e}),c&&(0,d.jsx)(p,{show:c,children:"\ud83d\udc41\ufe0f\ud83d\udc41\ufe0f"}),s&&(0,d.jsx)(h,{children:(0,d.jsx)(l.A,{targetLevel:0,variant:"outline-danger",children:"Escape the Dark back to Level 0"})})]})}}}]);