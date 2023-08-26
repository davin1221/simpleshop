import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
    name: 'cart',
    initialState : [
        {cartId: 'cart'+1 , id: 0, color: 'rose_gold', quantity: 1 },
        {cartId: 'cart'+2 , id: 1, color: 'gold', quantity: 2 },
        {cartId: 'cart'+3 , id: 2, color: 'white_gold', quantity: 3 }
    ], 
    reducers : { 
        
    }
})


// export let { changeName, changeAge } = user.actions

export default cart;