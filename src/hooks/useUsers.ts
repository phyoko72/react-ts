import {useQuery} from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import {User} from "../services/userService"

const apiClient = new APIClient<User>("users")

export default function useUsers(userId: string) {
    // const fetchUsers = async () => {
    //     const res = await axios.get<User[] | User>(
    //         "https://jsonplaceholder.typicode.com/users/" + userId
    //     )
    //     return res.data
    // }
    return useQuery<User[] | User, Error>({
        queryKey: userId ? ["users", userId] : ["users"],
        queryFn: apiClient.getAll,
    })
}
