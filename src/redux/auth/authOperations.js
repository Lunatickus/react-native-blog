import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  logOutDb,
  loginDB,
  registerDB,
  updateUserProfile,
} from "../../services/authentication";

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, email, password, avatar }, { rejectWithValue }) => {
    try {
      await registerDB({ email, password });
      await updateUserProfile({ displayName: login,  photoURL: avatar });
      const resp = await getCurrentUser();
      return {
        login: resp.displayName,
        email: resp.email,
        avatar: resp.photoURL,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await logOutDb();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await loginDB({ email, password });
      const resp = await getCurrentUser();
      return {
        login: resp.displayName,
        email: resp.email,
        avatar: resp.photoURL,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "auth/changeAvatar",
  async (credentials, { rejectWithValue }) => {
    try {
      await updateUserProfile({ photoURL: credentials });
      const resp = await getCurrentUser();
      return resp ? resp.photoURL : credentials;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.message);
    }
  }
);
