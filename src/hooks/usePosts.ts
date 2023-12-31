import {useQuery} from "@tanstack/react-query"
import axios from "axios"
interface Post {
    userId: number
    id: number
    title: string
    body: string
}
export default function usePosts(userId: string | undefined) {
    const fetchPosts = async () => {
        const res = await axios.get<Post[]>(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    userId: userId ? userId : null,
                },
            }
        )
        return res.data
    }
    return useQuery({
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
    })
}
