import{v as y,a3 as q,l as S,r as x,a4 as k,x as C,a5 as T,a6 as R,q as _,H as A,a7 as N,a8 as w,p as B,F as E,a9 as L}from"./entry.89766809.js";const g=globalThis.requestIdleCallback||(t=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(s)},1)}),I=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=y();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{g(t)}):g(t)};async function P(t,a=q()){const{path:s,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>P(t,a));a._routePreloaded.add(s);const i=e.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of i){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>r.splice(r.indexOf(o)));r.push(o)}await Promise.all(r)}const D=(...t)=>t.find(a=>a!==void 0),U="noopener noreferrer";function V(t){const a=t.componentName||"NuxtLink",s=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?B:E;if(typeof e=="string")return i(e,!0);const n="path"in e?e.path:r(e).path;return{...e,name:void 0,path:i(n,!0)}};return S({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const i=q(),n=x(()=>{const l=e.to||e.href||"";return s(l,i.resolve)}),o=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||k(n.value,{acceptRelative:!0})),v=C(!1),f=C(null),b=l=>{var d;f.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!F()){const d=y();let h,u=null;T(()=>{const p=j();O(()=>{h=g(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=p.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:i.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!o.value&&P(n.value,i).catch(()=>{})]),v.value=!0}))})})}),R(()=>{h&&I(h),u==null||u(),u=null})}return()=>{var p,m;if(!o.value){const c={ref:b,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(A("RouterLink"),c,r.default)}const l=typeof n.value=="object"?((p=i.resolve(n.value))==null?void 0:p.href)??null:n.value||null,d=e.target||null,h=e.noRel?null:D(e.rel,t.externalRelAttribute,l?U:"")||null,u=()=>L(l,{replace:e.replace});return e.custom?r.default?r.default({href:l,navigate:u,get route(){if(!l)return;const c=N(l);return{path:c.pathname,fullPath:c.pathname,get query(){return w(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:o.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:l,rel:h,target:d},(m=r.default)==null?void 0:m.call(r))}}})}const M=V({componentName:"NuxtLink"});function j(){const t=y();if(t._observer)return t._observer;let a=null;const s=new Map,e=(i,n)=>(a||(a=new IntersectionObserver(o=>{for(const v of o){const f=s.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),s.set(i,n),a.observe(i),()=>{s.delete(i),a.unobserve(i),s.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function F(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{M as _};
