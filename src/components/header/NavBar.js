import React from 'react'
import CartWidget from './CartWidget';
import { useHistory} from 'react-router-dom';
import MiniCart from './MiniCart';

const NavBar = ({prodadd, setProducts, removeProduct}) => {

    let history = useHistory();

    const overlay = document.querySelector('.overlay'),
          menu    = document.querySelector('.header__top');

    const searchProduct = async (e) => {
        e.preventDefault();
        const searchText = e.target.querySelector('input[name="product_text"]').value;
        history.push({
            pathname: `/search/${searchText}`,
            state: searchText,
        });
       /*  const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&printType=books&filter=paid-ebooks&maxResults=40&key=AIzaSyBeFq4xvRQCmajRNIk9sM7tUzY4j-7ORa4`);
        const res  = await resp.json();
        
        if(res.totalItems > 0){
            const newResult = res.items.filter(item => ( item.volumeInfo.hasOwnProperty('imageLinks') &&  item.saleInfo.hasOwnProperty('listPrice') ) );
            setProducts(newResult);
        } else {
            setProducts('No products found**fa fa-frown-o');
        } */
    }

    const openMenuMobile = (e) => {
        if(menu.classList.contains('on'))  {
            menu.classList.remove('on');
            overlay.classList.remove('active');
        } else {
            menu.classList.add('on');
            overlay.classList.add('active');
        }
    }

    function handleClick() {
        history.push("/");
    }

    function openPage404() {
        history.push("/404");
    }

    return (
        <header className="header box_shadow">
            <div className="header__top">
                <div className="container cnt_top flex-bt p-at">
                    <div className="header__top__featured">
                        <nav>
                            <ul>
                                <li><a href="#">Address</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a onClick={openPage404}>404</a></li>
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
                    <div className="header__search">
                        <form action="">
                            <input placeholder="Search product..." type="text" />
                            <button><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="header__main">
                <div className="container flex-bt-ac p-at">
                    <div className="flex flex_ac">
                        <button 
                            className="menu_toggle"
                            onClick={openMenuMobile}
                        >
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        
                        <a
                            type="button" onClick={handleClick} 
                        >
                            <figure>
                                <img src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/logo-1.png.webp" />
                            </figure>
                        </a>
                    </div>
                    

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

                    <MiniCart
                        prodadd = {prodadd}
                        removeProduct = {removeProduct}
                    />
                    
                </div>
            </div>

            
        </header>
    )
}

export default NavBar