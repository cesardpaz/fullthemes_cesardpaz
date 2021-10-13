import React from 'react'
import { useLocation } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({addProductt}) => {
    
    const location = useLocation();
    
    return (
        <section className="main">
            <div className="main__wdgt container">
                <ItemDetail
                    product = {location.state}
                    addProductt = {addProductt}
                />
            </div>
        </section>
    )
}

export default ItemDetailContainer
