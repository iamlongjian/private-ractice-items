// 函数柯里化：将使用多个参数的一个函数转换为一系列使用一个参数的函数的技术。
/**
 *
 * 例子如下:
 * //普通函数
  function fn(a,b,c,d,e) {
    console.log(a,b,c,d,e)
  }
  //生成的柯里化函数
  let _fn = curry(fn);

  _fn(1,2,3,4,5);     // print: 1,2,3,4,5
  _fn(1)(2)(3,4,5);   // print: 1,2,3,4,5
  _fn(1,2)(3,4)(5);   // print: 1,2,3,4,5
  _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5
 */

// ① 柯里化的应用：参数复用
// function check(type) {
//   return function (data) {
//     if (Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === type) {
//       console.log('校验成功');
//     } else {
//       console.log('校验失败');
//     }
//   }
// }
// let checkString = check('string')
// checkString('我是string') // '校验成功'
// checkString(123) // '校验失败'

// ② 需求：要求取出name属性的值
// let list = [
//   {
//     name: 'lucy'
//   },
//   {
//     name: 'jack'
//   }
// ]

/**
 * 常规思路
 * list.map(t => t.name); // 第一种
 * list.map(t => Object.values(t)).flat() // 第二种
 * // 第三种
 * list.reduce((pre, next) => {
     pre.push(next.name)
     return pre
   }, []);
 */

/**
 * 使用柯里化来实现
 * 虽然看起来复杂了，多实现了个prop函数，但是考虑复杂度的话，其实是可以不考虑prop函数的，因为prop函数可以复用
 */
// let prop = curry(function(key,obj) {
//   return obj[key];
// })
// let names = list.map(prop('name'))


/**
 * 函数柯里化的实现------------------------------------------------------------------------------------------
 * 定义：接受一部分参数，返回一个函数接收剩余参数。接收全部参数，执行原函数。
 */

/**
 * 思路：
 * 1. 通过函数的length属性，获取函数的形参个数
 * 2. 调用柯里化工具函数时，手动指定所需参数的个数
 */

// /**
//  * 将函数柯里化
//  * @param fn    待柯里化的原函数
//  * @param len   所需的参数个数，默认为原函数的形参个数
//  */
// function curry(fn, len = fn.length) {
//   return _curry.call(this, fn, len)
// }

// /**
// * 中转函数
// * @param fn    待柯里化的原函数
// * @param len   所需的参数个数
// * @param args  已接收的参数列表
// */
// function _curry(fn, len, ...args) {
//   return function (...params) {
//     let _args = [...args, ...params];
//     if (_args.length >= len) {
//       return fn.apply(this, _args);
//     } else {
//       return _curry.call(this, fn, len, ..._args)
//     }
//   }
// }

// const curry = (fn, ...args) => {
//   // 函数的参数个数可以直接通过函数数的.length属性来访问
//   return args.length >= fn.length // 这个判断很关键！！！
//     // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
//     ? fn(...args)
//     /**
//      * 传入的参数小于原始函数fn的参数个数时
//      * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
//     */
//     : (..._args) => curry(fn, ...args, ..._args);
// }


// function add1(x, y, z) {
//   return x + y + z;
// }
// const add = curry(add1);
// add(1, 2, 3)
// add(1)(2)(3)
// add(1, 2)(3)
// add(1)(2, 3)

// let _fn = curry(function (a, b, c, d, e) {
//   console.log(a, b, c, d, e)
// });

// _fn(1, 2, 3, 4, 5);     // print: 1,2,3,4,5
// _fn(1)(2)(3, 4, 5);   // print: 1,2,3,4,5
// _fn(1, 2)(3, 4)(5);   // print: 1,2,3,4,5
// _fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5

// 变态升级版-------------------------------------------------------------------------------------------------------------------------------------------
// 这道题有个升级版就是无限层级的add(1)(2)(3)...(n)，实现方法
// function argsSum(args) {
//   return args.reduce((pre, cur) => { return pre + cur })
// }
// function add(...args1) {
//   let sum1 = argsSum(args1)
//   let fn = function (...args2) {
//     let sum2 = argsSum(args2)
//     return add(sum1 + sum2)
//   }
//   fn.toString = function () {
//     return sum1
//   }
//   return fn
// }