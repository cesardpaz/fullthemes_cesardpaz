import React, { useState, useEffect } from 'react'
import { data } from '../../assets/db/data.json'
import CategoryItem from './CategoryItem'

import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';


const CategoriesList = () => {

    const[ categories, setCategories ] = useState([])


    useEffect(() => { 
        try {
           
            const requestData = async() => {
                const res = [];
                const q = query(collection(db, "category"), limit(20));
                const items = await getDocs(q);
                items.forEach((document) => {
                    res.push({ ...document.data(), id:document.id })
                })

                if(res.length > 0){
                    setCategories(res)
                    console.log(categories)
                } else {
                    console.log('no hay productos')
                }
            }
            requestData()
           
        } catch(error) {
            console.log('error')
        }
    }, []); 
    
    return (
        <>
            <div className="main__wdgt__title">
                <h3>Categories</h3>
            </div>
            <div className="cathome">
                <div className="cathome__cnt">
                    { categories.map( cat => (
                        <CategoryItem
                            key={ cat.id }
                            cat={ cat }
                        />
                    )) }
                </div>
            </div>
        </>
    )
}

export default CategoriesList
