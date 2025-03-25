import React from "react";
import logo from "/assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase.init";



export default function Navbar({
  menuItems,
  selectedCategory,
  setSelectedCategory,
}) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSignOut = async () => {
    try {
      setError(null);
      await signOut(auth);
      console.log('User signed out');
      navigate('/'); 
    } catch (error) {
      setError(error.message);
      console.error('Sign out error:', error);
    }
  };

  return (
    <>
      <nav className="bg-black shadow-md p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div>
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

        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center" onClick={() => navigate('/menu')}>
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <div>
        <button
                 onClick={handleSignOut}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
              >
                Sign Out
              </button>
        </div>
      </nav>
    </>
  );
}
