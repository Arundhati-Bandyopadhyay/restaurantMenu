import React, { useState,useEffect } from 'react';
import CartItem from "./CartItem";
import { useOutletContext } from 'react-router-dom';

export default function CartItems() {
  const { cartItems, setCartItems } = useOutletContext();
  const [finalcart, setFinalcart] = useState([]);
  console.log("finalcart:",finalcart);
  console.log("CartItes", cartItems);

  return (
    <>
    <div>
      {cartItems.map((cartItem, idx) => (
        <CartItem key={idx} cartItem={cartItem} setFinalcart={setFinalcart}></CartItem>
      ))}
    </div>
    <div>
      <p>{finalcart}</p>
    </div>
    </>

  );
}
