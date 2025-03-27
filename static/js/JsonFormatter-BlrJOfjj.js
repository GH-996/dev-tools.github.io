import{aI as Xt,d as Vt,y as re,c as Ue,e as A,w as Yt,V as Zt,aF as qt,a4 as Qt,o as $e,_ as en}from"./index-cu9Sh9DG.js";import"./monaco-editor-kWoqqHiK.js";var be,Ge;function tn(){if(Ge)return be;Ge=1;function j(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const i=e[t],u=typeof i;(u==="object"||u==="function")&&!Object.isFrozen(i)&&j(i)}),e}class I{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function y(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function w(e,...t){const i=Object.create(null);for(const u in e)i[u]=e[u];return t.forEach(function(u){for(const b in u)i[b]=u[b]}),i}const T="</span>",z=e=>!!e.scope,oe=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const i=e.split(".");return[`${t}${i.shift()}`,...i.map((u,b)=>`${u}${"_".repeat(b+1)}`)].join(" ")}return`${t}${e}`};class X{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=y(t)}openNode(t){if(!z(t))return;const i=oe(t.scope,{prefix:this.classPrefix});this.span(i)}closeNode(t){z(t)&&(this.buffer+=T)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const V=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class m{constructor(){this.rootNode=V(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const i=V({scope:t});this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return typeof i=="string"?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(u=>this._walk(t,u)),t.closeNode(i)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(i=>typeof i=="string")?t.children=[t.children.join("")]:t.children.forEach(i=>{m._collapse(i)}))}}class C extends m{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,i){const u=t.root;i&&(u.scope=`language:${i}`),this.add(u)}toHTML(){return new X(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function R(e){return e?typeof e=="string"?e:e.source:null}function Y(e){return U("(?=",e,")")}function Fe(e){return U("(?:",e,")*")}function me(e){return U("(?:",e,")?")}function U(...e){return e.map(i=>R(i)).join("")}function Ke(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ce(...e){return"("+(Ke(e).capture?"":"?:")+e.map(u=>R(u)).join("|")+")"}function _e(e){return new RegExp(e.toString()+"|").exec("").length-1}function We(e,t){const i=e&&e.exec(t);return i&&i.index===0}const ze=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ae(e,{joinWith:t}){let i=0;return e.map(u=>{i+=1;const b=i;let _=R(u),o="";for(;_.length>0;){const r=ze.exec(_);if(!r){o+=_;break}o+=_.substring(0,r.index),_=_.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?o+="\\"+String(Number(r[1])+b):(o+=r[0],r[0]==="("&&i++)}return o}).map(u=>`(${u})`).join(t)}const Xe=/\b\B/,Me="[a-zA-Z]\\w*",le="[a-zA-Z_]\\w*",Oe="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",we="\\b(0b[01]+)",Ve="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ye=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=U(t,/.*\b/,e.binary,/\b.*/)),w({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,u)=>{i.index!==0&&u.ignoreMatch()}},e)},K={begin:"\\\\[\\s\\S]",relevance:0},Ze={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[K]},qe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[K]},Qe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Z=function(e,t,i={}){const u=w({scope:"comment",begin:e,end:t,contains:[]},i);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const b=ce("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:U(/[ ]+/,"(",b,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},et=Z("//","$"),tt=Z("/\\*","\\*/"),nt=Z("#","$"),it={scope:"number",begin:Oe,relevance:0},st={scope:"number",begin:xe,relevance:0},rt={scope:"number",begin:we,relevance:0},ot={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[K,{begin:/\[/,end:/\]/,relevance:0,contains:[K]}]},ct={scope:"title",begin:Me,relevance:0},at={scope:"title",begin:le,relevance:0},lt={begin:"\\.\\s*"+le,relevance:0};var q=Object.freeze({__proto__:null,APOS_STRING_MODE:Ze,BACKSLASH_ESCAPE:K,BINARY_NUMBER_MODE:rt,BINARY_NUMBER_RE:we,COMMENT:Z,C_BLOCK_COMMENT_MODE:tt,C_LINE_COMMENT_MODE:et,C_NUMBER_MODE:st,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})},HASH_COMMENT_MODE:nt,IDENT_RE:Me,MATCH_NOTHING_RE:Xe,METHOD_GUARD:lt,NUMBER_MODE:it,NUMBER_RE:Oe,PHRASAL_WORDS_MODE:Qe,QUOTE_STRING_MODE:qe,REGEXP_MODE:ot,RE_STARTERS_RE:Ve,SHEBANG:Ye,TITLE_MODE:ct,UNDERSCORE_IDENT_RE:le,UNDERSCORE_TITLE_MODE:at});function ut(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ft(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function gt(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=ut,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function ht(e,t){Array.isArray(e.illegal)&&(e.illegal=ce(...e.illegal))}function dt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function pt(e,t){e.relevance===void 0&&(e.relevance=1)}const Et=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const i=Object.assign({},e);Object.keys(e).forEach(u=>{delete e[u]}),e.keywords=i.keywords,e.begin=U(i.beforeMatch,Y(i.begin)),e.starts={relevance:0,contains:[Object.assign(i,{endsParent:!0})]},e.relevance=0,delete i.beforeMatch},bt=["of","and","for","in","not","or","if","then","parent","list","value"],_t="keyword";function Ne(e,t,i=_t){const u=Object.create(null);return typeof e=="string"?b(i,e.split(" ")):Array.isArray(e)?b(i,e):Object.keys(e).forEach(function(_){Object.assign(u,Ne(e[_],t,_))}),u;function b(_,o){t&&(o=o.map(r=>r.toLowerCase())),o.forEach(function(r){const l=r.split("|");u[l[0]]=[_,Mt(l[0],l[1])]})}}function Mt(e,t){return t?Number(t):Ot(e)?0:1}function Ot(e){return bt.includes(e.toLowerCase())}const Se={},$=e=>{console.error(e)},ye=(e,...t)=>{console.log(`WARN: ${e}`,...t)},J=(e,t)=>{Se[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Se[`${e}/${t}`]=!0)},Q=new Error;function Re(e,t,{key:i}){let u=0;const b=e[i],_={},o={};for(let r=1;r<=t.length;r++)o[r+u]=b[r],_[r+u]=!0,u+=_e(t[r-1]);e[i]=o,e[i]._emit=_,e[i]._multi=!0}function xt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw $("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Q;if(typeof e.beginScope!="object"||e.beginScope===null)throw $("beginScope must be object"),Q;Re(e,e.begin,{key:"beginScope"}),e.begin=ae(e.begin,{joinWith:""})}}function wt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw $("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Q;if(typeof e.endScope!="object"||e.endScope===null)throw $("endScope must be object"),Q;Re(e,e.end,{key:"endScope"}),e.end=ae(e.end,{joinWith:""})}}function Nt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function St(e){Nt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),xt(e),wt(e)}function yt(e){function t(o,r){return new RegExp(R(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=_e(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=t(ae(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const x=l.findIndex((W,fe)=>fe>0&&W!==void 0),M=this.matchIndexes[x];return l.splice(0,x),Object.assign(l,M)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new i;return this.rules.slice(r).forEach(([x,M])=>l.addRule(x,M)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let x=l.exec(r);if(this.resumingScanAtSamePosition()&&!(x&&x.index===this.lastIndex)){const M=this.getMatcher(0);M.lastIndex=this.lastIndex+1,x=M.exec(r)}return x&&(this.regexIndex+=x.position+1,this.regexIndex===this.count&&this.considerAll()),x}}function b(o){const r=new u;return o.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&r.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&r.addRule(o.illegal,{type:"illegal"}),r}function _(o,r){const l=o;if(o.isCompiled)return l;[ft,dt,St,Et].forEach(M=>M(o,r)),e.compilerExtensions.forEach(M=>M(o,r)),o.__beforeBegin=null,[gt,ht,pt].forEach(M=>M(o,r)),o.isCompiled=!0;let x=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),x=o.keywords.$pattern,delete o.keywords.$pattern),x=x||/\w+/,o.keywords&&(o.keywords=Ne(o.keywords,e.case_insensitive)),l.keywordPatternRe=t(x,!0),r&&(o.begin||(o.begin=/\B|\b/),l.beginRe=t(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=t(l.end)),l.terminatorEnd=R(l.end)||"",o.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(l.illegalRe=t(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(M){return Rt(M==="self"?o:M)})),o.contains.forEach(function(M){_(M,l)}),o.starts&&_(o.starts,r),l.matcher=b(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=w(e.classNameAliases||{}),_(e)}function ve(e){return e?e.endsWithParent||ve(e.starts):!1}function Rt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return w(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:ve(e)?w(e,{starts:e.starts?w(e.starts):null}):Object.isFrozen(e)?w(e):e}var vt="11.11.1";class At extends Error{constructor(t,i){super(t),this.name="HTMLInjectionError",this.html=i}}const ue=y,Ae=w,Te=Symbol("nomatch"),Tt=7,ke=function(e){const t=Object.create(null),i=Object.create(null),u=[];let b=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:C};function l(n){return r.noHighlightRe.test(n)}function x(n){let a=n.className+" ";a+=n.parentNode?n.parentNode.className:"";const h=r.languageDetectRe.exec(a);if(h){const p=H(h[1]);return p||(ye(_.replace("{}",h[1])),ye("Falling back to no-highlight mode for this block.",n)),p?h[1]:"no-highlight"}return a.split(/\s+/).find(p=>l(p)||H(p))}function M(n,a,h){let p="",O="";typeof a=="object"?(p=n,h=a.ignoreIllegals,O=a.language):(J("10.7.0","highlight(lang, code, ...args) has been deprecated."),J("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),O=n,p=a),h===void 0&&(h=!0);const k={code:p,language:O};te("before:highlight",k);const P=k.result?k.result:W(k.language,k.code,h);return P.code=k.code,te("after:highlight",P),P}function W(n,a,h,p){const O=Object.create(null);function k(s,c){return s.keywords[c]}function P(){if(!f.keywords){N.addText(E);return}let s=0;f.keywordPatternRe.lastIndex=0;let c=f.keywordPatternRe.exec(E),g="";for(;c;){g+=E.substring(s,c.index);const d=B.case_insensitive?c[0].toLowerCase():c[0],S=k(f,d);if(S){const[L,Wt]=S;if(N.addText(g),g="",O[d]=(O[d]||0)+1,O[d]<=Tt&&(se+=Wt),L.startsWith("_"))g+=c[0];else{const zt=B.classNameAliases[L]||L;D(c[0],zt)}}else g+=c[0];s=f.keywordPatternRe.lastIndex,c=f.keywordPatternRe.exec(E)}g+=E.substring(s),N.addText(g)}function ne(){if(E==="")return;let s=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){N.addText(E);return}s=W(f.subLanguage,E,!0,Pe[f.subLanguage]),Pe[f.subLanguage]=s._top}else s=ge(E,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(se+=s.relevance),N.__addSublanguage(s._emitter,s.language)}function v(){f.subLanguage!=null?ne():P(),E=""}function D(s,c){s!==""&&(N.startScope(c),N.addText(s),N.endScope())}function Be(s,c){let g=1;const d=c.length-1;for(;g<=d;){if(!s._emit[g]){g++;continue}const S=B.classNameAliases[s[g]]||s[g],L=c[g];S?D(L,S):(E=L,P(),E=""),g++}}function Le(s,c){return s.scope&&typeof s.scope=="string"&&N.openNode(B.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(D(E,B.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),E=""):s.beginScope._multi&&(Be(s.beginScope,c),E="")),f=Object.create(s,{parent:{value:f}}),f}function je(s,c,g){let d=We(s.endRe,g);if(d){if(s["on:end"]){const S=new I(s);s["on:end"](c,S),S.isMatchIgnored&&(d=!1)}if(d){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return je(s.parent,c,g)}function Gt(s){return f.matcher.regexIndex===0?(E+=s[0],1):(Ee=!0,0)}function Jt(s){const c=s[0],g=s.rule,d=new I(g),S=[g.__beforeBegin,g["on:begin"]];for(const L of S)if(L&&(L(s,d),d.isMatchIgnored))return Gt(c);return g.skip?E+=c:(g.excludeBegin&&(E+=c),v(),!g.returnBegin&&!g.excludeBegin&&(E=c)),Le(g,s),g.returnBegin?0:c.length}function Ft(s){const c=s[0],g=a.substring(s.index),d=je(f,s,g);if(!d)return Te;const S=f;f.endScope&&f.endScope._wrap?(v(),D(c,f.endScope._wrap)):f.endScope&&f.endScope._multi?(v(),Be(f.endScope,s)):S.skip?E+=c:(S.returnEnd||S.excludeEnd||(E+=c),v(),S.excludeEnd&&(E=c));do f.scope&&N.closeNode(),!f.skip&&!f.subLanguage&&(se+=f.relevance),f=f.parent;while(f!==d.parent);return d.starts&&Le(d.starts,s),S.returnEnd?0:c.length}function mt(){const s=[];for(let c=f;c!==B;c=c.parent)c.scope&&s.unshift(c.scope);s.forEach(c=>N.openNode(c))}let ie={};function He(s,c){const g=c&&c[0];if(E+=s,g==null)return v(),0;if(ie.type==="begin"&&c.type==="end"&&ie.index===c.index&&g===""){if(E+=a.slice(c.index,c.index+1),!b){const d=new Error(`0 width match regex (${n})`);throw d.languageName=n,d.badRule=ie.rule,d}return 1}if(ie=c,c.type==="begin")return Jt(c);if(c.type==="illegal"&&!h){const d=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw d.mode=f,d}else if(c.type==="end"){const d=Ft(c);if(d!==Te)return d}if(c.type==="illegal"&&g==="")return E+=`
`,1;if(pe>1e5&&pe>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return E+=g,g.length}const B=H(n);if(!B)throw $(_.replace("{}",n)),new Error('Unknown language: "'+n+'"');const Kt=yt(B);let de="",f=p||Kt;const Pe={},N=new r.__emitter(r);mt();let E="",se=0,G=0,pe=0,Ee=!1;try{if(B.__emitTokens)B.__emitTokens(a,N);else{for(f.matcher.considerAll();;){pe++,Ee?Ee=!1:f.matcher.considerAll(),f.matcher.lastIndex=G;const s=f.matcher.exec(a);if(!s)break;const c=a.substring(G,s.index),g=He(c,s);G=s.index+g}He(a.substring(G))}return N.finalize(),de=N.toHTML(),{language:n,value:de,relevance:se,illegal:!1,_emitter:N,_top:f}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:n,value:ue(a),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:G,context:a.slice(G-100,G+100),mode:s.mode,resultSoFar:de},_emitter:N};if(b)return{language:n,value:ue(a),illegal:!1,relevance:0,errorRaised:s,_emitter:N,_top:f};throw s}}function fe(n){const a={value:ue(n),illegal:!1,relevance:0,_top:o,_emitter:new r.__emitter(r)};return a._emitter.addText(n),a}function ge(n,a){a=a||r.languages||Object.keys(t);const h=fe(n),p=a.filter(H).filter(De).map(v=>W(v,n,!1));p.unshift(h);const O=p.sort((v,D)=>{if(v.relevance!==D.relevance)return D.relevance-v.relevance;if(v.language&&D.language){if(H(v.language).supersetOf===D.language)return 1;if(H(D.language).supersetOf===v.language)return-1}return 0}),[k,P]=O,ne=k;return ne.secondBest=P,ne}function kt(n,a,h){const p=a&&i[a]||h;n.classList.add("hljs"),n.classList.add(`language-${p}`)}function he(n){let a=null;const h=x(n);if(l(h))return;if(te("before:highlightElement",{el:n,language:h}),n.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",n);return}if(n.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),r.throwUnescapedHTML))throw new At("One of your code blocks includes unescaped HTML.",n.innerHTML);a=n;const p=a.textContent,O=h?M(p,{language:h,ignoreIllegals:!0}):ge(p);n.innerHTML=O.value,n.dataset.highlighted="yes",kt(n,h,O.language),n.result={language:O.language,re:O.relevance,relevance:O.relevance},O.secondBest&&(n.secondBest={language:O.secondBest.language,relevance:O.secondBest.relevance}),te("after:highlightElement",{el:n,result:O,text:p})}function It(n){r=Ae(r,n)}const Ct=()=>{ee(),J("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Dt(){ee(),J("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ie=!1;function ee(){function n(){ee()}if(document.readyState==="loading"){Ie||window.addEventListener("DOMContentLoaded",n,!1),Ie=!0;return}document.querySelectorAll(r.cssSelector).forEach(he)}function Bt(n,a){let h=null;try{h=a(e)}catch(p){if($("Language definition for '{}' could not be registered.".replace("{}",n)),b)$(p);else throw p;h=o}h.name||(h.name=n),t[n]=h,h.rawDefinition=a.bind(null,e),h.aliases&&Ce(h.aliases,{languageName:n})}function Lt(n){delete t[n];for(const a of Object.keys(i))i[a]===n&&delete i[a]}function jt(){return Object.keys(t)}function H(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function Ce(n,{languageName:a}){typeof n=="string"&&(n=[n]),n.forEach(h=>{i[h.toLowerCase()]=a})}function De(n){const a=H(n);return a&&!a.disableAutodetect}function Ht(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=a=>{n["before:highlightBlock"](Object.assign({block:a.el},a))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=a=>{n["after:highlightBlock"](Object.assign({block:a.el},a))})}function Pt(n){Ht(n),u.push(n)}function Ut(n){const a=u.indexOf(n);a!==-1&&u.splice(a,1)}function te(n,a){const h=n;u.forEach(function(p){p[h]&&p[h](a)})}function $t(n){return J("10.7.0","highlightBlock will be removed entirely in v12.0"),J("10.7.0","Please use highlightElement now."),he(n)}Object.assign(e,{highlight:M,highlightAuto:ge,highlightAll:ee,highlightElement:he,highlightBlock:$t,configure:It,initHighlighting:Ct,initHighlightingOnLoad:Dt,registerLanguage:Bt,unregisterLanguage:Lt,listLanguages:jt,getLanguage:H,registerAliases:Ce,autoDetection:De,inherit:Ae,addPlugin:Pt,removePlugin:Ut}),e.debugMode=function(){b=!1},e.safeMode=function(){b=!0},e.versionString=vt,e.regex={concat:U,lookahead:Y,either:ce,optional:me,anyNumberOfTimes:Fe};for(const n in q)typeof q[n]=="object"&&j(q[n]);return Object.assign(e,q),e},F=ke({});return F.newInstance=()=>ke({}),be=F,F.HighlightJS=F,F.default=F,be}var nn=tn();const Je=Xt(nn);function sn(j){const I={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},y={match:/[{}[\],:]/,className:"punctuation",relevance:0},w=["true","false","null"],T={scope:"literal",beginKeywords:w.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:w},contains:[I,y,j.QUOTE_STRING_MODE,T,j.C_NUMBER_MODE,j.C_LINE_COMMENT_MODE,j.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const rn={class:"json-formatter-container"},on={class:"content-container"},cn={class:"input-container"},an={key:0,class:"error"},ln={class:"output-container"},un=["innerHTML"],fn=["disabled"],gn=Vt({__name:"JsonFormatter",setup(j){Je.registerLanguage("json",sn);const I=re(""),y=re(""),w=re(""),T=re(""),z=()=>{try{T.value="";const C=JSON.parse(I.value);y.value=JSON.stringify(C,null,2),X()}catch(C){T.value="Invalid JSON: "+C.message,y.value="",w.value=""}},oe=()=>{try{T.value="";const C=JSON.parse(I.value);y.value=JSON.stringify(C),X()}catch(C){T.value="Invalid JSON: "+C.message,y.value="",w.value=""}},X=()=>{y.value&&(w.value=Je.highlight(y.value,{language:"json"}).value)},V=()=>{I.value="",y.value="",w.value="",T.value=""},m=()=>{y.value&&navigator.clipboard.writeText(y.value).then(()=>{alert("Copied to clipboard!")})};return(C,R)=>($e(),Ue("div",rn,[R[3]||(R[3]=A("h1",null,"JSON Formatter",-1)),A("div",on,[A("div",cn,[R[1]||(R[1]=A("h2",null,"Input JSON",-1)),Yt(A("textarea",{"onUpdate:modelValue":R[0]||(R[0]=Y=>I.value=Y),placeholder:"Paste your JSON here...",rows:"20"},null,512),[[qt,I.value]]),A("div",{class:"button-container"},[A("button",{onClick:z},"Format"),A("button",{onClick:oe},"Compress"),A("button",{onClick:V},"Clear")]),T.value?($e(),Ue("div",an,Qt(T.value),1)):Zt("",!0)]),A("div",ln,[R[2]||(R[2]=A("h2",null,"Formatted JSON",-1)),A("pre",{class:"hljs",innerHTML:w.value},null,8,un),A("button",{disabled:!y.value,onClick:m},"Copy",8,fn)])])]))}}),En=en(gn,[["__scopeId","data-v-110f0d28"]]);export{En as default};
