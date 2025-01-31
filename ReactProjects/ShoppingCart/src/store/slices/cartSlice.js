import { createSlice } from '@reduxjs/toolkit'; 
import data from "../data/productsData"

console.log("Product data in cartslice", data)

const initialState = { 
    
  products: [
    {
        id: data.id,
        name: data.title,
        price: data.price,
        quantity: 0
    }
  ]
}; 

export const productsSlice = createSlice({ 

// An unique name of a slice 
name: 'product', 

// Initial state value of the reducer 
initialState, 

// Reducer methods 
reducers: { 
	addProduct: (state, { payload }) => { 
	state.name.push(payload); 
	}, 

	removeProduct: (state, { payload }) => { 
        state.products = state.products.filter((product) => product.id !== action.payload )
	}, 
}, 
}); 

// Action creators for each reducer method 
export const { addProduct, removeProduct } 
			= productsSlice.actions; 
			
export default productsSlice.reducer;
