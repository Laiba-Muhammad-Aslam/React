import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart'; 

function Header() {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items); 

  return (
    <div className='bg-purple-700 flex items-center justify-between header p-4 text-white mb-10 sticky top-0'>
      <div className='font-extrabold text-2xl'><h1>Redux Store</h1></div>
      <div className='flex items-center justify-between'>
        <ul className='flex gap-4 font-medium'>
          <li>Home</li>
          <li className='mr-5'>My Products</li>
        </ul>
        <div className='relative'>
          <button 
            className='flex font-medium'
            onClick={() => setShowCart(!showCart)} 
          >
            <img 
              src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" 
              alt="cartIcon" 
              className='w-7 text-white mr-1' 
            />
            <span>{cartItems.length}</span>
          </button>

          {showCart && (
            <div className='absolute top-10 right-0 bg-white text-black shadow-lg rounded-lg w-96'>
              <Cart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
