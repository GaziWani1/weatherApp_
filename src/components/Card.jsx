/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useGetIcon from '../hooks/useGetIcon'
import useGetDay from '../hooks/useGetDay'
import { faTemperature3 } from "@fortawesome/free-solid-svg-icons"
const Card = ({ data }) => {
    return (
        <div className="">
            <div className="text-center  dark:text-neutral-50 text-gray-700 p-2 rounded-md dark:bg-slate-700 bg-neutral-100 shadow-md">
                <h1 className=" text-xl  text-blue-600 font-semibold ">
                    {useGetDay(data.dt_txt.split(' ')[0])}
                </h1>
                <h1 className="">
                    {data.dt_txt.split(' ')[0]}
                </h1>

                <h1 className=" my-1 text-xl ">
                    {data.weather[0].description}
                </h1>
                <FontAwesomeIcon className=" my-1  h-10 w-10" icon={useGetIcon(data.weather[0].main)} />
                <h1 className=" text-xl flex justify-center ">
                    <FontAwesomeIcon className=" text-blue-600 my-1  h-6 w-6" icon={faTemperature3} /> {data.main.temp}°C
                </h1>
            </div>
        </div>
    )
}

export default Card