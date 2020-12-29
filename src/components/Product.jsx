import React from 'react'
import "./Product.css"
import {useHistory} from 'react-router-dom'


function Product({product, addToCart}) {

    const history = useHistory();


    const openProductDetails=()=>{
     history.push(`/product/${product.id}`);

    };


    return (
        <div className="product" >
            <p>{product.title}</p>
            <p>${product.price}</p>
            {addToCart && (
            <button onClick={() => addToCart(product)}>Add To Cart</button>
            )}
            <button onClick={openProductDetails}>View Details</button>
        </div>
    )
}

export default Product;
