"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1003],{1003:(e,i,n)=>{n.r(i),n.d(i,{Level0Background:()=>h,default:()=>m});n(5043);var t=n(8628),s=n(3003),r=n(9642),a=n(6218),l=n(8819),o=(n(5473),n(5464)),d=n(1908),c=n(579);const x=o.i7`
  0%, 100% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 0 0;
  }
`,h=o.Ay.div`
  position: fixed;
  inset: 0;
  perspective: 1000px;
  background-image: repeating-linear-gradient(
    -45deg,
    ${e=>e.isNegative?"#000000":"#f8f9fa"},
    ${e=>e.isNegative?"#000000":"#f8f9fa"} 2rem,
    ${e=>e.isNegative?"#1a1a1a":"#e9ecef"} 2rem,
    ${e=>e.isNegative?"#1a1a1a":"#e9ecef"} 4rem
  );
  background-size: 200% 200%;
  animation: ${x} 20s ease-in-out infinite;

  }
`,m=(o.i7`
  100% {
    background-position: 100% 100%;
  }
`,e=>{let{isNegative:i}=e;(0,s.wA)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h,{isNegative:i}),(0,c.jsx)(l.Gy,{children:(0,c.jsx)(l.ee,{children:(0,c.jsxs)(t.A.Body,{children:[(0,c.jsx)(t.A.Title,{as:"h2",className:"mb-4",children:(0,c.jsx)(l.W0,{children:(0,c.jsx)(r.A,{text:"Infinite Levels!",size:"xlarge",color:"#333",enhanced:!0})})}),(0,c.jsx)(t.A.Text,{children:(0,c.jsx)(r.A,{text:"Infinite Levels! is a puzzle game about exploring an infinite collection of levels."})}),(0,c.jsx)(t.A.Text,{children:(0,c.jsx)(r.A,{text:"To proceed to a new level, press the button that displays the level number you want to go to."})}),(0,c.jsx)(t.A.Text,{children:(0,c.jsx)(r.A,{text:"Each button will take you to the level it displays."})}),(0,c.jsx)(t.A.Text,{children:(0,c.jsx)(r.A,{text:"This game is still in development! some things may be broken, and some things are not possible to do yet or not developed yet! Come back soon!"})}),(0,c.jsx)(l.W0,{children:(0,c.jsx)(a.A,{targetLevel:1,variant:"primary",children:"Level 1"})}),i&&(0,c.jsx)(d.A,{maximumCount:10,children:(0,c.jsx)("p",{children:"You can have up to 10 achievements."})})]})})})]})})},1908:(e,i,n)=>{n.d(i,{A:()=>h});n(5043);var t=n(5464),s=n(3003),r=n(8628),a=(n(6481),n(6218),n(2520)),l=n(579);const o=t.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,t.Ay)(r.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,c=t.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,x=t.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:i=null,maximumCount:n=null,children:t,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const m=(0,s.d4)((e=>e.achievements.achievements)),g=Object.keys(m).length,u=null!==n,v=u&&g>n,p=!u&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||g>=i),b=u?!v:p;return(0,l.jsx)(o,{children:(0,l.jsx)(d,{isComplete:b,isOverLimit:v,isMaxShrine:u,children:(0,l.jsxs)(r.A.Body,{children:[(0,l.jsx)(c,{isComplete:b,isOverLimit:v,isMaxShrine:u,children:u?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(r.A.Title,{children:u?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(x,{isOverLimit:v,children:u?(0,l.jsxs)(l.Fragment,{children:["Current: ",g," / Maximum: ",n]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",g," / ",i]})}),u?v?(0,l.jsx)(r.A.Text,{className:"text-danger",children:h}):(0,l.jsx)(r.A.Text,{children:t}):p?(0,l.jsx)(r.A.Text,{children:t}):(0,l.jsxs)(r.A.Text,{children:["Return when you have unlocked at least ",i," achievements..."]})]})})})}}}]);
//# sourceMappingURL=1003.540d3830.chunk.js.map