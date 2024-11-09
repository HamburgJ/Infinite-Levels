"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1003],{5473:(e,t,n)=>{n.d(t,{D7:()=>g,HD:()=>l,Kz:()=>s,bP:()=>d});var a=n(5464);a.i7`
  0% {
    background-position: -1000px 1000px;
    transform: scale(1);
  }
  50% {
    background-position: 1000px 1000px;
    transform: scale(1.2);
  }
  100% {
    background-position: -1000px 1000px;
    transform: scale(1);
  }
`;const i=a.i7`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`,r=(a.i7`
  0% {
    filter: hue-rotate(0deg) blur(2px);
    transform: scale(1.02);
  }
  50% {
    filter: hue-rotate(45deg) blur(3px);
    transform: scale(1);
  }
  100% {
    filter: hue-rotate(0deg) blur(2px);
    transform: scale(1.02);
  }
`,a.i7`
  0% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
  100% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
`),o=(a.i7`
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
    filter: hue-rotate(180deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
    filter: hue-rotate(360deg);
  }
`,a.i7`
  0% {
    transform: perspective(1000px) translateZ(0) rotateX(20deg);
  }
  100% {
    transform: perspective(1000px) translateZ(-2000px) rotateX(20deg);
  }
`,a.i7`
  0%{
    background-position: 0 0;
  }
  100% {
    background-position: 200px 1000000px;
  }
`),s=a.Ay.div`
  position: fixed;
  inset: 0;
  background: ${e=>e.complexCombination?`linear-gradient(145deg, \n        hsl(${e.complexAngle}, 70%, 20%), \n        hsl(${e.complexAngle+45}, 70%, 40%),\n        hsl(${e.complexAngle+90}, 70%, 20%)\n      )`:e.isNegative?"linear-gradient(145deg, #000000, #1a1a1a)":null!=e.complexAngle?`linear-gradient(145deg, hsl(${e.complexAngle}, 70%, 20%), hsl(${e.complexAngle}, 70%, 40%))`:"linear-gradient(145deg, #000000, #1a1a1a)"};
  overflow: hidden;
  perspective: 1000px;
  transform: ${e=>e.flipped?"scaleY(-1)":"none"};

  &::before {
    content: '';
    position: absolute;
    inset: -200%;
    width: 500%;
    height: 500%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 200px,
      ${e=>e.isNegative?"rgba(0, 0, 0, 0.03)":"rgba(255, 255, 255, 0.03)"} 200px,
      ${e=>e.isNegative?"rgba(0, 0, 0, 0.03)":"rgba(255, 255, 255, 0.03)"} 400px
    );
    animation: ${o} 10000s linear infinite;
    mix-blend-mode: screen;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      ${e=>e.isNegative?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"} 0%,
      transparent 70%
    );
    animation: ${r} 10s ease-in-out infinite;
    mix-blend-mode: screen;
  }
`,l=a.Ay.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${e=>e.flipped?"scaleY(-1)":"none"};
  overflow: hidden;
`,d=a.Ay.div`
  font-size: min(15vw, 8rem);
  font-weight: 300;
  text-align: center;
  background: ${e=>e.isNegative?"linear-gradient(135deg, #000 0%, #666 100%)":"linear-gradient(135deg, #fff 0%, #666 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${i} 3s ease-in-out infinite;
  margin: 0 0 2rem;
  display: inline-block;
  will-change: transform;
  transform: ${e=>e.rotated?"rotate(90deg)":"none"};
`,g=a.Ay.div`
  color: ${e=>e.isNegative?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.8)"};
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
  margin: 1rem 0;
  max-width: 600px;
`},1003:(e,t,n)=>{n.r(t),n.d(t,{Level0Background:()=>p,default:()=>c});n(5043);var a=n(8628),i=n(3003),r=n(9642),o=n(6218),s=n(8819),l=(n(5473),n(5464)),d=n(579);const g=l.i7`
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100px -1000000px;
  }
`,p=l.Ay.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(145deg, 
    ${e=>e.isNegative?"#000000, #1a1a1a":"#f8f9fa, #e9ecef"});
  overflow: hidden;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    inset: -200%;
    width: 500%;
    height: 500%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 50px,
      ${e=>e.isNegative?"rgba(255, 255, 255, 0.03) 50px, rgba(255, 255, 255, 0.03) 100px":"rgba(0, 0, 0, 0.03) 50px, rgba(0, 0, 0, 0.03) 100px"}
    );
    animation: ${g} 10000s linear infinite;
    mix-blend-mode: ${e=>e.isNegative?"screen":"multiply"};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      ${e=>e.isNegative?"rgba(255, 255, 255, 0.02)":"rgba(0, 0, 0, 0.02)"} 0%,
      transparent 70%
    );
    mix-blend-mode: ${e=>e.isNegative?"screen":"multiply"};
  }
`,c=e=>{let{isNegative:t}=e;(0,i.wA)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{isNegative:t}),(0,d.jsx)(s.Gy,{children:(0,d.jsx)(s.ee,{children:(0,d.jsxs)(a.A.Body,{children:[(0,d.jsx)(a.A.Title,{as:"h2",className:"mb-4",children:(0,d.jsx)(s.W0,{children:(0,d.jsx)(r.A,{text:"Infinite Levels!",size:"xlarge",color:"#333",enhanced:!0})})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(r.A,{text:"Infinite Levels! is a puzzle game about exploring an infinite collection of levels."})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(r.A,{text:"To proceed to a new level, press the button that displays the level number you want to go to."})}),(0,d.jsx)(a.A.Text,{children:(0,d.jsx)(r.A,{text:"Each button will take you to the level it displays."})}),(0,d.jsx)(s.W0,{children:(0,d.jsx)(o.A,{targetLevel:1,variant:"primary",children:"Level 1"})})]})})})]})}}}]);
//# sourceMappingURL=1003.c744d899.chunk.js.map