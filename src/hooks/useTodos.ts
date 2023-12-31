import {keepPreviousData, useQuery} from "@tanstack/react-query"
import axios from "axios"
interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface PageQuery {
    page: number
    pageSize: number
}

export default function useTodos(query: PageQuery) {
    const fetchTodos = async () => {
        const res = await axios.get<Todo[]>(
            "https://jsonplaceholder.typicode.com/todos",
            {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize,
                },
            }
        )
        return res.data
    }
    return useQuery<Todo[], Error>({
        queryKey: ["todos", query],
        queryFn: fetchTodos,
        placeholderData: keepPreviousData,
    })
}
