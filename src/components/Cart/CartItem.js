import React from 'react'
import { useHistory } from 'react-router-dom';

const CartItem = ({prod, removeProduct}) => {

    let history = useHistory();

    const {id, title, author, cover, price, quantity, currency} = prod;
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });

    const removeItem = () => {
        removeProduct(id);
    }

    const openBook = (keyid) => {
        history.push({
            pathname: `/book/${keyid}`,
            state: prod,
        });
    }

    return (
        <tr>
            <td className="mainCart__product-remove">
                <button
                    onClick = {removeItem}><i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </td>
            <td className="mainCart__product-thumbnail">
                <a onClick={() => openBook(id)}><img src={cover} /></a>
            </td>
            <td className="mainCart__prodct-name pbo-tl">{title}</td>
            <td data-title="price" className="pbo-tl pbo-aft">{formatter.format(price)}</td>
            <td data-title="quantity" className="pbo-tl pbo-aft">{quantity}</td>
            <td data-title="subtotal" className="pbo-tl pbo-aft">{formatter.format(price * quantity)}</td>
        </tr>
    )
}

export default CartItem
