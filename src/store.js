import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartTotal = createSlice({
  name: 'cart',
  initialState: [], 
  reducers: {
    addCart(state, action) {

    },

    calculateCartTotal() {
      return 0; 
    },
  },
});

export let {addCart, calculateCartTotal } = cartTotal.actions;

export default configureStore({
  reducer: {
    cartTotal: cartTotal.reducer
  },
});
