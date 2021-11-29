# 1 概述
简单地说，对象就是键值对的集合
## 1.1 键
键是字符串形式存在的。
## 1.2 值
值可以是任何数据类型，如果是函数，那通常这个属性称为“方法”
## 1.3 对象的引用
如果两个值指向同一个对象，那他们都是这个对象的引用，也就是说他们在内存中的地址是一样的。修改其中一个，会影响到其他所有的变量。
```
let obj = {a:1}
let obj2 = obj
obj2.a = 2
obj.a // 2 可以看到会相互影响
```

# 2 操作方法
## 2.1 delete
用于删除对象中的某个属性
```
const obj = {a:1}
delete obj.b //true 当删除一个不存在的属性，不仅不会报错，还会返回true
```
----
什么情况下返回false？

当这个属性被定义(Obejct.defineProperty)为不可删除的时候，delete操作会返回false
```
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false
});
obj.p = 123
delete obj.p //false
```
## 2.2 in
`in`操作符用于判断对象中是否存在某个属性，**注意：in操作符会查找继承过来的属性，可以使用obj.hasOwnProperty(‘属性名’)区分**
## 2.3 for...in
`for...in`用于循环遍历一个对象中的所有属性，**注意：会查找继承过来的属性，可以使用obj.hasOwnProperty(‘属性名’)区分**
## 2.4 Object.keys()
循环出对象中的key，将key形成一个数组。
```
const obj = {a:1,b:2,v:3}
Object.keys(obj) // ['a', 'b', 'v']
```