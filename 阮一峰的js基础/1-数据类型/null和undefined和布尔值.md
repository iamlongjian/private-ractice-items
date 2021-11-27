# null和undefined
### null和undefined差别和使用场景
从语法效果来说，两者几乎是相同的，但是`null`一般是用于设置变量的初始值，表示该变量当下的值为`null`。`undefined`则是定义了一个变量但是没有赋值。

### 为什么有null，还会有undefined
历史原因，设计者觉得没有赋值，就不能为`null`，因为`null`会转换为`0`(如同C++)，设计者觉得，没有赋值就不能参数运算，所以在运算时，`undefined`会转换为`NaN`

# 布尔值
- 布尔值只有`true`和`false`

### 以下操作会返回布尔值
- 前置逻辑运算符 `!varibel`
- 比较运算符 `> >= < <=`
- 相等运算符 ` === !== == != `

### 下面六个值会转换为false,其余的都是true
- ''
- 0
- Null
- undefined
- NaN
- false

> 注意 空数组`[]` 和 空对象`{}`，会转为 `true`


 
