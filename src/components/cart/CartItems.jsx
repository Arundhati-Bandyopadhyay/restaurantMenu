import React, { useEffect } from 'react';
import CartItem from "./CartItem";
import { useOutletContext } from 'react-router-dom';

export default function CartItems() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log("CartItes", cartItems);
  return (
    <div>
      {cartItems.map((cartItem, idx) => (
        <CartItem key={idx} cartItem={cartItem}></CartItem>
      ))}
    </div>

  );
}
