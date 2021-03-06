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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom/Injector.js":
/*!*****************************!*\
  !*** ./src/dom/Injector.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOMInjector; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DOMInjector = /*#__PURE__*/function () {\n  function DOMInjector() {\n    _classCallCheck(this, DOMInjector);\n  }\n\n  _createClass(DOMInjector, [{\n    key: \"inject\",\n    value: function inject(selector, content) {\n      var element = document.querySelector(selector);\n      element.innerHTML = content;\n    }\n  }]);\n\n  return DOMInjector;\n}();\n\n\n\n//# sourceURL=webpack:///./src/dom/Injector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_VideoPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/VideoPlayer */ \"./src/player/VideoPlayer.js\");\n/* harmony import */ var _dom_Injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Injector */ \"./src/dom/Injector.js\");\n\n\nvar player2 = new _player_VideoPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  elementId: 'body #video',\n  srcLink: 'https://www.w3schools.com/html/mov_bbb.mp4',\n  videoWidth: 800,\n  videoHeight: 600\n});\nvar domInjector = new _dom_Injector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ndomInjector.inject(player2.elementId, player2.render());\nconsole.log(player2.elementId);\nconsole.log(player2.srcLink);\nconsole.log(player2.videoWidth);\nconsole.log(player2.videoHeight); // height hight length - termina F\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player/VideoPlayer.js":
/*!***********************************!*\
  !*** ./src/player/VideoPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoPlayer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar VideoPlayer = /*#__PURE__*/function () {\n  function VideoPlayer(_ref) {\n    var elementId = _ref.elementId,\n        srcLink = _ref.srcLink,\n        _ref$videoWidth = _ref.videoWidth,\n        videoWidth = _ref$videoWidth === void 0 ? 800 : _ref$videoWidth,\n        _ref$videoHeight = _ref.videoHeight,\n        videoHeight = _ref$videoHeight === void 0 ? 600 : _ref$videoHeight;\n\n    _classCallCheck(this, VideoPlayer);\n\n    this.elementId = elementId;\n    this.srcLink = srcLink;\n    this.videoWidth = videoWidth;\n    this.videoHeight = videoHeight;\n  }\n\n  _createClass(VideoPlayer, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n        <video width=\\\"\".concat(this.videoWidth, \"\\\" height=\\\"\").concat(this.videoHeight, \"\\\" controls>\\n            <source src=\\\"\").concat(this.srcLink, \"\\\">\\n        </video>\\n        \");\n    }\n  }]);\n\n  return VideoPlayer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/player/VideoPlayer.js?");

/***/ })

/******/ });