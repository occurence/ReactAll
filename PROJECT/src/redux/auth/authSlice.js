import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, persistAuth } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user: { name: null, email: null },
    user: { name: null, email: null, currency: null, avatarUrl: null, 
            categories: { incomes: [], expenses: [] },
            transactionsTotal: { incomes: 0, expenses: 0 }
     },
    accessToken: null,
    // accessToken: persistAuth.accessToken,
    refreshToken: null,
    sid: null,
    isLoggedIn: false,
    // isLoggedIn: persistAuth.accessToken ? true : false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        console.log('Register successful:payload', action.payload);
        console.log('Register successful:payload.user', action.payload.user);
        console.log('Register successful:payload.accessToken', action.payload.accessToken);
        console.log('Register successful:payload.refreshToken', action.payload.refreshToken);
        console.log('Register successful:payload.sid', action.payload.sid);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        console.log('Login successful:payload', action.payload);
        console.log('Login successful:payload.user', action.payload.user);
        console.log('Login successful:payload.accessToken', action.payload.accessToken);
        console.log('Login successful:payload.refreshToken', action.payload.refreshToken);
        console.log('Login successful:payload.sid', action.payload.sid);
      })
      .addCase(logOut.fulfilled, state => {
        // state.user = { name: null, email: null };
        state.user = { name: null, email: null, currency: null, avatarUrl: null, 
          categories: { incomes: [], expenses: [] },
          transactionsTotal: { incomes: 0, expenses: 0 }};
        state.accessToken = null;
        // state.refreshToken = null;
        // state.sid = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        console.log('Refresh successful:payload', action.payload);
        console.log('Refresh successful:payload.user', action.payload.user);
        console.log('Refresh successful:payload.accessToken', action.payload.accessToken);
        console.log('Refresh successful:payload.refreshToken', action.payload.refreshToken);
        console.log('Refresh successful:payload.sid', action.payload.sid);
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

// console.log(persistAuth);
export const authReducer = authSlice.reducer;