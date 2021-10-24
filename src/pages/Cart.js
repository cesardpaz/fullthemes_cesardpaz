import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import CartContainer from '../components/Cart/CartContainer'
import { CartContext } from '../context/CartContext'
import CartNotFound from '../components/Cart/CartNotFound'
import FeaturesHome from '../components/FeaturesHome/FeaturesHome'

const Cart = () => {

    const {product_cart} = useContext(CartContext)

    return (
        <>
            <section className="main">
                <div className="main__wdgt container">
                    <div className="main__wdgt__title">
                        <h3>Shopping cart</h3>
                    </div>

                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ul className="breadcrumb__list">
                            <li><Link to="/">Home</Link></li>
                            <li>Cart</li>
                        </ul>
                    </nav>

                    { (product_cart.length > 0 ) ? <CartContainer /> : <CartNotFound /> }

                </div>

                <FeaturesHome />
            </section>
        </>
    )
}

export default Cart