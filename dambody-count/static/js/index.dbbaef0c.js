webpackJsonp([1],{"+31+":function(t,e){},0:function(t,e,n){t.exports=n("msSN")},"097M":function(t,e){},"3JWO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SWITCHING",function(){return c}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return l}),n.d(e,"state",function(){return u}),n.d(e,"mutations",function(){return h}),n.d(e,"actions",function(){return d});var a,i=n("bOdI"),s=n.n(i),r=n("Dd8w"),o=n.n(r),c="SET_PAGE_SWITCHING",l="SET_PAGE_SCROLL_POSITION",u=function(){return{isPageSwitching:!1,scrollPostionMap:{}}},h=(a={},s()(a,c,function(t,e){t.isPageSwitching=e}),s()(a,l,function(t,e){var n=e.pageId,a=e.scrollPosition;t.scrollPostionMap=o()({},t.scrollPostionMap,s()({},n,a))}),a),d={setPageSwitching:function(t,e){(0,t.commit)(c,e)},savePageScrollPosition:function(t,e){var n=t.commit,a=e.pageId,i=e.scrollPosition;n(l,{pageId:a,scrollPosition:i})}}},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return a}),n.d(e,"mutations",function(){return i});var a=function(){return{enable:!0,type:"none",effect:"none"}},i={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},CJsk:function(t,e){},EXTq:function(t,e){},IaLg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_SIDEBAR_VISIBILITY",function(){return i}),n.d(e,"state",function(){return s}),n.d(e,"mutations",function(){return r}),n.d(e,"actions",function(){return o});var a=n("bOdI"),i="SET_SIDEBAR_VISIBILITY",s=function(){return{show:!1,title:{imageLeft:"",altLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page 1",icon:"sentiment_satisfied",route:"/detail/1"},{text:"Detail Page 2",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail/2"},{text:"Detail Page 3",icon:"sentiment_neutral",route:"/detail/3"}]}]}},r=n.n(a)()({},i,function(t,e){t.show=e}),o={showSidebar:function(t){(0,t.commit)(i,!0)},hideSidebar:function(t){(0,t.commit)(i,!1)}}},Jfi4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_APP_HEADER",function(){return o}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return l}),n.d(e,"actions",function(){return u});var a=n("bOdI"),i=n.n(a),s=n("woOf"),r=n.n(s),o="SET_APP_HEADER",c=function(){return{show:!0,title:"Lavas",logoIcon:{src:"",alt:""},showMenu:!0,showBack:!1,showLogo:!1,actions:[]}},l=i()({},o,function(t,e){t=r()(t,e)}),u={setAppHeader:function(t,e){(0,t.commit)(o,e)}}},LY6P:function(t,e){},LiAR:function(t,e){},"T57/":function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1523612593452,build:{ssr:!1,publicPath:"/zyslsdprogram/dambody-count/",compress:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/zyslsdprogram/dambody-count/",pageTransition:{type:"slide",transitionClass:"slide"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{swDest:"C:\\Users\\administere\\Desktop\\新建文件夹\\pwa-project\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var a={"./appShell/appHeader.js":"Jfi4","./appShell/appSidebar.js":"IaLg","./appShell/common.js":"3JWO","./pageTransition.js":"5e9e"};function i(t){return n(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="VfP6"},YJDP:function(t,e){},gHRC:function(t,e){},hoI6:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n("//Fk"),s=n.n(i),r=n("Gu7T"),o=n.n(r),c=n("Xxa5"),l=n.n(c),u=n("exGp"),h=n.n(u),d=n("/5sW"),p=n("1nuA"),f=(a=h()(l.a.mark(function t(e){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)});function v(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},a=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,i=void 0===e?302:e,s=t.path,r=void 0===s?"":s,o=t.query,c=void 0===o?{}:o,l=t.external,u=void 0!==l&&l;n._redirected=!0,a({path:r,query:c,status:i,external:u})},n}var m,w=(m=h()(l.a.mark(function t(e,n){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=0;case 1:if(!(a<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,b(e[a],n);case 6:a++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)})),function(t,e){return m.apply(this,arguments)});function b(t,e){var n=void 0;return 2===t.length?n=new s.a(function(n,a){t(e,function(t,i){t?(e.error(t),a(t)):n(i)})}):(n=t(e))&&(n instanceof s.a||"function"==typeof n.then)||(n=s.a.resolve(n)),n}var _=n("Uz7q"),g=n.n(_),y=n("Dd8w"),S=n.n(y),k=n("p3jY"),x=n.n(k),C=n("mvHQ"),P=n.n(C),T=n("pFYg"),A=n.n(T),E=n("/ocq"),I={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},O=n("XyMi"),L=Object(O.a)(I,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,$={appHeaderState:{show:!0,title:"Lavas",showMenu:!1,showBack:!0,showLogo:!1,actions:[{icon:"home",route:{name:"index"}}]}};function H(t){t.dispatch("appShell/appHeader/setAppHeader",$.appHeaderState)}var j={name:"detailId",metaInfo:function(){return{title:"Detail "+this.$route.params.id,titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]}},asyncData:function(){var t=h()(l.a.mark(function t(e){var n=e.store;e.route;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return H(n),t.next=3,new s.a(function(t,e){setTimeout(t,500)});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){H(this.$store)}};var W=function(t){n("EXTq")},R=Object(O.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrapper"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":""}},[n("article",{staticClass:"detail-content text-xs-center"},[n("header",{staticClass:"detail-title text-xs-center"},[t._v("\n                        Detail "+t._s(t.$route.params.id)+"\n                    ")]),t._v(" "),n("router-link",{attrs:{to:{name:"detailId",params:{id:Number(t.$route.params.id)+1}}}},[t._v("\n                        Detail "+t._s(Number(t.$route.params.id)+1)+"\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")])],1)])],1)],1)},[],!1,W,"data-v-302ae8f4",null).exports,M=n("fZjL"),D=n.n(M),q={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==D()(t).length&&this.$router.replace({name:"error",params:t})}},B=Object(O.a)(q,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,null,null,null).exports,Y=n("NYxO");function N(t){t.dispatch("appShell/appHeader/setAppHeader",{show:!0,title:"Lavas",showMenu:!0,showBack:!1,showLogo:!1,actions:[{icon:"search",route:"/search"}]})}var V={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var t=h()(l.a.mark(function t(e){var n=e.store;e.route;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:N(n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){N(this.$store)}};var X=function(t){n("T57/")},F=Object(O.a)(V,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content"},[e("div",[e("h2",[this._v("LAVAS")]),this._v(" "),e("h4",[this._v("[ˈlɑ:vəz]")])])])])}],!1,X,"data-v-c779dbcc",null).exports,G={appHeaderState:{show:!1}};function J(t){t.dispatch("appShell/appHeader/setAppHeader",G.appHeaderState)}var z={name:"search",metaInfo:{title:"Search",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{query:"",loading:!1,data:[]}},methods:{search:function(){var t=h()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.data=[],this.loading=!0,this.$el.querySelector(".search-input").blur(),t.next=5,new s.a(function(t){setTimeout(t,1e3)});case 5:this.data=[{title:"Ali Connors",headline:"Brunch this weekend?",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",action:"15 min"},{title:"me, Scrott, Jennifer",headline:"Summer BBQ",subtitle:"Wish I could come, but I'm out of town this weekend.",action:"2 hr"},{title:"Sandra Adams",headline:"Oui oui",subtitle:"Do you have Paris recommendations? Have you ever been?",action:"6 hr"},{title:"Trevor Hansen",headline:"Birthday gift",subtitle:"Have any ideas about what we should get Heidi for her birthday?",action:"12 hr"},{title:"Britta Holt",headline:"Recipe to try",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",action:"18 hr"}],this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},asyncData:function(){var t=h()(l.a.mark(function t(e){var n=e.store;e.route;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:J(n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){J(this.$store)}};var U=function(t){n("LY6P")},K=[{path:"/appshell",component:L,meta:{},name:"appshell"},{path:"/detail/:id",component:R,meta:{},name:"detailId"},{path:"/",component:F,meta:{},name:"index"},{path:"/search",component:Object(O.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-search-page"},[n("header",[n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.$router.go(-1)}}},[n("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[n("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?n("div",{staticClass:"search-loading"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:70}})],1):t._e(),t._v(" "),t.data&&t.data.length?n("div",{staticClass:"search-content"},[n("v-list",{attrs:{"two-line":""}},[t._l(t.data,function(e,a){return[n("v-list-tile",{key:e.title,attrs:{avatar:"",ripple:""}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),n("v-list-tile-action",[n("v-list-tile-action-text",[t._v(t._s(e.action))]),t._v(" "),n("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("star_border")])],1)],1),t._v(" "),a+1<t.data.length?n("v-divider",{attrs:{light:""}}):t._e()]})],2)],1):t._e()])},[],!1,U,"data-v-22543504",null).exports,meta:{},name:"search"},{path:"/error",component:B,meta:{},name:"error",alias:"*"}];d.a.use(E.a);var Q=["index"],Z=[],tt=[],et="LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY",nt="LAVAS_HISTORY_STATE_STACK_LOCAL_KEY",at=[],it=!1;function st(){return history.state?history.state.key:""}function rt(t,e){try{localStorage.setItem(t,"object"===(void 0===e?"undefined":A()(e))?P()(e):e)}catch(t){}}function ot(t,e){var n,a=!0;return it?(n=at.indexOf(st()),a=n===at.length-1||-1===n||(at.length=n+1,!1),setTimeout(function(){var t=st(),e=at.indexOf(t);a&&-1===e&&at.push(t),rt(nt,at)},300)):((a=function(t,e){var n=tt.indexOf(t.fullPath);return-1===n||(tt.length=n+1,!1)}(t))&&tt.push(t.fullPath),rt(et,tt)),t.name&&-1!==Q.indexOf(t.name)?a=!1:t.name&&-1!==Z.indexOf(t.name)&&(a=!0),a}it=window.history&&"state"in history;var ct=function(t,e,n){if(n)return n;var a={};return t.hash&&(a.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(a.x=0,a.y=0),a},lt=K.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});function ut(){var t=new E.a({mode:"history",base:"/zyslsdprogram/dambody-count/",scrollBehavior:ct,routes:K});return it?function(){if(history.length>1)try{var t=JSON.parse(localStorage.getItem(nt));t&&t.length&&(at=t.slice(-history.length))}catch(t){}setTimeout(function(){at.length?at[at.length-1]=st():at.push(st())},300)}():function(t){var e=location.href.replace(location.origin+t,"/");try{var n=JSON.parse(localStorage.getItem(et));n&&n.length&&n[n.length-1]===e&&(tt=n)}catch(t){}-1===tt.indexOf(e)&&tt.push(e)}(t.options.base),t.beforeEach(function(e,n,a){if(t.app.$store&&t.app.$store.state.pageTransition.enable){var i=ot(e)?"slide-left":"slide-right";t.app.$store.commit("pageTransition/setType","slide"),t.app.$store.commit("pageTransition/setEffect",i)}a()}),t}var ht=n("woOf"),dt=n.n(ht),pt=n("BO1k"),ft=n.n(pt);d.a.use(Y.a);var vt=n("VfP6"),mt=vt.keys(),wt={},bt=!0,_t=!1,gt=void 0;try{for(var yt,St=ft()(mt);!(bt=(yt=St.next()).done);bt=!0){var kt=yt.value;if("./index.js"===kt){wt=Ht(kt);break}}}catch(t){_t=!0,gt=t}finally{try{!bt&&St.return&&St.return()}finally{if(_t)throw gt}}if("function"!=typeof wt){wt.modules=wt.modules||{};var xt=!0,Ct=!1,Pt=void 0;try{for(var Tt,At=ft()(mt);!(xt=(Tt=At.next()).done);xt=!0){var Et=Tt.value;if("./index.js"!==Et){var It=Et.replace(/^\.\//,"").replace(/\.js$/,""),Ot=It.split("/"),Lt=jt(wt,Ot);Lt[It=Ot.pop()]=Ht(Et),Lt[It].namespaced=!0}}}catch(t){Ct=!0,Pt=t}finally{try{!xt&&At.return&&At.return()}finally{if(Ct)throw Pt}}}var $t=wt instanceof Function?wt:function(){return new Y.a.Store(dt()({},wt,{state:wt.state instanceof Function?wt.state():{}}))};function Ht(t){var e=vt(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function jt(t,e){if(1===e.length)return t.modules;var n=e.shift(),a=t.modules[n]=t.modules[n]||{};return a.namespaced=!0,a.modules=a.modules||{},jt(a,e)}var Wt=new d.a,Rt={name:"appHeader",computed:S()({},Object(Y.c)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),Object(Y.c)("appShell/common",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actionIdx,a=e.route;if(!this.isPageSwitching){var i={};"action"===t&&(i.actionIdx=n),this.$emit("click-"+t,i),Wt.$emit("app-header:click-"+t,i),a&&this.$router.push(a)}}}};var Mt=function(t){n("YJDP")},Dt=Object(O.a)(Rt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[t.logoIcon.src?n("img",{staticClass:"app-header-icon",attrs:{src:t.logoIcon.src,alt:t.logoIcon.alt}}):t._e()])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,a){return t._t("actions",[n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:a,route:e.route})}}},[e.icon?n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},[],!1,Mt,"data-v-35672a54",null).exports,qt=n("bOdI"),Bt=n.n(qt),Yt=n("XPnZ"),Nt=n.n(Yt),Vt=function(t){setTimeout(t,1e3/60)};Vt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||Vt;var Xt={props:{value:{type:Boolean,default:!1},enable:{type:Boolean,default:!0},width:{type:Number,default:.75},duration:{type:Number,default:200},region:Bt()({type:Object},"default",function(){return{top:0,bottom:0,left:0,width:40}})},data:function(){return{clientWidth:320,clientHeight:568,startX:0,startY:0,scrollEnable:!1,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*this.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"},status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},zone:function(){var t=this.region,e=t.top,n=t.right,a=t.bottom,i=t.left,s=t.width,r=t.height,o=this.clientWidth,c=this.clientHeight;return{top:void 0===e?c-a-r:e,left:void 0===i?o-n-s:i,width:void 0===s?o-i-n:s,height:void 0===r?c-e-i:r}}},watch:{status:function(t){t?this.expand():this.collapse()}},mounted:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,document.body.addEventListener("touchstart",this.touchStart.bind(this)),document.body.addEventListener("touchmove",this.touchMove.bind(this))},methods:{touchStart:function(t){if(!this.wrapperClass.expand&&this.enable){var e=t.touches[0],n=e.clientX,a=e.clientY,i=this.zone,s=i.left,r=i.top,o=i.width,c=i.height;n<s||n>s+o||a<r||a>r+c||(this.scrollEnable=!0,this.startX=n,this.startY=a)}},touchMove:function(t){var e=this;if(this.scrollEnable){var n=t.touches[0],a=n.clientX,i=n.clientY,s=a-this.startX;s>5&&Math.abs(i-this.startY)/s<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.status=!1},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new Nt.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,a=t.x;0===a?e.status=!0:a===-e.itsWidth?e.status=!1:e.status=!(n>0)&&(n<0||!e.status)}),this.changeOpacity(),t&&this.iscroll._start(t))},expand:function(){var t=this;this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){t.iscroll||t.bindScroll(),t.iscroll.x<0&&setTimeout(function(){t.iscroll&&t.iscroll.scrollTo(0,0,t.duration)},10)})},collapse:function(){var t=this;this.iscroll&&(this.iscroll.x===-this.itsWidth?this.unbindScroll():(setTimeout(function(){t.iscroll.scrollTo(-t.itsWidth,0,t.duration)}),setTimeout(function(){t.unbindScroll()},this.duration+10)))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.scrollEnable=!1,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,Vt(this.changeOpacity.bind(this)))}}};var Ft=function(t){n("LiAR")},Gt={components:{Sidebar:Object(O.a)(Xt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},[],!1,Ft,"data-v-414ed5f0",null).exports},computed:S()({},Object(Y.c)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}},enableSidebar:function(){return this.$store.state.appShell.appHeader.show&&this.$store.state.appShell.appHeader.showMenu}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()}}};var Jt=function(t){n("hoI6")},zt=Object(O.a)(Gt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enable:t.enableSidebar},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[t.title?n("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.closeAndGo("/")}}},[n("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?n("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.iconLeft?n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),n("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[n("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?n("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.iconRight?n("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?n("div",{staticClass:"app-sidebar-user"},[n("div",{staticClass:"user-avatar"},[n("v-icon",{staticClass:"user-avatar-icon"},[t._v("face")])],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-name"},[n("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),n("div",{staticClass:"user-location"},[n("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),n("div",{staticClass:"user-email"},[n("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e,a){return n("li",{key:a,staticClass:"app-sidebar-block"},[e.sublistTitle?n("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?n("ul",t._l(e.list,function(e){return n("li",{key:e.text,on:{click:function(n){n.stopPropagation(),t.closeAndGo(e.route)}}},[e.icon||e.image?n("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?n("img",{attrs:{src:e.image,alt:e.alt}}):e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])})):t._e()])}))]):t._e()])])},[],!1,Jt,"data-v-e345e3d6",null).exports,Ut={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Kt=function(t){n("097M")},Qt={name:"app",components:{UpdateToast:Object(O.a)(Ut,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Kt,"data-v-fc732238",null).exports,AppHeader:Dt,AppSidebar:zt},computed:S()({},Object(Y.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(Y.c)("appShell/appHeader",{appHeaderShow:function(t){return t.show}}),Object(Y.c)("appShell/common",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,a=D()(n);return a.length?e+a.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:lt}},methods:S()({},Object(Y.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),Object(Y.b)("appShell/common",["setPageSwitching","savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,a=(this.scrollPostionMap[n]||{}).y,i=void 0===a?0:a;this.setPageSwitching(!0),d.a.nextTick(function(){e.restoreContainerScrollPosition(t,i)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,a=void 0===n?0:n;this.setPageSwitching(!1),this.restoreBodyScrollPosition(t,a)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()}})};var Zt=function(t){n("gHRC")},te=Object(O.a)(Qt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,staticClass:"app-view",class:[{"app-view-with-header":t.appHeaderShow},t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)],1)},[],!1,Zt,null,null).exports,ee=n("3EgV"),ne=n.n(ee);d.a.use(x.a),d.a.use(ne.a),d.a.config.productionTip=!1;var ae={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var ie=function(t){n("+31+")},se=Object(O.a)(ae,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,ie,"data-v-e0e1a4fc",null).exports,re=n("p5k0"),oe=n.n(re),ce=n("XGXE"),le=n.n(ce);n("MU8w"),n("CJsk");oe.a.shim(),le.a.shim();var ue,he,de=d.a.prototype.$loading=new d.a(se).$mount(),pe=(ue=ut(),he=$t(),{App:d.a.extend(S()({router:ue,store:he},te)),router:ue,store:he}),fe=pe.App,ve=pe.router,me=pe.store,we=g.a.build,be=we.ssr,_e=we.cssExtract,ge=g.a.middleware,ye=void 0===ge?{}:ge,Se=g.a.skeleton,ke=Se.enable,xe=Se.asyncCSS,Ce=void 0;window.__INITIAL_STATE__&&me.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(de.$el),d.a.mixin({beforeRouteUpdate:function(){var t=h()(l.a.mark(function t(e,n,a){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(i=this.$options.asyncData)?(de.start(),i.call(this,{store:this.$store,route:e}).then(function(){de.finish(),a()}).catch(a)):a();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,a){return t.apply(this,arguments)}}()});var Pe=!0;if(function(){var t=this;ve.beforeEach((e=h()(l.a.mark(function e(n,a,i){var s,r,c,u,h,d,m;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Pe||n.path!==a.path){t.next=2;break}return t.abrupt("return",i());case 2:return Pe=!1,s=ve.getMatchedComponents(n),r=[].concat(o()(ye.all||[]),o()(ye.client||[]),o()(s.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,f(r);case 7:if(c=t.sent,!(u=r.find(function(t){return"function"!=typeof c[t]}))){t.next=11;break}throw new Error("Unknown middleware "+u);case 11:return h=!1,d=v({to:n,from:a,store:me,next:function(t){if(de.finish&&de.finish(),!h){if(h=!0,t.external)return t.query=Object(p.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),i();i(t)}}},Ce),m=r.map(function(t){return c[t]}),t.next=17,w(m,d);case 17:h||i();case 18:case"end":return t.stop()}},e,t)})),function(t,n,a){return e.apply(this,arguments)}));var e}(),!document.body.hasAttribute("empty-appshell")&&be)Ce=new fe,ve.onReady(function(){Ae(),Ce.$mount("#app")});else{var Te=ke&&xe&&_e;window.mountLavas=function(){setTimeout(function(){return Ce.$mount("#app")},0)},Ae(),Ce=new fe,(!Te||Te&&window.STYLE_READY)&&window.mountLavas()}function Ae(){var t=this;ve.beforeResolve(function(e,n,a){var i,r=ve.getMatchedComponents(e),o=ve.getMatchedComponents(n),c=!1,u=r.filter(function(t,e){return c||(c=o[e]!==t)});if(!u.length)return a();de.start(),s.a.all(u.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map((i=h()(l.a.mark(function n(a){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.asyncData({store:me,route:e});case 2:a.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)})),function(t){return i.apply(this,arguments)}))).then(function(){de.finish(),a()}).catch(a)})}}},[0]);
//# sourceMappingURL=index.dbbaef0c.js.map