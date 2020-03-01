(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-detail-add-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-detail/add-detail.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-detail/add-detail.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>กรอกข้อมูล</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-item>\n    <ion-label position=\"fixed\">\n      ชื่อผู้ใช้\n    </ion-label>\n    <ion-input\n      placeholder=\"ชื่อผู้ใช้\"\n      [(ngModel)]=\"postdata.Mname\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">\n      ชื่อยา\n    </ion-label>\n    <ion-input placeholder=\"ชื่อยา\" [(ngModel)]=\"postdata.medicine\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">\n      ชนิดของยา\n    </ion-label>\n    <ion-input\n      placeholder=\"ชนิดของยา\"\n      [(ngModel)]=\"postdata.medicineType\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">\n      คำบรรยาย\n    </ion-label>\n    <ion-input\n      placeholder=\"คำบรรยาย\"\n      [(ngModel)]=\"postdata.description\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">เวลา</ion-label>\n    <ion-datetime\n      placeholder=\"เวลา\"\n      displayFormat=\"HH:mm\"\n      [(ngModel)]=\"postdata.time\"\n    ></ion-datetime>\n  </ion-item>\n  <br>\n  <ion-button expand=\"block\" (click)=\"onClickSave()\">บันทึก</ion-button>\n\n  {{noticeList}}\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-detail/add-detail-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-detail/add-detail-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailPageRoutingModule", function() { return AddDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-detail.page */ "./src/app/add-detail/add-detail.page.ts");




const routes = [
    {
        path: '',
        component: _add_detail_page__WEBPACK_IMPORTED_MODULE_3__["AddDetailPage"]
    }
];
let AddDetailPageRoutingModule = class AddDetailPageRoutingModule {
};
AddDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/add-detail/add-detail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-detail/add-detail.module.ts ***!
  \*************************************************/
/*! exports provided: AddDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailPageModule", function() { return AddDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-detail-routing.module */ "./src/app/add-detail/add-detail-routing.module.ts");
/* harmony import */ var _add_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-detail.page */ "./src/app/add-detail/add-detail.page.ts");







let AddDetailPageModule = class AddDetailPageModule {
};
AddDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddDetailPageRoutingModule"]
        ],
        declarations: [_add_detail_page__WEBPACK_IMPORTED_MODULE_6__["AddDetailPage"]]
    })
], AddDetailPageModule);



/***/ }),

/***/ "./src/app/add-detail/add-detail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-detail/add-detail.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXRhaWwvYWRkLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/add-detail/add-detail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-detail/add-detail.page.ts ***!
  \***********************************************/
/*! exports provided: AddDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailPage", function() { return AddDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");





let AddDetailPage = class AddDetailPage {
    constructor(storage, router, localNotifications) {
        this.storage = storage;
        this.router = router;
        this.localNotifications = localNotifications;
        this.postdata = {
            medicine: '',
            Mname: '',
            medicineType: '',
            description: '',
            time: ''
        };
        this.localNotifications.requestPermission();
    }
    ngOnInit() {
    }
    onClickSave() {
        this.storage.get('MedList').then(val => {
            let newMed = [];
            if (val) {
                newMed = val;
            }
            newMed.push(this.postdata);
            this.storage.remove('MedList').then(() => {
                this.storage.set('MedList', newMed);
                alert('Completed!!');
                const noticeList = [];
                let idIndex = 1;
                newMed.forEach(notice => {
                    const selectDate = new Date(notice.time);
                    console.log(selectDate.getHours());
                    console.log(selectDate.getMinutes());
                    const selectHr = selectDate.getHours();
                    const selectMin = selectDate.getMinutes();
                    const noticeParam = {
                        id: idIndex,
                        title: notice.Mname + ' ' + notice.description,
                        trigger: {
                            every: {
                                hour: selectHr,
                                minute: selectMin
                            }
                        }
                    };
                    noticeList.push(noticeParam);
                    idIndex++;
                });
                console.log(noticeList);
                this.localNotifications.schedule(noticeList);
                this.router.navigate(['/home']);
            });
        });
    }
};
AddDetailPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"] }
];
AddDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-detail/add-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-detail.page.scss */ "./src/app/add-detail/add-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])
], AddDetailPage);



/***/ })

}]);
//# sourceMappingURL=add-detail-add-detail-module-es2015.js.map