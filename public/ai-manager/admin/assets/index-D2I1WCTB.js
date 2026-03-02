(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const ol=globalThis.process?.env?.NODE_ENV,ot=ol&&!ol.toLowerCase().startsWith("prod");var yo=Array.isArray,mh=Array.prototype.indexOf,qn=Array.prototype.includes,ir=Array.from,sn=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,id=Object.getOwnPropertyDescriptors,_h=Object.prototype,bh=Array.prototype,xo=Object.getPrototypeOf,ll=Object.isExtensible;function ti(e){return typeof e=="function"}const us=()=>{};function yh(e){return e()}function Fa(e){for(var t=0;t<e.length;t++)e[t]()}function ad(){var e,t,s=new Promise((n,i)=>{e=n,t=i});return{promise:s,resolve:e,reject:t}}function Ur(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const s=[];for(const n of e)if(s.push(n),s.length===t)break;return s}const Je=2,mi=4,ni=8,ko=1<<24,nn=16,Ds=32,Un=64,Yr=128,ks=512,Ke=1024,Qe=2048,Ts=4096,ms=8192,en=16384,Yn=32768,qs=65536,Ba=1<<17,xh=1<<18,_i=1<<19,rd=1<<20,Gs=1<<25,_n=65536,Kr=1<<21,ar=1<<22,vn=1<<23,Ns=Symbol("$state"),od=Symbol("legacy props"),kh=Symbol(""),ld=Symbol("proxy path"),Rn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},wo=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function wh(e){if(ot){const t=new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function $h(){if(ot){const e=new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/async_derived_orphan")}function cl(){if(ot){const e=new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value")}function Sh(){if(ot){const e=new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/derived_references_self")}function cd(e,t,s){if(ot){const n=new Error(`each_key_duplicate
${s?`Keyed each block has duplicate key \`${s}\` at indexes ${e} and ${t}`:`Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/each_key_duplicate")}function Mh(e,t,s){if(ot){const n=new Error(`each_key_volatile
Keyed each block has key that is not idempotent — the key for item at index ${e} was \`${t}\` but is now \`${s}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/each_key_volatile")}function Ph(e){if(ot){const t=new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ah(){if(ot){const e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ch(e){if(ot){const t=new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/effect_orphan")}function zh(){if(ot){const e=new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Th(){if(ot){const e=new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/invalid_snippet")}function Eh(e){if(ot){const t=new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/props_invalid_value")}function Dh(e){if(ot){const t=new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);throw t.name="Svelte error",t}else throw new Error("https://svelte.dev/e/rune_outside_svelte")}function Oh(){if(ot){const e=new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Rh(){if(ot){const e=new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Lh(){if(ot){const e=new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ih(){if(ot){const e=new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const jh=1,Nh=2,dd=4,Fh=8,Bh=16,qh=1,Vh=2,ud=4,Hh=8,Wh=16,Uh=4,Yh=1,Kh=2,He=Symbol(),Xh=Symbol("filename"),hd="http://www.w3.org/1999/xhtml",Gh="http://www.w3.org/2000/svg",Jh="@attach";var $o="font-weight: bold",So="font-weight: normal";function Qh(){ot?console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",$o,So):console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function kr(e){ot?console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,$o,So):console.warn("https://svelte.dev/e/state_proxy_equality_mismatch")}function Zh(){ot?console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",$o,So):console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function fd(e){return e===this.v}function vd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function pd(e){return!vd(e,this.v)}let bi=!1,tf=!1;function ef(){bi=!0}function Ls(e,t){return e.label=t,gd(e.v,t),e}function gd(e,t){return e?.[ld]?.(t),e}function sf(e){const t=new Error,s=nf();return s.length===0?null:(s.unshift(`
`),sn(t,"stack",{value:s.join(`
`)}),sn(t,"name",{value:e}),t)}function nf(){const e=Error.stackTraceLimit;Error.stackTraceLimit=1/0;const t=new Error().stack;if(Error.stackTraceLimit=e,!t)return[];const s=t.split(`
`),n=[];for(let i=0;i<s.length;i++){const a=s[i],r=a.replaceAll("\\","/");if(a.trim()!=="Error"){if(a.includes("validate_each_keys"))return[];r.includes("svelte/src/internal")||r.includes("node_modules/.vite")||n.push(a)}}return n}let Ee=null;function ii(e){Ee=e}let ai=null;function qa(e){ai=e}let sa=null;function dl(e){sa=e}function xe(e,t=!1,s){Ee={p:Ee,i:!1,c:null,e:null,s:e,x:null,l:bi&&!t?{s:null,u:null,$:[]}:null},ot&&(Ee.function=s,sa=s)}function ke(e){var t=Ee,s=t.e;if(s!==null){t.e=null;for(var n of s)Id(n)}return e!==void 0&&(t.x=e),t.i=!0,Ee=t.p,ot&&(sa=Ee?.function??null),e??{}}function yi(){return!bi||Ee!==null&&Ee.l===null}let Ln=[];function md(){var e=Ln;Ln=[],Fa(e)}function zs(e){if(Ln.length===0&&!ji){var t=Ln;queueMicrotask(()=>{t===Ln&&md()})}Ln.push(e)}function af(){for(;Ln.length>0;)md()}const Xr=new WeakMap;function _d(e){var t=te;if(t===null)return ce.f|=vn,e;if(ot&&e instanceof Error&&!Xr.has(e)&&Xr.set(e,rf(e,t)),(t.f&Yn)===0&&(t.f&mi)===0)throw ot&&!t.parent&&e instanceof Error&&bd(e),e;cn(e,t)}function cn(e,t){for(;t!==null;){if((t.f&Yr)!==0){if((t.f&Yn)===0)throw e;try{t.b.error(e);return}catch(s){e=s}}t=t.parent}throw ot&&e instanceof Error&&bd(e),e}function rf(e,t){const s=tn(e,"message");if(!(s&&!s.configurable)){for(var n=zo?"  ":"	",i=`
${n}in ${t.fn?.name||"<unknown>"}`,a=t.ctx;a!==null;)i+=`
${n}in ${a.function?.[Xh].split("/").pop()}`,a=a.p;return{message:e.message+`
${i}
`,stack:e.stack?.split(`
`).filter(r=>!r.includes("svelte/src/internal")).join(`
`)}}}function bd(e){const t=Xr.get(e);t&&(sn(e,"message",{value:t.message}),sn(e,"stack",{value:t.stack}))}const of=-7169;function Ie(e,t){e.f=e.f&of|t}function Mo(e){(e.f&ks)!==0||e.deps===null?Ie(e,Ke):Ie(e,Ts)}function yd(e){if(e!==null)for(const t of e)(t.f&Je)===0||(t.f&_n)===0||(t.f^=_n,yd(t.deps))}function xd(e,t,s){(e.f&Qe)!==0?t.add(e):(e.f&Ts)!==0&&s.add(e),yd(e.deps),Ie(e,Ke)}const ua=new Set;let me=null,Va=null,Ms=null,ls=[],rr=null,ji=!1,ri=null;class pn{current=new Map;previous=new Map;#t=new Set;#o=new Set;#e=0;#r=0;#s=null;#a=new Set;#n=new Set;#i=new Map;is_fork=!1;#l=!1;#d(){return this.is_fork||this.#r>0}skip_effect(t){this.#i.has(t)||this.#i.set(t,{d:[],m:[]})}unskip_effect(t){var s=this.#i.get(t);if(s){this.#i.delete(t);for(var n of s.d)Ie(n,Qe),Ps(n);for(n of s.m)Ie(n,Ts),Ps(n)}}process(t){ls=[],this.apply();var s=ri=[],n=[];for(const i of t)this.#c(i,s,n);if(ri=null,this.#d()){this.#h(n),this.#h(s);for(const[i,a]of this.#i)Sd(i,a)}else{Va=this,me=null;for(const i of this.#t)i(this);this.#t.clear(),this.#e===0&&this.#f(),ul(n),ul(s),this.#a.clear(),this.#n.clear(),Va=null,this.#s?.resolve()}Ms=null}#c(t,s,n){t.f^=Ke;for(var i=t.first;i!==null;){var a=i.f,r=(a&(Ds|Un))!==0,o=r&&(a&Ke)!==0,l=o||(a&ms)!==0||this.#i.has(i);if(!l&&i.fn!==null){r?i.f^=Ke:(a&mi)!==0?s.push(i):oa(i)&&((a&nn)!==0&&this.#n.add(i),di(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}}#h(t){for(var s=0;s<t.length;s+=1)xd(t[s],this.#a,this.#n)}capture(t,s){s!==He&&!this.previous.has(t)&&this.previous.set(t,s),(t.f&vn)===0&&(this.current.set(t,t.v),Ms?.set(t,t.v))}activate(){me=this,this.apply()}deactivate(){me===this&&(me=null,Ms=null)}flush(){if(ls.length>0)me=this,kd();else if(this.#e===0&&!this.is_fork){for(const t of this.#t)t(this);this.#t.clear(),this.#f(),this.#s?.resolve()}this.deactivate()}discard(){for(const t of this.#o)t(this);this.#o.clear()}#f(){if(ua.size>1){this.previous.clear();var t=me,s=Ms,n=!0;for(const a of ua){if(a===this){n=!1;continue}const r=[];for(const[l,c]of this.current){if(a.current.has(l))if(n&&c!==a.current.get(l))a.current.set(l,c);else continue;r.push(l)}if(r.length===0)continue;const o=[...a.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var i=ls;ls=[];const l=new Set,c=new Map;for(const d of r)wd(d,o,l,c);if(ls.length>0){me=a,a.apply();for(const d of ls)a.#c(d,[],[]);a.deactivate()}ls=i}}me=t,Ms=s}this.#i.clear(),ua.delete(this)}increment(t){this.#e+=1,t&&(this.#r+=1)}decrement(t){this.#e-=1,t&&(this.#r-=1),!this.#l&&(this.#l=!0,zs(()=>{this.#l=!1,this.#d()?ls.length>0&&this.flush():this.revive()}))}revive(){for(const t of this.#a)this.#n.delete(t),Ie(t,Qe),Ps(t);for(const t of this.#n)Ie(t,Ts),Ps(t);this.flush()}oncommit(t){this.#t.add(t)}ondiscard(t){this.#o.add(t)}settled(){return(this.#s??=ad()).promise}static ensure(){if(me===null){const t=me=new pn;ua.add(me),ji||zs(()=>{me===t&&t.flush()})}return me}apply(){}}function lf(e){var t=ji;ji=!0;try{for(var s;;){if(af(),ls.length===0&&(me?.flush(),ls.length===0))return rr=null,s;kd()}}finally{ji=t}}function kd(){var e=ot?new Set:null;try{for(var t=0;ls.length>0;){var s=pn.ensure();if(t++>1e3){if(ot){var n=new Map;for(const a of s.current.keys())for(const[r,o]of a.updated??[]){var i=n.get(r);i||(i={error:o.error,count:0},n.set(r,i)),i.count+=o.count}for(const a of n.values())a.error&&console.error(a.error)}cf()}if(s.process(ls),gn.clear(),ot)for(const a of s.current.keys())e.add(a)}}finally{if(ls=[],rr=null,ri=null,ot)for(const a of e)a.updated=null}}function cf(){try{zh()}catch(e){ot&&sn(e,"stack",{value:""}),cn(e,rr)}}let Ys=null;function ul(e){var t=e.length;if(t!==0){for(var s=0;s<t;){var n=e[s++];if((n.f&(en|ms))===0&&oa(n)&&(Ys=new Set,di(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Fd(n),Ys?.size>0)){gn.clear();for(const i of Ys){if((i.f&(en|ms))!==0)continue;const a=[i];let r=i.parent;for(;r!==null;)Ys.has(r)&&(Ys.delete(r),a.push(r)),r=r.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(en|ms))===0&&di(l)}}Ys.clear()}}Ys=null}}function wd(e,t,s,n){if(!s.has(e)&&(s.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Je)!==0?wd(i,t,s,n):(a&(ar|nn))!==0&&(a&Qe)===0&&$d(i,t,n)&&(Ie(i,Qe),Ps(i))}}function $d(e,t,s){const n=s.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(qn.call(t,i))return!0;if((i.f&Je)!==0&&$d(i,t,s))return s.set(i,!0),!0}return s.set(e,!1),!1}function Ps(e){var t=rr=e,s=t.b;if(s?.is_pending&&(e.f&(mi|ni|ko))!==0&&(e.f&Yn)===0){s.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(ri!==null&&t===te&&(e.f&ni)===0)return;if((n&(Un|Ds))!==0){if((n&Ke)===0)return;t.f^=Ke}}ls.push(t)}function Sd(e,t){if(!((e.f&Ds)!==0&&(e.f&Ke)!==0)){(e.f&Qe)!==0?t.d.push(e):(e.f&Ts)!==0&&t.m.push(e),Ie(e,Ke);for(var s=e.first;s!==null;)Sd(s,t),s=s.next}}function df(e){let t=0,s=bn(0),n;return ot&&Ls(s,"createSubscriber version"),()=>{Eo()&&(u(s),or(()=>(t===0&&(n=Es(()=>e(()=>Ni(s)))),t+=1,()=>{zs(()=>{t-=1,t===0&&(n?.(),n=void 0,Ni(s))})})))}}var uf=qs|_i;function hf(e,t,s,n){new ff(e,t,s,n)}class ff{parent;is_pending=!1;transform_error;#t;#o=null;#e;#r;#s;#a=null;#n=null;#i=null;#l=null;#d=0;#c=0;#h=!1;#f=new Set;#v=new Set;#u=null;#b=df(()=>(this.#u=bn(this.#d),ot&&Ls(this.#u,"$effect.pending()"),()=>{this.#u=null}));constructor(t,s,n,i){this.#t=t,this.#e=s,this.#r=a=>{var r=te;r.b=this,r.f|=Yr,n(a)},this.parent=te.b,this.transform_error=i??this.parent?.transform_error??(a=>a),this.#s=Kn(()=>{this.#m()},uf)}#y(){try{this.#a=ds(()=>this.#r(this.#t))}catch(t){this.error(t)}}#x(t){const s=this.#e.failed;s&&(this.#i=ds(()=>{s(this.#t,()=>t,()=>()=>{})}))}#k(){const t=this.#e.pending;t&&(this.is_pending=!0,this.#n=ds(()=>t(this.#t)),zs(()=>{var s=this.#l=document.createDocumentFragment(),n=Fs();s.append(n),this.#a=this.#g(()=>(pn.ensure(),ds(()=>this.#r(n)))),this.#c===0&&(this.#t.before(s),this.#l=null,jn(this.#n,()=>{this.#n=null}),this.#p())}))}#m(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#d=0,this.#a=ds(()=>{this.#r(this.#t)}),this.#c>0){var t=this.#l=document.createDocumentFragment();Vd(this.#a,t);const s=this.#e.pending;this.#n=ds(()=>s(this.#t))}else this.#p()}catch(s){this.error(s)}}#p(){this.is_pending=!1;for(const t of this.#f)Ie(t,Qe),Ps(t);for(const t of this.#v)Ie(t,Ts),Ps(t);this.#f.clear(),this.#v.clear()}defer_effect(t){xd(t,this.#f,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#g(t){var s=te,n=ce,i=Ee;_s(this.#s),$s(this.#s),ii(this.#s.ctx);try{return t()}catch(a){return _d(a),null}finally{_s(s),$s(n),ii(i)}}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#c+=t,this.#c===0&&(this.#p(),this.#n&&jn(this.#n,()=>{this.#n=null}),this.#l&&(this.#t.before(this.#l),this.#l=null))}update_pending_count(t){this.#_(t),this.#d+=t,!(!this.#u||this.#h)&&(this.#h=!0,zs(()=>{this.#h=!1,this.#u&&li(this.#u,this.#d)}))}get_effect_pending(){return this.#b(),u(this.#u)}error(t){var s=this.#e.onerror;let n=this.#e.failed;if(!s&&!n)throw t;this.#a&&(Ge(this.#a),this.#a=null),this.#n&&(Ge(this.#n),this.#n=null),this.#i&&(Ge(this.#i),this.#i=null);var i=!1,a=!1;const r=()=>{if(i){Zh();return}i=!0,a&&Ih(),this.#i!==null&&jn(this.#i,()=>{this.#i=null}),this.#g(()=>{pn.ensure(),this.#m()})},o=l=>{try{a=!0,s?.(l,r),a=!1}catch(c){cn(c,this.#s&&this.#s.parent)}n&&(this.#i=this.#g(()=>{pn.ensure();try{return ds(()=>{var c=te;c.b=this,c.f|=Yr,n(this.#t,()=>l,()=>r)})}catch(c){return cn(c,this.#s.parent),null}}))};zs(()=>{var l;try{l=this.transform_error(t)}catch(c){cn(c,this.#s&&this.#s.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>cn(c,this.#s&&this.#s.parent)):o(l)})}}function Md(e,t,s,n){const i=yi()?na:Po;var a=e.filter(h=>!h.settled);if(s.length===0&&a.length===0){n(t.map(i));return}var r=te,o=vf(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function c(h){o();try{n(h)}catch(f){(r.f&en)===0&&cn(f,r)}Gr()}if(s.length===0){l.then(()=>c(t.map(i)));return}function d(){o(),Promise.all(s.map(h=>mf(h))).then(h=>c([...t.map(i),...h])).catch(h=>cn(h,r))}l?l.then(d):d()}function vf(){var e=te,t=ce,s=Ee,n=me;if(ot)var i=ai;return function(r=!0){_s(e),$s(t),ii(s),r&&n?.activate(),ot&&qa(i)}}function Gr(e=!0){_s(null),$s(null),ii(null),e&&me?.deactivate(),ot&&qa(null)}function pf(){var e=te.b,t=me,s=e.is_rendered();return e.update_pending_count(1),t.increment(s),()=>{e.update_pending_count(-1),t.decrement(s)}}const gf=new Set;function na(e){var t=Je|Qe,s=ce!==null&&(ce.f&Je)!==0?ce:null;return te!==null&&(te.f|=_i),{ctx:Ee,deps:null,effects:null,equals:fd,f:t,fn:e,reactions:null,rv:0,v:He,wv:0,parent:s??te,ac:null}}function mf(e,t,s){te===null&&$h();var i=void 0,a=bn(He);ot&&(a.label=t);var r=!ce,o=new Map;return Df(()=>{var l=ad();i=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(Gr)}catch(f){l.reject(f),Gr()}var c=me;if(r){var d=pf();o.get(c)?.reject(Rn),o.delete(c),o.set(c,l)}const h=(f,v=void 0)=>{if(c.activate(),v)v!==Rn&&(a.f|=vn,li(a,v));else{(a.f&vn)!==0&&(a.f^=vn),li(a,f);for(const[g,m]of o){if(o.delete(g),g===c)break;m.reject(Rn)}}d&&d()};l.promise.then(h,f=>h(null,f||"unknown"))}),aa(()=>{for(const l of o.values())l.reject(Rn)}),ot&&(a.f|=ar),new Promise(l=>{function c(d){function h(){d===i?l(a):c(i)}d.then(h,h)}c(i)})}function W(e){const t=na(e);return Hd(t),t}function Po(e){const t=na(e);return t.equals=pd,t}function hl(e){var t=e.effects;if(t!==null){e.effects=null;for(var s=0;s<t.length;s+=1)Ge(t[s])}}let wr=[];function _f(e){for(var t=e.parent;t!==null;){if((t.f&Je)===0)return(t.f&en)===0?t:null;t=t.parent}return null}function Ao(e){var t,s=te;if(_s(_f(e)),ot){let n=oi;fl(new Set);try{qn.call(wr,e)&&Sh(),wr.push(e),e.f&=~_n,hl(e),t=Jr(e)}finally{_s(s),fl(n),wr.pop()}}else try{e.f&=~_n,hl(e),t=Jr(e)}finally{_s(s)}return t}function Pd(e){var t=Ao(e);if(!e.equals(t)&&(e.wv=Ud(),(!me?.is_fork||e.deps===null)&&(e.v=t,e.deps===null))){Ie(e,Ke);return}yn||(Ms!==null?(Eo()||me?.is_fork)&&Ms.set(e,t):Mo(e))}function bf(e){if(e.effects!==null)for(const t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(Rn),t.teardown=us,t.ac=null,Yi(t,0),Do(t))}function Ad(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&di(t)}let oi=new Set;const gn=new Map;function fl(e){oi=e}let Co=!1;function yf(){Co=!0}function bn(e,t){var s={f:0,v:e,reactions:null,equals:fd,rv:0,wv:0};return s}function j(e,t){const s=bn(e);return Hd(s),s}function Cd(e,t=!1,s=!0){const n=bn(e);return t||(n.equals=pd),bi&&s&&Ee!==null&&Ee.l!==null&&(Ee.l.s??=[]).push(n),n}function M(e,t,s=!1){ce!==null&&(!As||(ce.f&Ba)!==0)&&yi()&&(ce.f&(Je|nn|ar|Ba))!==0&&(ws===null||!qn.call(ws,e))&&Lh();let n=s?we(t):t;return ot&&gd(n,e.label),li(e,n)}function li(e,t){if(!e.equals(t)){var s=e.v;yn?gn.set(e,t):gn.set(e,s),e.v=t;var n=pn.ensure();if(n.capture(e,s),ot){if(te!==null){e.updated??=new Map;const i=(e.updated.get("")?.count??0)+1;if(e.updated.set("",{error:null,count:i}),i>5){const a=sf("updated at");if(a!==null){let r=e.updated.get(a.stack);r||(r={error:a,count:0},e.updated.set(a.stack,r)),r.count++}}}te!==null&&(e.set_during_effect=!0)}if((e.f&Je)!==0){const i=e;(e.f&Qe)!==0&&Ao(i),Mo(i)}e.wv=Ud(),Td(e,Qe),yi()&&te!==null&&(te.f&Ke)!==0&&(te.f&(Ds|Un))===0&&(xs===null?Lf([e]):xs.push(e)),!n.is_fork&&oi.size>0&&!Co&&zd()}return t}function zd(){Co=!1;for(const e of oi)(e.f&Ke)!==0&&Ie(e,Ts),oa(e)&&di(e);oi.clear()}function vl(e,t=1){var s=u(e),n=t===1?s++:s--;return M(e,s),n}function Ni(e){M(e,e.v+1)}function Td(e,t){var s=e.reactions;if(s!==null)for(var n=yi(),i=s.length,a=0;a<i;a++){var r=s[a],o=r.f;if(!(!n&&r===te)){if(ot&&(o&Ba)!==0){oi.add(r);continue}var l=(o&Qe)===0;if(l&&Ie(r,t),(o&Je)!==0){var c=r;Ms?.delete(c),(o&_n)===0&&(o&ks&&(r.f|=_n),Td(c,Ts))}else l&&((o&nn)!==0&&Ys!==null&&Ys.add(r),Ps(r))}}}const xf=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;function we(e){if(typeof e!="object"||e===null||Ns in e)return e;const t=xo(e);if(t!==_h&&t!==bh)return e;var s=new Map,n=yo(e),i=j(0),a=Nn,r=d=>{if(Nn===a)return d();var h=ce,f=Nn;$s(null),ml(a);var v=d();return $s(h),ml(f),v};n&&(s.set("length",j(e.length)),ot&&(e=$f(e)));var o="";let l=!1;function c(d){if(!l){l=!0,o=d,Ls(i,`${o} version`);for(const[h,f]of s)Ls(f,Mn(o,h));l=!1}}return new Proxy(e,{defineProperty(d,h,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Oh();var v=s.get(h);return v===void 0?r(()=>{var g=j(f.value);return s.set(h,g),ot&&typeof h=="string"&&Ls(g,Mn(o,h)),g}):M(v,f.value,!0),!0},deleteProperty(d,h){var f=s.get(h);if(f===void 0){if(h in d){const v=r(()=>j(He));s.set(h,v),Ni(i),ot&&Ls(v,Mn(o,h))}}else M(f,He),Ni(i);return!0},get(d,h,f){if(h===Ns)return e;if(ot&&h===ld)return c;var v=s.get(h),g=h in d;if(v===void 0&&(!g||tn(d,h)?.writable)&&(v=r(()=>{var b=we(g?d[h]:He),y=j(b);return ot&&Ls(y,Mn(o,h)),y}),s.set(h,v)),v!==void 0){var m=u(v);return m===He?void 0:m}return Reflect.get(d,h,f)},getOwnPropertyDescriptor(d,h){var f=Reflect.getOwnPropertyDescriptor(d,h);if(f&&"value"in f){var v=s.get(h);v&&(f.value=u(v))}else if(f===void 0){var g=s.get(h),m=g?.v;if(g!==void 0&&m!==He)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(d,h){if(h===Ns)return!0;var f=s.get(h),v=f!==void 0&&f.v!==He||Reflect.has(d,h);if(f!==void 0||te!==null&&(!v||tn(d,h)?.writable)){f===void 0&&(f=r(()=>{var m=v?we(d[h]):He,b=j(m);return ot&&Ls(b,Mn(o,h)),b}),s.set(h,f));var g=u(f);if(g===He)return!1}return v},set(d,h,f,v){var g=s.get(h),m=h in d;if(n&&h==="length")for(var b=f;b<g.v;b+=1){var y=s.get(b+"");y!==void 0?M(y,He):b in d&&(y=r(()=>j(He)),s.set(b+"",y),ot&&Ls(y,Mn(o,b)))}if(g===void 0)(!m||tn(d,h)?.writable)&&(g=r(()=>j(void 0)),ot&&Ls(g,Mn(o,h)),M(g,we(f)),s.set(h,g));else{m=g.v!==He;var S=r(()=>we(f));M(g,S)}var k=Reflect.getOwnPropertyDescriptor(d,h);if(k?.set&&k.set.call(v,f),!m){if(n&&typeof h=="string"){var w=s.get("length"),$=Number(h);Number.isInteger($)&&$>=w.v&&M(w,$+1)}Ni(i)}return!0},ownKeys(d){u(i);var h=Reflect.ownKeys(d).filter(g=>{var m=s.get(g);return m===void 0||m.v!==He});for(var[f,v]of s)v.v!==He&&!(f in d)&&h.push(f);return h},setPrototypeOf(){Rh()}})}function Mn(e,t){return typeof t=="symbol"?`${e}[Symbol(${t.description??""})]`:xf.test(t)?`${e}.${t}`:/^\d+$/.test(t)?`${e}[${t}]`:`${e}['${t}']`}function Fi(e){try{if(e!==null&&typeof e=="object"&&Ns in e)return e[Ns]}catch{}return e}function kf(e,t){return Object.is(Fi(e),Fi(t))}const wf=new Set(["copyWithin","fill","pop","push","reverse","shift","sort","splice","unshift"]);function $f(e){return new Proxy(e,{get(t,s,n){var i=Reflect.get(t,s,n);return wf.has(s)?function(...a){yf();var r=i.apply(this,a);return zd(),r}:i}})}function Sf(){const e=Array.prototype,t=Array.__svelte_cleanup;t&&t();const{indexOf:s,lastIndexOf:n,includes:i}=e;e.indexOf=function(a,r){const o=s.call(this,a,r);if(o===-1){for(let l=r??0;l<this.length;l+=1)if(Fi(this[l])===a){kr("array.indexOf(...)");break}}return o},e.lastIndexOf=function(a,r){const o=n.call(this,a,r??this.length-1);if(o===-1){for(let l=0;l<=(r??this.length-1);l+=1)if(Fi(this[l])===a){kr("array.lastIndexOf(...)");break}}return o},e.includes=function(a,r){const o=i.call(this,a,r);if(!o){for(let l=0;l<this.length;l+=1)if(Fi(this[l])===a){kr("array.includes(...)");break}}return o},Array.__svelte_cleanup=()=>{e.indexOf=s,e.lastIndexOf=n,e.includes=i}}var Ha,zo,Ed,Dd;function Mf(){if(Ha===void 0){Ha=window,zo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,s=Text.prototype;Ed=tn(t,"firstChild").get,Dd=tn(t,"nextSibling").get,ll(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ll(s)&&(s.__t=void 0),ot&&(e.__svelte_meta=null,Sf())}}function Fs(e=""){return document.createTextNode(e)}function ci(e){return Ed.call(e)}function ia(e){return Dd.call(e)}function p(e,t){return ci(e)}function I(e,t=!1){{var s=ci(e);return s instanceof Comment&&s.data===""?ia(s):s}}function _(e,t=1,s=!1){let n=e;for(;t--;)n=ia(n);return n}function Pf(e){e.textContent=""}function Od(){return!1}function Rd(e,t,s){return document.createElementNS(t??hd,e,void 0)}function Af(e,t){if(t){const s=document.body;e.autofocus=!0,zs(()=>{document.activeElement===s&&e.focus()})}}let pl=!1;function Cf(){pl||(pl=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function xi(e){var t=ce,s=te;$s(null),_s(null);try{return e()}finally{$s(t),_s(s)}}function To(e,t,s,n=s){e.addEventListener(t,()=>xi(s));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Cf()}function Ld(e){te===null&&(ce===null&&Ch(e),Ah()),yn&&Ph(e)}function zf(e,t){var s=t.last;s===null?t.last=t.first=e:(s.next=e,e.prev=s,t.last=e)}function Os(e,t){var s=te;if(ot)for(;s!==null&&(s.f&Ba)!==0;)s=s.parent;s!==null&&(s.f&ms)!==0&&(e|=ms);var n={ctx:Ee,deps:null,nodes:null,f:e|Qe|ks,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,wv:0,ac:null};ot&&(n.component_function=sa);var i=n;if((e&mi)!==0)ri!==null?ri.push(n):Ps(n);else if(t!==null){try{di(n)}catch(r){throw Ge(n),r}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&_i)===0&&(i=i.first,(e&nn)!==0&&(e&qs)!==0&&i!==null&&(i.f|=qs))}if(i!==null&&(i.parent=s,s!==null&&zf(i,s),ce!==null&&(ce.f&Je)!==0&&(e&Un)===0)){var a=ce;(a.effects??=[]).push(i)}return n}function Eo(){return ce!==null&&!As}function aa(e){const t=Os(ni,null);return Ie(t,Ke),t.teardown=e,t}function Vn(e){Ld("$effect"),ot&&sn(e,"name",{value:"$effect"});var t=te.f,s=!ce&&(t&Ds)!==0&&(t&Yn)===0;if(s){var n=Ee;(n.e??=[]).push(e)}else return Id(e)}function Id(e){return Os(mi|rd,e)}function Tf(e){return Ld("$effect.pre"),ot&&sn(e,"name",{value:"$effect.pre"}),Os(ni|rd,e)}function Ef(e){pn.ensure();const t=Os(Un|_i,e);return(s={})=>new Promise(n=>{s.outro?jn(t,()=>{Ge(t),n(void 0)}):(Ge(t),n(void 0))})}function ra(e){return Os(mi,e)}function Df(e){return Os(ar|_i,e)}function or(e,t=0){return Os(ni|t,e)}function R(e,t=[],s=[],n=[]){Md(n,t,s,i=>{Os(ni,()=>e(...i.map(u)))})}function Kn(e,t=0){var s=Os(nn|t,e);return ot&&(s.dev_stack=ai),s}function jd(e,t=0){var s=Os(ko|t,e);return ot&&(s.dev_stack=ai),s}function ds(e){return Os(Ds|_i,e)}function Nd(e){var t=e.teardown;if(t!==null){const s=yn,n=ce;gl(!0),$s(null);try{t.call(null)}finally{gl(s),$s(n)}}}function Do(e,t=!1){var s=e.first;for(e.first=e.last=null;s!==null;){const i=s.ac;i!==null&&xi(()=>{i.abort(Rn)});var n=s.next;(s.f&Un)!==0?s.parent=null:Ge(s,t),s=n}}function Of(e){for(var t=e.first;t!==null;){var s=t.next;(t.f&Ds)===0&&Ge(t),t=s}}function Ge(e,t=!0){var s=!1;(t||(e.f&xh)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Rf(e.nodes.start,e.nodes.end),s=!0),Do(e,t&&!s),Yi(e,0),Ie(e,en);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Nd(e);var i=e.parent;i!==null&&i.first!==null&&Fd(e),ot&&(e.component_function=null),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Rf(e,t){for(;e!==null;){var s=e===t?null:ia(e);e.remove(),e=s}}function Fd(e){var t=e.parent,s=e.prev,n=e.next;s!==null&&(s.next=n),n!==null&&(n.prev=s),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=s))}function jn(e,t,s=!0){var n=[];Bd(e,n,!0);var i=()=>{s&&Ge(e),t&&t()},a=n.length;if(a>0){var r=()=>--a||i();for(var o of n)o.out(r)}else i()}function Bd(e,t,s){if((e.f&ms)===0){e.f^=ms;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||s)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next,r=(i.f&qs)!==0||(i.f&Ds)!==0&&(e.f&nn)!==0;Bd(i,t,r?s:!1),i=a}}}function Oo(e){qd(e,!0)}function qd(e,t){if((e.f&ms)!==0){e.f^=ms,(e.f&Ke)===0&&(Ie(e,Qe),Ps(e));for(var s=e.first;s!==null;){var n=s.next,i=(s.f&qs)!==0||(s.f&Ds)!==0;qd(s,i?t:!1),s=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const r of a)(r.is_global||t)&&r.in()}}function Vd(e,t){if(e.nodes)for(var s=e.nodes.start,n=e.nodes.end;s!==null;){var i=s===n?null:ia(s);t.append(s),s=i}}let Ra=!1,yn=!1;function gl(e){yn=e}let ce=null,As=!1;function $s(e){ce=e}let te=null;function _s(e){te=e}let ws=null;function Hd(e){ce!==null&&(ws===null?ws=[e]:ws.push(e))}let cs=null,fs=0,xs=null;function Lf(e){xs=e}let Wd=1,In=0,Nn=In;function ml(e){Nn=e}function Ud(){return++Wd}function oa(e){var t=e.f;if((t&Qe)!==0)return!0;if(t&Je&&(e.f&=~_n),(t&Ts)!==0){for(var s=e.deps,n=s.length,i=0;i<n;i++){var a=s[i];if(oa(a)&&Pd(a),a.wv>e.wv)return!0}(t&ks)!==0&&Ms===null&&Ie(e,Ke)}return!1}function Yd(e,t,s=!0){var n=e.reactions;if(n!==null&&!(ws!==null&&qn.call(ws,e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Je)!==0?Yd(a,t,!1):t===a&&(s?Ie(a,Qe):(a.f&Ke)!==0&&Ie(a,Ts),Ps(a))}}function Jr(e){var t=cs,s=fs,n=xs,i=ce,a=ws,r=Ee,o=As,l=Nn,c=e.f;cs=null,fs=0,xs=null,ce=(c&(Ds|Un))===0?e:null,ws=null,ii(e.ctx),As=!1,Nn=++In,e.ac!==null&&(xi(()=>{e.ac.abort(Rn)}),e.ac=null);try{e.f|=Kr;var d=e.fn,h=d();e.f|=Yn;var f=e.deps,v=me?.is_fork;if(cs!==null){var g;if(v||Yi(e,fs),f!==null&&fs>0)for(f.length=fs+cs.length,g=0;g<cs.length;g++)f[fs+g]=cs[g];else e.deps=f=cs;if(Eo()&&(e.f&ks)!==0)for(g=fs;g<f.length;g++)(f[g].reactions??=[]).push(e)}else!v&&f!==null&&fs<f.length&&(Yi(e,fs),f.length=fs);if(yi()&&xs!==null&&!As&&f!==null&&(e.f&(Je|Ts|Qe))===0)for(g=0;g<xs.length;g++)Yd(xs[g],e);if(i!==null&&i!==e){if(In++,i.deps!==null)for(let m=0;m<s;m+=1)i.deps[m].rv=In;if(t!==null)for(const m of t)m.rv=In;xs!==null&&(n===null?n=xs:n.push(...xs))}return(e.f&vn)!==0&&(e.f^=vn),h}catch(m){return _d(m)}finally{e.f^=Kr,cs=t,fs=s,xs=n,ce=i,ws=a,ii(r),As=o,Nn=l}}function If(e,t){let s=t.reactions;if(s!==null){var n=mh.call(s,e);if(n!==-1){var i=s.length-1;i===0?s=t.reactions=null:(s[n]=s[i],s.pop())}}if(s===null&&(t.f&Je)!==0&&(cs===null||!qn.call(cs,t))){var a=t;(a.f&ks)!==0&&(a.f^=ks,a.f&=~_n),Mo(a),bf(a),Yi(a,0)}}function Yi(e,t){var s=e.deps;if(s!==null)for(var n=t;n<s.length;n++)If(e,s[n])}function di(e){var t=e.f;if((t&en)===0){Ie(e,Ke);var s=te,n=Ra;if(te=e,Ra=!0,ot){var i=sa;dl(e.component_function);var a=ai;qa(e.dev_stack??ai)}try{(t&(nn|ko))!==0?Of(e):Do(e),Nd(e);var r=Jr(e);e.teardown=typeof r=="function"?r:null,e.wv=Wd;var o;ot&&tf&&(e.f&Qe)!==0&&e.deps}finally{Ra=n,te=s,ot&&(dl(i),qa(a))}}}async function jf(){await Promise.resolve(),lf()}function u(e){var t=e.f,s=(t&Je)!==0;if(ce!==null&&!As){var n=te!==null&&(te.f&en)!==0;if(!n&&(ws===null||!qn.call(ws,e))){var i=ce.deps;if((ce.f&Kr)!==0)e.rv<In&&(e.rv=In,cs===null&&i!==null&&i[fs]===e?fs++:cs===null?cs=[e]:cs.push(e));else{(ce.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[ce]:qn.call(a,ce)||a.push(ce)}}}if(ot&&gf.delete(e),yn&&gn.has(e))return gn.get(e);if(s){var r=e;if(yn){var o=r.v;return((r.f&Ke)===0&&r.reactions!==null||Xd(r))&&(o=Ao(r)),gn.set(r,o),o}var l=(r.f&ks)===0&&!As&&ce!==null&&(Ra||(ce.f&ks)!==0),c=(r.f&Yn)===0;oa(r)&&(l&&(r.f|=ks),Pd(r)),l&&!c&&(Ad(r),Kd(r))}if(Ms?.has(e))return Ms.get(e);if((e.f&vn)!==0)throw e.v;return e.v}function Kd(e){if(e.f|=ks,e.deps!==null)for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&Je)!==0&&(t.f&ks)===0&&(Ad(t),Kd(t))}function Xd(e){if(e.v===He)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(gn.has(t)||(t.f&Je)!==0&&Xd(t))return!0;return!1}function Es(e){var t=As;try{return As=!0,e()}finally{As=t}}function Tn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ns in e)Qr(e);else if(!Array.isArray(e))for(let t in e){const s=e[t];typeof s=="object"&&s&&Ns in s&&Qr(s)}}}function Qr(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Qr(e[n],t)}catch{}const s=xo(e);if(s!==Object.prototype&&s!==Array.prototype&&s!==Map.prototype&&s!==Set.prototype&&s!==Date.prototype){const n=id(s);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Nf(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ff=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Bf(e){return Ff.includes(e)}const qf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Vf(e){return e=e.toLowerCase(),qf[e]??e}const Hf=["touchstart","touchmove"];function Wf(e){return Hf.includes(e)}const Ei=Symbol("events"),Gd=new Set,Zr=new Set;function Jd(e,t,s,n={}){function i(a){if(n.capture||to.call(t,a),!a.cancelBubble)return xi(()=>s?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?zs(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function js(e,t,s,n,i){var a={capture:n,passive:i},r=Jd(e,t,s,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&aa(()=>{t.removeEventListener(e,r,a)})}function nt(e,t,s){(t[Ei]??={})[e]=s}function De(e){for(var t=0;t<e.length;t++)Gd.add(e[t]);for(var s of Zr)s(e)}let _l=null;function to(e){var t=this,s=t.ownerDocument,n=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;_l=e;var r=0,o=_l===e&&e[Ei];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Ei]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(r=l)}if(a=i[r]||e.target,a!==t){sn(e,"currentTarget",{configurable:!0,get(){return a||s}});var d=ce,h=te;$s(null),_s(null);try{for(var f,v=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var m=a[Ei]?.[n];m!=null&&(!a.disabled||e.target===a)&&m.call(a,e)}catch(b){f?v.push(b):f=b}if(e.cancelBubble||g===t||g===null)break;a=g}if(f){for(let b of v)queueMicrotask(()=>{throw b});throw f}}finally{e[Ei]=t,delete e.currentTarget,$s(d),_s(h)}}}const Uf=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Yf(e){return Uf?.createHTML(e)??e}function Qd(e){var t=Rd("template");return t.innerHTML=Yf(e.replaceAll("<!>","<!---->")),t.content}function ui(e,t){var s=te;s.nodes===null&&(s.nodes={start:e,end:t,a:null,t:null})}function P(e,t){var s=(t&Yh)!==0,n=(t&Kh)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Qd(a?e:"<!>"+e),s||(i=ci(i)));var r=n||zo?document.importNode(i,!0):i.cloneNode(!0);if(s){var o=ci(r),l=r.lastChild;ui(o,l)}else ui(r,r);return r}}function Kf(e,t,s="svg"){var n=!e.startsWith("<!>"),i=`<${s}>${n?e:"<!>"+e}</${s}>`,a;return()=>{if(!a){var r=Qd(i),o=ci(r);a=ci(o)}var l=a.cloneNode(!0);return ui(l,l),l}}function lr(e,t){return Kf(e,t,"svg")}function Ht(e=""){{var t=Fs(e+"");return ui(t,t),t}}function it(){var e=document.createDocumentFragment(),t=document.createComment(""),s=Fs();return e.append(t,s),ui(t,s),e}function x(e,t){e!==null&&e.before(t)}let Wa=!0;function ha(e){Wa=e}function D(e,t){var s=t==null?"":typeof t=="object"?`${t}`:t;s!==(e.__t??=e.nodeValue)&&(e.__t=s,e.nodeValue=`${s}`)}function Xf(e,t){return Gf(e,t)}const fa=new Map;function Gf(e,{target:t,anchor:s,props:n={},events:i,context:a,intro:r=!0,transformError:o}){Mf();var l=void 0,c=Ef(()=>{var d=s??t.appendChild(Fs());hf(d,{pending:()=>{}},v=>{xe({});var g=Ee;a&&(g.c=a),i&&(n.$$events=i),Wa=r,l=e(v,n)||{},Wa=!0,ke()},o);var h=new Set,f=v=>{for(var g=0;g<v.length;g++){var m=v[g];if(!h.has(m)){h.add(m);var b=Wf(m);for(const k of[t,document]){var y=fa.get(k);y===void 0&&(y=new Map,fa.set(k,y));var S=y.get(m);S===void 0?(k.addEventListener(m,to,{passive:b}),y.set(m,1)):y.set(m,S+1)}}}};return f(ir(Gd)),Zr.add(f),()=>{for(var v of h)for(const b of[t,document]){var g=fa.get(b),m=g.get(v);--m==0?(b.removeEventListener(v,to),g.delete(v),g.size===0&&fa.delete(b)):g.set(v,m)}Zr.delete(f),d!==s&&d.parentNode?.removeChild(d)}});return Jf.set(l,c),l}let Jf=new WeakMap;class la{anchor;#t=new Map;#o=new Map;#e=new Map;#r=new Set;#s=!0;constructor(t,s=!0){this.anchor=t,this.#s=s}#a=t=>{if(this.#t.has(t)){var s=this.#t.get(t),n=this.#o.get(s);if(n)Oo(n),this.#r.delete(s);else{var i=this.#e.get(s);i&&(this.#o.set(s,i.effect),this.#e.delete(s),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,r]of this.#t){if(this.#t.delete(a),a===t)break;const o=this.#e.get(r);o&&(Ge(o.effect),this.#e.delete(r))}for(const[a,r]of this.#o){if(a===s||this.#r.has(a))continue;const o=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Vd(r,c),c.append(Fs()),this.#e.set(a,{effect:r,fragment:c})}else Ge(r);this.#r.delete(a),this.#o.delete(a)};this.#s||!n?(this.#r.add(a),jn(r,o,!1)):o()}}};#n=t=>{this.#t.delete(t);const s=Array.from(this.#t.values());for(const[n,i]of this.#e)s.includes(n)||(Ge(i.effect),this.#e.delete(n))};ensure(t,s){var n=me,i=Od();if(s&&!this.#o.has(t)&&!this.#e.has(t))if(i){var a=document.createDocumentFragment(),r=Fs();a.append(r),this.#e.set(t,{effect:ds(()=>s(r)),fragment:a})}else this.#o.set(t,ds(()=>s(this.anchor)));if(this.#t.set(n,t),i){for(const[o,l]of this.#o)o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of this.#e)o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(this.#a),n.ondiscard(this.#n)}else this.#a(n)}}function B(e,t,s=!1){var n=new la(e),i=s?qs:0;function a(r,o){n.ensure(r,o)}Kn(()=>{var r=!1;t((o,l=0)=>{r=!0,a(l,o)}),r||a(!1,null)},i)}const Qf=Symbol("NaN");function Zf(e,t,s){var n=new la(e),i=!yi();Kn(()=>{var a=t();a!==a&&(a=Qf),i&&a!==null&&typeof a=="object"&&(a={}),n.ensure(a,s)})}function Re(e,t){return t}function tv(e,t,s){for(var n=[],i=t.length,a,r=t.length,o=0;o<i;o++){let h=t[o];jn(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=e.outrogroups;eo(ir(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=n.length===0&&s!==null;if(l){var c=s,d=c.parentNode;Pf(d),d.append(c),e.items.clear()}eo(t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function eo(e,t=!0){for(var s=0;s<e.length;s++)Ge(e[s],t)}var bl;function ie(e,t,s,n,i,a=null){var r=e,o=new Map,l=(t&dd)!==0;if(l){var c=e;r=c.appendChild(Fs())}var d=null,h=Po(()=>{var y=s();return yo(y)?y:y==null?[]:ir(y)}),f,v=!0;function g(){b.fallback=d,ev(b,f,r,t,n),d!==null&&(f.length===0?(d.f&Gs)===0?Oo(d):(d.f^=Gs,Di(d,null,r)):jn(d,()=>{d=null}))}var m=Kn(()=>{f=u(h);for(var y=f.length,S=new Set,k=me,w=Od(),$=0;$<y;$+=1){var A=f[$],z=n(A,$);if(ot){var C=n(A,$);z!==C&&Mh(String($),String(z),String(C))}var T=v?null:o.get(z);T?(T.v&&li(T.v,A),T.i&&li(T.i,$),w&&k.unskip_effect(T.e)):(T=sv(o,v?r:bl??=Fs(),A,z,$,i,t,s),v||(T.e.f|=Gs),o.set(z,T)),S.add(z)}if(y===0&&a&&!d&&(v?d=ds(()=>a(r)):(d=ds(()=>a(bl??=Fs())),d.f|=Gs)),y>S.size&&(ot?nv(f,n):cd("","","")),!v)if(w){for(const[E,L]of o)S.has(E)||k.skip_effect(L.e);k.oncommit(g),k.ondiscard(()=>{})}else g();u(h)}),b={effect:m,items:o,outrogroups:null,fallback:d};v=!1}function wi(e){for(;e!==null&&(e.f&Ds)===0;)e=e.next;return e}function ev(e,t,s,n,i){var a=(n&Fh)!==0,r=t.length,o=e.items,l=wi(e.effect.first),c,d=null,h,f=[],v=[],g,m,b,y;if(a)for(y=0;y<r;y+=1)g=t[y],m=i(g,y),b=o.get(m).e,(b.f&Gs)===0&&(b.nodes?.a?.measure(),(h??=new Set).add(b));for(y=0;y<r;y+=1){if(g=t[y],m=i(g,y),b=o.get(m).e,e.outrogroups!==null)for(const E of e.outrogroups)E.pending.delete(b),E.done.delete(b);if((b.f&Gs)!==0)if(b.f^=Gs,b===l)Di(b,null,s);else{var S=d?d.next:l;b===e.effect.last&&(e.effect.last=b.prev),b.prev&&(b.prev.next=b.next),b.next&&(b.next.prev=b.prev),rn(e,d,b),rn(e,b,S),Di(b,S,s),d=b,f=[],v=[],l=wi(d.next);continue}if((b.f&ms)!==0&&(Oo(b),a&&(b.nodes?.a?.unfix(),(h??=new Set).delete(b))),b!==l){if(c!==void 0&&c.has(b)){if(f.length<v.length){var k=v[0],w;d=k.prev;var $=f[0],A=f[f.length-1];for(w=0;w<f.length;w+=1)Di(f[w],k,s);for(w=0;w<v.length;w+=1)c.delete(v[w]);rn(e,$.prev,A.next),rn(e,d,$),rn(e,A,k),l=k,d=A,y-=1,f=[],v=[]}else c.delete(b),Di(b,l,s),rn(e,b.prev,b.next),rn(e,b,d===null?e.effect.first:d.next),rn(e,d,b),d=b;continue}for(f=[],v=[];l!==null&&l!==b;)(c??=new Set).add(l),v.push(l),l=wi(l.next);if(l===null)continue}(b.f&Gs)===0&&f.push(b),d=b,l=wi(b.next)}if(e.outrogroups!==null){for(const E of e.outrogroups)E.pending.size===0&&(eo(ir(E.done)),e.outrogroups?.delete(E));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var z=[];if(c!==void 0)for(b of c)(b.f&ms)===0&&z.push(b);for(;l!==null;)(l.f&ms)===0&&l!==e.fallback&&z.push(l),l=wi(l.next);var C=z.length;if(C>0){var T=(n&dd)!==0&&r===0?s:null;if(a){for(y=0;y<C;y+=1)z[y].nodes?.a?.measure();for(y=0;y<C;y+=1)z[y].nodes?.a?.fix()}tv(e,z,T)}}a&&zs(()=>{if(h!==void 0)for(b of h)b.nodes?.a?.apply()})}function sv(e,t,s,n,i,a,r,o){var l=(r&jh)!==0?(r&Bh)===0?Cd(s,!1,!1):bn(s):null,c=(r&Nh)!==0?bn(i):null;return ot&&l&&(l.trace=()=>{o()[c?.v??i]}),{v:l,i:c,e:ds(()=>(a(t,l??s,c??i,o),()=>{e.delete(n)}))}}function Di(e,t,s){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Gs)===0?t.nodes.start:s;n!==null;){var r=ia(n);if(a.before(n),n===i)return;n=r}}function rn(e,t,s){t===null?e.effect.first=s:t.next=s,s===null?e.effect.last=t:s.prev=t}function nv(e,t){const s=new Map,n=e.length;for(let i=0;i<n;i++){const a=t(e[i],i);if(s.has(a)){const r=String(s.get(a)),o=String(i);let l=String(a);l.startsWith("[object ")&&(l=null),cd(r,o,l)}s.set(a,i)}}function ht(e,t,s,n,i){var a=t.$$slots?.[s],r=!1;a===!0&&(a=t.children,r=!0),a===void 0||a(e,r?()=>n:n)}function xn(e,t,...s){var n=new la(e);Kn(()=>{const i=t()??null;ot&&i==null&&Th(),n.ensure(i,i&&(a=>i(a,...s)))},qs)}function cr(e,t,s){var n=new la(e);Kn(()=>{var i=t()??null;n.ensure(i,i&&(a=>s(a,i)))},qs)}const iv=()=>performance.now(),Xs={tick:e=>requestAnimationFrame(e),now:()=>iv(),tasks:new Set};function Zd(){const e=Xs.now();Xs.tasks.forEach(t=>{t.c(e)||(Xs.tasks.delete(t),t.f())}),Xs.tasks.size!==0&&Xs.tick(Zd)}function av(e){let t;return Xs.tasks.size===0&&Xs.tick(Zd),{promise:new Promise(s=>{Xs.tasks.add(t={c:e,f:s})}),abort(){Xs.tasks.delete(t)}}}function so(e,t){xi(()=>{e.dispatchEvent(new CustomEvent(t))})}function rv(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function yl(e){const t={},s=e.split(";");for(const n of s){const[i,a]=n.split(":");if(!i||a===void 0)break;const r=rv(i.trim());t[r]=a.trim()}return t}const ov=e=>e;function lv(e,t,s,n){var i=(e&Uh)!==0,a="in",r,o=t.inert,l=t.style.overflow,c,d;function h(){return xi(()=>r??=s()(t,n?.()??{},{direction:a}))}var f={is_global:i,in(){t.inert=o,c?.abort(),c=tu(t,h(),d,1,()=>{so(t,"introend"),c?.abort(),c=r=void 0,t.style.overflow=l})},out(b){{b?.(),r=void 0;return}},stop:()=>{c?.abort()}},v=te;if((v.nodes.t??=[]).push(f),Wa){var g=i;if(!g){for(var m=v.parent;m&&(m.f&qs)!==0;)for(;(m=m.parent)&&(m.f&nn)===0;);g=!m||(m.f&Yn)!==0}g&&ra(()=>{Es(()=>f.in())})}}function tu(e,t,s,n,i){if(ti(t)){var a,r=!1;return zs(()=>{if(!r){var m=t({direction:"in"});a=tu(e,m,s,n,i)}}),{abort:()=>{r=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(!t?.duration&&!t?.delay)return so(e,"introstart"),i(),{abort:us,deactivate:us,reset:us,t:()=>n};const{delay:o=0,css:l,tick:c,easing:d=ov}=t;var h=[];if(c&&c(0,1),l){var f=yl(l(0,1));h.push(f,f)}var v=()=>1-n,g=e.animate(h,{duration:o,fill:"forwards"});return g.onfinish=()=>{g.cancel(),so(e,"introstart");var m=1-n,b=n-m,y=t.duration*Math.abs(b),S=[];if(y>0){var k=!1;if(l)for(var w=Math.ceil(y/16.666666666666668),$=0;$<=w;$+=1){var A=m+b*d($/w),z=yl(l(A,1-A));S.push(z),k||=z.overflow==="hidden"}k&&(e.style.overflow="hidden"),v=()=>{var C=g.currentTime;return m+b*d(C/y)},c&&av(()=>{if(g.playState!=="running")return!1;var C=v();return c(C,1-C),!0})}g=e.animate(S,{duration:y,fill:"forwards"}),g.onfinish=()=>{v=()=>n,c?.(n,1-n),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=us)},deactivate:()=>{i=us},reset:()=>{},t:()=>v()}}function cv(e,t,s,n,i,a){var r=null,o=e,l=new la(o,!1);Kn(()=>{const c=t()||null;var d=Gh;if(c===null){l.ensure(null,null),ha(!0);return}return l.ensure(c,h=>{if(c){if(r=Rd(c,d),ui(r,r),n){var f=r.appendChild(Fs());n(r,f)}te.nodes.end=r,h.before(r)}}),ha(!0),()=>{c&&ha(!1)}},qs),aa(()=>{ha(!0)})}function dv(e,t){var s=void 0,n;jd(()=>{s!==(s=t())&&(n&&(Ge(n),n=null),s&&(n=ds(()=>{ra(()=>s(e))})))})}function eu(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(s=eu(e[t]))&&(n&&(n+=" "),n+=s)}else for(s in e)e[s]&&(n&&(n+=" "),n+=s);return n}function uv(){for(var e,t,s=0,n="",i=arguments.length;s<i;s++)(e=arguments[s])&&(t=eu(e))&&(n&&(n+=" "),n+=t);return n}function hv(e){return typeof e=="object"?uv(e):e??""}const xl=[...` 	
\r\f \v\uFEFF`];function fv(e,t,s){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),s){for(var i of Object.keys(s))if(s[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,r=0;(r=n.indexOf(i,r))>=0;){var o=r+a;(r===0||xl.includes(n[r-1]))&&(o===n.length||xl.includes(n[o]))?n=(r===0?"":n.substring(0,r))+n.substring(o+1):r=o}}return n===""?null:n}function kl(e,t=!1){var s=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+s)}return n}function $r(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function vv(e,t){if(t){var s="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,r=0,o=!1,l=[];n&&l.push(...Object.keys(n).map($r)),i&&l.push(...Object.keys(i).map($r));var c=0,d=-1;const m=e.length;for(var h=0;h<m;h++){var f=e[h];if(o?f==="/"&&e[h-1]==="*"&&(o=!1):a?a===f&&(a=!1):f==="/"&&e[h+1]==="*"?o=!0:f==='"'||f==="'"?a=f:f==="("?r++:f===")"&&r--,!o&&a===!1&&r===0){if(f===":"&&d===-1)d=h;else if(f===";"||h===m-1){if(d!==-1){var v=$r(e.substring(c,d).trim());if(!l.includes(v)){f!==";"&&h++;var g=e.substring(c,h).trim();s+=" "+g+";"}}c=h+1,d=-1}}}}return n&&(s+=kl(n)),i&&(s+=kl(i,!0)),s=s.trim(),s===""?null:s}return e==null?null:String(e)}function Yt(e,t,s,n,i,a){var r=e.__className;if(r!==s||r===void 0){var o=fv(s,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=s}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Sr(e,t={},s,n){for(var i in s){var a=s[i];t[i]!==a&&(s[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Be(e,t,s,n){var i=e.__style;if(i!==t){var a=vv(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(Sr(e,s?.[0],n[0]),Sr(e,s?.[1],n[1],"important")):Sr(e,s,n));return n}function hi(e,t,s=!1){if(e.multiple){if(t==null)return;if(!yo(t))return Qh();for(var n of e.options)n.selected=t.includes(Bi(n));return}for(n of e.options){var i=Bi(n);if(kf(i,t)){n.selected=!0;return}}(!s||t!==void 0)&&(e.selectedIndex=-1)}function dr(e){var t=new MutationObserver(()=>{hi(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),aa(()=>{t.disconnect()})}function fi(e,t,s=t){var n=new WeakSet,i=!0;To(e,"change",a=>{var r=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(r),Bi);else{var l=e.querySelector(r)??e.querySelector("option:not([disabled])");o=l&&Bi(l)}s(o),me!==null&&n.add(me)}),ra(()=>{var a=t();if(e===document.activeElement){var r=Va??me;if(n.has(r))return}if(hi(e,a,i),i&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Bi(o),s(a))}e.__value=a,i=!1}),dr(e)}function Bi(e){return"__value"in e?e.__value:e.value}const $i=Symbol("class"),Si=Symbol("style"),su=Symbol("is custom element"),nu=Symbol("is html"),pv=wo?"option":"OPTION",gv=wo?"select":"SELECT",mv=wo?"progress":"PROGRESS";function Ua(e,t){var s=ur(e);s.value===(s.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==mv)||(e.value=t??"")}function wl(e,t){var s=ur(e);s.checked!==(s.checked=t??void 0)&&(e.checked=t)}function _v(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Dt(e,t,s,n){var i=ur(e);i[t]!==(i[t]=s)&&(t==="loading"&&(e[kh]=s),s==null?e.removeAttribute(t):typeof s!="string"&&iu(e).includes(t)?e[t]=s:e.setAttribute(t,s))}function bv(e,t,s,n,i=!1,a=!1){var r=ur(e),o=r[su],l=!r[nu],c=t||{},d=e.nodeName===pv;for(var h in t)h in s||(s[h]=null);s.class?s.class=hv(s.class):s[$i]&&(s.class=null),s[Si]&&(s.style??=null);var f=iu(e);for(const w in s){let $=s[w];if(d&&w==="value"&&$==null){e.value=e.__value="",c[w]=$;continue}if(w==="class"){var v=e.namespaceURI==="http://www.w3.org/1999/xhtml";Yt(e,v,$,n,t?.[$i],s[$i]),c[w]=$,c[$i]=s[$i];continue}if(w==="style"){Be(e,$,t?.[Si],s[Si]),c[w]=$,c[Si]=s[Si];continue}var g=c[w];if(!($===g&&!($===void 0&&e.hasAttribute(w)))){c[w]=$;var m=w[0]+w[1];if(m!=="$$")if(m==="on"){const A={},z="$$"+w;let C=w.slice(2);var b=Bf(C);if(Nf(C)&&(C=C.slice(0,-7),A.capture=!0),!b&&g){if($!=null)continue;e.removeEventListener(C,c[z],A),c[z]=null}if(b)nt(C,e,$),De([C]);else if($!=null){let T=function(E){c[w].call(this,E)};var k=T;c[z]=Jd(C,e,T,A)}}else if(w==="style")Dt(e,w,$);else if(w==="autofocus")Af(e,!!$);else if(!o&&(w==="__value"||w==="value"&&$!=null))e.value=e.__value=$;else if(w==="selected"&&d)_v(e,$);else{var y=w;l||(y=Vf(y));var S=y==="defaultValue"||y==="defaultChecked";if($==null&&!o&&!S)if(r[w]=null,y==="value"||y==="checked"){let A=e;const z=t===void 0;if(y==="value"){let C=A.defaultValue;A.removeAttribute(y),A.defaultValue=C,A.value=A.__value=z?C:null}else{let C=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=C,A.checked=z?C:!1}}else e.removeAttribute(w);else S||f.includes(y)&&(o||typeof $!="string")?(e[y]=$,y in r&&(r[y]=He)):typeof $!="function"&&Dt(e,y,$)}}}return c}function $l(e,t,s=[],n=[],i=[],a,r=!1,o=!1){Md(i,s,n,l=>{var c=void 0,d={},h=e.nodeName===gv,f=!1;if(jd(()=>{var g=t(...l.map(u)),m=bv(e,c,g,a,r,o);f&&h&&"value"in g&&hi(e,g.value);for(let y of Object.getOwnPropertySymbols(d))g[y]||Ge(d[y]);for(let y of Object.getOwnPropertySymbols(g)){var b=g[y];y.description===Jh&&(!c||b!==c[y])&&(d[y]&&Ge(d[y]),d[y]=ds(()=>dv(e,()=>b))),m[y]=b}c=m}),h){var v=e;ra(()=>{hi(v,c.value,!0),dr(v)})}f=!0})}function ur(e){return e.__attributes??={[su]:e.nodeName.includes("-"),[nu]:e.namespaceURI===hd}}var Sl=new Map;function iu(e){var t=e.getAttribute("is")||e.nodeName,s=Sl.get(t);if(s)return s;Sl.set(t,s=[]);for(var n,i=e,a=Element.prototype;a!==i;){n=id(i);for(var r in n)n[r].set&&s.push(r);i=xo(i)}return s}function Te(e,t,s=t){var n=new WeakSet;To(e,"input",async i=>{ot&&e.type==="checkbox"&&cl();var a=i?e.defaultValue:e.value;if(a=Mr(e)?Pr(a):a,s(a),me!==null&&n.add(me),await jf(),a!==(a=t())){var r=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=a??"",o!==null){var c=e.value.length;r===o&&o===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=r,e.selectionEnd=Math.min(o,c))}}}),Es(t)==null&&e.value&&(s(Mr(e)?Pr(e.value):e.value),me!==null&&n.add(me)),or(()=>{ot&&e.type==="checkbox"&&cl();var i=t();if(e===document.activeElement){var a=Va??me;if(n.has(a))return}Mr(e)&&i===Pr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function au(e,t,s=t){To(e,"change",n=>{var i=n?e.defaultChecked:e.checked;s(i)}),Es(t)==null&&s(e.checked),or(()=>{var n=t();e.checked=!!n})}function Mr(e){var t=e.type;return t==="number"||t==="range"}function Pr(e){return e===""?null:+e}function Ml(e,t){return e===t||e?.[Ns]===t}function Ro(e={},t,s,n){return ra(()=>{var i,a;return or(()=>{i=a,a=[],Es(()=>{e!==s(...a)&&(t(e,...a),i&&Ml(s(...i),e)&&t(null,...i))})}),()=>{zs(()=>{a&&Ml(s(...a),e)&&t(null,...a)})}}),e}function yv(e=!1){const t=Ee,s=t.l.u;if(!s)return;let n=()=>Tn(t.s);if(e){let i=0,a={};const r=na(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>u(r)}s.b.length&&Tf(()=>{Pl(t,n),Fa(s.b)}),Vn(()=>{const i=Es(()=>s.m.map(yh));return()=>{for(const a of i)typeof a=="function"&&a()}}),s.a.length&&Vn(()=>{Pl(t,n),Fa(s.a)})}function Pl(e,t){if(e.l.s)for(const s of e.l.s)u(s);t()}function Lo(e,t,s){if(e==null)return t(void 0),s&&s(void 0),us;const n=Es(()=>e.subscribe(t,s));return n.unsubscribe?()=>n.unsubscribe():n}const Gn=[];function xv(e,t){return{subscribe:Vs(e,t).subscribe}}function Vs(e,t=us){let s=null;const n=new Set;function i(o){if(vd(e,o)&&(e=o,s)){const l=!Gn.length;for(const c of n)c[1](),Gn.push(c,e);if(l){for(let c=0;c<Gn.length;c+=2)Gn[c][0](Gn[c+1]);Gn.length=0}}}function a(o){i(o(e))}function r(o,l=us){const c=[o,l];return n.add(c),n.size===1&&(s=t(i,a)||us),o(e),()=>{n.delete(c),n.size===0&&s&&(s(),s=null)}}return{set:i,update:a,subscribe:r}}function kv(e,t,s){const n=!Array.isArray(e),i=n?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=t.length<2;return xv(s,(r,o)=>{let l=!1;const c=[];let d=0,h=us;const f=()=>{if(d)return;h();const g=t(n?c[0]:c,r,o);a?r(g):h=typeof g=="function"?g:us},v=i.map((g,m)=>Lo(g,b=>{c[m]=b,d&=~(1<<m),l&&f()},()=>{d|=1<<m}));return l=!0,f(),function(){Fa(v),h(),l=!1}})}function ru(e){let t;return Lo(e,s=>t=s)(),t}let va=!1,no=Symbol();function ou(e,t,s){const n=s[t]??={store:null,source:Cd(void 0),unsubscribe:us};if(ot&&(n.source.label=t),n.store!==e&&!(no in s))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=us;else{var i=!0;n.unsubscribe=Lo(e,a=>{i?n.source.v=a:M(n.source,a)}),i=!1}return e&&no in s?ru(e):u(n.source)}function lu(){const e={};function t(){aa(()=>{for(var s in e)e[s].unsubscribe();sn(e,no,{enumerable:!1,value:!0})})}return[e,t]}function wv(e){var t=va;try{return va=!1,[e(),va]}finally{va=t}}const $v={get(e,t){if(!e.exclude.includes(t))return u(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,s){if(!(t in e.special)){var n=te;try{_s(e.parent_effect),e.special[t]=_e({get[t](){return e.props[t]}},t,ud)}finally{_s(n)}}return e.special[t](s),vl(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),vl(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ut(e,t){return new Proxy({props:e,exclude:t,special:{},version:bn(0),parent_effect:te},$v)}const Sv={get(e,t){let s=e.props.length;for(;s--;){let n=e.props[s];if(ti(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,s){let n=e.props.length;for(;n--;){let i=e.props[n];ti(i)&&(i=i());const a=tn(i,t);if(a&&a.set)return a.set(s),!0}return!1},getOwnPropertyDescriptor(e,t){let s=e.props.length;for(;s--;){let n=e.props[s];if(ti(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=tn(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Ns||t===od)return!1;for(let s of e.props)if(ti(s)&&(s=s()),s!=null&&t in s)return!0;return!1},ownKeys(e){const t=[];for(let s of e.props)if(ti(s)&&(s=s()),!!s){for(const n in s)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(s))t.includes(n)||t.push(n)}return t}};function gt(...e){return new Proxy({props:e},Sv)}function _e(e,t,s,n){var i=!bi||(s&Vh)!==0,a=(s&Hh)!==0,r=(s&Wh)!==0,o=n,l=!0,c=()=>(l&&(l=!1,o=r?Es(n):n),o),d;if(a){var h=Ns in e||od in e;d=tn(e,t)?.set??(h&&t in e?k=>e[t]=k:void 0)}var f,v=!1;a?[f,v]=wv(()=>e[t]):f=e[t],f===void 0&&n!==void 0&&(f=c(),d&&(i&&Eh(t),d(f)));var g;if(i?g=()=>{var k=e[t];return k===void 0?c():(l=!0,k)}:g=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(s&ud)===0)return g;if(d){var m=e.$$legacy;return(function(k,w){return arguments.length>0?((!i||!w||m||v)&&d(w?g():k),k):g()})}var b=!1,y=((s&qh)!==0?na:Po)(()=>(b=!1,g()));ot&&(y.label=t),a&&u(y);var S=te;return(function(k,w){if(arguments.length>0){const $=w?u(y):i&&a?we(k):k;return M(y,$),b=!0,o!==void 0&&(o=$),k}return yn&&b||(S.f&en)!==0?y.v:u(y)})}if(ot){let e=function(t){if(!(t in globalThis)){let s;Object.defineProperty(globalThis,t,{configurable:!0,get:()=>{if(s!==void 0)return s;Dh(t)},set:n=>{s=n}})}};var Qw=e;e("$state"),e("$effect"),e("$derived"),e("$inspect"),e("$props"),e("$bindable")}function Ve(e){Ee===null&&wh("onMount"),bi&&Ee.l!==null?Mv(Ee).m.push(e):Vn(()=>{const t=Es(e);if(typeof t=="function")return t})}function Mv(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Pv="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Pv);ef();/**
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
 */const Av={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Cv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const Al=(...e)=>e.filter((t,s,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===s).join(" ").trim();var zv=lr("<svg><!><!></svg>");function mt(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]),n=ut(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);xe(t,!1);let i=_e(t,"name",8,void 0),a=_e(t,"color",8,"currentColor"),r=_e(t,"size",8,24),o=_e(t,"strokeWidth",8,2),l=_e(t,"absoluteStrokeWidth",8,!1),c=_e(t,"iconNode",24,()=>[]);yv();var d=zv();$l(d,(v,g,m)=>({...Av,...v,...n,width:r(),height:r(),stroke:a(),"stroke-width":g,class:m}),[()=>Cv(n)?void 0:{"aria-hidden":"true"},()=>(Tn(l()),Tn(o()),Tn(r()),Es(()=>l()?Number(o())*24/Number(r()):o())),()=>(Tn(Al),Tn(i()),Tn(s),Es(()=>Al("lucide-icon","lucide",i()?`lucide-${i()}`:"",s.class)))]);var h=p(d);ie(h,1,c,Re,(v,g)=>{var m=W(()=>Ur(u(g),2));let b=()=>u(m)[0],y=()=>u(m)[1];var S=it(),k=I(S);cv(k,b,!0,(w,$)=>{$l(w,()=>({...y()}))}),x(v,S)});var f=_(h);ht(f,t,"default",{}),x(e,d),ke()}function Tv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];mt(e,gt({name:"activity"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ev(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];mt(e,gt({name:"arrow-down-left"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Dv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];mt(e,gt({name:"arrow-left-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ya(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];mt(e,gt({name:"arrow-right-left"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ov(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];mt(e,gt({name:"arrow-up-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Rv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M4.929 4.929 19.07 19.071"}]];mt(e,gt({name:"ban"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Lv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];mt(e,gt({name:"bell"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Iv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];mt(e,gt({name:"calendar"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function jv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];mt(e,gt({name:"chart-column"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ar(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];mt(e,gt({name:"check"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Nv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];mt(e,gt({name:"chevron-down"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Fv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];mt(e,gt({name:"chevron-right"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function io(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];mt(e,gt({name:"circle-alert"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Bv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];mt(e,gt({name:"circle-check-big"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Ka(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];mt(e,gt({name:"clock"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function qv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];mt(e,gt({name:"code"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Vv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48"}],["path",{d:"M15 6h1v4"}],["path",{d:"m6.134 14.768.866-.5 2 3.464"}],["circle",{cx:"16",cy:"8",r:"6"}]];mt(e,gt({name:"coins"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Hv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];mt(e,gt({name:"copy"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Wv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];mt(e,gt({name:"database"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Cl(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];mt(e,gt({name:"dollar-sign"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function cu(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];mt(e,gt({name:"download"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Uv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];mt(e,gt({name:"ellipsis-vertical"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Yv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];mt(e,gt({name:"eye-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Kv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];mt(e,gt({name:"eye"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Xv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];mt(e,gt({name:"funnel"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Gv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];mt(e,gt({name:"grip-vertical"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Jv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];mt(e,gt({name:"hash"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Qv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];mt(e,gt({name:"info"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Zv(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];mt(e,gt({name:"key-round"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function zl(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];mt(e,gt({name:"key"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function tp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];mt(e,gt({name:"keyboard"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ep(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];mt(e,gt({name:"layers"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function sp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 5h.01"}],["path",{d:"M3 12h.01"}],["path",{d:"M3 19h.01"}],["path",{d:"M8 5h13"}],["path",{d:"M8 12h13"}],["path",{d:"M8 19h13"}]];mt(e,gt({name:"list"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Cr(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];mt(e,gt({name:"network"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function np(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];mt(e,gt({name:"palette"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ip(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];mt(e,gt({name:"pencil"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Tl(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];mt(e,gt({name:"plus"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ap(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];mt(e,gt({name:"power"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function du(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];mt(e,gt({name:"refresh-cw"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function rp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];mt(e,gt({name:"repeat"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Io(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];mt(e,gt({name:"rotate-cw"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function op(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];mt(e,gt({name:"save"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function lp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];mt(e,gt({name:"scan-search"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function cp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];mt(e,gt({name:"search"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function uu(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];mt(e,gt({name:"server"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function jo(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];mt(e,gt({name:"settings"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function dp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];mt(e,gt({name:"shield-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ao(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];mt(e,gt({name:"shield"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function up(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];mt(e,gt({name:"shuffle"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function El(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];mt(e,gt({name:"sliders-horizontal"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function hp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];mt(e,gt({name:"square"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function fp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];mt(e,gt({name:"target"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function hu(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];mt(e,gt({name:"terminal"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function ei(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];mt(e,gt({name:"trash-2"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function vp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];mt(e,gt({name:"trending-up"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function pp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];mt(e,gt({name:"triangle-alert"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function gp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];mt(e,gt({name:"upload"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function Xa(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];mt(e,gt({name:"users"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function mp(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];mt(e,gt({name:"wifi-off"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function No(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];mt(e,gt({name:"wifi"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}function fu(e,t){const s=ut(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];mt(e,gt({name:"zap"},()=>s,{get iconNode(){return n},children:(i,a)=>{var r=it(),o=I(r);ht(o,t,"default",{}),x(i,r)},$$slots:{default:!0}}))}const _p={"nav.accounts":"Comptes","nav.monitoring":"Monitoring","nav.settings":"Paramètres","nav.proxy":"Proxy","accounts.title":"Gestion des comptes","accounts.add":"Ajouter un compte","accounts.import":"Import auto","accounts.no_accounts":"Aucun compte configuré","accounts.active":"Actif","accounts.switch":"Activer","accounts.delete":"Supprimer","accounts.refresh":"Rafraîchir","quota.phase.cruise":"Croisière","quota.phase.watch":"Surveillance","quota.phase.alert":"Alerte","quota.phase.critical":"Critique","proxy.status.running":"En cours","proxy.status.stopped":"Arrêté","proxy.start":"Démarrer","proxy.stop":"Arrêter","proxy.restart":"Redémarrer","settings.title":"Paramètres","settings.theme":"Thème","settings.language":"Langue","settings.save":"Sauvegarder","toast.switch_success":"Switch vers {account}","toast.import_success":"{n} compte(s) importé(s)","toast.error":"Erreur : {msg}","monitoring.cost":"Coûts de session","monitoring.backoff":"Cooldowns actifs","monitoring.peers":"Topologie réseau","common.cancel":"Annuler","common.confirm":"Confirmer","common.close":"Fermer","common.loading":"Chargement...","common.error":"Erreur","common.success":"Succès"},bp={"nav.accounts":"Accounts","nav.monitoring":"Monitoring","nav.settings":"Settings","nav.proxy":"Proxy","accounts.title":"Account Management","accounts.add":"Add Account","accounts.import":"Auto Import","accounts.no_accounts":"No accounts configured","accounts.active":"Active","accounts.switch":"Activate","accounts.delete":"Delete","accounts.refresh":"Refresh","quota.phase.cruise":"Cruise","quota.phase.watch":"Watch","quota.phase.alert":"Alert","quota.phase.critical":"Critical","proxy.status.running":"Running","proxy.status.stopped":"Stopped","proxy.start":"Start","proxy.stop":"Stop","proxy.restart":"Restart","settings.title":"Settings","settings.theme":"Theme","settings.language":"Language","settings.save":"Save","toast.switch_success":"Switched to {account}","toast.import_success":"{n} account(s) imported","toast.error":"Error: {msg}","monitoring.cost":"Session costs","monitoring.backoff":"Active cooldowns","monitoring.peers":"Network topology","common.cancel":"Cancel","common.confirm":"Confirm","common.close":"Close","common.loading":"Loading...","common.error":"Error","common.success":"Success"},Dl={fr:_p,en:bp},yp=(typeof localStorage<"u"?localStorage.getItem("locale"):null)??"fr",hr=Vs(yp);function xp(e){hr.set(e),localStorage.setItem("locale",e)}function La(e,t){return(Dl[ru(hr)]??Dl.fr)[e]??e}var kp=P('<span class="nav-indicator svelte-181dlmc"></span>'),wp=P('<button><span class="nav-icon svelte-181dlmc"><!></span> <span class="nav-label svelte-181dlmc"> </span> <!></button>'),$p=P('<aside class="sidebar svelte-181dlmc"><div class="sidebar-logo svelte-181dlmc"><div class="logo-icon svelte-181dlmc">AI</div> <div class="logo-text svelte-181dlmc"><span class="logo-title svelte-181dlmc">AI Manager</span> <span class="logo-version svelte-181dlmc">v3</span></div></div> <nav class="sidebar-nav svelte-181dlmc"></nav> <div class="sidebar-footer svelte-181dlmc"><span class="footer-text svelte-181dlmc">Multi-Account Manager</span></div></aside>');function Sp(e,t){xe(t,!0);const s=()=>ou(hr,"$i18nStore",n),[n,i]=lu();let a=_e(t,"currentScreen",15);const r=[{id:"accounts",labelKey:"nav.accounts",icon:Xa},{id:"proxy",labelKey:"nav.proxy",icon:Dv},{id:"monitoring",labelKey:"nav.monitoring",icon:Tv},{id:"settings",labelKey:"nav.settings",icon:jo}];var o=$p(),l=_(p(o),2);ie(l,21,()=>r,Re,(c,d)=>{var h=wp();let f;var v=p(h),g=p(v);cr(g,()=>u(d).icon,(k,w)=>{w(k,{size:18})});var m=_(v,2),b=p(m),y=_(m,2);{var S=k=>{var w=kp();x(k,w)};B(y,k=>{a()===u(d).id&&k(S)})}R(k=>{f=Yt(h,1,"nav-item svelte-181dlmc",null,f,{active:a()===u(d).id}),D(b,k)},[()=>(s(),La(u(d).labelKey))]),nt("click",h,()=>a(u(d).id)),x(c,h)}),x(e,o),ke(),i()}De(["click"]);const fr="/ai-manager/admin/api",Mp="/ai-manager/admin/ws";async function rs(e,t){let s=`${fr}/${e}`;if(t){const i=new URLSearchParams(Object.fromEntries(Object.entries(t).filter(([,a])=>a!==void 0))).toString();i&&(s+=`?${i}`)}const n=await fetch(s);if(!n.ok)throw new Error(`GET ${e} failed: ${n.status} ${n.statusText}`);return n.json()}async function ze(e,t){const s=await fetch(`${fr}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:t!==void 0?JSON.stringify(t):void 0});if(!s.ok)throw new Error(`POST ${e} failed: ${s.status} ${s.statusText}`);return s.json()}async function Fo(e,t){const s=await fetch(`${fr}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:t!==void 0?JSON.stringify(t):void 0});if(!s.ok)throw new Error(`PUT ${e} failed: ${s.status} ${s.statusText}`);return s.json()}async function ki(e){const t=await fetch(`${fr}/${e}`,{method:"DELETE"});if(!t.ok)throw new Error(`DELETE ${e} failed: ${t.status} ${t.statusText}`);return t.json()}let on=null;const ln=new Map;function vu(){if(on&&on.readyState===WebSocket.OPEN)return on;const t=`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}${Mp}`;return on=new WebSocket(t),on.addEventListener("message",s=>{try{const n=JSON.parse(s.data),i=ln.get(n.event);i&&i.forEach(a=>a(n.payload))}catch{}}),on.addEventListener("close",()=>{on=null,ln.size>0&&setTimeout(()=>vu(),2e3)}),on}function Bo(e,t){return ln.has(e)||ln.set(e,new Set),ln.get(e).add(t),vu(),()=>{ln.get(e)?.delete(t),ln.get(e)?.size===0&&ln.delete(e)}}const zr=()=>rs("accounts"),Pp=e=>ze(`accounts/${encodeURIComponent(e)}/switch`),Ap=e=>ze(`accounts/${encodeURIComponent(e)}/refresh`),Cp=(e,t)=>ze("accounts",t),zp=(e,t)=>Fo(`accounts/${encodeURIComponent(e)}`,t),Tp=e=>ki(`accounts/${encodeURIComponent(e)}`),Ep=()=>rs("config"),Dp=e=>Fo("config",e),pa=()=>rs("proxy/status").then(e=>{const t=s=>{const n=e.instances.find(i=>i.kind===s);return{running:n?.running??!1,port:n?.port??0,pid:n?.pid??void 0,uptimeSecs:n?.uptimeSecs??0,requestsTotal:n?.requestsTotal??0,requestsActive:n?.requestsActive??0,backend:n?.backend}};return{router:t("router"),impersonator:t("impersonator")}}),Op=e=>ze("proxy/start",{kind:e}),Rp=e=>ze("proxy/stop",{kind:e}),Lp=e=>ze("proxy/restart",{kind:e}),ga=()=>rs("proxy-instances"),Ip=e=>ze("proxy-instances",e),jp=(e,t)=>Fo(`proxy-instances/${encodeURIComponent(e)}`,t),Np=e=>ki(`proxy-instances/${encodeURIComponent(e)}`),Fp=e=>ze(`proxy-instances/${encodeURIComponent(e)}/start`),Bp=e=>ze(`proxy-instances/${encodeURIComponent(e)}/stop`),qp=e=>ze(`proxy-instances/${encodeURIComponent(e)}/restart`),ma=()=>ze("proxy-instances/probe"),Vp=()=>rs("proxy-binaries").then(e=>e.binaries),Hp=e=>ze("setup/claude-code",{port:e}),Wp=()=>ki("setup/claude-code"),Up=e=>ze("setup/vscode",{port:e}),Yp=()=>ki("setup/vscode"),_a=()=>rs("systemd/status").then(e=>e.status),Kp=e=>ze("systemd/install",{daemonPath:e}).then(t=>t.message),Xp=()=>ze("systemd/uninstall").then(e=>e.message),Gp=()=>rs("sync/status"),Jp=()=>ze("sync/key/generate").then(e=>e.key),Qp=e=>ze("sync/key/set",{key:e}),Ia=()=>rs("peers"),Zp=(e,t,s)=>ze("peers",{host:e,port:t,id:s}),tg=e=>ki(`peers/${encodeURIComponent(e)}`),eg=(e,t)=>ze("peers/test",{host:e,port:t}).then(s=>s.reachable),sg=()=>rs("ssh/hostname").then(e=>e.hostname),ng=(e,t,s,n)=>ze("ssh-hosts",{host:e,port:t,username:s,identityPath:n}),ig=e=>ki(`ssh-hosts/${encodeURIComponent(e)}`),ag=(e,t,s,n)=>ze("ssh-hosts/test",{host:e,port:t,username:s,identityPath:n}).then(i=>i.reachable),rg=(e,t)=>rs("monitoring/quota-history",{key:e,period:t}),og=()=>rs("monitoring/switch-history"),lg=()=>rs("monitoring/profiles"),pu=()=>rs("monitoring/sessions"),ro=e=>rs("monitoring/logs",e?{filter:e}:void 0),cg=()=>ze("credentials/scan"),dg=e=>ze("credentials/import",{credentials:e}),ug=()=>rs("credentials/binary"),hg=e=>ze("credentials/capture",{timeoutSecs:e}),fg=e=>Promise.resolve(Bo("quota_update",t=>e(t))),vg=e=>Promise.resolve(Bo("toast",t=>e(t))),pg=e=>Promise.resolve(Bo("account_switch",t=>e(t)));function gg(){const{subscribe:e,set:t,update:s}=Vs(null);return{subscribe:e,load:async()=>{const n=await Ep();t(n)},save:async n=>{await Dp(n),s(i=>i?{...i,...n}:null)}}}const Pe=gg(),Ol={running:!1,port:0,uptimeSecs:0,requestsTotal:0,requestsActive:0};function mg(){const{subscribe:e,set:t}=Vs({router:{...Ol,port:18080},impersonator:{...Ol,port:18081}});return{subscribe:e,load:async()=>{const s=await pa();t(s)},start:async s=>{await Op(s);const n=await pa();t(n)},stop:async s=>{await Rp(s);const n=await pa();t(n)},restart:async s=>{await Lp(s);const n=await pa();t(n)}}}function _g(){const{subscribe:e,set:t}=Vs([]);return{subscribe:e,load:async()=>{const s=await ma();t(s)},probe:async()=>{const s=await ma();t(s)},add:async s=>{await Ip(s);const n=await ga();t(n)},update:async(s,n)=>{await jp(s,n);const i=await ma();t(i)},remove:async s=>{await Np(s);const n=await ga();t(n)},start:async s=>{await Fp(s);const n=await ga();t(n)},stop:async s=>{await Bp(s);const n=await ga();t(n)},restart:async s=>{await qp(s),await new Promise(i=>setTimeout(i,500));const n=await ma();t(n)}}}const bg=mg(),vs=_g();function yg(){const e=Vs([]),t=Vs(!1);return{peers:{subscribe:e.subscribe},enabled:{subscribe:t.subscribe},load:async()=>{const s=await Gp();t.set(s.enabled);const n=await Ia();e.set(n)},addPeer:async(s,n)=>{await Zp(s,n);const i=await Ia();e.set(i)},removePeer:async s=>{await tg(s);const n=await Ia();e.set(n)},generateKey:async()=>await Jp(),setKey:async s=>{await Qp(s)},testPeer:async(s,n)=>await eg(s,n)}}const Ss=yg();var xg=P('<span role="tooltip"> </span>'),kg=P('<span class="tooltip-wrapper svelte-c43bsi"><!> <!></span>');function Jn(e,t){let s=_e(t,"position",3,"top"),n=j(!1);var i=kg(),a=p(i);xn(a,()=>t.children);var r=_(a,2);{var o=l=>{var c=xg(),d=p(c);R(()=>{Yt(c,1,`tooltip tooltip-${s()??""}`,"svelte-c43bsi"),D(d,t.text)}),x(l,c)};B(r,l=>{u(n)&&l(o)})}js("mouseenter",i,()=>M(n,!0)),js("mouseleave",i,()=>M(n,!1)),js("focus",i,()=>M(n,!0)),js("blur",i,()=>M(n,!1)),x(e,i)}var wg=P("<button><!> <span>Refresh</span> <span></span></button>"),$g=P("<button><!> <span>Switch</span> <span></span></button>"),Sg=P("<button><!> <span>Rotation</span> <span></span></button>"),Mg=P("<button><!> <span>Schedule</span> <span></span></button>"),Pg=P('<button class="status-item svelte-161y12f"><!> <span> </span> <span class="status-sep svelte-161y12f">/</span> <span> </span> <span></span></button>'),Ag=P("<button><!> <span>P2P</span> <span></span></button>"),Cg=P('<footer class="statusbar svelte-161y12f"><div class="statusbar-items svelte-161y12f"><!> <!> <!> <!> <!> <!></div></footer>');function zg(e,t){xe(t,!0);let s=j(null),n=j(we({router:{running:!1,port:18080,uptimeSecs:0,requestsTotal:0,requestsActive:0},impersonator:{running:!1,port:18081,uptimeSecs:0,requestsTotal:0,requestsActive:0}})),i=j(!1);Ve(()=>{const w=Pe.subscribe(z=>{M(s,z,!0)}),$=bg.subscribe(z=>{M(n,z,!0)}),A=Ss.enabled.subscribe(z=>{M(i,z,!0)});return()=>{w(),$(),A()}});let a=W(()=>u(s)?.adaptiveRefresh??!1),r=W(()=>(u(s)?.proxy?.autoSwitchThreshold5h??0)>0),o=W(()=>u(s)?.proxy?.rotationEnabled??!1),l=W(()=>u(s)?.schedule?.enabled??!1),c=W(()=>u(n).router.running),d=W(()=>u(n).impersonator.running);function h(w){t.onnavigate?.(w)}var f=Cg(),v=p(f),g=p(v);Jn(g,{text:"Auto-refresh: Rafraichissement automatique des quotas",children:(w,$)=>{var A=wg();let z;var C=p(A);bs(C,{size:12});var T=_(C,4);let E;R(()=>{z=Yt(A,1,"status-item svelte-161y12f",null,z,{active:u(a)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(a)})}),nt("click",A,()=>h("settings")),x(w,A)},$$slots:{default:!0}});var m=_(g,2);Jn(m,{text:"Auto-switch: Changement automatique de compte",children:(w,$)=>{var A=$g();let z;var C=p(A);up(C,{size:12});var T=_(C,4);let E;R(()=>{z=Yt(A,1,"status-item svelte-161y12f",null,z,{active:u(r)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(r)})}),nt("click",A,()=>h("proxy")),x(w,A)},$$slots:{default:!0}});var b=_(m,2);Jn(b,{text:"Rotation automatique des comptes",children:(w,$)=>{var A=Sg();let z;var C=p(A);Io(C,{size:12});var T=_(C,4);let E;R(()=>{z=Yt(A,1,"status-item svelte-161y12f",null,z,{active:u(o)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(o)})}),nt("click",A,()=>h("proxy")),x(w,A)},$$slots:{default:!0}});var y=_(b,2);Jn(y,{text:"Planning horaire d'activite",children:(w,$)=>{var A=Mg();let z;var C=p(A);Ka(C,{size:12});var T=_(C,4);let E;R(()=>{z=Yt(A,1,"status-item svelte-161y12f",null,z,{active:u(l)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(l)})}),nt("click",A,()=>h("settings")),x(w,A)},$$slots:{default:!0}});var S=_(y,2);Jn(S,{text:"Proxy Router / Impersonator",children:(w,$)=>{var A=Pg(),z=p(A);du(z,{size:12});var C=_(z,2),T=p(C),E=_(C,4),L=p(E),N=_(E,2);let Z;R(()=>{D(T,`R:${u(c)?"ON":"OFF"}`),D(L,`I:${u(d)?"ON":"OFF"}`),Z=Yt(N,1,"status-dot svelte-161y12f",null,Z,{on:u(c)||u(d)})}),nt("click",A,()=>h("proxy")),x(w,A)},$$slots:{default:!0}});var k=_(S,2);Jn(k,{text:"Synchronisation P2P entre instances",children:(w,$)=>{var A=Ag();let z;var C=p(A);No(C,{size:12});var T=_(C,4);let E;R(()=>{z=Yt(A,1,"status-item svelte-161y12f",null,z,{active:u(i)}),E=Yt(T,1,"status-dot svelte-161y12f",null,E,{on:u(i)})}),nt("click",A,()=>h("settings")),x(w,A)},$$slots:{default:!0}}),x(e,f),ke()}De(["click"]);const{subscribe:Tg,update:gu}=Vs([]);function Mi(e,t,s,n=4e3){const i=crypto.randomUUID(),a={id:i,type:e,title:t,message:s,duration:n};return gu(r=>[...r,a]),n>0&&setTimeout(()=>mu(i),n),i}function mu(e){gu(t=>t.filter(s=>s.id!==e))}const Eg={subscribe:Tg},On={info:(e,t)=>Mi("info",e,t),success:(e,t)=>Mi("success",e,t),warning:(e,t)=>Mi("warning",e,t),error:(e,t)=>Mi("error",e,t,8e3),switch:(e,t)=>Mi("switch",e,t,5e3),remove:mu};var Dg=P('<span class="toast-message svelte-1ig2a9j"> </span>'),Og=P('<div><span class="toast-icon svelte-1ig2a9j"><!></span> <div class="toast-content svelte-1ig2a9j"><span class="toast-title svelte-1ig2a9j"> </span> <!></div> <button class="toast-close svelte-1ig2a9j" aria-label="Fermer"><!></button></div>'),Rg=P('<div class="toast-container svelte-1ig2a9j"></div>');function Lg(e,t){xe(t,!0);let s=j(we([]));Ve(()=>Eg.subscribe(c=>{M(s,c,!0)}));const n={info:Qv,success:Bv,warning:pp,error:io,switch:rp},i={info:"var(--accent)",success:"var(--phase-cruise)",warning:"var(--status-warning)",error:"var(--status-error)",switch:"var(--provider-xai)"};var a=it(),r=I(a);{var o=l=>{var c=Rg();ie(c,21,()=>u(s),d=>d.id,(d,h)=>{const f=W(()=>n[u(h).type]);var v=Og(),g=p(v),m=p(g);cr(m,()=>u(f),(z,C)=>{C(z,{size:16})});var b=_(g,2),y=p(b),S=p(y),k=_(y,2);{var w=z=>{var C=Dg(),T=p(C);R(()=>D(T,u(h).message)),x(z,C)};B(k,z=>{u(h).message&&z(w)})}var $=_(b,2),A=p($);fu(A,{size:14}),R(()=>{Yt(v,1,`toast-item toast-${u(h).type??""}`,"svelte-1ig2a9j"),Be(v,`--toast-color: ${i[u(h).type]??""}`),D(S,u(h).title)}),nt("click",$,()=>On.remove(u(h).id)),x(d,v)}),x(l,c)};B(r,l=>{u(s).length>0&&l(o)})}x(e,a),ke()}De(["click"]);function Ig(){const{subscribe:e,set:t,update:s}=Vs([]);return{subscribe:e,load:async()=>{const n=await zr();t(n)},switch:async n=>{await Pp(n),s(i=>i.map(a=>({...a,isActive:a.key===n})))},updateQuota:(n,i)=>{s(a=>a.map(r=>r.key===n?{...r,quota:i}:r))},refresh:async n=>{await Ap(n);const i=await zr();t(i)},delete:async n=>{await Tp(n),s(i=>i.filter(a=>a.key!==n))},add:async(n,i)=>{await Cp(n,i);const a=await zr();t(a)},updateAccount:async(n,i)=>{await zp(n,i),s(a=>a.map(r=>r.key!==n?r:{...r,data:{...r.data,...i.priority!=null&&{priority:i.priority},...i.autoSwitchDisabled!=null&&{autoSwitchDisabled:i.autoSwitchDisabled},...i.displayName!=null&&{displayName:i.displayName}}}))}}}const We=Ig();kv(We,e=>e.find(t=>t.isActive)??null);var jg=P('<div class="quota-ring svelte-12gf5ir"><svg class="ring-svg svelte-12gf5ir"><circle fill="none" stroke="var(--border)"></circle><circle fill="none" stroke-linecap="round" class="ring-progress svelte-12gf5ir"></circle></svg> <span class="ring-label svelte-12gf5ir"> </span></div>');function Ng(e,t){let s=_e(t,"percent",3,0),n=_e(t,"phase",3,"Cruise"),i=_e(t,"size",3,56),a=_e(t,"strokeWidth",3,4);const r={Cruise:"var(--phase-cruise)",Watch:"var(--phase-watch)",Alert:"var(--phase-alert)",Critical:"var(--phase-critical)"};let o=W(()=>(i()-a())/2),l=W(()=>2*Math.PI*u(o)),c=W(()=>u(l)-Math.min(s(),1)*u(l)),d=W(()=>r[n()??"Cruise"]),h=W(()=>Math.round(Math.min(s(),1)*100));var f=jg(),v=p(f),g=p(v),m=_(g),b=_(v,2),y=p(b);R(()=>{Be(f,`width: ${i()??""}px; height: ${i()??""}px`),Dt(v,"viewBox",`0 0 ${i()??""} ${i()??""}`),Dt(g,"cx",i()/2),Dt(g,"cy",i()/2),Dt(g,"r",u(o)),Dt(g,"stroke-width",a()),Dt(m,"cx",i()/2),Dt(m,"cy",i()/2),Dt(m,"r",u(o)),Dt(m,"stroke",u(d)),Dt(m,"stroke-width",a()),Dt(m,"stroke-dasharray",u(l)),Dt(m,"stroke-dashoffset",u(c)),Dt(m,"transform",`rotate(-90 ${i()/2} ${i()/2})`),Be(b,`color: ${u(d)??""}; font-size: ${i()*.22}px`),D(y,`${u(h)??""}%`)}),x(e,f)}var Fg=P("<span><!></span>");function Ue(e,t){let s=_e(t,"color",3,"var(--accent)"),n=_e(t,"small",3,!1);var i=Fg();let a;var r=p(i);xn(r,()=>t.children),R(()=>{a=Yt(i,1,"badge svelte-jpiuiy",null,a,{small:n()}),Be(i,`--badge-color: ${s()??""}`)}),x(e,i)}var Bg=P("<button><!></button>"),qg=P("<div><!></div>");function he(e,t){let s=_e(t,"hoverable",3,!0),n=_e(t,"active",3,!1),i=_e(t,"padding",3,"16px");var a=it(),r=I(a);{var o=c=>{var d=Bg();let h;var f=p(d);xn(f,()=>t.children),R(()=>{h=Yt(d,1,"card svelte-11fn1sl",null,h,{hoverable:s(),active:n()}),Be(d,`padding: ${i()??""}`)}),nt("click",d,function(...v){t.onclick?.apply(this,v)}),x(c,d)},l=c=>{var d=qg();let h;var f=p(d);xn(f,()=>t.children),R(()=>{h=Yt(d,1,"card svelte-11fn1sl",null,h,{hoverable:s(),active:n()}),Be(d,`padding: ${i()??""}`)}),x(c,d)};B(r,c=>{t.onclick?c(o):c(l,!1)})}x(e,a)}De(["click"]);var Vg=P("<span></span>"),Hg=P('<span class="card-email svelte-79mfb6"> </span>'),Wg=P('<span class="pulse-badge svelte-79mfb6"></span>'),Ug=P("<!> ",1),Yg=P('<span class="last-updated svelte-79mfb6"> </span>'),Kg=P('<div class="quota-bar-row svelte-79mfb6"><span class="quota-bar-label svelte-79mfb6">5h</span> <div class="quota-bar-track svelte-79mfb6"><div class="quota-bar-fill svelte-79mfb6"></div></div> <span class="quota-bar-value svelte-79mfb6"> </span> <span class="quota-bar-extra svelte-79mfb6"><!> <!> <!></span></div> <div class="quota-bar-row svelte-79mfb6"><span class="quota-bar-label svelte-79mfb6">7j</span> <div class="quota-bar-track svelte-79mfb6"><div class="quota-bar-fill svelte-79mfb6"></div></div> <span class="quota-bar-value svelte-79mfb6"> </span> <span class="quota-bar-extra svelte-79mfb6"> <!></span></div> <!>',1),Xg=P('<button class="action-btn switch-btn svelte-79mfb6" aria-label="Activer ce compte" title="Activer ce compte"><!></button>'),Gg=P(`<div class="card-layout svelte-79mfb6"><div class="card-left svelte-79mfb6"><!></div> <div class="card-center svelte-79mfb6"><div class="card-header svelte-79mfb6"><div class="card-name-row svelte-79mfb6"><!> <span class="card-name svelte-79mfb6"> </span></div> <!></div> <div class="card-badges svelte-79mfb6"><!> <!> <!> <!> <!></div> <!></div> <div class="card-actions svelte-79mfb6"><!> <button class="action-btn svelte-79mfb6" aria-label="Rafraichir"><!></button> <button class="action-btn svelte-79mfb6" aria-label="Plus d'options"><!></button></div></div>`),Jg=P("<!> <span>Inclure dans l'auto-switch</span>",1),Qg=P("<!> <span>Exclure de l'auto-switch</span>",1),Zg=P('<button class="context-item svelte-79mfb6"><!> <span> </span></button>'),tm=P('<div class="context-priority svelte-79mfb6"><!> <input class="priority-input svelte-79mfb6" type="number" min="1" max="99"/> <button class="priority-ok svelte-79mfb6">OK</button></div>'),em=P('<button class="context-item svelte-79mfb6"><!> <span>Rafraichir le token</span></button> <button class="context-item svelte-79mfb6"><!> <span>Setup Token</span></button>',1),sm=P('<button class="context-item danger svelte-79mfb6"><!> <span>Revoquer</span></button>'),nm=P('<div class="context-menu svelte-79mfb6"><button class="context-item svelte-79mfb6"><!> <span> </span></button> <div class="context-divider svelte-79mfb6"></div> <button class="context-item svelte-79mfb6"><!></button> <!> <div class="context-divider svelte-79mfb6"></div> <button class="context-item svelte-79mfb6"><!> <span>Rafraichir le quota</span></button> <!> <div class="context-divider svelte-79mfb6"></div> <!> <button class="context-item danger svelte-79mfb6"><!> <span>Supprimer</span></button></div>'),im=P('<div class="account-card-wrapper svelte-79mfb6"><!></div> <!>',1);function am(e,t){xe(t,!0);let s=j(!1),n=j(we({x:0,y:0})),i=j(!1),a=j(50);const r={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"},o={Cruise:"var(--phase-cruise)",Watch:"var(--phase-watch)",Alert:"var(--phase-alert)",Critical:"var(--phase-critical)"};let l=W(()=>t.account.quota&&t.account.quota.limit5h>0?t.account.quota.tokens5h/t.account.quota.limit5h:0),c=W(()=>t.account.quota&&t.account.quota.limit7d>0?t.account.quota.tokens7d/t.account.quota.limit7d:0),d=W(()=>r[t.account.data.provider??"anthropic"]??"var(--fg-dim)"),h=W(()=>o[t.account.quota?.phase??"Cruise"]??"var(--phase-cruise)"),f=W(()=>t.account.quota?.phase==="Alert"||t.account.quota?.phase==="Critical"),v=W(()=>t.account.data.displayName||t.account.data.name||t.account.key),g=W(()=>t.account.data.autoSwitchDisabled===!0),m=W(()=>t.account.data.accountType==="api");function b(F){return F>=1e6?(F/1e6).toFixed(1)+"M":F>=1e3?(F/1e3).toFixed(0)+"k":String(F)}function y(F){if(F==null||F<=0)return"";if(F<60)return`~${Math.round(F)}m`;const O=Math.floor(F/60),H=Math.round(F%60);return`~${O}h${H>0?H+"m":""}`}function S(F){if(!F)return"";const O=new Date(F).getTime(),H=Date.now(),tt=O-H;if(tt<=0)return"reset";const kt=Math.floor(tt/6e4);if(kt<60)return`${kt}m`;const q=Math.floor(kt/60),et=kt%60;return`${q}h${et>0?et.toString().padStart(2,"0")+"m":""}`}let k=W(()=>y(t.account.quota?.timeToThreshold)),w=W(()=>t.account.quota?.emaVelocity&&t.account.quota.emaVelocity>.001?`${t.account.quota.emaVelocity.toFixed(2)}%/min`:""),$=W(()=>S(t.account.quota?.resetsAt5h)),A=W(()=>S(t.account.quota?.resetsAt7d));function z(F){F.preventDefault();const O=220,H=320,tt=Math.min(F.clientX,window.innerWidth-O-8),kt=Math.min(F.clientY,window.innerHeight-H-8);M(n,{x:Math.max(4,tt),y:Math.max(4,kt)},!0),M(s,!0),M(i,!1)}function C(){M(s,!1),M(i,!1)}async function T(){C(),await We.switch(t.account.key)}async function E(){C(),await We.refresh(t.account.key)}async function L(){C(),await We.delete(t.account.key)}async function N(){C(),await We.updateAccount(t.account.key,{autoSwitchDisabled:!u(g)})}function Z(){M(a,t.account.data.priority??50,!0),M(i,!0)}async function K(){await We.updateAccount(t.account.key,{priority:u(a)}),C()}async function V(){C(),await We.refresh(t.account.key)}var X=im();js("click",Ha,C);var J=I(X),xt=p(J);he(xt,{get active(){return t.account.isActive},children:(F,O)=>{var H=Gg(),tt=p(H),kt=p(tt);{let st=W(()=>t.account.quota?.phase);Ng(kt,{get percent(){return u(l)},get phase(){return u(st)},size:44,strokeWidth:3.5})}var q=_(tt,2),et=p(q),Mt=p(et),ee=p(Mt);{var de=st=>{var lt=Vg();let wt;R(()=>wt=Yt(lt,1,"active-dot svelte-79mfb6",null,wt,{pulse:u(f)})),x(st,lt)};B(ee,st=>{t.account.isActive&&st(de)})}var U=_(ee,2),jt=p(U),Vt=_(Mt,2);{var Zt=st=>{var lt=Hg(),wt=p(lt);R(()=>D(wt,t.account.data.email)),x(st,lt)};B(Vt,st=>{t.account.data.email&&st(Zt)})}var zt=_(et,2),Nt=p(zt);Ue(Nt,{get color(){return u(d)},children:(st,lt)=>{var wt=Ht();R(()=>D(wt,t.account.data.provider??"anthropic")),x(st,wt)},$$slots:{default:!0}});var fe=_(Nt,2);{var ue=st=>{Ue(st,{get color(){return u(h)},children:(lt,wt)=>{var Qt=Ug(),Y=I(Qt);{var Rt=bt=>{var Lt=Wg();x(bt,Lt)};B(Y,bt=>{u(f)&&bt(Rt)})}var dt=_(Y);R(()=>D(dt,` ${t.account.quota.phase??""}`)),x(lt,Qt)},$$slots:{default:!0}})};B(fe,st=>{t.account.quota?.phase&&st(ue)})}var ft=_(fe,2);{var At=st=>{Ue(st,{color:"var(--fg-dim)",small:!0,children:(lt,wt)=>{var Qt=Ht();R(()=>D(Qt,`P${t.account.data.priority??""}`)),x(lt,Qt)},$$slots:{default:!0}})};B(ft,st=>{t.account.data.priority!=null&&st(At)})}var $t=_(ft,2);{var G=st=>{Ue(st,{color:"var(--accent)",small:!0,children:(lt,wt)=>{var Qt=Ht();R(()=>D(Qt,t.account.data.planType)),x(lt,Qt)},$$slots:{default:!0}})};B($t,st=>{t.account.data.planType&&st(G)})}var vt=_($t,2);{var _t=st=>{Ue(st,{color:"var(--status-error)",small:!0,children:(lt,wt)=>{var Qt=Ht("exclu");x(lt,Qt)},$$slots:{default:!0}})};B(vt,st=>{u(g)&&st(_t)})}var St=_(zt,2);{var Ft=st=>{var lt=Kg(),wt=I(lt),Qt=_(p(wt),2),Y=p(Qt),Rt=_(Qt,2),dt=p(Rt),bt=_(Rt,2),Lt=p(bt);{var Q=Bt=>{var ve=Ht();R(()=>D(ve,`Reset: ${u($)??""}`)),x(Bt,ve)};B(Lt,Bt=>{u($)&&Bt(Q)})}var pt=_(Lt,2);{var at=Bt=>{var ve=Ht();R(()=>D(ve,`· ↗ ${u(w)??""}`)),x(Bt,ve)};B(pt,Bt=>{u(w)&&Bt(at)})}var Ct=_(pt,2);{var rt=Bt=>{var ve=Ht();R(()=>D(ve,`· TTT ${u(k)??""}`)),x(Bt,ve)};B(Ct,Bt=>{u(k)&&Bt(rt)})}var Tt=_(wt,2),Xt=_(p(Tt),2),Wt=p(Xt),se=_(Xt,2),Et=p(se),ct=_(se,2),It=p(ct),re=_(It);{var Me=Bt=>{var ve=Ht();R(()=>D(ve,`· Reset: ${u(A)??""}`)),x(Bt,ve)};B(re,Bt=>{u(A)&&Bt(Me)})}var Xe=_(Tt,2);{var Ze=Bt=>{var ve=Yg(),le=p(ve);R(Ne=>D(le,`MAJ ${Ne??""}`),[()=>new Date(t.account.quota.lastUpdated).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})]),x(Bt,ve)};B(Xe,Bt=>{t.account.quota.lastUpdated&&Bt(Ze)})}R((Bt,ve,le,Ne,as,Fe)=>{Be(Y,`width: ${Bt??""}%; background: ${u(h)??""}`),D(dt,`${ve??""}%`),Be(Wt,`width: ${le??""}%; background: ${u(h)??""}`),D(Et,`${Ne??""}%`),D(It,`${as??""}/${Fe??""} `)},[()=>Math.min(u(l),1)*100,()=>Math.round(u(l)*100),()=>Math.min(u(c),1)*100,()=>Math.round(u(c)*100),()=>b(t.account.quota.tokens7d??0),()=>b(t.account.quota.limit7d??0)]),x(st,lt)};B(St,st=>{t.account.quota&&st(Ft)})}var Kt=_(q,2),oe=p(Kt);{var be=st=>{var lt=Xg(),wt=p(lt);Ya(wt,{size:14}),nt("click",lt,T),x(st,lt)};B(oe,st=>{t.account.isActive||st(be)})}var ge=_(oe,2),Jt=p(ge);bs(Jt,{size:14});var Gt=_(ge,2),Ot=p(Gt);Uv(Ot,{size:14}),R(()=>D(jt,u(v))),nt("click",ge,E),nt("click",Gt,st=>{st.stopPropagation(),z(st)}),x(F,H)},$$slots:{default:!0}});var yt=_(J,2);{var Pt=F=>{var O=nm(),H=p(O),tt=p(H);Ya(tt,{size:14});var kt=_(tt,2),q=p(kt),et=_(H,4),Mt=p(et);{var ee=G=>{var vt=Jg(),_t=I(vt);ao(_t,{size:14}),x(G,vt)},de=G=>{var vt=Qg(),_t=I(vt);dp(_t,{size:14}),x(G,vt)};B(Mt,G=>{u(g)?G(ee):G(de,!1)})}var U=_(et,2);{var jt=G=>{var vt=Zg(),_t=p(vt);El(_t,{size:14});var St=_(_t,2),Ft=p(St);R(()=>D(Ft,`Priorite (${t.account.data.priority??50??""})`)),nt("click",vt,Z),x(G,vt)},Vt=G=>{var vt=tm(),_t=p(vt);El(_t,{size:14});var St=_(_t,2),Ft=_(St,2);nt("keydown",St,Kt=>{Kt.key==="Enter"&&K()}),Te(St,()=>u(a),Kt=>M(a,Kt)),nt("click",Ft,K),x(G,vt)};B(U,G=>{u(i)?G(Vt,!1):G(jt)})}var Zt=_(U,4),zt=p(Zt);bs(zt,{size:14});var Nt=_(Zt,2);{var fe=G=>{var vt=em(),_t=I(vt),St=p(_t);Io(St,{size:14});var Ft=_(_t,2),Kt=p(Ft);Zv(Kt,{size:14}),nt("click",_t,V),nt("click",Ft,C),x(G,vt)};B(Nt,G=>{u(m)||G(fe)})}var ue=_(Nt,4);{var ft=G=>{var vt=sm(),_t=p(vt);Rv(_t,{size:14}),nt("click",vt,C),x(G,vt)};B(ue,G=>{u(m)||G(ft)})}var At=_(ue,2),$t=p(At);ei($t,{size:14}),R(()=>{Be(O,`left: ${u(n).x??""}px; top: ${u(n).y??""}px`),D(q,`Activer ${t.account.data.email??t.account.key??""}`)}),nt("click",O,G=>G.stopPropagation()),nt("keydown",O,()=>{}),nt("click",H,T),nt("click",et,N),nt("click",Zt,E),nt("click",At,L),x(F,O)};B(yt,F=>{u(s)&&F(Pt)})}nt("contextmenu",J,z),nt("dblclick",J,T),x(e,X),ke()}De(["contextmenu","dblclick","click","keydown"]);var rm=P('<div class="empty-state svelte-1ctznzk"><p class="empty-title svelte-1ctznzk">Aucun compte configure</p> <p class="empty-desc svelte-1ctznzk">Ajoutez un compte pour commencer</p></div>'),om=P('<div class="account-grid svelte-1ctznzk"><!> <!></div>');function lm(e,t){xe(t,!0);let s=W(()=>[...t.accounts].sort((o,l)=>{if(o.isActive!==l.isActive)return o.isActive?-1:1;const c=o.data.priority??99,d=l.data.priority??99;return c-d}));var n=om(),i=p(n);ie(i,17,()=>u(s),o=>o.key,(o,l)=>{am(o,{get account(){return u(l)}})});var a=_(i,2);{var r=o=>{var l=rm();x(o,l)};B(a,o=>{u(s).length===0&&o(r)})}x(e,n),ke()}var cm=P("<button><!></button>");function qt(e,t){let s=_e(t,"variant",3,"primary"),n=_e(t,"size",3,"md"),i=_e(t,"disabled",3,!1);var a=cm(),r=p(a);xn(r,()=>t.children),R(()=>{Yt(a,1,`btn btn-${s()??""} btn-${n()??""}`,"svelte-er4ugn"),a.disabled=i()}),nt("click",a,function(...o){t.onclick?.apply(this,o)}),x(e,a)}De(["click"]);var dm=P('<footer class="dialog-actions svelte-53p4nz"><!></footer>'),um=P('<div class="dialog-backdrop svelte-53p4nz"><div class="dialog-content svelte-53p4nz"><header class="dialog-header svelte-53p4nz"><h2 class="dialog-title svelte-53p4nz"> </h2> <button class="dialog-close svelte-53p4nz" aria-label="Fermer"><!></button></header> <div class="dialog-body svelte-53p4nz"><!></div> <!></div></div>');function ba(e,t){xe(t,!0);let s=_e(t,"open",15,!1),n=_e(t,"title",3,"");function i(){s(!1),t.onclose?.()}function a(c){c.key==="Escape"&&i()}var r=it(),o=I(r);{var l=c=>{var d=um(),h=p(d),f=p(h),v=p(f),g=p(v),m=_(v,2),b=p(m);fu(b,{size:18});var y=_(f,2),S=p(y);xn(S,()=>t.children);var k=_(y,2);{var w=$=>{var A=dm(),z=p(A);xn(z,()=>t.actions),x($,A)};B(k,$=>{t.actions&&$(w)})}R(()=>D(g,n())),nt("click",d,i),nt("keydown",d,a),nt("click",h,$=>$.stopPropagation()),nt("keydown",h,()=>{}),nt("click",m,i),x(c,d)};B(o,c=>{s()&&c(l)})}x(e,r),ke()}De(["click","keydown"]);var hm=P('<span style="display:flex"><!></span> Rafraîchir',1),fm=P("<!> Setup auto",1),vm=P('<span style="display:flex"><!></span> Import auto',1),pm=P("<!> Importer",1),gm=P("<!> Ajouter",1),mm=P('<div class="stat-pill svelte-1ck4pq"><span class="dot dot-watch svelte-1ck4pq"></span> <span> </span></div>'),_m=P('<div class="stat-pill svelte-1ck4pq"><span class="dot dot-alert svelte-1ck4pq"></span> <span> </span></div>'),bm=P('<div class="stat-pill urgent svelte-1ck4pq"><span class="dot dot-critical svelte-1ck4pq"></span> <span> </span></div>'),ym=P('<div class="phase-stats svelte-1ck4pq"><div class="stat-pill svelte-1ck4pq"><span class="dot dot-active svelte-1ck4pq"></span> <span> </span></div> <span class="stat-sep svelte-1ck4pq"></span> <div class="stat-pill svelte-1ck4pq"><span class="dot dot-cruise svelte-1ck4pq"></span> <span> </span></div> <!> <!> <!></div>'),xm=P("<!> Ajouter un compte",1),km=P('<div class="empty-state svelte-1ck4pq"><div class="empty-icon svelte-1ck4pq"><!></div> <p class="empty-title svelte-1ck4pq">Aucun compte configuré</p> <p class="empty-desc svelte-1ck4pq">Ajoutez votre premier compte Claude pour commencer</p> <!></div>'),wm=P('<div class="add-form svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-key">Identifiant <span class="req svelte-1ck4pq">*</span></label> <input id="add-key" type="text" class="form-input svelte-1ck4pq" placeholder="ex: alice@example.com" autocomplete="off"/></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-token">Access Token <span class="req svelte-1ck4pq">*</span></label> <input id="add-token" type="password" class="form-input svelte-1ck4pq" placeholder="token OAuth..." autocomplete="new-password"/></div> <div class="form-row svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-name">Nom</label> <input id="add-name" type="text" class="form-input svelte-1ck4pq" placeholder="Alice"/></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-email">Email</label> <input id="add-email" type="email" class="form-input svelte-1ck4pq" placeholder="alice@example.com"/></div></div> <div class="form-row svelte-1ck4pq"><div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-provider">Provider</label> <select id="add-provider" class="form-input form-select svelte-1ck4pq"><option>Anthropic</option><option>Gemini</option><option>OpenAI</option><option>xAI</option><option>DeepSeek</option><option>Mistral</option><option>Groq</option></select></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-priority">Priorité</label> <input id="add-priority" type="number" class="form-input svelte-1ck4pq" min="0" max="99"/></div></div> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="add-plan">Plan</label> <input id="add-plan" type="text" class="form-input svelte-1ck4pq" placeholder="pro, team, free..."/></div></div>'),$m=P("<!> <!>",1),Sm=P(`<div class="add-form svelte-1ck4pq"><p style="font-size: 12px; color: var(--fg-secondary);">Collez un access token OAuth capturé depuis Claude Code pour l'importer comme nouveau compte.</p> <div class="form-field svelte-1ck4pq"><label class="form-label svelte-1ck4pq" for="import-token">Access Token <span class="req svelte-1ck4pq">*</span></label> <textarea id="import-token" class="form-input svelte-1ck4pq" rows="3" placeholder="Collez le token ici..." style="resize:vertical;font-family:monospace;font-size:12px"></textarea></div></div>`),Mm=P("<!> <!>",1),Pm=P('<div class="scan-scanning svelte-1ck4pq"><div class="scan-spinner svelte-1ck4pq"></div> <span>Scan des fichiers locaux en cours…</span></div>'),Am=P('<span class="scan-provider-badge svelte-1ck4pq"> </span>'),Cm=P('<div><input type="checkbox" class="scan-checkbox svelte-1ck4pq"/> <div class="scan-item-info svelte-1ck4pq"><span class="scan-label svelte-1ck4pq"> </span> <span class="scan-source svelte-1ck4pq"> </span> <!></div></div>'),zm=P('<div class="add-form svelte-1ck4pq"><p class="scan-intro svelte-1ck4pq">Tokens Claude détectés sur ce poste. Sélectionnez ceux à importer.</p>  <div class="scan-select-all svelte-1ck4pq"><input type="checkbox" class="svelte-1ck4pq"/> <span> </span></div> <div class="scan-list svelte-1ck4pq"></div></div>'),Tm=P("<!> <!>",1),Em=P('<div class="scan-scanning svelte-1ck4pq" style="padding:16px 0"><div class="scan-spinner svelte-1ck4pq"></div> <span>Recherche de claude dans le PATH…</span></div>'),Dm=P('<div class="setup-check-row ok svelte-1ck4pq"><span class="setup-check-icon svelte-1ck4pq">✓</span> <div><div style="font-size:13px;font-weight:500;color:var(--fg-primary)">claude trouvé</div> <div class="setup-check-path svelte-1ck4pq"> </div></div></div> <p class="setup-install-hint svelte-1ck4pq">Cliquez sur <strong>Continuer</strong> pour exécuter <code style="font-family:monospace;font-size:12px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;padding:1px 5px">claude setup-token</code> et capturer automatiquement votre token OAuth.</p>',1),Om=P('<div class="setup-check-path svelte-1ck4pq" style="color:var(--fg-dim)"> </div>'),Rm=P(`<div class="setup-check-row fail svelte-1ck4pq"><span class="setup-check-icon svelte-1ck4pq">✗</span> <div><div style="font-size:13px;font-weight:500;color:var(--status-error)">claude introuvable</div> <!></div></div> <p class="setup-install-hint svelte-1ck4pq">Claude CLI n'est pas installé ou n'est pas dans le PATH.<br/> Installez-le depuis <a href="https://claude.ai/download" target="_blank" rel="noopener" class="svelte-1ck4pq">claude.ai/download</a> puis relancez cette fenêtre.</p>`,1),Lm=P('<p class="setup-step-label svelte-1ck4pq">Etape 1 — Vérification</p> <!>',1),Im=P('<pre class="setup-output svelte-1ck4pq"> </pre>'),jm=P('<p class="setup-step-label svelte-1ck4pq">Etape 2 — Capture en cours</p> <div class="setup-capture-body svelte-1ck4pq"><div class="setup-spinner svelte-1ck4pq"></div> <span class="setup-capture-label svelte-1ck4pq">Exécution de <code style="font-family:monospace;font-size:11px">claude setup-token</code>…</span> <span class="setup-capture-sublabel svelte-1ck4pq">Délai max : 60 secondes</span></div> <!>',1),Nm=P('<div class="setup-success-email svelte-1ck4pq">Compte ajouté : <strong> </strong></div>'),Fm=P('<div class="setup-success-email svelte-1ck4pq">Le compte a été ajouté à la liste.</div>'),Bm=P('<p class="setup-step-label svelte-1ck4pq">Etape 3 — Succès</p> <div class="setup-success-body svelte-1ck4pq"><div class="setup-success-icon svelte-1ck4pq">✅</div> <div class="setup-success-title svelte-1ck4pq">Token capturé !</div> <!></div>',1),qm=P('<div class="setup-error-msg svelte-1ck4pq"> </div>'),Vm=P('<pre class="setup-output svelte-1ck4pq"> </pre>'),Hm=P('<p class="setup-step-label svelte-1ck4pq">Résultat — Fallback manuel</p> <!> <!> <div class="setup-manual-hint svelte-1ck4pq"><strong>Instructions manuelles :</strong><br/> 1. Ouvrez un terminal et lancez <code class="svelte-1ck4pq">claude setup-token</code><br/> 2. Copiez le token affiché<br/> 3. Utilisez le bouton <strong>Importer</strong> pour coller le token manuellement</div>',1),Wm=P('<div class="setup-body svelte-1ck4pq"><!></div>'),Um=P("<!> <!>",1),Ym=P("<!> <!> <!>",1),Km=P('<div class="accounts-screen svelte-1ck4pq"><header class="screen-header svelte-1ck4pq"><div class="header-left svelte-1ck4pq"><div class="screen-icon svelte-1ck4pq"><!></div> <div><h1 class="screen-title svelte-1ck4pq">Comptes</h1> <p class="screen-subtitle svelte-1ck4pq"> </p></div></div> <div class="screen-actions svelte-1ck4pq"><!> <!> <!> <!> <!></div></header> <!> <!></div> <!>  <!> <!> <!>',1);function Xm(e,t){xe(t,!0);let s=j(we([])),n=j(!1),i=j(!1),a=j(!1),r=j(""),o=j(""),l=j(""),c=j(""),d=j(""),h=j("anthropic"),f=j(1),v=j(""),g=j(!1),m=j(!1),b=j(!1),y=j(!1),S=j(we([])),k=j(we(new Set)),w=j(!1),$=j("check"),A=j(null),z=j(null),C=j(""),T=j(null),E=j(!1);Ve(()=>We.subscribe(Rt=>{M(s,Rt,!0)}));async function L(){M(n,!0);try{await We.load()}finally{M(n,!1)}}function N(){M(o,""),M(l,""),M(c,""),M(d,""),M(h,"anthropic"),M(f,1),M(v,"")}async function Z(){if(!(!u(o).trim()||!u(l).trim())){M(g,!0);try{await We.add(u(o).trim(),{name:u(c).trim()||u(o).trim(),displayName:u(c).trim()||u(o).trim(),email:u(d).trim()||void 0,provider:u(h),priority:u(f),planType:u(v).trim()||void 0,claudeAiOauth:{accessToken:u(l).trim(),refreshToken:u(l).trim()}}),M(i,!1),N()}finally{M(g,!1)}}}function K(){M(i,!1),N()}function V(Y){return Y.email??Y.accessToken?.slice(0,16)??Y.sourcePath}function X(Y){return Y.email?Y.email:Y.name?Y.name:`token-${Y.accessToken?.slice(0,8)??"???"}…`}async function J(){M(b,!0),M(S,[],!0),M(k,new Set,!0),M(m,!0);try{const Y=await cg();M(S,Y,!0),Y.length===0?(M(m,!1),On.info("Aucun token local trouvé","Aucun fichier de credentials Claude n'a été détecté.")):M(k,new Set(Y.map(V)),!0)}catch(Y){M(m,!1),On.error("Erreur de scan",String(Y))}finally{M(b,!1)}}function xt(){M(m,!1),M(S,[],!0),M(k,new Set,!0)}function yt(Y){const Rt=V(Y),dt=new Set(u(k));dt.has(Rt)?dt.delete(Rt):dt.add(Rt),M(k,dt,!0)}function Pt(){u(k).size===u(S).length?M(k,new Set,!0):M(k,new Set(u(S).map(V)),!0)}async function F(){const Y=u(S).filter(Rt=>u(k).has(V(Rt)));if(Y.length!==0){M(y,!0);try{const Rt=await dg(Y);await We.load(),xt(),On.success(`${Rt} compte${Rt>1?"s":""} importé${Rt>1?"s":""}`,"Les tokens locaux ont été ajoutés avec succès.")}catch(Rt){On.error("Erreur d'import",String(Rt))}finally{M(y,!1)}}}function O(){M($,"check"),M(A,null),M(z,null),M(C,""),M(T,null),M(E,!1)}async function H(){O(),M(w,!0),M(E,!0);try{const Y=await ug();M(A,Y,!0)}catch(Y){M(A,null),M(z,String(Y),!0)}finally{M(E,!1)}}function tt(){M(w,!1),O()}async function kt(){M($,"capturing"),M(C,""),M(z,null);try{const Y=await hg(60);M(C,Y.output??"",!0),Y.success&&Y.accessToken?(M(T,Y.email??null,!0),M($,"success"),await We.load()):(M(z,Y.error??"Aucun token capturé.",!0),M($,"error"))}catch(Y){M(z,String(Y),!0),M($,"error")}}function q(){tt(),On.success("Token capturé",u(T)?`Compte ${u(T)} ajouté.`:"Compte ajouté avec succès.")}let et=W(()=>u(s).filter(Y=>Y.isActive).length),Mt=W(()=>u(s).filter(Y=>!Y.quota||Y.quota.phase==="Cruise").length),ee=W(()=>u(s).filter(Y=>Y.quota?.phase==="Watch").length),de=W(()=>u(s).filter(Y=>Y.quota?.phase==="Alert").length),U=W(()=>u(s).filter(Y=>Y.quota?.phase==="Critical").length),jt=W(()=>u(S).length>0&&u(k).size===u(S).length),Vt=W(()=>u(k).size>0&&u(k).size<u(S).length);var Zt=Km(),zt=I(Zt),Nt=p(zt),fe=p(Nt),ue=p(fe),ft=p(ue);Xa(ft,{size:18});var At=_(ue,2),$t=_(p(At),2),G=p($t),vt=_(fe,2),_t=p(vt);qt(_t,{variant:"ghost",size:"sm",onclick:L,get disabled(){return u(n)},children:(Y,Rt)=>{var dt=hm(),bt=I(dt);let Lt;var Q=p(bt);bs(Q,{size:14}),R(()=>Lt=Yt(bt,1,"",null,Lt,{spin:u(n)})),x(Y,dt)},$$slots:{default:!0}});var St=_(_t,2);qt(St,{variant:"ghost",size:"sm",onclick:H,children:(Y,Rt)=>{var dt=fm(),bt=I(dt);qi(bt,{size:14}),x(Y,dt)},$$slots:{default:!0}});var Ft=_(St,2);qt(Ft,{variant:"ghost",size:"sm",onclick:J,get disabled(){return u(b)},children:(Y,Rt)=>{var dt=vm(),bt=I(dt);let Lt;var Q=p(bt);lp(Q,{size:14}),R(()=>Lt=Yt(bt,1,"",null,Lt,{spin:u(b)})),x(Y,dt)},$$slots:{default:!0}});var Kt=_(Ft,2);qt(Kt,{variant:"ghost",size:"sm",onclick:()=>M(a,!0),children:(Y,Rt)=>{var dt=pm(),bt=I(dt);gp(bt,{size:14}),x(Y,dt)},$$slots:{default:!0}});var oe=_(Kt,2);qt(oe,{variant:"primary",size:"sm",onclick:()=>M(i,!0),children:(Y,Rt)=>{var dt=gm(),bt=I(dt);Ki(bt,{size:14}),x(Y,dt)},$$slots:{default:!0}});var be=_(Nt,2);{var ge=Y=>{var Rt=ym(),dt=p(Rt),bt=_(p(dt),2),Lt=p(bt),Q=_(dt,4),pt=_(p(Q),2),at=p(pt),Ct=_(Q,2);{var rt=Et=>{var ct=mm(),It=_(p(ct),2),re=p(It);R(()=>D(re,`${u(ee)??""} Watch`)),x(Et,ct)};B(Ct,Et=>{u(ee)>0&&Et(rt)})}var Tt=_(Ct,2);{var Xt=Et=>{var ct=_m(),It=_(p(ct),2),re=p(It);R(()=>D(re,`${u(de)??""} Alert`)),x(Et,ct)};B(Tt,Et=>{u(de)>0&&Et(Xt)})}var Wt=_(Tt,2);{var se=Et=>{var ct=bm(),It=_(p(ct),2),re=p(It);R(()=>D(re,`${u(U)??""} Critical`)),x(Et,ct)};B(Wt,Et=>{u(U)>0&&Et(se)})}R(()=>{D(Lt,`${u(et)??""} actif${u(et)>1?"s":""}`),D(at,`${u(Mt)??""} Cruise`)}),x(Y,Rt)};B(be,Y=>{u(s).length>0&&Y(ge)})}var Jt=_(be,2);{var Gt=Y=>{var Rt=km(),dt=p(Rt),bt=p(dt);Xa(bt,{size:44});var Lt=_(dt,6);qt(Lt,{variant:"primary",size:"md",onclick:()=>M(i,!0),children:(Q,pt)=>{var at=xm(),Ct=I(at);Ki(Ct,{size:14}),x(Q,at)},$$slots:{default:!0}}),x(Y,Rt)},Ot=Y=>{lm(Y,{get accounts(){return u(s)}})};B(Jt,Y=>{u(s).length===0?Y(Gt):Y(Ot,!1)})}var st=_(zt,2);ba(st,{title:"Ajouter un compte",onclose:K,get open(){return u(i)},set open(dt){M(i,dt,!0)},children:dt=>{var bt=wm(),Lt=p(bt),Q=_(p(Lt),2),pt=_(Lt,2),at=_(p(pt),2),Ct=_(pt,2),rt=p(Ct),Tt=_(p(rt),2),Xt=_(rt,2),Wt=_(p(Xt),2),se=_(Ct,2),Et=p(se),ct=_(p(Et),2),It=p(ct);It.value=It.__value="anthropic";var re=_(It);re.value=re.__value="gemini";var Me=_(re);Me.value=Me.__value="openai";var Xe=_(Me);Xe.value=Xe.__value="xai";var Ze=_(Xe);Ze.value=Ze.__value="deepseek";var Bt=_(Ze);Bt.value=Bt.__value="mistral";var ve=_(Bt);ve.value=ve.__value="groq";var le=_(Et,2),Ne=_(p(le),2),as=_(se,2),Fe=_(p(as),2);Te(Q,()=>u(o),Oe=>M(o,Oe)),Te(at,()=>u(l),Oe=>M(l,Oe)),Te(Tt,()=>u(c),Oe=>M(c,Oe)),Te(Wt,()=>u(d),Oe=>M(d,Oe)),fi(ct,()=>u(h),Oe=>M(h,Oe)),Te(Ne,()=>u(f),Oe=>M(f,Oe)),Te(Fe,()=>u(v),Oe=>M(v,Oe)),x(dt,bt)},actions:dt=>{var bt=$m(),Lt=I(bt);qt(Lt,{variant:"ghost",size:"sm",onclick:K,children:(pt,at)=>{var Ct=Ht("Annuler");x(pt,Ct)},$$slots:{default:!0}});var Q=_(Lt,2);{let pt=W(()=>u(g)||!u(o).trim()||!u(l).trim());qt(Q,{variant:"primary",size:"sm",onclick:Z,get disabled(){return u(pt)},children:(at,Ct)=>{var rt=Ht();R(()=>D(rt,u(g)?"Ajout...":"Ajouter")),x(at,rt)},$$slots:{default:!0}})}x(dt,bt)},$$slots:{default:!0,actions:!0}});var lt=_(st,2);ba(lt,{title:"Importer un token",onclose:()=>{M(a,!1),M(r,"")},get open(){return u(a)},set open(dt){M(a,dt,!0)},children:dt=>{var bt=Sm(),Lt=_(p(bt),2),Q=_(p(Lt),2);Te(Q,()=>u(r),pt=>M(r,pt)),x(dt,bt)},actions:dt=>{var bt=Mm(),Lt=I(bt);qt(Lt,{variant:"ghost",size:"sm",onclick:()=>{M(a,!1),M(r,"")},children:(pt,at)=>{var Ct=Ht("Annuler");x(pt,Ct)},$$slots:{default:!0}});var Q=_(Lt,2);{let pt=W(()=>!u(r).trim());qt(Q,{variant:"primary",size:"sm",get disabled(){return u(pt)},onclick:async()=>{const at=`imported-${Date.now()}`;await We.add(at,{name:at,claudeAiOauth:{accessToken:u(r).trim(),refreshToken:u(r).trim()}}),M(a,!1),M(r,"")},children:(at,Ct)=>{var rt=Ht("Importer");x(at,rt)},$$slots:{default:!0}})}x(dt,bt)},$$slots:{default:!0,actions:!0}});var wt=_(lt,2);ba(wt,{title:"Import automatique",onclose:xt,get open(){return u(m)},set open(dt){M(m,dt,!0)},children:dt=>{var bt=it(),Lt=I(bt);{var Q=at=>{var Ct=Pm();x(at,Ct)},pt=at=>{var Ct=zm(),rt=_(p(Ct),2),Tt=p(rt),Xt=_(Tt,2),Wt=p(Xt),se=_(rt,2);ie(se,21,()=>u(S),Et=>V(Et),(Et,ct)=>{var It=Cm();let re;var Me=p(It),Xe=_(Me,2),Ze=p(Xe),Bt=p(Ze),ve=_(Ze,2),le=p(ve),Ne=_(ve,2);{var as=Fe=>{var Oe=Am(),ts=p(Oe);R(()=>D(ts,u(ct).provider)),x(Fe,Oe)};B(Ne,Fe=>{u(ct).provider&&Fe(as)})}R((Fe,Oe,ts)=>{re=Yt(It,1,"scan-item svelte-1ck4pq",null,re,Fe),wl(Me,Oe),D(Bt,ts),D(le,u(ct).sourcePath)},[()=>({selected:u(k).has(V(u(ct)))}),()=>u(k).has(V(u(ct))),()=>X(u(ct))]),nt("click",It,()=>yt(u(ct))),nt("click",Me,Fe=>Fe.stopPropagation()),nt("change",Me,()=>yt(u(ct))),x(Et,It)}),R(()=>{wl(Tt,u(jt)),Tt.indeterminate=u(Vt),D(Wt,`${u(jt)?"Tout désélectionner":"Tout sélectionner"}
             · 
            ${u(k).size??""}/${u(S).length??""} sélectionné${u(k).size>1?"s":""}`)}),nt("click",rt,Pt),nt("click",Tt,Et=>Et.stopPropagation()),nt("change",Tt,Pt),x(at,Ct)};B(Lt,at=>{u(b)?at(Q):at(pt,!1)})}x(dt,bt)},actions:dt=>{var bt=Tm(),Lt=I(bt);qt(Lt,{variant:"ghost",size:"sm",onclick:xt,get disabled(){return u(y)},children:(pt,at)=>{var Ct=Ht("Annuler");x(pt,Ct)},$$slots:{default:!0}});var Q=_(Lt,2);{let pt=W(()=>u(y)||u(b)||u(k).size===0);qt(Q,{variant:"primary",size:"sm",get disabled(){return u(pt)},onclick:F,children:(at,Ct)=>{var rt=Ht();R(()=>D(rt,u(y)?"Import…":`Importer ${u(k).size>0?u(k).size:""} sélection${u(k).size>1?"s":""}`)),x(at,rt)},$$slots:{default:!0}})}x(dt,bt)},$$slots:{default:!0,actions:!0}});var Qt=_(wt,2);ba(Qt,{title:"Setup automatique",onclose:tt,get open(){return u(w)},set open(dt){M(w,dt,!0)},children:dt=>{var bt=Wm(),Lt=p(bt);{var Q=rt=>{var Tt=Lm(),Xt=_(I(Tt),2);{var Wt=ct=>{var It=Em();x(ct,It)},se=ct=>{var It=Dm(),re=I(It),Me=_(p(re),2),Xe=_(p(Me),2),Ze=p(Xe);R(()=>D(Ze,u(A))),x(ct,It)},Et=ct=>{var It=Rm(),re=I(It),Me=_(p(re),2),Xe=_(p(Me),2);{var Ze=Bt=>{var ve=Om(),le=p(ve);R(()=>D(le,u(z))),x(Bt,ve)};B(Xe,Bt=>{u(z)&&Bt(Ze)})}x(ct,It)};B(Xt,ct=>{u(E)?ct(Wt):u(A)?ct(se,1):ct(Et,!1)})}x(rt,Tt)},pt=rt=>{var Tt=jm(),Xt=_(I(Tt),4);{var Wt=se=>{var Et=Im(),ct=p(Et);R(()=>D(ct,u(C))),x(se,Et)};B(Xt,se=>{u(C)&&se(Wt)})}x(rt,Tt)},at=rt=>{var Tt=Bm(),Xt=_(I(Tt),2),Wt=_(p(Xt),4);{var se=ct=>{var It=Nm(),re=_(p(It)),Me=p(re);R(()=>D(Me,u(T))),x(ct,It)},Et=ct=>{var It=Fm();x(ct,It)};B(Wt,ct=>{u(T)?ct(se):ct(Et,!1)})}x(rt,Tt)},Ct=rt=>{var Tt=Hm(),Xt=_(I(Tt),2);{var Wt=ct=>{var It=qm(),re=p(It);R(()=>D(re,u(z))),x(ct,It)};B(Xt,ct=>{u(z)&&ct(Wt)})}var se=_(Xt,2);{var Et=ct=>{var It=Vm(),re=p(It);R(()=>D(re,u(C))),x(ct,It)};B(se,ct=>{u(C)&&ct(Et)})}x(rt,Tt)};B(Lt,rt=>{u($)==="check"?rt(Q):u($)==="capturing"?rt(pt,1):u($)==="success"?rt(at,2):u($)==="error"&&rt(Ct,3)})}x(dt,bt)},actions:dt=>{var bt=it(),Lt=I(bt);{var Q=rt=>{var Tt=Um(),Xt=I(Tt);qt(Xt,{variant:"ghost",size:"sm",onclick:tt,children:(ct,It)=>{var re=Ht("Annuler");x(ct,re)},$$slots:{default:!0}});var Wt=_(Xt,2);{var se=ct=>{qt(ct,{variant:"primary",size:"sm",onclick:kt,children:(It,re)=>{var Me=Ht("Continuer");x(It,Me)},$$slots:{default:!0}})},Et=ct=>{qt(ct,{variant:"ghost",size:"sm",onclick:H,children:(It,re)=>{var Me=Ht("Réessayer");x(It,Me)},$$slots:{default:!0}})};B(Wt,ct=>{!u(E)&&u(A)?ct(se):!u(E)&&!u(A)&&ct(Et,1)})}x(rt,Tt)},pt=rt=>{qt(rt,{variant:"ghost",size:"sm",disabled:!0,children:(Tt,Xt)=>{var Wt=Ht("En cours…");x(Tt,Wt)},$$slots:{default:!0}})},at=rt=>{qt(rt,{variant:"primary",size:"sm",onclick:q,children:(Tt,Xt)=>{var Wt=Ht("Fermer");x(Tt,Wt)},$$slots:{default:!0}})},Ct=rt=>{var Tt=Ym(),Xt=I(Tt);qt(Xt,{variant:"ghost",size:"sm",onclick:tt,children:(Et,ct)=>{var It=Ht("Fermer");x(Et,It)},$$slots:{default:!0}});var Wt=_(Xt,2);qt(Wt,{variant:"ghost",size:"sm",onclick:O,children:(Et,ct)=>{var It=Ht("Réessayer");x(Et,It)},$$slots:{default:!0}});var se=_(Wt,2);qt(se,{variant:"primary",size:"sm",onclick:()=>{tt(),M(a,!0)},children:(Et,ct)=>{var It=Ht("Importer manuellement");x(Et,It)},$$slots:{default:!0}}),x(rt,Tt)};B(Lt,rt=>{u($)==="check"?rt(Q):u($)==="capturing"?rt(pt,1):u($)==="success"?rt(at,2):u($)==="error"&&rt(Ct,3)})}x(dt,bt)},$$slots:{default:!0,actions:!0}}),R(()=>D(G,`${u(s).length??""} compte${u(s).length!==1?"s":""} configuré${u(s).length!==1?"s":""}`)),x(e,Zt),ke()}De(["click","change"]);var Gm=P("<option> </option>"),Jm=P('<div class="edit-form svelte-ytkoha"><div class="edit-row svelte-ytkoha"><input class="edit-input svelte-ytkoha" type="text" placeholder="Nom"/> <input class="edit-input port-input svelte-ytkoha" type="number" min="1024" max="65535"/></div> <div class="edit-row svelte-ytkoha"><select class="edit-input svelte-ytkoha"><option>Integre</option><!></select> <!> <!></div></div>'),Qm=P('<div class="instance-info svelte-ytkoha"><h3 class="instance-name svelte-ytkoha"> </h3> <span class="instance-port svelte-ytkoha"> </span></div> <!>',1),Zm=P("<!> ",1),t_=P("<!> Redemarrer",1),e_=P('<div class="instance-card svelte-ytkoha"><div class="instance-header svelte-ytkoha"><span class="instance-icon svelte-ytkoha"><!></span> <!></div> <div class="instance-stats svelte-ytkoha"><div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Moteur</span> <span class="stat-value engine-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Uptime</span> <span class="stat-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Requetes</span> <span class="stat-value svelte-ytkoha"> </span></div> <div class="stat svelte-ytkoha"><span class="stat-label svelte-ytkoha">Actives</span> <span class="stat-value svelte-ytkoha"> </span></div></div> <div class="setup-row svelte-ytkoha"><span class="setup-label svelte-ytkoha">Setup:</span> <button title="Injecter ANTHROPIC_BASE_URL dans Claude Code"><!> CC</button> <button title="Injecter http.proxy dans VS Code"><!> VSCode</button></div> <div class="instance-actions svelte-ytkoha"><!> <!> <div class="actions-spacer svelte-ytkoha"></div> <!> <!></div></div>');function s_(e,t){xe(t,!0);let s=_e(t,"detectedBinaries",19,()=>[]),n=j(!1),i=j(!1),a=j(""),r=j(0),o=j(""),l=W(()=>t.instance.config.kind==="router"),c=W(()=>t.instance.config.kind==="impersonator"),d=W(()=>()=>{if(t.instance.config.binaryPath){const w=s().find(A=>A.path===t.instance.config.binaryPath);if(w)return w.name;const $=t.instance.config.binaryPath.replace(/\\/g,"/").split("/");return $[$.length-1]||"Externe"}if(t.instance.status.backend){const w=t.instance.status.backend;return w==="python"?"V2 (Python)":w==="rust-auto"?"V3 (Rust)":w==="unknown"?"Externe":`Externe (${w})`}return"Integre"});function h(w){if(w==null||isNaN(w)||w<=0)return"--";if(w<60)return`${w}s`;if(w<3600)return`${Math.floor(w/60)}m ${w%60}s`;const $=Math.floor(w/3600),A=Math.floor(w%3600/60);return`${$}h ${A}m`}async function f(){M(n,!0);try{t.instance.status.running?await vs.stop(t.instance.config.id):await vs.start(t.instance.config.id)}finally{M(n,!1)}}async function v(){M(n,!0);try{await vs.restart(t.instance.config.id)}finally{M(n,!1)}}async function g(){t.instance.status.running&&await vs.stop(t.instance.config.id),await vs.remove(t.instance.config.id)}function m(){M(a,t.instance.config.name,!0),M(r,t.instance.config.port,!0),M(o,t.instance.config.binaryPath||"",!0),M(i,!0)}async function b(){await vs.update(t.instance.config.id,{name:u(a),port:u(r),binaryPath:u(o)||null}),M(i,!1)}function y(){M(i,!1)}async function S(){t.instance.config.setupTargets.includes("claude-code")?(await Wp(),await vs.update(t.instance.config.id,{setupTargets:t.instance.config.setupTargets.filter($=>$!=="claude-code")})):(await Hp(t.instance.config.port),await vs.update(t.instance.config.id,{setupTargets:[...t.instance.config.setupTargets,"claude-code"]}))}async function k(){t.instance.config.setupTargets.includes("vscode")?(await Yp(),await vs.update(t.instance.config.id,{setupTargets:t.instance.config.setupTargets.filter($=>$!=="vscode")})):(await Up(t.instance.config.port),await vs.update(t.instance.config.id,{setupTargets:[...t.instance.config.setupTargets,"vscode"]}))}he(e,{children:(w,$)=>{var A=e_(),z=p(A),C=p(z),T=p(C);{var E=G=>{du(G,{size:20})},L=G=>{qi(G,{size:20})},N=G=>{jo(G,{size:20})};B(T,G=>{u(l)?G(E):u(c)?G(L,1):G(N,!1)})}var Z=_(C,2);{var K=G=>{var vt=Jm(),_t=p(vt),St=p(_t),Ft=_(St,2),Kt=_(_t,2),oe=p(Kt),be=p(oe);be.value=be.__value="";var ge=_(be);ie(ge,17,s,Re,(Ot,st)=>{var lt=Gm(),wt=p(lt),Qt={};R(()=>{D(wt,u(st).name),Qt!==(Qt=u(st).path)&&(lt.value=(lt.__value=u(st).path)??"")}),x(Ot,lt)});var Jt=_(oe,2);qt(Jt,{size:"sm",variant:"primary",onclick:b,children:(Ot,st)=>{var lt=Ht("OK");x(Ot,lt)},$$slots:{default:!0}});var Gt=_(Jt,2);qt(Gt,{size:"sm",variant:"ghost",onclick:y,children:(Ot,st)=>{var lt=Ht("X");x(Ot,lt)},$$slots:{default:!0}}),Te(St,()=>u(a),Ot=>M(a,Ot)),Te(Ft,()=>u(r),Ot=>M(r,Ot)),fi(oe,()=>u(o),Ot=>M(o,Ot)),x(G,vt)},V=G=>{var vt=Qm(),_t=I(vt),St=p(_t),Ft=p(St),Kt=_(St,2),oe=p(Kt),be=_(_t,2);{let ge=W(()=>t.instance.status.running?"var(--status-running)":"var(--status-stopped)");Ue(be,{get color(){return u(ge)},children:(Jt,Gt)=>{var Ot=Ht();R(()=>D(Ot,t.instance.status.running?"Actif":"Arrete")),x(Jt,Ot)},$$slots:{default:!0}})}R(()=>{D(Ft,t.instance.config.name),D(oe,`:${t.instance.config.port??""}`)}),x(G,vt)};B(Z,G=>{u(i)?G(K):G(V,!1)})}var X=_(z,2),J=p(X),xt=_(p(J),2),yt=p(xt),Pt=_(J,2),F=_(p(Pt),2),O=p(F),H=_(Pt,2),tt=_(p(H),2),kt=p(tt),q=_(H,2),et=_(p(q),2),Mt=p(et),ee=_(X,2),de=_(p(ee),2);let U;var jt=p(de);hu(jt,{size:12});var Vt=_(de,2);let Zt;var zt=p(Vt);qv(zt,{size:12});var Nt=_(ee,2),fe=p(Nt);{let G=W(()=>t.instance.status.running?"secondary":"primary");qt(fe,{get variant(){return u(G)},size:"sm",onclick:f,get disabled(){return u(n)},children:(vt,_t)=>{var St=Zm(),Ft=I(St);ap(Ft,{size:14});var Kt=_(Ft);R(()=>D(Kt,` ${t.instance.status.running?"Arreter":"Demarrer"}`)),x(vt,St)},$$slots:{default:!0}})}var ue=_(fe,2);{var ft=G=>{qt(G,{variant:"ghost",size:"sm",onclick:v,get disabled(){return u(n)},children:(vt,_t)=>{var St=t_(),Ft=I(St);Io(Ft,{size:14}),x(vt,St)},$$slots:{default:!0}})};B(ue,G=>{t.instance.status.running&&G(ft)})}var At=_(ue,4);qt(At,{variant:"ghost",size:"sm",onclick:m,children:(G,vt)=>{ip(G,{size:14})},$$slots:{default:!0}});var $t=_(At,2);qt($t,{variant:"ghost",size:"sm",onclick:g,children:(G,vt)=>{ei(G,{size:14})},$$slots:{default:!0}}),R((G,vt,_t,St)=>{D(yt,G),D(O,vt),D(kt,t.instance.status.requestsTotal??0),D(Mt,t.instance.status.requestsActive??0),U=Yt(de,1,"setup-btn svelte-ytkoha",null,U,_t),Zt=Yt(Vt,1,"setup-btn svelte-ytkoha",null,Zt,St)},[()=>u(d)(),()=>t.instance.status.running?h(t.instance.status.uptimeSecs):"--",()=>({active:t.instance.config.setupTargets.includes("claude-code")}),()=>({active:t.instance.config.setupTargets.includes("vscode")})]),nt("click",de,S),nt("click",Vt,k),x(w,A)},$$slots:{default:!0}}),ke()}De(["click"]);var n_=P("<option> </option>"),i_=P('<div class="add-form svelte-1m3ss3c"><h3 class="add-title svelte-1m3ss3c">Nouveau proxy</h3> <div class="add-fields-top svelte-1m3ss3c"><div class="field field-grow svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-binary">Moteur</label> <select id="proxy-binary" class="field-input svelte-1m3ss3c"><option>Integre (V3)</option><!></select></div></div> <div class="add-fields svelte-1m3ss3c"><div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-name">Nom</label> <input id="proxy-name" class="field-input svelte-1m3ss3c" type="text" placeholder="Mon Proxy"/></div> <div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-port">Port</label> <input id="proxy-port" class="field-input port-input svelte-1m3ss3c" type="number" min="1024" max="65535"/></div> <div class="field svelte-1m3ss3c"><label class="field-label svelte-1m3ss3c" for="proxy-kind">Type</label> <select id="proxy-kind" class="field-input svelte-1m3ss3c"><option>Router</option><option>Anthrouter</option><option>Custom</option></select></div></div> <div class="add-actions svelte-1m3ss3c"><!> <!></div></div>'),a_=P('<button class="add-button svelte-1m3ss3c"><!> Ajouter un proxy</button>'),r_=P('<div class="proxy-control svelte-1m3ss3c"><div class="instances-grid svelte-1m3ss3c"></div> <!></div>');function o_(e,t){xe(t,!0);let s=j(we([])),n=j(we([])),i=j(!1),a=j(""),r=j(8082),o=j("router"),l=j("");Ve(()=>(vs.probe(),Vp().then(w=>{M(n,w,!0)}),vs.subscribe(w=>{M(s,w,!0)})));function c(){M(a,""),M(r,8082),M(o,"router"),M(l,""),M(i,!0)}function d(k){const w=k.target.value;if(M(l,w,!0),w){const $=u(n).find(A=>A.path===w);$&&(M(r,$.defaultPort,!0),u(a).trim()||M(a,$.name,!0),$.id.includes("router")?M(o,"router"):$.id.includes("impersonator")?M(o,"impersonator"):M(o,"custom"))}}async function h(){if(!u(a).trim())return;const w={id:u(a).toLowerCase().replace(/[^a-z0-9]/g,"-")+"-"+Date.now().toString(36),name:u(a).trim(),kind:u(o),port:u(r),autoStart:!1,enabled:!0,binaryPath:u(l)||void 0,setupTargets:[]};await vs.add(w),M(i,!1)}function f(){M(i,!1)}var v={get detectedBinaries(){return u(n)},set detectedBinaries(k){M(n,we(k))}},g=r_(),m=p(g);ie(m,21,()=>u(s),k=>k.config.id,(k,w)=>{s_(k,{get instance(){return u(w)},get detectedBinaries(){return u(n)}})});var b=_(m,2);{var y=k=>{he(k,{children:(w,$)=>{var A=i_(),z=_(p(A),2),C=p(z),T=_(p(C),2),E=p(T);E.value=E.__value="";var L=_(E);ie(L,17,()=>u(n),Re,(q,et)=>{var Mt=n_(),ee=p(Mt),de={};R(()=>{D(ee,u(et).name),de!==(de=u(et).path)&&(Mt.value=(Mt.__value=u(et).path)??"")}),x(q,Mt)});var N;dr(T);var Z=_(z,2),K=p(Z),V=_(p(K),2),X=_(K,2),J=_(p(X),2),xt=_(X,2),yt=_(p(xt),2),Pt=p(yt);Pt.value=Pt.__value="router";var F=_(Pt);F.value=F.__value="impersonator";var O=_(F);O.value=O.__value="custom";var H=_(Z,2),tt=p(H);qt(tt,{variant:"primary",size:"sm",onclick:h,children:(q,et)=>{var Mt=Ht("Ajouter");x(q,Mt)},$$slots:{default:!0}});var kt=_(tt,2);qt(kt,{variant:"ghost",size:"sm",onclick:f,children:(q,et)=>{var Mt=Ht("Annuler");x(q,Mt)},$$slots:{default:!0}}),R(()=>{N!==(N=u(l))&&(T.value=(T.__value=u(l))??"",hi(T,u(l)))}),nt("change",T,d),Te(V,()=>u(a),q=>M(a,q)),Te(J,()=>u(r),q=>M(r,q)),fi(yt,()=>u(o),q=>M(o,q)),x(w,A)},$$slots:{default:!0}})},S=k=>{var w=a_(),$=p(w);Ki($,{size:16}),nt("click",w,c),x(k,w)};B(b,k=>{u(i)?k(y):k(S,!1)})}return x(e,g),ke(v)}De(["change","click"]);var l_=P('<span class="radio-dot svelte-zskv5r"></span>'),c_=P('<div class="strategy-card svelte-zskv5r"><div class="strategy-header svelte-zskv5r"><span><!></span> <div class="strategy-right svelte-zskv5r"><span class="drag-handle svelte-zskv5r" aria-label="Glisser pour reordonner"><!></span> <div><!></div></div></div> <h4 class="strategy-name svelte-zskv5r"> </h4> <p class="strategy-desc svelte-zskv5r"> </p></div>'),d_=P('<div draggable="true" role="listitem"><!></div>'),u_=P('<div class="strategy-grid svelte-zskv5r"></div>');function h_(e,t){xe(t,!0);let s=_e(t,"selected",15,"priority"),n=j(we([{id:"priority",name:"Priorite",description:"Utilise le compte avec la priorite la plus haute. Bascule uniquement quand le compte actif atteint ses limites.",icon:fp},{id:"quota-aware",name:"Quota-Aware",description:"Choisit automatiquement le compte avec le plus de quota disponible. Equilibre la charge intelligemment.",icon:jv},{id:"round-robin",name:"Round Robin",description:"Alterne entre les comptes de facon cyclique. Repartition equitable des requetes.",icon:bs},{id:"latency",name:"Latence",description:"Selectionne le compte avec la meilleure latence mesuree. Optimise la reactivite.",icon:Ka},{id:"usage-based",name:"Usage-Based",description:"Repartit selon l'utilisation cumulee. Equilibre le cout entre les comptes.",icon:vp}])),i=j(null),a=j(null);function r(f){s(f),t.onchange?.(f)}function o(f){M(i,f,!0)}function l(f,v){f.preventDefault(),M(a,v,!0)}function c(f){if(u(i)!==null&&u(i)!==f){const v=[...u(n)],[g]=v.splice(u(i),1);v.splice(f,0,g),M(n,v,!0),t.onreorder?.(v.map(m=>m.id))}M(i,null),M(a,null)}function d(){M(i,null),M(a,null)}var h=u_();ie(h,21,()=>u(n),Re,(f,v,g)=>{var m=d_();let b;var y=p(m);{let S=W(()=>s()===u(v).id);he(y,{get active(){return u(S)},onclick:()=>r(u(v).id),children:(k,w)=>{var $=c_(),A=p($),z=p(A);let C;var T=p(z);cr(T,()=>u(v).icon,(F,O)=>{O(F,{size:20})});var E=_(z,2),L=p(E),N=p(L);Gv(N,{size:14});var Z=_(L,2);let K;var V=p(Z);{var X=F=>{var O=l_();x(F,O)};B(V,F=>{s()===u(v).id&&F(X)})}var J=_(A,2),xt=p(J),yt=_(J,2),Pt=p(yt);R(()=>{C=Yt(z,1,"strategy-icon svelte-zskv5r",null,C,{active:s()===u(v).id}),K=Yt(Z,1,"strategy-radio svelte-zskv5r",null,K,{selected:s()===u(v).id}),D(xt,u(v).name),D(Pt,u(v).description)}),x(k,$)},$$slots:{default:!0}})}R(()=>b=Yt(m,1,"strategy-drag-wrapper svelte-zskv5r",null,b,{dragging:u(i)===g,"drag-over":u(a)===g&&u(i)!==g})),js("dragstart",m,()=>o(g)),js("dragover",m,S=>l(S,g)),js("drop",m,()=>c(g)),js("dragend",m,d),x(f,m)}),x(e,h),ke()}var f_=P("<!> Sauvegarder",1),v_=P('<th class="th-tier svelte-16ofv0g"> </th>'),p_=P('<td class="td-model svelte-16ofv0g"><input type="text" class="model-input svelte-16ofv0g"/></td>'),g_=P('<tr class="svelte-16ofv0g"><td class="td-provider svelte-16ofv0g"><span class="provider-dot svelte-16ofv0g"></span> <span class="provider-name svelte-16ofv0g"> </span></td><!></tr>'),m_=P('<div class="model-mapping svelte-16ofv0g"><div class="mapping-header svelte-16ofv0g"><h3 class="mapping-title svelte-16ofv0g">Mapping des modeles</h3> <!></div> <div class="mapping-table-wrapper svelte-16ofv0g"><table class="mapping-table svelte-16ofv0g"><thead><tr><th class="th-provider svelte-16ofv0g">Provider</th><!></tr></thead><tbody></tbody></table></div></div>');function __(e,t){xe(t,!0);const s={anthropic:{opus:"claude-opus-4-20250514",sonnet:"claude-sonnet-4-20250514",haiku:"claude-haiku-4-20250514"},gemini:{opus:"gemini-2.5-pro",sonnet:"gemini-2.5-flash",haiku:"gemini-2.0-flash-lite"},openai:{opus:"o3",sonnet:"gpt-4.1",haiku:"gpt-4.1-mini"},xai:{opus:"grok-3",sonnet:"grok-3-mini",haiku:"grok-2"},deepseek:{opus:"deepseek-r1",sonnet:"deepseek-chat",haiku:"deepseek-chat"},mistral:{opus:"mistral-large-latest",sonnet:"mistral-medium-latest",haiku:"mistral-small-latest"},groq:{opus:"llama-3.3-70b-versatile",sonnet:"llama-3.1-8b-instant",haiku:"gemma2-9b-it"}};let n=_e(t,"mappings",3,s),i=j(we(JSON.parse(JSON.stringify(s))));Vn(()=>{M(i,JSON.parse(JSON.stringify(n())),!0)});const a=["anthropic","gemini","openai","xai","deepseek","mistral","groq"],r=["opus","sonnet","haiku"],o={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};function l(){t.onsave?.(u(i))}var c=m_(),d=p(c),h=_(p(d),2);qt(h,{variant:"primary",size:"sm",onclick:l,children:(S,k)=>{var w=f_(),$=I(w);op($,{size:14}),x(S,w)},$$slots:{default:!0}});var f=_(d,2),v=p(f),g=p(v),m=p(g),b=_(p(m));ie(b,17,()=>r,Re,(S,k)=>{var w=v_(),$=p(w);R(A=>D($,A),[()=>u(k).charAt(0).toUpperCase()+u(k).slice(1)]),x(S,w)});var y=_(g);ie(y,21,()=>a,Re,(S,k)=>{var w=g_(),$=p(w),A=p($),z=_(A,2),C=p(z),T=_($);ie(T,17,()=>r,Re,(E,L)=>{var N=p_(),Z=p(N);Te(Z,()=>u(i)[u(k)][u(L)],K=>u(i)[u(k)][u(L)]=K),x(E,N)}),R(()=>{Be(A,`background: ${o[u(k)]??""}`),D(C,u(k))}),x(S,w)}),x(e,c),ke()}var b_=P('<div class="profiles-state svelte-po0uu5">Chargement des profils...</div>'),y_=P('<div class="profiles-state error svelte-po0uu5"> </div>'),x_=P('<div class="profiles-state svelte-po0uu5"><!> <p>Aucun profil capture</p> <p class="hint svelte-po0uu5">Les profils sont crees automatiquement lors des premieres requetes Claude Code</p></div>'),k_=P('<span class="count-badge stream svelte-po0uu5">streaming</span>'),w_=P('<div class="header-item svelte-po0uu5"><span class="header-name svelte-po0uu5"> </span> <span class="header-value svelte-po0uu5"> </span></div>'),$_=P('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5">Headers statiques</div> <div class="header-list svelte-po0uu5"></div></div>'),S_=P('<div class="header-item svelte-po0uu5"><span class="header-name svelte-po0uu5"> </span> <span class="header-pattern svelte-po0uu5"> </span> <span class="header-value svelte-po0uu5"> </span></div>'),M_=P('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5">Headers dynamiques</div> <div class="header-list svelte-po0uu5"></div></div>'),P_=P('<span class="order-item svelte-po0uu5"> </span>'),A_=P('<div class="header-section svelte-po0uu5"><div class="section-label svelte-po0uu5"> </div> <div class="order-list svelte-po0uu5"></div></div>'),C_=P('<div class="profile-details svelte-po0uu5"><!> <!> <!></div>'),z_=P('<div class="profile-card svelte-po0uu5"><div class="profile-header svelte-po0uu5"><div class="profile-title-row svelte-po0uu5"><!> <span class="profile-meta svelte-po0uu5"><!></span> <span class="profile-date svelte-po0uu5"> </span></div> <div class="profile-counts svelte-po0uu5"><span class="count-badge svelte-po0uu5"> </span> <span class="count-badge dyn svelte-po0uu5"> </span> <!></div> <button class="expand-btn svelte-po0uu5" aria-label="Expand"><!></button></div> <!></div>'),T_=P(`<div class="profiles-list svelte-po0uu5"><div class="profiles-header svelte-po0uu5"><div class="profiles-title svelte-po0uu5"><!> <span>Profils d'impersonation</span></div> <!></div> <!></div>`);function E_(e,t){xe(t,!0);const s={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};let n=j(we([])),i=j(!0),a=j(""),r=j(we({}));Ve(async()=>{await o()});async function o(){M(i,!0),M(a,"");try{M(n,await lg(),!0)}catch(A){M(a,String(A),!0)}finally{M(i,!1)}}function l(A){M(r,{...u(r),[A]:!u(r)[A]},!0)}function c(A){if(!A)return"jamais";try{return new Date(A).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return A}}function d(A){return Object.keys(A.static_headers??{}).length}function h(A){return Object.keys(A.dynamic_headers??{}).length}var f=T_(),v=p(f),g=p(v),m=p(g);ao(m,{size:16});var b=_(g,2);qt(b,{variant:"ghost",size:"sm",onclick:o,children:(A,z)=>{bs(A,{size:14})},$$slots:{default:!0}});var y=_(v,2);{var S=A=>{var z=b_();x(A,z)},k=A=>{var z=y_(),C=p(z);R(()=>D(C,u(a))),x(A,z)},w=A=>{var z=x_(),C=p(z);ao(C,{size:32}),x(A,z)},$=A=>{var z=it(),C=I(z);ie(C,17,()=>u(n),Re,(T,E)=>{he(T,{children:(L,N)=>{var Z=z_(),K=p(Z),V=p(K),X=p(V);{let zt=W(()=>s[u(E).provider_name]??"var(--fg-dim)");Ue(X,{get color(){return u(zt)},children:(Nt,fe)=>{var ue=Ht();R(()=>D(ue,u(E).provider_name)),x(Nt,ue)},$$slots:{default:!0}})}var J=_(X,2),xt=p(J);{var yt=zt=>{var Nt=Ht();R(()=>D(Nt,`${u(E).request_count??""} requetes`)),x(zt,Nt)};B(xt,zt=>{u(E).request_count!=null&&zt(yt)})}var Pt=_(J,2),F=p(Pt),O=_(V,2),H=p(O),tt=p(H),kt=_(H,2),q=p(kt),et=_(kt,2);{var Mt=zt=>{var Nt=k_();x(zt,Nt)};B(et,zt=>{u(E).always_streams&&zt(Mt)})}var ee=_(O,2),de=p(ee);{var U=zt=>{Nv(zt,{size:14})},jt=zt=>{Fv(zt,{size:14})};B(de,zt=>{u(r)[u(E).provider_name]?zt(U):zt(jt,!1)})}var Vt=_(K,2);{var Zt=zt=>{var Nt=C_(),fe=p(Nt);{var ue=St=>{var Ft=$_(),Kt=_(p(Ft),2);ie(Kt,21,()=>Object.entries(u(E).static_headers??{}),Re,(oe,be)=>{var ge=W(()=>Ur(u(be),2));let Jt=()=>u(ge)[0],Gt=()=>u(ge)[1];var Ot=w_(),st=p(Ot),lt=p(st),wt=_(st,2),Qt=p(wt);R(()=>{D(lt,Jt()),D(Qt,Gt())}),x(oe,Ot)}),x(St,Ft)},ft=W(()=>d(u(E))>0);B(fe,St=>{u(ft)&&St(ue)})}var At=_(fe,2);{var $t=St=>{var Ft=M_(),Kt=_(p(Ft),2);ie(Kt,21,()=>Object.entries(u(E).dynamic_headers??{}),Re,(oe,be)=>{var ge=W(()=>Ur(u(be),2));let Jt=()=>u(ge)[0],Gt=()=>u(ge)[1];var Ot=S_(),st=p(Ot),lt=p(st),wt=_(st,2),Qt=p(wt),Y=_(wt,2),Rt=p(Y);R(()=>{D(lt,Jt()),D(Qt,`[${Gt().pattern??""}]`),D(Rt,Gt().latest)}),x(oe,Ot)}),x(St,Ft)},G=W(()=>h(u(E))>0);B(At,St=>{u(G)&&St($t)})}var vt=_(At,2);{var _t=St=>{var Ft=A_(),Kt=p(Ft),oe=p(Kt),be=_(Kt,2);ie(be,21,()=>u(E).header_order,Re,(ge,Jt)=>{var Gt=P_(),Ot=p(Gt);R(()=>D(Ot,u(Jt))),x(ge,Gt)}),R(()=>D(oe,`Ordre (${u(E).header_order.length??""} headers)`)),x(St,Ft)};B(vt,St=>{u(E).header_order&&u(E).header_order.length>0&&St(_t)})}x(zt,Nt)};B(Vt,zt=>{u(r)[u(E).provider_name]&&zt(Zt)})}R((zt,Nt,fe)=>{D(F,zt),D(tt,`${Nt??""} static`),D(q,`${fe??""} dynamic`)},[()=>c(u(E).last_capture??u(E).captured_at),()=>d(u(E)),()=>h(u(E))]),nt("click",K,()=>l(u(E).provider_name)),nt("keydown",K,()=>{}),x(L,Z)},$$slots:{default:!0}})}),x(A,z)};B(y,A=>{u(i)?A(S):u(a)?A(k,1):u(n).length===0?A(w,2):A($,!1)})}x(e,f),ke()}De(["click","keydown"]);var D_=P('<span class="toggle-label svelte-eylgc7"> </span>'),O_=P('<button class="toggle-wrapper svelte-eylgc7" role="switch"><span><span></span></span> <!></button>');function gs(e,t){xe(t,!0);let s=_e(t,"checked",15,!1),n=_e(t,"disabled",3,!1);function i(){n()||(s(!s()),t.onchange?.(s()))}var a=O_(),r=p(a);let o;var l=p(r);let c;var d=_(r,2);{var h=f=>{var v=D_(),g=p(v);R(()=>D(g,t.label)),x(f,v)};B(d,f=>{t.label&&f(h)})}R(()=>{Dt(a,"aria-checked",s()),Dt(a,"aria-label",t.label),a.disabled=n(),o=Yt(r,1,"toggle-track svelte-eylgc7",null,o,{active:s()}),c=Yt(l,1,"toggle-thumb svelte-eylgc7",null,c,{active:s()})}),nt("click",a,i),x(e,a),ke()}De(["click"]);var R_=P("<button> </button>"),L_=P('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Auto-switch</span> <span class="option-desc svelte-j1t1ye">Changer de compte quand le quota atteint 85% (5h) / 90% (7j)</span></div> <!></div>'),I_=P('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Rotation automatique</span> <span class="option-desc svelte-j1t1ye">Alterner entre comptes a intervalle fixe</span></div> <!></div>'),j_=P('<div class="option-row svelte-j1t1ye"><div class="option-info svelte-j1t1ye"><span class="option-label svelte-j1t1ye">Intervalle rotation</span> <span class="option-desc svelte-j1t1ye">Minutes entre chaque changement</span></div> <input type="number" class="option-input svelte-j1t1ye" min="1" max="120"/></div>'),N_=P('<div class="strategy-options svelte-j1t1ye"><!> <!> <!></div>'),F_=P('<div class="strategy-section svelte-j1t1ye"><!> <!></div>'),B_=P('<div class="proxy-screen svelte-j1t1ye"><header class="screen-header svelte-j1t1ye"><h1 class="screen-title svelte-j1t1ye">Proxy</h1></header> <div class="tab-bar svelte-j1t1ye"></div> <div class="tab-content svelte-j1t1ye"><!></div></div>');function q_(e,t){xe(t,!0);let s=j("control"),n=j("priority"),i=j(null);Ve(()=>(Pe.load(),Pe.subscribe(S=>{M(i,S,!0)})));async function a(y){if(!u(i)?.proxy)return;const S={...u(i).proxy};y?(S.autoSwitchThreshold5h=.85,S.autoSwitchThreshold7d=.9):(S.autoSwitchThreshold5h=0,S.autoSwitchThreshold7d=0),await Pe.save({proxy:S})}async function r(y){u(i)?.proxy&&await Pe.save({proxy:{...u(i).proxy,rotationEnabled:y}})}async function o(y){if(!u(i)?.proxy)return;const S=parseInt(y.target.value);S>=1&&S<=120&&await Pe.save({proxy:{...u(i).proxy,rotationIntervalSecs:S*60}})}const l=[{id:"control",label:"Instances"},{id:"strategy",label:"Strategie"},{id:"models",label:"Modeles"},{id:"profiles",label:"Profils"}];var c=B_(),d=_(p(c),2);ie(d,21,()=>l,Re,(y,S)=>{var k=R_();let w;var $=p(k);R(()=>{w=Yt(k,1,"tab-item svelte-j1t1ye",null,w,{active:u(s)===u(S).id}),D($,u(S).label)}),nt("click",k,()=>M(s,u(S).id,!0)),x(y,k)});var h=_(d,2),f=p(h);{var v=y=>{o_(y,{})},g=y=>{var S=F_(),k=p(S);h_(k,{get selected(){return u(n)},set selected(A){M(n,A,!0)}});var w=_(k,2);{var $=A=>{var z=N_(),C=p(z);he(C,{hoverable:!1,children:(N,Z)=>{var K=L_(),V=_(p(K),2);{let X=W(()=>(u(i)?.proxy?.autoSwitchThreshold5h??0)>0);gs(V,{get checked(){return u(X)},onchange:a})}x(N,K)},$$slots:{default:!0}});var T=_(C,2);he(T,{hoverable:!1,children:(N,Z)=>{var K=I_(),V=_(p(K),2);{let X=W(()=>u(i)?.proxy?.rotationEnabled??!1);gs(V,{get checked(){return u(X)},onchange:r})}x(N,K)},$$slots:{default:!0}});var E=_(T,2);{var L=N=>{he(N,{hoverable:!1,children:(Z,K)=>{var V=j_(),X=_(p(V),2);R(J=>Ua(X,J),[()=>Math.round((u(i)?.proxy?.rotationIntervalSecs??3600)/60)]),nt("change",X,o),x(Z,V)},$$slots:{default:!0}})};B(E,N=>{u(i)?.proxy?.rotationEnabled&&N(L)})}x(A,z)};B(w,A=>{u(i)&&A($)})}x(y,S)},m=y=>{__(y,{})},b=y=>{E_(y,{})};B(f,y=>{u(s)==="control"?y(v):u(s)==="strategy"?y(g,1):u(s)==="models"?y(m,2):y(b,!1)})}x(e,c),ke()}De(["click","change"]);/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ca(e){return e+.5|0}const dn=(e,t,s)=>Math.max(Math.min(e,s),t);function Oi(e){return dn(ca(e*2.55),0,255)}function mn(e){return dn(ca(e*255),0,255)}function Ks(e){return dn(ca(e/2.55)/100,0,1)}function Rl(e){return dn(ca(e*100),0,100)}const ys={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},oo=[..."0123456789ABCDEF"],V_=e=>oo[e&15],H_=e=>oo[(e&240)>>4]+oo[e&15],ya=e=>(e&240)>>4===(e&15),W_=e=>ya(e.r)&&ya(e.g)&&ya(e.b)&&ya(e.a);function U_(e){var t=e.length,s;return e[0]==="#"&&(t===4||t===5?s={r:255&ys[e[1]]*17,g:255&ys[e[2]]*17,b:255&ys[e[3]]*17,a:t===5?ys[e[4]]*17:255}:(t===7||t===9)&&(s={r:ys[e[1]]<<4|ys[e[2]],g:ys[e[3]]<<4|ys[e[4]],b:ys[e[5]]<<4|ys[e[6]],a:t===9?ys[e[7]]<<4|ys[e[8]]:255})),s}const Y_=(e,t)=>e<255?t(e):"";function K_(e){var t=W_(e)?V_:H_;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Y_(e.a,t):void 0}const X_=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function _u(e,t,s){const n=t*Math.min(s,1-s),i=(a,r=(a+e/30)%12)=>s-n*Math.max(Math.min(r-3,9-r,1),-1);return[i(0),i(8),i(4)]}function G_(e,t,s){const n=(i,a=(i+e/60)%6)=>s-s*t*Math.max(Math.min(a,4-a,1),0);return[n(5),n(3),n(1)]}function J_(e,t,s){const n=_u(e,1,.5);let i;for(t+s>1&&(i=1/(t+s),t*=i,s*=i),i=0;i<3;i++)n[i]*=1-t-s,n[i]+=t;return n}function Q_(e,t,s,n,i){return e===i?(t-s)/n+(t<s?6:0):t===i?(s-e)/n+2:(e-t)/n+4}function qo(e){const s=e.r/255,n=e.g/255,i=e.b/255,a=Math.max(s,n,i),r=Math.min(s,n,i),o=(a+r)/2;let l,c,d;return a!==r&&(d=a-r,c=o>.5?d/(2-a-r):d/(a+r),l=Q_(s,n,i,d,a),l=l*60+.5),[l|0,c||0,o]}function Vo(e,t,s,n){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,s,n)).map(mn)}function Ho(e,t,s){return Vo(_u,e,t,s)}function Z_(e,t,s){return Vo(J_,e,t,s)}function t1(e,t,s){return Vo(G_,e,t,s)}function bu(e){return(e%360+360)%360}function e1(e){const t=X_.exec(e);let s=255,n;if(!t)return;t[5]!==n&&(s=t[6]?Oi(+t[5]):mn(+t[5]));const i=bu(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?n=Z_(i,a,r):t[1]==="hsv"?n=t1(i,a,r):n=Ho(i,a,r),{r:n[0],g:n[1],b:n[2],a:s}}function s1(e,t){var s=qo(e);s[0]=bu(s[0]+t),s=Ho(s),e.r=s[0],e.g=s[1],e.b=s[2]}function n1(e){if(!e)return;const t=qo(e),s=t[0],n=Rl(t[1]),i=Rl(t[2]);return e.a<255?`hsla(${s}, ${n}%, ${i}%, ${Ks(e.a)})`:`hsl(${s}, ${n}%, ${i}%)`}const Ll={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Il={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function i1(){const e={},t=Object.keys(Il),s=Object.keys(Ll);let n,i,a,r,o;for(n=0;n<t.length;n++){for(r=o=t[n],i=0;i<s.length;i++)a=s[i],o=o.replace(a,Ll[a]);a=parseInt(Il[r],16),e[o]=[a>>16&255,a>>8&255,a&255]}return e}let xa;function a1(e){xa||(xa=i1(),xa.transparent=[0,0,0,0]);const t=xa[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const r1=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function o1(e){const t=r1.exec(e);let s=255,n,i,a;if(t){if(t[7]!==n){const r=+t[7];s=t[8]?Oi(r):dn(r*255,0,255)}return n=+t[1],i=+t[3],a=+t[5],n=255&(t[2]?Oi(n):dn(n,0,255)),i=255&(t[4]?Oi(i):dn(i,0,255)),a=255&(t[6]?Oi(a):dn(a,0,255)),{r:n,g:i,b:a,a:s}}}function l1(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Ks(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Tr=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Qn=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function c1(e,t,s){const n=Qn(Ks(e.r)),i=Qn(Ks(e.g)),a=Qn(Ks(e.b));return{r:mn(Tr(n+s*(Qn(Ks(t.r))-n))),g:mn(Tr(i+s*(Qn(Ks(t.g))-i))),b:mn(Tr(a+s*(Qn(Ks(t.b))-a))),a:e.a+s*(t.a-e.a)}}function ka(e,t,s){if(e){let n=qo(e);n[t]=Math.max(0,Math.min(n[t]+n[t]*s,t===0?360:1)),n=Ho(n),e.r=n[0],e.g=n[1],e.b=n[2]}}function yu(e,t){return e&&Object.assign(t||{},e)}function jl(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=mn(e[3]))):(t=yu(e,{r:0,g:0,b:0,a:1}),t.a=mn(t.a)),t}function d1(e){return e.charAt(0)==="r"?o1(e):e1(e)}class Xi{constructor(t){if(t instanceof Xi)return t;const s=typeof t;let n;s==="object"?n=jl(t):s==="string"&&(n=U_(t)||a1(t)||d1(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=yu(this._rgb);return t&&(t.a=Ks(t.a)),t}set rgb(t){this._rgb=jl(t)}rgbString(){return this._valid?l1(this._rgb):void 0}hexString(){return this._valid?K_(this._rgb):void 0}hslString(){return this._valid?n1(this._rgb):void 0}mix(t,s){if(t){const n=this.rgb,i=t.rgb;let a;const r=s===a?.5:s,o=2*r-1,l=n.a-i.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-c,n.r=255&c*n.r+a*i.r+.5,n.g=255&c*n.g+a*i.g+.5,n.b=255&c*n.b+a*i.b+.5,n.a=r*n.a+(1-r)*i.a,this.rgb=n}return this}interpolate(t,s){return t&&(this._rgb=c1(this._rgb,t._rgb,s)),this}clone(){return new Xi(this.rgb)}alpha(t){return this._rgb.a=mn(t),this}clearer(t){const s=this._rgb;return s.a*=1-t,this}greyscale(){const t=this._rgb,s=ca(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=s,this}opaquer(t){const s=this._rgb;return s.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ka(this._rgb,2,t),this}darken(t){return ka(this._rgb,2,-t),this}saturate(t){return ka(this._rgb,1,t),this}desaturate(t){return ka(this._rgb,1,-t),this}rotate(t){return s1(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Hs(){}const u1=(()=>{let e=0;return()=>e++})();function ne(e){return e==null}function Ae(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ae(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Le(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function ps(e,t){return Le(e)?e:t}function Ut(e,t){return typeof e>"u"?t:e}const h1=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,xu=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function $e(e,t,s){if(e&&typeof e.call=="function")return e.apply(s,t)}function ye(e,t,s,n){let i,a,r;if(Ae(e))for(a=e.length,i=0;i<a;i++)t.call(s,e[i],i);else if(ae(e))for(r=Object.keys(e),a=r.length,i=0;i<a;i++)t.call(s,e[r[i]],r[i])}function Ga(e,t){let s,n,i,a;if(!e||!t||e.length!==t.length)return!1;for(s=0,n=e.length;s<n;++s)if(i=e[s],a=t[s],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function Ja(e){if(Ae(e))return e.map(Ja);if(ae(e)){const t=Object.create(null),s=Object.keys(e),n=s.length;let i=0;for(;i<n;++i)t[s[i]]=Ja(e[s[i]]);return t}return e}function ku(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function f1(e,t,s,n){if(!ku(e))return;const i=t[e],a=s[e];ae(i)&&ae(a)?Gi(i,a,n):t[e]=Ja(a)}function Gi(e,t,s){const n=Ae(t)?t:[t],i=n.length;if(!ae(e))return e;s=s||{};const a=s.merger||f1;let r;for(let o=0;o<i;++o){if(r=n[o],!ae(r))continue;const l=Object.keys(r);for(let c=0,d=l.length;c<d;++c)a(l[c],e,r,s)}return e}function Vi(e,t){return Gi(e,t,{merger:v1})}function v1(e,t,s){if(!ku(e))return;const n=t[e],i=s[e];ae(n)&&ae(i)?Vi(n,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Ja(i))}const Nl={"":e=>e,x:e=>e.x,y:e=>e.y};function p1(e){const t=e.split("."),s=[];let n="";for(const i of t)n+=i,n.endsWith("\\")?n=n.slice(0,-1)+".":(s.push(n),n="");return s}function g1(e){const t=p1(e);return s=>{for(const n of t){if(n==="")break;s=s&&s[n]}return s}}function kn(e,t){return(Nl[t]||(Nl[t]=g1(t)))(e)}function Wo(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Ji=e=>typeof e<"u",wn=e=>typeof e=="function",Fl=(e,t)=>{if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;return!0};function m1(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const pe=Math.PI,Se=2*pe,_1=Se+pe,Qa=Number.POSITIVE_INFINITY,b1=pe/180,je=pe/2,Pn=pe/4,Bl=pe*2/3,un=Math.log10,Bs=Math.sign;function Hi(e,t,s){return Math.abs(e-t)<s}function ql(e){const t=Math.round(e);e=Hi(e,t,e/1e3)?t:e;const s=Math.pow(10,Math.floor(un(e))),n=e/s;return(n<=1?1:n<=2?2:n<=5?5:10)*s}function y1(e){const t=[],s=Math.sqrt(e);let n;for(n=1;n<s;n++)e%n===0&&(t.push(n),t.push(e/n));return s===(s|0)&&t.push(s),t.sort((i,a)=>i-a).pop(),t}function x1(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function vi(e){return!x1(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function k1(e,t){const s=Math.round(e);return s-t<=e&&s+t>=e}function wu(e,t,s){let n,i,a;for(n=0,i=e.length;n<i;n++)a=e[n][s],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function Cs(e){return e*(pe/180)}function Uo(e){return e*(180/pe)}function Vl(e){if(!Le(e))return;let t=1,s=0;for(;Math.round(e*t)/t!==e;)t*=10,s++;return s}function $u(e,t){const s=t.x-e.x,n=t.y-e.y,i=Math.sqrt(s*s+n*n);let a=Math.atan2(n,s);return a<-.5*pe&&(a+=Se),{angle:a,distance:i}}function lo(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function w1(e,t){return(e-t+_1)%Se-pe}function ss(e){return(e%Se+Se)%Se}function Qi(e,t,s,n){const i=ss(e),a=ss(t),r=ss(s),o=ss(a-i),l=ss(r-i),c=ss(i-a),d=ss(i-r);return i===a||i===r||n&&a===r||o>l&&c<d}function Ye(e,t,s){return Math.max(t,Math.min(s,e))}function $1(e){return Ye(e,-32768,32767)}function Js(e,t,s,n=1e-6){return e>=Math.min(t,s)-n&&e<=Math.max(t,s)+n}function Yo(e,t,s){s=s||(r=>e[r]<t);let n=e.length-1,i=0,a;for(;n-i>1;)a=i+n>>1,s(a)?i=a:n=a;return{lo:i,hi:n}}const Qs=(e,t,s,n)=>Yo(e,s,n?i=>{const a=e[i][t];return a<s||a===s&&e[i+1][t]===s}:i=>e[i][t]<s),S1=(e,t,s)=>Yo(e,s,n=>e[n][t]>=s);function M1(e,t,s){let n=0,i=e.length;for(;n<i&&e[n]<t;)n++;for(;i>n&&e[i-1]>s;)i--;return n>0||i<e.length?e.slice(n,i):e}const Su=["push","pop","shift","splice","unshift"];function P1(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Su.forEach(s=>{const n="_onData"+Wo(s),i=e[s];Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value(...a){const r=i.apply(this,a);return e._chartjs.listeners.forEach(o=>{typeof o[n]=="function"&&o[n](...a)}),r}})})}function Hl(e,t){const s=e._chartjs;if(!s)return;const n=s.listeners,i=n.indexOf(t);i!==-1&&n.splice(i,1),!(n.length>0)&&(Su.forEach(a=>{delete e[a]}),delete e._chartjs)}function Mu(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Pu=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function Au(e,t){let s=[],n=!1;return function(...i){s=i,n||(n=!0,Pu.call(window,()=>{n=!1,e.apply(t,s)}))}}function A1(e,t){let s;return function(...n){return t?(clearTimeout(s),s=setTimeout(e,t,n)):e.apply(this,n),t}}const Ko=e=>e==="start"?"left":e==="end"?"right":"center",es=(e,t,s)=>e==="start"?t:e==="end"?s:(t+s)/2,C1=(e,t,s,n)=>e===(n?"left":"right")?s:e==="center"?(t+s)/2:t;function Cu(e,t,s){const n=t.length;let i=0,a=n;if(e._sorted){const{iScale:r,vScale:o,_parsed:l}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=r.axis,{min:h,max:f,minDefined:v,maxDefined:g}=r.getUserBounds();if(v){if(i=Math.min(Qs(l,d,h).lo,s?n:Qs(t,d,r.getPixelForValue(h)).lo),c){const m=l.slice(0,i+1).reverse().findIndex(b=>!ne(b[o.axis]));i-=Math.max(0,m)}i=Ye(i,0,n-1)}if(g){let m=Math.max(Qs(l,r.axis,f,!0).hi+1,s?0:Qs(t,d,r.getPixelForValue(f),!0).hi+1);if(c){const b=l.slice(m-1).findIndex(y=>!ne(y[o.axis]));m+=Math.max(0,b)}a=Ye(m,i,n)-i}else a=n-i}return{start:i,count:a}}function zu(e){const{xScale:t,yScale:s,_scaleRanges:n}=e,i={xmin:t.min,xmax:t.max,ymin:s.min,ymax:s.max};if(!n)return e._scaleRanges=i,!0;const a=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==s.min||n.ymax!==s.max;return Object.assign(n,i),a}const wa=e=>e===0||e===1,Wl=(e,t,s)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Se/s)),Ul=(e,t,s)=>Math.pow(2,-10*e)*Math.sin((e-t)*Se/s)+1,Wi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*je)+1,easeOutSine:e=>Math.sin(e*je),easeInOutSine:e=>-.5*(Math.cos(pe*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>wa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>wa(e)?e:Wl(e,.075,.3),easeOutElastic:e=>wa(e)?e:Ul(e,.075,.3),easeInOutElastic(e){return wa(e)?e:e<.5?.5*Wl(e*2,.1125,.45):.5+.5*Ul(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Wi.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Wi.easeInBounce(e*2)*.5:Wi.easeOutBounce(e*2-1)*.5+.5};function Xo(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Yl(e){return Xo(e)?e:new Xi(e)}function Er(e){return Xo(e)?e:new Xi(e).saturate(.5).darken(.1).hexString()}const z1=["x","y","borderWidth","radius","tension"],T1=["color","borderColor","backgroundColor"];function E1(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:T1},numbers:{type:"number",properties:z1}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function D1(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Kl=new Map;function O1(e,t){t=t||{};const s=e+JSON.stringify(t);let n=Kl.get(s);return n||(n=new Intl.NumberFormat(e,t),Kl.set(s,n)),n}function da(e,t,s){return O1(t,s).format(e)}const Tu={values(e){return Ae(e)?e:""+e},numeric(e,t,s){if(e===0)return"0";const n=this.chart.options.locale;let i,a=e;if(s.length>1){const c=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),a=R1(e,s)}const r=un(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:i,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),da(e,n,l)},logarithmic(e,t,s){if(e===0)return"0";const n=s[t].significand||e/Math.pow(10,Math.floor(un(e)));return[1,2,3,5,10,15].includes(n)||t>.8*s.length?Tu.numeric.call(this,e,t,s):""}};function R1(e,t){let s=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(s)>=1&&e!==Math.floor(e)&&(s=e-Math.floor(e)),s}var vr={formatters:Tu};function L1(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,s)=>s.lineWidth,tickColor:(t,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:vr.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Hn=Object.create(null),co=Object.create(null);function Ui(e,t){if(!t)return e;const s=t.split(".");for(let n=0,i=s.length;n<i;++n){const a=s[n];e=e[a]||(e[a]=Object.create(null))}return e}function Dr(e,t,s){return typeof t=="string"?Gi(Ui(e,t),s):Gi(Ui(e,""),t)}class I1{constructor(t,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>Er(i.backgroundColor),this.hoverBorderColor=(n,i)=>Er(i.borderColor),this.hoverColor=(n,i)=>Er(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(s)}set(t,s){return Dr(this,t,s)}get(t){return Ui(this,t)}describe(t,s){return Dr(co,t,s)}override(t,s){return Dr(Hn,t,s)}route(t,s,n,i){const a=Ui(this,t),r=Ui(this,n),o="_"+s;Object.defineProperties(a,{[o]:{value:a[s],writable:!0},[s]:{enumerable:!0,get(){const l=this[o],c=r[i];return ae(l)?Object.assign({},c,l):Ut(l,c)},set(l){this[o]=l}}})}apply(t){t.forEach(s=>s(this))}}var Ce=new I1({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[E1,D1,L1]);function j1(e){return!e||ne(e.size)||ne(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Za(e,t,s,n,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,s.push(i)),a>n&&(n=a),n}function N1(e,t,s,n){n=n||{};let i=n.data=n.data||{},a=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(i=n.data={},a=n.garbageCollect=[],n.font=t),e.save(),e.font=t;let r=0;const o=s.length;let l,c,d,h,f;for(l=0;l<o;l++)if(h=s[l],h!=null&&!Ae(h))r=Za(e,i,a,r,h);else if(Ae(h))for(c=0,d=h.length;c<d;c++)f=h[c],f!=null&&!Ae(f)&&(r=Za(e,i,a,r,f));e.restore();const v=a.length/2;if(v>s.length){for(l=0;l<v;l++)delete i[a[l]];a.splice(0,v)}return r}function An(e,t,s){const n=e.currentDevicePixelRatio,i=s!==0?Math.max(s/2,.5):0;return Math.round((t-i)*n)/n+i}function Xl(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function uo(e,t,s,n){Eu(e,t,s,n,null)}function Eu(e,t,s,n,i){let a,r,o,l,c,d,h,f;const v=t.pointStyle,g=t.rotation,m=t.radius;let b=(g||0)*b1;if(v&&typeof v=="object"&&(a=v.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(s,n),e.rotate(b),e.drawImage(v,-v.width/2,-v.height/2,v.width,v.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),v){default:i?e.ellipse(s,n,i/2,m,0,0,Se):e.arc(s,n,m,0,Se),e.closePath();break;case"triangle":d=i?i/2:m,e.moveTo(s+Math.sin(b)*d,n-Math.cos(b)*m),b+=Bl,e.lineTo(s+Math.sin(b)*d,n-Math.cos(b)*m),b+=Bl,e.lineTo(s+Math.sin(b)*d,n-Math.cos(b)*m),e.closePath();break;case"rectRounded":c=m*.516,l=m-c,r=Math.cos(b+Pn)*l,h=Math.cos(b+Pn)*(i?i/2-c:l),o=Math.sin(b+Pn)*l,f=Math.sin(b+Pn)*(i?i/2-c:l),e.arc(s-h,n-o,c,b-pe,b-je),e.arc(s+f,n-r,c,b-je,b),e.arc(s+h,n+o,c,b,b+je),e.arc(s-f,n+r,c,b+je,b+pe),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,d=i?i/2:l,e.rect(s-d,n-l,2*d,2*l);break}b+=Pn;case"rectRot":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+f,n-r),e.lineTo(s+h,n+o),e.lineTo(s-f,n+r),e.closePath();break;case"crossRot":b+=Pn;case"cross":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r);break;case"star":h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r),b+=Pn,h=Math.cos(b)*(i?i/2:m),r=Math.cos(b)*m,o=Math.sin(b)*m,f=Math.sin(b)*(i?i/2:m),e.moveTo(s-h,n-o),e.lineTo(s+h,n+o),e.moveTo(s+f,n-r),e.lineTo(s-f,n+r);break;case"line":r=i?i/2:Math.cos(b)*m,o=Math.sin(b)*m,e.moveTo(s-r,n-o),e.lineTo(s+r,n+o);break;case"dash":e.moveTo(s,n),e.lineTo(s+Math.cos(b)*(i?i/2:m),n+Math.sin(b)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Zs(e,t,s){return s=s||.5,!t||e&&e.x>t.left-s&&e.x<t.right+s&&e.y>t.top-s&&e.y<t.bottom+s}function pr(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function gr(e){e.restore()}function F1(e,t,s,n,i){if(!t)return e.lineTo(s.x,s.y);if(i==="middle"){const a=(t.x+s.x)/2;e.lineTo(a,t.y),e.lineTo(a,s.y)}else i==="after"!=!!n?e.lineTo(t.x,s.y):e.lineTo(s.x,t.y);e.lineTo(s.x,s.y)}function B1(e,t,s,n){if(!t)return e.lineTo(s.x,s.y);e.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?s.cp2x:s.cp1x,n?s.cp2y:s.cp1y,s.x,s.y)}function q1(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),ne(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function V1(e,t,s,n,i){if(i.strikethrough||i.underline){const a=e.measureText(n),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=s-a.actualBoundingBoxAscent,c=s+a.actualBoundingBoxDescent,d=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(r,d),e.lineTo(o,d),e.stroke()}}function H1(e,t){const s=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=s}function Wn(e,t,s,n,i,a={}){const r=Ae(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,q1(e,a),l=0;l<r.length;++l)c=r[l],a.backdrop&&H1(e,a.backdrop),o&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),ne(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(c,s,n,a.maxWidth)),e.fillText(c,s,n,a.maxWidth),V1(e,s,n,c,a),n+=Number(i.lineHeight);e.restore()}function Zi(e,t){const{x:s,y:n,w:i,h:a,radius:r}=t;e.arc(s+r.topLeft,n+r.topLeft,r.topLeft,1.5*pe,pe,!0),e.lineTo(s,n+a-r.bottomLeft),e.arc(s+r.bottomLeft,n+a-r.bottomLeft,r.bottomLeft,pe,je,!0),e.lineTo(s+i-r.bottomRight,n+a),e.arc(s+i-r.bottomRight,n+a-r.bottomRight,r.bottomRight,je,0,!0),e.lineTo(s+i,n+r.topRight),e.arc(s+i-r.topRight,n+r.topRight,r.topRight,0,-je,!0),e.lineTo(s+r.topLeft,n)}const W1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,U1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Y1(e,t){const s=(""+e).match(W1);if(!s||s[1]==="normal")return t*1.2;switch(e=+s[2],s[3]){case"px":return e;case"%":e/=100;break}return t*e}const K1=e=>+e||0;function Go(e,t){const s={},n=ae(t),i=n?Object.keys(t):t,a=ae(e)?n?r=>Ut(e[r],e[t[r]]):r=>e[r]:()=>e;for(const r of i)s[r]=K1(a(r));return s}function Du(e){return Go(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Fn(e){return Go(e,["topLeft","topRight","bottomLeft","bottomRight"])}function is(e){const t=Du(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function qe(e,t){e=e||{},t=t||Ce.font;let s=Ut(e.size,t.size);typeof s=="string"&&(s=parseInt(s,10));let n=Ut(e.style,t.style);n&&!(""+n).match(U1)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const i={family:Ut(e.family,t.family),lineHeight:Y1(Ut(e.lineHeight,t.lineHeight),s),size:s,style:n,weight:Ut(e.weight,t.weight),string:""};return i.string=j1(i),i}function Ri(e,t,s,n){let i,a,r;for(i=0,a=e.length;i<a;++i)if(r=e[i],r!==void 0&&r!==void 0)return r}function X1(e,t,s){const{min:n,max:i}=e,a=xu(t,(i-n)/2),r=(o,l)=>s&&o===0?0:o+l;return{min:r(n,-Math.abs(a)),max:r(i,a)}}function $n(e,t){return Object.assign(Object.create(e),t)}function Jo(e,t=[""],s,n,i=()=>e[0]){const a=s||e;typeof n>"u"&&(n=Iu("_fallback",e));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:n,_getTarget:i,override:o=>Jo([o,...e],t,a,n)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete e[0][l],!0},get(o,l){return Ru(o,l,()=>nb(l,t,e,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(o,l){return Jl(o).includes(l)},ownKeys(o){return Jl(o)},set(o,l,c){const d=o._storage||(o._storage=i());return o[l]=d[l]=c,delete o._keys,!0}})}function pi(e,t,s,n){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:s,_stack:new Set,_descriptors:Ou(e,n),setContext:a=>pi(e,a,s,n),override:a=>pi(e.override(a),t,s,n)};return new Proxy(i,{deleteProperty(a,r){return delete a[r],delete e[r],!0},get(a,r,o){return Ru(a,r,()=>J1(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(e,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,r)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,r){return Reflect.has(e,r)},ownKeys(){return Reflect.ownKeys(e)},set(a,r,o){return e[r]=o,delete a[r],!0}})}function Ou(e,t={scriptable:!0,indexable:!0}){const{_scriptable:s=t.scriptable,_indexable:n=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:s,indexable:n,isScriptable:wn(s)?s:()=>s,isIndexable:wn(n)?n:()=>n}}const G1=(e,t)=>e?e+Wo(t):t,Qo=(e,t)=>ae(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ru(e,t,s){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const n=s();return e[t]=n,n}function J1(e,t,s){const{_proxy:n,_context:i,_subProxy:a,_descriptors:r}=e;let o=n[t];return wn(o)&&r.isScriptable(t)&&(o=Q1(t,o,e,s)),Ae(o)&&o.length&&(o=Z1(t,o,e,r.isIndexable)),Qo(t,o)&&(o=pi(o,i,a&&a[t],r)),o}function Q1(e,t,s,n){const{_proxy:i,_context:a,_subProxy:r,_stack:o}=s;if(o.has(e))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+e);o.add(e);let l=t(a,r||n);return o.delete(e),Qo(e,l)&&(l=Zo(i._scopes,i,e,l)),l}function Z1(e,t,s,n){const{_proxy:i,_context:a,_subProxy:r,_descriptors:o}=s;if(typeof a.index<"u"&&n(e))return t[a.index%t.length];if(ae(t[0])){const l=t,c=i._scopes.filter(d=>d!==l);t=[];for(const d of l){const h=Zo(c,i,e,d);t.push(pi(h,a,r&&r[e],o))}}return t}function Lu(e,t,s){return wn(e)?e(t,s):e}const tb=(e,t)=>e===!0?t:typeof e=="string"?kn(t,e):void 0;function eb(e,t,s,n,i){for(const a of t){const r=tb(s,a);if(r){e.add(r);const o=Lu(r._fallback,s,i);if(typeof o<"u"&&o!==s&&o!==n)return o}else if(r===!1&&typeof n<"u"&&s!==n)return null}return!1}function Zo(e,t,s,n){const i=t._rootScopes,a=Lu(t._fallback,s,n),r=[...e,...i],o=new Set;o.add(n);let l=Gl(o,r,s,a||s,n);return l===null||typeof a<"u"&&a!==s&&(l=Gl(o,r,a,l,n),l===null)?!1:Jo(Array.from(o),[""],i,a,()=>sb(t,s,n))}function Gl(e,t,s,n,i){for(;s;)s=eb(e,t,s,n,i);return s}function sb(e,t,s){const n=e._getTarget();t in n||(n[t]={});const i=n[t];return Ae(i)&&ae(s)?s:i||{}}function nb(e,t,s,n){let i;for(const a of t)if(i=Iu(G1(a,e),s),typeof i<"u")return Qo(e,i)?Zo(s,n,e,i):i}function Iu(e,t){for(const s of t){if(!s)continue;const n=s[e];if(typeof n<"u")return n}}function Jl(e){let t=e._keys;return t||(t=e._keys=ib(e._scopes)),t}function ib(e){const t=new Set;for(const s of e)for(const n of Object.keys(s).filter(i=>!i.startsWith("_")))t.add(n);return Array.from(t)}function ju(e,t,s,n){const{iScale:i}=e,{key:a="r"}=this._parsing,r=new Array(n);let o,l,c,d;for(o=0,l=n;o<l;++o)c=o+s,d=t[c],r[o]={r:i.parse(kn(d,a),c)};return r}const ab=Number.EPSILON||1e-14,gi=(e,t)=>t<e.length&&!e[t].skip&&e[t],Nu=e=>e==="x"?"y":"x";function rb(e,t,s,n){const i=e.skip?t:e,a=t,r=s.skip?t:s,o=lo(a,i),l=lo(r,a);let c=o/(o+l),d=l/(o+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=n*c,f=n*d;return{previous:{x:a.x-h*(r.x-i.x),y:a.y-h*(r.y-i.y)},next:{x:a.x+f*(r.x-i.x),y:a.y+f*(r.y-i.y)}}}function ob(e,t,s){const n=e.length;let i,a,r,o,l,c=gi(e,0);for(let d=0;d<n-1;++d)if(l=c,c=gi(e,d+1),!(!l||!c)){if(Hi(t[d],0,ab)){s[d]=s[d+1]=0;continue}i=s[d]/t[d],a=s[d+1]/t[d],o=Math.pow(i,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),s[d]=i*r*t[d],s[d+1]=a*r*t[d])}}function lb(e,t,s="x"){const n=Nu(s),i=e.length;let a,r,o,l=gi(e,0);for(let c=0;c<i;++c){if(r=o,o=l,l=gi(e,c+1),!o)continue;const d=o[s],h=o[n];r&&(a=(d-r[s])/3,o[`cp1${s}`]=d-a,o[`cp1${n}`]=h-a*t[c]),l&&(a=(l[s]-d)/3,o[`cp2${s}`]=d+a,o[`cp2${n}`]=h+a*t[c])}}function cb(e,t="x"){const s=Nu(t),n=e.length,i=Array(n).fill(0),a=Array(n);let r,o,l,c=gi(e,0);for(r=0;r<n;++r)if(o=l,l=c,c=gi(e,r+1),!!l){if(c){const d=c[t]-l[t];i[r]=d!==0?(c[s]-l[s])/d:0}a[r]=o?c?Bs(i[r-1])!==Bs(i[r])?0:(i[r-1]+i[r])/2:i[r-1]:i[r]}ob(e,i,a),lb(e,a,t)}function $a(e,t,s){return Math.max(Math.min(e,s),t)}function db(e,t){let s,n,i,a,r,o=Zs(e[0],t);for(s=0,n=e.length;s<n;++s)r=a,a=o,o=s<n-1&&Zs(e[s+1],t),a&&(i=e[s],r&&(i.cp1x=$a(i.cp1x,t.left,t.right),i.cp1y=$a(i.cp1y,t.top,t.bottom)),o&&(i.cp2x=$a(i.cp2x,t.left,t.right),i.cp2y=$a(i.cp2y,t.top,t.bottom)))}function ub(e,t,s,n,i){let a,r,o,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")cb(e,i);else{let c=n?e[e.length-1]:e[0];for(a=0,r=e.length;a<r;++a)o=e[a],l=rb(c,o,e[Math.min(a+1,r-(n?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}t.capBezierPoints&&db(e,s)}function tl(){return typeof window<"u"&&typeof document<"u"}function el(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function tr(e,t,s){let n;return typeof e=="string"?(n=parseInt(e,10),e.indexOf("%")!==-1&&(n=n/100*t.parentNode[s])):n=e,n}const mr=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function hb(e,t){return mr(e).getPropertyValue(t)}const fb=["top","right","bottom","left"];function Bn(e,t,s){const n={};s=s?"-"+s:"";for(let i=0;i<4;i++){const a=fb[i];n[a]=parseFloat(e[t+"-"+a+s])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const vb=(e,t,s)=>(e>0||t>0)&&(!s||!s.shadowRoot);function pb(e,t){const s=e.touches,n=s&&s.length?s[0]:e,{offsetX:i,offsetY:a}=n;let r=!1,o,l;if(vb(i,a,e.target))o=i,l=a;else{const c=t.getBoundingClientRect();o=n.clientX-c.left,l=n.clientY-c.top,r=!0}return{x:o,y:l,box:r}}function En(e,t){if("native"in e)return e;const{canvas:s,currentDevicePixelRatio:n}=t,i=mr(s),a=i.boxSizing==="border-box",r=Bn(i,"padding"),o=Bn(i,"border","width"),{x:l,y:c,box:d}=pb(e,s),h=r.left+(d&&o.left),f=r.top+(d&&o.top);let{width:v,height:g}=t;return a&&(v-=r.width+o.width,g-=r.height+o.height),{x:Math.round((l-h)/v*s.width/n),y:Math.round((c-f)/g*s.height/n)}}function gb(e,t,s){let n,i;if(t===void 0||s===void 0){const a=e&&el(e);if(!a)t=e.clientWidth,s=e.clientHeight;else{const r=a.getBoundingClientRect(),o=mr(a),l=Bn(o,"border","width"),c=Bn(o,"padding");t=r.width-c.width-l.width,s=r.height-c.height-l.height,n=tr(o.maxWidth,a,"clientWidth"),i=tr(o.maxHeight,a,"clientHeight")}}return{width:t,height:s,maxWidth:n||Qa,maxHeight:i||Qa}}const hn=e=>Math.round(e*10)/10;function mb(e,t,s,n){const i=mr(e),a=Bn(i,"margin"),r=tr(i.maxWidth,e,"clientWidth")||Qa,o=tr(i.maxHeight,e,"clientHeight")||Qa,l=gb(e,t,s);let{width:c,height:d}=l;if(i.boxSizing==="content-box"){const f=Bn(i,"border","width"),v=Bn(i,"padding");c-=v.width+f.width,d-=v.height+f.height}return c=Math.max(0,c-a.width),d=Math.max(0,n?c/n:d-a.height),c=hn(Math.min(c,r,l.maxWidth)),d=hn(Math.min(d,o,l.maxHeight)),c&&!d&&(d=hn(c/2)),(t!==void 0||s!==void 0)&&n&&l.height&&d>l.height&&(d=l.height,c=hn(Math.floor(d*n))),{width:c,height:d}}function Ql(e,t,s){const n=t||1,i=hn(e.height*n),a=hn(e.width*n);e.height=hn(e.height),e.width=hn(e.width);const r=e.canvas;return r.style&&(s||!r.style.height&&!r.style.width)&&(r.style.height=`${e.height}px`,r.style.width=`${e.width}px`),e.currentDevicePixelRatio!==n||r.height!==i||r.width!==a?(e.currentDevicePixelRatio=n,r.height=i,r.width=a,e.ctx.setTransform(n,0,0,n,0,0),!0):!1}const _b=(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};tl()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e})();function Zl(e,t){const s=hb(e,t),n=s&&s.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Dn(e,t,s,n){return{x:e.x+s*(t.x-e.x),y:e.y+s*(t.y-e.y)}}function bb(e,t,s,n){return{x:e.x+s*(t.x-e.x),y:n==="middle"?s<.5?e.y:t.y:n==="after"?s<1?e.y:t.y:s>0?t.y:e.y}}function yb(e,t,s,n){const i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},r=Dn(e,i,s),o=Dn(i,a,s),l=Dn(a,t,s),c=Dn(r,o,s),d=Dn(o,l,s);return Dn(c,d,s)}const xb=function(e,t){return{x(s){return e+e+t-s},setWidth(s){t=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,n){return s-n},leftForLtr(s,n){return s-n}}},kb=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function si(e,t,s){return e?xb(t,s):kb()}function Fu(e,t){let s,n;(t==="ltr"||t==="rtl")&&(s=e.canvas.style,n=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",t,"important"),e.prevTextDirection=n)}function Bu(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function qu(e){return e==="angle"?{between:Qi,compare:w1,normalize:ss}:{between:Js,compare:(t,s)=>t-s,normalize:t=>t}}function tc({start:e,end:t,count:s,loop:n,style:i}){return{start:e%s,end:t%s,loop:n&&(t-e+1)%s===0,style:i}}function wb(e,t,s){const{property:n,start:i,end:a}=s,{between:r,normalize:o}=qu(n),l=t.length;let{start:c,end:d,loop:h}=e,f,v;if(h){for(c+=l,d+=l,f=0,v=l;f<v&&r(o(t[c%l][n]),i,a);++f)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:e.style}}function Vu(e,t,s){if(!s)return[e];const{property:n,start:i,end:a}=s,r=t.length,{compare:o,between:l,normalize:c}=qu(n),{start:d,end:h,loop:f,style:v}=wb(e,t,s),g=[];let m=!1,b=null,y,S,k;const w=()=>l(i,k,y)&&o(i,k)!==0,$=()=>o(a,y)===0||l(a,k,y),A=()=>m||w(),z=()=>!m||$();for(let C=d,T=d;C<=h;++C)S=t[C%r],!S.skip&&(y=c(S[n]),y!==k&&(m=l(y,i,a),b===null&&A()&&(b=o(y,i)===0?C:T),b!==null&&z()&&(g.push(tc({start:b,end:C,loop:f,count:r,style:v})),b=null),T=C,k=y));return b!==null&&g.push(tc({start:b,end:h,loop:f,count:r,style:v})),g}function Hu(e,t){const s=[],n=e.segments;for(let i=0;i<n.length;i++){const a=Vu(n[i],e.points,t);a.length&&s.push(...a)}return s}function $b(e,t,s,n){let i=0,a=t-1;if(s&&!n)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,s&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Sb(e,t,s,n){const i=e.length,a=[];let r=t,o=e[t],l;for(l=t+1;l<=s;++l){const c=e[l%i];c.skip||c.stop?o.skip||(n=!1,a.push({start:t%i,end:(l-1)%i,loop:n}),t=r=c.stop?l:null):(r=l,o.skip&&(t=l)),o=c}return r!==null&&a.push({start:t%i,end:r%i,loop:n}),a}function Mb(e,t){const s=e.points,n=e.options.spanGaps,i=s.length;if(!i)return[];const a=!!e._loop,{start:r,end:o}=$b(s,i,a,n);if(n===!0)return ec(e,[{start:r,end:o,loop:a}],s,t);const l=o<r?o+i:o,c=!!e._fullLoop&&r===0&&o===i-1;return ec(e,Sb(s,r,l,c),s,t)}function ec(e,t,s,n){return!n||!n.setContext||!s?t:Pb(e,t,s,n)}function Pb(e,t,s,n){const i=e._chart.getContext(),a=sc(e.options),{_datasetIndex:r,options:{spanGaps:o}}=e,l=s.length,c=[];let d=a,h=t[0].start,f=h;function v(g,m,b,y){const S=o?-1:1;if(g!==m){for(g+=l;s[g%l].skip;)g-=S;for(;s[m%l].skip;)m+=S;g%l!==m%l&&(c.push({start:g%l,end:m%l,loop:b,style:y}),d=y,h=m%l)}}for(const g of t){h=o?h:g.start;let m=s[h%l],b;for(f=h+1;f<=g.end;f++){const y=s[f%l];b=sc(n.setContext($n(i,{type:"segment",p0:m,p1:y,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:r}))),Ab(b,d)&&v(h,f-1,g.loop,d),m=y,d=b}h<f-1&&v(h,f-1,g.loop,d)}return c}function sc(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Ab(e,t){if(!t)return!1;const s=[],n=function(i,a){return Xo(a)?(s.includes(a)||s.push(a),s.indexOf(a)):a};return JSON.stringify(e,n)!==JSON.stringify(t,n)}function Sa(e,t,s){return e.options.clip?e[s]:t[s]}function Cb(e,t){const{xScale:s,yScale:n}=e;return s&&n?{left:Sa(s,t,"left"),right:Sa(s,t,"right"),top:Sa(n,t,"top"),bottom:Sa(n,t,"bottom")}:t}function Wu(e,t){const s=t._clip;if(s.disabled)return!1;const n=Cb(t,e.chartArea);return{left:s.left===!1?0:n.left-(s.left===!0?0:s.left),right:s.right===!1?e.width:n.right+(s.right===!0?0:s.right),top:s.top===!1?0:n.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?e.height:n.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class zb{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,s,n,i){const a=s.listeners[i],r=s.duration;a.forEach(o=>o({chart:t,initial:s.initial,numSteps:r,currentStep:Math.min(n-s.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=Pu.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let s=0;this._charts.forEach((n,i)=>{if(!n.running||!n.items.length)return;const a=n.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(i.draw(),this._notify(i,n,t,"progress")),a.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),s+=a.length}),this._lastDate=t,s===0&&(this._running=!1)}_getAnims(t){const s=this._charts;let n=s.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(t,n)),n}listen(t,s,n){this._getAnims(t).listeners[s].push(n)}add(t,s){!s||!s.length||this._getAnims(t).items.push(...s)}has(t){return this._getAnims(t).items.length>0}start(t){const s=this._charts.get(t);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((n,i)=>Math.max(n,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const s=this._charts.get(t);return!(!s||!s.running||!s.items.length)}stop(t){const s=this._charts.get(t);if(!s||!s.items.length)return;const n=s.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();s.items=[],this._notify(t,s,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ws=new zb;const nc="transparent",Tb={boolean(e,t,s){return s>.5?t:e},color(e,t,s){const n=Yl(e||nc),i=n.valid&&Yl(t||nc);return i&&i.valid?i.mix(n,s).hexString():t},number(e,t,s){return e+(t-e)*s}};class Eb{constructor(t,s,n,i){const a=s[n];i=Ri([t.to,i,a,t.from]);const r=Ri([t.from,a,i]);this._active=!0,this._fn=t.fn||Tb[t.type||typeof r],this._easing=Wi[t.easing]||Wi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=s,this._prop=n,this._from=r,this._to=i,this._promises=void 0}active(){return this._active}update(t,s,n){if(this._active){this._notify(!1);const i=this._target[this._prop],a=n-this._start,r=this._duration-a;this._start=n,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=Ri([t.to,s,i,t.from]),this._from=Ri([t.from,i,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const s=t-this._start,n=this._duration,i=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||s<n),!this._active){this._target[i]=o,this._notify(!0);return}if(s<0){this._target[i]=a;return}l=s/n%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((s,n)=>{t.push({res:s,rej:n})})}_notify(t){const s=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][s]()}}class Uu{constructor(t,s){this._chart=t,this._properties=new Map,this.configure(s)}configure(t){if(!ae(t))return;const s=Object.keys(Ce.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const a=t[i];if(!ae(a))return;const r={};for(const o of s)r[o]=a[o];(Ae(a.properties)&&a.properties||[i]).forEach(o=>{(o===i||!n.has(o))&&n.set(o,r)})})}_animateOptions(t,s){const n=s.options,i=Ob(t,n);if(!i)return[];const a=this._createAnimations(i,n);return n.$shared&&Db(t.options.$animations,n).then(()=>{t.options=n},()=>{}),a}_createAnimations(t,s){const n=this._properties,i=[],a=t.$animations||(t.$animations={}),r=Object.keys(s),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,s));continue}const d=s[c];let h=a[c];const f=n.get(c);if(h)if(f&&h.active()){h.update(f,d,o);continue}else h.cancel();if(!f||!f.duration){t[c]=d;continue}a[c]=h=new Eb(f,t,c,d),i.push(h)}return i}update(t,s){if(this._properties.size===0){Object.assign(t,s);return}const n=this._createAnimations(t,s);if(n.length)return Ws.add(this._chart,n),!0}}function Db(e,t){const s=[],n=Object.keys(t);for(let i=0;i<n.length;i++){const a=e[n[i]];a&&a.active()&&s.push(a.wait())}return Promise.all(s)}function Ob(e,t){if(!t)return;let s=e.options;if(!s){e.options=t;return}return s.$shared&&(e.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function ic(e,t){const s=e&&e.options||{},n=s.reverse,i=s.min===void 0?t:0,a=s.max===void 0?t:0;return{start:n?a:i,end:n?i:a}}function Rb(e,t,s){if(s===!1)return!1;const n=ic(e,s),i=ic(t,s);return{top:i.end,right:n.end,bottom:i.start,left:n.start}}function Lb(e){let t,s,n,i;return ae(e)?(t=e.top,s=e.right,n=e.bottom,i=e.left):t=s=n=i=e,{top:t,right:s,bottom:n,left:i,disabled:e===!1}}function Yu(e,t){const s=[],n=e._getSortedDatasetMetas(t);let i,a;for(i=0,a=n.length;i<a;++i)s.push(n[i].index);return s}function ac(e,t,s,n={}){const i=e.keys,a=n.mode==="single";let r,o,l,c;if(t===null)return;let d=!1;for(r=0,o=i.length;r<o;++r){if(l=+i[r],l===s){if(d=!0,n.all)continue;break}c=e.values[l],Le(c)&&(a||t===0||Bs(t)===Bs(c))&&(t+=c)}return!d&&!n.all?0:t}function Ib(e,t){const{iScale:s,vScale:n}=t,i=s.axis==="x"?"x":"y",a=n.axis==="x"?"x":"y",r=Object.keys(e),o=new Array(r.length);let l,c,d;for(l=0,c=r.length;l<c;++l)d=r[l],o[l]={[i]:d,[a]:e[d]};return o}function Or(e,t){const s=e&&e.options.stacked;return s||s===void 0&&t.stack!==void 0}function jb(e,t,s){return`${e.id}.${t.id}.${s.stack||s.type}`}function Nb(e){const{min:t,max:s,minDefined:n,maxDefined:i}=e.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:i?s:Number.POSITIVE_INFINITY}}function Fb(e,t,s){const n=e[t]||(e[t]={});return n[s]||(n[s]={})}function rc(e,t,s,n){for(const i of t.getMatchingVisibleMetas(n).reverse()){const a=e[i.index];if(s&&a>0||!s&&a<0)return i.index}return null}function oc(e,t){const{chart:s,_cachedMeta:n}=e,i=s._stacks||(s._stacks={}),{iScale:a,vScale:r,index:o}=n,l=a.axis,c=r.axis,d=jb(a,r,n),h=t.length;let f;for(let v=0;v<h;++v){const g=t[v],{[l]:m,[c]:b}=g,y=g._stacks||(g._stacks={});f=y[c]=Fb(i,d,m),f[o]=b,f._top=rc(f,r,!0,n.type),f._bottom=rc(f,r,!1,n.type);const S=f._visualValues||(f._visualValues={});S[o]=b}}function Rr(e,t){const s=e.scales;return Object.keys(s).filter(n=>s[n].axis===t).shift()}function Bb(e,t){return $n(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function qb(e,t,s){return $n(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:s,index:t,mode:"default",type:"data"})}function Pi(e,t){const s=e.controller.index,n=e.vScale&&e.vScale.axis;if(n){t=t||e._parsed;for(const i of t){const a=i._stacks;if(!a||a[n]===void 0||a[n][s]===void 0)return;delete a[n][s],a[n]._visualValues!==void 0&&a[n]._visualValues[s]!==void 0&&delete a[n]._visualValues[s]}}}const Lr=e=>e==="reset"||e==="none",lc=(e,t)=>t?e:Object.assign({},e),Vb=(e,t,s)=>e&&!t.hidden&&t._stacked&&{keys:Yu(s,!0),values:null};class Sn{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,s){this.chart=t,this._ctx=t.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Or(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Pi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,s=this._cachedMeta,n=this.getDataset(),i=(h,f,v,g)=>h==="x"?f:h==="r"?g:v,a=s.xAxisID=Ut(n.xAxisID,Rr(t,"x")),r=s.yAxisID=Ut(n.yAxisID,Rr(t,"y")),o=s.rAxisID=Ut(n.rAxisID,Rr(t,"r")),l=s.indexAxis,c=s.iAxisID=i(l,a,r,o),d=s.vAxisID=i(l,r,a,o);s.xScale=this.getScaleForId(a),s.yScale=this.getScaleForId(r),s.rScale=this.getScaleForId(o),s.iScale=this.getScaleForId(c),s.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const s=this._cachedMeta;return t===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Hl(this._data,this),t._stacked&&Pi(t)}_dataCheck(){const t=this.getDataset(),s=t.data||(t.data=[]),n=this._data;if(ae(s)){const i=this._cachedMeta;this._data=Ib(s,i)}else if(n!==s){if(n){Hl(n,this);const i=this._cachedMeta;Pi(i),i._parsed=[]}s&&Object.isExtensible(s)&&P1(s,this),this._syncList=[],this._data=s}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const s=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const a=s._stacked;s._stacked=Or(s.vScale,s),s.stack!==n.stack&&(i=!0,Pi(s),s.stack=n.stack),this._resyncElements(t),(i||a!==s._stacked)&&(oc(this,s._parsed),s._stacked=Or(s.vScale,s))}configure(){const t=this.chart.config,s=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),s,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,s){const{_cachedMeta:n,_data:i}=this,{iScale:a,_stacked:r}=n,o=a.axis;let l=t===0&&s===i.length?!0:n._sorted,c=t>0&&n._parsed[t-1],d,h,f;if(this._parsing===!1)n._parsed=i,n._sorted=!0,f=i;else{Ae(i[t])?f=this.parseArrayData(n,i,t,s):ae(i[t])?f=this.parseObjectData(n,i,t,s):f=this.parsePrimitiveData(n,i,t,s);const v=()=>h[o]===null||c&&h[o]<c[o];for(d=0;d<s;++d)n._parsed[d+t]=h=f[d],l&&(v()&&(l=!1),c=h);n._sorted=l}r&&oc(this,f)}parsePrimitiveData(t,s,n,i){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,c=a.getLabels(),d=a===r,h=new Array(i);let f,v,g;for(f=0,v=i;f<v;++f)g=f+n,h[f]={[o]:d||a.parse(c[g],g),[l]:r.parse(s[g],g)};return h}parseArrayData(t,s,n,i){const{xScale:a,yScale:r}=t,o=new Array(i);let l,c,d,h;for(l=0,c=i;l<c;++l)d=l+n,h=s[d],o[l]={x:a.parse(h[0],d),y:r.parse(h[1],d)};return o}parseObjectData(t,s,n,i){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let d,h,f,v;for(d=0,h=i;d<h;++d)f=d+n,v=s[f],c[d]={x:a.parse(kn(v,o),f),y:r.parse(kn(v,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,s,n){const i=this.chart,a=this._cachedMeta,r=s[t.axis],o={keys:Yu(i,!0),values:s._stacks[t.axis]._visualValues};return ac(o,r,a.index,{mode:n})}updateRangeFromParsed(t,s,n,i){const a=n[s.axis];let r=a===null?NaN:a;const o=i&&n._stacks[s.axis];i&&o&&(i.values=o,r=ac(i,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,s){const n=this._cachedMeta,i=n._parsed,a=n._sorted&&t===n.iScale,r=i.length,o=this._getOtherScale(t),l=Vb(s,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=Nb(o);let f,v;function g(){v=i[f];const m=v[o.axis];return!Le(v[t.axis])||d>m||h<m}for(f=0;f<r&&!(!g()&&(this.updateRangeFromParsed(c,t,v,l),a));++f);if(a){for(f=r-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(c,t,v,l);break}}return c}getAllParsedValues(t){const s=this._cachedMeta._parsed,n=[];let i,a,r;for(i=0,a=s.length;i<a;++i)r=s[i][t.axis],Le(r)&&n.push(r);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const s=this._cachedMeta,n=s.iScale,i=s.vScale,a=this.getParsed(t);return{label:n?""+n.getLabelForValue(a[n.axis]):"",value:i?""+i.getLabelForValue(a[i.axis]):""}}_update(t){const s=this._cachedMeta;this.update(t||"default"),s._clip=Lb(Ut(this.options.clip,Rb(s.xScale,s.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,s=this.chart,n=this._cachedMeta,i=n.data||[],a=s.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||i.length-o,c=this.options.drawActiveElementsOnTop;let d;for(n.dataset&&n.dataset.draw(t,a,o,l),d=o;d<o+l;++d){const h=i[d];h.hidden||(h.active&&c?r.push(h):h.draw(t,a))}for(d=0;d<r.length;++d)r[d].draw(t,a)}getStyle(t,s){const n=s?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,s,n){const i=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=qb(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=i.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Bb(this.chart.getContext(),this.index)),a.dataset=i,a.index=a.datasetIndex=this.index;return a.active=!!s,a.mode=n,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,s){return this._resolveElementOptions(this.dataElementType.id,s,t)}_resolveElementOptions(t,s="default",n){const i=s==="active",a=this._cachedDataOpts,r=t+"-"+s,o=a[r],l=this.enableOptionSharing&&Ji(n);if(o)return lc(o,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),d),v=Object.keys(Ce.elements[t]),g=()=>this.getContext(n,i,s),m=c.resolveNamedOptions(f,v,g,h);return m.$shared&&(m.$shared=l,a[r]=Object.freeze(lc(m,l))),m}_resolveAnimations(t,s,n){const i=this.chart,a=this._cachedDataOpts,r=`animation-${s}`,o=a[r];if(o)return o;let l;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,s),f=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(f,this.getContext(t,n,s))}const c=new Uu(i,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,s){return!s||Lr(t)||this.chart._animationsDisabled}_getSharedOptions(t,s){const n=this.resolveDataElementOptions(t,s),i=this._sharedOptions,a=this.getSharedOptions(n),r=this.includeOptions(s,a)||a!==i;return this.updateSharedOptions(a,s,n),{sharedOptions:a,includeOptions:r}}updateElement(t,s,n,i){Lr(i)?Object.assign(t,n):this._resolveAnimations(s,i).update(t,n)}updateSharedOptions(t,s,n){t&&!Lr(s)&&this._resolveAnimations(void 0,s).update(t,n)}_setStyle(t,s,n,i){t.active=i;const a=this.getStyle(s,i);this._resolveAnimations(s,n,i).update(t,{options:!i&&this.getSharedOptions(a)||a})}removeHoverStyle(t,s,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,s,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const s=this._data,n=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const i=n.length,a=s.length,r=Math.min(a,i);r&&this.parse(0,r),a>i?this._insertElements(i,a-i,t):a<i&&this._removeElements(a,i-a)}_insertElements(t,s,n=!0){const i=this._cachedMeta,a=i.data,r=t+s;let o;const l=c=>{for(c.length+=s,o=c.length-1;o>=r;o--)c[o]=c[o-s]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,s),n&&this.updateElements(a,t,s,"reset")}updateElements(t,s,n,i){}_removeElements(t,s){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,s);n._stacked&&Pi(n,i)}n.data.splice(t,s)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[s,n,i]=t;this[s](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,s){s&&this._sync(["_removeElements",t,s]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Hb(e,t){if(!e._cache.$bar){const s=e.getMatchingVisibleMetas(t);let n=[];for(let i=0,a=s.length;i<a;i++)n=n.concat(s[i].controller.getAllParsedValues(e));e._cache.$bar=Mu(n.sort((i,a)=>i-a))}return e._cache.$bar}function Wb(e){const t=e.iScale,s=Hb(t,e.type);let n=t._length,i,a,r,o;const l=()=>{r===32767||r===-32768||(Ji(o)&&(n=Math.min(n,Math.abs(r-o)||n)),o=r)};for(i=0,a=s.length;i<a;++i)r=t.getPixelForValue(s[i]),l();for(o=void 0,i=0,a=t.ticks.length;i<a;++i)r=t.getPixelForTick(i),l();return n}function Ub(e,t,s,n){const i=s.barThickness;let a,r;return ne(i)?(a=t.min*s.categoryPercentage,r=s.barPercentage):(a=i*n,r=1),{chunk:a/n,ratio:r,start:t.pixels[e]-a/2}}function Yb(e,t,s,n){const i=t.pixels,a=i[e];let r=e>0?i[e-1]:null,o=e<i.length-1?i[e+1]:null;const l=s.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const c=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/n,ratio:s.barPercentage,start:c}}function Kb(e,t,s,n){const i=s.parse(e[0],n),a=s.parse(e[1],n),r=Math.min(i,a),o=Math.max(i,a);let l=r,c=o;Math.abs(r)>Math.abs(o)&&(l=o,c=r),t[s.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:a,min:r,max:o}}function Ku(e,t,s,n){return Ae(e)?Kb(e,t,s,n):t[s.axis]=s.parse(e,n),t}function cc(e,t,s,n){const i=e.iScale,a=e.vScale,r=i.getLabels(),o=i===a,l=[];let c,d,h,f;for(c=s,d=s+n;c<d;++c)f=t[c],h={},h[i.axis]=o||i.parse(r[c],c),l.push(Ku(f,h,a,c));return l}function Ir(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Xb(e,t,s){return e!==0?Bs(e):(t.isHorizontal()?1:-1)*(t.min>=s?1:-1)}function Gb(e){let t,s,n,i,a;return e.horizontal?(t=e.base>e.x,s="left",n="right"):(t=e.base<e.y,s="bottom",n="top"),t?(i="end",a="start"):(i="start",a="end"),{start:s,end:n,reverse:t,top:i,bottom:a}}function Jb(e,t,s,n){let i=t.borderSkipped;const a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:c,bottom:d}=Gb(e);i==="middle"&&s&&(e.enableBorderRadius=!0,(s._top||0)===n?i=c:(s._bottom||0)===n?i=d:(a[dc(d,r,o,l)]=!0,i=c)),a[dc(i,r,o,l)]=!0,e.borderSkipped=a}function dc(e,t,s,n){return n?(e=Qb(e,t,s),e=uc(e,s,t)):e=uc(e,t,s),e}function Qb(e,t,s){return e===t?s:e===s?t:e}function uc(e,t,s){return e==="start"?t:e==="end"?s:e}function Zb(e,{inflateAmount:t},s){e.inflateAmount=t==="auto"?s===1?.33:0:t}class t0 extends Sn{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,s,n,i){return cc(t,s,n,i)}parseArrayData(t,s,n,i){return cc(t,s,n,i)}parseObjectData(t,s,n,i){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?o:l,d=r.axis==="x"?o:l,h=[];let f,v,g,m;for(f=n,v=n+i;f<v;++f)m=s[f],g={},g[a.axis]=a.parse(kn(m,c),f),h.push(Ku(kn(m,d),g,r,f));return h}updateRangeFromParsed(t,s,n,i){super.updateRangeFromParsed(t,s,n,i);const a=n._custom;a&&s===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const s=this._cachedMeta,{iScale:n,vScale:i}=s,a=this.getParsed(t),r=a._custom,o=Ir(r)?"["+r.start+", "+r.end+"]":""+i.getLabelForValue(a[i.axis]);return{label:""+n.getLabelForValue(a[n.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,t)}updateElements(t,s,n,i){const a=i==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),c=o.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(s,i);for(let v=s;v<s+n;v++){const g=this.getParsed(v),m=a||ne(g[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(v),b=this._calculateBarIndexPixels(v,d),y=(g._stacks||{})[o.axis],S={horizontal:c,base:m.base,enableBorderRadius:!y||Ir(g._custom)||r===y._top||r===y._bottom,x:c?m.head:b.center,y:c?b.center:m.head,height:c?b.size:Math.abs(m.size),width:c?Math.abs(m.size):b.size};f&&(S.options=h||this.resolveDataElementOptions(v,t[v].active?"active":i));const k=S.options||t[v].options;Jb(S,k,y,r),Zb(S,k,d.ratio),this.updateElement(t[v],v,S,i)}}_getStacks(t,s){const{iScale:n}=this._cachedMeta,i=n.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),a=n.options.stacked,r=[],o=this._cachedMeta.controller.getParsed(s),l=o&&o[n.axis],c=d=>{const h=d._parsed.find(v=>v[n.axis]===l),f=h&&h[d.vScale.axis];if(ne(f)||isNaN(f))return!0};for(const d of i)if(!(s!==void 0&&c(d))&&((a===!1||r.indexOf(d.stack)===-1||a===void 0&&d.stack===void 0)&&r.push(d.stack),d.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(t).filter(n=>t[n].axis===s).shift()}_getAxis(){const t={},s=this.getFirstScaleIdForIndexAxis();for(const n of this.chart.data.datasets)t[Ut(this.chart.options.indexAxis==="x"?n.xAxisID:n.yAxisID,s)]=!0;return Object.keys(t)}_getStackIndex(t,s,n){const i=this._getStacks(t,n),a=s!==void 0?i.indexOf(s):-1;return a===-1?i.length-1:a}_getRuler(){const t=this.options,s=this._cachedMeta,n=s.iScale,i=[];let a,r;for(a=0,r=s.data.length;a<r;++a)i.push(n.getPixelForValue(this.getParsed(a)[n.axis],a));const o=t.barThickness;return{min:o||Wb(s),pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:s,_stacked:n,index:i},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),c=l._custom,d=Ir(c);let h=l[s.axis],f=0,v=n?this.applyStack(s,l,n):h,g,m;v!==h&&(f=v-h,v=h),d&&(h=c.barStart,v=c.barEnd-c.barStart,h!==0&&Bs(h)!==Bs(c.barEnd)&&(f=0),f+=h);const b=!ne(a)&&!d?a:f;let y=s.getPixelForValue(b);if(this.chart.getDataVisibility(t)?g=s.getPixelForValue(f+v):g=y,m=g-y,Math.abs(m)<r){m=Xb(m,s,o)*r,h===o&&(y-=m/2);const S=s.getPixelForDecimal(0),k=s.getPixelForDecimal(1),w=Math.min(S,k),$=Math.max(S,k);y=Math.max(Math.min(y,$),w),g=y+m,n&&!d&&(l._stacks[s.axis]._visualValues[i]=s.getValueForPixel(g)-s.getValueForPixel(y))}if(y===s.getPixelForValue(o)){const S=Bs(m)*s.getLineWidthForValue(o)/2;y+=S,m-=S}return{size:m,base:y,head:g,center:g+m/2}}_calculateBarIndexPixels(t,s){const n=s.scale,i=this.options,a=i.skipNull,r=Ut(i.maxBarThickness,1/0);let o,l;const c=this._getAxisCount();if(s.grouped){const d=a?this._getStackCount(t):s.stackCount,h=i.barThickness==="flex"?Yb(t,s,i,d*c):Ub(t,s,i,d*c),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,v=this._getAxis().indexOf(Ut(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+v;o=h.start+h.chunk*g+h.chunk/2,l=Math.min(r,h.chunk*h.ratio)}else o=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(r,s.min*s.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,s=t.vScale,n=t.data,i=n.length;let a=0;for(;a<i;++a)this.getParsed(a)[s.axis]!==null&&!n[a].hidden&&n[a].draw(this._ctx)}}class e0 extends Sn{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,s,n,i){const a=super.parsePrimitiveData(t,s,n,i);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+n).radius;return a}parseArrayData(t,s,n,i){const a=super.parseArrayData(t,s,n,i);for(let r=0;r<a.length;r++){const o=s[n+r];a[r]._custom=Ut(o[2],this.resolveDataElementOptions(r+n).radius)}return a}parseObjectData(t,s,n,i){const a=super.parseObjectData(t,s,n,i);for(let r=0;r<a.length;r++){const o=s[n+r];a[r]._custom=Ut(o&&o.r&&+o.r,this.resolveDataElementOptions(r+n).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let s=0;for(let n=t.length-1;n>=0;--n)s=Math.max(s,t[n].size(this.resolveDataElementOptions(n))/2);return s>0&&s}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=s,r=this.getParsed(t),o=i.getLabelForValue(r.x),l=a.getLabelForValue(r.y),c=r._custom;return{label:n[t]||"",value:"("+o+", "+l+(c?", "+c:"")+")"}}update(t){const s=this._cachedMeta.data;this.updateElements(s,0,s.length,t)}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(s,i),d=r.axis,h=o.axis;for(let f=s;f<s+n;f++){const v=t[f],g=!a&&this.getParsed(f),m={},b=m[d]=a?r.getPixelForDecimal(.5):r.getPixelForValue(g[d]),y=m[h]=a?o.getBasePixel():o.getPixelForValue(g[h]);m.skip=isNaN(b)||isNaN(y),c&&(m.options=l||this.resolveDataElementOptions(f,v.active?"active":i),a&&(m.options.radius=0)),this.updateElement(v,f,m,i)}}resolveDataElementOptions(t,s){const n=this.getParsed(t);let i=super.resolveDataElementOptions(t,s);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const a=i.radius;return s!=="active"&&(i.radius=0),i.radius+=Ut(n&&n._custom,a),i}}function s0(e,t,s){let n=1,i=1,a=0,r=0;if(t<Se){const o=e,l=o+t,c=Math.cos(o),d=Math.sin(o),h=Math.cos(l),f=Math.sin(l),v=(k,w,$)=>Qi(k,o,l,!0)?1:Math.max(w,w*s,$,$*s),g=(k,w,$)=>Qi(k,o,l,!0)?-1:Math.min(w,w*s,$,$*s),m=v(0,c,h),b=v(je,d,f),y=g(pe,c,h),S=g(pe+je,d,f);n=(m-y)/2,i=(b-S)/2,a=-(m+y)/2,r=-(b+S)/2}return{ratioX:n,ratioY:i,offsetX:a,offsetY:r}}class sl extends Sn{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data,{labels:{pointStyle:n,textAlign:i,color:a,useBorderRadius:r,borderRadius:o}}=t.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((l,c)=>{const h=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:h.backgroundColor,fontColor:a,hidden:!t.getDataVisibility(c),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:n,borderRadius:r&&(o||h.borderRadius),index:c}}):[]}},onClick(t,s,n){n.chart.toggleDataVisibility(s.index),n.chart.update()}}}};constructor(t,s){super(t,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,s){const n=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=n;else{let a=l=>+n[l];if(ae(n[t])){const{key:l="value"}=this._parsing;a=c=>+kn(n[c],l)}let r,o;for(r=t,o=t+s;r<o;++r)i._parsed[r]=a(r)}}_getRotation(){return Cs(this.options.rotation-90)}_getCircumference(){return Cs(this.options.circumference)}_getRotationExtents(){let t=Se,s=-Se;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const i=this.chart.getDatasetMeta(n).controller,a=i._getRotation(),r=i._getCircumference();t=Math.min(t,a),s=Math.max(s,a+r)}return{rotation:t,circumference:s-t}}update(t){const s=this.chart,{chartArea:n}=s,i=this._cachedMeta,a=i.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(n.width,n.height)-r)/2,0),l=Math.min(h1(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:v,offsetX:g,offsetY:m}=s0(h,d,l),b=(n.width-r)/f,y=(n.height-r)/v,S=Math.max(Math.min(b,y)/2,0),k=xu(this.options.radius,S),w=Math.max(k*l,0),$=(k-w)/this._getVisibleDatasetWeightTotal();this.offsetX=g*k,this.offsetY=m*k,i.total=this.calculateTotal(),this.outerRadius=k-$*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-$*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,s){const n=this.options,i=this._cachedMeta,a=this._getCircumference();return s&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*a/Se)}updateElements(t,s,n,i){const a=i==="reset",r=this.chart,o=r.chartArea,c=r.options.animation,d=(o.left+o.right)/2,h=(o.top+o.bottom)/2,f=a&&c.animateScale,v=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:m,includeOptions:b}=this._getSharedOptions(s,i);let y=this._getRotation(),S;for(S=0;S<s;++S)y+=this._circumference(S,a);for(S=s;S<s+n;++S){const k=this._circumference(S,a),w=t[S],$={x:d+this.offsetX,y:h+this.offsetY,startAngle:y,endAngle:y+k,circumference:k,outerRadius:g,innerRadius:v};b&&($.options=m||this.resolveDataElementOptions(S,w.active?"active":i)),y+=k,this.updateElement(w,S,$,i)}}calculateTotal(){const t=this._cachedMeta,s=t.data;let n=0,i;for(i=0;i<s.length;i++){const a=t._parsed[i];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(i)&&!s[i].hidden&&(n+=Math.abs(a))}return n}calculateCircumference(t){const s=this._cachedMeta.total;return s>0&&!isNaN(t)?Se*(Math.abs(t)/s):0}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=da(s._parsed[t],n.options.locale);return{label:i[t]||"",value:a}}getMaxBorderWidth(t){let s=0;const n=this.chart;let i,a,r,o,l;if(!t){for(i=0,a=n.data.datasets.length;i<a;++i)if(n.isDatasetVisible(i)){r=n.getDatasetMeta(i),t=r.data,o=r.controller;break}}if(!t)return 0;for(i=0,a=t.length;i<a;++i)l=o.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(s=Math.max(s,l.borderWidth||0,l.hoverBorderWidth||0));return s}getMaxOffset(t){let s=0;for(let n=0,i=t.length;n<i;++n){const a=this.resolveDataElementOptions(n);s=Math.max(s,a.offset||0,a.hoverOffset||0)}return s}_getRingWeightOffset(t){let s=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(s+=this._getRingWeight(n));return s}_getRingWeight(t){return Math.max(Ut(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class n0 extends Sn{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const s=this._cachedMeta,{dataset:n,data:i=[],_dataset:a}=s,r=this.chart._animationsDisabled;let{start:o,count:l}=Cu(s,i,r);this._drawStart=o,this._drawCount=l,zu(s)&&(o=0,l=i.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!a._decimated,n.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!r,options:c},t),this.updateElements(i,o,l,t)}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(s,i),f=r.axis,v=o.axis,{spanGaps:g,segment:m}=this.options,b=vi(g)?g:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||a||i==="none",S=s+n,k=t.length;let w=s>0&&this.getParsed(s-1);for(let $=0;$<k;++$){const A=t[$],z=y?A:{};if($<s||$>=S){z.skip=!0;continue}const C=this.getParsed($),T=ne(C[v]),E=z[f]=r.getPixelForValue(C[f],$),L=z[v]=a||T?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,C,l):C[v],$);z.skip=isNaN(E)||isNaN(L)||T,z.stop=$>0&&Math.abs(C[f]-w[f])>b,m&&(z.parsed=C,z.raw=c.data[$]),h&&(z.options=d||this.resolveDataElementOptions($,A.active?"active":i)),y||this.updateElement(A,$,z,i),w=C}}getMaxOverflow(){const t=this._cachedMeta,s=t.dataset,n=s.options&&s.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const a=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class Xu extends Sn{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const s=t.data;if(s.labels.length&&s.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return s.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,s,n){n.chart.toggleDataVisibility(s.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,s){super(t,s),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const s=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=da(s._parsed[t].r,n.options.locale);return{label:i[t]||"",value:a}}parseObjectData(t,s,n,i){return ju.bind(this)(t,s,n,i)}update(t){const s=this._cachedMeta.data;this._updateRadius(),this.updateElements(s,0,s.length,t)}getMinMax(){const t=this._cachedMeta,s={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,i)=>{const a=this.getParsed(i).r;!isNaN(a)&&this.chart.getDataVisibility(i)&&(a<s.min&&(s.min=a),a>s.max&&(s.max=a))}),s}_updateRadius(){const t=this.chart,s=t.chartArea,n=t.options,i=Math.min(s.right-s.left,s.bottom-s.top),a=Math.max(i/2,0),r=Math.max(n.cutoutPercentage?a/100*n.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,s,n,i){const a=i==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,h=c.yCenter,f=c.getIndexAngle(0)-.5*pe;let v=f,g;const m=360/this.countVisibleElements();for(g=0;g<s;++g)v+=this._computeAngle(g,i,m);for(g=s;g<s+n;g++){const b=t[g];let y=v,S=v+this._computeAngle(g,i,m),k=r.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;v=S,a&&(l.animateScale&&(k=0),l.animateRotate&&(y=S=f));const w={x:d,y:h,innerRadius:0,outerRadius:k,startAngle:y,endAngle:S,options:this.resolveDataElementOptions(g,b.active?"active":i)};this.updateElement(b,g,w,i)}}countVisibleElements(){const t=this._cachedMeta;let s=0;return t.data.forEach((n,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&s++}),s}_computeAngle(t,s,n){return this.chart.getDataVisibility(t)?Cs(this.resolveDataElementOptions(t,s).angle||n):0}}class i0 extends sl{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class a0 extends Sn{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const s=this._cachedMeta.vScale,n=this.getParsed(t);return{label:s.getLabels()[t],value:""+s.getLabelForValue(n[s.axis])}}parseObjectData(t,s,n,i){return ju.bind(this)(t,s,n,i)}update(t){const s=this._cachedMeta,n=s.dataset,i=s.data||[],a=s.iScale.getLabels();if(n.points=i,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===i.length,options:r};this.updateElement(n,void 0,o,t)}this.updateElements(i,0,i.length,t)}updateElements(t,s,n,i){const a=this._cachedMeta.rScale,r=i==="reset";for(let o=s;o<s+n;o++){const l=t[o],c=this.resolveDataElementOptions(o,l.active?"active":i),d=a.getPointPositionForValue(o,this.getParsed(o).r),h=r?a.xCenter:d.x,f=r?a.yCenter:d.y,v={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:c};this.updateElement(l,o,v,i)}}}class r0 extends Sn{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const s=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=s,r=this.getParsed(t),o=i.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:n[t]||"",value:"("+o+", "+l+")"}}update(t){const s=this._cachedMeta,{data:n=[]}=s,i=this.chart._animationsDisabled;let{start:a,count:r}=Cu(s,n,i);if(this._drawStart=a,this._drawCount=r,zu(s)&&(a=0,r=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=s;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=n;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(o,void 0,{animated:!i,options:c},t)}else this.datasetElementType&&(delete s.dataset,this.datasetElementType=!1);this.updateElements(n,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,s,n,i){const a=i==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(s,i),h=this.getSharedOptions(d),f=this.includeOptions(i,h),v=r.axis,g=o.axis,{spanGaps:m,segment:b}=this.options,y=vi(m)?m:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||a||i==="none";let k=s>0&&this.getParsed(s-1);for(let w=s;w<s+n;++w){const $=t[w],A=this.getParsed(w),z=S?$:{},C=ne(A[g]),T=z[v]=r.getPixelForValue(A[v],w),E=z[g]=a||C?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,A,l):A[g],w);z.skip=isNaN(T)||isNaN(E)||C,z.stop=w>0&&Math.abs(A[v]-k[v])>y,b&&(z.parsed=A,z.raw=c.data[w]),f&&(z.options=h||this.resolveDataElementOptions(w,$.active?"active":i)),S||this.updateElement($,w,z,i),k=A}this.updateSharedOptions(h,i,d)}getMaxOverflow(){const t=this._cachedMeta,s=t.data||[];if(!this.options.showLine){let o=0;for(let l=s.length-1;l>=0;--l)o=Math.max(o,s[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const n=t.dataset,i=n.options&&n.options.borderWidth||0;if(!s.length)return i;const a=s[0].size(this.resolveDataElementOptions(0)),r=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,a,r)/2}}var o0=Object.freeze({__proto__:null,BarController:t0,BubbleController:e0,DoughnutController:sl,LineController:n0,PieController:i0,PolarAreaController:Xu,RadarController:a0,ScatterController:r0});function Cn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class nl{static override(t){Object.assign(nl.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return Cn()}parse(){return Cn()}format(){return Cn()}add(){return Cn()}diff(){return Cn()}startOf(){return Cn()}endOf(){return Cn()}}var l0={_date:nl};function c0(e,t,s,n){const{controller:i,data:a,_sorted:r}=e,o=i._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const c=o._reversePixels?S1:Qs;if(n){if(i._sharedOptions){const d=a[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=c(a,t,s-h),v=c(a,t,s+h);return{lo:f.lo,hi:v.hi}}}}else{const d=c(a,t,s);if(l){const{vScale:h}=i._cachedMeta,{_parsed:f}=e,v=f.slice(0,d.lo+1).reverse().findIndex(m=>!ne(m[h.axis]));d.lo-=Math.max(0,v);const g=f.slice(d.hi).findIndex(m=>!ne(m[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:a.length-1}}function _r(e,t,s,n,i){const a=e.getSortedVisibleDatasetMetas(),r=s[t];for(let o=0,l=a.length;o<l;++o){const{index:c,data:d}=a[o],{lo:h,hi:f}=c0(a[o],t,r,i);for(let v=h;v<=f;++v){const g=d[v];g.skip||n(g,c,v)}}}function d0(e){const t=e.indexOf("x")!==-1,s=e.indexOf("y")!==-1;return function(n,i){const a=t?Math.abs(n.x-i.x):0,r=s?Math.abs(n.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function jr(e,t,s,n,i){const a=[];return!i&&!e.isPointInArea(t)||_r(e,s,t,function(o,l,c){!i&&!Zs(o,e.chartArea,0)||o.inRange(t.x,t.y,n)&&a.push({element:o,datasetIndex:l,index:c})},!0),a}function u0(e,t,s,n){let i=[];function a(r,o,l){const{startAngle:c,endAngle:d}=r.getProps(["startAngle","endAngle"],n),{angle:h}=$u(r,{x:t.x,y:t.y});Qi(h,c,d)&&i.push({element:r,datasetIndex:o,index:l})}return _r(e,s,t,a),i}function h0(e,t,s,n,i,a){let r=[];const o=d0(s);let l=Number.POSITIVE_INFINITY;function c(d,h,f){const v=d.inRange(t.x,t.y,i);if(n&&!v)return;const g=d.getCenterPoint(i);if(!(!!a||e.isPointInArea(g))&&!v)return;const b=o(t,g);b<l?(r=[{element:d,datasetIndex:h,index:f}],l=b):b===l&&r.push({element:d,datasetIndex:h,index:f})}return _r(e,s,t,c),r}function Nr(e,t,s,n,i,a){return!a&&!e.isPointInArea(t)?[]:s==="r"&&!n?u0(e,t,s,i):h0(e,t,s,n,i,a)}function hc(e,t,s,n,i){const a=[],r=s==="x"?"inXRange":"inYRange";let o=!1;return _r(e,s,t,(l,c,d)=>{l[r]&&l[r](t[s],i)&&(a.push({element:l,datasetIndex:c,index:d}),o=o||l.inRange(t.x,t.y,i))}),n&&!o?[]:a}var f0={modes:{index(e,t,s,n){const i=En(t,e),a=s.axis||"x",r=s.includeInvisible||!1,o=s.intersect?jr(e,i,a,n,r):Nr(e,i,a,!1,n,r),l=[];return o.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const d=o[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(e,t,s,n){const i=En(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;let o=s.intersect?jr(e,i,a,n,r):Nr(e,i,a,!1,n,r);if(o.length>0){const l=o[0].datasetIndex,c=e.getDatasetMeta(l).data;o=[];for(let d=0;d<c.length;++d)o.push({element:c[d],datasetIndex:l,index:d})}return o},point(e,t,s,n){const i=En(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;return jr(e,i,a,n,r)},nearest(e,t,s,n){const i=En(t,e),a=s.axis||"xy",r=s.includeInvisible||!1;return Nr(e,i,a,s.intersect,n,r)},x(e,t,s,n){const i=En(t,e);return hc(e,i,"x",s.intersect,n)},y(e,t,s,n){const i=En(t,e);return hc(e,i,"y",s.intersect,n)}}};const Gu=["left","top","right","bottom"];function Ai(e,t){return e.filter(s=>s.pos===t)}function fc(e,t){return e.filter(s=>Gu.indexOf(s.pos)===-1&&s.box.axis===t)}function Ci(e,t){return e.sort((s,n)=>{const i=t?n:s,a=t?s:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight})}function v0(e){const t=[];let s,n,i,a,r,o;for(s=0,n=(e||[]).length;s<n;++s)i=e[s],{position:a,options:{stack:r,stackWeight:o=1}}=i,t.push({index:s,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:r&&a+r,stackWeight:o});return t}function p0(e){const t={};for(const s of e){const{stack:n,pos:i,stackWeight:a}=s;if(!n||!Gu.includes(i))continue;const r=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function g0(e,t){const s=p0(e),{vBoxMaxWidth:n,hBoxMaxHeight:i}=t;let a,r,o;for(a=0,r=e.length;a<r;++a){o=e[a];const{fullSize:l}=o.box,c=s[o.stack],d=c&&o.stackWeight/c.weight;o.horizontal?(o.width=d?d*n:l&&t.availableWidth,o.height=i):(o.width=n,o.height=d?d*i:l&&t.availableHeight)}return s}function m0(e){const t=v0(e),s=Ci(t.filter(c=>c.box.fullSize),!0),n=Ci(Ai(t,"left"),!0),i=Ci(Ai(t,"right")),a=Ci(Ai(t,"top"),!0),r=Ci(Ai(t,"bottom")),o=fc(t,"x"),l=fc(t,"y");return{fullSize:s,leftAndTop:n.concat(a),rightAndBottom:i.concat(l).concat(r).concat(o),chartArea:Ai(t,"chartArea"),vertical:n.concat(i).concat(l),horizontal:a.concat(r).concat(o)}}function vc(e,t,s,n){return Math.max(e[s],t[s])+Math.max(e[n],t[n])}function Ju(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function _0(e,t,s,n){const{pos:i,box:a}=s,r=e.maxPadding;if(!ae(i)){s.size&&(e[i]-=s.size);const h=n[s.stack]||{size:0,count:1};h.size=Math.max(h.size,s.horizontal?a.height:a.width),s.size=h.size/h.count,e[i]+=s.size}a.getPadding&&Ju(r,a.getPadding());const o=Math.max(0,t.outerWidth-vc(r,e,"left","right")),l=Math.max(0,t.outerHeight-vc(r,e,"top","bottom")),c=o!==e.w,d=l!==e.h;return e.w=o,e.h=l,s.horizontal?{same:c,other:d}:{same:d,other:c}}function b0(e){const t=e.maxPadding;function s(n){const i=Math.max(t[n]-e[n],0);return e[n]+=i,i}e.y+=s("top"),e.x+=s("left"),s("right"),s("bottom")}function y0(e,t){const s=t.maxPadding;function n(i){const a={left:0,top:0,right:0,bottom:0};return i.forEach(r=>{a[r]=Math.max(t[r],s[r])}),a}return n(e?["left","right"]:["top","bottom"])}function Li(e,t,s,n){const i=[];let a,r,o,l,c,d;for(a=0,r=e.length,c=0;a<r;++a){o=e[a],l=o.box,l.update(o.width||t.w,o.height||t.h,y0(o.horizontal,t));const{same:h,other:f}=_0(t,s,o,n);c|=h&&i.length,d=d||f,l.fullSize||i.push(o)}return c&&Li(i,t,s,n)||d}function Ma(e,t,s,n,i){e.top=s,e.left=t,e.right=t+n,e.bottom=s+i,e.width=n,e.height=i}function pc(e,t,s,n){const i=s.padding;let{x:a,y:r}=t;for(const o of e){const l=o.box,c=n[o.stack]||{placed:0,weight:1},d=o.stackWeight/c.weight||1;if(o.horizontal){const h=t.w*d,f=c.size||l.height;Ji(c.start)&&(r=c.start),l.fullSize?Ma(l,i.left,r,s.outerWidth-i.right-i.left,f):Ma(l,t.left+c.placed,r,h,f),c.start=r,c.placed+=h,r=l.bottom}else{const h=t.h*d,f=c.size||l.width;Ji(c.start)&&(a=c.start),l.fullSize?Ma(l,a,i.top,f,s.outerHeight-i.bottom-i.top):Ma(l,a,t.top+c.placed,f,h),c.start=a,c.placed+=h,a=l.right}}t.x=a,t.y=r}var ns={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(s){t.draw(s)}}]},e.boxes.push(t)},removeBox(e,t){const s=e.boxes?e.boxes.indexOf(t):-1;s!==-1&&e.boxes.splice(s,1)},configure(e,t,s){t.fullSize=s.fullSize,t.position=s.position,t.weight=s.weight},update(e,t,s,n){if(!e)return;const i=is(e.options.layout.padding),a=Math.max(t-i.width,0),r=Math.max(s-i.height,0),o=m0(e.boxes),l=o.vertical,c=o.horizontal;ye(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const d=l.reduce((m,b)=>b.box.options&&b.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:s,padding:i,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/d,hBoxMaxHeight:r/2}),f=Object.assign({},i);Ju(f,is(n));const v=Object.assign({maxPadding:f,w:a,h:r,x:i.left,y:i.top},i),g=g0(l.concat(c),h);Li(o.fullSize,v,h,g),Li(l,v,h,g),Li(c,v,h,g)&&Li(l,v,h,g),b0(v),pc(o.leftAndTop,v,h,g),v.x+=v.w,v.y+=v.h,pc(o.rightAndBottom,v,h,g),e.chartArea={left:v.left,top:v.top,right:v.left+v.w,bottom:v.top+v.h,height:v.h,width:v.w},ye(o.chartArea,m=>{const b=m.box;Object.assign(b,e.chartArea),b.update(v.w,v.h,{left:0,top:0,right:0,bottom:0})})}};class Qu{acquireContext(t,s){}releaseContext(t){return!1}addEventListener(t,s,n){}removeEventListener(t,s,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,s,n,i){return s=Math.max(0,s||t.width),n=n||t.height,{width:s,height:Math.max(0,i?Math.floor(s/i):n)}}isAttached(t){return!0}updateConfig(t){}}class x0 extends Qu{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ja="$chartjs",k0={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},gc=e=>e===null||e==="";function w0(e,t){const s=e.style,n=e.getAttribute("height"),i=e.getAttribute("width");if(e[ja]={initial:{height:n,width:i,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",gc(i)){const a=Zl(e,"width");a!==void 0&&(e.width=a)}if(gc(n))if(e.style.height==="")e.height=e.width/(t||2);else{const a=Zl(e,"height");a!==void 0&&(e.height=a)}return e}const Zu=_b?{passive:!0}:!1;function $0(e,t,s){e&&e.addEventListener(t,s,Zu)}function S0(e,t,s){e&&e.canvas&&e.canvas.removeEventListener(t,s,Zu)}function M0(e,t){const s=k0[e.type]||e.type,{x:n,y:i}=En(e,t);return{type:s,chart:t,native:e,x:n!==void 0?n:null,y:i!==void 0?i:null}}function er(e,t){for(const s of e)if(s===t||s.contains(t))return!0}function P0(e,t,s){const n=e.canvas,i=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||er(o.addedNodes,n),r=r&&!er(o.removedNodes,n);r&&s()});return i.observe(document,{childList:!0,subtree:!0}),i}function A0(e,t,s){const n=e.canvas,i=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||er(o.removedNodes,n),r=r&&!er(o.addedNodes,n);r&&s()});return i.observe(document,{childList:!0,subtree:!0}),i}const ta=new Map;let mc=0;function th(){const e=window.devicePixelRatio;e!==mc&&(mc=e,ta.forEach((t,s)=>{s.currentDevicePixelRatio!==e&&t()}))}function C0(e,t){ta.size||window.addEventListener("resize",th),ta.set(e,t)}function z0(e){ta.delete(e),ta.size||window.removeEventListener("resize",th)}function T0(e,t,s){const n=e.canvas,i=n&&el(n);if(!i)return;const a=Au((o,l)=>{const c=i.clientWidth;s(o,l),c<i.clientWidth&&s()},window),r=new ResizeObserver(o=>{const l=o[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return r.observe(i),C0(e,a),r}function Fr(e,t,s){s&&s.disconnect(),t==="resize"&&z0(e)}function E0(e,t,s){const n=e.canvas,i=Au(a=>{e.ctx!==null&&s(M0(a,e))},e);return $0(n,t,i),i}class D0 extends Qu{acquireContext(t,s){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(w0(t,s),n):null}releaseContext(t){const s=t.canvas;if(!s[ja])return!1;const n=s[ja].initial;["height","width"].forEach(a=>{const r=n[a];ne(r)?s.removeAttribute(a):s.setAttribute(a,r)});const i=n.style||{};return Object.keys(i).forEach(a=>{s.style[a]=i[a]}),s.width=s.width,delete s[ja],!0}addEventListener(t,s,n){this.removeEventListener(t,s);const i=t.$proxies||(t.$proxies={}),r={attach:P0,detach:A0,resize:T0}[s]||E0;i[s]=r(t,s,n)}removeEventListener(t,s){const n=t.$proxies||(t.$proxies={}),i=n[s];if(!i)return;({attach:Fr,detach:Fr,resize:Fr}[s]||S0)(t,s,i),n[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,s,n,i){return mb(t,s,n,i)}isAttached(t){const s=t&&el(t);return!!(s&&s.isConnected)}}function O0(e){return!tl()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?x0:D0}let an=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:s,y:n}=this.getProps(["x","y"],t);return{x:s,y:n}}hasValue(){return vi(this.x)&&vi(this.y)}getProps(t,s){const n=this.$animations;if(!s||!n)return this;const i={};return t.forEach(a=>{i[a]=n[a]&&n[a].active()?n[a]._to:this[a]}),i}};function R0(e,t){const s=e.options.ticks,n=L0(e),i=Math.min(s.maxTicksLimit||n,n),a=s.major.enabled?j0(t):[],r=a.length,o=a[0],l=a[r-1],c=[];if(r>i)return N0(t,c,a,r/i),c;const d=I0(a,t,i);if(r>0){let h,f;const v=r>1?Math.round((l-o)/(r-1)):null;for(Pa(t,c,d,ne(v)?0:o-v,o),h=0,f=r-1;h<f;h++)Pa(t,c,d,a[h],a[h+1]);return Pa(t,c,d,l,ne(v)?t.length:l+v),c}return Pa(t,c,d),c}function L0(e){const t=e.options.offset,s=e._tickSize(),n=e._length/s+(t?0:1),i=e._maxLength/s;return Math.floor(Math.min(n,i))}function I0(e,t,s){const n=F0(e),i=t.length/s;if(!n)return Math.max(i,1);const a=y1(n);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>i)return l}return Math.max(i,1)}function j0(e){const t=[];let s,n;for(s=0,n=e.length;s<n;s++)e[s].major&&t.push(s);return t}function N0(e,t,s,n){let i=0,a=s[0],r;for(n=Math.ceil(n),r=0;r<e.length;r++)r===a&&(t.push(e[r]),i++,a=s[i*n])}function Pa(e,t,s,n,i){const a=Ut(n,0),r=Math.min(Ut(i,e.length),e.length);let o=0,l,c,d;for(s=Math.ceil(s),i&&(l=i-n,s=l/Math.floor(l/s)),d=a;d<0;)o++,d=Math.round(a+o*s);for(c=Math.max(a,0);c<r;c++)c===d&&(t.push(e[c]),o++,d=Math.round(a+o*s))}function F0(e){const t=e.length;let s,n;if(t<2)return!1;for(n=e[0],s=1;s<t;++s)if(e[s]-e[s-1]!==n)return!1;return n}const B0=e=>e==="left"?"right":e==="right"?"left":e,_c=(e,t,s)=>t==="top"||t==="left"?e[t]+s:e[t]-s,bc=(e,t)=>Math.min(t||e,e);function yc(e,t){const s=[],n=e.length/t,i=e.length;let a=0;for(;a<i;a+=n)s.push(e[Math.floor(a)]);return s}function q0(e,t,s){const n=e.ticks.length,i=Math.min(t,n-1),a=e._startPixel,r=e._endPixel,o=1e-6;let l=e.getPixelForTick(i),c;if(!(s&&(n===1?c=Math.max(l-a,r-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<a-o||l>r+o)))return l}function V0(e,t){ye(e,s=>{const n=s.gc,i=n.length/2;let a;if(i>t){for(a=0;a<i;++a)delete s.data[n[a]];n.splice(0,i)}})}function zi(e){return e.drawTicks?e.tickLength:0}function xc(e,t){if(!e.display)return 0;const s=qe(e.font,t),n=is(e.padding);return(Ae(e.text)?e.text.length:1)*s.lineHeight+n.height}function H0(e,t){return $n(e,{scale:t,type:"scale"})}function W0(e,t,s){return $n(e,{tick:s,index:t,type:"tick"})}function U0(e,t,s){let n=Ko(e);return(s&&t!=="right"||!s&&t==="right")&&(n=B0(n)),n}function Y0(e,t,s,n){const{top:i,left:a,bottom:r,right:o,chart:l}=e,{chartArea:c,scales:d}=l;let h=0,f,v,g;const m=r-i,b=o-a;if(e.isHorizontal()){if(v=es(n,a,o),ae(s)){const y=Object.keys(s)[0],S=s[y];g=d[y].getPixelForValue(S)+m-t}else s==="center"?g=(c.bottom+c.top)/2+m-t:g=_c(e,s,t);f=o-a}else{if(ae(s)){const y=Object.keys(s)[0],S=s[y];v=d[y].getPixelForValue(S)-b+t}else s==="center"?v=(c.left+c.right)/2-b+t:v=_c(e,s,t);g=es(n,r,i),h=s==="left"?-je:je}return{titleX:v,titleY:g,maxWidth:f,rotation:h}}class Xn extends an{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,s){return t}getUserBounds(){let{_userMin:t,_userMax:s,_suggestedMin:n,_suggestedMax:i}=this;return t=ps(t,Number.POSITIVE_INFINITY),s=ps(s,Number.NEGATIVE_INFINITY),n=ps(n,Number.POSITIVE_INFINITY),i=ps(i,Number.NEGATIVE_INFINITY),{min:ps(t,n),max:ps(s,i),minDefined:Le(t),maxDefined:Le(s)}}getMinMax(t){let{min:s,max:n,minDefined:i,maxDefined:a}=this.getUserBounds(),r;if(i&&a)return{min:s,max:n};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)r=o[l].controller.getMinMax(this,t),i||(s=Math.min(s,r.min)),a||(n=Math.max(n,r.max));return s=a&&s>n?n:s,n=i&&s>n?s:n,{min:ps(s,ps(n,s)),max:ps(n,ps(s,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){$e(this.options.beforeUpdate,[this])}update(t,s,n){const{beginAtZero:i,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=s,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=X1(this,a,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?yc(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=R0(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,s,n;this.isHorizontal()?(s=this.left,n=this.right):(s=this.top,n=this.bottom,t=!t),this._startPixel=s,this._endPixel=n,this._reversePixels=t,this._length=n-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){$e(this.options.afterUpdate,[this])}beforeSetDimensions(){$e(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){$e(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),$e(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){$e(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const s=this.options.ticks;let n,i,a;for(n=0,i=t.length;n<i;n++)a=t[n],a.label=$e(s.callback,[a.value,n,t],this)}afterTickToLabelConversion(){$e(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){$e(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,s=t.ticks,n=bc(this.ticks.length,t.ticks.maxTicksLimit),i=s.minRotation||0,a=s.maxRotation;let r=i,o,l,c;if(!this._isVisible()||!s.display||i>=a||n<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,v=Ye(this.chart.width-h,0,this.maxWidth);o=t.offset?this.maxWidth/n:v/(n-1),h+6>o&&(o=v/(n-(t.offset?.5:1)),l=this.maxHeight-zi(t.grid)-s.padding-xc(t.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),r=Uo(Math.min(Math.asin(Ye((d.highest.height+6)/o,-1,1)),Math.asin(Ye(l/c,-1,1))-Math.asin(Ye(f/c,-1,1)))),r=Math.max(i,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){$e(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){$e(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:s,options:{ticks:n,title:i,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=xc(i,s.options.font);if(o?(t.width=this.maxWidth,t.height=zi(a)+l):(t.height=this.maxHeight,t.width=zi(a)+l),n.display&&this.ticks.length){const{first:c,last:d,widest:h,highest:f}=this._getLabelSizes(),v=n.padding*2,g=Cs(this.labelRotation),m=Math.cos(g),b=Math.sin(g);if(o){const y=n.mirror?0:b*h.width+m*f.height;t.height=Math.min(this.maxHeight,t.height+y+v)}else{const y=n.mirror?0:m*h.width+b*f.height;t.width=Math.min(this.maxWidth,t.width+y+v)}this._calculatePadding(c,d,b,m)}}this._handleMargins(),o?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,s,n,i){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,v=0;l?c?(f=i*t.width,v=n*s.height):(f=n*t.height,v=i*s.width):a==="start"?v=s.width:a==="end"?f=t.width:a!=="inner"&&(f=t.width/2,v=s.width/2),this.paddingLeft=Math.max((f-d+r)*this.width/(this.width-d),0),this.paddingRight=Math.max((v-h+r)*this.width/(this.width-h),0)}else{let d=s.height/2,h=t.height/2;a==="start"?(d=0,h=t.height):a==="end"&&(d=s.height,h=0),this.paddingTop=d+r,this.paddingBottom=h+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){$e(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:s}=this.options;return s==="top"||s==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let s,n;for(s=0,n=t.length;s<n;s++)ne(t[s].label)&&(t.splice(s,1),n--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const s=this.options.ticks.sampleSize;let n=this.ticks;s<n.length&&(n=yc(n,s)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,s,n){const{ctx:i,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(s/bc(s,n));let c=0,d=0,h,f,v,g,m,b,y,S,k,w,$;for(h=0;h<s;h+=l){if(g=t[h].label,m=this._resolveTickFontOptions(h),i.font=b=m.string,y=a[b]=a[b]||{data:{},gc:[]},S=m.lineHeight,k=w=0,!ne(g)&&!Ae(g))k=Za(i,y.data,y.gc,k,g),w=S;else if(Ae(g))for(f=0,v=g.length;f<v;++f)$=g[f],!ne($)&&!Ae($)&&(k=Za(i,y.data,y.gc,k,$),w+=S);r.push(k),o.push(w),c=Math.max(k,c),d=Math.max(w,d)}V0(a,s);const A=r.indexOf(c),z=o.indexOf(d),C=T=>({width:r[T]||0,height:o[T]||0});return{first:C(0),last:C(s-1),widest:C(A),highest:C(z),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,s){return NaN}getValueForPixel(t){}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const s=this._startPixel+t*this._length;return $1(this._alignToPixels?An(this.chart,s,0):s)}getDecimalForPixel(t){const s=(t-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:s}=this;return t<0&&s<0?s:t>0&&s>0?t:0}getContext(t){const s=this.ticks||[];if(t>=0&&t<s.length){const n=s[t];return n.$context||(n.$context=W0(this.getContext(),t,n))}return this.$context||(this.$context=H0(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,s=Cs(this.labelRotation),n=Math.abs(Math.cos(s)),i=Math.abs(Math.sin(s)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*n>o*i?o/n:l/i:l*i<o*n?l/n:o/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const s=this.axis,n=this.chart,i=this.options,{grid:a,position:r,border:o}=i,l=a.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=zi(a),v=[],g=o.setContext(this.getContext()),m=g.display?g.width:0,b=m/2,y=function(X){return An(n,X,m)};let S,k,w,$,A,z,C,T,E,L,N,Z;if(r==="top")S=y(this.bottom),z=this.bottom-f,T=S-b,L=y(t.top)+b,Z=t.bottom;else if(r==="bottom")S=y(this.top),L=t.top,Z=y(t.bottom)-b,z=S+b,T=this.top+f;else if(r==="left")S=y(this.right),A=this.right-f,C=S-b,E=y(t.left)+b,N=t.right;else if(r==="right")S=y(this.left),E=t.left,N=y(t.right)-b,A=S+b,C=this.left+f;else if(s==="x"){if(r==="center")S=y((t.top+t.bottom)/2+.5);else if(ae(r)){const X=Object.keys(r)[0],J=r[X];S=y(this.chart.scales[X].getPixelForValue(J))}L=t.top,Z=t.bottom,z=S+b,T=z+f}else if(s==="y"){if(r==="center")S=y((t.left+t.right)/2);else if(ae(r)){const X=Object.keys(r)[0],J=r[X];S=y(this.chart.scales[X].getPixelForValue(J))}A=S-b,C=A-f,E=t.left,N=t.right}const K=Ut(i.ticks.maxTicksLimit,h),V=Math.max(1,Math.ceil(h/K));for(k=0;k<h;k+=V){const X=this.getContext(k),J=a.setContext(X),xt=o.setContext(X),yt=J.lineWidth,Pt=J.color,F=xt.dash||[],O=xt.dashOffset,H=J.tickWidth,tt=J.tickColor,kt=J.tickBorderDash||[],q=J.tickBorderDashOffset;w=q0(this,k,l),w!==void 0&&($=An(n,w,yt),c?A=C=E=N=$:z=T=L=Z=$,v.push({tx1:A,ty1:z,tx2:C,ty2:T,x1:E,y1:L,x2:N,y2:Z,width:yt,color:Pt,borderDash:F,borderDashOffset:O,tickWidth:H,tickColor:tt,tickBorderDash:kt,tickBorderDashOffset:q}))}return this._ticksLength=h,this._borderValue=S,v}_computeLabelItems(t){const s=this.axis,n=this.options,{position:i,ticks:a}=n,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=a,f=zi(n.grid),v=f+d,g=h?-d:v,m=-Cs(this.labelRotation),b=[];let y,S,k,w,$,A,z,C,T,E,L,N,Z="middle";if(i==="top")A=this.bottom-g,z=this._getXAxisLabelAlignment();else if(i==="bottom")A=this.top+g,z=this._getXAxisLabelAlignment();else if(i==="left"){const V=this._getYAxisLabelAlignment(f);z=V.textAlign,$=V.x}else if(i==="right"){const V=this._getYAxisLabelAlignment(f);z=V.textAlign,$=V.x}else if(s==="x"){if(i==="center")A=(t.top+t.bottom)/2+v;else if(ae(i)){const V=Object.keys(i)[0],X=i[V];A=this.chart.scales[V].getPixelForValue(X)+v}z=this._getXAxisLabelAlignment()}else if(s==="y"){if(i==="center")$=(t.left+t.right)/2-v;else if(ae(i)){const V=Object.keys(i)[0],X=i[V];$=this.chart.scales[V].getPixelForValue(X)}z=this._getYAxisLabelAlignment(f).textAlign}s==="y"&&(l==="start"?Z="top":l==="end"&&(Z="bottom"));const K=this._getLabelSizes();for(y=0,S=o.length;y<S;++y){k=o[y],w=k.label;const V=a.setContext(this.getContext(y));C=this.getPixelForTick(y)+a.labelOffset,T=this._resolveTickFontOptions(y),E=T.lineHeight,L=Ae(w)?w.length:1;const X=L/2,J=V.color,xt=V.textStrokeColor,yt=V.textStrokeWidth;let Pt=z;r?($=C,z==="inner"&&(y===S-1?Pt=this.options.reverse?"left":"right":y===0?Pt=this.options.reverse?"right":"left":Pt="center"),i==="top"?c==="near"||m!==0?N=-L*E+E/2:c==="center"?N=-K.highest.height/2-X*E+E:N=-K.highest.height+E/2:c==="near"||m!==0?N=E/2:c==="center"?N=K.highest.height/2-X*E:N=K.highest.height-L*E,h&&(N*=-1),m!==0&&!V.showLabelBackdrop&&($+=E/2*Math.sin(m))):(A=C,N=(1-L)*E/2);let F;if(V.showLabelBackdrop){const O=is(V.backdropPadding),H=K.heights[y],tt=K.widths[y];let kt=N-O.top,q=0-O.left;switch(Z){case"middle":kt-=H/2;break;case"bottom":kt-=H;break}switch(z){case"center":q-=tt/2;break;case"right":q-=tt;break;case"inner":y===S-1?q-=tt:y>0&&(q-=tt/2);break}F={left:q,top:kt,width:tt+O.width,height:H+O.height,color:V.backdropColor}}b.push({label:w,font:T,textOffset:N,options:{rotation:m,color:J,strokeColor:xt,strokeWidth:yt,textAlign:Pt,textBaseline:Z,translation:[$,A],backdrop:F}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:s}=this.options;if(-Cs(this.labelRotation))return t==="top"?"left":"right";let i="center";return s.align==="start"?i="left":s.align==="end"?i="right":s.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:s,ticks:{crossAlign:n,mirror:i,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let c,d;return s==="left"?i?(d=this.right+a,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-o,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d=this.left)):s==="right"?i?(d=this.left+a,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+o,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:s},left:n,top:i,width:a,height:r}=this;s&&(t.save(),t.fillStyle=s,t.fillRect(n,i,a,r),t.restore())}getLineWidthForValue(t){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const i=this.ticks.findIndex(a=>a.value===t);return i>=0?s.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const s=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,c,d)=>{!d.width||!d.color||(n.save(),n.lineWidth=d.width,n.strokeStyle=d.color,n.setLineDash(d.borderDash||[]),n.lineDashOffset=d.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(s.display)for(a=0,r=i.length;a<r;++a){const l=i[a];s.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),s.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:s,options:{border:n,grid:i}}=this,a=n.setContext(this.getContext()),r=n.display?a.width:0;if(!r)return;const o=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,h,f;this.isHorizontal()?(c=An(t,this.left,r)-r/2,d=An(t,this.right,o)+o/2,h=f=l):(h=An(t,this.top,r)-r/2,f=An(t,this.bottom,o)+o/2,c=d=l),s.save(),s.lineWidth=a.width,s.strokeStyle=a.color,s.beginPath(),s.moveTo(c,h),s.lineTo(d,f),s.stroke(),s.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,i=this._computeLabelArea();i&&pr(n,i);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,c=r.label,d=r.textOffset;Wn(n,c,0,d,l,o)}i&&gr(n)}drawTitle(){const{ctx:t,options:{position:s,title:n,reverse:i}}=this;if(!n.display)return;const a=qe(n.font),r=is(n.padding),o=n.align;let l=a.lineHeight/2;s==="bottom"||s==="center"||ae(s)?(l+=r.bottom,Ae(n.text)&&(l+=a.lineHeight*(n.text.length-1))):l+=r.top;const{titleX:c,titleY:d,maxWidth:h,rotation:f}=Y0(this,l,s,o);Wn(t,n.text,0,0,a,{color:n.color,maxWidth:h,rotation:f,textAlign:U0(o,s,i),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,s=t.ticks&&t.ticks.z||0,n=Ut(t.grid&&t.grid.z,-1),i=Ut(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Xn.prototype.draw?[{z:s,draw:a=>{this.draw(a)}}]:[{z:n,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:s,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const s=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let a,r;for(a=0,r=s.length;a<r;++a){const o=s[a];o[n]===this.id&&(!t||o.type===t)&&i.push(o)}return i}_resolveTickFontOptions(t){const s=this.options.ticks.setContext(this.getContext(t));return qe(s.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Aa{constructor(t,s,n){this.type=t,this.scope=s,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const s=Object.getPrototypeOf(t);let n;G0(s)&&(n=this.register(s));const i=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in i||(i[a]=t,K0(t,r,n),this.override&&Ce.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const s=this.items,n=t.id,i=this.scope;n in s&&delete s[n],i&&n in Ce[i]&&(delete Ce[i][n],this.override&&delete Hn[n])}}function K0(e,t,s){const n=Gi(Object.create(null),[s?Ce.get(s):{},Ce.get(t),e.defaults]);Ce.set(t,n),e.defaultRoutes&&X0(t,e.defaultRoutes),e.descriptors&&Ce.describe(t,e.descriptors)}function X0(e,t){Object.keys(t).forEach(s=>{const n=s.split("."),i=n.pop(),a=[e].concat(n).join("."),r=t[s].split("."),o=r.pop(),l=r.join(".");Ce.route(a,i,l,o)})}function G0(e){return"id"in e&&"defaults"in e}class J0{constructor(){this.controllers=new Aa(Sn,"datasets",!0),this.elements=new Aa(an,"elements"),this.plugins=new Aa(Object,"plugins"),this.scales=new Aa(Xn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,s,n){[...s].forEach(i=>{const a=n||this._getRegistryForType(i);n||a.isForType(i)||a===this.plugins&&i.id?this._exec(t,a,i):ye(i,r=>{const o=n||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,s,n){const i=Wo(t);$e(n["before"+i],[],n),s[t](n),$e(n["after"+i],[],n)}_getRegistryForType(t){for(let s=0;s<this._typedRegistries.length;s++){const n=this._typedRegistries[s];if(n.isForType(t))return n}return this.plugins}_get(t,s,n){const i=s.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var Is=new J0;class Q0{constructor(){this._init=void 0}notify(t,s,n,i){if(s==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=i?this._descriptors(t).filter(i):this._descriptors(t),r=this._notify(a,t,s,n);return s==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,s,n,i){i=i||{};for(const a of t){const r=a.plugin,o=r[n],l=[s,i,a.options];if($e(o,l,r)===!1&&i.cancelable)return!1}return!0}invalidate(){ne(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),s}_createDescriptors(t,s){const n=t&&t.config,i=Ut(n.options&&n.options.plugins,{}),a=Z0(n);return i===!1&&!s?[]:ey(t,a,i,s)}_notifyStateChanges(t){const s=this._oldCache||[],n=this._cache,i=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(i(s,n),t,"stop"),this._notify(i(n,s),t,"start")}}function Z0(e){const t={},s=[],n=Object.keys(Is.plugins.items);for(let a=0;a<n.length;a++)s.push(Is.getPlugin(n[a]));const i=e.plugins||[];for(let a=0;a<i.length;a++){const r=i[a];s.indexOf(r)===-1&&(s.push(r),t[r.id]=!0)}return{plugins:s,localIds:t}}function ty(e,t){return!t&&e===!1?null:e===!0?{}:e}function ey(e,{plugins:t,localIds:s},n,i){const a=[],r=e.getContext();for(const o of t){const l=o.id,c=ty(n[l],i);c!==null&&a.push({plugin:o,options:sy(e.config,{plugin:o,local:s[l]},c,r)})}return a}function sy(e,{plugin:t,local:s},n,i){const a=e.pluginScopeKeys(t),r=e.getOptionScopes(n,a);return s&&t.defaults&&r.push(t.defaults),e.createResolver(r,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ho(e,t){const s=Ce.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||s.indexAxis||"x"}function ny(e,t){let s=e;return e==="_index_"?s=t:e==="_value_"&&(s=t==="x"?"y":"x"),s}function iy(e,t){return e===t?"_index_":"_value_"}function kc(e){if(e==="x"||e==="y"||e==="r")return e}function ay(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function fo(e,...t){if(kc(e))return e;for(const s of t){const n=s.axis||ay(s.position)||e.length>1&&kc(e[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function wc(e,t,s){if(s[t+"AxisID"]===e)return{axis:t}}function ry(e,t){if(t.data&&t.data.datasets){const s=t.data.datasets.filter(n=>n.xAxisID===e||n.yAxisID===e);if(s.length)return wc(e,"x",s[0])||wc(e,"y",s[0])}return{}}function oy(e,t){const s=Hn[e.type]||{scales:{}},n=t.scales||{},i=ho(e.type,t),a=Object.create(null);return Object.keys(n).forEach(r=>{const o=n[r];if(!ae(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=fo(r,o,ry(r,e),Ce.scales[o.type]),c=iy(l,i),d=s.scales||{};a[r]=Vi(Object.create(null),[{axis:l},o,d[l],d[c]])}),e.data.datasets.forEach(r=>{const o=r.type||e.type,l=r.indexAxis||ho(o,t),d=(Hn[o]||{}).scales||{};Object.keys(d).forEach(h=>{const f=ny(h,l),v=r[f+"AxisID"]||f;a[v]=a[v]||Object.create(null),Vi(a[v],[{axis:f},n[v],d[h]])})}),Object.keys(a).forEach(r=>{const o=a[r];Vi(o,[Ce.scales[o.type],Ce.scale])}),a}function eh(e){const t=e.options||(e.options={});t.plugins=Ut(t.plugins,{}),t.scales=oy(e,t)}function sh(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function ly(e){return e=e||{},e.data=sh(e.data),eh(e),e}const $c=new Map,nh=new Set;function Ca(e,t){let s=$c.get(e);return s||(s=t(),$c.set(e,s),nh.add(s)),s}const Ti=(e,t,s)=>{const n=kn(t,s);n!==void 0&&e.add(n)};class cy{constructor(t){this._config=ly(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=sh(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),eh(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ca(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,s){return Ca(`${t}.transition.${s}`,()=>[[`datasets.${t}.transitions.${s}`,`transitions.${s}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,s){return Ca(`${t}-${s}`,()=>[[`datasets.${t}.elements.${s}`,`datasets.${t}`,`elements.${s}`,""]])}pluginScopeKeys(t){const s=t.id,n=this.type;return Ca(`${n}-plugin-${s}`,()=>[[`plugins.${s}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,s){const n=this._scopeCache;let i=n.get(t);return(!i||s)&&(i=new Map,n.set(t,i)),i}getOptionScopes(t,s,n){const{options:i,type:a}=this,r=this._cachedScopes(t,n),o=r.get(s);if(o)return o;const l=new Set;s.forEach(d=>{t&&(l.add(t),d.forEach(h=>Ti(l,t,h))),d.forEach(h=>Ti(l,i,h)),d.forEach(h=>Ti(l,Hn[a]||{},h)),d.forEach(h=>Ti(l,Ce,h)),d.forEach(h=>Ti(l,co,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),nh.has(s)&&r.set(s,c),c}chartOptionScopes(){const{options:t,type:s}=this;return[t,Hn[s]||{},Ce.datasets[s]||{},{type:s},Ce,co]}resolveNamedOptions(t,s,n,i=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=Sc(this._resolverCache,t,i);let l=r;if(uy(r,s)){a.$shared=!1,n=wn(n)?n():n;const c=this.createResolver(t,n,o);l=pi(r,n,c)}for(const c of s)a[c]=l[c];return a}createResolver(t,s,n=[""],i){const{resolver:a}=Sc(this._resolverCache,t,n);return ae(s)?pi(a,s,void 0,i):a}}function Sc(e,t,s){let n=e.get(t);n||(n=new Map,e.set(t,n));const i=s.join();let a=n.get(i);return a||(a={resolver:Jo(t,s),subPrefixes:s.filter(o=>!o.toLowerCase().includes("hover"))},n.set(i,a)),a}const dy=e=>ae(e)&&Object.getOwnPropertyNames(e).some(t=>wn(e[t]));function uy(e,t){const{isScriptable:s,isIndexable:n}=Ou(e);for(const i of t){const a=s(i),r=n(i),o=(r||a)&&e[i];if(a&&(wn(o)||dy(o))||r&&Ae(o))return!0}return!1}var hy="4.5.1";const fy=["top","bottom","left","right","chartArea"];function Mc(e,t){return e==="top"||e==="bottom"||fy.indexOf(e)===-1&&t==="x"}function Pc(e,t){return function(s,n){return s[e]===n[e]?s[t]-n[t]:s[e]-n[e]}}function Ac(e){const t=e.chart,s=t.options.animation;t.notifyPlugins("afterRender"),$e(s&&s.onComplete,[e],t)}function vy(e){const t=e.chart,s=t.options.animation;$e(s&&s.onProgress,[e],t)}function ih(e){return tl()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Na={},Cc=e=>{const t=ih(e);return Object.values(Na).filter(s=>s.canvas===t).pop()};function py(e,t,s){const n=Object.keys(e);for(const i of n){const a=+i;if(a>=t){const r=e[i];delete e[i],(s>0||a>t)&&(e[a+s]=r)}}}function gy(e,t,s,n){return!s||e.type==="mouseout"?null:n?t:e}class vo{static defaults=Ce;static instances=Na;static overrides=Hn;static registry=Is;static version=hy;static getChart=Cc;static register(...t){Is.add(...t),zc()}static unregister(...t){Is.remove(...t),zc()}constructor(t,s){const n=this.config=new cy(s),i=ih(t),a=Cc(i);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||O0(i)),this.platform.updateConfig(n);const o=this.platform.acquireContext(i,r.aspectRatio),l=o&&o.canvas,c=l&&l.height,d=l&&l.width;if(this.id=u1(),this.ctx=o,this.canvas=l,this.width=d,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Q0,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=A1(h=>this.update(h),r.resizeDelay||0),this._dataChanges=[],Na[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ws.listen(this,"complete",Ac),Ws.listen(this,"progress",vy),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:s},width:n,height:i,_aspectRatio:a}=this;return ne(t)?s&&a?a:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Is}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ql(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Xl(this.canvas,this.ctx),this}stop(){return Ws.stop(this),this}resize(t,s){Ws.running(this)?this._resizeBeforeDraw={width:t,height:s}:this._resize(t,s)}_resize(t,s){const n=this.options,i=this.canvas,a=n.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(i,t,s,a),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Ql(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),$e(n.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};ye(s,(n,i)=>{n.id=i})}buildOrUpdateScales(){const t=this.options,s=t.scales,n=this.scales,i=Object.keys(n).reduce((r,o)=>(r[o]=!1,r),{});let a=[];s&&(a=a.concat(Object.keys(s).map(r=>{const o=s[r],l=fo(r,o),c=l==="r",d=l==="x";return{options:o,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),ye(a,r=>{const o=r.options,l=o.id,c=fo(l,o),d=Ut(o.type,r.dtype);(o.position===void 0||Mc(o.position,c)!==Mc(r.dposition))&&(o.position=r.dposition),i[l]=!0;let h=null;if(l in n&&n[l].type===d)h=n[l];else{const f=Is.getScale(d);h=new f({id:l,type:d,ctx:this.ctx,chart:this}),n[h.id]=h}h.init(o,t)}),ye(i,(r,o)=>{r||delete n[o]}),ye(n,r=>{ns.configure(this,r,r.options),ns.addBox(this,r)})}_updateMetasets(){const t=this._metasets,s=this.data.datasets.length,n=t.length;if(t.sort((i,a)=>i.index-a.index),n>s){for(let i=s;i<n;++i)this._destroyDatasetMeta(i);t.splice(s,n-s)}this._sortedMetasets=t.slice(0).sort(Pc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:s}}=this;t.length>s.length&&delete this._stacks,t.forEach((n,i)=>{s.filter(a=>a===n._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],s=this.data.datasets;let n,i;for(this._removeUnreferencedMetasets(),n=0,i=s.length;n<i;n++){const a=s[n];let r=this.getDatasetMeta(n);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(n),r=this.getDatasetMeta(n)),r.type=o,r.indexAxis=a.indexAxis||ho(o,this.options),r.order=a.order||0,r.index=n,r.label=""+a.label,r.visible=this.isDatasetVisible(n),r.controller)r.controller.updateIndex(n),r.controller.linkScales();else{const l=Is.getController(o),{datasetElementType:c,dataElementType:d}=Ce.datasets[o];Object.assign(l,{dataElementType:Is.getElement(d),datasetElementType:c&&Is.getElement(c)}),r.controller=new l(this,n),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){ye(this.data.datasets,(t,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const s=this.config;s.update();const n=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:h}=this.getDatasetMeta(c),f=!i&&a.indexOf(h)===-1;h.buildOrUpdateElements(f),r=Math.max(+h.getMaxOverflow(),r)}r=this._minPadding=n.layout.autoPadding?r:0,this._updateLayout(r),i||ye(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Pc("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){ye(this.scales,t=>{ns.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,s=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!Fl(s,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,s=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:a}of s){const r=n==="_removeElements"?-a:a;py(t,i,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const s=this.data.datasets.length,n=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),i=n(0);for(let a=1;a<s;a++)if(!Fl(i,n(a)))return;return Array.from(i).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ns.update(this,this.width,this.height,t);const s=this.chartArea,n=s.width<=0||s.height<=0;this._layers=[],ye(this.boxes,i=>{n&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,a)=>{i._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let s=0,n=this.data.datasets.length;s<n;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,n=this.data.datasets.length;s<n;++s)this._updateDataset(s,wn(t)?t({datasetIndex:s}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,s){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(n.controller._update(s),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ws.has(this)?this.attached&&!Ws.running(this)&&Ws.start(this):(this.draw(),Ac({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(t=0;t<s.length&&s[t].z<=0;++t)s[t].draw(this.chartArea);for(this._drawDatasets();t<s.length;++t)s[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const s=this._sortedMetasets,n=[];let i,a;for(i=0,a=s.length;i<a;++i){const r=s[i];(!t||r.visible)&&n.push(r)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let s=t.length-1;s>=0;--s)this._drawDataset(t[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const s=this.ctx,n={meta:t,index:t.index,cancelable:!0},i=Wu(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(i&&pr(s,i),t.controller.draw(),i&&gr(s),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return Zs(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,s,n,i){const a=f0.modes[s];return typeof a=="function"?a(this,t,n,i):[]}getDatasetMeta(t){const s=this.data.datasets[t],n=this._metasets;let i=n.filter(a=>a&&a._dataset===s).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:t,_dataset:s,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=$n(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const s=this.data.datasets[t];if(!s)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!s.hidden}setDatasetVisibility(t,s){const n=this.getDatasetMeta(t);n.hidden=!s}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,s,n){const i=n?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,i);Ji(s)?(a.data[s].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),r.update(a,{visible:n}),this.update(o=>o.datasetIndex===t?i:void 0))}hide(t,s){this._updateVisibility(t,s,!1)}show(t,s){this._updateVisibility(t,s,!0)}_destroyDatasetMeta(t){const s=this._metasets[t];s&&s.controller&&s.controller._destroy(),delete this._metasets[t]}_stop(){let t,s;for(this.stop(),Ws.remove(this),t=0,s=this.data.datasets.length;t<s;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:s}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Xl(t,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Na[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,s=this.platform,n=(a,r)=>{s.addEventListener(this,a,r),t[a]=r},i=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};ye(this.options.events,a=>n(a,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,s=this.platform,n=(l,c)=>{s.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(s.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const o=()=>{i("attach",o),this.attached=!0,this.resize(),n("resize",a),n("detach",r)};r=()=>{this.attached=!1,i("resize",a),this._stop(),this._resize(0,0),n("attach",o)},s.isAttached(this.canvas)?o():r()}unbindEvents(){ye(this._listeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._listeners={},ye(this._responsiveListeners,(t,s)=>{this.platform.removeEventListener(this,s,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,s,n){const i=n?"set":"remove";let a,r,o,l;for(s==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+i+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[i+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const s=this._active||[],n=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!Ga(n,s)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,s))}notifyPlugins(t,s,n){return this._plugins.notify(this,t,s,n)}isPluginEnabled(t){return this._plugins._cache.filter(s=>s.plugin.id===t).length===1}_updateHoverStyles(t,s,n){const i=this.options.hover,a=(l,c)=>l.filter(d=>!c.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),r=a(s,t),o=n?t:a(t,s);r.length&&this.updateHoverStyle(r,i.mode,!1),o.length&&i.mode&&this.updateHoverStyle(o,i.mode,!0)}_eventHandler(t,s){const n={event:t,replay:s,cancelable:!0,inChartArea:this.isPointInArea(t)},i=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,i)===!1)return;const a=this._handleEvent(t,s,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(a||n.changed)&&this.render(),this}_handleEvent(t,s,n){const{_active:i=[],options:a}=this,r=s,o=this._getActiveElements(t,i,n,r),l=m1(t),c=gy(t,this._lastEvent,n,l);n&&(this._lastEvent=null,$e(a.onHover,[t,o,this],this),l&&$e(a.onClick,[t,o,this],this));const d=!Ga(o,i);return(d||s)&&(this._active=o,this._updateHoverStyles(o,i,s)),this._lastEvent=c,d}_getActiveElements(t,s,n,i){if(t.type==="mouseout")return[];if(!n)return s;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,i)}}function zc(){return ye(vo.instances,e=>e._plugins.invalidate())}function my(e,t,s){const{startAngle:n,x:i,y:a,outerRadius:r,innerRadius:o,options:l}=t,{borderWidth:c,borderJoinStyle:d}=l,h=Math.min(c/r,ss(n-s));if(e.beginPath(),e.arc(i,a,r-c/2,n+h/2,s-h/2),o>0){const f=Math.min(c/o,ss(n-s));e.arc(i,a,o+c/2,s-f/2,n+f/2,!0)}else{const f=Math.min(c/2,r*ss(n-s));if(d==="round")e.arc(i,a,f,s-pe/2,n+pe/2,!0);else if(d==="bevel"){const v=2*f*f,g=-v*Math.cos(s+pe/2)+i,m=-v*Math.sin(s+pe/2)+a,b=v*Math.cos(n+pe/2)+i,y=v*Math.sin(n+pe/2)+a;e.lineTo(g,m),e.lineTo(b,y)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function _y(e,t,s){const{startAngle:n,pixelMargin:i,x:a,y:r,outerRadius:o,innerRadius:l}=t;let c=i/o;e.beginPath(),e.arc(a,r,o,n-c,s+c),l>i?(c=i/l,e.arc(a,r,l,s+c,n-c,!0)):e.arc(a,r,i,s+je,n-je),e.closePath(),e.clip()}function by(e){return Go(e,["outerStart","outerEnd","innerStart","innerEnd"])}function yy(e,t,s,n){const i=by(e.options.borderRadius),a=(s-t)/2,r=Math.min(a,n*t/2),o=l=>{const c=(s-Math.min(a,l))*n/2;return Ye(l,0,Math.min(a,c))};return{outerStart:o(i.outerStart),outerEnd:o(i.outerEnd),innerStart:Ye(i.innerStart,0,r),innerEnd:Ye(i.innerEnd,0,r)}}function Zn(e,t,s,n){return{x:s+e*Math.cos(t),y:n+e*Math.sin(t)}}function sr(e,t,s,n,i,a){const{x:r,y:o,startAngle:l,pixelMargin:c,innerRadius:d}=t,h=Math.max(t.outerRadius+n+s-c,0),f=d>0?d+n+s+c:0;let v=0;const g=i-l;if(n){const V=d>0?d-n:0,X=h>0?h-n:0,J=(V+X)/2,xt=J!==0?g*J/(J+n):g;v=(g-xt)/2}const m=Math.max(.001,g*h-s/pe)/h,b=(g-m)/2,y=l+b+v,S=i-b-v,{outerStart:k,outerEnd:w,innerStart:$,innerEnd:A}=yy(t,f,h,S-y),z=h-k,C=h-w,T=y+k/z,E=S-w/C,L=f+$,N=f+A,Z=y+$/L,K=S-A/N;if(e.beginPath(),a){const V=(T+E)/2;if(e.arc(r,o,h,T,V),e.arc(r,o,h,V,E),w>0){const yt=Zn(C,E,r,o);e.arc(yt.x,yt.y,w,E,S+je)}const X=Zn(N,S,r,o);if(e.lineTo(X.x,X.y),A>0){const yt=Zn(N,K,r,o);e.arc(yt.x,yt.y,A,S+je,K+Math.PI)}const J=(S-A/f+(y+$/f))/2;if(e.arc(r,o,f,S-A/f,J,!0),e.arc(r,o,f,J,y+$/f,!0),$>0){const yt=Zn(L,Z,r,o);e.arc(yt.x,yt.y,$,Z+Math.PI,y-je)}const xt=Zn(z,y,r,o);if(e.lineTo(xt.x,xt.y),k>0){const yt=Zn(z,T,r,o);e.arc(yt.x,yt.y,k,y-je,T)}}else{e.moveTo(r,o);const V=Math.cos(T)*h+r,X=Math.sin(T)*h+o;e.lineTo(V,X);const J=Math.cos(E)*h+r,xt=Math.sin(E)*h+o;e.lineTo(J,xt)}e.closePath()}function xy(e,t,s,n,i){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){sr(e,t,s,n,l,i);for(let c=0;c<a;++c)e.fill();isNaN(o)||(l=r+(o%Se||Se))}return sr(e,t,s,n,l,i),e.fill(),l}function ky(e,t,s,n,i){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:c,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:v}=l,g=l.borderAlign==="inner";if(!c)return;e.setLineDash(h||[]),e.lineDashOffset=f,g?(e.lineWidth=c*2,e.lineJoin=d||"round"):(e.lineWidth=c,e.lineJoin=d||"bevel");let m=t.endAngle;if(a){sr(e,t,s,n,m,i);for(let b=0;b<a;++b)e.stroke();isNaN(o)||(m=r+(o%Se||Se))}g&&_y(e,t,m),l.selfJoin&&m-r>=pe&&v===0&&d!=="miter"&&my(e,t,m),a||(sr(e,t,s,n,m,i),e.stroke())}class wy extends an{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,s,n){const i=this.getProps(["x","y"],n),{angle:a,distance:r}=$u(i,{x:t,y:s}),{startAngle:o,endAngle:l,innerRadius:c,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,v=Ut(h,l-o),g=Qi(a,o,l)&&o!==l,m=v>=Se||g,b=Js(r,c+f,d+f);return m&&b}getCenterPoint(t){const{x:s,y:n,startAngle:i,endAngle:a,innerRadius:r,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,d=(i+a)/2,h=(r+o+c+l)/2;return{x:s+Math.cos(d)*h,y:n+Math.sin(d)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:s,circumference:n}=this,i=(s.offset||0)/4,a=(s.spacing||0)/2,r=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>Se?Math.floor(n/Se):0,n===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const o=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(o)*i,Math.sin(o)*i);const l=1-Math.sin(Math.min(pe,n||0)),c=i*l;t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,xy(t,this,c,a,r),ky(t,this,c,a,r),t.restore()}}function ah(e,t,s=t){e.lineCap=Ut(s.borderCapStyle,t.borderCapStyle),e.setLineDash(Ut(s.borderDash,t.borderDash)),e.lineDashOffset=Ut(s.borderDashOffset,t.borderDashOffset),e.lineJoin=Ut(s.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Ut(s.borderWidth,t.borderWidth),e.strokeStyle=Ut(s.borderColor,t.borderColor)}function $y(e,t,s){e.lineTo(s.x,s.y)}function Sy(e){return e.stepped?F1:e.tension||e.cubicInterpolationMode==="monotone"?B1:$y}function rh(e,t,s={}){const n=e.length,{start:i=0,end:a=n-1}=s,{start:r,end:o}=t,l=Math.max(i,r),c=Math.min(a,o),d=i<r&&a<r||i>o&&a>o;return{count:n,start:l,loop:t.loop,ilen:c<l&&!d?n+c-l:c-l}}function My(e,t,s,n){const{points:i,options:a}=t,{count:r,start:o,loop:l,ilen:c}=rh(i,s,n),d=Sy(a);let{move:h=!0,reverse:f}=n||{},v,g,m;for(v=0;v<=c;++v)g=i[(o+(f?c-v:v))%r],!g.skip&&(h?(e.moveTo(g.x,g.y),h=!1):d(e,m,g,f,a.stepped),m=g);return l&&(g=i[(o+(f?c:0))%r],d(e,m,g,f,a.stepped)),!!l}function Py(e,t,s,n){const i=t.points,{count:a,start:r,ilen:o}=rh(i,s,n),{move:l=!0,reverse:c}=n||{};let d=0,h=0,f,v,g,m,b,y;const S=w=>(r+(c?o-w:w))%a,k=()=>{m!==b&&(e.lineTo(d,b),e.lineTo(d,m),e.lineTo(d,y))};for(l&&(v=i[S(0)],e.moveTo(v.x,v.y)),f=0;f<=o;++f){if(v=i[S(f)],v.skip)continue;const w=v.x,$=v.y,A=w|0;A===g?($<m?m=$:$>b&&(b=$),d=(h*d+w)/++h):(k(),e.lineTo(w,$),g=A,h=0,m=b=$),y=$}k()}function po(e){const t=e.options,s=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!s?Py:My}function Ay(e){return e.stepped?bb:e.tension||e.cubicInterpolationMode==="monotone"?yb:Dn}function Cy(e,t,s,n){let i=t._path;i||(i=t._path=new Path2D,t.path(i,s,n)&&i.closePath()),ah(e,t.options),e.stroke(i)}function zy(e,t,s,n){const{segments:i,options:a}=t,r=po(t);for(const o of i)ah(e,a,o.style),e.beginPath(),r(e,t,o,{start:s,end:s+n-1})&&e.closePath(),e.stroke()}const Ty=typeof Path2D=="function";function Ey(e,t,s,n){Ty&&!t.options.segment?Cy(e,t,s,n):zy(e,t,s,n)}class br extends an{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,s){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const i=n.spanGaps?this._loop:this._fullLoop;ub(this._points,n,t,i,s),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Mb(this,this.options.segment))}first(){const t=this.segments,s=this.points;return t.length&&s[t[0].start]}last(){const t=this.segments,s=this.points,n=t.length;return n&&s[t[n-1].end]}interpolate(t,s){const n=this.options,i=t[s],a=this.points,r=Hu(this,{property:s,start:i,end:i});if(!r.length)return;const o=[],l=Ay(n);let c,d;for(c=0,d=r.length;c<d;++c){const{start:h,end:f}=r[c],v=a[h],g=a[f];if(v===g){o.push(v);continue}const m=Math.abs((i-v[s])/(g[s]-v[s])),b=l(v,g,m,n.stepped);b[s]=t[s],o.push(b)}return o.length===1?o[0]:o}pathSegment(t,s,n){return po(this)(t,this,s,n)}path(t,s,n){const i=this.segments,a=po(this);let r=this._loop;s=s||0,n=n||this.points.length-s;for(const o of i)r&=a(t,this,o,{start:s,end:s+n-1});return!!r}draw(t,s,n,i){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Ey(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Tc(e,t,s,n){const i=e.options,{[s]:a}=e.getProps([s],n);return Math.abs(t-a)<i.radius+i.hitRadius}class Dy extends an{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,s,n){const i=this.options,{x:a,y:r}=this.getProps(["x","y"],n);return Math.pow(t-a,2)+Math.pow(s-r,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,s){return Tc(this,t,"x",s)}inYRange(t,s){return Tc(this,t,"y",s)}getCenterPoint(t){const{x:s,y:n}=this.getProps(["x","y"],t);return{x:s,y:n}}size(t){t=t||this.options||{};let s=t.radius||0;s=Math.max(s,s&&t.hoverRadius||0);const n=s&&t.borderWidth||0;return(s+n)*2}draw(t,s){const n=this.options;this.skip||n.radius<.1||!Zs(this,s,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,uo(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function oh(e,t){const{x:s,y:n,base:i,width:a,height:r}=e.getProps(["x","y","base","width","height"],t);let o,l,c,d,h;return e.horizontal?(h=r/2,o=Math.min(s,i),l=Math.max(s,i),c=n-h,d=n+h):(h=a/2,o=s-h,l=s+h,c=Math.min(n,i),d=Math.max(n,i)),{left:o,top:c,right:l,bottom:d}}function fn(e,t,s,n){return e?0:Ye(t,s,n)}function Oy(e,t,s){const n=e.options.borderWidth,i=e.borderSkipped,a=Du(n);return{t:fn(i.top,a.top,0,s),r:fn(i.right,a.right,0,t),b:fn(i.bottom,a.bottom,0,s),l:fn(i.left,a.left,0,t)}}function Ry(e,t,s){const{enableBorderRadius:n}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,a=Fn(i),r=Math.min(t,s),o=e.borderSkipped,l=n||ae(i);return{topLeft:fn(!l||o.top||o.left,a.topLeft,0,r),topRight:fn(!l||o.top||o.right,a.topRight,0,r),bottomLeft:fn(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:fn(!l||o.bottom||o.right,a.bottomRight,0,r)}}function Ly(e){const t=oh(e),s=t.right-t.left,n=t.bottom-t.top,i=Oy(e,s/2,n/2),a=Ry(e,s/2,n/2);return{outer:{x:t.left,y:t.top,w:s,h:n,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:s-i.l-i.r,h:n-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Br(e,t,s,n){const i=t===null,a=s===null,o=e&&!(i&&a)&&oh(e,n);return o&&(i||Js(t,o.left,o.right))&&(a||Js(s,o.top,o.bottom))}function Iy(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function jy(e,t){e.rect(t.x,t.y,t.w,t.h)}function qr(e,t,s={}){const n=e.x!==s.x?-t:0,i=e.y!==s.y?-t:0,a=(e.x+e.w!==s.x+s.w?t:0)-n,r=(e.y+e.h!==s.y+s.h?t:0)-i;return{x:e.x+n,y:e.y+i,w:e.w+a,h:e.h+r,radius:e.radius}}class Ny extends an{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:s,options:{borderColor:n,backgroundColor:i}}=this,{inner:a,outer:r}=Ly(this),o=Iy(r.radius)?Zi:jy;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,qr(r,s,a)),t.clip(),o(t,qr(a,-s,r)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),o(t,qr(a,s)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,s,n){return Br(this,t,s,n)}inXRange(t,s){return Br(this,t,null,s)}inYRange(t,s){return Br(this,null,t,s)}getCenterPoint(t){const{x:s,y:n,base:i,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(s+i)/2:s,y:a?n:(n+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var Fy=Object.freeze({__proto__:null,ArcElement:wy,BarElement:Ny,LineElement:br,PointElement:Dy});const go=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ec=go.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function lh(e){return go[e%go.length]}function ch(e){return Ec[e%Ec.length]}function By(e,t){return e.borderColor=lh(t),e.backgroundColor=ch(t),++t}function qy(e,t){return e.backgroundColor=e.data.map(()=>lh(t++)),t}function Vy(e,t){return e.backgroundColor=e.data.map(()=>ch(t++)),t}function Hy(e){let t=0;return(s,n)=>{const i=e.getDatasetMeta(n).controller;i instanceof sl?t=qy(s,t):i instanceof Xu?t=Vy(s,t):i&&(t=By(s,t))}}function Dc(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Wy(e){return e&&(e.borderColor||e.backgroundColor)}function Uy(){return Ce.borderColor!=="rgba(0,0,0,0.1)"||Ce.backgroundColor!=="rgba(0,0,0,0.1)"}var Yy={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,s){if(!s.enabled)return;const{data:{datasets:n},options:i}=e.config,{elements:a}=i,r=Dc(n)||Wy(i)||a&&Dc(a)||Uy();if(!s.forceOverride&&r)return;const o=Hy(e);n.forEach(o)}};function Ky(e,t,s,n,i){const a=i.samples||n;if(a>=s)return e.slice(t,t+s);const r=[],o=(s-2)/(a-2);let l=0;const c=t+s-1;let d=t,h,f,v,g,m;for(r[l++]=e[d],h=0;h<a-2;h++){let b=0,y=0,S;const k=Math.floor((h+1)*o)+1+t,w=Math.min(Math.floor((h+2)*o)+1,s)+t,$=w-k;for(S=k;S<w;S++)b+=e[S].x,y+=e[S].y;b/=$,y/=$;const A=Math.floor(h*o)+1+t,z=Math.min(Math.floor((h+1)*o)+1,s)+t,{x:C,y:T}=e[d];for(v=g=-1,S=A;S<z;S++)g=.5*Math.abs((C-b)*(e[S].y-T)-(C-e[S].x)*(y-T)),g>v&&(v=g,f=e[S],m=S);r[l++]=f,d=m}return r[l++]=e[c],r}function Xy(e,t,s,n){let i=0,a=0,r,o,l,c,d,h,f,v,g,m;const b=[],y=t+s-1,S=e[t].x,w=e[y].x-S;for(r=t;r<t+s;++r){o=e[r],l=(o.x-S)/w*n,c=o.y;const $=l|0;if($===d)c<g?(g=c,h=r):c>m&&(m=c,f=r),i=(a*i+o.x)/++a;else{const A=r-1;if(!ne(h)&&!ne(f)){const z=Math.min(h,f),C=Math.max(h,f);z!==v&&z!==A&&b.push({...e[z],x:i}),C!==v&&C!==A&&b.push({...e[C],x:i})}r>0&&A!==v&&b.push(e[A]),b.push(o),d=$,a=0,g=m=c,h=f=v=r}}return b}function dh(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Oc(e){e.data.datasets.forEach(t=>{dh(t)})}function Gy(e,t){const s=t.length;let n=0,i;const{iScale:a}=e,{min:r,max:o,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(n=Ye(Qs(t,a.axis,r).lo,0,s-1)),c?i=Ye(Qs(t,a.axis,o).hi+1,n,s)-n:i=s-n,{start:n,count:i}}var Jy={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,s)=>{if(!s.enabled){Oc(e);return}const n=e.width;e.data.datasets.forEach((i,a)=>{const{_data:r,indexAxis:o}=i,l=e.getDatasetMeta(a),c=r||i.data;if(Ri([o,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const d=e.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||e.options.parsing)return;let{start:h,count:f}=Gy(l,c);const v=s.threshold||4*n;if(f<=v){dh(i);return}ne(r)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let g;switch(s.algorithm){case"lttb":g=Ky(c,h,f,n,s);break;case"min-max":g=Xy(c,h,f,n);break;default:throw new Error(`Unsupported decimation algorithm '${s.algorithm}'`)}i._decimated=g})},destroy(e){Oc(e)}};function Qy(e,t,s){const n=e.segments,i=e.points,a=t.points,r=[];for(const o of n){let{start:l,end:c}=o;c=yr(l,c,i);const d=mo(s,i[l],i[c],o.loop);if(!t.segments){r.push({source:o,target:d,start:i[l],end:i[c]});continue}const h=Hu(t,d);for(const f of h){const v=mo(s,a[f.start],a[f.end],f.loop),g=Vu(o,i,v);for(const m of g)r.push({source:m,target:f,start:{[s]:Rc(d,v,"start",Math.max)},end:{[s]:Rc(d,v,"end",Math.min)}})}}return r}function mo(e,t,s,n){if(n)return;let i=t[e],a=s[e];return e==="angle"&&(i=ss(i),a=ss(a)),{property:e,start:i,end:a}}function Zy(e,t){const{x:s=null,y:n=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=yr(r,o,i);const l=i[r],c=i[o];n!==null?(a.push({x:l.x,y:n}),a.push({x:c.x,y:n})):s!==null&&(a.push({x:s,y:l.y}),a.push({x:s,y:c.y}))}),a}function yr(e,t,s){for(;t>e;t--){const n=s[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function Rc(e,t,s,n){return e&&t?n(e[s],t[s]):e?e[s]:t?t[s]:0}function uh(e,t){let s=[],n=!1;return Ae(e)?(n=!0,s=e):s=Zy(e,t),s.length?new br({points:s,options:{tension:0},_loop:n,_fullLoop:n}):null}function Lc(e){return e&&e.fill!==!1}function tx(e,t,s){let i=e[t].fill;const a=[t];let r;if(!s)return i;for(;i!==!1&&a.indexOf(i)===-1;){if(!Le(i))return i;if(r=e[i],!r)return!1;if(r.visible)return i;a.push(i),i=r.fill}return!1}function ex(e,t,s){const n=ax(e);if(ae(n))return isNaN(n.value)?!1:n;let i=parseFloat(n);return Le(i)&&Math.floor(i)===i?sx(n[0],t,i,s):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function sx(e,t,s,n){return(e==="-"||e==="+")&&(s=t+s),s===t||s<0||s>=n?!1:s}function nx(e,t){let s=null;return e==="start"?s=t.bottom:e==="end"?s=t.top:ae(e)?s=t.getPixelForValue(e.value):t.getBasePixel&&(s=t.getBasePixel()),s}function ix(e,t,s){let n;return e==="start"?n=s:e==="end"?n=t.options.reverse?t.min:t.max:ae(e)?n=e.value:n=t.getBaseValue(),n}function ax(e){const t=e.options,s=t.fill;let n=Ut(s&&s.target,s);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function rx(e){const{scale:t,index:s,line:n}=e,i=[],a=n.segments,r=n.points,o=ox(t,s);o.push(uh({x:null,y:t.bottom},n));for(let l=0;l<a.length;l++){const c=a[l];for(let d=c.start;d<=c.end;d++)lx(i,r[d],o)}return new br({points:i,options:{}})}function ox(e,t){const s=[],n=e.getMatchingVisibleMetas("line");for(let i=0;i<n.length;i++){const a=n[i];if(a.index===t)break;a.hidden||s.unshift(a.dataset)}return s}function lx(e,t,s){const n=[];for(let i=0;i<s.length;i++){const a=s[i],{first:r,last:o,point:l}=cx(a,t,"x");if(!(!l||r&&o)){if(r)n.unshift(l);else if(e.push(l),!o)break}}e.push(...n)}function cx(e,t,s){const n=e.interpolate(t,s);if(!n)return{};const i=n[s],a=e.segments,r=e.points;let o=!1,l=!1;for(let c=0;c<a.length;c++){const d=a[c],h=r[d.start][s],f=r[d.end][s];if(Js(i,h,f)){o=i===h,l=i===f;break}}return{first:o,last:l,point:n}}class hh{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,s,n){const{x:i,y:a,radius:r}=this;return s=s||{start:0,end:Se},t.arc(i,a,r,s.end,s.start,!0),!n.bounds}interpolate(t){const{x:s,y:n,radius:i}=this,a=t.angle;return{x:s+Math.cos(a)*i,y:n+Math.sin(a)*i,angle:a}}}function dx(e){const{chart:t,fill:s,line:n}=e;if(Le(s))return ux(t,s);if(s==="stack")return rx(e);if(s==="shape")return!0;const i=hx(e);return i instanceof hh?i:uh(i,n)}function ux(e,t){const s=e.getDatasetMeta(t);return s&&e.isDatasetVisible(t)?s.dataset:null}function hx(e){return(e.scale||{}).getPointPositionForValue?vx(e):fx(e)}function fx(e){const{scale:t={},fill:s}=e,n=nx(s,t);if(Le(n)){const i=t.isHorizontal();return{x:i?n:null,y:i?null:n}}return null}function vx(e){const{scale:t,fill:s}=e,n=t.options,i=t.getLabels().length,a=n.reverse?t.max:t.min,r=ix(s,t,a),o=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,a);return new hh({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<i;++l)o.push(t.getPointPositionForValue(l,r));return o}function Vr(e,t,s){const n=dx(t),{chart:i,index:a,line:r,scale:o,axis:l}=t,c=r.options,d=c.fill,h=c.backgroundColor,{above:f=h,below:v=h}=d||{},g=i.getDatasetMeta(a),m=Wu(i,g);n&&r.points.length&&(pr(e,s),px(e,{line:r,target:n,above:f,below:v,area:s,scale:o,axis:l,clip:m}),gr(e))}function px(e,t){const{line:s,target:n,above:i,below:a,area:r,scale:o,clip:l}=t,c=s._loop?"angle":t.axis;e.save();let d=a;a!==i&&(c==="x"?(Ic(e,n,r.top),Hr(e,{line:s,target:n,color:i,scale:o,property:c,clip:l}),e.restore(),e.save(),Ic(e,n,r.bottom)):c==="y"&&(jc(e,n,r.left),Hr(e,{line:s,target:n,color:a,scale:o,property:c,clip:l}),e.restore(),e.save(),jc(e,n,r.right),d=i)),Hr(e,{line:s,target:n,color:d,scale:o,property:c,clip:l}),e.restore()}function Ic(e,t,s){const{segments:n,points:i}=t;let a=!0,r=!1;e.beginPath();for(const o of n){const{start:l,end:c}=o,d=i[l],h=i[yr(l,c,i)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(d.x,s),e.lineTo(d.x,d.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(h.x,s)}e.lineTo(t.first().x,s),e.closePath(),e.clip()}function jc(e,t,s){const{segments:n,points:i}=t;let a=!0,r=!1;e.beginPath();for(const o of n){const{start:l,end:c}=o,d=i[l],h=i[yr(l,c,i)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(s,d.y),e.lineTo(d.x,d.y)),r=!!t.pathSegment(e,o,{move:r}),r?e.closePath():e.lineTo(s,h.y)}e.lineTo(s,t.first().y),e.closePath(),e.clip()}function Hr(e,t){const{line:s,target:n,property:i,color:a,scale:r,clip:o}=t,l=Qy(s,n,i);for(const{source:c,target:d,start:h,end:f}of l){const{style:{backgroundColor:v=a}={}}=c,g=n!==!0;e.save(),e.fillStyle=v,gx(e,r,o,g&&mo(i,h,f)),e.beginPath();const m=!!s.pathSegment(e,c);let b;if(g){m?e.closePath():Nc(e,n,f,i);const y=!!n.pathSegment(e,d,{move:m,reverse:!0});b=m&&y,b||Nc(e,n,h,i)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function gx(e,t,s,n){const i=t.chart.chartArea,{property:a,start:r,end:o}=n||{};if(a==="x"||a==="y"){let l,c,d,h;a==="x"?(l=r,c=i.top,d=o,h=i.bottom):(l=i.left,c=r,d=i.right,h=o),e.beginPath(),s&&(l=Math.max(l,s.left),d=Math.min(d,s.right),c=Math.max(c,s.top),h=Math.min(h,s.bottom)),e.rect(l,c,d-l,h-c),e.clip()}}function Nc(e,t,s,n){const i=t.interpolate(s,n);i&&e.lineTo(i.x,i.y)}var mx={id:"filler",afterDatasetsUpdate(e,t,s){const n=(e.data.datasets||[]).length,i=[];let a,r,o,l;for(r=0;r<n;++r)a=e.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof br&&(l={visible:e.isDatasetVisible(r),index:r,fill:ex(o,r,n),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,i.push(l);for(r=0;r<n;++r)l=i[r],!(!l||l.fill===!1)&&(l.fill=tx(i,r,s.propagate))},beforeDraw(e,t,s){const n=s.drawTime==="beforeDraw",i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let r=i.length-1;r>=0;--r){const o=i[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),n&&o.fill&&Vr(e.ctx,o,a))}},beforeDatasetsDraw(e,t,s){if(s.drawTime!=="beforeDatasetsDraw")return;const n=e.getSortedVisibleDatasetMetas();for(let i=n.length-1;i>=0;--i){const a=n[i].$filler;Lc(a)&&Vr(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,t,s){const n=t.meta.$filler;!Lc(n)||s.drawTime!=="beforeDatasetDraw"||Vr(e.ctx,n,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Fc=(e,t)=>{let{boxHeight:s=t,boxWidth:n=t}=e;return e.usePointStyle&&(s=Math.min(s,t),n=e.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:s,itemHeight:Math.max(t,s)}},_x=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Bc extends an{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s,n){this.maxWidth=t,this.maxHeight=s,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let s=$e(t.generateLabels,[this.chart],this)||[];t.filter&&(s=s.filter(n=>t.filter(n,this.chart.data))),t.sort&&(s=s.sort((n,i)=>t.sort(n,i,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:t,ctx:s}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,i=qe(n.font),a=i.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=Fc(n,a);let c,d;s.font=i.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(r,a,o,l)+10):(d=this.maxHeight,c=this._fitCols(r,i,o,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,s,n,i){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=i+o;let h=t;a.textAlign="left",a.textBaseline="middle";let f=-1,v=-d;return this.legendItems.forEach((g,m)=>{const b=n+s/2+a.measureText(g.text).width;(m===0||c[c.length-1]+b+2*o>r)&&(h+=d,c[c.length-(m>0?0:1)]=0,v+=d,f++),l[m]={left:0,top:v,row:f,width:b,height:i},c[c.length-1]+=b+o}),h}_fitCols(t,s,n,i){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=r-t;let h=o,f=0,v=0,g=0,m=0;return this.legendItems.forEach((b,y)=>{const{itemWidth:S,itemHeight:k}=bx(n,s,a,b,i);y>0&&v+k+2*o>d&&(h+=f+o,c.push({width:f,height:v}),g+=f+o,m++,f=v=0),l[y]={left:g,top:v,col:m,width:S,height:k},f=Math.max(f,S),v+=k+o}),h+=f,c.push({width:f,height:v}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:n,labels:{padding:i},rtl:a}}=this,r=si(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=es(n,this.left+i,this.right-this.lineWidths[o]);for(const c of s)o!==c.row&&(o=c.row,l=es(n,this.left+i,this.right-this.lineWidths[o])),c.top+=this.top+t+i,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+i}else{let o=0,l=es(n,this.top+t+i,this.bottom-this.columnSizes[o].height);for(const c of s)c.col!==o&&(o=c.col,l=es(n,this.top+t+i,this.bottom-this.columnSizes[o].height)),c.top=l,c.left+=this.left+i,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;pr(t,this),this._draw(),gr(t)}}_draw(){const{options:t,columnSizes:s,lineWidths:n,ctx:i}=this,{align:a,labels:r}=t,o=Ce.color,l=si(t.rtl,this.left,this.width),c=qe(r.font),{padding:d}=r,h=c.size,f=h/2;let v;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:g,boxHeight:m,itemHeight:b}=Fc(r,h),y=function(A,z,C){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;i.save();const T=Ut(C.lineWidth,1);if(i.fillStyle=Ut(C.fillStyle,o),i.lineCap=Ut(C.lineCap,"butt"),i.lineDashOffset=Ut(C.lineDashOffset,0),i.lineJoin=Ut(C.lineJoin,"miter"),i.lineWidth=T,i.strokeStyle=Ut(C.strokeStyle,o),i.setLineDash(Ut(C.lineDash,[])),r.usePointStyle){const E={radius:m*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:T},L=l.xPlus(A,g/2),N=z+f;Eu(i,E,L,N,r.pointStyleWidth&&g)}else{const E=z+Math.max((h-m)/2,0),L=l.leftForLtr(A,g),N=Fn(C.borderRadius);i.beginPath(),Object.values(N).some(Z=>Z!==0)?Zi(i,{x:L,y:E,w:g,h:m,radius:N}):i.rect(L,E,g,m),i.fill(),T!==0&&i.stroke()}i.restore()},S=function(A,z,C){Wn(i,C.text,A,z+b/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},k=this.isHorizontal(),w=this._computeTitleHeight();k?v={x:es(a,this.left+d,this.right-n[0]),y:this.top+d+w,line:0}:v={x:this.left+d,y:es(a,this.top+w+d,this.bottom-s[0].height),line:0},Fu(this.ctx,t.textDirection);const $=b+d;this.legendItems.forEach((A,z)=>{i.strokeStyle=A.fontColor,i.fillStyle=A.fontColor;const C=i.measureText(A.text).width,T=l.textAlign(A.textAlign||(A.textAlign=r.textAlign)),E=g+f+C;let L=v.x,N=v.y;l.setWidth(this.width),k?z>0&&L+E+d>this.right&&(N=v.y+=$,v.line++,L=v.x=es(a,this.left+d,this.right-n[v.line])):z>0&&N+$>this.bottom&&(L=v.x=L+s[v.line].width+d,v.line++,N=v.y=es(a,this.top+w+d,this.bottom-s[v.line].height));const Z=l.x(L);if(y(Z,N,A),L=C1(T,L+g+f,k?L+E:this.right,t.rtl),S(l.x(L),N,A),k)v.x+=E+d;else if(typeof A.text!="string"){const K=c.lineHeight;v.y+=fh(A,K)+d}else v.y+=$}),Bu(this.ctx,t.textDirection)}drawTitle(){const t=this.options,s=t.title,n=qe(s.font),i=is(s.padding);if(!s.display)return;const a=si(t.rtl,this.left,this.width),r=this.ctx,o=s.position,l=n.size/2,c=i.top+l;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+c,h=es(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((m,b)=>Math.max(m,b.height),0);d=c+es(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const v=es(o,h,h+f);r.textAlign=a.textAlign(Ko(o)),r.textBaseline="middle",r.strokeStyle=s.color,r.fillStyle=s.color,r.font=n.string,Wn(r,s.text,v,d,n)}_computeTitleHeight(){const t=this.options.title,s=qe(t.font),n=is(t.padding);return t.display?s.lineHeight+n.height:0}_getLegendItemAt(t,s){let n,i,a;if(Js(t,this.left,this.right)&&Js(s,this.top,this.bottom)){for(a=this.legendHitBoxes,n=0;n<a.length;++n)if(i=a[n],Js(t,i.left,i.left+i.width)&&Js(s,i.top,i.top+i.height))return this.legendItems[n]}return null}handleEvent(t){const s=this.options;if(!kx(t.type,s))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,a=_x(i,n);i&&!a&&$e(s.onLeave,[t,i,this],this),this._hoveredItem=n,n&&!a&&$e(s.onHover,[t,n,this],this)}else n&&$e(s.onClick,[t,n,this],this)}}function bx(e,t,s,n,i){const a=yx(n,e,t,s),r=xx(i,n,t.lineHeight);return{itemWidth:a,itemHeight:r}}function yx(e,t,s,n){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((a,r)=>a.length>r.length?a:r)),t+s.size/2+n.measureText(i).width}function xx(e,t,s){let n=e;return typeof t.text!="string"&&(n=fh(t,s)),n}function fh(e,t){const s=e.text?e.text.length:0;return t*s}function kx(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var wx={id:"legend",_element:Bc,start(e,t,s){const n=e.legend=new Bc({ctx:e.ctx,options:s,chart:e});ns.configure(e,n,s),ns.addBox(e,n)},stop(e){ns.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,s){const n=e.legend;ns.configure(e,n,s),n.options=s},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,s){const n=t.datasetIndex,i=s.chart;i.isDatasetVisible(n)?(i.hide(n),t.hidden=!0):(i.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:s,pointStyle:n,textAlign:i,color:a,useBorderRadius:r,borderRadius:o}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(s?0:void 0),d=is(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:r&&(o||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class il extends an{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,s){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=s;const i=Ae(n.text)?n.text.length:1;this._padding=is(n.padding);const a=i*qe(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:s,left:n,bottom:i,right:a,options:r}=this,o=r.align;let l=0,c,d,h;return this.isHorizontal()?(d=es(o,n,a),h=s+t,c=a-n):(r.position==="left"?(d=n+t,h=es(o,i,s),l=pe*-.5):(d=a-t,h=es(o,s,i),l=pe*.5),c=i-s),{titleX:d,titleY:h,maxWidth:c,rotation:l}}draw(){const t=this.ctx,s=this.options;if(!s.display)return;const n=qe(s.font),a=n.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:c}=this._drawArgs(a);Wn(t,s.text,0,0,n,{color:s.color,maxWidth:l,rotation:c,textAlign:Ko(s.align),textBaseline:"middle",translation:[r,o]})}}function $x(e,t){const s=new il({ctx:e.ctx,options:t,chart:e});ns.configure(e,s,t),ns.addBox(e,s),e.titleBlock=s}var Sx={id:"title",_element:il,start(e,t,s){$x(e,s)},stop(e){const t=e.titleBlock;ns.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,s){const n=e.titleBlock;ns.configure(e,n,s),n.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const za=new WeakMap;var Mx={id:"subtitle",start(e,t,s){const n=new il({ctx:e.ctx,options:s,chart:e});ns.configure(e,n,s),ns.addBox(e,n),za.set(e,n)},stop(e){ns.removeBox(e,za.get(e)),za.delete(e)},beforeUpdate(e,t,s){const n=za.get(e);ns.configure(e,n,s),n.options=s},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ii={average(e){if(!e.length)return!1;let t,s,n=new Set,i=0,a=0;for(t=0,s=e.length;t<s;++t){const o=e[t].element;if(o&&o.hasValue()){const l=o.tooltipPosition();n.add(l.x),i+=l.y,++a}}return a===0||n.size===0?!1:{x:[...n].reduce((o,l)=>o+l)/n.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let s=t.x,n=t.y,i=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=e.length;a<r;++a){const l=e[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=lo(t,c);d<i&&(i=d,o=l)}}if(o){const l=o.tooltipPosition();s=l.x,n=l.y}return{x:s,y:n}}};function Rs(e,t){return t&&(Ae(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Us(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Px(e,t){const{element:s,datasetIndex:n,index:i}=t,a=e.getDatasetMeta(n).controller,{label:r,value:o}=a.getLabelAndValue(i);return{chart:e,label:r,parsed:a.getParsed(i),raw:e.data.datasets[n].data[i],formattedValue:o,dataset:a.getDataset(),dataIndex:i,datasetIndex:n,element:s}}function qc(e,t){const s=e.chart.ctx,{body:n,footer:i,title:a}=e,{boxWidth:r,boxHeight:o}=t,l=qe(t.bodyFont),c=qe(t.titleFont),d=qe(t.footerFont),h=a.length,f=i.length,v=n.length,g=is(t.padding);let m=g.height,b=0,y=n.reduce((w,$)=>w+$.before.length+$.lines.length+$.after.length,0);if(y+=e.beforeBody.length+e.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),y){const w=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;m+=v*w+(y-v)*l.lineHeight+(y-1)*t.bodySpacing}f&&(m+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let S=0;const k=function(w){b=Math.max(b,s.measureText(w).width+S)};return s.save(),s.font=c.string,ye(e.title,k),s.font=l.string,ye(e.beforeBody.concat(e.afterBody),k),S=t.displayColors?r+2+t.boxPadding:0,ye(n,w=>{ye(w.before,k),ye(w.lines,k),ye(w.after,k)}),S=0,s.font=d.string,ye(e.footer,k),s.restore(),b+=g.width,{width:b,height:m}}function Ax(e,t){const{y:s,height:n}=t;return s<n/2?"top":s>e.height-n/2?"bottom":"center"}function Cx(e,t,s,n){const{x:i,width:a}=n,r=s.caretSize+s.caretPadding;if(e==="left"&&i+a+r>t.width||e==="right"&&i-a-r<0)return!0}function zx(e,t,s,n){const{x:i,width:a}=s,{width:r,chartArea:{left:o,right:l}}=e;let c="center";return n==="center"?c=i<=(o+l)/2?"left":"right":i<=a/2?c="left":i>=r-a/2&&(c="right"),Cx(c,e,t,s)&&(c="center"),c}function Vc(e,t,s){const n=s.yAlign||t.yAlign||Ax(e,s);return{xAlign:s.xAlign||t.xAlign||zx(e,t,s,n),yAlign:n}}function Tx(e,t){let{x:s,width:n}=e;return t==="right"?s-=n:t==="center"&&(s-=n/2),s}function Ex(e,t,s){let{y:n,height:i}=e;return t==="top"?n+=s:t==="bottom"?n-=i+s:n-=i/2,n}function Hc(e,t,s,n){const{caretSize:i,caretPadding:a,cornerRadius:r}=e,{xAlign:o,yAlign:l}=s,c=i+a,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:v}=Fn(r);let g=Tx(t,o);const m=Ex(t,l,c);return l==="center"?o==="left"?g+=c:o==="right"&&(g-=c):o==="left"?g-=Math.max(d,f)+i:o==="right"&&(g+=Math.max(h,v)+i),{x:Ye(g,0,n.width-t.width),y:Ye(m,0,n.height-t.height)}}function Ta(e,t,s){const n=is(s.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-n.right:e.x+n.left}function Wc(e){return Rs([],Us(e))}function Dx(e,t,s){return $n(e,{tooltip:t,tooltipItems:s,type:"tooltip"})}function Uc(e,t){const s=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return s?e.override(s):e}const vh={beforeTitle:Hs,title(e){if(e.length>0){const t=e[0],s=t.chart.data.labels,n=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return s[t.dataIndex]}return""},afterTitle:Hs,beforeBody:Hs,beforeLabel:Hs,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const s=e.formattedValue;return ne(s)||(t+=s),t},labelColor(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const s=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:Hs,afterBody:Hs,beforeFooter:Hs,footer:Hs,afterFooter:Hs};function os(e,t,s,n){const i=e[t].call(s,n);return typeof i>"u"?vh[t].call(s,n):i}class Yc extends an{static positioners=Ii;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const s=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&s.options.animation&&n.animations,a=new Uu(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Dx(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,s){const{callbacks:n}=s,i=os(n,"beforeTitle",this,t),a=os(n,"title",this,t),r=os(n,"afterTitle",this,t);let o=[];return o=Rs(o,Us(i)),o=Rs(o,Us(a)),o=Rs(o,Us(r)),o}getBeforeBody(t,s){return Wc(os(s.callbacks,"beforeBody",this,t))}getBody(t,s){const{callbacks:n}=s,i=[];return ye(t,a=>{const r={before:[],lines:[],after:[]},o=Uc(n,a);Rs(r.before,Us(os(o,"beforeLabel",this,a))),Rs(r.lines,os(o,"label",this,a)),Rs(r.after,Us(os(o,"afterLabel",this,a))),i.push(r)}),i}getAfterBody(t,s){return Wc(os(s.callbacks,"afterBody",this,t))}getFooter(t,s){const{callbacks:n}=s,i=os(n,"beforeFooter",this,t),a=os(n,"footer",this,t),r=os(n,"afterFooter",this,t);let o=[];return o=Rs(o,Us(i)),o=Rs(o,Us(a)),o=Rs(o,Us(r)),o}_createItems(t){const s=this._active,n=this.chart.data,i=[],a=[],r=[];let o=[],l,c;for(l=0,c=s.length;l<c;++l)o.push(Px(this.chart,s[l]));return t.filter&&(o=o.filter((d,h,f)=>t.filter(d,h,f,n))),t.itemSort&&(o=o.sort((d,h)=>t.itemSort(d,h,n))),ye(o,d=>{const h=Uc(t.callbacks,d);i.push(os(h,"labelColor",this,d)),a.push(os(h,"labelPointStyle",this,d)),r.push(os(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,s){const n=this.options.setContext(this.getContext()),i=this._active;let a,r=[];if(!i.length)this.opacity!==0&&(a={opacity:0});else{const o=Ii[n.position].call(this,i,this._eventPosition);r=this._createItems(n),this.title=this.getTitle(r,n),this.beforeBody=this.getBeforeBody(r,n),this.body=this.getBody(r,n),this.afterBody=this.getAfterBody(r,n),this.footer=this.getFooter(r,n);const l=this._size=qc(this,n),c=Object.assign({},o,l),d=Vc(this.chart,n,c),h=Hc(n,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(t,s,n,i){const a=this.getCaretPosition(t,n,i);s.lineTo(a.x1,a.y1),s.lineTo(a.x2,a.y2),s.lineTo(a.x3,a.y3)}getCaretPosition(t,s,n){const{xAlign:i,yAlign:a}=this,{caretSize:r,cornerRadius:o}=n,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:h}=Fn(o),{x:f,y:v}=t,{width:g,height:m}=s;let b,y,S,k,w,$;return a==="center"?(w=v+m/2,i==="left"?(b=f,y=b-r,k=w+r,$=w-r):(b=f+g,y=b+r,k=w-r,$=w+r),S=b):(i==="left"?y=f+Math.max(l,d)+r:i==="right"?y=f+g-Math.max(c,h)-r:y=this.caretX,a==="top"?(k=v,w=k-r,b=y-r,S=y+r):(k=v+m,w=k+r,b=y+r,S=y-r),$=k),{x1:b,x2:y,x3:S,y1:k,y2:w,y3:$}}drawTitle(t,s,n){const i=this.title,a=i.length;let r,o,l;if(a){const c=si(n.rtl,this.x,this.width);for(t.x=Ta(this,n.titleAlign,n),s.textAlign=c.textAlign(n.titleAlign),s.textBaseline="middle",r=qe(n.titleFont),o=n.titleSpacing,s.fillStyle=n.titleColor,s.font=r.string,l=0;l<a;++l)s.fillText(i[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=n.titleMarginBottom-o)}}_drawColorBox(t,s,n,i,a){const r=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=a,d=qe(a.bodyFont),h=Ta(this,"left",a),f=i.x(h),v=l<d.lineHeight?(d.lineHeight-l)/2:0,g=s.y+v;if(a.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},b=i.leftForLtr(f,c)+c/2,y=g+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,uo(t,m,b,y),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,uo(t,m,b,y)}else{t.lineWidth=ae(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const m=i.leftForLtr(f,c),b=i.leftForLtr(i.xPlus(f,1),c-2),y=Fn(r.borderRadius);Object.values(y).some(S=>S!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,Zi(t,{x:m,y:g,w:c,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Zi(t,{x:b,y:g+1,w:c-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(m,g,c,l),t.strokeRect(m,g,c,l),t.fillStyle=r.backgroundColor,t.fillRect(b,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,s,n){const{body:i}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:d}=n,h=qe(n.bodyFont);let f=h.lineHeight,v=0;const g=si(n.rtl,this.x,this.width),m=function(C){s.fillText(C,g.x(t.x+v),t.y+f/2),t.y+=f+a},b=g.textAlign(r);let y,S,k,w,$,A,z;for(s.textAlign=r,s.textBaseline="middle",s.font=h.string,t.x=Ta(this,b,n),s.fillStyle=n.bodyColor,ye(this.beforeBody,m),v=o&&b!=="right"?r==="center"?c/2+d:c+2+d:0,w=0,A=i.length;w<A;++w){for(y=i[w],S=this.labelTextColors[w],s.fillStyle=S,ye(y.before,m),k=y.lines,o&&k.length&&(this._drawColorBox(s,t,w,g,n),f=Math.max(h.lineHeight,l)),$=0,z=k.length;$<z;++$)m(k[$]),f=h.lineHeight;ye(y.after,m)}v=0,f=h.lineHeight,ye(this.afterBody,m),t.y-=a}drawFooter(t,s,n){const i=this.footer,a=i.length;let r,o;if(a){const l=si(n.rtl,this.x,this.width);for(t.x=Ta(this,n.footerAlign,n),t.y+=n.footerMarginTop,s.textAlign=l.textAlign(n.footerAlign),s.textBaseline="middle",r=qe(n.footerFont),s.fillStyle=n.footerColor,s.font=r.string,o=0;o<a;++o)s.fillText(i[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+n.footerSpacing}}drawBackground(t,s,n,i){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:c,height:d}=n,{topLeft:h,topRight:f,bottomLeft:v,bottomRight:g}=Fn(i.cornerRadius);s.fillStyle=i.backgroundColor,s.strokeStyle=i.borderColor,s.lineWidth=i.borderWidth,s.beginPath(),s.moveTo(o+h,l),r==="top"&&this.drawCaret(t,s,n,i),s.lineTo(o+c-f,l),s.quadraticCurveTo(o+c,l,o+c,l+f),r==="center"&&a==="right"&&this.drawCaret(t,s,n,i),s.lineTo(o+c,l+d-g),s.quadraticCurveTo(o+c,l+d,o+c-g,l+d),r==="bottom"&&this.drawCaret(t,s,n,i),s.lineTo(o+v,l+d),s.quadraticCurveTo(o,l+d,o,l+d-v),r==="center"&&a==="left"&&this.drawCaret(t,s,n,i),s.lineTo(o,l+h),s.quadraticCurveTo(o,l,o+h,l),s.closePath(),s.fill(),i.borderWidth>0&&s.stroke()}_updateAnimationTarget(t){const s=this.chart,n=this.$animations,i=n&&n.x,a=n&&n.y;if(i||a){const r=Ii[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=qc(this,t),l=Object.assign({},r,this._size),c=Vc(s,t,l),d=Hc(t,l,c,s);(i._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const s=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(s);const i={width:this.width,height:this.height},a={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const r=is(s.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&o&&(t.save(),t.globalAlpha=n,this.drawBackground(a,t,i,s),Fu(t,s.textDirection),a.y+=r.top,this.drawTitle(a,t,s),this.drawBody(a,t,s),this.drawFooter(a,t,s),Bu(t,s.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,s){const n=this._active,i=t.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),a=!Ga(n,i),r=this._positionChanged(i,s);(a||r)&&(this._active=i,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,s,n=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,a=this._active||[],r=this._getActiveElements(t,a,s,n),o=this._positionChanged(r,t),l=s||!Ga(r,a)||o;return l&&(this._active=r,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,s))),l}_getActiveElements(t,s,n,i){const a=this.options;if(t.type==="mouseout")return[];if(!i)return s.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,a.mode,a,n);return a.reverse&&r.reverse(),r}_positionChanged(t,s){const{caretX:n,caretY:i,options:a}=this,r=Ii[a.position].call(this,t,s);return r!==!1&&(n!==r.x||i!==r.y)}}var Ox={id:"tooltip",_element:Yc,positioners:Ii,afterInit(e,t,s){s&&(e.tooltip=new Yc({chart:e,options:s}))},beforeUpdate(e,t,s){e.tooltip&&e.tooltip.initialize(s)},reset(e,t,s){e.tooltip&&e.tooltip.initialize(s)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const s={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",s)}},afterEvent(e,t){if(e.tooltip){const s=t.replay;e.tooltip.handleEvent(t.event,s,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:vh},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Rx=Object.freeze({__proto__:null,Colors:Yy,Decimation:Jy,Filler:mx,Legend:wx,SubTitle:Mx,Title:Sx,Tooltip:Ox});const Lx=(e,t,s,n)=>(typeof t=="string"?(s=e.push(t)-1,n.unshift({index:s,label:t})):isNaN(t)&&(s=null),s);function Ix(e,t,s,n){const i=e.indexOf(t);if(i===-1)return Lx(e,t,s,n);const a=e.lastIndexOf(t);return i!==a?s:i}const jx=(e,t)=>e===null?null:Ye(Math.round(e),0,t);function Kc(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Nx extends Xn{static id="category";static defaults={ticks:{callback:Kc}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const s=this._addedLabels;if(s.length){const n=this.getLabels();for(const{index:i,label:a}of s)n[i]===a&&n.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,s){if(ne(t))return null;const n=this.getLabels();return s=isFinite(s)&&n[s]===t?s:Ix(n,t,Ut(s,t),this._addedLabels),jx(s,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),s||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,s=this.max,n=this.options.offset,i=[];let a=this.getLabels();a=t===0&&s===a.length-1?a:a.slice(t,s+1),this._valueRange=Math.max(a.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let r=t;r<=s;r++)i.push({value:r});return i}getLabelForValue(t){return Kc.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const s=this.ticks;return t<0||t>s.length-1?null:this.getPixelForValue(s[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Fx(e,t){const s=[],{bounds:i,step:a,min:r,max:o,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:f}=e,v=a||1,g=d-1,{min:m,max:b}=t,y=!ne(r),S=!ne(o),k=!ne(c),w=(b-m)/(h+1);let $=ql((b-m)/g/v)*v,A,z,C,T;if($<1e-14&&!y&&!S)return[{value:m},{value:b}];T=Math.ceil(b/$)-Math.floor(m/$),T>g&&($=ql(T*$/g/v)*v),ne(l)||(A=Math.pow(10,l),$=Math.ceil($*A)/A),i==="ticks"?(z=Math.floor(m/$)*$,C=Math.ceil(b/$)*$):(z=m,C=b),y&&S&&a&&k1((o-r)/a,$/1e3)?(T=Math.round(Math.min((o-r)/$,d)),$=(o-r)/T,z=r,C=o):k?(z=y?r:z,C=S?o:C,T=c-1,$=(C-z)/T):(T=(C-z)/$,Hi(T,Math.round(T),$/1e3)?T=Math.round(T):T=Math.ceil(T));const E=Math.max(Vl($),Vl(z));A=Math.pow(10,ne(l)?E:l),z=Math.round(z*A)/A,C=Math.round(C*A)/A;let L=0;for(y&&(f&&z!==r?(s.push({value:r}),z<r&&L++,Hi(Math.round((z+L*$)*A)/A,r,Xc(r,w,e))&&L++):z<r&&L++);L<T;++L){const N=Math.round((z+L*$)*A)/A;if(S&&N>o)break;s.push({value:N})}return S&&f&&C!==o?s.length&&Hi(s[s.length-1].value,o,Xc(o,w,e))?s[s.length-1].value=o:s.push({value:o}):(!S||C===o)&&s.push({value:C}),s}function Xc(e,t,{horizontal:s,minRotation:n}){const i=Cs(n),a=(s?Math.sin(i):Math.cos(i))||.001,r=.75*t*(""+e).length;return Math.min(t/a,r)}class nr extends Xn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,s){return ne(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:s,maxDefined:n}=this.getUserBounds();let{min:i,max:a}=this;const r=l=>i=s?i:l,o=l=>a=n?a:l;if(t){const l=Bs(i),c=Bs(a);l<0&&c<0?o(0):l>0&&c>0&&r(0)}if(i===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(i-l)}this.min=i,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:s,stepSize:n}=t,i;return n?(i=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),s=s||11),s&&(i=Math.min(s,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,s=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const i={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},a=this._range||this,r=Fx(i,a);return t.bounds==="ticks"&&wu(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let s=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-s)/Math.max(t.length-1,1)/2;s-=i,n+=i}this._startValue=s,this._endValue=n,this._valueRange=n-s}getLabelForValue(t){return da(t,this.chart.options.locale,this.options.ticks.format)}}class Bx extends nr{static id="linear";static defaults={ticks:{callback:vr.formatters.numeric}};determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=Le(t)?t:0,this.max=Le(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),s=t?this.width:this.height,n=Cs(this.options.ticks.minRotation),i=(t?Math.sin(n):Math.cos(n))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,a.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const ea=e=>Math.floor(un(e)),zn=(e,t)=>Math.pow(10,ea(e)+t);function Gc(e){return e/Math.pow(10,ea(e))===1}function Jc(e,t,s){const n=Math.pow(10,s),i=Math.floor(e/n);return Math.ceil(t/n)-i}function qx(e,t){const s=t-e;let n=ea(s);for(;Jc(e,t,n)>10;)n++;for(;Jc(e,t,n)<10;)n--;return Math.min(n,ea(e))}function Vx(e,{min:t,max:s}){t=ps(e.min,t);const n=[],i=ea(t);let a=qx(t,s),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=i>a?Math.pow(10,i):0,c=Math.round((t-l)*r)/r,d=Math.floor((t-l)/o/10)*o*10;let h=Math.floor((c-d)/Math.pow(10,a)),f=ps(e.min,Math.round((l+d+h*Math.pow(10,a))*r)/r);for(;f<s;)n.push({value:f,major:Gc(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,r=a>=0?1:r),f=Math.round((l+d+h*Math.pow(10,a))*r)/r;const v=ps(e.max,f);return n.push({value:v,major:Gc(v),significand:h}),n}class Hx extends Xn{static id="logarithmic";static defaults={ticks:{callback:vr.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,s){const n=nr.prototype.parse.apply(this,[t,s]);if(n===0){this._zero=!0;return}return Le(n)&&n>0?n:null}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!0);this.min=Le(t)?Math.max(0,t):null,this.max=Le(s)?Math.max(0,s):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Le(this._userMin)&&(this.min=t===zn(this.min,0)?zn(this.min,-1):zn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:s}=this.getUserBounds();let n=this.min,i=this.max;const a=o=>n=t?n:o,r=o=>i=s?i:o;n===i&&(n<=0?(a(1),r(10)):(a(zn(n,-1)),r(zn(i,1)))),n<=0&&a(zn(i,-1)),i<=0&&r(zn(n,1)),this.min=n,this.max=i}buildTicks(){const t=this.options,s={min:this._userMin,max:this._userMax},n=Vx(s,this);return t.bounds==="ticks"&&wu(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":da(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=un(t),this._valueRange=un(this.max)-un(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(un(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const s=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+s*this._valueRange)}}function _o(e){const t=e.ticks;if(t.display&&e.display){const s=is(t.backdropPadding);return Ut(t.font&&t.font.size,Ce.font.size)+s.height}return 0}function Wx(e,t,s){return s=Ae(s)?s:[s],{w:N1(e,t.string,s),h:s.length*t.lineHeight}}function Qc(e,t,s,n,i){return e===n||e===i?{start:t-s/2,end:t+s/2}:e<n||e>i?{start:t-s,end:t}:{start:t,end:t+s}}function Ux(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},s=Object.assign({},t),n=[],i=[],a=e._pointLabels.length,r=e.options.pointLabels,o=r.centerPointLabels?pe/a:0;for(let l=0;l<a;l++){const c=r.setContext(e.getPointLabelContext(l));i[l]=c.padding;const d=e.getPointPosition(l,e.drawingArea+i[l],o),h=qe(c.font),f=Wx(e.ctx,h,e._pointLabels[l]);n[l]=f;const v=ss(e.getIndexAngle(l)+o),g=Math.round(Uo(v)),m=Qc(g,d.x,f.w,0,180),b=Qc(g,d.y,f.h,90,270);Yx(s,t,v,m,b)}e.setCenterPoint(t.l-s.l,s.r-t.r,t.t-s.t,s.b-t.b),e._pointLabelItems=Gx(e,n,i)}function Yx(e,t,s,n,i){const a=Math.abs(Math.sin(s)),r=Math.abs(Math.cos(s));let o=0,l=0;n.start<t.l?(o=(t.l-n.start)/a,e.l=Math.min(e.l,t.l-o)):n.end>t.r&&(o=(n.end-t.r)/a,e.r=Math.max(e.r,t.r+o)),i.start<t.t?(l=(t.t-i.start)/r,e.t=Math.min(e.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/r,e.b=Math.max(e.b,t.b+l))}function Kx(e,t,s){const n=e.drawingArea,{extra:i,additionalAngle:a,padding:r,size:o}=s,l=e.getPointPosition(t,n+i+r,a),c=Math.round(Uo(ss(l.angle+je))),d=Zx(l.y,o.h,c),h=Jx(c),f=Qx(l.x,o.w,h);return{visible:!0,x:l.x,y:d,textAlign:h,left:f,top:d,right:f+o.w,bottom:d+o.h}}function Xx(e,t){if(!t)return!0;const{left:s,top:n,right:i,bottom:a}=e;return!(Zs({x:s,y:n},t)||Zs({x:s,y:a},t)||Zs({x:i,y:n},t)||Zs({x:i,y:a},t))}function Gx(e,t,s){const n=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:_o(a)/2,additionalAngle:r?pe/i:0};let c;for(let d=0;d<i;d++){l.padding=s[d],l.size=t[d];const h=Kx(e,d,l);n.push(h),o==="auto"&&(h.visible=Xx(h,c),h.visible&&(c=h))}return n}function Jx(e){return e===0||e===180?"center":e<180?"left":"right"}function Qx(e,t,s){return s==="right"?e-=t:s==="center"&&(e-=t/2),e}function Zx(e,t,s){return s===90||s===270?e-=t/2:(s>270||s<90)&&(e-=t),e}function t2(e,t,s){const{left:n,top:i,right:a,bottom:r}=s,{backdropColor:o}=t;if(!ne(o)){const l=Fn(t.borderRadius),c=is(t.backdropPadding);e.fillStyle=o;const d=n-c.left,h=i-c.top,f=a-n+c.width,v=r-i+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Zi(e,{x:d,y:h,w:f,h:v,radius:l}),e.fill()):e.fillRect(d,h,f,v)}}function e2(e,t){const{ctx:s,options:{pointLabels:n}}=e;for(let i=t-1;i>=0;i--){const a=e._pointLabelItems[i];if(!a.visible)continue;const r=n.setContext(e.getPointLabelContext(i));t2(s,r,a);const o=qe(r.font),{x:l,y:c,textAlign:d}=a;Wn(s,e._pointLabels[i],l,c+o.lineHeight/2,o,{color:r.color,textAlign:d,textBaseline:"middle"})}}function ph(e,t,s,n){const{ctx:i}=e;if(s)i.arc(e.xCenter,e.yCenter,t,0,Se);else{let a=e.getPointPosition(0,t);i.moveTo(a.x,a.y);for(let r=1;r<n;r++)a=e.getPointPosition(r,t),i.lineTo(a.x,a.y)}}function s2(e,t,s,n,i){const a=e.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!n||!o||!l||s<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),ph(e,s,r,n),a.closePath(),a.stroke(),a.restore())}function n2(e,t,s){return $n(e,{label:s,index:t,type:"pointLabel"})}class i2 extends nr{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:vr.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=is(_o(this.options)/2),s=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+s/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(s,n)/2)}determineDataLimits(){const{min:t,max:s}=this.getMinMax(!1);this.min=Le(t)&&!isNaN(t)?t:0,this.max=Le(s)&&!isNaN(s)?s:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/_o(this.options))}generateTickLabels(t){nr.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((s,n)=>{const i=$e(this.options.pointLabels.callback,[s,n],this);return i||i===0?i:""}).filter((s,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?Ux(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,s,n,i){this.xCenter+=Math.floor((t-s)/2),this.yCenter+=Math.floor((n-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,s,n,i))}getIndexAngle(t){const s=Se/(this._pointLabels.length||1),n=this.options.startAngle||0;return ss(t*s+Cs(n))}getDistanceFromCenterForValue(t){if(ne(t))return NaN;const s=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*s:(t-this.min)*s}getValueForDistanceFromCenter(t){if(ne(t))return NaN;const s=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-s:this.min+s}getPointLabelContext(t){const s=this._pointLabels||[];if(t>=0&&t<s.length){const n=s[t];return n2(this.getContext(),t,n)}}getPointPosition(t,s,n=0){const i=this.getIndexAngle(t)-je+n;return{x:Math.cos(i)*s+this.xCenter,y:Math.sin(i)*s+this.yCenter,angle:i}}getPointPositionForValue(t,s){return this.getPointPosition(t,this.getDistanceFromCenterForValue(s))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:s,top:n,right:i,bottom:a}=this._pointLabelItems[t];return{left:s,top:n,right:i,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:s}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),ph(this,this.getDistanceFromCenterForValue(this._endValue),s,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,s=this.options,{angleLines:n,grid:i,border:a}=s,r=this._pointLabels.length;let o,l,c;if(s.pointLabels.display&&e2(this,r),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),v=i.setContext(f),g=a.setContext(f);s2(this,v,l,r,g)}}),n.display){for(t.save(),o=r-1;o>=0;o--){const d=n.setContext(this.getPointLabelContext(o)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(s.reverse?this.min:this.max),c=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,s=this.options,n=s.ticks;if(!n.display)return;const i=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&this.min>=0&&!s.reverse)return;const c=n.setContext(this.getContext(l)),d=qe(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,r=t.measureText(o.label).width,t.fillStyle=c.backdropColor;const h=is(c.backdropPadding);t.fillRect(-r/2-h.left,-a-d.size/2-h.top,r+h.width,d.size+h.height)}Wn(t,o.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const xr={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},hs=Object.keys(xr);function Zc(e,t){return e-t}function td(e,t){if(ne(t))return null;const s=e._adapter,{parser:n,round:i,isoWeekday:a}=e._parseOpts;let r=t;return typeof n=="function"&&(r=n(r)),Le(r)||(r=typeof n=="string"?s.parse(r,n):s.parse(r)),r===null?null:(i&&(r=i==="week"&&(vi(a)||a===!0)?s.startOf(r,"isoWeek",a):s.startOf(r,i)),+r)}function ed(e,t,s,n){const i=hs.length;for(let a=hs.indexOf(e);a<i-1;++a){const r=xr[hs[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((s-t)/(o*r.size))<=n)return hs[a]}return hs[i-1]}function a2(e,t,s,n,i){for(let a=hs.length-1;a>=hs.indexOf(s);a--){const r=hs[a];if(xr[r].common&&e._adapter.diff(i,n,r)>=t-1)return r}return hs[s?hs.indexOf(s):0]}function r2(e){for(let t=hs.indexOf(e)+1,s=hs.length;t<s;++t)if(xr[hs[t]].common)return hs[t]}function sd(e,t,s){if(!s)e[t]=!0;else if(s.length){const{lo:n,hi:i}=Yo(s,t),a=s[n]>=t?s[n]:s[i];e[a]=!0}}function o2(e,t,s,n){const i=e._adapter,a=+i.startOf(t[0].value,n),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+i.add(o,1,n))l=s[o],l>=0&&(t[l].major=!0);return t}function nd(e,t,s){const n=[],i={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],i[o]=r,n.push({value:o,major:!1});return a===0||!s?n:o2(e,n,i,s)}class bo extends Xn{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,s={}){const n=t.time||(t.time={}),i=this._adapter=new l0._date(t.adapters.date);i.init(s),Vi(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=s.normalized}parse(t,s){return t===void 0?null:td(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,s=this._adapter,n=t.time.unit||"day";let{min:i,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!o&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=Le(i)&&!isNaN(i)?i:+s.startOf(Date.now(),n),a=Le(a)&&!isNaN(a)?a:+s.endOf(Date.now(),n)+1,this.min=Math.min(i,a-1),this.max=Math.max(i+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(s=t[0],n=t[t.length-1]),{min:s,max:n}}buildTicks(){const t=this.options,s=t.time,n=t.ticks,i=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const a=this.min,r=this.max,o=M1(i,a,r);return this._unit=s.unit||(n.autoSkip?ed(s.minUnit,this.min,this.max,this._getLabelCapacity(a)):a2(this,o.length,s.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:r2(this._unit),this.initOffsets(i),t.reverse&&o.reverse(),nd(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let s=0,n=0,i,a;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?s=1-i:s=(this.getDecimalForValue(t[1])-i)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?n=a:n=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;s=Ye(s,0,r),n=Ye(n,0,r),this._offsets={start:s,end:n,factor:1/(s+1+n)}}_generate(){const t=this._adapter,s=this.min,n=this.max,i=this.options,a=i.time,r=a.unit||ed(a.minUnit,s,n,this._getLabelCapacity(s)),o=Ut(i.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,c=vi(l)||l===!0,d={};let h=s,f,v;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":r),t.diff(n,s,r)>1e5*o)throw new Error(s+" and "+n+" are too far apart with stepSize of "+o+" "+r);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,v=0;f<n;f=+t.add(f,o,r),v++)sd(d,f,g);return(f===n||i.bounds==="ticks"||v===1)&&sd(d,f,g),Object.keys(d).sort(Zc).map(m=>+m)}getLabelForValue(t){const s=this._adapter,n=this.options.time;return n.tooltipFormat?s.format(t,n.tooltipFormat):s.format(t,n.displayFormats.datetime)}format(t,s){const i=this.options.time.displayFormats,a=this._unit,r=s||i[a];return this._adapter.format(t,r)}_tickFormatFunction(t,s,n,i){const a=this.options,r=a.ticks.callback;if(r)return $e(r,[t,s,n],this);const o=a.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&o[l],h=c&&o[c],f=n[s],v=c&&h&&f&&f.major;return this._adapter.format(t,i||(v?h:d))}generateTickLabels(t){let s,n,i;for(s=0,n=t.length;s<n;++s)i=t[s],i.label=this._tickFormatFunction(i.value,s,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const s=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((s.start+n)*s.factor)}getValueForPixel(t){const s=this._offsets,n=this.getDecimalForPixel(t)/s.factor-s.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const s=this.options.ticks,n=this.ctx.measureText(t).width,i=Cs(this.isHorizontal()?s.maxRotation:s.minRotation),a=Math.cos(i),r=Math.sin(i),o=this._resolveTickFontOptions(0).size;return{w:n*a+o*r,h:n*r+o*a}}_getLabelCapacity(t){const s=this.options.time,n=s.displayFormats,i=n[s.unit]||n.millisecond,a=this._tickFormatFunction(t,0,nd(this,[t],this._majorUnit),i),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],s,n;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(s=0,n=i.length;s<n;++s)t=t.concat(i[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let s,n;if(t.length)return t;const i=this.getLabels();for(s=0,n=i.length;s<n;++s)t.push(td(this,i[s]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Mu(t.sort(Zc))}}function Ea(e,t,s){let n=0,i=e.length-1,a,r,o,l;s?(t>=e[n].pos&&t<=e[i].pos&&({lo:n,hi:i}=Qs(e,"pos",t)),{pos:a,time:o}=e[n],{pos:r,time:l}=e[i]):(t>=e[n].time&&t<=e[i].time&&({lo:n,hi:i}=Qs(e,"time",t)),{time:a,pos:o}=e[n],{time:r,pos:l}=e[i]);const c=r-a;return c?o+(l-o)*(t-a)/c:o}class l2 extends bo{static id="timeseries";static defaults=bo.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(t);this._minPos=Ea(s,this.min),this._tableRange=Ea(s,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:s,max:n}=this,i=[],a=[];let r,o,l,c,d;for(r=0,o=t.length;r<o;++r)c=t[r],c>=s&&c<=n&&i.push(c);if(i.length<2)return[{time:s,pos:0},{time:n,pos:1}];for(r=0,o=i.length;r<o;++r)d=i[r+1],l=i[r-1],c=i[r],Math.round((d+l)/2)!==c&&a.push({time:c,pos:r/(o-1)});return a}_generate(){const t=this.min,s=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(s)||n.length===1)&&n.push(s),n.sort((i,a)=>i-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const s=this.getDataTimestamps(),n=this.getLabelTimestamps();return s.length&&n.length?t=this.normalize(s.concat(n)):t=s.length?s:n,t=this._cache.all=t,t}getDecimalForValue(t){return(Ea(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const s=this._offsets,n=this.getDecimalForPixel(t)/s.factor-s.end;return Ea(this._table,n*this._tableRange+this._minPos,!0)}}var c2=Object.freeze({__proto__:null,CategoryScale:Nx,LinearScale:Bx,LogarithmicScale:Hx,RadialLinearScale:i2,TimeScale:bo,TimeSeriesScale:l2});const d2=[o0,Fy,Rx,c2];var u2=P("<option> </option>"),h2=P('<div class="chart-wrapper svelte-1829vtz"><canvas></canvas></div>'),f2=P('<div class="quota-chart svelte-1829vtz"><div class="chart-controls svelte-1829vtz"><select class="chart-select svelte-1829vtz"></select> <div class="period-group svelte-1829vtz"></div></div> <!></div>');function v2(e,t){xe(t,!0),vo.register(...d2);let s=j(we([])),n=j(""),i=j("24h"),a=j(void 0),r=null;Ve(()=>{const v=We.subscribe(g=>{M(s,g,!0),!u(n)&&g.length>0&&M(n,g[0].key,!0)});return()=>{v(),r?.destroy()}});async function o(){if(!(!u(n)||!u(a)))try{const v=await rg(u(n),u(i)),g=v.map(b=>{const y=new Date(b.timestamp);return u(i)==="24h"?y.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}):y.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"})}),m=v.map(b=>b.tokens);r?.destroy(),r=new vo(u(a),{type:"line",data:{labels:g,datasets:[{label:"Tokens utilises",data:m,borderColor:"rgb(59, 130, 246)",backgroundColor:"rgba(59, 130, 246, 0.1)",fill:!0,tension:.3,pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(18, 18, 26, 0.95)",borderColor:"rgba(30, 30, 46, 1)",borderWidth:1,titleColor:"#e2e8f0",bodyColor:"#94a3b8",padding:10,cornerRadius:8}},scales:{x:{grid:{color:"rgba(30, 30, 46, 0.5)"},ticks:{color:"#475569",font:{size:11}}},y:{grid:{color:"rgba(30, 30, 46, 0.5)"},ticks:{color:"#475569",font:{size:11}},beginAtZero:!0}}}})}catch(v){console.error("Failed to load quota history:",v)}}Vn(()=>{u(n)&&u(a)&&o()});var l=f2(),c=p(l),d=p(c);ie(d,21,()=>u(s),Re,(v,g)=>{var m=u2(),b=p(m),y={};R(()=>{D(b,u(g).data.displayName||u(g).data.name||u(g).key),y!==(y=u(g).key)&&(m.value=(m.__value=u(g).key)??"")}),x(v,m)});var h=_(d,2);ie(h,20,()=>["24h","7d","30d"],Re,(v,g)=>{{let m=W(()=>u(i)===g?"primary":"ghost");qt(v,{get variant(){return u(m)},size:"sm",onclick:()=>{M(i,g,!0)},children:(b,y)=>{var S=Ht();R(()=>D(S,g)),x(b,S)},$$slots:{default:!0}})}});var f=_(c,2);he(f,{hoverable:!1,children:(v,g)=>{var m=h2(),b=p(m);Ro(b,y=>M(a,y),()=>u(a)),x(v,m)},$$slots:{default:!0}}),fi(d,()=>u(n),v=>M(n,v)),x(e,l),ke()}var p2=P('<span class="feed-tokens svelte-somya0"> </span>'),g2=P('<div class="feed-item svelte-somya0"><span class="feed-time svelte-somya0"> </span> <span class="feed-method svelte-somya0"><!> </span> <span class="feed-path svelte-somya0"> </span> <!> <!> <span class="feed-duration svelte-somya0"> </span> <!></div>'),m2=P('<div class="feed-empty svelte-somya0"><p>Aucune requete a afficher</p> <p class="feed-empty-hint svelte-somya0">Les requetes apparaitront ici en temps reel</p></div>'),_2=P('<div class="request-feed svelte-somya0"><div class="feed-controls svelte-somya0"><div class="feed-filters svelte-somya0"><!> <select class="feed-select svelte-somya0"><option>Tous les providers</option><option>Anthropic</option><option>Gemini</option><option>OpenAI</option><option>xAI</option><option>DeepSeek</option><option>Mistral</option><option>Groq</option></select> <select class="feed-select svelte-somya0"><option>Tous les statuts</option><option>Succes (2xx)</option><option>Erreurs (4xx/5xx)</option></select></div> <label class="auto-scroll-toggle svelte-somya0"><input type="checkbox" class="svelte-somya0"/> <span>Auto-scroll</span></label> <button class="refresh-btn svelte-somya0" title="Rafraichir"><!></button></div> <div class="feed-list svelte-somya0"><!> <!></div></div>');function b2(e,t){xe(t,!0);let s=j(we([])),n=j("all"),i=j("all"),a=j(void 0),r=j(!0);const o={anthropic:"var(--provider-anthropic)",gemini:"var(--provider-gemini)",openai:"var(--provider-openai)",xai:"var(--provider-xai)",deepseek:"var(--provider-deepseek)",mistral:"var(--provider-mistral)",groq:"var(--provider-groq)"};let l=W(()=>u(s).filter(F=>!(u(n)!=="all"&&F.provider!==u(n)||u(i)==="success"&&(F.status<200||F.status>=300)||u(i)==="error"&&F.status<400)));function c(F){return F>=200&&F<300?"var(--phase-cruise)":F>=400&&F<500?"var(--status-warning)":F>=500?"var(--status-error)":"var(--fg-dim)"}function d(F){return new Date(F).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}async function h(){try{const F=await ro();M(s,F.flatMap((O,H)=>{if(!O||typeof O!="object")return[];const tt=String(O.timestamp??O.time??""),kt=String(O.account_email??O.email??"unknown"),q=String(O.model??""),et=Number(O.output_tokens??O.tokens_output??O.total_tokens??0);let Mt="anthropic";return q.includes("gemini")?Mt="gemini":q.includes("gpt")?Mt="openai":q.includes("grok")?Mt="xai":q.includes("deepseek")?Mt="deepseek":q.includes("mistral")?Mt="mistral":(q.includes("llama")||q.includes("groq"))&&(Mt="groq"),[{id:String(H),timestamp:tt,method:"POST",path:"/v1/messages",status:200,provider:Mt,account:kt,duration:0,tokens:et||void 0}]}),!0),M(s,u(s).reverse(),!0)}catch(F){console.error("Failed to load requests:",F)}}Ve(async()=>{await h()}),Vn(()=>{u(r)&&u(a)&&u(l).length>0&&(u(a).scrollTop=u(a).scrollHeight)});var f=_2(),v=p(f),g=p(v),m=p(g);Xv(m,{size:14});var b=_(m,2),y=p(b);y.value=y.__value="all";var S=_(y);S.value=S.__value="anthropic";var k=_(S);k.value=k.__value="gemini";var w=_(k);w.value=w.__value="openai";var $=_(w);$.value=$.__value="xai";var A=_($);A.value=A.__value="deepseek";var z=_(A);z.value=z.__value="mistral";var C=_(z);C.value=C.__value="groq";var T=_(b,2),E=p(T);E.value=E.__value="all";var L=_(E);L.value=L.__value="success";var N=_(L);N.value=N.__value="error";var Z=_(g,2),K=p(Z),V=_(Z,2),X=p(V);bs(X,{size:14});var J=_(v,2),xt=p(J);ie(xt,17,()=>u(l),F=>F.id,(F,O)=>{var H=g2(),tt=p(H),kt=p(tt),q=_(tt,2),et=p(q);{var Mt=ft=>{Ov(ft,{size:12})},ee=ft=>{Ev(ft,{size:12})};B(et,ft=>{u(O).method==="POST"?ft(Mt):ft(ee,!1)})}var de=_(et),U=_(q,2),jt=p(U),Vt=_(U,2);{let ft=W(()=>c(u(O).status));Ue(Vt,{get color(){return u(ft)},small:!0,children:(At,$t)=>{var G=Ht();R(()=>D(G,u(O).status)),x(At,G)},$$slots:{default:!0}})}var Zt=_(Vt,2);{let ft=W(()=>o[u(O).provider]??"var(--fg-dim)");Ue(Zt,{get color(){return u(ft)},small:!0,children:(At,$t)=>{var G=Ht();R(()=>D(G,u(O).provider)),x(At,G)},$$slots:{default:!0}})}var zt=_(Zt,2),Nt=p(zt),fe=_(zt,2);{var ue=ft=>{var At=p2(),$t=p(At);R(()=>D($t,`${u(O).tokens??""}t`)),x(ft,At)};B(fe,ft=>{u(O).tokens&&ft(ue)})}R(ft=>{D(kt,ft),D(de,` ${u(O).method??""}`),Dt(U,"title",u(O).path),D(jt,u(O).path),D(Nt,`${u(O).duration??""}ms`)},[()=>d(u(O).timestamp)]),x(F,H)});var yt=_(xt,2);{var Pt=F=>{var O=m2();x(F,O)};B(yt,F=>{u(l).length===0&&F(Pt)})}Ro(J,F=>M(a,F),()=>u(a)),fi(b,()=>u(n),F=>M(n,F)),fi(T,()=>u(i),F=>M(i,F)),au(K,()=>u(r),F=>M(r,F)),nt("click",V,h),x(e,f),ke()}De(["click"]);var y2=P('<div class="session-loading svelte-1v3p48n"><span class="animate-spin"><!></span> <span>Chargement des sessions...</span></div>'),x2=P('<div class="session-empty svelte-1v3p48n"><p>Aucune session enregistree</p></div>'),k2=P('<div class="session-card svelte-1v3p48n"><div class="session-header svelte-1v3p48n"><span class="session-id svelte-1v3p48n"> </span> <!></div> <div class="session-stats svelte-1v3p48n"><div class="session-stat svelte-1v3p48n"><!> <span> </span></div> <div class="session-stat svelte-1v3p48n"><!> <span> </span></div> <div class="session-stat svelte-1v3p48n"><!> <span> </span></div></div></div>'),w2=P('<div class="session-grid svelte-1v3p48n"></div>'),$2=P('<div class="session-list svelte-1v3p48n"><!></div>');function S2(e,t){xe(t,!0);let s=j(we([])),n=j(!0);Ve(async()=>{try{const h=await pu();M(s,h,!0)}catch(h){console.error("Failed to load sessions:",h)}finally{M(n,!1)}});function i(h){return new Date(h).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}function a(h){return h>=1e6?`${(h/1e6).toFixed(1)}M`:h>=1e3?`${(h/1e3).toFixed(1)}k`:`${h}`}var r=$2(),o=p(r);{var l=h=>{var f=y2(),v=p(f),g=p(v);Ka(g,{size:20}),x(h,f)},c=h=>{var f=x2();x(h,f)},d=h=>{var f=w2();ie(f,21,()=>u(s),v=>v.id,(v,g)=>{he(v,{children:(m,b)=>{var y=k2(),S=p(y),k=p(S),w=p(k),$=_(k,2);Ue($,{color:"var(--accent)",small:!0,children:(yt,Pt)=>{var F=Ht();R(()=>D(F,u(g).accountKey)),x(yt,F)},$$slots:{default:!0}});var A=_(S,2),z=p(A),C=p(z);Ka(C,{size:12});var T=_(C,2),E=p(T),L=_(z,2),N=p(L);Jv(N,{size:12});var Z=_(N,2),K=p(Z),V=_(L,2),X=p(V);Vv(X,{size:12});var J=_(X,2),xt=p(J);R((yt,Pt,F)=>{Dt(k,"title",u(g).id),D(w,`#${yt??""}`),D(E,Pt),D(K,`${u(g).requestCount??""} requetes`),D(xt,`${F??""} tokens`)},[()=>u(g).id.slice(0,8),()=>i(u(g).startTime),()=>a(u(g).tokensUsed)]),x(m,y)},$$slots:{default:!0}})}),x(h,f)};B(o,h=>{u(n)?h(l):u(s).length===0?h(c,1):h(d,!1)})}x(e,r),ke()}var M2=P('<span class="log-ts svelte-1k1iml3"> </span>'),P2=P('<div class="log-line svelte-1k1iml3"><span class="log-num svelte-1k1iml3"></span> <!> <!> <span class="log-msg svelte-1k1iml3"> </span></div>'),A2=P('<div class="log-empty svelte-1k1iml3">Aucun log a afficher</div>'),C2=P('<div class="log-viewer svelte-1k1iml3"><div class="log-controls svelte-1k1iml3"><div class="log-search svelte-1k1iml3"><!> <input type="text" class="log-search-input svelte-1k1iml3" placeholder="Rechercher dans les logs..."/></div> <div class="log-filters svelte-1k1iml3"></div> <div class="log-actions svelte-1k1iml3"><label class="auto-scroll-toggle svelte-1k1iml3"><input type="checkbox" class="svelte-1k1iml3"/> <span>Auto-scroll</span></label> <!> <!></div></div> <div class="log-output svelte-1k1iml3"><!> <!></div></div>');function z2(e,t){xe(t,!0);let s=j(we([])),n=j(""),i=j("all"),a=j(!0),r=j(void 0);const o={info:"var(--accent)",warn:"var(--status-warning)",error:"var(--status-error)",debug:"var(--fg-dim)"};let l=W(()=>u(s).filter(L=>!(u(i)!=="all"&&L.level!==u(i)||u(n)&&!L.raw.toLowerCase().includes(u(n).toLowerCase()))));function c(L){if(typeof L=="object"&&L!==null){const K=L,V=String(K.timestamp??K.time??""),X=String(K.model??""),J=String(K.account_email??K.email??""),xt=Number(K.output_tokens??K.total_tokens??0),yt=J?`${J} | ${X} | ${xt}t`:JSON.stringify(L);return{raw:JSON.stringify(L),timestamp:V,level:"info",message:yt}}const N=String(L),Z=N.match(/^\[([^\]]+)\]\s*(\w+)\s*(.*)$/);return Z?{raw:N,timestamp:Z[1],level:Z[2].toLowerCase(),message:Z[3]}:{raw:N,timestamp:"",level:"info",message:N}}Ve(async()=>{try{const L=await ro(void 0);M(s,L.map(c),!0)}catch(L){console.error("Failed to load logs:",L)}});async function d(){try{const L=await ro(u(i)==="all"?void 0:u(i));M(s,L.map(c),!0)}catch(L){console.error("Failed to refresh logs:",L)}}function h(){M(s,[],!0)}Vn(()=>{u(a)&&u(r)&&u(l).length>0&&(u(r).scrollTop=u(r).scrollHeight)});var f=C2(),v=p(f),g=p(v),m=p(g);cp(m,{size:14});var b=_(m,2),y=_(g,2);ie(y,20,()=>["all","info","warn","error","debug"],Re,(L,N)=>{{let Z=W(()=>u(i)===N?"primary":"ghost");qt(L,{get variant(){return u(Z)},size:"sm",onclick:()=>{M(i,N,!0)},children:(K,V)=>{var X=Ht();R(J=>D(X,J),[()=>N==="all"?"Tous":N.toUpperCase()]),x(K,X)},$$slots:{default:!0}})}});var S=_(y,2),k=p(S),w=p(k),$=_(k,2);qt($,{variant:"ghost",size:"sm",onclick:d,children:(L,N)=>{cu(L,{size:14})},$$slots:{default:!0}});var A=_($,2);qt(A,{variant:"ghost",size:"sm",onclick:h,children:(L,N)=>{ei(L,{size:14})},$$slots:{default:!0}});var z=_(v,2),C=p(z);ie(C,17,()=>u(l),Re,(L,N,Z)=>{var K=P2(),V=p(K);V.textContent=Z+1;var X=_(V,2);{var J=F=>{var O=M2(),H=p(O);R(()=>D(H,u(N).timestamp)),x(F,O)};B(X,F=>{u(N).timestamp&&F(J)})}var xt=_(X,2);{let F=W(()=>o[u(N).level]??"var(--fg-dim)");Ue(xt,{get color(){return u(F)},small:!0,children:(O,H)=>{var tt=Ht();R(()=>D(tt,u(N).level)),x(O,tt)},$$slots:{default:!0}})}var yt=_(xt,2),Pt=p(yt);R(()=>D(Pt,u(N).message)),x(L,K)});var T=_(C,2);{var E=L=>{var N=A2();x(L,N)};B(T,L=>{u(l).length===0&&L(E)})}Ro(z,L=>M(r,L),()=>u(r)),Te(b,()=>u(n),L=>M(n,L)),au(w,()=>u(a),L=>M(a,L)),x(e,f),ke()}var T2=P('<div class="history-loading svelte-a369tr">Chargement...</div>'),E2=P('<div class="history-error svelte-a369tr"> </div>'),D2=P('<div class="history-empty svelte-a369tr"><!> <p>Aucun switch enregistre</p> <p class="hint svelte-a369tr">Les changements de compte apparaitront ici</p></div>'),O2=P('<tr class="svelte-a369tr"><td class="account-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td><td class="num-cell svelte-a369tr"> </td></tr>'),R2=P('<div class="stats-table-wrapper svelte-a369tr"><table class="stats-table svelte-a369tr"><thead><tr><th class="svelte-a369tr">Compte</th><th class="svelte-a369tr">Switch depuis</th><th class="svelte-a369tr">Switch vers</th><th class="svelte-a369tr">Total</th></tr></thead><tbody></tbody></table></div>'),L2=P('<span class="sw-from svelte-a369tr"> </span> <!>',1),I2=P('<div class="switch-item svelte-a369tr"><span class="sw-time svelte-a369tr"> </span> <!> <span class="sw-to svelte-a369tr"> </span> <span> </span></div>'),j2=P('<!> <div class="last-switches"><div class="section-label svelte-a369tr">Derniers switches</div> <div class="switches-log svelte-a369tr"></div></div>',1),N2=P('<div class="switch-history svelte-a369tr"><div class="history-header svelte-a369tr"><span class="history-count svelte-a369tr"> </span> <!></div> <!></div>');function F2(e,t){xe(t,!0);let s=j(we([])),n=j(!0),i=j(""),a=W(()=>()=>{const k=new Map;for(const w of u(s)){if(w.from){const A=k.get(w.from)??{total:0,from:0,to:0};A.from++,k.set(w.from,A)}const $=k.get(w.to)??{total:0,from:0,to:0};$.to++,k.set(w.to,$)}return Array.from(k.entries()).map(([w,$])=>({key:w,...$})).sort((w,$)=>$.from+$.to-(w.from+w.to))});Ve(async()=>{await r()});async function r(){M(n,!0),M(i,"");try{M(s,await og(),!0)}catch(k){M(i,String(k),!0)}finally{M(n,!1)}}function o(k){if(!k)return"";try{return new Date(k).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return k}}function l(k){return k==="auto-switch"?"auto":k==="quota"?"quota":"manuel"}var c=N2(),d=p(c),h=p(d),f=p(h),v=_(h,2);qt(v,{variant:"ghost",size:"sm",onclick:r,children:(k,w)=>{bs(k,{size:14})},$$slots:{default:!0}});var g=_(d,2);{var m=k=>{var w=T2();x(k,w)},b=k=>{var w=E2(),$=p(w);R(()=>D($,u(i))),x(k,w)},y=k=>{var w=D2(),$=p(w);Ya($,{size:32}),x(k,w)},S=k=>{var w=j2(),$=I(w);he($,{hoverable:!1,children:(C,T)=>{var E=R2(),L=p(E),N=_(p(L));ie(N,21,()=>u(a)(),Re,(Z,K)=>{var V=O2(),X=p(V),J=p(X),xt=_(X),yt=p(xt),Pt=_(xt),F=p(Pt),O=_(Pt),H=p(O);R(()=>{D(J,u(K).key),D(yt,u(K).from),D(F,u(K).to),D(H,u(K).from+u(K).to)}),x(Z,V)}),x(C,E)},$$slots:{default:!0}});var A=_($,2),z=_(p(A),2);ie(z,21,()=>u(s).slice(0,20),Re,(C,T)=>{var E=I2(),L=p(E),N=p(L),Z=_(L,2);{var K=Pt=>{var F=L2(),O=I(F),H=p(O),tt=_(O,2);Ya(tt,{size:12,class:"sw-arrow"}),R(()=>D(H,u(T).from)),x(Pt,F)};B(Z,Pt=>{u(T).from&&Pt(K)})}var V=_(Z,2),X=p(V),J=_(V,2);let xt;var yt=p(J);R((Pt,F)=>{D(N,Pt),D(X,u(T).to),xt=Yt(J,1,"sw-reason svelte-a369tr",null,xt,{auto:u(T).reason==="auto-switch"}),D(yt,F)},[()=>o(u(T).timestamp),()=>l(u(T).reason)]),x(C,E)}),x(k,w)};B(g,k=>{u(n)?k(m):u(i)?k(b,1):u(s).length===0?k(y,2):k(S,!1)})}R(()=>D(f,`${u(s).length??""} switches`)),x(e,c),ke()}var B2=P("<!> <span>Par compte</span>",1),q2=P("<!> <span>Grouper</span>",1),V2=P('<div class="panel-placeholder svelte-1nfvjs4"><!> <span>Chargement des sessions...</span></div>'),H2=P('<div class="panel-placeholder panel-error svelte-1nfvjs4"><span> </span></div>'),W2=P('<div class="panel-placeholder svelte-1nfvjs4"><!> <span>Aucune session enregistree</span></div>'),U2=P('<tr class="svelte-1nfvjs4"><td class="account-cell svelte-1nfvjs4"><span class="account-email svelte-1nfvjs4"> </span></td><td class="num svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"><span class="cost-value svelte-1nfvjs4"> </span></td></tr>'),Y2=P('<div class="cost-table-wrapper svelte-1nfvjs4"><table class="cost-table svelte-1nfvjs4"><thead class="svelte-1nfvjs4"><tr><th class="svelte-1nfvjs4">Compte</th><th class="num svelte-1nfvjs4">Sessions</th><th class="num svelte-1nfvjs4">Requetes</th><th class="num svelte-1nfvjs4">Input</th><th class="num svelte-1nfvjs4">Output</th><th class="num svelte-1nfvjs4">Cout estimé</th></tr></thead><tbody class="svelte-1nfvjs4"></tbody></table></div>'),K2=P('<tr class="svelte-1nfvjs4"><td class="account-cell svelte-1nfvjs4"><span class="account-email svelte-1nfvjs4"> </span></td><td class="svelte-1nfvjs4"><!></td><td class="num svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num mono svelte-1nfvjs4"> </td><td class="num svelte-1nfvjs4"><span class="cost-value svelte-1nfvjs4"> </span></td><td class="num dim svelte-1nfvjs4"> </td></tr>'),X2=P('<div class="cost-table-wrapper svelte-1nfvjs4"><table class="cost-table svelte-1nfvjs4"><thead class="svelte-1nfvjs4"><tr><th class="svelte-1nfvjs4">Compte</th><th class="svelte-1nfvjs4">Modele</th><th class="num svelte-1nfvjs4">Requetes</th><th class="num svelte-1nfvjs4">Input</th><th class="num svelte-1nfvjs4">Output</th><th class="num svelte-1nfvjs4">Cout estimé</th><th class="num svelte-1nfvjs4">Mise a jour</th></tr></thead><tbody class="svelte-1nfvjs4"></tbody></table></div>'),G2=P('<div class="footer-row svelte-1nfvjs4"><span class="footer-label svelte-1nfvjs4"> </span> <span class="footer-total svelte-1nfvjs4"> </span></div>'),J2=P('<div class="cost-footer svelte-1nfvjs4"><!></div>'),Q2=P('<div class="cost-panel svelte-1nfvjs4"><div class="panel-toolbar svelte-1nfvjs4"><div class="toolbar-left svelte-1nfvjs4"><!> <span class="toolbar-title svelte-1nfvjs4">Couts par session</span> <!></div> <div class="toolbar-right svelte-1nfvjs4"><button><!></button> <button class="refresh-btn svelte-1nfvjs4" title="Rafraichir"><!></button></div></div> <!> <!></div>');function Z2(e,t){xe(t,!0);let s=j(we([])),n=j(!0),i=j(null),a=j(!1),r=null,o=W(()=>[...u(s)].sort((O,H)=>H.estimated_cost_usd-O.estimated_cost_usd)),l=W(()=>u(s).reduce((O,H)=>O+(H.estimated_cost_usd??0),0)),c=W(()=>()=>{const O=new Map;for(const H of u(s)){const tt=H.account_email??"inconnu";O.has(tt)||O.set(tt,{email:tt,sessions:[],totalCost:0,totalInput:0,totalOutput:0,totalRequests:0});const kt=O.get(tt);kt.sessions.push(H),kt.totalCost+=H.estimated_cost_usd??0,kt.totalInput+=H.total_input_tokens??0,kt.totalOutput+=H.total_output_tokens??0,kt.totalRequests+=H.request_count??0}return[...O.values()].sort((H,tt)=>tt.totalCost-H.totalCost)});async function d(){try{const O=await pu();M(s,O.filter(H=>H&&typeof H=="object"),!0),M(i,null)}catch(O){console.error("CostPanel: failed to load sessions",O),M(i,"Impossible de charger les sessions")}finally{M(n,!1)}}Ve(()=>(d(),r=setInterval(d,1e4),()=>{r!==null&&clearInterval(r)}));function h(O){return O===0?"$0.0000":O<1e-4?`$${O.toExponential(2)}`:`$${O.toFixed(4)}`}function f(O){return O?O>=1e6?`${(O/1e6).toFixed(1)}M`:O>=1e3?`${(O/1e3).toFixed(1)}k`:`${O}`:"0"}function v(O){return O?O.split("-").slice(-2).join("-"):"—"}function g(O){return O?new Date(O).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function m(O){return O<=0?"var(--fg-dim)":O<.01?"var(--phase-cruise)":O<.1?"var(--phase-watch)":O<1?"var(--phase-alert)":"var(--phase-critical)"}var b=Q2(),y=p(b),S=p(y),k=p(S);Cl(k,{size:16});var w=_(k,4);{var $=O=>{Ue(O,{color:"var(--fg-dim)",small:!0,children:(H,tt)=>{var kt=Ht();R(()=>D(kt,`${u(s).length??""} session${u(s).length!==1?"s":""}`)),x(H,kt)},$$slots:{default:!0}})};B(w,O=>{u(n)||O($)})}var A=_(S,2),z=p(A);let C;var T=p(z);{var E=O=>{var H=B2(),tt=I(H);ep(tt,{size:14}),x(O,H)},L=O=>{var H=q2(),tt=I(H);Xa(tt,{size:14}),x(O,H)};B(T,O=>{u(a)?O(E):O(L,!1)})}var N=_(z,2),Z=p(N);{let O=W(()=>u(n)?"spin":"");bs(Z,{size:14,get class(){return u(O)}})}var K=_(y,2);{var V=O=>{var H=V2(),tt=p(H);bs(tt,{size:20,class:"spin"}),x(O,H)},X=O=>{var H=H2(),tt=p(H),kt=p(tt);R(()=>D(kt,u(i))),x(O,H)},J=O=>{var H=W2(),tt=p(H);Cl(tt,{size:20}),x(O,H)},xt=O=>{var H=Y2(),tt=p(H),kt=_(p(tt));ie(kt,21,()=>u(c),q=>q.email,(q,et)=>{var Mt=U2(),ee=p(Mt),de=p(ee),U=p(de),jt=_(ee),Vt=p(jt),Zt=_(jt),zt=p(Zt),Nt=_(Zt),fe=p(Nt),ue=_(Nt),ft=p(ue),At=_(ue),$t=p(At),G=p($t);R((vt,_t,St,Ft)=>{Dt(de,"title",u(et).email),D(U,u(et).email),D(Vt,u(et).sessions.length),D(zt,u(et).totalRequests),D(fe,vt),D(ft,_t),Be($t,`color: ${St??""}`),D(G,Ft)},[()=>f(u(et).totalInput),()=>f(u(et).totalOutput),()=>m(u(et).totalCost),()=>h(u(et).totalCost)]),x(q,Mt)}),x(O,H)},yt=O=>{var H=X2(),tt=p(H),kt=_(p(tt));ie(kt,21,()=>u(o),q=>q.session_id,(q,et)=>{var Mt=K2(),ee=p(Mt),de=p(ee),U=p(de),jt=_(ee),Vt=p(jt);Ue(Vt,{color:"var(--provider-anthropic)",small:!0,children:(St,Ft)=>{var Kt=Ht();R(oe=>D(Kt,oe),[()=>v(u(et).model)]),x(St,Kt)},$$slots:{default:!0}});var Zt=_(jt),zt=p(Zt),Nt=_(Zt),fe=p(Nt),ue=_(Nt),ft=p(ue),At=_(ue),$t=p(At),G=p($t),vt=_(At),_t=p(vt);R((St,Ft,Kt,oe,be)=>{Dt(de,"title",u(et).account_email),D(U,u(et).account_email??"—"),D(zt,u(et).request_count??0),D(fe,St),D(ft,Ft),Be($t,`color: ${Kt??""}`),D(G,oe),D(_t,be)},[()=>f(u(et).total_input_tokens??0),()=>f(u(et).total_output_tokens??0),()=>m(u(et).estimated_cost_usd??0),()=>h(u(et).estimated_cost_usd??0),()=>g(u(et).updated_at)]),x(q,Mt)}),x(O,H)};B(K,O=>{u(n)?O(V):u(i)?O(X,1):u(s).length===0?O(J,2):u(a)?O(xt,3):O(yt,!1)})}var Pt=_(K,2);{var F=O=>{var H=J2(),tt=p(H);he(tt,{hoverable:!1,padding:"12px 16px",children:(kt,q)=>{var et=G2(),Mt=p(et),ee=p(Mt),de=_(Mt,2),U=p(de);R((jt,Vt)=>{D(ee,`Cout total estimé (${u(s).length??""} sessions)`),Be(de,`color: ${jt??""}`),D(U,Vt)},[()=>m(u(l)),()=>h(u(l))]),x(kt,et)},$$slots:{default:!0}}),x(O,H)};B(Pt,O=>{u(s).length>0&&O(F)})}R(()=>{C=Yt(z,1,"toggle-btn svelte-1nfvjs4",null,C,{active:u(a)}),Dt(z,"title",u(a)?"Vue liste":"Grouper par compte")}),nt("click",z,()=>M(a,!u(a))),nt("click",N,d),x(e,b),ke()}De(["click"]);var tk=P('<div class="bc-empty svelte-5lsw3n"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--phase-cruise)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>Aucun cooldown actif</span> <span class="bc-empty-hint svelte-5lsw3n">Tous les comptes OAuth sont disponibles</span></div>'),ek=P('<div class="bc-item svelte-5lsw3n"><div class="bc-item-header svelte-5lsw3n"><div class="bc-item-info svelte-5lsw3n"><span class="bc-email svelte-5lsw3n"> </span> <span class="bc-reason svelte-5lsw3n"> </span></div> <div class="bc-item-meta svelte-5lsw3n"><span class="bc-remaining svelte-5lsw3n"> </span> <span class="bc-until svelte-5lsw3n"> </span></div></div> <div class="bc-bar-track svelte-5lsw3n"><div class="bc-bar-fill svelte-5lsw3n"></div></div></div>'),sk=P('<div class="bc-item bc-item-expired svelte-5lsw3n"><div class="bc-item-header svelte-5lsw3n"><span class="bc-email dim svelte-5lsw3n"> </span> <span class="bc-remaining dim svelte-5lsw3n">expire</span></div></div>'),nk=P('<div class="bc-expired-section svelte-5lsw3n"><span class="bc-expired-label svelte-5lsw3n">Expires recemment</span> <!></div>'),ik=P('<div class="bc-list svelte-5lsw3n"></div> <!>',1),ak=P('<div class="backoff-chart svelte-5lsw3n"><div class="bc-header svelte-5lsw3n"><div class="bc-indicator svelte-5lsw3n"></div> <span class="bc-title svelte-5lsw3n">Cooldowns OAuth</span> <span class="bc-count svelte-5lsw3n"> </span></div> <!></div>');function rk(e,t){xe(t,!0);let s=_e(t,"cooldowns",19,()=>[]);function n(C){const T=new Date(C).getTime()-Date.now();return Math.max(0,Math.floor(T/1e3))}const i=300;function a(C){const T=n(C);return Math.max(0,Math.min(100,T/i*100))}function r(C){if(C<=0)return"expire";const T=Math.floor(C/60),E=C%60;return T===0?`${E}s`:`${T}m ${E}s`}function o(C){return new Date(C).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function l(C){return C===0?"var(--phase-cruise)":C<=2?"var(--phase-watch)":"var(--phase-alert)"}function c(C){return C<30?"var(--phase-cruise)":C<70?"var(--phase-watch)":"var(--phase-alert)"}let d=j(0),h=null;Ve(()=>(h=setInterval(()=>{M(d,u(d)+1)},1e3),()=>{h&&clearInterval(h)}));let f=W(()=>u(d)>=0?s().map(C=>({...C,remaining:n(C.cooldown_until),pct:a(C.cooldown_until)})):[]),v=W(()=>u(f).filter(C=>C.remaining>0)),g=W(()=>u(v).length),m=W(()=>l(u(g)));var b=ak(),y=p(b),S=p(y),k=_(S,4),w=p(k),$=_(y,2);{var A=C=>{var T=tk();x(C,T)},z=C=>{var T=ik(),E=I(T);ie(E,21,()=>u(v),K=>K.key,(K,V)=>{var X=ek(),J=p(X),xt=p(J),yt=p(xt),Pt=p(yt),F=_(yt,2),O=p(F),H=_(xt,2),tt=p(H),kt=p(tt),q=_(tt,2),et=p(q),Mt=_(J,2),ee=p(Mt);R((de,U,jt,Vt)=>{Dt(yt,"title",u(V).email),D(Pt,u(V).email),D(O,u(V).reason),Be(tt,`color: ${de??""}`),D(kt,U),D(et,`jusqu'a ${jt??""}`),Be(ee,`width: ${u(V).pct??""}%; background: ${Vt??""}`)},[()=>c(u(V).pct),()=>r(u(V).remaining),()=>o(u(V).cooldown_until),()=>c(u(V).pct)]),x(K,X)});var L=_(E,2);{var N=K=>{var V=nk(),X=_(p(V),2);ie(X,17,()=>u(f).filter(J=>J.remaining===0),J=>J.key,(J,xt)=>{var yt=sk(),Pt=p(yt),F=p(Pt),O=p(F);R(()=>D(O,u(xt).email)),x(J,yt)}),x(K,V)},Z=W(()=>u(f).some(K=>K.remaining===0));B(L,K=>{u(Z)&&K(N)})}x(C,T)};B($,C=>{u(g)===0?C(A):C(z,!1)})}R(()=>{Be(S,`background: ${u(m)??""}`),Be(k,`color: ${u(m)??""}`),D(w,`${u(g)??""} actif${u(g)!==1?"s":""}`)}),x(e,b),ke()}var ok=P('<span class="stat-pill svelte-n4ip9i" style="color: var(--phase-cruise)"> </span>'),lk=P('<span class="stat-pill svelte-n4ip9i" style="color: var(--status-warning)"> </span>'),ck=P('<span class="stat-pill svelte-n4ip9i" style="color: var(--status-error)"> </span>'),dk=P('<div class="pt-stats svelte-n4ip9i"><!> <!> <!></div>'),uk=P('<div class="pt-placeholder svelte-n4ip9i"><!> <span>Chargement des pairs...</span></div>'),hk=P('<div class="pt-placeholder pt-error svelte-n4ip9i"><span> </span></div>'),fk=P('<div class="pt-placeholder svelte-n4ip9i"><!> <span>Aucun pair configure</span> <span class="pt-placeholder-hint svelte-n4ip9i">Ajoutez des pairs dans les parametres de synchronisation</span></div>'),vk=P('<tr class="svelte-n4ip9i"><td class="addr-cell svelte-n4ip9i"><span class="status-dot svelte-n4ip9i"></span> <span class="addr-text svelte-n4ip9i"> </span></td><td class="svelte-n4ip9i"><!></td><td class="dim svelte-n4ip9i"> </td><td class="dim svelte-n4ip9i"> </td><td class="id-col mono dim svelte-n4ip9i"> </td></tr>'),pk=P('<div class="pt-table-wrapper svelte-n4ip9i"><table class="pt-table svelte-n4ip9i"><thead class="svelte-n4ip9i"><tr><th class="svelte-n4ip9i">Adresse</th><th class="svelte-n4ip9i">Statut</th><th class="svelte-n4ip9i">Latence</th><th class="svelte-n4ip9i">Derniere activite</th><th class="id-col svelte-n4ip9i">ID</th></tr></thead><tbody class="svelte-n4ip9i"></tbody></table></div>'),gk=lr("<line></line>"),mk=lr('<circle cx="0" cy="0" opacity="0.08" class="svelte-n4ip9i"></circle>'),_k=lr('<g class="peer-node svelte-n4ip9i"><!><circle cx="0" cy="0" fill="var(--bg-card)" stroke-width="2" class="svelte-n4ip9i"></circle><text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="700"> </text><text x="0" text-anchor="middle" dominant-baseline="central" font-size="9" fill="var(--fg-secondary)"> </text></g>'),bk=P('<div class="pt-graph-wrapper svelte-n4ip9i"><svg class="pt-svg svelte-n4ip9i" role="img" aria-label="Topologie reseau des pairs"><!><circle fill="none" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 6" opacity="0.4"></circle><!><g><circle cx="0" cy="0" fill="var(--accent)" opacity="0.08"></circle><circle cx="0" cy="0" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="2.5"></circle><text x="0" y="-5" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="700" fill="var(--fg-accent)">Vous</text><text x="0" y="8" text-anchor="middle" dominant-baseline="central" font-size="9" fill="var(--fg-dim)">(local)</text></g></svg> <div class="graph-legend svelte-n4ip9i"><span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--phase-cruise)"></span> Actif</span> <span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--status-warning)"></span> Suspect</span> <span class="legend-item svelte-n4ip9i"><span class="legend-dot svelte-n4ip9i" style="background: var(--status-error)"></span> Hors ligne</span> <span class="legend-item svelte-n4ip9i"><span class="legend-line-dashed svelte-n4ip9i"></span> Connexion inactive</span></div></div>'),yk=P('<div class="peer-topology svelte-n4ip9i"><div class="pt-toolbar svelte-n4ip9i"><div class="pt-toolbar-left svelte-n4ip9i"><!> <span class="pt-title svelte-n4ip9i">Topologie reseau</span> <!></div> <div class="pt-toolbar-right svelte-n4ip9i"><div class="mode-toggle svelte-n4ip9i"><button title="Vue liste"><!></button> <button title="Vue graphe"><!></button></div> <button class="refresh-btn svelte-n4ip9i" title="Rafraichir"><!></button></div></div> <!></div>');function xk(e,t){xe(t,!0);let s=j(we([])),n=j(!0),i=j(null),a=j("list"),r=null;const o=500,l=340,c=o/2,d=l/2,h=120,f=22,v=28;function g(U){return U.status==="ALIVE"||U.status==="alive"?"ALIVE":U.status==="SUSPECT"||U.status==="suspect"?"SUSPECT":U.status==="DEAD"||U.status==="dead"?"DEAD":U.connected===!0?"ALIVE":U.connected===!1?"DEAD":"SUSPECT"}function m(U){return U.addr?U.addr:U.host&&U.port?`${U.host}:${U.port}`:U.host?U.host:U.id}function b(U){return{id:U.id,addr:m(U),status:g(U),lastSeen:U.last_seen??U.lastSeen??null,latencyMs:null}}async function y(){try{const U=await Ia();M(s,U.map(b),!0),M(i,null)}catch(U){console.error("PeerTopology: failed to load peers",U),M(i,"Impossible de charger les pairs")}finally{M(n,!1)}}Ve(()=>(y(),r=setInterval(y,5e3),()=>{r!==null&&clearInterval(r)}));function S(U){return U==="ALIVE"?"var(--phase-cruise)":U==="SUSPECT"?"var(--status-warning)":"var(--status-error)"}function k(U){return U==="ALIVE"?"Actif":U==="SUSPECT"?"Suspect":"Hors ligne"}function w(U){if(!U)return"jamais";const jt=Date.now()-new Date(U).getTime(),Vt=Math.floor(jt/1e3);if(Vt<60)return`il y a ${Vt}s`;const Zt=Math.floor(Vt/60);return Zt<60?`il y a ${Zt}min`:`il y a ${Math.floor(Zt/60)}h`}function $(U,jt){if(jt===0)return{x:c,y:d};const Vt=2*Math.PI*U/jt-Math.PI/2;return{x:c+h*Math.cos(Vt),y:d+h*Math.sin(Vt)}}let A=W(()=>u(s).filter(U=>U.status==="ALIVE").length),z=W(()=>u(s).filter(U=>U.status==="SUSPECT").length),C=W(()=>u(s).filter(U=>U.status==="DEAD").length);var T=yk(),E=p(T),L=p(E),N=p(L);Cr(N,{size:16});var Z=_(N,4);{var K=U=>{var jt=dk(),Vt=p(jt);{var Zt=ft=>{var At=ok(),$t=p(At);R(()=>D($t,`${u(A)??""} actif${u(A)!==1?"s":""}`)),x(ft,At)};B(Vt,ft=>{u(A)>0&&ft(Zt)})}var zt=_(Vt,2);{var Nt=ft=>{var At=lk(),$t=p(At);R(()=>D($t,`${u(z)??""} suspect${u(z)!==1?"s":""}`)),x(ft,At)};B(zt,ft=>{u(z)>0&&ft(Nt)})}var fe=_(zt,2);{var ue=ft=>{var At=ck(),$t=p(At);R(()=>D($t,`${u(C)??""} hors ligne`)),x(ft,At)};B(fe,ft=>{u(C)>0&&ft(ue)})}x(U,jt)};B(Z,U=>{u(n)||U(K)})}var V=_(L,2),X=p(V),J=p(X);let xt;var yt=p(J);sp(yt,{size:14});var Pt=_(J,2);let F;var O=p(Pt);Cr(O,{size:14});var H=_(X,2),tt=p(H);bs(tt,{size:14});var kt=_(E,2);{var q=U=>{var jt=uk(),Vt=p(jt);bs(Vt,{size:20,class:"spin"}),x(U,jt)},et=U=>{var jt=hk(),Vt=p(jt),Zt=p(Vt);R(()=>D(Zt,u(i))),x(U,jt)},Mt=U=>{var jt=fk(),Vt=p(jt);Cr(Vt,{size:24}),x(U,jt)},ee=U=>{var jt=pk(),Vt=p(jt),Zt=_(p(Vt));ie(Zt,21,()=>u(s),zt=>zt.id,(zt,Nt)=>{var fe=vk(),ue=p(fe),ft=p(ue),At=_(ft,2),$t=p(At),G=_(ue),vt=p(G);{let ge=W(()=>S(u(Nt).status));Ue(vt,{get color(){return u(ge)},small:!0,children:(Jt,Gt)=>{var Ot=Ht();R(st=>D(Ot,st),[()=>k(u(Nt).status)]),x(Jt,Ot)},$$slots:{default:!0}})}var _t=_(G),St=p(_t),Ft=_(_t),Kt=p(Ft),oe=_(Ft),be=p(oe);R((ge,Jt,Gt)=>{Be(ft,`background: ${ge??""}`),D($t,u(Nt).addr),D(St,u(Nt).latencyMs!==null?`${u(Nt).latencyMs}ms`:"—"),D(Kt,Jt),Dt(oe,"title",u(Nt).id),D(be,`${Gt??""}…`)},[()=>S(u(Nt).status),()=>w(u(Nt).lastSeen),()=>u(Nt).id.slice(0,12)]),x(zt,fe)}),x(U,jt)},de=U=>{var jt=bk(),Vt=p(jt);Dt(Vt,"viewBox","0 0 500 340");var Zt=p(Vt);ie(Zt,19,()=>u(s),At=>At.id,(At,$t,G)=>{const vt=W(()=>$(u(G),u(s).length));var _t=gk();Dt(_t,"x1",c),Dt(_t,"y1",d),R(St=>{Dt(_t,"x2",u(vt).x),Dt(_t,"y2",u(vt).y),Dt(_t,"stroke",St),Dt(_t,"stroke-width",u($t).status==="ALIVE"?1.5:1),Dt(_t,"stroke-opacity",u($t).status==="ALIVE"?.5:.2),Dt(_t,"stroke-dasharray",u($t).status==="DEAD"?"4 4":"none")},[()=>S(u($t).status)]),x(At,_t)});var zt=_(Zt);Dt(zt,"cx",c),Dt(zt,"cy",d),Dt(zt,"r",h);var Nt=_(zt);ie(Nt,19,()=>u(s),At=>At.id,(At,$t,G)=>{const vt=W(()=>$(u(G),u(s).length));var _t=_k(),St=p(_t);{var Ft=Gt=>{var Ot=mk();Dt(Ot,"r",f+6),R(st=>Dt(Ot,"fill",st),[()=>S(u($t).status)]),x(Gt,Ot)};B(St,Gt=>{u($t).status==="ALIVE"&&Gt(Ft)})}var Kt=_(St);Dt(Kt,"r",f);var oe=_(Kt),be=p(oe),ge=_(oe);Dt(ge,"y",f+14);var Jt=p(ge);R((Gt,Ot,st)=>{Dt(_t,"transform",`translate(${u(vt).x??""},${u(vt).y??""})`),Dt(Kt,"stroke",Gt),Dt(oe,"fill",Ot),D(be,u($t).status==="ALIVE"?"●":u($t).status==="SUSPECT"?"◐":"○"),D(Jt,st)},[()=>S(u($t).status),()=>S(u($t).status),()=>u($t).addr.length>18?u($t).addr.slice(0,18)+"…":u($t).addr]),x(At,_t)});var fe=_(Nt);Dt(fe,"transform","translate(250,170)");var ue=p(fe);Dt(ue,"r",v+8);var ft=_(ue);Dt(ft,"r",v),x(U,jt)};B(kt,U=>{u(n)?U(q):u(i)?U(et,1):u(s).length===0?U(Mt,2):u(a)==="list"?U(ee,3):U(de,!1)})}R(()=>{xt=Yt(J,1,"mode-btn svelte-n4ip9i",null,xt,{active:u(a)==="list"}),F=Yt(Pt,1,"mode-btn svelte-n4ip9i",null,F,{active:u(a)==="graph"})}),nt("click",J,()=>M(a,"list")),nt("click",Pt,()=>M(a,"graph")),nt("click",H,y),x(e,T),ke()}De(["click"]);var kk=P("<button> </button>"),wk=P('<div class="monitoring-screen svelte-c089yk"><header class="screen-header svelte-c089yk"><h1 class="screen-title svelte-c089yk">Monitoring</h1></header> <div class="tab-bar svelte-c089yk"></div> <div class="tab-content svelte-c089yk"><!></div></div>');function $k(e){let t=j("quotas");const s=[{id:"quotas",label:"Quotas"},{id:"requests",label:"Requetes"},{id:"sessions",label:"Sessions"},{id:"costs",label:"Couts"},{id:"switches",label:"Switches"},{id:"cooldowns",label:"Cooldowns"},{id:"peers",label:"Pairs"},{id:"logs",label:"Journal"}];var n=wk(),i=_(p(n),2);ie(i,21,()=>s,Re,(m,b)=>{var y=kk();let S;var k=p(y);R(()=>{S=Yt(y,1,"tab-item svelte-c089yk",null,S,{active:u(t)===u(b).id}),D(k,u(b).label)}),nt("click",y,()=>M(t,u(b).id,!0)),x(m,y)});var a=_(i,2),r=p(a);{var o=m=>{v2(m,{})},l=m=>{b2(m,{})},c=m=>{S2(m,{})},d=m=>{Z2(m,{})},h=m=>{F2(m,{})},f=m=>{rk(m,{})},v=m=>{xk(m,{})},g=m=>{z2(m,{})};B(r,m=>{u(t)==="quotas"?m(o):u(t)==="requests"?m(l,1):u(t)==="sessions"?m(c,2):u(t)==="costs"?m(d,3):u(t)==="switches"?m(h,4):u(t)==="cooldowns"?m(f,5):u(t)==="peers"?m(v,6):m(g,!1)})}x(e,n)}De(["click"]);var Sk=P('<h3 class="section-title svelte-onrf5"> </h3>'),Mk=P('<div class="settings-section svelte-onrf5"><!> <div class="section-content svelte-onrf5"><!></div></div>');function Da(e,t){let s=_e(t,"title",3,"");var n=Mk(),i=p(n);{var a=l=>{var c=Sk(),d=p(c);R(()=>D(d,s())),x(l,c)};B(i,l=>{s()&&l(a)})}var r=_(i,2),o=p(r);xn(o,()=>t.children),x(e,n)}var Pk=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Auto-refresh</span> <span class="setting-desc svelte-y99ba5">Rafraichir automatiquement les quotas</span></div> <!></div>'),Ak=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Intervalle (secondes)</span> <span class="setting-desc svelte-y99ba5">Frequence de rafraichissement</span></div> <input type="number" class="setting-input svelte-y99ba5" min="10" max="600"/></div>'),Ck=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Auto-switch</span> <span class="setting-desc svelte-y99ba5">Changer de compte automatiquement quand quota atteint</span></div> <!></div>'),zk=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Rotation</span> <span class="setting-desc svelte-y99ba5">Rotation automatique entre comptes</span></div> <!></div>'),Tk=P('<div class="setting-row svelte-y99ba5"><div class="setting-info svelte-y99ba5"><span class="setting-label svelte-y99ba5">Intervalle rotation (min)</span> <span class="setting-desc svelte-y99ba5">Duree avant de changer de compte</span></div> <input type="number" class="setting-input svelte-y99ba5" min="1" max="120"/></div>'),Ek=P('<div class="settings-group svelte-y99ba5"><!> <!> <!> <!> <!></div>'),Dk=P('<p class="loading-text svelte-y99ba5">Chargement de la configuration...</p>'),Ok=P('<div class="general-settings svelte-y99ba5"><h3 class="section-title svelte-y99ba5">General</h3> <!></div>');function Rk(e,t){xe(t,!0);let s=j(null);Ve(()=>(Pe.load(),Pe.subscribe(v=>{M(s,v,!0)})));async function n(f){await Pe.save({adaptiveRefresh:f})}async function i(f){const v=parseInt(f.target.value);v>=10&&v<=600&&await Pe.save({refreshIntervalSecs:v})}async function a(f){if(!u(s)?.proxy)return;const v={...u(s).proxy};f?(v.autoSwitchThreshold5h=.85,v.autoSwitchThreshold7d=.9):(v.autoSwitchThreshold5h=0,v.autoSwitchThreshold7d=0),await Pe.save({proxy:v})}async function r(f){if(!u(s)?.proxy)return;const v={...u(s).proxy,rotationEnabled:f};await Pe.save({proxy:v})}async function o(f){if(!u(s)?.proxy)return;const v=parseInt(f.target.value);if(v>=1&&v<=120){const g={...u(s).proxy,rotationIntervalSecs:v*60};await Pe.save({proxy:g})}}var l=Ok(),c=_(p(l),2);{var d=f=>{var v=Ek(),g=p(v);he(g,{hoverable:!1,children:($,A)=>{var z=Pk(),C=_(p(z),2);{let T=W(()=>u(s)?.adaptiveRefresh??!1);gs(C,{get checked(){return u(T)},onchange:n})}x($,z)},$$slots:{default:!0}});var m=_(g,2);{var b=$=>{he($,{hoverable:!1,children:(A,z)=>{var C=Ak(),T=_(p(C),2);R(()=>Ua(T,u(s)?.refreshIntervalSecs??60)),nt("change",T,i),x(A,C)},$$slots:{default:!0}})};B(m,$=>{u(s)?.adaptiveRefresh&&$(b)})}var y=_(m,2);he(y,{hoverable:!1,children:($,A)=>{var z=Ck(),C=_(p(z),2);{let T=W(()=>(u(s)?.proxy?.autoSwitchThreshold5h??0)>0);gs(C,{get checked(){return u(T)},onchange:a})}x($,z)},$$slots:{default:!0}});var S=_(y,2);he(S,{hoverable:!1,children:($,A)=>{var z=zk(),C=_(p(z),2);{let T=W(()=>u(s)?.proxy?.rotationEnabled??!1);gs(C,{get checked(){return u(T)},onchange:r})}x($,z)},$$slots:{default:!0}});var k=_(S,2);{var w=$=>{he($,{hoverable:!1,children:(A,z)=>{var C=Tk(),T=_(p(C),2);R(E=>Ua(T,E),[()=>Math.round((u(s)?.proxy?.rotationIntervalSecs??3600)/60)]),nt("change",T,o),x(A,C)},$$slots:{default:!0}})};B(k,$=>{u(s)?.proxy?.rotationEnabled&&$(w)})}x(f,v)},h=f=>{var v=Dk();x(f,v)};B(c,f=>{u(s)?f(d):f(h,!1)})}x(e,l),ke()}De(["change"]);var Lk=P('<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Son</span> <span class="setting-desc svelte-1x8ltrf">Jouer un son lors des notifications</span></div> <!></div>'),Ik=P('<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Toasts</span> <span class="setting-desc svelte-1x8ltrf">Afficher les notifications toast</span></div> <!></div>'),jk=P(`<div class="setting-row svelte-1x8ltrf"><div class="setting-info svelte-1x8ltrf"><span class="setting-label svelte-1x8ltrf">Seuil d'alerte (%)</span> <span class="setting-desc svelte-1x8ltrf">Pourcentage de quota avant notification</span></div> <div class="threshold-input svelte-1x8ltrf"><input type="range" class="range-input svelte-1x8ltrf" min="50" max="99"/> <span class="threshold-value svelte-1x8ltrf"> </span></div></div>`),Nk=P('<div class="settings-group svelte-1x8ltrf"><!> <!> <!></div>'),Fk=P('<p class="loading-text svelte-1x8ltrf">Chargement...</p>'),Bk=P('<div class="alert-settings svelte-1x8ltrf"><h3 class="section-title svelte-1x8ltrf">Alertes & Notifications</h3> <!></div>');function qk(e,t){xe(t,!0);let s=j(null);Ve(()=>Pe.subscribe(h=>{M(s,h,!0)}));async function n(d){u(s)?.alerts&&await Pe.save({alerts:{...u(s).alerts,soundEnabled:d}})}async function i(d){u(s)?.alerts&&await Pe.save({alerts:{...u(s).alerts,toastsEnabled:d}})}async function a(d){if(!u(s)?.alerts)return;const h=parseInt(d.target.value);h>=50&&h<=99&&await Pe.save({alerts:{...u(s).alerts,quotaAlertThreshold:h/100}})}var r=Bk(),o=_(p(r),2);{var l=d=>{var h=Nk(),f=p(h);he(f,{hoverable:!1,children:(m,b)=>{var y=Lk(),S=_(p(y),2);{let k=W(()=>u(s)?.alerts?.soundEnabled??!1);gs(S,{get checked(){return u(k)},onchange:n})}x(m,y)},$$slots:{default:!0}});var v=_(f,2);he(v,{hoverable:!1,children:(m,b)=>{var y=Ik(),S=_(p(y),2);{let k=W(()=>u(s)?.alerts?.toastsEnabled??!0);gs(S,{get checked(){return u(k)},onchange:i})}x(m,y)},$$slots:{default:!0}});var g=_(v,2);he(g,{hoverable:!1,children:(m,b)=>{var y=jk(),S=_(p(y),2),k=p(S),w=_(k,2),$=p(w);R((A,z)=>{Ua(k,A),D($,`${z??""}%`)},[()=>Math.round((u(s)?.alerts?.quotaAlertThreshold??.8)*100),()=>Math.round((u(s)?.alerts?.quotaAlertThreshold??.8)*100)]),nt("input",k,a),x(m,y)},$$slots:{default:!0}}),x(d,h)},c=d=>{var h=Fk();x(d,h)};B(o,d=>{u(s)?d(l):d(c,!1)})}x(e,r),ke()}De(["input"]);var Vk=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchronisation P2P</span> <span class="setting-desc svelte-1aja7hz">Partager les credentials entre instances</span></div> <!></div>'),Hk=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Port TCP</span> <span class="setting-desc svelte-1aja7hz">Port de la synchronisation P2P</span></div> <code class="mono-value svelte-1aja7hz"> </code></div>'),Wk=P('<button class="icon-btn svelte-1aja7hz" title="Copier"><!></button>'),Uk=P("<!> Generer",1),Yk=P('<div class="key-edit-row svelte-1aja7hz"><input type="text" class="peer-input key-input svelte-1aja7hz" placeholder="64 caracteres hex..."/> <!> <!></div>'),Kk=P('<div class="key-section svelte-1aja7hz"><div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Cle partagee (NaCl SecretBox)</span> <span class="setting-desc svelte-1aja7hz">Cle de chiffrement P2P (32 bytes hex)</span></div></div> <div class="key-display svelte-1aja7hz"><code class="key-value svelte-1aja7hz"> </code> <div class="key-actions svelte-1aja7hz"><button class="icon-btn svelte-1aja7hz"><!></button> <!></div></div> <div class="key-buttons svelte-1aja7hz"><!> <!></div></div>'),Xk=P("<!> Ajouter",1),Gk=P("<!> Tester",1),Jk=P("<!> ",1),Qk=P("<!> ",1),Zk=P("<div><!></div>"),tw=P('<span class="peer-seen svelte-1aja7hz"> </span>'),ew=P('<div class="peer-item svelte-1aja7hz"><span class="peer-icon svelte-1aja7hz"><!></span> <span class="peer-address svelte-1aja7hz"> </span> <!> <!> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Tester la connexion"><!></button> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Supprimer"><!></button></div>'),sw=P('<p class="no-peers svelte-1aja7hz">Aucun pair configure</p>'),nw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchroniser le compte actif</span> <span class="setting-desc svelte-1aja7hz">Propager les switchs de compte entre pairs</span></div> <!></div>'),iw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Synchroniser les quotas</span> <span class="setting-desc svelte-1aja7hz">Partager les mises a jour de quota entre pairs</span></div> <!></div>'),aw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Repartir les fetches de quota</span> <span class="setting-desc svelte-1aja7hz">Diviser les appels API quota entre pairs</span></div> <!></div>'),rw=P('<div class="option-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Failover proxy automatique</span> <span class="setting-desc svelte-1aja7hz">Basculer vers un proxy pair si le local tombe</span></div> <!></div>'),ow=P('<div class="daemon-info svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Mode daemon (headless)</span> <span class="setting-desc svelte-1aja7hz">Compatible serveur Ubuntu sans GUI — meme fichier settings.json</span></div> <code class="mono-value code-block svelte-1aja7hz"> </code></div>'),lw=P(`<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Nom de cette instance</span> <span class="setting-desc svelte-1aja7hz">Utilise pour l'identification P2P et le proxy owner</span></div> <code class="mono-value svelte-1aja7hz"> </code></div>`),cw=P('<!> <!> <div class="peers-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz">Pairs connectes</h4> <div class="add-peer-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Hote (ex: 192.168.1.10)"/> <input type="number" class="peer-input port-input svelte-1aja7hz" placeholder="Port"/> <!> <!></div> <!> <div class="peer-list svelte-1aja7hz"><!> <!></div></div> <div class="options-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz">Options de synchronisation</h4> <!> <!> <!> <!></div> <!> <!>',1),dw=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Activer la sync SSH</span> <span class="setting-desc svelte-1aja7hz">Pousser les credentials vers des serveurs distants via SCP</span></div> <!></div>'),uw=P("<!> Ajouter",1),hw=P("<!> ",1),fw=P("<!> ",1),vw=P("<div><!></div>"),pw=P('<span class="peer-seen svelte-1aja7hz"><!> </span>'),gw=P('<div class="peer-item svelte-1aja7hz"><span class="peer-icon svelte-1aja7hz"><!></span> <span class="peer-address svelte-1aja7hz"> </span> <!> <!> <button class="icon-btn svelte-1aja7hz" title="Tester la connexion SSH"><!></button> <button class="icon-btn icon-btn-danger svelte-1aja7hz" title="Supprimer"><!></button></div>'),mw=P('<p class="no-peers svelte-1aja7hz">Aucun hote SSH configure</p>'),_w=P('<div class="ssh-add-form svelte-1aja7hz"><div class="ssh-form-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Utilisateur"/> <span class="ssh-at svelte-1aja7hz">@</span> <input type="text" class="peer-input svelte-1aja7hz" placeholder="Hote (ex: 192.168.1.10)"/> <input type="number" class="peer-input port-input svelte-1aja7hz" placeholder="22"/></div> <div class="ssh-form-row svelte-1aja7hz"><input type="text" class="peer-input svelte-1aja7hz" placeholder="Chemin cle privee (optionnel, ex: ~/.ssh/id_rsa)"/> <!></div></div> <!> <div class="peer-list svelte-1aja7hz"><!> <!></div>',1),bw=P('<div class="setting-row svelte-1aja7hz"><div class="setting-info svelte-1aja7hz"><span class="setting-label svelte-1aja7hz">Service systemd</span> <span class="setting-desc svelte-1aja7hz">Lancer automatiquement le daemon + proxy au demarrage du systeme</span></div> <div class="systemd-status-row svelte-1aja7hz"><!> <button class="icon-btn svelte-1aja7hz" title="Rafraichir le statut"><!></button></div></div>'),yw=P("<!> Installer le service",1),xw=P("<!> Desinstaller",1),kw=P("<!> Reinstaller et demarrer",1),ww=P("<!> Desinstaller",1),$w=P("<!> <!>",1),Sw=P("<div> </div>"),Mw=P(`<div class="daemon-info svelte-1aja7hz"><span class="setting-desc svelte-1aja7hz">Le service systemd lancera <code>ai-manager-daemon --settings ~/path/settings.json</code> au demarrage.
                Le proxy et la sync P2P se lanceront automatiquement selon la configuration.</span></div>`),Pw=P('<div class="systemd-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz"><!> Lancement automatique (systemd)</h4> <!> <div class="systemd-actions svelte-1aja7hz"><!></div> <!> <!></div>'),Aw=P('<div class="settings-group svelte-1aja7hz"><!> <!> <div class="ssh-section svelte-1aja7hz"><h4 class="subsection-title svelte-1aja7hz"><!> Synchronisation SSH</h4> <!> <!></div> <!></div>'),Cw=P('<p class="loading-text svelte-1aja7hz">Chargement...</p>'),zw=P('<div class="network-settings svelte-1aja7hz"><h3 class="section-title svelte-1aja7hz">Reseau & P2P</h3> <!></div>');function Tw(e,t){xe(t,!0);let s=j(null),n=j(we([])),i=j(""),a=j(9090),r=j(!1),o=j(""),l=j(!1),c=j(!1),d=j(null),h=j(null),f=j("—"),v=j(""),g=j(""),m=j(22),b=j(""),y=j(null),S=j(null),k=j("loading"),w=j(!1),$=j(null);Ve(async()=>{Ss.load();const q=Pe.subscribe(Mt=>{M(s,Mt,!0)}),et=Ss.peers.subscribe(Mt=>{M(n,Mt,!0)});try{M(f,await sg(),!0)}catch{}try{M(k,await _a(),!0)}catch{M(k,"unavailable")}return()=>{q(),et()}});async function A(q){u(s)?.sync&&(await Pe.save({sync:{...u(s).sync,enabled:q}}),await Ss.load())}async function z(q,et){u(s)?.sync&&await Pe.save({sync:{...u(s).sync,[q]:et}})}async function C(){u(i)&&(await Ss.addPeer(u(i),u(a)),M(i,""),M(a,9090),await Ss.load())}async function T(q){await Ss.removePeer(q),await Ss.load()}async function E(q,et){const Mt=`${q}:${et}`;M(d,Mt),M(h,null);try{const ee=await Ss.testPeer(q,et);M(h,{host:Mt,ok:ee},!0)}catch(ee){M(h,{host:Mt,ok:!1,error:String(ee)},!0)}finally{M(d,null)}}async function L(){const q=await Ss.generateKey();u(s)&&M(s,{...u(s),sync:{...u(s).sync,sharedKeyHex:q}},!0),M(r,!0)}async function N(){!u(o)||u(o).length!==64||(await Ss.setKey(u(o)),u(s)&&M(s,{...u(s),sync:{...u(s).sync,sharedKeyHex:u(o)}},!0),M(l,!1),M(o,""))}function Z(){u(s)?.sync?.sharedKeyHex&&(navigator.clipboard.writeText(u(s).sync.sharedKeyHex),M(c,!0),setTimeout(()=>{M(c,!1)},2e3))}function K(q){return q?u(r)?q:q.substring(0,8)+"..."+q.substring(q.length-8):"—"}async function V(q){u(s)?.sync&&await Pe.save({sync:{...u(s).sync,sshEnabled:q}})}async function X(){!u(v)||!u(g)||(await ng(u(g),u(m),u(v),u(b)||void 0),await Pe.load(),M(v,""),M(g,""),M(m,22),M(b,""))}async function J(q){await ig(q),await Pe.load()}async function xt(q){M(y,q.id,!0),M(S,null);try{const et=await ag(q.host,q.port,q.username,q.identityPath);M(S,{id:q.id,ok:et},!0)}catch(et){M(S,{id:q.id,ok:!1,error:String(et)},!0)}finally{M(y,null)}}async function yt(){M(w,!0),M($,null);try{const q=await Kp();M($,q,!0),M(k,await _a(),!0)}catch(q){M($,String(q),!0)}finally{M(w,!1)}}async function Pt(){M(w,!0),M($,null);try{const q=await Xp();M($,q,!0),M(k,await _a(),!0)}catch(q){M($,String(q),!0)}finally{M(w,!1)}}async function F(){try{M(k,await _a(),!0)}catch{M(k,"unavailable")}}var O=zw(),H=_(p(O),2);{var tt=q=>{var et=Aw(),Mt=p(et);he(Mt,{hoverable:!1,children:(ft,At)=>{var $t=Vk(),G=_(p($t),2);{let vt=W(()=>u(s)?.sync?.enabled??!1);gs(G,{get checked(){return u(vt)},onchange:A})}x(ft,$t)},$$slots:{default:!0}});var ee=_(Mt,2);{var de=ft=>{var At=cw(),$t=I(At);he($t,{hoverable:!1,children:(Q,pt)=>{var at=Hk(),Ct=_(p(at),2),rt=p(Ct);R(()=>D(rt,u(s)?.sync?.port??9090)),x(Q,at)},$$slots:{default:!0}});var G=_($t,2);he(G,{hoverable:!1,children:(Q,pt)=>{var at=Kk(),Ct=_(p(at),2),rt=p(Ct),Tt=p(rt),Xt=_(rt,2),Wt=p(Xt),se=p(Wt);{var Et=le=>{Yv(le,{size:14})},ct=le=>{Kv(le,{size:14})};B(se,le=>{u(r)?le(Et):le(ct,!1)})}var It=_(Wt,2);{var re=le=>{var Ne=Wk(),as=p(Ne);{var Fe=ts=>{Ar(ts,{size:14})},Oe=ts=>{Hv(ts,{size:14})};B(as,ts=>{u(c)?ts(Fe):ts(Oe,!1)})}nt("click",Ne,Z),x(le,Ne)};B(It,le=>{u(s)?.sync?.sharedKeyHex&&le(re)})}var Me=_(Ct,2),Xe=p(Me);qt(Xe,{variant:"primary",size:"sm",onclick:L,children:(le,Ne)=>{var as=Uk(),Fe=I(as);zl(Fe,{size:14}),x(le,as)},$$slots:{default:!0}});var Ze=_(Xe,2);{var Bt=le=>{qt(le,{variant:"ghost",size:"sm",onclick:()=>{M(l,!0),M(o,"")},children:(Ne,as)=>{var Fe=Ht("Saisir manuellement");x(Ne,Fe)},$$slots:{default:!0}})},ve=le=>{var Ne=Yk(),as=p(Ne);Dt(as,"maxlength",64);var Fe=_(as,2);{let ts=W(()=>u(o).length!==64);qt(Fe,{variant:"primary",size:"sm",onclick:N,get disabled(){return u(ts)},children:(al,rl)=>{var gh=Ht("Sauvegarder");x(al,gh)},$$slots:{default:!0}})}var Oe=_(Fe,2);qt(Oe,{variant:"ghost",size:"sm",onclick:()=>{M(l,!1)},children:(ts,al)=>{var rl=Ht("Annuler");x(ts,rl)},$$slots:{default:!0}}),Te(as,()=>u(o),ts=>M(o,ts)),x(le,Ne)};B(Ze,le=>{u(l)?le(ve,!1):le(Bt)})}R(le=>{D(Tt,le),Dt(Wt,"title",u(r)?"Masquer":"Afficher")},[()=>K(u(s)?.sync?.sharedKeyHex??null)]),nt("click",Wt,()=>M(r,!u(r))),x(Q,at)},$$slots:{default:!0}});var vt=_(G,2),_t=_(p(vt),2),St=p(_t),Ft=_(St,2),Kt=_(Ft,2);qt(Kt,{variant:"primary",size:"sm",onclick:C,children:(Q,pt)=>{var at=Xk(),Ct=I(at);Ki(Ct,{size:14}),x(Q,at)},$$slots:{default:!0}});var oe=_(Kt,2);{var be=Q=>{{let pt=W(()=>u(d)!==null);qt(Q,{variant:"ghost",size:"sm",onclick:()=>E(u(i),u(a)),get disabled(){return u(pt)},children:(at,Ct)=>{var rt=Gk(),Tt=I(rt);qi(Tt,{size:14}),x(at,rt)},$$slots:{default:!0}})}};B(oe,Q=>{u(i)&&Q(be)})}var ge=_(_t,2);{var Jt=Q=>{var pt=Zk();let at;var Ct=p(pt);{var rt=Xt=>{var Wt=Jk(),se=I(Wt);Ar(se,{size:14});var Et=_(se);R(()=>D(Et,` Connexion reussie vers ${u(h).host??""}`)),x(Xt,Wt)},Tt=Xt=>{var Wt=Qk(),se=I(Wt);io(se,{size:14});var Et=_(se);R(()=>D(Et,` Echec: ${u(h).error??"Connexion refusee"??""}`)),x(Xt,Wt)};B(Ct,Xt=>{u(h).ok?Xt(rt):Xt(Tt,!1)})}R(()=>at=Yt(pt,1,"test-result svelte-1aja7hz",null,at,{"test-ok":u(h).ok,"test-fail":!u(h).ok})),x(Q,pt)};B(ge,Q=>{u(h)&&Q(Jt)})}var Gt=_(ge,2),Ot=p(Gt);ie(Ot,17,()=>u(n),Q=>Q.id,(Q,pt)=>{var at=ew(),Ct=p(at),rt=p(Ct);{var Tt=Bt=>{No(Bt,{size:14})},Xt=Bt=>{mp(Bt,{size:14})};B(rt,Bt=>{u(pt).connected?Bt(Tt):Bt(Xt,!1)})}var Wt=_(Ct,2),se=p(Wt),Et=_(Wt,2);{let Bt=W(()=>u(pt).connected?"var(--status-running)":"var(--status-stopped)");Ue(Et,{get color(){return u(Bt)},small:!0,children:(ve,le)=>{var Ne=Ht();R(()=>D(Ne,u(pt).connected?"Connecte":"Deconnecte")),x(ve,Ne)},$$slots:{default:!0}})}var ct=_(Et,2);{var It=Bt=>{var ve=tw(),le=p(ve);R(()=>D(le,u(pt).lastSeen)),x(Bt,ve)};B(ct,Bt=>{u(pt).lastSeen&&Bt(It)})}var re=_(ct,2),Me=p(re);qi(Me,{size:12});var Xe=_(re,2),Ze=p(Xe);ei(Ze,{size:12}),R(()=>{D(se,`${u(pt).host??""}:${u(pt).port??""}`),re.disabled=u(d)===`${u(pt).host}:${u(pt).port}`}),nt("click",re,()=>E(u(pt).host,u(pt).port)),nt("click",Xe,()=>T(u(pt).id)),x(Q,at)});var st=_(Ot,2);{var lt=Q=>{var pt=sw();x(Q,pt)};B(st,Q=>{u(n).length===0&&Q(lt)})}var wt=_(vt,2),Qt=_(p(wt),2);he(Qt,{hoverable:!1,children:(Q,pt)=>{var at=nw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.syncActiveAccount??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("syncActiveAccount",Tt)})}x(Q,at)},$$slots:{default:!0}});var Y=_(Qt,2);he(Y,{hoverable:!1,children:(Q,pt)=>{var at=iw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.syncQuota??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("syncQuota",Tt)})}x(Q,at)},$$slots:{default:!0}});var Rt=_(Y,2);he(Rt,{hoverable:!1,children:(Q,pt)=>{var at=aw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.splitQuotaFetch??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("splitQuotaFetch",Tt)})}x(Q,at)},$$slots:{default:!0}});var dt=_(Rt,2);he(dt,{hoverable:!1,children:(Q,pt)=>{var at=rw(),Ct=_(p(at),2);{let rt=W(()=>u(s)?.sync?.proxyFailover??!0);gs(Ct,{get checked(){return u(rt)},onchange:Tt=>z("proxyFailover",Tt)})}x(Q,at)},$$slots:{default:!0}});var bt=_(wt,2);he(bt,{hoverable:!1,children:(Q,pt)=>{var at=ow(),Ct=_(p(at),2),rt=p(Ct);R(()=>D(rt,`ai-manager-daemon --sync-enabled --sync-port ${u(s)?.sync?.port??9090??""} --sync-key <base64>`)),x(Q,at)},$$slots:{default:!0}});var Lt=_(bt,2);he(Lt,{hoverable:!1,children:(Q,pt)=>{var at=lw(),Ct=_(p(at),2),rt=p(Ct);R(()=>D(rt,u(f))),x(Q,at)},$$slots:{default:!0}}),Te(St,()=>u(i),Q=>M(i,Q)),Te(Ft,()=>u(a),Q=>M(a,Q)),x(ft,At)};B(ee,ft=>{u(s)?.sync?.enabled&&ft(de)})}var U=_(ee,2),jt=p(U),Vt=p(jt);hu(Vt,{size:16});var Zt=_(jt,2);he(Zt,{hoverable:!1,children:(ft,At)=>{var $t=dw(),G=_(p($t),2);{let vt=W(()=>u(s)?.sync?.sshEnabled??!1);gs(G,{get checked(){return u(vt)},onchange:V})}x(ft,$t)},$$slots:{default:!0}});var zt=_(Zt,2);{var Nt=ft=>{var At=_w(),$t=I(At),G=p($t),vt=p(G),_t=_(vt,4),St=_(_t,2),Ft=_(G,2),Kt=p(Ft),oe=_(Kt,2);{let lt=W(()=>!u(v)||!u(g));qt(oe,{variant:"primary",size:"sm",onclick:X,get disabled(){return u(lt)},children:(wt,Qt)=>{var Y=uw(),Rt=I(Y);Ki(Rt,{size:14}),x(wt,Y)},$$slots:{default:!0}})}var be=_($t,2);{var ge=lt=>{var wt=vw();let Qt;var Y=p(wt);{var Rt=bt=>{var Lt=hw(),Q=I(Lt);Ar(Q,{size:14});var pt=_(Q);R(()=>D(pt,` Connexion SSH reussie vers ${u(S).id??""}`)),x(bt,Lt)},dt=bt=>{var Lt=fw(),Q=I(Lt);io(Q,{size:14});var pt=_(Q);R(()=>D(pt,` Echec SSH: ${u(S).error??"Connexion refusee"??""}`)),x(bt,Lt)};B(Y,bt=>{u(S).ok?bt(Rt):bt(dt,!1)})}R(()=>Qt=Yt(wt,1,"test-result svelte-1aja7hz",null,Qt,{"test-ok":u(S).ok,"test-fail":!u(S).ok})),x(lt,wt)};B(be,lt=>{u(S)&&lt(ge)})}var Jt=_(be,2),Gt=p(Jt);ie(Gt,17,()=>u(s)?.sync?.sshHosts??[],lt=>lt.id,(lt,wt)=>{var Qt=gw(),Y=p(Qt),Rt=p(Y);uu(Rt,{size:14});var dt=_(Y,2),bt=p(dt),Lt=_(dt,2);{let Xt=W(()=>u(wt).enabled?"var(--status-running)":"var(--status-stopped)");Ue(Lt,{get color(){return u(Xt)},small:!0,children:(Wt,se)=>{var Et=Ht();R(()=>D(Et,u(wt).enabled?"Actif":"Inactif")),x(Wt,Et)},$$slots:{default:!0}})}var Q=_(Lt,2);{var pt=Xt=>{var Wt=pw(),se=p(Wt);zl(se,{size:10});var Et=_(se);R(ct=>{Dt(Wt,"title",u(wt).identityPath),D(Et,` ${ct??""}`)},[()=>u(wt).identityPath.split("/").pop()]),x(Xt,Wt)};B(Q,Xt=>{u(wt).identityPath&&Xt(pt)})}var at=_(Q,2),Ct=p(at);qi(Ct,{size:12});var rt=_(at,2),Tt=p(rt);ei(Tt,{size:12}),R(()=>{D(bt,`${u(wt).username??""}@${u(wt).host??""}:${u(wt).port??""}`),at.disabled=u(y)===u(wt).id}),nt("click",at,()=>xt(u(wt))),nt("click",rt,()=>J(u(wt).id)),x(lt,Qt)});var Ot=_(Gt,2);{var st=lt=>{var wt=mw();x(lt,wt)};B(Ot,lt=>{(u(s)?.sync?.sshHosts??[]).length===0&&lt(st)})}Te(vt,()=>u(v),lt=>M(v,lt)),Te(_t,()=>u(g),lt=>M(g,lt)),Te(St,()=>u(m),lt=>M(m,lt)),Te(Kt,()=>u(b),lt=>M(b,lt)),x(ft,At)};B(zt,ft=>{u(s)?.sync?.sshEnabled&&ft(Nt)})}var fe=_(U,2);{var ue=ft=>{var At=Pw(),$t=p(At),G=p($t);Tl(G,{size:16});var vt=_($t,2);he(vt,{hoverable:!1,children:(Jt,Gt)=>{var Ot=bw(),st=_(p(Ot),2),lt=p(st);{let Y=W(()=>u(k)==="active"?"var(--status-running)":u(k)==="inactive"?"var(--status-warning)":"var(--status-stopped)");Ue(lt,{get color(){return u(Y)},small:!0,children:(Rt,dt)=>{var bt=Ht();R(()=>D(bt,u(k)==="active"?"Actif":u(k)==="inactive"?"Inactif":u(k)==="not-found"?"Non installe":u(k))),x(Rt,bt)},$$slots:{default:!0}})}var wt=_(lt,2),Qt=p(wt);bs(Qt,{size:12}),nt("click",wt,F),x(Jt,Ot)},$$slots:{default:!0}});var _t=_(vt,2),St=p(_t);{var Ft=Jt=>{qt(Jt,{variant:"primary",size:"sm",onclick:yt,get disabled(){return u(w)},children:(Gt,Ot)=>{var st=yw(),lt=I(st);cu(lt,{size:14}),x(Gt,st)},$$slots:{default:!0}})},Kt=Jt=>{var Gt=it(),Ot=I(Gt);{var st=wt=>{qt(wt,{variant:"ghost",size:"sm",onclick:Pt,get disabled(){return u(w)},children:(Qt,Y)=>{var Rt=xw(),dt=I(Rt);hp(dt,{size:14}),x(Qt,Rt)},$$slots:{default:!0}})},lt=wt=>{var Qt=$w(),Y=I(Qt);qt(Y,{variant:"primary",size:"sm",onclick:yt,get disabled(){return u(w)},children:(dt,bt)=>{var Lt=kw(),Q=I(Lt);Tl(Q,{size:14}),x(dt,Lt)},$$slots:{default:!0}});var Rt=_(Y,2);qt(Rt,{variant:"ghost",size:"sm",onclick:Pt,get disabled(){return u(w)},children:(dt,bt)=>{var Lt=ww(),Q=I(Lt);ei(Q,{size:14}),x(dt,Lt)},$$slots:{default:!0}}),x(wt,Qt)};B(Ot,wt=>{u(k)==="active"?wt(st):wt(lt,!1)})}x(Jt,Gt)};B(St,Jt=>{u(k)==="not-found"||u(k)==="loading"?Jt(Ft):Jt(Kt,!1)})}var oe=_(_t,2);{var be=Jt=>{var Gt=Sw();let Ot;var st=p(Gt);R(()=>{Ot=Yt(Gt,1,"test-result svelte-1aja7hz",null,Ot,{"test-ok":u(k)==="active","test-fail":u(k)!=="active"}),D(st,u($))}),x(Jt,Gt)};B(oe,Jt=>{u($)&&Jt(be)})}var ge=_(oe,2);he(ge,{hoverable:!1,children:(Jt,Gt)=>{var Ot=Mw();x(Jt,Ot)},$$slots:{default:!0}}),x(ft,At)};B(fe,ft=>{u(k)!=="unavailable"&&ft(ue)})}x(q,et)},kt=q=>{var et=Cw();x(q,et)};B(H,q=>{u(s)?q(tt):q(kt,!1)})}x(e,O),ke()}De(["click"]);var Ew=P('<div class="provider-details svelte-1xohkg6"><div class="detail-row svelte-1xohkg6"><label class="detail-label svelte-1xohkg6">Cle API</label> <input type="password" class="detail-input svelte-1xohkg6" placeholder="sk-..."/></div> <div class="detail-row svelte-1xohkg6"><label class="detail-label svelte-1xohkg6">Endpoint</label> <input type="url" class="detail-input svelte-1xohkg6"/></div></div>'),Dw=P('<div class="provider-header svelte-1xohkg6"><span class="provider-dot svelte-1xohkg6"></span> <div class="provider-info svelte-1xohkg6"><span class="provider-name svelte-1xohkg6"> </span> <span class="provider-desc svelte-1xohkg6"> </span></div> <!></div> <!>',1),Ow=P(`<div class="provider-settings svelte-1xohkg6"><h3 class="section-title svelte-1xohkg6">Providers</h3> <p class="section-desc svelte-1xohkg6">Configuration des fournisseurs d'API pour le proxy multi-provider.</p> <div class="provider-list svelte-1xohkg6"></div></div>`);function Rw(e){const t=[{id:"anthropic",name:"Anthropic",color:"var(--provider-anthropic)",description:"Claude via API directe"},{id:"gemini",name:"Google Gemini",color:"var(--provider-gemini)",description:"Gemini via Google AI Studio"},{id:"openai",name:"OpenAI",color:"var(--provider-openai)",description:"GPT / o-series via API"},{id:"xai",name:"xAI",color:"var(--provider-xai)",description:"Grok via API xAI"},{id:"deepseek",name:"DeepSeek",color:"var(--provider-deepseek)",description:"DeepSeek R1 / Chat"},{id:"mistral",name:"Mistral",color:"var(--provider-mistral)",description:"Mistral AI models"},{id:"groq",name:"Groq",color:"var(--provider-groq)",description:"Inference rapide via Groq"}];let s=we({anthropic:{enabled:!0,apiKey:"",endpoint:"https://api.anthropic.com"},gemini:{enabled:!1,apiKey:"",endpoint:"https://generativelanguage.googleapis.com"},openai:{enabled:!1,apiKey:"",endpoint:"https://api.openai.com"},xai:{enabled:!1,apiKey:"",endpoint:"https://api.x.ai"},deepseek:{enabled:!1,apiKey:"",endpoint:"https://api.deepseek.com"},mistral:{enabled:!1,apiKey:"",endpoint:"https://api.mistral.ai"},groq:{enabled:!1,apiKey:"",endpoint:"https://api.groq.com"}}),n=j(null);function i(o){M(n,u(n)===o?null:o,!0)}var a=Ow(),r=_(p(a),4);ie(r,21,()=>t,Re,(o,l)=>{const c=W(()=>s[u(l).id]);{let d=W(()=>u(n)===u(l).id);he(o,{onclick:()=>i(u(l).id),get active(){return u(d)},children:(h,f)=>{var v=Dw(),g=I(v),m=p(g),b=_(m,2),y=p(b),S=p(y),k=_(y,2),w=p(k),$=_(b,2);{let C=W(()=>u(c).enabled?"var(--status-running)":"var(--status-stopped)");Ue($,{get color(){return u(C)},small:!0,children:(T,E)=>{var L=Ht();R(()=>D(L,u(c).enabled?"Actif":"Inactif")),x(T,L)},$$slots:{default:!0}})}var A=_(g,2);{var z=C=>{var T=Ew(),E=p(T),L=p(E),N=_(L,2),Z=_(E,2),K=p(Z),V=_(K,2);R(()=>{Dt(L,"for",`apikey-${u(l).id??""}`),Dt(N,"id",`apikey-${u(l).id??""}`),Dt(K,"for",`endpoint-${u(l).id??""}`),Dt(V,"id",`endpoint-${u(l).id??""}`)}),nt("click",T,X=>X.stopPropagation()),nt("keydown",T,()=>{}),Te(N,()=>s[u(l).id].apiKey,X=>s[u(l).id].apiKey=X),Te(V,()=>s[u(l).id].endpoint,X=>s[u(l).id].endpoint=X),x(C,T)};B(A,C=>{u(n)===u(l).id&&C(z)})}R(()=>{Be(m,`background: ${u(l).color??""}`),D(S,u(l).name),D(w,u(l).description)}),x(h,v)},$$slots:{default:!0}})}}),x(e,a)}De(["click","keydown"]);function Lw(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Wr(e){const t=e==="system"?Lw():e;document.documentElement.classList.toggle("light",t==="light")}function Iw(){const e=localStorage.getItem("theme")||"dark",{subscribe:t,set:s}=Vs(e);return Wr(e),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem("theme")==="system"&&Wr("system")}),{subscribe:t,set:n=>{localStorage.setItem("theme",n),Wr(n),s(n)}}}const Oa=Iw();var jw=P("<button><!> <span> </span></button>"),Nw=P('<div class="setting-row svelte-15j4tnx"><label for="schedule-start" class="svelte-15j4tnx">Plage horaire active</label> <div class="time-range svelte-15j4tnx"><input id="schedule-start" type="number" min="0" max="23" value="9" class="time-input svelte-15j4tnx"/> <span class="time-sep svelte-15j4tnx">→</span> <input id="schedule-end" type="number" min="0" max="23" value="18" class="time-input svelte-15j4tnx"/></div></div> <p class="hint svelte-15j4tnx">Les rafraîchissements automatiques ne fonctionnent que dans cette plage.</p>',1),Fw=P('<div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Mode</span> <div class="theme-options svelte-15j4tnx"><button>Sombre</button> <button>Clair</button> <button>Système</button></div></div> <div class="setting-row svelte-15j4tnx"><label for="font-select" class="svelte-15j4tnx">Police</label> <select id="font-select" class="select-input svelte-15j4tnx"><option>Inter</option><option>Geist Sans</option><option>System</option></select></div> <div class="setting-row svelte-15j4tnx"><label for="lang-select" class="svelte-15j4tnx"> </label> <select id="lang-select" class="select-input svelte-15j4tnx"><option>Français</option><option>English</option></select></div>',1),Bw=P(`<div class="action-buttons svelte-15j4tnx"><button class="btn-secondary svelte-15j4tnx">Exporter la config</button> <button class="btn-secondary svelte-15j4tnx">Créer un backup</button> <button class="btn-danger svelte-15j4tnx">Réinitialiser</button></div> <p class="hint svelte-15j4tnx">L'export crée un JSON contenant vos paramètres (sans les tokens).</p>`,1),qw=P('<div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Compte suivant</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+N</kbd></div> <div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Compte précédent</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+P</kbd></div> <div class="setting-row svelte-15j4tnx"><span class="setting-label svelte-15j4tnx">Rafraîchir</span><kbd class="hotkey svelte-15j4tnx">Ctrl+Alt+R</kbd></div>',1),Vw=P('<div class="settings-page svelte-15j4tnx"><header class="page-header svelte-15j4tnx"><h1 class="svelte-15j4tnx"> </h1></header> <div class="settings-body svelte-15j4tnx"><nav class="settings-nav svelte-15j4tnx"></nav> <div class="settings-content svelte-15j4tnx"><!></div></div></div>');function Hw(e,t){xe(t,!0);const s=()=>ou(hr,"$i18nStore",n),[n,i]=lu();let a=j("dark");Oa.subscribe(T=>{M(a,T,!0)});let r=j("general");const o=[{id:"general",label:"Général",icon:jo},{id:"alerts",label:"Alertes",icon:Lv},{id:"schedule",label:"Schedule",icon:Iv},{id:"network",label:"Réseau",icon:No},{id:"providers",label:"Providers",icon:uu},{id:"theme",label:"Thème",icon:np},{id:"data",label:"Données",icon:Wv},{id:"hotkeys",label:"Hotkeys",icon:tp}];function l(T){const E=T.currentTarget;xp(E.value)}Ve(async()=>{try{await Pe.load()}catch(T){console.error("Failed to load config:",T)}});var c=Vw(),d=p(c),h=p(d),f=p(h),v=_(d,2),g=p(v);ie(g,21,()=>o,Re,(T,E)=>{const L=W(()=>u(E).icon);var N=jw();let Z;var K=p(N);cr(K,()=>u(L),(J,xt)=>{xt(J,{size:16})});var V=_(K,2),X=p(V);R(()=>{Z=Yt(N,1,"nav-item svelte-15j4tnx",null,Z,{active:u(r)===u(E).id}),D(X,u(E).label)}),nt("click",N,()=>M(r,u(E).id,!0)),x(T,N)});var m=_(g,2),b=p(m);{var y=T=>{Rk(T,{})},S=T=>{qk(T,{})},k=T=>{Da(T,{title:"Schedule",children:(E,L)=>{var N=Nw();x(E,N)},$$slots:{default:!0}})},w=T=>{Tw(T,{})},$=T=>{Rw(T)},A=T=>{{let E=W(()=>La("settings.theme"));Da(T,{get title(){return u(E)},children:(L,N)=>{var Z=Fw(),K=I(Z),V=_(p(K),2),X=p(V);let J;var xt=_(X,2);let yt;var Pt=_(xt,2);let F;var O=_(K,4),H=p(O),tt=p(H),kt=_(H,2),q=p(kt);q.value=q.__value="fr";var et=_(q);et.value=et.__value="en";var Mt;dr(kt),R(ee=>{J=Yt(X,1,"theme-btn svelte-15j4tnx",null,J,{active:u(a)==="dark"}),yt=Yt(xt,1,"theme-btn svelte-15j4tnx",null,yt,{active:u(a)==="light"}),F=Yt(Pt,1,"theme-btn svelte-15j4tnx",null,F,{active:u(a)==="system"}),D(tt,ee),Mt!==(Mt=s())&&(kt.value=(kt.__value=s())??"",hi(kt,s()))},[()=>La("settings.language")]),nt("click",X,()=>Oa.set("dark")),nt("click",xt,()=>Oa.set("light")),nt("click",Pt,()=>Oa.set("system")),nt("change",kt,l),x(L,Z)},$$slots:{default:!0}})}},z=T=>{Da(T,{title:"Données",children:(E,L)=>{var N=Bw();x(E,N)},$$slots:{default:!0}})},C=T=>{Da(T,{title:"Raccourcis clavier",children:(E,L)=>{var N=qw();x(E,N)},$$slots:{default:!0}})};B(b,T=>{u(r)==="general"?T(y):u(r)==="alerts"?T(S,1):u(r)==="schedule"?T(k,2):u(r)==="network"?T(w,3):u(r)==="providers"?T($,4):u(r)==="theme"?T(A,5):u(r)==="data"?T(z,6):u(r)==="hotkeys"&&T(C,7)})}R(T=>D(f,T),[()=>La("settings.title")]),x(e,c),ke(),i()}De(["click","change"]);const Ww=e=>e;function Uw(e,{delay:t=0,duration:s=400,easing:n=Ww}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:n,css:a=>`opacity: ${a*i}`}}var Yw=P('<div class="screen-transition svelte-1n46o8q"><!></div>'),Kw=P('<div class="app-layout svelte-1n46o8q"><!> <main class="main-content svelte-1n46o8q"><!></main> <!> <!></div>');function Xw(e,t){xe(t,!0);let s=j("accounts");Ve(async()=>{try{await We.load()}catch(d){console.error("Failed to load accounts:",d)}fg(({key:d,quota:h})=>We.updateQuota(d,h)),vg(d=>On[d.type]?.(d.title,d.message)),pg(d=>We.switch(d))});function n(d){if(d.ctrlKey&&d.altKey){const h=["accounts","proxy","monitoring","settings"],f=h.indexOf(u(s));d.key==="n"||d.key==="N"?(M(s,h[(f+1)%h.length],!0),d.preventDefault()):d.key==="p"||d.key==="P"?(M(s,h[(f-1+h.length)%h.length],!0),d.preventDefault()):(d.key==="r"||d.key==="R")&&(We.load(),d.preventDefault())}}var i=Kw();js("keydown",Ha,n);var a=p(i);Sp(a,{get currentScreen(){return u(s)},set currentScreen(d){M(s,d,!0)}});var r=_(a,2),o=p(r);Zf(o,()=>u(s),d=>{var h=Yw(),f=p(h);{var v=y=>{Xm(y,{})},g=y=>{q_(y,{})},m=y=>{$k(y)},b=y=>{Hw(y,{})};B(f,y=>{u(s)==="accounts"?y(v):u(s)==="proxy"?y(g,1):u(s)==="monitoring"?y(m,2):y(b,!1)})}lv(1,h,()=>Uw,()=>({duration:150})),x(d,h)});var l=_(r,2);zg(l,{onnavigate:d=>{M(s,d,!0)}});var c=_(l,2);Lg(c,{}),x(e,i),ke()}Xf(Xw,{target:document.getElementById("app")});
