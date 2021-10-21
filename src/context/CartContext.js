import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = (props) => {

    const [product_cart, setProduct_cart] = useState([]);

    const addItem = (proda) => {
        const objIndex = product_cart.findIndex((obj => obj.id == proda.id));
        if(objIndex < 0 ) {
            setProduct_cart([
                ...product_cart,
                proda
            ]);
        } else {
            let quantityNew = parseInt(product_cart[objIndex].quantity) + parseInt(proda.quantity);
            product_cart[objIndex].quantity = parseInt(quantityNew);
            setProduct_cart([ ... product_cart ]); 
        }
    }

    const removeItem = (key) => {
        const newDat   = product_cart.filter(obj => obj.id != key);
        setProduct_cart([ ... newDat ]); 
    }


    const clearAllItems = () => {
        setProduct_cart([]);
    }


    return (
        <CartContext.Provider
            value={{
                product_cart,
                addItem,
                removeItem,
                clearAllItems
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
    

}

export default CartProvider