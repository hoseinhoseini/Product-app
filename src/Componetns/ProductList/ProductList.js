import React from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import { BsPlusCircle } from 'react-icons/bs'

const ProductList = () => {
    const [products, setProducts] = useState([
        {
            title: 'JavaScript Course',
            imgSrc: 'https://fronthooks.ir/images/javascript.svg',
            time: '20 hours',
            lastPrice: '299$',
            nowPrice: '199$',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Quasi magnam nobis hic eum porro ipsam maiores labore',
            id: '1',
        },
        {
            title: 'Git & Github Course',
            imgSrc: 'https://fronthooks.ir/images/git.svg',
            time: '3 hours',
            lastPrice: '199$',
            nowPrice: '99$',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Quasi magnam nobis hic eum porro ipsam maiores labore',
            id: '2',
        },
        {
            title: 'React & Redux Course',
            imgSrc: 'https://fronthooks.ir/images/React.svg',
            time: '29 hours',
            lastPrice: '599$',
            nowPrice: '499$',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Quasi magnam nobis hic eum porro ipsam maiores labore',
            id: '3',
        },
        {
            title: 'Flex & Grid Course',
            imgSrc: 'https://fronthooks.ir/images/flex-grid.svg',
            time: '2 hours',
            lastPrice: '99$',
            nowPrice: '59$',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Quasi magnam nobis hic eum porro ipsam maiores labore',
            id: '4',
        },
        {
            title: 'VS Code Advance Course',
            imgSrc: 'https://fronthooks.ir/images/vs-code.svg',
            time: '5 hours',
            lastPrice: '199$',
            nowPrice: '99$',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Quasi magnam nobis hic eum porro ipsam maiores labore',
            id: '5',
        },
    ])

    return (
        <div className='container md:max-w-screen-xl flex-1 mx-auto mt-4 mb-4 sm:mt-8 px-4'>
            <main>
                <div className='grid grid-cols-1 gap-11 sm:grid-cols-2 md:grid-cols-3'>
                    {products.map((productInfo) => {
                        return (
                            <Product
                                title={productInfo.title}
                                imgSrc={productInfo.imgSrc}
                                time={productInfo.time}
                                lastPrice={productInfo.lastPrice}
                                nowPrice={productInfo.nowPrice}
                                desc={productInfo.desc}
                                id={productInfo.id}
                            />
                        )
                    })}
                    <div className='flex items-center justify-center'>
                        <BsPlusCircle className='text-8xl w-50 h-50 cursor-pointer hover:text-indigo-700 transition duration-200' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductList
