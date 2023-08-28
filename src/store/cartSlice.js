import { createSlice } from "@reduxjs/toolkit"


let cartData = JSON.parse(localStorage.getItem('cart'));

const cart = createSlice({
    name: 'cart',
    initialState : cartData ? [cartData] : [], 
    reducers : { 
        addCart(state, action) {
            localStorage.setItem("cart", JSON.stringify(action.payload))
        }

    }
})


export let { addCart } = cart.actions;

export default cart;