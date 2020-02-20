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


    __webpack_exports__["default"] = "    <app-main-nav></app-main-nav>\r\n    <router-outlet></router-outlet>\r\n\r\n    <app-footer></app-footer>\r\n";
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


    __webpack_exports__["default"] = "<mat-card flex *ngIf='messageSaved === false'>\r\n    <h2>Please Fill out the Form</h2>\r\n    <hr>\r\n    <form #contactform [formGroup]='contactForm' (ngSubmit)='onSubmit(contactForm.value); contactform.reset()'>\r\n        <mat-form-field>\r\n            <input required matInput type='text' placeholder='Name' formControlName='name'>\r\n            <small class='error' *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\">\r\n                *Please enter your name\r\n            </small>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input required matInput type='text' placeholder='Email' formControlName='email'>\r\n            <small class='error' *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\">*Please\r\n                enter your email</small>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea required matInput type='text' placeholder='Message (20 characters minimum)' formControlName='message'></textarea>\r\n            <small class='error' *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\">*Please\r\n                leave a message</small>\r\n        </mat-form-field>\r\n\r\n        <button [disabled]='!contactForm.valid' mat-raised-button color='primary' type='submit'>Submit</button>\r\n        <button mat-raised-button mat-dialog-close>Cancel</button>\r\n    </form>\r\n    <br/>\r\n    <hr>\r\n    <h3>Alternatively, you can contact me via email or social media.</h3>\r\n    <p>My email is <strong>ethan.everett.townsend@gmail (dot) com</strong></p>\r\n    \r\n</mat-card>\r\n\r\n<mat-card *ngIf='messageSaved === true'>\r\n    <mat-icon class='done-icon'>check_circle_outline</mat-icon><h2>Thank you. Your message has been received!</h2>\r\n    <button mat-raised-button color='primary' mat-dialog-close>Close</button>\r\n</mat-card>";
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


    __webpack_exports__["default"] = "\r\n  <div class=\"container\">\r\n\r\n    <!-- Showcase -->\r\n    <header class=\"showcase\">\r\n      <div class=\"showcase-div dark\">\r\n        <h2>Hi, I'm Ethan. It's a Pleasure to meet you.</h2>\r\n        <p>\r\n          I'm a full stack developer. My favorite tech stack is the MEAN stack. If you're interested in working with me, let's get in touch and get to work.      </p>\r\n        <a href=\"https://github.com/ethantown93\" target=\"blank\" class=\"btn\">\r\n          Check out my GitHub <i class=\"fa fa-chevron-right\"></i>\r\n        </a>\r\n      </div>\r\n    </header>\r\n\r\n    <!-- Home cards 1 -->\r\n    <section class=\"home-cards\" data-aos='fade-up'>\r\n\r\n      <div class=\"home-cards-div\" *ngFor='let project of projects'>\r\n        <img src='{{project.src}}' alt='{{project.alt}}'>\r\n        <h3>{{ project.title }}</h3>\r\n        <ul>\r\n            <li>\r\n                Description: {{ project.description }}\r\n            </li>\r\n            <li>\r\n                Technologies Used: {{ project.technologiesUsed }}\r\n            </li>\r\n            <li>\r\n                My Role: {{ project.myRole }}            \r\n            </li>\r\n        </ul>\r\n        <div class=\"link-container \">\r\n            <a class=\"github\" target=\"blank\" href=\"{{ project.gitHub }}\">GitHub <i class=\"fa fa-chevron-right\"></i></a> \r\n            <a class=\"website\" target=\"blank\" href=\"{{ project.link }}\">Website <i class=\"fa fa-chevron-right\"></i></a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Resume -->\r\n    <section class=\"resume dark\">\r\n      <div class=\"content\">\r\n        <h2>Want to know more about me?</h2>\r\n        <p>Click the button below to schedule a time for us to talk! I can't wait to hear from you.</p>\r\n          <a href=\"https://calendly.com/eetfitness/interview\" target='blank' class=\"btn\">\r\n            Let's talk! <i class=\"fa fa-chevron-right\"></i>\r\n          </a>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Home cards 2 -->\r\n    <h1>Technologies I Use</h1>\r\n            <section class=\"home-cards\">\r\n                <div *ngFor=\"let langauge of languagesData\">\r\n                    <img class=\"home-cards-img\" src='{{ langauge.src }}' alt='{{langauge.alt}}' />\r\n                    <h1>{{ langauge.languages }}</h1>\r\n\r\n                </div>\r\n      </section>\r\n      \r\n      <!-- portolio -->\r\n      <section class=\"portfolio dark\">\r\n        <div class=\"content\">\r\n          <h2>Interested in how I made this website?</h2>\r\n          <p>Check out my GitHub repo for this portfolio by clicking on the link blow.</p>\r\n            <a href=\"https://github.com/ethantown93/new-portfolio\" target=\"blank\" class=\"btn\">\r\n              Go to GitHub <i class=\"fa fa-chevron-right\"></i>\r\n            </a>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Follow -->\r\n      <section class=\"follow\">\r\n        <p>Connect with me on social:</p>\r\n        <a href=\"https://github.com/ethantown93\" target='blank'>\r\n          <i class=\"fa fa-github-square fa-2x\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a href=\"https://www.linkedin.com/in/ethan-townsend-15320a10b/\" target='blank'>\r\n          <i class=\"fa fa-linkedin-square fa-2x\" aria-hidden=\"true\"></i>\r\n        </a>\r\n\r\n      </section>\r\n    </div>\r\n\r\n<!-- <div class=\"social-icons\">\r\n    <a href=\"https://www.facebook.com/ethan.townsend.5\" target='blank' class=\"facebook\"><i\r\n            class=\"fa fa-facebook\"></i></a>\r\n    <a href=\" https://github.com/ethantown93\" target='blank' class=\"github\"><i class=\"fa fa-github\"></i></a>\r\n    <a href=\" https://www.instagram.com/ethantownsend93/\" target='blank' class=\"instagram\"><i\r\n            class=\"fa fa-instagram\"></i></a>\r\n    <a href=\"https://www.linkedin.com/in/ethan-townsend-15320a10b/\" target='blank' class=\"linkedin\"><i\r\n            class=\"fa fa-linkedin\"></i></a>\r\n</div>\r\n\r\n<div class=\"video-cover\"></div>\r\n\r\n<div class=\"video-mobile\">\r\n    <img src=\"./assets/images/mobile-video.PNG\" alt=\"mobile background\">\r\n</div>\r\n\r\n<div class=\"personal-info\">\r\n    <h1>\r\n        Husband, Full-Stack Developer with a preference for Front-End Development.\r\n    </h1>\r\n    <p>I'm someone who's passionate about web technologies, <br />\r\n        writing the best code that I can, <br /> and creating dynamic\r\n        and responsive web applications.</p>\r\n</div>\r\n\r\n<div class='container' data-aos='fade-up'>\r\n    <div class='personal'>\r\n        <app-main-nav></app-main-nav>\r\n        <video autoplay [muted]=\"true\" loop id=\"myVideo\">\r\n            <source src=\"./assets/videos/video.mp4\" type=\"video/mp4\">\r\n        </video>\r\n    </div>\r\n    \r\n    <div id='first-div'>\r\n        <div class='first-div-content' data-aos='fade-up'>\r\n            <h2>\r\n                Hi, I'm Ethan. It's a Pleasure to meet you.\r\n            </h2>\r\n            <p>I'm a full stack developer. My favorite tech stack is the MEAN stack. If you're interested in working\r\n                with me, let's get in touch and get to work.\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class='main'>\r\n        <mat-card class='main-card' *ngIf='error === false'>\r\n            <h1>My Recent Projects</h1>\r\n            <hr>\r\n            <ul class='main-1'>\r\n                <li class='home-container' *ngFor='let project of projects' data-aos='fade-up'>\r\n                    <div class='project-title'><strong>{{ project.title }}</strong></div>\r\n                    <div class='home-container-card'>\r\n                        <div class='card-back'>\r\n                            <ul>\r\n                                <li class='card-back-li'>Description: {{ project.description }}</li>\r\n                                <li class='card-back-li'>Technologies Used: {{ project.technologiesUsed }}</li>\r\n                                <li class='card-back-li'>My Role: {{ project.myRole }}</li>\r\n                            </ul>\r\n                            <a href={{project.gitHub}} target='blank'><button mat-raised-button> Go to\r\n                                    GitHub</button></a>\r\n                            <a href={{project.link}} target='blank'><button mat-raised-button\r\n                                    *ngIf='project.link !== project.gitHub'>Go to Website</button></a>\r\n                        </div>\r\n                        <div class='card-front'>\r\n                            <img src='{{project.src}}' alt='{{project.alt}}'>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </mat-card>\r\n        <mat-card *ngIf='error === true'>\r\n            <h2>{{ errorMessage }}</h2>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"skillsets-container\">\r\n        <mat-card class='skillsets-card'>\r\n            <h1>Technologies I Use</h1>\r\n            <hr>\r\n            <ul class='skillsets-ul' >\r\n                <li data-aos='fade-right' class='skillsets-li' *ngFor='let langauge of languagesData'><img\r\n                        src='{{ langauge.src }}' alt='{{langauge.alt}}'></li>\r\n            </ul>\r\n        </mat-card>\r\n    </div>\r\n</div> -->";
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


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar class='side-toolbar'>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <ul>\r\n        <li>\r\n          <a routerLink='/resume'><button mat-button>My Resume</button></a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a routerLink='/messages'><button mat-button>My Messages</button></a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a (click)='onLogout()'><button mat-button>Logout</button></a>\r\n        </li>\r\n      </ul>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class='primary-toolbar'>\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span class='name' routerLink='/'>Ethan E. Townsend</span>\r\n      <span class='nav-link'></span>\r\n      <ul>\r\n        <li>\r\n          <button (click)='openDialog()' mat-raised-button>Contact</button>\r\n        </li>\r\n        <li>\r\n          <a routerLink='/resume'>My Resume</a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a routerLink='/messages'>My Messages</a>\r\n        </li>\r\n        <li *ngIf='isAdmin'>\r\n          <a (click)='onLogout()'>Logout</a>\r\n        </li>\r\n      </ul>\r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>";
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


    __webpack_exports__["default"] = "<div class='container'>\r\n    <mat-card>\r\n        <h2>My Messages</h2>\r\n        <table>\r\n            <tr>\r\n                <th>\r\n                    Name\r\n                </th>\r\n                <th>\r\n                    Email\r\n                </th>\r\n                <th>\r\n                    Message\r\n                </th>\r\n                <th>\r\n                    Date\r\n                </th>\r\n            </tr>\r\n            <tr *ngFor='let message of messages'>\r\n                <td>\r\n                    {{message.name}}\r\n                </td>\r\n                <td>\r\n                    {{message.email}}\r\n                </td>\r\n                <td>\r\n                    {{message.message}}\r\n                </td>\r\n                <td>\r\n                    {{message.date | date}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='error-container'>\r\n    <mat-card>\r\n     \r\n            <button (click)='backHome()' mat-raised-button>Home</button>\r\n               \r\n    </mat-card>\r\n</div>>\r\n";
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


    __webpack_exports__["default"] = "<div class='resume'>\r\n    <mat-card>\r\n        \r\n        <button mat-raised-button routerLink='/'>Back to Home</button>\r\n\r\n        <embed src='./assets/files/Resume.pdf' type='application/pdf'/>\r\n    </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedule-appointment/schedule-appointment.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedule-appointment/schedule-appointment.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsScheduleAppointmentScheduleAppointmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>schedule-appointment works!</p>\n";
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
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");

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
    }, {
      path: '**',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var mat_video__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! mat-video */
    "./node_modules/mat-video/fesm2015/mat-video.js");
    /* harmony import */


    var _guards_role_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./guards/role.guard */
    "./src/app/guards/role.guard.ts");
    /* harmony import */


    var _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/devops-presentations/devops-presentations.component */
    "./src/app/components/devops-presentations/devops-presentations.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/resume/resume.component */
    "./src/app/components/resume/resume.component.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/main-nav/main-nav.component */
    "./src/app/components/main-nav/main-nav.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/schedule-appointment/schedule-appointment.component */
    "./src/app/components/schedule-appointment/schedule-appointment.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_28__["MainNavComponent"], _components_devops_presentations_devops_presentations_component__WEBPACK_IMPORTED_MODULE_24__["DevopsPresentationsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_26__["ResumeComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_33__["PageNotFoundComponent"], _components_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_34__["ScheduleAppointmentComponent"]],
      entryComponents: [_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"], mat_video__WEBPACK_IMPORTED_MODULE_22__["MatVideoModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"]],
      providers: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_23__["RoleGuardService"], {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"],
        useClass: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
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
        value: function ngOnInit() {// this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/p/video-presentations').subscribe( res => {
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


    __webpack_exports__["default"] = "footer {\r\n    background:#000000;\r\n    height: 80px;\r\n    margin-top: auto;\r\n    position: relative;\r\n    color: white;\r\n    font-family: 'Work Sans', sans-serif;\r\n    text-align: center;\r\n}\r\n\r\nfooter p { \r\n    padding-top: 15px;\r\n}\r\n\r\nbutton {\r\n    margin: auto !important;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDojMDAwMDAwO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIHAgeyBcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */";
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


    __webpack_exports__["default"] = "\r\n  a {\r\n    color: #262626;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  .container {\r\n    width: 90%;\r\n    max-width: 1250px;\r\n    margin: auto;\r\n  \r\n  }\r\n  \r\n  /* Showcase */\r\n  \r\n  .showcase {\r\n    width: 100%;\r\n    height: 400px;\r\n    background: url('/assets/images/coding.jpeg') no-repeat center center/cover;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    padding-bottom: 50px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .showcase-div {\r\n    padding: 20px;\r\n    width: 60%;\r\n    background-color: #262626c7;\r\n  }\r\n  \r\n  .showcase-div h2, .showcase-div p {\r\n    color: white;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .showcase-div p {\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .showcase-div .btn {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  /* Home cards */\r\n  \r\n  .home-cards {\r\n    display: grid;\r\n    text-align: center;\r\n    padding: 10px;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 20px;\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  .home-cards-div {\r\n    box-shadow: 20px 40px 40px -20px #262626;\r\n  }\r\n  \r\n  .home-cards-div h3, .home-cards-div ul li {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n  \r\n  .home-cards img {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .home-cards h3 {\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  h1 {\r\n    text-align: center;\r\n    margin: 40px;\r\n  }\r\n  \r\n  .home-cards .home-cards-img {\r\n    margin: auto;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n  }\r\n  \r\n  .home-cards h1 {\r\n    text-align: center;\r\n  }\r\n  \r\n  .link-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-pack: justify;\r\n              justify-content: space-between;\r\n      padding: 10px;\r\n  }\r\n  \r\n  .home-cards a {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding-top: 10px;\r\n    color: #0067b8;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .home-cards i {\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .home-cards a:hover i {\r\n    margin-left: 10px;\r\n    \r\n  }\r\n  \r\n  /* resume */\r\n  \r\n  .resume {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n    height: 350px;\r\n    background: url('https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center center/cover;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 70px;\r\n  }\r\n  \r\n  .content {\r\n    background-color: #262626bc;\r\n    width: 40%;\r\n    padding: 30px;\r\n    /* border-radius: 5px; */\r\n  }\r\n  \r\n  .content h2 {\r\n    color: white;\r\n  }\r\n  \r\n  .resume p {\r\n    color: white;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .resume p, .carbon p {\r\n    margin: 10px 0 20px;\r\n  }\r\n  \r\n  /* Carbon */\r\n  \r\n  .portfolio {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n    height: 350px;\r\n    background: url('https://i.ibb.co/72cgtsz/carbon.jpg') no-repeat center center/cover;\r\n  }\r\n  \r\n  .portfolio .content {\r\n    width: 55%;\r\n    padding: 50px;\r\n    margin-bottom: 60px;\r\n  }\r\n  \r\n  .portfolio p {\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Follow */\r\n  \r\n  .follow {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    margin: 30px 0 30px;\r\n  }\r\n  \r\n  .follow * {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  @media(max-width: 700px) {\r\n    .menu-btn {\r\n      display: block;\r\n    }\r\n  \r\n    .menu-btn:hover {\r\n      opacity: 0.5;\r\n    }\r\n  \r\n    .main-nav ul.right-menu {\r\n      margin-right: 50px;\r\n    }\r\n  \r\n    .main-nav ul.main-menu {\r\n      display: block;\r\n      position: absolute;\r\n      top:0;\r\n      left: 0;\r\n      background: #f2f2f2;\r\n      width: 50%;\r\n      height: 100%;\r\n      border-right: #ccc 1px solid;\r\n      opacity: 0.9;\r\n      padding: 30px;\r\n      -webkit-transform: translateX(-500px);\r\n              transform: translateX(-500px);\r\n      -webkit-transition: -webkit-transform 0.5s ease-in-out;\r\n      transition: -webkit-transform 0.5s ease-in-out;\r\n      transition: transform 0.5s ease-in-out;\r\n      transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\r\n    }\r\n  \r\n    .main-nav ul.main-menu li {\r\n      padding: 10px;\r\n      border-bottom: #ccc solid 1px;\r\n      font-size: 14px;\r\n    }\r\n  \r\n    .main-nav ul.main-menu li:last-child {\r\n      border-bottom: 0;\r\n    }\r\n  \r\n    .main-nav ul.main-menu.show {\r\n      -webkit-transform: translateX(-20px);\r\n              transform: translateX(-20px);\r\n    }\r\n\r\n    .showcase-div {\r\n      min-width: 85%;\r\n    }\r\n\r\n    .showcase-div p {\r\n      font-size: 15px;\r\n    }\r\n  \r\n    .home-cards {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    .resume {\r\n      padding-bottom: 35px;\r\n    }\r\n  \r\n    .resume .content {\r\n      min-width: 85%;\r\n    }\r\n\r\n    .resume .content p {\r\n      font-size: 15px;\r\n    }\r\n  \r\n    .resume .content h2 {\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    .portfolio .content {\r\n      margin-bottom: 35px;\r\n      padding: 20px;\r\n    }\r\n  \r\n    .portfolio .content {\r\n      width: 85%;\r\n    }\r\n\r\n  }\r\n  \r\n  @media(max-width: 500px) {\r\n\r\n    .showcase-div {\r\n      font-size: 12px;\r\n    }\r\n\r\n    .home-cards {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  \r\n  }\r\n  \r\n  @media(max-width: 1024px) {\r\n\r\n    .resume {\r\n      padding-bottom: 30px;\r\n    }\r\n\r\n    .portfolio .content {\r\n      margin-bottom: 20px;\r\n    }\r\n  \r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZOztFQUVkOztFQUVBLGFBQWE7O0VBQ2I7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJFQUEyRTtJQUMzRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBLGVBQWU7O0VBQ2Y7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixhQUFhO0VBQ2pCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBTztZQUFQLE9BQU87SUFDUCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7O0VBRW5COztFQUVBLFdBQVc7O0VBQ1g7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEpBQThKO0lBQzlKLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGFBQWE7SUFDYix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQSxXQUFXOztFQUNYO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG9GQUFvRjtFQUN0Rjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBLFdBQVc7O0VBQ1g7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUdBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixLQUFLO01BQ0wsT0FBTztNQUNQLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLDRCQUE0QjtNQUM1QixZQUFZO01BQ1osYUFBYTtNQUNiLHFDQUE2QjtjQUE3Qiw2QkFBNkI7TUFDN0Isc0RBQXNDO01BQXRDLDhDQUFzQztNQUF0QyxzQ0FBc0M7TUFBdEMsMEVBQXNDO0lBQ3hDOztJQUVBO01BQ0UsYUFBYTtNQUNiLDZCQUE2QjtNQUM3QixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UscUNBQXFDO0lBQ3ZDOztJQUVBO01BQ0Usb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsYUFBYTtJQUNmOztJQUVBO01BQ0UsVUFBVTtJQUNaOztFQUVGOztFQUVBOztJQUVFO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLDBCQUEwQjtJQUM1Qjs7RUFFRjs7RUFFQTs7SUFFRTtNQUNFLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBhIHtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLyogU2hvd2Nhc2UgKi9cclxuICAuc2hvd2Nhc2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb2RpbmcuanBlZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5zaG93Y2FzZS1kaXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2Yzc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93Y2FzZS1kaXYgaDIsIC5zaG93Y2FzZS1kaXYgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNob3djYXNlLWRpdiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnNob3djYXNlLWRpdiAuYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhvbWUgY2FyZHMgKi9cclxuICAuaG9tZS1jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1jYXJkcy1kaXYge1xyXG4gICAgYm94LXNoYWRvdzogMjBweCA0MHB4IDQwcHggLTIwcHggIzI2MjYyNjtcclxuICB9XHJcblxyXG4gIC5ob21lLWNhcmRzLWRpdiBoMywgLmhvbWUtY2FyZHMtZGl2IHVsIGxpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuICAuaG9tZS1jYXJkcyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1jYXJkcyBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1jYXJkcyAuaG9tZS1jYXJkcy1pbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtY2FyZHMgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpbmstY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1jYXJkcyBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwNjdiODtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtY2FyZHMgaSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5ob21lLWNhcmRzIGE6aG92ZXIgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiByZXN1bWUgKi9cclxuICAucmVzdW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzYwNjU0MS9wZXhlbHMtcGhvdG8tNjA2NTQxLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjAnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNmJjO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbiAgfVxyXG5cclxuICAuY29udGVudCBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucmVzdW1lIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAucmVzdW1lIHAsIC5jYXJib24gcCB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDYXJib24gKi9cclxuICAucG9ydGZvbGlvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vaS5pYmIuY28vNzJjZ3Rzei9jYXJib24uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpbyBwIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvbGxvdyAqL1xyXG4gIC5mb2xsb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDMwcHggMCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9sbG93ICoge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLm1lbnUtYnRuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWVudS1idG46aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWFpbi1uYXYgdWwucmlnaHQtbWVudSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5tYWluLW5hdiB1bC5tYWluLW1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6MDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICNjY2MgMXB4IHNvbGlkO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICBcclxuICAgIC5tYWluLW5hdiB1bC5tYWluLW1lbnUgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAjY2NjIHNvbGlkIDFweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1haW4tbmF2IHVsLm1haW4tbWVudSBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuICBcclxuICAgIC5tYWluLW5hdiB1bC5tYWluLW1lbnUuc2hvdyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3djYXNlLWRpdiB7XHJcbiAgICAgIG1pbi13aWR0aDogODUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaG93Y2FzZS1kaXYgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5ob21lLWNhcmRzIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIH1cclxuXHJcbiAgICAucmVzdW1lIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucmVzdW1lIC5jb250ZW50IHtcclxuICAgICAgbWluLXdpZHRoOiA4NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VtZSAuY29udGVudCBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJlc3VtZSAuY29udGVudCBoMiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvcnRmb2xpbyAuY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucG9ydGZvbGlvIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KSB7XHJcblxyXG4gICAgLnNob3djYXNlLWRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZS1jYXJkcyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLnJlc3VtZSB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0Zm9saW8gLmNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuIl19 */";
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


    var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_update_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/update-nav.service */
    "./src/app/services/update-nav.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(http, nav) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.nav = nav;
        this.projects = [];
        this.errorMessage = 'There was an error loading this data.';
        this.error = false;
        this.languagesData = [];
        this.isLoading = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
          this.nav.getProj().subscribe(function (res) {
            if (res) {
              console.log(res);
              _this.projects = res;
            }
          });
          this.nav.getLang().subscribe(function (res) {
            if (res) {
              console.log(res);
              _this.languagesData = res;
            }
          }); // this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/languages').subscribe( res => {
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
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_update_nav_service__WEBPACK_IMPORTED_MODULE_4__["UpdateNavService"]
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
    /* harmony import */


    var _services_update_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/update-nav.service */
    "./src/app/services/update-nav.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, dialog, http, fb, nav) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.dialog = dialog;
        this.http = http;
        this.fb = fb;
        this.nav = nav;
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
          var _this2 = this;

          this.nav.login(value).then(function (res) {
            _this2.loginData = res;

            if (res) {
              localStorage.setItem('token', _this2.loginData.user.uid);
              localStorage.setItem('userId', _this2.loginData.user.uid);
              localStorage.setItem('role', 'admin');

              _this2.dialog.closeAll();

              _this2.nav.updateNav(_this2.checkAdmin);

              alert('Successfully logged in.');
            }
          }).catch(function (err) {
            console.log(err);
          });
        } // onLogin(value){
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

      }, {
        key: "checkAdmin",
        value: function checkAdmin() {
          var adminCheck = localStorage.getItem('role');

          if (adminCheck === 'admin') {
            return;
          } else {
            alert('user is not an admin');
          }
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
      }, {
        type: _services_update_nav_service__WEBPACK_IMPORTED_MODULE_6__["UpdateNavService"]
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


    __webpack_exports__["default"] = "mat-sidenav-container {\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\n\r\n.sidenav-container {\r\n  height: 70px;\r\n  width: 90%;\r\n  max-width: 1250px;\r\n  margin-bottom: 10px;\r\n  color: #262626\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  margin: auto\r\n}\r\n\r\n.mat-drawer-container {\r\n  background-color: rgba(0, 0, 0, 0) !important;\r\n  margin: auto;\r\n}\r\n\r\n.primary-toolbar {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.primary-toolbar ul {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.primary-toolbar li {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  font-size: 16px;\r\n}\r\n\r\n.primary-toolbar li a, .primary-toolbar span {\r\n  color: #262626\r\n}\r\n\r\n.primary-toolbar li a:hover, .primary-toolbar li a:active {\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.primary-toolbar button {\r\n  margin-right: 5px;\r\n\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: rgba(0, 0, 0, 0.787);\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.primary-toolbar a {\r\n  display: inline-block;\r\n  margin: 0 10px;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.side-toolbar {\r\n  color: white;\r\n}\r\n\r\nmat-nav-list li {\r\n  display: block;\r\n}\r\n\r\n.name {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (min-width: 768px){\r\n  .sidenav {\r\n    display: none;\r\n  }\r\n\r\n  .primary-toolbar > button {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 768px){\r\n  .primary-toolbar a {\r\n    display: none;\r\n  }\r\n\r\n  .primary-toolbar {\r\n    padding: 0;\r\n  }\r\n\r\n  .name {\r\n    margin-left: 5px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  mat-icon {\r\n    color: #262626;\r\n  }\r\n}\r\n\r\n@media only screen \r\n    and (min-device-width : 768px) \r\n    and (max-device-width : 1024px) {\r\n\r\n      .name {\r\n        margin-left: 50px;\r\n      }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7Ozs7TUFJTTtRQUNFLGlCQUFpQjtNQUNuQjs7RUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTI1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICMyNjI2MjZcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IGF1dG9cclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJpbWFyeS10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4ucHJpbWFyeS10b29sYmFyIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJpbWFyeS10b29sYmFyIGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnByaW1hcnktdG9vbGJhciBsaSBhLCAucHJpbWFyeS10b29sYmFyIHNwYW4ge1xyXG4gIGNvbG9yOiAjMjYyNjI2XHJcbn1cclxuXHJcbi5wcmltYXJ5LXRvb2xiYXIgbGkgYTpob3ZlciwgLnByaW1hcnktdG9vbGJhciBsaSBhOmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ucHJpbWFyeS10b29sYmFyIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43ODcpO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5wcmltYXJ5LXRvb2xiYXIgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlLXRvb2xiYXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubWF0LW5hdi1saXN0IGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktdG9vbGJhciA+IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgLnByaW1hcnktdG9vbGJhciBhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgXHJcbiAgICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIHtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICB9Il19 */";
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
    /* harmony import */


    var _services_update_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/update-nav.service */
    "./src/app/services/update-nav.service.ts");

    var MainNavComponent =
    /*#__PURE__*/
    function () {
      function MainNavComponent(updateNav, router, breakpointObserver, dialog) {
        _classCallCheck(this, MainNavComponent);

        this.updateNav = updateNav;
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
          var _this3 = this;

          this.updateNav.updateNavBar$.subscribe(function (method) {
            if (method) {
              method();
              _this3.isAdmin = true;
            } else {
              alert('no message received');
            }
          });
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
          this.isAdmin = false;
          this.router.navigate(['/']);
        }
      }]);

      return MainNavComponent;
    }();

    MainNavComponent.ctorParameters = function () {
      return [{
        type: _services_update_nav_service__WEBPACK_IMPORTED_MODULE_7__["UpdateNavService"]
      }, {
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
        value: function ngOnInit() {// this.http.get('https://portfolionodejs-env.mx7xwvawx9.us-east-2.elasticbeanstalk.com/api/m/read-messages').subscribe( res => {
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
  "./src/app/components/page-not-found/page-not-found.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-container {\r\n    width: 40%;\r\n    margin: auto;\r\n    height: 420px;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    font-family: 'Work Sans', sans-serif;\r\n\r\n}\r\n\r\nmat-card {\r\n    margin: auto;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: url('/assets/images/404.png');\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    background-repeat: no-repeat;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    width: 30%;\r\n    position: absolute;\r\n    top: 62%;\r\n    right: 34%;\r\n    background-color: #0575E6;\r\n    color: white;\r\n}\r\n\r\n/* .error-div {\r\n    background-color: rgba(5, 118, 230, 0.815);\r\n    width: 30%;\r\n    height: 30%;\r\n    padding: 20px;\r\n    margin: auto;\r\n    border-radius: 8px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0NBQStDO0lBQy9DLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzLzQwNC5wbmcnKTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYyJTtcclxuICAgIHJpZ2h0OiAzNCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU3NUU2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiAuZXJyb3ItZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgMTE4LCAyMzAsIDAuODE1KTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
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

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent(router) {
        _classCallCheck(this, PageNotFoundComponent);

        this.router = router;
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backHome",
        value: function backHome() {
          this.router.navigate(['/']);
        }
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/components/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
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


    __webpack_exports__["default"] = ".resume {\r\n    width: 60%;\r\n    min-height: 100%;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nmat-card {\r\n    height: 90vh;\r\n    width: 100%;\r\n}\r\n\r\nmat-card > embed {\r\n    height: 90%;\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCA+IGVtYmVkIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn0iXX0= */";
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
  "./src/app/components/schedule-appointment/schedule-appointment.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/schedule-appointment/schedule-appointment.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsScheduleAppointmentScheduleAppointmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/schedule-appointment/schedule-appointment.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/schedule-appointment/schedule-appointment.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ScheduleAppointmentComponent */

  /***/
  function srcAppComponentsScheduleAppointmentScheduleAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentComponent", function () {
      return ScheduleAppointmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScheduleAppointmentComponent =
    /*#__PURE__*/
    function () {
      function ScheduleAppointmentComponent() {
        _classCallCheck(this, ScheduleAppointmentComponent);
      }

      _createClass(ScheduleAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScheduleAppointmentComponent;
    }();

    ScheduleAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-appointment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedule-appointment/schedule-appointment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-appointment.component.css */
      "./src/app/components/schedule-appointment/schedule-appointment.component.css")).default]
    })], ScheduleAppointmentComponent);
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


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RoleGuardService =
    /*#__PURE__*/
    function () {
      function RoleGuardService(router, http, afAuth) {
        _classCallCheck(this, RoleGuardService);

        this.router = router;
        this.http = http;
        this.afAuth = afAuth;
      }

      _createClass(RoleGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) {
            if (!auth) {
              return false;
            } else {
              return true;
            }
          }));
        }
      }]);

      return RoleGuardService;
    }();

    RoleGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], RoleGuardService);
    /***/
  },

  /***/
  "./src/app/services/update-nav.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/update-nav.service.ts ***!
    \************************************************/

  /*! exports provided: UpdateNavService */

  /***/
  function srcAppServicesUpdateNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateNavService", function () {
      return UpdateNavService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UpdateNavService =
    /*#__PURE__*/
    function () {
      function UpdateNavService(afAuth, afs) {
        _classCallCheck(this, UpdateNavService);

        this.afAuth = afAuth;
        this.afs = afs;
        this.updateNavBarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateNavBar$ = this.updateNavBarSource.asObservable();
        this.getProjects = this.afs.collection('myProjects');
        this.getLanguages = this.afs.collection('myLanguages');
      }

      _createClass(UpdateNavService, [{
        key: "updateNav",
        value: function updateNav(method) {
          this.updateNavBarSource.next(method);
        } // get projects from firestore

      }, {
        key: "getProj",
        value: function getProj() {
          this.getProject = this.getProjects.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.map(function (results) {
              var data = results.payload.doc.data();
              data.id = results.payload;
              return data;
            });
          }));
          return this.getProject;
        } // get languages from firestore

      }, {
        key: "getLang",
        value: function getLang() {
          this.getLanguage = this.getLanguages.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.map(function (results) {
              var data = results.payload.doc.data();
              data.id = results.payload;
              return data;
            });
          }));
          return this.getLanguage;
        } //  login method

      }, {
        key: "login",
        value: function login(value) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then(function (userData) {
              return resolve(userData), function (err) {
                return reject(err);
              };
            });
          });
        }
      }]);

      return UpdateNavService;
    }();

    UpdateNavService.ctorParameters = function () {
      return [{
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    UpdateNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UpdateNavService);
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