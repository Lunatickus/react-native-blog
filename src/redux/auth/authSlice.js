import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { LogOut, changeAvatar, logIn, register } from "./authOperations";

const initialState = {
  user: { login: null, email: null, avatar: null },
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoading = false;
        state.error = null;
      })

      .addCase(LogOut.fulfilled, (state, action) => {
        state.user = { login: null, email: null, avatar: null };
        state.isLoading = false;
        state.error = null;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoading = false;
        state.error = null;
      })

      .addCase(changeAvatar.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          LogOut.pending,
          logIn.pending,
          changeAvatar.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          LogOut.rejected,
          logIn.rejected,
          changeAvatar.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
