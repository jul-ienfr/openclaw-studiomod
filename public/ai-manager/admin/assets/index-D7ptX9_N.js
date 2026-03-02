(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const fl=globalThis.process?.env?.NODE_ENV,ot=fl&&!fl.toLowerCase().startsWith("prod");var Mo=Array.isArray,Mh=Array.prototype.indexOf,Wn=Array.prototype.includes,lr=Array.from,on=Object.defineProperty,an=Object.getOwnPropertyDescriptor,dd=Object.getOwnPropertyDescriptors,Ph=Object.prototype,Ah=Array.prototype,Po=Object.getPrototypeOf,vl=Object.isExtensible;function ni(e){return typeof e=="function"}const fs=()=>{};function Ch(e){return e()}function Wa(e){for(var t=0;t<e.length;t++)e[t]()}function ud(){var e,t,s=new Promise((n,i)=>{e=n,t=i});return{promise:s,resolve:e,reject:t}}function Qr(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const s=[];for(const n of e)if(s.push(n),s.length===t)break;return s}const Qe=2,yi=4,ri=8,Ao=1<<24,ln=16,Is=32,Xn=64,Zr=128,Ss=512,Ge=1024,Ze=2048,Rs=4096,ys=8192,rn=16384,Gn=32768,Ws=65536,Ua=1<<17,zh=1<<18,xi=1<<19,hd=1<<20,tn=1<<25,kn=65536,to=1<<21,cr=1<<22,_n=1<<23,qs=Symbol("$state"),fd=Symbol("legacy props"),Th=Symbol(""),vd=Symbol("proxy path"),jn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Co=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function Eh(e){if(ot){const t=new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Dh(){if(ot){const e=new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/async_derived_orphan")}function pl(){if(ot){const e=new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value")}function Oh(){if(ot){const e=new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/derived_references_self")}function pd(e,t,s){if(ot){const n=new Error(`each_key_duplicate
${s?`Keyed each block has duplicate key \`${s}\` at indexes ${e} and ${t}`:`Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/each_key_duplicate")}function Rh(e,t,s){if(ot){const n=new Error(`each_key_volatile
Keyed each block has key that is not idempotent — the key for item at index ${e} was \`${t}\` but is now \`${s}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/each_key_volatile")}function Lh(e){if(ot){const t=new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ih(){if(ot){const e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function jh(e){if(ot){const t=new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/effect_orphan")}function Nh(){if(ot){const e=new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Fh(){if(ot){const e=new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/invalid_snippet")}function Bh(e){if(ot){const t=new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/props_invalid_value")}function qh(e){if(ot){const t=new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/rune_outside_svelte")}function Vh(){if(ot){const e=new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hh(){if(ot){const e=new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Wh(){if(ot){const e=new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Uh(){if(ot){const e=new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Yh=1,Kh=2,gd=4,Xh=8,Gh=16,Jh=1,Qh=2,md=4,Zh=8,tf=16,ef=4,sf=1,nf=2,Ue=Symbol(),af=Symbol("filename"),_d="http://www.w3.org/1999/xhtml",rf="http://www.w3.org/2000/svg",of="@attach";var zo="font-weight: bold",To="font-weight: normal";function lf(){ot?console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",zo,To):console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ar(e){ot?console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,zo,To):console.warn("https://svelte.dev/e/state_proxy_equality_mismatch")}function cf(){ot?console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",zo,To):console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function bd(e){return e===this.v}function yd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function xd(e){return!yd(e,this.v)}let ki=!1,df=!1;function uf(){ki=!0}function Fs(e,t){return e.label=t,kd(e.v,t),e}function kd(e,t){return e?.[vd]?.(t),e}function hf(e){const t=new Error,s=ff();return s.length===0?null:(s.unshift(`
`),on(t,"stack",{value:s.join(`
`)}),on(t,"name",{value:e}),t)}function ff(){const e=Error.stackTraceLimit;Error.stackTraceLimit=1/0;const t=new Error().stack;if(Error.stackTraceLimit=e,!t)return[];const s=t.split(`
`),n=[];for(let i=0;i<s.length;i++){const a=s[i],r=a.replaceAll("\\","/");if(a.trim()!=="Error"){if(a.includes("validate_each_keys"))return[];r.includes("svelte/src/internal")||r.includes("node_modules/.vite")||n.push(a)}}return n}let De=null;function oi(e){De=e}let li=null;function Ya(e){li=e}let ra=null;function gl(e){ra=e}function xe(e,t=!1,s){De={p:De,i:!1,c:null,e:null,s:e,x:null,l:ki&&!t?{s:null,u:null,$:[]}:null},ot&&(De.function=s,ra=s)}function ke(e){var t=De,s=t.e;if(s!==null){t.e=null;for(var n of s)Vd(n)}return e!==void 0&&(t.x=e),t.i=!0,De=t.p,ot&&(ra=De?.function??null),e??{}}function wi(){return!ki||De!==null&&De.l===null}let Nn=[];function wd(){var e=Nn;Nn=[],Wa(e)}function Os(e){if(Nn.length===0&&!Bi){var t=Nn;queueMicrotask(()=>{t===Nn&&wd()})}Nn.push(e)}function vf(){for(;Nn.length>0;)wd()}const eo=new WeakMap;function $d(e){var t=ee;if(t===null)return le.f|=_n,e;if(ot&&e instanceof Error&&!eo.has(e)&&eo.set(e,pf(e,t)),(t.f&Gn)===0&&(t.f&yi)===0)throw ot&&!t.parent&&e instanceof Error&&Sd(e),e;fn(e,t)}function fn(e,t){for(;t!==null;){if((t.f&Zr)!==0){if((t.f&Gn)===0)throw e;try{t.b.error(e);return}catch(s){e=s}}t=t.parent}throw ot&&e instanceof Error&&Sd(e),e}function pf(e,t){const s=an(e,"message");if(!(s&&!s.configurable)){for(var n=Lo?"  ":"	",i=`
${n}in ${t.fn?.name||"<unknown>"}`,a=t.ctx;a!==null;)i+=`
${n}in ${a.function?.[af].split("/").pop()}`,a=a.p;return{message:e.message+`
${i}
`,stack:e.stack?.split(`
`).filter(r=>!r.includes("svelte/src/internal")).join(`
`)}}}function Sd(e){const t=eo.get(e);t&&(on(e,"message",{value:t.message}),on(e,"stack",{value:t.stack}))}const gf=-7169;function Ne(e,t){e.f=e.f&gf|t}function Eo(e){(e.f&Ss)!==0||e.deps===null?Ne(e,Ge):Ne(e,Rs)}function Md(e){if(e!==null)for(const t of e)(t.f&Qe)===0||(t.f&kn)===0||(t.f^=kn,Md(t.deps))}function Pd(e,t,s){(e.f&Ze)!==0?t.add(e):(e.f&Rs)!==0&&s.add(e),Md(e.deps),Ne(e,Ge)}const ga=new Set;let ve=null,Ka=null,Cs=null,ds=[],dr=null,Bi=!1,ci=null;class bn{current=new Map;previous=new Map;#t=new Set;#o=new Set;#e=0;#r=0;#s=null;#a=new Set;#n=new Set;#i=new Map;is_fork=!1;#l=!1;#d(){return this.is_fork||this.#r>0}skip_effect(t){this.#i.has(t)||this.#i.set(t,{d:[],m:[]})}unskip_effect(t){var s=this.#i.get(t);if(s){this.#i.delete(t);for(var n of s.d)Ne(n,Ze),zs(n);for(n of s.m)Ne(n,Rs),zs(n)}}process(t){ds=[],this.apply();var s=ci=[],n=[];for(const i of t)this.#c(i,s,n);if(ci=null,this.#d()){this.#h(n),this.#h(s);for(const[i,a]of this.#i)Td(i,a)}else{Ka=this,ve=null;for(const i of this.#t)i(this);this.#t.clear(),this.#e===0&&this.#f(),ml(n),ml(s),this.#a.clear(),this.#n.clear(),Ka=null,this.#s?.resolve()}Cs=null}#c(t,s,n){t.f^=Ge;for(var i=t.first;i!==null;){var a=i.f,r=(a&(Is|Xn))!==0,o=r&&(a&Ge)!==0,l=o||(a&ys)!==0||this.#i.has(i);if(!l&&i.fn!==null){r?i.f^=Ge:(a&yi)!==0?s.push(i):ua(i)&&((a&ln)!==0&&this.#n.add(i),fi(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var u=i.next;if(u!==null){i=u;break}i=i.parent}}}#h(t){for(var s=0;s<t.length;s+=1)Pd(t[s],this.#a,this.#n)}capture(t,s){s!==Ue&&!this.previous.has(t)&&this.previous.set(t,s),(t.f&_n)===0&&(this.current.set(t,t.v),Cs?.set(t,t.v))}activate(){ve=this,this.apply()}deactivate(){ve===this&&(ve=null,Cs=null)}flush(){if(ds.length>0)ve=this,Ad();else if(this.#e===0&&!this.is_fork){for(const t of this.#t)t(this);this.#t.clear(),this.#f(),this.#s?.resolve()}this.deactivate()}discard(){for(const t of this.#o)t(this);this.#o.clear()}#f(){if(ga.size>1){this.previous.clear();var t=ve,s=Cs,n=!0;for(const a of ga){if(a===this){n=!1;continue}const r=[];for(const[l,c]of this.current){if(a.current.has(l))if(n&&c!==a.current.get(l))a.current.set(l,c);else continue;r.push(l)}if(r.length===0)continue;const o=[...a.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var i=ds;ds=[];const l=new Set,c=new Map;for(const u of r)Cd(u,o,l,c);if(ds.length>0){ve=a,a.apply();for(const u of ds)a.#c(u,[],[]);a.deactivate()}ds=i}}ve=t,Cs=s}this.#i.clear(),ga.delete(this)}increment(t){this.#e+=1,t&&(this.#r+=1)}decrement(t){this.#e-=1,t&&(this.#r-=1),!this.#l&&(this.#l=!0,Os(()=>{this.#l=!1,this.#d()?ds.length>0&&this.flush():this.revive()}))}revive(){for(const t of this.#a)this.#n.delete(t),Ne(t,Ze),zs(t);for(const t of this.#n)Ne(t,Rs),zs(t);this.flush()}oncommit(t){this.#t.add(t)}ondiscard(t){this.#o.add(t)}settled(){return(this.#s??=ud()).promise}static ensure(){if(ve===null){const t=ve=new bn;ga.add(ve),Bi||Os(()=>{ve===t&&t.flush()})}return ve}apply(){}}function mf(e){var t=Bi;Bi=!0;try{for(var s;;){if(vf(),ds.length===0&&(ve?.flush(),ds.length===0))return dr=null,s;Ad()}}finally{Bi=t}}function Ad(){var e=ot?new Set:null;try{for(var t=0;ds.length>0;){var s=bn.ensure();if(t++>1e3){if(ot){var n=new Map;for(const a of s.current.keys())for(const[r,o]of a.updated??[]){var i=n.get(r);i||(i={error:o.error,count:0},n.set(r,i)),i.count+=o.count}for(const a of n.values())a.error&&console.error(a.error)}_f()}if(s.process(ds),yn.clear(),ot)for(const a of s.current.keys())e.add(a)}}finally{if(ds=[],dr=null,ci=null,ot)for(const a of e)a.updated=null}}function _f(){try{Nh()}catch(e){ot&&on(e,"stack",{value:""}),fn(e,dr)}}let Js=null;function ml(e){var t=e.length;if(t!==0){for(var s=0;s<t;){var n=e[s++];if((n.f&(rn|ys))===0&&ua(n)&&(Js=new Set,fi(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Ud(n),Js?.size>0)){yn.clear();for(const i of Js){if((i.f&(rn|ys))!==0)continue;const a=[i];let r=i.parent;for(;r!==null;)Js.has(r)&&(Js.delete(r),a.push(r)),r=r.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(rn|ys))===0&&fi(l)}}Js.clear()}}Js=null}}function Cd(e,t,s,n){if(!s.has(e)&&(s.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Qe)!==0?Cd(i,t,s,n):(a&(cr|ln))!==0&&(a&Ze)===0&&zd(i,t,n)&&(Ne(i,Ze),zs(i))}}function zd(e,t,s){const n=s.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Wn.call(t,i))return!0;if((i.f&Qe)!==0&&zd(i,t,s))return s.set(i,!0),!0}return s.set(e,!1),!1}function zs(e){var t=dr=e,s=t.b;if(s?.is_pending&&(e.f&(yi|ri|Ao))!==0&&(e.f&Gn)===0){s.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(ci!==null&&t===ee&&(e.f&ri)===0)return;if((n&(Xn|Is))!==0){if((n&Ge)===0)return;t.f^=Ge}}ds.push(t)}function Td(e,t){if(!((e.f&Is)!==0&&(e.f&Ge)!==0)){(e.f&Ze)!==0?t.d.push(e):(e.f&Rs)!==0&&t.m.push(e),Ne(e,Ge);for(var s=e.first;s!==null;)Td(s,t),s=s.next}}function bf(e){let t=0,s=wn(0),n;return ot&&Fs(s,"createSubscriber version"),()=>{jo()&&(d(s),ur(()=>(t===0&&(n=Ls(()=>e(()=>qi(s)))),t+=1,()=>{Os(()=>{t-=1,t===0&&(n?.(),n=void 0,qi(s))})})))}}var yf=Ws|xi;function xf(e,t,s,n){new kf(e,t,s,n)}class kf{parent;is_pending=!1;transform_error;#t;#o=null;#e;#r;#s;#a=null;#n=null;#i=null;#l=null;#d=0;#c=0;#h=!1;#f=new Set;#v=new Set;#u=null;#b=bf(()=>(this.#u=wn(this.#d),ot&&Fs(this.#u,"$effect.pending()"),()=>{this.#u=null}));constructor(t,s,n,i){this.#t=t,this.#e=s,this.#r=a=>{var r=ee;r.b=this,r.f|=Zr,n(a)},this.parent=ee.b,this.transform_error=i??this.parent?.transform_error??(a=>a),this.#s=Jn(()=>{this.#m()},yf)}#y(){try{this.#a=hs(()=>this.#r(this.#t))}catch(t){this.error(t)}}#x(t){const s=this.#e.failed;s&&(this.#i=hs(()=>{s(this.#t,()=>t,()=>()=>{})}))}#k(){const t=this.#e.pending;t&&(this.is_pending=!0,this.#n=hs(()=>t(this.#t)),Os(()=>{var s=this.#l=document.createDocumentFragment(),n=Vs();s.append(n),this.#a=this.#g(()=>(bn.ensure(),hs(()=>this.#r(n)))),this.#c===0&&(this.#t.before(s),this.#l=null,Bn(this.#n,()=>{this.#n=null}),this.#p())}))}#m(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#d=0,this.#a=hs(()=>{this.#r(this.#t)}),this.#c>0){var t=this.#l=document.createDocumentFragment();Xd(this.#a,t);const s=this.#e.pending;this.#n=hs(()=>s(this.#t))}else this.#p()}catch(s){this.error(s)}}#p(){this.is_pending=!1;for(const t of this.#f)Ne(t,Ze),zs(t);for(const t of this.#v)Ne(t,Rs),zs(t);this.#f.clear(),this.#v.clear()}defer_effect(t){Pd(t,this.#f,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#g(t){var s=ee,n=le,i=De;xs(this.#s),Ps(this.#s),oi(this.#s.ctx);try{return t()}catch(a){return $d(a),null}finally{xs(s),Ps(n),oi(i)}}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#c+=t,this.#c===0&&(this.#p(),this.#n&&Bn(this.#n,()=>{this.#n=null}),this.#l&&(this.#t.before(this.#l),this.#l=null))}update_pending_count(t){this.#_(t),this.#d+=t,!(!this.#u||this.#h)&&(this.#h=!0,Os(()=>{this.#h=!1,this.#u&&ui(this.#u,this.#d)}))}get_effect_pending(){return this.#b(),d(this.#u)}error(t){var s=this.#e.onerror;let n=this.#e.failed;if(!s&&!n)throw t;this.#a&&(Je(this.#a),this.#a=null),this.#n&&(Je(this.#n),this.#n=null),this.#i&&(Je(this.#i),this.#i=null);var i=!1,a=!1;const r=()=>{if(i){cf();return}i=!0,a&&Uh(),this.#i!==null&&Bn(this.#i,()=>{this.#i=null}),this.#g(()=>{bn.ensure(),this.#m()})},o=l=>{try{a=!0,s?.(l,r),a=!1}catch(c){fn(c,this.#s&&this.#s.parent)}n&&(this.#i=this.#g(()=>{bn.ensure();try{return hs(()=>{var c=ee;c.b=this,c.f|=Zr,n(this.#t,()=>l,()=>r)})}catch(c){return fn(c,this.#s.parent),null}}))};Os(()=>{var l;try{l=this.transform_error(t)}catch(c){fn(c,this.#s&&this.#s.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>fn(c,this.#s&&this.#s.parent)):o(l)})}}function Ed(e,t,s,n){const i=wi()?oa:Do;var a=e.filter(h=>!h.settled);if(s.length===0&&a.length===0){n(t.map(i));return}var r=ee,o=wf(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function c(h){o();try{n(h)}catch(f){(r.f&rn)===0&&fn(f,r)}so()}if(s.length===0){l.then(()=>c(t.map(i)));return}function u(){o(),Promise.all(s.map(h=>Mf(h))).then(h=>c([...t.map(i),...h])).catch(h=>fn(h,r))}l?l.then(u):u()}function wf(){var e=ee,t=le,s=De,n=ve;if(ot)var i=li;return function(r=!0){xs(e),Ps(t),oi(s),r&&n?.activate(),ot&&Ya(i)}}function so(e=!0){xs(null),Ps(null),oi(null),e&&ve?.deactivate(),ot&&Ya(null)}function $f(){var e=ee.b,t=ve,s=e.is_rendered();return e.update_pending_count(1),t.increment(s),()=>{e.update_pending_count(-1),t.decrement(s)}}const Sf=new Set;function oa(e){var t=Qe|Ze,s=le!==null&&(le.f&Qe)!==0?le:null;return ee!==null&&(ee.f|=xi),{ctx:De,deps:null,effects:null,equals:bd,f:t,fn:e,reactions:null,rv:0,v:Ue,wv:0,parent:s??ee,ac:null}}function Mf(e,t,s){ee===null&&Dh();var i=void 0,a=wn(Ue);ot&&(a.label=t);var r=!le,o=new Map;return qf(()=>{var l=ud();i=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(so)}catch(f){l.reject(f),so()}var c=ve;if(r){var u=$f();o.get(c)?.reject(jn),o.delete(c),o.set(c,l)}const h=(f,v=void 0)=>{if(c.activate(),v)v!==jn&&(a.f|=_n,ui(a,v));else{(a.f&_n)!==0&&(a.f^=_n),ui(a,f);for(const[p,m]of o){if(o.delete(p),p===c)break;m.reject(jn)}}u&&u()};l.promise.then(h,f=>h(null,f||"unknown"))}),ca(()=>{for(const l of o.values())l.reject(jn)}),ot&&(a.f|=cr),new Promise(l=>{function c(u){function h(){u===i?l(a):c(i)}u.then(h,h)}c(i)})}function H(e){const t=oa(e);return Gd(t),t}function Do(e){const t=oa(e);return t.equals=xd,t}function _l(e){var t=e.effects;if(t!==null){e.effects=null;for(var s=0;s<t.length;s+=1)Je(t[s])}}let Cr=[];function Pf(e){for(var t=e.parent;t!==null;){if((t.f&Qe)===0)return(t.f&rn)===0?t:null;t=t.parent}return null}function Oo(e){var t,s=ee;if(xs(Pf(e)),ot){let n=di;bl(new Set);try{Wn.call(Cr,e)&&Oh(),Cr.push(e),e.f&=~kn,_l(e),t=no(e)}finally{xs(s),bl(n),Cr.pop()}}else try{e.f&=~kn,_l(e),t=no(e)}finally{xs(s)}return t}function Dd(e){var t=Oo(e);if(!e.equals(t)&&(e.wv=Qd(),(!ve?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){Ne(e,Ge);return}$n||(Cs!==null?(jo()||ve?.is_fork)&&Cs.set(e,t):Eo(e))}function Af(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(jn),t.teardown=fs,t.ac=null,Gi(t,0),No(t))}function Od(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&fi(t)}let di=new Set;const yn=new Map;function bl(e){di=e}let Ro=!1;function Cf(){Ro=!0}function wn(e,t){var s={f:0,v:e,reactions:null,equals:bd,rv:0,wv:0};return s}function N(e,t){const s=wn(e);return Gd(s),s}function Rd(e,t=!1,s=!0){const n=wn(e);return t||(n.equals=xd),ki&&s&&De!==null&&De.l!==null&&(De.l.s??=[]).push(n),n}function M(e,t,s=!1){le!==null&&(!Ts||(le.f&Ua)!==0)&&wi()&&(le.f&(Qe|ln|cr|Ua))!==0&&(Ms===null||!Wn.call(Ms,e))&&Wh();let n=s?ye(t):t;return ot&&kd(n,e.label),ui(e,n)}function ui(e,t){if(!e.equals(t)){var s=e.v;$n?yn.set(e,t):yn.set(e,s),e.v=t;var n=bn.ensure();if(n.capture(e,s),ot){if(ee!==null){e.updated??=new Map;const i=(e.updated.get("")?.count??0)+1;if(e.updated.set("",{error:null,count:i}),i>5){const a=hf("updated at");if(a!==null){let r=e.updated.get(a.stack);r||(r={error:a,count:0},e.updated.set(a.stack,r)),r.count++}}}ee!==null&&(e.set_during_effect=!0)}if((e.f&Qe)!==0){const i=e;(e.f&Ze)!==0&&Oo(i),Eo(i)}e.wv=Qd(),Id(e,Ze),wi()&&ee!==null&&(ee.f&Ge)!==0&&(ee.f&(Is|Xn))===0&&($s===null?Wf([e]):$s.push(e)),!n.is_fork&&di.size>0&&!Ro&&Ld()}return t}function Ld(){Ro=!1;for(const e of di)(e.f&Ge)!==0&&Ne(e,Rs),ua(e)&&fi(e);di.clear()}function yl(e,t=1){var s=d(e),n=t===1?s++:s--;return M(e,s),n}function qi(e){M(e,e.v+1)}function Id(e,t){var s=e.reactions;if(s!==null)for(var n=wi(),i=s.length,a=0;a<i;a++){var r=s[a],o=r.f;if(!(!n&&r===ee)){if(ot&&(o&Ua)!==0){di.add(r);continue}var l=(o&Ze)===0;if(l&&Ne(r,t),(o&Qe)!==0){var c=r;Cs?.delete(c),(o&kn)===0&&(o&Ss&&(r.f|=kn),Id(c,Rs))}else l&&((o&ln)!==0&&Js!==null&&Js.add(r),zs(r))}}}const zf=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;function ye(e){if(typeof e!="object"||e===null||qs in e)return e;const t=Po(e);if(t!==Ph&&t!==Ah)return e;var s=new Map,n=Mo(e),i=N(0),a=qn,r=u=>{if(qn===a)return u();var h=le,f=qn;Ps(null),wl(a);var v=u();return Ps(h),wl(f),v};n&&(s.set("length",N(e.length)),ot&&(e=Df(e)));var o="";let l=!1;function c(u){if(!l){l=!0,o=u,Fs(i,`${o} version`);for(const[h,f]of s)Fs(f,zn(o,h));l=!1}}return new Proxy(e,{defineProperty(u,h,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Vh();var v=s.get(h);return v===void 0?r(()=>{var p=N(f.value);return s.set(h,p),ot&&typeof h=="string"&&Fs(p,zn(o,h)),p}):M(v,f.value,!0),!0},deleteProperty(u,h){var f=s.get(h);if(f===void 0){if(h in u){const v=r(()=>N(Ue));s.set(h,v),qi(i),ot&&Fs(v,zn(o,h))}}else M(f,Ue),qi(i);return!0},get(u,h,f){if(h===qs)return e;if(ot&&h===vd)return c;var v=s.get(h),p=h in u;if(v===void 0&&(!p||an(u,h)?.writable)&&(v=r(()=>{var b=ye(p?u[h]:Ue),x=N(b);return ot&&Fs(x,zn(o,h)),x}),s.set(h,v)),v!==void 0){var m=d(v);return m===Ue?void 0:m}return Reflect.get(u,h,f)},getOwnPropertyDescriptor(u,h){var f=Reflect.getOwnPropertyDescriptor(u,h);if(f&&"value"in f){var v=s.get(h);v&&(f.value=d(v))}else if(f===void 0){var p=s.get(h),m=p?.v;if(p!==void 0&&m!==Ue)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(u,h){if(h===qs)return!0;var f=s.get(h),v=f!==void 0&&f.v!==Ue||Reflect.has(u,h);if(f!==void 0||ee!==null&&(!v||an(u,h)?.writable)){f===void 0&&(f=r(()=>{var m=v?ye(u[h]):Ue,b=N(m);return ot&&Fs(b,zn(o,h)),b}),s.set(h,f));var p=d(f);if(p===Ue)return!1}return v},set(u,h,f,v){var p=s.get(h),m=h in u;if(n&&h==="length")for(var b=f;b<p.v;b+=1){var x=s.get(b+"");x!==void 0?M(x,Ue):b in u&&(x=r(()=>N(Ue)),s.set(b+"",x),ot&&Fs(x,zn(o,b)))}if(p===void 0)(!m||an(u,h)?.writable)&&(p=r(()=>N(void 0)),ot&&Fs(p,zn(o,h)),M(p,ye(f)),s.set(h,p));else{m=p.v!==Ue;var S=r(()=>ye(f));M(p,S)}var k=Reflect.getOwnPropertyDescriptor(u,h);if(k?.set&&k.set.call(v,f),!m){if(n&&typeof h=="string"){var w=s.get("length"),$=Number(h);Number.isInteger($)&&$>=w.v&&M(w,$+1)}qi(i)}return!0},ownKeys(u){d(i);var h=Reflect.ownKeys(u).filter(p=>{var m=s.get(p);return m===void 0||m.v!==Ue});for(var[f,v]of s)v.v!==Ue&&!(f in u)&&h.push(f);return h},setPrototypeOf(){Hh()}})}function zn(e,t){return typeof t=="symbol"?`${e}[Symbol(${t.description??""})]`:zf.test(t)?`${e}.${t}`:/^\d+$/.test(t)?`${e}[${t}]`:`${e}['${t}']`}function Vi(e){try{if(e!==null&&typeof e=="object"&&qs in e)return e[qs]}catch{}return e}function Tf(e,t){return Object.is(Vi(e),Vi(t))}const Ef=new Set(["copyWithin","fill","pop","push","reverse","shift","sort","splice","unshift"]);function Df(e){return new Proxy(e,{get(t,s,n){var i=Reflect.get(t,s,n);return Ef.has(s)?function(...a){Cf();var r=i.apply(this,a);return Ld(),r}:i}})}function Of(){const e=Array.prototype,t=Array.__svelte_cleanup;t&&t();const{indexOf:s,lastIndexOf:n,includes:i}=e;e.indexOf=function(a,r){const o=s.call(this,a,r);if(o===-1){for(let l=r??0;l<this.length;l+=1)if(Vi(this[l])===a){Ar("array.indexOf(...)");break}}return o},e.lastIndexOf=function(a,r){const o=n.call(this,a,r??this.length-1);if(o===-1){for(let l=0;l<=(r??this.length-1);l+=1)if(Vi(this[l])===a){Ar("array.lastIndexOf(...)");break}}return o},e.includes=function(a,r){const o=i.call(this,a,r);if(!o){for(let l=0;l<this.length;l+=1)if(Vi(this[l])===a){Ar("array.includes(...)");break}}return o},Array.__svelte_cleanup=()=>{e.indexOf=s,e.lastIndexOf=n,e.includes=i}}var Xa,Lo,jd,Nd;function Rf(){if(Xa===void 0){Xa=window,Lo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,s=Text.prototype;jd=an(t,"firstChild").get,Nd=an(t,"nextSibling").get,vl(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vl(s)&&(s.__t=void 0),ot&&(e.__svelte_meta=null,Of())}}function Vs(e=""){return document.createTextNode(e)}function hi(e){return jd.call(e)}function la(e){return Nd.call(e)}function g(e,t){return hi(e)}function j(e,t=!1){{var s=hi(e);return s instanceof Comment&&s.data===""?la(s):s}}function _(e,t=1,s=!1){let n=e;for(;t--;)n=la(n);return n}function Lf(e){e.textContent=""}function Fd(){return!1}function Bd(e,t,s){return document.createElementNS(t??_d,e,void 0)}function If(e,t){if(t){const s=document.body;e.autofocus=!0,Os(()=>{document.activeElement===s&&e.focus()})}}let xl=!1;function jf(){xl||(xl=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function $i(e){var t=le,s=ee;Ps(null),xs(null);try{return e()}finally{Ps(t),xs(s)}}function Io(e,t,s,n=s){e.addEventListener(t,()=>$i(s));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),jf()}function qd(e){ee===null&&(le===null&&jh(e),Ih()),$n&&Lh(e)}function Nf(e,t){var s=t.last;s===null?t.last=t.first=e:(s.next=e,e.prev=s,t.last=e)}function js(e,t){var s=ee;if(ot)for(;s!==null&&(s.f&Ua)!==0;)s=s.parent;s!==null&&(s.f&ys)!==0&&(e|=ys);var n={ctx:De,deps:null,nodes:null,f:e|Ze|Ss,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,wv:0,ac:null};ot&&(n.component_function=ra);var i=n;if((e&yi)!==0)ci!==null?ci.push(n):zs(n);else if(t!==null){try{fi(n)}catch(r){throw Je(n),r}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&xi)===0&&(i=i.first,(e&ln)!==0&&(e&Ws)!==0&&i!==null&&(i.f|=Ws))}if(i!==null&&(i.parent=s,s!==null&&Nf(i,s),le!==null&&(le.f&Qe)!==0&&(e&Xn)===0)){var a=le;(a.effects??=[]).push(i)}return n}function jo(){return le!==null&&!Ts}function ca(e){const t=js(ri,null);return Ne(t,Ge),t.teardown=e,t}function Un(e){qd("$effect"),ot&&on(e,"name",{value:"$effect"});var t=ee.f,s=!le&&(t&Is)!==0&&(t&Gn)===0;if(s){var n=De;(n.e??=[]).push(e)}else return Vd(e)}function Vd(e){return js(yi|hd,e)}function Ff(e){return qd("$effect.pre"),ot&&on(e,"name",{value:"$effect.pre"}),js(ri|hd,e)}function Bf(e){bn.ensure();const t=js(Xn|xi,e);return(s={})=>new Promise(n=>{s.outro?Bn(t,()=>{Je(t),n(void 0)}):(Je(t),n(void 0))})}function da(e){return js(yi,e)}function qf(e){return js(cr|xi,e)}function ur(e,t=0){return js(ri|t,e)}function L(e,t=[],s=[],n=[]){Ed(n,t,s,i=>{js(ri,()=>e(...i.map(d)))})}function Jn(e,t=0){var s=js(ln|t,e);return ot&&(s.dev_stack=li),s}function Hd(e,t=0){var s=js(Ao|t,e);return ot&&(s.dev_stack=li),s}function hs(e){return js(Is|xi,e)}function Wd(e){var t=e.teardown;if(t!==null){const s=$n,n=le;kl(!0),Ps(null);try{t.call(null)}finally{kl(s),Ps(n)}}}function No(e,t=!1){var s=e.first;for(e.first=e.last=null;s!==null;){const i=s.ac;i!==null&&$i(()=>{i.abort(jn)});var n=s.next;(s.f&Xn)!==0?s.parent=null:Je(s,t),s=n}}function Vf(e){for(var t=e.first;t!==null;){var s=t.next;(t.f&Is)===0&&Je(t),t=s}}function Je(e,t=!0){var s=!1;(t||(e.f&zh)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Hf(e.nodes.start,e.nodes.end),s=!0),No(e,t&&!s),Gi(e,0),Ne(e,rn);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Wd(e);var i=e.parent;i!==null&&i.first!==null&&Ud(e),ot&&(e.component_function=null),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Hf(e,t){for(;e!==null;){var s=e===t?null:la(e);e.remove(),e=s}}function Ud(e){var t=e.parent,s=e.prev,n=e.next;s!==null&&(s.next=n),n!==null&&(n.prev=s),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=s))}function Bn(e,t,s=!0){var n=[];Yd(e,n,!0);var i=()=>{s&&Je(e),t&&t()},a=n.length;if(a>0){var r=()=>--a||i();for(var o of n)o.out(r)}else i()}function Yd(e,t,s){if((e.f&ys)===0){e.f^=ys;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||s)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next,r=(i.f&Ws)!==0||(i.f&Is)!==0&&(e.f&ln)!==0;Yd(i,t,r?s:!1),i=a}}}function Fo(e){Kd(e,!0)}function Kd(e,t){if((e.f&ys)!==0){e.f^=ys,(e.f&Ge)===0&&(Ne(e,Ze),zs(e));for(var s=e.first;s!==null;){var n=s.next,i=(s.f&Ws)!==0||(s.f&Is)!==0;Kd(s,i?t:!1),s=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const r of a)(r.is_global||t)&&r.in()}}function Xd(e,t){if(e.nodes)for(var s=e.nodes.start,n=e.nodes.end;s!==null;){var i=s===n?null:la(s);t.append(s),s=i}}let Fa=!1,$n=!1;function kl(e){$n=e}let le=null,Ts=!1;function Ps(e){le=e}let ee=null;function xs(e){ee=e}let Ms=null;function Gd(e){le!==null&&(Ms===null?Ms=[e]:Ms.push(e))}let us=null,ps=0,$s=null;function Wf(e){$s=e}let Jd=1,Fn=0,qn=Fn;function wl(e){qn=e}function Qd(){return++Jd}function ua(e){var t=e.f;if((t&Ze)!==0)return!0;if(t&Qe&&(e.f&=~kn),(t&Rs)!==0){for(var s=e.deps,n=s.length,i=0;i<n;i++){var a=s[i];if(ua(a)&&Dd(a),a.wv>e.wv)return!0}(t&Ss)!==0&&Cs===null&&Ne(e,Ge)}return!1}function Zd(e,t,s=!0){var n=e.reactions;if(n!==null&&!(Ms!==null&&Wn.call(Ms,e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Qe)!==0?Zd(a,t,!1):t===a&&(s?Ne(a,Ze):(a.f&Ge)!==0&&Ne(a,Rs),zs(a))}}function no(e){var t=us,s=ps,n=$s,i=le,a=Ms,r=De,o=Ts,l=qn,c=e.f;us=null,ps=0,$s=null,le=(c&(Is|Xn))===0?e:null,Ms=null,oi(e.ctx),Ts=!1,qn=++Fn,e.ac!==null&&($i(()=>{e.ac.abort(jn)}),e.ac=null);try{e.f|=to;var u=e.fn,h=u();e.f|=Gn;var f=e.deps,v=ve?.is_fork;if(us!==null){var p;if(v||Gi(e,ps),f!==null&&ps>0)for(f.length=ps+us.length,p=0;p<us.length;p++)f[ps+p]=us[p];else e.deps=f=us;if(jo()&&(e.f&Ss)!==0)for(p=ps;p<f.length;p++)(f[p].reactions??=[]).push(e)}else!v&&f!==null&&ps<f.length&&(Gi(e,ps),f.length=ps);if(wi()&&$s!==null&&!Ts&&f!==null&&(e.f&(Qe|Rs|Ze))===0)for(p=0;p<$s.length;p++)Zd($s[p],e);if(i!==null&&i!==e){if(Fn++,i.deps!==null)for(let m=0;m<s;m+=1)i.deps[m].rv=Fn;if(t!==null)for(const m of t)m.rv=Fn;$s!==null&&(n===null?n=$s:n.push(...$s))}return(e.f&_n)!==0&&(e.f^=_n),h}catch(m){return $d(m)}finally{e.f^=to,us=t,ps=s,$s=n,le=i,Ms=a,oi(r),Ts=o,qn=l}}function Uf(e,t){let s=t.reactions;if(s!==null){var n=Mh.call(s,e);if(n!==-1){var i=s.length-1;i===0?s=t.reactions=null:(s[n]=s[i],s.pop())}}if(s===null&&(t.f&Qe)!==0&&(us===null||!Wn.call(us,t))){var a=t;(a.f&Ss)!==0&&(a.f^=Ss,a.f&=~kn),Eo(a),Af(a),Gi(a,0)}}function Gi(e,t){var s=e.deps;if(s!==null)for(var n=t;n<s.length;n++)Uf(e,s[n])}function fi(e){var t=e.f;if((t&rn)===0){Ne(e,Ge);var s=ee,n=Fa;if(ee=e,Fa=!0,ot){var i=ra;gl(e.component_function);var a=li;Ya(e.dev_stack??li)}try{(t&(ln|Ao))!==0?Vf(e):No(e),Wd(e);var r=no(e);e.teardown=typeof r=="function"?r:null,e.wv=Jd;var o;ot&&df&&(e.f&Ze)!==0&&e.deps}finally{Fa=n,ee=s,ot&&(gl(i),Ya(a))}}}async function Yf(){await Promise.resolve(),mf()}function d(e){var t=e.f,s=(t&Qe)!==0;if(le!==null&&!Ts){var n=ee!==null&&(ee.f&rn)!==0;if(!n&&(Ms===null||!Wn.call(Ms,e))){var i=le.deps;if((le.f&to)!==0)e.rv<Fn&&(e.rv=Fn,us===null&&i!==null&&i[ps]===e?ps++:us===null?us=[e]:us.push(e));else{(le.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[le]:Wn.call(a,le)||a.push(le)}}}if(ot&&Sf.delete(e),$n&&yn.has(e))return yn.get(e);if(s){var r=e;if($n){var o=r.v;return((r.f&Ge)===0&&r.reactions!==null||eu(r))&&(o=Oo(r)),yn.set(r,o),o}var l=(r.f&Ss)===0&&!Ts&&le!==null&&(Fa||(le.f&Ss)!==0),c=(r.f&Gn)===0;ua(r)&&(l&&(r.f|=Ss),Dd(r)),l&&!c&&(Od(r),tu(r))}if(Cs?.has(e))return Cs.get(e);if((e.f&_n)!==0)throw e.v;return e.v}function tu(e){if(e.f|=Ss,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&Qe)!==0&&(t.f&Ss)===0&&(Od(t),tu(t))}function eu(e){if(e.v===Ue)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(yn.has(t)||(t.f&Qe)!==0&&eu(t))return!0;return!1}function Ls(e){var t=Ts;try{return Ts=!0,e()}finally{Ts=t}}function Rn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qs in e)io(e);else if(!Array.isArray(e))for(let t in e){const s=e[t];typeof s=="object"&&s&&qs in s&&io(s)}}}function io(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{io(e[n],t)}catch{}const s=Po(e);if(s!==Object.prototype&&s!==Array.prototype&&s!==Map.prototype&&s!==Set.prototype&&s!==Date.prototype){const n=dd(s);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Kf(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Xf=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Gf(e){return Xf.includes(e)}const Jf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Qf(e){return e=e.toLowerCase(),Jf[e]??e}const Zf=["touchstart","touchmove"];function tv(e){return Zf.includes(e)}const Ri=Symbol("events"),su=new Set,ao=new Set;function nu(e,t,s,n={}){function i(a){if(n.capture||ro.call(t,a),!a.cancelBubble)return $i(()=>s?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Os(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Es(e,t,s,n,i){var a={capture:n,passive:i},r=nu(e,t,s,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ca(()=>{t.removeEventListener(e,r,a)})}function it(e,t,s){(t[Ri]??={})[e]=s}function Oe(e){for(var t=0;t<e.length;t++)su.add(e[t]);for(var s of ao)s(e)}let $l=null;function ro(e){var t=this,s=t.ownerDocument,n=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;$l=e;var r=0,o=$l===e&&e[Ri];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Ri]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(r=l)}if(a=i[r]||e.target,a!==t){on(e,"currentTarget",{configurable:!0,get(){return a||s}});var u=le,h=ee;Ps(null),xs(null);try{for(var f,v=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var m=a[Ri]?.[n];m!=null&&(!a.disabled||e.target===a)&&m.call(a,e)}catch(b){f?v.push(b):f=b}if(e.cancelBubble||p===t||p===null)break;a=p}if(f){for(let b of v)queueMicrotask(()=>{throw b});throw f}}finally{e[Ri]=t,delete e.currentTarget,Ps(u),xs(h)}}}const ev=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function sv(e){return ev?.createHTML(e)??e}function iu(e){var t=Bd("template");return t.innerHTML=sv(e.replaceAll("<!>","<!---->")),t.content}function vi(e,t){var s=ee;s.nodes===null&&(s.nodes={start:e,end:t,a:null,t:null})}function P(e,t){var s=(t&sf)!==0,n=(t&nf)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=iu(a?e:"<!>"+e),s||(i=hi(i)));var r=n||Lo?document.importNode(i,!0):i.cloneNode(!0);if(s){var o=hi(r),l=r.lastChild;vi(o,l)}else vi(r,r);return r}}function nv(e,t,s="svg"){var n=!e.startsWith("<!>"),i=`<${s}>${n?e:"<!>"+e}</${s}>`,a;return()=>{if(!a){var r=iu(i),o=hi(r);a=hi(o)}var l=a.cloneNode(!0);return vi(l,l),l}}function hr(e,t){return nv(e,t,"svg")}function Ut(e=""){{var t=Vs(e+"");return vi(t,t),t}}function at(){var e=document.createDocumentFragment(),t=document.createComment(""),s=Vs();return e.append(t,s),vi(t,s),e}function y(e,t){e!==null&&e.before(t)}let Ga=!0;function ma(e){Ga=e}function D(e,t){var s=t==null?"":typeof t=="object"?`${t}`:t;s!==(e.__t??=e.nodeValue)&&(e.__t=s,e.nodeValue=`${s}`)}function iv(e,t){return av(e,t)}const _a=new Map;function av(e,{target:t,anchor:s,props:n={},events:i,context:a,intro:r=!0,transformError:o}){Rf();var l=void 0,c=Bf(()=>{var u=s??t.appendChild(Vs());xf(u,{pending:()=>{}},v=>{xe({});var p=De;a&&(p.c=a),i&&(n.$$events=i),Ga=r,l=e(v,n)||{},Ga=!0,ke()},o);var h=new Set,f=v=>{for(var p=0;p<v.length;p++){var m=v[p];if(!h.has(m)){h.add(m);var b=tv(m);for(const k of[t,document]){var x=_a.get(k);x===void 0&&(x=new Map,_a.set(k,x));var S=x.get(m);S===void 0?(k.addEventListener(m,ro,{passive:b}),x.set(m,1)):x.set(m,S+1)}}}};return f(lr(su)),ao.add(f),()=>{for(var v of h)for(const b of[t,document]){var p=_a.get(b),m=p.get(v);--m==0?(b.removeEventListener(v,ro),p.delete(v),p.size===0&&_a.delete(b)):p.set(v,m)}ao.delete(f),u!==s&&u.parentNode?.removeChild(u)}});return rv.set(l,c),l}let rv=new WeakMap;class ha{anchor;#t=new Map;#o=new Map;#e=new Map;#r=new Set;#s=!0;constructor(t,s=!0){this.anchor=t,this.#s=s}#a=t=>{if(this.#t.has(t)){var s=this.#t.get(t),n=this.#o.get(s);if(n)Fo(n),this.#r.delete(s);else{var i=this.#e.get(s);i&&(this.#o.set(s,i.effect),this.#e.delete(s),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,r]of this.#t){if(this.#t.delete(a),a===t)break;const o=this.#e.get(r);o&&(Je(o.effect),this.#e.delete(r))}for(const[a,r]of this.#o){if(a===s||this.#r.has(a))continue;const o=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Xd(r,c),c.append(Vs()),this.#e.set(a,{effect:r,fragment:c})}else Je(r);this.#r.delete(a),this.#o.delete(a)};this.#s||!n?(this.#r.add(a),Bn(r,o,!1)):o()}}};#n=t=>{this.#t.delete(t);const s=Array.from(this.#t.values());for(const[n,i]of this.#e)s.includes(n)||(Je(i.effect),this.#e.delete(n))};ensure(t,s){var n=ve,i=Fd();if(s&&!this.#o.has(t)&&!this.#e.has(t))if(i){var a=document.createDocumentFragment(),r=Vs();a.append(r),this.#e.set(t,{effect:hs(()=>s(r)),fragment:a})}else this.#o.set(t,hs(()=>s(this.anchor)));if(this.#t.set(n,t),i){for(const[o,l]of this.#o)o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of this.#e)o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(this.#a),n.ondiscard(this.#n)}else this.#a(n)}}function B(e,t,s=!1){var n=new ha(e),i=s?Ws:0;function a(r,o){n.ensure(r,o)}Jn(()=>{var r=!1;t((o,l=0)=>{r=!0,a(l,o)}),r||a(!1,null)},i)}const ov=Symbol("NaN");function lv(e,t,s){var n=new ha(e),i=!wi();Jn(()=>{var a=t();a!==a&&(a=ov),i&&a!==null&&typeof a=="object"&&(a={}),n.ensure(a,s)})}function Ie(e,t){return t}function cv(e,t,s){for(var n=[],i=t.length,a,r=t.length,o=0;o<i;o++){let h=t[o];Bn(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=e.outrogroups;oo(lr(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=n.length===0&&s!==null;if(l){var c=s,u=c.parentNode;Lf(u),u.append(c),e.items.clear()}oo(t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function oo(e,t=!0){for(var s=0;s<e.length;s++)Je(e[s],t)}var Sl;function ie(e,t,s,n,i,a=null){var r=e,o=new Map,l=(t&gd)!==0;if(l){var c=e;r=c.appendChild(Vs())}var u=null,h=Do(()=>{var x=s();return Mo(x)?x:x==null?[]:lr(x)}),f,v=!0;function p(){b.fallback=u,dv(b,f,r,t,n),u!==null&&(f.length===0?(u.f&tn)===0?Fo(u):(u.f^=tn,Li(u,null,r)):Bn(u,()=>{u=null}))}var m=Jn(()=>{f=d(h);for(var x=f.length,S=new Set,k=ve,w=Fd(),$=0;$<x;$+=1){var A=f[$],z=n(A,$);if(ot){var C=n(A,$);z!==C&&Rh(String($),String(z),String(C))}var E=v?null:o.get(z);E?(E.v&&ui(E.v,A),E.i&&ui(E.i,$),w&&k.unskip_effect(E.e)):(E=uv(o,v?r:Sl??=Vs(),A,z,$,i,t,s),v||(E.e.f|=tn),o.set(z,E)),S.add(z)}if(x===0&&a&&!u&&(v?u=hs(()=>a(r)):(u=hs(()=>a(Sl??=Vs())),u.f|=tn)),x>S.size&&(ot?hv(f,n):pd("","","")),!v)if(w){for(const[T,O]of o)S.has(T)||k.skip_effect(O.e);k.oncommit(p),k.ondiscard(()=>{})}else p();d(h)}),b={effect:m,items:o,outrogroups:null,fallback:u};v=!1}function Mi(e){for(;e!==null&&(e.f&Is)===0;)e=e.next;return e}function dv(e,t,s,n,i){var a=(n&Xh)!==0,r=t.length,o=e.items,l=Mi(e.effect.first),c,u=null,h,f=[],v=[],p,m,b,x;if(a)for(x=0;x<r;x+=1)p=t[x],m=i(p,x),b=o.get(m).e,(b.f&tn)===0&&(b.nodes?.a?.measure(),(h??=new Set).add(b));for(x=0;x<r;x+=1){if(p=t[x],m=i(p,x),b=o.get(m).e,e.outrogroups!==null)for(const T of e.outrogroups)T.pending.delete(b),T.done.delete(b);if((b.f&tn)!==0)if(b.f^=tn,b===l)Li(b,null,s);else{var S=u?u.next:l;b===e.effect.last&&(e.effect.last=b.prev),b.prev&&(b.prev.next=b.next),b.next&&(b.next.prev=b.prev),dn(e,u,b),dn(e,b,S),Li(b,S,s),u=b,f=[],v=[],l=Mi(u.next);continue}if((b.f&ys)!==0&&(Fo(b),a&&(b.nodes?.a?.unfix(),(h??=new Set).delete(b))),b!==l){if(c!==void 0&&c.has(b)){if(f.length<v.length){var k=v[0],w;u=k.prev;var $=f[0],A=f[f.length-1];for(w=0;w<f.length;w+=1)Li(f[w],k,s);for(w=0;w<v.length;w+=1)c.delete(v[w]);dn(e,$.prev,A.next),dn(e,u,$),dn(e,A,k),l=k,u=A,x-=1,f=[],v=[]}else c.delete(b),Li(b,l,s),dn(e,b.prev,b.next),dn(e,b,u===null?e.effect.first:u.next),dn(e,u,b),u=b;continue}for(f=[],v=[];l!==null&&l!==b;)(c??=new Set).add(l),v.push(l),l=Mi(l.next);if(l===null)continue}(b.f&tn)===0&&f.push(b),u=b,l=Mi(b.next)}if(e.outrogroups!==null){for(const T of e.outrogroups)T.pending.size===0&&(oo(lr(T.done)),e.outrogroups?.delete(T));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var z=[];if(c!==void 0)for(b of c)(b.f&ys)===0&&z.push(b);for(;l!==null;)(l.f&ys)===0&&l!==e.fallback&&z.push(l),l=Mi(l.next);var C=z.length;if(C>0){var E=(n&gd)!==0&&r===0?s:null;if(a){for(x=0;x<C;x+=1)z[x].nodes?.a?.measure();for(x=0;x<C;x+=1)z[x].nodes?.a?.fix()}cv(e,z,E)}}a&&Os(()=>{if(h!==void 0)for(b of h)b.nodes?.a?.apply()})}function uv(e,t,s,n,i,a,r,o){var l=(r&Yh)!==0?(r&Gh)===0?Rd(s,!1,!1):wn(s):null,c=(r&Kh)!==0?wn(i):null;return ot&&l&&(l.trace=()=>{o()[c?.v??i]}),{v:l,i:c,e:hs(()=>(a(t,l??s,c??i,o),()=>{e.delete(n)}))}}function Li(e,t,s){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&tn)===0?t.nodes.start:s;n!==null;){var r=la(n);if(a.before(n),n===i)return;n=r}}function dn(e,t,s){t===null?e.effect.first=s:t.next=s,s===null?e.effect.last=t:s.prev=t}function hv(e,t){const s=new Map,n=e.length;for(let i=0;i<n;i++){const a=t(e[i],i);if(s.has(a)){const r=String(s.get(a)),o=String(i);let l=String(a);l.startsWith("[object ")&&(l=null),pd(r,o,l)}s.set(a,i)}}function ft(e,t,s,n,i){var a=t.$$slots?.[s],r=!1;a===!0&&(a=t.children,r=!0),a===void 0||a(e,r?()=>n:n)}function Sn(e,t,...s){var n=new ha(e);Jn(()=>{const i=t()??null;ot&&i==null&&Fh(),n.ensure(i,i&&(a=>i(a,...s)))},Ws)}function fr(e,t,s){var n=new ha(e);Jn(()=>{var i=t()??null;n.ensure(i,i&&(a=>s(a,i)))},Ws)}const fv=()=>performance.now(),Zs={tick:e=>requestAnimationFrame(e),now:()=>fv(),tasks:new Set};function au(){const e=Zs.now();Zs.tasks.forEach(t=>{t.c(e)||(Zs.tasks.delete(t),t.f())}),Zs.tasks.size!==0&&Zs.tick(au)}function vv(e){let t;return Zs.tasks.size===0&&Zs.tick(au),{promise:new Promise(s=>{Zs.tasks.add(t={c:e,f:s})}),abort(){Zs.tasks.delete(t)}}}function lo(e,t){$i(()=>{e.dispatchEvent(new CustomEvent(t))})}function pv(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function Ml(e){const t={},s=e.split(";");for(const n of s){const[i,a]=n.split(":");if(!i||a===void 0)break;const r=pv(i.trim());t[r]=a.trim()}return t}const gv=e=>e;function mv(e,t,s,n){var i=(e&ef)!==0,a="in",r,o=t.inert,l=t.style.overflow,c,u;function h(){return $i(()=>r??=s()(t,n?.()??{},{direction:a}))}var f={is_global:i,in(){t.inert=o,c?.abort(),c=ru(t,h(),u,1,()=>{lo(t,"introend"),c?.abort(),c=r=void 0,t.style.overflow=l})},out(b){{b?.(),r=void 0;return}},stop:()=>{c?.abort()}},v=ee;if((v.nodes.t??=[]).push(f),Ga){var p=i;if(!p){for(var m=v.parent;m&&(m.f&Ws)!==0;)for(;(m=m.parent)&&(m.f&ln)===0;);p=!m||(m.f&Gn)!==0}p&&da(()=>{Ls(()=>f.in())})}}function ru(e,t,s,n,i){if(ni(t)){var a,r=!1;return Os(()=>{if(!r){var m=t({direction:"in"});a=ru(e,m,s,n,i)}}),{abort:()=>{r=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(!t?.duration&&!t?.delay)return lo(e,"introstart"),i(),{abort:fs,deactivate:fs,reset:fs,t:()=>n};const{delay:o=0,css:l,tick:c,easing:u=gv}=t;var h=[];if(c&&c(0,1),l){var f=Ml(l(0,1));h.push(f,f)}var v=()=>1-n,p=e.animate(h,{duration:o,fill:"forwards"});return p.onfinish=()=>{p.cancel(),lo(e,"introstart");var m=1-n,b=n-m,x=t.duration*Math.abs(b),S=[];if(x>0){var k=!1;if(l)for(var w=Math.ceil(x/16.666666666666668),$=0;$<=w;$+=1){var A=m+b*u($/w),z=Ml(l(A,1-A));S.push(z),k||=z.overflow==="hidden"}k&&(e.style.overflow="hidden"),v=()=>{var C=p.currentTime;return m+b*u(C/x)},c&&vv(()=>{if(p.playState!=="running")return!1;var C=v();return c(C,1-C),!0})}p=e.animate(S,{duration:x,fill:"forwards"}),p.onfinish=()=>{v=()=>n,c?.(n,1-n),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=fs)},deactivate:()=>{i=fs},reset:()=>{},t:()=>v()}}function _v(e,t,s,n,i,a){var r=null,o=e,l=new ha(o,!1);Jn(()=>{const c=t()||null;var u=rf;if(c===null){l.ensure(null,null),ma(!0);return}return l.ensure(c,h=>{if(c){if(r=Bd(c,u),vi(r,r),n){var f=r.appendChild(Vs());n(r,f)}ee.nodes.end=r,h.before(r)}}),ma(!0),()=>{c&&ma(!1)}},Ws),ca(()=>{ma(!0)})}function bv(e,t){var s=void 0,n;Hd(()=>{s!==(s=t())&&(n&&(Je(n),n=null),s&&(n=hs(()=>{da(()=>s(e))})))})}function ou(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(s=ou(e[t]))&&(n&&(n+=" "),n+=s)}else for(s in e)e[s]&&(n&&(n+=" "),n+=s);return n}function yv(){for(var e,t,s=0,n="",i=arguments.length;s<i;s++)(e=arguments[s])&&(t=ou(e))&&(n&&(n+=" "),n+=t);return n}function xv(e){return typeof e=="object"?yv(e):e??""}const Pl=[...` 	
\r\f \v\uFEFF`];function kv(e,t,s){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),s){for(var i of Object.keys(s))if(s[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,r=0;(r=n.indexOf(i,r))>=0;){var o=r+a;(r===0||Pl.includes(n[r-1]))&&(o===n.length||Pl.includes(n[o]))?n=(r===0?"":n.substring(0,r))+n.substring(o+1):r=o}}return n===""?null:n}function Al(e,t=!1){var s=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+s)}return n}function zr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wv(e,t){if(t){var s="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,r=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(zr)),i&&l.push(...Object.keys(i).map(zr));var c=0,u=-1;const m=e.length;for(var h=0;h<m;h++){var f=e[h];if(o?f==="/"&&e[h-1]==="*"&&(o=!1):a?a===f&&(a=!1):f==="/"&&e[h+1]==="*"?o=!0:f==='"'||f==="'"?a=f:f==="("?r++:f===")"&&r--,!o&&a===!1&&r===0){if(f===":"&&u===-1)u=h;else if(f===";"||h===m-1){if(u!==-1){var v=zr(e.substring(c,u).trim());if(!l.includes(v)){f!==";"&&h++;var p=e.substring(c,h).trim();s+=" "+p+";"}}c=h+1,u=-1}}}}return n&&(s+=Al(n)),i&&(s+=Al(i,!0)),s=s.trim(),s===""?null:s}return e==null?null:String(e)}function Jt(e,t,s,n,i,a){var r=e.__className;if(r!==s||r===void 0){var o=kv(s,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=s}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Tr(e,t={},s,n){for(var i in s){var a=s[i];t[i]!==a&&(s[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Le(e,t,s,n){var i=e.__style;if(i!==t){var a=wv(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(Tr(e,s?.[0],n[0]),Tr(e,s?.[1],n[1],"important")):Tr(e,s,n));return n}function pi(e,t,s=!1){if(e.multiple){if(t==null)return;if(!Mo(t))return lf();for(var n of e.options)n.selected=t.includes(Hi(n));return}for(n of e.options){var i=Hi(n);if(Tf(i,t)){n.selected=!0;return}}(!s||t!==void 0)&&(e.selectedIndex=-1)}function vr(e){var t=new MutationObserver(()=>{pi(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ca(()=>{t.disconnect()})}function gi(e,t,s=t){var n=new WeakSet,i=!0;Io(e,"change",a=>{var r=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(r),Hi);else{var l=e.querySelector(r)??e.querySelector("option:not([disabled])");o=l&&Hi(l)}s(o),ve!==null&&n.add(ve)}),da(()=>{var a=t();if(e===document.activeElement){var r=Ka??ve;if(n.has(r))return}if(pi(e,a,i),i&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Hi(o),s(a))}e.__value=a,i=!1}),vr(e)}function Hi(e){return"__value"in e?e.__value:e.value}const Pi=Symbol("class"),Ai=Symbol("style"),lu=Symbol("is custom element"),cu=Symbol("is html"),$v=Co?"option":"OPTION",Sv=Co?"select":"SELECT",Mv=Co?"progress":"PROGRESS";function Ji(e,t){var s=pr(e);s.value===(s.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Mv)||(e.value=t??"")}function Cl(e,t){var s=pr(e);s.checked!==(s.checked=t??void 0)&&(e.checked=t)}function Pv(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ct(e,t,s,n){var i=pr(e);i[t]!==(i[t]=s)&&(t==="loading"&&(e[Th]=s),s==null?e.removeAttribute(t):typeof s!="string"&&du(e).includes(t)?e[t]=s:e.setAttribute(t,s))}function Av(e,t,s,n,i=!1,a=!1){var r=pr(e),o=r[lu],l=!r[cu],c=t||{},u=e.nodeName===$v;for(var h in t)h in s||(s[h]=null);s.class?s.class=xv(s.class):s[Pi]&&(s.class=null),s[Ai]&&(s.style??=null);var f=du(e);for(const w in s){let $=s[w];if(u&&w==="value"&&$==null){e.value=e.__value="",c[w]=$;continue}if(w==="class"){var v=e.namespaceURI==="http://www.w3.org/1999/xhtml";Jt(e,v,$,n,t?.[Pi],s[Pi]),c[w]=$,c[Pi]=s[Pi];continue}if(w==="style"){Le(e,$,t?.[Ai],s[Ai]),c[w]=$,c[Ai]=s[Ai];continue}var p=c[w];if(!($===p&&!($===void 0&&e.hasAttribute(w)))){c[w]=$;var m=w[0]+w[1];if(m!=="$$")if(m==="on"){const A={},z="$$"+w;let C=w.slice(2);var b=Gf(C);if(Kf(C)&&(C=C.slice(0,-7),A.capture=!0),!b&&p){if($!=null)continue;e.removeEventListener(C,c[z],A),c[z]=null}if(b)it(C,e,$),Oe([C]);else if($!=null){let E=function(T){c[w].call(this,T)};var k=E;c[z]=nu(C,e,E,A)}}else if(w==="style")Ct(e,w,$);else if(w==="autofocus")If(e,!!$);else if(!o&&(w==="__value"||w==="value"&&$!=null))e.value=e.__value=$;else if(w==="selected"&&u)Pv(e,$);else{var x=w;l||(x=Qf(x));var S=x==="defaultValue"||x==="defaultChecked";if($==null&&!o&&!S)if(r[w]=null,x==="value"||x==="checked"){let A=e;const z=t===void 0;if(x==="value"){let C=A.defaultValue;A.removeAttribute(x),A.defaultValue=C,A.value=A.__value=z?C:null}else{let C=A.defaultChecked;A.removeAttribute(x),A.defaultChecked=C,A.checked=z?C:!1}}else e.removeAttribute(w);else S||f.includes(x)&&(o||typeof $!="string")?(e[x]=$,x in r&&(r[x]=Ue)):typeof $!="function"&&Ct(e,x,$)}}}return c}function zl(e,t,s=[],n=[],i=[],a,r=!1,o=!1){Ed(i,s,n,l=>{var c=void 0,u={},h=e.nodeName===Sv,f=!1;if(Hd(()=>{var p=t(...l.map(d)),m=Av(e,c,p,a,r,o);f&&h&&"value"in p&&pi(e,p.value);for(let x of Object.getOwnPropertySymbols(u))p[x]||Je(u[x]);for(let x of Object.getOwnPropertySymbols(p)){var b=p[x];x.description===of&&(!c||b!==c[x])&&(u[x]&&Je(u[x]),u[x]=hs(()=>bv(e,()=>b))),m[x]=b}c=m}),h){var v=e;da(()=>{pi(v,c.value,!0),vr(v)})}f=!0})}function pr(e){return e.__attributes??={[lu]:e.nodeName.includes("-"),[cu]:e.namespaceURI===_d}}var Tl=new Map;function du(e){var t=e.getAttribute("is")||e.nodeName,s=Tl.get(t);if(s)return s;Tl.set(t,s=[]);for(var n,i=e,a=Element.prototype;a!==i;){n=dd(i);for(var r in n)n[r].set&&s.push(r);i=Po(i)}return s}function Ee(e,t,s=t){var n=new WeakSet;Io(e,"input",async i=>{ot&&e.type==="checkbox"&&pl();var a=i?e.defaultValue:e.value;if(a=Er(e)?Dr(a):a,s(a),ve!==null&&n.add(ve),await Yf(),a!==(a=t())){var r=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=a??"",o!==null){var c=e.value.length;r===o&&o===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=r,e.selectionEnd=Math.min(o,c))}}}),Ls(t)==null&&e.value&&(s(Er(e)?Dr(e.value):e.value),ve!==null&&n.add(ve)),ur(()=>{ot&&e.type==="checkbox"&&pl();var i=t();if(e===document.activeElement){var a=Ka??ve;if(n.has(a))return}Er(e)&&i===Dr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function uu(e,t,s=t){Io(e,"change",n=>{var i=n?e.defaultChecked:e.checked;s(i)}),Ls(t)==null&&s(e.checked),ur(()=>{var n=t();e.checked=!!n})}function Er(e){var t=e.type;return t==="number"||t==="range"}function Dr(e){return e===""?null:+e}function El(e,t){return e===t||e?.[qs]===t}function Bo(e={},t,s,n){return da(()=>{var i,a;return ur(()=>{i=a,a=[],Ls(()=>{e!==s(...a)&&(t(e,...a),i&&El(s(...i),e)&&t(null,...i))})}),()=>{Os(()=>{a&&El(s(...a),e)&&t(null,...a)})}}),e}function Cv(e=!1){const t=De,s=t.l.u;if(!s)return;let n=()=>Rn(t.s);if(e){let i=0,a={};const r=oa(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>d(r)}s.b.length&&Ff(()=>{Dl(t,n),Wa(s.b)}),Un(()=>{const i=Ls(()=>s.m.map(Ch));return()=>{for(const a of i)typeof a=="function"&&a()}}),s.a.length&&Un(()=>{Dl(t,n),Wa(s.a)})}function Dl(e,t){if(e.l.s)for(const s of e.l.s)d(s);t()}function qo(e,t,s){if(e==null)return t(void 0),s&&s(void 0),fs;const n=Ls(()=>e.subscribe(t,s));return n.unsubscribe?()=>n.unsubscribe():n}const Zn=[];function zv(e,t){return{subscribe:Us(e,t).subscribe}}function Us(e,t=fs){let s=null;const n=new Set;function i(o){if(yd(e,o)&&(e=o,s)){const l=!Zn.length;for(const c of n)c[1](),Zn.push(c,e);if(l){for(let c=0;c<Zn.length;c+=2)Zn[c][0](Zn[c+1]);Zn.length=0}}}function a(o){i(o(e))}function r(o,l=fs){const c=[o,l];return n.add(c),n.size===1&&(s=t(i,a)||fs),o(e),()=>{n.delete(c),n.size===0&&s&&(s(),s=null)}}return{set:i,update:a,subscribe:r}}function Tv(e,t,s){const n=!Array.isArray(e),i=n?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=t.length<2;return zv(s,(r,o)=>{let l=!1;const c=[];let u=0,h=fs;const f=()=>{if(u)return;h();const p=t(n?c[0]:c,r,o);a?r(p):h=typeof p=="function"?p:fs},v=i.map((p,m)=>qo(p,b=>{c[m]=b,u&=~(1<<m),l&&f()},()=>{u|=1<<m}));return l=!0,f(),function(){Wa(v),h(),l=!1}})}function hu(e){let t;return qo(e,s=>t=s)(),t}let ba=!1,co=Symbol();function fu(e,t,s){const n=s[t]??={store:null,source:Rd(void 0),unsubscribe:fs};if(ot&&(n.source.label=t),n.store!==e&&!(co in s))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=fs;else{var i=!0;n.unsubscribe=qo(e,a=>{i?n.source.v=a:M(n.source,a)}),i=!1}return e&&co in s?hu(e):d(n.source)}function vu(){const e={};function t(){ca(()=>{for(var s in e)e[s].unsubscribe();on(e,co,{enumerable:!1,value:!0})})}return[e,t]}function Ev(e){var t=ba;try{return ba=!1,[e(),ba]}finally{ba=t}}const Dv={get(e,t){if(!e.exclude.includes(t))return d(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,s){if(!(t in e.special)){var n=ee;try{xs(e.parent_effect),e.special[t]=pe({get[t](){return e.props[t]}},t,md)}finally{xs(n)}}return e.special[t](s),yl(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),yl(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ht(e,t){return new Proxy({props:e,exclude:t,special:{},version:wn(0),parent_effect:ee},Dv)}const Ov={get(e,t){let s=e.props.length;for(;s--;){let n=e.props[s];if(ni(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,s){let n=e.props.length;for(;n--;){let i=e.props[n];ni(i)&&(i=i());const a=an(i,t);if(a&&a.set)return a.set(s),!0}return!1},getOwnPropertyDescriptor(e,t){let s=e.props.length;for(;s--;){let n=e.props[s];if(ni(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=an(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===qs||t===fd)return!1;for(let s of e.props)if(ni(s)&&(s=s()),s!=null&&t in s)return!0;return!1},ownKeys(e){const t=[];for(let s of e.props)if(ni(s)&&(s=s()),!!s){for(const n in s)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(s))t.includes(n)||t.push(n)}return t}};function vt(...e){return new Proxy({props:e},Ov)}function pe(e,t,s,n){var i=!ki||(s&Qh)!==0,a=(s&Zh)!==0,r=(s&tf)!==0,o=n,l=!0,c=()=>(l&&(l=!1,o=r?Ls(n):n),o),u;if(a){var h=qs in e||fd in e;u=an(e,t)?.set??(h&&t in e?k=>e[t]=k:void 0)}var f,v=!1;a?[f,v]=Ev(()=>e[t]):f=e[t],f===void 0&&n!==void 0&&(f=c(),u&&(i&&Bh(t),u(f)));var p;if(i?p=()=>{var k=e[t];return k===void 0?c():(l=!0,k)}:p=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(s&md)===0)return p;if(u){var m=e.$$legacy;return(function(k,w){return arguments.length>0?((!i||!w||m||v)&&u(w?p():k),k):p()})}var b=!1,x=((s&Jh)!==0?oa:Do)(()=>(b=!1,p()));ot&&(x.label=t),a&&d(x);var S=ee;return(function(k,w){if(arguments.length>0){const $=w?d(x):i&&a?ye(k):k;return M(x,$),b=!0,o!==void 0&&(o=$),k}return $n&&b||(S.f&rn)!==0?x.v:d(x)})}if(ot){let e=function(t){if(!(t in globalThis)){let s;Object.defineProperty(globalThis,t,{configurable:!0,get:()=>{if(s!==void 0)return s;qh(t)},set:n=>{s=n}})}};var a$=e;e("$state"),e("$effect"),e("$derived"),e("$inspect"),e("$props"),e("$bindable")}function Ve(e){De===null&&Eh("onMount"),ki&&De.l!==null?Rv(De).m.push(e):Un(()=>{const t=Ls(e);if(typeof t=="function")return t})}function Rv(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Lv="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Lv);uf();/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const jv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ol=(...e)=>e.filter((t,s,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===s).join(" ").trim();var Nv=hr("<svg><!><!></svg>");function pt(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]),n=ht(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);xe(t,!1);let i=pe(t,"name",8,void 0),a=pe(t,"color",8,"currentColor"),r=pe(t,"size",8,24),o=pe(t,"strokeWidth",8,2),l=pe(t,"absoluteStrokeWidth",8,!1),c=pe(t,"iconNode",24,()=>[]);Cv();var u=Nv();zl(u,(v,p,m)=>({...Iv,...v,...n,width:r(),height:r(),stroke:a(),"stroke-width":p,class:m}),[()=>jv(n)?void 0:{"aria-hidden":"true"},()=>(Rn(l()),Rn(o()),Rn(r()),Ls(()=>l()?Number(o())*24/Number(r()):o())),()=>(Rn(Ol),Rn(i()),Rn(s),Ls(()=>Ol("lucide-icon","lucide",i()?`lucide-${i()}`:"",s.class)))]);var h=g(u);ie(h,1,c,Ie,(v,p)=>{var m=H(()=>Qr(d(p),2));let b=()=>d(m)[0],x=()=>d(m)[1];var S=at(),k=j(S);_v(k,b,!0,(w,$)=>{zl(w,()=>({...x()}))}),y(v,S)});var f=_(h);ft(f,t,"default",{}),y(e,u),ke()}function Fv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];pt(e,vt({name:"activity"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Bv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];pt(e,vt({name:"arrow-down-left"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function qv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];pt(e,vt({name:"arrow-left-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Ja(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];pt(e,vt({name:"arrow-right-left"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Vv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];pt(e,vt({name:"arrow-up-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Hv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M4.929 4.929 19.07 19.071"}]];pt(e,vt({name:"ban"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Wv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];pt(e,vt({name:"bell"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Uv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];pt(e,vt({name:"calendar"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Yv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];pt(e,vt({name:"chart-column"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Or(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];pt(e,vt({name:"check"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Kv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];pt(e,vt({name:"chevron-down"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Xv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];pt(e,vt({name:"chevron-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function uo(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];pt(e,vt({name:"circle-alert"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Gv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];pt(e,vt({name:"circle-check-big"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Qa(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];pt(e,vt({name:"clock"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Jv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];pt(e,vt({name:"code"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Qv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48"}],["path",{d:"M15 6h1v4"}],["path",{d:"m6.134 14.768.866-.5 2 3.464"}],["circle",{cx:"16",cy:"8",r:"6"}]];pt(e,vt({name:"coins"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Zv(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];pt(e,vt({name:"copy"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function tp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];pt(e,vt({name:"database"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Rl(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];pt(e,vt({name:"dollar-sign"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function pu(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];pt(e,vt({name:"download"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function ep(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];pt(e,vt({name:"ellipsis-vertical"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function sp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];pt(e,vt({name:"eye-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function np(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];pt(e,vt({name:"eye"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function ip(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];pt(e,vt({name:"funnel"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function ap(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];pt(e,vt({name:"grip-vertical"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function rp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];pt(e,vt({name:"hash"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function op(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];pt(e,vt({name:"info"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function lp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];pt(e,vt({name:"key-round"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Ll(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];pt(e,vt({name:"key"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function cp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];pt(e,vt({name:"keyboard"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function dp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];pt(e,vt({name:"layers"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function up(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 5h.01"}],["path",{d:"M3 12h.01"}],["path",{d:"M3 19h.01"}],["path",{d:"M8 5h13"}],["path",{d:"M8 12h13"}],["path",{d:"M8 19h13"}]];pt(e,vt({name:"list"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Rr(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];pt(e,vt({name:"network"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function hp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];pt(e,vt({name:"palette"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function fp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];pt(e,vt({name:"pencil"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Il(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];pt(e,vt({name:"play"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Qi(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];pt(e,vt({name:"plus"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function vp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];pt(e,vt({name:"power"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function gu(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478"}],["circle",{cx:"12",cy:"12",r:"2"}]];pt(e,vt({name:"radio"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function ks(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];pt(e,vt({name:"refresh-cw"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function pp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];pt(e,vt({name:"repeat"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Vo(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];pt(e,vt({name:"rotate-cw"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function gp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];pt(e,vt({name:"save"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function mp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];pt(e,vt({name:"scan-search"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function _p(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];pt(e,vt({name:"search"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function mu(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];pt(e,vt({name:"server"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Ho(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];pt(e,vt({name:"settings"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function bp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];pt(e,vt({name:"shield-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function ho(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];pt(e,vt({name:"shield"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function yp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];pt(e,vt({name:"shuffle"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function jl(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];pt(e,vt({name:"sliders-horizontal"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function xp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];pt(e,vt({name:"square"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function kp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];pt(e,vt({name:"target"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function _u(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];pt(e,vt({name:"terminal"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function ii(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];pt(e,vt({name:"trash-2"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function wp(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];pt(e,vt({name:"trending-up"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function bu(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];pt(e,vt({name:"triangle-alert"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function $p(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];pt(e,vt({name:"upload"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Za(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];pt(e,vt({name:"users"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function yu(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];pt(e,vt({name:"wifi-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Wo(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];pt(e,vt({name:"wifi"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function xu(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];pt(e,vt({name:"x"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}function Wi(e,t){const s=ht(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];pt(e,vt({name:"zap"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=at(),o=j(r);ft(o,t,"default",{}),y(i,r)},$$slots:{default:!0}}))}const Sp={"nav.accounts":"Comptes","nav.monitoring":"Monitoring","nav.settings":"Paramètres","nav.proxy":"Proxy","accounts.title":"Gestion des comptes","accounts.add":"Ajouter un compte","accounts.import":"Import auto","accounts.no_accounts":"Aucun compte configuré","accounts.active":"Actif","accounts.switch":"Activer","accounts.delete":"Supprimer","accounts.refresh":"Rafraîchir","quota.phase.cruise":"Croisière","quota.phase.watch":"Surveillance","quota.phase.alert":"Alerte","quota.phase.critical":"Critique","proxy.status.running":"En cours","proxy.status.stopped":"Arrêté","proxy.start":"Démarrer","proxy.stop":"Arrêter","proxy.restart":"Redémarrer","settings.title":"Paramètres","settings.theme":"Thème","settings.language":"Langue","settings.save":"Sauvegarder","toast.switch_success":"Switch vers {account}","toast.import_success":"{n} compte(s) importé(s)","toast.error":"Erreur : {msg}","monitoring.cost":"Coûts de session","monitoring.backoff":"Cooldowns actifs","monitoring.peers":"Topologie réseau","common.cancel":"Annuler","common.confirm":"Confirmer","common.close":"Fermer","common.loading":"Chargement...","common.error":"Erreur","common.success":"Succès"},Mp={"nav.accounts":"Accounts","nav.monitoring":"Monitoring","nav.settings":"Settings","nav.proxy":"Proxy","accounts.title":"Account Management","accounts.add":"Add Account","accounts.import":"Auto Import","accounts.no_accounts":"No accounts configured","accounts.active":"Active","accounts.switch":"Activate","accounts.delete":"Delete","accounts.refresh":"Refresh","quota.phase.cruise":"Cruise","quota.phase.watch":"Watch","quota.phase.alert":"Alert","quota.phase.critical":"Critical","proxy.status.running":"Running","proxy.status.stopped":"Stopped","proxy.start":"Start","proxy.stop":"Stop","proxy.restart":"Restart","settings.title":"Settings","settings.theme":"Theme","settings.language":"Language","settings.save":"Save","toast.switch_success":"Switched to {account}","toast.import_success":"{n} account(s) imported","toast.error":"Error: {msg}","monitoring.cost":"Session costs","monitoring.backoff":"Active cooldowns","monitoring.peers":"Network topology","common.cancel":"Cancel","common.confirm":"Confirm","common.close":"Close","common.loading":"Loading...","common.error":"Error","common.success":"Success"},Nl={fr:Sp,en:Mp},Pp=(typeof localStorage<"u"?localStorage.getItem("locale"):null)??"fr",gr=Us(Pp);function Ap(e){gr.set(e),localStorage.setItem("locale",e)}function Ba(e,t){return(Nl[hu(gr)]??Nl.fr)[e]??e}var Cp=P('<span class="nav-indicator svelte-181dlmc"></span>'),zp=P('<button><span class="nav-icon svelte-181dlmc"><!></span> <span class="nav-label svelte-181dlmc"> </span> <!></button>'),Tp=P('<aside class="sidebar svelte-181dlmc"><div class="sidebar-logo svelte-181dlmc"><div class="logo-icon svelte-181dlmc">AI</div> <div class="logo-text svelte-181dlmc"><span class="logo-title svelte-181dlmc">AI Manager</span> <span class="logo-version svelte-181dlmc">v3</span></div></div> <nav class="sidebar-nav svelte-181dlmc"></nav> <div class="sidebar-footer svelte-181dlmc"><span class="footer-text svelte-181dlmc">Multi-Account Manager</span></div></aside>');function Ep(e,t){xe(t,!0);const s=()=>fu(gr,"$i18nStore",n),[n,i]=vu();let a=pe(t,"currentScreen",15);const r=[{id:"accounts",labelKey:"nav.accounts",icon:Za},{id:"proxy",labelKey:"nav.proxy",icon:qv},{id:"monitoring",labelKey:"nav.monitoring",icon:Fv},{id:"settings",labelKey:"nav.settings",icon:Ho}];var o=Tp(),l=_(g(o),2);ie(l,21,()=>r,Ie,(c,u)=>{var h=zp();let f;var v=g(h),p=g(v);fr(p,()=>d(u).icon,(k,w)=>{w(k,{size:18})});var m=_(v,2),b=g(m),x=_(m,2);{var S=k=>{var w=Cp();y(k,w)};B(x,k=>{a()===d(u).id&&k(S)})}L(k=>{f=Jt(h,1,"nav-item svelte-181dlmc",null,f,{active:a()===d(u).id}),D(b,k)},[()=>(s(),Ba(d(u).labelKey))]),it("click",h,()=>a(d(u).id)),y(c,h)}),y(e,o),ke(),i()}Oe(["click"]);const mr="/ai-manager/admin/api",Dp="/ai-manager/admin/ws";async function os(e,t){let s=`${mr}/${e}`;if(t){const i=new URLSearchParams(Object.fromEntries(Object.entries(t).filter(([,a])=>a!==void 0))).toString();i&&(s+=`?${i}`)}const n=await fetch(s);if(!n.ok)throw new Error(`GET ${e} failed: ${n.status} ${n.statusText}`);return n.json()}async function Te(e,t){const s=await fetch(`${mr}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:t!==void 0?JSON.stringify(t):void 0});if(!s.ok)throw new Error(`POST ${e} failed: ${s.status} ${s.statusText}`);return s.json()}async function Uo(e,t){const s=await fetch(`${mr}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:t!==void 0?JSON.stringify(t):void 0});if(!s.ok)throw new Error(`PUT ${e} failed: ${s.status} ${s.statusText}`);return s.json()}async function Si(e){const t=await fetch(`${mr}/${e}`,{method:"DELETE"});if(!t.ok)throw new Error(`DELETE ${e} failed: ${t.status} ${t.statusText}`);return t.json()}let un=null;const hn=new Map;function ku(){if(un&&un.readyState===WebSocket.OPEN)return un;const t=`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}${Dp}`;return un=new WebSocket(t),un.addEventListener("message",s=>{try{const n=JSON.parse(s.data),i=hn.get(n.event);i&&i.forEach(a=>a(n.payload))}catch{}}),un.addEventListener("close",()=>{un=null,hn.size>0&&setTimeout(()=>ku(),2e3)}),un}function Yo(e,t){return hn.has(e)||hn.set(e,new Set),hn.get(e).add(t),ku(),()=>{hn.get(e)?.delete(t),hn.get(e)?.size===0&&hn.delete(e)}}const Lr=()=>os("accounts"),Op=e=>Te(`accounts/${encodeURIComponent(e)}/switch`),Rp=e=>Te(`accounts/${encodeURIComponent(e)}/refresh`),Lp=(e,t)=>Te("accounts",t),Ip=(e,t)=>Uo(`accounts/${encodeURIComponent(e)}`,t),jp=e=>Si(`accounts/${encodeURIComponent(e)}`),Ko=()=>os("config"),Xo=e=>Uo("config",e),ya=()=>os("proxy/status").then(e=>{const t=s=>{const n=e.instances.find(i=>i.kind===s);return{running:n?.running??!1,port:n?.port??0,pid:n?.pid??void 0,uptimeSecs:n?.uptimeSecs??0,requestsTotal:n?.requestsTotal??0,requestsActive:n?.requestsActive??0,backend:n?.backend}};return{router:t("router"),impersonator:t("impersonator")}}),Np=e=>Te("proxy/start",{kind:e}),Fp=e=>Te("proxy/stop",{kind:e}),Bp=e=>Te("proxy/restart",{kind:e}),xa=()=>os("proxy-instances"),qp=e=>Te("proxy-instances",e),Vp=(e,t)=>Uo(`proxy-instances/${encodeURIComponent(e)}`,t),Hp=e=>Si(`proxy-instances/${encodeURIComponent(e)}`),Wp=e=>Te(`proxy-instances/${encodeURIComponent(e)}/start`),Up=e=>Te(`proxy-instances/${encodeURIComponent(e)}/stop`),Yp=e=>Te(`proxy-instances/${encodeURIComponent(e)}/restart`),ka=()=>Te("proxy-instances/probe"),Kp=()=>os("proxy-binaries").then(e=>e.binaries),Xp=e=>Te("setup/claude-code",{port:e}),Gp=()=>Si("setup/claude-code"),Jp=e=>Te("setup/vscode",{port:e}),Qp=()=>Si("setup/vscode"),wa=()=>os("systemd/status").then(e=>e.status),Zp=e=>Te("systemd/install",{daemonPath:e}).then(t=>t.message),tg=()=>Te("systemd/uninstall").then(e=>e.message),eg=()=>os("sync/status"),sg=()=>Te("sync/key/generate").then(e=>e.key),ng=e=>Te("sync/key/set",{key:e}),ig=async e=>{const t=await Ko();await Xo({...t,sync:{...t.sync,enabled:e}})},ag=async e=>{const t=await Ko();await Xo({...t,sync:{...t.sync,port:e}})},qa=()=>os("peers"),rg=(e,t,s)=>Te("peers",{host:e,port:t,id:s}),og=e=>Si(`peers/${encodeURIComponent(e)}`),lg=(e,t)=>Te("peers/test",{host:e,port:t}).then(s=>s.reachable),cg=()=>os("ssh/hostname").then(e=>e.hostname),dg=(e,t,s,n)=>Te("ssh-hosts",{host:e,port:t,username:s,identityPath:n}),ug=e=>Si(`ssh-hosts/${encodeURIComponent(e)}`),hg=(e,t,s,n)=>Te("ssh-hosts/test",{host:e,port:t,username:s,identityPath:n}).then(i=>i.reachable),fg=(e,t)=>os("monitoring/quota-history",{key:e,period:t}),vg=()=>os("monitoring/switch-history"),pg=()=>os("monitoring/profiles"),wu=()=>os("monitoring/sessions"),fo=e=>os("monitoring/logs",e?{filter:e}:void 0),gg=()=>Te("credentials/scan"),mg=e=>Te("credentials/import",{credentials:e}),_g=()=>os("credentials/binary"),bg=e=>Te("credentials/capture",{timeoutSecs:e}),yg=e=>Promise.resolve(Yo("quota_update",t=>e(t))),xg=e=>Promise.resolve(Yo("toast",t=>e(t))),kg=e=>Promise.resolve(Yo("account_switch",t=>e(t)));function wg(){const{subscribe:e,set:t,update:s}=Us(null);return{subscribe:e,load:async()=>{const n=await Ko();t(n)},save:async n=>{await Xo(n),s(i=>i?{...i,...n}:null)}}}const Me=wg(),Fl={running:!1,port:0,uptimeSecs:0,requestsTotal:0,requestsActive:0};function $g(){const{subscribe:e,set:t}=Us({router:{...Fl,port:18080},impersonator:{...Fl,port:18081}});return{subscribe:e,load:async()=>{const s=await ya();t(s)},start:async s=>{await Np(s);const n=await ya();t(n)},stop:async s=>{await Fp(s);const n=await ya();t(n)},restart:async s=>{await Bp(s);const n=await ya();t(n)}}}function Sg(){const{subscribe:e,set:t}=Us([]);return{subscribe:e,load:async()=>{const s=await ka();t(s)},probe:async()=>{const s=await ka();t(s)},add:async s=>{await qp(s);const n=await xa();t(n)},update:async(s,n)=>{await Vp(s,n);const i=await ka();t(i)},remove:async s=>{await Hp(s);const n=await xa();t(n)},start:async s=>{await Wp(s);const n=await xa();t(n)},stop:async s=>{await Up(s);const n=await xa();t(n)},restart:async s=>{await Yp(s),await new Promise(i=>setTimeout(i,500));const n=await ka();t(n)}}}const Mg=$g(),gs=Sg();function Pg(){const e=Us([]),t=Us(!1);return{peers:{subscribe:e.subscribe},enabled:{subscribe:t.subscribe},load:async()=>{const s=await eg();t.set(s.enabled);const n=await qa();e.set(n)},addPeer:async(s,n)=>{await rg(s,n);const i=await qa();e.set(i)},removePeer:async s=>{await og(s);const n=await qa();e.set(n)},generateKey:async()=>await sg(),setKey:async s=>{await ng(s)},testPeer:async(s,n)=>await lg(s,n)}}const As=Pg();var Ag=P('<span role="tooltip"> </span>'),Cg=P('<span class="tooltip-wrapper svelte-c43bsi"><!> <!></span>');function ti(e,t){let s=pe(t,"position",3,"top"),n=N(!1);var i=Cg(),a=g(i);Sn(a,()=>t.children);var r=_(a,2);{var o=l=>{var c=Ag(),u=g(c);L(()=>{Jt(c,1,`tooltip tooltip-${s()??""}`,"svelte-c43bsi"),D(u,t.text)}),y(l,c)};B(r,l=>{d(n)&&l(o)})}Es("mouseenter",i,()=>M(n,!0)),Es("mouseleave",i,()=>M(n,!1)),Es("focus",i,()=>M(n,!0)),Es("blur",i,()=>M(n,!1)),y(e,i)}var zg=P("<button><!> <span>Refresh</span> <span></span></button>"),Tg=P("<button><!> <span>Switch</span> <span></span></button>"),Eg=P("<button><!> <span>Rotation</span> <span></span></button>"),Dg=P("<button><!> <span>Schedule</span> <span></span></button>"),Og=P('<button class="status-item svelte-161y12f"><!> <span> </span> <span class="status-sep svelte-161y12f">/</span> <span> </span> <span></span></button>'),Rg=P("<button><!> <span>P2P</span> <span></span></button>"),Lg=P('<footer class="statusbar svelte-161y12f"><div class="statusbar-items svelte-161y12f"><!> <!> <!> <!> <!> <!></div></footer>');function Ig(e,t){xe(t,!0);let s=N(null),n=N(ye({router:{running:!1,port:18080,uptimeSecs:0,requestsTotal:0,requestsActive:0},impersonator:{running:!1,port:18081,uptimeSecs:0,requestsTotal:0,requestsActive:0}})),i=N(!1);Ve(()=>{const w=Me.subscribe(z=>{M(s,z,!0)}),$=Mg.subscribe(z=>{M(n,z,!0)}),A=As.enabled.subscribe(z=>{M(i,z,!0)});return()=>{w(),$(),A()}});let a=H(()=>d(s)?.adaptiveRefresh??!1),r=H(()=>(d(s)?.proxy?.autoSwitchThreshold5h??0)>0),o=H(()=>d(s)?.proxy?.rotationEnabled??!1),l=H(()=>d(s)?.schedule?.enabled??!1),c=H(()=>d(n).router.running),u=H(()=>d(n).impersonator.running);function h(w){t.onnavigate?.(w)}var f=Lg(),v=g(f),p=g(v);ti(p,{text:"Auto-refresh: Rafraichissement automatique des quotas",children:(w,$)=>{var A=zg();let z;var C=g(A);ks(C,{size:12});var E=_(C,4);let T;L(()=>{z=Jt(A,1,"status-item svelte-161y12f",null,z,{active:d(a)}),T=Jt(E,1,"status-dot svelte-161y12f",null,T,{on:d(a)})}),it("click",A,()=>h("settings")),y(w,A)},$$slots:{default:!0}});var m=_(p,2);ti(m,{text:"Auto-switch: Changement automatique de compte",children:(w,$)=>{var A=Tg();let z;var C=g(A);yp(C,{size:12});var E=_(C,4);let T;L(()=>{z=Jt(A,1,"status-item svelte-161y12f",null,z,{active:d(r)}),T=Jt(E,1,"status-dot svelte-161y12f",null,T,{on:d(r)})}),it("click",A,()=>h("accounts")),y(w,A)},$$slots:{default:!0}});var b=_(m,2);ti(b,{text:"Rotation automatique des comptes",children:(w,$)=>{var A=Eg();let z;var C=g(A);Vo(C,{size:12});var E=_(C,4);let T;L(()=>{z=Jt(A,1,"status-item svelte-161y12f",null,z,{active:d(o)}),T=Jt(E,1,"status-dot svelte-161y12f",null,T,{on:d(o)})}),it("click",A,()=>h("accounts")),y(w,A)},$$slots:{default:!0}});var x=_(b,2);ti(x,{text:"Planning horaire d'activite",children:(w,$)=>{var A=Dg();let z;var C=g(A);Qa(C,{size:12});var E=_(C,4);let T;L(()=>{z=Jt(A,1,"status-item svelte-161y12f",null,z,{active:d(l)}),T=Jt(E,1,"status-dot svelte-161y12f",null,T,{on:d(l)})}),it("click",A,()=>h("settings:schedule")),y(w,A)},$$slots:{default:!0}});var S=_(x,2);ti(S,{text:"Proxy Router / Impersonator",children:(w,$)=>{var A=Og(),z=g(A);gu(z,{size:12});var C=_(z,2),E=g(C),T=_(C,4),O=g(T),F=_(T,2);let Z;L(()=>{D(E,`R:${d(c)?"ON":"OFF"}`),D(O,`I:${d(u)?"ON":"OFF"}`),Z=Jt(F,1,"status-dot svelte-161y12f",null,Z,{on:d(c)||d(u)})}),it("click",A,()=>h("proxy")),y(w,A)},$$slots:{default:!0}});var k=_(S,2);ti(k,{text:"Synchronisation P2P entre instances",children:(w,$)=>{var A=Rg();let z;var C=g(A);Wo(C,{size:12});var E=_(C,4);let T;L(()=>{z=Jt(A,1,"status-item svelte-161y12f",null,z,{active:d(i)}),T=Jt(E,1,"status-dot svelte-161y12f",null,T,{on:d(i)})}),it("click",A,()=>h("settings:network")),y(w,A)},$$slots:{default:!0}}),y(e,f),ke()}Oe(["click"]);const{subscribe:jg,update:$u}=Us([]);function Ci(e,t,s,n=4e3){const i=crypto.randomUUID(),a={id:i,type:e,title:t,message:s,duration:n};return $u(r=>[...r,a]),n>0&&setTimeout(()=>Su(i),n),i}function Su(e){$u(t=>t.filter(s=>s.id!==e))}const Ng={subscribe:jg},_s={info:(e,t)=>Ci("info",e,t),success:(e,t)=>Ci("success",e,t),warning:(e,t)=>Ci("warning",e,t),error:(e,t)=>Ci("error",e,t,8e3),switch:(e,t)=>Ci("switch",e,t,5e3),remove:Su};var Fg=P('<span class="toast-message svelte-1ig2a9j"> </span>'),Bg=P('<div><span class="toast-icon svelte-1ig2a9j"><!></span> <div class="toast-content svelte-1ig2a9j"><span class="toast-title svelte-1ig2a9j"> </span> <!></div> <button class="toast-close svelte-1ig2a9j" aria-label="Fermer"><!></button></div>'),qg=P('<div class="toast-container svelte-1ig2a9j"></div>');function Vg(e,t){xe(t,!0);let s=N(ye([]));Ve(()=>Ng.subscribe(c=>{M(s,c,!0)}));const n={info:op,success:Gv,warning:bu,error:uo,switch:pp},i={info:"var(--accent)",success:"var(--phase-cruise)",warning:"var(--status-warning)",error:"var(--status-error)",switch:"var(--provider-xai)"};var a=at(),r=j(a);{var o=l=>{var c=qg();ie(c,21,()=>d(s),u=>u.id,(u,h)=>{const f=H(()=>n[d(h).type]);var v=Bg(),p=g(v),m=g(p);fr(m,()=>d(f),(z,C)=>{C(z,{size:16})});var b=_(p,2),x=g(b),S=g(x),k=_(x,2);{var w=z=>{var C=Fg(),E=g(C);L(()=>D(E,d(h).message)),y(z,C)};B(k,z=>{d(h).message&&z(w)})}var $=_(b,2),A=g($);xu(A,{size:14}),L(()=>{Jt(v,1,`toast-item toast-${d(h).type??""}`,"svelte-1ig2a9j"),Le(v,`--toast-color: ${i[d(h).type]??""}`),D(S,d(h).title)}),it("click",$,()=>_s.remove(d(h).id)),y(u,v)}),y(l,c)};B(r,l=>{d(s).length>0&&l(o)})}y(e,a),ke()}Oe(["click"]);function Hg(){const{subscribe:e,set:t,update:s}=Us([]);return{subscribe:e,load:async()=>{const n=await Lr();t(n)},switch:async n=>{await Op(n),s(i=>i.map(a=>({...a,isActive:a.key===n})))},updateQuota:(n,i)=>{s(a=>a.map(r=>r.key===n?{...r,quota:i}:r))},refresh:async n=>{await Rp(n);const i=await Lr();t(i)},delete:async n=>{await jp(n),s(i=>i.filter(a=>a.key!==n))},add:async(n,i)=>{await Lp(n,i);const a=await Lr();t(a)},updateAccount:async(n,i)=>{await Ip(n,i),s(a=>a.map(r=>r.key!==n?r:{...r,data:{...r.data,...i.priority!=null&&{priority:i.priority},...i.autoSwitchDisabled!=null&&{autoSwitchDisabled:i.autoSwitchDisabled},...i.displayName!=null&&{displayName:i.displayName}}}))}}}const Ye=Hg();Tv(Ye,e=>e.find(t=>t.isActive)??null);var Wg=P('<div class="quota-ring svelte-12gf5ir"><svg class="ring-svg svelte-12gf5ir"><circle fill="none" stroke="var(--border)"></circle><circle fill="none" stroke-linecap="round" class="ring-progress svelte-12gf5ir"></circle></svg> <span class="ring-label svelte-12gf5ir"> </span></div>');function Ug(e,t){let s=pe(t,"percent",3,0),n=pe(t,"phase",3,"Cruise"),i=pe(t,"size",3,56),a=pe(t,"strokeWidth",3,4);const r={Cruise:"var(--phase-cruise)",Watch:"var(--phase-watch)",Alert:"var(--phase-alert)",Critical:"var(--phase-critical)"};let o=H(()=>(i()-a())/2),l=H(()=>2*Math.PI*d(o)),c=H(()=>d(l)-Math.min(s(),1)*d(l)),u=H(()=>r[n()??"Cruise"]),h=H(()=>Math.round(Math.min(s(),1)*100));var f=Wg(),v=g(f),p=g(v),m=_(p),b=_(v,2),x=g(b);L(()=>{Le(f,`width: ${i()??""}px; height: ${i()??""}px`),Ct(v,"viewBox",`0 0 ${i()??""} ${i()??""}`),Ct(p,"cx",i()/2),Ct(p,"cy",i()/2),Ct(p,"r",d(o)),Ct(p,"stroke-width",a()),Ct(m,"cx",i()/2),Ct(m,"cy",i()/2),Ct(m,"r",d(o)),Ct(m,"stroke",d(u)),Ct(m,"stroke-width",a()),Ct(m,"stroke-dasharray",d(l)),Ct(m,"stroke-dashoffset",d(c)),Ct(m,"transform",`rotate(-90 ${i()/2} ${i()/2})`),Le(b,`color: ${d(u)??""}; font-size: ${i()*.22}px`),D(x,`${d(h)??""}%`)}),y(e,f)}var Yg=P("<span><!></span>");function Ke(e,t){let s=pe(t,"color",3,"var(--accent)"),n=pe(t,"small",3,!1);var i=Yg();let a;var r=g(i);Sn(r,()=>t.children),L(()=>{a=Jt(i,1,"badge svelte-jpiuiy",null,a,{small:n()}),Le(i,`--badge-color: ${s()??""}`)}),y(e,i)}var Kg=P("<button><!></button>"),Xg=P("<div><!></div>");function de(e,t){let s=pe(t,"hoverable",3,!0),n=pe(t,"active",3,!1),i=pe(t,"padding",3,"16px");var a=at(),r=j(a);{var o=c=>{var u=Kg();let h;var f=g(u);Sn(f,()=>t.children),L(()=>{h=Jt(u,1,"card svelte-11fn1sl",null,h,{hoverable:s(),active:n()}),Le(u,`padding: ${i()??""}`)}),it("click",u,function(...v){t.onclick?.apply(this,v)}),y(c,u)},l=c=>{var u=Xg();let h;var f=g(u);Sn(f,()=>t.children),L(()=>{h=Jt(u,1,"card svelte-11fn1sl",null,h,{hoverable:s(),active:n()}),Le(u,`padding: ${i()??""}`)}),y(c,u)};B(r,c=>{t.onclick?c(o):c(l,!1)})}y(e,a)}Oe(["click"]);var Gg=P("<span></span>"),Jg=P('<span class="card-email svelte-79mfb6"> </span>'),Qg=P('<span class="pulse-badge svelte-79mfb6"></span>'),Zg=P("<!> ",1),tm=P('<span class="last-updated svelte-79mfb6"> </span>'),em=P('<div class="quota-bar-row svelte-79mfb6"><span class="quota-bar-label svelte-79mfb6">5h</span> <div class="quota-bar-track svelte-79mfb6"><div class="quota-bar-fill svelte-79mfb6"></div></div> <span class="quota-bar-value svelte-79mfb6"> </span> <span class="quota-bar-extra svelte-79mfb6"><!> <!> <!></span></div> <div class="quota-bar-row svelte-79mfb6"><span class="quota-bar-label svelte-79mfb6">7j</span> <div class="quota-bar-track svelte-79mfb6"><div class="quota-bar-fill svelte-79mfb6"></div></div> <span class="quota-bar-value svelte-79mfb6"> </span> <span class="quota-bar-extra svelte-79mfb6"> <!></span></div> <!>',1),sm=P('<button class="action-btn switch-btn svelte-79mfb6" aria-label="Activer ce compte" title="Activer ce compte"><!></button>'),nm=P(`<div class="card-layout svelte-79mfb6"><div class="card-left svelte-79mfb6"><!></div> <div class="card-center svelte-79mfb6"><div class="card-header svelte-79mfb6"><div class="card-name-row svelte-79mfb6"><!> <span class="card-name svelte-79mfb6"> </span> <span class="status-badge svelte-79mfb6"><!> </span></div> <!></div> <div class="card-badges svelte-79mfb6"><!> <!> <!> <!> <!></div> <!></div> <div class="card-actions svelte-79mfb6"><!> <button class="action-btn svelte-79mfb6" aria-label="Rafraichir"><!></button> <button class="action-btn svelte-79mfb6" aria-label="Plus d'options"><!></button></div></div>`),im=P("<!> <span>Inclure dans l'auto-switch</span>",1),am=P("<!> <span>Exclure de l'auto-switch</span>",1),rm=P('<button class="context-item svelte-79mfb6"><!> <span> </span></button>'),om=P('<div class="context-priority svelte-79mfb6"><!> <input class="priority-input svelte-79mfb6" type="number" min="1" max="99"/> <button class="priority-ok svelte-79mfb6">OK</button></div>'),lm=P('<button class="context-item svelte-79mfb6"><!> <span>Rafraichir le token</span></button> <button class="context-item svelte-79mfb6"><!> <span>Setup Token</span></button>',1),cm=P('<button class="context-item danger svelte-79mfb6"><!> <span>Revoquer</span></button>'),dm=P('<div class="context-menu svelte-79mfb6"><button class="context-item svelte-79mfb6"><!> <span> </span></button> <div class="context-divider svelte-79mfb6"></div> <button class="context-item svelte-79mfb6"><!></button> <!> <div class="context-divider svelte-79mfb6"></div> <button class="context-item svelte-79mfb6"><!> <span>Rafraichir le quota</span></button> <!> <div class="context-divider svelte-79mfb6"></div> <!> <button class="context-item danger svelte-79mfb6"><!> <span>Supprimer</span></button></div>'),um=P('<div class="account-card-wrapper svelte-79mfb6"><div class="status-strip svelte-79mfb6"></div> <!></div> <!>',1);function hm(e,t){xe(t,!0);let s=N(!1),n=N(ye({x:0,y:0})),i=N(!1),a=N(50);const r={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"},o={Cruise:"var(--phase-cruise)",Watch:"var(--phase-watch)",Alert:"var(--phase-alert)",Critical:"var(--phase-critical)"};let l=H(()=>t.account.quota&&t.account.quota.limit5h>0?t.account.quota.tokens5h/t.account.quota.limit5h:0),c=H(()=>t.account.quota&&t.account.quota.limit7d>0?t.account.quota.tokens7d/t.account.quota.limit7d:0),u=H(()=>r[t.account.data.provider??"anthropic"]??"var(--fg-dim)"),h=H(()=>o[t.account.quota?.phase??"Cruise"]??"var(--phase-cruise)"),f=H(()=>t.account.quota?.phase==="Alert"||t.account.quota?.phase==="Critical"),v=H(()=>t.account.data.displayName||t.account.data.name||t.account.key),p=H(()=>t.account.data.autoSwitchDisabled===!0),m=H(()=>t.account.data.accountType==="api"),b=H(()=>t.account.revoked?"revoked":t.account.hasToken??!0?t.account.isActive?"active":t.account.data.autoSwitchDisabled??!1?"excluded":"available":"no_token");const x={active:{label:"Actif",color:"var(--status-running)"},available:{label:"Disponible",color:"var(--accent)"},excluded:{label:"Exclu",color:"var(--status-warning)"},revoked:{label:"Révoqué",color:"var(--status-stopped)"},no_token:{label:"Sans token",color:"var(--fg-dim)"}};let S=H(()=>x[d(b)].label),k=H(()=>x[d(b)].color);function w(W){return W>=1e6?(W/1e6).toFixed(1)+"M":W>=1e3?(W/1e3).toFixed(0)+"k":String(W)}function $(W){if(W==null||W<=0)return"";if(W<60)return`~${Math.round(W)}m`;const q=Math.floor(W/60),rt=Math.round(W%60);return`~${q}h${rt>0?rt+"m":""}`}function A(W){if(!W)return"";const q=new Date(W).getTime(),rt=Date.now(),Rt=q-rt;if(Rt<=0)return"reset";const It=Math.floor(Rt/6e4);if(It<60)return`${It}m`;const U=Math.floor(It/60),$t=It%60;return`${U}h${$t>0?$t.toString().padStart(2,"0")+"m":""}`}let z=H(()=>$(t.account.quota?.timeToThreshold)),C=H(()=>t.account.quota?.emaVelocity&&t.account.quota.emaVelocity>.001?`${t.account.quota.emaVelocity.toFixed(2)}%/min`:""),E=H(()=>A(t.account.quota?.resetsAt5h)),T=H(()=>A(t.account.quota?.resetsAt7d));function O(W){W.preventDefault();const q=220,rt=320,Rt=Math.min(W.clientX,window.innerWidth-q-8),It=Math.min(W.clientY,window.innerHeight-rt-8);M(n,{x:Math.max(4,Rt),y:Math.max(4,It)},!0),M(s,!0),M(i,!1)}function F(){M(s,!1),M(i,!1)}async function Z(){F();try{await Ye.switch(t.account.key)}catch(W){_s.error("Erreur",String(W))}}async function Y(){F();try{await Ye.refresh(t.account.key)}catch(W){_s.error("Refresh echoue",String(W))}}async function V(){F();try{await Ye.delete(t.account.key)}catch(W){_s.error("Erreur",String(W))}}async function J(){F();try{await Ye.updateAccount(t.account.key,{autoSwitchDisabled:!d(p)})}catch(W){_s.error("Erreur",String(W))}}function st(){M(a,t.account.data.priority??50,!0),M(i,!0)}async function _t(){try{await Ye.updateAccount(t.account.key,{priority:d(a)})}catch(W){_s.error("Erreur",String(W))}F()}async function gt(){F();try{await Ye.refresh(t.account.key)}catch(W){_s.error("Refresh token echoue",String(W))}}var kt=um();Es("click",Xa,F);var K=j(kt),R=g(K),tt=_(R,2);de(tt,{get active(){return t.account.isActive},padding:"16px 16px 16px 20px",children:(W,q)=>{var rt=nm(),Rt=g(rt),It=g(Rt);{let I=H(()=>t.account.quota?.phase);Ug(It,{get percent(){return d(l)},get phase(){return d(I)},size:44,strokeWidth:3.5})}var U=_(Rt,2),$t=g(U),jt=g($t),ae=g(jt);{var At=I=>{var G=Gg();let et;L(()=>et=Jt(G,1,"active-dot svelte-79mfb6",null,et,{pulse:d(f)})),y(I,G)};B(ae,I=>{t.account.isActive&&I(At)})}var Nt=_(ae,2),fe=g(Nt),ce=_(Nt,2),zt=g(ce);{var bt=I=>{bu(I,{size:10})},St=I=>{yu(I,{size:10})};B(zt,I=>{d(b)==="revoked"?I(bt):d(b)==="no_token"&&I(St,1)})}var ct=_(zt),Ft=_(jt,2);{var Tt=I=>{var G=Jg(),et=g(G);L(()=>D(et,t.account.data.email)),y(I,G)};B(Ft,I=>{t.account.data.email&&I(Tt)})}var yt=_($t,2),Qt=g(yt);Ke(Qt,{get color(){return d(u)},children:(I,G)=>{var et=Ut();L(()=>D(et,t.account.data.provider??"anthropic")),y(I,et)},$$slots:{default:!0}});var mt=_(Qt,2);{var Mt=I=>{Ke(I,{get color(){return d(h)},children:(G,et)=>{var Q=Zg(),ut=j(Q);{var Wt=qt=>{var xt=Qg();y(qt,xt)};B(ut,qt=>{d(f)&&qt(Wt)})}var Gt=_(ut);L(()=>D(Gt,` ${t.account.quota.phase??""}`)),y(G,Q)},$$slots:{default:!0}})};B(mt,I=>{t.account.quota?.phase&&I(Mt)})}var Bt=_(mt,2);{var se=I=>{Ke(I,{color:"var(--fg-dim)",small:!0,children:(G,et)=>{var Q=Ut();L(()=>D(Q,`P${t.account.data.priority??""}`)),y(G,Q)},$$slots:{default:!0}})};B(Bt,I=>{t.account.data.priority!=null&&I(se)})}var oe=_(Bt,2);{var Lt=I=>{Ke(I,{color:"var(--accent)",small:!0,children:(G,et)=>{var Q=Ut();L(()=>D(Q,t.account.data.planType)),y(G,Q)},$$slots:{default:!0}})};B(oe,I=>{t.account.data.planType&&I(Lt)})}var Et=_(oe,2);{var te=I=>{Ke(I,{color:"var(--status-error)",small:!0,children:(G,et)=>{var Q=Ut("exclu");y(G,Q)},$$slots:{default:!0}})};B(Et,I=>{d(p)&&I(te)})}var ge=_(yt,2);{var Zt=I=>{var G=em(),et=j(G),Q=_(g(et),2),ut=g(Q),Wt=_(Q,2),Gt=g(Wt),qt=_(Wt,2),xt=g(qt);{var nt=Ae=>{var We=Ut();L(()=>D(We,`Reset: ${d(E)??""}`)),y(Ae,We)};B(xt,Ae=>{d(E)&&Ae(nt)})}var Pt=_(xt,2);{var ue=Ae=>{var We=Ut();L(()=>D(We,`· ↗ ${d(C)??""}`)),y(Ae,We)};B(Pt,Ae=>{d(C)&&Ae(ue)})}var we=_(Pt,2);{var as=Ae=>{var We=Ut();L(()=>D(We,`· TTT ${d(z)??""}`)),y(Ae,We)};B(we,Ae=>{d(z)&&Ae(as)})}var Be=_(et,2),ts=_(g(Be),2),Se=g(ts),rs=_(ts,2),me=g(rs),He=_(rs,2),Re=g(He),_e=_(Re);{var Ys=Ae=>{var We=Ut();L(()=>D(We,`· Reset: ${d(T)??""}`)),y(Ae,We)};B(_e,Ae=>{d(T)&&Ae(Ys)})}var ls=_(Be,2);{var pa=Ae=>{var We=tm(),Mr=g(We);L(Pr=>D(Mr,`MAJ ${Pr??""}`),[()=>new Date(t.account.quota.lastUpdated).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})]),y(Ae,We)};B(ls,Ae=>{t.account.quota.lastUpdated&&Ae(pa)})}L((Ae,We,Mr,Pr,$h,Sh)=>{Le(ut,`width: ${Ae??""}%; background: ${d(h)??""}`),D(Gt,`${We??""}%`),Le(Se,`width: ${Mr??""}%; background: ${d(h)??""}`),D(me,`${Pr??""}%`),D(Re,`${$h??""}/${Sh??""} `)},[()=>Math.min(d(l),1)*100,()=>Math.round(d(l)*100),()=>Math.min(d(c),1)*100,()=>Math.round(d(c)*100),()=>w(t.account.quota.tokens7d??0),()=>w(t.account.quota.limit7d??0)]),y(I,G)};B(ge,I=>{t.account.quota&&I(Zt)})}var Kt=_(U,2),X=g(Kt);{var Dt=I=>{var G=sm(),et=g(G);Ja(et,{size:14}),it("click",G,Z),y(I,G)};B(X,I=>{t.account.isActive||I(Dt)})}var lt=_(X,2),wt=g(lt);ks(wt,{size:14});var Ot=_(lt,2),Xt=g(Ot);ep(Xt,{size:14}),L(()=>{D(fe,d(v)),Le(ce,`color: ${d(k)??""}; border-color: ${d(k)??""}`),D(ct,` ${d(S)??""}`)}),it("click",lt,Y),it("click",Ot,I=>{I.stopPropagation(),O(I)}),y(W,rt)},$$slots:{default:!0}});var dt=_(K,2);{var Ht=W=>{var q=dm(),rt=g(q),Rt=g(rt);Ja(Rt,{size:14});var It=_(Rt,2),U=g(It),$t=_(rt,4),jt=g($t);{var ae=mt=>{var Mt=im(),Bt=j(Mt);ho(Bt,{size:14}),y(mt,Mt)},At=mt=>{var Mt=am(),Bt=j(Mt);bp(Bt,{size:14}),y(mt,Mt)};B(jt,mt=>{d(p)?mt(ae):mt(At,!1)})}var Nt=_($t,2);{var fe=mt=>{var Mt=rm(),Bt=g(Mt);jl(Bt,{size:14});var se=_(Bt,2),oe=g(se);L(()=>D(oe,`Priorite (${t.account.data.priority??50??""})`)),it("click",Mt,st),y(mt,Mt)},ce=mt=>{var Mt=om(),Bt=g(Mt);jl(Bt,{size:14});var se=_(Bt,2),oe=_(se,2);it("keydown",se,Lt=>{Lt.key==="Enter"&&_t()}),Ee(se,()=>d(a),Lt=>M(a,Lt)),it("click",oe,_t),y(mt,Mt)};B(Nt,mt=>{d(i)?mt(ce,!1):mt(fe)})}var zt=_(Nt,4),bt=g(zt);ks(bt,{size:14});var St=_(zt,2);{var ct=mt=>{var Mt=lm(),Bt=j(Mt),se=g(Bt);Vo(se,{size:14});var oe=_(Bt,2),Lt=g(oe);lp(Lt,{size:14}),it("click",Bt,gt),it("click",oe,F),y(mt,Mt)};B(St,mt=>{d(m)||mt(ct)})}var Ft=_(St,4);{var Tt=mt=>{var Mt=cm(),Bt=g(Mt);Hv(Bt,{size:14}),it("click",Mt,F),y(mt,Mt)};B(Ft,mt=>{d(m)||mt(Tt)})}var yt=_(Ft,2),Qt=g(yt);ii(Qt,{size:14}),L(()=>{Le(q,`left: ${d(n).x??""}px; top: ${d(n).y??""}px`),D(U,`Activer ${t.account.data.email??t.account.key??""}`)}),it("click",q,mt=>mt.stopPropagation()),it("keydown",q,()=>{}),it("click",rt,Z),it("click",$t,J),it("click",zt,Y),it("click",yt,V),y(W,q)};B(dt,W=>{d(s)&&W(Ht)})}L(()=>Le(R,`background: ${d(k)??""}`)),it("contextmenu",K,O),it("dblclick",K,Z),y(e,kt),ke()}Oe(["contextmenu","dblclick","click","keydown"]);var fm=P('<div class="empty-state svelte-1ctznzk"><p class="empty-title svelte-1ctznzk">Aucun compte configure</p> <p class="empty-desc svelte-1ctznzk">Ajoutez un compte pour commencer</p></div>'),vm=P('<div class="account-grid svelte-1ctznzk"><!> <!></div>');function pm(e,t){xe(t,!0);let s=H(()=>[...t.accounts].sort((o,l)=>{if(o.isActive!==l.isActive)return o.isActive?-1:1;const c=o.data.priority??99,u=l.data.priority??99;return c-u}));var n=vm(),i=g(n);ie(i,17,()=>d(s),o=>o.key,(o,l)=>{hm(o,{get account(){return d(l)}})});var a=_(i,2);{var r=o=>{var l=fm();y(o,l)};B(a,o=>{d(s).length===0&&o(r)})}y(e,n),ke()}var gm=P("<button><!></button>");function Vt(e,t){let s=pe(t,"variant",3,"primary"),n=pe(t,"size",3,"md"),i=pe(t,"disabled",3,!1);var a=gm(),r=g(a);Sn(r,()=>t.children),L(()=>{Jt(a,1,`btn btn-${s()??""} btn-${n()??""}`,"svelte-er4ugn"),a.disabled=i()}),it("click",a,function(...o){t.onclick?.apply(this,o)}),y(e,a)}Oe(["click"]);var mm=P('<footer class="dialog-actions svelte-53p4nz"><!></footer>'),_m=P('<div class="dialog-backdrop svelte-53p4nz"><div class="dialog-content svelte-53p4nz"><header class="dialog-header svelte-53p4nz"><h2 class="dialog-title svelte-53p4nz"> </h2> <button class="dialog-close svelte-53p4nz" aria-label="Fermer"><!></button></header> <div class="dialog-body svelte-53p4nz"><!></div> <!></div></div>');function $a(e,t){xe(t,!0);let s=pe(t,"open",15,!1),n=pe(t,"title",3,"");function i(){s(!1),t.onclose?.()}function a(c){c.key==="Escape"&&i()}var r=at(),o=j(r);{var l=c=>{var u=_m(),h=g(u),f=g(h),v=g(f),p=g(v),m=_(v,2),b=g(m);xu(b,{size:18});var x=_(f,2),S=g(x);Sn(S,()=>t.children);var k=_(x,2);{var w=$=>{var A=mm(),z=g(A);Sn(z,()=>t.actions),y($,A)};B(k,$=>{t.actions&&$(w)})}L(()=>D(p,n())),it("click",u,i),it("keydown",u,a),it("click",h,$=>$.stopPropagation()),it("keydown",h,()=>{}),it("click",m,i),y(c,u)};B(o,c=>{s()&&c(l)})}y(e,r),ke()}Oe(["click","keydown"]);var bm=P('<span style="display:flex"><!></span> Rafraîchir',1),ym=P("<!> Setup auto",1),xm=P('<span style="display:flex"><!></span> Import auto',1),km=P("<!> Importer",1),wm=P("<!> Ajouter",1),$m=P('<div class="stat-pill svelte-1ck4pq"><span class="dot dot-watch svelte-1ck4pq"></span> <span> </span></div>'),Sm=P('<div class="stat-pill svelte-1ck4pq"><span class="dot dot-alert svelte-1ck4pq"></span> <span> </span></div>'),Mm=P('<div class="stat-pill urgent svelte-1ck4pq"><span class="dot dot-critical svelte-1ck4pq"></span> <span> </span></div>'),Pm=P('<div class="phase-stats svelte-1ck4pq"><div class="stat-pill svelte-1ck4pq"><span class="dot dot-active svelte-1ck4pq"></span> <span> </span></div> <span class="stat-sep svelte-1ck4pq"></span> <div class="stat-pill svelte-1ck4pq"><span class="dot dot-cruise svelte-1ck4pq"></span> <span> </span></div> <!> <!> <!></div>'),Am=P("<!> Ajouter un compte",1),Cm=P('<div class="empty-state svelte-1ck4pq"><div class="empty-icon svelte-1ck4pq"><!></div> <p class="empty-title svelte-1ck4pq">Aucun compte configuré</p> <p class="empty-desc svelte-1ck4pq">Ajoutez votre premier compte Claude pour commencer</p> <!></div>'),zm=P('<div class="add-form svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-key">Identifiant <span class="req svelte-1ck4pq">*</span></label> <input id="add-key" type="text" class="form-input svelte-1ck4pq" placeholder="ex: alice@example.com" autocomplete="off"/></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-token">Access Token <span class="req svelte-1ck4pq">*</span></label> <input id="add-token" type="password" class="form-input svelte-1ck4pq" placeholder="token OAuth..." autocomplete="new-password"/></div> <div class="form-row svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-name">Nom</label> <input id="add-name" type="text" class="form-input svelte-1ck4pq" placeholder="Alice"/></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-email">Email</label> <input id="add-email" type="email" class="form-input svelte-1ck4pq" placeholder="alice@example.com"/></div></div> <div class="form-row svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-provider">Provider</label> <select id="add-provider" class="form-input form-select svelte-1ck4pq"><option>Anthropic</option><option>Gemini</option><option>OpenAI</option><option>xAI</option><option>DeepSeek</option><option>Mistral</option><option>Groq</option></select></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-priority">Priorité</label> <input id="add-priority" type="number" class="form-input svelte-1ck4pq" min="0" max="99"/></div></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-plan">Plan</label> <input id="add-plan" type="text" class="form-input svelte-1ck4pq" placeholder="pro, team, free..."/></div></div>'),Tm=P("<!> <!>",1),Em=P(`<div class="add-form svelte-1ck4pq"><p style="font-size: 12px; color: var(--fg-secondary);">Collez un access token OAuth capturé depuis Claude Code pour l'importer comme nouveau compte.</p> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="import-token">Access Token <span class="req svelte-1ck4pq">*</span></label> <textarea id="import-token" class="form-input svelte-1ck4pq" rows="3" placeholder="Collez le token ici..." style="resize:vertical;font-family:monospace;font-size:12px"></textarea></div></div>`),Dm=P("<!> <!>",1),Om=P('<div class="scan-scanning svelte-1ck4pq"><div class="scan-spinner svelte-1ck4pq"></div> <span>Scan des fichiers locaux en cours…</span></div>'),Rm=P('<span class="scan-provider-badge svelte-1ck4pq"> </span>'),Lm=P('<div><input type="checkbox" class="scan-checkbox svelte-1ck4pq"/> <div class="scan-item-info svelte-1ck4pq"><span class="scan-label svelte-1ck4pq"> </span> <span class="scan-source svelte-1ck4pq"> </span> <!></div></div>'),Im=P('<div class="add-form svelte-1ck4pq"><p class="scan-intro svelte-1ck4pq">Tokens Claude détectés sur ce poste. Sélectionnez ceux à importer.</p>  <div class="scan-select-all svelte-1ck4pq"><input type="checkbox" class="svelte-1ck4pq"/> <span> </span></div> <div class="scan-list svelte-1ck4pq"></div></div>'),jm=P("<!> <!>",1),Nm=P('<div class="scan-scanning svelte-1ck4pq" style="padding:16px 0"><div class="scan-spinner svelte-1ck4pq"></div> <span>Recherche de claude dans le PATH…</span></div>'),Fm=P('<div class="setup-check-row ok svelte-1ck4pq"><span class="setup-check-icon svelte-1ck4pq">✓</span> <div><div style="font-size:13px;font-weight:500;color:var(--fg-primary)">claude trouvé</div> <div class="setup-check-path svelte-1ck4pq"> </div></div></div> <p class="setup-install-hint svelte-1ck4pq">Cliquez sur <strong>Continuer</strong> pour exécuter <code style="font-family:monospace;font-size:12px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;padding:1px 5px">claude setup-token</code> et capturer automatiquement votre token OAuth.</p>',1),Bm=P('<div class="setup-check-path svelte-1ck4pq" style="color:var(--fg-dim)"> </div>'),qm=P(`<div class="setup-check-row fail svelte-1ck4pq"><span class="setup-check-icon svelte-1ck4pq">✗</span> <div><div style="font-size:13px;font-weight:500;color:var(--status-error)">claude introuvable</div> <!></div></div> <p class="setup-install-hint svelte-1ck4pq">Claude CLI n'est pas installé ou n'est pas dans le PATH.<br/> Installez-le depuis <a href="https://claude.ai/download" target="_blank" rel="noopener" class="svelte-1ck4pq">claude.ai/download</a> puis relancez cette fenêtre.</p>`,1),Vm=P('<p class="setup-step-label svelte-1ck4pq">Etape 1 — Vérification</p> <!>',1),Hm=P('<pre class="setup-output svelte-1ck4pq"> </pre>'),Wm=P('<p class="setup-step-label svelte-1ck4pq">Etape 2 — Capture en cours</p> <div class="setup-capture-body svelte-1ck4pq"><div class="setup-spinner svelte-1ck4pq"></div> <span class="setup-capture-label svelte-1ck4pq">Exécution de <code style="font-family:monospace;font-size:11px">claude setup-token</code>…</span> <span class="setup-capture-sublabel svelte-1ck4pq">Délai max : 60 secondes</span></div> <!>',1),Um=P('<div class="setup-success-email svelte-1ck4pq">Compte ajouté : <strong> </strong></div>'),Ym=P('<div class="setup-success-email svelte-1ck4pq">Le compte a été ajouté à la liste.</div>'),Km=P('<p class="setup-step-label svelte-1ck4pq">Etape 3 — Succès</p> <div class="setup-success-body svelte-1ck4pq"><div class="setup-success-icon svelte-1ck4pq">✅</div> <div class="setup-success-title svelte-1ck4pq">Token capturé !</div> <!></div>',1),Xm=P('<div class="setup-error-msg svelte-1ck4pq"> </div>'),Gm=P('<pre class="setup-output svelte-1ck4pq"> </pre>'),Jm=P('<p class="setup-step-label svelte-1ck4pq">Résultat — Fallback manuel</p> <!> <!> <div class="setup-manual-hint svelte-1ck4pq"><strong>Instructions manuelles :</strong><br/> 1. Ouvrez un terminal et lancez <code class="svelte-1ck4pq">claude setup-token</code><br/> 2. Copiez le token affiché<br/> 3. Utilisez le bouton <strong>Importer</strong> pour coller le token manuellement</div>',1),Qm=P('<div class="setup-body svelte-1ck4pq"><!></div>'),Zm=P("<!> <!>",1),t_=P("<!> <!> <!>",1),e_=P('<div class="accounts-screen svelte-1ck4pq"><header class="screen-header svelte-1ck4pq"><div class="header-left svelte-1ck4pq"><div class="screen-icon svelte-1ck4pq"><!></div> <div><h1 class="screen-title svelte-1ck4pq">Comptes</h1> <p class="screen-subtitle svelte-1ck4pq"> </p></div></div> <div class="screen-actions svelte-1ck4pq"><!> <!> <!> <!> <!></div></header> <!> <!></div> <!>  <!> <!> <!>',1);function s_(e,t){xe(t,!0);let s=N(ye([])),n=N(!1),i=N(!1),a=N(!1),r=N(""),o=N(""),l=N(""),c=N(""),u=N(""),h=N("anthropic"),f=N(1),v=N(""),p=N(!1),m=N(!1),b=N(!1),x=N(!1),S=N(ye([])),k=N(ye(new Set)),w=N(!1),$=N("check"),A=N(null),z=N(null),C=N(""),E=N(null),T=N(!1);Ve(()=>Ye.subscribe(Dt=>{M(s,Dt,!0)}));async function O(){M(n,!0);try{await Ye.load()}finally{M(n,!1)}}function F(){M(o,""),M(l,""),M(c,""),M(u,""),M(h,"anthropic"),M(f,1),M(v,"")}async function Z(){if(!(!d(o).trim()||!d(l).trim())){M(p,!0);try{await Ye.add(d(o).trim(),{name:d(c).trim()||d(o).trim(),displayName:d(c).trim()||d(o).trim(),email:d(u).trim()||void 0,provider:d(h),priority:d(f),planType:d(v).trim()||void 0,claudeAiOauth:{accessToken:d(l).trim(),refreshToken:d(l).trim()}}),M(i,!1),F()}finally{M(p,!1)}}}function Y(){M(i,!1),F()}function V(X){return X.email??X.accessToken?.slice(0,16)??X.sourcePath}function J(X){return X.email?X.email:X.name?X.name:`token-${X.accessToken?.slice(0,8)??"???"}…`}async function st(){M(b,!0),M(S,[],!0),M(k,new Set,!0),M(m,!0);try{const X=await gg();M(S,X,!0),X.length===0?(M(m,!1),_s.info("Aucun token local trouvé","Aucun fichier de credentials Claude n'a été détecté.")):M(k,new Set(X.map(V)),!0)}catch(X){M(m,!1),_s.error("Erreur de scan",String(X))}finally{M(b,!1)}}function _t(){M(m,!1),M(S,[],!0),M(k,new Set,!0)}function gt(X){const Dt=V(X),lt=new Set(d(k));lt.has(Dt)?lt.delete(Dt):lt.add(Dt),M(k,lt,!0)}function kt(){d(k).size===d(S).length?M(k,new Set,!0):M(k,new Set(d(S).map(V)),!0)}async function K(){const X=d(S).filter(Dt=>d(k).has(V(Dt)));if(X.length!==0){M(x,!0);try{const Dt=await mg(X);await Ye.load(),_t(),_s.success(`${Dt} compte${Dt>1?"s":""} importé${Dt>1?"s":""}`,"Les tokens locaux ont été ajoutés avec succès.")}catch(Dt){_s.error("Erreur d'import",String(Dt))}finally{M(x,!1)}}}function R(){M($,"check"),M(A,null),M(z,null),M(C,""),M(E,null),M(T,!1)}async function tt(){R(),M(w,!0),M(T,!0);try{const X=await _g();M(A,X,!0)}catch(X){M(A,null),M(z,String(X),!0)}finally{M(T,!1)}}function dt(){M(w,!1),R()}async function Ht(){M($,"capturing"),M(C,""),M(z,null);try{const X=await bg(60);M(C,X.output??"",!0),X.success&&X.accessToken?(M(E,X.email??null,!0),M($,"success"),await Ye.load()):(M(z,X.error??"Aucun token capturé.",!0),M($,"error"))}catch(X){M(z,String(X),!0),M($,"error")}}function W(){dt(),_s.success("Token capturé",d(E)?`Compte ${d(E)} ajouté.`:"Compte ajouté avec succès.")}let q=H(()=>d(s).filter(X=>X.isActive).length),rt=H(()=>d(s).filter(X=>!X.quota||X.quota.phase==="Cruise").length),Rt=H(()=>d(s).filter(X=>X.quota?.phase==="Watch").length),It=H(()=>d(s).filter(X=>X.quota?.phase==="Alert").length),U=H(()=>d(s).filter(X=>X.quota?.phase==="Critical").length),$t=H(()=>d(S).length>0&&d(k).size===d(S).length),jt=H(()=>d(k).size>0&&d(k).size<d(S).length);var ae=e_(),At=j(ae),Nt=g(At),fe=g(Nt),ce=g(fe),zt=g(ce);Za(zt,{size:18});var bt=_(ce,2),St=_(g(bt),2),ct=g(St),Ft=_(fe,2),Tt=g(Ft);Vt(Tt,{variant:"ghost",size:"sm",onclick:O,get disabled(){return d(n)},children:(X,Dt)=>{var lt=bm(),wt=j(lt);let Ot;var Xt=g(wt);ks(Xt,{size:14}),L(()=>Ot=Jt(wt,1,"",null,Ot,{spin:d(n)})),y(X,lt)},$$slots:{default:!0}});var yt=_(Tt,2);Vt(yt,{variant:"ghost",size:"sm",onclick:tt,children:(X,Dt)=>{var lt=ym(),wt=j(lt);Wi(wt,{size:14}),y(X,lt)},$$slots:{default:!0}});var Qt=_(yt,2);Vt(Qt,{variant:"ghost",size:"sm",onclick:st,get disabled(){return d(b)},children:(X,Dt)=>{var lt=xm(),wt=j(lt);let Ot;var Xt=g(wt);mp(Xt,{size:14}),L(()=>Ot=Jt(wt,1,"",null,Ot,{spin:d(b)})),y(X,lt)},$$slots:{default:!0}});var mt=_(Qt,2);Vt(mt,{variant:"ghost",size:"sm",onclick:()=>M(a,!0),children:(X,Dt)=>{var lt=km(),wt=j(lt);$p(wt,{size:14}),y(X,lt)},$$slots:{default:!0}});var Mt=_(mt,2);Vt(Mt,{variant:"primary",size:"sm",onclick:()=>M(i,!0),children:(X,Dt)=>{var lt=wm(),wt=j(lt);Qi(wt,{size:14}),y(X,lt)},$$slots:{default:!0}});var Bt=_(Nt,2);{var se=X=>{var Dt=Pm(),lt=g(Dt),wt=_(g(lt),2),Ot=g(wt),Xt=_(lt,4),I=_(g(Xt),2),G=g(I),et=_(Xt,2);{var Q=xt=>{var nt=$m(),Pt=_(g(nt),2),ue=g(Pt);L(()=>D(ue,`${d(Rt)??""} Watch`)),y(xt,nt)};B(et,xt=>{d(Rt)>0&&xt(Q)})}var ut=_(et,2);{var Wt=xt=>{var nt=Sm(),Pt=_(g(nt),2),ue=g(Pt);L(()=>D(ue,`${d(It)??""} Alert`)),y(xt,nt)};B(ut,xt=>{d(It)>0&&xt(Wt)})}var Gt=_(ut,2);{var qt=xt=>{var nt=Mm(),Pt=_(g(nt),2),ue=g(Pt);L(()=>D(ue,`${d(U)??""} Critical`)),y(xt,nt)};B(Gt,xt=>{d(U)>0&&xt(qt)})}L(()=>{D(Ot,`${d(q)??""} actif${d(q)>1?"s":""}`),D(G,`${d(rt)??""} Cruise`)}),y(X,Dt)};B(Bt,X=>{d(s).length>0&&X(se)})}var oe=_(Bt,2);{var Lt=X=>{var Dt=Cm(),lt=g(Dt),wt=g(lt);Za(wt,{size:44});var Ot=_(lt,6);Vt(Ot,{variant:"primary",size:"md",onclick:()=>M(i,!0),children:(Xt,I)=>{var G=Am(),et=j(G);Qi(et,{size:14}),y(Xt,G)},$$slots:{default:!0}}),y(X,Dt)},Et=X=>{pm(X,{get accounts(){return d(s)}})};B(oe,X=>{d(s).length===0?X(Lt):X(Et,!1)})}var te=_(At,2);$a(te,{title:"Ajouter un compte",onclose:Y,get open(){return d(i)},set open(lt){M(i,lt,!0)},children:lt=>{var wt=zm(),Ot=g(wt),Xt=_(g(Ot),2),I=_(Ot,2),G=_(g(I),2),et=_(I,2),Q=g(et),ut=_(g(Q),2),Wt=_(Q,2),Gt=_(g(Wt),2),qt=_(et,2),xt=g(qt),nt=_(g(xt),2),Pt=g(nt);Pt.value=Pt.__value="anthropic";var ue=_(Pt);ue.value=ue.__value="gemini";var we=_(ue);we.value=we.__value="openai";var as=_(we);as.value=as.__value="xai";var Be=_(as);Be.value=Be.__value="deepseek";var ts=_(Be);ts.value=ts.__value="mistral";var Se=_(ts);Se.value=Se.__value="groq";var rs=_(xt,2),me=_(g(rs),2),He=_(qt,2),Re=_(g(He),2);Ee(Xt,()=>d(o),_e=>M(o,_e)),Ee(G,()=>d(l),_e=>M(l,_e)),Ee(ut,()=>d(c),_e=>M(c,_e)),Ee(Gt,()=>d(u),_e=>M(u,_e)),gi(nt,()=>d(h),_e=>M(h,_e)),Ee(me,()=>d(f),_e=>M(f,_e)),Ee(Re,()=>d(v),_e=>M(v,_e)),y(lt,wt)},actions:lt=>{var wt=Tm(),Ot=j(wt);Vt(Ot,{variant:"ghost",size:"sm",onclick:Y,children:(I,G)=>{var et=Ut("Annuler");y(I,et)},$$slots:{default:!0}});var Xt=_(Ot,2);{let I=H(()=>d(p)||!d(o).trim()||!d(l).trim());Vt(Xt,{variant:"primary",size:"sm",onclick:Z,get disabled(){return d(I)},children:(G,et)=>{var Q=Ut();L(()=>D(Q,d(p)?"Ajout...":"Ajouter")),y(G,Q)},$$slots:{default:!0}})}y(lt,wt)},$$slots:{default:!0,actions:!0}});var ge=_(te,2);$a(ge,{title:"Importer un token",onclose:()=>{M(a,!1),M(r,"")},get open(){return d(a)},set open(lt){M(a,lt,!0)},children:lt=>{var wt=Em(),Ot=_(g(wt),2),Xt=_(g(Ot),2);Ee(Xt,()=>d(r),I=>M(r,I)),y(lt,wt)},actions:lt=>{var wt=Dm(),Ot=j(wt);Vt(Ot,{variant:"ghost",size:"sm",onclick:()=>{M(a,!1),M(r,"")},children:(I,G)=>{var et=Ut("Annuler");y(I,et)},$$slots:{default:!0}});var Xt=_(Ot,2);{let I=H(()=>!d(r).trim());Vt(Xt,{variant:"primary",size:"sm",get disabled(){return d(I)},onclick:async()=>{const G=`imported-${Date.now()}`;await Ye.add(G,{name:G,claudeAiOauth:{accessToken:d(r).trim(),refreshToken:d(r).trim()}}),M(a,!1),M(r,"")},children:(G,et)=>{var Q=Ut("Importer");y(G,Q)},$$slots:{default:!0}})}y(lt,wt)},$$slots:{default:!0,actions:!0}});var Zt=_(ge,2);$a(Zt,{title:"Import automatique",onclose:_t,get open(){return d(m)},set open(lt){M(m,lt,!0)},children:lt=>{var wt=at(),Ot=j(wt);{var Xt=G=>{var et=Om();y(G,et)},I=G=>{var et=Im(),Q=_(g(et),2),ut=g(Q),Wt=_(ut,2),Gt=g(Wt),qt=_(Q,2);ie(qt,21,()=>d(S),xt=>V(xt),(xt,nt)=>{var Pt=Lm();let ue;var we=g(Pt),as=_(we,2),Be=g(as),ts=g(Be),Se=_(Be,2),rs=g(Se),me=_(Se,2);{var He=Re=>{var _e=Rm(),Ys=g(_e);L(()=>D(Ys,d(nt).provider)),y(Re,_e)};B(me,Re=>{d(nt).provider&&Re(He)})}L((Re,_e,Ys)=>{ue=Jt(Pt,1,"scan-item svelte-1ck4pq",null,ue,Re),Cl(we,_e),D(ts,Ys),D(rs,d(nt).sourcePath)},[()=>({selected:d(k).has(V(d(nt)))}),()=>d(k).has(V(d(nt))),()=>J(d(nt))]),it("click",Pt,()=>gt(d(nt))),it("click",we,Re=>Re.stopPropagation()),it("change",we,()=>gt(d(nt))),y(xt,Pt)}),L(()=>{Cl(ut,d($t)),ut.indeterminate=d(jt),D(Gt,`${d($t)?"Tout désélectionner":"Tout sélectionner"}
             · 
            ${d(k).size??""}/${d(S).length??""} sélectionné${d(k).size>1?"s":""}`)}),it("click",Q,kt),it("click",ut,xt=>xt.stopPropagation()),it("change",ut,kt),y(G,et)};B(Ot,G=>{d(b)?G(Xt):G(I,!1)})}y(lt,wt)},actions:lt=>{var wt=jm(),Ot=j(wt);Vt(Ot,{variant:"ghost",size:"sm",onclick:_t,get disabled(){return d(x)},children:(I,G)=>{var et=Ut("Annuler");y(I,et)},$$slots:{default:!0}});var Xt=_(Ot,2);{let I=H(()=>d(x)||d(b)||d(k).size===0);Vt(Xt,{variant:"primary",size:"sm",get disabled(){return d(I)},onclick:K,children:(G,et)=>{var Q=Ut();L(()=>D(Q,d(x)?"Import…":`Importer ${d(k).size>0?d(k).size:""} sélection${d(k).size>1?"s":""}`)),y(G,Q)},$$slots:{default:!0}})}y(lt,wt)},$$slots:{default:!0,actions:!0}});var Kt=_(Zt,2);$a(Kt,{title:"Setup automatique",onclose:dt,get open(){return d(w)},set open(lt){M(w,lt,!0)},children:lt=>{var wt=Qm(),Ot=g(wt);{var Xt=Q=>{var ut=Vm(),Wt=_(j(ut),2);{var Gt=nt=>{var Pt=Nm();y(nt,Pt)},qt=nt=>{var Pt=Fm(),ue=j(Pt),we=_(g(ue),2),as=_(g(we),2),Be=g(as);L(()=>D(Be,d(A))),y(nt,Pt)},xt=nt=>{var Pt=qm(),ue=j(Pt),we=_(g(ue),2),as=_(g(we),2);{var Be=ts=>{var Se=Bm(),rs=g(Se);L(()=>D(rs,d(z))),y(ts,Se)};B(as,ts=>{d(z)&&ts(Be)})}y(nt,Pt)};B(Wt,nt=>{d(T)?nt(Gt):d(A)?nt(qt,1):nt(xt,!1)})}y(Q,ut)},I=Q=>{var ut=Wm(),Wt=_(j(ut),4);{var Gt=qt=>{var xt=Hm(),nt=g(xt);L(()=>D(nt,d(C))),y(qt,xt)};B(Wt,qt=>{d(C)&&qt(Gt)})}y(Q,ut)},G=Q=>{var ut=Km(),Wt=_(j(ut),2),Gt=_(g(Wt),4);{var qt=nt=>{var Pt=Um(),ue=_(g(Pt)),we=g(ue);L(()=>D(we,d(E))),y(nt,Pt)},xt=nt=>{var Pt=Ym();y(nt,Pt)};B(Gt,nt=>{d(E)?nt(qt):nt(xt,!1)})}y(Q,ut)},et=Q=>{var ut=Jm(),Wt=_(j(ut),2);{var Gt=nt=>{var Pt=Xm(),ue=g(Pt);L(()=>D(ue,d(z))),y(nt,Pt)};B(Wt,nt=>{d(z)&&nt(Gt)})}var qt=_(Wt,2);{var xt=nt=>{var Pt=Gm(),ue=g(Pt);L(()=>D(ue,d(C))),y(nt,Pt)};B(qt,nt=>{d(C)&&nt(xt)})}y(Q,ut)};B(Ot,Q=>{d($)==="check"?Q(Xt):d($)==="capturing"?Q(I,1):d($)==="success"?Q(G,2):d($)==="error"&&Q(et,3)})}y(lt,wt)},actions:lt=>{var wt=at(),Ot=j(wt);{var Xt=Q=>{var ut=Zm(),Wt=j(ut);Vt(Wt,{variant:"ghost",size:"sm",onclick:dt,children:(nt,Pt)=>{var ue=Ut("Annuler");y(nt,ue)},$$slots:{default:!0}});var Gt=_(Wt,2);{var qt=nt=>{Vt(nt,{variant:"primary",size:"sm",onclick:Ht,children:(Pt,ue)=>{var we=Ut("Continuer");y(Pt,we)},$$slots:{default:!0}})},xt=nt=>{Vt(nt,{variant:"ghost",size:"sm",onclick:tt,children:(Pt,ue)=>{var we=Ut("Réessayer");y(Pt,we)},$$slots:{default:!0}})};B(Gt,nt=>{!d(T)&&d(A)?nt(qt):!d(T)&&!d(A)&&nt(xt,1)})}y(Q,ut)},I=Q=>{Vt(Q,{variant:"ghost",size:"sm",disabled:!0,children:(ut,Wt)=>{var Gt=Ut("En cours…");y(ut,Gt)},$$slots:{default:!0}})},G=Q=>{Vt(Q,{variant:"primary",size:"sm",onclick:W,children:(ut,Wt)=>{var Gt=Ut("Fermer");y(ut,Gt)},$$slots:{default:!0}})},et=Q=>{var ut=t_(),Wt=j(ut);Vt(Wt,{variant:"ghost",size:"sm",onclick:dt,children:(xt,nt)=>{var Pt=Ut("Fermer");y(xt,Pt)},$$slots:{default:!0}});var Gt=_(Wt,2);Vt(Gt,{variant:"ghost",size:"sm",onclick:R,children:(xt,nt)=>{var Pt=Ut("Réessayer");y(xt,Pt)},$$slots:{default:!0}});var qt=_(Gt,2);Vt(qt,{variant:"primary",size:"sm",onclick:()=>{dt(),M(a,!0)},children:(xt,nt)=>{var Pt=Ut("Importer manuellement");y(xt,Pt)},$$slots:{default:!0}}),y(Q,ut)};B(Ot,Q=>{d($)==="check"?Q(Xt):d($)==="capturing"?Q(I,1):d($)==="success"?Q(G,2):d($)==="error"&&Q(et,3)})}y(lt,wt)},$$slots:{default:!0,actions:!0}}),L(()=>D(ct,`${d(s).length??""} compte${d(s).length!==1?"s":""} configuré${d(s).length!==1?"s":""}`)),y(e,ae),ke()}Oe(["click","change"]);var n_=P("<option> </option>"),i_=P('<div class="edit-form svelte-ytkoha"><div class="edit-row svelte-ytkoha"><input class="edit-input svelte-ytkoha" type="text" placeholder="Nom"/> <input class="edit-input port-input svelte-ytkoha" type="number" min="1024" max="65535"/></div> <div class="edit-row svelte-ytkoha"><select class="edit-input svelte-ytkoha"><option>Integre</option><!></select> <!> <!></div></div>'),a_=P('<div class="instance-info svelte-ytkoha"><h3 class="instance-name svelte-ytkoha"> </h3> <span class="instance-port svelte-ytkoha"> </span></div> <!>',1),r_=P("<!> ",1),o_=P("<!> Redemarrer",1),l_=P('<div class="instance-card svelte-ytkoha"><div class="instance-header svelte-ytkoha"><span class="instance-icon svelte-ytkoha"><!></span> <!></div> <div class="instance-stats svelte-ytkoha"><div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Moteur</span> <span class="stat-value engine-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Uptime</span> <span class="stat-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Requetes</span> <span class="stat-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Actives</span> <span class="stat-value svelte-ytkoha"> </span></div></div> <div class="setup-row svelte-ytkoha"><span class="setup-label svelte-ytkoha">Setup:</span> <button title="Injecter ANTHROPIC_BASE_URL dans Claude Code"><!> CC</button> <button title="Injecter http.proxy dans VS Code"><!> VSCode</button></div> <div class="instance-actions svelte-ytkoha"><!> <!> <div class="actions-spacer svelte-ytkoha"></div> <!> <!></div></div>');function c_(e,t){xe(t,!0);let s=pe(t,"detectedBinaries",19,()=>[]),n=N(!1),i=N(!1),a=N(""),r=N(0),o=N(""),l=H(()=>t.instance.config.kind==="router"),c=H(()=>t.instance.config.kind==="impersonator"),u=H(()=>()=>{if(t.instance.config.binaryPath){const w=s().find(A=>A.path===t.instance.config.binaryPath);if(w)return w.name;const $=t.instance.config.binaryPath.replace(/\\/g,"/").split("/");return $[$.length-1]||"Externe"}if(t.instance.status.backend){const w=t.instance.status.backend;return w==="python"?"V2 (Python)":w==="rust-auto"?"V3 (Rust)":w==="unknown"?"Externe":`Externe (${w})`}return"Integre"});function h(w){if(w==null||isNaN(w)||w<=0)return"--";if(w<60)return`${w}s`;if(w<3600)return`${Math.floor(w/60)}m ${w%60}s`;const $=Math.floor(w/3600),A=Math.floor(w%3600/60);return`${$}h ${A}m`}async function f(){M(n,!0);try{t.instance.status.running?await gs.stop(t.instance.config.id):await gs.start(t.instance.config.id)}finally{M(n,!1)}}async function v(){M(n,!0);try{await gs.restart(t.instance.config.id)}finally{M(n,!1)}}async function p(){t.instance.status.running&&await gs.stop(t.instance.config.id),await gs.remove(t.instance.config.id)}function m(){M(a,t.instance.config.name,!0),M(r,t.instance.config.port,!0),M(o,t.instance.config.binaryPath||"",!0),M(i,!0)}async function b(){await gs.update(t.instance.config.id,{name:d(a),port:d(r),binaryPath:d(o)||null}),M(i,!1)}function x(){M(i,!1)}async function S(){t.instance.config.setupTargets.includes("claude-code")?(await Gp(),await gs.update(t.instance.config.id,{setupTargets:t.instance.config.setupTargets.filter($=>$!=="claude-code")})):(await Xp(t.instance.config.port),await gs.update(t.instance.config.id,{setupTargets:[...t.instance.config.setupTargets,"claude-code"]}))}async function k(){t.instance.config.setupTargets.includes("vscode")?(await Qp(),await gs.update(t.instance.config.id,{setupTargets:t.instance.config.setupTargets.filter($=>$!=="vscode")})):(await Jp(t.instance.config.port),await gs.update(t.instance.config.id,{setupTargets:[...t.instance.config.setupTargets,"vscode"]}))}de(e,{children:(w,$)=>{var A=l_(),z=g(A),C=g(z),E=g(C);{var T=ct=>{gu(ct,{size:20})},O=ct=>{Wi(ct,{size:20})},F=ct=>{Ho(ct,{size:20})};B(E,ct=>{d(l)?ct(T):d(c)?ct(O,1):ct(F,!1)})}var Z=_(C,2);{var Y=ct=>{var Ft=i_(),Tt=g(Ft),yt=g(Tt),Qt=_(yt,2),mt=_(Tt,2),Mt=g(mt),Bt=g(Mt);Bt.value=Bt.__value="";var se=_(Bt);ie(se,17,s,Ie,(Et,te)=>{var ge=n_(),Zt=g(ge),Kt={};L(()=>{D(Zt,d(te).name),Kt!==(Kt=d(te).path)&&(ge.value=(ge.__value=d(te).path)??"")}),y(Et,ge)});var oe=_(Mt,2);Vt(oe,{size:"sm",variant:"primary",onclick:b,children:(Et,te)=>{var ge=Ut("OK");y(Et,ge)},$$slots:{default:!0}});var Lt=_(oe,2);Vt(Lt,{size:"sm",variant:"ghost",onclick:x,children:(Et,te)=>{var ge=Ut("X");y(Et,ge)},$$slots:{default:!0}}),Ee(yt,()=>d(a),Et=>M(a,Et)),Ee(Qt,()=>d(r),Et=>M(r,Et)),gi(Mt,()=>d(o),Et=>M(o,Et)),y(ct,Ft)},V=ct=>{var Ft=a_(),Tt=j(Ft),yt=g(Tt),Qt=g(yt),mt=_(yt,2),Mt=g(mt),Bt=_(Tt,2);{let se=H(()=>t.instance.status.running?"var(--status-running)":"var(--status-stopped)");Ke(Bt,{get color(){return d(se)},children:(oe,Lt)=>{var Et=Ut();L(()=>D(Et,t.instance.status.running?"Actif":"Arrete")),y(oe,Et)},$$slots:{default:!0}})}L(()=>{D(Qt,t.instance.config.name),D(Mt,`:${t.instance.config.port??""}`)}),y(ct,Ft)};B(Z,ct=>{d(i)?ct(Y):ct(V,!1)})}var J=_(z,2),st=g(J),_t=_(g(st),2),gt=g(_t),kt=_(st,2),K=_(g(kt),2),R=g(K),tt=_(kt,2),dt=_(g(tt),2),Ht=g(dt),W=_(tt,2),q=_(g(W),2),rt=g(q),Rt=_(J,2),It=_(g(Rt),2);let U;var $t=g(It);_u($t,{size:12});var jt=_(It,2);let ae;var At=g(jt);Jv(At,{size:12});var Nt=_(Rt,2),fe=g(Nt);{let ct=H(()=>t.instance.status.running?"secondary":"primary");Vt(fe,{get variant(){return d(ct)},size:"sm",onclick:f,get disabled(){return d(n)},children:(Ft,Tt)=>{var yt=r_(),Qt=j(yt);vp(Qt,{size:14});var mt=_(Qt);L(()=>D(mt,` ${t.instance.status.running?"Arreter":"Demarrer"}`)),y(Ft,yt)},$$slots:{default:!0}})}var ce=_(fe,2);{var zt=ct=>{Vt(ct,{variant:"ghost",size:"sm",onclick:v,get disabled(){return d(n)},children:(Ft,Tt)=>{var yt=o_(),Qt=j(yt);Vo(Qt,{size:14}),y(Ft,yt)},$$slots:{default:!0}})};B(ce,ct=>{t.instance.status.running&&ct(zt)})}var bt=_(ce,4);Vt(bt,{variant:"ghost",size:"sm",onclick:m,children:(ct,Ft)=>{fp(ct,{size:14})},$$slots:{default:!0}});var St=_(bt,2);Vt(St,{variant:"ghost",size:"sm",onclick:p,children:(ct,Ft)=>{ii(ct,{size:14})},$$slots:{default:!0}}),L((ct,Ft,Tt,yt)=>{D(gt,ct),D(R,Ft),D(Ht,t.instance.status.requestsTotal??0),D(rt,t.instance.status.requestsActive??0),U=Jt(It,1,"setup-btn svelte-ytkoha",null,U,Tt),ae=Jt(jt,1,"setup-btn svelte-ytkoha",null,ae,yt)},[()=>d(u)(),()=>t.instance.status.running?h(t.instance.status.uptimeSecs):"--",()=>({active:t.instance.config.setupTargets.includes("claude-code")}),()=>({active:t.instance.config.setupTargets.includes("vscode")})]),it("click",It,S),it("click",jt,k),y(w,A)},$$slots:{default:!0}}),ke()}Oe(["click"]);var d_=P("<option> </option>"),u_=P('<div class="add-form svelte-1m3ss3c"><h3 class="add-title svelte-1m3ss3c">Nouveau proxy</h3> <div class="add-fields-top svelte-1m3ss3c"><div class="field field-grow svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-binary">Moteur</label> <select id="proxy-binary" class="field-input svelte-1m3ss3c"><option>Integre (V3)</option><!></select></div></div> <div class="add-fields svelte-1m3ss3c"><div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-name">Nom</label> <input id="proxy-name" class="field-input svelte-1m3ss3c" type="text" placeholder="Mon Proxy"/></div> <div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-port">Port</label> <input id="proxy-port" class="field-input port-input svelte-1m3ss3c" type="number" min="1024" max="65535"/></div> <div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-kind">Type</label> <select id="proxy-kind" class="field-input svelte-1m3ss3c"><option>Router</option><option>Anthrouter</option><option>Custom</option></select></div></div> <div class="add-actions svelte-1m3ss3c"><!> <!></div></div>'),h_=P('<button class="add-button svelte-1m3ss3c"><!> Ajouter un proxy</button>'),f_=P('<div class="proxy-control svelte-1m3ss3c"><div class="instances-grid svelte-1m3ss3c"></div> <!></div>');function v_(e,t){xe(t,!0);let s=N(ye([])),n=N(ye([])),i=N(!1),a=N(""),r=N(8082),o=N("router"),l=N("");Ve(()=>(gs.probe(),Kp().then(w=>{M(n,w,!0)}),gs.subscribe(w=>{M(s,w,!0)})));function c(){M(a,""),M(r,8082),M(o,"router"),M(l,""),M(i,!0)}function u(k){const w=k.target.value;if(M(l,w,!0),w){const $=d(n).find(A=>A.path===w);$&&(M(r,$.defaultPort,!0),d(a).trim()||M(a,$.name,!0),$.id.includes("router")?M(o,"router"):$.id.includes("impersonator")?M(o,"impersonator"):M(o,"custom"))}}async function h(){if(!d(a).trim())return;const w={id:d(a).toLowerCase().replace(/[^a-z0-9]/g,"-")+"-"+Date.now().toString(36),name:d(a).trim(),kind:d(o),port:d(r),autoStart:!1,enabled:!0,binaryPath:d(l)||void 0,setupTargets:[]};await gs.add(w),M(i,!1)}function f(){M(i,!1)}var v={get detectedBinaries(){return d(n)},set detectedBinaries(k){M(n,ye(k))}},p=f_(),m=g(p);ie(m,21,()=>d(s),k=>k.config.id,(k,w)=>{c_(k,{get instance(){return d(w)},get detectedBinaries(){return d(n)}})});var b=_(m,2);{var x=k=>{de(k,{children:(w,$)=>{var A=u_(),z=_(g(A),2),C=g(z),E=_(g(C),2),T=g(E);T.value=T.__value="";var O=_(T);ie(O,17,()=>d(n),Ie,(W,q)=>{var rt=d_(),Rt=g(rt),It={};L(()=>{D(Rt,d(q).name),It!==(It=d(q).path)&&(rt.value=(rt.__value=d(q).path)??"")}),y(W,rt)});var F;vr(E);var Z=_(z,2),Y=g(Z),V=_(g(Y),2),J=_(Y,2),st=_(g(J),2),_t=_(J,2),gt=_(g(_t),2),kt=g(gt);kt.value=kt.__value="router";var K=_(kt);K.value=K.__value="impersonator";var R=_(K);R.value=R.__value="custom";var tt=_(Z,2),dt=g(tt);Vt(dt,{variant:"primary",size:"sm",onclick:h,children:(W,q)=>{var rt=Ut("Ajouter");y(W,rt)},$$slots:{default:!0}});var Ht=_(dt,2);Vt(Ht,{variant:"ghost",size:"sm",onclick:f,children:(W,q)=>{var rt=Ut("Annuler");y(W,rt)},$$slots:{default:!0}}),L(()=>{F!==(F=d(l))&&(E.value=(E.__value=d(l))??"",pi(E,d(l)))}),it("change",E,u),Ee(V,()=>d(a),W=>M(a,W)),Ee(st,()=>d(r),W=>M(r,W)),gi(gt,()=>d(o),W=>M(o,W)),y(w,A)},$$slots:{default:!0}})},S=k=>{var w=h_(),$=g(w);Qi($,{size:16}),it("click",w,c),y(k,w)};B(b,k=>{d(i)?k(x):k(S,!1)})}return y(e,p),ke(v)}Oe(["change","click"]);var p_=P('<span class="radio-dot svelte-zskv5r"></span>'),g_=P('<div class="strategy-card svelte-zskv5r"><div class="strategy-header svelte-zskv5r"><span><!></span> <div class="strategy-right svelte-zskv5r"><span class="drag-handle svelte-zskv5r" aria-label="Glisser pour reordonner"><!></span> <div><!></div></div></div> <h4 class="strategy-name svelte-zskv5r"> </h4> <p class="strategy-desc svelte-zskv5r"> </p></div>'),m_=P('<div draggable="true" role="listitem"><!></div>'),__=P('<div class="strategy-grid svelte-zskv5r"></div>');function b_(e,t){xe(t,!0);let s=pe(t,"selected",15,"priority"),n=N(ye([{id:"priority",name:"Priorite",description:"Utilise le compte avec la priorite la plus haute. Bascule uniquement quand le compte actif atteint ses limites.",icon:kp},{id:"quota-aware",name:"Quota-Aware",description:"Choisit automatiquement le compte avec le plus de quota disponible. Equilibre la charge intelligemment.",icon:Yv},{id:"round-robin",name:"Round Robin",description:"Alterne entre les comptes de facon cyclique. Repartition equitable des requetes.",icon:ks},{id:"latency",name:"Latence",description:"Selectionne le compte avec la meilleure latence mesuree. Optimise la reactivite.",icon:Qa},{id:"usage-based",name:"Usage-Based",description:"Repartit selon l'utilisation cumulee. Equilibre le cout entre les comptes.",icon:wp}])),i=N(null),a=N(null);function r(f){s(f),t.onchange?.(f)}function o(f){M(i,f,!0)}function l(f,v){f.preventDefault(),M(a,v,!0)}function c(f){if(d(i)!==null&&d(i)!==f){const v=[...d(n)],[p]=v.splice(d(i),1);v.splice(f,0,p),M(n,v,!0),t.onreorder?.(v.map(m=>m.id))}M(i,null),M(a,null)}function u(){M(i,null),M(a,null)}var h=__();ie(h,21,()=>d(n),Ie,(f,v,p)=>{var m=m_();let b;var x=g(m);{let S=H(()=>s()===d(v).id);de(x,{get active(){return d(S)},onclick:()=>r(d(v).id),children:(k,w)=>{var $=g_(),A=g($),z=g(A);let C;var E=g(z);fr(E,()=>d(v).icon,(K,R)=>{R(K,{size:20})});var T=_(z,2),O=g(T),F=g(O);ap(F,{size:14});var Z=_(O,2);let Y;var V=g(Z);{var J=K=>{var R=p_();y(K,R)};B(V,K=>{s()===d(v).id&&K(J)})}var st=_(A,2),_t=g(st),gt=_(st,2),kt=g(gt);L(()=>{C=Jt(z,1,"strategy-icon svelte-zskv5r",null,C,{active:s()===d(v).id}),Y=Jt(Z,1,"strategy-radio svelte-zskv5r",null,Y,{selected:s()===d(v).id}),D(_t,d(v).name),D(kt,d(v).description)}),y(k,$)},$$slots:{default:!0}})}L(()=>b=Jt(m,1,"strategy-drag-wrapper svelte-zskv5r",null,b,{dragging:d(i)===p,"drag-over":d(a)===p&&d(i)!==p})),Es("dragstart",m,()=>o(p)),Es("dragover",m,S=>l(S,p)),Es("drop",m,()=>c(p)),Es("dragend",m,u),y(f,m)}),y(e,h),ke()}var y_=P("<!> Sauvegarder",1),x_=P('<th class="th-tier svelte-16ofv0g"> </th>'),k_=P('<td class="td-model svelte-16ofv0g"><input type="text" class="model-input svelte-16ofv0g"/></td>'),w_=P('<tr class="svelte-16ofv0g"><td class="td-provider svelte-16ofv0g"><span class="provider-dot svelte-16ofv0g"></span> <span class="provider-name svelte-16ofv0g"> </span></td><!></tr>'),$_=P('<div class="model-mapping svelte-16ofv0g"><div class="mapping-header svelte-16ofv0g"><h3 class="mapping-title svelte-16ofv0g">Mapping des modeles</h3> <!></div> <div class="mapping-table-wrapper svelte-16ofv0g"><table class="mapping-table svelte-16ofv0g"><thead><tr><th class="th-provider svelte-16ofv0g">Provider</th><!></tr></thead><tbody></tbody></table></div></div>');function S_(e,t){xe(t,!0);const s={anthropic:{opus:"claude-opus-4-20250514",sonnet:"claude-sonnet-4-20250514",haiku:"claude-haiku-4-20250514"},gemini:{opus:"gemini-2.5-pro",sonnet:"gemini-2.5-flash",haiku:"gemini-2.0-flash-lite"},openai:{opus:"o3",sonnet:"gpt-4.1",haiku:"gpt-4.1-mini"},xai:{opus:"grok-3",sonnet:"grok-3-mini",haiku:"grok-2"},deepseek:{opus:"deepseek-r1",sonnet:"deepseek-chat",haiku:"deepseek-chat"},mistral:{opus:"mistral-large-latest",sonnet:"mistral-medium-latest",haiku:"mistral-small-latest"},groq:{opus:"llama-3.3-70b-versatile",sonnet:"llama-3.1-8b-instant",haiku:"gemma2-9b-it"}};let n=pe(t,"mappings",3,s),i=N(ye(JSON.parse(JSON.stringify(s))));Un(()=>{M(i,JSON.parse(JSON.stringify(n())),!0)});const a=["anthropic","gemini","openai","xai","deepseek","mistral","groq"],r=["opus","sonnet","haiku"],o={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};function l(){t.onsave?.(d(i))}var c=$_(),u=g(c),h=_(g(u),2);Vt(h,{variant:"primary",size:"sm",onclick:l,children:(S,k)=>{var w=y_(),$=j(w);gp($,{size:14}),y(S,w)},$$slots:{default:!0}});var f=_(u,2),v=g(f),p=g(v),m=g(p),b=_(g(m));ie(b,17,()=>r,Ie,(S,k)=>{var w=x_(),$=g(w);L(A=>D($,A),[()=>d(k).charAt(0).toUpperCase()+d(k).slice(1)]),y(S,w)});var x=_(p);ie(x,21,()=>a,Ie,(S,k)=>{var w=w_(),$=g(w),A=g($),z=_(A,2),C=g(z),E=_($);ie(E,17,()=>r,Ie,(T,O)=>{var F=k_(),Z=g(F);Ee(Z,()=>d(i)[d(k)][d(O)],Y=>d(i)[d(k)][d(O)]=Y),y(T,F)}),L(()=>{Le(A,`background: ${o[d(k)]??""}`),D(C,d(k))}),y(S,w)}),y(e,c),ke()}var M_=P('<div class="profiles-state svelte-po0uu5">Chargement des profils...</div>'),P_=P('<div class="profiles-state error svelte-po0uu5"> </div>'),A_=P('<div class="profiles-state svelte-po0uu5"><!> <p>Aucun profil capture</p> <p class="hint svelte-po0uu5">Les profils sont crees automatiquement lors des premieres requetes Claude Code</p></div>'),C_=P('<span class="count-badge stream svelte-po0uu5">streaming</span>'),z_=P('<div class="header-item svelte-po0uu5"><span class="header-name svelte-po0uu5"> </span> <span class="header-value svelte-po0uu5"> </span></div>'),T_=P('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5">Headers statiques</div> <div class="header-list svelte-po0uu5"></div></div>'),E_=P('<div class="header-item svelte-po0uu5"><span class="header-name svelte-po0uu5"> </span> <span class="header-pattern svelte-po0uu5"> </span> <span class="header-value svelte-po0uu5"> </span></div>'),D_=P('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5">Headers dynamiques</div> <div class="header-list svelte-po0uu5"></div></div>'),O_=P('<span class="order-item svelte-po0uu5"> </span>'),R_=P('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5"> </div> <div class="order-list svelte-po0uu5"></div></div>'),L_=P('<div class="profile-details svelte-po0uu5"><!> <!> <!></div>'),I_=P('<div class="profile-card svelte-po0uu5"><div class="profile-header svelte-po0uu5"><div class="profile-title-row svelte-po0uu5"><!> <span class="profile-meta svelte-po0uu5"><!></span> <span class="profile-date svelte-po0uu5"> </span></div> <div class="profile-counts svelte-po0uu5"><span class="count-badge svelte-po0uu5"> </span> <span class="count-badge dyn svelte-po0uu5"> </span> <!></div> <button class="expand-btn svelte-po0uu5" aria-label="Expand"><!></button></div> <!></div>'),j_=P(`<div class="profiles-list svelte-po0uu5"><div class="profiles-header svelte-po0uu5"><div class="profiles-title svelte-po0uu5"><!> <span>Profils d'impersonation</span></div> <!></div> <!></div>`);function N_(e,t){xe(t,!0);const s={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};let n=N(ye([])),i=N(!0),a=N(""),r=N(ye({}));Ve(async()=>{await o()});async function o(){M(i,!0),M(a,"");try{M(n,await pg(),!0)}catch(A){M(a,String(A),!0)}finally{M(i,!1)}}function l(A){M(r,{...d(r),[A]:!d(r)[A]},!0)}function c(A){if(!A)return"jamais";try{return new Date(A).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return A}}function u(A){return Object.keys(A.static_headers??{}).length}function h(A){return Object.keys(A.dynamic_headers??{}).length}var f=j_(),v=g(f),p=g(v),m=g(p);ho(m,{size:16});var b=_(p,2);Vt(b,{variant:"ghost",size:"sm",onclick:o,children:(A,z)=>{ks(A,{size:14})},$$slots:{default:!0}});var x=_(v,2);{var S=A=>{var z=M_();y(A,z)},k=A=>{var z=P_(),C=g(z);L(()=>D(C,d(a))),y(A,z)},w=A=>{var z=A_(),C=g(z);ho(C,{size:32}),y(A,z)},$=A=>{var z=at(),C=j(z);ie(C,17,()=>d(n),Ie,(E,T)=>{de(E,{children:(O,F)=>{var Z=I_(),Y=g(Z),V=g(Y),J=g(V);{let At=H(()=>s[d(T).provider_name]??"var(--fg-dim)");Ke(J,{get color(){return d(At)},children:(Nt,fe)=>{var ce=Ut();L(()=>D(ce,d(T).provider_name)),y(Nt,ce)},$$slots:{default:!0}})}var st=_(J,2),_t=g(st);{var gt=At=>{var Nt=Ut();L(()=>D(Nt,`${d(T).request_count??""} requetes`)),y(At,Nt)};B(_t,At=>{d(T).request_count!=null&&At(gt)})}var kt=_(st,2),K=g(kt),R=_(V,2),tt=g(R),dt=g(tt),Ht=_(tt,2),W=g(Ht),q=_(Ht,2);{var rt=At=>{var Nt=C_();y(At,Nt)};B(q,At=>{d(T).always_streams&&At(rt)})}var Rt=_(R,2),It=g(Rt);{var U=At=>{Kv(At,{size:14})},$t=At=>{Xv(At,{size:14})};B(It,At=>{d(r)[d(T).provider_name]?At(U):At($t,!1)})}var jt=_(Y,2);{var ae=At=>{var Nt=L_(),fe=g(Nt);{var ce=yt=>{var Qt=T_(),mt=_(g(Qt),2);ie(mt,21,()=>Object.entries(d(T).static_headers??{}),Ie,(Mt,Bt)=>{var se=H(()=>Qr(d(Bt),2));let oe=()=>d(se)[0],Lt=()=>d(se)[1];var Et=z_(),te=g(Et),ge=g(te),Zt=_(te,2),Kt=g(Zt);L(()=>{D(ge,oe()),D(Kt,Lt())}),y(Mt,Et)}),y(yt,Qt)},zt=H(()=>u(d(T))>0);B(fe,yt=>{d(zt)&&yt(ce)})}var bt=_(fe,2);{var St=yt=>{var Qt=D_(),mt=_(g(Qt),2);ie(mt,21,()=>Object.entries(d(T).dynamic_headers??{}),Ie,(Mt,Bt)=>{var se=H(()=>Qr(d(Bt),2));let oe=()=>d(se)[0],Lt=()=>d(se)[1];var Et=E_(),te=g(Et),ge=g(te),Zt=_(te,2),Kt=g(Zt),X=_(Zt,2),Dt=g(X);L(()=>{D(ge,oe()),D(Kt,`[${Lt().pattern??""}]`),D(Dt,Lt().latest)}),y(Mt,Et)}),y(yt,Qt)},ct=H(()=>h(d(T))>0);B(bt,yt=>{d(ct)&&yt(St)})}var Ft=_(bt,2);{var Tt=yt=>{var Qt=R_(),mt=g(Qt),Mt=g(mt),Bt=_(mt,2);ie(Bt,21,()=>d(T).header_order,Ie,(se,oe)=>{var Lt=O_(),Et=g(Lt);L(()=>D(Et,d(oe))),y(se,Lt)}),L(()=>D(Mt,`Ordre (${d(T).header_order.length??""} headers)`)),y(yt,Qt)};B(Ft,yt=>{d(T).header_order&&d(T).header_order.length>0&&yt(Tt)})}y(At,Nt)};B(jt,At=>{d(r)[d(T).provider_name]&&At(ae)})}L((At,Nt,fe)=>{D(K,At),D(dt,`${Nt??""} static`),D(W,`${fe??""} dynamic`)},[()=>c(d(T).last_capture??d(T).captured_at),()=>u(d(T)),()=>h(d(T))]),it("click",Y,()=>l(d(T).provider_name)),it("keydown",Y,()=>{}),y(O,Z)},$$slots:{default:!0}})}),y(A,z)};B(x,A=>{d(i)?A(S):d(a)?A(k,1):d(n).length===0?A(w,2):A($,!1)})}y(e,f),ke()}Oe(["click","keydown"]);var F_=P('<span class="toggle-label svelte-eylgc7"> </span>'),B_=P('<button class="toggle-wrapper svelte-eylgc7" role="switch"><span><span></span></span> <!></button>');function bs(e,t){xe(t,!0);let s=pe(t,"checked",15,!1),n=pe(t,"disabled",3,!1);function i(){n()||(s(!s()),t.onchange?.(s()))}var a=B_(),r=g(a);let o;var l=g(r);let c;var u=_(r,2);{var h=f=>{var v=F_(),p=g(v);L(()=>D(p,t.label)),y(f,v)};B(u,f=>{t.label&&f(h)})}L(()=>{Ct(a,"aria-checked",s()),Ct(a,"aria-label",t.label),a.disabled=n(),o=Jt(r,1,"toggle-track svelte-eylgc7",null,o,{active:s()}),c=Jt(l,1,"toggle-thumb svelte-eylgc7",null,c,{active:s()})}),it("click",a,i),y(e,a),ke()}Oe(["click"]);var q_=P("<button> </button>"),V_=P('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Auto-switch</span> <span class="option-desc svelte-j1t1ye">Changer de compte quand le quota atteint 85% (5h) / 90% (7j)</span></div> <!></div>'),H_=P('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Rotation automatique</span> <span class="option-desc svelte-j1t1ye">Alterner entre comptes a intervalle fixe</span></div> <!></div>'),W_=P('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Intervalle rotation</span> <span class="option-desc svelte-j1t1ye">Minutes entre chaque changement</span></div> <input type="number" class="option-input svelte-j1t1ye" min="1" max="120"/></div>'),U_=P('<div class="strategy-options svelte-j1t1ye"><!> <!> <!></div>'),Y_=P('<div class="strategy-section svelte-j1t1ye"><!> <!></div>'),K_=P('<div class="proxy-screen svelte-j1t1ye"><header class="screen-header svelte-j1t1ye"><h1 class="screen-title svelte-j1t1ye">Proxy</h1></header> <div class="tab-bar svelte-j1t1ye"></div> <div class="tab-content svelte-j1t1ye"><!></div></div>');function X_(e,t){xe(t,!0);let s=N("control"),n=N("priority"),i=N(null);Ve(()=>(Me.load(),Me.subscribe(S=>{M(i,S,!0)})));async function a(x){if(!d(i)?.proxy)return;const S={...d(i).proxy};x?(S.autoSwitchThreshold5h=.85,S.autoSwitchThreshold7d=.9):(S.autoSwitchThreshold5h=0,S.autoSwitchThreshold7d=0),await Me.save({proxy:S})}async function r(x){d(i)?.proxy&&await Me.save({proxy:{...d(i).proxy,rotationEnabled:x}})}async function o(x){if(!d(i)?.proxy)return;const S=parseInt(x.target.value);S>=1&&S<=120&&await Me.save({proxy:{...d(i).proxy,rotationIntervalSecs:S*60}})}const l=[{id:"control",label:"Instances"},{id:"strategy",label:"Strategie"},{id:"models",label:"Modeles"},{id:"profiles",label:"Profils"}];var c=K_(),u=_(g(c),2);ie(u,21,()=>l,Ie,(x,S)=>{var k=q_();let w;var $=g(k);L(()=>{w=Jt(k,1,"tab-item svelte-j1t1ye",null,w,{active:d(s)===d(S).id}),D($,d(S).label)}),it("click",k,()=>M(s,d(S).id,!0)),y(x,k)});var h=_(u,2),f=g(h);{var v=x=>{v_(x,{})},p=x=>{var S=Y_(),k=g(S);b_(k,{get selected(){return d(n)},set selected(A){M(n,A,!0)}});var w=_(k,2);{var $=A=>{var z=U_(),C=g(z);de(C,{hoverable:!1,children:(F,Z)=>{var Y=V_(),V=_(g(Y),2);{let J=H(()=>(d(i)?.proxy?.autoSwitchThreshold5h??0)>0);bs(V,{get checked(){return d(J)},onchange:a})}y(F,Y)},$$slots:{default:!0}});var E=_(C,2);de(E,{hoverable:!1,children:(F,Z)=>{var Y=H_(),V=_(g(Y),2);{let J=H(()=>d(i)?.proxy?.rotationEnabled??!1);bs(V,{get checked(){return d(J)},onchange:r})}y(F,Y)},$$slots:{default:!0}});var T=_(E,2);{var O=F=>{de(F,{hoverable:!1,children:(Z,Y)=>{var V=W_(),J=_(g(V),2);L(st=>Ji(J,st),[()=>Math.round((d(i)?.proxy?.rotationIntervalSecs??3600)/60)]),it("change",J,o),y(Z,V)},$$slots:{default:!0}})};B(T,F=>{d(i)?.proxy?.rotationEnabled&&F(O)})}y(A,z)};B(w,A=>{d(i)&&A($)})}y(x,S)},m=x=>{S_(x,{})},b=x=>{N_(x,{})};B(f,x=>{d(s)==="control"?x(v):d(s)==="strategy"?x(p,1):d(s)==="models"?x(m,2):x(b,!1)})}y(e,c),ke()}Oe(["click","change"]);/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function fa(e){return e+.5|0}const vn=(e,t,s)=>Math.max(Math.min(e,s),t);function Ii(e){return vn(fa(e*2.55),0,255)}function xn(e){return vn(fa(e*255),0,255)}function Qs(e){return vn(fa(e/2.55)/100,0,1)}function Bl(e){return vn(fa(e*100),0,100)}const ws={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},vo=[..."0123456789ABCDEF"],G_=e=>vo[e&15],J_=e=>vo[(e&240)>>4]+vo[e&15],Sa=e=>(e&240)>>4===(e&15),Q_=e=>Sa(e.r)&&Sa(e.g)&&Sa(e.b)&&Sa(e.a);function Z_(e){var t=e.length,s;return e[0]==="#"&&(t===4||t===5?s={r:255&ws[e[1]]*17,g:255&ws[e[2]]*17,b:255&ws[e[3]]*17,a:t===5?ws[e[4]]*17:255}:(t===7||t===9)&&(s={r:ws[e[1]]<<4|ws[e[2]],g:ws[e[3]]<<4|ws[e[4]],b:ws[e[5]]<<4|ws[e[6]],a:t===9?ws[e[7]]<<4|ws[e[8]]:255})),s}const t1=(e,t)=>e<255?t(e):"";function e1(e){var t=Q_(e)?G_:J_;return e?"#"+t(e.r)+t(e.g)+t(e.b)+t1(e.a,t):void 0}const s1=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Mu(e,t,s){const n=t*Math.min(s,1-s),i=(a,r=(a+e/30)%12)=>s-n*Math.max(Math.min(r-3,9-r,1),-1);return[i(0),i(8),i(4)]}function n1(e,t,s){const n=(i,a=(i+e/60)%6)=>s-s*t*Math.max(Math.min(a,4-a,1),0);return[n(5),n(3),n(1)]}function i1(e,t,s){const n=Mu(e,1,.5);let i;for(t+s>1&&(i=1/(t+s),t*=i,s*=i),i=0;i<3;i++)n[i]*=1-t-s,n[i]+=t;return n}function a1(e,t,s,n,i){return e===i?(t-s)/n+(t<s?6:0):t===i?(s-e)/n+2:(e-t)/n+4}function Go(e){const s=e.r/255,n=e.g/255,i=e.b/255,a=Math.max(s,n,i),r=Math.min(s,n,i),o=(a+r)/2;let l,c,u;return a!==r&&(u=a-r,c=o>.5?u/(2-a-r):u/(a+r),l=a1(s,n,i,u,a),l=l*60+.5),[l|0,c||0,o]}function Jo(e,t,s,n){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,s,n)).map(xn)}function Qo(e,t,s){return Jo(Mu,e,t,s)}function r1(e,t,s){return Jo(i1,e,t,s)}function o1(e,t,s){return Jo(n1,e,t,s)}function Pu(e){return(e%360+360)%360}function l1(e){const t=s1.exec(e);let s=255,n;if(!t)return;t[5]!==n&&(s=t[6]?Ii(+t[5]):xn(+t[5]));const i=Pu(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?n=r1(i,a,r):t[1]==="hsv"?n=o1(i,a,r):n=Qo(i,a,r),{r:n[0],g:n[1],b:n[2],a:s}}function c1(e,t){var s=Go(e);s[0]=Pu(s[0]+t),s=Qo(s),e.r=s[0],e.g=s[1],e.b=s[2]}function d1(e){if(!e)return;const t=Go(e),s=t[0],n=Bl(t[1]),i=Bl(t[2]);return e.a<255?`hsla(${s}, ${n}%, ${i}%, ${Qs(e.a)})`:`hsl(${s}, ${n}%, ${i}%)`}const ql={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Vl={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function u1(){const e={},t=Object.keys(Vl),s=Object.keys(ql);let n,i,a,r,o;for(n=0;n<t.length;n++){for(r=o=t[n],i=0;i<s.length;i++)a=s[i],o=o.replace(a,ql[a]);a=parseInt(Vl[r],16),e[o]=[a>>16&255,a>>8&255,a&255]}return e}let Ma;function h1(e){Ma||(Ma=u1(),Ma.transparent=[0,0,0,0]);const t=Ma[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const f1=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function v1(e){const t=f1.exec(e);let s=255,n,i,a;if(t){if(t[7]!==n){const r=+t[7];s=t[8]?Ii(r):vn(r*255,0,255)}return n=+t[1],i=+t[3],a=+t[5],n=255&(t[2]?Ii(n):vn(n,0,255)),i=255&(t[4]?Ii(i):vn(i,0,255)),a=255&(t[6]?Ii(a):vn(a,0,255)),{r:n,g:i,b:a,a:s}}}function p1(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Qs(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Ir=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ei=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function g1(e,t,s){const n=ei(Qs(e.r)),i=ei(Qs(e.g)),a=ei(Qs(e.b));return{r:xn(Ir(n+s*(ei(Qs(t.r))-n))),g:xn(Ir(i+s*(ei(Qs(t.g))-i))),b:xn(Ir(a+s*(ei(Qs(t.b))-a))),a:e.a+s*(t.a-e.a)}}function Pa(e,t,s){if(e){let n=Go(e);n[t]=Math.max(0,Math.min(n[t]+n[t]*s,t===0?360:1)),n=Qo(n),e.r=n[0],e.g=n[1],e.b=n[2]}}function Au(e,t){return e&&Object.assign(t||{},e)}function Hl(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=xn(e[3]))):(t=Au(e,{r:0,g:0,b:0,a:1}),t.a=xn(t.a)),t}function m1(e){return e.charAt(0)==="r"?v1(e):l1(e)}class Zi{constructor(t){if(t instanceof Zi)return t;const s=typeof t;let n;s==="object"?n=Hl(t):s==="string"&&(n=Z_(t)||h1(t)||m1(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Au(this._rgb);return t&&(t.a=Qs(t.a)),t}set rgb(t){this._rgb=Hl(t)}rgbString(){return this._valid?p1(this._rgb):void 0}hexString(){return this._valid?e1(this._rgb):void 0}hslString(){return this._valid?d1(this._rgb):void 0}mix(t,s){if(t){const n=this.rgb,i=t.rgb;let a;const r=s===a?.5:s,o=2*r-1,l=n.a-i.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-c,n.r=255&c*n.r+a*i.r+.5,n.g=255&c*n.g+a*i.g+.5,n.b=255&c*n.b+a*i.b+.5,n.a=r*n.a+(1-r)*i.a,this.rgb=n}return this}interpolate(t,s){return t&&(this._rgb=g1(this._rgb,t._rgb,s)),this}clone(){return new Zi(this.rgb)}alpha(t){return this._rgb.a=xn(t),this}clearer(t){const s=this._rgb;return s.a*=1-t,this}greyscale(){const t=this._rgb,s=fa(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=s,this}opaquer(t){const s=this._rgb;return s.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Pa(this._rgb,2,t),this}darken(t){return Pa(this._rgb,2,-t),this}saturate(t){return Pa(this._rgb,1,t),this}desaturate(t){return Pa(this._rgb,1,-t),this}rotate(t){return c1(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Ks(){}const _1=(()=>{let e=0;return()=>e++})();function ne(e){return e==null}function Ce(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function re(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function je(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ms(e,t){return je(e)?e:t}function Yt(e,t){return typeof e>"u"?t:e}const b1=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,Cu=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function $e(e,t,s){if(e&&typeof e.call=="function")return e.apply(s,t)}function be(e,t,s,n){let i,a,r;if(Ce(e))for(a=e.length,i=0;i<a;i++)t.call(s,e[i],i);else if(re(e))for(r=Object.keys(e),a=r.length,i=0;i<a;i++)t.call(s,e[r[i]],r[i])}function tr(e,t){let s,n,i,a;if(!e||!t||e.length!==t.length)return!1;for(s=0,n=e.length;s<n;++s)if(i=e[s],a=t[s],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function er(e){if(Ce(e))return e.map(er);if(re(e)){const t=Object.create(null),s=Object.keys(e),n=s.length;let i=0;for(;i<n;++i)t[s[i]]=er(e[s[i]]);return t}return e}function zu(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function y1(e,t,s,n){if(!zu(e))return;const i=t[e],a=s[e];re(i)&&re(a)?ta(i,a,n):t[e]=er(a)}function ta(e,t,s){const n=Ce(t)?t:[t],i=n.length;if(!re(e))return e;s=s||{};const a=s.merger||y1;let r;for(let o=0;o<i;++o){if(r=n[o],!re(r))continue;const l=Object.keys(r);for(let c=0,u=l.length;c<u;++c)a(l[c],e,r,s)}return e}function Ui(e,t){return ta(e,t,{merger:x1})}function x1(e,t,s){if(!zu(e))return;const n=t[e],i=s[e];re(n)&&re(i)?Ui(n,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=er(i))}const Wl={"":e=>e,x:e=>e.x,y:e=>e.y};function k1(e){const t=e.split("."),s=[];let n="";for(const i of t)n+=i,n.endsWith("\\")?n=n.slice(0,-1)+".":(s.push(n),n="");return s}function w1(e){const t=k1(e);return s=>{for(const n of t){if(n==="")break;s=s&&s[n]}return s}}function Mn(e,t){return(Wl[t]||(Wl[t]=w1(t)))(e)}function Zo(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ea=e=>typeof e<"u",Pn=e=>typeof e=="function",Ul=(e,t)=>{if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;return!0};function $1(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const he=Math.PI,Pe=2*he,S1=Pe+he,sr=Number.POSITIVE_INFINITY,M1=he/180,Fe=he/2,Tn=he/4,Yl=he*2/3,pn=Math.log10,Hs=Math.sign;function Yi(e,t,s){return Math.abs(e-t)<s}function Kl(e){const t=Math.round(e);e=Yi(e,t,e/1e3)?t:e;const s=Math.pow(10,Math.floor(pn(e))),n=e/s;return(n<=1?1:n<=2?2:n<=5?5:10)*s}function P1(e){const t=[],s=Math.sqrt(e);let n;for(n=1;n<s;n++)e%n===0&&(t.push(n),t.push(e/n));return s===(s|0)&&t.push(s),t.sort((i,a)=>i-a).pop(),t}function A1(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function mi(e){return!A1(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function C1(e,t){const s=Math.round(e);return s-t<=e&&s+t>=e}function Tu(e,t,s){let n,i,a;for(n=0,i=e.length;n<i;n++)a=e[n][s],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function Ds(e){return e*(he/180)}function tl(e){return e*(180/he)}function Xl(e){if(!je(e))return;let t=1,s=0;for(;Math.round(e*t)/t!==e;)t*=10,s++;return s}function Eu(e,t){const s=t.x-e.x,n=t.y-e.y,i=Math.sqrt(s*s+n*n);let a=Math.atan2(n,s);return a<-.5*he&&(a+=Pe),{angle:a,distance:i}}function po(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function z1(e,t){return(e-t+S1)%Pe-he}function ss(e){return(e%Pe+Pe)%Pe}function sa(e,t,s,n){const i=ss(e),a=ss(t),r=ss(s),o=ss(a-i),l=ss(r-i),c=ss(i-a),u=ss(i-r);return i===a||i===r||n&&a===r||o>l&&c<u}function Xe(e,t,s){return Math.max(t,Math.min(s,e))}function T1(e){return Xe(e,-32768,32767)}function en(e,t,s,n=1e-6){return e>=Math.min(t,s)-n&&e<=Math.max(t,s)+n}function el(e,t,s){s=s||(r=>e[r]<t);let n=e.length-1,i=0,a;for(;n-i>1;)a=i+n>>1,s(a)?i=a:n=a;return{lo:i,hi:n}}const sn=(e,t,s,n)=>el(e,s,n?i=>{const a=e[i][t];return a<s||a===s&&e[i+1][t]===s}:i=>e[i][t]<s),E1=(e,t,s)=>el(e,s,n=>e[n][t]>=s);function D1(e,t,s){let n=0,i=e.length;for(;n<i&&e[n]<t;)n++;for(;i>n&&e[i-1]>s;)i--;return n>0||i<e.length?e.slice(n,i):e}const Du=["push","pop","shift","splice","unshift"];function O1(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Du.forEach(s=>{const n="_onData"+Zo(s),i=e[s];Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value(...a){const r=i.apply(this,a);return e._chartjs.listeners.forEach(o=>{typeof o[n]=="function"&&o[n](...a)}),r}})})}function Gl(e,t){const s=e._chartjs;if(!s)return;const n=s.listeners,i=n.indexOf(t);i!==-1&&n.splice(i,1),!(n.length>0)&&(Du.forEach(a=>{delete e[a]}),delete e._chartjs)}function Ou(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Ru=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function Lu(e,t){let s=[],n=!1;return function(...i){s=i,n||(n=!0,Ru.call(window,()=>{n=!1,e.apply(t,s)}))}}function R1(e,t){let s;return function(...n){return t?(clearTimeout(s),s=setTimeout(e,t,n)):e.apply(this,n),t}}const sl=e=>e==="start"?"left":e==="end"?"right":"center",es=(e,t,s)=>e==="start"?t:e==="end"?s:(t+s)/2,L1=(e,t,s,n)=>e===(n?"left":"right")?s:e==="center"?(t+s)/2:t;function Iu(e,t,s){const n=t.length;let i=0,a=n;if(e._sorted){const{iScale:r,vScale:o,_parsed:l}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=r.axis,{min:h,max:f,minDefined:v,maxDefined:p}=r.getUserBounds();if(v){if(i=Math.min(sn(l,u,h).lo,s?n:sn(t,u,r.getPixelForValue(h)).lo),c){const m=l.slice(0,i+1).reverse().findIndex(b=>!ne(b[o.axis]));i-=Math.max(0,m)}i=Xe(i,0,n-1)}if(p){let m=Math.max(sn(l,r.axis,f,!0).hi+1,s?0:sn(t,u,r.getPixelForValue(f),!0).hi+1);if(c){const b=l.slice(m-1).findIndex(x=>!ne(x[o.axis]));m+=Math.max(0,b)}a=Xe(m,i,n)-i}else a=n-i}return{start:i,count:a}}function ju(e){const{xScale:t,yScale:s,_scaleRanges:n}=e,i={xmin:t.min,xmax:t.max,ymin:s.min,ymax:s.max};if(!n)return e._scaleRanges=i,!0;const a=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==s.min||n.ymax!==s.max;return Object.assign(n,i),a}const Aa=e=>e===0||e===1,Jl=(e,t,s)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Pe/s)),Ql=(e,t,s)=>Math.pow(2,-10*e)*Math.sin((e-t)*Pe/s)+1,Ki={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Fe)+1,easeOutSine:e=>Math.sin(e*Fe),easeInOutSine:e=>-.5*(Math.cos(he*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Aa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Aa(e)?e:Jl(e,.075,.3),easeOutElastic:e=>Aa(e)?e:Ql(e,.075,.3),easeInOutElastic(e){return Aa(e)?e:e<.5?.5*Jl(e*2,.1125,.45):.5+.5*Ql(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ki.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Ki.easeInBounce(e*2)*.5:Ki.easeOutBounce(e*2-1)*.5+.5};function nl(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Zl(e){return nl(e)?e:new Zi(e)}function jr(e){return nl(e)?e:new Zi(e).saturate(.5).darken(.1).hexString()}const I1=["x","y","borderWidth","radius","tension"],j1=["color","borderColor","backgroundColor"];function N1(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:j1},numbers:{type:"number",properties:I1}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function F1(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const tc=new Map;function B1(e,t){t=t||{};const s=e+JSON.stringify(t);let n=tc.get(s);return n||(n=new Intl.NumberFormat(e,t),tc.set(s,n)),n}function va(e,t,s){return B1(t,s).format(e)}const Nu={values(e){return Ce(e)?e:""+e},numeric(e,t,s){if(e===0)return"0";const n=this.chart.options.locale;let i,a=e;if(s.length>1){const c=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),a=q1(e,s)}const r=pn(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:i,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),va(e,n,l)},logarithmic(e,t,s){if(e===0)return"0";const n=s[t].significand||e/Math.pow(10,Math.floor(pn(e)));return[1,2,3,5,10,15].includes(n)||t>.8*s.length?Nu.numeric.call(this,e,t,s):""}};function q1(e,t){let s=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(s)>=1&&e!==Math.floor(e)&&(s=e-Math.floor(e)),s}var _r={formatters:Nu};function V1(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,s)=>s.lineWidth,tickColor:(t,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:_r.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Yn=Object.create(null),go=Object.create(null);function Xi(e,t){if(!t)return e;const s=t.split(".");for(let n=0,i=s.length;n<i;++n){const a=s[n];e=e[a]||(e[a]=Object.create(null))}return e}function Nr(e,t,s){return typeof t=="string"?ta(Xi(e,t),s):ta(Xi(e,""),t)}class H1{constructor(t,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>jr(i.backgroundColor),this.hoverBorderColor=(n,i)=>jr(i.borderColor),this.hoverColor=(n,i)=>jr(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(s)}set(t,s){return Nr(this,t,s)}get(t){return Xi(this,t)}describe(t,s){return Nr(go,t,s)}override(t,s){return Nr(Yn,t,s)}route(t,s,n,i){const a=Xi(this,t),r=Xi(this,n),o="_"+s;Object.defineProperties(a,{[o]:{value:a[s],writable:!0},[s]:{enumerable:!0,get(){const l=this[o],c=r[i];return re(l)?Object.assign({},c,l):Yt(l,c)},set(l){this[o]=l}}})}apply(t){t.forEach(s=>s(this))}}var ze=new H1({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[N1,F1,V1]);function W1(e){return!e||ne(e.size)||ne(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function nr(e,t,s,n,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,s.push(i)),a>n&&(n=a),n}function U1(e,t,s,n){n=n||{};let i=n.data=n.data||{},a=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(i=n.data={},a=n.garbageCollect=[],n.font=t),e.save(),e.font=t;let r=0;const o=s.length;let l,c,u,h,f;for(l=0;l<o;l++)if(h=s[l],h!=null&&!Ce(h))r=nr(e,i,a,r,h);else if(Ce(h))for(c=0,u=h.length;c<u;c++)f=h[c],f!=null&&!Ce(f)&&(r=nr(e,i,a,r,f));e.restore();const v=a.length/2;if(v>s.length){for(l=0;l<v;l++)delete i[a[l]];a.splice(0,v)}return r}function En(e,t,s){const n=e.currentDevicePixelRatio,i=s!==0?Math.max(s/2,.5):0;return Math.round((t-i)*n)/n+i}function ec(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function mo(e,t,s,n){Fu(e,t,s,n,null)}function Fu(e,t,s,n,i){let a,r,o,l,c,u,h,f;const v=t.pointStyle,p=t.rotation,m=t.radius;let b=(p||0)*M1;if(v&&typeof v=="object"&&(a=v.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(s,n),e.rotate(b),e.drawImage(v,-v.width/2,-v.height/2,v.width,v.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),v){default:i?e.ellipse(s,n,i/2,m,0,0,Pe):e.arc(s,n,m,0,Pe),e.closePath();break;case"triangle":u=i?i/2:m,e.moveTo(s+Math.sin(b)*u,n-Math.cos(b)*m),b+=Yl,e.lineTo(s+Math.sin(b)*u,n-Math.cos(b)*m),b+=Yl,e.lineTo(s+Math.sin(b)*u,n-Math.cos(b)*m),e.closePath();break;case"rectRounded":c=m*.516,l=m-c,r=Math.cos(b+Tn)*l,h=Math.cos(b+Tn)*(i?i/2-c:l),o=Math.sin(b+Tn)*l,f=Math.sin(b+Tn)*(i?i/2-c:l),e.arc(s-h,n-o,c,b-he,b-Fe),e.arc(s+f,n-r,c,b-Fe,b),e.arc(s+h,n+o,c,b,b+Fe),e.arc(s-f,n+r,c,b+Fe,b+he),e.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*m,u=i?i/2:l,e.rect(s-u,n-l,2*u,2*l);break}b+=Tn;case"rectRot":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+f,n-r),e.lineTo(s+h,n+o),e.lineTo(s-f,n+r),e.closePath();break;case"crossRot":b+=Tn;case"cross":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r);break;case"star":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r),b+=Tn,h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r);break;case"line":r=i?i/2:Math.cos(b)*m,o=Math.sin(b)*m,e.moveTo(s-r,n-o),e.lineTo(s+r,n+o);break;case"dash":e.moveTo(s,n),e.lineTo(s+Math.cos(b)*(i?i/2:m),n+Math.sin(b)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function nn(e,t,s){return s=s||.5,!t||e&&e.x>t.left-s&&e.x<t.right+s&&e.y>t.top-s&&e.y<t.bottom+s}function br(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function yr(e){e.restore()}function Y1(e,t,s,n,i){if(!t)return e.lineTo(s.x,s.y);if(i==="middle"){const a=(t.x+s.x)/2;e.lineTo(a,t.y),e.lineTo(a,s.y)}else i==="after"!=!!n?e.lineTo(t.x,s.y):e.lineTo(s.x,t.y);e.lineTo(s.x,s.y)}function K1(e,t,s,n){if(!t)return e.lineTo(s.x,s.y);e.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?s.cp2x:s.cp1x,n?s.cp2y:s.cp1y,s.x,s.y)}function X1(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),ne(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function G1(e,t,s,n,i){if(i.strikethrough||i.underline){const a=e.measureText(n),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=s-a.actualBoundingBoxAscent,c=s+a.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(r,u),e.lineTo(o,u),e.stroke()}}function J1(e,t){const s=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=s}function Kn(e,t,s,n,i,a={}){const r=Ce(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,X1(e,a),l=0;l<r.length;++l)c=r[l],a.backdrop&&J1(e,a.backdrop),o&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),ne(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(c,s,n,a.maxWidth)),e.fillText(c,s,n,a.maxWidth),G1(e,s,n,c,a),n+=Number(i.lineHeight);e.restore()}function na(e,t){const{x:s,y:n,w:i,h:a,radius:r}=t;e.arc(s+r.topLeft,n+r.topLeft,r.topLeft,1.5*he,he,!0),e.lineTo(s,n+a-r.bottomLeft),e.arc(s+r.bottomLeft,n+a-r.bottomLeft,r.bottomLeft,he,Fe,!0),e.lineTo(s+i-r.bottomRight,n+a),e.arc(s+i-r.bottomRight,n+a-r.bottomRight,r.bottomRight,Fe,0,!0),e.lineTo(s+i,n+r.topRight),e.arc(s+i-r.topRight,n+r.topRight,r.topRight,0,-Fe,!0),e.lineTo(s+r.topLeft,n)}const Q1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Z1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function tb(e,t){const s=(""+e).match(Q1);if(!s||s[1]==="normal")return t*1.2;switch(e=+s[2],s[3]){case"px":return e;case"%":e/=100;break}return t*e}const eb=e=>+e||0;function il(e,t){const s={},n=re(t),i=n?Object.keys(t):t,a=re(e)?n?r=>Yt(e[r],e[t[r]]):r=>e[r]:()=>e;for(const r of i)s[r]=eb(a(r));return s}function Bu(e){return il(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Vn(e){return il(e,["topLeft","topRight","bottomLeft","bottomRight"])}function is(e){const t=Bu(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function qe(e,t){e=e||{},t=t||ze.font;let s=Yt(e.size,t.size);typeof s=="string"&&(s=parseInt(s,10));let n=Yt(e.style,t.style);n&&!(""+n).match(Z1)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const i={family:Yt(e.family,t.family),lineHeight:tb(Yt(e.lineHeight,t.lineHeight),s),size:s,style:n,weight:Yt(e.weight,t.weight),string:""};return i.string=W1(i),i}function ji(e,t,s,n){let i,a,r;for(i=0,a=e.length;i<a;++i)if(r=e[i],r!==void 0&&r!==void 0)return r}function sb(e,t,s){const{min:n,max:i}=e,a=Cu(t,(i-n)/2),r=(o,l)=>s&&o===0?0:o+l;return{min:r(n,-Math.abs(a)),max:r(i,a)}}function An(e,t){return Object.assign(Object.create(e),t)}function al(e,t=[""],s,n,i=()=>e[0]){const a=s||e;typeof n>"u"&&(n=Wu("_fallback",e));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:n,_getTarget:i,override:o=>al([o,...e],t,a,n)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete e[0][l],!0},get(o,l){return Vu(o,l,()=>db(l,t,e,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(o,l){return nc(o).includes(l)},ownKeys(o){return nc(o)},set(o,l,c){const u=o._storage||(o._storage=i());return o[l]=u[l]=c,delete o._keys,!0}})}function _i(e,t,s,n){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:s,_stack:new Set,_descriptors:qu(e,n),setContext:a=>_i(e,a,s,n),override:a=>_i(e.override(a),t,s,n)};return new Proxy(i,{deleteProperty(a,r){return delete a[r],delete e[r],!0},get(a,r,o){return Vu(a,r,()=>ib(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(e,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,r)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,r){return Reflect.has(e,r)},ownKeys(){return Reflect.ownKeys(e)},set(a,r,o){return e[r]=o,delete a[r],!0}})}function qu(e,t={scriptable:!0,indexable:!0}){const{_scriptable:s=t.scriptable,_indexable:n=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:s,indexable:n,isScriptable:Pn(s)?s:()=>s,isIndexable:Pn(n)?n:()=>n}}const nb=(e,t)=>e?e+Zo(t):t,rl=(e,t)=>re(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Vu(e,t,s){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const n=s();return e[t]=n,n}function ib(e,t,s){const{_proxy:n,_context:i,_subProxy:a,_descriptors:r}=e;let o=n[t];return Pn(o)&&r.isScriptable(t)&&(o=ab(t,o,e,s)),Ce(o)&&o.length&&(o=rb(t,o,e,r.isIndexable)),rl(t,o)&&(o=_i(o,i,a&&a[t],r)),o}function ab(e,t,s,n){const{_proxy:i,_context:a,_subProxy:r,_stack:o}=s;if(o.has(e))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+e);o.add(e);let l=t(a,r||n);return o.delete(e),rl(e,l)&&(l=ol(i._scopes,i,e,l)),l}function rb(e,t,s,n){const{_proxy:i,_context:a,_subProxy:r,_descriptors:o}=s;if(typeof a.index<"u"&&n(e))return t[a.index%t.length];if(re(t[0])){const l=t,c=i._scopes.filter(u=>u!==l);t=[];for(const u of l){const h=ol(c,i,e,u);t.push(_i(h,a,r&&r[e],o))}}return t}function Hu(e,t,s){return Pn(e)?e(t,s):e}const ob=(e,t)=>e===!0?t:typeof e=="string"?Mn(t,e):void 0;function lb(e,t,s,n,i){for(const a of t){const r=ob(s,a);if(r){e.add(r);const o=Hu(r._fallback,s,i);if(typeof o<"u"&&o!==s&&o!==n)return o}else if(r===!1&&typeof n<"u"&&s!==n)return null}return!1}function ol(e,t,s,n){const i=t._rootScopes,a=Hu(t._fallback,s,n),r=[...e,...i],o=new Set;o.add(n);let l=sc(o,r,s,a||s,n);return l===null||typeof a<"u"&&a!==s&&(l=sc(o,r,a,l,n),l===null)?!1:al(Array.from(o),[""],i,a,()=>cb(t,s,n))}function sc(e,t,s,n,i){for(;s;)s=lb(e,t,s,n,i);return s}function cb(e,t,s){const n=e._getTarget();t in n||(n[t]={});const i=n[t];return Ce(i)&&re(s)?s:i||{}}function db(e,t,s,n){let i;for(const a of t)if(i=Wu(nb(a,e),s),typeof i<"u")return rl(e,i)?ol(s,n,e,i):i}function Wu(e,t){for(const s of t){if(!s)continue;const n=s[e];if(typeof n<"u")return n}}function nc(e){let t=e._keys;return t||(t=e._keys=ub(e._scopes)),t}function ub(e){const t=new Set;for(const s of e)for(const n of Object.keys(s).filter(i=>!i.startsWith("_")))t.add(n);return Array.from(t)}function Uu(e,t,s,n){const{iScale:i}=e,{key:a="r"}=this._parsing,r=new Array(n);let o,l,c,u;for(o=0,l=n;o<l;++o)c=o+s,u=t[c],r[o]={r:i.parse(Mn(u,a),c)};return r}const hb=Number.EPSILON||1e-14,bi=(e,t)=>t<e.length&&!e[t].skip&&e[t],Yu=e=>e==="x"?"y":"x";function fb(e,t,s,n){const i=e.skip?t:e,a=t,r=s.skip?t:s,o=po(a,i),l=po(r,a);let c=o/(o+l),u=l/(o+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=n*c,f=n*u;return{previous:{x:a.x-h*(r.x-i.x),y:a.y-h*(r.y-i.y)},next:{x:a.x+f*(r.x-i.x),y:a.y+f*(r.y-i.y)}}}function vb(e,t,s){const n=e.length;let i,a,r,o,l,c=bi(e,0);for(let u=0;u<n-1;++u)if(l=c,c=bi(e,u+1),!(!l||!c)){if(Yi(t[u],0,hb)){s[u]=s[u+1]=0;continue}i=s[u]/t[u],a=s[u+1]/t[u],o=Math.pow(i,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),s[u]=i*r*t[u],s[u+1]=a*r*t[u])}}function pb(e,t,s="x"){const n=Yu(s),i=e.length;let a,r,o,l=bi(e,0);for(let c=0;c<i;++c){if(r=o,o=l,l=bi(e,c+1),!o)continue;const u=o[s],h=o[n];r&&(a=(u-r[s])/3,o[`cp1${s}`]=u-a,o[`cp1${n}`]=h-a*t[c]),l&&(a=(l[s]-u)/3,o[`cp2${s}`]=u+a,o[`cp2${n}`]=h+a*t[c])}}function gb(e,t="x"){const s=Yu(t),n=e.length,i=Array(n).fill(0),a=Array(n);let r,o,l,c=bi(e,0);for(r=0;r<n;++r)if(o=l,l=c,c=bi(e,r+1),!!l){if(c){const u=c[t]-l[t];i[r]=u!==0?(c[s]-l[s])/u:0}a[r]=o?c?Hs(i[r-1])!==Hs(i[r])?0:(i[r-1]+i[r])/2:i[r-1]:i[r]}vb(e,i,a),pb(e,a,t)}function Ca(e,t,s){return Math.max(Math.min(e,s),t)}function mb(e,t){let s,n,i,a,r,o=nn(e[0],t);for(s=0,n=e.length;s<n;++s)r=a,a=o,o=s<n-1&&nn(e[s+1],t),a&&(i=e[s],r&&(i.cp1x=Ca(i.cp1x,t.left,t.right),i.cp1y=Ca(i.cp1y,t.top,t.bottom)),o&&(i.cp2x=Ca(i.cp2x,t.left,t.right),i.cp2y=Ca(i.cp2y,t.top,t.bottom)))}function _b(e,t,s,n,i){let a,r,o,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")gb(e,i);else{let c=n?e[e.length-1]:e[0];for(a=0,r=e.length;a<r;++a)o=e[a],l=fb(c,o,e[Math.min(a+1,r-(n?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}t.capBezierPoints&&mb(e,s)}function ll(){return typeof window<"u"&&typeof document<"u"}function cl(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ir(e,t,s){let n;return typeof e=="string"?(n=parseInt(e,10),e.indexOf("%")!==-1&&(n=n/100*t.parentNode[s])):n=e,n}const xr=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function bb(e,t){return xr(e).getPropertyValue(t)}const yb=["top","right","bottom","left"];function Hn(e,t,s){const n={};s=s?"-"+s:"";for(let i=0;i<4;i++){const a=yb[i];n[a]=parseFloat(e[t+"-"+a+s])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const xb=(e,t,s)=>(e>0||t>0)&&(!s||!s.shadowRoot);function kb(e,t){const s=e.touches,n=s&&s.length?s[0]:e,{offsetX:i,offsetY:a}=n;let r=!1,o,l;if(xb(i,a,e.target))o=i,l=a;else{const c=t.getBoundingClientRect();o=n.clientX-c.left,l=n.clientY-c.top,r=!0}return{x:o,y:l,box:r}}function Ln(e,t){if("native"in e)return e;const{canvas:s,currentDevicePixelRatio:n}=t,i=xr(s),a=i.boxSizing==="border-box",r=Hn(i,"padding"),o=Hn(i,"border","width"),{x:l,y:c,box:u}=kb(e,s),h=r.left+(u&&o.left),f=r.top+(u&&o.top);let{width:v,height:p}=t;return a&&(v-=r.width+o.width,p-=r.height+o.height),{x:Math.round((l-h)/v*s.width/n),y:Math.round((c-f)/p*s.height/n)}}function wb(e,t,s){let n,i;if(t===void 0||s===void 0){const a=e&&cl(e);if(!a)t=e.clientWidth,s=e.clientHeight;else{const r=a.getBoundingClientRect(),o=xr(a),l=Hn(o,"border","width"),c=Hn(o,"padding");t=r.width-c.width-l.width,s=r.height-c.height-l.height,n=ir(o.maxWidth,a,"clientWidth"),i=ir(o.maxHeight,a,"clientHeight")}}return{width:t,height:s,maxWidth:n||sr,maxHeight:i||sr}}const gn=e=>Math.round(e*10)/10;function $b(e,t,s,n){const i=xr(e),a=Hn(i,"margin"),r=ir(i.maxWidth,e,"clientWidth")||sr,o=ir(i.maxHeight,e,"clientHeight")||sr,l=wb(e,t,s);let{width:c,height:u}=l;if(i.boxSizing==="content-box"){const f=Hn(i,"border","width"),v=Hn(i,"padding");c-=v.width+f.width,u-=v.height+f.height}return c=Math.max(0,c-a.width),u=Math.max(0,n?c/n:u-a.height),c=gn(Math.min(c,r,l.maxWidth)),u=gn(Math.min(u,o,l.maxHeight)),c&&!u&&(u=gn(c/2)),(t!==void 0||s!==void 0)&&n&&l.height&&u>l.height&&(u=l.height,c=gn(Math.floor(u*n))),{width:c,height:u}}function ic(e,t,s){const n=t||1,i=gn(e.height*n),a=gn(e.width*n);e.height=gn(e.height),e.width=gn(e.width);const r=e.canvas;return r.style&&(s||!r.style.height&&!r.style.width)&&(r.style.height=`${e.height}px`,r.style.width=`${e.width}px`),e.currentDevicePixelRatio!==n||r.height!==i||r.width!==a?(e.currentDevicePixelRatio=n,r.height=i,r.width=a,e.ctx.setTransform(n,0,0,n,0,0),!0):!1}const Sb=(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};ll()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e})();function ac(e,t){const s=bb(e,t),n=s&&s.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function In(e,t,s,n){return{x:e.x+s*(t.x-e.x),y:e.y+s*(t.y-e.y)}}function Mb(e,t,s,n){return{x:e.x+s*(t.x-e.x),y:n==="middle"?s<.5?e.y:t.y:n==="after"?s<1?e.y:t.y:s>0?t.y:e.y}}function Pb(e,t,s,n){const i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},r=In(e,i,s),o=In(i,a,s),l=In(a,t,s),c=In(r,o,s),u=In(o,l,s);return In(c,u,s)}const Ab=function(e,t){return{x(s){return e+e+t-s},setWidth(s){t=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,n){return s-n},leftForLtr(s,n){return s-n}}},Cb=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ai(e,t,s){return e?Ab(t,s):Cb()}function Ku(e,t){let s,n;(t==="ltr"||t==="rtl")&&(s=e.canvas.style,n=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",t,"important"),e.prevTextDirection=n)}function Xu(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Gu(e){return e==="angle"?{between:sa,compare:z1,normalize:ss}:{between:en,compare:(t,s)=>t-s,normalize:t=>t}}function rc({start:e,end:t,count:s,loop:n,style:i}){return{start:e%s,end:t%s,loop:n&&(t-e+1)%s===0,style:i}}function zb(e,t,s){const{property:n,start:i,end:a}=s,{between:r,normalize:o}=Gu(n),l=t.length;let{start:c,end:u,loop:h}=e,f,v;if(h){for(c+=l,u+=l,f=0,v=l;f<v&&r(o(t[c%l][n]),i,a);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:e.style}}function Ju(e,t,s){if(!s)return[e];const{property:n,start:i,end:a}=s,r=t.length,{compare:o,between:l,normalize:c}=Gu(n),{start:u,end:h,loop:f,style:v}=zb(e,t,s),p=[];let m=!1,b=null,x,S,k;const w=()=>l(i,k,x)&&o(i,k)!==0,$=()=>o(a,x)===0||l(a,k,x),A=()=>m||w(),z=()=>!m||$();for(let C=u,E=u;C<=h;++C)S=t[C%r],!S.skip&&(x=c(S[n]),x!==k&&(m=l(x,i,a),b===null&&A()&&(b=o(x,i)===0?C:E),b!==null&&z()&&(p.push(rc({start:b,end:C,loop:f,count:r,style:v})),b=null),E=C,k=x));return b!==null&&p.push(rc({start:b,end:h,loop:f,count:r,style:v})),p}function Qu(e,t){const s=[],n=e.segments;for(let i=0;i<n.length;i++){const a=Ju(n[i],e.points,t);a.length&&s.push(...a)}return s}function Tb(e,t,s,n){let i=0,a=t-1;if(s&&!n)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,s&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Eb(e,t,s,n){const i=e.length,a=[];let r=t,o=e[t],l;for(l=t+1;l<=s;++l){const c=e[l%i];c.skip||c.stop?o.skip||(n=!1,a.push({start:t%i,end:(l-1)%i,loop:n}),t=r=c.stop?l:null):(r=l,o.skip&&(t=l)),o=c}return r!==null&&a.push({start:t%i,end:r%i,loop:n}),a}function Db(e,t){const s=e.points,n=e.options.spanGaps,i=s.length;if(!i)return[];const a=!!e._loop,{start:r,end:o}=Tb(s,i,a,n);if(n===!0)return oc(e,[{start:r,end:o,loop:a}],s,t);const l=o<r?o+i:o,c=!!e._fullLoop&&r===0&&o===i-1;return oc(e,Eb(s,r,l,c),s,t)}function oc(e,t,s,n){return!n||!n.setContext||!s?t:Ob(e,t,s,n)}function Ob(e,t,s,n){const i=e._chart.getContext(),a=lc(e.options),{_datasetIndex:r,options:{spanGaps:o}}=e,l=s.length,c=[];let u=a,h=t[0].start,f=h;function v(p,m,b,x){const S=o?-1:1;if(p!==m){for(p+=l;s[p%l].skip;)p-=S;for(;s[m%l].skip;)m+=S;p%l!==m%l&&(c.push({start:p%l,end:m%l,loop:b,style:x}),u=x,h=m%l)}}for(const p of t){h=o?h:p.start;let m=s[h%l],b;for(f=h+1;f<=p.end;f++){const x=s[f%l];b=lc(n.setContext(An(i,{type:"segment",p0:m,p1:x,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:r}))),Rb(b,u)&&v(h,f-1,p.loop,u),m=x,u=b}h<f-1&&v(h,f-1,p.loop,u)}return c}function lc(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Rb(e,t){if(!t)return!1;const s=[],n=function(i,a){return nl(a)?(s.includes(a)||s.push(a),s.indexOf(a)):a};return JSON.stringify(e,n)!==JSON.stringify(t,n)}function za(e,t,s){return e.options.clip?e[s]:t[s]}function Lb(e,t){const{xScale:s,yScale:n}=e;return s&&n?{left:za(s,t,"left"),right:za(s,t,"right"),top:za(n,t,"top"),bottom:za(n,t,"bottom")}:t}function Zu(e,t){const s=t._clip;if(s.disabled)return!1;const n=Lb(t,e.chartArea);return{left:s.left===!1?0:n.left-(s.left===!0?0:s.left),right:s.right===!1?e.width:n.right+(s.right===!0?0:s.right),top:s.top===!1?0:n.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?e.height:n.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Ib{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,s,n,i){const a=s.listeners[i],r=s.duration;a.forEach(o=>o({chart:t,initial:s.initial,numSteps:r,currentStep:Math.min(n-s.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=Ru.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let s=0;this._charts.forEach((n,i)=>{if(!n.running||!n.items.length)return;const a=n.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(i.draw(),this._notify(i,n,t,"progress")),a.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),s+=a.length}),this._lastDate=t,s===0&&(this._running=!1)}_getAnims(t){const s=this._charts;let n=s.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(t,n)),n}listen(t,s,n){this._getAnims(t).listeners[s].push(n)}add(t,s){!s||!s.length||this._getAnims(t).items.push(...s)}has(t){return this._getAnims(t).items.length>0}start(t){const s=this._charts.get(t);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((n,i)=>Math.max(n,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const s=this._charts.get(t);return!(!s||!s.running||!s.items.length)}stop(t){const s=this._charts.get(t);if(!s||!s.items.length)return;const n=s.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();s.items=[],this._notify(t,s,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Xs=new Ib;const cc="transparent",jb={boolean(e,t,s){return s>.5?t:e},color(e,t,s){const n=Zl(e||cc),i=n.valid&&Zl(t||cc);return i&&i.valid?i.mix(n,s).hexString():t},number(e,t,s){return e+(t-e)*s}};class Nb{constructor(t,s,n,i){const a=s[n];i=ji([t.to,i,a,t.from]);const r=ji([t.from,a,i]);this._active=!0,this._fn=t.fn||jb[t.type||typeof r],this._easing=Ki[t.easing]||Ki.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=s,this._prop=n,this._from=r,this._to=i,this._promises=void 0}active(){return this._active}update(t,s,n){if(this._active){this._notify(!1);const i=this._target[this._prop],a=n-this._start,r=this._duration-a;this._start=n,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=ji([t.to,s,i,t.from]),this._from=ji([t.from,i,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const s=t-this._start,n=this._duration,i=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||s<n),!this._active){this._target[i]=o,this._notify(!0);return}if(s<0){this._target[i]=a;return}l=s/n%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((s,n)=>{t.push({res:s,rej:n})})}_notify(t){const s=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][s]()}}class th{constructor(t,s){this._chart=t,this._properties=new Map,this.configure(s)}configure(t){if(!re(t))return;const s=Object.keys(ze.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const a=t[i];if(!re(a))return;const r={};for(const o of s)r[o]=a[o];(Ce(a.properties)&&a.properties||[i]).forEach(o=>{(o===i||!n.has(o))&&n.set(o,r)})})}_animateOptions(t,s){const n=s.options,i=Bb(t,n);if(!i)return[];const a=this._createAnimations(i,n);return n.$shared&&Fb(t.options.$animations,n).then(()=>{t.options=n},()=>{}),a}_createAnimations(t,s){const n=this._properties,i=[],a=t.$animations||(t.$animations={}),r=Object.keys(s),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,s));continue}const u=s[c];let h=a[c];const f=n.get(c);if(h)if(f&&h.active()){h.update(f,u,o);continue}else h.cancel();if(!f||!f.duration){t[c]=u;continue}a[c]=h=new Nb(f,t,c,u),i.push(h)}return i}update(t,s){if(this._properties.size===0){Object.assign(t,s);return}const n=this._createAnimations(t,s);if(n.length)return Xs.add(this._chart,n),!0}}function Fb(e,t){const s=[],n=Object.keys(t);for(let i=0;i<n.length;i++){const a=e[n[i]];a&&a.active()&&s.push(a.wait())}return Promise.all(s)}function Bb(e,t){if(!t)return;let s=e.options;if(!s){e.options=t;return}return s.$shared&&(e.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function dc(e,t){const s=e&&e.options||{},n=s.reverse,i=s.min===void 0?t:0,a=s.max===void 0?t:0;return{start:n?a:i,end:n?i:a}}function qb(e,t,s){if(s===!1)return!1;const n=dc(e,s),i=dc(t,s);return{top:i.end,right:n.end,bottom:i.start,left:n.start}}function Vb(e){let t,s,n,i;return re(e)?(t=e.top,s=e.right,n=e.bottom,i=e.left):t=s=n=i=e,{top:t,right:s,bottom:n,left:i,disabled:e===!1}}function eh(e,t){const s=[],n=e._getSortedDatasetMetas(t);let i,a;for(i=0,a=n.length;i<a;++i)s.push(n[i].index);return s}function uc(e,t,s,n={}){const i=e.keys,a=n.mode==="single";let r,o,l,c;if(t===null)return;let u=!1;for(r=0,o=i.length;r<o;++r){if(l=+i[r],l===s){if(u=!0,n.all)continue;break}c=e.values[l],je(c)&&(a||t===0||Hs(t)===Hs(c))&&(t+=c)}return!u&&!n.all?0:t}function Hb(e,t){const{iScale:s,vScale:n}=t,i=s.axis==="x"?"x":"y",a=n.axis==="x"?"x":"y",r=Object.keys(e),o=new Array(r.length);let l,c,u;for(l=0,c=r.length;l<c;++l)u=r[l],o[l]={[i]:u,[a]:e[u]};return o}function Fr(e,t){const s=e&&e.options.stacked;return s||s===void 0&&t.stack!==void 0}function Wb(e,t,s){return`${e.id}.${t.id}.${s.stack||s.type}`}function Ub(e){const{min:t,max:s,minDefined:n,maxDefined:i}=e.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:i?s:Number.POSITIVE_INFINITY}}function Yb(e,t,s){const n=e[t]||(e[t]={});return n[s]||(n[s]={})}function hc(e,t,s,n){for(const i of t.getMatchingVisibleMetas(n).reverse()){const a=e[i.index];if(s&&a>0||!s&&a<0)return i.index}return null}function fc(e,t){const{chart:s,_cachedMeta:n}=e,i=s._stacks||(s._stacks={}),{iScale:a,vScale:r,index:o}=n,l=a.axis,c=r.axis,u=Wb(a,r,n),h=t.length;let f;for(let v=0;v<h;++v){const p=t[v],{[l]:m,[c]:b}=p,x=p._stacks||(p._stacks={});f=x[c]=Yb(i,u,m),f[o]=b,f._top=hc(f,r,!0,n.type),f._bottom=hc(f,r,!1,n.type);const S=f._visualValues||(f._visualValues={});S[o]=b}}function Br(e,t){const s=e.scales;return Object.keys(s).filter(n=>s[n].axis===t).shift()}function Kb(e,t){return An(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Xb(e,t,s){return An(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:s,index:t,mode:"default",type:"data"})}function zi(e,t){const s=e.controller.index,n=e.vScale&&e.vScale.axis;if(n){t=t||e._parsed;for(const i of t){const a=i._stacks;if(!a||a[n]===void 0||a[n][s]===void 0)return;delete a[n][s],a[n]._visualValues!==void 0&&a[n]._visualValues[s]!==void 0&&delete a[n]._visualValues[s]}}}const qr=e=>e==="reset"||e==="none",vc=(e,t)=>t?e:Object.assign({},e),Gb=(e,t,s)=>e&&!t.hidden&&t._stacked&&{keys:eh(s,!0),values:null};class Cn{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,s){this.chart=t,this._ctx=t.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Fr(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&zi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,s=this._cachedMeta,n=this.getDataset(),i=(h,f,v,p)=>h==="x"?f:h==="r"?p:v,a=s.xAxisID=Yt(n.xAxisID,Br(t,"x")),r=s.yAxisID=Yt(n.yAxisID,Br(t,"y")),o=s.rAxisID=Yt(n.rAxisID,Br(t,"r")),l=s.indexAxis,c=s.iAxisID=i(l,a,r,o),u=s.vAxisID=i(l,r,a,o);s.xScale=this.getScaleForId(a),s.yScale=this.getScaleForId(r),s.rScale=this.getScaleForId(o),s.iScale=this.getScaleForId(c),s.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const s=this._cachedMeta;return t===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Gl(this._data,this),t._stacked&&zi(t)}_dataCheck(){const t=this.getDataset(),s=t.data||(t.data=[]),n=this._data;if(re(s)){const i=this._cachedMeta;this._data=Hb(s,i)}else if(n!==s){if(n){Gl(n,this);const i=this._cachedMeta;zi(i),i._parsed=[]}s&&Object.isExtensible(s)&&O1(s,this),this._syncList=[],this._data=s}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const s=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const a=s._stacked;s._stacked=Fr(s.vScale,s),s.stack!==n.stack&&(i=!0,zi(s),s.stack=n.stack),this._resyncElements(t),(i||a!==s._stacked)&&(fc(this,s._parsed),s._stacked=Fr(s.vScale,s))}configure(){const t=this.chart.config,s=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),s,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,s){const{_cachedMeta:n,_data:i}=this,{iScale:a,_stacked:r}=n,o=a.axis;let l=t===0&&s===i.length?!0:n._sorted,c=t>0&&n._parsed[t-1],u,h,f;if(this._parsing===!1)n._parsed=i,n._sorted=!0,f=i;else{Ce(i[t])?f=this.parseArrayData(n,i,t,s):re(i[t])?f=this.parseObjectData(n,i,t,s):f=this.parsePrimitiveData(n,i,t,s);const v=()=>h[o]===null||c&&h[o]<c[o];for(u=0;u<s;++u)n._parsed[u+t]=h=f[u],l&&(v()&&(l=!1),c=h);n._sorted=l}r&&fc(this,f)}parsePrimitiveData(t,s,n,i){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,c=a.getLabels(),u=a===r,h=new Array(i);let f,v,p;for(f=0,v=i;f<v;++f)p=f+n,h[f]={[o]:u||a.parse(c[p],p),[l]:r.parse(s[p],p)};return h}parseArrayData(t,s,n,i){const{xScale:a,yScale:r}=t,o=new Array(i);let l,c,u,h;for(l=0,c=i;l<c;++l)u=l+n,h=s[u],o[l]={x:a.parse(h[0],u),y:r.parse(h[1],u)};return o}parseObjectData(t,s,n,i){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,h,f,v;for(u=0,h=i;u<h;++u)f=u+n,v=s[f],c[u]={x:a.parse(Mn(v,o),f),y:r.parse(Mn(v,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,s,n){const i=this.chart,a=this._cachedMeta,r=s[t.axis],o={keys:eh(i,!0),values:s._stacks[t.axis]._visualValues};return uc(o,r,a.index,{mode:n})}updateRangeFromParsed(t,s,n,i){const a=n[s.axis];let r=a===null?NaN:a;const o=i&&n._stacks[s.axis];i&&o&&(i.values=o,r=uc(i,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,s){const n=this._cachedMeta,i=n._parsed,a=n._sorted&&t===n.iScale,r=i.length,o=this._getOtherScale(t),l=Gb(s,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=Ub(o);let f,v;function p(){v=i[f];const m=v[o.axis];return!je(v[t.axis])||u>m||h<m}for(f=0;f<r&&!(!p()&&(this.updateRangeFromParsed(c,t,v,l),a));++f);if(a){for(f=r-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,t,v,l);break}}return c}getAllParsedValues(t){const s=this._cachedMeta._parsed,n=[];let i,a,r;for(i=0,a=s.length;i<a;++i)r=s[i][t.axis],je(r)&&n.push(r);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const s=this._cachedMeta,n=s.iScale,i=s.vScale,a=this.getParsed(t);return{label:n?""+n.getLabelForValue(a[n.axis]):"",value:i?""+i.getLabelForValue(a[i.axis]):""}}_update(t){const s=this._cachedMeta;this.update(t||"default"),s._clip=Vb(Yt(this.options.clip,qb(s.xScale,s.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,s=this.chart,n=this._cachedMeta,i=n.data||[],a=s.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||i.length-o,c=this.options.drawActiveElementsOnTop;let u;for(n.dataset&&n.dataset.draw(t,a,o,l),u=o;u<o+l;++u){const h=i[u];h.hidden||(h.active&&c?r.push(h):h.draw(t,a))}for(u=0;u<r.length;++u)r[u].draw(t,a)}getStyle(t,s){const n=s?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,s,n){const i=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=Xb(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=i.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Kb(this.chart.getContext(),this.index)),a.dataset=i,a.index=a.datasetIndex=this.index;return a.active=!!s,a.mode=n,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,s){return this._resolveElementOptions(this.dataElementType.id,s,t)}_resolveElementOptions(t,s="default",n){const i=s==="active",a=this._cachedDataOpts,r=t+"-"+s,o=a[r],l=this.enableOptionSharing&&ea(n);if(o)return vc(o,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),u),v=Object.keys(ze.elements[t]),p=()=>this.getContext(n,i,s),m=c.resolveNamedOptions(f,v,p,h);return m.$shared&&(m.$shared=l,a[r]=Object.freeze(vc(m,l))),m}_resolveAnimations(t,s,n){const i=this.chart,a=this._cachedDataOpts,r=`animation-${s}`,o=a[r];if(o)return o;let l;if(i.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,s),f=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(f,this.getContext(t,n,s))}const c=new th(i,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,s){return!s||qr(t)||this.chart._animationsDisabled}_getSharedOptions(t,s){const n=this.resolveDataElementOptions(t,s),i=this._sharedOptions,a=this.getSharedOptions(n),r=this.includeOptions(s,a)||a!==i;return this.updateSharedOptions(a,s,n),{sharedOptions:a,includeOptions:r}}updateElement(t,s,n,i){qr(i)?Object.assign(t,n):this._resolveAnimations(s,i).update(t,n)}updateSharedOptions(t,s,n){t&&!qr(s)&&this._resolveAnimations(void 0,s).update(t,n)}_setStyle(t,s,n,i){t.active=i;const a=this.getStyle(s,i);this._resolveAnimations(s,n,i).update(t,{options:!i&&this.getSharedOptions(a)||a})}removeHoverStyle(t,s,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,s,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const s=this._data,n=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const i=n.length,a=s.length,r=Math.min(a,i);r&&this.parse(0,r),a>i?this._insertElements(i,a-i,t):a<i&&this._removeElements(a,i-a)}_insertElements(t,s,n=!0){const i=this._cachedMeta,a=i.data,r=t+s;let o;const l=c=>{for(c.length+=s,o=c.length-1;o>=r;o--)c[o]=c[o-s]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,s),n&&this.updateElements(a,t,s,"reset")}updateElements(t,s,n,i){}_removeElements(t,s){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,s);n._stacked&&zi(n,i)}n.data.splice(t,s)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[s,n,i]=t;this[s](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,s){s&&this._sync(["_removeElements",t,s]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Jb(e,t){if(!e._cache.$bar){const s=e.getMatchingVisibleMetas(t);let n=[];for(let i=0,a=s.length;i<a;i++)n=n.concat(s[i].controller.getAllParsedValues(e));e._cache.$bar=Ou(n.sort((i,a)=>i-a))}return e._cache.$bar}function Qb(e){const t=e.iScale,s=Jb(t,e.type);let n=t._length,i,a,r,o;const l=()=>{r===32767||r===-32768||(ea(o)&&(n=Math.min(n,Math.abs(r-o)||n)),o=r)};for(i=0,a=s.length;i<a;++i)r=t.getPixelForValue(s[i]),l();for(o=void 0,i=0,a=t.ticks.length;i<a;++i)r=t.getPixelForTick(i),l();return n}function Zb(e,t,s,n){const i=s.barThickness;let a,r;return ne(i)?(a=t.min*s.categoryPercentage,r=s.barPercentage):(a=i*n,r=1),{chunk:a/n,ratio:r,start:t.pixels[e]-a/2}}function t0(e,t,s,n){const i=t.pixels,a=i[e];let r=e>0?i[e-1]:null,o=e<i.length-1?i[e+1]:null;const l=s.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const c=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/n,ratio:s.barPercentage,start:c}}function e0(e,t,s,n){const i=s.parse(e[0],n),a=s.parse(e[1],n),r=Math.min(i,a),o=Math.max(i,a);let l=r,c=o;Math.abs(r)>Math.abs(o)&&(l=o,c=r),t[s.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:a,min:r,max:o}}function sh(e,t,s,n){return Ce(e)?e0(e,t,s,n):t[s.axis]=s.parse(e,n),t}function pc(e,t,s,n){const i=e.iScale,a=e.vScale,r=i.getLabels(),o=i===a,l=[];let c,u,h,f;for(c=s,u=s+n;c<u;++c)f=t[c],h={},h[i.axis]=o||i.parse(r[c],c),l.push(sh(f,h,a,c));return l}function Vr(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function s0(e,t,s){return e!==0?Hs(e):(t.isHorizontal()?1:-1)*(t.min>=s?1:-1)}function n0(e){let t,s,n,i,a;return e.horizontal?(t=e.base>e.x,s="left",n="right"):(t=e.base<e.y,s="bottom",n="top"),t?(i="end",a="start"):(i="start",a="end"),{start:s,end:n,reverse:t,top:i,bottom:a}}function i0(e,t,s,n){let i=t.borderSkipped;const a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:c,bottom:u}=n0(e);i==="middle"&&s&&(e.enableBorderRadius=!0,(s._top||0)===n?i=c:(s._bottom||0)===n?i=u:(a[gc(u,r,o,l)]=!0,i=c)),a[gc(i,r,o,l)]=!0,e.borderSkipped=a}function gc(e,t,s,n){return n?(e=a0(e,t,s),e=mc(e,s,t)):e=mc(e,t,s),e}function a0(e,t,s){return e===t?s:e===s?t:e}function mc(e,t,s){return e==="start"?t:e==="end"?s:e}function r0(e,{inflateAmount:t},s){e.inflateAmount=t==="auto"?s===1?.33:0:t}class o0 extends Cn{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,s,n,i){return pc(t,s,n,i)}parseArrayData(t,s,n,i){return pc(t,s,n,i)}parseObjectData(t,s,n,i){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?o:l,u=r.axis==="x"?o:l,h=[];let f,v,p,m;for(f=n,v=n+i;f<v;++f)m=s[f],p={},p[a.axis]=a.parse(Mn(m,c),f),h.push(sh(Mn(m,u),p,r,f));return h}updateRangeFromParsed(t,s,n,i){super.updateRangeFromParsed(t,s,n,i);const a=n._custom;a&&s===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const s=this._cachedMeta,{iScale:n,vScale:i}=s,a=this.getParsed(t),r=a._custom,o=Vr(r)?"["+r.start+", "+r.end+"]":""+i.getLabelForValue(a[i.axis]);return{label:""+n.getLabelForValue(a[n.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,t)}updateElements(t,s,n,i){const a=i==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),c=o.isHorizontal(),u=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(s,i);for(let v=s;v<s+n;v++){const p=this.getParsed(v),m=a||ne(p[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(v),b=this._calculateBarIndexPixels(v,u),x=(p._stacks||{})[o.axis],S={horizontal:c,base:m.base,enableBorderRadius:!x||Vr(p._custom)||r===x._top||r===x._bottom,x:c?m.head:b.center,y:c?b.center:m.head,height:c?b.size:Math.abs(m.size),width:c?Math.abs(m.size):b.size};f&&(S.options=h||this.resolveDataElementOptions(v,t[v].active?"active":i));const k=S.options||t[v].options;i0(S,k,x,r),r0(S,k,u.ratio),this.updateElement(t[v],v,S,i)}}_getStacks(t,s){const{iScale:n}=this._cachedMeta,i=n.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),a=n.options.stacked,r=[],o=this._cachedMeta.controller.getParsed(s),l=o&&o[n.axis],c=u=>{const h=u._parsed.find(v=>v[n.axis]===l),f=h&&h[u.vScale.axis];if(ne(f)||isNaN(f))return!0};for(const u of i)if(!(s!==void 0&&c(u))&&((a===!1||r.indexOf(u.stack)===-1||a===void 0&&u.stack===void 0)&&r.push(u.stack),u.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(t).filter(n=>t[n].axis===s).shift()}_getAxis(){const t={},s=this.getFirstScaleIdForIndexAxis();for(const n of this.chart.data.datasets)t[Yt(this.chart.options.indexAxis==="x"?n.xAxisID:n.yAxisID,s)]=!0;return Object.keys(t)}_getStackIndex(t,s,n){const i=this._getStacks(t,n),a=s!==void 0?i.indexOf(s):-1;return a===-1?i.length-1:a}_getRuler(){const t=this.options,s=this._cachedMeta,n=s.iScale,i=[];let a,r;for(a=0,r=s.data.length;a<r;++a)i.push(n.getPixelForValue(this.getParsed(a)[n.axis],a));const o=t.barThickness;return{min:o||Qb(s),pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:s,_stacked:n,index:i},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),c=l._custom,u=Vr(c);let h=l[s.axis],f=0,v=n?this.applyStack(s,l,n):h,p,m;v!==h&&(f=v-h,v=h),u&&(h=c.barStart,v=c.barEnd-c.barStart,h!==0&&Hs(h)!==Hs(c.barEnd)&&(f=0),f+=h);const b=!ne(a)&&!u?a:f;let x=s.getPixelForValue(b);if(this.chart.getDataVisibility(t)?p=s.getPixelForValue(f+v):p=x,m=p-x,Math.abs(m)<r){m=s0(m,s,o)*r,h===o&&(x-=m/2);const S=s.getPixelForDecimal(0),k=s.getPixelForDecimal(1),w=Math.min(S,k),$=Math.max(S,k);x=Math.max(Math.min(x,$),w),p=x+m,n&&!u&&(l._stacks[s.axis]._visualValues[i]=s.getValueForPixel(p)-s.getValueForPixel(x))}if(x===s.getPixelForValue(o)){const S=Hs(m)*s.getLineWidthForValue(o)/2;x+=S,m-=S}return{size:m,base:x,head:p,center:p+m/2}}_calculateBarIndexPixels(t,s){const n=s.scale,i=this.options,a=i.skipNull,r=Yt(i.maxBarThickness,1/0);let o,l;const c=this._getAxisCount();if(s.grouped){const u=a?this._getStackCount(t):s.stackCount,h=i.barThickness==="flex"?t0(t,s,i,u*c):Zb(t,s,i,u*c),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,v=this._getAxis().indexOf(Yt(f,this.getFirstScaleIdForIndexAxis())),p=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+v;o=h.start+h.chunk*p+h.chunk/2,l=Math.min(r,h.chunk*h.ratio)}else o=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(r,s.min*s.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,s=t.vScale,n=t.data,i=n.length;let a=0;for(;a<i;++a)this.getParsed(a)[s.axis]!==null&&!n[a].hidden&&n[a].draw(this._ctx)}}class l0 extends Cn{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,s,n,i){const a=super.parsePrimitiveData(t,s,n,i);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+n).radius;return a}parseArrayData(t,s,n,i){const a=super.parseArrayData(t,s,n,i);for(let r=0;r<a.length;r++){const o=s[n+r];a[r]._custom=Yt(o[2],this.resolveDataElementOptions(r+n).radius)}return a}parseObjectData(t,s,n,i){const a=super.parseObjectData(t,s,n,i);for(let r=0;r<a.length;r++){const o=s[n+r];a[r]._custom=Yt(o&&o.r&&+o.r,this.resolveDataElementOptions(r+n).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let s=0;for(let n=t.length-1;n>=0;--n)s=Math.max(s,t[n].size(this.resolveDataElementOptions(n))/2);return s>0&&s}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=s,r=this.getParsed(t),o=i.getLabelForValue(r.x),l=a.getLabelForValue(r.y),c=r._custom;return{label:n[t]||"",value:"("+o+", "+l+(c?", "+c:"")+")"}}update(t){const s=this._cachedMeta.data;this.updateElements(s,0,s.length,t)}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(s,i),u=r.axis,h=o.axis;for(let f=s;f<s+n;f++){const v=t[f],p=!a&&this.getParsed(f),m={},b=m[u]=a?r.getPixelForDecimal(.5):r.getPixelForValue(p[u]),x=m[h]=a?o.getBasePixel():o.getPixelForValue(p[h]);m.skip=isNaN(b)||isNaN(x),c&&(m.options=l||this.resolveDataElementOptions(f,v.active?"active":i),a&&(m.options.radius=0)),this.updateElement(v,f,m,i)}}resolveDataElementOptions(t,s){const n=this.getParsed(t);let i=super.resolveDataElementOptions(t,s);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const a=i.radius;return s!=="active"&&(i.radius=0),i.radius+=Yt(n&&n._custom,a),i}}function c0(e,t,s){let n=1,i=1,a=0,r=0;if(t<Pe){const o=e,l=o+t,c=Math.cos(o),u=Math.sin(o),h=Math.cos(l),f=Math.sin(l),v=(k,w,$)=>sa(k,o,l,!0)?1:Math.max(w,w*s,$,$*s),p=(k,w,$)=>sa(k,o,l,!0)?-1:Math.min(w,w*s,$,$*s),m=v(0,c,h),b=v(Fe,u,f),x=p(he,c,h),S=p(he+Fe,u,f);n=(m-x)/2,i=(b-S)/2,a=-(m+x)/2,r=-(b+S)/2}return{ratioX:n,ratioY:i,offsetX:a,offsetY:r}}class dl extends Cn{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data,{labels:{pointStyle:n,textAlign:i,color:a,useBorderRadius:r,borderRadius:o}}=t.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((l,c)=>{const h=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:h.backgroundColor,fontColor:a,hidden:!t.getDataVisibility(c),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:n,borderRadius:r&&(o||h.borderRadius),index:c}}):[]}},onClick(t,s,n){n.chart.toggleDataVisibility(s.index),n.chart.update()}}}};constructor(t,s){super(t,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,s){const n=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=n;else{let a=l=>+n[l];if(re(n[t])){const{key:l="value"}=this._parsing;a=c=>+Mn(n[c],l)}let r,o;for(r=t,o=t+s;r<o;++r)i._parsed[r]=a(r)}}_getRotation(){return Ds(this.options.rotation-90)}_getCircumference(){return Ds(this.options.circumference)}_getRotationExtents(){let t=Pe,s=-Pe;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const i=this.chart.getDatasetMeta(n).controller,a=i._getRotation(),r=i._getCircumference();t=Math.min(t,a),s=Math.max(s,a+r)}return{rotation:t,circumference:s-t}}update(t){const s=this.chart,{chartArea:n}=s,i=this._cachedMeta,a=i.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(n.width,n.height)-r)/2,0),l=Math.min(b1(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:u,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:v,offsetX:p,offsetY:m}=c0(h,u,l),b=(n.width-r)/f,x=(n.height-r)/v,S=Math.max(Math.min(b,x)/2,0),k=Cu(this.options.radius,S),w=Math.max(k*l,0),$=(k-w)/this._getVisibleDatasetWeightTotal();this.offsetX=p*k,this.offsetY=m*k,i.total=this.calculateTotal(),this.outerRadius=k-$*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-$*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,s){const n=this.options,i=this._cachedMeta,a=this._getCircumference();return s&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*a/Pe)}updateElements(t,s,n,i){const a=i==="reset",r=this.chart,o=r.chartArea,c=r.options.animation,u=(o.left+o.right)/2,h=(o.top+o.bottom)/2,f=a&&c.animateScale,v=f?0:this.innerRadius,p=f?0:this.outerRadius,{sharedOptions:m,includeOptions:b}=this._getSharedOptions(s,i);let x=this._getRotation(),S;for(S=0;S<s;++S)x+=this._circumference(S,a);for(S=s;S<s+n;++S){const k=this._circumference(S,a),w=t[S],$={x:u+this.offsetX,y:h+this.offsetY,startAngle:x,endAngle:x+k,circumference:k,outerRadius:p,innerRadius:v};b&&($.options=m||this.resolveDataElementOptions(S,w.active?"active":i)),x+=k,this.updateElement(w,S,$,i)}}calculateTotal(){const t=this._cachedMeta,s=t.data;let n=0,i;for(i=0;i<s.length;i++){const a=t._parsed[i];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(i)&&!s[i].hidden&&(n+=Math.abs(a))}return n}calculateCircumference(t){const s=this._cachedMeta.total;return s>0&&!isNaN(t)?Pe*(Math.abs(t)/s):0}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=va(s._parsed[t],n.options.locale);return{label:i[t]||"",value:a}}getMaxBorderWidth(t){let s=0;const n=this.chart;let i,a,r,o,l;if(!t){for(i=0,a=n.data.datasets.length;i<a;++i)if(n.isDatasetVisible(i)){r=n.getDatasetMeta(i),t=r.data,o=r.controller;break}}if(!t)return 0;for(i=0,a=t.length;i<a;++i)l=o.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(s=Math.max(s,l.borderWidth||0,l.hoverBorderWidth||0));return s}getMaxOffset(t){let s=0;for(let n=0,i=t.length;n<i;++n){const a=this.resolveDataElementOptions(n);s=Math.max(s,a.offset||0,a.hoverOffset||0)}return s}_getRingWeightOffset(t){let s=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(s+=this._getRingWeight(n));return s}_getRingWeight(t){return Math.max(Yt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class d0 extends Cn{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const s=this._cachedMeta,{dataset:n,data:i=[],_dataset:a}=s,r=this.chart._animationsDisabled;let{start:o,count:l}=Iu(s,i,r);this._drawStart=o,this._drawCount=l,ju(s)&&(o=0,l=i.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!a._decimated,n.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!r,options:c},t),this.updateElements(i,o,l,t)}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(s,i),f=r.axis,v=o.axis,{spanGaps:p,segment:m}=this.options,b=mi(p)?p:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||a||i==="none",S=s+n,k=t.length;let w=s>0&&this.getParsed(s-1);for(let $=0;$<k;++$){const A=t[$],z=x?A:{};if($<s||$>=S){z.skip=!0;continue}const C=this.getParsed($),E=ne(C[v]),T=z[f]=r.getPixelForValue(C[f],$),O=z[v]=a||E?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,C,l):C[v],$);z.skip=isNaN(T)||isNaN(O)||E,z.stop=$>0&&Math.abs(C[f]-w[f])>b,m&&(z.parsed=C,z.raw=c.data[$]),h&&(z.options=u||this.resolveDataElementOptions($,A.active?"active":i)),x||this.updateElement(A,$,z,i),w=C}}getMaxOverflow(){const t=this._cachedMeta,s=t.dataset,n=s.options&&s.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const a=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class nh extends Cn{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data;if(s.labels.length&&s.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return s.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,s,n){n.chart.toggleDataVisibility(s.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,s){super(t,s),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=va(s._parsed[t].r,n.options.locale);return{label:i[t]||"",value:a}}parseObjectData(t,s,n,i){return Uu.bind(this)(t,s,n,i)}update(t){const s=this._cachedMeta.data;this._updateRadius(),this.updateElements(s,0,s.length,t)}getMinMax(){const t=this._cachedMeta,s={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,i)=>{const a=this.getParsed(i).r;!isNaN(a)&&this.chart.getDataVisibility(i)&&(a<s.min&&(s.min=a),a>s.max&&(s.max=a))}),s}_updateRadius(){const t=this.chart,s=t.chartArea,n=t.options,i=Math.min(s.right-s.left,s.bottom-s.top),a=Math.max(i/2,0),r=Math.max(n.cutoutPercentage?a/100*n.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,s,n,i){const a=i==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,h=c.yCenter,f=c.getIndexAngle(0)-.5*he;let v=f,p;const m=360/this.countVisibleElements();for(p=0;p<s;++p)v+=this._computeAngle(p,i,m);for(p=s;p<s+n;p++){const b=t[p];let x=v,S=v+this._computeAngle(p,i,m),k=r.getDataVisibility(p)?c.getDistanceFromCenterForValue(this.getParsed(p).r):0;v=S,a&&(l.animateScale&&(k=0),l.animateRotate&&(x=S=f));const w={x:u,y:h,innerRadius:0,outerRadius:k,startAngle:x,endAngle:S,options:this.resolveDataElementOptions(p,b.active?"active":i)};this.updateElement(b,p,w,i)}}countVisibleElements(){const t=this._cachedMeta;let s=0;return t.data.forEach((n,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&s++}),s}_computeAngle(t,s,n){return this.chart.getDataVisibility(t)?Ds(this.resolveDataElementOptions(t,s).angle||n):0}}class u0 extends dl{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class h0 extends Cn{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const s=this._cachedMeta.vScale,n=this.getParsed(t);return{label:s.getLabels()[t],value:""+s.getLabelForValue(n[s.axis])}}parseObjectData(t,s,n,i){return Uu.bind(this)(t,s,n,i)}update(t){const s=this._cachedMeta,n=s.dataset,i=s.data||[],a=s.iScale.getLabels();if(n.points=i,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===i.length,options:r};this.updateElement(n,void 0,o,t)}this.updateElements(i,0,i.length,t)}updateElements(t,s,n,i){const a=this._cachedMeta.rScale,r=i==="reset";for(let o=s;o<s+n;o++){const l=t[o],c=this.resolveDataElementOptions(o,l.active?"active":i),u=a.getPointPositionForValue(o,this.getParsed(o).r),h=r?a.xCenter:u.x,f=r?a.yCenter:u.y,v={x:h,y:f,angle:u.angle,skip:isNaN(h)||isNaN(f),options:c};this.updateElement(l,o,v,i)}}}class f0 extends Cn{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const s=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=s,r=this.getParsed(t),o=i.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:n[t]||"",value:"("+o+", "+l+")"}}update(t){const s=this._cachedMeta,{data:n=[]}=s,i=this.chart._animationsDisabled;let{start:a,count:r}=Iu(s,n,i);if(this._drawStart=a,this._drawCount=r,ju(s)&&(a=0,r=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=s;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=n;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(o,void 0,{animated:!i,options:c},t)}else this.datasetElementType&&(delete s.dataset,this.datasetElementType=!1);this.updateElements(n,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(s,i),h=this.getSharedOptions(u),f=this.includeOptions(i,h),v=r.axis,p=o.axis,{spanGaps:m,segment:b}=this.options,x=mi(m)?m:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||a||i==="none";let k=s>0&&this.getParsed(s-1);for(let w=s;w<s+n;++w){const $=t[w],A=this.getParsed(w),z=S?$:{},C=ne(A[p]),E=z[v]=r.getPixelForValue(A[v],w),T=z[p]=a||C?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,A,l):A[p],w);z.skip=isNaN(E)||isNaN(T)||C,z.stop=w>0&&Math.abs(A[v]-k[v])>x,b&&(z.parsed=A,z.raw=c.data[w]),f&&(z.options=h||this.resolveDataElementOptions(w,$.active?"active":i)),S||this.updateElement($,w,z,i),k=A}this.updateSharedOptions(h,i,u)}getMaxOverflow(){const t=this._cachedMeta,s=t.data||[];if(!this.options.showLine){let o=0;for(let l=s.length-1;l>=0;--l)o=Math.max(o,s[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const n=t.dataset,i=n.options&&n.options.borderWidth||0;if(!s.length)return i;const a=s[0].size(this.resolveDataElementOptions(0)),r=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,a,r)/2}}var v0=Object.freeze({__proto__:null,BarController:o0,BubbleController:l0,DoughnutController:dl,LineController:d0,PieController:u0,PolarAreaController:nh,RadarController:h0,ScatterController:f0});function Dn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class ul{static override(t){Object.assign(ul.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return Dn()}parse(){return Dn()}format(){return Dn()}add(){return Dn()}diff(){return Dn()}startOf(){return Dn()}endOf(){return Dn()}}var p0={_date:ul};function g0(e,t,s,n){const{controller:i,data:a,_sorted:r}=e,o=i._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const c=o._reversePixels?E1:sn;if(n){if(i._sharedOptions){const u=a[0],h=typeof u.getRange=="function"&&u.getRange(t);if(h){const f=c(a,t,s-h),v=c(a,t,s+h);return{lo:f.lo,hi:v.hi}}}}else{const u=c(a,t,s);if(l){const{vScale:h}=i._cachedMeta,{_parsed:f}=e,v=f.slice(0,u.lo+1).reverse().findIndex(m=>!ne(m[h.axis]));u.lo-=Math.max(0,v);const p=f.slice(u.hi).findIndex(m=>!ne(m[h.axis]));u.hi+=Math.max(0,p)}return u}}return{lo:0,hi:a.length-1}}function kr(e,t,s,n,i){const a=e.getSortedVisibleDatasetMetas(),r=s[t];for(let o=0,l=a.length;o<l;++o){const{index:c,data:u}=a[o],{lo:h,hi:f}=g0(a[o],t,r,i);for(let v=h;v<=f;++v){const p=u[v];p.skip||n(p,c,v)}}}function m0(e){const t=e.indexOf("x")!==-1,s=e.indexOf("y")!==-1;return function(n,i){const a=t?Math.abs(n.x-i.x):0,r=s?Math.abs(n.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Hr(e,t,s,n,i){const a=[];return!i&&!e.isPointInArea(t)||kr(e,s,t,function(o,l,c){!i&&!nn(o,e.chartArea,0)||o.inRange(t.x,t.y,n)&&a.push({element:o,datasetIndex:l,index:c})},!0),a}function _0(e,t,s,n){let i=[];function a(r,o,l){const{startAngle:c,endAngle:u}=r.getProps(["startAngle","endAngle"],n),{angle:h}=Eu(r,{x:t.x,y:t.y});sa(h,c,u)&&i.push({element:r,datasetIndex:o,index:l})}return kr(e,s,t,a),i}function b0(e,t,s,n,i,a){let r=[];const o=m0(s);let l=Number.POSITIVE_INFINITY;function c(u,h,f){const v=u.inRange(t.x,t.y,i);if(n&&!v)return;const p=u.getCenterPoint(i);if(!(!!a||e.isPointInArea(p))&&!v)return;const b=o(t,p);b<l?(r=[{element:u,datasetIndex:h,index:f}],l=b):b===l&&r.push({element:u,datasetIndex:h,index:f})}return kr(e,s,t,c),r}function Wr(e,t,s,n,i,a){return!a&&!e.isPointInArea(t)?[]:s==="r"&&!n?_0(e,t,s,i):b0(e,t,s,n,i,a)}function _c(e,t,s,n,i){const a=[],r=s==="x"?"inXRange":"inYRange";let o=!1;return kr(e,s,t,(l,c,u)=>{l[r]&&l[r](t[s],i)&&(a.push({element:l,datasetIndex:c,index:u}),o=o||l.inRange(t.x,t.y,i))}),n&&!o?[]:a}var y0={modes:{index(e,t,s,n){const i=Ln(t,e),a=s.axis||"x",r=s.includeInvisible||!1,o=s.intersect?Hr(e,i,a,n,r):Wr(e,i,a,!1,n,r),l=[];return o.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=o[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,s,n){const i=Ln(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;let o=s.intersect?Hr(e,i,a,n,r):Wr(e,i,a,!1,n,r);if(o.length>0){const l=o[0].datasetIndex,c=e.getDatasetMeta(l).data;o=[];for(let u=0;u<c.length;++u)o.push({element:c[u],datasetIndex:l,index:u})}return o},point(e,t,s,n){const i=Ln(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;return Hr(e,i,a,n,r)},nearest(e,t,s,n){const i=Ln(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;return Wr(e,i,a,s.intersect,n,r)},x(e,t,s,n){const i=Ln(t,e);return _c(e,i,"x",s.intersect,n)},y(e,t,s,n){const i=Ln(t,e);return _c(e,i,"y",s.intersect,n)}}};const ih=["left","top","right","bottom"];function Ti(e,t){return e.filter(s=>s.pos===t)}function bc(e,t){return e.filter(s=>ih.indexOf(s.pos)===-1&&s.box.axis===t)}function Ei(e,t){return e.sort((s,n)=>{const i=t?n:s,a=t?s:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight})}function x0(e){const t=[];let s,n,i,a,r,o;for(s=0,n=(e||[]).length;s<n;++s)i=e[s],{position:a,options:{stack:r,stackWeight:o=1}}=i,t.push({index:s,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:r&&a+r,stackWeight:o});return t}function k0(e){const t={};for(const s of e){const{stack:n,pos:i,stackWeight:a}=s;if(!n||!ih.includes(i))continue;const r=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function w0(e,t){const s=k0(e),{vBoxMaxWidth:n,hBoxMaxHeight:i}=t;let a,r,o;for(a=0,r=e.length;a<r;++a){o=e[a];const{fullSize:l}=o.box,c=s[o.stack],u=c&&o.stackWeight/c.weight;o.horizontal?(o.width=u?u*n:l&&t.availableWidth,o.height=i):(o.width=n,o.height=u?u*i:l&&t.availableHeight)}return s}function $0(e){const t=x0(e),s=Ei(t.filter(c=>c.box.fullSize),!0),n=Ei(Ti(t,"left"),!0),i=Ei(Ti(t,"right")),a=Ei(Ti(t,"top"),!0),r=Ei(Ti(t,"bottom")),o=bc(t,"x"),l=bc(t,"y");return{fullSize:s,leftAndTop:n.concat(a),rightAndBottom:i.concat(l).concat(r).concat(o),chartArea:Ti(t,"chartArea"),vertical:n.concat(i).concat(l),horizontal:a.concat(r).concat(o)}}function yc(e,t,s,n){return Math.max(e[s],t[s])+Math.max(e[n],t[n])}function ah(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function S0(e,t,s,n){const{pos:i,box:a}=s,r=e.maxPadding;if(!re(i)){s.size&&(e[i]-=s.size);const h=n[s.stack]||{size:0,count:1};h.size=Math.max(h.size,s.horizontal?a.height:a.width),s.size=h.size/h.count,e[i]+=s.size}a.getPadding&&ah(r,a.getPadding());const o=Math.max(0,t.outerWidth-yc(r,e,"left","right")),l=Math.max(0,t.outerHeight-yc(r,e,"top","bottom")),c=o!==e.w,u=l!==e.h;return e.w=o,e.h=l,s.horizontal?{same:c,other:u}:{same:u,other:c}}function M0(e){const t=e.maxPadding;function s(n){const i=Math.max(t[n]-e[n],0);return e[n]+=i,i}e.y+=s("top"),e.x+=s("left"),s("right"),s("bottom")}function P0(e,t){const s=t.maxPadding;function n(i){const a={left:0,top:0,right:0,bottom:0};return i.forEach(r=>{a[r]=Math.max(t[r],s[r])}),a}return n(e?["left","right"]:["top","bottom"])}function Ni(e,t,s,n){const i=[];let a,r,o,l,c,u;for(a=0,r=e.length,c=0;a<r;++a){o=e[a],l=o.box,l.update(o.width||t.w,o.height||t.h,P0(o.horizontal,t));const{same:h,other:f}=S0(t,s,o,n);c|=h&&i.length,u=u||f,l.fullSize||i.push(o)}return c&&Ni(i,t,s,n)||u}function Ta(e,t,s,n,i){e.top=s,e.left=t,e.right=t+n,e.bottom=s+i,e.width=n,e.height=i}function xc(e,t,s,n){const i=s.padding;let{x:a,y:r}=t;for(const o of e){const l=o.box,c=n[o.stack]||{placed:0,weight:1},u=o.stackWeight/c.weight||1;if(o.horizontal){const h=t.w*u,f=c.size||l.height;ea(c.start)&&(r=c.start),l.fullSize?Ta(l,i.left,r,s.outerWidth-i.right-i.left,f):Ta(l,t.left+c.placed,r,h,f),c.start=r,c.placed+=h,r=l.bottom}else{const h=t.h*u,f=c.size||l.width;ea(c.start)&&(a=c.start),l.fullSize?Ta(l,a,i.top,f,s.outerHeight-i.bottom-i.top):Ta(l,a,t.top+c.placed,f,h),c.start=a,c.placed+=h,a=l.right}}t.x=a,t.y=r}var ns={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(s){t.draw(s)}}]},e.boxes.push(t)},removeBox(e,t){const s=e.boxes?e.boxes.indexOf(t):-1;s!==-1&&e.boxes.splice(s,1)},configure(e,t,s){t.fullSize=s.fullSize,t.position=s.position,t.weight=s.weight},update(e,t,s,n){if(!e)return;const i=is(e.options.layout.padding),a=Math.max(t-i.width,0),r=Math.max(s-i.height,0),o=$0(e.boxes),l=o.vertical,c=o.horizontal;be(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const u=l.reduce((m,b)=>b.box.options&&b.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:s,padding:i,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/u,hBoxMaxHeight:r/2}),f=Object.assign({},i);ah(f,is(n));const v=Object.assign({maxPadding:f,w:a,h:r,x:i.left,y:i.top},i),p=w0(l.concat(c),h);Ni(o.fullSize,v,h,p),Ni(l,v,h,p),Ni(c,v,h,p)&&Ni(l,v,h,p),M0(v),xc(o.leftAndTop,v,h,p),v.x+=v.w,v.y+=v.h,xc(o.rightAndBottom,v,h,p),e.chartArea={left:v.left,top:v.top,right:v.left+v.w,bottom:v.top+v.h,height:v.h,width:v.w},be(o.chartArea,m=>{const b=m.box;Object.assign(b,e.chartArea),b.update(v.w,v.h,{left:0,top:0,right:0,bottom:0})})}};class rh{acquireContext(t,s){}releaseContext(t){return!1}addEventListener(t,s,n){}removeEventListener(t,s,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,s,n,i){return s=Math.max(0,s||t.width),n=n||t.height,{width:s,height:Math.max(0,i?Math.floor(s/i):n)}}isAttached(t){return!0}updateConfig(t){}}class A0 extends rh{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Va="$chartjs",C0={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},kc=e=>e===null||e==="";function z0(e,t){const s=e.style,n=e.getAttribute("height"),i=e.getAttribute("width");if(e[Va]={initial:{height:n,width:i,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",kc(i)){const a=ac(e,"width");a!==void 0&&(e.width=a)}if(kc(n))if(e.style.height==="")e.height=e.width/(t||2);else{const a=ac(e,"height");a!==void 0&&(e.height=a)}return e}const oh=Sb?{passive:!0}:!1;function T0(e,t,s){e&&e.addEventListener(t,s,oh)}function E0(e,t,s){e&&e.canvas&&e.canvas.removeEventListener(t,s,oh)}function D0(e,t){const s=C0[e.type]||e.type,{x:n,y:i}=Ln(e,t);return{type:s,chart:t,native:e,x:n!==void 0?n:null,y:i!==void 0?i:null}}function ar(e,t){for(const s of e)if(s===t||s.contains(t))return!0}function O0(e,t,s){const n=e.canvas,i=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||ar(o.addedNodes,n),r=r&&!ar(o.removedNodes,n);r&&s()});return i.observe(document,{childList:!0,subtree:!0}),i}function R0(e,t,s){const n=e.canvas,i=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||ar(o.removedNodes,n),r=r&&!ar(o.addedNodes,n);r&&s()});return i.observe(document,{childList:!0,subtree:!0}),i}const ia=new Map;let wc=0;function lh(){const e=window.devicePixelRatio;e!==wc&&(wc=e,ia.forEach((t,s)=>{s.currentDevicePixelRatio!==e&&t()}))}function L0(e,t){ia.size||window.addEventListener("resize",lh),ia.set(e,t)}function I0(e){ia.delete(e),ia.size||window.removeEventListener("resize",lh)}function j0(e,t,s){const n=e.canvas,i=n&&cl(n);if(!i)return;const a=Lu((o,l)=>{const c=i.clientWidth;s(o,l),c<i.clientWidth&&s()},window),r=new ResizeObserver(o=>{const l=o[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||a(c,u)});return r.observe(i),L0(e,a),r}function Ur(e,t,s){s&&s.disconnect(),t==="resize"&&I0(e)}function N0(e,t,s){const n=e.canvas,i=Lu(a=>{e.ctx!==null&&s(D0(a,e))},e);return T0(n,t,i),i}class F0 extends rh{acquireContext(t,s){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(z0(t,s),n):null}releaseContext(t){const s=t.canvas;if(!s[Va])return!1;const n=s[Va].initial;["height","width"].forEach(a=>{const r=n[a];ne(r)?s.removeAttribute(a):s.setAttribute(a,r)});const i=n.style||{};return Object.keys(i).forEach(a=>{s.style[a]=i[a]}),s.width=s.width,delete s[Va],!0}addEventListener(t,s,n){this.removeEventListener(t,s);const i=t.$proxies||(t.$proxies={}),r={attach:O0,detach:R0,resize:j0}[s]||N0;i[s]=r(t,s,n)}removeEventListener(t,s){const n=t.$proxies||(t.$proxies={}),i=n[s];if(!i)return;({attach:Ur,detach:Ur,resize:Ur}[s]||E0)(t,s,i),n[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,s,n,i){return $b(t,s,n,i)}isAttached(t){const s=t&&cl(t);return!!(s&&s.isConnected)}}function B0(e){return!ll()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?A0:F0}let cn=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:s,y:n}=this.getProps(["x","y"],t);return{x:s,y:n}}hasValue(){return mi(this.x)&&mi(this.y)}getProps(t,s){const n=this.$animations;if(!s||!n)return this;const i={};return t.forEach(a=>{i[a]=n[a]&&n[a].active()?n[a]._to:this[a]}),i}};function q0(e,t){const s=e.options.ticks,n=V0(e),i=Math.min(s.maxTicksLimit||n,n),a=s.major.enabled?W0(t):[],r=a.length,o=a[0],l=a[r-1],c=[];if(r>i)return U0(t,c,a,r/i),c;const u=H0(a,t,i);if(r>0){let h,f;const v=r>1?Math.round((l-o)/(r-1)):null;for(Ea(t,c,u,ne(v)?0:o-v,o),h=0,f=r-1;h<f;h++)Ea(t,c,u,a[h],a[h+1]);return Ea(t,c,u,l,ne(v)?t.length:l+v),c}return Ea(t,c,u),c}function V0(e){const t=e.options.offset,s=e._tickSize(),n=e._length/s+(t?0:1),i=e._maxLength/s;return Math.floor(Math.min(n,i))}function H0(e,t,s){const n=Y0(e),i=t.length/s;if(!n)return Math.max(i,1);const a=P1(n);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>i)return l}return Math.max(i,1)}function W0(e){const t=[];let s,n;for(s=0,n=e.length;s<n;s++)e[s].major&&t.push(s);return t}function U0(e,t,s,n){let i=0,a=s[0],r;for(n=Math.ceil(n),r=0;r<e.length;r++)r===a&&(t.push(e[r]),i++,a=s[i*n])}function Ea(e,t,s,n,i){const a=Yt(n,0),r=Math.min(Yt(i,e.length),e.length);let o=0,l,c,u;for(s=Math.ceil(s),i&&(l=i-n,s=l/Math.floor(l/s)),u=a;u<0;)o++,u=Math.round(a+o*s);for(c=Math.max(a,0);c<r;c++)c===u&&(t.push(e[c]),o++,u=Math.round(a+o*s))}function Y0(e){const t=e.length;let s,n;if(t<2)return!1;for(n=e[0],s=1;s<t;++s)if(e[s]-e[s-1]!==n)return!1;return n}const K0=e=>e==="left"?"right":e==="right"?"left":e,$c=(e,t,s)=>t==="top"||t==="left"?e[t]+s:e[t]-s,Sc=(e,t)=>Math.min(t||e,e);function Mc(e,t){const s=[],n=e.length/t,i=e.length;let a=0;for(;a<i;a+=n)s.push(e[Math.floor(a)]);return s}function X0(e,t,s){const n=e.ticks.length,i=Math.min(t,n-1),a=e._startPixel,r=e._endPixel,o=1e-6;let l=e.getPixelForTick(i),c;if(!(s&&(n===1?c=Math.max(l-a,r-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<a-o||l>r+o)))return l}function G0(e,t){be(e,s=>{const n=s.gc,i=n.length/2;let a;if(i>t){for(a=0;a<i;++a)delete s.data[n[a]];n.splice(0,i)}})}function Di(e){return e.drawTicks?e.tickLength:0}function Pc(e,t){if(!e.display)return 0;const s=qe(e.font,t),n=is(e.padding);return(Ce(e.text)?e.text.length:1)*s.lineHeight+n.height}function J0(e,t){return An(e,{scale:t,type:"scale"})}function Q0(e,t,s){return An(e,{tick:s,index:t,type:"tick"})}function Z0(e,t,s){let n=sl(e);return(s&&t!=="right"||!s&&t==="right")&&(n=K0(n)),n}function ty(e,t,s,n){const{top:i,left:a,bottom:r,right:o,chart:l}=e,{chartArea:c,scales:u}=l;let h=0,f,v,p;const m=r-i,b=o-a;if(e.isHorizontal()){if(v=es(n,a,o),re(s)){const x=Object.keys(s)[0],S=s[x];p=u[x].getPixelForValue(S)+m-t}else s==="center"?p=(c.bottom+c.top)/2+m-t:p=$c(e,s,t);f=o-a}else{if(re(s)){const x=Object.keys(s)[0],S=s[x];v=u[x].getPixelForValue(S)-b+t}else s==="center"?v=(c.left+c.right)/2-b+t:v=$c(e,s,t);p=es(n,r,i),h=s==="left"?-Fe:Fe}return{titleX:v,titleY:p,maxWidth:f,rotation:h}}class Qn extends cn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,s){return t}getUserBounds(){let{_userMin:t,_userMax:s,_suggestedMin:n,_suggestedMax:i}=this;return t=ms(t,Number.POSITIVE_INFINITY),s=ms(s,Number.NEGATIVE_INFINITY),n=ms(n,Number.POSITIVE_INFINITY),i=ms(i,Number.NEGATIVE_INFINITY),{min:ms(t,n),max:ms(s,i),minDefined:je(t),maxDefined:je(s)}}getMinMax(t){let{min:s,max:n,minDefined:i,maxDefined:a}=this.getUserBounds(),r;if(i&&a)return{min:s,max:n};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)r=o[l].controller.getMinMax(this,t),i||(s=Math.min(s,r.min)),a||(n=Math.max(n,r.max));return s=a&&s>n?n:s,n=i&&s>n?s:n,{min:ms(s,ms(n,s)),max:ms(n,ms(s,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){$e(this.options.beforeUpdate,[this])}update(t,s,n){const{beginAtZero:i,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=s,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=sb(this,a,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?Mc(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=q0(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,s,n;this.isHorizontal()?(s=this.left,n=this.right):(s=this.top,n=this.bottom,t=!t),this._startPixel=s,this._endPixel=n,this._reversePixels=t,this._length=n-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){$e(this.options.afterUpdate,[this])}beforeSetDimensions(){$e(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){$e(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),$e(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){$e(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const s=this.options.ticks;let n,i,a;for(n=0,i=t.length;n<i;n++)a=t[n],a.label=$e(s.callback,[a.value,n,t],this)}afterTickToLabelConversion(){$e(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){$e(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,s=t.ticks,n=Sc(this.ticks.length,t.ticks.maxTicksLimit),i=s.minRotation||0,a=s.maxRotation;let r=i,o,l,c;if(!this._isVisible()||!s.display||i>=a||n<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,v=Xe(this.chart.width-h,0,this.maxWidth);o=t.offset?this.maxWidth/n:v/(n-1),h+6>o&&(o=v/(n-(t.offset?.5:1)),l=this.maxHeight-Di(t.grid)-s.padding-Pc(t.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),r=tl(Math.min(Math.asin(Xe((u.highest.height+6)/o,-1,1)),Math.asin(Xe(l/c,-1,1))-Math.asin(Xe(f/c,-1,1)))),r=Math.max(i,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){$e(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){$e(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:s,options:{ticks:n,title:i,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=Pc(i,s.options.font);if(o?(t.width=this.maxWidth,t.height=Di(a)+l):(t.height=this.maxHeight,t.width=Di(a)+l),n.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:f}=this._getLabelSizes(),v=n.padding*2,p=Ds(this.labelRotation),m=Math.cos(p),b=Math.sin(p);if(o){const x=n.mirror?0:b*h.width+m*f.height;t.height=Math.min(this.maxHeight,t.height+x+v)}else{const x=n.mirror?0:m*h.width+b*f.height;t.width=Math.min(this.maxWidth,t.width+x+v)}this._calculatePadding(c,u,b,m)}}this._handleMargins(),o?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,s,n,i){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,v=0;l?c?(f=i*t.width,v=n*s.height):(f=n*t.height,v=i*s.width):a==="start"?v=s.width:a==="end"?f=t.width:a!=="inner"&&(f=t.width/2,v=s.width/2),this.paddingLeft=Math.max((f-u+r)*this.width/(this.width-u),0),this.paddingRight=Math.max((v-h+r)*this.width/(this.width-h),0)}else{let u=s.height/2,h=t.height/2;a==="start"?(u=0,h=t.height):a==="end"&&(u=s.height,h=0),this.paddingTop=u+r,this.paddingBottom=h+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){$e(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:s}=this.options;return s==="top"||s==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let s,n;for(s=0,n=t.length;s<n;s++)ne(t[s].label)&&(t.splice(s,1),n--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const s=this.options.ticks.sampleSize;let n=this.ticks;s<n.length&&(n=Mc(n,s)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,s,n){const{ctx:i,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(s/Sc(s,n));let c=0,u=0,h,f,v,p,m,b,x,S,k,w,$;for(h=0;h<s;h+=l){if(p=t[h].label,m=this._resolveTickFontOptions(h),i.font=b=m.string,x=a[b]=a[b]||{data:{},gc:[]},S=m.lineHeight,k=w=0,!ne(p)&&!Ce(p))k=nr(i,x.data,x.gc,k,p),w=S;else if(Ce(p))for(f=0,v=p.length;f<v;++f)$=p[f],!ne($)&&!Ce($)&&(k=nr(i,x.data,x.gc,k,$),w+=S);r.push(k),o.push(w),c=Math.max(k,c),u=Math.max(w,u)}G0(a,s);const A=r.indexOf(c),z=o.indexOf(u),C=E=>({width:r[E]||0,height:o[E]||0});return{first:C(0),last:C(s-1),widest:C(A),highest:C(z),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,s){return NaN}getValueForPixel(t){}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const s=this._startPixel+t*this._length;return T1(this._alignToPixels?En(this.chart,s,0):s)}getDecimalForPixel(t){const s=(t-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:s}=this;return t<0&&s<0?s:t>0&&s>0?t:0}getContext(t){const s=this.ticks||[];if(t>=0&&t<s.length){const n=s[t];return n.$context||(n.$context=Q0(this.getContext(),t,n))}return this.$context||(this.$context=J0(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,s=Ds(this.labelRotation),n=Math.abs(Math.cos(s)),i=Math.abs(Math.sin(s)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*n>o*i?o/n:l/i:l*i<o*n?l/n:o/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const s=this.axis,n=this.chart,i=this.options,{grid:a,position:r,border:o}=i,l=a.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=Di(a),v=[],p=o.setContext(this.getContext()),m=p.display?p.width:0,b=m/2,x=function(J){return En(n,J,m)};let S,k,w,$,A,z,C,E,T,O,F,Z;if(r==="top")S=x(this.bottom),z=this.bottom-f,E=S-b,O=x(t.top)+b,Z=t.bottom;else if(r==="bottom")S=x(this.top),O=t.top,Z=x(t.bottom)-b,z=S+b,E=this.top+f;else if(r==="left")S=x(this.right),A=this.right-f,C=S-b,T=x(t.left)+b,F=t.right;else if(r==="right")S=x(this.left),T=t.left,F=x(t.right)-b,A=S+b,C=this.left+f;else if(s==="x"){if(r==="center")S=x((t.top+t.bottom)/2+.5);else if(re(r)){const J=Object.keys(r)[0],st=r[J];S=x(this.chart.scales[J].getPixelForValue(st))}O=t.top,Z=t.bottom,z=S+b,E=z+f}else if(s==="y"){if(r==="center")S=x((t.left+t.right)/2);else if(re(r)){const J=Object.keys(r)[0],st=r[J];S=x(this.chart.scales[J].getPixelForValue(st))}A=S-b,C=A-f,T=t.left,F=t.right}const Y=Yt(i.ticks.maxTicksLimit,h),V=Math.max(1,Math.ceil(h/Y));for(k=0;k<h;k+=V){const J=this.getContext(k),st=a.setContext(J),_t=o.setContext(J),gt=st.lineWidth,kt=st.color,K=_t.dash||[],R=_t.dashOffset,tt=st.tickWidth,dt=st.tickColor,Ht=st.tickBorderDash||[],W=st.tickBorderDashOffset;w=X0(this,k,l),w!==void 0&&($=En(n,w,gt),c?A=C=T=F=$:z=E=O=Z=$,v.push({tx1:A,ty1:z,tx2:C,ty2:E,x1:T,y1:O,x2:F,y2:Z,width:gt,color:kt,borderDash:K,borderDashOffset:R,tickWidth:tt,tickColor:dt,tickBorderDash:Ht,tickBorderDashOffset:W}))}return this._ticksLength=h,this._borderValue=S,v}_computeLabelItems(t){const s=this.axis,n=this.options,{position:i,ticks:a}=n,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=a,f=Di(n.grid),v=f+u,p=h?-u:v,m=-Ds(this.labelRotation),b=[];let x,S,k,w,$,A,z,C,E,T,O,F,Z="middle";if(i==="top")A=this.bottom-p,z=this._getXAxisLabelAlignment();else if(i==="bottom")A=this.top+p,z=this._getXAxisLabelAlignment();else if(i==="left"){const V=this._getYAxisLabelAlignment(f);z=V.textAlign,$=V.x}else if(i==="right"){const V=this._getYAxisLabelAlignment(f);z=V.textAlign,$=V.x}else if(s==="x"){if(i==="center")A=(t.top+t.bottom)/2+v;else if(re(i)){const V=Object.keys(i)[0],J=i[V];A=this.chart.scales[V].getPixelForValue(J)+v}z=this._getXAxisLabelAlignment()}else if(s==="y"){if(i==="center")$=(t.left+t.right)/2-v;else if(re(i)){const V=Object.keys(i)[0],J=i[V];$=this.chart.scales[V].getPixelForValue(J)}z=this._getYAxisLabelAlignment(f).textAlign}s==="y"&&(l==="start"?Z="top":l==="end"&&(Z="bottom"));const Y=this._getLabelSizes();for(x=0,S=o.length;x<S;++x){k=o[x],w=k.label;const V=a.setContext(this.getContext(x));C=this.getPixelForTick(x)+a.labelOffset,E=this._resolveTickFontOptions(x),T=E.lineHeight,O=Ce(w)?w.length:1;const J=O/2,st=V.color,_t=V.textStrokeColor,gt=V.textStrokeWidth;let kt=z;r?($=C,z==="inner"&&(x===S-1?kt=this.options.reverse?"left":"right":x===0?kt=this.options.reverse?"right":"left":kt="center"),i==="top"?c==="near"||m!==0?F=-O*T+T/2:c==="center"?F=-Y.highest.height/2-J*T+T:F=-Y.highest.height+T/2:c==="near"||m!==0?F=T/2:c==="center"?F=Y.highest.height/2-J*T:F=Y.highest.height-O*T,h&&(F*=-1),m!==0&&!V.showLabelBackdrop&&($+=T/2*Math.sin(m))):(A=C,F=(1-O)*T/2);let K;if(V.showLabelBackdrop){const R=is(V.backdropPadding),tt=Y.heights[x],dt=Y.widths[x];let Ht=F-R.top,W=0-R.left;switch(Z){case"middle":Ht-=tt/2;break;case"bottom":Ht-=tt;break}switch(z){case"center":W-=dt/2;break;case"right":W-=dt;break;case"inner":x===S-1?W-=dt:x>0&&(W-=dt/2);break}K={left:W,top:Ht,width:dt+R.width,height:tt+R.height,color:V.backdropColor}}b.push({label:w,font:E,textOffset:F,options:{rotation:m,color:st,strokeColor:_t,strokeWidth:gt,textAlign:kt,textBaseline:Z,translation:[$,A],backdrop:K}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:s}=this.options;if(-Ds(this.labelRotation))return t==="top"?"left":"right";let i="center";return s.align==="start"?i="left":s.align==="end"?i="right":s.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:s,ticks:{crossAlign:n,mirror:i,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let c,u;return s==="left"?i?(u=this.right+a,n==="near"?c="left":n==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-o,n==="near"?c="right":n==="center"?(c="center",u-=l/2):(c="left",u=this.left)):s==="right"?i?(u=this.left+a,n==="near"?c="right":n==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+o,n==="near"?c="left":n==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:s},left:n,top:i,width:a,height:r}=this;s&&(t.save(),t.fillStyle=s,t.fillRect(n,i,a,r),t.restore())}getLineWidthForValue(t){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const i=this.ticks.findIndex(a=>a.value===t);return i>=0?s.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const s=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,c,u)=>{!u.width||!u.color||(n.save(),n.lineWidth=u.width,n.strokeStyle=u.color,n.setLineDash(u.borderDash||[]),n.lineDashOffset=u.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(s.display)for(a=0,r=i.length;a<r;++a){const l=i[a];s.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),s.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:s,options:{border:n,grid:i}}=this,a=n.setContext(this.getContext()),r=n.display?a.width:0;if(!r)return;const o=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,f;this.isHorizontal()?(c=En(t,this.left,r)-r/2,u=En(t,this.right,o)+o/2,h=f=l):(h=En(t,this.top,r)-r/2,f=En(t,this.bottom,o)+o/2,c=u=l),s.save(),s.lineWidth=a.width,s.strokeStyle=a.color,s.beginPath(),s.moveTo(c,h),s.lineTo(u,f),s.stroke(),s.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,i=this._computeLabelArea();i&&br(n,i);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,c=r.label,u=r.textOffset;Kn(n,c,0,u,l,o)}i&&yr(n)}drawTitle(){const{ctx:t,options:{position:s,title:n,reverse:i}}=this;if(!n.display)return;const a=qe(n.font),r=is(n.padding),o=n.align;let l=a.lineHeight/2;s==="bottom"||s==="center"||re(s)?(l+=r.bottom,Ce(n.text)&&(l+=a.lineHeight*(n.text.length-1))):l+=r.top;const{titleX:c,titleY:u,maxWidth:h,rotation:f}=ty(this,l,s,o);Kn(t,n.text,0,0,a,{color:n.color,maxWidth:h,rotation:f,textAlign:Z0(o,s,i),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,s=t.ticks&&t.ticks.z||0,n=Yt(t.grid&&t.grid.z,-1),i=Yt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Qn.prototype.draw?[{z:s,draw:a=>{this.draw(a)}}]:[{z:n,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:s,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const s=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let a,r;for(a=0,r=s.length;a<r;++a){const o=s[a];o[n]===this.id&&(!t||o.type===t)&&i.push(o)}return i}_resolveTickFontOptions(t){const s=this.options.ticks.setContext(this.getContext(t));return qe(s.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Da{constructor(t,s,n){this.type=t,this.scope=s,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const s=Object.getPrototypeOf(t);let n;ny(s)&&(n=this.register(s));const i=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in i||(i[a]=t,ey(t,r,n),this.override&&ze.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const s=this.items,n=t.id,i=this.scope;n in s&&delete s[n],i&&n in ze[i]&&(delete ze[i][n],this.override&&delete Yn[n])}}function ey(e,t,s){const n=ta(Object.create(null),[s?ze.get(s):{},ze.get(t),e.defaults]);ze.set(t,n),e.defaultRoutes&&sy(t,e.defaultRoutes),e.descriptors&&ze.describe(t,e.descriptors)}function sy(e,t){Object.keys(t).forEach(s=>{const n=s.split("."),i=n.pop(),a=[e].concat(n).join("."),r=t[s].split("."),o=r.pop(),l=r.join(".");ze.route(a,i,l,o)})}function ny(e){return"id"in e&&"defaults"in e}class iy{constructor(){this.controllers=new Da(Cn,"datasets",!0),this.elements=new Da(cn,"elements"),this.plugins=new Da(Object,"plugins"),this.scales=new Da(Qn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,s,n){[...s].forEach(i=>{const a=n||this._getRegistryForType(i);n||a.isForType(i)||a===this.plugins&&i.id?this._exec(t,a,i):be(i,r=>{const o=n||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,s,n){const i=Zo(t);$e(n["before"+i],[],n),s[t](n),$e(n["after"+i],[],n)}_getRegistryForType(t){for(let s=0;s<this._typedRegistries.length;s++){const n=this._typedRegistries[s];if(n.isForType(t))return n}return this.plugins}_get(t,s,n){const i=s.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var Bs=new iy;class ay{constructor(){this._init=void 0}notify(t,s,n,i){if(s==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=i?this._descriptors(t).filter(i):this._descriptors(t),r=this._notify(a,t,s,n);return s==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,s,n,i){i=i||{};for(const a of t){const r=a.plugin,o=r[n],l=[s,i,a.options];if($e(o,l,r)===!1&&i.cancelable)return!1}return!0}invalidate(){ne(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),s}_createDescriptors(t,s){const n=t&&t.config,i=Yt(n.options&&n.options.plugins,{}),a=ry(n);return i===!1&&!s?[]:ly(t,a,i,s)}_notifyStateChanges(t){const s=this._oldCache||[],n=this._cache,i=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(i(s,n),t,"stop"),this._notify(i(n,s),t,"start")}}function ry(e){const t={},s=[],n=Object.keys(Bs.plugins.items);for(let a=0;a<n.length;a++)s.push(Bs.getPlugin(n[a]));const i=e.plugins||[];for(let a=0;a<i.length;a++){const r=i[a];s.indexOf(r)===-1&&(s.push(r),t[r.id]=!0)}return{plugins:s,localIds:t}}function oy(e,t){return!t&&e===!1?null:e===!0?{}:e}function ly(e,{plugins:t,localIds:s},n,i){const a=[],r=e.getContext();for(const o of t){const l=o.id,c=oy(n[l],i);c!==null&&a.push({plugin:o,options:cy(e.config,{plugin:o,local:s[l]},c,r)})}return a}function cy(e,{plugin:t,local:s},n,i){const a=e.pluginScopeKeys(t),r=e.getOptionScopes(n,a);return s&&t.defaults&&r.push(t.defaults),e.createResolver(r,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function _o(e,t){const s=ze.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||s.indexAxis||"x"}function dy(e,t){let s=e;return e==="_index_"?s=t:e==="_value_"&&(s=t==="x"?"y":"x"),s}function uy(e,t){return e===t?"_index_":"_value_"}function Ac(e){if(e==="x"||e==="y"||e==="r")return e}function hy(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function bo(e,...t){if(Ac(e))return e;for(const s of t){const n=s.axis||hy(s.position)||e.length>1&&Ac(e[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Cc(e,t,s){if(s[t+"AxisID"]===e)return{axis:t}}function fy(e,t){if(t.data&&t.data.datasets){const s=t.data.datasets.filter(n=>n.xAxisID===e||n.yAxisID===e);if(s.length)return Cc(e,"x",s[0])||Cc(e,"y",s[0])}return{}}function vy(e,t){const s=Yn[e.type]||{scales:{}},n=t.scales||{},i=_o(e.type,t),a=Object.create(null);return Object.keys(n).forEach(r=>{const o=n[r];if(!re(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=bo(r,o,fy(r,e),ze.scales[o.type]),c=uy(l,i),u=s.scales||{};a[r]=Ui(Object.create(null),[{axis:l},o,u[l],u[c]])}),e.data.datasets.forEach(r=>{const o=r.type||e.type,l=r.indexAxis||_o(o,t),u=(Yn[o]||{}).scales||{};Object.keys(u).forEach(h=>{const f=dy(h,l),v=r[f+"AxisID"]||f;a[v]=a[v]||Object.create(null),Ui(a[v],[{axis:f},n[v],u[h]])})}),Object.keys(a).forEach(r=>{const o=a[r];Ui(o,[ze.scales[o.type],ze.scale])}),a}function ch(e){const t=e.options||(e.options={});t.plugins=Yt(t.plugins,{}),t.scales=vy(e,t)}function dh(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function py(e){return e=e||{},e.data=dh(e.data),ch(e),e}const zc=new Map,uh=new Set;function Oa(e,t){let s=zc.get(e);return s||(s=t(),zc.set(e,s),uh.add(s)),s}const Oi=(e,t,s)=>{const n=Mn(t,s);n!==void 0&&e.add(n)};class gy{constructor(t){this._config=py(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=dh(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),ch(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Oa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,s){return Oa(`${t}.transition.${s}`,()=>[[`datasets.${t}.transitions.${s}`,`transitions.${s}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,s){return Oa(`${t}-${s}`,()=>[[`datasets.${t}.elements.${s}`,`datasets.${t}`,`elements.${s}`,""]])}pluginScopeKeys(t){const s=t.id,n=this.type;return Oa(`${n}-plugin-${s}`,()=>[[`plugins.${s}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,s){const n=this._scopeCache;let i=n.get(t);return(!i||s)&&(i=new Map,n.set(t,i)),i}getOptionScopes(t,s,n){const{options:i,type:a}=this,r=this._cachedScopes(t,n),o=r.get(s);if(o)return o;const l=new Set;s.forEach(u=>{t&&(l.add(t),u.forEach(h=>Oi(l,t,h))),u.forEach(h=>Oi(l,i,h)),u.forEach(h=>Oi(l,Yn[a]||{},h)),u.forEach(h=>Oi(l,ze,h)),u.forEach(h=>Oi(l,go,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),uh.has(s)&&r.set(s,c),c}chartOptionScopes(){const{options:t,type:s}=this;return[t,Yn[s]||{},ze.datasets[s]||{},{type:s},ze,go]}resolveNamedOptions(t,s,n,i=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=Tc(this._resolverCache,t,i);let l=r;if(_y(r,s)){a.$shared=!1,n=Pn(n)?n():n;const c=this.createResolver(t,n,o);l=_i(r,n,c)}for(const c of s)a[c]=l[c];return a}createResolver(t,s,n=[""],i){const{resolver:a}=Tc(this._resolverCache,t,n);return re(s)?_i(a,s,void 0,i):a}}function Tc(e,t,s){let n=e.get(t);n||(n=new Map,e.set(t,n));const i=s.join();let a=n.get(i);return a||(a={resolver:al(t,s),subPrefixes:s.filter(o=>!o.toLowerCase().includes("hover"))},n.set(i,a)),a}const my=e=>re(e)&&Object.getOwnPropertyNames(e).some(t=>Pn(e[t]));function _y(e,t){const{isScriptable:s,isIndexable:n}=qu(e);for(const i of t){const a=s(i),r=n(i),o=(r||a)&&e[i];if(a&&(Pn(o)||my(o))||r&&Ce(o))return!0}return!1}var by="4.5.1";const yy=["top","bottom","left","right","chartArea"];function Ec(e,t){return e==="top"||e==="bottom"||yy.indexOf(e)===-1&&t==="x"}function Dc(e,t){return function(s,n){return s[e]===n[e]?s[t]-n[t]:s[e]-n[e]}}function Oc(e){const t=e.chart,s=t.options.animation;t.notifyPlugins("afterRender"),$e(s&&s.onComplete,[e],t)}function xy(e){const t=e.chart,s=t.options.animation;$e(s&&s.onProgress,[e],t)}function hh(e){return ll()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Ha={},Rc=e=>{const t=hh(e);return Object.values(Ha).filter(s=>s.canvas===t).pop()};function ky(e,t,s){const n=Object.keys(e);for(const i of n){const a=+i;if(a>=t){const r=e[i];delete e[i],(s>0||a>t)&&(e[a+s]=r)}}}function wy(e,t,s,n){return!s||e.type==="mouseout"?null:n?t:e}class yo{static defaults=ze;static instances=Ha;static overrides=Yn;static registry=Bs;static version=by;static getChart=Rc;static register(...t){Bs.add(...t),Lc()}static unregister(...t){Bs.remove(...t),Lc()}constructor(t,s){const n=this.config=new gy(s),i=hh(t),a=Rc(i);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||B0(i)),this.platform.updateConfig(n);const o=this.platform.acquireContext(i,r.aspectRatio),l=o&&o.canvas,c=l&&l.height,u=l&&l.width;if(this.id=_1(),this.ctx=o,this.canvas=l,this.width=u,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ay,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=R1(h=>this.update(h),r.resizeDelay||0),this._dataChanges=[],Ha[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Xs.listen(this,"complete",Oc),Xs.listen(this,"progress",xy),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:s},width:n,height:i,_aspectRatio:a}=this;return ne(t)?s&&a?a:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Bs}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ic(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ec(this.canvas,this.ctx),this}stop(){return Xs.stop(this),this}resize(t,s){Xs.running(this)?this._resizeBeforeDraw={width:t,height:s}:this._resize(t,s)}_resize(t,s){const n=this.options,i=this.canvas,a=n.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(i,t,s,a),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,ic(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),$e(n.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};be(s,(n,i)=>{n.id=i})}buildOrUpdateScales(){const t=this.options,s=t.scales,n=this.scales,i=Object.keys(n).reduce((r,o)=>(r[o]=!1,r),{});let a=[];s&&(a=a.concat(Object.keys(s).map(r=>{const o=s[r],l=bo(r,o),c=l==="r",u=l==="x";return{options:o,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),be(a,r=>{const o=r.options,l=o.id,c=bo(l,o),u=Yt(o.type,r.dtype);(o.position===void 0||Ec(o.position,c)!==Ec(r.dposition))&&(o.position=r.dposition),i[l]=!0;let h=null;if(l in n&&n[l].type===u)h=n[l];else{const f=Bs.getScale(u);h=new f({id:l,type:u,ctx:this.ctx,chart:this}),n[h.id]=h}h.init(o,t)}),be(i,(r,o)=>{r||delete n[o]}),be(n,r=>{ns.configure(this,r,r.options),ns.addBox(this,r)})}_updateMetasets(){const t=this._metasets,s=this.data.datasets.length,n=t.length;if(t.sort((i,a)=>i.index-a.index),n>s){for(let i=s;i<n;++i)this._destroyDatasetMeta(i);t.splice(s,n-s)}this._sortedMetasets=t.slice(0).sort(Dc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:s}}=this;t.length>s.length&&delete this._stacks,t.forEach((n,i)=>{s.filter(a=>a===n._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],s=this.data.datasets;let n,i;for(this._removeUnreferencedMetasets(),n=0,i=s.length;n<i;n++){const a=s[n];let r=this.getDatasetMeta(n);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(n),r=this.getDatasetMeta(n)),r.type=o,r.indexAxis=a.indexAxis||_o(o,this.options),r.order=a.order||0,r.index=n,r.label=""+a.label,r.visible=this.isDatasetVisible(n),r.controller)r.controller.updateIndex(n),r.controller.linkScales();else{const l=Bs.getController(o),{datasetElementType:c,dataElementType:u}=ze.datasets[o];Object.assign(l,{dataElementType:Bs.getElement(u),datasetElementType:c&&Bs.getElement(c)}),r.controller=new l(this,n),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){be(this.data.datasets,(t,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const s=this.config;s.update();const n=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),f=!i&&a.indexOf(h)===-1;h.buildOrUpdateElements(f),r=Math.max(+h.getMaxOverflow(),r)}r=this._minPadding=n.layout.autoPadding?r:0,this._updateLayout(r),i||be(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Dc("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){be(this.scales,t=>{ns.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,s=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!Ul(s,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,s=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:a}of s){const r=n==="_removeElements"?-a:a;ky(t,i,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const s=this.data.datasets.length,n=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),i=n(0);for(let a=1;a<s;a++)if(!Ul(i,n(a)))return;return Array.from(i).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ns.update(this,this.width,this.height,t);const s=this.chartArea,n=s.width<=0||s.height<=0;this._layers=[],be(this.boxes,i=>{n&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,a)=>{i._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let s=0,n=this.data.datasets.length;s<n;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,n=this.data.datasets.length;s<n;++s)this._updateDataset(s,Pn(t)?t({datasetIndex:s}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,s){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(n.controller._update(s),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Xs.has(this)?this.attached&&!Xs.running(this)&&Xs.start(this):(this.draw(),Oc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(t=0;t<s.length&&s[t].z<=0;++t)s[t].draw(this.chartArea);for(this._drawDatasets();t<s.length;++t)s[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const s=this._sortedMetasets,n=[];let i,a;for(i=0,a=s.length;i<a;++i){const r=s[i];(!t||r.visible)&&n.push(r)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let s=t.length-1;s>=0;--s)this._drawDataset(t[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const s=this.ctx,n={meta:t,index:t.index,cancelable:!0},i=Zu(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(i&&br(s,i),t.controller.draw(),i&&yr(s),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return nn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,s,n,i){const a=y0.modes[s];return typeof a=="function"?a(this,t,n,i):[]}getDatasetMeta(t){const s=this.data.datasets[t],n=this._metasets;let i=n.filter(a=>a&&a._dataset===s).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:t,_dataset:s,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=An(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const s=this.data.datasets[t];if(!s)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!s.hidden}setDatasetVisibility(t,s){const n=this.getDatasetMeta(t);n.hidden=!s}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,s,n){const i=n?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,i);ea(s)?(a.data[s].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),r.update(a,{visible:n}),this.update(o=>o.datasetIndex===t?i:void 0))}hide(t,s){this._updateVisibility(t,s,!1)}show(t,s){this._updateVisibility(t,s,!0)}_destroyDatasetMeta(t){const s=this._metasets[t];s&&s.controller&&s.controller._destroy(),delete this._metasets[t]}_stop(){let t,s;for(this.stop(),Xs.remove(this),t=0,s=this.data.datasets.length;t<s;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:s}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),ec(t,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Ha[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,s=this.platform,n=(a,r)=>{s.addEventListener(this,a,r),t[a]=r},i=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};be(this.options.events,a=>n(a,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,s=this.platform,n=(l,c)=>{s.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(s.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const o=()=>{i("attach",o),this.attached=!0,this.resize(),n("resize",a),n("detach",r)};r=()=>{this.attached=!1,i("resize",a),this._stop(),this._resize(0,0),n("attach",o)},s.isAttached(this.canvas)?o():r()}unbindEvents(){be(this._listeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._listeners={},be(this._responsiveListeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,s,n){const i=n?"set":"remove";let a,r,o,l;for(s==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+i+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[i+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const s=this._active||[],n=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!tr(n,s)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,s))}notifyPlugins(t,s,n){return this._plugins.notify(this,t,s,n)}isPluginEnabled(t){return this._plugins._cache.filter(s=>s.plugin.id===t).length===1}_updateHoverStyles(t,s,n){const i=this.options.hover,a=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),r=a(s,t),o=n?t:a(t,s);r.length&&this.updateHoverStyle(r,i.mode,!1),o.length&&i.mode&&this.updateHoverStyle(o,i.mode,!0)}_eventHandler(t,s){const n={event:t,replay:s,cancelable:!0,inChartArea:this.isPointInArea(t)},i=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,i)===!1)return;const a=this._handleEvent(t,s,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(a||n.changed)&&this.render(),this}_handleEvent(t,s,n){const{_active:i=[],options:a}=this,r=s,o=this._getActiveElements(t,i,n,r),l=$1(t),c=wy(t,this._lastEvent,n,l);n&&(this._lastEvent=null,$e(a.onHover,[t,o,this],this),l&&$e(a.onClick,[t,o,this],this));const u=!tr(o,i);return(u||s)&&(this._active=o,this._updateHoverStyles(o,i,s)),this._lastEvent=c,u}_getActiveElements(t,s,n,i){if(t.type==="mouseout")return[];if(!n)return s;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,i)}}function Lc(){return be(yo.instances,e=>e._plugins.invalidate())}function $y(e,t,s){const{startAngle:n,x:i,y:a,outerRadius:r,innerRadius:o,options:l}=t,{borderWidth:c,borderJoinStyle:u}=l,h=Math.min(c/r,ss(n-s));if(e.beginPath(),e.arc(i,a,r-c/2,n+h/2,s-h/2),o>0){const f=Math.min(c/o,ss(n-s));e.arc(i,a,o+c/2,s-f/2,n+f/2,!0)}else{const f=Math.min(c/2,r*ss(n-s));if(u==="round")e.arc(i,a,f,s-he/2,n+he/2,!0);else if(u==="bevel"){const v=2*f*f,p=-v*Math.cos(s+he/2)+i,m=-v*Math.sin(s+he/2)+a,b=v*Math.cos(n+he/2)+i,x=v*Math.sin(n+he/2)+a;e.lineTo(p,m),e.lineTo(b,x)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function Sy(e,t,s){const{startAngle:n,pixelMargin:i,x:a,y:r,outerRadius:o,innerRadius:l}=t;let c=i/o;e.beginPath(),e.arc(a,r,o,n-c,s+c),l>i?(c=i/l,e.arc(a,r,l,s+c,n-c,!0)):e.arc(a,r,i,s+Fe,n-Fe),e.closePath(),e.clip()}function My(e){return il(e,["outerStart","outerEnd","innerStart","innerEnd"])}function Py(e,t,s,n){const i=My(e.options.borderRadius),a=(s-t)/2,r=Math.min(a,n*t/2),o=l=>{const c=(s-Math.min(a,l))*n/2;return Xe(l,0,Math.min(a,c))};return{outerStart:o(i.outerStart),outerEnd:o(i.outerEnd),innerStart:Xe(i.innerStart,0,r),innerEnd:Xe(i.innerEnd,0,r)}}function si(e,t,s,n){return{x:s+e*Math.cos(t),y:n+e*Math.sin(t)}}function rr(e,t,s,n,i,a){const{x:r,y:o,startAngle:l,pixelMargin:c,innerRadius:u}=t,h=Math.max(t.outerRadius+n+s-c,0),f=u>0?u+n+s+c:0;let v=0;const p=i-l;if(n){const V=u>0?u-n:0,J=h>0?h-n:0,st=(V+J)/2,_t=st!==0?p*st/(st+n):p;v=(p-_t)/2}const m=Math.max(.001,p*h-s/he)/h,b=(p-m)/2,x=l+b+v,S=i-b-v,{outerStart:k,outerEnd:w,innerStart:$,innerEnd:A}=Py(t,f,h,S-x),z=h-k,C=h-w,E=x+k/z,T=S-w/C,O=f+$,F=f+A,Z=x+$/O,Y=S-A/F;if(e.beginPath(),a){const V=(E+T)/2;if(e.arc(r,o,h,E,V),e.arc(r,o,h,V,T),w>0){const gt=si(C,T,r,o);e.arc(gt.x,gt.y,w,T,S+Fe)}const J=si(F,S,r,o);if(e.lineTo(J.x,J.y),A>0){const gt=si(F,Y,r,o);e.arc(gt.x,gt.y,A,S+Fe,Y+Math.PI)}const st=(S-A/f+(x+$/f))/2;if(e.arc(r,o,f,S-A/f,st,!0),e.arc(r,o,f,st,x+$/f,!0),$>0){const gt=si(O,Z,r,o);e.arc(gt.x,gt.y,$,Z+Math.PI,x-Fe)}const _t=si(z,x,r,o);if(e.lineTo(_t.x,_t.y),k>0){const gt=si(z,E,r,o);e.arc(gt.x,gt.y,k,x-Fe,E)}}else{e.moveTo(r,o);const V=Math.cos(E)*h+r,J=Math.sin(E)*h+o;e.lineTo(V,J);const st=Math.cos(T)*h+r,_t=Math.sin(T)*h+o;e.lineTo(st,_t)}e.closePath()}function Ay(e,t,s,n,i){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){rr(e,t,s,n,l,i);for(let c=0;c<a;++c)e.fill();isNaN(o)||(l=r+(o%Pe||Pe))}return rr(e,t,s,n,l,i),e.fill(),l}function Cy(e,t,s,n,i){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:h,borderDashOffset:f,borderRadius:v}=l,p=l.borderAlign==="inner";if(!c)return;e.setLineDash(h||[]),e.lineDashOffset=f,p?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let m=t.endAngle;if(a){rr(e,t,s,n,m,i);for(let b=0;b<a;++b)e.stroke();isNaN(o)||(m=r+(o%Pe||Pe))}p&&Sy(e,t,m),l.selfJoin&&m-r>=he&&v===0&&u!=="miter"&&$y(e,t,m),a||(rr(e,t,s,n,m,i),e.stroke())}class zy extends cn{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,s,n){const i=this.getProps(["x","y"],n),{angle:a,distance:r}=Eu(i,{x:t,y:s}),{startAngle:o,endAngle:l,innerRadius:c,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,v=Yt(h,l-o),p=sa(a,o,l)&&o!==l,m=v>=Pe||p,b=en(r,c+f,u+f);return m&&b}getCenterPoint(t){const{x:s,y:n,startAngle:i,endAngle:a,innerRadius:r,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,u=(i+a)/2,h=(r+o+c+l)/2;return{x:s+Math.cos(u)*h,y:n+Math.sin(u)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:s,circumference:n}=this,i=(s.offset||0)/4,a=(s.spacing||0)/2,r=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>Pe?Math.floor(n/Pe):0,n===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const o=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(o)*i,Math.sin(o)*i);const l=1-Math.sin(Math.min(he,n||0)),c=i*l;t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,Ay(t,this,c,a,r),Cy(t,this,c,a,r),t.restore()}}function fh(e,t,s=t){e.lineCap=Yt(s.borderCapStyle,t.borderCapStyle),e.setLineDash(Yt(s.borderDash,t.borderDash)),e.lineDashOffset=Yt(s.borderDashOffset,t.borderDashOffset),e.lineJoin=Yt(s.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Yt(s.borderWidth,t.borderWidth),e.strokeStyle=Yt(s.borderColor,t.borderColor)}function Ty(e,t,s){e.lineTo(s.x,s.y)}function Ey(e){return e.stepped?Y1:e.tension||e.cubicInterpolationMode==="monotone"?K1:Ty}function vh(e,t,s={}){const n=e.length,{start:i=0,end:a=n-1}=s,{start:r,end:o}=t,l=Math.max(i,r),c=Math.min(a,o),u=i<r&&a<r||i>o&&a>o;return{count:n,start:l,loop:t.loop,ilen:c<l&&!u?n+c-l:c-l}}function Dy(e,t,s,n){const{points:i,options:a}=t,{count:r,start:o,loop:l,ilen:c}=vh(i,s,n),u=Ey(a);let{move:h=!0,reverse:f}=n||{},v,p,m;for(v=0;v<=c;++v)p=i[(o+(f?c-v:v))%r],!p.skip&&(h?(e.moveTo(p.x,p.y),h=!1):u(e,m,p,f,a.stepped),m=p);return l&&(p=i[(o+(f?c:0))%r],u(e,m,p,f,a.stepped)),!!l}function Oy(e,t,s,n){const i=t.points,{count:a,start:r,ilen:o}=vh(i,s,n),{move:l=!0,reverse:c}=n||{};let u=0,h=0,f,v,p,m,b,x;const S=w=>(r+(c?o-w:w))%a,k=()=>{m!==b&&(e.lineTo(u,b),e.lineTo(u,m),e.lineTo(u,x))};for(l&&(v=i[S(0)],e.moveTo(v.x,v.y)),f=0;f<=o;++f){if(v=i[S(f)],v.skip)continue;const w=v.x,$=v.y,A=w|0;A===p?($<m?m=$:$>b&&(b=$),u=(h*u+w)/++h):(k(),e.lineTo(w,$),p=A,h=0,m=b=$),x=$}k()}function xo(e){const t=e.options,s=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!s?Oy:Dy}function Ry(e){return e.stepped?Mb:e.tension||e.cubicInterpolationMode==="monotone"?Pb:In}function Ly(e,t,s,n){let i=t._path;i||(i=t._path=new Path2D,t.path(i,s,n)&&i.closePath()),fh(e,t.options),e.stroke(i)}function Iy(e,t,s,n){const{segments:i,options:a}=t,r=xo(t);for(const o of i)fh(e,a,o.style),e.beginPath(),r(e,t,o,{start:s,end:s+n-1})&&e.closePath(),e.stroke()}const jy=typeof Path2D=="function";function Ny(e,t,s,n){jy&&!t.options.segment?Ly(e,t,s,n):Iy(e,t,s,n)}class wr extends cn{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,s){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const i=n.spanGaps?this._loop:this._fullLoop;_b(this._points,n,t,i,s),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Db(this,this.options.segment))}first(){const t=this.segments,s=this.points;return t.length&&s[t[0].start]}last(){const t=this.segments,s=this.points,n=t.length;return n&&s[t[n-1].end]}interpolate(t,s){const n=this.options,i=t[s],a=this.points,r=Qu(this,{property:s,start:i,end:i});if(!r.length)return;const o=[],l=Ry(n);let c,u;for(c=0,u=r.length;c<u;++c){const{start:h,end:f}=r[c],v=a[h],p=a[f];if(v===p){o.push(v);continue}const m=Math.abs((i-v[s])/(p[s]-v[s])),b=l(v,p,m,n.stepped);b[s]=t[s],o.push(b)}return o.length===1?o[0]:o}pathSegment(t,s,n){return xo(this)(t,this,s,n)}path(t,s,n){const i=this.segments,a=xo(this);let r=this._loop;s=s||0,n=n||this.points.length-s;for(const o of i)r&=a(t,this,o,{start:s,end:s+n-1});return!!r}draw(t,s,n,i){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Ny(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Ic(e,t,s,n){const i=e.options,{[s]:a}=e.getProps([s],n);return Math.abs(t-a)<i.radius+i.hitRadius}class Fy extends cn{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,s,n){const i=this.options,{x:a,y:r}=this.getProps(["x","y"],n);return Math.pow(t-a,2)+Math.pow(s-r,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,s){return Ic(this,t,"x",s)}inYRange(t,s){return Ic(this,t,"y",s)}getCenterPoint(t){const{x:s,y:n}=this.getProps(["x","y"],t);return{x:s,y:n}}size(t){t=t||this.options||{};let s=t.radius||0;s=Math.max(s,s&&t.hoverRadius||0);const n=s&&t.borderWidth||0;return(s+n)*2}draw(t,s){const n=this.options;this.skip||n.radius<.1||!nn(this,s,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,mo(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function ph(e,t){const{x:s,y:n,base:i,width:a,height:r}=e.getProps(["x","y","base","width","height"],t);let o,l,c,u,h;return e.horizontal?(h=r/2,o=Math.min(s,i),l=Math.max(s,i),c=n-h,u=n+h):(h=a/2,o=s-h,l=s+h,c=Math.min(n,i),u=Math.max(n,i)),{left:o,top:c,right:l,bottom:u}}function mn(e,t,s,n){return e?0:Xe(t,s,n)}function By(e,t,s){const n=e.options.borderWidth,i=e.borderSkipped,a=Bu(n);return{t:mn(i.top,a.top,0,s),r:mn(i.right,a.right,0,t),b:mn(i.bottom,a.bottom,0,s),l:mn(i.left,a.left,0,t)}}function qy(e,t,s){const{enableBorderRadius:n}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,a=Vn(i),r=Math.min(t,s),o=e.borderSkipped,l=n||re(i);return{topLeft:mn(!l||o.top||o.left,a.topLeft,0,r),topRight:mn(!l||o.top||o.right,a.topRight,0,r),bottomLeft:mn(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:mn(!l||o.bottom||o.right,a.bottomRight,0,r)}}function Vy(e){const t=ph(e),s=t.right-t.left,n=t.bottom-t.top,i=By(e,s/2,n/2),a=qy(e,s/2,n/2);return{outer:{x:t.left,y:t.top,w:s,h:n,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:s-i.l-i.r,h:n-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Yr(e,t,s,n){const i=t===null,a=s===null,o=e&&!(i&&a)&&ph(e,n);return o&&(i||en(t,o.left,o.right))&&(a||en(s,o.top,o.bottom))}function Hy(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Wy(e,t){e.rect(t.x,t.y,t.w,t.h)}function Kr(e,t,s={}){const n=e.x!==s.x?-t:0,i=e.y!==s.y?-t:0,a=(e.x+e.w!==s.x+s.w?t:0)-n,r=(e.y+e.h!==s.y+s.h?t:0)-i;return{x:e.x+n,y:e.y+i,w:e.w+a,h:e.h+r,radius:e.radius}}class Uy extends cn{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:s,options:{borderColor:n,backgroundColor:i}}=this,{inner:a,outer:r}=Vy(this),o=Hy(r.radius)?na:Wy;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,Kr(r,s,a)),t.clip(),o(t,Kr(a,-s,r)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),o(t,Kr(a,s)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,s,n){return Yr(this,t,s,n)}inXRange(t,s){return Yr(this,t,null,s)}inYRange(t,s){return Yr(this,null,t,s)}getCenterPoint(t){const{x:s,y:n,base:i,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(s+i)/2:s,y:a?n:(n+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var Yy=Object.freeze({__proto__:null,ArcElement:zy,BarElement:Uy,LineElement:wr,PointElement:Fy});const ko=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],jc=ko.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function gh(e){return ko[e%ko.length]}function mh(e){return jc[e%jc.length]}function Ky(e,t){return e.borderColor=gh(t),e.backgroundColor=mh(t),++t}function Xy(e,t){return e.backgroundColor=e.data.map(()=>gh(t++)),t}function Gy(e,t){return e.backgroundColor=e.data.map(()=>mh(t++)),t}function Jy(e){let t=0;return(s,n)=>{const i=e.getDatasetMeta(n).controller;i instanceof dl?t=Xy(s,t):i instanceof nh?t=Gy(s,t):i&&(t=Ky(s,t))}}function Nc(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Qy(e){return e&&(e.borderColor||e.backgroundColor)}function Zy(){return ze.borderColor!=="rgba(0,0,0,0.1)"||ze.backgroundColor!=="rgba(0,0,0,0.1)"}var tx={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,s){if(!s.enabled)return;const{data:{datasets:n},options:i}=e.config,{elements:a}=i,r=Nc(n)||Qy(i)||a&&Nc(a)||Zy();if(!s.forceOverride&&r)return;const o=Jy(e);n.forEach(o)}};function ex(e,t,s,n,i){const a=i.samples||n;if(a>=s)return e.slice(t,t+s);const r=[],o=(s-2)/(a-2);let l=0;const c=t+s-1;let u=t,h,f,v,p,m;for(r[l++]=e[u],h=0;h<a-2;h++){let b=0,x=0,S;const k=Math.floor((h+1)*o)+1+t,w=Math.min(Math.floor((h+2)*o)+1,s)+t,$=w-k;for(S=k;S<w;S++)b+=e[S].x,x+=e[S].y;b/=$,x/=$;const A=Math.floor(h*o)+1+t,z=Math.min(Math.floor((h+1)*o)+1,s)+t,{x:C,y:E}=e[u];for(v=p=-1,S=A;S<z;S++)p=.5*Math.abs((C-b)*(e[S].y-E)-(C-e[S].x)*(x-E)),p>v&&(v=p,f=e[S],m=S);r[l++]=f,u=m}return r[l++]=e[c],r}function sx(e,t,s,n){let i=0,a=0,r,o,l,c,u,h,f,v,p,m;const b=[],x=t+s-1,S=e[t].x,w=e[x].x-S;for(r=t;r<t+s;++r){o=e[r],l=(o.x-S)/w*n,c=o.y;const $=l|0;if($===u)c<p?(p=c,h=r):c>m&&(m=c,f=r),i=(a*i+o.x)/++a;else{const A=r-1;if(!ne(h)&&!ne(f)){const z=Math.min(h,f),C=Math.max(h,f);z!==v&&z!==A&&b.push({...e[z],x:i}),C!==v&&C!==A&&b.push({...e[C],x:i})}r>0&&A!==v&&b.push(e[A]),b.push(o),u=$,a=0,p=m=c,h=f=v=r}}return b}function _h(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Fc(e){e.data.datasets.forEach(t=>{_h(t)})}function nx(e,t){const s=t.length;let n=0,i;const{iScale:a}=e,{min:r,max:o,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(n=Xe(sn(t,a.axis,r).lo,0,s-1)),c?i=Xe(sn(t,a.axis,o).hi+1,n,s)-n:i=s-n,{start:n,count:i}}var ix={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,s)=>{if(!s.enabled){Fc(e);return}const n=e.width;e.data.datasets.forEach((i,a)=>{const{_data:r,indexAxis:o}=i,l=e.getDatasetMeta(a),c=r||i.data;if(ji([o,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:h,count:f}=nx(l,c);const v=s.threshold||4*n;if(f<=v){_h(i);return}ne(r)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let p;switch(s.algorithm){case"lttb":p=ex(c,h,f,n,s);break;case"min-max":p=sx(c,h,f,n);break;default:throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`)}i._decimated=p})},destroy(e){Fc(e)}};function ax(e,t,s){const n=e.segments,i=e.points,a=t.points,r=[];for(const o of n){let{start:l,end:c}=o;c=$r(l,c,i);const u=wo(s,i[l],i[c],o.loop);if(!t.segments){r.push({source:o,target:u,start:i[l],end:i[c]});continue}const h=Qu(t,u);for(const f of h){const v=wo(s,a[f.start],a[f.end],f.loop),p=Ju(o,i,v);for(const m of p)r.push({source:m,target:f,start:{[s]:Bc(u,v,"start",Math.max)},end:{[s]:Bc(u,v,"end",Math.min)}})}}return r}function wo(e,t,s,n){if(n)return;let i=t[e],a=s[e];return e==="angle"&&(i=ss(i),a=ss(a)),{property:e,start:i,end:a}}function rx(e,t){const{x:s=null,y:n=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=$r(r,o,i);const l=i[r],c=i[o];n!==null?(a.push({x:l.x,y:n}),a.push({x:c.x,y:n})):s!==null&&(a.push({x:s,y:l.y}),a.push({x:s,y:c.y}))}),a}function $r(e,t,s){for(;t>e;t--){const n=s[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function Bc(e,t,s,n){return e&&t?n(e[s],t[s]):e?e[s]:t?t[s]:0}function bh(e,t){let s=[],n=!1;return Ce(e)?(n=!0,s=e):s=rx(e,t),s.length?new wr({points:s,options:{tension:0},_loop:n,_fullLoop:n}):null}function qc(e){return e&&e.fill!==!1}function ox(e,t,s){let i=e[t].fill;const a=[t];let r;if(!s)return i;for(;i!==!1&&a.indexOf(i)===-1;){if(!je(i))return i;if(r=e[i],!r)return!1;if(r.visible)return i;a.push(i),i=r.fill}return!1}function lx(e,t,s){const n=hx(e);if(re(n))return isNaN(n.value)?!1:n;let i=parseFloat(n);return je(i)&&Math.floor(i)===i?cx(n[0],t,i,s):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function cx(e,t,s,n){return(e==="-"||e==="+")&&(s=t+s),s===t||s<0||s>=n?!1:s}function dx(e,t){let s=null;return e==="start"?s=t.bottom:e==="end"?s=t.top:re(e)?s=t.getPixelForValue(e.value):t.getBasePixel&&(s=t.getBasePixel()),s}function ux(e,t,s){let n;return e==="start"?n=s:e==="end"?n=t.options.reverse?t.min:t.max:re(e)?n=e.value:n=t.getBaseValue(),n}function hx(e){const t=e.options,s=t.fill;let n=Yt(s&&s.target,s);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function fx(e){const{scale:t,index:s,line:n}=e,i=[],a=n.segments,r=n.points,o=vx(t,s);o.push(bh({x:null,y:t.bottom},n));for(let l=0;l<a.length;l++){const c=a[l];for(let u=c.start;u<=c.end;u++)px(i,r[u],o)}return new wr({points:i,options:{}})}function vx(e,t){const s=[],n=e.getMatchingVisibleMetas("line");for(let i=0;i<n.length;i++){const a=n[i];if(a.index===t)break;a.hidden||s.unshift(a.dataset)}return s}function px(e,t,s){const n=[];for(let i=0;i<s.length;i++){const a=s[i],{first:r,last:o,point:l}=gx(a,t,"x");if(!(!l||r&&o)){if(r)n.unshift(l);else if(e.push(l),!o)break}}e.push(...n)}function gx(e,t,s){const n=e.interpolate(t,s);if(!n)return{};const i=n[s],a=e.segments,r=e.points;let o=!1,l=!1;for(let c=0;c<a.length;c++){const u=a[c],h=r[u.start][s],f=r[u.end][s];if(en(i,h,f)){o=i===h,l=i===f;break}}return{first:o,last:l,point:n}}class yh{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,s,n){const{x:i,y:a,radius:r}=this;return s=s||{start:0,end:Pe},t.arc(i,a,r,s.end,s.start,!0),!n.bounds}interpolate(t){const{x:s,y:n,radius:i}=this,a=t.angle;return{x:s+Math.cos(a)*i,y:n+Math.sin(a)*i,angle:a}}}function mx(e){const{chart:t,fill:s,line:n}=e;if(je(s))return _x(t,s);if(s==="stack")return fx(e);if(s==="shape")return!0;const i=bx(e);return i instanceof yh?i:bh(i,n)}function _x(e,t){const s=e.getDatasetMeta(t);return s&&e.isDatasetVisible(t)?s.dataset:null}function bx(e){return(e.scale||{}).getPointPositionForValue?xx(e):yx(e)}function yx(e){const{scale:t={},fill:s}=e,n=dx(s,t);if(je(n)){const i=t.isHorizontal();return{x:i?n:null,y:i?null:n}}return null}function xx(e){const{scale:t,fill:s}=e,n=t.options,i=t.getLabels().length,a=n.reverse?t.max:t.min,r=ux(s,t,a),o=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,a);return new yh({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<i;++l)o.push(t.getPointPositionForValue(l,r));return o}function Xr(e,t,s){const n=mx(t),{chart:i,index:a,line:r,scale:o,axis:l}=t,c=r.options,u=c.fill,h=c.backgroundColor,{above:f=h,below:v=h}=u||{},p=i.getDatasetMeta(a),m=Zu(i,p);n&&r.points.length&&(br(e,s),kx(e,{line:r,target:n,above:f,below:v,area:s,scale:o,axis:l,clip:m}),yr(e))}function kx(e,t){const{line:s,target:n,above:i,below:a,area:r,scale:o,clip:l}=t,c=s._loop?"angle":t.axis;e.save();let u=a;a!==i&&(c==="x"?(Vc(e,n,r.top),Gr(e,{line:s,target:n,color:i,scale:o,property:c,clip:l}),e.restore(),e.save(),Vc(e,n,r.bottom)):c==="y"&&(Hc(e,n,r.left),Gr(e,{line:s,target:n,color:a,scale:o,property:c,clip:l}),e.restore(),e.save(),Hc(e,n,r.right),u=i)),Gr(e,{line:s,target:n,color:u,scale:o,property:c,clip:l}),e.restore()}function Vc(e,t,s){const{segments:n,points:i}=t;let a=!0,r=!1;e.beginPath();for(const o of n){const{start:l,end:c}=o,u=i[l],h=i[$r(l,c,i)];a?(e.moveTo(u.x,u.y),a=!1):(e.lineTo(u.x,s),e.lineTo(u.x,u.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(h.x,s)}e.lineTo(t.first().x,s),e.closePath(),e.clip()}function Hc(e,t,s){const{segments:n,points:i}=t;let a=!0,r=!1;e.beginPath();for(const o of n){const{start:l,end:c}=o,u=i[l],h=i[$r(l,c,i)];a?(e.moveTo(u.x,u.y),a=!1):(e.lineTo(s,u.y),e.lineTo(u.x,u.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(s,h.y)}e.lineTo(s,t.first().y),e.closePath(),e.clip()}function Gr(e,t){const{line:s,target:n,property:i,color:a,scale:r,clip:o}=t,l=ax(s,n,i);for(const{source:c,target:u,start:h,end:f}of l){const{style:{backgroundColor:v=a}={}}=c,p=n!==!0;e.save(),e.fillStyle=v,wx(e,r,o,p&&wo(i,h,f)),e.beginPath();const m=!!s.pathSegment(e,c);let b;if(p){m?e.closePath():Wc(e,n,f,i);const x=!!n.pathSegment(e,u,{move:m,reverse:!0});b=m&&x,b||Wc(e,n,h,i)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function wx(e,t,s,n){const i=t.chart.chartArea,{property:a,start:r,end:o}=n||{};if(a==="x"||a==="y"){let l,c,u,h;a==="x"?(l=r,c=i.top,u=o,h=i.bottom):(l=i.left,c=r,u=i.right,h=o),e.beginPath(),s&&(l=Math.max(l,s.left),u=Math.min(u,s.right),c=Math.max(c,s.top),h=Math.min(h,s.bottom)),e.rect(l,c,u-l,h-c),e.clip()}}function Wc(e,t,s,n){const i=t.interpolate(s,n);i&&e.lineTo(i.x,i.y)}var $x={id:"filler",afterDatasetsUpdate(e,t,s){const n=(e.data.datasets||[]).length,i=[];let a,r,o,l;for(r=0;r<n;++r)a=e.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof wr&&(l={visible:e.isDatasetVisible(r),index:r,fill:lx(o,r,n),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,i.push(l);for(r=0;r<n;++r)l=i[r],!(!l||l.fill===!1)&&(l.fill=ox(i,r,s.propagate))},beforeDraw(e,t,s){const n=s.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let r=i.length-1;r>=0;--r){const o=i[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),n&&o.fill&&Xr(e.ctx,o,a))}},beforeDatasetsDraw(e,t,s){if(s.drawTime!=="beforeDatasetsDraw")return;const n=e.getSortedVisibleDatasetMetas();for(let i=n.length-1;i>=0;--i){const a=n[i].$filler;qc(a)&&Xr(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,t,s){const n=t.meta.$filler;!qc(n)||s.drawTime!=="beforeDatasetDraw"||Xr(e.ctx,n,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Uc=(e,t)=>{let{boxHeight:s=t,boxWidth:n=t}=e;return e.usePointStyle&&(s=Math.min(s,t),n=e.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:s,itemHeight:Math.max(t,s)}},Sx=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Yc extends cn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s,n){this.maxWidth=t,this.maxHeight=s,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let s=$e(t.generateLabels,[this.chart],this)||[];t.filter&&(s=s.filter(n=>t.filter(n,this.chart.data))),t.sort&&(s=s.sort((n,i)=>t.sort(n,i,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:t,ctx:s}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,i=qe(n.font),a=i.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=Uc(n,a);let c,u;s.font=i.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(r,a,o,l)+10):(u=this.maxHeight,c=this._fitCols(r,i,o,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,s,n,i){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=i+o;let h=t;a.textAlign="left",a.textBaseline="middle";let f=-1,v=-u;return this.legendItems.forEach((p,m)=>{const b=n+s/2+a.measureText(p.text).width;(m===0||c[c.length-1]+b+2*o>r)&&(h+=u,c[c.length-(m>0?0:1)]=0,v+=u,f++),l[m]={left:0,top:v,row:f,width:b,height:i},c[c.length-1]+=b+o}),h}_fitCols(t,s,n,i){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=r-t;let h=o,f=0,v=0,p=0,m=0;return this.legendItems.forEach((b,x)=>{const{itemWidth:S,itemHeight:k}=Mx(n,s,a,b,i);x>0&&v+k+2*o>u&&(h+=f+o,c.push({width:f,height:v}),p+=f+o,m++,f=v=0),l[x]={left:p,top:v,col:m,width:S,height:k},f=Math.max(f,S),v+=k+o}),h+=f,c.push({width:f,height:v}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:n,labels:{padding:i},rtl:a}}=this,r=ai(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=es(n,this.left+i,this.right-this.lineWidths[o]);for(const c of s)o!==c.row&&(o=c.row,l=es(n,this.left+i,this.right-this.lineWidths[o])),c.top+=this.top+t+i,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+i}else{let o=0,l=es(n,this.top+t+i,this.bottom-this.columnSizes[o].height);for(const c of s)c.col!==o&&(o=c.col,l=es(n,this.top+t+i,this.bottom-this.columnSizes[o].height)),c.top=l,c.left+=this.left+i,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;br(t,this),this._draw(),yr(t)}}_draw(){const{options:t,columnSizes:s,lineWidths:n,ctx:i}=this,{align:a,labels:r}=t,o=ze.color,l=ai(t.rtl,this.left,this.width),c=qe(r.font),{padding:u}=r,h=c.size,f=h/2;let v;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:p,boxHeight:m,itemHeight:b}=Uc(r,h),x=function(A,z,C){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;i.save();const E=Yt(C.lineWidth,1);if(i.fillStyle=Yt(C.fillStyle,o),i.lineCap=Yt(C.lineCap,"butt"),i.lineDashOffset=Yt(C.lineDashOffset,0),i.lineJoin=Yt(C.lineJoin,"miter"),i.lineWidth=E,i.strokeStyle=Yt(C.strokeStyle,o),i.setLineDash(Yt(C.lineDash,[])),r.usePointStyle){const T={radius:m*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:E},O=l.xPlus(A,p/2),F=z+f;Fu(i,T,O,F,r.pointStyleWidth&&p)}else{const T=z+Math.max((h-m)/2,0),O=l.leftForLtr(A,p),F=Vn(C.borderRadius);i.beginPath(),Object.values(F).some(Z=>Z!==0)?na(i,{x:O,y:T,w:p,h:m,radius:F}):i.rect(O,T,p,m),i.fill(),E!==0&&i.stroke()}i.restore()},S=function(A,z,C){Kn(i,C.text,A,z+b/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},k=this.isHorizontal(),w=this._computeTitleHeight();k?v={x:es(a,this.left+u,this.right-n[0]),y:this.top+u+w,line:0}:v={x:this.left+u,y:es(a,this.top+w+u,this.bottom-s[0].height),line:0},Ku(this.ctx,t.textDirection);const $=b+u;this.legendItems.forEach((A,z)=>{i.strokeStyle=A.fontColor,i.fillStyle=A.fontColor;const C=i.measureText(A.text).width,E=l.textAlign(A.textAlign||(A.textAlign=r.textAlign)),T=p+f+C;let O=v.x,F=v.y;l.setWidth(this.width),k?z>0&&O+T+u>this.right&&(F=v.y+=$,v.line++,O=v.x=es(a,this.left+u,this.right-n[v.line])):z>0&&F+$>this.bottom&&(O=v.x=O+s[v.line].width+u,v.line++,F=v.y=es(a,this.top+w+u,this.bottom-s[v.line].height));const Z=l.x(O);if(x(Z,F,A),O=L1(E,O+p+f,k?O+T:this.right,t.rtl),S(l.x(O),F,A),k)v.x+=T+u;else if(typeof A.text!="string"){const Y=c.lineHeight;v.y+=xh(A,Y)+u}else v.y+=$}),Xu(this.ctx,t.textDirection)}drawTitle(){const t=this.options,s=t.title,n=qe(s.font),i=is(s.padding);if(!s.display)return;const a=ai(t.rtl,this.left,this.width),r=this.ctx,o=s.position,l=n.size/2,c=i.top+l;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,h=es(t.align,h,this.right-f);else{const p=this.columnSizes.reduce((m,b)=>Math.max(m,b.height),0);u=c+es(t.align,this.top,this.bottom-p-t.labels.padding-this._computeTitleHeight())}const v=es(o,h,h+f);r.textAlign=a.textAlign(sl(o)),r.textBaseline="middle",r.strokeStyle=s.color,r.fillStyle=s.color,r.font=n.string,Kn(r,s.text,v,u,n)}_computeTitleHeight(){const t=this.options.title,s=qe(t.font),n=is(t.padding);return t.display?s.lineHeight+n.height:0}_getLegendItemAt(t,s){let n,i,a;if(en(t,this.left,this.right)&&en(s,this.top,this.bottom)){for(a=this.legendHitBoxes,n=0;n<a.length;++n)if(i=a[n],en(t,i.left,i.left+i.width)&&en(s,i.top,i.top+i.height))return this.legendItems[n]}return null}handleEvent(t){const s=this.options;if(!Cx(t.type,s))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,a=Sx(i,n);i&&!a&&$e(s.onLeave,[t,i,this],this),this._hoveredItem=n,n&&!a&&$e(s.onHover,[t,n,this],this)}else n&&$e(s.onClick,[t,n,this],this)}}function Mx(e,t,s,n,i){const a=Px(n,e,t,s),r=Ax(i,n,t.lineHeight);return{itemWidth:a,itemHeight:r}}function Px(e,t,s,n){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((a,r)=>a.length>r.length?a:r)),t+s.size/2+n.measureText(i).width}function Ax(e,t,s){let n=e;return typeof t.text!="string"&&(n=xh(t,s)),n}function xh(e,t){const s=e.text?e.text.length:0;return t*s}function Cx(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var zx={id:"legend",_element:Yc,start(e,t,s){const n=e.legend=new Yc({ctx:e.ctx,options:s,chart:e});ns.configure(e,n,s),ns.addBox(e,n)},stop(e){ns.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,s){const n=e.legend;ns.configure(e,n,s),n.options=s},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,s){const n=t.datasetIndex,i=s.chart;i.isDatasetVisible(n)?(i.hide(n),t.hidden=!0):(i.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:s,pointStyle:n,textAlign:i,color:a,useBorderRadius:r,borderRadius:o}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(s?0:void 0),u=is(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:r&&(o||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class hl extends cn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=s;const i=Ce(n.text)?n.text.length:1;this._padding=is(n.padding);const a=i*qe(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:s,left:n,bottom:i,right:a,options:r}=this,o=r.align;let l=0,c,u,h;return this.isHorizontal()?(u=es(o,n,a),h=s+t,c=a-n):(r.position==="left"?(u=n+t,h=es(o,i,s),l=he*-.5):(u=a-t,h=es(o,s,i),l=he*.5),c=i-s),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const t=this.ctx,s=this.options;if(!s.display)return;const n=qe(s.font),a=n.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:c}=this._drawArgs(a);Kn(t,s.text,0,0,n,{color:s.color,maxWidth:l,rotation:c,textAlign:sl(s.align),textBaseline:"middle",translation:[r,o]})}}function Tx(e,t){const s=new hl({ctx:e.ctx,options:t,chart:e});ns.configure(e,s,t),ns.addBox(e,s),e.titleBlock=s}var Ex={id:"title",_element:hl,start(e,t,s){Tx(e,s)},stop(e){const t=e.titleBlock;ns.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,s){const n=e.titleBlock;ns.configure(e,n,s),n.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ra=new WeakMap;var Dx={id:"subtitle",start(e,t,s){const n=new hl({ctx:e.ctx,options:s,chart:e});ns.configure(e,n,s),ns.addBox(e,n),Ra.set(e,n)},stop(e){ns.removeBox(e,Ra.get(e)),Ra.delete(e)},beforeUpdate(e,t,s){const n=Ra.get(e);ns.configure(e,n,s),n.options=s},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fi={average(e){if(!e.length)return!1;let t,s,n=new Set,i=0,a=0;for(t=0,s=e.length;t<s;++t){const o=e[t].element;if(o&&o.hasValue()){const l=o.tooltipPosition();n.add(l.x),i+=l.y,++a}}return a===0||n.size===0?!1:{x:[...n].reduce((o,l)=>o+l)/n.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let s=t.x,n=t.y,i=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=e.length;a<r;++a){const l=e[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=po(t,c);u<i&&(i=u,o=l)}}if(o){const l=o.tooltipPosition();s=l.x,n=l.y}return{x:s,y:n}}};function Ns(e,t){return t&&(Ce(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Gs(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Ox(e,t){const{element:s,datasetIndex:n,index:i}=t,a=e.getDatasetMeta(n).controller,{label:r,value:o}=a.getLabelAndValue(i);return{chart:e,label:r,parsed:a.getParsed(i),raw:e.data.datasets[n].data[i],formattedValue:o,dataset:a.getDataset(),dataIndex:i,datasetIndex:n,element:s}}function Kc(e,t){const s=e.chart.ctx,{body:n,footer:i,title:a}=e,{boxWidth:r,boxHeight:o}=t,l=qe(t.bodyFont),c=qe(t.titleFont),u=qe(t.footerFont),h=a.length,f=i.length,v=n.length,p=is(t.padding);let m=p.height,b=0,x=n.reduce((w,$)=>w+$.before.length+$.lines.length+$.after.length,0);if(x+=e.beforeBody.length+e.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),x){const w=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;m+=v*w+(x-v)*l.lineHeight+(x-1)*t.bodySpacing}f&&(m+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let S=0;const k=function(w){b=Math.max(b,s.measureText(w).width+S)};return s.save(),s.font=c.string,be(e.title,k),s.font=l.string,be(e.beforeBody.concat(e.afterBody),k),S=t.displayColors?r+2+t.boxPadding:0,be(n,w=>{be(w.before,k),be(w.lines,k),be(w.after,k)}),S=0,s.font=u.string,be(e.footer,k),s.restore(),b+=p.width,{width:b,height:m}}function Rx(e,t){const{y:s,height:n}=t;return s<n/2?"top":s>e.height-n/2?"bottom":"center"}function Lx(e,t,s,n){const{x:i,width:a}=n,r=s.caretSize+s.caretPadding;if(e==="left"&&i+a+r>t.width||e==="right"&&i-a-r<0)return!0}function Ix(e,t,s,n){const{x:i,width:a}=s,{width:r,chartArea:{left:o,right:l}}=e;let c="center";return n==="center"?c=i<=(o+l)/2?"left":"right":i<=a/2?c="left":i>=r-a/2&&(c="right"),Lx(c,e,t,s)&&(c="center"),c}function Xc(e,t,s){const n=s.yAlign||t.yAlign||Rx(e,s);return{xAlign:s.xAlign||t.xAlign||Ix(e,t,s,n),yAlign:n}}function jx(e,t){let{x:s,width:n}=e;return t==="right"?s-=n:t==="center"&&(s-=n/2),s}function Nx(e,t,s){let{y:n,height:i}=e;return t==="top"?n+=s:t==="bottom"?n-=i+s:n-=i/2,n}function Gc(e,t,s,n){const{caretSize:i,caretPadding:a,cornerRadius:r}=e,{xAlign:o,yAlign:l}=s,c=i+a,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:v}=Vn(r);let p=jx(t,o);const m=Nx(t,l,c);return l==="center"?o==="left"?p+=c:o==="right"&&(p-=c):o==="left"?p-=Math.max(u,f)+i:o==="right"&&(p+=Math.max(h,v)+i),{x:Xe(p,0,n.width-t.width),y:Xe(m,0,n.height-t.height)}}function La(e,t,s){const n=is(s.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-n.right:e.x+n.left}function Jc(e){return Ns([],Gs(e))}function Fx(e,t,s){return An(e,{tooltip:t,tooltipItems:s,type:"tooltip"})}function Qc(e,t){const s=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return s?e.override(s):e}const kh={beforeTitle:Ks,title(e){if(e.length>0){const t=e[0],s=t.chart.data.labels,n=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return s[t.dataIndex]}return""},afterTitle:Ks,beforeBody:Ks,beforeLabel:Ks,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const s=e.formattedValue;return ne(s)||(t+=s),t},labelColor(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:Ks,afterBody:Ks,beforeFooter:Ks,footer:Ks,afterFooter:Ks};function cs(e,t,s,n){const i=e[t].call(s,n);return typeof i>"u"?kh[t].call(s,n):i}class Zc extends cn{static positioners=Fi;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const s=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&s.options.animation&&n.animations,a=new th(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Fx(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,s){const{callbacks:n}=s,i=cs(n,"beforeTitle",this,t),a=cs(n,"title",this,t),r=cs(n,"afterTitle",this,t);let o=[];return o=Ns(o,Gs(i)),o=Ns(o,Gs(a)),o=Ns(o,Gs(r)),o}getBeforeBody(t,s){return Jc(cs(s.callbacks,"beforeBody",this,t))}getBody(t,s){const{callbacks:n}=s,i=[];return be(t,a=>{const r={before:[],lines:[],after:[]},o=Qc(n,a);Ns(r.before,Gs(cs(o,"beforeLabel",this,a))),Ns(r.lines,cs(o,"label",this,a)),Ns(r.after,Gs(cs(o,"afterLabel",this,a))),i.push(r)}),i}getAfterBody(t,s){return Jc(cs(s.callbacks,"afterBody",this,t))}getFooter(t,s){const{callbacks:n}=s,i=cs(n,"beforeFooter",this,t),a=cs(n,"footer",this,t),r=cs(n,"afterFooter",this,t);let o=[];return o=Ns(o,Gs(i)),o=Ns(o,Gs(a)),o=Ns(o,Gs(r)),o}_createItems(t){const s=this._active,n=this.chart.data,i=[],a=[],r=[];let o=[],l,c;for(l=0,c=s.length;l<c;++l)o.push(Ox(this.chart,s[l]));return t.filter&&(o=o.filter((u,h,f)=>t.filter(u,h,f,n))),t.itemSort&&(o=o.sort((u,h)=>t.itemSort(u,h,n))),be(o,u=>{const h=Qc(t.callbacks,u);i.push(cs(h,"labelColor",this,u)),a.push(cs(h,"labelPointStyle",this,u)),r.push(cs(h,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,s){const n=this.options.setContext(this.getContext()),i=this._active;let a,r=[];if(!i.length)this.opacity!==0&&(a={opacity:0});else{const o=Fi[n.position].call(this,i,this._eventPosition);r=this._createItems(n),this.title=this.getTitle(r,n),this.beforeBody=this.getBeforeBody(r,n),this.body=this.getBody(r,n),this.afterBody=this.getAfterBody(r,n),this.footer=this.getFooter(r,n);const l=this._size=Kc(this,n),c=Object.assign({},o,l),u=Xc(this.chart,n,c),h=Gc(n,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,a={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(t,s,n,i){const a=this.getCaretPosition(t,n,i);s.lineTo(a.x1,a.y1),s.lineTo(a.x2,a.y2),s.lineTo(a.x3,a.y3)}getCaretPosition(t,s,n){const{xAlign:i,yAlign:a}=this,{caretSize:r,cornerRadius:o}=n,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=Vn(o),{x:f,y:v}=t,{width:p,height:m}=s;let b,x,S,k,w,$;return a==="center"?(w=v+m/2,i==="left"?(b=f,x=b-r,k=w+r,$=w-r):(b=f+p,x=b+r,k=w-r,$=w+r),S=b):(i==="left"?x=f+Math.max(l,u)+r:i==="right"?x=f+p-Math.max(c,h)-r:x=this.caretX,a==="top"?(k=v,w=k-r,b=x-r,S=x+r):(k=v+m,w=k+r,b=x+r,S=x-r),$=k),{x1:b,x2:x,x3:S,y1:k,y2:w,y3:$}}drawTitle(t,s,n){const i=this.title,a=i.length;let r,o,l;if(a){const c=ai(n.rtl,this.x,this.width);for(t.x=La(this,n.titleAlign,n),s.textAlign=c.textAlign(n.titleAlign),s.textBaseline="middle",r=qe(n.titleFont),o=n.titleSpacing,s.fillStyle=n.titleColor,s.font=r.string,l=0;l<a;++l)s.fillText(i[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=n.titleMarginBottom-o)}}_drawColorBox(t,s,n,i,a){const r=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=a,u=qe(a.bodyFont),h=La(this,"left",a),f=i.x(h),v=l<u.lineHeight?(u.lineHeight-l)/2:0,p=s.y+v;if(a.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},b=i.leftForLtr(f,c)+c/2,x=p+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,mo(t,m,b,x),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,mo(t,m,b,x)}else{t.lineWidth=re(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const m=i.leftForLtr(f,c),b=i.leftForLtr(i.xPlus(f,1),c-2),x=Vn(r.borderRadius);Object.values(x).some(S=>S!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,na(t,{x:m,y:p,w:c,h:l,radius:x}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),na(t,{x:b,y:p+1,w:c-2,h:l-2,radius:x}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(m,p,c,l),t.strokeRect(m,p,c,l),t.fillStyle=r.backgroundColor,t.fillRect(b,p+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,s,n){const{body:i}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:u}=n,h=qe(n.bodyFont);let f=h.lineHeight,v=0;const p=ai(n.rtl,this.x,this.width),m=function(C){s.fillText(C,p.x(t.x+v),t.y+f/2),t.y+=f+a},b=p.textAlign(r);let x,S,k,w,$,A,z;for(s.textAlign=r,s.textBaseline="middle",s.font=h.string,t.x=La(this,b,n),s.fillStyle=n.bodyColor,be(this.beforeBody,m),v=o&&b!=="right"?r==="center"?c/2+u:c+2+u:0,w=0,A=i.length;w<A;++w){for(x=i[w],S=this.labelTextColors[w],s.fillStyle=S,be(x.before,m),k=x.lines,o&&k.length&&(this._drawColorBox(s,t,w,p,n),f=Math.max(h.lineHeight,l)),$=0,z=k.length;$<z;++$)m(k[$]),f=h.lineHeight;be(x.after,m)}v=0,f=h.lineHeight,be(this.afterBody,m),t.y-=a}drawFooter(t,s,n){const i=this.footer,a=i.length;let r,o;if(a){const l=ai(n.rtl,this.x,this.width);for(t.x=La(this,n.footerAlign,n),t.y+=n.footerMarginTop,s.textAlign=l.textAlign(n.footerAlign),s.textBaseline="middle",r=qe(n.footerFont),s.fillStyle=n.footerColor,s.font=r.string,o=0;o<a;++o)s.fillText(i[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+n.footerSpacing}}drawBackground(t,s,n,i){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:c,height:u}=n,{topLeft:h,topRight:f,bottomLeft:v,bottomRight:p}=Vn(i.cornerRadius);s.fillStyle=i.backgroundColor,s.strokeStyle=i.borderColor,s.lineWidth=i.borderWidth,s.beginPath(),s.moveTo(o+h,l),r==="top"&&this.drawCaret(t,s,n,i),s.lineTo(o+c-f,l),s.quadraticCurveTo(o+c,l,o+c,l+f),r==="center"&&a==="right"&&this.drawCaret(t,s,n,i),s.lineTo(o+c,l+u-p),s.quadraticCurveTo(o+c,l+u,o+c-p,l+u),r==="bottom"&&this.drawCaret(t,s,n,i),s.lineTo(o+v,l+u),s.quadraticCurveTo(o,l+u,o,l+u-v),r==="center"&&a==="left"&&this.drawCaret(t,s,n,i),s.lineTo(o,l+h),s.quadraticCurveTo(o,l,o+h,l),s.closePath(),s.fill(),i.borderWidth>0&&s.stroke()}_updateAnimationTarget(t){const s=this.chart,n=this.$animations,i=n&&n.x,a=n&&n.y;if(i||a){const r=Fi[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=Kc(this,t),l=Object.assign({},r,this._size),c=Xc(s,t,l),u=Gc(t,l,c,s);(i._to!==u.x||a._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const s=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(s);const i={width:this.width,height:this.height},a={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const r=is(s.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&o&&(t.save(),t.globalAlpha=n,this.drawBackground(a,t,i,s),Ku(t,s.textDirection),a.y+=r.top,this.drawTitle(a,t,s),this.drawBody(a,t,s),this.drawFooter(a,t,s),Xu(t,s.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,s){const n=this._active,i=t.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),a=!tr(n,i),r=this._positionChanged(i,s);(a||r)&&(this._active=i,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,s,n=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,a=this._active||[],r=this._getActiveElements(t,a,s,n),o=this._positionChanged(r,t),l=s||!tr(r,a)||o;return l&&(this._active=r,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,s))),l}_getActiveElements(t,s,n,i){const a=this.options;if(t.type==="mouseout")return[];if(!i)return s.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,a.mode,a,n);return a.reverse&&r.reverse(),r}_positionChanged(t,s){const{caretX:n,caretY:i,options:a}=this,r=Fi[a.position].call(this,t,s);return r!==!1&&(n!==r.x||i!==r.y)}}var Bx={id:"tooltip",_element:Zc,positioners:Fi,afterInit(e,t,s){s&&(e.tooltip=new Zc({chart:e,options:s}))},beforeUpdate(e,t,s){e.tooltip&&e.tooltip.initialize(s)},reset(e,t,s){e.tooltip&&e.tooltip.initialize(s)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const s={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",s)}},afterEvent(e,t){if(e.tooltip){const s=t.replay;e.tooltip.handleEvent(t.event,s,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:kh},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},qx=Object.freeze({__proto__:null,Colors:tx,Decimation:ix,Filler:$x,Legend:zx,SubTitle:Dx,Title:Ex,Tooltip:Bx});const Vx=(e,t,s,n)=>(typeof t=="string"?(s=e.push(t)-1,n.unshift({index:s,label:t})):isNaN(t)&&(s=null),s);function Hx(e,t,s,n){const i=e.indexOf(t);if(i===-1)return Vx(e,t,s,n);const a=e.lastIndexOf(t);return i!==a?s:i}const Wx=(e,t)=>e===null?null:Xe(Math.round(e),0,t);function td(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Ux extends Qn{static id="category";static defaults={ticks:{callback:td}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const s=this._addedLabels;if(s.length){const n=this.getLabels();for(const{index:i,label:a}of s)n[i]===a&&n.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,s){if(ne(t))return null;const n=this.getLabels();return s=isFinite(s)&&n[s]===t?s:Hx(n,t,Yt(s,t),this._addedLabels),Wx(s,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),s||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,s=this.max,n=this.options.offset,i=[];let a=this.getLabels();a=t===0&&s===a.length-1?a:a.slice(t,s+1),this._valueRange=Math.max(a.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let r=t;r<=s;r++)i.push({value:r});return i}getLabelForValue(t){return td.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Yx(e,t){const s=[],{bounds:i,step:a,min:r,max:o,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:f}=e,v=a||1,p=u-1,{min:m,max:b}=t,x=!ne(r),S=!ne(o),k=!ne(c),w=(b-m)/(h+1);let $=Kl((b-m)/p/v)*v,A,z,C,E;if($<1e-14&&!x&&!S)return[{value:m},{value:b}];E=Math.ceil(b/$)-Math.floor(m/$),E>p&&($=Kl(E*$/p/v)*v),ne(l)||(A=Math.pow(10,l),$=Math.ceil($*A)/A),i==="ticks"?(z=Math.floor(m/$)*$,C=Math.ceil(b/$)*$):(z=m,C=b),x&&S&&a&&C1((o-r)/a,$/1e3)?(E=Math.round(Math.min((o-r)/$,u)),$=(o-r)/E,z=r,C=o):k?(z=x?r:z,C=S?o:C,E=c-1,$=(C-z)/E):(E=(C-z)/$,Yi(E,Math.round(E),$/1e3)?E=Math.round(E):E=Math.ceil(E));const T=Math.max(Xl($),Xl(z));A=Math.pow(10,ne(l)?T:l),z=Math.round(z*A)/A,C=Math.round(C*A)/A;let O=0;for(x&&(f&&z!==r?(s.push({value:r}),z<r&&O++,Yi(Math.round((z+O*$)*A)/A,r,ed(r,w,e))&&O++):z<r&&O++);O<E;++O){const F=Math.round((z+O*$)*A)/A;if(S&&F>o)break;s.push({value:F})}return S&&f&&C!==o?s.length&&Yi(s[s.length-1].value,o,ed(o,w,e))?s[s.length-1].value=o:s.push({value:o}):(!S||C===o)&&s.push({value:C}),s}function ed(e,t,{horizontal:s,minRotation:n}){const i=Ds(n),a=(s?Math.sin(i):Math.cos(i))||.001,r=.75*t*(""+e).length;return Math.min(t/a,r)}class or extends Qn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,s){return ne(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:s,maxDefined:n}=this.getUserBounds();let{min:i,max:a}=this;const r=l=>i=s?i:l,o=l=>a=n?a:l;if(t){const l=Hs(i),c=Hs(a);l<0&&c<0?o(0):l>0&&c>0&&r(0)}if(i===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(i-l)}this.min=i,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:s,stepSize:n}=t,i;return n?(i=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),s=s||11),s&&(i=Math.min(s,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,s=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const i={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},a=this._range||this,r=Yx(i,a);return t.bounds==="ticks"&&Tu(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let s=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-s)/Math.max(t.length-1,1)/2;s-=i,n+=i}this._startValue=s,this._endValue=n,this._valueRange=n-s}getLabelForValue(t){return va(t,this.chart.options.locale,this.options.ticks.format)}}class Kx extends or{static id="linear";static defaults={ticks:{callback:_r.formatters.numeric}};determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=je(t)?t:0,this.max=je(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),s=t?this.width:this.height,n=Ds(this.options.ticks.minRotation),i=(t?Math.sin(n):Math.cos(n))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,a.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const aa=e=>Math.floor(pn(e)),On=(e,t)=>Math.pow(10,aa(e)+t);function sd(e){return e/Math.pow(10,aa(e))===1}function nd(e,t,s){const n=Math.pow(10,s),i=Math.floor(e/n);return Math.ceil(t/n)-i}function Xx(e,t){const s=t-e;let n=aa(s);for(;nd(e,t,n)>10;)n++;for(;nd(e,t,n)<10;)n--;return Math.min(n,aa(e))}function Gx(e,{min:t,max:s}){t=ms(e.min,t);const n=[],i=aa(t);let a=Xx(t,s),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=i>a?Math.pow(10,i):0,c=Math.round((t-l)*r)/r,u=Math.floor((t-l)/o/10)*o*10;let h=Math.floor((c-u)/Math.pow(10,a)),f=ms(e.min,Math.round((l+u+h*Math.pow(10,a))*r)/r);for(;f<s;)n.push({value:f,major:sd(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,r=a>=0?1:r),f=Math.round((l+u+h*Math.pow(10,a))*r)/r;const v=ms(e.max,f);return n.push({value:v,major:sd(v),significand:h}),n}class Jx extends Qn{static id="logarithmic";static defaults={ticks:{callback:_r.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,s){const n=or.prototype.parse.apply(this,[t,s]);if(n===0){this._zero=!0;return}return je(n)&&n>0?n:null}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=je(t)?Math.max(0,t):null,this.max=je(s)?Math.max(0,s):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!je(this._userMin)&&(this.min=t===On(this.min,0)?On(this.min,-1):On(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let n=this.min,i=this.max;const a=o=>n=t?n:o,r=o=>i=s?i:o;n===i&&(n<=0?(a(1),r(10)):(a(On(n,-1)),r(On(i,1)))),n<=0&&a(On(i,-1)),i<=0&&r(On(n,1)),this.min=n,this.max=i}buildTicks(){const t=this.options,s={min:this._userMin,max:this._userMax},n=Gx(s,this);return t.bounds==="ticks"&&Tu(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":va(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=pn(t),this._valueRange=pn(this.max)-pn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(pn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const s=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+s*this._valueRange)}}function $o(e){const t=e.ticks;if(t.display&&e.display){const s=is(t.backdropPadding);return Yt(t.font&&t.font.size,ze.font.size)+s.height}return 0}function Qx(e,t,s){return s=Ce(s)?s:[s],{w:U1(e,t.string,s),h:s.length*t.lineHeight}}function id(e,t,s,n,i){return e===n||e===i?{start:t-s/2,end:t+s/2}:e<n||e>i?{start:t-s,end:t}:{start:t,end:t+s}}function Zx(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},s=Object.assign({},t),n=[],i=[],a=e._pointLabels.length,r=e.options.pointLabels,o=r.centerPointLabels?he/a:0;for(let l=0;l<a;l++){const c=r.setContext(e.getPointLabelContext(l));i[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+i[l],o),h=qe(c.font),f=Qx(e.ctx,h,e._pointLabels[l]);n[l]=f;const v=ss(e.getIndexAngle(l)+o),p=Math.round(tl(v)),m=id(p,u.x,f.w,0,180),b=id(p,u.y,f.h,90,270);t2(s,t,v,m,b)}e.setCenterPoint(t.l-s.l,s.r-t.r,t.t-s.t,s.b-t.b),e._pointLabelItems=n2(e,n,i)}function t2(e,t,s,n,i){const a=Math.abs(Math.sin(s)),r=Math.abs(Math.cos(s));let o=0,l=0;n.start<t.l?(o=(t.l-n.start)/a,e.l=Math.min(e.l,t.l-o)):n.end>t.r&&(o=(n.end-t.r)/a,e.r=Math.max(e.r,t.r+o)),i.start<t.t?(l=(t.t-i.start)/r,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/r,e.b=Math.max(e.b,t.b+l))}function e2(e,t,s){const n=e.drawingArea,{extra:i,additionalAngle:a,padding:r,size:o}=s,l=e.getPointPosition(t,n+i+r,a),c=Math.round(tl(ss(l.angle+Fe))),u=r2(l.y,o.h,c),h=i2(c),f=a2(l.x,o.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:f,top:u,right:f+o.w,bottom:u+o.h}}function s2(e,t){if(!t)return!0;const{left:s,top:n,right:i,bottom:a}=e;return!(nn({x:s,y:n},t)||nn({x:s,y:a},t)||nn({x:i,y:n},t)||nn({x:i,y:a},t))}function n2(e,t,s){const n=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:$o(a)/2,additionalAngle:r?he/i:0};let c;for(let u=0;u<i;u++){l.padding=s[u],l.size=t[u];const h=e2(e,u,l);n.push(h),o==="auto"&&(h.visible=s2(h,c),h.visible&&(c=h))}return n}function i2(e){return e===0||e===180?"center":e<180?"left":"right"}function a2(e,t,s){return s==="right"?e-=t:s==="center"&&(e-=t/2),e}function r2(e,t,s){return s===90||s===270?e-=t/2:(s>270||s<90)&&(e-=t),e}function o2(e,t,s){const{left:n,top:i,right:a,bottom:r}=s,{backdropColor:o}=t;if(!ne(o)){const l=Vn(t.borderRadius),c=is(t.backdropPadding);e.fillStyle=o;const u=n-c.left,h=i-c.top,f=a-n+c.width,v=r-i+c.height;Object.values(l).some(p=>p!==0)?(e.beginPath(),na(e,{x:u,y:h,w:f,h:v,radius:l}),e.fill()):e.fillRect(u,h,f,v)}}function l2(e,t){const{ctx:s,options:{pointLabels:n}}=e;for(let i=t-1;i>=0;i--){const a=e._pointLabelItems[i];if(!a.visible)continue;const r=n.setContext(e.getPointLabelContext(i));o2(s,r,a);const o=qe(r.font),{x:l,y:c,textAlign:u}=a;Kn(s,e._pointLabels[i],l,c+o.lineHeight/2,o,{color:r.color,textAlign:u,textBaseline:"middle"})}}function wh(e,t,s,n){const{ctx:i}=e;if(s)i.arc(e.xCenter,e.yCenter,t,0,Pe);else{let a=e.getPointPosition(0,t);i.moveTo(a.x,a.y);for(let r=1;r<n;r++)a=e.getPointPosition(r,t),i.lineTo(a.x,a.y)}}function c2(e,t,s,n,i){const a=e.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!n||!o||!l||s<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),wh(e,s,r,n),a.closePath(),a.stroke(),a.restore())}function d2(e,t,s){return An(e,{label:s,index:t,type:"pointLabel"})}class u2 extends or{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:_r.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=is($o(this.options)/2),s=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+s/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(s,n)/2)}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!1);this.min=je(t)&&!isNaN(t)?t:0,this.max=je(s)&&!isNaN(s)?s:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/$o(this.options))}generateTickLabels(t){or.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((s,n)=>{const i=$e(this.options.pointLabels.callback,[s,n],this);return i||i===0?i:""}).filter((s,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?Zx(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,s,n,i){this.xCenter+=Math.floor((t-s)/2),this.yCenter+=Math.floor((n-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,s,n,i))}getIndexAngle(t){const s=Pe/(this._pointLabels.length||1),n=this.options.startAngle||0;return ss(t*s+Ds(n))}getDistanceFromCenterForValue(t){if(ne(t))return NaN;const s=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*s:(t-this.min)*s}getValueForDistanceFromCenter(t){if(ne(t))return NaN;const s=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-s:this.min+s}getPointLabelContext(t){const s=this._pointLabels||[];if(t>=0&&t<s.length){const n=s[t];return d2(this.getContext(),t,n)}}getPointPosition(t,s,n=0){const i=this.getIndexAngle(t)-Fe+n;return{x:Math.cos(i)*s+this.xCenter,y:Math.sin(i)*s+this.yCenter,angle:i}}getPointPositionForValue(t,s){return this.getPointPosition(t,this.getDistanceFromCenterForValue(s))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:s,top:n,right:i,bottom:a}=this._pointLabelItems[t];return{left:s,top:n,right:i,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:s}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),wh(this,this.getDistanceFromCenterForValue(this._endValue),s,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,s=this.options,{angleLines:n,grid:i,border:a}=s,r=this._pointLabels.length;let o,l,c;if(s.pointLabels.display&&l2(this,r),i.display&&this.ticks.forEach((u,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),v=i.setContext(f),p=a.setContext(f);c2(this,v,l,r,p)}}),n.display){for(t.save(),o=r-1;o>=0;o--){const u=n.setContext(this.getPointLabelContext(o)),{color:h,lineWidth:f}=u;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(s.reverse?this.min:this.max),c=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,s=this.options,n=s.ticks;if(!n.display)return;const i=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&this.min>=0&&!s.reverse)return;const c=n.setContext(this.getContext(l)),u=qe(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,r=t.measureText(o.label).width,t.fillStyle=c.backdropColor;const h=is(c.backdropPadding);t.fillRect(-r/2-h.left,-a-u.size/2-h.top,r+h.width,u.size+h.height)}Kn(t,o.label,0,-a,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const Sr={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},vs=Object.keys(Sr);function ad(e,t){return e-t}function rd(e,t){if(ne(t))return null;const s=e._adapter,{parser:n,round:i,isoWeekday:a}=e._parseOpts;let r=t;return typeof n=="function"&&(r=n(r)),je(r)||(r=typeof n=="string"?s.parse(r,n):s.parse(r)),r===null?null:(i&&(r=i==="week"&&(mi(a)||a===!0)?s.startOf(r,"isoWeek",a):s.startOf(r,i)),+r)}function od(e,t,s,n){const i=vs.length;for(let a=vs.indexOf(e);a<i-1;++a){const r=Sr[vs[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((s-t)/(o*r.size))<=n)return vs[a]}return vs[i-1]}function h2(e,t,s,n,i){for(let a=vs.length-1;a>=vs.indexOf(s);a--){const r=vs[a];if(Sr[r].common&&e._adapter.diff(i,n,r)>=t-1)return r}return vs[s?vs.indexOf(s):0]}function f2(e){for(let t=vs.indexOf(e)+1,s=vs.length;t<s;++t)if(Sr[vs[t]].common)return vs[t]}function ld(e,t,s){if(!s)e[t]=!0;else if(s.length){const{lo:n,hi:i}=el(s,t),a=s[n]>=t?s[n]:s[i];e[a]=!0}}function v2(e,t,s,n){const i=e._adapter,a=+i.startOf(t[0].value,n),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+i.add(o,1,n))l=s[o],l>=0&&(t[l].major=!0);return t}function cd(e,t,s){const n=[],i={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],i[o]=r,n.push({value:o,major:!1});return a===0||!s?n:v2(e,n,i,s)}class So extends Qn{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,s={}){const n=t.time||(t.time={}),i=this._adapter=new p0._date(t.adapters.date);i.init(s),Ui(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=s.normalized}parse(t,s){return t===void 0?null:rd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,s=this._adapter,n=t.time.unit||"day";let{min:i,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!o&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=je(i)&&!isNaN(i)?i:+s.startOf(Date.now(),n),a=je(a)&&!isNaN(a)?a:+s.endOf(Date.now(),n)+1,this.min=Math.min(i,a-1),this.max=Math.max(i+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(s=t[0],n=t[t.length-1]),{min:s,max:n}}buildTicks(){const t=this.options,s=t.time,n=t.ticks,i=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const a=this.min,r=this.max,o=D1(i,a,r);return this._unit=s.unit||(n.autoSkip?od(s.minUnit,this.min,this.max,this._getLabelCapacity(a)):h2(this,o.length,s.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:f2(this._unit),this.initOffsets(i),t.reverse&&o.reverse(),cd(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let s=0,n=0,i,a;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?s=1-i:s=(this.getDecimalForValue(t[1])-i)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?n=a:n=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;s=Xe(s,0,r),n=Xe(n,0,r),this._offsets={start:s,end:n,factor:1/(s+1+n)}}_generate(){const t=this._adapter,s=this.min,n=this.max,i=this.options,a=i.time,r=a.unit||od(a.minUnit,s,n,this._getLabelCapacity(s)),o=Yt(i.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,c=mi(l)||l===!0,u={};let h=s,f,v;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":r),t.diff(n,s,r)>1e5*o)throw new Error(s+" and "+n+" are too far apart with stepSize of "+o+" "+r);const p=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,v=0;f<n;f=+t.add(f,o,r),v++)ld(u,f,p);return(f===n||i.bounds==="ticks"||v===1)&&ld(u,f,p),Object.keys(u).sort(ad).map(m=>+m)}getLabelForValue(t){const s=this._adapter,n=this.options.time;return n.tooltipFormat?s.format(t,n.tooltipFormat):s.format(t,n.displayFormats.datetime)}format(t,s){const i=this.options.time.displayFormats,a=this._unit,r=s||i[a];return this._adapter.format(t,r)}_tickFormatFunction(t,s,n,i){const a=this.options,r=a.ticks.callback;if(r)return $e(r,[t,s,n],this);const o=a.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&o[l],h=c&&o[c],f=n[s],v=c&&h&&f&&f.major;return this._adapter.format(t,i||(v?h:u))}generateTickLabels(t){let s,n,i;for(s=0,n=t.length;s<n;++s)i=t[s],i.label=this._tickFormatFunction(i.value,s,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const s=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((s.start+n)*s.factor)}getValueForPixel(t){const s=this._offsets,n=this.getDecimalForPixel(t)/s.factor-s.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const s=this.options.ticks,n=this.ctx.measureText(t).width,i=Ds(this.isHorizontal()?s.maxRotation:s.minRotation),a=Math.cos(i),r=Math.sin(i),o=this._resolveTickFontOptions(0).size;return{w:n*a+o*r,h:n*r+o*a}}_getLabelCapacity(t){const s=this.options.time,n=s.displayFormats,i=n[s.unit]||n.millisecond,a=this._tickFormatFunction(t,0,cd(this,[t],this._majorUnit),i),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],s,n;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(s=0,n=i.length;s<n;++s)t=t.concat(i[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let s,n;if(t.length)return t;const i=this.getLabels();for(s=0,n=i.length;s<n;++s)t.push(rd(this,i[s]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Ou(t.sort(ad))}}function Ia(e,t,s){let n=0,i=e.length-1,a,r,o,l;s?(t>=e[n].pos&&t<=e[i].pos&&({lo:n,hi:i}=sn(e,"pos",t)),{pos:a,time:o}=e[n],{pos:r,time:l}=e[i]):(t>=e[n].time&&t<=e[i].time&&({lo:n,hi:i}=sn(e,"time",t)),{time:a,pos:o}=e[n],{time:r,pos:l}=e[i]);const c=r-a;return c?o+(l-o)*(t-a)/c:o}class p2 extends So{static id="timeseries";static defaults=So.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(t);this._minPos=Ia(s,this.min),this._tableRange=Ia(s,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:s,max:n}=this,i=[],a=[];let r,o,l,c,u;for(r=0,o=t.length;r<o;++r)c=t[r],c>=s&&c<=n&&i.push(c);if(i.length<2)return[{time:s,pos:0},{time:n,pos:1}];for(r=0,o=i.length;r<o;++r)u=i[r+1],l=i[r-1],c=i[r],Math.round((u+l)/2)!==c&&a.push({time:c,pos:r/(o-1)});return a}_generate(){const t=this.min,s=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(s)||n.length===1)&&n.push(s),n.sort((i,a)=>i-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const s=this.getDataTimestamps(),n=this.getLabelTimestamps();return s.length&&n.length?t=this.normalize(s.concat(n)):t=s.length?s:n,t=this._cache.all=t,t}getDecimalForValue(t){return(Ia(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const s=this._offsets,n=this.getDecimalForPixel(t)/s.factor-s.end;return Ia(this._table,n*this._tableRange+this._minPos,!0)}}var g2=Object.freeze({__proto__:null,CategoryScale:Ux,LinearScale:Kx,LogarithmicScale:Jx,RadialLinearScale:u2,TimeScale:So,TimeSeriesScale:p2});const m2=[v0,Yy,qx,g2];var _2=P("<option> </option>"),b2=P('<div class="chart-wrapper svelte-1829vtz"><canvas></canvas></div>'),y2=P('<div class="quota-chart svelte-1829vtz"><div class="chart-controls svelte-1829vtz"><select class="chart-select svelte-1829vtz"></select> <div class="period-group svelte-1829vtz"></div></div> <!></div>');function x2(e,t){xe(t,!0),yo.register(...m2);let s=N(ye([])),n=N(""),i=N("24h"),a=N(void 0),r=null;Ve(()=>{const v=Ye.subscribe(p=>{M(s,p,!0),!d(n)&&p.length>0&&M(n,p[0].key,!0)});return()=>{v(),r?.destroy()}});async function o(){if(!(!d(n)||!d(a)))try{const v=await fg(d(n),d(i)),p=v.map(b=>{const x=new Date(b.timestamp);return d(i)==="24h"?x.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}):x.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"})}),m=v.map(b=>b.tokens);r?.destroy(),r=new yo(d(a),{type:"line",data:{labels:p,datasets:[{label:"Tokens utilises",data:m,borderColor:"rgb(59, 130, 246)",backgroundColor:"rgba(59, 130, 246, 0.1)",fill:!0,tension:.3,pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(18, 18, 26, 0.95)",borderColor:"rgba(30, 30, 46, 1)",borderWidth:1,titleColor:"#e2e8f0",bodyColor:"#94a3b8",padding:10,cornerRadius:8}},scales:{x:{grid:{color:"rgba(30, 30, 46, 0.5)"},ticks:{color:"#475569",font:{size:11}}},y:{grid:{color:"rgba(30, 30, 46, 0.5)"},ticks:{color:"#475569",font:{size:11}},beginAtZero:!0}}}})}catch(v){console.error("Failed to load quota history:",v)}}Un(()=>{d(n)&&d(a)&&o()});var l=y2(),c=g(l),u=g(c);ie(u,21,()=>d(s),Ie,(v,p)=>{var m=_2(),b=g(m),x={};L(()=>{D(b,d(p).data.displayName||d(p).data.name||d(p).key),x!==(x=d(p).key)&&(m.value=(m.__value=d(p).key)??"")}),y(v,m)});var h=_(u,2);ie(h,20,()=>["24h","7d","30d"],Ie,(v,p)=>{{let m=H(()=>d(i)===p?"primary":"ghost");Vt(v,{get variant(){return d(m)},size:"sm",onclick:()=>{M(i,p,!0)},children:(b,x)=>{var S=Ut();L(()=>D(S,p)),y(b,S)},$$slots:{default:!0}})}});var f=_(c,2);de(f,{hoverable:!1,children:(v,p)=>{var m=b2(),b=g(m);Bo(b,x=>M(a,x),()=>d(a)),y(v,m)},$$slots:{default:!0}}),gi(u,()=>d(n),v=>M(n,v)),y(e,l),ke()}var k2=P('<span class="feed-tokens svelte-somya0"> </span>'),w2=P('<div class="feed-item svelte-somya0"><span class="feed-time svelte-somya0"> </span> <span class="feed-method svelte-somya0"><!> </span> <span class="feed-path svelte-somya0"> </span> <!> <!> <span class="feed-duration svelte-somya0"> </span> <!></div>'),$2=P('<div class="feed-empty svelte-somya0"><p>Aucune requete a afficher</p> <p class="feed-empty-hint svelte-somya0">Les requetes apparaitront ici en temps reel</p></div>'),S2=P('<div class="request-feed svelte-somya0"><div class="feed-controls svelte-somya0"><div class="feed-filters svelte-somya0"><!> <select class="feed-select svelte-somya0"><option>Tous les providers</option><option>Anthropic</option><option>Gemini</option><option>OpenAI</option><option>xAI</option><option>DeepSeek</option><option>Mistral</option><option>Groq</option></select> <select class="feed-select svelte-somya0"><option>Tous les statuts</option><option>Succes (2xx)</option><option>Erreurs (4xx/5xx)</option></select></div> <label class="auto-scroll-toggle svelte-somya0"><input type="checkbox" class="svelte-somya0"/> <span>Auto-scroll</span></label> <button class="refresh-btn svelte-somya0" title="Rafraichir"><!></button></div> <div class="feed-list svelte-somya0"><!> <!></div></div>');function M2(e,t){xe(t,!0);let s=N(ye([])),n=N("all"),i=N("all"),a=N(void 0),r=N(!0);const o={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};let l=H(()=>d(s).filter(K=>!(d(n)!=="all"&&K.provider!==d(n)||d(i)==="success"&&(K.status<200||K.status>=300)||d(i)==="error"&&K.status<400)));function c(K){return K>=200&&K<300?"var(--phase-cruise)":K>=400&&K<500?"var(--status-warning)":K>=500?"var(--status-error)":"var(--fg-dim)"}function u(K){return new Date(K).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}async function h(){try{const K=await fo();M(s,K.flatMap((R,tt)=>{if(!R||typeof R!="object")return[];const dt=String(R.timestamp??R.time??""),Ht=String(R.account_email??R.email??"unknown"),W=String(R.model??""),q=Number(R.output_tokens??R.tokens_output??R.total_tokens??0);let rt="anthropic";return W.includes("gemini")?rt="gemini":W.includes("gpt")?rt="openai":W.includes("grok")?rt="xai":W.includes("deepseek")?rt="deepseek":W.includes("mistral")?rt="mistral":(W.includes("llama")||W.includes("groq"))&&(rt="groq"),[{id:String(tt),timestamp:dt,method:"POST",path:"/v1/messages",status:200,provider:rt,account:Ht,duration:0,tokens:q||void 0}]}),!0),M(s,d(s).reverse(),!0)}catch(K){console.error("Failed to load requests:",K)}}Ve(async()=>{await h()}),Un(()=>{d(r)&&d(a)&&d(l).length>0&&(d(a).scrollTop=d(a).scrollHeight)});var f=S2(),v=g(f),p=g(v),m=g(p);ip(m,{size:14});var b=_(m,2),x=g(b);x.value=x.__value="all";var S=_(x);S.value=S.__value="anthropic";var k=_(S);k.value=k.__value="gemini";var w=_(k);w.value=w.__value="openai";var $=_(w);$.value=$.__value="xai";var A=_($);A.value=A.__value="deepseek";var z=_(A);z.value=z.__value="mistral";var C=_(z);C.value=C.__value="groq";var E=_(b,2),T=g(E);T.value=T.__value="all";var O=_(T);O.value=O.__value="success";var F=_(O);F.value=F.__value="error";var Z=_(p,2),Y=g(Z),V=_(Z,2),J=g(V);ks(J,{size:14});var st=_(v,2),_t=g(st);ie(_t,17,()=>d(l),K=>K.id,(K,R)=>{var tt=w2(),dt=g(tt),Ht=g(dt),W=_(dt,2),q=g(W);{var rt=zt=>{Vv(zt,{size:12})},Rt=zt=>{Bv(zt,{size:12})};B(q,zt=>{d(R).method==="POST"?zt(rt):zt(Rt,!1)})}var It=_(q),U=_(W,2),$t=g(U),jt=_(U,2);{let zt=H(()=>c(d(R).status));Ke(jt,{get color(){return d(zt)},small:!0,children:(bt,St)=>{var ct=Ut();L(()=>D(ct,d(R).status)),y(bt,ct)},$$slots:{default:!0}})}var ae=_(jt,2);{let zt=H(()=>o[d(R).provider]??"var(--fg-dim)");Ke(ae,{get color(){return d(zt)},small:!0,children:(bt,St)=>{var ct=Ut();L(()=>D(ct,d(R).provider)),y(bt,ct)},$$slots:{default:!0}})}var At=_(ae,2),Nt=g(At),fe=_(At,2);{var ce=zt=>{var bt=k2(),St=g(bt);L(()=>D(St,`${d(R).tokens??""}t`)),y(zt,bt)};B(fe,zt=>{d(R).tokens&&zt(ce)})}L(zt=>{D(Ht,zt),D(It,` ${d(R).method??""}`),Ct(U,"title",d(R).path),D($t,d(R).path),D(Nt,`${d(R).duration??""}ms`)},[()=>u(d(R).timestamp)]),y(K,tt)});var gt=_(_t,2);{var kt=K=>{var R=$2();y(K,R)};B(gt,K=>{d(l).length===0&&K(kt)})}Bo(st,K=>M(a,K),()=>d(a)),gi(b,()=>d(n),K=>M(n,K)),gi(E,()=>d(i),K=>M(i,K)),uu(Y,()=>d(r),K=>M(r,K)),it("click",V,h),y(e,f),ke()}Oe(["click"]);var P2=P('<div class="session-loading svelte-1v3p48n"><span class="animate-spin"><!></span> <span>Chargement des sessions...</span></div>'),A2=P('<div class="session-empty svelte-1v3p48n"><p>Aucune session enregistree</p></div>'),C2=P('<div class="session-card svelte-1v3p48n"><div class="session-header svelte-1v3p48n"><span class="session-id svelte-1v3p48n"> </span> <!></div> <div class="session-stats svelte-1v3p48n"><div class="session-stat svelte-1v3p48n"><!> <span> </span></div> <div class="session-stat svelte-1v3p48n"><!> <span> </span></div> <div class="session-stat svelte-1v3p48n"><!> <span> </span></div></div></div>'),z2=P('<div class="session-grid svelte-1v3p48n"></div>'),T2=P('<div class="session-list svelte-1v3p48n"><!></div>');function E2(e,t){xe(t,!0);let s=N(ye([])),n=N(!0);Ve(async()=>{try{const h=await wu();M(s,h,!0)}catch(h){console.error("Failed to load sessions:",h)}finally{M(n,!1)}});function i(h){return new Date(h).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}function a(h){return h>=1e6?`${(h/1e6).toFixed(1)}M`:h>=1e3?`${(h/1e3).toFixed(1)}k`:`${h}`}var r=T2(),o=g(r);{var l=h=>{var f=P2(),v=g(f),p=g(v);Qa(p,{size:20}),y(h,f)},c=h=>{var f=A2();y(h,f)},u=h=>{var f=z2();ie(f,21,()=>d(s),v=>v.id,(v,p)=>{de(v,{children:(m,b)=>{var x=C2(),S=g(x),k=g(S),w=g(k),$=_(k,2);Ke($,{color:"var(--accent)",small:!0,children:(gt,kt)=>{var K=Ut();L(()=>D(K,d(p).accountKey)),y(gt,K)},$$slots:{default:!0}});var A=_(S,2),z=g(A),C=g(z);Qa(C,{size:12});var E=_(C,2),T=g(E),O=_(z,2),F=g(O);rp(F,{size:12});var Z=_(F,2),Y=g(Z),V=_(O,2),J=g(V);Qv(J,{size:12});var st=_(J,2),_t=g(st);L((gt,kt,K)=>{Ct(k,"title",d(p).id),D(w,`#${gt??""}`),D(T,kt),D(Y,`${d(p).requestCount??""} requetes`),D(_t,`${K??""} tokens`)},[()=>d(p).id.slice(0,8),()=>i(d(p).startTime),()=>a(d(p).tokensUsed)]),y(m,x)},$$slots:{default:!0}})}),y(h,f)};B(o,h=>{d(n)?h(l):d(s).length===0?h(c,1):h(u,!1)})}y(e,r),ke()}var D2=P('<span class="log-ts svelte-1k1iml3"> </span>'),O2=P('<div class="log-line svelte-1k1iml3"><span class="log-num svelte-1k1iml3"></span> <!> <!> <span class="log-msg svelte-1k1iml3"> </span></div>'),R2=P('<div class="log-empty svelte-1k1iml3">Aucun log a afficher</div>'),L2=P('<div class="log-viewer svelte-1k1iml3"><div class="log-controls svelte-1k1iml3"><div class="log-search svelte-1k1iml3"><!> <input type="text" class="log-search-input svelte-1k1iml3" placeholder="Rechercher dans les logs..."/></div> <div class="log-filters svelte-1k1iml3"></div> <div class="log-actions svelte-1k1iml3"><label class="auto-scroll-toggle svelte-1k1iml3"><input type="checkbox" class="svelte-1k1iml3"/> <span>Auto-scroll</span></label> <!> <!></div></div> <div class="log-output svelte-1k1iml3"><!> <!></div></div>');function I2(e,t){xe(t,!0);let s=N(ye([])),n=N(""),i=N("all"),a=N(!0),r=N(void 0);const o={info:"var(--accent)",warn:"var(--status-warning)",error:"var(--status-error)",debug:"var(--fg-dim)"};let l=H(()=>d(s).filter(O=>!(d(i)!=="all"&&O.level!==d(i)||d(n)&&!O.raw.toLowerCase().includes(d(n).toLowerCase()))));function c(O){if(typeof O=="object"&&O!==null){const Y=O,V=String(Y.timestamp??Y.time??""),J=String(Y.model??""),st=String(Y.account_email??Y.email??""),_t=Number(Y.output_tokens??Y.total_tokens??0),gt=st?`${st} | ${J} | ${_t}t`:JSON.stringify(O);return{raw:JSON.stringify(O),timestamp:V,level:"info",message:gt}}const F=String(O),Z=F.match(/^\[([^\]]+)\]\s*(\w+)\s*(.*)$/);return Z?{raw:F,timestamp:Z[1],level:Z[2].toLowerCase(),message:Z[3]}:{raw:F,timestamp:"",level:"info",message:F}}Ve(async()=>{try{const O=await fo(void 0);M(s,O.map(c),!0)}catch(O){console.error("Failed to load logs:",O)}});async function u(){try{const O=await fo(d(i)==="all"?void 0:d(i));M(s,O.map(c),!0)}catch(O){console.error("Failed to refresh logs:",O)}}function h(){M(s,[],!0)}Un(()=>{d(a)&&d(r)&&d(l).length>0&&(d(r).scrollTop=d(r).scrollHeight)});var f=L2(),v=g(f),p=g(v),m=g(p);_p(m,{size:14});var b=_(m,2),x=_(p,2);ie(x,20,()=>["all","info","warn","error","debug"],Ie,(O,F)=>{{let Z=H(()=>d(i)===F?"primary":"ghost");Vt(O,{get variant(){return d(Z)},size:"sm",onclick:()=>{M(i,F,!0)},children:(Y,V)=>{var J=Ut();L(st=>D(J,st),[()=>F==="all"?"Tous":F.toUpperCase()]),y(Y,J)},$$slots:{default:!0}})}});var S=_(x,2),k=g(S),w=g(k),$=_(k,2);Vt($,{variant:"ghost",size:"sm",onclick:u,children:(O,F)=>{pu(O,{size:14})},$$slots:{default:!0}});var A=_($,2);Vt(A,{variant:"ghost",size:"sm",onclick:h,children:(O,F)=>{ii(O,{size:14})},$$slots:{default:!0}});var z=_(v,2),C=g(z);ie(C,17,()=>d(l),Ie,(O,F,Z)=>{var Y=O2(),V=g(Y);V.textContent=Z+1;var J=_(V,2);{var st=K=>{var R=D2(),tt=g(R);L(()=>D(tt,d(F).timestamp)),y(K,R)};B(J,K=>{d(F).timestamp&&K(st)})}var _t=_(J,2);{let K=H(()=>o[d(F).level]??"var(--fg-dim)");Ke(_t,{get color(){return d(K)},small:!0,children:(R,tt)=>{var dt=Ut();L(()=>D(dt,d(F).level)),y(R,dt)},$$slots:{default:!0}})}var gt=_(_t,2),kt=g(gt);L(()=>D(kt,d(F).message)),y(O,Y)});var E=_(C,2);{var T=O=>{var F=R2();y(O,F)};B(E,O=>{d(l).length===0&&O(T)})}Bo(z,O=>M(r,O),()=>d(r)),Ee(b,()=>d(n),O=>M(n,O)),uu(w,()=>d(a),O=>M(a,O)),y(e,f),ke()}var j2=P('<div class="history-loading svelte-a369tr">Chargement...</div>'),N2=P('<div class="history-error svelte-a369tr"> </div>'),F2=P('<div class="history-empty svelte-a369tr"><!> <p>Aucun switch enregistre</p> <p class="hint svelte-a369tr">Les changements de compte apparaitront ici</p></div>'),B2=P('<tr class="svelte-a369tr"><td class="account-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td></tr>'),q2=P('<div class="stats-table-wrapper svelte-a369tr"><table class="stats-table svelte-a369tr"><thead><tr><th class="svelte-a369tr">Compte</th><th class="svelte-a369tr">Switch depuis</th><th class="svelte-a369tr">Switch vers</th><th class="svelte-a369tr">Total</th></tr></thead><tbody></tbody></table></div>'),V2=P('<span class="sw-from svelte-a369tr"> </span> <!>',1),H2=P('<div class="switch-item svelte-a369tr"><span class="sw-time svelte-a369tr"> </span> <!> <span class="sw-to svelte-a369tr"> </span> <span> </span></div>'),W2=P('<!> <div class="last-switches"><div class="section-label svelte-a369tr">Derniers switches</div> <div class="switches-log svelte-a369tr"></div></div>',1),U2=P('<div class="switch-history svelte-a369tr"><div class="history-header svelte-a369tr"><span class="history-count svelte-a369tr"> </span> <!></div> <!></div>');function Y2(e,t){xe(t,!0);let s=N(ye([])),n=N(!0),i=N(""),a=H(()=>()=>{const k=new Map;for(const w of d(s)){if(w.from){const A=k.get(w.from)??{total:0,from:0,to:0};A.from++,k.set(w.from,A)}const $=k.get(w.to)??{total:0,from:0,to:0};$.to++,k.set(w.to,$)}return Array.from(k.entries()).map(([w,$])=>({key:w,...$})).sort((w,$)=>$.from+$.to-(w.from+w.to))});Ve(async()=>{await r()});async function r(){M(n,!0),M(i,"");try{M(s,await vg(),!0)}catch(k){M(i,String(k),!0)}finally{M(n,!1)}}function o(k){if(!k)return"";try{return new Date(k).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return k}}function l(k){return k==="auto-switch"?"auto":k==="quota"?"quota":"manuel"}var c=U2(),u=g(c),h=g(u),f=g(h),v=_(h,2);Vt(v,{variant:"ghost",size:"sm",onclick:r,children:(k,w)=>{ks(k,{size:14})},$$slots:{default:!0}});var p=_(u,2);{var m=k=>{var w=j2();y(k,w)},b=k=>{var w=N2(),$=g(w);L(()=>D($,d(i))),y(k,w)},x=k=>{var w=F2(),$=g(w);Ja($,{size:32}),y(k,w)},S=k=>{var w=W2(),$=j(w);de($,{hoverable:!1,children:(C,E)=>{var T=q2(),O=g(T),F=_(g(O));ie(F,21,()=>d(a)(),Ie,(Z,Y)=>{var V=B2(),J=g(V),st=g(J),_t=_(J),gt=g(_t),kt=_(_t),K=g(kt),R=_(kt),tt=g(R);L(()=>{D(st,d(Y).key),D(gt,d(Y).from),D(K,d(Y).to),D(tt,d(Y).from+d(Y).to)}),y(Z,V)}),y(C,T)},$$slots:{default:!0}});var A=_($,2),z=_(g(A),2);ie(z,21,()=>d(s).slice(0,20),Ie,(C,E)=>{var T=H2(),O=g(T),F=g(O),Z=_(O,2);{var Y=kt=>{var K=V2(),R=j(K),tt=g(R),dt=_(R,2);Ja(dt,{size:12,class:"sw-arrow"}),L(()=>D(tt,d(E).from)),y(kt,K)};B(Z,kt=>{d(E).from&&kt(Y)})}var V=_(Z,2),J=g(V),st=_(V,2);let _t;var gt=g(st);L((kt,K)=>{D(F,kt),D(J,d(E).to),_t=Jt(st,1,"sw-reason svelte-a369tr",null,_t,{auto:d(E).reason==="auto-switch"}),D(gt,K)},[()=>o(d(E).timestamp),()=>l(d(E).reason)]),y(C,T)}),y(k,w)};B(p,k=>{d(n)?k(m):d(i)?k(b,1):d(s).length===0?k(x,2):k(S,!1)})}L(()=>D(f,`${d(s).length??""} switches`)),y(e,c),ke()}var K2=P("<!> <span>Par compte</span>",1),X2=P("<!> <span>Grouper</span>",1),G2=P('<div class="panel-placeholder svelte-1nfvjs4"><!> <span>Chargement des sessions...</span></div>'),J2=P('<div class="panel-placeholder panel-error svelte-1nfvjs4"><span> </span></div>'),Q2=P('<div class="panel-placeholder svelte-1nfvjs4"><!> <span>Aucune session enregistree</span></div>'),Z2=P('<tr class="svelte-1nfvjs4"><td class="account-cell svelte-1nfvjs4"><span class="account-email svelte-1nfvjs4"> </span></td><td class="num svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"><span class="cost-value svelte-1nfvjs4"> </span></td></tr>'),tk=P('<div class="cost-table-wrapper svelte-1nfvjs4"><table class="cost-table svelte-1nfvjs4"><thead class="svelte-1nfvjs4"><tr><th class="svelte-1nfvjs4">Compte</th><th class="num svelte-1nfvjs4">Sessions</th><th class="num svelte-1nfvjs4">Requetes</th><th class="num svelte-1nfvjs4">Input</th><th class="num svelte-1nfvjs4">Output</th><th class="num svelte-1nfvjs4">Cout estimé</th></tr></thead><tbody class="svelte-1nfvjs4"></tbody></table></div>'),ek=P('<tr class="svelte-1nfvjs4"><td class="account-cell svelte-1nfvjs4"><span class="account-email svelte-1nfvjs4"> </span></td><td class="svelte-1nfvjs4"><!></td><td class="num svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"><span class="cost-value svelte-1nfvjs4"> </span></td><td class="num dim svelte-1nfvjs4"> </td></tr>'),sk=P('<div class="cost-table-wrapper svelte-1nfvjs4"><table class="cost-table svelte-1nfvjs4"><thead class="svelte-1nfvjs4"><tr><th class="svelte-1nfvjs4">Compte</th><th class="svelte-1nfvjs4">Modele</th><th class="num svelte-1nfvjs4">Requetes</th><th class="num svelte-1nfvjs4">Input</th><th class="num svelte-1nfvjs4">Output</th><th class="num svelte-1nfvjs4">Cout estimé</th><th class="num svelte-1nfvjs4">Mise a jour</th></tr></thead><tbody class="svelte-1nfvjs4"></tbody></table></div>'),nk=P('<div class="footer-row svelte-1nfvjs4"><span class="footer-label svelte-1nfvjs4"> </span> <span class="footer-total svelte-1nfvjs4"> </span></div>'),ik=P('<div class="cost-footer svelte-1nfvjs4"><!></div>'),ak=P('<div class="cost-panel svelte-1nfvjs4"><div class="panel-toolbar svelte-1nfvjs4"><div class="toolbar-left svelte-1nfvjs4"><!> <span class="toolbar-title svelte-1nfvjs4">Couts par session</span> <!></div> <div class="toolbar-right svelte-1nfvjs4"><button><!></button> <button class="refresh-btn svelte-1nfvjs4" title="Rafraichir"><!></button></div></div> <!> <!></div>');function rk(e,t){xe(t,!0);let s=N(ye([])),n=N(!0),i=N(null),a=N(!1),r=null,o=H(()=>[...d(s)].sort((R,tt)=>tt.estimated_cost_usd-R.estimated_cost_usd)),l=H(()=>d(s).reduce((R,tt)=>R+(tt.estimated_cost_usd??0),0)),c=H(()=>()=>{const R=new Map;for(const tt of d(s)){const dt=tt.account_email??"inconnu";R.has(dt)||R.set(dt,{email:dt,sessions:[],totalCost:0,totalInput:0,totalOutput:0,totalRequests:0});const Ht=R.get(dt);Ht.sessions.push(tt),Ht.totalCost+=tt.estimated_cost_usd??0,Ht.totalInput+=tt.total_input_tokens??0,Ht.totalOutput+=tt.total_output_tokens??0,Ht.totalRequests+=tt.request_count??0}return[...R.values()].sort((tt,dt)=>dt.totalCost-tt.totalCost)});async function u(){try{const R=await wu();M(s,R.filter(tt=>tt&&typeof tt=="object"),!0),M(i,null)}catch(R){console.error("CostPanel: failed to load sessions",R),M(i,"Impossible de charger les sessions")}finally{M(n,!1)}}Ve(()=>(u(),r=setInterval(u,1e4),()=>{r!==null&&clearInterval(r)}));function h(R){return R===0?"$0.0000":R<1e-4?`$${R.toExponential(2)}`:`$${R.toFixed(4)}`}function f(R){return R?R>=1e6?`${(R/1e6).toFixed(1)}M`:R>=1e3?`${(R/1e3).toFixed(1)}k`:`${R}`:"0"}function v(R){return R?R.split("-").slice(-2).join("-"):"—"}function p(R){return R?new Date(R).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function m(R){return R<=0?"var(--fg-dim)":R<.01?"var(--phase-cruise)":R<.1?"var(--phase-watch)":R<1?"var(--phase-alert)":"var(--phase-critical)"}var b=ak(),x=g(b),S=g(x),k=g(S);Rl(k,{size:16});var w=_(k,4);{var $=R=>{Ke(R,{color:"var(--fg-dim)",small:!0,children:(tt,dt)=>{var Ht=Ut();L(()=>D(Ht,`${d(s).length??""} session${d(s).length!==1?"s":""}`)),y(tt,Ht)},$$slots:{default:!0}})};B(w,R=>{d(n)||R($)})}var A=_(S,2),z=g(A);let C;var E=g(z);{var T=R=>{var tt=K2(),dt=j(tt);dp(dt,{size:14}),y(R,tt)},O=R=>{var tt=X2(),dt=j(tt);Za(dt,{size:14}),y(R,tt)};B(E,R=>{d(a)?R(T):R(O,!1)})}var F=_(z,2),Z=g(F);{let R=H(()=>d(n)?"spin":"");ks(Z,{size:14,get class(){return d(R)}})}var Y=_(x,2);{var V=R=>{var tt=G2(),dt=g(tt);ks(dt,{size:20,class:"spin"}),y(R,tt)},J=R=>{var tt=J2(),dt=g(tt),Ht=g(dt);L(()=>D(Ht,d(i))),y(R,tt)},st=R=>{var tt=Q2(),dt=g(tt);Rl(dt,{size:20}),y(R,tt)},_t=R=>{var tt=tk(),dt=g(tt),Ht=_(g(dt));ie(Ht,21,()=>d(c),W=>W.email,(W,q)=>{var rt=Z2(),Rt=g(rt),It=g(Rt),U=g(It),$t=_(Rt),jt=g($t),ae=_($t),At=g(ae),Nt=_(ae),fe=g(Nt),ce=_(Nt),zt=g(ce),bt=_(ce),St=g(bt),ct=g(St);L((Ft,Tt,yt,Qt)=>{Ct(It,"title",d(q).email),D(U,d(q).email),D(jt,d(q).sessions.length),D(At,d(q).totalRequests),D(fe,Ft),D(zt,Tt),Le(St,`color: ${yt??""}`),D(ct,Qt)},[()=>f(d(q).totalInput),()=>f(d(q).totalOutput),()=>m(d(q).totalCost),()=>h(d(q).totalCost)]),y(W,rt)}),y(R,tt)},gt=R=>{var tt=sk(),dt=g(tt),Ht=_(g(dt));ie(Ht,21,()=>d(o),W=>W.session_id,(W,q)=>{var rt=ek(),Rt=g(rt),It=g(Rt),U=g(It),$t=_(Rt),jt=g($t);Ke(jt,{color:"var(--provider-anthropic)",small:!0,children:(yt,Qt)=>{var mt=Ut();L(Mt=>D(mt,Mt),[()=>v(d(q).model)]),y(yt,mt)},$$slots:{default:!0}});var ae=_($t),At=g(ae),Nt=_(ae),fe=g(Nt),ce=_(Nt),zt=g(ce),bt=_(ce),St=g(bt),ct=g(St),Ft=_(bt),Tt=g(Ft);L((yt,Qt,mt,Mt,Bt)=>{Ct(It,"title",d(q).account_email),D(U,d(q).account_email??"—"),D(At,d(q).request_count??0),D(fe,yt),D(zt,Qt),Le(St,`color: ${mt??""}`),D(ct,Mt),D(Tt,Bt)},[()=>f(d(q).total_input_tokens??0),()=>f(d(q).total_output_tokens??0),()=>m(d(q).estimated_cost_usd??0),()=>h(d(q).estimated_cost_usd??0),()=>p(d(q).updated_at)]),y(W,rt)}),y(R,tt)};B(Y,R=>{d(n)?R(V):d(i)?R(J,1):d(s).length===0?R(st,2):d(a)?R(_t,3):R(gt,!1)})}var kt=_(Y,2);{var K=R=>{var tt=ik(),dt=g(tt);de(dt,{hoverable:!1,padding:"12px 16px",children:(Ht,W)=>{var q=nk(),rt=g(q),Rt=g(rt),It=_(rt,2),U=g(It);L(($t,jt)=>{D(Rt,`Cout total estimé (${d(s).length??""} sessions)`),Le(It,`color: ${$t??""}`),D(U,jt)},[()=>m(d(l)),()=>h(d(l))]),y(Ht,q)},$$slots:{default:!0}}),y(R,tt)};B(kt,R=>{d(s).length>0&&R(K)})}L(()=>{C=Jt(z,1,"toggle-btn svelte-1nfvjs4",null,C,{active:d(a)}),Ct(z,"title",d(a)?"Vue liste":"Grouper par compte")}),it("click",z,()=>M(a,!d(a))),it("click",F,u),y(e,b),ke()}Oe(["click"]);var ok=P('<div class="bc-empty svelte-5lsw3n"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--phase-cruise)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>Aucun cooldown actif</span> <span class="bc-empty-hint svelte-5lsw3n">Tous les comptes OAuth sont disponibles</span></div>'),lk=P('<div class="bc-item svelte-5lsw3n"><div class="bc-item-header svelte-5lsw3n"><div class="bc-item-info svelte-5lsw3n"><span class="bc-email svelte-5lsw3n"> </span> <span class="bc-reason svelte-5lsw3n"> </span></div> <div class="bc-item-meta svelte-5lsw3n"><span class="bc-remaining svelte-5lsw3n"> </span> <span class="bc-until svelte-5lsw3n"> </span></div></div> <div class="bc-bar-track svelte-5lsw3n"><div class="bc-bar-fill svelte-5lsw3n"></div></div></div>'),ck=P('<div class="bc-item bc-item-expired svelte-5lsw3n"><div class="bc-item-header svelte-5lsw3n"><span class="bc-email dim svelte-5lsw3n"> </span> <span class="bc-remaining dim svelte-5lsw3n">expire</span></div></div>'),dk=P('<div class="bc-expired-section svelte-5lsw3n"><span class="bc-expired-label svelte-5lsw3n">Expires recemment</span> <!></div>'),uk=P('<div class="bc-list svelte-5lsw3n"></div> <!>',1),hk=P('<div class="backoff-chart svelte-5lsw3n"><div class="bc-header svelte-5lsw3n"><div class="bc-indicator svelte-5lsw3n"></div> <span class="bc-title svelte-5lsw3n">Cooldowns OAuth</span> <span class="bc-count svelte-5lsw3n"> </span></div> <!></div>');function fk(e,t){xe(t,!0);let s=pe(t,"cooldowns",19,()=>[]);function n(C){const E=new Date(C).getTime()-Date.now();return Math.max(0,Math.floor(E/1e3))}const i=300;function a(C){const E=n(C);return Math.max(0,Math.min(100,E/i*100))}function r(C){if(C<=0)return"expire";const E=Math.floor(C/60),T=C%60;return E===0?`${T}s`:`${E}m ${T}s`}function o(C){return new Date(C).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function l(C){return C===0?"var(--phase-cruise)":C<=2?"var(--phase-watch)":"var(--phase-alert)"}function c(C){return C<30?"var(--phase-cruise)":C<70?"var(--phase-watch)":"var(--phase-alert)"}let u=N(0),h=null;Ve(()=>(h=setInterval(()=>{M(u,d(u)+1)},1e3),()=>{h&&clearInterval(h)}));let f=H(()=>d(u)>=0?s().map(C=>({...C,remaining:n(C.cooldown_until),pct:a(C.cooldown_until)})):[]),v=H(()=>d(f).filter(C=>C.remaining>0)),p=H(()=>d(v).length),m=H(()=>l(d(p)));var b=hk(),x=g(b),S=g(x),k=_(S,4),w=g(k),$=_(x,2);{var A=C=>{var E=ok();y(C,E)},z=C=>{var E=uk(),T=j(E);ie(T,21,()=>d(v),Y=>Y.key,(Y,V)=>{var J=lk(),st=g(J),_t=g(st),gt=g(_t),kt=g(gt),K=_(gt,2),R=g(K),tt=_(_t,2),dt=g(tt),Ht=g(dt),W=_(dt,2),q=g(W),rt=_(st,2),Rt=g(rt);L((It,U,$t,jt)=>{Ct(gt,"title",d(V).email),D(kt,d(V).email),D(R,d(V).reason),Le(dt,`color: ${It??""}`),D(Ht,U),D(q,`jusqu'a ${$t??""}`),Le(Rt,`width: ${d(V).pct??""}%; background: ${jt??""}`)},[()=>c(d(V).pct),()=>r(d(V).remaining),()=>o(d(V).cooldown_until),()=>c(d(V).pct)]),y(Y,J)});var O=_(T,2);{var F=Y=>{var V=dk(),J=_(g(V),2);ie(J,17,()=>d(f).filter(st=>st.remaining===0),st=>st.key,(st,_t)=>{var gt=ck(),kt=g(gt),K=g(kt),R=g(K);L(()=>D(R,d(_t).email)),y(st,gt)}),y(Y,V)},Z=H(()=>d(f).some(Y=>Y.remaining===0));B(O,Y=>{d(Z)&&Y(F)})}y(C,E)};B($,C=>{d(p)===0?C(A):C(z,!1)})}L(()=>{Le(S,`background: ${d(m)??""}`),Le(k,`color: ${d(m)??""}`),D(w,`${d(p)??""} actif${d(p)!==1?"s":""}`)}),y(e,b),ke()}var vk=P('<span class="stat-pill svelte-n4ip9i" style="color: var(--phase-cruise)"> </span>'),pk=P('<span class="stat-pill svelte-n4ip9i" style="color: var(--status-warning)"> </span>'),gk=P('<span class="stat-pill svelte-n4ip9i" style="color: var(--status-error)"> </span>'),mk=P('<div class="pt-stats svelte-n4ip9i"><!> <!> <!></div>'),_k=P('<div class="pt-placeholder svelte-n4ip9i"><!> <span>Chargement des pairs...</span></div>'),bk=P('<div class="pt-placeholder pt-error svelte-n4ip9i"><span> </span></div>'),yk=P('<div class="pt-placeholder svelte-n4ip9i"><!> <span>Aucun pair configure</span> <span class="pt-placeholder-hint svelte-n4ip9i">Ajoutez des pairs dans les parametres de synchronisation</span></div>'),xk=P('<tr class="svelte-n4ip9i"><td class="addr-cell svelte-n4ip9i"><span class="status-dot svelte-n4ip9i"></span> <span class="addr-text svelte-n4ip9i"> </span></td><td class="svelte-n4ip9i"><!></td><td class="dim svelte-n4ip9i"> </td><td class="dim svelte-n4ip9i"> </td><td class="id-col mono dim svelte-n4ip9i"> </td></tr>'),kk=P('<div class="pt-table-wrapper svelte-n4ip9i"><table class="pt-table svelte-n4ip9i"><thead class="svelte-n4ip9i"><tr><th class="svelte-n4ip9i">Adresse</th><th class="svelte-n4ip9i">Statut</th><th class="svelte-n4ip9i">Latence</th><th class="svelte-n4ip9i">Derniere activite</th><th class="id-col svelte-n4ip9i">ID</th></tr></thead><tbody class="svelte-n4ip9i"></tbody></table></div>'),wk=hr("<line></line>"),$k=hr('<circle cx="0" cy="0" opacity="0.08" class="svelte-n4ip9i"></circle>'),Sk=hr('<g class="peer-node svelte-n4ip9i"><!><circle cx="0" cy="0" fill="var(--bg-card)" stroke-width="2" class="svelte-n4ip9i"></circle><text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="700"> </text><text x="0" text-anchor="middle" dominant-baseline="central" font-size="9" fill="var(--fg-secondary)"> </text></g>'),Mk=P('<div class="pt-graph-wrapper svelte-n4ip9i"><svg class="pt-svg svelte-n4ip9i" role="img" aria-label="Topologie reseau des pairs"><!><circle fill="none" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 6" opacity="0.4"></circle><!><g><circle cx="0" cy="0" fill="var(--accent)" opacity="0.08"></circle><circle cx="0" cy="0" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2.5"></circle><text x="0" y="-5" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="700" fill="var(--fg-accent)">Vous</text><text x="0" y="8" text-anchor="middle" dominant-baseline="central" font-size="9" fill="var(--fg-dim)">(local)</text></g></svg> <div class="graph-legend svelte-n4ip9i"><span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--phase-cruise)"></span> Actif</span> <span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--status-warning)"></span> Suspect</span> <span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--status-error)"></span> Hors ligne</span> <span class="legend-item svelte-n4ip9i"><span class="legend-line-dashed svelte-n4ip9i"></span> Connexion inactive</span></div></div>'),Pk=P('<div class="peer-topology svelte-n4ip9i"><div class="pt-toolbar svelte-n4ip9i"><div class="pt-toolbar-left svelte-n4ip9i"><!> <span class="pt-title svelte-n4ip9i">Topologie reseau</span> <!></div> <div class="pt-toolbar-right svelte-n4ip9i"><div class="mode-toggle svelte-n4ip9i"><button title="Vue liste"><!></button> <button title="Vue graphe"><!></button></div> <button class="refresh-btn svelte-n4ip9i" title="Rafraichir"><!></button></div></div> <!></div>');function Ak(e,t){xe(t,!0);let s=N(ye([])),n=N(!0),i=N(null),a=N("list"),r=null;const o=500,l=340,c=o/2,u=l/2,h=120,f=22,v=28;function p(U){return U.status==="ALIVE"||U.status==="alive"?"ALIVE":U.status==="SUSPECT"||U.status==="suspect"?"SUSPECT":U.status==="DEAD"||U.status==="dead"?"DEAD":U.connected===!0?"ALIVE":U.connected===!1?"DEAD":"SUSPECT"}function m(U){return U.addr?U.addr:U.host&&U.port?`${U.host}:${U.port}`:U.host?U.host:U.id}function b(U){return{id:U.id,addr:m(U),status:p(U),lastSeen:U.last_seen??U.lastSeen??null,latencyMs:null}}async function x(){try{const U=await qa();M(s,U.map(b),!0),M(i,null)}catch(U){console.error("PeerTopology: failed to load peers",U),M(i,"Impossible de charger les pairs")}finally{M(n,!1)}}Ve(()=>(x(),r=setInterval(x,5e3),()=>{r!==null&&clearInterval(r)}));function S(U){return U==="ALIVE"?"var(--phase-cruise)":U==="SUSPECT"?"var(--status-warning)":"var(--status-error)"}function k(U){return U==="ALIVE"?"Actif":U==="SUSPECT"?"Suspect":"Hors ligne"}function w(U){if(!U)return"jamais";const $t=Date.now()-new Date(U).getTime(),jt=Math.floor($t/1e3);if(jt<60)return`il y a ${jt}s`;const ae=Math.floor(jt/60);return ae<60?`il y a ${ae}min`:`il y a ${Math.floor(ae/60)}h`}function $(U,$t){if($t===0)return{x:c,y:u};const jt=2*Math.PI*U/$t-Math.PI/2;return{x:c+h*Math.cos(jt),y:u+h*Math.sin(jt)}}let A=H(()=>d(s).filter(U=>U.status==="ALIVE").length),z=H(()=>d(s).filter(U=>U.status==="SUSPECT").length),C=H(()=>d(s).filter(U=>U.status==="DEAD").length);var E=Pk(),T=g(E),O=g(T),F=g(O);Rr(F,{size:16});var Z=_(F,4);{var Y=U=>{var $t=mk(),jt=g($t);{var ae=zt=>{var bt=vk(),St=g(bt);L(()=>D(St,`${d(A)??""} actif${d(A)!==1?"s":""}`)),y(zt,bt)};B(jt,zt=>{d(A)>0&&zt(ae)})}var At=_(jt,2);{var Nt=zt=>{var bt=pk(),St=g(bt);L(()=>D(St,`${d(z)??""} suspect${d(z)!==1?"s":""}`)),y(zt,bt)};B(At,zt=>{d(z)>0&&zt(Nt)})}var fe=_(At,2);{var ce=zt=>{var bt=gk(),St=g(bt);L(()=>D(St,`${d(C)??""} hors ligne`)),y(zt,bt)};B(fe,zt=>{d(C)>0&&zt(ce)})}y(U,$t)};B(Z,U=>{d(n)||U(Y)})}var V=_(O,2),J=g(V),st=g(J);let _t;var gt=g(st);up(gt,{size:14});var kt=_(st,2);let K;var R=g(kt);Rr(R,{size:14});var tt=_(J,2),dt=g(tt);ks(dt,{size:14});var Ht=_(T,2);{var W=U=>{var $t=_k(),jt=g($t);ks(jt,{size:20,class:"spin"}),y(U,$t)},q=U=>{var $t=bk(),jt=g($t),ae=g(jt);L(()=>D(ae,d(i))),y(U,$t)},rt=U=>{var $t=yk(),jt=g($t);Rr(jt,{size:24}),y(U,$t)},Rt=U=>{var $t=kk(),jt=g($t),ae=_(g(jt));ie(ae,21,()=>d(s),At=>At.id,(At,Nt)=>{var fe=xk(),ce=g(fe),zt=g(ce),bt=_(zt,2),St=g(bt),ct=_(ce),Ft=g(ct);{let se=H(()=>S(d(Nt).status));Ke(Ft,{get color(){return d(se)},small:!0,children:(oe,Lt)=>{var Et=Ut();L(te=>D(Et,te),[()=>k(d(Nt).status)]),y(oe,Et)},$$slots:{default:!0}})}var Tt=_(ct),yt=g(Tt),Qt=_(Tt),mt=g(Qt),Mt=_(Qt),Bt=g(Mt);L((se,oe,Lt)=>{Le(zt,`background: ${se??""}`),D(St,d(Nt).addr),D(yt,d(Nt).latencyMs!==null?`${d(Nt).latencyMs}ms`:"—"),D(mt,oe),Ct(Mt,"title",d(Nt).id),D(Bt,`${Lt??""}…`)},[()=>S(d(Nt).status),()=>w(d(Nt).lastSeen),()=>d(Nt).id.slice(0,12)]),y(At,fe)}),y(U,$t)},It=U=>{var $t=Mk(),jt=g($t);Ct(jt,"viewBox","0 0 500 340");var ae=g(jt);ie(ae,19,()=>d(s),bt=>bt.id,(bt,St,ct)=>{const Ft=H(()=>$(d(ct),d(s).length));var Tt=wk();Ct(Tt,"x1",c),Ct(Tt,"y1",u),L(yt=>{Ct(Tt,"x2",d(Ft).x),Ct(Tt,"y2",d(Ft).y),Ct(Tt,"stroke",yt),Ct(Tt,"stroke-width",d(St).status==="ALIVE"?1.5:1),Ct(Tt,"stroke-opacity",d(St).status==="ALIVE"?.5:.2),Ct(Tt,"stroke-dasharray",d(St).status==="DEAD"?"4 4":"none")},[()=>S(d(St).status)]),y(bt,Tt)});var At=_(ae);Ct(At,"cx",c),Ct(At,"cy",u),Ct(At,"r",h);var Nt=_(At);ie(Nt,19,()=>d(s),bt=>bt.id,(bt,St,ct)=>{const Ft=H(()=>$(d(ct),d(s).length));var Tt=Sk(),yt=g(Tt);{var Qt=Lt=>{var Et=$k();Ct(Et,"r",f+6),L(te=>Ct(Et,"fill",te),[()=>S(d(St).status)]),y(Lt,Et)};B(yt,Lt=>{d(St).status==="ALIVE"&&Lt(Qt)})}var mt=_(yt);Ct(mt,"r",f);var Mt=_(mt),Bt=g(Mt),se=_(Mt);Ct(se,"y",f+14);var oe=g(se);L((Lt,Et,te)=>{Ct(Tt,"transform",`translate(${d(Ft).x??""},${d(Ft).y??""})`),Ct(mt,"stroke",Lt),Ct(Mt,"fill",Et),D(Bt,d(St).status==="ALIVE"?"●":d(St).status==="SUSPECT"?"◐":"○"),D(oe,te)},[()=>S(d(St).status),()=>S(d(St).status),()=>d(St).addr.length>18?d(St).addr.slice(0,18)+"…":d(St).addr]),y(bt,Tt)});var fe=_(Nt);Ct(fe,"transform","translate(250,170)");var ce=g(fe);Ct(ce,"r",v+8);var zt=_(ce);Ct(zt,"r",v),y(U,$t)};B(Ht,U=>{d(n)?U(W):d(i)?U(q,1):d(s).length===0?U(rt,2):d(a)==="list"?U(Rt,3):U(It,!1)})}L(()=>{_t=Jt(st,1,"mode-btn svelte-n4ip9i",null,_t,{active:d(a)==="list"}),K=Jt(kt,1,"mode-btn svelte-n4ip9i",null,K,{active:d(a)==="graph"})}),it("click",st,()=>M(a,"list")),it("click",kt,()=>M(a,"graph")),it("click",tt,x),y(e,E),ke()}Oe(["click"]);var Ck=P("<button> </button>"),zk=P('<div class="monitoring-screen svelte-c089yk"><header class="screen-header svelte-c089yk"><h1 class="screen-title svelte-c089yk">Monitoring</h1></header> <div class="tab-bar svelte-c089yk"></div> <div class="tab-content svelte-c089yk"><!></div></div>');function Tk(e){let t=N("quotas");const s=[{id:"quotas",label:"Quotas"},{id:"requests",label:"Requetes"},{id:"sessions",label:"Sessions"},{id:"costs",label:"Couts"},{id:"switches",label:"Switches"},{id:"cooldowns",label:"Cooldowns"},{id:"peers",label:"Pairs"},{id:"logs",label:"Journal"}];var n=zk(),i=_(g(n),2);ie(i,21,()=>s,Ie,(m,b)=>{var x=Ck();let S;var k=g(x);L(()=>{S=Jt(x,1,"tab-item svelte-c089yk",null,S,{active:d(t)===d(b).id}),D(k,d(b).label)}),it("click",x,()=>M(t,d(b).id,!0)),y(m,x)});var a=_(i,2),r=g(a);{var o=m=>{x2(m,{})},l=m=>{M2(m,{})},c=m=>{E2(m,{})},u=m=>{rk(m,{})},h=m=>{Y2(m,{})},f=m=>{fk(m,{})},v=m=>{Ak(m,{})},p=m=>{I2(m,{})};B(r,m=>{d(t)==="quotas"?m(o):d(t)==="requests"?m(l,1):d(t)==="sessions"?m(c,2):d(t)==="costs"?m(u,3):d(t)==="switches"?m(h,4):d(t)==="cooldowns"?m(f,5):d(t)==="peers"?m(v,6):m(p,!1)})}y(e,n)}Oe(["click"]);var Ek=P('<h3 class="section-title svelte-onrf5"> </h3>'),Dk=P('<div class="settings-section svelte-onrf5"><!> <div class="section-content svelte-onrf5"><!></div></div>');function ja(e,t){let s=pe(t,"title",3,"");var n=Dk(),i=g(n);{var a=l=>{var c=Ek(),u=g(c);L(()=>D(u,s())),y(l,c)};B(i,l=>{s()&&l(a)})}var r=_(i,2),o=g(r);Sn(o,()=>t.children),y(e,n)}var Ok=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Auto-refresh</span> <span class="setting-desc svelte-y99ba5">Rafraichir automatiquement les quotas</span></div> <!></div>'),Rk=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Intervalle (secondes)</span> <span class="setting-desc svelte-y99ba5">Frequence de rafraichissement</span></div> <input type="number" class="setting-input svelte-y99ba5" min="10" max="600"/></div>'),Lk=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Auto-switch</span> <span class="setting-desc svelte-y99ba5">Changer de compte automatiquement quand quota atteint</span></div> <!></div>'),Ik=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Rotation</span> <span class="setting-desc svelte-y99ba5">Rotation automatique entre comptes</span></div> <!></div>'),jk=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Intervalle rotation (min)</span> <span class="setting-desc svelte-y99ba5">Duree avant de changer de compte</span></div> <input type="number" class="setting-input svelte-y99ba5" min="1" max="120"/></div>'),Nk=P('<div class="settings-group svelte-y99ba5"><!> <!> <!> <!> <!></div>'),Fk=P('<p class="loading-text svelte-y99ba5">Chargement de la configuration...</p>'),Bk=P('<div class="general-settings svelte-y99ba5"><h3 class="section-title svelte-y99ba5">General</h3> <!></div>');function qk(e,t){xe(t,!0);let s=N(null);Ve(()=>(Me.load(),Me.subscribe(v=>{M(s,v,!0)})));async function n(f){await Me.save({adaptiveRefresh:f})}async function i(f){const v=parseInt(f.target.value);v>=10&&v<=600&&await Me.save({refreshIntervalSecs:v})}async function a(f){if(!d(s)?.proxy)return;const v={...d(s).proxy};f?(v.autoSwitchThreshold5h=.85,v.autoSwitchThreshold7d=.9):(v.autoSwitchThreshold5h=0,v.autoSwitchThreshold7d=0),await Me.save({proxy:v})}async function r(f){if(!d(s)?.proxy)return;const v={...d(s).proxy,rotationEnabled:f};await Me.save({proxy:v})}async function o(f){if(!d(s)?.proxy)return;const v=parseInt(f.target.value);if(v>=1&&v<=120){const p={...d(s).proxy,rotationIntervalSecs:v*60};await Me.save({proxy:p})}}var l=Bk(),c=_(g(l),2);{var u=f=>{var v=Nk(),p=g(v);de(p,{hoverable:!1,children:($,A)=>{var z=Ok(),C=_(g(z),2);{let E=H(()=>d(s)?.adaptiveRefresh??!1);bs(C,{get checked(){return d(E)},onchange:n})}y($,z)},$$slots:{default:!0}});var m=_(p,2);{var b=$=>{de($,{hoverable:!1,children:(A,z)=>{var C=Rk(),E=_(g(C),2);L(()=>Ji(E,d(s)?.refreshIntervalSecs??60)),it("change",E,i),y(A,C)},$$slots:{default:!0}})};B(m,$=>{d(s)?.adaptiveRefresh&&$(b)})}var x=_(m,2);de(x,{hoverable:!1,children:($,A)=>{var z=Lk(),C=_(g(z),2);{let E=H(()=>(d(s)?.proxy?.autoSwitchThreshold5h??0)>0);bs(C,{get checked(){return d(E)},onchange:a})}y($,z)},$$slots:{default:!0}});var S=_(x,2);de(S,{hoverable:!1,children:($,A)=>{var z=Ik(),C=_(g(z),2);{let E=H(()=>d(s)?.proxy?.rotationEnabled??!1);bs(C,{get checked(){return d(E)},onchange:r})}y($,z)},$$slots:{default:!0}});var k=_(S,2);{var w=$=>{de($,{hoverable:!1,children:(A,z)=>{var C=jk(),E=_(g(C),2);L(T=>Ji(E,T),[()=>Math.round((d(s)?.proxy?.rotationIntervalSecs??3600)/60)]),it("change",E,o),y(A,C)},$$slots:{default:!0}})};B(k,$=>{d(s)?.proxy?.rotationEnabled&&$(w)})}y(f,v)},h=f=>{var v=Fk();y(f,v)};B(c,f=>{d(s)?f(u):f(h,!1)})}y(e,l),ke()}Oe(["change"]);var Vk=P('<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Son</span> <span class="setting-desc svelte-1x8ltrf">Jouer un son lors des notifications</span></div> <!></div>'),Hk=P('<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Toasts</span> <span class="setting-desc svelte-1x8ltrf">Afficher les notifications toast</span></div> <!></div>'),Wk=P(`<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Seuil d'alerte (%)</span> <span class="setting-desc svelte-1x8ltrf">Pourcentage de quota avant notification</span></div> <div class="threshold-input svelte-1x8ltrf"><input type="range" class="range-input svelte-1x8ltrf" min="50" max="99"/> <span class="threshold-value svelte-1x8ltrf"> </span></div></div>`),Uk=P('<div class="settings-group svelte-1x8ltrf"><!> <!> <!></div>'),Yk=P('<p class="loading-text svelte-1x8ltrf">Chargement...</p>'),Kk=P('<div class="alert-settings svelte-1x8ltrf"><h3 class="section-title svelte-1x8ltrf">Alertes & Notifications</h3> <!></div>');function Xk(e,t){xe(t,!0);let s=N(null);Ve(()=>Me.subscribe(h=>{M(s,h,!0)}));async function n(u){d(s)?.alerts&&await Me.save({alerts:{...d(s).alerts,soundEnabled:u}})}async function i(u){d(s)?.alerts&&await Me.save({alerts:{...d(s).alerts,toastsEnabled:u}})}async function a(u){if(!d(s)?.alerts)return;const h=parseInt(u.target.value);h>=50&&h<=99&&await Me.save({alerts:{...d(s).alerts,quotaAlertThreshold:h/100}})}var r=Kk(),o=_(g(r),2);{var l=u=>{var h=Uk(),f=g(h);de(f,{hoverable:!1,children:(m,b)=>{var x=Vk(),S=_(g(x),2);{let k=H(()=>d(s)?.alerts?.soundEnabled??!1);bs(S,{get checked(){return d(k)},onchange:n})}y(m,x)},$$slots:{default:!0}});var v=_(f,2);de(v,{hoverable:!1,children:(m,b)=>{var x=Hk(),S=_(g(x),2);{let k=H(()=>d(s)?.alerts?.toastsEnabled??!0);bs(S,{get checked(){return d(k)},onchange:i})}y(m,x)},$$slots:{default:!0}});var p=_(v,2);de(p,{hoverable:!1,children:(m,b)=>{var x=Wk(),S=_(g(x),2),k=g(S),w=_(k,2),$=g(w);L((A,z)=>{Ji(k,A),D($,`${z??""}%`)},[()=>Math.round((d(s)?.alerts?.quotaAlertThreshold??.8)*100),()=>Math.round((d(s)?.alerts?.quotaAlertThreshold??.8)*100)]),it("input",k,a),y(m,x)},$$slots:{default:!0}}),y(u,h)},c=u=>{var h=Yk();y(u,h)};B(o,u=>{d(s)?u(l):u(c,!1)})}y(e,r),ke()}Oe(["input"]);var Gk=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchronisation P2P</span> <span class="setting-desc svelte-1aja7hz">Partager les credentials entre instances</span></div> <!></div>'),Jk=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Port TCP</span> <span class="setting-desc svelte-1aja7hz">Port de la synchronisation P2P (1024–65535)</span></div> <input type="number" class="port-edit-input svelte-1aja7hz" min="1024" max="65535"/></div>'),Qk=P('<button class="icon-btn svelte-1aja7hz" title="Copier"><!></button>'),Zk=P("<!> Generer",1),tw=P('<div class="key-edit-row svelte-1aja7hz"><input type="text" class="peer-input key-input svelte-1aja7hz" placeholder="64 caracteres hex..."/> <!> <!></div>'),ew=P('<div class="key-section svelte-1aja7hz"><div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Cle partagee (NaCl SecretBox)</span> <span class="setting-desc svelte-1aja7hz">Cle de chiffrement P2P (32 bytes hex)</span></div></div> <div class="key-display svelte-1aja7hz"><code class="key-value svelte-1aja7hz"> </code> <div class="key-actions svelte-1aja7hz"><button class="icon-btn svelte-1aja7hz"><!></button> <!></div></div> <div class="key-buttons svelte-1aja7hz"><!> <!></div></div>'),sw=P("<!> Ajouter",1),nw=P("<!> Tester",1),iw=P("<!> ",1),aw=P("<!> ",1),rw=P("<div><!></div>"),ow=P('<span class="peer-seen svelte-1aja7hz"> </span>'),lw=P('<div class="peer-item svelte-1aja7hz"><span class="peer-icon svelte-1aja7hz"><!></span> <span class="peer-address svelte-1aja7hz"> </span> <!> <!> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Tester la connexion"><!></button> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Supprimer"><!></button></div>'),cw=P('<p class="no-peers svelte-1aja7hz">Aucun pair configure</p>'),dw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchroniser le compte actif</span> <span class="setting-desc svelte-1aja7hz">Propager les switchs de compte entre pairs</span></div> <!></div>'),uw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchroniser les quotas</span> <span class="setting-desc svelte-1aja7hz">Partager les mises a jour de quota entre pairs</span></div> <!></div>'),hw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Repartir les fetches de quota</span> <span class="setting-desc svelte-1aja7hz">Diviser les appels API quota entre pairs</span></div> <!></div>'),fw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Failover proxy automatique</span> <span class="setting-desc svelte-1aja7hz">Basculer vers un proxy pair si le local tombe</span></div> <!></div>'),vw=P('<div class="daemon-info svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Mode daemon (headless)</span> <span class="setting-desc svelte-1aja7hz">Compatible serveur Ubuntu sans GUI — meme fichier settings.json</span></div> <code class="mono-value code-block svelte-1aja7hz"> </code></div>'),pw=P(`<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Nom de cette instance</span> <span class="setting-desc svelte-1aja7hz">Utilise pour l'identification P2P et le proxy owner</span></div> <code class="mono-value svelte-1aja7hz"> </code></div>`),gw=P('<!> <!> <div class="peers-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz">Pairs connectes</h4> <div class="add-peer-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Hote (ex: 192.168.1.10)"/> <input type="number" class="peer-input port-input svelte-1aja7hz" placeholder="Port"/> <!> <!></div> <!> <div class="peer-list svelte-1aja7hz"><!> <!></div></div> <div class="options-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz">Options de synchronisation</h4> <!> <!> <!> <!></div> <!> <!>',1),mw=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Activer la sync SSH</span> <span class="setting-desc svelte-1aja7hz">Pousser les credentials vers des serveurs distants via SCP</span></div> <!></div>'),_w=P("<!> Ajouter",1),bw=P("<!> ",1),yw=P("<!> ",1),xw=P("<div><!></div>"),kw=P('<span class="peer-seen svelte-1aja7hz"><!> </span>'),ww=P('<div class="peer-item svelte-1aja7hz"><span class="peer-icon svelte-1aja7hz"><!></span> <span class="peer-address svelte-1aja7hz"> </span> <!> <!> <button class="icon-btn svelte-1aja7hz" title="Tester la connexion SSH"><!></button> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Supprimer"><!></button></div>'),$w=P('<p class="no-peers svelte-1aja7hz">Aucun hote SSH configure</p>'),Sw=P('<div class="ssh-add-form svelte-1aja7hz"><div class="ssh-form-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Utilisateur"/> <span class="ssh-at svelte-1aja7hz">@</span> <input type="text" class="peer-input svelte-1aja7hz" placeholder="Hote (ex: 192.168.1.10)"/> <input type="number" class="peer-input port-input svelte-1aja7hz" placeholder="22"/></div> <div class="ssh-form-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Chemin cle privee (optionnel, ex: ~/.ssh/id_rsa)"/> <!></div></div> <!> <div class="peer-list svelte-1aja7hz"><!> <!></div>',1),Mw=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Service systemd</span> <span class="setting-desc svelte-1aja7hz">Lancer automatiquement le daemon + proxy au demarrage du systeme</span></div> <div class="systemd-status-row svelte-1aja7hz"><!> <button class="icon-btn svelte-1aja7hz" title="Rafraichir le statut"><!></button></div></div>'),Pw=P("<!> Installer le service",1),Aw=P("<!> Desinstaller",1),Cw=P("<!> Reinstaller et demarrer",1),zw=P("<!> Desinstaller",1),Tw=P("<!> <!>",1),Ew=P("<div> </div>"),Dw=P(`<div class="daemon-info svelte-1aja7hz"><span class="setting-desc svelte-1aja7hz">Le service systemd lancera <code>ai-manager-daemon --settings ~/path/settings.json</code> au demarrage.
                Le proxy et la sync P2P se lanceront automatiquement selon la configuration.</span></div>`),Ow=P('<div class="systemd-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz"><!> Lancement automatique (systemd)</h4> <!> <div class="systemd-actions svelte-1aja7hz"><!></div> <!> <!></div>'),Rw=P('<div class="settings-group svelte-1aja7hz"><!> <!> <div class="ssh-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz"><!> Synchronisation SSH</h4> <!> <!></div> <!></div>'),Lw=P('<p class="loading-text svelte-1aja7hz">Chargement...</p>'),Iw=P('<div class="network-settings svelte-1aja7hz"><h3 class="section-title svelte-1aja7hz">Reseau & P2P</h3> <!></div>');function jw(e,t){xe(t,!0);let s=N(null),n=N(ye([])),i=N(""),a=N(9090),r=N(!1),o=N(""),l=N(!1),c=N(!1),u=N(null),h=N(null),f=N("—"),v=N(""),p=N(""),m=N(22),b=N(""),x=N(null),S=N(null),k=N("loading"),w=N(!1),$=N(null);Ve(async()=>{As.load();const q=Me.subscribe(Rt=>{M(s,Rt,!0)}),rt=As.peers.subscribe(Rt=>{M(n,Rt,!0)});try{M(f,await cg(),!0)}catch{}try{M(k,await wa(),!0)}catch{M(k,"unavailable")}return()=>{q(),rt()}});async function A(q){d(s)?.sync&&(await ig(q),await Me.load(),await As.load())}async function z(q){!d(s)?.sync||q<1024||q>65535||(await ag(q),await Me.load())}async function C(q,rt){d(s)?.sync&&await Me.save({sync:{...d(s).sync,[q]:rt}})}async function E(){d(i)&&(await As.addPeer(d(i),d(a)),M(i,""),M(a,9090),await As.load())}async function T(q){await As.removePeer(q),await As.load()}async function O(q,rt){const Rt=`${q}:${rt}`;M(u,Rt),M(h,null);try{const It=await As.testPeer(q,rt);M(h,{host:Rt,ok:It},!0)}catch(It){M(h,{host:Rt,ok:!1,error:String(It)},!0)}finally{M(u,null)}}async function F(){const q=await As.generateKey();d(s)&&M(s,{...d(s),sync:{...d(s).sync,sharedKeyHex:q}},!0),M(r,!0)}async function Z(){!d(o)||d(o).length!==64||(await As.setKey(d(o)),d(s)&&M(s,{...d(s),sync:{...d(s).sync,sharedKeyHex:d(o)}},!0),M(l,!1),M(o,""))}function Y(){d(s)?.sync?.sharedKeyHex&&(navigator.clipboard.writeText(d(s).sync.sharedKeyHex),M(c,!0),setTimeout(()=>{M(c,!1)},2e3))}function V(q){return q?d(r)?q:q.substring(0,8)+"..."+q.substring(q.length-8):"—"}async function J(q){d(s)?.sync&&await Me.save({sync:{...d(s).sync,sshEnabled:q}})}async function st(){!d(v)||!d(p)||(await dg(d(p),d(m),d(v),d(b)||void 0),await Me.load(),M(v,""),M(p,""),M(m,22),M(b,""))}async function _t(q){await ug(q),await Me.load()}async function gt(q){M(x,q.id,!0),M(S,null);try{const rt=await hg(q.host,q.port,q.username,q.identityPath);M(S,{id:q.id,ok:rt},!0)}catch(rt){M(S,{id:q.id,ok:!1,error:String(rt)},!0)}finally{M(x,null)}}async function kt(){M(w,!0),M($,null);try{const q=await Zp();M($,q,!0),M(k,await wa(),!0)}catch(q){M($,String(q),!0)}finally{M(w,!1)}}async function K(){M(w,!0),M($,null);try{const q=await tg();M($,q,!0),M(k,await wa(),!0)}catch(q){M($,String(q),!0)}finally{M(w,!1)}}async function R(){try{M(k,await wa(),!0)}catch{M(k,"unavailable")}}var tt=Iw(),dt=_(g(tt),2);{var Ht=q=>{var rt=Rw(),Rt=g(rt);de(Rt,{hoverable:!1,children:(bt,St)=>{var ct=Gk(),Ft=_(g(ct),2);{let Tt=H(()=>d(s)?.sync?.enabled??!1);bs(Ft,{get checked(){return d(Tt)},onchange:A})}y(bt,ct)},$$slots:{default:!0}});var It=_(Rt,2);{var U=bt=>{var St=gw(),ct=j(St);de(ct,{hoverable:!1,children:(I,G)=>{var et=Jk(),Q=_(g(et),2);L(()=>Ji(Q,d(s)?.sync?.port??9090)),Es("blur",Q,ut=>z(Number(ut.currentTarget.value))),it("keydown",Q,ut=>{ut.key==="Enter"&&ut.currentTarget.blur()}),y(I,et)},$$slots:{default:!0}});var Ft=_(ct,2);de(Ft,{hoverable:!1,children:(I,G)=>{var et=ew(),Q=_(g(et),2),ut=g(Q),Wt=g(ut),Gt=_(ut,2),qt=g(Gt),xt=g(qt);{var nt=me=>{sp(me,{size:14})},Pt=me=>{np(me,{size:14})};B(xt,me=>{d(r)?me(nt):me(Pt,!1)})}var ue=_(qt,2);{var we=me=>{var He=Qk(),Re=g(He);{var _e=ls=>{Or(ls,{size:14})},Ys=ls=>{Zv(ls,{size:14})};B(Re,ls=>{d(c)?ls(_e):ls(Ys,!1)})}it("click",He,Y),y(me,He)};B(ue,me=>{d(s)?.sync?.sharedKeyHex&&me(we)})}var as=_(Q,2),Be=g(as);Vt(Be,{variant:"primary",size:"sm",onclick:F,children:(me,He)=>{var Re=Zk(),_e=j(Re);Ll(_e,{size:14}),y(me,Re)},$$slots:{default:!0}});var ts=_(Be,2);{var Se=me=>{Vt(me,{variant:"ghost",size:"sm",onclick:()=>{M(l,!0),M(o,"")},children:(He,Re)=>{var _e=Ut("Saisir manuellement");y(He,_e)},$$slots:{default:!0}})},rs=me=>{var He=tw(),Re=g(He);Ct(Re,"maxlength",64);var _e=_(Re,2);{let ls=H(()=>d(o).length!==64);Vt(_e,{variant:"primary",size:"sm",onclick:Z,get disabled(){return d(ls)},children:(pa,Ae)=>{var We=Ut("Sauvegarder");y(pa,We)},$$slots:{default:!0}})}var Ys=_(_e,2);Vt(Ys,{variant:"ghost",size:"sm",onclick:()=>{M(l,!1)},children:(ls,pa)=>{var Ae=Ut("Annuler");y(ls,Ae)},$$slots:{default:!0}}),Ee(Re,()=>d(o),ls=>M(o,ls)),y(me,He)};B(ts,me=>{d(l)?me(rs,!1):me(Se)})}L(me=>{D(Wt,me),Ct(qt,"title",d(r)?"Masquer":"Afficher")},[()=>V(d(s)?.sync?.sharedKeyHex??null)]),it("click",qt,()=>M(r,!d(r))),y(I,et)},$$slots:{default:!0}});var Tt=_(Ft,2),yt=_(g(Tt),2),Qt=g(yt),mt=_(Qt,2),Mt=_(mt,2);Vt(Mt,{variant:"primary",size:"sm",onclick:E,children:(I,G)=>{var et=sw(),Q=j(et);Qi(Q,{size:14}),y(I,et)},$$slots:{default:!0}});var Bt=_(Mt,2);{var se=I=>{{let G=H(()=>d(u)!==null);Vt(I,{variant:"ghost",size:"sm",onclick:()=>O(d(i),d(a)),get disabled(){return d(G)},children:(et,Q)=>{var ut=nw(),Wt=j(ut);Wi(Wt,{size:14}),y(et,ut)},$$slots:{default:!0}})}};B(Bt,I=>{d(i)&&I(se)})}var oe=_(yt,2);{var Lt=I=>{var G=rw();let et;var Q=g(G);{var ut=Gt=>{var qt=iw(),xt=j(qt);Or(xt,{size:14});var nt=_(xt);L(()=>D(nt,` Connexion reussie vers ${d(h).host??""}`)),y(Gt,qt)},Wt=Gt=>{var qt=aw(),xt=j(qt);uo(xt,{size:14});var nt=_(xt);L(()=>D(nt,` Echec: ${d(h).error??"Connexion refusee"??""}`)),y(Gt,qt)};B(Q,Gt=>{d(h).ok?Gt(ut):Gt(Wt,!1)})}L(()=>et=Jt(G,1,"test-result svelte-1aja7hz",null,et,{"test-ok":d(h).ok,"test-fail":!d(h).ok})),y(I,G)};B(oe,I=>{d(h)&&I(Lt)})}var Et=_(oe,2),te=g(Et);ie(te,17,()=>d(n),I=>I.id,(I,G)=>{var et=lw(),Q=g(et),ut=g(Q);{var Wt=Se=>{Wo(Se,{size:14})},Gt=Se=>{yu(Se,{size:14})};B(ut,Se=>{d(G).connected?Se(Wt):Se(Gt,!1)})}var qt=_(Q,2),xt=g(qt),nt=_(qt,2);{let Se=H(()=>d(G).connected?"var(--status-running)":"var(--status-stopped)");Ke(nt,{get color(){return d(Se)},small:!0,children:(rs,me)=>{var He=Ut();L(()=>D(He,d(G).connected?"Connecte":"Deconnecte")),y(rs,He)},$$slots:{default:!0}})}var Pt=_(nt,2);{var ue=Se=>{var rs=ow(),me=g(rs);L(()=>D(me,d(G).lastSeen)),y(Se,rs)};B(Pt,Se=>{d(G).lastSeen&&Se(ue)})}var we=_(Pt,2),as=g(we);Wi(as,{size:12});var Be=_(we,2),ts=g(Be);ii(ts,{size:12}),L(()=>{D(xt,`${d(G).host??""}:${d(G).port??""}`),we.disabled=d(u)===`${d(G).host}:${d(G).port}`}),it("click",we,()=>O(d(G).host,d(G).port)),it("click",Be,()=>T(d(G).id)),y(I,et)});var ge=_(te,2);{var Zt=I=>{var G=cw();y(I,G)};B(ge,I=>{d(n).length===0&&I(Zt)})}var Kt=_(Tt,2),X=_(g(Kt),2);de(X,{hoverable:!1,children:(I,G)=>{var et=dw(),Q=_(g(et),2);{let ut=H(()=>d(s)?.sync?.syncActiveAccount??!0);bs(Q,{get checked(){return d(ut)},onchange:Wt=>C("syncActiveAccount",Wt)})}y(I,et)},$$slots:{default:!0}});var Dt=_(X,2);de(Dt,{hoverable:!1,children:(I,G)=>{var et=uw(),Q=_(g(et),2);{let ut=H(()=>d(s)?.sync?.syncQuota??!0);bs(Q,{get checked(){return d(ut)},onchange:Wt=>C("syncQuota",Wt)})}y(I,et)},$$slots:{default:!0}});var lt=_(Dt,2);de(lt,{hoverable:!1,children:(I,G)=>{var et=hw(),Q=_(g(et),2);{let ut=H(()=>d(s)?.sync?.splitQuotaFetch??!0);bs(Q,{get checked(){return d(ut)},onchange:Wt=>C("splitQuotaFetch",Wt)})}y(I,et)},$$slots:{default:!0}});var wt=_(lt,2);de(wt,{hoverable:!1,children:(I,G)=>{var et=fw(),Q=_(g(et),2);{let ut=H(()=>d(s)?.sync?.proxyFailover??!0);bs(Q,{get checked(){return d(ut)},onchange:Wt=>C("proxyFailover",Wt)})}y(I,et)},$$slots:{default:!0}});var Ot=_(Kt,2);de(Ot,{hoverable:!1,children:(I,G)=>{var et=vw(),Q=_(g(et),2),ut=g(Q);L(()=>D(ut,`ai-manager-daemon --sync-enabled --sync-port ${d(s)?.sync?.port??9090??""} --sync-key <base64>`)),y(I,et)},$$slots:{default:!0}});var Xt=_(Ot,2);de(Xt,{hoverable:!1,children:(I,G)=>{var et=pw(),Q=_(g(et),2),ut=g(Q);L(()=>D(ut,d(f))),y(I,et)},$$slots:{default:!0}}),Ee(Qt,()=>d(i),I=>M(i,I)),Ee(mt,()=>d(a),I=>M(a,I)),y(bt,St)};B(It,bt=>{d(s)?.sync?.enabled&&bt(U)})}var $t=_(It,2),jt=g($t),ae=g(jt);_u(ae,{size:16});var At=_(jt,2);de(At,{hoverable:!1,children:(bt,St)=>{var ct=mw(),Ft=_(g(ct),2);{let Tt=H(()=>d(s)?.sync?.sshEnabled??!1);bs(Ft,{get checked(){return d(Tt)},onchange:J})}y(bt,ct)},$$slots:{default:!0}});var Nt=_(At,2);{var fe=bt=>{var St=Sw(),ct=j(St),Ft=g(ct),Tt=g(Ft),yt=_(Tt,4),Qt=_(yt,2),mt=_(Ft,2),Mt=g(mt),Bt=_(Mt,2);{let Zt=H(()=>!d(v)||!d(p));Vt(Bt,{variant:"primary",size:"sm",onclick:st,get disabled(){return d(Zt)},children:(Kt,X)=>{var Dt=_w(),lt=j(Dt);Qi(lt,{size:14}),y(Kt,Dt)},$$slots:{default:!0}})}var se=_(ct,2);{var oe=Zt=>{var Kt=xw();let X;var Dt=g(Kt);{var lt=Ot=>{var Xt=bw(),I=j(Xt);Or(I,{size:14});var G=_(I);L(()=>D(G,` Connexion SSH reussie vers ${d(S).id??""}`)),y(Ot,Xt)},wt=Ot=>{var Xt=yw(),I=j(Xt);uo(I,{size:14});var G=_(I);L(()=>D(G,` Echec SSH: ${d(S).error??"Connexion refusee"??""}`)),y(Ot,Xt)};B(Dt,Ot=>{d(S).ok?Ot(lt):Ot(wt,!1)})}L(()=>X=Jt(Kt,1,"test-result svelte-1aja7hz",null,X,{"test-ok":d(S).ok,"test-fail":!d(S).ok})),y(Zt,Kt)};B(se,Zt=>{d(S)&&Zt(oe)})}var Lt=_(se,2),Et=g(Lt);ie(Et,17,()=>d(s)?.sync?.sshHosts??[],Zt=>Zt.id,(Zt,Kt)=>{var X=ww(),Dt=g(X),lt=g(Dt);mu(lt,{size:14});var wt=_(Dt,2),Ot=g(wt),Xt=_(wt,2);{let Gt=H(()=>d(Kt).enabled?"var(--status-running)":"var(--status-stopped)");Ke(Xt,{get color(){return d(Gt)},small:!0,children:(qt,xt)=>{var nt=Ut();L(()=>D(nt,d(Kt).enabled?"Actif":"Inactif")),y(qt,nt)},$$slots:{default:!0}})}var I=_(Xt,2);{var G=Gt=>{var qt=kw(),xt=g(qt);Ll(xt,{size:10});var nt=_(xt);L(Pt=>{Ct(qt,"title",d(Kt).identityPath),D(nt,` ${Pt??""}`)},[()=>d(Kt).identityPath.split("/").pop()]),y(Gt,qt)};B(I,Gt=>{d(Kt).identityPath&&Gt(G)})}var et=_(I,2),Q=g(et);Wi(Q,{size:12});var ut=_(et,2),Wt=g(ut);ii(Wt,{size:12}),L(()=>{D(Ot,`${d(Kt).username??""}@${d(Kt).host??""}:${d(Kt).port??""}`),et.disabled=d(x)===d(Kt).id}),it("click",et,()=>gt(d(Kt))),it("click",ut,()=>_t(d(Kt).id)),y(Zt,X)});var te=_(Et,2);{var ge=Zt=>{var Kt=$w();y(Zt,Kt)};B(te,Zt=>{(d(s)?.sync?.sshHosts??[]).length===0&&Zt(ge)})}Ee(Tt,()=>d(v),Zt=>M(v,Zt)),Ee(yt,()=>d(p),Zt=>M(p,Zt)),Ee(Qt,()=>d(m),Zt=>M(m,Zt)),Ee(Mt,()=>d(b),Zt=>M(b,Zt)),y(bt,St)};B(Nt,bt=>{d(s)?.sync?.sshEnabled&&bt(fe)})}var ce=_($t,2);{var zt=bt=>{var St=Ow(),ct=g(St),Ft=g(ct);Il(Ft,{size:16});var Tt=_(ct,2);de(Tt,{hoverable:!1,children:(Lt,Et)=>{var te=Mw(),ge=_(g(te),2),Zt=g(ge);{let Dt=H(()=>d(k)==="active"?"var(--status-running)":d(k)==="inactive"?"var(--status-warning)":"var(--status-stopped)");Ke(Zt,{get color(){return d(Dt)},small:!0,children:(lt,wt)=>{var Ot=Ut();L(()=>D(Ot,d(k)==="active"?"Actif":d(k)==="inactive"?"Inactif":d(k)==="not-found"?"Non installe":d(k))),y(lt,Ot)},$$slots:{default:!0}})}var Kt=_(Zt,2),X=g(Kt);ks(X,{size:12}),it("click",Kt,R),y(Lt,te)},$$slots:{default:!0}});var yt=_(Tt,2),Qt=g(yt);{var mt=Lt=>{Vt(Lt,{variant:"primary",size:"sm",onclick:kt,get disabled(){return d(w)},children:(Et,te)=>{var ge=Pw(),Zt=j(ge);pu(Zt,{size:14}),y(Et,ge)},$$slots:{default:!0}})},Mt=Lt=>{var Et=at(),te=j(Et);{var ge=Kt=>{Vt(Kt,{variant:"ghost",size:"sm",onclick:K,get disabled(){return d(w)},children:(X,Dt)=>{var lt=Aw(),wt=j(lt);xp(wt,{size:14}),y(X,lt)},$$slots:{default:!0}})},Zt=Kt=>{var X=Tw(),Dt=j(X);Vt(Dt,{variant:"primary",size:"sm",onclick:kt,get disabled(){return d(w)},children:(wt,Ot)=>{var Xt=Cw(),I=j(Xt);Il(I,{size:14}),y(wt,Xt)},$$slots:{default:!0}});var lt=_(Dt,2);Vt(lt,{variant:"ghost",size:"sm",onclick:K,get disabled(){return d(w)},children:(wt,Ot)=>{var Xt=zw(),I=j(Xt);ii(I,{size:14}),y(wt,Xt)},$$slots:{default:!0}}),y(Kt,X)};B(te,Kt=>{d(k)==="active"?Kt(ge):Kt(Zt,!1)})}y(Lt,Et)};B(Qt,Lt=>{d(k)==="not-found"||d(k)==="loading"?Lt(mt):Lt(Mt,!1)})}var Bt=_(yt,2);{var se=Lt=>{var Et=Ew();let te;var ge=g(Et);L(()=>{te=Jt(Et,1,"test-result svelte-1aja7hz",null,te,{"test-ok":d(k)==="active","test-fail":d(k)!=="active"}),D(ge,d($))}),y(Lt,Et)};B(Bt,Lt=>{d($)&&Lt(se)})}var oe=_(Bt,2);de(oe,{hoverable:!1,children:(Lt,Et)=>{var te=Dw();y(Lt,te)},$$slots:{default:!0}}),y(bt,St)};B(ce,bt=>{d(k)!=="unavailable"&&bt(zt)})}y(q,rt)},W=q=>{var rt=Lw();y(q,rt)};B(dt,q=>{d(s)?q(Ht):q(W,!1)})}y(e,tt),ke()}Oe(["keydown","click"]);var Nw=P('<div class="provider-details svelte-1xohkg6"><div class="detail-row svelte-1xohkg6"><label class="detail-label svelte-1xohkg6">Cle API</label> <input type="password" class="detail-input svelte-1xohkg6" placeholder="sk-..."/></div> <div class="detail-row svelte-1xohkg6"><label class="detail-label svelte-1xohkg6">Endpoint</label> <input type="url" class="detail-input svelte-1xohkg6"/></div></div>'),Fw=P('<div class="provider-header svelte-1xohkg6"><span class="provider-dot svelte-1xohkg6"></span> <div class="provider-info svelte-1xohkg6"><span class="provider-name svelte-1xohkg6"> </span> <span class="provider-desc svelte-1xohkg6"> </span></div> <!></div> <!>',1),Bw=P(`<div class="provider-settings svelte-1xohkg6"><h3 class="section-title svelte-1xohkg6">Providers</h3> <p class="section-desc svelte-1xohkg6">Configuration des fournisseurs d'API pour le proxy multi-provider.</p> <div class="provider-list svelte-1xohkg6"></div></div>`);function qw(e){const t=[{id:"anthropic",name:"Anthropic",color:"var(--provider-anthropic)",description:"Claude via API directe"},{id:"gemini",name:"Google Gemini",color:"var(--provider-gemini)",description:"Gemini via Google AI Studio"},{id:"openai",name:"OpenAI",color:"var(--provider-openai)",description:"GPT / o-series via API"},{id:"xai",name:"xAI",color:"var(--provider-xai)",description:"Grok via API xAI"},{id:"deepseek",name:"DeepSeek",color:"var(--provider-deepseek)",description:"DeepSeek R1 / Chat"},{id:"mistral",name:"Mistral",color:"var(--provider-mistral)",description:"Mistral AI models"},{id:"groq",name:"Groq",color:"var(--provider-groq)",description:"Inference rapide via Groq"}];let s=ye({anthropic:{enabled:!0,apiKey:"",endpoint:"https://api.anthropic.com"},gemini:{enabled:!1,apiKey:"",endpoint:"https://generativelanguage.googleapis.com"},openai:{enabled:!1,apiKey:"",endpoint:"https://api.openai.com"},xai:{enabled:!1,apiKey:"",endpoint:"https://api.x.ai"},deepseek:{enabled:!1,apiKey:"",endpoint:"https://api.deepseek.com"},mistral:{enabled:!1,apiKey:"",endpoint:"https://api.mistral.ai"},groq:{enabled:!1,apiKey:"",endpoint:"https://api.groq.com"}}),n=N(null);function i(o){M(n,d(n)===o?null:o,!0)}var a=Bw(),r=_(g(a),4);ie(r,21,()=>t,Ie,(o,l)=>{const c=H(()=>s[d(l).id]);{let u=H(()=>d(n)===d(l).id);de(o,{onclick:()=>i(d(l).id),get active(){return d(u)},children:(h,f)=>{var v=Fw(),p=j(v),m=g(p),b=_(m,2),x=g(b),S=g(x),k=_(x,2),w=g(k),$=_(b,2);{let C=H(()=>d(c).enabled?"var(--status-running)":"var(--status-stopped)");Ke($,{get color(){return d(C)},small:!0,children:(E,T)=>{var O=Ut();L(()=>D(O,d(c).enabled?"Actif":"Inactif")),y(E,O)},$$slots:{default:!0}})}var A=_(p,2);{var z=C=>{var E=Nw(),T=g(E),O=g(T),F=_(O,2),Z=_(T,2),Y=g(Z),V=_(Y,2);L(()=>{Ct(O,"for",`apikey-${d(l).id??""}`),Ct(F,"id",`apikey-${d(l).id??""}`),Ct(Y,"for",`endpoint-${d(l).id??""}`),Ct(V,"id",`endpoint-${d(l).id??""}`)}),it("click",E,J=>J.stopPropagation()),it("keydown",E,()=>{}),Ee(F,()=>s[d(l).id].apiKey,J=>s[d(l).id].apiKey=J),Ee(V,()=>s[d(l).id].endpoint,J=>s[d(l).id].endpoint=J),y(C,E)};B(A,C=>{d(n)===d(l).id&&C(z)})}L(()=>{Le(m,`background: ${d(l).color??""}`),D(S,d(l).name),D(w,d(l).description)}),y(h,v)},$$slots:{default:!0}})}}),y(e,a)}Oe(["click","keydown"]);function Vw(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Jr(e){const t=e==="system"?Vw():e;document.documentElement.classList.toggle("light",t==="light")}function Hw(){const e=localStorage.getItem("theme")||"dark",{subscribe:t,set:s}=Us(e);return Jr(e),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem("theme")==="system"&&Jr("system")}),{subscribe:t,set:n=>{localStorage.setItem("theme",n),Jr(n),s(n)}}}const Na=Hw();var Ww=P("<button><!> <span> </span></button>"),Uw=P('<div class="setting-row svelte-15j4tnx"><label for="schedule-start" class="svelte-15j4tnx">Plage horaire active</label> <div class="time-range svelte-15j4tnx"><input id="schedule-start" type="number" min="0" max="23" value="9" class="time-input svelte-15j4tnx"/> <span class="time-sep svelte-15j4tnx">→</span> <input id="schedule-end" type="number" min="0" max="23" value="18" class="time-input svelte-15j4tnx"/></div></div> <p class="hint svelte-15j4tnx">Les rafraîchissements automatiques ne fonctionnent que dans cette plage.</p>',1),Yw=P('<div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Mode</span> <div class="theme-options svelte-15j4tnx"><button>Sombre</button> <button>Clair</button> <button>Système</button></div></div> <div class="setting-row svelte-15j4tnx"><label for="font-select" class="svelte-15j4tnx">Police</label> <select id="font-select" class="select-input svelte-15j4tnx"><option>Inter</option><option>Geist Sans</option><option>System</option></select></div> <div class="setting-row svelte-15j4tnx"><label for="lang-select" class="svelte-15j4tnx"> </label> <select id="lang-select" class="select-input svelte-15j4tnx"><option>Français</option><option>English</option></select></div>',1),Kw=P(`<div class="action-buttons svelte-15j4tnx"><button class="btn-secondary svelte-15j4tnx">Exporter la config</button> <button class="btn-secondary svelte-15j4tnx">Créer un backup</button> <button class="btn-danger svelte-15j4tnx">Réinitialiser</button></div> <p class="hint svelte-15j4tnx">L'export crée un JSON contenant vos paramètres (sans les tokens).</p>`,1),Xw=P('<div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Compte suivant</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+N</kbd></div> <div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Compte précédent</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+P</kbd></div> <div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Rafraîchir</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+R</kbd></div>',1),Gw=P('<div class="settings-page svelte-15j4tnx"><header class="page-header svelte-15j4tnx"><h1 class="svelte-15j4tnx"> </h1></header> <div class="settings-body svelte-15j4tnx"><nav class="settings-nav svelte-15j4tnx"></nav> <div class="settings-content svelte-15j4tnx"><!></div></div></div>');function Jw(e,t){xe(t,!0);const s=()=>fu(gr,"$i18nStore",n),[n,i]=vu();let a=N("dark");Na.subscribe(T=>{M(a,T,!0)});let r=pe(t,"initialSection",3,"general"),o=N(ye(r()));const l=[{id:"general",label:"Général",icon:Ho},{id:"alerts",label:"Alertes",icon:Wv},{id:"schedule",label:"Schedule",icon:Uv},{id:"network",label:"Réseau",icon:Wo},{id:"providers",label:"Providers",icon:mu},{id:"theme",label:"Thème",icon:hp},{id:"data",label:"Données",icon:tp},{id:"hotkeys",label:"Hotkeys",icon:cp}];function c(T){const O=T.currentTarget;Ap(O.value)}Ve(async()=>{try{await Me.load()}catch(T){console.error("Failed to load config:",T)}});var u=Gw(),h=g(u),f=g(h),v=g(f),p=_(h,2),m=g(p);ie(m,21,()=>l,Ie,(T,O)=>{const F=H(()=>d(O).icon);var Z=Ww();let Y;var V=g(Z);fr(V,()=>d(F),(_t,gt)=>{gt(_t,{size:16})});var J=_(V,2),st=g(J);L(()=>{Y=Jt(Z,1,"nav-item svelte-15j4tnx",null,Y,{active:d(o)===d(O).id}),D(st,d(O).label)}),it("click",Z,()=>M(o,d(O).id,!0)),y(T,Z)});var b=_(m,2),x=g(b);{var S=T=>{qk(T,{})},k=T=>{Xk(T,{})},w=T=>{ja(T,{title:"Schedule",children:(O,F)=>{var Z=Uw();y(O,Z)},$$slots:{default:!0}})},$=T=>{jw(T,{})},A=T=>{qw(T)},z=T=>{{let O=H(()=>Ba("settings.theme"));ja(T,{get title(){return d(O)},children:(F,Z)=>{var Y=Yw(),V=j(Y),J=_(g(V),2),st=g(J);let _t;var gt=_(st,2);let kt;var K=_(gt,2);let R;var tt=_(V,4),dt=g(tt),Ht=g(dt),W=_(dt,2),q=g(W);q.value=q.__value="fr";var rt=_(q);rt.value=rt.__value="en";var Rt;vr(W),L(It=>{_t=Jt(st,1,"theme-btn svelte-15j4tnx",null,_t,{active:d(a)==="dark"}),kt=Jt(gt,1,"theme-btn svelte-15j4tnx",null,kt,{active:d(a)==="light"}),R=Jt(K,1,"theme-btn svelte-15j4tnx",null,R,{active:d(a)==="system"}),D(Ht,It),Rt!==(Rt=s())&&(W.value=(W.__value=s())??"",pi(W,s()))},[()=>Ba("settings.language")]),it("click",st,()=>Na.set("dark")),it("click",gt,()=>Na.set("light")),it("click",K,()=>Na.set("system")),it("change",W,c),y(F,Y)},$$slots:{default:!0}})}},C=T=>{ja(T,{title:"Données",children:(O,F)=>{var Z=Kw();y(O,Z)},$$slots:{default:!0}})},E=T=>{ja(T,{title:"Raccourcis clavier",children:(O,F)=>{var Z=Xw();y(O,Z)},$$slots:{default:!0}})};B(x,T=>{d(o)==="general"?T(S):d(o)==="alerts"?T(k,1):d(o)==="schedule"?T(w,2):d(o)==="network"?T($,3):d(o)==="providers"?T(A,4):d(o)==="theme"?T(z,5):d(o)==="data"?T(C,6):d(o)==="hotkeys"&&T(E,7)})}L(T=>D(v,T),[()=>Ba("settings.title")]),y(e,u),ke(),i()}Oe(["click","change"]);const Qw=e=>e;function Zw(e,{delay:t=0,duration:s=400,easing:n=Qw}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:n,css:a=>`opacity: ${a*i}`}}var t$=P('<div class="screen-transition svelte-1n46o8q"><!></div>'),e$=P('<div class="app-layout svelte-1n46o8q"><!> <main class="main-content svelte-1n46o8q"><!></main> <!> <!></div>');function s$(e,t){xe(t,!0);let s=N("accounts"),n=N("general");function i(f){const[v,p]=f.split(":");M(s,v,!0),p&&M(n,p,!0)}Ve(async()=>{try{await Ye.load()}catch(f){console.error("Failed to load accounts:",f)}yg(({key:f,quota:v})=>Ye.updateQuota(f,v)),xg(f=>_s[f.type]?.(f.title,f.message)),kg(f=>Ye.switch(f).catch(v=>console.error("Account switch failed:",v)))});function a(f){if(f.ctrlKey&&f.altKey){const v=["accounts","proxy","monitoring","settings"],p=v.indexOf(d(s));f.key==="n"||f.key==="N"?(M(s,v[(p+1)%v.length],!0),f.preventDefault()):f.key==="p"||f.key==="P"?(M(s,v[(p-1+v.length)%v.length],!0),f.preventDefault()):(f.key==="r"||f.key==="R")&&(Ye.load().catch(m=>console.error("Reload accounts failed:",m)),f.preventDefault())}}var r=e$();Es("keydown",Xa,a);var o=g(r);Ep(o,{get currentScreen(){return d(s)},set currentScreen(f){M(s,f,!0)}});var l=_(o,2),c=g(l);lv(c,()=>d(s),f=>{var v=t$(),p=g(v);{var m=k=>{s_(k,{})},b=k=>{X_(k,{})},x=k=>{Tk(k)},S=k=>{Jw(k,{get initialSection(){return d(n)}})};B(p,k=>{d(s)==="accounts"?k(m):d(s)==="proxy"?k(b,1):d(s)==="monitoring"?k(x,2):k(S,!1)})}mv(1,v,()=>Zw,()=>({duration:150})),y(f,v)});var u=_(l,2);Ig(u,{onnavigate:i});var h=_(u,2);Vg(h,{}),y(e,r),ke()}iv(s$,{target:document.getElementById("app")});
