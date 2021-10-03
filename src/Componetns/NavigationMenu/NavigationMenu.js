import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'

const NavigationMenu = () => {
    return (
        <nav className='flex justify-between w-full h-20 shadow-lg h-30'>
            <ul className='justify-evenly h-full w-full items-center pr-6 hidden md:flex sm:flex'>
                <span></span>
                <li>
                    <a
                        href='#'
                        className='px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white duration-300 transition'
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className='px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white duration-300 transition'
                    >
                        Products
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className='px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white duration-300 transition'
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className='px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white duration-300 transition'
                    >
                        About us
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        className='px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white duration-300 transition'
                    >
                        Contact us
                    </a>
                </li>
                <li>Your Product : {}</li>
            </ul>
        </nav>
    )
}
export default NavigationMenu
