import React from 'react'
import './navBar.css';
import CartWidget from './header/CartWidget';

function navBar() {

    return (
        <header className="header">
            <div className="header__top">
                <div className="container flex-bt p-at">
                    <div className="header__top__featured">
                        <nav>
                            <ul>
                                <li><a href="#">Address</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">Coupons && Deals</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__top__user">
                        <nav>
                            <ul>
                                <li><a href="">My account</a></li>
                                <li><a href="">Wishlist</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="header__main">
                <div className="container flex-bt-ac p-at">
                    <figure>
                        <img src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/logo-1.png.webp" />
                    </figure>

                    <div className="header__search">
                        <form action="">
                            <input placeholder="Search product..." type="text" />
                            <button><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>

                    <CartWidget />
                    
                </div>
            </div>

            
        </header>
    )
}

export default navBar