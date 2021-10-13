import './assets/css/app.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './pages/Category';
import Page404 from '../../fullthemes_cesardpaz/src/pages/Page404';
import Search from './pages/Search';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";

function App() {

    //Create state of productos añadidos
    const[ prodadd, saveProdadd  ] = useState([]);

    //List of products
    const[ products, setProducts ] = useState('Loading products**fa fa-spinner fa-spin fa-3x fa-fw');

    //spinner state
    const[isLoading, setIsLoading] = useState(true);

    //Function que get products and add 
    const addProductt = (proda) => {
        const objIndex = prodadd.findIndex((obj => obj.id == proda.id));
        if(objIndex < 0 ) {
            saveProdadd([
                ...prodadd,
                proda
            ]);
        } else {
            let quantityNew = parseInt(prodadd[objIndex].quantity) + parseInt(proda.quantity);
            prodadd[objIndex].quantity = parseInt(quantityNew);
            saveProdadd([ ... prodadd ]); 
        }
    }

    const removeProduct = (key) => {
        const newDat   = prodadd.filter(obj => obj.id != key);
        saveProdadd([ ... newDat ]); 
    }


    return (
        <>

            <Router>
                <NavBar 
                    prodadd = { prodadd }
                    setProducts = { setProducts }
                    removeProduct = { removeProduct }
                    
                />
                <Switch>

                    <Route exact path="/">
                        
                        <ItemListContainer 
                            addProductt = { addProductt }
                            setProducts = { setProducts }
                            products = { products }
                            setIsLoading = {setIsLoading}
                            isLoading = {isLoading}
                        />
                    </Route>

                    <Route path="/book">
                        <ItemDetailContainer
                            addProductt = { addProductt }
                        />
                    </Route>

                    <Route path="/category">
                        <Category
                            addProductt = { addProductt }
                            setProducts = { setProducts }
                            products = { products }
                            setIsLoading = {setIsLoading}
                            isLoading = {isLoading}
                        />
                     
                    </Route>

                    <Route path="/search">
                        <Search 
                            addProductt = { addProductt }
                            setProducts = { setProducts }
                            products = { products }
                            setIsLoading = {setIsLoading}
                            isLoading = {isLoading}
                        />
                    </Route>

                    <Route>
                        <Page404 />
                    </Route>

                </Switch>
            </Router>

            
        </>
    );
}

export default App;