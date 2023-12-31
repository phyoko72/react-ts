import React from "react"
import useTodos from "../hooks/useTodos"

export default function TodoList() {
    const pageSize = 80

    const {
        data: todos,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
    } = useTodos({pageSize})

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.message}</h1>
    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todos?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page?.map((todo) => (
                            <li
                                key={todo.id}
                                className=" border rounded p-2 my-2 hover:bg-white/25"
                            >
                                {todo.title}
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
            <button
                disabled={isFetchingNextPage}
                className=" disabled:opacity-0"
                onClick={() => fetchNextPage()}
            >
                Load More
            </button>
        </>
    )
}
