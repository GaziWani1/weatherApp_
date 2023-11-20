import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from "./mainWeatherSlice";
import upcomWeatherSlice from './pridictWeatherSlice'
import cityData from './citySlice';
import switchTheme from './themeSlice';

const store = configureStore({
    reducer: {
        mainWeather: weatherSlice,
        upcommingWeather: upcomWeatherSlice,
        cityData: cityData,
        switchTheme: switchTheme
    }
});

export default store;