import React from 'react'

const ItemDetail = ({product}) => {

    let{ title, author, image, price, currency, description } = product;
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });

    return (
        <div className="main__wdgt__title">
            <h3>{title}</h3>

            <div className="booksng">

                <div className="booksng__image">
                    <figure>
                        <img src={image} />
                    </figure>
                </div>

                <div className="booksng__meta">
                    <div className="booksng__detail">
                        <h3>Author</h3>
                        <p>{author}</p>
                    </div>
                    <div className="booksng__detail">
                        <h3>Price</h3>
                        <p>{formatter.format(price)}</p>
                    </div>
                    <div className="booksng__detail">
                        <h3>Description</h3>
                        <p>{(description) ? description : 'Description not available'}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail