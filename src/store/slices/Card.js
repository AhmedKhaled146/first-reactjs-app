import { createSlice } from "@reduxjs/toolkit";

const cartArray = createSlice({
  name: "cartArray",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (!state.some((item) => item.id === action.payload.id)) {
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
            brand: action.payload.brand,
            image: action.payload.thumbnail,
            price: action.payload.price,
            quantity: 1,
            stock: action.payload.stock,
          },
        ];
      }
      return state;
    },
    increaseQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    addProductWQuantity: (state, action) => {
      if (!state.some((item) => item.id === action.payload.item.id)) {
        return [
          ...state,
          {
            id: action.payload.item.id,
            title: action.payload.item.title,
            brand: action.payload.item.brand,
            image: action.payload.item.thumbnail,
            price: action.payload.item.price,
            quantity: action.payload.quantity,
            stock: action.payload.item.stock,
          },
        ];
      }
      return state;
    },
  },
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  addProductWQuantity,
} = cartArray.actions;
export default cartArray.reducer;
