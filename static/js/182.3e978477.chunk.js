"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[182],{7801:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});t(5043);var a=t(8628),o=t(8819),i=t(9642),d=t(8344),n=t(579);const l=()=>(0,n.jsx)(o.Gy,{children:(0,n.jsx)(o.ee,{children:(0,n.jsxs)(a.A.Body,{children:[(0,n.jsx)(a.A.Title,{children:(0,n.jsx)(i.A,{text:"Great minds think alike"})}),(0,n.jsx)(a.A.Text,{children:(0,n.jsx)(i.A,{text:"Welcome to the numberservatory. Observe the numbers of the levels which you have visited in this game. Wrack up a bunch of weird ones and show them off to your friends."})}),(0,n.jsx)(d.A,{})]})})})},8344:(e,r,t)=>{t.d(r,{A:()=>x});var a=t(5043),o=t(5464),i=t(3003),d=t(614);const n={INTEGERS:"Integers",REALS:"Reals",COMPLEX:"Complex",BEYOND:"Beyond"},l=e=>{const r=(0,d.RP)(e);if("object"!==typeof r||!("real"in r))return null;return`hsl(${(Math.atan2(r.imag,r.real)+Math.PI)/(2*Math.PI)*360}, 70%, 50%)`};var s=t(579);const m=o.Ay.div`
  background: ${e=>"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
`,c=o.Ay.div`
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  padding: 0 1rem;
`,h=o.Ay.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: ${e=>e.active?"dark"===e.theme?"rgba(255, 215, 0, 0.2)":"rgba(218, 165, 32, 0.2)":"transparent"};
  color: ${e=>e.disabled?"dark"===e.theme?"#666":"#999":"dark"===e.theme?"gold":"#DAA520"};
  cursor: ${e=>e.disabled?"default":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  position: relative;
  margin-bottom: -2px;
  z-index: ${e=>e.active?2:1};

  &:hover {
    background: ${e=>!e.disabled&&("dark"===e.theme?"rgba(255, 215, 0, 0.1)":"rgba(218, 165, 32, 0.1)")};
  }

  ${e=>e.active&&`\n    background: ${"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};\n    border-bottom: 2px solid ${"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};\n  `}
`,g=(o.Ay.div`
  padding-top: 1.5rem;
`,o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: ${e=>e.shouldScroll?"auto":"hidden"};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`),b=o.Ay.div`
  background: ${e=>e.complexColor||("dark"===e.theme?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)")};
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  transition: all 0.2s ease;
  color: ${e=>e.complexColor?"#fff":"inherit"};
`,p=(o.Ay.div`
  color: ${e=>"dark"===e.theme?"#999":"#666"};
  font-style: italic;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 2em;
`,o.Ay.div`
  color: ${e=>"dark"===e.theme?"#666":"#999"};
  text-align: center;
  font-style: italic;
  padding: 2rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`),u=o.Ay.div`
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: ${e=>"dark"===e.theme?"#444":"#ccc"};
`,x=()=>{var e;const[r,t]=(0,a.useState)(n.INTEGERS),o=(0,i.d4)((e=>e.theme)),x=(0,i.d4)((e=>e.game.visitedLevels)).reduce(((e,r)=>{const t=(e=>{if("Demo"===e||e.includes("Infinity"))return n.BEYOND;const r=(0,d.RP)(e);return"object"===typeof r&&"real"in r?0===r.imag?Number.isInteger(r.real)?n.INTEGERS:n.REALS:n.COMPLEX:n.INTEGERS})(r);return e[t]||(e[t]=[]),e[t].push(r),e}),{}),v=e=>{var r;return(null===(r=x[e])||void 0===r?void 0:r.length)>0};return(0,s.jsxs)(m,{theme:o,children:[(0,s.jsx)(c,{children:Object.values(n).map((e=>(0,s.jsx)(h,{active:r===e,disabled:!v(e),onClick:()=>t(e),theme:o,children:v(e)?e:"???"},e)))}),v(r)?(0,s.jsx)(g,{shouldScroll:(null===(e=x[r])||void 0===e?void 0:e.length)>12,children:(x[r]||[]).sort(((e,r)=>{const t=(0,d.RP)(e),a=(0,d.RP)(r);return"string"===typeof t||"string"===typeof a?e.localeCompare(r):"object"===typeof t&&"object"===typeof a?t.real!==a.real?t.real-a.real:t.imag-a.imag:Number(t)-Number(a)})).map((e=>(0,s.jsx)(b,{theme:o,complexColor:r===n.COMPLEX?l(e):null,children:(0,d.eI)(e)},e)))}):(0,s.jsxs)(p,{theme:o,children:[(0,s.jsx)(u,{theme:o,children:"?"}),"Explore more distant realms to unlock this dimension..."]})]})}}}]);
//# sourceMappingURL=182.3e978477.chunk.js.map