(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{F6Eh:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{}var u=t("pMnS"),i=t("MKJQ"),a=t("sZkV"),r=t("SVse"),s=t("mrSG"),c=t("aYiH");class b{constructor(l,n){this.store=l,this.router=n,this.coords={accuracy:0,latitude:0,longitude:0}}ngOnInit(){return s.a(this,void 0,void 0,(function*(){this.fences$=this.store.select("Fences"),this.store.select("Position").subscribe(l=>{this.coords=l}),this.store.dispatch(c.b())}))}distance(l,n,t,e){let o=(t-l)*Math.PI/180,u=(e-n)*Math.PI/180,i=Math.sin(o/2)*Math.sin(o/2)+Math.cos(l*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(u/2)*Math.sin(u/2),a=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371;return a>1?Math.round(a):a<=1?Math.round(1e3*a):a}getTransition(l){switch(l){case 1:return"entering region";case 2:return"exiting region";case 3:return"entering or exiting region"}}newOne(){this.store.dispatch(c.f({edit:!1})),this.goToGeo()}delete(l){this.store.dispatch(c.c({index:l}))}editOne(l,n){return s.a(this,void 0,void 0,(function*(){yield this.store.dispatch(c.d({edit:!0,index:n,fence:l})),this.goToGeo()}))}goToGeo(){this.router.navigate(["app/geolocation"])}}var d=t("DQLy"),h=t("iInd"),p=e.nb({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:transparent}.danger[_ngcontent-%COMP%]{color:red}"]],data:{}});function g(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(1,null,[" You are inside of "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.notification.text)}))}function m(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(1,null,["you are at "," km from the ",""]))],null,(function(l,n){var t=n.component;l(n,1,0,t.distance(n.parent.context.$implicit.latitude,n.parent.context.$implicit.longitude,t.coords.latitude,t.coords.longitude),n.parent.context.$implicit.notification.text)}))}function f(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["slot","start"]],null,null,null,i.L,i.k)),e.ob(1,49152,null,0,a.B,[e.h,e.k,e.x],{color:[0,"color"],ios:[1,"ios"],md:[2,"md"]},null)],(function(l,n){l(n,1,0,"danger","alert-circle-outline","alert-circle-sharp")}),null)}function k(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,24,"ion-item",[["style","cursor: pointer;"]],null,null,null,i.N,i.m)),e.ob(1,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,8,"ion-label",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.editOne(l.context.$implicit,l.context.index)&&e),e}),i.O,i.n)),e.ob(3,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,1,"h3",[],[[8,"className",0]],null,null,null,null)),(l()(),e.Hb(5,null,["",""])),(l()(),e.eb(16777216,null,0,1,null,g)),e.ob(7,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.eb(0,[["elseBlock",2]],0,0,null,m)),(l()(),e.pb(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(10,null,["When "," within ","m"])),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(12,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(13,0,null,0,11,"ion-fab",[["horizontal","end"],["vertical","undefined"]],null,null,null,i.I,i.f)),e.ob(14,49152,null,0,a.v,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(15,0,null,0,3,"ion-fab-button",[["color","dark"]],null,null,null,i.G,i.g)),e.ob(16,49152,null,0,a.w,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(17,0,null,0,1,"ion-icon",[["name","chevron-back-outline"]],null,null,null,i.L,i.k)),e.ob(18,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(19,0,null,0,5,"ion-fab-list",[["side","start"]],null,null,null,i.H,i.h)),e.ob(20,49152,null,0,a.x,[e.h,e.k,e.x],{side:[0,"side"]},null),(l()(),e.pb(21,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.delete(l.context.index)&&e),e}),i.G,i.g)),e.ob(22,49152,null,0,a.w,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(23,0,null,0,1,"ion-icon",[["name","trash"]],null,null,null,i.L,i.k)),e.ob(24,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,7,0,.001*n.context.$implicit.radius>=t.distance(n.context.$implicit.latitude,n.context.$implicit.longitude,t.coords.latitude,t.coords.longitude),e.Bb(n,8)),l(n,12,0,.001*n.context.$implicit.radius>=t.distance(n.context.$implicit.latitude,n.context.$implicit.longitude,t.coords.latitude,t.coords.longitude)),l(n,14,0,"end","undefined"),l(n,16,0,"dark"),l(n,18,0,"chevron-back-outline"),l(n,20,0,"start"),l(n,22,0,"danger"),l(n,24,0,"trash")}),(function(l,n){var t=n.component;l(n,4,0,e.tb(1,"",.001*n.context.$implicit.radius>=t.distance(n.context.$implicit.latitude,n.context.$implicit.longitude,t.coords.latitude,t.coords.longitude)?"danger":"","")),l(n,5,0,n.context.$implicit.notification.text),l(n,10,0,t.getTransition(n.context.$implicit.transitionType),n.context.$implicit.radius)}))}function x(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.K,i.j)),e.ob(1,49152,null,0,a.A,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.bb,i.A)),e.ob(3,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.E,i.d)),e.ob(5,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.R,i.r)),e.ob(7,49152,null,0,a.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.Z,i.y)),e.ob(9,49152,null,0,a.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Geofence List"])),(l()(),e.pb(11,0,null,null,12,"ion-content",[],null,null,null,i.F,i.e)),e.ob(12,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,4,"ion-list",[],null,null,null,i.Q,i.o)),e.ob(14,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,2,null,k)),e.ob(16,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Db(131072,r.b,[e.h]),(l()(),e.pb(18,0,null,0,5,"ion-fab",[["horizontal","end"],["vertical","bottom"]],null,null,null,i.I,i.f)),e.ob(19,49152,null,0,a.v,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(20,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.newOne()&&e),e}),i.G,i.g)),e.ob(21,49152,null,0,a.w,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.L,i.k)),e.ob(23,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,1,0,!0),l(n,16,0,e.Ib(n,16,0,e.Bb(n,17).transform(t.fences$))),l(n,19,0,"end","bottom"),l(n,23,0,"add")}),null)}function v(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"app-folder",[],null,null,null,x,p)),e.ob(1,114688,null,0,b,[d.m,h.m],null,null)],(function(l,n){l(n,1,0)}),null)}var y=e.lb("app-folder",b,v,{},{},[]),C=t("2lPn"),O=t("lDAE"),M=t("lk2W"),P=t("4R65");class B{constructor(l){this.store=l,this.layers=[]}ngOnInit(){return s.a(this,void 0,void 0,(function*(){this.map=!1,this.myPosition={accuracy:0,latitude:0,longitude:0},this.options={layers:[Object(P.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"..."})],zoom:13,center:null},yield this.store.select("Position").subscribe(l=>{this.myPosition.latitude=l.latitude,this.myPosition.longitude=l.longitude,this.options.center=Object(P.latLng)(this.myPosition.latitude,this.myPosition.longitude)}),yield this.store.select("Fences").subscribe(l=>{l.map(l=>{this.layers.push(Object(P.circle)([l.latitude,l.longitude],{radius:l.radius}),Object(P.marker)([l.latitude,l.longitude]))})}),setTimeout(()=>{this.map=!0,this.setLayer()},500)}))}setLayer(){this.layers.push(Object(P.marker)([this.myPosition.latitude,this.myPosition.longitude],{autoPan:!0,icon:Object(P.icon)({iconSize:[31,41],iconAnchor:[13,41],iconUrl:"assets/marker-96.png",shadowUrl:"assets/marker-shadow.png"})}))}}var w=e.nb({encapsulation:0,styles:[[""]],data:{}});function j(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),e.ob(1,737280,null,0,C.a,[O.a,e.x],{layer:[0,"layer"]},null)],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function z(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,4,"div",[["leaflet",""],["style","height: 80vh;"]],null,[[null,"leafletCenterChange"],["window","resize"]],(function(l,n,t){var o=!0,u=l.component;return"window:resize"===n&&(o=!1!==e.Bb(l,1).onResize()&&o),"leafletCenterChange"===n&&(o=!1!==(u.center=t)&&o),o}),null,null)),e.ob(1,606208,null,0,O.a,[e.k,e.x],{options:[0,"options"],center:[1,"center"]},{centerChange:"leafletCenterChange"}),e.ob(2,475136,null,0,M.a,[O.a,e.r,e.x],{layersControlConfig:[0,"layersControlConfig"]},null),(l()(),e.eb(16777216,null,null,1,null,j)),e.ob(4,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.options,t.center),l(n,2,0,t.layersControl),l(n,4,0,t.layers)}),null)}function I(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.K,i.j)),e.ob(1,49152,null,0,a.A,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.bb,i.A)),e.ob(3,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.E,i.d)),e.ob(5,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.R,i.r)),e.ob(7,49152,null,0,a.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.Z,i.y)),e.ob(9,49152,null,0,a.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Home"])),(l()(),e.pb(11,0,null,null,3,"ion-content",[],null,null,null,i.F,i.e)),e.ob(12,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,z)),e.ob(14,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(15,0,null,null,13,"ion-footer",[],null,null,null,i.J,i.i)),e.ob(16,49152,null,0,a.y,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,11,"ion-item",[],null,null,null,i.N,i.m)),e.ob(18,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(19,0,null,0,1,"small",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Develope by Blackshark Opensource using the following technologies "])),(l()(),e.pb(21,0,null,0,1,"ion-icon",[["name","logo-npm"],["style","margin-left: 9px;"]],null,null,null,i.L,i.k)),e.ob(22,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(23,0,null,0,1,"ion-icon",[["name","logo-nodejs"]],null,null,null,i.L,i.k)),e.ob(24,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(25,0,null,0,1,"ion-icon",[["name","logo-javascript"]],null,null,null,i.L,i.k)),e.ob(26,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(27,0,null,0,1,"ion-icon",[["name","logo-angular"]],null,null,null,i.L,i.k)),e.ob(28,49152,null,0,a.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,1,0,!0),l(n,14,0,t.map),l(n,22,0,"logo-npm"),l(n,24,0,"logo-nodejs"),l(n,26,0,"logo-javascript"),l(n,28,0,"logo-angular")}),null)}function E(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,I,w)),e.ob(1,114688,null,0,B,[d.m],null,null)],(function(l,n){l(n,1,0)}),null)}var L=e.lb("app-home",B,E,{},{},[]),T=t("s7LF"),H=t("a3Cf"),J=t("HDdC"),G=function(l){function n(){var n=null!==l&&l.apply(this,arguments)||this;return n.TransitionType={ENTER:1,EXIT:2,BOTH:3},n}return Object(s.c)(n,l),n.prototype.onTransitionReceived=function(){return Object(H.cordovaFunctionOverride)(this,"onTransitionReceived",{},arguments)},n.prototype.initialize=function(){return Object(H.cordova)(this,"initialize",{},arguments)},n.prototype.addOrUpdate=function(l){return Object(H.cordova)(this,"addOrUpdate",{},arguments)},n.prototype.remove=function(l){return Object(H.cordova)(this,"remove",{},arguments)},n.prototype.removeAll=function(){return Object(H.cordova)(this,"removeAll",{},arguments)},n.prototype.getWatched=function(){return Object(H.cordova)(this,"getWatched",{},arguments)},n.prototype.onNotificationClicked=function(){return new J.a((function(l){return"undefined"!=typeof window&&window.geofence&&(window.geofence.onNotificationClicked=l.next.bind(l)),function(){return window.geofence.onNotificationClicked=function(){}}}))},n.pluginName="Geofence",n.plugin="cordova-plugin-geofence",n.pluginRef="geofence",n.repo="https://github.com/cowbell/cordova-plugin-geofence",n.platforms=["Android","iOS","Windows","Windows Phone 8"],n}(H.IonicNativePlugin),$=t("H+Hf");class F{constructor(l,n,t,e,o){this.router=l,this.store=n,this.geofence=t,this.platform=e,this.geo=o,this.geofence.initialize().then(()=>console.log("Geofence Plugin Ready"),l=>console.log(l))}ngOnInit(){return s.a(this,void 0,void 0,(function*(){this.map=!1,this.myPosition={accuracy:0,latitude:0,longitude:0},this.options={layers:[Object(P.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"..."})],zoom:13,center:null},yield this.store.select("fence").subscribe(l=>s.a(this,void 0,void 0,(function*(){this.index=l.index,this.edit=l.edit,l.edit?(this.data=Object.assign({},l.fence),this.data.notification=Object.assign({},l.fence.notification)):this.data={id:"",latitude:0,longitude:0,notification:{id:Math.floor(1e3*Math.random()),text:"",openAppOnClick:!0,title:document.title},radius:1e3,transitionType:1}}))),this.edit?this.options.center=Object(P.latLng)(this.data.latitude,this.data.longitude):yield this.store.select("Position").subscribe(l=>{this.myPosition.latitude=l.latitude,this.myPosition.longitude=l.longitude,this.options.center=Object(P.latLng)(this.myPosition.latitude,this.myPosition.longitude)}),setTimeout(()=>{this.map=!0,this.setLayer()},500)}))}ngDoCheck(){}addLayersControl(){this.layersControl={baseLayers:{"Open Street Map":Object(P.tileLayer)("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"..."})},overlays:{"See my position":Object(P.marker)([this.myPosition.latitude,this.myPosition.longitude],{autoPan:!0})}}}setLayer(){console.log("set Layer"),this.layers=[Object(P.circle)([this.data.latitude,this.data.longitude],{radius:this.data.radius}),Object(P.marker)([this.data.latitude,this.data.longitude]),Object(P.marker)([this.myPosition.latitude,this.myPosition.longitude],{autoPan:!0,icon:Object(P.icon)({iconSize:[31,41],iconAnchor:[13,41],iconUrl:"assets/marker-96.png",shadowUrl:"assets/marker-shadow.png"})})]}onSetMarket(l){this.edit||(this.data.latitude=l.latlng.lat,this.data.longitude=l.latlng.lng,this.center=l.latLng,this.setLayer())}onSelect(l){this.data.transitionType=parseInt(l)}roundMeters(){return(.001*this.data.radius).toPrecision(2)}getID(){let l="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let t=0;t<9;t++)l+=n.charAt(Math.floor(Math.random()*n.length));return l}save(){this.platform.is("hybrid")&&this.addGeofence(),this.edit?this.store.dispatch(c.h({fence:this.data,index:this.index})):(this.data.id=this.getID(),this.store.dispatch(c.a(this.data))),this.router.navigate(["/app/home"])}addGeofence(){this.geofence.addOrUpdate(this.data).then(()=>console.log("Geofence added"),l=>console.log("Geofence failed to add"))}}var A=e.nb({encapsulation:0,styles:[[""]],data:{}});function _(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),e.ob(1,737280,null,0,C.a,[O.a,e.x],{layer:[0,"layer"]},null)],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function N(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,4,"div",[["leaflet",""],["style","height: 65vh;"]],null,[[null,"leafletClick"],[null,"leafletCenterChange"],["window","resize"]],(function(l,n,t){var o=!0,u=l.component;return"window:resize"===n&&(o=!1!==e.Bb(l,1).onResize()&&o),"leafletClick"===n&&(o=!1!==u.onSetMarket(t)&&o),"leafletCenterChange"===n&&(o=!1!==(u.center=t)&&o),o}),null,null)),e.ob(1,606208,null,0,O.a,[e.k,e.x],{options:[0,"options"],center:[1,"center"]},{centerChange:"leafletCenterChange",onClick:"leafletClick"}),e.ob(2,475136,null,0,M.a,[O.a,e.r,e.x],{layersControlConfig:[0,"layersControlConfig"]},null),(l()(),e.eb(16777216,null,null,1,null,_)),e.ob(4,278528,null,0,r.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.options,t.center),l(n,2,0,t.layersControl),l(n,4,0,t.layers)}),null)}function D(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,16,"ion-header",[],null,null,null,i.K,i.j)),e.ob(1,49152,null,0,a.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,14,"ion-toolbar",[],null,null,null,i.bb,i.A)),e.ob(3,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.E,i.d)),e.ob(5,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==e.Bb(l,8).onClick(t)&&o),o}),i.C,i.b)),e.ob(7,49152,null,0,a.f,[e.h,e.k,e.x],null,null),e.ob(8,16384,null,0,a.g,[[2,a.eb],a.Db],null,null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.Z,i.y)),e.ob(10,49152,null,0,a.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Geofence"])),(l()(),e.pb(12,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,i.E,i.d)),e.ob(13,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.save()&&e),e}),i.D,i.c)),e.ob(15,49152,null,0,a.j,[e.h,e.k,e.x],null,null),(l()(),e.Hb(16,0,["",""])),(l()(),e.pb(17,0,null,null,45,"ion-content",[],null,null,null,i.F,i.e)),e.ob(18,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(19,0,null,0,41,"ion-list",[],null,null,null,i.Q,i.o)),e.ob(20,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(21,0,null,0,8,"ion-item",[],null,null,null,i.N,i.m)),e.ob(22,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(23,0,null,0,6,"ion-input",[["placeholder","Put notification text here. Example: Buy a milk"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==e.Bb(l,24)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,24)._handleInputEvent(t.target)&&o),"ngModelChange"===n&&(o=!1!==(u.data.notification.text=t)&&o),o}),i.M,i.l)),e.ob(24,16384,null,0,a.Ib,[e.k],null,null),e.Eb(1024,null,T.b,(function(l){return[l]}),[a.Ib]),e.ob(26,671744,null,0,T.e,[[8,null],[8,null],[8,null],[6,T.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,T.c,null,[T.e]),e.ob(28,16384,null,0,T.d,[[4,T.c]],null,null),e.ob(29,49152,null,0,a.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(l()(),e.pb(30,0,null,0,17,"ion-item",[],null,null,null,i.N,i.m)),e.ob(31,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(32,0,null,0,2,"ion-label",[],null,null,null,i.O,i.n)),e.ob(33,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" When you? "])),(l()(),e.pb(35,0,null,0,12,"ion-select",[["cancelText","Dismiss"],["okText","Okay"],["slot","end"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,t){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==e.Bb(l,38)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,38)._handleChangeEvent(t.target)&&o),"ionChange"===n&&(o=!1!==u.onSelect(t.detail.value)&&o),o}),i.X,i.v)),e.Eb(5120,null,T.b,(function(l){return[l]}),[a.Hb]),e.ob(37,49152,null,0,a.jb,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],okText:[1,"okText"],value:[2,"value"]},null),e.ob(38,16384,null,0,a.Hb,[e.k],null,null),(l()(),e.pb(39,0,null,0,2,"ion-select-option",[["value","1"]],null,null,null,i.W,i.w)),e.ob(40,49152,null,0,a.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Enter Region"])),(l()(),e.pb(42,0,null,0,2,"ion-select-option",[["value","2"]],null,null,null,i.W,i.w)),e.ob(43,49152,null,0,a.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Exit Region"])),(l()(),e.pb(45,0,null,0,2,"ion-select-option",[["value","3"]],null,null,null,i.W,i.w)),e.ob(46,49152,null,0,a.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Enter or Exit Region"])),(l()(),e.pb(48,0,null,0,12,"ion-item",[],null,null,null,i.N,i.m)),e.ob(49,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(50,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Radius"])),(l()(),e.pb(52,0,null,0,6,"ion-range",[["dualKnobs","false"],["min","50"],["pin","false"],["snaps","false"],["step","3"],["ticks","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,t){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==e.Bb(l,53)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,53)._handleChangeEvent(t.target)&&o),"ngModelChange"===n&&(o=!1!==(u.data.radius=t)&&o),"ionChange"===n&&(o=!1!==u.setLayer()&&o),o}),i.V,i.u)),e.ob(53,16384,null,0,a.Hb,[e.k],null,null),e.Eb(1024,null,T.b,(function(l){return[l]}),[a.Hb]),e.ob(55,671744,null,0,T.e,[[8,null],[8,null],[8,null],[6,T.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,T.c,null,[T.e]),e.ob(57,16384,null,0,T.d,[[4,T.c]],null,null),e.ob(58,49152,null,0,a.Y,[e.h,e.k,e.x],{dualKnobs:[0,"dualKnobs"],max:[1,"max"],min:[2,"min"],pin:[3,"pin"],snaps:[4,"snaps"],step:[5,"step"],ticks:[6,"ticks"]},null),(l()(),e.pb(59,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),e.Hb(60,null,["",""])),(l()(),e.eb(16777216,null,0,1,null,N)),e.ob(62,16384,null,0,r.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,26,0,t.data.notification.text),l(n,29,0,"Put notification text here. Example: Buy a milk"),l(n,37,0,"Dismiss","Okay",e.tb(1,"",t.data.transitionType,"")),l(n,40,0,"1"),l(n,43,0,"2"),l(n,46,0,"3"),l(n,55,0,t.data.radius),l(n,58,0,"false",5e3,"50","false","false","3","false"),l(n,62,0,t.map)}),(function(l,n){var t=n.component;l(n,16,0,t.edit?"Update":"Save"),l(n,23,0,e.Bb(n,28).ngClassUntouched,e.Bb(n,28).ngClassTouched,e.Bb(n,28).ngClassPristine,e.Bb(n,28).ngClassDirty,e.Bb(n,28).ngClassValid,e.Bb(n,28).ngClassInvalid,e.Bb(n,28).ngClassPending),l(n,52,0,e.Bb(n,57).ngClassUntouched,e.Bb(n,57).ngClassTouched,e.Bb(n,57).ngClassPristine,e.Bb(n,57).ngClassDirty,e.Bb(n,57).ngClassValid,e.Bb(n,57).ngClassInvalid,e.Bb(n,57).ngClassPending),l(n,60,0,t.data.radius>=1e3?t.roundMeters()+"Km":t.data.radius+"m")}))}function R(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"app-geolocation",[],null,null,null,D,A)),e.Eb(512,null,G,G,[]),e.ob(2,376832,null,0,F,[h.m,d.m,G,a.Eb,$.a],null,null)],(function(l,n){l(n,2,0)}),null)}var S=e.lb("app-geolocation",F,R,{},{},[]),U=t("foBm");class W{}t.d(n,"FolderPageModuleNgFactory",(function(){return K}));var K=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[u.a,y,L,S]],[3,e.j],e.v]),e.zb(4608,r.l,r.k,[e.s,[2,r.r]]),e.zb(4608,T.g,T.g,[]),e.zb(4608,a.a,a.a,[e.x,e.g]),e.zb(4608,a.Cb,a.Cb,[a.a,e.j,e.p]),e.zb(4608,a.Fb,a.Fb,[a.a,e.j,e.p]),e.zb(1073742336,r.c,r.c,[]),e.zb(1073742336,T.f,T.f,[]),e.zb(1073742336,T.a,T.a,[]),e.zb(1073742336,a.Ab,a.Ab,[]),e.zb(1073742336,U.a,U.a,[]),e.zb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.zb(1073742336,W,W,[]),e.zb(1073742336,o,o,[]),e.zb(1024,h.k,(function(){return[[{path:"",component:b,redirectTo:"home"},{path:"fences",component:b},{path:"home",component:B},{path:"geolocation",component:F}]]}),[])])}))}}]);