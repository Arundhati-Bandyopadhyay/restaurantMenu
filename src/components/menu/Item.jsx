import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

export default function Item({ menu, cartItems, setCartItems }) {
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    // setShowCart(true);
  };
  const handleCart = () => {
    //setShowCart(!showCart);
  };
  console.log(cartItems);
  
  return (
    <div>
      <div key={menu.category} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {menu.category}
        </h2>
        {menu.items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg p-4 mb-2 shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-4">{item.price}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={{
          pathname: '/Cart',
          state: { cartItems: cartItems },
        }}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md z-50"
      >
        My Cart ({cartItems.length})
      </Link>
    </div>
  )
}
