import{i as a}from"./index-Dgr4ehzK.js";var s={},i={};function l(n,r,...t){var e;const o=`[Next UI]${r?` [${r}]`:" "}: ${n}`;if(!(typeof console>"u")&&!i[o]&&(i[o]=!0,((e=process==null?void 0:s)==null?void 0:e.NODE_ENV)!=="production"))return console.warn(o,t)}function u(n,r){if(n!=null){if(a(n)){n(r);return}try{n.current=r}catch{throw new Error(`Cannot assign value '${r}' to ref '${n}'`)}}}function d(...n){return r=>{n.forEach(t=>u(t,r))}}export{d as m,l as w};