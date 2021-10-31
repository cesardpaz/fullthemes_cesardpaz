import React from 'react'
import { useHistory } from 'react-router-dom';

const Category = ({cat}) => {

    let history = useHistory();

    const {name, slug} = cat; 

    const openCat = (catUrl) => {
        history.push({
            pathname: `/category/${slug}`,
            state: cat,
        });
    }

    return (
        <a 
            onClick={() => openCat(slug)}
        >
            {name}
        </a>
    )
}

export default Category
