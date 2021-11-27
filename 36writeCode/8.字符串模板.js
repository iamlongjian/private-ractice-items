/**
 * 难点：
 * 1. 正则匹配 '{{}}'
 * 2. 如何将多个变量替换？ 使用递归
 */
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/ // 模板字符串正则
  if (reg.test(template)) {
    const name = reg.exec(template)[1] // 获取组里面第一个匹配的变量的name
    template = template.replace(reg, data[name] || '未定义') // 将当前匹配到的变量赋值
    return render(template, data) // 递归替换多个变量
  }
  return template // 如果没有模板字符串
}
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
  name: '阿龙',
  age: 22
}
console.log(render(template, person)); // 我是布兰，年龄12，性别undefined