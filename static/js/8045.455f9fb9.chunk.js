"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[8045],{8045:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var n=t(9950),s=t(7937),r=t(9431),l=t(5216),a=t(448),d=t(4431),c=t(4752),o=t(4414);const p=c.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 24px;
`,x=((0,c.Ay)(s.A)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  margin: 0 5px;
`,c.Ay.div`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${e=>e.isCorrect?"#d4edda":e.showResult?"#f8d7da":"transparent"};
  color: ${e=>e.isCorrect?"#155724":e.showResult?"#721c24":"inherit"};
`,c.Ay.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: 5px 0;
`,(0,c.Ay)(r.A)`
  display: inline-block;
  .dropdown-toggle {
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`),h=()=>{const[e,i]=(0,n.useState)(["",""]),[t,c]=(0,n.useState)(null),[h,u]=(0,n.useState)(!1),g=["+","-","*","/","**"],m=9999===t;return(0,o.jsx)(a.Gy,{children:(0,o.jsx)(a.ee,{children:(0,o.jsxs)(l.A.Body,{children:[(0,o.jsx)(l.A.Title,{children:(0,o.jsx)(d.A,{text:"Three Nines?",size:"medium"})}),(0,o.jsx)(l.A.Text,{children:(0,o.jsx)(d.A,{text:"Bask in the glory of mathematical operations. Despite the small selection of digits, through selection of operations, a variety of results are possible!"})}),(0,o.jsxs)(p,{children:["9",e.map(((t,s)=>(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(r.A.Toggle,{variant:t?"primary":"outline-primary",children:t||"?"}),(0,o.jsx)(r.A.Menu,{children:g.map((t=>(0,o.jsx)(r.A.Item,{onClick:()=>((t,n)=>{const s=[...e];s[t]=n,i(s),u(!1)})(s,t),children:t},t)))})]}),"9"]},s)))]}),(0,o.jsx)(a.W0,{children:(0,o.jsx)(s.A,{variant:"primary",onClick:()=>{if(!e.includes(""))try{const i=`9${e[0]}9${e[1]}9`,t=Function(`return ${i}`)();c(t),u(!0)}catch(i){c("Invalid expression"),u(!0)}},disabled:e.includes(""),children:"Calculate"})}),(0,o.jsx)("br",{}),(0,o.jsx)(a.W0,{children:h&&(m?"Congratulations! You found the solution!":`Result: ${t}`)})]})})})}}}]);