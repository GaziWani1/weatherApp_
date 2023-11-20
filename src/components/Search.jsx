import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { storeMainData } from "../store/mainWeatherSlice";
import { storeUpcData } from "../store/pridictWeatherSlice"
import { cityData } from "../store/citySlice";
import axios from 'axios';

const Search = () => {

    const [cityname, setCityname] = useState('')
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const dispatch = useDispatch();

    // @onClick function
    const handleCityName = () => {
        const fetchData = async () => {
            setloading(true)
            try {
                const url = `https://api.openweathermap.org/data/2.5/forecast`;
                const params = {
                    q: cityname,
                    appid: API_KEY,
                    units: 'metric',
                    cnt: 40,
                };
                const response = await axios.get(url, { params });
                const data = await response.data;
                setloading(false)
                dispatch(cityData(data.city))
                dispatch(storeMainData(data.list[0]));
                dispatch(storeUpcData(data.list))
                setCityname('')
            } catch (error) {
                seterror(true);
                setloading(false)
            }
        };

        if (cityname) {
            fetchData();
        }
    }
    return (
        loading ? <h1 className=' dark:text-neutral-50 text-gray-700 w-full'> loading </h1> :
            <>{error ? <h1 className=' h-full p-1 w-20 rounded-sm text-xs bg-red-300 text-red-900'> Invalied city name </h1> : ''}
                <div className=' md:py-1 px-1 md:px-2 border-2 dark:border-neutral-50 border-gray-700 rounded-full flex gap-2 justify-center align-middle hover:border-blue-400 '>
                    <input
                        type='text'
                        placeholder='city name'
                        onChange={(e) => setCityname(e.target.value)}
                        value={cityname}
                        className=' p-1 bg-transparent outline-none dark:text-neutral-50 text-gray-700  ' />

                    <button onClick={handleCityName} > <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor"
                        className=" dark:text-neutral-50 text-gray-700 w-5 h-5 self-center">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </div>
            </>
    )
}

export default Search