import TodoEvent from "./js/todoEvent"
import { ITodoData } from "./js/typings"

  ; ((doc) => {
    // 首先把需要用到的dom取出来
    const oInput: HTMLElement = document.querySelector('input')
    const oAddBtn: HTMLElement = document.querySelector('button')
    const oTodoList: HTMLElement = document.querySelector('.todo-list')

    // 写死一份数据
    const todoData: ITodoData[] = [
      {
        id: 1,
        content: '1',
        completed: true
      },
      {
        id: 2,
        content: '2',
        completed: true
      },
      {
        id: 3,
        content: '3',
        completed: true
      }
    ]
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
      todoEvent.addTodo(<ITodoData>{
        id: 4,
        content: '我爱你',
        completed: false
      })
      console.log(todoData);
    }
    function handleListClick(e: MouseEvent): void {
      console.log(2);
    }
    // 执行初始化函数
    init()

  })(document)