import React from 'react'
import Item from "./Item";
import { useOutletContext } from 'react-router-dom';

export default function Items() {

    const { selectedCategory, filteredMenuItems, menuItems, handleAddToCart, cartItems, setCartItems } = useOutletContext();

    return (
        <div>
            <div className="p-4">
                <div>
                    <h1 className="text-2xl font-bold text-center mb-6 ml-8">
                        {" "}
                        Our Menus
                    </h1>
                    {selectedCategory
                        ?(
                            <Item menu={filteredMenuItems} cartItems={cartItems} setCartItems={setCartItems} ></Item>
                        )
                        : menuItems.map((menus, idx) => (
                            <Item key={idx} menu={menus} cartItems={cartItems} setCartItems={setCartItems}></Item>
                        ))}
                </div>
            </div>
        </div>
    )
}
