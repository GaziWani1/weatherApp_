/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

const Location = () => {
    const data = useSelector(state => state.cityData.cityData)
    return (
        <div className=' py-3 w-full  '>
            {!data ? <h2 className=' text-gray-700 dark:text-neutral-50'>
                Loading
            </h2> : <div className=' py-3 p-2 rounded-md shadow-md w-full flex justify-between bg-neutral-100 dark:bg-slate-700'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className=" dark:text-neutral-50 text-blue-700 w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div className=' dark:text-neutral-50 text-gray-700 flex gap-2 self-center'>
                    <p>{data.name},{data.country} |</p>
                    <p className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        {data.population}
                    </p>

                </div>
            </div>}
        </div>
    )
}

export default Location