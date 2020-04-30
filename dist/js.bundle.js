(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transformArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformArray */ \"./src/transformArray/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  transformArray: _transformArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  uitls: _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/transformArray/arrayToTree.js":
/*!*******************************************!*\
  !*** ./src/transformArray/arrayToTree.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return coversionTreeResult; });\nlet conversionResult = []\nfunction coversionTree (flatData, curDeep = 0) {\n    curDeep++\n    if (flatData instanceof Array && flatData.length > 0 && flatData.filter(item => item.deep === curDeep).length > 0) {\n        let tempList = flatData.filter(item => item.deep === curDeep)\n        if (curDeep === 1) {\n            conversionResult.push(...tempList)\n        } else {\n            tempList.forEach(item => {\n                if (item.target) {\n                    let search = recursionSearch(conversionResult, 'id', item.target)\n                    if (search && search.value == '') {\n                        search.value = []\n                    }\n                    if (search && search.value instanceof Array) {\n                      search.value.push(item)\n                    }\n                }\n            })\n        }\n        return coversionTree(flatData, curDeep)\n    }\n}\nfunction recursionSearch (data, attribute, target) {\n  let res = null\n  for( var i = 0; i < data.length; i++) {\n    if(data[i][attribute] === target) {\n      res = data[i]\n      break;\n    } else {\n      continue;\n    }\n  }\n  if (res === null) {\n    for( var i = 0; i < data.length; i++) {\n      if (data[i][\"type\"] === 'object' && data[i][\"value\"] instanceof Array && data[i][\"value\"].length > 0) {\n        res = recursionSearch(data[i][\"value\"], attribute, target)\n        if (res === null) {\n          continue;\n        } else {\n          break;\n        }\n      } else {\n      \tcontinue;\n    \t}\n    }\n  }\n  return res\n}\n\nfunction coversionTreeResult(array) {\n  coversionTree(array)\n  return conversionResult\n}\n\n//# sourceURL=webpack:///./src/transformArray/arrayToTree.js?");

/***/ }),

/***/ "./src/transformArray/index.js":
/*!*************************************!*\
  !*** ./src/transformArray/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrayToTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayToTree */ \"./src/transformArray/arrayToTree.js\");\n/* harmony import */ var _jsonToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonToArray */ \"./src/transformArray/jsonToArray.js\");\n/* harmony import */ var _treeToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treeToArray */ \"./src/transformArray/treeToArray.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  arrayToTree: _arrayToTree__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  jsonToArray: _jsonToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  treeToArray: _treeToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/transformArray/index.js?");

/***/ }),

/***/ "./src/transformArray/jsonToArray.js":
/*!*******************************************!*\
  !*** ./src/transformArray/jsonToArray.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return recursionJsonResult; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nlet dataModel = []\nlet typeList = {\n  number: 'number',\n  string: 'string',\n  boolean: 'boolean',\n  object: 'object'\n}\n\nfunction recursionJson (json, target, deep) {\n  deep++\n  if (typeof json  === 'object') {\n    for (var key in json) {\n      let item = {}\n      let typeName = typeof json[key] \n      item.name = key\n      item.type = typeList[typeName]\n      item.description = ''\n      item.ruleStr = ''\n      item.value = typeName === 'object' ? '' : json[key]\n      item.target = target\n      item.deep = deep\n      item.id = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomStr()\n      dataModel.push(item)\n      typeName = typeName === 'object' ? (json[key] instanceof Array ?  'array' : 'object') : typeName\n      if (typeName === 'object') {\n        recursionJson(json[key], item.id, deep)\n      } else if (typeName === 'array') {\n        recursionJson(json[key][0], item.id, deep)\n      }\n    }\n  }\n  return\n}\n\nlet testJson = '{\"code\":0,\"msg\":\"\",\"data\":{\"project\":{\"id\":\"5d4bba61aa4ec40008626719\",\"name\":\"itest\",\"timeType\":1,\"intervalTime\":1,\"autoStartTime\":1,\"autoEndTime\":1,\"createTime\":1565244001145,\"envMap\":{\"zelda\":\"\",\"a\":\"a\"},\"isAsync\":1,\"isDelete\":null,\"jobSwitch\":true,\"type\":null,\"updateUser\":\"iTest\",\"updateTime\":1586908904541},\"page\":{\"pageNo\":1,\"pageSize\":10,\"total\":20,\"list\":[{\"updateId\":63000,\"updateName\":\"iTest\"}]}}}'\nrecursionJson(JSON.parse(testJson), null, 0)\n\nfunction recursionJsonResult (json) {\n  recursionJson(JSON.parse(testJson), null, 0)\n  return dataModel\n}\n\n//# sourceURL=webpack:///./src/transformArray/jsonToArray.js?");

/***/ }),

/***/ "./src/transformArray/treeToArray.js":
/*!*******************************************!*\
  !*** ./src/transformArray/treeToArray.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return recursionTreeResult; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nlet dataModel = []\n\nfunction recursionTree (list, target, deep) {\n  deep++\n  if (list instanceof Array && list.length > 0) {\n    list.forEach(item => {\n      let element = {}\n      element.name = item.name\n      element.type = item.type\n      element.description = item.description\n      element.ruleStr = item.ruleStr\n      element.value = item.type === 'object' ? '' : item.value\n      element.target = target\n      element.deep = deep\n      element.id = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomStr()\n      dataModel.push(element)\n      if (item.type === 'object' && item.value.length > 0) {\n        recursionJson(item.value, element.id, deep)\n      }\n    })\n  }\n  return\n}\n\nlet testJson = '[{\"name\":\"code\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":0,\"target\":null,\"deep\":1},{\"name\":\"msg\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":null,\"deep\":1},{\"name\":\"data\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":[{\"name\":\"project\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":[{\"name\":\"id\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"5d4bba61aa4ec40008626719\",\"target\":\"project\",\"deep\":3},{\"name\":\"name\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"itest\",\"target\":\"project\",\"deep\":3},{\"name\":\"timeType\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"intervalTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"autoStartTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"autoEndTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"createTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1565244001145,\"target\":\"project\",\"deep\":3},{\"name\":\"envMap\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":[{\"name\":\"zelda\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"envMap\",\"deep\":4},{\"name\":\"a\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"a\",\"target\":\"envMap\",\"deep\":4}],\"target\":\"project\",\"deep\":3},{\"name\":\"isAsync\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"isDelete\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"project\",\"deep\":3},{\"name\":\"jobSwitch\",\"type\":\"Boolean\",\"description\":\"\",\"ruleStr\":\"\",\"value\":true,\"target\":\"project\",\"deep\":3},{\"name\":\"type\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"project\",\"deep\":3},{\"name\":\"updateUser\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"iTest\",\"target\":\"project\",\"deep\":3},{\"name\":\"updateTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1586908904541,\"target\":\"project\",\"deep\":3}],\"target\":\"data\",\"deep\":2},{\"name\":\"page\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"data\",\"deep\":2}],\"target\":null,\"deep\":1}]'\nrecursionTree(JSON.parse(testJson), null, 0)\n\nfunction recursionTreeResult(json) {\n  recursionTree(json, null, 0)\n  return dataModel\n}\n\n//# sourceURL=webpack:///./src/transformArray/treeToArray.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randomStr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomStr */ \"./src/utils/randomStr.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  randomStr: _randomStr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/randomStr.js":
/*!********************************!*\
  !*** ./src/utils/randomStr.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction randomStr () {\n  let standard = '0123456789abcdefghijklmnopqrstuvwxyz'\n  let randomNumLen = 8\n  let resultStr = ''\n  for (var i = 0; i < randomNumLen; i++) {\n    let randomNum = Math.floor(Math.random() * 36)\n    resultStr += standard.charAt(randomNum)\n  }\n  return resultStr\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (randomStr);\n\n//# sourceURL=webpack:///./src/utils/randomStr.js?");

/***/ })

/******/ });
});