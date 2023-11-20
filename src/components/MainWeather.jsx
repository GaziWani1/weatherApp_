import React from 'react'
import Location from './Location'
import { MainCard } from './MainCard'
const MainWeather = () => {
    return (
        <div className=' col-span-12 md:col-span-1 self  flex flex-col'>
            <Location />
            <MainCard />
        </div>
    )
}

export default MainWeather