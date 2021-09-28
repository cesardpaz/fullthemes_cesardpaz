import React from 'react'

const ItemProduct = ({prod}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    const {title, author, cover, price, quantity} = prod;

    return (
        <div className="minicart__product">
            <figure><img src={cover} /></figure>
            <div>
                <h3>{title}</h3>
                <h4>{formatter.format(price)}</h4>
                <h5>Qty: {quantity}</h5>

            </div>
            
          
            
        </div>
    )
}

export default ItemProduct