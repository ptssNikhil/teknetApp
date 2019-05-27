webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDeatailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AlertDeatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertDeatailPage = /** @class */ (function () {
    function AlertDeatailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localDate = new Date();
    }
    AlertDeatailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertDeatailPage');
    };
    AlertDeatailPage.prototype.closeDatepicker = function () {
        this.datepickerDirective.modal.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], AlertDeatailPage.prototype, "datepickerDirective", void 0);
    AlertDeatailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-alert-deatail',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/alert-deatail/alert-deatail.html"*/'<!--\n  Generated template for the AlertDeatailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span class="hedTxt font18">#AL-00000002432 </span></ion-title>\n    <!-- <ion-buttons end>\n      <ion-icon class="editbtn" style="font-size:2.4rem;padding: 0vh 1vw;" name="create"></ion-icon>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Engine No.</ion-label>\n      <ion-input type="text" value="UA111533" disabled></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Verbatim Group Code & Discription</ion-label>\n      <ion-input type="text" value="ENG-Engines" disabled></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Verbatim Code & Discription</ion-label>\n      <ion-input type="text" value="ENG1008- Engine Does Not Start" disabled></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Complaint Discription</ion-label>\n      <ion-input type="text" value="Oil leaked in engine" disabled></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col text-center>\n        <div class="dataPickerBox">\n          <span class="txtColorGray">Date of Failure</span><br>\n          <span ion-datepicker [(value)]="localDate" [min]="localDate" clear class="ScheduleDate">\n            <span>{{localDate | date : \'dd/MM/yyyy\'}} <ion-icon class="txtColorRed" name="clipboard" item-left>\n              </ion-icon>\n            </span>\n          </span>\n        </div>\n      </ion-col>\n      <ion-col text-center>\n        <div class="dataPickerBox">\n          <span class="txtColorGray">Date of Creation</span><br>\n          <span ion-datepicker [(value)]="localDate" [min]="localDate" clear class="ScheduleDate">\n            <span>{{localDate | date : \'dd/MM/yyyy\'}} <ion-icon class="txtColorRed" name="clipboard" item-left>\n              </ion-icon>\n            </span>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>Mileage</ion-label>\n          <ion-input type="text" value="28608" disabled></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>Vehicle No.</ion-label>\n          <ion-input type="text" value="D2C84235" disabled></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>Model Code</ion-label>\n          <ion-input type="text" value="VP51PB15R010WD" disabled></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>Model Family</ion-label>\n          <ion-input type="text" value="701" disabled></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <p class="font12 leftContent">\n        <ion-icon class="txtColorRed padRight2" name="attach"> </ion-icon>VP1034DGFH21321.jpg\n      </p>\n      <p class=" font12 rightContent">\n        1148.11KB\n      </p>\n    </ion-item>\n    <ion-item>\n      <p class="font12 leftContent">\n        <ion-icon class="txtColorRed padRight2" name="attach"> </ion-icon>VP1034DGFH21321.jpg\n      </p>\n      <p class=" font12 rightContent">\n        1148.11KB\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/alert-deatail/alert-deatail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AlertDeatailPage);
    return AlertDeatailPage;
}());

//# sourceMappingURL=alert-deatail.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DashboardContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardContentPage = /** @class */ (function () {
    function DashboardContentPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
    }
    DashboardContentPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DashboardContentPage");
    };
    DashboardContentPage.prototype.ionViewWillEnter = function () {
        this.dataProvider.getDashbaordData();
    };
    DashboardContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-dashboard-content",template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/dashboard-content/dashboard-content.html"*/'<!--\n  Generated template for the DashboardContentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <ion-buttons>\n      <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="power"></ion-icon>\n    </ion-buttons>\n    <ion-title><span class="hedTxt">Dashboard</span></ion-title>\n    <ion-buttons end>\n      <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="notifications"></ion-icon>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item class="searchBox">\n    <ion-label>\n      <ion-icon name="search"></ion-icon>\n    </ion-label>\n    <ion-input placeholder="Global Search" clearInput type="text"></ion-input>\n    <ion-icon class="micIcon" name="md-mic" item-right></ion-icon>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <ion-card class="cardCss"><span style="line-height: 5vh;" class="txtColorRed font14 fontBold">20</span><br><span\n            class="txtColorGray"> Pending at TEKLiner</span></ion-card>\n      </ion-col>\n      <ion-col text-center>\n        <ion-card class="cardCss"><span style="line-height: 5vh;" class="txtColorRed font14 fontBold">1</span><br><span\n            class="txtColorGray"> Pending at Cotek</span></ion-card>\n      </ion-col>\n      <ion-col text-center>\n        <ion-card class="cardCss"><span style="line-height: 5vh;" class="txtColorRed font14 fontBold">0</span><br><span\n            class="txtColorGray"> Saved at Cotek</span></ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div>\n    <p class="font12 leftContent"> <b>My Recent Tar</b></p>\n    <p class="font12 rightContent txtColorGray fontBold">View All</p>\n  </div><br>\n  <ion-card class="redLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 </p>\n        <p class="font12 rightContent txtInProgress fontBold">Inprogress</p>\n      </div><br>\n      <div><span class="fontBold font14"> Engine Abnormal Noise <br></span></div>\n      <div>\n        <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n        <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="greenLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 <br></p>\n        <p class="font12 rightContent txtClose fontBold">Closed</p>\n      </div><br>\n      <div><span class="fontBold font14"> Key programing Problem<br></span></div>\n      <div>\n        <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n        <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <p class="font12 leftContent"> <b>My Recent Discussion</b></p>\n    <p class="font12 rightContent txtColorGray fontBold">View All</p>\n  </div><br>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <p class="font12 leftContent"> <b>Latest Videos</b></p>\n    <p class="font12 rightContent txtColorGray fontBold">View All</p>\n  </div><br>\n  <ion-card>\n    <ion-row>\n      <ion-col class="col" col-4 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/image.png">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class="col" col-8 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-card-content>\n          <div>\n            <p class=" font14"><b> Key programing</b></p>\n          </div>\n          <div>\n            <p class="txtOverFlow"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          </div>\n          <div class="padTop2 ">\n            <p class=" font12 rightContent">\n              <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n            </p>\n          </div>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col class="col" col-4 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/video.png">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class="col" col-8 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-card-content>\n          <div>\n            <p class=" font14"><b> Key programing</b></p>\n          </div>\n          <div>\n            <p class="txtOverFlow"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          </div>\n          <div class="padTop2 ">\n            <p class=" font12 rightContent">\n              <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n            </p>\n          </div>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/dashboard-content/dashboard-content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], DashboardContentPage);
    return DashboardContentPage;
}());

//# sourceMappingURL=dashboard-content.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tekblog_tekblog__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tektube_tektube__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bayside_assistant_bayside_assistant__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tekline_tekline__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_content_dashboard_content__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_content_dashboard_content__["a" /* DashboardContentPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__pages_tekline_tekline__["a" /* TeklinePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__pages_tekblog_tekblog__["a" /* TekblogPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_3__pages_tektube_tektube__["a" /* TektubePage */];
        this.tab5 = __WEBPACK_IMPORTED_MODULE_4__pages_bayside_assistant_bayside_assistant__["a" /* BaysideAssistantPage */];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.logTabView = function (name) {
        console.log('clicked on ' + name);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab tabsHideOnSubPages="true" tabTitle="Dashboard" tabIcon="dashIcon" [root]="tab1"></ion-tab>\n    <ion-tab tabsHideOnSubPages="true" tabTitle="Tekline" tabIcon="teklineIcon" [root]="tab2"></ion-tab>\n    <ion-tab tabsHideOnSubPages="true" tabTitle="Tekblog" tabIcon="msgIcon" [root]="tab3"></ion-tab>\n    <ion-tab tabsHideOnSubPages="true" tabTitle="Tektube" tabIcon="tektubeIcon" [root]="tab4"></ion-tab>\n    <ion-tab tabsHideOnSubPages="true" tabTitle="RO" tabIcon="rsaIcon" [root]="tab5"></ion-tab>\n    <!-- <ion-tab tabsHideOnSubPages="true" tabIcon="list-box" [root]="tab2"></ion-tab> -->\n    <!-- <ion-tab tabsHideOnSubPages="true" tabIcon="ios-chatboxes-outline" [root]="tab3"></ion-tab>\n    <ion-tab tabsHideOnSubPages="true" tabIcon="logo-youtube" [root]="tab4"></ion-tab>\n    <ion-tab tabsHideOnSubPages="true" tabIcon="umbrella" [root]="tab5"></ion-tab> -->\n\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TekblogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tek_blog_chat_tek_blog_chat__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TekblogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TekblogPage = /** @class */ (function () {
    function TekblogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TekblogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TekblogPage');
    };
    TekblogPage.prototype.onListClick = function (item) {
        console.log("you clicked on " + item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tek_blog_chat_tek_blog_chat__["a" /* TekBlogChatPage */]);
        // this.navCtrl.setRoot(TekBlogChatPage);
        // this.dataProvider.alertCustom('Tittle','Subtittle','Template Messsage','Ok','profalert');
    };
    TekblogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tekblog',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tekblog/tekblog.html"*/'<!--\n  Generated template for the TekblogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span class="hedTxt">TEKBlog</span></ion-title>\n    <ion-buttons end>\n        <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="notifications"></ion-icon>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-title>TEKBlog</ion-title> -->\n  <ion-card class="yellowLeftBorder" (click)="onListClick(\'demo\')">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="yellowLeftBorder">\n    <ion-card-content>\n      <div>\n        <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n      </div>\n      <div>\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="padTop2 ">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  \n\n  <ion-fab right bottom>\n      <button class="iconBackgroundRed" ion-fab mini><ion-icon name="add"></ion-icon></button>\n      <!-- <ion-fab-list side="left">\n          <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list> -->\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tekblog/tekblog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TekblogPage);
    return TekblogPage;
}());

//# sourceMappingURL=tekblog.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TekBlogChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TekBlogChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TekBlogChatPage = /** @class */ (function () {
    function TekBlogChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TekBlogChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TekBlogChatPage');
    };
    TekBlogChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tek-blog-chat',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tek-blog-chat/tek-blog-chat.html"*/'<!--\n  Generated template for the TekBlogChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span class="hedTxt font18">TEKBlogChat Discussion</span></ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="mainMSg">\n    <div>\n      <p class="txtOverFlow font14"><b> Key programing Problem in my mahindra scorpio engine Abnormal Noise </b></p>\n    </div>\n    <div>\n      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n    </div>\n    <div class="padTop2">\n      <p class="font12 leftContent">\n        <ion-icon class="txtColorGray" name="ios-chatboxes-outline"> 100</ion-icon>\n      </p>\n      <p class=" font12 rightContent">\n        <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n      </p>\n    </div>\n  </ion-card>\n  <!-- <ion-card class="rightMSg">\n    <ion-card-content class="cardLeft">\n      <div class="">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="person"> 10001111</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n      <div class="padTop4">\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="leftMSg">\n    <ion-card-content>\n      <div class="">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="person"> 10001111</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n      <div class="padTop4">\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="rightMSg">\n    <ion-card-content>\n      <div class="">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="person"> 10001111</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n      <div class="padTop4">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorRed padRight2" name="attach"> </ion-icon>VP1034DGFH21321.jpg\n        </p>\n        <p class=" font12 rightContent">\n          1148.11KB\n        </p>\n      </div>\n    </ion-card-content>\n  </ion-card> -->\n  <div class="leftChat top25">\n    <div class="txtJustify">\n      <div class="">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="person"> 10001111</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n      <div class="padTop4">\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="">\n        <p class=" font12 rightContent moveRight">\n          <ion-icon class="txtColorGray" name="replyAll"></ion-icon><span class="rply">Replay</span>\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class="rightChat top35">\n    <div class="txtJustify">\n      <div class="">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="person"> 10001111</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n      </div>\n      <div class="padTop4">\n        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n      </div>\n      <div class="">\n        <p class=" font12 leftContent">\n          <ion-icon class="txtColorGray" name="replyAll"></ion-icon><span class="rply">Replay</span>\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class="leftChat top35">\n    <div class="txtJustify">\n      <div class="">\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorGray" name="person"> 10001111</ion-icon>\n        </p>\n        <p class=" font12 rightContent">\n          <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n        </p>\n\n        <p class="font12 leftContent">\n          <ion-icon class="txtColorRed padRight2" name="attach"> </ion-icon>VP1034DGFH21321.jpg\n        </p>\n        <p class=" font12 rightContent">\n          1148.11KB\n        </p>\n      </div>\n      <div class="padTop8">\n        <p> </p>\n      </div>\n    </div>\n  </div>\n  <div class="">\n    <p class=" font12 rightContent moveRight2">\n      <ion-icon class="txtColorGray" name="replyAll"></ion-icon><span class="rply">Replay</span>\n    </p>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="attach"></ion-icon>\n      </ion-label>\n      <ion-input placeholder="Type your message" type="text" value=""></ion-input>\n      <ion-icon class="micIcon chatSend" name="send" item-right></ion-icon>\n    </ion-item>\n    <!-- <ion-buttons end>\n      <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="send"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tek-blog-chat/tek-blog-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TekBlogChatPage);
    return TekBlogChatPage;
}());

//# sourceMappingURL=tek-blog-chat.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeklinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_deatail_alert_deatail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeklinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeklinePage = /** @class */ (function () {
    function TeklinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeklinePage.prototype.ngOnInit = function () {
    };
    TeklinePage.prototype.ionViewWillEnter = function () {
        this.tekLineTab = 'myTar';
    };
    TeklinePage.prototype.onListClick = function (item) {
        console.log("you clicked on " + item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alert_deatail_alert_deatail__["a" /* AlertDeatailPage */]);
        // this.navCtrl.setRoot(TekBlogChatPage);
        // this.dataProvider.alertCustom('Tittle','Subtittle','Template Messsage','Ok','profalert');
    };
    TeklinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tekline',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tekline/tekline.html"*/'<!--\n  Generated template for the TeklinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span class="hedTxt">TEKLine</span></ion-title>\n    <ion-buttons end>\n        <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="notifications"></ion-icon>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-title>TEKLine</ion-title> -->\n  <div padding>\n    <ion-segment [(ngModel)]="tekLineTab" color="danger">\n      <ion-segment-button value="myTar">\n        My TAR\n      </ion-segment-button>\n      <ion-segment-button value="scrAlert">\n        SCR Alert\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="tekLineTab">\n    <ion-list *ngSwitchCase="\'scrAlert\'">\n      <ion-card class="redLeftBorder">\n        <ion-card-content (click)="onListClick(\'item\')">\n          <div>\n            <p class="font12 leftContent"> <b>Alert No.</b> #2313123123 </p>\n            <p class="font12 rightContent txtInProgress fontBold">Pending</p>\n          </div><br>\n          <div><span class="fontBold font14"> Engine Abnormal Noise <br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="greenLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>Alert No.</b> #2313123123 <br></p>\n            <p class="font12 rightContent txtClose fontBold">Created</p>\n          </div><br>\n          <div><span class="fontBold font14"> Key programing Problem<br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="redLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>Alert No.</b> #2313123123 </p>\n            <p class="font12 rightContent txtInProgress fontBold">Pending</p>\n          </div><br>\n          <div><span class="fontBold font14"> Engine Abnormal Noise <br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="greenLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>Alert No.</b> #2313123123 <br></p>\n            <p class="font12 rightContent txtClose fontBold">Created</p>\n          </div><br>\n          <div><span class="fontBold font14"> Key programing Problem<br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'myTar\'">\n      <ion-item class="searchBox">\n        <ion-label>\n          <ion-icon name="search"></ion-icon>\n        </ion-label>\n        <ion-input placeholder="Search Categorywise" clearInput type="text"></ion-input>\n        <ion-icon class="micIcon" name="md-mic" item-right></ion-icon>\n      </ion-item>\n      <ion-card class="redLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 </p>\n            <p class="font12 rightContent txtInProgress fontBold">Inprogress</p>\n          </div><br>\n          <div><span class="fontBold font14"> Engine Abnormal Noise <br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n            <!-- <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p> -->\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="greenLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 <br></p>\n            <p class="font12 rightContent txtClose fontBold">Closed</p>\n          </div><br>\n          <div><span class="fontBold font14"> Key programing Problem<br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n            <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="redLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 </p>\n            <p class="font12 rightContent txtInProgress fontBold">Inprogress</p>\n          </div><br>\n          <div><span class="fontBold font14"> Engine Abnormal Noise <br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n            <!-- <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p> -->\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="greenLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 <br></p>\n            <p class="font12 rightContent txtClose fontBold">Closed</p>\n          </div><br>\n          <div><span class="fontBold font14"> Key programing Problem<br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n            <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="redLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 </p>\n            <p class="font12 rightContent txtInProgress fontBold">Inprogress</p>\n          </div><br>\n          <div><span class="fontBold font14"> Engine Abnormal Noise <br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n            <!-- <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p> -->\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class="greenLeftBorder">\n        <ion-card-content>\n          <div>\n            <p class="font12 leftContent"> <b>TAR No.</b> #2313123123 <br></p>\n            <p class="font12 rightContent txtClose fontBold">Closed</p>\n          </div><br>\n          <div><span class="fontBold font14"> Key programing Problem<br></span></div>\n          <div>\n            <p class="font12 leftContent"><b>Start Date:</b> 12/05/2018 </p>\n            <p class="font12 rightContent"><b>End Date:</b> 14/06/2018</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n  </div>\n\n  <ion-fab top right bottom>\n    <button class="iconBackgroundRed smallBtn"  ion-fab mini>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-fab right bottom>\n    <button class="iconBackgroundRed" ion-fab mini>\n      <ion-icon name="ios-funnel"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tekline/tekline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TeklinePage);
    return TeklinePage;
}());

//# sourceMappingURL=tekline.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alert-deatail/alert-deatail.module": [
		294,
		7
	],
	"../pages/bayside-assistant/bayside-assistant.module": [
		295,
		6
	],
	"../pages/dashboard-content/dashboard-content.module": [
		296,
		5
	],
	"../pages/dashboard/dashboard.module": [
		297,
		4
	],
	"../pages/tek-blog-chat/tek-blog-chat.module": [
		298,
		3
	],
	"../pages/tekblog/tekblog.module": [
		299,
		2
	],
	"../pages/tekline/tekline.module": [
		300,
		1
	],
	"../pages/tektube/tektube.module": [
		301,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tekline_tekline__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tekblog_tekblog__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tektube_tektube__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bayside_assistant_bayside_assistant__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_content_dashboard_content__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tek_blog_chat_tek_blog_chat__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alert_deatail_alert_deatail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_data_service_data_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ion_datepicker__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tekline_tekline__["a" /* TeklinePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tekblog_tekblog__["a" /* TekblogPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tektube_tektube__["a" /* TektubePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bayside_assistant_bayside_assistant__["a" /* BaysideAssistantPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_content_dashboard_content__["a" /* DashboardContentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tek_blog_chat_tek_blog_chat__["a" /* TekBlogChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alert_deatail_alert_deatail__["a" /* AlertDeatailPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alert-deatail/alert-deatail.module#AlertDeatailPageModule', name: 'AlertDeatailPage', segment: 'alert-deatail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bayside-assistant/bayside-assistant.module#BaysideAssistantPageModule', name: 'BaysideAssistantPage', segment: 'bayside-assistant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard-content/dashboard-content.module#DashboardContentPageModule', name: 'DashboardContentPage', segment: 'dashboard-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tek-blog-chat/tek-blog-chat.module#TekBlogChatPageModule', name: 'TekBlogChatPage', segment: 'tek-blog-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tekblog/tekblog.module#TekblogPageModule', name: 'TekblogPage', segment: 'tekblog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tekline/tekline.module#TeklinePageModule', name: 'TeklinePage', segment: 'tekline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tektube/tektube.module#TektubePageModule', name: 'TektubePage', segment: 'tektube', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_18_ion_datepicker__["b" /* DatePickerModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tekline_tekline__["a" /* TeklinePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tekblog_tekblog__["a" /* TekblogPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tektube_tektube__["a" /* TektubePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bayside_assistant_bayside_assistant__["a" /* BaysideAssistantPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_content_dashboard_content__["a" /* DashboardContentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tek_blog_chat_tek_blog_chat__["a" /* TekBlogChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alert_deatail_alert_deatail__["a" /* AlertDeatailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_data_service_data_service__["a" /* DataServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tektube_tektube__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bayside_assistant_bayside_assistant__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from "../pages/home/home";
// import { ListPage } from "../pages/list/list";
// new page added

// import { TeklinePage } from "../pages/tekline/tekline";
// import { TekblogPage } from "../pages/tekblog/tekblog";


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, config) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.config = config;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            // { title: 'Home', component: HomePage },
            // { title: 'List', component: ListPage },
            // { title: 'Dashboard', component: DashboardPage },
            // { title: 'TEKLine', component: TeklinePage },
            // { title: 'TEKBlog', component: TekblogPage },
            // { title: 'TEKTube', component: TektubePage },
            // { title: 'Bayside Assistant', component: BaysideAssistantPage },
            { title: "Home", menuIcon: "home", component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: "My Profile", menuIcon: "contact", component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            {
                title: "About us",
                menuIcon: "information-circle",
                component: __WEBPACK_IMPORTED_MODULE_5__pages_tektube_tektube__["a" /* TektubePage */]
            },
            { title: "Logout", menuIcon: "log-out", component: __WEBPACK_IMPORTED_MODULE_6__pages_bayside_assistant_bayside_assistant__["a" /* BaysideAssistantPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.config.set("backButtonIcon", "ios-arrow-back");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      \n      <button style="font-size: 3vh; " menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.menuIcon}}" class="pad5 txtColorRed"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaysideAssistantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BaysideAssistantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BaysideAssistantPage = /** @class */ (function () {
    function BaysideAssistantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BaysideAssistantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BaysideAssistantPage');
    };
    BaysideAssistantPage.prototype.ionSelected = function () {
        console.log("BaysideAssistant Page has been selected");
        // do your stuff here
    };
    BaysideAssistantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bayside-assistant',template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/bayside-assistant/bayside-assistant.html"*/'<!--\n  Generated template for the BaysideAssistantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span class="hedTxt">Bayside Assistant</span></ion-title>\n    <ion-buttons end>\n        <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="notifications"></ion-icon>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-title>Bayside Assistant</ion-title>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/bayside-assistant/bayside-assistant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BaysideAssistantPage);
    return BaysideAssistantPage;
}());

//# sourceMappingURL=bayside-assistant.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TektubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TektubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TektubePage = /** @class */ (function () {
    function TektubePage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
    }
    TektubePage.prototype.ionViewDidLoad = function () {
    };
    TektubePage.prototype.onClick = function () {
        console.log("tabbed on icon");
        this.dataProvider.alertCustom('Tittle', 'Subtittle', 'Template Messsage', 'Ok', 'profalert');
    };
    TektubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-tektube",template:/*ion-inline-start:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tektube/tektube.html"*/'<!--\n  Generated template for the TektubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span class="hedTxt">TEKTube</span></ion-title>\n    <ion-buttons end>\n      <ion-icon style="font-size:2.4rem;padding: 0vh 1vw;" name="notifications"></ion-icon>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-title>TEKTube</ion-title>  -->\n  <ion-item class="searchBox">\n    <ion-label>\n      <ion-icon name="search"></ion-icon>\n    </ion-label>\n    <ion-input placeholder="Search Videos" clearInput type="text"></ion-input>\n    <ion-icon class="micIcon" name="md-mic" item-right></ion-icon>\n  </ion-item>\n  <ion-card>\n    <ion-row (click)="onClick()">\n      <ion-col class="col" col-4 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/image.png">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class="col" col-8 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-card-content>\n          <div>\n            <p class=" font14"><b> Key programing</b></p>\n          </div>\n          <div>\n            <p class="txtOverFlow"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          </div>\n          <div class="padTop2 ">\n            <p class=" font12 rightContent">\n              <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n            </p>\n          </div>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col class="col" col-4 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/video.png">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class="col" col-8 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-card-content>\n          <div>\n            <p class=" font14"><b> Key programing</b></p>\n          </div>\n          <div>\n            <p class="txtOverFlow"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          </div>\n          <div class="padTop2 ">\n            <p class=" font12 rightContent">\n              <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n            </p>\n          </div>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col class="col" col-4 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/pdf.png">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class="col" col-8 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-card-content>\n          <div>\n            <p class=" font14"><b> Key programing</b></p>\n          </div>\n          <div>\n            <p class="txtOverFlow"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          </div>\n          <div class="padTop2 ">\n            <p class=" font12 rightContent">\n              <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n            </p>\n          </div>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col class="col" col-4 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/pdf.png">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class="col" col-8 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-card-content>\n          <div>\n            <p class=" font14"><b> Key programing</b></p>\n          </div>\n          <div>\n            <p class="txtOverFlow"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          </div>\n          <div class="padTop2 ">\n            <p class=" font12 rightContent">\n              <ion-icon class="txtColorGray" name="timer"> 30 min ago</ion-icon>\n            </p>\n          </div>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button class="iconBackgroundRed" ion-fab mini>\n      <ion-icon name="ios-funnel"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Teknet/tecknetV3/src/pages/tektube/tektube.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], TektubePage);
    return TektubePage;
}());

//# sourceMappingURL=tektube.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = /** @class */ (function () {
    function DataServiceProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        console.log(" DataServiceProvider Provider Initialize");
    }
    DataServiceProvider.prototype.getDashbaordData = function () {
        console.log("dashboardcalled");
        // this.httpGet('http://dummy.restapiexample.com/api/v1/employees');
        // this.httpPost(
        //   "http://dummy.restapiexample.com/api/v1/create",
        //   '{"name":"test","salary":"123","age":"23"}'
        // );
    };
    DataServiceProvider.prototype.httpGet = function (apiUrl) {
        this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            return response;
        });
    };
    DataServiceProvider.prototype.httpPost = function (apiUrl, data) {
        this.http.post(apiUrl, data).subscribe(function (response) {
            console.log(response);
            return response;
        });
    };
    DataServiceProvider.prototype.storeData = function (key, data) {
        this.appData[key] = data;
    };
    DataServiceProvider.prototype.getData = function (key) {
        return this.appData[key];
    };
    DataServiceProvider.prototype.confirmationAlert = function (title, message, buttonOne, buttonTwo) {
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: buttonOne,
                    handler: function () {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: buttonTwo,
                    handler: function () {
                        console.log("Agree clicked");
                    }
                }
            ]
        });
        confirm.present();
    };
    DataServiceProvider.prototype.alertCustom = function (title, Subtitle, message, buttonTittle, cssClass) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: Subtitle,
            message: message,
            buttons: [buttonTittle],
            cssClass: cssClass
        });
        alert.present();
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map