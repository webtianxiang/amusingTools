"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recursionJsonResult;

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let dataModel = [];
let typeList = {
  number: 'number',
  string: 'string',
  boolean: 'boolean',
  object: 'object'
};

function recursionJson(json, target, deep) {
  deep++;

  if (typeof json === 'object') {
    for (var key in json) {
      let item = {};
      let typeName = typeof json[key];
      item.name = key;
      item.type = typeList[typeName];
      item.description = '';
      item.ruleStr = '';
      item.value = typeName === 'object' ? '' : json[key];
      item.target = target;
      item.deep = deep;
      item.id = _utils.default.randomStr();
      dataModel.push(item);
      typeName = typeName === 'object' ? json[key] instanceof Array ? 'array' : 'object' : typeName;

      if (typeName === 'object') {
        recursionJson(json[key], item.id, deep);
      } else if (typeName === 'array') {
        recursionJson(json[key][0], item.id, deep);
      }
    }
  }

  return;
}

let testJson = '{"code":0,"msg":"","data":{"project":{"id":"5d4bba61aa4ec40008626719","name":"itest","timeType":1,"intervalTime":1,"autoStartTime":1,"autoEndTime":1,"createTime":1565244001145,"envMap":{"zelda":"","a":"a"},"isAsync":1,"isDelete":null,"jobSwitch":true,"type":null,"updateUser":"iTest","updateTime":1586908904541},"page":{"pageNo":1,"pageSize":10,"total":20,"list":[{"updateId":63000,"updateName":"iTest"}]}}}';
recursionJson(JSON.parse(testJson), null, 0);

function recursionJsonResult(json) {
  recursionJson(JSON.parse(testJson), null, 0);
  return dataModel;
}