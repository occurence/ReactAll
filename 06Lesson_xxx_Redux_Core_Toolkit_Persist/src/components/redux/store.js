import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { balanceReducer } from './bankSlice';
import { localeReducer } from './localeSlice';

export const rootReducer = combineReducers({
    balance: balanceReducer,
    locale: localeReducer,
})
export const store = createStore(rootReducer, devToolsEnhancer());