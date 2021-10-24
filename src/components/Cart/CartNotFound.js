import React from 'react'
import { Link } from "react-router-dom"

const CartNotFound = () => {
    return (
        <div class="cartEmpty">
            <i class="fa fa-ban" aria-hidden="true"></i>
            <h2>Your cart is currently empty.</h2>
            <Link to="/">Return to shop</Link>
        </div>
    )
}

export default CartNotFound
