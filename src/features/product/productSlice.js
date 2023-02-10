import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const selectProducts = (state) => state.products;

export default productSlice.reducer;
