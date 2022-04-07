/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@faker-js/faker@6.1.2/dist/cjs/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var c=Object.create;var t=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var k=(e,i)=>{for(var n in i)t(e,n,{get:i[n],enumerable:!0})},f=(e,i,n,s)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of y(i))!x.call(e,o)&&o!==n&&t(e,o,{get:()=>i[o],enumerable:!(s=l(i,o))||s.enumerable});return e};var F=(e,i,n)=>(n=e!=null?c(d(e)):{},f(i||!e||!e.__esModule?t(n,"default",{value:e,enumerable:!0}):n,e)),u=e=>f(t({},"__esModule",{value:!0}),e);var C={};k(C,{Faker:()=>r.Faker,FakerError:()=>m.FakerError,Gender:()=>p.Gender,default:()=>L,faker:()=>D});module.exports=u(C);var r=require("./faker"),a=F(require("./locales")),m=require("./errors/faker-error"),p=require("./name");const D=new r.Faker({locales:a.default});var L=D;0&&(module.exports={Faker,FakerError,Gender,faker});
