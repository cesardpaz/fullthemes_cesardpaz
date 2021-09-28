import React, {useState} from 'react';
import './main.css';
import {data} from "../../assets/db/data.json";
import Product from './Product';

const Main = ({addProductt}) => {

  

    //Create list products
    const[ products, setProducts ] = useState(data);

    const removeOverlay = () => {
        document.querySelector('.minicart').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }

    return (
        <>
        <section className="main">
            <div className="main__wdgt container">
                <div className="main__wdgt__title">
                    <h3>Top books</h3>
                </div>
                <div className="main__wdgt__list">
                    {products.map(product => (
                        <Product
                            key         = {product.id}
                            product     = {product}
                            addProductt  = {addProductt}
                        />
                    ))}
                   
                </div>
            </div>
        </section>
        <div onClick={ () => removeOverlay() } className="overlay"></div>
        </>
    )
}

export default Main;