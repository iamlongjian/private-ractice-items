import TodoEvent from "./js/todoEvent"
import { ITodoData } from "./js/typings"

  ; ((doc) => {
    // 首先把需要用到的dom取出来
    const oInput: HTMLInputElement = document.querySelector('input')
    const oAddBtn: HTMLElement = document.querySelector('button')
    const oTodoList: HTMLElement = document.querySelector('.todo-list')

    // 写死一份数据
    const todoData: ITodoData[] = [
      {
        id: 1,
        content: '我是1',
        completed: false
      },
      {
        id: 2,
        content: '我是2',
        completed: true
      },
      {
        id: 3,
        content: '我是3',
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
      oInput.value = ''
    }

    function handleListClick(e: MouseEvent): void {
      const tar = e.target as HTMLElement
      const tagName = tar.tagName.toLowerCase()

      if (tagName === 'input' || tagName === 'button') {
        const id = parseInt(tar.dataset.id)
        switch (tagName) {
          case 'input':
            todoEvent.toggleComplete(tar, id)
            break;
          case 'button':
            todoEvent.removeTodo(tar, id)
            break;
          default:
            break;
        }
      }
    }
    // 执行初始化函数
    init()

  })(document)