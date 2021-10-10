import React from 'react';
import Item from './Item';

const Product = ({product, addProductt}) => {
    let { volumeInfo, id } = product;
    
    let title  = volumeInfo.title;
    let author = volumeInfo.authors ? volumeInfo.authors[0] : 'Unknow';
    let image    = volumeInfo.imageLinks.thumbnail,
        price    = product.saleInfo.listPrice.amount,
        desc     = volumeInfo.description,
        currency = product.saleInfo.listPrice.currencyCode;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });
    
    let productIt = {
        'title'      : title,
        'author'     : author,
        'image'      : image,
        'price'      : price,
        'currency'   : currency,
        'description': desc
    }

    return (
       
        <Item
            keyid       = {id}
            productIt   = {productIt}
            addProductt = {addProductt}
            formatter   = {formatter}
        />
    )
}

export default Product;