import React, { useContext } from 'react';
import ItemProduct  from './ItemProduct';
import { CartContext } from '../../context/CartContext';

const MiniCart = () => {

    const { product_cart, removeItem, clearAllItems } = useContext(CartContext);

    const removeOverlay = () => {
        document.querySelector('.minicart').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.header__top').classList.remove('on');
    }

    window.addEventListener('resize',(event) => {
        document.querySelector('.header__top').classList.remove('on');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.minicart').classList.remove('active');
    });

    const removeAll = (e) => {
        clearAllItems();
    }
    
    let quantityAll = product_cart.reduce((a, b) => ( parseInt(a) + parseInt(b.quantity) ), 0);

    return (
        <>
            <div className="minicart box_shadow">
                { quantityAll === 0 ? 
                    <>
                        <div><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                        <h4>No products in the cart.</h4>
                    </>
                :  
                <div className="minicart__items">
                    { product_cart.map( prod => (
                        <ItemProduct 
                            key  = {prod.id}
                            prod = {prod}
                            removeProduct = {removeItem}
                        />
                    ))}

                   <div className="clear-minicart"><button onClick={ () => removeAll() }>Remove All products</button></div>
                </div>
                }
            </div> 
            <div onClick={ () => removeOverlay() } className="overlay"></div>
        </>
    )
}

export default MiniCart
