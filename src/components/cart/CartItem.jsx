import React, { useState, useEffect } from 'react';

export default function CartItem({ cartItem, setFinalcart }) {
  // const [count, setCount] = useState(1);
  const [item, setItem] = useState({
    name: cartItem.name,
    price: cartItem.price,
    quantity: 1,
  });

  const handleIncreaseQuantity = () => {
    setItem({
      ...item,
      quantity: item.quantity + 1,
    });
  };

  const handleDecreaseQuantity = () => {
    setItem({
      ...item,
      quantity: item.quantity > 0 ? item.quantity - 1 : 0,
    });
  };

  const handleQuantityChange = (event) => {
    setItem({
      ...item,
      quantity: parseInt(event.target.value, 10), // Parse the input as an integer
    });
    
    setFinalcart((prevItems)=> [...prevItems, item]);
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition justify-between">
      {/* Product Image */}
      <div className="flex-shrink-0 h-20 w-20 mr-4 rounded-md overflow-hidden">
        <img
          src={cartItem.image}
          alt={cartItem.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{cartItem.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{cartItem.description}</p>
      </div>

      {/* Quantity Controls */}
      {/* {cartItem.quantity=2}
      <div className="flex items-center">
        <button className="p-1 rounded-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <span className="mx-2 w-8 text-center font-medium">{cartItem.quantity}</span>
        <button className="p-1 rounded-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div> */}
      <div className="flex items-center">
        <br />
        <label>
        Quantity:
        <input type="number" value={item.quantity} onChange={handleQuantityChange} />
      </label>
        <button className="p-1 rounded-full hover:bg-gray-200" onClick={handleIncreaseQuantity}>+</button>
        <label>
          <input type="number" value={item.quantity} />
        </label>
        <br />
        <button className="p-1 rounded-full hover:bg-gray-200" onClick={handleDecreaseQuantity}>-</button>
      </div>

      {/* Price and Remove */}
      <div className="pl-4 flex flex-col items-end">
        <span className="font-medium text-gray-900">Rs. {(cartItem.price * item.quantity)}</span>
        <button className="mt-1 text-sm text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  );

  // * cartItem.quantity.toFixed(2)
}

