var transformArray1 = require('../dist/new.bundle.js')
// var transformArray2 = require('../dist/new.bundle.js')

// console.log(1,transformArray1,2,transformArray2 )
const testJson = '{"code":0,"msg":"","data":{"project":{"id":"5d4bba61aa4ec40008626719","name":"itest","timeType":1,"intervalTime":1,"autoStartTime":1,"autoEndTime":1,"createTime":1565244001145,"envMap":{"zelda":"","a":"a"},"isAsync":1,"isDelete":null,"jobSwitch":true,"type":null,"updateUser":"iTest","updateTime":1586908904541},"page":{"pageNo":1,"pageSize":10,"total":20,"list":[{"updateId":63000,"updateName":"iTest"}]}}}'
const testTree = '[{"name":"code","type":"Number","description":"","ruleStr":"","value":0,"target":null,"deep":1},{"name":"msg","type":"String","description":"","ruleStr":"","value":"","target":null,"deep":1},{"name":"data","type":"Object","description":"","ruleStr":"","value":[{"name":"project","type":"Object","description":"","ruleStr":"","value":[{"name":"id","type":"String","description":"","ruleStr":"","value":"5d4bba61aa4ec40008626719","target":"project","deep":3},{"name":"name","type":"String","description":"","ruleStr":"","value":"itest","target":"project","deep":3},{"name":"timeType","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"intervalTime","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"autoStartTime","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"autoEndTime","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"createTime","type":"Number","description":"","ruleStr":"","value":1565244001145,"target":"project","deep":3},{"name":"envMap","type":"Object","description":"","ruleStr":"","value":[{"name":"zelda","type":"String","description":"","ruleStr":"","value":"","target":"envMap","deep":4},{"name":"a","type":"String","description":"","ruleStr":"","value":"a","target":"envMap","deep":4}],"target":"project","deep":3},{"name":"isAsync","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"isDelete","type":"Object","description":"","ruleStr":"","value":"","target":"project","deep":3},{"name":"jobSwitch","type":"Boolean","description":"","ruleStr":"","value":true,"target":"project","deep":3},{"name":"type","type":"Object","description":"","ruleStr":"","value":"","target":"project","deep":3},{"name":"updateUser","type":"String","description":"","ruleStr":"","value":"iTest","target":"project","deep":3},{"name":"updateTime","type":"Number","description":"","ruleStr":"","value":1586908904541,"target":"project","deep":3}],"target":"data","deep":2},{"name":"page","type":"Object","description":"","ruleStr":"","value":"","target":"data","deep":2}],"target":null,"deep":1}]'
const testArray = [
  {
    name: 'code',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 0,
    target: null,
    deep: 1,
    id: 'rq7hrczdaj'
  },
  {
    name: 'msg',
    type: 'string',
    description: '',
    ruleStr: '',
    value: '',
    target: null,
    deep: 1,
    id: 'sq02db5j0b'
  },
  {
    name: 'data',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: null,
    deep: 1,
    id: '7sar6gtdez'
  },
  {
    name: 'project',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: '7sar6gtdez',
    deep: 2,
    id: 'rg0nci4dxz'
  },
  {
    name: 'id',
    type: 'string',
    description: '',
    ruleStr: '',
    value: '5d4bba61aa4ec40008626719',
    target: 'rg0nci4dxz',
    deep: 3,
    id: '7gojpjh07y'
  },
  {
    name: 'name',
    type: 'string',
    description: '',
    ruleStr: '',
    value: 'itest',
    target: 'rg0nci4dxz',
    deep: 3,
    id: '9tlp5swq1a'
  },
  {
    name: 'timeType',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1,
    target: 'rg0nci4dxz',
    deep: 3,
    id: '2m77zxt9l7'
  },
  {
    name: 'intervalTime',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1,
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'ynfxt5z2kz'
  },
  {
    name: 'autoStartTime',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1,
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'l46vxybnod'
  },
  {
    name: 'autoEndTime',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1,
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'srmrea0yij'
  },
  {
    name: 'createTime',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1565244001145,
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'kz7jrycnwn'
  },
  {
    name: 'envMap',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'kovwextbp3'
  },
  {
    name: 'zelda',
    type: 'string',
    description: '',
    ruleStr: '',
    value: '',
    target: 'kovwextbp3',
    deep: 4,
    id: 'btkepcubhe'
  },
  {
    name: 'a',
    type: 'string',
    description: '',
    ruleStr: '',
    value: 'a',
    target: 'kovwextbp3',
    deep: 4,
    id: 'n5cltokjpe'
  },
  {
    name: 'isAsync',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1,
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'ccov7oiufp'
  },
  {
    name: 'isDelete',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'e6emscfpyz'
  },
  {
    name: 'jobSwitch',
    type: 'boolean',
    description: '',
    ruleStr: '',
    value: true,
    target: 'rg0nci4dxz',
    deep: 3,
    id: '6exmqxtuhn'
  },
  {
    name: 'type',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'pcxulhyhy2'
  },
  {
    name: 'updateUser',
    type: 'string',
    description: '',
    ruleStr: '',
    value: 'iTest',
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'fgsaq0b4ew'
  },
  {
    name: 'updateTime',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1586908904541,
    target: 'rg0nci4dxz',
    deep: 3,
    id: 'jfkjw4lf6r'
  },
  {
    name: 'page',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: '7sar6gtdez',
    deep: 2,
    id: 'hyikfbr3ga'
  },
  {
    name: 'pageNo',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 1,
    target: 'hyikfbr3ga',
    deep: 3,
    id: 'voy7d0xkth'
  },
  {
    name: 'pageSize',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 10,
    target: 'hyikfbr3ga',
    deep: 3,
    id: '6jlj6yp1uz'
  },
  {
    name: 'total',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 20,
    target: 'hyikfbr3ga',
    deep: 3,
    id: 'dktpazfhcp'
  },
  {
    name: 'list',
    type: 'object',
    description: '',
    ruleStr: '',
    value: '',
    target: 'hyikfbr3ga',
    deep: 3,
    id: 'jbhmodzj8r'
  },
  {
    name: 'updateId',
    type: 'number',
    description: '',
    ruleStr: '',
    value: 63000,
    target: 'jbhmodzj8r',
    deep: 4,
    id: '8cbh0hhhry'
  },
  {
    name: 'updateName',
    type: 'string',
    description: '',
    ruleStr: '',
    value: 'iTest',
    target: 'jbhmodzj8r',
    deep: 4,
    id: '2nnhg5hgt9'
  }
]
// console.log(JSON.stringify(transformArray1.default.transformArray.jsonToArray(JSON.parse(testJson))))
// console.log(JSON.stringify(transformArray1.default.transformArray.treeToArray(JSON.parse(testTree))))
console.log(JSON.stringify(transformArray1.default.transformArray.arrayToTree(testArray)))
