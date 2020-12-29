import React from 'react'
import "./CartItem.css"

function CartItem({cartItem}) {
    return (
        <div className="cart_item">
            <div className="cart_itemLeft">
            <h3>{cartItem.title}</h3>
            <strong>${cartItem.price}</strong>
            </div>
            <div className="cart_itemRight">
               <img src={cartItem.imageUrl} alt="" className="cart_itemImage"/>
            </div>
        </div>
    )
}

export default CartItem;
