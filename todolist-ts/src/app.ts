import TodoEvent from "./js/todoEvent"
import { ITodoData } from "./js/typings"

  ; ((doc) => {
    // 首先把需要用到的dom取出来
    const oInput: HTMLInputElement = document.querySelector('input')
    const oAddBtn: HTMLElement = document.querySelector('button')
    const oTodoList: HTMLElement = document.querySelector('.todo-list')

    // 写死一份数据
    const todoData: ITodoData[] = []
    //初始化函数
    const init = (): void => {
      bindEvent()
    }
    // 绑定点击事件
    const bindEvent = (): void => {
      oAddBtn.addEventListener('click', handleAddBtnClick, false)
      oTodoList.addEventListener('click', handleListClick, false)
    }

    const todoEvent = new TodoEvent(todoData, oTodoList)

    function handleAddBtnClick(): void {
      const val = oInput.value.trim()
      if (val.length) {
        const res = todoEvent.addTodo(<ITodoData>{
          id: todoData.length - 1,
          content: val,
          completed: false
        })
        if (res && res === 1001) {
          alert('列表中已存在')
          return
        }
      }
    }
    function handleListClick(e: MouseEvent): void {
      console.log(2);
    }
    // 执行初始化函数
    init()

  })(document)