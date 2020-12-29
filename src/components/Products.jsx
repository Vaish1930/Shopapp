import React from 'react'
import {useEffect,useState} from "react";

import Product from "./Product";
import "./Product.css";
import "./Products.css";
import PRODUCTS from "../data/dummyData"

function Products({searchResult,addToCart}) {
  const [products, setProducts]=useState(PRODUCTS);
  
       
  useEffect(()=> {
    setProducts(
      PRODUCTS.filter((product)=>
         product.title.toLowerCase().includes(searchResult)
      )
    );
  },[searchResult]);
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
 
export default Products;
