"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[1105],{1105:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var a=t(9950),o=t(5216),i=t(448),d=t(4431),n=t(4752),l=t(300),s=t(6859);const m={INTEGERS:"Integers",REALS:"Reals",COMPLEX:"Complex",BEYOND:"Beyond"},c=e=>{const r=(0,s.RP)(e);if("object"!==typeof r||!("real"in r))return null;return`hsl(${(Math.atan2(r.imag,r.real)+Math.PI)/(2*Math.PI)*360}, 70%, 50%)`};var h=t(4414);const g=n.Ay.div`
  background: ${e=>"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
`,b=n.Ay.div`
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  padding: 0 1rem;
`,p=n.Ay.button`
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
`,u=(n.Ay.div`
  padding-top: 1.5rem;
`,n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: ${e=>e.shouldScroll?"auto":"hidden"};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`),x=n.Ay.div`
  background: ${e=>e.complexColor||("dark"===e.theme?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)")};
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  transition: all 0.2s ease;
  color: ${e=>e.complexColor?"#fff":"inherit"};
`,f=(n.Ay.div`
  color: ${e=>"dark"===e.theme?"#999":"#666"};
  font-style: italic;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 2em;
`,n.Ay.div`
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
`),v=n.Ay.div`
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: ${e=>"dark"===e.theme?"#444":"#ccc"};
`,y=()=>{var e;const[r,t]=(0,a.useState)(m.INTEGERS),o=(0,l.d4)((e=>e.theme)),i=(0,l.d4)((e=>e.game.visitedLevels)).reduce(((e,r)=>{const t=(e=>{if("Demo"===e||e.includes("Infinity"))return m.BEYOND;const r=(0,s.RP)(e);return"object"===typeof r&&"real"in r?0===r.imag?Number.isInteger(r.real)?m.INTEGERS:m.REALS:m.COMPLEX:m.INTEGERS})(r);return e[t]||(e[t]=[]),e[t].push(r),e}),{}),d=e=>{var r;return(null===(r=i[e])||void 0===r?void 0:r.length)>0};return(0,h.jsxs)(g,{theme:o,children:[(0,h.jsx)(b,{children:Object.values(m).map((e=>(0,h.jsx)(p,{active:r===e,disabled:!d(e),onClick:()=>t(e),theme:o,children:d(e)?e:"???"},e)))}),d(r)?(0,h.jsx)(u,{shouldScroll:(null===(e=i[r])||void 0===e?void 0:e.length)>12,children:(i[r]||[]).sort(((e,r)=>{const t=(0,s.RP)(e),a=(0,s.RP)(r);return"string"===typeof t||"string"===typeof a?e.localeCompare(r):"object"===typeof t&&"object"===typeof a?t.real!==a.real?t.real-a.real:t.imag-a.imag:Number(t)-Number(a)})).map((e=>(0,h.jsx)(x,{theme:o,complexColor:r===m.COMPLEX?c(e):null,children:(0,s.eI)(e)},e)))}):(0,h.jsxs)(f,{theme:o,children:[(0,h.jsx)(v,{theme:o,children:"?"}),"Explore more distant realms to unlock this dimension..."]})]})},k=()=>(0,h.jsx)(i.Gy,{children:(0,h.jsx)(i.ee,{children:(0,h.jsxs)(o.A.Body,{children:[(0,h.jsx)(o.A.Title,{children:(0,h.jsx)(d.A,{text:"Great minds think alike"})}),(0,h.jsx)(o.A.Text,{children:(0,h.jsx)(d.A,{text:"Welcome to the numberservatory. Observe the numbers of the levels which you have visited in this game. Wrack up a bunch of weird ones and show them off to your friends."})}),(0,h.jsx)(y,{})]})})})}}]);