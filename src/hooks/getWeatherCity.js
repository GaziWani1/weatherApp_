/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { storeMainData } from "../store/mainWeatherSlice";
import { storeUpcData } from "../store/pridictWeatherSlice"
import { cityData } from "../store/citySlice";

const getWeatherCity = (cityname) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const dispatch = useDispatch();

    //@ useCallback in React memoizes a function, ensuring it's only recreated if its
    // dependencies change, optimizing performance by preventing unnecessary renders.
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            if (city) {
                console.log(cityname)
                const url = `https://api.openweathermap.org/data/2.5/forecast`;
                const params = {
                    q: cityname,
                    appid: API_KEY,
                    units: 'metric',
                    cnt: 40,
                };
                const response = await axios.get(url, { params });
                const data = response.data;
                console.log(data)
                dispatch(cityData(data.city))
                dispatch(storeMainData(data.list[0]));
                dispatch(storeUpcData(data.list))
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
            setError('something went wrong');
            setLoading(false);
        }
    }, [dispatch, API_KEY, cityname]);

    // @useEffect 
    useEffect(() => {
        getData();
    }, [getData]);

    return { loading, error };
}

export default getWeatherCity