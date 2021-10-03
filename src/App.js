import React from 'react'
import ProductList from './Componetns/ProductList/ProductList'
import NavigationMenu from './Componetns/NavigationMenu/NavigationMenu'
import Product from './Componetns/Product/Product'

class App extends React.Component {
    state = {
        products: [
            {
                title: 'JavaScript Course',
                imgSrc: 'https://fronthooks.ir/images/javascript.svg',
                time: '20 hours',
                lastPrice: '299$',
                nowPrice: '199$',
                quantity: 2,
                id: '1',
            },
            {
                title: 'Git & Github Course',
                imgSrc: 'https://fronthooks.ir/images/git.svg',
                time: '3 hours',
                lastPrice: '199$',
                nowPrice: '99$',
                quantity: 4,
                id: '2',
            },
            {
                title: 'React & Redux Course',
                imgSrc: 'https://fronthooks.ir/images/React.svg',
                time: '29 hours',
                lastPrice: '599$',
                nowPrice: '499$',
                quantity: 3,
                id: '3',
            },
            {
                title: 'Flex & Grid Course',
                imgSrc: 'https://fronthooks.ir/images/flex-grid.svg',
                time: '2 hours',
                lastPrice: '99$',
                nowPrice: '59$',
                quantity: 3,
                id: '4',
            },
            {
                title: 'VS Code Advance Course',
                imgSrc: 'https://fronthooks.ir/images/vs-code.svg',
                time: '5 hours',
                lastPrice: '199$',
                nowPrice: '99$',
                quantity: 2,
                id: '5',
            },
        ],
    }

    removeHandler = (id) => {
        const filterdProducts = this.state.products.filter(
            (product) => product.id !== id
        )
        this.setState({ products: filterdProducts })
    }

    incrementHandler = (id) => {
        const products = [...this.state.products]

        const selectedItem = products.find((product) => product.id === id)

        selectedItem.quantity++

        this.setState({ products: products })
    }

    decrementHandler = (id) => {
        const products = [...this.state.products]

        const selectedItem = products.find((product) => product.id === id)

        if (selectedItem.quantity === 1) {
            const filterdProducts = this.state.products.filter(
                (product) => product.id !== id
            )
            this.setState({ products: filterdProducts })
        } else {
            selectedItem.quantity--
            this.setState({ products })
        }
    }

    onChangeHandler = (id) => {
        this.state.products.find()
    }

    renderProducts = () => {
        if (this.state.products.length === 0) {
            return (
                <div className='p-4 mx-auto w-full text-center justify-center flex mt-4'>
                    <p className='bg-red-400 p-4 text-white w-auto border-4 border-red-700 rounded-md'>
                        You Dont Have Any Product In Your Cart
                    </p>
                </div>
            )
        } else {
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
                                            this.removeHandler(productInfo.id)
                                        }
                                        increment={() =>
                                            this.incrementHandler(
                                                productInfo.id
                                            )
                                        }
                                        decrement={() =>
                                            this.decrementHandler(
                                                productInfo.id
                                            )
                                        }
                                        onChange={() =>
                                            this.onChangeHandler(productInfo.id)
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

    render() {
        return (
            <div className='App'>
                <NavigationMenu />
                <ProductList
                    onRemove={this.removeHandler}
                    onIncrement={this.incrementHandler}
                    onDecrement={this.decrementHandler}
                    onChangeHandler={this.onChangeHandler}
                    onRender={this.renderProducts}
                />
            </div>
        )
    }
}

export default App
