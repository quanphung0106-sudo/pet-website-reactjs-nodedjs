import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:
    // JSON.parse(localStorage.getItem('item')) ||
    {
      products: [],
      quantity: 0,
      total: 0,
    },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      // localStorage.setItem('item', JSON.stringify(state));
    },
    deleteItem: (state, action) => {
      // state.products = state.products.filter((item) => {
      //   // return item.itemId !== action.payload.itemId;
      //   console.log('product', item);
      //   console.log('item.itemId', item.itemId);
      //   console.log('itemId payload', action.payload.itemId);
      // });
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      return state;
    },
  },
});

export const { addProduct, reset, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
