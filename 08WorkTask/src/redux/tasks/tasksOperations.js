import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async(_, thunkAPI) => {
        try{
            const res = await axios.get('/tasks');
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async({ text }, thunkAPI) => {
        try{
            const res = await axios.post('/tasks', { text });
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async( id , thunkAPI) => {
        try{
            const res = await axios.delete(`/tasks/${ id }`);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const editTask = createAsyncThunk(
    'tasks/editTask',
    async({ id, text }, thunkAPI) => {
        try{
            const res = await axios.put(`/tasks/${id}`, { id, text });
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)