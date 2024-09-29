import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//     filterValue: '',
// }
// const filterInitialState = [
//     {filterValue: ''},
// ]
const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterValue: '',
    },
    reducers: {
        setFilter: {
            reducer: (state, action) => {
                // state.filterInitialState = action.payload;
                state.filterValue = action.payload;
            },
            prepare: filterValue => {
                return {
                    payload: filterValue,
                };
            },
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;