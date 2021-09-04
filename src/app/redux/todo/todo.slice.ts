import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"
import Todo from "../../../domain/entities/Todo"
import TodoServiceImpl from "../../../domain/usecases/TodoService"
import type { RootState } from "../store"

interface CounterState {
    todos: Array<Todo>
}

const initialState: CounterState = {
    todos: new TodoRepositoryImpl().GetTodos(),
}

const todoService = () => {
    const TodoRepo = new TodoRepositoryImpl()
    return new TodoServiceImpl(TodoRepo)
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        createTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todos.push(action.payload)
                const oldData = todoService().GetTodos()
                oldData.push(action.payload)
                todoService().SetTodo(oldData)
            },
            prepare: (todo: Todo) => {
                console.log(todo)
                return { payload: todo }
            },
        },
        updateTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                const updatedState = state.todos.map((payload) => {
                    if (action.payload.id === payload.id) {
                        return new Todo(action.payload.id, action.payload.title, action.payload.done)
                    }
                    return payload
                })
                state.todos = updatedState
            },
            prepare: (todo: Todo) => {
                console.log(todo)
                return { payload: todo }
            },
        },
        deleteTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todos = state.todos.filter(({ id }) => id !== action.payload.id)
                todoService().SetTodo(state.todos)
            },
            prepare: (todo: Todo) => {
                console.log(todo)
                return { payload: todo }
            },
        },
    },
})

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
export const todos = (state: RootState) => state.todos.todos
export default todoSlice.reducer
