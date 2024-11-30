import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "mycart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addtoCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    cartIncrement(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    cartDecrement(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeFromcart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {addtoCart,cartIncrement,cartDecrement,removeFromcart,clearCart }= CartSlice.actions

 export default CartSlice.reducer