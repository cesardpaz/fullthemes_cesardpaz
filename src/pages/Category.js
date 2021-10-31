import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemListContainer/ItemList'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import { useLocation } from 'react-router-dom';
import FeaturesHome from '../components/FeaturesHome/FeaturesHome';
import Spinner from '../components/Spinner/Spinner';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const Category = ({setProducts, products, isLoading, setIsLoading}) => {

    const location = useLocation();

    console.log(location.state)
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
                const q = query(collection(db, "products"), where("category", "array-contains", Number(location.state.id)));
                const items = await getDocs(q);
                items.forEach((document) => {
                    res.push({ ...document.data(), id:document.id })
                })

                if(res.length > 0){
                    setProducts(res);
                } else {
                    setProducts('No products found**fa fa-frown-o');
                }

                setIsLoading(false);
            }
            requestData()
            
        } catch(error) {
            setIsLoading(false);
        }
    }, []); 

    return (
        <>
        <section className="main">
           
            <div className="main__wdgt container">
                <div className="main__wdgt__title">
                    <h3>{location.state.title}</h3>
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

export default Category
