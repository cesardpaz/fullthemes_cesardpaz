import React from 'react'

const ItemDetail = ({product, addProductt }) => {

    let{ id, title, author, image, price, currency, description } = product;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });

    const upProduct = (e) => {
        let quantity = e.target.parentNode.previousSibling;
        quantity.value = parseInt(quantity.value) + 1;
    }

    const downProduct = (e) => {
        let quantity = e.target.parentNode.previousSibling;
        quantity.value = ( parseInt(quantity.value) - 1 < 1 ) ? 1 : parseInt(quantity.value) - 1;
    }

    const LoadingProduct = (e) => {
        let num = Number(e.target.previousSibling.previousSibling.value);
        e.target.disabled = true;
        e.target.classList.add('active');
        e.target.innerHTML = '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
        setTimeout( ()=> {
            e.target.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
            const itemProd = {
                'id'      : id,
                'title'   : title,
                'author'  : author,
                'quantity': num,
                'price'   : price,
                'cover'   : image,
                'currency': currency
            }
            addProductt(itemProd);
        }, 1000);
        setTimeout( ()=> {
            e.target.innerHTML = 'Add to cart';
            e.target.classList.remove('active');
            e.target.disabled = false;
            e.target.previousSibling.previousSibling.value = 1;
        }, 2500);
    }

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

                    <h4 class="price__single">{formatter.format(price)}</h4>
                    

                    <div className="wdgt__card__buy">
                        <input  
                            name="quantity"
                            type="text" 
                            defaultValue="1"
                        />
                        <div className="wdgt__card__quantity">
                            <i 
                                onClick={upProduct}
                                className="fa fa-caret-up" 
                                aria-hidden="true"
                            ></i>
                            <i 
                                onClick={downProduct}
                                className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                        <button 
                            onClick={(e) => LoadingProduct(e)}    
                        >Add to cart</button>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default ItemDetail