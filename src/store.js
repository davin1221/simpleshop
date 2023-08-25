import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

// state 생성 
const cart = createSlice({
    name: 'cart',
    initialState : [
        {cartId: 'cart'+1 , id: 0, name: 'SPACED LETTER NECKLACE', color: 'rose_gold', quantity: 1 },
        {cartId: 'cart'+2 , id: 1, name: 'DIAMOND VIRGO EARRING', color: 'gold', quantity: 2 },
        {cartId: 'cart'+3 , id: 2, name: '3 DIAMOND BRACELET', color: 'white_gold', quantity: 3 }
    ]
})





export default configureStore({
  reducer: {
    cart : cart.reducer,
    user : user.reducer
   }
})  