/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/fileCheckLoader.js":
/*!********************************!*\
  !*** ./lib/fileCheckLoader.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nexports.default = (function () {\n  let count = 0;\n\n  const txtPath = path.resolve(__dirname, '../', 'list.txt');\n\n  try {\n    fs.accessSync(txtPath);\n  } catch (e) {\n    fs.appendFileSync(txtPath, '', { encoding: 'utf-8' });\n  }\n  fs.writeFileSync(txtPath, '');\n\n  return function (source) {\n    count++;\n    // console.log('here source', source)\n    console.log('this', this.resourcePath, count);\n    fs.appendFileSync(txtPath, `${this.resourcePath} \\n`);\n    return source;\n  };\n}());\n\n\n//# sourceURL=webpack://webpack-wplay-loaders/./lib/fileCheckLoader.js?");

/***/ }),

/***/ "./lib/fileCheckPlugin.js":
/*!********************************!*\
  !*** ./lib/fileCheckPlugin.js ***!
  \********************************/
/***/ ((module) => {

eval("class FileCheckPlugin {\n  apply(compiler) {\n    console.log('compiler here');\n  }\n}\n\nmodule.exports = FileCheckPlugin;\n\n\n//# sourceURL=webpack://webpack-wplay-loaders/./lib/fileCheckPlugin.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const FileCheckLoader =  __webpack_require__(/*! ./fileCheckLoader.js */ \"./lib/fileCheckLoader.js\")\n\nconst FileCheckPlugin =  __webpack_require__(/*! ./fileCheckPlugin.js */ \"./lib/fileCheckPlugin.js\")\n\nmodule.exports = {\n  FileCheckLoader,\n  FileCheckPlugin\n}\n\n\n//# sourceURL=webpack://webpack-wplay-loaders/./lib/index.js?");

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub.js */ \"./src/sub.js\");\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index.js */ \"./lib/index.js\");\n\n\n\n\nconsole.log('lib is', _lib_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\nconsole.log('sub file name is', _sub_js__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n//# sourceURL=webpack://webpack-wplay-loaders/./src/index.mjs?");

/***/ }),

/***/ "./src/sub.js":
/*!********************!*\
  !*** ./src/sub.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fileName = 'sub'\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileName);\n\n//# sourceURL=webpack://webpack-wplay-loaders/./src/sub.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.mjs");
/******/ 	
/******/ })()
;