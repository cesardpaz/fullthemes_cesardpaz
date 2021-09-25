import React from 'react'

const CartWidget = () => {

    const activeOverlay = () => {
        document.querySelector('.minicart').classList.add('active');
        document.querySelector('.overlay').classList.add('active');
    }
    
    return (
        <div className="header__main__shopping">
            <button 
                onClick={ () => activeOverlay() }>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i><span>0</span>
            </button>

            <div className="minicart">
                <div><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                <h4>No products in the cart.</h4>
            </div> 
        </div>
    )
}

export default CartWidget
