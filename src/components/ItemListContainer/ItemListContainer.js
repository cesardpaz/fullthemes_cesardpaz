import React, {useState, useEffect} from 'react';
import './itemlistcontainer.css';
import ItemList from './ItemList';

const Main = ({addProductt, setProducts, products}) => {

    const removeOverlay = () => {
        document.querySelector('.minicart').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }

    
    useEffect(async () => {
        
        try {
            const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:chess&printType=books&filter=paid-ebooks&maxResults=40&key=AIzaSyBeFq4xvRQCmajRNIk9sM7tUzY4j-7ORa4');
            const res  = await resp.json();
            const newResult = res.items.filter(item => ( item.volumeInfo.hasOwnProperty('imageLinks') &&  item.saleInfo.hasOwnProperty('listPrice') ) );
            setProducts(newResult);
        } catch(error) {
            setProducts('An error occurred in the request**fa fa-plug'); 
        }
    }, []);

    return (
        <>
        <section className="main">
            <div className="main__wdgt container">
                <div className="main__wdgt__title">
                    <h3>Top books</h3>
                </div>
                <div className="main__wdgt__list">

                    { Array.isArray(products)  ? 
                        products.map(product => (
                            <ItemList
                                key         = {product.id}
                                product     = {product}
                                addProductt = {addProductt}
                            />
                        ))
                    : 
                        <div className="no-result">
                            <div>
                                <i className={products.split('**')[1]}></i>
                            </div>
                            <h4>{products.split('**')[0]}</h4>
                        </div>
                    }

                </div>
            </div>
        </section>
        <div onClick={ () => removeOverlay() } className="overlay"></div>
        </>
    )
}

export default Main;