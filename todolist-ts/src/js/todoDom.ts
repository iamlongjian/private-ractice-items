import TodoTemplate from "./todoTemplate";
import { ITodoData } from "./typings"
import { findParentNode, creatItem } from "../utils"


class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement

  constructor(todoWrapper: HTMLElement) {
    super()
    this.todoWrapper = todoWrapper
  }

  // 初始化列表
  protected initList(todoData: ITodoData[]) {
    const oFrg = document.createDocumentFragment() // 空标签
    todoData.map((todo: ITodoData) => {
      const oItem: HTMLElement = creatItem(this.todoView(todo))
      this.todoWrapper.appendChild(oItem)
      oFrg.appendChild(oItem)
    })
    this.todoWrapper.appendChild(oFrg)
  }

  protected addItem(todo: ITodoData) {
    const oItem: HTMLElement = creatItem(this.todoView(todo))
    this.todoWrapper.appendChild(oItem)
  }

  protected removeItem(target) {
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
    oParentNode.remove()
  }

  protected changeCompleted(target: HTMLElement, completed: boolean) {
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
    const oContent: HTMLElement = oParentNode.getElementsByTagName('span')[0]

    oContent.style.textDecoration = completed ? 'line-through' : 'none'
  }
}
export default TodoDom