import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Please create your own personal backend for development with the UI service mockapi.io
// REFERENCE: https://mockapi.io/
// axios.defaults.baseURL = 'https://65e6c47b53d564627a8ceadd.mockapi.io';
// axios.defaults.baseURL = 'https://65e70f6a53d564627a8dc7e8.mockapi.io';
axios.defaults.baseURL = 'https://66f291a671c84d805875cd9e.mockapi.io';

// read
export const fetchTasks = createAsyncThunk(
  'tasks/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTasks = createAsyncThunk(
  'tasks/add',
  async (task, thunkAPI) => {
    try{
      const response = await axios.post('/tasks', task);
      return response.data;
    }
    catch(error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// delete
export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// RD
