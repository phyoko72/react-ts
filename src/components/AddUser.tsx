import {FormEvent} from "react"
import useAddUser from "../hooks/useAddUser"

export default function AddUser() {
    const addUser = useAddUser()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = 0
        const name = e.currentTarget.uname.value
        const username = e.currentTarget.username.value
        const email = e.currentTarget.email.value
        const data = {id, name, username, email}
        addUser.mutate(data)
        e.currentTarget.reset()
    }

    return (
        <>
            <h1>Add User Form</h1>
            {addUser.error && (
                <div className=" text-red-700 font-semibold">
                    {addUser.error.message}
                </div>
            )}

            {addUser.isPending && (
                <div className=" bg-white/80 text-black/80 font-semibold rounded-md">
                    Adding User
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="uname"
                    id="uname"
                    placeholder="Enter Name"
                />
                <br />
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                />
                <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                />
                <br />
                <button disabled={addUser.isPending}>
                    {addUser.isPending ? "Adding" : "Add User"}
                </button>
            </form>
        </>
    )
}
