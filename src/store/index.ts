import {configureStore} from '@reduxjs/toolkit'
import coworkingsReducer from './reducers/coworkings'

export const store = configureStore({
  reducer: {
    coworkingsSlice: coworkingsReducer,
  },
})


// @ts-ignore
window.store = store


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch