import React from 'react'
import { useLocation } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import FeaturesHome from '../FeaturesHome/FeaturesHome';
const ItemDetailContainer = () => {
    
    const location = useLocation();
    
    return (
        <section className="main">
            <div className="main__wdgt container">
                <ItemDetail
                    product = {location.state}
                />
            </div>

            <FeaturesHome />

        </section>
    )
}

export default ItemDetailContainer
