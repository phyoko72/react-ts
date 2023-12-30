import {configureStore} from "@reduxjs/toolkit"
import {cakeReducer} from "./features/cake/cakeSlice"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {userReducer} from "./features/users/userSlice"

export const store = configureStore({
    reducer: {
        cakeReducer,
        userReducer,
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector

// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
