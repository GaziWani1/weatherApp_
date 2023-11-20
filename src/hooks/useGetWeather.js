/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { storeMainData } from "../store/mainWeatherSlice";
import { storeUpcData } from "../store/pridictWeatherSlice"
import { cityData } from "../store/citySlice";

const useGetWeather = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const dispatch = useDispatch();

    //@ useCallback in React memoizes a function, ensuring it's only recreated if its
    // dependencies change, optimizing performance by preventing unnecessary renders.
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLat(position.coords.latitude);
                        setLon(position.coords.longitude);
                    },
                    (error) => {
                        setError('turn your location on or search by city name');
                        // alert('TURN ON YOUR LOCATION');
                        setLoading(false);
                    }
                );
            } else {
                setError('Geolocation is not supported by your browser');
                setLoading(false);
            }

            if (lon !== null && lat !== null) {
                // console.log(lon, lat)
                const url = `https://api.openweathermap.org/data/2.5/forecast`;
                const params = {
                    lat,
                    lon,
                    appid: API_KEY,
                    units: 'metric',
                    cnt: 40,
                };
                const response = await axios.get(url, { params });
                const data = response.data;
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
    }, [dispatch, API_KEY, lat, lon]);

    // @useEffect 
    useEffect(() => {
        getData();
    }, [getData]);

    return { loading, error };
};

export default useGetWeather;
