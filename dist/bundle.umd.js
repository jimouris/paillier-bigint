!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).paillierBigint={})}(this,(function(n){"use strict";function t(n){return n>=0?n:-n}function e(n){if("number"==typeof n&&(n=BigInt(n)),1n===n)return 1;let t=1;do{t++}while((n>>=1n)>1n);return t}function r(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),n<=0n||t<=0n)throw new RangeError("a and b MUST be > 0");let e=0n,r=1n,i=1n,o=0n;for(;0n!==n;){const s=t/n,u=t%n,c=e-i*s,a=r-o*s;t=n,n=u,e=i,r=o,i=c,o=a}return{g:t,x:e,y:r}}function i(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),t<=0n)throw new RangeError("n must be > 0");const e=n%t;return e<0n?e+t:e}function o(n,t){const e=r(i(n,t),t);if(1n!==e.g)throw new RangeError(`${n.toString()} does not have inverse modulo ${t.toString()}`);return i(e.x,t)}function s(n,t,e){if(n.length!==t.length)throw new RangeError("The remainders and modulos arrays should have the same length");const r=e??t.reduce(((n,t)=>n*t),1n);return t.reduce(((t,e,s)=>{const u=r/e;return i(t+u*o(u,e)%r*n[s]%r,r)}),0n)}function u(n,e){let r="number"==typeof n?BigInt(t(n)):t(n),i="number"==typeof e?BigInt(t(e)):t(e);if(0n===r)return i;if(0n===i)return r;let o=0n;for(;0n===(1n&(r|i));)r>>=1n,i>>=1n,o++;for(;0n===(1n&r);)r>>=1n;do{for(;0n===(1n&i);)i>>=1n;if(r>i){const n=r;r=i,i=n}i-=r}while(0n!==i);return r<<o}function c(n,e){return"number"==typeof n&&(n=BigInt(n)),"number"==typeof e&&(e=BigInt(e)),0n===n&&0n===e?BigInt(0):t(n/u(n,e)*e)}function a(n,e,r,u){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof e&&(e=BigInt(e)),"number"==typeof r&&(r=BigInt(r)),r<=0n)throw new RangeError("n must be > 0");if(1n===r)return 0n;if(n=i(n,r),e<0n)return o(a(n,t(e),r,u),r);if(void 0!==u)return function(n,t,e,r){const i=r.map((n=>n[0]**n[1])),o=r.map((n=>function(n){return n.map((n=>n[0]**(n[1]-1n)*(n[0]-1n))).reduce(((n,t)=>t*n),1n)}([n]))),u=o.map(((e,r)=>a(n,t%e,i[r])));return s(u,i,e)}(n,e,r,function(n){const t={};return n.forEach((n=>{if("bigint"==typeof n||"number"==typeof n){const e=String(n);void 0===t[e]?t[e]={p:BigInt(n),k:1n}:t[e].k+=1n}else{const e=String(n[0]);void 0===t[e]?t[e]={p:BigInt(n[0]),k:BigInt(n[1])}:t[e].k+=BigInt(n[1])}})),Object.values(t).map((n=>[n.p,n.k]))}(u));let c=1n;for(;e>0;)e%2n===1n&&(c=c*n%r),e/=2n,n=n**2n%r;return c}function f(n){let t=0n;for(const e of n.values())t=(t<<8n)+BigInt(e);return t}function h(n,t=!1){if(n<1)throw new RangeError("byteLength MUST be > 0");{const e=new Uint8Array(n);if(n<=65536)self.crypto.getRandomValues(e);else for(let t=0;t<Math.ceil(n/65536);t++){const r=65536*t,i=r+65535<n?r+65535:n-1;self.crypto.getRandomValues(e.subarray(r,i))}return t&&(e[0]=128|e[0]),e}}function g(n,t=!1){if(n<1)throw new RangeError("bitLength MUST be > 0");const e=Math.ceil(n/8),r=n%8;return new Promise(((n,i)=>{(function(n,t=!1){if(n<1)throw new RangeError("byteLength MUST be > 0");return new Promise((function(e,r){{const r=new Uint8Array(n);if(n<=65536)self.crypto.getRandomValues(r);else for(let t=0;t<Math.ceil(n/65536);t++){const e=65536*t,i=e+65535<n?e+65535:n-1;self.crypto.getRandomValues(r.subarray(e,i))}t&&(r[0]=128|r[0]),e(r)}}))})(e,!1).then((function(e){if(0!==r&&(e[0]=e[0]&2**r-1),t){const n=0!==r?2**(r-1):128;e[0]=e[0]|n}n(e)}))}))}function l(n,t=!1){if(n<1)throw new RangeError("bitLength MUST be > 0");const e=h(Math.ceil(n/8),!1),r=n%8;if(0!==r&&(e[0]=e[0]&2**r-1),t){const n=0!==r?2**(r-1):128;e[0]=e[0]|n}return e}function d(n,t=1n){if(n<=t)throw new RangeError("Arguments MUST be: max > min");const r=n-t,i=e(r);let o;do{o=f(l(i))}while(o>r);return o+t}let m=!1;function b(n,t=16,e=!1){if("number"==typeof n&&(n=BigInt(n)),n<0n)throw RangeError("w MUST be >= 0");return new Promise(((e,r)=>{const i=new Worker(y());i.onmessage=n=>{void 0!==n?.data?._bcu?.isPrime&&(i.terminate(),e(n.data._bcu.isPrime))},i.onmessageerror=n=>{r(n)};const o={_bcu:{rnd:n,iterations:t,id:0}};i.postMessage(o)}))}function p(n,t){if(2n===n)return!0;if(0n===(1n&n)||1n===n)return!1;const e=[3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n,41n,43n,47n,53n,59n,61n,67n,71n,73n,79n,83n,89n,97n,101n,103n,107n,109n,113n,127n,131n,137n,139n,149n,151n,157n,163n,167n,173n,179n,181n,191n,193n,197n,199n,211n,223n,227n,229n,233n,239n,241n,251n,257n,263n,269n,271n,277n,281n,283n,293n,307n,311n,313n,317n,331n,337n,347n,349n,353n,359n,367n,373n,379n,383n,389n,397n,401n,409n,419n,421n,431n,433n,439n,443n,449n,457n,461n,463n,467n,479n,487n,491n,499n,503n,509n,521n,523n,541n,547n,557n,563n,569n,571n,577n,587n,593n,599n,601n,607n,613n,617n,619n,631n,641n,643n,647n,653n,659n,661n,673n,677n,683n,691n,701n,709n,719n,727n,733n,739n,743n,751n,757n,761n,769n,773n,787n,797n,809n,811n,821n,823n,827n,829n,839n,853n,857n,859n,863n,877n,881n,883n,887n,907n,911n,919n,929n,937n,941n,947n,953n,967n,971n,977n,983n,991n,997n,1009n,1013n,1019n,1021n,1031n,1033n,1039n,1049n,1051n,1061n,1063n,1069n,1087n,1091n,1093n,1097n,1103n,1109n,1117n,1123n,1129n,1151n,1153n,1163n,1171n,1181n,1187n,1193n,1201n,1213n,1217n,1223n,1229n,1231n,1237n,1249n,1259n,1277n,1279n,1283n,1289n,1291n,1297n,1301n,1303n,1307n,1319n,1321n,1327n,1361n,1367n,1373n,1381n,1399n,1409n,1423n,1427n,1429n,1433n,1439n,1447n,1451n,1453n,1459n,1471n,1481n,1483n,1487n,1489n,1493n,1499n,1511n,1523n,1531n,1543n,1549n,1553n,1559n,1567n,1571n,1579n,1583n,1597n];for(let t=0;t<e.length&&e[t]<=n;t++){const r=e[t];if(n===r)return!0;if(n%r===0n)return!1}let r=0n;const i=n-1n;let o=i;for(;o%2n===0n;)o/=2n,++r;const s=i/2n**r;do{let t=a(d(i,2n),s,n);if(1n===t||t===i)continue;let e=1;for(;e<r&&(t=a(t,2n,n),t!==i);){if(1n===t)return!1;e++}if(t!==i)return!1}while(0!=--t);return!0}function y(){let n=`\n  'use strict';\n  const ${r.name} = ${r.toString()};\n  const ${o.name} = ${o.toString()};\n  const ${a.name} = ${a.toString()};\n  const ${i.name} = ${i.toString()};\n  const ${l.name} = ${l.toString()};\n  const ${h.name} = ${h.toString()};\n  const ${d.name} = ${d.toString()};\n  const ${b.name} = ${p.toString()};\n  ${e.toString()};\n  ${f.toString()};`;return n+=`\n  onmessage = async function(msg) {\n    if (msg !== undefined && msg.data !== undefined && msg.data._bcu !== undefined && msg.data._bcu.id !== undefined && msg.data._bcu.iterations !== undefined && msg.data._bcu.rnd !== undefined) {\n      const msgToParent = {\n        _bcu: {\n          isPrime: await ${b.name}(msg.data._bcu.rnd, msg.data._bcu.iterations),\n          value: msg.data._bcu.rnd,\n          id: msg.data._bcu.id\n        }\n      };\n      postMessage(msgToParent);\n    }\n  }`,function(n){n=`(() => {${n}})()`;const t=new Blob([n],{type:"text/javascript"});return window.URL.createObjectURL(t)}(n)}function w(n,t=16){if(n<1)throw new RangeError("bitLength MUST be > 0");if(!m){let e=0n;do{e=f(l(n,!0))}while(!p(e,t));return new Promise((n=>{n(e)}))}return new Promise(((e,r)=>{const i=[],o=(r,o)=>{if(r._bcu.isPrime){for(let n=0;n<i.length;n++)i[n].terminate();for(;i.length>0;)i.pop();e(r._bcu.value)}else{const e=f(l(n,!0));try{const n={_bcu:{rnd:e,iterations:t,id:r._bcu.id}};o.postMessage(n)}catch(n){}}};{const n=y();for(let t=0;t<self.navigator.hardwareConcurrency-1;t++){const t=new Worker(n);t.onmessage=n=>o(n.data,t),i.push(t)}}for(let e=0;e<i.length;e++)g(n,!0).then((function(n){const r=f(n);i[e].postMessage({_bcu:{rnd:r,iterations:t,id:e}})})).catch(r)}))}function _(n,t=16){if(n<1)throw new RangeError("bitLength MUST be > 0");let e=0n;do{e=f(l(n,!0))}while(!p(e,t));return e}void 0!==self.Worker&&(m=!0);class v{constructor(n,t){this.n=n,this._n2=this.n**2n,this.g=t}get bitLength(){return e(this.n)}encrypt(n,t){if(void 0===t)do{t=d(this.n)}while(1n!==u(t,this.n));return a(this.g,n,this._n2)*a(t,this.n,this._n2)%this._n2}addition(...n){return n.reduce(((n,t)=>n*t%this._n2),1n)}plaintextAddition(n,...t){return t.reduce(((n,t)=>n*a(this.g,t,this._n2)%this._n2),n)}multiply(n,t){return a(n,t,this._n2)}}class R{constructor(n,t,e,r,i){this.lambda=n,this.mu=t,this._p=r,this._q=i,this.publicKey=e}get bitLength(){return e(this.publicKey.n)}get n(){return this.publicKey.n}decrypt(n){return void 0!==this._p&&void 0!==this._q?S(a(n,this.lambda,this.publicKey._n2,[[this._p,2],[this._q,2]]),this.publicKey.n)*this.mu%this.publicKey.n:S(a(n,this.lambda,this.publicKey._n2),this.publicKey.n)*this.mu%this.publicKey.n}getRandomFactor(n){if(this.publicKey.g!==this.n+1n)throw RangeError("Cannot recover the random factor if publicKey.g != publicKey.n + 1. You should generate yout keys using the simple variant, e.g. generateRandomKeys(3072, true)");if(void 0===this._p||void 0===this._q)throw Error("Cannot get random factor without knowing p and q");const t=this.decrypt(n),e=(this._p-1n)*(this._q-1n),r=o(this.n,e);return a(n*(1n-t*this.n)%this.publicKey._n2,r,this.n,[[this._p,1],[this._q,1]])}}function S(n,t){return(n-1n)/t}function K(n,t){return(d(n)*n+1n)*a(d(n),n,t)%t}n.PrivateKey=R,n.PublicKey=v,n.generateRandomKeys=async function(n=3072,t=!1){let r,i,s,u,f,h;do{r=await w(Math.floor(n/2)+1),i=await w(Math.floor(n/2)),s=r*i}while(i===r||e(s)!==n);if(t)u=s+1n,f=(r-1n)*(i-1n),h=o(f,s);else{const n=s**2n;u=K(s,n),f=c(r-1n,i-1n),h=o(S(a(u,f,n),s),s)}const g=new v(s,u);return{publicKey:g,privateKey:new R(f,h,g,r,i)}},n.generateRandomKeysSync=function(n=3072,t=!1){let r,i,s,u,f,h;do{r=_(Math.floor(n/2)+1),i=_(Math.floor(n/2)),s=r*i}while(i===r||e(s)!==n);if(t)u=s+1n,f=(r-1n)*(i-1n),h=o(f,s);else{const n=s**2n;u=K(s,n),f=c(r-1n,i-1n),h=o(S(a(u,f,n),s),s)}const g=new v(s,u);return{publicKey:g,privateKey:new R(f,h,g,r,i)}}}));
