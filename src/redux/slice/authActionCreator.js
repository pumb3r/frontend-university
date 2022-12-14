import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../axios.js';

export const fetchAuth = createAsyncThunk('posts/fetchAuth', async (data) => {
  try {
    const response = await instance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
});

export const fetchAuthMe = createAsyncThunk('posts/fetchAuthMe', async () => {
  try {
    const response = await instance.get('/auth/me');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
