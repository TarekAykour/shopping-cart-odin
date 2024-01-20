import React,{useContext, useEffect, useState} from "react";
import { CartContext } from "../App";



function ShopItem(props) {
    const {cartItems, setCartItems} = useContext(CartContext)


 
    const addToCart = () => {
        // Check if the product is already in the cart
        const existingItemIndex = cartItems.findIndex((item) => item.id === props.id);
        console.log(existingItemIndex)

        if (existingItemIndex !== -1) {
          // If the product is already in the cart, update its quantity
          const updatedCart = [...cartItems];
          updatedCart[existingItemIndex].quantity += 1;
      
          // Update the state with the updated cart
          setCartItems(updatedCart);
      
          // Save the updated cart to localStorage
          localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        } else {
          // If the product is not in the cart, add it as a new item
          const newItem = {
            id: props.id,
            title: props.title,
            image: props.image,
            price: props.price,
            description: props.description,
            quantity: 1,
          };
      
          // Update the state with the new item
          setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      
          // Retrieve the existing items from localStorage
          const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      
          // Add the new item to the existing items
          const updatedItems = [...storedItems, newItem];
      
          // Save the updated items back to localStorage
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        }
      };
      





    return(
        <div className="shopitem" key={props.id}>
            <img width={'150px'} src={props.image} alt="" />
            <section className="product-info">
                <h4>{props.title}</h4>
                <p>{props.description.slice(1,100)}-.</p>
                <h5>€{props.price}</h5>
            </section>
            
            <button  type="button" onClick={()=> {addToCart(props.id)}}>Add to Cart</button>
           
        </div>
    )
}



export default ShopItem;