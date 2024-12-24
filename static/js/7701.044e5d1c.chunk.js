"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[7701],{7701:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s(9950),a=s(5216),o=s(448),l=s(112),i=s(1283),n=s(4752),d=s(2515),c=s(4414);const h=n.i7`
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(10deg) scale(1.1); }
  75% { transform: rotate(-10deg) scale(0.9); }
  100% { transform: rotate(0deg) scale(1); }
`,u=n.Ay.div`
  background: rgba(255, 0, 0, 0.1);
  border: 3px dashed #ff6b6b;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  animation: ${h} 2s infinite;
`,x=(0,n.Ay)(a.A.Text)`
  color: ${e=>e.color||"#ff0000"};
  font-size: ${e=>e.size||"1.2rem"};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`,m=()=>{const[e,t]=(0,r.useState)(0),[s,n]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const s=setTimeout((()=>{t((e=>e+1))}),2e3);return 3===e&&setTimeout((()=>n(!0)),1500),()=>clearTimeout(s)}),[e]);return(0,c.jsx)(o.Gy,{children:(0,c.jsx)(o.ee,{children:(0,c.jsxs)(a.A.Body,{children:[(0,c.jsx)(o.W0,{children:(0,c.jsx)(a.A.Title,{children:(0,c.jsx)(l.A,{text:"Level 160 - The Jester's Trap",size:"medium"})})}),(0,c.jsx)(u,{children:e>=0&&(0,c.jsx)(x,{color:"#ff0000",children:(0,c.jsx)(l.A,{text:["\ud83c\udccf HAHAHA! You fell for the oldest trick in the book!","\ud83c\udfaa Did you really think a clown would just let you choose ANY level?","\ud83d\ude08 Welcome to my SPECIAL show... where YOU are the entertainment!","\ud83c\udfad But since you've been such a good sport, here's a little gift..."][Math.min(e,3)]})})}),e>=3&&(0,c.jsxs)(o.W0,{children:[(0,c.jsx)(d.A,{cardId:"160",value:"JOKER",suit:"special"}),(0,c.jsx)(a.A.Text,{children:(0,c.jsx)(l.A,{text:"You've obtained the Joker Card! \ud83c\udccf",size:"small"})})]}),s&&(0,c.jsx)(o.W0,{children:(0,c.jsx)(i.A,{variant:"outline-danger",targetLevel:0,className:"mt-3",children:"Escape the Jester's Domain"})})]})})})}}}]);