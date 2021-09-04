import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavigationMenu = () => {
    return (
        <nav className='flex justify-between w-full h-20 shadow-lg h-30'>
            <div className='flex md:hidden items-center justify-ceter'>
                <FontAwesomeIcon
                    icon={faBars}
                    className='text-indigo-600 text-md'
                />
            </div>
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
