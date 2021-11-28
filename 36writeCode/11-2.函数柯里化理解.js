const curry = (fn, ...args) =>
  args.length >= fn.length ?
    fn(...args) // 直接调用原函数
    : (..._args) => curry(fn, ..._args, ...args)

function add(a, b, c) {
  return a + b + c
}
let _add = curry(add)
console.log(_add(1, 2, 3));
console.log(_add(1)(2)(3));