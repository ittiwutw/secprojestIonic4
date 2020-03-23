function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{LwIK:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=function l(){_classCallCheck(this,l)},i=e("pMnS"),o=e("MKJQ"),a=e("sZkV"),s=e("s7LF"),d=e("SVse"),b=e("k82s"),c=function(){function l(n,e,u,t){_classCallCheck(this,l),this.storage=n,this.router=e,this.activatedRoute=u,this.localNotifications=t,this.postdata={medicine:"",Mname:"",medicineType:"",description:"",time:""},this.isUpdate=!1,this.localNotifications.requestPermission()}return _createClass(l,[{key:"ionViewWillEnter",value:function(){var l=this;this.clearData(),this.activatedRoute.params.subscribe((function(n){l.familyIndex=n.familyIndex,console.log(l.familyIndex),n.medIndex&&(l.medIndex=n.medIndex,l.getMedNoticeData(n.medIndex),l.isUpdate=!0),l.getFamilyData()}))}},{key:"ngOnInit",value:function(){}},{key:"validate",value:function(){var l=!1;return""!==this.postdata.Mname&&""!==this.postdata.medicine&&""!==this.postdata.time&&(l=!0),l}},{key:"clearData",value:function(){this.postdata.Mname="",this.postdata.description="",this.postdata.medicine="",this.postdata.medicineType="",this.postdata.time=""}},{key:"getFamilyData",value:function(){var l=this;this.storage.get("families").then((function(n){l.familyDetail=n[l.familyIndex],l.postdata.Mname=l.familyDetail.name}))}},{key:"getMedNoticeData",value:function(l){var n=this;this.storage.get("families").then((function(e){n.postdata=e[n.familyIndex].noticeMed[l]}))}},{key:"onSave",value:function(){var l=this;this.validate()&&(this.familyDetail.noticeMed.push(this.postdata),this.storage.get("families").then((function(n){var e=[];(e=n).splice(l.familyIndex,1),e.splice(l.familyIndex,0,l.familyDetail),l.storage.remove("families").then((function(n){l.storage.set("families",e).then((function(n){console.log(n),alert("\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),l.setNotice(l.familyDetail.noticeMed)}))}))})))}},{key:"onUpdate",value:function(){var l=this;if(this.validate()){var n=this.familyDetail.noticeMed;n.splice(this.medIndex,1),n.splice(this.medIndex,0,this.postdata),this.familyDetail.noticeMed=n,this.storage.get("families").then((function(n){var e=[];(e=n).splice(l.familyIndex,1),e.splice(l.familyIndex,0,l.familyDetail),l.storage.remove("families").then((function(n){l.storage.set("families",e).then((function(n){console.log(n),alert("\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),l.setNotice(l.familyDetail.noticeMed)}))}))}))}}},{key:"setNotice",value:function(l){var n=this;this.localNotifications.cancelAll().then((function(){n.localNotifications.clearAll().then((function(){var e=[],u=1;l.forEach((function(l){var n=new Date(l.time);console.log(n.getHours()),console.log(n.getMinutes());var t=n.getHours(),i=n.getMinutes();if(console.log(l.medicineType),"\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"===l.medicineType)console.log("before"),i-=15,console.log("- 15: "+i),i<0&&(t-=1,i+=60,console.log("<0 15: "+i));else if("\u0e2b\u0e25\u0e31\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23"===l.medicineType&&(console.log("after"),i+=15,console.log("- 15: "+i),i>59)){t+=1;var o=i-60;i=0===o?0:o,console.log(">60 timeLeft: "+i)}e.push({id:u,title:l.Mname+" "+l.medicine+" "+l.description,trigger:{every:{hour:t,minute:i}}}),u++})),console.log(e),n.localNotifications.schedule(e),n.router.navigate(["/family-list"])}))}))}}]),l}(),r=e("xgBC"),g=e("iInd"),p=u.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onSave()&&u),u}),o.D,o.c)),u.ob(1,49152,null,0,a.i,[u.h,u.k,u.x],{expand:[0,"expand"]},null),(l()(),u.Hb(-1,0,["\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"]))],(function(l,n){l(n,1,0,"block")}),null)}function f(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onUpdate()&&u),u}),o.D,o.c)),u.ob(1,49152,null,0,a.i,[u.h,u.k,u.x],{expand:[0,"expand"]},null),(l()(),u.Hb(-1,0,["\u0e41\u0e01\u0e49\u0e44\u0e0a"]))],(function(l,n){l(n,1,0,"block")}),null)}function m(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,11,"ion-header",[],null,null,null,o.K,o.j)),u.ob(1,49152,null,0,a.z,[u.h,u.k,u.x],{translucent:[0,"translucent"]},null),(l()(),u.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.bb,o.A)),u.ob(3,49152,null,0,a.xb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.E,o.d)),u.ob(5,49152,null,0,a.j,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Ab(l,8).onClick(e)&&t),t}),o.C,o.b)),u.ob(7,49152,null,0,a.e,[u.h,u.k,u.x],null,null),u.ob(8,16384,null,0,a.f,[[2,a.db],a.Cb],null,null),(l()(),u.pb(9,0,null,0,2,"ion-title",[],null,null,null,o.ab,o.z)),u.ob(10,49152,null,0,a.vb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,["\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"])),(l()(),u.pb(12,0,null,null,73,"ion-content",[],null,null,null,o.I,o.h)),u.ob(13,49152,null,0,a.s,[u.h,u.k,u.x],{fullscreen:[0,"fullscreen"]},null),(l()(),u.pb(14,0,null,0,11,"ion-item",[],null,null,null,o.O,o.n)),u.ob(15,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(l()(),u.pb(16,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,o.P,o.o)),u.ob(17,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Hb(-1,0,[" \u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 "])),(l()(),u.pb(19,0,null,0,6,"ion-input",[["placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ab(l,20)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ab(l,20)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.postdata.Mname=e)&&t),t}),o.N,o.m)),u.ob(20,16384,null,0,a.Hb,[u.k],null,null),u.Eb(1024,null,s.b,(function(l){return[l]}),[a.Hb]),u.ob(22,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,s.c,null,[s.e]),u.ob(24,16384,null,0,s.d,[[4,s.c]],null,null),u.ob(25,49152,null,0,a.E,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(26,0,null,0,17,"ion-item",[],null,null,null,o.O,o.n)),u.ob(27,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(l()(),u.pb(28,0,null,0,2,"ion-label",[],null,null,null,o.P,o.o)),u.ob(29,49152,null,0,a.L,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,["\u0e0a\u0e19\u0e34\u0e14\u0e02\u0e2d\u0e07\u0e22\u0e32"])),(l()(),u.pb(31,0,null,0,12,"ion-select",[["placeholder","\u0e40\u0e25\u0e37\u0e2d\u0e01"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ab(l,32)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ab(l,32)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.postdata.medicineType=e)&&t),t}),o.X,o.v)),u.ob(32,16384,null,0,a.Gb,[u.k],null,null),u.Eb(1024,null,s.b,(function(l){return[l]}),[a.Gb]),u.ob(34,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,s.c,null,[s.e]),u.ob(36,16384,null,0,s.d,[[4,s.c]],null,null),u.ob(37,49152,null,0,a.ib,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(38,0,null,0,2,"ion-select-option",[["value","\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"]],null,null,null,o.W,o.w)),u.ob(39,49152,null,0,a.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Hb(-1,0,["\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"])),(l()(),u.pb(41,0,null,0,2,"ion-select-option",[["value","\u0e2b\u0e25\u0e31\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23"]],null,null,null,o.W,o.w)),u.ob(42,49152,null,0,a.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Hb(-1,0,["\u0e2b\u0e25\u0e31\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23"])),(l()(),u.pb(44,0,null,0,11,"ion-item",[],null,null,null,o.O,o.n)),u.ob(45,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(l()(),u.pb(46,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,o.P,o.o)),u.ob(47,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Hb(-1,0,[" \u0e0a\u0e37\u0e48\u0e2d\u0e22\u0e32 "])),(l()(),u.pb(49,0,null,0,6,"ion-input",[["placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e22\u0e32"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ab(l,50)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ab(l,50)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.postdata.medicine=e)&&t),t}),o.N,o.m)),u.ob(50,16384,null,0,a.Hb,[u.k],null,null),u.Eb(1024,null,s.b,(function(l){return[l]}),[a.Hb]),u.ob(52,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,s.c,null,[s.e]),u.ob(54,16384,null,0,s.d,[[4,s.c]],null,null),u.ob(55,49152,null,0,a.E,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(56,0,null,0,11,"ion-item",[],null,null,null,o.O,o.n)),u.ob(57,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(l()(),u.pb(58,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,o.P,o.o)),u.ob(59,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Hb(-1,0,[" \u0e04\u0e33\u0e1a\u0e23\u0e23\u0e22\u0e32\u0e22 "])),(l()(),u.pb(61,0,null,0,6,"ion-input",[["placeholder","\u0e04\u0e33\u0e1a\u0e23\u0e23\u0e22\u0e32\u0e22"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ab(l,62)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ab(l,62)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.postdata.description=e)&&t),t}),o.N,o.m)),u.ob(62,16384,null,0,a.Hb,[u.k],null,null),u.Eb(1024,null,s.b,(function(l){return[l]}),[a.Hb]),u.ob(64,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,s.c,null,[s.e]),u.ob(66,16384,null,0,s.d,[[4,s.c]],null,null),u.ob(67,49152,null,0,a.E,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(68,0,null,0,11,"ion-item",[],null,null,null,o.O,o.n)),u.ob(69,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(l()(),u.pb(70,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,o.P,o.o)),u.ob(71,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Hb(-1,0,["\u0e40\u0e27\u0e25\u0e32"])),(l()(),u.pb(73,0,null,0,6,"ion-datetime",[["displayFormat","HH:mm"],["placeholder","\u0e40\u0e27\u0e25\u0e32"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ab(l,74)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ab(l,74)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.postdata.time=e)&&t),t}),o.J,o.i)),u.ob(74,16384,null,0,a.Gb,[u.k],null,null),u.Eb(1024,null,s.b,(function(l){return[l]}),[a.Gb]),u.ob(76,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,s.c,null,[s.e]),u.ob(78,16384,null,0,s.d,[[4,s.c]],null,null),u.ob(79,49152,null,0,a.t,[u.h,u.k,u.x],{displayFormat:[0,"displayFormat"],placeholder:[1,"placeholder"]},null),(l()(),u.pb(80,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,0,1,null,h)),u.ob(82,16384,null,0,d.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.eb(16777216,null,0,1,null,f)),u.ob(84,16384,null,0,d.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.Hb(85,0,[" ","\n"]))],(function(l,n){var e=n.component;l(n,1,0,!0),l(n,13,0,!0),l(n,17,0,"fixed"),l(n,22,0,e.postdata.Mname),l(n,25,0,"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49"),l(n,34,0,e.postdata.medicineType),l(n,37,0,"\u0e40\u0e25\u0e37\u0e2d\u0e01"),l(n,39,0,"\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"),l(n,42,0,"\u0e2b\u0e25\u0e31\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23"),l(n,47,0,"fixed"),l(n,52,0,e.postdata.medicine),l(n,55,0,"\u0e0a\u0e37\u0e48\u0e2d\u0e22\u0e32"),l(n,59,0,"fixed"),l(n,64,0,e.postdata.description),l(n,67,0,"\u0e04\u0e33\u0e1a\u0e23\u0e23\u0e22\u0e32\u0e22"),l(n,71,0,"fixed"),l(n,76,0,e.postdata.time),l(n,79,0,"HH:mm","\u0e40\u0e27\u0e25\u0e32"),l(n,82,0,!e.isUpdate),l(n,84,0,e.isUpdate)}),(function(l,n){var e=n.component;l(n,19,0,u.Ab(n,24).ngClassUntouched,u.Ab(n,24).ngClassTouched,u.Ab(n,24).ngClassPristine,u.Ab(n,24).ngClassDirty,u.Ab(n,24).ngClassValid,u.Ab(n,24).ngClassInvalid,u.Ab(n,24).ngClassPending),l(n,31,0,u.Ab(n,36).ngClassUntouched,u.Ab(n,36).ngClassTouched,u.Ab(n,36).ngClassPristine,u.Ab(n,36).ngClassDirty,u.Ab(n,36).ngClassValid,u.Ab(n,36).ngClassInvalid,u.Ab(n,36).ngClassPending),l(n,49,0,u.Ab(n,54).ngClassUntouched,u.Ab(n,54).ngClassTouched,u.Ab(n,54).ngClassPristine,u.Ab(n,54).ngClassDirty,u.Ab(n,54).ngClassValid,u.Ab(n,54).ngClassInvalid,u.Ab(n,54).ngClassPending),l(n,61,0,u.Ab(n,66).ngClassUntouched,u.Ab(n,66).ngClassTouched,u.Ab(n,66).ngClassPristine,u.Ab(n,66).ngClassDirty,u.Ab(n,66).ngClassValid,u.Ab(n,66).ngClassInvalid,u.Ab(n,66).ngClassPending),l(n,73,0,u.Ab(n,78).ngClassUntouched,u.Ab(n,78).ngClassTouched,u.Ab(n,78).ngClassPristine,u.Ab(n,78).ngClassDirty,u.Ab(n,78).ngClassValid,u.Ab(n,78).ngClassInvalid,u.Ab(n,78).ngClassPending),l(n,85,0,e.noticeList)}))}var v=u.lb("app-add-detail",c,(function(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,1,"app-add-detail",[],null,null,null,m,p)),u.ob(1,114688,null,0,c,[r.b,g.m,g.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=function l(){_classCallCheck(this,l)};e.d(n,"AddDetailPageModuleNgFactory",(function(){return y}));var y=u.mb(t,[],(function(l){return u.xb([u.yb(512,u.j,u.X,[[8,[i.a,v]],[3,u.j],u.v]),u.yb(4608,d.l,d.k,[u.s,[2,d.r]]),u.yb(4608,s.g,s.g,[]),u.yb(4608,a.a,a.a,[u.x,u.g]),u.yb(4608,a.Bb,a.Bb,[a.a,u.j,u.p]),u.yb(4608,a.Eb,a.Eb,[a.a,u.j,u.p]),u.yb(1073742336,d.b,d.b,[]),u.yb(1073742336,s.f,s.f,[]),u.yb(1073742336,s.a,s.a,[]),u.yb(1073742336,a.zb,a.zb,[]),u.yb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),u.yb(1073742336,C,C,[]),u.yb(1073742336,t,t,[]),u.yb(1024,g.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);