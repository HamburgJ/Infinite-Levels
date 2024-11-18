"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[8120],{8120:(e,l,r)=>{r.r(l),r.d(l,{default:()=>h});var t=r(5043),n=r(8628),a=r(4282),s=r(8819),i=r(9642),o=r(6218),c=r(5464),d=r(579);const u=c.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px 0;
`,x=c.Ay.div`
  background: ${e=>e.value?"#d4af37":"#ffffff"};
  border: 2px solid #d4af37;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${e=>!e.value&&"scale(1.05)"};
    box-shadow: ${e=>!e.value&&"0 0 10px rgba(212, 175, 55, 0.5)"};
  }
`,f=c.Ay.div`
  font-size: 1.2rem;
  color: #d4af37;
  text-align: center;
  margin: 10px 0;
`,h=()=>{const[e,l]=(0,t.useState)(Array(16).fill(null)),[r,c]=(0,t.useState)(0),[h,p]=(0,t.useState)(!1);(0,t.useEffect)((()=>{m(),m()}),[]);const m=()=>{l((e=>{const l=[...e],r=l.map(((e,l)=>null===e?l:null)).filter((e=>null!==e));if(r.length>0){l[r[Math.floor(Math.random()*r.length)]]=2}return l}))};return(0,d.jsx)(s.Gy,{children:(0,d.jsx)(s.ee,{children:(0,d.jsxs)(n.A.Body,{children:[(0,d.jsx)(s.W0,{children:(0,d.jsx)(n.A.Title,{children:(0,d.jsx)(i.A,{text:"Level 16 - Powers of 2",size:"medium"})})}),(0,d.jsx)(s.W0,{children:(0,d.jsx)(n.A.Text,{children:(0,d.jsx)(i.A,{text:h?"\ud83c\udf89 Congratulations! You've mastered the power of 2^4!":"Click empty cells to place 2's. Match adjacent numbers to combine them!"})})}),(0,d.jsxs)(f,{children:["Score: ",r]}),(0,d.jsx)(u,{children:e.map(((e,r)=>(0,d.jsx)(x,{value:e,onClick:()=>(e=>{h||l((l=>{const r=[...l];if(!r[e]){r[e]=2,c((e=>e+2));const l=Math.floor(e/4),t=e%4,n=[l>0?e-4:null,l<3?e+4:null,t>0?e-1:null,t<3?e+1:null].filter((e=>null!==e));let a=!1;n.forEach((l=>{r[l]===r[e]&&(r[l]=2*r[e],r[e]=null,c((e=>e+r[l])),a=!0,16===r[l]&&p(!0))})),a||m()}return r}))})(r),children:e||""},r)))}),(0,d.jsxs)(s.W0,{children:[(0,d.jsx)(a.A,{variant:"outline-primary",onClick:()=>{l(Array(16).fill(null)),c(0),p(!1),setTimeout((()=>{m(),m()}),100)},className:"m-2",children:"Reset Grid"}),h&&(0,d.jsx)(o.A,{variant:"outline-success",target:!0,children:"Next Level"})]})]})})})}}}]);
//# sourceMappingURL=8120.6f626d6d.chunk.js.map