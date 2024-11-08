"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3],{1003:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});r(5043);var a=r(8628),i=r(3003),n=r(9642),s=r(6218),o=r(5464),l=r(8819),d=r(579);const p=o.i7`
  0% {
    transform: translateZ(0) rotateX(0) rotateY(0);
  }
  50% {
    transform: translateZ(100px) rotateX(180deg) rotateY(180deg);
  }
  100% {
    transform: translateZ(0) rotateX(360deg) rotateY(360deg);
  }
`,x=o.i7`
  0% {
    transform: perspective(1000px) translateZ(0) rotateX(20deg);
  }
  100% {
    transform: perspective(1000px) translateZ(-1000px) rotateX(20deg);
  }
`,h=o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  overflow: hidden;
  perspective: 1000px;
  z-index: -1;
`,c=o.Ay.div`
  position: absolute;
  width: 200%;
  height: 200%;
  left: -50%;
  top: -50%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  transform-style: preserve-3d;
  animation: ${x} 20s linear infinite;
`,g=o.Ay.div`
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${p} 8s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &::before {
    transform: rotateY(90deg) translateZ(50px);
  }

  &::after {
    transform: rotateX(90deg) translateZ(50px);
  }
`,f=(0,o.Ay)(a.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin: 2rem auto;
  max-width: 800px;
  position: relative;
  z-index: 1;
`,m=()=>{(0,i.wA)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{children:(0,d.jsx)(c,{children:(()=>{const e=[];for(let t=0;t<100;t++){const r=t%10*.2;e.push((0,d.jsx)(g,{delay:r},t))}return e})()})}),(0,d.jsx)(f,{children:(0,d.jsxs)(a.A.Body,{children:[(0,d.jsx)(a.A.Title,{as:"h2",className:"mb-4",children:(0,d.jsx)(l.W0,{children:(0,d.jsx)(n.A,{text:"Infinite Levels!",size:"xlarge",color:"#333",enhanced:!0})})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(n.A,{text:"Infinite Levels! is a puzzle game about exploring an infinite collection of levels."})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(n.A,{text:"To proceed to a new level, press the button that displays the level number you want to go to."})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(n.A,{text:"Each button will take you to level it displays."})}),(0,d.jsx)(l.W0,{children:(0,d.jsx)(s.A,{targetLevel:1,variant:"primary",children:"Level 1"})})]})})]})}}}]);
//# sourceMappingURL=3.57a196aa.chunk.js.map