// 定义：偏函数就是将一个n参数的函数转换成固定x参数的函数，剩余参数(n-x)将在下次调用时全部传入
/**
  function partial(fn, ...args) {
    return (..._args) => fn(...args, ..._args)
  }
  function add(a, b, c) {
    return a + b + c
  }
  let partialAdd = partial(add, 1, 2, 3)
  partialAdd(2, 3) // 6
*/


// 以上功能比较简单，现在要实现一个带占位功能的偏函数

function partial(fn, ...args) {
  const idx = args.findIndex(t => t === '_')
  return (..._args) => {
    args[idx] = _args[0]
    fn(...args, ..._args.slice(1))
  }
}

function clg(a, b, c) {
  console.log(a, b, c)
}
let partialClg = partial(clg, 2, '_')
partialClg(1, 3)  // 依次打印：1, 2, 3