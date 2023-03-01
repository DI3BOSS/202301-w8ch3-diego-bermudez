import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../types";

const initialUserState = {} as UserStructure;
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loggingUser: (
      currentUseState: UserStructure,
      action: PayloadAction<UserStructure>
    ) => ({ ...action.payload, isLogged: true }),
  },
});

export const { loggingUser: isLoggedActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
