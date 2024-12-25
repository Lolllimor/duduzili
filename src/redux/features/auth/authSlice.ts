import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

interface AuthState {
  token: string | null;
  email: null;
  name: string | null;
}

const initialState: AuthState = {
  email: null,
  token: "",
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userEmail: (state, action: PayloadAction<{ email: null }>) => {
      state.email = action.payload.email;
      setCookie("user", action.payload.email);
    },

    userToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      setCookie("token", action.payload.token);
    },
  },
});

export const { userEmail, userToken } = authSlice.actions;
export default authSlice.reducer;
