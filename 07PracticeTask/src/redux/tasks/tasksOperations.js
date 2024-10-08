import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66f291a671c84d805875cd9e.mockapi.io';

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/tasks');
            return response.data;
        }catch(error){ return thunkAPI.rejectWithValue(error.message);}
    }
);

export const addTask = createAsyncThunk(
    'tasks/add',
    async(task, thunkAPI) => {
        try{
            const response = await axios.post('/tasks', task);
            return response.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/delete',
    async(taskId, thunkAPI) => {
        try{
            const response = await axios.delete(`/tasks/${taskId}`);
            return response.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
);