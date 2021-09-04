import Head from "next/head"
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { fetchList } from "../app/redux/item/item.slice"

import CreateTodo from "./components/CreateTodo"
import TodosList from "./components/TodosList"

export default function Home() {
    const items = useAppSelector((state) => state.items.items)
    const loading = useAppSelector((state) => state.items.loading)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(fetchList())
    }
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
                />
            </Head>
            <div className="ui container">
                <CreateTodo />
                <TodosList />
            </div>
        </>
    )
}

{
    /* <button type="button" onClick={handleClick} disabled={loading}>
                Refresh
            </button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul> */
}
