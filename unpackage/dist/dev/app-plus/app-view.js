/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** D:/clors/clors-ui/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 2);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();

  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** D:/clors/clors-ui/pages.json?{"type":"view"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
window.__uniConfig = { "window": { "navigationBarTextStyle": "black", "pageOrientation": "portrait", "animationType": "pop-in", "animationDuration": "500", "titleNView": false } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}

/***/ }),
/* 2 */
/*!*******************************************************************!*\
  !*** D:/clors/clors-ui/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 3);
/* harmony import */ var _clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_clors_download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/clors/clors-ui/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 8).default
var update = add("755d75f4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 4 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/clors/clors-ui/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../clors-download/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js */ 6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/static/icon/iconfont.ttf */ 7);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/* free默認樣式庫 */\r\n/* 示意背景，仅用作开发过程展示元素范围 */\n.bg-red {\r\n  background-color: red;\n}\n.bg-blue {\r\n  background-color: blue;\n}\r\n/* 内容溢出 */\n.overflow-hidden {\r\n  overflow: hidden;\n}\r\n/* 宽度 */\n.w-100 {\r\n  width: 750rpx;\n}\r\n/* 透明度 */\n.opacity-0 {\r\n  opacity: 0;\n}\n.opacity-1 {\r\n  opacity: 1;\n}\r\n/* 外边距 */\n.m-0 {\r\n  margin: 0rpx;\n}\n.mt-0 {\r\n  margin-top: 0rpx;\n}\n.mr-0 {\r\n  margin-right: 0rpx;\n}\n.mb-0 {\r\n  margin-bottom: 0rpx;\n}\n.ml-0 {\r\n  margin-left: 0rpx;\n}\n.mx-0 {\r\n  margin-left: 0rpx;\r\n  margin-right: 0rpx;\n}\n.my-0 {\r\n  margin-top: 0rpx;\r\n  margin-bottom: 0rpx;\n}\n.m-1 {\r\n  margin: 10rpx;\n}\n.mt-1 {\r\n  margin-top: 10rpx;\n}\n.mr-1 {\r\n  margin-right: 10rpx;\n}\n.mb-1 {\r\n  margin-bottom: 10rpx;\n}\n.ml-1 {\r\n  margin-left: 10rpx;\n}\n.mx-1 {\r\n  margin-left: 10rpx;\r\n  margin-right: 10rpx;\n}\n.my-1 {\r\n  margin-top: 10rpx;\r\n  margin-bottom: 10rpx;\n}\n.m-2 {\r\n  margin: 20rpx;\n}\n.mt-2 {\r\n  margin-top: 20rpx;\n}\n.mr-2 {\r\n  margin-right: 20rpx;\n}\n.mb-2 {\r\n  margin-bottom: 20rpx;\n}\n.ml-2 {\r\n  margin-left: 20rpx;\n}\n.mx-2 {\r\n  margin-left: 20rpx;\r\n  margin-right: 20rpx;\n}\n.my-2 {\r\n  margin-top: 20rpx;\r\n  margin-bottom: 20rpx;\n}\n.m-3 {\r\n  margin: 30rpx;\n}\n.mt-3 {\r\n  margin-top: 30rpx;\n}\n.mr-3 {\r\n  margin-right: 30rpx;\n}\n.mb-3 {\r\n  margin-bottom: 30rpx;\n}\n.ml-3 {\r\n  margin-left: 30rpx;\n}\n.mx-3 {\r\n  margin-left: 30rpx;\r\n  margin-right: 30rpx;\n}\n.my-3 {\r\n  margin-top: 30rpx;\r\n  margin-bottom: 30rpx;\n}\n.m-4 {\r\n  margin: 40rpx;\n}\n.mt-4 {\r\n  margin-top: 40rpx;\n}\n.mr-4 {\r\n  margin-right: 40rpx;\n}\n.mb-4 {\r\n  margin-bottom: 40rpx;\n}\n.ml-4 {\r\n  margin-left: 40rpx;\n}\n.mx-4 {\r\n  margin-left: 40rpx;\r\n  margin-right: 40rpx;\n}\n.my-4 {\r\n  margin-top: 40rpx;\r\n  margin-bottom: 40rpx;\n}\n.m-5 {\r\n  margin: 50rpx;\n}\n.mt-5 {\r\n  margin-top: 50rpx;\n}\n.mr-5 {\r\n  margin-right: 50rpx;\n}\n.mb-5 {\r\n  margin-bottom: 50rpx;\n}\n.ml-5 {\r\n  margin-left: 50rpx;\n}\n.mx-5 {\r\n  margin-left: 50rpx;\r\n  margin-right: 50rpx;\n}\n.my-5 {\r\n  margin-top: 50rpx;\r\n  margin-bottom: 50rpx;\n}\n.m-6 {\r\n  margin: 60rpx;\n}\n.mt-6 {\r\n  margin-top: 60rpx;\n}\n.mr-6 {\r\n  margin-right: 60rpx;\n}\n.mb-6 {\r\n  margin-bottom: 60rpx;\n}\n.ml-6 {\r\n  margin-left: 60rpx;\n}\n.mx-6 {\r\n  margin-left: 60rpx;\r\n  margin-right: 60rpx;\n}\n.my-6 {\r\n  margin-top: 60rpx;\r\n  margin-bottom: 60rpx;\n}\n.m-8 {\r\n  margin: 80rpx;\n}\n.mt-8 {\r\n  margin-top: 80rpx;\n}\n.mr-8 {\r\n  margin-right: 80rpx;\n}\n.mb-8 {\r\n  margin-bottom: 80rpx;\n}\n.ml-8 {\r\n  margin-left: 80rpx;\n}\n.mx-8 {\r\n  margin-left: 80rpx;\r\n  margin-right: 80rpx;\n}\n.my-8 {\r\n  margin-top: 80rpx;\r\n  margin-bottom: 80rpx;\n}\r\n/* 边框 */\n.border {\r\n  border-width: 1rpx;\r\n  border-style: solid;\n}\n.border-top {\r\n  border-top-width: 1rpx;\r\n  border-top-style: solid;\n}\n.border-right {\r\n  border-right-width: 1rpx;\r\n  border-right-style: solid;\n}\n.border-bottom {\r\n  border-bottom-width: 1rpx;\r\n  border-bottom-style: solid;\n}\n.border-left {\r\n  border-left-width: 1rpx;\r\n  border-left-style: solid;\n}\n.border-0 {\r\n  border-width: 0 !important;\n}\n.border-top-0 {\r\n  border-top-width: 0 !important;\n}\n.border-right-0 {\r\n  border-right-width: 0 !important;\n}\n.border-bottom-0 {\r\n  border-bottom-width: 0 !important;\n}\n.border-left-0 {\r\n  border-left-width: 0 !important;\n}\r\n/* 圆角 */\n.rounded {\r\n  border-radius: 8rpx;\n}\n.rounded-lg {\r\n  border-radius: 14rpx;\n}\n.rounded-top {\r\n  border-top-left-radius: 8rpx;\r\n  border-top-right-radius: 8rpx;\n}\n.rounded-top-lg {\r\n  border-top-left-radius: 14rpx;\r\n  border-top-right-radius: 14rpx;\n}\n.rounded-right {\r\n  border-top-right-radius: 8rpx;\r\n  border-bottom-right-radius: 8rpx;\n}\n.rounded-bottom {\r\n  border-bottom-right-radius: 8rpx;\r\n  border-bottom-left-radius: 8rpx;\n}\n.rounded-bottom-lg {\r\n  border-bottom-right-radius: 14rpx;\r\n  border-bottom-left-radius: 14rpx;\n}\n.rounded-left {\r\n  border-top-left-radius: 8rpx;\r\n  border-bottom-left-radius: 8rpx;\n}\n.rounded-circle {\r\n  border-radius: 375rpx;\n}\n.rounded-0 {\r\n  border-radius: 0;\n}\r\n/*  -- 内外边距 -- */\n.p-0 {\r\n  padding: 0rpx;\n}\n.pt-0 {\r\n  padding-top: 0rpx;\n}\n.pr-0 {\r\n  padding-right: 0rpx;\n}\n.pb-0 {\r\n  padding-bottom: 0rpx;\n}\n.pl-0 {\r\n  padding-left: 0rpx;\n}\n.px-0 {\r\n  padding-left: 0rpx;\r\n  padding-right: 0rpx;\n}\n.py-0 {\r\n  padding-top: 0rpx;\r\n  padding-bottom: 0rpx;\n}\n.p-1 {\r\n  padding: 10rpx;\n}\n.pt-1 {\r\n  padding-top: 10rpx;\n}\n.pr-1 {\r\n  padding-right: 10rpx;\n}\n.pb-1 {\r\n  padding-bottom: 10rpx;\n}\n.pl-1 {\r\n  padding-left: 10rpx;\n}\n.px-1 {\r\n  padding-left: 10rpx;\r\n  padding-right: 10rpx;\n}\n.py-1 {\r\n  padding-top: 10rpx;\r\n  padding-bottom: 10rpx;\n}\n.p-2 {\r\n  padding: 20rpx;\n}\n.pt-2 {\r\n  padding-top: 20rpx;\n}\n.pr-2 {\r\n  padding-right: 20rpx;\n}\n.pb-2 {\r\n  padding-bottom: 20rpx;\n}\n.pl-2 {\r\n  padding-left: 20rpx;\n}\n.px-2 {\r\n  padding-left: 20rpx;\r\n  padding-right: 20rpx;\n}\n.py-2 {\r\n  padding-top: 20rpx;\r\n  padding-bottom: 20rpx;\n}\n.p-3 {\r\n  padding: 30rpx;\n}\n.pt-3 {\r\n  padding-top: 30rpx;\n}\n.pr-3 {\r\n  padding-right: 30rpx;\n}\n.pb-3 {\r\n  padding-bottom: 30rpx;\n}\n.pl-3 {\r\n  padding-left: 30rpx;\n}\n.px-3 {\r\n  padding-left: 30rpx;\r\n  padding-right: 30rpx;\n}\n.py-3 {\r\n  padding-top: 30rpx;\r\n  padding-bottom: 30rpx;\n}\n.p-4 {\r\n  padding: 40rpx;\n}\n.pt-4 {\r\n  padding-top: 40rpx;\n}\n.pr-4 {\r\n  padding-right: 40rpx;\n}\n.pb-4 {\r\n  padding-bottom: 40rpx;\n}\n.pl-4 {\r\n  padding-left: 40rpx;\n}\n.px-4 {\r\n  padding-left: 40rpx;\r\n  padding-right: 40rpx;\n}\n.py-4 {\r\n  padding-top: 40rpx;\r\n  padding-bottom: 40rpx;\n}\n.p-5 {\r\n  padding: 50rpx;\n}\n.pt-5 {\r\n  padding-top: 50rpx;\n}\n.pr-5 {\r\n  padding-right: 50rpx;\n}\n.pb-5 {\r\n  padding-bottom: 50rpx;\n}\n.pl-5 {\r\n  padding-left: 50rpx;\n}\n.px-5 {\r\n  padding-left: 50rpx;\r\n  padding-right: 50rpx;\n}\n.py-5 {\r\n  padding-top: 50rpx;\r\n  padding-bottom: 50rpx;\n}\n.p-6 {\r\n  padding: 60rpx;\n}\n.pt-6 {\r\n  padding-top: 60rpx;\n}\n.pr-6 {\r\n  padding-right: 60rpx;\n}\n.pb-6 {\r\n  padding-bottom: 60rpx;\n}\n.pl-6 {\r\n  padding-left: 60rpx;\n}\n.px-6 {\r\n  padding-left: 60rpx;\r\n  padding-right: 60rpx;\n}\n.py-6 {\r\n  padding-top: 60rpx;\r\n  padding-bottom: 60rpx;\n}\n.p-8 {\r\n  padding: 80rpx;\n}\n.pt-8 {\r\n  padding-top: 80rpx;\n}\n.pr-8 {\r\n  padding-right: 80rpx;\n}\n.pb-8 {\r\n  padding-bottom: 80rpx;\n}\n.pl-8 {\r\n  padding-left: 80rpx;\n}\n.px-8 {\r\n  padding-left: 80rpx;\r\n  padding-right: 80rpx;\n}\n.py-8 {\r\n  padding-top: 80rpx;\r\n  padding-bottom: 80rpx;\n}\r\n/* flex 居中 */\n.flex-center {\r\n  display: flex !important;\r\n  flex-direction: row !important;\r\n\r\n  box-sizing: border-box;\r\n\r\n  align-items: center !important;\r\n  justify-content: center !important;\n}\r\n/* flex 布局 */\n.flex-row {\r\n  display: flex !important;\r\n  flex-direction: row !important;\r\n\r\n  box-sizing: border-box;\n}\n.flex-column {\r\n  display: flex !important;\r\n  flex-direction: column !important;\r\n\r\n  box-sizing: border-box;\n}\n.flex-row-reverse {\r\n  display: flex !important;\r\n  flex-direction: row-reverse !important;\r\n\r\n  box-sizing: border-box;\n}\n.flex-column-reverse {\r\n  display: flex !important;\r\n  flex-direction: column-reverse !important;\r\n\r\n  box-sizing: border-box;\n}\n.flex-shrink {\r\n  flex-shrink: 0;\n}\n.flex-wrap {\r\n  flex-wrap: wrap !important;\n}\n.flex-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\n}\n.flex-nowrap {\r\n  flex-wrap: nowrap !important;\n}\n.justify-start {\r\n  justify-content: flex-start !important;\n}\n.justify-end {\r\n  justify-content: flex-end !important;\n}\n.justify-center {\r\n  justify-content: center !important;\n}\n.justify-between {\r\n  justify-content: space-between !important;\n}\n.justify-around {\r\n  justify-content: space-around !important;\n}\n.align-stretch {\r\n  align-items: stretch !important;\n}\n.align-start {\r\n  align-items: flex-start !important;\n}\n.align-end {\r\n  align-items: flex-end !important;\n}\n.align-center {\r\n  align-items: center !important;\n}\n.flex-1 {\r\n  flex: 1 !important;\r\n  overflow: hidden;\n}\n.flex-2 {\r\n  flex: 2 !important;\r\n  overflow: hidden;\n}\n.flex-3 {\r\n  flex: 3 !important;\r\n  overflow: hidden;\n}\n.flex-4 {\r\n  flex: 4 !important;\r\n  overflow: hidden;\n}\n.flex-5 {\r\n  flex: 5 !important;\r\n  overflow: hidden;\n}\r\n/* 定位 */\n.position-relative {\r\n  position: relative !important;\n}\n.position-absolute {\r\n  position: absolute !important;\n}\n.position-fixed {\r\n  position: fixed !important;\n}\n.position-sticky {\r\n  position: -webkit-sticky !important;\r\n  position: sticky !important;\n}\n.top-0 {\r\n  top: 0;\n}\n.right-0 {\r\n  right: 0;\n}\n.bottom-0 {\r\n  bottom: 0;\n}\n.left-0 {\r\n  left: 0;\n}\n.position-full {\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\n}\n.position-top {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\n}\n.position-bottom {\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\n}\r\n/* 文字类型 */\n.font-lg {\r\n  font-family: Helvetica;\r\n  font-size: 36rpx;\r\n  line-height: 44rpx;\n}\n.font-md {\r\n  font-family: Helvetica;\r\n  font-size: 32rpx;\r\n  line-height: 40rpx;\n}\n.font {\r\n  font-family: Helvetica;\r\n  font-size: 28rpx;\r\n  line-height: 36rpx;\n}\n.font-small {\r\n  font-family: Helvetica;\r\n  font-size: 24rpx;\r\n  line-height: 32rpx;\n}\n.font-smaller {\r\n  font-family: Helvetica;\r\n  font-size: 20rpx;\r\n  line-height: 28rpx;\n}\r\n/* 斜体 */\n.font-italic {\r\n  font-style: italic;\n}\r\n/* 文字装饰 */\n.text-through {\r\n  text-decoration: line-through;\n}\n.text-underline {\r\n  text-decoration: underline;\n}\r\n/* 文字对齐 */\n.text-left {\r\n  text-align: left !important;\n}\n.text-right {\r\n  text-align: right !important;\n}\n.text-center {\r\n  text-align: center !important;\n}\r\n/* 文字粗细 */\n.font-weight-100 {\r\n  font-weight: 100;\n}\n.font-weight-200 {\r\n  font-weight: 200;\n}\n.font-weight-300 {\r\n  font-weight: 300;\n}\n.font-weight-400 {\r\n  font-weight: 400;\n}\n.font-weight-500 {\r\n  font-weight: 500;\n}\n.font-weight-700 {\r\n  font-weight: 700;\n}\n.font-weight-900 {\r\n  font-weight: 900;\n}\r\n/* 文字换行溢出处理 */\n.text-ellipsis {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n  white-space: nowrap;\n}\n.text-ellipsis-2 {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.text-ellipsis-3 {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.text-ellipsis-4 {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n  word-break: break-all;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4;\r\n  -webkit-box-orient: vertical;\n}\r\n/* 动画 */\n.transition-width {\r\n  transition-property: width;\n}\n.transition-height {\r\n  transition-property: height;\n}\n.transition-top {\r\n  transition-property: top;\n}\n.transition-bottom {\r\n  transition-property: bottom;\n}\n.transition-left {\r\n  transition-property: left;\n}\n.transition-right {\r\n  transition-property: right;\n}\n.transition-bg {\r\n  transition-property: background-color;\n}\n.transition-opacity {\r\n  transition-property: opacity;\n}\n.transition-transform {\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\n}\n.duration-3 {\r\n  transition-duration: 0.3s;\n}\n.duration-6 {\r\n  transition-duration: 0.6s;\n}\n.duration-9 {\r\n  transition-duration: 0.9s;\n}\n.delay-3 {\r\n  transition-delay: 0.3s;\n}\n.delay-6 {\r\n  transition-delay: 0.6s;\n}\n.delay-9 {\r\n  transition-delay: 0.9s;\n}\r\n/* 全局样式库 */\r\n/* 自定义动画类引入 */\n.transition-opacity-transform {\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: opacity, transform;\r\n  transition-property: opacity, transform, -webkit-transform;\n}\n.transition-width-bg {\r\n  transition-property: width, background-color;\n}\n.transition-top-left {\r\n  transition-property: opacity, top, left;\n}\n.transformx--10 {\r\n  -webkit-transform: translateX(-10%);\r\n          transform: translateX(-10%);\n}\n.transformx--20 {\r\n  -webkit-transform: translateX(-20%);\r\n          transform: translateX(-20%);\n}\n.transformx--30 {\r\n  -webkit-transform: translateX(-30%);\r\n          transform: translateX(-30%);\n}\n.transformx-10 {\r\n  -webkit-transform: translateX(10%);\r\n          transform: translateX(10%);\n}\n.transformx-20 {\r\n  -webkit-transform: translateX(20%);\r\n          transform: translateX(20%);\n}\n.transformx-30 {\r\n  -webkit-transform: translateX(30%);\r\n          transform: translateX(30%);\n}\n.transformx-0 {\r\n  -webkit-transform: translateX(0%);\r\n          transform: translateX(0%);\n}\n.transformy--50 {\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\n}\n.transformy--100 {\r\n  -webkit-transform: translateY(-100%);\r\n          transform: translateY(-100%);\n}\n.transformy-0 {\r\n  -webkit-transform: translateY(0%);\r\n          transform: translateY(0%);\n}\r\n/* 項目全局樣式 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* icon */\n@font-face {\r\n  font-family: 'ant-icon';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\r\n\r\n\r\n/* scroll-view */\n.scroll-row {\r\n  width: 100%;\r\n  white-space: nowrap;\n}\n.scroll-row-item {\r\n  display: inline-block !important;\n}\n.ant-icon {\r\n  font-family: ant-icon;\r\n  text-decoration: none;\r\n  text-align: center;\n}\r\n/* 请根据设计图进行文字类型定义 */\n.font-h {\r\n  font-size: 45rpx;\r\n  line-height: 61rpx;\n}\n.font-lg {\r\n  font-size: 38rpx;\r\n  line-height: 51rpx;\n}\n.font-md {\r\n  font-size: 32rpx;\r\n  line-height: 44rpx;\n}\n.font {\r\n  font-size: 28rpx;\r\n  line-height: 40rpx;\n}\n.font-small {\r\n  font-size: 24rpx;\r\n  line-height: 36rpx;\n}\n.font-s {\r\n  font-size: 20rpx;\r\n  line-height: 36rpx;\n}\n.font-ss {\r\n  font-size: 18rpx;\r\n  line-height: 20rpx;\n}\n.font-sss {\r\n  font-size: 14rpx;\r\n  line-height: 18rpx;\n}\r\n/* .font-lg {\r\n  font-size: 36rpx;\r\n  line-height: 48rpx;\r\n}\r\n\r\n\r\n\r\n\r\n.font-smaller {\r\n  font-size: 20rpx;\r\n  line-height: 28rpx;\r\n} */\n.icon-smaller {\r\n  font-size: 30rpx;\n}\n.icon-small {\r\n  font-size: 40rpx;\n}\n.icon-normal {\r\n  font-size: 50rpx;\n}\n.icon-md {\r\n  font-size: 60rpx;\n}\n.icon-lg {\r\n  font-size: 80rpx;\n}\n.header-icon {\r\n  font-size: 24px;\r\n  padding-top: 3px;\n}\n.header-title {\r\n  font-size: 16px;\n}\n.rounded-38 {\r\n  border-radius: 38rpx;\n}\n.rounded-24 {\r\n  border-radius: 24rpx;\n}\n.border-2 {\r\n  border: 2rpx;\r\n  border-style: solid;\n}\r\n/* 主题样式库 */\r\n/* 主题 */\n.bg-page {\r\n  background-color: white;\n}\n.bg-page-top {\r\n  background-image: linear-gradient(to top, rgba(67, 216, 205, 0.01) 2%, rgba(47, 185, 202, 0.3) 100%);\n}\n.bg-tabbar {\r\n  background-color: white;\n}\n.bg-dark {\r\n  background-color: #205072;\n}\n.bg-main-2 {\r\n  background-color: #329d9c;\n}\n.bg-tabbar {\r\n  background-color: #e0ecde;\n}\n.bg-orange {\r\n  background-color: #f75010;\n}\r\n/* 文字颜色 */\n.text-dark {\r\n  color: #205072;\n}\n.text-main {\r\n  color: #329d9c;\n}\n.text-gray {\r\n  color: #cde0c9;\n}\n.text-deep {\r\n  color: #205072;\n}\n.text-white {\r\n  color: white;\n}\n.text-main-2 {\r\n  color: #68b2a0;\n}\n.text-mark {\r\n  color: #56c596;\n}\n.text-red {\r\n  color: #f52224;\n}\n.text-light {\r\n  color: rgba(104, 178, 160, 0.55);\n}\n.bg-main {\r\n  background-color: #68b2a0;\n}\n.bg-light {\r\n  background-color: #47cacc;\n}\n.bg-gray-oc {\r\n  background-color: rgba(224, 236, 222, 0.6);\n}\n.bg-white {\r\n  background-color: white;\n}\n.bg-btn-main {\r\n  background-image: linear-gradient(to bottom right, #7BE495, #329D9C);\n}\n.bg-btn-main-hover {\r\n  background-image: linear-gradient(to bottom right, #52e474, #159d99);\n}\n.bg-gray {\r\n  background-color: #e0ecde;\n}\n.shadow-main {\r\n  box-shadow: 27rpx 27rpx 72rpx rgba(50, 157, 156, 0.21);\n}\n.shadow-box {\r\n  box-shadow: 0rpx 24rpx 62rpx rgba(86, 197, 150, 0.15);\n}\n.shadow-dark {\r\n  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0);\n}\n.shadow-normal {\r\n  box-shadow: 14px 14px 62px rgba(219, 219, 219, 0.55);\n}\n.border-gray {\r\n  border-color: #e0ecde;\n}\r\n/* 夜间主题 */\n.bg-page-dark {\r\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.bg-page-top-dark {\r\n  background-image: linear-gradient(to top, rgba(67, 216, 205, 0.01) 2%, rgba(47, 185, 202, 0.3) 100%);\n}\n.bg-tabbar-dark {\r\n  background-color: #999999;\n}\r\n/* 文字颜色 */\n.text-white-dark {\r\n  color: rgba(255, 255, 255, 0.8);\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/*!**************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {}
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = url && url.__esModule ? url.default : url

  if (typeof url !== 'string') {
    return url
  } // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1)
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls

  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
  }
  if (url.indexOf('/') === 0) {
    return url.substr(1)
  }
  return url
}


/***/ }),
/* 7 */
/*!**************************************************!*\
  !*** D:/clors/clors-ui/static/icon/iconfont.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/icon/iconfont.ttf";

/***/ }),
/* 8 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 9);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}|@media.+?\{/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 9 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);