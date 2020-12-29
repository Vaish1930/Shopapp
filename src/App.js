import React, { useState,useEffect } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Login from "./components/Login";



function App() {
  const[cart, setCart] = useState([]);
  const[search,setSearch] =useState("");
  const[isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  },[]);

  const addToCart = (product) => {
    setCart((prevCaritems) =>[...prevCaritems,product]);
  };
   
  const selectCartTotal = () => 
  cart?.reduce(
  (totalCartPrice,cartItem) => totalCartPrice + cartItem.price,
  0

  );

  if (isLoading){
    return(
      <div className="loading">
        <div className="loading_spinner"></div>
      </div>
    );
  }

  return (
    <Router>
    <div className="app">
    <Header cart={cart} search={search} setSearch={setSearch}/>
       <Switch>
         <Route path="/product/:productId">
           <ProductDetails addToCart={addToCart}/>
           </Route>
           <Route path="/Orders">
              <Orders cart={cart} setcart={setCart}/>
           </Route> 
           <Route path="/auth/signin">
             <Login/>
           </Route>
         <Route path="/cart">
           <Cart cartItems={cart} totalCartPrice={selectCartTotal}/>
         </Route>
          <Route path="/">
         <Products addToCart={addToCart} searchResult={search}/>
      </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
