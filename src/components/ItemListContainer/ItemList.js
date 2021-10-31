import React from 'react';
import Item from './Item';

const Product = ({product}) => {
    let { title, author, image, price, desc, id } = product;

    let currency = 'USD';

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });
    
    let productIt = {
        'id'         : id,
        'title'      : title,
        'author'     : author,
        'cover'      : image,
        'price'      : price,
        'currency'   : currency,
        'description': desc
    }

    return (
       
        <Item
            keyid       = {id}
            productIt   = {productIt}
            formatter   = {formatter}
        />
    )
}

export default Product;