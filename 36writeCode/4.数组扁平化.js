// [1,[2,3],[4,5]] => [1,2,3,4,5]


// flat的实现
// ES5 实现
function flatten(arr) {
  let resultArr = []
  for (let idx = 0; idx < arr.length; idx++) {
    const item = arr[idx];
    if (Array.isArray(item)) {
      // 是数组
      resultArr = resultArr.concat(flatten(item))
    } else {
      // 非数据，则直接push
      resultArr.push(item)
    }
  }
  return resultArr
}
console.log(flatten([1, [2, 3], [4, 5]]));

// ES6实现
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr); // 循环展开arr // concat：接受数组为参数，返回一个新的数组（也可以接受其他类型的值作为参数）
  }
  return arr;
}
console.log(flatten([1, [2, 3], [4, 5, [6, 7]]])); // [1, 2, 3, 4,5, 6, 7]

const arr = [1, [2, 3], [4, 5]].flat() // flat 实现数组扁平化