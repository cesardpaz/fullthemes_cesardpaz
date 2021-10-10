import React from 'react';
import ItemProduct  from './ItemProduct';

const MiniCart = ({ prodadd, removeProduct }) => {

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
    
    let quantityAll = prodadd.reduce((a, b) => ( parseInt(a) + parseInt(b.quantity) ), 0);

    return (
        <>
            <div className="minicart box_shadow">
                { quantityAll === 0 ? 
                    <>
                        <div><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                        <h4>No products in the cart.</h4>
                    </>
                : '' }
                <div className="minicart__items">
                    { prodadd.map( prod => (
                        <ItemProduct 
                            key  = {prod.id}
                            prod = {prod}
                            removeProduct = {removeProduct}
                        />
                    ))}
                </div>
            </div> 
            <div onClick={ () => removeOverlay() } className="overlay"></div>
        </>
    )
}

export default MiniCart
