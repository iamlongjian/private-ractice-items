// const r = /abc/igm
// 实例一些的属性
// 与修饰符有关的属性
// console.log(r.ignoreCase);
// console.log(r.global);
// console.log(r.multiline);
// console.log(r.flags);
// 与修饰符无关的两个属性
// console.log(r.lastIndex);
// console.log(r.source);


/**
 * 实例的方法们
 */
// test()
// const r = /long/g
// r.test('longjian longer')
// r.test('longjian longer')
// r.lastIndex = 0 // 指定下一次开始匹配的位置(只有对g修饰符起作用)
// console.log(r.test('longjian longer'));

//exec()，如果匹配成功，则返回一个数组，成员是匹配成功的子字符串。否则返回null
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

const res1 = r1.exec(s);// ["x"]
r2.exec(s);// null
// exec()返回的数组还包含以下两个属性
// index 开始匹配的位置
// input 整个字符串
console.log(res1.index); // 1
console.log(res1.input); //_x_x
