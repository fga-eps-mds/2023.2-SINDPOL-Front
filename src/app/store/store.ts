import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
import authReducer from "./auth/authSlice"
import associateReducer from "./associate/associateSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    associate: associateReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
