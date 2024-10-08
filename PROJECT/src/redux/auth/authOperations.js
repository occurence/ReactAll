import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api';

export const persistAuth = JSON.parse(localStorage.getItem('persist:Auth'));

const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;}

const setRefreshHeader = refreshToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';}

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', { name, email, password });
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', { email, password });
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
  try {
    await axios.get('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // setAuthHeader(persistedToken);
      // const res = await axios.post('/auth/refresh');
      // return res.data;
      // setRefreshHeader(persistedToken);
      // const res = await axios.post('/auth/refresh', state.auth.sid);
      // setAuthHeader(res.data.accessToken);
      // setRefreshHeader(res.data.refreshToken);
      // setRefreshHeader(state.auth.refreshToken);
      // setRefreshHeader(state.auth.refreshToken);
      // const res = await axios.post('/auth/refresh', sid);
      // return res.data;

      setRefreshHeader(state.auth.refreshToken);
      const res = await axios.post('/auth/refresh', localStorage.getItem('sid'));//localStorage.getItem('token')//state.auth.sid
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);