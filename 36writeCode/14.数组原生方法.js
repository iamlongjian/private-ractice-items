// forEach
/**
 * callbcak:传入的回调函数
 * thisArg:回调函数根据该this来调用
 */
Array.prototype.forEach2 = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    console.log('请传入函数');
    return
  }
  if (this === null) {
    console.log('请传入数组');
    return
  }
  const O = Object(this) //this就是当前数组
  const len = O.length >>> 0
  let k = 0
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O)
    }
    k++
  }
}
[1, 2, 3].forEach2(t => console.log(t))

// map
Array.prototype.map2 = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    console.log('请传入函数');
    return
  }
  if (this === null) {
    console.log('请传入数组');
    return
  }
  const O = Object(this) //this就是当前数组
  const len = O.length >>> 0
  let k = 0
  let res = []
  while (k < len) {
    if (k in O) {
      res.push(callback.call(thisArg, O[k], k, O))
    }
    k++
  }
  return res
}
[1, 2, 3].map2((t, i) => i)

// filter
Array.prototype.filter2 = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    console.log('请传入函数');
    return
  }
  if (this === null) {
    console.log('请传入数组');
    return
  }
  const O = Object(this) //this就是当前数组
  const len = O.length >>> 0
  let k = 0
  let res = []
  while (k < len) {
    if (k in O) {
      if (callback.call(thisArg, O[k], k, O)) {
        res.push(O[k])
      }
    }
    k++
  }
  return res
}

// some
Array.prototype.some2 = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    console.log('请传入函数');
    return
  }
  if (this === null) {
    console.log('请传入数组');
    return
  }
  const O = Object(this) //this就是当前数组
  const len = O.length >>> 0
  let k = 0
  let res = false
  while (k < len) {
    if (k in O) {
      if (callback.call(thisArg, O[k], k, O)) {
        res = true
      }
    }
    k++
  }
  return res
}