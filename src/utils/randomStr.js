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
export default randomStr