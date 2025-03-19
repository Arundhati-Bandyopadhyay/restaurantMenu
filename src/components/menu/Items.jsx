import React, { useState, useEffect } from 'react';
import Item from "./Item";
import { useOutletContext } from 'react-router-dom';

export default function Items() {

    const { selectedCategory, filteredMenuItems, menuItems, cartItems, setCartItems} = useOutletContext();
    
    console.log("filteredMenuItems:", filteredMenuItems);
//.........................................................................................
    // const updatedfilteredMenuItems = filteredMenuItems.map(category => ({
    //     ...category,
    //     items: category.items.map(item => ({
    //       ...item,
    //       quantity: 1,
    //     })),
    //   }));

    // const updatedMenuItems = menuItems.map(category => ({
    //     ...category,
    //     items: category.items.map(item => ({
    //       ...item,
    //       quantity: 1,
    //     })),
    //   }));

    // Save cart items to local storage whenever cartItems change
    //   useEffect(() => {
    //     const updatedCartItems = cartItems.map((item) => ({
    //         ...item,
    //         quantity: 1,
    //       }));
    //     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    //   }, [cartItems]);
//.................................................................................


    // Save cart items to local storage whenever cartItems change
      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, [cartItems]);

//..........................................................................................
    // return (
    //     <div>
    //         <div className="p-4">
    //             <div className="flex flex-col items-center">
    //                 <h1 className="text-2xl font-bold text-center mb-6">
    //                     Our Menus
    //                 </h1>
    //                 <div className="w-full max-w-6xl">
    //                     {selectedCategory
    //                         ? (
    //                             <Item menu={updatedfilteredMenuItems} cartItems={cartItems}></Item>
    //                         )
    //                         : updatedMenuItems.map((menus, idx) => (
    //                             <Item key={idx} menu={menus} cartItems={cartItems} setCartItems={setCartItems}></Item>
    //                         ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    
    //.....................................................................................

    return (
      <div>
          <div className="p-4">
              <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-center mb-6">
                      Our Menus
                  </h1>
                  <div className="w-full max-w-6xl">
                      {selectedCategory
                          ? (
                              <Item menu={filteredMenuItems} cartItems={cartItems} setCartItems={setCartItems}></Item>
                          )
                          : menuItems.map((menus, idx) => (
                              <Item key={idx} menu={menus} cartItems={cartItems} setCartItems={setCartItems}></Item>
                          ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

