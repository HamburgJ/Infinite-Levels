"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[188],{5473:(e,t,n)=>{n.d(t,{D7:()=>g,HD:()=>s,Kz:()=>l,bP:()=>d});var r=n(5464);r.i7`
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
`;const a=r.i7`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`,i=(r.i7`
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
`,r.i7`
  0% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
  100% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
`),o=(r.i7`
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
`,r.i7`
  0% {
    transform: perspective(1000px) translateZ(0) rotateX(20deg);
  }
  100% {
    transform: perspective(1000px) translateZ(-2000px) rotateX(20deg);
  }
`,r.i7`
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 200px -1000000px;
  }
`),l=r.Ay.div`
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
    animation: ${i} 10s ease-in-out infinite;
    mix-blend-mode: screen;
  }
`,s=r.Ay.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${e=>e.flipped?"scaleY(-1)":"none"};
  overflow: hidden;
`,d=r.Ay.div`
  font-size: min(15vw, 8rem);
  font-weight: 300;
  text-align: center;
  background: ${e=>e.isNegative?"linear-gradient(135deg, #000 0%, #666 100%)":"linear-gradient(135deg, #fff 0%, #666 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${a} 3s ease-in-out infinite;
  margin: 0 0 2rem;
  display: inline-block;
  will-change: transform;
  transform: ${e=>e.rotated?"rotate(90deg)":"none"};
`,g=r.Ay.div`
  color: ${e=>e.isNegative?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.8)"};
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
  margin: 1rem 0;
  max-width: 600px;
`},9188:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});n(5043);var r=n(6218),a=n(5473),i=n(579);const o=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Kz,{complexAngle:135,complexCombination:!0}),(0,i.jsxs)(a.HD,{children:[(0,i.jsx)(a.bP,{children:"-\u221e+\u221ei"}),(0,i.jsx)(a.D7,{children:"Reality inverts while expanding perpendicular to itself."}),(0,i.jsx)(a.D7,{children:"The boundary between negative and imaginary dissolves into pure abstraction."}),(0,i.jsx)("div",{className:"d-flex justify-content-center",children:(0,i.jsx)(r.A,{targetLevel:0,variant:"outline-light",children:"Return to Reality"})})]})]})}}]);
//# sourceMappingURL=188.bda47a57.chunk.js.map