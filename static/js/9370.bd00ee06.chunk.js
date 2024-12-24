"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[9370],{9370:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var n=t(9950),s=t(7937),r=t(9431),l=t(5216),a=t(448),d=t(4431),o=t(4752),c=t(4414);const p=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 24px;
`,x=((0,o.Ay)(s.A)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  margin: 0 5px;
`,o.Ay.div`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${e=>e.isCorrect?"#d4edda":e.showResult?"#f8d7da":"transparent"};
  color: ${e=>e.isCorrect?"#155724":e.showResult?"#721c24":"inherit"};
`,o.Ay.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: 5px 0;
`,(0,o.Ay)(r.A)`
  display: inline-block;
  .dropdown-toggle {
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`),u=()=>{const[e,i]=(0,n.useState)(["","",""]),[t,o]=(0,n.useState)(null),[u,h]=(0,n.useState)(!1),g=["+","-","*","/","**"],m=9999===t;return(0,c.jsx)(a.Gy,{children:(0,c.jsx)(a.ee,{children:(0,c.jsxs)(l.A.Body,{children:[(0,c.jsx)(l.A.Title,{children:(0,c.jsx)(d.A,{text:"Four Nines?",size:"medium"})}),(0,c.jsx)(l.A.Text,{children:(0,c.jsx)(d.A,{text:"Bask in the glory of mathematical operations. Despite the small selection of digits, through selection of operations, a variety of results are possible!"})}),(0,c.jsxs)(p,{children:["9",e.map(((t,s)=>(0,c.jsxs)(n.Fragment,{children:[(0,c.jsxs)(x,{children:[(0,c.jsx)(r.A.Toggle,{variant:t?"primary":"outline-primary",children:t||"?"}),(0,c.jsx)(r.A.Menu,{children:g.map((t=>(0,c.jsx)(r.A.Item,{onClick:()=>((t,n)=>{const s=[...e];s[t]=n,i(s),h(!1)})(s,t),children:t},t)))})]}),"9"]},s)))]}),(0,c.jsx)(a.W0,{children:(0,c.jsx)(s.A,{variant:"primary",onClick:()=>{if(!e.includes(""))try{const i=`9${e[0]}9${e[1]}9${e[2]}9`,t=Function(`return ${i}`)();o(t),h(!0)}catch(i){o("Invalid expression"),h(!0)}},disabled:e.includes(""),children:"Calculate"})}),(0,c.jsx)("br",{}),(0,c.jsx)(a.W0,{children:u&&(m?"Congratulations! You found the solution!":`Result: ${t}`)})]})})})}}}]);