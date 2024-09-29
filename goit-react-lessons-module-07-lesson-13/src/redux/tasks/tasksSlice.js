import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask } from './tasksOperations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // .addCase(deleteTask.pending, () => {})
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      // .addCase(deleteTask.rejected, () => {}),
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
});

export const tasksReducer = tasksSlice.reducer;
