import{A as l,s as h}from"./index-5f649659.js";import{a as g}from"./paths-7e180b47.js";const f=[];function d(n,t=l){let e;const r=new Set;function o(i){if(h(n,i)&&(n=i,e)){const c=!f.length;for(const a of r)a[1](),f.push(a,n);if(c){for(let a=0;a<f.length;a+=2)f[a][0](f[a+1]);f.length=0}}}function u(i){o(i(n))}function s(i,c=l){const a=[i,c];return r.add(a),r.size===1&&(e=t(o)||l),i(n),()=>{r.delete(a),r.size===0&&(e(),e=null)}}return{set:o,update:u,subscribe:s}}function U(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}function w(){return{x:pageXOffset,y:pageYOffset}}function y(n){let t,e=null,r=null,o=null;for(const s of n.composedPath())s instanceof Element&&(!t&&s.nodeName.toUpperCase()==="A"&&(t=s),e===null&&(e=b(s,"data-sveltekit-noscroll")),r===null&&(r=b(s,"data-sveltekit-prefetch")),o===null&&(o=b(s,"data-sveltekit-reload")));const u=t&&new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI);return{a:t,url:u,options:{noscroll:e,prefetch:r,reload:o}}}function b(n,t){const e=n.getAttribute(t);return e===null?e:e===""?!0:(e==="off",!1)}function p(n){const t=d(n);let e=!0;function r(){e=!0,t.update(s=>s)}function o(s){e=!1,t.set(s)}function u(s){let i;return t.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:r,set:o,subscribe:u}}function m(){const{set:n,subscribe:t}=d(!1);let e;async function r(){clearTimeout(e);const o=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const{version:u}=await o.json(),s=u!=="1662578935011";return s&&(n(!0),clearTimeout(e)),s}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:r}}function R(n){n.client}const A={url:p({}),page:p({}),navigating:d(null),updated:m()};export{w as a,y as f,U as g,R as i,A as s};
