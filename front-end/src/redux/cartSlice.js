import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteItem: (state, action) => {
      state.products = action.payload;
    },
    reset: (state) => {
      return state;
    },
  },
});

export const { addProduct, reset, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
