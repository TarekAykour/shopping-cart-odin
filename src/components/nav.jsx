import React,{useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";



function Nav() {
    const {cartItems, setCartItems} = useContext(CartContext)
    const cart = JSON.parse(localStorage.getItem('cartItems'))
   const items = cart == null ? 0 : cart.length 
   
   console.log(cart)
    return(
        <nav className="main-nav">
            <a href='/'><h3>Thriftshop</h3></a>
            <ul>
                <li><a href='/shop'>Shop</a></li>
                <li><a href='/cart'>Cart</a><span>{items}</span></li>
                <li><a href='help'>Help</a></li>
            </ul>
        </nav>
    )
}


export default Nav;
