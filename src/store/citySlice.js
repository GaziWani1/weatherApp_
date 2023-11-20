import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityData: null
}

const weatherSlice = createSlice({
    name: 'cityData',
    initialState,
    reducers: {
        cityData: (state, action) => {
            state.cityData = action.payload;
        }
    }
});

export const { cityData } = weatherSlice.actions;

export default weatherSlice.reducer;