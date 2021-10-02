import React from 'react'
import './navBar.css';
import CartWidget from './CartWidget';

const navBar = ({prodadd, setProducts}) => {

    const searchProduct = async (e) => {
        e.preventDefault();
        const searchText = e.target.querySelector('input[name="product_text"]').value;
        const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&printType=books&filter=paid-ebooks&maxResults=40&key=AIzaSyBeFq4xvRQCmajRNIk9sM7tUzY4j-7ORa4`);
        const res  = await resp.json();
        
        if(res.totalItems > 0){
            const newResult = res.items.filter(item => ( item.volumeInfo.hasOwnProperty('imageLinks') &&  item.saleInfo.hasOwnProperty('listPrice') ) );
            setProducts(newResult);
        } else {
            setProducts('No products found**fa fa-frown-o');
        }
    }

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
                                <li><a className="fa-user-circle" href="">My account</a></li>
                                <li><a className="fa-diamond" href="">Wishlist</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="header__main">
                <div className="container flex-bt-ac p-at">
                    <figure class="logo">
                        <img src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/logo-1.png.webp" />
                    </figure>

                    <div className="header__search">
                        <form 
                            id="searchform"
                            onSubmit={searchProduct}
                        >
                            <input name="product_text" placeholder="Search product..." type="text" />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>

                    <CartWidget
                        prodadd = {prodadd}
                    />
                    
                </div>
            </div>

            
        </header>
    )
}

export default navBar