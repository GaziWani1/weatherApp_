import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    upcommingWeather: null
}

const pridWeatherSlice = createSlice({
    name: 'upcommingweather',
    initialState,
    reducers: {
        storeUpcData: (state, action) => {
            state.upcommingWeather = action.payload;
        }
    }
});

export const { storeUpcData } = pridWeatherSlice.actions;

export default pridWeatherSlice.reducer;