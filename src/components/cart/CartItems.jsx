import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import { useOutletContext } from 'react-router-dom';

export default function CartItems() {
  const { cartItems, setCartItems } = useOutletContext();
  const [finalCart, setFinalCart] = useState([]);
  
  // Calculate total price
  const totalPrice = finalCart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  console.log("CartItems", cartItems);

  return (
    <>
      <div>
        {cartItems.map((cartItem, idx) => (
          <CartItem 
            key={idx} 
            cartItem={cartItem} 
            setFinalCart={setFinalCart}
          />
        ))}
      </div>
      <div className="mt-6 p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-medium text-lg">Total:</span>
          <span className="font-bold text-xl">Rs. {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}


