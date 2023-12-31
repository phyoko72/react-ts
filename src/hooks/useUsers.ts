import {useQuery} from "@tanstack/react-query"
import axios from "axios"
export interface User {
    id: number
    name: string
    username: string
    email: string
}
export default function useUsers(userId: string) {
    const fetchUsers = async () => {
        const res = await axios.get<User[] | User>(
            "https://jsonplaceholder.typicode.com/users/" + userId
        )
        return res.data
    }
    return useQuery<User[] | User, Error>({
        queryKey: userId ? ["users", userId] : ["users"],
        queryFn: fetchUsers,
    })
}
