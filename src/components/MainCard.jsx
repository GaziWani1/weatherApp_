/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGetIcon from '../hooks/useGetIcon'
import useGetDay from '../hooks/useGetDay'
import { useSelector } from 'react-redux'
import { faDroplet, faTachometerAlt, faCoffee, faWind } from '@fortawesome/free-solid-svg-icons';

export const MainCard = () => {
    const data = useSelector(state => state.mainWeather.weatherData)

    return (
        <div className=' py-3  w-full dark:text-neutral-100 text-gray-700 '>
            {!data ? <h2 className=' text-gray-700 dark:text-neutral-50'>
                Loading
            </h2> : <div className=' py-8 p-2 rounded-md shadow-md w-full flex flex-col gap-4 bg-neutral-100 dark:bg-slate-700'>
                <h1 className=' mx-auto text-3xl  '>
                    {data.weather[0].description}
                </h1>
                <FontAwesomeIcon className=' mx-auto text-blue-600 h-20 w-20' icon={useGetIcon(data.weather[0].main)} />
                <h1 className=' mx-auto text-2xl  '>
                    {data.main.temp}°C | {data.weather[0].main}
                </h1>
                <h1 className=' mx-auto text-xl'>
                    {useGetDay(data.dt_txt.split(' ')[0])}|{data.dt_txt.split(' ')[0]}
                </h1>
                <div className=' w-full md:mx-auto grid grid-cols-2 grid-rows-2 gap-2 md:gap-5 place-items-center '>
                    <div className=' dark:bg-slate-600 bg-neutral-50 p-2 text-center shadow-lg w-36  rounded-md '>
                        <h1 className='dark:text-neutral-50 text-gray-700 '>
                            <FontAwesomeIcon className='  h-6 w-6 ' icon={faDroplet} /> Humidity
                        </h1>
                        <p className='  md:text-xl'>
                            {data.main.humidity}°C
                        </p>
                    </div>
                    <div className=' dark:bg-slate-600 bg-neutral-50 p-2 text-center shadow-lg w-36 rounded-md '>
                        <h1 className='  '>
                            <FontAwesomeIcon className='  h-6 w-6 ' icon={faTachometerAlt} /> Pressure
                        </h1>
                        <p className='  text-xl'>
                            {data.main.pressure}Pa
                        </p>
                    </div>
                    <div className=' dark:bg-slate-600 bg-neutral-50 p-2 text-center shadow-lg w-36 rounded-md '>
                        <h1 className='  '>
                            <FontAwesomeIcon className='  h-6 w-6 ' icon={faCoffee} /> Feels Like
                        </h1>
                        <p className='  text-xl'>
                            {data.main.feels_like}°C
                        </p>
                    </div>
                    <div className=' dark:bg-slate-600 bg-neutral-50 p-2 text-center shadow-lg w-36 rounded-md '>
                        <h1 className=' '>
                            <FontAwesomeIcon className='h-6 w-6 ' icon={faWind} /> Wind
                        </h1>
                        <p className='  text-xl'>
                            {data.wind.speed}km/h
                        </p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
