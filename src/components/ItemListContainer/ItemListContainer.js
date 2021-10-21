import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CategoriesList from '../CategoriesList/CategoriesList';
import Spinner from '../Spinner/Spinner';
import FeaturesHome from '../FeaturesHome/FeaturesHome';
import Suscribe from '../Suscribe/Suscribe';
import Footer from '../Footer/Footer';

const Main = ({setProducts, products, isLoading, setIsLoading}) => {

    const removeOverlay = () => {
        document.querySelector('.minicart').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.header__top').classList.remove('on');
    }

    window.addEventListener('resize',(event) => {
        document.querySelector('.header__top').classList.remove('on');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.minicart').classList.remove('active');
    });

    
    useEffect(async () => { 
        try {
            setIsLoading(true);
            const resp = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:chess&printType=books&filter=paid-ebooks&maxResults=40&key=AIzaSyBeFq4xvRQCmajRNIk9sM7tUzY4j-7ORa4');
            const res  = await resp.json();
            if(res.totalItems > 0){
                const newResult = res.items.filter(item => ( item.volumeInfo.hasOwnProperty('imageLinks') &&  item.saleInfo.hasOwnProperty('listPrice') ) );
                setProducts(newResult);
            } else {
                setProducts('No products found**fa fa-frown-o');
            }
            setIsLoading(false);
        } catch(error) {
            setProducts('An error occurred in the request**fa fa-plug'); 
        }
    }, []);

    return (
        <>
        <section className="main">
            <div className="main__wdgt container">
                <CategoriesList/>
            </div>
            <div className="main__wdgt container">
                <div className="main__wdgt__title">
                    <h3>Top books</h3>
                </div>
                
                <div className="main__wdgt__list">
                    { isLoading  ? 
                         <Spinner />
                    : 
                        Array.isArray(products)  ? 
                            products.map(product => (
                                <ItemList
                                    key         = {product.id}
                                    product     = {product}
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
            
            <FeaturesHome />
            
        </section>

        
        
        <div onClick={ () => removeOverlay() } className="overlay"></div>
        
        <Suscribe/>

        <Footer/>
        
        </>
    )
}

export default Main;