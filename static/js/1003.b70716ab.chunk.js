"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1003],{5473:(e,t,i)=>{i.d(t,{D7:()=>g,HD:()=>l,Kz:()=>o,bP:()=>d});var n=i(5464);n.i7`
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
`;const a=n.i7`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`,r=(n.i7`
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
`,n.i7`
  0% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
  100% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
`),s=(n.i7`
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
`,n.i7`
  0% {
    transform: perspective(1000px) translateZ(0) rotateX(20deg);
  }
  100% {
    transform: perspective(1000px) translateZ(-2000px) rotateX(20deg);
  }
`,n.i7`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`),o=n.Ay.div`
  position: fixed;
  inset: 0;
  background: ${e=>e.complexCombination?`linear-gradient(145deg, \n        hsl(${e.complexAngle}, 70%, ${e.isNegative?"90%":"20%"}), \n        hsl(${e.complexAngle+45}, 70%, ${e.isNegative?"95%":"40%"}),\n        hsl(${e.complexAngle+90}, 70%, ${e.isNegative?"90%":"20%"})\n      )`:e.isNegative?"linear-gradient(145deg, #ffffff, #f0f0f0)":null!=e.complexAngle?`linear-gradient(145deg, hsl(${e.complexAngle}, 70%, ${e.isNegative?"90%":"20%"}), \n        hsl(${e.complexAngle}, 70%, ${e.isNegative?"95%":"40%"}))`:"linear-gradient(145deg, #000000, #1a1a1a)"};
  overflow: hidden;
  perspective: 1000px;
  transform: ${e=>e.flipped?"scaleY(-1)":"none"};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 35px,
      ${e=>e.isNegative?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)"} 35px,
      ${e=>e.isNegative?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.03)"} 70px
    );
    background-size: 141.4% 141.4%;
    animation: ${s} 20s linear infinite;
    mix-blend-mode: ${e=>e.isNegative?"multiply":"screen"};
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
    mix-blend-mode: ${e=>e.isNegative?"multiply":"screen"};
  }
`,l=n.Ay.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${e=>e.flipped?"scaleY(-1)":"none"};
  overflow: hidden;
`,d=n.Ay.div`
  font-size: min(15vw, 8rem);
  font-weight: 300;
  text-align: center;
  background: ${e=>e.isNegative?"linear-gradient(135deg, #000 0%, #333 100%)":"linear-gradient(135deg, #fff 0%, #666 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${a} 3s ease-in-out infinite;
  margin: 0 0 2rem;
  display: inline-block;
  will-change: transform;
  transform: ${e=>e.rotated?"rotate(90deg)":"none"};
  filter: ${e=>e.isNegative?"brightness(0.2)":"none"};  // Added for darker symbol
`,g=n.Ay.div`
  color: ${e=>e.isNegative?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.8)"};
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
  margin: 1rem 0;
  max-width: 600px;
`},1003:(e,t,i)=>{i.r(t),i.d(t,{Level0Background:()=>c,default:()=>p});i(5043);var n=i(8628),a=i(3003),r=i(9642),s=i(6218),o=i(8819),l=(i(5473),i(5464)),d=i(579);const g=l.i7`
  0%, 100% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 0 0;
  }
`,c=l.Ay.div`
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
  animation: ${g} 20s ease-in-out infinite;

  }
`,p=(l.i7`
  100% {
    background-position: 100% 100%;
  }
`,e=>{let{isNegative:t}=e;(0,a.wA)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{isNegative:t}),(0,d.jsx)(o.Gy,{children:(0,d.jsx)(o.ee,{children:(0,d.jsxs)(n.A.Body,{children:[(0,d.jsx)(n.A.Title,{as:"h2",className:"mb-4",children:(0,d.jsx)(o.W0,{children:(0,d.jsx)(r.A,{text:"Infinite Levels!",size:"xlarge",color:"#333",enhanced:!0})})}),(0,d.jsx)(n.A.Text,{children:(0,d.jsx)(r.A,{text:"Infinite Levels! is a puzzle game about exploring an infinite collection of levels."})}),(0,d.jsx)(n.A.Text,{children:(0,d.jsx)(r.A,{text:"To proceed to a new level, press the button that displays the level number you want to go to."})}),(0,d.jsx)(n.A.Text,{children:(0,d.jsx)(r.A,{text:"Each button will take you to the level it displays."})}),(0,d.jsx)(n.A.Text,{children:(0,d.jsx)(r.A,{text:"This game is still in development! some things may be broken, and some things are not possible to do yet or not developed yet! Come back soon!"})}),(0,d.jsx)(o.W0,{children:(0,d.jsx)(s.A,{targetLevel:1,variant:"primary",children:"Level 1"})})]})})})]})})}}]);
//# sourceMappingURL=1003.b70716ab.chunk.js.map