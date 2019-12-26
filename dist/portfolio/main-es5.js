function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout='column' fxFlexFill>\r\n    <app-main-nav></app-main-nav>\r\n    <!-- <app-header></app-header> -->\r\n\r\n    <div fxFlex>\r\n        <router-outlet></router-outlet>\r\n\r\n    </div>\r\n\r\n    <app-footer>\r\n\r\n    </app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-title>My Story</mat-card-title>\r\n    <img src='/assets/images/ece+ethan.PNG' alt='Ece and Ethan in Istanbul'>\r\n    <mat-card-content>\r\n        Hi, my name is Ethan Towsend. I'm originally from Maine, and am currently living in San Diego California. My\r\n        story starts out a lot like everyone else's. I had a fairly normal childhood.\r\n        I grew up in a small town, no more than 2,000 people, where everyone knew everyone and there really wasn't much\r\n        going on.\r\n    </mat-card-content>\r\n    <br />\r\n    <mat-card-content>\r\n        Fast forward to when I turned 18 and was getting ready to graduate highschool,\r\n        I had no clue what I wanted to do with my life (like most kids that age). I did know one thing, I knew that I wasn't ready to go to college. However, I did end up attending for one semester, after which, I knew for sure that I wasn't ready for university. So, I dropped out (which as it turns out was one of my best decisions) and joined the Military. During my time in the Military my family had moved out to San Diego California, so naturally once I had finished my time in the military I moved out there to be with them.   \r\n    </mat-card-content>\r\n    <br />\r\n    <mat-card-content>\r\n        By this time I had aged some more and gained a little perspective on life, and decided I should enroll in college again. This ended up being the single best decision I have ever made, not because it would eventually lead to me getting my degree, but because in the process of going back to school I met the woman who would eventually become my wife. So, in reference to the previous paragraph, dropping out when I knew I wasn't ready for university, I believe, put me on the path to my wife and I meeting.\r\n    </mat-card-content>\r\n    <br/>\r\n    <mat-card-content>\r\n        After three 2.5 years of dating, my wife and I finally got married. We just celebrated our one year aniversarry. We've traveled the world togeteher, and been through a lot. She is the one who really pushed me to get my degree, and here I am at the ripe old age of 27 finally getting it. So, that is my story (up until this point).\r\n    </mat-card-content>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card flex *ngIf='messageSaved === false'>\r\n    <h2>Please Fill out the Form</h2>\r\n    <hr>\r\n    <form #contactform [formGroup]='contactForm' (ngSubmit)='onSubmit(contactForm.value); contactform.reset()'>\r\n        <mat-form-field>\r\n            <input required matInput type='text' placeholder='Name' formControlName='name'>\r\n            <small class='error' *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\">\r\n                *Please enter your name\r\n            </small>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input required matInput type='text' placeholder='Email' formControlName='email'>\r\n            <small class='error' *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\">*Please\r\n                enter your email</small>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea required matInput type='text' placeholder='Message (20 characters minimum)' formControlName='message'></textarea>\r\n            <small class='error' *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\">*Please\r\n                leave a message</small>\r\n        </mat-form-field>\r\n\r\n        <button [disabled]='!contactForm.valid' mat-raised-button color='primary' type='submit'>Submit</button>\r\n        <button mat-raised-button color='accent' mat-dialog-close>Cancel</button>\r\n    </form>\r\n    <br/>\r\n    <hr>\r\n    <h3>Alternatively, you can contact me via email or social media.</h3>\r\n    <p>My email is <strong>EETfitness@gmail (dot) com</strong></p>\r\n    \r\n</mat-card>\r\n\r\n<mat-card *ngIf='messageSaved === true'>\r\n    <mat-icon class='done-icon'>check_circle_outline</mat-icon><h2>Thank you. Your message has been received!</h2>\r\n    <button mat-raised-button color='primary' mat-dialog-close>Close</button>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/devops-presentations/devops-presentations.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/devops-presentations/devops-presentations.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDevopsPresentationsDevopsPresentationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='presentation-container'>\r\n    <h1>Presentations</h1>\r\n    <div class='presentation-card' *ngFor='let presentation of presentations'>\r\n        <mat-card>\r\n            <mat-video title='{{ presentation.title }}' [autoplay]='false' [preload]='true'\r\n                src='{{ presentation.src }}'>\r\n            </mat-video>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<mat-card *ngIf='noData === true'>\r\n    <h2>{{ error }}</h2>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<footer>\r\n        <p>Copyright text 2019 by Ethan Townsend</p>    \r\n        <button mat-button (click)='openDialog()'>\r\n                Admin Login\r\n        </button>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"social-icons\">\r\n        <a href=\"https://www.facebook.com/ethan.townsend.5\" target='blank' class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n        <a href=\" https://github.com/ethantown93\" target='blank' class=\"github\"><i class=\"fa fa-github\"></i></a>\r\n        <a href=\" https://www.instagram.com/ethantownsend93/\" target='blank' class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\r\n        <a href=\"https://www.linkedin.com/in/ethan-townsend-15320a10b/\" target='blank' class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\r\n      </div>\r\n\r\n<div class='container' data-aos='fade-up'>\r\n    <div class='personal'>\r\n        <h1>\r\n            Husband, Full-Stack Developer, and Novice Designer\r\n        </h1>\r\n        <p>I'm someone who's passionate about web technologies, <br />\r\n            writing the best code that I can, <br /> and creating dynamic\r\n            and responsive web applications.</p>\r\n        <img class='mugshot' src='/assets/images/ethan.png' alt='ethans mugshot'>\r\n    </div>\r\n\r\n    <div id='first-div'>\r\n        <div class='first-div-content' data-aos='fade-up'>\r\n            <h2>\r\n                Hi, I'm Ethan. It's a Pleasure to meet you.\r\n            </h2>\r\n            <p>Since my journey to become a full stack developer started two years ago when I enrolled at Bellevue\r\n                University, I've learned A LOT.\r\n                I had no prior knowledge of what creating web applications meant, let alone how to code even a basic\r\n                HTML page. Since then, I've come a long way.\r\n                I've built complete end to end MEAN stack applications on my own, I've built MEAN stack applications as\r\n                part of a team, and I'm constantly learning more\r\n                every day.\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n        <mat-card class='skillsets-card'>\r\n            <h3>My Skillsets</h3>\r\n            <canvas id='barChart' data-aos='fade-up'></canvas>\r\n        </mat-card>\r\n\r\n</div>\r\n\r\n<hr>\r\n<div class='main' >\r\n    <mat-card class='main-card' *ngIf='error === false'>\r\n        <h2>My Recent Projects</h2>\r\n        <ul class='main-1'>\r\n            <li class='home-container' *ngFor='let project of projects' data-aos='fade-up'>\r\n                <div class='home-container-card'>\r\n                    <div class='card-back'>\r\n                        <p>{{ project.description }}</p>\r\n                        <a href={{project.gitHub}} target='blank'><button mat-raised-button > Go to\r\n                                GitHub</button></a>\r\n                        <a href={{project.link}} target='blank'><button mat-raised-button\r\n                                *ngIf='project.link !== project.gitHub'>Go to Website</button></a>\r\n                    </div>\r\n                    <div class='card-front'>\r\n                        <img src='{{project.src}}' alt='{{project.alt}}'>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </mat-card>\r\n    <mat-card *ngIf='error === true'>\r\n        <h2>{{ errorMessage }}</h2>\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='login-container' fxLayoutAlign='center center'>\r\n    <mat-card>\r\n        <mat-card-title>\r\n            Admin Login\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n            <form [formGroup]='loginForm' #login='ngForm' (ngSubmit)='onLogin(loginForm.value); loginForm.reset()'>\r\n                <mat-form-field class='email'>\r\n                    <input type='text' matInput formControlName='email' placeholder='Email'>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class='password'>\r\n                    <input type='password' matInput formControlName='password' placeholder=\"Password\">\r\n                </mat-form-field>\r\n\r\n                <mat-card-actions>\r\n                    <button mat-raised-button [disabled]='!login.valid' type='submit'>\r\n                        Log In.\r\n                    </button>\r\n                    <button mat-raised-button color='accent' mat-dialog-close>Cancel</button>\r\n                </mat-card-actions>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainNavMainNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar class='side-toolbar'>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <ul>\r\n        <li>\r\n          <a routerLink='/'><button mat-button>Home</button></a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/about'><button mat-button>About Me</button></a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/devops-presentations'><button mat-button>DevOps Presentations</button></a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/resume'><button mat-button>My Resume</button></a>\r\n        </li>\r\n      </ul>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class='primary-toolbar'>\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span class='name'>Ethan's Portfolio</span>\r\n      <span class='nav-link'></span>\r\n      <ul>\r\n        <li>\r\n          <button (click)='openDialog()' mat-raised-button>Contact</button>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/'>Home</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/about'>About Me</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/devops-presentations'>DevOps Presentations</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/resume'>My Resume</a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a routerLink='/messages'>My Messages</a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a (click)='onLogout()'>Logout</a>\r\n        </li>\r\n      </ul>\r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container'>\n    <mat-card>\n        <h2>My Messages</h2>\n        <table>\n            <tr>\n                <th>\n                    Name\n                </th>\n                <th>\n                    Email\n                </th>\n                <th>\n                    Message\n                </th>\n                <th>\n                    Date\n                </th>\n            </tr>\n            <tr *ngFor='let message of messages'>\n                <td>\n                    {{message.name}}\n                </td>\n                <td>\n                    {{message.email}}\n                </td>\n                <td>\n                    {{message.message}}\n                </td>\n                <td>\n                    {{message.date | date}}\n                </td>\n            </tr>\n        </table>\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResumeResumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='resume'>\n    <mat-card>\n        <embed src='./assets/files/Resume.pdf' type='application/pdf'/>\n    </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/devops-presentations/devops-presentations.component */
    "./src/app/components/devops-presentations/devops-presentations.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/resume/resume.component */
    "./src/app/components/resume/resume.component.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _guards_role_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards/role.guard */
    "./src/app/guards/role.guard.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
      redirectTo: ''
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'devops-presentations',
      component: _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_6__["DevopsPresentationsComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: 'resume',
      component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"]
    }, {
      path: 'messages',
      component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
      canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .container {\r\n    background-image: url(\"/assets/images/so-white.png\");\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zby13aGl0ZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var mat_video__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! mat-video */
    "./node_modules/mat-video/fesm2015/mat-video.js");
    /* harmony import */


    var _guards_role_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/role.guard */
    "./src/app/guards/role.guard.ts");
    /* harmony import */


    var _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/devops-presentations/devops-presentations.component */
    "./src/app/components/devops-presentations/devops-presentations.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/resume/resume.component */
    "./src/app/components/resume/resume.component.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/main-nav/main-nav.component */
    "./src/app/components/main-nav/main-nav.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__["MainNavComponent"], _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_20__["DevopsPresentationsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_22__["ResumeComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"]],
      entryComponents: [_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], mat_video__WEBPACK_IMPORTED_MODULE_18__["MatVideoModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]],
      providers: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_19__["RoleGuardService"], {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"],
        useClass: _angular_material__WEBPACK_IMPORTED_MODULE_4__["ShowOnDirtyErrorStateMatcher"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 60%;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\nmat-card-title {\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n\r\nmat-card-content {\r\n    text-align: justify;\r\n    font-size: 16px;\r\n}\r\n\r\nimg {\r\n    float: right;\r\n    width: 25%;\r\n    height: 30%;\r\n    margin-left: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media (max-width: 768px){\r\n    img {\r\n        width: 95%;\r\n        height: 30%;\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(http) {
        _classCallCheck(this, AboutComponent);

        this.http = http;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/contact/contact.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    min-width: 50%;\r\n    max-width: 100%;\r\n}\r\n\r\nmat-card {\r\n    text-align: center;\r\n    font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\nh2 {\r\n    margin: 5px;\r\n}\r\n\r\nhr {\r\n    margin-bottom: 8px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    display: inline-block;\r\n    width: 25%;\r\n    margin: 5px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    font-family: 'Work Sans', sans-serif;\r\n    max-width: 60% !important;\r\n  }\r\n\r\n.small {\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    height: 25px;\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    background-color: rgba(255, 0, 0, 0.76);\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n}\r\n\r\n.right {\r\n    display: inline-block;\r\n}\r\n\r\n.left {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n\r\nmat-icon {\r\n    vertical-align: middle;\r\n}\r\n\r\n.done-icon {\r\n    color: green\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    button {\r\n        padding: 0px ;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyx5QkFBeUI7RUFDM0I7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOzs7RUFHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnNtYWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZG9uZS1pY29uIHtcclxuICAgIGNvbG9yOiBncmVlblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(fb, http) {
        _classCallCheck(this, ContactComponent);

        this.fb = fb;
        this.http = http;
        this.messageSaved = false;
        this.contactForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20)]]
        });
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          var _this = this;

          this.http.post('/api/m/messages', value).subscribe(function (res) {
            if (!res) {
              console.log('no response from db');
            } else if (res) {
              console.log("message saved to database");
              _this.messageSaved = true;
            } else {
              console.log('an unknown error has occured.');
            }
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/components/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/devops-presentations/devops-presentations.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/devops-presentations/devops-presentations.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDevopsPresentationsDevopsPresentationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  @media (max-width: 900px) {\r\n\r\n    .presentation-card {\r\n        margin: 10px;\r\n        width: 90% !important;\r\n        height: 90% !important;\r\n    }\r\n\r\n  }\r\n\r\n\r\n.presentation-container {\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n    width: 80%;\r\n    margin: auto;  \r\n    margin-top: 50px;  \r\n}\r\n\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.presentation-card {\r\n    margin: 10px;\r\n    width: 30%;\r\n    height: 30%;\r\n    float: left;\r\n}\r\n\r\n\r\n.presentation-card:hover {\r\n    box-shadow: 1px 1px 3px 3px #0575E6;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXZvcHMtcHJlc2VudGF0aW9ucy9kZXZvcHMtcHJlc2VudGF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTs7SUFFRTtRQUNJLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsc0JBQXNCO0lBQzFCOztFQUVGOzs7QUFHRjtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rldm9wcy1wcmVzZW50YXRpb25zL2Rldm9wcy1wcmVzZW50YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgICAucHJlc2VudGF0aW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbi5wcmVzZW50YXRpb24tY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87ICBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICBcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByZXNlbnRhdGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLnByZXNlbnRhdGlvbi1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCAjMDU3NUU2O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/devops-presentations/devops-presentations.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/devops-presentations/devops-presentations.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DevopsPresentationsComponent */

  /***/
  function srcAppComponentsDevopsPresentationsDevopsPresentationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevopsPresentationsComponent", function () {
      return DevopsPresentationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DevopsPresentationsComponent =
    /*#__PURE__*/
    function () {
      function DevopsPresentationsComponent(http) {
        _classCallCheck(this, DevopsPresentationsComponent);

        this.http = http;
        this.presentations = [];
        this.error = 'No data found';
        this.noData = false;
      }

      _createClass(DevopsPresentationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.http.get('/api/p/video-presentations').subscribe(function (res) {
            if (!res) {
              console.log('no data');
            } else if (res) {
              _this2.presentations = res;
            } else {
              console.log('error');
              _this2.noData = true;
            }
          });
        }
      }]);

      return DevopsPresentationsComponent;
    }();

    DevopsPresentationsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DevopsPresentationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-devops-presentations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./devops-presentations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/devops-presentations/devops-presentations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./devops-presentations.component.css */
      "./src/app/components/devops-presentations/devops-presentations.component.css")).default]
    })], DevopsPresentationsComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\r\n    background: #0575E6;\r\n    height: 80px;\r\n    margin-top: auto;\r\n    position: relative;\r\n    color: white;\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\nfooter p { \r\n    padding-top: 15px;\r\n}\r\n\r\nbutton {\r\n    margin: auto !important;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1NzVFNjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciBwIHsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(dialog) {
        _classCallCheck(this, FooterComponent);

        this.dialog = dialog;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], {
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    font-family: 'Work Sans', sans-serif;\r\n    margin-bottom: 100px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.personal {\r\n    text-align: center;\r\n    -webkit-animation: slideRight .75s forwards;\r\n\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\np {\r\n    margin-bottom: 50px;\r\n    font-size: 18px;\r\n}\r\n\r\n.mugshot {\r\n    border-radius: 180%;\r\n    height: 250px;\r\n    width: 250px;\r\n    display: inline-block;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n#first-div{\r\n    background: #00F260;\r\n    background: linear-gradient(to right, #0575E6, #00F260);\r\n    width: 100%;\r\n    height: 350px;\r\n    position: absolute;\r\n}\r\n\r\n.first-div-content {\r\n    color: white;\r\n    text-align: center;\r\n    margin:auto;\r\n    width: 50%;\r\n    line-height: 30px;\r\n}\r\n\r\n.first-div-content h2{\r\n    margin-top: 30px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.skillsets-card {\r\n    background-color: white;\r\n    margin: auto;\r\n    max-height: 600px;\r\n    max-width: 60%;\r\n    margin-top: 290px;\r\n    z-index: 1;\r\n    box-shadow: 1px 1px 1px 1px rgba(158, 158, 158, 0.507);\r\n}\r\n\r\nh3 {\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.main {\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nmat-card {\r\n    margin: auto;\r\n    background-color: white;\r\n    box-shadow: 1px 1px 3px 3px rgba(158, 158, 158, 0.507);\r\n    max-width: 60%;\r\n}\r\n\r\n.main-1 li {\r\n    display: inline-block;\r\n    margin: auto\r\n}\r\n\r\n.home-container {\r\n    position: relative;\r\n    height: 171px;\r\n    width: 350px;\r\n    margin: 15px !important;\r\n    background: #00F260;\r\n    background: linear-gradient(to bottom, #0575E6, #00F260);\r\n    border-radius: 8px;\r\n    box-shadow: 2px 2px 6px 6px rgba(158, 158, 158, 0.507);\r\n\r\n}\r\n\r\n.home-container-card {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform-style: preserve-3d;\r\n    transition: all 0.75s ease\r\n}\r\n\r\n.home-container-card:hover {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.card-front {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-radius: 8px;\r\n}\r\n\r\n.card-front > img {\r\n    border-radius: 8px;\r\n}\r\n\r\n.card-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform: rotateY(180deg);\r\n    border-radius: 8px;\r\n    color: white;\r\n}\r\n\r\n.card-back > p {\r\n    margin: 9px;\r\n    font-size: 16px\r\n}\r\n\r\n.card-back > a {\r\n    margin: 2px;\r\n}\r\n\r\n.social-icons {\r\n    position: fixed;\r\n    top: 45%;\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n  }\r\n\r\n.social-icons a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 16px;\r\n    transition: all 0.5s ease;\r\n    color: white;\r\n    font-size: 25px;\r\n    margin: 2px;\r\n    border-radius: 6px;\r\n\r\n  }\r\n\r\n.social-icons a:hover {\r\n    background-color: #000;\r\n  }\r\n\r\n.facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n\r\n.github {\r\n      background: #6cc644;\r\n      color: white\r\n  }\r\n\r\n.linkedin {\r\n    background: #007bb5;\r\n    color: white;\r\n  }\r\n\r\n.instagram {\r\n    background: #E4405F;\r\n    color: white;\r\n  }\r\n\r\n@-webkit-keyframes slideRight {\r\n    0% {\r\n      transform: translateX(-1500px);\r\n    }\r\n    100% {\r\n      transform: translateX(0);\r\n    }\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n\r\n    button {\r\n        line-height: 0px ;\r\n        padding: 0px ;\r\n    }\r\n\r\n    .home-container {\r\n        width: 200px;\r\n        height: 98px;\r\n    }\r\n\r\n    .home-contaienr li {\r\n        width: 200px;\r\n        height: 98px;\r\n    }\r\n\r\n    .home-container-card {\r\n        max-width: 200px;\r\n        max-height: 98px;\r\n    }\r\n\r\n    .card-back {\r\n        max-width: 200px;\r\n        max-height: 98px;\r\n    }\r\n\r\n    .card-back > p {\r\n        font-size: 10px;\r\n    }\r\n\r\n    .card-back button {\r\n        height: 20%;\r\n        width: 25%;\r\n        font-size: 7px;\r\n    }\r\n\r\n    .card-front {\r\n        max-width: 200px;\r\n        max-height: 98px;\r\n    }\r\n\r\n    .card-front > img {\r\n        width: 200px;\r\n        height: 98px;\r\n    }\r\n\r\n\r\n    .social-icons {\r\n        position: fixed;\r\n        top: 65%;\r\n        transform: translateY(-50%);\r\n        z-index: 2;\r\n    }\r\n\r\n    .social-icons a {\r\n        display: block;\r\n        text-align: center;\r\n        padding: 8px;\r\n        transition: all 0.5s ease;\r\n        color: white;\r\n        font-size: 15px;\r\n        margin: 2px;\r\n        border-radius: 6px;\r\n    \r\n      }\r\n\r\n    .first-div-content {\r\n        color: white;\r\n        text-align: center;\r\n        margin: auto;\r\n        width: 80%;\r\n        line-height: 30px;\r\n    }\r\n\r\n      .first-div-content > p {\r\n        font-size: 14px;\r\n        line-height: 1;\r\n        width: 100%;\r\n        margin-bottom: 50px;\r\n      }\r\n\r\n      .skillsets-card {\r\n          max-width: 100%;\r\n      }\r\n\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJDQUEyQzs7QUFFL0M7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFFbkIsdURBQXVEO0lBQ3ZELFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0RBQXNEO0lBQ3RELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFFbkIsd0RBQXdEO0lBQ3hELGtCQUFrQjtJQUNsQixzREFBc0Q7O0FBRTFEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUdSLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCOztFQUVwQjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7TUFDSSxtQkFBbUI7TUFDbkI7RUFDSjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztBQUVBO0lBQ0U7TUFDRSw4QkFBOEI7SUFDaEM7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGOztBQUVBOztJQUVFO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOzs7SUFHQTtRQUNJLGVBQWU7UUFDZixRQUFRO1FBR1IsMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7O01BRXBCOztJQUVGO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjs7TUFFRTtRQUNFLGVBQWU7UUFDZixjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQjtNQUNyQjs7TUFFQTtVQUNJLGVBQWU7TUFDbkI7O0VBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGVSaWdodCAuNzVzIGZvcndhcmRzO1xyXG5cclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubXVnc2hvdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxODAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiNmaXJzdC1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBGMjYwOyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDU3NUU2LCAjMDBGMjYwKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1NzVFNiwgIzAwRjI2MCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5maXJzdC1kaXYtY29udGVudCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmZpcnN0LWRpdi1jb250ZW50IGgye1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5za2lsbHNldHMtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyOTBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjUwNyk7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC41MDcpO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5tYWluLTEgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvXHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDE3MXB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBGMjYwOyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA1NzVFNiwgIzAwRjI2MCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDU3NUU2LCAjMDBGMjYwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDZweCByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuNTA3KTtcclxuXHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lci1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlXHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lci1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1mcm9udCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmQtZnJvbnQgPiBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWJhY2sgPiBwIHtcclxuICAgIG1hcmdpbjogOXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbn1cclxuXHJcbi5jYXJkLWJhY2sgPiBhIHtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWljb25zIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5naXRodWIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNmNjNjQ0O1xyXG4gICAgICBjb2xvcjogd2hpdGVcclxuICB9XHJcblxyXG4gIC5saW5rZWRpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuaW5zdGFncmFtIHtcclxuICAgIGJhY2tncm91bmQ6ICNFNDQwNUY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVSaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwcHggO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lLWNvbnRhaWVuciBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogOThweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZS1jb250YWluZXItY2FyZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJhY2sge1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOThweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1iYWNrID4gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJhY2sgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWZyb250IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDk4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZnJvbnQgPiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDY1JTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAuZmlyc3QtZGl2LWNvbnRlbnQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAuZmlyc3QtZGl2LWNvbnRlbnQgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNraWxsc2V0cy1jYXJkIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICB9XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(http) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.projects = [];
        this.errorMessage = 'There was an error loading this data.';
        this.error = false;
        this.barChart = [];
        this.languagesValue = [];
        this.languageNames = [];
        this.isLoading = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
          this.http.get('/api/languages').subscribe(function (res) {
            if (res) {
              _this3.languagesData = res;
              console.log(_this3.languagesData);
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = _this3.languagesData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var data = _step.value;
                  console.log(data);
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = data.languages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var value = _step2.value;

                      _this3.languagesValue.push(value.proficiency);

                      _this3.languageNames.push(value.language);
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else {
              console.log('error');
            }

            setTimeout(function () {
              _this3.buildChart();
            }, 100);
          });
          this.http.get('/api/p/projects').subscribe(function (res) {
            if (res) {
              _this3.projects = res;
              console.log(_this3.projects);
            } else if (!res) {
              _this3.error = true;
            } else {
              console.log('an unknown error has occured');
            }
          });
        }
      }, {
        key: "buildChart",
        value: function buildChart() {
          this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"]('barChart', {
            type: 'bar',
            data: {
              labels: this.languageNames,
              datasets: [{
                label: '% of skill',
                data: this.languagesValue,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {
              title: {
                text: "Coding Languages",
                display: true
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-container {\r\nmin-width: 100%;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG5taW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, dialog, http, fb) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.dialog = dialog;
        this.http = http;
        this.fb = fb;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin(value) {
          var _this4 = this;

          this.http.post('/api/login/login', value).subscribe(function (res) {
            _this4.loginData = res;
            console.log(_this4.loginData);

            if (res) {
              localStorage.setItem('token', _this4.loginData.token);
              localStorage.setItem('userId', _this4.loginData.userId);
              localStorage.setItem('role', _this4.loginData.role);

              _this4.dialog.closeAll();

              _this4.router.navigate(['/']);

              alert('Successfully logged in.');
            } else {
              alert("login unsuccessful.");
              console.log("error");
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/main-nav/main-nav.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainNavMainNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-container {\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\n.sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.primary-toolbar {\r\n  background: #0575E6\r\n}\r\n\r\n.primary-toolbar li {\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n.primary-toolbar li a:hover, .primary-toolbar li a:active {\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.primary-toolbar button {\r\n  margin-right: 5px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: #0575E6;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.primary-toolbar a {\r\n  display: inline-block;\r\n  margin: 0 10px;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.side-toolbar {\r\n  color: white;\r\n}\r\n\r\nmat-nav-list li {\r\n  display: block;\r\n}\r\n\r\n.name {\r\n  color: white;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-left: 30px;\r\n}\r\n\r\n@media (min-width: 900px){\r\n  .sidenav {\r\n    display: none;\r\n  }\r\n\r\n  .primary-toolbar > button {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 901px){\r\n  .primary-toolbar a {\r\n    display: none;\r\n  }\r\n\r\n  .name {\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogIzA1NzVFNlxyXG59XHJcblxyXG4ucHJpbWFyeS10b29sYmFyIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucHJpbWFyeS10b29sYmFyIGxpIGE6aG92ZXIsIC5wcmltYXJ5LXRvb2xiYXIgbGkgYTphY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6ICMwNTc1RTY7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtdG9vbGJhciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtbmF2LWxpc3QgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KXtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktdG9vbGJhciA+IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDFweCl7XHJcbiAgLnByaW1hcnktdG9vbGJhciBhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/main-nav/main-nav.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.ts ***!
    \***********************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcAppComponentsMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainNavComponent =
    /*#__PURE__*/
    function () {
      function MainNavComponent(router, breakpointObserver, dialog) {
        _classCallCheck(this, MainNavComponent);

        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.isAdmin = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
      }

      _createClass(MainNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkAdmin();
        }
      }, {
        key: "checkAdmin",
        value: function checkAdmin() {
          var adminCheck = localStorage.getItem('role');
          console.log(adminCheck);

          if (adminCheck === 'admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], {
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.clear();
          this.router.navigate(['/']);
        }
      }]);

      return MainNavComponent;
    }();

    MainNavComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-nav.component.css */
      "./src/app/components/main-nav/main-nav.component.css")).default]
    })], MainNavComponent);
    /***/
  },

  /***/
  "./src/app/components/messages/messages.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/messages/messages.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMessagesMessagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    margin-top: 50px;\r\n    text-align: center;\r\n}\r\n\r\nmat-card {\r\n    font-family: 'Work Sans', sans-serif;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin: 15px;\r\n}\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\nth {\r\n    margin: 10px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd\r\n}\r\n\r\ntd {\r\n    padding-right: 30px;\r\n    padding-left: 30px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkXHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/messages/messages.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/messages/messages.component.ts ***!
    \***********************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppComponentsMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent(http) {
        _classCallCheck(this, MessagesComponent);

        this.http = http;
        this.messages = [];
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.http.get('/api/m/read-messages').subscribe(function (res) {
            if (res) {
              console.log(res);
              _this5.messages = res;
            } else if (!res) {
              alert('No messages were found at this time');
            } else {
              alert('Server error');
            }
          });
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.component.css */
      "./src/app/components/messages/messages.component.css")).default]
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/components/resume/resume.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/resume/resume.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResumeResumeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".resume {\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nmat-card {\r\n    height: 90vh;\r\n    width: 100%;\r\n}\r\n\r\nmat-card > embed {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VtZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCA+IGVtYmVkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/resume/resume.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/resume/resume.component.ts ***!
    \*******************************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppComponentsResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResumeComponent =
    /*#__PURE__*/
    function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume.component.css */
      "./src/app/components/resume/resume.component.css")).default]
    })], ResumeComponent);
    /***/
  },

  /***/
  "./src/app/guards/role.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/role.guard.ts ***!
    \**************************************/

  /*! exports provided: RoleGuardService */

  /***/
  function srcAppGuardsRoleGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () {
      return RoleGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RoleGuardService =
    /*#__PURE__*/
    function () {
      function RoleGuardService(router, http) {
        _classCallCheck(this, RoleGuardService);

        this.router = router;
        this.http = http;
      }

      _createClass(RoleGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this6 = this;

          return this.findUserRole().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var role = res;

            if (role === "admin") {
              return true;
            } else {
              alert("You're not authorized to access that page.");

              _this6.router.navigate(["/"]);

              return false;
            }
          }));
        }
      }, {
        key: "findUserRole",
        value: function findUserRole() {
          this.userId = localStorage.getItem('userId');
          return this.http.get('/api/login/user' + this.userId);
        }
      }]);

      return RoleGuardService;
    }();

    RoleGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], RoleGuardService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\EETfi\new-portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map