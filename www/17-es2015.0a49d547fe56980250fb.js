(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JoDx:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var o=u("pMnS"),e=u("MKJQ"),c=u("sZkV"),b=u("SVse"),s=u("k82s");class a{constructor(l,n,u){this.storage=l,this.router=n,this.localNotifications=u,this.families=[]}ngOnInit(){}ionViewWillEnter(){this.storage.get("families").then(l=>{console.log(l),this.families=l})}onClickAdd(){this.router.navigate(["/add-family"])}onClickNotiList(l,n){l.familyIndex=n,this.router.navigate(["/notification-list",{familyDetail:JSON.stringify(l)}])}onClickRemove(l){this.families.splice(l,1),this.storage.remove("families").then(l=>{this.storage.set("families",this.families).then(l=>{console.log(l);const n=[];l.forEach(l=>{l.noticeMed.forEach(l=>{n.push(l)})}),console.log(n),this.setNotice(n)})})}setNotice(l){this.localNotifications.cancelAll().then(()=>{this.localNotifications.clearAll().then(()=>{const n=[];let u=1;l.forEach(l=>{const t=new Date(l.time);console.log(t.getHours()),console.log(t.getMinutes());let i=t.getHours(),o=t.getMinutes();if("\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"===l.medicineType)console.log("before"),o-=15,console.log("- 15: "+o),o<0&&(i-=1,o+=60,console.log("<0 15: "+o));else if("\u0e2b\u0e25\u0e31\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23"===l.medicineType&&(console.log("after"),o+=15,console.log("- 15: "+o),o>59)){i+=1;const l=o-60;o=0===l?0:l,console.log(">60 timeLeft: "+o)}n.push({id:u,title:l.Mname+" "+l.medicine+" "+l.description,trigger:{every:{hour:i,minute:o}}}),u++}),console.log(n),this.localNotifications.schedule(n)})})}onClickUpdate(l,n){this.router.navigate(["/add-family",{familyDetail:JSON.stringify(l),familyIndex:n}])}}var r=u("xgBC"),p=u("iInd"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"ion-img",[["style","height: 100px;"]],null,null,null,e.M,e.l)),t.ob(1,49152,null,0,c.B,[t.h,t.k,t.x],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,n.parent.context.$implicit.img)}),null)}function m(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,32,"ion-card",[],null,null,null,e.H,e.e)),t.ob(1,49152,null,0,c.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,0,1,null,f)),t.ob(4,16384,null,0,b.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(5,0,null,0,2,"ion-card-header",[],null,null,null,e.G,e.g)),t.ob(6,49152,null,0,c.m,[t.h,t.k,t.x],null,null),(l()(),t.Hb(7,0,[" "," "])),(l()(),t.pb(8,0,null,0,14,"ion-card-content",[],null,null,null,e.F,e.f)),t.ob(9,49152,null,0,c.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Hb(11,null,["\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14: ",""])),t.Db(12,2),(l()(),t.pb(13,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(14,null,["\u0e2d\u0e32\u0e01\u0e32\u0e23\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c: ",""])),(l()(),t.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(16,null,["\u0e2d\u0e32\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e49\u0e22\u0e32: ",""])),(l()(),t.pb(17,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(18,null,["\u0e01\u0e23\u0e38\u0e49\u0e1b\u0e40\u0e25\u0e37\u0e2d\u0e14: ",""])),(l()(),t.pb(19,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(20,null,["\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01: ",""])),(l()(),t.pb(21,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(22,null,["\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e39\u0e07: ",""])),(l()(),t.pb(23,0,null,0,9,"div",[["class","ion-text-right ion-padding"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,2,"ion-button",[["color","warning"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickUpdate(l.context.$implicit,l.context.index)&&t),t}),e.D,e.c)),t.ob(25,49152,null,0,c.i,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Hb(-1,0,["\u0e41\u0e01\u0e49\u0e44\u0e02"])),(l()(),t.pb(27,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickNotiList(l.context.$implicit,l.context.index)&&t),t}),e.D,e.c)),t.ob(28,49152,null,0,c.i,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e01\u0e34\u0e19\u0e22\u0e32"])),(l()(),t.pb(30,0,null,null,2,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickRemove(l.context.index)&&t),t}),e.D,e.c)),t.ob(31,49152,null,0,c.i,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Hb(-1,0,["\u0e25\u0e1a"]))],(function(l,n){l(n,4,0,n.context.$implicit.img),l(n,25,0,"warning"),l(n,31,0,"danger")}),(function(l,n){l(n,7,0,n.context.$implicit.name);var u=t.Ib(n,11,0,l(n,12,0,t.Ab(n.parent,0),n.context.$implicit.birthDate,"shortDate"));l(n,11,0,u),l(n,14,0,n.context.$implicit.symptoms||"-"),l(n,16,0,n.context.$implicit.drugAllergy||"-"),l(n,18,0,n.context.$implicit.blood||"-"),l(n,20,0,n.context.$implicit.weight||"-"),l(n,22,0,n.context.$implicit.height||"-")}))}function g(l){return t.Jb(0,[t.Cb(0,b.d,[t.s]),(l()(),t.pb(1,0,null,null,15,"ion-header",[],null,null,null,e.K,e.j)),t.ob(2,49152,null,0,c.z,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(l()(),t.pb(3,0,null,0,13,"ion-toolbar",[],null,null,null,e.bb,e.A)),t.ob(4,49152,null,0,c.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,e.E,e.d)),t.ob(6,49152,null,0,c.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,e.S,e.s)),t.ob(8,49152,null,0,c.P,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,e.ab,e.z)),t.ob(10,49152,null,0,c.vb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27"])),(l()(),t.pb(12,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,e.E,e.d)),t.ob(13,49152,null,0,c.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickAdd()&&t),t}),e.D,e.c)),t.ob(15,49152,null,0,c.i,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"])),(l()(),t.pb(17,0,null,null,3,"ion-content",[],null,null,null,e.I,e.h)),t.ob(18,49152,null,0,c.s,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,m)),t.ob(20,278528,null,0,b.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,!0),l(n,20,0,u.families)}),null)}function d(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-family-list",[],null,null,null,g,h)),t.ob(1,114688,null,0,a,[r.b,p.m,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.lb("app-family-list",a,d,{},{},[]),k=u("s7LF");class y{}u.d(n,"FamilyListPageModuleNgFactory",(function(){return v}));var v=t.mb(i,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,x]],[3,t.j],t.v]),t.yb(4608,b.l,b.k,[t.s,[2,b.r]]),t.yb(4608,k.g,k.g,[]),t.yb(4608,c.a,c.a,[t.x,t.g]),t.yb(4608,c.Bb,c.Bb,[c.a,t.j,t.p]),t.yb(4608,c.Eb,c.Eb,[c.a,t.j,t.p]),t.yb(1073742336,b.b,b.b,[]),t.yb(1073742336,k.f,k.f,[]),t.yb(1073742336,k.a,k.a,[]),t.yb(1073742336,c.zb,c.zb,[]),t.yb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.yb(1073742336,y,y,[]),t.yb(1073742336,i,i,[]),t.yb(1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);