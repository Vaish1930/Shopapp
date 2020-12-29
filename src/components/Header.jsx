import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom"

function Header({cart,search,setSearch}) {
   const handleSearch = (event) => {
      setSearch(event.target.value);
   };

  return (
    <div className="header">
      <div className="logo" title="ShopApp">
        
        <Link to="/" className="logoTitle">
          ShopApp
        </Link>
        </div>
      <div className="nav">
        <div className="nav_search"> 
            <input
             className="nav_searchInput"
             type="text"
            placeholder="search products.."
            value={search}
            onChange={handleSearch}
            />
        </div>
        <Link to="/auth/signin" className="signin">
          <div>Login</div>
        </Link>
        <Link to="/cart">
        <div className="cart">
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <p className="badge">{cart.length}</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
