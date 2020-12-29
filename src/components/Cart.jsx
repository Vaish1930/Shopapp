import React from 'react';
import './Cart.css';
import {useHistory} from "react-router-dom"

import CartItem from "./CartItem"

function Cart({cartItems,totalCartPrice}) {
  const history = useHistory();

  const openOrders = () => {
    history.push('/Orders');
  };

    return (
        <div className="cart_page">
            <div className="cartItems">
            {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem cartItem ={cartItem} key={cartItem.id} />)
        ) : (
          <p>Your cart is empty, Add some products!</p>
        )}
        </div>


        <div className="cartPrice">
          <p className="cart_priceTotal">
        cart Price:<strong>${totalCartPrice().toFixed(2)}</strong>
          </p>
           <button className="checkout_button" onClick = {openOrders}> Proceed to checkout</button>
        
          </div>
        </div>
    )
}

export default Cart
