"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[761],{7761:(e,a,i)=>{i.r(a),i.d(a,{default:()=>b});var n=i(5043),r=i(5464),t=i(3003),l=i(7921),s=i(8628),d=i(9620),o=i(4282),c=i(579);const m=r.Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`,u=(0,r.Ay)(s.A)`
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
`,b=()=>{const e=(0,t.wA)(),[a,i]=(0,n.useState)(100),[r,b]=(0,n.useState)(!1),[f,h]=(0,n.useState)(!1),p=n.useCallback((()=>{h(!0),setTimeout((()=>{e((0,l.qX)(14))}),1e3)}),[e]);(0,n.useEffect)((()=>{e((0,l._e)("instability"));const a=setInterval((()=>{i((e=>{const i=e-1;return i<=20&&b(!0),i<=0&&(clearInterval(a),p()),Math.max(0,i)}))}),100);return()=>clearInterval(a)}),[e,p]);return(0,c.jsx)(m,{children:(0,c.jsx)(u,{fading:f,children:(0,c.jsxs)(s.A.Body,{children:[(0,c.jsx)(s.A.Title,{children:"Level 15 - Instability"}),(0,c.jsx)(s.A.Text,{children:"Warning: This level is becoming unstable!"}),(0,c.jsx)(d.A,{now:a,variant:a<=20?"danger":"info",label:`Stability: ${a}%`}),(0,c.jsx)(x,{isWarning:r,children:r?"CRITICAL: LEVEL COLLAPSE IMMINENT":"Status: Unstable"}),(0,c.jsx)(s.A.Text,{children:"Quick! Try to escape through the complex plane before the level collapses!"}),(0,c.jsx)("div",{className:"d-flex justify-content-center",children:(0,c.jsx)(o.A,{variant:"warning",onClick:()=>{e((0,l.qX)({real:15,imag:1}))},disabled:a<=0,children:"Jump to Level 15 + i"})})]})})})}},2663:(e,a,i)=>{i.d(a,{Tj:()=>r,mf:()=>t});var n=i(5043);function r(e,a){let i=0;return n.Children.map(e,(e=>n.isValidElement(e)?a(e,i++):e))}function t(e,a){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===a))}},9620:(e,a,i)=>{i.d(a,{A:()=>u});var n=i(8139),r=i.n(n),t=i(5043),l=i(7852),s=i(2663),d=i(579);function o(e,a,i){const n=(e-a)/(i-a)*100;return Math.round(1e3*n)/1e3}function c(e,a){let{min:i,now:n,max:t,label:l,visuallyHidden:s,striped:c,animated:m,className:u,style:x,variant:b,bsPrefix:f,...h}=e;return(0,d.jsx)("div",{ref:a,...h,role:"progressbar",className:r()(u,`${f}-bar`,{[`bg-${b}`]:b,[`${f}-bar-animated`]:m,[`${f}-bar-striped`]:m||c}),style:{width:`${o(n,i,t)}%`,...x},"aria-valuenow":n,"aria-valuemin":i,"aria-valuemax":t,children:s?(0,d.jsx)("span",{className:"visually-hidden",children:l}):l})}const m=t.forwardRef(((e,a)=>{let{isChild:i=!1,...n}=e;const o={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(o.bsPrefix=(0,l.oU)(o.bsPrefix,"progress"),i)return c(o,a);const{min:m,now:u,max:x,label:b,visuallyHidden:f,striped:h,animated:p,bsPrefix:v,variant:g,className:y,children:j,...A}=o;return(0,d.jsx)("div",{ref:a,...A,className:r()(y,v),children:j?(0,s.Tj)(j,(e=>(0,t.cloneElement)(e,{isChild:!0}))):c({min:m,now:u,max:x,label:b,visuallyHidden:f,striped:h,animated:p,bsPrefix:v,variant:g},a)})}));m.displayName="ProgressBar";const u=m}}]);
//# sourceMappingURL=761.86b18631.chunk.js.map