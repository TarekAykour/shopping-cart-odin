import React,{useContext, useEffect, useState} from "react";
import { CartContext } from "../App";

function Cart (){
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setPrice] = useState(0)

    console.log(cartItems)
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedCartItems);
    }, []);
  
    useEffect(() => {
      let cartPrice = 0;
      for (let i = 0; i < cartItems.length; i++) {
        cartPrice = cartPrice + cartItems[i].price * (cartItems[i].quantity || 1);
      }
      setPrice(cartPrice);
    }, [cartItems]);
  
    const incrementQuantity = (id) => {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
  
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };
  
    const decrementQuantity = (id) => {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, (item.quantity || 1) - 1) } : item
      );
  
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };
  
    const removeFromCart = (id) => {
      const updatedCart = cartItems.filter((item) => item.id !== id);
  
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      window.location.reload()
    };

    // filtering out the dupe items
  // Assuming your cartItems array looks like [{ id: 1, ... }, { id: 2, ... }, ...]
const newItems = cartItems.filter((item, pos, self) => {
    return self.findIndex((otherItem) => otherItem.id === item.id) === pos;
  });

    if(newItems == 0){
        return(
            <div>
                <h2>Cart</h2>

                <p>Cart is empty! Add <a href="/shop">items</a></p>
            </div>
        )
    }
    else {
        return(
            <div className="cart">
                    
                    <main>
                    <h2>Cart</h2>
                        <table>
                            <thead>
                                <tr>
                                    
                                </tr>
                            </thead>
                        {newItems.map((item)=> {
                                return(
                                    <tr>
                                        <div className="cart-item">
                                            <img width={'100px'} src={item.image}></img>
                                            <div>
                                            <div className="item-info">
                                                <h2>{item.title}</h2>
                                                <h4>€{item.price}</h4>
                                            </div>
                                            <div>
                                            <div className="input-group">
                                                <button type="button" onClick={() => decrementQuantity(item.id)}>-</button>
                                                <input type="number" name="" id="" value={item.quantity}/> 
                                                <button type="button" onClick={()=> {incrementQuantity(item.id)}}>+</button>   
                                            </div>
                                            <div className="remove">
                                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                            </div> 
                                            </div>
                                            </div>
                                             
                                        </div>
                                    </tr>
                                )
                            })}
                        </table>
                    </main>
                    <div className="checkout">
                        <div style={{
                            display: "flex",
                            justifyContent: 'space-evenly',
                            fontSize: '14px',
                            borderBottom: 'solid 1px #bdbdbd',
                            width:'50%',
                            margin: 'auto',
                            marginBottom: '25px'
                        }}>
                        <h1>Total:</h1> <h1>€{totalPrice.toFixed(2)}</h1>
                        </div>
                        <button type="button">Checkout</button>
                    </div>
            </div>
        )
    }
}



export default Cart;