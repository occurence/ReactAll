import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from './tasksOperations';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        isError: null,
    },
    // reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = null;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(addTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = null;
                state.items.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(deleteTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = null;
                state.items = state.items.filter(item =>
                    item.id !== action.payload.id);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
            })
    }
});

export const tasksReducer = tasksSlice.reducer;