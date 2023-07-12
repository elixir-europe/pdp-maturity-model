import{v as L,x,y as F,z as U,A as k,f as H,u as M,B as N,C as I,k as O,D as q,E as K,F as W,_ as Q}from"./entry.89766809.js";import{w as P,s as J}from"./utils.41cd5ff6.js";import{u as G}from"./preview.17df94e0.js";const V=()=>null;function mt(...n){var h;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??V,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const i=L(),o=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],c=()=>o()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:x(o()??((h=t.default)==null?void 0:h.call(t))??null),pending:x(!c()),error:F(i.payload._errors,r)});const a={...i._asyncData[r]};a.refresh=a.execute=(y={})=>{if(i._asyncDataPromises[r]){if(y.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if(y._initial&&c())return o();a.pending.value=!0;const g=new Promise((l,d)=>{try{l(e(i))}catch(S){d(S)}}).then(l=>{if(g.cancelled)return i._asyncDataPromises[r];let d=l;t.transform&&(d=t.transform(l)),t.pick&&(d=X(d,t.pick)),a.data.value=d,a.error.value=null}).catch(l=>{var d;if(g.cancelled)return i._asyncDataPromises[r];a.error.value=l,a.data.value=M(((d=t.default)==null?void 0:d.call(t))??null)}).finally(()=>{g.cancelled||(a.pending.value=!1,i.payload.data[r]=a.data.value,a.error.value&&(i.payload._errors[r]=N(a.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=g,i._asyncDataPromises[r]};const u=()=>a.refresh({_initial:!0}),f=t.server!==!1&&i.payload.serverRendered;{const y=I();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const l=y._nuxtOnBeforeMountCbs;y&&(U(()=>{l.forEach(d=>{d()}),l.splice(0,l.length)}),k(()=>l.splice(0,l.length)))}f&&i.isHydrating&&c()?a.pending.value=!1:y&&(i.payload.serverRendered&&i.isHydrating||t.lazy)&&t.immediate?y._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&H(t.watch,()=>a.refresh());const g=i.hook("app:data:refresh",l=>{if(!l||l.includes(r))return a.refresh()});y&&k(g)}const p=Promise.resolve(i._asyncDataPromises[r]).then(()=>a);return Object.assign(p,a),p}function X(n,s){const r={};for(const e of s)r[e]=n[e];return r}const Y={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function Z(n,s={}){s={...Y,...s};const r=A(s);return r.dispatch(n),r.toString()}function A(n){const s=[];let r=[];const e=t=>{s.push(t)};return{toString(){return s.join("")},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const i=/\[object (.*)]/i,o=Object.prototype.toString.call(t),c=i.exec(o),a=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let u=null;if((u=r.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this["_"+a]?this["_"+a](t):n.ignoreUnknown||this._unkown(t,a);else{let f=Object.keys(t);n.unorderedObjects&&(f=f.sort()),n.respectType!==!1&&!D(t)&&f.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(f=f.filter(function(p){return!n.excludeKeys(p)})),e("object:"+f.length+":");for(const p of f)this.dispatch(p),e(":"),n.excludeValues||this.dispatch(t[p]),e(",")}},_array(t,i){if(i=typeof i<"u"?i:n.unorderedArrays!==!1,e("array:"+t.length+":"),!i||t.length<=1){for(const a of t)this.dispatch(a);return}const o=[],c=t.map(a=>{const u=A(n);return u.dispatch(a),o.push(u.getContext()),u.toString()});return r=[...r,...o],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,i){if(e(i),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),D(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const i=[...t];return this._array(i,n.unorderedSets!==!1)},_set(t){e("set:");const i=[...t];return this._array(i,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function D(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class w{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||tt).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const tt={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},et={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,i=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|i<<8|o;for(let a=0;a<4&&e*8+a*6<n.sigBytes*8;a++)r.push(s.charAt(c>>>6*(3-a)&63))}return r.join("")}},rt={parse(n){const s=n.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new w(r,s)}},st={parse(n){return rt.parse(unescape(encodeURIComponent(n)))}};class nt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new w,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=st.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new w(r,i)}}class it extends nt{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const at=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ot=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],m=[];class ct extends it{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new w([...at])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],i=e[1],o=e[2],c=e[3],a=e[4],u=e[5],f=e[6],p=e[7];for(let h=0;h<64;h++){if(h<16)m[h]=s[r+h]|0;else{const B=m[h-15],j=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,b=m[h-2],T=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;m[h]=j+m[h-7]+T+m[h-16]}const y=a&u^~a&f,g=t&i^t&o^i&o,l=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),d=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),S=p+d+y+ot[h]+m[h],R=l+g;p=f,f=u,u=a,a=c+S|0,c=o,o=i,i=t,t=S+R|0}e[0]=e[0]+t|0,e[1]=e[1]+i|0,e[2]=e[2]+o|0,e[3]=e[3]+c|0,e[4]=e[4]+a|0,e[5]=e[5]+u|0,e[6]=e[6]+f|0,e[7]=e[7]+p|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ut(n){return new ct().finalize(n).toString(et)}function C(n,s={}){const r=typeof n=="string"?n:Z(n,s);return ut(r).slice(0,10)}const v=(n,s)=>s.split(".").reduce((r,e)=>r&&r[e],n),$=(n,s)=>Object.keys(n).filter(s).reduce((r,e)=>Object.assign(r,{[e]:n[e]}),{}),wt=n=>s=>Array.isArray(s)?s.map(r=>n(r)):n(s),E=n=>{const s=[],r=[];for(const e of n)["$","_"].includes(e)?s.push(e):r.push(e);return{prefixes:s,properties:r}},Bt=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=E(n);return $(s,t=>!e.includes(t)&&!r.includes(t[0]))},bt=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=E(n);return $(s,t=>e.includes(t)||r.includes(t[0]))},St=(n,s)=>{const r=new Intl.Collator(s.$locale,{numeric:s.$numeric,caseFirst:s.$caseFirst,sensitivity:s.$sensitivity}),e=Object.keys(s).filter(t=>!t.startsWith("$"));for(const t of e)n=n.sort((i,o)=>{const c=[v(i,t),v(o,t)].map(a=>{if(a!==null)return a instanceof Date?a.toISOString():a});return s[t]===-1&&c.reverse(),r.compare(c[0],c[1])});return n},xt=(n,s="Expected an array")=>{if(!Array.isArray(n))throw new TypeError(s)},_=n=>Array.isArray(n)?n:n?[n]:[],lt=["sort","where","only","without"],ft=(n,s)=>{const r={...s};for(const i of lt)r[i]&&(r[i]=_(r[i]));const e=(i,o=c=>c)=>(...c)=>(r[i]=o(...c),t),t={params:()=>({...r,...r.where?{where:[..._(r.where)]}:{},...r.sort?{sort:[..._(r.sort)]}:{}}),only:e("only",_),without:e("without",_),where:e("where",i=>[..._(r.where),..._(i)]),sort:e("sort",i=>[..._(r.sort),..._(i)]),limit:e("limit",i=>parseInt(String(i),10)),skip:e("skip",i=>parseInt(String(i),10)),find:()=>n(t),findOne:()=>(r.first=!0,n(t)),findSurround:(i,o)=>(r.surround={query:i,...o},n(t)),locale:i=>t.where({_locale:i})};return t};function z(n){return JSON.stringify(n,ht)}function ht(n,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}const pt=n=>{let s=z(n);return s=typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s),s=s.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(s.match(/.{1,100}/g)||[]).join("/")},yt=()=>async n=>{const{content:s}=O().public,r=n.params(),e=s.experimental.stripQueryParameters?P(`/query/${`${C(r)}.${s.integrity}`}/${pt(r)}.json`):P(`/query/${C(r)}.${s.integrity}.json`);if(J())return(await Q(()=>import("./client-db.0bb589b4.js"),["./client-db.0bb589b4.js","./entry.89766809.js","./entry.604d21fa.css","./index.a6ef77ff.js","./_commonjsHelpers.28e086c5.js","./preview.17df94e0.js","./utils.41cd5ff6.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(n);const t=await $fetch(e,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:z(r),previewToken:G().getPreviewToken()}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function kt(n,...s){const{content:r}=O().public,e=ft(yt(),typeof n!="string"?n:{});let t;typeof n=="string"&&(t=q(K(n,...s)));const i=e.params;return e.params=()=>{var c,a,u;const o=i();return t&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:W(t)}):o.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=o.sort)!=null&&c.length||(o.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((u=(a=o.where)==null?void 0:a.find(p=>p._locale))!=null&&u._locale||(o.where=o.where||[],o.where.push({_locale:r.defaultLocale}))),o},e}export{xt as a,_ as b,wt as c,bt as d,pt as e,ft as f,v as g,C as h,z as j,kt as q,St as s,mt as u,Bt as w};
