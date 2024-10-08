import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from './contactsOperations';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        isError: null,
    },
    // reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, state => {
            state.isLoading = true;
            state.isError = null;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.items = action.payload;//
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;//action.error.message;
            // state.isError = null;
        })

        .addCase(addContact.pending, state => {
            state.isLoading = true;
            state.isError = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            //state.items = action.payload;
            state.items.push(action.payload);//
        })
        .addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;//action.error.message;
            // state.isError = null;
        })

        .addCase(deleteContact.pending, state => {
            state.isLoading = true;
            state.isError = null;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            //state.items = action.payload;
            state.items = state.items.filter(item =>
                item.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;//action.error.message;
            // state.isError = null;
        })

        .addCase(editContact.pending, state => {
            state.isLoading = true;
            state.isError = null;
        })
        .addCase(editContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            //state.items = action.payload;
            const updatedContact = action.payload;
            state.items = state.items.map(item => 
                item.id === updatedContact.id ? updatedContact : item);
        })
        .addCase(editContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;//action.error.message;
            // state.isError = null;
        })
    }
});

export const contactsReducer = contactsSlice.reducer;