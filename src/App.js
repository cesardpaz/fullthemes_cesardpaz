import './assets/css/app.css';
import React, {useState} from 'react';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
                <Switch>
                    
                    <Route exact path="/">
                        <NavBar 
                            prodadd = { prodadd }
                            setProducts = { setProducts }
                            removeProduct = { removeProduct }
                        />

                        <ItemListContainer 
                            addProductt = { addProductt }
                            setProducts = { setProducts }
                            products = { products }
                        />
                    </Route>

                    <Route path="/book">
                        <NavBar 
                            prodadd = { prodadd }
                            setProducts = { setProducts }
                            removeProduct = { removeProduct }
                        />
                        <ItemDetailContainer/>
                    </Route>

                    <Route>
                        <NavBar 
                            prodadd = { prodadd }
                            setProducts = { setProducts }
                            removeProduct = { removeProduct }
                        />
                        Not found
                    </Route>

                </Switch>
            </Router>

            
        </>
    );
}

export default App;