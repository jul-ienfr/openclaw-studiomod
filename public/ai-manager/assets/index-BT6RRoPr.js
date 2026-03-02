(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const nl=globalThis.process?.env?.NODE_ENV,ot=nl&&!nl.toLowerCase().startsWith("prod");var mo=Array.isArray,vh=Array.prototype.indexOf,Vn=Array.prototype.includes,sr=Array.from,sn=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,td=Object.getOwnPropertyDescriptors,ph=Object.prototype,gh=Array.prototype,_o=Object.getPrototypeOf,il=Object.isExtensible;function ei(e){return typeof e=="function"}const us=()=>{};function mh(e){return e()}function ja(e){for(var t=0;t<e.length;t++)e[t]()}function ed(){var e,t,s=new Promise((n,i)=>{e=n,t=i});return{promise:s,resolve:e,reject:t}}function Vr(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const s=[];for(const n of e)if(s.push(n),s.length===t)break;return s}const Je=2,_i=4,ii=8,bo=1<<24,nn=16,Ds=32,Yn=64,Hr=128,ks=512,Ke=1024,Qe=2048,Ts=4096,ms=8192,en=16384,Kn=32768,qs=65536,Na=1<<17,_h=1<<18,bi=1<<19,sd=1<<20,Gs=1<<25,_n=65536,Wr=1<<21,nr=1<<22,vn=1<<23,Ns=Symbol("$state"),nd=Symbol("legacy props"),bh=Symbol(""),id=Symbol("proxy path"),Rn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},yo=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function yh(e){if(ot){const t=new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function xh(){if(ot){const e=new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/async_derived_orphan")}function al(){if(ot){const e=new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value")}function kh(){if(ot){const e=new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/derived_references_self")}function ad(e,t,s){if(ot){const n=new Error(`each_key_duplicate
${s?`Keyed each block has duplicate key \`${s}\` at indexes ${e} and ${t}`:`Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/each_key_duplicate")}function wh(e,t,s){if(ot){const n=new Error(`each_key_volatile
Keyed each block has key that is not idempotent — the key for item at index ${e} was \`${t}\` but is now \`${s}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/each_key_volatile")}function $h(e){if(ot){const t=new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/effect_in_teardown")}function Sh(){if(ot){const e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Mh(e){if(ot){const t=new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/effect_orphan")}function Ph(){if(ot){const e=new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ah(){if(ot){const e=new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/invalid_snippet")}function Ch(e){if(ot){const t=new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/props_invalid_value")}function zh(e){if(ot){const t=new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/rune_outside_svelte")}function Th(){if(ot){const e=new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Eh(){if(ot){const e=new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Dh(){if(ot){const e=new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Oh(){if(ot){const e=new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Lh=1,Rh=2,rd=4,Ih=8,jh=16,Nh=1,Fh=2,od=4,Bh=8,qh=16,Vh=4,Hh=1,Wh=2,He=Symbol(),Uh=Symbol("filename"),ld="http://www.w3.org/1999/xhtml",Yh="http://www.w3.org/2000/svg",Kh="@attach";var xo="font-weight: bold",ko="font-weight: normal";function Xh(){ot?console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",xo,ko):console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function br(e){ot?console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,xo,ko):console.warn("https://svelte.dev/e/state_proxy_equality_mismatch")}function Gh(){ot?console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",xo,ko):console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function cd(e){return e===this.v}function dd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ud(e){return!dd(e,this.v)}let yi=!1,Jh=!1;function Qh(){yi=!0}function Rs(e,t){return e.label=t,hd(e.v,t),e}function hd(e,t){return e?.[id]?.(t),e}function Zh(e){const t=new Error,s=tf();return s.length===0?null:(s.unshift(`
`),sn(t,"stack",{value:s.join(`
`)}),sn(t,"name",{value:e}),t)}function tf(){const e=Error.stackTraceLimit;Error.stackTraceLimit=1/0;const t=new Error().stack;if(Error.stackTraceLimit=e,!t)return[];const s=t.split(`
`),n=[];for(let i=0;i<s.length;i++){const a=s[i],r=a.replaceAll("\\","/");if(a.trim()!=="Error"){if(a.includes("validate_each_keys"))return[];r.includes("svelte/src/internal")||r.includes("node_modules/.vite")||n.push(a)}}return n}let Ee=null;function ai(e){Ee=e}let ri=null;function Fa(e){ri=e}let sa=null;function rl(e){sa=e}function ke(e,t=!1,s){Ee={p:Ee,i:!1,c:null,e:null,s:e,x:null,l:yi&&!t?{s:null,u:null,$:[]}:null},ot&&(Ee.function=s,sa=s)}function we(e){var t=Ee,s=t.e;if(s!==null){t.e=null;for(var n of s)Dd(n)}return e!==void 0&&(t.x=e),t.i=!0,Ee=t.p,ot&&(sa=Ee?.function??null),e??{}}function xi(){return!yi||Ee!==null&&Ee.l===null}let In=[];function fd(){var e=In;In=[],ja(e)}function zs(e){if(In.length===0&&!ji){var t=In;queueMicrotask(()=>{t===In&&fd()})}In.push(e)}function ef(){for(;In.length>0;)fd()}const Ur=new WeakMap;function vd(e){var t=te;if(t===null)return ce.f|=vn,e;if(ot&&e instanceof Error&&!Ur.has(e)&&Ur.set(e,sf(e,t)),(t.f&Kn)===0&&(t.f&_i)===0)throw ot&&!t.parent&&e instanceof Error&&pd(e),e;cn(e,t)}function cn(e,t){for(;t!==null;){if((t.f&Hr)!==0){if((t.f&Kn)===0)throw e;try{t.b.error(e);return}catch(s){e=s}}t=t.parent}throw ot&&e instanceof Error&&pd(e),e}function sf(e,t){const s=tn(e,"message");if(!(s&&!s.configurable)){for(var n=Po?"  ":"	",i=`
${n}in ${t.fn?.name||"<unknown>"}`,a=t.ctx;a!==null;)i+=`
${n}in ${a.function?.[Uh].split("/").pop()}`,a=a.p;return{message:e.message+`
${i}
`,stack:e.stack?.split(`
`).filter(r=>!r.includes("svelte/src/internal")).join(`
`)}}}function pd(e){const t=Ur.get(e);t&&(sn(e,"message",{value:t.message}),sn(e,"stack",{value:t.stack}))}const nf=-7169;function Ie(e,t){e.f=e.f&nf|t}function wo(e){(e.f&ks)!==0||e.deps===null?Ie(e,Ke):Ie(e,Ts)}function gd(e){if(e!==null)for(const t of e)(t.f&Je)===0||(t.f&_n)===0||(t.f^=_n,gd(t.deps))}function md(e,t,s){(e.f&Qe)!==0?t.add(e):(e.f&Ts)!==0&&s.add(e),gd(e.deps),Ie(e,Ke)}const ua=new Set;let _e=null,Ba=null,Ms=null,ls=[],ir=null,ji=!1,oi=null;class pn{current=new Map;previous=new Map;#t=new Set;#o=new Set;#e=0;#r=0;#s=null;#a=new Set;#n=new Set;#i=new Map;is_fork=!1;#l=!1;#d(){return this.is_fork||this.#r>0}skip_effect(t){this.#i.has(t)||this.#i.set(t,{d:[],m:[]})}unskip_effect(t){var s=this.#i.get(t);if(s){this.#i.delete(t);for(var n of s.d)Ie(n,Qe),Ps(n);for(n of s.m)Ie(n,Ts),Ps(n)}}process(t){ls=[],this.apply();var s=oi=[],n=[];for(const i of t)this.#c(i,s,n);if(oi=null,this.#d()){this.#h(n),this.#h(s);for(const[i,a]of this.#i)xd(i,a)}else{Ba=this,_e=null;for(const i of this.#t)i(this);this.#t.clear(),this.#e===0&&this.#f(),ol(n),ol(s),this.#a.clear(),this.#n.clear(),Ba=null,this.#s?.resolve()}Ms=null}#c(t,s,n){t.f^=Ke;for(var i=t.first;i!==null;){var a=i.f,r=(a&(Ds|Yn))!==0,o=r&&(a&Ke)!==0,l=o||(a&ms)!==0||this.#i.has(i);if(!l&&i.fn!==null){r?i.f^=Ke:(a&_i)!==0?s.push(i):oa(i)&&((a&nn)!==0&&this.#n.add(i),ui(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}}#h(t){for(var s=0;s<t.length;s+=1)md(t[s],this.#a,this.#n)}capture(t,s){s!==He&&!this.previous.has(t)&&this.previous.set(t,s),(t.f&vn)===0&&(this.current.set(t,t.v),Ms?.set(t,t.v))}activate(){_e=this,this.apply()}deactivate(){_e===this&&(_e=null,Ms=null)}flush(){if(ls.length>0)_e=this,_d();else if(this.#e===0&&!this.is_fork){for(const t of this.#t)t(this);this.#t.clear(),this.#f(),this.#s?.resolve()}this.deactivate()}discard(){for(const t of this.#o)t(this);this.#o.clear()}#f(){if(ua.size>1){this.previous.clear();var t=_e,s=Ms,n=!0;for(const a of ua){if(a===this){n=!1;continue}const r=[];for(const[l,c]of this.current){if(a.current.has(l))if(n&&c!==a.current.get(l))a.current.set(l,c);else continue;r.push(l)}if(r.length===0)continue;const o=[...a.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var i=ls;ls=[];const l=new Set,c=new Map;for(const d of r)bd(d,o,l,c);if(ls.length>0){_e=a,a.apply();for(const d of ls)a.#c(d,[],[]);a.deactivate()}ls=i}}_e=t,Ms=s}this.#i.clear(),ua.delete(this)}increment(t){this.#e+=1,t&&(this.#r+=1)}decrement(t){this.#e-=1,t&&(this.#r-=1),!this.#l&&(this.#l=!0,zs(()=>{this.#l=!1,this.#d()?ls.length>0&&this.flush():this.revive()}))}revive(){for(const t of this.#a)this.#n.delete(t),Ie(t,Qe),Ps(t);for(const t of this.#n)Ie(t,Ts),Ps(t);this.flush()}oncommit(t){this.#t.add(t)}ondiscard(t){this.#o.add(t)}settled(){return(this.#s??=ed()).promise}static ensure(){if(_e===null){const t=_e=new pn;ua.add(_e),ji||zs(()=>{_e===t&&t.flush()})}return _e}apply(){}}function af(e){var t=ji;ji=!0;try{for(var s;;){if(ef(),ls.length===0&&(_e?.flush(),ls.length===0))return ir=null,s;_d()}}finally{ji=t}}function _d(){var e=ot?new Set:null;try{for(var t=0;ls.length>0;){var s=pn.ensure();if(t++>1e3){if(ot){var n=new Map;for(const a of s.current.keys())for(const[r,o]of a.updated??[]){var i=n.get(r);i||(i={error:o.error,count:0},n.set(r,i)),i.count+=o.count}for(const a of n.values())a.error&&console.error(a.error)}rf()}if(s.process(ls),gn.clear(),ot)for(const a of s.current.keys())e.add(a)}}finally{if(ls=[],ir=null,oi=null,ot)for(const a of e)a.updated=null}}function rf(){try{Ph()}catch(e){ot&&sn(e,"stack",{value:""}),cn(e,ir)}}let Ys=null;function ol(e){var t=e.length;if(t!==0){for(var s=0;s<t;){var n=e[s++];if((n.f&(en|ms))===0&&oa(n)&&(Ys=new Set,ui(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Rd(n),Ys?.size>0)){gn.clear();for(const i of Ys){if((i.f&(en|ms))!==0)continue;const a=[i];let r=i.parent;for(;r!==null;)Ys.has(r)&&(Ys.delete(r),a.push(r)),r=r.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(en|ms))===0&&ui(l)}}Ys.clear()}}Ys=null}}function bd(e,t,s,n){if(!s.has(e)&&(s.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Je)!==0?bd(i,t,s,n):(a&(nr|nn))!==0&&(a&Qe)===0&&yd(i,t,n)&&(Ie(i,Qe),Ps(i))}}function yd(e,t,s){const n=s.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Vn.call(t,i))return!0;if((i.f&Je)!==0&&yd(i,t,s))return s.set(i,!0),!0}return s.set(e,!1),!1}function Ps(e){var t=ir=e,s=t.b;if(s?.is_pending&&(e.f&(_i|ii|bo))!==0&&(e.f&Kn)===0){s.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(oi!==null&&t===te&&(e.f&ii)===0)return;if((n&(Yn|Ds))!==0){if((n&Ke)===0)return;t.f^=Ke}}ls.push(t)}function xd(e,t){if(!((e.f&Ds)!==0&&(e.f&Ke)!==0)){(e.f&Qe)!==0?t.d.push(e):(e.f&Ts)!==0&&t.m.push(e),Ie(e,Ke);for(var s=e.first;s!==null;)xd(s,t),s=s.next}}function of(e){let t=0,s=bn(0),n;return ot&&Rs(s,"createSubscriber version"),()=>{Co()&&(u(s),ar(()=>(t===0&&(n=Es(()=>e(()=>Ni(s)))),t+=1,()=>{zs(()=>{t-=1,t===0&&(n?.(),n=void 0,Ni(s))})})))}}var lf=qs|bi;function cf(e,t,s,n){new df(e,t,s,n)}class df{parent;is_pending=!1;transform_error;#t;#o=null;#e;#r;#s;#a=null;#n=null;#i=null;#l=null;#d=0;#c=0;#h=!1;#f=new Set;#v=new Set;#u=null;#b=of(()=>(this.#u=bn(this.#d),ot&&Rs(this.#u,"$effect.pending()"),()=>{this.#u=null}));constructor(t,s,n,i){this.#t=t,this.#e=s,this.#r=a=>{var r=te;r.b=this,r.f|=Hr,n(a)},this.parent=te.b,this.transform_error=i??this.parent?.transform_error??(a=>a),this.#s=Xn(()=>{this.#m()},lf)}#y(){try{this.#a=ds(()=>this.#r(this.#t))}catch(t){this.error(t)}}#x(t){const s=this.#e.failed;s&&(this.#i=ds(()=>{s(this.#t,()=>t,()=>()=>{})}))}#k(){const t=this.#e.pending;t&&(this.is_pending=!0,this.#n=ds(()=>t(this.#t)),zs(()=>{var s=this.#l=document.createDocumentFragment(),n=Fs();s.append(n),this.#a=this.#g(()=>(pn.ensure(),ds(()=>this.#r(n)))),this.#c===0&&(this.#t.before(s),this.#l=null,Nn(this.#n,()=>{this.#n=null}),this.#p())}))}#m(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#d=0,this.#a=ds(()=>{this.#r(this.#t)}),this.#c>0){var t=this.#l=document.createDocumentFragment();Nd(this.#a,t);const s=this.#e.pending;this.#n=ds(()=>s(this.#t))}else this.#p()}catch(s){this.error(s)}}#p(){this.is_pending=!1;for(const t of this.#f)Ie(t,Qe),Ps(t);for(const t of this.#v)Ie(t,Ts),Ps(t);this.#f.clear(),this.#v.clear()}defer_effect(t){md(t,this.#f,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#g(t){var s=te,n=ce,i=Ee;_s(this.#s),$s(this.#s),ai(this.#s.ctx);try{return t()}catch(a){return vd(a),null}finally{_s(s),$s(n),ai(i)}}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#c+=t,this.#c===0&&(this.#p(),this.#n&&Nn(this.#n,()=>{this.#n=null}),this.#l&&(this.#t.before(this.#l),this.#l=null))}update_pending_count(t){this.#_(t),this.#d+=t,!(!this.#u||this.#h)&&(this.#h=!0,zs(()=>{this.#h=!1,this.#u&&ci(this.#u,this.#d)}))}get_effect_pending(){return this.#b(),u(this.#u)}error(t){var s=this.#e.onerror;let n=this.#e.failed;if(!s&&!n)throw t;this.#a&&(Ge(this.#a),this.#a=null),this.#n&&(Ge(this.#n),this.#n=null),this.#i&&(Ge(this.#i),this.#i=null);var i=!1,a=!1;const r=()=>{if(i){Gh();return}i=!0,a&&Oh(),this.#i!==null&&Nn(this.#i,()=>{this.#i=null}),this.#g(()=>{pn.ensure(),this.#m()})},o=l=>{try{a=!0,s?.(l,r),a=!1}catch(c){cn(c,this.#s&&this.#s.parent)}n&&(this.#i=this.#g(()=>{pn.ensure();try{return ds(()=>{var c=te;c.b=this,c.f|=Hr,n(this.#t,()=>l,()=>r)})}catch(c){return cn(c,this.#s.parent),null}}))};zs(()=>{var l;try{l=this.transform_error(t)}catch(c){cn(c,this.#s&&this.#s.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>cn(c,this.#s&&this.#s.parent)):o(l)})}}function kd(e,t,s,n){const i=xi()?na:$o;var a=e.filter(h=>!h.settled);if(s.length===0&&a.length===0){n(t.map(i));return}var r=te,o=uf(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function c(h){o();try{n(h)}catch(f){(r.f&en)===0&&cn(f,r)}Yr()}if(s.length===0){l.then(()=>c(t.map(i)));return}function d(){o(),Promise.all(s.map(h=>vf(h))).then(h=>c([...t.map(i),...h])).catch(h=>cn(h,r))}l?l.then(d):d()}function uf(){var e=te,t=ce,s=Ee,n=_e;if(ot)var i=ri;return function(r=!0){_s(e),$s(t),ai(s),r&&n?.activate(),ot&&Fa(i)}}function Yr(e=!0){_s(null),$s(null),ai(null),e&&_e?.deactivate(),ot&&Fa(null)}function hf(){var e=te.b,t=_e,s=e.is_rendered();return e.update_pending_count(1),t.increment(s),()=>{e.update_pending_count(-1),t.decrement(s)}}const ff=new Set;function na(e){var t=Je|Qe,s=ce!==null&&(ce.f&Je)!==0?ce:null;return te!==null&&(te.f|=bi),{ctx:Ee,deps:null,effects:null,equals:cd,f:t,fn:e,reactions:null,rv:0,v:He,wv:0,parent:s??te,ac:null}}function vf(e,t,s){te===null&&xh();var i=void 0,a=bn(He);ot&&(a.label=t);var r=!ce,o=new Map;return zf(()=>{var l=ed();i=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(Yr)}catch(f){l.reject(f),Yr()}var c=_e;if(r){var d=hf();o.get(c)?.reject(Rn),o.delete(c),o.set(c,l)}const h=(f,v=void 0)=>{if(c.activate(),v)v!==Rn&&(a.f|=vn,ci(a,v));else{(a.f&vn)!==0&&(a.f^=vn),ci(a,f);for(const[g,m]of o){if(o.delete(g),g===c)break;m.reject(Rn)}}d&&d()};l.promise.then(h,f=>h(null,f||"unknown"))}),aa(()=>{for(const l of o.values())l.reject(Rn)}),ot&&(a.f|=nr),new Promise(l=>{function c(d){function h(){d===i?l(a):c(i)}d.then(h,h)}c(i)})}function W(e){const t=na(e);return Fd(t),t}function $o(e){const t=na(e);return t.equals=ud,t}function ll(e){var t=e.effects;if(t!==null){e.effects=null;for(var s=0;s<t.length;s+=1)Ge(t[s])}}let yr=[];function pf(e){for(var t=e.parent;t!==null;){if((t.f&Je)===0)return(t.f&en)===0?t:null;t=t.parent}return null}function So(e){var t,s=te;if(_s(pf(e)),ot){let n=li;cl(new Set);try{Vn.call(yr,e)&&kh(),yr.push(e),e.f&=~_n,ll(e),t=Kr(e)}finally{_s(s),cl(n),yr.pop()}}else try{e.f&=~_n,ll(e),t=Kr(e)}finally{_s(s)}return t}function wd(e){var t=So(e);if(!e.equals(t)&&(e.wv=qd(),(!_e?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){Ie(e,Ke);return}yn||(Ms!==null?(Co()||_e?.is_fork)&&Ms.set(e,t):wo(e))}function gf(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(Rn),t.teardown=us,t.ac=null,Yi(t,0),zo(t))}function $d(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&ui(t)}let li=new Set;const gn=new Map;function cl(e){li=e}let Mo=!1;function mf(){Mo=!0}function bn(e,t){var s={f:0,v:e,reactions:null,equals:cd,rv:0,wv:0};return s}function j(e,t){const s=bn(e);return Fd(s),s}function Sd(e,t=!1,s=!0){const n=bn(e);return t||(n.equals=ud),yi&&s&&Ee!==null&&Ee.l!==null&&(Ee.l.s??=[]).push(n),n}function M(e,t,s=!1){ce!==null&&(!As||(ce.f&Na)!==0)&&xi()&&(ce.f&(Je|nn|nr|Na))!==0&&(ws===null||!Vn.call(ws,e))&&Dh();let n=s?$e(t):t;return ot&&hd(n,e.label),ci(e,n)}function ci(e,t){if(!e.equals(t)){var s=e.v;yn?gn.set(e,t):gn.set(e,s),e.v=t;var n=pn.ensure();if(n.capture(e,s),ot){if(te!==null){e.updated??=new Map;const i=(e.updated.get("")?.count??0)+1;if(e.updated.set("",{error:null,count:i}),i>5){const a=Zh("updated at");if(a!==null){let r=e.updated.get(a.stack);r||(r={error:a,count:0},e.updated.set(a.stack,r)),r.count++}}}te!==null&&(e.set_during_effect=!0)}if((e.f&Je)!==0){const i=e;(e.f&Qe)!==0&&So(i),wo(i)}e.wv=qd(),Pd(e,Qe),xi()&&te!==null&&(te.f&Ke)!==0&&(te.f&(Ds|Yn))===0&&(xs===null?Df([e]):xs.push(e)),!n.is_fork&&li.size>0&&!Mo&&Md()}return t}function Md(){Mo=!1;for(const e of li)(e.f&Ke)!==0&&Ie(e,Ts),oa(e)&&ui(e);li.clear()}function dl(e,t=1){var s=u(e),n=t===1?s++:s--;return M(e,s),n}function Ni(e){M(e,e.v+1)}function Pd(e,t){var s=e.reactions;if(s!==null)for(var n=xi(),i=s.length,a=0;a<i;a++){var r=s[a],o=r.f;if(!(!n&&r===te)){if(ot&&(o&Na)!==0){li.add(r);continue}var l=(o&Qe)===0;if(l&&Ie(r,t),(o&Je)!==0){var c=r;Ms?.delete(c),(o&_n)===0&&(o&ks&&(r.f|=_n),Pd(c,Ts))}else l&&((o&nn)!==0&&Ys!==null&&Ys.add(r),Ps(r))}}}const _f=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;function $e(e){if(typeof e!="object"||e===null||Ns in e)return e;const t=_o(e);if(t!==ph&&t!==gh)return e;var s=new Map,n=mo(e),i=j(0),a=Fn,r=d=>{if(Fn===a)return d();var h=ce,f=Fn;$s(null),fl(a);var v=d();return $s(h),fl(f),v};n&&(s.set("length",j(e.length)),ot&&(e=xf(e)));var o="";let l=!1;function c(d){if(!l){l=!0,o=d,Rs(i,`${o} version`);for(const[h,f]of s)Rs(f,Mn(o,h));l=!1}}return new Proxy(e,{defineProperty(d,h,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Th();var v=s.get(h);return v===void 0?r(()=>{var g=j(f.value);return s.set(h,g),ot&&typeof h=="string"&&Rs(g,Mn(o,h)),g}):M(v,f.value,!0),!0},deleteProperty(d,h){var f=s.get(h);if(f===void 0){if(h in d){const v=r(()=>j(He));s.set(h,v),Ni(i),ot&&Rs(v,Mn(o,h))}}else M(f,He),Ni(i);return!0},get(d,h,f){if(h===Ns)return e;if(ot&&h===id)return c;var v=s.get(h),g=h in d;if(v===void 0&&(!g||tn(d,h)?.writable)&&(v=r(()=>{var b=$e(g?d[h]:He),y=j(b);return ot&&Rs(y,Mn(o,h)),y}),s.set(h,v)),v!==void 0){var m=u(v);return m===He?void 0:m}return Reflect.get(d,h,f)},getOwnPropertyDescriptor(d,h){var f=Reflect.getOwnPropertyDescriptor(d,h);if(f&&"value"in f){var v=s.get(h);v&&(f.value=u(v))}else if(f===void 0){var g=s.get(h),m=g?.v;if(g!==void 0&&m!==He)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(d,h){if(h===Ns)return!0;var f=s.get(h),v=f!==void 0&&f.v!==He||Reflect.has(d,h);if(f!==void 0||te!==null&&(!v||tn(d,h)?.writable)){f===void 0&&(f=r(()=>{var m=v?$e(d[h]):He,b=j(m);return ot&&Rs(b,Mn(o,h)),b}),s.set(h,f));var g=u(f);if(g===He)return!1}return v},set(d,h,f,v){var g=s.get(h),m=h in d;if(n&&h==="length")for(var b=f;b<g.v;b+=1){var y=s.get(b+"");y!==void 0?M(y,He):b in d&&(y=r(()=>j(He)),s.set(b+"",y),ot&&Rs(y,Mn(o,b)))}if(g===void 0)(!m||tn(d,h)?.writable)&&(g=r(()=>j(void 0)),ot&&Rs(g,Mn(o,h)),M(g,$e(f)),s.set(h,g));else{m=g.v!==He;var S=r(()=>$e(f));M(g,S)}var k=Reflect.getOwnPropertyDescriptor(d,h);if(k?.set&&k.set.call(v,f),!m){if(n&&typeof h=="string"){var $=s.get("length"),w=Number(h);Number.isInteger(w)&&w>=$.v&&M($,w+1)}Ni(i)}return!0},ownKeys(d){u(i);var h=Reflect.ownKeys(d).filter(g=>{var m=s.get(g);return m===void 0||m.v!==He});for(var[f,v]of s)v.v!==He&&!(f in d)&&h.push(f);return h},setPrototypeOf(){Eh()}})}function Mn(e,t){return typeof t=="symbol"?`${e}[Symbol(${t.description??""})]`:_f.test(t)?`${e}.${t}`:/^\d+$/.test(t)?`${e}[${t}]`:`${e}['${t}']`}function Fi(e){try{if(e!==null&&typeof e=="object"&&Ns in e)return e[Ns]}catch{}return e}function bf(e,t){return Object.is(Fi(e),Fi(t))}const yf=new Set(["copyWithin","fill","pop","push","reverse","shift","sort","splice","unshift"]);function xf(e){return new Proxy(e,{get(t,s,n){var i=Reflect.get(t,s,n);return yf.has(s)?function(...a){mf();var r=i.apply(this,a);return Md(),r}:i}})}function kf(){const e=Array.prototype,t=Array.__svelte_cleanup;t&&t();const{indexOf:s,lastIndexOf:n,includes:i}=e;e.indexOf=function(a,r){const o=s.call(this,a,r);if(o===-1){for(let l=r??0;l<this.length;l+=1)if(Fi(this[l])===a){br("array.indexOf(...)");break}}return o},e.lastIndexOf=function(a,r){const o=n.call(this,a,r??this.length-1);if(o===-1){for(let l=0;l<=(r??this.length-1);l+=1)if(Fi(this[l])===a){br("array.lastIndexOf(...)");break}}return o},e.includes=function(a,r){const o=i.call(this,a,r);if(!o){for(let l=0;l<this.length;l+=1)if(Fi(this[l])===a){br("array.includes(...)");break}}return o},Array.__svelte_cleanup=()=>{e.indexOf=s,e.lastIndexOf=n,e.includes=i}}var qa,Po,Ad,Cd;function wf(){if(qa===void 0){qa=window,Po=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,s=Text.prototype;Ad=tn(t,"firstChild").get,Cd=tn(t,"nextSibling").get,il(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),il(s)&&(s.__t=void 0),ot&&(e.__svelte_meta=null,kf())}}function Fs(e=""){return document.createTextNode(e)}function di(e){return Ad.call(e)}function ia(e){return Cd.call(e)}function p(e,t){return di(e)}function I(e,t=!1){{var s=di(e);return s instanceof Comment&&s.data===""?ia(s):s}}function _(e,t=1,s=!1){let n=e;for(;t--;)n=ia(n);return n}function $f(e){e.textContent=""}function zd(){return!1}function Td(e,t,s){return document.createElementNS(t??ld,e,void 0)}function Sf(e,t){if(t){const s=document.body;e.autofocus=!0,zs(()=>{document.activeElement===s&&e.focus()})}}let ul=!1;function Mf(){ul||(ul=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ki(e){var t=ce,s=te;$s(null),_s(null);try{return e()}finally{$s(t),_s(s)}}function Ao(e,t,s,n=s){e.addEventListener(t,()=>ki(s));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Mf()}function Ed(e){te===null&&(ce===null&&Mh(e),Sh()),yn&&$h(e)}function Pf(e,t){var s=t.last;s===null?t.last=t.first=e:(s.next=e,e.prev=s,t.last=e)}function Os(e,t){var s=te;if(ot)for(;s!==null&&(s.f&Na)!==0;)s=s.parent;s!==null&&(s.f&ms)!==0&&(e|=ms);var n={ctx:Ee,deps:null,nodes:null,f:e|Qe|ks,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,wv:0,ac:null};ot&&(n.component_function=sa);var i=n;if((e&_i)!==0)oi!==null?oi.push(n):Ps(n);else if(t!==null){try{ui(n)}catch(r){throw Ge(n),r}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&bi)===0&&(i=i.first,(e&nn)!==0&&(e&qs)!==0&&i!==null&&(i.f|=qs))}if(i!==null&&(i.parent=s,s!==null&&Pf(i,s),ce!==null&&(ce.f&Je)!==0&&(e&Yn)===0)){var a=ce;(a.effects??=[]).push(i)}return n}function Co(){return ce!==null&&!As}function aa(e){const t=Os(ii,null);return Ie(t,Ke),t.teardown=e,t}function Hn(e){Ed("$effect"),ot&&sn(e,"name",{value:"$effect"});var t=te.f,s=!ce&&(t&Ds)!==0&&(t&Kn)===0;if(s){var n=Ee;(n.e??=[]).push(e)}else return Dd(e)}function Dd(e){return Os(_i|sd,e)}function Af(e){return Ed("$effect.pre"),ot&&sn(e,"name",{value:"$effect.pre"}),Os(ii|sd,e)}function Cf(e){pn.ensure();const t=Os(Yn|bi,e);return(s={})=>new Promise(n=>{s.outro?Nn(t,()=>{Ge(t),n(void 0)}):(Ge(t),n(void 0))})}function ra(e){return Os(_i,e)}function zf(e){return Os(nr|bi,e)}function ar(e,t=0){return Os(ii|t,e)}function L(e,t=[],s=[],n=[]){kd(n,t,s,i=>{Os(ii,()=>e(...i.map(u)))})}function Xn(e,t=0){var s=Os(nn|t,e);return ot&&(s.dev_stack=ri),s}function Od(e,t=0){var s=Os(bo|t,e);return ot&&(s.dev_stack=ri),s}function ds(e){return Os(Ds|bi,e)}function Ld(e){var t=e.teardown;if(t!==null){const s=yn,n=ce;hl(!0),$s(null);try{t.call(null)}finally{hl(s),$s(n)}}}function zo(e,t=!1){var s=e.first;for(e.first=e.last=null;s!==null;){const i=s.ac;i!==null&&ki(()=>{i.abort(Rn)});var n=s.next;(s.f&Yn)!==0?s.parent=null:Ge(s,t),s=n}}function Tf(e){for(var t=e.first;t!==null;){var s=t.next;(t.f&Ds)===0&&Ge(t),t=s}}function Ge(e,t=!0){var s=!1;(t||(e.f&_h)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ef(e.nodes.start,e.nodes.end),s=!0),zo(e,t&&!s),Yi(e,0),Ie(e,en);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Ld(e);var i=e.parent;i!==null&&i.first!==null&&Rd(e),ot&&(e.component_function=null),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Ef(e,t){for(;e!==null;){var s=e===t?null:ia(e);e.remove(),e=s}}function Rd(e){var t=e.parent,s=e.prev,n=e.next;s!==null&&(s.next=n),n!==null&&(n.prev=s),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=s))}function Nn(e,t,s=!0){var n=[];Id(e,n,!0);var i=()=>{s&&Ge(e),t&&t()},a=n.length;if(a>0){var r=()=>--a||i();for(var o of n)o.out(r)}else i()}function Id(e,t,s){if((e.f&ms)===0){e.f^=ms;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||s)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next,r=(i.f&qs)!==0||(i.f&Ds)!==0&&(e.f&nn)!==0;Id(i,t,r?s:!1),i=a}}}function To(e){jd(e,!0)}function jd(e,t){if((e.f&ms)!==0){e.f^=ms,(e.f&Ke)===0&&(Ie(e,Qe),Ps(e));for(var s=e.first;s!==null;){var n=s.next,i=(s.f&qs)!==0||(s.f&Ds)!==0;jd(s,i?t:!1),s=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const r of a)(r.is_global||t)&&r.in()}}function Nd(e,t){if(e.nodes)for(var s=e.nodes.start,n=e.nodes.end;s!==null;){var i=s===n?null:ia(s);t.append(s),s=i}}let Da=!1,yn=!1;function hl(e){yn=e}let ce=null,As=!1;function $s(e){ce=e}let te=null;function _s(e){te=e}let ws=null;function Fd(e){ce!==null&&(ws===null?ws=[e]:ws.push(e))}let cs=null,fs=0,xs=null;function Df(e){xs=e}let Bd=1,jn=0,Fn=jn;function fl(e){Fn=e}function qd(){return++Bd}function oa(e){var t=e.f;if((t&Qe)!==0)return!0;if(t&Je&&(e.f&=~_n),(t&Ts)!==0){for(var s=e.deps,n=s.length,i=0;i<n;i++){var a=s[i];if(oa(a)&&wd(a),a.wv>e.wv)return!0}(t&ks)!==0&&Ms===null&&Ie(e,Ke)}return!1}function Vd(e,t,s=!0){var n=e.reactions;if(n!==null&&!(ws!==null&&Vn.call(ws,e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Je)!==0?Vd(a,t,!1):t===a&&(s?Ie(a,Qe):(a.f&Ke)!==0&&Ie(a,Ts),Ps(a))}}function Kr(e){var t=cs,s=fs,n=xs,i=ce,a=ws,r=Ee,o=As,l=Fn,c=e.f;cs=null,fs=0,xs=null,ce=(c&(Ds|Yn))===0?e:null,ws=null,ai(e.ctx),As=!1,Fn=++jn,e.ac!==null&&(ki(()=>{e.ac.abort(Rn)}),e.ac=null);try{e.f|=Wr;var d=e.fn,h=d();e.f|=Kn;var f=e.deps,v=_e?.is_fork;if(cs!==null){var g;if(v||Yi(e,fs),f!==null&&fs>0)for(f.length=fs+cs.length,g=0;g<cs.length;g++)f[fs+g]=cs[g];else e.deps=f=cs;if(Co()&&(e.f&ks)!==0)for(g=fs;g<f.length;g++)(f[g].reactions??=[]).push(e)}else!v&&f!==null&&fs<f.length&&(Yi(e,fs),f.length=fs);if(xi()&&xs!==null&&!As&&f!==null&&(e.f&(Je|Ts|Qe))===0)for(g=0;g<xs.length;g++)Vd(xs[g],e);if(i!==null&&i!==e){if(jn++,i.deps!==null)for(let m=0;m<s;m+=1)i.deps[m].rv=jn;if(t!==null)for(const m of t)m.rv=jn;xs!==null&&(n===null?n=xs:n.push(...xs))}return(e.f&vn)!==0&&(e.f^=vn),h}catch(m){return vd(m)}finally{e.f^=Wr,cs=t,fs=s,xs=n,ce=i,ws=a,ai(r),As=o,Fn=l}}function Of(e,t){let s=t.reactions;if(s!==null){var n=vh.call(s,e);if(n!==-1){var i=s.length-1;i===0?s=t.reactions=null:(s[n]=s[i],s.pop())}}if(s===null&&(t.f&Je)!==0&&(cs===null||!Vn.call(cs,t))){var a=t;(a.f&ks)!==0&&(a.f^=ks,a.f&=~_n),wo(a),gf(a),Yi(a,0)}}function Yi(e,t){var s=e.deps;if(s!==null)for(var n=t;n<s.length;n++)Of(e,s[n])}function ui(e){var t=e.f;if((t&en)===0){Ie(e,Ke);var s=te,n=Da;if(te=e,Da=!0,ot){var i=sa;rl(e.component_function);var a=ri;Fa(e.dev_stack??ri)}try{(t&(nn|bo))!==0?Tf(e):zo(e),Ld(e);var r=Kr(e);e.teardown=typeof r=="function"?r:null,e.wv=Bd;var o;ot&&Jh&&(e.f&Qe)!==0&&e.deps}finally{Da=n,te=s,ot&&(rl(i),Fa(a))}}}async function Lf(){await Promise.resolve(),af()}function u(e){var t=e.f,s=(t&Je)!==0;if(ce!==null&&!As){var n=te!==null&&(te.f&en)!==0;if(!n&&(ws===null||!Vn.call(ws,e))){var i=ce.deps;if((ce.f&Wr)!==0)e.rv<jn&&(e.rv=jn,cs===null&&i!==null&&i[fs]===e?fs++:cs===null?cs=[e]:cs.push(e));else{(ce.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[ce]:Vn.call(a,ce)||a.push(ce)}}}if(ot&&ff.delete(e),yn&&gn.has(e))return gn.get(e);if(s){var r=e;if(yn){var o=r.v;return((r.f&Ke)===0&&r.reactions!==null||Wd(r))&&(o=So(r)),gn.set(r,o),o}var l=(r.f&ks)===0&&!As&&ce!==null&&(Da||(ce.f&ks)!==0),c=(r.f&Kn)===0;oa(r)&&(l&&(r.f|=ks),wd(r)),l&&!c&&($d(r),Hd(r))}if(Ms?.has(e))return Ms.get(e);if((e.f&vn)!==0)throw e.v;return e.v}function Hd(e){if(e.f|=ks,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&Je)!==0&&(t.f&ks)===0&&($d(t),Hd(t))}function Wd(e){if(e.v===He)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(gn.has(t)||(t.f&Je)!==0&&Wd(t))return!0;return!1}function Es(e){var t=As;try{return As=!0,e()}finally{As=t}}function En(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ns in e)Xr(e);else if(!Array.isArray(e))for(let t in e){const s=e[t];typeof s=="object"&&s&&Ns in s&&Xr(s)}}}function Xr(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Xr(e[n],t)}catch{}const s=_o(e);if(s!==Object.prototype&&s!==Array.prototype&&s!==Map.prototype&&s!==Set.prototype&&s!==Date.prototype){const n=td(s);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Rf(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const If=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function jf(e){return If.includes(e)}const Nf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ff(e){return e=e.toLowerCase(),Nf[e]??e}const Bf=["touchstart","touchmove"];function qf(e){return Bf.includes(e)}const Ei=Symbol("events"),Ud=new Set,Gr=new Set;function Yd(e,t,s,n={}){function i(a){if(n.capture||Jr.call(t,a),!a.cancelBubble)return ki(()=>s?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?zs(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function js(e,t,s,n,i){var a={capture:n,passive:i},r=Yd(e,t,s,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&aa(()=>{t.removeEventListener(e,r,a)})}function nt(e,t,s){(t[Ei]??={})[e]=s}function De(e){for(var t=0;t<e.length;t++)Ud.add(e[t]);for(var s of Gr)s(e)}let vl=null;function Jr(e){var t=this,s=t.ownerDocument,n=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;vl=e;var r=0,o=vl===e&&e[Ei];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Ei]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(r=l)}if(a=i[r]||e.target,a!==t){sn(e,"currentTarget",{configurable:!0,get(){return a||s}});var d=ce,h=te;$s(null),_s(null);try{for(var f,v=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var m=a[Ei]?.[n];m!=null&&(!a.disabled||e.target===a)&&m.call(a,e)}catch(b){f?v.push(b):f=b}if(e.cancelBubble||g===t||g===null)break;a=g}if(f){for(let b of v)queueMicrotask(()=>{throw b});throw f}}finally{e[Ei]=t,delete e.currentTarget,$s(d),_s(h)}}}const Vf=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Hf(e){return Vf?.createHTML(e)??e}function Kd(e){var t=Td("template");return t.innerHTML=Hf(e.replaceAll("<!>","<!---->")),t.content}function hi(e,t){var s=te;s.nodes===null&&(s.nodes={start:e,end:t,a:null,t:null})}function A(e,t){var s=(t&Hh)!==0,n=(t&Wh)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Kd(a?e:"<!>"+e),s||(i=di(i)));var r=n||Po?document.importNode(i,!0):i.cloneNode(!0);if(s){var o=di(r),l=r.lastChild;hi(o,l)}else hi(r,r);return r}}function Wf(e,t,s="svg"){var n=!e.startsWith("<!>"),i=`<${s}>${n?e:"<!>"+e}</${s}>`,a;return()=>{if(!a){var r=Kd(i),o=di(r);a=di(o)}var l=a.cloneNode(!0);return hi(l,l),l}}function rr(e,t){return Wf(e,t,"svg")}function Ht(e=""){{var t=Fs(e+"");return hi(t,t),t}}function it(){var e=document.createDocumentFragment(),t=document.createComment(""),s=Fs();return e.append(t,s),hi(t,s),e}function x(e,t){e!==null&&e.before(t)}let Va=!0;function ha(e){Va=e}function D(e,t){var s=t==null?"":typeof t=="object"?`${t}`:t;s!==(e.__t??=e.nodeValue)&&(e.__t=s,e.nodeValue=`${s}`)}function Uf(e,t){return Yf(e,t)}const fa=new Map;function Yf(e,{target:t,anchor:s,props:n={},events:i,context:a,intro:r=!0,transformError:o}){wf();var l=void 0,c=Cf(()=>{var d=s??t.appendChild(Fs());cf(d,{pending:()=>{}},v=>{ke({});var g=Ee;a&&(g.c=a),i&&(n.$$events=i),Va=r,l=e(v,n)||{},Va=!0,we()},o);var h=new Set,f=v=>{for(var g=0;g<v.length;g++){var m=v[g];if(!h.has(m)){h.add(m);var b=qf(m);for(const k of[t,document]){var y=fa.get(k);y===void 0&&(y=new Map,fa.set(k,y));var S=y.get(m);S===void 0?(k.addEventListener(m,Jr,{passive:b}),y.set(m,1)):y.set(m,S+1)}}}};return f(sr(Ud)),Gr.add(f),()=>{for(var v of h)for(const b of[t,document]){var g=fa.get(b),m=g.get(v);--m==0?(b.removeEventListener(v,Jr),g.delete(v),g.size===0&&fa.delete(b)):g.set(v,m)}Gr.delete(f),d!==s&&d.parentNode?.removeChild(d)}});return Kf.set(l,c),l}let Kf=new WeakMap;class la{anchor;#t=new Map;#o=new Map;#e=new Map;#r=new Set;#s=!0;constructor(t,s=!0){this.anchor=t,this.#s=s}#a=t=>{if(this.#t.has(t)){var s=this.#t.get(t),n=this.#o.get(s);if(n)To(n),this.#r.delete(s);else{var i=this.#e.get(s);i&&(this.#o.set(s,i.effect),this.#e.delete(s),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,r]of this.#t){if(this.#t.delete(a),a===t)break;const o=this.#e.get(r);o&&(Ge(o.effect),this.#e.delete(r))}for(const[a,r]of this.#o){if(a===s||this.#r.has(a))continue;const o=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Nd(r,c),c.append(Fs()),this.#e.set(a,{effect:r,fragment:c})}else Ge(r);this.#r.delete(a),this.#o.delete(a)};this.#s||!n?(this.#r.add(a),Nn(r,o,!1)):o()}}};#n=t=>{this.#t.delete(t);const s=Array.from(this.#t.values());for(const[n,i]of this.#e)s.includes(n)||(Ge(i.effect),this.#e.delete(n))};ensure(t,s){var n=_e,i=zd();if(s&&!this.#o.has(t)&&!this.#e.has(t))if(i){var a=document.createDocumentFragment(),r=Fs();a.append(r),this.#e.set(t,{effect:ds(()=>s(r)),fragment:a})}else this.#o.set(t,ds(()=>s(this.anchor)));if(this.#t.set(n,t),i){for(const[o,l]of this.#o)o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of this.#e)o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(this.#a),n.ondiscard(this.#n)}else this.#a(n)}}function B(e,t,s=!1){var n=new la(e),i=s?qs:0;function a(r,o){n.ensure(r,o)}Xn(()=>{var r=!1;t((o,l=0)=>{r=!0,a(l,o)}),r||a(!1,null)},i)}const Xf=Symbol("NaN");function Gf(e,t,s){var n=new la(e),i=!xi();Xn(()=>{var a=t();a!==a&&(a=Xf),i&&a!==null&&typeof a=="object"&&(a={}),n.ensure(a,s)})}function Le(e,t){return t}function Jf(e,t,s){for(var n=[],i=t.length,a,r=t.length,o=0;o<i;o++){let h=t[o];Nn(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=e.outrogroups;Qr(sr(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=n.length===0&&s!==null;if(l){var c=s,d=c.parentNode;$f(d),d.append(c),e.items.clear()}Qr(t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function Qr(e,t=!0){for(var s=0;s<e.length;s++)Ge(e[s],t)}var pl;function ie(e,t,s,n,i,a=null){var r=e,o=new Map,l=(t&rd)!==0;if(l){var c=e;r=c.appendChild(Fs())}var d=null,h=$o(()=>{var y=s();return mo(y)?y:y==null?[]:sr(y)}),f,v=!0;function g(){b.fallback=d,Qf(b,f,r,t,n),d!==null&&(f.length===0?(d.f&Gs)===0?To(d):(d.f^=Gs,Di(d,null,r)):Nn(d,()=>{d=null}))}var m=Xn(()=>{f=u(h);for(var y=f.length,S=new Set,k=_e,$=zd(),w=0;w<y;w+=1){var P=f[w],z=n(P,w);if(ot){var C=n(P,w);z!==C&&wh(String(w),String(z),String(C))}var T=v?null:o.get(z);T?(T.v&&ci(T.v,P),T.i&&ci(T.i,w),$&&k.unskip_effect(T.e)):(T=Zf(o,v?r:pl??=Fs(),P,z,w,i,t,s),v||(T.e.f|=Gs),o.set(z,T)),S.add(z)}if(y===0&&a&&!d&&(v?d=ds(()=>a(r)):(d=ds(()=>a(pl??=Fs())),d.f|=Gs)),y>S.size&&(ot?tv(f,n):ad("","","")),!v)if($){for(const[E,R]of o)S.has(E)||k.skip_effect(R.e);k.oncommit(g),k.ondiscard(()=>{})}else g();u(h)}),b={effect:m,items:o,outrogroups:null,fallback:d};v=!1}function wi(e){for(;e!==null&&(e.f&Ds)===0;)e=e.next;return e}function Qf(e,t,s,n,i){var a=(n&Ih)!==0,r=t.length,o=e.items,l=wi(e.effect.first),c,d=null,h,f=[],v=[],g,m,b,y;if(a)for(y=0;y<r;y+=1)g=t[y],m=i(g,y),b=o.get(m).e,(b.f&Gs)===0&&(b.nodes?.a?.measure(),(h??=new Set).add(b));for(y=0;y<r;y+=1){if(g=t[y],m=i(g,y),b=o.get(m).e,e.outrogroups!==null)for(const E of e.outrogroups)E.pending.delete(b),E.done.delete(b);if((b.f&Gs)!==0)if(b.f^=Gs,b===l)Di(b,null,s);else{var S=d?d.next:l;b===e.effect.last&&(e.effect.last=b.prev),b.prev&&(b.prev.next=b.next),b.next&&(b.next.prev=b.prev),rn(e,d,b),rn(e,b,S),Di(b,S,s),d=b,f=[],v=[],l=wi(d.next);continue}if((b.f&ms)!==0&&(To(b),a&&(b.nodes?.a?.unfix(),(h??=new Set).delete(b))),b!==l){if(c!==void 0&&c.has(b)){if(f.length<v.length){var k=v[0],$;d=k.prev;var w=f[0],P=f[f.length-1];for($=0;$<f.length;$+=1)Di(f[$],k,s);for($=0;$<v.length;$+=1)c.delete(v[$]);rn(e,w.prev,P.next),rn(e,d,w),rn(e,P,k),l=k,d=P,y-=1,f=[],v=[]}else c.delete(b),Di(b,l,s),rn(e,b.prev,b.next),rn(e,b,d===null?e.effect.first:d.next),rn(e,d,b),d=b;continue}for(f=[],v=[];l!==null&&l!==b;)(c??=new Set).add(l),v.push(l),l=wi(l.next);if(l===null)continue}(b.f&Gs)===0&&f.push(b),d=b,l=wi(b.next)}if(e.outrogroups!==null){for(const E of e.outrogroups)E.pending.size===0&&(Qr(sr(E.done)),e.outrogroups?.delete(E));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var z=[];if(c!==void 0)for(b of c)(b.f&ms)===0&&z.push(b);for(;l!==null;)(l.f&ms)===0&&l!==e.fallback&&z.push(l),l=wi(l.next);var C=z.length;if(C>0){var T=(n&rd)!==0&&r===0?s:null;if(a){for(y=0;y<C;y+=1)z[y].nodes?.a?.measure();for(y=0;y<C;y+=1)z[y].nodes?.a?.fix()}Jf(e,z,T)}}a&&zs(()=>{if(h!==void 0)for(b of h)b.nodes?.a?.apply()})}function Zf(e,t,s,n,i,a,r,o){var l=(r&Lh)!==0?(r&jh)===0?Sd(s,!1,!1):bn(s):null,c=(r&Rh)!==0?bn(i):null;return ot&&l&&(l.trace=()=>{o()[c?.v??i]}),{v:l,i:c,e:ds(()=>(a(t,l??s,c??i,o),()=>{e.delete(n)}))}}function Di(e,t,s){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Gs)===0?t.nodes.start:s;n!==null;){var r=ia(n);if(a.before(n),n===i)return;n=r}}function rn(e,t,s){t===null?e.effect.first=s:t.next=s,s===null?e.effect.last=t:s.prev=t}function tv(e,t){const s=new Map,n=e.length;for(let i=0;i<n;i++){const a=t(e[i],i);if(s.has(a)){const r=String(s.get(a)),o=String(i);let l=String(a);l.startsWith("[object ")&&(l=null),ad(r,o,l)}s.set(a,i)}}function ht(e,t,s,n,i){var a=t.$$slots?.[s],r=!1;a===!0&&(a=t.children,r=!0),a===void 0||a(e,r?()=>n:n)}function xn(e,t,...s){var n=new la(e);Xn(()=>{const i=t()??null;ot&&i==null&&Ah(),n.ensure(i,i&&(a=>i(a,...s)))},qs)}function or(e,t,s){var n=new la(e);Xn(()=>{var i=t()??null;n.ensure(i,i&&(a=>s(a,i)))},qs)}const ev=()=>performance.now(),Xs={tick:e=>requestAnimationFrame(e),now:()=>ev(),tasks:new Set};function Xd(){const e=Xs.now();Xs.tasks.forEach(t=>{t.c(e)||(Xs.tasks.delete(t),t.f())}),Xs.tasks.size!==0&&Xs.tick(Xd)}function sv(e){let t;return Xs.tasks.size===0&&Xs.tick(Xd),{promise:new Promise(s=>{Xs.tasks.add(t={c:e,f:s})}),abort(){Xs.tasks.delete(t)}}}function Zr(e,t){ki(()=>{e.dispatchEvent(new CustomEvent(t))})}function nv(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function gl(e){const t={},s=e.split(";");for(const n of s){const[i,a]=n.split(":");if(!i||a===void 0)break;const r=nv(i.trim());t[r]=a.trim()}return t}const iv=e=>e;function av(e,t,s,n){var i=(e&Vh)!==0,a="in",r,o=t.inert,l=t.style.overflow,c,d;function h(){return ki(()=>r??=s()(t,n?.()??{},{direction:a}))}var f={is_global:i,in(){t.inert=o,c?.abort(),c=Gd(t,h(),d,1,()=>{Zr(t,"introend"),c?.abort(),c=r=void 0,t.style.overflow=l})},out(b){{b?.(),r=void 0;return}},stop:()=>{c?.abort()}},v=te;if((v.nodes.t??=[]).push(f),Va){var g=i;if(!g){for(var m=v.parent;m&&(m.f&qs)!==0;)for(;(m=m.parent)&&(m.f&nn)===0;);g=!m||(m.f&Kn)!==0}g&&ra(()=>{Es(()=>f.in())})}}function Gd(e,t,s,n,i){if(ei(t)){var a,r=!1;return zs(()=>{if(!r){var m=t({direction:"in"});a=Gd(e,m,s,n,i)}}),{abort:()=>{r=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(!t?.duration&&!t?.delay)return Zr(e,"introstart"),i(),{abort:us,deactivate:us,reset:us,t:()=>n};const{delay:o=0,css:l,tick:c,easing:d=iv}=t;var h=[];if(c&&c(0,1),l){var f=gl(l(0,1));h.push(f,f)}var v=()=>1-n,g=e.animate(h,{duration:o,fill:"forwards"});return g.onfinish=()=>{g.cancel(),Zr(e,"introstart");var m=1-n,b=n-m,y=t.duration*Math.abs(b),S=[];if(y>0){var k=!1;if(l)for(var $=Math.ceil(y/16.666666666666668),w=0;w<=$;w+=1){var P=m+b*d(w/$),z=gl(l(P,1-P));S.push(z),k||=z.overflow==="hidden"}k&&(e.style.overflow="hidden"),v=()=>{var C=g.currentTime;return m+b*d(C/y)},c&&sv(()=>{if(g.playState!=="running")return!1;var C=v();return c(C,1-C),!0})}g=e.animate(S,{duration:y,fill:"forwards"}),g.onfinish=()=>{v=()=>n,c?.(n,1-n),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=us)},deactivate:()=>{i=us},reset:()=>{},t:()=>v()}}function rv(e,t,s,n,i,a){var r=null,o=e,l=new la(o,!1);Xn(()=>{const c=t()||null;var d=Yh;if(c===null){l.ensure(null,null),ha(!0);return}return l.ensure(c,h=>{if(c){if(r=Td(c,d),hi(r,r),n){var f=r.appendChild(Fs());n(r,f)}te.nodes.end=r,h.before(r)}}),ha(!0),()=>{c&&ha(!1)}},qs),aa(()=>{ha(!0)})}function ov(e,t){var s=void 0,n;Od(()=>{s!==(s=t())&&(n&&(Ge(n),n=null),s&&(n=ds(()=>{ra(()=>s(e))})))})}function Jd(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(s=Jd(e[t]))&&(n&&(n+=" "),n+=s)}else for(s in e)e[s]&&(n&&(n+=" "),n+=s);return n}function lv(){for(var e,t,s=0,n="",i=arguments.length;s<i;s++)(e=arguments[s])&&(t=Jd(e))&&(n&&(n+=" "),n+=t);return n}function cv(e){return typeof e=="object"?lv(e):e??""}const ml=[...` 	
\r\f \v\uFEFF`];function dv(e,t,s){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),s){for(var i of Object.keys(s))if(s[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,r=0;(r=n.indexOf(i,r))>=0;){var o=r+a;(r===0||ml.includes(n[r-1]))&&(o===n.length||ml.includes(n[o]))?n=(r===0?"":n.substring(0,r))+n.substring(o+1):r=o}}return n===""?null:n}function _l(e,t=!1){var s=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+s)}return n}function xr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function uv(e,t){if(t){var s="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,r=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(xr)),i&&l.push(...Object.keys(i).map(xr));var c=0,d=-1;const m=e.length;for(var h=0;h<m;h++){var f=e[h];if(o?f==="/"&&e[h-1]==="*"&&(o=!1):a?a===f&&(a=!1):f==="/"&&e[h+1]==="*"?o=!0:f==='"'||f==="'"?a=f:f==="("?r++:f===")"&&r--,!o&&a===!1&&r===0){if(f===":"&&d===-1)d=h;else if(f===";"||h===m-1){if(d!==-1){var v=xr(e.substring(c,d).trim());if(!l.includes(v)){f!==";"&&h++;var g=e.substring(c,h).trim();s+=" "+g+";"}}c=h+1,d=-1}}}}return n&&(s+=_l(n)),i&&(s+=_l(i,!0)),s=s.trim(),s===""?null:s}return e==null?null:String(e)}function Yt(e,t,s,n,i,a){var r=e.__className;if(r!==s||r===void 0){var o=dv(s,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=s}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function kr(e,t={},s,n){for(var i in s){var a=s[i];t[i]!==a&&(s[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Be(e,t,s,n){var i=e.__style;if(i!==t){var a=uv(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(kr(e,s?.[0],n[0]),kr(e,s?.[1],n[1],"important")):kr(e,s,n));return n}function fi(e,t,s=!1){if(e.multiple){if(t==null)return;if(!mo(t))return Xh();for(var n of e.options)n.selected=t.includes(Bi(n));return}for(n of e.options){var i=Bi(n);if(bf(i,t)){n.selected=!0;return}}(!s||t!==void 0)&&(e.selectedIndex=-1)}function lr(e){var t=new MutationObserver(()=>{fi(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),aa(()=>{t.disconnect()})}function vi(e,t,s=t){var n=new WeakSet,i=!0;Ao(e,"change",a=>{var r=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(r),Bi);else{var l=e.querySelector(r)??e.querySelector("option:not([disabled])");o=l&&Bi(l)}s(o),_e!==null&&n.add(_e)}),ra(()=>{var a=t();if(e===document.activeElement){var r=Ba??_e;if(n.has(r))return}if(fi(e,a,i),i&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Bi(o),s(a))}e.__value=a,i=!1}),lr(e)}function Bi(e){return"__value"in e?e.__value:e.value}const $i=Symbol("class"),Si=Symbol("style"),Qd=Symbol("is custom element"),Zd=Symbol("is html"),hv=yo?"option":"OPTION",fv=yo?"select":"SELECT",vv=yo?"progress":"PROGRESS";function Ha(e,t){var s=cr(e);s.value===(s.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==vv)||(e.value=t??"")}function bl(e,t){var s=cr(e);s.checked!==(s.checked=t??void 0)&&(e.checked=t)}function pv(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Dt(e,t,s,n){var i=cr(e);i[t]!==(i[t]=s)&&(t==="loading"&&(e[bh]=s),s==null?e.removeAttribute(t):typeof s!="string"&&tu(e).includes(t)?e[t]=s:e.setAttribute(t,s))}function gv(e,t,s,n,i=!1,a=!1){var r=cr(e),o=r[Qd],l=!r[Zd],c=t||{},d=e.nodeName===hv;for(var h in t)h in s||(s[h]=null);s.class?s.class=cv(s.class):s[$i]&&(s.class=null),s[Si]&&(s.style??=null);var f=tu(e);for(const $ in s){let w=s[$];if(d&&$==="value"&&w==null){e.value=e.__value="",c[$]=w;continue}if($==="class"){var v=e.namespaceURI==="http://www.w3.org/1999/xhtml";Yt(e,v,w,n,t?.[$i],s[$i]),c[$]=w,c[$i]=s[$i];continue}if($==="style"){Be(e,w,t?.[Si],s[Si]),c[$]=w,c[Si]=s[Si];continue}var g=c[$];if(!(w===g&&!(w===void 0&&e.hasAttribute($)))){c[$]=w;var m=$[0]+$[1];if(m!=="$$")if(m==="on"){const P={},z="$$"+$;let C=$.slice(2);var b=jf(C);if(Rf(C)&&(C=C.slice(0,-7),P.capture=!0),!b&&g){if(w!=null)continue;e.removeEventListener(C,c[z],P),c[z]=null}if(b)nt(C,e,w),De([C]);else if(w!=null){let T=function(E){c[$].call(this,E)};var k=T;c[z]=Yd(C,e,T,P)}}else if($==="style")Dt(e,$,w);else if($==="autofocus")Sf(e,!!w);else if(!o&&($==="__value"||$==="value"&&w!=null))e.value=e.__value=w;else if($==="selected"&&d)pv(e,w);else{var y=$;l||(y=Ff(y));var S=y==="defaultValue"||y==="defaultChecked";if(w==null&&!o&&!S)if(r[$]=null,y==="value"||y==="checked"){let P=e;const z=t===void 0;if(y==="value"){let C=P.defaultValue;P.removeAttribute(y),P.defaultValue=C,P.value=P.__value=z?C:null}else{let C=P.defaultChecked;P.removeAttribute(y),P.defaultChecked=C,P.checked=z?C:!1}}else e.removeAttribute($);else S||f.includes(y)&&(o||typeof w!="string")?(e[y]=w,y in r&&(r[y]=He)):typeof w!="function"&&Dt(e,y,w)}}}return c}function yl(e,t,s=[],n=[],i=[],a,r=!1,o=!1){kd(i,s,n,l=>{var c=void 0,d={},h=e.nodeName===fv,f=!1;if(Od(()=>{var g=t(...l.map(u)),m=gv(e,c,g,a,r,o);f&&h&&"value"in g&&fi(e,g.value);for(let y of Object.getOwnPropertySymbols(d))g[y]||Ge(d[y]);for(let y of Object.getOwnPropertySymbols(g)){var b=g[y];y.description===Kh&&(!c||b!==c[y])&&(d[y]&&Ge(d[y]),d[y]=ds(()=>ov(e,()=>b))),m[y]=b}c=m}),h){var v=e;ra(()=>{fi(v,c.value,!0),lr(v)})}f=!0})}function cr(e){return e.__attributes??={[Qd]:e.nodeName.includes("-"),[Zd]:e.namespaceURI===ld}}var xl=new Map;function tu(e){var t=e.getAttribute("is")||e.nodeName,s=xl.get(t);if(s)return s;xl.set(t,s=[]);for(var n,i=e,a=Element.prototype;a!==i;){n=td(i);for(var r in n)n[r].set&&s.push(r);i=_o(i)}return s}function Te(e,t,s=t){var n=new WeakSet;Ao(e,"input",async i=>{ot&&e.type==="checkbox"&&al();var a=i?e.defaultValue:e.value;if(a=wr(e)?$r(a):a,s(a),_e!==null&&n.add(_e),await Lf(),a!==(a=t())){var r=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=a??"",o!==null){var c=e.value.length;r===o&&o===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=r,e.selectionEnd=Math.min(o,c))}}}),Es(t)==null&&e.value&&(s(wr(e)?$r(e.value):e.value),_e!==null&&n.add(_e)),ar(()=>{ot&&e.type==="checkbox"&&al();var i=t();if(e===document.activeElement){var a=Ba??_e;if(n.has(a))return}wr(e)&&i===$r(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function eu(e,t,s=t){Ao(e,"change",n=>{var i=n?e.defaultChecked:e.checked;s(i)}),Es(t)==null&&s(e.checked),ar(()=>{var n=t();e.checked=!!n})}function wr(e){var t=e.type;return t==="number"||t==="range"}function $r(e){return e===""?null:+e}function kl(e,t){return e===t||e?.[Ns]===t}function Eo(e={},t,s,n){return ra(()=>{var i,a;return ar(()=>{i=a,a=[],Es(()=>{e!==s(...a)&&(t(e,...a),i&&kl(s(...i),e)&&t(null,...i))})}),()=>{zs(()=>{a&&kl(s(...a),e)&&t(null,...a)})}}),e}function mv(e=!1){const t=Ee,s=t.l.u;if(!s)return;let n=()=>En(t.s);if(e){let i=0,a={};const r=na(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>u(r)}s.b.length&&Af(()=>{wl(t,n),ja(s.b)}),Hn(()=>{const i=Es(()=>s.m.map(mh));return()=>{for(const a of i)typeof a=="function"&&a()}}),s.a.length&&Hn(()=>{wl(t,n),ja(s.a)})}function wl(e,t){if(e.l.s)for(const s of e.l.s)u(s);t()}function Do(e,t,s){if(e==null)return t(void 0),s&&s(void 0),us;const n=Es(()=>e.subscribe(t,s));return n.unsubscribe?()=>n.unsubscribe():n}const Jn=[];function _v(e,t){return{subscribe:Vs(e,t).subscribe}}function Vs(e,t=us){let s=null;const n=new Set;function i(o){if(dd(e,o)&&(e=o,s)){const l=!Jn.length;for(const c of n)c[1](),Jn.push(c,e);if(l){for(let c=0;c<Jn.length;c+=2)Jn[c][0](Jn[c+1]);Jn.length=0}}}function a(o){i(o(e))}function r(o,l=us){const c=[o,l];return n.add(c),n.size===1&&(s=t(i,a)||us),o(e),()=>{n.delete(c),n.size===0&&s&&(s(),s=null)}}return{set:i,update:a,subscribe:r}}function bv(e,t,s){const n=!Array.isArray(e),i=n?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=t.length<2;return _v(s,(r,o)=>{let l=!1;const c=[];let d=0,h=us;const f=()=>{if(d)return;h();const g=t(n?c[0]:c,r,o);a?r(g):h=typeof g=="function"?g:us},v=i.map((g,m)=>Do(g,b=>{c[m]=b,d&=~(1<<m),l&&f()},()=>{d|=1<<m}));return l=!0,f(),function(){ja(v),h(),l=!1}})}function su(e){let t;return Do(e,s=>t=s)(),t}let va=!1,to=Symbol();function nu(e,t,s){const n=s[t]??={store:null,source:Sd(void 0),unsubscribe:us};if(ot&&(n.source.label=t),n.store!==e&&!(to in s))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=us;else{var i=!0;n.unsubscribe=Do(e,a=>{i?n.source.v=a:M(n.source,a)}),i=!1}return e&&to in s?su(e):u(n.source)}function iu(){const e={};function t(){aa(()=>{for(var s in e)e[s].unsubscribe();sn(e,to,{enumerable:!1,value:!0})})}return[e,t]}function yv(e){var t=va;try{return va=!1,[e(),va]}finally{va=t}}const xv={get(e,t){if(!e.exclude.includes(t))return u(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,s){if(!(t in e.special)){var n=te;try{_s(e.parent_effect),e.special[t]=be({get[t](){return e.props[t]}},t,od)}finally{_s(n)}}return e.special[t](s),dl(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),dl(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ut(e,t){return new Proxy({props:e,exclude:t,special:{},version:bn(0),parent_effect:te},xv)}const kv={get(e,t){let s=e.props.length;for(;s--;){let n=e.props[s];if(ei(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,s){let n=e.props.length;for(;n--;){let i=e.props[n];ei(i)&&(i=i());const a=tn(i,t);if(a&&a.set)return a.set(s),!0}return!1},getOwnPropertyDescriptor(e,t){let s=e.props.length;for(;s--;){let n=e.props[s];if(ei(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=tn(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Ns||t===nd)return!1;for(let s of e.props)if(ei(s)&&(s=s()),s!=null&&t in s)return!0;return!1},ownKeys(e){const t=[];for(let s of e.props)if(ei(s)&&(s=s()),!!s){for(const n in s)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(s))t.includes(n)||t.push(n)}return t}};function gt(...e){return new Proxy({props:e},kv)}function be(e,t,s,n){var i=!yi||(s&Fh)!==0,a=(s&Bh)!==0,r=(s&qh)!==0,o=n,l=!0,c=()=>(l&&(l=!1,o=r?Es(n):n),o),d;if(a){var h=Ns in e||nd in e;d=tn(e,t)?.set??(h&&t in e?k=>e[t]=k:void 0)}var f,v=!1;a?[f,v]=yv(()=>e[t]):f=e[t],f===void 0&&n!==void 0&&(f=c(),d&&(i&&Ch(t),d(f)));var g;if(i?g=()=>{var k=e[t];return k===void 0?c():(l=!0,k)}:g=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(s&od)===0)return g;if(d){var m=e.$$legacy;return(function(k,$){return arguments.length>0?((!i||!$||m||v)&&d($?g():k),k):g()})}var b=!1,y=((s&Nh)!==0?na:$o)(()=>(b=!1,g()));ot&&(y.label=t),a&&u(y);var S=te;return(function(k,$){if(arguments.length>0){const w=$?u(y):i&&a?$e(k):k;return M(y,w),b=!0,o!==void 0&&(o=w),k}return yn&&b||(S.f&en)!==0?y.v:u(y)})}if(ot){let e=function(t){if(!(t in globalThis)){let s;Object.defineProperty(globalThis,t,{configurable:!0,get:()=>{if(s!==void 0)return s;zh(t)},set:n=>{s=n}})}};var Gw=e;e("$state"),e("$effect"),e("$derived"),e("$inspect"),e("$props"),e("$bindable")}function Ve(e){Ee===null&&yh("onMount"),yi&&Ee.l!==null?wv(Ee).m.push(e):Hn(()=>{const t=Es(e);if(typeof t=="function")return t})}function wv(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const $v="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add($v);Qh();/**
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
 */const Sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Mv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const $l=(...e)=>e.filter((t,s,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===s).join(" ").trim();var Pv=rr("<svg><!><!></svg>");function mt(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]),n=ut(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ke(t,!1);let i=be(t,"name",8,void 0),a=be(t,"color",8,"currentColor"),r=be(t,"size",8,24),o=be(t,"strokeWidth",8,2),l=be(t,"absoluteStrokeWidth",8,!1),c=be(t,"iconNode",24,()=>[]);mv();var d=Pv();yl(d,(v,g,m)=>({...Sv,...v,...n,width:r(),height:r(),stroke:a(),"stroke-width":g,class:m}),[()=>Mv(n)?void 0:{"aria-hidden":"true"},()=>(En(l()),En(o()),En(r()),Es(()=>l()?Number(o())*24/Number(r()):o())),()=>(En($l),En(i()),En(s),Es(()=>$l("lucide-icon","lucide",i()?`lucide-${i()}`:"",s.class)))]);var h=p(d);ie(h,1,c,Le,(v,g)=>{var m=W(()=>Vr(u(g),2));let b=()=>u(m)[0],y=()=>u(m)[1];var S=it(),k=I(S);rv(k,b,!0,($,w)=>{yl($,()=>({...y()}))}),x(v,S)});var f=_(h);ht(f,t,"default",{}),x(e,d),we()}function Av(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];mt(e,gt({name:"activity"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Cv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];mt(e,gt({name:"arrow-down-left"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function zv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];mt(e,gt({name:"arrow-left-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Wa(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];mt(e,gt({name:"arrow-right-left"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Tv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];mt(e,gt({name:"arrow-up-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ev(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M4.929 4.929 19.07 19.071"}]];mt(e,gt({name:"ban"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Dv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];mt(e,gt({name:"bell"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ov(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];mt(e,gt({name:"calendar"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Lv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];mt(e,gt({name:"chart-column"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Sr(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];mt(e,gt({name:"check"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Rv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];mt(e,gt({name:"chevron-down"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Iv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];mt(e,gt({name:"chevron-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function eo(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];mt(e,gt({name:"circle-alert"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function jv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];mt(e,gt({name:"circle-check-big"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ua(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];mt(e,gt({name:"clock"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Nv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];mt(e,gt({name:"code"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Fv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48"}],["path",{d:"M15 6h1v4"}],["path",{d:"m6.134 14.768.866-.5 2 3.464"}],["circle",{cx:"16",cy:"8",r:"6"}]];mt(e,gt({name:"coins"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Bv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];mt(e,gt({name:"copy"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function qv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];mt(e,gt({name:"database"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Sl(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];mt(e,gt({name:"dollar-sign"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function au(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];mt(e,gt({name:"download"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Vv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];mt(e,gt({name:"ellipsis-vertical"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Hv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];mt(e,gt({name:"eye-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Wv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];mt(e,gt({name:"eye"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Uv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];mt(e,gt({name:"funnel"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Yv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];mt(e,gt({name:"grip-vertical"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Kv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];mt(e,gt({name:"hash"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Xv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];mt(e,gt({name:"info"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Gv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];mt(e,gt({name:"key-round"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ml(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];mt(e,gt({name:"key"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Jv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];mt(e,gt({name:"keyboard"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Qv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];mt(e,gt({name:"layers"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Zv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 5h.01"}],["path",{d:"M3 12h.01"}],["path",{d:"M3 19h.01"}],["path",{d:"M8 5h13"}],["path",{d:"M8 12h13"}],["path",{d:"M8 19h13"}]];mt(e,gt({name:"list"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Mr(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];mt(e,gt({name:"network"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function tp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];mt(e,gt({name:"palette"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ep(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];mt(e,gt({name:"pencil"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Pl(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];mt(e,gt({name:"play"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ki(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];mt(e,gt({name:"plus"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function sp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];mt(e,gt({name:"power"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ru(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478"}],["circle",{cx:"12",cy:"12",r:"2"}]];mt(e,gt({name:"radio"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function bs(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];mt(e,gt({name:"refresh-cw"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function np(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];mt(e,gt({name:"repeat"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Oo(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];mt(e,gt({name:"rotate-cw"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ip(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];mt(e,gt({name:"save"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ap(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];mt(e,gt({name:"scan-search"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function rp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];mt(e,gt({name:"search"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ou(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];mt(e,gt({name:"server"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Lo(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];mt(e,gt({name:"settings"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function op(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];mt(e,gt({name:"shield-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function so(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];mt(e,gt({name:"shield"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function lp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];mt(e,gt({name:"shuffle"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Al(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];mt(e,gt({name:"sliders-horizontal"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function cp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];mt(e,gt({name:"square"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function dp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];mt(e,gt({name:"target"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function lu(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];mt(e,gt({name:"terminal"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function si(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];mt(e,gt({name:"trash-2"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function up(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];mt(e,gt({name:"trending-up"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function hp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];mt(e,gt({name:"triangle-alert"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function fp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];mt(e,gt({name:"upload"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ya(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];mt(e,gt({name:"users"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function vp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];mt(e,gt({name:"wifi-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ro(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];mt(e,gt({name:"wifi"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function cu(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];mt(e,gt({name:"x"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function qi(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];mt(e,gt({name:"zap"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}const pp={"nav.accounts":"Comptes","nav.monitoring":"Monitoring","nav.settings":"Paramètres","nav.proxy":"Proxy","accounts.title":"Gestion des comptes","accounts.add":"Ajouter un compte","accounts.import":"Import auto","accounts.no_accounts":"Aucun compte configuré","accounts.active":"Actif","accounts.switch":"Activer","accounts.delete":"Supprimer","accounts.refresh":"Rafraîchir","quota.phase.cruise":"Croisière","quota.phase.watch":"Surveillance","quota.phase.alert":"Alerte","quota.phase.critical":"Critique","proxy.status.running":"En cours","proxy.status.stopped":"Arrêté","proxy.start":"Démarrer","proxy.stop":"Arrêter","proxy.restart":"Redémarrer","settings.title":"Paramètres","settings.theme":"Thème","settings.language":"Langue","settings.save":"Sauvegarder","toast.switch_success":"Switch vers {account}","toast.import_success":"{n} compte(s) importé(s)","toast.error":"Erreur : {msg}","monitoring.cost":"Coûts de session","monitoring.backoff":"Cooldowns actifs","monitoring.peers":"Topologie réseau","common.cancel":"Annuler","common.confirm":"Confirmer","common.close":"Fermer","common.loading":"Chargement...","common.error":"Erreur","common.success":"Succès"},gp={"nav.accounts":"Accounts","nav.monitoring":"Monitoring","nav.settings":"Settings","nav.proxy":"Proxy","accounts.title":"Account Management","accounts.add":"Add Account","accounts.import":"Auto Import","accounts.no_accounts":"No accounts configured","accounts.active":"Active","accounts.switch":"Activate","accounts.delete":"Delete","accounts.refresh":"Refresh","quota.phase.cruise":"Cruise","quota.phase.watch":"Watch","quota.phase.alert":"Alert","quota.phase.critical":"Critical","proxy.status.running":"Running","proxy.status.stopped":"Stopped","proxy.start":"Start","proxy.stop":"Stop","proxy.restart":"Restart","settings.title":"Settings","settings.theme":"Theme","settings.language":"Language","settings.save":"Save","toast.switch_success":"Switched to {account}","toast.import_success":"{n} account(s) imported","toast.error":"Error: {msg}","monitoring.cost":"Session costs","monitoring.backoff":"Active cooldowns","monitoring.peers":"Network topology","common.cancel":"Cancel","common.confirm":"Confirm","common.close":"Close","common.loading":"Loading...","common.error":"Error","common.success":"Success"},Cl={fr:pp,en:gp},mp=(typeof localStorage<"u"?localStorage.getItem("locale"):null)??"fr",dr=Vs(mp);function _p(e){dr.set(e),localStorage.setItem("locale",e)}function Oa(e,t){return(Cl[su(dr)]??Cl.fr)[e]??e}var bp=A('<span class="nav-indicator svelte-181dlmc"></span>'),yp=A('<button><span class="nav-icon svelte-181dlmc"><!></span> <span class="nav-label svelte-181dlmc"> </span> <!></button>'),xp=A('<aside class="sidebar svelte-181dlmc"><div class="sidebar-logo svelte-181dlmc"><div class="logo-icon svelte-181dlmc">AI</div> <div class="logo-text svelte-181dlmc"><span class="logo-title svelte-181dlmc">AI Manager</span> <span class="logo-version svelte-181dlmc">v3</span></div></div> <nav class="sidebar-nav svelte-181dlmc"></nav> <div class="sidebar-footer svelte-181dlmc"><span class="footer-text svelte-181dlmc">Multi-Account Manager</span></div></aside>');function kp(e,t){ke(t,!0);const s=()=>nu(dr,"$i18nStore",n),[n,i]=iu();let a=be(t,"currentScreen",15);const r=[{id:"accounts",labelKey:"nav.accounts",icon:Ya},{id:"proxy",labelKey:"nav.proxy",icon:zv},{id:"monitoring",labelKey:"nav.monitoring",icon:Av},{id:"settings",labelKey:"nav.settings",icon:Lo}];var o=xp(),l=_(p(o),2);ie(l,21,()=>r,Le,(c,d)=>{var h=yp();let f;var v=p(h),g=p(v);or(g,()=>u(d).icon,(k,$)=>{$(k,{size:18})});var m=_(v,2),b=p(m),y=_(m,2);{var S=k=>{var $=bp();x(k,$)};B(y,k=>{a()===u(d).id&&k(S)})}L(k=>{f=Yt(h,1,"nav-item svelte-181dlmc",null,f,{active:a()===u(d).id}),D(b,k)},[()=>(s(),Oa(u(d).labelKey))]),nt("click",h,()=>a(u(d).id)),x(c,h)}),x(e,o),we(),i()}De(["click"]);const du="/ai-manager/admin/api",wp="/ai-manager/admin/ws";async function as(e){const t=await fetch(`${du}/${e}`);if(!t.ok)throw new Error(`GET ${e} failed: ${t.status} ${t.statusText}`);return t.json()}async function ge(e,t){const s=await fetch(`${du}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:t!==void 0?JSON.stringify(t):void 0});if(!s.ok)throw new Error(`POST ${e} failed: ${s.status} ${s.statusText}`);return s.json()}let on=null;const ln=new Map;function uu(){if(on&&on.readyState===WebSocket.OPEN)return on;const t=`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}${wp}`;return on=new WebSocket(t),on.addEventListener("message",s=>{try{const n=JSON.parse(s.data),i=ln.get(n.event);i&&i.forEach(a=>a(n.payload))}catch{}}),on.addEventListener("close",()=>{on=null,ln.size>0&&setTimeout(()=>uu(),2e3)}),on}function Io(e,t){return ln.has(e)||ln.set(e,new Set),ln.get(e).add(t),uu(),()=>{ln.get(e)?.delete(t),ln.get(e)?.size===0&&ln.delete(e)}}const Pr=()=>as("get-accounts"),$p=e=>ge("switch-account",{key:e}),Sp=e=>ge("refresh-account",{key:e}),Mp=(e,t)=>ge("add-account",{key:e,data:t}),Pp=(e,t)=>ge("update-account",{key:e,updates:t}),Ap=e=>ge("delete-account",{key:e}),Cp=()=>as("get-config"),zp=e=>ge("set-config",{config:e}),pa=()=>as("get-proxy-status"),Tp=e=>ge("start-proxy",{kind:e}),Ep=e=>ge("stop-proxy",{kind:e}),Dp=e=>ge("restart-proxy",{kind:e}),Pn=()=>as("get-proxy-instances"),Op=e=>ge("add-proxy-instance",{config:e}),Lp=(e,t)=>ge("update-proxy-instance",{id:e,updates:t}),Rp=e=>ge("delete-proxy-instance",{id:e}),Ip=e=>ge("start-proxy-instance",{id:e}),jp=e=>ge("stop-proxy-instance",{id:e}),Np=e=>ge("restart-proxy-instance",{id:e}),Fp=()=>as("detect-proxy-binaries"),Bp=()=>as("probe-proxy-instances"),qp=e=>ge("setup-claude-code",{port:e}),Vp=()=>ge("remove-claude-code-setup"),Hp=e=>ge("setup-vscode-proxy",{port:e}),Wp=()=>ge("remove-vscode-proxy"),ga=()=>as("get-systemd-status"),Up=e=>ge("install-systemd-service",{daemonPath:e}),Yp=()=>ge("uninstall-systemd-service"),Kp=()=>as("get-sync-status"),La=()=>as("get-peers"),Xp=(e,t)=>ge("add-peer",{host:e,port:t}),Gp=e=>ge("remove-peer",{id:e}),Jp=()=>as("generate-sync-key"),Qp=e=>ge("set-sync-key",{key:e}),Zp=(e,t)=>ge("test-peer-connection",{host:e,port:t}),tg=()=>as("get-hostname"),eg=(e,t,s,n)=>ge("add-ssh-host",{host:e,port:t,username:s,identityPath:n}),sg=e=>ge("remove-ssh-host",{id:e}),ng=(e,t,s,n)=>ge("test-ssh-connection",{host:e,port:t,username:s,identityPath:n}),ig=(e,t)=>ge("get-quota-history",{key:e,period:t??"24h"}),hu=()=>as("get-sessions"),no=e=>ge("get-logs",{filter:e}),ag=()=>as("get-switch-history"),rg=()=>as("get-impersonation-profiles"),og=()=>as("scan-local-credentials"),lg=e=>ge("import-scanned-credentials",{credentials:e}),cg=()=>as("find-claude-binary"),dg=e=>ge("capture-oauth-token",{timeoutSecs:e}),ug=e=>Promise.resolve(Io("quota_update",t=>e(t))),hg=e=>Promise.resolve(Io("toast",t=>e(t))),fg=e=>Promise.resolve(Io("account_switch",t=>e(t)));function vg(){const{subscribe:e,set:t,update:s}=Vs(null);return{subscribe:e,load:async()=>{const n=await Cp();t(n)},save:async n=>{await zp(n),s(i=>i?{...i,...n}:null)}}}const Ae=vg(),zl={running:!1,port:0,uptimeSecs:0,requestsTotal:0,requestsActive:0};function pg(){const{subscribe:e,set:t}=Vs({router:{...zl,port:18080},impersonator:{...zl,port:18081}});return{subscribe:e,load:async()=>{const s=await pa();t(s)},start:async s=>{await Tp(s);const n=await pa();t(n)},stop:async s=>{await Ep(s);const n=await pa();t(n)},restart:async s=>{await Dp(s);const n=await pa();t(n)}}}function gg(){const{subscribe:e,set:t}=Vs([]);return{subscribe:e,load:async()=>{const s=await Pn();t(s)},probe:async()=>{const s=await Bp();t(s)},add:async s=>{await Op(s);const n=await Pn();t(n)},update:async(s,n)=>{await Lp(s,n);const i=await Pn();t(i)},remove:async s=>{await Rp(s);const n=await Pn();t(n)},start:async s=>{await Ip(s);const n=await Pn();t(n)},stop:async s=>{await jp(s);const n=await Pn();t(n)},restart:async s=>{await Np(s);const n=await Pn();t(n)}}}const mg=pg(),vs=gg();function _g(){const e=Vs([]),t=Vs(!1);return{peers:{subscribe:e.subscribe},enabled:{subscribe:t.subscribe},load:async()=>{const s=await Kp();t.set(s.enabled);const n=await La();e.set(n)},addPeer:async(s,n)=>{await Xp(s,n);const i=await La();e.set(i)},removePeer:async s=>{await Gp(s);const n=await La();e.set(n)},generateKey:async()=>await Jp(),setKey:async s=>{await Qp(s)},testPeer:async(s,n)=>await Zp(s,n)}}const Ss=_g();var bg=A('<span role="tooltip"> </span>'),yg=A('<span class="tooltip-wrapper svelte-c43bsi"><!> <!></span>');function Qn(e,t){let s=be(t,"position",3,"top"),n=j(!1);var i=yg(),a=p(i);xn(a,()=>t.children);var r=_(a,2);{var o=l=>{var c=bg(),d=p(c);L(()=>{Yt(c,1,`tooltip tooltip-${s()??""}`,"svelte-c43bsi"),D(d,t.text)}),x(l,c)};B(r,l=>{u(n)&&l(o)})}js("mouseenter",i,()=>M(n,!0)),js("mouseleave",i,()=>M(n,!1)),js("focus",i,()=>M(n,!0)),js("blur",i,()=>M(n,!1)),x(e,i)}var xg=A("<button><!> <span>Refresh</span> <span></span></button>"),kg=A("<button><!> <span>Switch</span> <span></span></button>"),wg=A("<button><!> <span>Rotation</span> <span></span></button>"),$g=A("<button><!> <span>Schedule</span> <span></span></button>"),Sg=A('<button class="status-item svelte-161y12f"><!> <span> </span> <span class="status-sep svelte-161y12f">/</span> <span> </span> <span></span></button>'),Mg=A("<button><!> <span>P2P</span> <span></span></button>"),Pg=A('<footer class="statusbar svelte-161y12f"><div class="statusbar-items svelte-161y12f"><!> <!> <!> <!> <!> <!></div></footer>');function Ag(e,t){ke(t,!0);let s=j(null),n=j($e({router:{running:!1,port:18080,uptimeSecs:0,requestsTotal:0,requestsActive:0},impersonator:{running:!1,port:18081,uptimeSecs:0,requestsTotal:0,requestsActive:0}})),i=j(!1);Ve(()=>{const $=Ae.subscribe(z=>{M(s,z,!0)}),w=mg.subscribe(z=>{M(n,z,!0)}),P=Ss.enabled.subscribe(z=>{M(i,z,!0)});return()=>{$(),w(),P()}});let a=W(()=>u(s)?.adaptiveRefresh??!1),r=W(()=>(u(s)?.proxy?.autoSwitchThreshold5h??0)>0),o=W(()=>u(s)?.proxy?.rotationEnabled??!1),l=W(()=>u(s)?.schedule?.enabled??!1),c=W(()=>u(n).router.running),d=W(()=>u(n).impersonator.running);function h($){t.onnavigate?.($)}var f=Pg(),v=p(f),g=p(v);Qn(g,{text:"Auto-refresh: Rafraichissement automatique des quotas",children:($,w)=>{var P=xg();let z;var C=p(P);bs(C,{size:12});var T=_(C,4);let E;L(()=>{z=Yt(P,1,"status-item svelte-161y12f",null,z,{active:u(a)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(a)})}),nt("click",P,()=>h("settings")),x($,P)},$$slots:{default:!0}});var m=_(g,2);Qn(m,{text:"Auto-switch: Changement automatique de compte",children:($,w)=>{var P=kg();let z;var C=p(P);lp(C,{size:12});var T=_(C,4);let E;L(()=>{z=Yt(P,1,"status-item svelte-161y12f",null,z,{active:u(r)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(r)})}),nt("click",P,()=>h("proxy")),x($,P)},$$slots:{default:!0}});var b=_(m,2);Qn(b,{text:"Rotation automatique des comptes",children:($,w)=>{var P=wg();let z;var C=p(P);Oo(C,{size:12});var T=_(C,4);let E;L(()=>{z=Yt(P,1,"status-item svelte-161y12f",null,z,{active:u(o)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(o)})}),nt("click",P,()=>h("proxy")),x($,P)},$$slots:{default:!0}});var y=_(b,2);Qn(y,{text:"Planning horaire d'activite",children:($,w)=>{var P=$g();let z;var C=p(P);Ua(C,{size:12});var T=_(C,4);let E;L(()=>{z=Yt(P,1,"status-item svelte-161y12f",null,z,{active:u(l)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(l)})}),nt("click",P,()=>h("settings")),x($,P)},$$slots:{default:!0}});var S=_(y,2);Qn(S,{text:"Proxy Router / Impersonator",children:($,w)=>{var P=Sg(),z=p(P);ru(z,{size:12});var C=_(z,2),T=p(C),E=_(C,4),R=p(E),N=_(E,2);let Z;L(()=>{D(T,`R:${u(c)?"ON":"OFF"}`),D(R,`I:${u(d)?"ON":"OFF"}`),Z=Yt(N,1,"status-dot svelte-161y12f",null,Z,{on:u(c)||u(d)})}),nt("click",P,()=>h("proxy")),x($,P)},$$slots:{default:!0}});var k=_(S,2);Qn(k,{text:"Synchronisation P2P entre instances",children:($,w)=>{var P=Mg();let z;var C=p(P);Ro(C,{size:12});var T=_(C,4);let E;L(()=>{z=Yt(P,1,"status-item svelte-161y12f",null,z,{active:u(i)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(i)})}),nt("click",P,()=>h("settings")),x($,P)},$$slots:{default:!0}}),x(e,f),we()}De(["click"]);const{subscribe:Cg,update:fu}=Vs([]);function Mi(e,t,s,n=4e3){const i=crypto.randomUUID(),a={id:i,type:e,title:t,message:s,duration:n};return fu(r=>[...r,a]),n>0&&setTimeout(()=>vu(i),n),i}function vu(e){fu(t=>t.filter(s=>s.id!==e))}const zg={subscribe:Cg},Ln={info:(e,t)=>Mi("info",e,t),success:(e,t)=>Mi("success",e,t),warning:(e,t)=>Mi("warning",e,t),error:(e,t)=>Mi("error",e,t,8e3),switch:(e,t)=>Mi("switch",e,t,5e3),remove:vu};var Tg=A('<span class="toast-message svelte-1ig2a9j"> </span>'),Eg=A('<div><span class="toast-icon svelte-1ig2a9j"><!></span> <div class="toast-content svelte-1ig2a9j"><span class="toast-title svelte-1ig2a9j"> </span> <!></div> <button class="toast-close svelte-1ig2a9j" aria-label="Fermer"><!></button></div>'),Dg=A('<div class="toast-container svelte-1ig2a9j"></div>');function Og(e,t){ke(t,!0);let s=j($e([]));Ve(()=>zg.subscribe(c=>{M(s,c,!0)}));const n={info:Xv,success:jv,warning:hp,error:eo,switch:np},i={info:"var(--accent)",success:"var(--phase-cruise)",warning:"var(--status-warning)",error:"var(--status-error)",switch:"var(--provider-xai)"};var a=it(),r=I(a);{var o=l=>{var c=Dg();ie(c,21,()=>u(s),d=>d.id,(d,h)=>{const f=W(()=>n[u(h).type]);var v=Eg(),g=p(v),m=p(g);or(m,()=>u(f),(z,C)=>{C(z,{size:16})});var b=_(g,2),y=p(b),S=p(y),k=_(y,2);{var $=z=>{var C=Tg(),T=p(C);L(()=>D(T,u(h).message)),x(z,C)};B(k,z=>{u(h).message&&z($)})}var w=_(b,2),P=p(w);cu(P,{size:14}),L(()=>{Yt(v,1,`toast-item toast-${u(h).type??""}`,"svelte-1ig2a9j"),Be(v,`--toast-color: ${i[u(h).type]??""}`),D(S,u(h).title)}),nt("click",w,()=>Ln.remove(u(h).id)),x(d,v)}),x(l,c)};B(r,l=>{u(s).length>0&&l(o)})}x(e,a),we()}De(["click"]);function Lg(){const{subscribe:e,set:t,update:s}=Vs([]);return{subscribe:e,load:async()=>{const n=await Pr();t(n)},switch:async n=>{await $p(n),s(i=>i.map(a=>({...a,isActive:a.key===n})))},updateQuota:(n,i)=>{s(a=>a.map(r=>r.key===n?{...r,quota:i}:r))},refresh:async n=>{await Sp(n);const i=await Pr();t(i)},delete:async n=>{await Ap(n),s(i=>i.filter(a=>a.key!==n))},add:async(n,i)=>{await Mp(n,i);const a=await Pr();t(a)},updateAccount:async(n,i)=>{await Pp(n,i),s(a=>a.map(r=>r.key!==n?r:{...r,data:{...r.data,...i.priority!=null&&{priority:i.priority},...i.autoSwitchDisabled!=null&&{autoSwitchDisabled:i.autoSwitchDisabled},...i.displayName!=null&&{displayName:i.displayName}}}))}}}const We=Lg();bv(We,e=>e.find(t=>t.isActive)??null);var Rg=A('<div class="quota-ring svelte-12gf5ir"><svg class="ring-svg svelte-12gf5ir"><circle fill="none" stroke="var(--border)"></circle><circle fill="none" stroke-linecap="round" class="ring-progress svelte-12gf5ir"></circle></svg> <span class="ring-label svelte-12gf5ir"> </span></div>');function Ig(e,t){let s=be(t,"percent",3,0),n=be(t,"phase",3,"Cruise"),i=be(t,"size",3,56),a=be(t,"strokeWidth",3,4);const r={Cruise:"var(--phase-cruise)",Watch:"var(--phase-watch)",Alert:"var(--phase-alert)",Critical:"var(--phase-critical)"};let o=W(()=>(i()-a())/2),l=W(()=>2*Math.PI*u(o)),c=W(()=>u(l)-Math.min(s(),1)*u(l)),d=W(()=>r[n()??"Cruise"]),h=W(()=>Math.round(Math.min(s(),1)*100));var f=Rg(),v=p(f),g=p(v),m=_(g),b=_(v,2),y=p(b);L(()=>{Be(f,`width: ${i()??""}px; height: ${i()??""}px`),Dt(v,"viewBox",`0 0 ${i()??""} ${i()??""}`),Dt(g,"cx",i()/2),Dt(g,"cy",i()/2),Dt(g,"r",u(o)),Dt(g,"stroke-width",a()),Dt(m,"cx",i()/2),Dt(m,"cy",i()/2),Dt(m,"r",u(o)),Dt(m,"stroke",u(d)),Dt(m,"stroke-width",a()),Dt(m,"stroke-dasharray",u(l)),Dt(m,"stroke-dashoffset",u(c)),Dt(m,"transform",`rotate(-90 ${i()/2} ${i()/2})`),Be(b,`color: ${u(d)??""}; font-size: ${i()*.22}px`),D(y,`${u(h)??""}%`)}),x(e,f)}var jg=A("<span><!></span>");function Ue(e,t){let s=be(t,"color",3,"var(--accent)"),n=be(t,"small",3,!1);var i=jg();let a;var r=p(i);xn(r,()=>t.children),L(()=>{a=Yt(i,1,"badge svelte-jpiuiy",null,a,{small:n()}),Be(i,`--badge-color: ${s()??""}`)}),x(e,i)}var Ng=A("<button><!></button>"),Fg=A("<div><!></div>");function he(e,t){let s=be(t,"hoverable",3,!0),n=be(t,"active",3,!1),i=be(t,"padding",3,"16px");var a=it(),r=I(a);{var o=c=>{var d=Ng();let h;var f=p(d);xn(f,()=>t.children),L(()=>{h=Yt(d,1,"card svelte-11fn1sl",null,h,{hoverable:s(),active:n()}),Be(d,`padding: ${i()??""}`)}),nt("click",d,function(...v){t.onclick?.apply(this,v)}),x(c,d)},l=c=>{var d=Fg();let h;var f=p(d);xn(f,()=>t.children),L(()=>{h=Yt(d,1,"card svelte-11fn1sl",null,h,{hoverable:s(),active:n()}),Be(d,`padding: ${i()??""}`)}),x(c,d)};B(r,c=>{t.onclick?c(o):c(l,!1)})}x(e,a)}De(["click"]);var Bg=A("<span></span>"),qg=A('<span class="card-email svelte-79mfb6"> </span>'),Vg=A('<span class="pulse-badge svelte-79mfb6"></span>'),Hg=A("<!> ",1),Wg=A('<span class="last-updated svelte-79mfb6"> </span>'),Ug=A('<div class="quota-bar-row svelte-79mfb6"><span class="quota-bar-label svelte-79mfb6">5h</span> <div class="quota-bar-track svelte-79mfb6"><div class="quota-bar-fill svelte-79mfb6"></div></div> <span class="quota-bar-value svelte-79mfb6"> </span> <span class="quota-bar-extra svelte-79mfb6"><!> <!> <!></span></div> <div class="quota-bar-row svelte-79mfb6"><span class="quota-bar-label svelte-79mfb6">7j</span> <div class="quota-bar-track svelte-79mfb6"><div class="quota-bar-fill svelte-79mfb6"></div></div> <span class="quota-bar-value svelte-79mfb6"> </span> <span class="quota-bar-extra svelte-79mfb6"> <!></span></div> <!>',1),Yg=A('<button class="action-btn switch-btn svelte-79mfb6" aria-label="Activer ce compte" title="Activer ce compte"><!></button>'),Kg=A(`<div class="card-layout svelte-79mfb6"><div class="card-left svelte-79mfb6"><!></div> <div class="card-center svelte-79mfb6"><div class="card-header svelte-79mfb6"><div class="card-name-row svelte-79mfb6"><!> <span class="card-name svelte-79mfb6"> </span></div> <!></div> <div class="card-badges svelte-79mfb6"><!> <!> <!> <!> <!></div> <!></div> <div class="card-actions svelte-79mfb6"><!> <button class="action-btn svelte-79mfb6" aria-label="Rafraichir"><!></button> <button class="action-btn svelte-79mfb6" aria-label="Plus d'options"><!></button></div></div>`),Xg=A("<!> <span>Inclure dans l'auto-switch</span>",1),Gg=A("<!> <span>Exclure de l'auto-switch</span>",1),Jg=A('<button class="context-item svelte-79mfb6"><!> <span> </span></button>'),Qg=A('<div class="context-priority svelte-79mfb6"><!> <input class="priority-input svelte-79mfb6" type="number" min="1" max="99"/> <button class="priority-ok svelte-79mfb6">OK</button></div>'),Zg=A('<button class="context-item svelte-79mfb6"><!> <span>Rafraichir le token</span></button> <button class="context-item svelte-79mfb6"><!> <span>Setup Token</span></button>',1),tm=A('<button class="context-item danger svelte-79mfb6"><!> <span>Revoquer</span></button>'),em=A('<div class="context-menu svelte-79mfb6"><button class="context-item svelte-79mfb6"><!> <span> </span></button> <div class="context-divider svelte-79mfb6"></div> <button class="context-item svelte-79mfb6"><!></button> <!> <div class="context-divider svelte-79mfb6"></div> <button class="context-item svelte-79mfb6"><!> <span>Rafraichir le quota</span></button> <!> <div class="context-divider svelte-79mfb6"></div> <!> <button class="context-item danger svelte-79mfb6"><!> <span>Supprimer</span></button></div>'),sm=A('<div class="account-card-wrapper svelte-79mfb6"><!></div> <!>',1);function nm(e,t){ke(t,!0);let s=j(!1),n=j($e({x:0,y:0})),i=j(!1),a=j(50);const r={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"},o={Cruise:"var(--phase-cruise)",Watch:"var(--phase-watch)",Alert:"var(--phase-alert)",Critical:"var(--phase-critical)"};let l=W(()=>t.account.quota&&t.account.quota.limit5h>0?t.account.quota.tokens5h/t.account.quota.limit5h:0),c=W(()=>t.account.quota&&t.account.quota.limit7d>0?t.account.quota.tokens7d/t.account.quota.limit7d:0),d=W(()=>r[t.account.data.provider??"anthropic"]??"var(--fg-dim)"),h=W(()=>o[t.account.quota?.phase??"Cruise"]??"var(--phase-cruise)"),f=W(()=>t.account.quota?.phase==="Alert"||t.account.quota?.phase==="Critical"),v=W(()=>t.account.data.displayName||t.account.data.name||t.account.key),g=W(()=>t.account.data.autoSwitchDisabled===!0),m=W(()=>t.account.data.accountType==="api");function b(F){return F>=1e6?(F/1e6).toFixed(1)+"M":F>=1e3?(F/1e3).toFixed(0)+"k":String(F)}function y(F){if(F==null||F<=0)return"";if(F<60)return`~${Math.round(F)}m`;const O=Math.floor(F/60),H=Math.round(F%60);return`~${O}h${H>0?H+"m":""}`}function S(F){if(!F)return"";const O=new Date(F).getTime(),H=Date.now(),tt=O-H;if(tt<=0)return"reset";const kt=Math.floor(tt/6e4);if(kt<60)return`${kt}m`;const q=Math.floor(kt/60),et=kt%60;return`${q}h${et>0?et.toString().padStart(2,"0")+"m":""}`}let k=W(()=>y(t.account.quota?.timeToThreshold)),$=W(()=>t.account.quota?.emaVelocity&&t.account.quota.emaVelocity>.001?`${t.account.quota.emaVelocity.toFixed(2)}%/min`:""),w=W(()=>S(t.account.quota?.resetsAt5h)),P=W(()=>S(t.account.quota?.resetsAt7d));function z(F){F.preventDefault();const O=220,H=320,tt=Math.min(F.clientX,window.innerWidth-O-8),kt=Math.min(F.clientY,window.innerHeight-H-8);M(n,{x:Math.max(4,tt),y:Math.max(4,kt)},!0),M(s,!0),M(i,!1)}function C(){M(s,!1),M(i,!1)}async function T(){C(),await We.switch(t.account.key)}async function E(){C(),await We.refresh(t.account.key)}async function R(){C(),await We.delete(t.account.key)}async function N(){C(),await We.updateAccount(t.account.key,{autoSwitchDisabled:!u(g)})}function Z(){M(a,t.account.data.priority??50,!0),M(i,!0)}async function K(){await We.updateAccount(t.account.key,{priority:u(a)}),C()}async function V(){C(),await We.refresh(t.account.key)}var X=sm();js("click",qa,C);var J=I(X),xt=p(J);he(xt,{get active(){return t.account.isActive},children:(F,O)=>{var H=Kg(),tt=p(H),kt=p(tt);{let st=W(()=>t.account.quota?.phase);Ig(kt,{get percent(){return u(l)},get phase(){return u(st)},size:44,strokeWidth:3.5})}var q=_(tt,2),et=p(q),Mt=p(et),ee=p(Mt);{var de=st=>{var lt=Bg();let wt;L(()=>wt=Yt(lt,1,"active-dot svelte-79mfb6",null,wt,{pulse:u(f)})),x(st,lt)};B(ee,st=>{t.account.isActive&&st(de)})}var U=_(ee,2),jt=p(U),Vt=_(Mt,2);{var Zt=st=>{var lt=qg(),wt=p(lt);L(()=>D(wt,t.account.data.email)),x(st,lt)};B(Vt,st=>{t.account.data.email&&st(Zt)})}var zt=_(et,2),Nt=p(zt);Ue(Nt,{get color(){return u(d)},children:(st,lt)=>{var wt=Ht();L(()=>D(wt,t.account.data.provider??"anthropic")),x(st,wt)},$$slots:{default:!0}});var fe=_(Nt,2);{var ue=st=>{Ue(st,{get color(){return u(h)},children:(lt,wt)=>{var Qt=Hg(),Y=I(Qt);{var Lt=bt=>{var Rt=Vg();x(bt,Rt)};B(Y,bt=>{u(f)&&bt(Lt)})}var dt=_(Y);L(()=>D(dt,` ${t.account.quota.phase??""}`)),x(lt,Qt)},$$slots:{default:!0}})};B(fe,st=>{t.account.quota?.phase&&st(ue)})}var ft=_(fe,2);{var At=st=>{Ue(st,{color:"var(--fg-dim)",small:!0,children:(lt,wt)=>{var Qt=Ht();L(()=>D(Qt,`P${t.account.data.priority??""}`)),x(lt,Qt)},$$slots:{default:!0}})};B(ft,st=>{t.account.data.priority!=null&&st(At)})}var $t=_(ft,2);{var G=st=>{Ue(st,{color:"var(--accent)",small:!0,children:(lt,wt)=>{var Qt=Ht();L(()=>D(Qt,t.account.data.planType)),x(lt,Qt)},$$slots:{default:!0}})};B($t,st=>{t.account.data.planType&&st(G)})}var vt=_($t,2);{var _t=st=>{Ue(st,{color:"var(--status-error)",small:!0,children:(lt,wt)=>{var Qt=Ht("exclu");x(lt,Qt)},$$slots:{default:!0}})};B(vt,st=>{u(g)&&st(_t)})}var St=_(zt,2);{var Ft=st=>{var lt=Ug(),wt=I(lt),Qt=_(p(wt),2),Y=p(Qt),Lt=_(Qt,2),dt=p(Lt),bt=_(Lt,2),Rt=p(bt);{var Q=Bt=>{var ve=Ht();L(()=>D(ve,`Reset: ${u(w)??""}`)),x(Bt,ve)};B(Rt,Bt=>{u(w)&&Bt(Q)})}var pt=_(Rt,2);{var at=Bt=>{var ve=Ht();L(()=>D(ve,`· ↗ ${u($)??""}`)),x(Bt,ve)};B(pt,Bt=>{u($)&&Bt(at)})}var Ct=_(pt,2);{var rt=Bt=>{var ve=Ht();L(()=>D(ve,`· TTT ${u(k)??""}`)),x(Bt,ve)};B(Ct,Bt=>{u(k)&&Bt(rt)})}var Tt=_(wt,2),Xt=_(p(Tt),2),Wt=p(Xt),se=_(Xt,2),Et=p(se),ct=_(se,2),It=p(ct),re=_(It);{var Pe=Bt=>{var ve=Ht();L(()=>D(ve,`· Reset: ${u(P)??""}`)),x(Bt,ve)};B(re,Bt=>{u(P)&&Bt(Pe)})}var Xe=_(Tt,2);{var Ze=Bt=>{var ve=Wg(),le=p(ve);L(Ne=>D(le,`MAJ ${Ne??""}`),[()=>new Date(t.account.quota.lastUpdated).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})]),x(Bt,ve)};B(Xe,Bt=>{t.account.quota.lastUpdated&&Bt(Ze)})}L((Bt,ve,le,Ne,rs,Fe)=>{Be(Y,`width: ${Bt??""}%; background: ${u(h)??""}`),D(dt,`${ve??""}%`),Be(Wt,`width: ${le??""}%; background: ${u(h)??""}`),D(Et,`${Ne??""}%`),D(It,`${rs??""}/${Fe??""} `)},[()=>Math.min(u(l),1)*100,()=>Math.round(u(l)*100),()=>Math.min(u(c),1)*100,()=>Math.round(u(c)*100),()=>b(t.account.quota.tokens7d??0),()=>b(t.account.quota.limit7d??0)]),x(st,lt)};B(St,st=>{t.account.quota&&st(Ft)})}var Kt=_(q,2),oe=p(Kt);{var ye=st=>{var lt=Yg(),wt=p(lt);Wa(wt,{size:14}),nt("click",lt,T),x(st,lt)};B(oe,st=>{t.account.isActive||st(ye)})}var me=_(oe,2),Jt=p(me);bs(Jt,{size:14});var Gt=_(me,2),Ot=p(Gt);Vv(Ot,{size:14}),L(()=>D(jt,u(v))),nt("click",me,E),nt("click",Gt,st=>{st.stopPropagation(),z(st)}),x(F,H)},$$slots:{default:!0}});var yt=_(J,2);{var Pt=F=>{var O=em(),H=p(O),tt=p(H);Wa(tt,{size:14});var kt=_(tt,2),q=p(kt),et=_(H,4),Mt=p(et);{var ee=G=>{var vt=Xg(),_t=I(vt);so(_t,{size:14}),x(G,vt)},de=G=>{var vt=Gg(),_t=I(vt);op(_t,{size:14}),x(G,vt)};B(Mt,G=>{u(g)?G(ee):G(de,!1)})}var U=_(et,2);{var jt=G=>{var vt=Jg(),_t=p(vt);Al(_t,{size:14});var St=_(_t,2),Ft=p(St);L(()=>D(Ft,`Priorite (${t.account.data.priority??50??""})`)),nt("click",vt,Z),x(G,vt)},Vt=G=>{var vt=Qg(),_t=p(vt);Al(_t,{size:14});var St=_(_t,2),Ft=_(St,2);nt("keydown",St,Kt=>{Kt.key==="Enter"&&K()}),Te(St,()=>u(a),Kt=>M(a,Kt)),nt("click",Ft,K),x(G,vt)};B(U,G=>{u(i)?G(Vt,!1):G(jt)})}var Zt=_(U,4),zt=p(Zt);bs(zt,{size:14});var Nt=_(Zt,2);{var fe=G=>{var vt=Zg(),_t=I(vt),St=p(_t);Oo(St,{size:14});var Ft=_(_t,2),Kt=p(Ft);Gv(Kt,{size:14}),nt("click",_t,V),nt("click",Ft,C),x(G,vt)};B(Nt,G=>{u(m)||G(fe)})}var ue=_(Nt,4);{var ft=G=>{var vt=tm(),_t=p(vt);Ev(_t,{size:14}),nt("click",vt,C),x(G,vt)};B(ue,G=>{u(m)||G(ft)})}var At=_(ue,2),$t=p(At);si($t,{size:14}),L(()=>{Be(O,`left: ${u(n).x??""}px; top: ${u(n).y??""}px`),D(q,`Activer ${t.account.data.email??t.account.key??""}`)}),nt("click",O,G=>G.stopPropagation()),nt("keydown",O,()=>{}),nt("click",H,T),nt("click",et,N),nt("click",Zt,E),nt("click",At,R),x(F,O)};B(yt,F=>{u(s)&&F(Pt)})}nt("contextmenu",J,z),nt("dblclick",J,T),x(e,X),we()}De(["contextmenu","dblclick","click","keydown"]);var im=A('<div class="empty-state svelte-1ctznzk"><p class="empty-title svelte-1ctznzk">Aucun compte configure</p> <p class="empty-desc svelte-1ctznzk">Ajoutez un compte pour commencer</p></div>'),am=A('<div class="account-grid svelte-1ctznzk"><!> <!></div>');function rm(e,t){ke(t,!0);let s=W(()=>[...t.accounts].sort((o,l)=>{if(o.isActive!==l.isActive)return o.isActive?-1:1;const c=o.data.priority??99,d=l.data.priority??99;return c-d}));var n=am(),i=p(n);ie(i,17,()=>u(s),o=>o.key,(o,l)=>{nm(o,{get account(){return u(l)}})});var a=_(i,2);{var r=o=>{var l=im();x(o,l)};B(a,o=>{u(s).length===0&&o(r)})}x(e,n),we()}var om=A("<button><!></button>");function qt(e,t){let s=be(t,"variant",3,"primary"),n=be(t,"size",3,"md"),i=be(t,"disabled",3,!1);var a=om(),r=p(a);xn(r,()=>t.children),L(()=>{Yt(a,1,`btn btn-${s()??""} btn-${n()??""}`,"svelte-er4ugn"),a.disabled=i()}),nt("click",a,function(...o){t.onclick?.apply(this,o)}),x(e,a)}De(["click"]);var lm=A('<footer class="dialog-actions svelte-53p4nz"><!></footer>'),cm=A('<div class="dialog-backdrop svelte-53p4nz"><div class="dialog-content svelte-53p4nz"><header class="dialog-header svelte-53p4nz"><h2 class="dialog-title svelte-53p4nz"> </h2> <button class="dialog-close svelte-53p4nz" aria-label="Fermer"><!></button></header> <div class="dialog-body svelte-53p4nz"><!></div> <!></div></div>');function ma(e,t){ke(t,!0);let s=be(t,"open",15,!1),n=be(t,"title",3,"");function i(){s(!1),t.onclose?.()}function a(c){c.key==="Escape"&&i()}var r=it(),o=I(r);{var l=c=>{var d=cm(),h=p(d),f=p(h),v=p(f),g=p(v),m=_(v,2),b=p(m);cu(b,{size:18});var y=_(f,2),S=p(y);xn(S,()=>t.children);var k=_(y,2);{var $=w=>{var P=lm(),z=p(P);xn(z,()=>t.actions),x(w,P)};B(k,w=>{t.actions&&w($)})}L(()=>D(g,n())),nt("click",d,i),nt("keydown",d,a),nt("click",h,w=>w.stopPropagation()),nt("keydown",h,()=>{}),nt("click",m,i),x(c,d)};B(o,c=>{s()&&c(l)})}x(e,r),we()}De(["click","keydown"]);var dm=A('<span style="display:flex"><!></span> Rafraîchir',1),um=A("<!> Setup auto",1),hm=A('<span style="display:flex"><!></span> Import auto',1),fm=A("<!> Importer",1),vm=A("<!> Ajouter",1),pm=A('<div class="stat-pill svelte-1ck4pq"><span class="dot dot-watch svelte-1ck4pq"></span> <span> </span></div>'),gm=A('<div class="stat-pill svelte-1ck4pq"><span class="dot dot-alert svelte-1ck4pq"></span> <span> </span></div>'),mm=A('<div class="stat-pill urgent svelte-1ck4pq"><span class="dot dot-critical svelte-1ck4pq"></span> <span> </span></div>'),_m=A('<div class="phase-stats svelte-1ck4pq"><div class="stat-pill svelte-1ck4pq"><span class="dot dot-active svelte-1ck4pq"></span> <span> </span></div> <span class="stat-sep svelte-1ck4pq"></span> <div class="stat-pill svelte-1ck4pq"><span class="dot dot-cruise svelte-1ck4pq"></span> <span> </span></div> <!> <!> <!></div>'),bm=A("<!> Ajouter un compte",1),ym=A('<div class="empty-state svelte-1ck4pq"><div class="empty-icon svelte-1ck4pq"><!></div> <p class="empty-title svelte-1ck4pq">Aucun compte configuré</p> <p class="empty-desc svelte-1ck4pq">Ajoutez votre premier compte Claude pour commencer</p> <!></div>'),xm=A('<div class="add-form svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-key">Identifiant <span class="req svelte-1ck4pq">*</span></label> <input id="add-key" type="text" class="form-input svelte-1ck4pq" placeholder="ex: alice@example.com" autocomplete="off"/></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-token">Access Token <span class="req svelte-1ck4pq">*</span></label> <input id="add-token" type="password" class="form-input svelte-1ck4pq" placeholder="token OAuth..." autocomplete="new-password"/></div> <div class="form-row svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-name">Nom</label> <input id="add-name" type="text" class="form-input svelte-1ck4pq" placeholder="Alice"/></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-email">Email</label> <input id="add-email" type="email" class="form-input svelte-1ck4pq" placeholder="alice@example.com"/></div></div> <div class="form-row svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-provider">Provider</label> <select id="add-provider" class="form-input form-select svelte-1ck4pq"><option>Anthropic</option><option>Gemini</option><option>OpenAI</option><option>xAI</option><option>DeepSeek</option><option>Mistral</option><option>Groq</option></select></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-priority">Priorité</label> <input id="add-priority" type="number" class="form-input svelte-1ck4pq" min="0" max="99"/></div></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-plan">Plan</label> <input id="add-plan" type="text" class="form-input svelte-1ck4pq" placeholder="pro, team, free..."/></div></div>'),km=A("<!> <!>",1),wm=A(`<div class="add-form svelte-1ck4pq"><p style="font-size: 12px; color: var(--fg-secondary);">Collez un access token OAuth capturé depuis Claude Code pour l'importer comme nouveau compte.</p> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="import-token">Access Token <span class="req svelte-1ck4pq">*</span></label> <textarea id="import-token" class="form-input svelte-1ck4pq" rows="3" placeholder="Collez le token ici..." style="resize:vertical;font-family:monospace;font-size:12px"></textarea></div></div>`),$m=A("<!> <!>",1),Sm=A('<div class="scan-scanning svelte-1ck4pq"><div class="scan-spinner svelte-1ck4pq"></div> <span>Scan des fichiers locaux en cours…</span></div>'),Mm=A('<span class="scan-provider-badge svelte-1ck4pq"> </span>'),Pm=A('<div><input type="checkbox" class="scan-checkbox svelte-1ck4pq"/> <div class="scan-item-info svelte-1ck4pq"><span class="scan-label svelte-1ck4pq"> </span> <span class="scan-source svelte-1ck4pq"> </span> <!></div></div>'),Am=A('<div class="add-form svelte-1ck4pq"><p class="scan-intro svelte-1ck4pq">Tokens Claude détectés sur ce poste. Sélectionnez ceux à importer.</p>  <div class="scan-select-all svelte-1ck4pq"><input type="checkbox" class="svelte-1ck4pq"/> <span> </span></div> <div class="scan-list svelte-1ck4pq"></div></div>'),Cm=A("<!> <!>",1),zm=A('<div class="scan-scanning svelte-1ck4pq" style="padding:16px 0"><div class="scan-spinner svelte-1ck4pq"></div> <span>Recherche de claude dans le PATH…</span></div>'),Tm=A('<div class="setup-check-row ok svelte-1ck4pq"><span class="setup-check-icon svelte-1ck4pq">✓</span> <div><div style="font-size:13px;font-weight:500;color:var(--fg-primary)">claude trouvé</div> <div class="setup-check-path svelte-1ck4pq"> </div></div></div> <p class="setup-install-hint svelte-1ck4pq">Cliquez sur <strong>Continuer</strong> pour exécuter <code style="font-family:monospace;font-size:12px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;padding:1px 5px">claude setup-token</code> et capturer automatiquement votre token OAuth.</p>',1),Em=A('<div class="setup-check-path svelte-1ck4pq" style="color:var(--fg-dim)"> </div>'),Dm=A(`<div class="setup-check-row fail svelte-1ck4pq"><span class="setup-check-icon svelte-1ck4pq">✗</span> <div><div style="font-size:13px;font-weight:500;color:var(--status-error)">claude introuvable</div> <!></div></div> <p class="setup-install-hint svelte-1ck4pq">Claude CLI n'est pas installé ou n'est pas dans le PATH.<br/> Installez-le depuis <a href="https://claude.ai/download" target="_blank" rel="noopener" class="svelte-1ck4pq">claude.ai/download</a> puis relancez cette fenêtre.</p>`,1),Om=A('<p class="setup-step-label svelte-1ck4pq">Etape 1 — Vérification</p> <!>',1),Lm=A('<pre class="setup-output svelte-1ck4pq"> </pre>'),Rm=A('<p class="setup-step-label svelte-1ck4pq">Etape 2 — Capture en cours</p> <div class="setup-capture-body svelte-1ck4pq"><div class="setup-spinner svelte-1ck4pq"></div> <span class="setup-capture-label svelte-1ck4pq">Exécution de <code style="font-family:monospace;font-size:11px">claude setup-token</code>…</span> <span class="setup-capture-sublabel svelte-1ck4pq">Délai max : 60 secondes</span></div> <!>',1),Im=A('<div class="setup-success-email svelte-1ck4pq">Compte ajouté : <strong> </strong></div>'),jm=A('<div class="setup-success-email svelte-1ck4pq">Le compte a été ajouté à la liste.</div>'),Nm=A('<p class="setup-step-label svelte-1ck4pq">Etape 3 — Succès</p> <div class="setup-success-body svelte-1ck4pq"><div class="setup-success-icon svelte-1ck4pq">✅</div> <div class="setup-success-title svelte-1ck4pq">Token capturé !</div> <!></div>',1),Fm=A('<div class="setup-error-msg svelte-1ck4pq"> </div>'),Bm=A('<pre class="setup-output svelte-1ck4pq"> </pre>'),qm=A('<p class="setup-step-label svelte-1ck4pq">Résultat — Fallback manuel</p> <!> <!> <div class="setup-manual-hint svelte-1ck4pq"><strong>Instructions manuelles :</strong><br/> 1. Ouvrez un terminal et lancez <code class="svelte-1ck4pq">claude setup-token</code><br/> 2. Copiez le token affiché<br/> 3. Utilisez le bouton <strong>Importer</strong> pour coller le token manuellement</div>',1),Vm=A('<div class="setup-body svelte-1ck4pq"><!></div>'),Hm=A("<!> <!>",1),Wm=A("<!> <!> <!>",1),Um=A('<div class="accounts-screen svelte-1ck4pq"><header class="screen-header svelte-1ck4pq"><div class="header-left svelte-1ck4pq"><div class="screen-icon svelte-1ck4pq"><!></div> <div><h1 class="screen-title svelte-1ck4pq">Comptes</h1> <p class="screen-subtitle svelte-1ck4pq"> </p></div></div> <div class="screen-actions svelte-1ck4pq"><!> <!> <!> <!> <!></div></header> <!> <!></div> <!>  <!> <!> <!>',1);function Ym(e,t){ke(t,!0);let s=j($e([])),n=j(!1),i=j(!1),a=j(!1),r=j(""),o=j(""),l=j(""),c=j(""),d=j(""),h=j("anthropic"),f=j(1),v=j(""),g=j(!1),m=j(!1),b=j(!1),y=j(!1),S=j($e([])),k=j($e(new Set)),$=j(!1),w=j("check"),P=j(null),z=j(null),C=j(""),T=j(null),E=j(!1);Ve(()=>We.subscribe(Lt=>{M(s,Lt,!0)}));async function R(){M(n,!0);try{await We.load()}finally{M(n,!1)}}function N(){M(o,""),M(l,""),M(c,""),M(d,""),M(h,"anthropic"),M(f,1),M(v,"")}async function Z(){if(!(!u(o).trim()||!u(l).trim())){M(g,!0);try{await We.add(u(o).trim(),{name:u(c).trim()||u(o).trim(),displayName:u(c).trim()||u(o).trim(),email:u(d).trim()||void 0,provider:u(h),priority:u(f),planType:u(v).trim()||void 0,claudeAiOauth:{accessToken:u(l).trim(),refreshToken:u(l).trim()}}),M(i,!1),N()}finally{M(g,!1)}}}function K(){M(i,!1),N()}function V(Y){return Y.email??Y.accessToken?.slice(0,16)??Y.sourcePath}function X(Y){return Y.email?Y.email:Y.name?Y.name:`token-${Y.accessToken?.slice(0,8)??"???"}…`}async function J(){M(b,!0),M(S,[],!0),M(k,new Set,!0),M(m,!0);try{const Y=await og();M(S,Y,!0),Y.length===0?(M(m,!1),Ln.info("Aucun token local trouvé","Aucun fichier de credentials Claude n'a été détecté.")):M(k,new Set(Y.map(V)),!0)}catch(Y){M(m,!1),Ln.error("Erreur de scan",String(Y))}finally{M(b,!1)}}function xt(){M(m,!1),M(S,[],!0),M(k,new Set,!0)}function yt(Y){const Lt=V(Y),dt=new Set(u(k));dt.has(Lt)?dt.delete(Lt):dt.add(Lt),M(k,dt,!0)}function Pt(){u(k).size===u(S).length?M(k,new Set,!0):M(k,new Set(u(S).map(V)),!0)}async function F(){const Y=u(S).filter(Lt=>u(k).has(V(Lt)));if(Y.length!==0){M(y,!0);try{const Lt=await lg(Y);await We.load(),xt(),Ln.success(`${Lt} compte${Lt>1?"s":""} importé${Lt>1?"s":""}`,"Les tokens locaux ont été ajoutés avec succès.")}catch(Lt){Ln.error("Erreur d'import",String(Lt))}finally{M(y,!1)}}}function O(){M(w,"check"),M(P,null),M(z,null),M(C,""),M(T,null),M(E,!1)}async function H(){O(),M($,!0),M(E,!0);try{const Y=await cg();M(P,Y,!0)}catch(Y){M(P,null),M(z,String(Y),!0)}finally{M(E,!1)}}function tt(){M($,!1),O()}async function kt(){M(w,"capturing"),M(C,""),M(z,null);try{const Y=await dg(60);M(C,Y.output??"",!0),Y.success&&Y.accessToken?(M(T,Y.email??null,!0),M(w,"success"),await We.load()):(M(z,Y.error??"Aucun token capturé.",!0),M(w,"error"))}catch(Y){M(z,String(Y),!0),M(w,"error")}}function q(){tt(),Ln.success("Token capturé",u(T)?`Compte ${u(T)} ajouté.`:"Compte ajouté avec succès.")}let et=W(()=>u(s).filter(Y=>Y.isActive).length),Mt=W(()=>u(s).filter(Y=>!Y.quota||Y.quota.phase==="Cruise").length),ee=W(()=>u(s).filter(Y=>Y.quota?.phase==="Watch").length),de=W(()=>u(s).filter(Y=>Y.quota?.phase==="Alert").length),U=W(()=>u(s).filter(Y=>Y.quota?.phase==="Critical").length),jt=W(()=>u(S).length>0&&u(k).size===u(S).length),Vt=W(()=>u(k).size>0&&u(k).size<u(S).length);var Zt=Um(),zt=I(Zt),Nt=p(zt),fe=p(Nt),ue=p(fe),ft=p(ue);Ya(ft,{size:18});var At=_(ue,2),$t=_(p(At),2),G=p($t),vt=_(fe,2),_t=p(vt);qt(_t,{variant:"ghost",size:"sm",onclick:R,get disabled(){return u(n)},children:(Y,Lt)=>{var dt=dm(),bt=I(dt);let Rt;var Q=p(bt);bs(Q,{size:14}),L(()=>Rt=Yt(bt,1,"",null,Rt,{spin:u(n)})),x(Y,dt)},$$slots:{default:!0}});var St=_(_t,2);qt(St,{variant:"ghost",size:"sm",onclick:H,children:(Y,Lt)=>{var dt=um(),bt=I(dt);qi(bt,{size:14}),x(Y,dt)},$$slots:{default:!0}});var Ft=_(St,2);qt(Ft,{variant:"ghost",size:"sm",onclick:J,get disabled(){return u(b)},children:(Y,Lt)=>{var dt=hm(),bt=I(dt);let Rt;var Q=p(bt);ap(Q,{size:14}),L(()=>Rt=Yt(bt,1,"",null,Rt,{spin:u(b)})),x(Y,dt)},$$slots:{default:!0}});var Kt=_(Ft,2);qt(Kt,{variant:"ghost",size:"sm",onclick:()=>M(a,!0),children:(Y,Lt)=>{var dt=fm(),bt=I(dt);fp(bt,{size:14}),x(Y,dt)},$$slots:{default:!0}});var oe=_(Kt,2);qt(oe,{variant:"primary",size:"sm",onclick:()=>M(i,!0),children:(Y,Lt)=>{var dt=vm(),bt=I(dt);Ki(bt,{size:14}),x(Y,dt)},$$slots:{default:!0}});var ye=_(Nt,2);{var me=Y=>{var Lt=_m(),dt=p(Lt),bt=_(p(dt),2),Rt=p(bt),Q=_(dt,4),pt=_(p(Q),2),at=p(pt),Ct=_(Q,2);{var rt=Et=>{var ct=pm(),It=_(p(ct),2),re=p(It);L(()=>D(re,`${u(ee)??""} Watch`)),x(Et,ct)};B(Ct,Et=>{u(ee)>0&&Et(rt)})}var Tt=_(Ct,2);{var Xt=Et=>{var ct=gm(),It=_(p(ct),2),re=p(It);L(()=>D(re,`${u(de)??""} Alert`)),x(Et,ct)};B(Tt,Et=>{u(de)>0&&Et(Xt)})}var Wt=_(Tt,2);{var se=Et=>{var ct=mm(),It=_(p(ct),2),re=p(It);L(()=>D(re,`${u(U)??""} Critical`)),x(Et,ct)};B(Wt,Et=>{u(U)>0&&Et(se)})}L(()=>{D(Rt,`${u(et)??""} actif${u(et)>1?"s":""}`),D(at,`${u(Mt)??""} Cruise`)}),x(Y,Lt)};B(ye,Y=>{u(s).length>0&&Y(me)})}var Jt=_(ye,2);{var Gt=Y=>{var Lt=ym(),dt=p(Lt),bt=p(dt);Ya(bt,{size:44});var Rt=_(dt,6);qt(Rt,{variant:"primary",size:"md",onclick:()=>M(i,!0),children:(Q,pt)=>{var at=bm(),Ct=I(at);Ki(Ct,{size:14}),x(Q,at)},$$slots:{default:!0}}),x(Y,Lt)},Ot=Y=>{rm(Y,{get accounts(){return u(s)}})};B(Jt,Y=>{u(s).length===0?Y(Gt):Y(Ot,!1)})}var st=_(zt,2);ma(st,{title:"Ajouter un compte",onclose:K,get open(){return u(i)},set open(dt){M(i,dt,!0)},children:dt=>{var bt=xm(),Rt=p(bt),Q=_(p(Rt),2),pt=_(Rt,2),at=_(p(pt),2),Ct=_(pt,2),rt=p(Ct),Tt=_(p(rt),2),Xt=_(rt,2),Wt=_(p(Xt),2),se=_(Ct,2),Et=p(se),ct=_(p(Et),2),It=p(ct);It.value=It.__value="anthropic";var re=_(It);re.value=re.__value="gemini";var Pe=_(re);Pe.value=Pe.__value="openai";var Xe=_(Pe);Xe.value=Xe.__value="xai";var Ze=_(Xe);Ze.value=Ze.__value="deepseek";var Bt=_(Ze);Bt.value=Bt.__value="mistral";var ve=_(Bt);ve.value=ve.__value="groq";var le=_(Et,2),Ne=_(p(le),2),rs=_(se,2),Fe=_(p(rs),2);Te(Q,()=>u(o),Oe=>M(o,Oe)),Te(at,()=>u(l),Oe=>M(l,Oe)),Te(Tt,()=>u(c),Oe=>M(c,Oe)),Te(Wt,()=>u(d),Oe=>M(d,Oe)),vi(ct,()=>u(h),Oe=>M(h,Oe)),Te(Ne,()=>u(f),Oe=>M(f,Oe)),Te(Fe,()=>u(v),Oe=>M(v,Oe)),x(dt,bt)},actions:dt=>{var bt=km(),Rt=I(bt);qt(Rt,{variant:"ghost",size:"sm",onclick:K,children:(pt,at)=>{var Ct=Ht("Annuler");x(pt,Ct)},$$slots:{default:!0}});var Q=_(Rt,2);{let pt=W(()=>u(g)||!u(o).trim()||!u(l).trim());qt(Q,{variant:"primary",size:"sm",onclick:Z,get disabled(){return u(pt)},children:(at,Ct)=>{var rt=Ht();L(()=>D(rt,u(g)?"Ajout...":"Ajouter")),x(at,rt)},$$slots:{default:!0}})}x(dt,bt)},$$slots:{default:!0,actions:!0}});var lt=_(st,2);ma(lt,{title:"Importer un token",onclose:()=>{M(a,!1),M(r,"")},get open(){return u(a)},set open(dt){M(a,dt,!0)},children:dt=>{var bt=wm(),Rt=_(p(bt),2),Q=_(p(Rt),2);Te(Q,()=>u(r),pt=>M(r,pt)),x(dt,bt)},actions:dt=>{var bt=$m(),Rt=I(bt);qt(Rt,{variant:"ghost",size:"sm",onclick:()=>{M(a,!1),M(r,"")},children:(pt,at)=>{var Ct=Ht("Annuler");x(pt,Ct)},$$slots:{default:!0}});var Q=_(Rt,2);{let pt=W(()=>!u(r).trim());qt(Q,{variant:"primary",size:"sm",get disabled(){return u(pt)},onclick:async()=>{const at=`imported-${Date.now()}`;await We.add(at,{name:at,claudeAiOauth:{accessToken:u(r).trim(),refreshToken:u(r).trim()}}),M(a,!1),M(r,"")},children:(at,Ct)=>{var rt=Ht("Importer");x(at,rt)},$$slots:{default:!0}})}x(dt,bt)},$$slots:{default:!0,actions:!0}});var wt=_(lt,2);ma(wt,{title:"Import automatique",onclose:xt,get open(){return u(m)},set open(dt){M(m,dt,!0)},children:dt=>{var bt=it(),Rt=I(bt);{var Q=at=>{var Ct=Sm();x(at,Ct)},pt=at=>{var Ct=Am(),rt=_(p(Ct),2),Tt=p(rt),Xt=_(Tt,2),Wt=p(Xt),se=_(rt,2);ie(se,21,()=>u(S),Et=>V(Et),(Et,ct)=>{var It=Pm();let re;var Pe=p(It),Xe=_(Pe,2),Ze=p(Xe),Bt=p(Ze),ve=_(Ze,2),le=p(ve),Ne=_(ve,2);{var rs=Fe=>{var Oe=Mm(),ts=p(Oe);L(()=>D(ts,u(ct).provider)),x(Fe,Oe)};B(Ne,Fe=>{u(ct).provider&&Fe(rs)})}L((Fe,Oe,ts)=>{re=Yt(It,1,"scan-item svelte-1ck4pq",null,re,Fe),bl(Pe,Oe),D(Bt,ts),D(le,u(ct).sourcePath)},[()=>({selected:u(k).has(V(u(ct)))}),()=>u(k).has(V(u(ct))),()=>X(u(ct))]),nt("click",It,()=>yt(u(ct))),nt("click",Pe,Fe=>Fe.stopPropagation()),nt("change",Pe,()=>yt(u(ct))),x(Et,It)}),L(()=>{bl(Tt,u(jt)),Tt.indeterminate=u(Vt),D(Wt,`${u(jt)?"Tout désélectionner":"Tout sélectionner"}
             · 
            ${u(k).size??""}/${u(S).length??""} sélectionné${u(k).size>1?"s":""}`)}),nt("click",rt,Pt),nt("click",Tt,Et=>Et.stopPropagation()),nt("change",Tt,Pt),x(at,Ct)};B(Rt,at=>{u(b)?at(Q):at(pt,!1)})}x(dt,bt)},actions:dt=>{var bt=Cm(),Rt=I(bt);qt(Rt,{variant:"ghost",size:"sm",onclick:xt,get disabled(){return u(y)},children:(pt,at)=>{var Ct=Ht("Annuler");x(pt,Ct)},$$slots:{default:!0}});var Q=_(Rt,2);{let pt=W(()=>u(y)||u(b)||u(k).size===0);qt(Q,{variant:"primary",size:"sm",get disabled(){return u(pt)},onclick:F,children:(at,Ct)=>{var rt=Ht();L(()=>D(rt,u(y)?"Import…":`Importer ${u(k).size>0?u(k).size:""} sélection${u(k).size>1?"s":""}`)),x(at,rt)},$$slots:{default:!0}})}x(dt,bt)},$$slots:{default:!0,actions:!0}});var Qt=_(wt,2);ma(Qt,{title:"Setup automatique",onclose:tt,get open(){return u($)},set open(dt){M($,dt,!0)},children:dt=>{var bt=Vm(),Rt=p(bt);{var Q=rt=>{var Tt=Om(),Xt=_(I(Tt),2);{var Wt=ct=>{var It=zm();x(ct,It)},se=ct=>{var It=Tm(),re=I(It),Pe=_(p(re),2),Xe=_(p(Pe),2),Ze=p(Xe);L(()=>D(Ze,u(P))),x(ct,It)},Et=ct=>{var It=Dm(),re=I(It),Pe=_(p(re),2),Xe=_(p(Pe),2);{var Ze=Bt=>{var ve=Em(),le=p(ve);L(()=>D(le,u(z))),x(Bt,ve)};B(Xe,Bt=>{u(z)&&Bt(Ze)})}x(ct,It)};B(Xt,ct=>{u(E)?ct(Wt):u(P)?ct(se,1):ct(Et,!1)})}x(rt,Tt)},pt=rt=>{var Tt=Rm(),Xt=_(I(Tt),4);{var Wt=se=>{var Et=Lm(),ct=p(Et);L(()=>D(ct,u(C))),x(se,Et)};B(Xt,se=>{u(C)&&se(Wt)})}x(rt,Tt)},at=rt=>{var Tt=Nm(),Xt=_(I(Tt),2),Wt=_(p(Xt),4);{var se=ct=>{var It=Im(),re=_(p(It)),Pe=p(re);L(()=>D(Pe,u(T))),x(ct,It)},Et=ct=>{var It=jm();x(ct,It)};B(Wt,ct=>{u(T)?ct(se):ct(Et,!1)})}x(rt,Tt)},Ct=rt=>{var Tt=qm(),Xt=_(I(Tt),2);{var Wt=ct=>{var It=Fm(),re=p(It);L(()=>D(re,u(z))),x(ct,It)};B(Xt,ct=>{u(z)&&ct(Wt)})}var se=_(Xt,2);{var Et=ct=>{var It=Bm(),re=p(It);L(()=>D(re,u(C))),x(ct,It)};B(se,ct=>{u(C)&&ct(Et)})}x(rt,Tt)};B(Rt,rt=>{u(w)==="check"?rt(Q):u(w)==="capturing"?rt(pt,1):u(w)==="success"?rt(at,2):u(w)==="error"&&rt(Ct,3)})}x(dt,bt)},actions:dt=>{var bt=it(),Rt=I(bt);{var Q=rt=>{var Tt=Hm(),Xt=I(Tt);qt(Xt,{variant:"ghost",size:"sm",onclick:tt,children:(ct,It)=>{var re=Ht("Annuler");x(ct,re)},$$slots:{default:!0}});var Wt=_(Xt,2);{var se=ct=>{qt(ct,{variant:"primary",size:"sm",onclick:kt,children:(It,re)=>{var Pe=Ht("Continuer");x(It,Pe)},$$slots:{default:!0}})},Et=ct=>{qt(ct,{variant:"ghost",size:"sm",onclick:H,children:(It,re)=>{var Pe=Ht("Réessayer");x(It,Pe)},$$slots:{default:!0}})};B(Wt,ct=>{!u(E)&&u(P)?ct(se):!u(E)&&!u(P)&&ct(Et,1)})}x(rt,Tt)},pt=rt=>{qt(rt,{variant:"ghost",size:"sm",disabled:!0,children:(Tt,Xt)=>{var Wt=Ht("En cours…");x(Tt,Wt)},$$slots:{default:!0}})},at=rt=>{qt(rt,{variant:"primary",size:"sm",onclick:q,children:(Tt,Xt)=>{var Wt=Ht("Fermer");x(Tt,Wt)},$$slots:{default:!0}})},Ct=rt=>{var Tt=Wm(),Xt=I(Tt);qt(Xt,{variant:"ghost",size:"sm",onclick:tt,children:(Et,ct)=>{var It=Ht("Fermer");x(Et,It)},$$slots:{default:!0}});var Wt=_(Xt,2);qt(Wt,{variant:"ghost",size:"sm",onclick:O,children:(Et,ct)=>{var It=Ht("Réessayer");x(Et,It)},$$slots:{default:!0}});var se=_(Wt,2);qt(se,{variant:"primary",size:"sm",onclick:()=>{tt(),M(a,!0)},children:(Et,ct)=>{var It=Ht("Importer manuellement");x(Et,It)},$$slots:{default:!0}}),x(rt,Tt)};B(Rt,rt=>{u(w)==="check"?rt(Q):u(w)==="capturing"?rt(pt,1):u(w)==="success"?rt(at,2):u(w)==="error"&&rt(Ct,3)})}x(dt,bt)},$$slots:{default:!0,actions:!0}}),L(()=>D(G,`${u(s).length??""} compte${u(s).length!==1?"s":""} configuré${u(s).length!==1?"s":""}`)),x(e,Zt),we()}De(["click","change"]);var Km=A("<option> </option>"),Xm=A('<div class="edit-form svelte-ytkoha"><div class="edit-row svelte-ytkoha"><input class="edit-input svelte-ytkoha" type="text" placeholder="Nom"/> <input class="edit-input port-input svelte-ytkoha" type="number" min="1024" max="65535"/></div> <div class="edit-row svelte-ytkoha"><select class="edit-input svelte-ytkoha"><option>Integre</option><!></select> <!> <!></div></div>'),Gm=A('<div class="instance-info svelte-ytkoha"><h3 class="instance-name svelte-ytkoha"> </h3> <span class="instance-port svelte-ytkoha"> </span></div> <!>',1),Jm=A("<!> ",1),Qm=A("<!> Redemarrer",1),Zm=A('<div class="instance-card svelte-ytkoha"><div class="instance-header svelte-ytkoha"><span class="instance-icon svelte-ytkoha"><!></span> <!></div> <div class="instance-stats svelte-ytkoha"><div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Moteur</span> <span class="stat-value engine-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Uptime</span> <span class="stat-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Requetes</span> <span class="stat-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Actives</span> <span class="stat-value svelte-ytkoha"> </span></div></div> <div class="setup-row svelte-ytkoha"><span class="setup-label svelte-ytkoha">Setup:</span> <button title="Injecter ANTHROPIC_BASE_URL dans Claude Code"><!> CC</button> <button title="Injecter http.proxy dans VS Code"><!> VSCode</button></div> <div class="instance-actions svelte-ytkoha"><!> <!> <div class="actions-spacer svelte-ytkoha"></div> <!> <!></div></div>');function t_(e,t){ke(t,!0);let s=be(t,"detectedBinaries",19,()=>[]),n=j(!1),i=j(!1),a=j(""),r=j(0),o=j(""),l=W(()=>t.instance.config.kind==="router"),c=W(()=>t.instance.config.kind==="impersonator"),d=W(()=>()=>{if(t.instance.status.backend){const P=t.instance.status.backend;return P==="python"?"V2 (Python)":P==="rust-auto"?"V3 (Rust)":P==="unknown"?"Externe":`Externe (${P})`}if(!t.instance.config.binaryPath)return"Integre";const $=s().find(P=>P.path===t.instance.config.binaryPath);if($)return $.name;const w=t.instance.config.binaryPath.replace(/\\/g,"/").split("/");return w[w.length-1]||"Externe"});function h($){if($==null||isNaN($)||$<=0)return"--";if($<60)return`${$}s`;if($<3600)return`${Math.floor($/60)}m ${$%60}s`;const w=Math.floor($/3600),P=Math.floor($%3600/60);return`${w}h ${P}m`}async function f(){M(n,!0);try{t.instance.status.running?await vs.stop(t.instance.config.id):await vs.start(t.instance.config.id)}finally{M(n,!1)}}async function v(){M(n,!0);try{await vs.restart(t.instance.config.id)}finally{M(n,!1)}}async function g(){t.instance.status.running&&await vs.stop(t.instance.config.id),await vs.remove(t.instance.config.id)}function m(){M(a,t.instance.config.name,!0),M(r,t.instance.config.port,!0),M(o,t.instance.config.binaryPath||"",!0),M(i,!0)}async function b(){await vs.update(t.instance.config.id,{name:u(a),port:u(r),binaryPath:u(o)||void 0}),M(i,!1)}function y(){M(i,!1)}async function S(){t.instance.config.setupTargets.includes("claude-code")?(await Vp(),await vs.update(t.instance.config.id,{setupTargets:t.instance.config.setupTargets.filter(w=>w!=="claude-code")})):(await qp(t.instance.config.port),await vs.update(t.instance.config.id,{setupTargets:[...t.instance.config.setupTargets,"claude-code"]}))}async function k(){t.instance.config.setupTargets.includes("vscode")?(await Wp(),await vs.update(t.instance.config.id,{setupTargets:t.instance.config.setupTargets.filter(w=>w!=="vscode")})):(await Hp(t.instance.config.port),await vs.update(t.instance.config.id,{setupTargets:[...t.instance.config.setupTargets,"vscode"]}))}he(e,{children:($,w)=>{var P=Zm(),z=p(P),C=p(z),T=p(C);{var E=G=>{ru(G,{size:20})},R=G=>{qi(G,{size:20})},N=G=>{Lo(G,{size:20})};B(T,G=>{u(l)?G(E):u(c)?G(R,1):G(N,!1)})}var Z=_(C,2);{var K=G=>{var vt=Xm(),_t=p(vt),St=p(_t),Ft=_(St,2),Kt=_(_t,2),oe=p(Kt),ye=p(oe);ye.value=ye.__value="";var me=_(ye);ie(me,17,s,Le,(Ot,st)=>{var lt=Km(),wt=p(lt),Qt={};L(()=>{D(wt,u(st).name),Qt!==(Qt=u(st).path)&&(lt.value=(lt.__value=u(st).path)??"")}),x(Ot,lt)});var Jt=_(oe,2);qt(Jt,{size:"sm",variant:"primary",onclick:b,children:(Ot,st)=>{var lt=Ht("OK");x(Ot,lt)},$$slots:{default:!0}});var Gt=_(Jt,2);qt(Gt,{size:"sm",variant:"ghost",onclick:y,children:(Ot,st)=>{var lt=Ht("X");x(Ot,lt)},$$slots:{default:!0}}),Te(St,()=>u(a),Ot=>M(a,Ot)),Te(Ft,()=>u(r),Ot=>M(r,Ot)),vi(oe,()=>u(o),Ot=>M(o,Ot)),x(G,vt)},V=G=>{var vt=Gm(),_t=I(vt),St=p(_t),Ft=p(St),Kt=_(St,2),oe=p(Kt),ye=_(_t,2);{let me=W(()=>t.instance.status.running?"var(--status-running)":"var(--status-stopped)");Ue(ye,{get color(){return u(me)},children:(Jt,Gt)=>{var Ot=Ht();L(()=>D(Ot,t.instance.status.running?"Actif":"Arrete")),x(Jt,Ot)},$$slots:{default:!0}})}L(()=>{D(Ft,t.instance.config.name),D(oe,`:${t.instance.config.port??""}`)}),x(G,vt)};B(Z,G=>{u(i)?G(K):G(V,!1)})}var X=_(z,2),J=p(X),xt=_(p(J),2),yt=p(xt),Pt=_(J,2),F=_(p(Pt),2),O=p(F),H=_(Pt,2),tt=_(p(H),2),kt=p(tt),q=_(H,2),et=_(p(q),2),Mt=p(et),ee=_(X,2),de=_(p(ee),2);let U;var jt=p(de);lu(jt,{size:12});var Vt=_(de,2);let Zt;var zt=p(Vt);Nv(zt,{size:12});var Nt=_(ee,2),fe=p(Nt);{let G=W(()=>t.instance.status.running?"secondary":"primary");qt(fe,{get variant(){return u(G)},size:"sm",onclick:f,get disabled(){return u(n)},children:(vt,_t)=>{var St=Jm(),Ft=I(St);sp(Ft,{size:14});var Kt=_(Ft);L(()=>D(Kt,` ${t.instance.status.running?"Arreter":"Demarrer"}`)),x(vt,St)},$$slots:{default:!0}})}var ue=_(fe,2);{var ft=G=>{qt(G,{variant:"ghost",size:"sm",onclick:v,get disabled(){return u(n)},children:(vt,_t)=>{var St=Qm(),Ft=I(St);Oo(Ft,{size:14}),x(vt,St)},$$slots:{default:!0}})};B(ue,G=>{t.instance.status.running&&G(ft)})}var At=_(ue,4);qt(At,{variant:"ghost",size:"sm",onclick:m,children:(G,vt)=>{ep(G,{size:14})},$$slots:{default:!0}});var $t=_(At,2);qt($t,{variant:"ghost",size:"sm",onclick:g,children:(G,vt)=>{si(G,{size:14})},$$slots:{default:!0}}),L((G,vt,_t,St)=>{D(yt,G),D(O,vt),D(kt,t.instance.status.requestsTotal??0),D(Mt,t.instance.status.requestsActive??0),U=Yt(de,1,"setup-btn svelte-ytkoha",null,U,_t),Zt=Yt(Vt,1,"setup-btn svelte-ytkoha",null,Zt,St)},[()=>u(d)(),()=>t.instance.status.running?h(t.instance.status.uptimeSecs):"--",()=>({active:t.instance.config.setupTargets.includes("claude-code")}),()=>({active:t.instance.config.setupTargets.includes("vscode")})]),nt("click",de,S),nt("click",Vt,k),x($,P)},$$slots:{default:!0}}),we()}De(["click"]);var e_=A("<option> </option>"),s_=A('<div class="add-form svelte-1m3ss3c"><h3 class="add-title svelte-1m3ss3c">Nouveau proxy</h3> <div class="add-fields-top svelte-1m3ss3c"><div class="field field-grow svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-binary">Moteur</label> <select id="proxy-binary" class="field-input svelte-1m3ss3c"><option>Integre (V3)</option><!></select></div></div> <div class="add-fields svelte-1m3ss3c"><div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-name">Nom</label> <input id="proxy-name" class="field-input svelte-1m3ss3c" type="text" placeholder="Mon Proxy"/></div> <div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-port">Port</label> <input id="proxy-port" class="field-input port-input svelte-1m3ss3c" type="number" min="1024" max="65535"/></div> <div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-kind">Type</label> <select id="proxy-kind" class="field-input svelte-1m3ss3c"><option>Router</option><option>Anthrouter</option><option>Custom</option></select></div></div> <div class="add-actions svelte-1m3ss3c"><!> <!></div></div>'),n_=A('<button class="add-button svelte-1m3ss3c"><!> Ajouter un proxy</button>'),i_=A('<div class="proxy-control svelte-1m3ss3c"><div class="instances-grid svelte-1m3ss3c"></div> <!></div>');function a_(e,t){ke(t,!0);let s=j($e([])),n=j($e([])),i=j(!1),a=j(""),r=j(8082),o=j("router"),l=j("");Ve(()=>(vs.probe(),Fp().then($=>{M(n,$,!0)}),vs.subscribe($=>{M(s,$,!0)})));function c(){M(a,""),M(r,8082),M(o,"router"),M(l,""),M(i,!0)}function d(k){const $=k.target.value;if(M(l,$,!0),$){const w=u(n).find(P=>P.path===$);w&&(M(r,w.defaultPort,!0),u(a).trim()||M(a,w.name,!0),w.id.includes("router")?M(o,"router"):w.id.includes("impersonator")?M(o,"impersonator"):M(o,"custom"))}}async function h(){if(!u(a).trim())return;const $={id:u(a).toLowerCase().replace(/[^a-z0-9]/g,"-")+"-"+Date.now().toString(36),name:u(a).trim(),kind:u(o),port:u(r),autoStart:!1,enabled:!0,binaryPath:u(l)||void 0,setupTargets:[]};await vs.add($),M(i,!1)}function f(){M(i,!1)}var v={get detectedBinaries(){return u(n)},set detectedBinaries(k){M(n,$e(k))}},g=i_(),m=p(g);ie(m,21,()=>u(s),k=>k.config.id,(k,$)=>{t_(k,{get instance(){return u($)},get detectedBinaries(){return u(n)}})});var b=_(m,2);{var y=k=>{he(k,{children:($,w)=>{var P=s_(),z=_(p(P),2),C=p(z),T=_(p(C),2),E=p(T);E.value=E.__value="";var R=_(E);ie(R,17,()=>u(n),Le,(q,et)=>{var Mt=e_(),ee=p(Mt),de={};L(()=>{D(ee,u(et).name),de!==(de=u(et).path)&&(Mt.value=(Mt.__value=u(et).path)??"")}),x(q,Mt)});var N;lr(T);var Z=_(z,2),K=p(Z),V=_(p(K),2),X=_(K,2),J=_(p(X),2),xt=_(X,2),yt=_(p(xt),2),Pt=p(yt);Pt.value=Pt.__value="router";var F=_(Pt);F.value=F.__value="impersonator";var O=_(F);O.value=O.__value="custom";var H=_(Z,2),tt=p(H);qt(tt,{variant:"primary",size:"sm",onclick:h,children:(q,et)=>{var Mt=Ht("Ajouter");x(q,Mt)},$$slots:{default:!0}});var kt=_(tt,2);qt(kt,{variant:"ghost",size:"sm",onclick:f,children:(q,et)=>{var Mt=Ht("Annuler");x(q,Mt)},$$slots:{default:!0}}),L(()=>{N!==(N=u(l))&&(T.value=(T.__value=u(l))??"",fi(T,u(l)))}),nt("change",T,d),Te(V,()=>u(a),q=>M(a,q)),Te(J,()=>u(r),q=>M(r,q)),vi(yt,()=>u(o),q=>M(o,q)),x($,P)},$$slots:{default:!0}})},S=k=>{var $=n_(),w=p($);Ki(w,{size:16}),nt("click",$,c),x(k,$)};B(b,k=>{u(i)?k(y):k(S,!1)})}return x(e,g),we(v)}De(["change","click"]);var r_=A('<span class="radio-dot svelte-zskv5r"></span>'),o_=A('<div class="strategy-card svelte-zskv5r"><div class="strategy-header svelte-zskv5r"><span><!></span> <div class="strategy-right svelte-zskv5r"><span class="drag-handle svelte-zskv5r" aria-label="Glisser pour reordonner"><!></span> <div><!></div></div></div> <h4 class="strategy-name svelte-zskv5r"> </h4> <p class="strategy-desc svelte-zskv5r"> </p></div>'),l_=A('<div draggable="true" role="listitem"><!></div>'),c_=A('<div class="strategy-grid svelte-zskv5r"></div>');function d_(e,t){ke(t,!0);let s=be(t,"selected",15,"priority"),n=j($e([{id:"priority",name:"Priorite",description:"Utilise le compte avec la priorite la plus haute. Bascule uniquement quand le compte actif atteint ses limites.",icon:dp},{id:"quota-aware",name:"Quota-Aware",description:"Choisit automatiquement le compte avec le plus de quota disponible. Equilibre la charge intelligemment.",icon:Lv},{id:"round-robin",name:"Round Robin",description:"Alterne entre les comptes de facon cyclique. Repartition equitable des requetes.",icon:bs},{id:"latency",name:"Latence",description:"Selectionne le compte avec la meilleure latence mesuree. Optimise la reactivite.",icon:Ua},{id:"usage-based",name:"Usage-Based",description:"Repartit selon l'utilisation cumulee. Equilibre le cout entre les comptes.",icon:up}])),i=j(null),a=j(null);function r(f){s(f),t.onchange?.(f)}function o(f){M(i,f,!0)}function l(f,v){f.preventDefault(),M(a,v,!0)}function c(f){if(u(i)!==null&&u(i)!==f){const v=[...u(n)],[g]=v.splice(u(i),1);v.splice(f,0,g),M(n,v,!0),t.onreorder?.(v.map(m=>m.id))}M(i,null),M(a,null)}function d(){M(i,null),M(a,null)}var h=c_();ie(h,21,()=>u(n),Le,(f,v,g)=>{var m=l_();let b;var y=p(m);{let S=W(()=>s()===u(v).id);he(y,{get active(){return u(S)},onclick:()=>r(u(v).id),children:(k,$)=>{var w=o_(),P=p(w),z=p(P);let C;var T=p(z);or(T,()=>u(v).icon,(F,O)=>{O(F,{size:20})});var E=_(z,2),R=p(E),N=p(R);Yv(N,{size:14});var Z=_(R,2);let K;var V=p(Z);{var X=F=>{var O=r_();x(F,O)};B(V,F=>{s()===u(v).id&&F(X)})}var J=_(P,2),xt=p(J),yt=_(J,2),Pt=p(yt);L(()=>{C=Yt(z,1,"strategy-icon svelte-zskv5r",null,C,{active:s()===u(v).id}),K=Yt(Z,1,"strategy-radio svelte-zskv5r",null,K,{selected:s()===u(v).id}),D(xt,u(v).name),D(Pt,u(v).description)}),x(k,w)},$$slots:{default:!0}})}L(()=>b=Yt(m,1,"strategy-drag-wrapper svelte-zskv5r",null,b,{dragging:u(i)===g,"drag-over":u(a)===g&&u(i)!==g})),js("dragstart",m,()=>o(g)),js("dragover",m,S=>l(S,g)),js("drop",m,()=>c(g)),js("dragend",m,d),x(f,m)}),x(e,h),we()}var u_=A("<!> Sauvegarder",1),h_=A('<th class="th-tier svelte-16ofv0g"> </th>'),f_=A('<td class="td-model svelte-16ofv0g"><input type="text" class="model-input svelte-16ofv0g"/></td>'),v_=A('<tr class="svelte-16ofv0g"><td class="td-provider svelte-16ofv0g"><span class="provider-dot svelte-16ofv0g"></span> <span class="provider-name svelte-16ofv0g"> </span></td><!></tr>'),p_=A('<div class="model-mapping svelte-16ofv0g"><div class="mapping-header svelte-16ofv0g"><h3 class="mapping-title svelte-16ofv0g">Mapping des modeles</h3> <!></div> <div class="mapping-table-wrapper svelte-16ofv0g"><table class="mapping-table svelte-16ofv0g"><thead><tr><th class="th-provider svelte-16ofv0g">Provider</th><!></tr></thead><tbody></tbody></table></div></div>');function g_(e,t){ke(t,!0);const s={anthropic:{opus:"claude-opus-4-20250514",sonnet:"claude-sonnet-4-20250514",haiku:"claude-haiku-4-20250514"},gemini:{opus:"gemini-2.5-pro",sonnet:"gemini-2.5-flash",haiku:"gemini-2.0-flash-lite"},openai:{opus:"o3",sonnet:"gpt-4.1",haiku:"gpt-4.1-mini"},xai:{opus:"grok-3",sonnet:"grok-3-mini",haiku:"grok-2"},deepseek:{opus:"deepseek-r1",sonnet:"deepseek-chat",haiku:"deepseek-chat"},mistral:{opus:"mistral-large-latest",sonnet:"mistral-medium-latest",haiku:"mistral-small-latest"},groq:{opus:"llama-3.3-70b-versatile",sonnet:"llama-3.1-8b-instant",haiku:"gemma2-9b-it"}};let n=be(t,"mappings",3,s),i=j($e(JSON.parse(JSON.stringify(s))));Hn(()=>{M(i,JSON.parse(JSON.stringify(n())),!0)});const a=["anthropic","gemini","openai","xai","deepseek","mistral","groq"],r=["opus","sonnet","haiku"],o={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};function l(){t.onsave?.(u(i))}var c=p_(),d=p(c),h=_(p(d),2);qt(h,{variant:"primary",size:"sm",onclick:l,children:(S,k)=>{var $=u_(),w=I($);ip(w,{size:14}),x(S,$)},$$slots:{default:!0}});var f=_(d,2),v=p(f),g=p(v),m=p(g),b=_(p(m));ie(b,17,()=>r,Le,(S,k)=>{var $=h_(),w=p($);L(P=>D(w,P),[()=>u(k).charAt(0).toUpperCase()+u(k).slice(1)]),x(S,$)});var y=_(g);ie(y,21,()=>a,Le,(S,k)=>{var $=v_(),w=p($),P=p(w),z=_(P,2),C=p(z),T=_(w);ie(T,17,()=>r,Le,(E,R)=>{var N=f_(),Z=p(N);Te(Z,()=>u(i)[u(k)][u(R)],K=>u(i)[u(k)][u(R)]=K),x(E,N)}),L(()=>{Be(P,`background: ${o[u(k)]??""}`),D(C,u(k))}),x(S,$)}),x(e,c),we()}var m_=A('<div class="profiles-state svelte-po0uu5">Chargement des profils...</div>'),__=A('<div class="profiles-state error svelte-po0uu5"> </div>'),b_=A('<div class="profiles-state svelte-po0uu5"><!> <p>Aucun profil capture</p> <p class="hint svelte-po0uu5">Les profils sont crees automatiquement lors des premieres requetes Claude Code</p></div>'),y_=A('<span class="count-badge stream svelte-po0uu5">streaming</span>'),x_=A('<div class="header-item svelte-po0uu5"><span class="header-name svelte-po0uu5"> </span> <span class="header-value svelte-po0uu5"> </span></div>'),k_=A('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5">Headers statiques</div> <div class="header-list svelte-po0uu5"></div></div>'),w_=A('<div class="header-item svelte-po0uu5"><span class="header-name svelte-po0uu5"> </span> <span class="header-pattern svelte-po0uu5"> </span> <span class="header-value svelte-po0uu5"> </span></div>'),$_=A('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5">Headers dynamiques</div> <div class="header-list svelte-po0uu5"></div></div>'),S_=A('<span class="order-item svelte-po0uu5"> </span>'),M_=A('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5"> </div> <div class="order-list svelte-po0uu5"></div></div>'),P_=A('<div class="profile-details svelte-po0uu5"><!> <!> <!></div>'),A_=A('<div class="profile-card svelte-po0uu5"><div class="profile-header svelte-po0uu5"><div class="profile-title-row svelte-po0uu5"><!> <span class="profile-meta svelte-po0uu5"><!></span> <span class="profile-date svelte-po0uu5"> </span></div> <div class="profile-counts svelte-po0uu5"><span class="count-badge svelte-po0uu5"> </span> <span class="count-badge dyn svelte-po0uu5"> </span> <!></div> <button class="expand-btn svelte-po0uu5" aria-label="Expand"><!></button></div> <!></div>'),C_=A(`<div class="profiles-list svelte-po0uu5"><div class="profiles-header svelte-po0uu5"><div class="profiles-title svelte-po0uu5"><!> <span>Profils d'impersonation</span></div> <!></div> <!></div>`);function z_(e,t){ke(t,!0);const s={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};let n=j($e([])),i=j(!0),a=j(""),r=j($e({}));Ve(async()=>{await o()});async function o(){M(i,!0),M(a,"");try{M(n,await rg(),!0)}catch(P){M(a,String(P),!0)}finally{M(i,!1)}}function l(P){M(r,{...u(r),[P]:!u(r)[P]},!0)}function c(P){if(!P)return"jamais";try{return new Date(P).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return P}}function d(P){return Object.keys(P.static_headers??{}).length}function h(P){return Object.keys(P.dynamic_headers??{}).length}var f=C_(),v=p(f),g=p(v),m=p(g);so(m,{size:16});var b=_(g,2);qt(b,{variant:"ghost",size:"sm",onclick:o,children:(P,z)=>{bs(P,{size:14})},$$slots:{default:!0}});var y=_(v,2);{var S=P=>{var z=m_();x(P,z)},k=P=>{var z=__(),C=p(z);L(()=>D(C,u(a))),x(P,z)},$=P=>{var z=b_(),C=p(z);so(C,{size:32}),x(P,z)},w=P=>{var z=it(),C=I(z);ie(C,17,()=>u(n),Le,(T,E)=>{he(T,{children:(R,N)=>{var Z=A_(),K=p(Z),V=p(K),X=p(V);{let zt=W(()=>s[u(E).provider_name]??"var(--fg-dim)");Ue(X,{get color(){return u(zt)},children:(Nt,fe)=>{var ue=Ht();L(()=>D(ue,u(E).provider_name)),x(Nt,ue)},$$slots:{default:!0}})}var J=_(X,2),xt=p(J);{var yt=zt=>{var Nt=Ht();L(()=>D(Nt,`${u(E).request_count??""} requetes`)),x(zt,Nt)};B(xt,zt=>{u(E).request_count!=null&&zt(yt)})}var Pt=_(J,2),F=p(Pt),O=_(V,2),H=p(O),tt=p(H),kt=_(H,2),q=p(kt),et=_(kt,2);{var Mt=zt=>{var Nt=y_();x(zt,Nt)};B(et,zt=>{u(E).always_streams&&zt(Mt)})}var ee=_(O,2),de=p(ee);{var U=zt=>{Rv(zt,{size:14})},jt=zt=>{Iv(zt,{size:14})};B(de,zt=>{u(r)[u(E).provider_name]?zt(U):zt(jt,!1)})}var Vt=_(K,2);{var Zt=zt=>{var Nt=P_(),fe=p(Nt);{var ue=St=>{var Ft=k_(),Kt=_(p(Ft),2);ie(Kt,21,()=>Object.entries(u(E).static_headers??{}),Le,(oe,ye)=>{var me=W(()=>Vr(u(ye),2));let Jt=()=>u(me)[0],Gt=()=>u(me)[1];var Ot=x_(),st=p(Ot),lt=p(st),wt=_(st,2),Qt=p(wt);L(()=>{D(lt,Jt()),D(Qt,Gt())}),x(oe,Ot)}),x(St,Ft)},ft=W(()=>d(u(E))>0);B(fe,St=>{u(ft)&&St(ue)})}var At=_(fe,2);{var $t=St=>{var Ft=$_(),Kt=_(p(Ft),2);ie(Kt,21,()=>Object.entries(u(E).dynamic_headers??{}),Le,(oe,ye)=>{var me=W(()=>Vr(u(ye),2));let Jt=()=>u(me)[0],Gt=()=>u(me)[1];var Ot=w_(),st=p(Ot),lt=p(st),wt=_(st,2),Qt=p(wt),Y=_(wt,2),Lt=p(Y);L(()=>{D(lt,Jt()),D(Qt,`[${Gt().pattern??""}]`),D(Lt,Gt().latest)}),x(oe,Ot)}),x(St,Ft)},G=W(()=>h(u(E))>0);B(At,St=>{u(G)&&St($t)})}var vt=_(At,2);{var _t=St=>{var Ft=M_(),Kt=p(Ft),oe=p(Kt),ye=_(Kt,2);ie(ye,21,()=>u(E).header_order,Le,(me,Jt)=>{var Gt=S_(),Ot=p(Gt);L(()=>D(Ot,u(Jt))),x(me,Gt)}),L(()=>D(oe,`Ordre (${u(E).header_order.length??""} headers)`)),x(St,Ft)};B(vt,St=>{u(E).header_order&&u(E).header_order.length>0&&St(_t)})}x(zt,Nt)};B(Vt,zt=>{u(r)[u(E).provider_name]&&zt(Zt)})}L((zt,Nt,fe)=>{D(F,zt),D(tt,`${Nt??""} static`),D(q,`${fe??""} dynamic`)},[()=>c(u(E).last_capture??u(E).captured_at),()=>d(u(E)),()=>h(u(E))]),nt("click",K,()=>l(u(E).provider_name)),nt("keydown",K,()=>{}),x(R,Z)},$$slots:{default:!0}})}),x(P,z)};B(y,P=>{u(i)?P(S):u(a)?P(k,1):u(n).length===0?P($,2):P(w,!1)})}x(e,f),we()}De(["click","keydown"]);var T_=A('<span class="toggle-label svelte-eylgc7"> </span>'),E_=A('<button class="toggle-wrapper svelte-eylgc7" role="switch"><span><span></span></span> <!></button>');function gs(e,t){ke(t,!0);let s=be(t,"checked",15,!1),n=be(t,"disabled",3,!1);function i(){n()||(s(!s()),t.onchange?.(s()))}var a=E_(),r=p(a);let o;var l=p(r);let c;var d=_(r,2);{var h=f=>{var v=T_(),g=p(v);L(()=>D(g,t.label)),x(f,v)};B(d,f=>{t.label&&f(h)})}L(()=>{Dt(a,"aria-checked",s()),Dt(a,"aria-label",t.label),a.disabled=n(),o=Yt(r,1,"toggle-track svelte-eylgc7",null,o,{active:s()}),c=Yt(l,1,"toggle-thumb svelte-eylgc7",null,c,{active:s()})}),nt("click",a,i),x(e,a),we()}De(["click"]);var D_=A("<button> </button>"),O_=A('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Auto-switch</span> <span class="option-desc svelte-j1t1ye">Changer de compte quand le quota atteint 85% (5h) / 90% (7j)</span></div> <!></div>'),L_=A('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Rotation automatique</span> <span class="option-desc svelte-j1t1ye">Alterner entre comptes a intervalle fixe</span></div> <!></div>'),R_=A('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Intervalle rotation</span> <span class="option-desc svelte-j1t1ye">Minutes entre chaque changement</span></div> <input type="number" class="option-input svelte-j1t1ye" min="1" max="120"/></div>'),I_=A('<div class="strategy-options svelte-j1t1ye"><!> <!> <!></div>'),j_=A('<div class="strategy-section svelte-j1t1ye"><!> <!></div>'),N_=A('<div class="proxy-screen svelte-j1t1ye"><header class="screen-header svelte-j1t1ye"><h1 class="screen-title svelte-j1t1ye">Proxy</h1></header> <div class="tab-bar svelte-j1t1ye"></div> <div class="tab-content svelte-j1t1ye"><!></div></div>');function F_(e,t){ke(t,!0);let s=j("control"),n=j("priority"),i=j(null);Ve(()=>(Ae.load(),Ae.subscribe(S=>{M(i,S,!0)})));async function a(y){if(!u(i)?.proxy)return;const S={...u(i).proxy};y?(S.autoSwitchThreshold5h=.85,S.autoSwitchThreshold7d=.9):(S.autoSwitchThreshold5h=0,S.autoSwitchThreshold7d=0),await Ae.save({proxy:S})}async function r(y){u(i)?.proxy&&await Ae.save({proxy:{...u(i).proxy,rotationEnabled:y}})}async function o(y){if(!u(i)?.proxy)return;const S=parseInt(y.target.value);S>=1&&S<=120&&await Ae.save({proxy:{...u(i).proxy,rotationIntervalSecs:S*60}})}const l=[{id:"control",label:"Instances"},{id:"strategy",label:"Strategie"},{id:"models",label:"Modeles"},{id:"profiles",label:"Profils"}];var c=N_(),d=_(p(c),2);ie(d,21,()=>l,Le,(y,S)=>{var k=D_();let $;var w=p(k);L(()=>{$=Yt(k,1,"tab-item svelte-j1t1ye",null,$,{active:u(s)===u(S).id}),D(w,u(S).label)}),nt("click",k,()=>M(s,u(S).id,!0)),x(y,k)});var h=_(d,2),f=p(h);{var v=y=>{a_(y,{})},g=y=>{var S=j_(),k=p(S);d_(k,{get selected(){return u(n)},set selected(P){M(n,P,!0)}});var $=_(k,2);{var w=P=>{var z=I_(),C=p(z);he(C,{hoverable:!1,children:(N,Z)=>{var K=O_(),V=_(p(K),2);{let X=W(()=>(u(i)?.proxy?.autoSwitchThreshold5h??0)>0);gs(V,{get checked(){return u(X)},onchange:a})}x(N,K)},$$slots:{default:!0}});var T=_(C,2);he(T,{hoverable:!1,children:(N,Z)=>{var K=L_(),V=_(p(K),2);{let X=W(()=>u(i)?.proxy?.rotationEnabled??!1);gs(V,{get checked(){return u(X)},onchange:r})}x(N,K)},$$slots:{default:!0}});var E=_(T,2);{var R=N=>{he(N,{hoverable:!1,children:(Z,K)=>{var V=R_(),X=_(p(V),2);L(J=>Ha(X,J),[()=>Math.round((u(i)?.proxy?.rotationIntervalSecs??3600)/60)]),nt("change",X,o),x(Z,V)},$$slots:{default:!0}})};B(E,N=>{u(i)?.proxy?.rotationEnabled&&N(R)})}x(P,z)};B($,P=>{u(i)&&P(w)})}x(y,S)},m=y=>{g_(y,{})},b=y=>{z_(y,{})};B(f,y=>{u(s)==="control"?y(v):u(s)==="strategy"?y(g,1):u(s)==="models"?y(m,2):y(b,!1)})}x(e,c),we()}De(["click","change"]);/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ca(e){return e+.5|0}const dn=(e,t,s)=>Math.max(Math.min(e,s),t);function Oi(e){return dn(ca(e*2.55),0,255)}function mn(e){return dn(ca(e*255),0,255)}function Ks(e){return dn(ca(e/2.55)/100,0,1)}function Tl(e){return dn(ca(e*100),0,100)}const ys={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},io=[..."0123456789ABCDEF"],B_=e=>io[e&15],q_=e=>io[(e&240)>>4]+io[e&15],_a=e=>(e&240)>>4===(e&15),V_=e=>_a(e.r)&&_a(e.g)&&_a(e.b)&&_a(e.a);function H_(e){var t=e.length,s;return e[0]==="#"&&(t===4||t===5?s={r:255&ys[e[1]]*17,g:255&ys[e[2]]*17,b:255&ys[e[3]]*17,a:t===5?ys[e[4]]*17:255}:(t===7||t===9)&&(s={r:ys[e[1]]<<4|ys[e[2]],g:ys[e[3]]<<4|ys[e[4]],b:ys[e[5]]<<4|ys[e[6]],a:t===9?ys[e[7]]<<4|ys[e[8]]:255})),s}const W_=(e,t)=>e<255?t(e):"";function U_(e){var t=V_(e)?B_:q_;return e?"#"+t(e.r)+t(e.g)+t(e.b)+W_(e.a,t):void 0}const Y_=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function pu(e,t,s){const n=t*Math.min(s,1-s),i=(a,r=(a+e/30)%12)=>s-n*Math.max(Math.min(r-3,9-r,1),-1);return[i(0),i(8),i(4)]}function K_(e,t,s){const n=(i,a=(i+e/60)%6)=>s-s*t*Math.max(Math.min(a,4-a,1),0);return[n(5),n(3),n(1)]}function X_(e,t,s){const n=pu(e,1,.5);let i;for(t+s>1&&(i=1/(t+s),t*=i,s*=i),i=0;i<3;i++)n[i]*=1-t-s,n[i]+=t;return n}function G_(e,t,s,n,i){return e===i?(t-s)/n+(t<s?6:0):t===i?(s-e)/n+2:(e-t)/n+4}function jo(e){const s=e.r/255,n=e.g/255,i=e.b/255,a=Math.max(s,n,i),r=Math.min(s,n,i),o=(a+r)/2;let l,c,d;return a!==r&&(d=a-r,c=o>.5?d/(2-a-r):d/(a+r),l=G_(s,n,i,d,a),l=l*60+.5),[l|0,c||0,o]}function No(e,t,s,n){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,s,n)).map(mn)}function Fo(e,t,s){return No(pu,e,t,s)}function J_(e,t,s){return No(X_,e,t,s)}function Q_(e,t,s){return No(K_,e,t,s)}function gu(e){return(e%360+360)%360}function Z_(e){const t=Y_.exec(e);let s=255,n;if(!t)return;t[5]!==n&&(s=t[6]?Oi(+t[5]):mn(+t[5]));const i=gu(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?n=J_(i,a,r):t[1]==="hsv"?n=Q_(i,a,r):n=Fo(i,a,r),{r:n[0],g:n[1],b:n[2],a:s}}function t1(e,t){var s=jo(e);s[0]=gu(s[0]+t),s=Fo(s),e.r=s[0],e.g=s[1],e.b=s[2]}function e1(e){if(!e)return;const t=jo(e),s=t[0],n=Tl(t[1]),i=Tl(t[2]);return e.a<255?`hsla(${s}, ${n}%, ${i}%, ${Ks(e.a)})`:`hsl(${s}, ${n}%, ${i}%)`}const El={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Dl={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function s1(){const e={},t=Object.keys(Dl),s=Object.keys(El);let n,i,a,r,o;for(n=0;n<t.length;n++){for(r=o=t[n],i=0;i<s.length;i++)a=s[i],o=o.replace(a,El[a]);a=parseInt(Dl[r],16),e[o]=[a>>16&255,a>>8&255,a&255]}return e}let ba;function n1(e){ba||(ba=s1(),ba.transparent=[0,0,0,0]);const t=ba[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const i1=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function a1(e){const t=i1.exec(e);let s=255,n,i,a;if(t){if(t[7]!==n){const r=+t[7];s=t[8]?Oi(r):dn(r*255,0,255)}return n=+t[1],i=+t[3],a=+t[5],n=255&(t[2]?Oi(n):dn(n,0,255)),i=255&(t[4]?Oi(i):dn(i,0,255)),a=255&(t[6]?Oi(a):dn(a,0,255)),{r:n,g:i,b:a,a:s}}}function r1(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Ks(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Ar=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Zn=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function o1(e,t,s){const n=Zn(Ks(e.r)),i=Zn(Ks(e.g)),a=Zn(Ks(e.b));return{r:mn(Ar(n+s*(Zn(Ks(t.r))-n))),g:mn(Ar(i+s*(Zn(Ks(t.g))-i))),b:mn(Ar(a+s*(Zn(Ks(t.b))-a))),a:e.a+s*(t.a-e.a)}}function ya(e,t,s){if(e){let n=jo(e);n[t]=Math.max(0,Math.min(n[t]+n[t]*s,t===0?360:1)),n=Fo(n),e.r=n[0],e.g=n[1],e.b=n[2]}}function mu(e,t){return e&&Object.assign(t||{},e)}function Ol(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=mn(e[3]))):(t=mu(e,{r:0,g:0,b:0,a:1}),t.a=mn(t.a)),t}function l1(e){return e.charAt(0)==="r"?a1(e):Z_(e)}class Xi{constructor(t){if(t instanceof Xi)return t;const s=typeof t;let n;s==="object"?n=Ol(t):s==="string"&&(n=H_(t)||n1(t)||l1(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=mu(this._rgb);return t&&(t.a=Ks(t.a)),t}set rgb(t){this._rgb=Ol(t)}rgbString(){return this._valid?r1(this._rgb):void 0}hexString(){return this._valid?U_(this._rgb):void 0}hslString(){return this._valid?e1(this._rgb):void 0}mix(t,s){if(t){const n=this.rgb,i=t.rgb;let a;const r=s===a?.5:s,o=2*r-1,l=n.a-i.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-c,n.r=255&c*n.r+a*i.r+.5,n.g=255&c*n.g+a*i.g+.5,n.b=255&c*n.b+a*i.b+.5,n.a=r*n.a+(1-r)*i.a,this.rgb=n}return this}interpolate(t,s){return t&&(this._rgb=o1(this._rgb,t._rgb,s)),this}clone(){return new Xi(this.rgb)}alpha(t){return this._rgb.a=mn(t),this}clearer(t){const s=this._rgb;return s.a*=1-t,this}greyscale(){const t=this._rgb,s=ca(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=s,this}opaquer(t){const s=this._rgb;return s.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ya(this._rgb,2,t),this}darken(t){return ya(this._rgb,2,-t),this}saturate(t){return ya(this._rgb,1,t),this}desaturate(t){return ya(this._rgb,1,-t),this}rotate(t){return t1(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Hs(){}const c1=(()=>{let e=0;return()=>e++})();function ne(e){return e==null}function Ce(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ae(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Re(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ps(e,t){return Re(e)?e:t}function Ut(e,t){return typeof e>"u"?t:e}const d1=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,_u=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Se(e,t,s){if(e&&typeof e.call=="function")return e.apply(s,t)}function xe(e,t,s,n){let i,a,r;if(Ce(e))for(a=e.length,i=0;i<a;i++)t.call(s,e[i],i);else if(ae(e))for(r=Object.keys(e),a=r.length,i=0;i<a;i++)t.call(s,e[r[i]],r[i])}function Ka(e,t){let s,n,i,a;if(!e||!t||e.length!==t.length)return!1;for(s=0,n=e.length;s<n;++s)if(i=e[s],a=t[s],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function Xa(e){if(Ce(e))return e.map(Xa);if(ae(e)){const t=Object.create(null),s=Object.keys(e),n=s.length;let i=0;for(;i<n;++i)t[s[i]]=Xa(e[s[i]]);return t}return e}function bu(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function u1(e,t,s,n){if(!bu(e))return;const i=t[e],a=s[e];ae(i)&&ae(a)?Gi(i,a,n):t[e]=Xa(a)}function Gi(e,t,s){const n=Ce(t)?t:[t],i=n.length;if(!ae(e))return e;s=s||{};const a=s.merger||u1;let r;for(let o=0;o<i;++o){if(r=n[o],!ae(r))continue;const l=Object.keys(r);for(let c=0,d=l.length;c<d;++c)a(l[c],e,r,s)}return e}function Vi(e,t){return Gi(e,t,{merger:h1})}function h1(e,t,s){if(!bu(e))return;const n=t[e],i=s[e];ae(n)&&ae(i)?Vi(n,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Xa(i))}const Ll={"":e=>e,x:e=>e.x,y:e=>e.y};function f1(e){const t=e.split("."),s=[];let n="";for(const i of t)n+=i,n.endsWith("\\")?n=n.slice(0,-1)+".":(s.push(n),n="");return s}function v1(e){const t=f1(e);return s=>{for(const n of t){if(n==="")break;s=s&&s[n]}return s}}function kn(e,t){return(Ll[t]||(Ll[t]=v1(t)))(e)}function Bo(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Ji=e=>typeof e<"u",wn=e=>typeof e=="function",Rl=(e,t)=>{if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;return!0};function p1(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const pe=Math.PI,Me=2*pe,g1=Me+pe,Ga=Number.POSITIVE_INFINITY,m1=pe/180,je=pe/2,An=pe/4,Il=pe*2/3,un=Math.log10,Bs=Math.sign;function Hi(e,t,s){return Math.abs(e-t)<s}function jl(e){const t=Math.round(e);e=Hi(e,t,e/1e3)?t:e;const s=Math.pow(10,Math.floor(un(e))),n=e/s;return(n<=1?1:n<=2?2:n<=5?5:10)*s}function _1(e){const t=[],s=Math.sqrt(e);let n;for(n=1;n<s;n++)e%n===0&&(t.push(n),t.push(e/n));return s===(s|0)&&t.push(s),t.sort((i,a)=>i-a).pop(),t}function b1(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function pi(e){return!b1(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function y1(e,t){const s=Math.round(e);return s-t<=e&&s+t>=e}function yu(e,t,s){let n,i,a;for(n=0,i=e.length;n<i;n++)a=e[n][s],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function Cs(e){return e*(pe/180)}function qo(e){return e*(180/pe)}function Nl(e){if(!Re(e))return;let t=1,s=0;for(;Math.round(e*t)/t!==e;)t*=10,s++;return s}function xu(e,t){const s=t.x-e.x,n=t.y-e.y,i=Math.sqrt(s*s+n*n);let a=Math.atan2(n,s);return a<-.5*pe&&(a+=Me),{angle:a,distance:i}}function ao(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function x1(e,t){return(e-t+g1)%Me-pe}function ss(e){return(e%Me+Me)%Me}function Qi(e,t,s,n){const i=ss(e),a=ss(t),r=ss(s),o=ss(a-i),l=ss(r-i),c=ss(i-a),d=ss(i-r);return i===a||i===r||n&&a===r||o>l&&c<d}function Ye(e,t,s){return Math.max(t,Math.min(s,e))}function k1(e){return Ye(e,-32768,32767)}function Js(e,t,s,n=1e-6){return e>=Math.min(t,s)-n&&e<=Math.max(t,s)+n}function Vo(e,t,s){s=s||(r=>e[r]<t);let n=e.length-1,i=0,a;for(;n-i>1;)a=i+n>>1,s(a)?i=a:n=a;return{lo:i,hi:n}}const Qs=(e,t,s,n)=>Vo(e,s,n?i=>{const a=e[i][t];return a<s||a===s&&e[i+1][t]===s}:i=>e[i][t]<s),w1=(e,t,s)=>Vo(e,s,n=>e[n][t]>=s);function $1(e,t,s){let n=0,i=e.length;for(;n<i&&e[n]<t;)n++;for(;i>n&&e[i-1]>s;)i--;return n>0||i<e.length?e.slice(n,i):e}const ku=["push","pop","shift","splice","unshift"];function S1(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),ku.forEach(s=>{const n="_onData"+Bo(s),i=e[s];Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value(...a){const r=i.apply(this,a);return e._chartjs.listeners.forEach(o=>{typeof o[n]=="function"&&o[n](...a)}),r}})})}function Fl(e,t){const s=e._chartjs;if(!s)return;const n=s.listeners,i=n.indexOf(t);i!==-1&&n.splice(i,1),!(n.length>0)&&(ku.forEach(a=>{delete e[a]}),delete e._chartjs)}function wu(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const $u=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function Su(e,t){let s=[],n=!1;return function(...i){s=i,n||(n=!0,$u.call(window,()=>{n=!1,e.apply(t,s)}))}}function M1(e,t){let s;return function(...n){return t?(clearTimeout(s),s=setTimeout(e,t,n)):e.apply(this,n),t}}const Ho=e=>e==="start"?"left":e==="end"?"right":"center",es=(e,t,s)=>e==="start"?t:e==="end"?s:(t+s)/2,P1=(e,t,s,n)=>e===(n?"left":"right")?s:e==="center"?(t+s)/2:t;function Mu(e,t,s){const n=t.length;let i=0,a=n;if(e._sorted){const{iScale:r,vScale:o,_parsed:l}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=r.axis,{min:h,max:f,minDefined:v,maxDefined:g}=r.getUserBounds();if(v){if(i=Math.min(Qs(l,d,h).lo,s?n:Qs(t,d,r.getPixelForValue(h)).lo),c){const m=l.slice(0,i+1).reverse().findIndex(b=>!ne(b[o.axis]));i-=Math.max(0,m)}i=Ye(i,0,n-1)}if(g){let m=Math.max(Qs(l,r.axis,f,!0).hi+1,s?0:Qs(t,d,r.getPixelForValue(f),!0).hi+1);if(c){const b=l.slice(m-1).findIndex(y=>!ne(y[o.axis]));m+=Math.max(0,b)}a=Ye(m,i,n)-i}else a=n-i}return{start:i,count:a}}function Pu(e){const{xScale:t,yScale:s,_scaleRanges:n}=e,i={xmin:t.min,xmax:t.max,ymin:s.min,ymax:s.max};if(!n)return e._scaleRanges=i,!0;const a=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==s.min||n.ymax!==s.max;return Object.assign(n,i),a}const xa=e=>e===0||e===1,Bl=(e,t,s)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Me/s)),ql=(e,t,s)=>Math.pow(2,-10*e)*Math.sin((e-t)*Me/s)+1,Wi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*je)+1,easeOutSine:e=>Math.sin(e*je),easeInOutSine:e=>-.5*(Math.cos(pe*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>xa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>xa(e)?e:Bl(e,.075,.3),easeOutElastic:e=>xa(e)?e:ql(e,.075,.3),easeInOutElastic(e){return xa(e)?e:e<.5?.5*Bl(e*2,.1125,.45):.5+.5*ql(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Wi.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Wi.easeInBounce(e*2)*.5:Wi.easeOutBounce(e*2-1)*.5+.5};function Wo(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Vl(e){return Wo(e)?e:new Xi(e)}function Cr(e){return Wo(e)?e:new Xi(e).saturate(.5).darken(.1).hexString()}const A1=["x","y","borderWidth","radius","tension"],C1=["color","borderColor","backgroundColor"];function z1(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:C1},numbers:{type:"number",properties:A1}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function T1(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Hl=new Map;function E1(e,t){t=t||{};const s=e+JSON.stringify(t);let n=Hl.get(s);return n||(n=new Intl.NumberFormat(e,t),Hl.set(s,n)),n}function da(e,t,s){return E1(t,s).format(e)}const Au={values(e){return Ce(e)?e:""+e},numeric(e,t,s){if(e===0)return"0";const n=this.chart.options.locale;let i,a=e;if(s.length>1){const c=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),a=D1(e,s)}const r=un(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:i,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),da(e,n,l)},logarithmic(e,t,s){if(e===0)return"0";const n=s[t].significand||e/Math.pow(10,Math.floor(un(e)));return[1,2,3,5,10,15].includes(n)||t>.8*s.length?Au.numeric.call(this,e,t,s):""}};function D1(e,t){let s=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(s)>=1&&e!==Math.floor(e)&&(s=e-Math.floor(e)),s}var ur={formatters:Au};function O1(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,s)=>s.lineWidth,tickColor:(t,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:ur.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Wn=Object.create(null),ro=Object.create(null);function Ui(e,t){if(!t)return e;const s=t.split(".");for(let n=0,i=s.length;n<i;++n){const a=s[n];e=e[a]||(e[a]=Object.create(null))}return e}function zr(e,t,s){return typeof t=="string"?Gi(Ui(e,t),s):Gi(Ui(e,""),t)}class L1{constructor(t,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>Cr(i.backgroundColor),this.hoverBorderColor=(n,i)=>Cr(i.borderColor),this.hoverColor=(n,i)=>Cr(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(s)}set(t,s){return zr(this,t,s)}get(t){return Ui(this,t)}describe(t,s){return zr(ro,t,s)}override(t,s){return zr(Wn,t,s)}route(t,s,n,i){const a=Ui(this,t),r=Ui(this,n),o="_"+s;Object.defineProperties(a,{[o]:{value:a[s],writable:!0},[s]:{enumerable:!0,get(){const l=this[o],c=r[i];return ae(l)?Object.assign({},c,l):Ut(l,c)},set(l){this[o]=l}}})}apply(t){t.forEach(s=>s(this))}}var ze=new L1({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[z1,T1,O1]);function R1(e){return!e||ne(e.size)||ne(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ja(e,t,s,n,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,s.push(i)),a>n&&(n=a),n}function I1(e,t,s,n){n=n||{};let i=n.data=n.data||{},a=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(i=n.data={},a=n.garbageCollect=[],n.font=t),e.save(),e.font=t;let r=0;const o=s.length;let l,c,d,h,f;for(l=0;l<o;l++)if(h=s[l],h!=null&&!Ce(h))r=Ja(e,i,a,r,h);else if(Ce(h))for(c=0,d=h.length;c<d;c++)f=h[c],f!=null&&!Ce(f)&&(r=Ja(e,i,a,r,f));e.restore();const v=a.length/2;if(v>s.length){for(l=0;l<v;l++)delete i[a[l]];a.splice(0,v)}return r}function Cn(e,t,s){const n=e.currentDevicePixelRatio,i=s!==0?Math.max(s/2,.5):0;return Math.round((t-i)*n)/n+i}function Wl(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function oo(e,t,s,n){Cu(e,t,s,n,null)}function Cu(e,t,s,n,i){let a,r,o,l,c,d,h,f;const v=t.pointStyle,g=t.rotation,m=t.radius;let b=(g||0)*m1;if(v&&typeof v=="object"&&(a=v.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(s,n),e.rotate(b),e.drawImage(v,-v.width/2,-v.height/2,v.width,v.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),v){default:i?e.ellipse(s,n,i/2,m,0,0,Me):e.arc(s,n,m,0,Me),e.closePath();break;case"triangle":d=i?i/2:m,e.moveTo(s+Math.sin(b)*d,n-Math.cos(b)*m),b+=Il,e.lineTo(s+Math.sin(b)*d,n-Math.cos(b)*m),b+=Il,e.lineTo(s+Math.sin(b)*d,n-Math.cos(b)*m),e.closePath();break;case"rectRounded":c=m*.516,l=m-c,r=Math.cos(b+An)*l,h=Math.cos(b+An)*(i?i/2-c:l),o=Math.sin(b+An)*l,f=Math.sin(b+An)*(i?i/2-c:l),e.arc(s-h,n-o,c,b-pe,b-je),e.arc(s+f,n-r,c,b-je,b),e.arc(s+h,n+o,c,b,b+je),e.arc(s-f,n+r,c,b+je,b+pe),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,d=i?i/2:l,e.rect(s-d,n-l,2*d,2*l);break}b+=An;case"rectRot":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+f,n-r),e.lineTo(s+h,n+o),e.lineTo(s-f,n+r),e.closePath();break;case"crossRot":b+=An;case"cross":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r);break;case"star":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r),b+=An,h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r);break;case"line":r=i?i/2:Math.cos(b)*m,o=Math.sin(b)*m,e.moveTo(s-r,n-o),e.lineTo(s+r,n+o);break;case"dash":e.moveTo(s,n),e.lineTo(s+Math.cos(b)*(i?i/2:m),n+Math.sin(b)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Zs(e,t,s){return s=s||.5,!t||e&&e.x>t.left-s&&e.x<t.right+s&&e.y>t.top-s&&e.y<t.bottom+s}function hr(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function fr(e){e.restore()}function j1(e,t,s,n,i){if(!t)return e.lineTo(s.x,s.y);if(i==="middle"){const a=(t.x+s.x)/2;e.lineTo(a,t.y),e.lineTo(a,s.y)}else i==="after"!=!!n?e.lineTo(t.x,s.y):e.lineTo(s.x,t.y);e.lineTo(s.x,s.y)}function N1(e,t,s,n){if(!t)return e.lineTo(s.x,s.y);e.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?s.cp2x:s.cp1x,n?s.cp2y:s.cp1y,s.x,s.y)}function F1(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),ne(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function B1(e,t,s,n,i){if(i.strikethrough||i.underline){const a=e.measureText(n),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=s-a.actualBoundingBoxAscent,c=s+a.actualBoundingBoxDescent,d=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(r,d),e.lineTo(o,d),e.stroke()}}function q1(e,t){const s=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=s}function Un(e,t,s,n,i,a={}){const r=Ce(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,F1(e,a),l=0;l<r.length;++l)c=r[l],a.backdrop&&q1(e,a.backdrop),o&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),ne(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(c,s,n,a.maxWidth)),e.fillText(c,s,n,a.maxWidth),B1(e,s,n,c,a),n+=Number(i.lineHeight);e.restore()}function Zi(e,t){const{x:s,y:n,w:i,h:a,radius:r}=t;e.arc(s+r.topLeft,n+r.topLeft,r.topLeft,1.5*pe,pe,!0),e.lineTo(s,n+a-r.bottomLeft),e.arc(s+r.bottomLeft,n+a-r.bottomLeft,r.bottomLeft,pe,je,!0),e.lineTo(s+i-r.bottomRight,n+a),e.arc(s+i-r.bottomRight,n+a-r.bottomRight,r.bottomRight,je,0,!0),e.lineTo(s+i,n+r.topRight),e.arc(s+i-r.topRight,n+r.topRight,r.topRight,0,-je,!0),e.lineTo(s+r.topLeft,n)}const V1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,H1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function W1(e,t){const s=(""+e).match(V1);if(!s||s[1]==="normal")return t*1.2;switch(e=+s[2],s[3]){case"px":return e;case"%":e/=100;break}return t*e}const U1=e=>+e||0;function Uo(e,t){const s={},n=ae(t),i=n?Object.keys(t):t,a=ae(e)?n?r=>Ut(e[r],e[t[r]]):r=>e[r]:()=>e;for(const r of i)s[r]=U1(a(r));return s}function zu(e){return Uo(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Bn(e){return Uo(e,["topLeft","topRight","bottomLeft","bottomRight"])}function is(e){const t=zu(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function qe(e,t){e=e||{},t=t||ze.font;let s=Ut(e.size,t.size);typeof s=="string"&&(s=parseInt(s,10));let n=Ut(e.style,t.style);n&&!(""+n).match(H1)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const i={family:Ut(e.family,t.family),lineHeight:W1(Ut(e.lineHeight,t.lineHeight),s),size:s,style:n,weight:Ut(e.weight,t.weight),string:""};return i.string=R1(i),i}function Li(e,t,s,n){let i,a,r;for(i=0,a=e.length;i<a;++i)if(r=e[i],r!==void 0&&r!==void 0)return r}function Y1(e,t,s){const{min:n,max:i}=e,a=_u(t,(i-n)/2),r=(o,l)=>s&&o===0?0:o+l;return{min:r(n,-Math.abs(a)),max:r(i,a)}}function $n(e,t){return Object.assign(Object.create(e),t)}function Yo(e,t=[""],s,n,i=()=>e[0]){const a=s||e;typeof n>"u"&&(n=Ou("_fallback",e));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:n,_getTarget:i,override:o=>Yo([o,...e],t,a,n)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete e[0][l],!0},get(o,l){return Eu(o,l,()=>eb(l,t,e,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(o,l){return Yl(o).includes(l)},ownKeys(o){return Yl(o)},set(o,l,c){const d=o._storage||(o._storage=i());return o[l]=d[l]=c,delete o._keys,!0}})}function gi(e,t,s,n){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:s,_stack:new Set,_descriptors:Tu(e,n),setContext:a=>gi(e,a,s,n),override:a=>gi(e.override(a),t,s,n)};return new Proxy(i,{deleteProperty(a,r){return delete a[r],delete e[r],!0},get(a,r,o){return Eu(a,r,()=>X1(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(e,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,r)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,r){return Reflect.has(e,r)},ownKeys(){return Reflect.ownKeys(e)},set(a,r,o){return e[r]=o,delete a[r],!0}})}function Tu(e,t={scriptable:!0,indexable:!0}){const{_scriptable:s=t.scriptable,_indexable:n=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:s,indexable:n,isScriptable:wn(s)?s:()=>s,isIndexable:wn(n)?n:()=>n}}const K1=(e,t)=>e?e+Bo(t):t,Ko=(e,t)=>ae(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Eu(e,t,s){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const n=s();return e[t]=n,n}function X1(e,t,s){const{_proxy:n,_context:i,_subProxy:a,_descriptors:r}=e;let o=n[t];return wn(o)&&r.isScriptable(t)&&(o=G1(t,o,e,s)),Ce(o)&&o.length&&(o=J1(t,o,e,r.isIndexable)),Ko(t,o)&&(o=gi(o,i,a&&a[t],r)),o}function G1(e,t,s,n){const{_proxy:i,_context:a,_subProxy:r,_stack:o}=s;if(o.has(e))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+e);o.add(e);let l=t(a,r||n);return o.delete(e),Ko(e,l)&&(l=Xo(i._scopes,i,e,l)),l}function J1(e,t,s,n){const{_proxy:i,_context:a,_subProxy:r,_descriptors:o}=s;if(typeof a.index<"u"&&n(e))return t[a.index%t.length];if(ae(t[0])){const l=t,c=i._scopes.filter(d=>d!==l);t=[];for(const d of l){const h=Xo(c,i,e,d);t.push(gi(h,a,r&&r[e],o))}}return t}function Du(e,t,s){return wn(e)?e(t,s):e}const Q1=(e,t)=>e===!0?t:typeof e=="string"?kn(t,e):void 0;function Z1(e,t,s,n,i){for(const a of t){const r=Q1(s,a);if(r){e.add(r);const o=Du(r._fallback,s,i);if(typeof o<"u"&&o!==s&&o!==n)return o}else if(r===!1&&typeof n<"u"&&s!==n)return null}return!1}function Xo(e,t,s,n){const i=t._rootScopes,a=Du(t._fallback,s,n),r=[...e,...i],o=new Set;o.add(n);let l=Ul(o,r,s,a||s,n);return l===null||typeof a<"u"&&a!==s&&(l=Ul(o,r,a,l,n),l===null)?!1:Yo(Array.from(o),[""],i,a,()=>tb(t,s,n))}function Ul(e,t,s,n,i){for(;s;)s=Z1(e,t,s,n,i);return s}function tb(e,t,s){const n=e._getTarget();t in n||(n[t]={});const i=n[t];return Ce(i)&&ae(s)?s:i||{}}function eb(e,t,s,n){let i;for(const a of t)if(i=Ou(K1(a,e),s),typeof i<"u")return Ko(e,i)?Xo(s,n,e,i):i}function Ou(e,t){for(const s of t){if(!s)continue;const n=s[e];if(typeof n<"u")return n}}function Yl(e){let t=e._keys;return t||(t=e._keys=sb(e._scopes)),t}function sb(e){const t=new Set;for(const s of e)for(const n of Object.keys(s).filter(i=>!i.startsWith("_")))t.add(n);return Array.from(t)}function Lu(e,t,s,n){const{iScale:i}=e,{key:a="r"}=this._parsing,r=new Array(n);let o,l,c,d;for(o=0,l=n;o<l;++o)c=o+s,d=t[c],r[o]={r:i.parse(kn(d,a),c)};return r}const nb=Number.EPSILON||1e-14,mi=(e,t)=>t<e.length&&!e[t].skip&&e[t],Ru=e=>e==="x"?"y":"x";function ib(e,t,s,n){const i=e.skip?t:e,a=t,r=s.skip?t:s,o=ao(a,i),l=ao(r,a);let c=o/(o+l),d=l/(o+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=n*c,f=n*d;return{previous:{x:a.x-h*(r.x-i.x),y:a.y-h*(r.y-i.y)},next:{x:a.x+f*(r.x-i.x),y:a.y+f*(r.y-i.y)}}}function ab(e,t,s){const n=e.length;let i,a,r,o,l,c=mi(e,0);for(let d=0;d<n-1;++d)if(l=c,c=mi(e,d+1),!(!l||!c)){if(Hi(t[d],0,nb)){s[d]=s[d+1]=0;continue}i=s[d]/t[d],a=s[d+1]/t[d],o=Math.pow(i,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),s[d]=i*r*t[d],s[d+1]=a*r*t[d])}}function rb(e,t,s="x"){const n=Ru(s),i=e.length;let a,r,o,l=mi(e,0);for(let c=0;c<i;++c){if(r=o,o=l,l=mi(e,c+1),!o)continue;const d=o[s],h=o[n];r&&(a=(d-r[s])/3,o[`cp1${s}`]=d-a,o[`cp1${n}`]=h-a*t[c]),l&&(a=(l[s]-d)/3,o[`cp2${s}`]=d+a,o[`cp2${n}`]=h+a*t[c])}}function ob(e,t="x"){const s=Ru(t),n=e.length,i=Array(n).fill(0),a=Array(n);let r,o,l,c=mi(e,0);for(r=0;r<n;++r)if(o=l,l=c,c=mi(e,r+1),!!l){if(c){const d=c[t]-l[t];i[r]=d!==0?(c[s]-l[s])/d:0}a[r]=o?c?Bs(i[r-1])!==Bs(i[r])?0:(i[r-1]+i[r])/2:i[r-1]:i[r]}ab(e,i,a),rb(e,a,t)}function ka(e,t,s){return Math.max(Math.min(e,s),t)}function lb(e,t){let s,n,i,a,r,o=Zs(e[0],t);for(s=0,n=e.length;s<n;++s)r=a,a=o,o=s<n-1&&Zs(e[s+1],t),a&&(i=e[s],r&&(i.cp1x=ka(i.cp1x,t.left,t.right),i.cp1y=ka(i.cp1y,t.top,t.bottom)),o&&(i.cp2x=ka(i.cp2x,t.left,t.right),i.cp2y=ka(i.cp2y,t.top,t.bottom)))}function cb(e,t,s,n,i){let a,r,o,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")ob(e,i);else{let c=n?e[e.length-1]:e[0];for(a=0,r=e.length;a<r;++a)o=e[a],l=ib(c,o,e[Math.min(a+1,r-(n?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}t.capBezierPoints&&lb(e,s)}function Go(){return typeof window<"u"&&typeof document<"u"}function Jo(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Qa(e,t,s){let n;return typeof e=="string"?(n=parseInt(e,10),e.indexOf("%")!==-1&&(n=n/100*t.parentNode[s])):n=e,n}const vr=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function db(e,t){return vr(e).getPropertyValue(t)}const ub=["top","right","bottom","left"];function qn(e,t,s){const n={};s=s?"-"+s:"";for(let i=0;i<4;i++){const a=ub[i];n[a]=parseFloat(e[t+"-"+a+s])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const hb=(e,t,s)=>(e>0||t>0)&&(!s||!s.shadowRoot);function fb(e,t){const s=e.touches,n=s&&s.length?s[0]:e,{offsetX:i,offsetY:a}=n;let r=!1,o,l;if(hb(i,a,e.target))o=i,l=a;else{const c=t.getBoundingClientRect();o=n.clientX-c.left,l=n.clientY-c.top,r=!0}return{x:o,y:l,box:r}}function Dn(e,t){if("native"in e)return e;const{canvas:s,currentDevicePixelRatio:n}=t,i=vr(s),a=i.boxSizing==="border-box",r=qn(i,"padding"),o=qn(i,"border","width"),{x:l,y:c,box:d}=fb(e,s),h=r.left+(d&&o.left),f=r.top+(d&&o.top);let{width:v,height:g}=t;return a&&(v-=r.width+o.width,g-=r.height+o.height),{x:Math.round((l-h)/v*s.width/n),y:Math.round((c-f)/g*s.height/n)}}function vb(e,t,s){let n,i;if(t===void 0||s===void 0){const a=e&&Jo(e);if(!a)t=e.clientWidth,s=e.clientHeight;else{const r=a.getBoundingClientRect(),o=vr(a),l=qn(o,"border","width"),c=qn(o,"padding");t=r.width-c.width-l.width,s=r.height-c.height-l.height,n=Qa(o.maxWidth,a,"clientWidth"),i=Qa(o.maxHeight,a,"clientHeight")}}return{width:t,height:s,maxWidth:n||Ga,maxHeight:i||Ga}}const hn=e=>Math.round(e*10)/10;function pb(e,t,s,n){const i=vr(e),a=qn(i,"margin"),r=Qa(i.maxWidth,e,"clientWidth")||Ga,o=Qa(i.maxHeight,e,"clientHeight")||Ga,l=vb(e,t,s);let{width:c,height:d}=l;if(i.boxSizing==="content-box"){const f=qn(i,"border","width"),v=qn(i,"padding");c-=v.width+f.width,d-=v.height+f.height}return c=Math.max(0,c-a.width),d=Math.max(0,n?c/n:d-a.height),c=hn(Math.min(c,r,l.maxWidth)),d=hn(Math.min(d,o,l.maxHeight)),c&&!d&&(d=hn(c/2)),(t!==void 0||s!==void 0)&&n&&l.height&&d>l.height&&(d=l.height,c=hn(Math.floor(d*n))),{width:c,height:d}}function Kl(e,t,s){const n=t||1,i=hn(e.height*n),a=hn(e.width*n);e.height=hn(e.height),e.width=hn(e.width);const r=e.canvas;return r.style&&(s||!r.style.height&&!r.style.width)&&(r.style.height=`${e.height}px`,r.style.width=`${e.width}px`),e.currentDevicePixelRatio!==n||r.height!==i||r.width!==a?(e.currentDevicePixelRatio=n,r.height=i,r.width=a,e.ctx.setTransform(n,0,0,n,0,0),!0):!1}const gb=(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Go()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e})();function Xl(e,t){const s=db(e,t),n=s&&s.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function On(e,t,s,n){return{x:e.x+s*(t.x-e.x),y:e.y+s*(t.y-e.y)}}function mb(e,t,s,n){return{x:e.x+s*(t.x-e.x),y:n==="middle"?s<.5?e.y:t.y:n==="after"?s<1?e.y:t.y:s>0?t.y:e.y}}function _b(e,t,s,n){const i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},r=On(e,i,s),o=On(i,a,s),l=On(a,t,s),c=On(r,o,s),d=On(o,l,s);return On(c,d,s)}const bb=function(e,t){return{x(s){return e+e+t-s},setWidth(s){t=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,n){return s-n},leftForLtr(s,n){return s-n}}},yb=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ni(e,t,s){return e?bb(t,s):yb()}function Iu(e,t){let s,n;(t==="ltr"||t==="rtl")&&(s=e.canvas.style,n=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",t,"important"),e.prevTextDirection=n)}function ju(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Nu(e){return e==="angle"?{between:Qi,compare:x1,normalize:ss}:{between:Js,compare:(t,s)=>t-s,normalize:t=>t}}function Gl({start:e,end:t,count:s,loop:n,style:i}){return{start:e%s,end:t%s,loop:n&&(t-e+1)%s===0,style:i}}function xb(e,t,s){const{property:n,start:i,end:a}=s,{between:r,normalize:o}=Nu(n),l=t.length;let{start:c,end:d,loop:h}=e,f,v;if(h){for(c+=l,d+=l,f=0,v=l;f<v&&r(o(t[c%l][n]),i,a);++f)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:e.style}}function Fu(e,t,s){if(!s)return[e];const{property:n,start:i,end:a}=s,r=t.length,{compare:o,between:l,normalize:c}=Nu(n),{start:d,end:h,loop:f,style:v}=xb(e,t,s),g=[];let m=!1,b=null,y,S,k;const $=()=>l(i,k,y)&&o(i,k)!==0,w=()=>o(a,y)===0||l(a,k,y),P=()=>m||$(),z=()=>!m||w();for(let C=d,T=d;C<=h;++C)S=t[C%r],!S.skip&&(y=c(S[n]),y!==k&&(m=l(y,i,a),b===null&&P()&&(b=o(y,i)===0?C:T),b!==null&&z()&&(g.push(Gl({start:b,end:C,loop:f,count:r,style:v})),b=null),T=C,k=y));return b!==null&&g.push(Gl({start:b,end:h,loop:f,count:r,style:v})),g}function Bu(e,t){const s=[],n=e.segments;for(let i=0;i<n.length;i++){const a=Fu(n[i],e.points,t);a.length&&s.push(...a)}return s}function kb(e,t,s,n){let i=0,a=t-1;if(s&&!n)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,s&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function wb(e,t,s,n){const i=e.length,a=[];let r=t,o=e[t],l;for(l=t+1;l<=s;++l){const c=e[l%i];c.skip||c.stop?o.skip||(n=!1,a.push({start:t%i,end:(l-1)%i,loop:n}),t=r=c.stop?l:null):(r=l,o.skip&&(t=l)),o=c}return r!==null&&a.push({start:t%i,end:r%i,loop:n}),a}function $b(e,t){const s=e.points,n=e.options.spanGaps,i=s.length;if(!i)return[];const a=!!e._loop,{start:r,end:o}=kb(s,i,a,n);if(n===!0)return Jl(e,[{start:r,end:o,loop:a}],s,t);const l=o<r?o+i:o,c=!!e._fullLoop&&r===0&&o===i-1;return Jl(e,wb(s,r,l,c),s,t)}function Jl(e,t,s,n){return!n||!n.setContext||!s?t:Sb(e,t,s,n)}function Sb(e,t,s,n){const i=e._chart.getContext(),a=Ql(e.options),{_datasetIndex:r,options:{spanGaps:o}}=e,l=s.length,c=[];let d=a,h=t[0].start,f=h;function v(g,m,b,y){const S=o?-1:1;if(g!==m){for(g+=l;s[g%l].skip;)g-=S;for(;s[m%l].skip;)m+=S;g%l!==m%l&&(c.push({start:g%l,end:m%l,loop:b,style:y}),d=y,h=m%l)}}for(const g of t){h=o?h:g.start;let m=s[h%l],b;for(f=h+1;f<=g.end;f++){const y=s[f%l];b=Ql(n.setContext($n(i,{type:"segment",p0:m,p1:y,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:r}))),Mb(b,d)&&v(h,f-1,g.loop,d),m=y,d=b}h<f-1&&v(h,f-1,g.loop,d)}return c}function Ql(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Mb(e,t){if(!t)return!1;const s=[],n=function(i,a){return Wo(a)?(s.includes(a)||s.push(a),s.indexOf(a)):a};return JSON.stringify(e,n)!==JSON.stringify(t,n)}function wa(e,t,s){return e.options.clip?e[s]:t[s]}function Pb(e,t){const{xScale:s,yScale:n}=e;return s&&n?{left:wa(s,t,"left"),right:wa(s,t,"right"),top:wa(n,t,"top"),bottom:wa(n,t,"bottom")}:t}function qu(e,t){const s=t._clip;if(s.disabled)return!1;const n=Pb(t,e.chartArea);return{left:s.left===!1?0:n.left-(s.left===!0?0:s.left),right:s.right===!1?e.width:n.right+(s.right===!0?0:s.right),top:s.top===!1?0:n.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?e.height:n.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Ab{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,s,n,i){const a=s.listeners[i],r=s.duration;a.forEach(o=>o({chart:t,initial:s.initial,numSteps:r,currentStep:Math.min(n-s.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=$u.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let s=0;this._charts.forEach((n,i)=>{if(!n.running||!n.items.length)return;const a=n.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(i.draw(),this._notify(i,n,t,"progress")),a.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),s+=a.length}),this._lastDate=t,s===0&&(this._running=!1)}_getAnims(t){const s=this._charts;let n=s.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(t,n)),n}listen(t,s,n){this._getAnims(t).listeners[s].push(n)}add(t,s){!s||!s.length||this._getAnims(t).items.push(...s)}has(t){return this._getAnims(t).items.length>0}start(t){const s=this._charts.get(t);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((n,i)=>Math.max(n,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const s=this._charts.get(t);return!(!s||!s.running||!s.items.length)}stop(t){const s=this._charts.get(t);if(!s||!s.items.length)return;const n=s.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();s.items=[],this._notify(t,s,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ws=new Ab;const Zl="transparent",Cb={boolean(e,t,s){return s>.5?t:e},color(e,t,s){const n=Vl(e||Zl),i=n.valid&&Vl(t||Zl);return i&&i.valid?i.mix(n,s).hexString():t},number(e,t,s){return e+(t-e)*s}};class zb{constructor(t,s,n,i){const a=s[n];i=Li([t.to,i,a,t.from]);const r=Li([t.from,a,i]);this._active=!0,this._fn=t.fn||Cb[t.type||typeof r],this._easing=Wi[t.easing]||Wi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=s,this._prop=n,this._from=r,this._to=i,this._promises=void 0}active(){return this._active}update(t,s,n){if(this._active){this._notify(!1);const i=this._target[this._prop],a=n-this._start,r=this._duration-a;this._start=n,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=Li([t.to,s,i,t.from]),this._from=Li([t.from,i,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const s=t-this._start,n=this._duration,i=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||s<n),!this._active){this._target[i]=o,this._notify(!0);return}if(s<0){this._target[i]=a;return}l=s/n%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((s,n)=>{t.push({res:s,rej:n})})}_notify(t){const s=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][s]()}}class Vu{constructor(t,s){this._chart=t,this._properties=new Map,this.configure(s)}configure(t){if(!ae(t))return;const s=Object.keys(ze.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const a=t[i];if(!ae(a))return;const r={};for(const o of s)r[o]=a[o];(Ce(a.properties)&&a.properties||[i]).forEach(o=>{(o===i||!n.has(o))&&n.set(o,r)})})}_animateOptions(t,s){const n=s.options,i=Eb(t,n);if(!i)return[];const a=this._createAnimations(i,n);return n.$shared&&Tb(t.options.$animations,n).then(()=>{t.options=n},()=>{}),a}_createAnimations(t,s){const n=this._properties,i=[],a=t.$animations||(t.$animations={}),r=Object.keys(s),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,s));continue}const d=s[c];let h=a[c];const f=n.get(c);if(h)if(f&&h.active()){h.update(f,d,o);continue}else h.cancel();if(!f||!f.duration){t[c]=d;continue}a[c]=h=new zb(f,t,c,d),i.push(h)}return i}update(t,s){if(this._properties.size===0){Object.assign(t,s);return}const n=this._createAnimations(t,s);if(n.length)return Ws.add(this._chart,n),!0}}function Tb(e,t){const s=[],n=Object.keys(t);for(let i=0;i<n.length;i++){const a=e[n[i]];a&&a.active()&&s.push(a.wait())}return Promise.all(s)}function Eb(e,t){if(!t)return;let s=e.options;if(!s){e.options=t;return}return s.$shared&&(e.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function tc(e,t){const s=e&&e.options||{},n=s.reverse,i=s.min===void 0?t:0,a=s.max===void 0?t:0;return{start:n?a:i,end:n?i:a}}function Db(e,t,s){if(s===!1)return!1;const n=tc(e,s),i=tc(t,s);return{top:i.end,right:n.end,bottom:i.start,left:n.start}}function Ob(e){let t,s,n,i;return ae(e)?(t=e.top,s=e.right,n=e.bottom,i=e.left):t=s=n=i=e,{top:t,right:s,bottom:n,left:i,disabled:e===!1}}function Hu(e,t){const s=[],n=e._getSortedDatasetMetas(t);let i,a;for(i=0,a=n.length;i<a;++i)s.push(n[i].index);return s}function ec(e,t,s,n={}){const i=e.keys,a=n.mode==="single";let r,o,l,c;if(t===null)return;let d=!1;for(r=0,o=i.length;r<o;++r){if(l=+i[r],l===s){if(d=!0,n.all)continue;break}c=e.values[l],Re(c)&&(a||t===0||Bs(t)===Bs(c))&&(t+=c)}return!d&&!n.all?0:t}function Lb(e,t){const{iScale:s,vScale:n}=t,i=s.axis==="x"?"x":"y",a=n.axis==="x"?"x":"y",r=Object.keys(e),o=new Array(r.length);let l,c,d;for(l=0,c=r.length;l<c;++l)d=r[l],o[l]={[i]:d,[a]:e[d]};return o}function Tr(e,t){const s=e&&e.options.stacked;return s||s===void 0&&t.stack!==void 0}function Rb(e,t,s){return`${e.id}.${t.id}.${s.stack||s.type}`}function Ib(e){const{min:t,max:s,minDefined:n,maxDefined:i}=e.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:i?s:Number.POSITIVE_INFINITY}}function jb(e,t,s){const n=e[t]||(e[t]={});return n[s]||(n[s]={})}function sc(e,t,s,n){for(const i of t.getMatchingVisibleMetas(n).reverse()){const a=e[i.index];if(s&&a>0||!s&&a<0)return i.index}return null}function nc(e,t){const{chart:s,_cachedMeta:n}=e,i=s._stacks||(s._stacks={}),{iScale:a,vScale:r,index:o}=n,l=a.axis,c=r.axis,d=Rb(a,r,n),h=t.length;let f;for(let v=0;v<h;++v){const g=t[v],{[l]:m,[c]:b}=g,y=g._stacks||(g._stacks={});f=y[c]=jb(i,d,m),f[o]=b,f._top=sc(f,r,!0,n.type),f._bottom=sc(f,r,!1,n.type);const S=f._visualValues||(f._visualValues={});S[o]=b}}function Er(e,t){const s=e.scales;return Object.keys(s).filter(n=>s[n].axis===t).shift()}function Nb(e,t){return $n(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Fb(e,t,s){return $n(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:s,index:t,mode:"default",type:"data"})}function Pi(e,t){const s=e.controller.index,n=e.vScale&&e.vScale.axis;if(n){t=t||e._parsed;for(const i of t){const a=i._stacks;if(!a||a[n]===void 0||a[n][s]===void 0)return;delete a[n][s],a[n]._visualValues!==void 0&&a[n]._visualValues[s]!==void 0&&delete a[n]._visualValues[s]}}}const Dr=e=>e==="reset"||e==="none",ic=(e,t)=>t?e:Object.assign({},e),Bb=(e,t,s)=>e&&!t.hidden&&t._stacked&&{keys:Hu(s,!0),values:null};class Sn{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,s){this.chart=t,this._ctx=t.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Tr(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Pi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,s=this._cachedMeta,n=this.getDataset(),i=(h,f,v,g)=>h==="x"?f:h==="r"?g:v,a=s.xAxisID=Ut(n.xAxisID,Er(t,"x")),r=s.yAxisID=Ut(n.yAxisID,Er(t,"y")),o=s.rAxisID=Ut(n.rAxisID,Er(t,"r")),l=s.indexAxis,c=s.iAxisID=i(l,a,r,o),d=s.vAxisID=i(l,r,a,o);s.xScale=this.getScaleForId(a),s.yScale=this.getScaleForId(r),s.rScale=this.getScaleForId(o),s.iScale=this.getScaleForId(c),s.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const s=this._cachedMeta;return t===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Fl(this._data,this),t._stacked&&Pi(t)}_dataCheck(){const t=this.getDataset(),s=t.data||(t.data=[]),n=this._data;if(ae(s)){const i=this._cachedMeta;this._data=Lb(s,i)}else if(n!==s){if(n){Fl(n,this);const i=this._cachedMeta;Pi(i),i._parsed=[]}s&&Object.isExtensible(s)&&S1(s,this),this._syncList=[],this._data=s}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const s=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const a=s._stacked;s._stacked=Tr(s.vScale,s),s.stack!==n.stack&&(i=!0,Pi(s),s.stack=n.stack),this._resyncElements(t),(i||a!==s._stacked)&&(nc(this,s._parsed),s._stacked=Tr(s.vScale,s))}configure(){const t=this.chart.config,s=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),s,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,s){const{_cachedMeta:n,_data:i}=this,{iScale:a,_stacked:r}=n,o=a.axis;let l=t===0&&s===i.length?!0:n._sorted,c=t>0&&n._parsed[t-1],d,h,f;if(this._parsing===!1)n._parsed=i,n._sorted=!0,f=i;else{Ce(i[t])?f=this.parseArrayData(n,i,t,s):ae(i[t])?f=this.parseObjectData(n,i,t,s):f=this.parsePrimitiveData(n,i,t,s);const v=()=>h[o]===null||c&&h[o]<c[o];for(d=0;d<s;++d)n._parsed[d+t]=h=f[d],l&&(v()&&(l=!1),c=h);n._sorted=l}r&&nc(this,f)}parsePrimitiveData(t,s,n,i){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,c=a.getLabels(),d=a===r,h=new Array(i);let f,v,g;for(f=0,v=i;f<v;++f)g=f+n,h[f]={[o]:d||a.parse(c[g],g),[l]:r.parse(s[g],g)};return h}parseArrayData(t,s,n,i){const{xScale:a,yScale:r}=t,o=new Array(i);let l,c,d,h;for(l=0,c=i;l<c;++l)d=l+n,h=s[d],o[l]={x:a.parse(h[0],d),y:r.parse(h[1],d)};return o}parseObjectData(t,s,n,i){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let d,h,f,v;for(d=0,h=i;d<h;++d)f=d+n,v=s[f],c[d]={x:a.parse(kn(v,o),f),y:r.parse(kn(v,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,s,n){const i=this.chart,a=this._cachedMeta,r=s[t.axis],o={keys:Hu(i,!0),values:s._stacks[t.axis]._visualValues};return ec(o,r,a.index,{mode:n})}updateRangeFromParsed(t,s,n,i){const a=n[s.axis];let r=a===null?NaN:a;const o=i&&n._stacks[s.axis];i&&o&&(i.values=o,r=ec(i,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,s){const n=this._cachedMeta,i=n._parsed,a=n._sorted&&t===n.iScale,r=i.length,o=this._getOtherScale(t),l=Bb(s,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=Ib(o);let f,v;function g(){v=i[f];const m=v[o.axis];return!Re(v[t.axis])||d>m||h<m}for(f=0;f<r&&!(!g()&&(this.updateRangeFromParsed(c,t,v,l),a));++f);if(a){for(f=r-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(c,t,v,l);break}}return c}getAllParsedValues(t){const s=this._cachedMeta._parsed,n=[];let i,a,r;for(i=0,a=s.length;i<a;++i)r=s[i][t.axis],Re(r)&&n.push(r);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const s=this._cachedMeta,n=s.iScale,i=s.vScale,a=this.getParsed(t);return{label:n?""+n.getLabelForValue(a[n.axis]):"",value:i?""+i.getLabelForValue(a[i.axis]):""}}_update(t){const s=this._cachedMeta;this.update(t||"default"),s._clip=Ob(Ut(this.options.clip,Db(s.xScale,s.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,s=this.chart,n=this._cachedMeta,i=n.data||[],a=s.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||i.length-o,c=this.options.drawActiveElementsOnTop;let d;for(n.dataset&&n.dataset.draw(t,a,o,l),d=o;d<o+l;++d){const h=i[d];h.hidden||(h.active&&c?r.push(h):h.draw(t,a))}for(d=0;d<r.length;++d)r[d].draw(t,a)}getStyle(t,s){const n=s?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,s,n){const i=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=Fb(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=i.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Nb(this.chart.getContext(),this.index)),a.dataset=i,a.index=a.datasetIndex=this.index;return a.active=!!s,a.mode=n,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,s){return this._resolveElementOptions(this.dataElementType.id,s,t)}_resolveElementOptions(t,s="default",n){const i=s==="active",a=this._cachedDataOpts,r=t+"-"+s,o=a[r],l=this.enableOptionSharing&&Ji(n);if(o)return ic(o,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),d),v=Object.keys(ze.elements[t]),g=()=>this.getContext(n,i,s),m=c.resolveNamedOptions(f,v,g,h);return m.$shared&&(m.$shared=l,a[r]=Object.freeze(ic(m,l))),m}_resolveAnimations(t,s,n){const i=this.chart,a=this._cachedDataOpts,r=`animation-${s}`,o=a[r];if(o)return o;let l;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,s),f=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(f,this.getContext(t,n,s))}const c=new Vu(i,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,s){return!s||Dr(t)||this.chart._animationsDisabled}_getSharedOptions(t,s){const n=this.resolveDataElementOptions(t,s),i=this._sharedOptions,a=this.getSharedOptions(n),r=this.includeOptions(s,a)||a!==i;return this.updateSharedOptions(a,s,n),{sharedOptions:a,includeOptions:r}}updateElement(t,s,n,i){Dr(i)?Object.assign(t,n):this._resolveAnimations(s,i).update(t,n)}updateSharedOptions(t,s,n){t&&!Dr(s)&&this._resolveAnimations(void 0,s).update(t,n)}_setStyle(t,s,n,i){t.active=i;const a=this.getStyle(s,i);this._resolveAnimations(s,n,i).update(t,{options:!i&&this.getSharedOptions(a)||a})}removeHoverStyle(t,s,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,s,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const s=this._data,n=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const i=n.length,a=s.length,r=Math.min(a,i);r&&this.parse(0,r),a>i?this._insertElements(i,a-i,t):a<i&&this._removeElements(a,i-a)}_insertElements(t,s,n=!0){const i=this._cachedMeta,a=i.data,r=t+s;let o;const l=c=>{for(c.length+=s,o=c.length-1;o>=r;o--)c[o]=c[o-s]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,s),n&&this.updateElements(a,t,s,"reset")}updateElements(t,s,n,i){}_removeElements(t,s){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,s);n._stacked&&Pi(n,i)}n.data.splice(t,s)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[s,n,i]=t;this[s](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,s){s&&this._sync(["_removeElements",t,s]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function qb(e,t){if(!e._cache.$bar){const s=e.getMatchingVisibleMetas(t);let n=[];for(let i=0,a=s.length;i<a;i++)n=n.concat(s[i].controller.getAllParsedValues(e));e._cache.$bar=wu(n.sort((i,a)=>i-a))}return e._cache.$bar}function Vb(e){const t=e.iScale,s=qb(t,e.type);let n=t._length,i,a,r,o;const l=()=>{r===32767||r===-32768||(Ji(o)&&(n=Math.min(n,Math.abs(r-o)||n)),o=r)};for(i=0,a=s.length;i<a;++i)r=t.getPixelForValue(s[i]),l();for(o=void 0,i=0,a=t.ticks.length;i<a;++i)r=t.getPixelForTick(i),l();return n}function Hb(e,t,s,n){const i=s.barThickness;let a,r;return ne(i)?(a=t.min*s.categoryPercentage,r=s.barPercentage):(a=i*n,r=1),{chunk:a/n,ratio:r,start:t.pixels[e]-a/2}}function Wb(e,t,s,n){const i=t.pixels,a=i[e];let r=e>0?i[e-1]:null,o=e<i.length-1?i[e+1]:null;const l=s.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const c=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/n,ratio:s.barPercentage,start:c}}function Ub(e,t,s,n){const i=s.parse(e[0],n),a=s.parse(e[1],n),r=Math.min(i,a),o=Math.max(i,a);let l=r,c=o;Math.abs(r)>Math.abs(o)&&(l=o,c=r),t[s.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:a,min:r,max:o}}function Wu(e,t,s,n){return Ce(e)?Ub(e,t,s,n):t[s.axis]=s.parse(e,n),t}function ac(e,t,s,n){const i=e.iScale,a=e.vScale,r=i.getLabels(),o=i===a,l=[];let c,d,h,f;for(c=s,d=s+n;c<d;++c)f=t[c],h={},h[i.axis]=o||i.parse(r[c],c),l.push(Wu(f,h,a,c));return l}function Or(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Yb(e,t,s){return e!==0?Bs(e):(t.isHorizontal()?1:-1)*(t.min>=s?1:-1)}function Kb(e){let t,s,n,i,a;return e.horizontal?(t=e.base>e.x,s="left",n="right"):(t=e.base<e.y,s="bottom",n="top"),t?(i="end",a="start"):(i="start",a="end"),{start:s,end:n,reverse:t,top:i,bottom:a}}function Xb(e,t,s,n){let i=t.borderSkipped;const a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:c,bottom:d}=Kb(e);i==="middle"&&s&&(e.enableBorderRadius=!0,(s._top||0)===n?i=c:(s._bottom||0)===n?i=d:(a[rc(d,r,o,l)]=!0,i=c)),a[rc(i,r,o,l)]=!0,e.borderSkipped=a}function rc(e,t,s,n){return n?(e=Gb(e,t,s),e=oc(e,s,t)):e=oc(e,t,s),e}function Gb(e,t,s){return e===t?s:e===s?t:e}function oc(e,t,s){return e==="start"?t:e==="end"?s:e}function Jb(e,{inflateAmount:t},s){e.inflateAmount=t==="auto"?s===1?.33:0:t}class Qb extends Sn{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,s,n,i){return ac(t,s,n,i)}parseArrayData(t,s,n,i){return ac(t,s,n,i)}parseObjectData(t,s,n,i){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?o:l,d=r.axis==="x"?o:l,h=[];let f,v,g,m;for(f=n,v=n+i;f<v;++f)m=s[f],g={},g[a.axis]=a.parse(kn(m,c),f),h.push(Wu(kn(m,d),g,r,f));return h}updateRangeFromParsed(t,s,n,i){super.updateRangeFromParsed(t,s,n,i);const a=n._custom;a&&s===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const s=this._cachedMeta,{iScale:n,vScale:i}=s,a=this.getParsed(t),r=a._custom,o=Or(r)?"["+r.start+", "+r.end+"]":""+i.getLabelForValue(a[i.axis]);return{label:""+n.getLabelForValue(a[n.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,t)}updateElements(t,s,n,i){const a=i==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),c=o.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(s,i);for(let v=s;v<s+n;v++){const g=this.getParsed(v),m=a||ne(g[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(v),b=this._calculateBarIndexPixels(v,d),y=(g._stacks||{})[o.axis],S={horizontal:c,base:m.base,enableBorderRadius:!y||Or(g._custom)||r===y._top||r===y._bottom,x:c?m.head:b.center,y:c?b.center:m.head,height:c?b.size:Math.abs(m.size),width:c?Math.abs(m.size):b.size};f&&(S.options=h||this.resolveDataElementOptions(v,t[v].active?"active":i));const k=S.options||t[v].options;Xb(S,k,y,r),Jb(S,k,d.ratio),this.updateElement(t[v],v,S,i)}}_getStacks(t,s){const{iScale:n}=this._cachedMeta,i=n.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),a=n.options.stacked,r=[],o=this._cachedMeta.controller.getParsed(s),l=o&&o[n.axis],c=d=>{const h=d._parsed.find(v=>v[n.axis]===l),f=h&&h[d.vScale.axis];if(ne(f)||isNaN(f))return!0};for(const d of i)if(!(s!==void 0&&c(d))&&((a===!1||r.indexOf(d.stack)===-1||a===void 0&&d.stack===void 0)&&r.push(d.stack),d.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(t).filter(n=>t[n].axis===s).shift()}_getAxis(){const t={},s=this.getFirstScaleIdForIndexAxis();for(const n of this.chart.data.datasets)t[Ut(this.chart.options.indexAxis==="x"?n.xAxisID:n.yAxisID,s)]=!0;return Object.keys(t)}_getStackIndex(t,s,n){const i=this._getStacks(t,n),a=s!==void 0?i.indexOf(s):-1;return a===-1?i.length-1:a}_getRuler(){const t=this.options,s=this._cachedMeta,n=s.iScale,i=[];let a,r;for(a=0,r=s.data.length;a<r;++a)i.push(n.getPixelForValue(this.getParsed(a)[n.axis],a));const o=t.barThickness;return{min:o||Vb(s),pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:s,_stacked:n,index:i},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),c=l._custom,d=Or(c);let h=l[s.axis],f=0,v=n?this.applyStack(s,l,n):h,g,m;v!==h&&(f=v-h,v=h),d&&(h=c.barStart,v=c.barEnd-c.barStart,h!==0&&Bs(h)!==Bs(c.barEnd)&&(f=0),f+=h);const b=!ne(a)&&!d?a:f;let y=s.getPixelForValue(b);if(this.chart.getDataVisibility(t)?g=s.getPixelForValue(f+v):g=y,m=g-y,Math.abs(m)<r){m=Yb(m,s,o)*r,h===o&&(y-=m/2);const S=s.getPixelForDecimal(0),k=s.getPixelForDecimal(1),$=Math.min(S,k),w=Math.max(S,k);y=Math.max(Math.min(y,w),$),g=y+m,n&&!d&&(l._stacks[s.axis]._visualValues[i]=s.getValueForPixel(g)-s.getValueForPixel(y))}if(y===s.getPixelForValue(o)){const S=Bs(m)*s.getLineWidthForValue(o)/2;y+=S,m-=S}return{size:m,base:y,head:g,center:g+m/2}}_calculateBarIndexPixels(t,s){const n=s.scale,i=this.options,a=i.skipNull,r=Ut(i.maxBarThickness,1/0);let o,l;const c=this._getAxisCount();if(s.grouped){const d=a?this._getStackCount(t):s.stackCount,h=i.barThickness==="flex"?Wb(t,s,i,d*c):Hb(t,s,i,d*c),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,v=this._getAxis().indexOf(Ut(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+v;o=h.start+h.chunk*g+h.chunk/2,l=Math.min(r,h.chunk*h.ratio)}else o=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(r,s.min*s.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,s=t.vScale,n=t.data,i=n.length;let a=0;for(;a<i;++a)this.getParsed(a)[s.axis]!==null&&!n[a].hidden&&n[a].draw(this._ctx)}}class Zb extends Sn{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,s,n,i){const a=super.parsePrimitiveData(t,s,n,i);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+n).radius;return a}parseArrayData(t,s,n,i){const a=super.parseArrayData(t,s,n,i);for(let r=0;r<a.length;r++){const o=s[n+r];a[r]._custom=Ut(o[2],this.resolveDataElementOptions(r+n).radius)}return a}parseObjectData(t,s,n,i){const a=super.parseObjectData(t,s,n,i);for(let r=0;r<a.length;r++){const o=s[n+r];a[r]._custom=Ut(o&&o.r&&+o.r,this.resolveDataElementOptions(r+n).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let s=0;for(let n=t.length-1;n>=0;--n)s=Math.max(s,t[n].size(this.resolveDataElementOptions(n))/2);return s>0&&s}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=s,r=this.getParsed(t),o=i.getLabelForValue(r.x),l=a.getLabelForValue(r.y),c=r._custom;return{label:n[t]||"",value:"("+o+", "+l+(c?", "+c:"")+")"}}update(t){const s=this._cachedMeta.data;this.updateElements(s,0,s.length,t)}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(s,i),d=r.axis,h=o.axis;for(let f=s;f<s+n;f++){const v=t[f],g=!a&&this.getParsed(f),m={},b=m[d]=a?r.getPixelForDecimal(.5):r.getPixelForValue(g[d]),y=m[h]=a?o.getBasePixel():o.getPixelForValue(g[h]);m.skip=isNaN(b)||isNaN(y),c&&(m.options=l||this.resolveDataElementOptions(f,v.active?"active":i),a&&(m.options.radius=0)),this.updateElement(v,f,m,i)}}resolveDataElementOptions(t,s){const n=this.getParsed(t);let i=super.resolveDataElementOptions(t,s);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const a=i.radius;return s!=="active"&&(i.radius=0),i.radius+=Ut(n&&n._custom,a),i}}function t0(e,t,s){let n=1,i=1,a=0,r=0;if(t<Me){const o=e,l=o+t,c=Math.cos(o),d=Math.sin(o),h=Math.cos(l),f=Math.sin(l),v=(k,$,w)=>Qi(k,o,l,!0)?1:Math.max($,$*s,w,w*s),g=(k,$,w)=>Qi(k,o,l,!0)?-1:Math.min($,$*s,w,w*s),m=v(0,c,h),b=v(je,d,f),y=g(pe,c,h),S=g(pe+je,d,f);n=(m-y)/2,i=(b-S)/2,a=-(m+y)/2,r=-(b+S)/2}return{ratioX:n,ratioY:i,offsetX:a,offsetY:r}}class Qo extends Sn{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data,{labels:{pointStyle:n,textAlign:i,color:a,useBorderRadius:r,borderRadius:o}}=t.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((l,c)=>{const h=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:h.backgroundColor,fontColor:a,hidden:!t.getDataVisibility(c),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:n,borderRadius:r&&(o||h.borderRadius),index:c}}):[]}},onClick(t,s,n){n.chart.toggleDataVisibility(s.index),n.chart.update()}}}};constructor(t,s){super(t,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,s){const n=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=n;else{let a=l=>+n[l];if(ae(n[t])){const{key:l="value"}=this._parsing;a=c=>+kn(n[c],l)}let r,o;for(r=t,o=t+s;r<o;++r)i._parsed[r]=a(r)}}_getRotation(){return Cs(this.options.rotation-90)}_getCircumference(){return Cs(this.options.circumference)}_getRotationExtents(){let t=Me,s=-Me;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const i=this.chart.getDatasetMeta(n).controller,a=i._getRotation(),r=i._getCircumference();t=Math.min(t,a),s=Math.max(s,a+r)}return{rotation:t,circumference:s-t}}update(t){const s=this.chart,{chartArea:n}=s,i=this._cachedMeta,a=i.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(n.width,n.height)-r)/2,0),l=Math.min(d1(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:v,offsetX:g,offsetY:m}=t0(h,d,l),b=(n.width-r)/f,y=(n.height-r)/v,S=Math.max(Math.min(b,y)/2,0),k=_u(this.options.radius,S),$=Math.max(k*l,0),w=(k-$)/this._getVisibleDatasetWeightTotal();this.offsetX=g*k,this.offsetY=m*k,i.total=this.calculateTotal(),this.outerRadius=k-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,s){const n=this.options,i=this._cachedMeta,a=this._getCircumference();return s&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*a/Me)}updateElements(t,s,n,i){const a=i==="reset",r=this.chart,o=r.chartArea,c=r.options.animation,d=(o.left+o.right)/2,h=(o.top+o.bottom)/2,f=a&&c.animateScale,v=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:m,includeOptions:b}=this._getSharedOptions(s,i);let y=this._getRotation(),S;for(S=0;S<s;++S)y+=this._circumference(S,a);for(S=s;S<s+n;++S){const k=this._circumference(S,a),$=t[S],w={x:d+this.offsetX,y:h+this.offsetY,startAngle:y,endAngle:y+k,circumference:k,outerRadius:g,innerRadius:v};b&&(w.options=m||this.resolveDataElementOptions(S,$.active?"active":i)),y+=k,this.updateElement($,S,w,i)}}calculateTotal(){const t=this._cachedMeta,s=t.data;let n=0,i;for(i=0;i<s.length;i++){const a=t._parsed[i];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(i)&&!s[i].hidden&&(n+=Math.abs(a))}return n}calculateCircumference(t){const s=this._cachedMeta.total;return s>0&&!isNaN(t)?Me*(Math.abs(t)/s):0}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=da(s._parsed[t],n.options.locale);return{label:i[t]||"",value:a}}getMaxBorderWidth(t){let s=0;const n=this.chart;let i,a,r,o,l;if(!t){for(i=0,a=n.data.datasets.length;i<a;++i)if(n.isDatasetVisible(i)){r=n.getDatasetMeta(i),t=r.data,o=r.controller;break}}if(!t)return 0;for(i=0,a=t.length;i<a;++i)l=o.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(s=Math.max(s,l.borderWidth||0,l.hoverBorderWidth||0));return s}getMaxOffset(t){let s=0;for(let n=0,i=t.length;n<i;++n){const a=this.resolveDataElementOptions(n);s=Math.max(s,a.offset||0,a.hoverOffset||0)}return s}_getRingWeightOffset(t){let s=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(s+=this._getRingWeight(n));return s}_getRingWeight(t){return Math.max(Ut(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class e0 extends Sn{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const s=this._cachedMeta,{dataset:n,data:i=[],_dataset:a}=s,r=this.chart._animationsDisabled;let{start:o,count:l}=Mu(s,i,r);this._drawStart=o,this._drawCount=l,Pu(s)&&(o=0,l=i.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!a._decimated,n.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!r,options:c},t),this.updateElements(i,o,l,t)}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(s,i),f=r.axis,v=o.axis,{spanGaps:g,segment:m}=this.options,b=pi(g)?g:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||a||i==="none",S=s+n,k=t.length;let $=s>0&&this.getParsed(s-1);for(let w=0;w<k;++w){const P=t[w],z=y?P:{};if(w<s||w>=S){z.skip=!0;continue}const C=this.getParsed(w),T=ne(C[v]),E=z[f]=r.getPixelForValue(C[f],w),R=z[v]=a||T?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,C,l):C[v],w);z.skip=isNaN(E)||isNaN(R)||T,z.stop=w>0&&Math.abs(C[f]-$[f])>b,m&&(z.parsed=C,z.raw=c.data[w]),h&&(z.options=d||this.resolveDataElementOptions(w,P.active?"active":i)),y||this.updateElement(P,w,z,i),$=C}}getMaxOverflow(){const t=this._cachedMeta,s=t.dataset,n=s.options&&s.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const a=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class Uu extends Sn{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data;if(s.labels.length&&s.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return s.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,s,n){n.chart.toggleDataVisibility(s.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,s){super(t,s),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=da(s._parsed[t].r,n.options.locale);return{label:i[t]||"",value:a}}parseObjectData(t,s,n,i){return Lu.bind(this)(t,s,n,i)}update(t){const s=this._cachedMeta.data;this._updateRadius(),this.updateElements(s,0,s.length,t)}getMinMax(){const t=this._cachedMeta,s={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,i)=>{const a=this.getParsed(i).r;!isNaN(a)&&this.chart.getDataVisibility(i)&&(a<s.min&&(s.min=a),a>s.max&&(s.max=a))}),s}_updateRadius(){const t=this.chart,s=t.chartArea,n=t.options,i=Math.min(s.right-s.left,s.bottom-s.top),a=Math.max(i/2,0),r=Math.max(n.cutoutPercentage?a/100*n.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,s,n,i){const a=i==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,h=c.yCenter,f=c.getIndexAngle(0)-.5*pe;let v=f,g;const m=360/this.countVisibleElements();for(g=0;g<s;++g)v+=this._computeAngle(g,i,m);for(g=s;g<s+n;g++){const b=t[g];let y=v,S=v+this._computeAngle(g,i,m),k=r.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;v=S,a&&(l.animateScale&&(k=0),l.animateRotate&&(y=S=f));const $={x:d,y:h,innerRadius:0,outerRadius:k,startAngle:y,endAngle:S,options:this.resolveDataElementOptions(g,b.active?"active":i)};this.updateElement(b,g,$,i)}}countVisibleElements(){const t=this._cachedMeta;let s=0;return t.data.forEach((n,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&s++}),s}_computeAngle(t,s,n){return this.chart.getDataVisibility(t)?Cs(this.resolveDataElementOptions(t,s).angle||n):0}}class s0 extends Qo{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class n0 extends Sn{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const s=this._cachedMeta.vScale,n=this.getParsed(t);return{label:s.getLabels()[t],value:""+s.getLabelForValue(n[s.axis])}}parseObjectData(t,s,n,i){return Lu.bind(this)(t,s,n,i)}update(t){const s=this._cachedMeta,n=s.dataset,i=s.data||[],a=s.iScale.getLabels();if(n.points=i,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===i.length,options:r};this.updateElement(n,void 0,o,t)}this.updateElements(i,0,i.length,t)}updateElements(t,s,n,i){const a=this._cachedMeta.rScale,r=i==="reset";for(let o=s;o<s+n;o++){const l=t[o],c=this.resolveDataElementOptions(o,l.active?"active":i),d=a.getPointPositionForValue(o,this.getParsed(o).r),h=r?a.xCenter:d.x,f=r?a.yCenter:d.y,v={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:c};this.updateElement(l,o,v,i)}}}class i0 extends Sn{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const s=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=s,r=this.getParsed(t),o=i.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:n[t]||"",value:"("+o+", "+l+")"}}update(t){const s=this._cachedMeta,{data:n=[]}=s,i=this.chart._animationsDisabled;let{start:a,count:r}=Mu(s,n,i);if(this._drawStart=a,this._drawCount=r,Pu(s)&&(a=0,r=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=s;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=n;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(o,void 0,{animated:!i,options:c},t)}else this.datasetElementType&&(delete s.dataset,this.datasetElementType=!1);this.updateElements(n,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(s,i),h=this.getSharedOptions(d),f=this.includeOptions(i,h),v=r.axis,g=o.axis,{spanGaps:m,segment:b}=this.options,y=pi(m)?m:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||a||i==="none";let k=s>0&&this.getParsed(s-1);for(let $=s;$<s+n;++$){const w=t[$],P=this.getParsed($),z=S?w:{},C=ne(P[g]),T=z[v]=r.getPixelForValue(P[v],$),E=z[g]=a||C?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,P,l):P[g],$);z.skip=isNaN(T)||isNaN(E)||C,z.stop=$>0&&Math.abs(P[v]-k[v])>y,b&&(z.parsed=P,z.raw=c.data[$]),f&&(z.options=h||this.resolveDataElementOptions($,w.active?"active":i)),S||this.updateElement(w,$,z,i),k=P}this.updateSharedOptions(h,i,d)}getMaxOverflow(){const t=this._cachedMeta,s=t.data||[];if(!this.options.showLine){let o=0;for(let l=s.length-1;l>=0;--l)o=Math.max(o,s[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const n=t.dataset,i=n.options&&n.options.borderWidth||0;if(!s.length)return i;const a=s[0].size(this.resolveDataElementOptions(0)),r=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,a,r)/2}}var a0=Object.freeze({__proto__:null,BarController:Qb,BubbleController:Zb,DoughnutController:Qo,LineController:e0,PieController:s0,PolarAreaController:Uu,RadarController:n0,ScatterController:i0});function zn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Zo{static override(t){Object.assign(Zo.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return zn()}parse(){return zn()}format(){return zn()}add(){return zn()}diff(){return zn()}startOf(){return zn()}endOf(){return zn()}}var r0={_date:Zo};function o0(e,t,s,n){const{controller:i,data:a,_sorted:r}=e,o=i._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const c=o._reversePixels?w1:Qs;if(n){if(i._sharedOptions){const d=a[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=c(a,t,s-h),v=c(a,t,s+h);return{lo:f.lo,hi:v.hi}}}}else{const d=c(a,t,s);if(l){const{vScale:h}=i._cachedMeta,{_parsed:f}=e,v=f.slice(0,d.lo+1).reverse().findIndex(m=>!ne(m[h.axis]));d.lo-=Math.max(0,v);const g=f.slice(d.hi).findIndex(m=>!ne(m[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:a.length-1}}function pr(e,t,s,n,i){const a=e.getSortedVisibleDatasetMetas(),r=s[t];for(let o=0,l=a.length;o<l;++o){const{index:c,data:d}=a[o],{lo:h,hi:f}=o0(a[o],t,r,i);for(let v=h;v<=f;++v){const g=d[v];g.skip||n(g,c,v)}}}function l0(e){const t=e.indexOf("x")!==-1,s=e.indexOf("y")!==-1;return function(n,i){const a=t?Math.abs(n.x-i.x):0,r=s?Math.abs(n.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Lr(e,t,s,n,i){const a=[];return!i&&!e.isPointInArea(t)||pr(e,s,t,function(o,l,c){!i&&!Zs(o,e.chartArea,0)||o.inRange(t.x,t.y,n)&&a.push({element:o,datasetIndex:l,index:c})},!0),a}function c0(e,t,s,n){let i=[];function a(r,o,l){const{startAngle:c,endAngle:d}=r.getProps(["startAngle","endAngle"],n),{angle:h}=xu(r,{x:t.x,y:t.y});Qi(h,c,d)&&i.push({element:r,datasetIndex:o,index:l})}return pr(e,s,t,a),i}function d0(e,t,s,n,i,a){let r=[];const o=l0(s);let l=Number.POSITIVE_INFINITY;function c(d,h,f){const v=d.inRange(t.x,t.y,i);if(n&&!v)return;const g=d.getCenterPoint(i);if(!(!!a||e.isPointInArea(g))&&!v)return;const b=o(t,g);b<l?(r=[{element:d,datasetIndex:h,index:f}],l=b):b===l&&r.push({element:d,datasetIndex:h,index:f})}return pr(e,s,t,c),r}function Rr(e,t,s,n,i,a){return!a&&!e.isPointInArea(t)?[]:s==="r"&&!n?c0(e,t,s,i):d0(e,t,s,n,i,a)}function lc(e,t,s,n,i){const a=[],r=s==="x"?"inXRange":"inYRange";let o=!1;return pr(e,s,t,(l,c,d)=>{l[r]&&l[r](t[s],i)&&(a.push({element:l,datasetIndex:c,index:d}),o=o||l.inRange(t.x,t.y,i))}),n&&!o?[]:a}var u0={modes:{index(e,t,s,n){const i=Dn(t,e),a=s.axis||"x",r=s.includeInvisible||!1,o=s.intersect?Lr(e,i,a,n,r):Rr(e,i,a,!1,n,r),l=[];return o.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const d=o[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(e,t,s,n){const i=Dn(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;let o=s.intersect?Lr(e,i,a,n,r):Rr(e,i,a,!1,n,r);if(o.length>0){const l=o[0].datasetIndex,c=e.getDatasetMeta(l).data;o=[];for(let d=0;d<c.length;++d)o.push({element:c[d],datasetIndex:l,index:d})}return o},point(e,t,s,n){const i=Dn(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;return Lr(e,i,a,n,r)},nearest(e,t,s,n){const i=Dn(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;return Rr(e,i,a,s.intersect,n,r)},x(e,t,s,n){const i=Dn(t,e);return lc(e,i,"x",s.intersect,n)},y(e,t,s,n){const i=Dn(t,e);return lc(e,i,"y",s.intersect,n)}}};const Yu=["left","top","right","bottom"];function Ai(e,t){return e.filter(s=>s.pos===t)}function cc(e,t){return e.filter(s=>Yu.indexOf(s.pos)===-1&&s.box.axis===t)}function Ci(e,t){return e.sort((s,n)=>{const i=t?n:s,a=t?s:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight})}function h0(e){const t=[];let s,n,i,a,r,o;for(s=0,n=(e||[]).length;s<n;++s)i=e[s],{position:a,options:{stack:r,stackWeight:o=1}}=i,t.push({index:s,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:r&&a+r,stackWeight:o});return t}function f0(e){const t={};for(const s of e){const{stack:n,pos:i,stackWeight:a}=s;if(!n||!Yu.includes(i))continue;const r=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function v0(e,t){const s=f0(e),{vBoxMaxWidth:n,hBoxMaxHeight:i}=t;let a,r,o;for(a=0,r=e.length;a<r;++a){o=e[a];const{fullSize:l}=o.box,c=s[o.stack],d=c&&o.stackWeight/c.weight;o.horizontal?(o.width=d?d*n:l&&t.availableWidth,o.height=i):(o.width=n,o.height=d?d*i:l&&t.availableHeight)}return s}function p0(e){const t=h0(e),s=Ci(t.filter(c=>c.box.fullSize),!0),n=Ci(Ai(t,"left"),!0),i=Ci(Ai(t,"right")),a=Ci(Ai(t,"top"),!0),r=Ci(Ai(t,"bottom")),o=cc(t,"x"),l=cc(t,"y");return{fullSize:s,leftAndTop:n.concat(a),rightAndBottom:i.concat(l).concat(r).concat(o),chartArea:Ai(t,"chartArea"),vertical:n.concat(i).concat(l),horizontal:a.concat(r).concat(o)}}function dc(e,t,s,n){return Math.max(e[s],t[s])+Math.max(e[n],t[n])}function Ku(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function g0(e,t,s,n){const{pos:i,box:a}=s,r=e.maxPadding;if(!ae(i)){s.size&&(e[i]-=s.size);const h=n[s.stack]||{size:0,count:1};h.size=Math.max(h.size,s.horizontal?a.height:a.width),s.size=h.size/h.count,e[i]+=s.size}a.getPadding&&Ku(r,a.getPadding());const o=Math.max(0,t.outerWidth-dc(r,e,"left","right")),l=Math.max(0,t.outerHeight-dc(r,e,"top","bottom")),c=o!==e.w,d=l!==e.h;return e.w=o,e.h=l,s.horizontal?{same:c,other:d}:{same:d,other:c}}function m0(e){const t=e.maxPadding;function s(n){const i=Math.max(t[n]-e[n],0);return e[n]+=i,i}e.y+=s("top"),e.x+=s("left"),s("right"),s("bottom")}function _0(e,t){const s=t.maxPadding;function n(i){const a={left:0,top:0,right:0,bottom:0};return i.forEach(r=>{a[r]=Math.max(t[r],s[r])}),a}return n(e?["left","right"]:["top","bottom"])}function Ri(e,t,s,n){const i=[];let a,r,o,l,c,d;for(a=0,r=e.length,c=0;a<r;++a){o=e[a],l=o.box,l.update(o.width||t.w,o.height||t.h,_0(o.horizontal,t));const{same:h,other:f}=g0(t,s,o,n);c|=h&&i.length,d=d||f,l.fullSize||i.push(o)}return c&&Ri(i,t,s,n)||d}function $a(e,t,s,n,i){e.top=s,e.left=t,e.right=t+n,e.bottom=s+i,e.width=n,e.height=i}function uc(e,t,s,n){const i=s.padding;let{x:a,y:r}=t;for(const o of e){const l=o.box,c=n[o.stack]||{placed:0,weight:1},d=o.stackWeight/c.weight||1;if(o.horizontal){const h=t.w*d,f=c.size||l.height;Ji(c.start)&&(r=c.start),l.fullSize?$a(l,i.left,r,s.outerWidth-i.right-i.left,f):$a(l,t.left+c.placed,r,h,f),c.start=r,c.placed+=h,r=l.bottom}else{const h=t.h*d,f=c.size||l.width;Ji(c.start)&&(a=c.start),l.fullSize?$a(l,a,i.top,f,s.outerHeight-i.bottom-i.top):$a(l,a,t.top+c.placed,f,h),c.start=a,c.placed+=h,a=l.right}}t.x=a,t.y=r}var ns={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(s){t.draw(s)}}]},e.boxes.push(t)},removeBox(e,t){const s=e.boxes?e.boxes.indexOf(t):-1;s!==-1&&e.boxes.splice(s,1)},configure(e,t,s){t.fullSize=s.fullSize,t.position=s.position,t.weight=s.weight},update(e,t,s,n){if(!e)return;const i=is(e.options.layout.padding),a=Math.max(t-i.width,0),r=Math.max(s-i.height,0),o=p0(e.boxes),l=o.vertical,c=o.horizontal;xe(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const d=l.reduce((m,b)=>b.box.options&&b.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:s,padding:i,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/d,hBoxMaxHeight:r/2}),f=Object.assign({},i);Ku(f,is(n));const v=Object.assign({maxPadding:f,w:a,h:r,x:i.left,y:i.top},i),g=v0(l.concat(c),h);Ri(o.fullSize,v,h,g),Ri(l,v,h,g),Ri(c,v,h,g)&&Ri(l,v,h,g),m0(v),uc(o.leftAndTop,v,h,g),v.x+=v.w,v.y+=v.h,uc(o.rightAndBottom,v,h,g),e.chartArea={left:v.left,top:v.top,right:v.left+v.w,bottom:v.top+v.h,height:v.h,width:v.w},xe(o.chartArea,m=>{const b=m.box;Object.assign(b,e.chartArea),b.update(v.w,v.h,{left:0,top:0,right:0,bottom:0})})}};class Xu{acquireContext(t,s){}releaseContext(t){return!1}addEventListener(t,s,n){}removeEventListener(t,s,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,s,n,i){return s=Math.max(0,s||t.width),n=n||t.height,{width:s,height:Math.max(0,i?Math.floor(s/i):n)}}isAttached(t){return!0}updateConfig(t){}}class b0 extends Xu{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ra="$chartjs",y0={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},hc=e=>e===null||e==="";function x0(e,t){const s=e.style,n=e.getAttribute("height"),i=e.getAttribute("width");if(e[Ra]={initial:{height:n,width:i,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",hc(i)){const a=Xl(e,"width");a!==void 0&&(e.width=a)}if(hc(n))if(e.style.height==="")e.height=e.width/(t||2);else{const a=Xl(e,"height");a!==void 0&&(e.height=a)}return e}const Gu=gb?{passive:!0}:!1;function k0(e,t,s){e&&e.addEventListener(t,s,Gu)}function w0(e,t,s){e&&e.canvas&&e.canvas.removeEventListener(t,s,Gu)}function $0(e,t){const s=y0[e.type]||e.type,{x:n,y:i}=Dn(e,t);return{type:s,chart:t,native:e,x:n!==void 0?n:null,y:i!==void 0?i:null}}function Za(e,t){for(const s of e)if(s===t||s.contains(t))return!0}function S0(e,t,s){const n=e.canvas,i=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||Za(o.addedNodes,n),r=r&&!Za(o.removedNodes,n);r&&s()});return i.observe(document,{childList:!0,subtree:!0}),i}function M0(e,t,s){const n=e.canvas,i=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||Za(o.removedNodes,n),r=r&&!Za(o.addedNodes,n);r&&s()});return i.observe(document,{childList:!0,subtree:!0}),i}const ta=new Map;let fc=0;function Ju(){const e=window.devicePixelRatio;e!==fc&&(fc=e,ta.forEach((t,s)=>{s.currentDevicePixelRatio!==e&&t()}))}function P0(e,t){ta.size||window.addEventListener("resize",Ju),ta.set(e,t)}function A0(e){ta.delete(e),ta.size||window.removeEventListener("resize",Ju)}function C0(e,t,s){const n=e.canvas,i=n&&Jo(n);if(!i)return;const a=Su((o,l)=>{const c=i.clientWidth;s(o,l),c<i.clientWidth&&s()},window),r=new ResizeObserver(o=>{const l=o[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return r.observe(i),P0(e,a),r}function Ir(e,t,s){s&&s.disconnect(),t==="resize"&&A0(e)}function z0(e,t,s){const n=e.canvas,i=Su(a=>{e.ctx!==null&&s($0(a,e))},e);return k0(n,t,i),i}class T0 extends Xu{acquireContext(t,s){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(x0(t,s),n):null}releaseContext(t){const s=t.canvas;if(!s[Ra])return!1;const n=s[Ra].initial;["height","width"].forEach(a=>{const r=n[a];ne(r)?s.removeAttribute(a):s.setAttribute(a,r)});const i=n.style||{};return Object.keys(i).forEach(a=>{s.style[a]=i[a]}),s.width=s.width,delete s[Ra],!0}addEventListener(t,s,n){this.removeEventListener(t,s);const i=t.$proxies||(t.$proxies={}),r={attach:S0,detach:M0,resize:C0}[s]||z0;i[s]=r(t,s,n)}removeEventListener(t,s){const n=t.$proxies||(t.$proxies={}),i=n[s];if(!i)return;({attach:Ir,detach:Ir,resize:Ir}[s]||w0)(t,s,i),n[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,s,n,i){return pb(t,s,n,i)}isAttached(t){const s=t&&Jo(t);return!!(s&&s.isConnected)}}function E0(e){return!Go()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?b0:T0}let an=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:s,y:n}=this.getProps(["x","y"],t);return{x:s,y:n}}hasValue(){return pi(this.x)&&pi(this.y)}getProps(t,s){const n=this.$animations;if(!s||!n)return this;const i={};return t.forEach(a=>{i[a]=n[a]&&n[a].active()?n[a]._to:this[a]}),i}};function D0(e,t){const s=e.options.ticks,n=O0(e),i=Math.min(s.maxTicksLimit||n,n),a=s.major.enabled?R0(t):[],r=a.length,o=a[0],l=a[r-1],c=[];if(r>i)return I0(t,c,a,r/i),c;const d=L0(a,t,i);if(r>0){let h,f;const v=r>1?Math.round((l-o)/(r-1)):null;for(Sa(t,c,d,ne(v)?0:o-v,o),h=0,f=r-1;h<f;h++)Sa(t,c,d,a[h],a[h+1]);return Sa(t,c,d,l,ne(v)?t.length:l+v),c}return Sa(t,c,d),c}function O0(e){const t=e.options.offset,s=e._tickSize(),n=e._length/s+(t?0:1),i=e._maxLength/s;return Math.floor(Math.min(n,i))}function L0(e,t,s){const n=j0(e),i=t.length/s;if(!n)return Math.max(i,1);const a=_1(n);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>i)return l}return Math.max(i,1)}function R0(e){const t=[];let s,n;for(s=0,n=e.length;s<n;s++)e[s].major&&t.push(s);return t}function I0(e,t,s,n){let i=0,a=s[0],r;for(n=Math.ceil(n),r=0;r<e.length;r++)r===a&&(t.push(e[r]),i++,a=s[i*n])}function Sa(e,t,s,n,i){const a=Ut(n,0),r=Math.min(Ut(i,e.length),e.length);let o=0,l,c,d;for(s=Math.ceil(s),i&&(l=i-n,s=l/Math.floor(l/s)),d=a;d<0;)o++,d=Math.round(a+o*s);for(c=Math.max(a,0);c<r;c++)c===d&&(t.push(e[c]),o++,d=Math.round(a+o*s))}function j0(e){const t=e.length;let s,n;if(t<2)return!1;for(n=e[0],s=1;s<t;++s)if(e[s]-e[s-1]!==n)return!1;return n}const N0=e=>e==="left"?"right":e==="right"?"left":e,vc=(e,t,s)=>t==="top"||t==="left"?e[t]+s:e[t]-s,pc=(e,t)=>Math.min(t||e,e);function gc(e,t){const s=[],n=e.length/t,i=e.length;let a=0;for(;a<i;a+=n)s.push(e[Math.floor(a)]);return s}function F0(e,t,s){const n=e.ticks.length,i=Math.min(t,n-1),a=e._startPixel,r=e._endPixel,o=1e-6;let l=e.getPixelForTick(i),c;if(!(s&&(n===1?c=Math.max(l-a,r-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<a-o||l>r+o)))return l}function B0(e,t){xe(e,s=>{const n=s.gc,i=n.length/2;let a;if(i>t){for(a=0;a<i;++a)delete s.data[n[a]];n.splice(0,i)}})}function zi(e){return e.drawTicks?e.tickLength:0}function mc(e,t){if(!e.display)return 0;const s=qe(e.font,t),n=is(e.padding);return(Ce(e.text)?e.text.length:1)*s.lineHeight+n.height}function q0(e,t){return $n(e,{scale:t,type:"scale"})}function V0(e,t,s){return $n(e,{tick:s,index:t,type:"tick"})}function H0(e,t,s){let n=Ho(e);return(s&&t!=="right"||!s&&t==="right")&&(n=N0(n)),n}function W0(e,t,s,n){const{top:i,left:a,bottom:r,right:o,chart:l}=e,{chartArea:c,scales:d}=l;let h=0,f,v,g;const m=r-i,b=o-a;if(e.isHorizontal()){if(v=es(n,a,o),ae(s)){const y=Object.keys(s)[0],S=s[y];g=d[y].getPixelForValue(S)+m-t}else s==="center"?g=(c.bottom+c.top)/2+m-t:g=vc(e,s,t);f=o-a}else{if(ae(s)){const y=Object.keys(s)[0],S=s[y];v=d[y].getPixelForValue(S)-b+t}else s==="center"?v=(c.left+c.right)/2-b+t:v=vc(e,s,t);g=es(n,r,i),h=s==="left"?-je:je}return{titleX:v,titleY:g,maxWidth:f,rotation:h}}class Gn extends an{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,s){return t}getUserBounds(){let{_userMin:t,_userMax:s,_suggestedMin:n,_suggestedMax:i}=this;return t=ps(t,Number.POSITIVE_INFINITY),s=ps(s,Number.NEGATIVE_INFINITY),n=ps(n,Number.POSITIVE_INFINITY),i=ps(i,Number.NEGATIVE_INFINITY),{min:ps(t,n),max:ps(s,i),minDefined:Re(t),maxDefined:Re(s)}}getMinMax(t){let{min:s,max:n,minDefined:i,maxDefined:a}=this.getUserBounds(),r;if(i&&a)return{min:s,max:n};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)r=o[l].controller.getMinMax(this,t),i||(s=Math.min(s,r.min)),a||(n=Math.max(n,r.max));return s=a&&s>n?n:s,n=i&&s>n?s:n,{min:ps(s,ps(n,s)),max:ps(n,ps(s,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Se(this.options.beforeUpdate,[this])}update(t,s,n){const{beginAtZero:i,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=s,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Y1(this,a,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?gc(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=D0(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,s,n;this.isHorizontal()?(s=this.left,n=this.right):(s=this.top,n=this.bottom,t=!t),this._startPixel=s,this._endPixel=n,this._reversePixels=t,this._length=n-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Se(this.options.afterUpdate,[this])}beforeSetDimensions(){Se(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Se(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Se(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Se(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const s=this.options.ticks;let n,i,a;for(n=0,i=t.length;n<i;n++)a=t[n],a.label=Se(s.callback,[a.value,n,t],this)}afterTickToLabelConversion(){Se(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Se(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,s=t.ticks,n=pc(this.ticks.length,t.ticks.maxTicksLimit),i=s.minRotation||0,a=s.maxRotation;let r=i,o,l,c;if(!this._isVisible()||!s.display||i>=a||n<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,v=Ye(this.chart.width-h,0,this.maxWidth);o=t.offset?this.maxWidth/n:v/(n-1),h+6>o&&(o=v/(n-(t.offset?.5:1)),l=this.maxHeight-zi(t.grid)-s.padding-mc(t.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),r=qo(Math.min(Math.asin(Ye((d.highest.height+6)/o,-1,1)),Math.asin(Ye(l/c,-1,1))-Math.asin(Ye(f/c,-1,1)))),r=Math.max(i,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){Se(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Se(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:s,options:{ticks:n,title:i,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=mc(i,s.options.font);if(o?(t.width=this.maxWidth,t.height=zi(a)+l):(t.height=this.maxHeight,t.width=zi(a)+l),n.display&&this.ticks.length){const{first:c,last:d,widest:h,highest:f}=this._getLabelSizes(),v=n.padding*2,g=Cs(this.labelRotation),m=Math.cos(g),b=Math.sin(g);if(o){const y=n.mirror?0:b*h.width+m*f.height;t.height=Math.min(this.maxHeight,t.height+y+v)}else{const y=n.mirror?0:m*h.width+b*f.height;t.width=Math.min(this.maxWidth,t.width+y+v)}this._calculatePadding(c,d,b,m)}}this._handleMargins(),o?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,s,n,i){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,v=0;l?c?(f=i*t.width,v=n*s.height):(f=n*t.height,v=i*s.width):a==="start"?v=s.width:a==="end"?f=t.width:a!=="inner"&&(f=t.width/2,v=s.width/2),this.paddingLeft=Math.max((f-d+r)*this.width/(this.width-d),0),this.paddingRight=Math.max((v-h+r)*this.width/(this.width-h),0)}else{let d=s.height/2,h=t.height/2;a==="start"?(d=0,h=t.height):a==="end"&&(d=s.height,h=0),this.paddingTop=d+r,this.paddingBottom=h+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Se(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:s}=this.options;return s==="top"||s==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let s,n;for(s=0,n=t.length;s<n;s++)ne(t[s].label)&&(t.splice(s,1),n--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const s=this.options.ticks.sampleSize;let n=this.ticks;s<n.length&&(n=gc(n,s)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,s,n){const{ctx:i,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(s/pc(s,n));let c=0,d=0,h,f,v,g,m,b,y,S,k,$,w;for(h=0;h<s;h+=l){if(g=t[h].label,m=this._resolveTickFontOptions(h),i.font=b=m.string,y=a[b]=a[b]||{data:{},gc:[]},S=m.lineHeight,k=$=0,!ne(g)&&!Ce(g))k=Ja(i,y.data,y.gc,k,g),$=S;else if(Ce(g))for(f=0,v=g.length;f<v;++f)w=g[f],!ne(w)&&!Ce(w)&&(k=Ja(i,y.data,y.gc,k,w),$+=S);r.push(k),o.push($),c=Math.max(k,c),d=Math.max($,d)}B0(a,s);const P=r.indexOf(c),z=o.indexOf(d),C=T=>({width:r[T]||0,height:o[T]||0});return{first:C(0),last:C(s-1),widest:C(P),highest:C(z),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,s){return NaN}getValueForPixel(t){}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const s=this._startPixel+t*this._length;return k1(this._alignToPixels?Cn(this.chart,s,0):s)}getDecimalForPixel(t){const s=(t-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:s}=this;return t<0&&s<0?s:t>0&&s>0?t:0}getContext(t){const s=this.ticks||[];if(t>=0&&t<s.length){const n=s[t];return n.$context||(n.$context=V0(this.getContext(),t,n))}return this.$context||(this.$context=q0(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,s=Cs(this.labelRotation),n=Math.abs(Math.cos(s)),i=Math.abs(Math.sin(s)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*n>o*i?o/n:l/i:l*i<o*n?l/n:o/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const s=this.axis,n=this.chart,i=this.options,{grid:a,position:r,border:o}=i,l=a.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=zi(a),v=[],g=o.setContext(this.getContext()),m=g.display?g.width:0,b=m/2,y=function(X){return Cn(n,X,m)};let S,k,$,w,P,z,C,T,E,R,N,Z;if(r==="top")S=y(this.bottom),z=this.bottom-f,T=S-b,R=y(t.top)+b,Z=t.bottom;else if(r==="bottom")S=y(this.top),R=t.top,Z=y(t.bottom)-b,z=S+b,T=this.top+f;else if(r==="left")S=y(this.right),P=this.right-f,C=S-b,E=y(t.left)+b,N=t.right;else if(r==="right")S=y(this.left),E=t.left,N=y(t.right)-b,P=S+b,C=this.left+f;else if(s==="x"){if(r==="center")S=y((t.top+t.bottom)/2+.5);else if(ae(r)){const X=Object.keys(r)[0],J=r[X];S=y(this.chart.scales[X].getPixelForValue(J))}R=t.top,Z=t.bottom,z=S+b,T=z+f}else if(s==="y"){if(r==="center")S=y((t.left+t.right)/2);else if(ae(r)){const X=Object.keys(r)[0],J=r[X];S=y(this.chart.scales[X].getPixelForValue(J))}P=S-b,C=P-f,E=t.left,N=t.right}const K=Ut(i.ticks.maxTicksLimit,h),V=Math.max(1,Math.ceil(h/K));for(k=0;k<h;k+=V){const X=this.getContext(k),J=a.setContext(X),xt=o.setContext(X),yt=J.lineWidth,Pt=J.color,F=xt.dash||[],O=xt.dashOffset,H=J.tickWidth,tt=J.tickColor,kt=J.tickBorderDash||[],q=J.tickBorderDashOffset;$=F0(this,k,l),$!==void 0&&(w=Cn(n,$,yt),c?P=C=E=N=w:z=T=R=Z=w,v.push({tx1:P,ty1:z,tx2:C,ty2:T,x1:E,y1:R,x2:N,y2:Z,width:yt,color:Pt,borderDash:F,borderDashOffset:O,tickWidth:H,tickColor:tt,tickBorderDash:kt,tickBorderDashOffset:q}))}return this._ticksLength=h,this._borderValue=S,v}_computeLabelItems(t){const s=this.axis,n=this.options,{position:i,ticks:a}=n,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=a,f=zi(n.grid),v=f+d,g=h?-d:v,m=-Cs(this.labelRotation),b=[];let y,S,k,$,w,P,z,C,T,E,R,N,Z="middle";if(i==="top")P=this.bottom-g,z=this._getXAxisLabelAlignment();else if(i==="bottom")P=this.top+g,z=this._getXAxisLabelAlignment();else if(i==="left"){const V=this._getYAxisLabelAlignment(f);z=V.textAlign,w=V.x}else if(i==="right"){const V=this._getYAxisLabelAlignment(f);z=V.textAlign,w=V.x}else if(s==="x"){if(i==="center")P=(t.top+t.bottom)/2+v;else if(ae(i)){const V=Object.keys(i)[0],X=i[V];P=this.chart.scales[V].getPixelForValue(X)+v}z=this._getXAxisLabelAlignment()}else if(s==="y"){if(i==="center")w=(t.left+t.right)/2-v;else if(ae(i)){const V=Object.keys(i)[0],X=i[V];w=this.chart.scales[V].getPixelForValue(X)}z=this._getYAxisLabelAlignment(f).textAlign}s==="y"&&(l==="start"?Z="top":l==="end"&&(Z="bottom"));const K=this._getLabelSizes();for(y=0,S=o.length;y<S;++y){k=o[y],$=k.label;const V=a.setContext(this.getContext(y));C=this.getPixelForTick(y)+a.labelOffset,T=this._resolveTickFontOptions(y),E=T.lineHeight,R=Ce($)?$.length:1;const X=R/2,J=V.color,xt=V.textStrokeColor,yt=V.textStrokeWidth;let Pt=z;r?(w=C,z==="inner"&&(y===S-1?Pt=this.options.reverse?"left":"right":y===0?Pt=this.options.reverse?"right":"left":Pt="center"),i==="top"?c==="near"||m!==0?N=-R*E+E/2:c==="center"?N=-K.highest.height/2-X*E+E:N=-K.highest.height+E/2:c==="near"||m!==0?N=E/2:c==="center"?N=K.highest.height/2-X*E:N=K.highest.height-R*E,h&&(N*=-1),m!==0&&!V.showLabelBackdrop&&(w+=E/2*Math.sin(m))):(P=C,N=(1-R)*E/2);let F;if(V.showLabelBackdrop){const O=is(V.backdropPadding),H=K.heights[y],tt=K.widths[y];let kt=N-O.top,q=0-O.left;switch(Z){case"middle":kt-=H/2;break;case"bottom":kt-=H;break}switch(z){case"center":q-=tt/2;break;case"right":q-=tt;break;case"inner":y===S-1?q-=tt:y>0&&(q-=tt/2);break}F={left:q,top:kt,width:tt+O.width,height:H+O.height,color:V.backdropColor}}b.push({label:$,font:T,textOffset:N,options:{rotation:m,color:J,strokeColor:xt,strokeWidth:yt,textAlign:Pt,textBaseline:Z,translation:[w,P],backdrop:F}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:s}=this.options;if(-Cs(this.labelRotation))return t==="top"?"left":"right";let i="center";return s.align==="start"?i="left":s.align==="end"?i="right":s.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:s,ticks:{crossAlign:n,mirror:i,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let c,d;return s==="left"?i?(d=this.right+a,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-o,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d=this.left)):s==="right"?i?(d=this.left+a,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+o,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:s},left:n,top:i,width:a,height:r}=this;s&&(t.save(),t.fillStyle=s,t.fillRect(n,i,a,r),t.restore())}getLineWidthForValue(t){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const i=this.ticks.findIndex(a=>a.value===t);return i>=0?s.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const s=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,c,d)=>{!d.width||!d.color||(n.save(),n.lineWidth=d.width,n.strokeStyle=d.color,n.setLineDash(d.borderDash||[]),n.lineDashOffset=d.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(s.display)for(a=0,r=i.length;a<r;++a){const l=i[a];s.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),s.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:s,options:{border:n,grid:i}}=this,a=n.setContext(this.getContext()),r=n.display?a.width:0;if(!r)return;const o=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,h,f;this.isHorizontal()?(c=Cn(t,this.left,r)-r/2,d=Cn(t,this.right,o)+o/2,h=f=l):(h=Cn(t,this.top,r)-r/2,f=Cn(t,this.bottom,o)+o/2,c=d=l),s.save(),s.lineWidth=a.width,s.strokeStyle=a.color,s.beginPath(),s.moveTo(c,h),s.lineTo(d,f),s.stroke(),s.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,i=this._computeLabelArea();i&&hr(n,i);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,c=r.label,d=r.textOffset;Un(n,c,0,d,l,o)}i&&fr(n)}drawTitle(){const{ctx:t,options:{position:s,title:n,reverse:i}}=this;if(!n.display)return;const a=qe(n.font),r=is(n.padding),o=n.align;let l=a.lineHeight/2;s==="bottom"||s==="center"||ae(s)?(l+=r.bottom,Ce(n.text)&&(l+=a.lineHeight*(n.text.length-1))):l+=r.top;const{titleX:c,titleY:d,maxWidth:h,rotation:f}=W0(this,l,s,o);Un(t,n.text,0,0,a,{color:n.color,maxWidth:h,rotation:f,textAlign:H0(o,s,i),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,s=t.ticks&&t.ticks.z||0,n=Ut(t.grid&&t.grid.z,-1),i=Ut(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Gn.prototype.draw?[{z:s,draw:a=>{this.draw(a)}}]:[{z:n,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:s,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const s=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let a,r;for(a=0,r=s.length;a<r;++a){const o=s[a];o[n]===this.id&&(!t||o.type===t)&&i.push(o)}return i}_resolveTickFontOptions(t){const s=this.options.ticks.setContext(this.getContext(t));return qe(s.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ma{constructor(t,s,n){this.type=t,this.scope=s,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const s=Object.getPrototypeOf(t);let n;K0(s)&&(n=this.register(s));const i=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in i||(i[a]=t,U0(t,r,n),this.override&&ze.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const s=this.items,n=t.id,i=this.scope;n in s&&delete s[n],i&&n in ze[i]&&(delete ze[i][n],this.override&&delete Wn[n])}}function U0(e,t,s){const n=Gi(Object.create(null),[s?ze.get(s):{},ze.get(t),e.defaults]);ze.set(t,n),e.defaultRoutes&&Y0(t,e.defaultRoutes),e.descriptors&&ze.describe(t,e.descriptors)}function Y0(e,t){Object.keys(t).forEach(s=>{const n=s.split("."),i=n.pop(),a=[e].concat(n).join("."),r=t[s].split("."),o=r.pop(),l=r.join(".");ze.route(a,i,l,o)})}function K0(e){return"id"in e&&"defaults"in e}class X0{constructor(){this.controllers=new Ma(Sn,"datasets",!0),this.elements=new Ma(an,"elements"),this.plugins=new Ma(Object,"plugins"),this.scales=new Ma(Gn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,s,n){[...s].forEach(i=>{const a=n||this._getRegistryForType(i);n||a.isForType(i)||a===this.plugins&&i.id?this._exec(t,a,i):xe(i,r=>{const o=n||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,s,n){const i=Bo(t);Se(n["before"+i],[],n),s[t](n),Se(n["after"+i],[],n)}_getRegistryForType(t){for(let s=0;s<this._typedRegistries.length;s++){const n=this._typedRegistries[s];if(n.isForType(t))return n}return this.plugins}_get(t,s,n){const i=s.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var Is=new X0;class G0{constructor(){this._init=void 0}notify(t,s,n,i){if(s==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=i?this._descriptors(t).filter(i):this._descriptors(t),r=this._notify(a,t,s,n);return s==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,s,n,i){i=i||{};for(const a of t){const r=a.plugin,o=r[n],l=[s,i,a.options];if(Se(o,l,r)===!1&&i.cancelable)return!1}return!0}invalidate(){ne(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),s}_createDescriptors(t,s){const n=t&&t.config,i=Ut(n.options&&n.options.plugins,{}),a=J0(n);return i===!1&&!s?[]:Z0(t,a,i,s)}_notifyStateChanges(t){const s=this._oldCache||[],n=this._cache,i=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(i(s,n),t,"stop"),this._notify(i(n,s),t,"start")}}function J0(e){const t={},s=[],n=Object.keys(Is.plugins.items);for(let a=0;a<n.length;a++)s.push(Is.getPlugin(n[a]));const i=e.plugins||[];for(let a=0;a<i.length;a++){const r=i[a];s.indexOf(r)===-1&&(s.push(r),t[r.id]=!0)}return{plugins:s,localIds:t}}function Q0(e,t){return!t&&e===!1?null:e===!0?{}:e}function Z0(e,{plugins:t,localIds:s},n,i){const a=[],r=e.getContext();for(const o of t){const l=o.id,c=Q0(n[l],i);c!==null&&a.push({plugin:o,options:ty(e.config,{plugin:o,local:s[l]},c,r)})}return a}function ty(e,{plugin:t,local:s},n,i){const a=e.pluginScopeKeys(t),r=e.getOptionScopes(n,a);return s&&t.defaults&&r.push(t.defaults),e.createResolver(r,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function lo(e,t){const s=ze.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||s.indexAxis||"x"}function ey(e,t){let s=e;return e==="_index_"?s=t:e==="_value_"&&(s=t==="x"?"y":"x"),s}function sy(e,t){return e===t?"_index_":"_value_"}function _c(e){if(e==="x"||e==="y"||e==="r")return e}function ny(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function co(e,...t){if(_c(e))return e;for(const s of t){const n=s.axis||ny(s.position)||e.length>1&&_c(e[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function bc(e,t,s){if(s[t+"AxisID"]===e)return{axis:t}}function iy(e,t){if(t.data&&t.data.datasets){const s=t.data.datasets.filter(n=>n.xAxisID===e||n.yAxisID===e);if(s.length)return bc(e,"x",s[0])||bc(e,"y",s[0])}return{}}function ay(e,t){const s=Wn[e.type]||{scales:{}},n=t.scales||{},i=lo(e.type,t),a=Object.create(null);return Object.keys(n).forEach(r=>{const o=n[r];if(!ae(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=co(r,o,iy(r,e),ze.scales[o.type]),c=sy(l,i),d=s.scales||{};a[r]=Vi(Object.create(null),[{axis:l},o,d[l],d[c]])}),e.data.datasets.forEach(r=>{const o=r.type||e.type,l=r.indexAxis||lo(o,t),d=(Wn[o]||{}).scales||{};Object.keys(d).forEach(h=>{const f=ey(h,l),v=r[f+"AxisID"]||f;a[v]=a[v]||Object.create(null),Vi(a[v],[{axis:f},n[v],d[h]])})}),Object.keys(a).forEach(r=>{const o=a[r];Vi(o,[ze.scales[o.type],ze.scale])}),a}function Qu(e){const t=e.options||(e.options={});t.plugins=Ut(t.plugins,{}),t.scales=ay(e,t)}function Zu(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function ry(e){return e=e||{},e.data=Zu(e.data),Qu(e),e}const yc=new Map,th=new Set;function Pa(e,t){let s=yc.get(e);return s||(s=t(),yc.set(e,s),th.add(s)),s}const Ti=(e,t,s)=>{const n=kn(t,s);n!==void 0&&e.add(n)};class oy{constructor(t){this._config=ry(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Zu(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Qu(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Pa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,s){return Pa(`${t}.transition.${s}`,()=>[[`datasets.${t}.transitions.${s}`,`transitions.${s}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,s){return Pa(`${t}-${s}`,()=>[[`datasets.${t}.elements.${s}`,`datasets.${t}`,`elements.${s}`,""]])}pluginScopeKeys(t){const s=t.id,n=this.type;return Pa(`${n}-plugin-${s}`,()=>[[`plugins.${s}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,s){const n=this._scopeCache;let i=n.get(t);return(!i||s)&&(i=new Map,n.set(t,i)),i}getOptionScopes(t,s,n){const{options:i,type:a}=this,r=this._cachedScopes(t,n),o=r.get(s);if(o)return o;const l=new Set;s.forEach(d=>{t&&(l.add(t),d.forEach(h=>Ti(l,t,h))),d.forEach(h=>Ti(l,i,h)),d.forEach(h=>Ti(l,Wn[a]||{},h)),d.forEach(h=>Ti(l,ze,h)),d.forEach(h=>Ti(l,ro,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),th.has(s)&&r.set(s,c),c}chartOptionScopes(){const{options:t,type:s}=this;return[t,Wn[s]||{},ze.datasets[s]||{},{type:s},ze,ro]}resolveNamedOptions(t,s,n,i=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=xc(this._resolverCache,t,i);let l=r;if(cy(r,s)){a.$shared=!1,n=wn(n)?n():n;const c=this.createResolver(t,n,o);l=gi(r,n,c)}for(const c of s)a[c]=l[c];return a}createResolver(t,s,n=[""],i){const{resolver:a}=xc(this._resolverCache,t,n);return ae(s)?gi(a,s,void 0,i):a}}function xc(e,t,s){let n=e.get(t);n||(n=new Map,e.set(t,n));const i=s.join();let a=n.get(i);return a||(a={resolver:Yo(t,s),subPrefixes:s.filter(o=>!o.toLowerCase().includes("hover"))},n.set(i,a)),a}const ly=e=>ae(e)&&Object.getOwnPropertyNames(e).some(t=>wn(e[t]));function cy(e,t){const{isScriptable:s,isIndexable:n}=Tu(e);for(const i of t){const a=s(i),r=n(i),o=(r||a)&&e[i];if(a&&(wn(o)||ly(o))||r&&Ce(o))return!0}return!1}var dy="4.5.1";const uy=["top","bottom","left","right","chartArea"];function kc(e,t){return e==="top"||e==="bottom"||uy.indexOf(e)===-1&&t==="x"}function wc(e,t){return function(s,n){return s[e]===n[e]?s[t]-n[t]:s[e]-n[e]}}function $c(e){const t=e.chart,s=t.options.animation;t.notifyPlugins("afterRender"),Se(s&&s.onComplete,[e],t)}function hy(e){const t=e.chart,s=t.options.animation;Se(s&&s.onProgress,[e],t)}function eh(e){return Go()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Ia={},Sc=e=>{const t=eh(e);return Object.values(Ia).filter(s=>s.canvas===t).pop()};function fy(e,t,s){const n=Object.keys(e);for(const i of n){const a=+i;if(a>=t){const r=e[i];delete e[i],(s>0||a>t)&&(e[a+s]=r)}}}function vy(e,t,s,n){return!s||e.type==="mouseout"?null:n?t:e}class uo{static defaults=ze;static instances=Ia;static overrides=Wn;static registry=Is;static version=dy;static getChart=Sc;static register(...t){Is.add(...t),Mc()}static unregister(...t){Is.remove(...t),Mc()}constructor(t,s){const n=this.config=new oy(s),i=eh(t),a=Sc(i);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||E0(i)),this.platform.updateConfig(n);const o=this.platform.acquireContext(i,r.aspectRatio),l=o&&o.canvas,c=l&&l.height,d=l&&l.width;if(this.id=c1(),this.ctx=o,this.canvas=l,this.width=d,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new G0,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=M1(h=>this.update(h),r.resizeDelay||0),this._dataChanges=[],Ia[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ws.listen(this,"complete",$c),Ws.listen(this,"progress",hy),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:s},width:n,height:i,_aspectRatio:a}=this;return ne(t)?s&&a?a:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Is}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Kl(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Wl(this.canvas,this.ctx),this}stop(){return Ws.stop(this),this}resize(t,s){Ws.running(this)?this._resizeBeforeDraw={width:t,height:s}:this._resize(t,s)}_resize(t,s){const n=this.options,i=this.canvas,a=n.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(i,t,s,a),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Kl(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),Se(n.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};xe(s,(n,i)=>{n.id=i})}buildOrUpdateScales(){const t=this.options,s=t.scales,n=this.scales,i=Object.keys(n).reduce((r,o)=>(r[o]=!1,r),{});let a=[];s&&(a=a.concat(Object.keys(s).map(r=>{const o=s[r],l=co(r,o),c=l==="r",d=l==="x";return{options:o,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),xe(a,r=>{const o=r.options,l=o.id,c=co(l,o),d=Ut(o.type,r.dtype);(o.position===void 0||kc(o.position,c)!==kc(r.dposition))&&(o.position=r.dposition),i[l]=!0;let h=null;if(l in n&&n[l].type===d)h=n[l];else{const f=Is.getScale(d);h=new f({id:l,type:d,ctx:this.ctx,chart:this}),n[h.id]=h}h.init(o,t)}),xe(i,(r,o)=>{r||delete n[o]}),xe(n,r=>{ns.configure(this,r,r.options),ns.addBox(this,r)})}_updateMetasets(){const t=this._metasets,s=this.data.datasets.length,n=t.length;if(t.sort((i,a)=>i.index-a.index),n>s){for(let i=s;i<n;++i)this._destroyDatasetMeta(i);t.splice(s,n-s)}this._sortedMetasets=t.slice(0).sort(wc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:s}}=this;t.length>s.length&&delete this._stacks,t.forEach((n,i)=>{s.filter(a=>a===n._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],s=this.data.datasets;let n,i;for(this._removeUnreferencedMetasets(),n=0,i=s.length;n<i;n++){const a=s[n];let r=this.getDatasetMeta(n);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(n),r=this.getDatasetMeta(n)),r.type=o,r.indexAxis=a.indexAxis||lo(o,this.options),r.order=a.order||0,r.index=n,r.label=""+a.label,r.visible=this.isDatasetVisible(n),r.controller)r.controller.updateIndex(n),r.controller.linkScales();else{const l=Is.getController(o),{datasetElementType:c,dataElementType:d}=ze.datasets[o];Object.assign(l,{dataElementType:Is.getElement(d),datasetElementType:c&&Is.getElement(c)}),r.controller=new l(this,n),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){xe(this.data.datasets,(t,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const s=this.config;s.update();const n=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:h}=this.getDatasetMeta(c),f=!i&&a.indexOf(h)===-1;h.buildOrUpdateElements(f),r=Math.max(+h.getMaxOverflow(),r)}r=this._minPadding=n.layout.autoPadding?r:0,this._updateLayout(r),i||xe(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(wc("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){xe(this.scales,t=>{ns.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,s=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!Rl(s,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,s=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:a}of s){const r=n==="_removeElements"?-a:a;fy(t,i,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const s=this.data.datasets.length,n=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),i=n(0);for(let a=1;a<s;a++)if(!Rl(i,n(a)))return;return Array.from(i).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ns.update(this,this.width,this.height,t);const s=this.chartArea,n=s.width<=0||s.height<=0;this._layers=[],xe(this.boxes,i=>{n&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,a)=>{i._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let s=0,n=this.data.datasets.length;s<n;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,n=this.data.datasets.length;s<n;++s)this._updateDataset(s,wn(t)?t({datasetIndex:s}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,s){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(n.controller._update(s),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ws.has(this)?this.attached&&!Ws.running(this)&&Ws.start(this):(this.draw(),$c({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(t=0;t<s.length&&s[t].z<=0;++t)s[t].draw(this.chartArea);for(this._drawDatasets();t<s.length;++t)s[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const s=this._sortedMetasets,n=[];let i,a;for(i=0,a=s.length;i<a;++i){const r=s[i];(!t||r.visible)&&n.push(r)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let s=t.length-1;s>=0;--s)this._drawDataset(t[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const s=this.ctx,n={meta:t,index:t.index,cancelable:!0},i=qu(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(i&&hr(s,i),t.controller.draw(),i&&fr(s),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return Zs(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,s,n,i){const a=u0.modes[s];return typeof a=="function"?a(this,t,n,i):[]}getDatasetMeta(t){const s=this.data.datasets[t],n=this._metasets;let i=n.filter(a=>a&&a._dataset===s).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:t,_dataset:s,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=$n(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const s=this.data.datasets[t];if(!s)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!s.hidden}setDatasetVisibility(t,s){const n=this.getDatasetMeta(t);n.hidden=!s}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,s,n){const i=n?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,i);Ji(s)?(a.data[s].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),r.update(a,{visible:n}),this.update(o=>o.datasetIndex===t?i:void 0))}hide(t,s){this._updateVisibility(t,s,!1)}show(t,s){this._updateVisibility(t,s,!0)}_destroyDatasetMeta(t){const s=this._metasets[t];s&&s.controller&&s.controller._destroy(),delete this._metasets[t]}_stop(){let t,s;for(this.stop(),Ws.remove(this),t=0,s=this.data.datasets.length;t<s;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:s}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Wl(t,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Ia[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,s=this.platform,n=(a,r)=>{s.addEventListener(this,a,r),t[a]=r},i=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};xe(this.options.events,a=>n(a,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,s=this.platform,n=(l,c)=>{s.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(s.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const o=()=>{i("attach",o),this.attached=!0,this.resize(),n("resize",a),n("detach",r)};r=()=>{this.attached=!1,i("resize",a),this._stop(),this._resize(0,0),n("attach",o)},s.isAttached(this.canvas)?o():r()}unbindEvents(){xe(this._listeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._listeners={},xe(this._responsiveListeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,s,n){const i=n?"set":"remove";let a,r,o,l;for(s==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+i+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[i+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const s=this._active||[],n=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!Ka(n,s)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,s))}notifyPlugins(t,s,n){return this._plugins.notify(this,t,s,n)}isPluginEnabled(t){return this._plugins._cache.filter(s=>s.plugin.id===t).length===1}_updateHoverStyles(t,s,n){const i=this.options.hover,a=(l,c)=>l.filter(d=>!c.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),r=a(s,t),o=n?t:a(t,s);r.length&&this.updateHoverStyle(r,i.mode,!1),o.length&&i.mode&&this.updateHoverStyle(o,i.mode,!0)}_eventHandler(t,s){const n={event:t,replay:s,cancelable:!0,inChartArea:this.isPointInArea(t)},i=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,i)===!1)return;const a=this._handleEvent(t,s,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(a||n.changed)&&this.render(),this}_handleEvent(t,s,n){const{_active:i=[],options:a}=this,r=s,o=this._getActiveElements(t,i,n,r),l=p1(t),c=vy(t,this._lastEvent,n,l);n&&(this._lastEvent=null,Se(a.onHover,[t,o,this],this),l&&Se(a.onClick,[t,o,this],this));const d=!Ka(o,i);return(d||s)&&(this._active=o,this._updateHoverStyles(o,i,s)),this._lastEvent=c,d}_getActiveElements(t,s,n,i){if(t.type==="mouseout")return[];if(!n)return s;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,i)}}function Mc(){return xe(uo.instances,e=>e._plugins.invalidate())}function py(e,t,s){const{startAngle:n,x:i,y:a,outerRadius:r,innerRadius:o,options:l}=t,{borderWidth:c,borderJoinStyle:d}=l,h=Math.min(c/r,ss(n-s));if(e.beginPath(),e.arc(i,a,r-c/2,n+h/2,s-h/2),o>0){const f=Math.min(c/o,ss(n-s));e.arc(i,a,o+c/2,s-f/2,n+f/2,!0)}else{const f=Math.min(c/2,r*ss(n-s));if(d==="round")e.arc(i,a,f,s-pe/2,n+pe/2,!0);else if(d==="bevel"){const v=2*f*f,g=-v*Math.cos(s+pe/2)+i,m=-v*Math.sin(s+pe/2)+a,b=v*Math.cos(n+pe/2)+i,y=v*Math.sin(n+pe/2)+a;e.lineTo(g,m),e.lineTo(b,y)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function gy(e,t,s){const{startAngle:n,pixelMargin:i,x:a,y:r,outerRadius:o,innerRadius:l}=t;let c=i/o;e.beginPath(),e.arc(a,r,o,n-c,s+c),l>i?(c=i/l,e.arc(a,r,l,s+c,n-c,!0)):e.arc(a,r,i,s+je,n-je),e.closePath(),e.clip()}function my(e){return Uo(e,["outerStart","outerEnd","innerStart","innerEnd"])}function _y(e,t,s,n){const i=my(e.options.borderRadius),a=(s-t)/2,r=Math.min(a,n*t/2),o=l=>{const c=(s-Math.min(a,l))*n/2;return Ye(l,0,Math.min(a,c))};return{outerStart:o(i.outerStart),outerEnd:o(i.outerEnd),innerStart:Ye(i.innerStart,0,r),innerEnd:Ye(i.innerEnd,0,r)}}function ti(e,t,s,n){return{x:s+e*Math.cos(t),y:n+e*Math.sin(t)}}function tr(e,t,s,n,i,a){const{x:r,y:o,startAngle:l,pixelMargin:c,innerRadius:d}=t,h=Math.max(t.outerRadius+n+s-c,0),f=d>0?d+n+s+c:0;let v=0;const g=i-l;if(n){const V=d>0?d-n:0,X=h>0?h-n:0,J=(V+X)/2,xt=J!==0?g*J/(J+n):g;v=(g-xt)/2}const m=Math.max(.001,g*h-s/pe)/h,b=(g-m)/2,y=l+b+v,S=i-b-v,{outerStart:k,outerEnd:$,innerStart:w,innerEnd:P}=_y(t,f,h,S-y),z=h-k,C=h-$,T=y+k/z,E=S-$/C,R=f+w,N=f+P,Z=y+w/R,K=S-P/N;if(e.beginPath(),a){const V=(T+E)/2;if(e.arc(r,o,h,T,V),e.arc(r,o,h,V,E),$>0){const yt=ti(C,E,r,o);e.arc(yt.x,yt.y,$,E,S+je)}const X=ti(N,S,r,o);if(e.lineTo(X.x,X.y),P>0){const yt=ti(N,K,r,o);e.arc(yt.x,yt.y,P,S+je,K+Math.PI)}const J=(S-P/f+(y+w/f))/2;if(e.arc(r,o,f,S-P/f,J,!0),e.arc(r,o,f,J,y+w/f,!0),w>0){const yt=ti(R,Z,r,o);e.arc(yt.x,yt.y,w,Z+Math.PI,y-je)}const xt=ti(z,y,r,o);if(e.lineTo(xt.x,xt.y),k>0){const yt=ti(z,T,r,o);e.arc(yt.x,yt.y,k,y-je,T)}}else{e.moveTo(r,o);const V=Math.cos(T)*h+r,X=Math.sin(T)*h+o;e.lineTo(V,X);const J=Math.cos(E)*h+r,xt=Math.sin(E)*h+o;e.lineTo(J,xt)}e.closePath()}function by(e,t,s,n,i){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){tr(e,t,s,n,l,i);for(let c=0;c<a;++c)e.fill();isNaN(o)||(l=r+(o%Me||Me))}return tr(e,t,s,n,l,i),e.fill(),l}function yy(e,t,s,n,i){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:c,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:v}=l,g=l.borderAlign==="inner";if(!c)return;e.setLineDash(h||[]),e.lineDashOffset=f,g?(e.lineWidth=c*2,e.lineJoin=d||"round"):(e.lineWidth=c,e.lineJoin=d||"bevel");let m=t.endAngle;if(a){tr(e,t,s,n,m,i);for(let b=0;b<a;++b)e.stroke();isNaN(o)||(m=r+(o%Me||Me))}g&&gy(e,t,m),l.selfJoin&&m-r>=pe&&v===0&&d!=="miter"&&py(e,t,m),a||(tr(e,t,s,n,m,i),e.stroke())}class xy extends an{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,s,n){const i=this.getProps(["x","y"],n),{angle:a,distance:r}=xu(i,{x:t,y:s}),{startAngle:o,endAngle:l,innerRadius:c,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,v=Ut(h,l-o),g=Qi(a,o,l)&&o!==l,m=v>=Me||g,b=Js(r,c+f,d+f);return m&&b}getCenterPoint(t){const{x:s,y:n,startAngle:i,endAngle:a,innerRadius:r,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,d=(i+a)/2,h=(r+o+c+l)/2;return{x:s+Math.cos(d)*h,y:n+Math.sin(d)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:s,circumference:n}=this,i=(s.offset||0)/4,a=(s.spacing||0)/2,r=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>Me?Math.floor(n/Me):0,n===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const o=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(o)*i,Math.sin(o)*i);const l=1-Math.sin(Math.min(pe,n||0)),c=i*l;t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,by(t,this,c,a,r),yy(t,this,c,a,r),t.restore()}}function sh(e,t,s=t){e.lineCap=Ut(s.borderCapStyle,t.borderCapStyle),e.setLineDash(Ut(s.borderDash,t.borderDash)),e.lineDashOffset=Ut(s.borderDashOffset,t.borderDashOffset),e.lineJoin=Ut(s.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Ut(s.borderWidth,t.borderWidth),e.strokeStyle=Ut(s.borderColor,t.borderColor)}function ky(e,t,s){e.lineTo(s.x,s.y)}function wy(e){return e.stepped?j1:e.tension||e.cubicInterpolationMode==="monotone"?N1:ky}function nh(e,t,s={}){const n=e.length,{start:i=0,end:a=n-1}=s,{start:r,end:o}=t,l=Math.max(i,r),c=Math.min(a,o),d=i<r&&a<r||i>o&&a>o;return{count:n,start:l,loop:t.loop,ilen:c<l&&!d?n+c-l:c-l}}function $y(e,t,s,n){const{points:i,options:a}=t,{count:r,start:o,loop:l,ilen:c}=nh(i,s,n),d=wy(a);let{move:h=!0,reverse:f}=n||{},v,g,m;for(v=0;v<=c;++v)g=i[(o+(f?c-v:v))%r],!g.skip&&(h?(e.moveTo(g.x,g.y),h=!1):d(e,m,g,f,a.stepped),m=g);return l&&(g=i[(o+(f?c:0))%r],d(e,m,g,f,a.stepped)),!!l}function Sy(e,t,s,n){const i=t.points,{count:a,start:r,ilen:o}=nh(i,s,n),{move:l=!0,reverse:c}=n||{};let d=0,h=0,f,v,g,m,b,y;const S=$=>(r+(c?o-$:$))%a,k=()=>{m!==b&&(e.lineTo(d,b),e.lineTo(d,m),e.lineTo(d,y))};for(l&&(v=i[S(0)],e.moveTo(v.x,v.y)),f=0;f<=o;++f){if(v=i[S(f)],v.skip)continue;const $=v.x,w=v.y,P=$|0;P===g?(w<m?m=w:w>b&&(b=w),d=(h*d+$)/++h):(k(),e.lineTo($,w),g=P,h=0,m=b=w),y=w}k()}function ho(e){const t=e.options,s=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!s?Sy:$y}function My(e){return e.stepped?mb:e.tension||e.cubicInterpolationMode==="monotone"?_b:On}function Py(e,t,s,n){let i=t._path;i||(i=t._path=new Path2D,t.path(i,s,n)&&i.closePath()),sh(e,t.options),e.stroke(i)}function Ay(e,t,s,n){const{segments:i,options:a}=t,r=ho(t);for(const o of i)sh(e,a,o.style),e.beginPath(),r(e,t,o,{start:s,end:s+n-1})&&e.closePath(),e.stroke()}const Cy=typeof Path2D=="function";function zy(e,t,s,n){Cy&&!t.options.segment?Py(e,t,s,n):Ay(e,t,s,n)}class gr extends an{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,s){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const i=n.spanGaps?this._loop:this._fullLoop;cb(this._points,n,t,i,s),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=$b(this,this.options.segment))}first(){const t=this.segments,s=this.points;return t.length&&s[t[0].start]}last(){const t=this.segments,s=this.points,n=t.length;return n&&s[t[n-1].end]}interpolate(t,s){const n=this.options,i=t[s],a=this.points,r=Bu(this,{property:s,start:i,end:i});if(!r.length)return;const o=[],l=My(n);let c,d;for(c=0,d=r.length;c<d;++c){const{start:h,end:f}=r[c],v=a[h],g=a[f];if(v===g){o.push(v);continue}const m=Math.abs((i-v[s])/(g[s]-v[s])),b=l(v,g,m,n.stepped);b[s]=t[s],o.push(b)}return o.length===1?o[0]:o}pathSegment(t,s,n){return ho(this)(t,this,s,n)}path(t,s,n){const i=this.segments,a=ho(this);let r=this._loop;s=s||0,n=n||this.points.length-s;for(const o of i)r&=a(t,this,o,{start:s,end:s+n-1});return!!r}draw(t,s,n,i){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),zy(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Pc(e,t,s,n){const i=e.options,{[s]:a}=e.getProps([s],n);return Math.abs(t-a)<i.radius+i.hitRadius}class Ty extends an{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,s,n){const i=this.options,{x:a,y:r}=this.getProps(["x","y"],n);return Math.pow(t-a,2)+Math.pow(s-r,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,s){return Pc(this,t,"x",s)}inYRange(t,s){return Pc(this,t,"y",s)}getCenterPoint(t){const{x:s,y:n}=this.getProps(["x","y"],t);return{x:s,y:n}}size(t){t=t||this.options||{};let s=t.radius||0;s=Math.max(s,s&&t.hoverRadius||0);const n=s&&t.borderWidth||0;return(s+n)*2}draw(t,s){const n=this.options;this.skip||n.radius<.1||!Zs(this,s,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,oo(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function ih(e,t){const{x:s,y:n,base:i,width:a,height:r}=e.getProps(["x","y","base","width","height"],t);let o,l,c,d,h;return e.horizontal?(h=r/2,o=Math.min(s,i),l=Math.max(s,i),c=n-h,d=n+h):(h=a/2,o=s-h,l=s+h,c=Math.min(n,i),d=Math.max(n,i)),{left:o,top:c,right:l,bottom:d}}function fn(e,t,s,n){return e?0:Ye(t,s,n)}function Ey(e,t,s){const n=e.options.borderWidth,i=e.borderSkipped,a=zu(n);return{t:fn(i.top,a.top,0,s),r:fn(i.right,a.right,0,t),b:fn(i.bottom,a.bottom,0,s),l:fn(i.left,a.left,0,t)}}function Dy(e,t,s){const{enableBorderRadius:n}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,a=Bn(i),r=Math.min(t,s),o=e.borderSkipped,l=n||ae(i);return{topLeft:fn(!l||o.top||o.left,a.topLeft,0,r),topRight:fn(!l||o.top||o.right,a.topRight,0,r),bottomLeft:fn(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:fn(!l||o.bottom||o.right,a.bottomRight,0,r)}}function Oy(e){const t=ih(e),s=t.right-t.left,n=t.bottom-t.top,i=Ey(e,s/2,n/2),a=Dy(e,s/2,n/2);return{outer:{x:t.left,y:t.top,w:s,h:n,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:s-i.l-i.r,h:n-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function jr(e,t,s,n){const i=t===null,a=s===null,o=e&&!(i&&a)&&ih(e,n);return o&&(i||Js(t,o.left,o.right))&&(a||Js(s,o.top,o.bottom))}function Ly(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Ry(e,t){e.rect(t.x,t.y,t.w,t.h)}function Nr(e,t,s={}){const n=e.x!==s.x?-t:0,i=e.y!==s.y?-t:0,a=(e.x+e.w!==s.x+s.w?t:0)-n,r=(e.y+e.h!==s.y+s.h?t:0)-i;return{x:e.x+n,y:e.y+i,w:e.w+a,h:e.h+r,radius:e.radius}}class Iy extends an{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:s,options:{borderColor:n,backgroundColor:i}}=this,{inner:a,outer:r}=Oy(this),o=Ly(r.radius)?Zi:Ry;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,Nr(r,s,a)),t.clip(),o(t,Nr(a,-s,r)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),o(t,Nr(a,s)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,s,n){return jr(this,t,s,n)}inXRange(t,s){return jr(this,t,null,s)}inYRange(t,s){return jr(this,null,t,s)}getCenterPoint(t){const{x:s,y:n,base:i,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(s+i)/2:s,y:a?n:(n+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var jy=Object.freeze({__proto__:null,ArcElement:xy,BarElement:Iy,LineElement:gr,PointElement:Ty});const fo=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ac=fo.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function ah(e){return fo[e%fo.length]}function rh(e){return Ac[e%Ac.length]}function Ny(e,t){return e.borderColor=ah(t),e.backgroundColor=rh(t),++t}function Fy(e,t){return e.backgroundColor=e.data.map(()=>ah(t++)),t}function By(e,t){return e.backgroundColor=e.data.map(()=>rh(t++)),t}function qy(e){let t=0;return(s,n)=>{const i=e.getDatasetMeta(n).controller;i instanceof Qo?t=Fy(s,t):i instanceof Uu?t=By(s,t):i&&(t=Ny(s,t))}}function Cc(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Vy(e){return e&&(e.borderColor||e.backgroundColor)}function Hy(){return ze.borderColor!=="rgba(0,0,0,0.1)"||ze.backgroundColor!=="rgba(0,0,0,0.1)"}var Wy={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,s){if(!s.enabled)return;const{data:{datasets:n},options:i}=e.config,{elements:a}=i,r=Cc(n)||Vy(i)||a&&Cc(a)||Hy();if(!s.forceOverride&&r)return;const o=qy(e);n.forEach(o)}};function Uy(e,t,s,n,i){const a=i.samples||n;if(a>=s)return e.slice(t,t+s);const r=[],o=(s-2)/(a-2);let l=0;const c=t+s-1;let d=t,h,f,v,g,m;for(r[l++]=e[d],h=0;h<a-2;h++){let b=0,y=0,S;const k=Math.floor((h+1)*o)+1+t,$=Math.min(Math.floor((h+2)*o)+1,s)+t,w=$-k;for(S=k;S<$;S++)b+=e[S].x,y+=e[S].y;b/=w,y/=w;const P=Math.floor(h*o)+1+t,z=Math.min(Math.floor((h+1)*o)+1,s)+t,{x:C,y:T}=e[d];for(v=g=-1,S=P;S<z;S++)g=.5*Math.abs((C-b)*(e[S].y-T)-(C-e[S].x)*(y-T)),g>v&&(v=g,f=e[S],m=S);r[l++]=f,d=m}return r[l++]=e[c],r}function Yy(e,t,s,n){let i=0,a=0,r,o,l,c,d,h,f,v,g,m;const b=[],y=t+s-1,S=e[t].x,$=e[y].x-S;for(r=t;r<t+s;++r){o=e[r],l=(o.x-S)/$*n,c=o.y;const w=l|0;if(w===d)c<g?(g=c,h=r):c>m&&(m=c,f=r),i=(a*i+o.x)/++a;else{const P=r-1;if(!ne(h)&&!ne(f)){const z=Math.min(h,f),C=Math.max(h,f);z!==v&&z!==P&&b.push({...e[z],x:i}),C!==v&&C!==P&&b.push({...e[C],x:i})}r>0&&P!==v&&b.push(e[P]),b.push(o),d=w,a=0,g=m=c,h=f=v=r}}return b}function oh(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function zc(e){e.data.datasets.forEach(t=>{oh(t)})}function Ky(e,t){const s=t.length;let n=0,i;const{iScale:a}=e,{min:r,max:o,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(n=Ye(Qs(t,a.axis,r).lo,0,s-1)),c?i=Ye(Qs(t,a.axis,o).hi+1,n,s)-n:i=s-n,{start:n,count:i}}var Xy={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,s)=>{if(!s.enabled){zc(e);return}const n=e.width;e.data.datasets.forEach((i,a)=>{const{_data:r,indexAxis:o}=i,l=e.getDatasetMeta(a),c=r||i.data;if(Li([o,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const d=e.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||e.options.parsing)return;let{start:h,count:f}=Ky(l,c);const v=s.threshold||4*n;if(f<=v){oh(i);return}ne(r)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let g;switch(s.algorithm){case"lttb":g=Uy(c,h,f,n,s);break;case"min-max":g=Yy(c,h,f,n);break;default:throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`)}i._decimated=g})},destroy(e){zc(e)}};function Gy(e,t,s){const n=e.segments,i=e.points,a=t.points,r=[];for(const o of n){let{start:l,end:c}=o;c=mr(l,c,i);const d=vo(s,i[l],i[c],o.loop);if(!t.segments){r.push({source:o,target:d,start:i[l],end:i[c]});continue}const h=Bu(t,d);for(const f of h){const v=vo(s,a[f.start],a[f.end],f.loop),g=Fu(o,i,v);for(const m of g)r.push({source:m,target:f,start:{[s]:Tc(d,v,"start",Math.max)},end:{[s]:Tc(d,v,"end",Math.min)}})}}return r}function vo(e,t,s,n){if(n)return;let i=t[e],a=s[e];return e==="angle"&&(i=ss(i),a=ss(a)),{property:e,start:i,end:a}}function Jy(e,t){const{x:s=null,y:n=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=mr(r,o,i);const l=i[r],c=i[o];n!==null?(a.push({x:l.x,y:n}),a.push({x:c.x,y:n})):s!==null&&(a.push({x:s,y:l.y}),a.push({x:s,y:c.y}))}),a}function mr(e,t,s){for(;t>e;t--){const n=s[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function Tc(e,t,s,n){return e&&t?n(e[s],t[s]):e?e[s]:t?t[s]:0}function lh(e,t){let s=[],n=!1;return Ce(e)?(n=!0,s=e):s=Jy(e,t),s.length?new gr({points:s,options:{tension:0},_loop:n,_fullLoop:n}):null}function Ec(e){return e&&e.fill!==!1}function Qy(e,t,s){let i=e[t].fill;const a=[t];let r;if(!s)return i;for(;i!==!1&&a.indexOf(i)===-1;){if(!Re(i))return i;if(r=e[i],!r)return!1;if(r.visible)return i;a.push(i),i=r.fill}return!1}function Zy(e,t,s){const n=nx(e);if(ae(n))return isNaN(n.value)?!1:n;let i=parseFloat(n);return Re(i)&&Math.floor(i)===i?tx(n[0],t,i,s):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function tx(e,t,s,n){return(e==="-"||e==="+")&&(s=t+s),s===t||s<0||s>=n?!1:s}function ex(e,t){let s=null;return e==="start"?s=t.bottom:e==="end"?s=t.top:ae(e)?s=t.getPixelForValue(e.value):t.getBasePixel&&(s=t.getBasePixel()),s}function sx(e,t,s){let n;return e==="start"?n=s:e==="end"?n=t.options.reverse?t.min:t.max:ae(e)?n=e.value:n=t.getBaseValue(),n}function nx(e){const t=e.options,s=t.fill;let n=Ut(s&&s.target,s);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function ix(e){const{scale:t,index:s,line:n}=e,i=[],a=n.segments,r=n.points,o=ax(t,s);o.push(lh({x:null,y:t.bottom},n));for(let l=0;l<a.length;l++){const c=a[l];for(let d=c.start;d<=c.end;d++)rx(i,r[d],o)}return new gr({points:i,options:{}})}function ax(e,t){const s=[],n=e.getMatchingVisibleMetas("line");for(let i=0;i<n.length;i++){const a=n[i];if(a.index===t)break;a.hidden||s.unshift(a.dataset)}return s}function rx(e,t,s){const n=[];for(let i=0;i<s.length;i++){const a=s[i],{first:r,last:o,point:l}=ox(a,t,"x");if(!(!l||r&&o)){if(r)n.unshift(l);else if(e.push(l),!o)break}}e.push(...n)}function ox(e,t,s){const n=e.interpolate(t,s);if(!n)return{};const i=n[s],a=e.segments,r=e.points;let o=!1,l=!1;for(let c=0;c<a.length;c++){const d=a[c],h=r[d.start][s],f=r[d.end][s];if(Js(i,h,f)){o=i===h,l=i===f;break}}return{first:o,last:l,point:n}}class ch{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,s,n){const{x:i,y:a,radius:r}=this;return s=s||{start:0,end:Me},t.arc(i,a,r,s.end,s.start,!0),!n.bounds}interpolate(t){const{x:s,y:n,radius:i}=this,a=t.angle;return{x:s+Math.cos(a)*i,y:n+Math.sin(a)*i,angle:a}}}function lx(e){const{chart:t,fill:s,line:n}=e;if(Re(s))return cx(t,s);if(s==="stack")return ix(e);if(s==="shape")return!0;const i=dx(e);return i instanceof ch?i:lh(i,n)}function cx(e,t){const s=e.getDatasetMeta(t);return s&&e.isDatasetVisible(t)?s.dataset:null}function dx(e){return(e.scale||{}).getPointPositionForValue?hx(e):ux(e)}function ux(e){const{scale:t={},fill:s}=e,n=ex(s,t);if(Re(n)){const i=t.isHorizontal();return{x:i?n:null,y:i?null:n}}return null}function hx(e){const{scale:t,fill:s}=e,n=t.options,i=t.getLabels().length,a=n.reverse?t.max:t.min,r=sx(s,t,a),o=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,a);return new ch({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<i;++l)o.push(t.getPointPositionForValue(l,r));return o}function Fr(e,t,s){const n=lx(t),{chart:i,index:a,line:r,scale:o,axis:l}=t,c=r.options,d=c.fill,h=c.backgroundColor,{above:f=h,below:v=h}=d||{},g=i.getDatasetMeta(a),m=qu(i,g);n&&r.points.length&&(hr(e,s),fx(e,{line:r,target:n,above:f,below:v,area:s,scale:o,axis:l,clip:m}),fr(e))}function fx(e,t){const{line:s,target:n,above:i,below:a,area:r,scale:o,clip:l}=t,c=s._loop?"angle":t.axis;e.save();let d=a;a!==i&&(c==="x"?(Dc(e,n,r.top),Br(e,{line:s,target:n,color:i,scale:o,property:c,clip:l}),e.restore(),e.save(),Dc(e,n,r.bottom)):c==="y"&&(Oc(e,n,r.left),Br(e,{line:s,target:n,color:a,scale:o,property:c,clip:l}),e.restore(),e.save(),Oc(e,n,r.right),d=i)),Br(e,{line:s,target:n,color:d,scale:o,property:c,clip:l}),e.restore()}function Dc(e,t,s){const{segments:n,points:i}=t;let a=!0,r=!1;e.beginPath();for(const o of n){const{start:l,end:c}=o,d=i[l],h=i[mr(l,c,i)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(d.x,s),e.lineTo(d.x,d.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(h.x,s)}e.lineTo(t.first().x,s),e.closePath(),e.clip()}function Oc(e,t,s){const{segments:n,points:i}=t;let a=!0,r=!1;e.beginPath();for(const o of n){const{start:l,end:c}=o,d=i[l],h=i[mr(l,c,i)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(s,d.y),e.lineTo(d.x,d.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(s,h.y)}e.lineTo(s,t.first().y),e.closePath(),e.clip()}function Br(e,t){const{line:s,target:n,property:i,color:a,scale:r,clip:o}=t,l=Gy(s,n,i);for(const{source:c,target:d,start:h,end:f}of l){const{style:{backgroundColor:v=a}={}}=c,g=n!==!0;e.save(),e.fillStyle=v,vx(e,r,o,g&&vo(i,h,f)),e.beginPath();const m=!!s.pathSegment(e,c);let b;if(g){m?e.closePath():Lc(e,n,f,i);const y=!!n.pathSegment(e,d,{move:m,reverse:!0});b=m&&y,b||Lc(e,n,h,i)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function vx(e,t,s,n){const i=t.chart.chartArea,{property:a,start:r,end:o}=n||{};if(a==="x"||a==="y"){let l,c,d,h;a==="x"?(l=r,c=i.top,d=o,h=i.bottom):(l=i.left,c=r,d=i.right,h=o),e.beginPath(),s&&(l=Math.max(l,s.left),d=Math.min(d,s.right),c=Math.max(c,s.top),h=Math.min(h,s.bottom)),e.rect(l,c,d-l,h-c),e.clip()}}function Lc(e,t,s,n){const i=t.interpolate(s,n);i&&e.lineTo(i.x,i.y)}var px={id:"filler",afterDatasetsUpdate(e,t,s){const n=(e.data.datasets||[]).length,i=[];let a,r,o,l;for(r=0;r<n;++r)a=e.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof gr&&(l={visible:e.isDatasetVisible(r),index:r,fill:Zy(o,r,n),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,i.push(l);for(r=0;r<n;++r)l=i[r],!(!l||l.fill===!1)&&(l.fill=Qy(i,r,s.propagate))},beforeDraw(e,t,s){const n=s.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let r=i.length-1;r>=0;--r){const o=i[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),n&&o.fill&&Fr(e.ctx,o,a))}},beforeDatasetsDraw(e,t,s){if(s.drawTime!=="beforeDatasetsDraw")return;const n=e.getSortedVisibleDatasetMetas();for(let i=n.length-1;i>=0;--i){const a=n[i].$filler;Ec(a)&&Fr(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,t,s){const n=t.meta.$filler;!Ec(n)||s.drawTime!=="beforeDatasetDraw"||Fr(e.ctx,n,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Rc=(e,t)=>{let{boxHeight:s=t,boxWidth:n=t}=e;return e.usePointStyle&&(s=Math.min(s,t),n=e.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:s,itemHeight:Math.max(t,s)}},gx=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Ic extends an{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s,n){this.maxWidth=t,this.maxHeight=s,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let s=Se(t.generateLabels,[this.chart],this)||[];t.filter&&(s=s.filter(n=>t.filter(n,this.chart.data))),t.sort&&(s=s.sort((n,i)=>t.sort(n,i,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:t,ctx:s}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,i=qe(n.font),a=i.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=Rc(n,a);let c,d;s.font=i.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(r,a,o,l)+10):(d=this.maxHeight,c=this._fitCols(r,i,o,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,s,n,i){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=i+o;let h=t;a.textAlign="left",a.textBaseline="middle";let f=-1,v=-d;return this.legendItems.forEach((g,m)=>{const b=n+s/2+a.measureText(g.text).width;(m===0||c[c.length-1]+b+2*o>r)&&(h+=d,c[c.length-(m>0?0:1)]=0,v+=d,f++),l[m]={left:0,top:v,row:f,width:b,height:i},c[c.length-1]+=b+o}),h}_fitCols(t,s,n,i){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=r-t;let h=o,f=0,v=0,g=0,m=0;return this.legendItems.forEach((b,y)=>{const{itemWidth:S,itemHeight:k}=mx(n,s,a,b,i);y>0&&v+k+2*o>d&&(h+=f+o,c.push({width:f,height:v}),g+=f+o,m++,f=v=0),l[y]={left:g,top:v,col:m,width:S,height:k},f=Math.max(f,S),v+=k+o}),h+=f,c.push({width:f,height:v}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:n,labels:{padding:i},rtl:a}}=this,r=ni(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=es(n,this.left+i,this.right-this.lineWidths[o]);for(const c of s)o!==c.row&&(o=c.row,l=es(n,this.left+i,this.right-this.lineWidths[o])),c.top+=this.top+t+i,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+i}else{let o=0,l=es(n,this.top+t+i,this.bottom-this.columnSizes[o].height);for(const c of s)c.col!==o&&(o=c.col,l=es(n,this.top+t+i,this.bottom-this.columnSizes[o].height)),c.top=l,c.left+=this.left+i,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;hr(t,this),this._draw(),fr(t)}}_draw(){const{options:t,columnSizes:s,lineWidths:n,ctx:i}=this,{align:a,labels:r}=t,o=ze.color,l=ni(t.rtl,this.left,this.width),c=qe(r.font),{padding:d}=r,h=c.size,f=h/2;let v;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:g,boxHeight:m,itemHeight:b}=Rc(r,h),y=function(P,z,C){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;i.save();const T=Ut(C.lineWidth,1);if(i.fillStyle=Ut(C.fillStyle,o),i.lineCap=Ut(C.lineCap,"butt"),i.lineDashOffset=Ut(C.lineDashOffset,0),i.lineJoin=Ut(C.lineJoin,"miter"),i.lineWidth=T,i.strokeStyle=Ut(C.strokeStyle,o),i.setLineDash(Ut(C.lineDash,[])),r.usePointStyle){const E={radius:m*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:T},R=l.xPlus(P,g/2),N=z+f;Cu(i,E,R,N,r.pointStyleWidth&&g)}else{const E=z+Math.max((h-m)/2,0),R=l.leftForLtr(P,g),N=Bn(C.borderRadius);i.beginPath(),Object.values(N).some(Z=>Z!==0)?Zi(i,{x:R,y:E,w:g,h:m,radius:N}):i.rect(R,E,g,m),i.fill(),T!==0&&i.stroke()}i.restore()},S=function(P,z,C){Un(i,C.text,P,z+b/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},k=this.isHorizontal(),$=this._computeTitleHeight();k?v={x:es(a,this.left+d,this.right-n[0]),y:this.top+d+$,line:0}:v={x:this.left+d,y:es(a,this.top+$+d,this.bottom-s[0].height),line:0},Iu(this.ctx,t.textDirection);const w=b+d;this.legendItems.forEach((P,z)=>{i.strokeStyle=P.fontColor,i.fillStyle=P.fontColor;const C=i.measureText(P.text).width,T=l.textAlign(P.textAlign||(P.textAlign=r.textAlign)),E=g+f+C;let R=v.x,N=v.y;l.setWidth(this.width),k?z>0&&R+E+d>this.right&&(N=v.y+=w,v.line++,R=v.x=es(a,this.left+d,this.right-n[v.line])):z>0&&N+w>this.bottom&&(R=v.x=R+s[v.line].width+d,v.line++,N=v.y=es(a,this.top+$+d,this.bottom-s[v.line].height));const Z=l.x(R);if(y(Z,N,P),R=P1(T,R+g+f,k?R+E:this.right,t.rtl),S(l.x(R),N,P),k)v.x+=E+d;else if(typeof P.text!="string"){const K=c.lineHeight;v.y+=dh(P,K)+d}else v.y+=w}),ju(this.ctx,t.textDirection)}drawTitle(){const t=this.options,s=t.title,n=qe(s.font),i=is(s.padding);if(!s.display)return;const a=ni(t.rtl,this.left,this.width),r=this.ctx,o=s.position,l=n.size/2,c=i.top+l;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+c,h=es(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((m,b)=>Math.max(m,b.height),0);d=c+es(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const v=es(o,h,h+f);r.textAlign=a.textAlign(Ho(o)),r.textBaseline="middle",r.strokeStyle=s.color,r.fillStyle=s.color,r.font=n.string,Un(r,s.text,v,d,n)}_computeTitleHeight(){const t=this.options.title,s=qe(t.font),n=is(t.padding);return t.display?s.lineHeight+n.height:0}_getLegendItemAt(t,s){let n,i,a;if(Js(t,this.left,this.right)&&Js(s,this.top,this.bottom)){for(a=this.legendHitBoxes,n=0;n<a.length;++n)if(i=a[n],Js(t,i.left,i.left+i.width)&&Js(s,i.top,i.top+i.height))return this.legendItems[n]}return null}handleEvent(t){const s=this.options;if(!yx(t.type,s))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,a=gx(i,n);i&&!a&&Se(s.onLeave,[t,i,this],this),this._hoveredItem=n,n&&!a&&Se(s.onHover,[t,n,this],this)}else n&&Se(s.onClick,[t,n,this],this)}}function mx(e,t,s,n,i){const a=_x(n,e,t,s),r=bx(i,n,t.lineHeight);return{itemWidth:a,itemHeight:r}}function _x(e,t,s,n){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((a,r)=>a.length>r.length?a:r)),t+s.size/2+n.measureText(i).width}function bx(e,t,s){let n=e;return typeof t.text!="string"&&(n=dh(t,s)),n}function dh(e,t){const s=e.text?e.text.length:0;return t*s}function yx(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var xx={id:"legend",_element:Ic,start(e,t,s){const n=e.legend=new Ic({ctx:e.ctx,options:s,chart:e});ns.configure(e,n,s),ns.addBox(e,n)},stop(e){ns.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,s){const n=e.legend;ns.configure(e,n,s),n.options=s},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,s){const n=t.datasetIndex,i=s.chart;i.isDatasetVisible(n)?(i.hide(n),t.hidden=!0):(i.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:s,pointStyle:n,textAlign:i,color:a,useBorderRadius:r,borderRadius:o}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(s?0:void 0),d=is(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:r&&(o||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class tl extends an{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=s;const i=Ce(n.text)?n.text.length:1;this._padding=is(n.padding);const a=i*qe(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:s,left:n,bottom:i,right:a,options:r}=this,o=r.align;let l=0,c,d,h;return this.isHorizontal()?(d=es(o,n,a),h=s+t,c=a-n):(r.position==="left"?(d=n+t,h=es(o,i,s),l=pe*-.5):(d=a-t,h=es(o,s,i),l=pe*.5),c=i-s),{titleX:d,titleY:h,maxWidth:c,rotation:l}}draw(){const t=this.ctx,s=this.options;if(!s.display)return;const n=qe(s.font),a=n.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:c}=this._drawArgs(a);Un(t,s.text,0,0,n,{color:s.color,maxWidth:l,rotation:c,textAlign:Ho(s.align),textBaseline:"middle",translation:[r,o]})}}function kx(e,t){const s=new tl({ctx:e.ctx,options:t,chart:e});ns.configure(e,s,t),ns.addBox(e,s),e.titleBlock=s}var wx={id:"title",_element:tl,start(e,t,s){kx(e,s)},stop(e){const t=e.titleBlock;ns.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,s){const n=e.titleBlock;ns.configure(e,n,s),n.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Aa=new WeakMap;var $x={id:"subtitle",start(e,t,s){const n=new tl({ctx:e.ctx,options:s,chart:e});ns.configure(e,n,s),ns.addBox(e,n),Aa.set(e,n)},stop(e){ns.removeBox(e,Aa.get(e)),Aa.delete(e)},beforeUpdate(e,t,s){const n=Aa.get(e);ns.configure(e,n,s),n.options=s},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ii={average(e){if(!e.length)return!1;let t,s,n=new Set,i=0,a=0;for(t=0,s=e.length;t<s;++t){const o=e[t].element;if(o&&o.hasValue()){const l=o.tooltipPosition();n.add(l.x),i+=l.y,++a}}return a===0||n.size===0?!1:{x:[...n].reduce((o,l)=>o+l)/n.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let s=t.x,n=t.y,i=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=e.length;a<r;++a){const l=e[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=ao(t,c);d<i&&(i=d,o=l)}}if(o){const l=o.tooltipPosition();s=l.x,n=l.y}return{x:s,y:n}}};function Ls(e,t){return t&&(Ce(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Us(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Sx(e,t){const{element:s,datasetIndex:n,index:i}=t,a=e.getDatasetMeta(n).controller,{label:r,value:o}=a.getLabelAndValue(i);return{chart:e,label:r,parsed:a.getParsed(i),raw:e.data.datasets[n].data[i],formattedValue:o,dataset:a.getDataset(),dataIndex:i,datasetIndex:n,element:s}}function jc(e,t){const s=e.chart.ctx,{body:n,footer:i,title:a}=e,{boxWidth:r,boxHeight:o}=t,l=qe(t.bodyFont),c=qe(t.titleFont),d=qe(t.footerFont),h=a.length,f=i.length,v=n.length,g=is(t.padding);let m=g.height,b=0,y=n.reduce(($,w)=>$+w.before.length+w.lines.length+w.after.length,0);if(y+=e.beforeBody.length+e.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),y){const $=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;m+=v*$+(y-v)*l.lineHeight+(y-1)*t.bodySpacing}f&&(m+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let S=0;const k=function($){b=Math.max(b,s.measureText($).width+S)};return s.save(),s.font=c.string,xe(e.title,k),s.font=l.string,xe(e.beforeBody.concat(e.afterBody),k),S=t.displayColors?r+2+t.boxPadding:0,xe(n,$=>{xe($.before,k),xe($.lines,k),xe($.after,k)}),S=0,s.font=d.string,xe(e.footer,k),s.restore(),b+=g.width,{width:b,height:m}}function Mx(e,t){const{y:s,height:n}=t;return s<n/2?"top":s>e.height-n/2?"bottom":"center"}function Px(e,t,s,n){const{x:i,width:a}=n,r=s.caretSize+s.caretPadding;if(e==="left"&&i+a+r>t.width||e==="right"&&i-a-r<0)return!0}function Ax(e,t,s,n){const{x:i,width:a}=s,{width:r,chartArea:{left:o,right:l}}=e;let c="center";return n==="center"?c=i<=(o+l)/2?"left":"right":i<=a/2?c="left":i>=r-a/2&&(c="right"),Px(c,e,t,s)&&(c="center"),c}function Nc(e,t,s){const n=s.yAlign||t.yAlign||Mx(e,s);return{xAlign:s.xAlign||t.xAlign||Ax(e,t,s,n),yAlign:n}}function Cx(e,t){let{x:s,width:n}=e;return t==="right"?s-=n:t==="center"&&(s-=n/2),s}function zx(e,t,s){let{y:n,height:i}=e;return t==="top"?n+=s:t==="bottom"?n-=i+s:n-=i/2,n}function Fc(e,t,s,n){const{caretSize:i,caretPadding:a,cornerRadius:r}=e,{xAlign:o,yAlign:l}=s,c=i+a,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:v}=Bn(r);let g=Cx(t,o);const m=zx(t,l,c);return l==="center"?o==="left"?g+=c:o==="right"&&(g-=c):o==="left"?g-=Math.max(d,f)+i:o==="right"&&(g+=Math.max(h,v)+i),{x:Ye(g,0,n.width-t.width),y:Ye(m,0,n.height-t.height)}}function Ca(e,t,s){const n=is(s.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-n.right:e.x+n.left}function Bc(e){return Ls([],Us(e))}function Tx(e,t,s){return $n(e,{tooltip:t,tooltipItems:s,type:"tooltip"})}function qc(e,t){const s=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return s?e.override(s):e}const uh={beforeTitle:Hs,title(e){if(e.length>0){const t=e[0],s=t.chart.data.labels,n=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return s[t.dataIndex]}return""},afterTitle:Hs,beforeBody:Hs,beforeLabel:Hs,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const s=e.formattedValue;return ne(s)||(t+=s),t},labelColor(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:Hs,afterBody:Hs,beforeFooter:Hs,footer:Hs,afterFooter:Hs};function os(e,t,s,n){const i=e[t].call(s,n);return typeof i>"u"?uh[t].call(s,n):i}class Vc extends an{static positioners=Ii;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const s=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&s.options.animation&&n.animations,a=new Vu(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Tx(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,s){const{callbacks:n}=s,i=os(n,"beforeTitle",this,t),a=os(n,"title",this,t),r=os(n,"afterTitle",this,t);let o=[];return o=Ls(o,Us(i)),o=Ls(o,Us(a)),o=Ls(o,Us(r)),o}getBeforeBody(t,s){return Bc(os(s.callbacks,"beforeBody",this,t))}getBody(t,s){const{callbacks:n}=s,i=[];return xe(t,a=>{const r={before:[],lines:[],after:[]},o=qc(n,a);Ls(r.before,Us(os(o,"beforeLabel",this,a))),Ls(r.lines,os(o,"label",this,a)),Ls(r.after,Us(os(o,"afterLabel",this,a))),i.push(r)}),i}getAfterBody(t,s){return Bc(os(s.callbacks,"afterBody",this,t))}getFooter(t,s){const{callbacks:n}=s,i=os(n,"beforeFooter",this,t),a=os(n,"footer",this,t),r=os(n,"afterFooter",this,t);let o=[];return o=Ls(o,Us(i)),o=Ls(o,Us(a)),o=Ls(o,Us(r)),o}_createItems(t){const s=this._active,n=this.chart.data,i=[],a=[],r=[];let o=[],l,c;for(l=0,c=s.length;l<c;++l)o.push(Sx(this.chart,s[l]));return t.filter&&(o=o.filter((d,h,f)=>t.filter(d,h,f,n))),t.itemSort&&(o=o.sort((d,h)=>t.itemSort(d,h,n))),xe(o,d=>{const h=qc(t.callbacks,d);i.push(os(h,"labelColor",this,d)),a.push(os(h,"labelPointStyle",this,d)),r.push(os(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,s){const n=this.options.setContext(this.getContext()),i=this._active;let a,r=[];if(!i.length)this.opacity!==0&&(a={opacity:0});else{const o=Ii[n.position].call(this,i,this._eventPosition);r=this._createItems(n),this.title=this.getTitle(r,n),this.beforeBody=this.getBeforeBody(r,n),this.body=this.getBody(r,n),this.afterBody=this.getAfterBody(r,n),this.footer=this.getFooter(r,n);const l=this._size=jc(this,n),c=Object.assign({},o,l),d=Nc(this.chart,n,c),h=Fc(n,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(t,s,n,i){const a=this.getCaretPosition(t,n,i);s.lineTo(a.x1,a.y1),s.lineTo(a.x2,a.y2),s.lineTo(a.x3,a.y3)}getCaretPosition(t,s,n){const{xAlign:i,yAlign:a}=this,{caretSize:r,cornerRadius:o}=n,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:h}=Bn(o),{x:f,y:v}=t,{width:g,height:m}=s;let b,y,S,k,$,w;return a==="center"?($=v+m/2,i==="left"?(b=f,y=b-r,k=$+r,w=$-r):(b=f+g,y=b+r,k=$-r,w=$+r),S=b):(i==="left"?y=f+Math.max(l,d)+r:i==="right"?y=f+g-Math.max(c,h)-r:y=this.caretX,a==="top"?(k=v,$=k-r,b=y-r,S=y+r):(k=v+m,$=k+r,b=y+r,S=y-r),w=k),{x1:b,x2:y,x3:S,y1:k,y2:$,y3:w}}drawTitle(t,s,n){const i=this.title,a=i.length;let r,o,l;if(a){const c=ni(n.rtl,this.x,this.width);for(t.x=Ca(this,n.titleAlign,n),s.textAlign=c.textAlign(n.titleAlign),s.textBaseline="middle",r=qe(n.titleFont),o=n.titleSpacing,s.fillStyle=n.titleColor,s.font=r.string,l=0;l<a;++l)s.fillText(i[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=n.titleMarginBottom-o)}}_drawColorBox(t,s,n,i,a){const r=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=a,d=qe(a.bodyFont),h=Ca(this,"left",a),f=i.x(h),v=l<d.lineHeight?(d.lineHeight-l)/2:0,g=s.y+v;if(a.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},b=i.leftForLtr(f,c)+c/2,y=g+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,oo(t,m,b,y),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,oo(t,m,b,y)}else{t.lineWidth=ae(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const m=i.leftForLtr(f,c),b=i.leftForLtr(i.xPlus(f,1),c-2),y=Bn(r.borderRadius);Object.values(y).some(S=>S!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,Zi(t,{x:m,y:g,w:c,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Zi(t,{x:b,y:g+1,w:c-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(m,g,c,l),t.strokeRect(m,g,c,l),t.fillStyle=r.backgroundColor,t.fillRect(b,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,s,n){const{body:i}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:d}=n,h=qe(n.bodyFont);let f=h.lineHeight,v=0;const g=ni(n.rtl,this.x,this.width),m=function(C){s.fillText(C,g.x(t.x+v),t.y+f/2),t.y+=f+a},b=g.textAlign(r);let y,S,k,$,w,P,z;for(s.textAlign=r,s.textBaseline="middle",s.font=h.string,t.x=Ca(this,b,n),s.fillStyle=n.bodyColor,xe(this.beforeBody,m),v=o&&b!=="right"?r==="center"?c/2+d:c+2+d:0,$=0,P=i.length;$<P;++$){for(y=i[$],S=this.labelTextColors[$],s.fillStyle=S,xe(y.before,m),k=y.lines,o&&k.length&&(this._drawColorBox(s,t,$,g,n),f=Math.max(h.lineHeight,l)),w=0,z=k.length;w<z;++w)m(k[w]),f=h.lineHeight;xe(y.after,m)}v=0,f=h.lineHeight,xe(this.afterBody,m),t.y-=a}drawFooter(t,s,n){const i=this.footer,a=i.length;let r,o;if(a){const l=ni(n.rtl,this.x,this.width);for(t.x=Ca(this,n.footerAlign,n),t.y+=n.footerMarginTop,s.textAlign=l.textAlign(n.footerAlign),s.textBaseline="middle",r=qe(n.footerFont),s.fillStyle=n.footerColor,s.font=r.string,o=0;o<a;++o)s.fillText(i[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+n.footerSpacing}}drawBackground(t,s,n,i){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:c,height:d}=n,{topLeft:h,topRight:f,bottomLeft:v,bottomRight:g}=Bn(i.cornerRadius);s.fillStyle=i.backgroundColor,s.strokeStyle=i.borderColor,s.lineWidth=i.borderWidth,s.beginPath(),s.moveTo(o+h,l),r==="top"&&this.drawCaret(t,s,n,i),s.lineTo(o+c-f,l),s.quadraticCurveTo(o+c,l,o+c,l+f),r==="center"&&a==="right"&&this.drawCaret(t,s,n,i),s.lineTo(o+c,l+d-g),s.quadraticCurveTo(o+c,l+d,o+c-g,l+d),r==="bottom"&&this.drawCaret(t,s,n,i),s.lineTo(o+v,l+d),s.quadraticCurveTo(o,l+d,o,l+d-v),r==="center"&&a==="left"&&this.drawCaret(t,s,n,i),s.lineTo(o,l+h),s.quadraticCurveTo(o,l,o+h,l),s.closePath(),s.fill(),i.borderWidth>0&&s.stroke()}_updateAnimationTarget(t){const s=this.chart,n=this.$animations,i=n&&n.x,a=n&&n.y;if(i||a){const r=Ii[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=jc(this,t),l=Object.assign({},r,this._size),c=Nc(s,t,l),d=Fc(t,l,c,s);(i._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const s=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(s);const i={width:this.width,height:this.height},a={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const r=is(s.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&o&&(t.save(),t.globalAlpha=n,this.drawBackground(a,t,i,s),Iu(t,s.textDirection),a.y+=r.top,this.drawTitle(a,t,s),this.drawBody(a,t,s),this.drawFooter(a,t,s),ju(t,s.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,s){const n=this._active,i=t.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),a=!Ka(n,i),r=this._positionChanged(i,s);(a||r)&&(this._active=i,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,s,n=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,a=this._active||[],r=this._getActiveElements(t,a,s,n),o=this._positionChanged(r,t),l=s||!Ka(r,a)||o;return l&&(this._active=r,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,s))),l}_getActiveElements(t,s,n,i){const a=this.options;if(t.type==="mouseout")return[];if(!i)return s.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,a.mode,a,n);return a.reverse&&r.reverse(),r}_positionChanged(t,s){const{caretX:n,caretY:i,options:a}=this,r=Ii[a.position].call(this,t,s);return r!==!1&&(n!==r.x||i!==r.y)}}var Ex={id:"tooltip",_element:Vc,positioners:Ii,afterInit(e,t,s){s&&(e.tooltip=new Vc({chart:e,options:s}))},beforeUpdate(e,t,s){e.tooltip&&e.tooltip.initialize(s)},reset(e,t,s){e.tooltip&&e.tooltip.initialize(s)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const s={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",s)}},afterEvent(e,t){if(e.tooltip){const s=t.replay;e.tooltip.handleEvent(t.event,s,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:uh},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Dx=Object.freeze({__proto__:null,Colors:Wy,Decimation:Xy,Filler:px,Legend:xx,SubTitle:$x,Title:wx,Tooltip:Ex});const Ox=(e,t,s,n)=>(typeof t=="string"?(s=e.push(t)-1,n.unshift({index:s,label:t})):isNaN(t)&&(s=null),s);function Lx(e,t,s,n){const i=e.indexOf(t);if(i===-1)return Ox(e,t,s,n);const a=e.lastIndexOf(t);return i!==a?s:i}const Rx=(e,t)=>e===null?null:Ye(Math.round(e),0,t);function Hc(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Ix extends Gn{static id="category";static defaults={ticks:{callback:Hc}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const s=this._addedLabels;if(s.length){const n=this.getLabels();for(const{index:i,label:a}of s)n[i]===a&&n.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,s){if(ne(t))return null;const n=this.getLabels();return s=isFinite(s)&&n[s]===t?s:Lx(n,t,Ut(s,t),this._addedLabels),Rx(s,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),s||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,s=this.max,n=this.options.offset,i=[];let a=this.getLabels();a=t===0&&s===a.length-1?a:a.slice(t,s+1),this._valueRange=Math.max(a.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let r=t;r<=s;r++)i.push({value:r});return i}getLabelForValue(t){return Hc.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function jx(e,t){const s=[],{bounds:i,step:a,min:r,max:o,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:f}=e,v=a||1,g=d-1,{min:m,max:b}=t,y=!ne(r),S=!ne(o),k=!ne(c),$=(b-m)/(h+1);let w=jl((b-m)/g/v)*v,P,z,C,T;if(w<1e-14&&!y&&!S)return[{value:m},{value:b}];T=Math.ceil(b/w)-Math.floor(m/w),T>g&&(w=jl(T*w/g/v)*v),ne(l)||(P=Math.pow(10,l),w=Math.ceil(w*P)/P),i==="ticks"?(z=Math.floor(m/w)*w,C=Math.ceil(b/w)*w):(z=m,C=b),y&&S&&a&&y1((o-r)/a,w/1e3)?(T=Math.round(Math.min((o-r)/w,d)),w=(o-r)/T,z=r,C=o):k?(z=y?r:z,C=S?o:C,T=c-1,w=(C-z)/T):(T=(C-z)/w,Hi(T,Math.round(T),w/1e3)?T=Math.round(T):T=Math.ceil(T));const E=Math.max(Nl(w),Nl(z));P=Math.pow(10,ne(l)?E:l),z=Math.round(z*P)/P,C=Math.round(C*P)/P;let R=0;for(y&&(f&&z!==r?(s.push({value:r}),z<r&&R++,Hi(Math.round((z+R*w)*P)/P,r,Wc(r,$,e))&&R++):z<r&&R++);R<T;++R){const N=Math.round((z+R*w)*P)/P;if(S&&N>o)break;s.push({value:N})}return S&&f&&C!==o?s.length&&Hi(s[s.length-1].value,o,Wc(o,$,e))?s[s.length-1].value=o:s.push({value:o}):(!S||C===o)&&s.push({value:C}),s}function Wc(e,t,{horizontal:s,minRotation:n}){const i=Cs(n),a=(s?Math.sin(i):Math.cos(i))||.001,r=.75*t*(""+e).length;return Math.min(t/a,r)}class er extends Gn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,s){return ne(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:s,maxDefined:n}=this.getUserBounds();let{min:i,max:a}=this;const r=l=>i=s?i:l,o=l=>a=n?a:l;if(t){const l=Bs(i),c=Bs(a);l<0&&c<0?o(0):l>0&&c>0&&r(0)}if(i===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(i-l)}this.min=i,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:s,stepSize:n}=t,i;return n?(i=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),s=s||11),s&&(i=Math.min(s,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,s=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const i={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},a=this._range||this,r=jx(i,a);return t.bounds==="ticks"&&yu(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let s=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-s)/Math.max(t.length-1,1)/2;s-=i,n+=i}this._startValue=s,this._endValue=n,this._valueRange=n-s}getLabelForValue(t){return da(t,this.chart.options.locale,this.options.ticks.format)}}class Nx extends er{static id="linear";static defaults={ticks:{callback:ur.formatters.numeric}};determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=Re(t)?t:0,this.max=Re(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),s=t?this.width:this.height,n=Cs(this.options.ticks.minRotation),i=(t?Math.sin(n):Math.cos(n))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,a.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const ea=e=>Math.floor(un(e)),Tn=(e,t)=>Math.pow(10,ea(e)+t);function Uc(e){return e/Math.pow(10,ea(e))===1}function Yc(e,t,s){const n=Math.pow(10,s),i=Math.floor(e/n);return Math.ceil(t/n)-i}function Fx(e,t){const s=t-e;let n=ea(s);for(;Yc(e,t,n)>10;)n++;for(;Yc(e,t,n)<10;)n--;return Math.min(n,ea(e))}function Bx(e,{min:t,max:s}){t=ps(e.min,t);const n=[],i=ea(t);let a=Fx(t,s),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=i>a?Math.pow(10,i):0,c=Math.round((t-l)*r)/r,d=Math.floor((t-l)/o/10)*o*10;let h=Math.floor((c-d)/Math.pow(10,a)),f=ps(e.min,Math.round((l+d+h*Math.pow(10,a))*r)/r);for(;f<s;)n.push({value:f,major:Uc(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,r=a>=0?1:r),f=Math.round((l+d+h*Math.pow(10,a))*r)/r;const v=ps(e.max,f);return n.push({value:v,major:Uc(v),significand:h}),n}class qx extends Gn{static id="logarithmic";static defaults={ticks:{callback:ur.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,s){const n=er.prototype.parse.apply(this,[t,s]);if(n===0){this._zero=!0;return}return Re(n)&&n>0?n:null}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=Re(t)?Math.max(0,t):null,this.max=Re(s)?Math.max(0,s):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Re(this._userMin)&&(this.min=t===Tn(this.min,0)?Tn(this.min,-1):Tn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let n=this.min,i=this.max;const a=o=>n=t?n:o,r=o=>i=s?i:o;n===i&&(n<=0?(a(1),r(10)):(a(Tn(n,-1)),r(Tn(i,1)))),n<=0&&a(Tn(i,-1)),i<=0&&r(Tn(n,1)),this.min=n,this.max=i}buildTicks(){const t=this.options,s={min:this._userMin,max:this._userMax},n=Bx(s,this);return t.bounds==="ticks"&&yu(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":da(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=un(t),this._valueRange=un(this.max)-un(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(un(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const s=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+s*this._valueRange)}}function po(e){const t=e.ticks;if(t.display&&e.display){const s=is(t.backdropPadding);return Ut(t.font&&t.font.size,ze.font.size)+s.height}return 0}function Vx(e,t,s){return s=Ce(s)?s:[s],{w:I1(e,t.string,s),h:s.length*t.lineHeight}}function Kc(e,t,s,n,i){return e===n||e===i?{start:t-s/2,end:t+s/2}:e<n||e>i?{start:t-s,end:t}:{start:t,end:t+s}}function Hx(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},s=Object.assign({},t),n=[],i=[],a=e._pointLabels.length,r=e.options.pointLabels,o=r.centerPointLabels?pe/a:0;for(let l=0;l<a;l++){const c=r.setContext(e.getPointLabelContext(l));i[l]=c.padding;const d=e.getPointPosition(l,e.drawingArea+i[l],o),h=qe(c.font),f=Vx(e.ctx,h,e._pointLabels[l]);n[l]=f;const v=ss(e.getIndexAngle(l)+o),g=Math.round(qo(v)),m=Kc(g,d.x,f.w,0,180),b=Kc(g,d.y,f.h,90,270);Wx(s,t,v,m,b)}e.setCenterPoint(t.l-s.l,s.r-t.r,t.t-s.t,s.b-t.b),e._pointLabelItems=Kx(e,n,i)}function Wx(e,t,s,n,i){const a=Math.abs(Math.sin(s)),r=Math.abs(Math.cos(s));let o=0,l=0;n.start<t.l?(o=(t.l-n.start)/a,e.l=Math.min(e.l,t.l-o)):n.end>t.r&&(o=(n.end-t.r)/a,e.r=Math.max(e.r,t.r+o)),i.start<t.t?(l=(t.t-i.start)/r,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/r,e.b=Math.max(e.b,t.b+l))}function Ux(e,t,s){const n=e.drawingArea,{extra:i,additionalAngle:a,padding:r,size:o}=s,l=e.getPointPosition(t,n+i+r,a),c=Math.round(qo(ss(l.angle+je))),d=Jx(l.y,o.h,c),h=Xx(c),f=Gx(l.x,o.w,h);return{visible:!0,x:l.x,y:d,textAlign:h,left:f,top:d,right:f+o.w,bottom:d+o.h}}function Yx(e,t){if(!t)return!0;const{left:s,top:n,right:i,bottom:a}=e;return!(Zs({x:s,y:n},t)||Zs({x:s,y:a},t)||Zs({x:i,y:n},t)||Zs({x:i,y:a},t))}function Kx(e,t,s){const n=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:po(a)/2,additionalAngle:r?pe/i:0};let c;for(let d=0;d<i;d++){l.padding=s[d],l.size=t[d];const h=Ux(e,d,l);n.push(h),o==="auto"&&(h.visible=Yx(h,c),h.visible&&(c=h))}return n}function Xx(e){return e===0||e===180?"center":e<180?"left":"right"}function Gx(e,t,s){return s==="right"?e-=t:s==="center"&&(e-=t/2),e}function Jx(e,t,s){return s===90||s===270?e-=t/2:(s>270||s<90)&&(e-=t),e}function Qx(e,t,s){const{left:n,top:i,right:a,bottom:r}=s,{backdropColor:o}=t;if(!ne(o)){const l=Bn(t.borderRadius),c=is(t.backdropPadding);e.fillStyle=o;const d=n-c.left,h=i-c.top,f=a-n+c.width,v=r-i+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Zi(e,{x:d,y:h,w:f,h:v,radius:l}),e.fill()):e.fillRect(d,h,f,v)}}function Zx(e,t){const{ctx:s,options:{pointLabels:n}}=e;for(let i=t-1;i>=0;i--){const a=e._pointLabelItems[i];if(!a.visible)continue;const r=n.setContext(e.getPointLabelContext(i));Qx(s,r,a);const o=qe(r.font),{x:l,y:c,textAlign:d}=a;Un(s,e._pointLabels[i],l,c+o.lineHeight/2,o,{color:r.color,textAlign:d,textBaseline:"middle"})}}function hh(e,t,s,n){const{ctx:i}=e;if(s)i.arc(e.xCenter,e.yCenter,t,0,Me);else{let a=e.getPointPosition(0,t);i.moveTo(a.x,a.y);for(let r=1;r<n;r++)a=e.getPointPosition(r,t),i.lineTo(a.x,a.y)}}function t2(e,t,s,n,i){const a=e.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!n||!o||!l||s<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),hh(e,s,r,n),a.closePath(),a.stroke(),a.restore())}function e2(e,t,s){return $n(e,{label:s,index:t,type:"pointLabel"})}class s2 extends er{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:ur.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=is(po(this.options)/2),s=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+s/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(s,n)/2)}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!1);this.min=Re(t)&&!isNaN(t)?t:0,this.max=Re(s)&&!isNaN(s)?s:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/po(this.options))}generateTickLabels(t){er.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((s,n)=>{const i=Se(this.options.pointLabels.callback,[s,n],this);return i||i===0?i:""}).filter((s,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?Hx(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,s,n,i){this.xCenter+=Math.floor((t-s)/2),this.yCenter+=Math.floor((n-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,s,n,i))}getIndexAngle(t){const s=Me/(this._pointLabels.length||1),n=this.options.startAngle||0;return ss(t*s+Cs(n))}getDistanceFromCenterForValue(t){if(ne(t))return NaN;const s=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*s:(t-this.min)*s}getValueForDistanceFromCenter(t){if(ne(t))return NaN;const s=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-s:this.min+s}getPointLabelContext(t){const s=this._pointLabels||[];if(t>=0&&t<s.length){const n=s[t];return e2(this.getContext(),t,n)}}getPointPosition(t,s,n=0){const i=this.getIndexAngle(t)-je+n;return{x:Math.cos(i)*s+this.xCenter,y:Math.sin(i)*s+this.yCenter,angle:i}}getPointPositionForValue(t,s){return this.getPointPosition(t,this.getDistanceFromCenterForValue(s))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:s,top:n,right:i,bottom:a}=this._pointLabelItems[t];return{left:s,top:n,right:i,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:s}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),hh(this,this.getDistanceFromCenterForValue(this._endValue),s,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,s=this.options,{angleLines:n,grid:i,border:a}=s,r=this._pointLabels.length;let o,l,c;if(s.pointLabels.display&&Zx(this,r),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),v=i.setContext(f),g=a.setContext(f);t2(this,v,l,r,g)}}),n.display){for(t.save(),o=r-1;o>=0;o--){const d=n.setContext(this.getPointLabelContext(o)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(s.reverse?this.min:this.max),c=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,s=this.options,n=s.ticks;if(!n.display)return;const i=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&this.min>=0&&!s.reverse)return;const c=n.setContext(this.getContext(l)),d=qe(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,r=t.measureText(o.label).width,t.fillStyle=c.backdropColor;const h=is(c.backdropPadding);t.fillRect(-r/2-h.left,-a-d.size/2-h.top,r+h.width,d.size+h.height)}Un(t,o.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const _r={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},hs=Object.keys(_r);function Xc(e,t){return e-t}function Gc(e,t){if(ne(t))return null;const s=e._adapter,{parser:n,round:i,isoWeekday:a}=e._parseOpts;let r=t;return typeof n=="function"&&(r=n(r)),Re(r)||(r=typeof n=="string"?s.parse(r,n):s.parse(r)),r===null?null:(i&&(r=i==="week"&&(pi(a)||a===!0)?s.startOf(r,"isoWeek",a):s.startOf(r,i)),+r)}function Jc(e,t,s,n){const i=hs.length;for(let a=hs.indexOf(e);a<i-1;++a){const r=_r[hs[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((s-t)/(o*r.size))<=n)return hs[a]}return hs[i-1]}function n2(e,t,s,n,i){for(let a=hs.length-1;a>=hs.indexOf(s);a--){const r=hs[a];if(_r[r].common&&e._adapter.diff(i,n,r)>=t-1)return r}return hs[s?hs.indexOf(s):0]}function i2(e){for(let t=hs.indexOf(e)+1,s=hs.length;t<s;++t)if(_r[hs[t]].common)return hs[t]}function Qc(e,t,s){if(!s)e[t]=!0;else if(s.length){const{lo:n,hi:i}=Vo(s,t),a=s[n]>=t?s[n]:s[i];e[a]=!0}}function a2(e,t,s,n){const i=e._adapter,a=+i.startOf(t[0].value,n),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+i.add(o,1,n))l=s[o],l>=0&&(t[l].major=!0);return t}function Zc(e,t,s){const n=[],i={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],i[o]=r,n.push({value:o,major:!1});return a===0||!s?n:a2(e,n,i,s)}class go extends Gn{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,s={}){const n=t.time||(t.time={}),i=this._adapter=new r0._date(t.adapters.date);i.init(s),Vi(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=s.normalized}parse(t,s){return t===void 0?null:Gc(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,s=this._adapter,n=t.time.unit||"day";let{min:i,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!o&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Re(i)&&!isNaN(i)?i:+s.startOf(Date.now(),n),a=Re(a)&&!isNaN(a)?a:+s.endOf(Date.now(),n)+1,this.min=Math.min(i,a-1),this.max=Math.max(i+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(s=t[0],n=t[t.length-1]),{min:s,max:n}}buildTicks(){const t=this.options,s=t.time,n=t.ticks,i=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const a=this.min,r=this.max,o=$1(i,a,r);return this._unit=s.unit||(n.autoSkip?Jc(s.minUnit,this.min,this.max,this._getLabelCapacity(a)):n2(this,o.length,s.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:i2(this._unit),this.initOffsets(i),t.reverse&&o.reverse(),Zc(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let s=0,n=0,i,a;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?s=1-i:s=(this.getDecimalForValue(t[1])-i)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?n=a:n=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;s=Ye(s,0,r),n=Ye(n,0,r),this._offsets={start:s,end:n,factor:1/(s+1+n)}}_generate(){const t=this._adapter,s=this.min,n=this.max,i=this.options,a=i.time,r=a.unit||Jc(a.minUnit,s,n,this._getLabelCapacity(s)),o=Ut(i.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,c=pi(l)||l===!0,d={};let h=s,f,v;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":r),t.diff(n,s,r)>1e5*o)throw new Error(s+" and "+n+" are too far apart with stepSize of "+o+" "+r);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,v=0;f<n;f=+t.add(f,o,r),v++)Qc(d,f,g);return(f===n||i.bounds==="ticks"||v===1)&&Qc(d,f,g),Object.keys(d).sort(Xc).map(m=>+m)}getLabelForValue(t){const s=this._adapter,n=this.options.time;return n.tooltipFormat?s.format(t,n.tooltipFormat):s.format(t,n.displayFormats.datetime)}format(t,s){const i=this.options.time.displayFormats,a=this._unit,r=s||i[a];return this._adapter.format(t,r)}_tickFormatFunction(t,s,n,i){const a=this.options,r=a.ticks.callback;if(r)return Se(r,[t,s,n],this);const o=a.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&o[l],h=c&&o[c],f=n[s],v=c&&h&&f&&f.major;return this._adapter.format(t,i||(v?h:d))}generateTickLabels(t){let s,n,i;for(s=0,n=t.length;s<n;++s)i=t[s],i.label=this._tickFormatFunction(i.value,s,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const s=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((s.start+n)*s.factor)}getValueForPixel(t){const s=this._offsets,n=this.getDecimalForPixel(t)/s.factor-s.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const s=this.options.ticks,n=this.ctx.measureText(t).width,i=Cs(this.isHorizontal()?s.maxRotation:s.minRotation),a=Math.cos(i),r=Math.sin(i),o=this._resolveTickFontOptions(0).size;return{w:n*a+o*r,h:n*r+o*a}}_getLabelCapacity(t){const s=this.options.time,n=s.displayFormats,i=n[s.unit]||n.millisecond,a=this._tickFormatFunction(t,0,Zc(this,[t],this._majorUnit),i),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],s,n;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(s=0,n=i.length;s<n;++s)t=t.concat(i[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let s,n;if(t.length)return t;const i=this.getLabels();for(s=0,n=i.length;s<n;++s)t.push(Gc(this,i[s]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return wu(t.sort(Xc))}}function za(e,t,s){let n=0,i=e.length-1,a,r,o,l;s?(t>=e[n].pos&&t<=e[i].pos&&({lo:n,hi:i}=Qs(e,"pos",t)),{pos:a,time:o}=e[n],{pos:r,time:l}=e[i]):(t>=e[n].time&&t<=e[i].time&&({lo:n,hi:i}=Qs(e,"time",t)),{time:a,pos:o}=e[n],{time:r,pos:l}=e[i]);const c=r-a;return c?o+(l-o)*(t-a)/c:o}class r2 extends go{static id="timeseries";static defaults=go.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(t);this._minPos=za(s,this.min),this._tableRange=za(s,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:s,max:n}=this,i=[],a=[];let r,o,l,c,d;for(r=0,o=t.length;r<o;++r)c=t[r],c>=s&&c<=n&&i.push(c);if(i.length<2)return[{time:s,pos:0},{time:n,pos:1}];for(r=0,o=i.length;r<o;++r)d=i[r+1],l=i[r-1],c=i[r],Math.round((d+l)/2)!==c&&a.push({time:c,pos:r/(o-1)});return a}_generate(){const t=this.min,s=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(s)||n.length===1)&&n.push(s),n.sort((i,a)=>i-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const s=this.getDataTimestamps(),n=this.getLabelTimestamps();return s.length&&n.length?t=this.normalize(s.concat(n)):t=s.length?s:n,t=this._cache.all=t,t}getDecimalForValue(t){return(za(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const s=this._offsets,n=this.getDecimalForPixel(t)/s.factor-s.end;return za(this._table,n*this._tableRange+this._minPos,!0)}}var o2=Object.freeze({__proto__:null,CategoryScale:Ix,LinearScale:Nx,LogarithmicScale:qx,RadialLinearScale:s2,TimeScale:go,TimeSeriesScale:r2});const l2=[a0,jy,Dx,o2];var c2=A("<option> </option>"),d2=A('<div class="chart-wrapper svelte-1829vtz"><canvas></canvas></div>'),u2=A('<div class="quota-chart svelte-1829vtz"><div class="chart-controls svelte-1829vtz"><select class="chart-select svelte-1829vtz"></select> <div class="period-group svelte-1829vtz"></div></div> <!></div>');function h2(e,t){ke(t,!0),uo.register(...l2);let s=j($e([])),n=j(""),i=j("24h"),a=j(void 0),r=null;Ve(()=>{const v=We.subscribe(g=>{M(s,g,!0),!u(n)&&g.length>0&&M(n,g[0].key,!0)});return()=>{v(),r?.destroy()}});async function o(){if(!(!u(n)||!u(a)))try{const v=await ig(u(n),u(i)),g=v.map(b=>{const y=new Date(b.timestamp);return u(i)==="24h"?y.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}):y.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"})}),m=v.map(b=>b.tokens);r?.destroy(),r=new uo(u(a),{type:"line",data:{labels:g,datasets:[{label:"Tokens utilises",data:m,borderColor:"rgb(59, 130, 246)",backgroundColor:"rgba(59, 130, 246, 0.1)",fill:!0,tension:.3,pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(18, 18, 26, 0.95)",borderColor:"rgba(30, 30, 46, 1)",borderWidth:1,titleColor:"#e2e8f0",bodyColor:"#94a3b8",padding:10,cornerRadius:8}},scales:{x:{grid:{color:"rgba(30, 30, 46, 0.5)"},ticks:{color:"#475569",font:{size:11}}},y:{grid:{color:"rgba(30, 30, 46, 0.5)"},ticks:{color:"#475569",font:{size:11}},beginAtZero:!0}}}})}catch(v){console.error("Failed to load quota history:",v)}}Hn(()=>{u(n)&&u(a)&&o()});var l=u2(),c=p(l),d=p(c);ie(d,21,()=>u(s),Le,(v,g)=>{var m=c2(),b=p(m),y={};L(()=>{D(b,u(g).data.displayName||u(g).data.name||u(g).key),y!==(y=u(g).key)&&(m.value=(m.__value=u(g).key)??"")}),x(v,m)});var h=_(d,2);ie(h,20,()=>["24h","7d","30d"],Le,(v,g)=>{{let m=W(()=>u(i)===g?"primary":"ghost");qt(v,{get variant(){return u(m)},size:"sm",onclick:()=>{M(i,g,!0)},children:(b,y)=>{var S=Ht();L(()=>D(S,g)),x(b,S)},$$slots:{default:!0}})}});var f=_(c,2);he(f,{hoverable:!1,children:(v,g)=>{var m=d2(),b=p(m);Eo(b,y=>M(a,y),()=>u(a)),x(v,m)},$$slots:{default:!0}}),vi(d,()=>u(n),v=>M(n,v)),x(e,l),we()}var f2=A('<span class="feed-tokens svelte-somya0"> </span>'),v2=A('<div class="feed-item svelte-somya0"><span class="feed-time svelte-somya0"> </span> <span class="feed-method svelte-somya0"><!> </span> <span class="feed-path svelte-somya0"> </span> <!> <!> <span class="feed-duration svelte-somya0"> </span> <!></div>'),p2=A('<div class="feed-empty svelte-somya0"><p>Aucune requete a afficher</p> <p class="feed-empty-hint svelte-somya0">Les requetes apparaitront ici en temps reel</p></div>'),g2=A('<div class="request-feed svelte-somya0"><div class="feed-controls svelte-somya0"><div class="feed-filters svelte-somya0"><!> <select class="feed-select svelte-somya0"><option>Tous les providers</option><option>Anthropic</option><option>Gemini</option><option>OpenAI</option><option>xAI</option><option>DeepSeek</option><option>Mistral</option><option>Groq</option></select> <select class="feed-select svelte-somya0"><option>Tous les statuts</option><option>Succes (2xx)</option><option>Erreurs (4xx/5xx)</option></select></div> <label class="auto-scroll-toggle svelte-somya0"><input type="checkbox" class="svelte-somya0"/> <span>Auto-scroll</span></label> <button class="refresh-btn svelte-somya0" title="Rafraichir"><!></button></div> <div class="feed-list svelte-somya0"><!> <!></div></div>');function m2(e,t){ke(t,!0);let s=j($e([])),n=j("all"),i=j("all"),a=j(void 0),r=j(!0);const o={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};let l=W(()=>u(s).filter(F=>!(u(n)!=="all"&&F.provider!==u(n)||u(i)==="success"&&(F.status<200||F.status>=300)||u(i)==="error"&&F.status<400)));function c(F){return F>=200&&F<300?"var(--phase-cruise)":F>=400&&F<500?"var(--status-warning)":F>=500?"var(--status-error)":"var(--fg-dim)"}function d(F){return new Date(F).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}async function h(){try{const F=await no();M(s,F.flatMap((O,H)=>{if(!O||typeof O!="object")return[];const tt=String(O.timestamp??O.time??""),kt=String(O.account_email??O.email??"unknown"),q=String(O.model??""),et=Number(O.output_tokens??O.tokens_output??O.total_tokens??0);let Mt="anthropic";return q.includes("gemini")?Mt="gemini":q.includes("gpt")?Mt="openai":q.includes("grok")?Mt="xai":q.includes("deepseek")?Mt="deepseek":q.includes("mistral")?Mt="mistral":(q.includes("llama")||q.includes("groq"))&&(Mt="groq"),[{id:String(H),timestamp:tt,method:"POST",path:"/v1/messages",status:200,provider:Mt,account:kt,duration:0,tokens:et||void 0}]}),!0),M(s,u(s).reverse(),!0)}catch(F){console.error("Failed to load requests:",F)}}Ve(async()=>{await h()}),Hn(()=>{u(r)&&u(a)&&u(l).length>0&&(u(a).scrollTop=u(a).scrollHeight)});var f=g2(),v=p(f),g=p(v),m=p(g);Uv(m,{size:14});var b=_(m,2),y=p(b);y.value=y.__value="all";var S=_(y);S.value=S.__value="anthropic";var k=_(S);k.value=k.__value="gemini";var $=_(k);$.value=$.__value="openai";var w=_($);w.value=w.__value="xai";var P=_(w);P.value=P.__value="deepseek";var z=_(P);z.value=z.__value="mistral";var C=_(z);C.value=C.__value="groq";var T=_(b,2),E=p(T);E.value=E.__value="all";var R=_(E);R.value=R.__value="success";var N=_(R);N.value=N.__value="error";var Z=_(g,2),K=p(Z),V=_(Z,2),X=p(V);bs(X,{size:14});var J=_(v,2),xt=p(J);ie(xt,17,()=>u(l),F=>F.id,(F,O)=>{var H=v2(),tt=p(H),kt=p(tt),q=_(tt,2),et=p(q);{var Mt=ft=>{Tv(ft,{size:12})},ee=ft=>{Cv(ft,{size:12})};B(et,ft=>{u(O).method==="POST"?ft(Mt):ft(ee,!1)})}var de=_(et),U=_(q,2),jt=p(U),Vt=_(U,2);{let ft=W(()=>c(u(O).status));Ue(Vt,{get color(){return u(ft)},small:!0,children:(At,$t)=>{var G=Ht();L(()=>D(G,u(O).status)),x(At,G)},$$slots:{default:!0}})}var Zt=_(Vt,2);{let ft=W(()=>o[u(O).provider]??"var(--fg-dim)");Ue(Zt,{get color(){return u(ft)},small:!0,children:(At,$t)=>{var G=Ht();L(()=>D(G,u(O).provider)),x(At,G)},$$slots:{default:!0}})}var zt=_(Zt,2),Nt=p(zt),fe=_(zt,2);{var ue=ft=>{var At=f2(),$t=p(At);L(()=>D($t,`${u(O).tokens??""}t`)),x(ft,At)};B(fe,ft=>{u(O).tokens&&ft(ue)})}L(ft=>{D(kt,ft),D(de,` ${u(O).method??""}`),Dt(U,"title",u(O).path),D(jt,u(O).path),D(Nt,`${u(O).duration??""}ms`)},[()=>d(u(O).timestamp)]),x(F,H)});var yt=_(xt,2);{var Pt=F=>{var O=p2();x(F,O)};B(yt,F=>{u(l).length===0&&F(Pt)})}Eo(J,F=>M(a,F),()=>u(a)),vi(b,()=>u(n),F=>M(n,F)),vi(T,()=>u(i),F=>M(i,F)),eu(K,()=>u(r),F=>M(r,F)),nt("click",V,h),x(e,f),we()}De(["click"]);var _2=A('<div class="session-loading svelte-1v3p48n"><span class="animate-spin"><!></span> <span>Chargement des sessions...</span></div>'),b2=A('<div class="session-empty svelte-1v3p48n"><p>Aucune session enregistree</p></div>'),y2=A('<div class="session-card svelte-1v3p48n"><div class="session-header svelte-1v3p48n"><span class="session-id svelte-1v3p48n"> </span> <!></div> <div class="session-stats svelte-1v3p48n"><div class="session-stat svelte-1v3p48n"><!> <span> </span></div> <div class="session-stat svelte-1v3p48n"><!> <span> </span></div> <div class="session-stat svelte-1v3p48n"><!> <span> </span></div></div></div>'),x2=A('<div class="session-grid svelte-1v3p48n"></div>'),k2=A('<div class="session-list svelte-1v3p48n"><!></div>');function w2(e,t){ke(t,!0);let s=j($e([])),n=j(!0);Ve(async()=>{try{const h=await hu();M(s,h,!0)}catch(h){console.error("Failed to load sessions:",h)}finally{M(n,!1)}});function i(h){return new Date(h).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}function a(h){return h>=1e6?`${(h/1e6).toFixed(1)}M`:h>=1e3?`${(h/1e3).toFixed(1)}k`:`${h}`}var r=k2(),o=p(r);{var l=h=>{var f=_2(),v=p(f),g=p(v);Ua(g,{size:20}),x(h,f)},c=h=>{var f=b2();x(h,f)},d=h=>{var f=x2();ie(f,21,()=>u(s),v=>v.id,(v,g)=>{he(v,{children:(m,b)=>{var y=y2(),S=p(y),k=p(S),$=p(k),w=_(k,2);Ue(w,{color:"var(--accent)",small:!0,children:(yt,Pt)=>{var F=Ht();L(()=>D(F,u(g).accountKey)),x(yt,F)},$$slots:{default:!0}});var P=_(S,2),z=p(P),C=p(z);Ua(C,{size:12});var T=_(C,2),E=p(T),R=_(z,2),N=p(R);Kv(N,{size:12});var Z=_(N,2),K=p(Z),V=_(R,2),X=p(V);Fv(X,{size:12});var J=_(X,2),xt=p(J);L((yt,Pt,F)=>{Dt(k,"title",u(g).id),D($,`#${yt??""}`),D(E,Pt),D(K,`${u(g).requestCount??""} requetes`),D(xt,`${F??""} tokens`)},[()=>u(g).id.slice(0,8),()=>i(u(g).startTime),()=>a(u(g).tokensUsed)]),x(m,y)},$$slots:{default:!0}})}),x(h,f)};B(o,h=>{u(n)?h(l):u(s).length===0?h(c,1):h(d,!1)})}x(e,r),we()}var $2=A('<span class="log-ts svelte-1k1iml3"> </span>'),S2=A('<div class="log-line svelte-1k1iml3"><span class="log-num svelte-1k1iml3"></span> <!> <!> <span class="log-msg svelte-1k1iml3"> </span></div>'),M2=A('<div class="log-empty svelte-1k1iml3">Aucun log a afficher</div>'),P2=A('<div class="log-viewer svelte-1k1iml3"><div class="log-controls svelte-1k1iml3"><div class="log-search svelte-1k1iml3"><!> <input type="text" class="log-search-input svelte-1k1iml3" placeholder="Rechercher dans les logs..."/></div> <div class="log-filters svelte-1k1iml3"></div> <div class="log-actions svelte-1k1iml3"><label class="auto-scroll-toggle svelte-1k1iml3"><input type="checkbox" class="svelte-1k1iml3"/> <span>Auto-scroll</span></label> <!> <!></div></div> <div class="log-output svelte-1k1iml3"><!> <!></div></div>');function A2(e,t){ke(t,!0);let s=j($e([])),n=j(""),i=j("all"),a=j(!0),r=j(void 0);const o={info:"var(--accent)",warn:"var(--status-warning)",error:"var(--status-error)",debug:"var(--fg-dim)"};let l=W(()=>u(s).filter(R=>!(u(i)!=="all"&&R.level!==u(i)||u(n)&&!R.raw.toLowerCase().includes(u(n).toLowerCase()))));function c(R){if(typeof R=="object"&&R!==null){const K=R,V=String(K.timestamp??K.time??""),X=String(K.model??""),J=String(K.account_email??K.email??""),xt=Number(K.output_tokens??K.total_tokens??0),yt=J?`${J} | ${X} | ${xt}t`:JSON.stringify(R);return{raw:JSON.stringify(R),timestamp:V,level:"info",message:yt}}const N=String(R),Z=N.match(/^\[([^\]]+)\]\s*(\w+)\s*(.*)$/);return Z?{raw:N,timestamp:Z[1],level:Z[2].toLowerCase(),message:Z[3]}:{raw:N,timestamp:"",level:"info",message:N}}Ve(async()=>{try{const R=await no(void 0);M(s,R.map(c),!0)}catch(R){console.error("Failed to load logs:",R)}});async function d(){try{const R=await no(u(i)==="all"?void 0:u(i));M(s,R.map(c),!0)}catch(R){console.error("Failed to refresh logs:",R)}}function h(){M(s,[],!0)}Hn(()=>{u(a)&&u(r)&&u(l).length>0&&(u(r).scrollTop=u(r).scrollHeight)});var f=P2(),v=p(f),g=p(v),m=p(g);rp(m,{size:14});var b=_(m,2),y=_(g,2);ie(y,20,()=>["all","info","warn","error","debug"],Le,(R,N)=>{{let Z=W(()=>u(i)===N?"primary":"ghost");qt(R,{get variant(){return u(Z)},size:"sm",onclick:()=>{M(i,N,!0)},children:(K,V)=>{var X=Ht();L(J=>D(X,J),[()=>N==="all"?"Tous":N.toUpperCase()]),x(K,X)},$$slots:{default:!0}})}});var S=_(y,2),k=p(S),$=p(k),w=_(k,2);qt(w,{variant:"ghost",size:"sm",onclick:d,children:(R,N)=>{au(R,{size:14})},$$slots:{default:!0}});var P=_(w,2);qt(P,{variant:"ghost",size:"sm",onclick:h,children:(R,N)=>{si(R,{size:14})},$$slots:{default:!0}});var z=_(v,2),C=p(z);ie(C,17,()=>u(l),Le,(R,N,Z)=>{var K=S2(),V=p(K);V.textContent=Z+1;var X=_(V,2);{var J=F=>{var O=$2(),H=p(O);L(()=>D(H,u(N).timestamp)),x(F,O)};B(X,F=>{u(N).timestamp&&F(J)})}var xt=_(X,2);{let F=W(()=>o[u(N).level]??"var(--fg-dim)");Ue(xt,{get color(){return u(F)},small:!0,children:(O,H)=>{var tt=Ht();L(()=>D(tt,u(N).level)),x(O,tt)},$$slots:{default:!0}})}var yt=_(xt,2),Pt=p(yt);L(()=>D(Pt,u(N).message)),x(R,K)});var T=_(C,2);{var E=R=>{var N=M2();x(R,N)};B(T,R=>{u(l).length===0&&R(E)})}Eo(z,R=>M(r,R),()=>u(r)),Te(b,()=>u(n),R=>M(n,R)),eu($,()=>u(a),R=>M(a,R)),x(e,f),we()}var C2=A('<div class="history-loading svelte-a369tr">Chargement...</div>'),z2=A('<div class="history-error svelte-a369tr"> </div>'),T2=A('<div class="history-empty svelte-a369tr"><!> <p>Aucun switch enregistre</p> <p class="hint svelte-a369tr">Les changements de compte apparaitront ici</p></div>'),E2=A('<tr class="svelte-a369tr"><td class="account-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td></tr>'),D2=A('<div class="stats-table-wrapper svelte-a369tr"><table class="stats-table svelte-a369tr"><thead><tr><th class="svelte-a369tr">Compte</th><th class="svelte-a369tr">Switch depuis</th><th class="svelte-a369tr">Switch vers</th><th class="svelte-a369tr">Total</th></tr></thead><tbody></tbody></table></div>'),O2=A('<span class="sw-from svelte-a369tr"> </span> <!>',1),L2=A('<div class="switch-item svelte-a369tr"><span class="sw-time svelte-a369tr"> </span> <!> <span class="sw-to svelte-a369tr"> </span> <span> </span></div>'),R2=A('<!> <div class="last-switches"><div class="section-label svelte-a369tr">Derniers switches</div> <div class="switches-log svelte-a369tr"></div></div>',1),I2=A('<div class="switch-history svelte-a369tr"><div class="history-header svelte-a369tr"><span class="history-count svelte-a369tr"> </span> <!></div> <!></div>');function j2(e,t){ke(t,!0);let s=j($e([])),n=j(!0),i=j(""),a=W(()=>()=>{const k=new Map;for(const $ of u(s)){if($.from){const P=k.get($.from)??{total:0,from:0,to:0};P.from++,k.set($.from,P)}const w=k.get($.to)??{total:0,from:0,to:0};w.to++,k.set($.to,w)}return Array.from(k.entries()).map(([$,w])=>({key:$,...w})).sort(($,w)=>w.from+w.to-($.from+$.to))});Ve(async()=>{await r()});async function r(){M(n,!0),M(i,"");try{M(s,await ag(),!0)}catch(k){M(i,String(k),!0)}finally{M(n,!1)}}function o(k){if(!k)return"";try{return new Date(k).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return k}}function l(k){return k==="auto-switch"?"auto":k==="quota"?"quota":"manuel"}var c=I2(),d=p(c),h=p(d),f=p(h),v=_(h,2);qt(v,{variant:"ghost",size:"sm",onclick:r,children:(k,$)=>{bs(k,{size:14})},$$slots:{default:!0}});var g=_(d,2);{var m=k=>{var $=C2();x(k,$)},b=k=>{var $=z2(),w=p($);L(()=>D(w,u(i))),x(k,$)},y=k=>{var $=T2(),w=p($);Wa(w,{size:32}),x(k,$)},S=k=>{var $=R2(),w=I($);he(w,{hoverable:!1,children:(C,T)=>{var E=D2(),R=p(E),N=_(p(R));ie(N,21,()=>u(a)(),Le,(Z,K)=>{var V=E2(),X=p(V),J=p(X),xt=_(X),yt=p(xt),Pt=_(xt),F=p(Pt),O=_(Pt),H=p(O);L(()=>{D(J,u(K).key),D(yt,u(K).from),D(F,u(K).to),D(H,u(K).from+u(K).to)}),x(Z,V)}),x(C,E)},$$slots:{default:!0}});var P=_(w,2),z=_(p(P),2);ie(z,21,()=>u(s).slice(0,20),Le,(C,T)=>{var E=L2(),R=p(E),N=p(R),Z=_(R,2);{var K=Pt=>{var F=O2(),O=I(F),H=p(O),tt=_(O,2);Wa(tt,{size:12,class:"sw-arrow"}),L(()=>D(H,u(T).from)),x(Pt,F)};B(Z,Pt=>{u(T).from&&Pt(K)})}var V=_(Z,2),X=p(V),J=_(V,2);let xt;var yt=p(J);L((Pt,F)=>{D(N,Pt),D(X,u(T).to),xt=Yt(J,1,"sw-reason svelte-a369tr",null,xt,{auto:u(T).reason==="auto-switch"}),D(yt,F)},[()=>o(u(T).timestamp),()=>l(u(T).reason)]),x(C,E)}),x(k,$)};B(g,k=>{u(n)?k(m):u(i)?k(b,1):u(s).length===0?k(y,2):k(S,!1)})}L(()=>D(f,`${u(s).length??""} switches`)),x(e,c),we()}var N2=A("<!> <span>Par compte</span>",1),F2=A("<!> <span>Grouper</span>",1),B2=A('<div class="panel-placeholder svelte-1nfvjs4"><!> <span>Chargement des sessions...</span></div>'),q2=A('<div class="panel-placeholder panel-error svelte-1nfvjs4"><span> </span></div>'),V2=A('<div class="panel-placeholder svelte-1nfvjs4"><!> <span>Aucune session enregistree</span></div>'),H2=A('<tr class="svelte-1nfvjs4"><td class="account-cell svelte-1nfvjs4"><span class="account-email svelte-1nfvjs4"> </span></td><td class="num svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"><span class="cost-value svelte-1nfvjs4"> </span></td></tr>'),W2=A('<div class="cost-table-wrapper svelte-1nfvjs4"><table class="cost-table svelte-1nfvjs4"><thead class="svelte-1nfvjs4"><tr><th class="svelte-1nfvjs4">Compte</th><th class="num svelte-1nfvjs4">Sessions</th><th class="num svelte-1nfvjs4">Requetes</th><th class="num svelte-1nfvjs4">Input</th><th class="num svelte-1nfvjs4">Output</th><th class="num svelte-1nfvjs4">Cout estimé</th></tr></thead><tbody class="svelte-1nfvjs4"></tbody></table></div>'),U2=A('<tr class="svelte-1nfvjs4"><td class="account-cell svelte-1nfvjs4"><span class="account-email svelte-1nfvjs4"> </span></td><td class="svelte-1nfvjs4"><!></td><td class="num svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"><span class="cost-value svelte-1nfvjs4"> </span></td><td class="num dim svelte-1nfvjs4"> </td></tr>'),Y2=A('<div class="cost-table-wrapper svelte-1nfvjs4"><table class="cost-table svelte-1nfvjs4"><thead class="svelte-1nfvjs4"><tr><th class="svelte-1nfvjs4">Compte</th><th class="svelte-1nfvjs4">Modele</th><th class="num svelte-1nfvjs4">Requetes</th><th class="num svelte-1nfvjs4">Input</th><th class="num svelte-1nfvjs4">Output</th><th class="num svelte-1nfvjs4">Cout estimé</th><th class="num svelte-1nfvjs4">Mise a jour</th></tr></thead><tbody class="svelte-1nfvjs4"></tbody></table></div>'),K2=A('<div class="footer-row svelte-1nfvjs4"><span class="footer-label svelte-1nfvjs4"> </span> <span class="footer-total svelte-1nfvjs4"> </span></div>'),X2=A('<div class="cost-footer svelte-1nfvjs4"><!></div>'),G2=A('<div class="cost-panel svelte-1nfvjs4"><div class="panel-toolbar svelte-1nfvjs4"><div class="toolbar-left svelte-1nfvjs4"><!> <span class="toolbar-title svelte-1nfvjs4">Couts par session</span> <!></div> <div class="toolbar-right svelte-1nfvjs4"><button><!></button> <button class="refresh-btn svelte-1nfvjs4" title="Rafraichir"><!></button></div></div> <!> <!></div>');function J2(e,t){ke(t,!0);let s=j($e([])),n=j(!0),i=j(null),a=j(!1),r=null,o=W(()=>[...u(s)].sort((O,H)=>H.estimated_cost_usd-O.estimated_cost_usd)),l=W(()=>u(s).reduce((O,H)=>O+(H.estimated_cost_usd??0),0)),c=W(()=>()=>{const O=new Map;for(const H of u(s)){const tt=H.account_email??"inconnu";O.has(tt)||O.set(tt,{email:tt,sessions:[],totalCost:0,totalInput:0,totalOutput:0,totalRequests:0});const kt=O.get(tt);kt.sessions.push(H),kt.totalCost+=H.estimated_cost_usd??0,kt.totalInput+=H.total_input_tokens??0,kt.totalOutput+=H.total_output_tokens??0,kt.totalRequests+=H.request_count??0}return[...O.values()].sort((H,tt)=>tt.totalCost-H.totalCost)});async function d(){try{const O=await hu();M(s,O.filter(H=>H&&typeof H=="object"),!0),M(i,null)}catch(O){console.error("CostPanel: failed to load sessions",O),M(i,"Impossible de charger les sessions")}finally{M(n,!1)}}Ve(()=>(d(),r=setInterval(d,1e4),()=>{r!==null&&clearInterval(r)}));function h(O){return O===0?"$0.0000":O<1e-4?`$${O.toExponential(2)}`:`$${O.toFixed(4)}`}function f(O){return O?O>=1e6?`${(O/1e6).toFixed(1)}M`:O>=1e3?`${(O/1e3).toFixed(1)}k`:`${O}`:"0"}function v(O){return O?O.split("-").slice(-2).join("-"):"—"}function g(O){return O?new Date(O).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function m(O){return O<=0?"var(--fg-dim)":O<.01?"var(--phase-cruise)":O<.1?"var(--phase-watch)":O<1?"var(--phase-alert)":"var(--phase-critical)"}var b=G2(),y=p(b),S=p(y),k=p(S);Sl(k,{size:16});var $=_(k,4);{var w=O=>{Ue(O,{color:"var(--fg-dim)",small:!0,children:(H,tt)=>{var kt=Ht();L(()=>D(kt,`${u(s).length??""} session${u(s).length!==1?"s":""}`)),x(H,kt)},$$slots:{default:!0}})};B($,O=>{u(n)||O(w)})}var P=_(S,2),z=p(P);let C;var T=p(z);{var E=O=>{var H=N2(),tt=I(H);Qv(tt,{size:14}),x(O,H)},R=O=>{var H=F2(),tt=I(H);Ya(tt,{size:14}),x(O,H)};B(T,O=>{u(a)?O(E):O(R,!1)})}var N=_(z,2),Z=p(N);{let O=W(()=>u(n)?"spin":"");bs(Z,{size:14,get class(){return u(O)}})}var K=_(y,2);{var V=O=>{var H=B2(),tt=p(H);bs(tt,{size:20,class:"spin"}),x(O,H)},X=O=>{var H=q2(),tt=p(H),kt=p(tt);L(()=>D(kt,u(i))),x(O,H)},J=O=>{var H=V2(),tt=p(H);Sl(tt,{size:20}),x(O,H)},xt=O=>{var H=W2(),tt=p(H),kt=_(p(tt));ie(kt,21,()=>u(c),q=>q.email,(q,et)=>{var Mt=H2(),ee=p(Mt),de=p(ee),U=p(de),jt=_(ee),Vt=p(jt),Zt=_(jt),zt=p(Zt),Nt=_(Zt),fe=p(Nt),ue=_(Nt),ft=p(ue),At=_(ue),$t=p(At),G=p($t);L((vt,_t,St,Ft)=>{Dt(de,"title",u(et).email),D(U,u(et).email),D(Vt,u(et).sessions.length),D(zt,u(et).totalRequests),D(fe,vt),D(ft,_t),Be($t,`color: ${St??""}`),D(G,Ft)},[()=>f(u(et).totalInput),()=>f(u(et).totalOutput),()=>m(u(et).totalCost),()=>h(u(et).totalCost)]),x(q,Mt)}),x(O,H)},yt=O=>{var H=Y2(),tt=p(H),kt=_(p(tt));ie(kt,21,()=>u(o),q=>q.session_id,(q,et)=>{var Mt=U2(),ee=p(Mt),de=p(ee),U=p(de),jt=_(ee),Vt=p(jt);Ue(Vt,{color:"var(--provider-anthropic)",small:!0,children:(St,Ft)=>{var Kt=Ht();L(oe=>D(Kt,oe),[()=>v(u(et).model)]),x(St,Kt)},$$slots:{default:!0}});var Zt=_(jt),zt=p(Zt),Nt=_(Zt),fe=p(Nt),ue=_(Nt),ft=p(ue),At=_(ue),$t=p(At),G=p($t),vt=_(At),_t=p(vt);L((St,Ft,Kt,oe,ye)=>{Dt(de,"title",u(et).account_email),D(U,u(et).account_email??"—"),D(zt,u(et).request_count??0),D(fe,St),D(ft,Ft),Be($t,`color: ${Kt??""}`),D(G,oe),D(_t,ye)},[()=>f(u(et).total_input_tokens??0),()=>f(u(et).total_output_tokens??0),()=>m(u(et).estimated_cost_usd??0),()=>h(u(et).estimated_cost_usd??0),()=>g(u(et).updated_at)]),x(q,Mt)}),x(O,H)};B(K,O=>{u(n)?O(V):u(i)?O(X,1):u(s).length===0?O(J,2):u(a)?O(xt,3):O(yt,!1)})}var Pt=_(K,2);{var F=O=>{var H=X2(),tt=p(H);he(tt,{hoverable:!1,padding:"12px 16px",children:(kt,q)=>{var et=K2(),Mt=p(et),ee=p(Mt),de=_(Mt,2),U=p(de);L((jt,Vt)=>{D(ee,`Cout total estimé (${u(s).length??""} sessions)`),Be(de,`color: ${jt??""}`),D(U,Vt)},[()=>m(u(l)),()=>h(u(l))]),x(kt,et)},$$slots:{default:!0}}),x(O,H)};B(Pt,O=>{u(s).length>0&&O(F)})}L(()=>{C=Yt(z,1,"toggle-btn svelte-1nfvjs4",null,C,{active:u(a)}),Dt(z,"title",u(a)?"Vue liste":"Grouper par compte")}),nt("click",z,()=>M(a,!u(a))),nt("click",N,d),x(e,b),we()}De(["click"]);var Q2=A('<div class="bc-empty svelte-5lsw3n"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--phase-cruise)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>Aucun cooldown actif</span> <span class="bc-empty-hint svelte-5lsw3n">Tous les comptes OAuth sont disponibles</span></div>'),Z2=A('<div class="bc-item svelte-5lsw3n"><div class="bc-item-header svelte-5lsw3n"><div class="bc-item-info svelte-5lsw3n"><span class="bc-email svelte-5lsw3n"> </span> <span class="bc-reason svelte-5lsw3n"> </span></div> <div class="bc-item-meta svelte-5lsw3n"><span class="bc-remaining svelte-5lsw3n"> </span> <span class="bc-until svelte-5lsw3n"> </span></div></div> <div class="bc-bar-track svelte-5lsw3n"><div class="bc-bar-fill svelte-5lsw3n"></div></div></div>'),tk=A('<div class="bc-item bc-item-expired svelte-5lsw3n"><div class="bc-item-header svelte-5lsw3n"><span class="bc-email dim svelte-5lsw3n"> </span> <span class="bc-remaining dim svelte-5lsw3n">expire</span></div></div>'),ek=A('<div class="bc-expired-section svelte-5lsw3n"><span class="bc-expired-label svelte-5lsw3n">Expires recemment</span> <!></div>'),sk=A('<div class="bc-list svelte-5lsw3n"></div> <!>',1),nk=A('<div class="backoff-chart svelte-5lsw3n"><div class="bc-header svelte-5lsw3n"><div class="bc-indicator svelte-5lsw3n"></div> <span class="bc-title svelte-5lsw3n">Cooldowns OAuth</span> <span class="bc-count svelte-5lsw3n"> </span></div> <!></div>');function ik(e,t){ke(t,!0);let s=be(t,"cooldowns",19,()=>[]);function n(C){const T=new Date(C).getTime()-Date.now();return Math.max(0,Math.floor(T/1e3))}const i=300;function a(C){const T=n(C);return Math.max(0,Math.min(100,T/i*100))}function r(C){if(C<=0)return"expire";const T=Math.floor(C/60),E=C%60;return T===0?`${E}s`:`${T}m ${E}s`}function o(C){return new Date(C).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function l(C){return C===0?"var(--phase-cruise)":C<=2?"var(--phase-watch)":"var(--phase-alert)"}function c(C){return C<30?"var(--phase-cruise)":C<70?"var(--phase-watch)":"var(--phase-alert)"}let d=j(0),h=null;Ve(()=>(h=setInterval(()=>{M(d,u(d)+1)},1e3),()=>{h&&clearInterval(h)}));let f=W(()=>u(d)>=0?s().map(C=>({...C,remaining:n(C.cooldown_until),pct:a(C.cooldown_until)})):[]),v=W(()=>u(f).filter(C=>C.remaining>0)),g=W(()=>u(v).length),m=W(()=>l(u(g)));var b=nk(),y=p(b),S=p(y),k=_(S,4),$=p(k),w=_(y,2);{var P=C=>{var T=Q2();x(C,T)},z=C=>{var T=sk(),E=I(T);ie(E,21,()=>u(v),K=>K.key,(K,V)=>{var X=Z2(),J=p(X),xt=p(J),yt=p(xt),Pt=p(yt),F=_(yt,2),O=p(F),H=_(xt,2),tt=p(H),kt=p(tt),q=_(tt,2),et=p(q),Mt=_(J,2),ee=p(Mt);L((de,U,jt,Vt)=>{Dt(yt,"title",u(V).email),D(Pt,u(V).email),D(O,u(V).reason),Be(tt,`color: ${de??""}`),D(kt,U),D(et,`jusqu'a ${jt??""}`),Be(ee,`width: ${u(V).pct??""}%; background: ${Vt??""}`)},[()=>c(u(V).pct),()=>r(u(V).remaining),()=>o(u(V).cooldown_until),()=>c(u(V).pct)]),x(K,X)});var R=_(E,2);{var N=K=>{var V=ek(),X=_(p(V),2);ie(X,17,()=>u(f).filter(J=>J.remaining===0),J=>J.key,(J,xt)=>{var yt=tk(),Pt=p(yt),F=p(Pt),O=p(F);L(()=>D(O,u(xt).email)),x(J,yt)}),x(K,V)},Z=W(()=>u(f).some(K=>K.remaining===0));B(R,K=>{u(Z)&&K(N)})}x(C,T)};B(w,C=>{u(g)===0?C(P):C(z,!1)})}L(()=>{Be(S,`background: ${u(m)??""}`),Be(k,`color: ${u(m)??""}`),D($,`${u(g)??""} actif${u(g)!==1?"s":""}`)}),x(e,b),we()}var ak=A('<span class="stat-pill svelte-n4ip9i" style="color: var(--phase-cruise)"> </span>'),rk=A('<span class="stat-pill svelte-n4ip9i" style="color: var(--status-warning)"> </span>'),ok=A('<span class="stat-pill svelte-n4ip9i" style="color: var(--status-error)"> </span>'),lk=A('<div class="pt-stats svelte-n4ip9i"><!> <!> <!></div>'),ck=A('<div class="pt-placeholder svelte-n4ip9i"><!> <span>Chargement des pairs...</span></div>'),dk=A('<div class="pt-placeholder pt-error svelte-n4ip9i"><span> </span></div>'),uk=A('<div class="pt-placeholder svelte-n4ip9i"><!> <span>Aucun pair configure</span> <span class="pt-placeholder-hint svelte-n4ip9i">Ajoutez des pairs dans les parametres de synchronisation</span></div>'),hk=A('<tr class="svelte-n4ip9i"><td class="addr-cell svelte-n4ip9i"><span class="status-dot svelte-n4ip9i"></span> <span class="addr-text svelte-n4ip9i"> </span></td><td class="svelte-n4ip9i"><!></td><td class="dim svelte-n4ip9i"> </td><td class="dim svelte-n4ip9i"> </td><td class="id-col mono dim svelte-n4ip9i"> </td></tr>'),fk=A('<div class="pt-table-wrapper svelte-n4ip9i"><table class="pt-table svelte-n4ip9i"><thead class="svelte-n4ip9i"><tr><th class="svelte-n4ip9i">Adresse</th><th class="svelte-n4ip9i">Statut</th><th class="svelte-n4ip9i">Latence</th><th class="svelte-n4ip9i">Derniere activite</th><th class="id-col svelte-n4ip9i">ID</th></tr></thead><tbody class="svelte-n4ip9i"></tbody></table></div>'),vk=rr("<line></line>"),pk=rr('<circle cx="0" cy="0" opacity="0.08" class="svelte-n4ip9i"></circle>'),gk=rr('<g class="peer-node svelte-n4ip9i"><!><circle cx="0" cy="0" fill="var(--bg-card)" stroke-width="2" class="svelte-n4ip9i"></circle><text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="700"> </text><text x="0" text-anchor="middle" dominant-baseline="central" font-size="9" fill="var(--fg-secondary)"> </text></g>'),mk=A('<div class="pt-graph-wrapper svelte-n4ip9i"><svg class="pt-svg svelte-n4ip9i" role="img" aria-label="Topologie reseau des pairs"><!><circle fill="none" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 6" opacity="0.4"></circle><!><g><circle cx="0" cy="0" fill="var(--accent)" opacity="0.08"></circle><circle cx="0" cy="0" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2.5"></circle><text x="0" y="-5" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="700" fill="var(--fg-accent)">Vous</text><text x="0" y="8" text-anchor="middle" dominant-baseline="central" font-size="9" fill="var(--fg-dim)">(local)</text></g></svg> <div class="graph-legend svelte-n4ip9i"><span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--phase-cruise)"></span> Actif</span> <span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--status-warning)"></span> Suspect</span> <span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--status-error)"></span> Hors ligne</span> <span class="legend-item svelte-n4ip9i"><span class="legend-line-dashed svelte-n4ip9i"></span> Connexion inactive</span></div></div>'),_k=A('<div class="peer-topology svelte-n4ip9i"><div class="pt-toolbar svelte-n4ip9i"><div class="pt-toolbar-left svelte-n4ip9i"><!> <span class="pt-title svelte-n4ip9i">Topologie reseau</span> <!></div> <div class="pt-toolbar-right svelte-n4ip9i"><div class="mode-toggle svelte-n4ip9i"><button title="Vue liste"><!></button> <button title="Vue graphe"><!></button></div> <button class="refresh-btn svelte-n4ip9i" title="Rafraichir"><!></button></div></div> <!></div>');function bk(e,t){ke(t,!0);let s=j($e([])),n=j(!0),i=j(null),a=j("list"),r=null;const o=500,l=340,c=o/2,d=l/2,h=120,f=22,v=28;function g(U){return U.status==="ALIVE"||U.status==="alive"?"ALIVE":U.status==="SUSPECT"||U.status==="suspect"?"SUSPECT":U.status==="DEAD"||U.status==="dead"?"DEAD":U.connected===!0?"ALIVE":U.connected===!1?"DEAD":"SUSPECT"}function m(U){return U.addr?U.addr:U.host&&U.port?`${U.host}:${U.port}`:U.host?U.host:U.id}function b(U){return{id:U.id,addr:m(U),status:g(U),lastSeen:U.last_seen??U.lastSeen??null,latencyMs:null}}async function y(){try{const U=await La();M(s,U.map(b),!0),M(i,null)}catch(U){console.error("PeerTopology: failed to load peers",U),M(i,"Impossible de charger les pairs")}finally{M(n,!1)}}Ve(()=>(y(),r=setInterval(y,5e3),()=>{r!==null&&clearInterval(r)}));function S(U){return U==="ALIVE"?"var(--phase-cruise)":U==="SUSPECT"?"var(--status-warning)":"var(--status-error)"}function k(U){return U==="ALIVE"?"Actif":U==="SUSPECT"?"Suspect":"Hors ligne"}function $(U){if(!U)return"jamais";const jt=Date.now()-new Date(U).getTime(),Vt=Math.floor(jt/1e3);if(Vt<60)return`il y a ${Vt}s`;const Zt=Math.floor(Vt/60);return Zt<60?`il y a ${Zt}min`:`il y a ${Math.floor(Zt/60)}h`}function w(U,jt){if(jt===0)return{x:c,y:d};const Vt=2*Math.PI*U/jt-Math.PI/2;return{x:c+h*Math.cos(Vt),y:d+h*Math.sin(Vt)}}let P=W(()=>u(s).filter(U=>U.status==="ALIVE").length),z=W(()=>u(s).filter(U=>U.status==="SUSPECT").length),C=W(()=>u(s).filter(U=>U.status==="DEAD").length);var T=_k(),E=p(T),R=p(E),N=p(R);Mr(N,{size:16});var Z=_(N,4);{var K=U=>{var jt=lk(),Vt=p(jt);{var Zt=ft=>{var At=ak(),$t=p(At);L(()=>D($t,`${u(P)??""} actif${u(P)!==1?"s":""}`)),x(ft,At)};B(Vt,ft=>{u(P)>0&&ft(Zt)})}var zt=_(Vt,2);{var Nt=ft=>{var At=rk(),$t=p(At);L(()=>D($t,`${u(z)??""} suspect${u(z)!==1?"s":""}`)),x(ft,At)};B(zt,ft=>{u(z)>0&&ft(Nt)})}var fe=_(zt,2);{var ue=ft=>{var At=ok(),$t=p(At);L(()=>D($t,`${u(C)??""} hors ligne`)),x(ft,At)};B(fe,ft=>{u(C)>0&&ft(ue)})}x(U,jt)};B(Z,U=>{u(n)||U(K)})}var V=_(R,2),X=p(V),J=p(X);let xt;var yt=p(J);Zv(yt,{size:14});var Pt=_(J,2);let F;var O=p(Pt);Mr(O,{size:14});var H=_(X,2),tt=p(H);bs(tt,{size:14});var kt=_(E,2);{var q=U=>{var jt=ck(),Vt=p(jt);bs(Vt,{size:20,class:"spin"}),x(U,jt)},et=U=>{var jt=dk(),Vt=p(jt),Zt=p(Vt);L(()=>D(Zt,u(i))),x(U,jt)},Mt=U=>{var jt=uk(),Vt=p(jt);Mr(Vt,{size:24}),x(U,jt)},ee=U=>{var jt=fk(),Vt=p(jt),Zt=_(p(Vt));ie(Zt,21,()=>u(s),zt=>zt.id,(zt,Nt)=>{var fe=hk(),ue=p(fe),ft=p(ue),At=_(ft,2),$t=p(At),G=_(ue),vt=p(G);{let me=W(()=>S(u(Nt).status));Ue(vt,{get color(){return u(me)},small:!0,children:(Jt,Gt)=>{var Ot=Ht();L(st=>D(Ot,st),[()=>k(u(Nt).status)]),x(Jt,Ot)},$$slots:{default:!0}})}var _t=_(G),St=p(_t),Ft=_(_t),Kt=p(Ft),oe=_(Ft),ye=p(oe);L((me,Jt,Gt)=>{Be(ft,`background: ${me??""}`),D($t,u(Nt).addr),D(St,u(Nt).latencyMs!==null?`${u(Nt).latencyMs}ms`:"—"),D(Kt,Jt),Dt(oe,"title",u(Nt).id),D(ye,`${Gt??""}…`)},[()=>S(u(Nt).status),()=>$(u(Nt).lastSeen),()=>u(Nt).id.slice(0,12)]),x(zt,fe)}),x(U,jt)},de=U=>{var jt=mk(),Vt=p(jt);Dt(Vt,"viewBox","0 0 500 340");var Zt=p(Vt);ie(Zt,19,()=>u(s),At=>At.id,(At,$t,G)=>{const vt=W(()=>w(u(G),u(s).length));var _t=vk();Dt(_t,"x1",c),Dt(_t,"y1",d),L(St=>{Dt(_t,"x2",u(vt).x),Dt(_t,"y2",u(vt).y),Dt(_t,"stroke",St),Dt(_t,"stroke-width",u($t).status==="ALIVE"?1.5:1),Dt(_t,"stroke-opacity",u($t).status==="ALIVE"?.5:.2),Dt(_t,"stroke-dasharray",u($t).status==="DEAD"?"4 4":"none")},[()=>S(u($t).status)]),x(At,_t)});var zt=_(Zt);Dt(zt,"cx",c),Dt(zt,"cy",d),Dt(zt,"r",h);var Nt=_(zt);ie(Nt,19,()=>u(s),At=>At.id,(At,$t,G)=>{const vt=W(()=>w(u(G),u(s).length));var _t=gk(),St=p(_t);{var Ft=Gt=>{var Ot=pk();Dt(Ot,"r",f+6),L(st=>Dt(Ot,"fill",st),[()=>S(u($t).status)]),x(Gt,Ot)};B(St,Gt=>{u($t).status==="ALIVE"&&Gt(Ft)})}var Kt=_(St);Dt(Kt,"r",f);var oe=_(Kt),ye=p(oe),me=_(oe);Dt(me,"y",f+14);var Jt=p(me);L((Gt,Ot,st)=>{Dt(_t,"transform",`translate(${u(vt).x??""},${u(vt).y??""})`),Dt(Kt,"stroke",Gt),Dt(oe,"fill",Ot),D(ye,u($t).status==="ALIVE"?"●":u($t).status==="SUSPECT"?"◐":"○"),D(Jt,st)},[()=>S(u($t).status),()=>S(u($t).status),()=>u($t).addr.length>18?u($t).addr.slice(0,18)+"…":u($t).addr]),x(At,_t)});var fe=_(Nt);Dt(fe,"transform","translate(250,170)");var ue=p(fe);Dt(ue,"r",v+8);var ft=_(ue);Dt(ft,"r",v),x(U,jt)};B(kt,U=>{u(n)?U(q):u(i)?U(et,1):u(s).length===0?U(Mt,2):u(a)==="list"?U(ee,3):U(de,!1)})}L(()=>{xt=Yt(J,1,"mode-btn svelte-n4ip9i",null,xt,{active:u(a)==="list"}),F=Yt(Pt,1,"mode-btn svelte-n4ip9i",null,F,{active:u(a)==="graph"})}),nt("click",J,()=>M(a,"list")),nt("click",Pt,()=>M(a,"graph")),nt("click",H,y),x(e,T),we()}De(["click"]);var yk=A("<button> </button>"),xk=A('<div class="monitoring-screen svelte-c089yk"><header class="screen-header svelte-c089yk"><h1 class="screen-title svelte-c089yk">Monitoring</h1></header> <div class="tab-bar svelte-c089yk"></div> <div class="tab-content svelte-c089yk"><!></div></div>');function kk(e){let t=j("quotas");const s=[{id:"quotas",label:"Quotas"},{id:"requests",label:"Requetes"},{id:"sessions",label:"Sessions"},{id:"costs",label:"Couts"},{id:"switches",label:"Switches"},{id:"cooldowns",label:"Cooldowns"},{id:"peers",label:"Pairs"},{id:"logs",label:"Journal"}];var n=xk(),i=_(p(n),2);ie(i,21,()=>s,Le,(m,b)=>{var y=yk();let S;var k=p(y);L(()=>{S=Yt(y,1,"tab-item svelte-c089yk",null,S,{active:u(t)===u(b).id}),D(k,u(b).label)}),nt("click",y,()=>M(t,u(b).id,!0)),x(m,y)});var a=_(i,2),r=p(a);{var o=m=>{h2(m,{})},l=m=>{m2(m,{})},c=m=>{w2(m,{})},d=m=>{J2(m,{})},h=m=>{j2(m,{})},f=m=>{ik(m,{})},v=m=>{bk(m,{})},g=m=>{A2(m,{})};B(r,m=>{u(t)==="quotas"?m(o):u(t)==="requests"?m(l,1):u(t)==="sessions"?m(c,2):u(t)==="costs"?m(d,3):u(t)==="switches"?m(h,4):u(t)==="cooldowns"?m(f,5):u(t)==="peers"?m(v,6):m(g,!1)})}x(e,n)}De(["click"]);var wk=A('<h3 class="section-title svelte-onrf5"> </h3>'),$k=A('<div class="settings-section svelte-onrf5"><!> <div class="section-content svelte-onrf5"><!></div></div>');function Ta(e,t){let s=be(t,"title",3,"");var n=$k(),i=p(n);{var a=l=>{var c=wk(),d=p(c);L(()=>D(d,s())),x(l,c)};B(i,l=>{s()&&l(a)})}var r=_(i,2),o=p(r);xn(o,()=>t.children),x(e,n)}var Sk=A('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Auto-refresh</span> <span class="setting-desc svelte-y99ba5">Rafraichir automatiquement les quotas</span></div> <!></div>'),Mk=A('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Intervalle (secondes)</span> <span class="setting-desc svelte-y99ba5">Frequence de rafraichissement</span></div> <input type="number" class="setting-input svelte-y99ba5" min="10" max="600"/></div>'),Pk=A('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Auto-switch</span> <span class="setting-desc svelte-y99ba5">Changer de compte automatiquement quand quota atteint</span></div> <!></div>'),Ak=A('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Rotation</span> <span class="setting-desc svelte-y99ba5">Rotation automatique entre comptes</span></div> <!></div>'),Ck=A('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Intervalle rotation (min)</span> <span class="setting-desc svelte-y99ba5">Duree avant de changer de compte</span></div> <input type="number" class="setting-input svelte-y99ba5" min="1" max="120"/></div>'),zk=A('<div class="settings-group svelte-y99ba5"><!> <!> <!> <!> <!></div>'),Tk=A('<p class="loading-text svelte-y99ba5">Chargement de la configuration...</p>'),Ek=A('<div class="general-settings svelte-y99ba5"><h3 class="section-title svelte-y99ba5">General</h3> <!></div>');function Dk(e,t){ke(t,!0);let s=j(null);Ve(()=>(Ae.load(),Ae.subscribe(v=>{M(s,v,!0)})));async function n(f){await Ae.save({adaptiveRefresh:f})}async function i(f){const v=parseInt(f.target.value);v>=10&&v<=600&&await Ae.save({refreshIntervalSecs:v})}async function a(f){if(!u(s)?.proxy)return;const v={...u(s).proxy};f?(v.autoSwitchThreshold5h=.85,v.autoSwitchThreshold7d=.9):(v.autoSwitchThreshold5h=0,v.autoSwitchThreshold7d=0),await Ae.save({proxy:v})}async function r(f){if(!u(s)?.proxy)return;const v={...u(s).proxy,rotationEnabled:f};await Ae.save({proxy:v})}async function o(f){if(!u(s)?.proxy)return;const v=parseInt(f.target.value);if(v>=1&&v<=120){const g={...u(s).proxy,rotationIntervalSecs:v*60};await Ae.save({proxy:g})}}var l=Ek(),c=_(p(l),2);{var d=f=>{var v=zk(),g=p(v);he(g,{hoverable:!1,children:(w,P)=>{var z=Sk(),C=_(p(z),2);{let T=W(()=>u(s)?.adaptiveRefresh??!1);gs(C,{get checked(){return u(T)},onchange:n})}x(w,z)},$$slots:{default:!0}});var m=_(g,2);{var b=w=>{he(w,{hoverable:!1,children:(P,z)=>{var C=Mk(),T=_(p(C),2);L(()=>Ha(T,u(s)?.refreshIntervalSecs??60)),nt("change",T,i),x(P,C)},$$slots:{default:!0}})};B(m,w=>{u(s)?.adaptiveRefresh&&w(b)})}var y=_(m,2);he(y,{hoverable:!1,children:(w,P)=>{var z=Pk(),C=_(p(z),2);{let T=W(()=>(u(s)?.proxy?.autoSwitchThreshold5h??0)>0);gs(C,{get checked(){return u(T)},onchange:a})}x(w,z)},$$slots:{default:!0}});var S=_(y,2);he(S,{hoverable:!1,children:(w,P)=>{var z=Ak(),C=_(p(z),2);{let T=W(()=>u(s)?.proxy?.rotationEnabled??!1);gs(C,{get checked(){return u(T)},onchange:r})}x(w,z)},$$slots:{default:!0}});var k=_(S,2);{var $=w=>{he(w,{hoverable:!1,children:(P,z)=>{var C=Ck(),T=_(p(C),2);L(E=>Ha(T,E),[()=>Math.round((u(s)?.proxy?.rotationIntervalSecs??3600)/60)]),nt("change",T,o),x(P,C)},$$slots:{default:!0}})};B(k,w=>{u(s)?.proxy?.rotationEnabled&&w($)})}x(f,v)},h=f=>{var v=Tk();x(f,v)};B(c,f=>{u(s)?f(d):f(h,!1)})}x(e,l),we()}De(["change"]);var Ok=A('<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Son</span> <span class="setting-desc svelte-1x8ltrf">Jouer un son lors des notifications</span></div> <!></div>'),Lk=A('<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Toasts</span> <span class="setting-desc svelte-1x8ltrf">Afficher les notifications toast</span></div> <!></div>'),Rk=A(`<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Seuil d'alerte (%)</span> <span class="setting-desc svelte-1x8ltrf">Pourcentage de quota avant notification</span></div> <div class="threshold-input svelte-1x8ltrf"><input type="range" class="range-input svelte-1x8ltrf" min="50" max="99"/> <span class="threshold-value svelte-1x8ltrf"> </span></div></div>`),Ik=A('<div class="settings-group svelte-1x8ltrf"><!> <!> <!></div>'),jk=A('<p class="loading-text svelte-1x8ltrf">Chargement...</p>'),Nk=A('<div class="alert-settings svelte-1x8ltrf"><h3 class="section-title svelte-1x8ltrf">Alertes & Notifications</h3> <!></div>');function Fk(e,t){ke(t,!0);let s=j(null);Ve(()=>Ae.subscribe(h=>{M(s,h,!0)}));async function n(d){u(s)?.alerts&&await Ae.save({alerts:{...u(s).alerts,soundEnabled:d}})}async function i(d){u(s)?.alerts&&await Ae.save({alerts:{...u(s).alerts,toastsEnabled:d}})}async function a(d){if(!u(s)?.alerts)return;const h=parseInt(d.target.value);h>=50&&h<=99&&await Ae.save({alerts:{...u(s).alerts,quotaAlertThreshold:h/100}})}var r=Nk(),o=_(p(r),2);{var l=d=>{var h=Ik(),f=p(h);he(f,{hoverable:!1,children:(m,b)=>{var y=Ok(),S=_(p(y),2);{let k=W(()=>u(s)?.alerts?.soundEnabled??!1);gs(S,{get checked(){return u(k)},onchange:n})}x(m,y)},$$slots:{default:!0}});var v=_(f,2);he(v,{hoverable:!1,children:(m,b)=>{var y=Lk(),S=_(p(y),2);{let k=W(()=>u(s)?.alerts?.toastsEnabled??!0);gs(S,{get checked(){return u(k)},onchange:i})}x(m,y)},$$slots:{default:!0}});var g=_(v,2);he(g,{hoverable:!1,children:(m,b)=>{var y=Rk(),S=_(p(y),2),k=p(S),$=_(k,2),w=p($);L((P,z)=>{Ha(k,P),D(w,`${z??""}%`)},[()=>Math.round((u(s)?.alerts?.quotaAlertThreshold??.8)*100),()=>Math.round((u(s)?.alerts?.quotaAlertThreshold??.8)*100)]),nt("input",k,a),x(m,y)},$$slots:{default:!0}}),x(d,h)},c=d=>{var h=jk();x(d,h)};B(o,d=>{u(s)?d(l):d(c,!1)})}x(e,r),we()}De(["input"]);var Bk=A('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchronisation P2P</span> <span class="setting-desc svelte-1aja7hz">Partager les credentials entre instances</span></div> <!></div>'),qk=A('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Port TCP</span> <span class="setting-desc svelte-1aja7hz">Port de la synchronisation P2P</span></div> <code class="mono-value svelte-1aja7hz"> </code></div>'),Vk=A('<button class="icon-btn svelte-1aja7hz" title="Copier"><!></button>'),Hk=A("<!> Generer",1),Wk=A('<div class="key-edit-row svelte-1aja7hz"><input type="text" class="peer-input key-input svelte-1aja7hz" placeholder="64 caracteres hex..."/> <!> <!></div>'),Uk=A('<div class="key-section svelte-1aja7hz"><div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Cle partagee (NaCl SecretBox)</span> <span class="setting-desc svelte-1aja7hz">Cle de chiffrement P2P (32 bytes hex)</span></div></div> <div class="key-display svelte-1aja7hz"><code class="key-value svelte-1aja7hz"> </code> <div class="key-actions svelte-1aja7hz"><button class="icon-btn svelte-1aja7hz"><!></button> <!></div></div> <div class="key-buttons svelte-1aja7hz"><!> <!></div></div>'),Yk=A("<!> Ajouter",1),Kk=A("<!> Tester",1),Xk=A("<!> ",1),Gk=A("<!> ",1),Jk=A("<div><!></div>"),Qk=A('<span class="peer-seen svelte-1aja7hz"> </span>'),Zk=A('<div class="peer-item svelte-1aja7hz"><span class="peer-icon svelte-1aja7hz"><!></span> <span class="peer-address svelte-1aja7hz"> </span> <!> <!> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Tester la connexion"><!></button> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Supprimer"><!></button></div>'),tw=A('<p class="no-peers svelte-1aja7hz">Aucun pair configure</p>'),ew=A('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchroniser le compte actif</span> <span class="setting-desc svelte-1aja7hz">Propager les switchs de compte entre pairs</span></div> <!></div>'),sw=A('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchroniser les quotas</span> <span class="setting-desc svelte-1aja7hz">Partager les mises a jour de quota entre pairs</span></div> <!></div>'),nw=A('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Repartir les fetches de quota</span> <span class="setting-desc svelte-1aja7hz">Diviser les appels API quota entre pairs</span></div> <!></div>'),iw=A('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Failover proxy automatique</span> <span class="setting-desc svelte-1aja7hz">Basculer vers un proxy pair si le local tombe</span></div> <!></div>'),aw=A('<div class="daemon-info svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Mode daemon (headless)</span> <span class="setting-desc svelte-1aja7hz">Compatible serveur Ubuntu sans GUI — meme fichier settings.json</span></div> <code class="mono-value code-block svelte-1aja7hz"> </code></div>'),rw=A(`<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Nom de cette instance</span> <span class="setting-desc svelte-1aja7hz">Utilise pour l'identification P2P et le proxy owner</span></div> <code class="mono-value svelte-1aja7hz"> </code></div>`),ow=A('<!> <!> <div class="peers-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz">Pairs connectes</h4> <div class="add-peer-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Hote (ex: 192.168.1.10)"/> <input type="number" class="peer-input port-input svelte-1aja7hz" placeholder="Port"/> <!> <!></div> <!> <div class="peer-list svelte-1aja7hz"><!> <!></div></div> <div class="options-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz">Options de synchronisation</h4> <!> <!> <!> <!></div> <!> <!>',1),lw=A('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Activer la sync SSH</span> <span class="setting-desc svelte-1aja7hz">Pousser les credentials vers des serveurs distants via SCP</span></div> <!></div>'),cw=A("<!> Ajouter",1),dw=A("<!> ",1),uw=A("<!> ",1),hw=A("<div><!></div>"),fw=A('<span class="peer-seen svelte-1aja7hz"><!> </span>'),vw=A('<div class="peer-item svelte-1aja7hz"><span class="peer-icon svelte-1aja7hz"><!></span> <span class="peer-address svelte-1aja7hz"> </span> <!> <!> <button class="icon-btn svelte-1aja7hz" title="Tester la connexion SSH"><!></button> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Supprimer"><!></button></div>'),pw=A('<p class="no-peers svelte-1aja7hz">Aucun hote SSH configure</p>'),gw=A('<div class="ssh-add-form svelte-1aja7hz"><div class="ssh-form-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Utilisateur"/> <span class="ssh-at svelte-1aja7hz">@</span> <input type="text" class="peer-input svelte-1aja7hz" placeholder="Hote (ex: 192.168.1.10)"/> <input type="number" class="peer-input port-input svelte-1aja7hz" placeholder="22"/></div> <div class="ssh-form-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Chemin cle privee (optionnel, ex: ~/.ssh/id_rsa)"/> <!></div></div> <!> <div class="peer-list svelte-1aja7hz"><!> <!></div>',1),mw=A('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Service systemd</span> <span class="setting-desc svelte-1aja7hz">Lancer automatiquement le daemon + proxy au demarrage du systeme</span></div> <div class="systemd-status-row svelte-1aja7hz"><!> <button class="icon-btn svelte-1aja7hz" title="Rafraichir le statut"><!></button></div></div>'),_w=A("<!> Installer le service",1),bw=A("<!> Desinstaller",1),yw=A("<!> Reinstaller et demarrer",1),xw=A("<!> Desinstaller",1),kw=A("<!> <!>",1),ww=A("<div> </div>"),$w=A(`<div class="daemon-info svelte-1aja7hz"><span class="setting-desc svelte-1aja7hz">Le service systemd lancera <code>ai-manager-daemon --settings ~/path/settings.json</code> au demarrage.
                Le proxy et la sync P2P se lanceront automatiquement selon la configuration.</span></div>`),Sw=A('<div class="systemd-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz"><!> Lancement automatique (systemd)</h4> <!> <div class="systemd-actions svelte-1aja7hz"><!></div> <!> <!></div>'),Mw=A('<div class="settings-group svelte-1aja7hz"><!> <!> <div class="ssh-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz"><!> Synchronisation SSH</h4> <!> <!></div> <!></div>'),Pw=A('<p class="loading-text svelte-1aja7hz">Chargement...</p>'),Aw=A('<div class="network-settings svelte-1aja7hz"><h3 class="section-title svelte-1aja7hz">Reseau & P2P</h3> <!></div>');function Cw(e,t){ke(t,!0);let s=j(null),n=j($e([])),i=j(""),a=j(9090),r=j(!1),o=j(""),l=j(!1),c=j(!1),d=j(null),h=j(null),f=j("—"),v=j(""),g=j(""),m=j(22),b=j(""),y=j(null),S=j(null),k=j("loading"),$=j(!1),w=j(null);Ve(async()=>{Ss.load();const q=Ae.subscribe(Mt=>{M(s,Mt,!0)}),et=Ss.peers.subscribe(Mt=>{M(n,Mt,!0)});try{M(f,await tg(),!0)}catch{}try{M(k,await ga(),!0)}catch{M(k,"unavailable")}return()=>{q(),et()}});async function P(q){u(s)?.sync&&(await Ae.save({sync:{...u(s).sync,enabled:q}}),await Ss.load())}async function z(q,et){u(s)?.sync&&await Ae.save({sync:{...u(s).sync,[q]:et}})}async function C(){u(i)&&(await Ss.addPeer(u(i),u(a)),M(i,""),M(a,9090),await Ss.load())}async function T(q){await Ss.removePeer(q),await Ss.load()}async function E(q,et){const Mt=`${q}:${et}`;M(d,Mt),M(h,null);try{const ee=await Ss.testPeer(q,et);M(h,{host:Mt,ok:ee},!0)}catch(ee){M(h,{host:Mt,ok:!1,error:String(ee)},!0)}finally{M(d,null)}}async function R(){const q=await Ss.generateKey();u(s)&&M(s,{...u(s),sync:{...u(s).sync,sharedKeyHex:q}},!0),M(r,!0)}async function N(){!u(o)||u(o).length!==64||(await Ss.setKey(u(o)),u(s)&&M(s,{...u(s),sync:{...u(s).sync,sharedKeyHex:u(o)}},!0),M(l,!1),M(o,""))}function Z(){u(s)?.sync?.sharedKeyHex&&(navigator.clipboard.writeText(u(s).sync.sharedKeyHex),M(c,!0),setTimeout(()=>{M(c,!1)},2e3))}function K(q){return q?u(r)?q:q.substring(0,8)+"..."+q.substring(q.length-8):"—"}async function V(q){u(s)?.sync&&await Ae.save({sync:{...u(s).sync,sshEnabled:q}})}async function X(){!u(v)||!u(g)||(await eg(u(g),u(m),u(v),u(b)||void 0),await Ae.load(),M(v,""),M(g,""),M(m,22),M(b,""))}async function J(q){await sg(q),await Ae.load()}async function xt(q){M(y,q.id,!0),M(S,null);try{const et=await ng(q.host,q.port,q.username,q.identityPath);M(S,{id:q.id,ok:et},!0)}catch(et){M(S,{id:q.id,ok:!1,error:String(et)},!0)}finally{M(y,null)}}async function yt(){M($,!0),M(w,null);try{const q=await Up();M(w,q,!0),M(k,await ga(),!0)}catch(q){M(w,String(q),!0)}finally{M($,!1)}}async function Pt(){M($,!0),M(w,null);try{const q=await Yp();M(w,q,!0),M(k,await ga(),!0)}catch(q){M(w,String(q),!0)}finally{M($,!1)}}async function F(){try{M(k,await ga(),!0)}catch{M(k,"unavailable")}}var O=Aw(),H=_(p(O),2);{var tt=q=>{var et=Mw(),Mt=p(et);he(Mt,{hoverable:!1,children:(ft,At)=>{var $t=Bk(),G=_(p($t),2);{let vt=W(()=>u(s)?.sync?.enabled??!1);gs(G,{get checked(){return u(vt)},onchange:P})}x(ft,$t)},$$slots:{default:!0}});var ee=_(Mt,2);{var de=ft=>{var At=ow(),$t=I(At);he($t,{hoverable:!1,children:(Q,pt)=>{var at=qk(),Ct=_(p(at),2),rt=p(Ct);L(()=>D(rt,u(s)?.sync?.port??9090)),x(Q,at)},$$slots:{default:!0}});var G=_($t,2);he(G,{hoverable:!1,children:(Q,pt)=>{var at=Uk(),Ct=_(p(at),2),rt=p(Ct),Tt=p(rt),Xt=_(rt,2),Wt=p(Xt),se=p(Wt);{var Et=le=>{Hv(le,{size:14})},ct=le=>{Wv(le,{size:14})};B(se,le=>{u(r)?le(Et):le(ct,!1)})}var It=_(Wt,2);{var re=le=>{var Ne=Vk(),rs=p(Ne);{var Fe=ts=>{Sr(ts,{size:14})},Oe=ts=>{Bv(ts,{size:14})};B(rs,ts=>{u(c)?ts(Fe):ts(Oe,!1)})}nt("click",Ne,Z),x(le,Ne)};B(It,le=>{u(s)?.sync?.sharedKeyHex&&le(re)})}var Pe=_(Ct,2),Xe=p(Pe);qt(Xe,{variant:"primary",size:"sm",onclick:R,children:(le,Ne)=>{var rs=Hk(),Fe=I(rs);Ml(Fe,{size:14}),x(le,rs)},$$slots:{default:!0}});var Ze=_(Xe,2);{var Bt=le=>{qt(le,{variant:"ghost",size:"sm",onclick:()=>{M(l,!0),M(o,"")},children:(Ne,rs)=>{var Fe=Ht("Saisir manuellement");x(Ne,Fe)},$$slots:{default:!0}})},ve=le=>{var Ne=Wk(),rs=p(Ne);Dt(rs,"maxlength",64);var Fe=_(rs,2);{let ts=W(()=>u(o).length!==64);qt(Fe,{variant:"primary",size:"sm",onclick:N,get disabled(){return u(ts)},children:(el,sl)=>{var fh=Ht("Sauvegarder");x(el,fh)},$$slots:{default:!0}})}var Oe=_(Fe,2);qt(Oe,{variant:"ghost",size:"sm",onclick:()=>{M(l,!1)},children:(ts,el)=>{var sl=Ht("Annuler");x(ts,sl)},$$slots:{default:!0}}),Te(rs,()=>u(o),ts=>M(o,ts)),x(le,Ne)};B(Ze,le=>{u(l)?le(ve,!1):le(Bt)})}L(le=>{D(Tt,le),Dt(Wt,"title",u(r)?"Masquer":"Afficher")},[()=>K(u(s)?.sync?.sharedKeyHex??null)]),nt("click",Wt,()=>M(r,!u(r))),x(Q,at)},$$slots:{default:!0}});var vt=_(G,2),_t=_(p(vt),2),St=p(_t),Ft=_(St,2),Kt=_(Ft,2);qt(Kt,{variant:"primary",size:"sm",onclick:C,children:(Q,pt)=>{var at=Yk(),Ct=I(at);Ki(Ct,{size:14}),x(Q,at)},$$slots:{default:!0}});var oe=_(Kt,2);{var ye=Q=>{{let pt=W(()=>u(d)!==null);qt(Q,{variant:"ghost",size:"sm",onclick:()=>E(u(i),u(a)),get disabled(){return u(pt)},children:(at,Ct)=>{var rt=Kk(),Tt=I(rt);qi(Tt,{size:14}),x(at,rt)},$$slots:{default:!0}})}};B(oe,Q=>{u(i)&&Q(ye)})}var me=_(_t,2);{var Jt=Q=>{var pt=Jk();let at;var Ct=p(pt);{var rt=Xt=>{var Wt=Xk(),se=I(Wt);Sr(se,{size:14});var Et=_(se);L(()=>D(Et,` Connexion reussie vers ${u(h).host??""}`)),x(Xt,Wt)},Tt=Xt=>{var Wt=Gk(),se=I(Wt);eo(se,{size:14});var Et=_(se);L(()=>D(Et,` Echec: ${u(h).error??"Connexion refusee"??""}`)),x(Xt,Wt)};B(Ct,Xt=>{u(h).ok?Xt(rt):Xt(Tt,!1)})}L(()=>at=Yt(pt,1,"test-result svelte-1aja7hz",null,at,{"test-ok":u(h).ok,"test-fail":!u(h).ok})),x(Q,pt)};B(me,Q=>{u(h)&&Q(Jt)})}var Gt=_(me,2),Ot=p(Gt);ie(Ot,17,()=>u(n),Q=>Q.id,(Q,pt)=>{var at=Zk(),Ct=p(at),rt=p(Ct);{var Tt=Bt=>{Ro(Bt,{size:14})},Xt=Bt=>{vp(Bt,{size:14})};B(rt,Bt=>{u(pt).connected?Bt(Tt):Bt(Xt,!1)})}var Wt=_(Ct,2),se=p(Wt),Et=_(Wt,2);{let Bt=W(()=>u(pt).connected?"var(--status-running)":"var(--status-stopped)");Ue(Et,{get color(){return u(Bt)},small:!0,children:(ve,le)=>{var Ne=Ht();L(()=>D(Ne,u(pt).connected?"Connecte":"Deconnecte")),x(ve,Ne)},$$slots:{default:!0}})}var ct=_(Et,2);{var It=Bt=>{var ve=Qk(),le=p(ve);L(()=>D(le,u(pt).lastSeen)),x(Bt,ve)};B(ct,Bt=>{u(pt).lastSeen&&Bt(It)})}var re=_(ct,2),Pe=p(re);qi(Pe,{size:12});var Xe=_(re,2),Ze=p(Xe);si(Ze,{size:12}),L(()=>{D(se,`${u(pt).host??""}:${u(pt).port??""}`),re.disabled=u(d)===`${u(pt).host}:${u(pt).port}`}),nt("click",re,()=>E(u(pt).host,u(pt).port)),nt("click",Xe,()=>T(u(pt).id)),x(Q,at)});var st=_(Ot,2);{var lt=Q=>{var pt=tw();x(Q,pt)};B(st,Q=>{u(n).length===0&&Q(lt)})}var wt=_(vt,2),Qt=_(p(wt),2);he(Qt,{hoverable:!1,children:(Q,pt)=>{var at=ew(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.syncActiveAccount??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("syncActiveAccount",Tt)})}x(Q,at)},$$slots:{default:!0}});var Y=_(Qt,2);he(Y,{hoverable:!1,children:(Q,pt)=>{var at=sw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.syncQuota??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("syncQuota",Tt)})}x(Q,at)},$$slots:{default:!0}});var Lt=_(Y,2);he(Lt,{hoverable:!1,children:(Q,pt)=>{var at=nw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.splitQuotaFetch??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("splitQuotaFetch",Tt)})}x(Q,at)},$$slots:{default:!0}});var dt=_(Lt,2);he(dt,{hoverable:!1,children:(Q,pt)=>{var at=iw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.proxyFailover??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("proxyFailover",Tt)})}x(Q,at)},$$slots:{default:!0}});var bt=_(wt,2);he(bt,{hoverable:!1,children:(Q,pt)=>{var at=aw(),Ct=_(p(at),2),rt=p(Ct);L(()=>D(rt,`ai-manager-daemon --sync-enabled --sync-port ${u(s)?.sync?.port??9090??""} --sync-key <base64>`)),x(Q,at)},$$slots:{default:!0}});var Rt=_(bt,2);he(Rt,{hoverable:!1,children:(Q,pt)=>{var at=rw(),Ct=_(p(at),2),rt=p(Ct);L(()=>D(rt,u(f))),x(Q,at)},$$slots:{default:!0}}),Te(St,()=>u(i),Q=>M(i,Q)),Te(Ft,()=>u(a),Q=>M(a,Q)),x(ft,At)};B(ee,ft=>{u(s)?.sync?.enabled&&ft(de)})}var U=_(ee,2),jt=p(U),Vt=p(jt);lu(Vt,{size:16});var Zt=_(jt,2);he(Zt,{hoverable:!1,children:(ft,At)=>{var $t=lw(),G=_(p($t),2);{let vt=W(()=>u(s)?.sync?.sshEnabled??!1);gs(G,{get checked(){return u(vt)},onchange:V})}x(ft,$t)},$$slots:{default:!0}});var zt=_(Zt,2);{var Nt=ft=>{var At=gw(),$t=I(At),G=p($t),vt=p(G),_t=_(vt,4),St=_(_t,2),Ft=_(G,2),Kt=p(Ft),oe=_(Kt,2);{let lt=W(()=>!u(v)||!u(g));qt(oe,{variant:"primary",size:"sm",onclick:X,get disabled(){return u(lt)},children:(wt,Qt)=>{var Y=cw(),Lt=I(Y);Ki(Lt,{size:14}),x(wt,Y)},$$slots:{default:!0}})}var ye=_($t,2);{var me=lt=>{var wt=hw();let Qt;var Y=p(wt);{var Lt=bt=>{var Rt=dw(),Q=I(Rt);Sr(Q,{size:14});var pt=_(Q);L(()=>D(pt,` Connexion SSH reussie vers ${u(S).id??""}`)),x(bt,Rt)},dt=bt=>{var Rt=uw(),Q=I(Rt);eo(Q,{size:14});var pt=_(Q);L(()=>D(pt,` Echec SSH: ${u(S).error??"Connexion refusee"??""}`)),x(bt,Rt)};B(Y,bt=>{u(S).ok?bt(Lt):bt(dt,!1)})}L(()=>Qt=Yt(wt,1,"test-result svelte-1aja7hz",null,Qt,{"test-ok":u(S).ok,"test-fail":!u(S).ok})),x(lt,wt)};B(ye,lt=>{u(S)&&lt(me)})}var Jt=_(ye,2),Gt=p(Jt);ie(Gt,17,()=>u(s)?.sync?.sshHosts??[],lt=>lt.id,(lt,wt)=>{var Qt=vw(),Y=p(Qt),Lt=p(Y);ou(Lt,{size:14});var dt=_(Y,2),bt=p(dt),Rt=_(dt,2);{let Xt=W(()=>u(wt).enabled?"var(--status-running)":"var(--status-stopped)");Ue(Rt,{get color(){return u(Xt)},small:!0,children:(Wt,se)=>{var Et=Ht();L(()=>D(Et,u(wt).enabled?"Actif":"Inactif")),x(Wt,Et)},$$slots:{default:!0}})}var Q=_(Rt,2);{var pt=Xt=>{var Wt=fw(),se=p(Wt);Ml(se,{size:10});var Et=_(se);L(ct=>{Dt(Wt,"title",u(wt).identityPath),D(Et,` ${ct??""}`)},[()=>u(wt).identityPath.split("/").pop()]),x(Xt,Wt)};B(Q,Xt=>{u(wt).identityPath&&Xt(pt)})}var at=_(Q,2),Ct=p(at);qi(Ct,{size:12});var rt=_(at,2),Tt=p(rt);si(Tt,{size:12}),L(()=>{D(bt,`${u(wt).username??""}@${u(wt).host??""}:${u(wt).port??""}`),at.disabled=u(y)===u(wt).id}),nt("click",at,()=>xt(u(wt))),nt("click",rt,()=>J(u(wt).id)),x(lt,Qt)});var Ot=_(Gt,2);{var st=lt=>{var wt=pw();x(lt,wt)};B(Ot,lt=>{(u(s)?.sync?.sshHosts??[]).length===0&&lt(st)})}Te(vt,()=>u(v),lt=>M(v,lt)),Te(_t,()=>u(g),lt=>M(g,lt)),Te(St,()=>u(m),lt=>M(m,lt)),Te(Kt,()=>u(b),lt=>M(b,lt)),x(ft,At)};B(zt,ft=>{u(s)?.sync?.sshEnabled&&ft(Nt)})}var fe=_(U,2);{var ue=ft=>{var At=Sw(),$t=p(At),G=p($t);Pl(G,{size:16});var vt=_($t,2);he(vt,{hoverable:!1,children:(Jt,Gt)=>{var Ot=mw(),st=_(p(Ot),2),lt=p(st);{let Y=W(()=>u(k)==="active"?"var(--status-running)":u(k)==="inactive"?"var(--status-warning)":"var(--status-stopped)");Ue(lt,{get color(){return u(Y)},small:!0,children:(Lt,dt)=>{var bt=Ht();L(()=>D(bt,u(k)==="active"?"Actif":u(k)==="inactive"?"Inactif":u(k)==="not-found"?"Non installe":u(k))),x(Lt,bt)},$$slots:{default:!0}})}var wt=_(lt,2),Qt=p(wt);bs(Qt,{size:12}),nt("click",wt,F),x(Jt,Ot)},$$slots:{default:!0}});var _t=_(vt,2),St=p(_t);{var Ft=Jt=>{qt(Jt,{variant:"primary",size:"sm",onclick:yt,get disabled(){return u($)},children:(Gt,Ot)=>{var st=_w(),lt=I(st);au(lt,{size:14}),x(Gt,st)},$$slots:{default:!0}})},Kt=Jt=>{var Gt=it(),Ot=I(Gt);{var st=wt=>{qt(wt,{variant:"ghost",size:"sm",onclick:Pt,get disabled(){return u($)},children:(Qt,Y)=>{var Lt=bw(),dt=I(Lt);cp(dt,{size:14}),x(Qt,Lt)},$$slots:{default:!0}})},lt=wt=>{var Qt=kw(),Y=I(Qt);qt(Y,{variant:"primary",size:"sm",onclick:yt,get disabled(){return u($)},children:(dt,bt)=>{var Rt=yw(),Q=I(Rt);Pl(Q,{size:14}),x(dt,Rt)},$$slots:{default:!0}});var Lt=_(Y,2);qt(Lt,{variant:"ghost",size:"sm",onclick:Pt,get disabled(){return u($)},children:(dt,bt)=>{var Rt=xw(),Q=I(Rt);si(Q,{size:14}),x(dt,Rt)},$$slots:{default:!0}}),x(wt,Qt)};B(Ot,wt=>{u(k)==="active"?wt(st):wt(lt,!1)})}x(Jt,Gt)};B(St,Jt=>{u(k)==="not-found"||u(k)==="loading"?Jt(Ft):Jt(Kt,!1)})}var oe=_(_t,2);{var ye=Jt=>{var Gt=ww();let Ot;var st=p(Gt);L(()=>{Ot=Yt(Gt,1,"test-result svelte-1aja7hz",null,Ot,{"test-ok":u(k)==="active","test-fail":u(k)!=="active"}),D(st,u(w))}),x(Jt,Gt)};B(oe,Jt=>{u(w)&&Jt(ye)})}var me=_(oe,2);he(me,{hoverable:!1,children:(Jt,Gt)=>{var Ot=$w();x(Jt,Ot)},$$slots:{default:!0}}),x(ft,At)};B(fe,ft=>{u(k)!=="unavailable"&&ft(ue)})}x(q,et)},kt=q=>{var et=Pw();x(q,et)};B(H,q=>{u(s)?q(tt):q(kt,!1)})}x(e,O),we()}De(["click"]);var zw=A('<div class="provider-details svelte-1xohkg6"><div class="detail-row svelte-1xohkg6"><label class="detail-label svelte-1xohkg6">Cle API</label> <input type="password" class="detail-input svelte-1xohkg6" placeholder="sk-..."/></div> <div class="detail-row svelte-1xohkg6"><label class="detail-label svelte-1xohkg6">Endpoint</label> <input type="url" class="detail-input svelte-1xohkg6"/></div></div>'),Tw=A('<div class="provider-header svelte-1xohkg6"><span class="provider-dot svelte-1xohkg6"></span> <div class="provider-info svelte-1xohkg6"><span class="provider-name svelte-1xohkg6"> </span> <span class="provider-desc svelte-1xohkg6"> </span></div> <!></div> <!>',1),Ew=A(`<div class="provider-settings svelte-1xohkg6"><h3 class="section-title svelte-1xohkg6">Providers</h3> <p class="section-desc svelte-1xohkg6">Configuration des fournisseurs d'API pour le proxy multi-provider.</p> <div class="provider-list svelte-1xohkg6"></div></div>`);function Dw(e){const t=[{id:"anthropic",name:"Anthropic",color:"var(--provider-anthropic)",description:"Claude via API directe"},{id:"gemini",name:"Google Gemini",color:"var(--provider-gemini)",description:"Gemini via Google AI Studio"},{id:"openai",name:"OpenAI",color:"var(--provider-openai)",description:"GPT / o-series via API"},{id:"xai",name:"xAI",color:"var(--provider-xai)",description:"Grok via API xAI"},{id:"deepseek",name:"DeepSeek",color:"var(--provider-deepseek)",description:"DeepSeek R1 / Chat"},{id:"mistral",name:"Mistral",color:"var(--provider-mistral)",description:"Mistral AI models"},{id:"groq",name:"Groq",color:"var(--provider-groq)",description:"Inference rapide via Groq"}];let s=$e({anthropic:{enabled:!0,apiKey:"",endpoint:"https://api.anthropic.com"},gemini:{enabled:!1,apiKey:"",endpoint:"https://generativelanguage.googleapis.com"},openai:{enabled:!1,apiKey:"",endpoint:"https://api.openai.com"},xai:{enabled:!1,apiKey:"",endpoint:"https://api.x.ai"},deepseek:{enabled:!1,apiKey:"",endpoint:"https://api.deepseek.com"},mistral:{enabled:!1,apiKey:"",endpoint:"https://api.mistral.ai"},groq:{enabled:!1,apiKey:"",endpoint:"https://api.groq.com"}}),n=j(null);function i(o){M(n,u(n)===o?null:o,!0)}var a=Ew(),r=_(p(a),4);ie(r,21,()=>t,Le,(o,l)=>{const c=W(()=>s[u(l).id]);{let d=W(()=>u(n)===u(l).id);he(o,{onclick:()=>i(u(l).id),get active(){return u(d)},children:(h,f)=>{var v=Tw(),g=I(v),m=p(g),b=_(m,2),y=p(b),S=p(y),k=_(y,2),$=p(k),w=_(b,2);{let C=W(()=>u(c).enabled?"var(--status-running)":"var(--status-stopped)");Ue(w,{get color(){return u(C)},small:!0,children:(T,E)=>{var R=Ht();L(()=>D(R,u(c).enabled?"Actif":"Inactif")),x(T,R)},$$slots:{default:!0}})}var P=_(g,2);{var z=C=>{var T=zw(),E=p(T),R=p(E),N=_(R,2),Z=_(E,2),K=p(Z),V=_(K,2);L(()=>{Dt(R,"for",`apikey-${u(l).id??""}`),Dt(N,"id",`apikey-${u(l).id??""}`),Dt(K,"for",`endpoint-${u(l).id??""}`),Dt(V,"id",`endpoint-${u(l).id??""}`)}),nt("click",T,X=>X.stopPropagation()),nt("keydown",T,()=>{}),Te(N,()=>s[u(l).id].apiKey,X=>s[u(l).id].apiKey=X),Te(V,()=>s[u(l).id].endpoint,X=>s[u(l).id].endpoint=X),x(C,T)};B(P,C=>{u(n)===u(l).id&&C(z)})}L(()=>{Be(m,`background: ${u(l).color??""}`),D(S,u(l).name),D($,u(l).description)}),x(h,v)},$$slots:{default:!0}})}}),x(e,a)}De(["click","keydown"]);function Ow(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function qr(e){const t=e==="system"?Ow():e;document.documentElement.classList.toggle("light",t==="light")}function Lw(){const e=localStorage.getItem("theme")||"dark",{subscribe:t,set:s}=Vs(e);return qr(e),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem("theme")==="system"&&qr("system")}),{subscribe:t,set:n=>{localStorage.setItem("theme",n),qr(n),s(n)}}}const Ea=Lw();var Rw=A("<button><!> <span> </span></button>"),Iw=A('<div class="setting-row svelte-15j4tnx"><label for="schedule-start" class="svelte-15j4tnx">Plage horaire active</label> <div class="time-range svelte-15j4tnx"><input id="schedule-start" type="number" min="0" max="23" value="9" class="time-input svelte-15j4tnx"/> <span class="time-sep svelte-15j4tnx">→</span> <input id="schedule-end" type="number" min="0" max="23" value="18" class="time-input svelte-15j4tnx"/></div></div> <p class="hint svelte-15j4tnx">Les rafraîchissements automatiques ne fonctionnent que dans cette plage.</p>',1),jw=A('<div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Mode</span> <div class="theme-options svelte-15j4tnx"><button>Sombre</button> <button>Clair</button> <button>Système</button></div></div> <div class="setting-row svelte-15j4tnx"><label for="font-select" class="svelte-15j4tnx">Police</label> <select id="font-select" class="select-input svelte-15j4tnx"><option>Inter</option><option>Geist Sans</option><option>System</option></select></div> <div class="setting-row svelte-15j4tnx"><label for="lang-select" class="svelte-15j4tnx"> </label> <select id="lang-select" class="select-input svelte-15j4tnx"><option>Français</option><option>English</option></select></div>',1),Nw=A(`<div class="action-buttons svelte-15j4tnx"><button class="btn-secondary svelte-15j4tnx">Exporter la config</button> <button class="btn-secondary svelte-15j4tnx">Créer un backup</button> <button class="btn-danger svelte-15j4tnx">Réinitialiser</button></div> <p class="hint svelte-15j4tnx">L'export crée un JSON contenant vos paramètres (sans les tokens).</p>`,1),Fw=A('<div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Compte suivant</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+N</kbd></div> <div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Compte précédent</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+P</kbd></div> <div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Rafraîchir</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+R</kbd></div>',1),Bw=A('<div class="settings-page svelte-15j4tnx"><header class="page-header svelte-15j4tnx"><h1 class="svelte-15j4tnx"> </h1></header> <div class="settings-body svelte-15j4tnx"><nav class="settings-nav svelte-15j4tnx"></nav> <div class="settings-content svelte-15j4tnx"><!></div></div></div>');function qw(e,t){ke(t,!0);const s=()=>nu(dr,"$i18nStore",n),[n,i]=iu();let a=j("dark");Ea.subscribe(T=>{M(a,T,!0)});let r=j("general");const o=[{id:"general",label:"Général",icon:Lo},{id:"alerts",label:"Alertes",icon:Dv},{id:"schedule",label:"Schedule",icon:Ov},{id:"network",label:"Réseau",icon:Ro},{id:"providers",label:"Providers",icon:ou},{id:"theme",label:"Thème",icon:tp},{id:"data",label:"Données",icon:qv},{id:"hotkeys",label:"Hotkeys",icon:Jv}];function l(T){const E=T.currentTarget;_p(E.value)}Ve(async()=>{try{await Ae.load()}catch(T){console.error("Failed to load config:",T)}});var c=Bw(),d=p(c),h=p(d),f=p(h),v=_(d,2),g=p(v);ie(g,21,()=>o,Le,(T,E)=>{const R=W(()=>u(E).icon);var N=Rw();let Z;var K=p(N);or(K,()=>u(R),(J,xt)=>{xt(J,{size:16})});var V=_(K,2),X=p(V);L(()=>{Z=Yt(N,1,"nav-item svelte-15j4tnx",null,Z,{active:u(r)===u(E).id}),D(X,u(E).label)}),nt("click",N,()=>M(r,u(E).id,!0)),x(T,N)});var m=_(g,2),b=p(m);{var y=T=>{Dk(T,{})},S=T=>{Fk(T,{})},k=T=>{Ta(T,{title:"Schedule",children:(E,R)=>{var N=Iw();x(E,N)},$$slots:{default:!0}})},$=T=>{Cw(T,{})},w=T=>{Dw(T)},P=T=>{{let E=W(()=>Oa("settings.theme"));Ta(T,{get title(){return u(E)},children:(R,N)=>{var Z=jw(),K=I(Z),V=_(p(K),2),X=p(V);let J;var xt=_(X,2);let yt;var Pt=_(xt,2);let F;var O=_(K,4),H=p(O),tt=p(H),kt=_(H,2),q=p(kt);q.value=q.__value="fr";var et=_(q);et.value=et.__value="en";var Mt;lr(kt),L(ee=>{J=Yt(X,1,"theme-btn svelte-15j4tnx",null,J,{active:u(a)==="dark"}),yt=Yt(xt,1,"theme-btn svelte-15j4tnx",null,yt,{active:u(a)==="light"}),F=Yt(Pt,1,"theme-btn svelte-15j4tnx",null,F,{active:u(a)==="system"}),D(tt,ee),Mt!==(Mt=s())&&(kt.value=(kt.__value=s())??"",fi(kt,s()))},[()=>Oa("settings.language")]),nt("click",X,()=>Ea.set("dark")),nt("click",xt,()=>Ea.set("light")),nt("click",Pt,()=>Ea.set("system")),nt("change",kt,l),x(R,Z)},$$slots:{default:!0}})}},z=T=>{Ta(T,{title:"Données",children:(E,R)=>{var N=Nw();x(E,N)},$$slots:{default:!0}})},C=T=>{Ta(T,{title:"Raccourcis clavier",children:(E,R)=>{var N=Fw();x(E,N)},$$slots:{default:!0}})};B(b,T=>{u(r)==="general"?T(y):u(r)==="alerts"?T(S,1):u(r)==="schedule"?T(k,2):u(r)==="network"?T($,3):u(r)==="providers"?T(w,4):u(r)==="theme"?T(P,5):u(r)==="data"?T(z,6):u(r)==="hotkeys"&&T(C,7)})}L(T=>D(f,T),[()=>Oa("settings.title")]),x(e,c),we(),i()}De(["click","change"]);const Vw=e=>e;function Hw(e,{delay:t=0,duration:s=400,easing:n=Vw}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:n,css:a=>`opacity: ${a*i}`}}var Ww=A('<div class="screen-transition svelte-1n46o8q"><!></div>'),Uw=A('<div class="app-layout svelte-1n46o8q"><!> <main class="main-content svelte-1n46o8q"><!></main> <!> <!></div>');function Yw(e,t){ke(t,!0);let s=j("accounts");Ve(async()=>{try{await We.load()}catch(d){console.error("Failed to load accounts:",d)}ug(({key:d,quota:h})=>We.updateQuota(d,h)),hg(d=>Ln[d.type]?.(d.title,d.message)),fg(d=>We.switch(d))});function n(d){if(d.ctrlKey&&d.altKey){const h=["accounts","proxy","monitoring","settings"],f=h.indexOf(u(s));d.key==="n"||d.key==="N"?(M(s,h[(f+1)%h.length],!0),d.preventDefault()):d.key==="p"||d.key==="P"?(M(s,h[(f-1+h.length)%h.length],!0),d.preventDefault()):(d.key==="r"||d.key==="R")&&(We.load(),d.preventDefault())}}var i=Uw();js("keydown",qa,n);var a=p(i);kp(a,{get currentScreen(){return u(s)},set currentScreen(d){M(s,d,!0)}});var r=_(a,2),o=p(r);Gf(o,()=>u(s),d=>{var h=Ww(),f=p(h);{var v=y=>{Ym(y,{})},g=y=>{F_(y,{})},m=y=>{kk(y)},b=y=>{qw(y,{})};B(f,y=>{u(s)==="accounts"?y(v):u(s)==="proxy"?y(g,1):u(s)==="monitoring"?y(m,2):y(b,!1)})}av(1,h,()=>Hw,()=>({duration:150})),x(d,h)});var l=_(r,2);Ag(l,{onnavigate:d=>{M(s,d,!0)}});var c=_(l,2);Og(c,{}),x(e,i),we()}Uf(Yw,{target:document.getElementById("app")});
