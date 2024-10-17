import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import counterReducer from "./counter/slice";
import threadReducer from "./thread/slice";
import authReducer from "./auth/slice";

const store = configureStore({
   reducer: {
      counter: counterReducer,
      thread: threadReducer,
      auth: authReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
