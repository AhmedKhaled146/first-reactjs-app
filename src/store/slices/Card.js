import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const removedItem = state.items.find((item) => item.id === action.payload.id);
      if (removedItem) {
        state.count -= removedItem.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },


    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.count += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.count -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
