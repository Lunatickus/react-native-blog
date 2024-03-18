import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDataFromFirestore,
  updateDataInFirestore,
  writeDataToFirestore,
} from "../../services/posts";

export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await getDataFromFirestore();
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkApi) => {
    try {
      const response = await writeDataToFirestore(post);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ id, comment }, thunkApi) => {
    try {
      const response = await updateDataInFirestore(id, comment);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
