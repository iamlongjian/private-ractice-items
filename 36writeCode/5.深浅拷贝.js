// 浅拷贝（只考虑对象类型）-------------------------------------------------------------------------------------------------------------
var a = { "name": "zzz" };
var b = { "name": "vvv" };
a.child = b;
b.parent = a;
// const b = a // ①直接赋值，为浅拷贝
// b.name = 2
// console.log(a); // { name: 2 }


// 简单版深拷贝----------------------------------------------只考虑普通对象属性，不考虑内置对象和函数。
// function deepClone(obj) {
//   if (typeof obj !== 'object') return
//   const newObj = obj instanceof Array ? [] : {}
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
//     }
//   }
//   return newObj
// }
// const c = deepClone(a)
// c.name = 3
// console.log(c);  // { name: 3 }
// console.log(a); // { name: 2 }

// 复杂版深拷贝--------------------------基于简单版的基础上，还考虑了内置对象比如 Date、RegExp 等对象和函数以及解决了循环引用的问题。
// ① 创建工具函数，判断是否为对象
const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null
// ② 编写深拷贝函数
function cloneDeep(target, map = new WeakMap()) {
  if (map.has(target)) {
    // 如果map结构中有target，则直接返回target
    return target
  }
  // 获取当前值的构造函数：获取它的类型
  let constructor = target.constructor
  // 检测当前对象target是否与正则、日期格式对象匹配
  if (/^^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建一个新的特殊对象(正则类/日期类)的实例
    return new constructor(constructor.name)
  }
  if (isObject(target)) {
    map.set(target, true)// 为循环引用的对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (const prop in target) {
      if (Object.hasOwnProperty.call(target, prop)) {
        cloneTarget[prop] = cloneDeep(target[prop], map)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
const c = cloneDeep(a)
c.child.name = 'longer'
console.log(a);
console.log(c);
// b.info.age = '123'
// b.info.info.age = '456'
// console.log(a); // {name: 1,info: { age: 18, job: 'frontEnd', info: { age: 22, job: 'frontEnd22' } }}
// console.log(b); // {name: 1,info: {age: '123',job: 'frontEnd',info: { age: '456', job: 'frontEnd22' }}}
