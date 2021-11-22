const arr = [1, 1, '2', '2', 'nihao,', 'nihao']
// ES5
function unique(arr) {
  var res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index  // indexOf 返回第一次出现的位置，如果第一次出现的位置不等于当前索引，则表示之前已经出现过。
  })
  return res
}
// console.log(unique(arr));
// ES6
// console.log([...new Set(arr)]); // Set结构 不允许出现重复的元素
