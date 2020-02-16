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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout='column' fxFlexFill>\r\n    <!-- <app-header></app-header> -->\r\n\r\n    <div fxFlex>\r\n        <router-outlet></router-outlet>\r\n\r\n    </div>\r\n\r\n    <app-footer>\r\n\r\n    </app-footer>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-title>My Story</mat-card-title>\r\n    <img src='/assets/images/ece+ethan.PNG' alt='Ece and Ethan in Istanbul'>\r\n    <mat-card-content>\r\n        Hi, my name is Ethan Towsend. I'm originally from Maine, and am currently living in San Diego California. My\r\n        story starts out a lot like everyone else's. I had a fairly normal childhood.\r\n        I grew up in a small town, no more than 2,000 people, where everyone knew everyone and there really wasn't much\r\n        going on.\r\n    </mat-card-content>\r\n    <br />\r\n    <mat-card-content>\r\n        Fast forward to when I turned 18 and was getting ready to graduate highschool,\r\n        I had no clue what I wanted to do with my life (like most kids that age). I did know one thing, I knew that I wasn't ready to go to college. However, I did end up attending for one semester, after which, I knew for sure that I wasn't ready for university. So, I dropped out (which as it turns out was one of my best decisions) and joined the Military. During my time in the Military my family had moved out to San Diego California, so naturally once I had finished my time in the military I moved out there to be with them.   \r\n    </mat-card-content>\r\n    <br />\r\n    <mat-card-content>\r\n        By this time I had aged some more and gained a little perspective on life, and decided I should enroll in college again. This ended up being the single best decision I have ever made, not because it would eventually lead to me getting my degree, but because in the process of going back to school I met the woman who would eventually become my wife. So, in reference to the previous paragraph, dropping out when I knew I wasn't ready for university, I believe, put me on the path to my wife and I meeting.\r\n    </mat-card-content>\r\n    <br/>\r\n    <mat-card-content>\r\n        After three 2.5 years of dating, my wife and I finally got married. We just celebrated our one year aniversarry. We've traveled the world togeteher, and been through a lot. She is the one who really pushed me to get my degree, and here I am at the ripe old age of 27 finally getting it. So, that is my story (up until this point).\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card flex *ngIf='messageSaved === false'>\r\n    <h2>Please Fill out the Form</h2>\r\n    <hr>\r\n    <form #contactform [formGroup]='contactForm' (ngSubmit)='onSubmit(contactForm.value); contactform.reset()'>\r\n        <mat-form-field>\r\n            <input required matInput type='text' placeholder='Name' formControlName='name'>\r\n            <small class='error' *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\">\r\n                *Please enter your name\r\n            </small>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input required matInput type='text' placeholder='Email' formControlName='email'>\r\n            <small class='error' *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\">*Please\r\n                enter your email</small>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea required matInput type='text' placeholder='Message (20 characters minimum)' formControlName='message'></textarea>\r\n            <small class='error' *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\">*Please\r\n                leave a message</small>\r\n        </mat-form-field>\r\n\r\n        <button [disabled]='!contactForm.valid' mat-raised-button color='primary' type='submit'>Submit</button>\r\n        <button mat-raised-button mat-dialog-close>Cancel</button>\r\n    </form>\r\n    <br/>\r\n    <hr>\r\n    <h3>Alternatively, you can contact me via email or social media.</h3>\r\n    <p>My email is <strong>ethan.everett.townsend@gmail (dot) com</strong></p>\r\n    \r\n</mat-card>\r\n\r\n<mat-card *ngIf='messageSaved === true'>\r\n    <mat-icon class='done-icon'>check_circle_outline</mat-icon><h2>Thank you. Your message has been received!</h2>\r\n    <button mat-raised-button color='primary' mat-dialog-close>Close</button>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/devops-presentations/devops-presentations.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/devops-presentations/devops-presentations.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='presentation-container'>\r\n    <h1>Presentations</h1>\r\n    <div class='presentation-card' *ngFor='let presentation of presentations'>\r\n        <mat-card>\r\n            <mat-video title='{{ presentation.title }}' [autoplay]='false' [preload]='true'\r\n                src='{{ presentation.src }}'>\r\n            </mat-video>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<mat-card *ngIf='noData === true'>\r\n    <h2>{{ error }}</h2>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<footer>\r\n        <p>Copyright text 2019 by Ethan Townsend</p>    \r\n        <button mat-button (click)='openDialog()'>\r\n                Admin Login\r\n        </button>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"social-icons\">\r\n    <a href=\"https://www.facebook.com/ethan.townsend.5\" target='blank' class=\"facebook\"><i\r\n            class=\"fa fa-facebook\"></i></a>\r\n    <a href=\" https://github.com/ethantown93\" target='blank' class=\"github\"><i class=\"fa fa-github\"></i></a>\r\n    <a href=\" https://www.instagram.com/ethantownsend93/\" target='blank' class=\"instagram\"><i\r\n            class=\"fa fa-instagram\"></i></a>\r\n    <a href=\"https://www.linkedin.com/in/ethan-townsend-15320a10b/\" target='blank' class=\"linkedin\"><i\r\n            class=\"fa fa-linkedin\"></i></a>\r\n</div>\r\n\r\n<div class=\"video-cover\"></div>\r\n\r\n<div class=\"video-mobile\">\r\n    <img src=\"./assets/images/mobile-video.PNG\" alt=\"mobile background\">\r\n</div>\r\n\r\n<div class=\"personal-info\">\r\n    <h1>\r\n        Husband, Full-Stack Developer with a preference for Front-End Development.\r\n    </h1>\r\n    <p>I'm someone who's passionate about web technologies, <br />\r\n        writing the best code that I can, <br /> and creating dynamic\r\n        and responsive web applications.</p>\r\n</div>\r\n\r\n<div class='container' data-aos='fade-up'>\r\n    <div class='personal'>\r\n        <app-main-nav></app-main-nav>\r\n        <video autoplay [muted]=\"true\" loop id=\"myVideo\">\r\n            <source src=\"./assets/videos/video.mp4\" type=\"video/mp4\">\r\n        </video>\r\n    </div>\r\n    \r\n    <div id='first-div'>\r\n        <div class='first-div-content' data-aos='fade-up'>\r\n            <h2>\r\n                Hi, I'm Ethan. It's a Pleasure to meet you.\r\n            </h2>\r\n            <p>I'm a full stack developer. My favorite tech stack is the MEAN stack. If you're interested in working\r\n                with me, let's get in touch and get to work.\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class='main'>\r\n        <mat-card class='main-card' *ngIf='error === false'>\r\n            <h1>My Recent Projects</h1>\r\n            <hr>\r\n            <ul class='main-1'>\r\n                <li class='home-container' *ngFor='let project of projects' data-aos='fade-up'>\r\n                    <div class='project-title'><strong>{{ project.title }}</strong></div>\r\n                    <div class='home-container-card'>\r\n                        <div class='card-back'>\r\n                            <ul>\r\n                                <li class='card-back-li'>Description: {{ project.description }}</li>\r\n                                <li class='card-back-li'>Technologies Used: {{ project.technologiesUsed }}</li>\r\n                                <li class='card-back-li'>My Role: {{ project.myRole }}</li>\r\n                            </ul>\r\n                            <a href={{project.gitHub}} target='blank'><button mat-raised-button> Go to\r\n                                    GitHub</button></a>\r\n                            <a href={{project.link}} target='blank'><button mat-raised-button\r\n                                    *ngIf='project.link !== project.gitHub'>Go to Website</button></a>\r\n                        </div>\r\n                        <div class='card-front'>\r\n                            <img src='{{project.src}}' alt='{{project.alt}}'>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </mat-card>\r\n        <mat-card *ngIf='error === true'>\r\n            <h2>{{ errorMessage }}</h2>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"skillsets-container\">\r\n        <mat-card class='skillsets-card'>\r\n            <h1>Technologies I Use</h1>\r\n            <hr>\r\n            <ul class='skillsets-ul' >\r\n                <li data-aos='fade-right' class='skillsets-li' *ngFor='let langauge of languagesData'><img\r\n                        src='{{ langauge.src }}' alt='{{langauge.alt}}'></li>\r\n            </ul>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='login-container' fxLayoutAlign='center center'>\r\n    <mat-card>\r\n        <mat-card-title>\r\n            Admin Login\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n            <form [formGroup]='loginForm' #login='ngForm' (ngSubmit)='onLogin(loginForm.value); loginForm.reset()'>\r\n                <mat-form-field class='email'>\r\n                    <input type='text' matInput formControlName='email' placeholder='Email'>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class='password'>\r\n                    <input type='password' matInput formControlName='password' placeholder=\"Password\">\r\n                </mat-form-field>\r\n\r\n                <mat-card-actions>\r\n                    <button mat-raised-button [disabled]='!login.valid' type='submit'>\r\n                        Log In.\r\n                    </button>\r\n                    <button mat-raised-button color='accent' mat-dialog-close>Cancel</button>\r\n                </mat-card-actions>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar class='side-toolbar'>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <ul>\r\n        <li>\r\n          <a routerLink='/resume'><button mat-button>My Resume</button></a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a routerLink='/messages'><button mat-button>My Messages</button></a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a (click)='onLogout()'><button mat-button>Logout</button></a>\r\n        </li>\r\n      </ul>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class='primary-toolbar'>\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span class='name' routerLink='/'>Ethan E. Townsend</span>\r\n      <span class='nav-link'></span>\r\n      <ul>\r\n        <li>\r\n          <button (click)='openDialog()' mat-raised-button>Contact</button>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/resume'>My Resume</a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a routerLink='/messages'>My Messages</a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a (click)='onLogout()'>Logout</a>\r\n        </li>\r\n      </ul>\r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\r\n    <mat-card>\r\n        <h2>My Messages</h2>\r\n        <table>\r\n            <tr>\r\n                <th>\r\n                    Name\r\n                </th>\r\n                <th>\r\n                    Email\r\n                </th>\r\n                <th>\r\n                    Message\r\n                </th>\r\n                <th>\r\n                    Date\r\n                </th>\r\n            </tr>\r\n            <tr *ngFor='let message of messages'>\r\n                <td>\r\n                    {{message.name}}\r\n                </td>\r\n                <td>\r\n                    {{message.email}}\r\n                </td>\r\n                <td>\r\n                    {{message.message}}\r\n                </td>\r\n                <td>\r\n                    {{message.date | date}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='error-container'>\r\n    <mat-card>\r\n     \r\n            <button (click)='backHome()' mat-raised-button>Home</button>\r\n               \r\n    </mat-card>\r\n</div>>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='resume'>\r\n    <mat-card>\r\n        \r\n        <button mat-raised-button routerLink='/'>Back to Home</button>\r\n\r\n        <embed src='./assets/files/Resume.pdf' type='application/pdf'/>\r\n    </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/devops-presentations/devops-presentations.component */ "./src/app/components/devops-presentations/devops-presentations.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");












const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
        redirectTo: ''
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
    },
    {
        path: 'devops-presentations',
        component: _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_6__["DevopsPresentationsComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'resume',
        component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"]
    },
    {
        path: 'messages',
        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
        canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuardService"]]
    },
    {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .container {\r\n    background-image: url(\"/assets/images/so-white.png\");\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zby13aGl0ZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59ICovIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm2015/mat-video.js");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/devops-presentations/devops-presentations.component */ "./src/app/components/devops-presentations/devops-presentations.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_28__["MainNavComponent"],
            _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_24__["DevopsPresentationsComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_26__["ResumeComponent"],
            _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_33__["PageNotFoundComponent"],
        ],
        entryComponents: [_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            mat_video__WEBPACK_IMPORTED_MODULE_22__["MatVideoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"]
        ],
        providers: [
            _guards_role_guard__WEBPACK_IMPORTED_MODULE_23__["RoleGuardService"],
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 60%;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\nmat-card-title {\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n\r\nmat-card-content {\r\n    text-align: justify;\r\n    font-size: 16px;\r\n}\r\n\r\nimg {\r\n    float: right;\r\n    width: 25%;\r\n    height: 30%;\r\n    margin-left: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media (max-width: 768px){\r\n    img {\r\n        width: 95%;\r\n        height: 30%;\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AboutComponent = class AboutComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    min-width: 50%;\r\n    max-width: 100%;\r\n}\r\n\r\nmat-card {\r\n    text-align: center;\r\n    font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\nh2 {\r\n    margin: 5px;\r\n}\r\n\r\nhr {\r\n    margin-bottom: 8px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    display: inline-block;\r\n    width: 25%;\r\n    margin: 5px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 60% !important;\r\n  }\r\n\r\n.small {\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    height: 25px;\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    background-color: rgba(255, 0, 0, 0.76);\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n}\r\n\r\n.right {\r\n    display: inline-block;\r\n}\r\n\r\n.left {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n\r\nmat-icon {\r\n    vertical-align: middle;\r\n}\r\n\r\n.done-icon {\r\n    color: green\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    button {\r\n        padding: 0px ;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyx5QkFBeUI7RUFDM0I7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOzs7RUFHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnNtYWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZG9uZS1pY29uIHtcclxuICAgIGNvbG9yOiBncmVlblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ContactComponent = class ContactComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.messageSaved = false;
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20)]]
        });
    }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/devops-presentations/devops-presentations.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/devops-presentations/devops-presentations.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  @media (max-width: 900px) {\r\n\r\n    .presentation-card {\r\n        margin: 10px;\r\n        width: 90% !important;\r\n        height: 90% !important;\r\n    }\r\n\r\n  }\r\n\r\n\r\n.presentation-container {\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n    width: 80%;\r\n    margin: auto;  \r\n    margin-top: 50px;  \r\n}\r\n\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.presentation-card {\r\n    margin: 10px;\r\n    width: 30%;\r\n    height: 30%;\r\n    float: left;\r\n}\r\n\r\n\r\n.presentation-card:hover {\r\n    box-shadow: 1px 1px 3px 3px #0575E6;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXZvcHMtcHJlc2VudGF0aW9ucy9kZXZvcHMtcHJlc2VudGF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTs7SUFFRTtRQUNJLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsc0JBQXNCO0lBQzFCOztFQUVGOzs7QUFHRjtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rldm9wcy1wcmVzZW50YXRpb25zL2Rldm9wcy1wcmVzZW50YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgICAucHJlc2VudGF0aW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbi5wcmVzZW50YXRpb24tY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87ICBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICBcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByZXNlbnRhdGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLnByZXNlbnRhdGlvbi1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCAjMDU3NUU2O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/devops-presentations/devops-presentations.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/devops-presentations/devops-presentations.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DevopsPresentationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevopsPresentationsComponent", function() { return DevopsPresentationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DevopsPresentationsComponent = class DevopsPresentationsComponent {
    constructor(http) {
        this.http = http;
        this.presentations = [];
        this.error = 'No data found';
        this.noData = false;
    }
    ngOnInit() {
        // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/p/video-presentations').subscribe( res => {
        //   if(!res){
        //     console.log('no data');
        //   } else if (res) {
        //     this.presentations = res;
        //   } else {
        //     console.log('error');
        //     this.noData = true;
        //   }
        // })
    }
};
DevopsPresentationsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DevopsPresentationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devops-presentations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./devops-presentations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/devops-presentations/devops-presentations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./devops-presentations.component.css */ "./src/app/components/devops-presentations/devops-presentations.component.css")).default]
    })
], DevopsPresentationsComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\r\n    background:#000000;\r\n    height: 80px;\r\n    margin-top: auto;\r\n    position: relative;\r\n    color: white;\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\nfooter p { \r\n    padding-top: 15px;\r\n}\r\n\r\nbutton {\r\n    margin: auto !important;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDojMDAwMDAwO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIHAgeyBcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let FooterComponent = class FooterComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    font-family: 'Work Sans', sans-serif;\r\n\r\n    position: relative;\r\n\r\n}\r\n\r\n.personal {\r\n    position: relative;\r\n    top: 0;\r\n    height: 100vh;\r\n    text-align: center;\r\n    -webkit-animation: slideRight .01s forwards;\r\n}\r\n\r\n.personal-info {\r\n    width: 40%;\r\n    height: 22%;\r\n    color: white;\r\n    z-index: 1;\r\n    position: absolute;\r\n    font-family: 'Work Sans', sans-serif;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -20%;\r\n    margin-top: -12%;\r\n    text-align: center;\r\n}\r\n\r\n.personal-info:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), color-stop(90%, rgba(76, 68, 68, 0.65)));\r\n    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(76, 68, 68, 0.65) 90%);\r\n    width: 100%;\r\n    height: 16em;\r\n    border-bottom-right-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n\r\n#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-height: 100%;\r\n    max-width: 100%;\r\n    background-size: auto ;\r\n    z-index: -2;\r\n}\r\n\r\n.video-cover {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.65);\r\n    z-index: -1\r\n}\r\n\r\n.video-mobile {\r\n    height: 100vh;\r\n    display: none;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\np {\r\n    margin-bottom: 50px;\r\n    font-size: 18px;\r\n}\r\n\r\n#first-div{\r\n    background: #000000;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: -webkit-gradient(linear, left bottom, left top, from(#434343), to(#000000));\r\n    background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    width: 100%;\r\n    height: 350px;\r\n    position: absolute;\r\n}\r\n\r\n.first-div-content {\r\n    color: white;\r\n    text-align: center;\r\n    margin:auto;\r\n    width: 50%;\r\n    line-height: 30px;\r\n}\r\n\r\n.first-div-content h2{\r\n    margin-top: 90px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.skillsets-container {\r\n    background-attachment: fixed;\r\n    padding-top: 10px;\r\n    padding-bottom: 60px;\r\n    background-image: url('/assets/images/coding.jpeg');\r\n\r\n}\r\n\r\n.skillsets-card {\r\n    background-color: white;\r\n    margin: auto;\r\n    max-height: 100%;\r\n    max-width: 60%;\r\n    margin-top: 100px;\r\n    z-index: 1;\r\n    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.507);\r\n}\r\n\r\nh3 {\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.main {\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 290px;\r\n    margin-bottom: 100px;\r\n    font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.main-card {\r\n    margin: auto;\r\n    background-color: white;\r\n    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.507);\r\n    max-width: 60%;\r\n}\r\n\r\n.main-1 li {\r\n    display: inline-block;\r\n}\r\n\r\n.home-container {\r\n    position: relative;\r\n    height: 189px;\r\n    width: 350px;\r\n    margin: 15px !important;\r\n    background: #434343; \r\n    border-radius: 8px;\r\n    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.507);\r\n}\r\n\r\n.project-title {\r\n    background-color: white;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    border-top-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n}\r\n\r\n.home-container-card {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition: all 0.75s ease;\r\n    transition: all 0.75s ease\r\n}\r\n\r\n.home-container-card:hover {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.card-front {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-bottom-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n\r\n.card-front > img {\r\n    border-bottom-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n\r\n.card-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    border-bottom-left-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n    color: white;\r\n}\r\n\r\n.card-back-li {\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n    font-size: 16px\r\n}\r\n\r\n.card-back > a {\r\n    margin: 2px;\r\n}\r\n\r\n.skillsets-card li {\r\n    display: inline-block;\r\n    margin: 25px;\r\n}\r\n\r\n.skillsets-card h1 {\r\n    text-align: center;\r\n}\r\n\r\n.skillsets-ul {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.skillsets-li > img {\r\n    max-height: 250px;\r\n}\r\n\r\n.social-icons {\r\n    position: fixed;\r\n    top: 45%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n  }\r\n\r\n.social-icons a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 10px;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n    color: white;\r\n    font-size: 15px;\r\n    margin: 2px;\r\n    border-radius: 6px;\r\n\r\n  }\r\n\r\n.social-icons a:hover {\r\n    background-color: #000;\r\n  }\r\n\r\n.facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n\r\n.github {\r\n      background: #6cc644;\r\n      color: white\r\n  }\r\n\r\n.linkedin {\r\n    background: #007bb5;\r\n    color: white;\r\n  }\r\n\r\n.instagram {\r\n    background: #E4405F;\r\n    color: white;\r\n  }\r\n\r\n@-webkit-keyframes slideRight {\r\n    0% {\r\n      -webkit-transform: translateX(-1500px);\r\n              transform: translateX(-1500px);\r\n    }\r\n    100% {\r\n      -webkit-transform: translateX(0);\r\n              transform: translateX(0);\r\n    }\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n    .personal h1{\r\n        font-size: 23px;\r\n        padding: 10px;\r\n    }\r\n\r\n    \r\n    .personal-info {\r\n        width: 90%;\r\n        left: 5%;\r\n        top: 30%;\r\n        margin: auto;\r\n    }\r\n\r\n    .personal-info:after {\r\n        pointer-events: none;\r\n        background-image: none;\r\n    }\r\n\r\n    #myVideo {\r\n        height: 100vh;\r\n        max-width: 100%;\r\n        -o-object-fit: cover !important;\r\n           object-fit: cover !important;\r\n    }\r\n\r\n    .video-cover {\r\n        background-color: rgba(0, 0, 0, 0.89);\r\n    }\r\n\r\n    button {\r\n        line-height: 0px ;\r\n        padding-left: 0px ;\r\n    }\r\n\r\n    .home-container {\r\n        width: 200px;\r\n        height: 112px;\r\n    }\r\n\r\n    .home-contaienr li {\r\n        width: 200px;\r\n        height: 112px;\r\n    }\r\n\r\n    .home-container-card {\r\n        max-width: 200px;\r\n        max-height: 112px;\r\n    }\r\n\r\n    .card-back {\r\n        max-width: 200px;\r\n        max-height: 112px;\r\n    }\r\n\r\n    .card-back-li {\r\n        font-size: 10px;\r\n        margin-top: 3px;\r\n        margin-bottom: 2px;\r\n    }\r\n\r\n    .card-back button {\r\n        height: 20%;\r\n        width: 25%;\r\n        font-size: 7px;\r\n    }\r\n\r\n    .card-front {\r\n        max-width: 200px;\r\n        max-height: 98px;\r\n    }\r\n\r\n    .card-front > img {\r\n        width: 200px;\r\n        height: 98px;\r\n    }\r\n\r\n\r\n    .social-icons {\r\n        display: none;\r\n    }\r\n\r\n    .first-div-content {\r\n        color: white;\r\n        text-align: center;\r\n        margin: auto;\r\n        width: 90%;\r\n        line-height: 30px;\r\n    }\r\n\r\n      .first-div-content > p {\r\n        font-size: 18px;\r\n        line-height: 1;\r\n        width: 100%;\r\n        margin-bottom: 50px;\r\n      }\r\n\r\n      .skillsets-card {\r\n          max-height: 100%;\r\n          width: 90%;\r\n      }\r\n\r\n      .project-title {\r\n          font-size: 12px;\r\n      }\r\n\r\n      .skillsets-li > img {\r\n        max-height: 150px;\r\n    }\r\n\r\n    .main-card {\r\n        max-width: 70%;\r\n    }\r\n\r\n  }\r\n\r\n@media only screen \r\n    and (min-device-width : 768px) \r\n    and (max-device-width : 1024px) {\r\n\r\n\r\n    #myVideo {\r\n        height: 100vh;\r\n        max-width: 100%;\r\n        -o-object-fit: cover !important;\r\n           object-fit: cover !important;\r\n    }\r\n\r\n    .personal-info:after {\r\n        pointer-events: none;\r\n        background-image: none;\r\n    }\r\n\r\n    button {\r\n        line-height: 0px ;\r\n        padding: 0px ;\r\n    }\r\n\r\n    .home-container {\r\n        height: 221px;\r\n        width: 450px;\r\n    }\r\n\r\n    .home-container-card .home-container .card-back .card-front .home-container-li {\r\n        height: 200px;\r\n        width: 450px;\r\n    }\r\n\r\n\r\n    .card-back-li {\r\n        font-size: 20px;\r\n        margin-top: 3px;\r\n        margin-bottom: 2px;\r\n    }\r\n\r\n    .card-back button {\r\n        height: 20%;\r\n        width: 25%;\r\n        font-size: 15px;\r\n    }\r\n\r\n    .card-front > img {\r\n        height: 200px;\r\n        width: 450px;\r\n    }\r\n\r\n\r\n    .social-icons {\r\n        position: fixed;\r\n        top: 65%;\r\n        -webkit-transform: translateY(-50%);\r\n        transform: translateY(-50%);\r\n        z-index: 2;\r\n    }\r\n\r\n    .social-icons a {\r\n        display: block;\r\n        text-align: center;\r\n        padding: 8px;\r\n        -webkit-transition: all 0.5s ease;\r\n        transition: all 0.5s ease;\r\n        color: white;\r\n        font-size: 40px;\r\n        margin: 2px;\r\n        border-radius: 6px;\r\n    \r\n      }\r\n\r\n    .first-div-content {\r\n        color: white;\r\n        text-align: center;\r\n        margin: auto;\r\n        width: 90%;\r\n        line-height: 30px;\r\n    }\r\n\r\n      .first-div-content > p {\r\n        font-size: 22px;\r\n        line-height: 1;\r\n        width: 100%;\r\n        margin-bottom: 50px;\r\n      }\r\n\r\n      .skillsets-card {\r\n          max-height: 100%;\r\n          width: 90%;\r\n      }\r\n\r\n      .project-title {\r\n          font-size: 18px;\r\n      }\r\n\r\n      .skillsets-li > img {\r\n        max-height: 200px;\r\n    }\r\n\r\n    .main-card {\r\n        max-width: 70%;\r\n    }\r\n\r\n    .skillsets-card {\r\n        max-height: 100%;\r\n    }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQzs7SUFFcEMsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsd0lBQWdHO0lBQWhHLGdHQUFnRztJQUNoRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDWSwrQkFBK0I7SUFDL0YsdUZBQXFEO0lBQXJELHFEQUFxRCxFQUFFLHFFQUFxRTtJQUM1SCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbURBQW1EOztBQUV2RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtDQUF5QjtJQUF6QjtBQUNKOztBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixtQ0FBbUM7SUFFbkMsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCOztFQUVwQjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7TUFDSSxtQkFBbUI7TUFDbkI7RUFDSjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztBQUVBO0lBQ0U7TUFDRSxzQ0FBOEI7Y0FBOUIsOEJBQThCO0lBQ2hDO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0VBQ0Y7O0FBRUE7OztJQUdFO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7OztJQUdBO1FBQ0ksVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBQ1IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLCtCQUE0QjtXQUE1Qiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxxQ0FBcUM7SUFDekM7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7OztJQUdBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7O01BRUU7UUFDRSxlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxtQkFBbUI7TUFDckI7O01BRUE7VUFDSSxnQkFBZ0I7VUFDaEIsVUFBVTtNQUNkOztNQUVBO1VBQ0ksZUFBZTtNQUNuQjs7TUFFQTtRQUNFLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0VBRUY7O0FBRUE7Ozs7O0lBS0U7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLCtCQUE0QjtXQUE1Qiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCOzs7SUFHQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7OztJQUdBO1FBQ0ksZUFBZTtRQUNmLFFBQVE7UUFDUixtQ0FBbUM7UUFFbkMsMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlDQUF5QjtRQUF6Qix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCOztNQUVwQjs7SUFFRjtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7O01BRUU7UUFDRSxlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxtQkFBbUI7TUFDckI7O01BRUE7VUFDSSxnQkFBZ0I7VUFDaEIsVUFBVTtNQUNkOztNQUVBO1VBQ0ksZUFBZTtNQUNuQjs7TUFFQTtRQUNFLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLnBlcnNvbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGVSaWdodCAuMDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4ucGVyc29uYWwtaW5mbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAyMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSg3NiwgNjgsIDY4LCAwLjY1KSA5MCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2ZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4jbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gO1xyXG4gICAgei1pbmRleDogLTI7XHJcbn1cclxuXHJcbi52aWRlby1jb3ZlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgei1pbmRleDogLTFcclxufVxyXG5cclxuLnZpZGVvLW1vYmlsZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuI2ZpcnN0LWRpdntcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICM0MzQzNDMsICMwMDAwMDApOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM0MzQzNDMsICMwMDAwMDApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5maXJzdC1kaXYtY29udGVudCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmZpcnN0LWRpdi1jb250ZW50IGgye1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5za2lsbHNldHMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb2RpbmcuanBlZycpO1xyXG5cclxufVxyXG5cclxuLnNraWxsc2V0cy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41MDcpO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbi1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41MDcpO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5tYWluLTEgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxODlweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbjogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzQzNDM0MzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUwNyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXItY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZVxyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXItY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmNhcmQtZnJvbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1mcm9udCA+IGltZyB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrLWxpIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG59XHJcblxyXG4uY2FyZC1iYWNrID4gYSB7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnNraWxsc2V0cy1jYXJkIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMjVweDtcclxufVxyXG5cclxuLnNraWxsc2V0cy1jYXJkIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNraWxsc2V0cy11bCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbHNldHMtbGkgPiBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1pY29ucyBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtaWNvbnMgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAuZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmdpdGh1YiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2Y2M2NDQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH1cclxuXHJcbiAgLmxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnN0YWdyYW0ge1xyXG4gICAgYmFja2dyb3VuZDogI0U0NDA1RjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuXHJcbiAgICAucGVyc29uYWwgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAucGVyc29uYWwtaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcnNvbmFsLWluZm86YWZ0ZXIge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI215VmlkZW8ge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWNvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDBweCA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtY29udGFpZW5yIGxpIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZS1jb250YWluZXItY2FyZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1iYWNrIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDExMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJhY2stbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJhY2sgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWZyb250IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDk4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZnJvbnQgPiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0LWRpdi1jb250ZW50IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgLmZpcnN0LWRpdi1jb250ZW50ID4gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5za2lsbHNldHMtY2FyZCB7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByb2plY3QtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2tpbGxzZXRzLWxpID4gaW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jYXJkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgXHJcbiAgICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIHtcclxuXHJcblxyXG4gICAgI215VmlkZW8ge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcnNvbmFsLWluZm86YWZ0ZXIge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMHB4IDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjFweDtcclxuICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtY29udGFpbmVyLWNhcmQgLmhvbWUtY29udGFpbmVyIC5jYXJkLWJhY2sgLmNhcmQtZnJvbnQgLmhvbWUtY29udGFpbmVyLWxpIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmNhcmQtYmFjay1saSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYmFjayBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWZyb250ID4gaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjUlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1pY29ucyBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuICAgIC5maXJzdC1kaXYtY29udGVudCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5maXJzdC1kaXYtY29udGVudCA+IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2tpbGxzZXRzLWNhcmQge1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9qZWN0LXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNraWxsc2V0cy1saSA+IGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY2FyZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsc2V0cy1jYXJkIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_update_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/update-nav.service */ "./src/app/services/update-nav.service.ts");





let HomeComponent = class HomeComponent {
    constructor(http, nav) {
        this.http = http;
        this.nav = nav;
        this.projects = [];
        this.errorMessage = 'There was an error loading this data.';
        this.error = false;
        this.languagesData = [];
        this.isLoading = false;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
        this.nav.getProj().subscribe(res => {
            if (res) {
                console.log(res);
                this.projects = res;
            }
        });
        this.nav.getLang().subscribe(res => {
            if (res) {
                console.log(res);
                this.languagesData = res;
            }
        });
        // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/languages').subscribe( res => {
        //   if(res){
        //     this.languagesData = res;
        //     console.log(this.languagesData)
        //   } else {
        //     console.log('no entries found');
        //   }
        // })
        // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/p/projects').subscribe( res => {
        //   if(res){
        //     this.projects = res;
        //     console.log(this.projects)
        //   }else if(!res){
        //     this.error = true;
        //   } else {
        //     console.log('an unknown error has occured')
        //   }
        // })
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_update_nav_service__WEBPACK_IMPORTED_MODULE_4__["UpdateNavService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\r\nmin-width: 100%;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG5taW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_update_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/update-nav.service */ "./src/app/services/update-nav.service.ts");







let LoginComponent = class LoginComponent {
    constructor(router, dialog, http, fb, nav) {
        this.router = router;
        this.dialog = dialog;
        this.http = http;
        this.fb = fb;
        this.nav = nav;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onLogin(value) {
        this.nav.login(value)
            .then(res => {
            this.loginData = res;
            if (res) {
                localStorage.setItem('token', this.loginData.user.uid);
                localStorage.setItem('userId', this.loginData.user.uid);
                localStorage.setItem('role', 'admin');
                this.dialog.closeAll();
                this.nav.updateNav(this.checkAdmin);
                alert('Successfully logged in.');
            }
        }).catch(err => {
            console.log(err);
        });
    }
    // onLogin(value){
    //   this.http.post('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/login/login', value).subscribe( res => {
    //     this.loginData = res;
    //     if(res){
    //       localStorage.setItem('token', this.loginData.token);
    //       localStorage.setItem('userId', this.loginData.userId);
    //       localStorage.setItem('role', this.loginData.role)
    //       this.dialog.closeAll()
    //       this.updateNav.updateNav(this.checkAdmin);
    //       alert('Successfully logged in.')
    //     } else {
    //       alert("login unsuccessful.")
    //     }
    //   })
    // }
    checkAdmin() {
        let adminCheck = localStorage.getItem('role');
        if (adminCheck === 'admin') {
            return;
        }
        else {
            alert('user is not an admin');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_update_nav_service__WEBPACK_IMPORTED_MODULE_6__["UpdateNavService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container {\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\n.sidenav-container {\r\n  height: 70px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top:0;\r\n  padding-bottom: -50px;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  margin: auto\r\n}\r\n\r\n.mat-drawer-container {\r\n  background-color: rgba(0, 0, 0, 0) !important;\r\n  margin: auto;\r\n}\r\n\r\n.primary-toolbar {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.primary-toolbar ul {\r\n  margin-right: 15%;\r\n}\r\n\r\n.primary-toolbar li {\r\n  display: inline-block;\r\n  font-size: 16px;}\r\n\r\n.primary-toolbar li a:hover, .primary-toolbar li a:active {\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.primary-toolbar button {\r\n  margin-right: 5px;\r\n\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: rgba(0, 0, 0, 0.787);\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.primary-toolbar a {\r\n  display: inline-block;\r\n  margin: 0 10px;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.side-toolbar {\r\n  color: white;\r\n}\r\n\r\nmat-nav-list li {\r\n  display: block;\r\n}\r\n\r\n.name {\r\n  color: white;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-left: 320px;\r\n}\r\n\r\n@media (min-width: 768px){\r\n  .sidenav {\r\n    display: none;\r\n  }\r\n\r\n  .primary-toolbar > button {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 768px){\r\n  .primary-toolbar a {\r\n    display: none;\r\n  }\r\n\r\n  .primary-toolbar {\r\n    padding: 0;\r\n  }\r\n\r\n  .name {\r\n    margin-left: 5px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  mat-icon {\r\n    color: white;\r\n  }\r\n}\r\n\r\n@media only screen \r\n    and (min-device-width : 768px) \r\n    and (max-device-width : 1024px) {\r\n\r\n      .name {\r\n        margin-left: 50px;\r\n      }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsS0FBSztFQUNMLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlLENBQUM7O0FBRWxCO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTs7OztNQUlNO1FBQ0UsaUJBQWlCO01BQ25COztFQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBwYWRkaW5nLWJvdHRvbTogLTUwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvXHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciB1bCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbi5wcmltYXJ5LXRvb2xiYXIgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7fVxyXG5cclxuLnByaW1hcnktdG9vbGJhciBsaSBhOmhvdmVyLCAucHJpbWFyeS10b29sYmFyIGxpIGE6YWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5wcmltYXJ5LXRvb2xiYXIgYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc4Nyk7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtdG9vbGJhciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtbmF2LWxpc3QgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogMzIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5LXRvb2xiYXIgPiBidXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5wcmltYXJ5LXRvb2xiYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSBcclxuICAgIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkge1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_update_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/update-nav.service */ "./src/app/services/update-nav.service.ts");








let MainNavComponent = class MainNavComponent {
    constructor(updateNav, router, breakpointObserver, dialog) {
        this.updateNav = updateNav;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.isAdmin = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    ngOnInit() {
        this.updateNav.updateNavBar$.subscribe(method => {
            if (method) {
                method();
                this.isAdmin = true;
            }
            else {
                alert('no message received');
            }
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    onLogout() {
        localStorage.clear();
        this.isAdmin = false;
        this.router.navigate(['/']);
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _services_update_nav_service__WEBPACK_IMPORTED_MODULE_7__["UpdateNavService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")).default]
    })
], MainNavComponent);



/***/ }),

/***/ "./src/app/components/messages/messages.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/messages/messages.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-top: 50px;\r\n    text-align: center;\r\n}\r\n\r\nmat-card {\r\n    font-family: 'Work Sans', sans-serif;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin: 15px;\r\n}\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\nth {\r\n    margin: 10px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd\r\n}\r\n\r\ntd {\r\n    padding-right: 30px;\r\n    padding-left: 30px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkXHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MessagesComponent = class MessagesComponent {
    constructor(http) {
        this.http = http;
        this.messages = [];
    }
    ngOnInit() {
        // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/m/read-messages').subscribe( res => {
        //   if(res){
        //     console.log(res);
        //     this.messages = res;
        //   } else if(!res){
        //     alert('No messages were found at this time');
        //   } else {
        //     alert('Server error');
        //   }
        // })
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")).default]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-container {\r\n    width: 40%;\r\n    margin: auto;\r\n    height: 420px;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    font-family: 'Work Sans', sans-serif;\r\n\r\n}\r\n\r\nmat-card {\r\n    margin: auto;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: url('/assets/images/404.png');\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    background-repeat: no-repeat;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    width: 30%;\r\n    position: absolute;\r\n    top: 62%;\r\n    right: 34%;\r\n    background-color: #0575E6;\r\n    color: white;\r\n}\r\n\r\n/* .error-div {\r\n    background-color: rgba(5, 118, 230, 0.815);\r\n    width: 30%;\r\n    height: 30%;\r\n    padding: 20px;\r\n    margin: auto;\r\n    border-radius: 8px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0NBQStDO0lBQy9DLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzLzQwNC5wbmcnKTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYyJTtcclxuICAgIHJpZ2h0OiAzNCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU3NUU2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiAuZXJyb3ItZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgMTE4LCAyMzAsIDAuODE1KTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backHome() {
        this.router.navigate(['/']);
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/resume/resume.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/resume/resume.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".resume {\r\n    width: 60%;\r\n    min-height: 100%;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nmat-card {\r\n    height: 90vh;\r\n    width: 100%;\r\n}\r\n\r\nmat-card > embed {\r\n    height: 90%;\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCA+IGVtYmVkIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeComponent = class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.css */ "./src/app/components/resume/resume.component.css")).default]
    })
], ResumeComponent);



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RoleGuardService = class RoleGuardService {
    constructor(router, http, afAuth) {
        this.router = router;
        this.http = http;
        this.afAuth = afAuth;
    }
    canActivate() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(auth => {
            if (!auth) {
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
RoleGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], RoleGuardService);



/***/ }),

/***/ "./src/app/services/update-nav.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/update-nav.service.ts ***!
  \************************************************/
/*! exports provided: UpdateNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNavService", function() { return UpdateNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UpdateNavService = class UpdateNavService {
    constructor(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.updateNavBarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateNavBar$ = this.updateNavBarSource.asObservable();
        this.getProjects = this.afs.collection('myProjects');
        this.getLanguages = this.afs.collection('myLanguages');
    }
    updateNav(method) {
        this.updateNavBarSource.next(method);
    }
    // get projects from firestore
    getProj() {
        this.getProject = this.getProjects.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
            return result.map(results => {
                const data = results.payload.doc.data();
                data.id = results.payload;
                return data;
            });
        }));
        return this.getProject;
    }
    // get languages from firestore
    getLang() {
        this.getLanguage = this.getLanguages.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => {
            return result.map(results => {
                const data = results.payload.doc.data();
                data.id = results.payload;
                return data;
            });
        }));
        return this.getLanguage;
    }
    //  login method
    login(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then(userData => (resolve(userData), err => reject(err)));
        });
    }
};
UpdateNavService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
UpdateNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UpdateNavService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA31KELnDZudnZsTFjl5dicyTg7KNg5Kis",
        authDomain: "portfolio-24b28.firebaseapp.com",
        databaseURL: "https://portfolio-24b28.firebaseio.com",
        projectId: "portfolio-24b28",
        storageBucket: "portfolio-24b28.appspot.com",
        messagingSenderId: "247650449906",
        appId: "1:247650449906:web:11b65ef750625944d1936b",
        measurementId: "G-TLLHZJ7ETK"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\EETfi\new-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map