import TodoDom from "./todoDom";
import { ITodoData } from "./typings";

class TodoEvent extends TodoDom {
  private todoData: ITodoData[];

  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper)
    this.todoData = todoData;
  }

  public addTodo(todo: ITodoData): undefined | number {
    const _todo = this.todoData.find((item: ITodoData) => item.content === todo.content)

    if (!_todo) {
      this.todoData.push(todo)
      this.addItem(todo)
      return
    }
    return 1001
  }

  public removeTodo(target: HTMLElement, todo: ITodoData): void {
    this.todoData = this.todoData.filter((item: ITodoData) => item.id !== todo.id)
    this.removeItem(target)
  }

  public toggleComplete(target: HTMLElement, todo: ITodoData): void {
    this.todoData.forEach((item: ITodoData) => {
      if (item.id === todo.id) {
        item.completed = !item.completed
        this.changeCompleted(target, item.completed)
      }
    })
  }
}

export default TodoEvent