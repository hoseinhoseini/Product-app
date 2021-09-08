import React from 'react'
import { FaBeer } from 'react-icons/fa'

const NavigationMenu = () => {
    return (
        <nav className='flex justify-between w-full h-20 shadow-lg h-30'>
            <ul className='justify-evenly h-full w-full items-center pr-6 hidden md:flex'>
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
            </ul>
        </nav>
    )
}
export default NavigationMenu
