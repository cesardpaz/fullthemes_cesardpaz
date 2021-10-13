import React from 'react'
import { useHistory } from 'react-router-dom';

const Category = ({cat}) => {

    let history = useHistory();

    const {title, slug} = cat; 

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
            {title}
        </a>
    )
}

export default Category
