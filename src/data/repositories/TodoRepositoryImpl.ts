import Todo from "../../domain/entities/Todo"
import { TodoRepository } from "domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {
    GetTodos(): any {
        const result = []
        if (typeof window !== "undefined") {
            if (localStorage.getItem("todos") === null) {
                localStorage.setItem("todos", JSON.stringify([]))
            }
            const fetchedItems: any = JSON.parse(localStorage.getItem("todos"))
            fetchedItems.forEach((item) => {
                result.push(item)
            })
        }
        return result
    }
    SetTodo(todo: Array<Todo>): any {
        if (typeof window !== "undefined") {
            const result = localStorage.setItem("todos", JSON.stringify(todo))

            if (localStorage.getItem("todos") === null) console.log("empty")
        }
    }
}
