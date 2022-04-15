import { configureStore } from "@reduxjs/toolkit";
import initialReducer from "./initial/initial";
import menuReducer from "./menu/menu";

export const store = configureStore({
  reducer: {
    initial: initialReducer,
    menuReducer: menuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
