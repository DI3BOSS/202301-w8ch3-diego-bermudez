import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { carReducer } from "./features/carSlice/carSlice";
import { userReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: { user: userReducer, car: carReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
