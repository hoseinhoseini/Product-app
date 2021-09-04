import React from 'react'
import ProductList from './Componetns/ProductList/ProductList'
import NavigationMenu from './Componetns/NavigationMenu/NavigationMenu'

const App = () => {
    return (
        <div className='App'>
            <NavigationMenu />
            <ProductList />
        </div>
    )
}

export default App
