webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_component__ = __webpack_require__("../../../../../src/app/shared/shared.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
                { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__shared_shared_component__["a" /* SharedComponent */] },
                { path: '*', component: __WEBPACK_IMPORTED_MODULE_1__shared_not_found_not_found_component__["a" /* NotFoundComponent */] },
            ], { useHash: true })
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [color]=\"'#fff'\" [thick]=\"true\" [showSpinner]=\"false\">\n</ng-progress>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    AppComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        //remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_admin_admin_module__ = __webpack_require__("../../../../../src/app/shared/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_drains_clean_drain_clean_drain_module__ = __webpack_require__("../../../../../src/app/shared/drains/clean-drain/clean-drain.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_drains_all_drains_all_drains_module__ = __webpack_require__("../../../../../src/app/shared/drains/all-drains/all-drains.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_drains_help_drain_help_drain_module__ = __webpack_require__("../../../../../src/app/shared/drains/help-drain/help-drain.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_header_header_module__ = __webpack_require__("../../../../../src/app/shared/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_drains_dirty_drain_dirty_drain_module__ = __webpack_require__("../../../../../src/app/shared/drains/dirty-drain/dirty-drain.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_reports_reports_module__ = __webpack_require__("../../../../../src/app/shared/reports/reports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__transilate_translation_translation_component__ = __webpack_require__("../../../../../src/app/transilate/translation/translation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_drains_url_service__ = __webpack_require__("../../../../../src/app/core/drains-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_session_service__ = __webpack_require__("../../../../../src/app/core/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_users_url_service__ = __webpack_require__("../../../../../src/app/core/users-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_sms_service__ = __webpack_require__("../../../../../src/app/core/sms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_streets_url_service__ = __webpack_require__("../../../../../src/app/core/streets-url.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { Ng2GoogleChartsModule } from 'ng2-google-charts';
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_reports_reports_module__["a" /* ReportModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_drains_all_drains_all_drains_module__["a" /* DrainListModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_drains_dirty_drain_dirty_drain_module__["a" /* DirtyDrainModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_drains_clean_drain_clean_drain_module__["a" /* CleanDrainModule */],
            __WEBPACK_IMPORTED_MODULE_21_ngx_progressbar__["a" /* NgProgressModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_drains_help_drain_help_drain_module__["a" /* HelpDrainModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__core_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__core_drains_url_service__["a" /* DrainsUrlService */],
            __WEBPACK_IMPORTED_MODULE_18__core_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_20__core_sms_service__["a" /* SmsService */],
            __WEBPACK_IMPORTED_MODULE_22__core_streets_url_service__["a" /* StreetsUrlService */],
            __WEBPACK_IMPORTED_MODULE_19__core_users_url_service__["a" /* UsersUrlService */],
            __WEBPACK_IMPORTED_MODULE_15__transilate_translation_translation_component__["a" /* TRANSLATION_PROVIDERS */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['dashboard/home'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = "http://twaamtaro.org/api/v1/sessions/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.loginUrl, { user: user }, { headers: this.headers })
            .subscribe(function (res) {
            _this.userdata = res.json();
            _this.userName = _this.userdata.data.user.first_name + " " + _this.userdata.data.user.last_name;
            if (_this.userdata && _this.userdata.data.auth_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(_this.userdata.data.auth_token));
                localStorage.setItem('user', _this.userName);
                location.reload();
                _this.router.navigate(['dashboard/admin']);
            }
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem("currentUser") == null) {
            this.loggedIn == false;
            return this.loggedIn;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        location.reload();
        localStorage.clear();
        this.loggedIn = false;
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/drains-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrainsUrlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrainsUrlService = (function () {
    function DrainsUrlService() {
        this.apiUrl = 'http://twaamtaro.org/api/v1/';
        this.localUrl = 'http://localhost:3000/api/v1/';
        this.drainsUrl = 'drains/?type=all';
        this.cleanDrainsUrl = 'drains/?type=cleaned';
        this.dirtyDrainsUrl = 'drains/?type=uncleaned';
        this.helpDetailsUrl = 'need_helps';
        this.helpDrainsUrl = 'drains/?type=need_help';
        this.unknownDrainsUrl = 'drains/?type=unknown';
        this.drainDataUrl = 'drains/data';
        this.ranksDataUrl = 'drains/ranking';
    }
    return DrainsUrlService;
}());
DrainsUrlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DrainsUrlService);

//# sourceMappingURL=drains-url.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/drains.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drains_url_service__ = __webpack_require__("../../../../../src/app/core/drains-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrainsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DrainsService = (function () {
    function DrainsService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'charset': 'utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    DrainsService.prototype.getDrains = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.drainsUrl)
            .map(function (response) { return response.json().drains; })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getCleanDrains = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.cleanDrainsUrl)
            .map(function (response) { return response.json().drains; })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getDirtyDrains = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.dirtyDrainsUrl)
            .map(function (response) { return response.json().drains; })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getHelpDetails = function () {
        var _this = this;
        return this.http.get(this.urlService.apiUrl + this.urlService.helpDetailsUrl, this.options)
            .map(function (response) {
            _this.helpDrains = response.json();
        })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getHelpDrains = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.helpDrainsUrl, this.options)
            .map(function (response) { return response.json().drains; })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getFilteredHelp = function (status) {
        if (status == null) {
            console.log("Null Service");
            return this.getHelpDetails();
        }
        else {
            console.log("Non-Null Service");
            return this.getHelpDetails()
                .map(function (drains) { return drains.find(function (drain) { return drain.status === status; }); })
                .catch(this.errorHandler);
        }
    };
    DrainsService.prototype.getUnknownDrains = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.unknownDrainsUrl)
            .map(function (response) { return response.json().drains; })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getDrainData = function () {
        var _this = this;
        return this.http.get(this.urlService.apiUrl + this.urlService.drainDataUrl)
            .map(function (response) {
            _this.drainData = response.json();
        })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.getRanksData = function () {
        var _this = this;
        return this.http.get(this.urlService.apiUrl + this.urlService.ranksDataUrl)
            .map(function (response) {
            _this.ranksData = response.json().ranking;
        })
            .catch(this.errorHandler);
    };
    DrainsService.prototype.alertVEO = function (street) {
        return this.http.post(street, { headers: this.headers })
            .subscribe(function (res) {
            var alertData = res.json();
        });
    };
    DrainsService.prototype.errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Sorry, something went wrong');
    };
    return DrainsService;
}());
DrainsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__drains_url_service__["a" /* DrainsUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__drains_url_service__["a" /* DrainsUrlService */]) === "function" && _b || Object])
], DrainsService);

var _a, _b;
//# sourceMappingURL=drains.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/paging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });

var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());

//# sourceMappingURL=paging.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = (function () {
    function SessionService() {
        this.loggedIn = false;
    }
    SessionService.prototype.setCurrentUser = function (data) {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/sms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_url_service__ = __webpack_require__("../../../../../src/app/core/users-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SmsService = (function () {
    function SmsService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
        this.userToken = "gM7TM10gfRFZBlkNNcqg9A";
        this.userEmail = "example-2@twaamtaro.org";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Token token="gM7TM10gfRFZBlkNNcqg9A", email="example-2@twaamtaro.org"', 'Content-Type': ' ' });
    }
    SmsService.prototype.alertLeader = function (street_id) {
        return this.http.post(this.urlService.localUrl + this.urlService.alertUrl, { street_id: street_id }, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    SmsService.prototype.sendMassMsg = function (msg) {
        return this.http.post(this.urlService.localUrl + this.urlService.massMessagingUrl, { msg: msg }, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    SmsService.prototype.errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Sorry, something went wrong');
    };
    return SmsService;
}());
SmsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__users_url_service__["a" /* UsersUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_url_service__["a" /* UsersUrlService */]) === "function" && _b || Object])
], SmsService);

var _a, _b;
//# sourceMappingURL=sms.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/streets-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreetsUrlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StreetsUrlService = (function () {
    function StreetsUrlService() {
        this.apiUrl = 'http://twaamtaro.org/api/v1/';
        this.localUrl = 'http://localhost:3000/api/v1/';
        this.streetsUrl = 'streets';
        this.streetRanksUrl = 'drains/ranking';
    }
    return StreetsUrlService;
}());
StreetsUrlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StreetsUrlService);

//# sourceMappingURL=streets-url.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/streets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__streets_url_service__ = __webpack_require__("../../../../../src/app/core/streets-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StreetService = (function () {
    function StreetService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Token token="gM7TM10gfRFZBlkNNcqg9A", email="example-2@twaamtaro.org"', 'Content-Type': ' ' });
    }
    StreetService.prototype.getStreets = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.streetsUrl, { headers: this.headers })
            .map(function (response) { return response.json().streets; })
            .catch(this.errorHandler);
    };
    StreetService.prototype.getStreet = function (id) {
        return this.getStreets()
            .map(function (streets) { return streets.find(function (street) { return street.id === id; }); })
            .catch(this.errorHandler);
    };
    StreetService.prototype.getStreetName = function (id) {
        var _this = this;
        return this.getStreets()
            .map(function (streets) {
            return streets.find(function (street) {
                street.id === id;
                _this.streetName = street.street_name;
                return _this.streetName;
            });
        })
            .catch(this.errorHandler);
    };
    StreetService.prototype.errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Sorry, something went wrong');
    };
    return StreetService;
}());
StreetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__streets_url_service__["a" /* StreetsUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__streets_url_service__["a" /* StreetsUrlService */]) === "function" && _b || Object])
], StreetService);

var _a, _b;
//# sourceMappingURL=streets.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/user-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSearchService = (function () {
    function UserSearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Token token="gM7TM10gfRFZBlkNNcqg9A", email="example-2@twaamtaro.org"' });
    }
    UserSearchService.prototype.search = function (searchkey) {
        return this.http
            .get("http://twaamtaro.org/api/v1/users/?first_name=" + searchkey, { headers: this.headers })
            .map(function (response) { return response.json().user.data; });
    };
    return UserSearchService;
}());
UserSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserSearchService);

var _a;
//# sourceMappingURL=user-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/user.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreetVEOPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserStreetPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StreetVEOPipe = (function () {
    function StreetVEOPipe() {
    }
    StreetVEOPipe.prototype.transform = function (users) {
        return users.filter(function (user) { return user.role == 2; });
    };
    return StreetVEOPipe;
}());
StreetVEOPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'streetVEO' })
], StreetVEOPipe);

var UserStreetPipe = (function () {
    function UserStreetPipe() {
    }
    UserStreetPipe.prototype.transform = function (users) {
        return users.filter(function (user) { return user.street_id == 2; });
    };
    return UserStreetPipe;
}());
UserStreetPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'userStreet' })
], UserStreetPipe);

//# sourceMappingURL=user.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_url_service__ = __webpack_require__("../../../../../src/app/core/users-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Token token="gM7TM10gfRFZBlkNNcqg9A", email="example-2@twaamtaro.org"', 'Content-Type': ' ' });
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.urlService.apiUrl + this.urlService.usersUrl, { headers: this.headers })
            .map(function (response) { return response.json().users; })
            .catch(this.errorHandler);
    };
    UserService.prototype.getUser = function (id) {
        return this.getUsers()
            .map(function (users) { return users.find(function (user) { return user.id === id; }); })
            .catch(this.errorHandler);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.urlService.localUrl + this.urlService.usersUrl, user)
            .map(function (response) { return response.json().users; })
            .catch(this.errorHandler);
    };
    UserService.prototype.alertLeader = function (street_id) {
        return this.http.post(this.urlService.localUrl + this.urlService.alertUrl, { street_id: street_id }, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    UserService.prototype.getLeaderRequests = function () {
        var _this = this;
        return this.http.get(this.urlService.localUrl + this.urlService.leaderRequestsUrl, { headers: this.headers })
            .map(function (res) {
            _this.leaderRequests = res.json().leaders;
            _this.totalRequests = _this.leaderRequests.length;
        })
            .catch(this.errorHandler);
    };
    UserService.prototype.verifyLeader = function (user_id) {
        var _this = this;
        return this.http.post(this.urlService.localUrl + this.urlService.verifyUrl, { user_id: user_id }, { headers: this.headers })
            .map(function (res) {
            _this.verifyResponse = res.json();
        })
            .catch(this.errorHandler);
    };
    UserService.prototype.errorHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Sorry, something went wrong');
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__users_url_service__["a" /* UsersUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_url_service__["a" /* UsersUrlService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/users-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersUrlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersUrlService = (function () {
    function UsersUrlService() {
        this.apiUrl = 'http://twaamtaro.org/api/v1/';
        this.localUrl = 'http://localhost:3000/api/v1/';
        this.usersUrl = 'users/';
        this.alertUrl = 'users/remind';
        this.verifyUrl = 'users/verify';
        this.leaderRequestsUrl = 'users/new_leaders';
        this.registerUserUrl = 'users/';
        this.massMessagingUrl = '';
    }
    return UsersUrlService;
}());
UsersUrlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UsersUrlService);

//# sourceMappingURL=users-url.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/admin/admin-routing/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("../../../../../src/app/shared/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/shared/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*import { DrainListComponent } from './../../shared/drains/all-drains/all-drains.component';
import { CleanDrainComponent } from './../../shared/drains/clean-drain/clean-drain.component';
import { DirtyDrainComponent } from './../../shared/drains/dirty-drain/dirty-drain.component';
import { FilterDrainsComponent } from './../../shared/drains/filter-drains/filter-drains.component';
import { HelpDrainComponent } from './../../shared/drains/help-drain/help-drain.component';

import { ReportComponent } from './../../shared/reports/reports.component';
import { RanksComponent } from './../../shared/ranks/ranks.component';
import { NotFoundComponent } from './../../shared/not-found/not-found.component';
import { UsersComponent } from './../../shared/users/users-list/users.component';
import { UserDetailComponent } from './../../shared/users/user-detail/user-detail.component';
*/
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: 'admin',
                    component: __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]],
                    children: [
                        {
                            path: '',
                            redirectTo: 'dashboard',
                            pathMatch: 'full'
                        },
                        {
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]
                        },
                    ],
                },
            ]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import 'assets/css/w3.css';*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"w3-row\">\n        <div  class=\"content-wrapper\" >\n            <div class=\"content\">\n                <div class=\"box w3-card-2 w3-border w3-border-teal w3-padding\" >\n                    <div class=\"box-header with-border\">\n                        <h3 class=\" w3-center\"> {{admin}}</h3>\n                    </div>\n\n                 </div>\n                </div>\n    </div>\n    <!-- /.row  -->\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(_translate) {
        this._translate = _translate;
        this.admin = this._translate.instant('admin');
    }
    AdminComponent.prototype.closelogin = function () {
        document.getElementById('loginmodal').style.display = 'none';
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.closelogin();
    };
    AdminComponent.prototype.ngOnDestroy = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/shared/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/admin/admin.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__transilate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__transilate_translate_service__["a" /* TranslateService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_component__ = __webpack_require__("../../../../../src/app/shared/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_google_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_routing_admin_routing_module__ = __webpack_require__("../../../../../src/app/shared/admin/admin-routing/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transilate_translation_translation_component__ = __webpack_require__("../../../../../src/app/transilate/translation/translation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__admin_routing_admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_google_charts__["Ng2GoogleChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__admin_component__["a" /* AdminComponent */],
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__core_drains_service__["a" /* DrainsService */],
            __WEBPACK_IMPORTED_MODULE_7__core_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__transilate_translation_translation_component__["a" /* TRANSLATION_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_8__transilate_translate_service__["a" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
        ],
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\n    \n    border-radius: 0px; \n    border-top: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n    <div class=\"content\">\n        <div class=\"box w3-card-2 w3-padding\" >\n            <div class=\"box-header with-border\">\n                <h3 class=\" w3-center\">{{ 'title' | translate }}</h3>\n            </div>\n            <!-- /.box-header -->\n\n          <div class=\"w3-row\">\n                <div id=\"error\"><h4></h4></div>\n          </div>\n\n          <div class=\"box-body\">\n            <div class=\"w3-row\">\n              <div class=\"w3-col l6 s12\">\n                <google-chart [data]=\"adoptedPieChart\" ></google-chart>\n              </div>\n              <div class=\"w3-col l6 s12\">\n                <google-chart [data]=\"pieChartData\" ></google-chart>\n              </div>\n               <!-- Chart Canvas -->\n\n            </div>\n          </div>\n        </div>\n        <!-- /.box -->\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(drainService, ngProgress, _translate) {
        this.drainService = drainService;
        this.ngProgress = ngProgress;
        this._translate = _translate;
    }
    DashboardComponent.prototype.drainData = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getDrainData()
            .subscribe(function (data) {
            _this.draindata = _this.drainService.drainData;
            _this.pieChartData = {
                chartType: 'PieChart',
                dataTable: [
                    ['Cleanness Feedback', 'Ratio'],
                    [_this._translate.instant('clean'), _this.draindata.cleaned],
                    [_this._translate.instant('dirty'), _this.draindata.uncleaned],
                    [_this._translate.instant('need_help'), _this.draindata.need_help],
                ],
                options: {
                    'title': _this._translate.instant('title_dashboard'),
                    pieHole: 0.3,
                    height: 500,
                    colors: ['#5cb85c', '#eea236', '#6495ed']
                },
            };
            _this.adoptedPieChart = {
                chartType: 'PieChart',
                dataTable: [
                    ['Drain Adoption', 'Ratio'],
                    [_this._translate.instant('adopted'), _this.draindata.adopted],
                    [_this._translate.instant('not_adopted'), _this.draindata.not_adopted],
                ],
                options: {
                    'title': _this._translate.instant('title_drains'),
                    pieHole: 0.3,
                    height: 500,
                    colors: ['#964f8f', 'grey']
                },
            };
        });
        this.ngProgress.done();
    };
    DashboardComponent.prototype.refreshText = function () {
        this.drainData();
    };
    DashboardComponent.prototype.subscribeToLangChanged = function () {
        var _this = this;
        return this._translate.onLangChanged.subscribe(function (x) { return _this.refreshText(); });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.subscribeToLangChanged();
        this.drainData();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/shared/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__transilate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__transilate_translate_service__["a" /* TranslateService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/all-drains/all-drains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w3-center{\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/drains/all-drains/all-drains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n\t<div class=\"content\">\n\t<div class=\"box w3-card-2 w3-border\" >\n\t\t<div class=\"box-header with-border\">\n\t\t\t<h3 class=\" w3-center\"> {{'all'|translate }}</h3>\t\t</div>\n\t\t<!-- /.box-header -->\n\t\t<div class=\"box-body w3-padding\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- templates -->\n\t\t\t\t<div >\n\t\t<div id=\"error\"><h4></h4></div>\n\t\t<table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n\t\t  <thead>\n\t\t\t<tr class=\"w3-light-grey w3-border-bottom\" >\n\t\t\t  <th>{{'id' | translate}}</th>\n\t\t\t  <th>{{'name'| translate}}</th>\n\t\t\t  <th>{{'address' | translate}}</th>\n\t\t\t  <th>{{'claimed' | translate}}</th>\n\t\t\t</tr>\n\t\t  </thead>\n\t\t  <tbody>\n\t\t\t<tr *ngFor=\"let drain of pagedDrains\">\n\t\t\t  <td><a href=\"#\">{{drain.gid}}</a></td>\n\t\t\t  <td>{{drain.name}}</td>\n\t\t\t  <td>{{drain.address}}</td>\n\t\t\t  <td>\n\t\t\t\t\t<span *ngIf=\"drain.claims_count === 0; else claimedYes\">{{'no_status' | translate}}</span>\n\t\t\t\t\t<ng-template #claimedYes>\n\t\t\t\t\t\t<span>{{'yes_status' | translate}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</td>\n\t\t\t</tr>\n\n\t\t  </tbody>\n\t\t</table>\n\t\t<div class=\"w3-center\">\n\t\t\t<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t<a (click)=\"setPage(1)\">{{'first'| translate}}</a>\n\t\t\t\t</li>\n\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t<a (click)=\"setPage(pager.currentPage - 1)\">{{'previous' | translate}}</a>\n\t\t\t\t</li>\n\t\t\t\t<li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n\t\t\t\t\t<a (click)=\"setPage(page)\">{{page}}</a>\n\t\t\t\t</li>\n\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t<a (click)=\"setPage(pager.currentPage + 1)\">{{'next' |translate}}</a>\n\t\t\t\t</li>\n\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t<a (click)=\"setPage(pager.totalPages)\">{{'last'| translate}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t  </div>\n\t</div>\n</div>\n</div>\n<!-- ./box-body -->\n</div>\n<!-- /.box -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/drains/all-drains/all-drains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_paging_service__ = __webpack_require__("../../../../../src/app/core/paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrainListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrainListComponent = (function () {
    function DrainListComponent(drainService, pagerService, ngProgress) {
        this.drainService = drainService;
        this.pagerService = pagerService;
        this.ngProgress = ngProgress;
        this.title = 'All Drains';
        this.pager = {}; // pager object
    }
    DrainListComponent.prototype.getDrains = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getDrains()
            .subscribe(function (drains) {
            _this.drains = drains;
            _this.setPage(1);
            _this.ngProgress.done();
        });
    };
    DrainListComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.drains.length, page, 20);
        // get current page of items
        this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    DrainListComponent.prototype.ngOnInit = function () {
        this.getDrains();
    };
    return DrainListComponent;
}());
DrainListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drain-list',
        template: __webpack_require__("../../../../../src/app/shared/drains/all-drains/all-drains.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/drains/all-drains/all-drains.component.css")],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_paging_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_paging_service__["a" /* PagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object])
], DrainListComponent);

var _a, _b, _c;
//# sourceMappingURL=all-drains.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/all-drains/all-drains.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrainListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DrainListModule = (function () {
    function DrainListModule() {
    }
    return DrainListModule;
}());
DrainListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        exports: [],
        declarations: [],
        providers: [],
        schemas: []
    })
], DrainListModule);

//# sourceMappingURL=all-drains.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/clean-drain/clean-drain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w3-center{\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/drains/clean-drain/clean-drain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n\t<div class=\"content\">\n\t\t<div class=\"box w3-card-2 w3-border\" >\n\t\t<div class=\"box-header with-border\">\n\t\t\t<h3 class=\" w3-center\">{{ 'clean' | translate }}</h3>\n\t\t</div>\n\t\t<!-- /.box-header -->\n\t\t<div class=\"box-body w3-padding\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- templates -->\n\t\t\t\t<div id=\"error\"><h4>{{ErrMsg}}</h4></div>\n\n\t\t\t\t\t<table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"w3-light-grey w3-border-bottom\" >\n\t\t\t\t\t\t\t\t<th>{{'id' | translate}}</th>\n\t\t\t\t\t\t\t\t<th>{{'name'| translate}}</th>\n\t\t\t\t\t\t\t\t<th>{{'address' | translate}}</th>\n\t\t\t\t\t\t\t\t<th>{{'claimed' | translate}}</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let drain of pagedDrains\">\n\t\t\t\t\t\t\t\t<td><a href=\"\">{{drain.gid}}</a></td>\n\t\t\t\t\t\t\t\t<td>{{drain.name}}</td>\n\t\t\t\t\t\t\t\t<td>{{drain.address}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"drain.claims_count === 0; else claimedYes\">{{'no_status'| translate}}</span>\n\t\t\t\t\t\t\t\t\t<ng-template #claimedYes>\n\t\t\t\t\t\t\t\t\t\t<span>{{'yes_status'| translate}}</span>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div class=\"w3-center\">\n\t\t\t\t\t\t\t<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t<a (click)=\"setPage(1)\">{{'first' | translate}}</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t<a (click)=\"setPage(pager.currentPage - 1)\">{{'previous'| translate}}</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n\t\t\t\t\t\t\t\t<a (click)=\"setPage(page)\">{{page}}</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t<a (click)=\"setPage(pager.currentPage + 1)\">{{'next' | translate}}</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t<a (click)=\"setPage(pager.totalPages)\">{{'last' | translate}}</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<!-- ./box-body -->\n\t\t</div>\n<!-- /.box -->\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/drains/clean-drain/clean-drain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_paging_service__ = __webpack_require__("../../../../../src/app/core/paging.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleanDrainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CleanDrainComponent = (function () {
    function CleanDrainComponent(drainService, pagerService, ngProgress) {
        this.drainService = drainService;
        this.pagerService = pagerService;
        this.ngProgress = ngProgress;
        this.title = 'Clean Drains';
        this.cleared = true;
        this.pager = {}; // pager object
    }
    CleanDrainComponent.prototype.cleanDrains = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getCleanDrains()
            .subscribe(function (drains) {
            _this.drains = drains;
            _this.setPage(1);
            (function (resError) { return _this.ErrMsg = resError; });
            _this.ngProgress.done();
        });
    };
    CleanDrainComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.drains.length, page, 50);
        // get current page of drains
        this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    CleanDrainComponent.prototype.ngOnInit = function () {
        this.cleanDrains();
    };
    return CleanDrainComponent;
}());
CleanDrainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clean-drain',
        template: __webpack_require__("../../../../../src/app/shared/drains/clean-drain/clean-drain.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/drains/clean-drain/clean-drain.component.css")],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_paging_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_paging_service__["a" /* PagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object])
], CleanDrainComponent);

var _a, _b, _c;
//# sourceMappingURL=clean-drain.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/clean-drain/clean-drain.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleanDrainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CleanDrainModule = (function () {
    function CleanDrainModule() {
    }
    return CleanDrainModule;
}());
CleanDrainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        exports: [],
        declarations: [],
        providers: [],
        schemas: []
    })
], CleanDrainModule);

//# sourceMappingURL=clean-drain.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w3-center{\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n\t<div class=\"content\">\n\t\t<div class=\"box w3-card-2 w3-border\" >\n\t\t\t<div class=\"box-header with-border\">\n\t\t\t\t<h3 class=\" w3-center\">{{ 'dirty'|translate }}</h3>\n\t\t\t</div>\n\t\t\t<!-- /.box-header -->\n\t\t\t<div class=\"box-body w3-padding\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<!-- templates -->\n\t\t\t\t\t<div id=\"error\"><h4></h4></div>\n\t\t\t\t\t<table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr class=\"w3-light-grey w3-border-bottom\" >\n              <th>{{'id' | translate}}</th>\n              <th>{{'name'| translate}}</th>\n              <th>{{'address' | translate}}</th>\n              <th>{{'claimed' | translate}}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let drain of pagedDrains\">\n\t\t\t\t\t\t\t<td><a href=\"#\">{{drain.gid}}</a></td>\n\t\t\t\t\t\t\t<td>{{drain.name}}</td>\n\t\t\t\t\t\t\t<td>{{drain.address}}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span *ngIf=\"drain.claims_count === 0; else claimedYes\">{{'no_status'| translate}}</span>\n\t\t\t\t\t\t\t\t<ng-template #claimedYes>\n\t\t\t\t\t\t\t\t\t<span>{{'yes_status'| translate}}</span>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t<!-- pager -->\n\t\t\t<div class=\"w3-center\">\n\t\t\t\t<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t<a (click)=\"setPage(1)\">{{'first'| translate}}</a>\n\t\t\t\t  </li>\n\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t<a (click)=\"setPage(pager.currentPage - 1)\">{{'previous'| translate}}</a>\n\t\t\t\t  </li>\n\t\t\t\t  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n\t\t\t\t\t<a (click)=\"setPage(page)\">{{page}}</a>\n\t\t\t\t  </li>\n\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t<a (click)=\"setPage(pager.currentPage + 1)\">{{'next'| translate}}</a>\n\t\t\t\t  </li>\n\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t<a (click)=\"setPage(pager.totalPages)\">{{'last'| translate}}</a>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- ./box-body -->\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_paging_service__ = __webpack_require__("../../../../../src/app/core/paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirtyDrainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DirtyDrainComponent = (function () {
    function DirtyDrainComponent(drainService, pagerService, ngProgress) {
        this.drainService = drainService;
        this.pagerService = pagerService;
        this.ngProgress = ngProgress;
        this.title = 'Dirty Drains';
        this.cleared = true;
        this.pager = {}; // pager object
    }
    DirtyDrainComponent.prototype.getDrains = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getDirtyDrains()
            .subscribe(function (drains) {
            _this.drains = drains;
            _this.setPage(1);
            _this.ngProgress.done();
        });
    };
    DirtyDrainComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.drains.length, page, 50);
        // get current page of drains
        this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    DirtyDrainComponent.prototype.ngOnInit = function () {
        this.getDrains();
    };
    return DirtyDrainComponent;
}());
DirtyDrainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dirty-drain',
        template: __webpack_require__("../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.css")],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_paging_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_paging_service__["a" /* PagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object])
], DirtyDrainComponent);

var _a, _b, _c;
//# sourceMappingURL=dirty-drain.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/dirty-drain/dirty-drain.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirtyDrainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirtyDrainModule = (function () {
    function DirtyDrainModule() {
    }
    return DirtyDrainModule;
}());
DirtyDrainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        exports: [],
        declarations: [],
        providers: [],
        schemas: []
    })
], DirtyDrainModule);

//# sourceMappingURL=dirty-drain.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/filter-drains/filter-drains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/drains/filter-drains/filter-drains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n    <div class=\"content\">\n    <div class=\"box w3-card-2 w3-border\" >\n        <div class=\"box-header with-border\">\n            <h3 class=\" w3-center\"> {{ 'choose_address' |translate }}</h3>\n        </div>\n        <!-- /.box-header -->\n\n        <div class=\"box-body\">\n            <label>{{'drain_filter' | translate}}: </label>\n                <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSubmit()\">\n                    <select formControlName=\"address\" class=\"w3-select\">\n                        <option >{{ 'choose_address' |translate }}</option>\n                        <option ng-value=\"Kigogo\">Kigogo</option>\n                        <option ng-value=\"Tabata\">Tabata</option>\n                        <option ng-value=\"Mwananyamala\" >Mwananyamala</option>\n                        <option ng-value=\"Hananasif\">Hananasif</option>\n                        <!--option *ngFor=\"let drain of drains\" ng-value=\"address\">{{drain.address}}</option-->\n                    </select>\n                <button class=\"w3-right w3-btn w3-blue\" type=\"submit\">{{'submit' | translate}}</button>\n                </form>\n\n            <div class=\"row\">\n                <div id=\"error\"><h4>{{ErrMsg}}</h4></div>\n            </div>\n        </div>\n     </div>\n        <!-- /.box -->\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/drains/filter-drains/filter-drains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDrainsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterDrainsComponent = (function () {
    function FilterDrainsComponent(drainService) {
        this.drainService = drainService;
        this.title = 'Choose Address';
    }
    FilterDrainsComponent.prototype.ngOnInit = function () {
        this.filterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]()
        });
    };
    FilterDrainsComponent.prototype.onSubmit = function () {
        console.log(this.filterForm.value);
    };
    return FilterDrainsComponent;
}());
FilterDrainsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clean-drain',
        template: __webpack_require__("../../../../../src/app/shared/drains/filter-drains/filter-drains.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/drains/filter-drains/filter-drains.component.css")],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object])
], FilterDrainsComponent);

var _a;
//# sourceMappingURL=filter-drains.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/help-drain/help-drain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.w3-center{\n  text-transform: uppercase;\n}\n.w3-modal-content {\n    margin-left: 45%;\n    width: 400px;\n    top: 180px;\n}\n\n\n@media(max-width: 768px){\n    .w3-modal-content {\n        width: 500px;\n        margin: auto;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/drains/help-drain/help-drain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n\t<div class=\"content\">\n\t<div class=\"box w3-card-2 w3-border\" >\n\t\t<div class=\"box-header with-border\">\n\t\t\t<h3 class=\" w3-center\">{{ 'need_help_report' |translate }}</h3>\n\n\t\t\t<div class=\"box-tools pull-right\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n\t\t\t</div>\n\t\t</div>\n\n\t<!--Desktop Filters -->\n\t<div class=\"w3-center w3-padding\">\n\t\t<button class=\"w3-btn w3-black w3-left\" (click)=\"showFilters()\">{{'filter' | translate}}</button>\n      <ul class=\"w3-hide-small w3-left\">\n          <li class=\"w3-btn w3-white w3-border w3-border-blue\" (click)=\"getFilteredDrains()\">{{'all_button'| translate}}</li>\n          <li class=\"w3-btn w3-white w3-border w3-border-red\" (click)=\"getFilteredDrains('submitted')\">{{'submitted'| translate}}</li>\n          <li class=\"w3-btn w3-white w3-border w3-border-orange\" (click)=\"getFilteredDrains('processing')\">{{'progress' | translate}}</li>\n          <li class=\"w3-btn w3-white w3-border w3-border-green\" (click)=\"getFilteredDrains('done')\">{{'done'| translate}}</li>\n          <li class=\"w3-btn w3-white w3-border w3-border-grey\" (click)=\"getFilteredDrains('archived')\">{{'archive'| translate}}</li>\n      </ul>\n\t\t</div>\n\t<!-- End Desktop Filters -->\n\n\t\t<!-- Mobile Filters -->\n\t\t\t<div>\n\t\t\t\t<div id=\"mobileFilters\" class=\"w3-dropdown-content w3-white w3-card-4 w3-center\">\n\t\t\t\t\t<ul class=\"w3-ul w3-hide-large w3-hide-medium\">\n\t\t\t\t\t\t<li class=\"w3-border w3-border-blue\">{{'all_button'| translate}}</li>\n\t\t\t\t\t\t<li class=\"w3-border w3-border-red\">{{'submitted'| translate}}</li>\n\t\t\t\t\t\t<li class=\"w3-border w3-border-orange\">{{'progress' | translate}}</li>\n\t\t\t\t\t\t<li class=\"w3-border w3-border-green\">{{'done'| translate}}</li>\n\t\t\t\t\t\t<li class=\"w3-border w3-border-grey\">{{'archive'| translate}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<!-- End Mobile Filters-->\n\n\t\t<!-- /.box-header -->\n\t\t<div class=\"box-body w3-padding\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- templates -->\n\t\t\t\t<div id=\"error\"><h4></h4></div>\n\t\t\t\t<table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-light-grey w3-border-bottom\" >\n            <th>{{'id' | translate}}</th>\n            <th>{{'name'| translate}}</th>\n            <th>{{'address' | translate}}</th>\n            <!--<th>{{'claimed' | translate}}</th>-->\n\t\t\t\t\t\t<th>{{'report_made' | translate}}</th>\n            <th  *ngIf=\"authService.isLoggedIn()\">{{'leader'| translate}}</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let drain of pagedDrains\">\n            <td><a (click)=\"helpmodal(drain.gid, drain.need_help_category.category_name, drain.help_needed)\" >{{drain.gid}}</a></td>\n            <td>{{drain.need_help_category.category_name}}</td>\n            <td>{{drain.user.street.street_name}}</td>\n            <td>{{drain.created_at | date }}</td>\n            <td  *ngIf=\"authService.isLoggedIn()\">\n              {{drain.user.first_name}} {{drain.user.last_name}}</td>\n          </tr>\n\n            <div id=\"helpdetails\" class=\"w3-modal w3-margin-top\">\n              <div class=\"w3-modal-content w3-card-4\">\n                <header class=\"w3-container w3-theme-d3 w3-center\">\n\t\t\t\t\t\t\t\t<span (click)=\"closemodal()\"\n                      class=\"w3-button w3-display-topright w3-padding w3-hover-teal\">&times;</span>\n                  <h3>Drain No. {{ thedrain\t}} Help Details</h3>\n                </header>\n                <div class=\"w3-container w3-padding\">\n                  <p><strong class=\"w3-padding-right\">Help Category: </strong>{{ helpCategory }}</p>\n                  <p><strong class=\"w3-padding-right\">Extra Details: </strong>{{ helpNeeded }}</p>\n                </div>\n              </div>\n            </div>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"w3-center\">\n\t\t\t\t\t<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\t\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t<a (click)=\"setPage(1)\">{{'first' | translate}}</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t<a (click)=\"setPage(pager.currentPage - 1)\">{{'previous'| translate}}</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n\t\t\t\t\t\t<a (click)=\"setPage(page)\">{{page}}</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t<a (click)=\"setPage(pager.currentPage + 1)\">{{'next'| translate}}</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t<a (click)=\"setPage(pager.totalPages)\">{{'last'| translate}}</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- ./box-body -->\n</div>\n<!-- /.box -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/drains/help-drain/help-drain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_paging_service__ = __webpack_require__("../../../../../src/app/core/paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpDrainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpDrainComponent = (function () {
    function HelpDrainComponent(drainService, authService, pagerService, ngProgress) {
        this.drainService = drainService;
        this.authService = authService;
        this.pagerService = pagerService;
        this.ngProgress = ngProgress;
        this.title = 'Drains In Need of Help';
        this.need_help = true;
        this.pager = {}; // pager object
    }
    HelpDrainComponent.prototype.getDuration = function (d) {
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        console.log(d);
        this.dateCreated = new Date("d");
        console.log(this.dateCreated);
        this.daysGone = Math.floor((this.today - this.dateCreated) / days);
        console.log(this.daysGone);
    };
    //Fetches all drains in need of help and their details
    HelpDrainComponent.prototype.getFilteredDrains = function (status) {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getFilteredHelp(status)
            .subscribe(function (drains) {
            _this.drains = _this.drainService.helpDrains;
            _this.setPage(1);
            _this.ngProgress.done();
        });
    };
    HelpDrainComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // Get pager object from service
        this.pager = this.pagerService.getPager(this.drains.length, page, 50);
        // Get current page of items
        this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //Get extra details of the requested help
    HelpDrainComponent.prototype.helpmodal = function (gid, category, help) {
        this.thedrain = gid;
        this.helpCategory = category;
        this.helpNeeded = help;
        document.getElementById('helpdetails').style.display = 'block';
    };
    //Close the helpmodal by clicking anywhere else in the page
    HelpDrainComponent.prototype.closedetails = function () {
        var modal = document.getElementById('helpdetails');
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    //Close helpmodal by clicking the close button
    HelpDrainComponent.prototype.closemodal = function () {
        document.getElementById('helpdetails').style.display = 'none';
    };
    HelpDrainComponent.prototype.showFilters = function () {
        var x = document.getElementById("mobileFilters");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    };
    HelpDrainComponent.prototype.isLoggedIn = function () {
        this.loggedIn = this.authService.isLoggedIn();
        console.log(this.loggedIn);
    };
    HelpDrainComponent.prototype.ngOnInit = function () {
        this.getFilteredDrains();
        this.closedetails();
        this.closemodal();
    };
    return HelpDrainComponent;
}());
HelpDrainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'help-drains',
        template: __webpack_require__("../../../../../src/app/shared/drains/help-drain/help-drain.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/drains/help-drain/help-drain.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_paging_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_paging_service__["a" /* PagerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_progressbar__["b" /* NgProgress */]) === "function" && _d || Object])
], HelpDrainComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=help-drain.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/help-drain/help-drain.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpDrainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HelpDrainModule = (function () {
    function HelpDrainModule() {
    }
    return HelpDrainModule;
}());
HelpDrainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        exports: [],
        declarations: [],
        providers: [],
        schemas: []
    })
], HelpDrainModule);

//# sourceMappingURL=help-drain.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w3-center{\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n    <div class=\"content\">\n      <div class=\"box w3-card-2 w3-border\" >\n        <div class=\"box-header with-border\">\n          <h3 class=\" w3-center\">{{ 'unknown'| translate }}</h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body w3-padding\">\n          <div class=\"row\">\n            <!-- templates -->\n            <div id=\"error\"><h4>{{ErrMsg}}</h4></div>\n            <table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n              <thead>\n              <tr class=\"w3-light-grey w3-border-bottom\" >\n                <th>{{'id' | translate}}</th>\n                <th>{{'name'| translate}}</th>\n                <th>{{'address' | translate}}</th>\n                <th>{{'claimed' | translate}}</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let drain of pagedDrains\">\n                <td><a href=\"#\">{{drain.gid}}</a></td>\n                <td>{{drain.name}}</td>\n                <td>{{drain.address}}</td>\n                <td>\n                  <span *ngIf=\"drain.claims_count === 0; else claimedYes\">{{'no_status' | translate}}</span>\n                  <ng-template #claimedYes>\n                    <span>{{'yes_status'| translate}}</span>\n                  </ng-template>\n                </td>\n              </tr>\n\n              </tbody>\n            </table>\n            <div class=\"w3-center\">\n              <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a (click)=\"setPage(1)\">{{'first'| translate}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a (click)=\"setPage(pager.currentPage - 1)\">{{'previous'| translate}}</a>\n                </li>\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                  <a (click)=\"setPage(page)\">{{page}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a (click)=\"setPage(pager.currentPage + 1)\">{{'next'| translate}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a (click)=\"setPage(pager.totalPages)\">{{'last'| translate}}</a>\n                </li>\n              </ul>\n            </div>\n        </div>\n      </div>\n    </div>\n    <!-- ./box-body -->\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_paging_service__ = __webpack_require__("../../../../../src/app/core/paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnknownDrainsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnknownDrainsComponent = (function () {
    function UnknownDrainsComponent(drainService, pagerService, ngProgress) {
        this.drainService = drainService;
        this.pagerService = pagerService;
        this.ngProgress = ngProgress;
        this.title = 'Unknown Drains';
        this.pager = {}; // pager object
    }
    UnknownDrainsComponent.prototype.unkownDrains = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getUnknownDrains()
            .subscribe(function (drains) {
            _this.drains = drains;
            _this.setPage(1);
            _this.ngProgress.done();
        });
    };
    UnknownDrainsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.drains.length, page, 20);
        // get current page of items
        this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    UnknownDrainsComponent.prototype.ngOnInit = function () {
        this.unkownDrains();
    };
    return UnknownDrainsComponent;
}());
UnknownDrainsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-unknown-drains',
        template: __webpack_require__("../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_paging_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_paging_service__["a" /* PagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object])
], UnknownDrainsComponent);

var _a, _b, _c;
//# sourceMappingURL=unknown-drains.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n  </div>\n  <strong>{{'copyright'| translate}} &copy; 2017 <a href=\"http://twaamtaro.org\">Twaa Mtaro</a>.</strong> <h5>{{'all-right'| translate}}</h5>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-default {\n  background-color: transparent;\n  color: #ffffff;\n}\n#langlink {\n  color: #060505;\n  text-decoration: underline;\n  bottom: 0px;\n  cursor: pointer;\n}\n.notifications {\n  position: absolute;\n  top: 5px;\n}\n@media (min-width: 768px) {\n  .navbar-nav > li > a {\n     padding-top: 10px;\n    padding-bottom: 15px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a routerLink=\"home\" class=\"logo w3-theme-d3\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>T</b>M</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Twaa</b>Mtaro</span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top w3-theme-d1\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n\n        <li class=\"user user-menu\">\n              <div class=\" w3-padding\" *ngIf=\"authService.isLoggedIn(); else signIN\">\n                <a (click)=\"logout()\" class=\"w3-right btn btn-default btn-flat\">{{'signout'| translate}}</a>\n                <a routerLink=\"verify\" class=\"w3-right w3-padding-right\"><span class=\"w3-badge w3-red notifications\">{{requests}}</span><i class=\"w3-text-white fa fa-bell fa-2x\" aria-hidden=\"true\"></i></a>\n             </div>\n              <ng-template #signIN>\n              <div class=\" w3-padding\">\n                <div class=\"pull-right w3-padding\">\n                  <a (click)=\"registerbox()\"  class=\"btn btn-default btn-flat\">{{'register'| translate}}</a>\n                </div>\n                <div class=\"pull-right w3-padding\" >\n                  <a (click)=\"loginbox() \"  class=\"btn btn-default btn-flat\">{{'signin' | translate}}</a>\n                </div>\n              </div>\n              </ng-template>\n        </li>\n\n\n        <li>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <app-login></app-login>\n  <app-register></app-register>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
    }
    HeaderComponent.prototype.loginbox = function () {
        document.getElementById('loginmodal').style.display = 'block';
    };
    HeaderComponent.prototype.registerbox = function () {
        document.getElementById('registermodal').style.display = 'block';
    };
    HeaderComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        this.authService.logout();
        this.router.navigateByUrl('/');
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        this.loggedIn = this.authService.isLoggedIn();
        return this.loggedIn;
    };
    HeaderComponent.prototype.leaderReq = function () {
        var _this = this;
        this.userService.getLeaderRequests()
            .subscribe(function (res) {
            _this.requests = _this.userService.totalRequests;
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn();
        this.leaderReq();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
        ],
        declarations: []
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/left-side/left-side.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li a > span{\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.skin-blue .sidebar a {\n  color: white;\n}\n.pull-right.w3-padding{\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/left-side/left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- search form -->\n    <app-user-search></app-user-search>\n    <!-- /.search form -->\n    <div class=\"pull-right w3-padding\">\n      <a id=\"langlink\" *ngFor=\"let lang of supportedLangs\" (click)=\"selectLang(lang.value)\" class=\"w3-padding-right\" [class.w3-text-white]=\"isCurrentLang(lang.value)\">\n       {{ lang.display }} \n      </a>\n    </div>\n    <div *ngIf=\"authService.isLoggedIn(); else noUser\" class=\"w3-padding w3-text-white\">\n      <h4>Welcome <strong>{{ loggedUser }} </strong></h4>\n    </div>\n    <ng-template #noUser>\n      <div class=\" w3-padding w3-text-white\">\n        <h4>Welcome</h4>\n      </div>\n    </ng-template>\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\">\n      <!--li class=\"header\">MAIN NAVIGATION</li-->\n      <li>\n        <a routerLink=\"home\"><i class=\"fa fa-dashboard\"></i> <span>{{ 'dashboard'| translate}}</span></a>\n      </li>\n      <li>\n        <a href=\"http://www.twaamtaro.org\" target=\"_blank\">\n            <i class=\"fa fa-globe\"></i> <span>{{'map' | translate}}</span>\n          </a>\n      </li>\n      <!-- If user is logged in   -->\n      <li *ngIf=\"authService.isLoggedIn()\" >\n          <a routerLink=\"notify-citizens\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span>{{ 'notification' | translate}}</span>\n          </a>\n      </li>\n      <li>\n        <a routerLink=\"ranks\">\n            <i class=\"fa fa-line-chart\"></i> <span> {{'ranks' | translate}} </span>\n          </a>\n      </li>\n      <li>\n        <a routerLink=\"reports\">\n            <i class=\"fa fa-area-chart\"></i> <span>{{'report' | translate}}</span>\n          </a>\n      </li>\n      <li>\n        <a routerLink=\"filter-drains\">\n          <img src=\"assets/img/whitedrain.png\" width=\"25\" height=\"25\">  \n          <i class=\"\"></i> <span>{{'view_drain' | translate}}</span>\n          </a>\n      </li>\n      <li>\n        <a routerLink=\"users\">\n            <i class=\"fa fa-users\"></i> <span>{{ 'citizens' | translate}}</span>\n          </a>\n      </li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/shared/left-side/left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftSideComponent = (function () {
    function LeftSideComponent(authService, _translate) {
        this.authService = authService;
        this._translate = _translate;
        this.loggedUser = localStorage.getItem("user");
    }
    LeftSideComponent.prototype.notifyCitizens = function () {
    };
    LeftSideComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Swahili', value: 'sw' },
        ];
        this.selectLang('sw');
        this.subscribeToLangChanged();
        // set language
        this._translate.setDefaultLang('en');
        this._translate.enableFallback(true);
        this.selectLang('sw');
    };
    LeftSideComponent.prototype.isCurrentLang = function (lang) {
        return lang === this._translate.currentLang;
    };
    LeftSideComponent.prototype.selectLang = function (lang) {
        // set default;
        this._translate.use(lang);
        // this.refreshText(); // remove
    };
    LeftSideComponent.prototype.refreshText = function () {
        this.translatedText = this._translate.instant('all');
    };
    LeftSideComponent.prototype.subscribeToLangChanged = function () {
        var _this = this;
        return this._translate.onLangChanged.subscribe(function (x) { return _this.refreshText(); });
    };
    return LeftSideComponent;
}());
LeftSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-left-side',
        template: __webpack_require__("../../../../../src/app/shared/left-side/left-side.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/left-side/left-side.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__transilate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__transilate_translate_service__["a" /* TranslateService */]) === "function" && _b || Object])
], LeftSideComponent);

var _a, _b;
//# sourceMappingURL=left-side.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginarea { \n    z-index:3;\n    padding-top:100px;\n    position:fixed;\n    left:0;\n    top:0;\n    width:100%;\n    height:100%;\n    overflow:auto;\n    background-color:rgb(0,0,0);\n    background-color:rgba(0,0,0,0.4)\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginmodal\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-card-4 w3-animate-zoom\" style=\"max-width:600px\">\n\n    <div class=\"w3-center\"><br>\n      <span (click)=\"closelogin()\" class=\"w3-button w3-xlarge w3-hover-red w3-display-topright w3-padding\" title=\"Close Modal\">&times;</span>\n\n    </div>\n    <form id=\"loginForm\">\n        <div class=\"w3-section w3-padding\">\n        <label><b>{{'username'| translate}}</b></label>\n        <input class=\"w3-input w3-border w3-margin-bottom\" [(ngModel)]=\"user.sms_number\" name=\"username\" type=\"text\" placeholder=\"Enter Username\" required>\n        <label><b>{{'password'| translate}}</b></label>\n        <input class=\"w3-input w3-border\" [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" placeholder=\"Enter Password\" required>\n        <button (click)=\"login()\" class=\"w3-button w3-block w3-green w3-section w3-padding\" type=\"submit\">{{'login'| translate}}</button>\n        </div>\n    </form>\n    <div class=\"w3-container w3-border-top w3-padding-16 w3-light-grey\">\n      <button (click)=\"closelogin()\" class=\"w3-right w3-btn w3-red\">{{'cancel'| translate}}</button>\n      <!--span class=\"w3-right w3-padding w3-hide-small\">Forgot <a href=\"#\">password?</a></span-->\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_session_service__ = __webpack_require__("../../../../../src/app/core/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, sessionService) {
        this.authService = authService;
        this.router = router;
        this.sessionService = sessionService;
        this.user = { 'sms_number': '', 'password': '' };
    }
    LoginComponent.prototype.closelogin = function () {
        document.getElementById('loginmodal').style.display = 'none';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.user)
            .subscribe(function (res) {
            _this.userData = _this.authService.userdata;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/');
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/shared/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/notification-bar/notification-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n   min-height: auto !important;\n}\n.content {\n    min-height: auto !important;\n}\n.notificaition-wrapper #bar {\n    width:20%;\n}\n\n@media only screen and (max-width: 767px) {\n    .notificaition-wrapper, {\n        margin-left: 0px;\n    }\n    .notification-content {\n        margin-left: 0px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/notification-bar/notification-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" >\n  <!-- Content Header (Page header)-->\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Info boxes -->\n    <div class=\"w3-row\">\n    <div class=\"w3-col l2 m2 s6 w3-padding-right\" id=\"bar\">\n        <a routerLink=\"drain-list\"><div class=\"w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal \" title=\"Click to view all drains\" id=\"alldrain\">\n        <h4>{{'all' | translate}}</h4>\n        <h4 class=\"w3-text-black\" *ngIf=\"alldrains\">{{ alldrains.length }}</h4>\n      </div></a>\n    </div>\n\n    <div class=\"w3-col l2 m2 s6 w3-padding-right\" id=\"bar\">\n      <a routerLink=\"clean-drains\"><div class=\"w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal\"  title=\"Click to view clean drains\" id=\"clearbtn\">\n      <div class=\"w3-clear\"></div><span class=\"w3-right\"><img src=\"assets/img/broom.png\" title=\"Clean Drains\" width=\"20\" height=\"20\"></span>\n        <h4>{{'clean'| translate}}</h4>\n        <h4 class=\"w3-text-black\" *ngIf=\"cleandrains\">{{ cleandrains.length }}</h4>\n      </div></a>\n    </div>\n    <div class=\"w3-col l2 m2 s6 w3-padding-right\" id=\"bar\">\n        <a routerLink=\"dirty-drains\"><div class=\"w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal \" title=\"Click to view dirty drains\" id=\"dirtybtn\">\n        <div class=\"w3-clear\"></div><span class=\"w3-right\"><img src=\"assets/img/trash.png\" title=\"Dirty Drains\" width=\"20\" height=\"20\"></span>\n        <h4>{{ 'dirty' | translate}}</h4>\n        <h4 class=\"w3-text-black\" *ngIf=\"dirtydrains\">{{ dirtydrains.length }}</h4>\n        </div></a>\n    </div>\n    <div class=\"w3-col l2 m2 s6 w3-padding-right\" id=\"bar\">\n        <a routerLink=\"help-drains\"><div class=\"w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal\" title=\"Click to view drains that need help\" id=\"filterbtn\" >\n        <div class=\"w3-clear\"></div><span class=\"w3-right\"><img src=\"assets/img/help.png\" title=\"Help Needed\" width=\"20\" height=\"20\"></span>\n        <h4>{{'need_help' | translate}}</h4>\n        <h4 class=\"w3-text-black\" *ngIf=\"helpdrains\">{{ helpdrains.length }}</h4>\n      </div></a>\n    </div>\n    <div class=\"w3-col l2 m2 s6 w3-padding-right\" id=\"bar\">\n        <a routerLink=\"unknown-drains\"><div class=\"w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal\"  title=\"Click to view clean drains\" id=\"clearbtn\">\n        <div class=\"w3-clear\"></div><span class=\"w3-right\"></span>\n          <h4>{{'unknown' | translate}}</h4>\n          <h4 class=\"w3-text-black\"  *ngIf=\"unknowndrains\">{{ unknowndrains.length }}</h4>\n        </div></a>\n      </div>\n    <div class=\"w3-col l2 m2 s6 w3-padding-right\" id=\"bar\" >\n        <a routerLink=\"users\"><div class=\"w3-container w3-padding w3-text-black w3-white w3-hover-shadow w3-border w3-border-teal \" title=\"Click to view all citizens\" onclick=\"allcitizens()\" id=\"allcitizen\">\n        <div class=\"w3-clear\"></div><span class=\"w3-right\"><i class=\"fa fa-users\"></i></span>\n        <h4>{{ 'citizens' | translate}}</h4>\n        <h4 class=\"w3-text-black\" *ngIf=\"users\">{{ users.length }}</h4>\n      </div></a>\n    </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/notification-bar/notification-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationBarComponent = (function () {
    function NotificationBarComponent(drainService, userService) {
        this.drainService = drainService;
        this.userService = userService;
    }
    NotificationBarComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService
            .getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    NotificationBarComponent.prototype.getDrains = function () {
        var _this = this;
        this.drainService
            .getDrains()
            .subscribe(function (drains) { return _this.alldrains = drains; });
    };
    NotificationBarComponent.prototype.cleanDrains = function () {
        var _this = this;
        this.drainService
            .getCleanDrains()
            .subscribe(function (cleanDrains) { return _this.cleandrains = cleanDrains; });
    };
    NotificationBarComponent.prototype.dirtyDrains = function () {
        var _this = this;
        this.drainService
            .getDirtyDrains()
            .subscribe(function (dirtyDrains) { return _this.dirtydrains = dirtyDrains; });
    };
    NotificationBarComponent.prototype.helpDrains = function () {
        var _this = this;
        this.drainService
            .getHelpDrains()
            .subscribe(function (helpDrains) { return _this.helpdrains = helpDrains; });
    };
    NotificationBarComponent.prototype.unknownDrains = function () {
        var _this = this;
        this.drainService
            .getUnknownDrains()
            .subscribe(function (unknownDrains) { return _this.unknowndrains = unknownDrains; });
    };
    NotificationBarComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getDrains();
        this.cleanDrains();
        this.dirtyDrains();
        this.helpDrains();
        this.unknownDrains();
    };
    return NotificationBarComponent;
}());
NotificationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification-bar',
        template: __webpack_require__("../../../../../src/app/shared/notification-bar/notification-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/notification-bar/notification-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_user_service__["a" /* UserService */]) === "function" && _b || Object])
], NotificationBarComponent);

var _a, _b;
//
//
// import { Component, OnInit } from '@angular/core';
// import { User } from "./../users/user";
// import { UserService } from "./../users/user.service";
// import { DrainsService } from './../drains/drains.service';
// import { Drain } from './../drains/drain';
// import {TranslateService} from "../../transilate/translate.service";
//
// @Component({
//   selector: 'app-notification-bar',
//   templateUrl: './notification-bar.component.html',
//   styleUrls: ['./notification-bar.component.css']
// })
// export class NotificationBarComponent implements OnInit {
//   users: User[];
//   alldrains: Drain[];
//   cleandrains: Drain[];
//   helpdrains: Drain[];
//   dirtydrains:Drain[];
//   unknowndrains:Drain[];
//
//   constructor(private drainService: DrainsService, private userService: UserService, private _translate: TranslateService) { }
//   getUsers(): void {
//     this.userService
//       .getUsers()
//       .subscribe(users => this.users = users);
//   }
//   getDrains(): any {
//     this.drainService
//       .getDrains()
//       .subscribe(drains => this.alldrains = drains);
//   }
//
//   cleanDrains(): any {
//     this.drainService
//       .getCleanDrains()
//       .subscribe(cleanDrains => this.cleandrains = cleanDrains);
//   }
//   dirtyDrains(): any {
//     this.drainService
//       .getDirtyDrains()
//       .subscribe(dirtyDrains => this.dirtydrains = dirtyDrains);
//   }
//   helpDrains(): any {
//     this.drainService
//       .getHelpDrains()
//       .subscribe(helpDrains => this.helpdrains = helpDrains);
//   }
//   unknownDrains(): any {
//     this.drainService
//       .getUnknownDrains()
//       .subscribe(unknownDrains => this.unknowndrains = unknownDrains);
//   }
//   public translatedText: string;
//   public supportedLanguages: any[];
//   supportedLangs: any;
//
//   ngOnInit() {
//     // standing data
//     this.supportedLangs = [
//       {display: 'English', value: 'en'},
//       {display: 'Swahili', value: 'sw'},
//     ];
//     this.getUsers();
//     this.getDrains();
//     this.cleanDrains();
//     this.dirtyDrains();
//     this.helpDrains();
//     this.unknownDrains();
//     this.selectLang('sw');
//
//
//     this.subscribeToLangChanged();
//
//     // set language
//     this._translate.setDefaultLang('en');
//     this._translate.enableFallback(true);
//     this.selectLang('sw');
//
//   }
//
//   isCurrentLang(lang: string) {
//     return lang === this._translate.currentLang;
//   }
//
//   selectLang(lang: string) {
//     // set default;
//     this._translate.use(lang);
//     // this.refreshText(); // remove
//   }
//
//   refreshText() {
//     this.translatedText = this._translate.instant('all');
//   }
//
//   subscribeToLangChanged() {
//     return this._translate.onLangChanged.subscribe(x => this.refreshText());
//   }
//
//
// }
//# sourceMappingURL=notification-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/notification-bar/notification-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationBarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationBarModule = (function () {
    function NotificationBarModule() {
    }
    return NotificationBarModule;
}());
NotificationBarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],],
        declarations: [],
        providers: [],
    })
], NotificationBarModule);

//# sourceMappingURL=notification-bar.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/notify/notify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w3-center{\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/notify/notify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n  <div class=\"content\">\n    <h2 class=\" w3-center\"> {{ title }}</h2>\n    <h4 class=\" w3-center\">  {{'send_message' | translate}}</h4>\n\n    <div class=\" w3-padding\">\n      <div class=\"w3-row\">\n          <div class=\"w3-padding w3-col m6 s12\">\n            <div class=\"w3-card-2 w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal\">\n                <h3 class=\"w3-center\">{{'alert_user' | translate}}</h3>\n                <p>{{'alert_message'| translate}}\n                </p>\n\n                <button class=\"w3-right w3-padding w3-btn w3-teal\" (click)=\"checkBoxes('alertMsg','awarenessMsg')\">{{'send_alert' | translate}}</button>\n            </div><!--End Card -->\n          </div>\n          <div class=\"w3-padding w3-col m6 s12\">\n            <div class=\"w3-card-2 w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal\">\n              <h3 class=\"w3-center\">{{'aware_user'| translate}}</h3>\n                <p>\n                  {{'awareness_message' | translate }}\n                </p>\n\n                <button class=\"w3-right w3-padding w3-btn w3-teal\" (click)=\"checkBoxes('awarenessMsg','alertMsg') \">{{'send_awareness'| translate}}</button>\n            </div><!--End Card -->\n          </div>\n      </div>\n<!--End Notification Rows -->\n\n<!-- Begin Message Boxes  -->\n      <div class=\"w3-row  w3-padding\" id=\"alertMsg\">\n        <div class=\"w3-card-2 w3-padding w3-container w3-white w3-hover-shadow w3-border w3-border-white\">\n        <div class=\"w3-col  m3 s12 w3-center\">\n          <h3><i class=\"fa fa-edit\" style=\"color:#009688!important\"></i> {{'modify' | translate}}</h3>\n            <h4>{{'or'| translate}}</h4>\n            <h3><i class=\"fa fa-envelope\" style=\"color:#009688!important\"></i> {{ 'send_msg'| translate}}\n            </h3>\n            <h4>{{'box-msg' | translate}}</h4>\n        </div>\n        <div class=\"w3-col m9 s12\">\n          <form class=\"w3-container\" id=\"alertForm\">\n              <h4>{{'alert_user' | translate}} </h4>\n            <textarea class=\"w3-input w3-border w3-border-teal\" maxlength=\"100\" rows=\"4\" cols=\"50\" wrap=\"soft\" [(ngModel)]=\"theMsg.msg\" name=\"msg\">The rain season is here pleasure ensure that your drains are clean.\n            </textarea>\n            <br>\n            <button class=\"w3-right w3-padding w3-btn w3-teal\" (click)=\"sendMessages() \">{{'message_send'| translate}}</button>\n          </form>\n        </div>\n        </div>\n      </div>\n      <!-- Alert Message  -->\n\n      <!-- Awareness Message -->\n      <div class=\"w3-row  w3-padding\" id=\"awarenessMsg\">\n        <div class=\"w3-card-2 w3-padding w3-container w3-white w3-hover-shadow w3-border w3-border-white\">\n          <div class=\"w3-col  m3 s12 w3-center\">\n            <h3><i class=\"fa fa-edit\" style=\"color:#009688!important\"></i>{{'modify' | translate}}</h3>\n            <h4>{{'or'| translate}}</h4>\n              <h3><i class=\"fa fa-envelope\" style=\"color:#009688!important\"></i> {{ 'send_msg'| translate}}\n              </h3>\n              <h4>{{'box-msg' | translate}} </h4>\n          </div>\n        <div class=\"w3-col m9 s12\">\n          <form class=\"w3-container\" id=\"awarenessForm\">\n              <h4>{{'aware_user'| translate}} </h4>\n            <textarea class=\"w3-input w3-border w3-border-teal\" maxlength=\"100\" rows=\"4\" cols=\"50\" wrap=\"soft\" [(ngModel)]=\"theMsg.msg\" name=\"msg\">From time to time drains are filled with dirt and overgrowth of grass please clean out your drains from time to time.\n            </textarea>\n            <br>\n            <button class=\"w3-right w3-padding w3-btn w3-teal\" (click)=\"sendMessages() \">{{'message_send'| translate}}</button>\n          </form>\n        </div>\n        </div>\n      </div> <!-- End Awareness Box -->\n<!-- End Message Boxes -->\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/notify/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_sms_service__ = __webpack_require__("../../../../../src/app/core/sms.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotifyComponent = (function () {
    function NotifyComponent(authService, smsService, ngProgress) {
        this.authService = authService;
        this.smsService = smsService;
        this.ngProgress = ngProgress;
        this.theMsg = { 'msg': '' };
    }
    NotifyComponent.prototype.hide = function (element) {
        document.getElementById(element).style.display = 'none';
    };
    NotifyComponent.prototype.checkBoxes = function (element1, element2) {
        document.getElementById(element1).style.display = 'block';
        if (document.getElementById(element1).style.display == 'block') {
            document.getElementById(element2).style.display = 'none';
        }
    };
    NotifyComponent.prototype.sendMessages = function () {
        var _this = this;
        this.ngProgress.start();
        console.log(this.theMsg);
        this.smsService.sendMassMsg(this.theMsg)
            .subscribe(function (res) {
            _this.deliveryRes = res;
            if (_this.deliveryRes.success) {
                _this.statusMsg = 'Messages have been sent';
            }
            else {
                _this.statusMsg = 'Message sending failed';
            }
        });
        this.ngProgress.done();
    };
    NotifyComponent.prototype.ngOnInit = function () {
        this.hide('alertMsg');
        this.hide('awarenessMsg');
    };
    return NotifyComponent;
}());
NotifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notify',
        template: __webpack_require__("../../../../../src/app/shared/notify/notify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/notify/notify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_sms_service__["a" /* SmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_sms_service__["a" /* SmsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object])
], NotifyComponent);

var _a, _b, _c;
//# sourceMappingURL=notify.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ranks/ranks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.w3-modal-content {\n    margin-left: 25%;\n    width: 70%;\n    top: 180px;\n    height: auto;\n}\n\n\n@media(max-width: 768px){\n    .w3-modal-content {\n        padding-top: 0px;\n        margin: 0% 10% 0% 10%;\n        width: 80%;\n        height: auto;\n    }\n\n}\n.btn-success {\n  background-color: #5aa281;\n   border-color: #5aa281;\n}\n.btn{\n  padding: 2px 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/ranks/ranks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n  <div class=\"content\">\n      <div class=\"box w3-card-2 w3-border w3-padding\" >\n          <div class=\"box-header with-border\">\n              <h3 class=\" w3-center\"> {{ 'ranks_details'| translate }}</h3>\n          </div>\n          <!-- /.box-header -->\n\n        <div class=\"w3-row\">\n              <div id=\"error\"><h4>{{ErrMsg}}</h4></div>\n        </div>\n        <div class=\"box-body\">\n          <div class=\"w3-row\">\n              <!-- Chart Canvas -->\n            <div >\n                <google-chart [data]=\"tableChartData\"  (chartSelect)='select($event)'></google-chart>\n            </div>\n            <div id=\"alert\" class=\"w3-modal\">\n                <div id=\"\" class=\"w3-modal-content w3-card-4\" >\n                    <header class=\"w3-container w3-theme-d1 w3-center\">\n                        <span (click)=\"close('alert')\"  class=\"w3-button w3-display-topright w3-padding w3-hover-teal\">&times;</span>\n                        <h3>{{'street'| translate}}</h3>\n                    </header>\n                    <div class=\"w3-row-padding\">\n                     <div class=\"w3-col s12 m6\" >\n\n                        <h5><strong>{{ streetName }} </strong> {{'has'|translate}}</h5>\n                      <div class=\"w3-padding-left\" >\n                        <p><strong class=\"w3-padding-right\">{{ adopted }}</strong>{{ 'adopted' | translate}}</p>\n                        <p><strong class=\"w3-padding-right\">{{ clean }}</strong>{{'clean' | translate}}</p>\n                        <p><strong class=\"w3-padding-right\">{{ dirty }} </strong>{{'dirty'| translate}}</p>\n                        <p><strong class=\"w3-padding-right\">{{ help }}</strong>{{'need' | translate}}</p>\n                      </div>\n                     </div>\n\n                     <div *ngIf=\"authService.isLoggedIn()\"  class=\"w3-col s12 m6 w3-padding\" >\n                        <button (click)=\"openMsgBox('msgBox')\" class=\"w3-btn w3-border w3-border-teal w3-white w3-padding\">{{'veo' | translate}}</button>\n\n                        <div id=\"msgBox\" class=\"w3-padding-top\">\n                            <input class=\"w3-input w3-border\" [(ngModel)]=\"alert.message\" type=\"text\" name=\"message\" placeholder=\"Enter Message\" required>\n                            <button (click)=\"close('msgBox')\" class=\"w3-btn w3-block w3-red w3-section w3-padding\" type=\"submit\">Cancel</button>\n\n                            <button (click)=\"alertVEO()\" class=\"w3-right w3-btn w3-block w3-green w3-section w3-padding\" type=\"submit\">{{'alert'| translate}}</button>\n                        </div>\n\n                                <div class=\"pull-right w3-border-grey w3-padding-top\">\n                                    <p>{{alertErrMsg}}</p>\n                                </div>\n                     </div>\n\n                </div>\n            </div>\n          </div>\n          </div>\n      </div>\n      <!-- /.box -->\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/ranks/ranks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RanksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RanksComponent = (function () {
    function RanksComponent(drainService, authService, userService, _translate, ngProgress) {
        this.drainService = drainService;
        this.authService = authService;
        this.userService = userService;
        this._translate = _translate;
        this.ngProgress = ngProgress;
        this.title = 'Cleanness Ranks Based on Streets';
        //street: any = {'street_id': ''};
        this.cssClassNames = { headerCell: 'w3-teal w3-padding', hoverTableRow: 'w3-grey', tableRow: 'w3-striped' };
        //Send The Alert Message
        this.alert = {
            'message': '',
            'street': '',
        };
    }
    //Checks if a user is loggen in
    RanksComponent.prototype.isLoggedIn = function () {
        this.loggedIn = this.authService.isLoggedIn();
    };
    //Get data from selected table row 
    RanksComponent.prototype.select = function (event) {
        document.getElementById('alert').style.display = 'block';
        this.streetId = event.selectedRowValues[0];
        this.streetName = event.selectedRowValues[1];
        this.adopted = event.selectedRowValues[2];
        this.clean = event.selectedRowValues[3];
        this.dirty = event.selectedRowValues[4];
        this.help = event.selectedRowValues[5];
        this.row = 1 + event.row;
        this.column = 1 + event.column;
    };
    //Close the modal box by clicking anywhere in the document
    RanksComponent.prototype.closestreet = function () {
        var modal = document.getElementById('alert');
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    //Open the Message Box
    RanksComponent.prototype.openMsgBox = function () {
        document.getElementById('msgBox').style.display = 'block';
    };
    //Close any open div
    RanksComponent.prototype.close = function (id) {
        document.getElementById(id).style.display = 'none';
    };
    //Fetch Ranking Data and generate ranking table.
    RanksComponent.prototype.ranksData = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getRanksData()
            .subscribe(function (data) {
            _this.tableChartData = {
                chartType: 'Table',
                dataTable: [
                    ['Street ID',
                        _this._translate.instant('street'),
                        _this._translate.instant('adopted'),
                        _this._translate.instant('clean'),
                        _this._translate.instant('dirty'),
                        _this._translate.instant('need_help')],
                ],
                options: {
                    title: 'Cleanness Ranks',
                    width: '100%',
                    height: '100%',
                    allowHtml: true,
                    alternatingRowStyle: true,
                    cssClassNames: _this.cssClassNames,
                    page: 'enable',
                    pageSize: 20,
                    sort: 'enable',
                },
                view: {
                    'columns': [1, 2, 3, 4, 5]
                }
            };
            _this.ranksdata = _this.drainService.ranksData;
            _this.ranksdata.forEach(function (rank) {
                _this.tableChartData.dataTable.push([rank.street.id,
                    rank.street.street_name,
                    rank.details.adopted,
                    rank.details.cleaned,
                    rank.details.uncleaned,
                    rank.details.need_help
                ]);
            });
        });
        this.ngProgress.done();
    };
    RanksComponent.prototype.refreshText = function () {
        this.ranksData();
    };
    RanksComponent.prototype.subscribeToLangChanged = function () {
        var _this = this;
        return this._translate.onLangChanged.subscribe(function (x) { return _this.refreshText(); });
    };
    RanksComponent.prototype.alertVEO = function () {
        var _this = this;
        this.alert.street = this.streetId;
        console.log(this.alert);
        this.userService.alertLeader(this.alert)
            .subscribe(function (res) {
            _this.alertRes = res;
            console.log(_this.alertRes);
            if (_this.alertRes.success) {
                _this.alertErrMsg = _this._translate.instant('message');
            }
            else {
                _this.alertErrMsg = 'Message sending failed';
            }
        });
    };
    RanksComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('msgBox').style.display = 'none';
    };
    RanksComponent.prototype.ngOnInit = function () {
        this.subscribeToLangChanged();
        this.closestreet();
        this.refreshText();
    };
    return RanksComponent;
}());
RanksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ranks',
        template: __webpack_require__("../../../../../src/app/shared/ranks/ranks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/ranks/ranks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__transilate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__transilate_translate_service__["a" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_progressbar__["b" /* NgProgress */]) === "function" && _e || Object])
], RanksComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=ranks.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"registermodal\" class=\"w3-modal\">\n  <div class=\"w3-modal-content w3-card-4 w3-animate-zoom\" style=\"max-width:600px\">\n\n    <div class=\"w3-center\"><br>\n      <span (click)=\"closeregister()\" class=\"w3-button w3-xlarge w3-hover-red w3-display-topright w3-padding\" title=\"Close Modal\">&times;</span>\n      \n    </div>\n    <form id=\"registerForm\">\n        <div class=\"w3-section w3-padding\">\n        \n    <label class=\"w3-margin-bottom\"><b>First Name</b><input class=\"w3-input w3-border\" [(ngModel)]=\"user.first_name\" name=\"first_name\" type=\"text\" placeholder=\"Enter Fisrt Name(s)\" required>\n    </label>\n    <label><b>Last Name</b><input class=\"w3-input w3-border w3-margin-bottom\" [(ngModel)]=\"user.last_name\" name=\"last_name\" type=\"text\" placeholder=\"Enter Last Name\" required>\n    </label>\n    <label><b>Email</b>\n      <input class=\"w3-input w3-border w3-margin-bottom\" [(ngModel)]=\"user.email\" name=\"email\" type=\"text\" placeholder=\"Enter Email\" required>\n    </label>\n    <label><b> My Street</b>\n      <select class=\"w3-select\" name=\"street\" [(ngModel)]=\"user.street\" required #streetControl=\"ngModel\">\n          <option value=\"\" disabled selected>--My Street--</option>\n          <option *ngFor=\"let street of (streets)\" [value]=\"street.street.id\">{{street.street.street_name}}</option>\n        </select>\n    </label>\n    <label><b>Mobile Phone Number</b>\n      <input class=\"w3-input w3-border\" [(ngModel)]=\"user.sms_number\" type=\"text\" name=\"sms_number\" placeholder=\"Enter Phone Number\" required>\n    </label>\n    <label><b>Password</b>\n      <input class=\"w3-input w3-border\" [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" placeholder=\"Enter Password\" required>\n    </label>\n    <label><b>Confirm Password</b>\n      <input class=\"w3-input w3-border\" [(ngModel)]=\"user.confirmpassword\" type=\"password\" name=\"confirmpassword\" placeholder=\"Confirm Password\" required>\n    </label>  \n      \n        </div>\n    </form>\n    <div class=\"w3-container w3-border-top w3-padding-16 w3-light-grey\">\n      <section class=\"w3-right\">\n      <button (click)=\"register()\" class=\"w3-btn w3-green \" type=\"submit\">Register</button>\n      <button (click)=\"closeregister()\" class=\"w3-btn w3-red\">Cancel</button>\n      </section>\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/shared/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(authService, drainService, ngProgress, router, userService) {
        this.authService = authService;
        this.drainService = drainService;
        this.ngProgress = ngProgress;
        this.router = router;
        this.userService = userService;
        this.user = { 'first_name': '', 'last_name': '', 'email': '', 'street_id': '', 'sms_number': '', 'password': '' };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.ngProgress.start();
        console.log(this.user);
        this.userService.createUser(this.user)
            .subscribe(function (res) {
            _this.regUser = _this.authService.userdata;
        });
        this.ngProgress.done();
    };
    RegisterComponent.prototype.getStreet = function () {
        var _this = this;
        this.drainService
            .getRanksData()
            .subscribe(function (data) {
            _this.streets = _this.drainService.ranksData;
        });
    };
    RegisterComponent.prototype.closemodal = function () {
        var modal = document.getElementById('registermodal');
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    RegisterComponent.prototype.closeregister = function () {
        document.getElementById('registermodal').style.display = 'none';
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.closemodal();
        this.getStreet();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/shared/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_drains_service__["a" /* DrainsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["b" /* NgProgress */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_user_service__["a" /* UserService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" >\n  <section class=\"content\">\n\n          <div class=\"box w3-card-2 w3-border w3-border-teal\" >\n            <div class=\"box-header with-border\">\n              <section class=\"content-header\">\n                <h3 class=\" w3-center\">{{'report' | translate}} </h3>\n            </section>\n\n              <div class=\"box-tools pull-right\">\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                  </button>\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n              </div>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n              <div class=\"w3-row-padding\" >\n                <form id=\"reportForm\" >\n                  <label><b>{{'location' | translate }}</b></label>\n                  <div class=\"w3-row-padding\">\n                    <div class=\"w3-col s12 m3\">\n                      <select class=\"w3-select\" name=\"region\" [(ngModel)]=\"region.name\" required #regionControl=\"ngModel\">\n                        <option value=\"\" disabled>{{'region'| translate}}</option>\n                        <option value=\"dsm\" selected>Dar es Salaam</option>\n                      </select>\n                    </div>\n                    <div class=\"w3-col s12 m3\">\n                      <select class=\"w3-select\" name=\"district\" [(ngModel)]=\"district.name\" required #districtControl=\"ngModel\">\n                        <option value=\"\" disabled>{{'district' | translate}}/{{'municipal' | translate}}</option>\n                        <option value=\"kinondoni\">Kinondoni</option>\n                        <option value=\"ilala\"disabled>Ilala</option>\n                        <option value=\"temeke\" disabled>Temeke</option>\n                        <option value=\"kigamboni\" disabled>Kigamboni</option>\n                        <option value=\"ubungo\" disabled>Ubungo</option>\n                      </select>\n                    </div>\n                    <div class=\"w3-col s12 m3\">\n                      <select class=\"w3-select\" name=\"ward\" [(ngModel)]=\"ward.name\" required #wardControl=\"ngModel\">\n                        <option value=\"\" disabled>{{'ward'| translate}}</option>\n                        <option value=\"hananasif\" selected>Hananasif</option>\n                      </select>\n                    </div>\n                    <div class=\"w3-col s12 m3\">\n                      <select class=\"w3-select\" name=\"streetname\" [(ngModel)]=\"streetname.name\" required #streetControl=\"ngModel\">\n                        <option value=\"\" disabled selected>{{ 'street' | translate}}</option>\n                        <option *ngFor=\"let street of (streets)\" [value]=\"street.street.city_name\">{{street.street.street_name}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <button (click)=\"buildReport()\" class=\"w3-btn w3-right w3-block w3-blue w3-section w3-padding\" [disabled]=\"streetControl.invalid\">{{'send'| translate}}</button>\n              </form>\n              <div class=\"w3-row\">\n                <div class=\"w3-col m6 s12\">\n                  <google-chart [data]=\"reportChart\" (chartError)='error($event)'></google-chart>\n                </div>\n                <div class=\"w3-col m6 s12\">\n                  <google-chart [data]=\"adoptedReportChart\" (chartError)='error($event)'  ></google-chart>\n                </div>\n                 <!-- Chart Canvas -->\n\n              </div>\n\n              </div>\n              <!-- /.row -->\n            </div>\n            <!-- ./box-body -->\n            <div class=\"box-footer\">\n              <div class=\"w3-row\">\n\n              </div>\n              <!-- /.row -->\n            </div>\n      </div>\n    </section>\n    <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    function ReportComponent(drainService, ngProgress) {
        this.drainService = drainService;
        this.ngProgress = ngProgress;
        this.title = 'Cleanness Reports';
        this.region = { 'name': '' };
        this.district = { 'name': '' };
        this.ward = { 'name': '' };
        this.streetname = { 'name': '' };
    }
    ReportComponent.prototype.error = function (event) {
        event.id = 'PieChartError';
        event.message = 'There is no suffiecient data to build a pie chart';
        event.detailedMessage = 'Details about the error';
    };
    ReportComponent.prototype.streetData = function () {
        var _this = this;
        this.ngProgress.start();
        this.drainService
            .getRanksData()
            .subscribe(function (data) {
            _this.streets = _this.drainService.ranksData;
            _this.ngProgress.done();
        });
    };
    ReportComponent.prototype.buildReport = function () {
        var _this = this;
        this.streets.forEach(function (street) {
            if (street.street.street_name == _this.streetname.name) {
                _this.reportChart = {
                    chartType: 'PieChart',
                    dataTable: [
                        ['Cleanness Feedback', 'Ratio'],
                        ['Clean Drains', street.details.cleaned],
                        ['Dirty Drains', street.details.uncleaned],
                        ['Need Help', street.details.need_help],
                    ],
                    options: {
                        'title': 'General Cleanness Report in ' + street.street.street_name,
                        pieHole: 0.3,
                        height: 500,
                        colors: ['#5cb85c', '#eea236', '#6495ed']
                    },
                };
                _this.adoptedReportChart = {
                    chartType: 'PieChart',
                    dataTable: [
                        ['Drain Adoption', 'Ratio'],
                        ['Adopted', street.details.adopted],
                        ['Not Adopted', street.details.not_adopted],
                    ],
                    options: {
                        'title': 'Drain Adoption in ' + street.street.street_name,
                        pieHole: 0.3,
                        height: 500,
                        colors: ['#964f8e', 'grey']
                    },
                };
            }
        });
    };
    ReportComponent.prototype.ngOnInit = function () {
        this.streetData();
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'reports',
        template: __webpack_require__("../../../../../src/app/shared/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_drains_service__["a" /* DrainsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */]) === "function" && _b || Object])
], ReportComponent);

var _a, _b;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReportModule = (function () {
    function ReportModule() {
    }
    return ReportModule;
}());
ReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
        ],
        declarations: [],
        exports: []
    })
], ReportModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared-routing/shared-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_admin_admin_component__ = __webpack_require__("../../../../../src/app/shared/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_drains_clean_drain_clean_drain_component__ = __webpack_require__("../../../../../src/app/shared/drains/clean-drain/clean-drain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/shared/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_drains_dirty_drain_dirty_drain_component__ = __webpack_require__("../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_drains_all_drains_all_drains_component__ = __webpack_require__("../../../../../src/app/shared/drains/all-drains/all-drains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_drains_filter_drains_filter_drains_component__ = __webpack_require__("../../../../../src/app/shared/drains/filter-drains/filter-drains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drains_help_drain_help_drain_component__ = __webpack_require__("../../../../../src/app/shared/drains/help-drain/help-drain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_notify_notify_component__ = __webpack_require__("../../../../../src/app/shared/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_ranks_ranks_component__ = __webpack_require__("../../../../../src/app/shared/ranks/ranks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_reports_reports_component__ = __webpack_require__("../../../../../src/app/shared/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_component__ = __webpack_require__("../../../../../src/app/shared/shared.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_drains_unknown_drains_unknown_drains_component__ = __webpack_require__("../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_users_users_list_users_component__ = __webpack_require__("../../../../../src/app/shared/users/users-list/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_users_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/shared/users/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_verify_leader_verify_leader_component__ = __webpack_require__("../../../../../src/app/shared/verify-leader/verify-leader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SharedRoutingModule = (function () {
    function SharedRoutingModule() {
    }
    return SharedRoutingModule;
}());
SharedRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_13__shared_shared_component__["a" /* SharedComponent */],
                    children: [
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
                        { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__shared_dashboard_dashboard_component__["a" /* DashboardComponent */] },
                        { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__shared_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__core_auth_guard__["a" /* AuthGuard */]] },
                        { path: 'clean-drains', component: __WEBPACK_IMPORTED_MODULE_2__shared_drains_clean_drain_clean_drain_component__["a" /* CleanDrainComponent */] },
                        { path: 'dirty-drains', component: __WEBPACK_IMPORTED_MODULE_4__shared_drains_dirty_drain_dirty_drain_component__["a" /* DirtyDrainComponent */] },
                        { path: 'drain-list', component: __WEBPACK_IMPORTED_MODULE_5__shared_drains_all_drains_all_drains_component__["a" /* DrainListComponent */] },
                        { path: 'filter-drains', component: __WEBPACK_IMPORTED_MODULE_6__shared_drains_filter_drains_filter_drains_component__["a" /* FilterDrainsComponent */] },
                        { path: 'help-drains', component: __WEBPACK_IMPORTED_MODULE_7__shared_drains_help_drain_help_drain_component__["a" /* HelpDrainComponent */] },
                        { path: 'notify-citizens', component: __WEBPACK_IMPORTED_MODULE_9__shared_notify_notify_component__["a" /* NotifyComponent */] },
                        { path: 'ranks', component: __WEBPACK_IMPORTED_MODULE_10__shared_ranks_ranks_component__["a" /* RanksComponent */] },
                        { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_11__shared_reports_reports_component__["a" /* ReportComponent */] },
                        { path: 'unknown-drains', component: __WEBPACK_IMPORTED_MODULE_14__shared_drains_unknown_drains_unknown_drains_component__["a" /* UnknownDrainsComponent */] },
                        { path: 'user-details/:id', component: __WEBPACK_IMPORTED_MODULE_16__shared_users_user_detail_user_detail_component__["a" /* UserDetailComponent */] },
                        { path: 'users', component: __WEBPACK_IMPORTED_MODULE_15__shared_users_users_list_users_component__["a" /* UsersComponent */] },
                        { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_17__shared_verify_leader_verify_leader_component__["a" /* VerifyLeaderComponent */] },
                        { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__shared_not_found_not_found_component__["a" /* NotFoundComponent */] },
                    ],
                },
            ]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */]
        ]
    })
], SharedRoutingModule);

//# sourceMappingURL=shared-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/shared.component.html":
/***/ (function(module, exports) {

module.exports = "      <app-header></app-header>\n      \n      <app-left-side></app-left-side>\n      <app-notification-bar></app-notification-bar>\n      <!-- Content Wrapper. Contains page content -->\n      <router-outlet></router-outlet>\n\n      <app-footer></app-footer>\n\n      <!-- Control Sidebar >\n      <app-admin-control-sidebar></app-admin-control-sidebar>\n      <! /.control-sidebar -->\n      <!-- Add the sidebar's background. This div must be placed\n           immediately after the control sidebar -->\n      <div class=\"control-sidebar-bg\"></div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/shared.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedComponent = (function () {
    function SharedComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    SharedComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    SharedComponent.prototype.ngOnDestroy = function () {
        //remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    return SharedComponent;
}());
SharedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shared',
        template: __webpack_require__("../../../../../src/app/shared/shared.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/shared.component.css")],
    })
], SharedComponent);

//# sourceMappingURL=shared.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drains_clean_drain_clean_drain_component__ = __webpack_require__("../../../../../src/app/shared/drains/clean-drain/clean-drain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/shared/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drains_dirty_drain_dirty_drain_component__ = __webpack_require__("../../../../../src/app/shared/drains/dirty-drain/dirty-drain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drains_all_drains_all_drains_component__ = __webpack_require__("../../../../../src/app/shared/drains/all-drains/all-drains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drains_filter_drains_filter_drains_component__ = __webpack_require__("../../../../../src/app/shared/drains/filter-drains/filter-drains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drains_help_drain_help_drain_component__ = __webpack_require__("../../../../../src/app/shared/drains/help-drain/help-drain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__left_side_left_side_component__ = __webpack_require__("../../../../../src/app/shared/left-side/left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/shared/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notification_bar_notification_bar_component__ = __webpack_require__("../../../../../src/app/shared/notification-bar/notification-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ranks_ranks_component__ = __webpack_require__("../../../../../src/app/shared/ranks/ranks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reports_reports_component__ = __webpack_require__("../../../../../src/app/shared/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_component__ = __webpack_require__("../../../../../src/app/shared/shared.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__drains_unknown_drains_unknown_drains_component__ = __webpack_require__("../../../../../src/app/shared/drains/unknown-drains/unknown-drains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/shared/users/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_user_search_user_search_component__ = __webpack_require__("../../../../../src/app/shared/users/user-search/user-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_users_list_users_component__ = __webpack_require__("../../../../../src/app/shared/users/users-list/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_shared_routing_shared_routing_module__ = __webpack_require__("../../../../../src/app/shared/shared-routing/shared-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_routing_admin_routing_module__ = __webpack_require__("../../../../../src/app/shared/admin/admin-routing/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__drains_clean_drain_clean_drain_module__ = __webpack_require__("../../../../../src/app/shared/drains/clean-drain/clean-drain.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_drains_dirty_drain_dirty_drain_module__ = __webpack_require__("../../../../../src/app/shared/drains/dirty-drain/dirty-drain.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_drains_help_drain_help_drain_module__ = __webpack_require__("../../../../../src/app/shared/drains/help-drain/help-drain.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_drains_all_drains_all_drains_module__ = __webpack_require__("../../../../../src/app/shared/drains/all-drains/all-drains.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng2_google_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_reports_reports_module__ = __webpack_require__("../../../../../src/app/shared/reports/reports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_users_users_list_users_module__ = __webpack_require__("../../../../../src/app/shared/users/users-list/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__notification_bar_notification_bar_module__ = __webpack_require__("../../../../../src/app/shared/notification-bar/notification-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__core_drains_service__ = __webpack_require__("../../../../../src/app/core/drains.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__header_header_module__ = __webpack_require__("../../../../../src/app/shared/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__core_paging_service__ = __webpack_require__("../../../../../src/app/core/paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__core_streets_service__ = __webpack_require__("../../../../../src/app/core/streets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__transilate_transilate_module__ = __webpack_require__("../../../../../src/app/transilate/transilate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__transilate_translate_pipe__ = __webpack_require__("../../../../../src/app/transilate/translate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__transilate_translation_translation_component__ = __webpack_require__("../../../../../src/app/transilate/translation/translation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__core_user_pipe__ = __webpack_require__("../../../../../src/app/core/user.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__notify_notify_component__ = __webpack_require__("../../../../../src/app/shared/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__register_register_component__ = __webpack_require__("../../../../../src/app/shared/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__verify_leader_verify_leader_component__ = __webpack_require__("../../../../../src/app/shared/verify-leader/verify-leader.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_20__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_23__admin_admin_routing_admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_28_ng2_google_charts__["Ng2GoogleChartsModule"],
            __WEBPACK_IMPORTED_MODULE_27__shared_drains_all_drains_all_drains_module__["a" /* DrainListModule */],
            __WEBPACK_IMPORTED_MODULE_25__shared_drains_dirty_drain_dirty_drain_module__["a" /* DirtyDrainModule */],
            __WEBPACK_IMPORTED_MODULE_24__drains_clean_drain_clean_drain_module__["a" /* CleanDrainModule */],
            __WEBPACK_IMPORTED_MODULE_26__shared_drains_help_drain_help_drain_module__["a" /* HelpDrainModule */],
            __WEBPACK_IMPORTED_MODULE_29__shared_reports_reports_module__["a" /* ReportModule */],
            __WEBPACK_IMPORTED_MODULE_30__shared_users_users_list_users_module__["a" /* UserModule */],
            //UserDetailModule,
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_31__notification_bar_notification_bar_module__["a" /* NotificationBarModule */],
            __WEBPACK_IMPORTED_MODULE_33__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_37__transilate_transilate_module__["a" /* TransilateModule */],
            __WEBPACK_IMPORTED_MODULE_22__shared_shared_routing_shared_routing_module__["a" /* SharedRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__left_side_left_side_component__["a" /* LeftSideComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__drains_all_drains_all_drains_component__["a" /* DrainListComponent */],
            __WEBPACK_IMPORTED_MODULE_0__drains_clean_drain_clean_drain_component__["a" /* CleanDrainComponent */],
            __WEBPACK_IMPORTED_MODULE_2__drains_dirty_drain_dirty_drain_component__["a" /* DirtyDrainComponent */],
            __WEBPACK_IMPORTED_MODULE_4__drains_filter_drains_filter_drains_component__["a" /* FilterDrainsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__drains_help_drain_help_drain_component__["a" /* HelpDrainComponent */],
            __WEBPACK_IMPORTED_MODULE_13__reports_reports_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__users_users_list_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__users_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__notification_bar_notification_bar_component__["a" /* NotificationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__drains_filter_drains_filter_drains_component__["a" /* FilterDrainsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ranks_ranks_component__["a" /* RanksComponent */],
            __WEBPACK_IMPORTED_MODULE_17__users_user_search_user_search_component__["a" /* UserSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__drains_unknown_drains_unknown_drains_component__["a" /* UnknownDrainsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_component__["a" /* SharedComponent */], __WEBPACK_IMPORTED_MODULE_41__core_user_pipe__["a" /* StreetVEOPipe */], __WEBPACK_IMPORTED_MODULE_41__core_user_pipe__["b" /* UserStreetPipe */],
            __WEBPACK_IMPORTED_MODULE_38__transilate_translate_pipe__["a" /* TranslatePipe */],
            __WEBPACK_IMPORTED_MODULE_42__notify_notify_component__["a" /* NotifyComponent */],
            __WEBPACK_IMPORTED_MODULE_43__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_44__verify_leader_verify_leader_component__["a" /* VerifyLeaderComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_14__shared_component__["a" /* SharedComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_32__core_drains_service__["a" /* DrainsService */],
            __WEBPACK_IMPORTED_MODULE_34__core_paging_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_35__core_streets_service__["a" /* StreetService */],
            __WEBPACK_IMPORTED_MODULE_39__transilate_translation_translation_component__["a" /* TRANSLATION_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_36__transilate_translate_service__["a" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_40__core_user_service__["a" /* UserService */],
        ],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/users/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper \"  >\n  <div class=\"content\"  >\n  <div class=\"box w3-card-2 w3-border w3-border-teal\" >\n    <div class=\"box-header with-border\">\n      <h2 class=\" w3-center\"> {{ title }}</h2>\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <!-- templates -->\n        <div id=\"error\"><h4></h4></div>\n              \n        <ul *ngIf=\"user\">\n        <h3>{{user.first_name}} details</h3>\n        <li><label>Id: </label> {{user.id}}</li>\n        <li><label>Name: </label> {{user.first_name}} {{user.last_name}}</li>\n        <li><label>Email: </label> {{user.email}}</li>\n        <button class=\"w3-btn\" (click)=\"goBack()\">Back</button>\n        </ul>\n    </div>\n  </div>\n</div>\n<!-- ./box-body -->\n  </div>\n</div>\n<!-- /.box -->\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/users/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, location) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.title = 'User Details';
    }
    UserDetailComponent.prototype.getUser = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.userService.getUser(+params.get('id')); })
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.goBack;
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-detail',
        template: __webpack_require__("../../../../../src/app/shared/users/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/users/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/users/user-search/user-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/users/user-search/user-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"sidebar-form\" [formGroup]=\"searchForm\" (ngSubmit)=\"searchQuery('q')\">\n    <div class=\"input-group\">\n      <input type=\"text\" formControlName=\"q\" class=\"w3-input\" placeholder=\"Search...\">\n      <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n    </div>\n  </form>\n  <div  *ngFor=\"let user of users | async\" (click)=\"gotoDetail(user)\" class=\"w3-text-white\" >\n    {{user.id}}\n  </div>"

/***/ }),

/***/ "../../../../../src/app/shared/users/user-search/user-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_user_search_service__ = __webpack_require__("../../../../../src/app/core/user-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserSearchComponent = (function () {
    function UserSearchComponent(userSearchService, router) {
        this.userSearchService = userSearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            q: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]()
        });
    }
    // Push a search term into the observable stream.
    UserSearchComponent.prototype.searchQuery = function (searchkey) {
        searchkey = this.searchForm.value.q;
        console.log(searchkey);
        this.searchTerms.next(searchkey);
    };
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.searchTerms
            .switchMap(function (searchkey) { return searchkey ? _this.userSearchService.search(searchkey) : __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
        });
    };
    UserSearchComponent.prototype.gotoDetail = function (user) {
        var link = ['/user-details/', user.id];
        this.router.navigate(link);
    };
    return UserSearchComponent;
}());
UserSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-search',
        template: __webpack_require__("../../../../../src/app/shared/users/user-search/user-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/users/user-search/user-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core_user_search_service__["a" /* UserSearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__core_user_search_service__["a" /* UserSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_user_search_service__["a" /* UserSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserSearchComponent);

var _a, _b;
//# sourceMappingURL=user-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/users/users-list/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w3-center{\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/users/users-list/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n  <div class=\"content\">\n      <h2 class=\" w3-center\"> {{ 'citizens'| translate}}</h2>   \n    <div class=\" w3-padding\">\n\n      <div class=\"w3-row\">\n          <div id=\"error\"><h4></h4></div>\n        <div class=\"w3-padding w3-col m7 s12\">\n          <div class=\"w3-card-2\">\n            <header class=\"w3-container w3-center w3-theme-l5\">\n                <h3 style=\"text-transform: uppercase\">{{'leader' | translate}} </h3>\n            </header>\n            <table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n              <thead>\n              <tr class=\"w3-light-grey w3-border-bottom\" >\n                <th>{{'name'| translate}}</th>\n                <th>{{'address' | translate}}</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tbody>\n              <tr *ngFor=\"let user of (users | streetVEO)\">\n                <td>{{user.first_name}} {{user.last_name}} </td>\n                <td> {{ streetName }}</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div><!-- Street Leaders Column -->\n        <div class=\"w3-padding w3-col m5 s12\">\n          <div class=\"w3-card-2\">\n            <header class=\"w3-container w3-center w3-theme-l5\">\n              <h3>{{'registered' | translate}}</h3>\n            </header>\n\n            <div class=\"w3-container\">\n              <div class=\"w3-padding\">\n                  <img src=\"assets/img/citizens.png\" title=\"Citizens\" width=\"50\" height=\"50\">\n                  <h4 class=\"w3-right\"> <strong>{{ usersCount }}</strong> {{'citizens'| translate}}</h4>\n              </div>\n              <hr>\n              <div class=\"w3-padding\">\n                  <img src=\"assets/img/veos.png\" title=\"Village Leaders\" width=\"50\" height=\"50\"> <h4 class=\"w3-right\"><strong>{{ streetLeadersCount }}</strong> {{'leader'| translate}}</h4>\n              </div>\n              <hr>\n              <div class=\"w3-padding\">\n                  <img src=\"assets/img/weo.png\" title=\"Ward Leaders\" width=\"50\" height=\"50\">\n                  <h4 class=\"w3-right\"> <strong>{{ wardLeadersCount }}</strong> {{'ward_leader'| translate}}</h4>\n              </div>\n            </div>\n          </div>\n        </div><!--End Registered Users Card -->\n    </div>\n    <div class=\"w3-row\">\n        <!-- templates -->\n        <div class=\" w3-col m12 s12\">\n          <h3 class=\"w3-center\">{{'citizen_population' | translate}}</h3>\n          <google-chart [data]=\"treeChart\" (chartError)='error($event)'></google-chart>\n        </div>\n      </div>\n  </div>\n<!-- /.box -->\n</div> \n"

/***/ }),

/***/ "../../../../../src/app/shared/users/users-list/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transilate_translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_streets_service__ = __webpack_require__("../../../../../src/app/core/streets.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = (function () {
    function UsersComponent(userService, ngProgress, streetService, _translate) {
        this.userService = userService;
        this.ngProgress = ngProgress;
        this.streetService = streetService;
        this._translate = _translate;
        this.title = 'Citizens';
        this.usersCount = 0;
        this.wardLeadersCount = 0;
        this.streetLeadersCount = 0;
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.ngProgress.start();
        this.userService
            .getUsers()
            .subscribe(function (user) {
            _this.users = user;
            //Get Number of registered users based on roles
            for (var i = 0; i < _this.users.length; i++) {
                _this.getStreetName(user[i].street_id);
                if (_this.users[i].role === 1) {
                    _this.usersCount++;
                }
                else if (_this.users[i].role === 2) {
                    _this.streetLeadersCount++;
                }
                else if (_this.users[i].role === 3) {
                    _this.wardLeadersCount++;
                }
            }
            //Get the number of citizens in each street
            _this.treeChart = {
                chartType: 'TreeMap',
                dataTable: [
                    [_this._translate.instant('street'), _this._translate.instant('ward'), _this._translate.instant('citizens')],
                    ['Hananasif Ward', null, _this.usercount],
                    ['Kawawa', 'Hananasif Ward', 2],
                    ['Hananasif', 'Hananasif Ward', 6],
                    ['Mkunguni A', 'Hananasif Ward', 5],
                    ['Mkunguni B', 'Hananasif Ward', 0],
                    ['Kisutu', 'Hananasif Ward', 0],
                ],
                options: {
                    'title': '',
                    'minColor': '#b7fff8',
                    'midColor': '#008578',
                    'maxColor': '#00685d',
                    'headerHeight': 40,
                }
            };
        });
        this.ngProgress.done();
    };
    //Get Street Name
    UsersComponent.prototype.getStreetName = function (street) {
        var _this = this;
        this.streetService.getStreetName(street)
            .subscribe(function (street) {
            _this.streetName = _this.streetService.streetName;
        });
    };
    UsersComponent.prototype.refreshText = function () {
        this.getUsers();
    };
    UsersComponent.prototype.subscribeToLangChanged = function () {
        var _this = this;
        return this._translate.onLangChanged.subscribe(function (x) { return _this.refreshText(); });
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.subscribeToLangChanged();
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/shared/users/users-list/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/users/users-list/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_streets_service__["a" /* StreetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_streets_service__["a" /* StreetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__transilate_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__transilate_translate_service__["a" /* TranslateService */]) === "function" && _d || Object])
], UsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/users/users-list/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        exports: [],
        declarations: [],
        providers: [],
        schemas: []
    })
], UserModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/verify-leader/verify-leader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/verify-leader/verify-leader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"  >\n\t<div class=\"content\">\n\t\t<div class=\"box w3-card-2 w3-border\" >\n\t\t<div class=\"box-header with-border\">\n\t\t\t<h3 class=\" w3-center\">{{ title }}</h3>\n\t\t</div>\n\t\t<!-- /.box-header -->\n\t\t<div class=\"box-body w3-padding\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- templates -->\n\t\t\t\t<div id=\"error\"><h4>{{ErrMsg}}</h4></div>\n\n\t\t\t\t\t<table class=\"w3-table w3-hoverable w3-responsive w3-white\" border=\"0\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"w3-light-grey w3-border-bottom\" >\n\t\t\t\t\t\t\t\t<th>Full Name</th>\n\t\t\t\t\t\t\t\t<th>Phone Number</th>\n\t\t\t\t\t\t\t\t<th>Street</th>\n\t\t\t\t\t\t\t\t<th>Actions</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let request of leaderRequests\">\n\t\t\t\t\t\t\t\t<td>{{ request.first_name }} {{ request.last_name }}</td>\n\t\t\t\t\t\t\t\t<td>{{ request.sms_number }}</td>\n\t\t\t\t\t\t\t\t<td>{{ request.street_id }}</td>\n\t\t\t\t\t\t\t\t<td>\n                  <button (click)=\"verifyLeader(request.id)\" class=\"w3-btn w3-red\" title=\"Disapprove\"> <i class=\"fa fa-remove\"></i> </button>\n                  <button (click)=\"verifyLeader(request.id)\" class=\"w3-btn w3-green\" title=\"Approve\"> <i class=\"fa fa-check\"></i> </button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<!-- ./box-body -->\n\t\t</div>\n<!-- /.box -->\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/verify-leader/verify-leader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyLeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyLeaderComponent = (function () {
    function VerifyLeaderComponent(userService) {
        this.userService = userService;
        this.title = 'Citizens';
    }
    //Getting Street leader requests 
    VerifyLeaderComponent.prototype.getRequests = function () {
        var _this = this;
        this.userService.getLeaderRequests()
            .subscribe(function (res) {
            _this.leaderRequests = _this.userService.leaderRequests;
        });
    };
    VerifyLeaderComponent.prototype.verifyLeader = function (userId) {
        var _this = this;
        this.userService.verifyLeader(userId)
            .subscribe(function (res) {
            _this.verifyRes = _this.userService.verifyResponse;
        });
    };
    VerifyLeaderComponent.prototype.ngOnInit = function () {
        this.getRequests();
    };
    return VerifyLeaderComponent;
}());
VerifyLeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-verify-leader',
        template: __webpack_require__("../../../../../src/app/shared/verify-leader/verify-leader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/verify-leader/verify-leader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_user_service__["a" /* UserService */]) === "function" && _a || Object])
], VerifyLeaderComponent);

var _a;
//# sourceMappingURL=verify-leader.component.js.map

/***/ }),

/***/ "../../../../../src/app/transilate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANG_EN_TRANS; });
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'login': 'Login',
    'signin': 'Sign In',
    'register': 'Register',
    'signout': 'Sign out',
    'username': 'Username',
    'password': 'Password',
    'clean': 'Clean Drains',
    'all': 'All Drains',
    'dirty': 'Dirty Drains',
    'unknown': 'Unknown Drains',
    'citizens': 'Citizens',
    'need_help_report': 'Status Report of drains that need help',
    'need_help': 'Need Help',
    'adopted': "Adopted drains",
    'not_adopted': 'Not adopted',
    'others': 'Others',
    'need': 'Drains that need help',
    /*side-menu translation*/
    'dashboard': 'Dashboard',
    'map': 'View map',
    'ranks': 'Rankings',
    'report': 'Reports',
    'view_drain': 'View Drains',
    'notification': 'Notify citizens',
    /*content translations*/
    'title': 'General Cleanness Report for Drains',
    'title_dashboard': 'General Cleanness Report ',
    'title_drains': 'Drain Adoption in Dar es salaam',
    'results': 'Results',
    'id': 'Id',
    'address': 'Address',
    'name': 'Name',
    'claimed': 'Claimed',
    'report_made': 'Report made',
    'phone_number': 'Phone Number',
    'ranks_details': 'Cleanness Ranks Based on Streets',
    'location': 'Select a location',
    'has': 'Has',
    'district': 'District',
    'municipal': 'Municipal',
    'region': 'Region',
    'ward': 'Ward',
    'street': 'Street',
    'drain_filter': 'Filter Drains',
    'choose_address': 'Choose Address',
    'leader': 'Street leaders',
    'ward_leader': 'Ward Leaders',
    'citizen_population': 'Citizen population distribution',
    'registered': 'Registered Users',
    //buttons
    'send': 'Generate Report',
    'submit': 'Submit',
    'cancel': 'Cancel',
    'first': 'First',
    'previous': 'Previous',
    'next': 'Next',
    'last': 'Last',
    'alert': 'Alert VEO',
    'send_alert': 'Send Alert Messages',
    'send_awareness': 'Send Awareness Messages',
    'veo': 'Send message to VEO',
    'filter': 'Filters',
    'submitted': 'Submitted',
    'progress': 'Processing',
    'done': 'Done',
    'archive': 'Archived',
    'all_button': 'All',
    /*notification*/
    'message': 'A message has been sent',
    'admin': 'Admin Dashboard Space',
    'alert_user': 'Alert message',
    'alert_message': 'Notify your citizens that the rain season is coming and they have make sure that their drains are clean.',
    'send_message': 'Choose the kind of messages you want to send ',
    'aware_user': 'Awareness message',
    'awareness_message': 'Send awareness messages to your citizens. You can tell them about the importance of cleanness in their environment, or randomly inform them about something concerning cleanness in their areas.',
    'modify': 'Modify',
    'send_msg': 'Send',
    'box-msg': 'the message in the message box ',
    'or': 'Or',
    'no_status': 'No',
    'yes_status': 'Yes',
    //  footer
    'copyright': 'Copyright',
    'all-right': 'All rights reserved.'
};
//# sourceMappingURL=lang-en.js.map

/***/ }),

/***/ "../../../../../src/app/transilate/lang-sw.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_SW_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANG_SW_TRANS; });
var LANG_SW_NAME = 'sw';
var LANG_SW_TRANS = {
    'login': 'Ingia',
    'signin': 'Ingia',
    'register': 'Sajili',
    'signout': 'Ondoka',
    'username': 'Jina la mtumiaji',
    'password': 'Neno-siri',
    'clean': 'Misafi',
    'all': 'Mitaro Yote',
    'dirty': 'Michafu',
    'unknown': 'Haijulikana',
    'citizens': 'Wananchi',
    'not_adopted': 'Mitaro isiyo na watu',
    'need_help_report': 'Ripoti ya mitaro inayohitaji msaada',
    'adopted': "Mitaro iliyotwaliwa",
    'need': 'Mitaro inayohitaji msaada',
    'others': 'Mingineyo',
    'need_help': 'Msaada ',
    /*side-menu translation*/
    'dashboard': 'Dashibodi',
    'map': 'Fungua ramani',
    'ranks': 'Uwiano',
    'report': 'Ripoti',
    'view_drain': 'Ona mitaro',
    'notification': 'Tuma Taarifa',
    /*content translations*/
    'title_dashboard': 'Ripoti ya usafi wa mitaro ',
    'title_drains': 'Mitaro iliyochukuliwa  Dar es salaam',
    'title': 'Taarifa ya Jumla ya Usafi',
    'results': 'Matokeo',
    'id': 'Namba',
    'address': 'Mtaa/Mahala',
    'name': 'Jina',
    'report_made': 'Iliripotiwa',
    'claimed': 'Iliyotwaliwa',
    'phone_number': 'Namba ya Simu',
    'ranks_details': 'Nafasi za usafi kulingana na mitaa',
    'location': 'Chagua Eneo/Sehemu',
    'has': 'ina',
    'district': 'Wilaya',
    'municipal': 'Manispaa',
    'street': 'Mtaa',
    'region': 'Mkoa',
    'ward': 'Kata',
    'drain_filter': 'Mgawanyo wa Mitaro',
    'choose_address': 'Chagua Eneo/Mtaa',
    'leader': 'Viongozi wa mtaa',
    'registered': 'Wananchi waliosajiliwa',
    'ward_leader': 'Viongozi wa Kata',
    'citizen_population': 'Mgawanyiko wa watu',
    /*button*/
    'send': 'Tuma',
    'submit': 'Wasilisha',
    'cancel': 'Ghairi',
    'first': 'mwanzo',
    'previous': 'nyuma',
    'next': 'mbele',
    'last': 'mwisho',
    'alert': 'Mtaarifu VEO',
    'send_alert': 'Ujumbe wa taahadhari',
    'send_awareness': 'Ujumbe wakuwa makini',
    'veo': 'Tuma ujumbe kwa VEO',
    'message_send': 'Tuma ujumbe',
    'filter': 'Mgawanyiko',
    'submitted': 'Iliyokusanywa',
    'progress': 'Muendelezo',
    'done': 'Kufanyika',
    'archive': 'Vimefanikiwa',
    'all_button': 'Yote',
    /*notification*/
    'message': 'Ujumbe umetumwa ',
    'admin': 'Sehemu ya admin',
    'alert_user': 'Ujumbe wa tahadhari',
    'alert_message': ' Msimu wa mvua umekaribia, wataarifu wananchi wako na pia wahakikishe mitaro yao ni misafi.',
    'send_message': ' chagua aina ya ujumbe unaotaka kuutuma ',
    'aware_user': 'UJumbe wa kuwa makini',
    'awareness_message': 'Tuma ujumbe kuwa harifu wananchi wako nini umuhimu wa usafi katika mazingira na pia kuwa makini kwenye swala zima la usafi.',
    'modify': 'Badilisha',
    'send_msg': 'Tuma',
    'box-msg': 'ujumbe katika sanduku la ujumbe ',
    'or': 'Au',
    'no_status': 'hapana',
    'yes_status': 'Ndio',
    //  footer
    'copyright': 'Hatimiliki',
    'all-right': 'Haki zote zimehifadhiwa.'
};
//# sourceMappingURL=lang-sw.js.map

/***/ }),

/***/ "../../../../../src/app/transilate/transilate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translation_translation_component__ = __webpack_require__("../../../../../src/app/transilate/translation/translation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransilateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransilateModule = (function () {
    function TransilateModule() {
    }
    return TransilateModule;
}());
TransilateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__translation_translation_component__["c" /* TranslationComponent */]
        ]
    })
], TransilateModule);

//# sourceMappingURL=transilate.module.js.map

/***/ }),

/***/ "../../../../../src/app/transilate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("../../../../../src/app/transilate/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
// app/translate/translate.pipe.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value, args);
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translate',
        pure: false // impure pipe, update value when we change language
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate_service__["a" /* TranslateService */]) === "function" && _a || Object])
], TranslatePipe);

var _a;
//# sourceMappingURL=translate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/transilate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation_translation_component__ = __webpack_require__("../../../../../src/app/transilate/translation/translation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TranslateService = (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
        this.PLACEHOLDER = '%';
        this.onLangChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang || this._defaultLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.setDefaultLang = function (lang) {
        this._defaultLang = lang;
    };
    TranslateService.prototype.enableFallback = function (enable) {
        this._fallback = enable;
    };
    TranslateService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    };
    TranslateService.prototype.translate = function (key) {
        var translation = key;
        // found in current language
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        // fallback disabled
        if (!this._fallback) {
            return translation;
        }
        // found in default language
        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }
        // not found
        return translation;
    };
    TranslateService.prototype.replace = function (word, words) {
        var _this = this;
        if (word === void 0) { word = ''; }
        if (words === void 0) { words = ''; }
        var translation = word;
        var values = [].concat(words);
        values.forEach(function (e, i) {
            translation = translation.replace(_this.PLACEHOLDER.concat(i), e);
        });
        return translation;
    };
    TranslateService.prototype.instant = function (key, words) {
        // public perform translation
        var translation = this.translate(key);
        if (!words)
            return translation;
        return this.replace(translation, words);
    };
    return TranslateService;
}());
TranslateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__translation_translation_component__["b" /* TRANSLATIONS */])),
    __metadata("design:paramtypes", [Object])
], TranslateService);

//# sourceMappingURL=translate.service.js.map

/***/ }),

/***/ "../../../../../src/app/transilate/translation/translation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transilate/translation/translation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  translation works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/transilate/translation/translation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_en__ = __webpack_require__("../../../../../src/app/transilate/lang-en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_sw__ = __webpack_require__("../../../../../src/app/transilate/lang-sw.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TranslationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATIONS; });
/* unused harmony export dictionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATION_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// app/translate/translation.ts



// import translations
var TranslationComponent = (function () {
    function TranslationComponent() {
    }
    TranslationComponent.prototype.ngOnInit = function () {
    };
    return TranslationComponent;
}());
TranslationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-translation',
        template: __webpack_require__("../../../../../src/app/transilate/translation/translation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/transilate/translation/translation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TranslationComponent);

// translation token
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('translations');
// all traslations
var dictionary = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LANG_EN_NAME */]] = __WEBPACK_IMPORTED_MODULE_1__lang_en__["b" /* LANG_EN_TRANS */],
    _a[__WEBPACK_IMPORTED_MODULE_2__lang_sw__["a" /* LANG_SW_NAME */]] = __WEBPACK_IMPORTED_MODULE_2__lang_sw__["b" /* LANG_SW_TRANS */],
    _a);
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translation.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map