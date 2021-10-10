import React from 'react';

const CartWidget = ({ prodadd }) => {
    
    let quantityAll = prodadd.reduce((a, b) => ( parseInt(a) + parseInt(b.quantity) ), 0);
   
    const activeOverlay = () => {
        if(document.querySelector('.minicart'))document.querySelector('.minicart').classList.add('active');
        if(document.querySelector('.overlay'))document.querySelector('.overlay').classList.add('active');
        
    }
    
    return (
        <div className="header__main__shopping">
            <button 
                onClick={ () => activeOverlay() }>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i><span>{quantityAll}</span>
            </button>
        </div>
    )
}

export default CartWidget