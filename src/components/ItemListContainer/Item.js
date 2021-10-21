import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Item = ({keyid, productIt, formatter }) => {
    
    let history = useHistory();

    let { title, author, image, price, currency, description} = productIt;

    const {addItem} = useContext(CartContext);
    
    const upProduct = (e) => {
        let quantity = e.target.parentNode.previousSibling;
        quantity.value = parseInt(quantity.value) + 1;
    }

    const downProduct = (e) => {
        let quantity = e.target.parentNode.previousSibling;
        quantity.value = ( parseInt(quantity.value) - 1 < 1 ) ? 1 : parseInt(quantity.value) - 1;
    }

    const openBook = (keyid) => {
        history.push({
            pathname: `/book/${keyid}`,
            state: productIt,
        });
    }

    const LoadingProduct = (e) => {
        let num = Number(e.target.previousSibling.previousSibling.value);
        e.target.disabled = true;
        e.target.classList.add('active');
        e.target.innerHTML = '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
        setTimeout( ()=> {
            e.target.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
            const itemProd = {
                'id'      : keyid,
                'title'   : title,
                'author'  : author,
                'quantity': num,
                'price'   : price,
                'cover'   : image,
                'currency': currency
            }
            addItem(itemProd);
        }, 1000);
        setTimeout( ()=> {
            e.target.innerHTML = 'Add to cart';
            e.target.classList.remove('active');
            e.target.disabled = false;
            e.target.previousSibling.previousSibling.value = 1;
        }, 2500);
    }

    return (
        <>
            <div className="main__wdgt__card">
                <a
                    onClick={() => openBook(keyid)}
                >
                    <figure>
                        <img src={image} />
                    </figure>
                </a>
                <div className="wdgt__card__item">
                    <h2><a onClick={() => openBook(keyid)}>{title}</a></h2>
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
        </>
    )
}

export default Item