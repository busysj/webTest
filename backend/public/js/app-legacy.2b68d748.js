(function(){"use strict";var t={899:function(t,n,e){var r=e(144),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("List")]),t._v(" | "),e("router-link",{attrs:{to:"/writeform"}},[t._v("Write")])],1),e("router-view")],1)},i=[],u=e(1),a={},c=(0,u.Z)(a,o,i,!1,null,null,null),f=c.exports,l=e(345),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("메모")]),e("table",t._l(t.memo,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n.id))]),e("td",[t._v(t._s(n.writer))]),e("td",{on:{click:function(e){return t.$router.push("/list/"+n.id)}}},[t._v(t._s(n.memo))]),e("td",[e("button",{on:{click:function(e){return t.$router.push("/updateform/"+n.id)}}},[t._v("수정")])]),e("td",[e("button",{on:{click:function(e){return t.deletememo(n.id)}}},[t._v("삭제")])])])})),0)])},s=[],p={data(){return{memo:[]}},created(){this.$http.get("/api/memo").then((t=>{console.log(t.data),this.memo=t.data}))},methods:{deletememo(t){this.$http.delete(`/api/memo/${t}`).then((t=>{this.memo=t.data}))}}},m=p,v=(0,u.Z)(m,d,s,!1,null,null,null),h=v.exports;r.Z.use(l.Z);const b=[{path:"/",name:"home",component:h},{path:"/list/:id",name:"list",component:function(){return e.e(632).then(e.bind(e,632))}},{path:"/writeform",name:"writeform",component:function(){return e.e(540).then(e.bind(e,540))}},{path:"/updateform/:id",component:function(){return e.e(474).then(e.bind(e,474))}}],g=new l.Z({mode:"history",base:"/",routes:b});var y=g,_=e(669),w=e.n(_);r.Z.prototype.$http=w(),r.Z.config.productionTip=!1,new r.Z({router:y,render:function(t){return t(f)}}).$mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+"-legacy."+{474:"6d6a21fc",540:"86798d9f",632:"3562a3fe"}[t]+".js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="frontend:";e.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+i),a.src=r),t[r]=[o];var s=function(n,e){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var u=e.p+e.u(n),a=new Error,c=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};e.l(u,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var l=c(e)}for(n&&n(r);f<u.length;f++)i=u[f],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(899)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.2b68d748.js.map