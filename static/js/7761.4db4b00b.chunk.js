"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[7761],{7761:(e,a,i)=>{i.r(a),i.d(a,{default:()=>b});var n=i(5043),r=i(5464),s=i(3003),t=i(3454),l=i(8628),d=i(3173),c=i(4282),o=i(579);const m=r.Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`,u=(0,r.Ay)(l.A)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s;
  opacity: ${e=>e.fading?.5:1};
`,x=r.Ay.div`
  font-family: monospace;
  text-align: center;
  color: ${e=>e.isWarning?"#ff0000":"#000"};
  animation: ${e=>e.isWarning?"blink 1s infinite":"none"};
  margin: 1rem 0;

  @keyframes blink {
    50% { opacity: 0; }
  }
`,b=()=>{const e=(0,s.wA)(),[a,i]=(0,n.useState)(100),[r,b]=(0,n.useState)(!1),[f,h]=(0,n.useState)(!1),v=n.useCallback((()=>{h(!0),setTimeout((()=>{e((0,t.qX)(14))}),1e3)}),[e]);(0,n.useEffect)((()=>{e((0,t._e)("instability"));const a=setInterval((()=>{i((e=>{const i=e-1;return i<=20&&b(!0),i<=0&&(clearInterval(a),v()),Math.max(0,i)}))}),100);return()=>clearInterval(a)}),[e,v]);return(0,o.jsx)(m,{children:(0,o.jsx)(u,{fading:f,children:(0,o.jsxs)(l.A.Body,{children:[(0,o.jsx)(l.A.Title,{children:"Level 15 - Instability"}),(0,o.jsx)(l.A.Text,{children:"Warning: This level is becoming unstable!"}),(0,o.jsx)(d.A,{now:a,variant:a<=20?"danger":"info",label:`Stability: ${a}%`}),(0,o.jsx)(x,{isWarning:r,children:r?"CRITICAL: LEVEL COLLAPSE IMMINENT":"Status: Unstable"}),(0,o.jsx)(l.A.Text,{children:"Quick! Try to escape through the complex plane before the level collapses!"}),(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)(c.A,{variant:"warning",onClick:()=>{e((0,t.qX)({real:15,imag:1}))},disabled:a<=0,children:"Jump to Level 15 + i"})})]})})})}},3173:(e,a,i)=>{i.d(a,{A:()=>u});var n=i(8139),r=i.n(n),s=i(5043),t=i(7852);function l(e,a){let i=0;return s.Children.map(e,(e=>s.isValidElement(e)?a(e,i++):e))}var d=i(579);function c(e,a,i){const n=(e-a)/(i-a)*100;return Math.round(1e3*n)/1e3}function o(e,a){let{min:i,now:n,max:s,label:t,visuallyHidden:l,striped:o,animated:m,className:u,style:x,variant:b,bsPrefix:f,...h}=e;return(0,d.jsx)("div",{ref:a,...h,role:"progressbar",className:r()(u,`${f}-bar`,{[`bg-${b}`]:b,[`${f}-bar-animated`]:m,[`${f}-bar-striped`]:m||o}),style:{width:`${c(n,i,s)}%`,...x},"aria-valuenow":n,"aria-valuemin":i,"aria-valuemax":s,children:l?(0,d.jsx)("span",{className:"visually-hidden",children:t}):t})}const m=s.forwardRef(((e,a)=>{let{isChild:i=!1,...n}=e;const c={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(c.bsPrefix=(0,t.oU)(c.bsPrefix,"progress"),i)return o(c,a);const{min:m,now:u,max:x,label:b,visuallyHidden:f,striped:h,animated:v,bsPrefix:p,variant:g,className:y,children:j,...A}=c;return(0,d.jsx)("div",{ref:a,...A,className:r()(y,p),children:j?l(j,(e=>(0,s.cloneElement)(e,{isChild:!0}))):o({min:m,now:u,max:x,label:b,visuallyHidden:f,striped:h,animated:v,bsPrefix:p,variant:g},a)})}));m.displayName="ProgressBar";const u=m}}]);
//# sourceMappingURL=7761.4db4b00b.chunk.js.map