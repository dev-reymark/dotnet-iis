import{j as e,r as l,Y as N}from"./app-BdI-KwCI.js";import{S as _,R as O,T as L,H as M,C as S,c as P,a as R,b as B,d as I}from"./Icons-Dn5xl4Uy.js";import{N as $}from"./NavBar-zk6Dyvav.js";import{f as E}from"./chunk-XHQUSKIE-sDrRwMiD.js";import{$ as z}from"./import-B5b9r1EA.js";import{u as w}from"./index-GuhzLaMg.js";import{u as A,d as j,m as F,b as H,c as D,e as T}from"./chunk-CQCLQUUP-CPtDAmWH.js";import{f as Q,g as U,b as W}from"./index-BWD9nH8v.js";import{i as G}from"./chunk-NNXNFLWG-C4-KDRnJ.js";import{i as v}from"./ApplicationLogo-DP4jb1O_.js";import{c as C}from"./chunk-DBLREEYE-Cxx0fF4n.js";import"./chunk-2PIR7DFM-CbcDDgM_.js";import"./chunk-FGDGYNYV-DqdGiaYI.js";import"./chunk-CAFRINWI-BTDo8zfp.js";import"./import-CxfSe8uA.js";var k=Q((p,u)=>{const{as:i,children:d,className:c,...g}=p,{slots:f,classNames:t}=A(),r=U(u),s=i||"footer";return e.jsx(s,{ref:r,className:f.footer({class:W(t==null?void 0:t.footer,c)}),...g,children:d})});k.displayName="NextUI.ModalFooter";var Y=k;function q(p={}){const{id:u,defaultOpen:i,isOpen:d,onClose:c,onOpen:g,onChange:f=()=>{}}=p,t=w(g),r=w(c),[s,b]=z(d,i||!1,f),m=l.useId(),y=u||m,o=d!==void 0,x=l.useCallback(()=>{o||b(!1),r==null||r()},[o,r]),a=l.useCallback(()=>{o||b(!0),t==null||t()},[o,t]),h=l.useCallback(()=>{(s?x:a)()},[s,a,x]);return{isOpen:!!s,onOpen:a,onClose:x,onOpenChange:h,isControlled:o,getButtonProps:(n={})=>({...n,"aria-expanded":s,"aria-controls":y,onClick:E(n.onClick,h)}),getDisclosureProps:(n={})=>({...n,hidden:!s,id:y})}}function ce({projects:p,auth:u}){const[i,d]=l.useState("ALL"),[c,g]=l.useState(""),{isOpen:f,onOpen:t,onOpenChange:r}=q(),[s,b]=l.useState(null),m=a=>{d(a)},y=a=>{g(a.target.value)},o=a=>{b(a),t()},x=p.filter(a=>{const h=i==="ALL"||a.category.toUpperCase()===i,n=a.name.toLowerCase().includes(c.toLowerCase());return h&&n});return e.jsxs(e.Fragment,{children:[e.jsx($,{auth:u}),e.jsx(N,{title:"List of Projects"}),e.jsx("div",{className:"relative overflow-hidden",children:e.jsxs("div",{className:"max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-gray-800 dark:text-neutral-200 mb-8",children:e.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative",children:["Consolidated Projects",e.jsx("span",{className:"absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"})]})}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-neutral-400",children:"Stay in the know with our latest projects."}),e.jsxs("div",{className:"mt-7 sm:mt-12 mx-auto max-w-xl relative",children:[e.jsx("div",{className:"relative flex justify-between gap-2",children:e.jsx(G,{placeholder:"Type to search...",startContent:e.jsx(_,{size:18}),type:"search",className:"mt-6",value:c,onChange:y})}),e.jsx("div",{className:"absolute top-0 end-0 -translate-y-12 translate-x-20",children:e.jsxs("svg",{className:"w-16 h-auto text-orange-500",width:"121",height:"135",viewBox:"0 0 121 135",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164",stroke:"currentColor","stroke-width":"10","stroke-linecap":"round"}),e.jsx("path",{d:"M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5",stroke:"currentColor","stroke-width":"10","stroke-linecap":"round"}),e.jsx("path",{d:"M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874",stroke:"currentColor","stroke-width":"10","stroke-linecap":"round"})]})}),e.jsx("div",{className:"absolute bottom-0 start-0 translate-y-10 -translate-x-32",children:e.jsx("svg",{className:"w-40 h-auto text-cyan-500",width:"347",height:"188",viewBox:"0 0 347 188",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426",stroke:"currentColor","stroke-width":"7","stroke-linecap":"round"})})})]}),e.jsxs("div",{className:"mt-10 sm:mt-20",children:[e.jsxs("button",{className:"m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",onClick:()=>m("ALL"),children:[e.jsx(O,{className:"w-5 h-5 text-primary"}),"ALL"]}),e.jsxs("button",{className:"m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",onClick:()=>m("POS"),children:[e.jsx(L,{className:"w-5 h-5 text-secondary"}),"POS"]}),e.jsxs("button",{className:"m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",onClick:()=>m("WEB"),children:[e.jsx(M,{className:"w-5 h-5 text-success"}),"WEB"]}),e.jsxs("button",{className:"m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",onClick:()=>m("MOBILE"),children:[e.jsx(S,{className:"w-5 h-5 text-danger"}),"MOBILE"]})]})]}),e.jsx(j,{className:"my-10"}),e.jsx("div",{className:"gap-2 grid grid-cols-2 sm:grid-cols-4 py-4",children:x.length>0?x.map((a,h)=>e.jsxs(P,{shadow:"sm",isPressable:!0,onPress:()=>o(a),children:[e.jsx(R,{className:"overflow-visible p-0",children:e.jsx(v,{shadow:"sm",radius:"lg",width:"100%",alt:a.name,className:"w-full object-cover h-[140px]",src:a.image})}),e.jsxs(B,{className:"text-small justify-between",children:[e.jsxs("div",{children:[e.jsx("b",{children:a.name}),e.jsx("p",{className:"text-default-500",children:a.description.length>30?a.description.substring(0,30)+"...":a.description})]}),e.jsx(I,{size:"sm",color:"primary",children:a.category})]})]},h)):e.jsx("div",{className:"col-span-2 sm:col-span-4 text-center text-gray-500",children:"No project created yet."})})]})}),e.jsx(F,{isOpen:f,onOpenChange:r,position:"center",size:"xl",children:e.jsx(H,{children:a=>e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"flex flex-col gap-1",children:e.jsx("p",{className:"text-2xl font-extrabold",children:s==null?void 0:s.name})}),e.jsx(j,{}),e.jsx(T,{children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 py-2 gap-5",children:[e.jsx(v,{className:"w-full object-cover",src:s==null?void 0:s.image,alt:s==null?void 0:s.name}),e.jsx("p",{children:s==null?void 0:s.description})]})}),e.jsx(j,{}),e.jsxs(Y,{children:[e.jsx(C,{size:"sm",color:"danger",onPress:a,children:"Close"}),e.jsx(C,{as:"a",href:s==null?void 0:s.url,size:"sm",color:"primary",target:"_blank",rel:"noopener noreferrer",children:"Live Preview"})]})]})})})]})}export{ce as default};