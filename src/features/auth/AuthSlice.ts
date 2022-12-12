import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  value: 0,
  status: "idle",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { login } = AuthSlice.actions;
export const selectUser = (state: any) => state.auth.user;
export default AuthSlice.reducer;
