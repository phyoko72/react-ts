import {PayloadAction, createSlice} from "@reduxjs/toolkit"

interface Cake {
    cake: number
}

const initialState: Cake = {
    cake: 0,
}

const cakeSlice = createSlice({
    name: "Cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.cake--
        },
        restock: (state, actions: PayloadAction<number>) => {
            state.cake += actions.payload
        },
    },
})

export const {actions: cakeActions, reducer: cakeReducer} = cakeSlice
