(function(e){function t(t){for(var o,a,l=t[0],u=t[1],s=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15c6":function(e,t,n){"use strict";n("d71a")},"56d7":function(e,t,n){"use strict";n.r(t);n("0fae");var o=n("9e2f"),r=n.n(o),i=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h3",[e._v("Cookie Demo")]),t("div",[e._v("获得标题："+e._s(e.title))]),t("div",[e._v("获得站点URL："+e._s(e.url))]),t("el-input",{model:{value:e.domain,callback:function(t){e.domain=t},expression:"domain"}}),t("el-button",{on:{click:e.onDelete}},[e._v("删除1c1ookie")])],1)},l=[],u={name:"App",data(){return{title:"",url:"",tab:{},domain:""}},components:{},methods:{async getPageHost(){const[e]=await chrome.tabs.query({active:!0,currentWindow:!0,status:"complete",windowType:"normal"});this.tab=e,this.title=null===e||void 0===e?void 0:e.title,this.url=null===e||void 0===e?void 0:e.url},async onDelete(){if(!this.domain)return;const e=await this.deleteDomainCookies(this.domain);this.$message({message:""+e,type:"success"})},async deleteDomainCookies(e){let t=0;try{const n=await chrome.cookies.getAll({domain:e});if(0===n.length)return"No cookies found";let o=n.map(this.deleteCookie);await Promise.all(o),t=o.length}catch(n){return"Unexpected error: "+n.message}return`Deleted ${t} cookie(s).`},deleteCookie(e){const t=e.secure?"https:":"http:",n=`${t}//${e.domain}${e.path}`;return chrome.cookies.remove({url:n,name:e.name,storeId:e.storeId})}},mounted(){this.getPageHost()}},s=u,c=(n("15c6"),n("2877")),d=Object(c["a"])(s,a,l,!1,null,null,null),p=d.exports;i["default"].use(r.a),i["default"].config.productionTip=!1,new i["default"]({render:e=>e(p)}).$mount("#app")},d71a:function(e,t,n){}});