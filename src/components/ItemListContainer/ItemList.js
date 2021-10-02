import React from 'react';

const Product = ({product, addProductt}) => {

    let { volumeInfo, id } = product;
    
    let title  = volumeInfo.title;

    let author = volumeInfo.authors ? volumeInfo.authors[0] : 'Unknow';
        
    let image  = volumeInfo.imageLinks.thumbnail,
        price  = product.saleInfo.listPrice.amount;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: product.saleInfo.listPrice.currencyCode,
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
                'id'      : product.id,
                'title'   : title,
                'author'  : author,
                'quantity': num,
                'price'   : price,
                'cover'   : image,
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
        <div className="main__wdgt__card">
            <figure>
                <img src={image} />
            </figure>
            <div className="wdgt__card__item">
                <h2>{title}</h2>
                <h3>By <span>{author}</span></h3>
                <h4>{formatter.format(price)}</h4>
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
    )
}

export default Product
