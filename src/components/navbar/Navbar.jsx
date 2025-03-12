import React from 'react'
import { useEffect, useState } from 'react';
import logo from "/assets/logo.png";

export default function Navbar({menuItems,selectedCategory,setSelectedCategory}) {

  return (
    <>
      <nav className="bg-black shadow-md p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="ml-4">
            <select
              className="bg-black text-white p-2 rounded"
              value={selectedCategory || "all"}
              onChange={(e) =>
                e.target.value === "all"
                  ? setSelectedCategory(null)
                  : setSelectedCategory(e.target.value)
              }
            >
              <option value="all">All Categories</option>
              {menuItems.map((categoryItem) => (
                <option
                  key={categoryItem.category}
                  value={categoryItem.category}
                >
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
    </>
  )
}
