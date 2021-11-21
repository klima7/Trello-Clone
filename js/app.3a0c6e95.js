(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},o={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Trello-Sierra/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("AppBar"),a("v-main",[a("router-view")],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("router-link",{staticClass:"white--text",attrs:{to:"/"}},[a("div",{staticClass:"d-flex"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://logodix.com/logo/1144058.png",transition:"scale-transition",width:"40",height:"40"}}),a("span",{staticClass:"text-h4"},[e._v("BetterTrello")])],1)]),a("v-spacer"),this.$store.getters.isLogged?a("div",[a("v-btn",{attrs:{text:""},on:{click:e.logout}},[a("span",[e._v("Logout")])])],1):a("div",[a("v-btn",{staticClass:"mr-2",attrs:{to:"/login",text:""}},[a("span",[e._v("Login")])]),a("v-btn",{attrs:{to:"/register",text:""}},[a("span",[e._v("Register")])])],1)],1)},i=[],l={methods:{logout:function(){console.log("logout"),this.$store.dispatch("logout")}}},c=l,d=a("2877"),u=a("6544"),p=a.n(u),f=a("40dc"),m=a("8336"),v=a("adda"),h=a("2fa4"),b=Object(d["a"])(c,s,i,!1,null,null,null),g=b.exports;p()(b,{VAppBar:f["a"],VBtn:m["a"],VImg:v["a"],VSpacer:h["a"]});a("a717");var w={name:"Trello",components:{AppBar:g},data:function(){return{}}},_=w,y=a("7496"),V=a("f6c4"),x=Object(d["a"])(_,o,n,!1,null,null,null),k=x.exports;p()(x,{VApp:y["a"],VMain:V["a"]});var C=a("8c4f"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"mt-6",attrs:{justify:"center"}},[a("v-img",{attrs:{height:"300",src:"https://avatars.slack-edge.com/2021-07-19/2282472048054_9a51d280179d828b3ad7_512.png",transition:"scale-transition",contain:""}})],1),a("v-row",{attrs:{justify:"center"}},[a("h1",[e._v("Welcome on Trello!")])]),a("v-row",{attrs:{justify:"center"}},[a("h3",[e._v("Better Trello")])])],1)},T=[],S=a("2f62"),P=(a("d3b7"),a("b0c0"),{state:function(){return{}},actions:{fetch:function(e){return r["a"].auth.fetch(e)},login:function(e,t){var a=r["a"].auth.redirect();return new Promise((function(e,o){r["a"].auth.login({data:{email:t.email,password:t.password},redirect:{name:a?a.from.name:"boards"},staySignedIn:t.rememberMe}).then(e,o)}))},register:function(e,t){return t=t||{},new Promise((function(a,o){r["a"].auth.register({data:{email:t.email,password:t.password},redirect:null,staySignedIn:!0,autoLogin:!1,fetchUser:!0}).then((function(r){t.rememberMe=!1,e.dispatch("login",t).then(a,o)}),o)}))},logout:function(e){return r["a"].auth.logout({redirect:"logout"})}},getters:{user:function(){return r["a"].auth.user()},isLogged:function(){return null!=r["a"].auth.user()}}});r["a"].use(S["a"]);var O=new S["a"].Store({modules:{auth:P}}),R={beforeRouteEnter:function(e,t,a){O.getters.isLogged?a("/boards"):a()}},$=R,E=a("a523"),B=a("0fd9"),L=Object(d["a"])($,j,T,!1,null,null,null),M=L.exports;p()(L,{VContainer:E["a"],VImg:v["a"],VRow:B["a"]});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mt-5 mb-12",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"6",align:"center",justify:"center"}},[a("lottie-player",{staticStyle:{width:"70%"},attrs:{src:"https://assets7.lottiefiles.com/packages/lf20_87uabjh2.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",[a("v-card",{staticClass:"elevation-4 mt-12 ml-6 mr-6"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("Login")])],1),a("v-card-text",{staticClass:"px-8"},[a("v-form",{ref:"form",attrs:{validation:""},model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-at",name:"email",label:"Email",type:"text",clearable:"",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password",clearable:"",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-switch",{attrs:{label:"Remember Me"},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}})],1),a("div",{staticClass:"mt-4"},[a("span",{staticClass:"red--text"},[e._v(e._s(e.error))])])],1),a("v-card-actions",{staticClass:"pa-5"},[a("v-spacer"),a("v-btn",{staticClass:"mr-6",attrs:{fab:"",color:"#E57373",dark:""},on:{click:e.resetClicked}},[a("v-icon",[e._v("mdi-backspace")])],1),a("v-btn",{attrs:{fab:"",color:"green",disabled:!e.isValid},on:{click:e.loginClicked}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-arrow-right")])],1)],1)],1)],1)],1)],1)],1)],1)},q=[],z={data:function(){return{email:"",password:"",rememberMe:!1,isValid:!1,error:"",emailRules:[function(e){return!!e||"Email is required"}],passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{loginClicked:function(){this.$refs.form.validate()&&this.login(this.email,this.password,this.rememberMe)},login:function(e,t,a){var r=this,o={email:e,password:t,rememberMe:a};this.$store.dispatch("login",o).catch((function(e){r.error="Invalid email or password"}))},resetClicked:function(){this.$refs.form.reset()}}},F=z,A=a("b0af"),D=a("99d9"),U=a("62ad"),J=a("0e8f"),N=a("4bd4"),K=a("132d"),W=a("a722"),Y=a("b73d"),G=a("8654"),H=a("71d9"),Q=a("2a7f"),X=Object(d["a"])(F,I,q,!1,null,null,null),Z=X.exports;p()(X,{VBtn:m["a"],VCard:A["a"],VCardActions:D["a"],VCardText:D["b"],VCol:U["a"],VContainer:E["a"],VFlex:J["a"],VForm:N["a"],VIcon:K["a"],VLayout:W["a"],VRow:B["a"],VSpacer:h["a"],VSwitch:Y["a"],VTextField:G["a"],VToolbar:H["a"],VToolbarTitle:Q["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mt-5 mb-12",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"6",align:"center",justify:"center"}},[a("lottie-player",{staticStyle:{width:"70%"},attrs:{src:"https://assets5.lottiefiles.com/packages/lf20_jcikwtux.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",[a("v-card",{staticClass:"elevation-4 mt-12 ml-6 mr-6"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("Register")])],1),a("v-card-text",{staticClass:"px-8"},[a("v-form",{ref:"form",attrs:{validation:""},model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-at",name:"email",label:"Email",type:"text",rules:e.emailRules,clearable:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password",rules:e.passwordRules,clearable:"",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{id:"repeated","prepend-icon":"mdi-lock-check",name:"repeated",label:"Password",type:"password",rules:e.repeatedPasswordRules,clearable:"",required:""},model:{value:e.repeatedPassword,callback:function(t){e.repeatedPassword=t},expression:"repeatedPassword"}})],1),a("div",{staticClass:"mt-4"},[a("span",{staticClass:"red--text"},[e._v(e._s(e.error))])])],1),a("v-card-actions",{staticClass:"pa-5"},[a("v-spacer"),a("v-btn",{staticClass:"mr-6",attrs:{fab:"",color:"#E57373",dark:""},on:{click:e.resetClicked}},[a("v-icon",[e._v("mdi-backspace")])],1),a("v-btn",{attrs:{fab:"",color:"green",disabled:!e.isValid},on:{click:e.registerClicked}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-arrow-right")])],1)],1)],1)],1)],1)],1)],1)],1)},te=[],ae=(a("ac1f"),a("00b4"),{data:function(){var e=this;return{email:"",password:"",repeatedPassword:"",isValid:!1,error:"",emailRules:[function(e){return!!e||"Email is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return e.length>=8||"Password must have at lest 8 characters"}],repeatedPasswordRules:[function(e){return!!e||"Repeated password is required"},function(t){return t==e.password||"Passwords are not the same"}]}},methods:{registerClicked:function(){this.$refs.form.validate()&&this.register(this.email,this.password)},register:function(e,t){var a=this,r={email:e,password:t};this.$store.dispatch("register",r).catch((function(){a.error="User with provided email address already exists"}))},resetClicked:function(){this.$refs.form.reset()}}}),re=ae,oe=Object(d["a"])(re,ee,te,!1,null,null,null),ne=oe.exports;p()(oe,{VBtn:m["a"],VCard:A["a"],VCardActions:D["a"],VCardText:D["b"],VCol:U["a"],VContainer:E["a"],VFlex:J["a"],VForm:N["a"],VIcon:K["a"],VLayout:W["a"],VRow:B["a"],VSpacer:h["a"],VTextField:G["a"],VToolbar:H["a"],VToolbarTitle:Q["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{justify:"center mt-6"}},[a("lottie-player",{staticStyle:{width:"400px",height:"400px"},attrs:{src:"https://assets6.lottiefiles.com/packages/lf20_vmlm0zew.json",background:"transparent",speed:"1",autoplay:""}})],1),a("v-row",{attrs:{justify:"center"}},[a("h1",[e._v("You have been logged out!")])]),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"mt-4",attrs:{to:"/",outlined:"",color:"indigo"}},[e._v("To home page")])],1)],1)},ie=[],le={},ce=le,de=Object(d["a"])(ce,se,ie,!1,null,null,null),ue=de.exports;p()(de,{VBtn:m["a"],VContainer:E["a"],VRow:B["a"]});var pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[e._v("Lista tablic")]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"Nazwa nowej tablicy",color:"primary"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addBoard.apply(null,arguments)}},scopedSlots:e._u([{key:"append",fn:function(){return[a("v-btn",{staticClass:"ma-0",attrs:{depressed:"",tile:"",color:"primary"},on:{click:e.addBoard}},[e._v(" Dodaj tablicę ")])]},proxy:!0}]),model:{value:e.new_board_name,callback:function(t){e.new_board_name=t},expression:"new_board_name"}})],1),e._l(e.boards,(function(t){return a("v-list",{key:t.id,attrs:{"two-line":""}},[a("v-list-item",{key:t.id,attrs:{to:"/board/"+t.id,link:""}},[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.name)+" ")])],1)],1),t.id!=e.boards[e.boards.length-1].id?a("v-divider",{key:"divider-"+t.id}):e._e()],1)}))],2)],1)],1)},fe=[],me=a("bc3a").default,ve={data:function(){return{new_board_name:"",boards:[],rules:[function(e){return!!e||"Pole wymagane!"},function(e){return(e||"").length<=40||"Maksymalna długość nazwy tablicy: 40 znaków!"}]}},methods:{boardSelected:function(e){alert("nie wiem czy to będzie potrzebne tutaj: "+e)},fetchBoardList:function(){var e=this;me.get("/boards").then((function(t){console.log(t),e.boards=t.data})).catch((function(t){console.log("Sorry sir no boards here. ".concat(t)),e.boards=[]}))},addBoard:function(){var e=this;if(""!=this.new_board_name){var t={name:this.new_board_name};me.post("/boards",t).then((function(t){console.log("Added: "+e.new_board_name),e.fetchBoardList(),e.$refs.form.reset()})).catch((function(t){console.log("Error occurred while adding"+e.new_board_name)}))}}},created:function(){console.log("anybody here"),this.fetchBoardList()}},he=ve,be=a("ce7e"),ge=a("8860"),we=a("da13"),_e=a("5d23"),ye=Object(d["a"])(he,pe,fe,!1,null,null,null),Ve=ye.exports;p()(ye,{VBtn:m["a"],VCard:A["a"],VCardText:D["b"],VCardTitle:D["c"],VContainer:E["a"],VDivider:be["a"],VForm:N["a"],VList:ge["a"],VListItem:we["a"],VListItemContent:_e["a"],VListItemTitle:_e["b"],VTextField:G["a"]});var xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"mt-6",attrs:{justify:"center"}},[a("lottie-player",{staticStyle:{height:"500px"},attrs:{src:"https://assets10.lottiefiles.com/packages/lf20_6nmazhqu.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),a("v-row",{attrs:{justify:"center"}},[a("h1",[e._v("Nothing interesting here")])])],1)},ke=[],Ce={},je=Ce,Te=Object(d["a"])(je,xe,ke,!1,null,null,null),Se=Te.exports;p()(Te,{VContainer:E["a"],VRow:B["a"]});var Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",[e._v(e._s(e.board_info.board_name))]),a("v-container",{staticClass:"d-flex flex-row pr-6 pt-3"},e._l(e.board_info.columns,(function(t){return a("v-card",{key:t.name,staticClass:"d-flex flex-column pt-3 mr-6 list"},[a("h2",{staticClass:"ms-3"},[e._v(e._s(t.name))]),a("v-container",e._l(t.cards,(function(t){return a("v-card",{key:t.title,staticClass:"mb-3"},[a("v-card-title",[e._v(e._s(t.title))]),a("v-card-text",[e._v(e._s(t.description))])],1)})),1)],1)})),1)],1)},Oe=[],Re=a("bc3a").default,$e={data:function(){return{id:this.$route.params.board_id,board_info:[]}},methods:{fetchBoardInfo:function(){var e=this;if(null!=this.id){var t={id:this.id};Re.post("/info",t).then((function(t){console.log("Successfully fetched board with id: "+e.id),e.board_info=t.data})).catch((function(t){console.log("Error occurred while fetching board with id: "+e.id)}))}}},created:function(){this.fetchBoardInfo()}},Ee=$e,Be=Object(d["a"])(Ee,Pe,Oe,!1,null,null,null),Le=Be.exports;p()(Be,{VCard:A["a"],VCardText:D["b"],VCardTitle:D["c"],VContainer:E["a"]}),r["a"].use(C["a"]);var Me=[{path:"/",name:"home",component:M},{path:"/login",name:"login",component:Z,meta:{auth:!1}},{path:"/boards",name:"boards",component:Ve,meta:{auth:!0}},{path:"/board/:board_id",name:"Board",component:Le,meta:{auth:!0}},{path:"/register",name:"register",component:ne,meta:{auth:!1}},{path:"/logout",name:"logout",component:ue,meta:{auth:!1}},{path:"*",name:"404",component:Se}];r["a"].router=new C["a"]({mode:"history",base:"/Trello-Sierra/",routes:Me});var Ie=r["a"].router,qe=a("f309");r["a"].use(qe["a"]);var ze=new qe["a"]({}),Fe=a("bc3a"),Ae=a.n(Fe),De=a("130e");Ae.a.defaults.baseURL="https://pawtrello.herokuapp.com",r["a"].use(De["a"],Ae.a);var Ue={root:"https://pawtrello.herokuapp.com"},Je=a("67a9"),Ne=a("9504"),Ke=a("b251"),We=a("59a5"),Ye=a("45c0"),Ge=a("6f51");Ye["a"].params.client_id="547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com",Ge["a"].params.client_id="196729390739201",r["a"].use(Je["a"],{plugins:{http:r["a"].axios,router:r["a"].router},drivers:{auth:Ne["a"],http:Ke["a"],router:We["a"],oauth2:{google:Ye["a"],facebook:Ge["a"]}},options:{rolesKey:"type",parseUserData:function(e){return e},refreshData:{enabled:!1,interval:0}}});var He={};a("5aea");r["a"].config.productionTip=!1,new r["a"]({el:"#app",http:Ue,router:Ie,store:O,vuetify:ze,config:He,render:function(e){return e(k)},created:function(){if(sessionStorage.redirect){var e=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(e)}}})},"5aea":function(e,t,a){}});
//# sourceMappingURL=app.3a0c6e95.js.map