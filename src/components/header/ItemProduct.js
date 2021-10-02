import React from 'react'

const ItemProduct = ({prod}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    const {title, author, cover, price, quantity} = prod;

    return (
            
        <div className="minicart__item">
            <figure><img src={cover} /></figure>
            <div className="minicart__item__meta">
                <h3 className="truncate">{title}</h3>
                <h4 className="truncate">{author}</h4>
                <h5><span className="minicart__item__qty">Qty:</span> {quantity} <span className="minicart__item__price">{formatter.format(price)}</span></h5>
            </div>
            <button className="minicart__item__remove">
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default ItemProduct