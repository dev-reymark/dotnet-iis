import{W as d,r as p,j as s,Y as l}from"./app-BcwumPGi.js";import{G as c}from"./GuestLayout-cYmEDmWq.js";import{T as u,I as f}from"./TextInput-C7koug-o.js";import{I as x}from"./InputLabel-Bip5sJES.js";import{P as w}from"./PrimaryButton-BsL7PO2P.js";import"./ApplicationLogo-_RrGKdHl.js";import"./index-B7O6Osoa.js";function y(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{y as default};