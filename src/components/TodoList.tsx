import {useState} from "react"
import useTodos from "../hooks/useTodos"

export default function TodoList() {
    const pageSize = 10
    const total = 30
    const [page, setPage] = useState(1)
    const {data: todos, error, isLoading} = useTodos({page, pageSize})
    console.log(todos)
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.message}</h1>
    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todos?.map((todo) => (
                    <li
                        key={todo.id}
                        className=" border rounded p-2 my-2 hover:bg-white/25"
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
            <button
                disabled={page === 1}
                className=" disabled:opacity-30 me-4"
                onClick={() => setPage((prev) => prev - 1)}
            >
                Prev
            </button>
            <button
                disabled={page * pageSize === total}
                className=" disabled:opacity-30"
                onClick={() => setPage((prev) => prev + 1)}
            >
                Next
            </button>
        </>
    )
}
