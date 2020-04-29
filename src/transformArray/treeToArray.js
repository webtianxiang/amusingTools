let dataModel = []
let deep = 0

function recursionJson (list, target, deep) {
  deep++
  if (list instanceof Array && list.length > 0) {
    list.forEach(item => {
      let element = {}
      element.name = item.name
      element.type = item.type
      element.description = item.description
      element.ruleStr = item.ruleStr
      element.value = item.type === 'object' ? '' : item.value
      element.target = target
      element.deep = deep
      element.id = randomStr()
      dataModel.push(element)
      if (item.type === 'object' && item.value.length > 0) {
        recursionJson(item.value, element.id, deep)
      }
    })
  }
  return
}
function randomStr () {
  let standard = '0123456789abcdefghijklmnopqrstuvwxyz'
  let randomNumLen = 8
  let resultStr = ''
  for (var i = 0; i < randomNumLen; i++) {
    let randomNum = Math.floor(Math.random() * 36)
    resultStr += standard.charAt(randomNum)
  }
  return resultStr
}

let testJson = '[{"name":"code","type":"Number","description":"","ruleStr":"","value":0,"target":null,"deep":1},{"name":"msg","type":"String","description":"","ruleStr":"","value":"","target":null,"deep":1},{"name":"data","type":"Object","description":"","ruleStr":"","value":[{"name":"project","type":"Object","description":"","ruleStr":"","value":[{"name":"id","type":"String","description":"","ruleStr":"","value":"5d4bba61aa4ec40008626719","target":"project","deep":3},{"name":"name","type":"String","description":"","ruleStr":"","value":"itest","target":"project","deep":3},{"name":"timeType","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"intervalTime","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"autoStartTime","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"autoEndTime","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"createTime","type":"Number","description":"","ruleStr":"","value":1565244001145,"target":"project","deep":3},{"name":"envMap","type":"Object","description":"","ruleStr":"","value":[{"name":"zelda","type":"String","description":"","ruleStr":"","value":"","target":"envMap","deep":4},{"name":"a","type":"String","description":"","ruleStr":"","value":"a","target":"envMap","deep":4}],"target":"project","deep":3},{"name":"isAsync","type":"Number","description":"","ruleStr":"","value":1,"target":"project","deep":3},{"name":"isDelete","type":"Object","description":"","ruleStr":"","value":"","target":"project","deep":3},{"name":"jobSwitch","type":"Boolean","description":"","ruleStr":"","value":true,"target":"project","deep":3},{"name":"type","type":"Object","description":"","ruleStr":"","value":"","target":"project","deep":3},{"name":"updateUser","type":"String","description":"","ruleStr":"","value":"iTest","target":"project","deep":3},{"name":"updateTime","type":"Number","description":"","ruleStr":"","value":1586908904541,"target":"project","deep":3}],"target":"data","deep":2},{"name":"page","type":"Object","description":"","ruleStr":"","value":"","target":"data","deep":2}],"target":null,"deep":1}]'
recursionJson(JSON.parse(testJson), null, 0)

export default recursionJson