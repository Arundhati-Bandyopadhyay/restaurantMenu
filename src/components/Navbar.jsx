import React from 'react'
import { useEffect,useState } from 'react';
import '../input.css'
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [menuData, setMenuData] = useState([]);
  
 // Add loading state
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        const menu = [
            {
                "category": "Appetizers",
                "items": [
                    { "name": "Spring Rolls", "price": 8.99 },
                    { "name": "Chicken Wings", "price": 12.99 },
                    { "name": "Bruschetta", "price": 7.49 }
                ]
            },
            {
                "category": "Main Courses",
                "items": [
                    { "name": "Steak Frites", "price": 24.99 },
                    { "name": "Pasta Carbonara", "price": 18.99 },
                    { "name": "Salmon with Roasted Vegetables", "price": 21.99 },
                    { "name": "Vegetarian Curry", "price": 16.99 }
                ]
            },
            {
                "category": "Desserts",
                "items": [
                    { "name": "Chocolate Cake", "price": 6.99 },
                    { "name": "Ice Cream Sundae", "price": 5.99 },
                    { "name": "Tiramisu", "price": 9.49 }
                ]
            },
            {
                "category": "Drinks",
                "items": [
                    { "name": "Coke", "price": 2.99 },
                    { "name": "Sprite", "price": 2.99 },
                    { "name": "Juice", "price": 3.99 },
                    { "name": "Coffee", "price": 2.49 }
                ]
            }
        ];
        setMenuData(menu);
    }, []); 
    
 return(
    <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <IoMdMenu />
      </div>
      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {menuData.map((categoryItem, index) => (
                            <li key={index}>
                                <a>{categoryItem.category}</a>
                            </li>
                        ))}
                        
                    </ul>
    </div>
  </div>
  <div className="navbar-center" style={{ backgroundColor: 'black', color: 'white' }}>
  <a className="btn btn-ghost text-xl" style={{ color: 'white' }}>Menu</a>
</div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    </>
 )
}
