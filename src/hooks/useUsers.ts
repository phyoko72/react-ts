import {useQuery} from "@tanstack/react-query"
import userService, {User} from "../services/userService"

export default function useUsers(userId: string) {
    // const fetchUsers = async () => {
    //     const res = await axios.get<User[] | User>(
    //         "https://jsonplaceholder.typicode.com/users/" + userId
    //     )
    //     return res.data
    // }
    return useQuery<User[] | User, Error>({
        queryKey: userId ? ["users", userId] : ["users"],
        queryFn: userService.getAll,
    })
}
