import './assets/css/app.css'
import React, {useState, useEffect} from 'react'
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Page404 from '../../fullthemes_cesardpaz/src/pages/Page404'
import Search from './pages/Search'
import CartProvider from './context/CartContext'
import Suscribe from './components/Suscribe/Suscribe'
import Footer from './components/Footer/Footer'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function App() {

    //List of products
    const[ products, setProducts ] = useState('Loading products**fa fa-spinner fa-spin fa-3x fa-fw');

    //spinner state
    const[isLoading, setIsLoading] = useState(true);


    return (
        <>

            <Router>
                <CartProvider>
                    <NavBar 
                        setProducts = { setProducts }
                    />
                    <Switch>

                        <Route exact path="/">
                            
                            <ItemListContainer 
                                setProducts = { setProducts }
                                products = { products }
                                setIsLoading = {setIsLoading}
                                isLoading = {isLoading}
                            />
                        </Route>

                        <Route path="/book">
                            <ItemDetailContainer />
                        </Route>

                        <Route path="/category">
                            <Category
                                setProducts = { setProducts }
                                products = { products }
                                setIsLoading = {setIsLoading}
                                isLoading = {isLoading}
                            />
                        </Route>

                        <Route path="/search">
                            <Search 
                                setProducts = { setProducts }
                                products = { products }
                                setIsLoading = {setIsLoading}
                                isLoading = {isLoading}
                            />
                        </Route>

                        <Route path="/cart">
                            <Cart
                            />
                        </Route>

                        <Route>
                            <Page404 />
                        </Route>

                    </Switch>

                    <Suscribe/>
                    <Footer/>
                </CartProvider>
            </Router>

            
        </>
    );
}

export default App;