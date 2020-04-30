"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coversionTreeResult;
let conversionResult = [];

function coversionTree(flatData) {
  let curDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  curDeep++;

  if (flatData instanceof Array && flatData.length > 0 && flatData.filter(item => item.deep === curDeep).length > 0) {
    let tempList = flatData.filter(item => item.deep === curDeep);

    if (curDeep === 1) {
      conversionResult.push(...tempList);
    } else {
      tempList.forEach(item => {
        if (item.target) {
          let search = recursionSearch(conversionResult, 'id', item.target);

          if (search && search.value == '') {
            search.value = [];
          }

          if (search && search.value instanceof Array) {
            search.value.push(item);
          }
        }
      });
    }

    return coversionTree(flatData, curDeep);
  }
}

function recursionSearch(data, attribute, target) {
  let res = null;

  for (var i = 0; i < data.length; i++) {
    if (data[i][attribute] === target) {
      res = data[i];
      break;
    } else {
      continue;
    }
  }

  if (res === null) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]["type"] === 'object' && data[i]["value"] instanceof Array && data[i]["value"].length > 0) {
        res = recursionSearch(data[i]["value"], attribute, target);

        if (res === null) {
          continue;
        } else {
          break;
        }
      } else {
        continue;
      }
    }
  }

  return res;
}

function coversionTreeResult(array) {
  coversionTree(array);
  return conversionResult;
}