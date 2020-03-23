function _defineProperties(l,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,i){return n&&_defineProperties(l.prototype,n),i&&_defineProperties(l,i),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{b1eO:function(l,n,i){"use strict";i.r(n);var t=i("8Y7J"),u=function l(){_classCallCheck(this,l)},e=i("pMnS"),o=i("MKJQ"),a=i("sZkV"),c=i("SVse"),r=i("k82s"),s=function(){function l(n,i,t,u){var e=this;_classCallCheck(this,l),this.storage=n,this.router=i,this.activatedRoute=t,this.localNotifications=u,this.medList=[],this.activatedRoute.params.subscribe((function(l){e.familyDetail=JSON.parse(l.familyDetail),e.medList=e.familyDetail.noticeMed,console.log(e.familyDetail)})),this.localNotifications.getAllScheduled()}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){}},{key:"onClickAdd",value:function(){this.router.navigate(["/add-detail",{familyIndex:this.familyDetail.familyIndex}])}},{key:"removeMed",value:function(l){var n=this;this.medList.splice(l,1),this.familyDetail.noticeMed=this.medList,this.storage.get("families").then((function(l){var i=[];(i=l).splice(n.familyDetail.familyIndex,1),i.splice(n.familyDetail.familyIndex,0,n.familyDetail),n.storage.remove("families").then((function(l){n.storage.set("families",i).then((function(l){console.log(l),alert("\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),n.setNotice(n.familyDetail.noticeMed)}))}))}))}},{key:"onClickUpdate",value:function(l){this.router.navigate(["/add-detail",{familyIndex:this.familyDetail.familyIndex,medIndex:l}])}},{key:"setNotice",value:function(l){var n=this;this.localNotifications.cancelAll().then((function(){n.localNotifications.clearAll().then((function(){var i=[],t=1;l.forEach((function(l){var n=new Date(l.time);console.log(n.getHours()),console.log(n.getMinutes());var u=n.getHours(),e=n.getMinutes();"\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"===l.medicineType&&((e-=15)<0&&(e=(u-=1)+60)),i.push({id:t,title:l.Mname+" "+l.medicine+" "+l.description,trigger:{every:{hour:u,minute:e}}}),t++})),console.log(i),n.localNotifications.schedule(i)}))}))}}]),l}(),b=i("xgBC"),f=i("iInd"),d=t.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,22,"ion-card",[],null,null,null,o.H,o.e)),t.ob(1,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"ion-card-header",[],null,null,null,o.G,o.g)),t.ob(3,49152,null,0,a.m,[t.h,t.k,t.x],null,null),(l()(),t.Hb(4,0,[" "," "])),(l()(),t.pb(5,0,null,0,10,"ion-card-content",[],null,null,null,o.F,o.f)),t.ob(6,49152,null,0,a.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(8,null,["",""])),(l()(),t.pb(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(10,null,["",""])),(l()(),t.pb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(12,null,["",""])),(l()(),t.pb(13,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Hb(14,null,["",""])),t.Db(15,2),(l()(),t.pb(16,0,null,0,6,"div",[["class","ion-text-right ion-padding"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,2,"ion-button",[["color","warning"]],null,[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.onClickUpdate(l.context.index)&&t),t}),o.D,o.c)),t.ob(18,49152,null,0,a.i,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Hb(-1,0,["\u0e41\u0e01\u0e49\u0e44\u0e02"])),(l()(),t.pb(20,0,null,null,2,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.removeMed(l.context.index)&&t),t}),o.D,o.c)),t.ob(21,49152,null,0,a.i,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Hb(-1,0,["\u0e25\u0e1a"]))],(function(l,n){l(n,18,0,"warning"),l(n,21,0,"danger")}),(function(l,n){l(n,4,0,n.context.$implicit.Mname),l(n,8,0,n.context.$implicit.medicine),l(n,10,0,n.context.$implicit.medicineType),l(n,12,0,n.context.$implicit.description);var i=t.Ib(n,14,0,l(n,15,0,t.Ab(n.parent,0),n.context.$implicit.time,"HH:mm"));l(n,14,0,i)}))}function h(l){return t.Jb(0,[t.Cb(0,c.d,[t.s]),(l()(),t.pb(1,0,null,null,16,"ion-header",[],null,null,null,o.K,o.j)),t.ob(2,49152,null,0,a.z,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(l()(),t.pb(3,0,null,0,14,"ion-toolbar",[],null,null,null,o.bb,o.A)),t.ob(4,49152,null,0,a.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.E,o.d)),t.ob(6,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,i){var u=!0;return"click"===n&&(u=!1!==t.Ab(l,9).onClick(i)&&u),u}),o.C,o.b)),t.ob(8,49152,null,0,a.e,[t.h,t.k,t.x],null,null),t.ob(9,16384,null,0,a.f,[[2,a.db],a.Cb],null,null),(l()(),t.pb(10,0,null,0,2,"ion-title",[],null,null,null,o.ab,o.z)),t.ob(11,49152,null,0,a.vb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"])),(l()(),t.pb(13,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,o.E,o.d)),t.ob(14,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.onClickAdd()&&t),t}),o.D,o.c)),t.ob(16,49152,null,0,a.i,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"])),(l()(),t.pb(18,0,null,null,3,"ion-content",[],null,null,null,o.I,o.h)),t.ob(19,49152,null,0,a.s,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,p)),t.ob(21,278528,null,0,c.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var i=n.component;l(n,2,0,!0),l(n,21,0,i.medList)}),null)}var m=t.lb("app-notification-list",s,(function(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-notification-list",[],null,null,null,h,d)),t.ob(1,114688,null,0,s,[b.b,f.m,f.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),y=i("s7LF"),k=function l(){_classCallCheck(this,l)};i.d(n,"NotificationListPageModuleNgFactory",(function(){return g}));var g=t.mb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[e.a,m]],[3,t.j],t.v]),t.yb(4608,c.l,c.k,[t.s,[2,c.r]]),t.yb(4608,y.g,y.g,[]),t.yb(4608,a.a,a.a,[t.x,t.g]),t.yb(4608,a.Bb,a.Bb,[a.a,t.j,t.p]),t.yb(4608,a.Eb,a.Eb,[a.a,t.j,t.p]),t.yb(1073742336,c.b,c.b,[]),t.yb(1073742336,y.f,y.f,[]),t.yb(1073742336,y.a,y.a,[]),t.yb(1073742336,a.zb,a.zb,[]),t.yb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),t.yb(1073742336,k,k,[]),t.yb(1073742336,u,u,[]),t.yb(1024,f.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);