(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_pages_association_association_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/pages/association/association.component */ "./src/app/pages/association/association.component.ts");
/* harmony import */ var _app_pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/pages/authentication/authentication.component */ "./src/app/pages/authentication/authentication.component.ts");
/* harmony import */ var _app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _app_pages_choose_favorite_news_choose_favorite_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/pages/choose-favorite-news/choose-favorite-news.component */ "./src/app/pages/choose-favorite-news/choose-favorite-news.component.ts");
/* harmony import */ var _app_pages_choose_favorite_shows_choose_favorite_shows_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/pages/choose-favorite-shows/choose-favorite-shows.component */ "./src/app/pages/choose-favorite-shows/choose-favorite-shows.component.ts");
/* harmony import */ var _app_pages_choose_favorite_sport_shows_choose_favorite_sport_shows_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component */ "./src/app/pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component.ts");
/* harmony import */ var _app_pages_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/pages/find-friends/find-friends.component */ "./src/app/pages/find-friends/find-friends.component.ts");
/* harmony import */ var _app_pages_news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _app_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/pages/shows/shows.component */ "./src/app/pages/shows/shows.component.ts");
/* harmony import */ var _app_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/pages/sports/sports.component */ "./src/app/pages/sports/sports.component.ts");
/* harmony import */ var _app_pages_feat_home_feat_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/pages/feat-home/feat-home.component */ "./src/app/pages/feat-home/feat-home.component.ts");
/* harmony import */ var _app_pages_content_info_content_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/pages/content-info/content-info.component */ "./src/app/pages/content-info/content-info.component.ts");
/* harmony import */ var _app_pages_content_info_sports_content_info_sports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/pages/content-info-sports/content-info-sports.component */ "./src/app/pages/content-info-sports/content-info-sports.component.ts");
/* harmony import */ var _pages_enter_feat_enter_feat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/enter-feat/enter-feat.component */ "./src/app/pages/enter-feat/enter-feat.component.ts");
/* harmony import */ var _pages_feat_type_feat_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/feat-type/feat-type.component */ "./src/app/pages/feat-type/feat-type.component.ts");
/* harmony import */ var _pages_choose_show_feat_content_choose_show_feat_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/choose-show-feat-content/choose-show-feat-content.component */ "./src/app/pages/choose-show-feat-content/choose-show-feat-content.component.ts");
/* harmony import */ var _pages_choose_sport_feat_content_choose_sport_feat_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/choose-sport-feat-content/choose-sport-feat-content.component */ "./src/app/pages/choose-sport-feat-content/choose-sport-feat-content.component.ts");
/* harmony import */ var _pages_share_feat_share_feat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/share-feat/share-feat.component */ "./src/app/pages/share-feat/share-feat.component.ts");
/* harmony import */ var _pages_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/initial-page/initial-page.component */ "./src/app/pages/initial-page/initial-page.component.ts");
/* harmony import */ var _pages_waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/waiting-room/waiting-room.component */ "./src/app/pages/waiting-room/waiting-room.component.ts");
























const routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'welcome', component: _pages_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_20__["InitialPageComponent"] },
    //main pages
    { path: 'news', component: _app_pages_news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"] },
    { path: 'shows', component: _app_pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_10__["ShowsComponent"] },
    { path: 'sports', component: _app_pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_11__["SportsComponent"] },
    { path: 'feat-home', component: _app_pages_feat_home_feat_home_component__WEBPACK_IMPORTED_MODULE_12__["FeatHomeComponent"] },
    //feat pages
    { path: 'enter-feat', component: _pages_enter_feat_enter_feat_component__WEBPACK_IMPORTED_MODULE_15__["EnterFeatComponent"] },
    { path: 'choose-feat-type', component: _pages_feat_type_feat_type_component__WEBPACK_IMPORTED_MODULE_16__["FeatTypeComponent"] },
    { path: 'choose-show-feat-content', component: _pages_choose_show_feat_content_choose_show_feat_content_component__WEBPACK_IMPORTED_MODULE_17__["ChooseShowFeatContentComponent"] },
    { path: 'choose-sport-feat-content', component: _pages_choose_sport_feat_content_choose_sport_feat_content_component__WEBPACK_IMPORTED_MODULE_18__["ChooseSportFeatContentComponent"] },
    { path: 'share-feat/:id', component: _pages_share_feat_share_feat_component__WEBPACK_IMPORTED_MODULE_19__["ShareFeatComponent"] },
    { path: 'waiting-room/:id', component: _pages_waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_21__["WaitingRoomComponent"] },
    //content
    { path: 'content-info/:id', component: _app_pages_content_info_content_info_component__WEBPACK_IMPORTED_MODULE_13__["ContentInfoComponent"] },
    { path: 'content-info-sports/:id', component: _app_pages_content_info_sports_content_info_sports_component__WEBPACK_IMPORTED_MODULE_14__["ContentInfoSportsComponent"] },
    //initial steps
    { path: 'step-01', component: _app_pages_choose_favorite_shows_choose_favorite_shows_component__WEBPACK_IMPORTED_MODULE_6__["ChooseFavoriteShowsComponent"] },
    { path: 'step-02', component: _app_pages_choose_favorite_sport_shows_choose_favorite_sport_shows_component__WEBPACK_IMPORTED_MODULE_7__["ChooseFavoriteSportShowsComponent"] },
    { path: 'step-03', component: _app_pages_choose_favorite_news_choose_favorite_news_component__WEBPACK_IMPORTED_MODULE_5__["ChooseFavoriteNewsComponent"] },
    { path: 'find-friends', component: _app_pages_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_8__["FindFriendsComponent"] },
    //account
    { path: 'login', component: _app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'authentication', component: _app_pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"] },
    //premium services
    { path: 'association', component: _app_pages_association_association_component__WEBPACK_IMPORTED_MODULE_2__["AssociationComponent"] },
    { path: '**', component: _app_pages_news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'GloboFeat';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/authentication/authentication.component */ "./src/app/pages/authentication/authentication.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_retrieve_password_retrieve_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/retrieve-password/retrieve-password.component */ "./src/app/pages/retrieve-password/retrieve-password.component.ts");
/* harmony import */ var _pages_choose_favorite_shows_choose_favorite_shows_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/choose-favorite-shows/choose-favorite-shows.component */ "./src/app/pages/choose-favorite-shows/choose-favorite-shows.component.ts");
/* harmony import */ var _pages_choose_favorite_sport_shows_choose_favorite_sport_shows_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component */ "./src/app/pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component.ts");
/* harmony import */ var _pages_choose_favorite_news_choose_favorite_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/choose-favorite-news/choose-favorite-news.component */ "./src/app/pages/choose-favorite-news/choose-favorite-news.component.ts");
/* harmony import */ var _pages_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/find-friends/find-friends.component */ "./src/app/pages/find-friends/find-friends.component.ts");
/* harmony import */ var _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/create-account/create-account.component */ "./src/app/pages/create-account/create-account.component.ts");
/* harmony import */ var _pages_association_association_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/association/association.component */ "./src/app/pages/association/association.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/shows/shows.component */ "./src/app/pages/shows/shows.component.ts");
/* harmony import */ var _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/sports/sports.component */ "./src/app/pages/sports/sports.component.ts");
/* harmony import */ var _pages_content_info_content_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/content-info/content-info.component */ "./src/app/pages/content-info/content-info.component.ts");
/* harmony import */ var _pages_feat_home_feat_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/feat-home/feat-home.component */ "./src/app/pages/feat-home/feat-home.component.ts");
/* harmony import */ var _pages_enter_feat_enter_feat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/enter-feat/enter-feat.component */ "./src/app/pages/enter-feat/enter-feat.component.ts");
/* harmony import */ var _pages_feat_type_feat_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/feat-type/feat-type.component */ "./src/app/pages/feat-type/feat-type.component.ts");
/* harmony import */ var _pages_choose_show_feat_content_choose_show_feat_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/choose-show-feat-content/choose-show-feat-content.component */ "./src/app/pages/choose-show-feat-content/choose-show-feat-content.component.ts");
/* harmony import */ var _pages_choose_sport_feat_content_choose_sport_feat_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/choose-sport-feat-content/choose-sport-feat-content.component */ "./src/app/pages/choose-sport-feat-content/choose-sport-feat-content.component.ts");
/* harmony import */ var _pages_share_feat_share_feat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/share-feat/share-feat.component */ "./src/app/pages/share-feat/share-feat.component.ts");
/* harmony import */ var _pages_content_info_sports_content_info_sports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/content-info-sports/content-info-sports.component */ "./src/app/pages/content-info-sports/content-info-sports.component.ts");
/* harmony import */ var _pages_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/initial-page/initial-page.component */ "./src/app/pages/initial-page/initial-page.component.ts");
/* harmony import */ var _pages_waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/waiting-room/waiting-room.component */ "./src/app/pages/waiting-room/waiting-room.component.ts");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _pages_retrieve_password_retrieve_password_component__WEBPACK_IMPORTED_MODULE_6__["RetrievePasswordComponent"],
        _pages_choose_favorite_shows_choose_favorite_shows_component__WEBPACK_IMPORTED_MODULE_7__["ChooseFavoriteShowsComponent"],
        _pages_choose_favorite_sport_shows_choose_favorite_sport_shows_component__WEBPACK_IMPORTED_MODULE_8__["ChooseFavoriteSportShowsComponent"],
        _pages_choose_favorite_news_choose_favorite_news_component__WEBPACK_IMPORTED_MODULE_9__["ChooseFavoriteNewsComponent"],
        _pages_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_10__["FindFriendsComponent"],
        _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_11__["CreateAccountComponent"],
        _pages_association_association_component__WEBPACK_IMPORTED_MODULE_12__["AssociationComponent"],
        _pages_news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
        _pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_14__["ShowsComponent"],
        _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_15__["SportsComponent"],
        _pages_content_info_content_info_component__WEBPACK_IMPORTED_MODULE_16__["ContentInfoComponent"],
        _pages_feat_home_feat_home_component__WEBPACK_IMPORTED_MODULE_17__["FeatHomeComponent"],
        _pages_enter_feat_enter_feat_component__WEBPACK_IMPORTED_MODULE_18__["EnterFeatComponent"],
        _pages_feat_type_feat_type_component__WEBPACK_IMPORTED_MODULE_19__["FeatTypeComponent"],
        _pages_choose_show_feat_content_choose_show_feat_content_component__WEBPACK_IMPORTED_MODULE_20__["ChooseShowFeatContentComponent"],
        _pages_choose_sport_feat_content_choose_sport_feat_content_component__WEBPACK_IMPORTED_MODULE_21__["ChooseSportFeatContentComponent"],
        _pages_share_feat_share_feat_component__WEBPACK_IMPORTED_MODULE_22__["ShareFeatComponent"],
        _pages_content_info_sports_content_info_sports_component__WEBPACK_IMPORTED_MODULE_23__["ContentInfoSportsComponent"],
        _pages_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_24__["InitialPageComponent"],
        _pages_waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_25__["WaitingRoomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _pages_retrieve_password_retrieve_password_component__WEBPACK_IMPORTED_MODULE_6__["RetrievePasswordComponent"],
                    _pages_choose_favorite_shows_choose_favorite_shows_component__WEBPACK_IMPORTED_MODULE_7__["ChooseFavoriteShowsComponent"],
                    _pages_choose_favorite_sport_shows_choose_favorite_sport_shows_component__WEBPACK_IMPORTED_MODULE_8__["ChooseFavoriteSportShowsComponent"],
                    _pages_choose_favorite_news_choose_favorite_news_component__WEBPACK_IMPORTED_MODULE_9__["ChooseFavoriteNewsComponent"],
                    _pages_find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_10__["FindFriendsComponent"],
                    _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_11__["CreateAccountComponent"],
                    _pages_association_association_component__WEBPACK_IMPORTED_MODULE_12__["AssociationComponent"],
                    _pages_news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
                    _pages_shows_shows_component__WEBPACK_IMPORTED_MODULE_14__["ShowsComponent"],
                    _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_15__["SportsComponent"],
                    _pages_content_info_content_info_component__WEBPACK_IMPORTED_MODULE_16__["ContentInfoComponent"],
                    _pages_feat_home_feat_home_component__WEBPACK_IMPORTED_MODULE_17__["FeatHomeComponent"],
                    _pages_enter_feat_enter_feat_component__WEBPACK_IMPORTED_MODULE_18__["EnterFeatComponent"],
                    _pages_feat_type_feat_type_component__WEBPACK_IMPORTED_MODULE_19__["FeatTypeComponent"],
                    _pages_choose_show_feat_content_choose_show_feat_content_component__WEBPACK_IMPORTED_MODULE_20__["ChooseShowFeatContentComponent"],
                    _pages_choose_sport_feat_content_choose_sport_feat_content_component__WEBPACK_IMPORTED_MODULE_21__["ChooseSportFeatContentComponent"],
                    _pages_share_feat_share_feat_component__WEBPACK_IMPORTED_MODULE_22__["ShareFeatComponent"],
                    _pages_content_info_sports_content_info_sports_component__WEBPACK_IMPORTED_MODULE_23__["ContentInfoSportsComponent"],
                    _pages_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_24__["InitialPageComponent"],
                    _pages_waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_25__["WaitingRoomComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/association/association.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/association/association.component.ts ***!
  \************************************************************/
/*! exports provided: AssociationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationComponent", function() { return AssociationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AssociationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssociationComponent.ɵfac = function AssociationComponent_Factory(t) { return new (t || AssociationComponent)(); };
AssociationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssociationComponent, selectors: [["app-association"]], decls: 17, vars: 0, consts: [["id", "association"], ["src", "../../../assets/association.png"], ["id", "divisor"], ["id", "login"], ["id", "later"]], template: function AssociationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAZER ASSOCIA\u00C7\u00C3O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CONTA GLOBO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Uma s\u00F3 conta para o Globoplay e todos os produtos Globo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fazer login na Globo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Associar depois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc29jaWF0aW9uL2Fzc29jaWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssociationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-association',
                templateUrl: './association.component.html',
                styleUrls: ['./association.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/authentication/authentication.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.component.ts ***!
  \******************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                //user is logged in
                                jquery__WEBPACK_IMPORTED_MODULE_0__('.exit').css('display', 'block');
                                jquery__WEBPACK_IMPORTED_MODULE_0__('.add_friends').css('display', 'block');
                                jquery__WEBPACK_IMPORTED_MODULE_0__('.personalize_profile').css('display', 'block');
                            }
                        });
                    }
                });
            };
        }
        else {
            //user is not logged in
            jquery__WEBPACK_IMPORTED_MODULE_0__('.login_div').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.create_account_div').css('display', 'block');
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__('.add_friends').click(function () {
            let current_user = current_user_email.split('@')[0];
            var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&restore_friends=true';
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            window.location.pathname = '/find-friends';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.personalize_profile').click(function () {
            let current_user = current_user_email.split('@')[0];
            var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&restore_personalization=true';
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            window.location.pathname = '/step-01';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.exit').click(function () {
            document.cookie = 'username' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
            window.location.pathname = '/news';
        });
    }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(); };
AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["app-authentication"]], decls: 26, vars: 0, consts: [["id", "authentication"], ["src", "../../../assets/logo.png"], ["href", "/login"], ["id", "login", 1, "login_div", 2, "display", "none"], ["href", "https://login.globo.com/cadastro/4728?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D4728%26urlIntervencao%3Dhttps%3A%2F%2Fs.glbimg.com%2Fgl%2Fba%2Fbarra-globocom.callback.html%2523https%253A%252F%252Fwww.globo.com%252F&_ga=2.115386063.87881601.1588196625-2821541452.1587778078&glbProduct=UA-296593-2&component=barra_gcom"], ["id", "create-account", 1, "create_account_div", 2, "display", "none"], ["id", "login", 1, "add_friends", 2, "display", "none"], ["id", "login", 1, "personalize_profile", 2, "display", "none"], ["id", "login", 1, "exit", 2, "margin-top", "7%", "background", "#FFD439"], [2, "margin-left", "-5%", "text-align", "center"], ["href", "/news"], ["id", "later"]], template: function AuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fazer novo login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cadastre-se de gra\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Adicionar amigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Personalizar perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Voltar a navegar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-authentication',
                templateUrl: './authentication.component.html',
                styleUrls: ['./authentication.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/choose-favorite-news/choose-favorite-news.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/choose-favorite-news/choose-favorite-news.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChooseFavoriteNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseFavoriteNewsComponent", function() { return ChooseFavoriteNewsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ChooseFavoriteNewsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementsByClassName('item');
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
        }
        let row_04 = document.getElementById('row-04');
        row_04.style.display = 'none';
        var current_user = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user = element.split('=')[1];
            }
        });
        if (current_user == undefined) {
            window.location.pathname = '/news';
        }
        current_user = current_user.split('@')[0];
        jquery__WEBPACK_IMPORTED_MODULE_0__(".load-more").click(function () {
            let load_more = document.getElementById('load-more');
            load_more.style.display = 'none';
            let row_04 = document.getElementById('row-04');
            row_04.style.display = 'block';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".save").click(function () {
            let items = document.getElementsByClassName('item');
            let array_is_empty = true;
            for (let i = 0; i < items.length; i++) {
                const item_class = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('a')[0].className;
                if (item_class.includes('active')) {
                    array_is_empty = false;
                    var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setNewsCategory=' + jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr("alt");
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open("GET", url, false);
                    xmlHttp.send(null);
                }
            }
            if (!array_is_empty)
                window.location.pathname = '/find-friends';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".quiz-answer").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass("active");
        });
    }
}
ChooseFavoriteNewsComponent.ɵfac = function ChooseFavoriteNewsComponent_Factory(t) { return new (t || ChooseFavoriteNewsComponent)(); };
ChooseFavoriteNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChooseFavoriteNewsComponent, selectors: [["app-choose-favorite-news"]], decls: 69, vars: 0, consts: [["id", "choose-favorite-news"], ["id", "step"], ["id", "title"], ["id", "divisor"], [1, "quizimgblock"], ["alt", "music", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/musica.jpg)"], ["data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], [1, "check"], ["src", "../../../assets/selected-03.png", "alt", "check"], ["alt", "economy", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/economia.jpg)"], ["alt", "politics", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/politica.jpg)"], ["alt", "tv", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/televisao.jpg)"], ["alt", "sports", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/esportes.jpg)"], ["alt", "culture", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/cultura.jpg)"], ["alt", "movies", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/filmes.jpg)"], ["alt", "cars", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/carros.jpg)"], ["alt", "tech", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/tecnologia.jpg)"], ["id", "row-04"], ["alt", "international", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/internacional.jpg)"], [1, "check", 2, "margin-top", "-5%"], ["alt", "social", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(../../../assets/news-types/social.jpg)"], ["alt", "tragedies", 1, "item", "wrapper", 2, "background-image", "url(../../../assets/news-types/tragedies.jpg)"], ["id", "load-more", 1, "load-more"], ["id", "save", 1, "save"], ["id", "warning"]], template: function ChooseFavoriteNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Passo 3/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "QUAIS NOT\u00CDCIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "TE INTERESSAM MAIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Carregar mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Salvar prefer\u00EAncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Voc\u00EA poder\u00E1 alterar depois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1mYXZvcml0ZS1uZXdzL2Nob29zZS1mYXZvcml0ZS1uZXdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChooseFavoriteNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-choose-favorite-news',
                templateUrl: './choose-favorite-news.component.html',
                styleUrls: ['./choose-favorite-news.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/choose-favorite-shows/choose-favorite-shows.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/choose-favorite-shows/choose-favorite-shows.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChooseFavoriteShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseFavoriteShowsComponent", function() { return ChooseFavoriteShowsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ChooseFavoriteShowsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementsByClassName('item');
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
        }
        let row_04 = document.getElementById('row-04');
        row_04.style.display = 'none';
        var current_user = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user = element.split('=')[1];
            }
        });
        if (current_user == undefined) {
            window.location.pathname = '/news';
        }
        current_user = current_user.split('@')[0];
        jquery__WEBPACK_IMPORTED_MODULE_0__(".quiz-answer").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass("active");
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".load-more").click(function () {
            let load_more = document.getElementById('load-more');
            load_more.style.display = 'none';
            let row_04 = document.getElementById('row-04');
            row_04.style.display = 'block';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".save").click(function () {
            let items = document.getElementsByClassName('item');
            let array_is_empty = true;
            var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setHasAccessedBefore=true';
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            for (let i = 0; i < items.length; i++) {
                const item_class = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('a')[0].className;
                if (item_class.includes('active')) {
                    array_is_empty = false;
                    var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setShowCategory=' + jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr("alt");
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open("GET", url, false);
                    xmlHttp.send(null);
                }
            }
            if (!array_is_empty)
                window.location.pathname = '/step-02';
        });
    }
}
ChooseFavoriteShowsComponent.ɵfac = function ChooseFavoriteShowsComponent_Factory(t) { return new (t || ChooseFavoriteShowsComponent)(); };
ChooseFavoriteShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChooseFavoriteShowsComponent, selectors: [["app-choose-favorite-shows"]], decls: 69, vars: 0, consts: [["id", "choose-favorite-shows"], ["id", "step"], ["id", "title"], ["id", "divisor"], [1, "quizimgblock"], ["alt", "comedy", 1, "item", "wrapper", 2, "background-image", "url(https://s2.glbimg.com/zz1m2kDUjVRBwIDVXY2s7EI0NVY=/362x536/https://s2.glbimg.com/FuoKTe9NAiEsr4wh2nAt09ny89o=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2019/A/j/wbTJsbStiSR2o7dbUhlg/2019-490-filmes-telecine-agosto-os-parcas-poster.jpg)"], ["data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], [1, "check"], ["src", "../../../assets/selected.png", "alt", "check"], ["alt", "romance", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://blog.jovempan.com.br/blogdofefito/wp-content/uploads/sites/39/2019/08/shippados-tata-werneck-eduardo-sterblicth-globoplay.jpg)"], ["alt", "action", 1, "item", "wrapper", 2, "background-image", "url(https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27202402%27&EntityType=%27Item%27&EntityId=%276609%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous)"], ["alt", "novel", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUWGB4aFxcYGBcbHRsYHRoaHhgYIR0dHyggHRolHh0XITEhJikrLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGismICUtLS8tKy0tLS0tLy0vLS0tLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABKEAABAwIEAwYDBAcFBgQHAAABAgMRACEEBRIxBkFREyJhcYGRMqGxB0LB8BQjM1Jy0eEVNGKy8VNzgpKTwhYkouIlQ1Rjg7PS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEBQAB/8QAMxEAAgIBAwIEBAUCBwAAAAAAAAECEQMSITEEQRMiMlFhcYGxBTM0kaHB4RQVI0LR8PH/2gAMAwEAAhEDEQA/ALfG48CRWxMqAPMe9aP2M+h/A14905jvD8a9PTq/0nfbzrVRhJUPP+dY4ZAUNxf+YrG1C4mZ+lccdAkGFeFqjrmOl7fyNbYc6ZSduRqLmGY6ZRo1nwKQPUk71x6k2TIkW9RXiHAgEkwkbzy9elJ72erfsguMhNlQUhSzNoJm0A3G870BxWbuK1IWsvJFgFgJmJuR96LCdpHOhckh0cDZYL+eYdCgC6mVCQNwR4HY0Ne42wgiVKF4J0Lsehtb1qrXs4QEkSZ5WgJ2gxaefh71DxOdS4SouEzM8tuZ2vQeJ7DPBguS6Wc+wzgToeSdWwJgnrY361OYWItcRvXz8rNgTYlNwZAvYb6tx/WaPZLxgttcOLKknZcqkHmY2PiKOMr5FSxrsXK2oQfxriyvUD0mhnD+dpfQJgkiQRsrrHMEbQaNoAjp4UQlqjmkXnqLVo3GlO1jH4Vu5Yp8zWunf3Brjw7JFgeYFY7iI8yNq1SqCfMfOueIeS3KlWtz3t4b1xxutewI3/MVzmSTHtVf8S8dkq7PCncxrI8Yt4eJ6GkccXOlxUOrKU7nUe9H4eFcmhnh+5dmL4kw+Gs87B/hUfoCK6YDi7BumEYhBPQmD7GKqnEZ6trCjENlDySrS4hy+k3IUDvcfh40lsZo24pUI0SqbHbwn+deNhKEWfUyHARIMjqK301RvCfGL+FUNX61o2N7X5eCunI1cWS521iWw40qRzHMHoRyNcnYE4UEQmva1Jr0VwBhNaHat4r2K44jaD0FZUqKyuOPFoB3E1Gewk3G42qUDWVxxC7PTPvXAiTA5XFEzXBbSekVx6Q8c53TtI6mPakzNsc1qII1LUBK4AgAWEpmbnpU3iLiIJ1NNFKik6VKJBCTIEKSb7nfwNJeLWoqJdKmwQRqSDpmfigX+EkX/epc51sizDj2tmYnGFRupGpEwpKiFHnCDaYgCCKUsxzguSFE2FisjcfdHhE+tTs0aGlIVCjcpUmw3uT0m3nFKWOWFKIElIJv70uKsPJKlse4nHEyd5Oxv69K54nFkJBTJkkySD0ERyO59a1/ZwYO22xAMwZ2qRk+Ru4gyBbedvYUx1FWyfzSdIgJxJ3BIB323/lXVD5FgTB3TynrTfhuBVRfl40Sb4CBTM3ilf4nH7jV0uZ9iBwlxKGQUrIJAloHked94gkwOlNuD+0UaEpUhRI3IO49bzSFnnDbjIJgkdYO3mPpQBGIKU7mQenOPlT45VJWhUoOLqSPoDA8c4N1WkuFJTeV2B8idzTPg8Q24nU2pKgbyCCD6ivmNOYkHy2NvemjhviZba09iHBeFJACgTfa8x8NvOi1e4OhPgvlx2Abx+EVWnF+cuOrLDZhGyz16ieZ/wBKKZrn3aYVb6Tp0gApMglcwEwb78o5UNwWCQpjtFEaimOtzJN+dDkdcB4Yc2IDYPaOun4G0qCPE6T3voB50qsMrLa1cgAPdQq4+LshCcLpRBJhE9RPePy+QpCyrLC5rbAsSPmY+oFLUqGSx6uBfyp5Q1IJOh0aFc77pMc+9FF8Rw2Uth9u42Wn907X/wAJIMH0rZ7K+zKxHwKSfUbj6e1Wzg8oCWhqHdVYg9FAavn3vNNBPI+UMx4YvZlQZTmJaWAoSg2KTzHNJpsybNlYN5LrSiptRhSSeXQ9CNp8utL3FmVBhxSfH5g7/T3rjrUW0xZR7pnmfuH3geoo073EtaW0fSuUZgh9tLiDKVC3h1B8aIAVSf2dcVFooUSQyvuuA/dXtq8LwP8ASrrQsESNjTU7EZIaX8DYVlZXhNeiz2srSayuOPQKwzXtYa445dreIt1qDnCyW1BBUFcimJB5XNgPEiKmzBpS4jz86VIZHegyTBGnnz6T5V10HCLbFrMXUIKgmHFn70oKjK9iU25m4jn5UvZtjFN9ppWkhWwKj8RJJNjI8oqVjMSYC0FSytN1EJvAIHWeVqHdi2kOmBqDYIVNyozZU7qFjbpUzduzS4VC1i8WQCi5nblKv6E1AeCUBAI1EyYG83/Gi+NbDSUqH3k2NtUkG9tr8qWMS5KpJIX7Qbc/c0yK2JMjJOFaLzgTNye+DtI2+VWnw7gAgQKQeBMIVvFZAjb5VaeCxDKLFxuf4k1J1cn6S3ooL1MJYdjlRHC4Wa44JSTcEEdaJtPttgqWoJHMkwKkw4k92U58slwB8wwIIKTVRcb5D2KtaR3SZjoefp/KrYx3EeD1d19KvBIUr/KDSrxi4y+2pKVfrAkqCVBSVQBcwQDHjT8erHPZbCcunJjpvcpl9d6n5LmSm1Wi4IuAbG1C3jWja4NaZkKVMszH5qoNpQqJUpLpIINgkxffmLeFeuZ+ohhuecq8yIHypRRitbY67Vuw6FLYI3SoSKXLcpUtxxx3EKiphnUSEgqVJO4So/jW3CeegurAQEpShRWfAd6fSDQBOBxLywtjDrVuNR2MiLTFNHAuRtMFScYgh1RBCVHuqE2EbGDePKlSdIogrkC8RnwV3tABdeCkgjkAAD5T+NWNnHFGGYaaTr1qJg6QT/Efr710zbgvDuutvqHdSASgfeI2k9ACbUAzLNmFOdiGlaLx2TQKlQYI1mAPS9uVA5dgkv8AcmAca2cwxBDYJK1WkRpQLyfHw8utRuOMtSwUJbuBCp6pUAUn0KSJ8Ks3hZpCQSjDqan95IBPzNBeO8kKgFoElOoQObarqT5pPeHmRRRmA8d2Vnw5jNLmIb5Em3TVf5Grj4J4nhCWnDPIdR5+Hj+TQzjhbeJvJTc+IUINMuFx5EQYULpP1Bp2qnYhLVHSz6SbdBEitXDVZcLceSeyessbGR3hEyOvl/pT/h8eFiaaqZNKDiTJrK5ax1rKKgCR2lbJVURJ/IO1dW3NqE44Y91ASdR9Op8PHyqveJnAISXCkAQnuqsFWIJiNQ3kg7U+Zk1INgrmmTGki8yJO9I3ELzjJDzglQB/VpAMm97ASkC9xYnevJLYowumLeIb7JZjSCtIhKJI1TubEAwRtzNBXW/1klA0hd7kibmJ57f6VviMwUhZWQNapOpJiSRcRHwg8oG1QMTjiohsqIk94gAG4tt5/WkUVSlsQ81ckiDIG5NpNj8qU1u/EZ35b0ZzZQMCSqCZERG4H1HtS+6N6bFEeR7jZwphdaFKVPZyISCYsO8SNiSY3pgwn6AXA2tEFW3xKJgdAInwqZwBlIVghqBKVGSACYtcmL6TsfIcppnwPDeGQQtJRbb4SB5VLmyJS3s0MGN6O31OGVMpbDjTStLqVCADAKdjIULEeUzRzGXQpTgkoSJBII2JKhAAuPpQg4XXi9TYkBMKVFt5PmdvamdWHUACRygjqKmm1J7IojFw5Yi5dnmF1mSlLiVDu6QPHpG1GOL8UXsKXG9MoMNn+IFChI5FKlVNOUMST2Jk79yfSYg+8VGzfBEo0BOhtNwLSowQBAsEiZ62FPjnUI0TZelWaalLt7HzwsWrmKlYprSVDopQ9iRUSrk9jMapk3CPRv8AnxojhcOrtmwTZRsff50DQaMJzOG2z95tc+n5FC0MxyXcs7BfpEnslJSIEFZ26Qmb+Zt4Gtc9yzEzhnHHkLWld+zRpGnqeppx4QxCVMjYixGxsRNAOKs+QMWltRCUIQpavQgADzn5VJe9GrovksHCqltM9KjjANpMpt4AwPlUfL84Q8wlbQK5GySJ+ZAHvXd/CuKQFI7qhcJVz8DH1FeOgUqe7onoZgTULHt6kKSelR8FnBUrsnEqQ5+6rmOoOyh5VLxioQo9AfpXNqtgUnF7nz/xWylDiiPvKI9jJ+Z+VRH1ESB+en58a8z3Ea1IPUm/rXcwVK8RA8DuPmDT09kTteZ0SMOkOhJkpMCCeRG4McvGmfKM0xzAtKkjxkx1kbjzBpfynSQoEQSZT4HYj5VzwOKCFHWtWnwv1tuANiOdeJu9j3ZLcfP/AB/if3U/8hrKT/7dwvVz/po//qvaLz+51w9j6KDJv4+Fc0FXMfnrUlOIHjW4cB508zyE6kAEqEgDaPl61XfEzry1OqU0AUBSRfUAkpAJiUm6SCI2Kas3FYtCElS1ADxNIOdZ7hnVrQlSgVpgqSPigQEmfOa8lwOxXfBWGdrJmO8hIBBUlSVKUI1zqvvI35Dag+HauFKkD4hFyYEgfnpTznuQANyAFBQHeJM8utt4pWxKChUpVBA0xAM2jbpNKsfJWAFpklX7xMAj8igTm5o/iUEAcrTaYm9AFb0xE8+S6fszzMJwQPMAj2JpnxGP/UKKICik6SeR61WHAT+rCrQDdLnyIB/nTbxIhxGB7Rq5Tpt6wTWf1KepJGx07j4dsHYXDZiA2n9KbCUmZP3vE86eWmHl9mv9IUnT8YASUq97jzmkXJM5ypOjt3HXnfvFIWeZsQIG0UxsZ9lS4QlnFJE7pbdsJ3Ok7UUsTfc7xY9k/uHcbi1YdQcSqWye+D908leXWtMfiw560My5WtwhpztsKUzqWCFBVwUXAkeNbZhDLLi9glCiPCAaiyuaekfjUGtXcorN0d5R8TH/ABEqNC3UXNGH13Tq8VbDwGx50MdEz5/KtuPBgT3kyOmt55V2wuGKiLG+1eY7DqQRIif5mvQaotn7PM1UWGUi5goPmnb5RQvPnWhji4+VDkEgXI2pQ4Qz04dyJgEgg9FD8Dsas7O8xwuLbSpTaS595JkEKHNKhcTUs46Z2aeLL4kEvYLcH4lIthsMpIP31GZM86b8a2uJceKPBIAPPzP0pW4czr9X2bSFpgRsk9LzEHb50y4BhSu85cn1P+nhQquB+SNVLZL92cMHlyghCnVqWsKKtSokSCIt4Vx4qx4awrqib6SE+KjYfWjmIIAkmAKqbj3iNLqg0gy2CST1I5+Q/PKR026QlztWyvMUmdIGwP5PvNvGpf6Oq8Da/Pzj2qTlGDbdbMuhKpsN/P2E0TynNW1LCVC0DbckD8YPzFP7E6asG4SdU7K2i9/D1rV7SoEAQq5v9KYcwwjasOXGbKbVPSY29/wri1gUvjtEQJHe84m/Se8PNNAuQmtqFiFdD+fSvaISev0rKoJdz6RQ4OVR8bjw0kqI2rx14ISVEwBuTSxmmPLzZPwpN78kjnH5+V+yz0rY7Bi1u3wLXEefKdX3lGOSRb3PIfm9Bn8WSgpAAgbA/Mk3rhie87GyU3M8p281m5M7QfTfEStQZaSSRsm+55rPX+gpKe1splzSOODz4hlTDs76kkmRPiTfy86h5WlLqi2vn8JgyDyIPTw8ac2eCitrS4qVKjYARHITypVz/hzE4FQxCSpxsHvHmB5bR40Mckbo9eOSVgPNsI4iUEctx05EHpSvi0QZMSb/ADq2XeyfbTqA0LEgn7pP9fnVccR5b2LhTyFh49Pz40+DJssa3PeEc17B6FGEOCD4H7p+vvVv5TitTSm1XG4qhHBc038McULZCQskgWnnHQ9aDNj1bjulz6fKyzcMt9tz9U0nRzAAknre1MKFPughQKAedhHtvSpknF7TiggqCTyPI05ozhkJOpYEeNQ65W1LY1G0opxSZo2wG29I9T1pC+0fOghrsAe8u6o5JH8zb3opnvFchXYJ1AffPwz5848KqXOsQta1KcXJXcnrfbp0tXYcWudvsI6jNpg13ZGausKPiRMmenL61C19+/M/jep2DBUoASZECAfIG21bf2BiVHutKE7lUDn4mtRGXHFOfpi38lZP4Jw6VvgqEj8Ln+nrXTidpK2kqG6dQPvRbh7JFsLClEQOQJk2v4f60wHgVxbC3FpPZLJWLpSTqNkpFyZMAdZrzS7LF0GbStS037tL+5TKkxRvI87WghJSXEjaLqA8Ooq58o+x5EBTiW0TyUC4R5ydI9KjcR5K3hHQy3JhIJJSEiTOwA2ii0p7MPpehjPJoWVX8E3/ADsiRwfjGlJGmULPxJUIPnBuKdW8wQ2IUR7iqJ4lYdDzbrS9J0kGCROkz+Ne4fEuKBDiy7B+8o9NrbG1SzxuMthudKE3il2H3jvinWFNNElIErKfvf4AenU1ViUag446pQUB8JEeg6D+lEsRmYSe6owNhIkesV7gGG3zKyqfx8elDG1uyaaT4F/LmpVCVQo/CD94xsDtNc3m3GSViUlJEyLgmbRRPH4ZOownY3TIH0FjWZmvtGiEqK0kgkKA7RJAsCdlC+4pyYhx2JGW58SZH3hceMb0RyTGqQtSdkuIUoJ6KhUD89aVsvwS06VEEAnc8hMKI/PKmVvBhKS8T3UhSudkEBKB5nu26z0oZJBRbfJw7NXRXsKyhn9sK6q+dZTKYu0XvxZi5UhmbK764P3By9dvWlPiriLs29CICjuen/tH/b41OzvElT7yzyIbT6XPzFVdxJii4/oB7pMed4ny3pT802P/AC8aGDLsQrQIu66qG/NUDUfJP5vVj8M5IhhACRJ3KjuVHcmqyyN7/wA2LSGkhMdCbqPtA96tzJ8RIpWV70Owry2GMOzO9aY7CJWlSFCUqEEeBqVhz1oVnWclBCGUdo4THQJ8TXOK0gapORVeY4FWGUtg7JUSieaensT6zUDNWE4prsyP1iUyhR+8kcieoqwM6yQvtlT+JHapuhKAkJAF4O5PvVbqQoLLZOlU9w9FeB6Gjxutgcsb3oRMYwUHSqQoWI6RXXAJKrJBJ6AE/SrHbwLTgDjjSCvnKQbix38qL5RhErdabiEqWlJ0wLEgGKr02i3D+DvT4kp7Veyvb+CvMLkj6vuKHibfW9NOT5Gy3CntTpH3Se7+fSrJz7hBLTuHLQJbU4lDgUZglW/kRI9B1ohxnw0hSWVMtpRC0oUEgJGlagJt0P1oXii+QsL6OMocvVfO1V8BFzZ7WgNlrs0RYQbjwkbUPw3C4UhTqcPrQi6lq7wEAT8RiYjarb4ly1rEIUlSVAsQrVBEp3UkHYykEeBiu2CyZpoO4ZAIbcRNySZMpWb+GivYQhBeVBf5jg8NS8NavZq9vn8mVfgMieWgLbahvUE6hAElQTtubkU1cRcFpSWzh5CSpKHNRnTqIAXfle48qNZI3h04d5nCuKcKJV3uS47sWHNPKuDnFmES842pK9KzDizdFkxZMkwQALCmWdPrepyZf9KLqN7VytqtfYh5jiMNglpw7OGS48QBrXEgqskyQSTzgQKYl5Y3ZtLQCmwlaHSkRqBIAnflcdFUCwi8JinQsF1TrJGlaULJUkXQVSkiQZEmJifIBxBnrycWrs3XAltQhJUYkAapAMG82rhS6eeeShG1NK5OV7vt9P8AncKZ5l2NfxQca1BIgDvx2REagRPWTIFwRXD7THUl5pIgrSg6vUjSPqfWhLnFuLKlKDgSVAA6UpG224N/HfbpQfUpxe5WtVzJlRPXrXGl0/SZIThPK4pQVKvj7sh41CYClkAJncTMgjT62FJKHQpSokQOXNPI+e1PXFGWuN4dfaoKdSbbTO4NjakHJX9DyVESAe8DzB3FIytXaIPxNxlnTi1uiIgKM/OjmTNqSQpO4uQeY/l48qP4zhsBSXmbtq26TvpPTz/rTFluSsoCVnup5pIuk8/Q1HLK5cIljh0PdgPNclLzP6Q2JKQSoc7bjxI/O9JjoWnvJIAUIIMEH0J5datnE4pttK+xWQqytPWOY6K384qssyCFErA7pm3Q9B0FMw3wxeem7QOTi9BGvUsct4jcC523t413xOdOOJKCYRIJTG5G3tyHiaCrWQoEkKG3j6jea8dVESapUFdkbyOqJnbDrWUP7TxrKKhdouniN7sy4N++sgf8Rj13qt8E1LhcMwDzvsJA8tgfOnHi11SzpFytR9ifxpTzZxDKC2gyI0g9f3lep+QqaHcuzdvgdckx4S9rGtxxSidCEkk3tVgt59jUJ1KYSyjkFHvR/PwikDhXGOM6lMoJcUIBCSYO3LlzqwuDsmxXaLdxLq1pWmNCtVvGZATvyE2FeTq9wseqthj4e4wYfUEBUK5g1L4owjriCGFaVKtq5iqzzjKDhMT27Vk6pSDz/wBb1amUYwutpUUwSNqW90PUWnYt5DwgEJH6Q4p1wGZBUk7RBOqSOcbTeonG3CkN9s1MoExvYX/r6U7HFtpI1ymeZFvepOKKVpIFwRXPfe9weNq2KiwzoWkKFidx0PP0O/rRnhhlSsUzCSQHEkkAmBO56UvYNgtuPNHdtZT6T3f/AEkUVy550L/UKWFj9wmfUDl51fCS0Wzd6dufSabV01v+xbr+btpxPYOQJbDiVE2JClAi/MQCPWhbXEbLi8U066hKEqAbVqF0lAmDzIWCfUUm4jCYrGFK3CglKQmSUgwCTcDnc8hXP/ww8DeCOqT+BilPqcMeZL6bmXD8P6aK88967b075RMxXGL/AG86wpoKgoATCkxCrxN7keYpubznDlplxWJS2rs4N0lVwme6ZIMp6VUOPxIDhabVMGFKEG/MDl60CzPOlKOhskJ2JFio+e8eP4UxZFJWkL6yXSbRgna9qV/9+Q/I4kGDffUy4gpWowV9NRIMWvc8qW3szbAKp+RE+Am1CdIZAIR2jhFhEgGOm5P5tUH+z8biFQoqT/hJVYHwm1eeKgv8yyRt44K3Vvluv2+weXxcWkJDS1hLkFYSsjT4EJNzHpSxm3FGIkhKkp8QmTv1M3qNm2Wqw7qUhYWRcxNvD2oPmTkmRaa9Um+5Fl/EOolfmr5bfYLZHmjrj6VOOrUEyoJkwSkSLC1P32fIJcS4RJW5J66U3Pziqsyd/S4Nu9InzBFW99m+PaYwqnljUoSlKBc7m56AmN+lJypuQOHJKSbk7fxLAzrKU4lJS5zqu80+y1ydTC0nwVb8KnH7R3NcuMhCJ/xW9YinLJM9Q8grSRpAkkmw8+lIld2PivLVCRk3D2Z4exYS63zAULj1saI4rh/Eup/Vtrbj7jkb+Chyrvm/FWoam3Clvk4V6EnxSN1DxMDpNb5PxEpyEIxbKyb7KmDzgrEjxFCkkFUuGVrn+Afw6ocStKp20mCPBQJHtQrDrBWAZhRgiYM/nrVsYnjNSX14XEMNrKT8QPdIKZB708vaar7jRphTnas6EEm6A4Cb29h+NPjCQiaoCZ5k7CFwjEJ1fuqvHqjUD8qD5kgApEgmNxt4UxZvwfi0MHEraCUASQVJ1adiuAT3fGlzHYc6UqAMRH1NNg/iSZI0+CP2flWVxmvaYKLcxCCAp9yy1A6AT8KeavCxif6VXGc4oLXI2G34U0Z3nBeUpCJDSQVKJ3VG0/K1JmNstVudIxxoqzysc+CsxU0qQbHeroyTFhxAVvNfPPDuLAc08lC3nVs8C5idfZHzFLyRp2VdPNOFAn7TMar9JbbCSUo7xjmo7e340wcEZni1IhxnS2LBZMGPXelrjTM1s4oqLZ+KAtSTpA6zt/pR3hbF4d5X63El5UGENhRAIIiyReyhz60Ctoc3FNtscMwzTDtoUlR1AAlQAKrc5iaH5CrvSjWGXE6kJXuLxbmEkEGDtUnO3UrQWWkhIVAXAHwndNrCdo3udqIOpCEjYBKY8h+RQzR0fTxyVLxCv/4ji46p9whM/WhKsQcLiEOgEX1nSSkkFIEDly6b1u1mYXinnjsorX6bJ+QHvUVvMNOIbJgjQB3gCBBPXaetNhG1TJMrH/hrio4uxHeAM6tOpNxA1CCJF/Q1A494sXh0dg24rW4IIMShJtM7yeV+tK+K4nZ1qWWkgAQNPdMzJJjnYAeZpKxuYKedW6rdRteYHIe1JXQxWXV29gf8T5K7jLhcT3SlOwHeP1/AVDOIT2qRMwb+PMgeAsPU0GZxZSmBsTJ8eg8qKcJZcrFYtDYEiZUeiRdX8vWrpOlZPFuUki4+GspT2aFlI1ESpXOTcpHlsT4RR4ZajfTfrXfCMQABsLRRVpm1Zqg5u2aspqCpFZ8acHh1PatD9Ym8G8gcpqpeIcN98CI+IdP6V9KZhVH/AGj4dLbqtFkuCY6Km/vvTunyVLQyfqsacNaEjLngkqnmkgedvbzq1sqUlSsTgwlaG1llTZFwBplMAfdKYNrzNU/VofZRnJOttzSdISkFQJOiSQJkGEmY6aqry+gm6WXnUQnisrdbKlN4h0tpBlsNLQlQ6BJ7o6XmuPCXA5xjLyy6toKMIQDCCpIElSdiJMeF6eM+xbreHcWpxtDYT91JK1eEkwJ9al8KY9rsEDuoITK0g2SdyP6+dTxm63LtFbo4/wBkNPto7qEuNJCVII+FUAEED5HpWDhrDoYUgoabG+pKQkg9Z3mp2JbwmKlSFIcWkRqbXCgOkpMxWZDhcKDqSklaTHfUpSkn/iJil0r55PbdX7ELJeEMOhJWtvUVGUhckhMACQdiYKo5ao5Vw4h4ZZcWjS0kRuEgCR0puWqaiuiFA9K8e3AMW36hS4yw6FYNRDZS6UlqFXVqWIInmIk+gqm23+ylCkgpIhQvb0PjVucWZkH8SlhJs2e8f/uRI9h9T0quc0wpWpdgHAe+B6d8f4Tv4U3E6E57lTFfsmv3j8/5V5RXsf8ACf8AkTWVTqRHpZsEnsXnNk2T6mwFCsYxqSlY5yPz+edHcxf04VTMQorOr0j+XzoHg1yNHPl+etBH3GT5oFpWUkEGIMin3hfiHvJWkw4ncdevoaUXcETYb1FZJSbWIopJSQOOcsbL5z3OW8ThwtKglwWUg8x1HWhXDLbuspKQgbjukT492xqvsJmK9I1X8aceGeLi0NCxrRy/eT5eFSuLRpY89VRaGT5dpuSSfHYeQpX+1biH9Gw/ZpP6x6UjwT99XzA9aLMcStqbK0hyAJJKYHuapnizNV47EayIGnupn4Uz9eZNdFKToHNN7yb3YKbfKQfFPy6V2xuOQQEpTCgmCqd7fLePStCQhJQr9oCRblvH4UIxLxPT238aojG2QznSOGs3r0VqeVdEXsBc01k6N0oJIAEk7AdeVW9wXwSG2dYeU3iVXKkmwH7kcxUfgngxgsS4NTixc/u+A/nTFh+AWgoKCXARsUPKA9iajyZlJ6UaOLp3BapII5Nj8QlfZvwSn7w59DRvFZ0GQVLJjwBJ9qDYTAqQ82hSiuARqVEkTaYtNTOJC4lGppIUqYAJj51Mm+xW4x4ZBxnEhdSeywmIX1OjT9arD7QkhSEOifiIIIggxcEcjIp+wHEuKSAnEYF1F41oIWPOBcClT7Um5a1wRqUDcQdiL+NMjtkTFZFeJoqle9HeCMYW8UkcnAUH6j5ge9AV712YcKCFJ3SQQfEVoSWqLRlY5aZqXsWvxHmDj2HDMxBv4gfkVI4JyWHEuqdI8Ar4uVwd6H5dj2sQ1qNgsQSN0LiD+fKo+RYJIcCXVLc5ApVBBHhFQxVJpmyqlJO9mXdh8Q0kTqQOtxQp11lx4htUOC5I2Im4J5/hXDJsAiJI36kk/Paji0JAASIjaum00eSioS2bNmDa9LXHz604ZSm1lCkmZHqI+dFsRjtAv5DxPSl3j9cYQhXxK5dKXqB07idwu5ZSjdXaKM7zCb/Wg+Ox0ua091aDAV+B8D7VPyh7ShEdHFe7gA/yxSfj1ELtspI/lVFWyfVUbGz+0nf/AKZn/o15SX+kK6fKsrvCfud4q9h1xmBGLdDSVwVOmZTAShIuqefn1PuvZjkxaxBA+6qR5AwB67Vj+ariEykrEKVzjnHSa4Y3O1uKQkbIABPWL+w296bTEylHuGxhUtujULfkx8vnQTMsOkpnTpIWU/OU/KmDWMQ0pabBAA9EpTqV6yfagmGbS4262F6iQVJtspHe9inWPauWx7Pc4ZMhK+6pQSR1tTPgsqSkpUVJ0nnqFecGZY0+iHUJUJIkjxopmfCmGb2SrSBYSY3mPKkTmtVMfjhLSmSuJc3SzhezSrUpYhIHzM9Kq/DPw+FC4ChvzG1Hc7dkGBAAgDw6UqIJF6ZhiqFdTPzfAZeImo7wEAgQIg6eU9Y2mlJxV6NYnFuONJSuTosDzA6Hy69KDOIgwafBE2R3wehEkDrAFFcLh4xQRyCvoKGNqhafMfWj+FR/5yTzJ+n+tey4Oxq5Itrg3EjQBO1MmY5+jDo1KkiwMCQCbCTypYyDJCNS0qJAAOkeVBMZxAzi0rw7mtkAwREQQec86yld7G3KmkmWDliy67qMd3oZ5TRVTyPhWAQrkedVxwjk2LaWot4pBbPNRJIHK39aZc2wLhwytT+t1B1oXASARsIHLl60Xo4BlHU9xgewbSUyiY6ajHtVXfa8sdgnxWAPemnJ+IQtsBcpWLKB61Xn2rZgHHWmh90FZHnZP417jevKqQOVaMMrZW7ib14k12erigTWmYhMyzMlsK1INjuk7H89afeGsxYeWFmUxuJuDynw8arpbcCumFcUhWpCikgbil5MSmPw53D5H1DljjYA0xBG81xzzP0NDSnvuHZCbk/yFUjknELiklDjqhB3BgfLanDh3MGmlalKSZ5zJqN43HY0IyU90N2R4F5xzt8RY/dRyT/WhX2hvyUo3gi3kCT+FGznqnAOxbMfvuAoQPIHvK9B60hZtjNTrilLLhgwo2BIMGByTuI8KGMbkFkuEbYEbxEIbA+LR/3OK9qA4+/e/dV7jf8AGpRJLaRtCij0E/zFSFZUpSCkCSVAAc+g+ZFUcMl9UQR2VZU/+wcR/sXK8plizbGsz2XaNqaWO4R1TMAjlO49KhYrBgLOj4eZ5RuQelOGaq7VgqWlKFsKAISNIWtOxAvBIGqPCtHcvSuW9M6lITIj4pOoHpCQbQbxtFHjjqbo7qW4U5d/3+vxF7DPuJSEtbGQAbBRmSPWdvKhxcUlyU2J3SE6QCQRG9/OmnAYwIdOCdwynD2quzhSbar7EcgAZmbVC4izBClak4dSSmBqNjIN9pkR1v8ASucWnwLjKEo3f0OvB2Zhp9CCe44YIO6Vm3tMehqys7w5LRkXqkcZ2qwH9OhKl6QoERrAvbcHntyq7nMzS7hEOJMhSAZ8rK9ZBqTqcTXmLOlzRdwKf4gUUqCQbzUTBYVOsKdWEIBtMjVEGBHmPeimFQh/FLUoEoEpEGL+fKpvFS2NDbKUgqbUCsECANMFJIPxHu7bafGBVCOmFskk3ky6Yi1i8UoufqVaoNlICt/UDnQ14qKjrHeG9gL+lPuDCEtBbSdEXIHIpvfqLUpZvhND5BM6pM+N5+ddGabot6v8MyYILI5Jp+3xBitxRt525dH3ShXpEEfOhLzfdCuUx8h/Wp2EWFJIO8e4kg/I0xmbHZl0/Z/m4WkyZBSKgocDOLWVNBSVTeBJBtcc7Wmqz4Uz5WHXpm3I9PA+FXLkGNafSkqCSY2MVnZIvHI1sGVZF9wngTgCmQ0EKi4TqTcmeUVFx+StYkd3tm0gGSHFDVIiIJ2oyzl7IulMHzMVyzLGoZQVLUAANzQym6GeVcX9WC8Wyyy2VqgaU3UfAXNURmmPOJxDj3Jau6OiRt8hRvjzjY4qWWZDM3OxX/7frSo2SkJ8QT71T02FwWp8sg6nPrelcI44io4qW4JripFVETRslya7oR3CuDc6Ra0+fkPnUdOkC5vRnLicQgMNtwUd8wq6pIBMG0xHtXp5dA3Dvqbc1J9uo5inHL87SkBaUgHyG9Q+K+GltID2gpSCArlEmB87etA2FFPkaVkimU4cjjwPj/Frr+lpv41EJHmefkN/SgGLaeacAIUU+cjrM3E0S+z7CJW+t1ZSA2gxqIEqUNI9p+Yp0/8ADa3da5+FFlE6hJ87gQDtXuLClFtA9Rn86TsrbKX9b7aDt2i3Ffn5U4NaVJUtCZJIKUjcEx05ixpOz3DHDYkyQVdmfhBgSSOfkaYeGMeG2kLUJ7xMDcmCRHsmlyjYyMqizp+n4399P/RP86yov6biP3PlXtdpA1M2/tMYltTR/UKABCDBK9RSFKnqRPgAiPMxl5SrEKCU2Reb/ER+AP8A6qGcYrSg4XFXUUtAW7MixWE/BYCTzva96KcHNns9a4lUqVb5eX8qt6VW2S/iNpK3d7k5GGCsbhzF0pWpVucQJqbiMpbeL6FCxKeQkbit2AO21xfSB714MRdzlJj1AJ+tVtWZilQscScMA4EJZAJQvUYkE25jqJoLlmZKYy19KrEOlKPMpTqH4+tWjh3AptRAAsdjM/PwqouLQCoMpMJClOLvdRUYEeOlIqPqIJxNDpMjU7XszzJEOBtDbKf1rneKjYNpM94+J5eRPSmXAcMltjvruCXIEQPhTqVI1Ed4G0fFzvS21h1ON90LLylJKNOrfUARaxCUjTeIi29WOlhzEJdQypOptUFGkDYi6jAIEpmCTubRS3C0mw/HaTUe/LYM4ny4DDFSFoV2aIV2aCAUlXMncg6r/wCI7WqvuLUBOIRHh8zVl55idKVhxlMuMqQlxsHQVlMeqQZE790D92q/4qy13s2nlIKQpAid5AmY3AM/Kl6NLtGt0fUyzdNkxSq1VfLcXAiFqbVsdvA8q8bsRyPwq/A+W1SMU32iQsbgX/PpWIAdTFg4PZQoxGTDUqX0+KIRHeNHslxzqCAlZA6ULSzJg2WLX+9H40dy7BbHlScvB2CL1DTl+eYvZLnvepGa4dxTDjuIcK1aTpB2FuQrbKMIkQox6kUM41zgKR2SLj7xqFbySRdPaNsq8ipRv9PStOyv61OwrImtNsy8eJyZ41h7T0/1rQMS4hPWjCWO7PWw/E+01u3ljqn2y22V3BEc7XG9DZYumpq/gA8TgYmOZgelz+fGvMFjVsLS40YUm0kcuaSOYpyTgOyWrtUwpCIKVC+pdzIPhpHrRLJOF23nEo0pSV3WbkAfwmZMmAPEUKyVye9X0ORLXjja+aB7nHX6a3+j4pCESCntETAURZRSZtIG1KuIwy21lpQ74VpgXvyjrNo86OfaDw0jBvfqbgXULW8xy8qiYHOkhSMTftm0hB522S5M/EE92fAGjTUlZFGLh6l8R54YwqWsIEJdhalntgUpWkLBI0kbpMFI3HweNN+VYXThVK0o/WKPeZUUCBYSkmN551SOIzp4vKcRDatpTaB9PEzNNeSfaAtDKWsQ2FIv3kABQ3mUyAdzcR5UxVVE7UnKxd4tM4lYMiDFzPjv61t2ytGHCZmVK6cu77R8qGZ5iu0fcUkWWokTExsNvKj2Jy+WsOQT3rSPIj6z7VO3TRVFXFiv+mufvn3rK9/Q3P8AZmsoxZYXHLTCVo0pAVpSgiFJnupsdfe3CheTUrhzMEpb7KSmJjUCekCReN+VJJzJ11xTrhC1JBlOkBISCIhIEAbbdKN5O2hxPcWW1d21igHYwCCB12Bqvp46FyTddlWVpVsiwktkyoFJgC8g2iOtqDMOLOop7NWogplablRAggne8Vq+xiQktoKVhRO8g6RHpO4mh+MCktI0xqlQ6iU6bkg+W1UObW3uQLDqTkuFyE8bi3WEFXYJQNlpCkRJHxJgxFjIqqXlKeeUsTc2m0CN6LZ/mC3l9hKQbCZ6JgfQe5rjlvCzxGtwFKSkqSqTCojuiJM3HKo82S9jU6Hpnd9hm4Qz9xlKEBCYDiSVgT3QII09T8UzvVgYhSNKHXG1t4j40BBVseRIsT3rggiTVUYPLnNCnGyoaSAQoHTfkTukzTdwnxkoOJbxHaFyUhtChq2JmD0IPyrOz+I0nF8G3PpIJ6q2qq7P6/8Agy4zMFPNGx7WPgUDMkCFJ/dUNOuL7VWmdcQuOYNCHOzKglMgJIMC287228asjNc8bVqxTJSW0IGpMwpa9QKCOYsCL+PKqRzF6b9ST5V70+SbWli1ix43KaVOv2OGEd0mdwdxWYlrQQofDyI5VxwioMcqMsMSQLFB3B3nqKrQOKPi469v4/sQO1JEwFDzvRvh3BhahrDmlXwlJi/4nwoY9kn6zShVyQI6SBcnYCi7Kn8E4AmUrRvI36m4uCaXk3VdzlcHc0O2C4XdMEqWlHRZSTHkJ+ZoNxlh2mUaRv8AWpCvtRUEw4wNUbpUR8iDSPnubrxS9ekD1qTHhnr83AyWWEo+UHaZPhRDBokhKRJ+g6VHwOWuLIAgDqTTIwhttJbbIU4Rc/ujmZ5VdQXSYm37fMg5k8Ph6DTP1Pr9KlcPZ2WnWlKMBBMkjYERPW1rRyoKAVuKj4Rt51IxTIDShICo2PMDf1rxoomri51sr+oUx+bh7EuqUoKJcupIhKggACB5iiWEzZYUFJUUqEwU79IHS25oJw9lAddKlheiyu4mZBEn8879KIIwqkPLbSlSgBKFAE6gYKfWLedIclq09w+n6lQx+fhfYH59i9YNiZ31Tc9aVcI/2a5iRsR1FWVm3CbqUpU8ClRIBREnvAlNwYvB9j0pLzXABJKUwSDypkXWzI+uh48tUJJ0bZjjW3JWhATIuASR4Kv8xWzZlkCBIM9bEA7CgLiCmjLWPAQkTujSfNO3ypxkNu3ZHIJV+RRzDZktelBMQU6R0A7sD0J9qDNKlUi8ijOYqTCVIMLSgHTG5FlCR4QaTL1bj4Ly2h47Vn/ZN/8AN/SspD/txfR73NZTL+Ain7/wdcN/eF/wL/zKqdw/+xH+9X+FZWVTj7EuXmRZZ+BP8P40nZn+wP8AGr6orKym5eYg9N+Vl+S+5XjX97T/AL3/ALqsTI/27f8AAz9U1lZUM/UamP8ASv5/0G7jP+7r/wB6n/LVeNf3vCfxL/ymsrKXM0+m/SS+a/oGftA2a/3A/wAqKrHGfia9rKHFyJz+n6L7sjYfc+VHcDsfSsrKpQPQdw5/8pn/AHqfommf7Tv2TX8R+tZWVNP1lGf0lV5py/PKojVe1lNXBk4/Wd6J5T+xf8k/U1lZXqNXD+Yvqdcp2H8VccX+2R515WV0uCzL+lX0LS+x/wDuv/5PwNNOH/ZOeZ+qq8rKzpfnfUzJflv5APif+8v/AMTP/wCt2q1w26/I/WsrKvy+ol/Av1M/kvuxUzD9oa5J2HmfpWVlHHgT1P5siWzy/h/7jRPFftWfIVlZQT5Ox8BWsrKyvQj/2Q==)"], ["alt", "drama", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://s2.glbimg.com/fe-4iiitRidIqqpenuahzAXf80E=/362x536/https://s2.glbimg.com/VNHX8lmLCWx3FjXd-wBBCHEZYM0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/b/1/ui4ypJRHyb5EV0i29BqQ/2020-898-tamdm-poster.jpg)"], ["alt", "reality-show", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://1.bp.blogspot.com/-gfGv3jJrjok/WmIGkpXA3oI/AAAAAAAA85Y/yVdhOeV1gUUJrrNi941D65y4B_ZhxTP1QCLcBGAs/s1600/BBB18_LOGO_TIPO.png)"], ["alt", "war", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://br.web.img3.acsta.net/medias/nmedia/18/95/56/35/20414749.jpg)"], ["alt", "horror", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://img.netzwelt.de/dw598_dh449_sw1440_sh1080_sx366_sy0_sr4x3_nu0/picture/original/2018/09/ahs-238170.jpeg)"], ["alt", "sci-fi", 1, "item", "wrapper", 2, "background-image", "url(https://spinoff.com.br/wp-content/uploads/Matrix-2.png)"], ["id", "row-04"], ["alt", "musical", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://upload.wikimedia.org/wikipedia/pt/0/06/Tim_Maia_%28filme%29.jpg)"], [1, "check", 2, "margin-top", "-5%"], ["alt", "kids", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://www.portaldenoticias.com.br/arquivos/colunistas/677/fcb93acf92ffc6452b3639321a202594.jpg)"], ["alt", "historical", 1, "item", "wrapper", 2, "background-image", "url(https://http2.mlstatic.com/dvd-novela-o-clone-completa-em-40-dvds-D_NQ_NP_620224-MLB28129387416_092018-F.jpg)"], ["id", "load-more", 1, "load-more"], ["id", "save", 1, "save"], ["id", "warning"]], template: function ChooseFavoriteShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Passo 1/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "QUAIS SEUS FILMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "E S\u00C9RIES FAVORITOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Carregar mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Salvar prefer\u00EAncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Voc\u00EA poder\u00E1 alterar depois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1mYXZvcml0ZS1zaG93cy9jaG9vc2UtZmF2b3JpdGUtc2hvd3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChooseFavoriteShowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-choose-favorite-shows',
                templateUrl: './choose-favorite-shows.component.html',
                styleUrls: ['./choose-favorite-shows.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChooseFavoriteSportShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseFavoriteSportShowsComponent", function() { return ChooseFavoriteSportShowsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ChooseFavoriteSportShowsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementsByClassName('item');
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
        }
        let row_04 = document.getElementById('row-04');
        row_04.style.display = 'none';
        var current_user = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user = element.split('=')[1];
            }
        });
        if (current_user == undefined) {
            window.location.pathname = '/news';
        }
        current_user = current_user.split('@')[0];
        jquery__WEBPACK_IMPORTED_MODULE_0__(".load-more").click(function () {
            let load_more = document.getElementById('load-more');
            load_more.style.display = 'none';
            let row_04 = document.getElementById('row-04');
            row_04.style.display = 'block';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".save").click(function () {
            let items = document.getElementsByClassName('item');
            let array_is_empty = true;
            for (let i = 0; i < items.length; i++) {
                const item_class = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('a')[0].className;
                if (item_class.includes('active')) {
                    array_is_empty = false;
                    var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setSportCategory=' + jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr("alt");
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open("GET", url, false);
                    xmlHttp.send(null);
                }
            }
            if (!array_is_empty)
                window.location.pathname = '/step-03';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".quiz-answer").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass("active");
        });
    }
}
ChooseFavoriteSportShowsComponent.ɵfac = function ChooseFavoriteSportShowsComponent_Factory(t) { return new (t || ChooseFavoriteSportShowsComponent)(); };
ChooseFavoriteSportShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChooseFavoriteSportShowsComponent, selectors: [["app-choose-favorite-sport-shows"]], decls: 69, vars: 0, consts: [["id", "choose-favorite-sport-shows"], ["id", "step"], ["id", "title"], ["id", "divisor"], [1, "quizimgblock"], ["alt", "soccer", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://d.newsweek.com/en/full/1512948/neymar-brazil.jpg)"], ["data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], [1, "check"], ["src", "../../../assets/selected-02.png", "alt", "check"], ["alt", "premiere", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://mir-s3-cdn-cf.behance.net/projects/max_808/a5a49069867673.Y3JvcCw1MTIsNDAwLDQ1NSwyOTU.png)"], ["alt", "olympics", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://www.rapidtvnews.com/images/2018/05/olympic-channel-globo-11-may-2018.jpg)"], ["alt", "formula-1", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://s2.glbimg.com/pI4HCFiOEjHg_n9m7RsPNcDNJZo=/e.glbimg.com/og/ed/f/original/2020/04/10/ferrari_f2002.jpg)"], ["alt", "ufc", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://www.tribunapr.com.br/wp-content/uploads/sites/23/2020/04/03171615/3000.jpeg)"], ["alt", "volei", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://www.olimpiadatododia.com.br/wp-content/uploads/2019/09/ao-vivo-Brasil-x-China-Copa-do-Mundo-de-v%C3%B4lei-feminino.jpg)"], ["alt", "basketball", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://mampituba.com.br/wp-content/uploads/2017/03/Basquete.jpg)"], ["alt", "skate", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/01/28/f10c84d4-3b0e-11ea-a16e-39b824591591_image_hires_134155.JPG?itok=seHeryfF&v=1580190131)"], ["alt", "gymnastics", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://s4.reutersmedia.net/resources/r/?m=02&d=20141016&t=2&i=984031730&w=780&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEA9F10X)"], ["id", "row-04"], ["alt", "swimming", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/underwater-shot-of-swimmer-training-in-the-pool-royalty-free-image-620959526-1553098887.jpg?crop=0.619xw:0.929xh;0.381xw,0.0306xh&resize=480:*)"], [1, "check", 2, "margin-top", "-5%"], ["alt", "judo", 1, "item", "wrapper", 2, "margin-right", "1.4%", "background-image", "url(https://s.yimg.com/ny/api/res/1.2/eiZHcWxW5QIWamRV_aPy4A--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-10/5a994140-ea05-11e9-af8f-13c1289d786e)"], ["alt", "tenis", 1, "item", "wrapper", 2, "background-image", "url(https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg)"], ["id", "load-more", 1, "load-more"], ["id", "save", 1, "save"], ["id", "warning"]], template: function ChooseFavoriteSportShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Passo 2/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PROGRAMAS DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ESPORTE FAVORITOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Carregar mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Salvar prefer\u00EAncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Voc\u00EA poder\u00E1 alterar depois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1mYXZvcml0ZS1zcG9ydC1zaG93cy9jaG9vc2UtZmF2b3JpdGUtc3BvcnQtc2hvd3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChooseFavoriteSportShowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-choose-favorite-sport-shows',
                templateUrl: './choose-favorite-sport-shows.component.html',
                styleUrls: ['./choose-favorite-sport-shows.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/choose-show-feat-content/choose-show-feat-content.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/choose-show-feat-content/choose-show-feat-content.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChooseShowFeatContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseShowFeatContentComponent", function() { return ChooseShowFeatContentComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ChooseShowFeatContentComponent {
    constructor() { }
    ngOnInit() {
        function pad(n, width) {
            let z = '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        let json_final_data;
        const items = jquery__WEBPACK_IMPORTED_MODULE_0__('#main-div').find('.carousel-item:visible');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input').keyup(() => {
            let search_input = jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input')[0].value;
            if (search_input != '') {
                for (let i = 0; i < items.length; i++) {
                    let hasResult = false;
                    const items_title = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p');
                    for (let j = 0; j < items_title.length; j++) {
                        if (((items_title[j].innerText).toLowerCase()).includes(search_input)) {
                            hasResult = true;
                        }
                    }
                    if (!hasResult) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.no-display').css('display', 'none');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.display').css('display', 'block');
                    }
                }
            }
            else {
                for (let i = 0; i < items.length; i++) {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("display");
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("no-display");
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                }
            }
        });
        var api_url = 'https://globo-feat.herokuapp.com/?get_shows_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let json_data = jsondata.users;
                let items = document.getElementsByClassName('data_text');
                for (let i = 0; i < items.length; i++) {
                    const div_content_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr('alt');
                    if (div_content_alt) {
                        let content_title = json_data[div_content_alt].title;
                        jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementsByClassName(div_content_alt)).text(content_title);
                        let content_img = json_data[div_content_alt].img_link;
                        if (content_img != '') {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', content_img);
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('alt', content_title);
                        }
                        else
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', 'https://i.pinimg.com/474x/bd/1c/a5/bd1ca559f0b2238bd67f316eb8a907ff.jpg');
                    }
                }
            }
        });
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        let elem = document.getElementsByClassName('chosen-content');
        elem[0].style.display = 'none';
        jquery__WEBPACK_IMPORTED_MODULE_0__("#close").click(function () {
            let elem = document.getElementsByClassName('chosen-content');
            elem[0].style.display = 'none';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".choose-title").click(function (event) {
            var content_title = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget)[0].querySelector('div').querySelector('img').alt;
            var content_img = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget)[0].querySelector('div').querySelector('img').src;
            var content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget)[0]).attr('alt');
            jquery__WEBPACK_IMPORTED_MODULE_0__('#chosen-content-img').attr('src', content_img);
            jquery__WEBPACK_IMPORTED_MODULE_0__('#chosen-content-title').text(content_title);
            let elem = document.getElementsByClassName('chosen-content');
            elem[0].style.display = 'block';
            var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
            jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function (jsondata) {
                    let content_data = jsondata.feats[content_id];
                    if (content_data.owner.length == 0) {
                        var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + '00';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) { }
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_0__('#choose-content-link').attr('href', ('/share-feat/' + content_id + '#00'));
                    }
                    else {
                        var new_feat_id = pad((content_data.hasStarted.length), 2).toString();
                        var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + new_feat_id;
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) { }
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_0__('#choose-content-link').attr('href', ('/share-feat/' + content_id + '#' + new_feat_id));
                    }
                }
            });
        });
    }
}
ChooseShowFeatContentComponent.ɵfac = function ChooseShowFeatContentComponent_Factory(t) { return new (t || ChooseShowFeatContentComponent)(); };
ChooseShowFeatContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChooseShowFeatContentComponent, selectors: [["app-choose-show-feat-content"]], decls: 296, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "choose-show-feat-content"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "logo-img", "src", "../../../assets/logo.png"], ["id", "search-input", "type", "text", "placeholder", "Pesquisar conte\u00FAdo", 2, "font-size", "100%", "padding-top", "1.5%", "padding-bottom", "1%"], ["id", "chosen-content", 1, "chosen-content", 2, "background-color", "rgb(42, 43, 43)"], ["id", "close"], ["id", "chosen-content-img", "src", "https://miro.medium.com/max/512/1*inYwyq37FdvRPLRphTqwBA.gif"], ["id", "chosen-content-title"], ["id", "choose-content-link"], ["id", "choose-content"], ["id", "main-div"], ["id", "series-movies", 1, "series-movies", "display", "reality-show"], [1, "container"], ["id", "carouselContainer", "data-ride", "carousel", "data-interval", "3500", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "display", "active"], [1, ""], ["alt", "100000", 1, "data_text", "choose-title"], ["id", "img"], ["src", "https://miro.medium.com/max/512/1*inYwyq37FdvRPLRphTqwBA.gif", "alt", "js", 1, "d-block"], ["alt", "100001", 1, "data_text", "choose-title"], ["id", "img", 2, "margin-left", "5%"], ["alt", "100002", 1, "data_text", "choose-title"], ["id", "titles"], [1, "100000", 2, "width", "28%", "margin-left", "0.75%"], [1, "100001", 2, "width", "28%", "margin-left", "5.5%"], [1, "100002", 2, "width", "28%", "margin-left", "6.5%"], [2, "width", "97%", "height", "3px", "margin-bottom", "6%", "margin-top", "1%", "background", "#2e2e2e"], ["id", "series-movies", 1, "series-movies", "display", "romance"], ["alt", "100003", 1, "data_text", "choose-title"], ["alt", "100004", 1, "data_text", "choose-title"], ["alt", "100005", 1, "data_text", "choose-title"], [1, "100003", 2, "width", "28%", "margin-left", "0.75%"], [1, "100004", 2, "width", "28%", "margin-left", "5.5%"], [1, "100005", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "action"], ["alt", "100006", 1, "data_text", "choose-title"], ["alt", "100007", 1, "data_text", "choose-title"], ["alt", "100008", 1, "data_text", "choose-title"], [1, "100006", 2, "width", "28%", "margin-left", "0.75%"], [1, "100007", 2, "width", "28%", "margin-left", "5.5%"], [1, "100008", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "novel"], ["alt", "100009", 1, "data_text", "choose-title"], ["alt", "100010", 1, "data_text", "choose-title"], ["alt", "100011", 1, "data_text", "choose-title"], [1, "100009", 2, "width", "28%", "margin-left", "0.75%"], [1, "100010", 2, "width", "28%", "margin-left", "5.5%"], [1, "100011", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "drama"], ["alt", "100012", 1, "data_text", "choose-title"], ["alt", "100013", 1, "data_text", "choose-title"], ["alt", "100014", 1, "data_text", "choose-title"], [1, "100012", 2, "width", "28%", "margin-left", "0.75%"], [1, "100013", 2, "width", "28%", "margin-left", "5.5%"], [1, "100014", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "comedy"], ["alt", "100015", 1, "data_text", "choose-title"], ["alt", "100016", 1, "data_text", "choose-title"], ["alt", "100017", 1, "data_text", "choose-title"], [1, "100015", 2, "width", "28%", "margin-left", "0.75%"], [1, "100016", 2, "width", "28%", "margin-left", "5.5%"], [1, "100017", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "war"], ["alt", "100018", 1, "data_text", "choose-title"], ["alt", "100019", 1, "data_text", "choose-title"], ["alt", "100020", 1, "data_text", "choose-title"], [1, "100018", 2, "width", "28%", "margin-left", "0.75%"], [1, "1000119", 2, "width", "28%", "margin-left", "5.5%"], [1, "100020", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "horror"], ["alt", "100021", 1, "data_text", "choose-title"], ["alt", "100022", 1, "data_text", "choose-title"], ["alt", "100023", 1, "data_text", "choose-title"], [1, "100021", 2, "width", "28%", "margin-left", "0.75%"], [1, "100022", 2, "width", "28%", "margin-left", "5.5%"], [1, "100023", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "sci-fi"], ["alt", "100024", 1, "data_text", "choose-title"], ["alt", "100025", 1, "data_text", "choose-title"], ["alt", "100026", 1, "data_text", "choose-title"], [1, "100024", 2, "width", "28%", "margin-left", "0.75%"], [1, "100025", 2, "width", "28%", "margin-left", "5.5%"], [1, "100026", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "musical"], ["alt", "100027", 1, "data_text", "choose-title"], ["alt", "100028", 1, "data_text", "choose-title"], ["alt", "100029", 1, "data_text", "choose-title"], [1, "100027", 2, "width", "28%", "margin-left", "0.75%"], [1, "100028", 2, "width", "28%", "margin-left", "5.5%"], [1, "100029", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "historical"], ["alt", "100030", 1, "data_text", "choose-title"], ["alt", "100031", 1, "data_text", "choose-title"], ["alt", "100032", 1, "data_text", "choose-title"], [1, "100030", 2, "width", "28%", "margin-left", "0.75%"], [1, "100031", 2, "width", "28%", "margin-left", "5.5%"], [1, "100032", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "kids"], ["alt", "100033", 1, "data_text", "choose-title"], ["alt", "100034", 1, "data_text", "choose-title"], ["alt", "100035", 1, "data_text", "choose-title"], [1, "100033", 2, "width", "28%", "margin-left", "0.75%"], [1, "100034", 2, "width", "28%", "margin-left", "5.5%"], [1, "100035", 2, "width", "28%", "margin-left", "6.5%"], [2, "margin-bottom", "25%"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-yellow.png"]], template: function ChooseShowFeatContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Titulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Escolher conte\u00FAdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "REALITY SHOWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "ROMANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "A\u00C7\u00C3O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "NOVELAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "DRAMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "COM\u00C9DIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "GUERRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "TERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "SCI-FI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "MUSICAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "HIST\u00D3RICOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "p", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "CRIAN\u00C7AS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "p", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "img", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1zaG93LWZlYXQtY29udGVudC9jaG9vc2Utc2hvdy1mZWF0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChooseShowFeatContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-choose-show-feat-content',
                templateUrl: './choose-show-feat-content.component.html',
                styleUrls: ['./choose-show-feat-content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/choose-sport-feat-content/choose-sport-feat-content.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/choose-sport-feat-content/choose-sport-feat-content.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChooseSportFeatContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSportFeatContentComponent", function() { return ChooseSportFeatContentComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ChooseSportFeatContentComponent {
    constructor() { }
    ngOnInit() {
        function pad(n, width) {
            let z = '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        let json_final_data;
        const items = jquery__WEBPACK_IMPORTED_MODULE_0__('#main-div').find('.carousel-item:visible');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input').keyup(() => {
            let search_input = jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input')[0].value;
            if (search_input != '') {
                for (let i = 0; i < items.length; i++) {
                    let hasResult = false;
                    const items_title = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p');
                    for (let j = 0; j < items_title.length; j++) {
                        if (((items_title[j].innerText).toLowerCase()).includes(search_input)) {
                            hasResult = true;
                        }
                    }
                    if (!hasResult) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.no-display').css('display', 'none');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.display').css('display', 'block');
                    }
                }
            }
            else {
                for (let i = 0; i < items.length; i++) {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("display");
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("no-display");
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                }
            }
        });
        var api_url = 'https://globo-feat.herokuapp.com/?get_sports_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let json_data = jsondata.users;
                let items = document.getElementsByClassName('data_text');
                for (let i = 0; i < items.length; i++) {
                    const div_content_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr('alt');
                    if (div_content_alt) {
                        let content_title = json_data[div_content_alt].title;
                        jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementsByClassName(div_content_alt)).text(content_title);
                        let content_img = json_data[div_content_alt].imageURL;
                        if (content_img != '') {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', content_img);
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('alt', content_title);
                        }
                        else {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', 'https://i.pinimg.com/474x/bd/1c/a5/bd1ca559f0b2238bd67f316eb8a907ff.jpg');
                        }
                    }
                }
            }
        });
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        let elem = document.getElementsByClassName('chosen-content');
        elem[0].style.display = 'none';
        jquery__WEBPACK_IMPORTED_MODULE_0__("#close").click(function () {
            let elem = document.getElementsByClassName('chosen-content');
            elem[0].style.display = 'none';
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".choose-title").click(function (event) {
            var content_title = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget)[0].querySelector('div').querySelector('img').alt;
            var content_img = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget)[0].querySelector('div').querySelector('img').src;
            var content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget)[0]).attr('alt');
            jquery__WEBPACK_IMPORTED_MODULE_0__('#chosen-content-img').attr('src', content_img);
            jquery__WEBPACK_IMPORTED_MODULE_0__('#chosen-content-title').text(content_title);
            jquery__WEBPACK_IMPORTED_MODULE_0__('#choose-content-link').attr('href', ('/share-feat/') + content_id + '#01');
            let elem = document.getElementsByClassName('chosen-content');
            elem[0].style.display = 'block';
            var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
            jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function (jsondata) {
                    let content_data = jsondata.feats[content_id];
                    if (content_data.owner.length == 0) {
                        var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + '00';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) { }
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_0__('#choose-content-link').attr('href', ('/share-feat/' + content_id + '#00'));
                    }
                    else {
                        var new_feat_id = pad((content_data.hasStarted.length), 2).toString();
                        var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + new_feat_id;
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) { }
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_0__('#choose-content-link').attr('href', ('/share-feat/' + content_id + '#' + new_feat_id));
                    }
                }
            });
        });
    }
}
ChooseSportFeatContentComponent.ɵfac = function ChooseSportFeatContentComponent_Factory(t) { return new (t || ChooseSportFeatContentComponent)(); };
ChooseSportFeatContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChooseSportFeatContentComponent, selectors: [["app-choose-sport-feat-content"]], decls: 296, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "choose-sport-feat-content"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "logo-img", "src", "../../../assets/logo.png"], ["id", "search-input", "type", "text", "placeholder", "Pesquisar conte\u00FAdo", 2, "font-size", "100%", "padding-top", "1.5%", "padding-bottom", "1%"], ["id", "chosen-content", 1, "chosen-content", 2, "background-color", "rgb(42, 43, 43)"], ["id", "close"], ["id", "chosen-content-img", "src", "https://miro.medium.com/max/512/1*inYwyq37FdvRPLRphTqwBA.gif"], ["id", "chosen-content-title"], ["id", "choose-content-link"], ["id", "choose-content"], ["id", "main-div"], ["id", "series-movies", 1, "series-movies", "display", "soccer"], [2, "color", "#7DA627"], [1, "container"], ["id", "carouselContainer", "data-ride", "carousel", "data-interval", "3500", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "display", "active"], [1, ""], ["alt", "200000", 1, "data_text", "choose-title"], ["id", "img"], ["src", "https://miro.medium.com/max/512/1*inYwyq37FdvRPLRphTqwBA.gif", "alt", "js", 1, "d-block"], ["alt", "200001", 1, "data_text", "choose-title"], ["id", "img", 2, "margin-left", "5%"], ["alt", "200002", 1, "data_text", "choose-title"], ["id", "titles"], [1, "200000", 2, "width", "28%", "margin-left", "0.75%"], [1, "200001", 2, "width", "28%", "margin-left", "5.5%"], [1, "200002", 2, "width", "28%", "margin-left", "6.5%"], [2, "width", "97%", "height", "3px", "margin-bottom", "6%", "margin-top", "1%", "background", "#2e2e2e"], ["id", "series-movies", 1, "series-movies", "display", "premiere"], ["alt", "200003", 1, "data_text", "choose-title"], ["alt", "200004", 1, "data_text", "choose-title"], ["alt", "200005", 1, "data_text", "choose-title"], [1, "200003", 2, "width", "28%", "margin-left", "0.75%"], [1, "200004", 2, "width", "28%", "margin-left", "5.5%"], [1, "200005", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "olympics"], ["alt", "200006", 1, "data_text", "choose-title"], ["alt", "200007", 1, "data_text", "choose-title"], ["alt", "200008", 1, "data_text", "choose-title"], [1, "200006", 2, "width", "28%", "margin-left", "0.75%"], [1, "200007", 2, "width", "28%", "margin-left", "5.5%"], [1, "200008", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "formula-1"], ["alt", "200009", 1, "data_text", "choose-title"], ["alt", "200010", 1, "data_text", "choose-title"], ["alt", "200011", 1, "data_text", "choose-title"], [1, "200009", 2, "width", "28%", "margin-left", "0.75%"], [1, "200010", 2, "width", "28%", "margin-left", "5.5%"], [1, "200011", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "ufc"], ["alt", "200012", 1, "data_text", "choose-title"], ["alt", "200013", 1, "data_text", "choose-title"], ["alt", "200014", 1, "data_text", "choose-title"], [1, "200012", 2, "width", "28%", "margin-left", "0.75%"], [1, "200013", 2, "width", "28%", "margin-left", "5.5%"], [1, "200014", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "volei"], ["alt", "200015", 1, "data_text", "choose-title"], ["alt", "200016", 1, "data_text", "choose-title"], ["alt", "200017", 1, "data_text", "choose-title"], [1, "200015", 2, "width", "28%", "margin-left", "0.75%"], [1, "200016", 2, "width", "28%", "margin-left", "5.5%"], [1, "200017", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "basketball"], ["alt", "200018", 1, "data_text", "choose-title"], ["alt", "200019", 1, "data_text", "choose-title"], ["alt", "200020", 1, "data_text", "choose-title"], [1, "200018", 2, "width", "28%", "margin-left", "0.75%"], [1, "2000119", 2, "width", "28%", "margin-left", "5.5%"], [1, "200020", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "skate"], ["alt", "200021", 1, "data_text", "choose-title"], ["alt", "200022", 1, "data_text", "choose-title"], ["alt", "200023", 1, "data_text", "choose-title"], [1, "200021", 2, "width", "28%", "margin-left", "0.75%"], [1, "200022", 2, "width", "28%", "margin-left", "5.5%"], [1, "200023", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "gymnastics"], ["alt", "200024", 1, "data_text", "choose-title"], ["alt", "200025", 1, "data_text", "choose-title"], ["alt", "200026", 1, "data_text", "choose-title"], [1, "200024", 2, "width", "28%", "margin-left", "0.75%"], [1, "200025", 2, "width", "28%", "margin-left", "5.5%"], [1, "200026", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "swimming"], ["alt", "200027", 1, "data_text", "choose-title"], ["alt", "200028", 1, "data_text", "choose-title"], ["alt", "200029", 1, "data_text", "choose-title"], [1, "200027", 2, "width", "28%", "margin-left", "0.75%"], [1, "200028", 2, "width", "28%", "margin-left", "5.5%"], [1, "200029", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "judo"], ["alt", "200030", 1, "data_text", "choose-title"], ["alt", "200031", 1, "data_text", "choose-title"], ["alt", "200032", 1, "data_text", "choose-title"], [1, "200030", 2, "width", "28%", "margin-left", "0.75%"], [1, "200031", 2, "width", "28%", "margin-left", "5.5%"], [1, "200032", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "tenis"], ["alt", "200033", 1, "data_text", "choose-title"], ["alt", "200034", 1, "data_text", "choose-title"], ["alt", "200035", 1, "data_text", "choose-title"], [1, "200033", 2, "width", "28%", "margin-left", "0.75%"], [1, "200034", 2, "width", "28%", "margin-left", "5.5%"], [1, "200035", 2, "width", "28%", "margin-left", "6.5%"], [2, "margin-bottom", "25%"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-yellow.png"]], template: function ChooseSportFeatContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Titulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Escolher conte\u00FAdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "FUTEBOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "PREMIERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "OLIMPIADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "FORMULA 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "UFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "V\u00D4LEI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "BASQUETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "SKATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "GIN\u00C1STICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "NATA\u00C7\u00C3O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "JUD\u00D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "T\u00CANIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "p", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1zcG9ydC1mZWF0LWNvbnRlbnQvY2hvb3NlLXNwb3J0LWZlYXQtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChooseSportFeatContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-choose-sport-feat-content',
                templateUrl: './choose-sport-feat-content.component.html',
                styleUrls: ['./choose-sport-feat-content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/content-info-sports/content-info-sports.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/content-info-sports/content-info-sports.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContentInfoSportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentInfoSportsComponent", function() { return ContentInfoSportsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ContentInfoSportsComponent {
    constructor() { }
    ngOnInit() {
        function pad(n, width) {
            let z = '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        var current_user_email = undefined;
        var user_has_liked_content = false;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                const news = jsondata.users[current_user_email.split('@')[0]].news;
                                let items = document.getElementsByClassName('chosenCategory');
                                for (let i = 0; i < items.length; i++) {
                                    const item_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p').attr('alt');
                                    if (!(news.includes(item_alt))) {
                                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'none');
                                    }
                                    else {
                                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'block');
                                    }
                                }
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                    let has_recomendations = false;
                                    let content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location).attr('href').split('/')[4];
                                    let user_friends = jsondata.users[current_user_email.split('@')[0]].friends;
                                    let contents_liked = jsondata.users[current_user_email.split('@')[0]].likedSports;
                                    if (contents_liked.includes(content_id)) {
                                        user_has_liked_content = true;
                                        setLikeToActive();
                                    }
                                    for (let i = 0; i < user_friends.length; i++) {
                                        let liked_sports_from_friend = jsondata.users[user_friends[i]].likedSports;
                                        if (liked_sports_from_friend.includes(content_id)) {
                                            has_recomendations = true;
                                            let friend_data = '<div id="img" style="margin-left: 5.5%;"><img src="../../../assets/users_data/user_pics/' + user_friends[i] + '.jpg" class="d-block" alt="js" />';
                                            jquery__WEBPACK_IMPORTED_MODULE_0__('.recomendations').append(friend_data);
                                        }
                                    }
                                    if (!has_recomendations) {
                                        let friend_data = '<div id="img" style="margin-left: 5.5%;"><img src="../../../assets/no-user.png" class="d-block" alt="js" />';
                                        jquery__WEBPACK_IMPORTED_MODULE_0__('.recomendations').append(friend_data);
                                    }
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        else {
            //user is not logged in
            jquery__WEBPACK_IMPORTED_MODULE_0__('.create-feat').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.recomended-by').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.recomend-feat').css('display', 'none');
        }
        var api_url = 'https://globo-feat.herokuapp.com/?get_sports_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let json_data = jsondata.users;
                let content_data = json_data[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1]];
                jquery__WEBPACK_IMPORTED_MODULE_0__('#content_img').attr('src', content_data.imageURL);
                jquery__WEBPACK_IMPORTED_MODULE_0__('#title').text(content_data.title.toUpperCase());
                jquery__WEBPACK_IMPORTED_MODULE_0__('#description').find('p').text(content_data.sinopse);
            }
        });
        function setLikeToInactive() {
            let notification = document.getElementById('like');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("like-active");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("like-inactive");
            jquery__WEBPACK_IMPORTED_MODULE_0__('#like-img').attr('src', '../../../assets/star-white.png');
        }
        function setLikeToActive() {
            let notification = document.getElementById('like');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("like-inactive");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("like-active");
            jquery__WEBPACK_IMPORTED_MODULE_0__('#like-img').attr('src', '../../../assets/star-black.png');
            if (!user_has_liked_content) {
                let content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location).attr('href').split('/')[4];
                let current_user = current_user_email.split('@')[0];
                var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setSportLiked=' + content_id;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false);
                xmlHttp.send(null);
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(".like").click(function () {
            let items = document.getElementsByClassName('like');
            for (let i = 0; i < items.length; i++) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).hasClass("like-active")) {
                    setLikeToInactive();
                }
                else {
                    setLikeToActive();
                }
            }
        });
        var content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1];
        var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let content_data = jsondata.feats[content_id];
                if (content_data.owner.length == 0) {
                    var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + '00';
                    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                        type: 'GET',
                        crossDomain: true,
                        dataType: 'json',
                        url: api_url,
                        success: function (jsondata) { }
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_0__('#create-feat-link').attr('href', ('/share-feat/' + content_id + '#00'));
                }
                else {
                    var new_feat_id = pad((content_data.hasStarted.length), 2).toString();
                    var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + new_feat_id;
                    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                        type: 'GET',
                        crossDomain: true,
                        dataType: 'json',
                        url: api_url,
                        success: function (jsondata) { }
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_0__('#create-feat-link').attr('href', ('/share-feat/' + content_id + '#' + new_feat_id));
                }
            }
        });
    }
}
ContentInfoSportsComponent.ɵfac = function ContentInfoSportsComponent_Factory(t) { return new (t || ContentInfoSportsComponent)(); };
ContentInfoSportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentInfoSportsComponent, selectors: [["app-content-info-sports"]], decls: 55, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "content-info"], ["id", "link-copied", 1, "link-inactive"], ["id", "navbar"], ["id", "username"], ["id", "user_picture", "src", ""], ["id", "top-info"], ["id", "content_img", "src", "https://i.imgur.com/3aIutJi.png"], ["id", "info"], ["id", "title"], ["id", "likes"], ["id", "description"], ["id", "like", 1, "like", "like-inactive", "recomend-feat"], ["id", "like-img", "src", "../../../assets/star-white.png"], ["id", "recomended-by", 1, "recomended-by"], [1, "container"], ["data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "recomendations"], [2, "margin-bottom", "5%"], ["id", "buttons"], ["id", "create-feat", 1, "create-feat"], ["id", "create-feat-link"], ["id", "back"], ["href", "/sports"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-white.png"]], template: function ContentInfoSportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LINK COPIADO COM SUCESSO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "TITULO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Informa\u00E7\u00E3o breve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Um oferecimento Globo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " 100 RECOMENDA\u00C7\u00D5ES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Manifest \u00E9 uma s\u00E9rie de televis\u00E3o americana dram\u00E1tica criada por Jeff Rake, que estreou em 24 de setembro de 2018, na NBC. A s\u00E9rie gira em torno dos passageiros e da tripula\u00E7\u00E3o de um avi\u00E3o comercial que repentinamente reaparece ap\u00F3s terem sido dados como mortos por cinco anos. \u00C9 estrelado por Melissa Roxburgh, Josh Dallas, Athena Karkanis, JR Ramirez, Jack Messina, Luna Blaise e Parveen Kaur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "RECOMENDAR ESSE FEAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Feat recomendado por:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Criar feat agora mesmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Voltar a navegar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtaW5mby1zcG9ydHMvY29udGVudC1pbmZvLXNwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentInfoSportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-content-info-sports',
                templateUrl: './content-info-sports.component.html',
                styleUrls: ['./content-info-sports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/content-info/content-info.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/content-info/content-info.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentInfoComponent", function() { return ContentInfoComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ContentInfoComponent {
    constructor() { }
    ngOnInit() {
        function pad(n, width) {
            let z = '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        var user_has_liked_content = false;
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                const news = jsondata.users[current_user_email.split('@')[0]].news;
                                let items = document.getElementsByClassName('chosenCategory');
                                for (let i = 0; i < items.length; i++) {
                                    const item_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p').attr('alt');
                                    if (!(news.includes(item_alt))) {
                                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'none');
                                    }
                                    else {
                                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'block');
                                    }
                                }
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                    let has_recomendations = false;
                                    let content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location).attr('href').split('/')[4];
                                    let contents_liked = jsondata.users[current_user_email.split('@')[0]].likedShows;
                                    if (contents_liked.includes(content_id)) {
                                        user_has_liked_content = true;
                                        setLikeToActive();
                                    }
                                    let user_friends = jsondata.users[current_user_email.split('@')[0]].friends;
                                    for (let i = 0; i < user_friends.length; i++) {
                                        let liked_shows_from_friend = jsondata.users[user_friends[i]].likedShows;
                                        if (liked_shows_from_friend.includes(content_id)) {
                                            has_recomendations = true;
                                            let friend_data = '<div id="img" style="margin-left: 5.5%;"><img src="../../../assets/users_data/user_pics/' + user_friends[i] + '.jpg" class="d-block" alt="js" />';
                                            jquery__WEBPACK_IMPORTED_MODULE_0__('.recomendations').append(friend_data);
                                        }
                                    }
                                    if (!has_recomendations) {
                                        let friend_data = '<div id="img" style="margin-left: 5.5%;"><img src="../../../assets/no-user.png" class="d-block" alt="js" />';
                                        jquery__WEBPACK_IMPORTED_MODULE_0__('.recomendations').append(friend_data);
                                    }
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        else {
            //user is not logged in
            jquery__WEBPACK_IMPORTED_MODULE_0__('.create-feat').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.recomended-by').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.recomend-feat').css('display', 'none');
        }
        var api_url = 'https://globo-feat.herokuapp.com/?get_shows_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let json_data = jsondata.users;
                let content_data = json_data[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1]];
                jquery__WEBPACK_IMPORTED_MODULE_0__('#content_img').attr('src', content_data.img_link);
                jquery__WEBPACK_IMPORTED_MODULE_0__('#title').text(content_data.title.toUpperCase());
                jquery__WEBPACK_IMPORTED_MODULE_0__('#description').find('p').text(content_data.sinopse);
            }
        });
        function setLikeToInactive() {
            let notification = document.getElementById('like');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("like-active");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("like-inactive");
            jquery__WEBPACK_IMPORTED_MODULE_0__('#like-img').attr('src', '../../../assets/star-white.png');
        }
        function setLikeToActive() {
            let notification = document.getElementById('like');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("like-inactive");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("like-active");
            jquery__WEBPACK_IMPORTED_MODULE_0__('#like-img').attr('src', '../../../assets/star-black.png');
            if (!user_has_liked_content) {
                let content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location).attr('href').split('/')[4];
                let current_user = current_user_email.split('@')[0];
                var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setShowLiked=' + content_id;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false);
                xmlHttp.send(null);
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(".like").click(function () {
            let items = document.getElementsByClassName('like');
            for (let i = 0; i < items.length; i++) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).hasClass("like-active")) {
                    setLikeToInactive();
                }
                else {
                    setLikeToActive();
                }
            }
        });
        var content_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1];
        var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let content_data = jsondata.feats[content_id];
                if (content_data.owner.length == 0) {
                    var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + '00';
                    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                        type: 'GET',
                        crossDomain: true,
                        dataType: 'json',
                        url: api_url,
                        success: function (jsondata) { }
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_0__('#create-feat-link').attr('href', ('/share-feat/' + content_id + '#00'));
                }
                else {
                    var new_feat_id = pad((content_data.hasStarted.length), 2).toString();
                    var api_url = 'https://globo-feat.herokuapp.com/?setNewFeat=' + content_id + new_feat_id;
                    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                        type: 'GET',
                        crossDomain: true,
                        dataType: 'json',
                        url: api_url,
                        success: function (jsondata) { }
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_0__('#create-feat-link').attr('href', ('/share-feat/' + content_id + '#' + new_feat_id));
                }
            }
        });
    }
}
ContentInfoComponent.ɵfac = function ContentInfoComponent_Factory(t) { return new (t || ContentInfoComponent)(); };
ContentInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentInfoComponent, selectors: [["app-content-info"]], decls: 55, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "content-info"], ["id", "link-copied", 1, "link-inactive"], ["id", "navbar"], ["id", "username"], ["id", "user_picture", "src", ""], ["id", "top-info"], ["id", "content_img", "src", "https://i.imgur.com/3aIutJi.png"], ["id", "info"], ["id", "title"], ["id", "likes"], ["id", "description"], ["id", "like", 1, "like", "like-inactive", "recomend-feat"], ["id", "like-img", "src", "../../../assets/star-white.png"], ["id", "recomended-by", 1, "recomended-by"], [1, "container", 2, "width", "95%"], ["data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "recomendations"], [2, "margin-bottom", "5%"], ["id", "buttons"], ["id", "create-feat", 1, "create-feat"], ["id", "create-feat-link"], ["id", "back"], ["href", "/shows"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-white.png"]], template: function ContentInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LINK COPIADO COM SUCESSO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "TITULO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Informa\u00E7\u00E3o breve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Um oferecimento Globo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " 100 RECOMENDA\u00C7\u00D5ES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Manifest \u00E9 uma s\u00E9rie de televis\u00E3o americana dram\u00E1tica criada por Jeff Rake, que estreou em 24 de setembro de 2018, na NBC. A s\u00E9rie gira em torno dos passageiros e da tripula\u00E7\u00E3o de um avi\u00E3o comercial que repentinamente reaparece ap\u00F3s terem sido dados como mortos por cinco anos. \u00C9 estrelado por Melissa Roxburgh, Josh Dallas, Athena Karkanis, JR Ramirez, Jack Messina, Luna Blaise e Parveen Kaur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "RECOMENDAR ESSE FEAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Feat recomendado por:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Criar feat agora mesmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Voltar a navegar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtaW5mby9jb250ZW50LWluZm8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-content-info',
                templateUrl: './content-info.component.html',
                styleUrls: ['./content-info.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/create-account/create-account.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CreateAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateAccountComponent.ɵfac = function CreateAccountComponent_Factory(t) { return new (t || CreateAccountComponent)(); };
CreateAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateAccountComponent, selectors: [["app-create-account"]], decls: 20, vars: 0, consts: [["id", "createAccount"], ["src", "../../../assets/logo.png"], ["id", "name"], ["type", "text", "placeholder", "seu nome"], ["id", "email"], ["type", "email", "placeholder", "seu email"], ["id", "password"], ["type", "password", "placeholder", "sua senha"], ["id", "confirm"], ["id", "home"]], template: function CreateAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Senha:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Concluir cadastro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Voltar para tela inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-account',
                templateUrl: './create-account.component.html',
                styleUrls: ['./create-account.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/enter-feat/enter-feat.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/enter-feat/enter-feat.component.ts ***!
  \**********************************************************/
/*! exports provided: EnterFeatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterFeatComponent", function() { return EnterFeatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EnterFeatComponent {
    constructor() { }
    ngOnInit() {
        //let feat_id =  $('#input_content')[0].value;
        //$('#create-feat-link').attr('href', ('/share-feat/' + feat_id));
    }
}
EnterFeatComponent.ɵfac = function EnterFeatComponent_Factory(t) { return new (t || EnterFeatComponent)(); };
EnterFeatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnterFeatComponent, selectors: [["app-enter-feat"]], decls: 27, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "enter-feat"], ["id", "navbar"], ["src", "https://d.newsweek.com/en/full/1566603/wonder-woman-1984.jpg?w=1600&h=1600&q=88&f=f992f9debf800ee5eec2d796c0a64119"], ["id", "main-div"], ["src", "../../../assets/logo.png"], ["placeholder", "ID do feat (ex: 100293)", "id", "input_content"], ["id", "create-feat-link"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-yellow.png"]], template: function EnterFeatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@wonder_woman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Qual o ID do feat?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Entrar neste feat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudGVyLWZlYXQvZW50ZXItZmVhdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnterFeatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-enter-feat',
                templateUrl: './enter-feat.component.html',
                styleUrls: ['./enter-feat.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/feat-home/feat-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/feat-home/feat-home.component.ts ***!
  \********************************************************/
/*! exports provided: FeatHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatHomeComponent", function() { return FeatHomeComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class FeatHomeComponent {
    constructor() { }
    ngOnInit() {
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.add_friends').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_0__('.personalize_profile').css('display', 'none');
        }
    }
}
FeatHomeComponent.ɵfac = function FeatHomeComponent_Factory(t) { return new (t || FeatHomeComponent)(); };
FeatHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeatHomeComponent, selectors: [["app-feat-home"]], decls: 25, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "feat-home"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "main-div"], ["src", "../../../assets/logo.png"], ["id", "buttons"], ["id", "create-feat"], ["href", "/choose-feat-type"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-yellow.png"]], template: function FeatHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Criar um novo feat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlYXQtaG9tZS9mZWF0LWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeatHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-feat-home',
                templateUrl: './feat-home.component.html',
                styleUrls: ['./feat-home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/feat-type/feat-type.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/feat-type/feat-type.component.ts ***!
  \********************************************************/
/*! exports provided: FeatTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatTypeComponent", function() { return FeatTypeComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class FeatTypeComponent {
    constructor() { }
    ngOnInit() {
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email == undefined) {
            window.location.pathname = '/authentication';
        }
        else {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        function selectSport() {
            jquery__WEBPACK_IMPORTED_MODULE_0__('#shows').attr('src', '../../../assets/popcorn-white.png');
            jquery__WEBPACK_IMPORTED_MODULE_0__('#sports').attr('src', '../../../assets/sports-yellow.png');
            jquery__WEBPACK_IMPORTED_MODULE_0__('#next-link').attr('href', "/choose-sport-feat-content");
        }
        function selectShow() {
            jquery__WEBPACK_IMPORTED_MODULE_0__('#sports').attr('src', '../../../assets/sports-white.png');
            jquery__WEBPACK_IMPORTED_MODULE_0__('#shows').attr('src', '../../../assets/popcorn-yellow.png');
            jquery__WEBPACK_IMPORTED_MODULE_0__('#next-link').attr('href', "/choose-show-feat-content");
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__("#sports").click(function () {
            selectSport();
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__("#shows").click(function () {
            selectShow();
        });
    }
}
FeatTypeComponent.ɵfac = function FeatTypeComponent_Factory(t) { return new (t || FeatTypeComponent)(); };
FeatTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeatTypeComponent, selectors: [["app-feat-type"]], decls: 33, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "feat-type"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "main-div"], ["src", "../../../assets/logo.png"], ["id", "choose-feat", 1, "choose-feat"], ["id", "shows", "src", "../../../assets/popcorn-white.png", 2, "margin-left", "20%", "margin-right", "-1%"], ["id", "sports", "src", "../../../assets/sports-white.png", 2, "margin-right", "20%", "margin-left", "6%"], ["id", "buttons"], ["id", "next"], ["id", "next-link"], ["id", "back"], ["href", "/feat-home"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["id", "play", "src", "../../../assets/player-yellow.png"]], template: function FeatTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Que tipo de feat voc\u00EA gostaria de criar?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Pr\u00F3ximo passo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlYXQtdHlwZS9mZWF0LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeatTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-feat-type',
                templateUrl: './feat-type.component.html',
                styleUrls: ['./feat-type.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/find-friends/find-friends.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/find-friends/find-friends.component.ts ***!
  \**************************************************************/
/*! exports provided: FindFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsComponent", function() { return FindFriendsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class FindFriendsComponent {
    constructor() { }
    ngOnInit() {
        var current_user = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user = element.split('=')[1];
            }
        });
        current_user = current_user.split('@')[0];
        if (current_user == undefined) {
            window.location.pathname = '/news';
        }
        let elem = document.getElementsByClassName('item');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input').keyup(() => {
            let search_input = jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input')[0].value;
            if (search_input != '') {
                for (let i = 0; i < elem.length; i++) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).attr("alt").includes(search_input.toLowerCase())) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).css('display', 'inline-block');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).css('display', 'none');
                    }
                }
            }
            else {
                for (let i = 0; i < elem.length; i++) {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).css('display', 'inline-block');
                }
            }
        });
        for (let i = 0; i < elem.length; i++) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).attr("alt") == current_user) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).attr("alt", 'tereza_cristina');
                jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).find('a').attr("alt", 'tereza_cristina');
                let img_url = 'url(../../../assets/users_data/user_pics/' + 'tereza_cristina' + '.jpg';
                jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).css('background-image', img_url);
                jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).find('div').find('p').text('tereza_cristina');
            }
            else {
                let img_url = 'url(../../../assets/users_data/user_pics/' + jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).attr("alt") + '.jpg';
                jquery__WEBPACK_IMPORTED_MODULE_0__(elem[i]).css('background-image', img_url);
            }
            elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(".quiz-answer").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass("active");
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".save").click(function () {
            let selected_friends = document.getElementsByClassName('active');
            for (let i = 0; i < selected_friends.length; i++) {
                const selected_friend = jquery__WEBPACK_IMPORTED_MODULE_0__(selected_friends[i]).attr("alt");
                var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setFriend=' + selected_friend;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false);
                xmlHttp.send(null);
            }
            window.location.pathname = '/news';
        });
    }
}
FindFriendsComponent.ɵfac = function FindFriendsComponent_Factory(t) { return new (t || FindFriendsComponent)(); };
FindFriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FindFriendsComponent, selectors: [["app-find-friends"]], decls: 78, vars: 0, consts: [["id", "find-friends"], ["id", "title"], ["id", "divisor"], ["type", "text", "placeholder", "Pesquisar usu\u00E1rio", "id", "search-input", 2, "font-size", "110%"], [1, "quizimgblock"], ["alt", "ana_almeida", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "ana_almeida", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], [1, "check"], ["src", "../../../assets/selected-03.png", "alt", "check"], [1, "name", 2, "font-size", "70%", "margin-top", "95%", "display", "inline-block"], ["alt", "antonio_neto", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "antonio_neto", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["alt", "bruna_maba", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "bruna_maba", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["alt", "isabela_costa", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "isabela_costa", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["alt", "joao_santos", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "joao_santos", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["alt", "leo_dutra", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "leo_dutra", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["alt", "maria_silva", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "maria_silva", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], [1, "check", 2, "margin-top", "-5%"], ["alt", "nanda_rodrigues", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "nanda_rodrigues", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["alt", "ros_padilha", 1, "item", "wrapper", 2, "margin-right", "1.4%", "margin-bottom", "7%"], ["alt", "ros_padilha", "data-question", "1", "data-answer", "1", 1, "quiz-answer", "multiple-answers"], ["id", "save", 1, "save", 2, "margin-top", "5%"], ["id", "warning"]], template: function FindFriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ENCONTRE E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SIGA SEUS AMIGOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " ana_almeida");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " antonio_neto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " bruna_maba");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " isabela_costa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " joao_santos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " leo_dutra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " maria_silva");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " nanda_rodrigues");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " ros_padilha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Salvar prefer\u00EAncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Voc\u00EA poder\u00E1 alterar depois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbmQtZnJpZW5kcy9maW5kLWZyaWVuZHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FindFriendsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-find-friends',
                templateUrl: './find-friends.component.html',
                styleUrls: ['./find-friends.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/initial-page/initial-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/initial-page/initial-page.component.ts ***!
  \**************************************************************/
/*! exports provided: InitialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageComponent", function() { return InitialPageComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class InitialPageComponent {
    constructor() { }
    ngOnInit() {
        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let items = Object.keys(jsondata.users);
                items.forEach(element => {
                    if (!(jsondata.users[element].hasAccessedBefore)) {
                        let new_div = '<div class="row" style="border: 1px solid white; margin-left: 0.5%; width: 100%; padding-top: 5%; margin-bottom: 5%;"> <p class="col-12">User: ' + jsondata.users[element].email + '</p> <p class="col-12">Senha: ' + jsondata.users[element].password + '</p> </div>';
                        jquery__WEBPACK_IMPORTED_MODULE_0__('#free-accounts').append(new_div);
                    }
                });
            }
        });
    }
}
InitialPageComponent.ɵfac = function InitialPageComponent_Factory(t) { return new (t || InitialPageComponent)(); };
InitialPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InitialPageComponent, selectors: [["app-initial-page"]], decls: 11, vars: 0, consts: [[2, "color", "white", "margin", "10%"], ["src", "../../../assets/logo.png", 2, "width", "90%", "margin-left", "7.5%", "margin-top", "10%", "margin-bottom", "17.5%"], [2, "font-size", "110%"], ["href", "/news", 2, "color", "turquoise"], [2, "text-align", "justify"], ["id", "free-accounts", 2, "font-size", "90%"]], template: function InitialPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bem vindx!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Para acessar o GloboFeat diretamente, clique ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "A seguir, algumas contas que voc\u00EA pode usar para testar nossos servi\u00E7os e personalizar como desejar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaXRpYWwtcGFnZS9pbml0aWFsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InitialPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-initial-page',
                templateUrl: './initial-page.component.html',
                styleUrls: ['./initial-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class LoginComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.login-btn').click(function () {
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var email = jquery__WEBPACK_IMPORTED_MODULE_0__('#input-email')[0].value;
                var password = jquery__WEBPACK_IMPORTED_MODULE_0__('#input-password')[0].value;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var correct_credentials = false;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == email) {
                        if ((users_data[element].password) == password) {
                            correct_credentials = true;
                        }
                    }
                });
                if (correct_credentials) {
                    document.location.href = '/news';
                    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                    document.cookie = "username=" + email;
                    document.location.href = '/news';
                }
                else {
                    let incorrect_data = document.getElementById('try-again');
                    incorrect_data.style.display = 'block';
                }
            };
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 0, consts: [["id", "login"], ["src", "../../../assets/logo.png"], ["id", "email"], ["type", "email", "id", "input-email", "placeholder", "seu email"], ["id", "password"], ["type", "password", "id", "input-password", "placeholder", "sua senha"], ["id", "try-again", 2, "margin-top", "-5%", "margin-bottom", "10%", "display", "none"], ["id", "login", 1, "login-btn"], ["href", "/authentication"], ["id", "home"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Senha:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Dados incorretos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fazer meu login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class NewsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementById('circle');
        elem.style.width = String(screen.width * 0.02) + 'px';
        elem.style.height = String(screen.width * 0.02) + 'px';
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                const news = jsondata.users[current_user_email.split('@')[0]].news;
                                let items = document.getElementsByClassName('chosenCategory');
                                for (let i = 0; i < items.length; i++) {
                                    const item_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p').attr('alt');
                                    if (!(news.includes(item_alt))) {
                                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'none');
                                    }
                                    else {
                                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'block');
                                    }
                                }
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        function copyStringToClipboard(str) {
            var el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        function setLinkCopiedToInactive() {
            let notification = document.getElementById('link-copied');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("link-active");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("link-inactive");
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(".item").click(function () {
            let items = document.getElementsByClassName('item');
            for (let i = 0; i < items.length; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("active");
            }
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass("active");
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__(".share").click(function () {
            let notification = document.getElementById('link-copied');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("link-inactive");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("link-active");
            copyStringToClipboard(jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('alt'));
            setTimeout(setLinkCopiedToInactive, 3000);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.selected-carousel-item').click(function () {
            let items = document.getElementsByClassName('chosenCategory');
            for (let i = 0; i < items.length; i++) {
                const item_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p').attr('alt');
                if (!(jquery__WEBPACK_IMPORTED_MODULE_0__(this).find('img').attr('alt') == item_alt)) {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'none');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'block');
                }
            }
        });
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 490, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "news-home"], ["id", "link-copied", 1, "link-inactive"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "feats-happening"], ["id", "circle"], [1, "container"], ["data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, ""], ["id", "img"], ["src", "https://estaticos.globoradio.globo.com/fotos/2020/01/bf0e2861-8ee4-4205-9090-896f4a03f321.png.300x300_q90_box-0%2C0%2C1080%2C1080_detail_upscale.jpg", "alt", "js", 1, "d-block"], ["id", "img2", 2, "margin-right", "4%"], ["src", "../../../assets/users_data/user_pics/bruna_maba.jpg", "alt", "js", 1, "d-block"], ["src", "https://static1.purebreak.com.br/articles/8/92/36/8/@/355420--harry-potter-veja-como-esta-o-elenco-239x239-2.jpg", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/isabela_costa.jpg", "alt", "js", 1, "d-block"], ["src", "https://images-na.ssl-images-amazon.com/images/I/81fqKipDfHL._AC_SY355_.jpg", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/leo_dutra.jpg", "alt", "js", 1, "d-block"], ["src", "https://miro.medium.com/max/1024/1*qqiIDkn-sB4LF-Vfd9rRnw.png", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/nanda_rodrigues.jpg", "alt", "js", 1, "d-block"], ["src", "data:image/jpeg;base64,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", "alt", "js", 1, "d-block"], ["id", "img2"], ["src", "../../../assets/users_data/user_pics/ros_padilha.jpg", "alt", "js", 1, "d-block"], ["id", "categories"], ["id", "carouselContainer", "data-ride", "carousel", 1, "carousel", "slide"], ["id", "img", 1, "selected-carousel-item", 2, "margin-right", "3%"], ["src", "../../../assets/categories/news/movies.jpg", "alt", "movies", 1, "d-block"], ["src", "../../../assets/categories/news/international.jpg", "alt", "international", 1, "d-block"], ["src", "../../../assets/categories/news/music.jpg", "alt", "music", 1, "d-block"], ["id", "img", 1, "selected-carousel-item", 2, "margin-right", "9.5%"], ["src", "../../../assets/categories/news/politics.jpg", "alt", "politics", 1, "d-block"], [1, "carousel-item"], ["src", "../../../assets/categories/news/social.jpg", "alt", "social", 1, "d-block"], ["src", "../../../assets/categories/news/tech.jpg", "alt", "tech", 1, "d-block"], ["src", "../../../assets/categories/news/tv.jpg", "alt", "tv", 1, "d-block"], ["src", "../../../assets/categories/news/tragedies.jpg", "alt", "tragedies", 1, "d-block"], ["src", "../../../assets/categories/news/cars.jpg", "alt", "cars", 1, "d-block"], ["src", "../../../assets/categories/news/culture.jpg", "alt", "culture", 1, "d-block"], ["src", "../../../assets/categories/news/economy.jpg", "alt", "economy", 1, "d-block"], ["src", "../../../assets/categories/news/sports.jpg", "alt", "sports", 1, "d-block"], ["href", "#carouselContainer", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", 2, "margin-left", "-3.5%"], ["id", "previousIcon", "aria-hidden", "true"], ["href", "#carouselContainer", "role", "button", "data-slide", "next", 1, "carousel-control-next", "active", 2, "margin-right", "-3.5%"], ["id", "nextIcon", "aria-hidden", "true"], ["id", "chosenCategory", 1, "chosenCategory"], ["alt", "economy"], ["id", "content"], ["id", "item", 1, "item"], ["src", "data:image/png;base64,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"], ["id", "description"], ["target", "_blank", "href", "https://g1.globo.com/economia/imposto-de-renda/noticia/2020/04/02/imposto-de-renda-calendario-de-restituicao-esta-mantido-informa-receita-federal.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/economia/imposto-de-renda/noticia/2020/04/02/imposto-de-renda-calendario-de-restituicao-esta-mantido-informa-receita-federal.ghtml", 1, "share"], ["id", "like"], ["src", "../../../assets/star.png"], ["src", "https://campinas.com.br/wp-content/uploads/2020/04/covid11-350x350.jpg"], ["target", "_blank", "href", "https://g1.globo.com/ba/bahia/noticia/2020/04/30/pesquisa-voltada-para-empresas-da-bahia-investiga-impactos-da-pandemia-do-covid-19-na-economia-local-confira.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/ba/bahia/noticia/2020/04/30/pesquisa-voltada-para-empresas-da-bahia-investiga-impactos-da-pandemia-do-covid-19-na-economia-local-confira.ghtml", 1, "share"], [2, "width", "100%", "height", "3px", "margin-bottom", "6%", "margin-top", "3%", "background", "#2e2e2e"], ["alt", "politics"], ["src", "https://www.emaisgoias.com.br/wp-content/uploads/2020/04/xbolsonaro.jpg.pagespeed.ic_.IOGpla2kpc-1200x1200.jpg"], ["target", "_blank", "href", "https://g1.globo.com/politica/noticia/2020/04/30/bolsonaro-diz-que-decisao-de-moraes-foi-politica-e-que-vai-recorrer-da-suspensao-da-nomeacao-de-ramagem-no-comando-da-pf.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/politica/noticia/2020/04/30/bolsonaro-diz-que-decisao-de-moraes-foi-politica-e-que-vai-recorrer-da-suspensao-da-nomeacao-de-ramagem-no-comando-da-pf.ghtml", 1, "share"], ["src", "https://eaesp.fgv.br/sites/eaesp.fgv.br/files/styles/noticia_interna/public/noticias/mar/20/covid_1.jpg?itok=_fbvfQv5"], ["target", "_blank", "href", "https://g1.globo.com/mg/minas-gerais/noticia/2020/04/28/plataforma-mundial-de-mapeamento-de-politicas-publicas-contra-a-covid-19-tem-coordenacao-de-mineira.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/mg/minas-gerais/noticia/2020/04/28/plataforma-mundial-de-mapeamento-de-politicas-publicas-contra-a-covid-19-tem-coordenacao-de-mineira.ghtml", 1, "share"], ["alt", "movies"], ["src", "https://www.acheiusa.com/wp-content/uploads/2017/07/Raphael-Bittencourt.jpg"], ["target", "_blank", "href", "https://g1.globo.com/ms/mato-grosso-do-sul/noticia/2020/04/29/cineasta-de-ms-tem-curtas-exibidos-em-festivais-online-me-sinto-em-filme-com-teoria-de-linha-do-tempo.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/ms/mato-grosso-do-sul/noticia/2020/04/29/cineasta-de-ms-tem-curtas-exibidos-em-festivais-online-me-sinto-em-filme-com-teoria-de-linha-do-tempo.ghtml", 1, "share"], ["src", "https://www.noroesteonline.com/wp-content/uploads/2019/10/oscar-890x890.jpg"], ["target", "_blank", "href", "https://g1.globo.com/pop-arte/cinema/noticia/2020/04/28/oscar-2021-filmes-transmitidos-apenas-na-internet-poderao-concorrer-diz-academia.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/pop-arte/cinema/noticia/2020/04/28/oscar-2021-filmes-transmitidos-apenas-na-internet-poderao-concorrer-diz-academia.ghtml", 1, "share"], ["alt", "international"], ["src", "https://conteudo.imguol.com.br/c/noticias/a3/2018/10/22/22out2018---imigrantes-hondurenhos-em-uma-caravana-para-os-estados-unidos-caminham-em-metapa-a-caminho-de-tapachula-estado-de-chiapas-no-mexico-1540227046294_300x300.jpg"], ["alt", "https://g1.globo.com/mundo/noticia/2020/05/02/com-coronavirus-eua-acabaram-para-o-imigrante-esta-insustentavel-diz-mineiro-que-vai-voltar-ao-brasil.ghtml#G1-POST-TOP-1H-item-sel-7,top,d2e35a48-5536-47dd-be57-0cf940860a44", 1, "share"], ["src", "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/04/25/464a71de-86a2-11ea-8863-2139a14b0dea_image_hires_113611.jpg?itok=6720o20Q&v=1587785779"], ["alt", "sports"], ["src", "https://c1.staticflickr.com/1/327/20032604512_7f81afd379_b.jpg"], ["target", "_blank", "href", "https://g1.globo.com/pe/pernambuco/noticia/2020/01/19/classico-entre-nautico-e-sport-e-procissoes-religiosas-bloqueiam-vias-no-recife.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/pe/pernambuco/noticia/2020/01/19/classico-entre-nautico-e-sport-e-procissoes-religiosas-bloqueiam-vias-no-recife.ghtml", 1, "share"], ["src", "https://images-americanas.b2w.io/produtos/01/00/oferta/47993/3/47993319_1SZ.jpg"], ["target", "_blank", "href", "https://g1.globo.com/sp/sao-paulo/noticia/2019/10/10/jovens-de-sp-se-profissionalizam-no-e-sports-e-ganham-dinheiro-jogando-no-celular.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/sp/sao-paulo/noticia/2019/10/10/jovens-de-sp-se-profissionalizam-no-e-sports-e-ganham-dinheiro-jogando-no-celular.ghtml", 1, "share"], ["alt", "tv"], ["src", "https://images.theconversation.com/files/289763/original/file-20190828-184222-1kvvepm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"], ["target", "_blank", "href", "https://g1.globo.com/ap/amapa/noticia/2020/05/02/uso-da-tv-para-acesso-a-internet-sobe-cerca-de-9percent-em-2-anos-no-amapa-diz-ibge.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/ap/amapa/noticia/2020/05/02/uso-da-tv-para-acesso-a-internet-sobe-cerca-de-9percent-em-2-anos-no-amapa-diz-ibge.ghtml", 1, "share"], ["target", "_blank", "href", "https://g1.globo.com/sp/presidente-prudente-regiao/noticia/2020/04/30/programacao-ao-vivo-da-tv-fronteira-ja-esta-disponivel-no-globoplay.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/sp/presidente-prudente-regiao/noticia/2020/04/30/programacao-ao-vivo-da-tv-fronteira-ja-esta-disponivel-no-globoplay.ghtml", 1, "share"], ["alt", "culture"], ["src", "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/04/27/3312448-gabriela-pugliesi-com-contratos-perdido-650x488-1.jpg"], ["target", "_blank", "href", "https://g1.globo.com/podcast/semana-pop/noticia/2020/05/02/semana-pop-84-o-caso-pugliesi-e-a-crise-dos-influenciadores-na-pandemia.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/podcast/semana-pop/noticia/2020/05/02/semana-pop-84-o-caso-pugliesi-e-a-crise-dos-influenciadores-na-pandemia.ghtml", 1, "share"], ["src", "data:image/png;base64,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"], ["target", "_blank", "href", "https://g1.globo.com/loterias/noticia/2020/05/02/mega-sena-pode-pagar-r-47-milhoes-neste-sabado.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/loterias/noticia/2020/05/02/mega-sena-pode-pagar-r-47-milhoes-neste-sabado.ghtml", 1, "share"], ["alt", "music"], ["src", "https://www.vagalume.com.br/alok/images/alok.jpg"], ["target", "_blank", "href", "https://g1.globo.com/pop-arte/musica/noticia/2020/05/02/lives-de-hoje-alok-jorge-and-mateus-lulu-santos-e-mais-shows-para-ver-em-casa.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/pop-arte/musica/noticia/2020/05/02/lives-de-hoje-alok-jorge-and-mateus-lulu-santos-e-mais-shows-para-ver-em-casa.ghtml", 1, "share"], ["src", "https://www.vagalume.com.br/beth-carvalho/images/beth-carvalho.jpg"], ["target", "_blank", "href", "https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2020/04/30/beth-carvalho-e-revivida-um-ano-apos-a-morte-da-cantora-em-lives-e-filme.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2020/04/30/beth-carvalho-e-revivida-um-ano-apos-a-morte-da-cantora-em-lives-e-filme.ghtml", 1, "share"], ["alt", "tech"], ["src", "https://d30p9ca83oqyng.cloudfront.net/defesanet/site/upload/news_image/2019/11/45411_resize_200_200_true_false_null.jpg"], ["target", "_blank", "href", "https://g1.globo.com/sc/santa-catarina/techsc/noticia/2020/01/12/tech-sc-apresenta-tecnologia-e-vantagens-de-veiculos-eletricos.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/sc/santa-catarina/techsc/noticia/2020/01/12/tech-sc-apresenta-tecnologia-e-vantagens-de-veiculos-eletricos.ghtml", 1, "share"], ["src", "https://static.ndonline.com.br/2020/03/contato-cdljoinville.jpg"], ["target", "_blank", "href", "https://g1.globo.com/sc/santa-catarina/techsc/noticia/2020/03/29/por-causa-do-novo-coronavirus-empresas-de-joinville-criam-planos-de-acao-e-alternativas-de-trabalho.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/sc/santa-catarina/techsc/noticia/2020/03/29/por-causa-do-novo-coronavirus-empresas-de-joinville-criam-planos-de-acao-e-alternativas-de-trabalho.ghtml", 1, "share"], ["alt", "social"], ["src", "https://www.essentialnutrition.com.br/conteudos/wp-content/uploads/2016/05/comportamento-contagioso-750x750.jpg"], ["target", "_blank", "href", "https://g1.globo.com/fique-em-casa/noticia/2020/04/16/coronavirus-comportamentos-certos-e-errados-em-tempos-de-pandemia.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/fique-em-casa/noticia/2020/04/16/coronavirus-comportamentos-certos-e-errados-em-tempos-de-pandemia.ghtml", 1, "share"], ["src", "https://cdn.vox-cdn.com/thumbor/YQwVQzp4pzLJzRl2MKP3omAWAYg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915549/FaceMask_Thumb_Clean.jpg"], ["target", "_blank", "href", "https://g1.globo.com/bemestar/coronavirus/noticia/2020/04/23/os-erros-mais-comuns-no-uso-de-mascaras-para-se-proteger-do-coronavirus-e-como-usar-corretamente.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/bemestar/coronavirus/noticia/2020/04/23/os-erros-mais-comuns-no-uso-de-mascaras-para-se-proteger-do-coronavirus-e-como-usar-corretamente.ghtml", 1, "share"], ["alt", "cars"], ["src", "https://66.media.tumblr.com/4e212c3bce39a338f18514acdf98867d/3883dda6b8cf4a61-79/s640x960/a2c0c30dd189e67a56b0ffc72b00d30c23213518.jpg"], ["target", "_blank", "href", "https://g1.globo.com/sp/sorocaba-jundiai/noticia/2020/05/01/familia-encontra-filhotes-de-gato-presos-em-motor-de-carro-em-mairinque.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/sp/sorocaba-jundiai/noticia/2020/05/01/familia-encontra-filhotes-de-gato-presos-em-motor-de-carro-em-mairinque.ghtml", 1, "share"], ["src", "https://s2.glbimg.com/VTrJFl03cmgVCtcbxUPKAFT5H88=/475x475/top/i.glbimg.com/og/ig/infoglobo/f/original/2019/10/23/tata.png"], ["target", "_blank", "href", "https://g1.globo.com/mg/minas-gerais/noticia/2020/04/28/emocao-e-forte-nunca-vou-ter-outra-igual-disse-bombeiro-que-fez-parto-da-filha-dentro-de-carro-em-rodovia-da-grande-bh.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/mg/minas-gerais/noticia/2020/04/28/emocao-e-forte-nunca-vou-ter-outra-igual-disse-bombeiro-que-fez-parto-da-filha-dentro-de-carro-em-rodovia-da-grande-bh.ghtml", 1, "share"], ["alt", "tragedies"], ["src", "https://conteudo.imguol.com.br/c/entretenimento/49/2020/03/24/drive-thru-de-vacinacao-1585076808904_v2_450x450.jpg"], ["target", "_blank", "href", "https://g1.globo.com/sp/sao-paulo/noticia/2020/05/02/faculdade-de-sp-entrega-diplomas-a-formandos-em-esquema-drive-thru.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/sp/sao-paulo/noticia/2020/05/02/faculdade-de-sp-entrega-diplomas-a-formandos-em-esquema-drive-thru.ghtml", 1, "share"], ["src", "https://imediatoonline.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-02-at-13.08.57-320x320.jpeg"], ["target", "_blank", "href", "https://g1.globo.com/am/amazonas/noticia/2020/05/02/apos-mais-de-5h-de-rebeliao-secretaria-de-seguranca-anuncia-que-situacao-foi-normalizada-em-presidio-de-manaus.ghtml", 2, "padding-left", "10%"], ["alt", "https://g1.globo.com/am/amazonas/noticia/2020/05/02/apos-mais-de-5h-de-rebeliao-secretaria-de-seguranca-anuncia-que-situacao-foi-normalizada-em-presidio-de-manaus.ghtml", 1, "share"], [2, "margin-bottom", "25%"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-yellow.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-white.png"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LINK COPIADO COM SUCESSO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "FEATS ACONTECENDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "CATEGORIAS DE NOT\u00CDCIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "ECONOMIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Imposto de Renda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Calend\u00E1rio de restitui\u00E7\u00E3o est\u00E1 mantido, informa Receita...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Impactos Covid-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Pesquisa na Bahia investiga impactos na economia...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "POL\u00CDTICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Bolsonaro na PF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Bolsonaro diz que decis\u00E3o de Moraes foi 'pol\u00EDtica'...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Mapeamento Corona");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Mapeamento de pol\u00EDticas p\u00FAblicas contra a Covid-19 tem...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "FILMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Curtas online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Cineasta de MS tem curtas exibidos em festivais online...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Oscar 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Filmes exibidos apenas na internet durante pandemia...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "MUNDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Imigra\u00E7\u00E3o nos EUA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Com o Corona, EUA acabou para imigrantes...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Kim Jong-un");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Kim Jong-un reaparece em p\u00FAblico ap\u00F3s 20 dias...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "ESPORTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "N\u00E1utico vs Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Cl\u00E1ssico entre N\u00E1utico e Sport e prociss\u00F5es religiosas...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Jovens no E-Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Jovens de SP se profissionalizam no e-sports e ganham...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "TELEVIS\u00C3O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Uso da TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Uso da TV para acesso \u00E0 internet sobe e quase dobra nos...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Globoplay ao vivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Programa\u00E7\u00E3o ao vivo j\u00E1 est\u00E1 dispon\u00EDvel no Globoplay...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "CULTURA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Caso Pugliesi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Semana Pop #84: A crise dos influenciadores na pandemia...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Mega-Sena");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Mega-Sena pode pagar R$ 47 milh\u00F5es neste s\u00E1bado...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](314, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "M\u00DASICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Lives de hoje");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Alok, Jorge & Mateus, Lulu Santos e mais shows para ver...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Beth Carvalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Beth Carvalho \u00E9 revivida, um ano ap\u00F3s a morte da cantora...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "p", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "TECNOLOGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "img", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Tech SC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Tech SC apresenta tecnologia e vantagens de el\u00E9tricos...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Joinville");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Empresas de Joinville criam planos de a\u00E7\u00E3o e alternativas...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](380, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "p", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "SOCIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](386, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Comportamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Comportamentos certos e errados em tempos de...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](400, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Uso de m\u00E1scaras");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Os erros mais comuns no uso de m\u00E1scaras para se...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](409, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "p", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "CARROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Preso no motor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "Fam\u00EDlia encontra filhotes de gato presos em motor...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](433, "img", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "Parto no carro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "'Emo\u00E7\u00E3o \u00E9 forte; nunca vou ter outra igual'...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](446, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "p", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "OUTROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Faculdade de SP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Faculdade entrega diplomas em 'drive-thru'...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, " 080 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](466, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Rebeli\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Ap\u00F3s mais de 5h de rebeli\u00E3o, secretaria de...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "ler completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "compartilhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, " 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](478, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](479, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](480, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](485, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](487, "img", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "img", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/retrieve-password/retrieve-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/retrieve-password/retrieve-password.component.ts ***!
  \************************************************************************/
/*! exports provided: RetrievePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrievePasswordComponent", function() { return RetrievePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RetrievePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
RetrievePasswordComponent.ɵfac = function RetrievePasswordComponent_Factory(t) { return new (t || RetrievePasswordComponent)(); };
RetrievePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetrievePasswordComponent, selectors: [["app-retrieve-password"]], decls: 12, vars: 0, consts: [["id", "retrievePassword"], ["src", "../../../assets/logo.png"], ["id", "email"], ["type", "email", "placeholder", "seu email"], ["id", "confirm"], ["id", "home"]], template: function RetrievePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recuperar senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Voltar para tela inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJpZXZlLXBhc3N3b3JkL3JldHJpZXZlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetrievePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-retrieve-password',
                templateUrl: './retrieve-password.component.html',
                styleUrls: ['./retrieve-password.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/share-feat/share-feat.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/share-feat/share-feat.component.ts ***!
  \**********************************************************/
/*! exports provided: ShareFeatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareFeatComponent", function() { return ShareFeatComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ShareFeatComponent {
    constructor() { }
    ngOnInit() {
        var feat_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1].replace('#', '');
        jquery__WEBPACK_IMPORTED_MODULE_0__(".feat_id").text(feat_id);
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        var feat_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1].replace('#', '');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#feat-id').text(feat_id);
        jquery__WEBPACK_IMPORTED_MODULE_0__('#feat-id-02').text(feat_id);
        function setLinkCopiedToInactive() {
            let notification = document.getElementById('link-copied');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("link-active");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("link-inactive");
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(".item").click(function () {
            let items = document.getElementsByClassName('item');
            for (let i = 0; i < items.length; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("active");
            }
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass("active");
        });
        function copyStringToClipboard(str) {
            var el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(".share").click(function () {
            let notification = document.getElementById('link-copied');
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).removeClass("link-inactive");
            jquery__WEBPACK_IMPORTED_MODULE_0__(notification).toggleClass("link-active");
            copyStringToClipboard(('http://globofeat.online/waiting-room/' + feat_id));
            setTimeout(setLinkCopiedToInactive, 3000);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.start').click(function () {
            let user_name = current_user_email.split('@')[0].split('_')[0];
            let content_id = feat_id.substring(0, feat_id.length - 1);
            content_id = content_id.substring(0, content_id.length - 1);
            var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
            jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function (jsondata) {
                    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                        type: 'GET',
                        crossDomain: true,
                        dataType: 'json',
                        url: api_url,
                        success: function (jsondata) {
                            var feat_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1].replace('#', '');
                            var api_url = 'https://globo-feat.herokuapp.com/?startFeat=' + feat_id;
                            jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                                type: 'GET',
                                crossDomain: true,
                                dataType: 'json',
                                url: api_url,
                                success: function (jsondata) { }
                            });
                        }
                    });
                    let feat_url = 'https://globofeat-api.herokuapp.com/r/' + feat_id + '/' + user_name + '/' + jsondata.feats[content_id].youtube_link;
                    window.location.replace(feat_url);
                }
            });
        });
    }
}
ShareFeatComponent.ɵfac = function ShareFeatComponent_Factory(t) { return new (t || ShareFeatComponent)(); };
ShareFeatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShareFeatComponent, selectors: [["app-share-feat"]], decls: 59, vars: 0, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "share-feat"], ["id", "link-copied", 1, "link-inactive"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active", 2, "margin-bottom", "-5%"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1", 2, "margin-bottom", "-5%"], [1, "carousel-inner", 2, "width", "80%", "margin-left", "10%"], [1, "carousel-item", "active"], ["src", "../../../assets/add_02.png", "alt", "Second slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/add_03.png", "alt", "Third slide", 1, "d-block", "w-100"], ["id", "main-div", 2, "margin-top", "8%"], ["id", "invite-text"], ["id", "feat-info"], ["id", "feat-id", 1, "feat_id"], ["id", "feat-link"], ["id", "feat-id-02", 1, "feat_id"], [1, "share"], ["id", "copy-feat-link"], ["src", "../../../assets/copy.png"], ["id", "copy-link-text"], ["id", "buttons"], ["id", "next"], ["id", "next-link", 1, "start"], ["id", "back"], ["href", "/feat-home"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["id", "play", "src", "../../../assets/player-yellow.png"]], template: function ShareFeatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "LINK COPIADO COM SUCESSO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ol", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "A sess\u00E3o est\u00E1 pronta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "CONVIDE SEUS AMIGOS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "ID deste feat \u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "http://globofeat.online/waiting-room/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "COPIAR LINK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Copie o link e envie para amigos entrarem no feat com voc\u00EA!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Iniciar transmiss\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlLWZlYXQvc2hhcmUtZmVhdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareFeatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-share-feat',
                templateUrl: './share-feat.component.html',
                styleUrls: ['./share-feat.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/shows/shows.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/shows/shows.component.ts ***!
  \************************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/content-info", "100000"]; };
const _c1 = function () { return ["/content-info", "100001"]; };
const _c2 = function () { return ["/content-info", "100002"]; };
const _c3 = function () { return ["/content-info", "100003"]; };
const _c4 = function () { return ["/content-info", "100004"]; };
const _c5 = function () { return ["/content-info", "100005"]; };
const _c6 = function () { return ["/content-info", "100006"]; };
const _c7 = function () { return ["/content-info", "100007"]; };
const _c8 = function () { return ["/content-info", "100008"]; };
const _c9 = function () { return ["/content-info", "100009"]; };
const _c10 = function () { return ["/content-info", "100010"]; };
const _c11 = function () { return ["/content-info", "100011"]; };
const _c12 = function () { return ["/content-info", "100012"]; };
const _c13 = function () { return ["/content-info", "100013"]; };
const _c14 = function () { return ["/content-info", "100014"]; };
const _c15 = function () { return ["/content-info", "100015"]; };
const _c16 = function () { return ["/content-info", "100016"]; };
const _c17 = function () { return ["/content-info", "100017"]; };
const _c18 = function () { return ["/content-info", "100018"]; };
const _c19 = function () { return ["/content-info", "100019"]; };
const _c20 = function () { return ["/content-info", "100020"]; };
const _c21 = function () { return ["/content-info", "100021"]; };
const _c22 = function () { return ["/content-info", "100022"]; };
const _c23 = function () { return ["/content-info", "100023"]; };
const _c24 = function () { return ["/content-info", "100024"]; };
const _c25 = function () { return ["/content-info", "100025"]; };
const _c26 = function () { return ["/content-info", "100026"]; };
const _c27 = function () { return ["/content-info", "100027"]; };
const _c28 = function () { return ["/content-info", "100028"]; };
const _c29 = function () { return ["/content-info", "100029"]; };
const _c30 = function () { return ["/content-info", "100030"]; };
const _c31 = function () { return ["/content-info", "100031"]; };
const _c32 = function () { return ["/content-info", "100032"]; };
const _c33 = function () { return ["/content-info", "100033"]; };
const _c34 = function () { return ["/content-info", "100034"]; };
const _c35 = function () { return ["/content-info", "100035"]; };
class ShowsComponent {
    constructor() { }
    ngOnInit() {
        let hasUser = false;
        let json_final_data;
        const items = jquery__WEBPACK_IMPORTED_MODULE_0__('#main-div').find('.carousel-item:visible');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input').keyup(() => {
            let search_input = jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input')[0].value;
            if (search_input != '') {
                for (let i = 0; i < items.length - 1; i++) {
                    let hasResult = false;
                    const items_title = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p');
                    let items_more = document.getElementsByClassName('more_content');
                    for (let i = 0; i < items_more.length; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items_more[i]).css('display', 'none');
                    }
                    for (let j = 0; j < items_title.length; j++) {
                        if (((items_title[j].innerText).toLowerCase()).includes(search_input)) {
                            hasResult = true;
                        }
                    }
                    if (!hasResult) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.no-display').css('display', 'none');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.display').css('display', 'block');
                    }
                }
            }
            else {
                if (hasUser) {
                    let items_more = document.getElementsByClassName('more_content');
                    for (let i = 0; i < items_more.length; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items_more[i]).css('display', 'block');
                    }
                    for (let i = 0; i < items.length - 1; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                    }
                    let content_divs = document.getElementsByClassName('series-movies');
                    let showCategories = json_final_data.users[current_user_email.split('@')[0]].showCategories;
                    for (let i = 0; i < content_divs.length; i++) {
                        if (!(showCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).attr('class').split(' ')[1]))) {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).css('display', 'none');
                        }
                    }
                    let carousel_items = jquery__WEBPACK_IMPORTED_MODULE_0__('.more_content').find('.carousel-inner').find('.carousel-item');
                    for (let i = 0; i < carousel_items.length; i++) {
                        if (showCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).attr('class').split('item-')[1])) {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).remove();
                        }
                    }
                }
            }
        });
        var api_url = 'https://globo-feat.herokuapp.com/?get_shows_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let json_data = jsondata.users;
                let items = document.getElementsByClassName('data_text');
                for (let i = 0; i < items.length; i++) {
                    const div_content_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr('alt');
                    if (div_content_alt) {
                        let content_title = json_data[div_content_alt].title;
                        jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementsByClassName(div_content_alt)).text(content_title);
                        let content_img = json_data[div_content_alt].img_link;
                        if (content_img != '')
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', content_img);
                        else
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', 'https://i.pinimg.com/474x/bd/1c/a5/bd1ca559f0b2238bd67f316eb8a907ff.jpg');
                    }
                }
            }
        });
        let elem = document.getElementById('circle');
        elem.style.width = String(screen.width * 0.02) + 'px';
        elem.style.height = String(screen.width * 0.02) + 'px';
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            hasUser = true;
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                    let content_divs = document.getElementsByClassName('series-movies');
                                    let showCategories = jsondata.users[current_user_email.split('@')[0]].showCategories;
                                    json_final_data = jsondata;
                                    for (let i = 0; i < content_divs.length; i++) {
                                        if (!(showCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).attr('class').split(' ')[2]))) {
                                            jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).css('display', 'none');
                                        }
                                    }
                                    let carousel_items = jquery__WEBPACK_IMPORTED_MODULE_0__('.more_content').find('.carousel-inner').find('.carousel-item');
                                    for (let i = 0; i < carousel_items.length; i++) {
                                        if (showCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).attr('class').split('item-')[1])) {
                                            jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).remove();
                                        }
                                    }
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        else {
            let items = document.getElementsByClassName('more_content');
            for (let i = 0; i < items.length; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'none');
            }
        }
    }
}
ShowsComponent.ɵfac = function ShowsComponent_Factory(t) { return new (t || ShowsComponent)(); };
ShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowsComponent, selectors: [["app-shows"]], decls: 501, vars: 144, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "shows-home"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "feats-happening"], ["id", "circle"], [1, "container"], ["data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, ""], ["id", "img"], ["src", "https://estaticos.globoradio.globo.com/fotos/2020/01/bf0e2861-8ee4-4205-9090-896f4a03f321.png.300x300_q90_box-0%2C0%2C1080%2C1080_detail_upscale.jpg", "alt", "js", 1, "d-block"], ["id", "img2", 2, "margin-right", "4%"], ["src", "../../../assets/users_data/user_pics/bruna_maba.jpg", "alt", "js", 1, "d-block"], ["src", "https://static1.purebreak.com.br/articles/8/92/36/8/@/355420--harry-potter-veja-como-esta-o-elenco-239x239-2.jpg", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/isabela_costa.jpg", "alt", "js", 1, "d-block"], ["src", "https://images-na.ssl-images-amazon.com/images/I/81fqKipDfHL._AC_SY355_.jpg", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/leo_dutra.jpg", "alt", "js", 1, "d-block"], ["src", "https://miro.medium.com/max/1024/1*qqiIDkn-sB4LF-Vfd9rRnw.png", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/nanda_rodrigues.jpg", "alt", "js", 1, "d-block"], ["src", "data:image/jpeg;base64,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", "alt", "js", 1, "d-block"], ["id", "img2"], ["src", "../../../assets/users_data/user_pics/ros_padilha.jpg", "alt", "js", 1, "d-block"], ["type", "text", "id", "search-input", "placeholder", "Pesquisar conte\u00FAdo"], ["id", "main-div"], ["id", "series-movies", 1, "series-movies", "display", "reality-show"], ["id", "carouselContainer", "data-ride", "carousel", "data-interval", "3500", 1, "carousel", "slide"], [1, "carousel-item", "display", "active"], ["alt", "100000", 1, "data_text", 3, "routerLink"], ["src", "https://miro.medium.com/max/512/1*inYwyq37FdvRPLRphTqwBA.gif", "alt", "js", 1, "d-block"], ["alt", "100001", 1, "data_text", 3, "routerLink"], ["id", "img", 2, "margin-left", "5%"], ["alt", "100002", 1, "data_text", 3, "routerLink"], ["id", "titles"], [1, "100000", 2, "width", "28%", "margin-left", "0.75%"], [1, "100001", 2, "width", "28%", "margin-left", "5.5%"], [1, "100002", 2, "width", "28%", "margin-left", "6.5%"], [2, "width", "97%", "height", "3px", "margin-bottom", "6%", "margin-top", "1%", "background", "#2e2e2e"], ["id", "series-movies", 1, "series-movies", "display", "romance"], ["alt", "100003", 1, "data_text", 3, "routerLink"], ["alt", "100004", 1, "data_text", 3, "routerLink"], ["alt", "100005", 1, "data_text", 3, "routerLink"], [1, "100003", 2, "width", "28%", "margin-left", "0.75%"], [1, "100004", 2, "width", "28%", "margin-left", "5.5%"], [1, "100005", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "action"], ["alt", "100006", 1, "data_text", 3, "routerLink"], ["alt", "100007", 1, "data_text", 3, "routerLink"], ["alt", "100008", 1, "data_text", 3, "routerLink"], [1, "100006", 2, "width", "28%", "margin-left", "0.75%"], [1, "100007", 2, "width", "28%", "margin-left", "5.5%"], [1, "100008", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "novel"], ["alt", "100009", 1, "data_text", 3, "routerLink"], ["alt", "100010", 1, "data_text", 3, "routerLink"], ["alt", "100011", 1, "data_text", 3, "routerLink"], [1, "100009", 2, "width", "28%", "margin-left", "0.75%"], [1, "100010", 2, "width", "28%", "margin-left", "5.5%"], [1, "100011", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "drama"], ["alt", "100012", 1, "data_text", 3, "routerLink"], ["alt", "100013", 1, "data_text", 3, "routerLink"], ["alt", "100014", 1, "data_text", 3, "routerLink"], [1, "100012", 2, "width", "28%", "margin-left", "0.75%"], [1, "100013", 2, "width", "28%", "margin-left", "5.5%"], [1, "100014", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "comedy"], ["alt", "100015", 1, "data_text", 3, "routerLink"], ["alt", "100016", 1, "data_text", 3, "routerLink"], ["alt", "100017", 1, "data_text", 3, "routerLink"], [1, "100015", 2, "width", "28%", "margin-left", "0.75%"], [1, "100016", 2, "width", "28%", "margin-left", "5.5%"], [1, "100017", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "war"], ["alt", "100018", 1, "data_text", 3, "routerLink"], ["alt", "100019", 1, "data_text", 3, "routerLink"], ["alt", "100020", 1, "data_text", 3, "routerLink"], [1, "100018", 2, "width", "28%", "margin-left", "0.75%"], [1, "1000119", 2, "width", "28%", "margin-left", "5.5%"], [1, "100020", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "horror"], ["alt", "100021", 1, "data_text", 3, "routerLink"], ["alt", "100022", 1, "data_text", 3, "routerLink"], ["alt", "100023", 1, "data_text", 3, "routerLink"], [1, "100021", 2, "width", "28%", "margin-left", "0.75%"], [1, "100022", 2, "width", "28%", "margin-left", "5.5%"], [1, "100023", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "sci-fi"], ["alt", "100024", 1, "data_text", 3, "routerLink"], ["alt", "100025", 1, "data_text", 3, "routerLink"], ["alt", "100026", 1, "data_text", 3, "routerLink"], [1, "100024", 2, "width", "28%", "margin-left", "0.75%"], [1, "100025", 2, "width", "28%", "margin-left", "5.5%"], [1, "100026", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "musical"], ["alt", "100027", 1, "data_text", 3, "routerLink"], ["alt", "100028", 1, "data_text", 3, "routerLink"], ["alt", "100029", 1, "data_text", 3, "routerLink"], [1, "100027", 2, "width", "28%", "margin-left", "0.75%"], [1, "100028", 2, "width", "28%", "margin-left", "5.5%"], [1, "100029", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "historical"], ["alt", "100030", 1, "data_text", 3, "routerLink"], ["alt", "100031", 1, "data_text", 3, "routerLink"], ["alt", "100032", 1, "data_text", 3, "routerLink"], [1, "100030", 2, "width", "28%", "margin-left", "0.75%"], [1, "100031", 2, "width", "28%", "margin-left", "5.5%"], [1, "100032", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "series-movies", "display", "kids"], ["alt", "100033", 1, "data_text", 3, "routerLink"], ["alt", "100034", 1, "data_text", 3, "routerLink"], ["alt", "100035", 1, "data_text", 3, "routerLink"], [1, "100033", 2, "width", "28%", "margin-left", "0.75%"], [1, "100034", 2, "width", "28%", "margin-left", "5.5%"], [1, "100035", 2, "width", "28%", "margin-left", "6.5%"], ["id", "series-movies", 1, "more_content"], [1, "carousel-item", "active", "item-reality-show"], [1, "carousel-item", "item-romance"], [1, "carousel-item", "item-action"], [1, "carousel-item", "item-novel"], [1, "carousel-item", "item-drama"], [1, "carousel-item", "item-comedy"], [1, "carousel-item", "item-war"], [1, "carousel-item", "item-horror"], [1, "carousel-item", "item-sci-fi"], [1, "carousel-item", "item-musical"], [1, "carousel-item", "item-historical"], [1, "carousel-item", "item-kids"], [2, "margin-bottom", "25%"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-yellow.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-white.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-white.png"]], template: function ShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "FEATS ACONTECENDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "REALITY SHOWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "ROMANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "A\u00C7\u00C3O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "NOVELAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "DRAMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "COM\u00C9DIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "GUERRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "TERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "SCI-FI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "MUSICAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "p", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "HIST\u00D3RICOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "CRIAN\u00C7AS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "p", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "p", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "p", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "OUTROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](336, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](348, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](378, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](390, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](396, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](400, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](428, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](450, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](453, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](456, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](458, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](459, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "p", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](471, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](480, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](486, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](488, "p", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "p", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](490, "p", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](491, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](494, "img", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](496, "img", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](498, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](500, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](75, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](76, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](78, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](79, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](80, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](81, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](82, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](83, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](84, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](85, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](86, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](87, _c15));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](88, _c16));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](89, _c17));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](90, _c18));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](91, _c19));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](92, _c20));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](93, _c21));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](94, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](95, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](96, _c24));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](97, _c25));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](98, _c26));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](99, _c27));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](100, _c28));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](101, _c29));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](102, _c30));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](103, _c31));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](104, _c32));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](105, _c33));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](106, _c34));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](107, _c35));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](108, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](109, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](110, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](111, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](112, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](113, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](114, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](115, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](116, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](117, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](118, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](119, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](120, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](121, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](122, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](123, _c15));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](124, _c16));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](125, _c17));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](126, _c18));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](127, _c19));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](128, _c20));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](129, _c21));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](130, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](131, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](132, _c24));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](133, _c25));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](134, _c26));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](135, _c27));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](136, _c28));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](137, _c29));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](138, _c30));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](139, _c31));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](140, _c32));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](141, _c33));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](142, _c34));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](143, _c35));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3dzL3Nob3dzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-shows',
                templateUrl: './shows.component.html',
                styleUrls: ['./shows.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/sports/sports.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/sports/sports.component.ts ***!
  \**************************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/content-info-sports", "200000"]; };
const _c1 = function () { return ["/content-info-sports", "200001"]; };
const _c2 = function () { return ["/content-info-sports", "200002"]; };
const _c3 = function () { return ["/content-info-sports", "200003"]; };
const _c4 = function () { return ["/content-info-sports", "200004"]; };
const _c5 = function () { return ["/content-info-sports", "200005"]; };
const _c6 = function () { return ["/content-info-sports", "200006"]; };
const _c7 = function () { return ["/content-info-sports", "200007"]; };
const _c8 = function () { return ["/content-info-sports", "200008"]; };
const _c9 = function () { return ["/content-info-sports", "200009"]; };
const _c10 = function () { return ["/content-info-sports", "200010"]; };
const _c11 = function () { return ["/content-info-sports", "200011"]; };
const _c12 = function () { return ["/content-info-sports", "200012"]; };
const _c13 = function () { return ["/content-info-sports", "200013"]; };
const _c14 = function () { return ["/content-info-sports", "200014"]; };
const _c15 = function () { return ["/content-info-sports", "200015"]; };
const _c16 = function () { return ["/content-info-sports", "200016"]; };
const _c17 = function () { return ["/content-info-sports", "200017"]; };
const _c18 = function () { return ["/content-info-sports", "200018"]; };
const _c19 = function () { return ["/content-info-sports", "200019"]; };
const _c20 = function () { return ["/content-info-sports", "200020"]; };
const _c21 = function () { return ["/content-info-sports", "200021"]; };
const _c22 = function () { return ["/content-info-sports", "200022"]; };
const _c23 = function () { return ["/content-info-sports", "200023"]; };
const _c24 = function () { return ["/content-info-sports", "200024"]; };
const _c25 = function () { return ["/content-info-sports", "200025"]; };
const _c26 = function () { return ["/content-info-sports", "200026"]; };
const _c27 = function () { return ["/content-info-sports", "200027"]; };
const _c28 = function () { return ["/content-info-sports", "200028"]; };
const _c29 = function () { return ["/content-info-sports", "200029"]; };
const _c30 = function () { return ["/content-info-sports", "200030"]; };
const _c31 = function () { return ["/content-info-sports", "200031"]; };
const _c32 = function () { return ["/content-info-sports", "200032"]; };
const _c33 = function () { return ["/content-info-sports", "200033"]; };
const _c34 = function () { return ["/content-info-sports", "200034"]; };
const _c35 = function () { return ["/content-info-sports", "200035"]; };
const _c36 = function () { return ["/content-info", "200000"]; };
const _c37 = function () { return ["/content-info", "200001"]; };
const _c38 = function () { return ["/content-info", "200002"]; };
const _c39 = function () { return ["/content-info", "200003"]; };
const _c40 = function () { return ["/content-info", "200004"]; };
const _c41 = function () { return ["/content-info", "200005"]; };
const _c42 = function () { return ["/content-info", "200006"]; };
const _c43 = function () { return ["/content-info", "200007"]; };
const _c44 = function () { return ["/content-info", "200008"]; };
const _c45 = function () { return ["/content-info", "200009"]; };
const _c46 = function () { return ["/content-info", "200010"]; };
const _c47 = function () { return ["/content-info", "200011"]; };
const _c48 = function () { return ["/content-info", "200012"]; };
const _c49 = function () { return ["/content-info", "200013"]; };
const _c50 = function () { return ["/content-info", "200014"]; };
const _c51 = function () { return ["/content-info", "200015"]; };
const _c52 = function () { return ["/content-info", "200016"]; };
const _c53 = function () { return ["/content-info", "200017"]; };
const _c54 = function () { return ["/content-info", "200018"]; };
const _c55 = function () { return ["/content-info", "200019"]; };
const _c56 = function () { return ["/content-info", "200020"]; };
const _c57 = function () { return ["/content-info", "200021"]; };
const _c58 = function () { return ["/content-info", "200022"]; };
const _c59 = function () { return ["/content-info", "200023"]; };
const _c60 = function () { return ["/content-info", "200024"]; };
const _c61 = function () { return ["/content-info", "200025"]; };
const _c62 = function () { return ["/content-info", "200026"]; };
const _c63 = function () { return ["/content-info", "200027"]; };
const _c64 = function () { return ["/content-info", "200028"]; };
const _c65 = function () { return ["/content-info", "200029"]; };
const _c66 = function () { return ["/content-info", "200030"]; };
const _c67 = function () { return ["/content-info", "200031"]; };
const _c68 = function () { return ["/content-info", "200032"]; };
const _c69 = function () { return ["/content-info", "200033"]; };
const _c70 = function () { return ["/content-info", "200034"]; };
const _c71 = function () { return ["/content-info", "200035"]; };
class SportsComponent {
    constructor() { }
    ngOnInit() {
        let hasUser = false;
        let json_final_data;
        const items = jquery__WEBPACK_IMPORTED_MODULE_0__('#main-div').find('.carousel-item:visible');
        jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input').keyup(() => {
            let search_input = jquery__WEBPACK_IMPORTED_MODULE_0__('#search-input')[0].value;
            if (search_input != '') {
                for (let i = 0; i < items.length - 1; i++) {
                    let hasResult = false;
                    const items_title = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('p');
                    let items_more = document.getElementsByClassName('more_content');
                    for (let i = 0; i < items_more.length; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items_more[i]).css('display', 'none');
                    }
                    for (let j = 0; j < items_title.length; j++) {
                        if (((items_title[j].innerText).toLowerCase()).includes(search_input)) {
                            hasResult = true;
                        }
                    }
                    if (!hasResult) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.no-display').css('display', 'none');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().toggleClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__('.display').css('display', 'block');
                    }
                }
            }
            else {
                if (hasUser) {
                    let items_more = document.getElementsByClassName('more_content');
                    for (let i = 0; i < items_more.length; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items_more[i]).css('display', 'block');
                    }
                    for (let i = 0; i < items.length - 1; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).removeClass("no-display");
                        jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).parent().parent().parent().parent().removeClass("no-display");
                    }
                    let content_divs = document.getElementsByClassName('sports-section');
                    let sportCategories = json_final_data.users[current_user_email.split('@')[0]].sportCategories;
                    for (let i = 0; i < content_divs.length; i++) {
                        if (!(sportCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).attr('class').split(' ')[1]))) {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).css('display', 'none');
                        }
                    }
                    let carousel_items = jquery__WEBPACK_IMPORTED_MODULE_0__('.more_content').find('.carousel-inner').find('.carousel-item');
                    for (let i = 0; i < carousel_items.length; i++) {
                        if (sportCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).attr('class').split('item-')[1])) {
                            jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).remove();
                        }
                    }
                }
            }
        });
        var api_url = 'https://globo-feat.herokuapp.com/?get_sports_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let json_data = jsondata.users;
                let items = document.getElementsByClassName('data_text');
                for (let i = 0; i < items.length; i++) {
                    const div_content_alt = jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).attr('alt');
                    if (div_content_alt) {
                        let content_title = json_data[div_content_alt].title;
                        jquery__WEBPACK_IMPORTED_MODULE_0__(document.getElementsByClassName(div_content_alt)).text(content_title);
                        let content_img = json_data[div_content_alt].imageURL;
                        if (content_img != '')
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', content_img);
                        else
                            jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).find('div').find('img').attr('src', 'https://i.pinimg.com/474x/bd/1c/a5/bd1ca559f0b2238bd67f316eb8a907ff.jpg');
                    }
                }
            }
        });
        let elem = document.getElementById('circle');
        elem.style.width = String(screen.width * 0.02) + 'px';
        elem.style.height = String(screen.width * 0.02) + 'px';
        var current_user_email = undefined;
        var cookies = document.cookie.split(';');
        cookies.forEach(element => {
            if (element.split('=')[0] == 'username') {
                current_user_email = element.split('=')[1];
            }
        });
        if (current_user_email != undefined) {
            hasUser = true;
            let navbar_without_login = document.getElementById('navbar-without-login');
            navbar_without_login.style.display = 'none';
            let navbar = document.getElementById('navbar');
            navbar.style.display = 'block';
            var request = new XMLHttpRequest();
            request.open('GET', '../../../assets/users_data/users.json');
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var json_data = request.response;
                var users_data = Object(json_data)['users'];
                var users_keys = Object.keys(users_data);
                var username = undefined;
                var user_picture = undefined;
                users_keys.forEach(element => {
                    if ((users_data[element].email) == current_user_email) {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                if (jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                                    //have accessed before
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#username').text(element);
                                    jquery__WEBPACK_IMPORTED_MODULE_0__("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                                    jquery__WEBPACK_IMPORTED_MODULE_0__('#navbar').css('display', 'block');
                                    let content_divs = document.getElementsByClassName('sports-section');
                                    let sportCategories = jsondata.users[current_user_email.split('@')[0]].sportCategories;
                                    json_final_data = jsondata;
                                    for (let i = 0; i < content_divs.length; i++) {
                                        if (!(sportCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).attr('class').split(' ')[2]))) {
                                            jquery__WEBPACK_IMPORTED_MODULE_0__(content_divs[i]).css('display', 'none');
                                        }
                                    }
                                    let carousel_items = jquery__WEBPACK_IMPORTED_MODULE_0__('.more_content').find('.carousel-inner').find('.carousel-item');
                                    for (let i = 0; i < carousel_items.length; i++) {
                                        if (sportCategories.includes(jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).attr('class').split('item-')[1])) {
                                            jquery__WEBPACK_IMPORTED_MODULE_0__(carousel_items[i]).remove();
                                        }
                                    }
                                }
                                else {
                                    window.location.pathname = '/step-01';
                                }
                            }
                        });
                    }
                });
            };
        }
        else {
            let items = document.getElementsByClassName('more_content');
            for (let i = 0; i < items.length; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(items[i]).css('display', 'none');
            }
        }
    }
}
SportsComponent.ɵfac = function SportsComponent_Factory(t) { return new (t || SportsComponent)(); };
SportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SportsComponent, selectors: [["app-sports"]], decls: 501, vars: 144, consts: [["id", "navbar-without-login"], ["id", "profile-picture"], ["href", "/authentication"], ["src", "../../../assets/no-user.png"], ["id", "sports-home"], ["id", "navbar", 2, "display", "none"], ["id", "username"], ["id", "user_picture"], ["id", "feats-happening"], ["id", "circle"], [1, "container"], ["data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, ""], ["id", "img"], ["src", "https://estaticos.globoradio.globo.com/fotos/2020/01/bf0e2861-8ee4-4205-9090-896f4a03f321.png.300x300_q90_box-0%2C0%2C1080%2C1080_detail_upscale.jpg", "alt", "js", 1, "d-block"], ["id", "img2", 2, "margin-right", "4%"], ["src", "../../../assets/users_data/user_pics/bruna_maba.jpg", "alt", "js", 1, "d-block"], ["src", "https://static1.purebreak.com.br/articles/8/92/36/8/@/355420--harry-potter-veja-como-esta-o-elenco-239x239-2.jpg", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/isabela_costa.jpg", "alt", "js", 1, "d-block"], ["src", "https://images-na.ssl-images-amazon.com/images/I/81fqKipDfHL._AC_SY355_.jpg", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/leo_dutra.jpg", "alt", "js", 1, "d-block"], ["src", "https://miro.medium.com/max/1024/1*qqiIDkn-sB4LF-Vfd9rRnw.png", "alt", "js", 1, "d-block"], ["src", "../../../assets/users_data/user_pics/nanda_rodrigues.jpg", "alt", "js", 1, "d-block"], ["src", "data:image/jpeg;base64,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", "alt", "js", 1, "d-block"], ["id", "img2"], ["src", "../../../assets/users_data/user_pics/ros_padilha.jpg", "alt", "js", 1, "d-block"], ["type", "text", "id", "search-input", "placeholder", "Pesquisar conte\u00FAdo"], ["id", "main-div"], ["id", "sports-section", 1, "sports-section", "display", "soccer"], ["id", "carouselContainer", "data-ride", "carousel", 1, "carousel", "slide"], ["alt", "200000", 1, "data_text", 3, "routerLink"], ["src", "https://miro.medium.com/max/512/1*inYwyq37FdvRPLRphTqwBA.gif", "alt", "js", 1, "d-block"], ["alt", "200001", 1, "data_text", 3, "routerLink"], ["id", "img", 2, "margin-left", "5%"], ["alt", "200002", 1, "data_text", 3, "routerLink"], ["id", "titles"], [1, "200000", 2, "width", "28%", "margin-left", "0.75%"], [1, "200001", 2, "width", "28%", "margin-left", "5.5%"], [1, "200002", 2, "width", "28%", "margin-left", "6.5%"], [2, "width", "97%", "height", "3px", "margin-bottom", "6%", "margin-top", "1%", "background", "#2e2e2e"], ["id", "sports-section", 1, "sports-section", "display", "premiere"], ["alt", "200003", 1, "data_text", 3, "routerLink"], ["alt", "200004", 1, "data_text", 3, "routerLink"], ["alt", "200005", 1, "data_text", 3, "routerLink"], [1, "200003", 2, "width", "28%", "margin-left", "0.75%"], [1, "200004", 2, "width", "28%", "margin-left", "5.5%"], [1, "200005", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "olympics"], ["alt", "200006", 1, "data_text", 3, "routerLink"], ["alt", "200007", 1, "data_text", 3, "routerLink"], ["alt", "200008", 1, "data_text", 3, "routerLink"], [1, "200006", 2, "width", "28%", "margin-left", "0.75%"], [1, "200007", 2, "width", "28%", "margin-left", "5.5%"], [1, "200008", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "formula-1"], ["alt", "200009", 1, "data_text", 3, "routerLink"], ["alt", "200010", 1, "data_text", 3, "routerLink"], ["alt", "200011", 1, "data_text", 3, "routerLink"], [1, "200009", 2, "width", "28%", "margin-left", "0.75%"], [1, "200010", 2, "width", "28%", "margin-left", "5.5%"], [1, "200011", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "ufc"], ["alt", "200012", 1, "data_text", 3, "routerLink"], ["alt", "200013", 1, "data_text", 3, "routerLink"], ["alt", "200014", 1, "data_text", 3, "routerLink"], [1, "200012", 2, "width", "28%", "margin-left", "0.75%"], [1, "200013", 2, "width", "28%", "margin-left", "5.5%"], [1, "200014", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "volei"], ["alt", "200015", 1, "data_text", 3, "routerLink"], ["alt", "200016", 1, "data_text", 3, "routerLink"], ["alt", "200017", 1, "data_text", 3, "routerLink"], [1, "200015", 2, "width", "28%", "margin-left", "0.75%"], [1, "200016", 2, "width", "28%", "margin-left", "5.5%"], [1, "200017", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "basketball"], ["alt", "200018", 1, "data_text", 3, "routerLink"], ["alt", "200019", 1, "data_text", 3, "routerLink"], ["alt", "200020", 1, "data_text", 3, "routerLink"], [1, "200018", 2, "width", "28%", "margin-left", "0.75%"], [1, "200019", 2, "width", "28%", "margin-left", "5.5%"], [1, "200020", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "skate"], ["alt", "200021", 1, "data_text", 3, "routerLink"], ["alt", "200022", 1, "data_text", 3, "routerLink"], ["alt", "200023", 1, "data_text", 3, "routerLink"], [1, "200021", 2, "width", "28%", "margin-left", "0.75%"], [1, "200022", 2, "width", "28%", "margin-left", "5.5%"], [1, "200023", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "gymnastics"], ["alt", "200024", 1, "data_text", 3, "routerLink"], ["alt", "200025", 1, "data_text", 3, "routerLink"], ["alt", "200026", 1, "data_text", 3, "routerLink"], [1, "200024", 2, "width", "28%", "margin-left", "0.75%"], [1, "200025", 2, "width", "28%", "margin-left", "5.5%"], [1, "200026", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "swimming"], ["alt", "200027", 1, "data_text", 3, "routerLink"], ["alt", "200028", 1, "data_text", 3, "routerLink"], ["alt", "200029", 1, "data_text", 3, "routerLink"], [1, "200027", 2, "width", "28%", "margin-left", "0.75%"], [1, "200028", 2, "width", "28%", "margin-left", "5.5%"], [1, "200029", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "judo"], ["alt", "200030", 1, "data_text", 3, "routerLink"], ["alt", "200031", 1, "data_text", 3, "routerLink"], ["alt", "200032", 1, "data_text", 3, "routerLink"], [1, "200030", 2, "width", "28%", "margin-left", "0.75%"], [1, "200031", 2, "width", "28%", "margin-left", "5.5%"], [1, "200032", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "sports-section", "display", "tenis"], ["alt", "200033", 1, "data_text", 3, "routerLink"], ["alt", "200034", 1, "data_text", 3, "routerLink"], ["alt", "200035", 1, "data_text", 3, "routerLink"], [1, "200033", 2, "width", "28%", "margin-left", "0.75%"], [1, "200034", 2, "width", "28%", "margin-left", "5.5%"], [1, "200035", 2, "width", "28%", "margin-left", "6.5%"], ["id", "sports-section", 1, "more_content"], ["id", "carouselContainer", "data-ride", "carousel", "data-interval", "3500", 1, "carousel", "slide"], [1, "carousel-item", "active", "item-soccer"], [1, "carousel-item", "item-premiere"], [1, "carousel-item", "item-olympics"], [1, "carousel-item", "item-formula-1"], [1, "carousel-item", "item-ufc"], [1, "carousel-item", "item-volei"], [1, "carousel-item", "item-basketball"], [1, "2000119", 2, "width", "28%", "margin-left", "5.5%"], [1, "carousel-item", "item-skate"], [1, "carousel-item", "item-gymnastics"], [1, "carousel-item", "item-swimming"], [1, "carousel-item", "item-judo"], [1, "carousel-item", "item-tenis"], [2, "margin-bottom", "25%"], ["id", "footer"], ["href", "/news"], ["id", "news", "src", "../../../assets/news-white.png"], ["href", "/shows"], ["id", "shows", "src", "../../../assets/popcorn-white.png"], ["href", "/sports"], ["id", "sports", "src", "../../../assets/sports-yellow.png"], ["href", "/feat-home"], ["id", "play", "src", "../../../assets/player-white.png"]], template: function SportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "FEATS ACONTECENDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "FUTEBOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "PREMIERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "OLIMP\u00CDADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "F\u00D3RMULA 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "UFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "V\u00D4LEI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "BASQUETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "SKATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "GIN\u00C1STICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "NATA\u00C7\u00C3O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "JUD\u00D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "p", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "T\u00CANIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "p", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "p", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "p", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "OUTROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](336, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](348, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](378, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](390, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](396, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](400, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](428, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](450, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](453, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](456, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](458, "p", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](459, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](471, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "p", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](480, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](486, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](488, "p", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "p", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](490, "p", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](491, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](494, "img", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](496, "img", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](498, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](500, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](75, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](76, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](78, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](79, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](80, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](81, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](82, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](83, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](84, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](85, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](86, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](87, _c15));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](88, _c16));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](89, _c17));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](90, _c18));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](91, _c19));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](92, _c20));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](93, _c21));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](94, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](95, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](96, _c24));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](97, _c25));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](98, _c26));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](99, _c27));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](100, _c28));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](101, _c29));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](102, _c30));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](103, _c31));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](104, _c32));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](105, _c33));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](106, _c34));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](107, _c35));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](108, _c36));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](109, _c37));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](110, _c38));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](111, _c39));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](112, _c40));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](113, _c41));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](114, _c42));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](115, _c43));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](116, _c44));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](117, _c45));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](118, _c46));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](119, _c47));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](120, _c48));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](121, _c49));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](122, _c50));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](123, _c51));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](124, _c52));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](125, _c53));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](126, _c54));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](127, _c55));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](128, _c56));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](129, _c57));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](130, _c58));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](131, _c59));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](132, _c60));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](133, _c61));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](134, _c62));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](135, _c63));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](136, _c64));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](137, _c65));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](138, _c66));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](139, _c67));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](140, _c68));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](141, _c69));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](142, _c70));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](143, _c71));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nwb3J0cy9zcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sports',
                templateUrl: './sports.component.html',
                styleUrls: ['./sports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/waiting-room/waiting-room.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/waiting-room/waiting-room.component.ts ***!
  \**************************************************************/
/*! exports provided: WaitingRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingRoomComponent", function() { return WaitingRoomComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class WaitingRoomComponent {
    constructor() { }
    ngOnInit() {
        function checkIfFeatHasStarted() {
            var feat_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1];
            let wanted_content_id = feat_id.substring(0, feat_id.length - 1);
            wanted_content_id = wanted_content_id.substring(0, wanted_content_id.length - 1);
            let wanted_feat_id = parseInt(feat_id.substr(feat_id.length - 2));
            var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
            jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function (jsondata) {
                    let wanted_content_state = jsondata.feats[wanted_content_id].hasStarted[0][wanted_feat_id];
                    if (wanted_content_state == 'true') {
                        var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
                        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                            type: 'GET',
                            crossDomain: true,
                            dataType: 'json',
                            url: api_url,
                            success: function (jsondata) {
                                var current_user_email = undefined;
                                var cookies = document.cookie.split(';');
                                cookies.forEach(element => {
                                    if (element.split('=')[0] == 'username') {
                                        current_user_email = element.split('=')[1];
                                    }
                                });
                                let user_name;
                                if (current_user_email != undefined) {
                                    user_name = (current_user_email.split('@')[0].split('_')[0]);
                                }
                                else {
                                    user_name = 'anonimo';
                                }
                                let feat_url = 'https://globofeat-api.herokuapp.com/r/' + feat_id + '/' + user_name + '/' + jsondata.feats[wanted_content_id].youtube_link;
                                window.location.replace(feat_url);
                            }
                        });
                    }
                }
            });
        }
        checkIfFeatHasStarted();
    }
}
WaitingRoomComponent.ɵfac = function WaitingRoomComponent_Factory(t) { return new (t || WaitingRoomComponent)(); };
WaitingRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WaitingRoomComponent, selectors: [["app-waiting-room"]], decls: 14, vars: 0, consts: [["id", "waiting-room"], [2, "margin-left", "10%", "margin-top", "30%", "margin-bottom", "2%"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active", 2, "margin-bottom", "-5%"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1", 2, "margin-bottom", "-5%"], [1, "carousel-inner", 2, "width", "80%", "margin-left", "10%"], [1, "carousel-item", "active"], ["src", "../../../assets/add_02.png", "alt", "Second slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/add_03.png", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "../../../assets/waiting_host.png", 2, "width", "81%", "margin-left", "10%", "margin-top", "15%"]], template: function WaitingRoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Esse feat \u00E9 um oferecimento...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhaXRpbmctcm9vbS93YWl0aW5nLXJvb20uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WaitingRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-waiting-room',
                templateUrl: './waiting-room.component.html',
                styleUrls: ['./waiting-room.component.scss']
            }]
    }], function () { return []; }, null); })();
function checkIfFeatHasStarted() {
    try {
        var feat_id = jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/')[jquery__WEBPACK_IMPORTED_MODULE_0__(location)[0].href.split('/').length - 1];
        let wanted_content_id = feat_id.substring(0, feat_id.length - 1);
        wanted_content_id = wanted_content_id.substring(0, wanted_content_id.length - 1);
        let wanted_feat_id = parseInt(feat_id.substr(feat_id.length - 2));
        var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
        jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function (jsondata) {
                let wanted_content_state = jsondata.feats[wanted_content_id].hasStarted[0][wanted_feat_id];
                if (wanted_content_state == 'true') {
                    var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
                    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
                        type: 'GET',
                        crossDomain: true,
                        dataType: 'json',
                        url: api_url,
                        success: function (jsondata) {
                            var current_user_email = undefined;
                            var cookies = document.cookie.split(';');
                            cookies.forEach(element => {
                                if (element.split('=')[0] == 'username') {
                                    current_user_email = element.split('=')[1];
                                }
                            });
                            let user_name;
                            if (current_user_email != undefined) {
                                user_name = (current_user_email.split('@')[0].split('_')[0]);
                            }
                            else {
                                user_name = 'anonimo';
                            }
                            let feat_url = 'https://globofeat-api.herokuapp.com/r/' + feat_id + '/' + user_name + '/' + jsondata.feats[wanted_content_id].youtube_link;
                            window.location.replace(feat_url);
                        }
                    });
                }
            }
        });
    }
    catch (e) { }
}
var intervalID = setInterval(checkIfFeatHasStarted, 5000);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
var screen_proportion = screen.height / screen.width;
if (screen_proportion < 1.7) {
    jquery__WEBPACK_IMPORTED_MODULE_0__("#not-mobile").css("display", "block");
}
else {
    jquery__WEBPACK_IMPORTED_MODULE_0__("main-div").css("display", "block");
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Roosevelt/Documents/Codes/Push/GloboFeat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map