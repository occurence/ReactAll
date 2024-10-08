import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../redux/auth/authSlice';
import { tasksReducer } from '../redux/tasks/tasksSlice';

const authPersistConfig = {
    key: 'authTasks',
    storage,
    whitelist: ['token'],//, 'isLoggedIn', 'user'
}
export const store = configureStore({
    reducer:{
        authTasks: persistReducer(authPersistConfig, authReducer),
        tasks: tasksReducer,
    },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);