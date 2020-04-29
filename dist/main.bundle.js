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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jsonTransformArray/index.js":
/*!*****************************************!*\
  !*** ./src/jsonTransformArray/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.symbol'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.symbol.description'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.symbol.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.array.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.object.to-string'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.string.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/web.dom-collections.iterator'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar dataModel = [];\nvar deep = 0;\nvar typeList = {\n  number: 'number',\n  string: 'string',\n  boolean: 'boolean',\n  object: 'object'\n};\n\nfunction recursionJson(json, target, deep) {\n  deep++;\n\n  if (_typeof(json) === 'object') {\n    for (var key in json) {\n      var item = {};\n\n      var typeName = _typeof(json[key]);\n\n      item.name = key;\n      item.type = typeList[typeName];\n      item.description = '';\n      item.ruleStr = '';\n      item.value = typeName === 'object' ? '' : json[key];\n      item.target = target;\n      item.deep = deep;\n      item.id = randomStr();\n      dataModel.push(item);\n      typeName = typeName === 'object' ? json[key] instanceof Array ? 'array' : 'object' : typeName;\n\n      if (typeName === 'object') {\n        recursionJson(json[key], item.id, deep);\n      } else if (typeName === 'array') {\n        recursionJson(json[key][0], item.id, deep);\n      }\n    }\n  }\n\n  return;\n}\n\nfunction randomStr() {\n  var standard = '0123456789abcdefghijklmnopqrstuvwxyz';\n  var randomNumLen = 8;\n  var resultStr = '';\n\n  for (var i = 0; i < randomNumLen; i++) {\n    var randomNum = Math.floor(Math.random() * 36);\n    resultStr += standard.charAt(randomNum);\n  }\n\n  return resultStr;\n}\n\nvar testJson = '{\"code\":0,\"msg\":\"\",\"data\":{\"project\":{\"id\":\"5d4bba61aa4ec40008626719\",\"name\":\"itest\",\"timeType\":1,\"intervalTime\":1,\"autoStartTime\":1,\"autoEndTime\":1,\"createTime\":1565244001145,\"envMap\":{\"zelda\":\"\",\"a\":\"a\"},\"isAsync\":1,\"isDelete\":null,\"jobSwitch\":true,\"type\":null,\"updateUser\":\"iTest\",\"updateTime\":1586908904541},\"page\":{\"pageNo\":1,\"pageSize\":10,\"total\":20,\"list\":[{\"updateId\":63000,\"updateName\":\"iTest\"}]}}}';\nrecursionJson(JSON.parse(testJson), null, deep);\n/* harmony default export */ __webpack_exports__[\"default\"] = (recursionJson);\n\n//# sourceURL=webpack:///./src/jsonTransformArray/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jsonTransformArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonTransformArray */ \"./src/jsonTransformArray/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  jsonTransformArray: _jsonTransformArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });