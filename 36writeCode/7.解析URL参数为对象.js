const url = 'https://www.nihao.com/?name=longer&age=18&sex=man&sex=girl&nimma.html'
function parseParam(url) {
  // exec 正则实例的方法：用于找出匹配的字符串。小括号代表组，如果匹配，会在返回的数组中出现。第一个括号会出现在索引为1的位置，以此类推。
  const paramsStr = /.+\?(.+)$/.exec(url)[1];// 将?后面的字符取出
  const paramsArr = paramsStr.split('&'); //将字符串以 & 分割后存到数组中
  let paramsObj = {}
  paramsArr.forEach(param => {
    if (/=/.test(param)) {
      // 如果param中包含了 = 号
      let [key, val] = param.split('=')
      val = decodeURI(val) // 解码 // 能解码encodeURI创建或其它流程得到的统一资源标识符 —— MDN
      val = /^\d+$/.test(val) ? parseFloat(val) : val //判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象中有这个key，则添加一个值，concat拼接数组
        paramsObj[key] = [].concat(paramsObj[key], val)
      } else {
        // 如果对象中没有这个key，则创建key并设置值
        paramsObj[key] = val
      }
    } else {
      // 没有value的值
      paramsObj[param] = true
    }
  })
  return paramsObj
}
console.log(parseParam(url));