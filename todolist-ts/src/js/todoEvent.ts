import { ITodoData } from "./typings";

class TodoEvent {
  private todoData: ITodoData[];

  constructor(todoData: ITodoData[]) {
    this.todoData = todoData;
  }

  public addTodo(todo: ITodoData): undefined | number {
    const _todo = this.todoData.find((item: ITodoData) => item.id === todo.id)

    if (!_todo) {
      this.todoData.push(todo)
      return
    }
    return 1001
  }

  public removeTodo(todo: ITodoData): void {
    this.todoData = this.todoData.filter((item: ITodoData) => item.id !== todo.id)
  }

  public toggleComplete(todo: ITodoData): void {
    this.todoData.forEach((item: ITodoData) => {
      if (item.id === todo.id) {
        item.completed = !item.completed
      }
    })
  }
}

export default TodoEvent