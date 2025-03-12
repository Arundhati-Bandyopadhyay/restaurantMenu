import React, { useState } from 'react';
import '../input.css';
import { IoMdMenu } from 'react-icons/io';
import logo from '../assets/logo.png';
import Cart from './Cart';

const menuItems = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Crispy Fries', description: 'Golden and crispy.', price: '₹99' },
      { name: 'Onion Rings', description: 'Delicious fried rings.', price: '₹129' },
      { name: 'Chicken Wings', description: 'Spicy and flavorful.', price: '₹199' },
    ],
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Burger Deluxe', description: 'Juicy patty, fresh toppings.', price: '₹249' },
      { name: 'Pasta Alfredo', description: 'Creamy pasta with chicken.', price: '₹299' },
      { name: 'Veggie Pizza', description: 'Loaded with fresh veggies.', price: '₹279' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Chocolate Cake', description: 'Rich and decadent.', price: '₹149' },
      { name: 'Ice Cream Scoop', description: 'Various flavors available.', price: '₹79' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Soft Drinks', description: 'Coke, Pepsi, Sprite.', price: '₹49' },
      { name: 'Iced Tea', description: 'Refreshing and cool.', price: '₹69' },
      { name: 'Coffee', description: 'Hot or Iced', price: '₹89' },
    ],
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuItems = selectedCategory
    ? menuItems.find((item) => item.category === selectedCategory)
    : menuItems;


    const handleAddToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
      console.log(cartItems);
      
    };
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-black shadow-md p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="ml-4">
            <select
              className="bg-black text-white p-2 rounded"
              value={selectedCategory || 'all'}
              onChange={(e) =>
                e.target.value === 'all'
                  ? setSelectedCategory(null)
                  : setSelectedCategory(e.target.value)
              }
            >
              <option value="all">All Categories</option>
              {menuItems.map((categoryItem) => (
                <option key={categoryItem.category} value={categoryItem.category}>
                  {categoryItem.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center items-center transform -translate-x-2">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <div>
          <button className="text-white hover:text-gray-300 ml-4">Login</button>
        </div>
      </nav>

      <div className="p-4">
        <div>
          <h1 className="text-2xl font-bold text-center mb-6 ml-8"> Our Menus</h1>
          {selectedCategory ? (
            filteredMenuItems && (
              <div key={filteredMenuItems.category} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{filteredMenuItems.category}</h2>
                {filteredMenuItems.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-lg p-4 mb-2 shadow-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
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
            )
          ) : (
            menuItems.map((menus) => (
              <div key={menus.category} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{menus.category}</h2>
                {menus.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-lg p-4 mb-2 shadow-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
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
            ))
          )}
        </div>
        <div className="w-1/4 p-4 bg-gray-200 rounded-lg">
         
        </div>
      </div>
    </div>
  );
}

export default Menu;