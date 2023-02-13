import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      const item = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.amount++;
      } else {
        state.cartProducts.push({ ...action.payload, amount: 1 });
      }
    },
    decreaseItem: (state, action) => {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      if (item.amount > 1) {
        item.amount--;
      } else {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );
    },
    removeAllItems: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeItem, removeAllItems, decreaseItem } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartProducts;

export default cartSlice.reducer;
