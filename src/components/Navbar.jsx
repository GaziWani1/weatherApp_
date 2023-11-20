/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Search from "./Search"
import ThemeSwitcher from "./ThemeSwitcher"

const Navbar = () => {



    return (
        <div className='  p-3 shadow-sm rounded-md dark:bg-slate-700 bg-neutral-100 flex justify-between'>
            <h1 className=' self-center md:text-xl text-blue-500 dark:text-neutral-50'>
                Weather
            </h1>
            <div className=' flex gap-2'>
                <ThemeSwitcher />
                <Search />
            </div>
        </div>
    )
}

export default Navbar