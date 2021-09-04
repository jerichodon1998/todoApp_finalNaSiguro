import Todo from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export default class TodoServiceImpl {
    todoRepo: TodoRepository

    constructor(td: TodoRepository) {
        this.todoRepo = td
    }

    GetTodos(): Array<Todo> {
        return this.todoRepo.GetTodos()
    }
    SetTodo(todo: Array<Todo>): void {
        return this.todoRepo.SetTodo(todo)
    }
    // UpdateTodo(): Todo[] {
    //     return this.todoRepo.UpdateTodo()
    // }
    // DeleteTodo(): Todo[] {
    //     return this.todoRepo.DeleteTodo()
    // }
}
