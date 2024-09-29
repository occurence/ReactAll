import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { localeReducer } from './localeSlice';
import { balanceReducer } from './balanceSlice';

const rootReducers = combineReducers({
    locale: localeReducer,
    balance: balanceReducer,
});

export const store = createStore(rootReducers, devToolsEnhancer());