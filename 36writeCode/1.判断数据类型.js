// 手写一个方法，判断js数据类型
// 使用Object.prototype.toString.call(xxx)
function myTypeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

console.log(myTypeOf('123')) // string;
console.log(myTypeOf(123)) // number;
console.log(myTypeOf({})) // object;
console.log(myTypeOf([])) // array;
console.log(myTypeOf(null)) // null;
console.log(myTypeOf(undefined)) // undefined;
console.log(myTypeOf(function () { })) // function;
