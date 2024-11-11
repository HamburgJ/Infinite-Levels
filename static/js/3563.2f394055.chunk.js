"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3563],{3563:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var a=t(5043),i=(t(2293),t(8628)),o=(t(6218),t(6050),t(5348),t(8819)),d=(t(1908),t(7049),t(363),t(5464)),n=t(3003),l=t(614);const s={INTEGERS:"Integers",REALS:"Reals",COMPLEX:"Complex",BEYOND:"Beyond"},m=e=>{const r=(0,l.RP)(e);if("object"!==typeof r||!("real"in r))return null;return`hsl(${(Math.atan2(r.imag,r.real)+Math.PI)/(2*Math.PI)*360}, 70%, 50%)`};var c=t(579);const g=d.Ay.div`
  background: ${e=>"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
`,h=d.Ay.div`
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  padding: 0 1rem;
`,p=d.Ay.button`
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
`,b=(d.Ay.div`
  padding-top: 1.5rem;
`,d.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: ${e=>e.shouldScroll?"auto":"hidden"};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`),u=d.Ay.div`
  background: ${e=>e.complexColor||("dark"===e.theme?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)")};
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  transition: all 0.2s ease;
  color: ${e=>e.complexColor?"#fff":"inherit"};
`,x=(d.Ay.div`
  color: ${e=>"dark"===e.theme?"#999":"#666"};
  font-style: italic;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 2em;
`,d.Ay.div`
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
`),y=d.Ay.div`
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: ${e=>"dark"===e.theme?"#444":"#ccc"};
`,f=()=>{var e;const[r,t]=(0,a.useState)(s.INTEGERS),i=(0,n.d4)((e=>e.theme)),o=(0,n.d4)((e=>e.game.visitedLevels)).reduce(((e,r)=>{const t=(e=>{if("Demo"===e||e.includes("Infinity"))return s.BEYOND;const r=(0,l.RP)(e);return"object"===typeof r&&"real"in r?0===r.imag?Number.isInteger(r.real)?s.INTEGERS:s.REALS:s.COMPLEX:s.INTEGERS})(r);return e[t]||(e[t]=[]),e[t].push(r),e}),{}),d=e=>{var r;return(null===(r=o[e])||void 0===r?void 0:r.length)>0};return(0,c.jsxs)(g,{theme:i,children:[(0,c.jsx)(h,{children:Object.values(s).map((e=>(0,c.jsx)(p,{active:r===e,disabled:!d(e),onClick:()=>t(e),theme:i,children:d(e)?e:"???"},e)))}),d(r)?(0,c.jsx)(b,{shouldScroll:(null===(e=o[r])||void 0===e?void 0:e.length)>12,children:(o[r]||[]).sort(((e,r)=>{const t=(0,l.RP)(e),a=(0,l.RP)(r);return"string"===typeof t||"string"===typeof a?e.localeCompare(r):"object"===typeof t&&"object"===typeof a?t.real!==a.real?t.real-a.real:t.imag-a.imag:Number(t)-Number(a)})).map((e=>(0,c.jsx)(u,{theme:i,complexColor:r===s.COMPLEX?m(e):null,children:(0,l.eI)(e)},e)))}):(0,c.jsxs)(x,{theme:i,children:[(0,c.jsx)(y,{theme:i,children:"?"}),"Explore more distant realms to unlock this dimension..."]})]})},v=()=>(0,c.jsx)(o.Gy,{children:(0,c.jsx)(o.ee,{children:(0,c.jsxs)(i.A.Body,{children:[(0,c.jsx)(i.A.Title,{children:"why is this here?"}),(0,c.jsx)(i.A.Text,{children:"why is this here?"}),(0,c.jsx)(f,{})]})})})}}]);
//# sourceMappingURL=3563.2f394055.chunk.js.map