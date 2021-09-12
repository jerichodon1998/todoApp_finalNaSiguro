import React, { useState, useEffect } from "react"
import TodoDetails from "./TodoDetails"
import { useAppSelector } from "app/redux/hooks"

const TodosList = () => {
    const todos = useAppSelector((state) => state.todos.todos)
    const [renderList, setRenderList] = useState(() => {
        return null
    })
    useEffect(() => {
        if (typeof window !== "undefined") {
            setRenderList(() => {
                return todos.map((todo) => {
                    return (
                        <div className="item" key={todo.id}>
                            <div className="content">
                                <div className="description">
                                    <div className="ui three column grid">
                                        <TodoDetails todo={todo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            })
        }
    }, [todos])

    return <div className="ui relaxed divided list">{renderList}</div>
}

export default TodosList

// class TodosList extends React.Component {
//     state = { renderedList: () => {} }

//     componentDidMount() {
//         if (window !== "undefined") {
//             this.setState({
//                 renderedList: () => {
//                     return todos.map((todo) => {
//                         return (
//                             <div className="item" key={todo.id}>
//                                 <div className="content">
//                                     <div className="description">
//                                         <div className="ui three column grid">
//                                             <Todo todo={todo} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 },
//             })
//         }
//     }
//     render() {
//         return <div className="ui relaxed divided list">{this.state.renderedList()}</div>
//     }
// }
