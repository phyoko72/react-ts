import {keepPreviousData, useInfiniteQuery} from "@tanstack/react-query"
import axios from "axios"
export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface PageQuery {
    pageSize: number
}

export default function useTodos(query: PageQuery) {
    // const fetchTodos = async (pageParam: number) => {
    //     const res = await axios.get<Todo[]>(
    //         "https://jsonplaceholder.typicode.com/todos",
    //         {
    //             params: {
    //                 _start: (pageParam - 1) * query.pageSize,
    //                 _limit: query.pageSize,
    //             },
    //         }
    //     )
    //     return res.data
    // }
    return useInfiniteQuery<Todo[], Error>({
        queryKey: ["todos", query],
        initialPageParam: 1,
        queryFn: async ({pageParam}) => {
            console.log({pageParam})
            const res = await axios.get<Todo[]>(
                "https://jsonplaceholder.typicode.com/todos",
                {
                    params: {
                        _start: ((pageParam as number) - 1) * query.pageSize,
                        _limit: query.pageSize,
                    },
                }
            )
            return res.data
        },
        placeholderData: keepPreviousData,
        getNextPageParam: (lastPage, allPages) => {
            console.log({lastPage, allPages})
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        },
        staleTime: 10000,
    })
}
