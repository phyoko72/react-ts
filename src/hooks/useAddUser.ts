import {useMutation, useQueryClient} from "@tanstack/react-query"
import {CACHE_KEY_USERS} from "../lib/constants"
import userService, {User} from "../services/userService"

export default function useAddUser() {
    const queryClient = useQueryClient()
    return useMutation({
        // mutationFn: (user: User) => apiClient.post(user),
        mutationFn: userService.post,
        onMutate: (newUser) => {
            const previousUsers =
                queryClient.getQueryData<User[]>(CACHE_KEY_USERS)

            queryClient.setQueryData<User[]>(
                CACHE_KEY_USERS,
                (allUsers = []) => {
                    return [newUser, ...allUsers]
                }
            )
            return {previousUsers}
        },
        onSuccess: (dataFromServer, dataFromClient) => {
            console.log({dataFromServer, dataFromClient})

            queryClient.setQueryData<User[]>(CACHE_KEY_USERS, (allUsers) => {
                return allUsers?.map((user) =>
                    user === dataFromClient ? dataFromServer : user
                )
            })
        },

        onError: (error, newUser, context) => {
            console.log("onError: ", error.message)

            if (!context) return

            queryClient.setQueryData(CACHE_KEY_USERS, context)
        },
    })
}
