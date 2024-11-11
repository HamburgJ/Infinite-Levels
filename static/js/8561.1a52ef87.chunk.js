"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[8561],{5473:(e,t,i)=>{i.d(t,{D7:()=>d,HD:()=>o,Kz:()=>l,bP:()=>g});var a=i(5464);a.i7`
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
`;const n=a.i7`
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
`),s=(a.i7`
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
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`),l=a.Ay.div`
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
`,o=a.Ay.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${e=>e.flipped?"scaleY(-1)":"none"};
  overflow: hidden;
`,g=a.Ay.div`
  font-size: min(15vw, 8rem);
  font-weight: 300;
  text-align: center;
  background: ${e=>e.isNegative?"linear-gradient(135deg, #000 0%, #333 100%)":"linear-gradient(135deg, #fff 0%, #666 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${n} 3s ease-in-out infinite;
  margin: 0 0 2rem;
  display: inline-block;
  will-change: transform;
  transform: ${e=>e.rotated?"rotate(90deg)":"none"};
  filter: ${e=>e.isNegative?"brightness(0.2)":"none"};  // Added for darker symbol
`,d=a.Ay.div`
  color: ${e=>e.isNegative?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.8)"};
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
  margin: 1rem 0;
  max-width: 600px;
`},8561:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});i(5043);var a=i(6218),n=i(5473),r=i(579);const s=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Kz,{complexAngle:270}),(0,r.jsxs)(n.HD,{children:[(0,r.jsx)(n.bP,{isNegative:!0,rotated:!0,children:"-\u221ei"}),(0,r.jsx)(n.D7,{isNegative:!0,children:"You've reached negative imaginary infinity. Reality inverts and bends simultaneously."}),(0,r.jsx)(n.D7,{isNegative:!0,children:"The complex plane folds back on itself, creating impossible geometries."}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)(a.A,{targetLevel:0,variant:"outline-dark",children:"Return to Reality"})})]})]})}}]);
//# sourceMappingURL=8561.1a52ef87.chunk.js.map