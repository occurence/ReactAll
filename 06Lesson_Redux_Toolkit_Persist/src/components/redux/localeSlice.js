import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const localeInitialState = {
    lang: "uk",
}

// export const changeLang = createAction('locale/lang');

// export const localeReducer = createReducer(localeInitialState, builder =>
//     builder
//     .addCase('locale/lang', (state, action) => {
//         state.lang = action.payload;
//     })
// );

export const localeSlice = createSlice({
    name: 'locale',
    initialState: localeInitialState,
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const {changeLang} = localeSlice.actions;
export const localeReducer = localeSlice.reducer;