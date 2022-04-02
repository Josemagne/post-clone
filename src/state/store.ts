import { configureStore } from "@reduxjs/toolkit"
import { Store } from "redux"
import reduxThunk from "redux-thunk"
import postReducer from "./features/postSlice"

export const store: Store = configureStore({
    reducer: {
        books: postReducer
    },
    middleware: [reduxThunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;