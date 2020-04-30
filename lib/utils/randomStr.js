"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function randomStr() {
  let standard = '0123456789abcdefghijklmnopqrstuvwxyz';
  let randomNumLen = 8;
  let resultStr = '';

  for (var i = 0; i < randomNumLen; i++) {
    let randomNum = Math.floor(Math.random() * 36);
    resultStr += standard.charAt(randomNum);
  }

  return resultStr;
}

var _default = randomStr;
exports.default = _default;