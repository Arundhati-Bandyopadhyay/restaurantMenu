// Cart.js (Separate Cart Component)
import React, { useEffect } from 'react';


export default function Cart({ cartItems }) {
  
  return (<>
  
  
   
    <div>
      
   

      <h1>THIS IS CART</h1>
      {/* <div>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        )}
        
      </div> */}
     
      
    </div>
    </>
    
  );
}
