import React from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import { BsPlusCircle } from 'react-icons/bs'

class ProductList extends React.Component {
    render() {
        return (
            <div className='container md:max-w-screen-xl flex-1 mx-auto mt-4 mb-64 sm:mt-8 px-4'>
                <main>
                    <div>
                        {this.state.products.map((productInfo, index) => {
                            return (
                                <Product
                                    title={productInfo.title}
                                    imgSrc={productInfo.imgSrc}
                                    time={productInfo.time}
                                    lastPrice={productInfo.lastPrice}
                                    nowPrice={productInfo.nowPrice}
                                    desc={productInfo.desc}
                                    quantity={productInfo.quantity}
                                    key={index}
                                    remove={() =>
                                        this.props.onRemove(productInfo.id)
                                    }
                                    increment={() =>
                                        this.props.onIncrement(productInfo.id)
                                    }
                                    decrement={() =>
                                        this.props.onDecrement(productInfo.id)
                                    }
                                    onChange={() =>
                                        this.props.onChangeHandler(
                                            productInfo.id
                                        )
                                    }
                                />
                            )
                        })}
                    </div>
                </main>
            </div>
        )
    }
}

export default ProductList
