import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://task-manager-api.goit.global';
//'https://connections-api.goit.global/docs';
//'https://virtserver.swaggerhub.com/agentVVV/Test/1.0.0';
//'https://66f291a671c84d805875cd9e.mockapi.io';
//https://virtserver.swaggerhub.com/agentVVV/Test/1.0.0

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';}

export const register = createAsyncThunk(
    'authTasks/register',
    async({ name, email, password }, thunkAPI) => {
        try{
            const res = await axios.post('/users/signup', { name, email, password });
            setAuthHeader(res.data.token);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message)}
    }
);

export const logIn = createAsyncThunk(
    'authTasks/login',
    async({ email, password }, thunkAPI) => {
        try{
            const res = await axios.post('/users/login', { email, password });
            setAuthHeader(res.data.token);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);

export const logOut = createAsyncThunk(
    'authTasks/logout',
    async(_, thunkAPI) => {
        try{
            // const res = await axios.post('/users/logout');
            await axios.post('/users/logout');
            clearAuthHeader();
            // return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);

export const refreshUser = createAsyncThunk(
    'authTasks/refresh',
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
)