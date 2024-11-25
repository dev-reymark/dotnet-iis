import{j as e,r as d,a as w}from"./app-Col-cYbq.js";import{u as me,A as xe}from"./ApplicationLogo-DGQaOoAh.js";import{q as fe}from"./transition-DvLmJbi0.js";import{t as H,c as ge,u as he,g as q,b as W,d as C,f as be}from"./index-BjmPL9TL.js";import{c as g}from"./chunk-2PIR7DFM-CbcDDgM_.js";import{m as pe,t as $,d as ve,c as je,e as Z}from"./chunk-XHQUSKIE-D4cABhbZ.js";import{a as ye}from"./chunk-CAFRINWI-BTDo8zfp.js";var Ne=H({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...pe],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...$,"flex","items-center","justify-center"],name:[...$,"font-normal","text-center","text-inherit"],icon:[...$,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:g.solid.default},primary:{base:g.solid.primary},secondary:{base:g.solid.secondary},success:{base:g.solid.success},warning:{base:g.solid.warning},danger:{base:g.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}},disableAnimation:{true:{base:"transition-none",img:"transition-none"},false:{}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]});H({slots:{base:"flex items-center justify-center h-auto w-max",count:"hover:-translate-x-0"},variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}});var Ce=()=>e.jsxs("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[e.jsx("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),e.jsx("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[ze,we]=ge({name:"AvatarGroupContext",strict:!1});function ke(s={}){var a,r,o,i,c,l,n;const f=he(),t=we(),h=!!t,{as:u,ref:A,src:m,name:j,icon:F,classNames:b,fallback:J,alt:K=j||"avatar",imgRef:Q,color:G=(a=t==null?void 0:t.color)!=null?a:"default",radius:M=(r=t==null?void 0:t.radius)!=null?r:"full",size:_=(o=t==null?void 0:t.size)!=null?o:"md",isBordered:O=(i=t==null?void 0:t.isBordered)!=null?i:!1,isDisabled:P=(c=t==null?void 0:t.isDisabled)!=null?c:!1,isFocusable:R=!1,getInitials:X=ye,ignoreFallback:z=!1,showFallback:Y=!1,ImgComponent:ee="img",imgProps:S,className:se,onError:ae,...T}=s,re=u||"span",te=q(A),I=q(Q),{isFocusVisible:oe,isFocused:ne,focusProps:V}=ve(),{isHovered:ie,hoverProps:le}=je({isDisabled:P}),y=(n=(l=s.disableAnimation)!=null?l:f==null?void 0:f.disableAnimation)!=null?n:!1,N=me({src:m,onError:ae,ignoreFallback:z})==="loaded",de=(!m||!N)&&Y,p=d.useMemo(()=>{var x;return Ne({color:G,radius:M,size:_,isBordered:O,isDisabled:P,isInGroup:h,disableAnimation:y,isInGridGroup:(x=t==null?void 0:t.isGrid)!=null?x:!1})},[G,M,_,O,P,y,h,t==null?void 0:t.isGrid]),E=W(b==null?void 0:b.base,se),L=d.useMemo(()=>R||u==="button",[R,u]),ce=d.useCallback((x={})=>({ref:te,tabIndex:L?0:-1,"data-hover":C(ie),"data-focus":C(ne),"data-focus-visible":C(oe),className:p.base({class:W(E,x==null?void 0:x.className)}),...Z(T,le,L?V:{})}),[L,p,E,V,T]),ue=d.useCallback((x={})=>({ref:I,src:m,disableAnimation:y,"data-loaded":C(N),className:p.img({class:b==null?void 0:b.img}),...Z(S,x)}),[p,N,S,y,m,I]);return{Component:re,ImgComponent:ee,src:m,alt:K,icon:F,name:j,imgRef:I,slots:p,classNames:b,fallback:J,isImgLoaded:N,showFallback:de,ignoreFallback:z,getInitials:X,getAvatarProps:ce,getImageProps:ue}}var U=be((s,a)=>{const{Component:r,ImgComponent:o,src:i,icon:c=e.jsx(Ce,{}),alt:l,classNames:n,slots:f,name:t,showFallback:h,fallback:u,getInitials:A,getAvatarProps:m,getImageProps:j}=ke({...s,ref:a}),F=d.useMemo(()=>!h&&i?null:u?e.jsx("div",{"aria-label":l,className:f.fallback({class:n==null?void 0:n.fallback}),role:"img",children:u}):t?e.jsx("span",{"aria-label":l,className:f.name({class:n==null?void 0:n.name}),role:"img",children:A(t)}):e.jsx("span",{"aria-label":l,className:f.icon({class:n==null?void 0:n.icon}),role:"img",children:c}),[h,i,u,t,n]);return e.jsxs(r,{...m(),children:[i&&e.jsx(o,{...j(),alt:l}),F]})});U.displayName="NextUI.Avatar";var Ae=U;const D=d.createContext(),k=({children:s})=>{const[a,r]=d.useState(!1),o=()=>{r(i=>!i)};return e.jsx(D.Provider,{value:{open:a,setOpen:r,toggleOpen:o},children:e.jsx("div",{className:"relative",children:s})})},Fe=({children:s})=>{const{open:a,setOpen:r,toggleOpen:o}=d.useContext(D);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:o,children:s}),a&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Pe=({align:s="right",width:a="48",contentClasses:r="py-1 bg-white",children:o})=>{const{open:i,setOpen:c}=d.useContext(D);let l="origin-top";s==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":s==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let n="";return a==="48"&&(n="w-48"),e.jsx(e.Fragment,{children:e.jsx(fe,{as:d.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${n}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:o})})})})},Ie=({className:s="",children:a,...r})=>e.jsx(w,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+s,children:a});k.Trigger=Fe;k.Content=Pe;k.Link=Ie;const v=k;function Le({active:s=!1,className:a="",children:r,...o}){return e.jsx(w,{...o,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(s?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+a,children:r})}function B({active:s=!1,className:a="",children:r,...o}){return e.jsx(w,{...o,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${s?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${a}`,children:r})}function Se({user:s,header:a,children:r}){const[o,i]=d.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(w,{href:"/",children:e.jsx(xe,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:e.jsx(Le,{href:route("project.index"),active:route().current("dashboard"),children:"Projects"})})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(v,{children:[e.jsx(v.Trigger,{children:e.jsx(Ae,{className:"cursor-pointer",showFallback:!0,avatarProps:{src:s.profile_photo_url,alt:s.name}})}),e.jsxs(v.Content,{children:[e.jsxs("div",{className:"flex flex-col p-2",children:[e.jsx("p",{className:"text-md",children:s.name}),e.jsx("p",{className:"text-sm text-default-500",children:"Administrator"})]}),e.jsx(v.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(v.Link,{href:route("logout"),method:"post",as:"button",className:"text-red-600",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>i(c=>!c),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(o?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(B,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:s.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(B,{href:route("profile.edit"),children:"Profile"}),e.jsx(B,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),a&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:a})}),e.jsx("main",{children:r})]})}export{Se as A};
