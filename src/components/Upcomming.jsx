/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useGetUpcomming from '../hooks/useGetUpcomming'
import Card from './Card'

const Upcomming = () => {
    const data = useSelector(state => state.upcommingWeather.upcommingWeather);
    const [upcData, setUpcData] = useState([])

    useEffect(() => {
        if (data !== null)
            setUpcData(useGetUpcomming(data))
    }, [data])

    // console.log(upcData)

    return (
        <div className=' px-2 py-2 col-span-12 md:col-span-10 '>
            <h1 className=' dark:text-neutral-50 text-blue-500 text-2xl' >
                |Upcomming Weather
            </h1>

            {
                !data ? <h2 className=' dark:text-neutral-50 text-gray-700'>Loading...</h2> :
                    <div className=' mt-3 grid gird-col-6 md:grid-cols-3 grid-rows-3 gap-5'>
                        {upcData.map((e) => {
                            return <Card key={e.dt_txt} data={e} />
                        })}
                    </div>
            }
        </div>
    )
}

export default Upcomming