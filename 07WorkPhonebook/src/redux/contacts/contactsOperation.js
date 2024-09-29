import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66f291a671c84d805875cd9e.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get('/contacts');
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {//contact //{ name, number }
        try{
            const response = await axios.post('/contacts', { name, number });//contact //{ name, number }
            return response.data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try{
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)