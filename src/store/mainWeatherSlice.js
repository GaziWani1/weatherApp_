import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData: null
}

const weatherSlice = createSlice({
    name: 'mainWeather',
    initialState,
    reducers: {
        storeMainData: (state, action) => {
            state.weatherData = action.payload;
        }
    }
});

export const { storeMainData } = weatherSlice.actions;

export default weatherSlice.reducer;