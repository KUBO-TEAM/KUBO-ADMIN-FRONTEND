"use strict";
(self["webpackChunkkubo_api"] = self["webpackChunkkubo_api"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'kubo-api';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_api_authentication_api_authentication_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api-authentication/api-authentication.module */ 9098);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _modules_recipe_crud_recipe_crud_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/recipe-crud/recipe-crud.module */ 2308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _modules_api_authentication_api_authentication_module__WEBPACK_IMPORTED_MODULE_1__.ApiAuthenticationModule,
            _modules_recipe_crud_recipe_crud_module__WEBPACK_IMPORTED_MODULE_2__.RecipeCrudModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _modules_api_authentication_api_authentication_module__WEBPACK_IMPORTED_MODULE_1__.ApiAuthenticationModule,
        _modules_recipe_crud_recipe_crud_module__WEBPACK_IMPORTED_MODULE_2__.RecipeCrudModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 1896:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/api-authentication/api-authentication-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiAuthenticationRoutingModule": () => (/* binding */ ApiAuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _presentation_verification_page_verification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation/verification-page/verification-page.component */ 6577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _presentation_verification_page_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.VerificationPageComponent },
];
class ApiAuthenticationRoutingModule {
}
ApiAuthenticationRoutingModule.ɵfac = function ApiAuthenticationRoutingModule_Factory(t) { return new (t || ApiAuthenticationRoutingModule)(); };
ApiAuthenticationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ApiAuthenticationRoutingModule });
ApiAuthenticationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ApiAuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9098:
/*!*************************************************************************!*\
  !*** ./src/app/modules/api-authentication/api-authentication.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiAuthenticationModule": () => (/* binding */ ApiAuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation/presentation.module */ 1835);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ 9468);
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data.module */ 4189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ApiAuthenticationModule {
}
ApiAuthenticationModule.ɵfac = function ApiAuthenticationModule_Factory(t) { return new (t || ApiAuthenticationModule)(); };
ApiAuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ApiAuthenticationModule });
ApiAuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_0__.PresentationModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
            _data_data_module__WEBPACK_IMPORTED_MODULE_2__.DataModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ApiAuthenticationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_0__.PresentationModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _data_data_module__WEBPACK_IMPORTED_MODULE_2__.DataModule] }); })();


/***/ }),

/***/ 5796:
/*!****************************************************************!*\
  !*** ./src/app/modules/api-authentication/core/base/mapper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mapper": () => (/* binding */ Mapper)
/* harmony export */ });
class Mapper {
}


/***/ }),

/***/ 9468:
/*!****************************************************************!*\
  !*** ./src/app/modules/api-authentication/core/core.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ }),

/***/ 2060:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/core/repositories/api-authentication.repository.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiAuthenticationRepository": () => (/* binding */ ApiAuthenticationRepository)
/* harmony export */ });
class ApiAuthenticationRepository {
}


/***/ }),

/***/ 705:
/*!********************************************************************************!*\
  !*** ./src/app/modules/api-authentication/core/usecases/login-user.usecase.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUserUsecase": () => (/* binding */ LoginUserUsecase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _repositories_api_authentication_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/api-authentication.repository */ 2060);


class LoginUserUsecase {
    constructor(apiAuthenticationRepository) {
        this.apiAuthenticationRepository = apiAuthenticationRepository;
    }
    execute(params) {
        return this.apiAuthenticationRepository.loginUser(params);
    }
}
LoginUserUsecase.ɵfac = function LoginUserUsecase_Factory(t) { return new (t || LoginUserUsecase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_api_authentication_repository__WEBPACK_IMPORTED_MODULE_0__.ApiAuthenticationRepository)); };
LoginUserUsecase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginUserUsecase, factory: LoginUserUsecase.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2300:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/data/api-authentication-repository/api-authentication-repository-impl.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiAuthenticationRepositoryImpl": () => (/* binding */ ApiAuthenticationRepositoryImpl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _core_repositories_api_authentication_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/repositories/api-authentication.repository */ 2060);
/* harmony import */ var _login_user_mappter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-user-mappter */ 2412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);






class ApiAuthenticationRepositoryImpl extends _core_repositories_api_authentication_repository__WEBPACK_IMPORTED_MODULE_1__.ApiAuthenticationRepository {
    constructor(http) {
        super();
        this.http = http;
        this.loginUserMapper = new _login_user_mappter__WEBPACK_IMPORTED_MODULE_2__.LoginUserMapper();
    }
    loginUser(param) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "api/login", param, {
            withCredentials: true
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(this.loginUserMapper.mapFrom));
    }
}
ApiAuthenticationRepositoryImpl.ɵfac = function ApiAuthenticationRepositoryImpl_Factory(t) { return new (t || ApiAuthenticationRepositoryImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ApiAuthenticationRepositoryImpl.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiAuthenticationRepositoryImpl, factory: ApiAuthenticationRepositoryImpl.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2412:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/data/api-authentication-repository/login-user-mappter.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUserMapper": () => (/* binding */ LoginUserMapper)
/* harmony export */ });
/* harmony import */ var _core_base_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/base/mapper */ 5796);

class LoginUserMapper extends _core_base_mapper__WEBPACK_IMPORTED_MODULE_0__.Mapper {
    mapFrom(param) {
        return {
            message: param.message,
            token: param.token,
        };
    }
    mapTo(param) {
        return {
            message: param.message,
            token: param.token,
        };
    }
}


/***/ }),

/***/ 4189:
/*!****************************************************************!*\
  !*** ./src/app/modules/api-authentication/data/data.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataModule": () => (/* binding */ DataModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class DataModule {
}
DataModule.ɵfac = function DataModule_Factory(t) { return new (t || DataModule)(); };
DataModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ }),

/***/ 9840:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/presentation/api-authentication.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiAuthenticationService": () => (/* binding */ ApiAuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_usecases_login_user_usecase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/usecases/login-user.usecase */ 705);
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/snackbar.service */ 3483);




class ApiAuthenticationService {
    constructor(store, loginUserUseCase, snackBarService) {
        this.store = store;
        this.loginUserUseCase = loginUserUseCase;
        this.snackBarService = snackBarService;
    }
    /** Chech is user is authenticated */
    isAuthenticated() {
        return true;
    }
    /** Login User */
    loginUser(params) {
        this.loginUserUseCase.execute(params).subscribe({
            next: (v) => {
                this.snackBarService.openDuratedSnackBar(v.message);
            },
            error: (e) => this.snackBarService.openDuratedSnackBar(e.error.message),
        });
    }
}
ApiAuthenticationService.ɵfac = function ApiAuthenticationService_Factory(t) { return new (t || ApiAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_usecases_login_user_usecase__WEBPACK_IMPORTED_MODULE_0__.LoginUserUsecase), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService)); };
ApiAuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiAuthenticationService, factory: ApiAuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8586:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/presentation/ngrx/login-user/login-user-actions.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginInProgress": () => (/* binding */ loginInProgress),
/* harmony export */   "loginSuccess": () => (/* binding */ loginSuccess),
/* harmony export */   "loginFail": () => (/* binding */ loginFail)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const loginInProgress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Login ] in progress');
const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Login ] success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Login ] fails');


/***/ }),

/***/ 6006:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/presentation/ngrx/login-user/login-user-reducer.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUserState": () => (/* binding */ LoginUserState),
/* harmony export */   "loginUserReducer": () => (/* binding */ loginUserReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _login_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-user-actions */ 8586);


var LoginUserState;
(function (LoginUserState) {
    LoginUserState[LoginUserState["initial"] = 0] = "initial";
    LoginUserState[LoginUserState["inProgress"] = 1] = "inProgress";
    LoginUserState[LoginUserState["success"] = 2] = "success";
    LoginUserState[LoginUserState["fail"] = 3] = "fail";
})(LoginUserState || (LoginUserState = {}));
const LOGIN_USER_INITIAL_STATE = {
    status: LoginUserState.initial,
};
const LOGIN_USER_REDUCER = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(LOGIN_USER_INITIAL_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_login_user_actions__WEBPACK_IMPORTED_MODULE_0__.loginInProgress, (state) => ({ status: LoginUserState.inProgress })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_login_user_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess, (state) => ({ status: LoginUserState.success, token: state.token })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_login_user_actions__WEBPACK_IMPORTED_MODULE_0__.loginFail, (state) => ({ status: LoginUserState.inProgress })));
function loginUserReducer(state, action) {
    return LOGIN_USER_REDUCER(state, action);
}


/***/ }),

/***/ 8477:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/api-authentication/presentation/ngrx/ngrx.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgrxModule": () => (/* binding */ NgrxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _login_user_login_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-user/login-user-reducer */ 6006);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_repositories_api_authentication_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/repositories/api-authentication.repository */ 2060);
/* harmony import */ var _data_api_authentication_repository_api_authentication_repository_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/api-authentication-repository/api-authentication-repository-impl */ 2300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







const reducer = {
    loginReducer: _login_user_login_user_reducer__WEBPACK_IMPORTED_MODULE_0__.loginUserReducer,
};
class NgrxModule {
}
NgrxModule.ɵfac = function NgrxModule_Factory(t) { return new (t || NgrxModule)(); };
NgrxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NgrxModule });
NgrxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        { provide: _core_repositories_api_authentication_repository__WEBPACK_IMPORTED_MODULE_1__.ApiAuthenticationRepository, useClass: _data_api_authentication_repository_api_authentication_repository_impl__WEBPACK_IMPORTED_MODULE_2__.ApiAuthenticationRepositoryImpl }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.StoreModule.forRoot(reducer),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgrxModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.StoreRootModule] }); })();


/***/ }),

/***/ 1835:
/*!********************************************************************************!*\
  !*** ./src/app/modules/api-authentication/presentation/presentation.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationModule": () => (/* binding */ PresentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _verification_page_verification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-page/verification-page.component */ 6577);
/* harmony import */ var _api_authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-authentication-routing.module */ 1896);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 2271);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx/ngrx.module */ 8477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class PresentationModule {
}
PresentationModule.ɵfac = function PresentationModule_Factory(t) { return new (t || PresentationModule)(); };
PresentationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PresentationModule });
PresentationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _api_authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__.ApiAuthenticationRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
            _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_3__.NgrxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PresentationModule, { declarations: [_verification_page_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.VerificationPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _api_authentication_routing_module__WEBPACK_IMPORTED_MODULE_1__.ApiAuthenticationRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_3__.NgrxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 6577:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/api-authentication/presentation/verification-page/verification-page.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageComponent": () => (/* binding */ VerificationPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-authentication.service */ 9840);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 4178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 9200);






class VerificationPageComponent {
    constructor(apiAuthenticationService, fb) {
        this.apiAuthenticationService = apiAuthenticationService;
        this.fb = fb;
        this.form = fb.group({
            email: [''],
            password: ['']
        });
    }
    submit() {
        var _a, _b;
        const email = (_a = this.form.get('email')) === null || _a === void 0 ? void 0 : _a.value;
        const password = (_b = this.form.get('password')) === null || _b === void 0 ? void 0 : _b.value;
        this.apiAuthenticationService.loginUser({
            email: email,
            password: password,
        });
    }
}
VerificationPageComponent.ɵfac = function VerificationPageComponent_Factory(t) { return new (t || VerificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_authentication_service__WEBPACK_IMPORTED_MODULE_0__.ApiAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
VerificationPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VerificationPageComponent, selectors: [["app-verification-page"]], decls: 9, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "h-[92vh]"], [1, "w-[25%]", 3, "formGroup", "ngSubmit"], ["placeholder", "Email", "type", "text", "formControlName", "email", 1, "flex-1"], ["placeholder", "Password", "type", "password", "formControlName", "password", 1, "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "example-margin"], ["submit", ""]], template: function VerificationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function VerificationPageComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-input", 2)(3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 5031:
/*!*********************************************************!*\
  !*** ./src/app/modules/recipe-crud/core/base/mapper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mapper": () => (/* binding */ Mapper)
/* harmony export */ });
class Mapper {
}


/***/ }),

/***/ 7610:
/*!*********************************************************!*\
  !*** ./src/app/modules/recipe-crud/core/core.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ }),

/***/ 582:
/*!****************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/core/repositories/recipe.repository.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeRepository": () => (/* binding */ RecipeRepository)
/* harmony export */ });
class RecipeRepository {
}


/***/ }),

/***/ 1187:
/*!*************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/core/usecases/add-recipe.usecase.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRecipeUseCase": () => (/* binding */ AddRecipeUseCase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/recipe.repository */ 582);


class AddRecipeUseCase {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    execute(params) {
        return this.recipeRepository.addRecipe(params);
    }
}
AddRecipeUseCase.ɵfac = function AddRecipeUseCase_Factory(t) { return new (t || AddRecipeUseCase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__.RecipeRepository)); };
AddRecipeUseCase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AddRecipeUseCase, factory: AddRecipeUseCase.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3278:
/*!******************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/core/usecases/get-all-recipes.usecase.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAllRecipesUsecase": () => (/* binding */ GetAllRecipesUsecase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/recipe.repository */ 582);


class GetAllRecipesUsecase {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    execute(params) {
        return this.recipeRepository.getAllRecipes();
    }
}
GetAllRecipesUsecase.ɵfac = function GetAllRecipesUsecase_Factory(t) { return new (t || GetAllRecipesUsecase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__.RecipeRepository)); };
GetAllRecipesUsecase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetAllRecipesUsecase, factory: GetAllRecipesUsecase.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1291:
/*!*************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/core/usecases/get-recipe-usecase.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetRecipeUseCase": () => (/* binding */ GetRecipeUseCase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/recipe.repository */ 582);


class GetRecipeUseCase {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    execute(_id) {
        return this.recipeRepository.getRecipe(_id);
    }
}
GetRecipeUseCase.ɵfac = function GetRecipeUseCase_Factory(t) { return new (t || GetRecipeUseCase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__.RecipeRepository)); };
GetRecipeUseCase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetRecipeUseCase, factory: GetRecipeUseCase.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5540:
/*!*********************************************************!*\
  !*** ./src/app/modules/recipe-crud/data/data.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataModule": () => (/* binding */ DataModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class DataModule {
}
DataModule.ɵfac = function DataModule_Factory(t) { return new (t || DataModule)(); };
DataModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule] }); })();


/***/ }),

/***/ 4820:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/data/repository/recipe-repository/recipe-repository-impl.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeRepositoryImpl": () => (/* binding */ RecipeRepositoryImpl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _core_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/repositories/recipe.repository */ 582);
/* harmony import */ var _recipe_repository_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-repository-mapper */ 3651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);






class RecipeRepositoryImpl extends _core_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_1__.RecipeRepository {
    constructor(http) {
        super();
        this.http = http;
        this.mapper = new _recipe_repository_mapper__WEBPACK_IMPORTED_MODULE_2__.RecipeRepositoryMapper();
    }
    getAllRecipes() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + 'api/recipe/')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((item) => {
            return item.data;
        }))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(this.mapper.mapFrom));
    }
    getRecipe(_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + `api/recipe/single/${_id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((item) => item.data))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(this.mapper.mapFrom));
    }
    addRecipe(recipeFormData) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + 'api/recipe/add', recipeFormData);
    }
}
RecipeRepositoryImpl.ɵfac = function RecipeRepositoryImpl_Factory(t) { return new (t || RecipeRepositoryImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
RecipeRepositoryImpl.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RecipeRepositoryImpl, factory: RecipeRepositoryImpl.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3651:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/data/repository/recipe-repository/recipe-repository-mapper.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeRepositoryMapper": () => (/* binding */ RecipeRepositoryMapper)
/* harmony export */ });
/* harmony import */ var _core_base_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/base/mapper */ 5031);

class RecipeRepositoryMapper extends _core_base_mapper__WEBPACK_IMPORTED_MODULE_0__.Mapper {
    mapFrom(param) {
        return {
            _id: param._id,
            name: param.name,
            description: param.description,
            reference: param.reference,
            ingredients: param.ingredients,
            displayPhoto: param.displayPhoto,
        };
    }
    mapTo(param) {
        return {
            _id: param._id,
            name: param.name,
            description: param.description,
            reference: param.reference,
            ingredients: param.ingredients,
            displayPhoto: param.displayPhoto,
        };
    }
}


/***/ }),

/***/ 2450:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/crop-image/crop-image.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropImageComponent": () => (/* binding */ CropImageComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/crop_image/crop_image.reducer */ 4839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ 4201);
/* harmony import */ var _shared_components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/floating-button/floating-button.component */ 2537);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 3262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ 7545);










function CropImageComponent_image_cropper_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "image-cropper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("imageCropped", function CropImageComponent_image_cropper_5_Template_image_cropper_imageCropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r2.imageCropped($event);
    })("imageLoaded", function CropImageComponent_image_cropper_5_Template_image_cropper_imageLoaded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r4.imageLoaded();
    })("cropperReady", function CropImageComponent_image_cropper_5_Template_image_cropper_cropperReady_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r5.cropperReady();
    })("loadImageFailed", function CropImageComponent_image_cropper_5_Template_image_cropper_loadImageFailed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.loadImageFailed();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const imageChangedEvent_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imageChangedEvent", imageChangedEvent_r1)("maintainAspectRatio", true)("aspectRatio", 3 / 4)("resizeToWidth", 500);
  }
}

class CropImageComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.croppedImage = '';
    this.imageChangedEvent$ = this.store.select('cropImageReducer');
  }

  ngOnInit() {}

  imageCropped(event) {
    this.croppedImage = event.base64;
  }

  sendCroppedImage() {
    this.store.dispatch((0,_ngrx_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__.cropImageSuccess)({
      imagePath: this.croppedImage
    }));
    this.router.navigate(['/overview/add']);
  }

  imageLoaded() {// show cropper
  }

  cropperReady() {// cropper ready
  }

  loadImageFailed() {// show message
  }

}

CropImageComponent.ɵfac = function CropImageComponent_Factory(t) {
  return new (t || CropImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};

CropImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CropImageComponent,
  selectors: [["app-crop-image"]],
  decls: 7,
  vars: 3,
  consts: [[3, "click"], [1, "justify-center", "flex", "items-center"], [1, "float-left"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", 4, "ngIf"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"]],
  template: function CropImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-floating-button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CropImageComponent_Template_app_floating_button_click_1_listener() {
        return ctx.sendCroppedImage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Crop");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-container", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CropImageComponent_image_cropper_5_Template, 1, 4, "image-cropper", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 1, ctx.imageChangedEvent$));
    }
  },
  directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_2__.FloatingButtonComponent, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__.ImageCropperComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wLWltYWdlLmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 4839:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/crop_image/crop_image.reducer.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cropImageReset": () => (/* binding */ cropImageReset),
/* harmony export */   "cropImage": () => (/* binding */ cropImage),
/* harmony export */   "cropImageSuccess": () => (/* binding */ cropImageSuccess),
/* harmony export */   "cropImageReducer": () => (/* binding */ cropImageReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const CROP_IMAGE_INITIAL_STATE = null;
const cropImageReset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Crop Image] Reset');
const cropImage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Crop Image]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const cropImageSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Crop Image] Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CROP_IMAGE_REDUCER = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(CROP_IMAGE_INITIAL_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(cropImage, (state, { event }) => event), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(cropImageSuccess, (state, { imagePath }) => imagePath), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(cropImageReset, (state) => null));
function cropImageReducer(state, action) {
    return CROP_IMAGE_REDUCER(state, action);
}


/***/ }),

/***/ 2871:
/*!**********************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/ngrx.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgrxModule": () => (/* binding */ NgrxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _core_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/repositories/recipe.repository */ 582);
/* harmony import */ var _data_repository_recipe_repository_recipe_repository_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/repository/recipe-repository/recipe-repository-impl */ 4820);
/* harmony import */ var _crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crop_image/crop_image.reducer */ 4839);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _recipe_get_all_recipes_get_all_recipe_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe/get-all-recipes/get-all-recipe-reducer */ 7415);
/* harmony import */ var _recipe_get_recipe_get_recipe_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe/get-recipe/get-recipe-reducer */ 7446);
/* harmony import */ var _recipe_add_recipe_add_recipe_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe/add-recipe/add-recipe-reducer */ 3962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










const reducer = {
    cropImageReducer: _crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_2__.cropImageReducer,
    getAllRecipeReducer: _recipe_get_all_recipes_get_all_recipe_reducer__WEBPACK_IMPORTED_MODULE_3__.getAllRecipeReducer,
    getRecipeReducer: _recipe_get_recipe_get_recipe_reducer__WEBPACK_IMPORTED_MODULE_4__.getRecipeReducer,
    addRecipeReducer: _recipe_add_recipe_add_recipe_reducer__WEBPACK_IMPORTED_MODULE_5__.addRecipeReducer,
};
class NgrxModule {
}
NgrxModule.ɵfac = function NgrxModule_Factory(t) { return new (t || NgrxModule)(); };
NgrxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NgrxModule });
NgrxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        { provide: _core_repositories_recipe_repository__WEBPACK_IMPORTED_MODULE_0__.RecipeRepository, useClass: _data_repository_recipe_repository_recipe_repository_impl__WEBPACK_IMPORTED_MODULE_1__.RecipeRepositoryImpl }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forRoot(reducer),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NgrxModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreRootModule] }); })();


/***/ }),

/***/ 5770:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/add-recipe/add-recipe-action.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRecipeInProgress": () => (/* binding */ addRecipeInProgress),
/* harmony export */   "addRecipeSuccess": () => (/* binding */ addRecipeSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const addRecipeInProgress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Recipe] in progress', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addRecipeSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add Recipe] success');


/***/ }),

/***/ 3962:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/add-recipe/add-recipe-reducer.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRecipeReducer": () => (/* binding */ addRecipeReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _add_recipe_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-recipe-action */ 5770);


let ADD_RECIPE_INITIAL_STATE;
const ADD_RECIPE_REDUCER = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(ADD_RECIPE_INITIAL_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_add_recipe_action__WEBPACK_IMPORTED_MODULE_0__.addRecipeInProgress, (state, { recipe }) => {
    if (state) {
        return Object.assign(Object.assign({}, state), recipe);
    }
    return recipe;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_add_recipe_action__WEBPACK_IMPORTED_MODULE_0__.addRecipeSuccess, (state) => state));
function addRecipeReducer(state, action) {
    return ADD_RECIPE_REDUCER(state, action);
}


/***/ }),

/***/ 4161:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/get-all-recipes/get-all-recipe-actions.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recipeFetchInProgress": () => (/* binding */ recipeFetchInProgress),
/* harmony export */   "recipeFetchSuccess": () => (/* binding */ recipeFetchSuccess),
/* harmony export */   "recipeFetchFailure": () => (/* binding */ recipeFetchFailure)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const recipeFetchInProgress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Recipe ] in progress');
const recipeFetchSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Recipe ] fetch success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const recipeFetchFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Recipe ] fetch fail');


/***/ }),

/***/ 7415:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/get-all-recipes/get-all-recipe-reducer.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllRecipeReducer": () => (/* binding */ getAllRecipeReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-all-recipe-actions */ 4161);


const GET_ALL_RECIPE_INITIAL_STATE = [];
const GET_ALL_RECIPE_REDUCER = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(GET_ALL_RECIPE_INITIAL_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.recipeFetchInProgress, (state) => []), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.recipeFetchSuccess, (state, { recipe }) => [...state, recipe]), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.recipeFetchFailure, (state) => state));
function getAllRecipeReducer(state, action) {
    return GET_ALL_RECIPE_REDUCER(state, action);
}


/***/ }),

/***/ 5618:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/get-recipe/get-recipe-actions.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "singleRecipeInProgress": () => (/* binding */ singleRecipeInProgress),
/* harmony export */   "singleRecipeSuccess": () => (/* binding */ singleRecipeSuccess),
/* harmony export */   "singleRecipeFails": () => (/* binding */ singleRecipeFails)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const singleRecipeInProgress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Single Recipe] in progress');
const singleRecipeSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Single Recipe] success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const singleRecipeFails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Single Recipe] fails');


/***/ }),

/***/ 7446:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/get-recipe/get-recipe-reducer.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRecipeReducer": () => (/* binding */ getRecipeReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _get_recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-recipe-actions */ 5618);


let GET_RECIPE_INITIAL_STATE;
const GET_RECIPE_REDUCER = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(GET_RECIPE_INITIAL_STATE, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_get_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.singleRecipeInProgress, (state) => undefined), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_get_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.singleRecipeSuccess, (state, { recipe }) => recipe), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_get_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.singleRecipeFails, (state) => state));
function getRecipeReducer(state, action) {
    return GET_RECIPE_REDUCER(state, action);
}


/***/ }),

/***/ 5944:
/*!********************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/ngrx/recipe/recipe.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeService": () => (/* binding */ RecipeService)
/* harmony export */ });
/* harmony import */ var _crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crop_image/crop_image.reducer */ 4839);
/* harmony import */ var _add_recipe_add_recipe_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-recipe/add-recipe-action */ 5770);
/* harmony import */ var _get_all_recipes_get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-all-recipes/get-all-recipe-actions */ 4161);
/* harmony import */ var _get_recipe_get_recipe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-recipe/get-recipe-actions */ 5618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_usecases_get_all_recipes_usecase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/usecases/get-all-recipes.usecase */ 3278);
/* harmony import */ var _core_usecases_get_recipe_usecase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/usecases/get-recipe-usecase */ 1291);
/* harmony import */ var _core_usecases_add_recipe_usecase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/usecases/add-recipe.usecase */ 1187);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_modules_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/snackbar.service */ 3483);











class RecipeService {
    constructor(getAllRecipeUsecase, getRecipeUseCase, addRecipeUseCase, store, route, _snackBarServices) {
        this.getAllRecipeUsecase = getAllRecipeUsecase;
        this.getRecipeUseCase = getRecipeUseCase;
        this.addRecipeUseCase = addRecipeUseCase;
        this.store = store;
        this.route = route;
        this._snackBarServices = _snackBarServices;
    }
    getAllRecipe() {
        this.store.dispatch((0,_get_all_recipes_get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_2__.recipeFetchInProgress)());
        this.getAllRecipeUsecase.execute().subscribe((value) => {
            this.store.dispatch((0,_get_all_recipes_get_all_recipe_actions__WEBPACK_IMPORTED_MODULE_2__.recipeFetchSuccess)({ recipe: value }));
        });
    }
    getRecipe(_id) {
        this.getRecipeUseCase.execute(_id).subscribe((value) => {
            this.store.dispatch((0,_get_recipe_get_recipe_actions__WEBPACK_IMPORTED_MODULE_3__.singleRecipeSuccess)({ recipe: value }));
        });
    }
    addRecipeInProgress(recipe) {
        this.store.dispatch((0,_add_recipe_add_recipe_action__WEBPACK_IMPORTED_MODULE_1__.addRecipeInProgress)({ recipe }));
    }
    addRecipeSuccess(recipe) {
        if (recipe.displayPhoto) {
            fetch(recipe.displayPhoto)
                .then(res => res.blob())
                .then(displayPhoto => {
                const recipeFormData = new FormData();
                recipeFormData.append('name', recipe.name);
                recipeFormData.append('description', recipe.description);
                recipeFormData.append('reference', recipe.reference);
                recipeFormData.append('ingredients', JSON.stringify(recipe.ingredients));
                recipeFormData.append('displayPhoto', displayPhoto);
                this.addRecipeUseCase.execute(recipeFormData).subscribe((response) => {
                    const message = response.message;
                    this.store.dispatch((0,_add_recipe_add_recipe_action__WEBPACK_IMPORTED_MODULE_1__.addRecipeSuccess)());
                    this._snackBarServices.openDuratedSnackBar(message);
                    this.store.dispatch((0,_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__.cropImageReset)());
                    this.route.navigate(['/overview']);
                });
            });
        }
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_usecases_get_all_recipes_usecase__WEBPACK_IMPORTED_MODULE_4__.GetAllRecipesUsecase), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_usecases_get_recipe_usecase__WEBPACK_IMPORTED_MODULE_5__.GetRecipeUseCase), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_usecases_add_recipe_usecase__WEBPACK_IMPORTED_MODULE_6__.AddRecipeUseCase), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_modules_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService)); };
RecipeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2182:
/*!*************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/presentation.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationModule": () => (/* binding */ PresentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _recipe_crud_overview_recipe_crud_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-crud-overview/recipe-crud-overview.component */ 1529);
/* harmony import */ var _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-table/recipe-table.component */ 305);
/* harmony import */ var _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-info/recipe-info.component */ 4864);
/* harmony import */ var _crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crop-image/crop-image.component */ 2450);
/* harmony import */ var _recipe_add_recipe_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-add/recipe-add.component */ 2828);
/* harmony import */ var _recipe_update_recipe_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-update/recipe-update.component */ 346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-image-cropper */ 7545);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ 2271);
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngrx/ngrx.module */ 2871);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);

















class PresentationModule {
}
PresentationModule.ɵfac = function PresentationModule_Factory(t) { return new (t || PresentationModule)(); };
PresentationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PresentationModule });
PresentationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_11__.ImageCropperModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_7__.NgrxModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PresentationModule, { declarations: [_recipe_crud_overview_recipe_crud_overview_component__WEBPACK_IMPORTED_MODULE_0__.RecipeCrudOverviewComponent,
        _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_1__.RecipeTableComponent,
        _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_2__.RecipeInfoComponent,
        _crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_3__.CropImageComponent,
        _recipe_add_recipe_add_component__WEBPACK_IMPORTED_MODULE_4__.RecipeAddComponent,
        _recipe_update_recipe_update_component__WEBPACK_IMPORTED_MODULE_5__.RecipeUpdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_11__.ImageCropperModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_7__.NgrxModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule] }); })();


/***/ }),

/***/ 2828:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/recipe-add/recipe-add.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeAddComponent": () => (/* binding */ RecipeAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ 4201);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 3262);
/* harmony import */ var _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe-info/recipe-info.component */ 4864);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 9200);





class RecipeAddComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecipeAddComponent.ɵfac = function RecipeAddComponent_Factory(t) { return new (t || RecipeAddComponent)(); };
RecipeAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RecipeAddComponent, selectors: [["app-recipe-add"]], decls: 5, vars: 1, consts: [["submit", "", 3, "expand"]], template: function RecipeAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-container")(2, "app-recipe-info")(3, "app-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Create Recipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expand", true);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_2__.RecipeInfoComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtYWRkLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 1529:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/recipe-crud-overview/recipe-crud-overview.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeCrudOverviewComponent": () => (/* binding */ RecipeCrudOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/recipe/recipe.service */ 5944);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ 4201);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 3262);
/* harmony import */ var _shared_components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/floating-button/floating-button.component */ 2537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe-table/recipe-table.component */ 305);











function RecipeCrudOverviewComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-recipe-table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const recipes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("recipes", recipes_r1);
  }
}

function RecipeCrudOverviewComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RecipeCrudOverviewComponent_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const recipes_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", recipes_r1.length != 0);
  }
}

class RecipeCrudOverviewComponent {
  constructor(recipeService, store) {
    this.recipeService = recipeService;
    this.store = store;
    this.recipes$ = this.store.select('getAllRecipeReducer');
  }

  ngOnInit() {
    this.recipeService.getAllRecipe();
  }

}

RecipeCrudOverviewComponent.ɵfac = function RecipeCrudOverviewComponent_Factory(t) {
  return new (t || RecipeCrudOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};

RecipeCrudOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RecipeCrudOverviewComponent,
  selectors: [["app-recipe-crud-overview"]],
  decls: 9,
  vars: 3,
  consts: [[1, "flex", "flex-col"], ["routerLink", "add"], [4, "ngIf"], [3, "recipes"]],
  template: function RecipeCrudOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-container", 0)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Recipe Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-floating-button", 1)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RecipeCrudOverviewComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 1, ctx.recipes$));
    }
  },
  directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _shared_components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_3__.FloatingButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_4__.RecipeTableComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtY3J1ZC1vdmVydmlldy5jb21wb25lbnQuc2FzcyJ9 */"]
});

/***/ }),

/***/ 4864:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/recipe-info/recipe-info.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeInfoComponent": () => (/* binding */ RecipeInfoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _ngrx_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/crop_image/crop_image.reducer */ 4839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/recipe/recipe.service */ 5944);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 9200);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 4178);
/* harmony import */ var _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/checkbox/checkbox.component */ 6491);
/* harmony import */ var _shared_pipes_typeof_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/typeof.pipe */ 4285);













function RecipeInfoComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(" + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r0.imagePath$) + ")");
  }
}

function RecipeInfoComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(" + (ctx_r1.recipe == null ? null : ctx_r1.recipe.displayPhoto) + ")");
  }
}

function RecipeInfoComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 12)(1, "app-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RecipeInfoComponent_li_14_Template_app_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r5.ingredientsListener($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ingridient_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ingridient_r4);
  }
}

const _c0 = [[["", "submit", ""]]];
const _c1 = ["[submit]"];
class RecipeInfoComponent {
  constructor(_fb, router, store, recipeService) {
    this._fb = _fb;
    this.router = router;
    this.store = store;
    this.recipeService = recipeService;
    this.recipe = null;
    this.ingredients = [];
    this.ingredientList = ['Talong', 'Okra', 'Repolyo', 'Ampalaya', 'KangKong', 'Carrot', 'Kamatis', 'Sayote', 'Upo', 'Sitaw'];
    this.imagePath$ = this.store.select('cropImageReducer');
    this.recipeInprogress$ = this.store.select('addRecipeReducer');
    this.form = this._fb.group({
      name: [],
      description: [],
      reference: []
    });
  }

  ngOnDestroy() {
    this.recipeService.addRecipeInProgress(Object.assign(Object.assign({}, this.form.value), {
      ingredients: this.ingredients
    }));
  }

  ngOnInit() {
    if (this.recipe) {
      this.form.patchValue({
        name: this.recipe.name,
        description: this.recipe.description,
        reference: this.recipe.reference
      });
    } else {
      this.recipeInprogress$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(recipe => {
        if (recipe) {
          this.form.patchValue(Object.assign({}, recipe));
        }
      });
    }
  }

  fileChangeEvent(event) {
    this.store.dispatch((0,_ngrx_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__.cropImage)({
      event
    }));
    this.router.navigate(['/overview/add/crop-image']);
  }

  ingredientsListener($event) {
    if ($event.checked) {
      this.ingredients.push($event.value);
    } else {
      this.ingredients = this.ingredients.filter(ingredient => ingredient != $event.value);
    }
  }

  submit() {
    const name = this.form.get('name');
    const description = this.form.get('description');
    const reference = this.form.get('reference');
    this.imagePath$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(imagePath => {
      this.recipeService.addRecipeSuccess({
        name: name === null || name === void 0 ? void 0 : name.value,
        description: description === null || description === void 0 ? void 0 : description.value,
        ingredients: this.ingredients,
        reference: reference === null || reference === void 0 ? void 0 : reference.value,
        displayPhoto: imagePath
      });
    });
  }

}

RecipeInfoComponent.ɵfac = function RecipeInfoComponent_Factory(t) {
  return new (t || RecipeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService));
};

RecipeInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RecipeInfoComponent,
  selectors: [["app-recipe-info"]],
  inputs: {
    recipe: "recipe"
  },
  ngContentSelectors: _c1,
  decls: 16,
  vars: 8,
  consts: [[1, "flex", "flex-col", "items-center", "justify-center", "py-4", "space-y-2"], [4, "ngIf"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["fileUploadElement", ""], [3, "click"], [3, "formGroup", "ngSubmit"], ["placeholder", "Name", "formControlName", "name"], ["placeholder", "Description", "formControlName", "description"], ["placeholder", "References", "textArea", "", "formControlName", "reference"], [1, "my-4"], ["class", "mt-[12px]", 4, "ngFor", "ngForOf"], ["id", "recipe-picture"], [1, "mt-[12px]"], [3, "value", "change"]],
  template: function RecipeInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RecipeInfoComponent_ng_container_1_Template, 3, 4, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "typeof");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RecipeInfoComponent_ng_container_4_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RecipeInfoComponent_Template_input_change_5_listener($event) {
        return ctx.fileChangeEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RecipeInfoComponent_Template_app_button_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);

        return _r2.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Select Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RecipeInfoComponent_Template_form_ngSubmit_9_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-input", 6)(11, "app-input", 7)(12, "app-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RecipeInfoComponent_li_14_Template, 2, 1, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, ctx.imagePath$)) === "string");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.recipe == null ? null : ctx.recipe.displayPhoto);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ingredientList);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent],
  pipes: [_shared_pipes_typeof_pipe__WEBPACK_IMPORTED_MODULE_5__.TypeofPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["#recipe-picture[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 800px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1pbmZvLmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdlYiUyMEZyb250ZW5kXFxzcmNcXGFwcFxcbW9kdWxlc1xccmVjaXBlLWNydWRcXHByZXNlbnRhdGlvblxccmVjaXBlLWluZm9cXHJlY2lwZS1pbmZvLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNDRiIsImZpbGUiOiJyZWNpcGUtaW5mby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWNpcGUtcGljdHVyZVxyXG4gIGhlaWdodDogNDAwcHhcclxuICB3aWR0aDogODAwcHhcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlclxyXG4iLCIjcmVjaXBlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn0iXX0= */"]
});

/***/ }),

/***/ 305:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/recipe-table/recipe-table.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeTableComponent": () => (/* binding */ RecipeTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);








function RecipeTableComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeTableComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12._id, " ");
} }
function RecipeTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeTableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
} }
function RecipeTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Decription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.description, " ");
} }
function RecipeTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.reference, " ");
} }
function RecipeTableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingridients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeTableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.ingredients, " ");
} }
function RecipeTableComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function (a1) { return ["update", a1]; };
function RecipeTableComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r17._id));
} }
const _c1 = function () { return [5, 10, 25, 100]; };
/**
 * @title Basic use of `<table mat-table>`
 */
class RecipeTableComponent {
    constructor() {
        this.recipes = [];
        this.overviewTableColumns = ['_id', 'name', 'description', 'reference', 'ingredients'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource();
    }
    ngOnInit() {
        this.dataSource.data = this.recipes;
    }
    ngAfterViewInit() {
        if (this.paginator) {
            this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
            this.dataSource.sort = this.sort;
        }
    }
}
RecipeTableComponent.ɵfac = function RecipeTableComponent_Factory(t) { return new (t || RecipeTableComponent)(); };
RecipeTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeTableComponent, selectors: [["app-recipe-table"]], viewQuery: function RecipeTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { recipes: "recipes" }, decls: 19, vars: 5, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "_id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "reference"], ["matColumnDef", "ingredients"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cursor-pointer hover:bg-gray-100", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of recipes", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 1, "cursor-pointer", "hover:bg-gray-100", 3, "routerLink"]], template: function RecipeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecipeTableComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecipeTableComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecipeTableComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecipeTableComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecipeTableComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecipeTableComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecipeTableComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipeTableComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RecipeTableComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipeTableComponent_td_15_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecipeTableComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecipeTableComponent_tr_17_Template, 1, 3, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-paginator", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.overviewTableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.overviewTableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS10YWJsZS5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXZWIlMjBGcm9udGVuZFxcc3JjXFxhcHBcXG1vZHVsZXNcXHJlY2lwZS1jcnVkXFxwcmVzZW50YXRpb25cXHJlY2lwZS10YWJsZVxccmVjaXBlLXRhYmxlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InJlY2lwZS10YWJsZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlXHJcbiAgd2lkdGg6IDEwMCVcclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 346:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/recipe-crud/presentation/recipe-update/recipe-update.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeUpdateComponent": () => (/* binding */ RecipeUpdateComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/crop_image/crop_image.reducer */ 4839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx/recipe/recipe.service */ 5944);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ 4201);
/* harmony import */ var _shared_components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/floating-button/floating-button.component */ 2537);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 3262);
/* harmony import */ var _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe-info/recipe-info.component */ 4864);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 9200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);












class RecipeUpdateComponent {
  constructor(activatedRoute, recipeService, store) {
    this.activatedRoute = activatedRoute;
    this.recipeService = recipeService;
    this.store = store;
    this.store.dispatch((0,_ngrx_crop_image_crop_image_reducer__WEBPACK_IMPORTED_MODULE_0__.cropImageReset)());
    this.recipe$ = this.store.select('getRecipeReducer');
  }

  ngOnInit() {
    const recipe_id = this.activatedRoute.snapshot.paramMap.get('id');

    if (recipe_id) {
      this.recipeService.getRecipe(recipe_id);
    }
  }

}

RecipeUpdateComponent.ɵfac = function RecipeUpdateComponent_Factory(t) {
  return new (t || RecipeUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
};

RecipeUpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RecipeUpdateComponent,
  selectors: [["app-recipe-update"]],
  decls: 9,
  vars: 4,
  consts: [[3, "recipe"], [3, "expand"]],
  template: function RecipeUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-floating-button")(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-recipe-info", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Update Recipe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("recipe", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 2, ctx.recipe$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expand", true);
    }
  },
  directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_3__.FloatingButtonComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_5__.RecipeInfoComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__.ButtonComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtdXBkYXRlLmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 6932:
/*!*******************************************************************!*\
  !*** ./src/app/modules/recipe-crud/recipe-crud-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeCrudRoutingModule": () => (/* binding */ RecipeCrudRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _presentation_crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation/crop-image/crop-image.component */ 2450);
/* harmony import */ var _presentation_recipe_crud_overview_recipe_crud_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation/recipe-crud-overview/recipe-crud-overview.component */ 1529);
/* harmony import */ var _presentation_recipe_add_recipe_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/recipe-add/recipe-add.component */ 2828);
/* harmony import */ var _presentation_recipe_update_recipe_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentation/recipe-update/recipe-update.component */ 346);
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.guard */ 1334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: 'overview',
        component: _presentation_recipe_crud_overview_recipe_crud_overview_component__WEBPACK_IMPORTED_MODULE_1__.RecipeCrudOverviewComponent,
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    },
    {
        path: 'overview/add',
        component: _presentation_recipe_add_recipe_add_component__WEBPACK_IMPORTED_MODULE_2__.RecipeAddComponent,
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    },
    {
        path: 'overview/add/crop-image',
        component: _presentation_crop_image_crop_image_component__WEBPACK_IMPORTED_MODULE_0__.CropImageComponent,
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    },
    {
        path: 'overview/update/:id',
        component: _presentation_recipe_update_recipe_update_component__WEBPACK_IMPORTED_MODULE_3__.RecipeUpdateComponent,
        canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    },
];
class RecipeCrudRoutingModule {
}
RecipeCrudRoutingModule.ɵfac = function RecipeCrudRoutingModule_Factory(t) { return new (t || RecipeCrudRoutingModule)(); };
RecipeCrudRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RecipeCrudRoutingModule });
RecipeCrudRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RecipeCrudRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 2308:
/*!***********************************************************!*\
  !*** ./src/app/modules/recipe-crud/recipe-crud.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeCrudModule": () => (/* binding */ RecipeCrudModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation/presentation.module */ 2182);
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data.module */ 5540);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 7610);
/* harmony import */ var _recipe_crud_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-crud-routing.module */ 6932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class RecipeCrudModule {
}
RecipeCrudModule.ɵfac = function RecipeCrudModule_Factory(t) { return new (t || RecipeCrudModule)(); };
RecipeCrudModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RecipeCrudModule });
RecipeCrudModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_0__.PresentationModule,
            _recipe_crud_routing_module__WEBPACK_IMPORTED_MODULE_3__.RecipeCrudRoutingModule,
            _data_data_module__WEBPACK_IMPORTED_MODULE_1__.DataModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RecipeCrudModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_0__.PresentationModule,
        _recipe_crud_routing_module__WEBPACK_IMPORTED_MODULE_3__.RecipeCrudRoutingModule,
        _data_data_module__WEBPACK_IMPORTED_MODULE_1__.DataModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule] }); })();


/***/ }),

/***/ 9200:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/button/button.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = function (a0) { return { "w-full": a0 }; };
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.title = 'Button';
        this.expand = false;
        this.click = undefined;
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { title: "title", expand: "expand", click: "click" }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [["mat-raised-button", "", "color", "primary", 3, "ngClass", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.click; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.expand));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6491:
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/components/checkbox/checkbox.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);



class CheckboxComponent {
    constructor() {
        this.value = '';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    toggleNewItem($event) {
        this.change.emit({
            checked: $event.checked,
            value: this.value,
        });
    }
    ngOnInit() {
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], inputs: { value: "value" }, outputs: { change: "change" }, decls: 2, vars: 1, consts: [[3, "change"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleNewItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 3262:
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/container/container.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerComponent": () => (/* binding */ ContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class ContainerComponent {
    constructor() {
        this.class = 'block container mx-auto py-3 px-4 lg:px-0';
    }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], hostVars: 2, hostBindings: function ContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 2537:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/floating-button/floating-button.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingButtonComponent": () => (/* binding */ FloatingButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7317);


const _c0 = ["*"];
class FloatingButtonComponent {
    constructor() {
        this.click = undefined;
    }
    ngOnInit() {
    }
}
FloatingButtonComponent.ɵfac = function FloatingButtonComponent_Factory(t) { return new (t || FloatingButtonComponent)(); };
FloatingButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FloatingButtonComponent, selectors: [["app-floating-button"]], inputs: { click: "click" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon", 1, "bottom-4", "right-4", "!fixed", "z-50", 3, "click"]], template: function FloatingButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FloatingButtonComponent_Template_button_click_0_listener() { return ctx.click; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG9hdGluZy1idXR0b24uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 4201:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/header/header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [["color", "primary"], ["routerLink", "/overview", 1, "cursor-pointer"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KUBO API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  height: 8vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXZWIlMjBGcm9udGVuZFxcc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJcclxuICBoZWlnaHQ6IDh2aFxyXG4iLCJtYXQtdG9vbGJhciB7XG4gIGhlaWdodDogOHZoO1xufSJdfQ== */"] });


/***/ }),

/***/ 4178:
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/components/input/input.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 3365);





class InputComponent {
    constructor() {
        this.placeholder = 'Input placeholder';
        this.type = 'text';
        this.value = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    change($event) {
        this.onChange($event.target.value);
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { placeholder: "placeholder", type: "type", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputComponent),
                multi: true
            }
        ])], decls: 4, vars: 4, consts: [["appearance", "fill", 1, "w-full"], ["matInput", "", 3, "placeholder", "value", "type", "change"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputComponent_Template_input_change_3_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("value", ctx.value)("type", ctx.type);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 8979:
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/components/snackbar/snackbar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarComponent": () => (/* binding */ SnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class SnackbarComponent {
    constructor(data) {
        this.data = data;
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA)); };
SnackbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 2, vars: 1, consts: [[1, "message"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
    } }, styles: [".message[_ngcontent-%COMP%] {\n  color: #3a1900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGt1Ym8tdGhlbWUuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxXZWIlMjBGcm9udGVuZFxcc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcY29tcG9uZW50c1xcc25hY2tiYXJcXHNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NGYTtBQ0NmIiwiZmlsZSI6InNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBrdWJvLXRoZW1lXHJcblxyXG4ubWVzc2FnZVxyXG4gIGNvbG9yOiAkcHJpbWFyeUNvbG9yXHJcbiIsIlxyXG4kcHJpbWFyeUNvbG9yOiAjM2ExOTAwXHJcbiIsIi5tZXNzYWdlIHtcbiAgY29sb3I6ICMzYTE5MDA7XG59Il19 */"] });


/***/ }),

/***/ 4285:
/*!*****************************************************!*\
  !*** ./src/app/modules/shared/pipes/typeof.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeofPipe": () => (/* binding */ TypeofPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TypeofPipe {
    transform(value) {
        return typeof value;
    }
}
TypeofPipe.ɵfac = function TypeofPipe_Factory(t) { return new (t || TypeofPipe)(); };
TypeofPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "typeof", type: TypeofPipe, pure: true });


/***/ }),

/***/ 1334:
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/services/auth.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_authentication_presentation_api_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-authentication/presentation/api-authentication.service */ 9840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuthenticated = this.authenticationService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/']);
        }
        return isAuthenticated;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_authentication_presentation_api_authentication_service__WEBPACK_IMPORTED_MODULE_0__.ApiAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3483:
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/services/snackbar.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/snackbar/snackbar.component */ 8979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);



class SnackbarService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this._defaultDurationInSeconds = 2;
        this._horizontalPosition = 'center';
        this._verticalPosition = 'top';
    }
    openDuratedSnackBar(message) {
        this._snackBar.openFromComponent(_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.SnackbarComponent, {
            duration: this._defaultDurationInSeconds * 1000,
            horizontalPosition: this._horizontalPosition,
            verticalPosition: this._verticalPosition,
            panelClass: ['snackbar-background'],
            data: {
                message
            }
        });
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar)); };
SnackbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2271:
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 4201);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input/input.component */ 4178);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button/button.component */ 9200);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container/container.component */ 3262);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ 6491);
/* harmony import */ var _components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/floating-button/floating-button.component */ 2537);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _pipes_typeof_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/typeof.pipe */ 4285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/snackbar/snackbar.component */ 8979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);


















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent,
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent,
        _components_container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent,
        _components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_5__.FloatingButtonComponent,
        _pipes_typeof_pipe__WEBPACK_IMPORTED_MODULE_6__.TypeofPipe,
        _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__.SnackbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent,
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent,
        _components_container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent,
        _components_floating_button_floating_button_component__WEBPACK_IMPORTED_MODULE_5__.FloatingButtonComponent,
        _pipes_typeof_pipe__WEBPACK_IMPORTED_MODULE_6__.TypeofPipe] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://localhost:3000/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map