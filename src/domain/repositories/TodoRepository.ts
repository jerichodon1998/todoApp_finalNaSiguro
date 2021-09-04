import Todo from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Array<Todo>
    SetTodo(todo: Array<Todo>): void
    // UpdateTodo(): Todo[]
    // DeleteTodo(): Todo[]
}
