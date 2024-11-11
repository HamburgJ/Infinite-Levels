"use strict";(self.webpackChunklevel_game=self.webpackChunklevel_game||[]).push([[3563],{3563:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var i=t(5043),n=(t(2293),t(8628)),a=(t(6218),t(6050),t(5348),t(8819)),o=(t(1908),t(7049),t(363),t(5464)),s=t(3003),l=t(614);const d={INTEGERS:"Integers",REALS:"Reals",COMPLEX:"Complex",BEYOND:"Beyond"},c=e=>{const r=(0,l.RP)(e);if("object"!==typeof r||!("real"in r))return null;return`hsl(${(Math.atan2(r.imag,r.real)+Math.PI)/(2*Math.PI)*360}, 70%, 50%)`};var m=t(579);const h=o.Ay.div`
  background: ${e=>"dark"===e.theme?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.95)"};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
`,u=o.Ay.div`
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid ${e=>"dark"===e.theme?"rgba(255, 215, 0, 0.3)":"rgba(218, 165, 32, 0.3)"};
  padding: 0 1rem;
`,g=o.Ay.button`
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
`,p=(o.Ay.div`
  padding-top: 1.5rem;
`,o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: ${e=>e.shouldScroll?"auto":"hidden"};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`),x=o.Ay.div`
  background: ${e=>e.complexColor||("dark"===e.theme?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)")};
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  transition: all 0.2s ease;
  color: ${e=>e.complexColor?"#fff":"inherit"};
`,b=(o.Ay.div`
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
`),v=o.Ay.div`
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: ${e=>"dark"===e.theme?"#444":"#ccc"};
`,y=()=>{var e;const[r,t]=(0,i.useState)(d.INTEGERS),n=(0,s.d4)((e=>e.theme)),a=(0,s.d4)((e=>e.game.visitedLevels)).reduce(((e,r)=>{const t=(e=>{if("Demo"===e||e.includes("Infinity"))return d.BEYOND;const r=(0,l.RP)(e);return"object"===typeof r&&"real"in r?0===r.imag?Number.isInteger(r.real)?d.INTEGERS:d.REALS:d.COMPLEX:d.INTEGERS})(r);return e[t]||(e[t]=[]),e[t].push(r),e}),{}),o=e=>{var r;return(null===(r=a[e])||void 0===r?void 0:r.length)>0};return(0,m.jsxs)(h,{theme:n,children:[(0,m.jsx)(u,{children:Object.values(d).map((e=>(0,m.jsx)(g,{active:r===e,disabled:!o(e),onClick:()=>t(e),theme:n,children:o(e)?e:"???"},e)))}),o(r)?(0,m.jsx)(p,{shouldScroll:(null===(e=a[r])||void 0===e?void 0:e.length)>12,children:(a[r]||[]).sort(((e,r)=>{const t=(0,l.RP)(e),i=(0,l.RP)(r);return"string"===typeof t||"string"===typeof i?e.localeCompare(r):"object"===typeof t&&"object"===typeof i?t.real!==i.real?t.real-i.real:t.imag-i.imag:Number(t)-Number(i)})).map((e=>(0,m.jsx)(x,{theme:n,complexColor:r===d.COMPLEX?c(e):null,children:(0,l.eI)(e)},e)))}):(0,m.jsxs)(b,{theme:n,children:[(0,m.jsx)(v,{theme:n,children:"?"}),"Explore more distant realms to unlock this dimension..."]})]})},f=()=>(0,m.jsx)(a.Gy,{children:(0,m.jsx)(a.ee,{children:(0,m.jsxs)(n.A.Body,{children:[(0,m.jsx)(n.A.Title,{children:"why is this here?"}),(0,m.jsx)(n.A.Text,{children:"why is this here?"}),(0,m.jsx)(y,{})]})})})},1908:(e,r,t)=>{t.d(r,{A:()=>h});t(5043);var i=t(5464),n=t(3003),a=t(8628),o=(t(6481),t(6218),t(2520)),s=t(579);const l=i.Ay.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`,d=(0,i.Ay)(a.A)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.isMaxShrine&&"\n    background: rgba(70, 0, 70, 0.1);\n    border: 2px solid purple;\n  "}
  
  ${e=>e.isComplete&&!e.isMaxShrine&&"\n    background: rgba(255, 215, 0, 0.1);\n    border-color: gold;\n  "}

  ${e=>e.isOverLimit&&"\n    background: rgba(255, 0, 0, 0.1);\n    border-color: red;\n  "}
`,c=i.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${e=>e.isMaxShrine?"purple":e.isOverLimit?"#ff0000":e.isComplete?"gold":"#666"};
`,m=i.Ay.div`
  color: ${e=>e.isOverLimit?"red":"inherit"};
  font-weight: ${e=>e.isOverLimit?"bold":"normal"};
`,h=e=>{let{requiredCount:r=null,maximumCount:t=null,children:i,overLimitMessage:h="Too many achievements! You must prestige to access this content."}=e;const u=(0,n.d4)((e=>e.achievements.achievements)),g=Object.keys(u).length,p=null!==t,x=p&&g>t,b=!p&&(!(!o.A.isDebugMode||!o.A.debugFeatures.unlockAllShrines)||g>=r),v=p?!x:b;return(0,s.jsx)(l,{children:(0,s.jsx)(d,{isComplete:v,isOverLimit:x,isMaxShrine:p,children:(0,s.jsxs)(a.A.Body,{children:[(0,s.jsx)(c,{isComplete:v,isOverLimit:x,isMaxShrine:p,children:p?"\ud83d\udd2e":v?"\ud83d\udd13":"\ud83d\udd12"}),(0,s.jsx)(a.A.Title,{children:p?"Prestige Shrine":"Achievement Shrine"}),(0,s.jsx)(m,{isOverLimit:x,children:p?(0,s.jsxs)(s.Fragment,{children:["Current: ",g," / Maximum: ",t]}):(0,s.jsxs)(s.Fragment,{children:["Progress: ",g," / ",r]})}),p?x?(0,s.jsx)(a.A.Text,{className:"text-danger",children:h}):(0,s.jsx)(a.A.Text,{children:i}):b?(0,s.jsx)(a.A.Text,{children:i}):(0,s.jsxs)(a.A.Text,{children:["Return when you have unlocked at least ",r," achievements..."]})]})})})}},6050:(e,r,t)=>{t.d(r,{A:()=>y});var i=t(5043),n=t(5464),a=t(3003),o=t(4103),s=t(3173),l=t(4282),d=t(5284),c=t(5985),m=t(1676),h=t(579);const u=n.Ay.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`,g=n.Ay.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  cursor: ${e=>e.clickable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.clickable?"scale(1.1)":"none"};
  }
`,p=n.Ay.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`,x=n.Ay.div`
  margin: 1rem 0;
  width: 100%;
`,b=(e,r)=>{if(!r)return null;const t=c.A[r].stages,i=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let n=i.length-1;n>=0;n--)if(e>=i[n])return t[i[n]];return t[0]},v=(e,r)=>{if(!r)return"An empty pot... ready for something special to grow.";const t=c.A[r].messages,i=Object.keys(t).map(Number).sort(((e,r)=>e-r));for(let n=i.length-1;n>=0;n--)if(e>=i[n])return t[i[n]];return t[0]},y=()=>{const e=(0,a.wA)(),{hasPlant:r,growthLevel:t,flowerType:n}=(0,a.d4)((e=>e.flower)),y=(0,a.d4)((e=>e.inventory.equippedItem)),[f,A]=(0,i.useState)(!1),[j,k]=(0,i.useState)(!1),[w,$]=(0,i.useState)(!1);return(0,h.jsxs)(u,{children:[(0,h.jsx)(g,{clickable:r,onClick:()=>{r&&k(!0)},children:r?b(t,n):null}),r&&(0,h.jsxs)(x,{children:[(0,h.jsx)("div",{style:{marginBottom:"0.5rem",fontSize:"0.8rem",color:"#666"},children:"Growth"}),(0,h.jsx)(s.A,{now:(()=>{const e=(()=>{if(!n)return 0;const e=Object.keys(c.A[n].stages).map(Number);return Math.max(...e)})();return Math.min(t/e*100,100)})(),variant:"success"})]}),(0,h.jsx)(p,{children:r?v(t,n):"An empty pot... ready for something special to grow."}),(0,h.jsx)(l.A,{variant:r?"outline-danger":"outline-success",onClick:()=>{r?A(!0):(null===y||void 0===y||y.type,e((0,o.tz)()))},size:"sm",children:r?"Plant New Seed":"Plant Seed"}),(0,h.jsxs)(d.A,{show:f,onHide:()=>A(!1),children:[(0,h.jsx)(d.A.Header,{closeButton:!0,children:(0,h.jsx)(d.A.Title,{children:"Replace Current Plant?"})}),(0,h.jsx)(d.A.Body,{children:"Are you sure you want to remove the current plant and start fresh?"}),(0,h.jsxs)(d.A.Footer,{children:[(0,h.jsx)(l.A,{variant:"secondary",onClick:()=>A(!1),children:"Cancel"}),(0,h.jsx)(l.A,{variant:"danger",onClick:()=>{e((0,o._$)()),e((0,o.tz)()),A(!1)},children:"Replace Plant"})]})]}),(0,h.jsxs)(d.A,{show:j,onHide:()=>k(!1),children:[(0,h.jsx)(d.A.Header,{closeButton:!0,children:(0,h.jsx)(d.A.Title,{children:"Pick Up Flower?"})}),(0,h.jsx)(d.A.Body,{children:"Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower."}),(0,h.jsxs)(d.A.Footer,{children:[(0,h.jsx)(l.A,{variant:"secondary",onClick:()=>k(!1),children:"Cancel"}),(0,h.jsx)(l.A,{variant:"primary",onClick:()=>{const r=Object.keys(c.A[n].stages).map(Number).sort(((e,r)=>e-r));let i=0;for(let e of r)t>=e&&(i=e);const a={type:"flower",flowerType:n,growthLevel:t,stage:b(t,n),name:`${n.charAt(0).toUpperCase()+n.slice(1)} (Growth: ${t})`,weight:c.A[n].weights[i]};e((0,m.Ci)(a)),e((0,o._$)()),k(!1)},children:"Pick Up Flower"})]})]})]})}},3173:(e,r,t)=>{t.d(r,{A:()=>h});var i=t(8139),n=t.n(i),a=t(5043),o=t(7852);function s(e,r){let t=0;return a.Children.map(e,(e=>a.isValidElement(e)?r(e,t++):e))}var l=t(579);function d(e,r,t){const i=(e-r)/(t-r)*100;return Math.round(1e3*i)/1e3}function c(e,r){let{min:t,now:i,max:a,label:o,visuallyHidden:s,striped:c,animated:m,className:h,style:u,variant:g,bsPrefix:p,...x}=e;return(0,l.jsx)("div",{ref:r,...x,role:"progressbar",className:n()(h,`${p}-bar`,{[`bg-${g}`]:g,[`${p}-bar-animated`]:m,[`${p}-bar-striped`]:m||c}),style:{width:`${d(i,t,a)}%`,...u},"aria-valuenow":i,"aria-valuemin":t,"aria-valuemax":a,children:s?(0,l.jsx)("span",{className:"visually-hidden",children:o}):o})}const m=a.forwardRef(((e,r)=>{let{isChild:t=!1,...i}=e;const d={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...i};if(d.bsPrefix=(0,o.oU)(d.bsPrefix,"progress"),t)return c(d,r);const{min:m,now:h,max:u,label:g,visuallyHidden:p,striped:x,animated:b,bsPrefix:v,variant:y,className:f,children:A,...j}=d;return(0,l.jsx)("div",{ref:r,...j,className:n()(f,v),children:A?s(A,(e=>(0,a.cloneElement)(e,{isChild:!0}))):c({min:m,now:h,max:u,label:g,visuallyHidden:p,striped:x,animated:b,bsPrefix:v,variant:y},r)})}));m.displayName="ProgressBar";const h=m}}]);
//# sourceMappingURL=3563.49825655.chunk.js.map