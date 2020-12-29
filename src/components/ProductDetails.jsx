import React, {useState} from 'react'
import './ProductDetails.css'
import {IconButton} from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link,useParams} from  "react-router-dom"
import PRODUCTS from '../data/dummyData'

function ProductDetails({addToCart}) {
    const {productId} = useParams();
      const product = PRODUCTS.find(prod => prod.id === productId);
     const [isButtonClicked,setIsButtonClicked] = useState(false);


    const addToCartHandler = () => {
        setIsButtonClicked(true);
        addToCart(product);
        setTimeout(()=>{
            setIsButtonClicked(false);
        },1200);
    }
        
    
    return (
        <div className="productDetails">
            <div className="product_detailsHeader">
                <Link to="/">
                <IconButton>
                    <ArrowBackIosIcon />
                </IconButton>
                </Link>
                <h1>
             {product.title}
               </h1>
            </div>
            <div  className="product_detailsContainer">
                <div className="product_detailsLeft">
                <img src={product.imageUrl} alt="" className="product_image"/>
                </div>
                <div className="product_detailsRight">
                 <p className="product_description">
                     {product.description}
                 </p>
                   <strong  className="product_price">${product.price}</strong>
                   <div className="button_container">
                       {isButtonClicked && <div className="alert">Added to Cart</div>}
                   <button className="product_toCart" onClick = {addToCartHandler}>Add To Cart</button>
                   </div>
                   
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
