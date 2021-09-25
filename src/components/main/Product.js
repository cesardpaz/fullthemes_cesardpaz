import React from 'react';

const Product = ({product}) => {

    const {title, author, cover, price} = product; 
    return (
        <div className="main__wdgt__card">
            <figure>
                <img src={cover} />
            </figure>
            <div className="wdgt__card__item">
                <h2>{title}</h2>
                <h3>By <span>{author}</span></h3>
                <h4>${price}</h4>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
