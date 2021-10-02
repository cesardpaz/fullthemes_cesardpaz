import './App.css';
import React, {useState} from 'react';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {

    //Create state of productos añadidos
    const[ prodadd, saveProdadd  ] = useState([]);

    //List of products
    const[ products, setProducts ] = useState('Loading products');

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


    return (
        <>
            <NavBar 
                prodadd = { prodadd }
                setProducts = { setProducts }
            />
            <ItemListContainer 
                addProductt = { addProductt }
                setProducts = { setProducts }
                products = { products }
            />
        </>
    );
}

export default App;