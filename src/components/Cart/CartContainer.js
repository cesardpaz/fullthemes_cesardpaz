import React, { useContext }  from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem';

const CartContainer = () => {

    const {product_cart, removeItem} = useContext(CartContext)

    let totalPrice = product_cart.reduce((a, b) => ( parseFloat(a) + parseFloat(b.quantity * b.price) ), 0);

     const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: product_cart[0].currency,
    });
 
    return (
        <div className="mainCart">
            <div className="mainCart__details">
                <table>
                    <thead>
                        <tr>
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">&nbsp;</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>

                        { product_cart.map( prod => (
                            <CartItem
                                key  = {prod.id}
                                prod = {prod}
                                removeProduct = {removeItem}
                            />
                        ))} 

                    </tbody>
                </table>
            </div>
            <div className="mainCart__resume">
                <h2>Cart Totals</h2>
                <div className="mainCart__resume-item btp">
                    <h4>Subtotal</h4>
                    <h5>{formatter.format(totalPrice)}</h5>
                </div>
                <div className="mainCart__resume-item">
                    <h4>Total</h4>
                    <h3>{formatter.format(totalPrice)}</h3>
                </div>

                <button>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default CartContainer
