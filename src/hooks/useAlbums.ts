import {useInfiniteQuery, useQuery} from "@tanstack/react-query"
import axios from "axios"

export interface Album {
    userId: number
    title: string
    id: number
}

interface PageQuery {
    pageSize: number
}

export default function useAlbums(query: PageQuery) {
    return useInfiniteQuery({
        queryKey: ["albums", query],
        initialPageParam: 1,
        queryFn: async ({pageParam}) => {
            const res = await axios.get<Album[]>(
                "https://jsonplaceholder.typicode.com/albums",
                {
                    params: {
                        _start: (pageParam - 1) * query.pageSize,
                        _limit: query.pageSize,
                    },
                }
            )
            return res.data
        },
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        },
    })
}
