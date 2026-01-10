import{T as I}from"./index-BAGDpGEr.js";import{_ as f,c as u,o as p,a as y,b as i,r as b,w as c,d,v as m,t as h}from"./index-CFuD93rZ.js";import"./monaco-editor-mVv4Ass3.js";const v={name:"IniFormatter",components:{ToolSwitcher:I},data(){return{inputIni:"",outputIni:"",error:null,copyMessage:""}},methods:{formatIni(){if(this.error=null,this.outputIni="",!this.inputIni.trim()){this.error="Please enter INI content to format.";return}try{const r=this.inputIni.split(`
`),t=[];let l=!1;for(let s of r){const e=s.trim();if(!e){t.length>0&&t[t.length-1]!==""&&t.push("");continue}if(e.startsWith("[")&&e.endsWith("]")){l&&t.push(""),t.push(e),l=!0;continue}if(e.startsWith(";")||e.startsWith("#")){t.push(e);continue}if(e.includes("=")){const[n,...a]=e.split("="),o=a.join("=").trim();t.push(`${n.trim()} = ${o}`);continue}t.push(e)}this.outputIni=t.join(`
`)}catch(r){this.error="Failed to format INI. Please check your input."}},minifyIni(){if(this.error=null,this.outputIni="",!this.inputIni.trim()){this.error="Please enter INI content to minify.";return}try{const r=this.inputIni.split(`
`),t=[];for(let l of r){const s=l.trim();if(!(!s||s.startsWith(";")||s.startsWith("#"))){if(s.startsWith("[")&&s.endsWith("]")){t.push(s);continue}if(s.includes("=")){const[e,...n]=s.split("="),a=n.join("=").trim();t.push(`${e.trim()}=${a}`);continue}t.push(s)}}this.outputIni=t.join(`
`)}catch(r){this.error="Failed to minify INI. Please check your input."}},clearAll(){this.inputIni="",this.outputIni="",this.error=null,this.copyMessage=""},loadExample(){this.inputIni=`; Database Configuration
[database]
host=localhost
port=5432
username=admin
password=secret123
database=myapp

; Server Settings
[server]
host = 0.0.0.0
port = 8080
debug = true

[logging]
level=info
file=/var/log/app.log
max_size = 10MB`,this.formatIni()},copyToClipboard(){this.outputIni&&navigator.clipboard.writeText(this.outputIni).then(()=>{this.copyMessage="Copied!",setTimeout(()=>{this.copyMessage=""},2e3)})}}},g={class:"ini-formatter-wrapper"},C={class:"ini-formatter-container"},k={class:"toolbar"},x={class:"content-container"},N={class:"input-container"},_={key:0,class:"error-message"},T={class:"output-container"},w={class:"header"},F=["disabled"],M={key:0,class:"copy-message"};function W(r,t,l,s,e,n){const a=b("ToolSwitcher");return p(),u("div",g,[y(a,{currentToolName:r.$t("tools.iniFormatter")},null,8,["currentToolName"]),i("div",C,[t[9]||(t[9]=i("h1",null,"INI Formatter",-1)),i("div",k,[i("button",{class:"btn-primary",onClick:t[0]||(t[0]=(...o)=>n.formatIni&&n.formatIni(...o))},"Format"),i("button",{class:"btn-secondary",onClick:t[1]||(t[1]=(...o)=>n.minifyIni&&n.minifyIni(...o))},"Minify"),i("button",{class:"btn-secondary",onClick:t[2]||(t[2]=(...o)=>n.clearAll&&n.clearAll(...o))},"Clear All"),i("button",{class:"btn-secondary",onClick:t[3]||(t[3]=(...o)=>n.loadExample&&n.loadExample(...o))},"Load Example")]),i("div",x,[i("div",N,[t[7]||(t[7]=i("div",{class:"header"},[i("h2",null,"Input")],-1)),c(i("textarea",{"onUpdate:modelValue":t[4]||(t[4]=o=>e.inputIni=o),placeholder:"Paste your INI content here...",class:"textarea"},null,512),[[m,e.inputIni]]),e.error?(p(),u("div",_,h(e.error),1)):d("",!0)]),i("div",T,[i("div",w,[t[8]||(t[8]=i("h2",null,"Formatted INI",-1)),i("button",{disabled:!e.outputIni,onClick:t[5]||(t[5]=(...o)=>n.copyToClipboard&&n.copyToClipboard(...o))}," Copy ",8,F),e.copyMessage?(p(),u("span",M,h(e.copyMessage),1)):d("",!0)]),c(i("textarea",{"onUpdate:modelValue":t[6]||(t[6]=o=>e.outputIni=o),placeholder:"Formatted INI will appear here...",class:"textarea",readonly:""},null,512),[[m,e.outputIni]])])])])])}const V=f(v,[["render",W],["__scopeId","data-v-4beb4b75"]]);export{V as default};
