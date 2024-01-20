import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Shop from './components/shop';
import Nav from './components/nav';
import Cart from './components/cart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext([]);

function App() {
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items) {
     setCartItems(cartItems => [...cartItems, items]);
    }
  }, []);
  

  return (
    <CartContext.Provider value={{cartItems: cartItems, setCartItems:setCartItems}}>
    <div className="App">
      <Router>
          <Nav/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/shop" component={Shop}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
      </Router>
    </div>
    </CartContext.Provider>
  );
}

export default App;
