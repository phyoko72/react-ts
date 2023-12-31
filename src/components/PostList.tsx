import {useState} from "react"
import usePosts from "../hooks/usePosts"

export default function PostList() {
    const [userId, setUserId] = useState("")
    const {data: posts, error, isLoading} = usePosts(userId)
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.message}</h1>
    return (
        <>
            <h1>Post List</h1>
            <select
                name="user"
                onChange={(e) => setUserId(e.target.value)}
                value={userId}
            >
                <option value="">Choose User</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>
            <ul>
                {posts?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}
