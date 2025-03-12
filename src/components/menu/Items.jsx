import React from 'react'
import Item from "./Item";

export default function Items({ selectedCategory, filteredMenuItems, menuItems }) {
    return (
        <div>
            <div className="p-4">
                <div>
                    <h1 className="text-2xl font-bold text-center mb-6 ml-8">
                        {" "}
                        Our Menus
                    </h1>
                    {selectedCategory
                        ? filteredMenuItems && (
                            <Item menu={filteredMenuItems}></Item>
                        )
                        : menuItems.map((menus, idx) => (
                            <Item key={idx} menu={menus}></Item>
                        ))}
                </div>
            </div>
        </div>
    )
}
