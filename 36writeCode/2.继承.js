/**
 * 继承 —— 子类可使用父类的方法和属性
 */

// ① 原型链继承  ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
/**
 * 缺点：
 * 1. 原型中包含的引用类型属性将被所有实例共享
 * 2. 子类在实例化的时候不能给父类构造函数传参
 */
// function Animal() {
//   this.name = ['123']
// }
// Animal.prototype.getName = function () {
//   return this.name
// }

// function Dog() { }
// Dog.prototype = new Animal()
// const dogg = new Dog('cat', 19)
// console.log(dogg.getName()); // '123'


// ② 借用构造函数实现继承 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
/**
 * 该方法解决了方法①的两个问题，但是方法必须定义在构造函数中，导致每次新建实例都会创建一边方法。
 * 并且。继承过后创建实例，控制台打出的任然是父类
 */

// function Person(name) {
//   this.name = name
//   this.getName = function () {
//     return this.name
//   }
// }

// function Long(name) {
//   Person.call(this, name) // call，改变函数内部的this，指向第一个参数，并且调用该函数
// }
// Long.prototype = new Person()
// const longjian = new Long('longjian')
// console.log(longjian.getName()); // 'longjian'

// ③ 组合继承 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
/**
 * 结合以上两种方式的优点,并且修改constructor
 */

// function Person(name) {
//   this.name = name
// }

// Person.prototype.getName = function () {
//   return this.name
// }

// function Along(name, age) {
//   Person.call(this, name) // ①call调用
//   this.age = age
// }

// // ②原型继承
// Along.prototype = new Person()
// // ③更改构造器
// Along.prototype.constructor = Along
// Along.prototype.getAge = function () {
//   return this.age
// }

// const longjian = new Along('longjian', 22)
// console.log(longjian.getAge());

// ④ 寄生式组合继承(方法③的优化版) —————————————————————————————————————————————————————————————————————————————————————————————————————————————— 

// 将方法③的第二步,改成 
// Along.prototype = Obejct.create(Person.prototype) // Object.create() 基于参数原型对象,生成一个新对象

// ⑤ ES6 class 继承 —————————————————————————————————————————————————————————————————————————————————————————————————————————————— 
/**
 * 直接使用关键字 extends
 */

class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Long extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const longjian = new Long('longjian', 22)
console.log(longjian.getName());




