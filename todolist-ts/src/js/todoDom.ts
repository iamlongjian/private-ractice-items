import TodoTemplate from "./todoTemplate";
import { ITodoData } from "./typings"
import { findParentNode } from "../utils"


class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement

  constructor(todoWrapper: HTMLElement) {
    super()
    this.todoWrapper = todoWrapper
  }

  protected addItem(todo: ITodoData) {
    const oItem: HTMLElement = document.createElement('div')
    oItem.className = 'todo-item'
    oItem.innerHTML = this.todoView(todo)
    this.todoWrapper.appendChild(oItem)
  }

  protected removeItem(target) {
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
    oParentNode.remove()
  }
}
export default TodoDom