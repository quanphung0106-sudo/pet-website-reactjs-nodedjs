import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:
    // JSON.parse(localStorage.getItem('item')) ||
    {
      products: [],
      quantity: 0,
      total: 0,
      isFetching: false,
    },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      // localStorage.setItem('item', JSON.stringify(state));
    },
    fetchData: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.isFetching = true;
    },
    deleteItem: (state, action) => {
      state.products = action.payload.idItem;
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, fetchData, deleteItem, reset } = cartSlice.actions;
export default cartSlice.reducer;
