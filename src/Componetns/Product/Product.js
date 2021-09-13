import React, { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Product = (props) => {
    return (
        <div className='bg-white shadow-xl rounded-lg flex w-full m-4'>
            <a href='#'>
                <div>
                    <img
                        className='object-cover object-center w-32 h-32 rounded-l-lg max-w-full'
                        src={props.imgSrc}
                        alt='JS Course'
                    />
                </div>
            </a>
            <section className='flex px-4 items-center justify-between w-full'>
                <p className='text-gray-700 text-xl font-bold mb-4 cursor-pointer hover:text-indigo-500 transition'>
                    {props.title}
                </p>

                <section className='flex justify-between'>
                    <div className='my-2 flex items-center mr-8'>
                        <span className='text-lg text-green-600 font-bold'>
                            {props.nowPrice}
                        </span>
                    </div>

                    <div className='flex items-center'>
                        <AiOutlineMinusCircle
                            className='w-6 h-6 text-indigo-500 cursor-pointer'
                            onClick={props.decrement}
                        />

                        <p className='mx-4 text-lg text-indigo-500'>
                            {props.quantity}
                        </p>

                        <BsPlusCircle
                            className='w-6 h-6 text-indigo-500 cursor-pointer'
                            onClick={props.increment}
                        />
                    </div>

                    <div className='flex items-center ml-8'>
                        <a
                            className='border-red-500 border-2 text-red-500 px-4 py-2 rounded-lg shadow-lg flex items-center hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer'
                            onClick={props.remove}
                        >
                            <AiOutlineCloseCircle className='text-center w-6 h-6 mr-1' />
                            Remove
                        </a>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Product
