"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[5625],{5625:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var c=a(5043),s=a(8628),t=a(8819),i=a(5464),l=a(579);const n=i.Ay.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  video {
    width: 100%;
    border-radius: 8px;
  }
`,d=()=>{const e=(0,c.useRef)(null),[r,a]=(0,c.useState)(!1),[i,d]=(0,c.useState)(null);return(0,c.useEffect)((()=>(async function(){try{const r=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=r,a(!0))}catch(r){d("Camera access denied or not available"),console.error("Camera error:",r)}}(),()=>{var r;if(null!==(r=e.current)&&void 0!==r&&r.srcObject){e.current.srcObject.getTracks().forEach((e=>e.stop()))}})),[]),(0,l.jsx)(t.Gy,{children:(0,l.jsx)(t.ee,{children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(s.A.Title,{children:"Level 42"}),(0,l.jsx)(s.A.Text,{children:i?(0,l.jsx)("div",{children:i}):r?(0,l.jsx)(n,{children:(0,l.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0})}):(0,l.jsx)("div",{children:"Please allow camera access..."})})]})})})}}}]);
//# sourceMappingURL=5625.0a2ce3cb.chunk.js.map