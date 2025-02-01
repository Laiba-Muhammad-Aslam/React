import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/slices/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items in the cart.</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b border-gray-200 py-4">
                <div className="flex items-center">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover mr-4 rounded-lg" 
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400" 
                    onClick={() => dispatch(decrementQuantity(item.id))} 
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400" 
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                  <button 
                    className="ml-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600" 
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <h3 className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
