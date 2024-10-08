import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';}

export const register = createAsyncThunk(
    'authContacts/register',
    async({ name, email, password }, thunkAPI) => {
        try{
            const res = await axios.post('/users/signup', { name, email, password });
            setAuthHeader(res.data.token);
            console.log('Login Response:', res);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message)}
    }
);

export const logIn = createAsyncThunk(
    'authContacts/login',
    async({ email, password }, thunkAPI) => {
        try{
            const res = await axios.post('/users/login', { email, password });
            setAuthHeader(res.data.token);
            console.log('Login Response:', res);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);

export const logOut = createAsyncThunk(
    'authContacts/logout',
    async(_, thunkAPI) => {
        try{
            const res = await axios.post('/users/logout');
            clearAuthHeader();
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);

export const refreshUser = createAsyncThunk(
    'authContacts/refresh',
    async(_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if(persistedToken === null){
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try{
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);