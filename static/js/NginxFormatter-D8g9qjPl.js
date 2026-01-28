import{T as x}from"./index-CfQESA5Y.js";import{_ as h,c,o as p,a as f,b as e,r as N,w as u,d as m,v as d,t as g}from"./index-B_Xbu2Wy.js";import"./monaco-editor-mVv4Ass3.js";const y={name:"NginxFormatter",components:{ToolSwitcher:x},data(){return{inputNginx:"",outputNginx:"",error:null,copyMessage:""}},methods:{formatNginx(){if(this.error=null,this.outputNginx="",!this.inputNginx.trim()){this.error="Please enter Nginx configuration to format.";return}try{const s=this.inputNginx.split(`
`),t=[];let r=0;const l=4;for(let o of s){let i=o.trim();if(!i){t.push("");continue}(i==="}"||i.startsWith("}"))&&(r=Math.max(0,r-1));const a=" ".repeat(r*l);t.push(a+i),i.endsWith("{")&&r++}this.outputNginx=t.join(`
`)}catch(s){this.error="Failed to format Nginx config. Please check your input."}},minifyNginx(){if(this.error=null,this.outputNginx="",!this.inputNginx.trim()){this.error="Please enter Nginx configuration to minify.";return}try{const s=this.inputNginx.split(`
`),t=[];for(let r of s){const l=r.trim();!l||l.startsWith("#")||t.push(l)}this.outputNginx=t.join(`
`)}catch(s){this.error="Failed to minify Nginx config. Please check your input."}},clearAll(){this.inputNginx="",this.outputNginx="",this.error=null,this.copyMessage=""},loadExample(){this.inputNginx=`server {
listen 80;
server_name example.com www.example.com;
root /var/www/html;
index index.html index.htm;

# SSL Configuration
listen 443 ssl http2;
ssl_certificate /etc/ssl/certs/example.com.crt;
ssl_certificate_key /etc/ssl/private/example.com.key;

location / {
try_files $uri $uri/ =404;
}

location ~ \\.php$ {
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
}

location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
expires 365d;
add_header Cache-Control "public, immutable";
}

# Deny access to .htaccess files
location ~ /\\.ht {
deny all;
}
}`,this.formatNginx()},copyToClipboard(){this.outputNginx&&navigator.clipboard.writeText(this.outputNginx).then(()=>{this.copyMessage="Copied!",setTimeout(()=>{this.copyMessage=""},2e3)})}}},v={class:"nginx-formatter-wrapper"},b={class:"nginx-formatter-container"},_={class:"toolbar"},C={class:"content-container"},k={class:"input-container"},w={key:0,class:"error-message"},T={class:"output-container"},F={class:"header"},M=["disabled"],S={key:0,class:"copy-message"};function j(s,t,r,l,o,i){const a=N("ToolSwitcher");return p(),c("div",v,[f(a,{currentToolName:s.$t("tools.nginxFormatter")},null,8,["currentToolName"]),e("div",b,[t[9]||(t[9]=e("h1",null,"Nginx Config Formatter",-1)),e("div",_,[e("button",{class:"btn-primary",onClick:t[0]||(t[0]=(...n)=>i.formatNginx&&i.formatNginx(...n))},"Format"),e("button",{class:"btn-secondary",onClick:t[1]||(t[1]=(...n)=>i.minifyNginx&&i.minifyNginx(...n))},"Minify"),e("button",{class:"btn-secondary",onClick:t[2]||(t[2]=(...n)=>i.clearAll&&i.clearAll(...n))},"Clear All"),e("button",{class:"btn-secondary",onClick:t[3]||(t[3]=(...n)=>i.loadExample&&i.loadExample(...n))},"Load Example")]),e("div",C,[e("div",k,[t[7]||(t[7]=e("div",{class:"header"},[e("h2",null,"Input"),e("div",{class:"header-spacer"})],-1)),u(e("textarea",{"onUpdate:modelValue":t[4]||(t[4]=n=>o.inputNginx=n),placeholder:"Paste your Nginx configuration here...",class:"textarea"},null,512),[[d,o.inputNginx]]),o.error?(p(),c("div",w,g(o.error),1)):m("",!0)]),e("div",T,[e("div",F,[t[8]||(t[8]=e("h2",null,"Formatted Config",-1)),e("button",{disabled:!o.outputNginx,onClick:t[5]||(t[5]=(...n)=>i.copyToClipboard&&i.copyToClipboard(...n))}," Copy ",8,M),o.copyMessage?(p(),c("span",S,g(o.copyMessage),1)):m("",!0)]),u(e("textarea",{"onUpdate:modelValue":t[6]||(t[6]=n=>o.outputNginx=n),placeholder:"Formatted Nginx config will appear here...",class:"textarea",readonly:""},null,512),[[d,o.outputNginx]])])])])])}const A=h(y,[["render",j],["__scopeId","data-v-9fb03b11"]]);export{A as default};
