import React, { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Product = (props) => {
    return (
        <div className='bg-white shadow-xl rounded-lg flex flex-col'>
            <a href='#'>
                <div className='w-full h-64 mb-4'>
                    <img
                        className='object-cover object-center w-full h-64 rounded-t-lg max-w-full'
                        src={props.imgSrc}
                        alt='JS Course'
                    />
                </div>
            </a>
            <section className='flex flex-col px-4'>
                <p className='text-gray-700 text-lg font-bold mb-4'>
                    {props.title}
                </p>

                <div className='flex items-center'>
                    <BiTimeFive className='mr-1 text-indigo-600 text-lg' />
                    <p className='text-gray-500'>{props.time}</p>
                </div>

                <div className='my-2'>
                    <span className='text-red-600 text-lg mr-2 font-bold'>
                        <del>{props.lastPrice}</del>
                    </span>
                    <span className='text-lg text-green-600 font-bold'>
                        {props.nowPrice}
                    </span>
                </div>
                <hr />
                <p className='text-gray-500 mt-2'>{props.desc}</p>
                <div className='flex items-center'>
                    <a
                        href='#'
                        className='border-indigo-500 border-2 px-4 py-2 text-indigo-500 rounded-lg text-center shadow-lg my-4 mr-4 flex items-center hover:bg-indigo-500 hover:text-white transition duration-200'
                    >
                        <HiOutlineShoppingCart className='w-6 h-6 mr-1' />
                        Buy Course
                    </a>
                    <a
                        href='#'
                        className='border-red-500 border-2 text-red-500 px-4 py-2 rounded-lg shadow-lg my-4 flex items-center hover:bg-red-500 hover:text-white transition duration-200'
                    >
                        <AiOutlineCloseCircle className='text-center w-6 h-6 mr-1' />
                        Remove
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Product
