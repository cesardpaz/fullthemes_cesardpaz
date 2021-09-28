import './App.css';
import React, {useState} from 'react';
import NavBar from './components/header/NavBar';
import Main from './components/main/Main';
function App() {

    //Create state of productos añadidos
    const[ prodadd, saveProdadd  ] = useState([]);

    //Function que get products and add 
    const addProductt = (proda) => {
        const objIndex = prodadd.findIndex((obj => obj.id == proda.id));
        console.log(objIndex);
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
            />
            <Main 
                addProductt = { addProductt }
            />
        </>
    );
}

export default App;