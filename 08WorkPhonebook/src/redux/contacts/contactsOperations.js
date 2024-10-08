import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async(_, thunkAPI) => {
        try{
            const res = await axios.get('/contacts');
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async({ name, number }, thunkAPI) => {
        try{
            const res = await axios.post('/contacts', { name, number });
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async({ id }, thunkAPI) => {
        try{
            const res = await axios.delete(`/contacts/${ id }`);
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const editContact = createAsyncThunk(
    'contacts/editContact',
    async({ id, name, number }, thunkAPI) => {
        try{
            const res = await axios.patch(`/contacts/${id}`, { id, name, number });
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)