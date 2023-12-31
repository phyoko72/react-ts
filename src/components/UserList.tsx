import {useState} from "react"
import useUsers, {User} from "../hooks/useUsers"

export default function UserList() {
    const [userId, setuserId] = useState<string>("")
    const {data: users, error, isLoading} = useUsers(userId)

    // if (isLoading) return <h1>Loading...</h1>
    // if (error) return <h1>{error.message}</h1>

    return (
        <div className=" my-6 *:my-3">
            <h1 className=" underline underline-offset-4 ">UserList</h1>

            <select
                name="userId"
                onChange={(e) => setuserId(e.target.value)}
                value={userId}
            >
                <option value="">Select User</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>

            {isLoading && <h1>Loading...</h1>}

            {error && <h1>{(error as Error).message}</h1>}

            {!isLoading && !error && (
                <ol>
                    {users && Array.isArray(users) ? (
                        users.map((user) => (
                            <li key={user.id}>
                                {user.name}/{user.email}
                            </li>
                        ))
                    ) : (
                        <p>Name: {(users as User).name}</p>
                    )}
                </ol>
            )}
        </div>
    )
}
