import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addTocart(state,action){
            state.items.push(action.payload);
        },
        removeFromCart(state,action){
            state.items.filter(item=>item.uniqueId!==action.payload);
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
});

export default store;