import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk("user/fetch", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
    })
    const data = await res.json()
    return data
})

export const addUsers = createAsyncThunk(
    "user/add",
    async (user: {name: string; email: string}) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        const data = await res.json()
        return data
    }
)

interface User {
    id: number
    name: string
    email: string
}

interface InitialState {
    loading: boolean
    users: User[]
    error?: string
}

const initialState: InitialState = {
    loading: false,
    users: [],
    error: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        }),
            builder.addCase(addUsers.pending, (state) => {
                state.loading = true
            }),
            builder.addCase(addUsers.fulfilled, (state, action) => {
                state.loading = false
                const newUser = {
                    ...action.payload,
                    id: Math.floor(Math.random() * 500),
                }
                state.users.push(newUser)
                state.error = ""
            }),
            builder.addCase(addUsers.rejected, (state, action) => {
                state.loading = false
                state.users = []
                state.error = action.error.message
            })
    },
})
export default userSlice
export const {actions: userActions, reducer: userReducer} = userSlice
