"use strict";
(self["webpackChunkwebsite_frontend"] = self["webpackChunkwebsite_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/faq/faq.component */ 6459);
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ 9165);
/* harmony import */ var _pages_packages_packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/packages/packages.component */ 6905);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_Subscription_pages_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Subscription-pages/subscription/subscription.component */ 8860);
/* harmony import */ var _pages_package_details_package_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/package-details/package-details.component */ 9490);
/* harmony import */ var _pages_news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/news/news-details/news-details.component */ 7955);
/* harmony import */ var _pages_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/news/news-page/news-page.component */ 7302);
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.component */ 7007);
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/error404/error404.component */ 6206);
/* harmony import */ var _pages_privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/privacy-and-policy/privacy-and-policy.component */ 2262);
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/auth/login/login.component */ 6361);
/* harmony import */ var _pages_auth_registration_components_reg_wizard_reg_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/auth/registration/components/reg-wizard/reg-wizard.component */ 6753);
/* harmony import */ var _pages_company_company_save_company_save_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/company/company-save/company-save.component */ 8373);
/* harmony import */ var _pages_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/auth/forget-password/forget-password.component */ 8111);
/* harmony import */ var _pages_Subscription_pages_hyperpay_hyperpay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Subscription-pages/hyperpay/hyperpay.component */ 5743);
/* harmony import */ var _pages_Subscription_pages_payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/Subscription-pages/payment-card/payment-card.component */ 6591);
/* harmony import */ var _pages_auth_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/auth/email-verification/email-verification.component */ 9227);
/* harmony import */ var _pages_Subscription_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Subscription-pages/payment/payment.component */ 6069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2560);






















const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'faq', component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_0__.FaqComponent },
    { path: 'contact-us', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.ContactUsComponent },
    {
        path: 'packages',
        component: _pages_packages_packages_component__WEBPACK_IMPORTED_MODULE_2__.PackagesComponent,
    },
    {
        path: 'payment/:id/:regEmail',
        component: _pages_Subscription_pages_hyperpay_hyperpay_component__WEBPACK_IMPORTED_MODULE_15__.HyperpayComponent,
    },
    {
        path: 'subscription/final-step/:regEmail',
        component: _pages_Subscription_pages_payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_16__.PaymentCardComponent,
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
    },
    {
        path: 'subscription',
        component: _pages_Subscription_pages_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_4__.SubscriptionComponent,
    },
    {
        path: 'subscription/package-details',
        component: _pages_package_details_package_details_component__WEBPACK_IMPORTED_MODULE_5__.PackageDetailsComponent,
    },
    {
        path: 'news',
        component: _pages_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_7__.NewsPageComponent,
    },
    {
        path: 'news/:id',
        component: _pages_news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_6__.NewsDetailsComponent,
    },
    {
        path: 'terms-and-conditions',
        component: _pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__.TermsAndConditionsComponent,
    },
    {
        path: 'privacy-and-policy',
        component: _pages_privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_10__.PrivacyAndPolicyComponent,
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent
            },
            {
                path: 'register',
                component: _pages_auth_registration_components_reg_wizard_reg_wizard_component__WEBPACK_IMPORTED_MODULE_12__.RegWizardComponent
            },
            {
                path: 'register',
                children: [
                // {
                //   path:'demo',
                //   component: RegWizardComponent
                // },
                ]
            },
            {
                path: 'forgetPassword',
                component: _pages_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_14__.ForgetPasswordComponent
            },
            {
                path: 'verify',
                component: _pages_auth_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_17__.EmailVerificationComponent
            },
            {
                path: 'payment',
                component: _pages_Subscription_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_18__.PaymentComponent
            }
        ],
    },
    {
        path: 'company',
        children: [
            {
                path: 'info',
                component: _pages_company_company_save_company_save_component__WEBPACK_IMPORTED_MODULE_13__.CompanySaveComponent
            }
        ]
    },
    {
        path: '**',
        component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_9__.Error404Component,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 6525);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/language.service */ 7524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/loader/loader.component */ 2248);
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/footer/footer.component */ 7496);
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/navbar/navbar.component */ 1924);










function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loader")(2, "app-navbar")(3, "router-outlet")(4, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(translate, router, cookieService, languageService) {
        this.translate = translate;
        this.router = router;
        this.cookieService = cookieService;
        this.languageService = languageService;
        this.showSplash = true;
        this.languageService.setDefaultLang();
        this.mirrorBackground(this.translate.currentLang);
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                if (!event.url.includes("home")) {
                    window.scrollTo(0, 0); // Scroll to the top of the page
                }
            }
        });
    }
    mirrorBackground(lang) {
        const styleElement = document.querySelector('style');
        const styleSheet = styleElement.sheet;
        // Check if there's an existing rule at index 0
        if (lang == 'ar') {
            // If no rule exists, simply insert a new one
            styleSheet.insertRule('#bg-shared::before { transform: scaleX(-1); }');
        }
        else {
            styleSheet.insertRule('#bg-shared::before { transform: scaleX(1); }');
        }
    }
    ngOnInit() {
        const isPageReload = this.cookieService.get('firstLoad') !== 'true';
        if (isPageReload) {
            setTimeout(() => {
                this.showSplash = false;
                this.cookieService.set('firstLoad', 'true');
            }, 5000);
        }
        else {
            this.showSplash = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["id", "splash", 4, "ngIf"], ["id", "content", "class", "", 4, "ngIf"], ["id", "splash"], ["src", "../assets/img/logo.png", "width", "50vw", 1, "fade-out", "fade-in"], ["id", "content", 1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_1_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSplash);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showSplash);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent], styles: ["#splash[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-image: -webkit-linear-gradient(black, rgba(255, 255, 255, 0.2));\n  align-items: center;\n  -webkit-backdrop-filter: saturate(180%) blur(30px);\n  backdrop-filter: saturate(180%) blur(15px);\n  animation-name: fade-out;\n  animation-duration: 3s;\n  animation-delay: 3s;\n}\n#splash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  animation-name: fade-in;\n  animation-duration: 2.5s;\n}\n#splash[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background: linear-gradient(45deg, #3c3e3f, #292b2d, #151517, black);\n  background-size: 400% 400%;\n  border-radius: 5px;\n  z-index: -1;\n  animation: neon 5s linear;\n}\n@keyframes neon {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    filter: brightness(0.3);\n  }\n  to {\n    opacity: 1;\n    filter: brightness(2);\n  }\n}\n@keyframes fade-out {\n  from {\n    opacity: 1;\n    filter: brightness(2);\n  }\n  to {\n    opacity: 0;\n    filter: brightness(0);\n  }\n}\n#content[_ngcontent-%COMP%] {\n  background-color: #F3F2F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNSO0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0VBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFHQTtFQUNJO0lBQ0ksMkJBQUE7RUFBTjtFQUVFO0lBQ0ksNkJBQUE7RUFBTjtBQUNGO0FBRUE7RUFDSTtJQUFNLFVBQUE7SUFBVyx1QkFBQTtFQUVuQjtFQURFO0lBQUksVUFBQTtJQUFXLHFCQUFBO0VBS2pCO0FBQ0Y7QUFKQTtFQUNJO0lBQU0sVUFBQTtJQUFXLHFCQUFBO0VBUW5CO0VBUEU7SUFBSSxVQUFBO0lBQVcscUJBQUE7RUFXakI7QUFDRjtBQVZBO0VBQ0kseUJBQUE7QUFZSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BsYXNoe1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJsYWNrLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDE1cHgpO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLW91dDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogM3M7XG4gICBcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XG4gICAgfSBcbn1cbiNzcGxhc2g6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzNjM2UzZiwjMjkyYjJkLCMxNTE1MTcsYmxhY2spO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBhbmltYXRpb246IG5lb24gNXMgbGluZWFyO1xufVxuXG5cbkBrZXlmcmFtZXMgbmVvbiB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIGZyb20ge29wYWNpdHk6IDA7ZmlsdGVyOiBicmlnaHRuZXNzKDAuMyk7fVxuICAgIHRvIHtvcGFjaXR5OiAxO2ZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgICBmcm9tIHtvcGFjaXR5OiAxO2ZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XG4gICAgdG8ge29wYWNpdHk6IDA7ZmlsdGVyOiBicmlnaHRuZXNzKDApO31cbn1cbiNjb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YyRjI7XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pages_packages_packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/packages/packages.component */ 6905);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _interceptors_language_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/language.interceptor */ 5957);
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/faq/faq.component */ 6459);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ 9165);
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/footer/footer.component */ 7496);
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/loader/loader.component */ 2248);
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/navbar/navbar.component */ 1924);
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ 5172);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_Subscription_pages_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Subscription-pages/user-information/user-information.component */ 9879);
/* harmony import */ var _pages_Subscription_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/Subscription-pages/payment/payment.component */ 6069);
/* harmony import */ var _pages_Subscription_pages_payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Subscription-pages/payment-card/payment-card.component */ 6591);
/* harmony import */ var _pages_Subscription_pages_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Subscription-pages/subscription/subscription.component */ 8860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_package_details_package_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/package-details/package-details.component */ 9490);
/* harmony import */ var _pages_news_news_section_news_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/news/news-section/news-section.component */ 5769);
/* harmony import */ var _pages_emails_emails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/emails/emails.component */ 4433);
/* harmony import */ var _pages_news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/news/news-details/news-details.component */ 7955);
/* harmony import */ var _pages_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/news/news-page/news-page.component */ 7302);
/* harmony import */ var _pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/terms-and-conditions/terms-and-conditions.component */ 7007);
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/error404/error404.component */ 6206);
/* harmony import */ var _pages_Subscription_pages_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/Subscription-pages/company-information/company-information.component */ 9636);
/* harmony import */ var _pages_privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/privacy-and-policy/privacy-and-policy.component */ 2262);
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/auth/login/login.component */ 6361);
/* harmony import */ var _pages_auth_registration_components_reg_wizard_reg_wizard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/auth/registration/components/reg-wizard/reg-wizard.component */ 6753);
/* harmony import */ var _pages_auth_registration_components_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/auth/registration/components/company-info/company-info.component */ 5657);
/* harmony import */ var _pages_auth_registration_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/auth/registration/components/user-info/user-info.component */ 8233);
/* harmony import */ var _pages_company_company_save_company_save_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/company/company-save/company-save.component */ 8373);
/* harmony import */ var _pages_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/auth/forget-password/forget-password.component */ 8111);
/* harmony import */ var _pages_Subscription_pages_hyperpay_hyperpay_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/Subscription-pages/hyperpay/hyperpay.component */ 5743);
/* harmony import */ var _pages_auth_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/auth/email-verification/email-verification.component */ 9227);
/* harmony import */ var _pages_auth_confirm_login_confirm_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/auth/confirm-login/confirm-login.component */ 4626);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 2560);














































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS, useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_9__.LoaderInterceptor, multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS, useClass: _interceptors_language_interceptor__WEBPACK_IMPORTED_MODULE_3__.LanguageInterceptor, multi: true,
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbAccordionModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClient]
            }
        }),
        _angular_router__WEBPACK_IMPORTED_MODULE_40__.RouterModule,
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_41__.NgxIntlTelInputModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_42__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__.ContactUsComponent,
        _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent,
        _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
        _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent,
        _pages_packages_packages_component__WEBPACK_IMPORTED_MODULE_2__.PackagesComponent,
        _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__.FaqComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__.HomeComponent,
        _pages_Subscription_pages_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_11__.UserInformationComponent,
        _pages_Subscription_pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__.PaymentComponent,
        _pages_Subscription_pages_payment_card_payment_card_component__WEBPACK_IMPORTED_MODULE_13__.PaymentCardComponent,
        _pages_Subscription_pages_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__.SubscriptionComponent,
        _pages_package_details_package_details_component__WEBPACK_IMPORTED_MODULE_15__.PackageDetailsComponent,
        _pages_news_news_section_news_section_component__WEBPACK_IMPORTED_MODULE_16__.NewsSectionComponent,
        _pages_emails_emails_component__WEBPACK_IMPORTED_MODULE_17__.EmailsComponent,
        _pages_news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_18__.NewsDetailsComponent,
        _pages_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_19__.NewsPageComponent,
        _pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_20__.TermsAndConditionsComponent,
        _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_21__.Error404Component,
        _pages_Subscription_pages_company_information_company_information_component__WEBPACK_IMPORTED_MODULE_22__.CompanyInformationComponent,
        _pages_privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_23__.PrivacyAndPolicyComponent,
        _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_24__.LoginComponent,
        _pages_auth_registration_components_reg_wizard_reg_wizard_component__WEBPACK_IMPORTED_MODULE_25__.RegWizardComponent,
        _pages_auth_registration_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_27__.UserInfoComponent,
        _pages_auth_registration_components_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_26__.CompanyInfoComponent,
        _pages_company_company_save_company_save_component__WEBPACK_IMPORTED_MODULE_28__.CompanySaveComponent,
        _pages_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_29__.ForgetPasswordComponent,
        _pages_Subscription_pages_hyperpay_hyperpay_component__WEBPACK_IMPORTED_MODULE_30__.HyperpayComponent,
        _pages_auth_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_31__.EmailVerificationComponent,
        _pages_auth_confirm_login_confirm_login_component__WEBPACK_IMPORTED_MODULE_32__.ConfirmLoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbAccordionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_40__.RouterModule,
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_41__.NgxIntlTelInputModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_42__.BrowserAnimationsModule], exports: [_pages_auth_registration_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_27__.UserInfoComponent,
        _pages_auth_registration_components_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_26__.CompanyInfoComponent] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_43__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 7496:
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.service */ 2274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class FooterComponent {
    constructor(router, footerService, scroller) {
        this.router = router;
        this.footerService = footerService;
        this.scroller = scroller;
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.getAllSocialMedia();
    }
    scroll(nav) {
        this.router.navigate(['/home']);
        setTimeout(() => {
            this.scroller.scrollToAnchor(nav);
        }, 100);
    }
    getAllSocialMedia() {
        this.footerService.getAllSocialMedia().subscribe((response) => {
            this.socialMedia = response;
            if (response.whatsAppNumber) {
                window['whatsAppNumber'] = response.whatsAppNumber;
            }
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_footer_service__WEBPACK_IMPORTED_MODULE_0__.FooterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 96, vars: 50, consts: [[1, "container", "footer"], [1, "menu", "row", "text-start"], [1, "col-md-3"], ["routerLink", "/faq"], ["routerLink", "/privacy-and-policy"], [3, "click"], ["routerLink", "/contact-us"], ["routerLink", ""], [1, "col-md-3", "d-flex", "justify-content-center"], ["src", "./assets/img/logo.png", "alt", "TSHGHEEL", "width", "100px"], ["routerLink", "/news"], [1, "col-md-3", "d-flex", "flex-column", "align-items-center"], ["src", "./assets/img/mada.png", "alt", "mada", "width", "30px", "height", "30px"], ["src", "./assets/img/applepay.png", "alt", "applepay", "width", "30px", "height", "30px"], ["src", "./assets/img/visa.png", "alt", "visa", "width", "30px", "height", "30px"], [1, "info", "row", "text-start", "align-items-center"], [1, "col-lg-3"], [1, "m-0"], [1, "copy-right", "col-lg-3"], [1, "social", "col-lg-3"], [1, "d-flex", "justify-content-end"], ["target", "_blank", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "height", "2em", "viewBox", "0 0 448 512"], ["d", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"], ["d", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"], ["d", "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"], ["d", "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul")(4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li")(8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_20_listener() { return ctx.scroll("about-us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li")(28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "00966123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8)(31, "ul")(32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_35_listener() { return ctx.scroll("packages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_39_listener() { return ctx.scroll("packages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_43_listener() { return ctx.scroll("packages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11)(55, "ul")(56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 15)(66, "div", 16)(67, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 19)(79, "ul", 20)(80, "li")(81, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li")(85, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li")(89, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li")(93, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 20, "Help"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 22, "Help & Support"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 24, "FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 26, "privacy-and-policy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 28, "about-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 30, "contact-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 32, "FullTrial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 34, "HR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 36, "FinanceAndAccounting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 38, "Subscriptions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 40, "news"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 42, "payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 44, "riyadh,saudi-arabia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u00A9 ", ctx.currentYear, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 46, "allRightsReserved"), ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 48, "support@oprup.com"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.socialMedia == null ? null : ctx.socialMedia.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.socialMedia == null ? null : ctx.socialMedia.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.socialMedia == null ? null : ctx.socialMedia.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.socialMedia == null ? null : ctx.socialMedia.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, rgb(34, 32, 79) 0%, rgb(114, 33, 91) 92%);\n  -webkit-backdrop-filter: saturate(180%) blur(30px);\n  backdrop-filter: saturate(180%) blur(15px);\n  box-shadow: rgba(53, 53, 53, 0.09) -11px -10px 15px;\n  margin: 0px 0px !important;\n  max-width: 100%;\n  padding: 30px 60px;\n}\n\n.menu[_ngcontent-%COMP%], .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  line-height: 1.8;\n}\n\n.menu[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.info[_ngcontent-%COMP%] {\n  align-items: end;\n  margin-top: 20px;\n}\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.info[_ngcontent-%COMP%]   .copy-right[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n  .rtl .info,   .rtl .menu {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 1000px) {\n  .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .info[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .menu[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n}\n\n.payment[_ngcontent-%COMP%] {\n  padding: 0 10vw;\n}\n\n.footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtGQUFBO0VBR0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTs7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFRQTtFQUNJLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBU0E7RUFDSSxpQkFBQTtFQUNBLGlEQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtBQU5KOztBQVNBO0VBQ0ksVUFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtBQU5KOztBQVdJO0VBQ0ksNEJBQUE7QUFSUjs7QUFZQTtFQUNJO0lBQ0ksa0NBQUE7RUFUTjtFQVdFO0lBQ0ksNkJBQUE7RUFUTjtFQVdFO0lBQ0ksa0NBQUE7RUFUTjtBQUNGOztBQVdBO0VBQ0ksZUFBQTtBQVRKOztBQVlBO0VBQ0ksc0JBQUE7QUFUSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzNCwzMiw3OSwxKSAwJSwgcmdiYSgxMTQsMzMsOTEsMSkgOTIlKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzQsMzIsNzksMSkgMCUsIHJnYmEoMTE0LDMzLDkxLDEpIDkyJSk7XG5cbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigzMHB4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTVweCk7XG4gICAgYm94LXNoYWRvdzogcmdiKDUzIDUzIDUzIC8gOSUpIC0xMXB4IC0xMHB4IDE1cHg7XG4gICAgbWFyZ2luOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHggNjBweDtcbn1cblxuLm1lbnUsXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbi5tZW51IHtcbiAgICAvLyBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWVudSA+IGRpdntcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tZW51IHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogdHNoZ2VlbC1oZWF2eSwgJ1RhamF3YWwnLCBzYW5zLXNlcmlmLDtcbn1cblxuLmluZm8gLmNvcHktcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8gLnNvY2lhbCB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaW5mbyAuc29jaWFsIHVsIGxpIHtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmluZm8gLnNvY2lhbCB1bCBsaSBzdmcge1xuICAgIGZpbGw6ICNmZmZcbn1cblxudWwgbGkgYXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxufVxuXG5cbjo6bmctZGVlcCAucnRsIHtcbiAgICAuaW5mbywubWVudXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcbiAgICAuc29jaWFsIHVse1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW5mbywubWVudXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tZW51IC5jb2wtbWQtM3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG59XG4ucGF5bWVudHtcbiAgICBwYWRkaW5nOiAwIDEwdnc7XG59XG5cbi5mb290ZXIgKntcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 2274:
/*!*************************************************!*\
  !*** ./src/app/common/footer/footer.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterService": () => (/* binding */ FooterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class FooterService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getAllSocialMedia() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}socialMedia`);
    }
}
FooterService.ɵfac = function FooterService_Factory(t) { return new (t || FooterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FooterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FooterService, factory: FooterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2248:
/*!***************************************************!*\
  !*** ./src/app/common/loader/loader.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.service */ 1504);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2)(2, "div", 2)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoaderComponent {
    constructor(loader) {
        this.loader = loader;
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loader-bg", 4, "ngIf"], [1, "loader-bg"], ["role", "status", 1, "spinner-grow"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader.getLoading());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".loader-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  z-index: 3000;\n}\n.loader-bg[_ngcontent-%COMP%]   .spinner-grow[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  width: 2rem;\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFUiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWJne1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHotaW5kZXg6IDMwMDA7XG4gICAgLnNwaW5uZXItZ3Jvd3tcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1504:
/*!*************************************************!*\
  !*** ./src/app/common/loader/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoaderService {
    constructor() {
        this.loading = false;
    }
    setLoading(loading) {
        this.loading = loading;
    }
    getLoading() {
        return this.loading;
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1924:
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






const _c0 = function () { return ["/auth/login"]; };
class NavbarComponent {
    constructor(translate, router, scroller) {
        this.translate = translate;
        this.router = router;
        this.scroller = scroller;
        this.counter = 0;
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
    }
    ngOnInit() {
        this.changeNavDrawer();
    }
    scroll(nav) {
        this.router.navigate(['/home']);
        setTimeout(() => {
            this.scroller.scrollToAnchor(nav);
        }, 100);
    }
    onWindowScroll() {
        const screenSize = window.screen.width;
        let element = document.querySelector('.inverse');
        if (window.scrollY > element.clientHeight) {
            element.classList.add(screenSize > 1200 ? 'navbar-inverse' : 'navbar-inverse-phone');
        }
        else {
            element.classList.remove(screenSize > 1200 ? 'navbar-inverse' : 'navbar-inverse-phone');
        }
    }
    removeNavbarInverse() {
        let element = document.querySelector('.inverse');
        element.classList.remove('navbar-inverse');
    }
    switchLang() {
        let lang = this.lang == 'ar' ? 'en' : 'ar';
        // const isPaymentPage = window.location.pathname.includes('payment');
        // if (isPaymentPage) {
        //   localStorage.setItem('lang', lang); 
        //   location.reload(); 
        //   return;
        // }
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
        // Change direction
        let html = document.querySelector('html');
        let body = document.querySelector('body');
        html?.setAttribute('lang', lang);
        html?.setAttribute('dir', lang == 'ar' ? 'rtl' : 'ltr');
        body?.classList.add(lang == 'ar' ? 'rtl' : 'ltr');
        body?.classList.remove(lang == 'ar' ? 'ltr' : 'rtl');
        this.changeBtnGroupRadius();
        this.changeNavDrawer();
    }
    changeBtnGroupRadius() {
        let url = this.router.url;
        let labels = document.getElementsByTagName('label');
        let lang = localStorage.getItem('lang');
        if (labels && url.includes('home')) {
            if (lang === 'ar') {
                labels[0].style.borderRadius = '0 3px 3px 0';
                labels[1].style.borderRadius = '3px 0 0 3px';
            }
            else {
                labels[0].style.borderRadius = '3px 0 0 3px';
                labels[1].style.borderRadius = '0 3px 3px 0';
            }
        }
        this.mirrorBackground(lang);
    }
    mirrorBackground(lang) {
        this.counter++;
        const styleElement = document.querySelector('style');
        const styleSheet = styleElement.sheet;
        if (this.counter > 1) {
            styleSheet?.deleteRule(styleSheet?.cssRules.length - 1);
        }
        if (lang == 'ar') {
            styleSheet.insertRule('#bg-shared::before { transform: scaleX(-1) !important; }', styleSheet?.cssRules.length);
        }
        else {
            styleSheet.insertRule('#bg-shared::before { transform: scaleX(1) !important; }', styleSheet?.cssRules.length);
        }
    }
    changeNavDrawer() {
        let lang = localStorage.getItem('lang');
        let drawer = document.getElementById("offcanvasNavbar2");
        if (lang == 'ar') {
            drawer?.classList.remove("offcanvas-start");
            drawer?.classList.add("offcanvas-end");
        }
        else {
            drawer?.classList.remove("offcanvas-end");
            drawer?.classList.add("offcanvas-start");
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 44, vars: 21, consts: [[1, "inverse", "sticky-top"], [1, "container"], ["aria-label", "Offcanvas navbar large", 1, "navbar", "navbar-expand-lg"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar2", "aria-controls", "offcanvasNavbar2", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "fa-solid", "fa-bars", "fa-xl"], ["routerLink", "/home", 1, "navbar-brand", "m-0"], ["src", "./assets/img/logo-white.png", "alt", "TSHGHEEL", "height", "30px"], ["id", "offcanvas", "tabindex", "-1", "id", "offcanvasNavbar2", "aria-labelledby", "offcanvasNavbar2Label", 1, "offcanvas", "offcanvas-start", "offcanvas-bg"], [1, "offcanvas-header"], ["id", "offcanvasNavbar2Label", 1, "offcanvas-title"], ["routerLink", "/home"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "fa-solid", "fa-xmark", "fa-xl"], [1, "offcanvas-body"], [1, "navbar-nav", "justify-content-center", "flex-grow-1"], [1, "nav-item"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close", "aria-current", "page", 1, "nav-link", "active", 3, "click"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "nav-link", 3, "click"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close", "routerLink", "/contact-us", 1, "nav-link"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "lang"], [1, "btn", "btn-primary", "mx-2", 3, "routerLink"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.removeNavbarInverse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "h5", 9)(10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13)(15, "ul", 14)(16, "li", 15)(17, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_17_listener() { return ctx.scroll("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 15)(21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_21_listener() { return ctx.scroll("packages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15)(25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_25_listener() { return ctx.scroll("news"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 15)(29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15)(33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_33_listener() { return ctx.scroll("about-us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19)(37, "div", 20)(38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20)(42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_42_listener() { return ctx.switchLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, "home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, "packages"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 12, "news"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 14, "contact-us"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 16, "about-us"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 18, "logIn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang == "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", " ");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n  height: 60px;\n  color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 2px 15px;\n  border-color: white !important;\n  color: white !important;\n}\n.navbar[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #dfdee7 !important;\n}\n.navbar[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border: none !important;\n  outline: none !important;\n  background: none;\n  box-shadow: none !important;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #000 !important;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:visited, .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1, 1.1);\n}\n.sticky-top[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgb(34, 32, 79) 0%, rgb(114, 33, 91) 92%);\n}\n.navbar-inverse[_ngcontent-%COMP%] {\n  background: rgba(96, 96, 96, 0.5);\n  -webkit-backdrop-filter: saturate(180%) blur(30px);\n  backdrop-filter: saturate(180%) blur(15px);\n  box-shadow: rgba(53, 53, 53, 0.63) 0px 10px 15px;\n  transition: 0.2s;\n  background: linear-gradient(90deg, rgb(34, 32, 79) 0%, rgb(114, 33, 91) 92%);\n}\n.navbar-inverse-phone[_ngcontent-%COMP%] {\n  background: rgba(96, 96, 96, 0.5);\n  box-shadow: rgba(53, 53, 53, 0.63) 0px 10px 15px;\n  transition: 0.2s;\n  background: linear-gradient(90deg, rgb(34, 32, 79) 0%, rgb(114, 33, 91) 92%);\n}\n@media (max-width: 992px) {\n  .nav-item.dropdown[_ngcontent-%COMP%], .nav-item.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n  .nav-item.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff !important;\n  }\n  .offcanvas-bg[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.15);\n    -webkit-backdrop-filter: saturate(180%) blur(30px);\n            backdrop-filter: saturate(180%) blur(30px);\n    max-width: 300px;\n  }\n  .offcanvas[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .offcanvas[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    justify-content: start !important;\n  }\n  .navbar[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.6rem !important;\n  }\n}\n@media (width: 992px) {\n  .offcanvas-bg[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.15);\n    -webkit-backdrop-filter: saturate(180%) blur(30px);\n            backdrop-filter: saturate(180%) blur(30px);\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFEWjtBQUVZO0VBQ0kseUJBQUE7QUFBaEI7QUFNSTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBSlI7QUFPSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxSO0FBUUk7RUFDSSxzQkFBQTtBQU5SO0FBU0k7Ozs7RUFJSSwwQkFBQTtBQVBSO0FBV0E7RUFDSSw0RUFBQTtBQVJKO0FBWUE7RUFDSSxpQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsNEVBQUE7QUFUSjtBQWFBO0VBQ0ksaUNBQUE7RUFHQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsNEVBQUE7QUFaSjtBQWlCQTtFQUVJOztJQUVJLDZCQUFBO0VBZk47RUFrQkU7SUFDSSxzQkFBQTtFQWhCTjtFQW1CRTtJQUNJLHFDQUFBO0lBQ0Esa0RBQUE7WUFBQSwwQ0FBQTtJQUNBLGdCQUFBO0VBakJOO0VBb0JFO0lBQ0ksYUFBQTtFQWxCTjtFQW9CTTtJQUNJLGlDQUFBO0VBbEJWO0VBcUJFO0lBQ0ksNEJBQUE7RUFuQk47QUFDRjtBQXlCQTtFQUNJO0lBQ0kscUNBQUE7SUFDQSxrREFBQTtZQUFBLDBDQUFBO0lBQ0EsMkJBQUE7SUFBQSxzQkFBQTtFQXZCTjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIC5sYW5nIHtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkZmRlZTcgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmJ0bi1jbG9zZSxcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAubmF2LWl0ZW0gKiB7XG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdi1pdGVtOnZpc2l0ZWQsXG4gICAgLm5hdi1pdGVtOmFjdGl2ZSxcbiAgICAubmF2LWl0ZW06Zm9jdXMsXG4gICAgLm5hdi1pdGVtOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gICAgfVxuXG59XG4uc3RpY2t5LXRvcHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzQsMzIsNzksMSkgMCUsIHJnYmEoMTE0LDMzLDkxLDEpIDkyJSk7XG5cbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDk2LCA5NiwgOTYsIDAuNSk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDE1cHgpO1xuICAgIGJveC1zaGFkb3c6IHJnYig1MyA1MyA1MyAvIDYzJSkgMHB4IDEwcHggMTVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzNCwzMiw3OSwxKSAwJSwgcmdiYSgxMTQsMzMsOTEsMSkgOTIlKTtcblxufVxuXG4ubmF2YmFyLWludmVyc2UtcGhvbmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOTYsIDk2LCA5NiwgMC41KTtcbiAgICAvLyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigzMHB4KTtcbiAgICAvLyBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTVweCk7XG4gICAgYm94LXNoYWRvdzogcmdiKDUzIDUzIDUzIC8gNjMlKSAwcHggMTBweCAxNXB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDM0LDMyLDc5LDEpIDAlLCByZ2JhKDExNCwzMyw5MSwxKSA5MiUpO1xuXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgICAubmF2LWl0ZW0uZHJvcGRvd24sXG4gICAgLm5hdi1pdGVtLmRyb3Bkb3duIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5hdi1pdGVtLmRyb3Bkb3duIHVsIGEge1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5vZmZjYW52YXMtYmcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCk7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLm9mZmNhbnZhcyB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uYXZiYXIgLmxhbmcgLmJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbn1cblxuXG5AbWVkaWEgKHdpZHRoOiA5OTJweCkge1xuICAgIC5vZmZjYW52YXMtYmcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCk7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 2356:
/*!******************************************************!*\
  !*** ./src/app/core/services/fingerprint.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintService": () => (/* binding */ FingerprintService)
/* harmony export */ });
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ 4889);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);




class FingerprintService {
    constructor() {
        this.fingerprint$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(_fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1__["default"].load()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(fp => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(fp.get())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(result => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result.visitorId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    }
    getFingerprint() {
        return this.fingerprint$;
    }
}
FingerprintService.ɵfac = function FingerprintService_Factory(t) { return new (t || FingerprintService)(); };
FingerprintService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FingerprintService, factory: FingerprintService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7524:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
    }
    setDefaultLang() {
        this.setLang(this.getLanguage());
    }
    setLang(lang) {
        localStorage.setItem('lang', lang);
        this.translate.use(lang);
        this.changeStyle(lang);
    }
    changeStyle(lang) {
        let html = document.querySelector('html');
        let body = document.querySelector('body');
        html?.setAttribute('lang', lang);
        html?.setAttribute('dir', lang == 'ar' ? 'rtl' : 'ltr');
        body?.classList.remove(lang == 'en' ? 'rtl' : 'ltr');
        body?.classList.add(lang == 'ar' ? 'rtl' : 'ltr');
    }
    getLanguage() {
        const lang = localStorage.getItem('lang');
        if (!lang || lang == 'undefined') {
            return 'ar'; // default language
        }
        return lang;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6616:
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TokenService {
    constructor() { }
    decodeToken(token) {
        return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(this.getToken(token));
    }
    saveToken(token) {
        localStorage.setItem('token', token);
    }
    getToken(token) {
        return localStorage.getItem(token) || '';
    }
    removeToken(token) {
        localStorage.removeItem(token);
    }
    isTokenExists(token) {
        return !!localStorage.getItem(token);
    }
    clearToken() {
        localStorage.removeItem('token');
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5957:
/*!******************************************************!*\
  !*** ./src/app/interceptors/language.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageInterceptor": () => (/* binding */ LanguageInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class LanguageInterceptor {
    constructor() { }
    intercept(request, next) {
        const lang = localStorage.getItem('lang') || 'ar';
        request = request.clone({
            setHeaders: {
                'Accept-Language': lang
            }
        });
        return next.handle(request);
    }
}
LanguageInterceptor.ɵfac = function LanguageInterceptor_Factory(t) { return new (t || LanguageInterceptor)(); };
LanguageInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageInterceptor, factory: LanguageInterceptor.ɵfac });


/***/ }),

/***/ 5172:
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/loader/loader.service */ 1504);




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.totalRequests = 0;
    }
    intercept(request, next) {
        this.totalRequests++;
        this.loaderService.setLoading(true);
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.totalRequests--;
            if (this.totalRequests == 0) {
                this.loaderService.setLoading(false);
            }
        }));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 2646:
/*!*****************************************************!*\
  !*** ./src/app/interfaces/save_subscription_dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveSubcscriptionDTO": () => (/* binding */ SaveSubcscriptionDTO),
/* harmony export */   "initlizeSubscriptionDTO": () => (/* binding */ initlizeSubscriptionDTO)
/* harmony export */ });
/* harmony import */ var _core_services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/token.service */ 6616);

class SaveSubcscriptionDTO {
    constructor(subcriptionDTO, subscriptionInformationDTO, companyCompositeKey) {
        this.subcriptionDTO = subcriptionDTO;
        this.subscriptionInformationDTO = subscriptionInformationDTO;
        this.companyCompositeKey = companyCompositeKey;
    }
}
function initDataForSubcriptionDTO() {
    return {
        packageId: null,
        subscriptionPeriod: 'ANNUAl',
        repeatPeriod: 1,
    };
}
function initDataForSubscriptionInformationDTO() {
    return {
        availableActiveUsers: 0,
        availableInactiveUsers: 0,
        totalCost: 0.0,
        paymentId: 1,
        status: 'INACTIVE',
    };
}
function initDataForCompanyCompositeKey() {
    let tokenService = new _core_services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService();
    let decodedToken = tokenService.decodeToken('token');
    return {
        branchCode: decodedToken.branchCode,
        comCode: decodedToken.comCode,
        regCode: decodedToken.regCode,
    };
}
function initlizeSubscriptionDTO() {
    return new SaveSubcscriptionDTO(initDataForSubcriptionDTO(), initDataForSubscriptionInformationDTO(), initDataForCompanyCompositeKey());
}


/***/ }),

/***/ 9636:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/company-information/company-information.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyInformationComponent": () => (/* binding */ CompanyInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






function CompanyInformationComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sector_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sector_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, sector_r2));
} }
function CompanyInformationComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, size_r3));
} }
class CompanyInformationComponent {
    constructor(fb) {
        this.fb = fb;
        this.changeSubValue = () => { };
        this.validateForm = () => { };
        this.companySectors = [
            "Contracting",
            "EducationAndTraining",
            "Technology",
            "Finance",
            "Media",
            "Transport",
            "FoodAndSupply",
            "RetailandECommerce",
            "Services",
            "Maintenance",
            "Other"
        ];
        this.companySizes = [
            "1-5",
            "6-25",
            "26-50",
            "51-100",
            "101-200",
            "More than 200"
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            companyName: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            companySector: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            companySize: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            comapnyRole: ["null", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    invalidValidation(elment) {
        return this.form.get(elment)?.invalid;
    }
    touchedValidation(elment) {
        return this.form.get(elment)?.touched;
    }
    scrollToTop() {
        window.scrollTo(0, 50);
    }
}
CompanyInformationComponent.ɵfac = function CompanyInformationComponent_Factory(t) { return new (t || CompanyInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
CompanyInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyInformationComponent, selectors: [["app-company-information"]], inputs: { changeSubValue: "changeSubValue", validateForm: "validateForm" }, decls: 48, vars: 34, consts: [[1, "d-flex", "justify-content-center"], [1, "company-info"], [1, "heading"], [1, "form-group"], ["type", "text", "name", "cname", "id", "cname", "formControlName", "companyName", 1, "tshgheel-input", 3, "placeholder", "change"], [1, "select"], ["aria-label", "Default select example", 1, "tshgheel-input", 3, "change"], ["value", "null"], ["value", "AccountAdministrator"], ["value", "BusinessOwner"], ["value", "Employee"], ["value", "Other"], [1, "fa-solid", "fa-chevron-down", "icon"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "next", 1, "btn", "btn-primary", "w-100", "py-3", 3, "disabled", "click"], [1, "d-flex", "justify-content-center", "control-buttons", "mt-4"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "prev", 1, "btn", "prev", 3, "click"], [1, "fa-solid", "fa-chevron-left"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "next", 1, "btn", "next", 3, "disabled", "click"], [1, "fa-solid", "fa-chevron-right"], [3, "value"]], template: function CompanyInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CompanyInformationComponent_Template_input_change_6_listener($event) { return ctx.changeSubValue("companyName", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CompanyInformationComponent_Template_select_change_9_listener($event) { return ctx.changeSubValue("companyRole", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5)(27, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CompanyInformationComponent_Template_select_change_27_listener($event) { return ctx.changeSubValue("companySector", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CompanyInformationComponent_option_31_Template, 3, 4, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5)(34, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CompanyInformationComponent_Template_select_change_34_listener($event) { return ctx.changeSubValue("companySize", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CompanyInformationComponent_option_38_Template, 3, 4, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyInformationComponent_Template_button_click_40_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15)(44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyInformationComponent_Template_button_click_44_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyInformationComponent_Template_button_click_46_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, "companyInformation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, "companyName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, "companyRole"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, "AccountAdministrator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 22, "BusinessOwner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 24, "Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 26, "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 28, "companySector"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companySectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 30, "companySize"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companySizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.validateForm());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 32, "Continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.validateForm());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".company-info[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 450px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  color: white;\n  top: 18px;\n}\n\n.select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n  .rtl .fa-chevron-down.icon {\n  right: auto;\n  left: 20px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  color: #22204F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUoiLCJmaWxlIjoiY29tcGFueS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LWluZm97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgd2lkdGg6IDQ1MHB4O1xufVxuXG4uaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMThweDtcbn1cbi5zZWxlY3QsLmZvcm0tZ3JvdXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46Om5nLWRlZXAgLnJ0bCAuZmEtY2hldnJvbi1kb3duLmljb257XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMjBweDtcbn1cbi5wcmV2LC5uZXh0IHtcbiAgICBjb2xvcjogIzIyMjA0Rjtcbn0iXX0= */"] });


/***/ }),

/***/ 5743:
/*!*************************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/hyperpay/hyperpay.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HyperpayComponent": () => (/* binding */ HyperpayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subscription.service */ 5848);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);







function HyperpayComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("action", ctx_r0.redirectionToLocation, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

function HyperpayComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("action", ctx_r1.redirectionToLocation, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

function HyperpayComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("action", ctx_r2.redirectionToLocation, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
} // import Swal from 'sweetalert2';
// import { installmentControllerApi } from 'src/app/api/Installment_controller.api';


class HyperpayComponent {
  constructor(elementRef, subscriptionService, location, router) {
    this.elementRef = elementRef;
    this.subscriptionService = subscriptionService;
    this.location = location;
    this.router = router; // private language: string = navigator.language || 'en';

    this.redirectionToLocation = "";
    this.checkoutId = "";
    this.regEmail = "";
    this.placeOrder = false;
    this.canLeave = false;
    this.customerId = "";
    this.state = this.location.getState();
  }

  ngOnInit() {
    this.fullLocation = window.location;
    const pathSegments = window.location.pathname.split('/');
    this.customerId = localStorage.getItem('customer-id');
    this.paymentMethod = localStorage.getItem('paymentMethod');
    this.checkoutId = pathSegments[2];
    this.regEmail = pathSegments[3]; // this.m = pathSegments[3];

    this.popUpHyperScript(this.checkoutId);
  }

  popUpHyperScript(checkoutId) {
    this.redirectionToLocation = this.subscriptionService.tashgeelBaseUrl + `/subscription/final-step/${this.regEmail}`;
    const languageFromLocalStorage = localStorage.getItem('lang') || 'ar'; // Set locale based on language from localStorage

    const locale = languageFromLocalStorage.startsWith('ar') ? 'ar' : 'en'; // const redirectUrl = this.subscriptionService.tashgeelBaseUrl + '/subscription/final-step';
    // Dynamically load the language-specific script for HyperPay

    var wpwlOptionsLocale = document.createElement('script');
    wpwlOptionsLocale.type = 'text/javascript';
    wpwlOptionsLocale.textContent = `var wpwlOptions2 = { locale: "${locale}" }`;
    document.head.appendChild(wpwlOptionsLocale);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    this.elementRef.nativeElement.appendChild(script);
    document.head.appendChild(script); // Additional configuration for mandatory billing fields

    var wpwlOptionsScript = document.createElement('script');
    wpwlOptionsScript.type = 'text/javascript';
    wpwlOptionsScript.textContent = ` 
      var wpwlOptions = {
        billingAddress: {},
        mandatoryBillingFields: {
          country: true,
          state: true,
          city: true,
          postcode: true,
          street1: true,
          street2: false
        },
        locale: "${locale}"  ,
        redirectUrl: "${this.redirectionToLocation}",  
        threeDSecure: false, 
      }`;
    document.head.appendChild(wpwlOptionsScript); // Card validation script (same as before)

    var validationScript = document.createElement('script');
    validationScript.type = 'text/javascript';
    validationScript.textContent = ` 
      var wpwlOptions1 = {
        style: "card",
        onReady: function(e) {
          $('.wpwl-form-card').find('.wpwl-button-pay').on('click', function(e) {
            validateHolder(e);
          });
        },
        onBeforeSubmitCard: function(e) {
          return validateHolder(e);
        }
      }
      
      function validateHolder(e) {
        var holder = $('.wpwl-control-cardHolder').val();
        if (holder.trim().length < 2) {
          $('.wpwl-control-cardHolder').addClass('wpwl-has-error')
            .after('<div class="wpwl-hint wpwl-hint-cardHolderError">Invalid card holder</div>');
          return false;
        }
        return true;
      }`;
    document.head.appendChild(validationScript);
  }

  enableLeaving() {
    this.canLeave = true;
  } // checkId() {
  //   // this.checkoutId = this.checkoutIdOrder;
  //   if (this.checkoutIdOrder) {
  //     this.checkStatus();
  //   }
  // }
  // checkStatus() {
  //   let checkoutId = `${this.checkoutIdOrder}`;
  //   this.hyperPayHttp.hyperCheckoutStatus({ checkoutId }).subscribe((response) => {
  //     if (response.paymentStatus == 'FAILED') {
  //       this.successMsgAndLogOut();
  //     } else if (response.paymentStatus == 'PENDING') {
  //       this.successMsgAndLogOut();
  //     } else {
  //       this.successMsgAndLogOut();
  //     }
  //   });
  // }
  // checkOrderStatus() {
  //   this.installmentController.orderStatus().subscribe(
  //     (response: any) => {
  //       this.orderStatus = response.body.orderStatus;
  //     },
  //   );
  // }
  // successMsgAndLogOut() {
  //   let timerInterval: any;
  //   Swal.fire({
  //     icon: `success`,
  //     title: `Thank you for using SPLIT !`,
  //     html: `You will be back to Apple's website in <b></b> milliseconds.`,
  //     timer: 2000,
  //     timerProgressBar: true,
  //     didOpen: () => {
  //       Swal.showLoading();
  //       const b: any = Swal.getHtmlContainer()?.querySelector('b');
  //       timerInterval = setInterval(() => {
  //         b.textContent = Swal.getTimerLeft();
  //       }, 100);
  //       // this._removeQueryParams()
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval);
  //       // this._removeQueryParams()
  //     },
  //   }).then((result) => {
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       // this._removeQueryParams()
  //       console.log('closed With logout');
  //     }
  //   });
  // }


  handleOnClick() {
    this.placeOrder = true;
  }

}

HyperpayComponent.ɵfac = function HyperpayComponent_Factory(t) {
  return new (t || HyperpayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_subscription_service__WEBPACK_IMPORTED_MODULE_0__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

HyperpayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HyperpayComponent,
  selectors: [["app-hyperpay"]],
  decls: 5,
  vars: 3,
  consts: [[1, "container", "d-flex", "flex-column", "justify-content-center", "m-5"], [4, "ngIf"], ["data-brands", "MADA", 1, "paymentWidgets", 3, "action"], ["data-brands", "MASTER", 1, "paymentWidgets", 3, "action"], ["data-brands", "VISA", 1, "paymentWidgets", 3, "action"]],
  template: function HyperpayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HyperpayComponent_div_2_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HyperpayComponent_div_3_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HyperpayComponent_div_4_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutId && ctx.paymentMethod === "MADA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutId && ctx.paymentMethod === "MASTER_CARD");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutId && ctx.paymentMethod === "VISA");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: [".mat-card[_ngcontent-%COMP%] {\n  margin-top: 15rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(348.14deg, #08B2D8 14.93%, #005CC9 82.62%);\n  width: 1050px;\n  height: 100px;\n  top: 1245px;\n  left: 139px;\n  mix-blend-mode: normal;\n  -webkit-backdrop-filter: blur(52.5px);\n          backdrop-filter: blur(52.5px);\n  border-radius: 0px 0px 85px 85px;\n}\n\n.vector1[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  width: 70px;\n  height: 54px;\n}\n\n#card1[_ngcontent-%COMP%] {\n  height: 360px;\n  width: 420px;\n  border-radius: 21.2268562317px;\n  border: 1.86px solid transparent;\n  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #8fbce0, rgba(223, 239, 255, 0.81), #94c6ef) border-box;\n  -webkit-backdrop-filter: blur(52.5px);\n          backdrop-filter: blur(52.5px);\n  box-shadow: 6.0911850929px 6.0911850929px 21.3191490173px 0px #E9F4F8;\n  filter: drop-shadow(6.09119px 6.09119px 21.3191px #E9F4F8);\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 315px;\n  width: 420px;\n  border: 1.86px solid transparent;\n  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #8fbce0, rgba(223, 239, 255, 0.81), #94c6ef) border-box;\n  -webkit-backdrop-filter: blur(52.5px);\n          backdrop-filter: blur(52.5px);\n  box-shadow: 6.0911850929px 6.0911850929px 21.3191490173px 0px #E9F4F8;\n  filter: drop-shadow(6.09119px 6.09119px 21.3191px #E9F4F8);\n  border-radius: 21.2269px;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 17px;\n  line-height: 90%;\n  color: #09090B;\n}\n\n.mastercard[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 21.2268562317px;\n  border-bottom-right-radius: 21.2268562317px;\n}\n\n#card1[_ngcontent-%COMP%] {\n  height: 360px;\n  width: 420px;\n  border-radius: 21.2268562317px;\n  border: 1.86px solid transparent;\n  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #8fbce0, rgba(223, 239, 255, 0.81), #94c6ef) border-box;\n  -webkit-backdrop-filter: blur(52.5px);\n          backdrop-filter: blur(52.5px);\n  box-shadow: 6.0911850929px 6.0911850929px 21.3191490173px 0px #E9F4F8;\n  filter: drop-shadow(6.09119px 6.09119px 21.3191px #E9F4F8);\n}\n\n.vector[_ngcontent-%COMP%] {\n  width: 121px;\n  height: 54px;\n  border-radius: 0px;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  color: linear-gradient(90deg, rgb(34, 32, 79) 0%, rgb(114, 33, 91) 92%);\n}\n\n.timeline-with-icons[_ngcontent-%COMP%] {\n  border-left: 0.940575px dashed rgba(0, 0, 0, 0.51);\n  list-style: none;\n  height: 140px;\n}\n\n.timeline-with-icons[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.timeline-with-icons[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n.timeline-with-icons[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -48px;\n  background: linear-gradient(180deg, #027EE4 0%, #39CFDD 100%);\n  box-shadow: 0px 5.59461px 11.9885px rgba(155, 162, 163, 0.33);\n  color: white;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  accent-color: rgb(222, 109, 109);\n  height: 25px;\n  width: 25px;\n  background: white;\n  border: 1px solid rgb(212, 211, 211);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh5cGVycGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHRTtFQUNFLHNFQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUk7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3SUFBQTtFQUVBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxxRUFBQTtFQUNBLDBEQUFBO0FBUEo7O0FBZUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0lBQUE7RUFHQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EscUVBQUE7RUFDQSwwREFBQTtFQUNBLHdCQUFBO0FBZE47O0FBZ0NJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBN0JSOztBQXFDSTtFQUNFLDBDQUFBO0VBQ0EsMkNBQUE7QUFsQ047O0FBeUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0lBQUE7RUFFQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EscUVBQUE7RUFDQSwwREFBQTtBQXZDSjs7QUFnREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBN0NKOztBQW1FRTtFQUVFLGtCQUFBO0VBRUEsaUJBQUE7RUFFQSxlQUFBO0VBRUEsdUVBQUE7QUFwRUo7O0FBeUVFO0VBQ0Usa0RBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUF0RUo7O0FBMEVFO0VBQ0Usa0JBQUE7QUF2RUo7O0FBMEVFO0VBQ0UsY0FBQTtBQXZFSjs7QUEwRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZFSjs7QUFnRkU7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUE3RUoiLCJmaWxlIjoiaHlwZXJwYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcbiAgfVxuICBcbiAgLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OC4xNGRlZywgIzA4QjJEOCAxNC45MyUsICMwMDVDQzkgODIuNjIlKTtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdG9wOiAxMjQ1cHg7XG4gICAgbGVmdDogMTM5cHg7XG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTIuNXB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDg1cHggODVweDtcbiAgXG4gIFxuICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gIC52ZWN0b3IxIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICB9XG4gICAgXG4gICAgI2NhcmQxe1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDIxLjIyNjg1NjIzMTY4OTQ1M3B4O1xuICAgIGJvcmRlcjogMS44NnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpIHBhZGRpbmctYm94LFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjOGZiY2UwICwgcmdiYSgyMjMsIDIzOSwgMjU1LCAwLjgxKSwjOTRjNmVmKSBib3JkZXItYm94O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1Mi41cHgpO1xuICAgIGJveC1zaGFkb3c6IDYuMDkxMTg1MDkyOTI2MDI1cHggNi4wOTExODUwOTI5MjYwMjVweCAyMS4zMTkxNDkwMTczMzM5ODRweCAwcHggI0U5RjRGODtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDYuMDkxMTlweCA2LjA5MTE5cHggMjEuMzE5MXB4ICNFOUY0RjgpO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICAuY2FyZHtcbiAgICAgIGhlaWdodDogMzE1cHg7XG4gICAgICB3aWR0aDogNDIwcHg7XG4gICAgICBib3JkZXI6IDEuODZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpIHBhZGRpbmctYm94LFxuICAgICAgLy8gbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM5YmMyZTIgLCByZ2JhKDIyOCwgMjQxLCAyNTUsIDAuODEpLCM5NGM2ZWYpIGJvcmRlci1ib3g7XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzhmYmNlMCAsIHJnYmEoMjIzLCAyMzksIDI1NSwgMC44MSksIzk0YzZlZikgYm9yZGVyLWJveDtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1Mi41cHgpO1xuICAgICAgYm94LXNoYWRvdzogNi4wOTExODUwOTI5MjYwMjVweCA2LjA5MTE4NTA5MjkyNjAyNXB4IDIxLjMxOTE0OTAxNzMzMzk4NHB4IDBweCAjRTlGNEY4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg2LjA5MTE5cHggNi4wOTExOXB4IDIxLjMxOTFweCAjRTlGNEY4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIxLjIyNjlweDtcbiAgICAgIFxuICAgICAgfVxuICAgICAgXG4gIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICBcbiAgIFxuICAgIFxuICAgIFxuICAgXG4gICAgXG4gICBcbiAgICBcbiAgICAudG90YWxBbW91bnR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA5MCU7XG4gICAgICAgIGNvbG9yOiAjMDkwOTBCO1xuICAgICAgfVxuICAgIFxuICBcbiAgICBcbiAgICBcbiAgXG4gICAgXG4gICAgLm1hc3RlcmNhcmR7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMS4yMjY4NTYyMzE2ODk0NTNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMS4yMjY4NTYyMzE2ODk0NTNweDtcbiAgICB9XG4gICAgXG4gIFxuICBcbiAgICAvLy8vLy8vLy8vLy8vXG4gIFxuICAjY2FyZDEge1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxLjIyNjg1NjIzMTY4OTQ1M3B4O1xuICAgIGJvcmRlcjogMS44NnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpIHBhZGRpbmctYm94LFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGZiY2UwLCByZ2JhKDIyMywgMjM5LCAyNTUsIDAuODEpLCAjOTRjNmVmKSBib3JkZXItYm94O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1Mi41cHgpO1xuICAgIGJveC1zaGFkb3c6IDYuMDkxMTg1MDkyOTI2MDI1cHggNi4wOTExODUwOTI5MjYwMjVweCAyMS4zMTkxNDkwMTczMzM5ODRweCAwcHggI0U5RjRGODtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDYuMDkxMTlweCA2LjA5MTE5cHggMjEuMzE5MXB4ICNFOUY0RjgpO1xuICBcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICAudmVjdG9yIHtcbiAgICB3aWR0aDogMTIxcHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIC50b3RhbCB7XG4gIFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgY29sb3I6bGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMzQsIDMyLCA3OSkgMCUsIHJnYigxMTQsIDMzLCA5MSkgOTIlKTtcbiAgXG4gIH1cbiAgXG4gIFxuICAudGltZWxpbmUtd2l0aC1pY29ucyB7XG4gICAgYm9yZGVyLWxlZnQ6IDAuOTQwNTc1cHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC41MSk7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICBcbiAgfVxuICBcbiAgLnRpbWVsaW5lLXdpdGgtaWNvbnMgLnRpbWVsaW5lLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnRpbWVsaW5lLXdpdGgtaWNvbnMgLnRpbWVsaW5lLWl0ZW06YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAudGltZWxpbmUtd2l0aC1pY29ucyAudGltZWxpbmUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00OHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMjdFRTQgMCUsICMzOUNGREQgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDUuNTk0NjFweCAxMS45ODg1cHggcmdiYSgxNTUsIDE2MiwgMTYzLCAwLjMzKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgICBhY2NlbnQtY29sb3I6IHJnYigyMjIsIDEwOSwgMTA5KTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjExLCAyMTEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAiXX0= */"]
});

/***/ }),

/***/ 6591:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/payment-card/payment-card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentCardComponent": () => (/* binding */ PaymentCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subscription.service */ 5848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class PaymentCardComponent {
    constructor(fb, router, activatedRoute, subscriptionService, translate) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subscriptionService = subscriptionService;
        this.translate = translate;
        this.changeSubPackValue = () => { };
    }
    ngOnInit() {
        this.checkoutId = this.activatedRoute.snapshot.queryParamMap.get('id');
        const regEmail = this.activatedRoute.snapshot.params['regEmail'];
        console.log("checkout: " + this.checkoutId);
        const dto = {
            checkoutId: this.checkoutId,
            regLang: this.translate.currentLang,
            subscriptionAdminEmail: regEmail
        };
        this.updateResource(dto).subscribe(response => {
            console.log('Update successful', response);
        }, error => {
            console.error('Error updating resource', error);
        });
    }
    scrollToTop() {
        window.scrollTo(0, 50);
    }
    save() {
        this.router.navigateByUrl('/auth/login');
    }
    updateResource(dto) {
        return this.subscriptionService.hyperCheckoutStatus(dto);
    }
}
PaymentCardComponent.ɵfac = function PaymentCardComponent_Factory(t) { return new (t || PaymentCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_subscription_service__WEBPACK_IMPORTED_MODULE_0__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
PaymentCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentCardComponent, selectors: [["app-payment-card"]], inputs: { changeSubPackValue: "changeSubPackValue" }, decls: 8, vars: 7, consts: [[1, "d-flex", "justify-content-center"], [1, "payment", 3, "formGroup"], [1, "heading"], [1, "btn", "btn-primary", "w-100", "py-0-8", "mb-2", 3, "click"]], template: function PaymentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentCardComponent_Template_button_click_5_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "Payment done succssfully"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "Go to login page"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".payment[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 450px;\n}\n\n.payment[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.shared-container[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n\n.heavy[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  color: white;\n  top: 18px;\n}\n\n.select[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.fw-lighter[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: xx-small;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\ninput[_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n\n  .rtl .fa-chevron-down.icon {\n  right: auto;\n  left: 20px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksaURBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0kscUJBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtBQVdKIiwiZmlsZSI6InBheW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbn1cbi5wYXltZW50ID4gZGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uc2hhcmVkLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxNHB4O1xufVxuLmhlYXZ5e1xuICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xufVxuLmljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDE4cHg7XG59XG4uc2VsZWN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mdy1saWdodGVye1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmlucHV0IHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIH1cbjo6bmctZGVlcCAucnRsIC5mYS1jaGV2cm9uLWRvd24uaWNvbntcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAyMHB4O1xufVxuLnByZXYsLm5leHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 6069:
/*!***********************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/payment/payment.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/auth.service */ 7503);
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subscription.service */ 5848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);









function PaymentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.errMsg));
} }
function PaymentComponent_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.label);
} }
function PaymentComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_div_71_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.prevSlide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return ["/terms-and-conditions"]; };
const _c1 = function () { return ["/privacy-and-policy"]; };
class PaymentComponent {
    constructor(activatedRoute, router, authService, subscriptionService, translate) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this.subscriptionService = subscriptionService;
        this.translate = translate;
        this.package = null;
        this.routerDetails = null;
        this.paymentType = "";
        this.acceptTerms = false;
        this.redircetFromPage = "SUBSCRIPTION";
        this.save = () => { };
        this.changePaymentValue = () => { };
        // @Input() changePaymentType: string ='' ;
        this.amount = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        // @Output() changePaymentType = new EventEmitter<string>();
        this.activeUsersCounter = '0';
        this.inactiveUsersCounter = '0';
        this.packagePrice = 0;
        this.paymentTypes = [
            { value: 'MADA', label: 'MADA' },
            { value: 'VISA', label: 'VISA' },
            { value: 'MASTER_CARD', label: 'MASTERCARD' }
        ];
        this.selectedPaymentType = 'MADA';
    }
    ngOnInit() {
        const url = this.router.url;
        let paymentData = this.authService.paymentData;
        if (paymentData == null) {
            paymentData = JSON.parse(localStorage.getItem("paymentData"));
        }
        else {
            localStorage.setItem("paymentData", JSON.stringify(paymentData));
        }
        if (url.includes('/auth/payment') && paymentData != null) {
            this.redircetFromPage = "LOGIN";
            this.routerDetails = {};
            this.routerDetails.period = paymentData.period;
            this.package = {
                packageNameAr: paymentData.packageNameAr,
                packageNameEn: paymentData.packageNameEn
            };
            // this.package.packageName = "TEST";
            this.packagePrice = paymentData.totalCost;
            this.activeUsersCounter = paymentData.availableActiveUsers;
            this.inactiveUsersCounter = paymentData.availableInactiveUsers;
        }
        else if (url.includes('/subscription')) {
            this.activeUsersCounter = this.activatedRoute.snapshot.queryParamMap.get('activeUsers') || '0';
            this.inactiveUsersCounter = this.activatedRoute.snapshot.queryParamMap.get('unactiveUsers') || '0';
            this.activatedRoute.queryParams.subscribe(params => {
                this.activeUsersCounter = params['activeUsers'] || '0';
                this.inactiveUsersCounter = params['unactiveUsers'] || '0';
            });
        }
        else {
            this.router.navigateByUrl('/home');
        }
    }
    calcPackagePrice() {
        let packageOnlyPrice = 0;
        let activeUserPrice = 0;
        let inactiveUserPrice = 0;
        if (this.routerDetails?.period == "yearly") {
            packageOnlyPrice = (this.package?.yearlyPackagePrice) ? this.package.yearlyPackagePrice : 0;
            activeUserPrice = (this.package?.activeUserPriceParYears) ? this.package.activeUserPriceParYears : 0;
            inactiveUserPrice = (this.package?.inActiveUserPriceParYear) ? this.package.inActiveUserPriceParYear : 0;
        }
        else {
            packageOnlyPrice = (this.package?.monthlyPackagePrice) ? this.package.monthlyPackagePrice : 0;
            activeUserPrice = (this.package?.activeUserPriceParMonths) ? this.package.activeUserPriceParMonths : 0;
            inactiveUserPrice = (this.package?.inActiveUserPriceParMonths) ? this.package.inActiveUserPriceParMonths : 0;
        }
        this.packagePrice = packageOnlyPrice + (activeUserPrice * Number(this.activeUsersCounter)) + (inactiveUserPrice * Number(this.inactiveUsersCounter));
    }
    getPackagePrice() {
        if (this.packagePrice == 0) {
            this.calcPackagePrice();
        }
        return this.packagePrice;
    }
    getPackageVat() {
        return (this.packagePrice * 0.15).toFixed(2);
    }
    getPackageWithVat() {
        return (this.packagePrice * 1.15).toFixed(2);
    }
    subscribe() {
        const url = this.router.url;
        if (url.includes('/auth/payment')) {
            this.goToPaymentPage();
        }
        else if (url.includes('/subscription')) {
            this.amount.emit(String(this.getPackageWithVat()));
            this.save();
        }
    }
    onChange(event) {
        localStorage.setItem('paymentMethod', this.paymentType);
        console.log('Selected Value: paymentMethod', this.paymentType);
    }
    isFormInValid() {
        return !(this.acceptTerms && this.paymentType);
    }
    goToPaymentPage() {
        const paymentData = this.authService.paymentData;
        localStorage.setItem('paymentMethod', this.paymentType);
        let dto = {
            amount: paymentData.totalCost,
            paymentCardType: this.paymentType,
            packageId: paymentData.packageId,
            numberOfActiveUsers: paymentData.availableActiveUsers,
            numberOfInActiveUsers: paymentData.availableInactiveUsers,
            period: paymentData.period,
            merchantTransactionId: paymentData.merchantTransactionId,
            name: paymentData.companyName,
            email: paymentData.email,
        };
        this.subscriptionService.hyperPayCheckoutID(dto)
            .subscribe((res) => {
            const checkoutId = res.body.checkoutId;
            localStorage.removeItem("paymentData");
            this.router.navigateByUrl(`/payment/${checkoutId}/${paymentData.email}`);
        });
    }
    getPakcageName() {
        return this.translate.currentLang == "ar" ? this.package?.packageNameAr : this.package?.packageNameEn;
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_subscription_service__WEBPACK_IMPORTED_MODULE_1__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], inputs: { nextSlide: "nextSlide", prevSlide: "prevSlide", errMsg: "errMsg", package: "package", routerDetails: "routerDetails", save: "save", changePaymentValue: "changePaymentValue" }, outputs: { paymentType: "paymentType", amount: "amount" }, decls: 72, vars: 65, consts: [[1, "d-flex", "justify-content-center"], [1, "payment"], [1, "heading"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "confirmPass", "name", "confirmPass", "id", "confirmPass", 1, "tshgheel-input", 3, "disabled", "placeholder"], [1, "card", "d-flex", "flex-column", "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "fw-lighter"], [1, "card-footer", "d-flex", "justify-content-between"], [1, "heavy"], [1, "select"], [1, "tshgheel-input", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check", "text-start", "d-flex", "align-items-center"], ["type", "checkbox", "id", "flexCheckDefault", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "flexCheckDefault", 1, "form-check-label", 2, "margin-left", "12px"], [1, "fw-bold", "heavy", 3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", "w-100", "py-0-8", "mb-2", 3, "disabled", "click"], ["class", "d-flex justify-content-center control-buttons mt-4", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [3, "value"], [1, "d-flex", "justify-content-center", "control-buttons", "mt-4"], ["type", "button", 1, "btn", "prev", 3, "click"], [1, "fa-solid", "fa-chevron-left"], ["type", "button", "disabled", "", 1, "btn", "next"], [1, "fa-solid", "fa-chevron-right"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PaymentComponent_div_7_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "0.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 8)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 10)(49, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 12)(53, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_select_ngModelChange_53_listener($event) { return ctx.paymentType = $event; })("change", function PaymentComponent_Template_select_change_53_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, PaymentComponent_option_54_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 15)(56, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_56_listener($event) { return ctx.acceptTerms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_68_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, PaymentComponent_div_71_Template, 5, 0, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 29, "PAYMENT"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 31, ctx.routerDetails == null ? null : ctx.routerDetails.period), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 33, "PromoCode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 35, ctx.getPakcageName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.getPackagePrice(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 37, "SAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 39, "Discount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 41, "SAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 43, "VAT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.getPackageVat(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 45, "SAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 47, ctx.getPakcageName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.getPackageWithVat(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 49, "SAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 51, "PaymentType"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.paymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paymentTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.acceptTerms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 53, "I have read and agree to the"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](63, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 55, "terms and conditions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 57, "of use and"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](64, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 59, "the privacy and policy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isFormInValid());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 61, "Continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.redircetFromPage != "LOGIN");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".payment[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 450px;\n}\n\n.payment[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.shared-container[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n\n.heavy[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  color: white;\n  top: 18px;\n}\n\n.select[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.fw-lighter[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: xx-small;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n  .rtl .form-check {\n  text-align: right !important;\n}\n\n  .rtl .form-check .form-check-label {\n  margin-right: 35px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  color: white;\n}\n\nselect.tshgheel-input[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #fff !important;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGlEQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFKQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLHFCQUFBO0FBUUo7O0FBTEE7RUFDSSw0QkFBQTtBQVFKOztBQVBJO0VBQ0ksa0JBQUE7QUFTUjs7QUFMQTtFQUNJLFlBQUE7QUFRSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQVFKIiwiZmlsZSI6InBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG59XG4ucGF5bWVudCA+IGRpdntcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnNoYXJlZC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTRweDtcbn1cbi5oZWF2eXtcbiAgICBmb250LWZhbWlseTogdHNoZ2VlbC1oZWF2eSwgJ1RhamF3YWwnLCBzYW5zLXNlcmlmLDtcbn1cbi5pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdG9wOiAxOHB4O1xufVxuLnNlbGVjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZnctbGlnaHRlcntcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xufVxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjo6bmctZGVlcCAucnRsIC5mb3JtLWNoZWNre1xuICAgIHRleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudDtcbiAgICAuZm9ybS1jaGVjay1sYWJlbHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICAgIH1cblxufVxuLnByZXYsLm5leHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuc2VsZWN0LnRzaGdoZWVsLWlucHV0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 5848:
/*!******************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/subscription.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionService": () => (/* binding */ SubscriptionService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class SubscriptionService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.tashgeelBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tashgeelBaseUrl;
    }
    addNewSubscription(subscriptionDTO) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}subscription/save`, subscriptionDTO);
    }
    hyperCheckoutStatus(checkOrderStatus) {
        return this.http.put(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}subscription/hyperpay/checkout`, checkOrderStatus);
    }
    hyperPayCheckoutID(paymentDto) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}subscription/hyperpay/checkout`, paymentDto);
    }
}
SubscriptionService.ɵfac = function SubscriptionService_Factory(t) { return new (t || SubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SubscriptionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubscriptionService, factory: SubscriptionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8860:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/subscription/subscription.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionComponent": () => (/* binding */ SubscriptionComponent)
/* harmony export */ });
/* harmony import */ var _auth_registration_components_reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/registration/components/reg-wizard/wizard */ 2020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _package_details_package_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package-details/package-details.service */ 9036);
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subscription.service */ 5848);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ 7503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payment/payment.component */ 6069);
/* harmony import */ var _auth_registration_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/registration/components/user-info/user-info.component */ 8233);
/* harmony import */ var _auth_registration_components_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/registration/components/company-info/company-info.component */ 5657);











class SubscriptionComponent {
    // changePaymentType: string | null ='';
    constructor(activateRoute, packageDetailsService, subscriptionSevice, router, authService, translate) {
        this.activateRoute = activateRoute;
        this.packageDetailsService = packageDetailsService;
        this.subscriptionSevice = subscriptionSevice;
        this.router = router;
        this.authService = authService;
        this.translate = translate;
        this.amount = null;
        this.acceptTermsAndConditions = false;
        this.companyRegister = new _auth_registration_components_reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__.CompanyRegister();
        this.subscriptionDTO = {
            subscription: {
                subscriptionId: null,
                fname: null,
                lname: null,
                email: null,
                mobile: null,
                companyName: null,
                vatNumber: null,
                companyRole: null,
                companySector: null,
                companySize: null,
                password: null,
                status: true,
                logo: null,
            },
            subscriptionPackage: {
                subscriptionPackageId: null,
                pk: null,
                subscription: null,
                subscriptionType: 'NewSubscriber',
                subscriptionPeriod: null,
                sDate: null,
                eDate: null,
                activeUser: null,
                inactiveUser: null,
                paymentWay: '',
                paymentValue: null,
                status: true,
            },
            changePaymentType: ''
        };
        this.routerDetails = {
            packageId: null,
            period: null,
            activeUsers: null,
            unactiveUsers: null,
        };
        this.packageDetails = null;
        this.currentSlide = 1;
        this.nextSlide = () => {
            this.currentSlide++;
            this.errMsg = "";
            window.scrollTo(0, 0);
        };
        this.prevSlide = () => {
            this.currentSlide--;
            this.errMsg = "";
            window.scrollTo(0, 0);
        };
        this.changeUserValue = (key, $event) => {
            let value = $event.target.value;
            if (value == 'null') {
                value = null;
            }
            this.companyRegister.companyReqistrationReqDto.authPersonDto[key] = value;
        };
        this.changeCompanyValue = (key, $event) => {
            let value = $event.target.value;
            if (value == 'null') {
                value = null;
            }
            this.companyRegister.companyReqistrationReqDto[key] = value;
        };
        this.save = () => {
            console.log('paymentMethodsave', localStorage.getItem('paymentMethod') /* this.changePaymentType*/);
            this.companyRegister.saveSubscriptionDTO.subscriptionDTO.paymentCardType = localStorage.getItem('paymentMethod'); // this.changePaymentType
            this.authService.register(this.companyRegister).subscribe((response) => {
                console.log(response);
                let checkoutId = response.body.saveSubscriptionDTO.checkoutIdResDto.checkoutId;
                //  localStorage.setItem('checkoutId',checkoutId)
                this.router.navigate([`/payment/${checkoutId}/${this.companyRegister.companyReqistrationReqDto.authPersonDto.email}`]);
                // this.router.navigateByUrl('/auth/login');
            }, (err) => {
                const errMsg = err.error.body;
                if (errMsg == "Company name have already been used. please try another") {
                    this.goToSlide(2);
                    this.errMsg = errMsg;
                }
                else if (errMsg == "Email have already been used, please try another") {
                    this.goToSlide(1);
                    this.errMsg = errMsg;
                }
            });
        };
        this.changeSubValue = (key, $event) => {
            ;
            let value = $event.target.value;
            if (value == 'null') {
                value = null;
            }
            this.subscriptionDTO.subscription[key] = value;
        };
        this.changeSubPackValue = (key, $event) => {
            let value = $event.target.value;
            if (value == 'null') {
                value = null;
            }
            this.subscriptionDTO.subscriptionPackage[key] = value;
        };
        // changePaymentType = (key, $event) => {
        //   console.log('key', key);
        //   console.log('Event', $event);
        //   let value = $event.target.value;
        //   if (value == 'null') {
        //     value = null;
        //   }
        //   console.log('Selected Value from susb:', value);
        //   this.subscriptionDTO.paymentCardType[key] = value;
        //   // this.setSubscriptionDTOInitData();
        // };
        this.validateForm = () => {
            ;
            const carouselInner = document.querySelector('.carousel-inner');
            const activeItem = carouselInner.querySelector('.carousel-item.active');
            const activeIndex = Array.from(carouselInner.children).indexOf(activeItem);
            switch (activeIndex) {
                case 0:
                    return this.validateForUserInformation();
                case 1:
                    return this.validateForCompanyInformation();
                case 2:
                    return this.validateFormForPayment();
            }
            return false;
        };
        this.validateForCompanyInformation = () => {
            if (this.subscriptionDTO.subscription.companyName == null ||
                this.subscriptionDTO.subscription.companyRole == null ||
                this.subscriptionDTO.subscription.companySector == null ||
                this.subscriptionDTO.subscription.companySize == null) {
                return true;
            }
            return false;
        };
        this.validateForUserInformation = () => {
            if (this.subscriptionDTO.subscription.fname == null ||
                this.subscriptionDTO.subscription.lname == null ||
                this.subscriptionDTO.subscription.email == null ||
                this.subscriptionDTO.subscription.mobile == null ||
                this.subscriptionDTO.subscription.password == null) {
                return true;
            }
            return false;
        };
        this.acceptTerms = ($event) => {
            this.acceptTermsAndConditions = $event.target.value;
        };
    }
    ngOnInit() {
        this.setRouterDetails();
        this.getPackageDetails();
        // this.changePaymentType = localStorage.getItem('paymentMethod');
        console.log('paymentMethod', /*this.changePaymentType*/ localStorage.getItem('paymentMethod'));
    }
    goToSlide(index) {
        this.currentSlide = index;
    }
    setRouterDetails() {
        let keys = Object.keys(this.routerDetails);
        keys.forEach((key) => {
            this.routerDetails[key] =
                this.activateRoute.snapshot.queryParamMap.get(key);
        });
        this.setSubscriptionDTOInitData();
    }
    setSubscriptionDTOInitData() {
        (this.companyRegister.saveSubscriptionDTO.subscriptionDTO.packageId =
            this.routerDetails.packageId),
            (this.companyRegister.saveSubscriptionDTO.subscriptionDTO.period =
                this.routerDetails.period == 'yearly' ? 'ANNUAL' : 'MONTHLY');
        this.companyRegister.saveSubscriptionDTO.subscriptionInformationDTO.availableActiveUsers =
            this.routerDetails.activeUsers;
        this.companyRegister.saveSubscriptionDTO.subscriptionInformationDTO.availableInactiveUsers =
            this.routerDetails.unactiveUsers;
        this.companyRegister.saveSubscriptionDTO.subscriptionDTO.paymentCardType = localStorage.getItem('paymentMethod'); // this.changePaymentType// Logs the selected value when changed
    }
    getPackageDetails() {
        this.packageDetailsService
            .getPackageDetails(this.routerDetails.packageId)
            .subscribe((response) => {
            this.packageDetails = response.body;
        }, (err) => { });
    }
    setAmount(event) {
        this.companyRegister.saveSubscriptionDTO.checkoutIdResDto.amount = event;
    }
    setPaymentType(event) {
        this.subscriptionDTO.subscriptionPackage.paymentType = event;
    }
    validateFormForPayment() {
        return !this.acceptTermsAndConditions;
    }
    isFirstOrLast(type) {
        const carouselInner = document.querySelector('.carousel-inner');
        const activeItem = carouselInner.querySelector('.carousel-item.active');
        const activeIndex = Array.from(carouselInner.children).indexOf(activeItem);
        if (type == 'first') {
            return activeIndex == 0;
        }
        return activeIndex == 3;
    }
    scrollToTop() {
        window.scrollTo(0, 50);
    }
    handleEmailEmitted(event) {
        this.companyRegister.companyReqistrationReqDto.authPersonDto.email = event;
    }
    setEmail() {
        this.emailFromUserInfo = this.companyRegister.companyReqistrationReqDto.authPersonDto.email;
        return this.emailFromUserInfo;
    }
    onFullMobileNumberReceived(phoneNumber) {
        this.companyRegister.companyReqistrationReqDto.authPersonDto.mobileNumber = phoneNumber;
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(t) { return new (t || SubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_package_details_package_details_service__WEBPACK_IMPORTED_MODULE_1__.PackageDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_subscription_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService)); };
SubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 11, vars: 24, consts: [[1, "container"], ["id", "carouselExampleFade", 1, "carousel", "slide"], ["carousel", ""], ["data-bs-touch", "false", 1, "carousel-inner", "mt-5"], [1, "carousel-item", "item1", 3, "ngClass"], [3, "nextSlide", "prevSlide", "errMsg", "validateForm", "changeSubValue", "email", "fullMobileNumber"], [1, "carousel-item", "item2", 3, "ngClass"], [3, "nextSlide", "prevSlide", "errMsg", "save", "validateForm", "changeSubValue", "email"], [1, "carousel-item", "item3", 3, "ngClass"], [3, "nextSlide", "prevSlide", "errMsg", "save", "changeSubPackValue", "changeAcceptTerms", "package", "routerDetails", "amount"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1, 2)(4, "div", 3)(5, "div", 4)(6, "app-user-info", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("email", function SubscriptionComponent_Template_app_user_info_email_6_listener($event) { return ctx.handleEmailEmitted($event); })("fullMobileNumber", function SubscriptionComponent_Template_app_user_info_fullMobileNumber_6_listener($event) { return ctx.onFullMobileNumberReceived($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-company-info", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "app-payment", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("amount", function SubscriptionComponent_Template_app_payment_amount_10_listener($event) { return ctx.setAmount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.currentSlide === 1 ? "active" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nextSlide", ctx.nextSlide)("prevSlide", ctx.prevSlide)("errMsg", ctx.errMsg)("validateForm", ctx.validateForUserInformation)("changeSubValue", ctx.changeUserValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.currentSlide === 2 ? "active" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nextSlide", ctx.nextSlide)("prevSlide", ctx.prevSlide)("nextSlide", ctx.nextSlide)("errMsg", ctx.errMsg)("save", ctx.save)("validateForm", ctx.validateForCompanyInformation)("changeSubValue", ctx.changeCompanyValue)("email", ctx.setEmail());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.currentSlide === 3 ? "active" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nextSlide", ctx.nextSlide)("prevSlide", ctx.prevSlide)("errMsg", ctx.errMsg)("save", ctx.save)("changeSubPackValue", ctx.changeSubPackValue)("changeAcceptTerms", ctx.acceptTerms)("package", ctx.packageDetails)("routerDetails", ctx.routerDetails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__.PaymentComponent, _auth_registration_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__.UserInfoComponent, _auth_registration_components_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_6__.CompanyInfoComponent], styles: ["#bg-shared[_ngcontent-%COMP%]::before {\n  background-image: url('background.png') !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: white;\n}\n\n.control-buttons[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.control-buttons[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]::before, .control-buttons[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]::after {\n  content: \"|\";\n}\n\n  .rtl .control-buttons {\n  flex-direction: row-reverse;\n}\n\n  .rtl .control-buttons .prev::before,   .rtl .control-buttons .next::after {\n  content: \"\" !important;\n}\n\n  .rtl .control-buttons .prev::after,   .rtl .control-buttons .next::before {\n  content: \"|\" !important;\n}\n\n.carousel-item.item4.active[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.carousel-item.item4.active[_ngcontent-%COMP%]   .btn.next[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .item2.active[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .item2.active[_ngcontent-%COMP%]   .btn.next[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .item3.active[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .item3.active[_ngcontent-%COMP%]   .btn.next[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.carousel-item.item1.active[_ngcontent-%COMP%]    + .d-flex[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFFSSxtQkFBQTtBQUdKOztBQUZJO0VBQ0ksWUFBQTtBQUlSOztBQUFJO0VBQ0ksMkJBQUE7QUFHUjs7QUFGUTtFQUNJLHNCQUFBO0FBSVo7O0FBRlE7RUFDSSx1QkFBQTtBQUlaOztBQUVJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDUjs7QUFDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUlRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFEWjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUZKIiwiZmlsZSI6InN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZy1zaGFyZWQ6OmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQucG5nXCIpICFpbXBvcnRhbnQ7ICAgXG59XG4uY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRyb2wtYnV0dG9uc3tcbiAgICAvLyBoZWlnaHQ6IDMwdmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAucHJldjo6YmVmb3JlLC5uZXh0OjphZnRlcntcbiAgICAgICAgY29udGVudDogJ3wnO1xuICAgIH1cbn1cbjo6bmctZGVlcCAucnRsIHtcbiAgICAuY29udHJvbC1idXR0b25ze1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIC5wcmV2OjpiZWZvcmUsLm5leHQ6OmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogJycgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucHJldjo6YWZ0ZXIsLm5leHQ6OmJlZm9yZXtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICd8JyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2Fyb3VzZWwtaXRlbS5pdGVtNC5hY3RpdmV7XG4gICAgLmJ0bi5wcmV2e1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjdXJzb3I6cG9pbnRlclxuICAgIH1cbiAgICAuYnRuLm5leHR7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG59XG4uY2Fyb3VzZWwtaXRlbXtcbiAgICAuaXRlbTIuYWN0aXZlLC5pdGVtMy5hY3RpdmV7XG4gICAgICAgIC5idG4ucHJldiwuYnRuLm5leHR7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jYXJvdXNlbC1pdGVtLml0ZW0xLmFjdGl2ZSArIC5kLWZsZXggLmJ0bi5wcmV2e1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl19 */"] });


/***/ }),

/***/ 9879:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/Subscription-pages/user-information/user-information.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInformationComponent": () => (/* binding */ UserInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class UserInformationComponent {
    constructor(fb) {
        this.fb = fb;
        this.changeSubValue = () => { };
        this.validateForm = () => { };
        this.submitted = false;
        this.userData = {
            fname: null,
            lname: null,
            email: null,
            phoneNumber: null,
            password: null,
            confirmPass: null
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            confirmPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
    }
    invalidValidation(elment) {
        return this.form.get(elment)?.invalid;
    }
    touchedValidation(elment) {
        return this.form.get(elment)?.touched;
    }
    scrollToTop() {
        window.scrollTo(0, 50);
    }
}
UserInformationComponent.ɵfac = function UserInformationComponent_Factory(t) { return new (t || UserInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
UserInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserInformationComponent, selectors: [["app-user-information"]], inputs: { changeSubValue: "changeSubValue", validateForm: "validateForm" }, decls: 32, vars: 42, consts: [[1, "d-flex", "justify-content-center"], [1, "user-information"], [1, "heading"], ["autocomplete", "off", 3, "formGroup"], [1, "form-group"], ["type", "text", "name", "fname", "id", "fname", "formControlName", "fname", 1, "tshgheel-input", 3, "placeholder", "change"], ["type", "text", "name", "lname", "id", "lname", "formControlName", "lname", 1, "tshgheel-input", 3, "placeholder", "change"], ["type", "email", "name", "email", "id", "email", "formControlName", "email", 1, "tshgheel-input", 3, "placeholder", "change"], ["type", "text", "name", "phoneNumber", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "tshgheel-input", 3, "ngModel", "placeholder", "change", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", 1, "tshgheel-input", 3, "ngModel", "placeholder", "change", "ngModelChange"], ["type", "password", "name", "confirmPass", "id", "confirmPass", "formControlName", "confirmPass", 1, "tshgheel-input", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "next", 1, "btn", "btn-primary", "w-100", "py-0-8", 3, "disabled", "click"], [1, "d-flex", "justify-content-center", "control-buttons", "mt-4"], ["disabled", "", "type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "prev", 1, "btn", "prev"], [1, "fa-solid", "fa-chevron-left"], ["type", "button", "data-bs-target", "#carouselExampleFade", "data-bs-slide", "next", 1, "btn", "next", 3, "disabled", "click"], [1, "fa-solid", "fa-chevron-right"]], template: function UserInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3)(6, "div", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserInformationComponent_Template_input_change_7_listener($event) { return ctx.changeSubValue("fname", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserInformationComponent_Template_input_change_10_listener($event) { return ctx.changeSubValue("lname", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserInformationComponent_Template_input_change_13_listener($event) { return ctx.changeSubValue("email", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserInformationComponent_Template_input_change_16_listener($event) { return ctx.changeSubValue("mobile", $event); })("ngModelChange", function UserInformationComponent_Template_input_ngModelChange_16_listener($event) { return ctx.userData.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserInformationComponent_Template_input_change_19_listener($event) { return ctx.changeSubValue("password", $event); })("ngModelChange", function UserInformationComponent_Template_input_ngModelChange_19_listener($event) { return ctx.userData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4)(22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_Template_input_ngModelChange_22_listener($event) { return ctx.userData.confirmPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserInformationComponent_Template_button_click_24_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12)(28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserInformationComponent_Template_button_click_30_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 26, "USERINFORMATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("fname") && ctx.touchedValidation("fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 28, "fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("lname") && ctx.touchedValidation("lname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 30, "lname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("email") && ctx.touchedValidation("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 32, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("phoneNumber") && ctx.touchedValidation("phoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 34, "phoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("password") && ctx.touchedValidation("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 36, "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("confirmPass") && ctx.touchedValidation("confirmPass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 38, "confirmPass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.confirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 40, "Continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.validateForm());
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_2__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".user-information[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 500px;\n}\n\n.user-information[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSiIsImZpbGUiOiJ1c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaW5mb3JtYXRpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuLnVzZXItaW5mb3JtYXRpb24gLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5wcmV2LC5uZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 7503:
/*!********************************************!*\
  !*** ./src/app/pages/auth/auth.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.paymentData = null;
    }
    register(regInfo) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}company/register`, regInfo);
    }
    login(loginInfo) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.authenticationServiceBaseUrl}signin`, loginInfo);
    }
    renwal(loginInfo) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.authenticationServiceBaseUrl}renwal`, loginInfo);
    }
    forgetPassword(username) {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}forget-password?username=${username}`);
    }
    forgetPass(username) {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.authenticationServiceBaseUrl}forget-password?username=${username}`);
    }
    verifyEmail(token) {
        return this.http.put(`${this.apiServerUrl.apiBaseUrl + this.apiServerUrl.authenticationServiceBaseUrl}verify`, token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4626:
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/confirm-login/confirm-login.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmLoginComponent": () => (/* binding */ ConfirmLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class ConfirmLoginComponent {
    constructor() {
        this.continueBtn = () => { };
        this.logoutFromPreviousSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.toggleConfirmLoginComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    submit() {
        this.logoutFromPreviousSession.emit(true);
        this.continueBtn();
    }
    cancel() {
        this.toggleConfirmLoginComponent.emit();
    }
}
ConfirmLoginComponent.ɵfac = function ConfirmLoginComponent_Factory(t) { return new (t || ConfirmLoginComponent)(); };
ConfirmLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmLoginComponent, selectors: [["app-confirm-login"]], inputs: { continueBtn: "continueBtn" }, outputs: { logoutFromPreviousSession: "logoutFromPreviousSession", toggleConfirmLoginComponent: "toggleConfirmLoginComponent" }, decls: 22, vars: 18, consts: [[1, "card"], [1, "card-header", "font-weight-bold"], [1, "text-warning"], [1, "card-body"], [1, "h5"], [1, "card-footer", "p-2", "text-center"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "mx-2", 3, "click"]], template: function ConfirmLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "strong")(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmLoginComponent_Template_button_click_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmLoginComponent_Template_button_click_19_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "WARNING_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "ACTIVE_SESSION_DETECTED"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "WARNING_MESSAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "LOGOUT_INSTRUCTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, "CONTINUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 16, "CANCEL"));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".card[_ngcontent-%COMP%] {\n    max-width: 650px;\n    margin: 20vh auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiY29uZmlybS1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG87XG59Il19 */"] });


/***/ }),

/***/ 9227:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/email-verification/email-verification.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailVerificationComponent": () => (/* binding */ EmailVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);




class EmailVerificationComponent {
    constructor(authService, router, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        let token = null;
        token = this.activatedRoute.snapshot.queryParamMap.get('token') || '';
        this.activatedRoute.queryParams.subscribe(params => {
            token = params['token'] || '';
        });
        this.verifyEmail(token);
    }
    verifyEmail(token) {
        this.authService.verifyEmail(token).subscribe(() => { });
    }
    redirectToLogin() {
        this.router.navigateByUrl("/auth/login");
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
EmailVerificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 11, vars: 9, consts: [[1, "email-container"], [1, "email-body"], [1, "redirect-button", 3, "click"]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailVerificationComponent_Template_button_click_8_listener() { return ctx.redirectToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "Your account has been successfully verified."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "You can go to login page by clicking the button below."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "goToLogin"));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".email-container[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 100px auto;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.email-body[_ngcontent-%COMP%] {\n    padding: 20px;\n    text-align: center;\n}\n\n.email-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #333;\n    margin: 10px 0;\n}\n\n.email-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #777;\n    margin: 10px 0;\n    line-height: 1.5;\n}\n\n.redirect-button[_ngcontent-%COMP%] {\n    background-color: #5B2067;\n    color: white;\n    text-transform: uppercase;\n    text-decoration: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    margin-top: 20px;\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJlbWFpbC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uZW1haWwtYm9keSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbWFpbC1ib2R5IGgyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmVtYWlsLWJvZHkgcCB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnJlZGlyZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCMjA2NztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8111:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/forget-password/forget-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordComponent": () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class ForgetPasswordComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.passwordInfo = {
            userName: null,
        };
    }
    ngOnInit() {
    }
    forgetPassword() {
        if (this.passwordInfo.userName) {
            this.authService.forgetPass(this.passwordInfo.userName)
                .subscribe(response => {
                this.router.navigateByUrl('/auth/login');
                console.log(response);
            }, error => {
                console.error(error);
            });
        }
        else {
            console.error('Username is null or empty.');
        }
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ForgetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 12, vars: 10, consts: [[1, "container"], [1, "forgetPassword-form"], [1, "heading"], ["type", "email", "name", "Email", "id", "Email", 1, "tshgheel-input", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-0-8", 3, "click"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form")(7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ForgetPasswordComponent_Template_input_ngModelChange_7_listener($event) { return ctx.passwordInfo.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_9_listener() { return ctx.forgetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "forgetPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.passwordInfo.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "send"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\n.container[_ngcontent-%COMP%]   .forgetPassword-form[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 20vh auto;\n}\n.container[_ngcontent-%COMP%]   .forgetPassword-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .forgetPassword-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.has-error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVRO0VBQ0UsbUJBQUE7QUFBVjtBQUVRO0VBQ0UscUJBQUE7QUFBVjtBQU1FO0VBQ0UscUJBQUE7QUFISiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICBcbiAgICAuZm9yZ2V0UGFzc3dvcmQtZm9ybSB7XG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgbWFyZ2luOiAyMHZoIGF1dG87XG4gIFxuICAgICAgZm9ybSB7XG4gICAgICAgICp7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5oYXMtZXJyb3Ige1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 6361:
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7503);
/* harmony import */ var src_app_core_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/language.service */ 7524);
/* harmony import */ var src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/token.service */ 6616);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/fingerprint.service */ 2356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _confirm_login_confirm_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-login/confirm-login.component */ 4626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











function LoginComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r2.loginFailureMsg), " ");
} }
function LoginComponent_div_2_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_div_2_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "logIn"));
} }
function LoginComponent_div_2_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_div_2_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.renwal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "renwal"));
} }
const _c0 = function () { return ["/auth/forgetPassword"]; };
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoginComponent_div_2_div_4_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form")(6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.loginInfo.userName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.loginInfo.password = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.togglePasswordVisibility()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LoginComponent_div_2_button_13_Template, 3, 3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoginComponent_div_2_button_14_Template, 3, 3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 13, "WELCOME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginFailureMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 15, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.loginInfo.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 17, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.loginInfo.password)("type", ctx_r0.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r0.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginFailureMsg != "Your subscription has expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loginFailureMsg === "Your subscription has expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 19, "forgetYourPassword?"));
} }
function LoginComponent_app_confirm_login_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-confirm-login", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("logoutFromPreviousSession", function LoginComponent_app_confirm_login_3_Template_app_confirm_login_logoutFromPreviousSession_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.setLogoutFromPreviousSession($event)); })("toggleConfirmLoginComponent", function LoginComponent_app_confirm_login_3_Template_app_confirm_login_toggleConfirmLoginComponent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.toggleConfirmLoginComponent()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("continueBtn", ctx_r1.submit);
} }
class LoginComponent {
    constructor(authService, languageService, tokenService, activatedRoute, router, fingerprintService) {
        this.authService = authService;
        this.languageService = languageService;
        this.tokenService = tokenService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fingerprintService = fingerprintService;
        this.showPassword = false;
        this.loginFailureMsg = null;
        this.confirmLoginComponentVisibility = false;
        this.loginInfo = {
            userName: null,
            password: null,
            deviceFingerprint: null
        };
        this.submit = () => {
            debugger;
            this.loginFailureMsg = null;
            this.confirmLoginComponentVisibility = false;
            this.authService.login(this.loginInfo).subscribe((response) => {
                const loginStatus = response.body.loginStatus;
                const data = response.body.data;
                if (loginStatus == "LOGIN_SUCCESSFUL") {
                    const token = data.token;
                    const userFullName = data.userFullName;
                    let lang = localStorage.getItem('lang');
                    const redirectionUrl = data.redirectionUrl + `&userFullName=${userFullName}&lang=${lang || 'ar'}`;
                    this.tokenService.saveToken(token);
                    this.token = token;
                    console.log('Login Successful');
                    window.location.href = redirectionUrl;
                    this.loginFailureMsg = null;
                }
                else if (loginStatus == "HAS_AN_ACTIVE_SESSION") {
                    this.toggleConfirmLoginComponent();
                }
                else if (loginStatus == "WAITING_FOR_PAYMENT") {
                    this.authService.paymentData = data;
                    this.authService.paymentData.email = this.loginInfo.userName;
                    this.router.navigateByUrl("auth/payment");
                }
                else if (loginStatus == "EXPIRED") {
                }
                else {
                    this.loginFailureMsg = "PleaseReferToTheAdministrator";
                }
            }, (err) => {
                if (err.error.body == "Please refer to the administrator") {
                    this.loginFailureMsg = "PleaseReferToTheAdministrator";
                    //this.isNotDemoOrActive = true;
                }
                if (err.error.body == "Invalid username or password.") {
                    this.loginFailureMsg = err.error.body;
                }
                else if (err.error.body == "Your account is not verified. Please verify your email.") {
                    this.loginFailureMsg = err.error.body;
                }
                else if (err.error.body == "Your subscription has expired") {
                    this.loginFailureMsg = err.error.body;
                }
            });
        };
    }
    ngOnInit() {
        this.tokenService.clearToken();
        const lang = this.activatedRoute.snapshot.queryParams['lang'];
        if (lang) {
            this.languageService.setLang(this.activatedRoute.snapshot.queryParams['lang']);
        }
        this.getDeviceFingerprint();
    }
    renwal() {
        this.loginFailureMsg = null;
        this.confirmLoginComponentVisibility = false;
        this.authService.renwal(this.loginInfo).subscribe((response) => {
            const data = response.body.data;
            this.authService.paymentData = data;
            this.authService.paymentData.email = this.loginInfo.userName;
            this.router.navigateByUrl("auth/payment");
        });
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    toggleConfirmLoginComponent() {
        this.confirmLoginComponentVisibility = !this.confirmLoginComponentVisibility;
    }
    setLogoutFromPreviousSession(value) {
        this.loginInfo.logoutFromPreviousSession = value;
    }
    getDeviceFingerprint() {
        this.fingerprintService.getFingerprint().subscribe({
            next: (visitorId) => {
                this.loginInfo.deviceFingerprint = visitorId;
            },
            // error: (err) => console.error('Fingerprint Error:', err)
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_2__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_fingerprint_service__WEBPACK_IMPORTED_MODULE_3__.FingerprintService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [[1, "container"], ["class", "login-form", 4, "ngIf"], [3, "continueBtn", "logoutFromPreviousSession", "toggleConfirmLoginComponent", 4, "ngIf"], [1, "login-form"], [1, "heading"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "email", "name", "Email", "id", "Email", 1, "tshgheel-input", 3, "ngModel", "placeholder", "ngModelChange"], [1, "input-container"], ["type", "password", "name", "password", "id", "password", 1, "tshgheel-input", 3, "ngModel", "placeholder", "type", "ngModelChange"], [1, "password-toggle-icon", 3, "click"], ["type", "submit", "class", "btn btn-primary w-100 py-0-8", 3, "click", 4, "ngIf"], [1, "anchor", 3, "routerLink"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-0-8", 3, "click"], [3, "continueBtn", "logoutFromPreviousSession", "toggleConfirmLoginComponent"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 18, 22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoginComponent_app_confirm_login_3_Template, 1, 1, "app-confirm-login", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.confirmLoginComponentVisibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.confirmLoginComponentVisibility);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__.NativeElementInjectorDirective, _confirm_login_confirm_login_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmLoginComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\n.container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 20vh auto;\n}\n.container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n.password-toggle-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  cursor: pointer;\n  color: #888;\n  vertical-align: 0.875em !important;\n}\n  body.ltr .password-toggle-icon {\n  left: auto !important;\n  right: 10px;\n}\n.login-info[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRU07RUFDRSxtQkFBQTtBQUFSO0FBRU07RUFDRSxxQkFBQTtBQUFSO0FBS0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUZGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FBSEY7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUhGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG5cbiAgLmxvZ2luLWZvcm0ge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG87XG5cbiAgICBmb3JtIHtcbiAgICAgICp7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5cbi5wYXNzd29yZC10b2dnbGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzg4ODtcbiAgdmVydGljYWwtYWxpZ246IDAuODc1ZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIGJvZHkubHRyIC5wYXNzd29yZC10b2dnbGUtaWNvbiB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5sb2dpbi1pbmZve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5657:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/auth/registration/components/company-info/company-info.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyInfoComponent": () => (/* binding */ CompanyInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reg-wizard/wizard */ 2020);
/* harmony import */ var src_app_pages_emails_Advertising__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/emails/Advertising */ 6913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_pages_Subscription_pages_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/Subscription-pages/subscription.service */ 5848);
/* harmony import */ var src_app_pages_emails_emails_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/emails/emails.service */ 3852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












function CompanyInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "companyNameAlreadyInUse"), " ");
} }
function CompanyInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.errMsg));
} }
function CompanyInfoComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "vatNumberValidation"));
} }
function CompanyInfoComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sector_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", sector_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, sector_r7));
} }
function CompanyInfoComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", size_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, size_r8));
} }
function CompanyInfoComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInfoComponent_div_44_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.save()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r5.validateForm());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "save"));
} }
function CompanyInfoComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInfoComponent_div_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.nextSlide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r6.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Continue"));
} }
class CompanyInfoComponent {
    constructor(fb, router, subscriptionSevice, emailsService) {
        this.fb = fb;
        this.router = router;
        this.subscriptionSevice = subscriptionSevice;
        this.emailsService = emailsService;
        this.isCompanyExists = false;
        this.changeSubValue = () => { };
        this.validateForm = () => { };
        this.advertisingAccept = false;
        this.advertising = new src_app_pages_emails_Advertising__WEBPACK_IMPORTED_MODULE_1__.Advertising();
        this.companyRegister = new _reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__.CompanyRegister();
        this.subscriptionDemo = new _reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDemo();
        this.subscriptionInformationDemo = new _reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__.SubscriptionInformationDemo();
        this.save = () => { };
        this.companySectors = [
            "Contracting",
            "EducationAndTraining",
            "Technology",
            "Finance",
            "Media",
            "Transport",
            "FoodAndSupply",
            "RetailandECommerce",
            "Services",
            "Maintenance",
            "Other"
        ];
        this.companySizes = [
            "1-5",
            "6-25",
            "26-50",
            "51-100",
            "101-200",
            "More than 200"
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            companyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            vatNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^3\d{13}3$/)]],
            companySector: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            companySize: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            comapnyRole: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        if (this.router.url.includes('demo')) {
            this.isDemo = true;
            this.companyRegister.saveSubscriptionDTO.subscriptionDTO = this.subscriptionDemo;
            this.companyRegister.saveSubscriptionDTO.subscriptionInformationDTO = this.subscriptionInformationDemo;
        }
        else {
            this.isDemo = false;
        }
    }
    invalidValidation(elment) {
        return this.form.get(elment)?.invalid;
    }
    touchedValidation(elment) {
        return this.form.get(elment)?.touched;
    }
    addAdvertising() {
        this.advertising.emailAdvertising = this.email;
        this.emailsService.addAdvertising(this.advertising).subscribe(() => {
        });
    }
    acceptAdvertising($event) {
        this.advertisingAccept = ($event.target && $event.target.checked) || false;
        if (this.advertisingAccept) {
            this.addAdvertising();
        }
    }
}
CompanyInfoComponent.ɵfac = function CompanyInfoComponent_Factory(t) { return new (t || CompanyInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_Subscription_pages_subscription_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_emails_emails_service__WEBPACK_IMPORTED_MODULE_3__.EmailsService)); };
CompanyInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CompanyInfoComponent, selectors: [["app-company-info"]], inputs: { nextSlide: "nextSlide", prevSlide: "prevSlide", errMsg: "errMsg", isCompanyExists: "isCompanyExists", changeSubValue: "changeSubValue", validateForm: "validateForm", email: "email", save: "save" }, decls: 56, vars: 44, consts: [[1, "d-flex", "justify-content-center"], [1, "company-info"], [3, "formGroup"], [1, "h3", "mb-4"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "cname", "id", "cname", "formControlName", "companyName", 1, "tshgheel-input", 3, "placeholder", "change"], ["type", "text", "name", "vatNumber", "id", "vatNumber", "formControlName", "vatNumber", 1, "tshgheel-input", 3, "placeholder", "change"], ["class", "text-danger", 4, "ngIf"], [1, "select"], ["formControlName", "comapnyRole", "aria-label", "Default select example", 1, "tshgheel-input", 3, "change"], ["value", "null"], ["value", "AccountAdministrator"], ["value", "BusinessOwner"], ["value", "Employee"], ["value", "Other"], ["formControlName", "companySector", "aria-label", "Default select example", 1, "tshgheel-input", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "companySize", "aria-label", "Default select example", 1, "tshgheel-input", 3, "change"], [4, "ngIf"], [1, "form-check", "text-start", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["for", "flexCheckDefault", 1, "form-check-label", "mx-5"], [1, "d-flex", "justify-content-center", "control-buttons", "mt-4"], ["type", "button", 1, "btn", "prev", 3, "click"], [1, "fa-solid", "fa-chevron-left"], ["type", "button", 1, "btn", "next", 3, "disabled", "click"], [1, "fa-solid", "fa-chevron-right"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-danger"], [3, "value"], ["type", "button", 1, "btn", "btn-primary", "w-100", "py-3", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "w-100", "py-0-8", 3, "disabled", "click"]], template: function CompanyInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CompanyInfoComponent_div_6_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CompanyInfoComponent_div_7_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInfoComponent_Template_input_change_9_listener($event) { return ctx.changeSubValue("companyName", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5)(12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInfoComponent_Template_input_change_12_listener($event) { return ctx.changeSubValue("vatNumber", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CompanyInfoComponent_span_14_Template, 3, 3, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInfoComponent_Template_select_change_16_listener($event) { return ctx.changeSubValue("companyRole", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9)(33, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInfoComponent_Template_select_change_33_listener($event) { return ctx.changeSubValue("companySector", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CompanyInfoComponent_option_37_Template, 3, 4, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 9)(39, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInfoComponent_Template_select_change_39_listener($event) { return ctx.changeSubValue("companySize", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, CompanyInfoComponent_option_43_Template, 3, 4, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, CompanyInfoComponent_div_44_Template, 4, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, CompanyInfoComponent_div_45_Template, 4, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 20)(47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInfoComponent_Template_input_change_47_listener($event) { return ctx.acceptAdvertising($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 23)(52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInfoComponent_Template_button_click_52_listener() { return ctx.prevSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInfoComponent_Template_button_click_54_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 22, "companyInformation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCompanyExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 24, "companyName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-error", ctx.invalidValidation("vatNumber") && ctx.touchedValidation("vatNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 26, "vatNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invalidValidation("vatNumber") && ctx.touchedValidation("vatNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 28, "companyRole"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 30, "AccountAdministrator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 32, "BusinessOwner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 34, "Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 36, "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 38, "companySector"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.companySectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 40, "companySize"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.companySizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 42, "agreeNewsletter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".company-info[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 450px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  color: white;\n  top: 18px;\n}\n\n.select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n  .rtl .fa-chevron-down.icon {\n  right: auto;\n  left: 20px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUoiLCJmaWxlIjoiY29tcGFueS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktaW5mb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG59XG5cbi5pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdG9wOiAxOHB4O1xufVxuLnNlbGVjdCwuZm9ybS1ncm91cHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjo6bmctZGVlcCAucnRsIC5mYS1jaGV2cm9uLWRvd24uaWNvbntcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAyMHB4O1xufVxuLnByZXYsLm5leHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsZXJ0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });


/***/ }),

/***/ 6753:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/auth/registration/components/reg-wizard/reg-wizard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegWizardComponent": () => (/* binding */ RegWizardComponent)
/* harmony export */ });
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard */ 2020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth.service */ 7503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_pages_Subscription_pages_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/Subscription-pages/subscription.service */ 5848);
/* harmony import */ var src_app_pages_emails_emails_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/emails/emails.service */ 3852);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-info/user-info.component */ 8233);
/* harmony import */ var _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-info/company-info.component */ 5657);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










class RegWizardComponent {
    constructor(authService, router, subscriptionSevice, emailsService) {
        this.authService = authService;
        this.router = router;
        this.subscriptionSevice = subscriptionSevice;
        this.emailsService = emailsService;
        this.companyRegister = new _wizard__WEBPACK_IMPORTED_MODULE_0__.CompanyRegister();
        this.isCompanyExists = false;
        this.advertisingAccept = false;
        this.save = () => {
            this.authService.register(this.companyRegister)
                .subscribe((response) => {
                this.isCompanyExists = false;
                this.router.navigateByUrl('/auth/login');
            }, (err) => {
                if (err.error.body == "company already exists") {
                    this.isCompanyExists = true;
                }
            });
        };
        this.changeCompanyValue = (key, $event) => {
            let value = $event.target.value;
            if (value == 'null') {
                value = null;
            }
            this.companyRegister.companyReqistrationReqDto[key] = value;
        };
        this.changeUserValue = (key, $event) => {
            ;
            let value = $event.target.value;
            if (value == 'null') {
                value = null;
            }
            this.companyRegister.companyReqistrationReqDto.authPersonDto[key] = value;
        };
        this.validateForm = () => {
            const carouselInner = document.querySelector('.carousel-inner');
            const activeItem = carouselInner.querySelector('.carousel-item.active');
            const activeIndex = Array.from(carouselInner.children).indexOf(activeItem);
            switch (activeIndex) {
                case 0:
                    return this.validateForUserInformation();
                case 1:
                    return this.validateForCompanyInformation();
            }
            return false;
        };
        this.validateForCompanyInformation = () => {
            if (this.companyRegister.companyReqistrationReqDto.companyName == null ||
                this.companyRegister.companyReqistrationReqDto.vatNumber == null ||
                this.companyRegister.companyReqistrationReqDto.companyRole == null ||
                this.companyRegister.companyReqistrationReqDto.companySector == null ||
                this.companyRegister.companyReqistrationReqDto.companySize == null) {
                return true;
            }
            return false;
        };
        this.validateForUserInformation = () => {
            if (this.companyRegister.companyReqistrationReqDto.authPersonDto.fname == null ||
                this.companyRegister.companyReqistrationReqDto.authPersonDto.lname == null ||
                this.companyRegister.companyReqistrationReqDto.authPersonDto.email == null ||
                this.companyRegister.companyReqistrationReqDto.authPersonDto.mobileNumber == null ||
                this.companyRegister.companyReqistrationReqDto.authPersonDto.password == null) {
                return true;
            }
            return false;
        };
    }
    ngOnInit() {
        this.setDemoValues();
        this.handleEmailEmitted();
    }
    isDemo() {
        return this.router.url.includes('demo');
    }
    setDemoValues() {
        if (this.isDemo()) {
            let subscriptionDemo = new _wizard__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDemo();
            let subscriptionInformationDemo = new _wizard__WEBPACK_IMPORTED_MODULE_0__.SubscriptionInformationDemo();
            this.companyRegister.saveSubscriptionDTO.subscriptionDTO = subscriptionDemo;
            this.companyRegister.saveSubscriptionDTO.subscriptionInformationDTO = subscriptionInformationDemo;
        }
    }
    isFirstOrLast(type) {
        const carouselInner = document.querySelector('.carousel-inner');
        const activeItem = carouselInner.querySelector('.carousel-item.active');
        const activeIndex = Array.from(carouselInner.children).indexOf(activeItem);
        if (type == 'first') {
            return activeIndex == 0;
        }
        return activeIndex == 3;
    }
    scrollToTop() {
        window.scrollTo(0, 50);
    }
    handleEmailEmitted() {
        this.emailFromUserInfo = this.email;
    }
}
RegWizardComponent.ɵfac = function RegWizardComponent_Factory(t) { return new (t || RegWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_pages_Subscription_pages_subscription_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_pages_emails_emails_service__WEBPACK_IMPORTED_MODULE_3__.EmailsService)); };
RegWizardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RegWizardComponent, selectors: [["app-reg-wizard"]], decls: 11, vars: 11, consts: [[1, "container"], ["id", "carouselExampleFade", 1, "carousel", "slide"], [1, "heading"], ["data-bs-touch", "false", 1, "carousel-inner"], [1, "carousel-item", "item1", "active"], [3, "validateForm", "changeSubValue", "useEmail", "email"], [1, "carousel-item", "item2"], [3, "isCompanyExists", "save", "validateForm", "changeSubValue", "email"]], template: function RegWizardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "app-user-info", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("email", function RegWizardComponent_Template_app_user_info_email_8_listener() { return ctx.email; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-company-info", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 9, "subscribe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("validateForm", ctx.validateForUserInformation)("changeSubValue", ctx.changeUserValue)("useEmail", ctx.handleEmailEmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isCompanyExists", ctx.isCompanyExists)("save", ctx.save)("validateForm", ctx.validateForCompanyInformation)("changeSubValue", ctx.changeCompanyValue)("email", ctx.emailFromUserInfo);
    } }, dependencies: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__.UserInfoComponent, _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_5__.CompanyInfoComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: white;\n}\n\n.control-buttons[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.control-buttons[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]::before, .control-buttons[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]::after {\n  content: \"|\";\n}\n\n  .rtl .control-buttons {\n  flex-direction: row-reverse;\n}\n\n  .rtl .control-buttons .prev::before,   .rtl .control-buttons .next::after {\n  content: \"\" !important;\n}\n\n  .rtl .control-buttons .prev::after,   .rtl .control-buttons .next::before {\n  content: \"|\" !important;\n}\n\n.carousel-item.item4.active[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.carousel-item.item4.active[_ngcontent-%COMP%]   .btn.next[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .item2.active[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .item2.active[_ngcontent-%COMP%]   .btn.next[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .item3.active[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .item3.active[_ngcontent-%COMP%]   .btn.next[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.carousel-item.item1.active[_ngcontent-%COMP%]    + .d-flex[_ngcontent-%COMP%]   .btn.prev[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy13aXphcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxpQkFBQTtBQUZKOztBQUlBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBREo7O0FBR0E7RUFFSSxtQkFBQTtBQURKOztBQUVJO0VBQ0ksWUFBQTtBQUFSOztBQUlJO0VBQ0ksMkJBQUE7QUFEUjs7QUFFUTtFQUNJLHNCQUFBO0FBQVo7O0FBRVE7RUFDSSx1QkFBQTtBQUFaOztBQU1JO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFIUjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUhSOztBQVFRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFMWjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQU5KIiwiZmlsZSI6InJlZy13aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmctc2hhcmVkOjpiZWZvcmV7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSAhaW1wb3J0YW50OyAgIFxufVxuLmNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250cm9sLWJ1dHRvbnN7XG4gICAgLy8gaGVpZ2h0OiAzMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnByZXY6OmJlZm9yZSwubmV4dDo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICd8JztcbiAgICB9XG59XG46Om5nLWRlZXAgLnJ0bCB7XG4gICAgLmNvbnRyb2wtYnV0dG9uc3tcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAucHJldjo6YmVmb3JlLC5uZXh0OjphZnRlcntcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXY6OmFmdGVyLC5uZXh0OjpiZWZvcmV7XG4gICAgICAgICAgICBjb250ZW50OiAnfCcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcm91c2VsLWl0ZW0uaXRlbTQuYWN0aXZle1xuICAgIC5idG4ucHJldntcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICB9XG4gICAgLmJ0bi5uZXh0e1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxufVxuLmNhcm91c2VsLWl0ZW17XG4gICAgLml0ZW0yLmFjdGl2ZSwuaXRlbTMuYWN0aXZle1xuICAgICAgICAuYnRuLnByZXYsLmJ0bi5uZXh0e1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXG4gICAgICAgIH1cbiAgICB9XG59XG4uY2Fyb3VzZWwtaXRlbS5pdGVtMS5hY3RpdmUgKyAuZC1mbGV4IC5idG4ucHJldntcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2020:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/registration/components/reg-wizard/wizard.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPersonDto": () => (/* binding */ AuthPersonDto),
/* harmony export */   "CompanyCompositeKey": () => (/* binding */ CompanyCompositeKey),
/* harmony export */   "CompanyRegister": () => (/* binding */ CompanyRegister),
/* harmony export */   "HyperpayCheckoutIdResDto": () => (/* binding */ HyperpayCheckoutIdResDto),
/* harmony export */   "RegInfo": () => (/* binding */ RegInfo),
/* harmony export */   "SaveSubscription": () => (/* binding */ SaveSubscription),
/* harmony export */   "SubscriptionDTO": () => (/* binding */ SubscriptionDTO),
/* harmony export */   "SubscriptionDemo": () => (/* binding */ SubscriptionDemo),
/* harmony export */   "SubscriptionInformationDTO": () => (/* binding */ SubscriptionInformationDTO),
/* harmony export */   "SubscriptionInformationDemo": () => (/* binding */ SubscriptionInformationDemo)
/* harmony export */ });
class CompanyRegister {
    constructor() {
        this.companyReqistrationReqDto = new RegInfo();
        this.saveSubscriptionDTO = new SaveSubscription();
    }
}
class RegInfo {
    constructor() {
        this.authPersonDto = new AuthPersonDto();
    }
}
;
class AuthPersonDto {
}
class SaveSubscription {
    constructor() {
        this.subscriptionDTO = new SubscriptionDTO();
        this.subscriptionInformationDTO = new SubscriptionInformationDTO();
        this.companyCompositeKey = new CompanyCompositeKey();
        this.checkoutIdResDto = new HyperpayCheckoutIdResDto();
    }
}
class SubscriptionDTO {
    constructor() {
        this.repeatPeriod = 1;
    }
}
class HyperpayCheckoutIdResDto {
    constructor() {
        this.amount = 1;
    }
}
class SubscriptionInformationDTO {
    constructor() {
        this.status = 'NOT_PAID';
    }
}
class SubscriptionDemo {
    constructor() {
        this.packageId = 1;
        this.period = "1";
        this.repeatPeriod = 1;
        this.paymentCardType = 'MASTER';
    }
}
class SubscriptionInformationDemo {
    constructor() {
        this.availableActiveUsers = 1;
        this.availableInactiveUsers = 0;
        this.totalCost = 0.0;
        this.paymentId = 0;
        this.status = 'DEMO';
    }
}
class CompanyCompositeKey {
}


/***/ }),

/***/ 8233:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/registration/components/user-info/user-info.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoComponent": () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reg-wizard/wizard */ 2020);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! google-libphonenumber */ 4535);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_pages_Subscription_pages_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/Subscription-pages/subscription.service */ 5848);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












function UserInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.errMsg));
} }
function UserInfoComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "invalidEmailFormat"));
} }
function UserInfoComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](" example@domain.com");
} }
function UserInfoComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_span_23_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.togglePasswordVisibility("showPassword")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserInfoComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_span_24_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.togglePasswordVisibility("showPassword")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserInfoComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.togglePasswordVisibility("showConfirmPass")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserInfoComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_span_29_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.togglePasswordVisibility("showConfirmPass")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserInfoComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "password_validation"));
} }
function UserInfoComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Passwords do not match!"));
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class UserInfoComponent {
    constructor(fb, router, subscriptionSevice) {
        this.fb = fb;
        this.router = router;
        this.subscriptionSevice = subscriptionSevice;
        this.changeSubValue = () => { };
        this.validateForm = () => { };
        this.useEmail = () => { };
        this.email = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.fullMobileNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.companyRegister = new _reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__.CompanyRegister();
        this.separateDialCode = false;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.SearchCountryField;
        this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.CountryISO;
        this.PhoneNumberFormat = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.PhoneNumberFormat;
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.CountryISO.SaudiArabia, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.CountryISO.SaudiArabia];
        this.showPassword = false;
        this.showConfirmPass = false;
        this.submitted = false;
        this.userData = {
            fname: null,
            lname: null,
            email: null,
            mobileNumber: null,
            password: null,
            confirmPass: null
        };
        this.changeUserValue = (key, $event) => {
            let value = $event.target?.value;
            if (value === 'null') {
                value = null;
                this.companyRegister.companyReqistrationReqDto.authPersonDto[key] = value;
            }
        };
        this.phoneNumberUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_4__.PhoneNumberUtil.getInstance();
    }
    ngOnInit() {
        this.form = this.fb.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)]],
            confirmPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)]]
        }, { validators: this.passwordMatchValidator });
    }
    passwordMatchValidator(formGroup) {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPass')?.value;
        if (password === confirmPassword) {
            return null;
        }
        else {
            return { passwordMismatch: true };
        }
    }
    invalidConfirmPassword() {
        return this.form.errors?.['passwordMismatch'] && this.touchedValidation('password') && this.touchedValidation('confirmPass');
    }
    invalidValidation(elment) {
        return this.form.get(elment)?.invalid && !this.form.get(elment)?.errors?.['pattern'];
    }
    touchedValidation(elment) {
        return this.form.get(elment)?.touched;
    }
    togglePasswordVisibility(type) {
        if (type == 'showConfirmPass') {
            this.showConfirmPass = !this.showConfirmPass;
        }
        else {
            this.showPassword = !this.showPassword;
        }
    }
    petternValidation(elment) {
        return this.form.get(elment)?.errors?.['pattern'];
    }
    setEmail() {
        const email01 = this.form.get('email')?.value;
        this.email.emit(email01);
    }
    onPhoneNumberChange(event) {
        this.fullMobileNumber.emit(this.selectedPhoneNumber?.e164Number);
    }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_pages_Subscription_pages_subscription_service__WEBPACK_IMPORTED_MODULE_1__.SubscriptionService)); };
UserInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserInfoComponent, selectors: [["app-user-info"]], inputs: { nextSlide: "nextSlide", prevSlide: "prevSlide", errMsg: "errMsg", changeSubValue: "changeSubValue", validateForm: "validateForm", useEmail: "useEmail" }, outputs: { email: "email", fullMobileNumber: "fullMobileNumber" }, decls: 40, vars: 63, consts: [[1, "d-flex", "justify-content-center"], [1, "user-information"], [1, "h3", "mb-4"], ["autocomplete", "off", 3, "formGroup"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "fname", "id", "fname", "formControlName", "fname", 1, "tshgheel-input", 3, "placeholder", "change"], ["type", "text", "name", "lname", "id", "lname", "formControlName", "lname", 1, "tshgheel-input", 3, "placeholder", "change"], ["type", "email", "name", "email", "id", "email", "formControlName", "email", 1, "tshgheel-input", 3, "placeholder", "change"], ["class", "text-danger", 4, "ngIf"], ["name", "mobileNumber", "id", "mobileNumber", "formControlName", "mobileNumber", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "maxLength", "phoneValidation", "separateDialCode", "numberFormat", "ngModel", "ngModelChange"], [1, "form-group", "input-container"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", 1, "tshgheel-input", 3, "type", "ngModel", "placeholder", "change", "ngModelChange"], ["class", "password-toggle-icon", 3, "click", 4, "ngIf"], ["name", "confirmPass", "id", "confirmPass", "formControlName", "confirmPass", 1, "tshgheel-input", 3, "type", "ngModel", "placeholder", "ngModelChange"], ["class", "text-danger d-inline-block mb-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "w-100", "py-0-8", 3, "disabled", "click"], [1, "d-flex", "justify-content-center", "control-buttons", "mt-4"], ["type", "button", "disabled", "", 1, "btn", "prev"], [1, "fa-solid", "fa-chevron-left"], ["type", "button", 1, "btn", "next", 3, "disabled", "click"], [1, "fa-solid", "fa-chevron-right"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-danger"], [1, "password-toggle-icon", 3, "click"], [1, "fas", "fa-eye-slash"], [1, "fas", "fa-eye"], [1, "text-danger", "d-inline-block", "mb-2"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UserInfoComponent_div_6_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UserInfoComponent_Template_input_change_8_listener($event) { return ctx.changeSubValue("fname", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UserInfoComponent_Template_input_change_11_listener($event) { return ctx.changeSubValue("lname", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UserInfoComponent_Template_input_change_14_listener($event) { ctx.changeSubValue("email", $event); return ctx.setEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, UserInfoComponent_span_16_Template, 3, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UserInfoComponent_span_17_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5)(19, "ngx-intl-tel-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserInfoComponent_Template_ngx_intl_tel_input_ngModelChange_19_listener($event) { return ctx.onPhoneNumberChange($event); })("ngModelChange", function UserInfoComponent_Template_ngx_intl_tel_input_ngModelChange_19_listener($event) { return ctx.selectedPhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11)(21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UserInfoComponent_Template_input_change_21_listener($event) { return ctx.changeSubValue("password", $event); })("ngModelChange", function UserInfoComponent_Template_input_ngModelChange_21_listener($event) { return ctx.userData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, UserInfoComponent_span_23_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UserInfoComponent_span_24_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11)(26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserInfoComponent_Template_input_ngModelChange_26_listener($event) { return ctx.userData.confirmPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, UserInfoComponent_span_28_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, UserInfoComponent_span_29_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, UserInfoComponent_span_30_Template, 3, 3, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, UserInfoComponent_span_31_Template, 3, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_Template_button_click_32_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17)(36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_Template_button_click_38_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 46, "USERINFORMATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("fname") && ctx.touchedValidation("fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 48, "fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("lname") && ctx.touchedValidation("lname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 50, "lname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("email") && ctx.touchedValidation("email") || ctx.petternValidation("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 52, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.petternValidation("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.petternValidation("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cssClass", "tshgheel-input")("preferredCountries", ctx.preferredCountries)("enableAutoCountrySelect", true)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](60, _c0, ctx.SearchCountryField.Iso2, ctx.SearchCountryField.Name))("selectFirstCountry", false)("selectedCountryISO", ctx.CountryISO.SaudiArabia)("maxLength", 15)("phoneValidation", true)("separateDialCode", true)("numberFormat", ctx.PhoneNumberFormat.International)("ngModel", ctx.selectedPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("password") && ctx.touchedValidation("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 54, "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("ngModel", ctx.userData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("confirmPass") && ctx.touchedValidation("confirmPass") || ctx.invalidConfirmPassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 56, "confirmPass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showConfirmPass ? "text" : "password")("ngModel", ctx.userData.confirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showConfirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showConfirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.petternValidation("confirmPass") || ctx.petternValidation("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invalidConfirmPassword() && !ctx.petternValidation("password") && !ctx.petternValidation("confirmPass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 58, "Continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.NgxIntlTelInputComponent, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".user-information[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 600px;\n  width: 500px;\n}\n\n.user-information[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  color: #22204F;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n\n.password-toggle-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  cursor: pointer;\n  color: #888;\n  padding: 9px;\n}\n\n  body.ltr .password-toggle-icon {\n  left: auto !important;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUVGIiwiZmlsZSI6InVzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWluZm9ybWF0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbn1cbi51c2VyLWluZm9ybWF0aW9uIC5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucHJldiwubmV4dCB7XG4gICAgY29sb3I6ICMyMjIwNEY7XG59XG4uaW5wdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cblxuLnBhc3N3b3JkLXRvZ2dsZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjODg4O1xuICBwYWRkaW5nOiA5cHg7XG5cbn1cblxuOjpuZy1kZWVwIGJvZHkubHRyIC5wYXNzd29yZC10b2dnbGUtaWNvbiB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8373:
/*!**********************************************************************!*\
  !*** ./src/app/pages/company/company-save/company-save.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanySaveComponent": () => (/* binding */ CompanySaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../company.service */ 1393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/token.service */ 6616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









function CompanySaveComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "Done"));
} }
class CompanySaveComponent {
    constructor(companyService, fb, router, tokenService) {
        this.companyService = companyService;
        this.fb = fb;
        this.router = router;
        this.tokenService = tokenService;
        this.companyData = {
            branchCode: '',
            regCode: '',
            comCode: '',
            companyName: '',
            email: '',
            mobile: '',
            phone: '',
            unifiedNationalNumber: '',
            establishmentNumber: '',
            commercialRegistration: '',
            tin: '',
            address: ''
        };
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            unifiedNationalNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            establishmentNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            commercialRegistration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            tin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.getCompanyByCompositeKey();
    }
    getCompanyByCompositeKey() {
        let decodedToken = this.tokenService.decodeToken('token');
        const url = `branchCode=${decodedToken.branchCode}&regCode=${decodedToken.regCode}&comCode=${decodedToken.comCode}`;
        this.companyService.getCompanyByCompositeKey(url).subscribe((res) => {
            if (res) {
                console.log("Company data : ", res);
                this.companyData = res.body;
                this.form.patchValue(this.companyData);
            }
            else {
                console.log("Failed to fetch the company data.");
            }
        });
    }
    send() {
        if (this.form.valid) {
            this.companyService.saveCompany(this.companyData).subscribe(data => {
                this.submitted = true;
                this.router.navigateByUrl('/packages');
            });
        }
    }
    invalidValidation(elment) {
        return this.form.get(elment)?.invalid;
    }
    touchedValidation(elment) {
        return this.form.get(elment)?.touched;
    }
}
CompanySaveComponent.ɵfac = function CompanySaveComponent_Factory(t) { return new (t || CompanySaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_company_service__WEBPACK_IMPORTED_MODULE_0__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_1__.TokenService)); };
CompanySaveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanySaveComponent, selectors: [["app-company-save"]], decls: 38, vars: 62, consts: [[1, "container"], [1, "contact-form"], [1, "heading"], ["id", "contactForm", 3, "formGroup"], ["class", "thank", 4, "ngIf"], [1, "form-group", "mb-2"], ["type", "text", "name", "companyName", "id", "companyName", "formControlName", "companyName", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "email", "name", "email", "id", "email", "formControlName", "email", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "mobile", "id", "mobile", "formControlName", "mobile", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "phone", "id", "phone", "formControlName", "phone", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "address", "id", "address", "formControlName", "address", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "unifiedNationalNumber", "id", "unifiedNationalNumber", "formControlName", "unifiedNationalNumber", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "establishmentNumber", "id", "establishmentNumber", "formControlName", "establishmentNumber", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "commercialRegistration", "id", "commercialRegistration", "formControlName", "commercialRegistration", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "tin", "id", "tin", "formControlName", "tin", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "py-0-8", "w-100", 3, "click"], [1, "thank"], [1, "m-0"]], template: function CompanySaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CompanySaveComponent_div_7_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_9_listener($event) { return ctx.companyData.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_12_listener($event) { return ctx.companyData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_15_listener($event) { return ctx.companyData.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5)(18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_18_listener($event) { return ctx.companyData.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_21_listener($event) { return ctx.companyData.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5)(24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_24_listener($event) { return ctx.companyData.unifiedNationalNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5)(27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_27_listener($event) { return ctx.companyData.establishmentNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_30_listener($event) { return ctx.companyData.commercialRegistration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5)(33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanySaveComponent_Template_input_ngModelChange_33_listener($event) { return ctx.companyData.tin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanySaveComponent_Template_button_click_35_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 40, "companyInformation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("companyName") && ctx.touchedValidation("companyName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 42, "companyName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("email") && ctx.touchedValidation("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 44, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("mobile") && ctx.touchedValidation("mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 46, "mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("phone") && ctx.touchedValidation("phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 48, "phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("address") && ctx.touchedValidation("address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 50, "address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("unifiedNationalNumber") && ctx.touchedValidation("unifiedNationalNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 52, "unifiedNationalNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.unifiedNationalNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("establishmentNumber") && ctx.touchedValidation("establishmentNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 54, "establishmentNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.establishmentNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("commercialRegistration") && ctx.touchedValidation("commercialRegistration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 56, "commercialRegistration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.commercialRegistration);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-error", ctx.invalidValidation("tin") && ctx.touchedValidation("tin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 58, "tin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.companyData.tin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 60, "send"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: auto;\n}\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .thank[_ngcontent-%COMP%] {\n  border: 0.5px solid #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px 0;\n  background-color: rgba(0, 154, 0, 0.199);\n}\n.has-error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktc2F2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNJLGlCQUFBO0FBRk47QUFJTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS1U7RUFDRSxtQkFBQTtBQUhaO0FBS1U7RUFDSSxTQUFBO0FBSGQ7QUFJYztFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQUZsQjtBQUtVO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBSFo7QUFTSTtFQUNFLHFCQUFBO0FBTk4iLCJmaWxlIjoiY29tcGFueS1zYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnLXNoYXJlZDo6YmVmb3Jle1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIikgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIFxuICAgICAgLmNvbnRhY3QtZm9ybSB7XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICBcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgKntcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWdyb3Vwe1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRoYW5re1xuICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1NCwgMCwgMC4xOTkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuaGFzLWVycm9yIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICB9Il19 */"] });


/***/ }),

/***/ 1393:
/*!**************************************************!*\
  !*** ./src/app/pages/company/company.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/token.service */ 6616);





class CompanyService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.token = this.tokenService.getToken('token');
    }
    saveCompany(companyData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
            .set('Authorization', `Bearer ${this.token}`);
        return this.http.put(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}company/update`, companyData, { headers });
    }
    getCompanyByCompositeKey(url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
            .set('Authorization', `Bearer ${this.token}`);
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.merchantServiceBaseUrl}company/composite-key?${url}`, { headers });
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_1__.TokenService)); };
CompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9165:
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _contact_us_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.service */ 7633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








function ContactUsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "thank-you!"));
} }
class ContactUsComponent {
    constructor(contactUsService, fb, router) {
        this.contactUsService = contactUsService;
        this.fb = fb;
        this.router = router;
        this.contactData = {
            contactId: '',
            name: '',
            mobile: '',
            email: '',
            descriptionAr: '',
            descriptionEn: '',
            createBy: '',
            updatedBy: '',
            createdAt: '',
            updatedAt: ''
        };
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    send() {
        if (this.form.valid) {
            this.contactUsService.addContact(this.contactData).subscribe(data => {
                this.form.reset();
                this.submitted = true;
            });
        }
    }
    invalidValidation(elment) {
        return this.form.get(elment)?.invalid;
    }
    touchedValidation(elment) {
        return this.form.get(elment)?.touched;
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contact_us_service__WEBPACK_IMPORTED_MODULE_0__.ContactUsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 23, vars: 32, consts: [[1, "container"], [1, "contact-form"], [1, "heading"], ["id", "contactForm", 3, "formGroup"], ["class", "thank", 4, "ngIf"], [1, "form-group", "mb-2"], ["type", "text", "name", "name", "id", "name", "formControlName", "name", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "email", "name", "email", "id", "email", "formControlName", "email", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "phone_number", "id", "phone_number", "formControlName", "phoneNumber", 1, "tshgheel-input", "mb-0", 3, "ngModel", "placeholder", "ngModelChange"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "formControlName", "message", 1, "tshgheel-input", "mb-0", "pt-2", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "py-0-8", "w-100", 3, "click"], [1, "thank"], [1, "m-0"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContactUsComponent_div_7_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.contactData.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.contactData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.contactData.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5)(18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.contactData.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactUsComponent_Template_button_click_20_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 20, "contact-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("name") && ctx.touchedValidation("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 22, "name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("email") && ctx.touchedValidation("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 24, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("phoneNumber") && ctx.touchedValidation("phoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 26, "phoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactData.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.invalidValidation("message") && ctx.touchedValidation("message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 28, "message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 30, "send"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["#bg-shared[_ngcontent-%COMP%]::before {\n  background-image: url('background.png') !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: auto;\n}\n\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .thank[_ngcontent-%COMP%] {\n  border: 0.5px solid #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px 0;\n  background-color: rgba(0, 154, 0, 0.199);\n}\n\n.has-error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBQTtBQUNGOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUVOOztBQUNRO0VBQ0UsbUJBQUE7QUFDVjs7QUFDUTtFQUNJLFNBQUE7QUFDWjs7QUFBWTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQUVoQjs7QUFDUTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQUNWOztBQUtFO0VBQ0UscUJBQUE7QUFGSiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnLXNoYXJlZDo6YmVmb3Jle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQucG5nXCIpICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgXG4gICAgLmNvbnRhY3QtZm9ybSB7XG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICBcbiAgICAgIGZvcm0ge1xuICAgICAgICAqe1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tZ3JvdXB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRoYW5re1xuICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTU0LCAwLCAwLjE5OSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5oYXMtZXJyb3Ige1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 7633:
/*!********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsService": () => (/* binding */ ContactUsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ContactUsService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    addContact(contact) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}contact`, contact);
    }
}
ContactUsService.ɵfac = function ContactUsService_Factory(t) { return new (t || ContactUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactUsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactUsService, factory: ContactUsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6913:
/*!*********************************************!*\
  !*** ./src/app/pages/emails/Advertising.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Advertising": () => (/* binding */ Advertising)
/* harmony export */ });
class Advertising {
}


/***/ }),

/***/ 4433:
/*!**************************************************!*\
  !*** ./src/app/pages/emails/emails.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailsComponent": () => (/* binding */ EmailsComponent)
/* harmony export */ });
/* harmony import */ var _Advertising__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advertising */ 6913);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _emails_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emails.service */ 3852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-intl-tel-input */ 8249);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








function EmailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "thank-you!"));
} }
class EmailsComponent {
    constructor(fb, emailsService) {
        this.fb = fb;
        this.emailsService = emailsService;
        this.submitted = false;
        this.accept = false;
        this.advertising = new _Advertising__WEBPACK_IMPORTED_MODULE_0__.Advertising();
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
        });
    }
    addAdvertising() {
        if (this.form.valid)
            this.emailsService.addAdvertising(this.advertising).subscribe(() => {
                this.submitted = true;
                this.form.reset();
                this.accept = false;
            });
    }
    changeAcceptTerms($event) {
        this.accept = ($event.target && $event.target.checked) || false;
    }
}
EmailsComponent.ɵfac = function EmailsComponent_Factory(t) { return new (t || EmailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_emails_service__WEBPACK_IMPORTED_MODULE_1__.EmailsService)); };
EmailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmailsComponent, selectors: [["app-emails"]], decls: 12, vars: 12, consts: [[1, "container", "subscription-container"], [1, "email"], [1, "description"], ["class", "thank", 4, "ngIf"], [1, "email-input", 3, "formGroup"], ["type", "email", "formControlName", "email", 1, "tshgheel-input", "email-field", 3, "ngModel", "placeholder", "ngModelChange"], [1, "btn", "btn-primary", "subscribe-btn", 3, "click"], [1, "thank"], [1, "thank-you"]], template: function EmailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EmailsComponent_div_5_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmailsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.advertising.emailAdvertising = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailsComponent_Template_button_click_9_listener() { return ctx.addAdvertising(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, "subscribeEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, "your-email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.advertising.emailAdvertising);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, "subscribe"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__.NativeElementInjectorDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: auto;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .email-input[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 5px;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .email-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n.container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .email-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n  border: none;\n  border-radius: 0;\n}\n.container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .thank[_ngcontent-%COMP%] {\n  border: 0.5px solid #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px 0;\n  background-color: rgba(0, 154, 0, 0.199);\n  margin-bottom: 5px;\n}\n.container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border: 1px solid #242050;\n}\n.container[_ngcontent-%COMP%]   .has-error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.checkbox[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: auto;\n  text-align: center !important;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  margin-right: 10px;\n  appearance: auto;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDWjtBQUNZO0VBQ0ksWUFBQTtBQUNoQjtBQUVZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFoQjtBQUlRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFGWjtBQU1JO0VBQ0kseUJBQUE7QUFKUjtBQVFJO0VBQ0kscUJBQUE7QUFOUjtBQVNBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFQRjtBQVNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GO0FBU0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQU5GIiwiZmlsZSI6ImVtYWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gICAgLmVtYWlsIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmVtYWlsLWlucHV0IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aGFua3tcbiAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTQsIDAsIDAuMTk5KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLmVtYWlsPmRpdiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDIwNTA7XG4gICAgfVxuXG5cbiAgICAuaGFzLWVycm9yIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIH1cbn1cbi5jaGVja2JveHtcblxuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYXBwZWFyYW5jZTogYXV0bztcbn1cblxuLmZvcm0tY2hlY2stbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuIl19 */"] });


/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/pages/emails/emails.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailsService": () => (/* binding */ EmailsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class EmailsService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.apiAdminServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.adminUrl;
    }
    addNewsletter(Newsletter) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}newsletter/save`, Newsletter);
    }
    addAdvertising(advertising) {
        return this.http.post(`${this.apiAdminServerUrl}advertising`, advertising);
    }
}
EmailsService.ɵfac = function EmailsService_Factory(t) { return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
EmailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailsService, factory: EmailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6206:
/*!******************************************************!*\
  !*** ./src/app/pages/error404/error404.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Component": () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class Error404Component {
    constructor(router) {
        this.router = router;
        this.navbar = document.querySelector('app-navbar');
        this.footer = document.querySelector('app-footer');
    }
    ngOnInit() {
        this.navbar?.classList.add("d-none");
        this.footer?.classList.add("d-none");
    }
    ngOnDestroy() {
        this.navbar?.classList.remove("d-none");
        this.footer?.classList.remove("d-none");
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
Error404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 11, vars: 6, consts: [[1, "page"], [1, "text-white", "display-1"], [1, "tx-20"], [1, "mb-4"], ["routerLink", "/", 1, "btn", "btn-light", "text-center", "py-2"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "error-message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "back-to-home"));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".page[_ngcontent-%COMP%] {\n  text-align: center;\n  background: rgba(96, 96, 96, 0.5);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10vw;\n}\n.page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxxQkFBQTtBQUVSIiwiZmlsZSI6ImVycm9yNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOTYsIDk2LCA5NiwgMC41KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTB2dztcbiAgICAuYnRue1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 6459:
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.service */ 6227);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function FaqComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.lang == "ar" ? item_r1 == null ? null : item_r1.answerAr : item_r1 == null ? null : item_r1.answerEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function FaqComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "h2", 5)(2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_div_6_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.toggleAnswer(item_r1 == null ? null : item_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FaqComponent_div_6_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", ctx_r0.selectedId !== (item_r1 == null ? null : item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.lang == "ar" ? item_r1 == null ? null : item_r1.questionTextAr : item_r1 == null ? null : item_r1.questionTextEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectedId === (item_r1 == null ? null : item_r1.id));
} }
class FaqComponent {
    constructor(faqService, translate) {
        this.faqService = faqService;
        this.translate = translate;
        this.selectedId = null;
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
        this.getAllFaqs();
    }
    getAllFaqs() {
        this.faqService.getAllQuestions().subscribe((data) => {
            this.faq = data.body;
        });
    }
    toggleAnswer(id) {
        this.selectedId = this.selectedId === id ? null : id;
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_faq_service__WEBPACK_IMPORTED_MODULE_0__.FaqService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 7, vars: 4, consts: [[1, "container"], [1, "accordion", "accordion-flush"], [1, "heading"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", 1, "accordion-button", 3, "click"], [3, "innerHTML"], ["class", "accordion-body", 4, "ngIf"], [1, "accordion-body"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FaqComponent_div_6_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faq);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin-bottom: 10px;\n  border: none;\n  color: #242050;\n}\n.container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #242050;\n  color: #242050;\n  border-radius: 5px;\n  box-shadow: none;\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:after {\n  background-image: url('chevron-down-solid.svg');\n  filter: contrast(0%);\n}\n  .rtl .accordion-button:after {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7QUFHSTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUROO0FBR007RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURSO0FBR1E7RUFDRSwrQ0FBQTtFQUNBLG9CQUFBO0FBRFY7QUFPQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUpGIiwiZmlsZSI6ImZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAuYWNjb3JkaW9uIHtcblxuICAgIC5hY2NvcmRpb24taXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogIzI0MjA1MDtcblxuICAgICAgLmFjY29yZGlvbi1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI0MjA1MDtcbiAgICAgICAgY29sb3I6ICMyNDIwNTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY2hldnJvbi1kb3duLXNvbGlkLnN2Z1wiKTtcbiAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIC5ydGwgLmFjY29yZGlvbi1idXR0b246YWZ0ZXJ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ 6227:
/*!******************************************!*\
  !*** ./src/app/pages/faq/faq.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqService": () => (/* binding */ FaqService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class FaqService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getAllQuestions() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}question`);
    }
}
FaqService.ɵfac = function FaqService_Factory(t) { return new (t || FaqService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FaqService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FaqService, factory: FaqService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.service */ 117);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/packages.component */ 6905);
/* harmony import */ var _news_news_section_news_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news/news-section/news-section.component */ 5769);
/* harmony import */ var _emails_emails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emails/emails.component */ 4433);







function HomeComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.lang == "ar" ? item_r3.descriptionAr : item_r3.descriptionEn, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_22_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.aboutus);
} }
function HomeComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.lang == "ar" ? ctx_r1.statisAbout.ar : ctx_r1.statisAbout.en, " ");
} }
class HomeComponent {
    constructor(homeService, translate) {
        this.homeService = homeService;
        this.translate = translate;
        this.statisAbout = {
            ar: "وجود نظام متكامل يعني عرض أفضل للأداء على مستويات مختلفة كتنفيذ ناجح لنظام تخطيط موارد المؤسسات يمكن أن ينقذ عشرات الملايين",
            en: "Having an integrated system means a better view of perforimance at various levels as successful implementation of an erp system can save tens of millions"
        };
        this.isAboutUs = false;
    }
    ngOnInit() {
        this.getAboutus();
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
    }
    getAboutus() {
        this.homeService.getAboutus().subscribe((response) => {
            this.aboutus = response.body;
            if (this.aboutus.length != 0) {
                this.isAboutUs = true;
            }
        }, (err) => { });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_0__.HomeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 14, consts: [[1, "row", "row-sm", "m-0"], [1, "top", "container", "col-md-6", "col-lg-6", "col-sm-12"], [1, "item"], ["width", "100%", "src", "assets/img/main-logo.png"], ["href", "#packages", 1, "btn", "btn-primary", "tx-black", "px-4", "m-1", "btn-packages"], ["id", "bg-shared", 1, "col-md-6", "col-lg-6", "col-sm-12"], ["id", "about-us", 1, "about-us", "mt-4"], [1, "mb-4"], ["src", "./assets/img/full-logo.png", "alt", "TSHGHEEL", "height", "22px"], [4, "ngIf"], ["id", "packages"], ["id", "news"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2)(13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6)(18, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, HomeComponent_p_23_Template, 6, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-packages", 10)(25, "app-news-section", 11)(26, "app-emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, "choosethepackagethat"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 8, "isbestforyouandyourteam"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, "packages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 12, "ABOUT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAboutUs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isAboutUs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _packages_packages_component__WEBPACK_IMPORTED_MODULE_1__.PackagesComponent, _news_news_section_news_section_component__WEBPACK_IMPORTED_MODULE_2__.NewsSectionComponent, _emails_emails_component__WEBPACK_IMPORTED_MODULE_3__.EmailsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["#bg-shared[_ngcontent-%COMP%]::before {\n  background-image: url('server1.png') !important;\n}\n\n.top[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 360px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n  font-size: 46px;\n}\n\n.item[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 20px;\n  word-spacing: 4px;\n}\n\n.top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  padding: 5vh 0 0 0;\n  text-align: center;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  font-weight: bolder;\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after, .about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"   \";\n}\n\n#packages[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.btn-packages[_ngcontent-%COMP%] {\n  width: 40% !important;\n}\n\n@media screen and (max-width: 1000px) {\n  #bg-shared[_ngcontent-%COMP%] {\n    margin-bottom: 70vh;\n  }\n  #bg-shared[_ngcontent-%COMP%]::before {\n    background-image: url('server1.png') !important;\n    background-position: center;\n    background-position-x: 0px;\n    background-size: cover !important;\n    background-position: top;\n    height: 70vh;\n  }\n  .top[_ngcontent-%COMP%] {\n    height: 35vh;\n    margin-top: 10vh;\n    padding-left: 10px;\n    align-items: center;\n  }\n  .item[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%] {\n    max-width: 50vw;\n  }\n  .top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 29pt;\n  }\n  .item[_ngcontent-%COMP%]:nth-child(4) {\n    max-width: none;\n    width: 75%;\n    padding: 0px 0px !important;\n    justify-content: space-between;\n  }\n  .item[_ngcontent-%COMP%]:nth-child(4)   .btn.btn-primary[_ngcontent-%COMP%] {\n    padding: 5px 10px !important;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .about-us[_ngcontent-%COMP%] {\n    padding: 10px 3vw;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  #bg-shared[_ngcontent-%COMP%] {\n    margin-bottom: 10vh;\n  }\n  #bg-shared[_ngcontent-%COMP%]::before {\n    background-size: 100% 70% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFTQTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBT0E7RUFDSSxrQkFBQTtBQUpKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtJO0VBQ0ksaURBQUE7QUFIUjs7QUFLSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FBSFI7O0FBS0k7RUFDSSxjQUFBO0FBSFI7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVVBO0VBQ0UscUJBQUE7QUFQRjs7QUFVQTtFQUNJO0lBQ0ksbUJBQUE7RUFQTjtFQVdFO0lBQ0ksK0NBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsaUNBQUE7SUFDQSx3QkFBQTtJQUNBLFlBQUE7RUFUTjtFQVdFO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQVROO0VBV0U7SUFDSSxlQUFBO0VBVE47RUFXRTtJQUNJLGVBQUE7RUFUTjtFQVdFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0VBVE47RUFVTTtJQUNJLDRCQUFBO0VBUlY7QUFDRjs7QUFXQTtFQUNJO0lBQ0ksaUJBQUE7RUFUTjtBQUNGOztBQVdBO0VBQ0k7SUFFSSxtQkFBQTtFQVZOO0VBWUU7SUFFSSxvQ0FBQTtFQVhOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZy1zaGFyZWQ6OmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NlcnZlcjEucG5nXCIpICFpbXBvcnRhbnQ7XG59XG5cbi50b3B7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAwIDkwcHggMCA5MHB4O1xufVxuXG4vLyAuaXRlbSBpbWcge1xuLy8gICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDVkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAwJSk7XG4vLyB9XG5cblxuXG4udG9wIC5pdGVte1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udG9wIC5pdGVtIGgzIHtcbiAgICBmb250LWZhbWlseTogdHNoZ2VlbC1oZWF2eSwgJ1RhamF3YWwnLCBzYW5zLXNlcmlmLDtcbiAgICBmb250LXNpemU6IDQ2cHg7XG59XG4uaXRlbTpudGgtY2hpbGQoMyl7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdvcmQtc3BhY2luZzogNHB4O1xufVxuLnRvcCAuaXRlbSA+ICoge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC11cyB7XG4gICAgcGFkZGluZzogNXZoIDAgMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHNwYW4saDN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xuICAgIH1cbiAgICBzcGFuOjphZnRlcixzcGFuOjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcgICAnO1xuICAgIH1cbiAgICAvLyBoMyBpbWd7XG4gICAgLy8gICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNDVkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAwJSk7XG4gICAgLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAvLyB9XG5cbn1cbiNwYWNrYWdlc3tcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmJ0bi1wYWNrYWdlc3tcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjYmctc2hhcmVke1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHZoO1xuICAgIH1cblxuXG4gICAgI2JnLXNoYXJlZDo6YmVmb3Jle1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NlcnZlcjEucG5nXCIpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgfVxuICAgIC50b3Age1xuICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLml0ZW06bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICB9XG4gICAgLnRvcCAuaXRlbSBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjlwdDtcbiAgICB9XG4gICAgLml0ZW06bnRoLWNoaWxkKDQpe1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAuYnRuLmJ0bi1wcmltYXJ5e1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5hYm91dC11c3tcbiAgICAgICAgcGFkZGluZzogMTBweCAzdnc7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICNiZy1zaGFyZWR7XG4gICAgICAgIC8vIGhlaWdodDo2NXZoO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIH1cbiAgICAjYmctc2hhcmVkOjpiZWZvcmV7XG4gICAgICAgIC8vIGhlaWdodDogNzB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 117:
/*!********************************************!*\
  !*** ./src/app/pages/home/home.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class HomeService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getAboutus() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}about-us`);
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
HomeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7955:
/*!*******************************************************************!*\
  !*** ./src/app/pages/news/news-details/news-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailsComponent": () => (/* binding */ NewsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../news.service */ 898);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);




class NewsDetailsComponent {
    constructor(newsService, activateRoute, translate) {
        this.newsService = newsService;
        this.activateRoute = activateRoute;
        this.translate = translate;
        this.newsId = this.activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
        this.getNewsById();
    }
    getNewsById() {
        this.newsService.getNewsById(this.newsId).subscribe((data) => {
            this.newsData = data.body;
        });
    }
}
NewsDetailsComponent.ɵfac = function NewsDetailsComponent_Factory(t) { return new (t || NewsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
NewsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsDetailsComponent, selectors: [["app-news-details"]], decls: 12, vars: 7, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "news-img", "col-md-6"], ["width", "100%", "alt", "", 3, "src"], [1, "news-description", "col-lg-6"], [3, "innerHTML"]], template: function NewsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.newsData == null ? null : ctx.newsData.newsImage == null ? null : ctx.newsData.newsImage.fileHttp, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.lang == "ar" ? ctx.newsData.titleAr : ctx.newsData.titleEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lang == "ar" ? ctx.newsData == null ? null : ctx.newsData.titleAr : ctx.newsData == null ? null : ctx.newsData.titleEn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.lang == "ar" ? ctx.newsData.subTitleAr : ctx.newsData.subTitleEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.lang == "ar" ? ctx.newsData.subTitleAr : ctx.newsData.subTitleEn, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.lang == "ar" ? ctx.newsData.detailsAr : ctx.newsData == null ? null : ctx.newsData.detailsEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lang == "ar" ? ctx.newsData == null ? null : ctx.newsData.detailsAr : ctx.newsData == null ? null : ctx.newsData.detailsEn);
    } }, styles: ["#bg-shared[_ngcontent-%COMP%]::before{\n    background-image: url('background.png') !important;\n}\n.container[_ngcontent-%COMP%]{\n    padding-top: 50px;\n    padding-bottom: 50px;\n    min-height: 43vh;\n}\n.news-img[_ngcontent-%COMP%]{\n    max-width: 500px;\n}\n.news-description[_ngcontent-%COMP%]{\n    text-align: justify;\n}\n@media (max-width: 992px) {\n    .row[_ngcontent-%COMP%]{\n        gap: 40px;\n        \n    }\n    .container[_ngcontent-%COMP%]{\n        padding: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0RBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6Im5ld3MtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnLXNoYXJlZDo6YmVmb3Jle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIikgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgbWluLWhlaWdodDogNDN2aDtcbn1cbi5uZXdzLWltZ3tcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLm5ld3MtZGVzY3JpcHRpb257XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLnJvd3tcbiAgICAgICAgZ2FwOiA0MHB4O1xuICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7ICovXG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 7302:
/*!*************************************************************!*\
  !*** ./src/app/pages/news/news-page/news-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageComponent": () => (/* binding */ NewsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../news.service */ 898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






function NewsPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1 == null ? null : item_r1.newsImage == null ? null : item_r1.newsImage.fileHttp, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.lang == "ar" ? item_r1.titleAr : item_r1.titleEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.lang == "ar" ? item_r1.titleAr : item_r1.titleEn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.lang == "ar" ? item_r1.subTitleAr : item_r1.subTitleEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.lang == "ar" ? item_r1.subTitleAr : item_r1.subTitleEn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/news/", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "read-more"));
} }
class NewsPageComponent {
    constructor(newsService, translate) {
        this.newsService = newsService;
        this.translate = translate;
        this.collectionSize = 0; // Total number of news items
        this.pageSize = 10; // Number of news items per page
        this.currentPage = 1; // Current page number
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
        this.getAllNews(this.currentPage);
    }
    // getAllNews(page: number = 0){
    //   this.newsService.getAllNews(page).subscribe(
    //     (data) => {
    //       this.news = data.body;
    //     }
    //   )
    // }
    getAllNews(page) {
        this.newsService.getAllNews(page - 1).subscribe((data) => {
            this.news = data.body;
            this.collectionSize = data.body?.totalElements || 0; // Total items
        }, (error) => {
            console.error('Error fetching news:', error);
        });
    }
    page($event) {
        this.currentPage = $event; // Update current page
        this.getAllNews(this.currentPage); // Fetch news for the selected page
    }
}
NewsPageComponent.ɵfac = function NewsPageComponent_Factory(t) { return new (t || NewsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
NewsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsPageComponent, selectors: [["app-news-page"]], decls: 10, vars: 7, consts: [[1, "container"], [1, "mb-4", "text-center"], [1, "row", "justify-content-center"], ["class", "news-card col-lg-4 p-3", 4, "ngFor", "ngForOf"], [1, "text-center", "btn-group"], [3, "collectionSize", "pageSize", "page", "pageChange"], [1, "news-card", "col-lg-4", "p-3"], [1, "news-img"], ["alt", "", 3, "src"], [1, "news-excerpt"], [3, "innerHTML"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function NewsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NewsPageComponent_div_6_Template, 11, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 4)(9, "ngb-pagination", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function NewsPageComponent_Template_ngb_pagination_pageChange_9_listener($event) { return ctx.currentPage = $event; })("pageChange", function NewsPageComponent_Template_ngb_pagination_pageChange_9_listener($event) { return ctx.page($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "news"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news == null ? null : ctx.news.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", ctx.collectionSize)("pageSize", ctx.pageSize)("page", ctx.currentPage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPagination, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["#bg-shared[_ngcontent-%COMP%]::before{\n    background-image: url('background.png') !important;\n}\n.container[_ngcontent-%COMP%]{\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n.news-card[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 350px;\n\n}\n.news-img[_ngcontent-%COMP%]{\n    height: 300px;\n    max-width: 350px;\n    overflow: hidden;\n    border: 0.5px solid white;\n    display: flex;\n    align-items: center;\n    border-radius: 5px 5px 0 0;\n}\n.news-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: 1s;\n    width: 100%;\n    height: 100%;\n}\n.news-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n    transform: scale(1.3,1.3);\n}\n.news-excerpt[_ngcontent-%COMP%] {\n    text-align: center;\n    border: 0.5px solid white;\n    padding: 30px 20px;\n    border-radius: 0 0 5px 5px;\n}\n.news-excerpt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    height: 100px;\n    overflow: hidden;\n}\n.news-excerpt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    \n    padding: 8px 40px;\n}\n.btn-group[_ngcontent-%COMP%]{\n    width: -moz-fit-content;\n    width: fit-content;\n    display: block;\n    margin: auto;\n    \n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    color: #6a215a !important;\n    background-color: #6a215a !important;\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n    color: #000 !important;\n}\na.page-link[_ngcontent-%COMP%] {\n    color: #642159 !important;\n}\n.page-link.active[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]    > .page-link[_ngcontent-%COMP%] {\n    z-index: 3;\n    color: #642159 !important;\n    background-color: #672159;\n    border-color: #69215a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0RBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZOztBQUVoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4QztBQUlBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJuZXdzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZy1zaGFyZWQ6OmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQucG5nXCIpICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ubmV3cy1jYXJkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG5cbn1cbi5uZXdzLWltZ3tcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cbi5uZXdzLWltZyBpbWcge1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm5ld3MtaW1nIGltZzpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywxLjMpO1xufVxuXG4ubmV3cy1leGNlcnB0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG59XG5cbi5uZXdzLWV4Y2VycHQgcCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmV3cy1leGNlcnB0IC5idG4ge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gICAgcGFkZGluZzogOHB4IDQwcHg7XG59XG4uYnRuLWdyb3Vwe1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG59XG4uYnRuLWdyb3VwIGJ1dHRvbntcbiAgICBjb2xvcjogIzZhMjE1YSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YTIxNWEgIWltcG9ydGFudDtcbn1cblxuXG5cbi5idG4tZ3JvdXAgYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5hLnBhZ2UtbGluayB7XG4gICAgY29sb3I6ICM2NDIxNTkgIWltcG9ydGFudDtcbn1cbi5wYWdlLWxpbmsuYWN0aXZlLCAuYWN0aXZlID4gLnBhZ2UtbGluayB7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogIzY0MjE1OSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzIxNTk7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjkyMTVhO1xufSJdfQ== */"] });


/***/ }),

/***/ 5769:
/*!*******************************************************************!*\
  !*** ./src/app/pages/news/news-section/news-section.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsSectionComponent": () => (/* binding */ NewsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../news.service */ 898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function NewsSectionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1 == null ? null : item_r1.newsImage == null ? null : item_r1.newsImage.fileHttp, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.lang == "ar" ? item_r1.titleAr : item_r1.titleEn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.lang == "ar" ? item_r1.subTitleAr : item_r1.subTitleEn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/news/", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, "read-more"));
} }
class NewsSectionComponent {
    constructor(newsService, translate) {
        this.newsService = newsService;
        this.translate = translate;
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
        this.getAllNews();
    }
    getAllNews() {
        this.newsService.getNews().subscribe((data) => {
            this.news = data.body;
        });
    }
}
NewsSectionComponent.ɵfac = function NewsSectionComponent_Factory(t) { return new (t || NewsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
NewsSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsSectionComponent, selectors: [["app-news-section"]], decls: 10, vars: 7, consts: [[1, "container"], [1, "mb-4", "text-center"], [1, "row", "justify-content-center"], ["class", "news-card col-lg-4 p-3", 4, "ngFor", "ngForOf"], [1, "more", "text-center"], ["routerLink", "/news", 1, "btn", "btn-outline-primary"], [1, "news-card", "col-lg-4", "p-3"], [1, "news-img"], ["alt", "", 3, "src"], [1, "news-excerpt"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function NewsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NewsSectionComponent_div_5_Template, 11, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "news"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, "more"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".container[_ngcontent-%COMP%]{\n    padding-top: 100px;\n    padding-bottom: 50px;\n}\n\n.news-card[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 400px;\n\n}\n\n.news-img[_ngcontent-%COMP%]{\n    height: 288px;\n    max-width: 400px;\n    overflow: hidden;\n    border: 0.5px solid #FFF;\n    display: flex;\n    align-items: center;\n    border-radius: 5px 5px 0 0;\n    overflow: hidden;\n}\n\n.news-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: 1s;\n    width: 100%;\n    height: 100%;\n}\n\n.news-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n    transform: scale(1.3,1.3);\n}\n\n.news-excerpt[_ngcontent-%COMP%] {\n    text-align: center;\n    border: 0.5px solid #000000;\n    padding: 30px 20px;\n    border-radius: 0 0 5px 5px;\n}\n\n.news-excerpt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    height: 100px;\n    overflow: hidden;\n}\n\n.news-excerpt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: #fff;\n    padding: 5px 40px;\n}\n\n.more[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Mtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTs7QUFFQSIsImZpbGUiOiJuZXdzLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5uZXdzLWNhcmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcblxufVxuLm5ld3MtaW1ne1xuICAgIGhlaWdodDogMjg4cHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0ZGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ld3MtaW1nIGltZyB7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmV3cy1pbWcgaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLDEuMyk7XG59XG5cbi5uZXdzLWV4Y2VycHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDAwMDA7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xufVxuXG4ubmV3cy1leGNlcnB0IHAge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ld3MtZXhjZXJwdCAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCA0MHB4O1xufVxuXG4ubW9yZSAuYnRue1xuXG59XG4iXX0= */"] });


/***/ }),

/***/ 898:
/*!********************************************!*\
  !*** ./src/app/pages/news/news.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class NewsService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getAllNews(page) {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}news/getAllNewsByPageable?page=${page}`);
    }
    getNewsById(newsId) {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}news/${newsId}`);
    }
    getNews() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}news`);
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
NewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9490:
/*!********************************************************************!*\
  !*** ./src/app/pages/package-details/package-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageDetailsComponent": () => (/* binding */ PackageDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_save_subscription_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/save_subscription_dto */ 2646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _package_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package-details.service */ 9036);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function PackageDetailsComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.detailDescription);
} }
class PackageDetailsComponent {
    constructor(activateRoute, packageDetailsService, translate, router) {
        this.activateRoute = activateRoute;
        this.packageDetailsService = packageDetailsService;
        this.translate = translate;
        this.router = router;
        this.routerDetails = {
            packageId: 0,
            activeUsers: 0,
            unactiveUsers: 0,
            activeUserPrice: 0.0,
            inactiveUserPrice: 0.0,
            period: null,
        };
        this.packageDetails = null;
    }
    ngOnInit() {
        this.setRouterDetails();
        this.getPackageDetails();
    }
    setRouterDetails() {
        let keys = Object.keys(this.routerDetails);
        keys.forEach((key) => {
            this.routerDetails[key] =
                this.activateRoute.snapshot.queryParamMap.get(key);
        });
    }
    getPackageDetails() {
        this.packageDetailsService
            .getPackageDetails(this.routerDetails.packageId)
            .subscribe((response) => {
            ;
            this.packageDetails = response;
            this.setBackgroundImageBasedOnPackage();
        }, (err) => { });
    }
    setBackgroundImageBasedOnPackage() {
        const styleElement = document.querySelector('style');
        const styleSheet = styleElement.sheet;
        let packName = this.packageDetails?.packageModel.packageName;
        let imgUrl;
        if (packName == 'HR') {
            imgUrl = `url('../../assets/img/hr.png')`;
        }
        else if (packName == 'FullTrial') {
            imgUrl = `url('../../assets/img/full-package.png')`;
        }
        else {
            imgUrl = `url('../../assets/img/finance-and-accounting.png')`;
        }
        styleSheet?.deleteRule(0);
        styleSheet.insertRule(`#bg-shared::before { background-image: ${imgUrl} !important; }`, 0);
    }
    getPackagePrice() {
        return this.routerDetails?.period == 'yearly'
            ? this.packageDetails?.packageModel.yearlyPackagePrice
            : this.packageDetails?.packageModel.monthlyPackagePrice;
    }
    getPackagePriceYearly() {
        return this.routerDetails?.period == 'yearly'
            ? this.packageDetails?.packageModel.yearlyPackagePrice
            : this.packageDetails?.packageModel.monthlyPackagePrice * 12;
    }
    per() {
        return this.routerDetails?.period == 'yearly' ? 'Year' : 'Month';
    }
    goToSubscription() {
        this.addNewSubscription();
        this.router.navigate(['/subscription/'], {
            queryParams: {
                packageId: this.routerDetails.packageId,
                activeUsers: this.routerDetails.activeUsers,
                unactiveUsers: this.routerDetails.unactiveUsers,
                period: this.routerDetails.period,
            },
        });
    }
    addNewSubscription() {
        let subscribeDTO = (0,src_app_interfaces_save_subscription_dto__WEBPACK_IMPORTED_MODULE_0__.initlizeSubscriptionDTO)();
        subscribeDTO.subcriptionDTO.packageId = this.routerDetails.packageId;
        subscribeDTO.subcriptionDTO.repeatPeriod = 1;
        subscribeDTO.subcriptionDTO.subscriptionPeriod = this.routerDetails.period
            .toString()
            .toUpperCase();
        subscribeDTO.subscriptionInformationDTO.totalCost = 1.0;
        subscribeDTO.subscriptionInformationDTO.availableActiveUsers = this.routerDetails.activeUsers;
        subscribeDTO.subscriptionInformationDTO.availableInactiveUsers = this.routerDetails.unactiveUsers;
        this.packageDetailsService.addNewSubscription(subscribeDTO).subscribe((res) => { }, (err) => { });
    }
}
PackageDetailsComponent.ɵfac = function PackageDetailsComponent_Factory(t) { return new (t || PackageDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_package_details_service__WEBPACK_IMPORTED_MODULE_1__.PackageDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PackageDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PackageDetailsComponent, selectors: [["app-package-details"]], decls: 33, vars: 24, consts: [[1, "top"], [1, "item"], [1, "item", "px-4", "mt-2"], [1, "btn", "btn-primary", "tx-black", "w-100", 3, "click"], [1, "container"], [1, "card", "d-flex", "flex-column", "m-2"], [1, "card-header"], [1, "card-body"], [1, "list"], [4, "ngFor", "ngForOf"]], template: function PackageDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1)(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2)(21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PackageDetailsComponent_Template_a_click_21_listener() { return ctx.goToSubscription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4)(25, "div", 5)(26, "div", 6)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7)(31, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, PackageDetailsComponent_li_32_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 10, ctx.packageDetails == null ? null : ctx.packageDetails.packageModel.packageName));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.getPackagePrice(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, "SAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 14, ctx.per()), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("+", ctx.getPackagePriceYearly(), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 16, "SAR"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 18, "annuallyVAT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 20, "Subscribe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 22, ctx.packageDetails == null ? null : ctx.packageDetails.packageModel.packageName));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.packageDetails == null ? null : ctx.packageDetails.packageDetails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-width: 0.5px;\n  border-radius: 5px;\n  min-width: 40vw;\n  width: 40vw;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-bottom-color: #fff;\n  border-bottom-width: 0.5px;\n}\n.top[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 90px;\n}\n.top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 360px;\n  text-align: center;\n}\n.top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n  font-size: 46px;\n}\n.item[_ngcontent-%COMP%]:nth-child(3) {\n  word-spacing: 4px;\n}\n.top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-us[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-us[_ngcontent-%COMP%] {\n  padding: 10px 15vw;\n}\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n  font-size: 25pt;\n  font-weight: bolder;\n}\n@media screen and (max-width: 500px) {\n  .top[_ngcontent-%COMP%] {\n    margin-top: 8vh;\n    padding: 0 10px;\n    align-items: center;\n    height: 80vh;\n  }\n  .item[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n  .top[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 29pt;\n  }\n  .item[_ngcontent-%COMP%]:nth-child(4) {\n    max-width: none;\n    width: 75%;\n    padding: 0px 0px !important;\n    justify-content: space-between;\n  }\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  color: #BEBEBE;\n  border-width: 0.5px;\n}\n.table[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(caption)    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: white;\n  background-color: transparent;\n  padding: 15px 30px;\n  border-width: 0.5px;\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #BEBEBE;\n  margin-bottom: 10px;\n}\n.table[_ngcontent-%COMP%] {\n  width: 80%;\n  border-radius: 5px;\n}\n.table-bordered[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n@media screen and (max-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    gap: 20px;\n    padding: 0;\n  }\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    min-width: 90vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtBQURKO0FBRUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBUjtBQUdJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQURSO0FBSUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUE7RUFFSSxpQkFBQTtBQUZKO0FBSUE7RUFDSSxrQkFBQTtBQURKO0FBR0E7RUFDSSxrQkFBQTtBQUFKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxpREFBQTtBQUVSO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVSO0FBSUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBRE47RUFHRTtJQUNJLFdBQUE7RUFETjtFQUdFO0lBQ0ksZUFBQTtFQUROO0VBR0U7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0lBQ0EsOEJBQUE7RUFETjtFQUlNO0lBQ0ksZ0JBQUE7RUFGVjtBQUNGO0FBTUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1BO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLDZCQUFBO0FBQUo7QUFvQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VBakJOO0VBa0JNO0lBQ0ksZUFBQTtFQWhCVjtBQUNGIiwiZmlsZSI6InBhY2thZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nOiA1MHB4IDgwcHggODBweCA4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmNhcmR7XG4gICAgICAgIGJvcmRlci13aWR0aDogMC41cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHZ3O1xuICAgICAgICB3aWR0aDogNDB2dztcbiAgICB9XG4gICAgXG4gICAgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XG4gICAgfVxufVxuLnRvcHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDkwcHg7XG4gICAgXG59XG5cbi50b3AgLml0ZW17XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50b3AgLml0ZW0gaDMge1xuICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbn1cbi5pdGVtOm50aC1jaGlsZCgzKXtcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XG4gICAgd29yZC1zcGFjaW5nOiA0cHg7XG59XG4udG9wIC5pdGVtID4gKiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LXVze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC11cyB7XG4gICAgcGFkZGluZzogMTBweCAxNXZ3O1xuICAgIHNwYW4saDN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cblxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgfVxuICAgIC5pdGVtOm50aC1jaGlsZCgyKSBpbWcge1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICB9XG4gICAgLnRvcCAuaXRlbSBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjlwdDtcbiAgICB9XG4gICAgLml0ZW06bnRoLWNoaWxkKDQpe1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAuY29udGFpbmVye1xuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGV7XG4gICAgY29sb3I6ICNCRUJFQkU7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcbn1cbi50YWJsZSA+IDpub3QoY2FwdGlvbikgPiAqID4gKntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGJvcmRlci13aWR0aDogMC41cHg7XG59XG4ubGlzdCBsaSB7XG4gICAgY29sb3I6ICNCRUJFQkU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50YWJsZXtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi50YWJsZS1ib3JkZXJlZHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cbi8vIC5pdGVtOm50aC1jaGlsZCgyKSB7XG4vLyAgICAgLy8gbWFyZ2luLWJvdHRvbTogMnB4O1xuLy8gICAgIHNwYW46bnRoLWNoaWxkKDEpe1xuLy8gICAgICAgICBzcGFue1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBmb250LXNpemU6IDMwcHg7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICBzcGFuOm50aC1jaGlsZCgyKXtcbi8vICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuLy8gICAgIH1cbi8vIH1cbi8vIC5pdGVtOm50aC1jaGlsZCgzKXtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuLy8gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBnYXA6MjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgICAgICB9XG4gICAgICAgIC8vIC5jYXJkIC5jYXJkLWhlYWRlciwuY2FyZCAuY2FyZC1ib2R5e1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIC5jYXJkOm50aC1jaGlsZChuKzEpe1xuICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ 9036:
/*!******************************************************************!*\
  !*** ./src/app/pages/package-details/package-details.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackageDetailsService": () => (/* binding */ PackageDetailsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PackageDetailsService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getPackageDetails(packageId) {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}package/${packageId}`);
    }
    addNewSubscription(subscribeDTO) {
        return this.http.post(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}subscription`, subscribeDTO);
    }
}
PackageDetailsService.ɵfac = function PackageDetailsService_Factory(t) { return new (t || PackageDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PackageDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PackageDetailsService, factory: PackageDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6905:
/*!******************************************************!*\
  !*** ./src/app/pages/packages/packages.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagesComponent": () => (/* binding */ PackagesComponent)
/* harmony export */ });
/* harmony import */ var _auth_registration_components_reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/registration/components/reg-wizard/wizard */ 2020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _packages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packages.service */ 1939);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function PackagesComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const package_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, package_r1.packageNameAr));
} }
function PackagesComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const package_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, package_r1.packageNameEn));
} }
const _c0 = function (a0) { return { "margin-bottom": a0 }; };
function PackagesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PackagesComponent_div_15_div_1_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PackagesComponent_div_15_div_2_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PackagesComponent_div_15_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const package_r1 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.goToPackageDetails(package_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 15)(14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PackagesComponent_div_15_Template_a_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r2 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.addActiveUser(i_r2, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PackagesComponent_div_15_Template_a_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r2 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.addActiveUser(i_r2, true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21)(29, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16)(37, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PackagesComponent_div_15_Template_a_click_37_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r2 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.addUnActiveUser(i_r2, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PackagesComponent_div_15_Template_a_click_41_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r2 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.addUnActiveUser(i_r2, true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div")(44, "div", 22)(45, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const package_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.translate.currentLang == "ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.translate.currentLang == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.getPackagePrice(package_r1), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 19, "SAR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 21, ctx_r0.per()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 23, "subscribeNow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 25, "Active User"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx_r0.getPriceForActiveUsers(package_r1), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 27, "SAR"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 29, ctx_r0.per()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getActiveUsers(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c0, package_r1.packageNameEn == "FullTrial" ? "2.5rem" : "1.5rem"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 31, "Unactive User"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx_r0.getPriceForInActiveUsers(package_r1), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 33, "SAR"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 35, ctx_r0.per()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getUnActiveUsers(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.translate.currentLang == "ar" ? package_r1.featuresDiscrptionAr : package_r1.featuresDiscrptionEn, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.translate.currentLang === "ar" ? package_r1.featuresDiscrptionAr : package_r1.featuresDiscrptionEn, "");
} }
class PackagesComponent {
    constructor(packagesService, router, translate) {
        this.packagesService = packagesService;
        this.router = router;
        this.translate = translate;
        this.companyRegister = new _auth_registration_components_reg_wizard_wizard__WEBPACK_IMPORTED_MODULE_0__.CompanyRegister();
        this.featuresList = [];
        this.packages = [];
        this.packagesPeriod = 'yearly';
        this.selectedPackage = null;
    }
    ngOnInit() {
        this.getAllPackages();
        this.changeBtnGroupRadius();
    }
    getAllPackages() {
        this.packagesService.getPackages().subscribe((response) => {
            ;
            this.packages = response.body;
            this.sortPackages();
        }, (err) => { });
    }
    sortPackages() {
        let fullPackageIndex = this.packages.findIndex(pk => pk.packageNameEn == "FullTrial");
        if (fullPackageIndex != -1) {
            let fullPackage = this.packages[fullPackageIndex];
            this.packages.splice(fullPackageIndex, 1);
            this.packages.splice(0, 0, fullPackage);
            // if(this.packages.length > 0){
            //   this.packages.splice(1, 0, fullPackage);
            // }else{
            //   this.packages.push(fullPackage);
            // }
        }
        // this.packages.splice(3);
    }
    toggle($event) {
        this.packagesPeriod = $event.target.value;
    }
    getPackagePrice(pack) {
        let userPrice = this.getUserPrice(pack);
        return ((this.packagesPeriod == 'yearly'
            ? pack.yearlyPackagePrice
            : pack.monthlyPackagePrice));
    }
    getUserPrice(pack) {
        return (pack.activeUserPrice * pack.activeUsersCounter +
            pack.inactiveUserPrice * pack.unactiveUsersCounter);
    }
    per() {
        return this.packagesPeriod == 'yearly' ? 'Year' : 'Month';
    }
    annually(pack) {
        return pack.monthlyPackagePrice * 0.15;
    }
    // activeUsersCounter: number = 0;
    // unactiveUsersCounter: number = 0;
    addActiveUser(index, add) {
        if (this.selectedPackage?.id == this.packages[index].id) {
            if (add)
                this.packages[index].activeUsersCounter++;
            else
                this.packages[index].activeUsersCounter--;
        }
        else {
            this.selectedPackage = this.packages[index];
            this.packages[index].activeUsersCounter = 0;
            this.packages[index].unactiveUsersCounter = 0;
            if (add)
                this.packages[index].activeUsersCounter++;
            else
                this.packages[index].activeUsersCounter--;
        }
        if (this.packages[index].activeUsersCounter < 0) {
            this.packages[index].activeUsersCounter = 0;
        }
    }
    addUnActiveUser(index, add) {
        if (this.selectedPackage?.id == this.packages[index].id) {
            if (add)
                this.packages[index].unactiveUsersCounter++;
            else
                this.packages[index].unactiveUsersCounter--;
        }
        else {
            this.selectedPackage = this.packages[index];
            this.packages[index].unactiveUsersCounter = 0;
            this.packages[index].activeUsersCounter = 0;
            if (add)
                this.packages[index].unactiveUsersCounter++;
            else
                this.packages[index].unactiveUsersCounter--;
        }
        if (this.packages[index].unactiveUsersCounter < 0) {
            this.packages[index].unactiveUsersCounter = 0;
        }
    }
    getActiveUsers(index) {
        if (this.packages[index].id) {
            if (this.packages[index].activeUsersCounter)
                return this.packages[index].activeUsersCounter;
            else
                return 0;
        }
        return 0;
    }
    getUnActiveUsers(index) {
        if (this.packages[index].id) {
            if (this.packages[index]?.unactiveUsersCounter)
                return this.packages[index]?.unactiveUsersCounter;
            else
                return 0;
        }
        return 0;
    }
    goToPackageDetails(pack) {
        if (pack.activeUsersCounter > 0 /* && pack.unactiveUsersCounter > 0*/) {
            this.router.navigate(['/subscription/'], {
                queryParams: {
                    packageId: pack.id,
                    activeUsers: pack.activeUsersCounter,
                    unactiveUsers: pack.unactiveUsersCounter,
                    period: this.packagesPeriod,
                },
            });
        }
    }
    changeBtnGroupRadius() {
        let labels = document.getElementsByTagName('label');
        let lang = this.translate.currentLang;
        if (lang === 'ar') {
            labels[0].style.borderRadius = '0 3px 3px 0';
            labels[1].style.borderRadius = '3px 0 0 3px';
        }
        else {
            labels[0].style.borderRadius = '3px 0 0 3px';
            labels[1].style.borderRadius = '0 3px 3px 0';
        }
    }
    getPriceForActiveUsers(pack) {
        return ((this.packagesPeriod == 'yearly' ? pack.activeUserPriceParYears : pack.activeUserPriceParMonths)
            *
                ((pack.activeUsersCounter) ? pack.activeUsersCounter : 0));
    }
    getPriceForInActiveUsers(pack) {
        return ((this.packagesPeriod == 'yearly' ? pack.inActiveUserPriceParYear : pack.inActiveUserPriceParMonths)
            *
                ((pack.unactiveUsersCounter) ? pack.unactiveUsersCounter : 0));
    }
}
PackagesComponent.ɵfac = function PackagesComponent_Factory(t) { return new (t || PackagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_packages_service__WEBPACK_IMPORTED_MODULE_1__.PackagesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
PackagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PackagesComponent, selectors: [["app-packages"]], decls: 16, vars: 10, consts: [[1, "packages", "d-flex", "flex-column", "justify-content-center"], [1, "mb-4", "text-center"], [1, "d-flex", "justify-content-center"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["value", "yearly", "type", "radio", "name", "btnradio", "id", "btnradio1", "autocomplete", "off", "checked", "", 1, "btn-check", 3, "change"], ["id", "btnradio1", "for", "btnradio1", 1, "btn", "btn-outline-primary"], ["value", "monthly", "type", "radio", "name", "btnradio", "id", "btnradio2", "autocomplete", "off", 1, "btn-check", 3, "change"], ["id", "btnradio2", "for", "btnradio2", 1, "btn", "btn-outline-primary"], [1, "container"], ["class", "package shared-container d-flex flex-column", 4, "ngFor", "ngForOf"], [1, "package", "shared-container", "d-flex", "flex-column"], [4, "ngIf"], [1, "pricing", "mb-3"], [1, "price"], [1, "btn", "btn-primary", "tx-black", "mb-4", 3, "click"], [1, "activeUsers"], [1, "rounded-pill", "pill", "d-flex", "justify-content-between"], [1, "btn", "btn-outline", "rounded-circle", 3, "click"], [1, "fa-solid", "fa-minus", "fa-lg"], [1, "rounded-circle", "btn-primary", "counter"], [1, "fa-solid", "fa-plus", "fa-lg"], [1, "unactiveUsers", "mt-1", 3, "ngStyle"], [1, "featuer"], [3, "innerHTML"]], template: function PackagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PackagesComponent_Template_input_change_6_listener($event) { return ctx.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PackagesComponent_Template_input_change_10_listener($event) { return ctx.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PackagesComponent_div_15_Template, 47, 39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "packages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, "yearly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "monthly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.packages);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".packages[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 50px 80px 80px 80px;\n  align-items: center;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.package[_ngcontent-%COMP%] {\n  height: 100% !important;\n  width: 100%;\n  transition: 500ms;\n  border-color: #22204F !important;\n}\n\n.package[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(114, 33, 91, 0.1979385504) 0px 5px 15px;\n  transform: scale(1.02);\n  border: 2px solid #22204F;\n}\n\n.package[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .package[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n}\n\n.package[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.package[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.container[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.container[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .unactiveUsers[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.pill[_ngcontent-%COMP%] {\n  border: 0.5px solid #22204F;\n  max-width: 155px;\n  height: 40px;\n  margin: 10px auto;\n  padding: 5px;\n}\n\n.pill[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #22204F;\n}\n\n.pill[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #22204F;\n  border-color: #22204F;\n}\n\n.pill[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-family: tshgeel-heavy, \"Tajawal\", sans-serif;\n  padding-top: 2px;\n}\n\n.featuer[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  border-color: white;\n}\n\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%]   .fa-solid[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: #fff;\n  border-color: #fff;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.package[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding: 15px 20px;\n}\n\n@media screen and (max-width: 1200px) {\n  .container[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]:nth-child(even)   ul[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  .package[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .package[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n  .package[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .package[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .package[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .package[_ngcontent-%COMP%]:nth-child(even)   .unactiveUsers[_ngcontent-%COMP%] {\n    margin-bottom: 3.5rem !important;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  #bg-shared[_ngcontent-%COMP%]::before {\n    background-position: center;\n    background-position-x: 0px;\n    background-repeat: no-repeat;\n  }\n}\n\n@media (min-width: 1200px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n\n@media (max-width: 767px) {\n  .package[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr); \n  }\n  .package[_ngcontent-%COMP%] {\n    grid-column: auto; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFFQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpREFBQTtBQUVKOztBQUFBO0VBRUcsdUJBQUE7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQURJO0VBQ0ksd0RBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBR1I7O0FBRUE7RUFDSSxpQkFBQTtFQUVBLGlEQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0FBSUo7O0FBR0E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDUjs7QUFDSTtFQUNJLGNBQUE7RUFFQSxxQkFBQTtBQUFSOztBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFJSTtFQUNJLHVCQUFBO0FBRlI7O0FBS0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFHSTtFQUNJLHVCQUFBO0FBRFI7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxrQkFBQTtFQUROO0FBQ0Y7O0FBR0E7RUFFSTtJQUNJLGVBQUE7RUFGTjtFQUlFO0lBQ0ksa0JBQUE7RUFGTjtFQUtNO0lBQ0ksa0JBQUE7RUFIVjtFQU1FO0lBQ0ksZ0NBQUE7RUFKTjtBQUNGOztBQU1BO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUFKTjtBQUNGOztBQU1BO0VBRUk7SUFDQSxlQUFBO0VBTEY7QUFDRjs7QUFPQTtFQUNJO0lBQ0UsaUJBQUE7RUFMSjtBQUNGOztBQU9FO0VBQ0U7SUFDRSxxQ0FBQSxFQUFBLGtCQUFBO0VBTEo7RUFRRTtJQUNFLGlCQUFBLEVBQUEsMkNBQUE7RUFOSjtBQUNGIiwiZmlsZSI6InBhY2thZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhY2thZ2Vze1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogNTBweCA4MHB4IDgwcHggODBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaDV7XG4gICAgZm9udC1mYW1pbHk6IHRzaGdlZWwtaGVhdnksICdUYWphd2FsJywgc2Fucy1zZXJpZiw7XG59XG4ucGFja2FnZXtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcbiAgICBib3JkZXItY29sb3I6ICMyMjIwNEYgIWltcG9ydGFudDtcbiAgICAmOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDExNCwzMyw5MSwwLjE5NzkzODU1MDQyMDE2ODA2KSAwcHggNXB4IDE1cHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjIwNEY7XG4gICAgfVxufVxuXG5cbi5wYWNrYWdlIGg0LC5wYWNrYWdlIC5wcmljaW5nIC5wcmljZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gZm9udC1zaXplOiAyM3B4O1xuICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xufVxuLnBhY2thZ2UgLnByaWNpbmcgLnByaWNlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4ucGFja2FnZSBzcGFue1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uY29udGFpbmVyIC5wYWNrYWdlIHVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlIC51bmFjdGl2ZVVzZXJze1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxufVxuLy8gLmNvbnRhaW5lciAucGFja2FnZTpudGgtY2hpbGQoZXZlbikgLnVuYWN0aXZlVXNlcnN7XG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbi8vIH1cblxuLnBpbGx7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMjIyMDRGO1xuICAgIG1heC13aWR0aDogMTU1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA3cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzIyMjA0RjtcbiAgICB9XG4gICAgLmJ0bjpob3ZlcntcbiAgICAgICAgY29sb3I6ICMyMjIwNEY7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyMjIwNEY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzIyMjA0RjtcbiAgICB9XG4gICAgLmNvdW50ZXJ7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB0c2hnZWVsLWhlYXZ5LCAnVGFqYXdhbCcsIHNhbnMtc2VyaWYsO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIH1cbiAgICAvLyBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG5cbi5mZWF0dWVye1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmJ0bi1jaGVjazpjaGVja2VkICsgLmJ0bntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAuZmEtc29saWR7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5idG46aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpe1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG59XG4ucGFja2FnZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgICAuY29udGFpbmVyIC5wYWNrYWdlOm50aC1jaGlsZChldmVuKSB1bHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gICAgLnBhY2thZ2UgaDQsLnBhY2thZ2UgLnByaWNpbmcgLnByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxuICAgIC5wYWNrYWdle1xuICAgICAgICBkaXYgaDQsc3BhbiwucHJpY2luZ3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFja2FnZTpudGgtY2hpbGQoZXZlbikgLnVuYWN0aXZlVXNlcnN7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgI2JnLXNoYXJlZDo6YmVmb3Jle1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpXG4ge1xuICAgIGg0e1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucGFja2FnZSB7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVye1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgLyogVGhyZWUgY29sdW1ucyAqL1xuICAgIH1cblxuICAgIC5wYWNrYWdlIHtcbiAgICAgIGdyaWQtY29sdW1uOiBhdXRvOyAvKiBSZXNldCBncmlkLWNvbHVtbiB0byBpdHMgZGVmYXVsdCB2YWx1ZSAqL1xuICAgIH1cbiAgfVxuIl19 */"] });


/***/ }),

/***/ 1939:
/*!****************************************************!*\
  !*** ./src/app/pages/packages/packages.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagesService": () => (/* binding */ PackagesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PackagesService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getPackages() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}package/allData`);
    }
}
PackagesService.ɵfac = function PackagesService_Factory(t) { return new (t || PackagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PackagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PackagesService, factory: PackagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2262:
/*!**************************************************************************!*\
  !*** ./src/app/pages/privacy-and-policy/privacy-and-policy.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyAndPolicyComponent": () => (/* binding */ PrivacyAndPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _privacy_and_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-and-policy.service */ 4310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function PrivacyAndPolicyComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.getDesc(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class PrivacyAndPolicyComponent {
    constructor(translate, privacyService) {
        this.translate = translate;
        this.privacyService = privacyService;
        this.privacyAndPolicy = null;
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
        this.getPrivacyAndPolicy();
    }
    getPrivacyAndPolicy() {
        this.privacyService.getPrivacyAndPolicy().subscribe((response) => {
            this.privacyAndPolicy = response;
        }, (err) => { });
    }
    getDesc() {
        return this.translate.currentLang == 'ar' ? this.privacyAndPolicy?.descriptionAr : this.privacyAndPolicy?.descriptionEn;
    }
}
PrivacyAndPolicyComponent.ɵfac = function PrivacyAndPolicyComponent_Factory(t) { return new (t || PrivacyAndPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_privacy_and_policy_service__WEBPACK_IMPORTED_MODULE_0__.PrivacyAndPolicyService)); };
PrivacyAndPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrivacyAndPolicyComponent, selectors: [["app-privacy-and-policy"]], decls: 6, vars: 4, consts: [[1, "container", "d-flex", "flex-column", "justify-content-start", "text-center"], [1, "heading"], ["class", "lh-lg", 3, "innerHTML", 4, "ngIf"], [1, "lh-lg", 3, "innerHTML"]], template: function PrivacyAndPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PrivacyAndPolicyComponent_p_5_Template, 1, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "privacy-and-policy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.privacyAndPolicy);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["#bg-shared[_ngcontent-%COMP%]::before {\n  background-image: url('background.png') !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktYW5kLXBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUoiLCJmaWxlIjoicHJpdmFjeS1hbmQtcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnLXNoYXJlZDo6YmVmb3Jle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIikgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBcbn0iXX0= */"] });


/***/ }),

/***/ 4310:
/*!************************************************************************!*\
  !*** ./src/app/pages/privacy-and-policy/privacy-and-policy.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyAndPolicyService": () => (/* binding */ PrivacyAndPolicyService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PrivacyAndPolicyService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getPrivacyAndPolicy() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}privacy/getLast`);
    }
}
PrivacyAndPolicyService.ɵfac = function PrivacyAndPolicyService_Factory(t) { return new (t || PrivacyAndPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PrivacyAndPolicyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PrivacyAndPolicyService, factory: PrivacyAndPolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7007:
/*!******************************************************************************!*\
  !*** ./src/app/pages/terms-and-conditions/terms-and-conditions.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsComponent": () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _terms_and_conditions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.service */ 4759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function TermsAndConditionsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.lang == "ar" ? item_r1.descriptionAr : item_r1.descriptionEn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class TermsAndConditionsComponent {
    constructor(translate, termsService) {
        this.translate = translate;
        this.termsService = termsService;
        this.termsAndConditions = null;
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.lang = event.lang;
        });
        if (!this.lang)
            this.lang = this.translate.currentLang;
        this.getTermsAndConditions();
    }
    getTermsAndConditions() {
        this.termsService.getTermsAndConditions().subscribe((response) => {
            this.termsAndConditions = response.body;
        }, (err) => { });
    }
}
TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) { return new (t || TermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_terms_and_conditions_service__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsService)); };
TermsAndConditionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermsAndConditionsComponent, selectors: [["app-terms-and-conditions"]], decls: 6, vars: 4, consts: [[1, "container", "d-flex", "flex-column", "justify-content-start", "text-center", "scrollable-container"], [1, "heading"], [4, "ngFor", "ngForOf"], [1, "lh-lg", 3, "innerHTML"]], template: function TermsAndConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TermsAndConditionsComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "terms and conditions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.termsAndConditions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["#bg-shared[_ngcontent-%COMP%]::before {\n  background-image: url('background.png') !important;\n}\n\n.scrollable-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0RBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoidGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmctc2hhcmVkOjpiZWZvcmV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsYWJsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4759:
/*!****************************************************************************!*\
  !*** ./src/app/pages/terms-and-conditions/terms-and-conditions.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsService": () => (/* binding */ TermsAndConditionsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class TermsAndConditionsService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    getTermsAndConditions() {
        return this.http.get(`${this.apiServerUrl.apiBaseUrl}${this.apiServerUrl.adminServiceBaseUrl}terms-and-conditions`);
    }
}
TermsAndConditionsService.ɵfac = function TermsAndConditionsService_Factory(t) { return new (t || TermsAndConditionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TermsAndConditionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TermsAndConditionsService, factory: TermsAndConditionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const BASE_URL = 'http://23.88.112.13:9010/api/v1/';
const environment = {
    production: false,
    tashgeelBaseUrl: 'http://23.88.112.13:4201',
    apiBaseUrl: 'http://23.88.112.13:9010',
    merchantServiceBaseUrl: '/api/v1/merchant-service/',
    adminServiceBaseUrl: '/api/v1/admin-service/',
    adminUrl: `${BASE_URL}admin-service/`,
    authenticationServiceBaseUrl: '/api/v1/users/auth/',
    registerationServiceBaseUrl: '/api/v1/registration-service/',
    websiteDashboardServiceBpaseUrl: '/api/v1/website-dashboard-service/',
    hyperpayBpaseUrl: '/api/v1/external-integration-service/',
    cookieDomain: 'localhost'
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map