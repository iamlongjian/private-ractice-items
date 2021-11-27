// 触发高频操作，且N秒内只执行一次
/**
 * 时间戳实现
 */
function throttle(fn, wait) {
  let context, args; // 固定函数内this和参数
  let pervious = 0 // 上一次执行的时间戳

  return function () {
    let now = +new Date() // 当前的时间戳
    context = this
    args = arguments
    if (now - pervious > wait) {  // （当前 - 上一次 大于 需要等待的时间），那么可以执行函数了
      fn.apply(context, args)
      pervious = now
    }
  }
}
document.onmousemove = throttle(() => console.log(1), 1000)
