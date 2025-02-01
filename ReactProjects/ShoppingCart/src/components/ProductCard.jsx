import React from 'react';
import data from "../data/productsData";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';

export default function Card() {
  // console.log(data);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {data ? data.map((item, index) => (
         <div key={index} className='card w-64 bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out m-3'>
           <div className='img-container h-48'>
             <img 
               src={item.img}
               alt={item.title}
               className='object-cover h-full w-full'
             />
           </div>
           <div className='p-4 text-center'>
             <h1 className='text-lg font-semibold text-gray-800 mb-2'>{item.title}</h1>
             <p className='text-sm text-gray-600 mb-4'>Price: {item.price}</p>
             <button className='px-4 py-2 bg-green-600  text-white rounded-xl hover:bg-green-700 transition-colors duration-300' onClick={() => dispatch(addItem(item))}>Add to Cart</button>
           </div>
         </div>
      )) : "Something went wrong"}
    </div>
  );
}
