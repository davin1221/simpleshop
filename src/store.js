import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartId = createSlice({
  name: 'cartId',
  initialState: 0, 
  reducers: {
    plusId(state) {
        return state + 1; 
    }
  },
});

const calculatePrice = createSlice({
    name: 'calculatePrice',
    initialState: false,
    reducers: { 
        reCalculate(state) {
            return !state;
        }
    }
})


export let { plusId } = cartId.actions;
export let { reCalculate } = calculatePrice.actions;

export default configureStore({
  reducer: {
    cartId: cartId.reducer,
    calculatePrice : calculatePrice.reducer
  },
});
