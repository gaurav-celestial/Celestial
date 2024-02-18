import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
