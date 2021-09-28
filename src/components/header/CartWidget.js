import React from 'react';
import ItemProduct  from './ItemProduct';

const CartWidget = ({ prodadd }) => {

    
    
    let quantityAll = prodadd.reduce((a, b) => ( parseInt(a) + parseInt(b.quantity) ), 0);
   

    const activeOverlay = () => {
        document.querySelector('.minicart').classList.add('active');
        document.querySelector('.overlay').classList.add('active');
    }
    
    return (
        <div className="header__main__shopping">
            <button 
                onClick={ () => activeOverlay() }>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i><span>{quantityAll}</span>
            </button>

            <div className="minicart">
                { quantityAll === 0 ? 
                    <>
                        <div><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                        <h4>No products in the cart.</h4>
                    </>
                : '' }
                
                
                { prodadd.map( prod => (
                    <ItemProduct 
                        key  = {prod.id}
                        prod = {prod}
                    />
                ))}

            </div> 

            


        </div>
    )
}

export default CartWidget
