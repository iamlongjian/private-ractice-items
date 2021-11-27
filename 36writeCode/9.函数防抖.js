// 触发高频事件N秒后只会执行一次，如果N秒内再次触发，则会重新计时
/**
 * 简易版
 * @param {Function} fn 需要执行防抖处理的函数
 * @param {number} time 时间
 */
// 函数内部支持使用 this 和 event 对象；
// function debounce(fn, time) {
//   let timeout;
//   return function () {
//     const context = this
//     const args = arguments
//     clearTimeout(timeout)
//     timeout = setTimeout(() => {
//       fn.apply(context, args)
//     }, time);
//   }
// }

// function getUserAction(h, a) {
//   console.log(this, h, a)
// };
// document.onmousemove = debounce(getUserAction, 1000)

/**
 * 进阶版防抖函数
 * @param {function} func 需要防抖的函数
 * @param {number} time 防抖时间
 * @param {boolean} immediate 是否立即执行
 */
function debounce(func, wait, immediate) {
  let timeoutId, result; // 声明定时器返回值 和 结果
  let debounced = function () {
    const context = this
    const args = arguments

    if (timeoutId) clearTimeout(timeoutId) //表示还没到时间，重置时间
    if (immediate) {
      // 如果已经执行过，则不再执行
      let callNow = !timeoutId
      timeoutId = setTimeout(function () {
        timeoutId = null
      }, wait)
      if (callNow) {
        return func.apply(context, args)
      }
    } else {
      timeoutId = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeoutId)
    timeoutId = null //垃圾回收
  }

  return debounced
}
// var setUseAction = debounce(getUserAction, 10000, true);
// // 使用防抖
// node.onmousemove = setUseAction

// // 取消防抖
// setUseAction.cancel()