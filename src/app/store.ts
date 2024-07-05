import { configureStore } from "@reduxjs/toolkit"
import { userDetail } from "../features/useDetailSlice"

export const store = configureStore({
    reducer: {
        app: userDetail.reducer,
    },
})