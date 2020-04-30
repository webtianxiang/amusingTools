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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _transformArray = _interopRequireDefault(__webpack_require__(/*! ./transformArray */ \"./lib/transformArray/index.js\"));\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ \"./lib/utils/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  transformArray: _transformArray.default,\n  uitls: _utils.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/transformArray/arrayToTree.js":
/*!*******************************************!*\
  !*** ./lib/transformArray/arrayToTree.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = coversionTreeResult;\nlet conversionResult = [];\n\nfunction coversionTree(flatData) {\n  let curDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  curDeep++;\n\n  if (flatData instanceof Array && flatData.length > 0 && flatData.filter(item => item.deep === curDeep).length > 0) {\n    let tempList = flatData.filter(item => item.deep === curDeep);\n\n    if (curDeep === 1) {\n      conversionResult.push(...tempList);\n    } else {\n      tempList.forEach(item => {\n        if (item.target) {\n          let search = recursionSearch(conversionResult, 'id', item.target);\n\n          if (search && search.value == '') {\n            search.value = [];\n          }\n\n          if (search && search.value instanceof Array) {\n            search.value.push(item);\n          }\n        }\n      });\n    }\n\n    return coversionTree(flatData, curDeep);\n  }\n}\n\nfunction recursionSearch(data, attribute, target) {\n  let res = null;\n\n  for (var i = 0; i < data.length; i++) {\n    if (data[i][attribute] === target) {\n      res = data[i];\n      break;\n    } else {\n      continue;\n    }\n  }\n\n  if (res === null) {\n    for (var i = 0; i < data.length; i++) {\n      if (data[i][\"type\"] === 'object' && data[i][\"value\"] instanceof Array && data[i][\"value\"].length > 0) {\n        res = recursionSearch(data[i][\"value\"], attribute, target);\n\n        if (res === null) {\n          continue;\n        } else {\n          break;\n        }\n      } else {\n        continue;\n      }\n    }\n  }\n\n  return res;\n}\n\nfunction coversionTreeResult(array) {\n  coversionTree(array);\n  return conversionResult;\n}\n\n//# sourceURL=webpack:///./lib/transformArray/arrayToTree.js?");

/***/ }),

/***/ "./lib/transformArray/index.js":
/*!*************************************!*\
  !*** ./lib/transformArray/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _arrayToTree = _interopRequireDefault(__webpack_require__(/*! ./arrayToTree */ \"./lib/transformArray/arrayToTree.js\"));\n\nvar _jsonToArray = _interopRequireDefault(__webpack_require__(/*! ./jsonToArray */ \"./lib/transformArray/jsonToArray.js\"));\n\nvar _treeToArray = _interopRequireDefault(__webpack_require__(/*! ./treeToArray */ \"./lib/transformArray/treeToArray.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  arrayToTree: _arrayToTree.default,\n  jsonToArray: _jsonToArray.default,\n  treeToArray: _treeToArray.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./lib/transformArray/index.js?");

/***/ }),

/***/ "./lib/transformArray/jsonToArray.js":
/*!*******************************************!*\
  !*** ./lib/transformArray/jsonToArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = recursionJsonResult;\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ \"./lib/utils/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet dataModel = [];\nlet typeList = {\n  number: 'number',\n  string: 'string',\n  boolean: 'boolean',\n  object: 'object'\n};\n\nfunction recursionJson(json, target, deep) {\n  deep++;\n\n  if (typeof json === 'object') {\n    for (var key in json) {\n      let item = {};\n      let typeName = typeof json[key];\n      item.name = key;\n      item.type = typeList[typeName];\n      item.description = '';\n      item.ruleStr = '';\n      item.value = typeName === 'object' ? '' : json[key];\n      item.target = target;\n      item.deep = deep;\n      item.id = _utils.default.randomStr();\n      dataModel.push(item);\n      typeName = typeName === 'object' ? json[key] instanceof Array ? 'array' : 'object' : typeName;\n\n      if (typeName === 'object') {\n        recursionJson(json[key], item.id, deep);\n      } else if (typeName === 'array') {\n        recursionJson(json[key][0], item.id, deep);\n      }\n    }\n  }\n\n  return;\n}\n\nlet testJson = '{\"code\":0,\"msg\":\"\",\"data\":{\"project\":{\"id\":\"5d4bba61aa4ec40008626719\",\"name\":\"itest\",\"timeType\":1,\"intervalTime\":1,\"autoStartTime\":1,\"autoEndTime\":1,\"createTime\":1565244001145,\"envMap\":{\"zelda\":\"\",\"a\":\"a\"},\"isAsync\":1,\"isDelete\":null,\"jobSwitch\":true,\"type\":null,\"updateUser\":\"iTest\",\"updateTime\":1586908904541},\"page\":{\"pageNo\":1,\"pageSize\":10,\"total\":20,\"list\":[{\"updateId\":63000,\"updateName\":\"iTest\"}]}}}';\nrecursionJson(JSON.parse(testJson), null, 0);\n\nfunction recursionJsonResult(json) {\n  recursionJson(JSON.parse(testJson), null, 0);\n  return dataModel;\n}\n\n//# sourceURL=webpack:///./lib/transformArray/jsonToArray.js?");

/***/ }),

/***/ "./lib/transformArray/treeToArray.js":
/*!*******************************************!*\
  !*** ./lib/transformArray/treeToArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = recursionTreeResult;\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ \"./lib/utils/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet dataModel = [];\n\nfunction recursionTree(list, target, deep) {\n  deep++;\n\n  if (list instanceof Array && list.length > 0) {\n    list.forEach(item => {\n      let element = {};\n      element.name = item.name;\n      element.type = item.type;\n      element.description = item.description;\n      element.ruleStr = item.ruleStr;\n      element.value = item.type === 'object' ? '' : item.value;\n      element.target = target;\n      element.deep = deep;\n      element.id = _utils.default.randomStr();\n      dataModel.push(element);\n\n      if (item.type === 'object' && item.value.length > 0) {\n        recursionJson(item.value, element.id, deep);\n      }\n    });\n  }\n\n  return;\n}\n\nlet testJson = '[{\"name\":\"code\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":0,\"target\":null,\"deep\":1},{\"name\":\"msg\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":null,\"deep\":1},{\"name\":\"data\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":[{\"name\":\"project\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":[{\"name\":\"id\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"5d4bba61aa4ec40008626719\",\"target\":\"project\",\"deep\":3},{\"name\":\"name\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"itest\",\"target\":\"project\",\"deep\":3},{\"name\":\"timeType\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"intervalTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"autoStartTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"autoEndTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"createTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1565244001145,\"target\":\"project\",\"deep\":3},{\"name\":\"envMap\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":[{\"name\":\"zelda\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"envMap\",\"deep\":4},{\"name\":\"a\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"a\",\"target\":\"envMap\",\"deep\":4}],\"target\":\"project\",\"deep\":3},{\"name\":\"isAsync\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1,\"target\":\"project\",\"deep\":3},{\"name\":\"isDelete\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"project\",\"deep\":3},{\"name\":\"jobSwitch\",\"type\":\"Boolean\",\"description\":\"\",\"ruleStr\":\"\",\"value\":true,\"target\":\"project\",\"deep\":3},{\"name\":\"type\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"project\",\"deep\":3},{\"name\":\"updateUser\",\"type\":\"String\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"iTest\",\"target\":\"project\",\"deep\":3},{\"name\":\"updateTime\",\"type\":\"Number\",\"description\":\"\",\"ruleStr\":\"\",\"value\":1586908904541,\"target\":\"project\",\"deep\":3}],\"target\":\"data\",\"deep\":2},{\"name\":\"page\",\"type\":\"Object\",\"description\":\"\",\"ruleStr\":\"\",\"value\":\"\",\"target\":\"data\",\"deep\":2}],\"target\":null,\"deep\":1}]';\nrecursionTree(JSON.parse(testJson), null, 0);\n\nfunction recursionTreeResult(json) {\n  recursionTree(json, null, 0);\n  return dataModel;\n}\n\n//# sourceURL=webpack:///./lib/transformArray/treeToArray.js?");

/***/ }),

/***/ "./lib/utils/index.js":
/*!****************************!*\
  !*** ./lib/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _randomStr = _interopRequireDefault(__webpack_require__(/*! ./randomStr */ \"./lib/utils/randomStr.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  randomStr: _randomStr.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./lib/utils/index.js?");

/***/ }),

/***/ "./lib/utils/randomStr.js":
/*!********************************!*\
  !*** ./lib/utils/randomStr.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction randomStr() {\n  let standard = '0123456789abcdefghijklmnopqrstuvwxyz';\n  let randomNumLen = 8;\n  let resultStr = '';\n\n  for (var i = 0; i < randomNumLen; i++) {\n    let randomNum = Math.floor(Math.random() * 36);\n    resultStr += standard.charAt(randomNum);\n  }\n\n  return resultStr;\n}\n\nvar _default = randomStr;\nexports.default = _default;\n\n//# sourceURL=webpack:///./lib/utils/randomStr.js?");

/***/ })

/******/ });
});