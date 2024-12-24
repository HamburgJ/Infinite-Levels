"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[9868],{9868:(e,i,r)=>{r.r(i),r.d(i,{Level0Background:()=>h,default:()=>u});r(9950);var n=r(5216),t=r(300),s=r(112),a=r(1283),l=r(448),o=(r(5776),r(4752)),d=r(969),c=r(4414);const x=o.i7`
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
`,u=(o.i7`
  100% {
    background-position: 100% 100%;
  }
`,e=>{let{isNegative:i}=e;(0,t.wA)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h,{isNegative:i}),(0,c.jsx)(l.Gy,{children:(0,c.jsx)(l.ee,{children:(0,c.jsxs)(n.A.Body,{children:[(0,c.jsx)(n.A.Title,{as:"h2",className:"mb-4",children:(0,c.jsx)(l.W0,{children:(0,c.jsx)(s.A,{text:"Infinite Levels!",size:"xlarge",color:"#333",enhanced:!0})})}),(0,c.jsx)(n.A.Text,{children:(0,c.jsx)(s.A,{text:"Infinite Levels! is a puzzle game about exploring an infinite collection of levels."})}),(0,c.jsx)(n.A.Text,{children:(0,c.jsx)(s.A,{text:"To proceed to a new level, press the button that displays the level number you want to go to."})}),(0,c.jsx)(n.A.Text,{children:(0,c.jsx)(s.A,{text:"Each button will take you to the level it displays. Every level is filled with secrets, and may have multiple ways to proceed, so be sure to explore!"})}),(0,c.jsx)(l.W0,{children:(0,c.jsx)(a.A,{targetLevel:1,variant:"primary",children:"Level 1"})}),i&&(0,c.jsx)(d.A,{maximumCount:10,children:(0,c.jsx)("p",{children:"You can have up to 10 achievements."})})]})})})]})})},969:(e,i,r)=>{r.d(i,{A:()=>h});r(9950);var n=r(4752),t=r(300),s=r(5216),a=(r(7216),r(1283),r(3635)),l=r(4414);const o=n.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,n.Ay)(s.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,c=n.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,x=n.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:i=null,maximumCount:r=null,children:n,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,t.d4)((e=>e.achievements.achievements)),m=Object.keys(u).length,g=null!==r,v=g&&m>r,p=!g&&(!(!a.A.isDebugMode||!a.A.debugFeatures.unlockAllShrines)||m>=i),b=g?!v:p;return(0,l.jsx)(o,{children:(0,l.jsx)(d,{isComplete:b,isOverLimit:v,isMaxShrine:g,children:(0,l.jsxs)(s.A.Body,{children:[(0,l.jsx)(c,{isComplete:b,isOverLimit:v,isMaxShrine:g,children:g?"\ud83d\udd2e":b?"\ud83d\udd13":"\ud83d\udd12"}),(0,l.jsx)(s.A.Title,{children:g?"Prestige Shrine":"Achievement Shrine"}),(0,l.jsx)(x,{isOverLimit:v,children:g?(0,l.jsxs)(l.Fragment,{children:["Current: ",m," / Maximum: ",r]}):(0,l.jsxs)(l.Fragment,{children:["Progress: ",m," / ",i]})}),g?v?(0,l.jsx)(s.A.Text,{className:"text-danger",children:h}):(0,l.jsx)(s.A.Text,{children:n}):p?(0,l.jsx)(s.A.Text,{children:n}):(0,l.jsxs)(s.A.Text,{children:["Return when you have unlocked at least ",i," achievements..."]})]})})})}}}]);