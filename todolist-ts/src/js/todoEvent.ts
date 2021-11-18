import TodoDom from "./todoDom";
import { ITodoData } from "./typings";

class TodoEvent extends TodoDom {
  private todoData: ITodoData[];

  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper)
    this.todoData = todoData;

    this.init()
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

  protected init() {
    this.initList(this.todoData)
  }

  public removeTodo(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.filter((item: ITodoData) => item.id !== id)
    this.removeItem(target)
  }

  public toggleComplete(target: HTMLElement, id: number): void {
    this.todoData.forEach((item: ITodoData) => {
      if (item.id === id) {
        item.completed = !item.completed
        this.changeCompleted(target, item.completed)
      }
    })
  }
}

export default TodoEvent