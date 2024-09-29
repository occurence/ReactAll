import { configureStore } from '@reduxjs/toolkit';
import { localeReducer } from './localeSlice';
import { balanceReducer } from './balanceSlice';

export const store = configureStore({
    reducer: {
        locale: localeReducer,
        balance: balanceReducer,
    }
});