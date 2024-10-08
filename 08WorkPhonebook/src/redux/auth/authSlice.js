import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from './authOperations';

export const authSlice = createSlice({
    name: 'authContacts',
    initialState: {
        user: {name: null, email: null},
        token: localStorage.getItem('token') || null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    // reducers: {}, 
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(register.rejected, state => {
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
    
            .addCase(logIn.pending, state => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                localStorage.setItem('token', action.payload.token);
                console.log('Login successful:', action.payload);
                console.log('Login successful:', action.payload.user);
                console.log('Login successful:', action.payload.token);
            })
            .addCase(logIn.rejected, state => {
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
    
            .addCase(logOut.pending, state => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(logOut.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
                localStorage.removeItem('token');
            })
            .addCase(logOut.rejected, state => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
    
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                localStorage.getItem('token');
            })
            .addCase(refreshUser.rejected, state => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
    }
});

export const authReducer = authSlice.reducer;