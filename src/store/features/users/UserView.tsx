import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../store"
import {addUsers, fetchUsers} from "./userSlice"

export default function UserView() {
    const {loading, error, users} = useAppSelector((state) => state.userReducer)
    const dispatch = useAppDispatch()
    const addingUser = () => {
        dispatch(
            addUsers({
                name: "David",
                email: "david@gmail.com",
            })
        )
    }
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <>
            <h1>Users</h1>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}/ {user.email}{" "}
                    </li>
                ))}
            </ol>
            <button onClick={addingUser}>Add User</button>
        </>
    )
}
