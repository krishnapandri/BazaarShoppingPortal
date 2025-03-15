import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button'; 
import  { useState } from 'react';
import './CartSidebar.css';
import {ShoppingCart} from '@mui/icons-material';



export default function CartSidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Silver High Neck Sweater', price: 210, quantity: 1, image: 'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=1920&q=75' },
    { id: 2, name: 'Yellow Casual Sweater', price: 110, quantity: 1, image: 'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=1920&q=75' },
    { id: 3, name: 'Denim Blue Jeans', price: 140, quantity: 1, image: 'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=1920&q=75' },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '27%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
         <div className="cart-container">
      <div className="cart-header">
        <h2>3 items</h2>
        <button className="close-button">×</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div className="item-controls">
              <button onClick={() => updateQuantity(item.id, true)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, false)} disabled={item.quantity <= 1}>-</button>
            </div>
            <button className="remove-item" onClick={() => removeItem(item.id)}>×</button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <button className="checkout-button">Checkout Now (${total.toFixed(2)})</button>
        <button className="view-cart-button">View Cart</button>
      </div>
    </div>
  
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={'right'}>
          <ShoppingCart onClick={toggleDrawer('right', true)}/>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}