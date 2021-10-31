import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CategoriesList from '../CategoriesList/CategoriesList';
import Spinner from '../Spinner/Spinner';
import FeaturesHome from '../FeaturesHome/FeaturesHome';

import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';

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


    
    useEffect(() => { 
        try {
            setIsLoading(true);
            const requestData = async() => {
                const res = [];
                const q = query(collection(db, "products"), limit(12));
                const items = await getDocs(q);
                items.forEach((document) => {
                    res.push({ ...document.data(), id:document.id })
                })

                if(res.length > 0){
                    setProducts(res);
                    console.log(res)
                    console.log(5);
                } else {
                    setProducts('No products found**fa fa-frown-o');
                }
                setIsLoading(false)
            }
            requestData()
            
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
        
        </>
    )
}

export default Main;