import React from 'react'
import { data } from '../../assets/db/data.json'
import CategoryItem from './CategoryItem'

const CategoriesList = () => {
    
    return (
        <>
            <div className="main__wdgt__title">
                <h3>Categories</h3>
            </div>
            <div className="cathome">
                <div className="cathome__cnt">
                    { data.map( dat => (
                        <CategoryItem
                            key={ dat.id }
                            cat={ dat }
                        />
                    )) }
                </div>
            </div>
        </>
    )
}

export default CategoriesList
