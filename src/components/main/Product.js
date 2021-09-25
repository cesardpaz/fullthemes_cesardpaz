import React from 'react';

const Product = ({product}) => {

    const {title, author, cover, price} = product;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    return (
        <div className="main__wdgt__card">
            <figure>
                <img src={cover} />
            </figure>
            <div className="wdgt__card__item">
                <h2>{title}</h2>
                <h3>By <span>{author}</span></h3>
                <h4>{formatter.format(price)}</h4>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
