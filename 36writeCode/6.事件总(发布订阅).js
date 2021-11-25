class EventEmmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    // 绑定
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off(name, fn) {
    // 解绑事件
    let tasks = this.cache[name]
    if (tasks.findIndex(t => t === fn) > -1) {
      tasks.splice(tasks.findIndex(t => t === fn), 1)
    }
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      let tasks = this.cache[name].slice()
      tasks.forEach(fn => {
        fn(...args)
      });
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

let evt = new EventEmmitter()
const fn = (name, age) => {
  console.log(name, age);
}
evt.on('haha', fn)
evt.on('haha', (name) => {
  console.log(name);
})
evt.emit('haha', false, 'longjian', 200)
// evt.emit('haha', true, 'longjian')
console.log('-----------');
evt.off('haha', fn)
evt.emit('haha', false, 'longjian', 200)